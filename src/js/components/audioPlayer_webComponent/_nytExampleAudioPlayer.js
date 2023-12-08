// @ts-nocheck

import { scopedQuerySelector } from "./scopedQuerySelectors"
import { classSelector, convertTime } from "./helpers"
import { styles } from "./styles"

const playbackSpeeds = [0.5, 0.75, 1, 1.25, 1.5, 2]

export const init = (templateId = "audio-player-nyt-template") => {
  class AudioPlayer extends HTMLElement {
    constructor() {
      super()
      const tempalteId = this.dataset.templateId || templateId
      const template = document.querySelector(`#${tempalteId}`)
      const templateContent = template.content
      const shadow = this.attachShadow({ mode: "open" })
      shadow.appendChild(templateContent.cloneNode(true))
    }

    connectedCallback() {
      initAudioStyles(this)
      initAudioPlayer(this)
    }
  }

  const initAudioStyles = (element) => {
    // Extract the base class name from the data-base-class attribute on the element root
    const className = element.dataset.baseClass

    const shadow = element.shadowRoot
    // Create a style element and add the styles to it
    const style = document.createElement("style")
    style.textContent = styles[className](className)
    shadow.prepend(style)

    // Add the base class to the root element
    const rootEl = shadow.querySelector(".root-element")
    rootEl.classList.add(className)
  }

  const initAudioPlayer = (element) => {
    // Grab the audio src from the data-src attribute on the element root
    const audioSrc = element.dataset.src
    const className = element.dataset.baseClass
    const audioPlayerEl = element.shadowRoot.querySelector(`.${className}`)

    const selector = classSelector(className)
    const {
      audioEl,
      playBtnEl,
      pauseBtnEl,
      currentTimeEl,
      durationEl,
      seekSliderEl,
      seekSliderBtnEl,
      volumeSliderEl,
      muteBtnEl,
      unMuteBtnEl,
      playbackSpeedBtnEl,
    } = scopedQuerySelector(audioPlayerEl, selector)

    const showAudioBtnEl = element.shadowRoot.querySelector(".show-audio-btn")

    let rAF
    let prevVolume = 100
    let paybackSpeedPos = 2

    // *** DOM UPDATE FUNCTIONS *** //
    /**
     * Update the play button state
     */
    const updatePlayBtnState = () => {
      const currentPlayState = audioPlayerEl.dataset.playing
      const updatedPlayState = currentPlayState === "true" ? "false" : "true"
      audioPlayerEl.dataset.playing = updatedPlayState
    }

    /**
     * Update the mute button state
     */
    const updateMuteBtnState = () => {
      const currentMuteState = audioPlayerEl.dataset.muted
      const updatedMuteState = currentMuteState === "true" ? "false" : "true"
      audioPlayerEl.dataset.muted = updatedMuteState
    }
    // * ====================================== * //
    // * ====================================== * //

    // *** UTIL FUNCTIONS *** //
    /**
     * While playing, update the seek slider value and the current time
     */
    const whilePlaying = () => {
      // Get the current time in seconds
      seekSliderEl.value = Math.floor(audioEl.currentTime).toString()

      // Update the current time
      currentTimeEl.textContent = convertTime(
        Number(seekSliderEl.value),
      ).toString()

      // Update the seek before width
      audioPlayerEl.style.setProperty(
        "--seek-before-width",
        `${(Number(seekSliderEl.value) / Number(seekSliderEl.max)) * 100}%`,
      )

      // Update the buffered amount display
      displayBufferedAmount()

      // Call this function again when the browser is ready
      rAF = requestAnimationFrame(whilePlaying)

      // Once the audio has finished playing, reset the player
      if (audioEl.currentTime === audioEl.duration) {
        resetPlayer()
      }
    }

    /**
     * Get the buffered amount and update the CSS variable
     */
    const displayBufferedAmount = () => {
      const bufferedAmount =
        audioEl.buffered.length > 0
          ? Math.floor(audioEl.buffered.end(audioEl.buffered.length - 1))
          : 0

      audioPlayerEl.style.setProperty(
        "--buffered-width",
        `${(bufferedAmount / Number(seekSliderEl.max)) * 100}%`,
      )
    }

    /**
     * Reset the player to the initial state
     */
    const resetPlayer = () => {
      cancelAnimationFrame(rAF)
      audioEl.pause()
      audioPlayerEl.dataset.playing = "false"
      audioEl.currentTime = 0
      seekSliderEl.value = "0"
      audioPlayerEl.style.setProperty("--seek-before-width", "0%")
    }
    // * ====================================== * //
    // * ====================================== * //

    // *** EVENT HANDLERS *** //

    /**
     * Hande the play button click
     * Update the play button state and play the audio
     */
    const handlePlay = () => {
      updatePlayBtnState()
      audioEl.play()
      requestAnimationFrame(whilePlaying)
    }

    /**
     * Handle the pause button click
     * Update the play button state and pause the audio
     */
    const handlePause = () => {
      updatePlayBtnState()
      audioEl.pause()
      cancelAnimationFrame(rAF)
    }

    /**
     * Handle the mute button click
     * Update the audio muted state and the mute button state
     */
    const handleMute = () => {
      updateMuteBtnState()

      audioEl.muted = !audioEl.muted

      if (audioEl.muted) {
        prevVolume = Number(volumeSliderEl.value)
        volumeSliderEl.value = "0"
      } else {
        volumeSliderEl.value = prevVolume.toString()
      }
    }

    /**
     * On audio load, update the duration and the seek slider max value
     */
    const handleAudioLoad = () => {
      const duration = audioEl.duration
      durationEl.textContent = convertTime(duration)
      seekSliderEl.max = Math.floor(duration).toString()
      displayBufferedAmount()
    }

    /**
     * On Seek slider value change, update the currentTime
     * This triggers while the user is moving the slider
     *
     * This will update the time display without affecting the audio
     */
    const handleUpdateCurrentTime = () => {
      currentTimeEl.textContent = convertTime(Number(seekSliderEl.value))
      if (!audioEl.paused) {
        cancelAnimationFrame(rAF)
      }
    }

    /**
     * On Seek slider value change, update the currentTime
     * This only triggers after the user stops moving the slider
     *
     * This will update the audio play position
     */
    const handleSeekSliderChange = () => {
      audioEl.currentTime = Number(seekSliderEl.value)
      if (!audioEl.paused) {
        requestAnimationFrame(whilePlaying)
      }
    }

    /**
     * Update the audio volume and the display of the audio volume
     * @param e Event
     */
    const handleVolumeChange = (e) => {
      const value = e.target.value

      audioEl.volume = Number(value) / 100

      // Account for the mute button being clicked while the volume slider moved
      if (audioEl.muted) {
        prevVolume = Number(value)
      }
    }

    /**
     * Update the audio playback speed on Button click
     * Cycle through the playback speeds
     * @param e Event
     */
    const handelPlaybackSpeedBtnClick = (e) => {
      const playbackSpeedsLastIndex = playbackSpeeds.length - 1

      paybackSpeedPos =
        paybackSpeedPos === playbackSpeedsLastIndex ? 0 : paybackSpeedPos + 1
      audioEl.playbackRate = playbackSpeeds[paybackSpeedPos]
      playbackSpeedBtnEl.textContent = `${playbackSpeeds[paybackSpeedPos]}x`
    }
    // * ====================================== * //
    // * ====================================== * //

    // Pull src from the data-src attribute on the element root
    audioEl.src = audioSrc

    // *** REGISTER EVENTS LISTENERS *** //
    playBtnEl?.addEventListener("click", handlePlay)
    pauseBtnEl?.addEventListener("click", handlePause)
    seekSliderEl.addEventListener("input", handleUpdateCurrentTime)
    seekSliderEl.addEventListener("change", handleSeekSliderChange)

    volumeSliderEl?.addEventListener("input", handleVolumeChange)
    muteBtnEl?.addEventListener("click", handleMute)
    unMuteBtnEl?.addEventListener("click", handleMute)
    playbackSpeedBtnEl?.addEventListener("click", handelPlaybackSpeedBtnClick)

    // TODO figure out how check if the audio is being controlled by another source
    // audioEl.addEventListener("playing", handlePlayEvent)
    // audioEl.addEventListener("pause", handlePauseEvent)

    // If the audio element is already loaded, else add a listener
    if (audioEl.readyState > 0) {
      handleAudioLoad()
    } else {
      audioEl.addEventListener("loadedmetadata", handleAudioLoad)
    }
  }

  customElements.define("audio-player-nyt", AudioPlayer)
}

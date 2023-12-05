// @ts-nocheck
/**
 * Create a bem class string
 * @param base the base class name
 * @returns {Function} function that takes a class name and returns a bem class string
 */
const className = (base) => (className) =>
  className ? `${base}__${className}` : base

const cn = className("audio-player")

const selector = (className) => `.${cn(className)}`

const styles = `
  :host {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  .audio-player {
    --buffered-width: 0%;
    --track-unselected-color: #888;
    --track-selected-color: #ddd;
    --track-bufffered-color: #999;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    width: 600px;
    padding: 1.25rem 1.5rem;
    border-radius: 4px;
    gap: 0.66rem;
    color: #fff;
    background-color: #333;
  }
  .audio-player button {
    background: rgba(0, 0, 0, 0);
    border: none;
    width: 100%;
    height: 100%;
    max-width: 42px;
    max-height: 42px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
  .audio-player button:hover svg {
    fill: rgb(0, 100, 256);
  }
  .audio-player button:focus {
    outline: rgb(0, 78, 213);
  }
  .audio-player button svg {
    width: 100%;
    height: 100%;
    fill: #fff;  
  }
  .audio-player input[type=range] {
    appearance: none;
    width: 100%;
    outline: none;
    overflow: hidden;
    border-radius: 16px;
    cursor: pointer;
  }
  .audio-player input[type=range]::-webkit-slider-runnable-track {
    height: 15px;
    border-radius: 16px;
    background: linear-gradient(to right, var(--track-bufffered-color) var(--buffered-width), var(--track-unselected-color) var(--buffered-width));
  }
  .audio-player input[type=range]::-moz-range-track {
    height: 15px;
    background: var(--track-bufffered-color);
    border-radius: 16px;
  }
  .audio-player input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    height: 15px;
    width: 15px;
    background-color: rgb(0, 78, 213);
    border-radius: 50%;
    border: 2px solid rgb(97, 144, 226);
    box-shadow: -807px 0 0 800px var(--track-selected-color);
  }
  .audio-player input[type=range]::-moz-range-thumb {
    height: 15px;
    width: 15px;
    background-color: rgb(0, 78, 213);
    border-radius: 50%;
    border: 1px solid rgb(97, 144, 226);
    box-shadow: -807px 0 0 800px var(--track-selected-color);
  }
  .audio-player__play-state-button {
    justify-self: center;
    position: relative;
    width: 100%;
    height: 100%;
    max-width: 42px;
    max-height: 42px;
  }
  .audio-player__play, .audio-player__pause {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    pointer-events: none;
  }
  /*.audio-player__forward-30 {
    justify-self: end;
  }*/
  .audio-player__volume-slider[type=range]::-webkit-slider-runnable-track {
    background: var(--track-unselected-color) !important;
    border-radius: 16px;
  }
  .audio-player__progress-bar {
    grid-area: auto/1/auto/-1;
    display: flex;
    gap: 1rem;
    align-items: center;
  }
  .audio-player .playback-speed-wrapper {
    /* grid-area: auto/1/auto/3;
    width: calc(50% - 8px); */
    width: 100%;
    justify-self: start;
    font-size: 1rem;
  }
  .audio-player__playback-speed {
    background-color: rgb(97 144 226);
    border: 2px solid rgb(0 93 255);
    padding: 0.25rem;
    border-radius: 8px;
    font-size: 16px;
    width: 100%;

  }
  .audio-player__playback-speed-label:not(.show-label) {
    position: absolute;
    left: -10000px;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
  }
  .audio-player__volume {
    display: flex;
    align-items: center;
    align-content: center;
    gap: 0.5rem;
  }
  .audio-player__volume-display {
    width: 35px;
    text-align: center;
  }
  .audio-player__volume-slider {
    flex: 1;
  }
  .audio-player__mute {
    width: 32px;
    height: 32px;
    position: relative;
    top: 0;
    left: 0;
  }
  .audio-player__mute .mute-x-mark {
    position: absolute;
    left: 25%;
    top: 50%;
    width: 33%;
    height: 33%;
    transition: opacity 0.2s ease-in-out, transform 0.2s ease-in-out;
    pointer-events: none;
    opacity: 0;
    transform: translate(100%, -50%);
  }
  .audio-player[data-playing=true] .audio-player__pause {
    opacity: 1;
    pointer-events: all;
  }
  .audio-player[data-playing=false] .audio-player__play {
    opacity: 1;
    pointer-events: all;
  }
  .audio-player[data-muted=true] .audio-player__mute {
    fill: red;
  }
  .audio-player[data-muted=true] .audio-player__mute .mute-x-mark {
    pointer-events: all;
    opacity: 1;
    transform: translate(200%, -50%);
  }
`

/**
 * Convert seconds to minutes and seconds
 * @param time
 * @returns string of minutes and seconds
 */
const convertTime = (time) => {
  const minutes = Math.floor(time / 60)
  const seconds = Math.floor(time % 60)
  const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`
  return `${minutes}:${returnedSeconds}`
}

export const init = () => {
  class AudioPlayer extends HTMLElement {
    constructor() {
      super()
      const template = document.querySelector("#audio-player-template")
      const templateContent = template.content
      console.log("templateContent ==>", templateContent)

      const shadow = this.attachShadow({ mode: "open" })
      shadow.appendChild(templateContent.cloneNode(true))
    }

    connectedCallback() {
      initAudioStyles(this)
      initAudioPlayer(this)
    }
  }

  const initAudioStyles = (element) => {
    const shadow = element.shadowRoot
    const style = document.createElement("style")
    style.textContent = styles
    shadow.prepend(style)
  }

  const initAudioPlayer = (element) => {
    const audioSrc = element.dataset.src

    const shadow = element.shadowRoot
    const audioPlayerEl = shadow.querySelector(".audio-player")
    const audioEl = audioPlayerEl.querySelector("audio")
    const playBtnEl = audioPlayerEl.querySelector(selector("play"))
    const pauseBtnEl = audioPlayerEl.querySelector(selector("pause"))
    const currentTimeEl = audioPlayerEl.querySelector(selector("current-time"))
    const durationEl = audioPlayerEl.querySelector(selector("duration"))
    const seekSliderEl = audioPlayerEl.querySelector(selector("seek-slider"))
    // const fowardBtnEl = audioPlayerEl.querySelector(selector("forward-30"))
    // const rewindBtnEl = audioPlayerEl.querySelector(selector("prev-30"))
    const volumeSliderEl = audioPlayerEl.querySelector(
      selector("volume-slider"),
    )
    const volumnDisplayEl = audioPlayerEl.querySelector(
      selector("volume-display"),
    )
    const muteBtnEl = audioPlayerEl.querySelector(selector("mute"))
    const playbackSpeedEl = audioPlayerEl.querySelector(
      selector("playback-speed"),
    )

    let rAF

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
    const handleSkipForward = () => {
      audioEl.currentTime += 30
    }
    const handleSkipReverse = () => {
      audioEl.currentTime -= 30
    }

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
      volumnDisplayEl.textContent = value
      audioEl.volume = Number(value) / 100
    }

    /**
     * Update the audio playback speed
     * @param e Event
     */
    const handlePlaybackSpeedChange = (e) => {
      audioEl.playbackRate = Number(e.target.value)
    }
    // * ====================================== * //
    // * ====================================== * //

    // Pull src from the data-src attribute on the element root
    audioEl.src = audioSrc

    // *** REGISTER EVENTS LISTENERS *** //
    playBtnEl.addEventListener("click", handlePlay)
    pauseBtnEl.addEventListener("click", handlePause)
    seekSliderEl.addEventListener("input", handleUpdateCurrentTime)
    seekSliderEl.addEventListener("change", handleSeekSliderChange)
    // ?Remove Skip Buttons for now
    // fowardBtnEl.addEventListener("click", handleSkipForward)
    // rewindBtnEl.addEventListener("click", handleSkipReverse)
    volumeSliderEl.addEventListener("input", handleVolumeChange)
    muteBtnEl.addEventListener("click", handleMute)
    playbackSpeedEl.addEventListener("change", handlePlaybackSpeedChange)
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

  customElements.define("audio-player", AudioPlayer)
}

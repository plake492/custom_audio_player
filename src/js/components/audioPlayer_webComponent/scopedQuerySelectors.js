// @ts-nocheck

export const scopedQuerySelector = (element, selector) => {
  const audioEl = element.querySelector("audio")
  const playBtnEl = element.querySelector(".play")
  const pauseBtnEl = element.querySelector(".pause")
  const currentTimeEl = element.querySelector(".current-time")
  const durationEl = element.querySelector(".duration")
  const seekSliderEl = element.querySelector(".seek-slider")
  const seekSliderBtnEl = element.querySelector(".seek-btn")
  const fowardBtnEl = element.querySelector(".skip-forward")
  const rewindBtnEl = element.querySelector(".skip-back")
  const volumeSliderEl = element.querySelector(".volume-slider")
  const volumnDisplayEl = element.querySelector(".volume-display")
  const muteBtnEl = element.querySelector(".mute")
  const unMuteBtnEl = element.querySelector(".unmute")
  const playbackSpeedEl = element.querySelector(".playback-speed")
  const playbackSpeedBtnEl = element.querySelector(".playback-speed-btn")
  const seekBtnEl = element.querySelector(".seek-btn")
  const downArrowEl = element.querySelector(".down-arrow")
  const playbackSpeedBtnLessEl = element.querySelector(".playback-speed-less")
  const playbackSpeedBtnMoreEl = element.querySelector(".playback-speed-more")
  const playbackSpeedDisplayEl = element.querySelector(".playback-speed-amount")

  return {
    audioEl,
    playBtnEl,
    pauseBtnEl,
    currentTimeEl,
    durationEl,
    seekSliderEl,
    seekSliderBtnEl,
    fowardBtnEl,
    rewindBtnEl,
    volumeSliderEl,
    volumnDisplayEl,
    muteBtnEl,
    unMuteBtnEl,
    playbackSpeedEl,
    playbackSpeedBtnEl,
    downArrowEl,
    playbackSpeedBtnLessEl,
    playbackSpeedBtnMoreEl,
    playbackSpeedDisplayEl,
  }
}

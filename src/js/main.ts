// import { init as audioPlayer } from "@components/audioPlayer"
// import { init as audioPlayerWebComponent } from "@components/audioPlayer_webComponent"
import { init as initAudio } from "@components/audioPlayer_webComponent"
import "../scss/main.scss"

/**
 * Initialize the app
 */
;((): void => {
  window.addEventListener("load", () => {
    initAudio()
  })
})()

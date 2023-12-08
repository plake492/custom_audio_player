import { init as customAudioPlayerInit } from "./_customAudioPlayer"
import { init as popupAudioPlayerInit } from "./_popupAudioPlayer"
import { init as nytExampleAudioPlayerInit } from "./_nytExampleAudioPlayer"

export const init = () => {
  customAudioPlayerInit()
  popupAudioPlayerInit()
  nytExampleAudioPlayerInit()
}

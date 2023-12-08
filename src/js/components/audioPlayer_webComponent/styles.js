// @ts-nocheck

export const styles = {
  "custom-audio-player": (className) => `
    :host {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    }
    .${className} {
    --buffered-width: 0%;
    --track-unselected-color: #fff;
    --track-bufffered-color: #ddd;
    --track-selected-color: #aaa;
  
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    width: 600px;
    padding: 1.25rem 1.5rem;
    border-radius: 4px;
    gap: 0.66rem;
    background-color: #a1a1a160;
    backdrop-filter: blur(4px);
    }
    .${className} button {
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
    .${className} button:hover svg {
    fill: rgb(0, 100, 256);
    }
    .${className} button:focus {
    outline: rgb(0, 78, 213);
    }
    .${className} button svg {
    width: 100%;
    height: 100%;
    /* fill: #fff; */
    fill: #000;
    }
    .${className} input[type=range] {
    appearance: none;
    width: 100%;
    outline: none;
    overflow: hidden;
    border-radius: 16px;
    cursor: pointer;
    }
    .${className} input[type=range]::-webkit-slider-runnable-track {
    height: 15px;
    border-radius: 16px;
    background: linear-gradient(to right, var(--track-bufffered-color) var(--buffered-width), var(--track-unselected-color) var(--buffered-width));
    }
    .${className} input[type=range]::-moz-range-track {
    height: 15px;
    background: var(--track-bufffered-color);
    border-radius: 16px;
    }
    .${className} input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    height: 15px;
    width: 15px;
    background-color: rgb(0, 78, 213);
    border-radius: 50%;
    border: 2px solid rgb(97, 144, 226);
    box-shadow: -807px 0 0 800px var(--track-selected-color);
    }
    .${className} input[type=range]::-moz-range-thumb {
    height: 15px;
    width: 15px;
    background-color: rgb(0, 78, 213);
    border-radius: 50%;
    border: 1px solid rgb(97, 144, 226);
    box-shadow: -807px 0 0 800px var(--track-selected-color);
    }
    .play-state-button {
    justify-self: center;
    position: relative;
    width: 100%;
    height: 100%;
    max-width: 42px;
    max-height: 42px;
    }
    .play, .pause {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    pointer-events: none;
    }
    /*.forward-30 {
    justify-self: end;
    }*/
    .volume-slider[type=range]::-webkit-slider-runnable-track {
    background: var(--track-unselected-color) !important;
    border-radius: 16px;
    }
    .progress-bar {
    grid-area: auto/1/auto/-1;
    display: flex;
    gap: 1rem;
    align-items: center;
    }
    .${className} .playback-speed-wrapper {
    /* grid-area: auto/1/auto/3;
    width: calc(50% - 8px); */
    width: 100%;
    justify-self: start;
    font-size: 1rem;
    }
    .playback-speed {
    background-color: rgb(97 144 226);
    border: 2px solid rgb(0 93 255);
    padding: 0.25rem;
    border-radius: 8px;
    font-size: 16px;
    width: 100%;
    }
    .playback-speed-label:not(.show-label) {
    position: absolute;
    left: -10000px;
    top: auto;
    width: 1px;
    height: 1px;
    overflow: hidden;
    }
    .volume {
    display: flex;
    align-items: center;
    align-content: center;
    gap: 0.5rem;
    }
    .volume-display {
    width: 35px;
    text-align: center;
    }
    .volume-slider {
    flex: 1;
    }
    .mute {
    width: 32px;
    height: 32px;
    position: relative;
    top: 0;
    left: 0;
    }
    .mute .mute-x-mark {
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
    .${className}[data-playing=true] .pause {
    opacity: 1;
    pointer-events: all;
    }
    .${className}[data-playing=false] .play {
    opacity: 1;
    pointer-events: all;
    }
    .${className}[data-muted=true] .mute svg {
    fill: red;
    }
    .${className}[data-muted=true] .mute .mute-x-mark {
    pointer-events: all;
    opacity: 1;
    transform: translate(200%, -50%);
    }
  `,

  "nyt-audio-player": (className) => `
    :host {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }
    .${className} {
      --buffered-width: 0%;
      --track-unselected-color: #fff;
      --track-bufffered-color: # ddsd;
      --track-selected-color: #aaa;
      --bg-color: #f4f4f4;
      --btn-size: 38px;

      display: flex;
      align-items: center;
      padding: 0 1.5rem;
      border-radius: 2px;
      gap: 0.66rem;
      background: var(--bg-color);
      border: 1px solid #ebebeb;  
      border-radius: 2px;
    }
    .${className} button {
      background: rgba(0, 0, 0, 0);
      border: none;
      width: var(--btn-size);
      height: var(--btn-size);
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 0;
      transition: all 0.2s ease-in-out;
      cursor: pointer;
    }
    .${className} button:hover svg {
      fill: #666;
    }
    .${className} button:focus {
      outline: rgb(0, 78, 213);
    }
    .${className} button svg {
      width: 100%;
      height: 100%;
      fill: #000;
    }
    .${className} input[type=range] {
      appearance: none;
      outline: none;
      border-radius: 16px;
      cursor: pointer;
    }
    .${className} input[type=range]::-webkit-slider-runnable-track {
      height: 3px;
      border-radius: 16px;
      background: linear-gradient(to right, var(--track-bufffered-color) var(--buffered-width), var(--track-unselected-color) var(--buffered-width));
    }

    .${className} input[type=range]::-moz-range-track {
      height: 3px
      background: var(--track-bufffered-color);
      border-radius: 16px;
    }

    .${className} input[type=range]::-webkit-slider-thumb {
      -webkit-appearance: none; /* Override default look */
      margin-top: -6px; /* Centers thumb on the track */
      appearance: none;
      background-color: #000;
      border-radius: 50%;
      height: 15px;
      width: 15px;
      transition: all 0.2s ease-in-out;
    }

    .${className} input[type=range]::-moz-range-thumb {
      height: 3px;
      width: 3px;
      background-color: #000;
      border-radius: 50%;
      box-shadow: -807px 0 0 800px var(--track-selected-color);
    }

    .${className} .seek-slider[type=range] {
      width: 100%;
      height: 56px;
      position: relative;
      background: #0000;
      z-index: 1;
    }
    .${className} .seek-slider[type=range]::before {
      content: "";
      width: 100%;
      height: 3px;
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      background: #ccc;
      z-index: -1;
    }
    .${className} .seek-slider[type=range]::after {
      content: "";
      width: var(--seek-before-width, 0px);
      height: 3px;
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      background: #000;
      z-index: 1;
    }
    .${className} .play-state-button,
    .${className} .mute-state-button {
      justify-self: center;
      position: relative;
      width: var(--btn-size);
      height: var(--btn-size);
    }
    .${className} .play, 
    .${className} .pause,
    .${className} .mute,
    .${className} .unmute  {
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
      pointer-events: none;
    }
    .${className} .volume-vertical {
      position: relative;
    }
    .${className} .volume-vertical:hover .volume-slider-wrapper {
      opacity: 1;
      pointer-events: all;
    }
    .${className} .volume-slider-wrapper {
      position: absolute;
      left: 50%;
      transform: rotate(270deg) translate(0, -50%);
      transform-origin: left top;
      background: var(--bg-color);
      padding: 0.75rem 1rem;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.2s ease-in-out;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .${className} .volume-slider[type=range]::-webkit-slider-runnable-track {
      background: var(--track-unselected-color) !important;
      border-radius: 16px;
    }
    .${className} .progress-bar {
      flex: 1;
      display: flex;
      align-items: center;
      position: relative;
    }
    .${className} .time-display {
      display: flex;
      font-size: 0.865rem;
    }
    .${className} .playback-speed-btn {
      background-color: #0000;
      border: 1px solid #000;
      padding: 0.25rem 1.5rem;
      border-radius: 8px;
      font-size: 13px;
    }
    .${className} .volume {
      display: flex;
      align-items: center;
      align-content: center;
      gap: 0.5rem;
    }
    .${className} .volume-slider {
      flex: 1;
    }

    .${className}[data-playing=true] .pause {
      opacity: 1;
      pointer-events: all;
    }
    .${className}[data-playing=false] .play {
      opacity: 1;
      pointer-events: all;
    }
    .${className}[data-muted=true] .unmute {
      opacity: 1;
      pointer-events: all;
    }
    .${className}[data-muted=false] .mute {
      opacity: 1;
      pointer-events: all;
    }
  `,

  "popup-audio-player": (className) => `
      :host {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }

    .show-audio-btn {
      padding: 0.75rem 1.25rem;
      font-size: 1.25rem;
      border-radius: 40px;
      border: 1px solid #aaa;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      width: fit-content;
      transition: background-color 0.2s ease-in-out;
      cursor: pointer;
    }
    .show-audio-btn:hover {
      background-color: #ccc;
    }

    .show-audio-btn-wrapper {
      position: relative;
      width: 24px;
      height: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .show-audio-btn-headphones,
    .show-audio-btn-play {
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.2s ease-in-out;
    }

    .show-audio-btn[data-playing="false"][data-popup-open="false"] .show-audio-btn-headphones,
    .show-audio-btn[data-playing="true"][data-popup-open="true"] .show-audio-btn-play,
    .show-audio-btn[data-playing="false"][data-popup-open="true"] .show-audio-btn-play {
      opacity: 1;
      pointer-events: all;
    }

    @keyframes sound-bar {
      10% {box-shadow: inset 0 -20px 0}
      30% {box-shadow: inset 0 -16px 0}
      60% {box-shadow: inset 0 -12px 0}
      80% {box-shadow: inset 0 -22px 0}
      to {box-shadow: inset 0 -8px 0}
    }

    .loadbar-sound,
    .loadbar-sound::after,
    .loadbar-sound::before {
      display: block;
      box-sizing: border-box;
      width: 3px;
      height: 24px;
      box-shadow: inset 0 -24px 0;
      animation: sound-bar 1.5s ease infinite alternate;

    }
    .loadbar-sound {
      position: relative;
    }
    .loadbar-sound::after,
    .loadbar-sound::before {
      content: "";
      position: absolute;
      bottom: 0
    }
    .loadbar-sound::before {
      left: -5px;
      animation-delay: -2.4s
    }
    .loadbar-sound::after {
      right: -6px;
      animation-delay: -3.7s
    }

    .show-audio-btn[data-playing="false"][data-popup-open="true"] .loadbar-sound, 
    .show-audio-btn[data-playing="false"][data-popup-open="true"] .loadbar-sound:after, 
    .show-audio-btn[data-playing="false"][data-popup-open="true"] .loadbar-sound:before {
      animation-play-state: paused;
      box-shadow: inset 0 -2px 0 !important;
    }
  
    .audio-wrapper {
      position: fixed;
      bottom: 0;
      right: 32px;
      width: 400px;
      background-color: #333;
      z-index: 9999;
      transform: translateY(100%);
      transition: transform 1s ease-in-out;
      color: #000;
    }

    .audio-wrapper.show {
      transform: translateY(0);
    }
    .audio-wrapper.partial-show {
      transform: translateY(74%);
    }

    .${className} {
      --buffered-width: 0%;
      --track-unselected-color: #fff;
      --track-bufffered-color: # ddsd;
      --track-selected-color: #aaa;
      --bg-color: #fdfdfd;
      --btn-size: calc(46px + 1rem);

      padding: 1.5rem;
      background: var(--bg-color);
      border-radius: 2px;
      margin: 0 auto;
      max-width: 600px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      background-color: ##fafafa;

    }

    .${className} button {
      background: rgba(0, 0, 0, 0);
      border: none;
      width: var(--btn-size);
      height: var(--btn-size);
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 0;
      transition: all 0.2s ease-in-out;
      cursor: pointer;
    }

    .${className} .top {
      display: flex;
      flex-direction: column;
    }

    .partial-show .top {
      transition: all 0.2s ease-in-out;
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      justify-content: space-between;
    }

    .${className} .down-arrow {
      display: flex;
      justify-content: flex-end;
      width: 100%;
    }

    .${className} .progress-bar {
      width: 100%;
    }

    .${className} .seek-slider {
      width: 100%;
    }

    .${className} .time-display {
      display: flex;
      justify-content: space-between;
    }

    .${className} .controls-wrapper {
      display: flex;
      justify-content: center;
      gap: 2rem;
      margin-bottom: 1rem;
    }
    .${className} .play-state-button {
      justify-self: center;
      position: relative;
      width: var(--btn-size);
      height: var(--btn-size);
    }
    .${className} .play, 
    .${className} .pause {
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0;
      pointer-events: none;
      border-radius: 50%;
      padding: 1rem;
    }
    .${className} .skip-back,
    .${className} .skip-forward,
    .${className} .down-arrow svg {
      border-radius: 50%;
      padding: 1rem;
    }
    .${className} .down-arrow svg:hover,
    .${className} .play:hover, 
    .${className} .pause:hover,
    .${className} .skip-back:hover,
    .${className} .skip-forward:hover{
      background-color: #ddd;
    }
    
    .${className} .playback-speed-amount {
      width: 55px;
      text-align: center;
    }
    .${className} .playback-speed-wrapper {
      padding: 0.25rem 0.5rem;
      border-radius: 40px;
      border: 1px solid #aaa;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      width: fit-content;
      margin: 0 auto;
      transition: background-color 0.2s ease-in-out;
    }
    .${className} .playback-speed-wrapper:hover {
      background-color: #ccc;
    }
    .${className} .playback-speed-wrapper button {
      font-size: 2rem;
      height: calc(var(--btn-size) / 1.5);
    }
    .${className}[data-playing=true] .pause {
    opacity: 1;
    pointer-events: all;
    }
    .${className}[data-playing=false] .play {
    opacity: 1;
    pointer-events: all;
    }
    .${className} input[type=range] {
    appearance: none;
    outline: none;
    border-radius: 16px;
    cursor: pointer;
    }
    .${className} input[type=range]::-webkit-slider-runnable-track {
    height: 3px;
    border-radius: 16px;
    background: linear-gradient(to right, var(--track-bufffered-color) var(--buffered-width), var(--track-unselected-color) var(--buffered-width));
    }
    .${className} input[type=range]::-moz-range-track {
    height: 3px
    background: var(--track-bufffered-color);
    border-radius: 16px;
    }
    .${className} input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none; /* Override default look */
    appearance: none;
    background-color: #000;
    border-radius: 50%;
    height: 3px;
    width: 3px;
    transition: all 0.2s ease-in-out;
    }
    .${className} input[type=range]::-moz-range-thumb {
    height: 3px;
    width: 3px;
    background-color: #000;
    border-radius: 50%;
    box-shadow: -807px 0 0 800px var(--track-selected-color);
    }

    .${className} input[type=range]:hover::-webkit-slider-thumb,
    .${className} input[type=range]:hover::-moz-range-thumb {
    margin-top: -6px; /* Centers thumb on the track */
    transform: translatex(-6px);
    height: 15px;
    width: 15px;
    }
    .${className} .seek-slider[type=range] {
    width: 100%;
    height: 32px;
    position: relative;
    background: #0000;
    z-index: 1;
    }
    .${className} .seek-slider[type=range]::before {
    content: "";
    width: 100%;
    height: 3px;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    background: #ccc;
    z-index: -1;
    }
    .${className} .seek-slider[type=range]::after {
    content: "";
    width: var(--seek-before-width, 0px);
    height: 3px;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    background: #000;
    z-index: 1;
    }
  `,
}

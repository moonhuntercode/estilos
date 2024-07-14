// inside public folder ,config start
import javascriptLogo from "/javascript.svg";
import viteLogo from "/vite.svg";
import webComponentIcon from "/webcomponents-icon.png";
// inside public folder ,config end

import { setupCounter } from "./counter.js";

// import main styles
import "./components/main.css";

// polyfill of webcomponents start
import "@webcomponents/webcomponentsjs";
// polyfill of webcomponents end

// enable modern normalization with the following line below. 👇
import "./node_modules/modern-normalize/modern-normalize.css";
// modern normalize config end

// main web component start
import { MainTemplate } from "./components/main-template.js";

customElements.define("main-template", MainTemplate);
// main web component end

document.querySelector("#app").innerHTML =
  /*html*/
  ` 
  <div>

    <a target="_blank" 
     href="https://github.com/webcomponents/polyfills/tree/master/packages/webcomponentsjs#how-to-use">
    <img class="logo" 
    src="${webComponentIcon}" alt="web components logo - polyfill">
    </a>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <main-template></main-template>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite, js, or web components logo to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector("#counter"));

export class MainTemplate extends HTMLElement {
  constructor() {
    super();
    this.innerHTML =
      /*html*/
      `
            <div>
            <h1>Hello from the main web component</h1>
            <p>This is the main web component</p>
            <p>with polyfill from <a href="https://github.com/webcomponents/polyfills/tree/master/packages/webcomponentsjs#how-to-use">here</a> </p>
            </div>
            `;
  }
}

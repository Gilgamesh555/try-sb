import {
  spinner_styles_default
} from "./chunk.R6IJUYL6.js";
import {
  UIKitElement
} from "./chunk.YCDYUGC2.js";
import {
  component_styles_default
} from "./chunk.2NT3B5WJ.js";

// src/components/spinner/spinner.component.ts
import { html } from "lit";
var Spinner = class extends UIKitElement {
  // private readonly localize = new LocalizeController(this);
  render() {
    return html`
      <svg part="base" class="spinner" role="progressbar" aria-valuetext="loading">
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `;
  }
};
Spinner.styles = [component_styles_default, spinner_styles_default];

export {
  Spinner
};
//# sourceMappingURL=chunk.7Y2JEYX6.js.map

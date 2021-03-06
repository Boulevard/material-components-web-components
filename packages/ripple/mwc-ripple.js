var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
import { LitElement, html, property, customElement } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';
import { ripple } from './ripple-directive.js';
import { style } from './mwc-ripple-css.js';
let Ripple = class Ripple extends LitElement {
    constructor() {
        super(...arguments);
        this.primary = false;
        this.accent = false;
        this.unbounded = false;
        this.disabled = false;
        this.interactionNode = this;
    }
    renderStyle() {
        return style;
    }
    connectedCallback() {
        this.interactionNode = this.parentNode;
    }
    // TODO(sorvell) #css: sizing.
    render() {
        const classes = {
            'mdc-ripple-surface--primary': this.primary,
            'mdc-ripple-surface--accent': this.accent,
        };
        const { disabled, unbounded, active, interactionNode } = this;
        const rippleOptions = { disabled, unbounded, interactionNode };
        if (active !== undefined) {
            rippleOptions.active = active;
        }
        return html `
      ${this.renderStyle()}
      <div .ripple="${ripple(rippleOptions)}"
          class="mdc-ripple-surface ${classMap(classes)}"></div>`;
    }
};
__decorate([
    property({ type: Boolean })
], Ripple.prototype, "primary", void 0);
__decorate([
    property({ type: Boolean })
], Ripple.prototype, "active", void 0);
__decorate([
    property({ type: Boolean })
], Ripple.prototype, "accent", void 0);
__decorate([
    property({ type: Boolean })
], Ripple.prototype, "unbounded", void 0);
__decorate([
    property({ type: Boolean })
], Ripple.prototype, "disabled", void 0);
__decorate([
    property()
], Ripple.prototype, "interactionNode", void 0);
Ripple = __decorate([
    customElement('mwc-ripple')
], Ripple);
export { Ripple };
//# sourceMappingURL=mwc-ripple.js.map
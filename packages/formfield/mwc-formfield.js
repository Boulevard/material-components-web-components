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
import { html, BaseElement, property, query, observer } from '@material/mwc-base/base-element.js';
import { FormElement } from '@material/mwc-base/form-element.js';
import { classMap } from 'lit-html/directives/class-map.js';
import { findAssignedElement } from '@material/mwc-base/utils.js';
import { style } from './mwc-formfield-css.js';
import MDCFormFieldFoundation from '@material/form-field/foundation.js';
export class Formfield extends BaseElement {
    constructor() {
        super(...arguments);
        this.alignEnd = false;
        this.label = '';
        this.mdcFoundationClass = MDCFormFieldFoundation;
    }
    createAdapter() {
        return Object.assign({}, super.createAdapter(), { registerInteractionHandler: (type, handler) => {
                this.labelEl.addEventListener(type, handler);
            }, deregisterInteractionHandler: (type, handler) => {
                this.labelEl.removeEventListener(type, handler);
            }, activateInputRipple: () => {
                const input = this.input;
                if (input instanceof FormElement && input.ripple) {
                    input.ripple.activate();
                }
            }, deactivateInputRipple: () => {
                const input = this.input;
                if (input instanceof FormElement && input.ripple) {
                    input.ripple.deactivate();
                }
            } });
    }
    get input() {
        return findAssignedElement(this.slotEl, '*');
    }
    renderStyle() {
        return style;
    }
    render() {
        return html `${this.renderStyle()}
      <div class="mdc-form-field ${classMap({ 'mdc-form-field--align-end': this.alignEnd })}">
        <slot></slot>
        <label class="mdc-label" @click="${this._labelClick}">${this.label}</label>
      </div>`;
    }
    _labelClick() {
        const input = this.input;
        if (input) {
            input.focus();
            input.click();
        }
    }
}
__decorate([
    property({ type: Boolean })
], Formfield.prototype, "alignEnd", void 0);
__decorate([
    property({ type: String }),
    observer(async function (label) {
        const input = this.input;
        if (input) {
            if (input.localName === 'input') {
                input.setAttribute('aria-label', label);
            }
            else if (input instanceof FormElement) {
                await input.updateComplete;
                input.setAriaLabel(label);
            }
        }
    })
], Formfield.prototype, "label", void 0);
__decorate([
    query('.mdc-form-field')
], Formfield.prototype, "mdcRoot", void 0);
__decorate([
    query('slot')
], Formfield.prototype, "slotEl", void 0);
__decorate([
    query('label')
], Formfield.prototype, "labelEl", void 0);
customElements.define('mwc-formfield', Formfield);
//# sourceMappingURL=mwc-formfield.js.map
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
import { FormElement, html, property, observer, query, customElement } from '@material/mwc-base/form-element.js';
import { classMap } from 'lit-html/directives/class-map.js';
import { repeat } from 'lit-html/directives/repeat.js';
import { style } from './mwc-slider-css.js';
import MDCSliderFoundation from '@material/slider/foundation.js';
const { INPUT_EVENT, CHANGE_EVENT } = MDCSliderFoundation.strings;
let Slider = class Slider extends FormElement {
    constructor() {
        super(...arguments);
        this.mdcFoundationClass = MDCSliderFoundation;
        this.value = 0;
        this.min = 0;
        this.max = 100;
        this.step = 0;
        this.disabled = false;
        this.discrete = false;
        this.markers = false;
        this._numMarkers = 0;
    }
    renderStyle() {
        return style;
    }
    // TODO(sorvell) #css: needs a default width
    render() {
        const { value, min, max, step, disabled, discrete, markers, _numMarkers } = this;
        const hostClassInfo = {
            'mdc-slider--discrete': discrete,
            'mdc-slider--display-markers': markers && discrete,
        };
        return html `
      ${this.renderStyle()}
      <div class="mdc-slider ${classMap(hostClassInfo)}" tabindex="0" role="slider"
        aria-valuemin="${min}" aria-valuemax="${max}" aria-valuenow="${value}"
        aria-disabled="${disabled}" data-step="${step}">
      <div class="mdc-slider__track-container">
        <div class="mdc-slider__track"></div>
        ${discrete && markers ? html `<div class="mdc-slider__track-marker-container">
          ${repeat(new Array(_numMarkers), () => html `<div class="mdc-slider__track-marker"></div>`)}
        </div>` : ''}
      </div>
      <div class="mdc-slider__thumb-container">
        <!-- TODO: use cache() directive -->
        ${discrete ? html `<div class="mdc-slider__pin">
          <span class="mdc-slider__pin-value-marker"></span>
        </div>` : ''}
        <svg class="mdc-slider__thumb" width="21" height="21">
          <circle cx="10.5" cy="10.5" r="7.875"></circle>
        </svg>
        <div class="mdc-slider__focus-ring"></div>
      </div>
    </div>`;
    }
    createAdapter() {
        return Object.assign({}, super.createAdapter(), { getAttribute: (name) => this.mdcRoot.getAttribute(name), setAttribute: (name, value) => this.mdcRoot.setAttribute(name, value), removeAttribute: (name) => this.mdcRoot.removeAttribute(name), computeBoundingRect: () => this.mdcRoot.getBoundingClientRect(), getTabIndex: () => this.mdcRoot.tabIndex, registerInteractionHandler: (type, handler) => this.mdcRoot.addEventListener(type, handler), deregisterInteractionHandler: (type, handler) => this.mdcRoot.removeEventListener(type, handler), registerThumbContainerInteractionHandler: (type, handler) => this.thumbContainer.addEventListener(type, handler), deregisterThumbContainerInteractionHandler: (type, handler) => this.thumbContainer.removeEventListener(type, handler), registerBodyInteractionHandler: (type, handler) => document.body.addEventListener(type, handler), deregisterBodyInteractionHandler: (type, handler) => document.body.removeEventListener(type, handler), registerResizeHandler: (handler) => window.addEventListener('resize', handler), deregisterResizeHandler: (handler) => window.removeEventListener('resize', handler), notifyInput: () => {
                const value = this.mdcFoundation.getValue();
                if (value !== this.value) {
                    this.value = value;
                    this.dispatchEvent(new CustomEvent(INPUT_EVENT, { detail: this, bubbles: true, cancelable: true }));
                }
            }, notifyChange: () => {
                this.dispatchEvent(new CustomEvent(CHANGE_EVENT, { detail: this, bubbles: true, cancelable: true }));
            }, setThumbContainerStyleProperty: (propertyName, value) => this.thumbContainer.style.setProperty(propertyName, value), setTrackStyleProperty: (propertyName, value) => this.trackElement.style.setProperty(propertyName, value), setMarkerValue: (value) => this.pinMarker.innerText = value.toString(), appendTrackMarkers: (numMarkers) => this._numMarkers = numMarkers, removeTrackMarkers: () => { }, setLastTrackMarkersStyleProperty: (propertyName, value) => 
            // We remove and append new nodes, thus, the last track marker must be dynamically found.
            this.mdcRoot.querySelector('.mdc-slider__track-marker:last-child').
                style.setProperty(propertyName, value), isRTL: () => getComputedStyle(this.mdcRoot).direction === 'rtl' });
    }
    layout() {
        this.mdcFoundation.layout();
    }
};
__decorate([
    query('.mdc-slider')
], Slider.prototype, "mdcRoot", void 0);
__decorate([
    query('.mdc-slider')
], Slider.prototype, "formElement", void 0);
__decorate([
    query('.mdc-slider__thumb-container')
], Slider.prototype, "thumbContainer", void 0);
__decorate([
    query('.mdc-slider__track')
], Slider.prototype, "trackElement", void 0);
__decorate([
    query('.mdc-slider__pin-value-marker')
], Slider.prototype, "pinMarker", void 0);
__decorate([
    query('.mdc-slider__track-marker-container')
], Slider.prototype, "trackMarkerContainer", void 0);
__decorate([
    property({ type: Number }),
    observer(function (value) {
        1;
        this.mdcFoundation.setValue(value);
    })
], Slider.prototype, "value", void 0);
__decorate([
    property({ type: Number }),
    observer(function (value) {
        this.mdcFoundation.setMin(value);
    })
], Slider.prototype, "min", void 0);
__decorate([
    property({ type: Number }),
    observer(function (value) {
        this.mdcFoundation.setMax(value);
    })
], Slider.prototype, "max", void 0);
__decorate([
    property({ type: Number }),
    observer(function (value) {
        this.mdcFoundation.setStep(value);
    })
], Slider.prototype, "step", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    observer(function (value) {
        this.mdcFoundation.setDisabled(value);
    })
], Slider.prototype, "disabled", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], Slider.prototype, "discrete", void 0);
__decorate([
    property({ type: Boolean, reflect: true }),
    observer(function () {
        this.mdcFoundation.setupTrackMarker();
    })
], Slider.prototype, "markers", void 0);
__decorate([
    property({ type: Number })
], Slider.prototype, "_numMarkers", void 0);
Slider = __decorate([
    customElement('mwc-slider')
], Slider);
export { Slider };
//# sourceMappingURL=mwc-slider.js.map
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
import { BaseElement, html, property, query, customElement } from '@material/mwc-base/base-element.js';
import { classMap } from 'lit-html/directives/class-map.js';
import MDCSlidingTabIndicatorFoundation from '@material/tab-indicator/sliding-foundation.js';
import MDCFadingTabIndicatorFoundation from '@material/tab-indicator/fading-foundation.js';
import { style } from './mwc-tab-indicator-css.js';
let TabIndicator = class TabIndicator extends BaseElement {
    constructor() {
        super(...arguments);
        this.icon = '';
        this.fade = false;
    }
    get mdcFoundationClass() {
        return this.fade ? MDCFadingTabIndicatorFoundation : MDCSlidingTabIndicatorFoundation;
    }
    renderStyle() {
        return style;
    }
    render() {
        const contentClasses = {
            'mdc-tab-indicator__content--icon': this.icon,
            'material-icons': this.icon,
            'mdc-tab-indicator__content--underline': !this.icon
        };
        return html `
      ${this.renderStyle()}
      <span class="mdc-tab-indicator ${classMap({ 'mdc-tab-indicator--fade': this.fade })}">
        <span class="mdc-tab-indicator__content ${classMap(contentClasses)}">${this.icon}</span>
      </span>
      `;
    }
    updated(changedProperties) {
        if (changedProperties.has('fade')) {
            this.createFoundation();
        }
    }
    createAdapter() {
        return Object.assign({}, super.createAdapter(), { computeContentClientRect: () => this.contentElement.getBoundingClientRect(), setContentStyleProperty: (prop, value) => this.contentElement.style.setProperty(prop, value) });
    }
    createFoundation() {
        if (this.mdcFoundation !== undefined) {
            this.mdcFoundation.destroy();
        }
        super.createFoundation();
    }
    computeContentClientRect() {
        return this.mdcFoundation.computeContentClientRect();
    }
    activate(previousIndicatorClientRect) {
        this.mdcFoundation.activate(previousIndicatorClientRect);
    }
    deactivate() {
        this.mdcFoundation.deactivate();
    }
};
__decorate([
    query('.mdc-tab-indicator')
], TabIndicator.prototype, "mdcRoot", void 0);
__decorate([
    query('.mdc-tab-indicator__content')
], TabIndicator.prototype, "contentElement", void 0);
__decorate([
    property()
], TabIndicator.prototype, "icon", void 0);
__decorate([
    property({ type: Boolean })
], TabIndicator.prototype, "fade", void 0);
TabIndicator = __decorate([
    customElement('mwc-tab-indicator')
], TabIndicator);
export { TabIndicator };
//# sourceMappingURL=mwc-tab-indicator.js.map
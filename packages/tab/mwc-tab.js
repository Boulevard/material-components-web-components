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
// Make TypeScript not remove the import.
import '@material/mwc-tab-indicator';
import { classMap } from 'lit-html/directives/class-map';
import { ripple } from '@material/mwc-ripple/ripple-directive';
import MDCTabFoundation from '@material/tab/foundation';
import { style } from './mwc-tab-css';
let Tab = class Tab extends BaseElement {
    constructor() {
        super(...arguments);
        this.mdcFoundationClass = MDCTabFoundation;
        this.label = '';
        this.icon = '';
        this.isFadingIndicator = false;
        this.minWidth = false;
        this.isMinWidthIndicator = false;
        this.indicatorIcon = '';
        this.stacked = false;
    }
    _handleClick(e) {
        this.mdcFoundation.handleClick(e);
    }
    createRenderRoot() {
        return this.attachShadow({ mode: 'open', delegatesFocus: true });
    }
    renderStyle() {
        return style;
    }
    render() {
        const classes = {
            'mdc-tab--min-width': this.minWidth,
            'mdc-tab--stacked': this.stacked
        };
        return html `
      ${this.renderStyle()}
      <button @click="${this._handleClick}" class="mdc-tab ${classMap(classes)}" role="tab" aria-selected="false" tabindex="-1">
        <span class="mdc-tab__content">
          <slot></slot>
          ${this.icon ? html `<span class="mdc-tab__icon material-icons">${this.icon}</span>` : ''}
          ${this.label ? html `<span class="mdc-tab__text-label">${this.label}</span>` : ''}
          ${this.isMinWidthIndicator ? this.renderIndicator() : ''}
        </span>
        ${this.isMinWidthIndicator ? '' : this.renderIndicator()}
        <span class="mdc-tab__ripple" .ripple="${ripple({ interactionNode: this, unbounded: false })}"></span>
      </button>`;
    }
    renderIndicator() {
        return html `<mwc-tab-indicator
        .icon="${this.indicatorIcon}"
        .fade="${this.isFadingIndicator}"></mwc-tab-indicator>`;
    }
    createAdapter() {
        return Object.assign({}, super.createAdapter(), { setAttr: (attr, value) => this.mdcRoot.setAttribute(attr, value), activateIndicator: (previousIndicatorClientRect) => this._tabIndicator.activate(previousIndicatorClientRect), deactivateIndicator: () => this._tabIndicator.deactivate(), notifyInteracted: () => this.dispatchEvent(new CustomEvent(MDCTabFoundation.strings.INTERACTED_EVENT, {
                detail: { tab: this },
                bubbles: true,
                composed: true,
                cancelable: true
            })), getOffsetLeft: () => this.offsetLeft, getOffsetWidth: () => this.mdcRoot.offsetWidth, getContentOffsetLeft: () => this._contentElement.offsetLeft, getContentOffsetWidth: () => this._contentElement.offsetWidth, focus: () => this.mdcRoot.focus() });
    }
    activate(clientRect) {
        this.mdcFoundation.activate(clientRect);
    }
    deactivate() {
        this.mdcFoundation.deactivate();
    }
    computeDimensions() {
        return this.mdcFoundation.computeDimensions();
    }
    computeIndicatorClientRect() {
        return this.tabIndicator.computeContentClientRect();
    }
    // NOTE: needed only for ShadyDOM where delegatesFocus is not implemented
    focus() {
        this.mdcRoot.focus();
    }
};
__decorate([
    query('.mdc-tab')
], Tab.prototype, "mdcRoot", void 0);
__decorate([
    query('mwc-tab-indicator')
], Tab.prototype, "tabIndicator", void 0);
__decorate([
    property()
], Tab.prototype, "label", void 0);
__decorate([
    property()
], Tab.prototype, "icon", void 0);
__decorate([
    property({ type: Boolean })
], Tab.prototype, "isFadingIndicator", void 0);
__decorate([
    property({ type: Boolean })
], Tab.prototype, "minWidth", void 0);
__decorate([
    property({ type: Boolean })
], Tab.prototype, "isMinWidthIndicator", void 0);
__decorate([
    property()
], Tab.prototype, "indicatorIcon", void 0);
__decorate([
    property({ type: Boolean })
], Tab.prototype, "stacked", void 0);
__decorate([
    query('mwc-tab-indicator')
], Tab.prototype, "_tabIndicator", void 0);
__decorate([
    query('.mdc-tab__content')
], Tab.prototype, "_contentElement", void 0);
Tab = __decorate([
    customElement('mwc-tab')
], Tab);
export { Tab };
//# sourceMappingURL=mwc-tab.js.map
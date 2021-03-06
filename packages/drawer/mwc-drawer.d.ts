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
import { BaseElement, Adapter, Foundation, PropertyValues } from '@material/mwc-base/base-element.js';
import MDCModalDrawerFoundation from '@material/drawer/modal/foundation.js';
import MDCDismissibleDrawerFoundation from '@material/drawer/dismissible/foundation.js';
import 'wicg-inert/dist/inert.js';
import 'blocking-elements/blocking-elements.js';
declare global {
    interface HTMLElementTagNameMap {
        'mwc-drawer': Drawer;
    }
    interface Document {
        $blockingElements: {
            push(HTMLElement: any): void;
            remove(HTMLElement: any): Boolean;
        };
    }
}
export interface DrawerFoundation extends Foundation {
    open(): void;
    close(): void;
}
export declare var DrawerFoundation: {
    prototype: DrawerFoundation;
    new (adapter: Adapter): DrawerFoundation;
};
export declare class Drawer extends BaseElement {
    protected mdcRoot: HTMLElement;
    protected mdcFoundation: MDCDismissibleDrawerFoundation | MDCModalDrawerFoundation;
    protected readonly mdcFoundationClass: typeof DrawerFoundation;
    protected createAdapter(): {
        elementHasClass: (element: HTMLElement, className: string) => boolean;
        computeBoundingRect: () => ClientRect | DOMRect;
        saveFocus: () => void;
        restoreFocus: () => void;
        notifyClose: () => void;
        notifyOpen: () => void;
        focusActiveNavigationItem: () => void;
        trapFocus: () => void;
    };
    private _previousFocus;
    private _handleScrimClick;
    open: boolean;
    hasHeader: boolean;
    type: string;
    renderStyle(): import("lit-html/lib/template-result").TemplateResult;
    render(): import("lit-html/lib/template-result").TemplateResult;
    firstUpdated(): void;
    updated(changedProperties: PropertyValues): void;
}

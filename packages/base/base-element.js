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
import { LitElement } from 'lit-element';
import { TemplateResult } from 'lit-html';
export { TemplateResult };
export * from 'lit-element';
export { classMap } from 'lit-html/directives/class-map.js';
export { observer } from './observer.js';
;
export class BaseElement extends LitElement {
    /**
     * Create the adapter for the `mdcFoundation`.
     *
     * To extend, spread the super class version into you class:
     * `{...super.createAdapter(), foo() => {}}`
     */
    createAdapter() {
        return {
            addClass: (className) => {
                this.mdcRoot.classList.add(className);
            },
            removeClass: (className) => {
                this.mdcRoot.classList.remove(className);
            },
            hasClass: (className) => {
                return this.mdcRoot.classList.contains(className);
            }
        };
    }
    /**
     * Create and attach the MDC Foundation to the instance
     */
    createFoundation() {
        if (this.mdcFoundation) {
            this.mdcFoundation.destroy();
        }
        this.mdcFoundation = new this.mdcFoundationClass(this.createAdapter());
        this.mdcFoundation.init();
    }
    firstUpdated() {
        this.createFoundation();
    }
}
//# sourceMappingURL=base-element.js.map
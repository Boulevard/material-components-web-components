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
import { FormElement, Adapter, Foundation } from '@material/mwc-base/form-element.js';
export interface SliderFoundation extends Foundation {
    layout(): void;
    getValue(): number;
    setValue(value: number): void;
    getMax(): number;
    setMax(value: number): void;
    getMin(): number;
    setMin(value: number): void;
    getStep(): number;
    setStep(value: number): void;
    isDisabled(): boolean;
    setDisabled(value: boolean): void;
    setupTrackMarker(): void;
}
export declare var SliderFoundation: {
    prototype: SliderFoundation;
    new (adapter: Adapter): SliderFoundation;
};
declare global {
    interface HTMLElementTagNameMap {
        'mwc-slider': Slider;
    }
}
export declare class Slider extends FormElement {
    protected mdcFoundation: SliderFoundation;
    protected readonly mdcFoundationClass: typeof SliderFoundation;
    protected mdcRoot: HTMLElement;
    protected formElement: HTMLElement;
    protected thumbContainer: HTMLElement;
    protected trackElement: HTMLElement;
    protected pinMarker: HTMLElement;
    protected trackMarkerContainer: HTMLElement;
    value: number;
    min: number;
    max: number;
    step: number;
    disabled: boolean;
    discrete: boolean;
    markers: boolean;
    private _numMarkers;
    renderStyle(): import("lit-html/lib/template-result").TemplateResult;
    render(): import("lit-html/lib/template-result").TemplateResult;
    protected createAdapter(): {
        getAttribute: (name: string) => string | null;
        setAttribute: (name: string, value: string) => void;
        removeAttribute: (name: string) => void;
        computeBoundingRect: () => ClientRect | DOMRect;
        getTabIndex: () => number;
        registerInteractionHandler: (type: string, handler: EventListener) => void;
        deregisterInteractionHandler: (type: string, handler: EventListener) => void;
        registerThumbContainerInteractionHandler: (type: string, handler: EventListener) => void;
        deregisterThumbContainerInteractionHandler: (type: string, handler: EventListener) => void;
        registerBodyInteractionHandler: (type: string, handler: EventListener) => void;
        deregisterBodyInteractionHandler: (type: string, handler: EventListener) => void;
        registerResizeHandler: (handler: EventListener) => void;
        deregisterResizeHandler: (handler: EventListener) => void;
        notifyInput: () => void;
        notifyChange: () => void;
        setThumbContainerStyleProperty: (propertyName: string, value: string) => void;
        setTrackStyleProperty: (propertyName: string, value: string) => void;
        setMarkerValue: (value: number) => string;
        appendTrackMarkers: (numMarkers: number) => number;
        removeTrackMarkers: () => void;
        setLastTrackMarkersStyleProperty: (propertyName: string, value: string) => void;
        isRTL: () => boolean;
    };
    layout(): void;
}

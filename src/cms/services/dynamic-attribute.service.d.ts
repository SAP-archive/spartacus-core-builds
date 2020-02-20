import { Renderer2 } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class DynamicAttributeService {
    /**
     * Add dynamic attributes to DOM. These attributes are extracted from the properties of cms items received from backend.
     * There can by many different groups of properties, one of them is smaredit. But EC allows addons to create different groups.
     * For example, personalization may add 'script' group etc.
     * @param properties: properties in each cms item response data
     * @param element: slot or cms component element
     * @param renderer
     */
    addDynamicAttributes(properties: any, element: Element, renderer: Renderer2): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DynamicAttributeService>;
}

//# sourceMappingURL=dynamic-attribute.service.d.ts.map
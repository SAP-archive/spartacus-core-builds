import { Renderer2 } from '@angular/core';
import { SmartEditService } from '../../smart-edit/services/smart-edit.service';
import { ContentSlotComponentData } from '../model/content-slot-component-data.model';
import { ContentSlotData } from '../model/content-slot-data.model';
import * as ɵngcc0 from '@angular/core';
export declare class DynamicAttributeService {
    protected smartEditService: SmartEditService;
    constructor(smartEditService: SmartEditService);
    /**
     * Add dynamic attributes to DOM. These attributes are extracted from the properties of cms items received from backend.
     * There can by many different groups of properties, one of them is smartedit. But EC allows addons to create different groups.
     * For example, personalization may add 'script' group etc.
     * @param element: slot or cms component element
     * @param renderer
     * @param cmsRenderingContext: an object containing properties in each cms item response data
     */
    addDynamicAttributes(element: Element, renderer: Renderer2, cmsRenderingContext: {
        componentData?: ContentSlotComponentData;
        slotData?: ContentSlotData;
    }): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DynamicAttributeService, never>;
}

//# sourceMappingURL=dynamic-attribute.service.d.ts.map
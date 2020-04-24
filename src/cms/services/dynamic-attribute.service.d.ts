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
     * @param properties: an object containing properties in each cms item response data
     * @param element: slot or cms component element
     * @param renderer
     */
    addDynamicAttributes(element: Element, renderer: Renderer2, cmsRenderingContext: {
        componentData?: ContentSlotComponentData;
        slotData?: ContentSlotData;
    }): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DynamicAttributeService, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1hdHRyaWJ1dGUuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJkeW5hbWljLWF0dHJpYnV0ZS5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU21hcnRFZGl0U2VydmljZSB9IGZyb20gJy4uLy4uL3NtYXJ0LWVkaXQvc2VydmljZXMvc21hcnQtZWRpdC5zZXJ2aWNlJztcbmltcG9ydCB7IENvbnRlbnRTbG90Q29tcG9uZW50RGF0YSB9IGZyb20gJy4uL21vZGVsL2NvbnRlbnQtc2xvdC1jb21wb25lbnQtZGF0YS5tb2RlbCc7XG5pbXBvcnQgeyBDb250ZW50U2xvdERhdGEgfSBmcm9tICcuLi9tb2RlbC9jb250ZW50LXNsb3QtZGF0YS5tb2RlbCc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBEeW5hbWljQXR0cmlidXRlU2VydmljZSB7XG4gICAgcHJvdGVjdGVkIHNtYXJ0RWRpdFNlcnZpY2U6IFNtYXJ0RWRpdFNlcnZpY2U7XG4gICAgY29uc3RydWN0b3Ioc21hcnRFZGl0U2VydmljZTogU21hcnRFZGl0U2VydmljZSk7XG4gICAgLyoqXG4gICAgICogQWRkIGR5bmFtaWMgYXR0cmlidXRlcyB0byBET00uIFRoZXNlIGF0dHJpYnV0ZXMgYXJlIGV4dHJhY3RlZCBmcm9tIHRoZSBwcm9wZXJ0aWVzIG9mIGNtcyBpdGVtcyByZWNlaXZlZCBmcm9tIGJhY2tlbmQuXG4gICAgICogVGhlcmUgY2FuIGJ5IG1hbnkgZGlmZmVyZW50IGdyb3VwcyBvZiBwcm9wZXJ0aWVzLCBvbmUgb2YgdGhlbSBpcyBzbWFydGVkaXQuIEJ1dCBFQyBhbGxvd3MgYWRkb25zIHRvIGNyZWF0ZSBkaWZmZXJlbnQgZ3JvdXBzLlxuICAgICAqIEZvciBleGFtcGxlLCBwZXJzb25hbGl6YXRpb24gbWF5IGFkZCAnc2NyaXB0JyBncm91cCBldGMuXG4gICAgICogQHBhcmFtIHByb3BlcnRpZXM6IGFuIG9iamVjdCBjb250YWluaW5nIHByb3BlcnRpZXMgaW4gZWFjaCBjbXMgaXRlbSByZXNwb25zZSBkYXRhXG4gICAgICogQHBhcmFtIGVsZW1lbnQ6IHNsb3Qgb3IgY21zIGNvbXBvbmVudCBlbGVtZW50XG4gICAgICogQHBhcmFtIHJlbmRlcmVyXG4gICAgICovXG4gICAgYWRkRHluYW1pY0F0dHJpYnV0ZXMoZWxlbWVudDogRWxlbWVudCwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgY21zUmVuZGVyaW5nQ29udGV4dDoge1xuICAgICAgICBjb21wb25lbnREYXRhPzogQ29udGVudFNsb3RDb21wb25lbnREYXRhO1xuICAgICAgICBzbG90RGF0YT86IENvbnRlbnRTbG90RGF0YTtcbiAgICB9KTogdm9pZDtcbn1cbiJdfQ==
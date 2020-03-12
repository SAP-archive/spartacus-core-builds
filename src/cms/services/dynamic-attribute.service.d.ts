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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1hdHRyaWJ1dGUuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJkeW5hbWljLWF0dHJpYnV0ZS5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQ0E7Ozs7Ozs7Ozs7O0FBVUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIER5bmFtaWNBdHRyaWJ1dGVTZXJ2aWNlIHtcbiAgICAvKipcbiAgICAgKiBBZGQgZHluYW1pYyBhdHRyaWJ1dGVzIHRvIERPTS4gVGhlc2UgYXR0cmlidXRlcyBhcmUgZXh0cmFjdGVkIGZyb20gdGhlIHByb3BlcnRpZXMgb2YgY21zIGl0ZW1zIHJlY2VpdmVkIGZyb20gYmFja2VuZC5cbiAgICAgKiBUaGVyZSBjYW4gYnkgbWFueSBkaWZmZXJlbnQgZ3JvdXBzIG9mIHByb3BlcnRpZXMsIG9uZSBvZiB0aGVtIGlzIHNtYXJlZGl0LiBCdXQgRUMgYWxsb3dzIGFkZG9ucyB0byBjcmVhdGUgZGlmZmVyZW50IGdyb3Vwcy5cbiAgICAgKiBGb3IgZXhhbXBsZSwgcGVyc29uYWxpemF0aW9uIG1heSBhZGQgJ3NjcmlwdCcgZ3JvdXAgZXRjLlxuICAgICAqIEBwYXJhbSBwcm9wZXJ0aWVzOiBwcm9wZXJ0aWVzIGluIGVhY2ggY21zIGl0ZW0gcmVzcG9uc2UgZGF0YVxuICAgICAqIEBwYXJhbSBlbGVtZW50OiBzbG90IG9yIGNtcyBjb21wb25lbnQgZWxlbWVudFxuICAgICAqIEBwYXJhbSByZW5kZXJlclxuICAgICAqL1xuICAgIGFkZER5bmFtaWNBdHRyaWJ1dGVzKHByb3BlcnRpZXM6IGFueSwgZWxlbWVudDogRWxlbWVudCwgcmVuZGVyZXI6IFJlbmRlcmVyMik6IHZvaWQ7XG59XG4iXX0=
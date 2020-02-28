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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1hdHRyaWJ1dGUuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJkeW5hbWljLWF0dHJpYnV0ZS5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQ0E7Ozs7Ozs7Ozs7O0FBVUE7Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBEeW5hbWljQXR0cmlidXRlU2VydmljZSB7XG4gICAgLyoqXG4gICAgICogQWRkIGR5bmFtaWMgYXR0cmlidXRlcyB0byBET00uIFRoZXNlIGF0dHJpYnV0ZXMgYXJlIGV4dHJhY3RlZCBmcm9tIHRoZSBwcm9wZXJ0aWVzIG9mIGNtcyBpdGVtcyByZWNlaXZlZCBmcm9tIGJhY2tlbmQuXG4gICAgICogVGhlcmUgY2FuIGJ5IG1hbnkgZGlmZmVyZW50IGdyb3VwcyBvZiBwcm9wZXJ0aWVzLCBvbmUgb2YgdGhlbSBpcyBzbWFyZWRpdC4gQnV0IEVDIGFsbG93cyBhZGRvbnMgdG8gY3JlYXRlIGRpZmZlcmVudCBncm91cHMuXG4gICAgICogRm9yIGV4YW1wbGUsIHBlcnNvbmFsaXphdGlvbiBtYXkgYWRkICdzY3JpcHQnIGdyb3VwIGV0Yy5cbiAgICAgKiBAcGFyYW0gcHJvcGVydGllczogcHJvcGVydGllcyBpbiBlYWNoIGNtcyBpdGVtIHJlc3BvbnNlIGRhdGFcbiAgICAgKiBAcGFyYW0gZWxlbWVudDogc2xvdCBvciBjbXMgY29tcG9uZW50IGVsZW1lbnRcbiAgICAgKiBAcGFyYW0gcmVuZGVyZXJcbiAgICAgKi9cbiAgICBhZGREeW5hbWljQXR0cmlidXRlcyhwcm9wZXJ0aWVzOiBhbnksIGVsZW1lbnQ6IEVsZW1lbnQsIHJlbmRlcmVyOiBSZW5kZXJlcjIpOiB2b2lkO1xufVxuIl19
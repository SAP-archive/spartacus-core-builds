/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class DynamicAttributeService {
    /**
     * Add dynamic attributes to DOM. These attributes are extracted from the properties of cms items received from backend.
     * There can by many different groups of properties, one of them is smaredit. But EC allows addons to create different groups.
     * For example, personalization may add 'script' group etc.
     * @param {?} properties
     * @param {?} element
     * @param {?} renderer
     * @return {?}
     */
    addDynamicAttributes(properties, element, renderer) {
        if (properties) {
            // check each group of properties, e.g. smartedit
            Object.keys(properties).forEach(group => {
                /** @type {?} */
                const name = 'data-' + group + '-';
                /** @type {?} */
                const groupProps = properties[group];
                // check each property in the group
                Object.keys(groupProps).forEach(propName => {
                    /** @type {?} */
                    const propValue = groupProps[propName];
                    if (propName === 'classes') {
                        /** @type {?} */
                        const classes = propValue.split(' ');
                        classes.forEach(classItem => {
                            element.classList.add(classItem);
                        });
                    }
                    else {
                        renderer.setAttribute(element, name +
                            propName
                                .split(/(?=[A-Z])/)
                                .join('-')
                                .toLowerCase(), propValue);
                    }
                });
            });
        }
    }
}
DynamicAttributeService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */ DynamicAttributeService.ngInjectableDef = i0.defineInjectable({ factory: function DynamicAttributeService_Factory() { return new DynamicAttributeService(); }, token: DynamicAttributeService, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1hdHRyaWJ1dGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jbXMvc2VydmljZXMvZHluYW1pYy1hdHRyaWJ1dGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBYSxNQUFNLGVBQWUsQ0FBQzs7QUFLdEQsTUFBTSxPQUFPLHVCQUF1Qjs7Ozs7Ozs7OztJQVNsQyxvQkFBb0IsQ0FDbEIsVUFBZSxFQUNmLE9BQWdCLEVBQ2hCLFFBQW1CO1FBRW5CLElBQUksVUFBVSxFQUFFO1lBQ2QsaURBQWlEO1lBQ2pELE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFOztzQkFDaEMsSUFBSSxHQUFHLE9BQU8sR0FBRyxLQUFLLEdBQUcsR0FBRzs7c0JBQzVCLFVBQVUsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDO2dCQUVwQyxtQ0FBbUM7Z0JBQ25DLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFOzswQkFDbkMsU0FBUyxHQUFHLFVBQVUsQ0FBQyxRQUFRLENBQUM7b0JBQ3RDLElBQUksUUFBUSxLQUFLLFNBQVMsRUFBRTs7OEJBQ3BCLE9BQU8sR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQzt3QkFDcEMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRTs0QkFDMUIsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7d0JBQ25DLENBQUMsQ0FBQyxDQUFDO3FCQUNKO3lCQUFNO3dCQUNMLFFBQVEsQ0FBQyxZQUFZLENBQ25CLE9BQU8sRUFDUCxJQUFJOzRCQUNGLFFBQVE7aUNBQ0wsS0FBSyxDQUFDLFdBQVcsQ0FBQztpQ0FDbEIsSUFBSSxDQUFDLEdBQUcsQ0FBQztpQ0FDVCxXQUFXLEVBQUUsRUFDbEIsU0FBUyxDQUNWLENBQUM7cUJBQ0g7Z0JBQ0gsQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7O1lBN0NGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgRHluYW1pY0F0dHJpYnV0ZVNlcnZpY2Uge1xuICAvKipcbiAgICogQWRkIGR5bmFtaWMgYXR0cmlidXRlcyB0byBET00uIFRoZXNlIGF0dHJpYnV0ZXMgYXJlIGV4dHJhY3RlZCBmcm9tIHRoZSBwcm9wZXJ0aWVzIG9mIGNtcyBpdGVtcyByZWNlaXZlZCBmcm9tIGJhY2tlbmQuXG4gICAqIFRoZXJlIGNhbiBieSBtYW55IGRpZmZlcmVudCBncm91cHMgb2YgcHJvcGVydGllcywgb25lIG9mIHRoZW0gaXMgc21hcmVkaXQuIEJ1dCBFQyBhbGxvd3MgYWRkb25zIHRvIGNyZWF0ZSBkaWZmZXJlbnQgZ3JvdXBzLlxuICAgKiBGb3IgZXhhbXBsZSwgcGVyc29uYWxpemF0aW9uIG1heSBhZGQgJ3NjcmlwdCcgZ3JvdXAgZXRjLlxuICAgKiBAcGFyYW0gcHJvcGVydGllczogcHJvcGVydGllcyBpbiBlYWNoIGNtcyBpdGVtIHJlc3BvbnNlIGRhdGFcbiAgICogQHBhcmFtIGVsZW1lbnQ6IHNsb3Qgb3IgY21zIGNvbXBvbmVudCBlbGVtZW50XG4gICAqIEBwYXJhbSByZW5kZXJlclxuICAgKi9cbiAgYWRkRHluYW1pY0F0dHJpYnV0ZXMoXG4gICAgcHJvcGVydGllczogYW55LFxuICAgIGVsZW1lbnQ6IEVsZW1lbnQsXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMlxuICApOiB2b2lkIHtcbiAgICBpZiAocHJvcGVydGllcykge1xuICAgICAgLy8gY2hlY2sgZWFjaCBncm91cCBvZiBwcm9wZXJ0aWVzLCBlLmcuIHNtYXJ0ZWRpdFxuICAgICAgT2JqZWN0LmtleXMocHJvcGVydGllcykuZm9yRWFjaChncm91cCA9PiB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSAnZGF0YS0nICsgZ3JvdXAgKyAnLSc7XG4gICAgICAgIGNvbnN0IGdyb3VwUHJvcHMgPSBwcm9wZXJ0aWVzW2dyb3VwXTtcblxuICAgICAgICAvLyBjaGVjayBlYWNoIHByb3BlcnR5IGluIHRoZSBncm91cFxuICAgICAgICBPYmplY3Qua2V5cyhncm91cFByb3BzKS5mb3JFYWNoKHByb3BOYW1lID0+IHtcbiAgICAgICAgICBjb25zdCBwcm9wVmFsdWUgPSBncm91cFByb3BzW3Byb3BOYW1lXTtcbiAgICAgICAgICBpZiAocHJvcE5hbWUgPT09ICdjbGFzc2VzJykge1xuICAgICAgICAgICAgY29uc3QgY2xhc3NlcyA9IHByb3BWYWx1ZS5zcGxpdCgnICcpO1xuICAgICAgICAgICAgY2xhc3Nlcy5mb3JFYWNoKGNsYXNzSXRlbSA9PiB7XG4gICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc0l0ZW0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlbmRlcmVyLnNldEF0dHJpYnV0ZShcbiAgICAgICAgICAgICAgZWxlbWVudCxcbiAgICAgICAgICAgICAgbmFtZSArXG4gICAgICAgICAgICAgICAgcHJvcE5hbWVcbiAgICAgICAgICAgICAgICAgIC5zcGxpdCgvKD89W0EtWl0pLylcbiAgICAgICAgICAgICAgICAgIC5qb2luKCctJylcbiAgICAgICAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpLFxuICAgICAgICAgICAgICBwcm9wVmFsdWVcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIl19
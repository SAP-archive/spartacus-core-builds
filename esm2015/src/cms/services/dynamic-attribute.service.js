/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            Object.keys(properties).forEach((/**
             * @param {?} group
             * @return {?}
             */
            group => {
                /** @type {?} */
                const name = 'data-' + group + '-';
                /** @type {?} */
                const groupProps = properties[group];
                // check each property in the group
                Object.keys(groupProps).forEach((/**
                 * @param {?} propName
                 * @return {?}
                 */
                propName => {
                    /** @type {?} */
                    const propValue = groupProps[propName];
                    if (propName === 'classes') {
                        /** @type {?} */
                        const classes = propValue.split(' ');
                        classes.forEach((/**
                         * @param {?} classItem
                         * @return {?}
                         */
                        classItem => {
                            element.classList.add(classItem);
                        }));
                    }
                    else {
                        renderer.setAttribute(element, name +
                            propName
                                .split(/(?=[A-Z])/)
                                .join('-')
                                .toLowerCase(), propValue);
                    }
                }));
            }));
        }
    }
}
DynamicAttributeService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */ DynamicAttributeService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function DynamicAttributeService_Factory() { return new DynamicAttributeService(); }, token: DynamicAttributeService, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1hdHRyaWJ1dGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jbXMvc2VydmljZXMvZHluYW1pYy1hdHRyaWJ1dGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBYSxNQUFNLGVBQWUsQ0FBQzs7QUFLdEQsTUFBTSxPQUFPLHVCQUF1Qjs7Ozs7Ozs7OztJQVNsQyxvQkFBb0IsQ0FDbEIsVUFBZSxFQUNmLE9BQWdCLEVBQ2hCLFFBQW1CO1FBRW5CLElBQUksVUFBVSxFQUFFO1lBQ2QsaURBQWlEO1lBQ2pELE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTzs7OztZQUFDLEtBQUssQ0FBQyxFQUFFOztzQkFDaEMsSUFBSSxHQUFHLE9BQU8sR0FBRyxLQUFLLEdBQUcsR0FBRzs7c0JBQzVCLFVBQVUsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDO2dCQUVwQyxtQ0FBbUM7Z0JBQ25DLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTzs7OztnQkFBQyxRQUFRLENBQUMsRUFBRTs7MEJBQ25DLFNBQVMsR0FBRyxVQUFVLENBQUMsUUFBUSxDQUFDO29CQUN0QyxJQUFJLFFBQVEsS0FBSyxTQUFTLEVBQUU7OzhCQUNwQixPQUFPLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7d0JBQ3BDLE9BQU8sQ0FBQyxPQUFPOzs7O3dCQUFDLFNBQVMsQ0FBQyxFQUFFOzRCQUMxQixPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQzt3QkFDbkMsQ0FBQyxFQUFDLENBQUM7cUJBQ0o7eUJBQU07d0JBQ0wsUUFBUSxDQUFDLFlBQVksQ0FDbkIsT0FBTyxFQUNQLElBQUk7NEJBQ0YsUUFBUTtpQ0FDTCxLQUFLLENBQUMsV0FBVyxDQUFDO2lDQUNsQixJQUFJLENBQUMsR0FBRyxDQUFDO2lDQUNULFdBQVcsRUFBRSxFQUNsQixTQUFTLENBQ1YsQ0FBQztxQkFDSDtnQkFDSCxDQUFDLEVBQUMsQ0FBQztZQUNMLENBQUMsRUFBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOzs7WUE3Q0YsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBEeW5hbWljQXR0cmlidXRlU2VydmljZSB7XG4gIC8qKlxuICAgKiBBZGQgZHluYW1pYyBhdHRyaWJ1dGVzIHRvIERPTS4gVGhlc2UgYXR0cmlidXRlcyBhcmUgZXh0cmFjdGVkIGZyb20gdGhlIHByb3BlcnRpZXMgb2YgY21zIGl0ZW1zIHJlY2VpdmVkIGZyb20gYmFja2VuZC5cbiAgICogVGhlcmUgY2FuIGJ5IG1hbnkgZGlmZmVyZW50IGdyb3VwcyBvZiBwcm9wZXJ0aWVzLCBvbmUgb2YgdGhlbSBpcyBzbWFyZWRpdC4gQnV0IEVDIGFsbG93cyBhZGRvbnMgdG8gY3JlYXRlIGRpZmZlcmVudCBncm91cHMuXG4gICAqIEZvciBleGFtcGxlLCBwZXJzb25hbGl6YXRpb24gbWF5IGFkZCAnc2NyaXB0JyBncm91cCBldGMuXG4gICAqIEBwYXJhbSBwcm9wZXJ0aWVzOiBwcm9wZXJ0aWVzIGluIGVhY2ggY21zIGl0ZW0gcmVzcG9uc2UgZGF0YVxuICAgKiBAcGFyYW0gZWxlbWVudDogc2xvdCBvciBjbXMgY29tcG9uZW50IGVsZW1lbnRcbiAgICogQHBhcmFtIHJlbmRlcmVyXG4gICAqL1xuICBhZGREeW5hbWljQXR0cmlidXRlcyhcbiAgICBwcm9wZXJ0aWVzOiBhbnksXG4gICAgZWxlbWVudDogRWxlbWVudCxcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyXG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9wZXJ0aWVzKSB7XG4gICAgICAvLyBjaGVjayBlYWNoIGdyb3VwIG9mIHByb3BlcnRpZXMsIGUuZy4gc21hcnRlZGl0XG4gICAgICBPYmplY3Qua2V5cyhwcm9wZXJ0aWVzKS5mb3JFYWNoKGdyb3VwID0+IHtcbiAgICAgICAgY29uc3QgbmFtZSA9ICdkYXRhLScgKyBncm91cCArICctJztcbiAgICAgICAgY29uc3QgZ3JvdXBQcm9wcyA9IHByb3BlcnRpZXNbZ3JvdXBdO1xuXG4gICAgICAgIC8vIGNoZWNrIGVhY2ggcHJvcGVydHkgaW4gdGhlIGdyb3VwXG4gICAgICAgIE9iamVjdC5rZXlzKGdyb3VwUHJvcHMpLmZvckVhY2gocHJvcE5hbWUgPT4ge1xuICAgICAgICAgIGNvbnN0IHByb3BWYWx1ZSA9IGdyb3VwUHJvcHNbcHJvcE5hbWVdO1xuICAgICAgICAgIGlmIChwcm9wTmFtZSA9PT0gJ2NsYXNzZXMnKSB7XG4gICAgICAgICAgICBjb25zdCBjbGFzc2VzID0gcHJvcFZhbHVlLnNwbGl0KCcgJyk7XG4gICAgICAgICAgICBjbGFzc2VzLmZvckVhY2goY2xhc3NJdGVtID0+IHtcbiAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzSXRlbSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVuZGVyZXIuc2V0QXR0cmlidXRlKFxuICAgICAgICAgICAgICBlbGVtZW50LFxuICAgICAgICAgICAgICBuYW1lICtcbiAgICAgICAgICAgICAgICBwcm9wTmFtZVxuICAgICAgICAgICAgICAgICAgLnNwbGl0KC8oPz1bQS1aXSkvKVxuICAgICAgICAgICAgICAgICAgLmpvaW4oJy0nKVxuICAgICAgICAgICAgICAgICAgLnRvTG93ZXJDYXNlKCksXG4gICAgICAgICAgICAgIHByb3BWYWx1ZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iXX0=
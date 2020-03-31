import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
let DynamicAttributeService = class DynamicAttributeService {
    /**
     * Add dynamic attributes to DOM. These attributes are extracted from the properties of cms items received from backend.
     * There can by many different groups of properties, one of them is smaredit. But EC allows addons to create different groups.
     * For example, personalization may add 'script' group etc.
     * @param properties: properties in each cms item response data
     * @param element: slot or cms component element
     * @param renderer
     */
    addDynamicAttributes(properties, element, renderer) {
        if (properties) {
            // check each group of properties, e.g. smartedit
            Object.keys(properties).forEach((group) => {
                const name = 'data-' + group + '-';
                const groupProps = properties[group];
                // check each property in the group
                Object.keys(groupProps).forEach((propName) => {
                    const propValue = groupProps[propName];
                    if (propName === 'classes') {
                        const classes = propValue.split(' ');
                        classes.forEach((classItem) => {
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
};
DynamicAttributeService.ɵprov = i0.ɵɵdefineInjectable({ factory: function DynamicAttributeService_Factory() { return new DynamicAttributeService(); }, token: DynamicAttributeService, providedIn: "root" });
DynamicAttributeService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], DynamicAttributeService);
export { DynamicAttributeService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1hdHRyaWJ1dGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jbXMvc2VydmljZXMvZHluYW1pYy1hdHRyaWJ1dGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBYSxNQUFNLGVBQWUsQ0FBQzs7QUFLdEQsSUFBYSx1QkFBdUIsR0FBcEMsTUFBYSx1QkFBdUI7SUFDbEM7Ozs7Ozs7T0FPRztJQUNILG9CQUFvQixDQUNsQixVQUFlLEVBQ2YsT0FBZ0IsRUFDaEIsUUFBbUI7UUFFbkIsSUFBSSxVQUFVLEVBQUU7WUFDZCxpREFBaUQ7WUFDakQsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtnQkFDeEMsTUFBTSxJQUFJLEdBQUcsT0FBTyxHQUFHLEtBQUssR0FBRyxHQUFHLENBQUM7Z0JBQ25DLE1BQU0sVUFBVSxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFFckMsbUNBQW1DO2dCQUNuQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO29CQUMzQyxNQUFNLFNBQVMsR0FBRyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ3ZDLElBQUksUUFBUSxLQUFLLFNBQVMsRUFBRTt3QkFDMUIsTUFBTSxPQUFPLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDckMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFFOzRCQUM1QixPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQzt3QkFDbkMsQ0FBQyxDQUFDLENBQUM7cUJBQ0o7eUJBQU07d0JBQ0wsUUFBUSxDQUFDLFlBQVksQ0FDbkIsT0FBTyxFQUNQLElBQUk7NEJBQ0YsUUFBUTtpQ0FDTCxLQUFLLENBQUMsV0FBVyxDQUFDO2lDQUNsQixJQUFJLENBQUMsR0FBRyxDQUFDO2lDQUNULFdBQVcsRUFBRSxFQUNsQixTQUFTLENBQ1YsQ0FBQztxQkFDSDtnQkFDSCxDQUFDLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0NBQ0YsQ0FBQTs7QUEzQ1ksdUJBQXVCO0lBSG5DLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7R0FDVyx1QkFBdUIsQ0EyQ25DO1NBM0NZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgRHluYW1pY0F0dHJpYnV0ZVNlcnZpY2Uge1xuICAvKipcbiAgICogQWRkIGR5bmFtaWMgYXR0cmlidXRlcyB0byBET00uIFRoZXNlIGF0dHJpYnV0ZXMgYXJlIGV4dHJhY3RlZCBmcm9tIHRoZSBwcm9wZXJ0aWVzIG9mIGNtcyBpdGVtcyByZWNlaXZlZCBmcm9tIGJhY2tlbmQuXG4gICAqIFRoZXJlIGNhbiBieSBtYW55IGRpZmZlcmVudCBncm91cHMgb2YgcHJvcGVydGllcywgb25lIG9mIHRoZW0gaXMgc21hcmVkaXQuIEJ1dCBFQyBhbGxvd3MgYWRkb25zIHRvIGNyZWF0ZSBkaWZmZXJlbnQgZ3JvdXBzLlxuICAgKiBGb3IgZXhhbXBsZSwgcGVyc29uYWxpemF0aW9uIG1heSBhZGQgJ3NjcmlwdCcgZ3JvdXAgZXRjLlxuICAgKiBAcGFyYW0gcHJvcGVydGllczogcHJvcGVydGllcyBpbiBlYWNoIGNtcyBpdGVtIHJlc3BvbnNlIGRhdGFcbiAgICogQHBhcmFtIGVsZW1lbnQ6IHNsb3Qgb3IgY21zIGNvbXBvbmVudCBlbGVtZW50XG4gICAqIEBwYXJhbSByZW5kZXJlclxuICAgKi9cbiAgYWRkRHluYW1pY0F0dHJpYnV0ZXMoXG4gICAgcHJvcGVydGllczogYW55LFxuICAgIGVsZW1lbnQ6IEVsZW1lbnQsXG4gICAgcmVuZGVyZXI6IFJlbmRlcmVyMlxuICApOiB2b2lkIHtcbiAgICBpZiAocHJvcGVydGllcykge1xuICAgICAgLy8gY2hlY2sgZWFjaCBncm91cCBvZiBwcm9wZXJ0aWVzLCBlLmcuIHNtYXJ0ZWRpdFxuICAgICAgT2JqZWN0LmtleXMocHJvcGVydGllcykuZm9yRWFjaCgoZ3JvdXApID0+IHtcbiAgICAgICAgY29uc3QgbmFtZSA9ICdkYXRhLScgKyBncm91cCArICctJztcbiAgICAgICAgY29uc3QgZ3JvdXBQcm9wcyA9IHByb3BlcnRpZXNbZ3JvdXBdO1xuXG4gICAgICAgIC8vIGNoZWNrIGVhY2ggcHJvcGVydHkgaW4gdGhlIGdyb3VwXG4gICAgICAgIE9iamVjdC5rZXlzKGdyb3VwUHJvcHMpLmZvckVhY2goKHByb3BOYW1lKSA9PiB7XG4gICAgICAgICAgY29uc3QgcHJvcFZhbHVlID0gZ3JvdXBQcm9wc1twcm9wTmFtZV07XG4gICAgICAgICAgaWYgKHByb3BOYW1lID09PSAnY2xhc3NlcycpIHtcbiAgICAgICAgICAgIGNvbnN0IGNsYXNzZXMgPSBwcm9wVmFsdWUuc3BsaXQoJyAnKTtcbiAgICAgICAgICAgIGNsYXNzZXMuZm9yRWFjaCgoY2xhc3NJdGVtKSA9PiB7XG4gICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc0l0ZW0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlbmRlcmVyLnNldEF0dHJpYnV0ZShcbiAgICAgICAgICAgICAgZWxlbWVudCxcbiAgICAgICAgICAgICAgbmFtZSArXG4gICAgICAgICAgICAgICAgcHJvcE5hbWVcbiAgICAgICAgICAgICAgICAgIC5zcGxpdCgvKD89W0EtWl0pLylcbiAgICAgICAgICAgICAgICAgIC5qb2luKCctJylcbiAgICAgICAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpLFxuICAgICAgICAgICAgICBwcm9wVmFsdWVcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIl19
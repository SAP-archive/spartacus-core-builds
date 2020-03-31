import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var DynamicAttributeService = /** @class */ (function () {
    function DynamicAttributeService() {
    }
    /**
     * Add dynamic attributes to DOM. These attributes are extracted from the properties of cms items received from backend.
     * There can by many different groups of properties, one of them is smaredit. But EC allows addons to create different groups.
     * For example, personalization may add 'script' group etc.
     * @param properties: properties in each cms item response data
     * @param element: slot or cms component element
     * @param renderer
     */
    DynamicAttributeService.prototype.addDynamicAttributes = function (properties, element, renderer) {
        if (properties) {
            // check each group of properties, e.g. smartedit
            Object.keys(properties).forEach(function (group) {
                var name = 'data-' + group + '-';
                var groupProps = properties[group];
                // check each property in the group
                Object.keys(groupProps).forEach(function (propName) {
                    var propValue = groupProps[propName];
                    if (propName === 'classes') {
                        var classes = propValue.split(' ');
                        classes.forEach(function (classItem) {
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
    };
    DynamicAttributeService.ɵprov = i0.ɵɵdefineInjectable({ factory: function DynamicAttributeService_Factory() { return new DynamicAttributeService(); }, token: DynamicAttributeService, providedIn: "root" });
    DynamicAttributeService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], DynamicAttributeService);
    return DynamicAttributeService;
}());
export { DynamicAttributeService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1hdHRyaWJ1dGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jbXMvc2VydmljZXMvZHluYW1pYy1hdHRyaWJ1dGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBYSxNQUFNLGVBQWUsQ0FBQzs7QUFLdEQ7SUFBQTtLQTJDQztJQTFDQzs7Ozs7OztPQU9HO0lBQ0gsc0RBQW9CLEdBQXBCLFVBQ0UsVUFBZSxFQUNmLE9BQWdCLEVBQ2hCLFFBQW1CO1FBRW5CLElBQUksVUFBVSxFQUFFO1lBQ2QsaURBQWlEO1lBQ2pELE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsS0FBSztnQkFDcEMsSUFBTSxJQUFJLEdBQUcsT0FBTyxHQUFHLEtBQUssR0FBRyxHQUFHLENBQUM7Z0JBQ25DLElBQU0sVUFBVSxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFFckMsbUNBQW1DO2dCQUNuQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLFFBQVE7b0JBQ3ZDLElBQU0sU0FBUyxHQUFHLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDdkMsSUFBSSxRQUFRLEtBQUssU0FBUyxFQUFFO3dCQUMxQixJQUFNLE9BQU8sR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUNyQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUMsU0FBUzs0QkFDeEIsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7d0JBQ25DLENBQUMsQ0FBQyxDQUFDO3FCQUNKO3lCQUFNO3dCQUNMLFFBQVEsQ0FBQyxZQUFZLENBQ25CLE9BQU8sRUFDUCxJQUFJOzRCQUNGLFFBQVE7aUNBQ0wsS0FBSyxDQUFDLFdBQVcsQ0FBQztpQ0FDbEIsSUFBSSxDQUFDLEdBQUcsQ0FBQztpQ0FDVCxXQUFXLEVBQUUsRUFDbEIsU0FBUyxDQUNWLENBQUM7cUJBQ0g7Z0JBQ0gsQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7SUExQ1UsdUJBQXVCO1FBSG5DLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyx1QkFBdUIsQ0EyQ25DO2tDQWhERDtDQWdEQyxBQTNDRCxJQTJDQztTQTNDWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIER5bmFtaWNBdHRyaWJ1dGVTZXJ2aWNlIHtcbiAgLyoqXG4gICAqIEFkZCBkeW5hbWljIGF0dHJpYnV0ZXMgdG8gRE9NLiBUaGVzZSBhdHRyaWJ1dGVzIGFyZSBleHRyYWN0ZWQgZnJvbSB0aGUgcHJvcGVydGllcyBvZiBjbXMgaXRlbXMgcmVjZWl2ZWQgZnJvbSBiYWNrZW5kLlxuICAgKiBUaGVyZSBjYW4gYnkgbWFueSBkaWZmZXJlbnQgZ3JvdXBzIG9mIHByb3BlcnRpZXMsIG9uZSBvZiB0aGVtIGlzIHNtYXJlZGl0LiBCdXQgRUMgYWxsb3dzIGFkZG9ucyB0byBjcmVhdGUgZGlmZmVyZW50IGdyb3Vwcy5cbiAgICogRm9yIGV4YW1wbGUsIHBlcnNvbmFsaXphdGlvbiBtYXkgYWRkICdzY3JpcHQnIGdyb3VwIGV0Yy5cbiAgICogQHBhcmFtIHByb3BlcnRpZXM6IHByb3BlcnRpZXMgaW4gZWFjaCBjbXMgaXRlbSByZXNwb25zZSBkYXRhXG4gICAqIEBwYXJhbSBlbGVtZW50OiBzbG90IG9yIGNtcyBjb21wb25lbnQgZWxlbWVudFxuICAgKiBAcGFyYW0gcmVuZGVyZXJcbiAgICovXG4gIGFkZER5bmFtaWNBdHRyaWJ1dGVzKFxuICAgIHByb3BlcnRpZXM6IGFueSxcbiAgICBlbGVtZW50OiBFbGVtZW50LFxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjJcbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb3BlcnRpZXMpIHtcbiAgICAgIC8vIGNoZWNrIGVhY2ggZ3JvdXAgb2YgcHJvcGVydGllcywgZS5nLiBzbWFydGVkaXRcbiAgICAgIE9iamVjdC5rZXlzKHByb3BlcnRpZXMpLmZvckVhY2goKGdyb3VwKSA9PiB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSAnZGF0YS0nICsgZ3JvdXAgKyAnLSc7XG4gICAgICAgIGNvbnN0IGdyb3VwUHJvcHMgPSBwcm9wZXJ0aWVzW2dyb3VwXTtcblxuICAgICAgICAvLyBjaGVjayBlYWNoIHByb3BlcnR5IGluIHRoZSBncm91cFxuICAgICAgICBPYmplY3Qua2V5cyhncm91cFByb3BzKS5mb3JFYWNoKChwcm9wTmFtZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHByb3BWYWx1ZSA9IGdyb3VwUHJvcHNbcHJvcE5hbWVdO1xuICAgICAgICAgIGlmIChwcm9wTmFtZSA9PT0gJ2NsYXNzZXMnKSB7XG4gICAgICAgICAgICBjb25zdCBjbGFzc2VzID0gcHJvcFZhbHVlLnNwbGl0KCcgJyk7XG4gICAgICAgICAgICBjbGFzc2VzLmZvckVhY2goKGNsYXNzSXRlbSkgPT4ge1xuICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NJdGVtKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZW5kZXJlci5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgICAgIGVsZW1lbnQsXG4gICAgICAgICAgICAgIG5hbWUgK1xuICAgICAgICAgICAgICAgIHByb3BOYW1lXG4gICAgICAgICAgICAgICAgICAuc3BsaXQoLyg/PVtBLVpdKS8pXG4gICAgICAgICAgICAgICAgICAuam9pbignLScpXG4gICAgICAgICAgICAgICAgICAudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgICAgICAgcHJvcFZhbHVlXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==
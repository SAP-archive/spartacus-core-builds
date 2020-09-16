import { Injectable } from '@angular/core';
import { SmartEditService } from '../../smart-edit/services/smart-edit.service';
import * as i0 from "@angular/core";
import * as i1 from "../../smart-edit/services/smart-edit.service";
export class DynamicAttributeService {
    constructor(smartEditService) {
        this.smartEditService = smartEditService;
    }
    /**
     * Add dynamic attributes to DOM. These attributes are extracted from the properties of cms items received from backend.
     * There can by many different groups of properties, one of them is smartedit. But EC allows addons to create different groups.
     * For example, personalization may add 'script' group etc.
     * @param element: slot or cms component element
     * @param renderer
     * @param cmsRenderingContext: an object containing properties in each cms item response data
     */
    addDynamicAttributes(element, renderer, cmsRenderingContext) {
        var _a, _b;
        const properties = ((_a = cmsRenderingContext.componentData) === null || _a === void 0 ? void 0 : _a.properties) || ((_b = cmsRenderingContext.slotData) === null || _b === void 0 ? void 0 : _b.properties);
        if (properties && this.smartEditService.isLaunchedInSmartEdit()) {
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
}
DynamicAttributeService.ɵprov = i0.ɵɵdefineInjectable({ factory: function DynamicAttributeService_Factory() { return new DynamicAttributeService(i0.ɵɵinject(i1.SmartEditService)); }, token: DynamicAttributeService, providedIn: "root" });
DynamicAttributeService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
DynamicAttributeService.ctorParameters = () => [
    { type: SmartEditService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1hdHRyaWJ1dGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL2Ntcy9zZXJ2aWNlcy9keW5hbWljLWF0dHJpYnV0ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sOENBQThDLENBQUM7OztBQU9oRixNQUFNLE9BQU8sdUJBQXVCO0lBQ2xDLFlBQXNCLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBQUcsQ0FBQztJQUU1RDs7Ozs7OztPQU9HO0lBQ0gsb0JBQW9CLENBQ2xCLE9BQWdCLEVBQ2hCLFFBQW1CLEVBQ25CLG1CQUdDOztRQUVELE1BQU0sVUFBVSxHQUNkLE9BQUEsbUJBQW1CLENBQUMsYUFBYSwwQ0FBRSxVQUFVLFlBQzdDLG1CQUFtQixDQUFDLFFBQVEsMENBQUUsVUFBVSxDQUFBLENBQUM7UUFFM0MsSUFBSSxVQUFVLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLHFCQUFxQixFQUFFLEVBQUU7WUFDL0QsaURBQWlEO1lBQ2pELE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7Z0JBQ3hDLE1BQU0sSUFBSSxHQUFHLE9BQU8sR0FBRyxLQUFLLEdBQUcsR0FBRyxDQUFDO2dCQUNuQyxNQUFNLFVBQVUsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBRXJDLG1DQUFtQztnQkFDbkMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtvQkFDM0MsTUFBTSxTQUFTLEdBQUcsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUN2QyxJQUFJLFFBQVEsS0FBSyxTQUFTLEVBQUU7d0JBQzFCLE1BQU0sT0FBTyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ3JDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBRTs0QkFDNUIsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7d0JBQ25DLENBQUMsQ0FBQyxDQUFDO3FCQUNKO3lCQUFNO3dCQUNMLFFBQVEsQ0FBQyxZQUFZLENBQ25CLE9BQU8sRUFDUCxJQUFJOzRCQUNGLFFBQVE7aUNBQ0wsS0FBSyxDQUFDLFdBQVcsQ0FBQztpQ0FDbEIsSUFBSSxDQUFDLEdBQUcsQ0FBQztpQ0FDVCxXQUFXLEVBQUUsRUFDbEIsU0FBUyxDQUNWLENBQUM7cUJBQ0g7Z0JBQ0gsQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7OztZQXRERixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7OztZQU5RLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU21hcnRFZGl0U2VydmljZSB9IGZyb20gJy4uLy4uL3NtYXJ0LWVkaXQvc2VydmljZXMvc21hcnQtZWRpdC5zZXJ2aWNlJztcbmltcG9ydCB7IENvbnRlbnRTbG90Q29tcG9uZW50RGF0YSB9IGZyb20gJy4uL21vZGVsL2NvbnRlbnQtc2xvdC1jb21wb25lbnQtZGF0YS5tb2RlbCc7XG5pbXBvcnQgeyBDb250ZW50U2xvdERhdGEgfSBmcm9tICcuLi9tb2RlbC9jb250ZW50LXNsb3QtZGF0YS5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBEeW5hbWljQXR0cmlidXRlU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBzbWFydEVkaXRTZXJ2aWNlOiBTbWFydEVkaXRTZXJ2aWNlKSB7fVxuXG4gIC8qKlxuICAgKiBBZGQgZHluYW1pYyBhdHRyaWJ1dGVzIHRvIERPTS4gVGhlc2UgYXR0cmlidXRlcyBhcmUgZXh0cmFjdGVkIGZyb20gdGhlIHByb3BlcnRpZXMgb2YgY21zIGl0ZW1zIHJlY2VpdmVkIGZyb20gYmFja2VuZC5cbiAgICogVGhlcmUgY2FuIGJ5IG1hbnkgZGlmZmVyZW50IGdyb3VwcyBvZiBwcm9wZXJ0aWVzLCBvbmUgb2YgdGhlbSBpcyBzbWFydGVkaXQuIEJ1dCBFQyBhbGxvd3MgYWRkb25zIHRvIGNyZWF0ZSBkaWZmZXJlbnQgZ3JvdXBzLlxuICAgKiBGb3IgZXhhbXBsZSwgcGVyc29uYWxpemF0aW9uIG1heSBhZGQgJ3NjcmlwdCcgZ3JvdXAgZXRjLlxuICAgKiBAcGFyYW0gZWxlbWVudDogc2xvdCBvciBjbXMgY29tcG9uZW50IGVsZW1lbnRcbiAgICogQHBhcmFtIHJlbmRlcmVyXG4gICAqIEBwYXJhbSBjbXNSZW5kZXJpbmdDb250ZXh0OiBhbiBvYmplY3QgY29udGFpbmluZyBwcm9wZXJ0aWVzIGluIGVhY2ggY21zIGl0ZW0gcmVzcG9uc2UgZGF0YVxuICAgKi9cbiAgYWRkRHluYW1pY0F0dHJpYnV0ZXMoXG4gICAgZWxlbWVudDogRWxlbWVudCxcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIGNtc1JlbmRlcmluZ0NvbnRleHQ6IHtcbiAgICAgIGNvbXBvbmVudERhdGE/OiBDb250ZW50U2xvdENvbXBvbmVudERhdGE7XG4gICAgICBzbG90RGF0YT86IENvbnRlbnRTbG90RGF0YTtcbiAgICB9XG4gICk6IHZvaWQge1xuICAgIGNvbnN0IHByb3BlcnRpZXMgPVxuICAgICAgY21zUmVuZGVyaW5nQ29udGV4dC5jb21wb25lbnREYXRhPy5wcm9wZXJ0aWVzIHx8XG4gICAgICBjbXNSZW5kZXJpbmdDb250ZXh0LnNsb3REYXRhPy5wcm9wZXJ0aWVzO1xuXG4gICAgaWYgKHByb3BlcnRpZXMgJiYgdGhpcy5zbWFydEVkaXRTZXJ2aWNlLmlzTGF1bmNoZWRJblNtYXJ0RWRpdCgpKSB7XG4gICAgICAvLyBjaGVjayBlYWNoIGdyb3VwIG9mIHByb3BlcnRpZXMsIGUuZy4gc21hcnRlZGl0XG4gICAgICBPYmplY3Qua2V5cyhwcm9wZXJ0aWVzKS5mb3JFYWNoKChncm91cCkgPT4ge1xuICAgICAgICBjb25zdCBuYW1lID0gJ2RhdGEtJyArIGdyb3VwICsgJy0nO1xuICAgICAgICBjb25zdCBncm91cFByb3BzID0gcHJvcGVydGllc1tncm91cF07XG5cbiAgICAgICAgLy8gY2hlY2sgZWFjaCBwcm9wZXJ0eSBpbiB0aGUgZ3JvdXBcbiAgICAgICAgT2JqZWN0LmtleXMoZ3JvdXBQcm9wcykuZm9yRWFjaCgocHJvcE5hbWUpID0+IHtcbiAgICAgICAgICBjb25zdCBwcm9wVmFsdWUgPSBncm91cFByb3BzW3Byb3BOYW1lXTtcbiAgICAgICAgICBpZiAocHJvcE5hbWUgPT09ICdjbGFzc2VzJykge1xuICAgICAgICAgICAgY29uc3QgY2xhc3NlcyA9IHByb3BWYWx1ZS5zcGxpdCgnICcpO1xuICAgICAgICAgICAgY2xhc3Nlcy5mb3JFYWNoKChjbGFzc0l0ZW0pID0+IHtcbiAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzSXRlbSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVuZGVyZXIuc2V0QXR0cmlidXRlKFxuICAgICAgICAgICAgICBlbGVtZW50LFxuICAgICAgICAgICAgICBuYW1lICtcbiAgICAgICAgICAgICAgICBwcm9wTmFtZVxuICAgICAgICAgICAgICAgICAgLnNwbGl0KC8oPz1bQS1aXSkvKVxuICAgICAgICAgICAgICAgICAgLmpvaW4oJy0nKVxuICAgICAgICAgICAgICAgICAgLnRvTG93ZXJDYXNlKCksXG4gICAgICAgICAgICAgIHByb3BWYWx1ZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iXX0=
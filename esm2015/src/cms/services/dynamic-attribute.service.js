import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { SmartEditService } from '../../smart-edit/services/smart-edit.service';
import * as i0 from "@angular/core";
import * as i1 from "../../smart-edit/services/smart-edit.service";
let DynamicAttributeService = class DynamicAttributeService {
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
};
DynamicAttributeService.ctorParameters = () => [
    { type: SmartEditService }
];
DynamicAttributeService.ɵprov = i0.ɵɵdefineInjectable({ factory: function DynamicAttributeService_Factory() { return new DynamicAttributeService(i0.ɵɵinject(i1.SmartEditService)); }, token: DynamicAttributeService, providedIn: "root" });
DynamicAttributeService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], DynamicAttributeService);
export { DynamicAttributeService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1hdHRyaWJ1dGUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jbXMvc2VydmljZXMvZHluYW1pYy1hdHRyaWJ1dGUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQzs7O0FBT2hGLElBQWEsdUJBQXVCLEdBQXBDLE1BQWEsdUJBQXVCO0lBQ2xDLFlBQXNCLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBQUcsQ0FBQztJQUU1RDs7Ozs7OztPQU9HO0lBQ0gsb0JBQW9CLENBQ2xCLE9BQWdCLEVBQ2hCLFFBQW1CLEVBQ25CLG1CQUdDOztRQUVELE1BQU0sVUFBVSxHQUNkLE9BQUEsbUJBQW1CLENBQUMsYUFBYSwwQ0FBRSxVQUFVLFlBQzdDLG1CQUFtQixDQUFDLFFBQVEsMENBQUUsVUFBVSxDQUFBLENBQUM7UUFFM0MsSUFBSSxVQUFVLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLHFCQUFxQixFQUFFLEVBQUU7WUFDL0QsaURBQWlEO1lBQ2pELE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7Z0JBQ3hDLE1BQU0sSUFBSSxHQUFHLE9BQU8sR0FBRyxLQUFLLEdBQUcsR0FBRyxDQUFDO2dCQUNuQyxNQUFNLFVBQVUsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBRXJDLG1DQUFtQztnQkFDbkMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRTtvQkFDM0MsTUFBTSxTQUFTLEdBQUcsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUN2QyxJQUFJLFFBQVEsS0FBSyxTQUFTLEVBQUU7d0JBQzFCLE1BQU0sT0FBTyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ3JDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBRTs0QkFDNUIsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7d0JBQ25DLENBQUMsQ0FBQyxDQUFDO3FCQUNKO3lCQUFNO3dCQUNMLFFBQVEsQ0FBQyxZQUFZLENBQ25CLE9BQU8sRUFDUCxJQUFJOzRCQUNGLFFBQVE7aUNBQ0wsS0FBSyxDQUFDLFdBQVcsQ0FBQztpQ0FDbEIsSUFBSSxDQUFDLEdBQUcsQ0FBQztpQ0FDVCxXQUFXLEVBQUUsRUFDbEIsU0FBUyxDQUNWLENBQUM7cUJBQ0g7Z0JBQ0gsQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztDQUNGLENBQUE7O1lBbkR5QyxnQkFBZ0I7OztBQUQ3Qyx1QkFBdUI7SUFIbkMsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztHQUNXLHVCQUF1QixDQW9EbkM7U0FwRFksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTbWFydEVkaXRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc21hcnQtZWRpdC9zZXJ2aWNlcy9zbWFydC1lZGl0LnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29udGVudFNsb3RDb21wb25lbnREYXRhIH0gZnJvbSAnLi4vbW9kZWwvY29udGVudC1zbG90LWNvbXBvbmVudC1kYXRhLm1vZGVsJztcbmltcG9ydCB7IENvbnRlbnRTbG90RGF0YSB9IGZyb20gJy4uL21vZGVsL2NvbnRlbnQtc2xvdC1kYXRhLm1vZGVsJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIER5bmFtaWNBdHRyaWJ1dGVTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHNtYXJ0RWRpdFNlcnZpY2U6IFNtYXJ0RWRpdFNlcnZpY2UpIHt9XG5cbiAgLyoqXG4gICAqIEFkZCBkeW5hbWljIGF0dHJpYnV0ZXMgdG8gRE9NLiBUaGVzZSBhdHRyaWJ1dGVzIGFyZSBleHRyYWN0ZWQgZnJvbSB0aGUgcHJvcGVydGllcyBvZiBjbXMgaXRlbXMgcmVjZWl2ZWQgZnJvbSBiYWNrZW5kLlxuICAgKiBUaGVyZSBjYW4gYnkgbWFueSBkaWZmZXJlbnQgZ3JvdXBzIG9mIHByb3BlcnRpZXMsIG9uZSBvZiB0aGVtIGlzIHNtYXJ0ZWRpdC4gQnV0IEVDIGFsbG93cyBhZGRvbnMgdG8gY3JlYXRlIGRpZmZlcmVudCBncm91cHMuXG4gICAqIEZvciBleGFtcGxlLCBwZXJzb25hbGl6YXRpb24gbWF5IGFkZCAnc2NyaXB0JyBncm91cCBldGMuXG4gICAqIEBwYXJhbSBlbGVtZW50OiBzbG90IG9yIGNtcyBjb21wb25lbnQgZWxlbWVudFxuICAgKiBAcGFyYW0gcmVuZGVyZXJcbiAgICogQHBhcmFtIGNtc1JlbmRlcmluZ0NvbnRleHQ6IGFuIG9iamVjdCBjb250YWluaW5nIHByb3BlcnRpZXMgaW4gZWFjaCBjbXMgaXRlbSByZXNwb25zZSBkYXRhXG4gICAqL1xuICBhZGREeW5hbWljQXR0cmlidXRlcyhcbiAgICBlbGVtZW50OiBFbGVtZW50LFxuICAgIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgY21zUmVuZGVyaW5nQ29udGV4dDoge1xuICAgICAgY29tcG9uZW50RGF0YT86IENvbnRlbnRTbG90Q29tcG9uZW50RGF0YTtcbiAgICAgIHNsb3REYXRhPzogQ29udGVudFNsb3REYXRhO1xuICAgIH1cbiAgKTogdm9pZCB7XG4gICAgY29uc3QgcHJvcGVydGllcyA9XG4gICAgICBjbXNSZW5kZXJpbmdDb250ZXh0LmNvbXBvbmVudERhdGE/LnByb3BlcnRpZXMgfHxcbiAgICAgIGNtc1JlbmRlcmluZ0NvbnRleHQuc2xvdERhdGE/LnByb3BlcnRpZXM7XG5cbiAgICBpZiAocHJvcGVydGllcyAmJiB0aGlzLnNtYXJ0RWRpdFNlcnZpY2UuaXNMYXVuY2hlZEluU21hcnRFZGl0KCkpIHtcbiAgICAgIC8vIGNoZWNrIGVhY2ggZ3JvdXAgb2YgcHJvcGVydGllcywgZS5nLiBzbWFydGVkaXRcbiAgICAgIE9iamVjdC5rZXlzKHByb3BlcnRpZXMpLmZvckVhY2goKGdyb3VwKSA9PiB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSAnZGF0YS0nICsgZ3JvdXAgKyAnLSc7XG4gICAgICAgIGNvbnN0IGdyb3VwUHJvcHMgPSBwcm9wZXJ0aWVzW2dyb3VwXTtcblxuICAgICAgICAvLyBjaGVjayBlYWNoIHByb3BlcnR5IGluIHRoZSBncm91cFxuICAgICAgICBPYmplY3Qua2V5cyhncm91cFByb3BzKS5mb3JFYWNoKChwcm9wTmFtZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHByb3BWYWx1ZSA9IGdyb3VwUHJvcHNbcHJvcE5hbWVdO1xuICAgICAgICAgIGlmIChwcm9wTmFtZSA9PT0gJ2NsYXNzZXMnKSB7XG4gICAgICAgICAgICBjb25zdCBjbGFzc2VzID0gcHJvcFZhbHVlLnNwbGl0KCcgJyk7XG4gICAgICAgICAgICBjbGFzc2VzLmZvckVhY2goKGNsYXNzSXRlbSkgPT4ge1xuICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NJdGVtKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZW5kZXJlci5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgICAgIGVsZW1lbnQsXG4gICAgICAgICAgICAgIG5hbWUgK1xuICAgICAgICAgICAgICAgIHByb3BOYW1lXG4gICAgICAgICAgICAgICAgICAuc3BsaXQoLyg/PVtBLVpdKS8pXG4gICAgICAgICAgICAgICAgICAuam9pbignLScpXG4gICAgICAgICAgICAgICAgICAudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgICAgICAgcHJvcFZhbHVlXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==
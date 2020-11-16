import { Injectable } from '@angular/core';
import { CMS_FLEX_COMPONENT_TYPE, JSP_INCLUDE_CMS_COMPONENT_TYPE, } from '../../../../cms/config/cms-config';
import * as i0 from "@angular/core";
export class OccCmsPageNormalizer {
    convert(source, target = {}) {
        this.normalizePageData(source, target);
        this.normalizePageSlotData(source, target);
        this.normalizePageComponentData(source, target);
        this.normalizeComponentData(source, target);
        return target;
    }
    /**
     * Converts the OCC cms page model to the `Page` in the `CmsStructureModel`.
     */
    normalizePageData(source, target) {
        if (!source) {
            return;
        }
        const page = {};
        if (source.name) {
            page.name = source.name;
        }
        if (source.typeCode) {
            page.type = source.typeCode;
        }
        if (source.label) {
            page.label = source.label;
        }
        if (source.template) {
            page.template = source.template;
        }
        if (source.uid) {
            page.pageId = source.uid;
        }
        if (source.title) {
            page.title = source.title;
        }
        if (source.properties) {
            page.properties = source.properties;
        }
        target.page = page;
    }
    /**
     * Adds a ContentSlotData for each page slot in the `CmsStructureModel`.
     */
    normalizePageSlotData(source, target) {
        if (!(source === null || source === void 0 ? void 0 : source.contentSlots)) {
            return;
        }
        if (!Array.isArray(source.contentSlots.contentSlot)) {
            source.contentSlots.contentSlot = [source.contentSlots.contentSlot];
        }
        target.page.slots = {};
        for (const slot of source.contentSlots.contentSlot) {
            target.page.slots[slot.position] = {};
            if (slot.properties) {
                target.page.slots[slot.position].properties = slot.properties;
            }
        }
    }
    /**
     * Registers the `ContentSlotComponentData` for each component.
     */
    normalizePageComponentData(source, target) {
        var _a, _b;
        if (!((_a = source === null || source === void 0 ? void 0 : source.contentSlots) === null || _a === void 0 ? void 0 : _a.contentSlot)) {
            return;
        }
        for (const slot of source.contentSlots.contentSlot) {
            if (Array.isArray((_b = slot.components) === null || _b === void 0 ? void 0 : _b.component)) {
                for (const component of slot.components.component) {
                    const comp = {
                        uid: component.uid,
                        typeCode: component.typeCode,
                    };
                    if (component.properties) {
                        comp.properties = component.properties;
                    }
                    if (component.typeCode === CMS_FLEX_COMPONENT_TYPE) {
                        comp.flexType = component.flexType;
                    }
                    else if (component.typeCode === JSP_INCLUDE_CMS_COMPONENT_TYPE) {
                        comp.flexType = component.uid;
                    }
                    else {
                        comp.flexType = component.typeCode;
                    }
                    if (!target.page.slots[slot.position].components) {
                        target.page.slots[slot.position].components = [];
                    }
                    target.page.slots[slot.position].components.push(comp);
                }
            }
        }
    }
    /**
     * Adds the actual component data whenever available in the CMS page data.
     *
     * If the data is not populated in this payload, it is loaded separately
     * (`OccCmsComponentAdapter`).
     */
    normalizeComponentData(source, target) {
        var _a, _b;
        if (!((_a = source === null || source === void 0 ? void 0 : source.contentSlots) === null || _a === void 0 ? void 0 : _a.contentSlot)) {
            return;
        }
        for (const slot of source.contentSlots.contentSlot) {
            if (Array.isArray((_b = slot.components) === null || _b === void 0 ? void 0 : _b.component)) {
                for (const component of slot.components.component) {
                    // while we're hoping to get this right from the backend api,
                    // the OCC api stills seems out of sync with the right model.
                    if (component.modifiedtime) {
                        component.modifiedTime = component.modifiedtime;
                        delete component.modifiedtime;
                    }
                    // we don't put properties into component state
                    if (component.properties) {
                        component.properties = undefined;
                    }
                    if (!target.components) {
                        target.components = [];
                    }
                    target.components.push(component);
                }
            }
        }
    }
}
OccCmsPageNormalizer.ɵprov = i0.ɵɵdefineInjectable({ factory: function OccCmsPageNormalizer_Factory() { return new OccCmsPageNormalizer(); }, token: OccCmsPageNormalizer, providedIn: "root" });
OccCmsPageNormalizer.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNtcy1wYWdlLW5vcm1hbGl6ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3NyYy9vY2MvYWRhcHRlcnMvY21zL2NvbnZlcnRlcnMvb2NjLWNtcy1wYWdlLW5vcm1hbGl6ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLDhCQUE4QixHQUMvQixNQUFNLG1DQUFtQyxDQUFDOztBQVEzQyxNQUFNLE9BQU8sb0JBQW9CO0lBRS9CLE9BQU8sQ0FDTCxNQUFtQixFQUNuQixTQUE0QixFQUFFO1FBRTlCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDNUMsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVEOztPQUVHO0lBQ08saUJBQWlCLENBQ3pCLE1BQW1CLEVBQ25CLE1BQXlCO1FBRXpCLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDWCxPQUFPO1NBQ1I7UUFDRCxNQUFNLElBQUksR0FBUyxFQUFFLENBQUM7UUFFdEIsSUFBSSxNQUFNLENBQUMsSUFBSSxFQUFFO1lBQ2YsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO1NBQ3pCO1FBQ0QsSUFBSSxNQUFNLENBQUMsUUFBUSxFQUFFO1lBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQztTQUM3QjtRQUNELElBQUksTUFBTSxDQUFDLEtBQUssRUFBRTtZQUNoQixJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7U0FDM0I7UUFDRCxJQUFJLE1BQU0sQ0FBQyxRQUFRLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDO1NBQ2pDO1FBQ0QsSUFBSSxNQUFNLENBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDO1NBQzFCO1FBQ0QsSUFBSSxNQUFNLENBQUMsS0FBSyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztTQUMzQjtRQUNELElBQUksTUFBTSxDQUFDLFVBQVUsRUFBRTtZQUNyQixJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUM7U0FDckM7UUFFRCxNQUFNLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRUQ7O09BRUc7SUFDTyxxQkFBcUIsQ0FDN0IsTUFBbUIsRUFDbkIsTUFBeUI7UUFFekIsSUFBSSxFQUFDLE1BQU0sYUFBTixNQUFNLHVCQUFOLE1BQU0sQ0FBRSxZQUFZLENBQUEsRUFBRTtZQUN6QixPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQ25ELE1BQU0sQ0FBQyxZQUFZLENBQUMsV0FBVyxHQUFHLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUNyRTtRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUN2QixLQUFLLE1BQU0sSUFBSSxJQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFO1lBQ2xELE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFxQixDQUFDO1lBQ3pELElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtnQkFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO2FBQy9EO1NBQ0Y7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDTywwQkFBMEIsQ0FDbEMsTUFBbUIsRUFDbkIsTUFBeUI7O1FBRXpCLElBQUksUUFBQyxNQUFNLGFBQU4sTUFBTSx1QkFBTixNQUFNLENBQUUsWUFBWSwwQ0FBRSxXQUFXLENBQUEsRUFBRTtZQUN0QyxPQUFPO1NBQ1I7UUFDRCxLQUFLLE1BQU0sSUFBSSxJQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFO1lBQ2xELElBQUksS0FBSyxDQUFDLE9BQU8sT0FBQyxJQUFJLENBQUMsVUFBVSwwQ0FBRSxTQUFTLENBQUMsRUFBRTtnQkFDN0MsS0FBSyxNQUFNLFNBQVMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRTtvQkFDakQsTUFBTSxJQUFJLEdBQTZCO3dCQUNyQyxHQUFHLEVBQUUsU0FBUyxDQUFDLEdBQUc7d0JBQ2xCLFFBQVEsRUFBRSxTQUFTLENBQUMsUUFBUTtxQkFDN0IsQ0FBQztvQkFDRixJQUFJLFNBQVMsQ0FBQyxVQUFVLEVBQUU7d0JBQ3hCLElBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDLFVBQVUsQ0FBQztxQkFDeEM7b0JBRUQsSUFBSSxTQUFTLENBQUMsUUFBUSxLQUFLLHVCQUF1QixFQUFFO3dCQUNsRCxJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUM7cUJBQ3BDO3lCQUFNLElBQUksU0FBUyxDQUFDLFFBQVEsS0FBSyw4QkFBOEIsRUFBRTt3QkFDaEUsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDO3FCQUMvQjt5QkFBTTt3QkFDTCxJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUM7cUJBQ3BDO29CQUNELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxFQUFFO3dCQUNoRCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztxQkFDbEQ7b0JBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ3hEO2FBQ0Y7U0FDRjtJQUNILENBQUM7SUFFRDs7Ozs7T0FLRztJQUNPLHNCQUFzQixDQUM5QixNQUFtQixFQUNuQixNQUF5Qjs7UUFFekIsSUFBSSxRQUFDLE1BQU0sYUFBTixNQUFNLHVCQUFOLE1BQU0sQ0FBRSxZQUFZLDBDQUFFLFdBQVcsQ0FBQSxFQUFFO1lBQ3RDLE9BQU87U0FDUjtRQUVELEtBQUssTUFBTSxJQUFJLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUU7WUFDbEQsSUFBSSxLQUFLLENBQUMsT0FBTyxPQUFDLElBQUksQ0FBQyxVQUFVLDBDQUFFLFNBQVMsQ0FBQyxFQUFFO2dCQUM3QyxLQUFLLE1BQU0sU0FBUyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBZ0IsRUFBRTtvQkFDeEQsNkRBQTZEO29CQUM3RCw2REFBNkQ7b0JBQzdELElBQUksU0FBUyxDQUFDLFlBQVksRUFBRTt3QkFDMUIsU0FBUyxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUMsWUFBWSxDQUFDO3dCQUNoRCxPQUFPLFNBQVMsQ0FBQyxZQUFZLENBQUM7cUJBQy9CO29CQUVELCtDQUErQztvQkFDL0MsSUFBSSxTQUFTLENBQUMsVUFBVSxFQUFFO3dCQUN4QixTQUFTLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztxQkFDbEM7b0JBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUU7d0JBQ3RCLE1BQU0sQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO3FCQUN4QjtvQkFDRCxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztpQkFDbkM7YUFDRjtTQUNGO0lBQ0gsQ0FBQzs7OztZQWpKRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ01TX0ZMRVhfQ09NUE9ORU5UX1RZUEUsXG4gIEpTUF9JTkNMVURFX0NNU19DT01QT05FTlRfVFlQRSxcbn0gZnJvbSAnLi4vLi4vLi4vLi4vY21zL2NvbmZpZy9jbXMtY29uZmlnJztcbmltcG9ydCB7IENvbnRlbnRTbG90Q29tcG9uZW50RGF0YSB9IGZyb20gJy4uLy4uLy4uLy4uL2Ntcy9tb2RlbC9jb250ZW50LXNsb3QtY29tcG9uZW50LWRhdGEubW9kZWwnO1xuaW1wb3J0IHsgQ29udGVudFNsb3REYXRhIH0gZnJvbSAnLi4vLi4vLi4vLi4vY21zL21vZGVsL2NvbnRlbnQtc2xvdC1kYXRhLm1vZGVsJztcbmltcG9ydCB7IENtc1N0cnVjdHVyZU1vZGVsLCBQYWdlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY21zL21vZGVsL3BhZ2UubW9kZWwnO1xuaW1wb3J0IHsgQ29udmVydGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbC9jb252ZXJ0ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBPY2MgfSBmcm9tICcuLi8uLi8uLi9vY2MtbW9kZWxzL29jYy5tb2RlbHMnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIE9jY0Ntc1BhZ2VOb3JtYWxpemVyXG4gIGltcGxlbWVudHMgQ29udmVydGVyPE9jYy5DTVNQYWdlLCBDbXNTdHJ1Y3R1cmVNb2RlbD4ge1xuICBjb252ZXJ0KFxuICAgIHNvdXJjZTogT2NjLkNNU1BhZ2UsXG4gICAgdGFyZ2V0OiBDbXNTdHJ1Y3R1cmVNb2RlbCA9IHt9XG4gICk6IENtc1N0cnVjdHVyZU1vZGVsIHtcbiAgICB0aGlzLm5vcm1hbGl6ZVBhZ2VEYXRhKHNvdXJjZSwgdGFyZ2V0KTtcbiAgICB0aGlzLm5vcm1hbGl6ZVBhZ2VTbG90RGF0YShzb3VyY2UsIHRhcmdldCk7XG4gICAgdGhpcy5ub3JtYWxpemVQYWdlQ29tcG9uZW50RGF0YShzb3VyY2UsIHRhcmdldCk7XG4gICAgdGhpcy5ub3JtYWxpemVDb21wb25lbnREYXRhKHNvdXJjZSwgdGFyZ2V0KTtcbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIHRoZSBPQ0MgY21zIHBhZ2UgbW9kZWwgdG8gdGhlIGBQYWdlYCBpbiB0aGUgYENtc1N0cnVjdHVyZU1vZGVsYC5cbiAgICovXG4gIHByb3RlY3RlZCBub3JtYWxpemVQYWdlRGF0YShcbiAgICBzb3VyY2U6IE9jYy5DTVNQYWdlLFxuICAgIHRhcmdldDogQ21zU3RydWN0dXJlTW9kZWxcbiAgKTogdm9pZCB7XG4gICAgaWYgKCFzb3VyY2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcGFnZTogUGFnZSA9IHt9O1xuXG4gICAgaWYgKHNvdXJjZS5uYW1lKSB7XG4gICAgICBwYWdlLm5hbWUgPSBzb3VyY2UubmFtZTtcbiAgICB9XG4gICAgaWYgKHNvdXJjZS50eXBlQ29kZSkge1xuICAgICAgcGFnZS50eXBlID0gc291cmNlLnR5cGVDb2RlO1xuICAgIH1cbiAgICBpZiAoc291cmNlLmxhYmVsKSB7XG4gICAgICBwYWdlLmxhYmVsID0gc291cmNlLmxhYmVsO1xuICAgIH1cbiAgICBpZiAoc291cmNlLnRlbXBsYXRlKSB7XG4gICAgICBwYWdlLnRlbXBsYXRlID0gc291cmNlLnRlbXBsYXRlO1xuICAgIH1cbiAgICBpZiAoc291cmNlLnVpZCkge1xuICAgICAgcGFnZS5wYWdlSWQgPSBzb3VyY2UudWlkO1xuICAgIH1cbiAgICBpZiAoc291cmNlLnRpdGxlKSB7XG4gICAgICBwYWdlLnRpdGxlID0gc291cmNlLnRpdGxlO1xuICAgIH1cbiAgICBpZiAoc291cmNlLnByb3BlcnRpZXMpIHtcbiAgICAgIHBhZ2UucHJvcGVydGllcyA9IHNvdXJjZS5wcm9wZXJ0aWVzO1xuICAgIH1cblxuICAgIHRhcmdldC5wYWdlID0gcGFnZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgQ29udGVudFNsb3REYXRhIGZvciBlYWNoIHBhZ2Ugc2xvdCBpbiB0aGUgYENtc1N0cnVjdHVyZU1vZGVsYC5cbiAgICovXG4gIHByb3RlY3RlZCBub3JtYWxpemVQYWdlU2xvdERhdGEoXG4gICAgc291cmNlOiBPY2MuQ01TUGFnZSxcbiAgICB0YXJnZXQ6IENtc1N0cnVjdHVyZU1vZGVsXG4gICk6IHZvaWQge1xuICAgIGlmICghc291cmNlPy5jb250ZW50U2xvdHMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHNvdXJjZS5jb250ZW50U2xvdHMuY29udGVudFNsb3QpKSB7XG4gICAgICBzb3VyY2UuY29udGVudFNsb3RzLmNvbnRlbnRTbG90ID0gW3NvdXJjZS5jb250ZW50U2xvdHMuY29udGVudFNsb3RdO1xuICAgIH1cbiAgICB0YXJnZXQucGFnZS5zbG90cyA9IHt9O1xuICAgIGZvciAoY29uc3Qgc2xvdCBvZiBzb3VyY2UuY29udGVudFNsb3RzLmNvbnRlbnRTbG90KSB7XG4gICAgICB0YXJnZXQucGFnZS5zbG90c1tzbG90LnBvc2l0aW9uXSA9IHt9IGFzIENvbnRlbnRTbG90RGF0YTtcbiAgICAgIGlmIChzbG90LnByb3BlcnRpZXMpIHtcbiAgICAgICAgdGFyZ2V0LnBhZ2Uuc2xvdHNbc2xvdC5wb3NpdGlvbl0ucHJvcGVydGllcyA9IHNsb3QucHJvcGVydGllcztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIHRoZSBgQ29udGVudFNsb3RDb21wb25lbnREYXRhYCBmb3IgZWFjaCBjb21wb25lbnQuXG4gICAqL1xuICBwcm90ZWN0ZWQgbm9ybWFsaXplUGFnZUNvbXBvbmVudERhdGEoXG4gICAgc291cmNlOiBPY2MuQ01TUGFnZSxcbiAgICB0YXJnZXQ6IENtc1N0cnVjdHVyZU1vZGVsXG4gICk6IHZvaWQge1xuICAgIGlmICghc291cmNlPy5jb250ZW50U2xvdHM/LmNvbnRlbnRTbG90KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGZvciAoY29uc3Qgc2xvdCBvZiBzb3VyY2UuY29udGVudFNsb3RzLmNvbnRlbnRTbG90KSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShzbG90LmNvbXBvbmVudHM/LmNvbXBvbmVudCkpIHtcbiAgICAgICAgZm9yIChjb25zdCBjb21wb25lbnQgb2Ygc2xvdC5jb21wb25lbnRzLmNvbXBvbmVudCkge1xuICAgICAgICAgIGNvbnN0IGNvbXA6IENvbnRlbnRTbG90Q29tcG9uZW50RGF0YSA9IHtcbiAgICAgICAgICAgIHVpZDogY29tcG9uZW50LnVpZCxcbiAgICAgICAgICAgIHR5cGVDb2RlOiBjb21wb25lbnQudHlwZUNvZGUsXG4gICAgICAgICAgfTtcbiAgICAgICAgICBpZiAoY29tcG9uZW50LnByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgIGNvbXAucHJvcGVydGllcyA9IGNvbXBvbmVudC5wcm9wZXJ0aWVzO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChjb21wb25lbnQudHlwZUNvZGUgPT09IENNU19GTEVYX0NPTVBPTkVOVF9UWVBFKSB7XG4gICAgICAgICAgICBjb21wLmZsZXhUeXBlID0gY29tcG9uZW50LmZsZXhUeXBlO1xuICAgICAgICAgIH0gZWxzZSBpZiAoY29tcG9uZW50LnR5cGVDb2RlID09PSBKU1BfSU5DTFVERV9DTVNfQ09NUE9ORU5UX1RZUEUpIHtcbiAgICAgICAgICAgIGNvbXAuZmxleFR5cGUgPSBjb21wb25lbnQudWlkO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb21wLmZsZXhUeXBlID0gY29tcG9uZW50LnR5cGVDb2RlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIXRhcmdldC5wYWdlLnNsb3RzW3Nsb3QucG9zaXRpb25dLmNvbXBvbmVudHMpIHtcbiAgICAgICAgICAgIHRhcmdldC5wYWdlLnNsb3RzW3Nsb3QucG9zaXRpb25dLmNvbXBvbmVudHMgPSBbXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGFyZ2V0LnBhZ2Uuc2xvdHNbc2xvdC5wb3NpdGlvbl0uY29tcG9uZW50cy5wdXNoKGNvbXApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgdGhlIGFjdHVhbCBjb21wb25lbnQgZGF0YSB3aGVuZXZlciBhdmFpbGFibGUgaW4gdGhlIENNUyBwYWdlIGRhdGEuXG4gICAqXG4gICAqIElmIHRoZSBkYXRhIGlzIG5vdCBwb3B1bGF0ZWQgaW4gdGhpcyBwYXlsb2FkLCBpdCBpcyBsb2FkZWQgc2VwYXJhdGVseVxuICAgKiAoYE9jY0Ntc0NvbXBvbmVudEFkYXB0ZXJgKS5cbiAgICovXG4gIHByb3RlY3RlZCBub3JtYWxpemVDb21wb25lbnREYXRhKFxuICAgIHNvdXJjZTogT2NjLkNNU1BhZ2UsXG4gICAgdGFyZ2V0OiBDbXNTdHJ1Y3R1cmVNb2RlbFxuICApOiB2b2lkIHtcbiAgICBpZiAoIXNvdXJjZT8uY29udGVudFNsb3RzPy5jb250ZW50U2xvdCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAoY29uc3Qgc2xvdCBvZiBzb3VyY2UuY29udGVudFNsb3RzLmNvbnRlbnRTbG90KSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShzbG90LmNvbXBvbmVudHM/LmNvbXBvbmVudCkpIHtcbiAgICAgICAgZm9yIChjb25zdCBjb21wb25lbnQgb2Ygc2xvdC5jb21wb25lbnRzLmNvbXBvbmVudCBhcyBhbnkpIHtcbiAgICAgICAgICAvLyB3aGlsZSB3ZSdyZSBob3BpbmcgdG8gZ2V0IHRoaXMgcmlnaHQgZnJvbSB0aGUgYmFja2VuZCBhcGksXG4gICAgICAgICAgLy8gdGhlIE9DQyBhcGkgc3RpbGxzIHNlZW1zIG91dCBvZiBzeW5jIHdpdGggdGhlIHJpZ2h0IG1vZGVsLlxuICAgICAgICAgIGlmIChjb21wb25lbnQubW9kaWZpZWR0aW1lKSB7XG4gICAgICAgICAgICBjb21wb25lbnQubW9kaWZpZWRUaW1lID0gY29tcG9uZW50Lm1vZGlmaWVkdGltZTtcbiAgICAgICAgICAgIGRlbGV0ZSBjb21wb25lbnQubW9kaWZpZWR0aW1lO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIHdlIGRvbid0IHB1dCBwcm9wZXJ0aWVzIGludG8gY29tcG9uZW50IHN0YXRlXG4gICAgICAgICAgaWYgKGNvbXBvbmVudC5wcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgICBjb21wb25lbnQucHJvcGVydGllcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCF0YXJnZXQuY29tcG9uZW50cykge1xuICAgICAgICAgICAgdGFyZ2V0LmNvbXBvbmVudHMgPSBbXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGFyZ2V0LmNvbXBvbmVudHMucHVzaChjb21wb25lbnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=
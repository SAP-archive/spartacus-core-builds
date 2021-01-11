import { Injectable } from '@angular/core';
import { CMS_FLEX_COMPONENT_TYPE, JSP_INCLUDE_CMS_COMPONENT_TYPE, } from '../../../../cms/config/cms-config';
import { PageRobotsMeta, } from '../../../../cms/model/page.model';
import { Occ } from '../../../occ-models/occ.models';
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
        this.normalizeRobots(source, page);
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
    /**
     * Normalizes the page robot string to an array of `PageRobotsMeta` items.
     */
    normalizeRobots(source, target) {
        const robots = [];
        if (source.robotTag) {
            switch (source.robotTag) {
                case Occ.PageRobots.INDEX_FOLLOW:
                    robots.push(PageRobotsMeta.INDEX);
                    robots.push(PageRobotsMeta.FOLLOW);
                    break;
                case Occ.PageRobots.NOINDEX_FOLLOW:
                    robots.push(PageRobotsMeta.NOINDEX);
                    robots.push(PageRobotsMeta.FOLLOW);
                    break;
                case Occ.PageRobots.INDEX_NOFOLLOW:
                    robots.push(PageRobotsMeta.INDEX);
                    robots.push(PageRobotsMeta.NOFOLLOW);
                    break;
                case Occ.PageRobots.NOINDEX_NOFOLLOW:
                    robots.push(PageRobotsMeta.NOINDEX);
                    robots.push(PageRobotsMeta.NOFOLLOW);
                    break;
            }
        }
        target.robots = robots;
    }
}
OccCmsPageNormalizer.ɵprov = i0.ɵɵdefineInjectable({ factory: function OccCmsPageNormalizer_Factory() { return new OccCmsPageNormalizer(); }, token: OccCmsPageNormalizer, providedIn: "root" });
OccCmsPageNormalizer.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNtcy1wYWdlLW5vcm1hbGl6ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3NyYy9vY2MvYWRhcHRlcnMvY21zL2NvbnZlcnRlcnMvb2NjLWNtcy1wYWdlLW5vcm1hbGl6ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLDhCQUE4QixHQUMvQixNQUFNLG1DQUFtQyxDQUFDO0FBRzNDLE9BQU8sRUFHTCxjQUFjLEdBQ2YsTUFBTSxrQ0FBa0MsQ0FBQztBQUUxQyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7O0FBR3JELE1BQU0sT0FBTyxvQkFBb0I7SUFFL0IsT0FBTyxDQUNMLE1BQW1CLEVBQ25CLFNBQTRCLEVBQUU7UUFFOUIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMscUJBQXFCLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUM1QyxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRUQ7O09BRUc7SUFDTyxpQkFBaUIsQ0FDekIsTUFBbUIsRUFDbkIsTUFBeUI7UUFFekIsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNYLE9BQU87U0FDUjtRQUNELE1BQU0sSUFBSSxHQUFTLEVBQUUsQ0FBQztRQUV0QixJQUFJLE1BQU0sQ0FBQyxJQUFJLEVBQUU7WUFDZixJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7U0FDekI7UUFDRCxJQUFJ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QUFPLENBQUMsQ0FBQztvQkFDcEMsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ3JDLE1BQU07YUFDVDtTQUNGO1FBRUQsTUFBTSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDekIsQ0FBQzs7OztZQWhMRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ01TX0ZMRVhfQ09NUE9ORU5UX1RZUEUsXG4gIEpTUF9JTkNMVURFX0NNU19DT01QT05FTlRfVFlQRSxcbn0gZnJvbSAnLi4vLi4vLi4vLi4vY21zL2NvbmZpZy9jbXMtY29uZmlnJztcbmltcG9ydCB7IENvbnRlbnRTbG90Q29tcG9uZW50RGF0YSB9IGZyb20gJy4uLy4uLy4uLy4uL2Ntcy9tb2RlbC9jb250ZW50LXNsb3QtY29tcG9uZW50LWRhdGEubW9kZWwnO1xuaW1wb3J0IHsgQ29udGVudFNsb3REYXRhIH0gZnJvbSAnLi4vLi4vLi4vLi4vY21zL21vZGVsL2NvbnRlbnQtc2xvdC1kYXRhLm1vZGVsJztcbmltcG9ydCB7XG4gIENtc1N0cnVjdHVyZU1vZGVsLFxuICBQYWdlLFxuICBQYWdlUm9ib3RzTWV0YSxcbn0gZnJvbSAnLi4vLi4vLi4vLi4vY21zL21vZGVsL3BhZ2UubW9kZWwnO1xuaW1wb3J0IHsgQ29udmVydGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbC9jb252ZXJ0ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBPY2MgfSBmcm9tICcuLi8uLi8uLi9vY2MtbW9kZWxzL29jYy5tb2RlbHMnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIE9jY0Ntc1BhZ2VOb3JtYWxpemVyXG4gIGltcGxlbWVudHMgQ29udmVydGVyPE9jYy5DTVNQYWdlLCBDbXNTdHJ1Y3R1cmVNb2RlbD4ge1xuICBjb252ZXJ0KFxuICAgIHNvdXJjZTogT2NjLkNNU1BhZ2UsXG4gICAgdGFyZ2V0OiBDbXNTdHJ1Y3R1cmVNb2RlbCA9IHt9XG4gICk6IENtc1N0cnVjdHVyZU1vZGVsIHtcbiAgICB0aGlzLm5vcm1hbGl6ZVBhZ2VEYXRhKHNvdXJjZSwgdGFyZ2V0KTtcbiAgICB0aGlzLm5vcm1hbGl6ZVBhZ2VTbG90RGF0YShzb3VyY2UsIHRhcmdldCk7XG4gICAgdGhpcy5ub3JtYWxpemVQYWdlQ29tcG9uZW50RGF0YShzb3VyY2UsIHRhcmdldCk7XG4gICAgdGhpcy5ub3JtYWxpemVDb21wb25lbnREYXRhKHNvdXJjZSwgdGFyZ2V0KTtcbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIHRoZSBPQ0MgY21zIHBhZ2UgbW9kZWwgdG8gdGhlIGBQYWdlYCBpbiB0aGUgYENtc1N0cnVjdHVyZU1vZGVsYC5cbiAgICovXG4gIHByb3RlY3RlZCBub3JtYWxpemVQYWdlRGF0YShcbiAgICBzb3VyY2U6IE9jYy5DTVNQYWdlLFxuICAgIHRhcmdldDogQ21zU3RydWN0dXJlTW9kZWxcbiAgKTogdm9pZCB7XG4gICAgaWYgKCFzb3VyY2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcGFnZTogUGFnZSA9IHt9O1xuXG4gICAgaWYgKHNvdXJjZS5uYW1lKSB7XG4gICAgICBwYWdlLm5hbWUgPSBzb3VyY2UubmFtZTtcbiAgICB9XG4gICAgaWYgKHNvdXJjZS50eXBlQ29kZSkge1xuICAgICAgcGFnZS50eXBlID0gc291cmNlLnR5cGVDb2RlO1xuICAgIH1cbiAgICBpZiAoc291cmNlLmxhYmVsKSB7XG4gICAgICBwYWdlLmxhYmVsID0gc291cmNlLmxhYmVsO1xuICAgIH1cbiAgICBpZiAoc291cmNlLnRlbXBsYXRlKSB7XG4gICAgICBwYWdlLnRlbXBsYXRlID0gc291cmNlLnRlbXBsYXRlO1xuICAgIH1cbiAgICBpZiAoc291cmNlLnVpZCkge1xuICAgICAgcGFnZS5wYWdlSWQgPSBzb3VyY2UudWlkO1xuICAgIH1cbiAgICBpZiAoc291cmNlLnRpdGxlKSB7XG4gICAgICBwYWdlLnRpdGxlID0gc291cmNlLnRpdGxlO1xuICAgIH1cbiAgICBpZiAoc291cmNlLnByb3BlcnRpZXMpIHtcbiAgICAgIHBhZ2UucHJvcGVydGllcyA9IHNvdXJjZS5wcm9wZXJ0aWVzO1xuICAgIH1cblxuICAgIHRoaXMubm9ybWFsaXplUm9ib3RzKHNvdXJjZSwgcGFnZSk7XG5cbiAgICB0YXJnZXQucGFnZSA9IHBhZ2U7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIENvbnRlbnRTbG90RGF0YSBmb3IgZWFjaCBwYWdlIHNsb3QgaW4gdGhlIGBDbXNTdHJ1Y3R1cmVNb2RlbGAuXG4gICAqL1xuICBwcm90ZWN0ZWQgbm9ybWFsaXplUGFnZVNsb3REYXRhKFxuICAgIHNvdXJjZTogT2NjLkNNU1BhZ2UsXG4gICAgdGFyZ2V0OiBDbXNTdHJ1Y3R1cmVNb2RlbFxuICApOiB2b2lkIHtcbiAgICBpZiAoIXNvdXJjZT8uY29udGVudFNsb3RzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghQXJyYXkuaXNBcnJheShzb3VyY2UuY29udGVudFNsb3RzLmNvbnRlbnRTbG90KSkge1xuICAgICAgc291cmNlLmNvbnRlbnRTbG90cy5jb250ZW50U2xvdCA9IFtzb3VyY2UuY29udGVudFNsb3RzLmNvbnRlbnRTbG90XTtcbiAgICB9XG4gICAgdGFyZ2V0LnBhZ2Uuc2xvdHMgPSB7fTtcbiAgICBmb3IgKGNvbnN0IHNsb3Qgb2Ygc291cmNlLmNvbnRlbnRTbG90cy5jb250ZW50U2xvdCkge1xuICAgICAgdGFyZ2V0LnBhZ2Uuc2xvdHNbc2xvdC5wb3NpdGlvbl0gPSB7fSBhcyBDb250ZW50U2xvdERhdGE7XG4gICAgICBpZiAoc2xvdC5wcm9wZXJ0aWVzKSB7XG4gICAgICAgIHRhcmdldC5wYWdlLnNsb3RzW3Nsb3QucG9zaXRpb25dLnByb3BlcnRpZXMgPSBzbG90LnByb3BlcnRpZXM7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyB0aGUgYENvbnRlbnRTbG90Q29tcG9uZW50RGF0YWAgZm9yIGVhY2ggY29tcG9uZW50LlxuICAgKi9cbiAgcHJvdGVjdGVkIG5vcm1hbGl6ZVBhZ2VDb21wb25lbnREYXRhKFxuICAgIHNvdXJjZTogT2NjLkNNU1BhZ2UsXG4gICAgdGFyZ2V0OiBDbXNTdHJ1Y3R1cmVNb2RlbFxuICApOiB2b2lkIHtcbiAgICBpZiAoIXNvdXJjZT8uY29udGVudFNsb3RzPy5jb250ZW50U2xvdCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHNsb3Qgb2Ygc291cmNlLmNvbnRlbnRTbG90cy5jb250ZW50U2xvdCkge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoc2xvdC5jb21wb25lbnRzPy5jb21wb25lbnQpKSB7XG4gICAgICAgIGZvciAoY29uc3QgY29tcG9uZW50IG9mIHNsb3QuY29tcG9uZW50cy5jb21wb25lbnQpIHtcbiAgICAgICAgICBjb25zdCBjb21wOiBDb250ZW50U2xvdENvbXBvbmVudERhdGEgPSB7XG4gICAgICAgICAgICB1aWQ6IGNvbXBvbmVudC51aWQsXG4gICAgICAgICAgICB0eXBlQ29kZTogY29tcG9uZW50LnR5cGVDb2RlLFxuICAgICAgICAgIH07XG4gICAgICAgICAgaWYgKGNvbXBvbmVudC5wcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgICBjb21wLnByb3BlcnRpZXMgPSBjb21wb25lbnQucHJvcGVydGllcztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoY29tcG9uZW50LnR5cGVDb2RlID09PSBDTVNfRkxFWF9DT01QT05FTlRfVFlQRSkge1xuICAgICAgICAgICAgY29tcC5mbGV4VHlwZSA9IGNvbXBvbmVudC5mbGV4VHlwZTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGNvbXBvbmVudC50eXBlQ29kZSA9PT0gSlNQX0lOQ0xVREVfQ01TX0NPTVBPTkVOVF9UWVBFKSB7XG4gICAgICAgICAgICBjb21wLmZsZXhUeXBlID0gY29tcG9uZW50LnVpZDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29tcC5mbGV4VHlwZSA9IGNvbXBvbmVudC50eXBlQ29kZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCF0YXJnZXQucGFnZS5zbG90c1tzbG90LnBvc2l0aW9uXS5jb21wb25lbnRzKSB7XG4gICAgICAgICAgICB0YXJnZXQucGFnZS5zbG90c1tzbG90LnBvc2l0aW9uXS5jb21wb25lbnRzID0gW107XG4gICAgICAgICAgfVxuICAgICAgICAgIHRhcmdldC5wYWdlLnNsb3RzW3Nsb3QucG9zaXRpb25dLmNvbXBvbmVudHMucHVzaChjb21wKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIHRoZSBhY3R1YWwgY29tcG9uZW50IGRhdGEgd2hlbmV2ZXIgYXZhaWxhYmxlIGluIHRoZSBDTVMgcGFnZSBkYXRhLlxuICAgKlxuICAgKiBJZiB0aGUgZGF0YSBpcyBub3QgcG9wdWxhdGVkIGluIHRoaXMgcGF5bG9hZCwgaXQgaXMgbG9hZGVkIHNlcGFyYXRlbHlcbiAgICogKGBPY2NDbXNDb21wb25lbnRBZGFwdGVyYCkuXG4gICAqL1xuICBwcm90ZWN0ZWQgbm9ybWFsaXplQ29tcG9uZW50RGF0YShcbiAgICBzb3VyY2U6IE9jYy5DTVNQYWdlLFxuICAgIHRhcmdldDogQ21zU3RydWN0dXJlTW9kZWxcbiAgKTogdm9pZCB7XG4gICAgaWYgKCFzb3VyY2U/LmNvbnRlbnRTbG90cz8uY29udGVudFNsb3QpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IHNsb3Qgb2Ygc291cmNlLmNvbnRlbnRTbG90cy5jb250ZW50U2xvdCkge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoc2xvdC5jb21wb25lbnRzPy5jb21wb25lbnQpKSB7XG4gICAgICAgIGZvciAoY29uc3QgY29tcG9uZW50IG9mIHNsb3QuY29tcG9uZW50cy5jb21wb25lbnQgYXMgYW55KSB7XG4gICAgICAgICAgLy8gd2hpbGUgd2UncmUgaG9waW5nIHRvIGdldCB0aGlzIHJpZ2h0IGZyb20gdGhlIGJhY2tlbmQgYXBpLFxuICAgICAgICAgIC8vIHRoZSBPQ0MgYXBpIHN0aWxscyBzZWVtcyBvdXQgb2Ygc3luYyB3aXRoIHRoZSByaWdodCBtb2RlbC5cbiAgICAgICAgICBpZiAoY29tcG9uZW50Lm1vZGlmaWVkdGltZSkge1xuICAgICAgICAgICAgY29tcG9uZW50Lm1vZGlmaWVkVGltZSA9IGNvbXBvbmVudC5tb2RpZmllZHRpbWU7XG4gICAgICAgICAgICBkZWxldGUgY29tcG9uZW50Lm1vZGlmaWVkdGltZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyB3ZSBkb24ndCBwdXQgcHJvcGVydGllcyBpbnRvIGNvbXBvbmVudCBzdGF0ZVxuICAgICAgICAgIGlmIChjb21wb25lbnQucHJvcGVydGllcykge1xuICAgICAgICAgICAgY29tcG9uZW50LnByb3BlcnRpZXMgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghdGFyZ2V0LmNvbXBvbmVudHMpIHtcbiAgICAgICAgICAgIHRhcmdldC5jb21wb25lbnRzID0gW107XG4gICAgICAgICAgfVxuICAgICAgICAgIHRhcmdldC5jb21wb25lbnRzLnB1c2goY29tcG9uZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBOb3JtYWxpemVzIHRoZSBwYWdlIHJvYm90IHN0cmluZyB0byBhbiBhcnJheSBvZiBgUGFnZVJvYm90c01ldGFgIGl0ZW1zLlxuICAgKi9cbiAgcHJvdGVjdGVkIG5vcm1hbGl6ZVJvYm90cyhzb3VyY2U6IE9jYy5DTVNQYWdlLCB0YXJnZXQ6IFBhZ2UpOiB2b2lkIHtcbiAgICBjb25zdCByb2JvdHMgPSBbXTtcbiAgICBpZiAoc291cmNlLnJvYm90VGFnKSB7XG4gICAgICBzd2l0Y2ggKHNvdXJjZS5yb2JvdFRhZykge1xuICAgICAgICBjYXNlIE9jYy5QYWdlUm9ib3RzLklOREVYX0ZPTExPVzpcbiAgICAgICAgICByb2JvdHMucHVzaChQYWdlUm9ib3RzTWV0YS5JTkRFWCk7XG4gICAgICAgICAgcm9ib3RzLnB1c2goUGFnZVJvYm90c01ldGEuRk9MTE9XKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBPY2MuUGFnZVJvYm90cy5OT0lOREVYX0ZPTExPVzpcbiAgICAgICAgICByb2JvdHMucHVzaChQYWdlUm9ib3RzTWV0YS5OT0lOREVYKTtcbiAgICAgICAgICByb2JvdHMucHVzaChQYWdlUm9ib3RzTWV0YS5GT0xMT1cpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIE9jYy5QYWdlUm9ib3RzLklOREVYX05PRk9MTE9XOlxuICAgICAgICAgIHJvYm90cy5wdXNoKFBhZ2VSb2JvdHNNZXRhLklOREVYKTtcbiAgICAgICAgICByb2JvdHMucHVzaChQYWdlUm9ib3RzTWV0YS5OT0ZPTExPVyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgT2NjLlBhZ2VSb2JvdHMuTk9JTkRFWF9OT0ZPTExPVzpcbiAgICAgICAgICByb2JvdHMucHVzaChQYWdlUm9ib3RzTWV0YS5OT0lOREVYKTtcbiAgICAgICAgICByb2JvdHMucHVzaChQYWdlUm9ib3RzTWV0YS5OT0ZPTExPVyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGFyZ2V0LnJvYm90cyA9IHJvYm90cztcbiAgfVxufVxuIl19
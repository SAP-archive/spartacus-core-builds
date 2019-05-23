/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CMS_FLEX_COMPONENT_TYPE, JSP_INCLUDE_CMS_COMPONENT_TYPE, } from '../../../../cms/config/cms-config';
export class OccCmsPageNormalizer {
    /**
     * @param {?} source
     * @param {?=} target
     * @return {?}
     */
    convert(source, target = {}) {
        this.normalizePageData(source, target);
        this.normalizePageSlotData(source, target);
        this.normalizePageComponentData(source, target);
        this.normalizeComponentData(source, target);
        return target;
    }
    /**
     * @private
     * @param {?} source
     * @param {?} target
     * @return {?}
     */
    normalizePageData(source, target) {
        target.page = {
            loadTime: Date.now(),
            name: source.name,
            type: source.typeCode,
            title: source.title,
            pageId: source.uid,
            template: source.template,
            slots: {},
            properties: source.properties,
        };
    }
    /**
     * @private
     * @param {?} source
     * @param {?} target
     * @return {?}
     */
    normalizePageSlotData(source, target) {
        for (const slot of source.contentSlots.contentSlot) {
            target.page.slots[slot.position] = (/** @type {?} */ ({
                components: [],
                properties: slot.properties,
            }));
        }
    }
    /**
     * @private
     * @param {?} source
     * @param {?} target
     * @return {?}
     */
    normalizePageComponentData(source, target) {
        for (const slot of source.contentSlots.contentSlot) {
            if (slot.components.component &&
                Array.isArray(slot.components.component)) {
                for (const component of slot.components.component) {
                    /** @type {?} */
                    const comp = {
                        uid: component.uid,
                        typeCode: component.typeCode,
                        properties: component.properties,
                    };
                    if (component.typeCode === CMS_FLEX_COMPONENT_TYPE) {
                        comp.flexType = component.flexType;
                    }
                    else if (component.typeCode === JSP_INCLUDE_CMS_COMPONENT_TYPE) {
                        comp.flexType = component.uid;
                    }
                    else {
                        comp.flexType = component.typeCode;
                    }
                    target.page.slots[slot.position].components.push(comp);
                }
            }
        }
    }
    /**
     * @private
     * @param {?} source
     * @param {?} target
     * @return {?}
     */
    normalizeComponentData(source, target) {
        target.components = [];
        for (const slot of source.contentSlots.contentSlot) {
            if (slot.components.component &&
                Array.isArray(slot.components.component)) {
                for (const component of (/** @type {?} */ (slot.components.component))) {
                    // we dont put properties into component state
                    if (component.properties) {
                        component.properties = undefined;
                    }
                    target.components.push(component);
                }
            }
        }
    }
}
OccCmsPageNormalizer.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNtcy1wYWdlLW5vcm1hbGl6ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvb2NjL2FkYXB0ZXJzL2Ntcy9jb252ZXJ0ZXJzL29jYy1jbXMtcGFnZS1ub3JtYWxpemVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsOEJBQThCLEdBQy9CLE1BQU0sbUNBQW1DLENBQUM7QUFRM0MsTUFBTSxPQUFPLG9CQUFvQjs7Ozs7O0lBRS9CLE9BQU8sQ0FDTCxNQUFtQixFQUNuQixTQUE0QixFQUFFO1FBRTlCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDNUMsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7Ozs7OztJQUVPLGlCQUFpQixDQUFDLE1BQVcsRUFBRSxNQUF5QjtRQUM5RCxNQUFNLENBQUMsSUFBSSxHQUFHO1lBQ1osUUFBUSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDcEIsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJO1lBQ2pCLElBQUksRUFBRSxNQUFNLENBQUMsUUFBUTtZQUNyQixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7WUFDbkIsTUFBTSxFQUFFLE1BQU0sQ0FBQyxHQUFHO1lBQ2xCLFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUTtZQUN6QixLQUFLLEVBQUUsRUFBRTtZQUNULFVBQVUsRUFBRSxNQUFNLENBQUMsVUFBVTtTQUM5QixDQUFDO0lBQ0osQ0FBQzs7Ozs7OztJQUVPLHFCQUFxQixDQUFDLE1BQVcsRUFBRSxNQUF5QjtRQUNsRSxLQUFLLE1BQU0sSUFBSSxJQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFO1lBQ2xELE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxtQkFBQTtnQkFDakMsVUFBVSxFQUFFLEVBQUU7Z0JBQ2QsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO2FBQzVCLEVBQW1CLENBQUM7U0FDdEI7SUFDSCxDQUFDOzs7Ozs7O0lBRU8sMEJBQTBCLENBQ2hDLE1BQVcsRUFDWCxNQUF5QjtRQUV6QixLQUFLLE1BQU0sSUFBSSxJQUFJLE1BQU0sQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFO1lBQ2xELElBQ0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTO2dCQUN6QixLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLEVBQ3hDO2dCQUNBLEtBQUssTUFBTSxTQUFTLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUU7OzBCQUMzQyxJQUFJLEdBQTZCO3dCQUNyQyxHQUFHLEVBQUUsU0FBUyxDQUFDLEdBQUc7d0JBQ2xCLFFBQVEsRUFBRSxTQUFTLENBQUMsUUFBUTt3QkFDNUIsVUFBVSxFQUFFLFNBQVMsQ0FBQyxVQUFVO3FCQUNqQztvQkFFRCxJQUFJLFNBQVMsQ0FBQyxRQUFRLEtBQUssdUJBQXVCLEVBQUU7d0JBQ2xELElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQztxQkFDcEM7eUJBQU0sSUFBSSxTQUFTLENBQUMsUUFBUSxLQUFLLDhCQUE4QixFQUFFO3dCQUNoRSxJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUM7cUJBQy9CO3lCQUFNO3dCQUNMLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQztxQkFDcEM7b0JBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ3hEO2FBQ0Y7U0FDRjtJQUNILENBQUM7Ozs7Ozs7SUFFTyxzQkFBc0IsQ0FBQyxNQUFXLEVBQUUsTUFBeUI7UUFDbkUsTUFBTSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFFdkIsS0FBSyxNQUFNLElBQUksSUFBSSxNQUFNLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRTtZQUNsRCxJQUNFLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUztnQkFDekIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxFQUN4QztnQkFDQSxLQUFLLE1BQU0sU0FBUyxJQUFJLG1CQUFBLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFPLEVBQUU7b0JBQ3hELDhDQUE4QztvQkFDOUMsSUFBSSxTQUFTLENBQUMsVUFBVSxFQUFFO3dCQUN4QixTQUFTLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztxQkFDbEM7b0JBQ0QsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7aUJBQ25DO2FBQ0Y7U0FDRjtJQUNILENBQUM7OztZQWxGRixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ01TX0ZMRVhfQ09NUE9ORU5UX1RZUEUsXG4gIEpTUF9JTkNMVURFX0NNU19DT01QT05FTlRfVFlQRSxcbn0gZnJvbSAnLi4vLi4vLi4vLi4vY21zL2NvbmZpZy9jbXMtY29uZmlnJztcbmltcG9ydCB7IENvbnRlbnRTbG90Q29tcG9uZW50RGF0YSB9IGZyb20gJy4uLy4uLy4uLy4uL2Ntcy9tb2RlbC9jb250ZW50LXNsb3QtY29tcG9uZW50LWRhdGEubW9kZWwnO1xuaW1wb3J0IHsgQ29udGVudFNsb3REYXRhIH0gZnJvbSAnLi4vLi4vLi4vLi4vY21zL21vZGVsL2NvbnRlbnQtc2xvdC1kYXRhLm1vZGVsJztcbmltcG9ydCB7IENtc1N0cnVjdHVyZU1vZGVsIH0gZnJvbSAnLi4vLi4vLi4vLi4vY21zL21vZGVsL3BhZ2UubW9kZWwnO1xuaW1wb3J0IHsgQ29udmVydGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbC9jb252ZXJ0ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBPY2MgfSBmcm9tICcuLi8uLi8uLi9vY2MtbW9kZWxzL29jYy5tb2RlbHMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT2NjQ21zUGFnZU5vcm1hbGl6ZXJcbiAgaW1wbGVtZW50cyBDb252ZXJ0ZXI8T2NjLkNNU1BhZ2UsIENtc1N0cnVjdHVyZU1vZGVsPiB7XG4gIGNvbnZlcnQoXG4gICAgc291cmNlOiBPY2MuQ01TUGFnZSxcbiAgICB0YXJnZXQ6IENtc1N0cnVjdHVyZU1vZGVsID0ge31cbiAgKTogQ21zU3RydWN0dXJlTW9kZWwge1xuICAgIHRoaXMubm9ybWFsaXplUGFnZURhdGEoc291cmNlLCB0YXJnZXQpO1xuICAgIHRoaXMubm9ybWFsaXplUGFnZVNsb3REYXRhKHNvdXJjZSwgdGFyZ2V0KTtcbiAgICB0aGlzLm5vcm1hbGl6ZVBhZ2VDb21wb25lbnREYXRhKHNvdXJjZSwgdGFyZ2V0KTtcbiAgICB0aGlzLm5vcm1hbGl6ZUNvbXBvbmVudERhdGEoc291cmNlLCB0YXJnZXQpO1xuICAgIHJldHVybiB0YXJnZXQ7XG4gIH1cblxuICBwcml2YXRlIG5vcm1hbGl6ZVBhZ2VEYXRhKHNvdXJjZTogYW55LCB0YXJnZXQ6IENtc1N0cnVjdHVyZU1vZGVsKTogdm9pZCB7XG4gICAgdGFyZ2V0LnBhZ2UgPSB7XG4gICAgICBsb2FkVGltZTogRGF0ZS5ub3coKSxcbiAgICAgIG5hbWU6IHNvdXJjZS5uYW1lLFxuICAgICAgdHlwZTogc291cmNlLnR5cGVDb2RlLFxuICAgICAgdGl0bGU6IHNvdXJjZS50aXRsZSxcbiAgICAgIHBhZ2VJZDogc291cmNlLnVpZCxcbiAgICAgIHRlbXBsYXRlOiBzb3VyY2UudGVtcGxhdGUsXG4gICAgICBzbG90czoge30sXG4gICAgICBwcm9wZXJ0aWVzOiBzb3VyY2UucHJvcGVydGllcyxcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBub3JtYWxpemVQYWdlU2xvdERhdGEoc291cmNlOiBhbnksIHRhcmdldDogQ21zU3RydWN0dXJlTW9kZWwpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IHNsb3Qgb2Ygc291cmNlLmNvbnRlbnRTbG90cy5jb250ZW50U2xvdCkge1xuICAgICAgdGFyZ2V0LnBhZ2Uuc2xvdHNbc2xvdC5wb3NpdGlvbl0gPSB7XG4gICAgICAgIGNvbXBvbmVudHM6IFtdLFxuICAgICAgICBwcm9wZXJ0aWVzOiBzbG90LnByb3BlcnRpZXMsXG4gICAgICB9IGFzIENvbnRlbnRTbG90RGF0YTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG5vcm1hbGl6ZVBhZ2VDb21wb25lbnREYXRhKFxuICAgIHNvdXJjZTogYW55LFxuICAgIHRhcmdldDogQ21zU3RydWN0dXJlTW9kZWxcbiAgKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBzbG90IG9mIHNvdXJjZS5jb250ZW50U2xvdHMuY29udGVudFNsb3QpIHtcbiAgICAgIGlmIChcbiAgICAgICAgc2xvdC5jb21wb25lbnRzLmNvbXBvbmVudCAmJlxuICAgICAgICBBcnJheS5pc0FycmF5KHNsb3QuY29tcG9uZW50cy5jb21wb25lbnQpXG4gICAgICApIHtcbiAgICAgICAgZm9yIChjb25zdCBjb21wb25lbnQgb2Ygc2xvdC5jb21wb25lbnRzLmNvbXBvbmVudCkge1xuICAgICAgICAgIGNvbnN0IGNvbXA6IENvbnRlbnRTbG90Q29tcG9uZW50RGF0YSA9IHtcbiAgICAgICAgICAgIHVpZDogY29tcG9uZW50LnVpZCxcbiAgICAgICAgICAgIHR5cGVDb2RlOiBjb21wb25lbnQudHlwZUNvZGUsXG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiBjb21wb25lbnQucHJvcGVydGllcyxcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgaWYgKGNvbXBvbmVudC50eXBlQ29kZSA9PT0gQ01TX0ZMRVhfQ09NUE9ORU5UX1RZUEUpIHtcbiAgICAgICAgICAgIGNvbXAuZmxleFR5cGUgPSBjb21wb25lbnQuZmxleFR5cGU7XG4gICAgICAgICAgfSBlbHNlIGlmIChjb21wb25lbnQudHlwZUNvZGUgPT09IEpTUF9JTkNMVURFX0NNU19DT01QT05FTlRfVFlQRSkge1xuICAgICAgICAgICAgY29tcC5mbGV4VHlwZSA9IGNvbXBvbmVudC51aWQ7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbXAuZmxleFR5cGUgPSBjb21wb25lbnQudHlwZUNvZGU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRhcmdldC5wYWdlLnNsb3RzW3Nsb3QucG9zaXRpb25dLmNvbXBvbmVudHMucHVzaChjb21wKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgbm9ybWFsaXplQ29tcG9uZW50RGF0YShzb3VyY2U6IGFueSwgdGFyZ2V0OiBDbXNTdHJ1Y3R1cmVNb2RlbCk6IHZvaWQge1xuICAgIHRhcmdldC5jb21wb25lbnRzID0gW107XG5cbiAgICBmb3IgKGNvbnN0IHNsb3Qgb2Ygc291cmNlLmNvbnRlbnRTbG90cy5jb250ZW50U2xvdCkge1xuICAgICAgaWYgKFxuICAgICAgICBzbG90LmNvbXBvbmVudHMuY29tcG9uZW50ICYmXG4gICAgICAgIEFycmF5LmlzQXJyYXkoc2xvdC5jb21wb25lbnRzLmNvbXBvbmVudClcbiAgICAgICkge1xuICAgICAgICBmb3IgKGNvbnN0IGNvbXBvbmVudCBvZiBzbG90LmNvbXBvbmVudHMuY29tcG9uZW50IGFzIGFueSkge1xuICAgICAgICAgIC8vIHdlIGRvbnQgcHV0IHByb3BlcnRpZXMgaW50byBjb21wb25lbnQgc3RhdGVcbiAgICAgICAgICBpZiAoY29tcG9uZW50LnByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudC5wcm9wZXJ0aWVzID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0YXJnZXQuY29tcG9uZW50cy5wdXNoKGNvbXBvbmVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==
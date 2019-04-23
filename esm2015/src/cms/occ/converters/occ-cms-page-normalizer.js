/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CMS_FLEX_COMPONENT_TYPE, JSP_INCLUDE_CMS_COMPONENT_TYPE, } from '../../config/cms-config';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNtcy1wYWdlLW5vcm1hbGl6ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL29jYy9jb252ZXJ0ZXJzL29jYy1jbXMtcGFnZS1ub3JtYWxpemVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsOEJBQThCLEdBQy9CLE1BQU0seUJBQXlCLENBQUM7QUFPakMsTUFBTSxPQUFPLG9CQUFvQjs7Ozs7O0lBRS9CLE9BQU8sQ0FBQyxNQUFlLEVBQUUsU0FBNEIsRUFBRTtRQUNyRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLDBCQUEwQixDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsc0JBQXNCLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzVDLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7Ozs7Ozs7SUFFTyxpQkFBaUIsQ0FBQyxNQUFXLEVBQUUsTUFBeUI7UUFDOUQsTUFBTSxDQUFDLElBQUksR0FBRztZQUNaLFFBQVEsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ3BCLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSTtZQUNqQixJQUFJLEVBQUUsTUFBTSxDQUFDLFFBQVE7WUFDckIsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO1lBQ25CLE1BQU0sRUFBRSxNQUFNLENBQUMsR0FBRztZQUNsQixRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVE7WUFDekIsS0FBSyxFQUFFLEVBQUU7WUFDVCxVQUFVLEVBQUUsTUFBTSxDQUFDLFVBQVU7U0FDOUIsQ0FBQztJQUNKLENBQUM7Ozs7Ozs7SUFFTyxxQkFBcUIsQ0FBQyxNQUFXLEVBQUUsTUFBeUI7UUFDbEUsS0FBSyxNQUFNLElBQUksSUFBSSxNQUFNLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRTtZQUNsRCxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsbUJBQUE7Z0JBQ2pDLFVBQVUsRUFBRSxFQUFFO2dCQUNkLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTthQUM1QixFQUFtQixDQUFDO1NBQ3RCO0lBQ0gsQ0FBQzs7Ozs7OztJQUVPLDBCQUEwQixDQUNoQyxNQUFXLEVBQ1gsTUFBeUI7UUFFekIsS0FBSyxNQUFNLElBQUksSUFBSSxNQUFNLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRTtZQUNsRCxJQUNFLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUztnQkFDekIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxFQUN4QztnQkFDQSxLQUFLLE1BQU0sU0FBUyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFOzswQkFDM0MsSUFBSSxHQUE2Qjt3QkFDckMsR0FBRyxFQUFFLFNBQVMsQ0FBQyxHQUFHO3dCQUNsQixRQUFRLEVBQUUsU0FBUyxDQUFDLFFBQVE7d0JBQzVCLFVBQVUsRUFBRSxTQUFTLENBQUMsVUFBVTtxQkFDakM7b0JBRUQsSUFBSSxTQUFTLENBQUMsUUFBUSxLQUFLLHVCQUF1QixFQUFFO3dCQUNsRCxJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUM7cUJBQ3BDO3lCQUFNLElBQUksU0FBUyxDQUFDLFFBQVEsS0FBSyw4QkFBOEIsRUFBRTt3QkFDaEUsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDO3FCQUMvQjt5QkFBTTt3QkFDTCxJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUM7cUJBQ3BDO29CQUNELE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUN4RDthQUNGO1NBQ0Y7SUFDSCxDQUFDOzs7Ozs7O0lBRU8sc0JBQXNCLENBQUMsTUFBVyxFQUFFLE1BQXlCO1FBQ25FLE1BQU0sQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBRXZCLEtBQUssTUFBTSxJQUFJLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUU7WUFDbEQsSUFDRSxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVM7Z0JBQ3pCLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsRUFDeEM7Z0JBQ0EsS0FBSyxNQUFNLFNBQVMsSUFBSSxtQkFBQSxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBTyxFQUFFO29CQUN4RCw4Q0FBOEM7b0JBQzlDLElBQUksU0FBUyxDQUFDLFVBQVUsRUFBRTt3QkFDeEIsU0FBUyxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7cUJBQ2xDO29CQUNELE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2lCQUNuQzthQUNGO1NBQ0Y7SUFDSCxDQUFDOzs7WUEvRUYsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENNU1BhZ2UgfSBmcm9tICcuLi8uLi8uLi9vY2MnO1xuaW1wb3J0IHtcbiAgQ01TX0ZMRVhfQ09NUE9ORU5UX1RZUEUsXG4gIEpTUF9JTkNMVURFX0NNU19DT01QT05FTlRfVFlQRSxcbn0gZnJvbSAnLi4vLi4vY29uZmlnL2Ntcy1jb25maWcnO1xuaW1wb3J0IHsgQ29udGVudFNsb3RDb21wb25lbnREYXRhIH0gZnJvbSAnLi4vLi4vbW9kZWwvY29udGVudC1zbG90LWNvbXBvbmVudC1kYXRhLm1vZGVsJztcbmltcG9ydCB7IENvbnRlbnRTbG90RGF0YSB9IGZyb20gJy4uLy4uL21vZGVsL2NvbnRlbnQtc2xvdC1kYXRhLm1vZGVsJztcbmltcG9ydCB7IENtc1N0cnVjdHVyZU1vZGVsIH0gZnJvbSAnLi4vLi4vbW9kZWwvcGFnZS5tb2RlbCc7XG5pbXBvcnQgeyBDb252ZXJ0ZXIgfSBmcm9tICcuLi8uLi8uLi91dGlsL2NvbnZlcnRlci5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE9jY0Ntc1BhZ2VOb3JtYWxpemVyXG4gIGltcGxlbWVudHMgQ29udmVydGVyPENNU1BhZ2UsIENtc1N0cnVjdHVyZU1vZGVsPiB7XG4gIGNvbnZlcnQoc291cmNlOiBDTVNQYWdlLCB0YXJnZXQ6IENtc1N0cnVjdHVyZU1vZGVsID0ge30pOiBDbXNTdHJ1Y3R1cmVNb2RlbCB7XG4gICAgdGhpcy5ub3JtYWxpemVQYWdlRGF0YShzb3VyY2UsIHRhcmdldCk7XG4gICAgdGhpcy5ub3JtYWxpemVQYWdlU2xvdERhdGEoc291cmNlLCB0YXJnZXQpO1xuICAgIHRoaXMubm9ybWFsaXplUGFnZUNvbXBvbmVudERhdGEoc291cmNlLCB0YXJnZXQpO1xuICAgIHRoaXMubm9ybWFsaXplQ29tcG9uZW50RGF0YShzb3VyY2UsIHRhcmdldCk7XG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfVxuXG4gIHByaXZhdGUgbm9ybWFsaXplUGFnZURhdGEoc291cmNlOiBhbnksIHRhcmdldDogQ21zU3RydWN0dXJlTW9kZWwpOiB2b2lkIHtcbiAgICB0YXJnZXQucGFnZSA9IHtcbiAgICAgIGxvYWRUaW1lOiBEYXRlLm5vdygpLFxuICAgICAgbmFtZTogc291cmNlLm5hbWUsXG4gICAgICB0eXBlOiBzb3VyY2UudHlwZUNvZGUsXG4gICAgICB0aXRsZTogc291cmNlLnRpdGxlLFxuICAgICAgcGFnZUlkOiBzb3VyY2UudWlkLFxuICAgICAgdGVtcGxhdGU6IHNvdXJjZS50ZW1wbGF0ZSxcbiAgICAgIHNsb3RzOiB7fSxcbiAgICAgIHByb3BlcnRpZXM6IHNvdXJjZS5wcm9wZXJ0aWVzLFxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIG5vcm1hbGl6ZVBhZ2VTbG90RGF0YShzb3VyY2U6IGFueSwgdGFyZ2V0OiBDbXNTdHJ1Y3R1cmVNb2RlbCk6IHZvaWQge1xuICAgIGZvciAoY29uc3Qgc2xvdCBvZiBzb3VyY2UuY29udGVudFNsb3RzLmNvbnRlbnRTbG90KSB7XG4gICAgICB0YXJnZXQucGFnZS5zbG90c1tzbG90LnBvc2l0aW9uXSA9IHtcbiAgICAgICAgY29tcG9uZW50czogW10sXG4gICAgICAgIHByb3BlcnRpZXM6IHNsb3QucHJvcGVydGllcyxcbiAgICAgIH0gYXMgQ29udGVudFNsb3REYXRhO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgbm9ybWFsaXplUGFnZUNvbXBvbmVudERhdGEoXG4gICAgc291cmNlOiBhbnksXG4gICAgdGFyZ2V0OiBDbXNTdHJ1Y3R1cmVNb2RlbFxuICApOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IHNsb3Qgb2Ygc291cmNlLmNvbnRlbnRTbG90cy5jb250ZW50U2xvdCkge1xuICAgICAgaWYgKFxuICAgICAgICBzbG90LmNvbXBvbmVudHMuY29tcG9uZW50ICYmXG4gICAgICAgIEFycmF5LmlzQXJyYXkoc2xvdC5jb21wb25lbnRzLmNvbXBvbmVudClcbiAgICAgICkge1xuICAgICAgICBmb3IgKGNvbnN0IGNvbXBvbmVudCBvZiBzbG90LmNvbXBvbmVudHMuY29tcG9uZW50KSB7XG4gICAgICAgICAgY29uc3QgY29tcDogQ29udGVudFNsb3RDb21wb25lbnREYXRhID0ge1xuICAgICAgICAgICAgdWlkOiBjb21wb25lbnQudWlkLFxuICAgICAgICAgICAgdHlwZUNvZGU6IGNvbXBvbmVudC50eXBlQ29kZSxcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IGNvbXBvbmVudC5wcm9wZXJ0aWVzLFxuICAgICAgICAgIH07XG5cbiAgICAgICAgICBpZiAoY29tcG9uZW50LnR5cGVDb2RlID09PSBDTVNfRkxFWF9DT01QT05FTlRfVFlQRSkge1xuICAgICAgICAgICAgY29tcC5mbGV4VHlwZSA9IGNvbXBvbmVudC5mbGV4VHlwZTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGNvbXBvbmVudC50eXBlQ29kZSA9PT0gSlNQX0lOQ0xVREVfQ01TX0NPTVBPTkVOVF9UWVBFKSB7XG4gICAgICAgICAgICBjb21wLmZsZXhUeXBlID0gY29tcG9uZW50LnVpZDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29tcC5mbGV4VHlwZSA9IGNvbXBvbmVudC50eXBlQ29kZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGFyZ2V0LnBhZ2Uuc2xvdHNbc2xvdC5wb3NpdGlvbl0uY29tcG9uZW50cy5wdXNoKGNvbXApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBub3JtYWxpemVDb21wb25lbnREYXRhKHNvdXJjZTogYW55LCB0YXJnZXQ6IENtc1N0cnVjdHVyZU1vZGVsKTogdm9pZCB7XG4gICAgdGFyZ2V0LmNvbXBvbmVudHMgPSBbXTtcblxuICAgIGZvciAoY29uc3Qgc2xvdCBvZiBzb3VyY2UuY29udGVudFNsb3RzLmNvbnRlbnRTbG90KSB7XG4gICAgICBpZiAoXG4gICAgICAgIHNsb3QuY29tcG9uZW50cy5jb21wb25lbnQgJiZcbiAgICAgICAgQXJyYXkuaXNBcnJheShzbG90LmNvbXBvbmVudHMuY29tcG9uZW50KVxuICAgICAgKSB7XG4gICAgICAgIGZvciAoY29uc3QgY29tcG9uZW50IG9mIHNsb3QuY29tcG9uZW50cy5jb21wb25lbnQgYXMgYW55KSB7XG4gICAgICAgICAgLy8gd2UgZG9udCBwdXQgcHJvcGVydGllcyBpbnRvIGNvbXBvbmVudCBzdGF0ZVxuICAgICAgICAgIGlmIChjb21wb25lbnQucHJvcGVydGllcykge1xuICAgICAgICAgICAgY29tcG9uZW50LnByb3BlcnRpZXMgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRhcmdldC5jb21wb25lbnRzLnB1c2goY29tcG9uZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19
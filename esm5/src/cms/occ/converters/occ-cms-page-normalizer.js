/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CMS_FLEX_COMPONENT_TYPE, JSP_INCLUDE_CMS_COMPONENT_TYPE, } from '../../config/cms-config';
var OccCmsPageNormalizer = /** @class */ (function () {
    function OccCmsPageNormalizer() {
    }
    /**
     * @param {?} source
     * @param {?=} target
     * @return {?}
     */
    OccCmsPageNormalizer.prototype.convert = /**
     * @param {?} source
     * @param {?=} target
     * @return {?}
     */
    function (source, target) {
        if (target === void 0) { target = {}; }
        this.normalizePageData(source, target);
        this.normalizePageSlotData(source, target);
        this.normalizePageComponentData(source, target);
        this.normalizeComponentData(source, target);
        return target;
    };
    /**
     * @private
     * @param {?} source
     * @param {?} target
     * @return {?}
     */
    OccCmsPageNormalizer.prototype.normalizePageData = /**
     * @private
     * @param {?} source
     * @param {?} target
     * @return {?}
     */
    function (source, target) {
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
    };
    /**
     * @private
     * @param {?} source
     * @param {?} target
     * @return {?}
     */
    OccCmsPageNormalizer.prototype.normalizePageSlotData = /**
     * @private
     * @param {?} source
     * @param {?} target
     * @return {?}
     */
    function (source, target) {
        var e_1, _a;
        try {
            for (var _b = tslib_1.__values(source.contentSlots.contentSlot), _c = _b.next(); !_c.done; _c = _b.next()) {
                var slot = _c.value;
                target.page.slots[slot.position] = (/** @type {?} */ ({
                    components: [],
                    properties: slot.properties,
                }));
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * @private
     * @param {?} source
     * @param {?} target
     * @return {?}
     */
    OccCmsPageNormalizer.prototype.normalizePageComponentData = /**
     * @private
     * @param {?} source
     * @param {?} target
     * @return {?}
     */
    function (source, target) {
        var e_2, _a, e_3, _b;
        try {
            for (var _c = tslib_1.__values(source.contentSlots.contentSlot), _d = _c.next(); !_d.done; _d = _c.next()) {
                var slot = _d.value;
                if (slot.components.component &&
                    Array.isArray(slot.components.component)) {
                    try {
                        for (var _e = tslib_1.__values(slot.components.component), _f = _e.next(); !_f.done; _f = _e.next()) {
                            var component = _f.value;
                            /** @type {?} */
                            var comp = {
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
                    catch (e_3_1) { e_3 = { error: e_3_1 }; }
                    finally {
                        try {
                            if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                        }
                        finally { if (e_3) throw e_3.error; }
                    }
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    /**
     * @private
     * @param {?} source
     * @param {?} target
     * @return {?}
     */
    OccCmsPageNormalizer.prototype.normalizeComponentData = /**
     * @private
     * @param {?} source
     * @param {?} target
     * @return {?}
     */
    function (source, target) {
        var e_4, _a, e_5, _b;
        target.components = [];
        try {
            for (var _c = tslib_1.__values(source.contentSlots.contentSlot), _d = _c.next(); !_d.done; _d = _c.next()) {
                var slot = _d.value;
                if (slot.components.component &&
                    Array.isArray(slot.components.component)) {
                    try {
                        for (var _e = tslib_1.__values((/** @type {?} */ (slot.components.component))), _f = _e.next(); !_f.done; _f = _e.next()) {
                            var component = _f.value;
                            // we dont put properties into component state
                            if (component.properties) {
                                component.properties = undefined;
                            }
                            target.components.push(component);
                        }
                    }
                    catch (e_5_1) { e_5 = { error: e_5_1 }; }
                    finally {
                        try {
                            if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                        }
                        finally { if (e_5) throw e_5.error; }
                    }
                }
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_4) throw e_4.error; }
        }
    };
    OccCmsPageNormalizer.decorators = [
        { type: Injectable }
    ];
    return OccCmsPageNormalizer;
}());
export { OccCmsPageNormalizer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNtcy1wYWdlLW5vcm1hbGl6ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL29jYy9jb252ZXJ0ZXJzL29jYy1jbXMtcGFnZS1ub3JtYWxpemVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLDhCQUE4QixHQUMvQixNQUFNLHlCQUF5QixDQUFDO0FBTWpDO0lBQUE7SUFnRkEsQ0FBQzs7Ozs7O0lBN0VDLHNDQUFPOzs7OztJQUFQLFVBQVEsTUFBZSxFQUFFLE1BQThCO1FBQTlCLHVCQUFBLEVBQUEsV0FBOEI7UUFDckQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMscUJBQXFCLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUM1QyxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOzs7Ozs7O0lBRU8sZ0RBQWlCOzs7Ozs7SUFBekIsVUFBMEIsTUFBVyxFQUFFLE1BQXlCO1FBQzlELE1BQU0sQ0FBQyxJQUFJLEdBQUc7WUFDWixRQUFRLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNwQixJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUk7WUFDakIsSUFBSSxFQUFFLE1BQU0sQ0FBQyxRQUFRO1lBQ3JCLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSztZQUNuQixNQUFNLEVBQUUsTUFBTSxDQUFDLEdBQUc7WUFDbEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRO1lBQ3pCLEtBQUssRUFBRSxFQUFF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LG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENNU1BhZ2UgfSBmcm9tICcuLi8uLi8uLi9vY2MnO1xuaW1wb3J0IHtcbiAgQ01TX0ZMRVhfQ09NUE9ORU5UX1RZUEUsXG4gIEpTUF9JTkNMVURFX0NNU19DT01QT05FTlRfVFlQRSxcbn0gZnJvbSAnLi4vLi4vY29uZmlnL2Ntcy1jb25maWcnO1xuaW1wb3J0IHsgQ29udGVudFNsb3RDb21wb25lbnREYXRhIH0gZnJvbSAnLi4vLi4vbW9kZWwvY29udGVudC1zbG90LWNvbXBvbmVudC1kYXRhLm1vZGVsJztcbmltcG9ydCB7IENvbnRlbnRTbG90RGF0YSB9IGZyb20gJy4uLy4uL21vZGVsL2NvbnRlbnQtc2xvdC1kYXRhLm1vZGVsJztcbmltcG9ydCB7IENtc1N0cnVjdHVyZU1vZGVsIH0gZnJvbSAnLi4vLi4vbW9kZWwvcGFnZS5tb2RlbCc7XG5pbXBvcnQgeyBDb252ZXJ0ZXIgfSBmcm9tICcuLi8uLi8uLi91dGlsL2NvbnZlcnRlci5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE9jY0Ntc1BhZ2VOb3JtYWxpemVyXG4gIGltcGxlbWVudHMgQ29udmVydGVyPENNU1BhZ2UsIENtc1N0cnVjdHVyZU1vZGVsPiB7XG4gIGNvbnZlcnQoc291cmNlOiBDTVNQYWdlLCB0YXJnZXQ6IENtc1N0cnVjdHVyZU1vZGVsID0ge30pOiBDbXNTdHJ1Y3R1cmVNb2RlbCB7XG4gICAgdGhpcy5ub3JtYWxpemVQYWdlRGF0YShzb3VyY2UsIHRhcmdldCk7XG4gICAgdGhpcy5ub3JtYWxpemVQYWdlU2xvdERhdGEoc291cmNlLCB0YXJnZXQpO1xuICAgIHRoaXMubm9ybWFsaXplUGFnZUNvbXBvbmVudERhdGEoc291cmNlLCB0YXJnZXQpO1xuICAgIHRoaXMubm9ybWFsaXplQ29tcG9uZW50RGF0YShzb3VyY2UsIHRhcmdldCk7XG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfVxuXG4gIHByaXZhdGUgbm9ybWFsaXplUGFnZURhdGEoc291cmNlOiBhbnksIHRhcmdldDogQ21zU3RydWN0dXJlTW9kZWwpOiB2b2lkIHtcbiAgICB0YXJnZXQucGFnZSA9IHtcbiAgICAgIGxvYWRUaW1lOiBEYXRlLm5vdygpLFxuICAgICAgbmFtZTogc291cmNlLm5hbWUsXG4gICAgICB0eXBlOiBzb3VyY2UudHlwZUNvZGUsXG4gICAgICB0aXRsZTogc291cmNlLnRpdGxlLFxuICAgICAgcGFnZUlkOiBzb3VyY2UudWlkLFxuICAgICAgdGVtcGxhdGU6IHNvdXJjZS50ZW1wbGF0ZSxcbiAgICAgIHNsb3RzOiB7fSxcbiAgICAgIHByb3BlcnRpZXM6IHNvdXJjZS5wcm9wZXJ0aWVzLFxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIG5vcm1hbGl6ZVBhZ2VTbG90RGF0YShzb3VyY2U6IGFueSwgdGFyZ2V0OiBDbXNTdHJ1Y3R1cmVNb2RlbCk6IHZvaWQge1xuICAgIGZvciAoY29uc3Qgc2xvdCBvZiBzb3VyY2UuY29udGVudFNsb3RzLmNvbnRlbnRTbG90KSB7XG4gICAgICB0YXJnZXQucGFnZS5zbG90c1tzbG90LnBvc2l0aW9uXSA9IHtcbiAgICAgICAgY29tcG9uZW50czogW10sXG4gICAgICAgIHByb3BlcnRpZXM6IHNsb3QucHJvcGVydGllcyxcbiAgICAgIH0gYXMgQ29udGVudFNsb3REYXRhO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgbm9ybWFsaXplUGFnZUNvbXBvbmVudERhdGEoXG4gICAgc291cmNlOiBhbnksXG4gICAgdGFyZ2V0OiBDbXNTdHJ1Y3R1cmVNb2RlbFxuICApOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IHNsb3Qgb2Ygc291cmNlLmNvbnRlbnRTbG90cy5jb250ZW50U2xvdCkge1xuICAgICAgaWYgKFxuICAgICAgICBzbG90LmNvbXBvbmVudHMuY29tcG9uZW50ICYmXG4gICAgICAgIEFycmF5LmlzQXJyYXkoc2xvdC5jb21wb25lbnRzLmNvbXBvbmVudClcbiAgICAgICkge1xuICAgICAgICBmb3IgKGNvbnN0IGNvbXBvbmVudCBvZiBzbG90LmNvbXBvbmVudHMuY29tcG9uZW50KSB7XG4gICAgICAgICAgY29uc3QgY29tcDogQ29udGVudFNsb3RDb21wb25lbnREYXRhID0ge1xuICAgICAgICAgICAgdWlkOiBjb21wb25lbnQudWlkLFxuICAgICAgICAgICAgdHlwZUNvZGU6IGNvbXBvbmVudC50eXBlQ29kZSxcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IGNvbXBvbmVudC5wcm9wZXJ0aWVzLFxuICAgICAgICAgIH07XG5cbiAgICAgICAgICBpZiAoY29tcG9uZW50LnR5cGVDb2RlID09PSBDTVNfRkxFWF9DT01QT05FTlRfVFlQRSkge1xuICAgICAgICAgICAgY29tcC5mbGV4VHlwZSA9IGNvbXBvbmVudC5mbGV4VHlwZTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGNvbXBvbmVudC50eXBlQ29kZSA9PT0gSlNQX0lOQ0xVREVfQ01TX0NPTVBPTkVOVF9UWVBFKSB7XG4gICAgICAgICAgICBjb21wLmZsZXhUeXBlID0gY29tcG9uZW50LnVpZDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29tcC5mbGV4VHlwZSA9IGNvbXBvbmVudC50eXBlQ29kZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGFyZ2V0LnBhZ2Uuc2xvdHNbc2xvdC5wb3NpdGlvbl0uY29tcG9uZW50cy5wdXNoKGNvbXApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBub3JtYWxpemVDb21wb25lbnREYXRhKHNvdXJjZTogYW55LCB0YXJnZXQ6IENtc1N0cnVjdHVyZU1vZGVsKTogdm9pZCB7XG4gICAgdGFyZ2V0LmNvbXBvbmVudHMgPSBbXTtcblxuICAgIGZvciAoY29uc3Qgc2xvdCBvZiBzb3VyY2UuY29udGVudFNsb3RzLmNvbnRlbnRTbG90KSB7XG4gICAgICBpZiAoXG4gICAgICAgIHNsb3QuY29tcG9uZW50cy5jb21wb25lbnQgJiZcbiAgICAgICAgQXJyYXkuaXNBcnJheShzbG90LmNvbXBvbmVudHMuY29tcG9uZW50KVxuICAgICAgKSB7XG4gICAgICAgIGZvciAoY29uc3QgY29tcG9uZW50IG9mIHNsb3QuY29tcG9uZW50cy5jb21wb25lbnQgYXMgYW55KSB7XG4gICAgICAgICAgLy8gd2UgZG9udCBwdXQgcHJvcGVydGllcyBpbnRvIGNvbXBvbmVudCBzdGF0ZVxuICAgICAgICAgIGlmIChjb21wb25lbnQucHJvcGVydGllcykge1xuICAgICAgICAgICAgY29tcG9uZW50LnByb3BlcnRpZXMgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRhcmdldC5jb21wb25lbnRzLnB1c2goY29tcG9uZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CMS_FLEX_COMPONENT_TYPE, JSP_INCLUDE_CMS_COMPONENT_TYPE, } from '../../../../cms/config/cms-config';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNtcy1wYWdlLW5vcm1hbGl6ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvb2NjL2FkYXB0ZXJzL2Ntcy9jb252ZXJ0ZXJzL29jYy1jbXMtcGFnZS1ub3JtYWxpemVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLDhCQUE4QixHQUMvQixNQUFNLG1DQUFtQyxDQUFDO0FBTzNDO0lBQUE7SUFtRkEsQ0FBQzs7Ozs7O0lBaEZDLHNDQUFPOzs7OztJQUFQLFVBQ0UsTUFBbUIsRUFDbkIsTUFBOEI7UUFBOUIsdUJBQUEsRUFBQSxXQUE4QjtRQUU5QixJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLDBCQUEwQixDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsc0JBQXNCLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzVDLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7Ozs7Ozs7SUFFTyxnREFBaUI7Ozs7OztJQUF6QixVQUEwQixNQUFXLEVBQUUsTUFBeUI7UUFDOUQsTUFBTSxDQUFDLElBQUksR0FBRztZQUNaLFFBQVEsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ3BCLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSTtZQUNqQixJQUFJLEVBQUUsTUFBTSxDQUFDLFFBQVE7WUFDckIsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO1lBQ25CLE1BQU0sRUFBRSxNQUFNLENBQUMsR0FBRztZQUNsQixRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVE7WUFDekIsS0FB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SUFtRkM7U0FsRlksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ01TX0ZMRVhfQ09NUE9ORU5UX1RZUEUsXG4gIEpTUF9JTkNMVURFX0NNU19DT01QT05FTlRfVFlQRSxcbn0gZnJvbSAnLi4vLi4vLi4vLi4vY21zL2NvbmZpZy9jbXMtY29uZmlnJztcbmltcG9ydCB7IENvbnRlbnRTbG90Q29tcG9uZW50RGF0YSB9IGZyb20gJy4uLy4uLy4uLy4uL2Ntcy9tb2RlbC9jb250ZW50LXNsb3QtY29tcG9uZW50LWRhdGEubW9kZWwnO1xuaW1wb3J0IHsgQ29udGVudFNsb3REYXRhIH0gZnJvbSAnLi4vLi4vLi4vLi4vY21zL21vZGVsL2NvbnRlbnQtc2xvdC1kYXRhLm1vZGVsJztcbmltcG9ydCB7IENtc1N0cnVjdHVyZU1vZGVsIH0gZnJvbSAnLi4vLi4vLi4vLi4vY21zL21vZGVsL3BhZ2UubW9kZWwnO1xuaW1wb3J0IHsgQ29udmVydGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbC9jb252ZXJ0ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBPY2MgfSBmcm9tICcuLi8uLi8uLi9vY2MtbW9kZWxzL29jYy5tb2RlbHMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT2NjQ21zUGFnZU5vcm1hbGl6ZXJcbiAgaW1wbGVtZW50cyBDb252ZXJ0ZXI8T2NjLkNNU1BhZ2UsIENtc1N0cnVjdHVyZU1vZGVsPiB7XG4gIGNvbnZlcnQoXG4gICAgc291cmNlOiBPY2MuQ01TUGFnZSxcbiAgICB0YXJnZXQ6IENtc1N0cnVjdHVyZU1vZGVsID0ge31cbiAgKTogQ21zU3RydWN0dXJlTW9kZWwge1xuICAgIHRoaXMubm9ybWFsaXplUGFnZURhdGEoc291cmNlLCB0YXJnZXQpO1xuICAgIHRoaXMubm9ybWFsaXplUGFnZVNsb3REYXRhKHNvdXJjZSwgdGFyZ2V0KTtcbiAgICB0aGlzLm5vcm1hbGl6ZVBhZ2VDb21wb25lbnREYXRhKHNvdXJjZSwgdGFyZ2V0KTtcbiAgICB0aGlzLm5vcm1hbGl6ZUNvbXBvbmVudERhdGEoc291cmNlLCB0YXJnZXQpO1xuICAgIHJldHVybiB0YXJnZXQ7XG4gIH1cblxuICBwcml2YXRlIG5vcm1hbGl6ZVBhZ2VEYXRhKHNvdXJjZTogYW55LCB0YXJnZXQ6IENtc1N0cnVjdHVyZU1vZGVsKTogdm9pZCB7XG4gICAgdGFyZ2V0LnBhZ2UgPSB7XG4gICAgICBsb2FkVGltZTogRGF0ZS5ub3coKSxcbiAgICAgIG5hbWU6IHNvdXJjZS5uYW1lLFxuICAgICAgdHlwZTogc291cmNlLnR5cGVDb2RlLFxuICAgICAgdGl0bGU6IHNvdXJjZS50aXRsZSxcbiAgICAgIHBhZ2VJZDogc291cmNlLnVpZCxcbiAgICAgIHRlbXBsYXRlOiBzb3VyY2UudGVtcGxhdGUsXG4gICAgICBzbG90czoge30sXG4gICAgICBwcm9wZXJ0aWVzOiBzb3VyY2UucHJvcGVydGllcyxcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBub3JtYWxpemVQYWdlU2xvdERhdGEoc291cmNlOiBhbnksIHRhcmdldDogQ21zU3RydWN0dXJlTW9kZWwpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IHNsb3Qgb2Ygc291cmNlLmNvbnRlbnRTbG90cy5jb250ZW50U2xvdCkge1xuICAgICAgdGFyZ2V0LnBhZ2Uuc2xvdHNbc2xvdC5wb3NpdGlvbl0gPSB7XG4gICAgICAgIGNvbXBvbmVudHM6IFtdLFxuICAgICAgICBwcm9wZXJ0aWVzOiBzbG90LnByb3BlcnRpZXMsXG4gICAgICB9IGFzIENvbnRlbnRTbG90RGF0YTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG5vcm1hbGl6ZVBhZ2VDb21wb25lbnREYXRhKFxuICAgIHNvdXJjZTogYW55LFxuICAgIHRhcmdldDogQ21zU3RydWN0dXJlTW9kZWxcbiAgKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBzbG90IG9mIHNvdXJjZS5jb250ZW50U2xvdHMuY29udGVudFNsb3QpIHtcbiAgICAgIGlmIChcbiAgICAgICAgc2xvdC5jb21wb25lbnRzLmNvbXBvbmVudCAmJlxuICAgICAgICBBcnJheS5pc0FycmF5KHNsb3QuY29tcG9uZW50cy5jb21wb25lbnQpXG4gICAgICApIHtcbiAgICAgICAgZm9yIChjb25zdCBjb21wb25lbnQgb2Ygc2xvdC5jb21wb25lbnRzLmNvbXBvbmVudCkge1xuICAgICAgICAgIGNvbnN0IGNvbXA6IENvbnRlbnRTbG90Q29tcG9uZW50RGF0YSA9IHtcbiAgICAgICAgICAgIHVpZDogY29tcG9uZW50LnVpZCxcbiAgICAgICAgICAgIHR5cGVDb2RlOiBjb21wb25lbnQudHlwZUNvZGUsXG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiBjb21wb25lbnQucHJvcGVydGllcyxcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgaWYgKGNvbXBvbmVudC50eXBlQ29kZSA9PT0gQ01TX0ZMRVhfQ09NUE9ORU5UX1RZUEUpIHtcbiAgICAgICAgICAgIGNvbXAuZmxleFR5cGUgPSBjb21wb25lbnQuZmxleFR5cGU7XG4gICAgICAgICAgfSBlbHNlIGlmIChjb21wb25lbnQudHlwZUNvZGUgPT09IEpTUF9JTkNMVURFX0NNU19DT01QT05FTlRfVFlQRSkge1xuICAgICAgICAgICAgY29tcC5mbGV4VHlwZSA9IGNvbXBvbmVudC51aWQ7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbXAuZmxleFR5cGUgPSBjb21wb25lbnQudHlwZUNvZGU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRhcmdldC5wYWdlLnNsb3RzW3Nsb3QucG9zaXRpb25dLmNvbXBvbmVudHMucHVzaChjb21wKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgbm9ybWFsaXplQ29tcG9uZW50RGF0YShzb3VyY2U6IGFueSwgdGFyZ2V0OiBDbXNTdHJ1Y3R1cmVNb2RlbCk6IHZvaWQge1xuICAgIHRhcmdldC5jb21wb25lbnRzID0gW107XG5cbiAgICBmb3IgKGNvbnN0IHNsb3Qgb2Ygc291cmNlLmNvbnRlbnRTbG90cy5jb250ZW50U2xvdCkge1xuICAgICAgaWYgKFxuICAgICAgICBzbG90LmNvbXBvbmVudHMuY29tcG9uZW50ICYmXG4gICAgICAgIEFycmF5LmlzQXJyYXkoc2xvdC5jb21wb25lbnRzLmNvbXBvbmVudClcbiAgICAgICkge1xuICAgICAgICBmb3IgKGNvbnN0IGNvbXBvbmVudCBvZiBzbG90LmNvbXBvbmVudHMuY29tcG9uZW50IGFzIGFueSkge1xuICAgICAgICAgIC8vIHdlIGRvbnQgcHV0IHByb3BlcnRpZXMgaW50byBjb21wb25lbnQgc3RhdGVcbiAgICAgICAgICBpZiAoY29tcG9uZW50LnByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudC5wcm9wZXJ0aWVzID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0YXJnZXQuY29tcG9uZW50cy5wdXNoKGNvbXBvbmVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==
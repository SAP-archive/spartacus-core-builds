/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CMS_FLEX_COMPONENT_TYPE, JSP_INCLUDE_CMS_COMPONENT_TYPE, } from '../config/cms-config';
import { CmsPageAdapter } from '../services/cms-page.adapter';
var OccCmsPageAdapter = /** @class */ (function (_super) {
    tslib_1.__extends(OccCmsPageAdapter, _super);
    function OccCmsPageAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} source
     * @return {?}
     */
    OccCmsPageAdapter.prototype.adapt = /**
     * @param {?} source
     * @return {?}
     */
    function (source) {
        /** @type {?} */
        var target = {};
        this.serializePageData(source, target);
        this.serializePageSlotData(source, target);
        this.serializePageComponentData(source, target);
        this.serializeComponentData(source, target);
        return target;
    };
    /**
     * @private
     * @param {?} source
     * @param {?} target
     * @return {?}
     */
    OccCmsPageAdapter.prototype.serializePageData = /**
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
    OccCmsPageAdapter.prototype.serializePageSlotData = /**
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
    OccCmsPageAdapter.prototype.serializePageComponentData = /**
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
    OccCmsPageAdapter.prototype.serializeComponentData = /**
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
    OccCmsPageAdapter.decorators = [
        { type: Injectable }
    ];
    return OccCmsPageAdapter;
}(CmsPageAdapter));
export { OccCmsPageAdapter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNtcy1wYWdlLmFkYXB0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL29jYy9vY2MtY21zLXBhZ2UuYWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUNMLHVCQUF1QixFQUN2Qiw4QkFBOEIsR0FDL0IsTUFBTSxzQkFBc0IsQ0FBQztBQUk5QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFOUQ7SUFDdUMsNkNBQXVCO0lBRDlEOztJQWdGQSxDQUFDOzs7OztJQTlFQyxpQ0FBSzs7OztJQUFMLFVBQU0sTUFBZTs7WUFDYixNQUFNLEdBQUcsRUFBRTtRQUNqQixJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLDBCQUEwQixDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsc0JBQXNCLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzVDLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7Ozs7Ozs7SUFFTyw2Q0FBaUI7Ozs7OztJQUF6QixVQUEwQixNQUFXLEVBQUUsTUFBeUI7UUFDOUQsTUFBTSxDQUFDLElBQUksR0FBRztZQUNaLFFBQVEsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ3BCLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSTtZQUNqQixJQUFJLEVBQUUsTUFBTSxDQUFDLFFBQVE7WUFDckIsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO1lBQ25CLE1BQU0sRUFBRSxNQUFNLENBQUMsR0FBRztZQUNsQixRQUFRLEVBQUUsTUFBTSxDQUFD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QUFDO0NBQUEsQUFoRkQsQ0FDdUMsY0FBYyxHQStFcEQ7U0EvRVksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ01TUGFnZSB9IGZyb20gJy4uLy4uL29jYy9pbmRleCc7XG5pbXBvcnQge1xuICBDTVNfRkxFWF9DT01QT05FTlRfVFlQRSxcbiAgSlNQX0lOQ0xVREVfQ01TX0NPTVBPTkVOVF9UWVBFLFxufSBmcm9tICcuLi9jb25maWcvY21zLWNvbmZpZyc7XG5pbXBvcnQgeyBDb250ZW50U2xvdENvbXBvbmVudERhdGEgfSBmcm9tICcuLi9tb2RlbC9jb250ZW50LXNsb3QtY29tcG9uZW50LWRhdGEubW9kZWwnO1xuaW1wb3J0IHsgQ29udGVudFNsb3REYXRhIH0gZnJvbSAnLi4vbW9kZWwvY29udGVudC1zbG90LWRhdGEubW9kZWwnO1xuaW1wb3J0IHsgQ21zU3RydWN0dXJlTW9kZWwgfSBmcm9tICcuLi9tb2RlbC9wYWdlLm1vZGVsJztcbmltcG9ydCB7IENtc1BhZ2VBZGFwdGVyIH0gZnJvbSAnLi4vc2VydmljZXMvY21zLXBhZ2UuYWRhcHRlcic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBPY2NDbXNQYWdlQWRhcHRlciBleHRlbmRzIENtc1BhZ2VBZGFwdGVyPENNU1BhZ2U+IHtcbiAgYWRhcHQoc291cmNlOiBDTVNQYWdlKTogQ21zU3RydWN0dXJlTW9kZWwge1xuICAgIGNvbnN0IHRhcmdldCA9IHt9O1xuICAgIHRoaXMuc2VyaWFsaXplUGFnZURhdGEoc291cmNlLCB0YXJnZXQpO1xuICAgIHRoaXMuc2VyaWFsaXplUGFnZVNsb3REYXRhKHNvdXJjZSwgdGFyZ2V0KTtcbiAgICB0aGlzLnNlcmlhbGl6ZVBhZ2VDb21wb25lbnREYXRhKHNvdXJjZSwgdGFyZ2V0KTtcbiAgICB0aGlzLnNlcmlhbGl6ZUNvbXBvbmVudERhdGEoc291cmNlLCB0YXJnZXQpO1xuICAgIHJldHVybiB0YXJnZXQ7XG4gIH1cblxuICBwcml2YXRlIHNlcmlhbGl6ZVBhZ2VEYXRhKHNvdXJjZTogYW55LCB0YXJnZXQ6IENtc1N0cnVjdHVyZU1vZGVsKTogdm9pZCB7XG4gICAgdGFyZ2V0LnBhZ2UgPSB7XG4gICAgICBsb2FkVGltZTogRGF0ZS5ub3coKSxcbiAgICAgIG5hbWU6IHNvdXJjZS5uYW1lLFxuICAgICAgdHlwZTogc291cmNlLnR5cGVDb2RlLFxuICAgICAgdGl0bGU6IHNvdXJjZS50aXRsZSxcbiAgICAgIHBhZ2VJZDogc291cmNlLnVpZCxcbiAgICAgIHRlbXBsYXRlOiBzb3VyY2UudGVtcGxhdGUsXG4gICAgICBzbG90czoge30sXG4gICAgICBwcm9wZXJ0aWVzOiBzb3VyY2UucHJvcGVydGllcyxcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBzZXJpYWxpemVQYWdlU2xvdERhdGEoc291cmNlOiBhbnksIHRhcmdldDogQ21zU3RydWN0dXJlTW9kZWwpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IHNsb3Qgb2Ygc291cmNlLmNvbnRlbnRTbG90cy5jb250ZW50U2xvdCkge1xuICAgICAgdGFyZ2V0LnBhZ2Uuc2xvdHNbc2xvdC5wb3NpdGlvbl0gPSB7XG4gICAgICAgIGNvbXBvbmVudHM6IFtdLFxuICAgICAgICBwcm9wZXJ0aWVzOiBzbG90LnByb3BlcnRpZXMsXG4gICAgICB9IGFzIENvbnRlbnRTbG90RGF0YTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNlcmlhbGl6ZVBhZ2VDb21wb25lbnREYXRhKFxuICAgIHNvdXJjZTogYW55LFxuICAgIHRhcmdldDogQ21zU3RydWN0dXJlTW9kZWxcbiAgKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBzbG90IG9mIHNvdXJjZS5jb250ZW50U2xvdHMuY29udGVudFNsb3QpIHtcbiAgICAgIGlmIChcbiAgICAgICAgc2xvdC5jb21wb25lbnRzLmNvbXBvbmVudCAmJlxuICAgICAgICBBcnJheS5pc0FycmF5KHNsb3QuY29tcG9uZW50cy5jb21wb25lbnQpXG4gICAgICApIHtcbiAgICAgICAgZm9yIChjb25zdCBjb21wb25lbnQgb2Ygc2xvdC5jb21wb25lbnRzLmNvbXBvbmVudCkge1xuICAgICAgICAgIGNvbnN0IGNvbXA6IENvbnRlbnRTbG90Q29tcG9uZW50RGF0YSA9IHtcbiAgICAgICAgICAgIHVpZDogY29tcG9uZW50LnVpZCxcbiAgICAgICAgICAgIHR5cGVDb2RlOiBjb21wb25lbnQudHlwZUNvZGUsXG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiBjb21wb25lbnQucHJvcGVydGllcyxcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgaWYgKGNvbXBvbmVudC50eXBlQ29kZSA9PT0gQ01TX0ZMRVhfQ09NUE9ORU5UX1RZUEUpIHtcbiAgICAgICAgICAgIGNvbXAuZmxleFR5cGUgPSBjb21wb25lbnQuZmxleFR5cGU7XG4gICAgICAgICAgfSBlbHNlIGlmIChjb21wb25lbnQudHlwZUNvZGUgPT09IEpTUF9JTkNMVURFX0NNU19DT01QT05FTlRfVFlQRSkge1xuICAgICAgICAgICAgY29tcC5mbGV4VHlwZSA9IGNvbXBvbmVudC51aWQ7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbXAuZmxleFR5cGUgPSBjb21wb25lbnQudHlwZUNvZGU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRhcmdldC5wYWdlLnNsb3RzW3Nsb3QucG9zaXRpb25dLmNvbXBvbmVudHMucHVzaChjb21wKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2VyaWFsaXplQ29tcG9uZW50RGF0YShzb3VyY2U6IGFueSwgdGFyZ2V0OiBDbXNTdHJ1Y3R1cmVNb2RlbCk6IHZvaWQge1xuICAgIHRhcmdldC5jb21wb25lbnRzID0gW107XG5cbiAgICBmb3IgKGNvbnN0IHNsb3Qgb2Ygc291cmNlLmNvbnRlbnRTbG90cy5jb250ZW50U2xvdCkge1xuICAgICAgaWYgKFxuICAgICAgICBzbG90LmNvbXBvbmVudHMuY29tcG9uZW50ICYmXG4gICAgICAgIEFycmF5LmlzQXJyYXkoc2xvdC5jb21wb25lbnRzLmNvbXBvbmVudClcbiAgICAgICkge1xuICAgICAgICBmb3IgKGNvbnN0IGNvbXBvbmVudCBvZiBzbG90LmNvbXBvbmVudHMuY29tcG9uZW50IGFzIGFueSkge1xuICAgICAgICAgIC8vIHdlIGRvbnQgcHV0IHByb3BlcnRpZXMgaW50byBjb21wb25lbnQgc3RhdGVcbiAgICAgICAgICBpZiAoY29tcG9uZW50LnByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudC5wcm9wZXJ0aWVzID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0YXJnZXQuY29tcG9uZW50cy5wdXNoKGNvbXBvbmVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==
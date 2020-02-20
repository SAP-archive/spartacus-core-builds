import { __decorate, __values } from "tslib";
import { Injectable } from '@angular/core';
import { CMS_FLEX_COMPONENT_TYPE, JSP_INCLUDE_CMS_COMPONENT_TYPE, } from '../../../../cms/config/cms-config';
import * as i0 from "@angular/core";
var OccCmsPageNormalizer = /** @class */ (function () {
    function OccCmsPageNormalizer() {
    }
    OccCmsPageNormalizer.prototype.convert = function (source, target) {
        if (target === void 0) { target = {}; }
        this.normalizePageData(source, target);
        this.normalizePageSlotData(source, target);
        this.normalizePageComponentData(source, target);
        this.normalizeComponentData(source, target);
        return target;
    };
    OccCmsPageNormalizer.prototype.normalizePageData = function (source, target) {
        target.page = {
            loadTime: Date.now(),
            name: source.name,
            type: source.typeCode,
            title: source.title,
            pageId: source.uid,
            template: source.template,
            slots: {},
            properties: source.properties,
            label: source.label,
        };
    };
    OccCmsPageNormalizer.prototype.normalizePageSlotData = function (source, target) {
        var e_1, _a;
        try {
            for (var _b = __values(source.contentSlots.contentSlot), _c = _b.next(); !_c.done; _c = _b.next()) {
                var slot = _c.value;
                target.page.slots[slot.position] = {
                    components: [],
                    properties: slot.properties,
                };
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
    OccCmsPageNormalizer.prototype.normalizePageComponentData = function (source, target) {
        var e_2, _a, e_3, _b;
        try {
            for (var _c = __values(source.contentSlots.contentSlot), _d = _c.next(); !_d.done; _d = _c.next()) {
                var slot = _d.value;
                if (slot.components.component &&
                    Array.isArray(slot.components.component)) {
                    try {
                        for (var _e = (e_3 = void 0, __values(slot.components.component)), _f = _e.next(); !_f.done; _f = _e.next()) {
                            var component = _f.value;
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
    OccCmsPageNormalizer.prototype.normalizeComponentData = function (source, target) {
        var e_4, _a, e_5, _b;
        target.components = [];
        try {
            for (var _c = __values(source.contentSlots.contentSlot), _d = _c.next(); !_d.done; _d = _c.next()) {
                var slot = _d.value;
                if (slot.components.component &&
                    Array.isArray(slot.components.component)) {
                    try {
                        for (var _e = (e_5 = void 0, __values(slot.components.component)), _f = _e.next(); !_f.done; _f = _e.next()) {
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
    OccCmsPageNormalizer.ɵprov = i0.ɵɵdefineInjectable({ factory: function OccCmsPageNormalizer_Factory() { return new OccCmsPageNormalizer(); }, token: OccCmsPageNormalizer, providedIn: "root" });
    OccCmsPageNormalizer = __decorate([
        Injectable({ providedIn: 'root' })
    ], OccCmsPageNormalizer);
    return OccCmsPageNormalizer;
}());
export { OccCmsPageNormalizer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNtcy1wYWdlLW5vcm1hbGl6ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvb2NjL2FkYXB0ZXJzL2Ntcy9jb252ZXJ0ZXJzL29jYy1jbXMtcGFnZS1ub3JtYWxpemVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsOEJBQThCLEdBQy9CLE1BQU0sbUNBQW1DLENBQUM7O0FBUTNDO0lBQUE7S0FtRkM7SUFqRkMsc0NBQU8sR0FBUCxVQUNFLE1BQW1CLEVBQ25CLE1BQThCO1FBQTlCLHVCQUFBLEVBQUEsV0FBOEI7UUFFOUIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMscUJBQXFCLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUM1QyxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRU8sZ0RBQWlCLEdBQXpCLFVBQTBCLE1BQVcsRUFBRSxNQUF5QjtRQUM5RCxNQUFNLENBQUMsSUFBSSxHQUFHO1lBQ1osUUFBUSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDcEIsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJO1lBQ2pCLElBQUksRUFBRSxNQUFNLENBQUMsUUFBUTtZQUNyQixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7WUFDbkIsTUFBTSxFQUFFLE1BQU0sQ0FBQyxHQUFHO1lBQ2xCLFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUTtZQUN6QixLQUFLLEVBQUUsRUFBRTtZQUNULFVBQVUsRUFBRSxN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QU0sRUFBRSxDQUFDO09BQ3RCLG9CQUFvQixDQW1GaEM7K0JBL0ZEO0NBK0ZDLEFBbkZELElBbUZDO1NBbkZZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENNU19GTEVYX0NPTVBPTkVOVF9UWVBFLFxuICBKU1BfSU5DTFVERV9DTVNfQ09NUE9ORU5UX1RZUEUsXG59IGZyb20gJy4uLy4uLy4uLy4uL2Ntcy9jb25maWcvY21zLWNvbmZpZyc7XG5pbXBvcnQgeyBDb250ZW50U2xvdENvbXBvbmVudERhdGEgfSBmcm9tICcuLi8uLi8uLi8uLi9jbXMvbW9kZWwvY29udGVudC1zbG90LWNvbXBvbmVudC1kYXRhLm1vZGVsJztcbmltcG9ydCB7IENvbnRlbnRTbG90RGF0YSB9IGZyb20gJy4uLy4uLy4uLy4uL2Ntcy9tb2RlbC9jb250ZW50LXNsb3QtZGF0YS5tb2RlbCc7XG5pbXBvcnQgeyBDbXNTdHJ1Y3R1cmVNb2RlbCB9IGZyb20gJy4uLy4uLy4uLy4uL2Ntcy9tb2RlbC9wYWdlLm1vZGVsJztcbmltcG9ydCB7IENvbnZlcnRlciB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWwvY29udmVydGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgT2NjIH0gZnJvbSAnLi4vLi4vLi4vb2NjLW1vZGVscy9vY2MubW9kZWxzJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBPY2NDbXNQYWdlTm9ybWFsaXplclxuICBpbXBsZW1lbnRzIENvbnZlcnRlcjxPY2MuQ01TUGFnZSwgQ21zU3RydWN0dXJlTW9kZWw+IHtcbiAgY29udmVydChcbiAgICBzb3VyY2U6IE9jYy5DTVNQYWdlLFxuICAgIHRhcmdldDogQ21zU3RydWN0dXJlTW9kZWwgPSB7fVxuICApOiBDbXNTdHJ1Y3R1cmVNb2RlbCB7XG4gICAgdGhpcy5ub3JtYWxpemVQYWdlRGF0YShzb3VyY2UsIHRhcmdldCk7XG4gICAgdGhpcy5ub3JtYWxpemVQYWdlU2xvdERhdGEoc291cmNlLCB0YXJnZXQpO1xuICAgIHRoaXMubm9ybWFsaXplUGFnZUNvbXBvbmVudERhdGEoc291cmNlLCB0YXJnZXQpO1xuICAgIHRoaXMubm9ybWFsaXplQ29tcG9uZW50RGF0YShzb3VyY2UsIHRhcmdldCk7XG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfVxuXG4gIHByaXZhdGUgbm9ybWFsaXplUGFnZURhdGEoc291cmNlOiBhbnksIHRhcmdldDogQ21zU3RydWN0dXJlTW9kZWwpOiB2b2lkIHtcbiAgICB0YXJnZXQucGFnZSA9IHtcbiAgICAgIGxvYWRUaW1lOiBEYXRlLm5vdygpLFxuICAgICAgbmFtZTogc291cmNlLm5hbWUsXG4gICAgICB0eXBlOiBzb3VyY2UudHlwZUNvZGUsXG4gICAgICB0aXRsZTogc291cmNlLnRpdGxlLFxuICAgICAgcGFnZUlkOiBzb3VyY2UudWlkLFxuICAgICAgdGVtcGxhdGU6IHNvdXJjZS50ZW1wbGF0ZSxcbiAgICAgIHNsb3RzOiB7fSxcbiAgICAgIHByb3BlcnRpZXM6IHNvdXJjZS5wcm9wZXJ0aWVzLFxuICAgICAgbGFiZWw6IHNvdXJjZS5sYWJlbCxcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBub3JtYWxpemVQYWdlU2xvdERhdGEoc291cmNlOiBhbnksIHRhcmdldDogQ21zU3RydWN0dXJlTW9kZWwpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IHNsb3Qgb2Ygc291cmNlLmNvbnRlbnRTbG90cy5jb250ZW50U2xvdCkge1xuICAgICAgdGFyZ2V0LnBhZ2Uuc2xvdHNbc2xvdC5wb3NpdGlvbl0gPSB7XG4gICAgICAgIGNvbXBvbmVudHM6IFtdLFxuICAgICAgICBwcm9wZXJ0aWVzOiBzbG90LnByb3BlcnRpZXMsXG4gICAgICB9IGFzIENvbnRlbnRTbG90RGF0YTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG5vcm1hbGl6ZVBhZ2VDb21wb25lbnREYXRhKFxuICAgIHNvdXJjZTogYW55LFxuICAgIHRhcmdldDogQ21zU3RydWN0dXJlTW9kZWxcbiAgKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBzbG90IG9mIHNvdXJjZS5jb250ZW50U2xvdHMuY29udGVudFNsb3QpIHtcbiAgICAgIGlmIChcbiAgICAgICAgc2xvdC5jb21wb25lbnRzLmNvbXBvbmVudCAmJlxuICAgICAgICBBcnJheS5pc0FycmF5KHNsb3QuY29tcG9uZW50cy5jb21wb25lbnQpXG4gICAgICApIHtcbiAgICAgICAgZm9yIChjb25zdCBjb21wb25lbnQgb2Ygc2xvdC5jb21wb25lbnRzLmNvbXBvbmVudCkge1xuICAgICAgICAgIGNvbnN0IGNvbXA6IENvbnRlbnRTbG90Q29tcG9uZW50RGF0YSA9IHtcbiAgICAgICAgICAgIHVpZDogY29tcG9uZW50LnVpZCxcbiAgICAgICAgICAgIHR5cGVDb2RlOiBjb21wb25lbnQudHlwZUNvZGUsXG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiBjb21wb25lbnQucHJvcGVydGllcyxcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgaWYgKGNvbXBvbmVudC50eXBlQ29kZSA9PT0gQ01TX0ZMRVhfQ09NUE9ORU5UX1RZUEUpIHtcbiAgICAgICAgICAgIGNvbXAuZmxleFR5cGUgPSBjb21wb25lbnQuZmxleFR5cGU7XG4gICAgICAgICAgfSBlbHNlIGlmIChjb21wb25lbnQudHlwZUNvZGUgPT09IEpTUF9JTkNMVURFX0NNU19DT01QT05FTlRfVFlQRSkge1xuICAgICAgICAgICAgY29tcC5mbGV4VHlwZSA9IGNvbXBvbmVudC51aWQ7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbXAuZmxleFR5cGUgPSBjb21wb25lbnQudHlwZUNvZGU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRhcmdldC5wYWdlLnNsb3RzW3Nsb3QucG9zaXRpb25dLmNvbXBvbmVudHMucHVzaChjb21wKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgbm9ybWFsaXplQ29tcG9uZW50RGF0YShzb3VyY2U6IGFueSwgdGFyZ2V0OiBDbXNTdHJ1Y3R1cmVNb2RlbCk6IHZvaWQge1xuICAgIHRhcmdldC5jb21wb25lbnRzID0gW107XG5cbiAgICBmb3IgKGNvbnN0IHNsb3Qgb2Ygc291cmNlLmNvbnRlbnRTbG90cy5jb250ZW50U2xvdCkge1xuICAgICAgaWYgKFxuICAgICAgICBzbG90LmNvbXBvbmVudHMuY29tcG9uZW50ICYmXG4gICAgICAgIEFycmF5LmlzQXJyYXkoc2xvdC5jb21wb25lbnRzLmNvbXBvbmVudClcbiAgICAgICkge1xuICAgICAgICBmb3IgKGNvbnN0IGNvbXBvbmVudCBvZiBzbG90LmNvbXBvbmVudHMuY29tcG9uZW50IGFzIGFueSkge1xuICAgICAgICAgIC8vIHdlIGRvbnQgcHV0IHByb3BlcnRpZXMgaW50byBjb21wb25lbnQgc3RhdGVcbiAgICAgICAgICBpZiAoY29tcG9uZW50LnByb3BlcnRpZXMpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudC5wcm9wZXJ0aWVzID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0YXJnZXQuY29tcG9uZW50cy5wdXNoKGNvbXBvbmVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==
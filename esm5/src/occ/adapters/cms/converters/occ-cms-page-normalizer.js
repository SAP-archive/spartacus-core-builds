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
        if (!Array.isArray(source.contentSlots.contentSlot)) {
            source.contentSlots.contentSlot = [source.contentSlots.contentSlot];
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNtcy1wYWdlLW5vcm1hbGl6ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvb2NjL2FkYXB0ZXJzL2Ntcy9jb252ZXJ0ZXJzL29jYy1jbXMtcGFnZS1ub3JtYWxpemVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsOEJBQThCLEdBQy9CLE1BQU0sbUNBQW1DLENBQUM7O0FBUTNDO0lBQUE7S0FzRkM7SUFwRkMsc0NBQU8sR0FBUCxVQUNFLE1BQW1CLEVBQ25CLE1BQThCO1FBQTlCLHVCQUFBLEVBQUEsV0FBOEI7UUFFOUIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMscUJBQXFCLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUM1QyxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRU8sZ0RBQWlCLEdBQXpCLFVBQTBCLE1BQVcsRUFBRSxNQUF5QjtRQUM5RCxNQUFNLENBQUMsSUFBSSxHQUFHO1lBQ1osUUFBUSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDcEIsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJO1lBQ2pCLElBQUksRUFBRSxNQUFNLENBQUMsUUFBUTtZQUNyQixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7WUFDbkIsTUFBTSxFQUFFLE1BQU0sQ0FBQyxHQUFHO1lBQ2xCLFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUTtZQUN6QixLQUFLLEVBQUUsRUFBRTtZQUNULFVBQVUsRUFBRSxN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QUM7NkJBQ2xDOzRCQUNELE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO3lCQUNuQzs7Ozs7Ozs7O2lCQUNGO2FBQ0Y7Ozs7Ozs7OztJQUNILENBQUM7O0lBckZVLG9CQUFvQjtRQURoQyxVQUFVLENBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLENBQUM7T0FDdEIsb0JBQW9CLENBc0ZoQzsrQkFsR0Q7Q0FrR0MsQUF0RkQsSUFzRkM7U0F0Rlksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ01TX0ZMRVhfQ09NUE9ORU5UX1RZUEUsXG4gIEpTUF9JTkNMVURFX0NNU19DT01QT05FTlRfVFlQRSxcbn0gZnJvbSAnLi4vLi4vLi4vLi4vY21zL2NvbmZpZy9jbXMtY29uZmlnJztcbmltcG9ydCB7IENvbnRlbnRTbG90Q29tcG9uZW50RGF0YSB9IGZyb20gJy4uLy4uLy4uLy4uL2Ntcy9tb2RlbC9jb250ZW50LXNsb3QtY29tcG9uZW50LWRhdGEubW9kZWwnO1xuaW1wb3J0IHsgQ29udGVudFNsb3REYXRhIH0gZnJvbSAnLi4vLi4vLi4vLi4vY21zL21vZGVsL2NvbnRlbnQtc2xvdC1kYXRhLm1vZGVsJztcbmltcG9ydCB7IENtc1N0cnVjdHVyZU1vZGVsIH0gZnJvbSAnLi4vLi4vLi4vLi4vY21zL21vZGVsL3BhZ2UubW9kZWwnO1xuaW1wb3J0IHsgQ29udmVydGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbC9jb252ZXJ0ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBPY2MgfSBmcm9tICcuLi8uLi8uLi9vY2MtbW9kZWxzL29jYy5tb2RlbHMnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIE9jY0Ntc1BhZ2VOb3JtYWxpemVyXG4gIGltcGxlbWVudHMgQ29udmVydGVyPE9jYy5DTVNQYWdlLCBDbXNTdHJ1Y3R1cmVNb2RlbD4ge1xuICBjb252ZXJ0KFxuICAgIHNvdXJjZTogT2NjLkNNU1BhZ2UsXG4gICAgdGFyZ2V0OiBDbXNTdHJ1Y3R1cmVNb2RlbCA9IHt9XG4gICk6IENtc1N0cnVjdHVyZU1vZGVsIHtcbiAgICB0aGlzLm5vcm1hbGl6ZVBhZ2VEYXRhKHNvdXJjZSwgdGFyZ2V0KTtcbiAgICB0aGlzLm5vcm1hbGl6ZVBhZ2VTbG90RGF0YShzb3VyY2UsIHRhcmdldCk7XG4gICAgdGhpcy5ub3JtYWxpemVQYWdlQ29tcG9uZW50RGF0YShzb3VyY2UsIHRhcmdldCk7XG4gICAgdGhpcy5ub3JtYWxpemVDb21wb25lbnREYXRhKHNvdXJjZSwgdGFyZ2V0KTtcbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9XG5cbiAgcHJpdmF0ZSBub3JtYWxpemVQYWdlRGF0YShzb3VyY2U6IGFueSwgdGFyZ2V0OiBDbXNTdHJ1Y3R1cmVNb2RlbCk6IHZvaWQge1xuICAgIHRhcmdldC5wYWdlID0ge1xuICAgICAgbG9hZFRpbWU6IERhdGUubm93KCksXG4gICAgICBuYW1lOiBzb3VyY2UubmFtZSxcbiAgICAgIHR5cGU6IHNvdXJjZS50eXBlQ29kZSxcbiAgICAgIHRpdGxlOiBzb3VyY2UudGl0bGUsXG4gICAgICBwYWdlSWQ6IHNvdXJjZS51aWQsXG4gICAgICB0ZW1wbGF0ZTogc291cmNlLnRlbXBsYXRlLFxuICAgICAgc2xvdHM6IHt9LFxuICAgICAgcHJvcGVydGllczogc291cmNlLnByb3BlcnRpZXMsXG4gICAgICBsYWJlbDogc291cmNlLmxhYmVsLFxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIG5vcm1hbGl6ZVBhZ2VTbG90RGF0YShzb3VyY2U6IGFueSwgdGFyZ2V0OiBDbXNTdHJ1Y3R1cmVNb2RlbCk6IHZvaWQge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShzb3VyY2UuY29udGVudFNsb3RzLmNvbnRlbnRTbG90KSkge1xuICAgICAgc291cmNlLmNvbnRlbnRTbG90cy5jb250ZW50U2xvdCA9IFtzb3VyY2UuY29udGVudFNsb3RzLmNvbnRlbnRTbG90XTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBzbG90IG9mIHNvdXJjZS5jb250ZW50U2xvdHMuY29udGVudFNsb3QpIHtcbiAgICAgIHRhcmdldC5wYWdlLnNsb3RzW3Nsb3QucG9zaXRpb25dID0ge1xuICAgICAgICBjb21wb25lbnRzOiBbXSxcbiAgICAgICAgcHJvcGVydGllczogc2xvdC5wcm9wZXJ0aWVzLFxuICAgICAgfSBhcyBDb250ZW50U2xvdERhdGE7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBub3JtYWxpemVQYWdlQ29tcG9uZW50RGF0YShcbiAgICBzb3VyY2U6IGFueSxcbiAgICB0YXJnZXQ6IENtc1N0cnVjdHVyZU1vZGVsXG4gICk6IHZvaWQge1xuICAgIGZvciAoY29uc3Qgc2xvdCBvZiBzb3VyY2UuY29udGVudFNsb3RzLmNvbnRlbnRTbG90KSB7XG4gICAgICBpZiAoXG4gICAgICAgIHNsb3QuY29tcG9uZW50cy5jb21wb25lbnQgJiZcbiAgICAgICAgQXJyYXkuaXNBcnJheShzbG90LmNvbXBvbmVudHMuY29tcG9uZW50KVxuICAgICAgKSB7XG4gICAgICAgIGZvciAoY29uc3QgY29tcG9uZW50IG9mIHNsb3QuY29tcG9uZW50cy5jb21wb25lbnQpIHtcbiAgICAgICAgICBjb25zdCBjb21wOiBDb250ZW50U2xvdENvbXBvbmVudERhdGEgPSB7XG4gICAgICAgICAgICB1aWQ6IGNvbXBvbmVudC51aWQsXG4gICAgICAgICAgICB0eXBlQ29kZTogY29tcG9uZW50LnR5cGVDb2RlLFxuICAgICAgICAgICAgcHJvcGVydGllczogY29tcG9uZW50LnByb3BlcnRpZXMsXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGlmIChjb21wb25lbnQudHlwZUNvZGUgPT09IENNU19GTEVYX0NPTVBPTkVOVF9UWVBFKSB7XG4gICAgICAgICAgICBjb21wLmZsZXhUeXBlID0gY29tcG9uZW50LmZsZXhUeXBlO1xuICAgICAgICAgIH0gZWxzZSBpZiAoY29tcG9uZW50LnR5cGVDb2RlID09PSBKU1BfSU5DTFVERV9DTVNfQ09NUE9ORU5UX1RZUEUpIHtcbiAgICAgICAgICAgIGNvbXAuZmxleFR5cGUgPSBjb21wb25lbnQudWlkO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb21wLmZsZXhUeXBlID0gY29tcG9uZW50LnR5cGVDb2RlO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0YXJnZXQucGFnZS5zbG90c1tzbG90LnBvc2l0aW9uXS5jb21wb25lbnRzLnB1c2goY29tcCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG5vcm1hbGl6ZUNvbXBvbmVudERhdGEoc291cmNlOiBhbnksIHRhcmdldDogQ21zU3RydWN0dXJlTW9kZWwpOiB2b2lkIHtcbiAgICB0YXJnZXQuY29tcG9uZW50cyA9IFtdO1xuXG4gICAgZm9yIChjb25zdCBzbG90IG9mIHNvdXJjZS5jb250ZW50U2xvdHMuY29udGVudFNsb3QpIHtcbiAgICAgIGlmIChcbiAgICAgICAgc2xvdC5jb21wb25lbnRzLmNvbXBvbmVudCAmJlxuICAgICAgICBBcnJheS5pc0FycmF5KHNsb3QuY29tcG9uZW50cy5jb21wb25lbnQpXG4gICAgICApIHtcbiAgICAgICAgZm9yIChjb25zdCBjb21wb25lbnQgb2Ygc2xvdC5jb21wb25lbnRzLmNvbXBvbmVudCBhcyBhbnkpIHtcbiAgICAgICAgICAvLyB3ZSBkb250IHB1dCBwcm9wZXJ0aWVzIGludG8gY29tcG9uZW50IHN0YXRlXG4gICAgICAgICAgaWYgKGNvbXBvbmVudC5wcm9wZXJ0aWVzKSB7XG4gICAgICAgICAgICBjb21wb25lbnQucHJvcGVydGllcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGFyZ2V0LmNvbXBvbmVudHMucHVzaChjb21wb25lbnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=
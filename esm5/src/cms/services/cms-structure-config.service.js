import { __assign, __decorate, __values } from "tslib";
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { CmsPageConfig, CmsPageSlotsConfig, CmsStructureConfig, } from '../config/cms-structure.config';
import * as i0 from "@angular/core";
import * as i1 from "../config/cms-structure.config";
/**
 * Service that provides access to CMS structure from a static
 * configuration or configuration file. This class uses static
 * configuration is designed in async fashion so that configurations
 * can be loaded from a file or stream.
 *
 * The intent of the `CmsStructureConfigService` however is to provide
 * fast loading pages and default cms structure for commodity commerce.
 */
var CmsStructureConfigService = /** @class */ (function () {
    function CmsStructureConfigService(cmsDataConfig) {
        this.cmsDataConfig = cmsDataConfig;
    }
    /**
     * Merge the cms structure to the pageStructure. The page structure
     * can either hold complete page structures or global structures that
     * might apply to all pages (such has header coponents).
     */
    CmsStructureConfigService.prototype.mergePageStructure = function (pageId, pageStructure) {
        var _this = this;
        return this.mergePage(pageId, pageStructure).pipe(switchMap(function (page) { return _this.mergeSlots(page); }));
    };
    /**
     *
     * Returns boolean observable to indicate whether the page should not be
     * loaded from the backend. This is useful for pages which are comoditized
     * and follow best practice.
     *
     * By default, configurable pages are driven by static configuration,
     * in order to allow for fast loading pages (preventing network delays).
     */
    CmsStructureConfigService.prototype.shouldIgnoreBackend = function (pageId) {
        return this.getPageFromConfig(pageId).pipe(map(function (page) { return !!page && !!page.ignoreBackend; }));
    };
    /**
     * returns an Observable component data from the static configuration.
     */
    CmsStructureConfigService.prototype.getComponentFromConfig = function (componentId) {
        return of(this.getComponentById(componentId));
    };
    /**
     * returns an Observable components data from the static configuration.
     */
    CmsStructureConfigService.prototype.getComponentsFromConfig = function (ids) {
        var _this = this;
        return of(ids.map(function (id) { return _this.getComponentById(id); }));
    };
    /**
     * returns an observable with the `PageConfig`.
     */
    CmsStructureConfigService.prototype.getPageFromConfig = function (pageId) {
        return of(this.cmsDataConfig.cmsStructure && this.cmsDataConfig.cmsStructure.pages
            ? this.cmsDataConfig.cmsStructure.pages.find(function (p) { return p.pageId === pageId; })
            : null);
    };
    /**
     * Merge page data from the configuration into the given structure, if any.
     * If the given page structure is empty, a page is created and the page slots are
     * are merged into the page.
     */
    CmsStructureConfigService.prototype.mergePage = function (pageId, pageStructure) {
        var _this = this;
        return this.getPageFromConfig(pageId).pipe(switchMap(function (page) {
            if (page) {
                // serialize page data
                if (!pageStructure.page) {
                    pageStructure.page = __assign({}, page);
                    pageStructure.page.slots = {};
                }
                if (!pageStructure.page.slots) {
                    pageStructure.page.slots = {};
                }
                return _this.mergeSlots(pageStructure, page.slots);
            }
            else {
                return of(pageStructure);
            }
        }));
    };
    /**
     * Adds any pre-configured slots for pages that do not use them.
     * If pages have a slot for the given position, the configiuration
     * is ingored. Even if the slot does not have inner structure (such as
     * components), so that the cms structure is able to override the (static)
     * configuration.
     */
    CmsStructureConfigService.prototype.mergeSlots = function (pageStructure, slots) {
        var e_1, _a, e_2, _b;
        // if no slots have been given, we use the global configured slots
        if (!slots &&
            this.cmsDataConfig.cmsStructure &&
            this.cmsDataConfig.cmsStructure.slots) {
            slots = this.cmsDataConfig.cmsStructure.slots;
        }
        if (!slots) {
            return of(pageStructure);
        }
        try {
            for (var _c = __values(Object.keys(slots)), _d = _c.next(); !_d.done; _d = _c.next()) {
                var position = _d.value;
                if (!Object.keys(pageStructure.page.slots).includes(position)) {
                    // the global slot isn't yet part of the page structure
                    pageStructure.page.slots[position] = {};
                    try {
                        for (var _e = (e_2 = void 0, __values(this.getComponentsByPosition(slots, position))), _f = _e.next(); !_f.done; _f = _e.next()) {
                            var component = _f.value;
                            if (!pageStructure.page.slots[position].components) {
                                pageStructure.page.slots[position].components = [];
                            }
                            pageStructure.page.slots[position].components.push({
                                uid: component.uid,
                                flexType: component.flexType,
                                typeCode: component.typeCode,
                            });
                            if (!pageStructure.components) {
                                pageStructure.components = [];
                            }
                            pageStructure.components.push(component);
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return of(pageStructure);
    };
    CmsStructureConfigService.prototype.getComponentsByPosition = function (slots, position) {
        var e_3, _a;
        var components = [];
        if (slots[position] && slots[position].componentIds) {
            try {
                for (var _b = __values(slots[position].componentIds), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var componentId = _c.value;
                    if (this.cmsDataConfig.cmsStructure &&
                        this.cmsDataConfig.cmsStructure.components) {
                        var component = this.cmsDataConfig.cmsStructure.components[componentId];
                        if (component) {
                            components.push(__assign({ uid: componentId }, component));
                        }
                    }
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_3) throw e_3.error; }
            }
        }
        return components;
    };
    CmsStructureConfigService.prototype.getComponentById = function (componentId) {
        return this.cmsDataConfig.cmsStructure &&
            this.cmsDataConfig.cmsStructure.components
            ? this.cmsDataConfig.cmsStructure.components[componentId]
            : undefined;
    };
    CmsStructureConfigService.ctorParameters = function () { return [
        { type: CmsStructureConfig }
    ]; };
    CmsStructureConfigService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CmsStructureConfigService_Factory() { return new CmsStructureConfigService(i0.ɵɵinject(i1.CmsStructureConfig)); }, token: CmsStructureConfigService, providedIn: "root" });
    CmsStructureConfigService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], CmsStructureConfigService);
    return CmsStructureConfigService;
}());
export { CmsStructureConfigService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLXN0cnVjdHVyZS1jb25maWcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jbXMvc2VydmljZXMvY21zLXN0cnVjdHVyZS1jb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEQsT0FBTyxFQUNMLGFBQWEsRUFDYixrQkFBa0IsRUFDbEIsa0JBQWtCLEdBQ25CLE1BQU0sZ0NBQWdDLENBQUM7OztBQUl4Qzs7Ozs7Ozs7R0FRRztBQUlIO0lBQ0UsbUNBQXNCLGFBQWlDO1FBQWpDLGtCQUFhLEdBQWIsYUFBYSxDQUFvQjtJQUFHLENBQUM7SUFFM0Q7Ozs7T0FJRztJQUNILHNEQUFrQixHQUFsQixVQUNFLE1BQWMsRUFDZCxhQUFnQztRQUZsQyxpQkFPQztRQUhDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUMvQyxTQUFTLENBQUMsVUFBQyxJQUFJLElBQUssT0FBQSxLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFyQixDQUFxQixDQUFDLENBQzNDLENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7Ozs7O09BUUc7SUFDSCx1REFBbUIsR0FBbkIsVUFBb0IsTUFBYztRQUNoQyxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQ3hDLEdBQUcsQ0FBQyxVQUFDLElBQUksSUFBSyxPQUFBLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQTlCLENBQThCLENBQUMsQ0FDOUMsQ0FBQztJ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QUMsVUFBVSxFQUMxQzt3QkFDQSxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQzFELFdBQVcsQ0FDWixDQUFDO3dCQUNGLElBQUksU0FBUyxFQUFFOzRCQUNiLFVBQVUsQ0FBQyxJQUFJLFlBQUcsR0FBRyxFQUFFLFdBQVcsSUFBSyxTQUFTLEVBQUcsQ0FBQzt5QkFDckQ7cUJBQ0Y7aUJBQ0Y7Ozs7Ozs7OztTQUNGO1FBQ0QsT0FBTyxVQUFVLENBQUM7SUFDcEIsQ0FBQztJQUVTLG9EQUFnQixHQUExQixVQUEyQixXQUFtQjtRQUM1QyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWTtZQUNwQyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxVQUFVO1lBQzFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDO1lBQ3pELENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDaEIsQ0FBQzs7Z0JBeEtvQyxrQkFBa0I7OztJQURuQyx5QkFBeUI7UUFIOUMsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztPQUNvQix5QkFBeUIsQ0EwSzlDO29DQWpNRDtDQWlNQyxBQTFLRCxJQTBLQztTQTFLcUIseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtcbiAgQ21zUGFnZUNvbmZpZyxcbiAgQ21zUGFnZVNsb3RzQ29uZmlnLFxuICBDbXNTdHJ1Y3R1cmVDb25maWcsXG59IGZyb20gJy4uL2NvbmZpZy9jbXMtc3RydWN0dXJlLmNvbmZpZyc7XG5pbXBvcnQgeyBDb250ZW50U2xvdENvbXBvbmVudERhdGEgfSBmcm9tICcuLi9tb2RlbC9jb250ZW50LXNsb3QtY29tcG9uZW50LWRhdGEubW9kZWwnO1xuaW1wb3J0IHsgQ21zU3RydWN0dXJlTW9kZWwgfSBmcm9tICcuLi9tb2RlbC9wYWdlLm1vZGVsJztcblxuLyoqXG4gKiBTZXJ2aWNlIHRoYXQgcHJvdmlkZXMgYWNjZXNzIHRvIENNUyBzdHJ1Y3R1cmUgZnJvbSBhIHN0YXRpY1xuICogY29uZmlndXJhdGlvbiBvciBjb25maWd1cmF0aW9uIGZpbGUuIFRoaXMgY2xhc3MgdXNlcyBzdGF0aWNcbiAqIGNvbmZpZ3VyYXRpb24gaXMgZGVzaWduZWQgaW4gYXN5bmMgZmFzaGlvbiBzbyB0aGF0IGNvbmZpZ3VyYXRpb25zXG4gKiBjYW4gYmUgbG9hZGVkIGZyb20gYSBmaWxlIG9yIHN0cmVhbS5cbiAqXG4gKiBUaGUgaW50ZW50IG9mIHRoZSBgQ21zU3RydWN0dXJlQ29uZmlnU2VydmljZWAgaG93ZXZlciBpcyB0byBwcm92aWRlXG4gKiBmYXN0IGxvYWRpbmcgcGFnZXMgYW5kIGRlZmF1bHQgY21zIHN0cnVjdHVyZSBmb3IgY29tbW9kaXR5IGNvbW1lcmNlLlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ21zU3RydWN0dXJlQ29uZmlnU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBjbXNEYXRhQ29uZmlnOiBDbXNTdHJ1Y3R1cmVDb25maWcpIHt9XG5cbiAgLyoqXG4gICAqIE1lcmdlIHRoZSBjbXMgc3RydWN0dXJlIHRvIHRoZSBwYWdlU3RydWN0dXJlLiBUaGUgcGFnZSBzdHJ1Y3R1cmVcbiAgICogY2FuIGVpdGhlciBob2xkIGNvbXBsZXRlIHBhZ2Ugc3RydWN0dXJlcyBvciBnbG9iYWwgc3RydWN0dXJlcyB0aGF0XG4gICAqIG1pZ2h0IGFwcGx5IHRvIGFsbCBwYWdlcyAoc3VjaCBoYXMgaGVhZGVyIGNvcG9uZW50cykuXG4gICAqL1xuICBtZXJnZVBhZ2VTdHJ1Y3R1cmUoXG4gICAgcGFnZUlkOiBzdHJpbmcsXG4gICAgcGFnZVN0cnVjdHVyZTogQ21zU3RydWN0dXJlTW9kZWxcbiAgKTogT2JzZXJ2YWJsZTxDbXNTdHJ1Y3R1cmVNb2RlbD4ge1xuICAgIHJldHVybiB0aGlzLm1lcmdlUGFnZShwYWdlSWQsIHBhZ2VTdHJ1Y3R1cmUpLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKHBhZ2UpID0+IHRoaXMubWVyZ2VTbG90cyhwYWdlKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIFJldHVybnMgYm9vbGVhbiBvYnNlcnZhYmxlIHRvIGluZGljYXRlIHdoZXRoZXIgdGhlIHBhZ2Ugc2hvdWxkIG5vdCBiZVxuICAgKiBsb2FkZWQgZnJvbSB0aGUgYmFja2VuZC4gVGhpcyBpcyB1c2VmdWwgZm9yIHBhZ2VzIHdoaWNoIGFyZSBjb21vZGl0aXplZFxuICAgKiBhbmQgZm9sbG93IGJlc3QgcHJhY3RpY2UuXG4gICAqXG4gICAqIEJ5IGRlZmF1bHQsIGNvbmZpZ3VyYWJsZSBwYWdlcyBhcmUgZHJpdmVuIGJ5IHN0YXRpYyBjb25maWd1cmF0aW9uLFxuICAgKiBpbiBvcmRlciB0byBhbGxvdyBmb3IgZmFzdCBsb2FkaW5nIHBhZ2VzIChwcmV2ZW50aW5nIG5ldHdvcmsgZGVsYXlzKS5cbiAgICovXG4gIHNob3VsZElnbm9yZUJhY2tlbmQocGFnZUlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRQYWdlRnJvbUNvbmZpZyhwYWdlSWQpLnBpcGUoXG4gICAgICBtYXAoKHBhZ2UpID0+ICEhcGFnZSAmJiAhIXBhZ2UuaWdub3JlQmFja2VuZClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIHJldHVybnMgYW4gT2JzZXJ2YWJsZSBjb21wb25lbnQgZGF0YSBmcm9tIHRoZSBzdGF0aWMgY29uZmlndXJhdGlvbi5cbiAgICovXG4gIGdldENvbXBvbmVudEZyb21Db25maWcoXG4gICAgY29tcG9uZW50SWQ6IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPENvbnRlbnRTbG90Q29tcG9uZW50RGF0YSB8IGFueT4ge1xuICAgIHJldHVybiBvZih0aGlzLmdldENvbXBvbmVudEJ5SWQoY29tcG9uZW50SWQpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZXR1cm5zIGFuIE9ic2VydmFibGUgY29tcG9uZW50cyBkYXRhIGZyb20gdGhlIHN0YXRpYyBjb25maWd1cmF0aW9uLlxuICAgKi9cbiAgZ2V0Q29tcG9uZW50c0Zyb21Db25maWcoXG4gICAgaWRzOiBzdHJpbmdbXVxuICApOiBPYnNlcnZhYmxlPENvbnRlbnRTbG90Q29tcG9uZW50RGF0YVtdPiB7XG4gICAgcmV0dXJuIG9mKGlkcy5tYXAoKGlkKSA9PiB0aGlzLmdldENvbXBvbmVudEJ5SWQoaWQpKSk7XG4gIH1cblxuICAvKipcbiAgICogcmV0dXJucyBhbiBvYnNlcnZhYmxlIHdpdGggdGhlIGBQYWdlQ29uZmlnYC5cbiAgICovXG4gIHByb3RlY3RlZCBnZXRQYWdlRnJvbUNvbmZpZyhwYWdlSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8Q21zUGFnZUNvbmZpZz4ge1xuICAgIHJldHVybiBvZihcbiAgICAgIHRoaXMuY21zRGF0YUNvbmZpZy5jbXNTdHJ1Y3R1cmUgJiYgdGhpcy5jbXNEYXRhQ29uZmlnLmNtc1N0cnVjdHVyZS5wYWdlc1xuICAgICAgICA/IHRoaXMuY21zRGF0YUNvbmZpZy5jbXNTdHJ1Y3R1cmUucGFnZXMuZmluZCgocCkgPT4gcC5wYWdlSWQgPT09IHBhZ2VJZClcbiAgICAgICAgOiBudWxsXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXJnZSBwYWdlIGRhdGEgZnJvbSB0aGUgY29uZmlndXJhdGlvbiBpbnRvIHRoZSBnaXZlbiBzdHJ1Y3R1cmUsIGlmIGFueS5cbiAgICogSWYgdGhlIGdpdmVuIHBhZ2Ugc3RydWN0dXJlIGlzIGVtcHR5LCBhIHBhZ2UgaXMgY3JlYXRlZCBhbmQgdGhlIHBhZ2Ugc2xvdHMgYXJlXG4gICAqIGFyZSBtZXJnZWQgaW50byB0aGUgcGFnZS5cbiAgICovXG4gIHByb3RlY3RlZCBtZXJnZVBhZ2UoXG4gICAgcGFnZUlkOiBzdHJpbmcsXG4gICAgcGFnZVN0cnVjdHVyZTogQ21zU3RydWN0dXJlTW9kZWxcbiAgKTogT2JzZXJ2YWJsZTxDbXNTdHJ1Y3R1cmVNb2RlbD4ge1xuICAgIHJldHVybiB0aGlzLmdldFBhZ2VGcm9tQ29uZmlnKHBhZ2VJZCkucGlwZShcbiAgICAgIHN3aXRjaE1hcCgocGFnZSkgPT4ge1xuICAgICAgICBpZiAocGFnZSkge1xuICAgICAgICAgIC8vIHNlcmlhbGl6ZSBwYWdlIGRhdGFcbiAgICAgICAgICBpZiAoIXBhZ2VTdHJ1Y3R1cmUucGFnZSkge1xuICAgICAgICAgICAgcGFnZVN0cnVjdHVyZS5wYWdlID0ge1xuICAgICAgICAgICAgICAuLi5wYWdlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHBhZ2VTdHJ1Y3R1cmUucGFnZS5zbG90cyA9IHt9O1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIXBhZ2VTdHJ1Y3R1cmUucGFnZS5zbG90cykge1xuICAgICAgICAgICAgcGFnZVN0cnVjdHVyZS5wYWdlLnNsb3RzID0ge307XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aGlzLm1lcmdlU2xvdHMocGFnZVN0cnVjdHVyZSwgcGFnZS5zbG90cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIG9mKHBhZ2VTdHJ1Y3R1cmUpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhbnkgcHJlLWNvbmZpZ3VyZWQgc2xvdHMgZm9yIHBhZ2VzIHRoYXQgZG8gbm90IHVzZSB0aGVtLlxuICAgKiBJZiBwYWdlcyBoYXZlIGEgc2xvdCBmb3IgdGhlIGdpdmVuIHBvc2l0aW9uLCB0aGUgY29uZmlnaXVyYXRpb25cbiAgICogaXMgaW5nb3JlZC4gRXZlbiBpZiB0aGUgc2xvdCBkb2VzIG5vdCBoYXZlIGlubmVyIHN0cnVjdHVyZSAoc3VjaCBhc1xuICAgKiBjb21wb25lbnRzKSwgc28gdGhhdCB0aGUgY21zIHN0cnVjdHVyZSBpcyBhYmxlIHRvIG92ZXJyaWRlIHRoZSAoc3RhdGljKVxuICAgKiBjb25maWd1cmF0aW9uLlxuICAgKi9cbiAgcHJvdGVjdGVkIG1lcmdlU2xvdHMoXG4gICAgcGFnZVN0cnVjdHVyZTogQ21zU3RydWN0dXJlTW9kZWwsXG4gICAgc2xvdHM/OiBDbXNQYWdlU2xvdHNDb25maWdcbiAgKTogT2JzZXJ2YWJsZTxDbXNTdHJ1Y3R1cmVNb2RlbD4ge1xuICAgIC8vIGlmIG5vIHNsb3RzIGhhdmUgYmVlbiBnaXZlbiwgd2UgdXNlIHRoZSBnbG9iYWwgY29uZmlndXJlZCBzbG90c1xuICAgIGlmIChcbiAgICAgICFzbG90cyAmJlxuICAgICAgdGhpcy5jbXNEYXRhQ29uZmlnLmNtc1N0cnVjdHVyZSAmJlxuICAgICAgdGhpcy5jbXNEYXRhQ29uZmlnLmNtc1N0cnVjdHVyZS5zbG90c1xuICAgICkge1xuICAgICAgc2xvdHMgPSB0aGlzLmNtc0RhdGFDb25maWcuY21zU3RydWN0dXJlLnNsb3RzO1xuICAgIH1cblxuICAgIGlmICghc2xvdHMpIHtcbiAgICAgIHJldHVybiBvZihwYWdlU3RydWN0dXJlKTtcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IHBvc2l0aW9uIG9mIE9iamVjdC5rZXlzKHNsb3RzKSkge1xuICAgICAgaWYgKCFPYmplY3Qua2V5cyhwYWdlU3RydWN0dXJlLnBhZ2Uuc2xvdHMpLmluY2x1ZGVzKHBvc2l0aW9uKSkge1xuICAgICAgICAvLyB0aGUgZ2xvYmFsIHNsb3QgaXNuJ3QgeWV0IHBhcnQgb2YgdGhlIHBhZ2Ugc3RydWN0dXJlXG4gICAgICAgIHBhZ2VTdHJ1Y3R1cmUucGFnZS5zbG90c1twb3NpdGlvbl0gPSB7fTtcblxuICAgICAgICBmb3IgKGNvbnN0IGNvbXBvbmVudCBvZiB0aGlzLmdldENvbXBvbmVudHNCeVBvc2l0aW9uKHNsb3RzLCBwb3NpdGlvbikpIHtcbiAgICAgICAgICBpZiAoIXBhZ2VTdHJ1Y3R1cmUucGFnZS5zbG90c1twb3NpdGlvbl0uY29tcG9uZW50cykge1xuICAgICAgICAgICAgcGFnZVN0cnVjdHVyZS5wYWdlLnNsb3RzW3Bvc2l0aW9uXS5jb21wb25lbnRzID0gW107XG4gICAgICAgICAgfVxuICAgICAgICAgIHBhZ2VTdHJ1Y3R1cmUucGFnZS5zbG90c1twb3NpdGlvbl0uY29tcG9uZW50cy5wdXNoKHtcbiAgICAgICAgICAgIHVpZDogY29tcG9uZW50LnVpZCxcbiAgICAgICAgICAgIGZsZXhUeXBlOiBjb21wb25lbnQuZmxleFR5cGUsXG4gICAgICAgICAgICB0eXBlQ29kZTogY29tcG9uZW50LnR5cGVDb2RlLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmICghcGFnZVN0cnVjdHVyZS5jb21wb25lbnRzKSB7XG4gICAgICAgICAgICBwYWdlU3RydWN0dXJlLmNvbXBvbmVudHMgPSBbXTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBwYWdlU3RydWN0dXJlLmNvbXBvbmVudHMucHVzaChjb21wb25lbnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG9mKHBhZ2VTdHJ1Y3R1cmUpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldENvbXBvbmVudHNCeVBvc2l0aW9uKFxuICAgIHNsb3RzOiBDbXNQYWdlU2xvdHNDb25maWcsXG4gICAgcG9zaXRpb246IHN0cmluZ1xuICApOiBDb250ZW50U2xvdENvbXBvbmVudERhdGFbXSB7XG4gICAgY29uc3QgY29tcG9uZW50cyA9IFtdO1xuICAgIGlmIChzbG90c1twb3NpdGlvbl0gJiYgc2xvdHNbcG9zaXRpb25dLmNvbXBvbmVudElkcykge1xuICAgICAgZm9yIChjb25zdCBjb21wb25lbnRJZCBvZiBzbG90c1twb3NpdGlvbl0uY29tcG9uZW50SWRzKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICB0aGlzLmNtc0RhdGFDb25maWcuY21zU3RydWN0dXJlICYmXG4gICAgICAgICAgdGhpcy5jbXNEYXRhQ29uZmlnLmNtc1N0cnVjdHVyZS5jb21wb25lbnRzXG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IHRoaXMuY21zRGF0YUNvbmZpZy5jbXNTdHJ1Y3R1cmUuY29tcG9uZW50c1tcbiAgICAgICAgICAgIGNvbXBvbmVudElkXG4gICAgICAgICAgXTtcbiAgICAgICAgICBpZiAoY29tcG9uZW50KSB7XG4gICAgICAgICAgICBjb21wb25lbnRzLnB1c2goeyB1aWQ6IGNvbXBvbmVudElkLCAuLi5jb21wb25lbnQgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjb21wb25lbnRzO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldENvbXBvbmVudEJ5SWQoY29tcG9uZW50SWQ6IHN0cmluZyk6IENvbnRlbnRTbG90Q29tcG9uZW50RGF0YSB7XG4gICAgcmV0dXJuIHRoaXMuY21zRGF0YUNvbmZpZy5jbXNTdHJ1Y3R1cmUgJiZcbiAgICAgIHRoaXMuY21zRGF0YUNvbmZpZy5jbXNTdHJ1Y3R1cmUuY29tcG9uZW50c1xuICAgICAgPyB0aGlzLmNtc0RhdGFDb25maWcuY21zU3RydWN0dXJlLmNvbXBvbmVudHNbY29tcG9uZW50SWRdXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgfVxufVxuIl19
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLXN0cnVjdHVyZS1jb25maWcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jbXMvc2VydmljZXMvY21zLXN0cnVjdHVyZS1jb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEQsT0FBTyxFQUNMLGFBQWEsRUFDYixrQkFBa0IsRUFDbEIsa0JBQWtCLEdBQ25CLE1BQU0sZ0NBQWdDLENBQUM7OztBQUl4Qzs7Ozs7Ozs7R0FRRztBQUlIO0lBQ0UsbUNBQXNCLGFBQWlDO1FBQWpDLGtCQUFhLEdBQWIsYUFBYSxDQUFvQjtJQUFHLENBQUM7SUFFM0Q7Ozs7T0FJRztJQUNILHNEQUFrQixHQUFsQixVQUNFLE1BQWMsRUFDZCxhQUFnQztRQUZsQyxpQkFPQztRQUhDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUMvQyxTQUFTLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFyQixDQUFxQixDQUFDLENBQ3pDLENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7Ozs7O09BUUc7SUFDSCx1REFBbUIsR0FBbkIsVUFBb0IsTUFBYztRQUNoQyxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQ3hDLEdBQUcsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQTlCLENBQThCLENBQUMsQ0FDNUMsQ0FBQztJ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QUMsVUFBVSxFQUMxQzt3QkFDQSxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQzFELFdBQVcsQ0FDWixDQUFDO3dCQUNGLElBQUksU0FBUyxFQUFFOzRCQUNiLFVBQVUsQ0FBQyxJQUFJLFlBQUcsR0FBRyxFQUFFLFdBQVcsSUFBSyxTQUFTLEVBQUcsQ0FBQzt5QkFDckQ7cUJBQ0Y7aUJBQ0Y7Ozs7Ozs7OztTQUNGO1FBQ0QsT0FBTyxVQUFVLENBQUM7SUFDcEIsQ0FBQztJQUVTLG9EQUFnQixHQUExQixVQUEyQixXQUFtQjtRQUM1QyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWTtZQUNwQyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxVQUFVO1lBQzFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDO1lBQ3pELENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDaEIsQ0FBQzs7Z0JBeEtvQyxrQkFBa0I7OztJQURuQyx5QkFBeUI7UUFIOUMsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztPQUNvQix5QkFBeUIsQ0EwSzlDO29DQWpNRDtDQWlNQyxBQTFLRCxJQTBLQztTQTFLcUIseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtcbiAgQ21zUGFnZUNvbmZpZyxcbiAgQ21zUGFnZVNsb3RzQ29uZmlnLFxuICBDbXNTdHJ1Y3R1cmVDb25maWcsXG59IGZyb20gJy4uL2NvbmZpZy9jbXMtc3RydWN0dXJlLmNvbmZpZyc7XG5pbXBvcnQgeyBDb250ZW50U2xvdENvbXBvbmVudERhdGEgfSBmcm9tICcuLi9tb2RlbC9jb250ZW50LXNsb3QtY29tcG9uZW50LWRhdGEubW9kZWwnO1xuaW1wb3J0IHsgQ21zU3RydWN0dXJlTW9kZWwgfSBmcm9tICcuLi9tb2RlbC9wYWdlLm1vZGVsJztcblxuLyoqXG4gKiBTZXJ2aWNlIHRoYXQgcHJvdmlkZXMgYWNjZXNzIHRvIENNUyBzdHJ1Y3R1cmUgZnJvbSBhIHN0YXRpY1xuICogY29uZmlndXJhdGlvbiBvciBjb25maWd1cmF0aW9uIGZpbGUuIFRoaXMgY2xhc3MgdXNlcyBzdGF0aWNcbiAqIGNvbmZpZ3VyYXRpb24gaXMgZGVzaWduZWQgaW4gYXN5bmMgZmFzaGlvbiBzbyB0aGF0IGNvbmZpZ3VyYXRpb25zXG4gKiBjYW4gYmUgbG9hZGVkIGZyb20gYSBmaWxlIG9yIHN0cmVhbS5cbiAqXG4gKiBUaGUgaW50ZW50IG9mIHRoZSBgQ21zU3RydWN0dXJlQ29uZmlnU2VydmljZWAgaG93ZXZlciBpcyB0byBwcm92aWRlXG4gKiBmYXN0IGxvYWRpbmcgcGFnZXMgYW5kIGRlZmF1bHQgY21zIHN0cnVjdHVyZSBmb3IgY29tbW9kaXR5IGNvbW1lcmNlLlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ21zU3RydWN0dXJlQ29uZmlnU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBjbXNEYXRhQ29uZmlnOiBDbXNTdHJ1Y3R1cmVDb25maWcpIHt9XG5cbiAgLyoqXG4gICAqIE1lcmdlIHRoZSBjbXMgc3RydWN0dXJlIHRvIHRoZSBwYWdlU3RydWN0dXJlLiBUaGUgcGFnZSBzdHJ1Y3R1cmVcbiAgICogY2FuIGVpdGhlciBob2xkIGNvbXBsZXRlIHBhZ2Ugc3RydWN0dXJlcyBvciBnbG9iYWwgc3RydWN0dXJlcyB0aGF0XG4gICAqIG1pZ2h0IGFwcGx5IHRvIGFsbCBwYWdlcyAoc3VjaCBoYXMgaGVhZGVyIGNvcG9uZW50cykuXG4gICAqL1xuICBtZXJnZVBhZ2VTdHJ1Y3R1cmUoXG4gICAgcGFnZUlkOiBzdHJpbmcsXG4gICAgcGFnZVN0cnVjdHVyZTogQ21zU3RydWN0dXJlTW9kZWxcbiAgKTogT2JzZXJ2YWJsZTxDbXNTdHJ1Y3R1cmVNb2RlbD4ge1xuICAgIHJldHVybiB0aGlzLm1lcmdlUGFnZShwYWdlSWQsIHBhZ2VTdHJ1Y3R1cmUpLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAocGFnZSA9PiB0aGlzLm1lcmdlU2xvdHMocGFnZSkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBSZXR1cm5zIGJvb2xlYW4gb2JzZXJ2YWJsZSB0byBpbmRpY2F0ZSB3aGV0aGVyIHRoZSBwYWdlIHNob3VsZCBub3QgYmVcbiAgICogbG9hZGVkIGZyb20gdGhlIGJhY2tlbmQuIFRoaXMgaXMgdXNlZnVsIGZvciBwYWdlcyB3aGljaCBhcmUgY29tb2RpdGl6ZWRcbiAgICogYW5kIGZvbGxvdyBiZXN0IHByYWN0aWNlLlxuICAgKlxuICAgKiBCeSBkZWZhdWx0LCBjb25maWd1cmFibGUgcGFnZXMgYXJlIGRyaXZlbiBieSBzdGF0aWMgY29uZmlndXJhdGlvbixcbiAgICogaW4gb3JkZXIgdG8gYWxsb3cgZm9yIGZhc3QgbG9hZGluZyBwYWdlcyAocHJldmVudGluZyBuZXR3b3JrIGRlbGF5cykuXG4gICAqL1xuICBzaG91bGRJZ25vcmVCYWNrZW5kKHBhZ2VJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UGFnZUZyb21Db25maWcocGFnZUlkKS5waXBlKFxuICAgICAgbWFwKHBhZ2UgPT4gISFwYWdlICYmICEhcGFnZS5pZ25vcmVCYWNrZW5kKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogcmV0dXJucyBhbiBPYnNlcnZhYmxlIGNvbXBvbmVudCBkYXRhIGZyb20gdGhlIHN0YXRpYyBjb25maWd1cmF0aW9uLlxuICAgKi9cbiAgZ2V0Q29tcG9uZW50RnJvbUNvbmZpZyhcbiAgICBjb21wb25lbnRJZDogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8Q29udGVudFNsb3RDb21wb25lbnREYXRhIHwgYW55PiB7XG4gICAgcmV0dXJuIG9mKHRoaXMuZ2V0Q29tcG9uZW50QnlJZChjb21wb25lbnRJZCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIHJldHVybnMgYW4gT2JzZXJ2YWJsZSBjb21wb25lbnRzIGRhdGEgZnJvbSB0aGUgc3RhdGljIGNvbmZpZ3VyYXRpb24uXG4gICAqL1xuICBnZXRDb21wb25lbnRzRnJvbUNvbmZpZyhcbiAgICBpZHM6IHN0cmluZ1tdXG4gICk6IE9ic2VydmFibGU8Q29udGVudFNsb3RDb21wb25lbnREYXRhW10+IHtcbiAgICByZXR1cm4gb2YoaWRzLm1hcChpZCA9PiB0aGlzLmdldENvbXBvbmVudEJ5SWQoaWQpKSk7XG4gIH1cblxuICAvKipcbiAgICogcmV0dXJucyBhbiBvYnNlcnZhYmxlIHdpdGggdGhlIGBQYWdlQ29uZmlnYC5cbiAgICovXG4gIHByb3RlY3RlZCBnZXRQYWdlRnJvbUNvbmZpZyhwYWdlSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8Q21zUGFnZUNvbmZpZz4ge1xuICAgIHJldHVybiBvZihcbiAgICAgIHRoaXMuY21zRGF0YUNvbmZpZy5jbXNTdHJ1Y3R1cmUgJiYgdGhpcy5jbXNEYXRhQ29uZmlnLmNtc1N0cnVjdHVyZS5wYWdlc1xuICAgICAgICA/IHRoaXMuY21zRGF0YUNvbmZpZy5jbXNTdHJ1Y3R1cmUucGFnZXMuZmluZChwID0+IHAucGFnZUlkID09PSBwYWdlSWQpXG4gICAgICAgIDogbnVsbFxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogTWVyZ2UgcGFnZSBkYXRhIGZyb20gdGhlIGNvbmZpZ3VyYXRpb24gaW50byB0aGUgZ2l2ZW4gc3RydWN0dXJlLCBpZiBhbnkuXG4gICAqIElmIHRoZSBnaXZlbiBwYWdlIHN0cnVjdHVyZSBpcyBlbXB0eSwgYSBwYWdlIGlzIGNyZWF0ZWQgYW5kIHRoZSBwYWdlIHNsb3RzIGFyZVxuICAgKiBhcmUgbWVyZ2VkIGludG8gdGhlIHBhZ2UuXG4gICAqL1xuICBwcm90ZWN0ZWQgbWVyZ2VQYWdlKFxuICAgIHBhZ2VJZDogc3RyaW5nLFxuICAgIHBhZ2VTdHJ1Y3R1cmU6IENtc1N0cnVjdHVyZU1vZGVsXG4gICk6IE9ic2VydmFibGU8Q21zU3RydWN0dXJlTW9kZWw+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRQYWdlRnJvbUNvbmZpZyhwYWdlSWQpLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAocGFnZSA9PiB7XG4gICAgICAgIGlmIChwYWdlKSB7XG4gICAgICAgICAgLy8gc2VyaWFsaXplIHBhZ2UgZGF0YVxuICAgICAgICAgIGlmICghcGFnZVN0cnVjdHVyZS5wYWdlKSB7XG4gICAgICAgICAgICBwYWdlU3RydWN0dXJlLnBhZ2UgPSB7XG4gICAgICAgICAgICAgIC4uLnBhZ2UsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcGFnZVN0cnVjdHVyZS5wYWdlLnNsb3RzID0ge307XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghcGFnZVN0cnVjdHVyZS5wYWdlLnNsb3RzKSB7XG4gICAgICAgICAgICBwYWdlU3RydWN0dXJlLnBhZ2Uuc2xvdHMgPSB7fTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRoaXMubWVyZ2VTbG90cyhwYWdlU3RydWN0dXJlLCBwYWdlLnNsb3RzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gb2YocGFnZVN0cnVjdHVyZSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGFueSBwcmUtY29uZmlndXJlZCBzbG90cyBmb3IgcGFnZXMgdGhhdCBkbyBub3QgdXNlIHRoZW0uXG4gICAqIElmIHBhZ2VzIGhhdmUgYSBzbG90IGZvciB0aGUgZ2l2ZW4gcG9zaXRpb24sIHRoZSBjb25maWdpdXJhdGlvblxuICAgKiBpcyBpbmdvcmVkLiBFdmVuIGlmIHRoZSBzbG90IGRvZXMgbm90IGhhdmUgaW5uZXIgc3RydWN0dXJlIChzdWNoIGFzXG4gICAqIGNvbXBvbmVudHMpLCBzbyB0aGF0IHRoZSBjbXMgc3RydWN0dXJlIGlzIGFibGUgdG8gb3ZlcnJpZGUgdGhlIChzdGF0aWMpXG4gICAqIGNvbmZpZ3VyYXRpb24uXG4gICAqL1xuICBwcm90ZWN0ZWQgbWVyZ2VTbG90cyhcbiAgICBwYWdlU3RydWN0dXJlOiBDbXNTdHJ1Y3R1cmVNb2RlbCxcbiAgICBzbG90cz86IENtc1BhZ2VTbG90c0NvbmZpZ1xuICApOiBPYnNlcnZhYmxlPENtc1N0cnVjdHVyZU1vZGVsPiB7XG4gICAgLy8gaWYgbm8gc2xvdHMgaGF2ZSBiZWVuIGdpdmVuLCB3ZSB1c2UgdGhlIGdsb2JhbCBjb25maWd1cmVkIHNsb3RzXG4gICAgaWYgKFxuICAgICAgIXNsb3RzICYmXG4gICAgICB0aGlzLmNtc0RhdGFDb25maWcuY21zU3RydWN0dXJlICYmXG4gICAgICB0aGlzLmNtc0RhdGFDb25maWcuY21zU3RydWN0dXJlLnNsb3RzXG4gICAgKSB7XG4gICAgICBzbG90cyA9IHRoaXMuY21zRGF0YUNvbmZpZy5jbXNTdHJ1Y3R1cmUuc2xvdHM7XG4gICAgfVxuXG4gICAgaWYgKCFzbG90cykge1xuICAgICAgcmV0dXJuIG9mKHBhZ2VTdHJ1Y3R1cmUpO1xuICAgIH1cblxuICAgIGZvciAoY29uc3QgcG9zaXRpb24gb2YgT2JqZWN0LmtleXMoc2xvdHMpKSB7XG4gICAgICBpZiAoIU9iamVjdC5rZXlzKHBhZ2VTdHJ1Y3R1cmUucGFnZS5zbG90cykuaW5jbHVkZXMocG9zaXRpb24pKSB7XG4gICAgICAgIC8vIHRoZSBnbG9iYWwgc2xvdCBpc24ndCB5ZXQgcGFydCBvZiB0aGUgcGFnZSBzdHJ1Y3R1cmVcbiAgICAgICAgcGFnZVN0cnVjdHVyZS5wYWdlLnNsb3RzW3Bvc2l0aW9uXSA9IHt9O1xuXG4gICAgICAgIGZvciAoY29uc3QgY29tcG9uZW50IG9mIHRoaXMuZ2V0Q29tcG9uZW50c0J5UG9zaXRpb24oc2xvdHMsIHBvc2l0aW9uKSkge1xuICAgICAgICAgIGlmICghcGFnZVN0cnVjdHVyZS5wYWdlLnNsb3RzW3Bvc2l0aW9uXS5jb21wb25lbnRzKSB7XG4gICAgICAgICAgICBwYWdlU3RydWN0dXJlLnBhZ2Uuc2xvdHNbcG9zaXRpb25dLmNvbXBvbmVudHMgPSBbXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcGFnZVN0cnVjdHVyZS5wYWdlLnNsb3RzW3Bvc2l0aW9uXS5jb21wb25lbnRzLnB1c2goe1xuICAgICAgICAgICAgdWlkOiBjb21wb25lbnQudWlkLFxuICAgICAgICAgICAgZmxleFR5cGU6IGNvbXBvbmVudC5mbGV4VHlwZSxcbiAgICAgICAgICAgIHR5cGVDb2RlOiBjb21wb25lbnQudHlwZUNvZGUsXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaWYgKCFwYWdlU3RydWN0dXJlLmNvbXBvbmVudHMpIHtcbiAgICAgICAgICAgIHBhZ2VTdHJ1Y3R1cmUuY29tcG9uZW50cyA9IFtdO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHBhZ2VTdHJ1Y3R1cmUuY29tcG9uZW50cy5wdXNoKGNvbXBvbmVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gb2YocGFnZVN0cnVjdHVyZSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0Q29tcG9uZW50c0J5UG9zaXRpb24oXG4gICAgc2xvdHM6IENtc1BhZ2VTbG90c0NvbmZpZyxcbiAgICBwb3NpdGlvbjogc3RyaW5nXG4gICk6IENvbnRlbnRTbG90Q29tcG9uZW50RGF0YVtdIHtcbiAgICBjb25zdCBjb21wb25lbnRzID0gW107XG4gICAgaWYgKHNsb3RzW3Bvc2l0aW9uXSAmJiBzbG90c1twb3NpdGlvbl0uY29tcG9uZW50SWRzKSB7XG4gICAgICBmb3IgKGNvbnN0IGNvbXBvbmVudElkIG9mIHNsb3RzW3Bvc2l0aW9uXS5jb21wb25lbnRJZHMpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHRoaXMuY21zRGF0YUNvbmZpZy5jbXNTdHJ1Y3R1cmUgJiZcbiAgICAgICAgICB0aGlzLmNtc0RhdGFDb25maWcuY21zU3RydWN0dXJlLmNvbXBvbmVudHNcbiAgICAgICAgKSB7XG4gICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gdGhpcy5jbXNEYXRhQ29uZmlnLmNtc1N0cnVjdHVyZS5jb21wb25lbnRzW1xuICAgICAgICAgICAgY29tcG9uZW50SWRcbiAgICAgICAgICBdO1xuICAgICAgICAgIGlmIChjb21wb25lbnQpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudHMucHVzaCh7IHVpZDogY29tcG9uZW50SWQsIC4uLmNvbXBvbmVudCB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNvbXBvbmVudHM7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0Q29tcG9uZW50QnlJZChjb21wb25lbnRJZDogc3RyaW5nKTogQ29udGVudFNsb3RDb21wb25lbnREYXRhIHtcbiAgICByZXR1cm4gdGhpcy5jbXNEYXRhQ29uZmlnLmNtc1N0cnVjdHVyZSAmJlxuICAgICAgdGhpcy5jbXNEYXRhQ29uZmlnLmNtc1N0cnVjdHVyZS5jb21wb25lbnRzXG4gICAgICA/IHRoaXMuY21zRGF0YUNvbmZpZy5jbXNTdHJ1Y3R1cmUuY29tcG9uZW50c1tjb21wb25lbnRJZF1cbiAgICAgIDogdW5kZWZpbmVkO1xuICB9XG59XG4iXX0=
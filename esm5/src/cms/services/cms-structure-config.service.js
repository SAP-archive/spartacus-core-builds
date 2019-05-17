/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { CmsStructureConfig, } from '../config/cms-structure.config';
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
 * @abstract
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
    /**
     * Merge the cms structure to the pageStructure. The page structure
     * can either hold complete page structures or global structures that
     * might apply to all pages (such has header coponents).
     * @param {?} pageId
     * @param {?} pageStructure
     * @return {?}
     */
    CmsStructureConfigService.prototype.mergePageStructure = /**
     * Merge the cms structure to the pageStructure. The page structure
     * can either hold complete page structures or global structures that
     * might apply to all pages (such has header coponents).
     * @param {?} pageId
     * @param {?} pageStructure
     * @return {?}
     */
    function (pageId, pageStructure) {
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
    /**
     *
     * Returns boolean observable to indicate whether the page should not be
     * loaded from the backend. This is useful for pages which are comoditized
     * and follow best practice.
     *
     * By default, configurable pages are driven by static configuration,
     * in order to allow for fast loading pages (preventing network delays).
     * @param {?} pageId
     * @return {?}
     */
    CmsStructureConfigService.prototype.shouldIgnoreBackend = /**
     *
     * Returns boolean observable to indicate whether the page should not be
     * loaded from the backend. This is useful for pages which are comoditized
     * and follow best practice.
     *
     * By default, configurable pages are driven by static configuration,
     * in order to allow for fast loading pages (preventing network delays).
     * @param {?} pageId
     * @return {?}
     */
    function (pageId) {
        return this.getPageFromConfig(pageId).pipe(map(function (page) { return !!page && !!page.ignoreBackend; }));
    };
    /**
     * returns an Observable component data from the static configuration.
     */
    /**
     * returns an Observable component data from the static configuration.
     * @param {?} componentId
     * @return {?}
     */
    CmsStructureConfigService.prototype.getComponentFromConfig = /**
     * returns an Observable component data from the static configuration.
     * @param {?} componentId
     * @return {?}
     */
    function (componentId) {
        return of(this.getComponentById(componentId));
    };
    /**
     * returns an Observable components data from the static configuration.
     */
    /**
     * returns an Observable components data from the static configuration.
     * @param {?} ids
     * @return {?}
     */
    CmsStructureConfigService.prototype.getComponentsFromConfig = /**
     * returns an Observable components data from the static configuration.
     * @param {?} ids
     * @return {?}
     */
    function (ids) {
        var _this = this;
        return of(ids.map(function (id) { return _this.getComponentById(id); }));
    };
    /**
     * returns an observable with the `PageConfig`.
     */
    /**
     * returns an observable with the `PageConfig`.
     * @protected
     * @param {?} pageId
     * @return {?}
     */
    CmsStructureConfigService.prototype.getPageFromConfig = /**
     * returns an observable with the `PageConfig`.
     * @protected
     * @param {?} pageId
     * @return {?}
     */
    function (pageId) {
        return of(this.cmsDataConfig.cmsStructure && this.cmsDataConfig.cmsStructure.pages
            ? this.cmsDataConfig.cmsStructure.pages.find(function (p) { return p.pageId === pageId; })
            : null);
    };
    /**
     * Merge page data from the configuration into the given structure, if any.
     * If the given page structure is empty, a page is created and the page slots are
     * are merged into the page.
     */
    /**
     * Merge page data from the configuration into the given structure, if any.
     * If the given page structure is empty, a page is created and the page slots are
     * are merged into the page.
     * @protected
     * @param {?} pageId
     * @param {?} pageStructure
     * @return {?}
     */
    CmsStructureConfigService.prototype.mergePage = /**
     * Merge page data from the configuration into the given structure, if any.
     * If the given page structure is empty, a page is created and the page slots are
     * are merged into the page.
     * @protected
     * @param {?} pageId
     * @param {?} pageStructure
     * @return {?}
     */
    function (pageId, pageStructure) {
        var _this = this;
        return this.getPageFromConfig(pageId).pipe(switchMap(function (page) {
            if (page) {
                // serialize page data
                if (!pageStructure.page) {
                    pageStructure.page = tslib_1.__assign({}, page);
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
    /**
     * Adds any pre-configured slots for pages that do not use them.
     * If pages have a slot for the given position, the configiuration
     * is ingored. Even if the slot does not have inner structure (such as
     * components), so that the cms structure is able to override the (static)
     * configuration.
     * @protected
     * @param {?} pageStructure
     * @param {?=} slots
     * @return {?}
     */
    CmsStructureConfigService.prototype.mergeSlots = /**
     * Adds any pre-configured slots for pages that do not use them.
     * If pages have a slot for the given position, the configiuration
     * is ingored. Even if the slot does not have inner structure (such as
     * components), so that the cms structure is able to override the (static)
     * configuration.
     * @protected
     * @param {?} pageStructure
     * @param {?=} slots
     * @return {?}
     */
    function (pageStructure, slots) {
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
            for (var _c = tslib_1.__values(Object.keys(slots)), _d = _c.next(); !_d.done; _d = _c.next()) {
                var position = _d.value;
                if (!Object.keys(pageStructure.page.slots).includes(position)) {
                    // the global slot isn't yet part of the page structure
                    pageStructure.page.slots[position] = {};
                    try {
                        for (var _e = tslib_1.__values(this.getComponentsByPosition(slots, position)), _f = _e.next(); !_f.done; _f = _e.next()) {
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
    /**
     * @protected
     * @param {?} slots
     * @param {?} position
     * @return {?}
     */
    CmsStructureConfigService.prototype.getComponentsByPosition = /**
     * @protected
     * @param {?} slots
     * @param {?} position
     * @return {?}
     */
    function (slots, position) {
        var e_3, _a;
        /** @type {?} */
        var components = [];
        if (slots[position] && slots[position].componentIds) {
            try {
                for (var _b = tslib_1.__values(slots[position].componentIds), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var componentId = _c.value;
                    if (this.cmsDataConfig.cmsStructure &&
                        this.cmsDataConfig.cmsStructure.components) {
                        /** @type {?} */
                        var component = this.cmsDataConfig.cmsStructure.components[componentId];
                        if (component) {
                            components.push(tslib_1.__assign({ uid: componentId }, component));
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
    /**
     * @protected
     * @param {?} componentId
     * @return {?}
     */
    CmsStructureConfigService.prototype.getComponentById = /**
     * @protected
     * @param {?} componentId
     * @return {?}
     */
    function (componentId) {
        return this.cmsDataConfig.cmsStructure &&
            this.cmsDataConfig.cmsStructure.components
            ? this.cmsDataConfig.cmsStructure.components[componentId]
            : undefined;
    };
    CmsStructureConfigService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    CmsStructureConfigService.ctorParameters = function () { return [
        { type: CmsStructureConfig }
    ]; };
    /** @nocollapse */ CmsStructureConfigService.ngInjectableDef = i0.defineInjectable({ factory: function CmsStructureConfigService_Factory() { return new CmsStructureConfigService(i0.inject(i1.CmsStructureConfig)); }, token: CmsStructureConfigService, providedIn: "root" });
    return CmsStructureConfigService;
}());
export { CmsStructureConfigService };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    CmsStructureConfigService.prototype.cmsDataConfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLXN0cnVjdHVyZS1jb25maWcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jbXMvc2VydmljZXMvY21zLXN0cnVjdHVyZS1jb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2hELE9BQU8sRUFHTCxrQkFBa0IsR0FDbkIsTUFBTSxnQ0FBZ0MsQ0FBQzs7Ozs7Ozs7Ozs7OztBQWF4QztJQUlFLG1DQUFzQixhQUFpQztRQUFqQyxrQkFBYSxHQUFiLGFBQWEsQ0FBb0I7SUFBRyxDQUFDO0lBRTNEOzs7O09BSUc7Ozs7Ozs7OztJQUNILHNEQUFrQjs7Ozs7Ozs7SUFBbEIsVUFDRSxNQUFjLEVBQ2QsYUFBZ0M7UUFGbEMsaUJBT0M7UUFIQyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FDL0MsU0FBUyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBckIsQ0FBcUIsQ0FBQyxDQUN6QyxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7Ozs7OztPQVFHOzs7Ozs7Ozs7Ozs7SUFDSCx1REFBbUI7Ozs7Ozs7Ozs7O0lBQW5CLFVBQW9CLE1BQWM7UUFDaEMsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUN4QyxHQUFHLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUE5QixDQUE4QixDQUFDLENB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QUFBO29CQUNwQixJQUNFLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWTt3QkFDL0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUMxQzs7NEJBQ00sU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FDMUQsV0FBVyxDQUNaO3dCQUNELElBQUksU0FBUyxFQUFFOzRCQUNiLFVBQVUsQ0FBQyxJQUFJLG9CQUFHLEdBQUcsRUFBRSxXQUFXLElBQUssU0FBUyxFQUFHLENBQUM7eUJBQ3JEO3FCQUNGO2lCQUNGOzs7Ozs7Ozs7U0FDRjtRQUNELE9BQU8sVUFBVSxDQUFDO0lBQ3BCLENBQUM7Ozs7OztJQUVTLG9EQUFnQjs7Ozs7SUFBMUIsVUFBMkIsV0FBbUI7UUFDNUMsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVk7WUFDcEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsVUFBVTtZQUMxQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQztZQUN6RCxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ2hCLENBQUM7O2dCQTVLRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQWhCQyxrQkFBa0I7OztvQ0FOcEI7Q0FpTUMsQUE3S0QsSUE2S0M7U0ExS3FCLHlCQUF5Qjs7Ozs7O0lBQ2pDLGtEQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7XG4gIENtc1BhZ2VDb25maWcsXG4gIENtc1BhZ2VTbG90c0NvbmZpZyxcbiAgQ21zU3RydWN0dXJlQ29uZmlnLFxufSBmcm9tICcuLi9jb25maWcvY21zLXN0cnVjdHVyZS5jb25maWcnO1xuaW1wb3J0IHsgQ29udGVudFNsb3RDb21wb25lbnREYXRhIH0gZnJvbSAnLi4vbW9kZWwvY29udGVudC1zbG90LWNvbXBvbmVudC1kYXRhLm1vZGVsJztcbmltcG9ydCB7IENtc1N0cnVjdHVyZU1vZGVsIH0gZnJvbSAnLi4vbW9kZWwvcGFnZS5tb2RlbCc7XG5cbi8qKlxuICogU2VydmljZSB0aGF0IHByb3ZpZGVzIGFjY2VzcyB0byBDTVMgc3RydWN0dXJlIGZyb20gYSBzdGF0aWNcbiAqIGNvbmZpZ3VyYXRpb24gb3IgY29uZmlndXJhdGlvbiBmaWxlLiBUaGlzIGNsYXNzIHVzZXMgc3RhdGljXG4gKiBjb25maWd1cmF0aW9uIGlzIGRlc2lnbmVkIGluIGFzeW5jIGZhc2hpb24gc28gdGhhdCBjb25maWd1cmF0aW9uc1xuICogY2FuIGJlIGxvYWRlZCBmcm9tIGEgZmlsZSBvciBzdHJlYW0uXG4gKlxuICogVGhlIGludGVudCBvZiB0aGUgYENtc1N0cnVjdHVyZUNvbmZpZ1NlcnZpY2VgIGhvd2V2ZXIgaXMgdG8gcHJvdmlkZVxuICogZmFzdCBsb2FkaW5nIHBhZ2VzIGFuZCBkZWZhdWx0IGNtcyBzdHJ1Y3R1cmUgZm9yIGNvbW1vZGl0eSBjb21tZXJjZS5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENtc1N0cnVjdHVyZUNvbmZpZ1NlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgY21zRGF0YUNvbmZpZzogQ21zU3RydWN0dXJlQ29uZmlnKSB7fVxuXG4gIC8qKlxuICAgKiBNZXJnZSB0aGUgY21zIHN0cnVjdHVyZSB0byB0aGUgcGFnZVN0cnVjdHVyZS4gVGhlIHBhZ2Ugc3RydWN0dXJlXG4gICAqIGNhbiBlaXRoZXIgaG9sZCBjb21wbGV0ZSBwYWdlIHN0cnVjdHVyZXMgb3IgZ2xvYmFsIHN0cnVjdHVyZXMgdGhhdFxuICAgKiBtaWdodCBhcHBseSB0byBhbGwgcGFnZXMgKHN1Y2ggaGFzIGhlYWRlciBjb3BvbmVudHMpLlxuICAgKi9cbiAgbWVyZ2VQYWdlU3RydWN0dXJlKFxuICAgIHBhZ2VJZDogc3RyaW5nLFxuICAgIHBhZ2VTdHJ1Y3R1cmU6IENtc1N0cnVjdHVyZU1vZGVsXG4gICk6IE9ic2VydmFibGU8Q21zU3RydWN0dXJlTW9kZWw+IHtcbiAgICByZXR1cm4gdGhpcy5tZXJnZVBhZ2UocGFnZUlkLCBwYWdlU3RydWN0dXJlKS5waXBlKFxuICAgICAgc3dpdGNoTWFwKHBhZ2UgPT4gdGhpcy5tZXJnZVNsb3RzKHBhZ2UpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogUmV0dXJucyBib29sZWFuIG9ic2VydmFibGUgdG8gaW5kaWNhdGUgd2hldGhlciB0aGUgcGFnZSBzaG91bGQgbm90IGJlXG4gICAqIGxvYWRlZCBmcm9tIHRoZSBiYWNrZW5kLiBUaGlzIGlzIHVzZWZ1bCBmb3IgcGFnZXMgd2hpY2ggYXJlIGNvbW9kaXRpemVkXG4gICAqIGFuZCBmb2xsb3cgYmVzdCBwcmFjdGljZS5cbiAgICpcbiAgICogQnkgZGVmYXVsdCwgY29uZmlndXJhYmxlIHBhZ2VzIGFyZSBkcml2ZW4gYnkgc3RhdGljIGNvbmZpZ3VyYXRpb24sXG4gICAqIGluIG9yZGVyIHRvIGFsbG93IGZvciBmYXN0IGxvYWRpbmcgcGFnZXMgKHByZXZlbnRpbmcgbmV0d29yayBkZWxheXMpLlxuICAgKi9cbiAgc2hvdWxkSWdub3JlQmFja2VuZChwYWdlSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLmdldFBhZ2VGcm9tQ29uZmlnKHBhZ2VJZCkucGlwZShcbiAgICAgIG1hcChwYWdlID0+ICEhcGFnZSAmJiAhIXBhZ2UuaWdub3JlQmFja2VuZClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIHJldHVybnMgYW4gT2JzZXJ2YWJsZSBjb21wb25lbnQgZGF0YSBmcm9tIHRoZSBzdGF0aWMgY29uZmlndXJhdGlvbi5cbiAgICovXG4gIGdldENvbXBvbmVudEZyb21Db25maWcoXG4gICAgY29tcG9uZW50SWQ6IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPENvbnRlbnRTbG90Q29tcG9uZW50RGF0YSB8IGFueT4ge1xuICAgIHJldHVybiBvZih0aGlzLmdldENvbXBvbmVudEJ5SWQoY29tcG9uZW50SWQpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZXR1cm5zIGFuIE9ic2VydmFibGUgY29tcG9uZW50cyBkYXRhIGZyb20gdGhlIHN0YXRpYyBjb25maWd1cmF0aW9uLlxuICAgKi9cbiAgZ2V0Q29tcG9uZW50c0Zyb21Db25maWcoXG4gICAgaWRzOiBzdHJpbmdbXVxuICApOiBPYnNlcnZhYmxlPENvbnRlbnRTbG90Q29tcG9uZW50RGF0YVtdPiB7XG4gICAgcmV0dXJuIG9mKGlkcy5tYXAoaWQgPT4gdGhpcy5nZXRDb21wb25lbnRCeUlkKGlkKSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIHJldHVybnMgYW4gb2JzZXJ2YWJsZSB3aXRoIHRoZSBgUGFnZUNvbmZpZ2AuXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0UGFnZUZyb21Db25maWcocGFnZUlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPENtc1BhZ2VDb25maWc+IHtcbiAgICByZXR1cm4gb2YoXG4gICAgICB0aGlzLmNtc0RhdGFDb25maWcuY21zU3RydWN0dXJlICYmIHRoaXMuY21zRGF0YUNvbmZpZy5jbXNTdHJ1Y3R1cmUucGFnZXNcbiAgICAgICAgPyB0aGlzLmNtc0RhdGFDb25maWcuY21zU3RydWN0dXJlLnBhZ2VzLmZpbmQocCA9PiBwLnBhZ2VJZCA9PT0gcGFnZUlkKVxuICAgICAgICA6IG51bGxcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIE1lcmdlIHBhZ2UgZGF0YSBmcm9tIHRoZSBjb25maWd1cmF0aW9uIGludG8gdGhlIGdpdmVuIHN0cnVjdHVyZSwgaWYgYW55LlxuICAgKiBJZiB0aGUgZ2l2ZW4gcGFnZSBzdHJ1Y3R1cmUgaXMgZW1wdHksIGEgcGFnZSBpcyBjcmVhdGVkIGFuZCB0aGUgcGFnZSBzbG90cyBhcmVcbiAgICogYXJlIG1lcmdlZCBpbnRvIHRoZSBwYWdlLlxuICAgKi9cbiAgcHJvdGVjdGVkIG1lcmdlUGFnZShcbiAgICBwYWdlSWQ6IHN0cmluZyxcbiAgICBwYWdlU3RydWN0dXJlOiBDbXNTdHJ1Y3R1cmVNb2RlbFxuICApOiBPYnNlcnZhYmxlPENtc1N0cnVjdHVyZU1vZGVsPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UGFnZUZyb21Db25maWcocGFnZUlkKS5waXBlKFxuICAgICAgc3dpdGNoTWFwKHBhZ2UgPT4ge1xuICAgICAgICBpZiAocGFnZSkge1xuICAgICAgICAgIC8vIHNlcmlhbGl6ZSBwYWdlIGRhdGFcbiAgICAgICAgICBpZiAoIXBhZ2VTdHJ1Y3R1cmUucGFnZSkge1xuICAgICAgICAgICAgcGFnZVN0cnVjdHVyZS5wYWdlID0ge1xuICAgICAgICAgICAgICAuLi5wYWdlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHBhZ2VTdHJ1Y3R1cmUucGFnZS5zbG90cyA9IHt9O1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIXBhZ2VTdHJ1Y3R1cmUucGFnZS5zbG90cykge1xuICAgICAgICAgICAgcGFnZVN0cnVjdHVyZS5wYWdlLnNsb3RzID0ge307XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aGlzLm1lcmdlU2xvdHMocGFnZVN0cnVjdHVyZSwgcGFnZS5zbG90cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIG9mKHBhZ2VTdHJ1Y3R1cmUpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhbnkgcHJlLWNvbmZpZ3VyZWQgc2xvdHMgZm9yIHBhZ2VzIHRoYXQgZG8gbm90IHVzZSB0aGVtLlxuICAgKiBJZiBwYWdlcyBoYXZlIGEgc2xvdCBmb3IgdGhlIGdpdmVuIHBvc2l0aW9uLCB0aGUgY29uZmlnaXVyYXRpb25cbiAgICogaXMgaW5nb3JlZC4gRXZlbiBpZiB0aGUgc2xvdCBkb2VzIG5vdCBoYXZlIGlubmVyIHN0cnVjdHVyZSAoc3VjaCBhc1xuICAgKiBjb21wb25lbnRzKSwgc28gdGhhdCB0aGUgY21zIHN0cnVjdHVyZSBpcyBhYmxlIHRvIG92ZXJyaWRlIHRoZSAoc3RhdGljKVxuICAgKiBjb25maWd1cmF0aW9uLlxuICAgKi9cbiAgcHJvdGVjdGVkIG1lcmdlU2xvdHMoXG4gICAgcGFnZVN0cnVjdHVyZTogQ21zU3RydWN0dXJlTW9kZWwsXG4gICAgc2xvdHM/OiBDbXNQYWdlU2xvdHNDb25maWdcbiAgKTogT2JzZXJ2YWJsZTxDbXNTdHJ1Y3R1cmVNb2RlbD4ge1xuICAgIC8vIGlmIG5vIHNsb3RzIGhhdmUgYmVlbiBnaXZlbiwgd2UgdXNlIHRoZSBnbG9iYWwgY29uZmlndXJlZCBzbG90c1xuICAgIGlmIChcbiAgICAgICFzbG90cyAmJlxuICAgICAgdGhpcy5jbXNEYXRhQ29uZmlnLmNtc1N0cnVjdHVyZSAmJlxuICAgICAgdGhpcy5jbXNEYXRhQ29uZmlnLmNtc1N0cnVjdHVyZS5zbG90c1xuICAgICkge1xuICAgICAgc2xvdHMgPSB0aGlzLmNtc0RhdGFDb25maWcuY21zU3RydWN0dXJlLnNsb3RzO1xuICAgIH1cblxuICAgIGlmICghc2xvdHMpIHtcbiAgICAgIHJldHVybiBvZihwYWdlU3RydWN0dXJlKTtcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IHBvc2l0aW9uIG9mIE9iamVjdC5rZXlzKHNsb3RzKSkge1xuICAgICAgaWYgKCFPYmplY3Qua2V5cyhwYWdlU3RydWN0dXJlLnBhZ2Uuc2xvdHMpLmluY2x1ZGVzKHBvc2l0aW9uKSkge1xuICAgICAgICAvLyB0aGUgZ2xvYmFsIHNsb3QgaXNuJ3QgeWV0IHBhcnQgb2YgdGhlIHBhZ2Ugc3RydWN0dXJlXG4gICAgICAgIHBhZ2VTdHJ1Y3R1cmUucGFnZS5zbG90c1twb3NpdGlvbl0gPSB7fTtcblxuICAgICAgICBmb3IgKGNvbnN0IGNvbXBvbmVudCBvZiB0aGlzLmdldENvbXBvbmVudHNCeVBvc2l0aW9uKHNsb3RzLCBwb3NpdGlvbikpIHtcbiAgICAgICAgICBpZiAoIXBhZ2VTdHJ1Y3R1cmUucGFnZS5zbG90c1twb3NpdGlvbl0uY29tcG9uZW50cykge1xuICAgICAgICAgICAgcGFnZVN0cnVjdHVyZS5wYWdlLnNsb3RzW3Bvc2l0aW9uXS5jb21wb25lbnRzID0gW107XG4gICAgICAgICAgfVxuICAgICAgICAgIHBhZ2VTdHJ1Y3R1cmUucGFnZS5zbG90c1twb3NpdGlvbl0uY29tcG9uZW50cy5wdXNoKHtcbiAgICAgICAgICAgIHVpZDogY29tcG9uZW50LnVpZCxcbiAgICAgICAgICAgIGZsZXhUeXBlOiBjb21wb25lbnQuZmxleFR5cGUsXG4gICAgICAgICAgICB0eXBlQ29kZTogY29tcG9uZW50LnR5cGVDb2RlLFxuICAgICAgICAgIH0pO1xuICAgICAgICAgIGlmICghcGFnZVN0cnVjdHVyZS5jb21wb25lbnRzKSB7XG4gICAgICAgICAgICBwYWdlU3RydWN0dXJlLmNvbXBvbmVudHMgPSBbXTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBwYWdlU3RydWN0dXJlLmNvbXBvbmVudHMucHVzaChjb21wb25lbnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG9mKHBhZ2VTdHJ1Y3R1cmUpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldENvbXBvbmVudHNCeVBvc2l0aW9uKFxuICAgIHNsb3RzOiBDbXNQYWdlU2xvdHNDb25maWcsXG4gICAgcG9zaXRpb246IHN0cmluZ1xuICApOiBDb250ZW50U2xvdENvbXBvbmVudERhdGFbXSB7XG4gICAgY29uc3QgY29tcG9uZW50cyA9IFtdO1xuICAgIGlmIChzbG90c1twb3NpdGlvbl0gJiYgc2xvdHNbcG9zaXRpb25dLmNvbXBvbmVudElkcykge1xuICAgICAgZm9yIChjb25zdCBjb21wb25lbnRJZCBvZiBzbG90c1twb3NpdGlvbl0uY29tcG9uZW50SWRzKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICB0aGlzLmNtc0RhdGFDb25maWcuY21zU3RydWN0dXJlICYmXG4gICAgICAgICAgdGhpcy5jbXNEYXRhQ29uZmlnLmNtc1N0cnVjdHVyZS5jb21wb25lbnRzXG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IHRoaXMuY21zRGF0YUNvbmZpZy5jbXNTdHJ1Y3R1cmUuY29tcG9uZW50c1tcbiAgICAgICAgICAgIGNvbXBvbmVudElkXG4gICAgICAgICAgXTtcbiAgICAgICAgICBpZiAoY29tcG9uZW50KSB7XG4gICAgICAgICAgICBjb21wb25lbnRzLnB1c2goeyB1aWQ6IGNvbXBvbmVudElkLCAuLi5jb21wb25lbnQgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjb21wb25lbnRzO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldENvbXBvbmVudEJ5SWQoY29tcG9uZW50SWQ6IHN0cmluZyk6IENvbnRlbnRTbG90Q29tcG9uZW50RGF0YSB7XG4gICAgcmV0dXJuIHRoaXMuY21zRGF0YUNvbmZpZy5jbXNTdHJ1Y3R1cmUgJiZcbiAgICAgIHRoaXMuY21zRGF0YUNvbmZpZy5jbXNTdHJ1Y3R1cmUuY29tcG9uZW50c1xuICAgICAgPyB0aGlzLmNtc0RhdGFDb25maWcuY21zU3RydWN0dXJlLmNvbXBvbmVudHNbY29tcG9uZW50SWRdXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgfVxufVxuIl19
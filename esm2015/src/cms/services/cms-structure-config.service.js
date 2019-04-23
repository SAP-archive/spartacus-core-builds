/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { CmsStructureConfig, } from '../config/cms-structure.config';
import * as i0 from "@angular/core";
import * as i1 from "../config/cms-structure.config";
/**
 * Service that provides access to CMS structure from a static
 * configuration or configuration file. This class uses static
 * configuration is designed in async fashion so that configuratiosn
 * can be loaded from a file or stream.
 *
 * The intend of the `CmsStructureConfigService` however is to provide
 * fast loading pages and default cms structure for comodoty commerce.
 * @abstract
 */
export class CmsStructureConfigService {
    /**
     * @param {?} cmsDataConfig
     */
    constructor(cmsDataConfig) {
        this.cmsDataConfig = cmsDataConfig;
    }
    /**
     * Merge the cms structure to the pageStructure. The page structure
     * can either hold complete page structures or global structures that
     * might apply to all pages (such has header coponents).
     * @param {?} pageId
     * @param {?} pageStructure
     * @return {?}
     */
    mergePageStructure(pageId, pageStructure) {
        return this.mergePage(pageId, pageStructure).pipe(switchMap(page => this.mergeSlots(page)));
    }
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
    shouldIgnoreBackend(pageId) {
        return this.getPageFromConfig(pageId).pipe(map(page => !!page && !!page.ignoreBackend));
    }
    /**
     * returns an Observable component data from the static configuration.
     * @param {?} componentId
     * @return {?}
     */
    getComponentFromConfig(componentId) {
        return of(this.getComponentById(componentId));
    }
    /**
     * returns an Observable components data from the static configuration.
     * @param {?} ids
     * @return {?}
     */
    getComponentsFromConfig(ids) {
        return of(ids.map(id => this.getComponentById(id)));
    }
    /**
     * returns an observable with the `PageConfig`.
     * @private
     * @param {?} pageId
     * @return {?}
     */
    getPageFromConfig(pageId) {
        return of(this.cmsDataConfig.cmsStructure && this.cmsDataConfig.cmsStructure.pages
            ? this.cmsDataConfig.cmsStructure.pages.find(p => p.pageId === pageId)
            : null);
    }
    /**
     * Merge page data from the configuration into the given structure, if any.
     * If the given page structure is empty, a page is created and the page slots are
     * are merged into the page.
     * @private
     * @param {?} pageId
     * @param {?} pageStructure
     * @return {?}
     */
    mergePage(pageId, pageStructure) {
        return this.getPageFromConfig(pageId).pipe(switchMap(page => {
            if (page) {
                // serialize page data
                if (!pageStructure.page) {
                    pageStructure.page = Object.assign({}, page);
                    pageStructure.page.slots = {};
                }
                if (!pageStructure.page.slots) {
                    pageStructure.page.slots = {};
                }
                return this.mergeSlots(pageStructure, page.slots);
            }
            else {
                return of(pageStructure);
            }
        }));
    }
    /**
     * Adds any pre-configured slots for pages that do not use them.
     * If pages have a slot for the given position, the configiuration
     * is ingored. Even if the slot does not have inner structure (such as
     * components), so that the cms structure is able to override the (static)
     * configuration.
     * @private
     * @param {?} pageStructure
     * @param {?=} slots
     * @return {?}
     */
    mergeSlots(pageStructure, slots) {
        // if no slots have been given, we use the global configured slots
        if (!slots &&
            this.cmsDataConfig.cmsStructure &&
            this.cmsDataConfig.cmsStructure.slots) {
            slots = this.cmsDataConfig.cmsStructure.slots;
        }
        if (!slots) {
            return of(pageStructure);
        }
        for (const position of Object.keys(slots)) {
            if (Object.keys(pageStructure.page.slots).indexOf(position) === -1) {
                // the global slot isn't yet part of the page structure
                pageStructure.page.slots[position] = {};
                for (const component of this.getComponentsByPosition(slots, position)) {
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
        }
        return of(pageStructure);
    }
    /**
     * @private
     * @param {?} slots
     * @param {?} position
     * @return {?}
     */
    getComponentsByPosition(slots, position) {
        /** @type {?} */
        const components = [];
        if (slots[position] && slots[position].componentIds) {
            for (const componentId of slots[position].componentIds) {
                if (this.cmsDataConfig.cmsStructure &&
                    this.cmsDataConfig.cmsStructure.components) {
                    /** @type {?} */
                    const component = this.cmsDataConfig.cmsStructure.components[componentId];
                    if (component) {
                        components.push(Object.assign({ uid: componentId }, component));
                    }
                }
            }
        }
        return components;
    }
    /**
     * @private
     * @param {?} componentId
     * @return {?}
     */
    getComponentById(componentId) {
        return this.cmsDataConfig.cmsStructure &&
            this.cmsDataConfig.cmsStructure.components
            ? this.cmsDataConfig.cmsStructure.components[componentId]
            : undefined;
    }
}
CmsStructureConfigService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
CmsStructureConfigService.ctorParameters = () => [
    { type: CmsStructureConfig }
];
/** @nocollapse */ CmsStructureConfigService.ngInjectableDef = i0.defineInjectable({ factory: function CmsStructureConfigService_Factory() { return new CmsStructureConfigService(i0.inject(i1.CmsStructureConfig)); }, token: CmsStructureConfigService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @protected
     */
    CmsStructureConfigService.prototype.cmsDataConfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLXN0cnVjdHVyZS1jb25maWcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jbXMvc2VydmljZXMvY21zLXN0cnVjdHVyZS1jb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEQsT0FBTyxFQUdMLGtCQUFrQixHQUNuQixNQUFNLGdDQUFnQyxDQUFDOzs7Ozs7Ozs7Ozs7O0FBZ0J4QyxNQUFNLE9BQWdCLHlCQUF5Qjs7OztJQUM3QyxZQUFzQixhQUFpQztRQUFqQyxrQkFBYSxHQUFiLGFBQWEsQ0FBb0I7SUFBRyxDQUFDOzs7Ozs7Ozs7SUFPM0Qsa0JBQWtCLENBQ2hCLE1BQWMsRUFDZCxhQUFnQztRQUVoQyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FDL0MsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUN6QyxDQUFDO0lBQ0osQ0FBQzs7Ozs7Ozs7Ozs7O0lBV0QsbUJBQW1CLENBQUMsTUFBYztRQUNoQyxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQ3hDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FDNUMsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUtELHNCQUFzQixDQUNwQixXQUFtQjtRQUVuQixPQUFPLEVBQUUsQ0FBQyxJQUFJ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QUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsVUFBVTtZQUMxQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQztZQUN6RCxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ2hCLENBQUM7OztZQTVLRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFoQkMsa0JBQWtCOzs7Ozs7OztJQWtCTixrREFBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge1xuICBDbXNQYWdlQ29uZmlnLFxuICBDbXNQYWdlU2xvdHNDb25maWcsXG4gIENtc1N0cnVjdHVyZUNvbmZpZyxcbn0gZnJvbSAnLi4vY29uZmlnL2Ntcy1zdHJ1Y3R1cmUuY29uZmlnJztcbmltcG9ydCB7IENvbnRlbnRTbG90Q29tcG9uZW50RGF0YSB9IGZyb20gJy4uL21vZGVsL2NvbnRlbnQtc2xvdC1jb21wb25lbnQtZGF0YS5tb2RlbCc7XG5pbXBvcnQgeyBDbXNTdHJ1Y3R1cmVNb2RlbCB9IGZyb20gJy4uL21vZGVsL3BhZ2UubW9kZWwnO1xuXG4vKipcbiAqIFNlcnZpY2UgdGhhdCBwcm92aWRlcyBhY2Nlc3MgdG8gQ01TIHN0cnVjdHVyZSBmcm9tIGEgc3RhdGljXG4gKiBjb25maWd1cmF0aW9uIG9yIGNvbmZpZ3VyYXRpb24gZmlsZS4gVGhpcyBjbGFzcyB1c2VzIHN0YXRpY1xuICogY29uZmlndXJhdGlvbiBpcyBkZXNpZ25lZCBpbiBhc3luYyBmYXNoaW9uIHNvIHRoYXQgY29uZmlndXJhdGlvc25cbiAqIGNhbiBiZSBsb2FkZWQgZnJvbSBhIGZpbGUgb3Igc3RyZWFtLlxuICpcbiAqIFRoZSBpbnRlbmQgb2YgdGhlIGBDbXNTdHJ1Y3R1cmVDb25maWdTZXJ2aWNlYCBob3dldmVyIGlzIHRvIHByb3ZpZGVcbiAqIGZhc3QgbG9hZGluZyBwYWdlcyBhbmQgZGVmYXVsdCBjbXMgc3RydWN0dXJlIGZvciBjb21vZG90eSBjb21tZXJjZS5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENtc1N0cnVjdHVyZUNvbmZpZ1NlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgY21zRGF0YUNvbmZpZzogQ21zU3RydWN0dXJlQ29uZmlnKSB7fVxuXG4gIC8qKlxuICAgKiBNZXJnZSB0aGUgY21zIHN0cnVjdHVyZSB0byB0aGUgcGFnZVN0cnVjdHVyZS4gVGhlIHBhZ2Ugc3RydWN0dXJlXG4gICAqIGNhbiBlaXRoZXIgaG9sZCBjb21wbGV0ZSBwYWdlIHN0cnVjdHVyZXMgb3IgZ2xvYmFsIHN0cnVjdHVyZXMgdGhhdFxuICAgKiBtaWdodCBhcHBseSB0byBhbGwgcGFnZXMgKHN1Y2ggaGFzIGhlYWRlciBjb3BvbmVudHMpLlxuICAgKi9cbiAgbWVyZ2VQYWdlU3RydWN0dXJlKFxuICAgIHBhZ2VJZDogc3RyaW5nLFxuICAgIHBhZ2VTdHJ1Y3R1cmU6IENtc1N0cnVjdHVyZU1vZGVsXG4gICk6IE9ic2VydmFibGU8Q21zU3RydWN0dXJlTW9kZWw+IHtcbiAgICByZXR1cm4gdGhpcy5tZXJnZVBhZ2UocGFnZUlkLCBwYWdlU3RydWN0dXJlKS5waXBlKFxuICAgICAgc3dpdGNoTWFwKHBhZ2UgPT4gdGhpcy5tZXJnZVNsb3RzKHBhZ2UpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogUmV0dXJucyBib29sZWFuIG9ic2VydmFibGUgdG8gaW5kaWNhdGUgd2hldGhlciB0aGUgcGFnZSBzaG91bGQgbm90IGJlXG4gICAqIGxvYWRlZCBmcm9tIHRoZSBiYWNrZW5kLiBUaGlzIGlzIHVzZWZ1bCBmb3IgcGFnZXMgd2hpY2ggYXJlIGNvbW9kaXRpemVkXG4gICAqIGFuZCBmb2xsb3cgYmVzdCBwcmFjdGljZS5cbiAgICpcbiAgICogQnkgZGVmYXVsdCwgY29uZmlndXJhYmxlIHBhZ2VzIGFyZSBkcml2ZW4gYnkgc3RhdGljIGNvbmZpZ3VyYXRpb24sXG4gICAqIGluIG9yZGVyIHRvIGFsbG93IGZvciBmYXN0IGxvYWRpbmcgcGFnZXMgKHByZXZlbnRpbmcgbmV0d29yayBkZWxheXMpLlxuICAgKi9cbiAgc2hvdWxkSWdub3JlQmFja2VuZChwYWdlSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLmdldFBhZ2VGcm9tQ29uZmlnKHBhZ2VJZCkucGlwZShcbiAgICAgIG1hcChwYWdlID0+ICEhcGFnZSAmJiAhIXBhZ2UuaWdub3JlQmFja2VuZClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIHJldHVybnMgYW4gT2JzZXJ2YWJsZSBjb21wb25lbnQgZGF0YSBmcm9tIHRoZSBzdGF0aWMgY29uZmlndXJhdGlvbi5cbiAgICovXG4gIGdldENvbXBvbmVudEZyb21Db25maWcoXG4gICAgY29tcG9uZW50SWQ6IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPENvbnRlbnRTbG90Q29tcG9uZW50RGF0YSB8IGFueT4ge1xuICAgIHJldHVybiBvZih0aGlzLmdldENvbXBvbmVudEJ5SWQoY29tcG9uZW50SWQpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZXR1cm5zIGFuIE9ic2VydmFibGUgY29tcG9uZW50cyBkYXRhIGZyb20gdGhlIHN0YXRpYyBjb25maWd1cmF0aW9uLlxuICAgKi9cbiAgZ2V0Q29tcG9uZW50c0Zyb21Db25maWcoXG4gICAgaWRzOiBzdHJpbmdbXVxuICApOiBPYnNlcnZhYmxlPENvbnRlbnRTbG90Q29tcG9uZW50RGF0YVtdPiB7XG4gICAgcmV0dXJuIG9mKGlkcy5tYXAoaWQgPT4gdGhpcy5nZXRDb21wb25lbnRCeUlkKGlkKSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIHJldHVybnMgYW4gb2JzZXJ2YWJsZSB3aXRoIHRoZSBgUGFnZUNvbmZpZ2AuXG4gICAqL1xuICBwcml2YXRlIGdldFBhZ2VGcm9tQ29uZmlnKHBhZ2VJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxDbXNQYWdlQ29uZmlnPiB7XG4gICAgcmV0dXJuIG9mKFxuICAgICAgdGhpcy5jbXNEYXRhQ29uZmlnLmNtc1N0cnVjdHVyZSAmJiB0aGlzLmNtc0RhdGFDb25maWcuY21zU3RydWN0dXJlLnBhZ2VzXG4gICAgICAgID8gdGhpcy5jbXNEYXRhQ29uZmlnLmNtc1N0cnVjdHVyZS5wYWdlcy5maW5kKHAgPT4gcC5wYWdlSWQgPT09IHBhZ2VJZClcbiAgICAgICAgOiBudWxsXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXJnZSBwYWdlIGRhdGEgZnJvbSB0aGUgY29uZmlndXJhdGlvbiBpbnRvIHRoZSBnaXZlbiBzdHJ1Y3R1cmUsIGlmIGFueS5cbiAgICogSWYgdGhlIGdpdmVuIHBhZ2Ugc3RydWN0dXJlIGlzIGVtcHR5LCBhIHBhZ2UgaXMgY3JlYXRlZCBhbmQgdGhlIHBhZ2Ugc2xvdHMgYXJlXG4gICAqIGFyZSBtZXJnZWQgaW50byB0aGUgcGFnZS5cbiAgICovXG4gIHByaXZhdGUgbWVyZ2VQYWdlKFxuICAgIHBhZ2VJZDogc3RyaW5nLFxuICAgIHBhZ2VTdHJ1Y3R1cmU6IENtc1N0cnVjdHVyZU1vZGVsXG4gICk6IE9ic2VydmFibGU8Q21zU3RydWN0dXJlTW9kZWw+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRQYWdlRnJvbUNvbmZpZyhwYWdlSWQpLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAocGFnZSA9PiB7XG4gICAgICAgIGlmIChwYWdlKSB7XG4gICAgICAgICAgLy8gc2VyaWFsaXplIHBhZ2UgZGF0YVxuICAgICAgICAgIGlmICghcGFnZVN0cnVjdHVyZS5wYWdlKSB7XG4gICAgICAgICAgICBwYWdlU3RydWN0dXJlLnBhZ2UgPSB7XG4gICAgICAgICAgICAgIC4uLnBhZ2UsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcGFnZVN0cnVjdHVyZS5wYWdlLnNsb3RzID0ge307XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghcGFnZVN0cnVjdHVyZS5wYWdlLnNsb3RzKSB7XG4gICAgICAgICAgICBwYWdlU3RydWN0dXJlLnBhZ2Uuc2xvdHMgPSB7fTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRoaXMubWVyZ2VTbG90cyhwYWdlU3RydWN0dXJlLCBwYWdlLnNsb3RzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gb2YocGFnZVN0cnVjdHVyZSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGFueSBwcmUtY29uZmlndXJlZCBzbG90cyBmb3IgcGFnZXMgdGhhdCBkbyBub3QgdXNlIHRoZW0uXG4gICAqIElmIHBhZ2VzIGhhdmUgYSBzbG90IGZvciB0aGUgZ2l2ZW4gcG9zaXRpb24sIHRoZSBjb25maWdpdXJhdGlvblxuICAgKiBpcyBpbmdvcmVkLiBFdmVuIGlmIHRoZSBzbG90IGRvZXMgbm90IGhhdmUgaW5uZXIgc3RydWN0dXJlIChzdWNoIGFzXG4gICAqIGNvbXBvbmVudHMpLCBzbyB0aGF0IHRoZSBjbXMgc3RydWN0dXJlIGlzIGFibGUgdG8gb3ZlcnJpZGUgdGhlIChzdGF0aWMpXG4gICAqIGNvbmZpZ3VyYXRpb24uXG4gICAqL1xuICBwcml2YXRlIG1lcmdlU2xvdHMoXG4gICAgcGFnZVN0cnVjdHVyZTogQ21zU3RydWN0dXJlTW9kZWwsXG4gICAgc2xvdHM/OiBDbXNQYWdlU2xvdHNDb25maWdcbiAgKTogT2JzZXJ2YWJsZTxDbXNTdHJ1Y3R1cmVNb2RlbD4ge1xuICAgIC8vIGlmIG5vIHNsb3RzIGhhdmUgYmVlbiBnaXZlbiwgd2UgdXNlIHRoZSBnbG9iYWwgY29uZmlndXJlZCBzbG90c1xuICAgIGlmIChcbiAgICAgICFzbG90cyAmJlxuICAgICAgdGhpcy5jbXNEYXRhQ29uZmlnLmNtc1N0cnVjdHVyZSAmJlxuICAgICAgdGhpcy5jbXNEYXRhQ29uZmlnLmNtc1N0cnVjdHVyZS5zbG90c1xuICAgICkge1xuICAgICAgc2xvdHMgPSB0aGlzLmNtc0RhdGFDb25maWcuY21zU3RydWN0dXJlLnNsb3RzO1xuICAgIH1cblxuICAgIGlmICghc2xvdHMpIHtcbiAgICAgIHJldHVybiBvZihwYWdlU3RydWN0dXJlKTtcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IHBvc2l0aW9uIG9mIE9iamVjdC5rZXlzKHNsb3RzKSkge1xuICAgICAgaWYgKE9iamVjdC5rZXlzKHBhZ2VTdHJ1Y3R1cmUucGFnZS5zbG90cykuaW5kZXhPZihwb3NpdGlvbikgPT09IC0xKSB7XG4gICAgICAgIC8vIHRoZSBnbG9iYWwgc2xvdCBpc24ndCB5ZXQgcGFydCBvZiB0aGUgcGFnZSBzdHJ1Y3R1cmVcbiAgICAgICAgcGFnZVN0cnVjdHVyZS5wYWdlLnNsb3RzW3Bvc2l0aW9uXSA9IHt9O1xuXG4gICAgICAgIGZvciAoY29uc3QgY29tcG9uZW50IG9mIHRoaXMuZ2V0Q29tcG9uZW50c0J5UG9zaXRpb24oc2xvdHMsIHBvc2l0aW9uKSkge1xuICAgICAgICAgIGlmICghcGFnZVN0cnVjdHVyZS5wYWdlLnNsb3RzW3Bvc2l0aW9uXS5jb21wb25lbnRzKSB7XG4gICAgICAgICAgICBwYWdlU3RydWN0dXJlLnBhZ2Uuc2xvdHNbcG9zaXRpb25dLmNvbXBvbmVudHMgPSBbXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcGFnZVN0cnVjdHVyZS5wYWdlLnNsb3RzW3Bvc2l0aW9uXS5jb21wb25lbnRzLnB1c2goe1xuICAgICAgICAgICAgdWlkOiBjb21wb25lbnQudWlkLFxuICAgICAgICAgICAgZmxleFR5cGU6IGNvbXBvbmVudC5mbGV4VHlwZSxcbiAgICAgICAgICAgIHR5cGVDb2RlOiBjb21wb25lbnQudHlwZUNvZGUsXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaWYgKCFwYWdlU3RydWN0dXJlLmNvbXBvbmVudHMpIHtcbiAgICAgICAgICAgIHBhZ2VTdHJ1Y3R1cmUuY29tcG9uZW50cyA9IFtdO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHBhZ2VTdHJ1Y3R1cmUuY29tcG9uZW50cy5wdXNoKGNvbXBvbmVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gb2YocGFnZVN0cnVjdHVyZSk7XG4gIH1cblxuICBwcml2YXRlIGdldENvbXBvbmVudHNCeVBvc2l0aW9uKFxuICAgIHNsb3RzOiBDbXNQYWdlU2xvdHNDb25maWcsXG4gICAgcG9zaXRpb246IHN0cmluZ1xuICApOiBDb250ZW50U2xvdENvbXBvbmVudERhdGFbXSB7XG4gICAgY29uc3QgY29tcG9uZW50cyA9IFtdO1xuICAgIGlmIChzbG90c1twb3NpdGlvbl0gJiYgc2xvdHNbcG9zaXRpb25dLmNvbXBvbmVudElkcykge1xuICAgICAgZm9yIChjb25zdCBjb21wb25lbnRJZCBvZiBzbG90c1twb3NpdGlvbl0uY29tcG9uZW50SWRzKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICB0aGlzLmNtc0RhdGFDb25maWcuY21zU3RydWN0dXJlICYmXG4gICAgICAgICAgdGhpcy5jbXNEYXRhQ29uZmlnLmNtc1N0cnVjdHVyZS5jb21wb25lbnRzXG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IHRoaXMuY21zRGF0YUNvbmZpZy5jbXNTdHJ1Y3R1cmUuY29tcG9uZW50c1tcbiAgICAgICAgICAgIGNvbXBvbmVudElkXG4gICAgICAgICAgXTtcbiAgICAgICAgICBpZiAoY29tcG9uZW50KSB7XG4gICAgICAgICAgICBjb21wb25lbnRzLnB1c2goeyB1aWQ6IGNvbXBvbmVudElkLCAuLi5jb21wb25lbnQgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjb21wb25lbnRzO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRDb21wb25lbnRCeUlkKGNvbXBvbmVudElkOiBzdHJpbmcpOiBDb250ZW50U2xvdENvbXBvbmVudERhdGEge1xuICAgIHJldHVybiB0aGlzLmNtc0RhdGFDb25maWcuY21zU3RydWN0dXJlICYmXG4gICAgICB0aGlzLmNtc0RhdGFDb25maWcuY21zU3RydWN0dXJlLmNvbXBvbmVudHNcbiAgICAgID8gdGhpcy5jbXNEYXRhQ29uZmlnLmNtc1N0cnVjdHVyZS5jb21wb25lbnRzW2NvbXBvbmVudElkXVxuICAgICAgOiB1bmRlZmluZWQ7XG4gIH1cbn1cbiJdfQ==
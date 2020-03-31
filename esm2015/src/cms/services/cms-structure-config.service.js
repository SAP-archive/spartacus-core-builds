import { __decorate } from "tslib";
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
let CmsStructureConfigService = class CmsStructureConfigService {
    constructor(cmsDataConfig) {
        this.cmsDataConfig = cmsDataConfig;
    }
    /**
     * Merge the cms structure to the pageStructure. The page structure
     * can either hold complete page structures or global structures that
     * might apply to all pages (such has header coponents).
     */
    mergePageStructure(pageId, pageStructure) {
        return this.mergePage(pageId, pageStructure).pipe(switchMap((page) => this.mergeSlots(page)));
    }
    /**
     *
     * Returns boolean observable to indicate whether the page should not be
     * loaded from the backend. This is useful for pages which are comoditized
     * and follow best practice.
     *
     * By default, configurable pages are driven by static configuration,
     * in order to allow for fast loading pages (preventing network delays).
     */
    shouldIgnoreBackend(pageId) {
        return this.getPageFromConfig(pageId).pipe(map((page) => !!page && !!page.ignoreBackend));
    }
    /**
     * returns an Observable component data from the static configuration.
     */
    getComponentFromConfig(componentId) {
        return of(this.getComponentById(componentId));
    }
    /**
     * returns an Observable components data from the static configuration.
     */
    getComponentsFromConfig(ids) {
        return of(ids.map((id) => this.getComponentById(id)));
    }
    /**
     * returns an observable with the `PageConfig`.
     */
    getPageFromConfig(pageId) {
        return of(this.cmsDataConfig.cmsStructure && this.cmsDataConfig.cmsStructure.pages
            ? this.cmsDataConfig.cmsStructure.pages.find((p) => p.pageId === pageId)
            : null);
    }
    /**
     * Merge page data from the configuration into the given structure, if any.
     * If the given page structure is empty, a page is created and the page slots are
     * are merged into the page.
     */
    mergePage(pageId, pageStructure) {
        return this.getPageFromConfig(pageId).pipe(switchMap((page) => {
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
            if (!Object.keys(pageStructure.page.slots).includes(position)) {
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
    getComponentsByPosition(slots, position) {
        const components = [];
        if (slots[position] && slots[position].componentIds) {
            for (const componentId of slots[position].componentIds) {
                if (this.cmsDataConfig.cmsStructure &&
                    this.cmsDataConfig.cmsStructure.components) {
                    const component = this.cmsDataConfig.cmsStructure.components[componentId];
                    if (component) {
                        components.push(Object.assign({ uid: componentId }, component));
                    }
                }
            }
        }
        return components;
    }
    getComponentById(componentId) {
        return this.cmsDataConfig.cmsStructure &&
            this.cmsDataConfig.cmsStructure.components
            ? this.cmsDataConfig.cmsStructure.components[componentId]
            : undefined;
    }
};
CmsStructureConfigService.ctorParameters = () => [
    { type: CmsStructureConfig }
];
CmsStructureConfigService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CmsStructureConfigService_Factory() { return new CmsStructureConfigService(i0.ɵɵinject(i1.CmsStructureConfig)); }, token: CmsStructureConfigService, providedIn: "root" });
CmsStructureConfigService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], CmsStructureConfigService);
export { CmsStructureConfigService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLXN0cnVjdHVyZS1jb25maWcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jbXMvc2VydmljZXMvY21zLXN0cnVjdHVyZS1jb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEQsT0FBTyxFQUNMLGFBQWEsRUFDYixrQkFBa0IsRUFDbEIsa0JBQWtCLEdBQ25CLE1BQU0sZ0NBQWdDLENBQUM7OztBQUl4Qzs7Ozs7Ozs7R0FRRztBQUlILElBQXNCLHlCQUF5QixHQUEvQyxNQUFzQix5QkFBeUI7SUFDN0MsWUFBc0IsYUFBaUM7UUFBakMsa0JBQWEsR0FBYixhQUFhLENBQW9CO0lBQUcsQ0FBQztJQUUzRDs7OztPQUlHO0lBQ0gsa0JBQWtCLENBQ2hCLE1BQWMsRUFDZCxhQUFnQztRQUVoQyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FDL0MsU0FBUyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQzNDLENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7Ozs7O09BUUc7SUFDSCxtQkFBbUIsQ0FBQyxNQUFjO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FDeEMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQzlDLENBQUM7SUFDSixD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LE9BQU8sVUFBVSxDQUFDO0lBQ3BCLENBQUM7SUFFUyxnQkFBZ0IsQ0FBQyxXQUFtQjtRQUM1QyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWTtZQUNwQyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxVQUFVO1lBQzFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDO1lBQ3pELENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDaEIsQ0FBQztDQUNGLENBQUE7O1lBektzQyxrQkFBa0I7OztBQURuQyx5QkFBeUI7SUFIOUMsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztHQUNvQix5QkFBeUIsQ0EwSzlDO1NBMUtxQix5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge1xuICBDbXNQYWdlQ29uZmlnLFxuICBDbXNQYWdlU2xvdHNDb25maWcsXG4gIENtc1N0cnVjdHVyZUNvbmZpZyxcbn0gZnJvbSAnLi4vY29uZmlnL2Ntcy1zdHJ1Y3R1cmUuY29uZmlnJztcbmltcG9ydCB7IENvbnRlbnRTbG90Q29tcG9uZW50RGF0YSB9IGZyb20gJy4uL21vZGVsL2NvbnRlbnQtc2xvdC1jb21wb25lbnQtZGF0YS5tb2RlbCc7XG5pbXBvcnQgeyBDbXNTdHJ1Y3R1cmVNb2RlbCB9IGZyb20gJy4uL21vZGVsL3BhZ2UubW9kZWwnO1xuXG4vKipcbiAqIFNlcnZpY2UgdGhhdCBwcm92aWRlcyBhY2Nlc3MgdG8gQ01TIHN0cnVjdHVyZSBmcm9tIGEgc3RhdGljXG4gKiBjb25maWd1cmF0aW9uIG9yIGNvbmZpZ3VyYXRpb24gZmlsZS4gVGhpcyBjbGFzcyB1c2VzIHN0YXRpY1xuICogY29uZmlndXJhdGlvbiBpcyBkZXNpZ25lZCBpbiBhc3luYyBmYXNoaW9uIHNvIHRoYXQgY29uZmlndXJhdGlvbnNcbiAqIGNhbiBiZSBsb2FkZWQgZnJvbSBhIGZpbGUgb3Igc3RyZWFtLlxuICpcbiAqIFRoZSBpbnRlbnQgb2YgdGhlIGBDbXNTdHJ1Y3R1cmVDb25maWdTZXJ2aWNlYCBob3dldmVyIGlzIHRvIHByb3ZpZGVcbiAqIGZhc3QgbG9hZGluZyBwYWdlcyBhbmQgZGVmYXVsdCBjbXMgc3RydWN0dXJlIGZvciBjb21tb2RpdHkgY29tbWVyY2UuXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDbXNTdHJ1Y3R1cmVDb25maWdTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGNtc0RhdGFDb25maWc6IENtc1N0cnVjdHVyZUNvbmZpZykge31cblxuICAvKipcbiAgICogTWVyZ2UgdGhlIGNtcyBzdHJ1Y3R1cmUgdG8gdGhlIHBhZ2VTdHJ1Y3R1cmUuIFRoZSBwYWdlIHN0cnVjdHVyZVxuICAgKiBjYW4gZWl0aGVyIGhvbGQgY29tcGxldGUgcGFnZSBzdHJ1Y3R1cmVzIG9yIGdsb2JhbCBzdHJ1Y3R1cmVzIHRoYXRcbiAgICogbWlnaHQgYXBwbHkgdG8gYWxsIHBhZ2VzIChzdWNoIGhhcyBoZWFkZXIgY29wb25lbnRzKS5cbiAgICovXG4gIG1lcmdlUGFnZVN0cnVjdHVyZShcbiAgICBwYWdlSWQ6IHN0cmluZyxcbiAgICBwYWdlU3RydWN0dXJlOiBDbXNTdHJ1Y3R1cmVNb2RlbFxuICApOiBPYnNlcnZhYmxlPENtc1N0cnVjdHVyZU1vZGVsPiB7XG4gICAgcmV0dXJuIHRoaXMubWVyZ2VQYWdlKHBhZ2VJZCwgcGFnZVN0cnVjdHVyZSkucGlwZShcbiAgICAgIHN3aXRjaE1hcCgocGFnZSkgPT4gdGhpcy5tZXJnZVNsb3RzKHBhZ2UpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogUmV0dXJucyBib29sZWFuIG9ic2VydmFibGUgdG8gaW5kaWNhdGUgd2hldGhlciB0aGUgcGFnZSBzaG91bGQgbm90IGJlXG4gICAqIGxvYWRlZCBmcm9tIHRoZSBiYWNrZW5kLiBUaGlzIGlzIHVzZWZ1bCBmb3IgcGFnZXMgd2hpY2ggYXJlIGNvbW9kaXRpemVkXG4gICAqIGFuZCBmb2xsb3cgYmVzdCBwcmFjdGljZS5cbiAgICpcbiAgICogQnkgZGVmYXVsdCwgY29uZmlndXJhYmxlIHBhZ2VzIGFyZSBkcml2ZW4gYnkgc3RhdGljIGNvbmZpZ3VyYXRpb24sXG4gICAqIGluIG9yZGVyIHRvIGFsbG93IGZvciBmYXN0IGxvYWRpbmcgcGFnZXMgKHByZXZlbnRpbmcgbmV0d29yayBkZWxheXMpLlxuICAgKi9cbiAgc2hvdWxkSWdub3JlQmFja2VuZChwYWdlSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLmdldFBhZ2VGcm9tQ29uZmlnKHBhZ2VJZCkucGlwZShcbiAgICAgIG1hcCgocGFnZSkgPT4gISFwYWdlICYmICEhcGFnZS5pZ25vcmVCYWNrZW5kKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogcmV0dXJucyBhbiBPYnNlcnZhYmxlIGNvbXBvbmVudCBkYXRhIGZyb20gdGhlIHN0YXRpYyBjb25maWd1cmF0aW9uLlxuICAgKi9cbiAgZ2V0Q29tcG9uZW50RnJvbUNvbmZpZyhcbiAgICBjb21wb25lbnRJZDogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8Q29udGVudFNsb3RDb21wb25lbnREYXRhIHwgYW55PiB7XG4gICAgcmV0dXJuIG9mKHRoaXMuZ2V0Q29tcG9uZW50QnlJZChjb21wb25lbnRJZCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIHJldHVybnMgYW4gT2JzZXJ2YWJsZSBjb21wb25lbnRzIGRhdGEgZnJvbSB0aGUgc3RhdGljIGNvbmZpZ3VyYXRpb24uXG4gICAqL1xuICBnZXRDb21wb25lbnRzRnJvbUNvbmZpZyhcbiAgICBpZHM6IHN0cmluZ1tdXG4gICk6IE9ic2VydmFibGU8Q29udGVudFNsb3RDb21wb25lbnREYXRhW10+IHtcbiAgICByZXR1cm4gb2YoaWRzLm1hcCgoaWQpID0+IHRoaXMuZ2V0Q29tcG9uZW50QnlJZChpZCkpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZXR1cm5zIGFuIG9ic2VydmFibGUgd2l0aCB0aGUgYFBhZ2VDb25maWdgLlxuICAgKi9cbiAgcHJvdGVjdGVkIGdldFBhZ2VGcm9tQ29uZmlnKHBhZ2VJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxDbXNQYWdlQ29uZmlnPiB7XG4gICAgcmV0dXJuIG9mKFxuICAgICAgdGhpcy5jbXNEYXRhQ29uZmlnLmNtc1N0cnVjdHVyZSAmJiB0aGlzLmNtc0RhdGFDb25maWcuY21zU3RydWN0dXJlLnBhZ2VzXG4gICAgICAgID8gdGhpcy5jbXNEYXRhQ29uZmlnLmNtc1N0cnVjdHVyZS5wYWdlcy5maW5kKChwKSA9PiBwLnBhZ2VJZCA9PT0gcGFnZUlkKVxuICAgICAgICA6IG51bGxcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIE1lcmdlIHBhZ2UgZGF0YSBmcm9tIHRoZSBjb25maWd1cmF0aW9uIGludG8gdGhlIGdpdmVuIHN0cnVjdHVyZSwgaWYgYW55LlxuICAgKiBJZiB0aGUgZ2l2ZW4gcGFnZSBzdHJ1Y3R1cmUgaXMgZW1wdHksIGEgcGFnZSBpcyBjcmVhdGVkIGFuZCB0aGUgcGFnZSBzbG90cyBhcmVcbiAgICogYXJlIG1lcmdlZCBpbnRvIHRoZSBwYWdlLlxuICAgKi9cbiAgcHJvdGVjdGVkIG1lcmdlUGFnZShcbiAgICBwYWdlSWQ6IHN0cmluZyxcbiAgICBwYWdlU3RydWN0dXJlOiBDbXNTdHJ1Y3R1cmVNb2RlbFxuICApOiBPYnNlcnZhYmxlPENtc1N0cnVjdHVyZU1vZGVsPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UGFnZUZyb21Db25maWcocGFnZUlkKS5waXBlKFxuICAgICAgc3dpdGNoTWFwKChwYWdlKSA9PiB7XG4gICAgICAgIGlmIChwYWdlKSB7XG4gICAgICAgICAgLy8gc2VyaWFsaXplIHBhZ2UgZGF0YVxuICAgICAgICAgIGlmICghcGFnZVN0cnVjdHVyZS5wYWdlKSB7XG4gICAgICAgICAgICBwYWdlU3RydWN0dXJlLnBhZ2UgPSB7XG4gICAgICAgICAgICAgIC4uLnBhZ2UsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcGFnZVN0cnVjdHVyZS5wYWdlLnNsb3RzID0ge307XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghcGFnZVN0cnVjdHVyZS5wYWdlLnNsb3RzKSB7XG4gICAgICAgICAgICBwYWdlU3RydWN0dXJlLnBhZ2Uuc2xvdHMgPSB7fTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRoaXMubWVyZ2VTbG90cyhwYWdlU3RydWN0dXJlLCBwYWdlLnNsb3RzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gb2YocGFnZVN0cnVjdHVyZSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGFueSBwcmUtY29uZmlndXJlZCBzbG90cyBmb3IgcGFnZXMgdGhhdCBkbyBub3QgdXNlIHRoZW0uXG4gICAqIElmIHBhZ2VzIGhhdmUgYSBzbG90IGZvciB0aGUgZ2l2ZW4gcG9zaXRpb24sIHRoZSBjb25maWdpdXJhdGlvblxuICAgKiBpcyBpbmdvcmVkLiBFdmVuIGlmIHRoZSBzbG90IGRvZXMgbm90IGhhdmUgaW5uZXIgc3RydWN0dXJlIChzdWNoIGFzXG4gICAqIGNvbXBvbmVudHMpLCBzbyB0aGF0IHRoZSBjbXMgc3RydWN0dXJlIGlzIGFibGUgdG8gb3ZlcnJpZGUgdGhlIChzdGF0aWMpXG4gICAqIGNvbmZpZ3VyYXRpb24uXG4gICAqL1xuICBwcm90ZWN0ZWQgbWVyZ2VTbG90cyhcbiAgICBwYWdlU3RydWN0dXJlOiBDbXNTdHJ1Y3R1cmVNb2RlbCxcbiAgICBzbG90cz86IENtc1BhZ2VTbG90c0NvbmZpZ1xuICApOiBPYnNlcnZhYmxlPENtc1N0cnVjdHVyZU1vZGVsPiB7XG4gICAgLy8gaWYgbm8gc2xvdHMgaGF2ZSBiZWVuIGdpdmVuLCB3ZSB1c2UgdGhlIGdsb2JhbCBjb25maWd1cmVkIHNsb3RzXG4gICAgaWYgKFxuICAgICAgIXNsb3RzICYmXG4gICAgICB0aGlzLmNtc0RhdGFDb25maWcuY21zU3RydWN0dXJlICYmXG4gICAgICB0aGlzLmNtc0RhdGFDb25maWcuY21zU3RydWN0dXJlLnNsb3RzXG4gICAgKSB7XG4gICAgICBzbG90cyA9IHRoaXMuY21zRGF0YUNvbmZpZy5jbXNTdHJ1Y3R1cmUuc2xvdHM7XG4gICAgfVxuXG4gICAgaWYgKCFzbG90cykge1xuICAgICAgcmV0dXJuIG9mKHBhZ2VTdHJ1Y3R1cmUpO1xuICAgIH1cblxuICAgIGZvciAoY29uc3QgcG9zaXRpb24gb2YgT2JqZWN0LmtleXMoc2xvdHMpKSB7XG4gICAgICBpZiAoIU9iamVjdC5rZXlzKHBhZ2VTdHJ1Y3R1cmUucGFnZS5zbG90cykuaW5jbHVkZXMocG9zaXRpb24pKSB7XG4gICAgICAgIC8vIHRoZSBnbG9iYWwgc2xvdCBpc24ndCB5ZXQgcGFydCBvZiB0aGUgcGFnZSBzdHJ1Y3R1cmVcbiAgICAgICAgcGFnZVN0cnVjdHVyZS5wYWdlLnNsb3RzW3Bvc2l0aW9uXSA9IHt9O1xuXG4gICAgICAgIGZvciAoY29uc3QgY29tcG9uZW50IG9mIHRoaXMuZ2V0Q29tcG9uZW50c0J5UG9zaXRpb24oc2xvdHMsIHBvc2l0aW9uKSkge1xuICAgICAgICAgIGlmICghcGFnZVN0cnVjdHVyZS5wYWdlLnNsb3RzW3Bvc2l0aW9uXS5jb21wb25lbnRzKSB7XG4gICAgICAgICAgICBwYWdlU3RydWN0dXJlLnBhZ2Uuc2xvdHNbcG9zaXRpb25dLmNvbXBvbmVudHMgPSBbXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcGFnZVN0cnVjdHVyZS5wYWdlLnNsb3RzW3Bvc2l0aW9uXS5jb21wb25lbnRzLnB1c2goe1xuICAgICAgICAgICAgdWlkOiBjb21wb25lbnQudWlkLFxuICAgICAgICAgICAgZmxleFR5cGU6IGNvbXBvbmVudC5mbGV4VHlwZSxcbiAgICAgICAgICAgIHR5cGVDb2RlOiBjb21wb25lbnQudHlwZUNvZGUsXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaWYgKCFwYWdlU3RydWN0dXJlLmNvbXBvbmVudHMpIHtcbiAgICAgICAgICAgIHBhZ2VTdHJ1Y3R1cmUuY29tcG9uZW50cyA9IFtdO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHBhZ2VTdHJ1Y3R1cmUuY29tcG9uZW50cy5wdXNoKGNvbXBvbmVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gb2YocGFnZVN0cnVjdHVyZSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0Q29tcG9uZW50c0J5UG9zaXRpb24oXG4gICAgc2xvdHM6IENtc1BhZ2VTbG90c0NvbmZpZyxcbiAgICBwb3NpdGlvbjogc3RyaW5nXG4gICk6IENvbnRlbnRTbG90Q29tcG9uZW50RGF0YVtdIHtcbiAgICBjb25zdCBjb21wb25lbnRzID0gW107XG4gICAgaWYgKHNsb3RzW3Bvc2l0aW9uXSAmJiBzbG90c1twb3NpdGlvbl0uY29tcG9uZW50SWRzKSB7XG4gICAgICBmb3IgKGNvbnN0IGNvbXBvbmVudElkIG9mIHNsb3RzW3Bvc2l0aW9uXS5jb21wb25lbnRJZHMpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHRoaXMuY21zRGF0YUNvbmZpZy5jbXNTdHJ1Y3R1cmUgJiZcbiAgICAgICAgICB0aGlzLmNtc0RhdGFDb25maWcuY21zU3RydWN0dXJlLmNvbXBvbmVudHNcbiAgICAgICAgKSB7XG4gICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gdGhpcy5jbXNEYXRhQ29uZmlnLmNtc1N0cnVjdHVyZS5jb21wb25lbnRzW1xuICAgICAgICAgICAgY29tcG9uZW50SWRcbiAgICAgICAgICBdO1xuICAgICAgICAgIGlmIChjb21wb25lbnQpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudHMucHVzaCh7IHVpZDogY29tcG9uZW50SWQsIC4uLmNvbXBvbmVudCB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNvbXBvbmVudHM7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0Q29tcG9uZW50QnlJZChjb21wb25lbnRJZDogc3RyaW5nKTogQ29udGVudFNsb3RDb21wb25lbnREYXRhIHtcbiAgICByZXR1cm4gdGhpcy5jbXNEYXRhQ29uZmlnLmNtc1N0cnVjdHVyZSAmJlxuICAgICAgdGhpcy5jbXNEYXRhQ29uZmlnLmNtc1N0cnVjdHVyZS5jb21wb25lbnRzXG4gICAgICA/IHRoaXMuY21zRGF0YUNvbmZpZy5jbXNTdHJ1Y3R1cmUuY29tcG9uZW50c1tjb21wb25lbnRJZF1cbiAgICAgIDogdW5kZWZpbmVkO1xuICB9XG59XG4iXX0=
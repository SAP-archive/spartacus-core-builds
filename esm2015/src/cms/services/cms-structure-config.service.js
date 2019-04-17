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
     * returns an Obserable component data from the static configuration.
     * @param {?} componentId
     * @return {?}
     */
    getComponentFromConfig(componentId) {
        return of(this.cmsDataConfig.cmsStructure &&
            this.cmsDataConfig.cmsStructure.components
            ? this.cmsDataConfig.cmsStructure.components[componentId]
            : null);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLXN0cnVjdHVyZS1jb25maWcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jbXMvc2VydmljZXMvY21zLXN0cnVjdHVyZS1jb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEQsT0FBTyxFQUdMLGtCQUFrQixHQUNuQixNQUFNLGdDQUFnQyxDQUFDOzs7Ozs7Ozs7Ozs7O0FBZ0J4QyxNQUFNLE9BQWdCLHlCQUF5Qjs7OztJQUM3QyxZQUFzQixhQUFpQztRQUFqQyxrQkFBYSxHQUFiLGFBQWEsQ0FBb0I7SUFBRyxDQUFDOzs7Ozs7Ozs7SUFPM0Qsa0JBQWtCLENBQ2hCLE1BQWMsRUFDZCxhQUFnQztRQUVoQyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FDL0MsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUN6QyxDQUFDO0lBQ0osQ0FBQzs7Ozs7Ozs7Ozs7O0lBV0QsbUJBQW1CLENBQUMsTUFBYztRQUNoQyxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQ3hDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FDNUMsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUtELHNCQUFzQixDQUNwQixXQUFtQjtRQUVuQixPQUFPLEVBQUUsQ0FDUCxJQUFJ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bXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge1xuICBDbXNQYWdlQ29uZmlnLFxuICBDbXNQYWdlU2xvdHNDb25maWcsXG4gIENtc1N0cnVjdHVyZUNvbmZpZyxcbn0gZnJvbSAnLi4vY29uZmlnL2Ntcy1zdHJ1Y3R1cmUuY29uZmlnJztcbmltcG9ydCB7IENvbnRlbnRTbG90Q29tcG9uZW50RGF0YSB9IGZyb20gJy4uL21vZGVsL2NvbnRlbnQtc2xvdC1jb21wb25lbnQtZGF0YS5tb2RlbCc7XG5pbXBvcnQgeyBDbXNTdHJ1Y3R1cmVNb2RlbCB9IGZyb20gJy4uL21vZGVsL3BhZ2UubW9kZWwnO1xuXG4vKipcbiAqIFNlcnZpY2UgdGhhdCBwcm92aWRlcyBhY2Nlc3MgdG8gQ01TIHN0cnVjdHVyZSBmcm9tIGEgc3RhdGljXG4gKiBjb25maWd1cmF0aW9uIG9yIGNvbmZpZ3VyYXRpb24gZmlsZS4gVGhpcyBjbGFzcyB1c2VzIHN0YXRpY1xuICogY29uZmlndXJhdGlvbiBpcyBkZXNpZ25lZCBpbiBhc3luYyBmYXNoaW9uIHNvIHRoYXQgY29uZmlndXJhdGlvc25cbiAqIGNhbiBiZSBsb2FkZWQgZnJvbSBhIGZpbGUgb3Igc3RyZWFtLlxuICpcbiAqIFRoZSBpbnRlbmQgb2YgdGhlIGBDbXNTdHJ1Y3R1cmVDb25maWdTZXJ2aWNlYCBob3dldmVyIGlzIHRvIHByb3ZpZGVcbiAqIGZhc3QgbG9hZGluZyBwYWdlcyBhbmQgZGVmYXVsdCBjbXMgc3RydWN0dXJlIGZvciBjb21vZG90eSBjb21tZXJjZS5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENtc1N0cnVjdHVyZUNvbmZpZ1NlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgY21zRGF0YUNvbmZpZzogQ21zU3RydWN0dXJlQ29uZmlnKSB7fVxuXG4gIC8qKlxuICAgKiBNZXJnZSB0aGUgY21zIHN0cnVjdHVyZSB0byB0aGUgcGFnZVN0cnVjdHVyZS4gVGhlIHBhZ2Ugc3RydWN0dXJlXG4gICAqIGNhbiBlaXRoZXIgaG9sZCBjb21wbGV0ZSBwYWdlIHN0cnVjdHVyZXMgb3IgZ2xvYmFsIHN0cnVjdHVyZXMgdGhhdFxuICAgKiBtaWdodCBhcHBseSB0byBhbGwgcGFnZXMgKHN1Y2ggaGFzIGhlYWRlciBjb3BvbmVudHMpLlxuICAgKi9cbiAgbWVyZ2VQYWdlU3RydWN0dXJlKFxuICAgIHBhZ2VJZDogc3RyaW5nLFxuICAgIHBhZ2VTdHJ1Y3R1cmU6IENtc1N0cnVjdHVyZU1vZGVsXG4gICk6IE9ic2VydmFibGU8Q21zU3RydWN0dXJlTW9kZWw+IHtcbiAgICByZXR1cm4gdGhpcy5tZXJnZVBhZ2UocGFnZUlkLCBwYWdlU3RydWN0dXJlKS5waXBlKFxuICAgICAgc3dpdGNoTWFwKHBhZ2UgPT4gdGhpcy5tZXJnZVNsb3RzKHBhZ2UpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogUmV0dXJucyBib29sZWFuIG9ic2VydmFibGUgdG8gaW5kaWNhdGUgd2hldGhlciB0aGUgcGFnZSBzaG91bGQgbm90IGJlXG4gICAqIGxvYWRlZCBmcm9tIHRoZSBiYWNrZW5kLiBUaGlzIGlzIHVzZWZ1bCBmb3IgcGFnZXMgd2hpY2ggYXJlIGNvbW9kaXRpemVkXG4gICAqIGFuZCBmb2xsb3cgYmVzdCBwcmFjdGljZS5cbiAgICpcbiAgICogQnkgZGVmYXVsdCwgY29uZmlndXJhYmxlIHBhZ2VzIGFyZSBkcml2ZW4gYnkgc3RhdGljIGNvbmZpZ3VyYXRpb24sXG4gICAqIGluIG9yZGVyIHRvIGFsbG93IGZvciBmYXN0IGxvYWRpbmcgcGFnZXMgKHByZXZlbnRpbmcgbmV0d29yayBkZWxheXMpLlxuICAgKi9cbiAgc2hvdWxkSWdub3JlQmFja2VuZChwYWdlSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLmdldFBhZ2VGcm9tQ29uZmlnKHBhZ2VJZCkucGlwZShcbiAgICAgIG1hcChwYWdlID0+ICEhcGFnZSAmJiAhIXBhZ2UuaWdub3JlQmFja2VuZClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIHJldHVybnMgYW4gT2JzZXJhYmxlIGNvbXBvbmVudCBkYXRhIGZyb20gdGhlIHN0YXRpYyBjb25maWd1cmF0aW9uLlxuICAgKi9cbiAgZ2V0Q29tcG9uZW50RnJvbUNvbmZpZyhcbiAgICBjb21wb25lbnRJZDogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8Q29udGVudFNsb3RDb21wb25lbnREYXRhIHwgYW55PiB7XG4gICAgcmV0dXJuIG9mKFxuICAgICAgdGhpcy5jbXNEYXRhQ29uZmlnLmNtc1N0cnVjdHVyZSAmJlxuICAgICAgICB0aGlzLmNtc0RhdGFDb25maWcuY21zU3RydWN0dXJlLmNvbXBvbmVudHNcbiAgICAgICAgPyB0aGlzLmNtc0RhdGFDb25maWcuY21zU3RydWN0dXJlLmNvbXBvbmVudHNbY29tcG9uZW50SWRdXG4gICAgICAgIDogbnVsbFxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogcmV0dXJucyBhbiBvYnNlcnZhYmxlIHdpdGggdGhlIGBQYWdlQ29uZmlnYC5cbiAgICovXG4gIHByaXZhdGUgZ2V0UGFnZUZyb21Db25maWcocGFnZUlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPENtc1BhZ2VDb25maWc+IHtcbiAgICByZXR1cm4gb2YoXG4gICAgICB0aGlzLmNtc0RhdGFDb25maWcuY21zU3RydWN0dXJlICYmIHRoaXMuY21zRGF0YUNvbmZpZy5jbXNTdHJ1Y3R1cmUucGFnZXNcbiAgICAgICAgPyB0aGlzLmNtc0RhdGFDb25maWcuY21zU3RydWN0dXJlLnBhZ2VzLmZpbmQocCA9PiBwLnBhZ2VJZCA9PT0gcGFnZUlkKVxuICAgICAgICA6IG51bGxcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIE1lcmdlIHBhZ2UgZGF0YSBmcm9tIHRoZSBjb25maWd1cmF0aW9uIGludG8gdGhlIGdpdmVuIHN0cnVjdHVyZSwgaWYgYW55LlxuICAgKiBJZiB0aGUgZ2l2ZW4gcGFnZSBzdHJ1Y3R1cmUgaXMgZW1wdHksIGEgcGFnZSBpcyBjcmVhdGVkIGFuZCB0aGUgcGFnZSBzbG90cyBhcmVcbiAgICogYXJlIG1lcmdlZCBpbnRvIHRoZSBwYWdlLlxuICAgKi9cbiAgcHJpdmF0ZSBtZXJnZVBhZ2UoXG4gICAgcGFnZUlkOiBzdHJpbmcsXG4gICAgcGFnZVN0cnVjdHVyZTogQ21zU3RydWN0dXJlTW9kZWxcbiAgKTogT2JzZXJ2YWJsZTxDbXNTdHJ1Y3R1cmVNb2RlbD4ge1xuICAgIHJldHVybiB0aGlzLmdldFBhZ2VGcm9tQ29uZmlnKHBhZ2VJZCkucGlwZShcbiAgICAgIHN3aXRjaE1hcChwYWdlID0+IHtcbiAgICAgICAgaWYgKHBhZ2UpIHtcbiAgICAgICAgICAvLyBzZXJpYWxpemUgcGFnZSBkYXRhXG4gICAgICAgICAgaWYgKCFwYWdlU3RydWN0dXJlLnBhZ2UpIHtcbiAgICAgICAgICAgIHBhZ2VTdHJ1Y3R1cmUucGFnZSA9IHtcbiAgICAgICAgICAgICAgLi4ucGFnZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBwYWdlU3RydWN0dXJlLnBhZ2Uuc2xvdHMgPSB7fTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFwYWdlU3RydWN0dXJlLnBhZ2Uuc2xvdHMpIHtcbiAgICAgICAgICAgIHBhZ2VTdHJ1Y3R1cmUucGFnZS5zbG90cyA9IHt9O1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhpcy5tZXJnZVNsb3RzKHBhZ2VTdHJ1Y3R1cmUsIHBhZ2Uuc2xvdHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBvZihwYWdlU3RydWN0dXJlKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYW55IHByZS1jb25maWd1cmVkIHNsb3RzIGZvciBwYWdlcyB0aGF0IGRvIG5vdCB1c2UgdGhlbS5cbiAgICogSWYgcGFnZXMgaGF2ZSBhIHNsb3QgZm9yIHRoZSBnaXZlbiBwb3NpdGlvbiwgdGhlIGNvbmZpZ2l1cmF0aW9uXG4gICAqIGlzIGluZ29yZWQuIEV2ZW4gaWYgdGhlIHNsb3QgZG9lcyBub3QgaGF2ZSBpbm5lciBzdHJ1Y3R1cmUgKHN1Y2ggYXNcbiAgICogY29tcG9uZW50cyksIHNvIHRoYXQgdGhlIGNtcyBzdHJ1Y3R1cmUgaXMgYWJsZSB0byBvdmVycmlkZSB0aGUgKHN0YXRpYylcbiAgICogY29uZmlndXJhdGlvbi5cbiAgICovXG4gIHByaXZhdGUgbWVyZ2VTbG90cyhcbiAgICBwYWdlU3RydWN0dXJlOiBDbXNTdHJ1Y3R1cmVNb2RlbCxcbiAgICBzbG90cz86IENtc1BhZ2VTbG90c0NvbmZpZ1xuICApOiBPYnNlcnZhYmxlPENtc1N0cnVjdHVyZU1vZGVsPiB7XG4gICAgLy8gaWYgbm8gc2xvdHMgaGF2ZSBiZWVuIGdpdmVuLCB3ZSB1c2UgdGhlIGdsb2JhbCBjb25maWd1cmVkIHNsb3RzXG4gICAgaWYgKFxuICAgICAgIXNsb3RzICYmXG4gICAgICB0aGlzLmNtc0RhdGFDb25maWcuY21zU3RydWN0dXJlICYmXG4gICAgICB0aGlzLmNtc0RhdGFDb25maWcuY21zU3RydWN0dXJlLnNsb3RzXG4gICAgKSB7XG4gICAgICBzbG90cyA9IHRoaXMuY21zRGF0YUNvbmZpZy5jbXNTdHJ1Y3R1cmUuc2xvdHM7XG4gICAgfVxuXG4gICAgaWYgKCFzbG90cykge1xuICAgICAgcmV0dXJuIG9mKHBhZ2VTdHJ1Y3R1cmUpO1xuICAgIH1cblxuICAgIGZvciAoY29uc3QgcG9zaXRpb24gb2YgT2JqZWN0LmtleXMoc2xvdHMpKSB7XG4gICAgICBpZiAoT2JqZWN0LmtleXMocGFnZVN0cnVjdHVyZS5wYWdlLnNsb3RzKS5pbmRleE9mKHBvc2l0aW9uKSA9PT0gLTEpIHtcbiAgICAgICAgLy8gdGhlIGdsb2JhbCBzbG90IGlzbid0IHlldCBwYXJ0IG9mIHRoZSBwYWdlIHN0cnVjdHVyZVxuICAgICAgICBwYWdlU3RydWN0dXJlLnBhZ2Uuc2xvdHNbcG9zaXRpb25dID0ge307XG5cbiAgICAgICAgZm9yIChjb25zdCBjb21wb25lbnQgb2YgdGhpcy5nZXRDb21wb25lbnRzQnlQb3NpdGlvbihzbG90cywgcG9zaXRpb24pKSB7XG4gICAgICAgICAgaWYgKCFwYWdlU3RydWN0dXJlLnBhZ2Uuc2xvdHNbcG9zaXRpb25dLmNvbXBvbmVudHMpIHtcbiAgICAgICAgICAgIHBhZ2VTdHJ1Y3R1cmUucGFnZS5zbG90c1twb3NpdGlvbl0uY29tcG9uZW50cyA9IFtdO1xuICAgICAgICAgIH1cbiAgICAgICAgICBwYWdlU3RydWN0dXJlLnBhZ2Uuc2xvdHNbcG9zaXRpb25dLmNvbXBvbmVudHMucHVzaCh7XG4gICAgICAgICAgICB1aWQ6IGNvbXBvbmVudC51aWQsXG4gICAgICAgICAgICBmbGV4VHlwZTogY29tcG9uZW50LmZsZXhUeXBlLFxuICAgICAgICAgICAgdHlwZUNvZGU6IGNvbXBvbmVudC50eXBlQ29kZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZiAoIXBhZ2VTdHJ1Y3R1cmUuY29tcG9uZW50cykge1xuICAgICAgICAgICAgcGFnZVN0cnVjdHVyZS5jb21wb25lbnRzID0gW107XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcGFnZVN0cnVjdHVyZS5jb21wb25lbnRzLnB1c2goY29tcG9uZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBvZihwYWdlU3RydWN0dXJlKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q29tcG9uZW50c0J5UG9zaXRpb24oXG4gICAgc2xvdHM6IENtc1BhZ2VTbG90c0NvbmZpZyxcbiAgICBwb3NpdGlvbjogc3RyaW5nXG4gICk6IENvbnRlbnRTbG90Q29tcG9uZW50RGF0YVtdIHtcbiAgICBjb25zdCBjb21wb25lbnRzID0gW107XG4gICAgaWYgKHNsb3RzW3Bvc2l0aW9uXSAmJiBzbG90c1twb3NpdGlvbl0uY29tcG9uZW50SWRzKSB7XG4gICAgICBmb3IgKGNvbnN0IGNvbXBvbmVudElkIG9mIHNsb3RzW3Bvc2l0aW9uXS5jb21wb25lbnRJZHMpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHRoaXMuY21zRGF0YUNvbmZpZy5jbXNTdHJ1Y3R1cmUgJiZcbiAgICAgICAgICB0aGlzLmNtc0RhdGFDb25maWcuY21zU3RydWN0dXJlLmNvbXBvbmVudHNcbiAgICAgICAgKSB7XG4gICAgICAgICAgY29uc3QgY29tcG9uZW50ID0gdGhpcy5jbXNEYXRhQ29uZmlnLmNtc1N0cnVjdHVyZS5jb21wb25lbnRzW1xuICAgICAgICAgICAgY29tcG9uZW50SWRcbiAgICAgICAgICBdO1xuICAgICAgICAgIGlmIChjb21wb25lbnQpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudHMucHVzaCh7IHVpZDogY29tcG9uZW50SWQsIC4uLmNvbXBvbmVudCB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNvbXBvbmVudHM7XG4gIH1cbn1cbiJdfQ==
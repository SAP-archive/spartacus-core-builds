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
 * configuration is designed in async fashion so that configurations
 * can be loaded from a file or stream.
 *
 * The intent of the `CmsStructureConfigService` however is to provide
 * fast loading pages and default cms structure for commodity commerce.
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
     * @protected
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
     * @protected
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
     * @protected
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
    /**
     * @protected
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
     * @protected
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLXN0cnVjdHVyZS1jb25maWcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jbXMvc2VydmljZXMvY21zLXN0cnVjdHVyZS1jb25maWcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEQsT0FBTyxFQUdMLGtCQUFrQixHQUNuQixNQUFNLGdDQUFnQyxDQUFDOzs7Ozs7Ozs7Ozs7O0FBZ0J4QyxNQUFNLE9BQWdCLHlCQUF5Qjs7OztJQUM3QyxZQUFzQixhQUFpQztRQUFqQyxrQkFBYSxHQUFiLGFBQWEsQ0FBb0I7SUFBRyxDQUFDOzs7Ozs7Ozs7SUFPM0Qsa0JBQWtCLENBQ2hCLE1BQWMsRUFDZCxhQUFnQztRQUVoQyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FDL0MsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUN6QyxDQUFDO0lBQ0osQ0FBQzs7Ozs7Ozs7Ozs7O0lBV0QsbUJBQW1CLENBQUMsTUFBYztRQUNoQyxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQ3hDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FDNUMsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUtELHNCQUFzQixDQUNwQixXQUFtQjtRQUVuQixPQUFPLEVBQUUsQ0FBQyxJQUFJ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Q0FBQyxZQUFZLENBQUMsVUFBVTtZQUMxQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQztZQUN6RCxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ2hCLENBQUM7OztZQTVLRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFoQkMsa0JBQWtCOzs7Ozs7OztJQWtCTixrREFBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge1xuICBDbXNQYWdlQ29uZmlnLFxuICBDbXNQYWdlU2xvdHNDb25maWcsXG4gIENtc1N0cnVjdHVyZUNvbmZpZyxcbn0gZnJvbSAnLi4vY29uZmlnL2Ntcy1zdHJ1Y3R1cmUuY29uZmlnJztcbmltcG9ydCB7IENvbnRlbnRTbG90Q29tcG9uZW50RGF0YSB9IGZyb20gJy4uL21vZGVsL2NvbnRlbnQtc2xvdC1jb21wb25lbnQtZGF0YS5tb2RlbCc7XG5pbXBvcnQgeyBDbXNTdHJ1Y3R1cmVNb2RlbCB9IGZyb20gJy4uL21vZGVsL3BhZ2UubW9kZWwnO1xuXG4vKipcbiAqIFNlcnZpY2UgdGhhdCBwcm92aWRlcyBhY2Nlc3MgdG8gQ01TIHN0cnVjdHVyZSBmcm9tIGEgc3RhdGljXG4gKiBjb25maWd1cmF0aW9uIG9yIGNvbmZpZ3VyYXRpb24gZmlsZS4gVGhpcyBjbGFzcyB1c2VzIHN0YXRpY1xuICogY29uZmlndXJhdGlvbiBpcyBkZXNpZ25lZCBpbiBhc3luYyBmYXNoaW9uIHNvIHRoYXQgY29uZmlndXJhdGlvbnNcbiAqIGNhbiBiZSBsb2FkZWQgZnJvbSBhIGZpbGUgb3Igc3RyZWFtLlxuICpcbiAqIFRoZSBpbnRlbnQgb2YgdGhlIGBDbXNTdHJ1Y3R1cmVDb25maWdTZXJ2aWNlYCBob3dldmVyIGlzIHRvIHByb3ZpZGVcbiAqIGZhc3QgbG9hZGluZyBwYWdlcyBhbmQgZGVmYXVsdCBjbXMgc3RydWN0dXJlIGZvciBjb21tb2RpdHkgY29tbWVyY2UuXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDbXNTdHJ1Y3R1cmVDb25maWdTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGNtc0RhdGFDb25maWc6IENtc1N0cnVjdHVyZUNvbmZpZykge31cblxuICAvKipcbiAgICogTWVyZ2UgdGhlIGNtcyBzdHJ1Y3R1cmUgdG8gdGhlIHBhZ2VTdHJ1Y3R1cmUuIFRoZSBwYWdlIHN0cnVjdHVyZVxuICAgKiBjYW4gZWl0aGVyIGhvbGQgY29tcGxldGUgcGFnZSBzdHJ1Y3R1cmVzIG9yIGdsb2JhbCBzdHJ1Y3R1cmVzIHRoYXRcbiAgICogbWlnaHQgYXBwbHkgdG8gYWxsIHBhZ2VzIChzdWNoIGhhcyBoZWFkZXIgY29wb25lbnRzKS5cbiAgICovXG4gIG1lcmdlUGFnZVN0cnVjdHVyZShcbiAgICBwYWdlSWQ6IHN0cmluZyxcbiAgICBwYWdlU3RydWN0dXJlOiBDbXNTdHJ1Y3R1cmVNb2RlbFxuICApOiBPYnNlcnZhYmxlPENtc1N0cnVjdHVyZU1vZGVsPiB7XG4gICAgcmV0dXJuIHRoaXMubWVyZ2VQYWdlKHBhZ2VJZCwgcGFnZVN0cnVjdHVyZSkucGlwZShcbiAgICAgIHN3aXRjaE1hcChwYWdlID0+IHRoaXMubWVyZ2VTbG90cyhwYWdlKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIFJldHVybnMgYm9vbGVhbiBvYnNlcnZhYmxlIHRvIGluZGljYXRlIHdoZXRoZXIgdGhlIHBhZ2Ugc2hvdWxkIG5vdCBiZVxuICAgKiBsb2FkZWQgZnJvbSB0aGUgYmFja2VuZC4gVGhpcyBpcyB1c2VmdWwgZm9yIHBhZ2VzIHdoaWNoIGFyZSBjb21vZGl0aXplZFxuICAgKiBhbmQgZm9sbG93IGJlc3QgcHJhY3RpY2UuXG4gICAqXG4gICAqIEJ5IGRlZmF1bHQsIGNvbmZpZ3VyYWJsZSBwYWdlcyBhcmUgZHJpdmVuIGJ5IHN0YXRpYyBjb25maWd1cmF0aW9uLFxuICAgKiBpbiBvcmRlciB0byBhbGxvdyBmb3IgZmFzdCBsb2FkaW5nIHBhZ2VzIChwcmV2ZW50aW5nIG5ldHdvcmsgZGVsYXlzKS5cbiAgICovXG4gIHNob3VsZElnbm9yZUJhY2tlbmQocGFnZUlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRQYWdlRnJvbUNvbmZpZyhwYWdlSWQpLnBpcGUoXG4gICAgICBtYXAocGFnZSA9PiAhIXBhZ2UgJiYgISFwYWdlLmlnbm9yZUJhY2tlbmQpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZXR1cm5zIGFuIE9ic2VydmFibGUgY29tcG9uZW50IGRhdGEgZnJvbSB0aGUgc3RhdGljIGNvbmZpZ3VyYXRpb24uXG4gICAqL1xuICBnZXRDb21wb25lbnRGcm9tQ29uZmlnKFxuICAgIGNvbXBvbmVudElkOiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxDb250ZW50U2xvdENvbXBvbmVudERhdGEgfCBhbnk+IHtcbiAgICByZXR1cm4gb2YodGhpcy5nZXRDb21wb25lbnRCeUlkKGNvbXBvbmVudElkKSk7XG4gIH1cblxuICAvKipcbiAgICogcmV0dXJucyBhbiBPYnNlcnZhYmxlIGNvbXBvbmVudHMgZGF0YSBmcm9tIHRoZSBzdGF0aWMgY29uZmlndXJhdGlvbi5cbiAgICovXG4gIGdldENvbXBvbmVudHNGcm9tQ29uZmlnKFxuICAgIGlkczogc3RyaW5nW11cbiAgKTogT2JzZXJ2YWJsZTxDb250ZW50U2xvdENvbXBvbmVudERhdGFbXT4ge1xuICAgIHJldHVybiBvZihpZHMubWFwKGlkID0+IHRoaXMuZ2V0Q29tcG9uZW50QnlJZChpZCkpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiByZXR1cm5zIGFuIG9ic2VydmFibGUgd2l0aCB0aGUgYFBhZ2VDb25maWdgLlxuICAgKi9cbiAgcHJvdGVjdGVkIGdldFBhZ2VGcm9tQ29uZmlnKHBhZ2VJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxDbXNQYWdlQ29uZmlnPiB7XG4gICAgcmV0dXJuIG9mKFxuICAgICAgdGhpcy5jbXNEYXRhQ29uZmlnLmNtc1N0cnVjdHVyZSAmJiB0aGlzLmNtc0RhdGFDb25maWcuY21zU3RydWN0dXJlLnBhZ2VzXG4gICAgICAgID8gdGhpcy5jbXNEYXRhQ29uZmlnLmNtc1N0cnVjdHVyZS5wYWdlcy5maW5kKHAgPT4gcC5wYWdlSWQgPT09IHBhZ2VJZClcbiAgICAgICAgOiBudWxsXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXJnZSBwYWdlIGRhdGEgZnJvbSB0aGUgY29uZmlndXJhdGlvbiBpbnRvIHRoZSBnaXZlbiBzdHJ1Y3R1cmUsIGlmIGFueS5cbiAgICogSWYgdGhlIGdpdmVuIHBhZ2Ugc3RydWN0dXJlIGlzIGVtcHR5LCBhIHBhZ2UgaXMgY3JlYXRlZCBhbmQgdGhlIHBhZ2Ugc2xvdHMgYXJlXG4gICAqIGFyZSBtZXJnZWQgaW50byB0aGUgcGFnZS5cbiAgICovXG4gIHByb3RlY3RlZCBtZXJnZVBhZ2UoXG4gICAgcGFnZUlkOiBzdHJpbmcsXG4gICAgcGFnZVN0cnVjdHVyZTogQ21zU3RydWN0dXJlTW9kZWxcbiAgKTogT2JzZXJ2YWJsZTxDbXNTdHJ1Y3R1cmVNb2RlbD4ge1xuICAgIHJldHVybiB0aGlzLmdldFBhZ2VGcm9tQ29uZmlnKHBhZ2VJZCkucGlwZShcbiAgICAgIHN3aXRjaE1hcChwYWdlID0+IHtcbiAgICAgICAgaWYgKHBhZ2UpIHtcbiAgICAgICAgICAvLyBzZXJpYWxpemUgcGFnZSBkYXRhXG4gICAgICAgICAgaWYgKCFwYWdlU3RydWN0dXJlLnBhZ2UpIHtcbiAgICAgICAgICAgIHBhZ2VTdHJ1Y3R1cmUucGFnZSA9IHtcbiAgICAgICAgICAgICAgLi4ucGFnZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBwYWdlU3RydWN0dXJlLnBhZ2Uuc2xvdHMgPSB7fTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFwYWdlU3RydWN0dXJlLnBhZ2Uuc2xvdHMpIHtcbiAgICAgICAgICAgIHBhZ2VTdHJ1Y3R1cmUucGFnZS5zbG90cyA9IHt9O1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhpcy5tZXJnZVNsb3RzKHBhZ2VTdHJ1Y3R1cmUsIHBhZ2Uuc2xvdHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBvZihwYWdlU3RydWN0dXJlKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYW55IHByZS1jb25maWd1cmVkIHNsb3RzIGZvciBwYWdlcyB0aGF0IGRvIG5vdCB1c2UgdGhlbS5cbiAgICogSWYgcGFnZXMgaGF2ZSBhIHNsb3QgZm9yIHRoZSBnaXZlbiBwb3NpdGlvbiwgdGhlIGNvbmZpZ2l1cmF0aW9uXG4gICAqIGlzIGluZ29yZWQuIEV2ZW4gaWYgdGhlIHNsb3QgZG9lcyBub3QgaGF2ZSBpbm5lciBzdHJ1Y3R1cmUgKHN1Y2ggYXNcbiAgICogY29tcG9uZW50cyksIHNvIHRoYXQgdGhlIGNtcyBzdHJ1Y3R1cmUgaXMgYWJsZSB0byBvdmVycmlkZSB0aGUgKHN0YXRpYylcbiAgICogY29uZmlndXJhdGlvbi5cbiAgICovXG4gIHByb3RlY3RlZCBtZXJnZVNsb3RzKFxuICAgIHBhZ2VTdHJ1Y3R1cmU6IENtc1N0cnVjdHVyZU1vZGVsLFxuICAgIHNsb3RzPzogQ21zUGFnZVNsb3RzQ29uZmlnXG4gICk6IE9ic2VydmFibGU8Q21zU3RydWN0dXJlTW9kZWw+IHtcbiAgICAvLyBpZiBubyBzbG90cyBoYXZlIGJlZW4gZ2l2ZW4sIHdlIHVzZSB0aGUgZ2xvYmFsIGNvbmZpZ3VyZWQgc2xvdHNcbiAgICBpZiAoXG4gICAgICAhc2xvdHMgJiZcbiAgICAgIHRoaXMuY21zRGF0YUNvbmZpZy5jbXNTdHJ1Y3R1cmUgJiZcbiAgICAgIHRoaXMuY21zRGF0YUNvbmZpZy5jbXNTdHJ1Y3R1cmUuc2xvdHNcbiAgICApIHtcbiAgICAgIHNsb3RzID0gdGhpcy5jbXNEYXRhQ29uZmlnLmNtc1N0cnVjdHVyZS5zbG90cztcbiAgICB9XG5cbiAgICBpZiAoIXNsb3RzKSB7XG4gICAgICByZXR1cm4gb2YocGFnZVN0cnVjdHVyZSk7XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBwb3NpdGlvbiBvZiBPYmplY3Qua2V5cyhzbG90cykpIHtcbiAgICAgIGlmICghT2JqZWN0LmtleXMocGFnZVN0cnVjdHVyZS5wYWdlLnNsb3RzKS5pbmNsdWRlcyhwb3NpdGlvbikpIHtcbiAgICAgICAgLy8gdGhlIGdsb2JhbCBzbG90IGlzbid0IHlldCBwYXJ0IG9mIHRoZSBwYWdlIHN0cnVjdHVyZVxuICAgICAgICBwYWdlU3RydWN0dXJlLnBhZ2Uuc2xvdHNbcG9zaXRpb25dID0ge307XG5cbiAgICAgICAgZm9yIChjb25zdCBjb21wb25lbnQgb2YgdGhpcy5nZXRDb21wb25lbnRzQnlQb3NpdGlvbihzbG90cywgcG9zaXRpb24pKSB7XG4gICAgICAgICAgaWYgKCFwYWdlU3RydWN0dXJlLnBhZ2Uuc2xvdHNbcG9zaXRpb25dLmNvbXBvbmVudHMpIHtcbiAgICAgICAgICAgIHBhZ2VTdHJ1Y3R1cmUucGFnZS5zbG90c1twb3NpdGlvbl0uY29tcG9uZW50cyA9IFtdO1xuICAgICAgICAgIH1cbiAgICAgICAgICBwYWdlU3RydWN0dXJlLnBhZ2Uuc2xvdHNbcG9zaXRpb25dLmNvbXBvbmVudHMucHVzaCh7XG4gICAgICAgICAgICB1aWQ6IGNvbXBvbmVudC51aWQsXG4gICAgICAgICAgICBmbGV4VHlwZTogY29tcG9uZW50LmZsZXhUeXBlLFxuICAgICAgICAgICAgdHlwZUNvZGU6IGNvbXBvbmVudC50eXBlQ29kZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZiAoIXBhZ2VTdHJ1Y3R1cmUuY29tcG9uZW50cykge1xuICAgICAgICAgICAgcGFnZVN0cnVjdHVyZS5jb21wb25lbnRzID0gW107XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcGFnZVN0cnVjdHVyZS5jb21wb25lbnRzLnB1c2goY29tcG9uZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBvZihwYWdlU3RydWN0dXJlKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRDb21wb25lbnRzQnlQb3NpdGlvbihcbiAgICBzbG90czogQ21zUGFnZVNsb3RzQ29uZmlnLFxuICAgIHBvc2l0aW9uOiBzdHJpbmdcbiAgKTogQ29udGVudFNsb3RDb21wb25lbnREYXRhW10ge1xuICAgIGNvbnN0IGNvbXBvbmVudHMgPSBbXTtcbiAgICBpZiAoc2xvdHNbcG9zaXRpb25dICYmIHNsb3RzW3Bvc2l0aW9uXS5jb21wb25lbnRJZHMpIHtcbiAgICAgIGZvciAoY29uc3QgY29tcG9uZW50SWQgb2Ygc2xvdHNbcG9zaXRpb25dLmNvbXBvbmVudElkcykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgdGhpcy5jbXNEYXRhQ29uZmlnLmNtc1N0cnVjdHVyZSAmJlxuICAgICAgICAgIHRoaXMuY21zRGF0YUNvbmZpZy5jbXNTdHJ1Y3R1cmUuY29tcG9uZW50c1xuICAgICAgICApIHtcbiAgICAgICAgICBjb25zdCBjb21wb25lbnQgPSB0aGlzLmNtc0RhdGFDb25maWcuY21zU3RydWN0dXJlLmNvbXBvbmVudHNbXG4gICAgICAgICAgICBjb21wb25lbnRJZFxuICAgICAgICAgIF07XG4gICAgICAgICAgaWYgKGNvbXBvbmVudCkge1xuICAgICAgICAgICAgY29tcG9uZW50cy5wdXNoKHsgdWlkOiBjb21wb25lbnRJZCwgLi4uY29tcG9uZW50IH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY29tcG9uZW50cztcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRDb21wb25lbnRCeUlkKGNvbXBvbmVudElkOiBzdHJpbmcpOiBDb250ZW50U2xvdENvbXBvbmVudERhdGEge1xuICAgIHJldHVybiB0aGlzLmNtc0RhdGFDb25maWcuY21zU3RydWN0dXJlICYmXG4gICAgICB0aGlzLmNtc0RhdGFDb25maWcuY21zU3RydWN0dXJlLmNvbXBvbmVudHNcbiAgICAgID8gdGhpcy5jbXNEYXRhQ29uZmlnLmNtc1N0cnVjdHVyZS5jb21wb25lbnRzW2NvbXBvbmVudElkXVxuICAgICAgOiB1bmRlZmluZWQ7XG4gIH1cbn1cbiJdfQ==
import { Observable } from 'rxjs';
import { CmsPageConfig, CmsPageSlotsConfig, CmsStructureConfig } from '../config/cms-structure.config';
import { ContentSlotComponentData } from '../model/content-slot-component-data.model';
import { CmsStructureModel } from '../model/page.model';
/**
 * Service that provides access to CMS structure from a static
 * configuration or configuration file. This class uses static
 * configuration is designed in async fashion so that configurations
 * can be loaded from a file or stream.
 *
 * The intent of the `CmsStructureConfigService` however is to provide
 * fast loading pages and default cms structure for commodity commerce.
 */
import * as ɵngcc0 from '@angular/core';
export declare abstract class CmsStructureConfigService {
    protected cmsDataConfig: CmsStructureConfig;
    constructor(cmsDataConfig: CmsStructureConfig);
    /**
     * Merge the cms structure to the pageStructure. The page structure
     * can either hold complete page structures or global structures that
     * might apply to all pages (such has header coponents).
     */
    mergePageStructure(pageId: string, pageStructure: CmsStructureModel): Observable<CmsStructureModel>;
    /**
     *
     * Returns boolean observable to indicate whether the page should not be
     * loaded from the backend. This is useful for pages which are comoditized
     * and follow best practice.
     *
     * By default, configurable pages are driven by static configuration,
     * in order to allow for fast loading pages (preventing network delays).
     */
    shouldIgnoreBackend(pageId: string): Observable<boolean>;
    /**
     * returns an Observable component data from the static configuration.
     */
    getComponentFromConfig(componentId: string): Observable<ContentSlotComponentData | any>;
    /**
     * returns an Observable components data from the static configuration.
     */
    getComponentsFromConfig(ids: string[]): Observable<ContentSlotComponentData[]>;
    /**
     * returns an observable with the `PageConfig`.
     */
    protected getPageFromConfig(pageId: string): Observable<CmsPageConfig>;
    /**
     * Merge page data from the configuration into the given structure, if any.
     * If the given page structure is empty, a page is created and the page slots are
     * are merged into the page.
     */
    protected mergePage(pageId: string, pageStructure: CmsStructureModel): Observable<CmsStructureModel>;
    /**
     * Adds any pre-configured slots for pages that do not use them.
     * If pages have a slot for the given position, the configiuration
     * is ingored. Even if the slot does not have inner structure (such as
     * components), so that the cms structure is able to override the (static)
     * configuration.
     */
    protected mergeSlots(pageStructure: CmsStructureModel, slots?: CmsPageSlotsConfig): Observable<CmsStructureModel>;
    protected getComponentsByPosition(slots: CmsPageSlotsConfig, position: string): ContentSlotComponentData[];
    protected getComponentById(componentId: string): ContentSlotComponentData;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CmsStructureConfigService, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLXN0cnVjdHVyZS1jb25maWcuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJjbXMtc3RydWN0dXJlLWNvbmZpZy5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7O0FBYUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQStDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENtc1BhZ2VDb25maWcsIENtc1BhZ2VTbG90c0NvbmZpZywgQ21zU3RydWN0dXJlQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL2Ntcy1zdHJ1Y3R1cmUuY29uZmlnJztcbmltcG9ydCB7IENvbnRlbnRTbG90Q29tcG9uZW50RGF0YSB9IGZyb20gJy4uL21vZGVsL2NvbnRlbnQtc2xvdC1jb21wb25lbnQtZGF0YS5tb2RlbCc7XG5pbXBvcnQgeyBDbXNTdHJ1Y3R1cmVNb2RlbCB9IGZyb20gJy4uL21vZGVsL3BhZ2UubW9kZWwnO1xuLyoqXG4gKiBTZXJ2aWNlIHRoYXQgcHJvdmlkZXMgYWNjZXNzIHRvIENNUyBzdHJ1Y3R1cmUgZnJvbSBhIHN0YXRpY1xuICogY29uZmlndXJhdGlvbiBvciBjb25maWd1cmF0aW9uIGZpbGUuIFRoaXMgY2xhc3MgdXNlcyBzdGF0aWNcbiAqIGNvbmZpZ3VyYXRpb24gaXMgZGVzaWduZWQgaW4gYXN5bmMgZmFzaGlvbiBzbyB0aGF0IGNvbmZpZ3VyYXRpb25zXG4gKiBjYW4gYmUgbG9hZGVkIGZyb20gYSBmaWxlIG9yIHN0cmVhbS5cbiAqXG4gKiBUaGUgaW50ZW50IG9mIHRoZSBgQ21zU3RydWN0dXJlQ29uZmlnU2VydmljZWAgaG93ZXZlciBpcyB0byBwcm92aWRlXG4gKiBmYXN0IGxvYWRpbmcgcGFnZXMgYW5kIGRlZmF1bHQgY21zIHN0cnVjdHVyZSBmb3IgY29tbW9kaXR5IGNvbW1lcmNlLlxuICovXG5leHBvcnQgZGVjbGFyZSBhYnN0cmFjdCBjbGFzcyBDbXNTdHJ1Y3R1cmVDb25maWdTZXJ2aWNlIHtcbiAgICBwcm90ZWN0ZWQgY21zRGF0YUNvbmZpZzogQ21zU3RydWN0dXJlQ29uZmlnO1xuICAgIGNvbnN0cnVjdG9yKGNtc0RhdGFDb25maWc6IENtc1N0cnVjdHVyZUNvbmZpZyk7XG4gICAgLyoqXG4gICAgICogTWVyZ2UgdGhlIGNtcyBzdHJ1Y3R1cmUgdG8gdGhlIHBhZ2VTdHJ1Y3R1cmUuIFRoZSBwYWdlIHN0cnVjdHVyZVxuICAgICAqIGNhbiBlaXRoZXIgaG9sZCBjb21wbGV0ZSBwYWdlIHN0cnVjdHVyZXMgb3IgZ2xvYmFsIHN0cnVjdHVyZXMgdGhhdFxuICAgICAqIG1pZ2h0IGFwcGx5IHRvIGFsbCBwYWdlcyAoc3VjaCBoYXMgaGVhZGVyIGNvcG9uZW50cykuXG4gICAgICovXG4gICAgbWVyZ2VQYWdlU3RydWN0dXJlKHBhZ2VJZDogc3RyaW5nLCBwYWdlU3RydWN0dXJlOiBDbXNTdHJ1Y3R1cmVNb2RlbCk6IE9ic2VydmFibGU8Q21zU3RydWN0dXJlTW9kZWw+O1xuICAgIC8qKlxuICAgICAqXG4gICAgICogUmV0dXJucyBib29sZWFuIG9ic2VydmFibGUgdG8gaW5kaWNhdGUgd2hldGhlciB0aGUgcGFnZSBzaG91bGQgbm90IGJlXG4gICAgICogbG9hZGVkIGZyb20gdGhlIGJhY2tlbmQuIFRoaXMgaXMgdXNlZnVsIGZvciBwYWdlcyB3aGljaCBhcmUgY29tb2RpdGl6ZWRcbiAgICAgKiBhbmQgZm9sbG93IGJlc3QgcHJhY3RpY2UuXG4gICAgICpcbiAgICAgKiBCeSBkZWZhdWx0LCBjb25maWd1cmFibGUgcGFnZXMgYXJlIGRyaXZlbiBieSBzdGF0aWMgY29uZmlndXJhdGlvbixcbiAgICAgKiBpbiBvcmRlciB0byBhbGxvdyBmb3IgZmFzdCBsb2FkaW5nIHBhZ2VzIChwcmV2ZW50aW5nIG5ldHdvcmsgZGVsYXlzKS5cbiAgICAgKi9cbiAgICBzaG91bGRJZ25vcmVCYWNrZW5kKHBhZ2VJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICAvKipcbiAgICAgKiByZXR1cm5zIGFuIE9ic2VydmFibGUgY29tcG9uZW50IGRhdGEgZnJvbSB0aGUgc3RhdGljIGNvbmZpZ3VyYXRpb24uXG4gICAgICovXG4gICAgZ2V0Q29tcG9uZW50RnJvbUNvbmZpZyhjb21wb25lbnRJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxDb250ZW50U2xvdENvbXBvbmVudERhdGEgfCBhbnk+O1xuICAgIC8qKlxuICAgICAqIHJldHVybnMgYW4gT2JzZXJ2YWJsZSBjb21wb25lbnRzIGRhdGEgZnJvbSB0aGUgc3RhdGljIGNvbmZpZ3VyYXRpb24uXG4gICAgICovXG4gICAgZ2V0Q29tcG9uZW50c0Zyb21Db25maWcoaWRzOiBzdHJpbmdbXSk6IE9ic2VydmFibGU8Q29udGVudFNsb3RDb21wb25lbnREYXRhW10+O1xuICAgIC8qKlxuICAgICAqIHJldHVybnMgYW4gb2JzZXJ2YWJsZSB3aXRoIHRoZSBgUGFnZUNvbmZpZ2AuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGdldFBhZ2VGcm9tQ29uZmlnKHBhZ2VJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxDbXNQYWdlQ29uZmlnPjtcbiAgICAvKipcbiAgICAgKiBNZXJnZSBwYWdlIGRhdGEgZnJvbSB0aGUgY29uZmlndXJhdGlvbiBpbnRvIHRoZSBnaXZlbiBzdHJ1Y3R1cmUsIGlmIGFueS5cbiAgICAgKiBJZiB0aGUgZ2l2ZW4gcGFnZSBzdHJ1Y3R1cmUgaXMgZW1wdHksIGEgcGFnZSBpcyBjcmVhdGVkIGFuZCB0aGUgcGFnZSBzbG90cyBhcmVcbiAgICAgKiBhcmUgbWVyZ2VkIGludG8gdGhlIHBhZ2UuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIG1lcmdlUGFnZShwYWdlSWQ6IHN0cmluZywgcGFnZVN0cnVjdHVyZTogQ21zU3RydWN0dXJlTW9kZWwpOiBPYnNlcnZhYmxlPENtc1N0cnVjdHVyZU1vZGVsPjtcbiAgICAvKipcbiAgICAgKiBBZGRzIGFueSBwcmUtY29uZmlndXJlZCBzbG90cyBmb3IgcGFnZXMgdGhhdCBkbyBub3QgdXNlIHRoZW0uXG4gICAgICogSWYgcGFnZXMgaGF2ZSBhIHNsb3QgZm9yIHRoZSBnaXZlbiBwb3NpdGlvbiwgdGhlIGNvbmZpZ2l1cmF0aW9uXG4gICAgICogaXMgaW5nb3JlZC4gRXZlbiBpZiB0aGUgc2xvdCBkb2VzIG5vdCBoYXZlIGlubmVyIHN0cnVjdHVyZSAoc3VjaCBhc1xuICAgICAqIGNvbXBvbmVudHMpLCBzbyB0aGF0IHRoZSBjbXMgc3RydWN0dXJlIGlzIGFibGUgdG8gb3ZlcnJpZGUgdGhlIChzdGF0aWMpXG4gICAgICogY29uZmlndXJhdGlvbi5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgbWVyZ2VTbG90cyhwYWdlU3RydWN0dXJlOiBDbXNTdHJ1Y3R1cmVNb2RlbCwgc2xvdHM/OiBDbXNQYWdlU2xvdHNDb25maWcpOiBPYnNlcnZhYmxlPENtc1N0cnVjdHVyZU1vZGVsPjtcbiAgICBwcm90ZWN0ZWQgZ2V0Q29tcG9uZW50c0J5UG9zaXRpb24oc2xvdHM6IENtc1BhZ2VTbG90c0NvbmZpZywgcG9zaXRpb246IHN0cmluZyk6IENvbnRlbnRTbG90Q29tcG9uZW50RGF0YVtdO1xuICAgIHByb3RlY3RlZCBnZXRDb21wb25lbnRCeUlkKGNvbXBvbmVudElkOiBzdHJpbmcpOiBDb250ZW50U2xvdENvbXBvbmVudERhdGE7XG59XG4iXX0=
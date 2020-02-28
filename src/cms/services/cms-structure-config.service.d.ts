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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CmsStructureConfigService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLXN0cnVjdHVyZS1jb25maWcuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJjbXMtc3RydWN0dXJlLWNvbmZpZy5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7O0FBYUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQStDQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDbXNQYWdlQ29uZmlnLCBDbXNQYWdlU2xvdHNDb25maWcsIENtc1N0cnVjdHVyZUNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9jbXMtc3RydWN0dXJlLmNvbmZpZyc7XG5pbXBvcnQgeyBDb250ZW50U2xvdENvbXBvbmVudERhdGEgfSBmcm9tICcuLi9tb2RlbC9jb250ZW50LXNsb3QtY29tcG9uZW50LWRhdGEubW9kZWwnO1xuaW1wb3J0IHsgQ21zU3RydWN0dXJlTW9kZWwgfSBmcm9tICcuLi9tb2RlbC9wYWdlLm1vZGVsJztcbi8qKlxuICogU2VydmljZSB0aGF0IHByb3ZpZGVzIGFjY2VzcyB0byBDTVMgc3RydWN0dXJlIGZyb20gYSBzdGF0aWNcbiAqIGNvbmZpZ3VyYXRpb24gb3IgY29uZmlndXJhdGlvbiBmaWxlLiBUaGlzIGNsYXNzIHVzZXMgc3RhdGljXG4gKiBjb25maWd1cmF0aW9uIGlzIGRlc2lnbmVkIGluIGFzeW5jIGZhc2hpb24gc28gdGhhdCBjb25maWd1cmF0aW9uc1xuICogY2FuIGJlIGxvYWRlZCBmcm9tIGEgZmlsZSBvciBzdHJlYW0uXG4gKlxuICogVGhlIGludGVudCBvZiB0aGUgYENtc1N0cnVjdHVyZUNvbmZpZ1NlcnZpY2VgIGhvd2V2ZXIgaXMgdG8gcHJvdmlkZVxuICogZmFzdCBsb2FkaW5nIHBhZ2VzIGFuZCBkZWZhdWx0IGNtcyBzdHJ1Y3R1cmUgZm9yIGNvbW1vZGl0eSBjb21tZXJjZS5cbiAqL1xuZXhwb3J0IGRlY2xhcmUgYWJzdHJhY3QgY2xhc3MgQ21zU3RydWN0dXJlQ29uZmlnU2VydmljZSB7XG4gICAgcHJvdGVjdGVkIGNtc0RhdGFDb25maWc6IENtc1N0cnVjdHVyZUNvbmZpZztcbiAgICBjb25zdHJ1Y3RvcihjbXNEYXRhQ29uZmlnOiBDbXNTdHJ1Y3R1cmVDb25maWcpO1xuICAgIC8qKlxuICAgICAqIE1lcmdlIHRoZSBjbXMgc3RydWN0dXJlIHRvIHRoZSBwYWdlU3RydWN0dXJlLiBUaGUgcGFnZSBzdHJ1Y3R1cmVcbiAgICAgKiBjYW4gZWl0aGVyIGhvbGQgY29tcGxldGUgcGFnZSBzdHJ1Y3R1cmVzIG9yIGdsb2JhbCBzdHJ1Y3R1cmVzIHRoYXRcbiAgICAgKiBtaWdodCBhcHBseSB0byBhbGwgcGFnZXMgKHN1Y2ggaGFzIGhlYWRlciBjb3BvbmVudHMpLlxuICAgICAqL1xuICAgIG1lcmdlUGFnZVN0cnVjdHVyZShwYWdlSWQ6IHN0cmluZywgcGFnZVN0cnVjdHVyZTogQ21zU3RydWN0dXJlTW9kZWwpOiBPYnNlcnZhYmxlPENtc1N0cnVjdHVyZU1vZGVsPjtcbiAgICAvKipcbiAgICAgKlxuICAgICAqIFJldHVybnMgYm9vbGVhbiBvYnNlcnZhYmxlIHRvIGluZGljYXRlIHdoZXRoZXIgdGhlIHBhZ2Ugc2hvdWxkIG5vdCBiZVxuICAgICAqIGxvYWRlZCBmcm9tIHRoZSBiYWNrZW5kLiBUaGlzIGlzIHVzZWZ1bCBmb3IgcGFnZXMgd2hpY2ggYXJlIGNvbW9kaXRpemVkXG4gICAgICogYW5kIGZvbGxvdyBiZXN0IHByYWN0aWNlLlxuICAgICAqXG4gICAgICogQnkgZGVmYXVsdCwgY29uZmlndXJhYmxlIHBhZ2VzIGFyZSBkcml2ZW4gYnkgc3RhdGljIGNvbmZpZ3VyYXRpb24sXG4gICAgICogaW4gb3JkZXIgdG8gYWxsb3cgZm9yIGZhc3QgbG9hZGluZyBwYWdlcyAocHJldmVudGluZyBuZXR3b3JrIGRlbGF5cykuXG4gICAgICovXG4gICAgc2hvdWxkSWdub3JlQmFja2VuZChwYWdlSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgLyoqXG4gICAgICogcmV0dXJucyBhbiBPYnNlcnZhYmxlIGNvbXBvbmVudCBkYXRhIGZyb20gdGhlIHN0YXRpYyBjb25maWd1cmF0aW9uLlxuICAgICAqL1xuICAgIGdldENvbXBvbmVudEZyb21Db25maWcoY29tcG9uZW50SWQ6IHN0cmluZyk6IE9ic2VydmFibGU8Q29udGVudFNsb3RDb21wb25lbnREYXRhIHwgYW55PjtcbiAgICAvKipcbiAgICAgKiByZXR1cm5zIGFuIE9ic2VydmFibGUgY29tcG9uZW50cyBkYXRhIGZyb20gdGhlIHN0YXRpYyBjb25maWd1cmF0aW9uLlxuICAgICAqL1xuICAgIGdldENvbXBvbmVudHNGcm9tQ29uZmlnKGlkczogc3RyaW5nW10pOiBPYnNlcnZhYmxlPENvbnRlbnRTbG90Q29tcG9uZW50RGF0YVtdPjtcbiAgICAvKipcbiAgICAgKiByZXR1cm5zIGFuIG9ic2VydmFibGUgd2l0aCB0aGUgYFBhZ2VDb25maWdgLlxuICAgICAqL1xuICAgIHByb3RlY3RlZCBnZXRQYWdlRnJvbUNvbmZpZyhwYWdlSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8Q21zUGFnZUNvbmZpZz47XG4gICAgLyoqXG4gICAgICogTWVyZ2UgcGFnZSBkYXRhIGZyb20gdGhlIGNvbmZpZ3VyYXRpb24gaW50byB0aGUgZ2l2ZW4gc3RydWN0dXJlLCBpZiBhbnkuXG4gICAgICogSWYgdGhlIGdpdmVuIHBhZ2Ugc3RydWN0dXJlIGlzIGVtcHR5LCBhIHBhZ2UgaXMgY3JlYXRlZCBhbmQgdGhlIHBhZ2Ugc2xvdHMgYXJlXG4gICAgICogYXJlIG1lcmdlZCBpbnRvIHRoZSBwYWdlLlxuICAgICAqL1xuICAgIHByb3RlY3RlZCBtZXJnZVBhZ2UocGFnZUlkOiBzdHJpbmcsIHBhZ2VTdHJ1Y3R1cmU6IENtc1N0cnVjdHVyZU1vZGVsKTogT2JzZXJ2YWJsZTxDbXNTdHJ1Y3R1cmVNb2RlbD47XG4gICAgLyoqXG4gICAgICogQWRkcyBhbnkgcHJlLWNvbmZpZ3VyZWQgc2xvdHMgZm9yIHBhZ2VzIHRoYXQgZG8gbm90IHVzZSB0aGVtLlxuICAgICAqIElmIHBhZ2VzIGhhdmUgYSBzbG90IGZvciB0aGUgZ2l2ZW4gcG9zaXRpb24sIHRoZSBjb25maWdpdXJhdGlvblxuICAgICAqIGlzIGluZ29yZWQuIEV2ZW4gaWYgdGhlIHNsb3QgZG9lcyBub3QgaGF2ZSBpbm5lciBzdHJ1Y3R1cmUgKHN1Y2ggYXNcbiAgICAgKiBjb21wb25lbnRzKSwgc28gdGhhdCB0aGUgY21zIHN0cnVjdHVyZSBpcyBhYmxlIHRvIG92ZXJyaWRlIHRoZSAoc3RhdGljKVxuICAgICAqIGNvbmZpZ3VyYXRpb24uXG4gICAgICovXG4gICAgcHJvdGVjdGVkIG1lcmdlU2xvdHMocGFnZVN0cnVjdHVyZTogQ21zU3RydWN0dXJlTW9kZWwsIHNsb3RzPzogQ21zUGFnZVNsb3RzQ29uZmlnKTogT2JzZXJ2YWJsZTxDbXNTdHJ1Y3R1cmVNb2RlbD47XG4gICAgcHJvdGVjdGVkIGdldENvbXBvbmVudHNCeVBvc2l0aW9uKHNsb3RzOiBDbXNQYWdlU2xvdHNDb25maWcsIHBvc2l0aW9uOiBzdHJpbmcpOiBDb250ZW50U2xvdENvbXBvbmVudERhdGFbXTtcbiAgICBwcm90ZWN0ZWQgZ2V0Q29tcG9uZW50QnlJZChjb21wb25lbnRJZDogc3RyaW5nKTogQ29udGVudFNsb3RDb21wb25lbnREYXRhO1xufVxuIl19
import { Observable } from 'rxjs';
import { CmsStructureConfig } from '../config/cms-structure.config';
import { ContentSlotComponentData } from '../model/content-slot-component-data.model';
import { CmsStructureModel } from '../model/page.model';
/**
 * Service that provides access to CMS structure from a static
 * configuration or configuration file. This class uses static
 * configuration is designed in async fashion so that configuratiosn
 * can be loaded from a file or stream.
 *
 * The intend of the `CmsStructureConfigService` however is to provide
 * fast loading pages and default cms structure for comodoty commerce.
 */
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
     * returns an Obserable component data from the static configuration.
     */
    getComponentFromConfig(componentId: string): Observable<ContentSlotComponentData | any>;
    /**
     * returns an observable with the `PageConfig`.
     */
    private getPageFromConfig;
    /**
     * Merge page data from the configuration into the given structure, if any.
     * If the given page structure is empty, a page is created and the page slots are
     * are merged into the page.
     */
    private mergePage;
    /**
     * Adds any pre-configured slots for pages that do not use them.
     * If pages have a slot for the given position, the configiuration
     * is ingored. Even if the slot does not have inner structure (such as
     * components), so that the cms structure is able to override the (static)
     * configuration.
     */
    private mergeSlots;
    private getComponentsByPosition;
}

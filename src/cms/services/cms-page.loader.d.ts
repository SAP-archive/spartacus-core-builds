import { Observable } from 'rxjs';
import { PageContext } from '../../routing/models/page-context.model';
import { CmsStructureModel } from '../model/page.model';
import { CmsPageAdapter } from './cms-page.adapter';
import { CmsStructureConfigService } from './cms-structure-config.service';
/**
 * Abstract class that can be used to implement custom loader logic
 * in order to load CMS structure from third-party CMS system.
 */
export declare abstract class CmsPageLoader<T> {
    protected cmsStructureConfigService: CmsStructureConfigService;
    protected adapter: CmsPageAdapter<T>;
    constructor(cmsStructureConfigService: CmsStructureConfigService, adapter: CmsPageAdapter<T>);
    /**
     * Abstract method must be used to load the page structure for a given `PageContext`.
     * The page can be loaded from alternative sources, as long as the structure
     * converts to the `CmsStructureModel`.
     *
     * @param pageContext The `PageContext` holding the page Id.
     */
    abstract load(pageContext: PageContext): Observable<T>;
    /**
     * Returns an observable with the page structure. The page structure is
     * typically loaded from a backend, but can also be returned from static
     * configuration (see `CmsStructureConfigService`).
     */
    get(pageContext: PageContext): Observable<CmsStructureModel>;
    /**
     *
     * An adapter can be injected to convert the backend reponse to
     * the UI model.
     *
     * @param page the source that can be converted
     */
    adapt(page: T): CmsStructureModel;
    /**
     *
     * Merge default page structure inot the given `CmsStructureModel`.
     * This is benefitial for a fast setup of the UI without necessary
     * finegrained CMS setup.
     */
    private mergeDefaultPageStructure;
}

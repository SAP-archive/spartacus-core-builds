import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ContentSlotData } from '../model/content-slot-data.model';
import { NodeItem } from '../model/node-item.model';
import { Page } from '../model/page.model';
import { StateWithCms } from '../store/cms-state';
import { CmsComponent } from '../../occ/occ-models/cms-component.models';
import { RoutingService } from '../../routing/facade/routing.service';
import { PageContext } from '../../routing/models/page-context.model';
export declare class CmsService {
    private store;
    private routingService;
    private _launchInSmartEdit;
    private components;
    constructor(store: Store<StateWithCms>, routingService: RoutingService);
    /**
     * Set _launchInSmartEdit value
     */
    launchInSmartEdit: boolean;
    /**
     * Whether the app launched in smart edit
     */
    isLaunchInSmartEdit(): boolean;
    /**
     * Get current CMS page data
     */
    getCurrentPage(): Observable<Page>;
    /**
     * Get CMS component data by uid
     * @param uid : CMS componet uid
     */
    getComponentData<T extends CmsComponent>(uid: string): Observable<T>;
    /**
     * Given the position, get the content slot data
     * @param position : content slot position
     */
    getContentSlot(position: string): Observable<ContentSlotData>;
    /**
     * Given navigation node uid, get items (with id and type) inside the navigation entries
     * @param navigationNodeUid : uid of the navigation node
     */
    getNavigationEntryItems(navigationNodeUid: string): Observable<NodeItem>;
    /**
     * Load navigation items data
     * @param rootUid : the uid of the root navigation node
     * @param itemList : list of items (with id and type)
     */
    loadNavigationItems(rootUid: string, itemList: {
        id: string;
        superType: string;
    }[]): void;
    /**
     * Refresh the content of the latest cms page
     */
    refreshLatestPage(): void;
    /**
     * Refresh cms component's content
     * @param uid : component uid
     */
    refreshComponent(uid: string): void;
    /**
     * Given pageContext, return the CMS page data
     * @param pageContext
     */
    getPageState(pageContext: PageContext): Observable<Page>;
    /**
     * Given pageContext, return the CMS page data
     * @param pageContext
     */
    getPageComponentTypes(pageContext: PageContext): Observable<string[]>;
    /**
     * Given pageContext, return whether the CMS page data exists or not
     * @param pageContext
     */
    hasPage(pageContext: PageContext): Observable<boolean>;
}

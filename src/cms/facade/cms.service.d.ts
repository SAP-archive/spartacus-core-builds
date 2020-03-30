import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CmsComponent } from '../../model/cms.model';
import { RoutingService } from '../../routing/facade/routing.service';
import { PageContext } from '../../routing/models/page-context.model';
import { ContentSlotData } from '../model/content-slot-data.model';
import { NodeItem } from '../model/node-item.model';
import { Page } from '../model/page.model';
import { StateWithCms } from '../store/cms-state';
import * as ɵngcc0 from '@angular/core';
export declare class CmsService {
    protected store: Store<StateWithCms>;
    protected routingService: RoutingService;
    private _launchInSmartEdit;
    private components;
    constructor(store: Store<StateWithCms>, routingService: RoutingService);
    /**
     * Set _launchInSmartEdit value
     */
    set launchInSmartEdit(value: boolean);
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
     *
     * This method can be safely and optimally used to load multiple components data at the same time.
     * Calling getComponentData multiple times for different components will always result in optimized
     * back-end request: all components requested at the same time (in one event loop) will be loaded in one network call.
     *
     * In case the component data is not present, the method will load it.
     * Otherwise, if the page context is not provided, the current page context from the router state will be used instead.
     *
     * @param uid CMS component uid
     * @param pageContext if provided, it will be used to lookup the component data.
     */
    getComponentData<T extends CmsComponent>(uid: string, pageContext?: PageContext): Observable<T>;
    private createComponentData;
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
     * Refresh the cms page content by page Id
     * @param pageId
     */
    refreshPageById(pageId: string): void;
    /**
     * Refresh cms component's content
     * @param uid component uid
     * @param pageContext an optional parameter that enables the caller to specify for which context the component should be refreshed.
     * If not specified, 'current' page context is used.
     */
    refreshComponent(uid: string, pageContext?: PageContext): void;
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
    hasPage(pageContext: PageContext, forceReload?: boolean): Observable<boolean>;
    /**
     * Given pageContext, return the CMS page data
     **/
    getPage(pageContext: PageContext, forceReload?: boolean): Observable<Page>;
    getPageIndex(pageContext: PageContext): Observable<string>;
    setPageFailIndex(pageContext: PageContext, value: string): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CmsService, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsiY21zLnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQVNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5RkEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENtc0NvbXBvbmVudCB9IGZyb20gJy4uLy4uL21vZGVsL2Ntcy5tb2RlbCc7XG5pbXBvcnQgeyBSb3V0aW5nU2VydmljZSB9IGZyb20gJy4uLy4uL3JvdXRpbmcvZmFjYWRlL3JvdXRpbmcuc2VydmljZSc7XG5pbXBvcnQgeyBQYWdlQ29udGV4dCB9IGZyb20gJy4uLy4uL3JvdXRpbmcvbW9kZWxzL3BhZ2UtY29udGV4dC5tb2RlbCc7XG5pbXBvcnQgeyBDb250ZW50U2xvdERhdGEgfSBmcm9tICcuLi9tb2RlbC9jb250ZW50LXNsb3QtZGF0YS5tb2RlbCc7XG5pbXBvcnQgeyBOb2RlSXRlbSB9IGZyb20gJy4uL21vZGVsL25vZGUtaXRlbS5tb2RlbCc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAnLi4vbW9kZWwvcGFnZS5tb2RlbCc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhDbXMgfSBmcm9tICcuLi9zdG9yZS9jbXMtc3RhdGUnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ21zU2VydmljZSB7XG4gICAgcHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhDbXM+O1xuICAgIHByb3RlY3RlZCByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2U7XG4gICAgcHJpdmF0ZSBfbGF1bmNoSW5TbWFydEVkaXQ7XG4gICAgcHJpdmF0ZSBjb21wb25lbnRzO1xuICAgIGNvbnN0cnVjdG9yKHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhDbXM+LCByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UpO1xuICAgIC8qKlxuICAgICAqIFNldCBfbGF1bmNoSW5TbWFydEVkaXQgdmFsdWVcbiAgICAgKi9cbiAgICBzZXQgbGF1bmNoSW5TbWFydEVkaXQodmFsdWU6IGJvb2xlYW4pO1xuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgdGhlIGFwcCBsYXVuY2hlZCBpbiBzbWFydCBlZGl0XG4gICAgICovXG4gICAgaXNMYXVuY2hJblNtYXJ0RWRpdCgpOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEdldCBjdXJyZW50IENNUyBwYWdlIGRhdGFcbiAgICAgKi9cbiAgICBnZXRDdXJyZW50UGFnZSgpOiBPYnNlcnZhYmxlPFBhZ2U+O1xuICAgIC8qKlxuICAgICAqIEdldCBDTVMgY29tcG9uZW50IGRhdGEgYnkgdWlkXG4gICAgICpcbiAgICAgKiBUaGlzIG1ldGhvZCBjYW4gYmUgc2FmZWx5IGFuZCBvcHRpbWFsbHkgdXNlZCB0byBsb2FkIG11bHRpcGxlIGNvbXBvbmVudHMgZGF0YSBhdCB0aGUgc2FtZSB0aW1lLlxuICAgICAqIENhbGxpbmcgZ2V0Q29tcG9uZW50RGF0YSBtdWx0aXBsZSB0aW1lcyBmb3IgZGlmZmVyZW50IGNvbXBvbmVudHMgd2lsbCBhbHdheXMgcmVzdWx0IGluIG9wdGltaXplZFxuICAgICAqIGJhY2stZW5kIHJlcXVlc3Q6IGFsbCBjb21wb25lbnRzIHJlcXVlc3RlZCBhdCB0aGUgc2FtZSB0aW1lIChpbiBvbmUgZXZlbnQgbG9vcCkgd2lsbCBiZSBsb2FkZWQgaW4gb25lIG5ldHdvcmsgY2FsbC5cbiAgICAgKlxuICAgICAqIEluIGNhc2UgdGhlIGNvbXBvbmVudCBkYXRhIGlzIG5vdCBwcmVzZW50LCB0aGUgbWV0aG9kIHdpbGwgbG9hZCBpdC5cbiAgICAgKiBPdGhlcndpc2UsIGlmIHRoZSBwYWdlIGNvbnRleHQgaXMgbm90IHByb3ZpZGVkLCB0aGUgY3VycmVudCBwYWdlIGNvbnRleHQgZnJvbSB0aGUgcm91dGVyIHN0YXRlIHdpbGwgYmUgdXNlZCBpbnN0ZWFkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHVpZCBDTVMgY29tcG9uZW50IHVpZFxuICAgICAqIEBwYXJhbSBwYWdlQ29udGV4dCBpZiBwcm92aWRlZCwgaXQgd2lsbCBiZSB1c2VkIHRvIGxvb2t1cCB0aGUgY29tcG9uZW50IGRhdGEuXG4gICAgICovXG4gICAgZ2V0Q29tcG9uZW50RGF0YTxUIGV4dGVuZHMgQ21zQ29tcG9uZW50Pih1aWQ6IHN0cmluZywgcGFnZUNvbnRleHQ/OiBQYWdlQ29udGV4dCk6IE9ic2VydmFibGU8VD47XG4gICAgcHJpdmF0ZSBjcmVhdGVDb21wb25lbnREYXRhO1xuICAgIC8qKlxuICAgICAqIEdpdmVuIHRoZSBwb3NpdGlvbiwgZ2V0IHRoZSBjb250ZW50IHNsb3QgZGF0YVxuICAgICAqIEBwYXJhbSBwb3NpdGlvbiA6IGNvbnRlbnQgc2xvdCBwb3NpdGlvblxuICAgICAqL1xuICAgIGdldENvbnRlbnRTbG90KHBvc2l0aW9uOiBzdHJpbmcpOiBPYnNlcnZhYmxlPENvbnRlbnRTbG90RGF0YT47XG4gICAgLyoqXG4gICAgICogR2l2ZW4gbmF2aWdhdGlvbiBub2RlIHVpZCwgZ2V0IGl0ZW1zICh3aXRoIGlkIGFuZCB0eXBlKSBpbnNpZGUgdGhlIG5hdmlnYXRpb24gZW50cmllc1xuICAgICAqIEBwYXJhbSBuYXZpZ2F0aW9uTm9kZVVpZCA6IHVpZCBvZiB0aGUgbmF2aWdhdGlvbiBub2RlXG4gICAgICovXG4gICAgZ2V0TmF2aWdhdGlvbkVudHJ5SXRlbXMobmF2aWdhdGlvbk5vZGVVaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8Tm9kZUl0ZW0+O1xuICAgIC8qKlxuICAgICAqIExvYWQgbmF2aWdhdGlvbiBpdGVtcyBkYXRhXG4gICAgICogQHBhcmFtIHJvb3RVaWQgOiB0aGUgdWlkIG9mIHRoZSByb290IG5hdmlnYXRpb24gbm9kZVxuICAgICAqIEBwYXJhbSBpdGVtTGlzdCA6IGxpc3Qgb2YgaXRlbXMgKHdpdGggaWQgYW5kIHR5cGUpXG4gICAgICovXG4gICAgbG9hZE5hdmlnYXRpb25JdGVtcyhyb290VWlkOiBzdHJpbmcsIGl0ZW1MaXN0OiB7XG4gICAgICAgIGlkOiBzdHJpbmc7XG4gICAgICAgIHN1cGVyVHlwZTogc3RyaW5nO1xuICAgIH1bXSk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogUmVmcmVzaCB0aGUgY29udGVudCBvZiB0aGUgbGF0ZXN0IGNtcyBwYWdlXG4gICAgICovXG4gICAgcmVmcmVzaExhdGVzdFBhZ2UoKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBSZWZyZXNoIHRoZSBjbXMgcGFnZSBjb250ZW50IGJ5IHBhZ2UgSWRcbiAgICAgKiBAcGFyYW0gcGFnZUlkXG4gICAgICovXG4gICAgcmVmcmVzaFBhZ2VCeUlkKHBhZ2VJZDogc3RyaW5nKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBSZWZyZXNoIGNtcyBjb21wb25lbnQncyBjb250ZW50XG4gICAgICogQHBhcmFtIHVpZCBjb21wb25lbnQgdWlkXG4gICAgICogQHBhcmFtIHBhZ2VDb250ZXh0IGFuIG9wdGlvbmFsIHBhcmFtZXRlciB0aGF0IGVuYWJsZXMgdGhlIGNhbGxlciB0byBzcGVjaWZ5IGZvciB3aGljaCBjb250ZXh0IHRoZSBjb21wb25lbnQgc2hvdWxkIGJlIHJlZnJlc2hlZC5cbiAgICAgKiBJZiBub3Qgc3BlY2lmaWVkLCAnY3VycmVudCcgcGFnZSBjb250ZXh0IGlzIHVzZWQuXG4gICAgICovXG4gICAgcmVmcmVzaENvbXBvbmVudCh1aWQ6IHN0cmluZywgcGFnZUNvbnRleHQ/OiBQYWdlQ29udGV4dCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogR2l2ZW4gcGFnZUNvbnRleHQsIHJldHVybiB0aGUgQ01TIHBhZ2UgZGF0YVxuICAgICAqIEBwYXJhbSBwYWdlQ29udGV4dFxuICAgICAqL1xuICAgIGdldFBhZ2VTdGF0ZShwYWdlQ29udGV4dDogUGFnZUNvbnRleHQpOiBPYnNlcnZhYmxlPFBhZ2U+O1xuICAgIC8qKlxuICAgICAqIEdpdmVuIHBhZ2VDb250ZXh0LCByZXR1cm4gdGhlIENNUyBwYWdlIGRhdGFcbiAgICAgKiBAcGFyYW0gcGFnZUNvbnRleHRcbiAgICAgKi9cbiAgICBnZXRQYWdlQ29tcG9uZW50VHlwZXMocGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0KTogT2JzZXJ2YWJsZTxzdHJpbmdbXT47XG4gICAgLyoqXG4gICAgICogR2l2ZW4gcGFnZUNvbnRleHQsIHJldHVybiB3aGV0aGVyIHRoZSBDTVMgcGFnZSBkYXRhIGV4aXN0cyBvciBub3RcbiAgICAgKiBAcGFyYW0gcGFnZUNvbnRleHRcbiAgICAgKi9cbiAgICBoYXNQYWdlKHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCwgZm9yY2VSZWxvYWQ/OiBib29sZWFuKTogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICAvKipcbiAgICAgKiBHaXZlbiBwYWdlQ29udGV4dCwgcmV0dXJuIHRoZSBDTVMgcGFnZSBkYXRhXG4gICAgICoqL1xuICAgIGdldFBhZ2UocGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0LCBmb3JjZVJlbG9hZD86IGJvb2xlYW4pOiBPYnNlcnZhYmxlPFBhZ2U+O1xuICAgIGdldFBhZ2VJbmRleChwYWdlQ29udGV4dDogUGFnZUNvbnRleHQpOiBPYnNlcnZhYmxlPHN0cmluZz47XG4gICAgc2V0UGFnZUZhaWxJbmRleChwYWdlQ29udGV4dDogUGFnZUNvbnRleHQsIHZhbHVlOiBzdHJpbmcpOiB2b2lkO1xufVxuIl19
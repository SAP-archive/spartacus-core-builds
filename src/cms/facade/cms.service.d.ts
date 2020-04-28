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
    private components;
    constructor(store: Store<StateWithCms>, routingService: RoutingService);
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
    getComponentData<T extends CmsComponent | null>(uid: string, pageContext?: PageContext): Observable<T>;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsiY21zLnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQVNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnRkEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENtc0NvbXBvbmVudCB9IGZyb20gJy4uLy4uL21vZGVsL2Ntcy5tb2RlbCc7XG5pbXBvcnQgeyBSb3V0aW5nU2VydmljZSB9IGZyb20gJy4uLy4uL3JvdXRpbmcvZmFjYWRlL3JvdXRpbmcuc2VydmljZSc7XG5pbXBvcnQgeyBQYWdlQ29udGV4dCB9IGZyb20gJy4uLy4uL3JvdXRpbmcvbW9kZWxzL3BhZ2UtY29udGV4dC5tb2RlbCc7XG5pbXBvcnQgeyBDb250ZW50U2xvdERhdGEgfSBmcm9tICcuLi9tb2RlbC9jb250ZW50LXNsb3QtZGF0YS5tb2RlbCc7XG5pbXBvcnQgeyBOb2RlSXRlbSB9IGZyb20gJy4uL21vZGVsL25vZGUtaXRlbS5tb2RlbCc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAnLi4vbW9kZWwvcGFnZS5tb2RlbCc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhDbXMgfSBmcm9tICcuLi9zdG9yZS9jbXMtc3RhdGUnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ21zU2VydmljZSB7XG4gICAgcHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhDbXM+O1xuICAgIHByb3RlY3RlZCByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2U7XG4gICAgcHJpdmF0ZSBjb21wb25lbnRzO1xuICAgIGNvbnN0cnVjdG9yKHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhDbXM+LCByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UpO1xuICAgIC8qKlxuICAgICAqIEdldCBjdXJyZW50IENNUyBwYWdlIGRhdGFcbiAgICAgKi9cbiAgICBnZXRDdXJyZW50UGFnZSgpOiBPYnNlcnZhYmxlPFBhZ2U+O1xuICAgIC8qKlxuICAgICAqIEdldCBDTVMgY29tcG9uZW50IGRhdGEgYnkgdWlkXG4gICAgICpcbiAgICAgKiBUaGlzIG1ldGhvZCBjYW4gYmUgc2FmZWx5IGFuZCBvcHRpbWFsbHkgdXNlZCB0byBsb2FkIG11bHRpcGxlIGNvbXBvbmVudHMgZGF0YSBhdCB0aGUgc2FtZSB0aW1lLlxuICAgICAqIENhbGxpbmcgZ2V0Q29tcG9uZW50RGF0YSBtdWx0aXBsZSB0aW1lcyBmb3IgZGlmZmVyZW50IGNvbXBvbmVudHMgd2lsbCBhbHdheXMgcmVzdWx0IGluIG9wdGltaXplZFxuICAgICAqIGJhY2stZW5kIHJlcXVlc3Q6IGFsbCBjb21wb25lbnRzIHJlcXVlc3RlZCBhdCB0aGUgc2FtZSB0aW1lIChpbiBvbmUgZXZlbnQgbG9vcCkgd2lsbCBiZSBsb2FkZWQgaW4gb25lIG5ldHdvcmsgY2FsbC5cbiAgICAgKlxuICAgICAqIEluIGNhc2UgdGhlIGNvbXBvbmVudCBkYXRhIGlzIG5vdCBwcmVzZW50LCB0aGUgbWV0aG9kIHdpbGwgbG9hZCBpdC5cbiAgICAgKiBPdGhlcndpc2UsIGlmIHRoZSBwYWdlIGNvbnRleHQgaXMgbm90IHByb3ZpZGVkLCB0aGUgY3VycmVudCBwYWdlIGNvbnRleHQgZnJvbSB0aGUgcm91dGVyIHN0YXRlIHdpbGwgYmUgdXNlZCBpbnN0ZWFkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHVpZCBDTVMgY29tcG9uZW50IHVpZFxuICAgICAqIEBwYXJhbSBwYWdlQ29udGV4dCBpZiBwcm92aWRlZCwgaXQgd2lsbCBiZSB1c2VkIHRvIGxvb2t1cCB0aGUgY29tcG9uZW50IGRhdGEuXG4gICAgICovXG4gICAgZ2V0Q29tcG9uZW50RGF0YTxUIGV4dGVuZHMgQ21zQ29tcG9uZW50IHwgbnVsbD4odWlkOiBzdHJpbmcsIHBhZ2VDb250ZXh0PzogUGFnZUNvbnRleHQpOiBPYnNlcnZhYmxlPFQ+O1xuICAgIHByaXZhdGUgY3JlYXRlQ29tcG9uZW50RGF0YTtcbiAgICAvKipcbiAgICAgKiBHaXZlbiB0aGUgcG9zaXRpb24sIGdldCB0aGUgY29udGVudCBzbG90IGRhdGFcbiAgICAgKiBAcGFyYW0gcG9zaXRpb24gOiBjb250ZW50IHNsb3QgcG9zaXRpb25cbiAgICAgKi9cbiAgICBnZXRDb250ZW50U2xvdChwb3NpdGlvbjogc3RyaW5nKTogT2JzZXJ2YWJsZTxDb250ZW50U2xvdERhdGE+O1xuICAgIC8qKlxuICAgICAqIEdpdmVuIG5hdmlnYXRpb24gbm9kZSB1aWQsIGdldCBpdGVtcyAod2l0aCBpZCBhbmQgdHlwZSkgaW5zaWRlIHRoZSBuYXZpZ2F0aW9uIGVudHJpZXNcbiAgICAgKiBAcGFyYW0gbmF2aWdhdGlvbk5vZGVVaWQgOiB1aWQgb2YgdGhlIG5hdmlnYXRpb24gbm9kZVxuICAgICAqL1xuICAgIGdldE5hdmlnYXRpb25FbnRyeUl0ZW1zKG5hdmlnYXRpb25Ob2RlVWlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPE5vZGVJdGVtPjtcbiAgICAvKipcbiAgICAgKiBMb2FkIG5hdmlnYXRpb24gaXRlbXMgZGF0YVxuICAgICAqIEBwYXJhbSByb290VWlkIDogdGhlIHVpZCBvZiB0aGUgcm9vdCBuYXZpZ2F0aW9uIG5vZGVcbiAgICAgKiBAcGFyYW0gaXRlbUxpc3QgOiBsaXN0IG9mIGl0ZW1zICh3aXRoIGlkIGFuZCB0eXBlKVxuICAgICAqL1xuICAgIGxvYWROYXZpZ2F0aW9uSXRlbXMocm9vdFVpZDogc3RyaW5nLCBpdGVtTGlzdDoge1xuICAgICAgICBpZDogc3RyaW5nO1xuICAgICAgICBzdXBlclR5cGU6IHN0cmluZztcbiAgICB9W10pOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFJlZnJlc2ggdGhlIGNvbnRlbnQgb2YgdGhlIGxhdGVzdCBjbXMgcGFnZVxuICAgICAqL1xuICAgIHJlZnJlc2hMYXRlc3RQYWdlKCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogUmVmcmVzaCB0aGUgY21zIHBhZ2UgY29udGVudCBieSBwYWdlIElkXG4gICAgICogQHBhcmFtIHBhZ2VJZFxuICAgICAqL1xuICAgIHJlZnJlc2hQYWdlQnlJZChwYWdlSWQ6IHN0cmluZyk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogUmVmcmVzaCBjbXMgY29tcG9uZW50J3MgY29udGVudFxuICAgICAqIEBwYXJhbSB1aWQgY29tcG9uZW50IHVpZFxuICAgICAqIEBwYXJhbSBwYWdlQ29udGV4dCBhbiBvcHRpb25hbCBwYXJhbWV0ZXIgdGhhdCBlbmFibGVzIHRoZSBjYWxsZXIgdG8gc3BlY2lmeSBmb3Igd2hpY2ggY29udGV4dCB0aGUgY29tcG9uZW50IHNob3VsZCBiZSByZWZyZXNoZWQuXG4gICAgICogSWYgbm90IHNwZWNpZmllZCwgJ2N1cnJlbnQnIHBhZ2UgY29udGV4dCBpcyB1c2VkLlxuICAgICAqL1xuICAgIHJlZnJlc2hDb21wb25lbnQodWlkOiBzdHJpbmcsIHBhZ2VDb250ZXh0PzogUGFnZUNvbnRleHQpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIEdpdmVuIHBhZ2VDb250ZXh0LCByZXR1cm4gdGhlIENNUyBwYWdlIGRhdGFcbiAgICAgKiBAcGFyYW0gcGFnZUNvbnRleHRcbiAgICAgKi9cbiAgICBnZXRQYWdlU3RhdGUocGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0KTogT2JzZXJ2YWJsZTxQYWdlPjtcbiAgICAvKipcbiAgICAgKiBHaXZlbiBwYWdlQ29udGV4dCwgcmV0dXJuIHRoZSBDTVMgcGFnZSBkYXRhXG4gICAgICogQHBhcmFtIHBhZ2VDb250ZXh0XG4gICAgICovXG4gICAgZ2V0UGFnZUNvbXBvbmVudFR5cGVzKHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCk6IE9ic2VydmFibGU8c3RyaW5nW10+O1xuICAgIC8qKlxuICAgICAqIEdpdmVuIHBhZ2VDb250ZXh0LCByZXR1cm4gd2hldGhlciB0aGUgQ01TIHBhZ2UgZGF0YSBleGlzdHMgb3Igbm90XG4gICAgICogQHBhcmFtIHBhZ2VDb250ZXh0XG4gICAgICovXG4gICAgaGFzUGFnZShwYWdlQ29udGV4dDogUGFnZUNvbnRleHQsIGZvcmNlUmVsb2FkPzogYm9vbGVhbik6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgLyoqXG4gICAgICogR2l2ZW4gcGFnZUNvbnRleHQsIHJldHVybiB0aGUgQ01TIHBhZ2UgZGF0YVxuICAgICAqKi9cbiAgICBnZXRQYWdlKHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCwgZm9yY2VSZWxvYWQ/OiBib29sZWFuKTogT2JzZXJ2YWJsZTxQYWdlPjtcbiAgICBnZXRQYWdlSW5kZXgocGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0KTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuICAgIHNldFBhZ2VGYWlsSW5kZXgocGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0LCB2YWx1ZTogc3RyaW5nKTogdm9pZDtcbn1cbiJdfQ==
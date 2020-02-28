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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CmsService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsiY21zLnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQVNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5RkE7Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnQgfSBmcm9tICcuLi8uLi9tb2RlbC9jbXMubW9kZWwnO1xuaW1wb3J0IHsgUm91dGluZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9yb3V0aW5nL2ZhY2FkZS9yb3V0aW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGFnZUNvbnRleHQgfSBmcm9tICcuLi8uLi9yb3V0aW5nL21vZGVscy9wYWdlLWNvbnRleHQubW9kZWwnO1xuaW1wb3J0IHsgQ29udGVudFNsb3REYXRhIH0gZnJvbSAnLi4vbW9kZWwvY29udGVudC1zbG90LWRhdGEubW9kZWwnO1xuaW1wb3J0IHsgTm9kZUl0ZW0gfSBmcm9tICcuLi9tb2RlbC9ub2RlLWl0ZW0ubW9kZWwnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJy4uL21vZGVsL3BhZ2UubW9kZWwnO1xuaW1wb3J0IHsgU3RhdGVXaXRoQ21zIH0gZnJvbSAnLi4vc3RvcmUvY21zLXN0YXRlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENtc1NlcnZpY2Uge1xuICAgIHByb3RlY3RlZCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoQ21zPjtcbiAgICBwcm90ZWN0ZWQgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlO1xuICAgIHByaXZhdGUgX2xhdW5jaEluU21hcnRFZGl0O1xuICAgIHByaXZhdGUgY29tcG9uZW50cztcbiAgICBjb25zdHJ1Y3RvcihzdG9yZTogU3RvcmU8U3RhdGVXaXRoQ21zPiwgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlKTtcbiAgICAvKipcbiAgICAgKiBTZXQgX2xhdW5jaEluU21hcnRFZGl0IHZhbHVlXG4gICAgICovXG4gICAgc2V0IGxhdW5jaEluU21hcnRFZGl0KHZhbHVlOiBib29sZWFuKTtcbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIHRoZSBhcHAgbGF1bmNoZWQgaW4gc21hcnQgZWRpdFxuICAgICAqL1xuICAgIGlzTGF1bmNoSW5TbWFydEVkaXQoKTogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBHZXQgY3VycmVudCBDTVMgcGFnZSBkYXRhXG4gICAgICovXG4gICAgZ2V0Q3VycmVudFBhZ2UoKTogT2JzZXJ2YWJsZTxQYWdlPjtcbiAgICAvKipcbiAgICAgKiBHZXQgQ01TIGNvbXBvbmVudCBkYXRhIGJ5IHVpZFxuICAgICAqXG4gICAgICogVGhpcyBtZXRob2QgY2FuIGJlIHNhZmVseSBhbmQgb3B0aW1hbGx5IHVzZWQgdG8gbG9hZCBtdWx0aXBsZSBjb21wb25lbnRzIGRhdGEgYXQgdGhlIHNhbWUgdGltZS5cbiAgICAgKiBDYWxsaW5nIGdldENvbXBvbmVudERhdGEgbXVsdGlwbGUgdGltZXMgZm9yIGRpZmZlcmVudCBjb21wb25lbnRzIHdpbGwgYWx3YXlzIHJlc3VsdCBpbiBvcHRpbWl6ZWRcbiAgICAgKiBiYWNrLWVuZCByZXF1ZXN0OiBhbGwgY29tcG9uZW50cyByZXF1ZXN0ZWQgYXQgdGhlIHNhbWUgdGltZSAoaW4gb25lIGV2ZW50IGxvb3ApIHdpbGwgYmUgbG9hZGVkIGluIG9uZSBuZXR3b3JrIGNhbGwuXG4gICAgICpcbiAgICAgKiBJbiBjYXNlIHRoZSBjb21wb25lbnQgZGF0YSBpcyBub3QgcHJlc2VudCwgdGhlIG1ldGhvZCB3aWxsIGxvYWQgaXQuXG4gICAgICogT3RoZXJ3aXNlLCBpZiB0aGUgcGFnZSBjb250ZXh0IGlzIG5vdCBwcm92aWRlZCwgdGhlIGN1cnJlbnQgcGFnZSBjb250ZXh0IGZyb20gdGhlIHJvdXRlciBzdGF0ZSB3aWxsIGJlIHVzZWQgaW5zdGVhZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB1aWQgQ01TIGNvbXBvbmVudCB1aWRcbiAgICAgKiBAcGFyYW0gcGFnZUNvbnRleHQgaWYgcHJvdmlkZWQsIGl0IHdpbGwgYmUgdXNlZCB0byBsb29rdXAgdGhlIGNvbXBvbmVudCBkYXRhLlxuICAgICAqL1xuICAgIGdldENvbXBvbmVudERhdGE8VCBleHRlbmRzIENtc0NvbXBvbmVudD4odWlkOiBzdHJpbmcsIHBhZ2VDb250ZXh0PzogUGFnZUNvbnRleHQpOiBPYnNlcnZhYmxlPFQ+O1xuICAgIHByaXZhdGUgY3JlYXRlQ29tcG9uZW50RGF0YTtcbiAgICAvKipcbiAgICAgKiBHaXZlbiB0aGUgcG9zaXRpb24sIGdldCB0aGUgY29udGVudCBzbG90IGRhdGFcbiAgICAgKiBAcGFyYW0gcG9zaXRpb24gOiBjb250ZW50IHNsb3QgcG9zaXRpb25cbiAgICAgKi9cbiAgICBnZXRDb250ZW50U2xvdChwb3NpdGlvbjogc3RyaW5nKTogT2JzZXJ2YWJsZTxDb250ZW50U2xvdERhdGE+O1xuICAgIC8qKlxuICAgICAqIEdpdmVuIG5hdmlnYXRpb24gbm9kZSB1aWQsIGdldCBpdGVtcyAod2l0aCBpZCBhbmQgdHlwZSkgaW5zaWRlIHRoZSBuYXZpZ2F0aW9uIGVudHJpZXNcbiAgICAgKiBAcGFyYW0gbmF2aWdhdGlvbk5vZGVVaWQgOiB1aWQgb2YgdGhlIG5hdmlnYXRpb24gbm9kZVxuICAgICAqL1xuICAgIGdldE5hdmlnYXRpb25FbnRyeUl0ZW1zKG5hdmlnYXRpb25Ob2RlVWlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPE5vZGVJdGVtPjtcbiAgICAvKipcbiAgICAgKiBMb2FkIG5hdmlnYXRpb24gaXRlbXMgZGF0YVxuICAgICAqIEBwYXJhbSByb290VWlkIDogdGhlIHVpZCBvZiB0aGUgcm9vdCBuYXZpZ2F0aW9uIG5vZGVcbiAgICAgKiBAcGFyYW0gaXRlbUxpc3QgOiBsaXN0IG9mIGl0ZW1zICh3aXRoIGlkIGFuZCB0eXBlKVxuICAgICAqL1xuICAgIGxvYWROYXZpZ2F0aW9uSXRlbXMocm9vdFVpZDogc3RyaW5nLCBpdGVtTGlzdDoge1xuICAgICAgICBpZDogc3RyaW5nO1xuICAgICAgICBzdXBlclR5cGU6IHN0cmluZztcbiAgICB9W10pOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFJlZnJlc2ggdGhlIGNvbnRlbnQgb2YgdGhlIGxhdGVzdCBjbXMgcGFnZVxuICAgICAqL1xuICAgIHJlZnJlc2hMYXRlc3RQYWdlKCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogUmVmcmVzaCB0aGUgY21zIHBhZ2UgY29udGVudCBieSBwYWdlIElkXG4gICAgICogQHBhcmFtIHBhZ2VJZFxuICAgICAqL1xuICAgIHJlZnJlc2hQYWdlQnlJZChwYWdlSWQ6IHN0cmluZyk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogUmVmcmVzaCBjbXMgY29tcG9uZW50J3MgY29udGVudFxuICAgICAqIEBwYXJhbSB1aWQgY29tcG9uZW50IHVpZFxuICAgICAqIEBwYXJhbSBwYWdlQ29udGV4dCBhbiBvcHRpb25hbCBwYXJhbWV0ZXIgdGhhdCBlbmFibGVzIHRoZSBjYWxsZXIgdG8gc3BlY2lmeSBmb3Igd2hpY2ggY29udGV4dCB0aGUgY29tcG9uZW50IHNob3VsZCBiZSByZWZyZXNoZWQuXG4gICAgICogSWYgbm90IHNwZWNpZmllZCwgJ2N1cnJlbnQnIHBhZ2UgY29udGV4dCBpcyB1c2VkLlxuICAgICAqL1xuICAgIHJlZnJlc2hDb21wb25lbnQodWlkOiBzdHJpbmcsIHBhZ2VDb250ZXh0PzogUGFnZUNvbnRleHQpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIEdpdmVuIHBhZ2VDb250ZXh0LCByZXR1cm4gdGhlIENNUyBwYWdlIGRhdGFcbiAgICAgKiBAcGFyYW0gcGFnZUNvbnRleHRcbiAgICAgKi9cbiAgICBnZXRQYWdlU3RhdGUocGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0KTogT2JzZXJ2YWJsZTxQYWdlPjtcbiAgICAvKipcbiAgICAgKiBHaXZlbiBwYWdlQ29udGV4dCwgcmV0dXJuIHRoZSBDTVMgcGFnZSBkYXRhXG4gICAgICogQHBhcmFtIHBhZ2VDb250ZXh0XG4gICAgICovXG4gICAgZ2V0UGFnZUNvbXBvbmVudFR5cGVzKHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCk6IE9ic2VydmFibGU8c3RyaW5nW10+O1xuICAgIC8qKlxuICAgICAqIEdpdmVuIHBhZ2VDb250ZXh0LCByZXR1cm4gd2hldGhlciB0aGUgQ01TIHBhZ2UgZGF0YSBleGlzdHMgb3Igbm90XG4gICAgICogQHBhcmFtIHBhZ2VDb250ZXh0XG4gICAgICovXG4gICAgaGFzUGFnZShwYWdlQ29udGV4dDogUGFnZUNvbnRleHQsIGZvcmNlUmVsb2FkPzogYm9vbGVhbik6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgLyoqXG4gICAgICogR2l2ZW4gcGFnZUNvbnRleHQsIHJldHVybiB0aGUgQ01TIHBhZ2UgZGF0YVxuICAgICAqKi9cbiAgICBnZXRQYWdlKHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCwgZm9yY2VSZWxvYWQ/OiBib29sZWFuKTogT2JzZXJ2YWJsZTxQYWdlPjtcbiAgICBnZXRQYWdlSW5kZXgocGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0KTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuICAgIHNldFBhZ2VGYWlsSW5kZXgocGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0LCB2YWx1ZTogc3RyaW5nKTogdm9pZDtcbn1cbiJdfQ==
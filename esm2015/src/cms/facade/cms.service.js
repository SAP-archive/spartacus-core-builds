import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { combineLatest, of, queueScheduler, using } from 'rxjs';
import { catchError, filter, observeOn, pluck, shareReplay, switchMap, take, tap, } from 'rxjs/operators';
import { RoutingService } from '../../routing/facade/routing.service';
import { CmsActions } from '../store/actions/index';
import { CmsSelectors } from '../store/selectors/index';
import { serializePageContext } from '../utils/cms-utils';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
import * as i2 from "../../routing/facade/routing.service";
let CmsService = class CmsService {
    constructor(store, routingService) {
        this.store = store;
        this.routingService = routingService;
        this._launchInSmartEdit = false;
        this.components = {};
    }
    /**
     * Set _launchInSmartEdit value
     */
    set launchInSmartEdit(value) {
        this._launchInSmartEdit = value;
    }
    /**
     * Whether the app launched in smart edit
     */
    isLaunchInSmartEdit() {
        return this._launchInSmartEdit;
    }
    /**
     * Get current CMS page data
     */
    getCurrentPage() {
        return this.routingService
            .getPageContext()
            .pipe(switchMap(pageContext => this.store.select(CmsSelectors.getPageData(pageContext))));
    }
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
    getComponentData(uid, pageContext) {
        const context = serializePageContext(pageContext, true);
        if (!this.components[uid]) {
            // create the component data structure, if it doesn't already exist
            this.components[uid] = {};
        }
        const component = this.components[uid];
        if (!component[context]) {
            // create the component data and assign it to the component's context
            component[context] = this.createComponentData(uid, pageContext);
        }
        return component[context];
    }
    createComponentData(uid, pageContext) {
        if (!pageContext) {
            return this.routingService.getPageContext().pipe(filter(currentContext => !!currentContext), switchMap(currentContext => this.getComponentData(uid, currentContext)));
        }
        const context = serializePageContext(pageContext, true);
        const loading$ = combineLatest([
            this.routingService.getNextPageContext(),
            this.store.pipe(select(CmsSelectors.componentsLoaderStateSelectorFactory(uid, context))),
        ]).pipe(observeOn(queueScheduler), tap(([nextContext, loadingState]) => {
            const attemptedLoad = loadingState.loading || loadingState.success || loadingState.error;
            // if the requested context is the same as the one that's currently being navigated to
            // (as it might already been triggered and might be available shortly from page data)
            // TODO(issue:3649), TODO(issue:3668) - this optimization could be removed
            const couldBeLoadedWithPageData = nextContext
                ? serializePageContext(nextContext, true) === context
                : false;
            if (!attemptedLoad && !couldBeLoadedWithPageData) {
                this.store.dispatch(new CmsActions.LoadCmsComponent({ uid, pageContext }));
            }
        }));
        const component$ = this.store.pipe(select(CmsSelectors.componentsSelectorFactory(uid, context)), 
        // TODO(issue:6431) - this `filter` should be removed.
        // The reason for removal: with `filter` in place, when moving to a page that has restrictions, the component data will still emit the previous value.
        // Removing it causes some components to fail, because they are not checking
        // if the data is actually there. I noticed these that this component is failing, but there are possibly more:
        // - `tab-paragraph-container.component.ts` when visiting any PDP page
        filter(component => !!component));
        return using(() => loading$.subscribe(), () => component$).pipe(shareReplay({ bufferSize: 1, refCount: true }));
    }
    /**
     * Given the position, get the content slot data
     * @param position : content slot position
     */
    getContentSlot(position) {
        return this.routingService
            .getPageContext()
            .pipe(switchMap(pageContext => this.store.pipe(select(CmsSelectors.getCurrentSlotSelectorFactory(pageContext, position)), filter(Boolean))));
    }
    /**
     * Given navigation node uid, get items (with id and type) inside the navigation entries
     * @param navigationNodeUid : uid of the navigation node
     */
    getNavigationEntryItems(navigationNodeUid) {
        return this.store.pipe(select(CmsSelectors.getNavigationEntryItems(navigationNodeUid)));
    }
    /**
     * Load navigation items data
     * @param rootUid : the uid of the root navigation node
     * @param itemList : list of items (with id and type)
     */
    loadNavigationItems(rootUid, itemList) {
        this.store.dispatch(new CmsActions.LoadCmsNavigationItems({
            nodeId: rootUid,
            items: itemList,
        }));
    }
    /**
     * Refresh the content of the latest cms page
     */
    refreshLatestPage() {
        this.routingService
            .getPageContext()
            .pipe(take(1))
            .subscribe(pageContext => this.store.dispatch(new CmsActions.LoadCmsPageData(pageContext)));
    }
    /**
     * Refresh the cms page content by page Id
     * @param pageId
     */
    refreshPageById(pageId) {
        const pageContext = { id: pageId };
        this.store.dispatch(new CmsActions.LoadCmsPageData(pageContext));
    }
    /**
     * Refresh cms component's content
     * @param uid component uid
     * @param pageContext an optional parameter that enables the caller to specify for which context the component should be refreshed.
     * If not specified, 'current' page context is used.
     */
    refreshComponent(uid, pageContext) {
        this.store.dispatch(new CmsActions.LoadCmsComponent({ uid, pageContext }));
    }
    /**
     * Given pageContext, return the CMS page data
     * @param pageContext
     */
    getPageState(pageContext) {
        return this.store.pipe(select(CmsSelectors.getPageData(pageContext)));
    }
    /**
     * Given pageContext, return the CMS page data
     * @param pageContext
     */
    getPageComponentTypes(pageContext) {
        return this.store.pipe(select(CmsSelectors.getPageComponentTypes(pageContext)));
    }
    /**
     * Given pageContext, return whether the CMS page data exists or not
     * @param pageContext
     */
    hasPage(pageContext, forceReload = false) {
        return this.store.pipe(select(CmsSelectors.getPageStateIndexLoaderState(pageContext)), tap((entity) => {
            const attemptedLoad = entity.loading || entity.success || entity.error;
            const shouldReload = forceReload && !entity.loading;
            if (!attemptedLoad || shouldReload) {
                this.store.dispatch(new CmsActions.LoadCmsPageData(pageContext));
                forceReload = false;
            }
        }), filter(entity => {
            if (!entity.hasOwnProperty('value')) {
                // if we have incomplete state from SSR failed load transfer state,
                // we should wait for reload and actual value
                return false;
            }
            return entity.success || (entity.error && !entity.loading);
        }), pluck('success'), catchError(() => of(false)));
    }
    /**
     * Given pageContext, return the CMS page data
     **/
    getPage(pageContext, forceReload = false) {
        return this.hasPage(pageContext, forceReload).pipe(switchMap(hasPage => hasPage ? this.getPageState(pageContext) : of(null)));
    }
    getPageIndex(pageContext) {
        return this.store.pipe(select(CmsSelectors.getPageStateIndexValue(pageContext)));
    }
    setPageFailIndex(pageContext, value) {
        this.store.dispatch(new CmsActions.CmsSetPageFailIndex(pageContext, value));
    }
};
CmsService.ctorParameters = () => [
    { type: Store },
    { type: RoutingService }
];
CmsService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CmsService_Factory() { return new CmsService(i0.ɵɵinject(i1.Store), i0.ɵɵinject(i2.RoutingService)); }, token: CmsService, providedIn: "root" });
CmsService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], CmsService);
export { CmsService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL2ZhY2FkZS9jbXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM1QyxPQUFPLEVBQUUsYUFBYSxFQUFjLEVBQUUsRUFBRSxjQUFjLEVBQUUsS0FBSyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzVFLE9BQU8sRUFDTCxVQUFVLEVBQ1YsTUFBTSxFQUNOLFNBQVMsRUFDVCxLQUFLLEVBQ0wsV0FBVyxFQUNYLFNBQVMsRUFDVCxJQUFJLEVBQ0osR0FBRyxHQUNKLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEIsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBTXRFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUVwRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDeEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7QUFLMUQsSUFBYSxVQUFVLEdBQXZCLE1BQWEsVUFBVTtJQVNyQixZQUNZLEtBQTBCLEVBQzFCLGNBQThCO1FBRDlCLFVBQUssR0FBTCxLQUFLLENBQXFCO1FBQzFCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQVZsQyx1QkFBa0IsR0FBRyxLQUFLLENBQUM7UUFFM0IsZUFBVSxHQUlkLEVBQUUsQ0FBQztJQUtKLENBQUM7SUFFSjs7T0FFRztJQUNILElBQUksaUJBQWlCLENBQUMsS0FBYztRQUNsQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO0lBQ2xDLENBQUM7SUFFRDs7T0FFRztJQUNILG1CQUFtQjtRQUNqQixPQUFPLElBQUks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Q0FBQyxJQUFJLENBQ2hELFNBQVMsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUNsQixPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FDcEQsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQUVELFlBQVksQ0FBQyxXQUF3QjtRQUNuQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsWUFBWSxDQUFDLHNCQUFzQixDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQ3pELENBQUM7SUFDSixDQUFDO0lBRUQsZ0JBQWdCLENBQUMsV0FBd0IsRUFBRSxLQUFhO1FBQ3RELElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksVUFBVSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzlFLENBQUM7Q0FDRixDQUFBOztZQXRRb0IsS0FBSztZQUNJLGNBQWM7OztBQVgvQixVQUFVO0lBSHRCLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7R0FDVyxVQUFVLENBZ1J0QjtTQWhSWSxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc2VsZWN0LCBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUsIG9mLCBxdWV1ZVNjaGVkdWxlciwgdXNpbmcgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIGNhdGNoRXJyb3IsXG4gIGZpbHRlcixcbiAgb2JzZXJ2ZU9uLFxuICBwbHVjayxcbiAgc2hhcmVSZXBsYXksXG4gIHN3aXRjaE1hcCxcbiAgdGFrZSxcbiAgdGFwLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnQgfSBmcm9tICcuLi8uLi9tb2RlbC9jbXMubW9kZWwnO1xuaW1wb3J0IHsgUm91dGluZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9yb3V0aW5nL2ZhY2FkZS9yb3V0aW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGFnZUNvbnRleHQgfSBmcm9tICcuLi8uLi9yb3V0aW5nL21vZGVscy9wYWdlLWNvbnRleHQubW9kZWwnO1xuaW1wb3J0IHsgTG9hZGVyU3RhdGUgfSBmcm9tICcuLi8uLi9zdGF0ZS91dGlscy9sb2FkZXIvbG9hZGVyLXN0YXRlJztcbmltcG9ydCB7IENvbnRlbnRTbG90RGF0YSB9IGZyb20gJy4uL21vZGVsL2NvbnRlbnQtc2xvdC1kYXRhLm1vZGVsJztcbmltcG9ydCB7IE5vZGVJdGVtIH0gZnJvbSAnLi4vbW9kZWwvbm9kZS1pdGVtLm1vZGVsJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICcuLi9tb2RlbC9wYWdlLm1vZGVsJztcbmltcG9ydCB7IENtc0FjdGlvbnMgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IFN0YXRlV2l0aENtcyB9IGZyb20gJy4uL3N0b3JlL2Ntcy1zdGF0ZSc7XG5pbXBvcnQgeyBDbXNTZWxlY3RvcnMgfSBmcm9tICcuLi9zdG9yZS9zZWxlY3RvcnMvaW5kZXgnO1xuaW1wb3J0IHsgc2VyaWFsaXplUGFnZUNvbnRleHQgfSBmcm9tICcuLi91dGlscy9jbXMtdXRpbHMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ21zU2VydmljZSB7XG4gIHByaXZhdGUgX2xhdW5jaEluU21hcnRFZGl0ID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBjb21wb25lbnRzOiB7XG4gICAgW3VpZDogc3RyaW5nXToge1xuICAgICAgW3BhZ2VDb250ZXh0OiBzdHJpbmddOiBPYnNlcnZhYmxlPENtc0NvbXBvbmVudD47XG4gICAgfTtcbiAgfSA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoQ21zPixcbiAgICBwcm90ZWN0ZWQgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlXG4gICkge31cblxuICAvKipcbiAgICogU2V0IF9sYXVuY2hJblNtYXJ0RWRpdCB2YWx1ZVxuICAgKi9cbiAgc2V0IGxhdW5jaEluU21hcnRFZGl0KHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fbGF1bmNoSW5TbWFydEVkaXQgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZSBhcHAgbGF1bmNoZWQgaW4gc21hcnQgZWRpdFxuICAgKi9cbiAgaXNMYXVuY2hJblNtYXJ0RWRpdCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fbGF1bmNoSW5TbWFydEVkaXQ7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGN1cnJlbnQgQ01TIHBhZ2UgZGF0YVxuICAgKi9cbiAgZ2V0Q3VycmVudFBhZ2UoKTogT2JzZXJ2YWJsZTxQYWdlPiB7XG4gICAgcmV0dXJuIHRoaXMucm91dGluZ1NlcnZpY2VcbiAgICAgIC5nZXRQYWdlQ29udGV4dCgpXG4gICAgICAucGlwZShcbiAgICAgICAgc3dpdGNoTWFwKHBhZ2VDb250ZXh0ID0+XG4gICAgICAgICAgdGhpcy5zdG9yZS5zZWxlY3QoQ21zU2VsZWN0b3JzLmdldFBhZ2VEYXRhKHBhZ2VDb250ZXh0KSlcbiAgICAgICAgKVxuICAgICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgQ01TIGNvbXBvbmVudCBkYXRhIGJ5IHVpZFxuICAgKlxuICAgKiBUaGlzIG1ldGhvZCBjYW4gYmUgc2FmZWx5IGFuZCBvcHRpbWFsbHkgdXNlZCB0byBsb2FkIG11bHRpcGxlIGNvbXBvbmVudHMgZGF0YSBhdCB0aGUgc2FtZSB0aW1lLlxuICAgKiBDYWxsaW5nIGdldENvbXBvbmVudERhdGEgbXVsdGlwbGUgdGltZXMgZm9yIGRpZmZlcmVudCBjb21wb25lbnRzIHdpbGwgYWx3YXlzIHJlc3VsdCBpbiBvcHRpbWl6ZWRcbiAgICogYmFjay1lbmQgcmVxdWVzdDogYWxsIGNvbXBvbmVudHMgcmVxdWVzdGVkIGF0IHRoZSBzYW1lIHRpbWUgKGluIG9uZSBldmVudCBsb29wKSB3aWxsIGJlIGxvYWRlZCBpbiBvbmUgbmV0d29yayBjYWxsLlxuICAgKlxuICAgKiBJbiBjYXNlIHRoZSBjb21wb25lbnQgZGF0YSBpcyBub3QgcHJlc2VudCwgdGhlIG1ldGhvZCB3aWxsIGxvYWQgaXQuXG4gICAqIE90aGVyd2lzZSwgaWYgdGhlIHBhZ2UgY29udGV4dCBpcyBub3QgcHJvdmlkZWQsIHRoZSBjdXJyZW50IHBhZ2UgY29udGV4dCBmcm9tIHRoZSByb3V0ZXIgc3RhdGUgd2lsbCBiZSB1c2VkIGluc3RlYWQuXG4gICAqXG4gICAqIEBwYXJhbSB1aWQgQ01TIGNvbXBvbmVudCB1aWRcbiAgICogQHBhcmFtIHBhZ2VDb250ZXh0IGlmIHByb3ZpZGVkLCBpdCB3aWxsIGJlIHVzZWQgdG8gbG9va3VwIHRoZSBjb21wb25lbnQgZGF0YS5cbiAgICovXG4gIGdldENvbXBvbmVudERhdGE8VCBleHRlbmRzIENtc0NvbXBvbmVudD4oXG4gICAgdWlkOiBzdHJpbmcsXG4gICAgcGFnZUNvbnRleHQ/OiBQYWdlQ29udGV4dFxuICApOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICBjb25zdCBjb250ZXh0ID0gc2VyaWFsaXplUGFnZUNvbnRleHQocGFnZUNvbnRleHQsIHRydWUpO1xuICAgIGlmICghdGhpcy5jb21wb25lbnRzW3VpZF0pIHtcbiAgICAgIC8vIGNyZWF0ZSB0aGUgY29tcG9uZW50IGRhdGEgc3RydWN0dXJlLCBpZiBpdCBkb2Vzbid0IGFscmVhZHkgZXhpc3RcbiAgICAgIHRoaXMuY29tcG9uZW50c1t1aWRdID0ge307XG4gICAgfVxuXG4gICAgY29uc3QgY29tcG9uZW50ID0gdGhpcy5jb21wb25lbnRzW3VpZF07XG4gICAgaWYgKCFjb21wb25lbnRbY29udGV4dF0pIHtcbiAgICAgIC8vIGNyZWF0ZSB0aGUgY29tcG9uZW50IGRhdGEgYW5kIGFzc2lnbiBpdCB0byB0aGUgY29tcG9uZW50J3MgY29udGV4dFxuICAgICAgY29tcG9uZW50W2NvbnRleHRdID0gdGhpcy5jcmVhdGVDb21wb25lbnREYXRhKHVpZCwgcGFnZUNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRbY29udGV4dF0gYXMgT2JzZXJ2YWJsZTxUPjtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlQ29tcG9uZW50RGF0YTxUIGV4dGVuZHMgQ21zQ29tcG9uZW50PihcbiAgICB1aWQ6IHN0cmluZyxcbiAgICBwYWdlQ29udGV4dD86IFBhZ2VDb250ZXh0XG4gICk6IE9ic2VydmFibGU8VD4ge1xuICAgIGlmICghcGFnZUNvbnRleHQpIHtcbiAgICAgIHJldHVybiB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdldFBhZ2VDb250ZXh0KCkucGlwZShcbiAgICAgICAgZmlsdGVyKGN1cnJlbnRDb250ZXh0ID0+ICEhY3VycmVudENvbnRleHQpLFxuICAgICAgICBzd2l0Y2hNYXAoY3VycmVudENvbnRleHQgPT5cbiAgICAgICAgICB0aGlzLmdldENvbXBvbmVudERhdGE8VD4odWlkLCBjdXJyZW50Q29udGV4dClcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc2VyaWFsaXplUGFnZUNvbnRleHQocGFnZUNvbnRleHQsIHRydWUpO1xuXG4gICAgY29uc3QgbG9hZGluZyQgPSBjb21iaW5lTGF0ZXN0KFtcbiAgICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ2V0TmV4dFBhZ2VDb250ZXh0KCksXG4gICAgICB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICAgIHNlbGVjdChDbXNTZWxlY3RvcnMuY29tcG9uZW50c0xvYWRlclN0YXRlU2VsZWN0b3JGYWN0b3J5KHVpZCwgY29udGV4dCkpXG4gICAgICApLFxuICAgIF0pLnBpcGUoXG4gICAgICBvYnNlcnZlT24ocXVldWVTY2hlZHVsZXIpLFxuICAgICAgdGFwKChbbmV4dENvbnRleHQsIGxvYWRpbmdTdGF0ZV0pID0+IHtcbiAgICAgICAgY29uc3QgYXR0ZW1wdGVkTG9hZCA9XG4gICAgICAgICAgbG9hZGluZ1N0YXRlLmxvYWRpbmcgfHwgbG9hZGluZ1N0YXRlLnN1Y2Nlc3MgfHwgbG9hZGluZ1N0YXRlLmVycm9yO1xuICAgICAgICAvLyBpZiB0aGUgcmVxdWVzdGVkIGNvbnRleHQgaXMgdGhlIHNhbWUgYXMgdGhlIG9uZSB0aGF0J3MgY3VycmVudGx5IGJlaW5nIG5hdmlnYXRlZCB0b1xuICAgICAgICAvLyAoYXMgaXQgbWlnaHQgYWxyZWFkeSBiZWVuIHRyaWdnZXJlZCBhbmQgbWlnaHQgYmUgYXZhaWxhYmxlIHNob3J0bHkgZnJvbSBwYWdlIGRhdGEpXG4gICAgICAgIC8vIFRPRE8oaXNzdWU6MzY0OSksIFRPRE8oaXNzdWU6MzY2OCkgLSB0aGlzIG9wdGltaXphdGlvbiBjb3VsZCBiZSByZW1vdmVkXG4gICAgICAgIGNvbnN0IGNvdWxkQmVMb2FkZWRXaXRoUGFnZURhdGEgPSBuZXh0Q29udGV4dFxuICAgICAgICAgID8gc2VyaWFsaXplUGFnZUNvbnRleHQobmV4dENvbnRleHQsIHRydWUpID09PSBjb250ZXh0XG4gICAgICAgICAgOiBmYWxzZTtcblxuICAgICAgICBpZiAoIWF0dGVtcHRlZExvYWQgJiYgIWNvdWxkQmVMb2FkZWRXaXRoUGFnZURhdGEpIHtcbiAgICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgICAgICAgbmV3IENtc0FjdGlvbnMuTG9hZENtc0NvbXBvbmVudCh7IHVpZCwgcGFnZUNvbnRleHQgfSlcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG5cbiAgICBjb25zdCBjb21wb25lbnQkID0gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KENtc1NlbGVjdG9ycy5jb21wb25lbnRzU2VsZWN0b3JGYWN0b3J5KHVpZCwgY29udGV4dCkpLFxuICAgICAgLy8gVE9ETyhpc3N1ZTo2NDMxKSAtIHRoaXMgYGZpbHRlcmAgc2hvdWxkIGJlIHJlbW92ZWQuXG4gICAgICAvLyBUaGUgcmVhc29uIGZvciByZW1vdmFsOiB3aXRoIGBmaWx0ZXJgIGluIHBsYWNlLCB3aGVuIG1vdmluZyB0byBhIHBhZ2UgdGhhdCBoYXMgcmVzdHJpY3Rpb25zLCB0aGUgY29tcG9uZW50IGRhdGEgd2lsbCBzdGlsbCBlbWl0IHRoZSBwcmV2aW91cyB2YWx1ZS5cbiAgICAgIC8vIFJlbW92aW5nIGl0IGNhdXNlcyBzb21lIGNvbXBvbmVudHMgdG8gZmFpbCwgYmVjYXVzZSB0aGV5IGFyZSBub3QgY2hlY2tpbmdcbiAgICAgIC8vIGlmIHRoZSBkYXRhIGlzIGFjdHVhbGx5IHRoZXJlLiBJIG5vdGljZWQgdGhlc2UgdGhhdCB0aGlzIGNvbXBvbmVudCBpcyBmYWlsaW5nLCBidXQgdGhlcmUgYXJlIHBvc3NpYmx5IG1vcmU6XG4gICAgICAvLyAtIGB0YWItcGFyYWdyYXBoLWNvbnRhaW5lci5jb21wb25lbnQudHNgIHdoZW4gdmlzaXRpbmcgYW55IFBEUCBwYWdlXG4gICAgICBmaWx0ZXIoY29tcG9uZW50ID0+ICEhY29tcG9uZW50KVxuICAgICkgYXMgT2JzZXJ2YWJsZTxUPjtcblxuICAgIHJldHVybiB1c2luZyhcbiAgICAgICgpID0+IGxvYWRpbmckLnN1YnNjcmliZSgpLFxuICAgICAgKCkgPT4gY29tcG9uZW50JFxuICAgICkucGlwZShzaGFyZVJlcGxheSh7IGJ1ZmZlclNpemU6IDEsIHJlZkNvdW50OiB0cnVlIH0pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHaXZlbiB0aGUgcG9zaXRpb24sIGdldCB0aGUgY29udGVudCBzbG90IGRhdGFcbiAgICogQHBhcmFtIHBvc2l0aW9uIDogY29udGVudCBzbG90IHBvc2l0aW9uXG4gICAqL1xuICBnZXRDb250ZW50U2xvdChwb3NpdGlvbjogc3RyaW5nKTogT2JzZXJ2YWJsZTxDb250ZW50U2xvdERhdGE+IHtcbiAgICByZXR1cm4gdGhpcy5yb3V0aW5nU2VydmljZVxuICAgICAgLmdldFBhZ2VDb250ZXh0KClcbiAgICAgIC5waXBlKFxuICAgICAgICBzd2l0Y2hNYXAocGFnZUNvbnRleHQgPT5cbiAgICAgICAgICB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICAgICAgICBzZWxlY3QoXG4gICAgICAgICAgICAgIENtc1NlbGVjdG9ycy5nZXRDdXJyZW50U2xvdFNlbGVjdG9yRmFjdG9yeShwYWdlQ29udGV4dCwgcG9zaXRpb24pXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgZmlsdGVyKEJvb2xlYW4pXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdpdmVuIG5hdmlnYXRpb24gbm9kZSB1aWQsIGdldCBpdGVtcyAod2l0aCBpZCBhbmQgdHlwZSkgaW5zaWRlIHRoZSBuYXZpZ2F0aW9uIGVudHJpZXNcbiAgICogQHBhcmFtIG5hdmlnYXRpb25Ob2RlVWlkIDogdWlkIG9mIHRoZSBuYXZpZ2F0aW9uIG5vZGVcbiAgICovXG4gIGdldE5hdmlnYXRpb25FbnRyeUl0ZW1zKG5hdmlnYXRpb25Ob2RlVWlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPE5vZGVJdGVtPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChDbXNTZWxlY3RvcnMuZ2V0TmF2aWdhdGlvbkVudHJ5SXRlbXMobmF2aWdhdGlvbk5vZGVVaWQpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogTG9hZCBuYXZpZ2F0aW9uIGl0ZW1zIGRhdGFcbiAgICogQHBhcmFtIHJvb3RVaWQgOiB0aGUgdWlkIG9mIHRoZSByb290IG5hdmlnYXRpb24gbm9kZVxuICAgKiBAcGFyYW0gaXRlbUxpc3QgOiBsaXN0IG9mIGl0ZW1zICh3aXRoIGlkIGFuZCB0eXBlKVxuICAgKi9cbiAgbG9hZE5hdmlnYXRpb25JdGVtcyhcbiAgICByb290VWlkOiBzdHJpbmcsXG4gICAgaXRlbUxpc3Q6IHsgaWQ6IHN0cmluZzsgc3VwZXJUeXBlOiBzdHJpbmcgfVtdXG4gICk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgQ21zQWN0aW9ucy5Mb2FkQ21zTmF2aWdhdGlvbkl0ZW1zKHtcbiAgICAgICAgbm9kZUlkOiByb290VWlkLFxuICAgICAgICBpdGVtczogaXRlbUxpc3QsXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmVmcmVzaCB0aGUgY29udGVudCBvZiB0aGUgbGF0ZXN0IGNtcyBwYWdlXG4gICAqL1xuICByZWZyZXNoTGF0ZXN0UGFnZSgpOiB2b2lkIHtcbiAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlXG4gICAgICAuZ2V0UGFnZUNvbnRleHQoKVxuICAgICAgLnBpcGUodGFrZSgxKSlcbiAgICAgIC5zdWJzY3JpYmUocGFnZUNvbnRleHQgPT5cbiAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQ21zQWN0aW9ucy5Mb2FkQ21zUGFnZURhdGEocGFnZUNvbnRleHQpKVxuICAgICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWZyZXNoIHRoZSBjbXMgcGFnZSBjb250ZW50IGJ5IHBhZ2UgSWRcbiAgICogQHBhcmFtIHBhZ2VJZFxuICAgKi9cbiAgcmVmcmVzaFBhZ2VCeUlkKHBhZ2VJZDogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgcGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0ID0geyBpZDogcGFnZUlkIH07XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQ21zQWN0aW9ucy5Mb2FkQ21zUGFnZURhdGEocGFnZUNvbnRleHQpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWZyZXNoIGNtcyBjb21wb25lbnQncyBjb250ZW50XG4gICAqIEBwYXJhbSB1aWQgY29tcG9uZW50IHVpZFxuICAgKiBAcGFyYW0gcGFnZUNvbnRleHQgYW4gb3B0aW9uYWwgcGFyYW1ldGVyIHRoYXQgZW5hYmxlcyB0aGUgY2FsbGVyIHRvIHNwZWNpZnkgZm9yIHdoaWNoIGNvbnRleHQgdGhlIGNvbXBvbmVudCBzaG91bGQgYmUgcmVmcmVzaGVkLlxuICAgKiBJZiBub3Qgc3BlY2lmaWVkLCAnY3VycmVudCcgcGFnZSBjb250ZXh0IGlzIHVzZWQuXG4gICAqL1xuICByZWZyZXNoQ29tcG9uZW50KHVpZDogc3RyaW5nLCBwYWdlQ29udGV4dD86IFBhZ2VDb250ZXh0KTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQ21zQWN0aW9ucy5Mb2FkQ21zQ29tcG9uZW50KHsgdWlkLCBwYWdlQ29udGV4dCB9KSk7XG4gIH1cblxuICAvKipcbiAgICogR2l2ZW4gcGFnZUNvbnRleHQsIHJldHVybiB0aGUgQ01TIHBhZ2UgZGF0YVxuICAgKiBAcGFyYW0gcGFnZUNvbnRleHRcbiAgICovXG4gIGdldFBhZ2VTdGF0ZShwYWdlQ29udGV4dDogUGFnZUNvbnRleHQpOiBPYnNlcnZhYmxlPFBhZ2U+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChDbXNTZWxlY3RvcnMuZ2V0UGFnZURhdGEocGFnZUNvbnRleHQpKSk7XG4gIH1cblxuICAvKipcbiAgICogR2l2ZW4gcGFnZUNvbnRleHQsIHJldHVybiB0aGUgQ01TIHBhZ2UgZGF0YVxuICAgKiBAcGFyYW0gcGFnZUNvbnRleHRcbiAgICovXG4gIGdldFBhZ2VDb21wb25lbnRUeXBlcyhwYWdlQ29udGV4dDogUGFnZUNvbnRleHQpOiBPYnNlcnZhYmxlPHN0cmluZ1tdPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChDbXNTZWxlY3RvcnMuZ2V0UGFnZUNvbXBvbmVudFR5cGVzKHBhZ2VDb250ZXh0KSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdpdmVuIHBhZ2VDb250ZXh0LCByZXR1cm4gd2hldGhlciB0aGUgQ01TIHBhZ2UgZGF0YSBleGlzdHMgb3Igbm90XG4gICAqIEBwYXJhbSBwYWdlQ29udGV4dFxuICAgKi9cbiAgaGFzUGFnZShwYWdlQ29udGV4dDogUGFnZUNvbnRleHQsIGZvcmNlUmVsb2FkID0gZmFsc2UpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KENtc1NlbGVjdG9ycy5nZXRQYWdlU3RhdGVJbmRleExvYWRlclN0YXRlKHBhZ2VDb250ZXh0KSksXG4gICAgICB0YXAoKGVudGl0eTogTG9hZGVyU3RhdGU8c3RyaW5nPikgPT4ge1xuICAgICAgICBjb25zdCBhdHRlbXB0ZWRMb2FkID0gZW50aXR5LmxvYWRpbmcgfHwgZW50aXR5LnN1Y2Nlc3MgfHwgZW50aXR5LmVycm9yO1xuICAgICAgICBjb25zdCBzaG91bGRSZWxvYWQgPSBmb3JjZVJlbG9hZCAmJiAhZW50aXR5LmxvYWRpbmc7XG4gICAgICAgIGlmICghYXR0ZW1wdGVkTG9hZCB8fCBzaG91bGRSZWxvYWQpIHtcbiAgICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDbXNBY3Rpb25zLkxvYWRDbXNQYWdlRGF0YShwYWdlQ29udGV4dCkpO1xuICAgICAgICAgIGZvcmNlUmVsb2FkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgZmlsdGVyKGVudGl0eSA9PiB7XG4gICAgICAgIGlmICghZW50aXR5Lmhhc093blByb3BlcnR5KCd2YWx1ZScpKSB7XG4gICAgICAgICAgLy8gaWYgd2UgaGF2ZSBpbmNvbXBsZXRlIHN0YXRlIGZyb20gU1NSIGZhaWxlZCBsb2FkIHRyYW5zZmVyIHN0YXRlLFxuICAgICAgICAgIC8vIHdlIHNob3VsZCB3YWl0IGZvciByZWxvYWQgYW5kIGFjdHVhbCB2YWx1ZVxuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZW50aXR5LnN1Y2Nlc3MgfHwgKGVudGl0eS5lcnJvciAmJiAhZW50aXR5LmxvYWRpbmcpO1xuICAgICAgfSksXG4gICAgICBwbHVjaygnc3VjY2VzcycpLFxuICAgICAgY2F0Y2hFcnJvcigoKSA9PiBvZihmYWxzZSkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHaXZlbiBwYWdlQ29udGV4dCwgcmV0dXJuIHRoZSBDTVMgcGFnZSBkYXRhXG4gICAqKi9cbiAgZ2V0UGFnZShwYWdlQ29udGV4dDogUGFnZUNvbnRleHQsIGZvcmNlUmVsb2FkID0gZmFsc2UpOiBPYnNlcnZhYmxlPFBhZ2U+IHtcbiAgICByZXR1cm4gdGhpcy5oYXNQYWdlKHBhZ2VDb250ZXh0LCBmb3JjZVJlbG9hZCkucGlwZShcbiAgICAgIHN3aXRjaE1hcChoYXNQYWdlID0+XG4gICAgICAgIGhhc1BhZ2UgPyB0aGlzLmdldFBhZ2VTdGF0ZShwYWdlQ29udGV4dCkgOiBvZihudWxsKVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBnZXRQYWdlSW5kZXgocGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0KTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KENtc1NlbGVjdG9ycy5nZXRQYWdlU3RhdGVJbmRleFZhbHVlKHBhZ2VDb250ZXh0KSlcbiAgICApO1xuICB9XG5cbiAgc2V0UGFnZUZhaWxJbmRleChwYWdlQ29udGV4dDogUGFnZUNvbnRleHQsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDbXNBY3Rpb25zLkNtc1NldFBhZ2VGYWlsSW5kZXgocGFnZUNvbnRleHQsIHZhbHVlKSk7XG4gIH1cbn1cbiJdfQ==
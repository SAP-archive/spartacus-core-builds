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
        this.components = {};
    }
    /**
     * Get current CMS page data
     */
    getCurrentPage() {
        return this.routingService
            .getPageContext()
            .pipe(switchMap((pageContext) => this.store.select(CmsSelectors.getPageData(pageContext))));
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
            return this.routingService.getPageContext().pipe(filter((currentContext) => !!currentContext), switchMap((currentContext) => this.getComponentData(uid, currentContext)));
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
        filter((component) => !!component));
        return using(() => loading$.subscribe(), () => component$).pipe(shareReplay({ bufferSize: 1, refCount: true }));
    }
    /**
     * Given the position, get the content slot data
     * @param position : content slot position
     */
    getContentSlot(position) {
        return this.routingService
            .getPageContext()
            .pipe(switchMap((pageContext) => this.store.pipe(select(CmsSelectors.getCurrentSlotSelectorFactory(pageContext, position)), filter(Boolean))));
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
            .subscribe((pageContext) => this.store.dispatch(new CmsActions.LoadCmsPageData(pageContext)));
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
        }), filter((entity) => {
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
        return this.hasPage(pageContext, forceReload).pipe(switchMap((hasPage) => hasPage ? this.getPageState(pageContext) : of(null)));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL2ZhY2FkZS9jbXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM1QyxPQUFPLEVBQUUsYUFBYSxFQUFjLEVBQUUsRUFBRSxjQUFjLEVBQUUsS0FBSyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzVFLE9BQU8sRUFDTCxVQUFVLEVBQ1YsTUFBTSxFQUNOLFNBQVMsRUFDVCxLQUFLLEVBQ0wsV0FBVyxFQUNYLFNBQVMsRUFDVCxJQUFJLEVBQ0osR0FBRyxHQUNKLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEIsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBTXRFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUVwRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDeEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7QUFLMUQsSUFBYSxVQUFVLEdBQXZCLE1BQWEsVUFBVTtJQU9yQixZQUNZLEtBQTBCLEVBQzFCLGNBQThCO1FBRDlCLFVBQUssR0FBTCxLQUFLLENBQXFCO1FBQzFCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQVJsQyxlQUFVLEdBSWQsRUFBRSxDQUFDO0lBS0osQ0FBQztJQUVKOztPQUVHO0lBQ0gsY0FBYztRQUNaLE9BQU8sSUFBSSxDQUFDLGNBQWM7YUFDdkIsY0FBYyxFQUFFO2FBQ2hCLElBQUksQ0FDSCxTQUFTLENBQUMsQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUN4QixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMs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RixDQUFDO0lBQ0osQ0FBQztJQUVELFlBQVksQ0FBQyxXQUF3QjtRQUNuQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsWUFBWSxDQUFDLHNCQUFzQixDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQ3pELENBQUM7SUFDSixDQUFDO0lBRUQsZ0JBQWdCLENBQUMsV0FBd0IsRUFBRSxLQUFhO1FBQ3RELElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksVUFBVSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzlFLENBQUM7Q0FDRixDQUFBOztZQXhQb0IsS0FBSztZQUNJLGNBQWM7OztBQVQvQixVQUFVO0lBSHRCLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7R0FDVyxVQUFVLENBZ1F0QjtTQWhRWSxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc2VsZWN0LCBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUsIG9mLCBxdWV1ZVNjaGVkdWxlciwgdXNpbmcgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIGNhdGNoRXJyb3IsXG4gIGZpbHRlcixcbiAgb2JzZXJ2ZU9uLFxuICBwbHVjayxcbiAgc2hhcmVSZXBsYXksXG4gIHN3aXRjaE1hcCxcbiAgdGFrZSxcbiAgdGFwLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnQgfSBmcm9tICcuLi8uLi9tb2RlbC9jbXMubW9kZWwnO1xuaW1wb3J0IHsgUm91dGluZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9yb3V0aW5nL2ZhY2FkZS9yb3V0aW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGFnZUNvbnRleHQgfSBmcm9tICcuLi8uLi9yb3V0aW5nL21vZGVscy9wYWdlLWNvbnRleHQubW9kZWwnO1xuaW1wb3J0IHsgTG9hZGVyU3RhdGUgfSBmcm9tICcuLi8uLi9zdGF0ZS91dGlscy9sb2FkZXIvbG9hZGVyLXN0YXRlJztcbmltcG9ydCB7IENvbnRlbnRTbG90RGF0YSB9IGZyb20gJy4uL21vZGVsL2NvbnRlbnQtc2xvdC1kYXRhLm1vZGVsJztcbmltcG9ydCB7IE5vZGVJdGVtIH0gZnJvbSAnLi4vbW9kZWwvbm9kZS1pdGVtLm1vZGVsJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICcuLi9tb2RlbC9wYWdlLm1vZGVsJztcbmltcG9ydCB7IENtc0FjdGlvbnMgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IFN0YXRlV2l0aENtcyB9IGZyb20gJy4uL3N0b3JlL2Ntcy1zdGF0ZSc7XG5pbXBvcnQgeyBDbXNTZWxlY3RvcnMgfSBmcm9tICcuLi9zdG9yZS9zZWxlY3RvcnMvaW5kZXgnO1xuaW1wb3J0IHsgc2VyaWFsaXplUGFnZUNvbnRleHQgfSBmcm9tICcuLi91dGlscy9jbXMtdXRpbHMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ21zU2VydmljZSB7XG4gIHByaXZhdGUgY29tcG9uZW50czoge1xuICAgIFt1aWQ6IHN0cmluZ106IHtcbiAgICAgIFtwYWdlQ29udGV4dDogc3RyaW5nXTogT2JzZXJ2YWJsZTxDbXNDb21wb25lbnQ+O1xuICAgIH07XG4gIH0gPSB7fTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aENtcz4sXG4gICAgcHJvdGVjdGVkIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZVxuICApIHt9XG5cbiAgLyoqXG4gICAqIEdldCBjdXJyZW50IENNUyBwYWdlIGRhdGFcbiAgICovXG4gIGdldEN1cnJlbnRQYWdlKCk6IE9ic2VydmFibGU8UGFnZT4ge1xuICAgIHJldHVybiB0aGlzLnJvdXRpbmdTZXJ2aWNlXG4gICAgICAuZ2V0UGFnZUNvbnRleHQoKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHN3aXRjaE1hcCgocGFnZUNvbnRleHQpID0+XG4gICAgICAgICAgdGhpcy5zdG9yZS5zZWxlY3QoQ21zU2VsZWN0b3JzLmdldFBhZ2VEYXRhKHBhZ2VDb250ZXh0KSlcbiAgICAgICAgKVxuICAgICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgQ01TIGNvbXBvbmVudCBkYXRhIGJ5IHVpZFxuICAgKlxuICAgKiBUaGlzIG1ldGhvZCBjYW4gYmUgc2FmZWx5IGFuZCBvcHRpbWFsbHkgdXNlZCB0byBsb2FkIG11bHRpcGxlIGNvbXBvbmVudHMgZGF0YSBhdCB0aGUgc2FtZSB0aW1lLlxuICAgKiBDYWxsaW5nIGdldENvbXBvbmVudERhdGEgbXVsdGlwbGUgdGltZXMgZm9yIGRpZmZlcmVudCBjb21wb25lbnRzIHdpbGwgYWx3YXlzIHJlc3VsdCBpbiBvcHRpbWl6ZWRcbiAgICogYmFjay1lbmQgcmVxdWVzdDogYWxsIGNvbXBvbmVudHMgcmVxdWVzdGVkIGF0IHRoZSBzYW1lIHRpbWUgKGluIG9uZSBldmVudCBsb29wKSB3aWxsIGJlIGxvYWRlZCBpbiBvbmUgbmV0d29yayBjYWxsLlxuICAgKlxuICAgKiBJbiBjYXNlIHRoZSBjb21wb25lbnQgZGF0YSBpcyBub3QgcHJlc2VudCwgdGhlIG1ldGhvZCB3aWxsIGxvYWQgaXQuXG4gICAqIE90aGVyd2lzZSwgaWYgdGhlIHBhZ2UgY29udGV4dCBpcyBub3QgcHJvdmlkZWQsIHRoZSBjdXJyZW50IHBhZ2UgY29udGV4dCBmcm9tIHRoZSByb3V0ZXIgc3RhdGUgd2lsbCBiZSB1c2VkIGluc3RlYWQuXG4gICAqXG4gICAqIEBwYXJhbSB1aWQgQ01TIGNvbXBvbmVudCB1aWRcbiAgICogQHBhcmFtIHBhZ2VDb250ZXh0IGlmIHByb3ZpZGVkLCBpdCB3aWxsIGJlIHVzZWQgdG8gbG9va3VwIHRoZSBjb21wb25lbnQgZGF0YS5cbiAgICovXG4gIGdldENvbXBvbmVudERhdGE8VCBleHRlbmRzIENtc0NvbXBvbmVudD4oXG4gICAgdWlkOiBzdHJpbmcsXG4gICAgcGFnZUNvbnRleHQ/OiBQYWdlQ29udGV4dFxuICApOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICBjb25zdCBjb250ZXh0ID0gc2VyaWFsaXplUGFnZUNvbnRleHQocGFnZUNvbnRleHQsIHRydWUpO1xuICAgIGlmICghdGhpcy5jb21wb25lbnRzW3VpZF0pIHtcbiAgICAgIC8vIGNyZWF0ZSB0aGUgY29tcG9uZW50IGRhdGEgc3RydWN0dXJlLCBpZiBpdCBkb2Vzbid0IGFscmVhZHkgZXhpc3RcbiAgICAgIHRoaXMuY29tcG9uZW50c1t1aWRdID0ge307XG4gICAgfVxuXG4gICAgY29uc3QgY29tcG9uZW50ID0gdGhpcy5jb21wb25lbnRzW3VpZF07XG4gICAgaWYgKCFjb21wb25lbnRbY29udGV4dF0pIHtcbiAgICAgIC8vIGNyZWF0ZSB0aGUgY29tcG9uZW50IGRhdGEgYW5kIGFzc2lnbiBpdCB0byB0aGUgY29tcG9uZW50J3MgY29udGV4dFxuICAgICAgY29tcG9uZW50W2NvbnRleHRdID0gdGhpcy5jcmVhdGVDb21wb25lbnREYXRhKHVpZCwgcGFnZUNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRbY29udGV4dF0gYXMgT2JzZXJ2YWJsZTxUPjtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlQ29tcG9uZW50RGF0YTxUIGV4dGVuZHMgQ21zQ29tcG9uZW50PihcbiAgICB1aWQ6IHN0cmluZyxcbiAgICBwYWdlQ29udGV4dD86IFBhZ2VDb250ZXh0XG4gICk6IE9ic2VydmFibGU8VD4ge1xuICAgIGlmICghcGFnZUNvbnRleHQpIHtcbiAgICAgIHJldHVybiB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdldFBhZ2VDb250ZXh0KCkucGlwZShcbiAgICAgICAgZmlsdGVyKChjdXJyZW50Q29udGV4dCkgPT4gISFjdXJyZW50Q29udGV4dCksXG4gICAgICAgIHN3aXRjaE1hcCgoY3VycmVudENvbnRleHQpID0+XG4gICAgICAgICAgdGhpcy5nZXRDb21wb25lbnREYXRhPFQ+KHVpZCwgY3VycmVudENvbnRleHQpXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuXG4gICAgY29uc3QgY29udGV4dCA9IHNlcmlhbGl6ZVBhZ2VDb250ZXh0KHBhZ2VDb250ZXh0LCB0cnVlKTtcblxuICAgIGNvbnN0IGxvYWRpbmckID0gY29tYmluZUxhdGVzdChbXG4gICAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdldE5leHRQYWdlQ29udGV4dCgpLFxuICAgICAgdGhpcy5zdG9yZS5waXBlKFxuICAgICAgICBzZWxlY3QoQ21zU2VsZWN0b3JzLmNvbXBvbmVudHNMb2FkZXJTdGF0ZVNlbGVjdG9yRmFjdG9yeSh1aWQsIGNvbnRleHQpKVxuICAgICAgKSxcbiAgICBdKS5waXBlKFxuICAgICAgb2JzZXJ2ZU9uKHF1ZXVlU2NoZWR1bGVyKSxcbiAgICAgIHRhcCgoW25leHRDb250ZXh0LCBsb2FkaW5nU3RhdGVdKSA9PiB7XG4gICAgICAgIGNvbnN0IGF0dGVtcHRlZExvYWQgPVxuICAgICAgICAgIGxvYWRpbmdTdGF0ZS5sb2FkaW5nIHx8IGxvYWRpbmdTdGF0ZS5zdWNjZXNzIHx8IGxvYWRpbmdTdGF0ZS5lcnJvcjtcbiAgICAgICAgLy8gaWYgdGhlIHJlcXVlc3RlZCBjb250ZXh0IGlzIHRoZSBzYW1lIGFzIHRoZSBvbmUgdGhhdCdzIGN1cnJlbnRseSBiZWluZyBuYXZpZ2F0ZWQgdG9cbiAgICAgICAgLy8gKGFzIGl0IG1pZ2h0IGFscmVhZHkgYmVlbiB0cmlnZ2VyZWQgYW5kIG1pZ2h0IGJlIGF2YWlsYWJsZSBzaG9ydGx5IGZyb20gcGFnZSBkYXRhKVxuICAgICAgICAvLyBUT0RPKGlzc3VlOjM2NDkpLCBUT0RPKGlzc3VlOjM2NjgpIC0gdGhpcyBvcHRpbWl6YXRpb24gY291bGQgYmUgcmVtb3ZlZFxuICAgICAgICBjb25zdCBjb3VsZEJlTG9hZGVkV2l0aFBhZ2VEYXRhID0gbmV4dENvbnRleHRcbiAgICAgICAgICA/IHNlcmlhbGl6ZVBhZ2VDb250ZXh0KG5leHRDb250ZXh0LCB0cnVlKSA9PT0gY29udGV4dFxuICAgICAgICAgIDogZmFsc2U7XG5cbiAgICAgICAgaWYgKCFhdHRlbXB0ZWRMb2FkICYmICFjb3VsZEJlTG9hZGVkV2l0aFBhZ2VEYXRhKSB7XG4gICAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgICAgICAgIG5ldyBDbXNBY3Rpb25zLkxvYWRDbXNDb21wb25lbnQoeyB1aWQsIHBhZ2VDb250ZXh0IH0pXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuXG4gICAgY29uc3QgY29tcG9uZW50JCA9IHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChDbXNTZWxlY3RvcnMuY29tcG9uZW50c1NlbGVjdG9yRmFjdG9yeSh1aWQsIGNvbnRleHQpKSxcbiAgICAgIC8vIFRPRE8oaXNzdWU6NjQzMSkgLSB0aGlzIGBmaWx0ZXJgIHNob3VsZCBiZSByZW1vdmVkLlxuICAgICAgLy8gVGhlIHJlYXNvbiBmb3IgcmVtb3ZhbDogd2l0aCBgZmlsdGVyYCBpbiBwbGFjZSwgd2hlbiBtb3ZpbmcgdG8gYSBwYWdlIHRoYXQgaGFzIHJlc3RyaWN0aW9ucywgdGhlIGNvbXBvbmVudCBkYXRhIHdpbGwgc3RpbGwgZW1pdCB0aGUgcHJldmlvdXMgdmFsdWUuXG4gICAgICAvLyBSZW1vdmluZyBpdCBjYXVzZXMgc29tZSBjb21wb25lbnRzIHRvIGZhaWwsIGJlY2F1c2UgdGhleSBhcmUgbm90IGNoZWNraW5nXG4gICAgICAvLyBpZiB0aGUgZGF0YSBpcyBhY3R1YWxseSB0aGVyZS4gSSBub3RpY2VkIHRoZXNlIHRoYXQgdGhpcyBjb21wb25lbnQgaXMgZmFpbGluZywgYnV0IHRoZXJlIGFyZSBwb3NzaWJseSBtb3JlOlxuICAgICAgLy8gLSBgdGFiLXBhcmFncmFwaC1jb250YWluZXIuY29tcG9uZW50LnRzYCB3aGVuIHZpc2l0aW5nIGFueSBQRFAgcGFnZVxuICAgICAgZmlsdGVyKChjb21wb25lbnQpID0+ICEhY29tcG9uZW50KVxuICAgICkgYXMgT2JzZXJ2YWJsZTxUPjtcblxuICAgIHJldHVybiB1c2luZyhcbiAgICAgICgpID0+IGxvYWRpbmckLnN1YnNjcmliZSgpLFxuICAgICAgKCkgPT4gY29tcG9uZW50JFxuICAgICkucGlwZShzaGFyZVJlcGxheSh7IGJ1ZmZlclNpemU6IDEsIHJlZkNvdW50OiB0cnVlIH0pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHaXZlbiB0aGUgcG9zaXRpb24sIGdldCB0aGUgY29udGVudCBzbG90IGRhdGFcbiAgICogQHBhcmFtIHBvc2l0aW9uIDogY29udGVudCBzbG90IHBvc2l0aW9uXG4gICAqL1xuICBnZXRDb250ZW50U2xvdChwb3NpdGlvbjogc3RyaW5nKTogT2JzZXJ2YWJsZTxDb250ZW50U2xvdERhdGE+IHtcbiAgICByZXR1cm4gdGhpcy5yb3V0aW5nU2VydmljZVxuICAgICAgLmdldFBhZ2VDb250ZXh0KClcbiAgICAgIC5waXBlKFxuICAgICAgICBzd2l0Y2hNYXAoKHBhZ2VDb250ZXh0KSA9PlxuICAgICAgICAgIHRoaXMuc3RvcmUucGlwZShcbiAgICAgICAgICAgIHNlbGVjdChcbiAgICAgICAgICAgICAgQ21zU2VsZWN0b3JzLmdldEN1cnJlbnRTbG90U2VsZWN0b3JGYWN0b3J5KHBhZ2VDb250ZXh0LCBwb3NpdGlvbilcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBmaWx0ZXIoQm9vbGVhbilcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICk7XG4gIH1cblxuICAvKipcbiAgICogR2l2ZW4gbmF2aWdhdGlvbiBub2RlIHVpZCwgZ2V0IGl0ZW1zICh3aXRoIGlkIGFuZCB0eXBlKSBpbnNpZGUgdGhlIG5hdmlnYXRpb24gZW50cmllc1xuICAgKiBAcGFyYW0gbmF2aWdhdGlvbk5vZGVVaWQgOiB1aWQgb2YgdGhlIG5hdmlnYXRpb24gbm9kZVxuICAgKi9cbiAgZ2V0TmF2aWdhdGlvbkVudHJ5SXRlbXMobmF2aWdhdGlvbk5vZGVVaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8Tm9kZUl0ZW0+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KENtc1NlbGVjdG9ycy5nZXROYXZpZ2F0aW9uRW50cnlJdGVtcyhuYXZpZ2F0aW9uTm9kZVVpZCkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2FkIG5hdmlnYXRpb24gaXRlbXMgZGF0YVxuICAgKiBAcGFyYW0gcm9vdFVpZCA6IHRoZSB1aWQgb2YgdGhlIHJvb3QgbmF2aWdhdGlvbiBub2RlXG4gICAqIEBwYXJhbSBpdGVtTGlzdCA6IGxpc3Qgb2YgaXRlbXMgKHdpdGggaWQgYW5kIHR5cGUpXG4gICAqL1xuICBsb2FkTmF2aWdhdGlvbkl0ZW1zKFxuICAgIHJvb3RVaWQ6IHN0cmluZyxcbiAgICBpdGVtTGlzdDogeyBpZDogc3RyaW5nOyBzdXBlclR5cGU6IHN0cmluZyB9W11cbiAgKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBDbXNBY3Rpb25zLkxvYWRDbXNOYXZpZ2F0aW9uSXRlbXMoe1xuICAgICAgICBub2RlSWQ6IHJvb3RVaWQsXG4gICAgICAgIGl0ZW1zOiBpdGVtTGlzdCxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWZyZXNoIHRoZSBjb250ZW50IG9mIHRoZSBsYXRlc3QgY21zIHBhZ2VcbiAgICovXG4gIHJlZnJlc2hMYXRlc3RQYWdlKCk6IHZvaWQge1xuICAgIHRoaXMucm91dGluZ1NlcnZpY2VcbiAgICAgIC5nZXRQYWdlQ29udGV4dCgpXG4gICAgICAucGlwZSh0YWtlKDEpKVxuICAgICAgLnN1YnNjcmliZSgocGFnZUNvbnRleHQpID0+XG4gICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IENtc0FjdGlvbnMuTG9hZENtc1BhZ2VEYXRhKHBhZ2VDb250ZXh0KSlcbiAgICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmVmcmVzaCB0aGUgY21zIHBhZ2UgY29udGVudCBieSBwYWdlIElkXG4gICAqIEBwYXJhbSBwYWdlSWRcbiAgICovXG4gIHJlZnJlc2hQYWdlQnlJZChwYWdlSWQ6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCA9IHsgaWQ6IHBhZ2VJZCB9O1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IENtc0FjdGlvbnMuTG9hZENtc1BhZ2VEYXRhKHBhZ2VDb250ZXh0KSk7XG4gIH1cblxuICAvKipcbiAgICogUmVmcmVzaCBjbXMgY29tcG9uZW50J3MgY29udGVudFxuICAgKiBAcGFyYW0gdWlkIGNvbXBvbmVudCB1aWRcbiAgICogQHBhcmFtIHBhZ2VDb250ZXh0IGFuIG9wdGlvbmFsIHBhcmFtZXRlciB0aGF0IGVuYWJsZXMgdGhlIGNhbGxlciB0byBzcGVjaWZ5IGZvciB3aGljaCBjb250ZXh0IHRoZSBjb21wb25lbnQgc2hvdWxkIGJlIHJlZnJlc2hlZC5cbiAgICogSWYgbm90IHNwZWNpZmllZCwgJ2N1cnJlbnQnIHBhZ2UgY29udGV4dCBpcyB1c2VkLlxuICAgKi9cbiAgcmVmcmVzaENvbXBvbmVudCh1aWQ6IHN0cmluZywgcGFnZUNvbnRleHQ/OiBQYWdlQ29udGV4dCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IENtc0FjdGlvbnMuTG9hZENtc0NvbXBvbmVudCh7IHVpZCwgcGFnZUNvbnRleHQgfSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdpdmVuIHBhZ2VDb250ZXh0LCByZXR1cm4gdGhlIENNUyBwYWdlIGRhdGFcbiAgICogQHBhcmFtIHBhZ2VDb250ZXh0XG4gICAqL1xuICBnZXRQYWdlU3RhdGUocGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0KTogT2JzZXJ2YWJsZTxQYWdlPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoQ21zU2VsZWN0b3JzLmdldFBhZ2VEYXRhKHBhZ2VDb250ZXh0KSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdpdmVuIHBhZ2VDb250ZXh0LCByZXR1cm4gdGhlIENNUyBwYWdlIGRhdGFcbiAgICogQHBhcmFtIHBhZ2VDb250ZXh0XG4gICAqL1xuICBnZXRQYWdlQ29tcG9uZW50VHlwZXMocGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0KTogT2JzZXJ2YWJsZTxzdHJpbmdbXT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoQ21zU2VsZWN0b3JzLmdldFBhZ2VDb21wb25lbnRUeXBlcyhwYWdlQ29udGV4dCkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHaXZlbiBwYWdlQ29udGV4dCwgcmV0dXJuIHdoZXRoZXIgdGhlIENNUyBwYWdlIGRhdGEgZXhpc3RzIG9yIG5vdFxuICAgKiBAcGFyYW0gcGFnZUNvbnRleHRcbiAgICovXG4gIGhhc1BhZ2UocGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0LCBmb3JjZVJlbG9hZCA9IGZhbHNlKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChDbXNTZWxlY3RvcnMuZ2V0UGFnZVN0YXRlSW5kZXhMb2FkZXJTdGF0ZShwYWdlQ29udGV4dCkpLFxuICAgICAgdGFwKChlbnRpdHk6IExvYWRlclN0YXRlPHN0cmluZz4pID0+IHtcbiAgICAgICAgY29uc3QgYXR0ZW1wdGVkTG9hZCA9IGVudGl0eS5sb2FkaW5nIHx8IGVudGl0eS5zdWNjZXNzIHx8IGVudGl0eS5lcnJvcjtcbiAgICAgICAgY29uc3Qgc2hvdWxkUmVsb2FkID0gZm9yY2VSZWxvYWQgJiYgIWVudGl0eS5sb2FkaW5nO1xuICAgICAgICBpZiAoIWF0dGVtcHRlZExvYWQgfHwgc2hvdWxkUmVsb2FkKSB7XG4gICAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQ21zQWN0aW9ucy5Mb2FkQ21zUGFnZURhdGEocGFnZUNvbnRleHQpKTtcbiAgICAgICAgICBmb3JjZVJlbG9hZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIGZpbHRlcigoZW50aXR5KSA9PiB7XG4gICAgICAgIGlmICghZW50aXR5Lmhhc093blByb3BlcnR5KCd2YWx1ZScpKSB7XG4gICAgICAgICAgLy8gaWYgd2UgaGF2ZSBpbmNvbXBsZXRlIHN0YXRlIGZyb20gU1NSIGZhaWxlZCBsb2FkIHRyYW5zZmVyIHN0YXRlLFxuICAgICAgICAgIC8vIHdlIHNob3VsZCB3YWl0IGZvciByZWxvYWQgYW5kIGFjdHVhbCB2YWx1ZVxuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZW50aXR5LnN1Y2Nlc3MgfHwgKGVudGl0eS5lcnJvciAmJiAhZW50aXR5LmxvYWRpbmcpO1xuICAgICAgfSksXG4gICAgICBwbHVjaygnc3VjY2VzcycpLFxuICAgICAgY2F0Y2hFcnJvcigoKSA9PiBvZihmYWxzZSkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHaXZlbiBwYWdlQ29udGV4dCwgcmV0dXJuIHRoZSBDTVMgcGFnZSBkYXRhXG4gICAqKi9cbiAgZ2V0UGFnZShwYWdlQ29udGV4dDogUGFnZUNvbnRleHQsIGZvcmNlUmVsb2FkID0gZmFsc2UpOiBPYnNlcnZhYmxlPFBhZ2U+IHtcbiAgICByZXR1cm4gdGhpcy5oYXNQYWdlKHBhZ2VDb250ZXh0LCBmb3JjZVJlbG9hZCkucGlwZShcbiAgICAgIHN3aXRjaE1hcCgoaGFzUGFnZSkgPT5cbiAgICAgICAgaGFzUGFnZSA/IHRoaXMuZ2V0UGFnZVN0YXRlKHBhZ2VDb250ZXh0KSA6IG9mKG51bGwpXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIGdldFBhZ2VJbmRleChwYWdlQ29udGV4dDogUGFnZUNvbnRleHQpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoQ21zU2VsZWN0b3JzLmdldFBhZ2VTdGF0ZUluZGV4VmFsdWUocGFnZUNvbnRleHQpKVxuICAgICk7XG4gIH1cblxuICBzZXRQYWdlRmFpbEluZGV4KHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCwgdmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IENtc0FjdGlvbnMuQ21zU2V0UGFnZUZhaWxJbmRleChwYWdlQ29udGV4dCwgdmFsdWUpKTtcbiAgfVxufVxuIl19
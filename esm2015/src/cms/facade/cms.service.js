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
        return this.routingService.getPageContext().pipe(switchMap(pageContext => this.store.pipe(select(CmsSelectors.getCurrentSlotSelectorFactory(pageContext, position)), filter(Boolean))));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL2ZhY2FkZS9jbXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM1QyxPQUFPLEVBQUUsYUFBYSxFQUFjLEVBQUUsRUFBRSxjQUFjLEVBQUUsS0FBSyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzVFLE9BQU8sRUFDTCxVQUFVLEVBQ1YsTUFBTSxFQUNOLFNBQVMsRUFDVCxLQUFLLEVBQ0wsV0FBVyxFQUNYLFNBQVMsRUFDVCxJQUFJLEVBQ0osR0FBRyxHQUNKLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEIsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBTXRFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUVwRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDeEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7QUFLMUQsSUFBYSxVQUFVLEdBQXZCLE1BQWEsVUFBVTtJQVNyQixZQUNZLEtBQTBCLEVBQzFCLGNBQThCO1FBRDlCLFVBQUssR0FBTCxLQUFLLENBQXFCO1FBQzFCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQVZsQyx1QkFBa0IsR0FBRyxLQUFLLENBQUM7UUFFM0IsZUFBVSxHQUlkLEVBQUUsQ0FBQztJQUtKLENBQUM7SUFFSjs7T0FFRztJQUNILElBQUksaUJBQWlCLENBQUMsS0FBYztRQUNsQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO0lBQ2xDLENBQUM7SUFFRDs7T0FFRztJQUNILG1CQUFtQjtRQUNqQixPQUFPLElBQUks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QUMsSUFBSSxDQUNoRCxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FDbEIsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQ3BELENBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRCxZQUFZLENBQUMsV0FBd0I7UUFDbkMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUN6RCxDQUFDO0lBQ0osQ0FBQztJQUVELGdCQUFnQixDQUFDLFdBQXdCLEVBQUUsS0FBYTtRQUN0RCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUM5RSxDQUFDO0NBQ0YsQ0FBQTs7WUFuUW9CLEtBQUs7WUFDSSxjQUFjOzs7QUFYL0IsVUFBVTtJQUh0QixVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDO0dBQ1csVUFBVSxDQTZRdEI7U0E3UVksVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlLCBvZiwgcXVldWVTY2hlZHVsZXIsIHVzaW5nIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBjYXRjaEVycm9yLFxuICBmaWx0ZXIsXG4gIG9ic2VydmVPbixcbiAgcGx1Y2ssXG4gIHNoYXJlUmVwbGF5LFxuICBzd2l0Y2hNYXAsXG4gIHRha2UsXG4gIHRhcCxcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vbW9kZWwvY21zLm1vZGVsJztcbmltcG9ydCB7IFJvdXRpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vcm91dGluZy9mYWNhZGUvcm91dGluZy5zZXJ2aWNlJztcbmltcG9ydCB7IFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vLi4vcm91dGluZy9tb2RlbHMvcGFnZS1jb250ZXh0Lm1vZGVsJztcbmltcG9ydCB7IExvYWRlclN0YXRlIH0gZnJvbSAnLi4vLi4vc3RhdGUvdXRpbHMvbG9hZGVyL2xvYWRlci1zdGF0ZSc7XG5pbXBvcnQgeyBDb250ZW50U2xvdERhdGEgfSBmcm9tICcuLi9tb2RlbC9jb250ZW50LXNsb3QtZGF0YS5tb2RlbCc7XG5pbXBvcnQgeyBOb2RlSXRlbSB9IGZyb20gJy4uL21vZGVsL25vZGUtaXRlbS5tb2RlbCc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAnLi4vbW9kZWwvcGFnZS5tb2RlbCc7XG5pbXBvcnQgeyBDbXNBY3Rpb25zIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhDbXMgfSBmcm9tICcuLi9zdG9yZS9jbXMtc3RhdGUnO1xuaW1wb3J0IHsgQ21zU2VsZWN0b3JzIH0gZnJvbSAnLi4vc3RvcmUvc2VsZWN0b3JzL2luZGV4JztcbmltcG9ydCB7IHNlcmlhbGl6ZVBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vdXRpbHMvY21zLXV0aWxzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENtc1NlcnZpY2Uge1xuICBwcml2YXRlIF9sYXVuY2hJblNtYXJ0RWRpdCA9IGZhbHNlO1xuXG4gIHByaXZhdGUgY29tcG9uZW50czoge1xuICAgIFt1aWQ6IHN0cmluZ106IHtcbiAgICAgIFtwYWdlQ29udGV4dDogc3RyaW5nXTogT2JzZXJ2YWJsZTxDbXNDb21wb25lbnQ+O1xuICAgIH07XG4gIH0gPSB7fTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aENtcz4sXG4gICAgcHJvdGVjdGVkIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZVxuICApIHt9XG5cbiAgLyoqXG4gICAqIFNldCBfbGF1bmNoSW5TbWFydEVkaXQgdmFsdWVcbiAgICovXG4gIHNldCBsYXVuY2hJblNtYXJ0RWRpdCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2xhdW5jaEluU21hcnRFZGl0ID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogV2hldGhlciB0aGUgYXBwIGxhdW5jaGVkIGluIHNtYXJ0IGVkaXRcbiAgICovXG4gIGlzTGF1bmNoSW5TbWFydEVkaXQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2xhdW5jaEluU21hcnRFZGl0O1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjdXJyZW50IENNUyBwYWdlIGRhdGFcbiAgICovXG4gIGdldEN1cnJlbnRQYWdlKCk6IE9ic2VydmFibGU8UGFnZT4ge1xuICAgIHJldHVybiB0aGlzLnJvdXRpbmdTZXJ2aWNlXG4gICAgICAuZ2V0UGFnZUNvbnRleHQoKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHN3aXRjaE1hcChwYWdlQ29udGV4dCA9PlxuICAgICAgICAgIHRoaXMuc3RvcmUuc2VsZWN0KENtc1NlbGVjdG9ycy5nZXRQYWdlRGF0YShwYWdlQ29udGV4dCkpXG4gICAgICAgIClcbiAgICAgICk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IENNUyBjb21wb25lbnQgZGF0YSBieSB1aWRcbiAgICpcbiAgICogVGhpcyBtZXRob2QgY2FuIGJlIHNhZmVseSBhbmQgb3B0aW1hbGx5IHVzZWQgdG8gbG9hZCBtdWx0aXBsZSBjb21wb25lbnRzIGRhdGEgYXQgdGhlIHNhbWUgdGltZS5cbiAgICogQ2FsbGluZyBnZXRDb21wb25lbnREYXRhIG11bHRpcGxlIHRpbWVzIGZvciBkaWZmZXJlbnQgY29tcG9uZW50cyB3aWxsIGFsd2F5cyByZXN1bHQgaW4gb3B0aW1pemVkXG4gICAqIGJhY2stZW5kIHJlcXVlc3Q6IGFsbCBjb21wb25lbnRzIHJlcXVlc3RlZCBhdCB0aGUgc2FtZSB0aW1lIChpbiBvbmUgZXZlbnQgbG9vcCkgd2lsbCBiZSBsb2FkZWQgaW4gb25lIG5ldHdvcmsgY2FsbC5cbiAgICpcbiAgICogSW4gY2FzZSB0aGUgY29tcG9uZW50IGRhdGEgaXMgbm90IHByZXNlbnQsIHRoZSBtZXRob2Qgd2lsbCBsb2FkIGl0LlxuICAgKiBPdGhlcndpc2UsIGlmIHRoZSBwYWdlIGNvbnRleHQgaXMgbm90IHByb3ZpZGVkLCB0aGUgY3VycmVudCBwYWdlIGNvbnRleHQgZnJvbSB0aGUgcm91dGVyIHN0YXRlIHdpbGwgYmUgdXNlZCBpbnN0ZWFkLlxuICAgKlxuICAgKiBAcGFyYW0gdWlkIENNUyBjb21wb25lbnQgdWlkXG4gICAqIEBwYXJhbSBwYWdlQ29udGV4dCBpZiBwcm92aWRlZCwgaXQgd2lsbCBiZSB1c2VkIHRvIGxvb2t1cCB0aGUgY29tcG9uZW50IGRhdGEuXG4gICAqL1xuICBnZXRDb21wb25lbnREYXRhPFQgZXh0ZW5kcyBDbXNDb21wb25lbnQ+KFxuICAgIHVpZDogc3RyaW5nLFxuICAgIHBhZ2VDb250ZXh0PzogUGFnZUNvbnRleHRcbiAgKTogT2JzZXJ2YWJsZTxUPiB7XG4gICAgY29uc3QgY29udGV4dCA9IHNlcmlhbGl6ZVBhZ2VDb250ZXh0KHBhZ2VDb250ZXh0LCB0cnVlKTtcbiAgICBpZiAoIXRoaXMuY29tcG9uZW50c1t1aWRdKSB7XG4gICAgICAvLyBjcmVhdGUgdGhlIGNvbXBvbmVudCBkYXRhIHN0cnVjdHVyZSwgaWYgaXQgZG9lc24ndCBhbHJlYWR5IGV4aXN0XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdWlkXSA9IHt9O1xuICAgIH1cblxuICAgIGNvbnN0IGNvbXBvbmVudCA9IHRoaXMuY29tcG9uZW50c1t1aWRdO1xuICAgIGlmICghY29tcG9uZW50W2NvbnRleHRdKSB7XG4gICAgICAvLyBjcmVhdGUgdGhlIGNvbXBvbmVudCBkYXRhIGFuZCBhc3NpZ24gaXQgdG8gdGhlIGNvbXBvbmVudCdzIGNvbnRleHRcbiAgICAgIGNvbXBvbmVudFtjb250ZXh0XSA9IHRoaXMuY3JlYXRlQ29tcG9uZW50RGF0YSh1aWQsIHBhZ2VDb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50W2NvbnRleHRdIGFzIE9ic2VydmFibGU8VD47XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUNvbXBvbmVudERhdGE8VCBleHRlbmRzIENtc0NvbXBvbmVudD4oXG4gICAgdWlkOiBzdHJpbmcsXG4gICAgcGFnZUNvbnRleHQ/OiBQYWdlQ29udGV4dFxuICApOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICBpZiAoIXBhZ2VDb250ZXh0KSB7XG4gICAgICByZXR1cm4gdGhpcy5yb3V0aW5nU2VydmljZS5nZXRQYWdlQ29udGV4dCgpLnBpcGUoXG4gICAgICAgIGZpbHRlcihjdXJyZW50Q29udGV4dCA9PiAhIWN1cnJlbnRDb250ZXh0KSxcbiAgICAgICAgc3dpdGNoTWFwKGN1cnJlbnRDb250ZXh0ID0+XG4gICAgICAgICAgdGhpcy5nZXRDb21wb25lbnREYXRhPFQ+KHVpZCwgY3VycmVudENvbnRleHQpXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuXG4gICAgY29uc3QgY29udGV4dCA9IHNlcmlhbGl6ZVBhZ2VDb250ZXh0KHBhZ2VDb250ZXh0LCB0cnVlKTtcblxuICAgIGNvbnN0IGxvYWRpbmckID0gY29tYmluZUxhdGVzdChbXG4gICAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdldE5leHRQYWdlQ29udGV4dCgpLFxuICAgICAgdGhpcy5zdG9yZS5waXBlKFxuICAgICAgICBzZWxlY3QoQ21zU2VsZWN0b3JzLmNvbXBvbmVudHNMb2FkZXJTdGF0ZVNlbGVjdG9yRmFjdG9yeSh1aWQsIGNvbnRleHQpKVxuICAgICAgKSxcbiAgICBdKS5waXBlKFxuICAgICAgb2JzZXJ2ZU9uKHF1ZXVlU2NoZWR1bGVyKSxcbiAgICAgIHRhcCgoW25leHRDb250ZXh0LCBsb2FkaW5nU3RhdGVdKSA9PiB7XG4gICAgICAgIGNvbnN0IGF0dGVtcHRlZExvYWQgPVxuICAgICAgICAgIGxvYWRpbmdTdGF0ZS5sb2FkaW5nIHx8IGxvYWRpbmdTdGF0ZS5zdWNjZXNzIHx8IGxvYWRpbmdTdGF0ZS5lcnJvcjtcbiAgICAgICAgLy8gaWYgdGhlIHJlcXVlc3RlZCBjb250ZXh0IGlzIHRoZSBzYW1lIGFzIHRoZSBvbmUgdGhhdCdzIGN1cnJlbnRseSBiZWluZyBuYXZpZ2F0ZWQgdG9cbiAgICAgICAgLy8gKGFzIGl0IG1pZ2h0IGFscmVhZHkgYmVlbiB0cmlnZ2VyZWQgYW5kIG1pZ2h0IGJlIGF2YWlsYWJsZSBzaG9ydGx5IGZyb20gcGFnZSBkYXRhKVxuICAgICAgICAvLyBUT0RPKGlzc3VlOjM2NDkpLCBUT0RPKGlzc3VlOjM2NjgpIC0gdGhpcyBvcHRpbWl6YXRpb24gY291bGQgYmUgcmVtb3ZlZFxuICAgICAgICBjb25zdCBjb3VsZEJlTG9hZGVkV2l0aFBhZ2VEYXRhID0gbmV4dENvbnRleHRcbiAgICAgICAgICA/IHNlcmlhbGl6ZVBhZ2VDb250ZXh0KG5leHRDb250ZXh0LCB0cnVlKSA9PT0gY29udGV4dFxuICAgICAgICAgIDogZmFsc2U7XG5cbiAgICAgICAgaWYgKCFhdHRlbXB0ZWRMb2FkICYmICFjb3VsZEJlTG9hZGVkV2l0aFBhZ2VEYXRhKSB7XG4gICAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgICAgICAgIG5ldyBDbXNBY3Rpb25zLkxvYWRDbXNDb21wb25lbnQoeyB1aWQsIHBhZ2VDb250ZXh0IH0pXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuXG4gICAgY29uc3QgY29tcG9uZW50JCA9IHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChDbXNTZWxlY3RvcnMuY29tcG9uZW50c1NlbGVjdG9yRmFjdG9yeSh1aWQsIGNvbnRleHQpKSxcbiAgICAgIC8vIFRPRE8oaXNzdWU6NjQzMSkgLSB0aGlzIGBmaWx0ZXJgIHNob3VsZCBiZSByZW1vdmVkLlxuICAgICAgLy8gVGhlIHJlYXNvbiBmb3IgcmVtb3ZhbDogd2l0aCBgZmlsdGVyYCBpbiBwbGFjZSwgd2hlbiBtb3ZpbmcgdG8gYSBwYWdlIHRoYXQgaGFzIHJlc3RyaWN0aW9ucywgdGhlIGNvbXBvbmVudCBkYXRhIHdpbGwgc3RpbGwgZW1pdCB0aGUgcHJldmlvdXMgdmFsdWUuXG4gICAgICAvLyBSZW1vdmluZyBpdCBjYXVzZXMgc29tZSBjb21wb25lbnRzIHRvIGZhaWwsIGJlY2F1c2UgdGhleSBhcmUgbm90IGNoZWNraW5nXG4gICAgICAvLyBpZiB0aGUgZGF0YSBpcyBhY3R1YWxseSB0aGVyZS4gSSBub3RpY2VkIHRoZXNlIHRoYXQgdGhpcyBjb21wb25lbnQgaXMgZmFpbGluZywgYnV0IHRoZXJlIGFyZSBwb3NzaWJseSBtb3JlOlxuICAgICAgLy8gLSBgdGFiLXBhcmFncmFwaC1jb250YWluZXIuY29tcG9uZW50LnRzYCB3aGVuIHZpc2l0aW5nIGFueSBQRFAgcGFnZVxuICAgICAgZmlsdGVyKGNvbXBvbmVudCA9PiAhIWNvbXBvbmVudClcbiAgICApIGFzIE9ic2VydmFibGU8VD47XG5cbiAgICByZXR1cm4gdXNpbmcoKCkgPT4gbG9hZGluZyQuc3Vic2NyaWJlKCksICgpID0+IGNvbXBvbmVudCQpLnBpcGUoXG4gICAgICBzaGFyZVJlcGxheSh7IGJ1ZmZlclNpemU6IDEsIHJlZkNvdW50OiB0cnVlIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHaXZlbiB0aGUgcG9zaXRpb24sIGdldCB0aGUgY29udGVudCBzbG90IGRhdGFcbiAgICogQHBhcmFtIHBvc2l0aW9uIDogY29udGVudCBzbG90IHBvc2l0aW9uXG4gICAqL1xuICBnZXRDb250ZW50U2xvdChwb3NpdGlvbjogc3RyaW5nKTogT2JzZXJ2YWJsZTxDb250ZW50U2xvdERhdGE+IHtcbiAgICByZXR1cm4gdGhpcy5yb3V0aW5nU2VydmljZS5nZXRQYWdlQ29udGV4dCgpLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAocGFnZUNvbnRleHQgPT5cbiAgICAgICAgdGhpcy5zdG9yZS5waXBlKFxuICAgICAgICAgIHNlbGVjdChcbiAgICAgICAgICAgIENtc1NlbGVjdG9ycy5nZXRDdXJyZW50U2xvdFNlbGVjdG9yRmFjdG9yeShwYWdlQ29udGV4dCwgcG9zaXRpb24pXG4gICAgICAgICAgKSxcbiAgICAgICAgICBmaWx0ZXIoQm9vbGVhbilcbiAgICAgICAgKVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogR2l2ZW4gbmF2aWdhdGlvbiBub2RlIHVpZCwgZ2V0IGl0ZW1zICh3aXRoIGlkIGFuZCB0eXBlKSBpbnNpZGUgdGhlIG5hdmlnYXRpb24gZW50cmllc1xuICAgKiBAcGFyYW0gbmF2aWdhdGlvbk5vZGVVaWQgOiB1aWQgb2YgdGhlIG5hdmlnYXRpb24gbm9kZVxuICAgKi9cbiAgZ2V0TmF2aWdhdGlvbkVudHJ5SXRlbXMobmF2aWdhdGlvbk5vZGVVaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8Tm9kZUl0ZW0+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KENtc1NlbGVjdG9ycy5nZXROYXZpZ2F0aW9uRW50cnlJdGVtcyhuYXZpZ2F0aW9uTm9kZVVpZCkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2FkIG5hdmlnYXRpb24gaXRlbXMgZGF0YVxuICAgKiBAcGFyYW0gcm9vdFVpZCA6IHRoZSB1aWQgb2YgdGhlIHJvb3QgbmF2aWdhdGlvbiBub2RlXG4gICAqIEBwYXJhbSBpdGVtTGlzdCA6IGxpc3Qgb2YgaXRlbXMgKHdpdGggaWQgYW5kIHR5cGUpXG4gICAqL1xuICBsb2FkTmF2aWdhdGlvbkl0ZW1zKFxuICAgIHJvb3RVaWQ6IHN0cmluZyxcbiAgICBpdGVtTGlzdDogeyBpZDogc3RyaW5nOyBzdXBlclR5cGU6IHN0cmluZyB9W11cbiAgKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBDbXNBY3Rpb25zLkxvYWRDbXNOYXZpZ2F0aW9uSXRlbXMoe1xuICAgICAgICBub2RlSWQ6IHJvb3RVaWQsXG4gICAgICAgIGl0ZW1zOiBpdGVtTGlzdCxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWZyZXNoIHRoZSBjb250ZW50IG9mIHRoZSBsYXRlc3QgY21zIHBhZ2VcbiAgICovXG4gIHJlZnJlc2hMYXRlc3RQYWdlKCk6IHZvaWQge1xuICAgIHRoaXMucm91dGluZ1NlcnZpY2VcbiAgICAgIC5nZXRQYWdlQ29udGV4dCgpXG4gICAgICAucGlwZSh0YWtlKDEpKVxuICAgICAgLnN1YnNjcmliZShwYWdlQ29udGV4dCA9PlxuICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDbXNBY3Rpb25zLkxvYWRDbXNQYWdlRGF0YShwYWdlQ29udGV4dCkpXG4gICAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZnJlc2ggdGhlIGNtcyBwYWdlIGNvbnRlbnQgYnkgcGFnZSBJZFxuICAgKiBAcGFyYW0gcGFnZUlkXG4gICAqL1xuICByZWZyZXNoUGFnZUJ5SWQocGFnZUlkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBwYWdlQ29udGV4dDogUGFnZUNvbnRleHQgPSB7IGlkOiBwYWdlSWQgfTtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDbXNBY3Rpb25zLkxvYWRDbXNQYWdlRGF0YShwYWdlQ29udGV4dCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZnJlc2ggY21zIGNvbXBvbmVudCdzIGNvbnRlbnRcbiAgICogQHBhcmFtIHVpZCBjb21wb25lbnQgdWlkXG4gICAqIEBwYXJhbSBwYWdlQ29udGV4dCBhbiBvcHRpb25hbCBwYXJhbWV0ZXIgdGhhdCBlbmFibGVzIHRoZSBjYWxsZXIgdG8gc3BlY2lmeSBmb3Igd2hpY2ggY29udGV4dCB0aGUgY29tcG9uZW50IHNob3VsZCBiZSByZWZyZXNoZWQuXG4gICAqIElmIG5vdCBzcGVjaWZpZWQsICdjdXJyZW50JyBwYWdlIGNvbnRleHQgaXMgdXNlZC5cbiAgICovXG4gIHJlZnJlc2hDb21wb25lbnQodWlkOiBzdHJpbmcsIHBhZ2VDb250ZXh0PzogUGFnZUNvbnRleHQpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDbXNBY3Rpb25zLkxvYWRDbXNDb21wb25lbnQoeyB1aWQsIHBhZ2VDb250ZXh0IH0pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHaXZlbiBwYWdlQ29udGV4dCwgcmV0dXJuIHRoZSBDTVMgcGFnZSBkYXRhXG4gICAqIEBwYXJhbSBwYWdlQ29udGV4dFxuICAgKi9cbiAgZ2V0UGFnZVN0YXRlKHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCk6IE9ic2VydmFibGU8UGFnZT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KENtc1NlbGVjdG9ycy5nZXRQYWdlRGF0YShwYWdlQ29udGV4dCkpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHaXZlbiBwYWdlQ29udGV4dCwgcmV0dXJuIHRoZSBDTVMgcGFnZSBkYXRhXG4gICAqIEBwYXJhbSBwYWdlQ29udGV4dFxuICAgKi9cbiAgZ2V0UGFnZUNvbXBvbmVudFR5cGVzKHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCk6IE9ic2VydmFibGU8c3RyaW5nW10+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KENtc1NlbGVjdG9ycy5nZXRQYWdlQ29tcG9uZW50VHlwZXMocGFnZUNvbnRleHQpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogR2l2ZW4gcGFnZUNvbnRleHQsIHJldHVybiB3aGV0aGVyIHRoZSBDTVMgcGFnZSBkYXRhIGV4aXN0cyBvciBub3RcbiAgICogQHBhcmFtIHBhZ2VDb250ZXh0XG4gICAqL1xuICBoYXNQYWdlKHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCwgZm9yY2VSZWxvYWQgPSBmYWxzZSk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoQ21zU2VsZWN0b3JzLmdldFBhZ2VTdGF0ZUluZGV4TG9hZGVyU3RhdGUocGFnZUNvbnRleHQpKSxcbiAgICAgIHRhcCgoZW50aXR5OiBMb2FkZXJTdGF0ZTxzdHJpbmc+KSA9PiB7XG4gICAgICAgIGNvbnN0IGF0dGVtcHRlZExvYWQgPSBlbnRpdHkubG9hZGluZyB8fCBlbnRpdHkuc3VjY2VzcyB8fCBlbnRpdHkuZXJyb3I7XG4gICAgICAgIGNvbnN0IHNob3VsZFJlbG9hZCA9IGZvcmNlUmVsb2FkICYmICFlbnRpdHkubG9hZGluZztcbiAgICAgICAgaWYgKCFhdHRlbXB0ZWRMb2FkIHx8IHNob3VsZFJlbG9hZCkge1xuICAgICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IENtc0FjdGlvbnMuTG9hZENtc1BhZ2VEYXRhKHBhZ2VDb250ZXh0KSk7XG4gICAgICAgICAgZm9yY2VSZWxvYWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBmaWx0ZXIoZW50aXR5ID0+IHtcbiAgICAgICAgaWYgKCFlbnRpdHkuaGFzT3duUHJvcGVydHkoJ3ZhbHVlJykpIHtcbiAgICAgICAgICAvLyBpZiB3ZSBoYXZlIGluY29tcGxldGUgc3RhdGUgZnJvbSBTU1IgZmFpbGVkIGxvYWQgdHJhbnNmZXIgc3RhdGUsXG4gICAgICAgICAgLy8gd2Ugc2hvdWxkIHdhaXQgZm9yIHJlbG9hZCBhbmQgYWN0dWFsIHZhbHVlXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbnRpdHkuc3VjY2VzcyB8fCAoZW50aXR5LmVycm9yICYmICFlbnRpdHkubG9hZGluZyk7XG4gICAgICB9KSxcbiAgICAgIHBsdWNrKCdzdWNjZXNzJyksXG4gICAgICBjYXRjaEVycm9yKCgpID0+IG9mKGZhbHNlKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdpdmVuIHBhZ2VDb250ZXh0LCByZXR1cm4gdGhlIENNUyBwYWdlIGRhdGFcbiAgICoqL1xuICBnZXRQYWdlKHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCwgZm9yY2VSZWxvYWQgPSBmYWxzZSk6IE9ic2VydmFibGU8UGFnZT4ge1xuICAgIHJldHVybiB0aGlzLmhhc1BhZ2UocGFnZUNvbnRleHQsIGZvcmNlUmVsb2FkKS5waXBlKFxuICAgICAgc3dpdGNoTWFwKGhhc1BhZ2UgPT5cbiAgICAgICAgaGFzUGFnZSA/IHRoaXMuZ2V0UGFnZVN0YXRlKHBhZ2VDb250ZXh0KSA6IG9mKG51bGwpXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIGdldFBhZ2VJbmRleChwYWdlQ29udGV4dDogUGFnZUNvbnRleHQpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoQ21zU2VsZWN0b3JzLmdldFBhZ2VTdGF0ZUluZGV4VmFsdWUocGFnZUNvbnRleHQpKVxuICAgICk7XG4gIH1cblxuICBzZXRQYWdlRmFpbEluZGV4KHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCwgdmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IENtc0FjdGlvbnMuQ21zU2V0UGFnZUZhaWxJbmRleChwYWdlQ29udGV4dCwgdmFsdWUpKTtcbiAgfVxufVxuIl19
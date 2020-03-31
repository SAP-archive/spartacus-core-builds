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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL2ZhY2FkZS9jbXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM1QyxPQUFPLEVBQUUsYUFBYSxFQUFjLEVBQUUsRUFBRSxjQUFjLEVBQUUsS0FBSyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzVFLE9BQU8sRUFDTCxVQUFVLEVBQ1YsTUFBTSxFQUNOLFNBQVMsRUFDVCxLQUFLLEVBQ0wsV0FBVyxFQUNYLFNBQVMsRUFDVCxJQUFJLEVBQ0osR0FBRyxHQUNKLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEIsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBTXRFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUVwRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDeEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7QUFLMUQsSUFBYSxVQUFVLEdBQXZCLE1BQWEsVUFBVTtJQVNyQixZQUNZLEtBQTBCLEVBQzFCLGNBQThCO1FBRDlCLFVBQUssR0FBTCxLQUFLLENBQXFCO1FBQzFCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQVZsQyx1QkFBa0IsR0FBRyxLQUFLLENBQUM7UUFFM0IsZUFBVSxHQUlkLEVBQUUsQ0FBQztJQUtKLENBQUM7SUFFSjs7T0FFRztJQUNILElBQUksaUJBQWlCLENBQUMsS0FBYztRQUNsQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO0lBQ2xDLENBQUM7SUFFRDs7T0FFRztJQUNILG1CQUFtQjtRQUNqQixPQUFPLElBQUks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LENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQ2hELFNBQVMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQ3BCLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUNwRCxDQUNGLENBQUM7SUFDSixDQUFDO0lBRUQsWUFBWSxDQUFDLFdBQXdCO1FBQ25DLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxZQUFZLENBQUMsc0JBQXNCLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FDekQsQ0FBQztJQUNKLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxXQUF3QixFQUFFLEtBQWE7UUFDdEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxVQUFVLENBQUMsbUJBQW1CLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDOUUsQ0FBQztDQUNGLENBQUE7O1lBdFFvQixLQUFLO1lBQ0ksY0FBYzs7O0FBWC9CLFVBQVU7SUFIdEIsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztHQUNXLFVBQVUsQ0FnUnRCO1NBaFJZLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSwgb2YsIHF1ZXVlU2NoZWR1bGVyLCB1c2luZyB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgY2F0Y2hFcnJvcixcbiAgZmlsdGVyLFxuICBvYnNlcnZlT24sXG4gIHBsdWNrLFxuICBzaGFyZVJlcGxheSxcbiAgc3dpdGNoTWFwLFxuICB0YWtlLFxuICB0YXAsXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENtc0NvbXBvbmVudCB9IGZyb20gJy4uLy4uL21vZGVsL2Ntcy5tb2RlbCc7XG5pbXBvcnQgeyBSb3V0aW5nU2VydmljZSB9IGZyb20gJy4uLy4uL3JvdXRpbmcvZmFjYWRlL3JvdXRpbmcuc2VydmljZSc7XG5pbXBvcnQgeyBQYWdlQ29udGV4dCB9IGZyb20gJy4uLy4uL3JvdXRpbmcvbW9kZWxzL3BhZ2UtY29udGV4dC5tb2RlbCc7XG5pbXBvcnQgeyBMb2FkZXJTdGF0ZSB9IGZyb20gJy4uLy4uL3N0YXRlL3V0aWxzL2xvYWRlci9sb2FkZXItc3RhdGUnO1xuaW1wb3J0IHsgQ29udGVudFNsb3REYXRhIH0gZnJvbSAnLi4vbW9kZWwvY29udGVudC1zbG90LWRhdGEubW9kZWwnO1xuaW1wb3J0IHsgTm9kZUl0ZW0gfSBmcm9tICcuLi9tb2RlbC9ub2RlLWl0ZW0ubW9kZWwnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJy4uL21vZGVsL3BhZ2UubW9kZWwnO1xuaW1wb3J0IHsgQ21zQWN0aW9ucyB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgU3RhdGVXaXRoQ21zIH0gZnJvbSAnLi4vc3RvcmUvY21zLXN0YXRlJztcbmltcG9ydCB7IENtc1NlbGVjdG9ycyB9IGZyb20gJy4uL3N0b3JlL3NlbGVjdG9ycy9pbmRleCc7XG5pbXBvcnQgeyBzZXJpYWxpemVQYWdlQ29udGV4dCB9IGZyb20gJy4uL3V0aWxzL2Ntcy11dGlscyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDbXNTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfbGF1bmNoSW5TbWFydEVkaXQgPSBmYWxzZTtcblxuICBwcml2YXRlIGNvbXBvbmVudHM6IHtcbiAgICBbdWlkOiBzdHJpbmddOiB7XG4gICAgICBbcGFnZUNvbnRleHQ6IHN0cmluZ106IE9ic2VydmFibGU8Q21zQ29tcG9uZW50PjtcbiAgICB9O1xuICB9ID0ge307XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhDbXM+LFxuICAgIHByb3RlY3RlZCByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2VcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBTZXQgX2xhdW5jaEluU21hcnRFZGl0IHZhbHVlXG4gICAqL1xuICBzZXQgbGF1bmNoSW5TbWFydEVkaXQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9sYXVuY2hJblNtYXJ0RWRpdCA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhlIGFwcCBsYXVuY2hlZCBpbiBzbWFydCBlZGl0XG4gICAqL1xuICBpc0xhdW5jaEluU21hcnRFZGl0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9sYXVuY2hJblNtYXJ0RWRpdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY3VycmVudCBDTVMgcGFnZSBkYXRhXG4gICAqL1xuICBnZXRDdXJyZW50UGFnZSgpOiBPYnNlcnZhYmxlPFBhZ2U+IHtcbiAgICByZXR1cm4gdGhpcy5yb3V0aW5nU2VydmljZVxuICAgICAgLmdldFBhZ2VDb250ZXh0KClcbiAgICAgIC5waXBlKFxuICAgICAgICBzd2l0Y2hNYXAoKHBhZ2VDb250ZXh0KSA9PlxuICAgICAgICAgIHRoaXMuc3RvcmUuc2VsZWN0KENtc1NlbGVjdG9ycy5nZXRQYWdlRGF0YShwYWdlQ29udGV4dCkpXG4gICAgICAgIClcbiAgICAgICk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IENNUyBjb21wb25lbnQgZGF0YSBieSB1aWRcbiAgICpcbiAgICogVGhpcyBtZXRob2QgY2FuIGJlIHNhZmVseSBhbmQgb3B0aW1hbGx5IHVzZWQgdG8gbG9hZCBtdWx0aXBsZSBjb21wb25lbnRzIGRhdGEgYXQgdGhlIHNhbWUgdGltZS5cbiAgICogQ2FsbGluZyBnZXRDb21wb25lbnREYXRhIG11bHRpcGxlIHRpbWVzIGZvciBkaWZmZXJlbnQgY29tcG9uZW50cyB3aWxsIGFsd2F5cyByZXN1bHQgaW4gb3B0aW1pemVkXG4gICAqIGJhY2stZW5kIHJlcXVlc3Q6IGFsbCBjb21wb25lbnRzIHJlcXVlc3RlZCBhdCB0aGUgc2FtZSB0aW1lIChpbiBvbmUgZXZlbnQgbG9vcCkgd2lsbCBiZSBsb2FkZWQgaW4gb25lIG5ldHdvcmsgY2FsbC5cbiAgICpcbiAgICogSW4gY2FzZSB0aGUgY29tcG9uZW50IGRhdGEgaXMgbm90IHByZXNlbnQsIHRoZSBtZXRob2Qgd2lsbCBsb2FkIGl0LlxuICAgKiBPdGhlcndpc2UsIGlmIHRoZSBwYWdlIGNvbnRleHQgaXMgbm90IHByb3ZpZGVkLCB0aGUgY3VycmVudCBwYWdlIGNvbnRleHQgZnJvbSB0aGUgcm91dGVyIHN0YXRlIHdpbGwgYmUgdXNlZCBpbnN0ZWFkLlxuICAgKlxuICAgKiBAcGFyYW0gdWlkIENNUyBjb21wb25lbnQgdWlkXG4gICAqIEBwYXJhbSBwYWdlQ29udGV4dCBpZiBwcm92aWRlZCwgaXQgd2lsbCBiZSB1c2VkIHRvIGxvb2t1cCB0aGUgY29tcG9uZW50IGRhdGEuXG4gICAqL1xuICBnZXRDb21wb25lbnREYXRhPFQgZXh0ZW5kcyBDbXNDb21wb25lbnQ+KFxuICAgIHVpZDogc3RyaW5nLFxuICAgIHBhZ2VDb250ZXh0PzogUGFnZUNvbnRleHRcbiAgKTogT2JzZXJ2YWJsZTxUPiB7XG4gICAgY29uc3QgY29udGV4dCA9IHNlcmlhbGl6ZVBhZ2VDb250ZXh0KHBhZ2VDb250ZXh0LCB0cnVlKTtcbiAgICBpZiAoIXRoaXMuY29tcG9uZW50c1t1aWRdKSB7XG4gICAgICAvLyBjcmVhdGUgdGhlIGNvbXBvbmVudCBkYXRhIHN0cnVjdHVyZSwgaWYgaXQgZG9lc24ndCBhbHJlYWR5IGV4aXN0XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdWlkXSA9IHt9O1xuICAgIH1cblxuICAgIGNvbnN0IGNvbXBvbmVudCA9IHRoaXMuY29tcG9uZW50c1t1aWRdO1xuICAgIGlmICghY29tcG9uZW50W2NvbnRleHRdKSB7XG4gICAgICAvLyBjcmVhdGUgdGhlIGNvbXBvbmVudCBkYXRhIGFuZCBhc3NpZ24gaXQgdG8gdGhlIGNvbXBvbmVudCdzIGNvbnRleHRcbiAgICAgIGNvbXBvbmVudFtjb250ZXh0XSA9IHRoaXMuY3JlYXRlQ29tcG9uZW50RGF0YSh1aWQsIHBhZ2VDb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50W2NvbnRleHRdIGFzIE9ic2VydmFibGU8VD47XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUNvbXBvbmVudERhdGE8VCBleHRlbmRzIENtc0NvbXBvbmVudD4oXG4gICAgdWlkOiBzdHJpbmcsXG4gICAgcGFnZUNvbnRleHQ/OiBQYWdlQ29udGV4dFxuICApOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICBpZiAoIXBhZ2VDb250ZXh0KSB7XG4gICAgICByZXR1cm4gdGhpcy5yb3V0aW5nU2VydmljZS5nZXRQYWdlQ29udGV4dCgpLnBpcGUoXG4gICAgICAgIGZpbHRlcigoY3VycmVudENvbnRleHQpID0+ICEhY3VycmVudENvbnRleHQpLFxuICAgICAgICBzd2l0Y2hNYXAoKGN1cnJlbnRDb250ZXh0KSA9PlxuICAgICAgICAgIHRoaXMuZ2V0Q29tcG9uZW50RGF0YTxUPih1aWQsIGN1cnJlbnRDb250ZXh0KVxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbnRleHQgPSBzZXJpYWxpemVQYWdlQ29udGV4dChwYWdlQ29udGV4dCwgdHJ1ZSk7XG5cbiAgICBjb25zdCBsb2FkaW5nJCA9IGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy5yb3V0aW5nU2VydmljZS5nZXROZXh0UGFnZUNvbnRleHQoKSxcbiAgICAgIHRoaXMuc3RvcmUucGlwZShcbiAgICAgICAgc2VsZWN0KENtc1NlbGVjdG9ycy5jb21wb25lbnRzTG9hZGVyU3RhdGVTZWxlY3RvckZhY3RvcnkodWlkLCBjb250ZXh0KSlcbiAgICAgICksXG4gICAgXSkucGlwZShcbiAgICAgIG9ic2VydmVPbihxdWV1ZVNjaGVkdWxlciksXG4gICAgICB0YXAoKFtuZXh0Q29udGV4dCwgbG9hZGluZ1N0YXRlXSkgPT4ge1xuICAgICAgICBjb25zdCBhdHRlbXB0ZWRMb2FkID1cbiAgICAgICAgICBsb2FkaW5nU3RhdGUubG9hZGluZyB8fCBsb2FkaW5nU3RhdGUuc3VjY2VzcyB8fCBsb2FkaW5nU3RhdGUuZXJyb3I7XG4gICAgICAgIC8vIGlmIHRoZSByZXF1ZXN0ZWQgY29udGV4dCBpcyB0aGUgc2FtZSBhcyB0aGUgb25lIHRoYXQncyBjdXJyZW50bHkgYmVpbmcgbmF2aWdhdGVkIHRvXG4gICAgICAgIC8vIChhcyBpdCBtaWdodCBhbHJlYWR5IGJlZW4gdHJpZ2dlcmVkIGFuZCBtaWdodCBiZSBhdmFpbGFibGUgc2hvcnRseSBmcm9tIHBhZ2UgZGF0YSlcbiAgICAgICAgLy8gVE9ETyhpc3N1ZTozNjQ5KSwgVE9ETyhpc3N1ZTozNjY4KSAtIHRoaXMgb3B0aW1pemF0aW9uIGNvdWxkIGJlIHJlbW92ZWRcbiAgICAgICAgY29uc3QgY291bGRCZUxvYWRlZFdpdGhQYWdlRGF0YSA9IG5leHRDb250ZXh0XG4gICAgICAgICAgPyBzZXJpYWxpemVQYWdlQ29udGV4dChuZXh0Q29udGV4dCwgdHJ1ZSkgPT09IGNvbnRleHRcbiAgICAgICAgICA6IGZhbHNlO1xuXG4gICAgICAgIGlmICghYXR0ZW1wdGVkTG9hZCAmJiAhY291bGRCZUxvYWRlZFdpdGhQYWdlRGF0YSkge1xuICAgICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgICAgICBuZXcgQ21zQWN0aW9ucy5Mb2FkQ21zQ29tcG9uZW50KHsgdWlkLCBwYWdlQ29udGV4dCB9KVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcblxuICAgIGNvbnN0IGNvbXBvbmVudCQgPSB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoQ21zU2VsZWN0b3JzLmNvbXBvbmVudHNTZWxlY3RvckZhY3RvcnkodWlkLCBjb250ZXh0KSksXG4gICAgICAvLyBUT0RPKGlzc3VlOjY0MzEpIC0gdGhpcyBgZmlsdGVyYCBzaG91bGQgYmUgcmVtb3ZlZC5cbiAgICAgIC8vIFRoZSByZWFzb24gZm9yIHJlbW92YWw6IHdpdGggYGZpbHRlcmAgaW4gcGxhY2UsIHdoZW4gbW92aW5nIHRvIGEgcGFnZSB0aGF0IGhhcyByZXN0cmljdGlvbnMsIHRoZSBjb21wb25lbnQgZGF0YSB3aWxsIHN0aWxsIGVtaXQgdGhlIHByZXZpb3VzIHZhbHVlLlxuICAgICAgLy8gUmVtb3ZpbmcgaXQgY2F1c2VzIHNvbWUgY29tcG9uZW50cyB0byBmYWlsLCBiZWNhdXNlIHRoZXkgYXJlIG5vdCBjaGVja2luZ1xuICAgICAgLy8gaWYgdGhlIGRhdGEgaXMgYWN0dWFsbHkgdGhlcmUuIEkgbm90aWNlZCB0aGVzZSB0aGF0IHRoaXMgY29tcG9uZW50IGlzIGZhaWxpbmcsIGJ1dCB0aGVyZSBhcmUgcG9zc2libHkgbW9yZTpcbiAgICAgIC8vIC0gYHRhYi1wYXJhZ3JhcGgtY29udGFpbmVyLmNvbXBvbmVudC50c2Agd2hlbiB2aXNpdGluZyBhbnkgUERQIHBhZ2VcbiAgICAgIGZpbHRlcigoY29tcG9uZW50KSA9PiAhIWNvbXBvbmVudClcbiAgICApIGFzIE9ic2VydmFibGU8VD47XG5cbiAgICByZXR1cm4gdXNpbmcoXG4gICAgICAoKSA9PiBsb2FkaW5nJC5zdWJzY3JpYmUoKSxcbiAgICAgICgpID0+IGNvbXBvbmVudCRcbiAgICApLnBpcGUoc2hhcmVSZXBsYXkoeyBidWZmZXJTaXplOiAxLCByZWZDb3VudDogdHJ1ZSB9KSk7XG4gIH1cblxuICAvKipcbiAgICogR2l2ZW4gdGhlIHBvc2l0aW9uLCBnZXQgdGhlIGNvbnRlbnQgc2xvdCBkYXRhXG4gICAqIEBwYXJhbSBwb3NpdGlvbiA6IGNvbnRlbnQgc2xvdCBwb3NpdGlvblxuICAgKi9cbiAgZ2V0Q29udGVudFNsb3QocG9zaXRpb246IHN0cmluZyk6IE9ic2VydmFibGU8Q29udGVudFNsb3REYXRhPiB7XG4gICAgcmV0dXJuIHRoaXMucm91dGluZ1NlcnZpY2VcbiAgICAgIC5nZXRQYWdlQ29udGV4dCgpXG4gICAgICAucGlwZShcbiAgICAgICAgc3dpdGNoTWFwKChwYWdlQ29udGV4dCkgPT5cbiAgICAgICAgICB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICAgICAgICBzZWxlY3QoXG4gICAgICAgICAgICAgIENtc1NlbGVjdG9ycy5nZXRDdXJyZW50U2xvdFNlbGVjdG9yRmFjdG9yeShwYWdlQ29udGV4dCwgcG9zaXRpb24pXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgZmlsdGVyKEJvb2xlYW4pXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdpdmVuIG5hdmlnYXRpb24gbm9kZSB1aWQsIGdldCBpdGVtcyAod2l0aCBpZCBhbmQgdHlwZSkgaW5zaWRlIHRoZSBuYXZpZ2F0aW9uIGVudHJpZXNcbiAgICogQHBhcmFtIG5hdmlnYXRpb25Ob2RlVWlkIDogdWlkIG9mIHRoZSBuYXZpZ2F0aW9uIG5vZGVcbiAgICovXG4gIGdldE5hdmlnYXRpb25FbnRyeUl0ZW1zKG5hdmlnYXRpb25Ob2RlVWlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPE5vZGVJdGVtPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChDbXNTZWxlY3RvcnMuZ2V0TmF2aWdhdGlvbkVudHJ5SXRlbXMobmF2aWdhdGlvbk5vZGVVaWQpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogTG9hZCBuYXZpZ2F0aW9uIGl0ZW1zIGRhdGFcbiAgICogQHBhcmFtIHJvb3RVaWQgOiB0aGUgdWlkIG9mIHRoZSByb290IG5hdmlnYXRpb24gbm9kZVxuICAgKiBAcGFyYW0gaXRlbUxpc3QgOiBsaXN0IG9mIGl0ZW1zICh3aXRoIGlkIGFuZCB0eXBlKVxuICAgKi9cbiAgbG9hZE5hdmlnYXRpb25JdGVtcyhcbiAgICByb290VWlkOiBzdHJpbmcsXG4gICAgaXRlbUxpc3Q6IHsgaWQ6IHN0cmluZzsgc3VwZXJUeXBlOiBzdHJpbmcgfVtdXG4gICk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgQ21zQWN0aW9ucy5Mb2FkQ21zTmF2aWdhdGlvbkl0ZW1zKHtcbiAgICAgICAgbm9kZUlkOiByb290VWlkLFxuICAgICAgICBpdGVtczogaXRlbUxpc3QsXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmVmcmVzaCB0aGUgY29udGVudCBvZiB0aGUgbGF0ZXN0IGNtcyBwYWdlXG4gICAqL1xuICByZWZyZXNoTGF0ZXN0UGFnZSgpOiB2b2lkIHtcbiAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlXG4gICAgICAuZ2V0UGFnZUNvbnRleHQoKVxuICAgICAgLnBpcGUodGFrZSgxKSlcbiAgICAgIC5zdWJzY3JpYmUoKHBhZ2VDb250ZXh0KSA9PlxuICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDbXNBY3Rpb25zLkxvYWRDbXNQYWdlRGF0YShwYWdlQ29udGV4dCkpXG4gICAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZnJlc2ggdGhlIGNtcyBwYWdlIGNvbnRlbnQgYnkgcGFnZSBJZFxuICAgKiBAcGFyYW0gcGFnZUlkXG4gICAqL1xuICByZWZyZXNoUGFnZUJ5SWQocGFnZUlkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBwYWdlQ29udGV4dDogUGFnZUNvbnRleHQgPSB7IGlkOiBwYWdlSWQgfTtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDbXNBY3Rpb25zLkxvYWRDbXNQYWdlRGF0YShwYWdlQ29udGV4dCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZnJlc2ggY21zIGNvbXBvbmVudCdzIGNvbnRlbnRcbiAgICogQHBhcmFtIHVpZCBjb21wb25lbnQgdWlkXG4gICAqIEBwYXJhbSBwYWdlQ29udGV4dCBhbiBvcHRpb25hbCBwYXJhbWV0ZXIgdGhhdCBlbmFibGVzIHRoZSBjYWxsZXIgdG8gc3BlY2lmeSBmb3Igd2hpY2ggY29udGV4dCB0aGUgY29tcG9uZW50IHNob3VsZCBiZSByZWZyZXNoZWQuXG4gICAqIElmIG5vdCBzcGVjaWZpZWQsICdjdXJyZW50JyBwYWdlIGNvbnRleHQgaXMgdXNlZC5cbiAgICovXG4gIHJlZnJlc2hDb21wb25lbnQodWlkOiBzdHJpbmcsIHBhZ2VDb250ZXh0PzogUGFnZUNvbnRleHQpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDbXNBY3Rpb25zLkxvYWRDbXNDb21wb25lbnQoeyB1aWQsIHBhZ2VDb250ZXh0IH0pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHaXZlbiBwYWdlQ29udGV4dCwgcmV0dXJuIHRoZSBDTVMgcGFnZSBkYXRhXG4gICAqIEBwYXJhbSBwYWdlQ29udGV4dFxuICAgKi9cbiAgZ2V0UGFnZVN0YXRlKHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCk6IE9ic2VydmFibGU8UGFnZT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KENtc1NlbGVjdG9ycy5nZXRQYWdlRGF0YShwYWdlQ29udGV4dCkpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHaXZlbiBwYWdlQ29udGV4dCwgcmV0dXJuIHRoZSBDTVMgcGFnZSBkYXRhXG4gICAqIEBwYXJhbSBwYWdlQ29udGV4dFxuICAgKi9cbiAgZ2V0UGFnZUNvbXBvbmVudFR5cGVzKHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCk6IE9ic2VydmFibGU8c3RyaW5nW10+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KENtc1NlbGVjdG9ycy5nZXRQYWdlQ29tcG9uZW50VHlwZXMocGFnZUNvbnRleHQpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogR2l2ZW4gcGFnZUNvbnRleHQsIHJldHVybiB3aGV0aGVyIHRoZSBDTVMgcGFnZSBkYXRhIGV4aXN0cyBvciBub3RcbiAgICogQHBhcmFtIHBhZ2VDb250ZXh0XG4gICAqL1xuICBoYXNQYWdlKHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCwgZm9yY2VSZWxvYWQgPSBmYWxzZSk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoQ21zU2VsZWN0b3JzLmdldFBhZ2VTdGF0ZUluZGV4TG9hZGVyU3RhdGUocGFnZUNvbnRleHQpKSxcbiAgICAgIHRhcCgoZW50aXR5OiBMb2FkZXJTdGF0ZTxzdHJpbmc+KSA9PiB7XG4gICAgICAgIGNvbnN0IGF0dGVtcHRlZExvYWQgPSBlbnRpdHkubG9hZGluZyB8fCBlbnRpdHkuc3VjY2VzcyB8fCBlbnRpdHkuZXJyb3I7XG4gICAgICAgIGNvbnN0IHNob3VsZFJlbG9hZCA9IGZvcmNlUmVsb2FkICYmICFlbnRpdHkubG9hZGluZztcbiAgICAgICAgaWYgKCFhdHRlbXB0ZWRMb2FkIHx8IHNob3VsZFJlbG9hZCkge1xuICAgICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IENtc0FjdGlvbnMuTG9hZENtc1BhZ2VEYXRhKHBhZ2VDb250ZXh0KSk7XG4gICAgICAgICAgZm9yY2VSZWxvYWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBmaWx0ZXIoKGVudGl0eSkgPT4ge1xuICAgICAgICBpZiAoIWVudGl0eS5oYXNPd25Qcm9wZXJ0eSgndmFsdWUnKSkge1xuICAgICAgICAgIC8vIGlmIHdlIGhhdmUgaW5jb21wbGV0ZSBzdGF0ZSBmcm9tIFNTUiBmYWlsZWQgbG9hZCB0cmFuc2ZlciBzdGF0ZSxcbiAgICAgICAgICAvLyB3ZSBzaG91bGQgd2FpdCBmb3IgcmVsb2FkIGFuZCBhY3R1YWwgdmFsdWVcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVudGl0eS5zdWNjZXNzIHx8IChlbnRpdHkuZXJyb3IgJiYgIWVudGl0eS5sb2FkaW5nKTtcbiAgICAgIH0pLFxuICAgICAgcGx1Y2soJ3N1Y2Nlc3MnKSxcbiAgICAgIGNhdGNoRXJyb3IoKCkgPT4gb2YoZmFsc2UpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogR2l2ZW4gcGFnZUNvbnRleHQsIHJldHVybiB0aGUgQ01TIHBhZ2UgZGF0YVxuICAgKiovXG4gIGdldFBhZ2UocGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0LCBmb3JjZVJlbG9hZCA9IGZhbHNlKTogT2JzZXJ2YWJsZTxQYWdlPiB7XG4gICAgcmV0dXJuIHRoaXMuaGFzUGFnZShwYWdlQ29udGV4dCwgZm9yY2VSZWxvYWQpLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKGhhc1BhZ2UpID0+XG4gICAgICAgIGhhc1BhZ2UgPyB0aGlzLmdldFBhZ2VTdGF0ZShwYWdlQ29udGV4dCkgOiBvZihudWxsKVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBnZXRQYWdlSW5kZXgocGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0KTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KENtc1NlbGVjdG9ycy5nZXRQYWdlU3RhdGVJbmRleFZhbHVlKHBhZ2VDb250ZXh0KSlcbiAgICApO1xuICB9XG5cbiAgc2V0UGFnZUZhaWxJbmRleChwYWdlQ29udGV4dDogUGFnZUNvbnRleHQsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDbXNBY3Rpb25zLkNtc1NldFBhZ2VGYWlsSW5kZXgocGFnZUNvbnRleHQsIHZhbHVlKSk7XG4gIH1cbn1cbiJdfQ==
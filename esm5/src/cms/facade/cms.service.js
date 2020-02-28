import { __decorate, __read } from "tslib";
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
var CmsService = /** @class */ (function () {
    function CmsService(store, routingService) {
        this.store = store;
        this.routingService = routingService;
        this._launchInSmartEdit = false;
        this.components = {};
    }
    Object.defineProperty(CmsService.prototype, "launchInSmartEdit", {
        /**
         * Set _launchInSmartEdit value
         */
        set: function (value) {
            this._launchInSmartEdit = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Whether the app launched in smart edit
     */
    CmsService.prototype.isLaunchInSmartEdit = function () {
        return this._launchInSmartEdit;
    };
    /**
     * Get current CMS page data
     */
    CmsService.prototype.getCurrentPage = function () {
        var _this = this;
        return this.routingService
            .getPageContext()
            .pipe(switchMap(function (pageContext) {
            return _this.store.select(CmsSelectors.getPageData(pageContext));
        }));
    };
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
    CmsService.prototype.getComponentData = function (uid, pageContext) {
        var context = serializePageContext(pageContext, true);
        if (!this.components[uid]) {
            // create the component data structure, if it doesn't already exist
            this.components[uid] = {};
        }
        var component = this.components[uid];
        if (!component[context]) {
            // create the component data and assign it to the component's context
            component[context] = this.createComponentData(uid, pageContext);
        }
        return component[context];
    };
    CmsService.prototype.createComponentData = function (uid, pageContext) {
        var _this = this;
        if (!pageContext) {
            return this.routingService.getPageContext().pipe(filter(function (currentContext) { return !!currentContext; }), switchMap(function (currentContext) {
                return _this.getComponentData(uid, currentContext);
            }));
        }
        var context = serializePageContext(pageContext, true);
        var loading$ = combineLatest([
            this.routingService.getNextPageContext(),
            this.store.pipe(select(CmsSelectors.componentsLoaderStateSelectorFactory(uid, context))),
        ]).pipe(observeOn(queueScheduler), tap(function (_a) {
            var _b = __read(_a, 2), nextContext = _b[0], loadingState = _b[1];
            var attemptedLoad = loadingState.loading || loadingState.success || loadingState.error;
            // if the requested context is the same as the one that's currently being navigated to
            // (as it might already been triggered and might be available shortly from page data)
            // TODO(issue:3649), TODO(issue:3668) - this optimization could be removed
            var couldBeLoadedWithPageData = nextContext
                ? serializePageContext(nextContext, true) === context
                : false;
            if (!attemptedLoad && !couldBeLoadedWithPageData) {
                _this.store.dispatch(new CmsActions.LoadCmsComponent({ uid: uid, pageContext: pageContext }));
            }
        }));
        var component$ = this.store.pipe(select(CmsSelectors.componentsSelectorFactory(uid, context)), 
        // TODO(issue:6431) - this `filter` should be removed.
        // The reason for removal: with `filter` in place, when moving to a page that has restrictions, the component data will still emit the previous value.
        // Removing it causes some components to fail, because they are not checking
        // if the data is actually there. I noticed these that this component is failing, but there are possibly more:
        // - `tab-paragraph-container.component.ts` when visiting any PDP page
        filter(function (component) { return !!component; }));
        return using(function () { return loading$.subscribe(); }, function () { return component$; }).pipe(shareReplay({ bufferSize: 1, refCount: true }));
    };
    /**
     * Given the position, get the content slot data
     * @param position : content slot position
     */
    CmsService.prototype.getContentSlot = function (position) {
        var _this = this;
        return this.routingService
            .getPageContext()
            .pipe(switchMap(function (pageContext) {
            return _this.store.pipe(select(CmsSelectors.getCurrentSlotSelectorFactory(pageContext, position)), filter(Boolean));
        }));
    };
    /**
     * Given navigation node uid, get items (with id and type) inside the navigation entries
     * @param navigationNodeUid : uid of the navigation node
     */
    CmsService.prototype.getNavigationEntryItems = function (navigationNodeUid) {
        return this.store.pipe(select(CmsSelectors.getNavigationEntryItems(navigationNodeUid)));
    };
    /**
     * Load navigation items data
     * @param rootUid : the uid of the root navigation node
     * @param itemList : list of items (with id and type)
     */
    CmsService.prototype.loadNavigationItems = function (rootUid, itemList) {
        this.store.dispatch(new CmsActions.LoadCmsNavigationItems({
            nodeId: rootUid,
            items: itemList,
        }));
    };
    /**
     * Refresh the content of the latest cms page
     */
    CmsService.prototype.refreshLatestPage = function () {
        var _this = this;
        this.routingService
            .getPageContext()
            .pipe(take(1))
            .subscribe(function (pageContext) {
            return _this.store.dispatch(new CmsActions.LoadCmsPageData(pageContext));
        });
    };
    /**
     * Refresh the cms page content by page Id
     * @param pageId
     */
    CmsService.prototype.refreshPageById = function (pageId) {
        var pageContext = { id: pageId };
        this.store.dispatch(new CmsActions.LoadCmsPageData(pageContext));
    };
    /**
     * Refresh cms component's content
     * @param uid component uid
     * @param pageContext an optional parameter that enables the caller to specify for which context the component should be refreshed.
     * If not specified, 'current' page context is used.
     */
    CmsService.prototype.refreshComponent = function (uid, pageContext) {
        this.store.dispatch(new CmsActions.LoadCmsComponent({ uid: uid, pageContext: pageContext }));
    };
    /**
     * Given pageContext, return the CMS page data
     * @param pageContext
     */
    CmsService.prototype.getPageState = function (pageContext) {
        return this.store.pipe(select(CmsSelectors.getPageData(pageContext)));
    };
    /**
     * Given pageContext, return the CMS page data
     * @param pageContext
     */
    CmsService.prototype.getPageComponentTypes = function (pageContext) {
        return this.store.pipe(select(CmsSelectors.getPageComponentTypes(pageContext)));
    };
    /**
     * Given pageContext, return whether the CMS page data exists or not
     * @param pageContext
     */
    CmsService.prototype.hasPage = function (pageContext, forceReload) {
        var _this = this;
        if (forceReload === void 0) { forceReload = false; }
        return this.store.pipe(select(CmsSelectors.getPageStateIndexLoaderState(pageContext)), tap(function (entity) {
            var attemptedLoad = entity.loading || entity.success || entity.error;
            var shouldReload = forceReload && !entity.loading;
            if (!attemptedLoad || shouldReload) {
                _this.store.dispatch(new CmsActions.LoadCmsPageData(pageContext));
                forceReload = false;
            }
        }), filter(function (entity) {
            if (!entity.hasOwnProperty('value')) {
                // if we have incomplete state from SSR failed load transfer state,
                // we should wait for reload and actual value
                return false;
            }
            return entity.success || (entity.error && !entity.loading);
        }), pluck('success'), catchError(function () { return of(false); }));
    };
    /**
     * Given pageContext, return the CMS page data
     **/
    CmsService.prototype.getPage = function (pageContext, forceReload) {
        var _this = this;
        if (forceReload === void 0) { forceReload = false; }
        return this.hasPage(pageContext, forceReload).pipe(switchMap(function (hasPage) {
            return hasPage ? _this.getPageState(pageContext) : of(null);
        }));
    };
    CmsService.prototype.getPageIndex = function (pageContext) {
        return this.store.pipe(select(CmsSelectors.getPageStateIndexValue(pageContext)));
    };
    CmsService.prototype.setPageFailIndex = function (pageContext, value) {
        this.store.dispatch(new CmsActions.CmsSetPageFailIndex(pageContext, value));
    };
    CmsService.ctorParameters = function () { return [
        { type: Store },
        { type: RoutingService }
    ]; };
    CmsService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CmsService_Factory() { return new CmsService(i0.ɵɵinject(i1.Store), i0.ɵɵinject(i2.RoutingService)); }, token: CmsService, providedIn: "root" });
    CmsService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], CmsService);
    return CmsService;
}());
export { CmsService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL2ZhY2FkZS9jbXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM1QyxPQUFPLEVBQUUsYUFBYSxFQUFjLEVBQUUsRUFBRSxjQUFjLEVBQUUsS0FBSyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzVFLE9BQU8sRUFDTCxVQUFVLEVBQ1YsTUFBTSxFQUNOLFNBQVMsRUFDVCxLQUFLLEVBQ0wsV0FBVyxFQUNYLFNBQVMsRUFDVCxJQUFJLEVBQ0osR0FBRyxHQUNKLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEIsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBTXRFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUVwRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDeEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7QUFLMUQ7SUFTRSxvQkFDWSxLQUEwQixFQUMxQixjQUE4QjtRQUQ5QixVQUFLLEdBQUwsS0FBSyxDQUFxQjtRQUMxQixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFWbEMsdUJBQWtCLEdBQUcsS0FBSyxDQUFDO1FBRTNCLGVBQVUsR0FJZCxFQUFFLENBQUM7SUFLSixDQUFDO0lBS0osc0JBQUkseUNBQWlCO1FBSHJCOztXQUVHO2FBQ0gsVUFBc0IsS0FBYztZQUNsQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO1FBQ2xDLENBQUM7OztPQUFBO0lBRUQ7O09BRUc7SUFDSCx3Q0FBbUIsR0FBbkI7UUFDRSxPQUFPLElBQUksQ0FBQyxr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bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlLCBvZiwgcXVldWVTY2hlZHVsZXIsIHVzaW5nIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBjYXRjaEVycm9yLFxuICBmaWx0ZXIsXG4gIG9ic2VydmVPbixcbiAgcGx1Y2ssXG4gIHNoYXJlUmVwbGF5LFxuICBzd2l0Y2hNYXAsXG4gIHRha2UsXG4gIHRhcCxcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vbW9kZWwvY21zLm1vZGVsJztcbmltcG9ydCB7IFJvdXRpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vcm91dGluZy9mYWNhZGUvcm91dGluZy5zZXJ2aWNlJztcbmltcG9ydCB7IFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vLi4vcm91dGluZy9tb2RlbHMvcGFnZS1jb250ZXh0Lm1vZGVsJztcbmltcG9ydCB7IExvYWRlclN0YXRlIH0gZnJvbSAnLi4vLi4vc3RhdGUvdXRpbHMvbG9hZGVyL2xvYWRlci1zdGF0ZSc7XG5pbXBvcnQgeyBDb250ZW50U2xvdERhdGEgfSBmcm9tICcuLi9tb2RlbC9jb250ZW50LXNsb3QtZGF0YS5tb2RlbCc7XG5pbXBvcnQgeyBOb2RlSXRlbSB9IGZyb20gJy4uL21vZGVsL25vZGUtaXRlbS5tb2RlbCc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAnLi4vbW9kZWwvcGFnZS5tb2RlbCc7XG5pbXBvcnQgeyBDbXNBY3Rpb25zIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhDbXMgfSBmcm9tICcuLi9zdG9yZS9jbXMtc3RhdGUnO1xuaW1wb3J0IHsgQ21zU2VsZWN0b3JzIH0gZnJvbSAnLi4vc3RvcmUvc2VsZWN0b3JzL2luZGV4JztcbmltcG9ydCB7IHNlcmlhbGl6ZVBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vdXRpbHMvY21zLXV0aWxzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENtc1NlcnZpY2Uge1xuICBwcml2YXRlIF9sYXVuY2hJblNtYXJ0RWRpdCA9IGZhbHNlO1xuXG4gIHByaXZhdGUgY29tcG9uZW50czoge1xuICAgIFt1aWQ6IHN0cmluZ106IHtcbiAgICAgIFtwYWdlQ29udGV4dDogc3RyaW5nXTogT2JzZXJ2YWJsZTxDbXNDb21wb25lbnQ+O1xuICAgIH07XG4gIH0gPSB7fTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aENtcz4sXG4gICAgcHJvdGVjdGVkIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZVxuICApIHt9XG5cbiAgLyoqXG4gICAqIFNldCBfbGF1bmNoSW5TbWFydEVkaXQgdmFsdWVcbiAgICovXG4gIHNldCBsYXVuY2hJblNtYXJ0RWRpdCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2xhdW5jaEluU21hcnRFZGl0ID0gdmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogV2hldGhlciB0aGUgYXBwIGxhdW5jaGVkIGluIHNtYXJ0IGVkaXRcbiAgICovXG4gIGlzTGF1bmNoSW5TbWFydEVkaXQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2xhdW5jaEluU21hcnRFZGl0O1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjdXJyZW50IENNUyBwYWdlIGRhdGFcbiAgICovXG4gIGdldEN1cnJlbnRQYWdlKCk6IE9ic2VydmFibGU8UGFnZT4ge1xuICAgIHJldHVybiB0aGlzLnJvdXRpbmdTZXJ2aWNlXG4gICAgICAuZ2V0UGFnZUNvbnRleHQoKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHN3aXRjaE1hcChwYWdlQ29udGV4dCA9PlxuICAgICAgICAgIHRoaXMuc3RvcmUuc2VsZWN0KENtc1NlbGVjdG9ycy5nZXRQYWdlRGF0YShwYWdlQ29udGV4dCkpXG4gICAgICAgIClcbiAgICAgICk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IENNUyBjb21wb25lbnQgZGF0YSBieSB1aWRcbiAgICpcbiAgICogVGhpcyBtZXRob2QgY2FuIGJlIHNhZmVseSBhbmQgb3B0aW1hbGx5IHVzZWQgdG8gbG9hZCBtdWx0aXBsZSBjb21wb25lbnRzIGRhdGEgYXQgdGhlIHNhbWUgdGltZS5cbiAgICogQ2FsbGluZyBnZXRDb21wb25lbnREYXRhIG11bHRpcGxlIHRpbWVzIGZvciBkaWZmZXJlbnQgY29tcG9uZW50cyB3aWxsIGFsd2F5cyByZXN1bHQgaW4gb3B0aW1pemVkXG4gICAqIGJhY2stZW5kIHJlcXVlc3Q6IGFsbCBjb21wb25lbnRzIHJlcXVlc3RlZCBhdCB0aGUgc2FtZSB0aW1lIChpbiBvbmUgZXZlbnQgbG9vcCkgd2lsbCBiZSBsb2FkZWQgaW4gb25lIG5ldHdvcmsgY2FsbC5cbiAgICpcbiAgICogSW4gY2FzZSB0aGUgY29tcG9uZW50IGRhdGEgaXMgbm90IHByZXNlbnQsIHRoZSBtZXRob2Qgd2lsbCBsb2FkIGl0LlxuICAgKiBPdGhlcndpc2UsIGlmIHRoZSBwYWdlIGNvbnRleHQgaXMgbm90IHByb3ZpZGVkLCB0aGUgY3VycmVudCBwYWdlIGNvbnRleHQgZnJvbSB0aGUgcm91dGVyIHN0YXRlIHdpbGwgYmUgdXNlZCBpbnN0ZWFkLlxuICAgKlxuICAgKiBAcGFyYW0gdWlkIENNUyBjb21wb25lbnQgdWlkXG4gICAqIEBwYXJhbSBwYWdlQ29udGV4dCBpZiBwcm92aWRlZCwgaXQgd2lsbCBiZSB1c2VkIHRvIGxvb2t1cCB0aGUgY29tcG9uZW50IGRhdGEuXG4gICAqL1xuICBnZXRDb21wb25lbnREYXRhPFQgZXh0ZW5kcyBDbXNDb21wb25lbnQ+KFxuICAgIHVpZDogc3RyaW5nLFxuICAgIHBhZ2VDb250ZXh0PzogUGFnZUNvbnRleHRcbiAgKTogT2JzZXJ2YWJsZTxUPiB7XG4gICAgY29uc3QgY29udGV4dCA9IHNlcmlhbGl6ZVBhZ2VDb250ZXh0KHBhZ2VDb250ZXh0LCB0cnVlKTtcbiAgICBpZiAoIXRoaXMuY29tcG9uZW50c1t1aWRdKSB7XG4gICAgICAvLyBjcmVhdGUgdGhlIGNvbXBvbmVudCBkYXRhIHN0cnVjdHVyZSwgaWYgaXQgZG9lc24ndCBhbHJlYWR5IGV4aXN0XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdWlkXSA9IHt9O1xuICAgIH1cblxuICAgIGNvbnN0IGNvbXBvbmVudCA9IHRoaXMuY29tcG9uZW50c1t1aWRdO1xuICAgIGlmICghY29tcG9uZW50W2NvbnRleHRdKSB7XG4gICAgICAvLyBjcmVhdGUgdGhlIGNvbXBvbmVudCBkYXRhIGFuZCBhc3NpZ24gaXQgdG8gdGhlIGNvbXBvbmVudCdzIGNvbnRleHRcbiAgICAgIGNvbXBvbmVudFtjb250ZXh0XSA9IHRoaXMuY3JlYXRlQ29tcG9uZW50RGF0YSh1aWQsIHBhZ2VDb250ZXh0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50W2NvbnRleHRdIGFzIE9ic2VydmFibGU8VD47XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUNvbXBvbmVudERhdGE8VCBleHRlbmRzIENtc0NvbXBvbmVudD4oXG4gICAgdWlkOiBzdHJpbmcsXG4gICAgcGFnZUNvbnRleHQ/OiBQYWdlQ29udGV4dFxuICApOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICBpZiAoIXBhZ2VDb250ZXh0KSB7XG4gICAgICByZXR1cm4gdGhpcy5yb3V0aW5nU2VydmljZS5nZXRQYWdlQ29udGV4dCgpLnBpcGUoXG4gICAgICAgIGZpbHRlcihjdXJyZW50Q29udGV4dCA9PiAhIWN1cnJlbnRDb250ZXh0KSxcbiAgICAgICAgc3dpdGNoTWFwKGN1cnJlbnRDb250ZXh0ID0+XG4gICAgICAgICAgdGhpcy5nZXRDb21wb25lbnREYXRhPFQ+KHVpZCwgY3VycmVudENvbnRleHQpXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuXG4gICAgY29uc3QgY29udGV4dCA9IHNlcmlhbGl6ZVBhZ2VDb250ZXh0KHBhZ2VDb250ZXh0LCB0cnVlKTtcblxuICAgIGNvbnN0IGxvYWRpbmckID0gY29tYmluZUxhdGVzdChbXG4gICAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdldE5leHRQYWdlQ29udGV4dCgpLFxuICAgICAgdGhpcy5zdG9yZS5waXBlKFxuICAgICAgICBzZWxlY3QoQ21zU2VsZWN0b3JzLmNvbXBvbmVudHNMb2FkZXJTdGF0ZVNlbGVjdG9yRmFjdG9yeSh1aWQsIGNvbnRleHQpKVxuICAgICAgKSxcbiAgICBdKS5waXBlKFxuICAgICAgb2JzZXJ2ZU9uKHF1ZXVlU2NoZWR1bGVyKSxcbiAgICAgIHRhcCgoW25leHRDb250ZXh0LCBsb2FkaW5nU3RhdGVdKSA9PiB7XG4gICAgICAgIGNvbnN0IGF0dGVtcHRlZExvYWQgPVxuICAgICAgICAgIGxvYWRpbmdTdGF0ZS5sb2FkaW5nIHx8IGxvYWRpbmdTdGF0ZS5zdWNjZXNzIHx8IGxvYWRpbmdTdGF0ZS5lcnJvcjtcbiAgICAgICAgLy8gaWYgdGhlIHJlcXVlc3RlZCBjb250ZXh0IGlzIHRoZSBzYW1lIGFzIHRoZSBvbmUgdGhhdCdzIGN1cnJlbnRseSBiZWluZyBuYXZpZ2F0ZWQgdG9cbiAgICAgICAgLy8gKGFzIGl0IG1pZ2h0IGFscmVhZHkgYmVlbiB0cmlnZ2VyZWQgYW5kIG1pZ2h0IGJlIGF2YWlsYWJsZSBzaG9ydGx5IGZyb20gcGFnZSBkYXRhKVxuICAgICAgICAvLyBUT0RPKGlzc3VlOjM2NDkpLCBUT0RPKGlzc3VlOjM2NjgpIC0gdGhpcyBvcHRpbWl6YXRpb24gY291bGQgYmUgcmVtb3ZlZFxuICAgICAgICBjb25zdCBjb3VsZEJlTG9hZGVkV2l0aFBhZ2VEYXRhID0gbmV4dENvbnRleHRcbiAgICAgICAgICA/IHNlcmlhbGl6ZVBhZ2VDb250ZXh0KG5leHRDb250ZXh0LCB0cnVlKSA9PT0gY29udGV4dFxuICAgICAgICAgIDogZmFsc2U7XG5cbiAgICAgICAgaWYgKCFhdHRlbXB0ZWRMb2FkICYmICFjb3VsZEJlTG9hZGVkV2l0aFBhZ2VEYXRhKSB7XG4gICAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgICAgICAgIG5ldyBDbXNBY3Rpb25zLkxvYWRDbXNDb21wb25lbnQoeyB1aWQsIHBhZ2VDb250ZXh0IH0pXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuXG4gICAgY29uc3QgY29tcG9uZW50JCA9IHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChDbXNTZWxlY3RvcnMuY29tcG9uZW50c1NlbGVjdG9yRmFjdG9yeSh1aWQsIGNvbnRleHQpKSxcbiAgICAgIC8vIFRPRE8oaXNzdWU6NjQzMSkgLSB0aGlzIGBmaWx0ZXJgIHNob3VsZCBiZSByZW1vdmVkLlxuICAgICAgLy8gVGhlIHJlYXNvbiBmb3IgcmVtb3ZhbDogd2l0aCBgZmlsdGVyYCBpbiBwbGFjZSwgd2hlbiBtb3ZpbmcgdG8gYSBwYWdlIHRoYXQgaGFzIHJlc3RyaWN0aW9ucywgdGhlIGNvbXBvbmVudCBkYXRhIHdpbGwgc3RpbGwgZW1pdCB0aGUgcHJldmlvdXMgdmFsdWUuXG4gICAgICAvLyBSZW1vdmluZyBpdCBjYXVzZXMgc29tZSBjb21wb25lbnRzIHRvIGZhaWwsIGJlY2F1c2UgdGhleSBhcmUgbm90IGNoZWNraW5nXG4gICAgICAvLyBpZiB0aGUgZGF0YSBpcyBhY3R1YWxseSB0aGVyZS4gSSBub3RpY2VkIHRoZXNlIHRoYXQgdGhpcyBjb21wb25lbnQgaXMgZmFpbGluZywgYnV0IHRoZXJlIGFyZSBwb3NzaWJseSBtb3JlOlxuICAgICAgLy8gLSBgdGFiLXBhcmFncmFwaC1jb250YWluZXIuY29tcG9uZW50LnRzYCB3aGVuIHZpc2l0aW5nIGFueSBQRFAgcGFnZVxuICAgICAgZmlsdGVyKGNvbXBvbmVudCA9PiAhIWNvbXBvbmVudClcbiAgICApIGFzIE9ic2VydmFibGU8VD47XG5cbiAgICByZXR1cm4gdXNpbmcoXG4gICAgICAoKSA9PiBsb2FkaW5nJC5zdWJzY3JpYmUoKSxcbiAgICAgICgpID0+IGNvbXBvbmVudCRcbiAgICApLnBpcGUoc2hhcmVSZXBsYXkoeyBidWZmZXJTaXplOiAxLCByZWZDb3VudDogdHJ1ZSB9KSk7XG4gIH1cblxuICAvKipcbiAgICogR2l2ZW4gdGhlIHBvc2l0aW9uLCBnZXQgdGhlIGNvbnRlbnQgc2xvdCBkYXRhXG4gICAqIEBwYXJhbSBwb3NpdGlvbiA6IGNvbnRlbnQgc2xvdCBwb3NpdGlvblxuICAgKi9cbiAgZ2V0Q29udGVudFNsb3QocG9zaXRpb246IHN0cmluZyk6IE9ic2VydmFibGU8Q29udGVudFNsb3REYXRhPiB7XG4gICAgcmV0dXJuIHRoaXMucm91dGluZ1NlcnZpY2VcbiAgICAgIC5nZXRQYWdlQ29udGV4dCgpXG4gICAgICAucGlwZShcbiAgICAgICAgc3dpdGNoTWFwKHBhZ2VDb250ZXh0ID0+XG4gICAgICAgICAgdGhpcy5zdG9yZS5waXBlKFxuICAgICAgICAgICAgc2VsZWN0KFxuICAgICAgICAgICAgICBDbXNTZWxlY3RvcnMuZ2V0Q3VycmVudFNsb3RTZWxlY3RvckZhY3RvcnkocGFnZUNvbnRleHQsIHBvc2l0aW9uKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIGZpbHRlcihCb29sZWFuKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHaXZlbiBuYXZpZ2F0aW9uIG5vZGUgdWlkLCBnZXQgaXRlbXMgKHdpdGggaWQgYW5kIHR5cGUpIGluc2lkZSB0aGUgbmF2aWdhdGlvbiBlbnRyaWVzXG4gICAqIEBwYXJhbSBuYXZpZ2F0aW9uTm9kZVVpZCA6IHVpZCBvZiB0aGUgbmF2aWdhdGlvbiBub2RlXG4gICAqL1xuICBnZXROYXZpZ2F0aW9uRW50cnlJdGVtcyhuYXZpZ2F0aW9uTm9kZVVpZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxOb2RlSXRlbT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoQ21zU2VsZWN0b3JzLmdldE5hdmlnYXRpb25FbnRyeUl0ZW1zKG5hdmlnYXRpb25Ob2RlVWlkKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIExvYWQgbmF2aWdhdGlvbiBpdGVtcyBkYXRhXG4gICAqIEBwYXJhbSByb290VWlkIDogdGhlIHVpZCBvZiB0aGUgcm9vdCBuYXZpZ2F0aW9uIG5vZGVcbiAgICogQHBhcmFtIGl0ZW1MaXN0IDogbGlzdCBvZiBpdGVtcyAod2l0aCBpZCBhbmQgdHlwZSlcbiAgICovXG4gIGxvYWROYXZpZ2F0aW9uSXRlbXMoXG4gICAgcm9vdFVpZDogc3RyaW5nLFxuICAgIGl0ZW1MaXN0OiB7IGlkOiBzdHJpbmc7IHN1cGVyVHlwZTogc3RyaW5nIH1bXVxuICApOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IENtc0FjdGlvbnMuTG9hZENtc05hdmlnYXRpb25JdGVtcyh7XG4gICAgICAgIG5vZGVJZDogcm9vdFVpZCxcbiAgICAgICAgaXRlbXM6IGl0ZW1MaXN0LFxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZnJlc2ggdGhlIGNvbnRlbnQgb2YgdGhlIGxhdGVzdCBjbXMgcGFnZVxuICAgKi9cbiAgcmVmcmVzaExhdGVzdFBhZ2UoKTogdm9pZCB7XG4gICAgdGhpcy5yb3V0aW5nU2VydmljZVxuICAgICAgLmdldFBhZ2VDb250ZXh0KClcbiAgICAgIC5waXBlKHRha2UoMSkpXG4gICAgICAuc3Vic2NyaWJlKHBhZ2VDb250ZXh0ID0+XG4gICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IENtc0FjdGlvbnMuTG9hZENtc1BhZ2VEYXRhKHBhZ2VDb250ZXh0KSlcbiAgICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmVmcmVzaCB0aGUgY21zIHBhZ2UgY29udGVudCBieSBwYWdlIElkXG4gICAqIEBwYXJhbSBwYWdlSWRcbiAgICovXG4gIHJlZnJlc2hQYWdlQnlJZChwYWdlSWQ6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCA9IHsgaWQ6IHBhZ2VJZCB9O1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IENtc0FjdGlvbnMuTG9hZENtc1BhZ2VEYXRhKHBhZ2VDb250ZXh0KSk7XG4gIH1cblxuICAvKipcbiAgICogUmVmcmVzaCBjbXMgY29tcG9uZW50J3MgY29udGVudFxuICAgKiBAcGFyYW0gdWlkIGNvbXBvbmVudCB1aWRcbiAgICogQHBhcmFtIHBhZ2VDb250ZXh0IGFuIG9wdGlvbmFsIHBhcmFtZXRlciB0aGF0IGVuYWJsZXMgdGhlIGNhbGxlciB0byBzcGVjaWZ5IGZvciB3aGljaCBjb250ZXh0IHRoZSBjb21wb25lbnQgc2hvdWxkIGJlIHJlZnJlc2hlZC5cbiAgICogSWYgbm90IHNwZWNpZmllZCwgJ2N1cnJlbnQnIHBhZ2UgY29udGV4dCBpcyB1c2VkLlxuICAgKi9cbiAgcmVmcmVzaENvbXBvbmVudCh1aWQ6IHN0cmluZywgcGFnZUNvbnRleHQ/OiBQYWdlQ29udGV4dCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IENtc0FjdGlvbnMuTG9hZENtc0NvbXBvbmVudCh7IHVpZCwgcGFnZUNvbnRleHQgfSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdpdmVuIHBhZ2VDb250ZXh0LCByZXR1cm4gdGhlIENNUyBwYWdlIGRhdGFcbiAgICogQHBhcmFtIHBhZ2VDb250ZXh0XG4gICAqL1xuICBnZXRQYWdlU3RhdGUocGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0KTogT2JzZXJ2YWJsZTxQYWdlPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoQ21zU2VsZWN0b3JzLmdldFBhZ2VEYXRhKHBhZ2VDb250ZXh0KSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdpdmVuIHBhZ2VDb250ZXh0LCByZXR1cm4gdGhlIENNUyBwYWdlIGRhdGFcbiAgICogQHBhcmFtIHBhZ2VDb250ZXh0XG4gICAqL1xuICBnZXRQYWdlQ29tcG9uZW50VHlwZXMocGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0KTogT2JzZXJ2YWJsZTxzdHJpbmdbXT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoQ21zU2VsZWN0b3JzLmdldFBhZ2VDb21wb25lbnRUeXBlcyhwYWdlQ29udGV4dCkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHaXZlbiBwYWdlQ29udGV4dCwgcmV0dXJuIHdoZXRoZXIgdGhlIENNUyBwYWdlIGRhdGEgZXhpc3RzIG9yIG5vdFxuICAgKiBAcGFyYW0gcGFnZUNvbnRleHRcbiAgICovXG4gIGhhc1BhZ2UocGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0LCBmb3JjZVJlbG9hZCA9IGZhbHNlKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChDbXNTZWxlY3RvcnMuZ2V0UGFnZVN0YXRlSW5kZXhMb2FkZXJTdGF0ZShwYWdlQ29udGV4dCkpLFxuICAgICAgdGFwKChlbnRpdHk6IExvYWRlclN0YXRlPHN0cmluZz4pID0+IHtcbiAgICAgICAgY29uc3QgYXR0ZW1wdGVkTG9hZCA9IGVudGl0eS5sb2FkaW5nIHx8IGVudGl0eS5zdWNjZXNzIHx8IGVudGl0eS5lcnJvcjtcbiAgICAgICAgY29uc3Qgc2hvdWxkUmVsb2FkID0gZm9yY2VSZWxvYWQgJiYgIWVudGl0eS5sb2FkaW5nO1xuICAgICAgICBpZiAoIWF0dGVtcHRlZExvYWQgfHwgc2hvdWxkUmVsb2FkKSB7XG4gICAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQ21zQWN0aW9ucy5Mb2FkQ21zUGFnZURhdGEocGFnZUNvbnRleHQpKTtcbiAgICAgICAgICBmb3JjZVJlbG9hZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIGZpbHRlcihlbnRpdHkgPT4ge1xuICAgICAgICBpZiAoIWVudGl0eS5oYXNPd25Qcm9wZXJ0eSgndmFsdWUnKSkge1xuICAgICAgICAgIC8vIGlmIHdlIGhhdmUgaW5jb21wbGV0ZSBzdGF0ZSBmcm9tIFNTUiBmYWlsZWQgbG9hZCB0cmFuc2ZlciBzdGF0ZSxcbiAgICAgICAgICAvLyB3ZSBzaG91bGQgd2FpdCBmb3IgcmVsb2FkIGFuZCBhY3R1YWwgdmFsdWVcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVudGl0eS5zdWNjZXNzIHx8IChlbnRpdHkuZXJyb3IgJiYgIWVudGl0eS5sb2FkaW5nKTtcbiAgICAgIH0pLFxuICAgICAgcGx1Y2soJ3N1Y2Nlc3MnKSxcbiAgICAgIGNhdGNoRXJyb3IoKCkgPT4gb2YoZmFsc2UpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogR2l2ZW4gcGFnZUNvbnRleHQsIHJldHVybiB0aGUgQ01TIHBhZ2UgZGF0YVxuICAgKiovXG4gIGdldFBhZ2UocGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0LCBmb3JjZVJlbG9hZCA9IGZhbHNlKTogT2JzZXJ2YWJsZTxQYWdlPiB7XG4gICAgcmV0dXJuIHRoaXMuaGFzUGFnZShwYWdlQ29udGV4dCwgZm9yY2VSZWxvYWQpLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoaGFzUGFnZSA9PlxuICAgICAgICBoYXNQYWdlID8gdGhpcy5nZXRQYWdlU3RhdGUocGFnZUNvbnRleHQpIDogb2YobnVsbClcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgZ2V0UGFnZUluZGV4KHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChDbXNTZWxlY3RvcnMuZ2V0UGFnZVN0YXRlSW5kZXhWYWx1ZShwYWdlQ29udGV4dCkpXG4gICAgKTtcbiAgfVxuXG4gIHNldFBhZ2VGYWlsSW5kZXgocGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0LCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQ21zQWN0aW9ucy5DbXNTZXRQYWdlRmFpbEluZGV4KHBhZ2VDb250ZXh0LCB2YWx1ZSkpO1xuICB9XG59XG4iXX0=
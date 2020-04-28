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
        this.components = {};
    }
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
        var component$ = this.store.pipe(select(CmsSelectors.componentsSelectorFactory(uid, context)), filter(function (component) { return component !== undefined; }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL2ZhY2FkZS9jbXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM1QyxPQUFPLEVBQUUsYUFBYSxFQUFjLEVBQUUsRUFBRSxjQUFjLEVBQUUsS0FBSyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzVFLE9BQU8sRUFDTCxVQUFVLEVBQ1YsTUFBTSxFQUNOLFNBQVMsRUFDVCxLQUFLLEVBQ0wsV0FBVyxFQUNYLFNBQVMsRUFDVCxJQUFJLEVBQ0osR0FBRyxHQUNKLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEIsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBTXRFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUVwRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDeEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7QUFLMUQ7SUFPRSxvQkFDWSxLQUEwQixFQUMxQixjQUE4QjtRQUQ5QixVQUFLLEdBQUwsS0FBSyxDQUFxQjtRQUMxQixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFSbEMsZUFBVSxHQUlkLEVBQUUsQ0FBQztJQUtKLENBQUM7SUFFSjs7T0FFRztJQUNILG1DQUFjLEdBQWQ7UUFBQSxpQkFRQztRQVBDLE9BQU8sSUFBSSxDQUFDLGNBQWM7YUFDdkIsY0FBYyxFQUFFO2FBQ2hCLElBQUksQ0FDSCxTQUFTLENBQUMsVUFBQyxXQUFXO1lBQ3BCLE9BQUEsS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUF4RCxDQUF3RCxDQUN6RCxDQUNGLENBQUM7SUFDTixDQUFDO0lBRUQ7Ozs7Ozs7Ozs7OztPQVlHO0lBQ0gscUNBQWdCLEdBQWhCLFVBQ0UsR0FBVyxFQUNYLFdBQXlCO1FBRXpCLElBQU0sT0FBTyxHQUFHLG9CQUFvQixDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUN6QixtRUFBbUU7WUFDbkUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDM0I7UUFFRCxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDdkIscUVBQXFFO1lBQ3JFLFNBQVMsQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1NBQ2pFO1FBRUQsT0FBTyxTQUFTLENBQUMsT0FBTyxDQUFrQixDQUFDO0lBQzdDLENBQUM7SUFFTyx3Q0FBbUIsR0FBM0IsVUFDRSxHQUFXLEVBQ1gsV0FBeUI7UUFGM0IsaUJBaURDO1FBN0NDLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDaEIsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsRUFBRSxDQUFDLElBQUksQ0FDOUMsTUFBTSxDQUFDLFVBQUMsY0FBYyxJQUFLLE9BQUEsQ0FBQyxDQUFDLGNBQWMsRUFBaEIsQ0FBZ0IsQ0FBQyxFQUM1QyxTQUFTLENBQUMsVUFBQyxjQUFjO2dCQUN2QixPQUFBLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBSSxHQUFHLEVBQUUsY0FBYyxDQUFDO1lBQTdDLENBQTZDLENBQzlDLENBQ0YsQ0FBQztTQUNIO1FBRUQsSUFBTSxPQUFPLEdBQUcsb0JBQW9CLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRXhELElBQU0sUUFBUSxHQUFHLGFBQWEsQ0FBQztZQUM3QixJQUFJLENBQUMsY0FBYyxDQUFDLGtCQUFrQixFQUFFO1lBQ3hDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNiLE1BQU0sQ0FBQyxZQUFZLENBQUMsb0NBQW9DLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQ3hFO1NBQ0YsQ0FBQyxDQUFDLElBQUksQ0FDTCxTQUFTLENBQUMsY0FBYyxDQUFDLEVBQ3pCLEdBQUcsQ0FBQyxVQUFDLEVBQTJCO2dCQUEzQixrQkFBMkIsRUFBMUIsbUJBQVcsRUFBRSxvQkFBWTtZQUM3QixJQUFNLGFBQWEsR0FDakIsWUFBWSxDQUFDLE9BQU8sSUFBSSxZQUFZLENBQUMsT0FBTyxJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUM7WUFDckUsc0ZBQXNGO1lBQ3RGLHFGQUFxRjtZQUNyRiwwRUFBMEU7WUFDMUUsSUFBTSx5QkFBeUIsR0FBRyxXQUFXO2dCQUMzQyxDQUFDLENBQUMsb0JBQW9CLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxLQUFLLE9BQU87Z0JBQ3JELENBQUMsQ0FBQyxLQUFLLENBQUM7WUFFVixJQUFJLENBQUMsYUFBYSxJQUFJLENBQUMseUJBQXlCLEVBQUU7Z0JBQ2hELEtBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNqQixJQUFJLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLEdBQUcsS0FBQSxFQUFFLFdBQVcsYUFBQSxFQUFFLENBQUMsQ0FDdEQsQ0FBQzthQUNIO1FBQ0gsQ0FBQyxDQUFDLENBQ0gsQ0FBQztRQUVGLElBQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNoQyxNQUFNLENBQUMsWUFBWSxDQUFDLHlCQUF5QixDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQyxFQUM1RCxNQUFNLENBQUMsVUFBQyxTQUFTLElBQUssT0FBQSxTQUFTLEtBQUssU0FBUyxFQUF2QixDQUF1QixDQUFDLENBQ3ZCLENBQUM7UUFFMUIsT0FBTyxLQUFLLENBQ1YsY0FBTSxPQUFBLFFBQVEsQ0FBQyxTQUFTLEVBQUUsRUFBcEIsQ0FBb0IsRUFDMUIsY0FBTSxPQUFBLFVBQVUsRUFBVixDQUFVLENBQ2pCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsbUNBQWMsR0FBZCxVQUFlLFFBQWdCO1FBQS9CLGlCQWFDO1FBWkMsT0FBTyxJQUFJLENBQUMsY0FBYzthQUN2QixjQUFjLEVBQUU7YUFDaEIsSUFBSSxDQUNILFNBQVMsQ0FBQyxVQUFDLFdBQVc7WUFDcEIsT0FBQSxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDYixNQUFNLENBQ0osWUFBWSxDQUFDLDZCQUE2QixDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsQ0FDbEUsRUFDRCxNQUFNLENBQUMsT0FBTyxDQUFDLENBQ2hCO1FBTEQsQ0FLQyxDQUNGLENBQ0YsQ0FBQztJQUNOLENBQUM7SUFFRDs7O09BR0c7SUFDSCw0Q0FBdUIsR0FBdkIsVUFBd0IsaUJBQXlCO1FBQy9DLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxZQUFZLENBQUMsdUJBQXVCLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUNoRSxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7O09BSUc7SUFDSCx3Q0FBbUIsR0FBbkIsVUFDRSxPQUFlLEVBQ2YsUUFBNkM7UUFFN0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ2pCLElBQUksVUFBVSxDQUFDLHNCQUFzQixDQUFDO1lBQ3BDLE1BQU0sRUFBRSxPQUFPO1lBQ2YsS0FBSyxFQUFFLFFBQVE7U0FDaEIsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSCxzQ0FBaUIsR0FBakI7UUFBQSxpQkFPQztRQU5DLElBQUksQ0FBQyxjQUFjO2FBQ2hCLGNBQWMsRUFBRTthQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2IsU0FBUyxDQUFDLFVBQUMsV0FBVztZQUNyQixPQUFBLEtBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksVUFBVSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUFoRSxDQUFnRSxDQUNqRSxDQUFDO0lBQ04sQ0FBQztJQUVEOzs7T0FHRztJQUNILG9DQUFlLEdBQWYsVUFBZ0IsTUFBYztRQUM1QixJQUFNLFdBQVcsR0FBZ0IsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUM7UUFDaEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxVQUFVLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gscUNBQWdCLEdBQWhCLFVBQWlCLEdBQVcsRUFBRSxXQUF5QjtRQUNyRCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLEdBQUcsS0FBQSxFQUFFLFdBQVcsYUFBQSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzdFLENBQUM7SUFFRDs7O09BR0c7SUFDSCxpQ0FBWSxHQUFaLFVBQWEsV0FBd0I7UUFDbkMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUVEOzs7T0FHRztJQUNILDBDQUFxQixHQUFyQixVQUFzQixXQUF3QjtRQUM1QyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsWUFBWSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQ3hELENBQUM7SUFDSixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsNEJBQU8sR0FBUCxVQUFRLFdBQXdCLEVBQUUsV0FBbUI7UUFBckQsaUJBc0JDO1FBdEJpQyw0QkFBQSxFQUFBLG1CQUFtQjtRQUNuRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsWUFBWSxDQUFDLDRCQUE0QixDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQzlELEdBQUcsQ0FBQyxVQUFDLE1BQTJCO1lBQzlCLElBQU0sYUFBYSxHQUFHLE1BQU0sQ0FBQyxPQUFPLElBQUksTUFBTSxDQUFDLE9BQU8sSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDO1lBQ3ZFLElBQU0sWUFBWSxHQUFHLFdBQVcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7WUFDcEQsSUFBSSxDQUFDLGFBQWEsSUFBSSxZQUFZLEVBQUU7Z0JBQ2xDLEtBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksVUFBVSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO2dCQUNqRSxXQUFXLEdBQUcsS0FBSyxDQUFDO2FBQ3JCO1FBQ0gsQ0FBQyxDQUFDLEVBQ0YsTUFBTSxDQUFDLFVBQUMsTUFBTTtZQUNaLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNuQyxtRUFBbUU7Z0JBQ25FLDZDQUE2QztnQkFDN0MsT0FBTyxLQUFLLENBQUM7YUFDZDtZQUNELE9BQU8sTUFBTSxDQUFDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDN0QsQ0FBQyxDQUFDLEVBQ0YsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUNoQixVQUFVLENBQUMsY0FBTSxPQUFBLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBVCxDQUFTLENBQUMsQ0FDNUIsQ0FBQztJQUNKLENBQUM7SUFFRDs7UUFFSTtJQUNKLDRCQUFPLEdBQVAsVUFBUSxXQUF3QixFQUFFLFdBQW1CO1FBQXJELGlCQU1DO1FBTmlDLDRCQUFBLEVBQUEsbUJBQW1CO1FBQ25ELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUNoRCxTQUFTLENBQUMsVUFBQyxPQUFPO1lBQ2hCLE9BQUEsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO1FBQW5ELENBQW1ELENBQ3BELENBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRCxpQ0FBWSxHQUFaLFVBQWEsV0FBd0I7UUFDbkMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUN6RCxDQUFDO0lBQ0osQ0FBQztJQUVELHFDQUFnQixHQUFoQixVQUFpQixXQUF3QixFQUFFLEtBQWE7UUFDdEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxVQUFVLENBQUMsbUJBQW1CLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDOUUsQ0FBQzs7Z0JBbFBrQixLQUFLO2dCQUNJLGNBQWM7OztJQVQvQixVQUFVO1FBSHRCLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyxVQUFVLENBMlB0QjtxQkF2UkQ7Q0F1UkMsQUEzUEQsSUEyUEM7U0EzUFksVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlLCBvZiwgcXVldWVTY2hlZHVsZXIsIHVzaW5nIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBjYXRjaEVycm9yLFxuICBmaWx0ZXIsXG4gIG9ic2VydmVPbixcbiAgcGx1Y2ssXG4gIHNoYXJlUmVwbGF5LFxuICBzd2l0Y2hNYXAsXG4gIHRha2UsXG4gIHRhcCxcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vbW9kZWwvY21zLm1vZGVsJztcbmltcG9ydCB7IFJvdXRpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vcm91dGluZy9mYWNhZGUvcm91dGluZy5zZXJ2aWNlJztcbmltcG9ydCB7IFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vLi4vcm91dGluZy9tb2RlbHMvcGFnZS1jb250ZXh0Lm1vZGVsJztcbmltcG9ydCB7IExvYWRlclN0YXRlIH0gZnJvbSAnLi4vLi4vc3RhdGUvdXRpbHMvbG9hZGVyL2xvYWRlci1zdGF0ZSc7XG5pbXBvcnQgeyBDb250ZW50U2xvdERhdGEgfSBmcm9tICcuLi9tb2RlbC9jb250ZW50LXNsb3QtZGF0YS5tb2RlbCc7XG5pbXBvcnQgeyBOb2RlSXRlbSB9IGZyb20gJy4uL21vZGVsL25vZGUtaXRlbS5tb2RlbCc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAnLi4vbW9kZWwvcGFnZS5tb2RlbCc7XG5pbXBvcnQgeyBDbXNBY3Rpb25zIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhDbXMgfSBmcm9tICcuLi9zdG9yZS9jbXMtc3RhdGUnO1xuaW1wb3J0IHsgQ21zU2VsZWN0b3JzIH0gZnJvbSAnLi4vc3RvcmUvc2VsZWN0b3JzL2luZGV4JztcbmltcG9ydCB7IHNlcmlhbGl6ZVBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vdXRpbHMvY21zLXV0aWxzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENtc1NlcnZpY2Uge1xuICBwcml2YXRlIGNvbXBvbmVudHM6IHtcbiAgICBbdWlkOiBzdHJpbmddOiB7XG4gICAgICBbcGFnZUNvbnRleHQ6IHN0cmluZ106IE9ic2VydmFibGU8Q21zQ29tcG9uZW50PjtcbiAgICB9O1xuICB9ID0ge307XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhDbXM+LFxuICAgIHByb3RlY3RlZCByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2VcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBHZXQgY3VycmVudCBDTVMgcGFnZSBkYXRhXG4gICAqL1xuICBnZXRDdXJyZW50UGFnZSgpOiBPYnNlcnZhYmxlPFBhZ2U+IHtcbiAgICByZXR1cm4gdGhpcy5yb3V0aW5nU2VydmljZVxuICAgICAgLmdldFBhZ2VDb250ZXh0KClcbiAgICAgIC5waXBlKFxuICAgICAgICBzd2l0Y2hNYXAoKHBhZ2VDb250ZXh0KSA9PlxuICAgICAgICAgIHRoaXMuc3RvcmUuc2VsZWN0KENtc1NlbGVjdG9ycy5nZXRQYWdlRGF0YShwYWdlQ29udGV4dCkpXG4gICAgICAgIClcbiAgICAgICk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IENNUyBjb21wb25lbnQgZGF0YSBieSB1aWRcbiAgICpcbiAgICogVGhpcyBtZXRob2QgY2FuIGJlIHNhZmVseSBhbmQgb3B0aW1hbGx5IHVzZWQgdG8gbG9hZCBtdWx0aXBsZSBjb21wb25lbnRzIGRhdGEgYXQgdGhlIHNhbWUgdGltZS5cbiAgICogQ2FsbGluZyBnZXRDb21wb25lbnREYXRhIG11bHRpcGxlIHRpbWVzIGZvciBkaWZmZXJlbnQgY29tcG9uZW50cyB3aWxsIGFsd2F5cyByZXN1bHQgaW4gb3B0aW1pemVkXG4gICAqIGJhY2stZW5kIHJlcXVlc3Q6IGFsbCBjb21wb25lbnRzIHJlcXVlc3RlZCBhdCB0aGUgc2FtZSB0aW1lIChpbiBvbmUgZXZlbnQgbG9vcCkgd2lsbCBiZSBsb2FkZWQgaW4gb25lIG5ldHdvcmsgY2FsbC5cbiAgICpcbiAgICogSW4gY2FzZSB0aGUgY29tcG9uZW50IGRhdGEgaXMgbm90IHByZXNlbnQsIHRoZSBtZXRob2Qgd2lsbCBsb2FkIGl0LlxuICAgKiBPdGhlcndpc2UsIGlmIHRoZSBwYWdlIGNvbnRleHQgaXMgbm90IHByb3ZpZGVkLCB0aGUgY3VycmVudCBwYWdlIGNvbnRleHQgZnJvbSB0aGUgcm91dGVyIHN0YXRlIHdpbGwgYmUgdXNlZCBpbnN0ZWFkLlxuICAgKlxuICAgKiBAcGFyYW0gdWlkIENNUyBjb21wb25lbnQgdWlkXG4gICAqIEBwYXJhbSBwYWdlQ29udGV4dCBpZiBwcm92aWRlZCwgaXQgd2lsbCBiZSB1c2VkIHRvIGxvb2t1cCB0aGUgY29tcG9uZW50IGRhdGEuXG4gICAqL1xuICBnZXRDb21wb25lbnREYXRhPFQgZXh0ZW5kcyBDbXNDb21wb25lbnQgfCBudWxsPihcbiAgICB1aWQ6IHN0cmluZyxcbiAgICBwYWdlQ29udGV4dD86IFBhZ2VDb250ZXh0XG4gICk6IE9ic2VydmFibGU8VD4ge1xuICAgIGNvbnN0IGNvbnRleHQgPSBzZXJpYWxpemVQYWdlQ29udGV4dChwYWdlQ29udGV4dCwgdHJ1ZSk7XG4gICAgaWYgKCF0aGlzLmNvbXBvbmVudHNbdWlkXSkge1xuICAgICAgLy8gY3JlYXRlIHRoZSBjb21wb25lbnQgZGF0YSBzdHJ1Y3R1cmUsIGlmIGl0IGRvZXNuJ3QgYWxyZWFkeSBleGlzdFxuICAgICAgdGhpcy5jb21wb25lbnRzW3VpZF0gPSB7fTtcbiAgICB9XG5cbiAgICBjb25zdCBjb21wb25lbnQgPSB0aGlzLmNvbXBvbmVudHNbdWlkXTtcbiAgICBpZiAoIWNvbXBvbmVudFtjb250ZXh0XSkge1xuICAgICAgLy8gY3JlYXRlIHRoZSBjb21wb25lbnQgZGF0YSBhbmQgYXNzaWduIGl0IHRvIHRoZSBjb21wb25lbnQncyBjb250ZXh0XG4gICAgICBjb21wb25lbnRbY29udGV4dF0gPSB0aGlzLmNyZWF0ZUNvbXBvbmVudERhdGEodWlkLCBwYWdlQ29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFtjb250ZXh0XSBhcyBPYnNlcnZhYmxlPFQ+O1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVDb21wb25lbnREYXRhPFQgZXh0ZW5kcyBDbXNDb21wb25lbnQ+KFxuICAgIHVpZDogc3RyaW5nLFxuICAgIHBhZ2VDb250ZXh0PzogUGFnZUNvbnRleHRcbiAgKTogT2JzZXJ2YWJsZTxUPiB7XG4gICAgaWYgKCFwYWdlQ29udGV4dCkge1xuICAgICAgcmV0dXJuIHRoaXMucm91dGluZ1NlcnZpY2UuZ2V0UGFnZUNvbnRleHQoKS5waXBlKFxuICAgICAgICBmaWx0ZXIoKGN1cnJlbnRDb250ZXh0KSA9PiAhIWN1cnJlbnRDb250ZXh0KSxcbiAgICAgICAgc3dpdGNoTWFwKChjdXJyZW50Q29udGV4dCkgPT5cbiAgICAgICAgICB0aGlzLmdldENvbXBvbmVudERhdGE8VD4odWlkLCBjdXJyZW50Q29udGV4dClcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc2VyaWFsaXplUGFnZUNvbnRleHQocGFnZUNvbnRleHQsIHRydWUpO1xuXG4gICAgY29uc3QgbG9hZGluZyQgPSBjb21iaW5lTGF0ZXN0KFtcbiAgICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ2V0TmV4dFBhZ2VDb250ZXh0KCksXG4gICAgICB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICAgIHNlbGVjdChDbXNTZWxlY3RvcnMuY29tcG9uZW50c0xvYWRlclN0YXRlU2VsZWN0b3JGYWN0b3J5KHVpZCwgY29udGV4dCkpXG4gICAgICApLFxuICAgIF0pLnBpcGUoXG4gICAgICBvYnNlcnZlT24ocXVldWVTY2hlZHVsZXIpLFxuICAgICAgdGFwKChbbmV4dENvbnRleHQsIGxvYWRpbmdTdGF0ZV0pID0+IHtcbiAgICAgICAgY29uc3QgYXR0ZW1wdGVkTG9hZCA9XG4gICAgICAgICAgbG9hZGluZ1N0YXRlLmxvYWRpbmcgfHwgbG9hZGluZ1N0YXRlLnN1Y2Nlc3MgfHwgbG9hZGluZ1N0YXRlLmVycm9yO1xuICAgICAgICAvLyBpZiB0aGUgcmVxdWVzdGVkIGNvbnRleHQgaXMgdGhlIHNhbWUgYXMgdGhlIG9uZSB0aGF0J3MgY3VycmVudGx5IGJlaW5nIG5hdmlnYXRlZCB0b1xuICAgICAgICAvLyAoYXMgaXQgbWlnaHQgYWxyZWFkeSBiZWVuIHRyaWdnZXJlZCBhbmQgbWlnaHQgYmUgYXZhaWxhYmxlIHNob3J0bHkgZnJvbSBwYWdlIGRhdGEpXG4gICAgICAgIC8vIFRPRE8oaXNzdWU6MzY0OSksIFRPRE8oaXNzdWU6MzY2OCkgLSB0aGlzIG9wdGltaXphdGlvbiBjb3VsZCBiZSByZW1vdmVkXG4gICAgICAgIGNvbnN0IGNvdWxkQmVMb2FkZWRXaXRoUGFnZURhdGEgPSBuZXh0Q29udGV4dFxuICAgICAgICAgID8gc2VyaWFsaXplUGFnZUNvbnRleHQobmV4dENvbnRleHQsIHRydWUpID09PSBjb250ZXh0XG4gICAgICAgICAgOiBmYWxzZTtcblxuICAgICAgICBpZiAoIWF0dGVtcHRlZExvYWQgJiYgIWNvdWxkQmVMb2FkZWRXaXRoUGFnZURhdGEpIHtcbiAgICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgICAgICAgbmV3IENtc0FjdGlvbnMuTG9hZENtc0NvbXBvbmVudCh7IHVpZCwgcGFnZUNvbnRleHQgfSlcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG5cbiAgICBjb25zdCBjb21wb25lbnQkID0gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KENtc1NlbGVjdG9ycy5jb21wb25lbnRzU2VsZWN0b3JGYWN0b3J5KHVpZCwgY29udGV4dCkpLFxuICAgICAgZmlsdGVyKChjb21wb25lbnQpID0+IGNvbXBvbmVudCAhPT0gdW5kZWZpbmVkKVxuICAgICkgYXMgT2JzZXJ2YWJsZTxUIHwgbnVsbD47XG5cbiAgICByZXR1cm4gdXNpbmcoXG4gICAgICAoKSA9PiBsb2FkaW5nJC5zdWJzY3JpYmUoKSxcbiAgICAgICgpID0+IGNvbXBvbmVudCRcbiAgICApLnBpcGUoc2hhcmVSZXBsYXkoeyBidWZmZXJTaXplOiAxLCByZWZDb3VudDogdHJ1ZSB9KSk7XG4gIH1cblxuICAvKipcbiAgICogR2l2ZW4gdGhlIHBvc2l0aW9uLCBnZXQgdGhlIGNvbnRlbnQgc2xvdCBkYXRhXG4gICAqIEBwYXJhbSBwb3NpdGlvbiA6IGNvbnRlbnQgc2xvdCBwb3NpdGlvblxuICAgKi9cbiAgZ2V0Q29udGVudFNsb3QocG9zaXRpb246IHN0cmluZyk6IE9ic2VydmFibGU8Q29udGVudFNsb3REYXRhPiB7XG4gICAgcmV0dXJuIHRoaXMucm91dGluZ1NlcnZpY2VcbiAgICAgIC5nZXRQYWdlQ29udGV4dCgpXG4gICAgICAucGlwZShcbiAgICAgICAgc3dpdGNoTWFwKChwYWdlQ29udGV4dCkgPT5cbiAgICAgICAgICB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICAgICAgICBzZWxlY3QoXG4gICAgICAgICAgICAgIENtc1NlbGVjdG9ycy5nZXRDdXJyZW50U2xvdFNlbGVjdG9yRmFjdG9yeShwYWdlQ29udGV4dCwgcG9zaXRpb24pXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgZmlsdGVyKEJvb2xlYW4pXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdpdmVuIG5hdmlnYXRpb24gbm9kZSB1aWQsIGdldCBpdGVtcyAod2l0aCBpZCBhbmQgdHlwZSkgaW5zaWRlIHRoZSBuYXZpZ2F0aW9uIGVudHJpZXNcbiAgICogQHBhcmFtIG5hdmlnYXRpb25Ob2RlVWlkIDogdWlkIG9mIHRoZSBuYXZpZ2F0aW9uIG5vZGVcbiAgICovXG4gIGdldE5hdmlnYXRpb25FbnRyeUl0ZW1zKG5hdmlnYXRpb25Ob2RlVWlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPE5vZGVJdGVtPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChDbXNTZWxlY3RvcnMuZ2V0TmF2aWdhdGlvbkVudHJ5SXRlbXMobmF2aWdhdGlvbk5vZGVVaWQpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogTG9hZCBuYXZpZ2F0aW9uIGl0ZW1zIGRhdGFcbiAgICogQHBhcmFtIHJvb3RVaWQgOiB0aGUgdWlkIG9mIHRoZSByb290IG5hdmlnYXRpb24gbm9kZVxuICAgKiBAcGFyYW0gaXRlbUxpc3QgOiBsaXN0IG9mIGl0ZW1zICh3aXRoIGlkIGFuZCB0eXBlKVxuICAgKi9cbiAgbG9hZE5hdmlnYXRpb25JdGVtcyhcbiAgICByb290VWlkOiBzdHJpbmcsXG4gICAgaXRlbUxpc3Q6IHsgaWQ6IHN0cmluZzsgc3VwZXJUeXBlOiBzdHJpbmcgfVtdXG4gICk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgQ21zQWN0aW9ucy5Mb2FkQ21zTmF2aWdhdGlvbkl0ZW1zKHtcbiAgICAgICAgbm9kZUlkOiByb290VWlkLFxuICAgICAgICBpdGVtczogaXRlbUxpc3QsXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmVmcmVzaCB0aGUgY29udGVudCBvZiB0aGUgbGF0ZXN0IGNtcyBwYWdlXG4gICAqL1xuICByZWZyZXNoTGF0ZXN0UGFnZSgpOiB2b2lkIHtcbiAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlXG4gICAgICAuZ2V0UGFnZUNvbnRleHQoKVxuICAgICAgLnBpcGUodGFrZSgxKSlcbiAgICAgIC5zdWJzY3JpYmUoKHBhZ2VDb250ZXh0KSA9PlxuICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDbXNBY3Rpb25zLkxvYWRDbXNQYWdlRGF0YShwYWdlQ29udGV4dCkpXG4gICAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZnJlc2ggdGhlIGNtcyBwYWdlIGNvbnRlbnQgYnkgcGFnZSBJZFxuICAgKiBAcGFyYW0gcGFnZUlkXG4gICAqL1xuICByZWZyZXNoUGFnZUJ5SWQocGFnZUlkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBwYWdlQ29udGV4dDogUGFnZUNvbnRleHQgPSB7IGlkOiBwYWdlSWQgfTtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDbXNBY3Rpb25zLkxvYWRDbXNQYWdlRGF0YShwYWdlQ29udGV4dCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZnJlc2ggY21zIGNvbXBvbmVudCdzIGNvbnRlbnRcbiAgICogQHBhcmFtIHVpZCBjb21wb25lbnQgdWlkXG4gICAqIEBwYXJhbSBwYWdlQ29udGV4dCBhbiBvcHRpb25hbCBwYXJhbWV0ZXIgdGhhdCBlbmFibGVzIHRoZSBjYWxsZXIgdG8gc3BlY2lmeSBmb3Igd2hpY2ggY29udGV4dCB0aGUgY29tcG9uZW50IHNob3VsZCBiZSByZWZyZXNoZWQuXG4gICAqIElmIG5vdCBzcGVjaWZpZWQsICdjdXJyZW50JyBwYWdlIGNvbnRleHQgaXMgdXNlZC5cbiAgICovXG4gIHJlZnJlc2hDb21wb25lbnQodWlkOiBzdHJpbmcsIHBhZ2VDb250ZXh0PzogUGFnZUNvbnRleHQpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDbXNBY3Rpb25zLkxvYWRDbXNDb21wb25lbnQoeyB1aWQsIHBhZ2VDb250ZXh0IH0pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHaXZlbiBwYWdlQ29udGV4dCwgcmV0dXJuIHRoZSBDTVMgcGFnZSBkYXRhXG4gICAqIEBwYXJhbSBwYWdlQ29udGV4dFxuICAgKi9cbiAgZ2V0UGFnZVN0YXRlKHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCk6IE9ic2VydmFibGU8UGFnZT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KENtc1NlbGVjdG9ycy5nZXRQYWdlRGF0YShwYWdlQ29udGV4dCkpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHaXZlbiBwYWdlQ29udGV4dCwgcmV0dXJuIHRoZSBDTVMgcGFnZSBkYXRhXG4gICAqIEBwYXJhbSBwYWdlQ29udGV4dFxuICAgKi9cbiAgZ2V0UGFnZUNvbXBvbmVudFR5cGVzKHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCk6IE9ic2VydmFibGU8c3RyaW5nW10+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KENtc1NlbGVjdG9ycy5nZXRQYWdlQ29tcG9uZW50VHlwZXMocGFnZUNvbnRleHQpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogR2l2ZW4gcGFnZUNvbnRleHQsIHJldHVybiB3aGV0aGVyIHRoZSBDTVMgcGFnZSBkYXRhIGV4aXN0cyBvciBub3RcbiAgICogQHBhcmFtIHBhZ2VDb250ZXh0XG4gICAqL1xuICBoYXNQYWdlKHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCwgZm9yY2VSZWxvYWQgPSBmYWxzZSk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoQ21zU2VsZWN0b3JzLmdldFBhZ2VTdGF0ZUluZGV4TG9hZGVyU3RhdGUocGFnZUNvbnRleHQpKSxcbiAgICAgIHRhcCgoZW50aXR5OiBMb2FkZXJTdGF0ZTxzdHJpbmc+KSA9PiB7XG4gICAgICAgIGNvbnN0IGF0dGVtcHRlZExvYWQgPSBlbnRpdHkubG9hZGluZyB8fCBlbnRpdHkuc3VjY2VzcyB8fCBlbnRpdHkuZXJyb3I7XG4gICAgICAgIGNvbnN0IHNob3VsZFJlbG9hZCA9IGZvcmNlUmVsb2FkICYmICFlbnRpdHkubG9hZGluZztcbiAgICAgICAgaWYgKCFhdHRlbXB0ZWRMb2FkIHx8IHNob3VsZFJlbG9hZCkge1xuICAgICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IENtc0FjdGlvbnMuTG9hZENtc1BhZ2VEYXRhKHBhZ2VDb250ZXh0KSk7XG4gICAgICAgICAgZm9yY2VSZWxvYWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBmaWx0ZXIoKGVudGl0eSkgPT4ge1xuICAgICAgICBpZiAoIWVudGl0eS5oYXNPd25Qcm9wZXJ0eSgndmFsdWUnKSkge1xuICAgICAgICAgIC8vIGlmIHdlIGhhdmUgaW5jb21wbGV0ZSBzdGF0ZSBmcm9tIFNTUiBmYWlsZWQgbG9hZCB0cmFuc2ZlciBzdGF0ZSxcbiAgICAgICAgICAvLyB3ZSBzaG91bGQgd2FpdCBmb3IgcmVsb2FkIGFuZCBhY3R1YWwgdmFsdWVcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVudGl0eS5zdWNjZXNzIHx8IChlbnRpdHkuZXJyb3IgJiYgIWVudGl0eS5sb2FkaW5nKTtcbiAgICAgIH0pLFxuICAgICAgcGx1Y2soJ3N1Y2Nlc3MnKSxcbiAgICAgIGNhdGNoRXJyb3IoKCkgPT4gb2YoZmFsc2UpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogR2l2ZW4gcGFnZUNvbnRleHQsIHJldHVybiB0aGUgQ01TIHBhZ2UgZGF0YVxuICAgKiovXG4gIGdldFBhZ2UocGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0LCBmb3JjZVJlbG9hZCA9IGZhbHNlKTogT2JzZXJ2YWJsZTxQYWdlPiB7XG4gICAgcmV0dXJuIHRoaXMuaGFzUGFnZShwYWdlQ29udGV4dCwgZm9yY2VSZWxvYWQpLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKGhhc1BhZ2UpID0+XG4gICAgICAgIGhhc1BhZ2UgPyB0aGlzLmdldFBhZ2VTdGF0ZShwYWdlQ29udGV4dCkgOiBvZihudWxsKVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBnZXRQYWdlSW5kZXgocGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0KTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KENtc1NlbGVjdG9ycy5nZXRQYWdlU3RhdGVJbmRleFZhbHVlKHBhZ2VDb250ZXh0KSlcbiAgICApO1xuICB9XG5cbiAgc2V0UGFnZUZhaWxJbmRleChwYWdlQ29udGV4dDogUGFnZUNvbnRleHQsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDbXNBY3Rpb25zLkNtc1NldFBhZ2VGYWlsSW5kZXgocGFnZUNvbnRleHQsIHZhbHVlKSk7XG4gIH1cbn1cbiJdfQ==
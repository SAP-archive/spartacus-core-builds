/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { combineLatest, of, queueScheduler, using } from 'rxjs';
import { catchError, filter, observeOn, pluck, shareReplay, switchMap, take, tap, } from 'rxjs/operators';
import { RoutingService } from '../../routing/facade/routing.service';
import { serializePageContext } from '../../util/serialization-utils';
import { CmsActions } from '../store/actions/index';
import { CmsSelectors } from '../store/selectors/index';
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
        set: /**
         * Set _launchInSmartEdit value
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._launchInSmartEdit = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Whether the app launched in smart edit
     */
    /**
     * Whether the app launched in smart edit
     * @return {?}
     */
    CmsService.prototype.isLaunchInSmartEdit = /**
     * Whether the app launched in smart edit
     * @return {?}
     */
    function () {
        return this._launchInSmartEdit;
    };
    /**
     * Get current CMS page data
     */
    /**
     * Get current CMS page data
     * @return {?}
     */
    CmsService.prototype.getCurrentPage = /**
     * Get current CMS page data
     * @return {?}
     */
    function () {
        var _this = this;
        return this.routingService
            .getPageContext()
            .pipe(switchMap((/**
         * @param {?} pageContext
         * @return {?}
         */
        function (pageContext) {
            return _this.store.select(CmsSelectors.getPageData(pageContext));
        })));
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
     * @template T
     * @param {?} uid CMS component uid
     * @param {?=} pageContext if provided, it will be used to lookup the component data.
     * @return {?}
     */
    CmsService.prototype.getComponentData = /**
     * Get CMS component data by uid
     *
     * This method can be safely and optimally used to load multiple components data at the same time.
     * Calling getComponentData multiple times for different components will always result in optimized
     * back-end request: all components requested at the same time (in one event loop) will be loaded in one network call.
     *
     * In case the component data is not present, the method will load it.
     * Otherwise, if the page context is not provided, the current page context from the router state will be used instead.
     *
     * @template T
     * @param {?} uid CMS component uid
     * @param {?=} pageContext if provided, it will be used to lookup the component data.
     * @return {?}
     */
    function (uid, pageContext) {
        /** @type {?} */
        var context = serializePageContext(pageContext);
        if (!this.components[uid]) {
            // create the component data structure, if it doesn't already exist
            this.components[uid] = {};
        }
        /** @type {?} */
        var component = this.components[uid];
        if (!component[context]) {
            // create the component data and assign it to the component's context
            component[context] = this.createComponentData(uid, pageContext);
        }
        return (/** @type {?} */ (component[context]));
    };
    /**
     * @private
     * @template T
     * @param {?} uid
     * @param {?=} pageContext
     * @return {?}
     */
    CmsService.prototype.createComponentData = /**
     * @private
     * @template T
     * @param {?} uid
     * @param {?=} pageContext
     * @return {?}
     */
    function (uid, pageContext) {
        var _this = this;
        if (!pageContext) {
            return this.routingService.getPageContext().pipe(filter((/**
             * @param {?} currentContext
             * @return {?}
             */
            function (currentContext) { return !!currentContext; })), switchMap((/**
             * @param {?} currentContext
             * @return {?}
             */
            function (currentContext) {
                return _this.getComponentData(uid, currentContext);
            })));
        }
        /** @type {?} */
        var context = serializePageContext(pageContext);
        /** @type {?} */
        var loading$ = combineLatest([
            this.routingService.getNextPageContext(),
            this.store.pipe(select(CmsSelectors.componentsLoaderStateSelectorFactory(uid, context))),
        ]).pipe(observeOn(queueScheduler), tap((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), nextContext = _b[0], loadingState = _b[1];
            /** @type {?} */
            var attemptedLoad = loadingState.loading || loadingState.success || loadingState.error;
            // if the requested context is the same as the one that's currently being navigated to
            // (as it might already been triggered and might be available shortly from page data)
            // TODO(issue:3649), TODO(issue:3668) - this optimization could be removed
            /** @type {?} */
            var couldBeLoadedWithPageData = nextContext
                ? serializePageContext(nextContext) === context
                : false;
            if (!attemptedLoad && !couldBeLoadedWithPageData) {
                _this.store.dispatch(new CmsActions.LoadCmsComponent(uid, pageContext));
            }
        })));
        /** @type {?} */
        var component$ = (/** @type {?} */ (this.store.pipe(select(CmsSelectors.componentsSelectorFactory(uid, context)), 
        // TODO(issue:6027) - this `filter` should be removed.
        // The reason for removal: with `filter` in place, when moving to a page that has restrictions, the component data will still emit the previous value.
        // Removing it causes some components to fail, because they are not checking
        // if the data is actually there. I noticed these that this component is failing, but there are possibly more:
        // - `tab-paragraph-container.component.ts` when visiting any PDP page
        filter((/**
         * @param {?} component
         * @return {?}
         */
        function (component) { return !!component; })))));
        return using((/**
         * @return {?}
         */
        function () { return loading$.subscribe(); }), (/**
         * @return {?}
         */
        function () { return component$; })).pipe(shareReplay({ bufferSize: 1, refCount: true }));
    };
    /**
     * Given the position, get the content slot data
     * @param position : content slot position
     */
    /**
     * Given the position, get the content slot data
     * @param {?} position : content slot position
     * @return {?}
     */
    CmsService.prototype.getContentSlot = /**
     * Given the position, get the content slot data
     * @param {?} position : content slot position
     * @return {?}
     */
    function (position) {
        var _this = this;
        return this.routingService.getPageContext().pipe(switchMap((/**
         * @param {?} pageContext
         * @return {?}
         */
        function (pageContext) {
            return _this.store.pipe(select(CmsSelectors.getCurrentSlotSelectorFactory(pageContext, position)), filter(Boolean));
        })));
    };
    /**
     * Given navigation node uid, get items (with id and type) inside the navigation entries
     * @param navigationNodeUid : uid of the navigation node
     */
    /**
     * Given navigation node uid, get items (with id and type) inside the navigation entries
     * @param {?} navigationNodeUid : uid of the navigation node
     * @return {?}
     */
    CmsService.prototype.getNavigationEntryItems = /**
     * Given navigation node uid, get items (with id and type) inside the navigation entries
     * @param {?} navigationNodeUid : uid of the navigation node
     * @return {?}
     */
    function (navigationNodeUid) {
        return this.store.pipe(select(CmsSelectors.getNavigationEntryItems(navigationNodeUid)));
    };
    /**
     * Load navigation items data
     * @param rootUid : the uid of the root navigation node
     * @param itemList : list of items (with id and type)
     */
    /**
     * Load navigation items data
     * @param {?} rootUid : the uid of the root navigation node
     * @param {?} itemList : list of items (with id and type)
     * @return {?}
     */
    CmsService.prototype.loadNavigationItems = /**
     * Load navigation items data
     * @param {?} rootUid : the uid of the root navigation node
     * @param {?} itemList : list of items (with id and type)
     * @return {?}
     */
    function (rootUid, itemList) {
        this.store.dispatch(new CmsActions.LoadCmsNavigationItems({
            nodeId: rootUid,
            items: itemList,
        }));
    };
    /**
     * Refresh the content of the latest cms page
     */
    /**
     * Refresh the content of the latest cms page
     * @return {?}
     */
    CmsService.prototype.refreshLatestPage = /**
     * Refresh the content of the latest cms page
     * @return {?}
     */
    function () {
        var _this = this;
        this.routingService
            .getPageContext()
            .pipe(take(1))
            .subscribe((/**
         * @param {?} pageContext
         * @return {?}
         */
        function (pageContext) {
            return _this.store.dispatch(new CmsActions.LoadCmsPageData(pageContext));
        }));
    };
    /**
     * Refresh the cms page content by page Id
     * @param pageId
     */
    /**
     * Refresh the cms page content by page Id
     * @param {?} pageId
     * @return {?}
     */
    CmsService.prototype.refreshPageById = /**
     * Refresh the cms page content by page Id
     * @param {?} pageId
     * @return {?}
     */
    function (pageId) {
        /** @type {?} */
        var pageContext = { id: pageId };
        this.store.dispatch(new CmsActions.LoadCmsPageData(pageContext));
    };
    /**
     * Refresh cms component's content
     * @param uid component uid
     * @param pageContext an optional parameter that enables the caller to specify for which context the component should be refreshed.
     * If not specified, 'current' page context is used.
     */
    /**
     * Refresh cms component's content
     * @param {?} uid component uid
     * @param {?=} pageContext an optional parameter that enables the caller to specify for which context the component should be refreshed.
     * If not specified, 'current' page context is used.
     * @return {?}
     */
    CmsService.prototype.refreshComponent = /**
     * Refresh cms component's content
     * @param {?} uid component uid
     * @param {?=} pageContext an optional parameter that enables the caller to specify for which context the component should be refreshed.
     * If not specified, 'current' page context is used.
     * @return {?}
     */
    function (uid, pageContext) {
        this.store.dispatch(new CmsActions.LoadCmsComponent(uid, pageContext));
    };
    /**
     * Given pageContext, return the CMS page data
     * @param pageContext
     */
    /**
     * Given pageContext, return the CMS page data
     * @param {?} pageContext
     * @return {?}
     */
    CmsService.prototype.getPageState = /**
     * Given pageContext, return the CMS page data
     * @param {?} pageContext
     * @return {?}
     */
    function (pageContext) {
        return this.store.pipe(select(CmsSelectors.getPageData(pageContext)));
    };
    /**
     * Given pageContext, return the CMS page data
     * @param pageContext
     */
    /**
     * Given pageContext, return the CMS page data
     * @param {?} pageContext
     * @return {?}
     */
    CmsService.prototype.getPageComponentTypes = /**
     * Given pageContext, return the CMS page data
     * @param {?} pageContext
     * @return {?}
     */
    function (pageContext) {
        return this.store.pipe(select(CmsSelectors.getPageComponentTypes(pageContext)));
    };
    /**
     * Given pageContext, return whether the CMS page data exists or not
     * @param pageContext
     */
    /**
     * Given pageContext, return whether the CMS page data exists or not
     * @param {?} pageContext
     * @param {?=} forceReload
     * @return {?}
     */
    CmsService.prototype.hasPage = /**
     * Given pageContext, return whether the CMS page data exists or not
     * @param {?} pageContext
     * @param {?=} forceReload
     * @return {?}
     */
    function (pageContext, forceReload) {
        var _this = this;
        if (forceReload === void 0) { forceReload = false; }
        return this.store.pipe(select(CmsSelectors.getPageStateIndexLoaderState(pageContext)), tap((/**
         * @param {?} entity
         * @return {?}
         */
        function (entity) {
            /** @type {?} */
            var attemptedLoad = entity.loading || entity.success || entity.error;
            /** @type {?} */
            var shouldReload = forceReload && !entity.loading;
            if (!attemptedLoad || shouldReload) {
                _this.store.dispatch(new CmsActions.LoadCmsPageData(pageContext));
                forceReload = false;
            }
        })), filter((/**
         * @param {?} entity
         * @return {?}
         */
        function (entity) {
            if (!entity.hasOwnProperty('value')) {
                // if we have incomplete state from SSR failed load transfer state,
                // we should wait for reload and actual value
                return false;
            }
            return entity.success || (entity.error && !entity.loading);
        })), pluck('success'), catchError((/**
         * @return {?}
         */
        function () { return of(false); })));
    };
    /**
     * Given pageContext, return the CMS page data
     **/
    /**
     * Given pageContext, return the CMS page data
     *
     * @param {?} pageContext
     * @param {?=} forceReload
     * @return {?}
     */
    CmsService.prototype.getPage = /**
     * Given pageContext, return the CMS page data
     *
     * @param {?} pageContext
     * @param {?=} forceReload
     * @return {?}
     */
    function (pageContext, forceReload) {
        var _this = this;
        if (forceReload === void 0) { forceReload = false; }
        return this.hasPage(pageContext, forceReload).pipe(switchMap((/**
         * @param {?} hasPage
         * @return {?}
         */
        function (hasPage) {
            return hasPage ? _this.getPageState(pageContext) : of(null);
        })));
    };
    /**
     * @param {?} pageContext
     * @return {?}
     */
    CmsService.prototype.getPageIndex = /**
     * @param {?} pageContext
     * @return {?}
     */
    function (pageContext) {
        return this.store.pipe(select(CmsSelectors.getPageStateIndexValue(pageContext)));
    };
    /**
     * @param {?} pageContext
     * @param {?} value
     * @return {?}
     */
    CmsService.prototype.setPageFailIndex = /**
     * @param {?} pageContext
     * @param {?} value
     * @return {?}
     */
    function (pageContext, value) {
        this.store.dispatch(new CmsActions.CmsSetPageFailIndex(pageContext, value));
    };
    CmsService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    CmsService.ctorParameters = function () { return [
        { type: Store },
        { type: RoutingService }
    ]; };
    /** @nocollapse */ CmsService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CmsService_Factory() { return new CmsService(i0.ɵɵinject(i1.Store), i0.ɵɵinject(i2.RoutingService)); }, token: CmsService, providedIn: "root" });
    return CmsService;
}());
export { CmsService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CmsService.prototype._launchInSmartEdit;
    /**
     * @type {?}
     * @private
     */
    CmsService.prototype.components;
    /**
     * @type {?}
     * @protected
     */
    CmsService.prototype.store;
    /**
     * @type {?}
     * @protected
     */
    CmsService.prototype.routingService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL2ZhY2FkZS9jbXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDNUMsT0FBTyxFQUFFLGFBQWEsRUFBYyxFQUFFLEVBQUUsY0FBYyxFQUFFLEtBQUssRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM1RSxPQUFPLEVBQ0wsVUFBVSxFQUNWLE1BQU0sRUFDTixTQUFTLEVBQ1QsS0FBSyxFQUNMLFdBQVcsRUFDWCxTQUFTLEVBQ1QsSUFBSSxFQUNKLEdBQUcsR0FDSixNQUFNLGdCQUFnQixDQUFDO0FBRXhCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUd0RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUl0RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFcEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7O0FBRXhEO0lBWUUsb0JBQ1ksS0FBMEIsRUFDMUIsY0FBOEI7UUFEOUIsVUFBSyxHQUFMLEtBQUssQ0FBcUI7UUFDMUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBVmxDLHVCQUFrQixHQUFHLEtBQUssQ0FBQztRQUUzQixlQUFVLEdBSWQsRUFBRSxDQUFDO0lBS0osQ0FBQztJQUtKLHNCQUFJLHlDQUFpQjtRQUhyQjs7V0FFRzs7Ozs7O1FBQ0gsVUFBc0IsS0FBYztZQUNsQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO1FBQ2xDLENBQUM7OztPQUFBO0lBRUQ7O09BRUc7Ozs7O0lBQ0gsd0NBQW1COzs7O0lBQW5CO1FBQ0Us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Ozs7O0lBRW5DLGdDQUlPOzs7OztJQUdMLDJCQUFvQzs7Ozs7SUFDcEMsb0NBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc2VsZWN0LCBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUsIG9mLCBxdWV1ZVNjaGVkdWxlciwgdXNpbmcgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIGNhdGNoRXJyb3IsXG4gIGZpbHRlcixcbiAgb2JzZXJ2ZU9uLFxuICBwbHVjayxcbiAgc2hhcmVSZXBsYXksXG4gIHN3aXRjaE1hcCxcbiAgdGFrZSxcbiAgdGFwLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnQgfSBmcm9tICcuLi8uLi9tb2RlbC9jbXMubW9kZWwnO1xuaW1wb3J0IHsgUm91dGluZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9yb3V0aW5nL2ZhY2FkZS9yb3V0aW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGFnZUNvbnRleHQgfSBmcm9tICcuLi8uLi9yb3V0aW5nL21vZGVscy9wYWdlLWNvbnRleHQubW9kZWwnO1xuaW1wb3J0IHsgTG9hZGVyU3RhdGUgfSBmcm9tICcuLi8uLi9zdGF0ZS91dGlscy9sb2FkZXIvbG9hZGVyLXN0YXRlJztcbmltcG9ydCB7IHNlcmlhbGl6ZVBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vLi4vdXRpbC9zZXJpYWxpemF0aW9uLXV0aWxzJztcbmltcG9ydCB7IENvbnRlbnRTbG90RGF0YSB9IGZyb20gJy4uL21vZGVsL2NvbnRlbnQtc2xvdC1kYXRhLm1vZGVsJztcbmltcG9ydCB7IE5vZGVJdGVtIH0gZnJvbSAnLi4vbW9kZWwvbm9kZS1pdGVtLm1vZGVsJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICcuLi9tb2RlbC9wYWdlLm1vZGVsJztcbmltcG9ydCB7IENtc0FjdGlvbnMgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IFN0YXRlV2l0aENtcyB9IGZyb20gJy4uL3N0b3JlL2Ntcy1zdGF0ZSc7XG5pbXBvcnQgeyBDbXNTZWxlY3RvcnMgfSBmcm9tICcuLi9zdG9yZS9zZWxlY3RvcnMvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ21zU2VydmljZSB7XG4gIHByaXZhdGUgX2xhdW5jaEluU21hcnRFZGl0ID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBjb21wb25lbnRzOiB7XG4gICAgW3VpZDogc3RyaW5nXToge1xuICAgICAgW3BhZ2VDb250ZXh0OiBzdHJpbmddOiBPYnNlcnZhYmxlPENtc0NvbXBvbmVudD47XG4gICAgfTtcbiAgfSA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoQ21zPixcbiAgICBwcm90ZWN0ZWQgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlXG4gICkge31cblxuICAvKipcbiAgICogU2V0IF9sYXVuY2hJblNtYXJ0RWRpdCB2YWx1ZVxuICAgKi9cbiAgc2V0IGxhdW5jaEluU21hcnRFZGl0KHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fbGF1bmNoSW5TbWFydEVkaXQgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZSBhcHAgbGF1bmNoZWQgaW4gc21hcnQgZWRpdFxuICAgKi9cbiAgaXNMYXVuY2hJblNtYXJ0RWRpdCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fbGF1bmNoSW5TbWFydEVkaXQ7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGN1cnJlbnQgQ01TIHBhZ2UgZGF0YVxuICAgKi9cbiAgZ2V0Q3VycmVudFBhZ2UoKTogT2JzZXJ2YWJsZTxQYWdlPiB7XG4gICAgcmV0dXJuIHRoaXMucm91dGluZ1NlcnZpY2VcbiAgICAgIC5nZXRQYWdlQ29udGV4dCgpXG4gICAgICAucGlwZShcbiAgICAgICAgc3dpdGNoTWFwKHBhZ2VDb250ZXh0ID0+XG4gICAgICAgICAgdGhpcy5zdG9yZS5zZWxlY3QoQ21zU2VsZWN0b3JzLmdldFBhZ2VEYXRhKHBhZ2VDb250ZXh0KSlcbiAgICAgICAgKVxuICAgICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgQ01TIGNvbXBvbmVudCBkYXRhIGJ5IHVpZFxuICAgKlxuICAgKiBUaGlzIG1ldGhvZCBjYW4gYmUgc2FmZWx5IGFuZCBvcHRpbWFsbHkgdXNlZCB0byBsb2FkIG11bHRpcGxlIGNvbXBvbmVudHMgZGF0YSBhdCB0aGUgc2FtZSB0aW1lLlxuICAgKiBDYWxsaW5nIGdldENvbXBvbmVudERhdGEgbXVsdGlwbGUgdGltZXMgZm9yIGRpZmZlcmVudCBjb21wb25lbnRzIHdpbGwgYWx3YXlzIHJlc3VsdCBpbiBvcHRpbWl6ZWRcbiAgICogYmFjay1lbmQgcmVxdWVzdDogYWxsIGNvbXBvbmVudHMgcmVxdWVzdGVkIGF0IHRoZSBzYW1lIHRpbWUgKGluIG9uZSBldmVudCBsb29wKSB3aWxsIGJlIGxvYWRlZCBpbiBvbmUgbmV0d29yayBjYWxsLlxuICAgKlxuICAgKiBJbiBjYXNlIHRoZSBjb21wb25lbnQgZGF0YSBpcyBub3QgcHJlc2VudCwgdGhlIG1ldGhvZCB3aWxsIGxvYWQgaXQuXG4gICAqIE90aGVyd2lzZSwgaWYgdGhlIHBhZ2UgY29udGV4dCBpcyBub3QgcHJvdmlkZWQsIHRoZSBjdXJyZW50IHBhZ2UgY29udGV4dCBmcm9tIHRoZSByb3V0ZXIgc3RhdGUgd2lsbCBiZSB1c2VkIGluc3RlYWQuXG4gICAqXG4gICAqIEBwYXJhbSB1aWQgQ01TIGNvbXBvbmVudCB1aWRcbiAgICogQHBhcmFtIHBhZ2VDb250ZXh0IGlmIHByb3ZpZGVkLCBpdCB3aWxsIGJlIHVzZWQgdG8gbG9va3VwIHRoZSBjb21wb25lbnQgZGF0YS5cbiAgICovXG4gIGdldENvbXBvbmVudERhdGE8VCBleHRlbmRzIENtc0NvbXBvbmVudD4oXG4gICAgdWlkOiBzdHJpbmcsXG4gICAgcGFnZUNvbnRleHQ/OiBQYWdlQ29udGV4dFxuICApOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICBjb25zdCBjb250ZXh0ID0gc2VyaWFsaXplUGFnZUNvbnRleHQocGFnZUNvbnRleHQpO1xuICAgIGlmICghdGhpcy5jb21wb25lbnRzW3VpZF0pIHtcbiAgICAgIC8vIGNyZWF0ZSB0aGUgY29tcG9uZW50IGRhdGEgc3RydWN0dXJlLCBpZiBpdCBkb2Vzbid0IGFscmVhZHkgZXhpc3RcbiAgICAgIHRoaXMuY29tcG9uZW50c1t1aWRdID0ge307XG4gICAgfVxuXG4gICAgY29uc3QgY29tcG9uZW50ID0gdGhpcy5jb21wb25lbnRzW3VpZF07XG4gICAgaWYgKCFjb21wb25lbnRbY29udGV4dF0pIHtcbiAgICAgIC8vIGNyZWF0ZSB0aGUgY29tcG9uZW50IGRhdGEgYW5kIGFzc2lnbiBpdCB0byB0aGUgY29tcG9uZW50J3MgY29udGV4dFxuICAgICAgY29tcG9uZW50W2NvbnRleHRdID0gdGhpcy5jcmVhdGVDb21wb25lbnREYXRhKHVpZCwgcGFnZUNvbnRleHQpO1xuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRbY29udGV4dF0gYXMgT2JzZXJ2YWJsZTxUPjtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlQ29tcG9uZW50RGF0YTxUIGV4dGVuZHMgQ21zQ29tcG9uZW50PihcbiAgICB1aWQ6IHN0cmluZyxcbiAgICBwYWdlQ29udGV4dD86IFBhZ2VDb250ZXh0XG4gICk6IE9ic2VydmFibGU8VD4ge1xuICAgIGlmICghcGFnZUNvbnRleHQpIHtcbiAgICAgIHJldHVybiB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdldFBhZ2VDb250ZXh0KCkucGlwZShcbiAgICAgICAgZmlsdGVyKGN1cnJlbnRDb250ZXh0ID0+ICEhY3VycmVudENvbnRleHQpLFxuICAgICAgICBzd2l0Y2hNYXAoY3VycmVudENvbnRleHQgPT5cbiAgICAgICAgICB0aGlzLmdldENvbXBvbmVudERhdGE8VD4odWlkLCBjdXJyZW50Q29udGV4dClcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBjb25zdCBjb250ZXh0ID0gc2VyaWFsaXplUGFnZUNvbnRleHQocGFnZUNvbnRleHQpO1xuXG4gICAgY29uc3QgbG9hZGluZyQgPSBjb21iaW5lTGF0ZXN0KFtcbiAgICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ2V0TmV4dFBhZ2VDb250ZXh0KCksXG4gICAgICB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICAgIHNlbGVjdChDbXNTZWxlY3RvcnMuY29tcG9uZW50c0xvYWRlclN0YXRlU2VsZWN0b3JGYWN0b3J5KHVpZCwgY29udGV4dCkpXG4gICAgICApLFxuICAgIF0pLnBpcGUoXG4gICAgICBvYnNlcnZlT24ocXVldWVTY2hlZHVsZXIpLFxuICAgICAgdGFwKChbbmV4dENvbnRleHQsIGxvYWRpbmdTdGF0ZV0pID0+IHtcbiAgICAgICAgY29uc3QgYXR0ZW1wdGVkTG9hZCA9XG4gICAgICAgICAgbG9hZGluZ1N0YXRlLmxvYWRpbmcgfHwgbG9hZGluZ1N0YXRlLnN1Y2Nlc3MgfHwgbG9hZGluZ1N0YXRlLmVycm9yO1xuICAgICAgICAvLyBpZiB0aGUgcmVxdWVzdGVkIGNvbnRleHQgaXMgdGhlIHNhbWUgYXMgdGhlIG9uZSB0aGF0J3MgY3VycmVudGx5IGJlaW5nIG5hdmlnYXRlZCB0b1xuICAgICAgICAvLyAoYXMgaXQgbWlnaHQgYWxyZWFkeSBiZWVuIHRyaWdnZXJlZCBhbmQgbWlnaHQgYmUgYXZhaWxhYmxlIHNob3J0bHkgZnJvbSBwYWdlIGRhdGEpXG4gICAgICAgIC8vIFRPRE8oaXNzdWU6MzY0OSksIFRPRE8oaXNzdWU6MzY2OCkgLSB0aGlzIG9wdGltaXphdGlvbiBjb3VsZCBiZSByZW1vdmVkXG4gICAgICAgIGNvbnN0IGNvdWxkQmVMb2FkZWRXaXRoUGFnZURhdGEgPSBuZXh0Q29udGV4dFxuICAgICAgICAgID8gc2VyaWFsaXplUGFnZUNvbnRleHQobmV4dENvbnRleHQpID09PSBjb250ZXh0XG4gICAgICAgICAgOiBmYWxzZTtcblxuICAgICAgICBpZiAoIWF0dGVtcHRlZExvYWQgJiYgIWNvdWxkQmVMb2FkZWRXaXRoUGFnZURhdGEpIHtcbiAgICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgICAgICAgbmV3IENtc0FjdGlvbnMuTG9hZENtc0NvbXBvbmVudCh1aWQsIHBhZ2VDb250ZXh0KVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcblxuICAgIGNvbnN0IGNvbXBvbmVudCQgPSB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoQ21zU2VsZWN0b3JzLmNvbXBvbmVudHNTZWxlY3RvckZhY3RvcnkodWlkLCBjb250ZXh0KSksXG4gICAgICAvLyBUT0RPKGlzc3VlOjYwMjcpIC0gdGhpcyBgZmlsdGVyYCBzaG91bGQgYmUgcmVtb3ZlZC5cbiAgICAgIC8vIFRoZSByZWFzb24gZm9yIHJlbW92YWw6IHdpdGggYGZpbHRlcmAgaW4gcGxhY2UsIHdoZW4gbW92aW5nIHRvIGEgcGFnZSB0aGF0IGhhcyByZXN0cmljdGlvbnMsIHRoZSBjb21wb25lbnQgZGF0YSB3aWxsIHN0aWxsIGVtaXQgdGhlIHByZXZpb3VzIHZhbHVlLlxuICAgICAgLy8gUmVtb3ZpbmcgaXQgY2F1c2VzIHNvbWUgY29tcG9uZW50cyB0byBmYWlsLCBiZWNhdXNlIHRoZXkgYXJlIG5vdCBjaGVja2luZ1xuICAgICAgLy8gaWYgdGhlIGRhdGEgaXMgYWN0dWFsbHkgdGhlcmUuIEkgbm90aWNlZCB0aGVzZSB0aGF0IHRoaXMgY29tcG9uZW50IGlzIGZhaWxpbmcsIGJ1dCB0aGVyZSBhcmUgcG9zc2libHkgbW9yZTpcbiAgICAgIC8vIC0gYHRhYi1wYXJhZ3JhcGgtY29udGFpbmVyLmNvbXBvbmVudC50c2Agd2hlbiB2aXNpdGluZyBhbnkgUERQIHBhZ2VcbiAgICAgIGZpbHRlcihjb21wb25lbnQgPT4gISFjb21wb25lbnQpXG4gICAgKSBhcyBPYnNlcnZhYmxlPFQ+O1xuXG4gICAgcmV0dXJuIHVzaW5nKCgpID0+IGxvYWRpbmckLnN1YnNjcmliZSgpLCAoKSA9PiBjb21wb25lbnQkKS5waXBlKFxuICAgICAgc2hhcmVSZXBsYXkoeyBidWZmZXJTaXplOiAxLCByZWZDb3VudDogdHJ1ZSB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogR2l2ZW4gdGhlIHBvc2l0aW9uLCBnZXQgdGhlIGNvbnRlbnQgc2xvdCBkYXRhXG4gICAqIEBwYXJhbSBwb3NpdGlvbiA6IGNvbnRlbnQgc2xvdCBwb3NpdGlvblxuICAgKi9cbiAgZ2V0Q29udGVudFNsb3QocG9zaXRpb246IHN0cmluZyk6IE9ic2VydmFibGU8Q29udGVudFNsb3REYXRhPiB7XG4gICAgcmV0dXJuIHRoaXMucm91dGluZ1NlcnZpY2UuZ2V0UGFnZUNvbnRleHQoKS5waXBlKFxuICAgICAgc3dpdGNoTWFwKHBhZ2VDb250ZXh0ID0+XG4gICAgICAgIHRoaXMuc3RvcmUucGlwZShcbiAgICAgICAgICBzZWxlY3QoXG4gICAgICAgICAgICBDbXNTZWxlY3RvcnMuZ2V0Q3VycmVudFNsb3RTZWxlY3RvckZhY3RvcnkocGFnZUNvbnRleHQsIHBvc2l0aW9uKVxuICAgICAgICAgICksXG4gICAgICAgICAgZmlsdGVyKEJvb2xlYW4pXG4gICAgICAgIClcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdpdmVuIG5hdmlnYXRpb24gbm9kZSB1aWQsIGdldCBpdGVtcyAod2l0aCBpZCBhbmQgdHlwZSkgaW5zaWRlIHRoZSBuYXZpZ2F0aW9uIGVudHJpZXNcbiAgICogQHBhcmFtIG5hdmlnYXRpb25Ob2RlVWlkIDogdWlkIG9mIHRoZSBuYXZpZ2F0aW9uIG5vZGVcbiAgICovXG4gIGdldE5hdmlnYXRpb25FbnRyeUl0ZW1zKG5hdmlnYXRpb25Ob2RlVWlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPE5vZGVJdGVtPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChDbXNTZWxlY3RvcnMuZ2V0TmF2aWdhdGlvbkVudHJ5SXRlbXMobmF2aWdhdGlvbk5vZGVVaWQpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogTG9hZCBuYXZpZ2F0aW9uIGl0ZW1zIGRhdGFcbiAgICogQHBhcmFtIHJvb3RVaWQgOiB0aGUgdWlkIG9mIHRoZSByb290IG5hdmlnYXRpb24gbm9kZVxuICAgKiBAcGFyYW0gaXRlbUxpc3QgOiBsaXN0IG9mIGl0ZW1zICh3aXRoIGlkIGFuZCB0eXBlKVxuICAgKi9cbiAgbG9hZE5hdmlnYXRpb25JdGVtcyhcbiAgICByb290VWlkOiBzdHJpbmcsXG4gICAgaXRlbUxpc3Q6IHsgaWQ6IHN0cmluZzsgc3VwZXJUeXBlOiBzdHJpbmcgfVtdXG4gICk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgQ21zQWN0aW9ucy5Mb2FkQ21zTmF2aWdhdGlvbkl0ZW1zKHtcbiAgICAgICAgbm9kZUlkOiByb290VWlkLFxuICAgICAgICBpdGVtczogaXRlbUxpc3QsXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmVmcmVzaCB0aGUgY29udGVudCBvZiB0aGUgbGF0ZXN0IGNtcyBwYWdlXG4gICAqL1xuICByZWZyZXNoTGF0ZXN0UGFnZSgpOiB2b2lkIHtcbiAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlXG4gICAgICAuZ2V0UGFnZUNvbnRleHQoKVxuICAgICAgLnBpcGUodGFrZSgxKSlcbiAgICAgIC5zdWJzY3JpYmUocGFnZUNvbnRleHQgPT5cbiAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQ21zQWN0aW9ucy5Mb2FkQ21zUGFnZURhdGEocGFnZUNvbnRleHQpKVxuICAgICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWZyZXNoIHRoZSBjbXMgcGFnZSBjb250ZW50IGJ5IHBhZ2UgSWRcbiAgICogQHBhcmFtIHBhZ2VJZFxuICAgKi9cbiAgcmVmcmVzaFBhZ2VCeUlkKHBhZ2VJZDogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgcGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0ID0geyBpZDogcGFnZUlkIH07XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQ21zQWN0aW9ucy5Mb2FkQ21zUGFnZURhdGEocGFnZUNvbnRleHQpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWZyZXNoIGNtcyBjb21wb25lbnQncyBjb250ZW50XG4gICAqIEBwYXJhbSB1aWQgY29tcG9uZW50IHVpZFxuICAgKiBAcGFyYW0gcGFnZUNvbnRleHQgYW4gb3B0aW9uYWwgcGFyYW1ldGVyIHRoYXQgZW5hYmxlcyB0aGUgY2FsbGVyIHRvIHNwZWNpZnkgZm9yIHdoaWNoIGNvbnRleHQgdGhlIGNvbXBvbmVudCBzaG91bGQgYmUgcmVmcmVzaGVkLlxuICAgKiBJZiBub3Qgc3BlY2lmaWVkLCAnY3VycmVudCcgcGFnZSBjb250ZXh0IGlzIHVzZWQuXG4gICAqL1xuICByZWZyZXNoQ29tcG9uZW50KHVpZDogc3RyaW5nLCBwYWdlQ29udGV4dD86IFBhZ2VDb250ZXh0KTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQ21zQWN0aW9ucy5Mb2FkQ21zQ29tcG9uZW50KHVpZCwgcGFnZUNvbnRleHQpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHaXZlbiBwYWdlQ29udGV4dCwgcmV0dXJuIHRoZSBDTVMgcGFnZSBkYXRhXG4gICAqIEBwYXJhbSBwYWdlQ29udGV4dFxuICAgKi9cbiAgZ2V0UGFnZVN0YXRlKHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCk6IE9ic2VydmFibGU8UGFnZT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KENtc1NlbGVjdG9ycy5nZXRQYWdlRGF0YShwYWdlQ29udGV4dCkpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHaXZlbiBwYWdlQ29udGV4dCwgcmV0dXJuIHRoZSBDTVMgcGFnZSBkYXRhXG4gICAqIEBwYXJhbSBwYWdlQ29udGV4dFxuICAgKi9cbiAgZ2V0UGFnZUNvbXBvbmVudFR5cGVzKHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCk6IE9ic2VydmFibGU8c3RyaW5nW10+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KENtc1NlbGVjdG9ycy5nZXRQYWdlQ29tcG9uZW50VHlwZXMocGFnZUNvbnRleHQpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogR2l2ZW4gcGFnZUNvbnRleHQsIHJldHVybiB3aGV0aGVyIHRoZSBDTVMgcGFnZSBkYXRhIGV4aXN0cyBvciBub3RcbiAgICogQHBhcmFtIHBhZ2VDb250ZXh0XG4gICAqL1xuICBoYXNQYWdlKHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCwgZm9yY2VSZWxvYWQgPSBmYWxzZSk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoQ21zU2VsZWN0b3JzLmdldFBhZ2VTdGF0ZUluZGV4TG9hZGVyU3RhdGUocGFnZUNvbnRleHQpKSxcbiAgICAgIHRhcCgoZW50aXR5OiBMb2FkZXJTdGF0ZTxzdHJpbmc+KSA9PiB7XG4gICAgICAgIGNvbnN0IGF0dGVtcHRlZExvYWQgPSBlbnRpdHkubG9hZGluZyB8fCBlbnRpdHkuc3VjY2VzcyB8fCBlbnRpdHkuZXJyb3I7XG4gICAgICAgIGNvbnN0IHNob3VsZFJlbG9hZCA9IGZvcmNlUmVsb2FkICYmICFlbnRpdHkubG9hZGluZztcbiAgICAgICAgaWYgKCFhdHRlbXB0ZWRMb2FkIHx8IHNob3VsZFJlbG9hZCkge1xuICAgICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IENtc0FjdGlvbnMuTG9hZENtc1BhZ2VEYXRhKHBhZ2VDb250ZXh0KSk7XG4gICAgICAgICAgZm9yY2VSZWxvYWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBmaWx0ZXIoZW50aXR5ID0+IHtcbiAgICAgICAgaWYgKCFlbnRpdHkuaGFzT3duUHJvcGVydHkoJ3ZhbHVlJykpIHtcbiAgICAgICAgICAvLyBpZiB3ZSBoYXZlIGluY29tcGxldGUgc3RhdGUgZnJvbSBTU1IgZmFpbGVkIGxvYWQgdHJhbnNmZXIgc3RhdGUsXG4gICAgICAgICAgLy8gd2Ugc2hvdWxkIHdhaXQgZm9yIHJlbG9hZCBhbmQgYWN0dWFsIHZhbHVlXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbnRpdHkuc3VjY2VzcyB8fCAoZW50aXR5LmVycm9yICYmICFlbnRpdHkubG9hZGluZyk7XG4gICAgICB9KSxcbiAgICAgIHBsdWNrKCdzdWNjZXNzJyksXG4gICAgICBjYXRjaEVycm9yKCgpID0+IG9mKGZhbHNlKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdpdmVuIHBhZ2VDb250ZXh0LCByZXR1cm4gdGhlIENNUyBwYWdlIGRhdGFcbiAgICoqL1xuICBnZXRQYWdlKHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCwgZm9yY2VSZWxvYWQgPSBmYWxzZSk6IE9ic2VydmFibGU8UGFnZT4ge1xuICAgIHJldHVybiB0aGlzLmhhc1BhZ2UocGFnZUNvbnRleHQsIGZvcmNlUmVsb2FkKS5waXBlKFxuICAgICAgc3dpdGNoTWFwKGhhc1BhZ2UgPT5cbiAgICAgICAgaGFzUGFnZSA/IHRoaXMuZ2V0UGFnZVN0YXRlKHBhZ2VDb250ZXh0KSA6IG9mKG51bGwpXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIGdldFBhZ2VJbmRleChwYWdlQ29udGV4dDogUGFnZUNvbnRleHQpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoQ21zU2VsZWN0b3JzLmdldFBhZ2VTdGF0ZUluZGV4VmFsdWUocGFnZUNvbnRleHQpKVxuICAgICk7XG4gIH1cblxuICBzZXRQYWdlRmFpbEluZGV4KHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCwgdmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IENtc0FjdGlvbnMuQ21zU2V0UGFnZUZhaWxJbmRleChwYWdlQ29udGV4dCwgdmFsdWUpKTtcbiAgfVxufVxuIl19
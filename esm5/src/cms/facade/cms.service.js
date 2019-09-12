/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { combineLatest, of } from 'rxjs';
import { catchError, filter, pluck, shareReplay, switchMap, take, tap, } from 'rxjs/operators';
import { RoutingService } from '../../routing/facade/routing.service';
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
     * @param uid : CMS componet uid
     */
    /**
     * Get CMS component data by uid
     * @template T
     * @param {?} uid : CMS componet uid
     * @return {?}
     */
    CmsService.prototype.getComponentData = /**
     * Get CMS component data by uid
     * @template T
     * @param {?} uid : CMS componet uid
     * @return {?}
     */
    function (uid) {
        var _this = this;
        if (!this.components[uid]) {
            this.components[uid] = combineLatest([
                this.routingService.isNavigating(),
                this.store.pipe(select(CmsSelectors.componentStateSelectorFactory(uid))),
            ]).pipe(tap((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var _b = tslib_1.__read(_a, 2), isNavigating = _b[0], componentState = _b[1];
                // componentState is undefined when the whole components entities are empty.
                // In this case, we don't load component one by one, but extract component data from cms page
                if (componentState !== undefined) {
                    /** @type {?} */
                    var attemptedLoad = componentState.loading ||
                        componentState.success ||
                        componentState.error;
                    if (!attemptedLoad && !isNavigating) {
                        _this.store.dispatch(new CmsActions.LoadCmsComponent(uid));
                    }
                }
            })), pluck(1), filter((/**
             * @param {?} componentState
             * @return {?}
             */
            function (componentState) { return componentState && componentState.success; })), pluck('value'), shareReplay({ bufferSize: 1, refCount: true }));
        }
        return (/** @type {?} */ (this.components[uid]));
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
     * @param uid : component uid
     */
    /**
     * Refresh cms component's content
     * @param {?} uid : component uid
     * @return {?}
     */
    CmsService.prototype.refreshComponent = /**
     * Refresh cms component's content
     * @param {?} uid : component uid
     * @return {?}
     */
    function (uid) {
        this.store.dispatch(new CmsActions.LoadCmsComponent(uid));
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
                // if we have incomplete state from srr failed load transfer state,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL2ZhY2FkZS9jbXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDNUMsT0FBTyxFQUFFLGFBQWEsRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDckQsT0FBTyxFQUNMLFVBQVUsRUFDVixNQUFNLEVBQ04sS0FBSyxFQUNMLFdBQVcsRUFDWCxTQUFTLEVBQ1QsSUFBSSxFQUNKLEdBQUcsR0FDSixNQUFNLGdCQUFnQixDQUFDO0FBRXhCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQU10RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFcEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7O0FBRXhEO0lBVUUsb0JBQ1ksS0FBMEIsRUFDMUIsY0FBOEI7UUFEOUIsVUFBSyxHQUFMLEtBQUssQ0FBcUI7UUFDMUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBUmxDLHVCQUFrQixHQUFHLEtBQUssQ0FBQztRQUUzQixlQUFVLEdBRWQsRUFBRSxDQUFDO0lBS0osQ0FBQztJQUtKLHNCQUFJLHlDQUFpQjtRQUhyQjs7V0FFRzs7Ozs7O1FBQ0gsVUFBc0IsS0FBYztZQUNsQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO1FBQ2xDLENBQUM7OztPQUFBO0lBRUQ7O09BRUc7Ozs7O0lBQ0gsd0NBQW1COzs7O0lBQW5CO1FBQ0UsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUM7SUFDakMsQ0FBQztJQUVEOztPQUVHOzs7OztJQUNILG1DQUFjOzs7O0lBQWQ7UUFB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LDRCQUFPOzs7Ozs7O0lBQVAsVUFBUSxXQUF3QixFQUFFLFdBQW1CO1FBQXJELGlCQU1DO1FBTmlDLDRCQUFBLEVBQUEsbUJBQW1CO1FBQ25ELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUNoRCxTQUFTOzs7O1FBQUMsVUFBQSxPQUFPO1lBQ2YsT0FBQSxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7UUFBbkQsQ0FBbUQsRUFDcEQsQ0FDRixDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFRCxpQ0FBWTs7OztJQUFaLFVBQWEsV0FBd0I7UUFDbkMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUN6RCxDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRUQscUNBQWdCOzs7OztJQUFoQixVQUFpQixXQUF3QixFQUFFLEtBQWE7UUFDdEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxVQUFVLENBQUMsbUJBQW1CLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDOUUsQ0FBQzs7Z0JBdk5GLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBeEJnQixLQUFLO2dCQVliLGNBQWM7OztxQkFidkI7Q0ErT0MsQUF4TkQsSUF3TkM7U0FyTlksVUFBVTs7Ozs7O0lBQ3JCLHdDQUFtQzs7Ozs7SUFFbkMsZ0NBRU87Ozs7O0lBR0wsMkJBQW9DOzs7OztJQUNwQyxvQ0FBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIGNhdGNoRXJyb3IsXG4gIGZpbHRlcixcbiAgcGx1Y2ssXG4gIHNoYXJlUmVwbGF5LFxuICBzd2l0Y2hNYXAsXG4gIHRha2UsXG4gIHRhcCxcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vbW9kZWwvY21zLm1vZGVsJztcbmltcG9ydCB7IFJvdXRpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vcm91dGluZy9mYWNhZGUvcm91dGluZy5zZXJ2aWNlJztcbmltcG9ydCB7IFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vLi4vcm91dGluZy9tb2RlbHMvcGFnZS1jb250ZXh0Lm1vZGVsJztcbmltcG9ydCB7IExvYWRlclN0YXRlIH0gZnJvbSAnLi4vLi4vc3RhdGUvdXRpbHMvbG9hZGVyL2xvYWRlci1zdGF0ZSc7XG5pbXBvcnQgeyBDb250ZW50U2xvdERhdGEgfSBmcm9tICcuLi9tb2RlbC9jb250ZW50LXNsb3QtZGF0YS5tb2RlbCc7XG5pbXBvcnQgeyBOb2RlSXRlbSB9IGZyb20gJy4uL21vZGVsL25vZGUtaXRlbS5tb2RlbCc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAnLi4vbW9kZWwvcGFnZS5tb2RlbCc7XG5pbXBvcnQgeyBDbXNBY3Rpb25zIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhDbXMgfSBmcm9tICcuLi9zdG9yZS9jbXMtc3RhdGUnO1xuaW1wb3J0IHsgQ21zU2VsZWN0b3JzIH0gZnJvbSAnLi4vc3RvcmUvc2VsZWN0b3JzL2luZGV4JztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENtc1NlcnZpY2Uge1xuICBwcml2YXRlIF9sYXVuY2hJblNtYXJ0RWRpdCA9IGZhbHNlO1xuXG4gIHByaXZhdGUgY29tcG9uZW50czoge1xuICAgIFt1aWQ6IHN0cmluZ106IE9ic2VydmFibGU8Q21zQ29tcG9uZW50PjtcbiAgfSA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoQ21zPixcbiAgICBwcm90ZWN0ZWQgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlXG4gICkge31cblxuICAvKipcbiAgICogU2V0IF9sYXVuY2hJblNtYXJ0RWRpdCB2YWx1ZVxuICAgKi9cbiAgc2V0IGxhdW5jaEluU21hcnRFZGl0KHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fbGF1bmNoSW5TbWFydEVkaXQgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZSBhcHAgbGF1bmNoZWQgaW4gc21hcnQgZWRpdFxuICAgKi9cbiAgaXNMYXVuY2hJblNtYXJ0RWRpdCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fbGF1bmNoSW5TbWFydEVkaXQ7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGN1cnJlbnQgQ01TIHBhZ2UgZGF0YVxuICAgKi9cbiAgZ2V0Q3VycmVudFBhZ2UoKTogT2JzZXJ2YWJsZTxQYWdlPiB7XG4gICAgcmV0dXJuIHRoaXMucm91dGluZ1NlcnZpY2VcbiAgICAgIC5nZXRQYWdlQ29udGV4dCgpXG4gICAgICAucGlwZShcbiAgICAgICAgc3dpdGNoTWFwKHBhZ2VDb250ZXh0ID0+XG4gICAgICAgICAgdGhpcy5zdG9yZS5zZWxlY3QoQ21zU2VsZWN0b3JzLmdldFBhZ2VEYXRhKHBhZ2VDb250ZXh0KSlcbiAgICAgICAgKVxuICAgICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgQ01TIGNvbXBvbmVudCBkYXRhIGJ5IHVpZFxuICAgKiBAcGFyYW0gdWlkIDogQ01TIGNvbXBvbmV0IHVpZFxuICAgKi9cbiAgZ2V0Q29tcG9uZW50RGF0YTxUIGV4dGVuZHMgQ21zQ29tcG9uZW50Pih1aWQ6IHN0cmluZyk6IE9ic2VydmFibGU8VD4ge1xuICAgIGlmICghdGhpcy5jb21wb25lbnRzW3VpZF0pIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t1aWRdID0gY29tYmluZUxhdGVzdChbXG4gICAgICAgIHRoaXMucm91dGluZ1NlcnZpY2UuaXNOYXZpZ2F0aW5nKCksXG4gICAgICAgIHRoaXMuc3RvcmUucGlwZShcbiAgICAgICAgICBzZWxlY3QoQ21zU2VsZWN0b3JzLmNvbXBvbmVudFN0YXRlU2VsZWN0b3JGYWN0b3J5KHVpZCkpXG4gICAgICAgICksXG4gICAgICBdKS5waXBlKFxuICAgICAgICB0YXAoKFtpc05hdmlnYXRpbmcsIGNvbXBvbmVudFN0YXRlXSkgPT4ge1xuICAgICAgICAgIC8vIGNvbXBvbmVudFN0YXRlIGlzIHVuZGVmaW5lZCB3aGVuIHRoZSB3aG9sZSBjb21wb25lbnRzIGVudGl0aWVzIGFyZSBlbXB0eS5cbiAgICAgICAgICAvLyBJbiB0aGlzIGNhc2UsIHdlIGRvbid0IGxvYWQgY29tcG9uZW50IG9uZSBieSBvbmUsIGJ1dCBleHRyYWN0IGNvbXBvbmVudCBkYXRhIGZyb20gY21zIHBhZ2VcbiAgICAgICAgICBpZiAoY29tcG9uZW50U3RhdGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29uc3QgYXR0ZW1wdGVkTG9hZCA9XG4gICAgICAgICAgICAgIGNvbXBvbmVudFN0YXRlLmxvYWRpbmcgfHxcbiAgICAgICAgICAgICAgY29tcG9uZW50U3RhdGUuc3VjY2VzcyB8fFxuICAgICAgICAgICAgICBjb21wb25lbnRTdGF0ZS5lcnJvcjtcbiAgICAgICAgICAgIGlmICghYXR0ZW1wdGVkTG9hZCAmJiAhaXNOYXZpZ2F0aW5nKSB7XG4gICAgICAgICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IENtc0FjdGlvbnMuTG9hZENtc0NvbXBvbmVudCh1aWQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBwbHVjaygxKSxcbiAgICAgICAgZmlsdGVyKGNvbXBvbmVudFN0YXRlID0+IGNvbXBvbmVudFN0YXRlICYmIGNvbXBvbmVudFN0YXRlLnN1Y2Nlc3MpLFxuICAgICAgICBwbHVjaygndmFsdWUnKSxcbiAgICAgICAgc2hhcmVSZXBsYXkoeyBidWZmZXJTaXplOiAxLCByZWZDb3VudDogdHJ1ZSB9KVxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5jb21wb25lbnRzW3VpZF0gYXMgT2JzZXJ2YWJsZTxUPjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHaXZlbiB0aGUgcG9zaXRpb24sIGdldCB0aGUgY29udGVudCBzbG90IGRhdGFcbiAgICogQHBhcmFtIHBvc2l0aW9uIDogY29udGVudCBzbG90IHBvc2l0aW9uXG4gICAqL1xuICBnZXRDb250ZW50U2xvdChwb3NpdGlvbjogc3RyaW5nKTogT2JzZXJ2YWJsZTxDb250ZW50U2xvdERhdGE+IHtcbiAgICByZXR1cm4gdGhpcy5yb3V0aW5nU2VydmljZS5nZXRQYWdlQ29udGV4dCgpLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAocGFnZUNvbnRleHQgPT5cbiAgICAgICAgdGhpcy5zdG9yZS5waXBlKFxuICAgICAgICAgIHNlbGVjdChcbiAgICAgICAgICAgIENtc1NlbGVjdG9ycy5nZXRDdXJyZW50U2xvdFNlbGVjdG9yRmFjdG9yeShwYWdlQ29udGV4dCwgcG9zaXRpb24pXG4gICAgICAgICAgKSxcbiAgICAgICAgICBmaWx0ZXIoQm9vbGVhbilcbiAgICAgICAgKVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogR2l2ZW4gbmF2aWdhdGlvbiBub2RlIHVpZCwgZ2V0IGl0ZW1zICh3aXRoIGlkIGFuZCB0eXBlKSBpbnNpZGUgdGhlIG5hdmlnYXRpb24gZW50cmllc1xuICAgKiBAcGFyYW0gbmF2aWdhdGlvbk5vZGVVaWQgOiB1aWQgb2YgdGhlIG5hdmlnYXRpb24gbm9kZVxuICAgKi9cbiAgZ2V0TmF2aWdhdGlvbkVudHJ5SXRlbXMobmF2aWdhdGlvbk5vZGVVaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8Tm9kZUl0ZW0+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KENtc1NlbGVjdG9ycy5nZXROYXZpZ2F0aW9uRW50cnlJdGVtcyhuYXZpZ2F0aW9uTm9kZVVpZCkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2FkIG5hdmlnYXRpb24gaXRlbXMgZGF0YVxuICAgKiBAcGFyYW0gcm9vdFVpZCA6IHRoZSB1aWQgb2YgdGhlIHJvb3QgbmF2aWdhdGlvbiBub2RlXG4gICAqIEBwYXJhbSBpdGVtTGlzdCA6IGxpc3Qgb2YgaXRlbXMgKHdpdGggaWQgYW5kIHR5cGUpXG4gICAqL1xuICBsb2FkTmF2aWdhdGlvbkl0ZW1zKFxuICAgIHJvb3RVaWQ6IHN0cmluZyxcbiAgICBpdGVtTGlzdDogeyBpZDogc3RyaW5nOyBzdXBlclR5cGU6IHN0cmluZyB9W11cbiAgKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBDbXNBY3Rpb25zLkxvYWRDbXNOYXZpZ2F0aW9uSXRlbXMoe1xuICAgICAgICBub2RlSWQ6IHJvb3RVaWQsXG4gICAgICAgIGl0ZW1zOiBpdGVtTGlzdCxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWZyZXNoIHRoZSBjb250ZW50IG9mIHRoZSBsYXRlc3QgY21zIHBhZ2VcbiAgICovXG4gIHJlZnJlc2hMYXRlc3RQYWdlKCk6IHZvaWQge1xuICAgIHRoaXMucm91dGluZ1NlcnZpY2VcbiAgICAgIC5nZXRQYWdlQ29udGV4dCgpXG4gICAgICAucGlwZSh0YWtlKDEpKVxuICAgICAgLnN1YnNjcmliZShwYWdlQ29udGV4dCA9PlxuICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDbXNBY3Rpb25zLkxvYWRDbXNQYWdlRGF0YShwYWdlQ29udGV4dCkpXG4gICAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZnJlc2ggdGhlIGNtcyBwYWdlIGNvbnRlbnQgYnkgcGFnZSBJZFxuICAgKiBAcGFyYW0gcGFnZUlkXG4gICAqL1xuICByZWZyZXNoUGFnZUJ5SWQocGFnZUlkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBwYWdlQ29udGV4dDogUGFnZUNvbnRleHQgPSB7IGlkOiBwYWdlSWQgfTtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDbXNBY3Rpb25zLkxvYWRDbXNQYWdlRGF0YShwYWdlQ29udGV4dCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZnJlc2ggY21zIGNvbXBvbmVudCdzIGNvbnRlbnRcbiAgICogQHBhcmFtIHVpZCA6IGNvbXBvbmVudCB1aWRcbiAgICovXG4gIHJlZnJlc2hDb21wb25lbnQodWlkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDbXNBY3Rpb25zLkxvYWRDbXNDb21wb25lbnQodWlkKSk7XG4gIH1cblxuICAvKipcbiAgICogR2l2ZW4gcGFnZUNvbnRleHQsIHJldHVybiB0aGUgQ01TIHBhZ2UgZGF0YVxuICAgKiBAcGFyYW0gcGFnZUNvbnRleHRcbiAgICovXG4gIGdldFBhZ2VTdGF0ZShwYWdlQ29udGV4dDogUGFnZUNvbnRleHQpOiBPYnNlcnZhYmxlPFBhZ2U+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChDbXNTZWxlY3RvcnMuZ2V0UGFnZURhdGEocGFnZUNvbnRleHQpKSk7XG4gIH1cblxuICAvKipcbiAgICogR2l2ZW4gcGFnZUNvbnRleHQsIHJldHVybiB0aGUgQ01TIHBhZ2UgZGF0YVxuICAgKiBAcGFyYW0gcGFnZUNvbnRleHRcbiAgICovXG4gIGdldFBhZ2VDb21wb25lbnRUeXBlcyhwYWdlQ29udGV4dDogUGFnZUNvbnRleHQpOiBPYnNlcnZhYmxlPHN0cmluZ1tdPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChDbXNTZWxlY3RvcnMuZ2V0UGFnZUNvbXBvbmVudFR5cGVzKHBhZ2VDb250ZXh0KSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdpdmVuIHBhZ2VDb250ZXh0LCByZXR1cm4gd2hldGhlciB0aGUgQ01TIHBhZ2UgZGF0YSBleGlzdHMgb3Igbm90XG4gICAqIEBwYXJhbSBwYWdlQ29udGV4dFxuICAgKi9cbiAgaGFzUGFnZShwYWdlQ29udGV4dDogUGFnZUNvbnRleHQsIGZvcmNlUmVsb2FkID0gZmFsc2UpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KENtc1NlbGVjdG9ycy5nZXRQYWdlU3RhdGVJbmRleExvYWRlclN0YXRlKHBhZ2VDb250ZXh0KSksXG4gICAgICB0YXAoKGVudGl0eTogTG9hZGVyU3RhdGU8c3RyaW5nPikgPT4ge1xuICAgICAgICBjb25zdCBhdHRlbXB0ZWRMb2FkID0gZW50aXR5LmxvYWRpbmcgfHwgZW50aXR5LnN1Y2Nlc3MgfHwgZW50aXR5LmVycm9yO1xuICAgICAgICBjb25zdCBzaG91bGRSZWxvYWQgPSBmb3JjZVJlbG9hZCAmJiAhZW50aXR5LmxvYWRpbmc7XG4gICAgICAgIGlmICghYXR0ZW1wdGVkTG9hZCB8fCBzaG91bGRSZWxvYWQpIHtcbiAgICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDbXNBY3Rpb25zLkxvYWRDbXNQYWdlRGF0YShwYWdlQ29udGV4dCkpO1xuICAgICAgICAgIGZvcmNlUmVsb2FkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgZmlsdGVyKGVudGl0eSA9PiB7XG4gICAgICAgIGlmICghZW50aXR5Lmhhc093blByb3BlcnR5KCd2YWx1ZScpKSB7XG4gICAgICAgICAgLy8gaWYgd2UgaGF2ZSBpbmNvbXBsZXRlIHN0YXRlIGZyb20gc3JyIGZhaWxlZCBsb2FkIHRyYW5zZmVyIHN0YXRlLFxuICAgICAgICAgIC8vIHdlIHNob3VsZCB3YWl0IGZvciByZWxvYWQgYW5kIGFjdHVhbCB2YWx1ZVxuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZW50aXR5LnN1Y2Nlc3MgfHwgKGVudGl0eS5lcnJvciAmJiAhZW50aXR5LmxvYWRpbmcpO1xuICAgICAgfSksXG4gICAgICBwbHVjaygnc3VjY2VzcycpLFxuICAgICAgY2F0Y2hFcnJvcigoKSA9PiBvZihmYWxzZSkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHaXZlbiBwYWdlQ29udGV4dCwgcmV0dXJuIHRoZSBDTVMgcGFnZSBkYXRhXG4gICAqKi9cbiAgZ2V0UGFnZShwYWdlQ29udGV4dDogUGFnZUNvbnRleHQsIGZvcmNlUmVsb2FkID0gZmFsc2UpOiBPYnNlcnZhYmxlPFBhZ2U+IHtcbiAgICByZXR1cm4gdGhpcy5oYXNQYWdlKHBhZ2VDb250ZXh0LCBmb3JjZVJlbG9hZCkucGlwZShcbiAgICAgIHN3aXRjaE1hcChoYXNQYWdlID0+XG4gICAgICAgIGhhc1BhZ2UgPyB0aGlzLmdldFBhZ2VTdGF0ZShwYWdlQ29udGV4dCkgOiBvZihudWxsKVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBnZXRQYWdlSW5kZXgocGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0KTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KENtc1NlbGVjdG9ycy5nZXRQYWdlU3RhdGVJbmRleFZhbHVlKHBhZ2VDb250ZXh0KSlcbiAgICApO1xuICB9XG5cbiAgc2V0UGFnZUZhaWxJbmRleChwYWdlQ29udGV4dDogUGFnZUNvbnRleHQsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDbXNBY3Rpb25zLkNtc1NldFBhZ2VGYWlsSW5kZXgocGFnZUNvbnRleHQsIHZhbHVlKSk7XG4gIH1cbn1cbiJdfQ==
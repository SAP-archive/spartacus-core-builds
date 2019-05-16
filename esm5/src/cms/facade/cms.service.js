/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { of, combineLatest } from 'rxjs';
import { catchError, filter, pluck, shareReplay, switchMap, take, tap, } from 'rxjs/operators';
import * as fromStore from '../store';
import { RoutingService } from '../../routing/facade/routing.service';
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
            .pipe(switchMap(function (pageContext) {
            return _this.store.select(fromStore.getPageData(pageContext));
        }));
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
            this.components[uid] = combineLatest(this.routingService.isNavigating(), this.store.pipe(select(fromStore.componentStateSelectorFactory(uid)))).pipe(tap(function (_a) {
                var _b = tslib_1.__read(_a, 2), isNavigating = _b[0], componentState = _b[1];
                /** @type {?} */
                var attemptedLoad = componentState.loading ||
                    componentState.success ||
                    componentState.error;
                if (!attemptedLoad && !isNavigating) {
                    _this.store.dispatch(new fromStore.LoadComponent(uid));
                }
            }), pluck(1), filter(function (componentState) { return componentState.success; }), pluck('value'), shareReplay({ bufferSize: 1, refCount: true }));
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
        return this.routingService
            .getPageContext()
            .pipe(switchMap(function (pageContext) {
            return _this.store.pipe(select(fromStore.currentSlotSelectorFactory(pageContext, position)));
        }));
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
        return this.store.pipe(select(fromStore.itemsSelectorFactory(navigationNodeUid)));
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
        this.store.dispatch(new fromStore.LoadNavigationItems({
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
            .subscribe(function (pageContext) {
            return _this.store.dispatch(new fromStore.LoadPageData(pageContext));
        });
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
        this.store.dispatch(new fromStore.LoadPageData(pageContext));
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
        this.store.dispatch(new fromStore.LoadComponent(uid));
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
        return this.store.pipe(select(fromStore.getPageData(pageContext)));
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
        return this.store.pipe(select(fromStore.getPageComponentTypes(pageContext)));
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
        return this.store.pipe(select(fromStore.getIndexEntity(pageContext)), tap(function (entity) {
            /** @type {?} */
            var attemptedLoad = entity.loading || entity.success || entity.error;
            /** @type {?} */
            var shouldReload = forceReload && !entity.loading;
            if (!attemptedLoad || shouldReload) {
                _this.store.dispatch(new fromStore.LoadPageData(pageContext));
            }
        }), filter(function (entity) { return entity.success || entity.error; }), pluck('success'), catchError(function () { return of(false); }));
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
    /** @nocollapse */ CmsService.ngInjectableDef = i0.defineInjectable({ factory: function CmsService_Factory() { return new CmsService(i0.inject(i1.Store), i0.inject(i2.RoutingService)); }, token: CmsService, providedIn: "root" });
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
     * @private
     */
    CmsService.prototype.store;
    /**
     * @type {?}
     * @private
     */
    CmsService.prototype.routingService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL2ZhY2FkZS9jbXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFNUMsT0FBTyxFQUFjLEVBQUUsRUFBRSxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDckQsT0FBTyxFQUNMLFVBQVUsRUFDVixNQUFNLEVBQ04sS0FBSyxFQUNMLFdBQVcsRUFDWCxTQUFTLEVBQ1QsSUFBSSxFQUNKLEdBQUcsR0FDSixNQUFNLGdCQUFnQixDQUFDO0FBRXhCLE9BQU8sS0FBSyxTQUFTLE1BQU0sVUFBVSxDQUFDO0FBT3RDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQzs7OztBQUd0RTtJQVVFLG9CQUNVLEtBQTBCLEVBQzFCLGNBQThCO1FBRDlCLFVBQUssR0FBTCxLQUFLLENBQXFCO1FBQzFCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQVJoQyx1QkFBa0IsR0FBRyxLQUFLLENBQUM7UUFFM0IsZUFBVSxHQUVkLEVBQUUsQ0FBQztJQUtKLENBQUM7SUFLSixzQkFBSSx5Q0FBaUI7UUFIckI7O1dBRUc7Ozs7OztRQUNILFVBQXNCLEtBQWM7WUFDbEMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQztRQUNsQyxDQUFDOzs7T0FBQTtJQUVEOztPQUVHOzs7OztJQUNILHdDQUFtQjs7OztJQUFuQjtRQUNFLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDO0lBQ2pDLENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSCxtQ0FBYzs7OztJQUFkO1FBQUEsaUJBUUM7UUFQQyxPQUFPLElBQUksQ0FBQyxjQUFjO2FBQ3ZCLGNBQWMsRUFBRTth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UyxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUM3QyxHQUFHLENBQUMsVUFBQyxNQUEyQjs7Z0JBQ3hCLGFBQWEsR0FBRyxNQUFNLENBQUMsT0FBTyxJQUFJLE1BQU0sQ0FBQyxPQUFPLElBQUksTUFBTSxDQUFDLEtBQUs7O2dCQUNoRSxZQUFZLEdBQUcsV0FBVyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU87WUFDbkQsSUFBSSxDQUFDLGFBQWEsSUFBSSxZQUFZLEVBQUU7Z0JBQ2xDLEtBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksU0FBUyxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO2FBQzlEO1FBQ0gsQ0FBQyxDQUFDLEVBQ0YsTUFBTSxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsTUFBTSxDQUFDLE9BQU8sSUFBSSxNQUFNLENBQUMsS0FBSyxFQUE5QixDQUE4QixDQUFDLEVBQ2hELEtBQUssQ0FBQyxTQUFTLENBQUMsRUFDaEIsVUFBVSxDQUFDLGNBQU0sT0FBQSxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQVQsQ0FBUyxDQUFDLENBQzVCLENBQUM7SUFDSixDQUFDOztnQkFuTEYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkF6QmdCLEtBQUs7Z0JBb0JiLGNBQWM7OztxQkF0QnZCO0NBNk1DLEFBcExELElBb0xDO1NBakxZLFVBQVU7Ozs7OztJQUNyQix3Q0FBbUM7Ozs7O0lBRW5DLGdDQUVPOzs7OztJQUdMLDJCQUFrQzs7Ozs7SUFDbEMsb0NBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiwgY29tYmluZUxhdGVzdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgY2F0Y2hFcnJvcixcbiAgZmlsdGVyLFxuICBwbHVjayxcbiAgc2hhcmVSZXBsYXksXG4gIHN3aXRjaE1hcCxcbiAgdGFrZSxcbiAgdGFwLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCAqIGFzIGZyb21TdG9yZSBmcm9tICcuLi9zdG9yZSc7XG5pbXBvcnQgeyBMb2FkZXJTdGF0ZSB9IGZyb20gJy4uLy4uL3N0YXRlJztcbmltcG9ydCB7IENvbnRlbnRTbG90RGF0YSB9IGZyb20gJy4uL21vZGVsL2NvbnRlbnQtc2xvdC1kYXRhLm1vZGVsJztcbmltcG9ydCB7IE5vZGVJdGVtIH0gZnJvbSAnLi4vbW9kZWwvbm9kZS1pdGVtLm1vZGVsJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICcuLi9tb2RlbC9wYWdlLm1vZGVsJztcbmltcG9ydCB7IFN0YXRlV2l0aENtcyB9IGZyb20gJy4uL3N0b3JlL2Ntcy1zdGF0ZSc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnQgfSBmcm9tICcuLi8uLi9vY2Mvb2NjLW1vZGVscy9jbXMtY29tcG9uZW50Lm1vZGVscyc7XG5pbXBvcnQgeyBSb3V0aW5nU2VydmljZSB9IGZyb20gJy4uLy4uL3JvdXRpbmcvZmFjYWRlL3JvdXRpbmcuc2VydmljZSc7XG5pbXBvcnQgeyBQYWdlQ29udGV4dCB9IGZyb20gJy4uLy4uL3JvdXRpbmcvbW9kZWxzL3BhZ2UtY29udGV4dC5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDbXNTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfbGF1bmNoSW5TbWFydEVkaXQgPSBmYWxzZTtcblxuICBwcml2YXRlIGNvbXBvbmVudHM6IHtcbiAgICBbdWlkOiBzdHJpbmddOiBPYnNlcnZhYmxlPENtc0NvbXBvbmVudD47XG4gIH0gPSB7fTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhDbXM+LFxuICAgIHByaXZhdGUgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlXG4gICkge31cblxuICAvKipcbiAgICogU2V0IF9sYXVuY2hJblNtYXJ0RWRpdCB2YWx1ZVxuICAgKi9cbiAgc2V0IGxhdW5jaEluU21hcnRFZGl0KHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fbGF1bmNoSW5TbWFydEVkaXQgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZSBhcHAgbGF1bmNoZWQgaW4gc21hcnQgZWRpdFxuICAgKi9cbiAgaXNMYXVuY2hJblNtYXJ0RWRpdCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fbGF1bmNoSW5TbWFydEVkaXQ7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGN1cnJlbnQgQ01TIHBhZ2UgZGF0YVxuICAgKi9cbiAgZ2V0Q3VycmVudFBhZ2UoKTogT2JzZXJ2YWJsZTxQYWdlPiB7XG4gICAgcmV0dXJuIHRoaXMucm91dGluZ1NlcnZpY2VcbiAgICAgIC5nZXRQYWdlQ29udGV4dCgpXG4gICAgICAucGlwZShcbiAgICAgICAgc3dpdGNoTWFwKHBhZ2VDb250ZXh0ID0+XG4gICAgICAgICAgdGhpcy5zdG9yZS5zZWxlY3QoZnJvbVN0b3JlLmdldFBhZ2VEYXRhKHBhZ2VDb250ZXh0KSlcbiAgICAgICAgKVxuICAgICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgQ01TIGNvbXBvbmVudCBkYXRhIGJ5IHVpZFxuICAgKiBAcGFyYW0gdWlkIDogQ01TIGNvbXBvbmV0IHVpZFxuICAgKi9cbiAgZ2V0Q29tcG9uZW50RGF0YTxUIGV4dGVuZHMgQ21zQ29tcG9uZW50Pih1aWQ6IHN0cmluZyk6IE9ic2VydmFibGU8VD4ge1xuICAgIGlmICghdGhpcy5jb21wb25lbnRzW3VpZF0pIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t1aWRdID0gY29tYmluZUxhdGVzdChcbiAgICAgICAgdGhpcy5yb3V0aW5nU2VydmljZS5pc05hdmlnYXRpbmcoKSxcbiAgICAgICAgdGhpcy5zdG9yZS5waXBlKHNlbGVjdChmcm9tU3RvcmUuY29tcG9uZW50U3RhdGVTZWxlY3RvckZhY3RvcnkodWlkKSkpXG4gICAgICApLnBpcGUoXG4gICAgICAgIHRhcCgoW2lzTmF2aWdhdGluZywgY29tcG9uZW50U3RhdGVdKSA9PiB7XG4gICAgICAgICAgY29uc3QgYXR0ZW1wdGVkTG9hZCA9XG4gICAgICAgICAgICBjb21wb25lbnRTdGF0ZS5sb2FkaW5nIHx8XG4gICAgICAgICAgICBjb21wb25lbnRTdGF0ZS5zdWNjZXNzIHx8XG4gICAgICAgICAgICBjb21wb25lbnRTdGF0ZS5lcnJvcjtcbiAgICAgICAgICBpZiAoIWF0dGVtcHRlZExvYWQgJiYgIWlzTmF2aWdhdGluZykge1xuICAgICAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgZnJvbVN0b3JlLkxvYWRDb21wb25lbnQodWlkKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgcGx1Y2soMSksXG4gICAgICAgIGZpbHRlcihjb21wb25lbnRTdGF0ZSA9PiBjb21wb25lbnRTdGF0ZS5zdWNjZXNzKSxcbiAgICAgICAgcGx1Y2soJ3ZhbHVlJyksXG4gICAgICAgIHNoYXJlUmVwbGF5KHsgYnVmZmVyU2l6ZTogMSwgcmVmQ291bnQ6IHRydWUgfSlcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuY29tcG9uZW50c1t1aWRdIGFzIE9ic2VydmFibGU8VD47XG4gIH1cblxuICAvKipcbiAgICogR2l2ZW4gdGhlIHBvc2l0aW9uLCBnZXQgdGhlIGNvbnRlbnQgc2xvdCBkYXRhXG4gICAqIEBwYXJhbSBwb3NpdGlvbiA6IGNvbnRlbnQgc2xvdCBwb3NpdGlvblxuICAgKi9cbiAgZ2V0Q29udGVudFNsb3QocG9zaXRpb246IHN0cmluZyk6IE9ic2VydmFibGU8Q29udGVudFNsb3REYXRhPiB7XG4gICAgcmV0dXJuIHRoaXMucm91dGluZ1NlcnZpY2VcbiAgICAgIC5nZXRQYWdlQ29udGV4dCgpXG4gICAgICAucGlwZShcbiAgICAgICAgc3dpdGNoTWFwKHBhZ2VDb250ZXh0ID0+XG4gICAgICAgICAgdGhpcy5zdG9yZS5waXBlKFxuICAgICAgICAgICAgc2VsZWN0KGZyb21TdG9yZS5jdXJyZW50U2xvdFNlbGVjdG9yRmFjdG9yeShwYWdlQ29udGV4dCwgcG9zaXRpb24pKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHaXZlbiBuYXZpZ2F0aW9uIG5vZGUgdWlkLCBnZXQgaXRlbXMgKHdpdGggaWQgYW5kIHR5cGUpIGluc2lkZSB0aGUgbmF2aWdhdGlvbiBlbnRyaWVzXG4gICAqIEBwYXJhbSBuYXZpZ2F0aW9uTm9kZVVpZCA6IHVpZCBvZiB0aGUgbmF2aWdhdGlvbiBub2RlXG4gICAqL1xuICBnZXROYXZpZ2F0aW9uRW50cnlJdGVtcyhuYXZpZ2F0aW9uTm9kZVVpZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxOb2RlSXRlbT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZnJvbVN0b3JlLml0ZW1zU2VsZWN0b3JGYWN0b3J5KG5hdmlnYXRpb25Ob2RlVWlkKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIExvYWQgbmF2aWdhdGlvbiBpdGVtcyBkYXRhXG4gICAqIEBwYXJhbSByb290VWlkIDogdGhlIHVpZCBvZiB0aGUgcm9vdCBuYXZpZ2F0aW9uIG5vZGVcbiAgICogQHBhcmFtIGl0ZW1MaXN0IDogbGlzdCBvZiBpdGVtcyAod2l0aCBpZCBhbmQgdHlwZSlcbiAgICovXG4gIGxvYWROYXZpZ2F0aW9uSXRlbXMoXG4gICAgcm9vdFVpZDogc3RyaW5nLFxuICAgIGl0ZW1MaXN0OiB7IGlkOiBzdHJpbmc7IHN1cGVyVHlwZTogc3RyaW5nIH1bXVxuICApOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IGZyb21TdG9yZS5Mb2FkTmF2aWdhdGlvbkl0ZW1zKHtcbiAgICAgICAgbm9kZUlkOiByb290VWlkLFxuICAgICAgICBpdGVtczogaXRlbUxpc3QsXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmVmcmVzaCB0aGUgY29udGVudCBvZiB0aGUgbGF0ZXN0IGNtcyBwYWdlXG4gICAqL1xuICByZWZyZXNoTGF0ZXN0UGFnZSgpOiB2b2lkIHtcbiAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlXG4gICAgICAuZ2V0UGFnZUNvbnRleHQoKVxuICAgICAgLnBpcGUodGFrZSgxKSlcbiAgICAgIC5zdWJzY3JpYmUocGFnZUNvbnRleHQgPT5cbiAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgZnJvbVN0b3JlLkxvYWRQYWdlRGF0YShwYWdlQ29udGV4dCkpXG4gICAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZnJlc2ggdGhlIGNtcyBwYWdlIGNvbnRlbnQgYnkgcGFnZSBJZFxuICAgKiBAcGFyYW0gcGFnZUlkXG4gICAqL1xuICByZWZyZXNoUGFnZUJ5SWQocGFnZUlkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBwYWdlQ29udGV4dDogUGFnZUNvbnRleHQgPSB7IGlkOiBwYWdlSWQgfTtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBmcm9tU3RvcmUuTG9hZFBhZ2VEYXRhKHBhZ2VDb250ZXh0KSk7XG4gIH1cblxuICAvKipcbiAgICogUmVmcmVzaCBjbXMgY29tcG9uZW50J3MgY29udGVudFxuICAgKiBAcGFyYW0gdWlkIDogY29tcG9uZW50IHVpZFxuICAgKi9cbiAgcmVmcmVzaENvbXBvbmVudCh1aWQ6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IGZyb21TdG9yZS5Mb2FkQ29tcG9uZW50KHVpZCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdpdmVuIHBhZ2VDb250ZXh0LCByZXR1cm4gdGhlIENNUyBwYWdlIGRhdGFcbiAgICogQHBhcmFtIHBhZ2VDb250ZXh0XG4gICAqL1xuICBnZXRQYWdlU3RhdGUocGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0KTogT2JzZXJ2YWJsZTxQYWdlPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoZnJvbVN0b3JlLmdldFBhZ2VEYXRhKHBhZ2VDb250ZXh0KSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdpdmVuIHBhZ2VDb250ZXh0LCByZXR1cm4gdGhlIENNUyBwYWdlIGRhdGFcbiAgICogQHBhcmFtIHBhZ2VDb250ZXh0XG4gICAqL1xuICBnZXRQYWdlQ29tcG9uZW50VHlwZXMocGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0KTogT2JzZXJ2YWJsZTxzdHJpbmdbXT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZnJvbVN0b3JlLmdldFBhZ2VDb21wb25lbnRUeXBlcyhwYWdlQ29udGV4dCkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHaXZlbiBwYWdlQ29udGV4dCwgcmV0dXJuIHdoZXRoZXIgdGhlIENNUyBwYWdlIGRhdGEgZXhpc3RzIG9yIG5vdFxuICAgKiBAcGFyYW0gcGFnZUNvbnRleHRcbiAgICovXG4gIGhhc1BhZ2UocGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0LCBmb3JjZVJlbG9hZCA9IGZhbHNlKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChmcm9tU3RvcmUuZ2V0SW5kZXhFbnRpdHkocGFnZUNvbnRleHQpKSxcbiAgICAgIHRhcCgoZW50aXR5OiBMb2FkZXJTdGF0ZTxzdHJpbmc+KSA9PiB7XG4gICAgICAgIGNvbnN0IGF0dGVtcHRlZExvYWQgPSBlbnRpdHkubG9hZGluZyB8fCBlbnRpdHkuc3VjY2VzcyB8fCBlbnRpdHkuZXJyb3I7XG4gICAgICAgIGNvbnN0IHNob3VsZFJlbG9hZCA9IGZvcmNlUmVsb2FkICYmICFlbnRpdHkubG9hZGluZztcbiAgICAgICAgaWYgKCFhdHRlbXB0ZWRMb2FkIHx8IHNob3VsZFJlbG9hZCkge1xuICAgICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IGZyb21TdG9yZS5Mb2FkUGFnZURhdGEocGFnZUNvbnRleHQpKTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBmaWx0ZXIoZW50aXR5ID0+IGVudGl0eS5zdWNjZXNzIHx8IGVudGl0eS5lcnJvciksXG4gICAgICBwbHVjaygnc3VjY2VzcycpLFxuICAgICAgY2F0Y2hFcnJvcigoKSA9PiBvZihmYWxzZSkpXG4gICAgKTtcbiAgfVxufVxuIl19
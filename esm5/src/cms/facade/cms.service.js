/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, filter, pluck, shareReplay, switchMap, take, tap, withLatestFrom, } from 'rxjs/operators';
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
            this.components[uid] = this.routingService.isNavigating().pipe(withLatestFrom(this.store.pipe(select(fromStore.componentStateSelectorFactory(uid)))), tap(function (_a) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL2ZhY2FkZS9jbXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFNUMsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQ0wsVUFBVSxFQUNWLE1BQU0sRUFDTixLQUFLLEVBQ0wsV0FBVyxFQUNYLFNBQVMsRUFDVCxJQUFJLEVBQ0osR0FBRyxFQUNILGNBQWMsR0FDZixNQUFNLGdCQUFnQixDQUFDO0FBRXhCLE9BQU8sS0FBSyxTQUFTLE1BQU0sVUFBVSxDQUFDO0FBT3RDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQzs7OztBQUd0RTtJQVVFLG9CQUNVLEtBQTBCLEVBQzFCLGNBQThCO1FBRDlCLFVBQUssR0FBTCxLQUFLLENBQXFCO1FBQzFCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQVJoQyx1QkFBa0IsR0FBRyxLQUFLLENBQUM7UUFFM0IsZUFBVSxHQUVkLEVBQUUsQ0FBQztJQUtKLENBQUM7SUFLSixzQkFBSSx5Q0FBaUI7UUFIckI7O1dBRUc7Ozs7OztRQUNILFVBQXNCLEtBQWM7WUFDbEMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQztRQUNsQyxDQUFDOzs7T0FBQTtJQUVEOztPQUVHOzs7OztJQUNILHdDQUFtQjs7OztJQUFuQjtRQUNFLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDO0lBQ2pDLENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSCxtQ0FBYzs7OztJQUFkO1FBQUEsaUJBUUM7UUFQQyxPQUFPLElBQUksQ0FBQyxjQUFjO2FBQ3ZCLGNBQWMsRUFBRTth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LENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQzdDLEdBQUcsQ0FBQyxVQUFDLE1BQTJCOztnQkFDeEIsYUFBYSxHQUFHLE1BQU0sQ0FBQyxPQUFPLElBQUksTUFBTSxDQUFDLE9BQU8sSUFBSSxNQUFNLENBQUMsS0FBSzs7Z0JBQ2hFLFlBQVksR0FBRyxXQUFXLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTztZQUNuRCxJQUFJLENBQUMsYUFBYSxJQUFJLFlBQVksRUFBRTtnQkFDbEMsS0FBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxTQUFTLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7YUFDOUQ7UUFDSCxDQUFDLENBQUMsRUFDRixNQUFNLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxNQUFNLENBQUMsT0FBTyxJQUFJLE1BQU0sQ0FBQyxLQUFLLEVBQTlCLENBQThCLENBQUMsRUFDaEQsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUNoQixVQUFVLENBQUMsY0FBTSxPQUFBLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBVCxDQUFTLENBQUMsQ0FDNUIsQ0FBQztJQUNKLENBQUM7O2dCQW5MRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQTFCZ0IsS0FBSztnQkFxQmIsY0FBYzs7O3FCQXZCdkI7Q0E4TUMsQUFwTEQsSUFvTEM7U0FqTFksVUFBVTs7Ozs7O0lBQ3JCLHdDQUFtQzs7Ozs7SUFFbkMsZ0NBRU87Ozs7O0lBR0wsMkJBQWtDOzs7OztJQUNsQyxvQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBjYXRjaEVycm9yLFxuICBmaWx0ZXIsXG4gIHBsdWNrLFxuICBzaGFyZVJlcGxheSxcbiAgc3dpdGNoTWFwLFxuICB0YWtlLFxuICB0YXAsXG4gIHdpdGhMYXRlc3RGcm9tLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCAqIGFzIGZyb21TdG9yZSBmcm9tICcuLi9zdG9yZSc7XG5pbXBvcnQgeyBMb2FkZXJTdGF0ZSB9IGZyb20gJy4uLy4uL3N0YXRlJztcbmltcG9ydCB7IENvbnRlbnRTbG90RGF0YSB9IGZyb20gJy4uL21vZGVsL2NvbnRlbnQtc2xvdC1kYXRhLm1vZGVsJztcbmltcG9ydCB7IE5vZGVJdGVtIH0gZnJvbSAnLi4vbW9kZWwvbm9kZS1pdGVtLm1vZGVsJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICcuLi9tb2RlbC9wYWdlLm1vZGVsJztcbmltcG9ydCB7IFN0YXRlV2l0aENtcyB9IGZyb20gJy4uL3N0b3JlL2Ntcy1zdGF0ZSc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnQgfSBmcm9tICcuLi8uLi9vY2Mvb2NjLW1vZGVscy9jbXMtY29tcG9uZW50Lm1vZGVscyc7XG5pbXBvcnQgeyBSb3V0aW5nU2VydmljZSB9IGZyb20gJy4uLy4uL3JvdXRpbmcvZmFjYWRlL3JvdXRpbmcuc2VydmljZSc7XG5pbXBvcnQgeyBQYWdlQ29udGV4dCB9IGZyb20gJy4uLy4uL3JvdXRpbmcvbW9kZWxzL3BhZ2UtY29udGV4dC5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDbXNTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfbGF1bmNoSW5TbWFydEVkaXQgPSBmYWxzZTtcblxuICBwcml2YXRlIGNvbXBvbmVudHM6IHtcbiAgICBbdWlkOiBzdHJpbmddOiBPYnNlcnZhYmxlPENtc0NvbXBvbmVudD47XG4gIH0gPSB7fTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhDbXM+LFxuICAgIHByaXZhdGUgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlXG4gICkge31cblxuICAvKipcbiAgICogU2V0IF9sYXVuY2hJblNtYXJ0RWRpdCB2YWx1ZVxuICAgKi9cbiAgc2V0IGxhdW5jaEluU21hcnRFZGl0KHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fbGF1bmNoSW5TbWFydEVkaXQgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZSBhcHAgbGF1bmNoZWQgaW4gc21hcnQgZWRpdFxuICAgKi9cbiAgaXNMYXVuY2hJblNtYXJ0RWRpdCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fbGF1bmNoSW5TbWFydEVkaXQ7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGN1cnJlbnQgQ01TIHBhZ2UgZGF0YVxuICAgKi9cbiAgZ2V0Q3VycmVudFBhZ2UoKTogT2JzZXJ2YWJsZTxQYWdlPiB7XG4gICAgcmV0dXJuIHRoaXMucm91dGluZ1NlcnZpY2VcbiAgICAgIC5nZXRQYWdlQ29udGV4dCgpXG4gICAgICAucGlwZShcbiAgICAgICAgc3dpdGNoTWFwKHBhZ2VDb250ZXh0ID0+XG4gICAgICAgICAgdGhpcy5zdG9yZS5zZWxlY3QoZnJvbVN0b3JlLmdldFBhZ2VEYXRhKHBhZ2VDb250ZXh0KSlcbiAgICAgICAgKVxuICAgICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgQ01TIGNvbXBvbmVudCBkYXRhIGJ5IHVpZFxuICAgKiBAcGFyYW0gdWlkIDogQ01TIGNvbXBvbmV0IHVpZFxuICAgKi9cbiAgZ2V0Q29tcG9uZW50RGF0YTxUIGV4dGVuZHMgQ21zQ29tcG9uZW50Pih1aWQ6IHN0cmluZyk6IE9ic2VydmFibGU8VD4ge1xuICAgIGlmICghdGhpcy5jb21wb25lbnRzW3VpZF0pIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t1aWRdID0gdGhpcy5yb3V0aW5nU2VydmljZS5pc05hdmlnYXRpbmcoKS5waXBlKFxuICAgICAgICB3aXRoTGF0ZXN0RnJvbShcbiAgICAgICAgICB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KGZyb21TdG9yZS5jb21wb25lbnRTdGF0ZVNlbGVjdG9yRmFjdG9yeSh1aWQpKSlcbiAgICAgICAgKSxcbiAgICAgICAgdGFwKChbaXNOYXZpZ2F0aW5nLCBjb21wb25lbnRTdGF0ZV06IFtib29sZWFuLCBMb2FkZXJTdGF0ZTxhbnk+XSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGF0dGVtcHRlZExvYWQgPVxuICAgICAgICAgICAgY29tcG9uZW50U3RhdGUubG9hZGluZyB8fFxuICAgICAgICAgICAgY29tcG9uZW50U3RhdGUuc3VjY2VzcyB8fFxuICAgICAgICAgICAgY29tcG9uZW50U3RhdGUuZXJyb3I7XG4gICAgICAgICAgaWYgKCFhdHRlbXB0ZWRMb2FkICYmICFpc05hdmlnYXRpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IGZyb21TdG9yZS5Mb2FkQ29tcG9uZW50KHVpZCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIHBsdWNrKDEpLFxuICAgICAgICBmaWx0ZXIoY29tcG9uZW50U3RhdGUgPT4gY29tcG9uZW50U3RhdGUuc3VjY2VzcyksXG4gICAgICAgIHBsdWNrKCd2YWx1ZScpLFxuICAgICAgICBzaGFyZVJlcGxheSh7IGJ1ZmZlclNpemU6IDEsIHJlZkNvdW50OiB0cnVlIH0pXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmNvbXBvbmVudHNbdWlkXSBhcyBPYnNlcnZhYmxlPFQ+O1xuICB9XG5cbiAgLyoqXG4gICAqIEdpdmVuIHRoZSBwb3NpdGlvbiwgZ2V0IHRoZSBjb250ZW50IHNsb3QgZGF0YVxuICAgKiBAcGFyYW0gcG9zaXRpb24gOiBjb250ZW50IHNsb3QgcG9zaXRpb25cbiAgICovXG4gIGdldENvbnRlbnRTbG90KHBvc2l0aW9uOiBzdHJpbmcpOiBPYnNlcnZhYmxlPENvbnRlbnRTbG90RGF0YT4ge1xuICAgIHJldHVybiB0aGlzLnJvdXRpbmdTZXJ2aWNlXG4gICAgICAuZ2V0UGFnZUNvbnRleHQoKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHN3aXRjaE1hcChwYWdlQ29udGV4dCA9PlxuICAgICAgICAgIHRoaXMuc3RvcmUucGlwZShcbiAgICAgICAgICAgIHNlbGVjdChmcm9tU3RvcmUuY3VycmVudFNsb3RTZWxlY3RvckZhY3RvcnkocGFnZUNvbnRleHQsIHBvc2l0aW9uKSlcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICk7XG4gIH1cblxuICAvKipcbiAgICogR2l2ZW4gbmF2aWdhdGlvbiBub2RlIHVpZCwgZ2V0IGl0ZW1zICh3aXRoIGlkIGFuZCB0eXBlKSBpbnNpZGUgdGhlIG5hdmlnYXRpb24gZW50cmllc1xuICAgKiBAcGFyYW0gbmF2aWdhdGlvbk5vZGVVaWQgOiB1aWQgb2YgdGhlIG5hdmlnYXRpb24gbm9kZVxuICAgKi9cbiAgZ2V0TmF2aWdhdGlvbkVudHJ5SXRlbXMobmF2aWdhdGlvbk5vZGVVaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8Tm9kZUl0ZW0+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KGZyb21TdG9yZS5pdGVtc1NlbGVjdG9yRmFjdG9yeShuYXZpZ2F0aW9uTm9kZVVpZCkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2FkIG5hdmlnYXRpb24gaXRlbXMgZGF0YVxuICAgKiBAcGFyYW0gcm9vdFVpZCA6IHRoZSB1aWQgb2YgdGhlIHJvb3QgbmF2aWdhdGlvbiBub2RlXG4gICAqIEBwYXJhbSBpdGVtTGlzdCA6IGxpc3Qgb2YgaXRlbXMgKHdpdGggaWQgYW5kIHR5cGUpXG4gICAqL1xuICBsb2FkTmF2aWdhdGlvbkl0ZW1zKFxuICAgIHJvb3RVaWQ6IHN0cmluZyxcbiAgICBpdGVtTGlzdDogeyBpZDogc3RyaW5nOyBzdXBlclR5cGU6IHN0cmluZyB9W11cbiAgKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBmcm9tU3RvcmUuTG9hZE5hdmlnYXRpb25JdGVtcyh7XG4gICAgICAgIG5vZGVJZDogcm9vdFVpZCxcbiAgICAgICAgaXRlbXM6IGl0ZW1MaXN0LFxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZnJlc2ggdGhlIGNvbnRlbnQgb2YgdGhlIGxhdGVzdCBjbXMgcGFnZVxuICAgKi9cbiAgcmVmcmVzaExhdGVzdFBhZ2UoKTogdm9pZCB7XG4gICAgdGhpcy5yb3V0aW5nU2VydmljZVxuICAgICAgLmdldFBhZ2VDb250ZXh0KClcbiAgICAgIC5waXBlKHRha2UoMSkpXG4gICAgICAuc3Vic2NyaWJlKHBhZ2VDb250ZXh0ID0+XG4gICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IGZyb21TdG9yZS5Mb2FkUGFnZURhdGEocGFnZUNvbnRleHQpKVxuICAgICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWZyZXNoIHRoZSBjbXMgcGFnZSBjb250ZW50IGJ5IHBhZ2UgSWRcbiAgICogQHBhcmFtIHBhZ2VJZFxuICAgKi9cbiAgcmVmcmVzaFBhZ2VCeUlkKHBhZ2VJZDogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgcGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0ID0geyBpZDogcGFnZUlkIH07XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgZnJvbVN0b3JlLkxvYWRQYWdlRGF0YShwYWdlQ29udGV4dCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZnJlc2ggY21zIGNvbXBvbmVudCdzIGNvbnRlbnRcbiAgICogQHBhcmFtIHVpZCA6IGNvbXBvbmVudCB1aWRcbiAgICovXG4gIHJlZnJlc2hDb21wb25lbnQodWlkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBmcm9tU3RvcmUuTG9hZENvbXBvbmVudCh1aWQpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHaXZlbiBwYWdlQ29udGV4dCwgcmV0dXJuIHRoZSBDTVMgcGFnZSBkYXRhXG4gICAqIEBwYXJhbSBwYWdlQ29udGV4dFxuICAgKi9cbiAgZ2V0UGFnZVN0YXRlKHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCk6IE9ic2VydmFibGU8UGFnZT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KGZyb21TdG9yZS5nZXRQYWdlRGF0YShwYWdlQ29udGV4dCkpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHaXZlbiBwYWdlQ29udGV4dCwgcmV0dXJuIHRoZSBDTVMgcGFnZSBkYXRhXG4gICAqIEBwYXJhbSBwYWdlQ29udGV4dFxuICAgKi9cbiAgZ2V0UGFnZUNvbXBvbmVudFR5cGVzKHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCk6IE9ic2VydmFibGU8c3RyaW5nW10+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KGZyb21TdG9yZS5nZXRQYWdlQ29tcG9uZW50VHlwZXMocGFnZUNvbnRleHQpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogR2l2ZW4gcGFnZUNvbnRleHQsIHJldHVybiB3aGV0aGVyIHRoZSBDTVMgcGFnZSBkYXRhIGV4aXN0cyBvciBub3RcbiAgICogQHBhcmFtIHBhZ2VDb250ZXh0XG4gICAqL1xuICBoYXNQYWdlKHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCwgZm9yY2VSZWxvYWQgPSBmYWxzZSk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZnJvbVN0b3JlLmdldEluZGV4RW50aXR5KHBhZ2VDb250ZXh0KSksXG4gICAgICB0YXAoKGVudGl0eTogTG9hZGVyU3RhdGU8c3RyaW5nPikgPT4ge1xuICAgICAgICBjb25zdCBhdHRlbXB0ZWRMb2FkID0gZW50aXR5LmxvYWRpbmcgfHwgZW50aXR5LnN1Y2Nlc3MgfHwgZW50aXR5LmVycm9yO1xuICAgICAgICBjb25zdCBzaG91bGRSZWxvYWQgPSBmb3JjZVJlbG9hZCAmJiAhZW50aXR5LmxvYWRpbmc7XG4gICAgICAgIGlmICghYXR0ZW1wdGVkTG9hZCB8fCBzaG91bGRSZWxvYWQpIHtcbiAgICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBmcm9tU3RvcmUuTG9hZFBhZ2VEYXRhKHBhZ2VDb250ZXh0KSk7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgZmlsdGVyKGVudGl0eSA9PiBlbnRpdHkuc3VjY2VzcyB8fCBlbnRpdHkuZXJyb3IpLFxuICAgICAgcGx1Y2soJ3N1Y2Nlc3MnKSxcbiAgICAgIGNhdGNoRXJyb3IoKCkgPT4gb2YoZmFsc2UpKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==
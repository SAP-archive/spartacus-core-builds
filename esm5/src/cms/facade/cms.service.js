/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { combineLatest, of } from 'rxjs';
import { catchError, filter, pluck, shareReplay, switchMap, take, tap, } from 'rxjs/operators';
import { RoutingService } from '../../routing/facade/routing.service';
import * as fromStore from '../store';
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
            return _this.store.select(fromStore.getPageData(pageContext));
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
                this.store.pipe(select(fromStore.componentStateSelectorFactory(uid))),
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
                        _this.store.dispatch(new fromStore.LoadComponent(uid));
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
            return _this.store.pipe(select(fromStore.currentSlotSelectorFactory(pageContext, position)), filter(Boolean));
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
            .subscribe((/**
         * @param {?} pageContext
         * @return {?}
         */
        function (pageContext) {
            return _this.store.dispatch(new fromStore.LoadPageData(pageContext));
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
        /** @type {?} */
        var loaded = false;
        return this.store.pipe(select(fromStore.getIndexEntity(pageContext)), tap((/**
         * @param {?} entity
         * @return {?}
         */
        function (entity) {
            /** @type {?} */
            var attemptedLoad = entity.loading || entity.success || entity.error;
            /** @type {?} */
            var shouldReload = forceReload && !entity.loading && !loaded;
            if (!attemptedLoad || shouldReload) {
                _this.store.dispatch(new fromStore.LoadPageData(pageContext));
                loaded = true;
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
     * @param {?} pageContext
     * @return {?}
     */
    CmsService.prototype.getPageIndex = /**
     * @param {?} pageContext
     * @return {?}
     */
    function (pageContext) {
        return this.store.pipe(select(fromStore.getIndexValue(pageContext)));
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
        this.store.dispatch(new fromStore.SetPageFailIndex(pageContext, value));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL2ZhY2FkZS9jbXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDNUMsT0FBTyxFQUFFLGFBQWEsRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDckQsT0FBTyxFQUNMLFVBQVUsRUFDVixNQUFNLEVBQ04sS0FBSyxFQUNMLFdBQVcsRUFDWCxTQUFTLEVBQ1QsSUFBSSxFQUNKLEdBQUcsR0FDSixNQUFNLGdCQUFnQixDQUFDO0FBRXhCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQU10RSxPQUFPLEtBQUssU0FBUyxNQUFNLFVBQVUsQ0FBQzs7OztBQUd0QztJQVVFLG9CQUNZLEtBQTBCLEVBQzFCLGNBQThCO1FBRDlCLFVBQUssR0FBTCxLQUFLLENBQXFCO1FBQzFCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQVJsQyx1QkFBa0IsR0FBRyxLQUFLLENBQUM7UUFFM0IsZUFBVSxHQUVkLEVBQUUsQ0FBQztJQUtKLENBQUM7SUFLSixzQkFBSSx5Q0FBaUI7UUFIckI7O1dBRUc7Ozs7OztRQUNILFVBQXNCLEtBQWM7WUFDbEMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQztRQUNsQyxDQUFDOzs7T0FBQTtJQUVEOztPQUVHOzs7OztJQUNILHdDQUFtQjs7OztJQUFuQjtRQUNFLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDO0lBQ2pDLENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSCxtQ0FBYzs7OztJQUFkO1FBQUEsaUJBUUM7UUFQQyxPQUFPLElBQUksQ0FBQyxjQUFjO2FBQ3ZCLGNBQWMsRUFBRTth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QU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7Ozs7OztJQUVELHFDQUFnQjs7Ozs7SUFBaEIsVUFBaUIsV0FBd0IsRUFBRSxLQUFhO1FBQ3RELElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksU0FBUyxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzFFLENBQUM7O2dCQXZNRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQXZCZ0IsS0FBSztnQkFZYixjQUFjOzs7cUJBYnZCO0NBOE5DLEFBeE1ELElBd01DO1NBck1ZLFVBQVU7Ozs7OztJQUNyQix3Q0FBbUM7Ozs7O0lBRW5DLGdDQUVPOzs7OztJQUdMLDJCQUFvQzs7Ozs7SUFDcEMsb0NBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc2VsZWN0LCBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBjYXRjaEVycm9yLFxuICBmaWx0ZXIsXG4gIHBsdWNrLFxuICBzaGFyZVJlcGxheSxcbiAgc3dpdGNoTWFwLFxuICB0YWtlLFxuICB0YXAsXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENtc0NvbXBvbmVudCB9IGZyb20gJy4uLy4uL21vZGVsL2Ntcy5tb2RlbCc7XG5pbXBvcnQgeyBSb3V0aW5nU2VydmljZSB9IGZyb20gJy4uLy4uL3JvdXRpbmcvZmFjYWRlL3JvdXRpbmcuc2VydmljZSc7XG5pbXBvcnQgeyBQYWdlQ29udGV4dCB9IGZyb20gJy4uLy4uL3JvdXRpbmcvbW9kZWxzL3BhZ2UtY29udGV4dC5tb2RlbCc7XG5pbXBvcnQgeyBMb2FkZXJTdGF0ZSB9IGZyb20gJy4uLy4uL3N0YXRlJztcbmltcG9ydCB7IENvbnRlbnRTbG90RGF0YSB9IGZyb20gJy4uL21vZGVsL2NvbnRlbnQtc2xvdC1kYXRhLm1vZGVsJztcbmltcG9ydCB7IE5vZGVJdGVtIH0gZnJvbSAnLi4vbW9kZWwvbm9kZS1pdGVtLm1vZGVsJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICcuLi9tb2RlbC9wYWdlLm1vZGVsJztcbmltcG9ydCAqIGFzIGZyb21TdG9yZSBmcm9tICcuLi9zdG9yZSc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhDbXMgfSBmcm9tICcuLi9zdG9yZS9jbXMtc3RhdGUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ21zU2VydmljZSB7XG4gIHByaXZhdGUgX2xhdW5jaEluU21hcnRFZGl0ID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBjb21wb25lbnRzOiB7XG4gICAgW3VpZDogc3RyaW5nXTogT2JzZXJ2YWJsZTxDbXNDb21wb25lbnQ+O1xuICB9ID0ge307XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhDbXM+LFxuICAgIHByb3RlY3RlZCByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2VcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBTZXQgX2xhdW5jaEluU21hcnRFZGl0IHZhbHVlXG4gICAqL1xuICBzZXQgbGF1bmNoSW5TbWFydEVkaXQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9sYXVuY2hJblNtYXJ0RWRpdCA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhlIGFwcCBsYXVuY2hlZCBpbiBzbWFydCBlZGl0XG4gICAqL1xuICBpc0xhdW5jaEluU21hcnRFZGl0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9sYXVuY2hJblNtYXJ0RWRpdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY3VycmVudCBDTVMgcGFnZSBkYXRhXG4gICAqL1xuICBnZXRDdXJyZW50UGFnZSgpOiBPYnNlcnZhYmxlPFBhZ2U+IHtcbiAgICByZXR1cm4gdGhpcy5yb3V0aW5nU2VydmljZVxuICAgICAgLmdldFBhZ2VDb250ZXh0KClcbiAgICAgIC5waXBlKFxuICAgICAgICBzd2l0Y2hNYXAocGFnZUNvbnRleHQgPT5cbiAgICAgICAgICB0aGlzLnN0b3JlLnNlbGVjdChmcm9tU3RvcmUuZ2V0UGFnZURhdGEocGFnZUNvbnRleHQpKVxuICAgICAgICApXG4gICAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBDTVMgY29tcG9uZW50IGRhdGEgYnkgdWlkXG4gICAqIEBwYXJhbSB1aWQgOiBDTVMgY29tcG9uZXQgdWlkXG4gICAqL1xuICBnZXRDb21wb25lbnREYXRhPFQgZXh0ZW5kcyBDbXNDb21wb25lbnQ+KHVpZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxUPiB7XG4gICAgaWYgKCF0aGlzLmNvbXBvbmVudHNbdWlkXSkge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3VpZF0gPSBjb21iaW5lTGF0ZXN0KFtcbiAgICAgICAgdGhpcy5yb3V0aW5nU2VydmljZS5pc05hdmlnYXRpbmcoKSxcbiAgICAgICAgdGhpcy5zdG9yZS5waXBlKHNlbGVjdChmcm9tU3RvcmUuY29tcG9uZW50U3RhdGVTZWxlY3RvckZhY3RvcnkodWlkKSkpLFxuICAgICAgXSkucGlwZShcbiAgICAgICAgdGFwKChbaXNOYXZpZ2F0aW5nLCBjb21wb25lbnRTdGF0ZV0pID0+IHtcbiAgICAgICAgICAvLyBjb21wb25lbnRTdGF0ZSBpcyB1bmRlZmluZWQgd2hlbiB0aGUgd2hvbGUgY29tcG9uZW50cyBlbnRpdGllcyBhcmUgZW1wdHkuXG4gICAgICAgICAgLy8gSW4gdGhpcyBjYXNlLCB3ZSBkb24ndCBsb2FkIGNvbXBvbmVudCBvbmUgYnkgb25lLCBidXQgZXh0cmFjdCBjb21wb25lbnQgZGF0YSBmcm9tIGNtcyBwYWdlXG4gICAgICAgICAgaWYgKGNvbXBvbmVudFN0YXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGF0dGVtcHRlZExvYWQgPVxuICAgICAgICAgICAgICBjb21wb25lbnRTdGF0ZS5sb2FkaW5nIHx8XG4gICAgICAgICAgICAgIGNvbXBvbmVudFN0YXRlLnN1Y2Nlc3MgfHxcbiAgICAgICAgICAgICAgY29tcG9uZW50U3RhdGUuZXJyb3I7XG4gICAgICAgICAgICBpZiAoIWF0dGVtcHRlZExvYWQgJiYgIWlzTmF2aWdhdGluZykge1xuICAgICAgICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBmcm9tU3RvcmUuTG9hZENvbXBvbmVudCh1aWQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBwbHVjaygxKSxcbiAgICAgICAgZmlsdGVyKGNvbXBvbmVudFN0YXRlID0+IGNvbXBvbmVudFN0YXRlICYmIGNvbXBvbmVudFN0YXRlLnN1Y2Nlc3MpLFxuICAgICAgICBwbHVjaygndmFsdWUnKSxcbiAgICAgICAgc2hhcmVSZXBsYXkoeyBidWZmZXJTaXplOiAxLCByZWZDb3VudDogdHJ1ZSB9KVxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5jb21wb25lbnRzW3VpZF0gYXMgT2JzZXJ2YWJsZTxUPjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHaXZlbiB0aGUgcG9zaXRpb24sIGdldCB0aGUgY29udGVudCBzbG90IGRhdGFcbiAgICogQHBhcmFtIHBvc2l0aW9uIDogY29udGVudCBzbG90IHBvc2l0aW9uXG4gICAqL1xuICBnZXRDb250ZW50U2xvdChwb3NpdGlvbjogc3RyaW5nKTogT2JzZXJ2YWJsZTxDb250ZW50U2xvdERhdGE+IHtcbiAgICByZXR1cm4gdGhpcy5yb3V0aW5nU2VydmljZS5nZXRQYWdlQ29udGV4dCgpLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAocGFnZUNvbnRleHQgPT5cbiAgICAgICAgdGhpcy5zdG9yZS5waXBlKFxuICAgICAgICAgIHNlbGVjdChmcm9tU3RvcmUuY3VycmVudFNsb3RTZWxlY3RvckZhY3RvcnkocGFnZUNvbnRleHQsIHBvc2l0aW9uKSksXG4gICAgICAgICAgZmlsdGVyKEJvb2xlYW4pXG4gICAgICAgIClcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdpdmVuIG5hdmlnYXRpb24gbm9kZSB1aWQsIGdldCBpdGVtcyAod2l0aCBpZCBhbmQgdHlwZSkgaW5zaWRlIHRoZSBuYXZpZ2F0aW9uIGVudHJpZXNcbiAgICogQHBhcmFtIG5hdmlnYXRpb25Ob2RlVWlkIDogdWlkIG9mIHRoZSBuYXZpZ2F0aW9uIG5vZGVcbiAgICovXG4gIGdldE5hdmlnYXRpb25FbnRyeUl0ZW1zKG5hdmlnYXRpb25Ob2RlVWlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPE5vZGVJdGVtPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChmcm9tU3RvcmUuaXRlbXNTZWxlY3RvckZhY3RvcnkobmF2aWdhdGlvbk5vZGVVaWQpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogTG9hZCBuYXZpZ2F0aW9uIGl0ZW1zIGRhdGFcbiAgICogQHBhcmFtIHJvb3RVaWQgOiB0aGUgdWlkIG9mIHRoZSByb290IG5hdmlnYXRpb24gbm9kZVxuICAgKiBAcGFyYW0gaXRlbUxpc3QgOiBsaXN0IG9mIGl0ZW1zICh3aXRoIGlkIGFuZCB0eXBlKVxuICAgKi9cbiAgbG9hZE5hdmlnYXRpb25JdGVtcyhcbiAgICByb290VWlkOiBzdHJpbmcsXG4gICAgaXRlbUxpc3Q6IHsgaWQ6IHN0cmluZzsgc3VwZXJUeXBlOiBzdHJpbmcgfVtdXG4gICk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgZnJvbVN0b3JlLkxvYWROYXZpZ2F0aW9uSXRlbXMoe1xuICAgICAgICBub2RlSWQ6IHJvb3RVaWQsXG4gICAgICAgIGl0ZW1zOiBpdGVtTGlzdCxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWZyZXNoIHRoZSBjb250ZW50IG9mIHRoZSBsYXRlc3QgY21zIHBhZ2VcbiAgICovXG4gIHJlZnJlc2hMYXRlc3RQYWdlKCk6IHZvaWQge1xuICAgIHRoaXMucm91dGluZ1NlcnZpY2VcbiAgICAgIC5nZXRQYWdlQ29udGV4dCgpXG4gICAgICAucGlwZSh0YWtlKDEpKVxuICAgICAgLnN1YnNjcmliZShwYWdlQ29udGV4dCA9PlxuICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBmcm9tU3RvcmUuTG9hZFBhZ2VEYXRhKHBhZ2VDb250ZXh0KSlcbiAgICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmVmcmVzaCB0aGUgY21zIHBhZ2UgY29udGVudCBieSBwYWdlIElkXG4gICAqIEBwYXJhbSBwYWdlSWRcbiAgICovXG4gIHJlZnJlc2hQYWdlQnlJZChwYWdlSWQ6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCA9IHsgaWQ6IHBhZ2VJZCB9O1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IGZyb21TdG9yZS5Mb2FkUGFnZURhdGEocGFnZUNvbnRleHQpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWZyZXNoIGNtcyBjb21wb25lbnQncyBjb250ZW50XG4gICAqIEBwYXJhbSB1aWQgOiBjb21wb25lbnQgdWlkXG4gICAqL1xuICByZWZyZXNoQ29tcG9uZW50KHVpZDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgZnJvbVN0b3JlLkxvYWRDb21wb25lbnQodWlkKSk7XG4gIH1cblxuICAvKipcbiAgICogR2l2ZW4gcGFnZUNvbnRleHQsIHJldHVybiB0aGUgQ01TIHBhZ2UgZGF0YVxuICAgKiBAcGFyYW0gcGFnZUNvbnRleHRcbiAgICovXG4gIGdldFBhZ2VTdGF0ZShwYWdlQ29udGV4dDogUGFnZUNvbnRleHQpOiBPYnNlcnZhYmxlPFBhZ2U+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChmcm9tU3RvcmUuZ2V0UGFnZURhdGEocGFnZUNvbnRleHQpKSk7XG4gIH1cblxuICAvKipcbiAgICogR2l2ZW4gcGFnZUNvbnRleHQsIHJldHVybiB0aGUgQ01TIHBhZ2UgZGF0YVxuICAgKiBAcGFyYW0gcGFnZUNvbnRleHRcbiAgICovXG4gIGdldFBhZ2VDb21wb25lbnRUeXBlcyhwYWdlQ29udGV4dDogUGFnZUNvbnRleHQpOiBPYnNlcnZhYmxlPHN0cmluZ1tdPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChmcm9tU3RvcmUuZ2V0UGFnZUNvbXBvbmVudFR5cGVzKHBhZ2VDb250ZXh0KSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdpdmVuIHBhZ2VDb250ZXh0LCByZXR1cm4gd2hldGhlciB0aGUgQ01TIHBhZ2UgZGF0YSBleGlzdHMgb3Igbm90XG4gICAqIEBwYXJhbSBwYWdlQ29udGV4dFxuICAgKi9cbiAgaGFzUGFnZShwYWdlQ29udGV4dDogUGFnZUNvbnRleHQsIGZvcmNlUmVsb2FkID0gZmFsc2UpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICBsZXQgbG9hZGVkID0gZmFsc2U7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChmcm9tU3RvcmUuZ2V0SW5kZXhFbnRpdHkocGFnZUNvbnRleHQpKSxcbiAgICAgIHRhcCgoZW50aXR5OiBMb2FkZXJTdGF0ZTxzdHJpbmc+KSA9PiB7XG4gICAgICAgIGNvbnN0IGF0dGVtcHRlZExvYWQgPSBlbnRpdHkubG9hZGluZyB8fCBlbnRpdHkuc3VjY2VzcyB8fCBlbnRpdHkuZXJyb3I7XG4gICAgICAgIGNvbnN0IHNob3VsZFJlbG9hZCA9IGZvcmNlUmVsb2FkICYmICFlbnRpdHkubG9hZGluZyAmJiAhbG9hZGVkO1xuICAgICAgICBpZiAoIWF0dGVtcHRlZExvYWQgfHwgc2hvdWxkUmVsb2FkKSB7XG4gICAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgZnJvbVN0b3JlLkxvYWRQYWdlRGF0YShwYWdlQ29udGV4dCkpO1xuICAgICAgICAgIGxvYWRlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgZmlsdGVyKGVudGl0eSA9PiB7XG4gICAgICAgIGlmICghZW50aXR5Lmhhc093blByb3BlcnR5KCd2YWx1ZScpKSB7XG4gICAgICAgICAgLy8gaWYgd2UgaGF2ZSBpbmNvbXBsZXRlIHN0YXRlIGZyb20gc3JyIGZhaWxlZCBsb2FkIHRyYW5zZmVyIHN0YXRlLFxuICAgICAgICAgIC8vIHdlIHNob3VsZCB3YWl0IGZvciByZWxvYWQgYW5kIGFjdHVhbCB2YWx1ZVxuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZW50aXR5LnN1Y2Nlc3MgfHwgKGVudGl0eS5lcnJvciAmJiAhZW50aXR5LmxvYWRpbmcpO1xuICAgICAgfSksXG4gICAgICBwbHVjaygnc3VjY2VzcycpLFxuICAgICAgY2F0Y2hFcnJvcigoKSA9PiBvZihmYWxzZSkpXG4gICAgKTtcbiAgfVxuXG4gIGdldFBhZ2VJbmRleChwYWdlQ29udGV4dDogUGFnZUNvbnRleHQpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KGZyb21TdG9yZS5nZXRJbmRleFZhbHVlKHBhZ2VDb250ZXh0KSkpO1xuICB9XG5cbiAgc2V0UGFnZUZhaWxJbmRleChwYWdlQ29udGV4dDogUGFnZUNvbnRleHQsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBmcm9tU3RvcmUuU2V0UGFnZUZhaWxJbmRleChwYWdlQ29udGV4dCwgdmFsdWUpKTtcbiAgfVxufVxuIl19
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { combineLatest, of } from 'rxjs';
import { catchError, filter, pluck, shareReplay, switchMap, take, tap, } from 'rxjs/operators';
import { RoutingService } from '../../routing/facade/routing.service';
import * as fromStore from '../store';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
import * as i2 from "../../routing/facade/routing.service";
export class CmsService {
    /**
     * @param {?} store
     * @param {?} routingService
     */
    constructor(store, routingService) {
        this.store = store;
        this.routingService = routingService;
        this._launchInSmartEdit = false;
        this.components = {};
    }
    /**
     * Set _launchInSmartEdit value
     * @param {?} value
     * @return {?}
     */
    set launchInSmartEdit(value) {
        this._launchInSmartEdit = value;
    }
    /**
     * Whether the app launched in smart edit
     * @return {?}
     */
    isLaunchInSmartEdit() {
        return this._launchInSmartEdit;
    }
    /**
     * Get current CMS page data
     * @return {?}
     */
    getCurrentPage() {
        return this.routingService
            .getPageContext()
            .pipe(switchMap(pageContext => this.store.select(fromStore.getPageData(pageContext))));
    }
    /**
     * Get CMS component data by uid
     * @template T
     * @param {?} uid : CMS componet uid
     * @return {?}
     */
    getComponentData(uid) {
        if (!this.components[uid]) {
            this.components[uid] = combineLatest(this.routingService.isNavigating(), this.store.pipe(select(fromStore.componentStateSelectorFactory(uid)))).pipe(tap(([isNavigating, componentState]) => {
                /** @type {?} */
                const attemptedLoad = componentState.loading ||
                    componentState.success ||
                    componentState.error;
                if (!attemptedLoad && !isNavigating) {
                    this.store.dispatch(new fromStore.LoadComponent(uid));
                }
            }), pluck(1), filter(componentState => componentState.success), pluck('value'), shareReplay({ bufferSize: 1, refCount: true }));
        }
        return (/** @type {?} */ (this.components[uid]));
    }
    /**
     * Given the position, get the content slot data
     * @param {?} position : content slot position
     * @return {?}
     */
    getContentSlot(position) {
        return this.routingService.getPageContext().pipe(switchMap(pageContext => this.store.pipe(select(fromStore.currentSlotSelectorFactory(pageContext, position)), filter(Boolean))));
    }
    /**
     * Given navigation node uid, get items (with id and type) inside the navigation entries
     * @param {?} navigationNodeUid : uid of the navigation node
     * @return {?}
     */
    getNavigationEntryItems(navigationNodeUid) {
        return this.store.pipe(select(fromStore.itemsSelectorFactory(navigationNodeUid)));
    }
    /**
     * Load navigation items data
     * @param {?} rootUid : the uid of the root navigation node
     * @param {?} itemList : list of items (with id and type)
     * @return {?}
     */
    loadNavigationItems(rootUid, itemList) {
        this.store.dispatch(new fromStore.LoadNavigationItems({
            nodeId: rootUid,
            items: itemList,
        }));
    }
    /**
     * Refresh the content of the latest cms page
     * @return {?}
     */
    refreshLatestPage() {
        this.routingService
            .getPageContext()
            .pipe(take(1))
            .subscribe(pageContext => this.store.dispatch(new fromStore.LoadPageData(pageContext)));
    }
    /**
     * Refresh the cms page content by page Id
     * @param {?} pageId
     * @return {?}
     */
    refreshPageById(pageId) {
        /** @type {?} */
        const pageContext = { id: pageId };
        this.store.dispatch(new fromStore.LoadPageData(pageContext));
    }
    /**
     * Refresh cms component's content
     * @param {?} uid : component uid
     * @return {?}
     */
    refreshComponent(uid) {
        this.store.dispatch(new fromStore.LoadComponent(uid));
    }
    /**
     * Given pageContext, return the CMS page data
     * @param {?} pageContext
     * @return {?}
     */
    getPageState(pageContext) {
        return this.store.pipe(select(fromStore.getPageData(pageContext)));
    }
    /**
     * Given pageContext, return the CMS page data
     * @param {?} pageContext
     * @return {?}
     */
    getPageComponentTypes(pageContext) {
        return this.store.pipe(select(fromStore.getPageComponentTypes(pageContext)));
    }
    /**
     * Given pageContext, return whether the CMS page data exists or not
     * @param {?} pageContext
     * @param {?=} forceReload
     * @return {?}
     */
    hasPage(pageContext, forceReload = false) {
        return this.store.pipe(select(fromStore.getIndexEntity(pageContext)), tap((entity) => {
            /** @type {?} */
            const attemptedLoad = entity.loading || entity.success || entity.error;
            /** @type {?} */
            const shouldReload = forceReload && !entity.loading;
            if (!attemptedLoad || shouldReload) {
                this.store.dispatch(new fromStore.LoadPageData(pageContext));
            }
        }), filter(entity => entity.success || entity.error), pluck('success'), catchError(() => of(false)));
    }
}
CmsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
CmsService.ctorParameters = () => [
    { type: Store },
    { type: RoutingService }
];
/** @nocollapse */ CmsService.ngInjectableDef = i0.defineInjectable({ factory: function CmsService_Factory() { return new CmsService(i0.inject(i1.Store), i0.inject(i2.RoutingService)); }, token: CmsService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL2ZhY2FkZS9jbXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM1QyxPQUFPLEVBQUUsYUFBYSxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNyRCxPQUFPLEVBQ0wsVUFBVSxFQUNWLE1BQU0sRUFDTixLQUFLLEVBQ0wsV0FBVyxFQUNYLFNBQVMsRUFDVCxJQUFJLEVBQ0osR0FBRyxHQUNKLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEIsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBTXRFLE9BQU8sS0FBSyxTQUFTLE1BQU0sVUFBVSxDQUFDOzs7O0FBTXRDLE1BQU0sT0FBTyxVQUFVOzs7OztJQU9yQixZQUNZLEtBQTBCLEVBQzFCLGNBQThCO1FBRDlCLFVBQUssR0FBTCxLQUFLLENBQXFCO1FBQzFCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQVJsQyx1QkFBa0IsR0FBRyxLQUFLLENBQUM7UUFFM0IsZUFBVSxHQUVkLEVBQUUsQ0FBQztJQUtKLENBQUM7Ozs7OztJQUtKLElBQUksaUJBQWlCLENBQUMsS0FBYztRQUNsQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO0lBQ2xDLENBQUM7Ozs7O0lBS0QsbUJBQW1CO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDO0lBQ2pDLENBQUM7Ozs7O0lBS0QsY0FBYztRQUNaLE9BQU8sSUFBSSxDQUFDLGNBQWM7YUFDdkIsY0FBYyxFQUFFO2FBQ2hCLElBQUksQ0FDSCxTQUFTLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FDdEIsSUFBSSxDQUFDLEtB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T0FBTyxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFDaEQsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUNoQixVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQzVCLENBQUM7SUFDSixDQUFDOzs7WUFsTEYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBdkJnQixLQUFLO1lBWWIsY0FBYzs7Ozs7Ozs7SUFhckIsd0NBQW1DOzs7OztJQUVuQyxnQ0FFTzs7Ozs7SUFHTCwyQkFBb0M7Ozs7O0lBQ3BDLG9DQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgY2F0Y2hFcnJvcixcbiAgZmlsdGVyLFxuICBwbHVjayxcbiAgc2hhcmVSZXBsYXksXG4gIHN3aXRjaE1hcCxcbiAgdGFrZSxcbiAgdGFwLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnQgfSBmcm9tICcuLi8uLi9tb2RlbC9jbXMubW9kZWwnO1xuaW1wb3J0IHsgUm91dGluZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9yb3V0aW5nL2ZhY2FkZS9yb3V0aW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGFnZUNvbnRleHQgfSBmcm9tICcuLi8uLi9yb3V0aW5nL21vZGVscy9wYWdlLWNvbnRleHQubW9kZWwnO1xuaW1wb3J0IHsgTG9hZGVyU3RhdGUgfSBmcm9tICcuLi8uLi9zdGF0ZSc7XG5pbXBvcnQgeyBDb250ZW50U2xvdERhdGEgfSBmcm9tICcuLi9tb2RlbC9jb250ZW50LXNsb3QtZGF0YS5tb2RlbCc7XG5pbXBvcnQgeyBOb2RlSXRlbSB9IGZyb20gJy4uL21vZGVsL25vZGUtaXRlbS5tb2RlbCc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAnLi4vbW9kZWwvcGFnZS5tb2RlbCc7XG5pbXBvcnQgKiBhcyBmcm9tU3RvcmUgZnJvbSAnLi4vc3RvcmUnO1xuaW1wb3J0IHsgU3RhdGVXaXRoQ21zIH0gZnJvbSAnLi4vc3RvcmUvY21zLXN0YXRlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENtc1NlcnZpY2Uge1xuICBwcml2YXRlIF9sYXVuY2hJblNtYXJ0RWRpdCA9IGZhbHNlO1xuXG4gIHByaXZhdGUgY29tcG9uZW50czoge1xuICAgIFt1aWQ6IHN0cmluZ106IE9ic2VydmFibGU8Q21zQ29tcG9uZW50PjtcbiAgfSA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoQ21zPixcbiAgICBwcm90ZWN0ZWQgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlXG4gICkge31cblxuICAvKipcbiAgICogU2V0IF9sYXVuY2hJblNtYXJ0RWRpdCB2YWx1ZVxuICAgKi9cbiAgc2V0IGxhdW5jaEluU21hcnRFZGl0KHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fbGF1bmNoSW5TbWFydEVkaXQgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZSBhcHAgbGF1bmNoZWQgaW4gc21hcnQgZWRpdFxuICAgKi9cbiAgaXNMYXVuY2hJblNtYXJ0RWRpdCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fbGF1bmNoSW5TbWFydEVkaXQ7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGN1cnJlbnQgQ01TIHBhZ2UgZGF0YVxuICAgKi9cbiAgZ2V0Q3VycmVudFBhZ2UoKTogT2JzZXJ2YWJsZTxQYWdlPiB7XG4gICAgcmV0dXJuIHRoaXMucm91dGluZ1NlcnZpY2VcbiAgICAgIC5nZXRQYWdlQ29udGV4dCgpXG4gICAgICAucGlwZShcbiAgICAgICAgc3dpdGNoTWFwKHBhZ2VDb250ZXh0ID0+XG4gICAgICAgICAgdGhpcy5zdG9yZS5zZWxlY3QoZnJvbVN0b3JlLmdldFBhZ2VEYXRhKHBhZ2VDb250ZXh0KSlcbiAgICAgICAgKVxuICAgICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgQ01TIGNvbXBvbmVudCBkYXRhIGJ5IHVpZFxuICAgKiBAcGFyYW0gdWlkIDogQ01TIGNvbXBvbmV0IHVpZFxuICAgKi9cbiAgZ2V0Q29tcG9uZW50RGF0YTxUIGV4dGVuZHMgQ21zQ29tcG9uZW50Pih1aWQ6IHN0cmluZyk6IE9ic2VydmFibGU8VD4ge1xuICAgIGlmICghdGhpcy5jb21wb25lbnRzW3VpZF0pIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t1aWRdID0gY29tYmluZUxhdGVzdChcbiAgICAgICAgdGhpcy5yb3V0aW5nU2VydmljZS5pc05hdmlnYXRpbmcoKSxcbiAgICAgICAgdGhpcy5zdG9yZS5waXBlKHNlbGVjdChmcm9tU3RvcmUuY29tcG9uZW50U3RhdGVTZWxlY3RvckZhY3RvcnkodWlkKSkpXG4gICAgICApLnBpcGUoXG4gICAgICAgIHRhcCgoW2lzTmF2aWdhdGluZywgY29tcG9uZW50U3RhdGVdKSA9PiB7XG4gICAgICAgICAgY29uc3QgYXR0ZW1wdGVkTG9hZCA9XG4gICAgICAgICAgICBjb21wb25lbnRTdGF0ZS5sb2FkaW5nIHx8XG4gICAgICAgICAgICBjb21wb25lbnRTdGF0ZS5zdWNjZXNzIHx8XG4gICAgICAgICAgICBjb21wb25lbnRTdGF0ZS5lcnJvcjtcbiAgICAgICAgICBpZiAoIWF0dGVtcHRlZExvYWQgJiYgIWlzTmF2aWdhdGluZykge1xuICAgICAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgZnJvbVN0b3JlLkxvYWRDb21wb25lbnQodWlkKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgcGx1Y2soMSksXG4gICAgICAgIGZpbHRlcihjb21wb25lbnRTdGF0ZSA9PiBjb21wb25lbnRTdGF0ZS5zdWNjZXNzKSxcbiAgICAgICAgcGx1Y2soJ3ZhbHVlJyksXG4gICAgICAgIHNoYXJlUmVwbGF5KHsgYnVmZmVyU2l6ZTogMSwgcmVmQ291bnQ6IHRydWUgfSlcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuY29tcG9uZW50c1t1aWRdIGFzIE9ic2VydmFibGU8VD47XG4gIH1cblxuICAvKipcbiAgICogR2l2ZW4gdGhlIHBvc2l0aW9uLCBnZXQgdGhlIGNvbnRlbnQgc2xvdCBkYXRhXG4gICAqIEBwYXJhbSBwb3NpdGlvbiA6IGNvbnRlbnQgc2xvdCBwb3NpdGlvblxuICAgKi9cbiAgZ2V0Q29udGVudFNsb3QocG9zaXRpb246IHN0cmluZyk6IE9ic2VydmFibGU8Q29udGVudFNsb3REYXRhPiB7XG4gICAgcmV0dXJuIHRoaXMucm91dGluZ1NlcnZpY2UuZ2V0UGFnZUNvbnRleHQoKS5waXBlKFxuICAgICAgc3dpdGNoTWFwKHBhZ2VDb250ZXh0ID0+XG4gICAgICAgIHRoaXMuc3RvcmUucGlwZShcbiAgICAgICAgICBzZWxlY3QoZnJvbVN0b3JlLmN1cnJlbnRTbG90U2VsZWN0b3JGYWN0b3J5KHBhZ2VDb250ZXh0LCBwb3NpdGlvbikpLFxuICAgICAgICAgIGZpbHRlcihCb29sZWFuKVxuICAgICAgICApXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHaXZlbiBuYXZpZ2F0aW9uIG5vZGUgdWlkLCBnZXQgaXRlbXMgKHdpdGggaWQgYW5kIHR5cGUpIGluc2lkZSB0aGUgbmF2aWdhdGlvbiBlbnRyaWVzXG4gICAqIEBwYXJhbSBuYXZpZ2F0aW9uTm9kZVVpZCA6IHVpZCBvZiB0aGUgbmF2aWdhdGlvbiBub2RlXG4gICAqL1xuICBnZXROYXZpZ2F0aW9uRW50cnlJdGVtcyhuYXZpZ2F0aW9uTm9kZVVpZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxOb2RlSXRlbT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZnJvbVN0b3JlLml0ZW1zU2VsZWN0b3JGYWN0b3J5KG5hdmlnYXRpb25Ob2RlVWlkKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIExvYWQgbmF2aWdhdGlvbiBpdGVtcyBkYXRhXG4gICAqIEBwYXJhbSByb290VWlkIDogdGhlIHVpZCBvZiB0aGUgcm9vdCBuYXZpZ2F0aW9uIG5vZGVcbiAgICogQHBhcmFtIGl0ZW1MaXN0IDogbGlzdCBvZiBpdGVtcyAod2l0aCBpZCBhbmQgdHlwZSlcbiAgICovXG4gIGxvYWROYXZpZ2F0aW9uSXRlbXMoXG4gICAgcm9vdFVpZDogc3RyaW5nLFxuICAgIGl0ZW1MaXN0OiB7IGlkOiBzdHJpbmc7IHN1cGVyVHlwZTogc3RyaW5nIH1bXVxuICApOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IGZyb21TdG9yZS5Mb2FkTmF2aWdhdGlvbkl0ZW1zKHtcbiAgICAgICAgbm9kZUlkOiByb290VWlkLFxuICAgICAgICBpdGVtczogaXRlbUxpc3QsXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmVmcmVzaCB0aGUgY29udGVudCBvZiB0aGUgbGF0ZXN0IGNtcyBwYWdlXG4gICAqL1xuICByZWZyZXNoTGF0ZXN0UGFnZSgpOiB2b2lkIHtcbiAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlXG4gICAgICAuZ2V0UGFnZUNvbnRleHQoKVxuICAgICAgLnBpcGUodGFrZSgxKSlcbiAgICAgIC5zdWJzY3JpYmUocGFnZUNvbnRleHQgPT5cbiAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgZnJvbVN0b3JlLkxvYWRQYWdlRGF0YShwYWdlQ29udGV4dCkpXG4gICAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZnJlc2ggdGhlIGNtcyBwYWdlIGNvbnRlbnQgYnkgcGFnZSBJZFxuICAgKiBAcGFyYW0gcGFnZUlkXG4gICAqL1xuICByZWZyZXNoUGFnZUJ5SWQocGFnZUlkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBwYWdlQ29udGV4dDogUGFnZUNvbnRleHQgPSB7IGlkOiBwYWdlSWQgfTtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBmcm9tU3RvcmUuTG9hZFBhZ2VEYXRhKHBhZ2VDb250ZXh0KSk7XG4gIH1cblxuICAvKipcbiAgICogUmVmcmVzaCBjbXMgY29tcG9uZW50J3MgY29udGVudFxuICAgKiBAcGFyYW0gdWlkIDogY29tcG9uZW50IHVpZFxuICAgKi9cbiAgcmVmcmVzaENvbXBvbmVudCh1aWQ6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IGZyb21TdG9yZS5Mb2FkQ29tcG9uZW50KHVpZCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdpdmVuIHBhZ2VDb250ZXh0LCByZXR1cm4gdGhlIENNUyBwYWdlIGRhdGFcbiAgICogQHBhcmFtIHBhZ2VDb250ZXh0XG4gICAqL1xuICBnZXRQYWdlU3RhdGUocGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0KTogT2JzZXJ2YWJsZTxQYWdlPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoZnJvbVN0b3JlLmdldFBhZ2VEYXRhKHBhZ2VDb250ZXh0KSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdpdmVuIHBhZ2VDb250ZXh0LCByZXR1cm4gdGhlIENNUyBwYWdlIGRhdGFcbiAgICogQHBhcmFtIHBhZ2VDb250ZXh0XG4gICAqL1xuICBnZXRQYWdlQ29tcG9uZW50VHlwZXMocGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0KTogT2JzZXJ2YWJsZTxzdHJpbmdbXT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZnJvbVN0b3JlLmdldFBhZ2VDb21wb25lbnRUeXBlcyhwYWdlQ29udGV4dCkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHaXZlbiBwYWdlQ29udGV4dCwgcmV0dXJuIHdoZXRoZXIgdGhlIENNUyBwYWdlIGRhdGEgZXhpc3RzIG9yIG5vdFxuICAgKiBAcGFyYW0gcGFnZUNvbnRleHRcbiAgICovXG4gIGhhc1BhZ2UocGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0LCBmb3JjZVJlbG9hZCA9IGZhbHNlKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChmcm9tU3RvcmUuZ2V0SW5kZXhFbnRpdHkocGFnZUNvbnRleHQpKSxcbiAgICAgIHRhcCgoZW50aXR5OiBMb2FkZXJTdGF0ZTxzdHJpbmc+KSA9PiB7XG4gICAgICAgIGNvbnN0IGF0dGVtcHRlZExvYWQgPSBlbnRpdHkubG9hZGluZyB8fCBlbnRpdHkuc3VjY2VzcyB8fCBlbnRpdHkuZXJyb3I7XG4gICAgICAgIGNvbnN0IHNob3VsZFJlbG9hZCA9IGZvcmNlUmVsb2FkICYmICFlbnRpdHkubG9hZGluZztcbiAgICAgICAgaWYgKCFhdHRlbXB0ZWRMb2FkIHx8IHNob3VsZFJlbG9hZCkge1xuICAgICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IGZyb21TdG9yZS5Mb2FkUGFnZURhdGEocGFnZUNvbnRleHQpKTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBmaWx0ZXIoZW50aXR5ID0+IGVudGl0eS5zdWNjZXNzIHx8IGVudGl0eS5lcnJvciksXG4gICAgICBwbHVjaygnc3VjY2VzcycpLFxuICAgICAgY2F0Y2hFcnJvcigoKSA9PiBvZihmYWxzZSkpXG4gICAgKTtcbiAgfVxufVxuIl19
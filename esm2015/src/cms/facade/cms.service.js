/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, filter, pluck, shareReplay, switchMap, take, tap, withLatestFrom, } from 'rxjs/operators';
import * as fromStore from '../store';
import { RoutingService } from '../../routing/facade/routing.service';
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
            this.components[uid] = this.routingService.isNavigating().pipe(withLatestFrom(this.store.pipe(select(fromStore.componentStateSelectorFactory(uid)))), tap(([isNavigating, componentState]) => {
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
        return this.routingService
            .getPageContext()
            .pipe(switchMap(pageContext => this.store.pipe(select(fromStore.currentSlotSelectorFactory(pageContext, position)))));
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
     * @private
     */
    CmsService.prototype.store;
    /**
     * @type {?}
     * @private
     */
    CmsService.prototype.routingService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL2ZhY2FkZS9jbXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUU1QyxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFDTCxVQUFVLEVBQ1YsTUFBTSxFQUNOLEtBQUssRUFDTCxXQUFXLEVBQ1gsU0FBUyxFQUNULElBQUksRUFDSixHQUFHLEVBQ0gsY0FBYyxHQUNmLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEIsT0FBTyxLQUFLLFNBQVMsTUFBTSxVQUFVLENBQUM7QUFPdEMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNDQUFzQyxDQUFDOzs7O0FBTXRFLE1BQU0sT0FBTyxVQUFVOzs7OztJQU9yQixZQUNVLEtBQTBCLEVBQzFCLGNBQThCO1FBRDlCLFVBQUssR0FBTCxLQUFLLENBQXFCO1FBQzFCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQVJoQyx1QkFBa0IsR0FBRyxLQUFLLENBQUM7UUFFM0IsZUFBVSxHQUVkLEVBQUUsQ0FBQztJQUtKLENBQUM7Ozs7OztJQUtKLElBQUksaUJBQWlCLENBQUMsS0FBYztRQUNsQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO0lBQ2xDLENBQUM7Ozs7O0lBS0QsbUJBQW1CO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDO0lBQ2pDLENBQUM7Ozs7O0lBS0QsY0FBYztRQUNaLE9BQU8sSUFBSSxDQUFDLGNBQWM7YUFDdkIsY0FBYyxFQUFFO2FBQ2hCLElBQUksQ0FDSCxTQUFTLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FDdEIsSUFBSSxDQUFDLEtB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Q0FBQyxFQUNoRCxLQUFLLENBQUMsU0FBUyxDQUFDLEVBQ2hCLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FDNUIsQ0FBQztJQUNKLENBQUM7OztZQW5MRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUExQmdCLEtBQUs7WUFxQmIsY0FBYzs7Ozs7Ozs7SUFPckIsd0NBQW1DOzs7OztJQUVuQyxnQ0FFTzs7Ozs7SUFHTCwyQkFBa0M7Ozs7O0lBQ2xDLG9DQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgc2VsZWN0LCBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIGNhdGNoRXJyb3IsXG4gIGZpbHRlcixcbiAgcGx1Y2ssXG4gIHNoYXJlUmVwbGF5LFxuICBzd2l0Y2hNYXAsXG4gIHRha2UsXG4gIHRhcCxcbiAgd2l0aExhdGVzdEZyb20sXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0ICogYXMgZnJvbVN0b3JlIGZyb20gJy4uL3N0b3JlJztcbmltcG9ydCB7IExvYWRlclN0YXRlIH0gZnJvbSAnLi4vLi4vc3RhdGUnO1xuaW1wb3J0IHsgQ29udGVudFNsb3REYXRhIH0gZnJvbSAnLi4vbW9kZWwvY29udGVudC1zbG90LWRhdGEubW9kZWwnO1xuaW1wb3J0IHsgTm9kZUl0ZW0gfSBmcm9tICcuLi9tb2RlbC9ub2RlLWl0ZW0ubW9kZWwnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJy4uL21vZGVsL3BhZ2UubW9kZWwnO1xuaW1wb3J0IHsgU3RhdGVXaXRoQ21zIH0gZnJvbSAnLi4vc3RvcmUvY21zLXN0YXRlJztcbmltcG9ydCB7IENtc0NvbXBvbmVudCB9IGZyb20gJy4uLy4uL29jYy9vY2MtbW9kZWxzL2Ntcy1jb21wb25lbnQubW9kZWxzJztcbmltcG9ydCB7IFJvdXRpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vcm91dGluZy9mYWNhZGUvcm91dGluZy5zZXJ2aWNlJztcbmltcG9ydCB7IFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vLi4vcm91dGluZy9tb2RlbHMvcGFnZS1jb250ZXh0Lm1vZGVsJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENtc1NlcnZpY2Uge1xuICBwcml2YXRlIF9sYXVuY2hJblNtYXJ0RWRpdCA9IGZhbHNlO1xuXG4gIHByaXZhdGUgY29tcG9uZW50czoge1xuICAgIFt1aWQ6IHN0cmluZ106IE9ic2VydmFibGU8Q21zQ29tcG9uZW50PjtcbiAgfSA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aENtcz4sXG4gICAgcHJpdmF0ZSByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2VcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBTZXQgX2xhdW5jaEluU21hcnRFZGl0IHZhbHVlXG4gICAqL1xuICBzZXQgbGF1bmNoSW5TbWFydEVkaXQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9sYXVuY2hJblNtYXJ0RWRpdCA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhlIGFwcCBsYXVuY2hlZCBpbiBzbWFydCBlZGl0XG4gICAqL1xuICBpc0xhdW5jaEluU21hcnRFZGl0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9sYXVuY2hJblNtYXJ0RWRpdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY3VycmVudCBDTVMgcGFnZSBkYXRhXG4gICAqL1xuICBnZXRDdXJyZW50UGFnZSgpOiBPYnNlcnZhYmxlPFBhZ2U+IHtcbiAgICByZXR1cm4gdGhpcy5yb3V0aW5nU2VydmljZVxuICAgICAgLmdldFBhZ2VDb250ZXh0KClcbiAgICAgIC5waXBlKFxuICAgICAgICBzd2l0Y2hNYXAocGFnZUNvbnRleHQgPT5cbiAgICAgICAgICB0aGlzLnN0b3JlLnNlbGVjdChmcm9tU3RvcmUuZ2V0UGFnZURhdGEocGFnZUNvbnRleHQpKVxuICAgICAgICApXG4gICAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBDTVMgY29tcG9uZW50IGRhdGEgYnkgdWlkXG4gICAqIEBwYXJhbSB1aWQgOiBDTVMgY29tcG9uZXQgdWlkXG4gICAqL1xuICBnZXRDb21wb25lbnREYXRhPFQgZXh0ZW5kcyBDbXNDb21wb25lbnQ+KHVpZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxUPiB7XG4gICAgaWYgKCF0aGlzLmNvbXBvbmVudHNbdWlkXSkge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3VpZF0gPSB0aGlzLnJvdXRpbmdTZXJ2aWNlLmlzTmF2aWdhdGluZygpLnBpcGUoXG4gICAgICAgIHdpdGhMYXRlc3RGcm9tKFxuICAgICAgICAgIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoZnJvbVN0b3JlLmNvbXBvbmVudFN0YXRlU2VsZWN0b3JGYWN0b3J5KHVpZCkpKVxuICAgICAgICApLFxuICAgICAgICB0YXAoKFtpc05hdmlnYXRpbmcsIGNvbXBvbmVudFN0YXRlXTogW2Jvb2xlYW4sIExvYWRlclN0YXRlPGFueT5dKSA9PiB7XG4gICAgICAgICAgY29uc3QgYXR0ZW1wdGVkTG9hZCA9XG4gICAgICAgICAgICBjb21wb25lbnRTdGF0ZS5sb2FkaW5nIHx8XG4gICAgICAgICAgICBjb21wb25lbnRTdGF0ZS5zdWNjZXNzIHx8XG4gICAgICAgICAgICBjb21wb25lbnRTdGF0ZS5lcnJvcjtcbiAgICAgICAgICBpZiAoIWF0dGVtcHRlZExvYWQgJiYgIWlzTmF2aWdhdGluZykge1xuICAgICAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgZnJvbVN0b3JlLkxvYWRDb21wb25lbnQodWlkKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgcGx1Y2soMSksXG4gICAgICAgIGZpbHRlcihjb21wb25lbnRTdGF0ZSA9PiBjb21wb25lbnRTdGF0ZS5zdWNjZXNzKSxcbiAgICAgICAgcGx1Y2soJ3ZhbHVlJyksXG4gICAgICAgIHNoYXJlUmVwbGF5KHsgYnVmZmVyU2l6ZTogMSwgcmVmQ291bnQ6IHRydWUgfSlcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuY29tcG9uZW50c1t1aWRdIGFzIE9ic2VydmFibGU8VD47XG4gIH1cblxuICAvKipcbiAgICogR2l2ZW4gdGhlIHBvc2l0aW9uLCBnZXQgdGhlIGNvbnRlbnQgc2xvdCBkYXRhXG4gICAqIEBwYXJhbSBwb3NpdGlvbiA6IGNvbnRlbnQgc2xvdCBwb3NpdGlvblxuICAgKi9cbiAgZ2V0Q29udGVudFNsb3QocG9zaXRpb246IHN0cmluZyk6IE9ic2VydmFibGU8Q29udGVudFNsb3REYXRhPiB7XG4gICAgcmV0dXJuIHRoaXMucm91dGluZ1NlcnZpY2VcbiAgICAgIC5nZXRQYWdlQ29udGV4dCgpXG4gICAgICAucGlwZShcbiAgICAgICAgc3dpdGNoTWFwKHBhZ2VDb250ZXh0ID0+XG4gICAgICAgICAgdGhpcy5zdG9yZS5waXBlKFxuICAgICAgICAgICAgc2VsZWN0KGZyb21TdG9yZS5jdXJyZW50U2xvdFNlbGVjdG9yRmFjdG9yeShwYWdlQ29udGV4dCwgcG9zaXRpb24pKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHaXZlbiBuYXZpZ2F0aW9uIG5vZGUgdWlkLCBnZXQgaXRlbXMgKHdpdGggaWQgYW5kIHR5cGUpIGluc2lkZSB0aGUgbmF2aWdhdGlvbiBlbnRyaWVzXG4gICAqIEBwYXJhbSBuYXZpZ2F0aW9uTm9kZVVpZCA6IHVpZCBvZiB0aGUgbmF2aWdhdGlvbiBub2RlXG4gICAqL1xuICBnZXROYXZpZ2F0aW9uRW50cnlJdGVtcyhuYXZpZ2F0aW9uTm9kZVVpZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxOb2RlSXRlbT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZnJvbVN0b3JlLml0ZW1zU2VsZWN0b3JGYWN0b3J5KG5hdmlnYXRpb25Ob2RlVWlkKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIExvYWQgbmF2aWdhdGlvbiBpdGVtcyBkYXRhXG4gICAqIEBwYXJhbSByb290VWlkIDogdGhlIHVpZCBvZiB0aGUgcm9vdCBuYXZpZ2F0aW9uIG5vZGVcbiAgICogQHBhcmFtIGl0ZW1MaXN0IDogbGlzdCBvZiBpdGVtcyAod2l0aCBpZCBhbmQgdHlwZSlcbiAgICovXG4gIGxvYWROYXZpZ2F0aW9uSXRlbXMoXG4gICAgcm9vdFVpZDogc3RyaW5nLFxuICAgIGl0ZW1MaXN0OiB7IGlkOiBzdHJpbmc7IHN1cGVyVHlwZTogc3RyaW5nIH1bXVxuICApOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IGZyb21TdG9yZS5Mb2FkTmF2aWdhdGlvbkl0ZW1zKHtcbiAgICAgICAgbm9kZUlkOiByb290VWlkLFxuICAgICAgICBpdGVtczogaXRlbUxpc3QsXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmVmcmVzaCB0aGUgY29udGVudCBvZiB0aGUgbGF0ZXN0IGNtcyBwYWdlXG4gICAqL1xuICByZWZyZXNoTGF0ZXN0UGFnZSgpOiB2b2lkIHtcbiAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlXG4gICAgICAuZ2V0UGFnZUNvbnRleHQoKVxuICAgICAgLnBpcGUodGFrZSgxKSlcbiAgICAgIC5zdWJzY3JpYmUocGFnZUNvbnRleHQgPT5cbiAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgZnJvbVN0b3JlLkxvYWRQYWdlRGF0YShwYWdlQ29udGV4dCkpXG4gICAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZnJlc2ggdGhlIGNtcyBwYWdlIGNvbnRlbnQgYnkgcGFnZSBJZFxuICAgKiBAcGFyYW0gcGFnZUlkXG4gICAqL1xuICByZWZyZXNoUGFnZUJ5SWQocGFnZUlkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBwYWdlQ29udGV4dDogUGFnZUNvbnRleHQgPSB7IGlkOiBwYWdlSWQgfTtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBmcm9tU3RvcmUuTG9hZFBhZ2VEYXRhKHBhZ2VDb250ZXh0KSk7XG4gIH1cblxuICAvKipcbiAgICogUmVmcmVzaCBjbXMgY29tcG9uZW50J3MgY29udGVudFxuICAgKiBAcGFyYW0gdWlkIDogY29tcG9uZW50IHVpZFxuICAgKi9cbiAgcmVmcmVzaENvbXBvbmVudCh1aWQ6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IGZyb21TdG9yZS5Mb2FkQ29tcG9uZW50KHVpZCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdpdmVuIHBhZ2VDb250ZXh0LCByZXR1cm4gdGhlIENNUyBwYWdlIGRhdGFcbiAgICogQHBhcmFtIHBhZ2VDb250ZXh0XG4gICAqL1xuICBnZXRQYWdlU3RhdGUocGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0KTogT2JzZXJ2YWJsZTxQYWdlPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoZnJvbVN0b3JlLmdldFBhZ2VEYXRhKHBhZ2VDb250ZXh0KSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdpdmVuIHBhZ2VDb250ZXh0LCByZXR1cm4gdGhlIENNUyBwYWdlIGRhdGFcbiAgICogQHBhcmFtIHBhZ2VDb250ZXh0XG4gICAqL1xuICBnZXRQYWdlQ29tcG9uZW50VHlwZXMocGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0KTogT2JzZXJ2YWJsZTxzdHJpbmdbXT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZnJvbVN0b3JlLmdldFBhZ2VDb21wb25lbnRUeXBlcyhwYWdlQ29udGV4dCkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHaXZlbiBwYWdlQ29udGV4dCwgcmV0dXJuIHdoZXRoZXIgdGhlIENNUyBwYWdlIGRhdGEgZXhpc3RzIG9yIG5vdFxuICAgKiBAcGFyYW0gcGFnZUNvbnRleHRcbiAgICovXG4gIGhhc1BhZ2UocGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0LCBmb3JjZVJlbG9hZCA9IGZhbHNlKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChmcm9tU3RvcmUuZ2V0SW5kZXhFbnRpdHkocGFnZUNvbnRleHQpKSxcbiAgICAgIHRhcCgoZW50aXR5OiBMb2FkZXJTdGF0ZTxzdHJpbmc+KSA9PiB7XG4gICAgICAgIGNvbnN0IGF0dGVtcHRlZExvYWQgPSBlbnRpdHkubG9hZGluZyB8fCBlbnRpdHkuc3VjY2VzcyB8fCBlbnRpdHkuZXJyb3I7XG4gICAgICAgIGNvbnN0IHNob3VsZFJlbG9hZCA9IGZvcmNlUmVsb2FkICYmICFlbnRpdHkubG9hZGluZztcbiAgICAgICAgaWYgKCFhdHRlbXB0ZWRMb2FkIHx8IHNob3VsZFJlbG9hZCkge1xuICAgICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IGZyb21TdG9yZS5Mb2FkUGFnZURhdGEocGFnZUNvbnRleHQpKTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBmaWx0ZXIoZW50aXR5ID0+IGVudGl0eS5zdWNjZXNzIHx8IGVudGl0eS5lcnJvciksXG4gICAgICBwbHVjaygnc3VjY2VzcycpLFxuICAgICAgY2F0Y2hFcnJvcigoKSA9PiBvZihmYWxzZSkpXG4gICAgKTtcbiAgfVxufVxuIl19
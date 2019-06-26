/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
            .pipe(switchMap((/**
         * @param {?} pageContext
         * @return {?}
         */
        pageContext => this.store.select(CmsSelectors.getPageData(pageContext)))));
    }
    /**
     * Get CMS component data by uid
     * @template T
     * @param {?} uid : CMS componet uid
     * @return {?}
     */
    getComponentData(uid) {
        if (!this.components[uid]) {
            this.components[uid] = combineLatest([
                this.routingService.isNavigating(),
                this.store.pipe(select(CmsSelectors.componentStateSelectorFactory(uid))),
            ]).pipe(tap((/**
             * @param {?} __0
             * @return {?}
             */
            ([isNavigating, componentState]) => {
                // componentState is undefined when the whole components entities are empty.
                // In this case, we don't load component one by one, but extract component data from cms page
                if (componentState !== undefined) {
                    /** @type {?} */
                    const attemptedLoad = componentState.loading ||
                        componentState.success ||
                        componentState.error;
                    if (!attemptedLoad && !isNavigating) {
                        this.store.dispatch(new CmsActions.LoadCmsComponent(uid));
                    }
                }
            })), pluck(1), filter((/**
             * @param {?} componentState
             * @return {?}
             */
            componentState => componentState && componentState.success)), pluck('value'), shareReplay({ bufferSize: 1, refCount: true }));
        }
        return (/** @type {?} */ (this.components[uid]));
    }
    /**
     * Given the position, get the content slot data
     * @param {?} position : content slot position
     * @return {?}
     */
    getContentSlot(position) {
        return this.routingService.getPageContext().pipe(switchMap((/**
         * @param {?} pageContext
         * @return {?}
         */
        pageContext => this.store.pipe(select(CmsSelectors.getCurrentSlotSelectorFactory(pageContext, position)), filter(Boolean)))));
    }
    /**
     * Given navigation node uid, get items (with id and type) inside the navigation entries
     * @param {?} navigationNodeUid : uid of the navigation node
     * @return {?}
     */
    getNavigationEntryItems(navigationNodeUid) {
        return this.store.pipe(select(CmsSelectors.getNavigationEntryItems(navigationNodeUid)));
    }
    /**
     * Load navigation items data
     * @param {?} rootUid : the uid of the root navigation node
     * @param {?} itemList : list of items (with id and type)
     * @return {?}
     */
    loadNavigationItems(rootUid, itemList) {
        this.store.dispatch(new CmsActions.LoadCmsNavigationItems({
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
            .subscribe((/**
         * @param {?} pageContext
         * @return {?}
         */
        pageContext => this.store.dispatch(new CmsActions.LoadCmsPageData(pageContext))));
    }
    /**
     * Refresh the cms page content by page Id
     * @param {?} pageId
     * @return {?}
     */
    refreshPageById(pageId) {
        /** @type {?} */
        const pageContext = { id: pageId };
        this.store.dispatch(new CmsActions.LoadCmsPageData(pageContext));
    }
    /**
     * Refresh cms component's content
     * @param {?} uid : component uid
     * @return {?}
     */
    refreshComponent(uid) {
        this.store.dispatch(new CmsActions.LoadCmsComponent(uid));
    }
    /**
     * Given pageContext, return the CMS page data
     * @param {?} pageContext
     * @return {?}
     */
    getPageState(pageContext) {
        return this.store.pipe(select(CmsSelectors.getPageData(pageContext)));
    }
    /**
     * Given pageContext, return the CMS page data
     * @param {?} pageContext
     * @return {?}
     */
    getPageComponentTypes(pageContext) {
        return this.store.pipe(select(CmsSelectors.getPageComponentTypes(pageContext)));
    }
    /**
     * Given pageContext, return whether the CMS page data exists or not
     * @param {?} pageContext
     * @param {?=} forceReload
     * @return {?}
     */
    hasPage(pageContext, forceReload = false) {
        return this.store.pipe(select(CmsSelectors.getPageStateIndexLoaderState(pageContext)), tap((/**
         * @param {?} entity
         * @return {?}
         */
        (entity) => {
            /** @type {?} */
            const attemptedLoad = entity.loading || entity.success || entity.error;
            /** @type {?} */
            const shouldReload = forceReload && !entity.loading;
            if (!attemptedLoad || shouldReload) {
                this.store.dispatch(new CmsActions.LoadCmsPageData(pageContext));
                forceReload = false;
            }
        })), filter((/**
         * @param {?} entity
         * @return {?}
         */
        entity => {
            if (!entity.hasOwnProperty('value')) {
                // if we have incomplete state from srr failed load transfer state,
                // we should wait for reload and actual value
                return false;
            }
            return entity.success || (entity.error && !entity.loading);
        })), pluck('success'), catchError((/**
         * @return {?}
         */
        () => of(false))));
    }
    /**
     * @param {?} pageContext
     * @return {?}
     */
    getPageIndex(pageContext) {
        return this.store.pipe(select(CmsSelectors.getPageStateIndexValue(pageContext)));
    }
    /**
     * @param {?} pageContext
     * @param {?} value
     * @return {?}
     */
    setPageFailIndex(pageContext, value) {
        this.store.dispatch(new CmsActions.CmsSetPageFailIndex(pageContext, value));
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
/** @nocollapse */ CmsService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CmsService_Factory() { return new CmsService(i0.ɵɵinject(i1.Store), i0.ɵɵinject(i2.RoutingService)); }, token: CmsService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL2ZhY2FkZS9jbXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM1QyxPQUFPLEVBQUUsYUFBYSxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNyRCxPQUFPLEVBQ0wsVUFBVSxFQUNWLE1BQU0sRUFDTixLQUFLLEVBQ0wsV0FBVyxFQUNYLFNBQVMsRUFDVCxJQUFJLEVBQ0osR0FBRyxHQUNKLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEIsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBTXRFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUVwRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7QUFLeEQsTUFBTSxPQUFPLFVBQVU7Ozs7O0lBT3JCLFlBQ1ksS0FBMEIsRUFDMUIsY0FBOEI7UUFEOUIsVUFBSyxHQUFMLEtBQUssQ0FBcUI7UUFDMUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBUmxDLHVCQUFrQixHQUFHLEtBQUssQ0FBQztRQUUzQixlQUFVLEdBRWQsRUFBRSxDQUFDO0lBS0osQ0FBQzs7Ozs7O0lBS0osSUFBSSxpQkFBaUIsQ0FBQyxLQUFjO1FBQ2xDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUM7SUFDbEMsQ0FBQzs7Ozs7SUFLRCxtQkFBbUI7UUFDakIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUM7SUFDakMsQ0FBQzs7Ozs7SUFLRCxjQUFjO1FBQ1osT0FBTyxJQUFJLENBQUMsY0FBYzthQUN2QixjQUFjLEVBQUU7YUFDaEIsSUFB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d0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIGNhdGNoRXJyb3IsXG4gIGZpbHRlcixcbiAgcGx1Y2ssXG4gIHNoYXJlUmVwbGF5LFxuICBzd2l0Y2hNYXAsXG4gIHRha2UsXG4gIHRhcCxcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vbW9kZWwvY21zLm1vZGVsJztcbmltcG9ydCB7IFJvdXRpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vcm91dGluZy9mYWNhZGUvcm91dGluZy5zZXJ2aWNlJztcbmltcG9ydCB7IFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vLi4vcm91dGluZy9tb2RlbHMvcGFnZS1jb250ZXh0Lm1vZGVsJztcbmltcG9ydCB7IExvYWRlclN0YXRlIH0gZnJvbSAnLi4vLi4vc3RhdGUvdXRpbHMvbG9hZGVyL2xvYWRlci1zdGF0ZSc7XG5pbXBvcnQgeyBDb250ZW50U2xvdERhdGEgfSBmcm9tICcuLi9tb2RlbC9jb250ZW50LXNsb3QtZGF0YS5tb2RlbCc7XG5pbXBvcnQgeyBOb2RlSXRlbSB9IGZyb20gJy4uL21vZGVsL25vZGUtaXRlbS5tb2RlbCc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAnLi4vbW9kZWwvcGFnZS5tb2RlbCc7XG5pbXBvcnQgeyBDbXNBY3Rpb25zIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhDbXMgfSBmcm9tICcuLi9zdG9yZS9jbXMtc3RhdGUnO1xuaW1wb3J0IHsgQ21zU2VsZWN0b3JzIH0gZnJvbSAnLi4vc3RvcmUvc2VsZWN0b3JzL2luZGV4JztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENtc1NlcnZpY2Uge1xuICBwcml2YXRlIF9sYXVuY2hJblNtYXJ0RWRpdCA9IGZhbHNlO1xuXG4gIHByaXZhdGUgY29tcG9uZW50czoge1xuICAgIFt1aWQ6IHN0cmluZ106IE9ic2VydmFibGU8Q21zQ29tcG9uZW50PjtcbiAgfSA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoQ21zPixcbiAgICBwcm90ZWN0ZWQgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlXG4gICkge31cblxuICAvKipcbiAgICogU2V0IF9sYXVuY2hJblNtYXJ0RWRpdCB2YWx1ZVxuICAgKi9cbiAgc2V0IGxhdW5jaEluU21hcnRFZGl0KHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fbGF1bmNoSW5TbWFydEVkaXQgPSB2YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZSBhcHAgbGF1bmNoZWQgaW4gc21hcnQgZWRpdFxuICAgKi9cbiAgaXNMYXVuY2hJblNtYXJ0RWRpdCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fbGF1bmNoSW5TbWFydEVkaXQ7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGN1cnJlbnQgQ01TIHBhZ2UgZGF0YVxuICAgKi9cbiAgZ2V0Q3VycmVudFBhZ2UoKTogT2JzZXJ2YWJsZTxQYWdlPiB7XG4gICAgcmV0dXJuIHRoaXMucm91dGluZ1NlcnZpY2VcbiAgICAgIC5nZXRQYWdlQ29udGV4dCgpXG4gICAgICAucGlwZShcbiAgICAgICAgc3dpdGNoTWFwKHBhZ2VDb250ZXh0ID0+XG4gICAgICAgICAgdGhpcy5zdG9yZS5zZWxlY3QoQ21zU2VsZWN0b3JzLmdldFBhZ2VEYXRhKHBhZ2VDb250ZXh0KSlcbiAgICAgICAgKVxuICAgICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgQ01TIGNvbXBvbmVudCBkYXRhIGJ5IHVpZFxuICAgKiBAcGFyYW0gdWlkIDogQ01TIGNvbXBvbmV0IHVpZFxuICAgKi9cbiAgZ2V0Q29tcG9uZW50RGF0YTxUIGV4dGVuZHMgQ21zQ29tcG9uZW50Pih1aWQ6IHN0cmluZyk6IE9ic2VydmFibGU8VD4ge1xuICAgIGlmICghdGhpcy5jb21wb25lbnRzW3VpZF0pIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t1aWRdID0gY29tYmluZUxhdGVzdChbXG4gICAgICAgIHRoaXMucm91dGluZ1NlcnZpY2UuaXNOYXZpZ2F0aW5nKCksXG4gICAgICAgIHRoaXMuc3RvcmUucGlwZShcbiAgICAgICAgICBzZWxlY3QoQ21zU2VsZWN0b3JzLmNvbXBvbmVudFN0YXRlU2VsZWN0b3JGYWN0b3J5KHVpZCkpXG4gICAgICAgICksXG4gICAgICBdKS5waXBlKFxuICAgICAgICB0YXAoKFtpc05hdmlnYXRpbmcsIGNvbXBvbmVudFN0YXRlXSkgPT4ge1xuICAgICAgICAgIC8vIGNvbXBvbmVudFN0YXRlIGlzIHVuZGVmaW5lZCB3aGVuIHRoZSB3aG9sZSBjb21wb25lbnRzIGVudGl0aWVzIGFyZSBlbXB0eS5cbiAgICAgICAgICAvLyBJbiB0aGlzIGNhc2UsIHdlIGRvbid0IGxvYWQgY29tcG9uZW50IG9uZSBieSBvbmUsIGJ1dCBleHRyYWN0IGNvbXBvbmVudCBkYXRhIGZyb20gY21zIHBhZ2VcbiAgICAgICAgICBpZiAoY29tcG9uZW50U3RhdGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29uc3QgYXR0ZW1wdGVkTG9hZCA9XG4gICAgICAgICAgICAgIGNvbXBvbmVudFN0YXRlLmxvYWRpbmcgfHxcbiAgICAgICAgICAgICAgY29tcG9uZW50U3RhdGUuc3VjY2VzcyB8fFxuICAgICAgICAgICAgICBjb21wb25lbnRTdGF0ZS5lcnJvcjtcbiAgICAgICAgICAgIGlmICghYXR0ZW1wdGVkTG9hZCAmJiAhaXNOYXZpZ2F0aW5nKSB7XG4gICAgICAgICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IENtc0FjdGlvbnMuTG9hZENtc0NvbXBvbmVudCh1aWQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBwbHVjaygxKSxcbiAgICAgICAgZmlsdGVyKGNvbXBvbmVudFN0YXRlID0+IGNvbXBvbmVudFN0YXRlICYmIGNvbXBvbmVudFN0YXRlLnN1Y2Nlc3MpLFxuICAgICAgICBwbHVjaygndmFsdWUnKSxcbiAgICAgICAgc2hhcmVSZXBsYXkoeyBidWZmZXJTaXplOiAxLCByZWZDb3VudDogdHJ1ZSB9KVxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5jb21wb25lbnRzW3VpZF0gYXMgT2JzZXJ2YWJsZTxUPjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHaXZlbiB0aGUgcG9zaXRpb24sIGdldCB0aGUgY29udGVudCBzbG90IGRhdGFcbiAgICogQHBhcmFtIHBvc2l0aW9uIDogY29udGVudCBzbG90IHBvc2l0aW9uXG4gICAqL1xuICBnZXRDb250ZW50U2xvdChwb3NpdGlvbjogc3RyaW5nKTogT2JzZXJ2YWJsZTxDb250ZW50U2xvdERhdGE+IHtcbiAgICByZXR1cm4gdGhpcy5yb3V0aW5nU2VydmljZS5nZXRQYWdlQ29udGV4dCgpLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAocGFnZUNvbnRleHQgPT5cbiAgICAgICAgdGhpcy5zdG9yZS5waXBlKFxuICAgICAgICAgIHNlbGVjdChcbiAgICAgICAgICAgIENtc1NlbGVjdG9ycy5nZXRDdXJyZW50U2xvdFNlbGVjdG9yRmFjdG9yeShwYWdlQ29udGV4dCwgcG9zaXRpb24pXG4gICAgICAgICAgKSxcbiAgICAgICAgICBmaWx0ZXIoQm9vbGVhbilcbiAgICAgICAgKVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogR2l2ZW4gbmF2aWdhdGlvbiBub2RlIHVpZCwgZ2V0IGl0ZW1zICh3aXRoIGlkIGFuZCB0eXBlKSBpbnNpZGUgdGhlIG5hdmlnYXRpb24gZW50cmllc1xuICAgKiBAcGFyYW0gbmF2aWdhdGlvbk5vZGVVaWQgOiB1aWQgb2YgdGhlIG5hdmlnYXRpb24gbm9kZVxuICAgKi9cbiAgZ2V0TmF2aWdhdGlvbkVudHJ5SXRlbXMobmF2aWdhdGlvbk5vZGVVaWQ6IHN0cmluZyk6IE9ic2VydmFibGU8Tm9kZUl0ZW0+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KENtc1NlbGVjdG9ycy5nZXROYXZpZ2F0aW9uRW50cnlJdGVtcyhuYXZpZ2F0aW9uTm9kZVVpZCkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2FkIG5hdmlnYXRpb24gaXRlbXMgZGF0YVxuICAgKiBAcGFyYW0gcm9vdFVpZCA6IHRoZSB1aWQgb2YgdGhlIHJvb3QgbmF2aWdhdGlvbiBub2RlXG4gICAqIEBwYXJhbSBpdGVtTGlzdCA6IGxpc3Qgb2YgaXRlbXMgKHdpdGggaWQgYW5kIHR5cGUpXG4gICAqL1xuICBsb2FkTmF2aWdhdGlvbkl0ZW1zKFxuICAgIHJvb3RVaWQ6IHN0cmluZyxcbiAgICBpdGVtTGlzdDogeyBpZDogc3RyaW5nOyBzdXBlclR5cGU6IHN0cmluZyB9W11cbiAgKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBDbXNBY3Rpb25zLkxvYWRDbXNOYXZpZ2F0aW9uSXRlbXMoe1xuICAgICAgICBub2RlSWQ6IHJvb3RVaWQsXG4gICAgICAgIGl0ZW1zOiBpdGVtTGlzdCxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWZyZXNoIHRoZSBjb250ZW50IG9mIHRoZSBsYXRlc3QgY21zIHBhZ2VcbiAgICovXG4gIHJlZnJlc2hMYXRlc3RQYWdlKCk6IHZvaWQge1xuICAgIHRoaXMucm91dGluZ1NlcnZpY2VcbiAgICAgIC5nZXRQYWdlQ29udGV4dCgpXG4gICAgICAucGlwZSh0YWtlKDEpKVxuICAgICAgLnN1YnNjcmliZShwYWdlQ29udGV4dCA9PlxuICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDbXNBY3Rpb25zLkxvYWRDbXNQYWdlRGF0YShwYWdlQ29udGV4dCkpXG4gICAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZnJlc2ggdGhlIGNtcyBwYWdlIGNvbnRlbnQgYnkgcGFnZSBJZFxuICAgKiBAcGFyYW0gcGFnZUlkXG4gICAqL1xuICByZWZyZXNoUGFnZUJ5SWQocGFnZUlkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBwYWdlQ29udGV4dDogUGFnZUNvbnRleHQgPSB7IGlkOiBwYWdlSWQgfTtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDbXNBY3Rpb25zLkxvYWRDbXNQYWdlRGF0YShwYWdlQ29udGV4dCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZnJlc2ggY21zIGNvbXBvbmVudCdzIGNvbnRlbnRcbiAgICogQHBhcmFtIHVpZCA6IGNvbXBvbmVudCB1aWRcbiAgICovXG4gIHJlZnJlc2hDb21wb25lbnQodWlkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDbXNBY3Rpb25zLkxvYWRDbXNDb21wb25lbnQodWlkKSk7XG4gIH1cblxuICAvKipcbiAgICogR2l2ZW4gcGFnZUNvbnRleHQsIHJldHVybiB0aGUgQ01TIHBhZ2UgZGF0YVxuICAgKiBAcGFyYW0gcGFnZUNvbnRleHRcbiAgICovXG4gIGdldFBhZ2VTdGF0ZShwYWdlQ29udGV4dDogUGFnZUNvbnRleHQpOiBPYnNlcnZhYmxlPFBhZ2U+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChDbXNTZWxlY3RvcnMuZ2V0UGFnZURhdGEocGFnZUNvbnRleHQpKSk7XG4gIH1cblxuICAvKipcbiAgICogR2l2ZW4gcGFnZUNvbnRleHQsIHJldHVybiB0aGUgQ01TIHBhZ2UgZGF0YVxuICAgKiBAcGFyYW0gcGFnZUNvbnRleHRcbiAgICovXG4gIGdldFBhZ2VDb21wb25lbnRUeXBlcyhwYWdlQ29udGV4dDogUGFnZUNvbnRleHQpOiBPYnNlcnZhYmxlPHN0cmluZ1tdPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChDbXNTZWxlY3RvcnMuZ2V0UGFnZUNvbXBvbmVudFR5cGVzKHBhZ2VDb250ZXh0KSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdpdmVuIHBhZ2VDb250ZXh0LCByZXR1cm4gd2hldGhlciB0aGUgQ01TIHBhZ2UgZGF0YSBleGlzdHMgb3Igbm90XG4gICAqIEBwYXJhbSBwYWdlQ29udGV4dFxuICAgKi9cbiAgaGFzUGFnZShwYWdlQ29udGV4dDogUGFnZUNvbnRleHQsIGZvcmNlUmVsb2FkID0gZmFsc2UpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KENtc1NlbGVjdG9ycy5nZXRQYWdlU3RhdGVJbmRleExvYWRlclN0YXRlKHBhZ2VDb250ZXh0KSksXG4gICAgICB0YXAoKGVudGl0eTogTG9hZGVyU3RhdGU8c3RyaW5nPikgPT4ge1xuICAgICAgICBjb25zdCBhdHRlbXB0ZWRMb2FkID0gZW50aXR5LmxvYWRpbmcgfHwgZW50aXR5LnN1Y2Nlc3MgfHwgZW50aXR5LmVycm9yO1xuICAgICAgICBjb25zdCBzaG91bGRSZWxvYWQgPSBmb3JjZVJlbG9hZCAmJiAhZW50aXR5LmxvYWRpbmc7XG4gICAgICAgIGlmICghYXR0ZW1wdGVkTG9hZCB8fCBzaG91bGRSZWxvYWQpIHtcbiAgICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDbXNBY3Rpb25zLkxvYWRDbXNQYWdlRGF0YShwYWdlQ29udGV4dCkpO1xuICAgICAgICAgIGZvcmNlUmVsb2FkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgZmlsdGVyKGVudGl0eSA9PiB7XG4gICAgICAgIGlmICghZW50aXR5Lmhhc093blByb3BlcnR5KCd2YWx1ZScpKSB7XG4gICAgICAgICAgLy8gaWYgd2UgaGF2ZSBpbmNvbXBsZXRlIHN0YXRlIGZyb20gc3JyIGZhaWxlZCBsb2FkIHRyYW5zZmVyIHN0YXRlLFxuICAgICAgICAgIC8vIHdlIHNob3VsZCB3YWl0IGZvciByZWxvYWQgYW5kIGFjdHVhbCB2YWx1ZVxuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZW50aXR5LnN1Y2Nlc3MgfHwgKGVudGl0eS5lcnJvciAmJiAhZW50aXR5LmxvYWRpbmcpO1xuICAgICAgfSksXG4gICAgICBwbHVjaygnc3VjY2VzcycpLFxuICAgICAgY2F0Y2hFcnJvcigoKSA9PiBvZihmYWxzZSkpXG4gICAgKTtcbiAgfVxuXG4gIGdldFBhZ2VJbmRleChwYWdlQ29udGV4dDogUGFnZUNvbnRleHQpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoQ21zU2VsZWN0b3JzLmdldFBhZ2VTdGF0ZUluZGV4VmFsdWUocGFnZUNvbnRleHQpKVxuICAgICk7XG4gIH1cblxuICBzZXRQYWdlRmFpbEluZGV4KHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCwgdmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IENtc0FjdGlvbnMuQ21zU2V0UGFnZUZhaWxJbmRleChwYWdlQ29udGV4dCwgdmFsdWUpKTtcbiAgfVxufVxuIl19
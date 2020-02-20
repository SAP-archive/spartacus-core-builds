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
        return this.routingService.getPageContext().pipe(switchMap(function (pageContext) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL2ZhY2FkZS9jbXMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUM1QyxPQUFPLEVBQUUsYUFBYSxFQUFjLEVBQUUsRUFBRSxjQUFjLEVBQUUsS0FBSyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzVFLE9BQU8sRUFDTCxVQUFVLEVBQ1YsTUFBTSxFQUNOLFNBQVMsRUFDVCxLQUFLLEVBQ0wsV0FBVyxFQUNYLFNBQVMsRUFDVCxJQUFJLEVBQ0osR0FBRyxHQUNKLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEIsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBTXRFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUVwRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDeEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7QUFLMUQ7SUFTRSxvQkFDWSxLQUEwQixFQUMxQixjQUE4QjtRQUQ5QixVQUFLLEdBQUwsS0FBSyxDQUFxQjtRQUMxQixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFWbEMsdUJBQWtCLEdBQUcsS0FBSyxDQUFDO1FBRTNCLGVBQVUsR0FJZCxFQUFFLENBQUM7SUFLSixDQUFDO0lBS0osc0JBQUkseUNBQWlCO1FBSHJCOztXQUVHO2FBQ0gsVUFBc0IsS0FBYztZQUNsQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO1FBQ2xDLENBQUM7OztPQUFBO0lBRUQ7O09BRUc7SUFDSCx3Q0FBbUIsR0FBbkI7UUFDRSxPQUFPLElBQUksQ0FBQyxr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IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSwgb2YsIHF1ZXVlU2NoZWR1bGVyLCB1c2luZyB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgY2F0Y2hFcnJvcixcbiAgZmlsdGVyLFxuICBvYnNlcnZlT24sXG4gIHBsdWNrLFxuICBzaGFyZVJlcGxheSxcbiAgc3dpdGNoTWFwLFxuICB0YWtlLFxuICB0YXAsXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENtc0NvbXBvbmVudCB9IGZyb20gJy4uLy4uL21vZGVsL2Ntcy5tb2RlbCc7XG5pbXBvcnQgeyBSb3V0aW5nU2VydmljZSB9IGZyb20gJy4uLy4uL3JvdXRpbmcvZmFjYWRlL3JvdXRpbmcuc2VydmljZSc7XG5pbXBvcnQgeyBQYWdlQ29udGV4dCB9IGZyb20gJy4uLy4uL3JvdXRpbmcvbW9kZWxzL3BhZ2UtY29udGV4dC5tb2RlbCc7XG5pbXBvcnQgeyBMb2FkZXJTdGF0ZSB9IGZyb20gJy4uLy4uL3N0YXRlL3V0aWxzL2xvYWRlci9sb2FkZXItc3RhdGUnO1xuaW1wb3J0IHsgQ29udGVudFNsb3REYXRhIH0gZnJvbSAnLi4vbW9kZWwvY29udGVudC1zbG90LWRhdGEubW9kZWwnO1xuaW1wb3J0IHsgTm9kZUl0ZW0gfSBmcm9tICcuLi9tb2RlbC9ub2RlLWl0ZW0ubW9kZWwnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJy4uL21vZGVsL3BhZ2UubW9kZWwnO1xuaW1wb3J0IHsgQ21zQWN0aW9ucyB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgU3RhdGVXaXRoQ21zIH0gZnJvbSAnLi4vc3RvcmUvY21zLXN0YXRlJztcbmltcG9ydCB7IENtc1NlbGVjdG9ycyB9IGZyb20gJy4uL3N0b3JlL3NlbGVjdG9ycy9pbmRleCc7XG5pbXBvcnQgeyBzZXJpYWxpemVQYWdlQ29udGV4dCB9IGZyb20gJy4uL3V0aWxzL2Ntcy11dGlscyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDbXNTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfbGF1bmNoSW5TbWFydEVkaXQgPSBmYWxzZTtcblxuICBwcml2YXRlIGNvbXBvbmVudHM6IHtcbiAgICBbdWlkOiBzdHJpbmddOiB7XG4gICAgICBbcGFnZUNvbnRleHQ6IHN0cmluZ106IE9ic2VydmFibGU8Q21zQ29tcG9uZW50PjtcbiAgICB9O1xuICB9ID0ge307XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhDbXM+LFxuICAgIHByb3RlY3RlZCByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2VcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBTZXQgX2xhdW5jaEluU21hcnRFZGl0IHZhbHVlXG4gICAqL1xuICBzZXQgbGF1bmNoSW5TbWFydEVkaXQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9sYXVuY2hJblNtYXJ0RWRpdCA9IHZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhlIGFwcCBsYXVuY2hlZCBpbiBzbWFydCBlZGl0XG4gICAqL1xuICBpc0xhdW5jaEluU21hcnRFZGl0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9sYXVuY2hJblNtYXJ0RWRpdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY3VycmVudCBDTVMgcGFnZSBkYXRhXG4gICAqL1xuICBnZXRDdXJyZW50UGFnZSgpOiBPYnNlcnZhYmxlPFBhZ2U+IHtcbiAgICByZXR1cm4gdGhpcy5yb3V0aW5nU2VydmljZVxuICAgICAgLmdldFBhZ2VDb250ZXh0KClcbiAgICAgIC5waXBlKFxuICAgICAgICBzd2l0Y2hNYXAocGFnZUNvbnRleHQgPT5cbiAgICAgICAgICB0aGlzLnN0b3JlLnNlbGVjdChDbXNTZWxlY3RvcnMuZ2V0UGFnZURhdGEocGFnZUNvbnRleHQpKVxuICAgICAgICApXG4gICAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBDTVMgY29tcG9uZW50IGRhdGEgYnkgdWlkXG4gICAqXG4gICAqIFRoaXMgbWV0aG9kIGNhbiBiZSBzYWZlbHkgYW5kIG9wdGltYWxseSB1c2VkIHRvIGxvYWQgbXVsdGlwbGUgY29tcG9uZW50cyBkYXRhIGF0IHRoZSBzYW1lIHRpbWUuXG4gICAqIENhbGxpbmcgZ2V0Q29tcG9uZW50RGF0YSBtdWx0aXBsZSB0aW1lcyBmb3IgZGlmZmVyZW50IGNvbXBvbmVudHMgd2lsbCBhbHdheXMgcmVzdWx0IGluIG9wdGltaXplZFxuICAgKiBiYWNrLWVuZCByZXF1ZXN0OiBhbGwgY29tcG9uZW50cyByZXF1ZXN0ZWQgYXQgdGhlIHNhbWUgdGltZSAoaW4gb25lIGV2ZW50IGxvb3ApIHdpbGwgYmUgbG9hZGVkIGluIG9uZSBuZXR3b3JrIGNhbGwuXG4gICAqXG4gICAqIEluIGNhc2UgdGhlIGNvbXBvbmVudCBkYXRhIGlzIG5vdCBwcmVzZW50LCB0aGUgbWV0aG9kIHdpbGwgbG9hZCBpdC5cbiAgICogT3RoZXJ3aXNlLCBpZiB0aGUgcGFnZSBjb250ZXh0IGlzIG5vdCBwcm92aWRlZCwgdGhlIGN1cnJlbnQgcGFnZSBjb250ZXh0IGZyb20gdGhlIHJvdXRlciBzdGF0ZSB3aWxsIGJlIHVzZWQgaW5zdGVhZC5cbiAgICpcbiAgICogQHBhcmFtIHVpZCBDTVMgY29tcG9uZW50IHVpZFxuICAgKiBAcGFyYW0gcGFnZUNvbnRleHQgaWYgcHJvdmlkZWQsIGl0IHdpbGwgYmUgdXNlZCB0byBsb29rdXAgdGhlIGNvbXBvbmVudCBkYXRhLlxuICAgKi9cbiAgZ2V0Q29tcG9uZW50RGF0YTxUIGV4dGVuZHMgQ21zQ29tcG9uZW50PihcbiAgICB1aWQ6IHN0cmluZyxcbiAgICBwYWdlQ29udGV4dD86IFBhZ2VDb250ZXh0XG4gICk6IE9ic2VydmFibGU8VD4ge1xuICAgIGNvbnN0IGNvbnRleHQgPSBzZXJpYWxpemVQYWdlQ29udGV4dChwYWdlQ29udGV4dCwgdHJ1ZSk7XG4gICAgaWYgKCF0aGlzLmNvbXBvbmVudHNbdWlkXSkge1xuICAgICAgLy8gY3JlYXRlIHRoZSBjb21wb25lbnQgZGF0YSBzdHJ1Y3R1cmUsIGlmIGl0IGRvZXNuJ3QgYWxyZWFkeSBleGlzdFxuICAgICAgdGhpcy5jb21wb25lbnRzW3VpZF0gPSB7fTtcbiAgICB9XG5cbiAgICBjb25zdCBjb21wb25lbnQgPSB0aGlzLmNvbXBvbmVudHNbdWlkXTtcbiAgICBpZiAoIWNvbXBvbmVudFtjb250ZXh0XSkge1xuICAgICAgLy8gY3JlYXRlIHRoZSBjb21wb25lbnQgZGF0YSBhbmQgYXNzaWduIGl0IHRvIHRoZSBjb21wb25lbnQncyBjb250ZXh0XG4gICAgICBjb21wb25lbnRbY29udGV4dF0gPSB0aGlzLmNyZWF0ZUNvbXBvbmVudERhdGEodWlkLCBwYWdlQ29udGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFtjb250ZXh0XSBhcyBPYnNlcnZhYmxlPFQ+O1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVDb21wb25lbnREYXRhPFQgZXh0ZW5kcyBDbXNDb21wb25lbnQ+KFxuICAgIHVpZDogc3RyaW5nLFxuICAgIHBhZ2VDb250ZXh0PzogUGFnZUNvbnRleHRcbiAgKTogT2JzZXJ2YWJsZTxUPiB7XG4gICAgaWYgKCFwYWdlQ29udGV4dCkge1xuICAgICAgcmV0dXJuIHRoaXMucm91dGluZ1NlcnZpY2UuZ2V0UGFnZUNvbnRleHQoKS5waXBlKFxuICAgICAgICBmaWx0ZXIoY3VycmVudENvbnRleHQgPT4gISFjdXJyZW50Q29udGV4dCksXG4gICAgICAgIHN3aXRjaE1hcChjdXJyZW50Q29udGV4dCA9PlxuICAgICAgICAgIHRoaXMuZ2V0Q29tcG9uZW50RGF0YTxUPih1aWQsIGN1cnJlbnRDb250ZXh0KVxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbnRleHQgPSBzZXJpYWxpemVQYWdlQ29udGV4dChwYWdlQ29udGV4dCwgdHJ1ZSk7XG5cbiAgICBjb25zdCBsb2FkaW5nJCA9IGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy5yb3V0aW5nU2VydmljZS5nZXROZXh0UGFnZUNvbnRleHQoKSxcbiAgICAgIHRoaXMuc3RvcmUucGlwZShcbiAgICAgICAgc2VsZWN0KENtc1NlbGVjdG9ycy5jb21wb25lbnRzTG9hZGVyU3RhdGVTZWxlY3RvckZhY3RvcnkodWlkLCBjb250ZXh0KSlcbiAgICAgICksXG4gICAgXSkucGlwZShcbiAgICAgIG9ic2VydmVPbihxdWV1ZVNjaGVkdWxlciksXG4gICAgICB0YXAoKFtuZXh0Q29udGV4dCwgbG9hZGluZ1N0YXRlXSkgPT4ge1xuICAgICAgICBjb25zdCBhdHRlbXB0ZWRMb2FkID1cbiAgICAgICAgICBsb2FkaW5nU3RhdGUubG9hZGluZyB8fCBsb2FkaW5nU3RhdGUuc3VjY2VzcyB8fCBsb2FkaW5nU3RhdGUuZXJyb3I7XG4gICAgICAgIC8vIGlmIHRoZSByZXF1ZXN0ZWQgY29udGV4dCBpcyB0aGUgc2FtZSBhcyB0aGUgb25lIHRoYXQncyBjdXJyZW50bHkgYmVpbmcgbmF2aWdhdGVkIHRvXG4gICAgICAgIC8vIChhcyBpdCBtaWdodCBhbHJlYWR5IGJlZW4gdHJpZ2dlcmVkIGFuZCBtaWdodCBiZSBhdmFpbGFibGUgc2hvcnRseSBmcm9tIHBhZ2UgZGF0YSlcbiAgICAgICAgLy8gVE9ETyhpc3N1ZTozNjQ5KSwgVE9ETyhpc3N1ZTozNjY4KSAtIHRoaXMgb3B0aW1pemF0aW9uIGNvdWxkIGJlIHJlbW92ZWRcbiAgICAgICAgY29uc3QgY291bGRCZUxvYWRlZFdpdGhQYWdlRGF0YSA9IG5leHRDb250ZXh0XG4gICAgICAgICAgPyBzZXJpYWxpemVQYWdlQ29udGV4dChuZXh0Q29udGV4dCwgdHJ1ZSkgPT09IGNvbnRleHRcbiAgICAgICAgICA6IGZhbHNlO1xuXG4gICAgICAgIGlmICghYXR0ZW1wdGVkTG9hZCAmJiAhY291bGRCZUxvYWRlZFdpdGhQYWdlRGF0YSkge1xuICAgICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgICAgICBuZXcgQ21zQWN0aW9ucy5Mb2FkQ21zQ29tcG9uZW50KHsgdWlkLCBwYWdlQ29udGV4dCB9KVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcblxuICAgIGNvbnN0IGNvbXBvbmVudCQgPSB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoQ21zU2VsZWN0b3JzLmNvbXBvbmVudHNTZWxlY3RvckZhY3RvcnkodWlkLCBjb250ZXh0KSksXG4gICAgICAvLyBUT0RPKGlzc3VlOjY0MzEpIC0gdGhpcyBgZmlsdGVyYCBzaG91bGQgYmUgcmVtb3ZlZC5cbiAgICAgIC8vIFRoZSByZWFzb24gZm9yIHJlbW92YWw6IHdpdGggYGZpbHRlcmAgaW4gcGxhY2UsIHdoZW4gbW92aW5nIHRvIGEgcGFnZSB0aGF0IGhhcyByZXN0cmljdGlvbnMsIHRoZSBjb21wb25lbnQgZGF0YSB3aWxsIHN0aWxsIGVtaXQgdGhlIHByZXZpb3VzIHZhbHVlLlxuICAgICAgLy8gUmVtb3ZpbmcgaXQgY2F1c2VzIHNvbWUgY29tcG9uZW50cyB0byBmYWlsLCBiZWNhdXNlIHRoZXkgYXJlIG5vdCBjaGVja2luZ1xuICAgICAgLy8gaWYgdGhlIGRhdGEgaXMgYWN0dWFsbHkgdGhlcmUuIEkgbm90aWNlZCB0aGVzZSB0aGF0IHRoaXMgY29tcG9uZW50IGlzIGZhaWxpbmcsIGJ1dCB0aGVyZSBhcmUgcG9zc2libHkgbW9yZTpcbiAgICAgIC8vIC0gYHRhYi1wYXJhZ3JhcGgtY29udGFpbmVyLmNvbXBvbmVudC50c2Agd2hlbiB2aXNpdGluZyBhbnkgUERQIHBhZ2VcbiAgICAgIGZpbHRlcihjb21wb25lbnQgPT4gISFjb21wb25lbnQpXG4gICAgKSBhcyBPYnNlcnZhYmxlPFQ+O1xuXG4gICAgcmV0dXJuIHVzaW5nKCgpID0+IGxvYWRpbmckLnN1YnNjcmliZSgpLCAoKSA9PiBjb21wb25lbnQkKS5waXBlKFxuICAgICAgc2hhcmVSZXBsYXkoeyBidWZmZXJTaXplOiAxLCByZWZDb3VudDogdHJ1ZSB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogR2l2ZW4gdGhlIHBvc2l0aW9uLCBnZXQgdGhlIGNvbnRlbnQgc2xvdCBkYXRhXG4gICAqIEBwYXJhbSBwb3NpdGlvbiA6IGNvbnRlbnQgc2xvdCBwb3NpdGlvblxuICAgKi9cbiAgZ2V0Q29udGVudFNsb3QocG9zaXRpb246IHN0cmluZyk6IE9ic2VydmFibGU8Q29udGVudFNsb3REYXRhPiB7XG4gICAgcmV0dXJuIHRoaXMucm91dGluZ1NlcnZpY2UuZ2V0UGFnZUNvbnRleHQoKS5waXBlKFxuICAgICAgc3dpdGNoTWFwKHBhZ2VDb250ZXh0ID0+XG4gICAgICAgIHRoaXMuc3RvcmUucGlwZShcbiAgICAgICAgICBzZWxlY3QoXG4gICAgICAgICAgICBDbXNTZWxlY3RvcnMuZ2V0Q3VycmVudFNsb3RTZWxlY3RvckZhY3RvcnkocGFnZUNvbnRleHQsIHBvc2l0aW9uKVxuICAgICAgICAgICksXG4gICAgICAgICAgZmlsdGVyKEJvb2xlYW4pXG4gICAgICAgIClcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdpdmVuIG5hdmlnYXRpb24gbm9kZSB1aWQsIGdldCBpdGVtcyAod2l0aCBpZCBhbmQgdHlwZSkgaW5zaWRlIHRoZSBuYXZpZ2F0aW9uIGVudHJpZXNcbiAgICogQHBhcmFtIG5hdmlnYXRpb25Ob2RlVWlkIDogdWlkIG9mIHRoZSBuYXZpZ2F0aW9uIG5vZGVcbiAgICovXG4gIGdldE5hdmlnYXRpb25FbnRyeUl0ZW1zKG5hdmlnYXRpb25Ob2RlVWlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPE5vZGVJdGVtPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChDbXNTZWxlY3RvcnMuZ2V0TmF2aWdhdGlvbkVudHJ5SXRlbXMobmF2aWdhdGlvbk5vZGVVaWQpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogTG9hZCBuYXZpZ2F0aW9uIGl0ZW1zIGRhdGFcbiAgICogQHBhcmFtIHJvb3RVaWQgOiB0aGUgdWlkIG9mIHRoZSByb290IG5hdmlnYXRpb24gbm9kZVxuICAgKiBAcGFyYW0gaXRlbUxpc3QgOiBsaXN0IG9mIGl0ZW1zICh3aXRoIGlkIGFuZCB0eXBlKVxuICAgKi9cbiAgbG9hZE5hdmlnYXRpb25JdGVtcyhcbiAgICByb290VWlkOiBzdHJpbmcsXG4gICAgaXRlbUxpc3Q6IHsgaWQ6IHN0cmluZzsgc3VwZXJUeXBlOiBzdHJpbmcgfVtdXG4gICk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgQ21zQWN0aW9ucy5Mb2FkQ21zTmF2aWdhdGlvbkl0ZW1zKHtcbiAgICAgICAgbm9kZUlkOiByb290VWlkLFxuICAgICAgICBpdGVtczogaXRlbUxpc3QsXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmVmcmVzaCB0aGUgY29udGVudCBvZiB0aGUgbGF0ZXN0IGNtcyBwYWdlXG4gICAqL1xuICByZWZyZXNoTGF0ZXN0UGFnZSgpOiB2b2lkIHtcbiAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlXG4gICAgICAuZ2V0UGFnZUNvbnRleHQoKVxuICAgICAgLnBpcGUodGFrZSgxKSlcbiAgICAgIC5zdWJzY3JpYmUocGFnZUNvbnRleHQgPT5cbiAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQ21zQWN0aW9ucy5Mb2FkQ21zUGFnZURhdGEocGFnZUNvbnRleHQpKVxuICAgICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWZyZXNoIHRoZSBjbXMgcGFnZSBjb250ZW50IGJ5IHBhZ2UgSWRcbiAgICogQHBhcmFtIHBhZ2VJZFxuICAgKi9cbiAgcmVmcmVzaFBhZ2VCeUlkKHBhZ2VJZDogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgcGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0ID0geyBpZDogcGFnZUlkIH07XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQ21zQWN0aW9ucy5Mb2FkQ21zUGFnZURhdGEocGFnZUNvbnRleHQpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWZyZXNoIGNtcyBjb21wb25lbnQncyBjb250ZW50XG4gICAqIEBwYXJhbSB1aWQgY29tcG9uZW50IHVpZFxuICAgKiBAcGFyYW0gcGFnZUNvbnRleHQgYW4gb3B0aW9uYWwgcGFyYW1ldGVyIHRoYXQgZW5hYmxlcyB0aGUgY2FsbGVyIHRvIHNwZWNpZnkgZm9yIHdoaWNoIGNvbnRleHQgdGhlIGNvbXBvbmVudCBzaG91bGQgYmUgcmVmcmVzaGVkLlxuICAgKiBJZiBub3Qgc3BlY2lmaWVkLCAnY3VycmVudCcgcGFnZSBjb250ZXh0IGlzIHVzZWQuXG4gICAqL1xuICByZWZyZXNoQ29tcG9uZW50KHVpZDogc3RyaW5nLCBwYWdlQ29udGV4dD86IFBhZ2VDb250ZXh0KTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQ21zQWN0aW9ucy5Mb2FkQ21zQ29tcG9uZW50KHsgdWlkLCBwYWdlQ29udGV4dCB9KSk7XG4gIH1cblxuICAvKipcbiAgICogR2l2ZW4gcGFnZUNvbnRleHQsIHJldHVybiB0aGUgQ01TIHBhZ2UgZGF0YVxuICAgKiBAcGFyYW0gcGFnZUNvbnRleHRcbiAgICovXG4gIGdldFBhZ2VTdGF0ZShwYWdlQ29udGV4dDogUGFnZUNvbnRleHQpOiBPYnNlcnZhYmxlPFBhZ2U+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChDbXNTZWxlY3RvcnMuZ2V0UGFnZURhdGEocGFnZUNvbnRleHQpKSk7XG4gIH1cblxuICAvKipcbiAgICogR2l2ZW4gcGFnZUNvbnRleHQsIHJldHVybiB0aGUgQ01TIHBhZ2UgZGF0YVxuICAgKiBAcGFyYW0gcGFnZUNvbnRleHRcbiAgICovXG4gIGdldFBhZ2VDb21wb25lbnRUeXBlcyhwYWdlQ29udGV4dDogUGFnZUNvbnRleHQpOiBPYnNlcnZhYmxlPHN0cmluZ1tdPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChDbXNTZWxlY3RvcnMuZ2V0UGFnZUNvbXBvbmVudFR5cGVzKHBhZ2VDb250ZXh0KSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdpdmVuIHBhZ2VDb250ZXh0LCByZXR1cm4gd2hldGhlciB0aGUgQ01TIHBhZ2UgZGF0YSBleGlzdHMgb3Igbm90XG4gICAqIEBwYXJhbSBwYWdlQ29udGV4dFxuICAgKi9cbiAgaGFzUGFnZShwYWdlQ29udGV4dDogUGFnZUNvbnRleHQsIGZvcmNlUmVsb2FkID0gZmFsc2UpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KENtc1NlbGVjdG9ycy5nZXRQYWdlU3RhdGVJbmRleExvYWRlclN0YXRlKHBhZ2VDb250ZXh0KSksXG4gICAgICB0YXAoKGVudGl0eTogTG9hZGVyU3RhdGU8c3RyaW5nPikgPT4ge1xuICAgICAgICBjb25zdCBhdHRlbXB0ZWRMb2FkID0gZW50aXR5LmxvYWRpbmcgfHwgZW50aXR5LnN1Y2Nlc3MgfHwgZW50aXR5LmVycm9yO1xuICAgICAgICBjb25zdCBzaG91bGRSZWxvYWQgPSBmb3JjZVJlbG9hZCAmJiAhZW50aXR5LmxvYWRpbmc7XG4gICAgICAgIGlmICghYXR0ZW1wdGVkTG9hZCB8fCBzaG91bGRSZWxvYWQpIHtcbiAgICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDbXNBY3Rpb25zLkxvYWRDbXNQYWdlRGF0YShwYWdlQ29udGV4dCkpO1xuICAgICAgICAgIGZvcmNlUmVsb2FkID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgZmlsdGVyKGVudGl0eSA9PiB7XG4gICAgICAgIGlmICghZW50aXR5Lmhhc093blByb3BlcnR5KCd2YWx1ZScpKSB7XG4gICAgICAgICAgLy8gaWYgd2UgaGF2ZSBpbmNvbXBsZXRlIHN0YXRlIGZyb20gU1NSIGZhaWxlZCBsb2FkIHRyYW5zZmVyIHN0YXRlLFxuICAgICAgICAgIC8vIHdlIHNob3VsZCB3YWl0IGZvciByZWxvYWQgYW5kIGFjdHVhbCB2YWx1ZVxuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZW50aXR5LnN1Y2Nlc3MgfHwgKGVudGl0eS5lcnJvciAmJiAhZW50aXR5LmxvYWRpbmcpO1xuICAgICAgfSksXG4gICAgICBwbHVjaygnc3VjY2VzcycpLFxuICAgICAgY2F0Y2hFcnJvcigoKSA9PiBvZihmYWxzZSkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHaXZlbiBwYWdlQ29udGV4dCwgcmV0dXJuIHRoZSBDTVMgcGFnZSBkYXRhXG4gICAqKi9cbiAgZ2V0UGFnZShwYWdlQ29udGV4dDogUGFnZUNvbnRleHQsIGZvcmNlUmVsb2FkID0gZmFsc2UpOiBPYnNlcnZhYmxlPFBhZ2U+IHtcbiAgICByZXR1cm4gdGhpcy5oYXNQYWdlKHBhZ2VDb250ZXh0LCBmb3JjZVJlbG9hZCkucGlwZShcbiAgICAgIHN3aXRjaE1hcChoYXNQYWdlID0+XG4gICAgICAgIGhhc1BhZ2UgPyB0aGlzLmdldFBhZ2VTdGF0ZShwYWdlQ29udGV4dCkgOiBvZihudWxsKVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBnZXRQYWdlSW5kZXgocGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0KTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KENtc1NlbGVjdG9ycy5nZXRQYWdlU3RhdGVJbmRleFZhbHVlKHBhZ2VDb250ZXh0KSlcbiAgICApO1xuICB9XG5cbiAgc2V0UGFnZUZhaWxJbmRleChwYWdlQ29udGV4dDogUGFnZUNvbnRleHQsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDbXNBY3Rpb25zLkNtc1NldFBhZ2VGYWlsSW5kZXgocGFnZUNvbnRleHQsIHZhbHVlKSk7XG4gIH1cbn1cbiJdfQ==
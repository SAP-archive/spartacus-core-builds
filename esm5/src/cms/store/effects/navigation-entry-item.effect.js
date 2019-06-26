/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, filter, map, mergeMap, take } from 'rxjs/operators';
import { RoutingService } from '../../../routing/index';
import { makeErrorSerializable } from '../../../util/serialization-utils';
import { CmsComponentConnector } from '../../connectors/component/cms-component.connector';
import { CmsActions } from '../actions/index';
var NavigationEntryItemEffects = /** @class */ (function () {
    function NavigationEntryItemEffects(actions$, cmsComponentConnector, routingService) {
        var _this = this;
        this.actions$ = actions$;
        this.cmsComponentConnector = cmsComponentConnector;
        this.routingService = routingService;
        this.loadNavigationItems$ = this.actions$.pipe(ofType(CmsActions.LOAD_CMS_NAVIGATION_ITEMS), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.payload; })), map((/**
         * @param {?} payload
         * @return {?}
         */
        function (payload) {
            return {
                ids: _this.getIdListByItemType(payload.items),
                nodeId: payload.nodeId,
            };
        })), mergeMap((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            if (data.ids.componentIds.length > 0) {
                return _this.routingService.getRouterState().pipe(filter((/**
                 * @param {?} routerState
                 * @return {?}
                 */
                function (routerState) { return routerState !== undefined; })), map((/**
                 * @param {?} routerState
                 * @return {?}
                 */
                function (routerState) { return routerState.state.context; })), take(1), mergeMap((/**
                 * @param {?} pageContext
                 * @return {?}
                 */
                function (pageContext) {
                    // download all items in one request
                    return _this.cmsComponentConnector
                        .getList(data.ids.componentIds, pageContext)
                        .pipe(map((/**
                     * @param {?} components
                     * @return {?}
                     */
                    function (components) {
                        return new CmsActions.LoadCmsNavigationItemsSuccess({
                            nodeId: data.nodeId,
                            components: components,
                        });
                    })), catchError((/**
                     * @param {?} error
                     * @return {?}
                     */
                    function (error) {
                        return of(new CmsActions.LoadCmsNavigationItemsFail(data.nodeId, makeErrorSerializable(error)));
                    })));
                })));
            }
            else if (data.ids.pageIds.length > 0) {
                // TODO: future work
                // dispatch action to load cms page one by one
            }
            else if (data.ids.mediaIds.length > 0) {
                // TODO: future work
                // send request to get list of media
            }
            else {
                return of(new CmsActions.LoadCmsNavigationItemsFail(data.nodeId, 'navigation nodes are empty'));
            }
        })));
    }
    // We only consider 3 item types: cms page, cms component, and media.
    // We only consider 3 item types: cms page, cms component, and media.
    /**
     * @param {?} itemList
     * @return {?}
     */
    NavigationEntryItemEffects.prototype.getIdListByItemType = 
    // We only consider 3 item types: cms page, cms component, and media.
    /**
     * @param {?} itemList
     * @return {?}
     */
    function (itemList) {
        /** @type {?} */
        var pageIds = [];
        /** @type {?} */
        var componentIds = [];
        /** @type {?} */
        var mediaIds = [];
        itemList.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            if (item.superType === 'AbstractCMSComponent') {
                componentIds.push(item.id);
            }
            else if (item.superType === 'AbstractPage') {
                pageIds.push(item.id);
            }
            else if (item.superType === 'AbstractMedia') {
                mediaIds.push(item.id);
            }
        }));
        return { pageIds: pageIds, componentIds: componentIds, mediaIds: mediaIds };
    };
    NavigationEntryItemEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    NavigationEntryItemEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: CmsComponentConnector },
        { type: RoutingService }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], NavigationEntryItemEffects.prototype, "loadNavigationItems$", void 0);
    return NavigationEntryItemEffects;
}());
export { NavigationEntryItemEffects };
if (false) {
    /** @type {?} */
    NavigationEntryItemEffects.prototype.loadNavigationItems$;
    /**
     * @type {?}
     * @private
     */
    NavigationEntryItemEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    NavigationEntryItemEffects.prototype.cmsComponentConnector;
    /**
     * @type {?}
     * @private
     */
    NavigationEntryItemEffects.prototype.routingService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi1lbnRyeS1pdGVtLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jbXMvc3RvcmUvZWZmZWN0cy9uYXZpZ2F0aW9uLWVudHJ5LWl0ZW0uZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDeEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDMUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDM0YsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRTlDO0lBaUZFLG9DQUNVLFFBQWlCLEVBQ2pCLHFCQUE0QyxFQUM1QyxjQUE4QjtRQUh4QyxpQkFJSTtRQUhNLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUM1QyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFqRnhDLHlCQUFvQixHQUdoQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLFVBQVUsQ0FBQyx5QkFBeUIsQ0FBQyxFQUM1QyxHQUFHOzs7O1FBQUMsVUFBQyxNQUF5QyxJQUFLLE9BQUEsTUFBTSxDQUFDLE9BQU8sRUFBZCxDQUFjLEVBQUMsRUFD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LEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxDQUFDO0lBQzlFLENBQUM7O2dCQS9FRixVQUFVOzs7O2dCQVJGLE9BQU87Z0JBS1AscUJBQXFCO2dCQUZyQixjQUFjOztJQVFyQjtRQURDLE1BQU0sRUFBRTswQ0FDYSxVQUFVOzRFQXdEOUI7SUEyQkosaUNBQUM7Q0FBQSxBQXRGRCxJQXNGQztTQXJGWSwwQkFBMEI7OztJQUNyQywwREF5REU7Ozs7O0lBdUJBLDhDQUF5Qjs7Ozs7SUFDekIsMkRBQW9EOzs7OztJQUNwRCxvREFBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIGZpbHRlciwgbWFwLCBtZXJnZU1hcCwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFJvdXRpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vcm91dGluZy9pbmRleCc7XG5pbXBvcnQgeyBtYWtlRXJyb3JTZXJpYWxpemFibGUgfSBmcm9tICcuLi8uLi8uLi91dGlsL3NlcmlhbGl6YXRpb24tdXRpbHMnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50Q29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9jb21wb25lbnQvY21zLWNvbXBvbmVudC5jb25uZWN0b3InO1xuaW1wb3J0IHsgQ21zQWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTmF2aWdhdGlvbkVudHJ5SXRlbUVmZmVjdHMge1xuICBARWZmZWN0KClcbiAgbG9hZE5hdmlnYXRpb25JdGVtcyQ6IE9ic2VydmFibGU8XG4gICAgfCBDbXNBY3Rpb25zLkxvYWRDbXNOYXZpZ2F0aW9uSXRlbXNTdWNjZXNzXG4gICAgfCBDbXNBY3Rpb25zLkxvYWRDbXNOYXZpZ2F0aW9uSXRlbXNGYWlsXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKENtc0FjdGlvbnMuTE9BRF9DTVNfTkFWSUdBVElPTl9JVEVNUyksXG4gICAgbWFwKChhY3Rpb246IENtc0FjdGlvbnMuTG9hZENtc05hdmlnYXRpb25JdGVtcykgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1hcChwYXlsb2FkID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlkczogdGhpcy5nZXRJZExpc3RCeUl0ZW1UeXBlKHBheWxvYWQuaXRlbXMpLFxuICAgICAgICBub2RlSWQ6IHBheWxvYWQubm9kZUlkLFxuICAgICAgfTtcbiAgICB9KSxcbiAgICBtZXJnZU1hcChkYXRhID0+IHtcbiAgICAgIGlmIChkYXRhLmlkcy5jb21wb25lbnRJZHMubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yb3V0aW5nU2VydmljZS5nZXRSb3V0ZXJTdGF0ZSgpLnBpcGUoXG4gICAgICAgICAgZmlsdGVyKHJvdXRlclN0YXRlID0+IHJvdXRlclN0YXRlICE9PSB1bmRlZmluZWQpLFxuICAgICAgICAgIG1hcChyb3V0ZXJTdGF0ZSA9PiByb3V0ZXJTdGF0ZS5zdGF0ZS5jb250ZXh0KSxcbiAgICAgICAgICB0YWtlKDEpLFxuICAgICAgICAgIG1lcmdlTWFwKHBhZ2VDb250ZXh0ID0+XG4gICAgICAgICAgICAvLyBkb3dubG9hZCBhbGwgaXRlbXMgaW4gb25lIHJlcXVlc3RcbiAgICAgICAgICAgIHRoaXMuY21zQ29tcG9uZW50Q29ubmVjdG9yXG4gICAgICAgICAgICAgIC5nZXRMaXN0KGRhdGEuaWRzLmNvbXBvbmVudElkcywgcGFnZUNvbnRleHQpXG4gICAgICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgICAgIG1hcChcbiAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHMgPT5cbiAgICAgICAgICAgICAgICAgICAgbmV3IENtc0FjdGlvbnMuTG9hZENtc05hdmlnYXRpb25JdGVtc1N1Y2Nlc3Moe1xuICAgICAgICAgICAgICAgICAgICAgIG5vZGVJZDogZGF0YS5ub2RlSWQsXG4gICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50czogY29tcG9uZW50cyxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICAgICAgICAgIG9mKFxuICAgICAgICAgICAgICAgICAgICBuZXcgQ21zQWN0aW9ucy5Mb2FkQ21zTmF2aWdhdGlvbkl0ZW1zRmFpbChcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhLm5vZGVJZCxcbiAgICAgICAgICAgICAgICAgICAgICBtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICB9IGVsc2UgaWYgKGRhdGEuaWRzLnBhZ2VJZHMubGVuZ3RoID4gMCkge1xuICAgICAgICAvLyBUT0RPOiBmdXR1cmUgd29ya1xuICAgICAgICAvLyBkaXNwYXRjaCBhY3Rpb24gdG8gbG9hZCBjbXMgcGFnZSBvbmUgYnkgb25lXG4gICAgICB9IGVsc2UgaWYgKGRhdGEuaWRzLm1lZGlhSWRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgLy8gVE9ETzogZnV0dXJlIHdvcmtcbiAgICAgICAgLy8gc2VuZCByZXF1ZXN0IHRvIGdldCBsaXN0IG9mIG1lZGlhXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gb2YoXG4gICAgICAgICAgbmV3IENtc0FjdGlvbnMuTG9hZENtc05hdmlnYXRpb25JdGVtc0ZhaWwoXG4gICAgICAgICAgICBkYXRhLm5vZGVJZCxcbiAgICAgICAgICAgICduYXZpZ2F0aW9uIG5vZGVzIGFyZSBlbXB0eSdcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSlcbiAgKTtcblxuICAvLyBXZSBvbmx5IGNvbnNpZGVyIDMgaXRlbSB0eXBlczogY21zIHBhZ2UsIGNtcyBjb21wb25lbnQsIGFuZCBtZWRpYS5cbiAgZ2V0SWRMaXN0QnlJdGVtVHlwZShcbiAgICBpdGVtTGlzdDogYW55W11cbiAgKTogeyBwYWdlSWRzOiBzdHJpbmdbXTsgY29tcG9uZW50SWRzOiBzdHJpbmdbXTsgbWVkaWFJZHM6IHN0cmluZ1tdIH0ge1xuICAgIGNvbnN0IHBhZ2VJZHM6IHN0cmluZ1tdID0gW107XG4gICAgY29uc3QgY29tcG9uZW50SWRzOiBzdHJpbmdbXSA9IFtdO1xuICAgIGNvbnN0IG1lZGlhSWRzOiBzdHJpbmdbXSA9IFtdO1xuXG4gICAgaXRlbUxpc3QuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGlmIChpdGVtLnN1cGVyVHlwZSA9PT0gJ0Fic3RyYWN0Q01TQ29tcG9uZW50Jykge1xuICAgICAgICBjb21wb25lbnRJZHMucHVzaChpdGVtLmlkKTtcbiAgICAgIH0gZWxzZSBpZiAoaXRlbS5zdXBlclR5cGUgPT09ICdBYnN0cmFjdFBhZ2UnKSB7XG4gICAgICAgIHBhZ2VJZHMucHVzaChpdGVtLmlkKTtcbiAgICAgIH0gZWxzZSBpZiAoaXRlbS5zdXBlclR5cGUgPT09ICdBYnN0cmFjdE1lZGlhJykge1xuICAgICAgICBtZWRpYUlkcy5wdXNoKGl0ZW0uaWQpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB7IHBhZ2VJZHM6IHBhZ2VJZHMsIGNvbXBvbmVudElkczogY29tcG9uZW50SWRzLCBtZWRpYUlkczogbWVkaWFJZHMgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBjbXNDb21wb25lbnRDb25uZWN0b3I6IENtc0NvbXBvbmVudENvbm5lY3RvcixcbiAgICBwcml2YXRlIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZVxuICApIHt9XG59XG4iXX0=
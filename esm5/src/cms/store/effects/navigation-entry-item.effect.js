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
import * as navigationItemActions from '../actions/navigation-entry-item.action';
var NavigationEntryItemEffects = /** @class */ (function () {
    function NavigationEntryItemEffects(actions$, cmsComponentConnector, routingService) {
        var _this = this;
        this.actions$ = actions$;
        this.cmsComponentConnector = cmsComponentConnector;
        this.routingService = routingService;
        this.loadNavigationItems$ = this.actions$.pipe(ofType(navigationItemActions.LOAD_NAVIGATION_ITEMS), map((/**
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
                        return new navigationItemActions.LoadNavigationItemsSuccess({
                            nodeId: data.nodeId,
                            components: components,
                        });
                    })), catchError((/**
                     * @param {?} error
                     * @return {?}
                     */
                    function (error) {
                        return of(new navigationItemActions.LoadNavigationItemsFail(data.nodeId, makeErrorSerializable(error)));
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
                return of(new navigationItemActions.LoadNavigationItemsFail(data.nodeId, 'navigation nodes are empty'));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi1lbnRyeS1pdGVtLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jbXMvc3RvcmUvZWZmZWN0cy9uYXZpZ2F0aW9uLWVudHJ5LWl0ZW0uZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDeEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDMUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDM0YsT0FBTyxLQUFLLHFCQUFxQixNQUFNLHlDQUF5QyxDQUFDO0FBRWpGO0lBaUZFLG9DQUNVLFFBQWlCLEVBQ2pCLHFCQUE0QyxFQUM1QyxjQUE4QjtRQUh4QyxpQkFJSTtRQUhNLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUM1QyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFqRnhDLHlCQUFvQixHQUdoQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLHFCQUFxQixDQUFDLHFCQUFxQixDQUFDLEVBQ25ELEdBQUc7Ozs7UUFBQyxVQUFDLE1BQWlELElBQUssT0FBQSxNQUFNLENBQUMsT0FBTyxFQUFkLENBQWMsRUFBQyxFQUMx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LFlBQVksRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUM7SUFDOUUsQ0FBQzs7Z0JBL0VGLFVBQVU7Ozs7Z0JBUkYsT0FBTztnQkFLUCxxQkFBcUI7Z0JBRnJCLGNBQWM7O0lBUXJCO1FBREMsTUFBTSxFQUFFOzBDQUNhLFVBQVU7NEVBd0Q5QjtJQTJCSixpQ0FBQztDQUFBLEFBdEZELElBc0ZDO1NBckZZLDBCQUEwQjs7O0lBQ3JDLDBEQXlERTs7Ozs7SUF1QkEsOENBQXlCOzs7OztJQUN6QiwyREFBb0Q7Ozs7O0lBQ3BELG9EQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgZmlsdGVyLCBtYXAsIG1lcmdlTWFwLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUm91dGluZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9yb3V0aW5nL2luZGV4JztcbmltcG9ydCB7IG1ha2VFcnJvclNlcmlhbGl6YWJsZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvc2VyaWFsaXphdGlvbi11dGlscyc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnRDb25uZWN0b3IgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL2NvbXBvbmVudC9jbXMtY29tcG9uZW50LmNvbm5lY3Rvcic7XG5pbXBvcnQgKiBhcyBuYXZpZ2F0aW9uSXRlbUFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9uYXZpZ2F0aW9uLWVudHJ5LWl0ZW0uYWN0aW9uJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5hdmlnYXRpb25FbnRyeUl0ZW1FZmZlY3RzIHtcbiAgQEVmZmVjdCgpXG4gIGxvYWROYXZpZ2F0aW9uSXRlbXMkOiBPYnNlcnZhYmxlPFxuICAgIHwgbmF2aWdhdGlvbkl0ZW1BY3Rpb25zLkxvYWROYXZpZ2F0aW9uSXRlbXNTdWNjZXNzXG4gICAgfCBuYXZpZ2F0aW9uSXRlbUFjdGlvbnMuTG9hZE5hdmlnYXRpb25JdGVtc0ZhaWxcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUobmF2aWdhdGlvbkl0ZW1BY3Rpb25zLkxPQURfTkFWSUdBVElPTl9JVEVNUyksXG4gICAgbWFwKChhY3Rpb246IG5hdmlnYXRpb25JdGVtQWN0aW9ucy5Mb2FkTmF2aWdhdGlvbkl0ZW1zKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWFwKHBheWxvYWQgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaWRzOiB0aGlzLmdldElkTGlzdEJ5SXRlbVR5cGUocGF5bG9hZC5pdGVtcyksXG4gICAgICAgIG5vZGVJZDogcGF5bG9hZC5ub2RlSWQsXG4gICAgICB9O1xuICAgIH0pLFxuICAgIG1lcmdlTWFwKGRhdGEgPT4ge1xuICAgICAgaWYgKGRhdGEuaWRzLmNvbXBvbmVudElkcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdldFJvdXRlclN0YXRlKCkucGlwZShcbiAgICAgICAgICBmaWx0ZXIocm91dGVyU3RhdGUgPT4gcm91dGVyU3RhdGUgIT09IHVuZGVmaW5lZCksXG4gICAgICAgICAgbWFwKHJvdXRlclN0YXRlID0+IHJvdXRlclN0YXRlLnN0YXRlLmNvbnRleHQpLFxuICAgICAgICAgIHRha2UoMSksXG4gICAgICAgICAgbWVyZ2VNYXAocGFnZUNvbnRleHQgPT5cbiAgICAgICAgICAgIC8vIGRvd25sb2FkIGFsbCBpdGVtcyBpbiBvbmUgcmVxdWVzdFxuICAgICAgICAgICAgdGhpcy5jbXNDb21wb25lbnRDb25uZWN0b3JcbiAgICAgICAgICAgICAgLmdldExpc3QoZGF0YS5pZHMuY29tcG9uZW50SWRzLCBwYWdlQ29udGV4dClcbiAgICAgICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICAgICAgbWFwKFxuICAgICAgICAgICAgICAgICAgY29tcG9uZW50cyA9PlxuICAgICAgICAgICAgICAgICAgICBuZXcgbmF2aWdhdGlvbkl0ZW1BY3Rpb25zLkxvYWROYXZpZ2F0aW9uSXRlbXNTdWNjZXNzKHtcbiAgICAgICAgICAgICAgICAgICAgICBub2RlSWQ6IGRhdGEubm9kZUlkLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHM6IGNvbXBvbmVudHMsXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICAgICAgICBvZihcbiAgICAgICAgICAgICAgICAgICAgbmV3IG5hdmlnYXRpb25JdGVtQWN0aW9ucy5Mb2FkTmF2aWdhdGlvbkl0ZW1zRmFpbChcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhLm5vZGVJZCxcbiAgICAgICAgICAgICAgICAgICAgICBtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICB9IGVsc2UgaWYgKGRhdGEuaWRzLnBhZ2VJZHMubGVuZ3RoID4gMCkge1xuICAgICAgICAvLyBUT0RPOiBmdXR1cmUgd29ya1xuICAgICAgICAvLyBkaXNwYXRjaCBhY3Rpb24gdG8gbG9hZCBjbXMgcGFnZSBvbmUgYnkgb25lXG4gICAgICB9IGVsc2UgaWYgKGRhdGEuaWRzLm1lZGlhSWRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgLy8gVE9ETzogZnV0dXJlIHdvcmtcbiAgICAgICAgLy8gc2VuZCByZXF1ZXN0IHRvIGdldCBsaXN0IG9mIG1lZGlhXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gb2YoXG4gICAgICAgICAgbmV3IG5hdmlnYXRpb25JdGVtQWN0aW9ucy5Mb2FkTmF2aWdhdGlvbkl0ZW1zRmFpbChcbiAgICAgICAgICAgIGRhdGEubm9kZUlkLFxuICAgICAgICAgICAgJ25hdmlnYXRpb24gbm9kZXMgYXJlIGVtcHR5J1xuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KVxuICApO1xuXG4gIC8vIFdlIG9ubHkgY29uc2lkZXIgMyBpdGVtIHR5cGVzOiBjbXMgcGFnZSwgY21zIGNvbXBvbmVudCwgYW5kIG1lZGlhLlxuICBnZXRJZExpc3RCeUl0ZW1UeXBlKFxuICAgIGl0ZW1MaXN0OiBhbnlbXVxuICApOiB7IHBhZ2VJZHM6IHN0cmluZ1tdOyBjb21wb25lbnRJZHM6IHN0cmluZ1tdOyBtZWRpYUlkczogc3RyaW5nW10gfSB7XG4gICAgY29uc3QgcGFnZUlkczogc3RyaW5nW10gPSBbXTtcbiAgICBjb25zdCBjb21wb25lbnRJZHM6IHN0cmluZ1tdID0gW107XG4gICAgY29uc3QgbWVkaWFJZHM6IHN0cmluZ1tdID0gW107XG5cbiAgICBpdGVtTGlzdC5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgaWYgKGl0ZW0uc3VwZXJUeXBlID09PSAnQWJzdHJhY3RDTVNDb21wb25lbnQnKSB7XG4gICAgICAgIGNvbXBvbmVudElkcy5wdXNoKGl0ZW0uaWQpO1xuICAgICAgfSBlbHNlIGlmIChpdGVtLnN1cGVyVHlwZSA9PT0gJ0Fic3RyYWN0UGFnZScpIHtcbiAgICAgICAgcGFnZUlkcy5wdXNoKGl0ZW0uaWQpO1xuICAgICAgfSBlbHNlIGlmIChpdGVtLnN1cGVyVHlwZSA9PT0gJ0Fic3RyYWN0TWVkaWEnKSB7XG4gICAgICAgIG1lZGlhSWRzLnB1c2goaXRlbS5pZCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHsgcGFnZUlkczogcGFnZUlkcywgY29tcG9uZW50SWRzOiBjb21wb25lbnRJZHMsIG1lZGlhSWRzOiBtZWRpYUlkcyB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIGNtc0NvbXBvbmVudENvbm5lY3RvcjogQ21zQ29tcG9uZW50Q29ubmVjdG9yLFxuICAgIHByaXZhdGUgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlXG4gICkge31cbn1cbiJdfQ==
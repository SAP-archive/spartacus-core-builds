/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map, catchError, filter, mergeMap, take } from 'rxjs/operators';
import * as navigationItemActions from '../actions/navigation-entry-item.action';
import { OccCmsPageLoader } from '../../occ/occ-cms-page.loader';
import { RoutingService } from '../../../routing/index';
var NavigationEntryItemEffects = /** @class */ (function () {
    function NavigationEntryItemEffects(actions$, occCmsService, routingService) {
        var _this = this;
        this.actions$ = actions$;
        this.occCmsService = occCmsService;
        this.routingService = routingService;
        this.loadNavigationItems$ = this.actions$.pipe(ofType(navigationItemActions.LOAD_NAVIGATION_ITEMS), map(function (action) { return action.payload; }), map(function (payload) {
            return {
                ids: _this.getIdListByItemType(payload.items),
                nodeId: payload.nodeId,
            };
        }), mergeMap(function (data) {
            if (data.ids.componentIds.idList.length > 0) {
                return _this.routingService.getRouterState().pipe(filter(function (routerState) { return routerState !== undefined; }), map(function (routerState) { return routerState.state.context; }), take(1), mergeMap(function (pageContext) {
                    // download all items in one request
                    return _this.occCmsService
                        .loadListComponents(data.ids.componentIds, pageContext, 'DEFAULT', 0, data.ids.componentIds.idList.length)
                        .pipe(map(function (res) {
                        return new navigationItemActions.LoadNavigationItemsSuccess({
                            nodeId: data.nodeId,
                            components: res.component,
                        });
                    }), catchError(function (error) {
                        return of(new navigationItemActions.LoadNavigationItemsFail(data.nodeId, error));
                    }));
                }));
            }
            else if (data.ids.pageIds.idList.length > 0) {
                // TODO: future work
                // dispatch action to load cms page one by one
            }
            else if (data.ids.mediaIds.idList.length > 0) {
                // TODO: future work
                // send request to get list of media
            }
            else {
                return of(new navigationItemActions.LoadNavigationItemsFail(data.nodeId, 'navigation nodes are empty'));
            }
        }));
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
        var pageIds = { idList: [] };
        /** @type {?} */
        var componentIds = { idList: [] };
        /** @type {?} */
        var mediaIds = { idList: [] };
        itemList.forEach(function (item) {
            if (item.superType === 'AbstractCMSComponent') {
                componentIds.idList.push(item.id);
            }
            else if (item.superType === 'AbstractPage') {
                pageIds.idList.push(item.id);
            }
            else if (item.superType === 'AbstractMedia') {
                mediaIds.idList.push(item.id);
            }
        });
        return { pageIds: pageIds, componentIds: componentIds, mediaIds: mediaIds };
    };
    NavigationEntryItemEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    NavigationEntryItemEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: OccCmsPageLoader },
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
    NavigationEntryItemEffects.prototype.occCmsService;
    /**
     * @type {?}
     * @private
     */
    NavigationEntryItemEffects.prototype.routingService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi1lbnRyeS1pdGVtLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jbXMvc3RvcmUvZWZmZWN0cy9uYXZpZ2F0aW9uLWVudHJ5LWl0ZW0uZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6RSxPQUFPLEtBQUsscUJBQXFCLE1BQU0seUNBQXlDLENBQUM7QUFDakYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFakUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRXhEO0lBa0ZFLG9DQUNVLFFBQWlCLEVBQ2pCLGFBQStCLEVBQy9CLGNBQThCO1FBSHhDLGlCQUlJO1FBSE0sYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7UUFDL0IsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBbEZ4Qyx5QkFBb0IsR0FBb0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3hELE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxxQkFBcUIsQ0FBQyxFQUNuRCxHQUFHLENBQUMsVUFBQyxNQUFpRCxJQUFLLE9BQUEsTUFBTSxDQUFDLE9BQU8sRUFBZCxDQUFjLENBQUMsRUFDMUUsR0FBRyxDQUFDLFVBQUEsT0FBTztZQUNULE9BQU87Z0JBQ0wsR0FBRyxFQUFFLEtBQUks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QyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQy9CO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FBQztJQUM5RSxDQUFDOztnQkFoRkYsVUFBVTs7OztnQkFUTSxPQUFPO2dCQUtmLGdCQUFnQjtnQkFFaEIsY0FBYzs7SUFLckI7UUFEQyxNQUFNLEVBQUU7MENBQ2EsVUFBVTs0RUEyRDlCO0lBeUJKLGlDQUFDO0NBQUEsQUF2RkQsSUF1RkM7U0F0RlksMEJBQTBCOzs7SUFDckMsMERBNERFOzs7OztJQXFCQSw4Q0FBeUI7Ozs7O0lBQ3pCLG1EQUF1Qzs7Ozs7SUFDdkMsb0RBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBFZmZlY3QsIEFjdGlvbnMsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgY2F0Y2hFcnJvciwgZmlsdGVyLCBtZXJnZU1hcCwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0ICogYXMgbmF2aWdhdGlvbkl0ZW1BY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvbmF2aWdhdGlvbi1lbnRyeS1pdGVtLmFjdGlvbic7XG5pbXBvcnQgeyBPY2NDbXNQYWdlTG9hZGVyIH0gZnJvbSAnLi4vLi4vb2NjL29jYy1jbXMtcGFnZS5sb2FkZXInO1xuaW1wb3J0IHsgSWRMaXN0IH0gZnJvbSAnLi4vLi4vbW9kZWwvaWRMaXN0Lm1vZGVsJztcbmltcG9ydCB7IFJvdXRpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vcm91dGluZy9pbmRleCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOYXZpZ2F0aW9uRW50cnlJdGVtRWZmZWN0cyB7XG4gIEBFZmZlY3QoKVxuICBsb2FkTmF2aWdhdGlvbkl0ZW1zJDogT2JzZXJ2YWJsZTxhbnk+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShuYXZpZ2F0aW9uSXRlbUFjdGlvbnMuTE9BRF9OQVZJR0FUSU9OX0lURU1TKSxcbiAgICBtYXAoKGFjdGlvbjogbmF2aWdhdGlvbkl0ZW1BY3Rpb25zLkxvYWROYXZpZ2F0aW9uSXRlbXMpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtYXAocGF5bG9hZCA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpZHM6IHRoaXMuZ2V0SWRMaXN0QnlJdGVtVHlwZShwYXlsb2FkLml0ZW1zKSxcbiAgICAgICAgbm9kZUlkOiBwYXlsb2FkLm5vZGVJZCxcbiAgICAgIH07XG4gICAgfSksXG4gICAgbWVyZ2VNYXAoZGF0YSA9PiB7XG4gICAgICBpZiAoZGF0YS5pZHMuY29tcG9uZW50SWRzLmlkTGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdldFJvdXRlclN0YXRlKCkucGlwZShcbiAgICAgICAgICBmaWx0ZXIocm91dGVyU3RhdGUgPT4gcm91dGVyU3RhdGUgIT09IHVuZGVmaW5lZCksXG4gICAgICAgICAgbWFwKHJvdXRlclN0YXRlID0+IHJvdXRlclN0YXRlLnN0YXRlLmNvbnRleHQpLFxuICAgICAgICAgIHRha2UoMSksXG4gICAgICAgICAgbWVyZ2VNYXAocGFnZUNvbnRleHQgPT4ge1xuICAgICAgICAgICAgLy8gZG93bmxvYWQgYWxsIGl0ZW1zIGluIG9uZSByZXF1ZXN0XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vY2NDbXNTZXJ2aWNlXG4gICAgICAgICAgICAgIC5sb2FkTGlzdENvbXBvbmVudHMoXG4gICAgICAgICAgICAgICAgZGF0YS5pZHMuY29tcG9uZW50SWRzLFxuICAgICAgICAgICAgICAgIHBhZ2VDb250ZXh0LFxuICAgICAgICAgICAgICAgICdERUZBVUxUJyxcbiAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgIGRhdGEuaWRzLmNvbXBvbmVudElkcy5pZExpc3QubGVuZ3RoXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICAgICAgbWFwKFxuICAgICAgICAgICAgICAgICAgcmVzID0+XG4gICAgICAgICAgICAgICAgICAgIG5ldyBuYXZpZ2F0aW9uSXRlbUFjdGlvbnMuTG9hZE5hdmlnYXRpb25JdGVtc1N1Y2Nlc3Moe1xuICAgICAgICAgICAgICAgICAgICAgIG5vZGVJZDogZGF0YS5ub2RlSWQsXG4gICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50czogcmVzLmNvbXBvbmVudCxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICAgICAgICAgIG9mKFxuICAgICAgICAgICAgICAgICAgICBuZXcgbmF2aWdhdGlvbkl0ZW1BY3Rpb25zLkxvYWROYXZpZ2F0aW9uSXRlbXNGYWlsKFxuICAgICAgICAgICAgICAgICAgICAgIGRhdGEubm9kZUlkLFxuICAgICAgICAgICAgICAgICAgICAgIGVycm9yXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSBpZiAoZGF0YS5pZHMucGFnZUlkcy5pZExpc3QubGVuZ3RoID4gMCkge1xuICAgICAgICAvLyBUT0RPOiBmdXR1cmUgd29ya1xuICAgICAgICAvLyBkaXNwYXRjaCBhY3Rpb24gdG8gbG9hZCBjbXMgcGFnZSBvbmUgYnkgb25lXG4gICAgICB9IGVsc2UgaWYgKGRhdGEuaWRzLm1lZGlhSWRzLmlkTGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICAgIC8vIFRPRE86IGZ1dHVyZSB3b3JrXG4gICAgICAgIC8vIHNlbmQgcmVxdWVzdCB0byBnZXQgbGlzdCBvZiBtZWRpYVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG9mKFxuICAgICAgICAgIG5ldyBuYXZpZ2F0aW9uSXRlbUFjdGlvbnMuTG9hZE5hdmlnYXRpb25JdGVtc0ZhaWwoXG4gICAgICAgICAgICBkYXRhLm5vZGVJZCxcbiAgICAgICAgICAgICduYXZpZ2F0aW9uIG5vZGVzIGFyZSBlbXB0eSdcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSlcbiAgKTtcblxuICAvLyBXZSBvbmx5IGNvbnNpZGVyIDMgaXRlbSB0eXBlczogY21zIHBhZ2UsIGNtcyBjb21wb25lbnQsIGFuZCBtZWRpYS5cbiAgZ2V0SWRMaXN0QnlJdGVtVHlwZShpdGVtTGlzdDogYW55W10pOiBhbnkge1xuICAgIGNvbnN0IHBhZ2VJZHM6IElkTGlzdCA9IHsgaWRMaXN0OiBbXSB9O1xuICAgIGNvbnN0IGNvbXBvbmVudElkczogSWRMaXN0ID0geyBpZExpc3Q6IFtdIH07XG4gICAgY29uc3QgbWVkaWFJZHM6IElkTGlzdCA9IHsgaWRMaXN0OiBbXSB9O1xuXG4gICAgaXRlbUxpc3QuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGlmIChpdGVtLnN1cGVyVHlwZSA9PT0gJ0Fic3RyYWN0Q01TQ29tcG9uZW50Jykge1xuICAgICAgICBjb21wb25lbnRJZHMuaWRMaXN0LnB1c2goaXRlbS5pZCk7XG4gICAgICB9IGVsc2UgaWYgKGl0ZW0uc3VwZXJUeXBlID09PSAnQWJzdHJhY3RQYWdlJykge1xuICAgICAgICBwYWdlSWRzLmlkTGlzdC5wdXNoKGl0ZW0uaWQpO1xuICAgICAgfSBlbHNlIGlmIChpdGVtLnN1cGVyVHlwZSA9PT0gJ0Fic3RyYWN0TWVkaWEnKSB7XG4gICAgICAgIG1lZGlhSWRzLmlkTGlzdC5wdXNoKGl0ZW0uaWQpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB7IHBhZ2VJZHM6IHBhZ2VJZHMsIGNvbXBvbmVudElkczogY29tcG9uZW50SWRzLCBtZWRpYUlkczogbWVkaWFJZHMgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBvY2NDbXNTZXJ2aWNlOiBPY2NDbXNQYWdlTG9hZGVyLFxuICAgIHByaXZhdGUgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlXG4gICkge31cbn1cbiJdfQ==
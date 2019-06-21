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
import { CmsComponentConnector } from '../../connectors/component/cms-component.connector';
import * as navigationItemActions from '../actions/navigation-entry-item.action';
export class NavigationEntryItemEffects {
    /**
     * @param {?} actions$
     * @param {?} cmsComponentConnector
     * @param {?} routingService
     */
    constructor(actions$, cmsComponentConnector, routingService) {
        this.actions$ = actions$;
        this.cmsComponentConnector = cmsComponentConnector;
        this.routingService = routingService;
        this.loadNavigationItems$ = this.actions$.pipe(ofType(navigationItemActions.LOAD_NAVIGATION_ITEMS), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), map((/**
         * @param {?} payload
         * @return {?}
         */
        payload => {
            return {
                ids: this.getIdListByItemType(payload.items),
                nodeId: payload.nodeId,
            };
        })), mergeMap((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            if (data.ids.componentIds.length > 0) {
                return this.routingService.getRouterState().pipe(filter((/**
                 * @param {?} routerState
                 * @return {?}
                 */
                routerState => routerState !== undefined)), map((/**
                 * @param {?} routerState
                 * @return {?}
                 */
                routerState => routerState.state.context)), take(1), mergeMap((/**
                 * @param {?} pageContext
                 * @return {?}
                 */
                pageContext => {
                    // download all items in one request
                    return this.cmsComponentConnector
                        .getList(data.ids.componentIds, pageContext)
                        .pipe(map((/**
                     * @param {?} components
                     * @return {?}
                     */
                    components => new navigationItemActions.LoadNavigationItemsSuccess({
                        nodeId: data.nodeId,
                        components: components,
                    }))), catchError((/**
                     * @param {?} error
                     * @return {?}
                     */
                    error => of(new navigationItemActions.LoadNavigationItemsFail(data.nodeId, error)))));
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
    /**
     * @param {?} itemList
     * @return {?}
     */
    getIdListByItemType(itemList) {
        /** @type {?} */
        const pageIds = [];
        /** @type {?} */
        const componentIds = [];
        /** @type {?} */
        const mediaIds = [];
        itemList.forEach((/**
         * @param {?} item
         * @return {?}
         */
        item => {
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
    }
}
NavigationEntryItemEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
NavigationEntryItemEffects.ctorParameters = () => [
    { type: Actions },
    { type: CmsComponentConnector },
    { type: RoutingService }
];
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], NavigationEntryItemEffects.prototype, "loadNavigationItems$", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi1lbnRyeS1pdGVtLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jbXMvc3RvcmUvZWZmZWN0cy9uYXZpZ2F0aW9uLWVudHJ5LWl0ZW0uZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDeEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDM0YsT0FBTyxLQUFLLHFCQUFxQixNQUFNLHlDQUF5QyxDQUFDO0FBR2pGLE1BQU0sT0FBTywwQkFBMEI7Ozs7OztJQTZFckMsWUFDVSxRQUFpQixFQUNqQixxQkFBNEMsRUFDNUMsY0FBOEI7UUFGOUIsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQiwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBQzVDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQTlFeEMseUJBQW9CLEdBQW9CLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUN4RCxNQUFNLENBQUMscUJBQXFCLENBQUMscUJBQXFCLENBQUMsRUFDbkQsR0FBRzs7OztRQUFDLENBQUMsTUFBaUQsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBQyxFQUMxRSxHQUFHOzs7O1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDWixPQUFP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QURDLE1BQU0sRUFBRTtzQ0FDYSxVQUFVO3dFQXFEOUI7OztJQXRERiwwREFzREU7Ozs7O0lBdUJBLDhDQUF5Qjs7Ozs7SUFDekIsMkRBQW9EOzs7OztJQUNwRCxvREFBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIGZpbHRlciwgbWFwLCBtZXJnZU1hcCwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFJvdXRpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vcm91dGluZy9pbmRleCc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnRDb25uZWN0b3IgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL2NvbXBvbmVudC9jbXMtY29tcG9uZW50LmNvbm5lY3Rvcic7XG5pbXBvcnQgKiBhcyBuYXZpZ2F0aW9uSXRlbUFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9uYXZpZ2F0aW9uLWVudHJ5LWl0ZW0uYWN0aW9uJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5hdmlnYXRpb25FbnRyeUl0ZW1FZmZlY3RzIHtcbiAgQEVmZmVjdCgpXG4gIGxvYWROYXZpZ2F0aW9uSXRlbXMkOiBPYnNlcnZhYmxlPGFueT4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKG5hdmlnYXRpb25JdGVtQWN0aW9ucy5MT0FEX05BVklHQVRJT05fSVRFTVMpLFxuICAgIG1hcCgoYWN0aW9uOiBuYXZpZ2F0aW9uSXRlbUFjdGlvbnMuTG9hZE5hdmlnYXRpb25JdGVtcykgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1hcChwYXlsb2FkID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlkczogdGhpcy5nZXRJZExpc3RCeUl0ZW1UeXBlKHBheWxvYWQuaXRlbXMpLFxuICAgICAgICBub2RlSWQ6IHBheWxvYWQubm9kZUlkLFxuICAgICAgfTtcbiAgICB9KSxcbiAgICBtZXJnZU1hcChkYXRhID0+IHtcbiAgICAgIGlmIChkYXRhLmlkcy5jb21wb25lbnRJZHMubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4gdGhpcy5yb3V0aW5nU2VydmljZS5nZXRSb3V0ZXJTdGF0ZSgpLnBpcGUoXG4gICAgICAgICAgZmlsdGVyKHJvdXRlclN0YXRlID0+IHJvdXRlclN0YXRlICE9PSB1bmRlZmluZWQpLFxuICAgICAgICAgIG1hcChyb3V0ZXJTdGF0ZSA9PiByb3V0ZXJTdGF0ZS5zdGF0ZS5jb250ZXh0KSxcbiAgICAgICAgICB0YWtlKDEpLFxuICAgICAgICAgIG1lcmdlTWFwKHBhZ2VDb250ZXh0ID0+IHtcbiAgICAgICAgICAgIC8vIGRvd25sb2FkIGFsbCBpdGVtcyBpbiBvbmUgcmVxdWVzdFxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY21zQ29tcG9uZW50Q29ubmVjdG9yXG4gICAgICAgICAgICAgIC5nZXRMaXN0KGRhdGEuaWRzLmNvbXBvbmVudElkcywgcGFnZUNvbnRleHQpXG4gICAgICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgICAgIG1hcChcbiAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHMgPT5cbiAgICAgICAgICAgICAgICAgICAgbmV3IG5hdmlnYXRpb25JdGVtQWN0aW9ucy5Mb2FkTmF2aWdhdGlvbkl0ZW1zU3VjY2Vzcyh7XG4gICAgICAgICAgICAgICAgICAgICAgbm9kZUlkOiBkYXRhLm5vZGVJZCxcbiAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRzOiBjb21wb25lbnRzLFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgICAgICAgICAgb2YoXG4gICAgICAgICAgICAgICAgICAgIG5ldyBuYXZpZ2F0aW9uSXRlbUFjdGlvbnMuTG9hZE5hdmlnYXRpb25JdGVtc0ZhaWwoXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YS5ub2RlSWQsXG4gICAgICAgICAgICAgICAgICAgICAgZXJyb3JcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIGlmIChkYXRhLmlkcy5wYWdlSWRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgLy8gVE9ETzogZnV0dXJlIHdvcmtcbiAgICAgICAgLy8gZGlzcGF0Y2ggYWN0aW9uIHRvIGxvYWQgY21zIHBhZ2Ugb25lIGJ5IG9uZVxuICAgICAgfSBlbHNlIGlmIChkYXRhLmlkcy5tZWRpYUlkcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIC8vIFRPRE86IGZ1dHVyZSB3b3JrXG4gICAgICAgIC8vIHNlbmQgcmVxdWVzdCB0byBnZXQgbGlzdCBvZiBtZWRpYVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG9mKFxuICAgICAgICAgIG5ldyBuYXZpZ2F0aW9uSXRlbUFjdGlvbnMuTG9hZE5hdmlnYXRpb25JdGVtc0ZhaWwoXG4gICAgICAgICAgICBkYXRhLm5vZGVJZCxcbiAgICAgICAgICAgICduYXZpZ2F0aW9uIG5vZGVzIGFyZSBlbXB0eSdcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSlcbiAgKTtcblxuICAvLyBXZSBvbmx5IGNvbnNpZGVyIDMgaXRlbSB0eXBlczogY21zIHBhZ2UsIGNtcyBjb21wb25lbnQsIGFuZCBtZWRpYS5cbiAgZ2V0SWRMaXN0QnlJdGVtVHlwZShcbiAgICBpdGVtTGlzdDogYW55W11cbiAgKTogeyBwYWdlSWRzOiBzdHJpbmdbXTsgY29tcG9uZW50SWRzOiBzdHJpbmdbXTsgbWVkaWFJZHM6IHN0cmluZ1tdIH0ge1xuICAgIGNvbnN0IHBhZ2VJZHM6IHN0cmluZ1tdID0gW107XG4gICAgY29uc3QgY29tcG9uZW50SWRzOiBzdHJpbmdbXSA9IFtdO1xuICAgIGNvbnN0IG1lZGlhSWRzOiBzdHJpbmdbXSA9IFtdO1xuXG4gICAgaXRlbUxpc3QuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGlmIChpdGVtLnN1cGVyVHlwZSA9PT0gJ0Fic3RyYWN0Q01TQ29tcG9uZW50Jykge1xuICAgICAgICBjb21wb25lbnRJZHMucHVzaChpdGVtLmlkKTtcbiAgICAgIH0gZWxzZSBpZiAoaXRlbS5zdXBlclR5cGUgPT09ICdBYnN0cmFjdFBhZ2UnKSB7XG4gICAgICAgIHBhZ2VJZHMucHVzaChpdGVtLmlkKTtcbiAgICAgIH0gZWxzZSBpZiAoaXRlbS5zdXBlclR5cGUgPT09ICdBYnN0cmFjdE1lZGlhJykge1xuICAgICAgICBtZWRpYUlkcy5wdXNoKGl0ZW0uaWQpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB7IHBhZ2VJZHM6IHBhZ2VJZHMsIGNvbXBvbmVudElkczogY29tcG9uZW50SWRzLCBtZWRpYUlkczogbWVkaWFJZHMgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBjbXNDb21wb25lbnRDb25uZWN0b3I6IENtc0NvbXBvbmVudENvbm5lY3RvcixcbiAgICBwcml2YXRlIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZVxuICApIHt9XG59XG4iXX0=
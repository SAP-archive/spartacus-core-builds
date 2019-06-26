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
        this.loadNavigationItems$ = this.actions$.pipe(ofType(CmsActions.LOAD_CMS_NAVIGATION_ITEMS), map((/**
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
                pageContext => 
                // download all items in one request
                this.cmsComponentConnector
                    .getList(data.ids.componentIds, pageContext)
                    .pipe(map((/**
                 * @param {?} components
                 * @return {?}
                 */
                components => new CmsActions.LoadCmsNavigationItemsSuccess({
                    nodeId: data.nodeId,
                    components: components,
                }))), catchError((/**
                 * @param {?} error
                 * @return {?}
                 */
                error => of(new CmsActions.LoadCmsNavigationItemsFail(data.nodeId, makeErrorSerializable(error)))))))));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi1lbnRyeS1pdGVtLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jbXMvc3RvcmUvZWZmZWN0cy9uYXZpZ2F0aW9uLWVudHJ5LWl0ZW0uZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDeEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDMUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDM0YsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRzlDLE1BQU0sT0FBTywwQkFBMEI7Ozs7OztJQWdGckMsWUFDVSxRQUFpQixFQUNqQixxQkFBNEMsRUFDNUMsY0FBOEI7UUFGOUIsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQiwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBQzVDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQWpGeEMseUJBQW9CLEdBR2hCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsVUFBVSxDQUFDLHlCQUF5QixDQUFDLEVBQzVDLEdBQUc7Ozs7UUFBQyxDQUFDLE1BQXlDLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVB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LE9BQU87WUFLUCxxQkFBcUI7WUFGckIsY0FBYzs7QUFRckI7SUFEQyxNQUFNLEVBQUU7c0NBQ2EsVUFBVTt3RUF3RDlCOzs7SUF6REYsMERBeURFOzs7OztJQXVCQSw4Q0FBeUI7Ozs7O0lBQ3pCLDJEQUFvRDs7Ozs7SUFDcEQsb0RBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBmaWx0ZXIsIG1hcCwgbWVyZ2VNYXAsIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBSb3V0aW5nU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3JvdXRpbmcvaW5kZXgnO1xuaW1wb3J0IHsgbWFrZUVycm9yU2VyaWFsaXphYmxlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9zZXJpYWxpemF0aW9uLXV0aWxzJztcbmltcG9ydCB7IENtc0NvbXBvbmVudENvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvY29tcG9uZW50L2Ntcy1jb21wb25lbnQuY29ubmVjdG9yJztcbmltcG9ydCB7IENtc0FjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5hdmlnYXRpb25FbnRyeUl0ZW1FZmZlY3RzIHtcbiAgQEVmZmVjdCgpXG4gIGxvYWROYXZpZ2F0aW9uSXRlbXMkOiBPYnNlcnZhYmxlPFxuICAgIHwgQ21zQWN0aW9ucy5Mb2FkQ21zTmF2aWdhdGlvbkl0ZW1zU3VjY2Vzc1xuICAgIHwgQ21zQWN0aW9ucy5Mb2FkQ21zTmF2aWdhdGlvbkl0ZW1zRmFpbFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShDbXNBY3Rpb25zLkxPQURfQ01TX05BVklHQVRJT05fSVRFTVMpLFxuICAgIG1hcCgoYWN0aW9uOiBDbXNBY3Rpb25zLkxvYWRDbXNOYXZpZ2F0aW9uSXRlbXMpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtYXAocGF5bG9hZCA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpZHM6IHRoaXMuZ2V0SWRMaXN0QnlJdGVtVHlwZShwYXlsb2FkLml0ZW1zKSxcbiAgICAgICAgbm9kZUlkOiBwYXlsb2FkLm5vZGVJZCxcbiAgICAgIH07XG4gICAgfSksXG4gICAgbWVyZ2VNYXAoZGF0YSA9PiB7XG4gICAgICBpZiAoZGF0YS5pZHMuY29tcG9uZW50SWRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucm91dGluZ1NlcnZpY2UuZ2V0Um91dGVyU3RhdGUoKS5waXBlKFxuICAgICAgICAgIGZpbHRlcihyb3V0ZXJTdGF0ZSA9PiByb3V0ZXJTdGF0ZSAhPT0gdW5kZWZpbmVkKSxcbiAgICAgICAgICBtYXAocm91dGVyU3RhdGUgPT4gcm91dGVyU3RhdGUuc3RhdGUuY29udGV4dCksXG4gICAgICAgICAgdGFrZSgxKSxcbiAgICAgICAgICBtZXJnZU1hcChwYWdlQ29udGV4dCA9PlxuICAgICAgICAgICAgLy8gZG93bmxvYWQgYWxsIGl0ZW1zIGluIG9uZSByZXF1ZXN0XG4gICAgICAgICAgICB0aGlzLmNtc0NvbXBvbmVudENvbm5lY3RvclxuICAgICAgICAgICAgICAuZ2V0TGlzdChkYXRhLmlkcy5jb21wb25lbnRJZHMsIHBhZ2VDb250ZXh0KVxuICAgICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgICBtYXAoXG4gICAgICAgICAgICAgICAgICBjb21wb25lbnRzID0+XG4gICAgICAgICAgICAgICAgICAgIG5ldyBDbXNBY3Rpb25zLkxvYWRDbXNOYXZpZ2F0aW9uSXRlbXNTdWNjZXNzKHtcbiAgICAgICAgICAgICAgICAgICAgICBub2RlSWQ6IGRhdGEubm9kZUlkLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHM6IGNvbXBvbmVudHMsXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICAgICAgICBvZihcbiAgICAgICAgICAgICAgICAgICAgbmV3IENtc0FjdGlvbnMuTG9hZENtc05hdmlnYXRpb25JdGVtc0ZhaWwoXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YS5ub2RlSWQsXG4gICAgICAgICAgICAgICAgICAgICAgbWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIGlmIChkYXRhLmlkcy5wYWdlSWRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgLy8gVE9ETzogZnV0dXJlIHdvcmtcbiAgICAgICAgLy8gZGlzcGF0Y2ggYWN0aW9uIHRvIGxvYWQgY21zIHBhZ2Ugb25lIGJ5IG9uZVxuICAgICAgfSBlbHNlIGlmIChkYXRhLmlkcy5tZWRpYUlkcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIC8vIFRPRE86IGZ1dHVyZSB3b3JrXG4gICAgICAgIC8vIHNlbmQgcmVxdWVzdCB0byBnZXQgbGlzdCBvZiBtZWRpYVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG9mKFxuICAgICAgICAgIG5ldyBDbXNBY3Rpb25zLkxvYWRDbXNOYXZpZ2F0aW9uSXRlbXNGYWlsKFxuICAgICAgICAgICAgZGF0YS5ub2RlSWQsXG4gICAgICAgICAgICAnbmF2aWdhdGlvbiBub2RlcyBhcmUgZW1wdHknXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0pXG4gICk7XG5cbiAgLy8gV2Ugb25seSBjb25zaWRlciAzIGl0ZW0gdHlwZXM6IGNtcyBwYWdlLCBjbXMgY29tcG9uZW50LCBhbmQgbWVkaWEuXG4gIGdldElkTGlzdEJ5SXRlbVR5cGUoXG4gICAgaXRlbUxpc3Q6IGFueVtdXG4gICk6IHsgcGFnZUlkczogc3RyaW5nW107IGNvbXBvbmVudElkczogc3RyaW5nW107IG1lZGlhSWRzOiBzdHJpbmdbXSB9IHtcbiAgICBjb25zdCBwYWdlSWRzOiBzdHJpbmdbXSA9IFtdO1xuICAgIGNvbnN0IGNvbXBvbmVudElkczogc3RyaW5nW10gPSBbXTtcbiAgICBjb25zdCBtZWRpYUlkczogc3RyaW5nW10gPSBbXTtcblxuICAgIGl0ZW1MaXN0LmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBpZiAoaXRlbS5zdXBlclR5cGUgPT09ICdBYnN0cmFjdENNU0NvbXBvbmVudCcpIHtcbiAgICAgICAgY29tcG9uZW50SWRzLnB1c2goaXRlbS5pZCk7XG4gICAgICB9IGVsc2UgaWYgKGl0ZW0uc3VwZXJUeXBlID09PSAnQWJzdHJhY3RQYWdlJykge1xuICAgICAgICBwYWdlSWRzLnB1c2goaXRlbS5pZCk7XG4gICAgICB9IGVsc2UgaWYgKGl0ZW0uc3VwZXJUeXBlID09PSAnQWJzdHJhY3RNZWRpYScpIHtcbiAgICAgICAgbWVkaWFJZHMucHVzaChpdGVtLmlkKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4geyBwYWdlSWRzOiBwYWdlSWRzLCBjb21wb25lbnRJZHM6IGNvbXBvbmVudElkcywgbWVkaWFJZHM6IG1lZGlhSWRzIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgY21zQ29tcG9uZW50Q29ubmVjdG9yOiBDbXNDb21wb25lbnRDb25uZWN0b3IsXG4gICAgcHJpdmF0ZSByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2VcbiAgKSB7fVxufVxuIl19
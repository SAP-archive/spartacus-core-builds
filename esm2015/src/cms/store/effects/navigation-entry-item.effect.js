/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, filter, map, mergeMap, take } from 'rxjs/operators';
import * as navigationItemActions from '../actions/navigation-entry-item.action';
import { RoutingService } from '../../../routing/index';
import { CmsComponentConnector } from '../../connectors/component/cms-component.connector';
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
        this.loadNavigationItems$ = this.actions$.pipe(ofType(navigationItemActions.LOAD_NAVIGATION_ITEMS), map((action) => action.payload), map(payload => {
            return {
                ids: this.getIdListByItemType(payload.items),
                nodeId: payload.nodeId,
            };
        }), mergeMap(data => {
            if (data.ids.componentIds.length > 0) {
                return this.routingService.getRouterState().pipe(filter(routerState => routerState !== undefined), map(routerState => routerState.state.context), take(1), mergeMap(pageContext => {
                    // download all items in one request
                    return this.cmsComponentConnector
                        .getList(data.ids.componentIds, pageContext)
                        .pipe(map(components => new navigationItemActions.LoadNavigationItemsSuccess({
                        nodeId: data.nodeId,
                        components: components,
                    })), catchError(error => of(new navigationItemActions.LoadNavigationItemsFail(data.nodeId, error))));
                }));
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
        }));
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
        itemList.forEach(item => {
            if (item.superType === 'AbstractCMSComponent') {
                componentIds.push(item.id);
            }
            else if (item.superType === 'AbstractPage') {
                pageIds.push(item.id);
            }
            else if (item.superType === 'AbstractMedia') {
                mediaIds.push(item.id);
            }
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi1lbnRyeS1pdGVtLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jbXMvc3RvcmUvZWZmZWN0cy9uYXZpZ2F0aW9uLWVudHJ5LWl0ZW0uZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEtBQUsscUJBQXFCLE1BQU0seUNBQXlDLENBQUM7QUFDakYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBRzNGLE1BQU0sT0FBTywwQkFBMEI7Ozs7OztJQTZFckMsWUFDVSxRQUFpQixFQUNqQixxQkFBNEMsRUFDNUMsY0FBOEI7UUFGOUIsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQiwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBQzVDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQTlFeEMseUJBQW9CLEdBQW9CLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUN4RCxNQUFNLENBQUMscUJBQXFCLENBQUMscUJBQXFCLENBQUMsRUFDbkQsR0FBRyxDQUFDLENBQUMsTUFBaUQsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUMxRSxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDWixPQUFPO2dCQUNM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Ozs7SUF0REYsMERBc0RFOzs7OztJQXVCQSw4Q0FBeUI7Ozs7O0lBQ3pCLDJEQUFvRDs7Ozs7SUFDcEQsb0RBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBmaWx0ZXIsIG1hcCwgbWVyZ2VNYXAsIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgKiBhcyBuYXZpZ2F0aW9uSXRlbUFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9uYXZpZ2F0aW9uLWVudHJ5LWl0ZW0uYWN0aW9uJztcbmltcG9ydCB7IFJvdXRpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vcm91dGluZy9pbmRleCc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnRDb25uZWN0b3IgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL2NvbXBvbmVudC9jbXMtY29tcG9uZW50LmNvbm5lY3Rvcic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOYXZpZ2F0aW9uRW50cnlJdGVtRWZmZWN0cyB7XG4gIEBFZmZlY3QoKVxuICBsb2FkTmF2aWdhdGlvbkl0ZW1zJDogT2JzZXJ2YWJsZTxhbnk+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShuYXZpZ2F0aW9uSXRlbUFjdGlvbnMuTE9BRF9OQVZJR0FUSU9OX0lURU1TKSxcbiAgICBtYXAoKGFjdGlvbjogbmF2aWdhdGlvbkl0ZW1BY3Rpb25zLkxvYWROYXZpZ2F0aW9uSXRlbXMpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtYXAocGF5bG9hZCA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpZHM6IHRoaXMuZ2V0SWRMaXN0QnlJdGVtVHlwZShwYXlsb2FkLml0ZW1zKSxcbiAgICAgICAgbm9kZUlkOiBwYXlsb2FkLm5vZGVJZCxcbiAgICAgIH07XG4gICAgfSksXG4gICAgbWVyZ2VNYXAoZGF0YSA9PiB7XG4gICAgICBpZiAoZGF0YS5pZHMuY29tcG9uZW50SWRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucm91dGluZ1NlcnZpY2UuZ2V0Um91dGVyU3RhdGUoKS5waXBlKFxuICAgICAgICAgIGZpbHRlcihyb3V0ZXJTdGF0ZSA9PiByb3V0ZXJTdGF0ZSAhPT0gdW5kZWZpbmVkKSxcbiAgICAgICAgICBtYXAocm91dGVyU3RhdGUgPT4gcm91dGVyU3RhdGUuc3RhdGUuY29udGV4dCksXG4gICAgICAgICAgdGFrZSgxKSxcbiAgICAgICAgICBtZXJnZU1hcChwYWdlQ29udGV4dCA9PiB7XG4gICAgICAgICAgICAvLyBkb3dubG9hZCBhbGwgaXRlbXMgaW4gb25lIHJlcXVlc3RcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNtc0NvbXBvbmVudENvbm5lY3RvclxuICAgICAgICAgICAgICAuZ2V0TGlzdChkYXRhLmlkcy5jb21wb25lbnRJZHMsIHBhZ2VDb250ZXh0KVxuICAgICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgICBtYXAoXG4gICAgICAgICAgICAgICAgICBjb21wb25lbnRzID0+XG4gICAgICAgICAgICAgICAgICAgIG5ldyBuYXZpZ2F0aW9uSXRlbUFjdGlvbnMuTG9hZE5hdmlnYXRpb25JdGVtc1N1Y2Nlc3Moe1xuICAgICAgICAgICAgICAgICAgICAgIG5vZGVJZDogZGF0YS5ub2RlSWQsXG4gICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50czogY29tcG9uZW50cyxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICAgICAgICAgIG9mKFxuICAgICAgICAgICAgICAgICAgICBuZXcgbmF2aWdhdGlvbkl0ZW1BY3Rpb25zLkxvYWROYXZpZ2F0aW9uSXRlbXNGYWlsKFxuICAgICAgICAgICAgICAgICAgICAgIGRhdGEubm9kZUlkLFxuICAgICAgICAgICAgICAgICAgICAgIGVycm9yXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSBpZiAoZGF0YS5pZHMucGFnZUlkcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIC8vIFRPRE86IGZ1dHVyZSB3b3JrXG4gICAgICAgIC8vIGRpc3BhdGNoIGFjdGlvbiB0byBsb2FkIGNtcyBwYWdlIG9uZSBieSBvbmVcbiAgICAgIH0gZWxzZSBpZiAoZGF0YS5pZHMubWVkaWFJZHMubGVuZ3RoID4gMCkge1xuICAgICAgICAvLyBUT0RPOiBmdXR1cmUgd29ya1xuICAgICAgICAvLyBzZW5kIHJlcXVlc3QgdG8gZ2V0IGxpc3Qgb2YgbWVkaWFcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBvZihcbiAgICAgICAgICBuZXcgbmF2aWdhdGlvbkl0ZW1BY3Rpb25zLkxvYWROYXZpZ2F0aW9uSXRlbXNGYWlsKFxuICAgICAgICAgICAgZGF0YS5ub2RlSWQsXG4gICAgICAgICAgICAnbmF2aWdhdGlvbiBub2RlcyBhcmUgZW1wdHknXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0pXG4gICk7XG5cbiAgLy8gV2Ugb25seSBjb25zaWRlciAzIGl0ZW0gdHlwZXM6IGNtcyBwYWdlLCBjbXMgY29tcG9uZW50LCBhbmQgbWVkaWEuXG4gIGdldElkTGlzdEJ5SXRlbVR5cGUoXG4gICAgaXRlbUxpc3Q6IGFueVtdXG4gICk6IHsgcGFnZUlkczogc3RyaW5nW107IGNvbXBvbmVudElkczogc3RyaW5nW107IG1lZGlhSWRzOiBzdHJpbmdbXSB9IHtcbiAgICBjb25zdCBwYWdlSWRzOiBzdHJpbmdbXSA9IFtdO1xuICAgIGNvbnN0IGNvbXBvbmVudElkczogc3RyaW5nW10gPSBbXTtcbiAgICBjb25zdCBtZWRpYUlkczogc3RyaW5nW10gPSBbXTtcblxuICAgIGl0ZW1MaXN0LmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBpZiAoaXRlbS5zdXBlclR5cGUgPT09ICdBYnN0cmFjdENNU0NvbXBvbmVudCcpIHtcbiAgICAgICAgY29tcG9uZW50SWRzLnB1c2goaXRlbS5pZCk7XG4gICAgICB9IGVsc2UgaWYgKGl0ZW0uc3VwZXJUeXBlID09PSAnQWJzdHJhY3RQYWdlJykge1xuICAgICAgICBwYWdlSWRzLnB1c2goaXRlbS5pZCk7XG4gICAgICB9IGVsc2UgaWYgKGl0ZW0uc3VwZXJUeXBlID09PSAnQWJzdHJhY3RNZWRpYScpIHtcbiAgICAgICAgbWVkaWFJZHMucHVzaChpdGVtLmlkKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4geyBwYWdlSWRzOiBwYWdlSWRzLCBjb21wb25lbnRJZHM6IGNvbXBvbmVudElkcywgbWVkaWFJZHM6IG1lZGlhSWRzIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgY21zQ29tcG9uZW50Q29ubmVjdG9yOiBDbXNDb21wb25lbnRDb25uZWN0b3IsXG4gICAgcHJpdmF0ZSByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2VcbiAgKSB7fVxufVxuIl19
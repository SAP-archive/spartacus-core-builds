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
export class NavigationEntryItemEffects {
    /**
     * @param {?} actions$
     * @param {?} occCmsService
     * @param {?} routingService
     */
    constructor(actions$, occCmsService, routingService) {
        this.actions$ = actions$;
        this.occCmsService = occCmsService;
        this.routingService = routingService;
        this.loadNavigationItems$ = this.actions$.pipe(ofType(navigationItemActions.LOAD_NAVIGATION_ITEMS), map((action) => action.payload), map(payload => {
            return {
                ids: this.getIdListByItemType(payload.items),
                nodeId: payload.nodeId,
            };
        }), mergeMap(data => {
            if (data.ids.componentIds.idList.length > 0) {
                return this.routingService.getRouterState().pipe(filter(routerState => routerState !== undefined), map(routerState => routerState.state.context), take(1), mergeMap(pageContext => {
                    // download all items in one request
                    return this.occCmsService
                        .loadListComponents(data.ids.componentIds, pageContext, 'DEFAULT', 0, data.ids.componentIds.idList.length)
                        .pipe(map(res => new navigationItemActions.LoadNavigationItemsSuccess({
                        nodeId: data.nodeId,
                        components: res.component,
                    })), catchError(error => of(new navigationItemActions.LoadNavigationItemsFail(data.nodeId, error))));
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
    /**
     * @param {?} itemList
     * @return {?}
     */
    getIdListByItemType(itemList) {
        /** @type {?} */
        const pageIds = { idList: [] };
        /** @type {?} */
        const componentIds = { idList: [] };
        /** @type {?} */
        const mediaIds = { idList: [] };
        itemList.forEach(item => {
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
    }
}
NavigationEntryItemEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
NavigationEntryItemEffects.ctorParameters = () => [
    { type: Actions },
    { type: OccCmsPageLoader },
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
    NavigationEntryItemEffects.prototype.occCmsService;
    /**
     * @type {?}
     * @private
     */
    NavigationEntryItemEffects.prototype.routingService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi1lbnRyeS1pdGVtLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jbXMvc3RvcmUvZWZmZWN0cy9uYXZpZ2F0aW9uLWVudHJ5LWl0ZW0uZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6RSxPQUFPLEtBQUsscUJBQXFCLE1BQU0seUNBQXlDLENBQUM7QUFDakYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFakUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBR3hELE1BQU0sT0FBTywwQkFBMEI7Ozs7OztJQWlGckMsWUFDVSxRQUFpQixFQUNqQixhQUErQixFQUMvQixjQUE4QjtRQUY5QixhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLGtCQUFhLEdBQWIsYUFBYSxDQUFrQjtRQUMvQixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFsRnhDLHlCQUFvQixHQUFvQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDeEQsTUFBTSxDQUFDLHFCQUFxQixDQUFDLHFCQUFxQixDQUFDLEVBQ25ELEdBQUcsQ0FBQyxDQUFDLE1BQWlELEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFDMUUsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1osT0FBTztnQkFDTCxHQUFH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SCxDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxDQUFDO0lBQzlFLENBQUM7OztZQWhGRixVQUFVOzs7O1lBVE0sT0FBTztZQUtmLGdCQUFnQjtZQUVoQixjQUFjOztBQUtyQjtJQURDLE1BQU0sRUFBRTtzQ0FDYSxVQUFVO3dFQTJEOUI7OztJQTVERiwwREE0REU7Ozs7O0lBcUJBLDhDQUF5Qjs7Ozs7SUFDekIsbURBQXVDOzs7OztJQUN2QyxvREFBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEVmZmVjdCwgQWN0aW9ucywgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBjYXRjaEVycm9yLCBmaWx0ZXIsIG1lcmdlTWFwLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgKiBhcyBuYXZpZ2F0aW9uSXRlbUFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9uYXZpZ2F0aW9uLWVudHJ5LWl0ZW0uYWN0aW9uJztcbmltcG9ydCB7IE9jY0Ntc1BhZ2VMb2FkZXIgfSBmcm9tICcuLi8uLi9vY2Mvb2NjLWNtcy1wYWdlLmxvYWRlcic7XG5pbXBvcnQgeyBJZExpc3QgfSBmcm9tICcuLi8uLi9tb2RlbC9pZExpc3QubW9kZWwnO1xuaW1wb3J0IHsgUm91dGluZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9yb3V0aW5nL2luZGV4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5hdmlnYXRpb25FbnRyeUl0ZW1FZmZlY3RzIHtcbiAgQEVmZmVjdCgpXG4gIGxvYWROYXZpZ2F0aW9uSXRlbXMkOiBPYnNlcnZhYmxlPGFueT4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKG5hdmlnYXRpb25JdGVtQWN0aW9ucy5MT0FEX05BVklHQVRJT05fSVRFTVMpLFxuICAgIG1hcCgoYWN0aW9uOiBuYXZpZ2F0aW9uSXRlbUFjdGlvbnMuTG9hZE5hdmlnYXRpb25JdGVtcykgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1hcChwYXlsb2FkID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlkczogdGhpcy5nZXRJZExpc3RCeUl0ZW1UeXBlKHBheWxvYWQuaXRlbXMpLFxuICAgICAgICBub2RlSWQ6IHBheWxvYWQubm9kZUlkLFxuICAgICAgfTtcbiAgICB9KSxcbiAgICBtZXJnZU1hcChkYXRhID0+IHtcbiAgICAgIGlmIChkYXRhLmlkcy5jb21wb25lbnRJZHMuaWRMaXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucm91dGluZ1NlcnZpY2UuZ2V0Um91dGVyU3RhdGUoKS5waXBlKFxuICAgICAgICAgIGZpbHRlcihyb3V0ZXJTdGF0ZSA9PiByb3V0ZXJTdGF0ZSAhPT0gdW5kZWZpbmVkKSxcbiAgICAgICAgICBtYXAocm91dGVyU3RhdGUgPT4gcm91dGVyU3RhdGUuc3RhdGUuY29udGV4dCksXG4gICAgICAgICAgdGFrZSgxKSxcbiAgICAgICAgICBtZXJnZU1hcChwYWdlQ29udGV4dCA9PiB7XG4gICAgICAgICAgICAvLyBkb3dubG9hZCBhbGwgaXRlbXMgaW4gb25lIHJlcXVlc3RcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9jY0Ntc1NlcnZpY2VcbiAgICAgICAgICAgICAgLmxvYWRMaXN0Q29tcG9uZW50cyhcbiAgICAgICAgICAgICAgICBkYXRhLmlkcy5jb21wb25lbnRJZHMsXG4gICAgICAgICAgICAgICAgcGFnZUNvbnRleHQsXG4gICAgICAgICAgICAgICAgJ0RFRkFVTFQnLFxuICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgZGF0YS5pZHMuY29tcG9uZW50SWRzLmlkTGlzdC5sZW5ndGhcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgICBtYXAoXG4gICAgICAgICAgICAgICAgICByZXMgPT5cbiAgICAgICAgICAgICAgICAgICAgbmV3IG5hdmlnYXRpb25JdGVtQWN0aW9ucy5Mb2FkTmF2aWdhdGlvbkl0ZW1zU3VjY2Vzcyh7XG4gICAgICAgICAgICAgICAgICAgICAgbm9kZUlkOiBkYXRhLm5vZGVJZCxcbiAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRzOiByZXMuY29tcG9uZW50LFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgICAgICAgICAgb2YoXG4gICAgICAgICAgICAgICAgICAgIG5ldyBuYXZpZ2F0aW9uSXRlbUFjdGlvbnMuTG9hZE5hdmlnYXRpb25JdGVtc0ZhaWwoXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YS5ub2RlSWQsXG4gICAgICAgICAgICAgICAgICAgICAgZXJyb3JcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIGlmIChkYXRhLmlkcy5wYWdlSWRzLmlkTGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICAgIC8vIFRPRE86IGZ1dHVyZSB3b3JrXG4gICAgICAgIC8vIGRpc3BhdGNoIGFjdGlvbiB0byBsb2FkIGNtcyBwYWdlIG9uZSBieSBvbmVcbiAgICAgIH0gZWxzZSBpZiAoZGF0YS5pZHMubWVkaWFJZHMuaWRMaXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgLy8gVE9ETzogZnV0dXJlIHdvcmtcbiAgICAgICAgLy8gc2VuZCByZXF1ZXN0IHRvIGdldCBsaXN0IG9mIG1lZGlhXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gb2YoXG4gICAgICAgICAgbmV3IG5hdmlnYXRpb25JdGVtQWN0aW9ucy5Mb2FkTmF2aWdhdGlvbkl0ZW1zRmFpbChcbiAgICAgICAgICAgIGRhdGEubm9kZUlkLFxuICAgICAgICAgICAgJ25hdmlnYXRpb24gbm9kZXMgYXJlIGVtcHR5J1xuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KVxuICApO1xuXG4gIC8vIFdlIG9ubHkgY29uc2lkZXIgMyBpdGVtIHR5cGVzOiBjbXMgcGFnZSwgY21zIGNvbXBvbmVudCwgYW5kIG1lZGlhLlxuICBnZXRJZExpc3RCeUl0ZW1UeXBlKGl0ZW1MaXN0OiBhbnlbXSk6IGFueSB7XG4gICAgY29uc3QgcGFnZUlkczogSWRMaXN0ID0geyBpZExpc3Q6IFtdIH07XG4gICAgY29uc3QgY29tcG9uZW50SWRzOiBJZExpc3QgPSB7IGlkTGlzdDogW10gfTtcbiAgICBjb25zdCBtZWRpYUlkczogSWRMaXN0ID0geyBpZExpc3Q6IFtdIH07XG5cbiAgICBpdGVtTGlzdC5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgaWYgKGl0ZW0uc3VwZXJUeXBlID09PSAnQWJzdHJhY3RDTVNDb21wb25lbnQnKSB7XG4gICAgICAgIGNvbXBvbmVudElkcy5pZExpc3QucHVzaChpdGVtLmlkKTtcbiAgICAgIH0gZWxzZSBpZiAoaXRlbS5zdXBlclR5cGUgPT09ICdBYnN0cmFjdFBhZ2UnKSB7XG4gICAgICAgIHBhZ2VJZHMuaWRMaXN0LnB1c2goaXRlbS5pZCk7XG4gICAgICB9IGVsc2UgaWYgKGl0ZW0uc3VwZXJUeXBlID09PSAnQWJzdHJhY3RNZWRpYScpIHtcbiAgICAgICAgbWVkaWFJZHMuaWRMaXN0LnB1c2goaXRlbS5pZCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHsgcGFnZUlkczogcGFnZUlkcywgY29tcG9uZW50SWRzOiBjb21wb25lbnRJZHMsIG1lZGlhSWRzOiBtZWRpYUlkcyB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIG9jY0Ntc1NlcnZpY2U6IE9jY0Ntc1BhZ2VMb2FkZXIsXG4gICAgcHJpdmF0ZSByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2VcbiAgKSB7fVxufVxuIl19
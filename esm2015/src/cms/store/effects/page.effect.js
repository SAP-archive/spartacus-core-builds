/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map, catchError, switchMap, mergeMap, filter, take, } from 'rxjs/operators';
import * as componentActions from '../actions/component.action';
import * as pageActions from '../actions/page.action';
import { RoutingService } from '../../../routing/index';
import { LOGIN, LOGOUT } from '../../../auth/store/actions/login-logout.action';
import { LANGUAGE_CHANGE } from '../../../site-context/store/actions/languages.action';
import { CmsPageLoader } from '../../services/cms-page.loader';
export class PageEffects {
    /**
     * @param {?} actions$
     * @param {?} cmsPageLoader
     * @param {?} routingService
     */
    constructor(actions$, cmsPageLoader, routingService) {
        this.actions$ = actions$;
        this.cmsPageLoader = cmsPageLoader;
        this.routingService = routingService;
        this.refreshPage$ = this.actions$.pipe(ofType(LANGUAGE_CHANGE, LOGOUT, LOGIN), switchMap(_ => this.routingService.getRouterState().pipe(filter(routerState => routerState && routerState.state && routerState.state.cmsRequired), map(routerState => routerState.state.context), take(1), mergeMap(context => of(new pageActions.LoadPageData(context))))));
        this.loadPageData$ = this.actions$.pipe(ofType(pageActions.LOAD_PAGE_DATA), map((action) => action.payload), switchMap(pageContext => {
            return this.cmsPageLoader.get(pageContext).pipe(mergeMap((cmsStructure) => {
                return [
                    new pageActions.LoadPageDataSuccess(pageContext, cmsStructure.page),
                    new componentActions.GetComponentFromPage(cmsStructure.components),
                ];
            }), catchError(error => {
                return of(new pageActions.LoadPageDataFail(pageContext, error));
            }));
        }));
    }
}
PageEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
PageEffects.ctorParameters = () => [
    { type: Actions },
    { type: CmsPageLoader },
    { type: RoutingService }
];
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], PageEffects.prototype, "refreshPage$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], PageEffects.prototype, "loadPageData$", void 0);
if (false) {
    /** @type {?} */
    PageEffects.prototype.refreshPage$;
    /** @type {?} */
    PageEffects.prototype.loadPageData$;
    /**
     * @type {?}
     * @private
     */
    PageEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    PageEffects.prototype.cmsPageLoader;
    /**
     * @type {?}
     * @private
     */
    PageEffects.prototype.routingService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL3N0b3JlL2VmZmVjdHMvcGFnZS5lZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUd4RCxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQ0wsR0FBRyxFQUNILFVBQVUsRUFDVixTQUFTLEVBQ1QsUUFBUSxFQUNSLE1BQU0sRUFDTixJQUFJLEdBQ0wsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4QixPQUFPLEtBQUssZ0JBQWdCLE1BQU0sNkJBQTZCLENBQUM7QUFDaEUsT0FBTyxLQUFLLFdBQVcsTUFBTSx3QkFBd0IsQ0FBQztBQUV0RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDeEQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUNoRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFDdkYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBSS9ELE1BQU0sT0FBTyxXQUFXOzs7Ozs7SUFvQ3RCLFlBQ1UsUUFBaUIsRUFDakIsYUFBaUMsRUFDakMsY0FBOEI7UUFGOUIsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixrQkFBYSxHQUFiLGFBQWEsQ0FBb0I7UUFDakMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBckN4QyxpQkFBWSxHQUF1QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDbkQsTUFBTSxDQUFDLGVBQWUsRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLEVBQ3RDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUNaLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxFQUFFLENBQUMsSUFBSSxDQUN2QyxNQUFNLENBQ0osV0FBVyxDQUFDLEVBQUUsQ0FDWixXQUFXLElBQUksV0FBVyxDQUFDLEtBQUssSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FDcEUsRUFDRCxHQUFHLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUM3QyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ1AsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksV0FBVyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQy9ELENBQ0YsQ0FDRixDQUFDO1FBR0Ysa0JBQWEsR0FBdUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BELE1BQU0sQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLEVBQ2xDLEdBQUcsQ0FBQyxDQUFDLE1BQWdDLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFDekQsU0FBUyxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQ3RCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUM3QyxRQUFRLENBQUMsQ0FBQyxZQUErQixFQUFFLEVBQUU7Z0JBQzNDLE9BQU87b0JBQ0wsSUFBSSxXQUFXLENBQUMsbUJBQW1CLENBQUMsV0FBVyxFQUFFLFlBQVksQ0FBQyxJQUFJLENBQUM7b0JBQ25FLElBQUksZ0JBQWdCLENBQUMsb0JBQW9CLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQztpQkFDbkUsQ0FBQztZQUNKLENBQUMsQ0FBQyxFQUNGLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDakIsT0FBTyxFQUFFLENBQUMsSUFBSSxXQUFXLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDbEUsQ0FBQyxDQUFDLENBQ0gsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUNILENBQUM7SUFNQyxDQUFDOzs7WUF6Q0wsVUFBVTs7OztZQXRCTSxPQUFPO1lBbUJmLGFBQWE7WUFIYixjQUFjOztBQVNyQjtJQURDLE1BQU0sRUFBRTtzQ0FDSyxVQUFVO2lEQWF0QjtBQUdGO0lBREMsTUFBTSxFQUFFO3NDQUNNLFVBQVU7a0RBZ0J2Qjs7O0lBakNGLG1DQWNFOztJQUVGLG9DQWlCRTs7Ozs7SUFHQSwrQkFBeUI7Ozs7O0lBQ3pCLG9DQUF5Qzs7Ozs7SUFDekMscUNBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBFZmZlY3QsIEFjdGlvbnMsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgbWFwLFxuICBjYXRjaEVycm9yLFxuICBzd2l0Y2hNYXAsXG4gIG1lcmdlTWFwLFxuICBmaWx0ZXIsXG4gIHRha2UsXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0ICogYXMgY29tcG9uZW50QWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL2NvbXBvbmVudC5hY3Rpb24nO1xuaW1wb3J0ICogYXMgcGFnZUFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9wYWdlLmFjdGlvbic7XG5cbmltcG9ydCB7IFJvdXRpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vcm91dGluZy9pbmRleCc7XG5pbXBvcnQgeyBMT0dJTiwgTE9HT1VUIH0gZnJvbSAnLi4vLi4vLi4vYXV0aC9zdG9yZS9hY3Rpb25zL2xvZ2luLWxvZ291dC5hY3Rpb24nO1xuaW1wb3J0IHsgTEFOR1VBR0VfQ0hBTkdFIH0gZnJvbSAnLi4vLi4vLi4vc2l0ZS1jb250ZXh0L3N0b3JlL2FjdGlvbnMvbGFuZ3VhZ2VzLmFjdGlvbic7XG5pbXBvcnQgeyBDbXNQYWdlTG9hZGVyIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY21zLXBhZ2UubG9hZGVyJztcbmltcG9ydCB7IENtc1N0cnVjdHVyZU1vZGVsIH0gZnJvbSAnLi4vLi4vbW9kZWwvcGFnZS5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQYWdlRWZmZWN0cyB7XG4gIEBFZmZlY3QoKVxuICByZWZyZXNoUGFnZSQ6IE9ic2VydmFibGU8QWN0aW9uPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoTEFOR1VBR0VfQ0hBTkdFLCBMT0dPVVQsIExPR0lOKSxcbiAgICBzd2l0Y2hNYXAoXyA9PlxuICAgICAgdGhpcy5yb3V0aW5nU2VydmljZS5nZXRSb3V0ZXJTdGF0ZSgpLnBpcGUoXG4gICAgICAgIGZpbHRlcihcbiAgICAgICAgICByb3V0ZXJTdGF0ZSA9PlxuICAgICAgICAgICAgcm91dGVyU3RhdGUgJiYgcm91dGVyU3RhdGUuc3RhdGUgJiYgcm91dGVyU3RhdGUuc3RhdGUuY21zUmVxdWlyZWRcbiAgICAgICAgKSxcbiAgICAgICAgbWFwKHJvdXRlclN0YXRlID0+IHJvdXRlclN0YXRlLnN0YXRlLmNvbnRleHQpLFxuICAgICAgICB0YWtlKDEpLFxuICAgICAgICBtZXJnZU1hcChjb250ZXh0ID0+IG9mKG5ldyBwYWdlQWN0aW9ucy5Mb2FkUGFnZURhdGEoY29udGV4dCkpKVxuICAgICAgKVxuICAgIClcbiAgKTtcblxuICBARWZmZWN0KClcbiAgbG9hZFBhZ2VEYXRhJDogT2JzZXJ2YWJsZTxBY3Rpb24+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShwYWdlQWN0aW9ucy5MT0FEX1BBR0VfREFUQSksXG4gICAgbWFwKChhY3Rpb246IHBhZ2VBY3Rpb25zLkxvYWRQYWdlRGF0YSkgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIHN3aXRjaE1hcChwYWdlQ29udGV4dCA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5jbXNQYWdlTG9hZGVyLmdldChwYWdlQ29udGV4dCkucGlwZShcbiAgICAgICAgbWVyZ2VNYXAoKGNtc1N0cnVjdHVyZTogQ21zU3RydWN0dXJlTW9kZWwpID0+IHtcbiAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgbmV3IHBhZ2VBY3Rpb25zLkxvYWRQYWdlRGF0YVN1Y2Nlc3MocGFnZUNvbnRleHQsIGNtc1N0cnVjdHVyZS5wYWdlKSxcbiAgICAgICAgICAgIG5ldyBjb21wb25lbnRBY3Rpb25zLkdldENvbXBvbmVudEZyb21QYWdlKGNtc1N0cnVjdHVyZS5jb21wb25lbnRzKSxcbiAgICAgICAgICBdO1xuICAgICAgICB9KSxcbiAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiB7XG4gICAgICAgICAgcmV0dXJuIG9mKG5ldyBwYWdlQWN0aW9ucy5Mb2FkUGFnZURhdGFGYWlsKHBhZ2VDb250ZXh0LCBlcnJvcikpO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBjbXNQYWdlTG9hZGVyOiBDbXNQYWdlTG9hZGVyPGFueT4sXG4gICAgcHJpdmF0ZSByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2VcbiAgKSB7fVxufVxuIl19
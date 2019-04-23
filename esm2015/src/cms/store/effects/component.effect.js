/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, filter, groupBy, map, mergeMap, switchMap, take, } from 'rxjs/operators';
import { RoutingService } from '../../../routing/index';
import { CmsComponentConnector } from '../../connectors/component/cms-component.connector';
import * as componentActions from '../actions/component.action';
export class ComponentEffects {
    /**
     * @param {?} actions$
     * @param {?} cmsComponentLoader
     * @param {?} routingService
     */
    constructor(actions$, cmsComponentLoader, routingService) {
        this.actions$ = actions$;
        this.cmsComponentLoader = cmsComponentLoader;
        this.routingService = routingService;
        this.loadComponent$ = this.actions$.pipe(ofType(componentActions.LOAD_COMPONENT), map((action) => action.payload), groupBy(uid => uid), mergeMap(group => group.pipe(switchMap(uid => {
            return this.routingService.getRouterState().pipe(filter(routerState => routerState !== undefined), map(routerState => routerState.state.context), take(1), mergeMap(pageContext => this.cmsComponentLoader.get(uid, pageContext).pipe(map(data => new componentActions.LoadComponentSuccess(data)), catchError(error => of(new componentActions.LoadComponentFail(uid, error))))));
        }))));
    }
}
ComponentEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ComponentEffects.ctorParameters = () => [
    { type: Actions },
    { type: CmsComponentConnector },
    { type: RoutingService }
];
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], ComponentEffects.prototype, "loadComponent$", void 0);
if (false) {
    /** @type {?} */
    ComponentEffects.prototype.loadComponent$;
    /**
     * @type {?}
     * @private
     */
    ComponentEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    ComponentEffects.prototype.cmsComponentLoader;
    /**
     * @type {?}
     * @private
     */
    ComponentEffects.prototype.routingService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jbXMvc3RvcmUvZWZmZWN0cy9jb21wb25lbnQuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUNMLFVBQVUsRUFDVixNQUFNLEVBQ04sT0FBTyxFQUNQLEdBQUcsRUFDSCxRQUFRLEVBQ1IsU0FBUyxFQUNULElBQUksR0FDTCxNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUMzRixPQUFPLEtBQUssZ0JBQWdCLE1BQU0sNkJBQTZCLENBQUM7QUFHaEUsTUFBTSxPQUFPLGdCQUFnQjs7Ozs7O0lBQzNCLFlBQ1UsUUFBaUIsRUFDakIsa0JBQXlDLEVBQ3pDLGNBQThCO1FBRjlCLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUF1QjtRQUN6QyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFJeEMsbUJBQWMsR0FBb0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ2xELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsRUFDdkMsR0FBRyxDQUFDLENBQUMsTUFBc0MsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUMvRCxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFDbkIsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQ2YsS0FBSyxDQUFDLElBQUksQ0FDUixTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDZCxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxFQUFFLENBQUMsSUFBSSxDQUM5QyxNQUFNLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxXQUFXLEtBQUssU0FBUyxDQUFDLEVBQ2hELEdBQUcsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQzdDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFDUCxRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FDckIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUNoRCxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLGdCQUFnQixDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDLEVBQzVELFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUNqQixFQUFFLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FDdkQsQ0FDRixDQUNGLENBQ0YsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUNILENBQ0YsQ0FDRixDQUFDO0lBMUJDLENBQUM7OztZQU5MLFVBQVU7Ozs7WUFmRixPQUFPO1lBWVAscUJBQXFCO1lBRHJCLGNBQWM7O0FBYXJCO0lBREMsTUFBTSxFQUFFO3NDQUNPLFVBQVU7d0RBdUJ4Qjs7O0lBeEJGLDBDQXdCRTs7Ozs7SUE3QkEsb0NBQXlCOzs7OztJQUN6Qiw4Q0FBaUQ7Ozs7O0lBQ2pELDBDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgY2F0Y2hFcnJvcixcbiAgZmlsdGVyLFxuICBncm91cEJ5LFxuICBtYXAsXG4gIG1lcmdlTWFwLFxuICBzd2l0Y2hNYXAsXG4gIHRha2UsXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFJvdXRpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vcm91dGluZy9pbmRleCc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnRDb25uZWN0b3IgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL2NvbXBvbmVudC9jbXMtY29tcG9uZW50LmNvbm5lY3Rvcic7XG5pbXBvcnQgKiBhcyBjb21wb25lbnRBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvY29tcG9uZW50LmFjdGlvbic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb21wb25lbnRFZmZlY3RzIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIGNtc0NvbXBvbmVudExvYWRlcjogQ21zQ29tcG9uZW50Q29ubmVjdG9yLFxuICAgIHByaXZhdGUgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlXG4gICkge31cblxuICBARWZmZWN0KClcbiAgbG9hZENvbXBvbmVudCQ6IE9ic2VydmFibGU8YW55PiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoY29tcG9uZW50QWN0aW9ucy5MT0FEX0NPTVBPTkVOVCksXG4gICAgbWFwKChhY3Rpb246IGNvbXBvbmVudEFjdGlvbnMuTG9hZENvbXBvbmVudCkgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIGdyb3VwQnkodWlkID0+IHVpZCksXG4gICAgbWVyZ2VNYXAoZ3JvdXAgPT5cbiAgICAgIGdyb3VwLnBpcGUoXG4gICAgICAgIHN3aXRjaE1hcCh1aWQgPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdldFJvdXRlclN0YXRlKCkucGlwZShcbiAgICAgICAgICAgIGZpbHRlcihyb3V0ZXJTdGF0ZSA9PiByb3V0ZXJTdGF0ZSAhPT0gdW5kZWZpbmVkKSxcbiAgICAgICAgICAgIG1hcChyb3V0ZXJTdGF0ZSA9PiByb3V0ZXJTdGF0ZS5zdGF0ZS5jb250ZXh0KSxcbiAgICAgICAgICAgIHRha2UoMSksXG4gICAgICAgICAgICBtZXJnZU1hcChwYWdlQ29udGV4dCA9PlxuICAgICAgICAgICAgICB0aGlzLmNtc0NvbXBvbmVudExvYWRlci5nZXQodWlkLCBwYWdlQ29udGV4dCkucGlwZShcbiAgICAgICAgICAgICAgICBtYXAoZGF0YSA9PiBuZXcgY29tcG9uZW50QWN0aW9ucy5Mb2FkQ29tcG9uZW50U3VjY2VzcyhkYXRhKSksXG4gICAgICAgICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgICAgICAgICAgb2YobmV3IGNvbXBvbmVudEFjdGlvbnMuTG9hZENvbXBvbmVudEZhaWwodWlkLCBlcnJvcikpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICApXG4gICk7XG59XG4iXX0=
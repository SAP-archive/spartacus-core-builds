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
var ComponentEffects = /** @class */ (function () {
    function ComponentEffects(actions$, cmsComponentLoader, routingService) {
        var _this = this;
        this.actions$ = actions$;
        this.cmsComponentLoader = cmsComponentLoader;
        this.routingService = routingService;
        this.loadComponent$ = this.actions$.pipe(ofType(componentActions.LOAD_COMPONENT), map(function (action) { return action.payload; }), groupBy(function (uid) { return uid; }), mergeMap(function (group) {
            return group.pipe(switchMap(function (uid) {
                return _this.routingService.getRouterState().pipe(filter(function (routerState) { return routerState !== undefined; }), map(function (routerState) { return routerState.state.context; }), take(1), mergeMap(function (pageContext) {
                    return _this.cmsComponentLoader.get(uid, pageContext).pipe(map(function (data) { return new componentActions.LoadComponentSuccess(data); }), catchError(function (error) {
                        return of(new componentActions.LoadComponentFail(uid, error));
                    }));
                }));
            }));
        }));
    }
    ComponentEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ComponentEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: CmsComponentConnector },
        { type: RoutingService }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], ComponentEffects.prototype, "loadComponent$", void 0);
    return ComponentEffects;
}());
export { ComponentEffects };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jbXMvc3RvcmUvZWZmZWN0cy9jb21wb25lbnQuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUNMLFVBQVUsRUFDVixNQUFNLEVBQ04sT0FBTyxFQUNQLEdBQUcsRUFDSCxRQUFRLEVBQ1IsU0FBUyxFQUNULElBQUksR0FDTCxNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUMzRixPQUFPLEtBQUssZ0JBQWdCLE1BQU0sNkJBQTZCLENBQUM7QUFFaEU7SUFFRSwwQkFDVSxRQUFpQixFQUNqQixrQkFBeUMsRUFDekMsY0FBOEI7UUFIeEMsaUJBSUk7UUFITSxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBdUI7UUFDekMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBSXhDLG1CQUFjLEdBQW9CLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNsRCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLEVBQ3ZDLEdBQUcsQ0FBQyxVQUFDLE1BQXNDLElBQUssT0FBQSxNQUFNLENBQUMsT0FBTyxFQUFkLENBQWMsQ0FBQyxFQUMvRCxPQUFPLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLEVBQUgsQ0FBRyxDQUFDLEVBQ25CLFFBQVEsQ0FBQyxVQUFBLEtBQUs7WUFDWixPQUFBLEtBQUssQ0FBQyxJQUFJLENBQ1IsU0FBUyxDQUFDLFVBQUEsR0FBRztnQkFDWCxPQUFPLEtBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxFQUFFLENBQUMsSUFBSSxDQUM5QyxNQUFNLENBQUMsVUFBQSxXQUFXLElBQUksT0FBQSxXQUFXLEtBQUssU0FBUyxFQUF6QixDQUF5QixDQUFDLEVBQ2hELEdBQUcsQ0FBQyxVQUFBLFdBQVcsSUFBSSxPQUFBLFdBQVcsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUF6QixDQUF5QixDQUFDLEVBQzdDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFDUCxRQUFRLENBQUMsVUFBQSxXQUFXO29CQUNsQixPQUFBLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FDaEQsR0FBRyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxnQkFBZ0IsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsRUFBL0MsQ0FBK0MsQ0FBQyxFQUM1RCxVQUFVLENBQUMsVUFBQSxLQUFLO3dCQUNkLE9BQUEsRUFBRSxDQUFDLElBQUksZ0JBQWdCLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO29CQUF0RCxDQUFzRCxDQUN2RCxDQUNGO2dCQUxELENBS0MsQ0FDRixDQUNGLENBQUM7WUFDSixDQUFDLENBQUMsQ0FDSDtRQWhCRCxDQWdCQyxDQUNGLENBQ0YsQ0FBQztJQTFCQyxDQUFDOztnQkFOTCxVQUFVOzs7O2dCQWZGLE9BQU87Z0JBWVAscUJBQXFCO2dCQURyQixjQUFjOztJQWFyQjtRQURDLE1BQU0sRUFBRTswQ0FDTyxVQUFVOzREQXVCeEI7SUFDSix1QkFBQztDQUFBLEFBakNELElBaUNDO1NBaENZLGdCQUFnQjs7O0lBTzNCLDBDQXdCRTs7Ozs7SUE3QkEsb0NBQXlCOzs7OztJQUN6Qiw4Q0FBaUQ7Ozs7O0lBQ2pELDBDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgY2F0Y2hFcnJvcixcbiAgZmlsdGVyLFxuICBncm91cEJ5LFxuICBtYXAsXG4gIG1lcmdlTWFwLFxuICBzd2l0Y2hNYXAsXG4gIHRha2UsXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFJvdXRpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vcm91dGluZy9pbmRleCc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnRDb25uZWN0b3IgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL2NvbXBvbmVudC9jbXMtY29tcG9uZW50LmNvbm5lY3Rvcic7XG5pbXBvcnQgKiBhcyBjb21wb25lbnRBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvY29tcG9uZW50LmFjdGlvbic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb21wb25lbnRFZmZlY3RzIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIGNtc0NvbXBvbmVudExvYWRlcjogQ21zQ29tcG9uZW50Q29ubmVjdG9yLFxuICAgIHByaXZhdGUgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlXG4gICkge31cblxuICBARWZmZWN0KClcbiAgbG9hZENvbXBvbmVudCQ6IE9ic2VydmFibGU8YW55PiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoY29tcG9uZW50QWN0aW9ucy5MT0FEX0NPTVBPTkVOVCksXG4gICAgbWFwKChhY3Rpb246IGNvbXBvbmVudEFjdGlvbnMuTG9hZENvbXBvbmVudCkgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIGdyb3VwQnkodWlkID0+IHVpZCksXG4gICAgbWVyZ2VNYXAoZ3JvdXAgPT5cbiAgICAgIGdyb3VwLnBpcGUoXG4gICAgICAgIHN3aXRjaE1hcCh1aWQgPT4ge1xuICAgICAgICAgIHJldHVybiB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdldFJvdXRlclN0YXRlKCkucGlwZShcbiAgICAgICAgICAgIGZpbHRlcihyb3V0ZXJTdGF0ZSA9PiByb3V0ZXJTdGF0ZSAhPT0gdW5kZWZpbmVkKSxcbiAgICAgICAgICAgIG1hcChyb3V0ZXJTdGF0ZSA9PiByb3V0ZXJTdGF0ZS5zdGF0ZS5jb250ZXh0KSxcbiAgICAgICAgICAgIHRha2UoMSksXG4gICAgICAgICAgICBtZXJnZU1hcChwYWdlQ29udGV4dCA9PlxuICAgICAgICAgICAgICB0aGlzLmNtc0NvbXBvbmVudExvYWRlci5nZXQodWlkLCBwYWdlQ29udGV4dCkucGlwZShcbiAgICAgICAgICAgICAgICBtYXAoZGF0YSA9PiBuZXcgY29tcG9uZW50QWN0aW9ucy5Mb2FkQ29tcG9uZW50U3VjY2VzcyhkYXRhKSksXG4gICAgICAgICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgICAgICAgICAgb2YobmV3IGNvbXBvbmVudEFjdGlvbnMuTG9hZENvbXBvbmVudEZhaWwodWlkLCBlcnJvcikpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICApXG4gICk7XG59XG4iXX0=
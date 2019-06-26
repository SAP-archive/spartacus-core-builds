/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, filter, groupBy, map, mergeMap, switchMap, take, } from 'rxjs/operators';
import { RoutingService } from '../../../routing/index';
import { makeErrorSerializable } from '../../../util/serialization-utils';
import { CmsComponentConnector } from '../../connectors/component/cms-component.connector';
import { CmsActions } from '../actions/index';
var ComponentEffects = /** @class */ (function () {
    function ComponentEffects(actions$, cmsComponentLoader, routingService) {
        var _this = this;
        this.actions$ = actions$;
        this.cmsComponentLoader = cmsComponentLoader;
        this.routingService = routingService;
        this.loadComponent$ = this.actions$.pipe(ofType(CmsActions.LOAD_CMS_COMPONENT), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.payload; })), groupBy((/**
         * @param {?} uid
         * @return {?}
         */
        function (uid) { return uid; })), mergeMap((/**
         * @param {?} group
         * @return {?}
         */
        function (group) {
            return group.pipe(switchMap((/**
             * @param {?} uid
             * @return {?}
             */
            function (uid) {
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
                    return _this.cmsComponentLoader.get(uid, pageContext).pipe(map((/**
                     * @param {?} data
                     * @return {?}
                     */
                    function (data) { return new CmsActions.LoadCmsComponentSuccess(data, uid); })), catchError((/**
                     * @param {?} error
                     * @return {?}
                     */
                    function (error) {
                        return of(new CmsActions.LoadCmsComponentFail(uid, makeErrorSerializable(error)));
                    })));
                })));
            })));
        })));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jbXMvc3RvcmUvZWZmZWN0cy9jb21wb25lbnQuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUNMLFVBQVUsRUFDVixNQUFNLEVBQ04sT0FBTyxFQUNQLEdBQUcsRUFDSCxRQUFRLEVBQ1IsU0FBUyxFQUNULElBQUksR0FDTCxNQUFNLGdCQUFnQixDQUFDO0FBRXhCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUMzRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFOUM7SUFFRSwwQkFDVSxRQUFpQixFQUNqQixrQkFBeUMsRUFDekMsY0FBOEI7UUFIeEMsaUJBSUk7UUFITSxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBdUI7UUFDekMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBSXhDLG1CQUFjLEdBR1YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsRUFDckMsR0FBRzs7OztRQUFDLFVBQUMsTUFBbUMsSUFBSyxPQUFBLE1BQU0sQ0FBQyxPQUFPLEVBQWQsQ0FBYyxFQUFDLEVBQzVELE9BQU87Ozs7UUFBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsRUFBSCxDQUFHLEVBQUMsRUFDbkIsUUFBUTs7OztRQUFDLFVBQUEsS0FBSztZQUNaLE9BQUEsS0FBSyxDQUFDLElBQUksQ0FDUixTQUFTOzs7O1lBQUMsVUFBQSxHQUFHO2dCQUNYLE9BQUEsS0FBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxJQUFJLENBQ3ZDLE1BQU07Ozs7Z0JBQUMsVUFBQSxXQUFXLElBQUksT0FBQSxXQUFXLEtBQUssU0FBUyxFQUF6QixDQUF5QixFQUFDLEVBQ2hELEdBQUc7Ozs7Z0JBQUMsVUFBQSxXQUFXLElBQUksT0FBQSxXQUFXLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBekIsQ0FBeUIsRUFBQyxFQUM3QyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ1AsUUFBUTs7OztnQkFBQyxVQUFBLFdBQVc7b0JBQ2xCLE9BQUEsS0FBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUNoRCxHQUFHOzs7O29CQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxVQUFVLENBQUMsdUJBQXVCLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxFQUFqRCxDQUFpRCxFQUFDLEVBQzlELFVBQVU7Ozs7b0JBQUMsVUFBQSxLQUFLO3dCQUNkLE9BQUEsRUFBRSxDQUNBLElBQUksVUFBVSxDQUFDLG9CQUFvQixDQUNqQyxHQUFHLEVBQ0gscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQzdCLENBQ0Y7b0JBTEQsQ0FLQyxFQUNGLENBQ0Y7Z0JBVkQsQ0FVQyxFQUNGLENBQ0Y7WUFqQkQsQ0FpQkMsRUFDRixDQUNGO1FBckJELENBcUJDLEVBQ0YsQ0FDRixDQUFDO0lBbENDLENBQUM7O2dCQU5MLFVBQVU7Ozs7Z0JBakJGLE9BQU87Z0JBY1AscUJBQXFCO2dCQUZyQixjQUFjOztJQWNyQjtRQURDLE1BQU0sRUFBRTswQ0FDTyxVQUFVOzREQStCeEI7SUFDSix1QkFBQztDQUFBLEFBekNELElBeUNDO1NBeENZLGdCQUFnQjs7O0lBTzNCLDBDQWdDRTs7Ozs7SUFyQ0Esb0NBQXlCOzs7OztJQUN6Qiw4Q0FBaUQ7Ozs7O0lBQ2pELDBDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgY2F0Y2hFcnJvcixcbiAgZmlsdGVyLFxuICBncm91cEJ5LFxuICBtYXAsXG4gIG1lcmdlTWFwLFxuICBzd2l0Y2hNYXAsXG4gIHRha2UsXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENtc0NvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2Ntcy5tb2RlbCc7XG5pbXBvcnQgeyBSb3V0aW5nU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3JvdXRpbmcvaW5kZXgnO1xuaW1wb3J0IHsgbWFrZUVycm9yU2VyaWFsaXphYmxlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9zZXJpYWxpemF0aW9uLXV0aWxzJztcbmltcG9ydCB7IENtc0NvbXBvbmVudENvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvY29tcG9uZW50L2Ntcy1jb21wb25lbnQuY29ubmVjdG9yJztcbmltcG9ydCB7IENtc0FjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbXBvbmVudEVmZmVjdHMge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgY21zQ29tcG9uZW50TG9hZGVyOiBDbXNDb21wb25lbnRDb25uZWN0b3IsXG4gICAgcHJpdmF0ZSByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2VcbiAgKSB7fVxuXG4gIEBFZmZlY3QoKVxuICBsb2FkQ29tcG9uZW50JDogT2JzZXJ2YWJsZTxcbiAgICB8IENtc0FjdGlvbnMuTG9hZENtc0NvbXBvbmVudFN1Y2Nlc3M8Q21zQ29tcG9uZW50PlxuICAgIHwgQ21zQWN0aW9ucy5Mb2FkQ21zQ29tcG9uZW50RmFpbFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShDbXNBY3Rpb25zLkxPQURfQ01TX0NPTVBPTkVOVCksXG4gICAgbWFwKChhY3Rpb246IENtc0FjdGlvbnMuTG9hZENtc0NvbXBvbmVudCkgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIGdyb3VwQnkodWlkID0+IHVpZCksXG4gICAgbWVyZ2VNYXAoZ3JvdXAgPT5cbiAgICAgIGdyb3VwLnBpcGUoXG4gICAgICAgIHN3aXRjaE1hcCh1aWQgPT5cbiAgICAgICAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdldFJvdXRlclN0YXRlKCkucGlwZShcbiAgICAgICAgICAgIGZpbHRlcihyb3V0ZXJTdGF0ZSA9PiByb3V0ZXJTdGF0ZSAhPT0gdW5kZWZpbmVkKSxcbiAgICAgICAgICAgIG1hcChyb3V0ZXJTdGF0ZSA9PiByb3V0ZXJTdGF0ZS5zdGF0ZS5jb250ZXh0KSxcbiAgICAgICAgICAgIHRha2UoMSksXG4gICAgICAgICAgICBtZXJnZU1hcChwYWdlQ29udGV4dCA9PlxuICAgICAgICAgICAgICB0aGlzLmNtc0NvbXBvbmVudExvYWRlci5nZXQodWlkLCBwYWdlQ29udGV4dCkucGlwZShcbiAgICAgICAgICAgICAgICBtYXAoZGF0YSA9PiBuZXcgQ21zQWN0aW9ucy5Mb2FkQ21zQ29tcG9uZW50U3VjY2VzcyhkYXRhLCB1aWQpKSxcbiAgICAgICAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICAgICAgICBvZihcbiAgICAgICAgICAgICAgICAgICAgbmV3IENtc0FjdGlvbnMuTG9hZENtc0NvbXBvbmVudEZhaWwoXG4gICAgICAgICAgICAgICAgICAgICAgdWlkLFxuICAgICAgICAgICAgICAgICAgICAgIG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcilcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKVxuICAgIClcbiAgKTtcbn1cbiJdfQ==
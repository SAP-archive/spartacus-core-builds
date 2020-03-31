import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { from } from 'rxjs';
import { catchError, groupBy, mergeMap, switchMap } from 'rxjs/operators';
import { AuthActions } from '../../../auth/store/actions/index';
import { SiteContextActions } from '../../../site-context/store/actions/index';
import { bufferDebounceTime } from '../../../util/buffer-debounce-time';
import { makeErrorSerializable } from '../../../util/serialization-utils';
import { withdrawOn } from '../../../util/withdraw-on';
import { CmsComponentConnector } from '../../connectors/component/cms-component.connector';
import { serializePageContext } from '../../utils/cms-utils';
import { CmsActions } from '../actions/index';
var ComponentsEffects = /** @class */ (function () {
    function ComponentsEffects(actions$, cmsComponentLoader) {
        var _this = this;
        this.actions$ = actions$;
        this.cmsComponentLoader = cmsComponentLoader;
        this.contextChange$ = this.actions$.pipe(ofType(SiteContextActions.LANGUAGE_CHANGE, AuthActions.LOGOUT, AuthActions.LOGIN));
        this.loadComponent$ = createEffect(function () { return function (_a) {
            var _b = _a === void 0 ? {} : _a, scheduler = _b.scheduler, _c = _b.debounce, debounce = _c === void 0 ? 0 : _c;
            return _this.actions$.pipe(ofType(CmsActions.LOAD_CMS_COMPONENT), groupBy(function (actions) { return serializePageContext(actions.payload.pageContext); }), mergeMap(function (actionGroup) {
                return actionGroup.pipe(bufferDebounceTime(debounce, scheduler), mergeMap(function (actions) {
                    return _this.loadComponentsEffect(actions.map(function (action) { return action.payload.uid; }), actions[0].payload.pageContext);
                }));
            }), withdrawOn(_this.contextChange$));
        }; });
    }
    ComponentsEffects.prototype.loadComponentsEffect = function (componentUids, pageContext) {
        return this.cmsComponentLoader.getList(componentUids, pageContext).pipe(switchMap(function (components) {
            return from(components.map(function (component) {
                return new CmsActions.LoadCmsComponentSuccess({
                    component: component,
                    uid: component.uid,
                    pageContext: pageContext,
                });
            }));
        }), catchError(function (error) {
            return from(componentUids.map(function (uid) {
                return new CmsActions.LoadCmsComponentFail({
                    uid: uid,
                    error: makeErrorSerializable(error),
                    pageContext: pageContext,
                });
            }));
        }));
    };
    ComponentsEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: CmsComponentConnector }
    ]; };
    ComponentsEffects = __decorate([
        Injectable()
    ], ComponentsEffects);
    return ComponentsEffects;
}());
export { ComponentsEffects };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL3N0b3JlL2VmZmVjdHMvY29tcG9uZW50cy5lZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTlELE9BQU8sRUFBRSxJQUFJLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDeEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUdoRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDdkQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDM0YsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDN0QsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRzlDO0lBQ0UsMkJBQ1UsUUFBaUIsRUFDakIsa0JBQXlDO1FBRm5ELGlCQUdJO1FBRk0sYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQXVCO1FBRzNDLG1CQUFjLEdBQXVCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUM3RCxNQUFNLENBQ0osa0JBQWtCLENBQUMsZUFBZSxFQUNsQyxXQUFXLENBQUMsTUFBTSxFQUNsQixXQUFXLENBQUMsS0FBSyxDQUNsQixDQUNGLENBQUM7UUFFRixtQkFBYyxHQUFHLFlBQVksQ0FDM0IsY0FBTSxPQUFBLFVBQUMsRUFBZ0M7Z0JBQWhDLDRCQUFnQyxFQUE5Qix3QkFBUyxFQUFFLGdCQUFZLEVBQVosaUNBQVk7WUFJOUIsT0FBQSxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDaEIsTUFBTSxDQUE4QixVQUFVLENBQUMsa0JBQWtCLENBQUMsRUFDbEUsT0FBTyxDQUFDLFVBQUMsT0FBTyxJQUFLLE9BQUEsb0JBQW9CLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsRUFBakQsQ0FBaUQsQ0FBQyxFQUN2RSxRQUFRLENBQUMsVUFBQyxXQUFXO2dCQUNuQixPQUFBLFdBQVcsQ0FBQyxJQUFJLENBQ2Qsa0JBQWtCLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQyxFQUN2QyxRQUFRLENBQUMsVUFBQyxPQUFPO29CQUNmLE9BQUEsS0FBSSxDQUFDLG9CQUFvQixDQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQUMsTUFBTSxJQUFLLE9BQUEsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQWxCLENBQWtCLENBQUMsRUFDM0MsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQy9CO2dCQUhELENBR0MsQ0FDRixDQUNGO1lBUkQsQ0FRQyxDQUNGLEVBQ0QsVUFBVSxDQUFDLEtBQUksQ0FBQyxjQUFjLENBQUMsQ0FDaEM7UUFmRCxDQWVDLEVBbkJHLENBbUJILENBQ0osQ0FBQztJQS9CQyxDQUFDO0lBaUNJLGdEQUFvQixHQUE1QixVQUNFLGFBQXVCLEVBQ3ZCLFdBQXdCO1FBS3hCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUNyRSxTQUFTLENBQUMsVUFBQyxVQUFVO1lBQ25CLE9BQUEsSUFBSSxDQUNGLFVBQVUsQ0FBQyxHQUFHLENBQ1osVUFBQyxTQUFTO2dCQUNSLE9BQUEsSUFBSSxVQUFVLENBQUMsdUJBQXVCLENBQUM7b0JBQ3JDLFNBQVMsV0FBQTtvQkFDVCxHQUFHLEVBQUUsU0FBUyxDQUFDLEdBQUc7b0JBQ2xCLFdBQVcsYUFBQTtpQkFDWixDQUFDO1lBSkYsQ0FJRSxDQUNMLENBQ0Y7UUFURCxDQVNDLENBQ0YsRUFDRCxVQUFVLENBQUMsVUFBQyxLQUFLO1lBQ2YsT0FBQSxJQUFJLENBQ0YsYUFBYSxDQUFDLEdBQUcsQ0FDZixVQUFDLEdBQUc7Z0JBQ0YsT0FBQSxJQUFJLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQztvQkFDbEMsR0FBRyxLQUFBO29CQUNILEtBQUssRUFBRSxxQkFBcUIsQ0FBQyxLQUFLLENBQUM7b0JBQ25DLFdBQVcsYUFBQTtpQkFDWixDQUFDO1lBSkYsQ0FJRSxDQUNMLENBQ0Y7UUFURCxDQVNDLENBQ0YsQ0FDRixDQUFDO0lBQ0osQ0FBQzs7Z0JBcEVtQixPQUFPO2dCQUNHLHFCQUFxQjs7SUFIeEMsaUJBQWlCO1FBRDdCLFVBQVUsRUFBRTtPQUNBLGlCQUFpQixDQXVFN0I7SUFBRCx3QkFBQztDQUFBLEFBdkVELElBdUVDO1NBdkVZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIGNyZWF0ZUVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBmcm9tLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBncm91cEJ5LCBtZXJnZU1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQXV0aEFjdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9hdXRoL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvY21zLm1vZGVsJztcbmltcG9ydCB7IFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vcm91dGluZy9pbmRleCc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dEFjdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9zaXRlLWNvbnRleHQvc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBidWZmZXJEZWJvdW5jZVRpbWUgfSBmcm9tICcuLi8uLi8uLi91dGlsL2J1ZmZlci1kZWJvdW5jZS10aW1lJztcbmltcG9ydCB7IG1ha2VFcnJvclNlcmlhbGl6YWJsZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvc2VyaWFsaXphdGlvbi11dGlscyc7XG5pbXBvcnQgeyB3aXRoZHJhd09uIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC93aXRoZHJhdy1vbic7XG5pbXBvcnQgeyBDbXNDb21wb25lbnRDb25uZWN0b3IgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL2NvbXBvbmVudC9jbXMtY29tcG9uZW50LmNvbm5lY3Rvcic7XG5pbXBvcnQgeyBzZXJpYWxpemVQYWdlQ29udGV4dCB9IGZyb20gJy4uLy4uL3V0aWxzL2Ntcy11dGlscyc7XG5pbXBvcnQgeyBDbXNBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb21wb25lbnRzRWZmZWN0cyB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBjbXNDb21wb25lbnRMb2FkZXI6IENtc0NvbXBvbmVudENvbm5lY3RvclxuICApIHt9XG5cbiAgcHJpdmF0ZSBjb250ZXh0Q2hhbmdlJDogT2JzZXJ2YWJsZTxBY3Rpb24+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShcbiAgICAgIFNpdGVDb250ZXh0QWN0aW9ucy5MQU5HVUFHRV9DSEFOR0UsXG4gICAgICBBdXRoQWN0aW9ucy5MT0dPVVQsXG4gICAgICBBdXRoQWN0aW9ucy5MT0dJTlxuICAgIClcbiAgKTtcblxuICBsb2FkQ29tcG9uZW50JCA9IGNyZWF0ZUVmZmVjdChcbiAgICAoKSA9PiAoeyBzY2hlZHVsZXIsIGRlYm91bmNlID0gMCB9ID0ge30pOiBPYnNlcnZhYmxlPFxuICAgICAgfCBDbXNBY3Rpb25zLkxvYWRDbXNDb21wb25lbnRTdWNjZXNzPENtc0NvbXBvbmVudD5cbiAgICAgIHwgQ21zQWN0aW9ucy5Mb2FkQ21zQ29tcG9uZW50RmFpbFxuICAgID4gPT5cbiAgICAgIHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICAgICAgb2ZUeXBlPENtc0FjdGlvbnMuTG9hZENtc0NvbXBvbmVudD4oQ21zQWN0aW9ucy5MT0FEX0NNU19DT01QT05FTlQpLFxuICAgICAgICBncm91cEJ5KChhY3Rpb25zKSA9PiBzZXJpYWxpemVQYWdlQ29udGV4dChhY3Rpb25zLnBheWxvYWQucGFnZUNvbnRleHQpKSxcbiAgICAgICAgbWVyZ2VNYXAoKGFjdGlvbkdyb3VwKSA9PlxuICAgICAgICAgIGFjdGlvbkdyb3VwLnBpcGUoXG4gICAgICAgICAgICBidWZmZXJEZWJvdW5jZVRpbWUoZGVib3VuY2UsIHNjaGVkdWxlciksXG4gICAgICAgICAgICBtZXJnZU1hcCgoYWN0aW9ucykgPT5cbiAgICAgICAgICAgICAgdGhpcy5sb2FkQ29tcG9uZW50c0VmZmVjdChcbiAgICAgICAgICAgICAgICBhY3Rpb25zLm1hcCgoYWN0aW9uKSA9PiBhY3Rpb24ucGF5bG9hZC51aWQpLFxuICAgICAgICAgICAgICAgIGFjdGlvbnNbMF0ucGF5bG9hZC5wYWdlQ29udGV4dFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApLFxuICAgICAgICB3aXRoZHJhd09uKHRoaXMuY29udGV4dENoYW5nZSQpXG4gICAgICApXG4gICk7XG5cbiAgcHJpdmF0ZSBsb2FkQ29tcG9uZW50c0VmZmVjdChcbiAgICBjb21wb25lbnRVaWRzOiBzdHJpbmdbXSxcbiAgICBwYWdlQ29udGV4dDogUGFnZUNvbnRleHRcbiAgKTogT2JzZXJ2YWJsZTxcbiAgICB8IENtc0FjdGlvbnMuTG9hZENtc0NvbXBvbmVudFN1Y2Nlc3M8Q21zQ29tcG9uZW50PlxuICAgIHwgQ21zQWN0aW9ucy5Mb2FkQ21zQ29tcG9uZW50RmFpbFxuICA+IHtcbiAgICByZXR1cm4gdGhpcy5jbXNDb21wb25lbnRMb2FkZXIuZ2V0TGlzdChjb21wb25lbnRVaWRzLCBwYWdlQ29udGV4dCkucGlwZShcbiAgICAgIHN3aXRjaE1hcCgoY29tcG9uZW50cykgPT5cbiAgICAgICAgZnJvbShcbiAgICAgICAgICBjb21wb25lbnRzLm1hcChcbiAgICAgICAgICAgIChjb21wb25lbnQpID0+XG4gICAgICAgICAgICAgIG5ldyBDbXNBY3Rpb25zLkxvYWRDbXNDb21wb25lbnRTdWNjZXNzKHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnQsXG4gICAgICAgICAgICAgICAgdWlkOiBjb21wb25lbnQudWlkLFxuICAgICAgICAgICAgICAgIHBhZ2VDb250ZXh0LFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKSxcbiAgICAgIGNhdGNoRXJyb3IoKGVycm9yKSA9PlxuICAgICAgICBmcm9tKFxuICAgICAgICAgIGNvbXBvbmVudFVpZHMubWFwKFxuICAgICAgICAgICAgKHVpZCkgPT5cbiAgICAgICAgICAgICAgbmV3IENtc0FjdGlvbnMuTG9hZENtc0NvbXBvbmVudEZhaWwoe1xuICAgICAgICAgICAgICAgIHVpZCxcbiAgICAgICAgICAgICAgICBlcnJvcjogbWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKSxcbiAgICAgICAgICAgICAgICBwYWdlQ29udGV4dCxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgIClcbiAgICApO1xuICB9XG59XG4iXX0=
import { __decorate, __values } from "tslib";
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
    function ComponentsEffects(actions$, cmsComponentConnector) {
        var _this = this;
        this.actions$ = actions$;
        this.cmsComponentConnector = cmsComponentConnector;
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
        return this.cmsComponentConnector.getList(componentUids, pageContext).pipe(switchMap(function (components) {
            var e_1, _a;
            var actions = [];
            var uidsLeft = new Set(componentUids);
            try {
                for (var components_1 = __values(components), components_1_1 = components_1.next(); !components_1_1.done; components_1_1 = components_1.next()) {
                    var component = components_1_1.value;
                    actions.push(new CmsActions.LoadCmsComponentSuccess({
                        component: component,
                        uid: component.uid,
                        pageContext: pageContext,
                    }));
                    uidsLeft.delete(component.uid);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (components_1_1 && !components_1_1.done && (_a = components_1.return)) _a.call(components_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            // we have to emit LoadCmsComponentFail for all component's uids that
            // are missing from the response
            uidsLeft.forEach(function (uid) {
                actions.push(new CmsActions.LoadCmsComponentFail({
                    uid: uid,
                    pageContext: pageContext,
                }));
            });
            return from(actions);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL3N0b3JlL2VmZmVjdHMvY29tcG9uZW50cy5lZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTlELE9BQU8sRUFBRSxJQUFJLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDeEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUdoRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDdkQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDM0YsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDN0QsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRzlDO0lBQ0UsMkJBQ1UsUUFBaUIsRUFDakIscUJBQTRDO1FBRnRELGlCQUdJO1FBRk0sYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQiwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBRzlDLG1CQUFjLEdBQXVCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUM3RCxNQUFNLENBQ0osa0JBQWtC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QixDQXVGN0I7SUFBRCx3QkFBQztDQUFBLEFBdkZELElBdUZDO1NBdkZZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIGNyZWF0ZUVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBmcm9tLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBncm91cEJ5LCBtZXJnZU1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQXV0aEFjdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9hdXRoL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvY21zLm1vZGVsJztcbmltcG9ydCB7IFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vcm91dGluZy9pbmRleCc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dEFjdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9zaXRlLWNvbnRleHQvc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBidWZmZXJEZWJvdW5jZVRpbWUgfSBmcm9tICcuLi8uLi8uLi91dGlsL2J1ZmZlci1kZWJvdW5jZS10aW1lJztcbmltcG9ydCB7IG1ha2VFcnJvclNlcmlhbGl6YWJsZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvc2VyaWFsaXphdGlvbi11dGlscyc7XG5pbXBvcnQgeyB3aXRoZHJhd09uIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC93aXRoZHJhdy1vbic7XG5pbXBvcnQgeyBDbXNDb21wb25lbnRDb25uZWN0b3IgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL2NvbXBvbmVudC9jbXMtY29tcG9uZW50LmNvbm5lY3Rvcic7XG5pbXBvcnQgeyBzZXJpYWxpemVQYWdlQ29udGV4dCB9IGZyb20gJy4uLy4uL3V0aWxzL2Ntcy11dGlscyc7XG5pbXBvcnQgeyBDbXNBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb21wb25lbnRzRWZmZWN0cyB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBjbXNDb21wb25lbnRDb25uZWN0b3I6IENtc0NvbXBvbmVudENvbm5lY3RvclxuICApIHt9XG5cbiAgcHJpdmF0ZSBjb250ZXh0Q2hhbmdlJDogT2JzZXJ2YWJsZTxBY3Rpb24+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShcbiAgICAgIFNpdGVDb250ZXh0QWN0aW9ucy5MQU5HVUFHRV9DSEFOR0UsXG4gICAgICBBdXRoQWN0aW9ucy5MT0dPVVQsXG4gICAgICBBdXRoQWN0aW9ucy5MT0dJTlxuICAgIClcbiAgKTtcblxuICBsb2FkQ29tcG9uZW50JCA9IGNyZWF0ZUVmZmVjdChcbiAgICAoKSA9PiAoeyBzY2hlZHVsZXIsIGRlYm91bmNlID0gMCB9ID0ge30pOiBPYnNlcnZhYmxlPFxuICAgICAgfCBDbXNBY3Rpb25zLkxvYWRDbXNDb21wb25lbnRTdWNjZXNzPENtc0NvbXBvbmVudD5cbiAgICAgIHwgQ21zQWN0aW9ucy5Mb2FkQ21zQ29tcG9uZW50RmFpbFxuICAgID4gPT5cbiAgICAgIHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICAgICAgb2ZUeXBlPENtc0FjdGlvbnMuTG9hZENtc0NvbXBvbmVudD4oQ21zQWN0aW9ucy5MT0FEX0NNU19DT01QT05FTlQpLFxuICAgICAgICBncm91cEJ5KChhY3Rpb25zKSA9PiBzZXJpYWxpemVQYWdlQ29udGV4dChhY3Rpb25zLnBheWxvYWQucGFnZUNvbnRleHQpKSxcbiAgICAgICAgbWVyZ2VNYXAoKGFjdGlvbkdyb3VwKSA9PlxuICAgICAgICAgIGFjdGlvbkdyb3VwLnBpcGUoXG4gICAgICAgICAgICBidWZmZXJEZWJvdW5jZVRpbWUoZGVib3VuY2UsIHNjaGVkdWxlciksXG4gICAgICAgICAgICBtZXJnZU1hcCgoYWN0aW9ucykgPT5cbiAgICAgICAgICAgICAgdGhpcy5sb2FkQ29tcG9uZW50c0VmZmVjdChcbiAgICAgICAgICAgICAgICBhY3Rpb25zLm1hcCgoYWN0aW9uKSA9PiBhY3Rpb24ucGF5bG9hZC51aWQpLFxuICAgICAgICAgICAgICAgIGFjdGlvbnNbMF0ucGF5bG9hZC5wYWdlQ29udGV4dFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApLFxuICAgICAgICB3aXRoZHJhd09uKHRoaXMuY29udGV4dENoYW5nZSQpXG4gICAgICApXG4gICk7XG5cbiAgcHJpdmF0ZSBsb2FkQ29tcG9uZW50c0VmZmVjdChcbiAgICBjb21wb25lbnRVaWRzOiBzdHJpbmdbXSxcbiAgICBwYWdlQ29udGV4dDogUGFnZUNvbnRleHRcbiAgKTogT2JzZXJ2YWJsZTxcbiAgICB8IENtc0FjdGlvbnMuTG9hZENtc0NvbXBvbmVudFN1Y2Nlc3M8Q21zQ29tcG9uZW50PlxuICAgIHwgQ21zQWN0aW9ucy5Mb2FkQ21zQ29tcG9uZW50RmFpbFxuICA+IHtcbiAgICByZXR1cm4gdGhpcy5jbXNDb21wb25lbnRDb25uZWN0b3IuZ2V0TGlzdChjb21wb25lbnRVaWRzLCBwYWdlQ29udGV4dCkucGlwZShcbiAgICAgIHN3aXRjaE1hcCgoY29tcG9uZW50cykgPT4ge1xuICAgICAgICBjb25zdCBhY3Rpb25zOiAoXG4gICAgICAgICAgfCBDbXNBY3Rpb25zLkxvYWRDbXNDb21wb25lbnRTdWNjZXNzPENtc0NvbXBvbmVudD5cbiAgICAgICAgICB8IENtc0FjdGlvbnMuTG9hZENtc0NvbXBvbmVudEZhaWxcbiAgICAgICAgKVtdID0gW107XG4gICAgICAgIGNvbnN0IHVpZHNMZWZ0ID0gbmV3IFNldDxzdHJpbmc+KGNvbXBvbmVudFVpZHMpO1xuICAgICAgICBmb3IgKGNvbnN0IGNvbXBvbmVudCBvZiBjb21wb25lbnRzKSB7XG4gICAgICAgICAgYWN0aW9ucy5wdXNoKFxuICAgICAgICAgICAgbmV3IENtc0FjdGlvbnMuTG9hZENtc0NvbXBvbmVudFN1Y2Nlc3Moe1xuICAgICAgICAgICAgICBjb21wb25lbnQsXG4gICAgICAgICAgICAgIHVpZDogY29tcG9uZW50LnVpZCxcbiAgICAgICAgICAgICAgcGFnZUNvbnRleHQsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICk7XG4gICAgICAgICAgdWlkc0xlZnQuZGVsZXRlKGNvbXBvbmVudC51aWQpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gZW1pdCBMb2FkQ21zQ29tcG9uZW50RmFpbCBmb3IgYWxsIGNvbXBvbmVudCdzIHVpZHMgdGhhdFxuICAgICAgICAvLyBhcmUgbWlzc2luZyBmcm9tIHRoZSByZXNwb25zZVxuICAgICAgICB1aWRzTGVmdC5mb3JFYWNoKCh1aWQpID0+IHtcbiAgICAgICAgICBhY3Rpb25zLnB1c2goXG4gICAgICAgICAgICBuZXcgQ21zQWN0aW9ucy5Mb2FkQ21zQ29tcG9uZW50RmFpbCh7XG4gICAgICAgICAgICAgIHVpZCxcbiAgICAgICAgICAgICAgcGFnZUNvbnRleHQsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZnJvbShhY3Rpb25zKTtcbiAgICAgIH0pLFxuICAgICAgY2F0Y2hFcnJvcigoZXJyb3IpID0+XG4gICAgICAgIGZyb20oXG4gICAgICAgICAgY29tcG9uZW50VWlkcy5tYXAoXG4gICAgICAgICAgICAodWlkKSA9PlxuICAgICAgICAgICAgICBuZXcgQ21zQWN0aW9ucy5Mb2FkQ21zQ29tcG9uZW50RmFpbCh7XG4gICAgICAgICAgICAgICAgdWlkLFxuICAgICAgICAgICAgICAgIGVycm9yOiBtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpLFxuICAgICAgICAgICAgICAgIHBhZ2VDb250ZXh0LFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { from } from 'rxjs';
import { catchError, groupBy, mergeMap, switchMap } from 'rxjs/operators';
import { AuthActions } from '../../../auth/user-auth/store/actions/index';
import { SiteContextActions } from '../../../site-context/store/actions/index';
import { bufferDebounceTime } from '../../../util/rxjs/buffer-debounce-time';
import { normalizeHttpError } from '../../../util/normalize-http-error';
import { withdrawOn } from '../../../util/rxjs/withdraw-on';
import { CmsComponentConnector } from '../../connectors/component/cms-component.connector';
import { serializePageContext } from '../../utils/cms-utils';
import { CmsActions } from '../actions/index';
export class ComponentsEffects {
    constructor(actions$, cmsComponentConnector) {
        this.actions$ = actions$;
        this.cmsComponentConnector = cmsComponentConnector;
        this.contextChange$ = this.actions$.pipe(ofType(SiteContextActions.LANGUAGE_CHANGE, AuthActions.LOGOUT, AuthActions.LOGIN));
        this.loadComponent$ = createEffect(() => ({ scheduler, debounce = 0 } = {}) => this.actions$.pipe(ofType(CmsActions.LOAD_CMS_COMPONENT), groupBy((actions) => serializePageContext(actions.payload.pageContext)), mergeMap((actionGroup) => actionGroup.pipe(bufferDebounceTime(debounce, scheduler), mergeMap((actions) => this.loadComponentsEffect(actions.map((action) => action.payload.uid), actions[0].payload.pageContext)))), withdrawOn(this.contextChange$)));
    }
    loadComponentsEffect(componentUids, pageContext) {
        return this.cmsComponentConnector.getList(componentUids, pageContext).pipe(switchMap((components) => {
            const actions = [];
            const uidsLeft = new Set(componentUids);
            for (const component of components) {
                actions.push(new CmsActions.LoadCmsComponentSuccess({
                    component,
                    uid: component.uid,
                    pageContext,
                }));
                uidsLeft.delete(component.uid);
            }
            // we have to emit LoadCmsComponentFail for all component's uids that
            // are missing from the response
            uidsLeft.forEach((uid) => {
                actions.push(new CmsActions.LoadCmsComponentFail({
                    uid,
                    pageContext,
                }));
            });
            return from(actions);
        }), catchError((error) => from(componentUids.map((uid) => new CmsActions.LoadCmsComponentFail({
            uid,
            error: normalizeHttpError(error),
            pageContext,
        })))));
    }
}
ComponentsEffects.decorators = [
    { type: Injectable }
];
ComponentsEffects.ctorParameters = () => [
    { type: Actions },
    { type: CmsComponentConnector }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy5lZmZlY3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3NyYy9jbXMvc3RvcmUvZWZmZWN0cy9jb21wb25lbnRzLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU5RCxPQUFPLEVBQUUsSUFBSSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMxRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFHMUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDL0UsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDN0UsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDeEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzVELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzdELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUc5QyxNQUFNLE9BQU8saUJBQWlCO0lBQzVCLFlBQ1UsUUFBaUIsRUFDakIscUJBQTRDO1FBRDVDLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUc5QyxtQkFBYyxHQUF1QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDN0QsTUFBTSxDQUNKLGtCQUFrQixDQUFDLGVBQWUsRUFDbEMsV0FBVyxDQUFDLE1BQU0sRUFDbEIsV0FBVyxDQUFDLEtBQUssQ0FDbEIsQ0FDRixDQUFDO1FBRUYsbUJBQWMsR0FBRyxZQUFZLENBQzNCLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxTQUFTLEVBQUUsUUFBUSxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFHckMsRUFBRSxDQUNGLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNoQixNQUFNLENBQThCLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxFQUNsRSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsRUFDdkUsUUFBUSxDQUFDLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FDdkIsV0FBVyxDQUFDLElBQUksQ0FDZCxrQkFBa0IsQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDLEVBQ3ZDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQ25CLElBQUksQ0FBQyxvQkFBb0IsQ0FDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFDM0MsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQy9CLENBQ0YsQ0FDRixDQUNGLEVBQ0QsVUFBVSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FDaEMsQ0FDSixDQUFDO0lBL0JDLENBQUM7SUFpQ0ksb0JBQW9CLENBQzFCLGFBQXVCLEVBQ3ZCLFdBQXdCO1FBS3hCLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUN4RSxTQUFTLENBQUMsQ0FBQyxVQUFVLEVBQUUsRUFBRTtZQUN2QixNQUFNLE9BQU8sR0FHUCxFQUFFLENBQUM7WUFDVCxNQUFNLFFBQVEsR0FBRyxJQUFJLEdBQUcsQ0FBUyxhQUFhLENBQUMsQ0FBQztZQUNoRCxLQUFLLE1BQU0sU0FBUyxJQUFJLFVBQVUsRUFBRTtnQkFDbEMsT0FBTyxDQUFDLElBQUksQ0FDVixJQUFJLFVBQVUsQ0FBQyx1QkFBdUIsQ0FBQztvQkFDckMsU0FBUztvQkFDVCxHQUFHLEVBQUUsU0FBUyxDQUFDLEdBQUc7b0JBQ2xCLFdBQVc7aUJBQ1osQ0FBQyxDQUNILENBQUM7Z0JBQ0YsUUFBUSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDaEM7WUFDRCxxRUFBcUU7WUFDckUsZ0NBQWdDO1lBQ2hDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtnQkFDdkIsT0FBTyxDQUFDLElBQUksQ0FDVixJQUFJLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQztvQkFDbEMsR0FBRztvQkFDSCxXQUFXO2lCQUNaLENBQUMsQ0FDSCxDQUFDO1lBQ0osQ0FBQyxDQUFDLENBQUM7WUFDSCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN2QixDQUFDLENBQUMsRUFDRixVQUFVLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUNuQixJQUFJLENBQ0YsYUFBYSxDQUFDLEdBQUcsQ0FDZixDQUFDLEdBQUcsRUFBRSxFQUFFLENBQ04sSUFBSSxVQUFVLENBQUMsb0JBQW9CLENBQUM7WUFDbEMsR0FBRztZQUNILEtBQUssRUFBRSxrQkFBa0IsQ0FBQyxLQUFLLENBQUM7WUFDaEMsV0FBVztTQUNaLENBQUMsQ0FDTCxDQUNGLENBQ0YsQ0FDRixDQUFDO0lBQ0osQ0FBQzs7O1lBdkZGLFVBQVU7OztZQWZGLE9BQU87WUFXUCxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBjcmVhdGVFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgZnJvbSwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgZ3JvdXBCeSwgbWVyZ2VNYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEF1dGhBY3Rpb25zIH0gZnJvbSAnLi4vLi4vLi4vYXV0aC91c2VyLWF1dGgvc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9jbXMubW9kZWwnO1xuaW1wb3J0IHsgUGFnZUNvbnRleHQgfSBmcm9tICcuLi8uLi8uLi9yb3V0aW5nL2luZGV4JztcbmltcG9ydCB7IFNpdGVDb250ZXh0QWN0aW9ucyB9IGZyb20gJy4uLy4uLy4uL3NpdGUtY29udGV4dC9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IGJ1ZmZlckRlYm91bmNlVGltZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvcnhqcy9idWZmZXItZGVib3VuY2UtdGltZSc7XG5pbXBvcnQgeyBub3JtYWxpemVIdHRwRXJyb3IgfSBmcm9tICcuLi8uLi8uLi91dGlsL25vcm1hbGl6ZS1odHRwLWVycm9yJztcbmltcG9ydCB7IHdpdGhkcmF3T24gfSBmcm9tICcuLi8uLi8uLi91dGlsL3J4anMvd2l0aGRyYXctb24nO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50Q29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9jb21wb25lbnQvY21zLWNvbXBvbmVudC5jb25uZWN0b3InO1xuaW1wb3J0IHsgc2VyaWFsaXplUGFnZUNvbnRleHQgfSBmcm9tICcuLi8uLi91dGlscy9jbXMtdXRpbHMnO1xuaW1wb3J0IHsgQ21zQWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50c0VmZmVjdHMge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgY21zQ29tcG9uZW50Q29ubmVjdG9yOiBDbXNDb21wb25lbnRDb25uZWN0b3JcbiAgKSB7fVxuXG4gIHByaXZhdGUgY29udGV4dENoYW5nZSQ6IE9ic2VydmFibGU8QWN0aW9uPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoXG4gICAgICBTaXRlQ29udGV4dEFjdGlvbnMuTEFOR1VBR0VfQ0hBTkdFLFxuICAgICAgQXV0aEFjdGlvbnMuTE9HT1VULFxuICAgICAgQXV0aEFjdGlvbnMuTE9HSU5cbiAgICApXG4gICk7XG5cbiAgbG9hZENvbXBvbmVudCQgPSBjcmVhdGVFZmZlY3QoXG4gICAgKCkgPT4gKHsgc2NoZWR1bGVyLCBkZWJvdW5jZSA9IDAgfSA9IHt9KTogT2JzZXJ2YWJsZTxcbiAgICAgIHwgQ21zQWN0aW9ucy5Mb2FkQ21zQ29tcG9uZW50U3VjY2VzczxDbXNDb21wb25lbnQ+XG4gICAgICB8IENtc0FjdGlvbnMuTG9hZENtc0NvbXBvbmVudEZhaWxcbiAgICA+ID0+XG4gICAgICB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgICAgIG9mVHlwZTxDbXNBY3Rpb25zLkxvYWRDbXNDb21wb25lbnQ+KENtc0FjdGlvbnMuTE9BRF9DTVNfQ09NUE9ORU5UKSxcbiAgICAgICAgZ3JvdXBCeSgoYWN0aW9ucykgPT4gc2VyaWFsaXplUGFnZUNvbnRleHQoYWN0aW9ucy5wYXlsb2FkLnBhZ2VDb250ZXh0KSksXG4gICAgICAgIG1lcmdlTWFwKChhY3Rpb25Hcm91cCkgPT5cbiAgICAgICAgICBhY3Rpb25Hcm91cC5waXBlKFxuICAgICAgICAgICAgYnVmZmVyRGVib3VuY2VUaW1lKGRlYm91bmNlLCBzY2hlZHVsZXIpLFxuICAgICAgICAgICAgbWVyZ2VNYXAoKGFjdGlvbnMpID0+XG4gICAgICAgICAgICAgIHRoaXMubG9hZENvbXBvbmVudHNFZmZlY3QoXG4gICAgICAgICAgICAgICAgYWN0aW9ucy5tYXAoKGFjdGlvbikgPT4gYWN0aW9uLnBheWxvYWQudWlkKSxcbiAgICAgICAgICAgICAgICBhY3Rpb25zWzBdLnBheWxvYWQucGFnZUNvbnRleHRcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKSxcbiAgICAgICAgd2l0aGRyYXdPbih0aGlzLmNvbnRleHRDaGFuZ2UkKVxuICAgICAgKVxuICApO1xuXG4gIHByaXZhdGUgbG9hZENvbXBvbmVudHNFZmZlY3QoXG4gICAgY29tcG9uZW50VWlkczogc3RyaW5nW10sXG4gICAgcGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0XG4gICk6IE9ic2VydmFibGU8XG4gICAgfCBDbXNBY3Rpb25zLkxvYWRDbXNDb21wb25lbnRTdWNjZXNzPENtc0NvbXBvbmVudD5cbiAgICB8IENtc0FjdGlvbnMuTG9hZENtc0NvbXBvbmVudEZhaWxcbiAgPiB7XG4gICAgcmV0dXJuIHRoaXMuY21zQ29tcG9uZW50Q29ubmVjdG9yLmdldExpc3QoY29tcG9uZW50VWlkcywgcGFnZUNvbnRleHQpLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKGNvbXBvbmVudHMpID0+IHtcbiAgICAgICAgY29uc3QgYWN0aW9uczogKFxuICAgICAgICAgIHwgQ21zQWN0aW9ucy5Mb2FkQ21zQ29tcG9uZW50U3VjY2VzczxDbXNDb21wb25lbnQ+XG4gICAgICAgICAgfCBDbXNBY3Rpb25zLkxvYWRDbXNDb21wb25lbnRGYWlsXG4gICAgICAgIClbXSA9IFtdO1xuICAgICAgICBjb25zdCB1aWRzTGVmdCA9IG5ldyBTZXQ8c3RyaW5nPihjb21wb25lbnRVaWRzKTtcbiAgICAgICAgZm9yIChjb25zdCBjb21wb25lbnQgb2YgY29tcG9uZW50cykge1xuICAgICAgICAgIGFjdGlvbnMucHVzaChcbiAgICAgICAgICAgIG5ldyBDbXNBY3Rpb25zLkxvYWRDbXNDb21wb25lbnRTdWNjZXNzKHtcbiAgICAgICAgICAgICAgY29tcG9uZW50LFxuICAgICAgICAgICAgICB1aWQ6IGNvbXBvbmVudC51aWQsXG4gICAgICAgICAgICAgIHBhZ2VDb250ZXh0LFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICApO1xuICAgICAgICAgIHVpZHNMZWZ0LmRlbGV0ZShjb21wb25lbnQudWlkKTtcbiAgICAgICAgfVxuICAgICAgICAvLyB3ZSBoYXZlIHRvIGVtaXQgTG9hZENtc0NvbXBvbmVudEZhaWwgZm9yIGFsbCBjb21wb25lbnQncyB1aWRzIHRoYXRcbiAgICAgICAgLy8gYXJlIG1pc3NpbmcgZnJvbSB0aGUgcmVzcG9uc2VcbiAgICAgICAgdWlkc0xlZnQuZm9yRWFjaCgodWlkKSA9PiB7XG4gICAgICAgICAgYWN0aW9ucy5wdXNoKFxuICAgICAgICAgICAgbmV3IENtc0FjdGlvbnMuTG9hZENtc0NvbXBvbmVudEZhaWwoe1xuICAgICAgICAgICAgICB1aWQsXG4gICAgICAgICAgICAgIHBhZ2VDb250ZXh0LFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGZyb20oYWN0aW9ucyk7XG4gICAgICB9KSxcbiAgICAgIGNhdGNoRXJyb3IoKGVycm9yKSA9PlxuICAgICAgICBmcm9tKFxuICAgICAgICAgIGNvbXBvbmVudFVpZHMubWFwKFxuICAgICAgICAgICAgKHVpZCkgPT5cbiAgICAgICAgICAgICAgbmV3IENtc0FjdGlvbnMuTG9hZENtc0NvbXBvbmVudEZhaWwoe1xuICAgICAgICAgICAgICAgIHVpZCxcbiAgICAgICAgICAgICAgICBlcnJvcjogbm9ybWFsaXplSHR0cEVycm9yKGVycm9yKSxcbiAgICAgICAgICAgICAgICBwYWdlQ29udGV4dCxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgIClcbiAgICApO1xuICB9XG59XG4iXX0=
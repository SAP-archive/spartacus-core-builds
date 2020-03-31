import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { SiteConnector } from '../../../site-context/connectors/site.connector';
import { StateLoaderActions } from '../../../state/utils/index';
import { makeErrorSerializable } from '../../../util/serialization-utils';
import { UserActions } from '../actions/index';
import { REGIONS } from '../user-state';
var RegionsEffects = /** @class */ (function () {
    function RegionsEffects(actions$, siteConnector) {
        var _this = this;
        this.actions$ = actions$;
        this.siteConnector = siteConnector;
        this.loadRegions$ = this.actions$.pipe(ofType(UserActions.LOAD_REGIONS), map(function (action) {
            return action.payload;
        }), switchMap(function (countryCode) {
            return _this.siteConnector.getRegions(countryCode).pipe(map(function (regions) {
                return new UserActions.LoadRegionsSuccess({
                    entities: regions,
                    country: countryCode,
                });
            }), catchError(function (error) {
                return of(new UserActions.LoadRegionsFail(makeErrorSerializable(error)));
            }));
        }));
        this.resetRegions$ = this.actions$.pipe(ofType(UserActions.CLEAR_USER_MISCS_DATA, UserActions.CLEAR_REGIONS), map(function () {
            return new StateLoaderActions.LoaderResetAction(REGIONS);
        }));
    }
    RegionsEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: SiteConnector }
    ]; };
    __decorate([
        Effect()
    ], RegionsEffects.prototype, "loadRegions$", void 0);
    __decorate([
        Effect()
    ], RegionsEffects.prototype, "resetRegions$", void 0);
    RegionsEffects = __decorate([
        Injectable()
    ], RegionsEffects);
    return RegionsEffects;
}());
export { RegionsEffects };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaW9ucy5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9zdG9yZS9lZmZlY3RzL3JlZ2lvbnMuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV4RCxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUNoRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDL0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUd4QztJQStCRSx3QkFDVSxRQUFpQixFQUNqQixhQUE0QjtRQUZ0QyxpQkFHSTtRQUZNLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUEvQnRDLGlCQUFZLEdBQTBDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUN0RSxNQUFNLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxFQUNoQyxHQUFHLENBQUMsVUFBQyxNQUErQjtZQUNsQyxPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDeEIsQ0FBQyxDQUFDLEVBQ0YsU0FBUyxDQUFDLFVBQUMsV0FBbUI7WUFDNUIsT0FBTyxLQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQ3BELEdBQUcsQ0FDRCxVQUFDLE9BQU87Z0JBQ04sT0FBQSxJQUFJLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQztvQkFDakMsUUFBUSxFQUFFLE9BQU87b0JBQ2pCLE9BQU8sRUFBRSxXQUFXO2lCQUNyQixDQUFDO1lBSEYsQ0FHRSxDQUNMLEVBQ0QsVUFBVSxDQUFDLFVBQUMsS0FBSztnQkFDZixPQUFBLEVBQUUsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxlQUFlLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUFqRSxDQUFpRSxDQUNsRSxDQUNGLENBQUM7UUFDSixDQUFDLENBQUMsQ0FDSCxDQUFDO1FBR0Ysa0JBQWEsR0FBdUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BELE1BQU0sQ0FBQyxXQUFXLENBQUMscUJBQXFCLEVBQUUsV0FBVyxDQUFDLGFBQWEsQ0FBQyxFQUNwRSxHQUFHLENBQUM7WUFDRixPQUFPLElBQUksa0JBQWtCLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDM0QsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUtDLENBQUM7O2dCQUZnQixPQUFPO2dCQUNGLGFBQWE7O0lBL0J0QztRQURDLE1BQU0sRUFBRTt3REFvQlA7SUFHRjtRQURDLE1BQU0sRUFBRTt5REFNUDtJQTdCUyxjQUFjO1FBRDFCLFVBQVUsRUFBRTtPQUNBLGNBQWMsQ0FtQzFCO0lBQUQscUJBQUM7Q0FBQSxBQW5DRCxJQW1DQztTQW5DWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFNpdGVDb25uZWN0b3IgfSBmcm9tICcuLi8uLi8uLi9zaXRlLWNvbnRleHQvY29ubmVjdG9ycy9zaXRlLmNvbm5lY3Rvcic7XG5pbXBvcnQgeyBTdGF0ZUxvYWRlckFjdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9pbmRleCc7XG5pbXBvcnQgeyBtYWtlRXJyb3JTZXJpYWxpemFibGUgfSBmcm9tICcuLi8uLi8uLi91dGlsL3NlcmlhbGl6YXRpb24tdXRpbHMnO1xuaW1wb3J0IHsgVXNlckFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IFJFR0lPTlMgfSBmcm9tICcuLi91c2VyLXN0YXRlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFJlZ2lvbnNFZmZlY3RzIHtcbiAgQEVmZmVjdCgpXG4gIGxvYWRSZWdpb25zJDogT2JzZXJ2YWJsZTxVc2VyQWN0aW9ucy5SZWdpb25zQWN0aW9uPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoVXNlckFjdGlvbnMuTE9BRF9SRUdJT05TKSxcbiAgICBtYXAoKGFjdGlvbjogVXNlckFjdGlvbnMuTG9hZFJlZ2lvbnMpID0+IHtcbiAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZDtcbiAgICB9KSxcbiAgICBzd2l0Y2hNYXAoKGNvdW50cnlDb2RlOiBzdHJpbmcpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLnNpdGVDb25uZWN0b3IuZ2V0UmVnaW9ucyhjb3VudHJ5Q29kZSkucGlwZShcbiAgICAgICAgbWFwKFxuICAgICAgICAgIChyZWdpb25zKSA9PlxuICAgICAgICAgICAgbmV3IFVzZXJBY3Rpb25zLkxvYWRSZWdpb25zU3VjY2Vzcyh7XG4gICAgICAgICAgICAgIGVudGl0aWVzOiByZWdpb25zLFxuICAgICAgICAgICAgICBjb3VudHJ5OiBjb3VudHJ5Q29kZSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICksXG4gICAgICAgIGNhdGNoRXJyb3IoKGVycm9yKSA9PlxuICAgICAgICAgIG9mKG5ldyBVc2VyQWN0aW9ucy5Mb2FkUmVnaW9uc0ZhaWwobWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKSkpXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBARWZmZWN0KClcbiAgcmVzZXRSZWdpb25zJDogT2JzZXJ2YWJsZTxBY3Rpb24+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShVc2VyQWN0aW9ucy5DTEVBUl9VU0VSX01JU0NTX0RBVEEsIFVzZXJBY3Rpb25zLkNMRUFSX1JFR0lPTlMpLFxuICAgIG1hcCgoKSA9PiB7XG4gICAgICByZXR1cm4gbmV3IFN0YXRlTG9hZGVyQWN0aW9ucy5Mb2FkZXJSZXNldEFjdGlvbihSRUdJT05TKTtcbiAgICB9KVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBzaXRlQ29ubmVjdG9yOiBTaXRlQ29ubmVjdG9yXG4gICkge31cbn1cbiJdfQ==
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { SiteConnector } from '../../../site-context/connectors/site.connector';
import { StateLoaderActions } from '../../../state/utils/index';
import { makeErrorSerializable } from '../../../util/serialization-utils';
import { UserActions } from '../actions/index';
import { REGIONS } from '../user-state';
export class RegionsEffects {
    /**
     * @param {?} actions$
     * @param {?} siteConnector
     */
    constructor(actions$, siteConnector) {
        this.actions$ = actions$;
        this.siteConnector = siteConnector;
        this.loadRegions$ = this.actions$.pipe(ofType(UserActions.LOAD_REGIONS), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => {
            return action.payload;
        })), switchMap((/**
         * @param {?} countryCode
         * @return {?}
         */
        (countryCode) => {
            return this.siteConnector.getRegions(countryCode).pipe(map((/**
             * @param {?} regions
             * @return {?}
             */
            regions => new UserActions.LoadRegionsSuccess({
                entities: regions,
                country: countryCode,
            }))), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new UserActions.LoadRegionsFail(makeErrorSerializable(error))))));
        })));
        this.resetRegions$ = this.actions$.pipe(ofType(UserActions.CLEAR_USER_MISCS_DATA, UserActions.CLEAR_REGIONS), map((/**
         * @return {?}
         */
        () => {
            return new StateLoaderActions.LoaderResetAction(REGIONS);
        })));
    }
}
RegionsEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
RegionsEffects.ctorParameters = () => [
    { type: Actions },
    { type: SiteConnector }
];
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], RegionsEffects.prototype, "loadRegions$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], RegionsEffects.prototype, "resetRegions$", void 0);
if (false) {
    /** @type {?} */
    RegionsEffects.prototype.loadRegions$;
    /** @type {?} */
    RegionsEffects.prototype.resetRegions$;
    /**
     * @type {?}
     * @private
     */
    RegionsEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    RegionsEffects.prototype.siteConnector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaW9ucy5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9zdG9yZS9lZmZlY3RzL3JlZ2lvbnMuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUMvQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3hDLE1BQU0sT0FBTyxjQUFjOzs7OztJQStCekIsWUFDVSxRQUFpQixFQUNqQixhQUE0QjtRQUQ1QixhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBL0J0QyxpQkFBWSxHQUEwQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDdEUsTUFBTSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsRUFDaEMsR0FBRzs7OztRQUFDLENBQUMsTUFBK0IsRUFBRSxFQUFFO1lBQ3RDLE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUN4QixDQUFDLEVBQUMsRUFDRixTQUFTOzs7O1FBQUMsQ0FBQyxXQUFtQixFQUFFLEVBQUU7WUFDaEMsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQ3BELEdBQUc7Ozs7WUFDRCxPQUFPLENBQUMsRUFBRSxDQUNSLElBQUksV0FBVyxDQUFDLGtCQUFrQixDQUFDO2dCQUNqQyxRQUFRLEVBQUUsT0FBTztnQkFDakIsT0FBTyxFQUFFLFdBQVc7YUFDckIsQ0FBQyxFQUNMLEVBQ0QsVUFBVTs7OztZQUFDLEtBQUssQ0FBQyxFQUFFLENBQ2pCLEVBQUUsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxlQUFlLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUNsRSxDQUNGLENBQUM7UUFDSixDQUFDLEVBQUMsQ0FDSCxDQUFDO1FBR0Ysa0JBQWEsR0FBdUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BELE1BQU0sQ0FBQyxXQUFXLENBQUMscUJBQXFCLEVBQUUsV0FBVyxDQUFDLGFBQWEsQ0FBQyxFQUNwRSxHQUFHOzs7UUFBQyxHQUFHLEVBQUU7WUFDUCxPQUFPLElBQUksa0JBQWtCLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDM0QsQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUtDLENBQUM7OztZQW5DTCxVQUFVOzs7O1lBVkYsT0FBTztZQUlQLGFBQWE7O0FBU3BCO0lBREMsTUFBTSxFQUFFO3NDQUNLLFVBQVU7b0RBbUJ0QjtBQUdGO0lBREMsTUFBTSxFQUFFO3NDQUNNLFVBQVU7cURBS3ZCOzs7SUE1QkYsc0NBb0JFOztJQUVGLHVDQU1FOzs7OztJQUdBLGtDQUF5Qjs7Ozs7SUFDekIsdUNBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFNpdGVDb25uZWN0b3IgfSBmcm9tICcuLi8uLi8uLi9zaXRlLWNvbnRleHQvY29ubmVjdG9ycy9zaXRlLmNvbm5lY3Rvcic7XG5pbXBvcnQgeyBTdGF0ZUxvYWRlckFjdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9pbmRleCc7XG5pbXBvcnQgeyBtYWtlRXJyb3JTZXJpYWxpemFibGUgfSBmcm9tICcuLi8uLi8uLi91dGlsL3NlcmlhbGl6YXRpb24tdXRpbHMnO1xuaW1wb3J0IHsgVXNlckFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IFJFR0lPTlMgfSBmcm9tICcuLi91c2VyLXN0YXRlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFJlZ2lvbnNFZmZlY3RzIHtcbiAgQEVmZmVjdCgpXG4gIGxvYWRSZWdpb25zJDogT2JzZXJ2YWJsZTxVc2VyQWN0aW9ucy5SZWdpb25zQWN0aW9uPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoVXNlckFjdGlvbnMuTE9BRF9SRUdJT05TKSxcbiAgICBtYXAoKGFjdGlvbjogVXNlckFjdGlvbnMuTG9hZFJlZ2lvbnMpID0+IHtcbiAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZDtcbiAgICB9KSxcbiAgICBzd2l0Y2hNYXAoKGNvdW50cnlDb2RlOiBzdHJpbmcpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLnNpdGVDb25uZWN0b3IuZ2V0UmVnaW9ucyhjb3VudHJ5Q29kZSkucGlwZShcbiAgICAgICAgbWFwKFxuICAgICAgICAgIHJlZ2lvbnMgPT5cbiAgICAgICAgICAgIG5ldyBVc2VyQWN0aW9ucy5Mb2FkUmVnaW9uc1N1Y2Nlc3Moe1xuICAgICAgICAgICAgICBlbnRpdGllczogcmVnaW9ucyxcbiAgICAgICAgICAgICAgY291bnRyeTogY291bnRyeUNvZGUsXG4gICAgICAgICAgICB9KVxuICAgICAgICApLFxuICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgb2YobmV3IFVzZXJBY3Rpb25zLkxvYWRSZWdpb25zRmFpbChtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpKSlcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICByZXNldFJlZ2lvbnMkOiBPYnNlcnZhYmxlPEFjdGlvbj4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFVzZXJBY3Rpb25zLkNMRUFSX1VTRVJfTUlTQ1NfREFUQSwgVXNlckFjdGlvbnMuQ0xFQVJfUkVHSU9OUyksXG4gICAgbWFwKCgpID0+IHtcbiAgICAgIHJldHVybiBuZXcgU3RhdGVMb2FkZXJBY3Rpb25zLkxvYWRlclJlc2V0QWN0aW9uKFJFR0lPTlMpO1xuICAgIH0pXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIHNpdGVDb25uZWN0b3I6IFNpdGVDb25uZWN0b3JcbiAgKSB7fVxufVxuIl19
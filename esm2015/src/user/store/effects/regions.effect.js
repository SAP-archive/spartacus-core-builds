/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { SiteConnector } from '../../../site-context/connectors/site.connector';
import { LoaderResetAction } from '../../../state/index';
import { makeHttpErrorSerializable } from '../../../util/serialization-utils';
import * as fromActions from '../actions/index';
import { CLEAR_MISCS_DATA } from '../actions/index';
import { REGIONS } from '../user-state';
export class RegionsEffects {
    /**
     * @param {?} actions$
     * @param {?} siteConnector
     */
    constructor(actions$, siteConnector) {
        this.actions$ = actions$;
        this.siteConnector = siteConnector;
        this.loadRegions$ = this.actions$.pipe(ofType(fromActions.LOAD_REGIONS), map((/**
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
            regions => new fromActions.LoadRegionsSuccess({
                entities: regions,
                country: countryCode,
            }))), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new fromActions.LoadRegionsFail(makeHttpErrorSerializable(error))))));
        })));
        this.resetRegions$ = this.actions$.pipe(ofType(CLEAR_MISCS_DATA, fromActions.CLEAR_REGIONS), map((/**
         * @return {?}
         */
        () => {
            return new LoaderResetAction(REGIONS);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaW9ucy5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9zdG9yZS9lZmZlY3RzL3JlZ2lvbnMuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzlFLE9BQU8sS0FBSyxXQUFXLE1BQU0sa0JBQWtCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDcEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUd4QyxNQUFNLE9BQU8sY0FBYzs7Ozs7SUErQnpCLFlBQ1UsUUFBaUIsRUFDakIsYUFBNEI7UUFENUIsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQS9CdEMsaUJBQVksR0FBMEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3RFLE1BQU0sQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLEVBQ2hDLEdBQUc7Ozs7UUFBQyxDQUFDLE1BQStCLEVBQUUsRUFBRTtZQUN0QyxPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDeEIsQ0FBQyxFQUFDLEVBQ0YsU0FBUzs7OztRQUFDLENBQUMsV0FBbUIsRUFBRSxFQUFFO1lBQ2hDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUNwRCxHQUFHOzs7O1lBQ0QsT0FBTyxDQUFDLEVBQUUsQ0FDUixJQUFJLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQztnQkFDakMsUUFBUSxFQUFFLE9BQU87Z0JBQ2pCLE9BQU8sRUFBRSxXQUFXO2FBQ3JCLENBQUMsRUFDTCxFQUNELFVBQVU7Ozs7WUFBQyxLQUFLLENBQUMsRUFBRSxDQUNqQixFQUFFLENBQUMsSUFBSSxXQUFXLENBQUMsZUFBZSxDQUFDLHlCQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFDdEUsQ0FDRixDQUFDO1FBQ0osQ0FBQyxFQUFDLENBQ0gsQ0FBQztRQUdGLGtCQUFhLEdBQXVCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwRCxNQUFNLENBQUMsZ0JBQWdCLEVBQUUsV0FBVyxDQUFDLGFBQWEsQ0FBQyxFQUNuRCxHQUFHOzs7UUFBQyxHQUFHLEVBQUU7WUFDUCxPQUFPLElBQUksaUJBQWlCLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDeEMsQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUtDLENBQUM7OztZQW5DTCxVQUFVOzs7O1lBWEYsT0FBTztZQUlQLGFBQWE7O0FBVXBCO0lBREMsTUFBTSxFQUFFO3NDQUNLLFVBQVU7b0RBbUJ0QjtBQUdGO0lBREMsTUFBTSxFQUFFO3NDQUNNLFVBQVU7cURBS3ZCOzs7SUE1QkYsc0NBb0JFOztJQUVGLHVDQU1FOzs7OztJQUdBLGtDQUF5Qjs7Ozs7SUFDekIsdUNBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFNpdGVDb25uZWN0b3IgfSBmcm9tICcuLi8uLi8uLi9zaXRlLWNvbnRleHQvY29ubmVjdG9ycy9zaXRlLmNvbm5lY3Rvcic7XG5pbXBvcnQgeyBMb2FkZXJSZXNldEFjdGlvbiB9IGZyb20gJy4uLy4uLy4uL3N0YXRlL2luZGV4JztcbmltcG9ydCB7IG1ha2VIdHRwRXJyb3JTZXJpYWxpemFibGUgfSBmcm9tICcuLi8uLi8uLi91dGlsL3NlcmlhbGl6YXRpb24tdXRpbHMnO1xuaW1wb3J0ICogYXMgZnJvbUFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBDTEVBUl9NSVNDU19EQVRBIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBSRUdJT05TIH0gZnJvbSAnLi4vdXNlci1zdGF0ZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBSZWdpb25zRWZmZWN0cyB7XG4gIEBFZmZlY3QoKVxuICBsb2FkUmVnaW9ucyQ6IE9ic2VydmFibGU8ZnJvbUFjdGlvbnMuUmVnaW9uc0FjdGlvbj4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKGZyb21BY3Rpb25zLkxPQURfUkVHSU9OUyksXG4gICAgbWFwKChhY3Rpb246IGZyb21BY3Rpb25zLkxvYWRSZWdpb25zKSA9PiB7XG4gICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWQ7XG4gICAgfSksXG4gICAgc3dpdGNoTWFwKChjb3VudHJ5Q29kZTogc3RyaW5nKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5zaXRlQ29ubmVjdG9yLmdldFJlZ2lvbnMoY291bnRyeUNvZGUpLnBpcGUoXG4gICAgICAgIG1hcChcbiAgICAgICAgICByZWdpb25zID0+XG4gICAgICAgICAgICBuZXcgZnJvbUFjdGlvbnMuTG9hZFJlZ2lvbnNTdWNjZXNzKHtcbiAgICAgICAgICAgICAgZW50aXRpZXM6IHJlZ2lvbnMsXG4gICAgICAgICAgICAgIGNvdW50cnk6IGNvdW50cnlDb2RlLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgKSxcbiAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgIG9mKG5ldyBmcm9tQWN0aW9ucy5Mb2FkUmVnaW9uc0ZhaWwobWFrZUh0dHBFcnJvclNlcmlhbGl6YWJsZShlcnJvcikpKVxuICAgICAgICApXG4gICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIHJlc2V0UmVnaW9ucyQ6IE9ic2VydmFibGU8QWN0aW9uPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoQ0xFQVJfTUlTQ1NfREFUQSwgZnJvbUFjdGlvbnMuQ0xFQVJfUkVHSU9OUyksXG4gICAgbWFwKCgpID0+IHtcbiAgICAgIHJldHVybiBuZXcgTG9hZGVyUmVzZXRBY3Rpb24oUkVHSU9OUyk7XG4gICAgfSlcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgc2l0ZUNvbm5lY3RvcjogU2l0ZUNvbm5lY3RvclxuICApIHt9XG59XG4iXX0=
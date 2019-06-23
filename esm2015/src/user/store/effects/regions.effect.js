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
import { makeErrorSerializable } from '../../../util/serialization-utils';
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
            error => of(new fromActions.LoadRegionsFail(makeErrorSerializable(error))))));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaW9ucy5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9zdG9yZS9lZmZlY3RzL3JlZ2lvbnMuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzFFLE9BQU8sS0FBSyxXQUFXLE1BQU0sa0JBQWtCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDcEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUd4QyxNQUFNLE9BQU8sY0FBYzs7Ozs7SUErQnpCLFlBQ1UsUUFBaUIsRUFDakIsYUFBNEI7UUFENUIsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQS9CdEMsaUJBQVksR0FBMEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3RFLE1BQU0sQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLEVBQ2hDLEdBQUc7Ozs7UUFBQyxDQUFDLE1BQStCLEVBQUUsRUFBRTtZQUN0QyxPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDeEIsQ0FBQyxFQUFDLEVBQ0YsU0FBUzs7OztRQUFDLENBQUMsV0FBbUIsRUFBRSxFQUFFO1lBQ2hDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUNwRCxHQUFHOzs7O1lBQ0QsT0FBTyxDQUFDLEVBQUUsQ0FDUixJQUFJLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQztnQkFDakMsUUFBUSxFQUFFLE9BQU87Z0JBQ2pCLE9BQU8sRUFBRSxXQUFXO2FBQ3JCLENBQUMsRUFDTCxFQUNELFVBQVU7Ozs7WUFBQyxLQUFLLENBQUMsRUFBRSxDQUNqQixFQUFFLENBQUMsSUFBSSxXQUFXLENBQUMsZUFBZSxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFDbEUsQ0FDRixDQUFDO1FBQ0osQ0FBQyxFQUFDLENBQ0gsQ0FBQztRQUdGLGtCQUFhLEdBQXVCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwRCxNQUFNLENBQUMsZ0JBQWdCLEVBQUUsV0FBVyxDQUFDLGFBQWEsQ0FBQyxFQUNuRCxHQUFHOzs7UUFBQyxHQUFHLEVBQUU7WUFDUCxPQUFPLElBQUksaUJBQWlCLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDeEMsQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUtDLENBQUM7OztZQW5DTCxVQUFVOzs7O1lBWEYsT0FBTztZQUlQLGFBQWE7O0FBVXBCO0lBREMsTUFBTSxFQUFFO3NDQUNLLFVBQVU7b0RBbUJ0QjtBQUdGO0lBREMsTUFBTSxFQUFFO3NDQUNNLFVBQVU7cURBS3ZCOzs7SUE1QkYsc0NBb0JFOztJQUVGLHVDQU1FOzs7OztJQUdBLGtDQUF5Qjs7Ozs7SUFDekIsdUNBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFNpdGVDb25uZWN0b3IgfSBmcm9tICcuLi8uLi8uLi9zaXRlLWNvbnRleHQvY29ubmVjdG9ycy9zaXRlLmNvbm5lY3Rvcic7XG5pbXBvcnQgeyBMb2FkZXJSZXNldEFjdGlvbiB9IGZyb20gJy4uLy4uLy4uL3N0YXRlL2luZGV4JztcbmltcG9ydCB7IG1ha2VFcnJvclNlcmlhbGl6YWJsZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvc2VyaWFsaXphdGlvbi11dGlscyc7XG5pbXBvcnQgKiBhcyBmcm9tQWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IENMRUFSX01JU0NTX0RBVEEgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IFJFR0lPTlMgfSBmcm9tICcuLi91c2VyLXN0YXRlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFJlZ2lvbnNFZmZlY3RzIHtcbiAgQEVmZmVjdCgpXG4gIGxvYWRSZWdpb25zJDogT2JzZXJ2YWJsZTxmcm9tQWN0aW9ucy5SZWdpb25zQWN0aW9uPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoZnJvbUFjdGlvbnMuTE9BRF9SRUdJT05TKSxcbiAgICBtYXAoKGFjdGlvbjogZnJvbUFjdGlvbnMuTG9hZFJlZ2lvbnMpID0+IHtcbiAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZDtcbiAgICB9KSxcbiAgICBzd2l0Y2hNYXAoKGNvdW50cnlDb2RlOiBzdHJpbmcpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLnNpdGVDb25uZWN0b3IuZ2V0UmVnaW9ucyhjb3VudHJ5Q29kZSkucGlwZShcbiAgICAgICAgbWFwKFxuICAgICAgICAgIHJlZ2lvbnMgPT5cbiAgICAgICAgICAgIG5ldyBmcm9tQWN0aW9ucy5Mb2FkUmVnaW9uc1N1Y2Nlc3Moe1xuICAgICAgICAgICAgICBlbnRpdGllczogcmVnaW9ucyxcbiAgICAgICAgICAgICAgY291bnRyeTogY291bnRyeUNvZGUsXG4gICAgICAgICAgICB9KVxuICAgICAgICApLFxuICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgb2YobmV3IGZyb21BY3Rpb25zLkxvYWRSZWdpb25zRmFpbChtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpKSlcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICByZXNldFJlZ2lvbnMkOiBPYnNlcnZhYmxlPEFjdGlvbj4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKENMRUFSX01JU0NTX0RBVEEsIGZyb21BY3Rpb25zLkNMRUFSX1JFR0lPTlMpLFxuICAgIG1hcCgoKSA9PiB7XG4gICAgICByZXR1cm4gbmV3IExvYWRlclJlc2V0QWN0aW9uKFJFR0lPTlMpO1xuICAgIH0pXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIHNpdGVDb25uZWN0b3I6IFNpdGVDb25uZWN0b3JcbiAgKSB7fVxufVxuIl19
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as fromActions from '../actions/index';
import { CLEAR_MISCS_DATA } from '../actions/index';
import { REGIONS } from '../user-state';
import { LoaderResetAction } from '../../../state/index';
import { SiteConnector } from '../../../site-context/connectors/site.connector';
var RegionsEffects = /** @class */ (function () {
    function RegionsEffects(actions$, siteConnector) {
        var _this = this;
        this.actions$ = actions$;
        this.siteConnector = siteConnector;
        this.loadRegions$ = this.actions$.pipe(ofType(fromActions.LOAD_REGIONS), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) {
            return action.payload;
        })), switchMap((/**
         * @param {?} countryCode
         * @return {?}
         */
        function (countryCode) {
            return _this.siteConnector.getRegions(countryCode).pipe(map((/**
             * @param {?} regions
             * @return {?}
             */
            function (regions) {
                return new fromActions.LoadRegionsSuccess({
                    entities: regions,
                    country: countryCode,
                });
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return of(new fromActions.LoadRegionsFail(error)); })));
        })));
        this.resetRegions$ = this.actions$.pipe(ofType(CLEAR_MISCS_DATA, fromActions.CLEAR_REGIONS), map((/**
         * @return {?}
         */
        function () {
            return new LoaderResetAction(REGIONS);
        })));
    }
    RegionsEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    RegionsEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: SiteConnector }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], RegionsEffects.prototype, "loadRegions$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], RegionsEffects.prototype, "resetRegions$", void 0);
    return RegionsEffects;
}());
export { RegionsEffects };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaW9ucy5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9zdG9yZS9lZmZlY3RzL3JlZ2lvbnMuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFNUQsT0FBTyxLQUFLLFdBQVcsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUVoRjtJQThCRSx3QkFDVSxRQUFpQixFQUNqQixhQUE0QjtRQUZ0QyxpQkFHSTtRQUZNLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUE3QnRDLGlCQUFZLEdBQTBDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUN0RSxNQUFNLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxFQUNoQyxHQUFHOzs7O1FBQUMsVUFBQyxNQUErQjtZQUNsQyxPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDeEIsQ0FBQyxFQUFDLEVBQ0YsU0FBUzs7OztRQUFDLFVBQUMsV0FBbUI7WUFDNUIsT0FBTyxLQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQ3BELEdBQUc7Ozs7WUFDRCxVQUFBLE9BQU87Z0JBQ0wsT0FBQSxJQUFJLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQztvQkFDakMsUUFBUSxFQUFFLE9BQU87b0JBQ2pCLE9BQU8sRUFBRSxXQUFXO2lCQUNyQixDQUFDO1lBSEYsQ0FHRSxFQUNMLEVBQ0QsVUFBVTs7OztZQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsRUFBRSxDQUFDLElBQUksV0FBVyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUExQyxDQUEwQyxFQUFDLENBQ2hFLENBQUM7UUFDSixDQUFDLEVBQUMsQ0FDSCxDQUFDO1FBR0Ysa0JBQWEsR0FBdUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BELE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRSxXQUFXLENBQUMsYUFBYSxDQUFDLEVBQ25ELEdBQUc7OztRQUFDO1lBQ0YsT0FBTyxJQUFJLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3hDLENBQUMsRUFBQyxDQUNILENBQUM7SUFLQyxDQUFDOztnQkFqQ0wsVUFBVTs7OztnQkFaRixPQUFPO2dCQVVQLGFBQWE7O0lBS3BCO1FBREMsTUFBTSxFQUFFOzBDQUNLLFVBQVU7d0RBaUJ0QjtJQUdGO1FBREMsTUFBTSxFQUFFOzBDQUNNLFVBQVU7eURBS3ZCO0lBTUoscUJBQUM7Q0FBQSxBQWxDRCxJQWtDQztTQWpDWSxjQUFjOzs7SUFDekIsc0NBa0JFOztJQUVGLHVDQU1FOzs7OztJQUdBLGtDQUF5Qjs7Ozs7SUFDekIsdUNBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCAqIGFzIGZyb21BY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgQ0xFQVJfTUlTQ1NfREFUQSB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgUkVHSU9OUyB9IGZyb20gJy4uL3VzZXItc3RhdGUnO1xuaW1wb3J0IHsgTG9hZGVyUmVzZXRBY3Rpb24gfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS9pbmRleCc7XG5pbXBvcnQgeyBTaXRlQ29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vLi4vc2l0ZS1jb250ZXh0L2Nvbm5lY3RvcnMvc2l0ZS5jb25uZWN0b3InO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUmVnaW9uc0VmZmVjdHMge1xuICBARWZmZWN0KClcbiAgbG9hZFJlZ2lvbnMkOiBPYnNlcnZhYmxlPGZyb21BY3Rpb25zLlJlZ2lvbnNBY3Rpb24+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShmcm9tQWN0aW9ucy5MT0FEX1JFR0lPTlMpLFxuICAgIG1hcCgoYWN0aW9uOiBmcm9tQWN0aW9ucy5Mb2FkUmVnaW9ucykgPT4ge1xuICAgICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkO1xuICAgIH0pLFxuICAgIHN3aXRjaE1hcCgoY291bnRyeUNvZGU6IHN0cmluZykgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuc2l0ZUNvbm5lY3Rvci5nZXRSZWdpb25zKGNvdW50cnlDb2RlKS5waXBlKFxuICAgICAgICBtYXAoXG4gICAgICAgICAgcmVnaW9ucyA9PlxuICAgICAgICAgICAgbmV3IGZyb21BY3Rpb25zLkxvYWRSZWdpb25zU3VjY2Vzcyh7XG4gICAgICAgICAgICAgIGVudGl0aWVzOiByZWdpb25zLFxuICAgICAgICAgICAgICBjb3VudHJ5OiBjb3VudHJ5Q29kZSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICksXG4gICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4gb2YobmV3IGZyb21BY3Rpb25zLkxvYWRSZWdpb25zRmFpbChlcnJvcikpKVxuICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICByZXNldFJlZ2lvbnMkOiBPYnNlcnZhYmxlPEFjdGlvbj4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKENMRUFSX01JU0NTX0RBVEEsIGZyb21BY3Rpb25zLkNMRUFSX1JFR0lPTlMpLFxuICAgIG1hcCgoKSA9PiB7XG4gICAgICByZXR1cm4gbmV3IExvYWRlclJlc2V0QWN0aW9uKFJFR0lPTlMpO1xuICAgIH0pXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIHNpdGVDb25uZWN0b3I6IFNpdGVDb25uZWN0b3JcbiAgKSB7fVxufVxuIl19
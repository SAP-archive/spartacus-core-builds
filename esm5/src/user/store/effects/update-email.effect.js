/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators';
import { makeHttpErrorSerializable } from '../../../util/serialization-utils';
import { UserConnector } from '../../connectors/user/user.connector';
import * as fromUpdateEmailAction from '../actions/update-email.action';
var UpdateEmailEffects = /** @class */ (function () {
    function UpdateEmailEffects(actions$, userAccountConnector) {
        var _this = this;
        this.actions$ = actions$;
        this.userAccountConnector = userAccountConnector;
        this.updateEmail$ = this.actions$.pipe(ofType(fromUpdateEmailAction.UPDATE_EMAIL), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.payload; })), concatMap((/**
         * @param {?} payload
         * @return {?}
         */
        function (payload) {
            return _this.userAccountConnector
                .updateEmail(payload.uid, payload.password, payload.newUid)
                .pipe(map((/**
             * @return {?}
             */
            function () {
                return new fromUpdateEmailAction.UpdateEmailSuccessAction(payload.newUid);
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return of(new fromUpdateEmailAction.UpdateEmailErrorAction(makeHttpErrorSerializable(error)));
            })));
        })));
    }
    UpdateEmailEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    UpdateEmailEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: UserConnector }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], UpdateEmailEffects.prototype, "updateEmail$", void 0);
    return UpdateEmailEffects;
}());
export { UpdateEmailEffects };
if (false) {
    /** @type {?} */
    UpdateEmailEffects.prototype.updateEmail$;
    /**
     * @type {?}
     * @private
     */
    UpdateEmailEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    UpdateEmailEffects.prototype.userAccountConnector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLWVtYWlsLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3N0b3JlL2VmZmVjdHMvdXBkYXRlLWVtYWlsLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUNyRSxPQUFPLEtBQUsscUJBQXFCLE1BQU0sZ0NBQWdDLENBQUM7QUFFeEU7SUFFRSw0QkFDVSxRQUFpQixFQUNqQixvQkFBbUM7UUFGN0MsaUJBR0k7UUFGTSxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBZTtRQUk3QyxpQkFBWSxHQUdSLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMscUJBQXFCLENBQUMsWUFBWSxDQUFDLEVBQzFDLEdBQUc7Ozs7UUFBQyxVQUFDLE1BQStDLElBQUssT0FBQSxNQUFNLENBQUMsT0FBTyxFQUFkLENBQWMsRUFBQyxFQUN4RSxTQUFTOzs7O1FBQUMsVUFBQSxPQUFPO1lBQ2YsT0FBQSxLQUFJLENBQUMsb0JBQW9CO2lCQUN0QixXQUFXLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUM7aUJBQzFELElBQUksQ0FDSCxHQUFHOzs7WUFDRDtnQkFDRSxPQUFBLElBQUkscUJBQXFCLENBQUMsd0JBQXdCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztZQUFsRSxDQUFrRSxFQUNyRSxFQUNELFVBQVU7Ozs7WUFBQyxVQUFBLEtBQUs7Z0JBQ2QsT0FBQSxFQUFFLENBQ0EsSUFBSSxxQkFBcUIsQ0FBQyxzQkFBc0IsQ0FDOUMseUJBQXlCLENBQUMsS0FBSyxDQUFDLENBQ2pDLENBQ0Y7WUFKRCxDQUlDLEVBQ0YsQ0FDRjtRQWRILENBY0csRUFDSixDQUNGLENBQUM7SUExQkMsQ0FBQzs7Z0JBTEwsVUFBVTs7OztnQkFQRixPQUFPO2dCQUlQLGFBQWE7O0lBV3BCO1FBREMsTUFBTSxFQUFFOzBDQUNLLFVBQVU7NERBdUJ0QjtJQUNKLHlCQUFDO0NBQUEsQUFoQ0QsSUFnQ0M7U0EvQlksa0JBQWtCOzs7SUFNN0IsMENBd0JFOzs7OztJQTVCQSxzQ0FBeUI7Ozs7O0lBQ3pCLGtEQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgY29uY2F0TWFwLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBtYWtlSHR0cEVycm9yU2VyaWFsaXphYmxlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9zZXJpYWxpemF0aW9uLXV0aWxzJztcbmltcG9ydCB7IFVzZXJDb25uZWN0b3IgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL3VzZXIvdXNlci5jb25uZWN0b3InO1xuaW1wb3J0ICogYXMgZnJvbVVwZGF0ZUVtYWlsQWN0aW9uIGZyb20gJy4uL2FjdGlvbnMvdXBkYXRlLWVtYWlsLmFjdGlvbic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVcGRhdGVFbWFpbEVmZmVjdHMge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgdXNlckFjY291bnRDb25uZWN0b3I6IFVzZXJDb25uZWN0b3JcbiAgKSB7fVxuXG4gIEBFZmZlY3QoKVxuICB1cGRhdGVFbWFpbCQ6IE9ic2VydmFibGU8XG4gICAgfCBmcm9tVXBkYXRlRW1haWxBY3Rpb24uVXBkYXRlRW1haWxTdWNjZXNzQWN0aW9uXG4gICAgfCBmcm9tVXBkYXRlRW1haWxBY3Rpb24uVXBkYXRlRW1haWxFcnJvckFjdGlvblxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShmcm9tVXBkYXRlRW1haWxBY3Rpb24uVVBEQVRFX0VNQUlMKSxcbiAgICBtYXAoKGFjdGlvbjogZnJvbVVwZGF0ZUVtYWlsQWN0aW9uLlVwZGF0ZUVtYWlsQWN0aW9uKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgY29uY2F0TWFwKHBheWxvYWQgPT5cbiAgICAgIHRoaXMudXNlckFjY291bnRDb25uZWN0b3JcbiAgICAgICAgLnVwZGF0ZUVtYWlsKHBheWxvYWQudWlkLCBwYXlsb2FkLnBhc3N3b3JkLCBwYXlsb2FkLm5ld1VpZClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKFxuICAgICAgICAgICAgKCkgPT5cbiAgICAgICAgICAgICAgbmV3IGZyb21VcGRhdGVFbWFpbEFjdGlvbi5VcGRhdGVFbWFpbFN1Y2Nlc3NBY3Rpb24ocGF5bG9hZC5uZXdVaWQpXG4gICAgICAgICAgKSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICBvZihcbiAgICAgICAgICAgICAgbmV3IGZyb21VcGRhdGVFbWFpbEFjdGlvbi5VcGRhdGVFbWFpbEVycm9yQWN0aW9uKFxuICAgICAgICAgICAgICAgIG1ha2VIdHRwRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICApXG4gICk7XG59XG4iXX0=
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators';
import { makeErrorSerializable } from '../../../util/serialization-utils';
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
                return of(new fromUpdateEmailAction.UpdateEmailErrorAction(makeErrorSerializable(error)));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLWVtYWlsLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3N0b3JlL2VmZmVjdHMvdXBkYXRlLWVtYWlsLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUNyRSxPQUFPLEtBQUsscUJBQXFCLE1BQU0sZ0NBQWdDLENBQUM7QUFFeEU7SUFFRSw0QkFDVSxRQUFpQixFQUNqQixvQkFBbUM7UUFGN0MsaUJBR0k7UUFGTSxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBZTtRQUk3QyxpQkFBWSxHQUdSLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMscUJBQXFCLENBQUMsWUFBWSxDQUFDLEVBQzFDLEdBQUc7Ozs7UUFBQyxVQUFDLE1BQStDLElBQUssT0FBQSxNQUFNLENBQUMsT0FBTyxFQUFkLENBQWMsRUFBQyxFQUN4RSxTQUFTOzs7O1FBQUMsVUFBQSxPQUFPO1lBQ2YsT0FBQSxLQUFJLENBQUMsb0JBQW9CO2lCQUN0QixXQUFXLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUM7aUJBQzFELElBQUksQ0FDSCxHQUFHOzs7WUFDRDtnQkFDRSxPQUFBLElBQUkscUJBQXFCLENBQUMsd0JBQXdCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztZQUFsRSxDQUFrRSxFQUNyRSxFQUNELFVBQVU7Ozs7WUFBQyxVQUFBLEtBQUs7Z0JBQ2QsT0FBQSxFQUFFLENBQ0EsSUFBSSxxQkFBcUIsQ0FBQyxzQkFBc0IsQ0FDOUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQzdCLENBQ0Y7WUFKRCxDQUlDLEVBQ0YsQ0FDRjtRQWRILENBY0csRUFDSixDQUNGLENBQUM7SUExQkMsQ0FBQzs7Z0JBTEwsVUFBVTs7OztnQkFQRixPQUFPO2dCQUlQLGFBQWE7O0lBV3BCO1FBREMsTUFBTSxFQUFFOzBDQUNLLFVBQVU7NERBdUJ0QjtJQUNKLHlCQUFDO0NBQUEsQUFoQ0QsSUFnQ0M7U0EvQlksa0JBQWtCOzs7SUFNN0IsMENBd0JFOzs7OztJQTVCQSxzQ0FBeUI7Ozs7O0lBQ3pCLGtEQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgY29uY2F0TWFwLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBtYWtlRXJyb3JTZXJpYWxpemFibGUgfSBmcm9tICcuLi8uLi8uLi91dGlsL3NlcmlhbGl6YXRpb24tdXRpbHMnO1xuaW1wb3J0IHsgVXNlckNvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvdXNlci91c2VyLmNvbm5lY3Rvcic7XG5pbXBvcnQgKiBhcyBmcm9tVXBkYXRlRW1haWxBY3Rpb24gZnJvbSAnLi4vYWN0aW9ucy91cGRhdGUtZW1haWwuYWN0aW9uJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVwZGF0ZUVtYWlsRWZmZWN0cyB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSB1c2VyQWNjb3VudENvbm5lY3RvcjogVXNlckNvbm5lY3RvclxuICApIHt9XG5cbiAgQEVmZmVjdCgpXG4gIHVwZGF0ZUVtYWlsJDogT2JzZXJ2YWJsZTxcbiAgICB8IGZyb21VcGRhdGVFbWFpbEFjdGlvbi5VcGRhdGVFbWFpbFN1Y2Nlc3NBY3Rpb25cbiAgICB8IGZyb21VcGRhdGVFbWFpbEFjdGlvbi5VcGRhdGVFbWFpbEVycm9yQWN0aW9uXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKGZyb21VcGRhdGVFbWFpbEFjdGlvbi5VUERBVEVfRU1BSUwpLFxuICAgIG1hcCgoYWN0aW9uOiBmcm9tVXBkYXRlRW1haWxBY3Rpb24uVXBkYXRlRW1haWxBY3Rpb24pID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBjb25jYXRNYXAocGF5bG9hZCA9PlxuICAgICAgdGhpcy51c2VyQWNjb3VudENvbm5lY3RvclxuICAgICAgICAudXBkYXRlRW1haWwocGF5bG9hZC51aWQsIHBheWxvYWQucGFzc3dvcmQsIHBheWxvYWQubmV3VWlkKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAoXG4gICAgICAgICAgICAoKSA9PlxuICAgICAgICAgICAgICBuZXcgZnJvbVVwZGF0ZUVtYWlsQWN0aW9uLlVwZGF0ZUVtYWlsU3VjY2Vzc0FjdGlvbihwYXlsb2FkLm5ld1VpZClcbiAgICAgICAgICApLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICAgIG9mKFxuICAgICAgICAgICAgICBuZXcgZnJvbVVwZGF0ZUVtYWlsQWN0aW9uLlVwZGF0ZUVtYWlsRXJyb3JBY3Rpb24oXG4gICAgICAgICAgICAgICAgbWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgKVxuICApO1xufVxuIl19
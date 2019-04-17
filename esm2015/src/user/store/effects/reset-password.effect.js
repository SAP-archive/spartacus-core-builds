/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import * as fromActions from '../actions/index';
import { OccUserService } from '../../occ/user.service';
import { GlobalMessageType, AddMessage } from '../../../global-message/index';
export class ResetPasswordEffects {
    /**
     * @param {?} actions$
     * @param {?} occUserService
     */
    constructor(actions$, occUserService) {
        this.actions$ = actions$;
        this.occUserService = occUserService;
        this.resetPassword$ = this.actions$.pipe(ofType(fromActions.RESET_PASSWORD), map((action) => {
            return action.payload;
        }), switchMap(({ token, password }) => {
            return this.occUserService.resetPassword(token, password).pipe(switchMap(() => [
                new fromActions.ResetPasswordSuccess(),
                new AddMessage({
                    text: 'Success! You can now login using your new password.',
                    type: GlobalMessageType.MSG_TYPE_CONFIRMATION,
                }),
            ]), catchError(error => of(new fromActions.ResetPasswordFail(error))));
        }));
    }
}
ResetPasswordEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ResetPasswordEffects.ctorParameters = () => [
    { type: Actions },
    { type: OccUserService }
];
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], ResetPasswordEffects.prototype, "resetPassword$", void 0);
if (false) {
    /** @type {?} */
    ResetPasswordEffects.prototype.resetPassword$;
    /**
     * @type {?}
     * @private
     */
    ResetPasswordEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    ResetPasswordEffects.prototype.occUserService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzZXQtcGFzc3dvcmQuZWZmZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvc3RvcmUvZWZmZWN0cy9yZXNldC1wYXNzd29yZC5lZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV4RCxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU1RCxPQUFPLEtBQUssV0FBVyxNQUFNLGtCQUFrQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsVUFBVSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFHOUUsTUFBTSxPQUFPLG9CQUFvQjs7Ozs7SUF5Qi9CLFlBQ1UsUUFBaUIsRUFDakIsY0FBOEI7UUFEOUIsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUF6QnhDLG1CQUFjLEdBSVYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLEVBQ2xDLEdBQUcsQ0FBQyxDQUFDLE1BQWlDLEVBQUUsRUFBRTtZQUN4QyxPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUM7UUFDeEIsQ0FBQyxDQUFDLEVBQ0YsU0FBUyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRTtZQUNoQyxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQzVELFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztnQkFDZCxJQUFJLFdBQVcsQ0FBQyxvQkFBb0IsRUFBRTtnQkFDdEMsSUFBSSxVQUFVLENBQUM7b0JBQ2IsSUFBSSxFQUFFLHFEQUFxRDtvQkFDM0QsSUFBSSxFQUFFLGlCQUFpQixDQUFDLHFCQUFxQjtpQkFDOUMsQ0FBQzthQUNILENBQUMsRUFDRixVQUFVLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxXQUFXLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUNsRSxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUtDLENBQUM7OztZQTdCTCxVQUFVOzs7O1lBVE0sT0FBTztZQU1mLGNBQWM7O0FBTXJCO0lBREMsTUFBTSxFQUFFO3NDQUNPLFVBQVU7NERBcUJ4Qjs7O0lBdEJGLDhDQXNCRTs7Ozs7SUFHQSx3Q0FBeUI7Ozs7O0lBQ3pCLDhDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRWZmZWN0LCBBY3Rpb25zLCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHN3aXRjaE1hcCwgbWFwLCBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgKiBhcyBmcm9tQWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IE9jY1VzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vb2NjL3VzZXIuc2VydmljZSc7XG5pbXBvcnQgeyBHbG9iYWxNZXNzYWdlVHlwZSwgQWRkTWVzc2FnZSB9IGZyb20gJy4uLy4uLy4uL2dsb2JhbC1tZXNzYWdlL2luZGV4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFJlc2V0UGFzc3dvcmRFZmZlY3RzIHtcbiAgQEVmZmVjdCgpXG4gIHJlc2V0UGFzc3dvcmQkOiBPYnNlcnZhYmxlPFxuICAgIHwgZnJvbUFjdGlvbnMuUmVzZXRQYXNzd29yZFN1Y2Nlc3NcbiAgICB8IEFkZE1lc3NhZ2VcbiAgICB8IGZyb21BY3Rpb25zLlJlc2V0UGFzc3dvcmRGYWlsXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKGZyb21BY3Rpb25zLlJFU0VUX1BBU1NXT1JEKSxcbiAgICBtYXAoKGFjdGlvbjogZnJvbUFjdGlvbnMuUmVzZXRQYXNzd29yZCkgPT4ge1xuICAgICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkO1xuICAgIH0pLFxuICAgIHN3aXRjaE1hcCgoeyB0b2tlbiwgcGFzc3dvcmQgfSkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMub2NjVXNlclNlcnZpY2UucmVzZXRQYXNzd29yZCh0b2tlbiwgcGFzc3dvcmQpLnBpcGUoXG4gICAgICAgIHN3aXRjaE1hcCgoKSA9PiBbXG4gICAgICAgICAgbmV3IGZyb21BY3Rpb25zLlJlc2V0UGFzc3dvcmRTdWNjZXNzKCksXG4gICAgICAgICAgbmV3IEFkZE1lc3NhZ2Uoe1xuICAgICAgICAgICAgdGV4dDogJ1N1Y2Nlc3MhIFlvdSBjYW4gbm93IGxvZ2luIHVzaW5nIHlvdXIgbmV3IHBhc3N3b3JkLicsXG4gICAgICAgICAgICB0eXBlOiBHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9DT05GSVJNQVRJT04sXG4gICAgICAgICAgfSksXG4gICAgICAgIF0pLFxuICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+IG9mKG5ldyBmcm9tQWN0aW9ucy5SZXNldFBhc3N3b3JkRmFpbChlcnJvcikpKVxuICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBvY2NVc2VyU2VydmljZTogT2NjVXNlclNlcnZpY2VcbiAgKSB7fVxufVxuIl19
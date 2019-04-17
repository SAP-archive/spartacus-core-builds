/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { OccUserService } from '../../occ/index';
import * as fromUserPaymentMethodsAction from '../actions/payment-methods.action';
export class UserPaymentMethodsEffects {
    /**
     * @param {?} actions$
     * @param {?} occUserService
     */
    constructor(actions$, occUserService) {
        this.actions$ = actions$;
        this.occUserService = occUserService;
        this.loadUserPaymentMethods$ = this.actions$.pipe(ofType(fromUserPaymentMethodsAction.LOAD_USER_PAYMENT_METHODS), map((action) => action.payload), mergeMap(payload => {
            return this.occUserService.loadUserPaymentMethods(payload).pipe(map((paymentsList) => {
                return new fromUserPaymentMethodsAction.LoadUserPaymentMethodsSuccess(paymentsList.payments);
            }), catchError(error => of(new fromUserPaymentMethodsAction.LoadUserPaymentMethodsFail(error))));
        }));
        this.setDefaultUserPaymentMethod$ = this.actions$.pipe(ofType(fromUserPaymentMethodsAction.SET_DEFAULT_USER_PAYMENT_METHOD), map((action) => action.payload), mergeMap(payload => {
            return this.occUserService
                .setDefaultUserPaymentMethod(payload.userId, payload.paymentMethodId)
                .pipe(switchMap((data) => {
                return [
                    new fromUserPaymentMethodsAction.SetDefaultUserPaymentMethodSuccess(data),
                    new fromUserPaymentMethodsAction.LoadUserPaymentMethods(payload.userId),
                ];
            }), catchError(error => of(new fromUserPaymentMethodsAction.SetDefaultUserPaymentMethodFail(error))));
        }));
        this.deleteUserPaymentMethod$ = this.actions$.pipe(ofType(fromUserPaymentMethodsAction.DELETE_USER_PAYMENT_METHOD), map((action) => action.payload), mergeMap(payload => {
            return this.occUserService
                .deleteUserPaymentMethod(payload.userId, payload.paymentMethodId)
                .pipe(switchMap((data) => {
                return [
                    new fromUserPaymentMethodsAction.DeleteUserPaymentMethodSuccess(data),
                    new fromUserPaymentMethodsAction.LoadUserPaymentMethods(payload.userId),
                ];
            }), catchError(error => of(new fromUserPaymentMethodsAction.DeleteUserPaymentMethodFail(error))));
        }));
    }
}
UserPaymentMethodsEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
UserPaymentMethodsEffects.ctorParameters = () => [
    { type: Actions },
    { type: OccUserService }
];
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], UserPaymentMethodsEffects.prototype, "loadUserPaymentMethods$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], UserPaymentMethodsEffects.prototype, "setDefaultUserPaymentMethod$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], UserPaymentMethodsEffects.prototype, "deleteUserPaymentMethod$", void 0);
if (false) {
    /** @type {?} */
    UserPaymentMethodsEffects.prototype.loadUserPaymentMethods$;
    /** @type {?} */
    UserPaymentMethodsEffects.prototype.setDefaultUserPaymentMethod$;
    /** @type {?} */
    UserPaymentMethodsEffects.prototype.deleteUserPaymentMethod$;
    /**
     * @type {?}
     * @private
     */
    UserPaymentMethodsEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    UserPaymentMethodsEffects.prototype.occUserService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1tZXRob2RzLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3N0b3JlL2VmZmVjdHMvcGF5bWVudC1tZXRob2RzLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV0RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDakQsT0FBTyxLQUFLLDRCQUE0QixNQUFNLG1DQUFtQyxDQUFDO0FBSWxGLE1BQU0sT0FBTyx5QkFBeUI7Ozs7O0lBcUZwQyxZQUNVLFFBQWlCLEVBQ2pCLGNBQThCO1FBRDlCLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBckZ4Qyw0QkFBdUIsR0FBb0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQzNELE1BQU0sQ0FBQyw0QkFBNEIsQ0FBQyx5QkFBeUIsQ0FBQyxFQUM5RCxHQUFHLENBQ0QsQ0FBQyxNQUEyRCxFQUFFLEVBQUUsQ0FDOUQsTUFBTSxDQUFDLE9BQU8sQ0FDakIsRUFDRCxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDakIsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLHNCQUFzQixDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FDN0QsR0FBRyxDQUFDLENBQUMsWUFBZ0MsRUFBRSxFQUFFO2dCQUN2QyxPQUFPLElBQUksNEJBQTRCLENBQUMsNkJBQTZCLENBQ25FLFlBQVksQ0FBQyxRQUFRLENBQ3RCLENBQUM7WUFDSixDQUFDLENBQUMsRUFDRixVQUFVLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FDakIsRUFBRSxDQUFDLElBQUksNEJBQTRCLENBQUMsMEJBQTBCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FDdkUsQ0FDRixDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQ0gsQ0FBQztRQUdGLGlDQUE0QixHQUFvQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDaEUsTUFBTSxDQUFDLDRCQUE0QixDQUFDLCtCQUErQixDQUFDLEVBQ3BFLEdBQUcsQ0FDRCxDQUFDLE1BQWdFLEVBQUUsRUFBRSxDQUNuRSxNQUFNLENBQUMsT0FBTyxDQUNqQixFQUNELFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNqQixPQUFPLElBQUksQ0FBQyxjQUFjO2lCQUN2QiwyQkFBMkIsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxlQUFlLENBQUM7aUJBQ3BFLElBQUksQ0FDSCxTQUFTLENBQUMsQ0FBQyxJQUFTLEVBQUUsRUFBRTtnQkFDdEIsT0FBTztvQkFDTCxJQUFJLDRCQUE0QixDQUFDLGtDQUFrQyxDQUNqRSxJQUFJLENBQ0w7b0JBQ0QsSUFBSSw0QkFBNEIsQ0FBQyxzQkFBc0IsQ0FDckQsT0FBTyxDQUFDLE1BQU0sQ0FDZjtpQkFDRixDQUFDO1lBQ0osQ0FBQyxDQUFDLEVBQ0YsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQ2pCLEVBQUUsQ0FDQSxJQUFJLDRCQUE0QixDQUFDLCtCQUErQixDQUM5RCxLQUFLLENBQ04sQ0FDRixDQUNGLENBQ0YsQ0FBQztRQUNOLENBQUMsQ0FBQyxDQUNILENBQUM7UUFFRiw2QkFBd0IsR0FBb0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQzVELE1BQU0sQ0FBQyw0QkFBNEIsQ0FBQywwQkFBMEIsQ0FBQyxFQUMvRCxHQUFHLENBQ0QsQ0FBQyxNQUE0RCxFQUFFLEVBQUUsQ0FDL0QsTUFBTSxDQUFDLE9BQU8sQ0FDakIsRUFDRCxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDakIsT0FBTyxJQUFJLENBQUMsY0FBYztpQkFDdkIsdUJBQXVCLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsZUFBZSxDQUFDO2lCQUNoRSxJQUFJLENBQ0gsU0FBUyxDQUFDLENBQUMsSUFBUyxFQUFFLEVBQUU7Z0JBQ3RCLE9BQU87b0JBQ0wsSUFBSSw0QkFBNEIsQ0FBQyw4QkFBOEIsQ0FDN0QsSUFBSSxDQUNMO29CQUNELElBQUksNEJBQTRCLENBQUMsc0JBQXNCLENBQ3JELE9BQU8sQ0FBQyxNQUFNLENBQ2Y7aUJBQ0YsQ0FBQztZQUNKLENBQUMsQ0FBQyxFQUNGLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUNqQixFQUFFLENBQ0EsSUFBSSw0QkFBNEIsQ0FBQywyQkFBMkIsQ0FDMUQsS0FBSyxDQUNOLENBQ0YsQ0FDRixDQUNGLENBQUM7UUFDTixDQUFDLENBQUMsQ0FDSCxDQUFDO0lBS0MsQ0FBQzs7O1lBekZMLFVBQVU7Ozs7WUFSRixPQUFPO1lBSVAsY0FBYzs7QUFPckI7SUFEQyxNQUFNLEVBQUU7c0NBQ2dCLFVBQVU7MEVBa0JqQztBQUdGO0lBREMsTUFBTSxFQUFFO3NDQUNxQixVQUFVOytFQTZCdEM7QUFFRjtJQURDLE1BQU0sRUFBRTtzQ0FDaUIsVUFBVTsyRUE2QmxDOzs7SUFsRkYsNERBbUJFOztJQUVGLGlFQThCRTs7SUFDRiw2REE4QkU7Ozs7O0lBR0EsNkNBQXlCOzs7OztJQUN6QixtREFBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCwgbWVyZ2VNYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgT2NjVXNlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9vY2MvaW5kZXgnO1xuaW1wb3J0ICogYXMgZnJvbVVzZXJQYXltZW50TWV0aG9kc0FjdGlvbiBmcm9tICcuLi9hY3Rpb25zL3BheW1lbnQtbWV0aG9kcy5hY3Rpb24nO1xuaW1wb3J0IHsgUGF5bWVudERldGFpbHNMaXN0IH0gZnJvbSAnLi4vLi4vLi4vb2NjL29jYy1tb2RlbHMvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVXNlclBheW1lbnRNZXRob2RzRWZmZWN0cyB7XG4gIEBFZmZlY3QoKVxuICBsb2FkVXNlclBheW1lbnRNZXRob2RzJDogT2JzZXJ2YWJsZTxhbnk+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShmcm9tVXNlclBheW1lbnRNZXRob2RzQWN0aW9uLkxPQURfVVNFUl9QQVlNRU5UX01FVEhPRFMpLFxuICAgIG1hcChcbiAgICAgIChhY3Rpb246IGZyb21Vc2VyUGF5bWVudE1ldGhvZHNBY3Rpb24uTG9hZFVzZXJQYXltZW50TWV0aG9kcykgPT5cbiAgICAgICAgYWN0aW9uLnBheWxvYWRcbiAgICApLFxuICAgIG1lcmdlTWFwKHBheWxvYWQgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMub2NjVXNlclNlcnZpY2UubG9hZFVzZXJQYXltZW50TWV0aG9kcyhwYXlsb2FkKS5waXBlKFxuICAgICAgICBtYXAoKHBheW1lbnRzTGlzdDogUGF5bWVudERldGFpbHNMaXN0KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBmcm9tVXNlclBheW1lbnRNZXRob2RzQWN0aW9uLkxvYWRVc2VyUGF5bWVudE1ldGhvZHNTdWNjZXNzKFxuICAgICAgICAgICAgcGF5bWVudHNMaXN0LnBheW1lbnRzXG4gICAgICAgICAgKTtcbiAgICAgICAgfSksXG4gICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICBvZihuZXcgZnJvbVVzZXJQYXltZW50TWV0aG9kc0FjdGlvbi5Mb2FkVXNlclBheW1lbnRNZXRob2RzRmFpbChlcnJvcikpXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBARWZmZWN0KClcbiAgc2V0RGVmYXVsdFVzZXJQYXltZW50TWV0aG9kJDogT2JzZXJ2YWJsZTxhbnk+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShmcm9tVXNlclBheW1lbnRNZXRob2RzQWN0aW9uLlNFVF9ERUZBVUxUX1VTRVJfUEFZTUVOVF9NRVRIT0QpLFxuICAgIG1hcChcbiAgICAgIChhY3Rpb246IGZyb21Vc2VyUGF5bWVudE1ldGhvZHNBY3Rpb24uU2V0RGVmYXVsdFVzZXJQYXltZW50TWV0aG9kKSA9PlxuICAgICAgICBhY3Rpb24ucGF5bG9hZFxuICAgICksXG4gICAgbWVyZ2VNYXAocGF5bG9hZCA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5vY2NVc2VyU2VydmljZVxuICAgICAgICAuc2V0RGVmYXVsdFVzZXJQYXltZW50TWV0aG9kKHBheWxvYWQudXNlcklkLCBwYXlsb2FkLnBheW1lbnRNZXRob2RJZClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgc3dpdGNoTWFwKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgIG5ldyBmcm9tVXNlclBheW1lbnRNZXRob2RzQWN0aW9uLlNldERlZmF1bHRVc2VyUGF5bWVudE1ldGhvZFN1Y2Nlc3MoXG4gICAgICAgICAgICAgICAgZGF0YVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBuZXcgZnJvbVVzZXJQYXltZW50TWV0aG9kc0FjdGlvbi5Mb2FkVXNlclBheW1lbnRNZXRob2RzKFxuICAgICAgICAgICAgICAgIHBheWxvYWQudXNlcklkXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICBdO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICAgIG9mKFxuICAgICAgICAgICAgICBuZXcgZnJvbVVzZXJQYXltZW50TWV0aG9kc0FjdGlvbi5TZXREZWZhdWx0VXNlclBheW1lbnRNZXRob2RGYWlsKFxuICAgICAgICAgICAgICAgIGVycm9yXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfSlcbiAgKTtcbiAgQEVmZmVjdCgpXG4gIGRlbGV0ZVVzZXJQYXltZW50TWV0aG9kJDogT2JzZXJ2YWJsZTxhbnk+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShmcm9tVXNlclBheW1lbnRNZXRob2RzQWN0aW9uLkRFTEVURV9VU0VSX1BBWU1FTlRfTUVUSE9EKSxcbiAgICBtYXAoXG4gICAgICAoYWN0aW9uOiBmcm9tVXNlclBheW1lbnRNZXRob2RzQWN0aW9uLkRlbGV0ZVVzZXJQYXltZW50TWV0aG9kKSA9PlxuICAgICAgICBhY3Rpb24ucGF5bG9hZFxuICAgICksXG4gICAgbWVyZ2VNYXAocGF5bG9hZCA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5vY2NVc2VyU2VydmljZVxuICAgICAgICAuZGVsZXRlVXNlclBheW1lbnRNZXRob2QocGF5bG9hZC51c2VySWQsIHBheWxvYWQucGF5bWVudE1ldGhvZElkKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBzd2l0Y2hNYXAoKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgbmV3IGZyb21Vc2VyUGF5bWVudE1ldGhvZHNBY3Rpb24uRGVsZXRlVXNlclBheW1lbnRNZXRob2RTdWNjZXNzKFxuICAgICAgICAgICAgICAgIGRhdGFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgbmV3IGZyb21Vc2VyUGF5bWVudE1ldGhvZHNBY3Rpb24uTG9hZFVzZXJQYXltZW50TWV0aG9kcyhcbiAgICAgICAgICAgICAgICBwYXlsb2FkLnVzZXJJZFxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgXTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICBvZihcbiAgICAgICAgICAgICAgbmV3IGZyb21Vc2VyUGF5bWVudE1ldGhvZHNBY3Rpb24uRGVsZXRlVXNlclBheW1lbnRNZXRob2RGYWlsKFxuICAgICAgICAgICAgICAgIGVycm9yXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgb2NjVXNlclNlcnZpY2U6IE9jY1VzZXJTZXJ2aWNlXG4gICkge31cbn1cbiJdfQ==
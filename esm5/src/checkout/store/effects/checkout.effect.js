import { __assign, __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { from, of } from 'rxjs';
import { catchError, concatMap, filter, map, mergeMap, switchMap, } from 'rxjs/operators';
import { AuthActions } from '../../../auth/store/actions/index';
import { CartActions } from '../../../cart/store/actions/index';
import { OCC_USER_ID_ANONYMOUS } from '../../../occ/utils/occ-constants';
import { SiteContextActions } from '../../../site-context/store/actions/index';
import { UserActions } from '../../../user/store/actions/index';
import { normalizeHttpError } from '../../../util/normalize-http-error';
import { makeErrorSerializable } from '../../../util/serialization-utils';
import { withdrawOn } from '../../../util/withdraw-on';
import { CheckoutConnector } from '../../connectors/checkout/checkout.connector';
import { CheckoutCostCenterConnector } from '../../connectors/cost-center/checkout-cost-center.connector';
import { CheckoutDeliveryConnector } from '../../connectors/delivery/checkout-delivery.connector';
import { CheckoutPaymentConnector } from '../../connectors/payment/checkout-payment.connector';
import { CheckoutActions } from '../actions/index';
var CheckoutEffects = /** @class */ (function () {
    function CheckoutEffects(actions$, checkoutDeliveryConnector, checkoutPaymentConnector, checkoutCostCenterConnector, checkoutConnector) {
        var _this = this;
        this.actions$ = actions$;
        this.checkoutDeliveryConnector = checkoutDeliveryConnector;
        this.checkoutPaymentConnector = checkoutPaymentConnector;
        this.checkoutCostCenterConnector = checkoutCostCenterConnector;
        this.checkoutConnector = checkoutConnector;
        this.contextChange$ = this.actions$.pipe(ofType(SiteContextActions.CURRENCY_CHANGE, SiteContextActions.LANGUAGE_CHANGE));
        this.addDeliveryAddress$ = this.actions$.pipe(ofType(CheckoutActions.ADD_DELIVERY_ADDRESS), map(function (action) { return action.payload; }), mergeMap(function (payload) {
            return _this.checkoutDeliveryConnector
                .createAddress(payload.userId, payload.cartId, payload.address)
                .pipe(mergeMap(function (address) {
                address['titleCode'] = payload.address.titleCode;
                if (payload.address.region && payload.address.region.isocodeShort) {
                    Object.assign(address.region, {
                        isocodeShort: payload.address.region.isocodeShort,
                    });
                }
                if (payload.userId === OCC_USER_ID_ANONYMOUS) {
                    return [
                        new CheckoutActions.SetDeliveryAddress({
                            userId: payload.userId,
                            cartId: payload.cartId,
                            address: address,
                        }),
                    ];
                }
                else {
                    return [
                        new UserActions.LoadUserAddresses(payload.userId),
                        new CheckoutActions.SetDeliveryAddress({
                            userId: payload.userId,
                            cartId: payload.cartId,
                            address: address,
                        }),
                    ];
                }
            }), catchError(function (error) {
                return of(new CheckoutActions.AddDeliveryAddressFail(makeErrorSerializable(error)));
            }));
        }), withdrawOn(this.contextChange$));
        this.setDeliveryAddress$ = this.actions$.pipe(ofType(CheckoutActions.SET_DELIVERY_ADDRESS), map(function (action) { return action.payload; }), mergeMap(function (payload) {
            return _this.checkoutDeliveryConnector
                .setAddress(payload.userId, payload.cartId, payload.address.id)
                .pipe(mergeMap(function () { return [
                new CheckoutActions.SetDeliveryAddressSuccess(payload.address),
                new CheckoutActions.ClearCheckoutDeliveryMode({
                    userId: payload.userId,
                    cartId: payload.cartId,
                }),
                new CheckoutActions.ClearSupportedDeliveryModes(),
                new CheckoutActions.ResetLoadSupportedDeliveryModesProcess(),
                new CheckoutActions.LoadSupportedDeliveryModes({
                    userId: payload.userId,
                    cartId: payload.cartId,
                }),
            ]; }), catchError(function (error) {
                return of(new CheckoutActions.SetDeliveryAddressFail(makeErrorSerializable(error)));
            }));
        }), withdrawOn(this.contextChange$));
        this.loadSupportedDeliveryModes$ = this.actions$.pipe(ofType(CheckoutActions.LOAD_SUPPORTED_DELIVERY_MODES), map(function (action) { return action.payload; }), mergeMap(function (payload) {
            return _this.checkoutDeliveryConnector
                .getSupportedModes(payload.userId, payload.cartId)
                .pipe(map(function (data) {
                return new CheckoutActions.LoadSupportedDeliveryModesSuccess(data);
            }), catchError(function (error) {
                return of(new CheckoutActions.LoadSupportedDeliveryModesFail(makeErrorSerializable(error)));
            }));
        }), withdrawOn(this.contextChange$));
        this.clearCheckoutMiscsDataOnLanguageChange$ = this.actions$.pipe(ofType(SiteContextActions.LANGUAGE_CHANGE), mergeMap(function () { return [
            new CheckoutActions.ResetLoadSupportedDeliveryModesProcess(),
            new CheckoutActions.ResetLoadPaymentTypesProcess(),
            new CheckoutActions.CheckoutClearMiscsData(),
        ]; }));
        this.clearDeliveryModesOnCurrencyChange$ = this.actions$.pipe(ofType(SiteContextActions.CURRENCY_CHANGE), map(function () { return new CheckoutActions.ClearSupportedDeliveryModes(); }));
        this.clearCheckoutDataOnLogout$ = this.actions$.pipe(ofType(AuthActions.LOGOUT), map(function () { return new CheckoutActions.ClearCheckoutData(); }));
        this.clearCheckoutDataOnLogin$ = this.actions$.pipe(ofType(AuthActions.LOGIN), map(function () { return new CheckoutActions.ClearCheckoutData(); }));
        this.setDeliveryMode$ = this.actions$.pipe(ofType(CheckoutActions.SET_DELIVERY_MODE), map(function (action) { return action.payload; }), mergeMap(function (payload) {
            return _this.checkoutDeliveryConnector
                .setMode(payload.userId, payload.cartId, payload.selectedModeId)
                .pipe(mergeMap(function () {
                return [
                    new CheckoutActions.SetDeliveryModeSuccess(payload.selectedModeId),
                    new CartActions.LoadCart({
                        userId: payload.userId,
                        cartId: payload.cartId,
                    }),
                ];
            }), catchError(function (error) {
                return of(new CheckoutActions.SetDeliveryModeFail(makeErrorSerializable(error)));
            }));
        }), withdrawOn(this.contextChange$));
        this.createPaymentDetails$ = this.actions$.pipe(ofType(CheckoutActions.CREATE_PAYMENT_DETAILS), map(function (action) { return action.payload; }), mergeMap(function (payload) {
            // get information for creating a subscription directly with payment provider
            return _this.checkoutPaymentConnector
                .create(payload.userId, payload.cartId, payload.paymentDetails)
                .pipe(mergeMap(function (details) {
                if (payload.userId === OCC_USER_ID_ANONYMOUS) {
                    return [new CheckoutActions.CreatePaymentDetailsSuccess(details)];
                }
                else {
                    return [
                        new UserActions.LoadUserPaymentMethods(payload.userId),
                        new CheckoutActions.CreatePaymentDetailsSuccess(details),
                    ];
                }
            }), catchError(function (error) {
                return of(new CheckoutActions.CreatePaymentDetailsFail(makeErrorSerializable(error)));
            }));
        }), withdrawOn(this.contextChange$));
        this.setPaymentDetails$ = this.actions$.pipe(ofType(CheckoutActions.SET_PAYMENT_DETAILS), map(function (action) { return action.payload; }), mergeMap(function (payload) {
            return _this.checkoutPaymentConnector
                .set(payload.userId, payload.cartId, payload.paymentDetails.id)
                .pipe(map(function () {
                return new CheckoutActions.SetPaymentDetailsSuccess(payload.paymentDetails);
            }), catchError(function (error) {
                return of(new CheckoutActions.SetPaymentDetailsFail(makeErrorSerializable(error)));
            }));
        }), withdrawOn(this.contextChange$));
        this.placeOrder$ = this.actions$.pipe(ofType(CheckoutActions.PLACE_ORDER), map(function (action) { return action.payload; }), mergeMap(function (payload) {
            return _this.checkoutConnector
                .placeOrder(payload.userId, payload.cartId)
                .pipe(switchMap(function (data) { return [
                new CartActions.RemoveCart({ cartId: payload.cartId }),
                new CheckoutActions.PlaceOrderSuccess(data),
            ]; }), catchError(function (error) {
                return of(new CheckoutActions.PlaceOrderFail(makeErrorSerializable(error)));
            }));
        }), withdrawOn(this.contextChange$));
        this.loadCheckoutDetails$ = this.actions$.pipe(ofType(CheckoutActions.LOAD_CHECKOUT_DETAILS), map(function (action) { return action.payload; }), mergeMap(function (payload) {
            return _this.checkoutConnector
                .loadCheckoutDetails(payload.userId, payload.cartId)
                .pipe(map(function (data) {
                return new CheckoutActions.LoadCheckoutDetailsSuccess(data);
            }), catchError(function (error) {
                return of(new CheckoutActions.LoadCheckoutDetailsFail(makeErrorSerializable(error)));
            }));
        }), withdrawOn(this.contextChange$));
        this.reloadDetailsOnMergeCart$ = this.actions$.pipe(ofType(CartActions.MERGE_CART_SUCCESS), map(function (action) { return action.payload; }), map(function (payload) {
            return new CheckoutActions.LoadCheckoutDetails({
                userId: payload.userId,
                cartId: payload.cartId,
            });
        }));
        this.clearCheckoutDeliveryAddress$ = this.actions$.pipe(ofType(CheckoutActions.CLEAR_CHECKOUT_DELIVERY_ADDRESS), map(function (action) { return action.payload; }), filter(function (payload) { return Boolean(payload.cartId); }), switchMap(function (payload) {
            return _this.checkoutConnector
                .clearCheckoutDeliveryAddress(payload.userId, payload.cartId)
                .pipe(map(function () { return new CheckoutActions.ClearCheckoutDeliveryAddressSuccess(); }), catchError(function (error) {
                return of(new CheckoutActions.ClearCheckoutDeliveryAddressFail(makeErrorSerializable(error)));
            }));
        }), withdrawOn(this.contextChange$));
        this.clearCheckoutDeliveryMode$ = this.actions$.pipe(ofType(CheckoutActions.CLEAR_CHECKOUT_DELIVERY_MODE), map(function (action) { return action.payload; }), filter(function (payload) { return Boolean(payload.cartId); }), concatMap(function (payload) {
            return _this.checkoutConnector
                .clearCheckoutDeliveryMode(payload.userId, payload.cartId)
                .pipe(map(function () {
                return new CheckoutActions.ClearCheckoutDeliveryModeSuccess(__assign({}, payload));
            }), catchError(function (error) {
                return from([
                    new CheckoutActions.ClearCheckoutDeliveryModeFail(__assign(__assign({}, payload), { error: makeErrorSerializable(error) })),
                    new CartActions.LoadCart({
                        cartId: payload.cartId,
                        userId: payload.userId,
                    }),
                ]);
            }));
        }), withdrawOn(this.contextChange$));
        this.setCostCenter$ = this.actions$.pipe(ofType(CheckoutActions.SET_COST_CENTER), map(function (action) { return action.payload; }), switchMap(function (payload) {
            return _this.checkoutCostCenterConnector
                .setCostCenter(payload.userId, payload.cartId, payload.costCenterId)
                .pipe(mergeMap(function (data) { return [
                // TODO(#8877): We should trigger load cart not already assign the data. We might have misconfiguration between this cart model and load cart model
                new CartActions.LoadCartSuccess({
                    cart: data,
                    cartId: payload.cartId,
                    userId: payload.userId,
                }),
                new CheckoutActions.SetCostCenterSuccess(payload.costCenterId),
                new CheckoutActions.ClearCheckoutDeliveryMode({
                    userId: payload.userId,
                    cartId: payload.cartId,
                }),
                new CheckoutActions.ClearCheckoutDeliveryAddress({
                    userId: payload.userId,
                    cartId: payload.cartId,
                }),
            ]; }), catchError(function (error) {
                return of(new CheckoutActions.SetCostCenterFail(normalizeHttpError(error)));
            }));
        }), withdrawOn(this.contextChange$));
    }
    CheckoutEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: CheckoutDeliveryConnector },
        { type: CheckoutPaymentConnector },
        { type: CheckoutCostCenterConnector },
        { type: CheckoutConnector }
    ]; };
    __decorate([
        Effect()
    ], CheckoutEffects.prototype, "addDeliveryAddress$", void 0);
    __decorate([
        Effect()
    ], CheckoutEffects.prototype, "setDeliveryAddress$", void 0);
    __decorate([
        Effect()
    ], CheckoutEffects.prototype, "loadSupportedDeliveryModes$", void 0);
    __decorate([
        Effect()
    ], CheckoutEffects.prototype, "clearCheckoutMiscsDataOnLanguageChange$", void 0);
    __decorate([
        Effect()
    ], CheckoutEffects.prototype, "clearDeliveryModesOnCurrencyChange$", void 0);
    __decorate([
        Effect()
    ], CheckoutEffects.prototype, "clearCheckoutDataOnLogout$", void 0);
    __decorate([
        Effect()
    ], CheckoutEffects.prototype, "clearCheckoutDataOnLogin$", void 0);
    __decorate([
        Effect()
    ], CheckoutEffects.prototype, "setDeliveryMode$", void 0);
    __decorate([
        Effect()
    ], CheckoutEffects.prototype, "createPaymentDetails$", void 0);
    __decorate([
        Effect()
    ], CheckoutEffects.prototype, "setPaymentDetails$", void 0);
    __decorate([
        Effect()
    ], CheckoutEffects.prototype, "placeOrder$", void 0);
    __decorate([
        Effect()
    ], CheckoutEffects.prototype, "loadCheckoutDetails$", void 0);
    __decorate([
        Effect()
    ], CheckoutEffects.prototype, "reloadDetailsOnMergeCart$", void 0);
    __decorate([
        Effect()
    ], CheckoutEffects.prototype, "clearCheckoutDeliveryAddress$", void 0);
    __decorate([
        Effect()
    ], CheckoutEffects.prototype, "clearCheckoutDeliveryMode$", void 0);
    __decorate([
        Effect()
    ], CheckoutEffects.prototype, "setCostCenter$", void 0);
    CheckoutEffects = __decorate([
        Injectable()
    ], CheckoutEffects);
    return CheckoutEffects;
}());
export { CheckoutEffects };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQuZWZmZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NoZWNrb3V0L3N0b3JlL2VmZmVjdHMvY2hlY2tvdXQuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsSUFBSSxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM1QyxPQUFPLEVBQ0wsVUFBVSxFQUNWLFNBQVMsRUFDVCxNQUFNLEVBQ04sR0FBRyxFQUNILFFBQVEsRUFDUixTQUFTLEdBQ1YsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDaEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBR2hFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNoRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDakYsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sNkRBQTZELENBQUM7QUFDMUcsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDbEcs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QU0sRUFBRTtnRkFNUDtJQUdGO1FBREMsTUFBTSxFQUFFO3VFQU1QO0lBR0Y7UUFEQyxNQUFNLEVBQUU7c0VBTVA7SUFHRjtRQURDLE1BQU0sRUFBRTs2REFpQ1A7SUFHRjtRQURDLE1BQU0sRUFBRTtrRUFpQ1A7SUFHRjtRQURDLE1BQU0sRUFBRTsrREEyQlA7SUFHRjtRQURDLE1BQU0sRUFBRTt3REF1QlA7SUFHRjtRQURDLE1BQU0sRUFBRTtpRUF5QlA7SUFHRjtRQURDLE1BQU0sRUFBRTtzRUFZUDtJQUdGO1FBREMsTUFBTSxFQUFFOzBFQXlCUDtJQUdGO1FBREMsTUFBTSxFQUFFO3VFQWtDUDtJQUdGO1FBREMsTUFBTSxFQUFFOzJEQXFDUDtJQTNhUyxlQUFlO1FBRDNCLFVBQVUsRUFBRTtPQUNBLGVBQWUsQ0FvYjNCO0lBQUQsc0JBQUM7Q0FBQSxBQXBiRCxJQW9iQztTQXBiWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IGZyb20sIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBjYXRjaEVycm9yLFxuICBjb25jYXRNYXAsXG4gIGZpbHRlcixcbiAgbWFwLFxuICBtZXJnZU1hcCxcbiAgc3dpdGNoTWFwLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBdXRoQWN0aW9ucyB9IGZyb20gJy4uLy4uLy4uL2F1dGgvc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBDYXJ0QWN0aW9ucyB9IGZyb20gJy4uLy4uLy4uL2NhcnQvc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBDaGVja291dERldGFpbHMgfSBmcm9tICcuLi8uLi8uLi9jaGVja291dC9tb2RlbHMvY2hlY2tvdXQubW9kZWwnO1xuaW1wb3J0IHsgR2xvYmFsTWVzc2FnZUFjdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9nbG9iYWwtbWVzc2FnZS9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IE9DQ19VU0VSX0lEX0FOT05ZTU9VUyB9IGZyb20gJy4uLy4uLy4uL29jYy91dGlscy9vY2MtY29uc3RhbnRzJztcbmltcG9ydCB7IFNpdGVDb250ZXh0QWN0aW9ucyB9IGZyb20gJy4uLy4uLy4uL3NpdGUtY29udGV4dC9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IFVzZXJBY3Rpb25zIH0gZnJvbSAnLi4vLi4vLi4vdXNlci9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IG5vcm1hbGl6ZUh0dHBFcnJvciB9IGZyb20gJy4uLy4uLy4uL3V0aWwvbm9ybWFsaXplLWh0dHAtZXJyb3InO1xuaW1wb3J0IHsgbWFrZUVycm9yU2VyaWFsaXphYmxlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9zZXJpYWxpemF0aW9uLXV0aWxzJztcbmltcG9ydCB7IHdpdGhkcmF3T24gfSBmcm9tICcuLi8uLi8uLi91dGlsL3dpdGhkcmF3LW9uJztcbmltcG9ydCB7IENoZWNrb3V0Q29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9jaGVja291dC9jaGVja291dC5jb25uZWN0b3InO1xuaW1wb3J0IHsgQ2hlY2tvdXRDb3N0Q2VudGVyQ29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9jb3N0LWNlbnRlci9jaGVja291dC1jb3N0LWNlbnRlci5jb25uZWN0b3InO1xuaW1wb3J0IHsgQ2hlY2tvdXREZWxpdmVyeUNvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvZGVsaXZlcnkvY2hlY2tvdXQtZGVsaXZlcnkuY29ubmVjdG9yJztcbmltcG9ydCB7IENoZWNrb3V0UGF5bWVudENvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvcGF5bWVudC9jaGVja291dC1wYXltZW50LmNvbm5lY3Rvcic7XG5pbXBvcnQgeyBDaGVja291dEFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENoZWNrb3V0RWZmZWN0cyB7XG4gIHByaXZhdGUgY29udGV4dENoYW5nZSQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFxuICAgICAgU2l0ZUNvbnRleHRBY3Rpb25zLkNVUlJFTkNZX0NIQU5HRSxcbiAgICAgIFNpdGVDb250ZXh0QWN0aW9ucy5MQU5HVUFHRV9DSEFOR0VcbiAgICApXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIGFkZERlbGl2ZXJ5QWRkcmVzcyQ6IE9ic2VydmFibGU8XG4gICAgfCBVc2VyQWN0aW9ucy5Mb2FkVXNlckFkZHJlc3Nlc1xuICAgIHwgQ2hlY2tvdXRBY3Rpb25zLlNldERlbGl2ZXJ5QWRkcmVzc1xuICAgIHwgQ2hlY2tvdXRBY3Rpb25zLkFkZERlbGl2ZXJ5QWRkcmVzc0ZhaWxcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoQ2hlY2tvdXRBY3Rpb25zLkFERF9ERUxJVkVSWV9BRERSRVNTKSxcbiAgICBtYXAoKGFjdGlvbjogQ2hlY2tvdXRBY3Rpb25zLkFkZERlbGl2ZXJ5QWRkcmVzcykgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1lcmdlTWFwKChwYXlsb2FkKSA9PlxuICAgICAgdGhpcy5jaGVja291dERlbGl2ZXJ5Q29ubmVjdG9yXG4gICAgICAgIC5jcmVhdGVBZGRyZXNzKHBheWxvYWQudXNlcklkLCBwYXlsb2FkLmNhcnRJZCwgcGF5bG9hZC5hZGRyZXNzKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtZXJnZU1hcCgoYWRkcmVzcykgPT4ge1xuICAgICAgICAgICAgYWRkcmVzc1sndGl0bGVDb2RlJ10gPSBwYXlsb2FkLmFkZHJlc3MudGl0bGVDb2RlO1xuICAgICAgICAgICAgaWYgKHBheWxvYWQuYWRkcmVzcy5yZWdpb24gJiYgcGF5bG9hZC5hZGRyZXNzLnJlZ2lvbi5pc29jb2RlU2hvcnQpIHtcbiAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihhZGRyZXNzLnJlZ2lvbiwge1xuICAgICAgICAgICAgICAgIGlzb2NvZGVTaG9ydDogcGF5bG9hZC5hZGRyZXNzLnJlZ2lvbi5pc29jb2RlU2hvcnQsXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBheWxvYWQudXNlcklkID09PSBPQ0NfVVNFUl9JRF9BTk9OWU1PVVMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICBuZXcgQ2hlY2tvdXRBY3Rpb25zLlNldERlbGl2ZXJ5QWRkcmVzcyh7XG4gICAgICAgICAgICAgICAgICB1c2VySWQ6IHBheWxvYWQudXNlcklkLFxuICAgICAgICAgICAgICAgICAgY2FydElkOiBwYXlsb2FkLmNhcnRJZCxcbiAgICAgICAgICAgICAgICAgIGFkZHJlc3M6IGFkZHJlc3MsXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgIG5ldyBVc2VyQWN0aW9ucy5Mb2FkVXNlckFkZHJlc3NlcyhwYXlsb2FkLnVzZXJJZCksXG4gICAgICAgICAgICAgICAgbmV3IENoZWNrb3V0QWN0aW9ucy5TZXREZWxpdmVyeUFkZHJlc3Moe1xuICAgICAgICAgICAgICAgICAgdXNlcklkOiBwYXlsb2FkLnVzZXJJZCxcbiAgICAgICAgICAgICAgICAgIGNhcnRJZDogcGF5bG9hZC5jYXJ0SWQsXG4gICAgICAgICAgICAgICAgICBhZGRyZXNzOiBhZGRyZXNzLFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoKGVycm9yKSA9PlxuICAgICAgICAgICAgb2YoXG4gICAgICAgICAgICAgIG5ldyBDaGVja291dEFjdGlvbnMuQWRkRGVsaXZlcnlBZGRyZXNzRmFpbChcbiAgICAgICAgICAgICAgICBtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICApLFxuICAgIHdpdGhkcmF3T24odGhpcy5jb250ZXh0Q2hhbmdlJClcbiAgKTtcblxuICBARWZmZWN0KClcbiAgc2V0RGVsaXZlcnlBZGRyZXNzJDogT2JzZXJ2YWJsZTxcbiAgICB8IENoZWNrb3V0QWN0aW9ucy5TZXREZWxpdmVyeUFkZHJlc3NTdWNjZXNzXG4gICAgfCBDaGVja291dEFjdGlvbnMuQ2xlYXJTdXBwb3J0ZWREZWxpdmVyeU1vZGVzXG4gICAgfCBDaGVja291dEFjdGlvbnMuQ2xlYXJDaGVja291dERlbGl2ZXJ5TW9kZVxuICAgIHwgQ2hlY2tvdXRBY3Rpb25zLlJlc2V0TG9hZFN1cHBvcnRlZERlbGl2ZXJ5TW9kZXNQcm9jZXNzXG4gICAgfCBDaGVja291dEFjdGlvbnMuTG9hZFN1cHBvcnRlZERlbGl2ZXJ5TW9kZXNcbiAgICB8IENoZWNrb3V0QWN0aW9ucy5TZXREZWxpdmVyeUFkZHJlc3NGYWlsXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKENoZWNrb3V0QWN0aW9ucy5TRVRfREVMSVZFUllfQUREUkVTUyksXG4gICAgbWFwKChhY3Rpb246IGFueSkgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1lcmdlTWFwKChwYXlsb2FkKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5jaGVja291dERlbGl2ZXJ5Q29ubmVjdG9yXG4gICAgICAgIC5zZXRBZGRyZXNzKHBheWxvYWQudXNlcklkLCBwYXlsb2FkLmNhcnRJZCwgcGF5bG9hZC5hZGRyZXNzLmlkKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtZXJnZU1hcCgoKSA9PiBbXG4gICAgICAgICAgICBuZXcgQ2hlY2tvdXRBY3Rpb25zLlNldERlbGl2ZXJ5QWRkcmVzc1N1Y2Nlc3MocGF5bG9hZC5hZGRyZXNzKSxcbiAgICAgICAgICAgIG5ldyBDaGVja291dEFjdGlvbnMuQ2xlYXJDaGVja291dERlbGl2ZXJ5TW9kZSh7XG4gICAgICAgICAgICAgIHVzZXJJZDogcGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgICAgIGNhcnRJZDogcGF5bG9hZC5jYXJ0SWQsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIG5ldyBDaGVja291dEFjdGlvbnMuQ2xlYXJTdXBwb3J0ZWREZWxpdmVyeU1vZGVzKCksXG4gICAgICAgICAgICBuZXcgQ2hlY2tvdXRBY3Rpb25zLlJlc2V0TG9hZFN1cHBvcnRlZERlbGl2ZXJ5TW9kZXNQcm9jZXNzKCksXG4gICAgICAgICAgICBuZXcgQ2hlY2tvdXRBY3Rpb25zLkxvYWRTdXBwb3J0ZWREZWxpdmVyeU1vZGVzKHtcbiAgICAgICAgICAgICAgdXNlcklkOiBwYXlsb2FkLnVzZXJJZCxcbiAgICAgICAgICAgICAgY2FydElkOiBwYXlsb2FkLmNhcnRJZCxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgIF0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoKGVycm9yKSA9PlxuICAgICAgICAgICAgb2YoXG4gICAgICAgICAgICAgIG5ldyBDaGVja291dEFjdGlvbnMuU2V0RGVsaXZlcnlBZGRyZXNzRmFpbChcbiAgICAgICAgICAgICAgICBtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfSksXG4gICAgd2l0aGRyYXdPbih0aGlzLmNvbnRleHRDaGFuZ2UkKVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBsb2FkU3VwcG9ydGVkRGVsaXZlcnlNb2RlcyQ6IE9ic2VydmFibGU8XG4gICAgfCBDaGVja291dEFjdGlvbnMuTG9hZFN1cHBvcnRlZERlbGl2ZXJ5TW9kZXNTdWNjZXNzXG4gICAgfCBDaGVja291dEFjdGlvbnMuTG9hZFN1cHBvcnRlZERlbGl2ZXJ5TW9kZXNGYWlsXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKENoZWNrb3V0QWN0aW9ucy5MT0FEX1NVUFBPUlRFRF9ERUxJVkVSWV9NT0RFUyksXG4gICAgbWFwKChhY3Rpb246IGFueSkgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1lcmdlTWFwKChwYXlsb2FkKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5jaGVja291dERlbGl2ZXJ5Q29ubmVjdG9yXG4gICAgICAgIC5nZXRTdXBwb3J0ZWRNb2RlcyhwYXlsb2FkLnVzZXJJZCwgcGF5bG9hZC5jYXJ0SWQpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcCgoZGF0YSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBDaGVja291dEFjdGlvbnMuTG9hZFN1cHBvcnRlZERlbGl2ZXJ5TW9kZXNTdWNjZXNzKGRhdGEpO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoKGVycm9yKSA9PlxuICAgICAgICAgICAgb2YoXG4gICAgICAgICAgICAgIG5ldyBDaGVja291dEFjdGlvbnMuTG9hZFN1cHBvcnRlZERlbGl2ZXJ5TW9kZXNGYWlsKFxuICAgICAgICAgICAgICAgIG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcilcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9KSxcbiAgICB3aXRoZHJhd09uKHRoaXMuY29udGV4dENoYW5nZSQpXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIGNsZWFyQ2hlY2tvdXRNaXNjc0RhdGFPbkxhbmd1YWdlQ2hhbmdlJDogT2JzZXJ2YWJsZTxcbiAgICB8IENoZWNrb3V0QWN0aW9ucy5DaGVja291dENsZWFyTWlzY3NEYXRhXG4gICAgfCBDaGVja291dEFjdGlvbnMuUmVzZXRMb2FkU3VwcG9ydGVkRGVsaXZlcnlNb2Rlc1Byb2Nlc3NcbiAgICB8IENoZWNrb3V0QWN0aW9ucy5SZXNldExvYWRQYXltZW50VHlwZXNQcm9jZXNzXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFNpdGVDb250ZXh0QWN0aW9ucy5MQU5HVUFHRV9DSEFOR0UpLFxuICAgIG1lcmdlTWFwKCgpID0+IFtcbiAgICAgIG5ldyBDaGVja291dEFjdGlvbnMuUmVzZXRMb2FkU3VwcG9ydGVkRGVsaXZlcnlNb2Rlc1Byb2Nlc3MoKSxcbiAgICAgIG5ldyBDaGVja291dEFjdGlvbnMuUmVzZXRMb2FkUGF5bWVudFR5cGVzUHJvY2VzcygpLFxuICAgICAgbmV3IENoZWNrb3V0QWN0aW9ucy5DaGVja291dENsZWFyTWlzY3NEYXRhKCksXG4gICAgXSlcbiAgKTtcblxuICBARWZmZWN0KClcbiAgY2xlYXJEZWxpdmVyeU1vZGVzT25DdXJyZW5jeUNoYW5nZSQ6IE9ic2VydmFibGU8XG4gICAgQ2hlY2tvdXRBY3Rpb25zLkNsZWFyU3VwcG9ydGVkRGVsaXZlcnlNb2Rlc1xuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShTaXRlQ29udGV4dEFjdGlvbnMuQ1VSUkVOQ1lfQ0hBTkdFKSxcbiAgICBtYXAoKCkgPT4gbmV3IENoZWNrb3V0QWN0aW9ucy5DbGVhclN1cHBvcnRlZERlbGl2ZXJ5TW9kZXMoKSlcbiAgKTtcblxuICBARWZmZWN0KClcbiAgY2xlYXJDaGVja291dERhdGFPbkxvZ291dCQ6IE9ic2VydmFibGU8XG4gICAgQ2hlY2tvdXRBY3Rpb25zLkNsZWFyQ2hlY2tvdXREYXRhXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKEF1dGhBY3Rpb25zLkxPR09VVCksXG4gICAgbWFwKCgpID0+IG5ldyBDaGVja291dEFjdGlvbnMuQ2xlYXJDaGVja291dERhdGEoKSlcbiAgKTtcblxuICBARWZmZWN0KClcbiAgY2xlYXJDaGVja291dERhdGFPbkxvZ2luJDogT2JzZXJ2YWJsZTxcbiAgICBDaGVja291dEFjdGlvbnMuQ2xlYXJDaGVja291dERhdGFcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoQXV0aEFjdGlvbnMuTE9HSU4pLFxuICAgIG1hcCgoKSA9PiBuZXcgQ2hlY2tvdXRBY3Rpb25zLkNsZWFyQ2hlY2tvdXREYXRhKCkpXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIHNldERlbGl2ZXJ5TW9kZSQ6IE9ic2VydmFibGU8XG4gICAgfCBDaGVja291dEFjdGlvbnMuU2V0RGVsaXZlcnlNb2RlU3VjY2Vzc1xuICAgIHwgQ2hlY2tvdXRBY3Rpb25zLlNldERlbGl2ZXJ5TW9kZUZhaWxcbiAgICB8IENhcnRBY3Rpb25zLkxvYWRDYXJ0XG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKENoZWNrb3V0QWN0aW9ucy5TRVRfREVMSVZFUllfTU9ERSksXG4gICAgbWFwKChhY3Rpb246IGFueSkgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1lcmdlTWFwKChwYXlsb2FkKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5jaGVja291dERlbGl2ZXJ5Q29ubmVjdG9yXG4gICAgICAgIC5zZXRNb2RlKHBheWxvYWQudXNlcklkLCBwYXlsb2FkLmNhcnRJZCwgcGF5bG9hZC5zZWxlY3RlZE1vZGVJZClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWVyZ2VNYXAoKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgbmV3IENoZWNrb3V0QWN0aW9ucy5TZXREZWxpdmVyeU1vZGVTdWNjZXNzKFxuICAgICAgICAgICAgICAgIHBheWxvYWQuc2VsZWN0ZWRNb2RlSWRcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLkxvYWRDYXJ0KHtcbiAgICAgICAgICAgICAgICB1c2VySWQ6IHBheWxvYWQudXNlcklkLFxuICAgICAgICAgICAgICAgIGNhcnRJZDogcGF5bG9hZC5jYXJ0SWQsXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjYXRjaEVycm9yKChlcnJvcikgPT5cbiAgICAgICAgICAgIG9mKFxuICAgICAgICAgICAgICBuZXcgQ2hlY2tvdXRBY3Rpb25zLlNldERlbGl2ZXJ5TW9kZUZhaWwoXG4gICAgICAgICAgICAgICAgbWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH0pLFxuICAgIHdpdGhkcmF3T24odGhpcy5jb250ZXh0Q2hhbmdlJClcbiAgKTtcblxuICBARWZmZWN0KClcbiAgY3JlYXRlUGF5bWVudERldGFpbHMkOiBPYnNlcnZhYmxlPFxuICAgIHwgVXNlckFjdGlvbnMuTG9hZFVzZXJQYXltZW50TWV0aG9kc1xuICAgIHwgQ2hlY2tvdXRBY3Rpb25zLkNyZWF0ZVBheW1lbnREZXRhaWxzU3VjY2Vzc1xuICAgIHwgQ2hlY2tvdXRBY3Rpb25zLkNyZWF0ZVBheW1lbnREZXRhaWxzRmFpbFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShDaGVja291dEFjdGlvbnMuQ1JFQVRFX1BBWU1FTlRfREVUQUlMUyksXG4gICAgbWFwKChhY3Rpb246IGFueSkgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1lcmdlTWFwKChwYXlsb2FkKSA9PiB7XG4gICAgICAvLyBnZXQgaW5mb3JtYXRpb24gZm9yIGNyZWF0aW5nIGEgc3Vic2NyaXB0aW9uIGRpcmVjdGx5IHdpdGggcGF5bWVudCBwcm92aWRlclxuICAgICAgcmV0dXJuIHRoaXMuY2hlY2tvdXRQYXltZW50Q29ubmVjdG9yXG4gICAgICAgIC5jcmVhdGUocGF5bG9hZC51c2VySWQsIHBheWxvYWQuY2FydElkLCBwYXlsb2FkLnBheW1lbnREZXRhaWxzKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtZXJnZU1hcCgoZGV0YWlscykgPT4ge1xuICAgICAgICAgICAgaWYgKHBheWxvYWQudXNlcklkID09PSBPQ0NfVVNFUl9JRF9BTk9OWU1PVVMpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIFtuZXcgQ2hlY2tvdXRBY3Rpb25zLkNyZWF0ZVBheW1lbnREZXRhaWxzU3VjY2VzcyhkZXRhaWxzKV07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgIG5ldyBVc2VyQWN0aW9ucy5Mb2FkVXNlclBheW1lbnRNZXRob2RzKHBheWxvYWQudXNlcklkKSxcbiAgICAgICAgICAgICAgICBuZXcgQ2hlY2tvdXRBY3Rpb25zLkNyZWF0ZVBheW1lbnREZXRhaWxzU3VjY2VzcyhkZXRhaWxzKSxcbiAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjYXRjaEVycm9yKChlcnJvcikgPT5cbiAgICAgICAgICAgIG9mKFxuICAgICAgICAgICAgICBuZXcgQ2hlY2tvdXRBY3Rpb25zLkNyZWF0ZVBheW1lbnREZXRhaWxzRmFpbChcbiAgICAgICAgICAgICAgICBtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfSksXG4gICAgd2l0aGRyYXdPbih0aGlzLmNvbnRleHRDaGFuZ2UkKVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBzZXRQYXltZW50RGV0YWlscyQ6IE9ic2VydmFibGU8XG4gICAgfCBDaGVja291dEFjdGlvbnMuU2V0UGF5bWVudERldGFpbHNTdWNjZXNzXG4gICAgfCBDaGVja291dEFjdGlvbnMuU2V0UGF5bWVudERldGFpbHNGYWlsXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKENoZWNrb3V0QWN0aW9ucy5TRVRfUEFZTUVOVF9ERVRBSUxTKSxcbiAgICBtYXAoKGFjdGlvbjogYW55KSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWVyZ2VNYXAoKHBheWxvYWQpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmNoZWNrb3V0UGF5bWVudENvbm5lY3RvclxuICAgICAgICAuc2V0KHBheWxvYWQudXNlcklkLCBwYXlsb2FkLmNhcnRJZCwgcGF5bG9hZC5wYXltZW50RGV0YWlscy5pZClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKFxuICAgICAgICAgICAgKCkgPT5cbiAgICAgICAgICAgICAgbmV3IENoZWNrb3V0QWN0aW9ucy5TZXRQYXltZW50RGV0YWlsc1N1Y2Nlc3MoXG4gICAgICAgICAgICAgICAgcGF5bG9hZC5wYXltZW50RGV0YWlsc1xuICAgICAgICAgICAgICApXG4gICAgICAgICAgKSxcbiAgICAgICAgICBjYXRjaEVycm9yKChlcnJvcikgPT5cbiAgICAgICAgICAgIG9mKFxuICAgICAgICAgICAgICBuZXcgQ2hlY2tvdXRBY3Rpb25zLlNldFBheW1lbnREZXRhaWxzRmFpbChcbiAgICAgICAgICAgICAgICBtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfSksXG4gICAgd2l0aGRyYXdPbih0aGlzLmNvbnRleHRDaGFuZ2UkKVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBwbGFjZU9yZGVyJDogT2JzZXJ2YWJsZTxcbiAgICB8IENoZWNrb3V0QWN0aW9ucy5QbGFjZU9yZGVyU3VjY2Vzc1xuICAgIHwgR2xvYmFsTWVzc2FnZUFjdGlvbnMuQWRkTWVzc2FnZVxuICAgIHwgQ2hlY2tvdXRBY3Rpb25zLlBsYWNlT3JkZXJGYWlsXG4gICAgfCBDYXJ0QWN0aW9ucy5SZW1vdmVDYXJ0XG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKENoZWNrb3V0QWN0aW9ucy5QTEFDRV9PUkRFUiksXG4gICAgbWFwKChhY3Rpb246IGFueSkgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1lcmdlTWFwKChwYXlsb2FkKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5jaGVja291dENvbm5lY3RvclxuICAgICAgICAucGxhY2VPcmRlcihwYXlsb2FkLnVzZXJJZCwgcGF5bG9hZC5jYXJ0SWQpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIHN3aXRjaE1hcCgoZGF0YSkgPT4gW1xuICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLlJlbW92ZUNhcnQoeyBjYXJ0SWQ6IHBheWxvYWQuY2FydElkIH0pLFxuICAgICAgICAgICAgbmV3IENoZWNrb3V0QWN0aW9ucy5QbGFjZU9yZGVyU3VjY2VzcyhkYXRhKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBjYXRjaEVycm9yKChlcnJvcikgPT5cbiAgICAgICAgICAgIG9mKG5ldyBDaGVja291dEFjdGlvbnMuUGxhY2VPcmRlckZhaWwobWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKSkpXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH0pLFxuICAgIHdpdGhkcmF3T24odGhpcy5jb250ZXh0Q2hhbmdlJClcbiAgKTtcblxuICBARWZmZWN0KClcbiAgbG9hZENoZWNrb3V0RGV0YWlscyQ6IE9ic2VydmFibGU8XG4gICAgfCBDaGVja291dEFjdGlvbnMuTG9hZENoZWNrb3V0RGV0YWlsc1N1Y2Nlc3NcbiAgICB8IENoZWNrb3V0QWN0aW9ucy5Mb2FkQ2hlY2tvdXREZXRhaWxzRmFpbFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShDaGVja291dEFjdGlvbnMuTE9BRF9DSEVDS09VVF9ERVRBSUxTKSxcbiAgICBtYXAoKGFjdGlvbjogQ2hlY2tvdXRBY3Rpb25zLkxvYWRDaGVja291dERldGFpbHMpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcCgocGF5bG9hZCkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuY2hlY2tvdXRDb25uZWN0b3JcbiAgICAgICAgLmxvYWRDaGVja291dERldGFpbHMocGF5bG9hZC51c2VySWQsIHBheWxvYWQuY2FydElkKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAoXG4gICAgICAgICAgICAoZGF0YTogQ2hlY2tvdXREZXRhaWxzKSA9PlxuICAgICAgICAgICAgICBuZXcgQ2hlY2tvdXRBY3Rpb25zLkxvYWRDaGVja291dERldGFpbHNTdWNjZXNzKGRhdGEpXG4gICAgICAgICAgKSxcbiAgICAgICAgICBjYXRjaEVycm9yKChlcnJvcikgPT5cbiAgICAgICAgICAgIG9mKFxuICAgICAgICAgICAgICBuZXcgQ2hlY2tvdXRBY3Rpb25zLkxvYWRDaGVja291dERldGFpbHNGYWlsKFxuICAgICAgICAgICAgICAgIG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcilcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9KSxcbiAgICB3aXRoZHJhd09uKHRoaXMuY29udGV4dENoYW5nZSQpXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIHJlbG9hZERldGFpbHNPbk1lcmdlQ2FydCQ6IE9ic2VydmFibGU8XG4gICAgQ2hlY2tvdXRBY3Rpb25zLkxvYWRDaGVja291dERldGFpbHNcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoQ2FydEFjdGlvbnMuTUVSR0VfQ0FSVF9TVUNDRVNTKSxcbiAgICBtYXAoKGFjdGlvbjogQ2FydEFjdGlvbnMuTWVyZ2VDYXJ0U3VjY2VzcykgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1hcCgocGF5bG9hZCkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBDaGVja291dEFjdGlvbnMuTG9hZENoZWNrb3V0RGV0YWlscyh7XG4gICAgICAgIHVzZXJJZDogcGF5bG9hZC51c2VySWQsXG4gICAgICAgIGNhcnRJZDogcGF5bG9hZC5jYXJ0SWQsXG4gICAgICB9KTtcbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBjbGVhckNoZWNrb3V0RGVsaXZlcnlBZGRyZXNzJDogT2JzZXJ2YWJsZTxcbiAgICB8IENoZWNrb3V0QWN0aW9ucy5DbGVhckNoZWNrb3V0RGVsaXZlcnlBZGRyZXNzRmFpbFxuICAgIHwgQ2hlY2tvdXRBY3Rpb25zLkNsZWFyQ2hlY2tvdXREZWxpdmVyeUFkZHJlc3NTdWNjZXNzXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKENoZWNrb3V0QWN0aW9ucy5DTEVBUl9DSEVDS09VVF9ERUxJVkVSWV9BRERSRVNTKSxcbiAgICBtYXAoXG4gICAgICAoYWN0aW9uOiBDaGVja291dEFjdGlvbnMuQ2xlYXJDaGVja291dERlbGl2ZXJ5QWRkcmVzcykgPT4gYWN0aW9uLnBheWxvYWRcbiAgICApLFxuICAgIGZpbHRlcigocGF5bG9hZCkgPT4gQm9vbGVhbihwYXlsb2FkLmNhcnRJZCkpLFxuICAgIHN3aXRjaE1hcCgocGF5bG9hZCkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuY2hlY2tvdXRDb25uZWN0b3JcbiAgICAgICAgLmNsZWFyQ2hlY2tvdXREZWxpdmVyeUFkZHJlc3MocGF5bG9hZC51c2VySWQsIHBheWxvYWQuY2FydElkKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAoKCkgPT4gbmV3IENoZWNrb3V0QWN0aW9ucy5DbGVhckNoZWNrb3V0RGVsaXZlcnlBZGRyZXNzU3VjY2VzcygpKSxcbiAgICAgICAgICBjYXRjaEVycm9yKChlcnJvcikgPT5cbiAgICAgICAgICAgIG9mKFxuICAgICAgICAgICAgICBuZXcgQ2hlY2tvdXRBY3Rpb25zLkNsZWFyQ2hlY2tvdXREZWxpdmVyeUFkZHJlc3NGYWlsKFxuICAgICAgICAgICAgICAgIG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcilcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9KSxcbiAgICB3aXRoZHJhd09uKHRoaXMuY29udGV4dENoYW5nZSQpXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIGNsZWFyQ2hlY2tvdXREZWxpdmVyeU1vZGUkOiBPYnNlcnZhYmxlPFxuICAgIHwgQ2hlY2tvdXRBY3Rpb25zLkNsZWFyQ2hlY2tvdXREZWxpdmVyeU1vZGVGYWlsXG4gICAgfCBDaGVja291dEFjdGlvbnMuQ2xlYXJDaGVja291dERlbGl2ZXJ5TW9kZVN1Y2Nlc3NcbiAgICB8IENhcnRBY3Rpb25zLkxvYWRDYXJ0XG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKENoZWNrb3V0QWN0aW9ucy5DTEVBUl9DSEVDS09VVF9ERUxJVkVSWV9NT0RFKSxcbiAgICBtYXAoKGFjdGlvbjogQ2hlY2tvdXRBY3Rpb25zLkNsZWFyQ2hlY2tvdXREZWxpdmVyeU1vZGUpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBmaWx0ZXIoKHBheWxvYWQpID0+IEJvb2xlYW4ocGF5bG9hZC5jYXJ0SWQpKSxcbiAgICBjb25jYXRNYXAoKHBheWxvYWQpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmNoZWNrb3V0Q29ubmVjdG9yXG4gICAgICAgIC5jbGVhckNoZWNrb3V0RGVsaXZlcnlNb2RlKHBheWxvYWQudXNlcklkLCBwYXlsb2FkLmNhcnRJZClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKFxuICAgICAgICAgICAgKCkgPT5cbiAgICAgICAgICAgICAgbmV3IENoZWNrb3V0QWN0aW9ucy5DbGVhckNoZWNrb3V0RGVsaXZlcnlNb2RlU3VjY2Vzcyh7XG4gICAgICAgICAgICAgICAgLi4ucGF5bG9hZCxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICApLFxuICAgICAgICAgIGNhdGNoRXJyb3IoKGVycm9yKSA9PlxuICAgICAgICAgICAgZnJvbShbXG4gICAgICAgICAgICAgIG5ldyBDaGVja291dEFjdGlvbnMuQ2xlYXJDaGVja291dERlbGl2ZXJ5TW9kZUZhaWwoe1xuICAgICAgICAgICAgICAgIC4uLnBheWxvYWQsXG4gICAgICAgICAgICAgICAgZXJyb3I6IG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvciksXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBuZXcgQ2FydEFjdGlvbnMuTG9hZENhcnQoe1xuICAgICAgICAgICAgICAgIGNhcnRJZDogcGF5bG9hZC5jYXJ0SWQsXG4gICAgICAgICAgICAgICAgdXNlcklkOiBwYXlsb2FkLnVzZXJJZCxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9KSxcbiAgICB3aXRoZHJhd09uKHRoaXMuY29udGV4dENoYW5nZSQpXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIHNldENvc3RDZW50ZXIkOiBPYnNlcnZhYmxlPFxuICAgIHwgQ2hlY2tvdXRBY3Rpb25zLlNldENvc3RDZW50ZXJTdWNjZXNzXG4gICAgfCBDaGVja291dEFjdGlvbnMuU2V0Q29zdENlbnRlckZhaWxcbiAgICB8IENoZWNrb3V0QWN0aW9ucy5DbGVhckNoZWNrb3V0RGVsaXZlcnlNb2RlXG4gICAgfCBDaGVja291dEFjdGlvbnMuQ2xlYXJDaGVja291dERlbGl2ZXJ5QWRkcmVzc1xuICAgIHwgQ2FydEFjdGlvbnMuTG9hZENhcnRTdWNjZXNzXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKENoZWNrb3V0QWN0aW9ucy5TRVRfQ09TVF9DRU5URVIpLFxuICAgIG1hcCgoYWN0aW9uOiBDaGVja291dEFjdGlvbnMuU2V0Q29zdENlbnRlcikgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIHN3aXRjaE1hcCgocGF5bG9hZCkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuY2hlY2tvdXRDb3N0Q2VudGVyQ29ubmVjdG9yXG4gICAgICAgIC5zZXRDb3N0Q2VudGVyKHBheWxvYWQudXNlcklkLCBwYXlsb2FkLmNhcnRJZCwgcGF5bG9hZC5jb3N0Q2VudGVySWQpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1lcmdlTWFwKChkYXRhKSA9PiBbXG4gICAgICAgICAgICAvLyBUT0RPKCM4ODc3KTogV2Ugc2hvdWxkIHRyaWdnZXIgbG9hZCBjYXJ0IG5vdCBhbHJlYWR5IGFzc2lnbiB0aGUgZGF0YS4gV2UgbWlnaHQgaGF2ZSBtaXNjb25maWd1cmF0aW9uIGJldHdlZW4gdGhpcyBjYXJ0IG1vZGVsIGFuZCBsb2FkIGNhcnQgbW9kZWxcbiAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5Mb2FkQ2FydFN1Y2Nlc3Moe1xuICAgICAgICAgICAgICBjYXJ0OiBkYXRhLFxuICAgICAgICAgICAgICBjYXJ0SWQ6IHBheWxvYWQuY2FydElkLFxuICAgICAgICAgICAgICB1c2VySWQ6IHBheWxvYWQudXNlcklkLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBuZXcgQ2hlY2tvdXRBY3Rpb25zLlNldENvc3RDZW50ZXJTdWNjZXNzKHBheWxvYWQuY29zdENlbnRlcklkKSxcbiAgICAgICAgICAgIG5ldyBDaGVja291dEFjdGlvbnMuQ2xlYXJDaGVja291dERlbGl2ZXJ5TW9kZSh7XG4gICAgICAgICAgICAgIHVzZXJJZDogcGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgICAgIGNhcnRJZDogcGF5bG9hZC5jYXJ0SWQsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIG5ldyBDaGVja291dEFjdGlvbnMuQ2xlYXJDaGVja291dERlbGl2ZXJ5QWRkcmVzcyh7XG4gICAgICAgICAgICAgIHVzZXJJZDogcGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgICAgIGNhcnRJZDogcGF5bG9hZC5jYXJ0SWQsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBjYXRjaEVycm9yKChlcnJvcikgPT5cbiAgICAgICAgICAgIG9mKG5ldyBDaGVja291dEFjdGlvbnMuU2V0Q29zdENlbnRlckZhaWwobm9ybWFsaXplSHR0cEVycm9yKGVycm9yKSkpXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH0pLFxuICAgIHdpdGhkcmF3T24odGhpcy5jb250ZXh0Q2hhbmdlJClcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgY2hlY2tvdXREZWxpdmVyeUNvbm5lY3RvcjogQ2hlY2tvdXREZWxpdmVyeUNvbm5lY3RvcixcbiAgICBwcml2YXRlIGNoZWNrb3V0UGF5bWVudENvbm5lY3RvcjogQ2hlY2tvdXRQYXltZW50Q29ubmVjdG9yLFxuICAgIHByaXZhdGUgY2hlY2tvdXRDb3N0Q2VudGVyQ29ubmVjdG9yOiBDaGVja291dENvc3RDZW50ZXJDb25uZWN0b3IsXG4gICAgcHJpdmF0ZSBjaGVja291dENvbm5lY3RvcjogQ2hlY2tvdXRDb25uZWN0b3JcbiAgKSB7fVxufVxuIl19
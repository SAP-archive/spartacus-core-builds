import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { from, of } from 'rxjs';
import { catchError, concatMap, filter, map, mergeMap, switchMap, } from 'rxjs/operators';
import { AuthActions } from '../../../auth/store/actions/index';
import * as DeprecatedCartActions from '../../../cart/store/actions/cart.action';
import { CartActions } from '../../../cart/store/actions/index';
import { OCC_CART_ID_CURRENT, OCC_USER_ID_ANONYMOUS, } from '../../../occ/utils/occ-constants';
import { SiteContextActions } from '../../../site-context/store/actions/index';
import { UserActions } from '../../../user/store/actions/index';
import { makeErrorSerializable } from '../../../util/serialization-utils';
import { withdrawOn } from '../../../util/withdraw-on';
import { CheckoutConnector } from '../../connectors/checkout/checkout.connector';
import { CheckoutDeliveryConnector } from '../../connectors/delivery/checkout-delivery.connector';
import { CheckoutPaymentConnector } from '../../connectors/payment/checkout-payment.connector';
import { CheckoutActions } from '../actions/index';
var CheckoutEffects = /** @class */ (function () {
    function CheckoutEffects(actions$, checkoutDeliveryConnector, checkoutPaymentConnector, checkoutConnector) {
        var _this = this;
        this.actions$ = actions$;
        this.checkoutDeliveryConnector = checkoutDeliveryConnector;
        this.checkoutPaymentConnector = checkoutPaymentConnector;
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
            new CheckoutActions.CheckoutClearMiscsData(),
            new CheckoutActions.ResetLoadSupportedDeliveryModesProcess(),
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
                    new DeprecatedCartActions.LoadCart({
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
                new CartActions.RemoveCart(payload.cartId),
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
        this.reloadDetailsOnMergeCart$ = this.actions$.pipe(ofType(DeprecatedCartActions.MERGE_CART_SUCCESS), map(function (action) { return action.payload; }), map(function (payload) {
            return new CheckoutActions.LoadCheckoutDetails({
                userId: payload.userId,
                cartId: payload.cartId ? payload.cartId : OCC_CART_ID_CURRENT,
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
                return new CheckoutActions.ClearCheckoutDeliveryModeSuccess({
                    userId: payload.userId,
                    cartId: payload.cartId,
                });
            }), catchError(function (error) {
                return from([
                    new CheckoutActions.ClearCheckoutDeliveryModeFail(makeErrorSerializable(error)),
                    new CartActions.CartProcessesDecrement(payload.cartId),
                    new CartActions.LoadCart({
                        cartId: payload.cartId,
                        userId: payload.userId,
                    }),
                ]);
            }));
        }), withdrawOn(this.contextChange$));
    }
    CheckoutEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: CheckoutDeliveryConnector },
        { type: CheckoutPaymentConnector },
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
    CheckoutEffects = __decorate([
        Injectable()
    ], CheckoutEffects);
    return CheckoutEffects;
}());
export { CheckoutEffects };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQuZWZmZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NoZWNrb3V0L3N0b3JlL2VmZmVjdHMvY2hlY2tvdXQuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsSUFBSSxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM1QyxPQUFPLEVBQ0wsVUFBVSxFQUNWLFNBQVMsRUFDVCxNQUFNLEVBQ04sR0FBRyxFQUNILFFBQVEsRUFDUixTQUFTLEdBQ1YsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDaEUsT0FBTyxLQUFLLHFCQUFxQixNQUFNLHlDQUF5QyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUdoRSxPQUFPLEVBQ0wsbUJBQW1CLEVBQ25CLHFCQUFxQixHQUN0QixNQUFNLGtDQUFrQyxDQUFDO0FBQzFDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNoRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDakYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDbEcsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0scURBQXFELENB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QUFNLEVBQUU7c0VBTVA7SUFHRjtRQURDLE1BQU0sRUFBRTs2REFpQ1A7SUFHRjtRQURDLE1BQU0sRUFBRTtrRUFpQ1A7SUFHRjtRQURDLE1BQU0sRUFBRTsrREEyQlA7SUFHRjtRQURDLE1BQU0sRUFBRTt3REF1QlA7SUFHRjtRQURDLE1BQU0sRUFBRTtpRUF5QlA7SUFHRjtRQURDLE1BQU0sRUFBRTtzRUFZUDtJQUdGO1FBREMsTUFBTSxFQUFFOzBFQXlCUDtJQUdGO1FBREMsTUFBTSxFQUFFO3VFQW9DUDtJQXBZUyxlQUFlO1FBRDNCLFVBQVUsRUFBRTtPQUNBLGVBQWUsQ0E0WTNCO0lBQUQsc0JBQUM7Q0FBQSxBQTVZRCxJQTRZQztTQTVZWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IGZyb20sIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBjYXRjaEVycm9yLFxuICBjb25jYXRNYXAsXG4gIGZpbHRlcixcbiAgbWFwLFxuICBtZXJnZU1hcCxcbiAgc3dpdGNoTWFwLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBdXRoQWN0aW9ucyB9IGZyb20gJy4uLy4uLy4uL2F1dGgvc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgKiBhcyBEZXByZWNhdGVkQ2FydEFjdGlvbnMgZnJvbSAnLi4vLi4vLi4vY2FydC9zdG9yZS9hY3Rpb25zL2NhcnQuYWN0aW9uJztcbmltcG9ydCB7IENhcnRBY3Rpb25zIH0gZnJvbSAnLi4vLi4vLi4vY2FydC9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IENoZWNrb3V0RGV0YWlscyB9IGZyb20gJy4uLy4uLy4uL2NoZWNrb3V0L21vZGVscy9jaGVja291dC5tb2RlbCc7XG5pbXBvcnQgeyBHbG9iYWxNZXNzYWdlQWN0aW9ucyB9IGZyb20gJy4uLy4uLy4uL2dsb2JhbC1tZXNzYWdlL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHtcbiAgT0NDX0NBUlRfSURfQ1VSUkVOVCxcbiAgT0NDX1VTRVJfSURfQU5PTllNT1VTLFxufSBmcm9tICcuLi8uLi8uLi9vY2MvdXRpbHMvb2NjLWNvbnN0YW50cyc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dEFjdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9zaXRlLWNvbnRleHQvc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBVc2VyQWN0aW9ucyB9IGZyb20gJy4uLy4uLy4uL3VzZXIvc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBtYWtlRXJyb3JTZXJpYWxpemFibGUgfSBmcm9tICcuLi8uLi8uLi91dGlsL3NlcmlhbGl6YXRpb24tdXRpbHMnO1xuaW1wb3J0IHsgd2l0aGRyYXdPbiB9IGZyb20gJy4uLy4uLy4uL3V0aWwvd2l0aGRyYXctb24nO1xuaW1wb3J0IHsgQ2hlY2tvdXRDb25uZWN0b3IgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL2NoZWNrb3V0L2NoZWNrb3V0LmNvbm5lY3Rvcic7XG5pbXBvcnQgeyBDaGVja291dERlbGl2ZXJ5Q29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9kZWxpdmVyeS9jaGVja291dC1kZWxpdmVyeS5jb25uZWN0b3InO1xuaW1wb3J0IHsgQ2hlY2tvdXRQYXltZW50Q29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9wYXltZW50L2NoZWNrb3V0LXBheW1lbnQuY29ubmVjdG9yJztcbmltcG9ydCB7IENoZWNrb3V0QWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2hlY2tvdXRFZmZlY3RzIHtcbiAgcHJpdmF0ZSBjb250ZXh0Q2hhbmdlJCA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoXG4gICAgICBTaXRlQ29udGV4dEFjdGlvbnMuQ1VSUkVOQ1lfQ0hBTkdFLFxuICAgICAgU2l0ZUNvbnRleHRBY3Rpb25zLkxBTkdVQUdFX0NIQU5HRVxuICAgIClcbiAgKTtcblxuICBARWZmZWN0KClcbiAgYWRkRGVsaXZlcnlBZGRyZXNzJDogT2JzZXJ2YWJsZTxcbiAgICB8IFVzZXJBY3Rpb25zLkxvYWRVc2VyQWRkcmVzc2VzXG4gICAgfCBDaGVja291dEFjdGlvbnMuU2V0RGVsaXZlcnlBZGRyZXNzXG4gICAgfCBDaGVja291dEFjdGlvbnMuQWRkRGVsaXZlcnlBZGRyZXNzRmFpbFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShDaGVja291dEFjdGlvbnMuQUREX0RFTElWRVJZX0FERFJFU1MpLFxuICAgIG1hcCgoYWN0aW9uOiBDaGVja291dEFjdGlvbnMuQWRkRGVsaXZlcnlBZGRyZXNzKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWVyZ2VNYXAocGF5bG9hZCA9PlxuICAgICAgdGhpcy5jaGVja291dERlbGl2ZXJ5Q29ubmVjdG9yXG4gICAgICAgIC5jcmVhdGVBZGRyZXNzKHBheWxvYWQudXNlcklkLCBwYXlsb2FkLmNhcnRJZCwgcGF5bG9hZC5hZGRyZXNzKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtZXJnZU1hcChhZGRyZXNzID0+IHtcbiAgICAgICAgICAgIGFkZHJlc3NbJ3RpdGxlQ29kZSddID0gcGF5bG9hZC5hZGRyZXNzLnRpdGxlQ29kZTtcbiAgICAgICAgICAgIGlmIChwYXlsb2FkLmFkZHJlc3MucmVnaW9uICYmIHBheWxvYWQuYWRkcmVzcy5yZWdpb24uaXNvY29kZVNob3J0KSB7XG4gICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oYWRkcmVzcy5yZWdpb24sIHtcbiAgICAgICAgICAgICAgICBpc29jb2RlU2hvcnQ6IHBheWxvYWQuYWRkcmVzcy5yZWdpb24uaXNvY29kZVNob3J0LFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwYXlsb2FkLnVzZXJJZCA9PT0gT0NDX1VTRVJfSURfQU5PTllNT1VTKSB7XG4gICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgbmV3IENoZWNrb3V0QWN0aW9ucy5TZXREZWxpdmVyeUFkZHJlc3Moe1xuICAgICAgICAgICAgICAgICAgdXNlcklkOiBwYXlsb2FkLnVzZXJJZCxcbiAgICAgICAgICAgICAgICAgIGNhcnRJZDogcGF5bG9hZC5jYXJ0SWQsXG4gICAgICAgICAgICAgICAgICBhZGRyZXNzOiBhZGRyZXNzLFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICBuZXcgVXNlckFjdGlvbnMuTG9hZFVzZXJBZGRyZXNzZXMocGF5bG9hZC51c2VySWQpLFxuICAgICAgICAgICAgICAgIG5ldyBDaGVja291dEFjdGlvbnMuU2V0RGVsaXZlcnlBZGRyZXNzKHtcbiAgICAgICAgICAgICAgICAgIHVzZXJJZDogcGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgICAgICAgICBjYXJ0SWQ6IHBheWxvYWQuY2FydElkLFxuICAgICAgICAgICAgICAgICAgYWRkcmVzczogYWRkcmVzcyxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICBvZihcbiAgICAgICAgICAgICAgbmV3IENoZWNrb3V0QWN0aW9ucy5BZGREZWxpdmVyeUFkZHJlc3NGYWlsKFxuICAgICAgICAgICAgICAgIG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcilcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICksXG4gICAgd2l0aGRyYXdPbih0aGlzLmNvbnRleHRDaGFuZ2UkKVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBzZXREZWxpdmVyeUFkZHJlc3MkOiBPYnNlcnZhYmxlPFxuICAgIHwgQ2hlY2tvdXRBY3Rpb25zLlNldERlbGl2ZXJ5QWRkcmVzc1N1Y2Nlc3NcbiAgICB8IENoZWNrb3V0QWN0aW9ucy5DbGVhclN1cHBvcnRlZERlbGl2ZXJ5TW9kZXNcbiAgICB8IENoZWNrb3V0QWN0aW9ucy5DbGVhckNoZWNrb3V0RGVsaXZlcnlNb2RlXG4gICAgfCBDaGVja291dEFjdGlvbnMuUmVzZXRMb2FkU3VwcG9ydGVkRGVsaXZlcnlNb2Rlc1Byb2Nlc3NcbiAgICB8IENoZWNrb3V0QWN0aW9ucy5Mb2FkU3VwcG9ydGVkRGVsaXZlcnlNb2Rlc1xuICAgIHwgQ2hlY2tvdXRBY3Rpb25zLlNldERlbGl2ZXJ5QWRkcmVzc0ZhaWxcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoQ2hlY2tvdXRBY3Rpb25zLlNFVF9ERUxJVkVSWV9BRERSRVNTKSxcbiAgICBtYXAoKGFjdGlvbjogYW55KSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWVyZ2VNYXAocGF5bG9hZCA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5jaGVja291dERlbGl2ZXJ5Q29ubmVjdG9yXG4gICAgICAgIC5zZXRBZGRyZXNzKHBheWxvYWQudXNlcklkLCBwYXlsb2FkLmNhcnRJZCwgcGF5bG9hZC5hZGRyZXNzLmlkKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtZXJnZU1hcCgoKSA9PiBbXG4gICAgICAgICAgICBuZXcgQ2hlY2tvdXRBY3Rpb25zLlNldERlbGl2ZXJ5QWRkcmVzc1N1Y2Nlc3MocGF5bG9hZC5hZGRyZXNzKSxcbiAgICAgICAgICAgIG5ldyBDaGVja291dEFjdGlvbnMuQ2xlYXJDaGVja291dERlbGl2ZXJ5TW9kZSh7XG4gICAgICAgICAgICAgIHVzZXJJZDogcGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgICAgIGNhcnRJZDogcGF5bG9hZC5jYXJ0SWQsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIG5ldyBDaGVja291dEFjdGlvbnMuQ2xlYXJTdXBwb3J0ZWREZWxpdmVyeU1vZGVzKCksXG4gICAgICAgICAgICBuZXcgQ2hlY2tvdXRBY3Rpb25zLlJlc2V0TG9hZFN1cHBvcnRlZERlbGl2ZXJ5TW9kZXNQcm9jZXNzKCksXG4gICAgICAgICAgICBuZXcgQ2hlY2tvdXRBY3Rpb25zLkxvYWRTdXBwb3J0ZWREZWxpdmVyeU1vZGVzKHtcbiAgICAgICAgICAgICAgdXNlcklkOiBwYXlsb2FkLnVzZXJJZCxcbiAgICAgICAgICAgICAgY2FydElkOiBwYXlsb2FkLmNhcnRJZCxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgIF0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICAgIG9mKFxuICAgICAgICAgICAgICBuZXcgQ2hlY2tvdXRBY3Rpb25zLlNldERlbGl2ZXJ5QWRkcmVzc0ZhaWwoXG4gICAgICAgICAgICAgICAgbWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH0pLFxuICAgIHdpdGhkcmF3T24odGhpcy5jb250ZXh0Q2hhbmdlJClcbiAgKTtcblxuICBARWZmZWN0KClcbiAgbG9hZFN1cHBvcnRlZERlbGl2ZXJ5TW9kZXMkOiBPYnNlcnZhYmxlPFxuICAgIHwgQ2hlY2tvdXRBY3Rpb25zLkxvYWRTdXBwb3J0ZWREZWxpdmVyeU1vZGVzU3VjY2Vzc1xuICAgIHwgQ2hlY2tvdXRBY3Rpb25zLkxvYWRTdXBwb3J0ZWREZWxpdmVyeU1vZGVzRmFpbFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShDaGVja291dEFjdGlvbnMuTE9BRF9TVVBQT1JURURfREVMSVZFUllfTU9ERVMpLFxuICAgIG1hcCgoYWN0aW9uOiBhbnkpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcChwYXlsb2FkID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmNoZWNrb3V0RGVsaXZlcnlDb25uZWN0b3JcbiAgICAgICAgLmdldFN1cHBvcnRlZE1vZGVzKHBheWxvYWQudXNlcklkLCBwYXlsb2FkLmNhcnRJZClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKGRhdGEgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBDaGVja291dEFjdGlvbnMuTG9hZFN1cHBvcnRlZERlbGl2ZXJ5TW9kZXNTdWNjZXNzKGRhdGEpO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICAgIG9mKFxuICAgICAgICAgICAgICBuZXcgQ2hlY2tvdXRBY3Rpb25zLkxvYWRTdXBwb3J0ZWREZWxpdmVyeU1vZGVzRmFpbChcbiAgICAgICAgICAgICAgICBtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfSksXG4gICAgd2l0aGRyYXdPbih0aGlzLmNvbnRleHRDaGFuZ2UkKVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBjbGVhckNoZWNrb3V0TWlzY3NEYXRhT25MYW5ndWFnZUNoYW5nZSQ6IE9ic2VydmFibGU8XG4gICAgfCBDaGVja291dEFjdGlvbnMuQ2hlY2tvdXRDbGVhck1pc2NzRGF0YVxuICAgIHwgQ2hlY2tvdXRBY3Rpb25zLlJlc2V0TG9hZFN1cHBvcnRlZERlbGl2ZXJ5TW9kZXNQcm9jZXNzXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFNpdGVDb250ZXh0QWN0aW9ucy5MQU5HVUFHRV9DSEFOR0UpLFxuICAgIG1lcmdlTWFwKCgpID0+IFtcbiAgICAgIG5ldyBDaGVja291dEFjdGlvbnMuQ2hlY2tvdXRDbGVhck1pc2NzRGF0YSgpLFxuICAgICAgbmV3IENoZWNrb3V0QWN0aW9ucy5SZXNldExvYWRTdXBwb3J0ZWREZWxpdmVyeU1vZGVzUHJvY2VzcygpLFxuICAgIF0pXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIGNsZWFyRGVsaXZlcnlNb2Rlc09uQ3VycmVuY3lDaGFuZ2UkOiBPYnNlcnZhYmxlPFxuICAgIENoZWNrb3V0QWN0aW9ucy5DbGVhclN1cHBvcnRlZERlbGl2ZXJ5TW9kZXNcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoU2l0ZUNvbnRleHRBY3Rpb25zLkNVUlJFTkNZX0NIQU5HRSksXG4gICAgbWFwKCgpID0+IG5ldyBDaGVja291dEFjdGlvbnMuQ2xlYXJTdXBwb3J0ZWREZWxpdmVyeU1vZGVzKCkpXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIGNsZWFyQ2hlY2tvdXREYXRhT25Mb2dvdXQkOiBPYnNlcnZhYmxlPFxuICAgIENoZWNrb3V0QWN0aW9ucy5DbGVhckNoZWNrb3V0RGF0YVxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShBdXRoQWN0aW9ucy5MT0dPVVQpLFxuICAgIG1hcCgoKSA9PiBuZXcgQ2hlY2tvdXRBY3Rpb25zLkNsZWFyQ2hlY2tvdXREYXRhKCkpXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIGNsZWFyQ2hlY2tvdXREYXRhT25Mb2dpbiQ6IE9ic2VydmFibGU8XG4gICAgQ2hlY2tvdXRBY3Rpb25zLkNsZWFyQ2hlY2tvdXREYXRhXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKEF1dGhBY3Rpb25zLkxPR0lOKSxcbiAgICBtYXAoKCkgPT4gbmV3IENoZWNrb3V0QWN0aW9ucy5DbGVhckNoZWNrb3V0RGF0YSgpKVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBzZXREZWxpdmVyeU1vZGUkOiBPYnNlcnZhYmxlPFxuICAgIHwgQ2hlY2tvdXRBY3Rpb25zLlNldERlbGl2ZXJ5TW9kZVN1Y2Nlc3NcbiAgICB8IENoZWNrb3V0QWN0aW9ucy5TZXREZWxpdmVyeU1vZGVGYWlsXG4gICAgfCBEZXByZWNhdGVkQ2FydEFjdGlvbnMuTG9hZENhcnRcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoQ2hlY2tvdXRBY3Rpb25zLlNFVF9ERUxJVkVSWV9NT0RFKSxcbiAgICBtYXAoKGFjdGlvbjogYW55KSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWVyZ2VNYXAocGF5bG9hZCA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5jaGVja291dERlbGl2ZXJ5Q29ubmVjdG9yXG4gICAgICAgIC5zZXRNb2RlKHBheWxvYWQudXNlcklkLCBwYXlsb2FkLmNhcnRJZCwgcGF5bG9hZC5zZWxlY3RlZE1vZGVJZClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWVyZ2VNYXAoKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgbmV3IENoZWNrb3V0QWN0aW9ucy5TZXREZWxpdmVyeU1vZGVTdWNjZXNzKFxuICAgICAgICAgICAgICAgIHBheWxvYWQuc2VsZWN0ZWRNb2RlSWRcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgbmV3IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5Mb2FkQ2FydCh7XG4gICAgICAgICAgICAgICAgdXNlcklkOiBwYXlsb2FkLnVzZXJJZCxcbiAgICAgICAgICAgICAgICBjYXJ0SWQ6IHBheWxvYWQuY2FydElkLFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgICAgb2YoXG4gICAgICAgICAgICAgIG5ldyBDaGVja291dEFjdGlvbnMuU2V0RGVsaXZlcnlNb2RlRmFpbChcbiAgICAgICAgICAgICAgICBtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfSksXG4gICAgd2l0aGRyYXdPbih0aGlzLmNvbnRleHRDaGFuZ2UkKVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBjcmVhdGVQYXltZW50RGV0YWlscyQ6IE9ic2VydmFibGU8XG4gICAgfCBVc2VyQWN0aW9ucy5Mb2FkVXNlclBheW1lbnRNZXRob2RzXG4gICAgfCBDaGVja291dEFjdGlvbnMuQ3JlYXRlUGF5bWVudERldGFpbHNTdWNjZXNzXG4gICAgfCBDaGVja291dEFjdGlvbnMuQ3JlYXRlUGF5bWVudERldGFpbHNGYWlsXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKENoZWNrb3V0QWN0aW9ucy5DUkVBVEVfUEFZTUVOVF9ERVRBSUxTKSxcbiAgICBtYXAoKGFjdGlvbjogYW55KSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWVyZ2VNYXAocGF5bG9hZCA9PiB7XG4gICAgICAvLyBnZXQgaW5mb3JtYXRpb24gZm9yIGNyZWF0aW5nIGEgc3Vic2NyaXB0aW9uIGRpcmVjdGx5IHdpdGggcGF5bWVudCBwcm92aWRlclxuICAgICAgcmV0dXJuIHRoaXMuY2hlY2tvdXRQYXltZW50Q29ubmVjdG9yXG4gICAgICAgIC5jcmVhdGUocGF5bG9hZC51c2VySWQsIHBheWxvYWQuY2FydElkLCBwYXlsb2FkLnBheW1lbnREZXRhaWxzKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtZXJnZU1hcChkZXRhaWxzID0+IHtcbiAgICAgICAgICAgIGlmIChwYXlsb2FkLnVzZXJJZCA9PT0gT0NDX1VTRVJfSURfQU5PTllNT1VTKSB7XG4gICAgICAgICAgICAgIHJldHVybiBbbmV3IENoZWNrb3V0QWN0aW9ucy5DcmVhdGVQYXltZW50RGV0YWlsc1N1Y2Nlc3MoZGV0YWlscyldO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICBuZXcgVXNlckFjdGlvbnMuTG9hZFVzZXJQYXltZW50TWV0aG9kcyhwYXlsb2FkLnVzZXJJZCksXG4gICAgICAgICAgICAgICAgbmV3IENoZWNrb3V0QWN0aW9ucy5DcmVhdGVQYXltZW50RGV0YWlsc1N1Y2Nlc3MoZGV0YWlscyksXG4gICAgICAgICAgICAgIF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgICAgb2YoXG4gICAgICAgICAgICAgIG5ldyBDaGVja291dEFjdGlvbnMuQ3JlYXRlUGF5bWVudERldGFpbHNGYWlsKFxuICAgICAgICAgICAgICAgIG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcilcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9KSxcbiAgICB3aXRoZHJhd09uKHRoaXMuY29udGV4dENoYW5nZSQpXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIHNldFBheW1lbnREZXRhaWxzJDogT2JzZXJ2YWJsZTxcbiAgICB8IENoZWNrb3V0QWN0aW9ucy5TZXRQYXltZW50RGV0YWlsc1N1Y2Nlc3NcbiAgICB8IENoZWNrb3V0QWN0aW9ucy5TZXRQYXltZW50RGV0YWlsc0ZhaWxcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoQ2hlY2tvdXRBY3Rpb25zLlNFVF9QQVlNRU5UX0RFVEFJTFMpLFxuICAgIG1hcCgoYWN0aW9uOiBhbnkpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcChwYXlsb2FkID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmNoZWNrb3V0UGF5bWVudENvbm5lY3RvclxuICAgICAgICAuc2V0KHBheWxvYWQudXNlcklkLCBwYXlsb2FkLmNhcnRJZCwgcGF5bG9hZC5wYXltZW50RGV0YWlscy5pZClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKFxuICAgICAgICAgICAgKCkgPT5cbiAgICAgICAgICAgICAgbmV3IENoZWNrb3V0QWN0aW9ucy5TZXRQYXltZW50RGV0YWlsc1N1Y2Nlc3MoXG4gICAgICAgICAgICAgICAgcGF5bG9hZC5wYXltZW50RGV0YWlsc1xuICAgICAgICAgICAgICApXG4gICAgICAgICAgKSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICBvZihcbiAgICAgICAgICAgICAgbmV3IENoZWNrb3V0QWN0aW9ucy5TZXRQYXltZW50RGV0YWlsc0ZhaWwoXG4gICAgICAgICAgICAgICAgbWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH0pLFxuICAgIHdpdGhkcmF3T24odGhpcy5jb250ZXh0Q2hhbmdlJClcbiAgKTtcblxuICBARWZmZWN0KClcbiAgcGxhY2VPcmRlciQ6IE9ic2VydmFibGU8XG4gICAgfCBDaGVja291dEFjdGlvbnMuUGxhY2VPcmRlclN1Y2Nlc3NcbiAgICB8IEdsb2JhbE1lc3NhZ2VBY3Rpb25zLkFkZE1lc3NhZ2VcbiAgICB8IENoZWNrb3V0QWN0aW9ucy5QbGFjZU9yZGVyRmFpbFxuICAgIHwgQ2FydEFjdGlvbnMuUmVtb3ZlQ2FydFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShDaGVja291dEFjdGlvbnMuUExBQ0VfT1JERVIpLFxuICAgIG1hcCgoYWN0aW9uOiBhbnkpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcChwYXlsb2FkID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmNoZWNrb3V0Q29ubmVjdG9yXG4gICAgICAgIC5wbGFjZU9yZGVyKHBheWxvYWQudXNlcklkLCBwYXlsb2FkLmNhcnRJZClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgc3dpdGNoTWFwKGRhdGEgPT4gW1xuICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLlJlbW92ZUNhcnQocGF5bG9hZC5jYXJ0SWQpLFxuICAgICAgICAgICAgbmV3IENoZWNrb3V0QWN0aW9ucy5QbGFjZU9yZGVyU3VjY2VzcyhkYXRhKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICBvZihuZXcgQ2hlY2tvdXRBY3Rpb25zLlBsYWNlT3JkZXJGYWlsKG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcikpKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9KSxcbiAgICB3aXRoZHJhd09uKHRoaXMuY29udGV4dENoYW5nZSQpXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIGxvYWRDaGVja291dERldGFpbHMkOiBPYnNlcnZhYmxlPFxuICAgIHwgQ2hlY2tvdXRBY3Rpb25zLkxvYWRDaGVja291dERldGFpbHNTdWNjZXNzXG4gICAgfCBDaGVja291dEFjdGlvbnMuTG9hZENoZWNrb3V0RGV0YWlsc0ZhaWxcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoQ2hlY2tvdXRBY3Rpb25zLkxPQURfQ0hFQ0tPVVRfREVUQUlMUyksXG4gICAgbWFwKChhY3Rpb246IENoZWNrb3V0QWN0aW9ucy5Mb2FkQ2hlY2tvdXREZXRhaWxzKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWVyZ2VNYXAocGF5bG9hZCA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5jaGVja291dENvbm5lY3RvclxuICAgICAgICAubG9hZENoZWNrb3V0RGV0YWlscyhwYXlsb2FkLnVzZXJJZCwgcGF5bG9hZC5jYXJ0SWQpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcChcbiAgICAgICAgICAgIChkYXRhOiBDaGVja291dERldGFpbHMpID0+XG4gICAgICAgICAgICAgIG5ldyBDaGVja291dEFjdGlvbnMuTG9hZENoZWNrb3V0RGV0YWlsc1N1Y2Nlc3MoZGF0YSlcbiAgICAgICAgICApLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICAgIG9mKFxuICAgICAgICAgICAgICBuZXcgQ2hlY2tvdXRBY3Rpb25zLkxvYWRDaGVja291dERldGFpbHNGYWlsKFxuICAgICAgICAgICAgICAgIG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcilcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9KSxcbiAgICB3aXRoZHJhd09uKHRoaXMuY29udGV4dENoYW5nZSQpXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIHJlbG9hZERldGFpbHNPbk1lcmdlQ2FydCQ6IE9ic2VydmFibGU8XG4gICAgQ2hlY2tvdXRBY3Rpb25zLkxvYWRDaGVja291dERldGFpbHNcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoRGVwcmVjYXRlZENhcnRBY3Rpb25zLk1FUkdFX0NBUlRfU1VDQ0VTUyksXG4gICAgbWFwKChhY3Rpb246IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5NZXJnZUNhcnRTdWNjZXNzKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWFwKHBheWxvYWQgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBDaGVja291dEFjdGlvbnMuTG9hZENoZWNrb3V0RGV0YWlscyh7XG4gICAgICAgIHVzZXJJZDogcGF5bG9hZC51c2VySWQsXG4gICAgICAgIGNhcnRJZDogcGF5bG9hZC5jYXJ0SWQgPyBwYXlsb2FkLmNhcnRJZCA6IE9DQ19DQVJUX0lEX0NVUlJFTlQsXG4gICAgICB9KTtcbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBjbGVhckNoZWNrb3V0RGVsaXZlcnlBZGRyZXNzJDogT2JzZXJ2YWJsZTxcbiAgICB8IENoZWNrb3V0QWN0aW9ucy5DbGVhckNoZWNrb3V0RGVsaXZlcnlBZGRyZXNzRmFpbFxuICAgIHwgQ2hlY2tvdXRBY3Rpb25zLkNsZWFyQ2hlY2tvdXREZWxpdmVyeUFkZHJlc3NTdWNjZXNzXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKENoZWNrb3V0QWN0aW9ucy5DTEVBUl9DSEVDS09VVF9ERUxJVkVSWV9BRERSRVNTKSxcbiAgICBtYXAoXG4gICAgICAoYWN0aW9uOiBDaGVja291dEFjdGlvbnMuQ2xlYXJDaGVja291dERlbGl2ZXJ5QWRkcmVzcykgPT4gYWN0aW9uLnBheWxvYWRcbiAgICApLFxuICAgIGZpbHRlcihwYXlsb2FkID0+IEJvb2xlYW4ocGF5bG9hZC5jYXJ0SWQpKSxcbiAgICBzd2l0Y2hNYXAocGF5bG9hZCA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5jaGVja291dENvbm5lY3RvclxuICAgICAgICAuY2xlYXJDaGVja291dERlbGl2ZXJ5QWRkcmVzcyhwYXlsb2FkLnVzZXJJZCwgcGF5bG9hZC5jYXJ0SWQpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcCgoKSA9PiBuZXcgQ2hlY2tvdXRBY3Rpb25zLkNsZWFyQ2hlY2tvdXREZWxpdmVyeUFkZHJlc3NTdWNjZXNzKCkpLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICAgIG9mKFxuICAgICAgICAgICAgICBuZXcgQ2hlY2tvdXRBY3Rpb25zLkNsZWFyQ2hlY2tvdXREZWxpdmVyeUFkZHJlc3NGYWlsKFxuICAgICAgICAgICAgICAgIG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcilcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9KSxcbiAgICB3aXRoZHJhd09uKHRoaXMuY29udGV4dENoYW5nZSQpXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIGNsZWFyQ2hlY2tvdXREZWxpdmVyeU1vZGUkOiBPYnNlcnZhYmxlPFxuICAgIHwgQ2hlY2tvdXRBY3Rpb25zLkNsZWFyQ2hlY2tvdXREZWxpdmVyeU1vZGVGYWlsXG4gICAgfCBDaGVja291dEFjdGlvbnMuQ2xlYXJDaGVja291dERlbGl2ZXJ5TW9kZVN1Y2Nlc3NcbiAgICB8IENhcnRBY3Rpb25zLkNhcnRQcm9jZXNzZXNEZWNyZW1lbnRcbiAgICB8IENhcnRBY3Rpb25zLkxvYWRDYXJ0XG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKENoZWNrb3V0QWN0aW9ucy5DTEVBUl9DSEVDS09VVF9ERUxJVkVSWV9NT0RFKSxcbiAgICBtYXAoKGFjdGlvbjogQ2hlY2tvdXRBY3Rpb25zLkNsZWFyQ2hlY2tvdXREZWxpdmVyeU1vZGUpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBmaWx0ZXIocGF5bG9hZCA9PiBCb29sZWFuKHBheWxvYWQuY2FydElkKSksXG4gICAgY29uY2F0TWFwKHBheWxvYWQgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuY2hlY2tvdXRDb25uZWN0b3JcbiAgICAgICAgLmNsZWFyQ2hlY2tvdXREZWxpdmVyeU1vZGUocGF5bG9hZC51c2VySWQsIHBheWxvYWQuY2FydElkKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAoXG4gICAgICAgICAgICAoKSA9PlxuICAgICAgICAgICAgICBuZXcgQ2hlY2tvdXRBY3Rpb25zLkNsZWFyQ2hlY2tvdXREZWxpdmVyeU1vZGVTdWNjZXNzKHtcbiAgICAgICAgICAgICAgICB1c2VySWQ6IHBheWxvYWQudXNlcklkLFxuICAgICAgICAgICAgICAgIGNhcnRJZDogcGF5bG9hZC5jYXJ0SWQsXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgKSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICBmcm9tKFtcbiAgICAgICAgICAgICAgbmV3IENoZWNrb3V0QWN0aW9ucy5DbGVhckNoZWNrb3V0RGVsaXZlcnlNb2RlRmFpbChcbiAgICAgICAgICAgICAgICBtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5DYXJ0UHJvY2Vzc2VzRGVjcmVtZW50KHBheWxvYWQuY2FydElkKSxcbiAgICAgICAgICAgICAgbmV3IENhcnRBY3Rpb25zLkxvYWRDYXJ0KHtcbiAgICAgICAgICAgICAgICBjYXJ0SWQ6IHBheWxvYWQuY2FydElkLFxuICAgICAgICAgICAgICAgIHVzZXJJZDogcGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXSlcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfSksXG4gICAgd2l0aGRyYXdPbih0aGlzLmNvbnRleHRDaGFuZ2UkKVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBjaGVja291dERlbGl2ZXJ5Q29ubmVjdG9yOiBDaGVja291dERlbGl2ZXJ5Q29ubmVjdG9yLFxuICAgIHByaXZhdGUgY2hlY2tvdXRQYXltZW50Q29ubmVjdG9yOiBDaGVja291dFBheW1lbnRDb25uZWN0b3IsXG4gICAgcHJpdmF0ZSBjaGVja291dENvbm5lY3RvcjogQ2hlY2tvdXRDb25uZWN0b3JcbiAgKSB7fVxufVxuIl19
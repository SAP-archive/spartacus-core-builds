/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import * as fromActions from '../actions/index';
import { AddMessage, GlobalMessageType } from '../../../global-message/index';
import { PRODUCT_NORMALIZER } from '../../../product/connectors/product/converters';
import { OccOrderService } from '../../../user/index';
import * as fromUserActions from '../../../user/store/actions/index';
import * as fromCartActions from './../../../cart/store/actions/index';
import { CartDeliveryConnector } from '../../../cart/connectors/delivery/cart-delivery.connector';
import { CartPaymentConnector } from '../../../cart/connectors/payment/cart-payment.connector';
import { ConverterService } from '../../../util/converter.service';
import { CartConnector } from '../../../cart/connectors/cart/cart.connector';
export class CheckoutEffects {
    /**
     * @param {?} actions$
     * @param {?} cartDeliveryConnector
     * @param {?} cartConnector
     * @param {?} cartPaymentConnector
     * @param {?} occOrderService
     * @param {?} converter
     */
    constructor(actions$, cartDeliveryConnector, cartConnector, cartPaymentConnector, occOrderService, converter) {
        this.actions$ = actions$;
        this.cartDeliveryConnector = cartDeliveryConnector;
        this.cartConnector = cartConnector;
        this.cartPaymentConnector = cartPaymentConnector;
        this.occOrderService = occOrderService;
        this.converter = converter;
        this.addDeliveryAddress$ = this.actions$.pipe(ofType(fromActions.ADD_DELIVERY_ADDRESS), map((action) => action.payload), mergeMap(payload => this.cartDeliveryConnector
            .createAddress(payload.userId, payload.cartId, payload.address)
            .pipe(mergeMap(address => {
            address['titleCode'] = payload.address.titleCode;
            return [
                new fromUserActions.LoadUserAddresses(payload.userId),
                new fromActions.SetDeliveryAddress({
                    userId: payload.userId,
                    cartId: payload.cartId,
                    address: address,
                }),
            ];
        }), catchError(error => of(new fromActions.AddDeliveryAddressFail(error))))));
        this.setDeliveryAddress$ = this.actions$.pipe(ofType(fromActions.SET_DELIVERY_ADDRESS), map((action) => action.payload), mergeMap(payload => {
            return this.cartDeliveryConnector
                .setAddress(payload.userId, payload.cartId, payload.address.id)
                .pipe(mergeMap(() => [
                new fromActions.SetDeliveryAddressSuccess(payload.address),
                new fromActions.LoadSupportedDeliveryModes({
                    userId: payload.userId,
                    cartId: payload.cartId,
                }),
            ]), catchError(error => of(new fromActions.SetDeliveryAddressFail(error))));
        }));
        this.loadSupportedDeliveryModes$ = this.actions$.pipe(ofType(fromActions.LOAD_SUPPORTED_DELIVERY_MODES), map((action) => action.payload), mergeMap(payload => {
            return this.cartDeliveryConnector
                .getSupportedModes(payload.userId, payload.cartId)
                .pipe(map(data => {
                return new fromActions.LoadSupportedDeliveryModesSuccess(data);
            }), catchError(error => of(new fromActions.LoadSupportedDeliveryModesFail(error))));
        }));
        this.setDeliveryMode$ = this.actions$.pipe(ofType(fromActions.SET_DELIVERY_MODE), map((action) => action.payload), mergeMap(payload => {
            return this.cartDeliveryConnector
                .setMode(payload.userId, payload.cartId, payload.selectedModeId)
                .pipe(mergeMap(() => {
                return [
                    new fromActions.SetDeliveryModeSuccess(payload.selectedModeId),
                    new fromCartActions.LoadCart({
                        userId: payload.userId,
                        cartId: payload.cartId,
                        details: true,
                    }),
                ];
            }), catchError(error => of(new fromActions.SetDeliveryModeFail(error))));
        }));
        this.createPaymentDetails$ = this.actions$.pipe(ofType(fromActions.CREATE_PAYMENT_DETAILS), map((action) => action.payload), mergeMap(payload => {
            // get information for creating a subscription directly with payment provider
            return this.cartPaymentConnector
                .create(payload.userId, payload.cartId, payload.paymentDetails)
                .pipe(mergeMap(details => {
                return [
                    new fromUserActions.LoadUserPaymentMethods(payload.userId),
                    new fromActions.CreatePaymentDetailsSuccess(details),
                ];
            }), catchError(error => of(new fromActions.CreatePaymentDetailsFail(error))));
        }));
        this.setPaymentDetails$ = this.actions$.pipe(ofType(fromActions.SET_PAYMENT_DETAILS), map((action) => action.payload), mergeMap(payload => {
            return this.cartPaymentConnector
                .set(payload.userId, payload.cartId, payload.paymentDetails.id)
                .pipe(map(() => new fromActions.SetPaymentDetailsSuccess(payload.paymentDetails)), catchError(error => of(new fromActions.SetPaymentDetailsFail(error))));
        }));
        this.placeOrder$ = this.actions$.pipe(ofType(fromActions.PLACE_ORDER), map((action) => action.payload), mergeMap(payload => {
            return this.occOrderService
                .placeOrder(payload.userId, payload.cartId)
                .pipe(map(data => {
                for (const entry of (/** @type {?} */ (data.entries))) {
                    entry.product = (/** @type {?} */ (this.converter.convert(entry.product, PRODUCT_NORMALIZER)));
                }
                return data;
            }), switchMap(data => [
                new fromActions.PlaceOrderSuccess(data),
                new AddMessage({
                    text: 'Order placed successfully',
                    type: GlobalMessageType.MSG_TYPE_CONFIRMATION,
                }),
            ]), catchError(error => of(new fromActions.PlaceOrderFail(error))));
        }));
        this.loadCheckoutDetails$ = this.actions$.pipe(ofType(fromActions.LOAD_CHECKOUT_DETAILS), map((action) => action.payload), mergeMap(payload => {
            return this.cartConnector
                .loadCheckoutDetails(payload.userId, payload.cartId)
                .pipe(map((data) => new fromActions.LoadCheckoutDetailsSuccess(data)), catchError(error => of(new fromActions.LoadCheckoutDetailsFail(error))));
        }));
        this.reloadDetailsOnCreateCart$ = this.actions$.pipe(ofType(fromCartActions.CREATE_CART_SUCCESS), map((action) => action.payload), map(payload => {
            return new fromActions.LoadCheckoutDetails({
                userId: payload.userId,
                cartId: payload.toMergeCartGuid ? payload.toMergeCartGuid : 'current',
            });
        }));
    }
}
CheckoutEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CheckoutEffects.ctorParameters = () => [
    { type: Actions },
    { type: CartDeliveryConnector },
    { type: CartConnector },
    { type: CartPaymentConnector },
    { type: OccOrderService },
    { type: ConverterService }
];
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], CheckoutEffects.prototype, "addDeliveryAddress$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], CheckoutEffects.prototype, "setDeliveryAddress$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], CheckoutEffects.prototype, "loadSupportedDeliveryModes$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], CheckoutEffects.prototype, "setDeliveryMode$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], CheckoutEffects.prototype, "createPaymentDetails$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], CheckoutEffects.prototype, "setPaymentDetails$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], CheckoutEffects.prototype, "placeOrder$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], CheckoutEffects.prototype, "loadCheckoutDetails$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], CheckoutEffects.prototype, "reloadDetailsOnCreateCart$", void 0);
if (false) {
    /** @type {?} */
    CheckoutEffects.prototype.addDeliveryAddress$;
    /** @type {?} */
    CheckoutEffects.prototype.setDeliveryAddress$;
    /** @type {?} */
    CheckoutEffects.prototype.loadSupportedDeliveryModes$;
    /** @type {?} */
    CheckoutEffects.prototype.setDeliveryMode$;
    /** @type {?} */
    CheckoutEffects.prototype.createPaymentDetails$;
    /** @type {?} */
    CheckoutEffects.prototype.setPaymentDetails$;
    /** @type {?} */
    CheckoutEffects.prototype.placeOrder$;
    /** @type {?} */
    CheckoutEffects.prototype.loadCheckoutDetails$;
    /** @type {?} */
    CheckoutEffects.prototype.reloadDetailsOnCreateCart$;
    /**
     * @type {?}
     * @private
     */
    CheckoutEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    CheckoutEffects.prototype.cartDeliveryConnector;
    /**
     * @type {?}
     * @private
     */
    CheckoutEffects.prototype.cartConnector;
    /**
     * @type {?}
     * @private
     */
    CheckoutEffects.prototype.cartPaymentConnector;
    /**
     * @type {?}
     * @private
     */
    CheckoutEffects.prototype.occOrderService;
    /**
     * @type {?}
     * @private
     */
    CheckoutEffects.prototype.converter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQuZWZmZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NoZWNrb3V0L3N0b3JlL2VmZmVjdHMvY2hlY2tvdXQuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RFLE9BQU8sS0FBSyxXQUFXLE1BQU0sa0JBQWtCLENBQUM7QUFDaEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzlFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUd0RCxPQUFPLEtBQUssZUFBZSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3JFLE9BQU8sS0FBSyxlQUFlLE1BQU0scUNBQXFDLENBQUM7QUFDdkUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFDbEcsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDL0YsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDbkUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBRzdFLE1BQU0sT0FBTyxlQUFlOzs7Ozs7Ozs7SUFvTjFCLFlBQ1UsUUFBaUIsRUFDakIscUJBQTRDLEVBQzVDLGFBQTRCLEVB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T0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsU0FBUzthQUN0RSxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FDSCxDQUFDO0lBU0MsQ0FBQzs7O1lBNU5MLFVBQVU7Ozs7WUFoQkYsT0FBTztZQVdQLHFCQUFxQjtZQUdyQixhQUFhO1lBRmIsb0JBQW9CO1lBTnBCLGVBQWU7WUFPZixnQkFBZ0I7O0FBTXZCO0lBREMsTUFBTSxFQUFFO3NDQUNZLFVBQVU7NERBeUI3QjtBQUdGO0lBREMsTUFBTSxFQUFFO3NDQUNZLFVBQVU7NERBcUI3QjtBQUdGO0lBREMsTUFBTSxFQUFFO3NDQUNvQixVQUFVO29FQWtCckM7QUFHRjtJQURDLE1BQU0sRUFBRTtzQ0FDUyxVQUFVO3lEQXdCMUI7QUFHRjtJQURDLE1BQU0sRUFBRTtzQ0FDYyxVQUFVOzhEQXVCL0I7QUFHRjtJQURDLE1BQU0sRUFBRTtzQ0FDVyxVQUFVOzJEQWdCNUI7QUFHRjtJQURDLE1BQU0sRUFBRTtzQ0FDSSxVQUFVO29EQTRCckI7QUFHRjtJQURDLE1BQU0sRUFBRTtzQ0FDYSxVQUFVOzZEQWtCOUI7QUFHRjtJQURDLE1BQU0sRUFBRTtzQ0FDbUIsVUFBVTttRUFXcEM7OztJQWpORiw4Q0EwQkU7O0lBRUYsOENBc0JFOztJQUVGLHNEQW1CRTs7SUFFRiwyQ0F5QkU7O0lBRUYsZ0RBd0JFOztJQUVGLDZDQWlCRTs7SUFFRixzQ0E2QkU7O0lBRUYsK0NBbUJFOztJQUVGLHFEQVlFOzs7OztJQUdBLG1DQUF5Qjs7Ozs7SUFDekIsZ0RBQW9EOzs7OztJQUNwRCx3Q0FBb0M7Ozs7O0lBQ3BDLCtDQUFrRDs7Ozs7SUFDbEQsMENBQXdDOzs7OztJQUN4QyxvQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCwgbWVyZ2VNYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCAqIGFzIGZyb21BY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgQWRkTWVzc2FnZSwgR2xvYmFsTWVzc2FnZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9nbG9iYWwtbWVzc2FnZS9pbmRleCc7XG5pbXBvcnQgeyBQUk9EVUNUX05PUk1BTElaRVIgfSBmcm9tICcuLi8uLi8uLi9wcm9kdWN0L2Nvbm5lY3RvcnMvcHJvZHVjdC9jb252ZXJ0ZXJzJztcbmltcG9ydCB7IE9jY09yZGVyU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3VzZXIvaW5kZXgnO1xuaW1wb3J0IHsgT3JkZXJFbnRyeSB9IGZyb20gJy4uLy4uLy4uL29jYy9vY2MtbW9kZWxzL2luZGV4JztcbmltcG9ydCB7IENoZWNrb3V0RGV0YWlscyB9IGZyb20gJy4uLy4uLy4uL2NoZWNrb3V0L21vZGVscy9jaGVja291dC5tb2RlbCc7XG5pbXBvcnQgKiBhcyBmcm9tVXNlckFjdGlvbnMgZnJvbSAnLi4vLi4vLi4vdXNlci9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCAqIGFzIGZyb21DYXJ0QWN0aW9ucyBmcm9tICcuLy4uLy4uLy4uL2NhcnQvc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBDYXJ0RGVsaXZlcnlDb25uZWN0b3IgfSBmcm9tICcuLi8uLi8uLi9jYXJ0L2Nvbm5lY3RvcnMvZGVsaXZlcnkvY2FydC1kZWxpdmVyeS5jb25uZWN0b3InO1xuaW1wb3J0IHsgQ2FydFBheW1lbnRDb25uZWN0b3IgfSBmcm9tICcuLi8uLi8uLi9jYXJ0L2Nvbm5lY3RvcnMvcGF5bWVudC9jYXJ0LXBheW1lbnQuY29ubmVjdG9yJztcbmltcG9ydCB7IENvbnZlcnRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi91dGlsL2NvbnZlcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7IENhcnRDb25uZWN0b3IgfSBmcm9tICcuLi8uLi8uLi9jYXJ0L2Nvbm5lY3RvcnMvY2FydC9jYXJ0LmNvbm5lY3Rvcic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDaGVja291dEVmZmVjdHMge1xuICBARWZmZWN0KClcbiAgYWRkRGVsaXZlcnlBZGRyZXNzJDogT2JzZXJ2YWJsZTxcbiAgICB8IGZyb21Vc2VyQWN0aW9ucy5Mb2FkVXNlckFkZHJlc3Nlc1xuICAgIHwgZnJvbUFjdGlvbnMuU2V0RGVsaXZlcnlBZGRyZXNzXG4gICAgfCBmcm9tQWN0aW9ucy5BZGREZWxpdmVyeUFkZHJlc3NGYWlsXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKGZyb21BY3Rpb25zLkFERF9ERUxJVkVSWV9BRERSRVNTKSxcbiAgICBtYXAoKGFjdGlvbjogZnJvbUFjdGlvbnMuQWRkRGVsaXZlcnlBZGRyZXNzKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWVyZ2VNYXAocGF5bG9hZCA9PlxuICAgICAgdGhpcy5jYXJ0RGVsaXZlcnlDb25uZWN0b3JcbiAgICAgICAgLmNyZWF0ZUFkZHJlc3MocGF5bG9hZC51c2VySWQsIHBheWxvYWQuY2FydElkLCBwYXlsb2FkLmFkZHJlc3MpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1lcmdlTWFwKGFkZHJlc3MgPT4ge1xuICAgICAgICAgICAgYWRkcmVzc1sndGl0bGVDb2RlJ10gPSBwYXlsb2FkLmFkZHJlc3MudGl0bGVDb2RlO1xuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgbmV3IGZyb21Vc2VyQWN0aW9ucy5Mb2FkVXNlckFkZHJlc3NlcyhwYXlsb2FkLnVzZXJJZCksXG4gICAgICAgICAgICAgIG5ldyBmcm9tQWN0aW9ucy5TZXREZWxpdmVyeUFkZHJlc3Moe1xuICAgICAgICAgICAgICAgIHVzZXJJZDogcGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgICAgICAgY2FydElkOiBwYXlsb2FkLmNhcnRJZCxcbiAgICAgICAgICAgICAgICBhZGRyZXNzOiBhZGRyZXNzLFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiBvZihuZXcgZnJvbUFjdGlvbnMuQWRkRGVsaXZlcnlBZGRyZXNzRmFpbChlcnJvcikpKVxuICAgICAgICApXG4gICAgKVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBzZXREZWxpdmVyeUFkZHJlc3MkOiBPYnNlcnZhYmxlPFxuICAgIHwgZnJvbUFjdGlvbnMuU2V0RGVsaXZlcnlBZGRyZXNzU3VjY2Vzc1xuICAgIHwgZnJvbUFjdGlvbnMuTG9hZFN1cHBvcnRlZERlbGl2ZXJ5TW9kZXNcbiAgICB8IGZyb21BY3Rpb25zLlNldERlbGl2ZXJ5QWRkcmVzc0ZhaWxcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoZnJvbUFjdGlvbnMuU0VUX0RFTElWRVJZX0FERFJFU1MpLFxuICAgIG1hcCgoYWN0aW9uOiBhbnkpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcChwYXlsb2FkID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmNhcnREZWxpdmVyeUNvbm5lY3RvclxuICAgICAgICAuc2V0QWRkcmVzcyhwYXlsb2FkLnVzZXJJZCwgcGF5bG9hZC5jYXJ0SWQsIHBheWxvYWQuYWRkcmVzcy5pZClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWVyZ2VNYXAoKCkgPT4gW1xuICAgICAgICAgICAgbmV3IGZyb21BY3Rpb25zLlNldERlbGl2ZXJ5QWRkcmVzc1N1Y2Nlc3MocGF5bG9hZC5hZGRyZXNzKSxcbiAgICAgICAgICAgIG5ldyBmcm9tQWN0aW9ucy5Mb2FkU3VwcG9ydGVkRGVsaXZlcnlNb2Rlcyh7XG4gICAgICAgICAgICAgIHVzZXJJZDogcGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgICAgIGNhcnRJZDogcGF5bG9hZC5jYXJ0SWQsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+IG9mKG5ldyBmcm9tQWN0aW9ucy5TZXREZWxpdmVyeUFkZHJlc3NGYWlsKGVycm9yKSkpXG4gICAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBARWZmZWN0KClcbiAgbG9hZFN1cHBvcnRlZERlbGl2ZXJ5TW9kZXMkOiBPYnNlcnZhYmxlPFxuICAgIHwgZnJvbUFjdGlvbnMuTG9hZFN1cHBvcnRlZERlbGl2ZXJ5TW9kZXNTdWNjZXNzXG4gICAgfCBmcm9tQWN0aW9ucy5Mb2FkU3VwcG9ydGVkRGVsaXZlcnlNb2Rlc0ZhaWxcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoZnJvbUFjdGlvbnMuTE9BRF9TVVBQT1JURURfREVMSVZFUllfTU9ERVMpLFxuICAgIG1hcCgoYWN0aW9uOiBhbnkpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcChwYXlsb2FkID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmNhcnREZWxpdmVyeUNvbm5lY3RvclxuICAgICAgICAuZ2V0U3VwcG9ydGVkTW9kZXMocGF5bG9hZC51c2VySWQsIHBheWxvYWQuY2FydElkKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAoZGF0YSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IGZyb21BY3Rpb25zLkxvYWRTdXBwb3J0ZWREZWxpdmVyeU1vZGVzU3VjY2VzcyhkYXRhKTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICBvZihuZXcgZnJvbUFjdGlvbnMuTG9hZFN1cHBvcnRlZERlbGl2ZXJ5TW9kZXNGYWlsKGVycm9yKSlcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBARWZmZWN0KClcbiAgc2V0RGVsaXZlcnlNb2RlJDogT2JzZXJ2YWJsZTxcbiAgICB8IGZyb21BY3Rpb25zLlNldERlbGl2ZXJ5TW9kZVN1Y2Nlc3NcbiAgICB8IGZyb21BY3Rpb25zLlNldERlbGl2ZXJ5TW9kZUZhaWxcbiAgICB8IGZyb21DYXJ0QWN0aW9ucy5Mb2FkQ2FydFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShmcm9tQWN0aW9ucy5TRVRfREVMSVZFUllfTU9ERSksXG4gICAgbWFwKChhY3Rpb246IGFueSkgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1lcmdlTWFwKHBheWxvYWQgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuY2FydERlbGl2ZXJ5Q29ubmVjdG9yXG4gICAgICAgIC5zZXRNb2RlKHBheWxvYWQudXNlcklkLCBwYXlsb2FkLmNhcnRJZCwgcGF5bG9hZC5zZWxlY3RlZE1vZGVJZClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWVyZ2VNYXAoKCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgbmV3IGZyb21BY3Rpb25zLlNldERlbGl2ZXJ5TW9kZVN1Y2Nlc3MocGF5bG9hZC5zZWxlY3RlZE1vZGVJZCksXG4gICAgICAgICAgICAgIG5ldyBmcm9tQ2FydEFjdGlvbnMuTG9hZENhcnQoe1xuICAgICAgICAgICAgICAgIHVzZXJJZDogcGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgICAgICAgY2FydElkOiBwYXlsb2FkLmNhcnRJZCxcbiAgICAgICAgICAgICAgICBkZXRhaWxzOiB0cnVlLFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiBvZihuZXcgZnJvbUFjdGlvbnMuU2V0RGVsaXZlcnlNb2RlRmFpbChlcnJvcikpKVxuICAgICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIGNyZWF0ZVBheW1lbnREZXRhaWxzJDogT2JzZXJ2YWJsZTxcbiAgICB8IGZyb21Vc2VyQWN0aW9ucy5Mb2FkVXNlclBheW1lbnRNZXRob2RzXG4gICAgfCBmcm9tQWN0aW9ucy5DcmVhdGVQYXltZW50RGV0YWlsc1N1Y2Nlc3NcbiAgICB8IGZyb21BY3Rpb25zLkNyZWF0ZVBheW1lbnREZXRhaWxzRmFpbFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShmcm9tQWN0aW9ucy5DUkVBVEVfUEFZTUVOVF9ERVRBSUxTKSxcbiAgICBtYXAoKGFjdGlvbjogYW55KSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWVyZ2VNYXAocGF5bG9hZCA9PiB7XG4gICAgICAvLyBnZXQgaW5mb3JtYXRpb24gZm9yIGNyZWF0aW5nIGEgc3Vic2NyaXB0aW9uIGRpcmVjdGx5IHdpdGggcGF5bWVudCBwcm92aWRlclxuICAgICAgcmV0dXJuIHRoaXMuY2FydFBheW1lbnRDb25uZWN0b3JcbiAgICAgICAgLmNyZWF0ZShwYXlsb2FkLnVzZXJJZCwgcGF5bG9hZC5jYXJ0SWQsIHBheWxvYWQucGF5bWVudERldGFpbHMpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1lcmdlTWFwKGRldGFpbHMgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgbmV3IGZyb21Vc2VyQWN0aW9ucy5Mb2FkVXNlclBheW1lbnRNZXRob2RzKHBheWxvYWQudXNlcklkKSxcbiAgICAgICAgICAgICAgbmV3IGZyb21BY3Rpb25zLkNyZWF0ZVBheW1lbnREZXRhaWxzU3VjY2VzcyhkZXRhaWxzKSxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgICAgb2YobmV3IGZyb21BY3Rpb25zLkNyZWF0ZVBheW1lbnREZXRhaWxzRmFpbChlcnJvcikpXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIHNldFBheW1lbnREZXRhaWxzJDogT2JzZXJ2YWJsZTxcbiAgICBmcm9tQWN0aW9ucy5TZXRQYXltZW50RGV0YWlsc1N1Y2Nlc3MgfCBmcm9tQWN0aW9ucy5TZXRQYXltZW50RGV0YWlsc0ZhaWxcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoZnJvbUFjdGlvbnMuU0VUX1BBWU1FTlRfREVUQUlMUyksXG4gICAgbWFwKChhY3Rpb246IGFueSkgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1lcmdlTWFwKHBheWxvYWQgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuY2FydFBheW1lbnRDb25uZWN0b3JcbiAgICAgICAgLnNldChwYXlsb2FkLnVzZXJJZCwgcGF5bG9hZC5jYXJ0SWQsIHBheWxvYWQucGF5bWVudERldGFpbHMuaWQpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcChcbiAgICAgICAgICAgICgpID0+XG4gICAgICAgICAgICAgIG5ldyBmcm9tQWN0aW9ucy5TZXRQYXltZW50RGV0YWlsc1N1Y2Nlc3MocGF5bG9hZC5wYXltZW50RGV0YWlscylcbiAgICAgICAgICApLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4gb2YobmV3IGZyb21BY3Rpb25zLlNldFBheW1lbnREZXRhaWxzRmFpbChlcnJvcikpKVxuICAgICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIHBsYWNlT3JkZXIkOiBPYnNlcnZhYmxlPFxuICAgIGZyb21BY3Rpb25zLlBsYWNlT3JkZXJTdWNjZXNzIHwgQWRkTWVzc2FnZSB8IGZyb21BY3Rpb25zLlBsYWNlT3JkZXJGYWlsXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKGZyb21BY3Rpb25zLlBMQUNFX09SREVSKSxcbiAgICBtYXAoKGFjdGlvbjogYW55KSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWVyZ2VNYXAocGF5bG9hZCA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5vY2NPcmRlclNlcnZpY2VcbiAgICAgICAgLnBsYWNlT3JkZXIocGF5bG9hZC51c2VySWQsIHBheWxvYWQuY2FydElkKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAoZGF0YSA9PiB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIGRhdGEuZW50cmllcyBhcyBPcmRlckVudHJ5W10pIHtcbiAgICAgICAgICAgICAgZW50cnkucHJvZHVjdCA9IHRoaXMuY29udmVydGVyLmNvbnZlcnQoXG4gICAgICAgICAgICAgICAgZW50cnkucHJvZHVjdCxcbiAgICAgICAgICAgICAgICBQUk9EVUNUX05PUk1BTElaRVJcbiAgICAgICAgICAgICAgKSBhcyBhbnk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBzd2l0Y2hNYXAoZGF0YSA9PiBbXG4gICAgICAgICAgICBuZXcgZnJvbUFjdGlvbnMuUGxhY2VPcmRlclN1Y2Nlc3MoZGF0YSksXG4gICAgICAgICAgICBuZXcgQWRkTWVzc2FnZSh7XG4gICAgICAgICAgICAgIHRleHQ6ICdPcmRlciBwbGFjZWQgc3VjY2Vzc2Z1bGx5JyxcbiAgICAgICAgICAgICAgdHlwZTogR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfQ09ORklSTUFUSU9OLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiBvZihuZXcgZnJvbUFjdGlvbnMuUGxhY2VPcmRlckZhaWwoZXJyb3IpKSlcbiAgICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBsb2FkQ2hlY2tvdXREZXRhaWxzJDogT2JzZXJ2YWJsZTxcbiAgICBmcm9tQWN0aW9ucy5Mb2FkQ2hlY2tvdXREZXRhaWxzU3VjY2VzcyB8IGZyb21BY3Rpb25zLkxvYWRDaGVja291dERldGFpbHNGYWlsXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKGZyb21BY3Rpb25zLkxPQURfQ0hFQ0tPVVRfREVUQUlMUyksXG4gICAgbWFwKChhY3Rpb246IGZyb21BY3Rpb25zLkxvYWRDaGVja291dERldGFpbHMpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcChwYXlsb2FkID0+IHtcbiAgICAgIHJldHVybiB0aGlzLmNhcnRDb25uZWN0b3JcbiAgICAgICAgLmxvYWRDaGVja291dERldGFpbHMocGF5bG9hZC51c2VySWQsIHBheWxvYWQuY2FydElkKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAoXG4gICAgICAgICAgICAoZGF0YTogQ2hlY2tvdXREZXRhaWxzKSA9PlxuICAgICAgICAgICAgICBuZXcgZnJvbUFjdGlvbnMuTG9hZENoZWNrb3V0RGV0YWlsc1N1Y2Nlc3MoZGF0YSlcbiAgICAgICAgICApLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICAgIG9mKG5ldyBmcm9tQWN0aW9ucy5Mb2FkQ2hlY2tvdXREZXRhaWxzRmFpbChlcnJvcikpXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIHJlbG9hZERldGFpbHNPbkNyZWF0ZUNhcnQkOiBPYnNlcnZhYmxlPFxuICAgIGZyb21BY3Rpb25zLkxvYWRDaGVja291dERldGFpbHNcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoZnJvbUNhcnRBY3Rpb25zLkNSRUFURV9DQVJUX1NVQ0NFU1MpLFxuICAgIG1hcCgoYWN0aW9uOiBmcm9tQ2FydEFjdGlvbnMuQ3JlYXRlQ2FydFN1Y2Nlc3MpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtYXAocGF5bG9hZCA9PiB7XG4gICAgICByZXR1cm4gbmV3IGZyb21BY3Rpb25zLkxvYWRDaGVja291dERldGFpbHMoe1xuICAgICAgICB1c2VySWQ6IHBheWxvYWQudXNlcklkLFxuICAgICAgICBjYXJ0SWQ6IHBheWxvYWQudG9NZXJnZUNhcnRHdWlkID8gcGF5bG9hZC50b01lcmdlQ2FydEd1aWQgOiAnY3VycmVudCcsXG4gICAgICB9KTtcbiAgICB9KVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBjYXJ0RGVsaXZlcnlDb25uZWN0b3I6IENhcnREZWxpdmVyeUNvbm5lY3RvcixcbiAgICBwcml2YXRlIGNhcnRDb25uZWN0b3I6IENhcnRDb25uZWN0b3IsXG4gICAgcHJpdmF0ZSBjYXJ0UGF5bWVudENvbm5lY3RvcjogQ2FydFBheW1lbnRDb25uZWN0b3IsXG4gICAgcHJpdmF0ZSBvY2NPcmRlclNlcnZpY2U6IE9jY09yZGVyU2VydmljZSxcbiAgICBwcml2YXRlIGNvbnZlcnRlcjogQ29udmVydGVyU2VydmljZVxuICApIHt9XG59XG4iXX0=
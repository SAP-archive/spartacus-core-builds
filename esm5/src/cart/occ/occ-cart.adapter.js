/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, map, pluck } from 'rxjs/operators';
import { OccEndpointsService } from '../../occ/services/occ-endpoints.service';
import { ConverterService } from '../../util/converter.service';
import { CART_NORMALIZER } from '../connectors/cart/converters';
// for mini cart
/** @type {?} */
var BASIC_PARAMS = 'DEFAULT,deliveryItemsQuantity,totalPrice(formattedValue),' +
    'entries(totalPrice(formattedValue),product(images(FULL)))';
// for cart details page
/** @type {?} */
var DETAILS_PARAMS = 'DEFAULT,potentialProductPromotions,appliedProductPromotions,potentialOrderPromotions,appliedOrderPromotions,' +
    'entries(totalPrice(formattedValue),product(images(FULL),stock(FULL)),basePrice(formattedValue)),' +
    'totalPrice(formattedValue),totalItems,totalPriceWithTax(formattedValue),totalDiscounts(formattedValue),subTotal(formattedValue),' +
    'deliveryItemsQuantity,deliveryCost(formattedValue),totalTax(formattedValue),pickupItemsQuantity,net,' +
    'appliedVouchers,productDiscounts(formattedValue)';
/** @type {?} */
var CHECKOUT_PARAMS = 'deliveryAddress(FULL),deliveryMode,paymentInfo(FULL)';
var OccCartAdapter = /** @class */ (function () {
    function OccCartAdapter(http, occEndpoints, converter) {
        this.http = http;
        this.occEndpoints = occEndpoints;
        this.converter = converter;
    }
    /**
     * @protected
     * @param {?} userId
     * @return {?}
     */
    OccCartAdapter.prototype.getCartEndpoint = /**
     * @protected
     * @param {?} userId
     * @return {?}
     */
    function (userId) {
        /** @type {?} */
        var cartEndpoint = "users/" + userId + "/carts/";
        return this.occEndpoints.getEndpoint(cartEndpoint);
    };
    /**
     * @param {?} userId
     * @param {?=} details
     * @return {?}
     */
    OccCartAdapter.prototype.loadAll = /**
     * @param {?} userId
     * @param {?=} details
     * @return {?}
     */
    function (userId, details) {
        /** @type {?} */
        var url = this.getCartEndpoint(userId);
        /** @type {?} */
        var params = details
            ? new HttpParams({
                fromString: "fields=carts(" + DETAILS_PARAMS + ",saveTime)",
            })
            : new HttpParams({
                fromString: "fields=carts(" + BASIC_PARAMS + ",saveTime)",
            });
        return this.http.get(url, { params: params }).pipe(catchError(function (error) { return throwError(error); }), pluck('carts'), this.converter.pipeableMany(CART_NORMALIZER));
    };
    /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?=} details
     * @return {?}
     */
    OccCartAdapter.prototype.load = /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?=} details
     * @return {?}
     */
    function (userId, cartId, details) {
        /** @type {?} */
        var url = this.getCartEndpoint(userId) + cartId;
        /** @type {?} */
        var params = details
            ? new HttpParams({
                fromString: "fields=" + DETAILS_PARAMS,
            })
            : new HttpParams({
                fromString: "fields=" + BASIC_PARAMS,
            });
        if (cartId === 'current') {
            return this.loadAll(userId, details).pipe(map(function (carts) {
                if (carts) {
                    /** @type {?} */
                    var activeCart = carts.find(function (cart) {
                        return cart['saveTime'] === undefined;
                    });
                    return activeCart;
                }
                else {
                    return null;
                }
            }));
        }
        else {
            return this.http.get(url, { params: params }).pipe(catchError(function (error) { return throwError(error); }), this.converter.pipeable(CART_NORMALIZER));
        }
    };
    /**
     * @param {?} userId
     * @param {?} cartId
     * @return {?}
     */
    OccCartAdapter.prototype.loadCheckoutDetails = /**
     * @param {?} userId
     * @param {?} cartId
     * @return {?}
     */
    function (userId, cartId) {
        /** @type {?} */
        var url = this.getCartEndpoint(userId) + cartId;
        /** @type {?} */
        var params = new HttpParams({
            fromString: "fields=" + CHECKOUT_PARAMS,
        });
        return this.http
            .get(url, { params: params })
            .pipe(catchError(function (error) { return throwError(error); }));
    };
    /**
     * @param {?} userId
     * @param {?=} oldCartId
     * @param {?=} toMergeCartGuid
     * @return {?}
     */
    OccCartAdapter.prototype.create = /**
     * @param {?} userId
     * @param {?=} oldCartId
     * @param {?=} toMergeCartGuid
     * @return {?}
     */
    function (userId, oldCartId, toMergeCartGuid) {
        /** @type {?} */
        var url = this.getCartEndpoint(userId);
        /** @type {?} */
        var toAdd = JSON.stringify({});
        /** @type {?} */
        var queryString = "fields=" + BASIC_PARAMS;
        if (oldCartId) {
            queryString = queryString + "&oldCartId=" + oldCartId;
        }
        if (toMergeCartGuid) {
            queryString = queryString + "&toMergeCartGuid=" + toMergeCartGuid;
        }
        /** @type {?} */
        var params = new HttpParams({
            fromString: queryString,
        });
        return this.http.post(url, toAdd, { params: params }).pipe(this.converter.pipeable(CART_NORMALIZER), catchError(function (error) { return throwError(error.json()); }));
    };
    OccCartAdapter.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    OccCartAdapter.ctorParameters = function () { return [
        { type: HttpClient },
        { type: OccEndpointsService },
        { type: ConverterService }
    ]; };
    return OccCartAdapter;
}());
export { OccCartAdapter };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    OccCartAdapter.prototype.http;
    /**
     * @type {?}
     * @private
     */
    OccCartAdapter.prototype.occEndpoints;
    /**
     * @type {?}
     * @protected
     */
    OccCartAdapter.prototype.converter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNhcnQuYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jYXJ0L29jYy9vY2MtY2FydC5hZGFwdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFOUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUd4RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sK0JBQStCLENBQUM7OztJQUsxRCxZQUFZLEdBQ2hCLDJEQUEyRDtJQUMzRCwyREFBMkQ7OztJQUd2RCxjQUFjLEdBQ2xCLDhHQUE4RztJQUM5RyxrR0FBa0c7SUFDbEcsa0lBQWtJO0lBQ2xJLHNHQUFzRztJQUN0RyxrREFBa0Q7O0lBRTlDLGVBQWUsR0FBRyxzREFBc0Q7QUFFOUU7SUFFRSx3QkFDWSxJQUFnQixFQUNsQixZQUFpQyxFQUMvQixTQUEyQjtRQUYzQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2xCLGlCQUFZLEdBQVosWUFBWSxDQUFxQjtRQUMvQixjQUFTLEdBQVQsU0FBUyxDQUFrQjtJQUNwQyxDQUFDOzs7Ozs7SUFFTSx3Q0FBZTs7Ozs7SUFBekIsVUFBMEIsTUFBYzs7WUFDaEMsWUFBWSxHQUFHLFdBQVMsTUFBTSxZQUFTO1FBQzdDLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDckQsQ0FBQzs7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SUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUM7O1lBQ2xDLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQzs7WUFDNUIsV0FBVyxHQUFHLFlBQVUsWUFBYztRQUUxQyxJQUFJLFNBQVMsRUFBRTtZQUNiLFdBQVcsR0FBTSxXQUFXLG1CQUFjLFNBQVcsQ0FBQztTQUN2RDtRQUNELElBQUksZUFBZSxFQUFFO1lBQ25CLFdBQVcsR0FBTSxXQUFXLHlCQUFvQixlQUFpQixDQUFDO1NBQ25FOztZQUNLLE1BQU0sR0FBRyxJQUFJLFVBQVUsQ0FBQztZQUM1QixVQUFVLEVBQUUsV0FBVztTQUN4QixDQUFDO1FBRUYsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBVyxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsSUFBSSxDQUNsRSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsRUFDeEMsVUFBVSxDQUFDLFVBQUMsS0FBVSxJQUFLLE9BQUEsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUF4QixDQUF3QixDQUFDLENBQ3JELENBQUM7SUFDSixDQUFDOztnQkFwR0YsVUFBVTs7OztnQkF6QkYsVUFBVTtnQkFJVixtQkFBbUI7Z0JBQ25CLGdCQUFnQjs7SUF5SHpCLHFCQUFDO0NBQUEsQUFyR0QsSUFxR0M7U0FwR1ksY0FBYzs7Ozs7O0lBRXZCLDhCQUEwQjs7Ozs7SUFDMUIsc0NBQXlDOzs7OztJQUN6QyxtQ0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBPY2MgfSBmcm9tICcuLi8uLi9vY2Mvb2NjLW1vZGVscy9vY2MubW9kZWxzJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAsIHBsdWNrIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBDYXJ0QWRhcHRlciB9IGZyb20gJy4uL2Nvbm5lY3RvcnMvY2FydC9jYXJ0LmFkYXB0ZXInO1xuaW1wb3J0IHsgT2NjRW5kcG9pbnRzU2VydmljZSB9IGZyb20gJy4uLy4uL29jYy9zZXJ2aWNlcy9vY2MtZW5kcG9pbnRzLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29udmVydGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3V0aWwvY29udmVydGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ0FSVF9OT1JNQUxJWkVSIH0gZnJvbSAnLi4vY29ubmVjdG9ycy9jYXJ0L2NvbnZlcnRlcnMnO1xuaW1wb3J0IHsgQ2hlY2tvdXREZXRhaWxzIH0gZnJvbSAnLi4vLi4vY2hlY2tvdXQvbW9kZWxzL2NoZWNrb3V0Lm1vZGVsJztcbmltcG9ydCB7IENhcnQgfSBmcm9tICcuLi8uLi9tb2RlbC9jYXJ0Lm1vZGVsJztcblxuLy8gZm9yIG1pbmkgY2FydFxuY29uc3QgQkFTSUNfUEFSQU1TID1cbiAgJ0RFRkFVTFQsZGVsaXZlcnlJdGVtc1F1YW50aXR5LHRvdGFsUHJpY2UoZm9ybWF0dGVkVmFsdWUpLCcgK1xuICAnZW50cmllcyh0b3RhbFByaWNlKGZvcm1hdHRlZFZhbHVlKSxwcm9kdWN0KGltYWdlcyhGVUxMKSkpJztcblxuLy8gZm9yIGNhcnQgZGV0YWlscyBwYWdlXG5jb25zdCBERVRBSUxTX1BBUkFNUyA9XG4gICdERUZBVUxULHBvdGVudGlhbFByb2R1Y3RQcm9tb3Rpb25zLGFwcGxpZWRQcm9kdWN0UHJvbW90aW9ucyxwb3RlbnRpYWxPcmRlclByb21vdGlvbnMsYXBwbGllZE9yZGVyUHJvbW90aW9ucywnICtcbiAgJ2VudHJpZXModG90YWxQcmljZShmb3JtYXR0ZWRWYWx1ZSkscHJvZHVjdChpbWFnZXMoRlVMTCksc3RvY2soRlVMTCkpLGJhc2VQcmljZShmb3JtYXR0ZWRWYWx1ZSkpLCcgK1xuICAndG90YWxQcmljZShmb3JtYXR0ZWRWYWx1ZSksdG90YWxJdGVtcyx0b3RhbFByaWNlV2l0aFRheChmb3JtYXR0ZWRWYWx1ZSksdG90YWxEaXNjb3VudHMoZm9ybWF0dGVkVmFsdWUpLHN1YlRvdGFsKGZvcm1hdHRlZFZhbHVlKSwnICtcbiAgJ2RlbGl2ZXJ5SXRlbXNRdWFudGl0eSxkZWxpdmVyeUNvc3QoZm9ybWF0dGVkVmFsdWUpLHRvdGFsVGF4KGZvcm1hdHRlZFZhbHVlKSxwaWNrdXBJdGVtc1F1YW50aXR5LG5ldCwnICtcbiAgJ2FwcGxpZWRWb3VjaGVycyxwcm9kdWN0RGlzY291bnRzKGZvcm1hdHRlZFZhbHVlKSc7XG5cbmNvbnN0IENIRUNLT1VUX1BBUkFNUyA9ICdkZWxpdmVyeUFkZHJlc3MoRlVMTCksZGVsaXZlcnlNb2RlLHBheW1lbnRJbmZvKEZVTEwpJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE9jY0NhcnRBZGFwdGVyIGltcGxlbWVudHMgQ2FydEFkYXB0ZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgaHR0cDogSHR0cENsaWVudCxcbiAgICBwcml2YXRlIG9jY0VuZHBvaW50czogT2NjRW5kcG9pbnRzU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY29udmVydGVyOiBDb252ZXJ0ZXJTZXJ2aWNlXG4gICkge31cblxuICBwcm90ZWN0ZWQgZ2V0Q2FydEVuZHBvaW50KHVzZXJJZDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCBjYXJ0RW5kcG9pbnQgPSBgdXNlcnMvJHt1c2VySWR9L2NhcnRzL2A7XG4gICAgcmV0dXJuIHRoaXMub2NjRW5kcG9pbnRzLmdldEVuZHBvaW50KGNhcnRFbmRwb2ludCk7XG4gIH1cblxuICBwdWJsaWMgbG9hZEFsbCh1c2VySWQ6IHN0cmluZywgZGV0YWlscz86IGJvb2xlYW4pOiBPYnNlcnZhYmxlPENhcnRbXT4ge1xuICAgIGNvbnN0IHVybCA9IHRoaXMuZ2V0Q2FydEVuZHBvaW50KHVzZXJJZCk7XG4gICAgY29uc3QgcGFyYW1zID0gZGV0YWlsc1xuICAgICAgPyBuZXcgSHR0cFBhcmFtcyh7XG4gICAgICAgICAgZnJvbVN0cmluZzogYGZpZWxkcz1jYXJ0cygke0RFVEFJTFNfUEFSQU1TfSxzYXZlVGltZSlgLFxuICAgICAgICB9KVxuICAgICAgOiBuZXcgSHR0cFBhcmFtcyh7XG4gICAgICAgICAgZnJvbVN0cmluZzogYGZpZWxkcz1jYXJ0cygke0JBU0lDX1BBUkFNU30sc2F2ZVRpbWUpYCxcbiAgICAgICAgfSk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8T2NjLkNhcnRMaXN0Pih1cmwsIHsgcGFyYW1zOiBwYXJhbXMgfSkucGlwZShcbiAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiBhbnkpID0+IHRocm93RXJyb3IoZXJyb3IpKSxcbiAgICAgIHBsdWNrKCdjYXJ0cycpLFxuICAgICAgdGhpcy5jb252ZXJ0ZXIucGlwZWFibGVNYW55KENBUlRfTk9STUFMSVpFUilcbiAgICApO1xuICB9XG5cbiAgcHVibGljIGxvYWQoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgY2FydElkOiBzdHJpbmcsXG4gICAgZGV0YWlscz86IGJvb2xlYW5cbiAgKTogT2JzZXJ2YWJsZTxDYXJ0PiB7XG4gICAgY29uc3QgdXJsID0gdGhpcy5nZXRDYXJ0RW5kcG9pbnQodXNlcklkKSArIGNhcnRJZDtcbiAgICBjb25zdCBwYXJhbXMgPSBkZXRhaWxzXG4gICAgICA/IG5ldyBIdHRwUGFyYW1zKHtcbiAgICAgICAgICBmcm9tU3RyaW5nOiBgZmllbGRzPSR7REVUQUlMU19QQVJBTVN9YCxcbiAgICAgICAgfSlcbiAgICAgIDogbmV3IEh0dHBQYXJhbXMoe1xuICAgICAgICAgIGZyb21TdHJpbmc6IGBmaWVsZHM9JHtCQVNJQ19QQVJBTVN9YCxcbiAgICAgICAgfSk7XG5cbiAgICBpZiAoY2FydElkID09PSAnY3VycmVudCcpIHtcbiAgICAgIHJldHVybiB0aGlzLmxvYWRBbGwodXNlcklkLCBkZXRhaWxzKS5waXBlKFxuICAgICAgICBtYXAoY2FydHMgPT4ge1xuICAgICAgICAgIGlmIChjYXJ0cykge1xuICAgICAgICAgICAgY29uc3QgYWN0aXZlQ2FydCA9IGNhcnRzLmZpbmQoY2FydCA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBjYXJ0WydzYXZlVGltZSddID09PSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBhY3RpdmVDYXJ0O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxPY2MuQ2FydD4odXJsLCB7IHBhcmFtczogcGFyYW1zIH0pLnBpcGUoXG4gICAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiBhbnkpID0+IHRocm93RXJyb3IoZXJyb3IpKSxcbiAgICAgICAgdGhpcy5jb252ZXJ0ZXIucGlwZWFibGUoQ0FSVF9OT1JNQUxJWkVSKVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBsb2FkQ2hlY2tvdXREZXRhaWxzKFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIGNhcnRJZDogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8Q2hlY2tvdXREZXRhaWxzPiB7XG4gICAgY29uc3QgdXJsID0gdGhpcy5nZXRDYXJ0RW5kcG9pbnQodXNlcklkKSArIGNhcnRJZDtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgSHR0cFBhcmFtcyh7XG4gICAgICBmcm9tU3RyaW5nOiBgZmllbGRzPSR7Q0hFQ0tPVVRfUEFSQU1TfWAsXG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldDxDaGVja291dERldGFpbHM+KHVybCwgeyBwYXJhbXMgfSlcbiAgICAgIC5waXBlKGNhdGNoRXJyb3IoKGVycm9yOiBhbnkpID0+IHRocm93RXJyb3IoZXJyb3IpKSk7XG4gIH1cblxuICBjcmVhdGUoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgb2xkQ2FydElkPzogc3RyaW5nLFxuICAgIHRvTWVyZ2VDYXJ0R3VpZD86IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPENhcnQ+IHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLmdldENhcnRFbmRwb2ludCh1c2VySWQpO1xuICAgIGNvbnN0IHRvQWRkID0gSlNPTi5zdHJpbmdpZnkoe30pO1xuICAgIGxldCBxdWVyeVN0cmluZyA9IGBmaWVsZHM9JHtCQVNJQ19QQVJBTVN9YDtcblxuICAgIGlmIChvbGRDYXJ0SWQpIHtcbiAgICAgIHF1ZXJ5U3RyaW5nID0gYCR7cXVlcnlTdHJpbmd9Jm9sZENhcnRJZD0ke29sZENhcnRJZH1gO1xuICAgIH1cbiAgICBpZiAodG9NZXJnZUNhcnRHdWlkKSB7XG4gICAgICBxdWVyeVN0cmluZyA9IGAke3F1ZXJ5U3RyaW5nfSZ0b01lcmdlQ2FydEd1aWQ9JHt0b01lcmdlQ2FydEd1aWR9YDtcbiAgICB9XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoe1xuICAgICAgZnJvbVN0cmluZzogcXVlcnlTdHJpbmcsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8T2NjLkNhcnQ+KHVybCwgdG9BZGQsIHsgcGFyYW1zOiBwYXJhbXMgfSkucGlwZShcbiAgICAgIHRoaXMuY29udmVydGVyLnBpcGVhYmxlKENBUlRfTk9STUFMSVpFUiksXG4gICAgICBjYXRjaEVycm9yKChlcnJvcjogYW55KSA9PiB0aHJvd0Vycm9yKGVycm9yLmpzb24oKSkpXG4gICAgKTtcbiAgfVxufVxuIl19
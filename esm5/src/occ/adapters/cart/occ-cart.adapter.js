/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map, pluck } from 'rxjs/operators';
import { CART_NORMALIZER } from '../../../cart/connectors/cart/converters';
import { ConverterService } from '../../../util/converter.service';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
// for mini cart
/** @type {?} */
var BASIC_PARAMS = 'DEFAULT,deliveryItemsQuantity,totalPrice(formattedValue),' +
    'entries(totalPrice(formattedValue),product(images(FULL)))';
// for cart details page
/** @type {?} */
var DETAILS_PARAMS = 'DEFAULT,potentialProductPromotions,appliedProductPromotions,potentialOrderPromotions,appliedOrderPromotions,' +
    'entries(totalPrice(formattedValue),product(images(FULL),stock(FULL)),basePrice(formattedValue)),' +
    'totalPrice(formattedValue),totalItems,totalPriceWithTax(formattedValue),totalDiscounts(value,formattedValue),subTotal(formattedValue),' +
    'deliveryItemsQuantity,deliveryCost(formattedValue),totalTax(formattedValue),pickupItemsQuantity,net,' +
    'appliedVouchers,productDiscounts(formattedValue)';
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
        return this.http.get(url, { params: params }).pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return throwError(error); })), pluck('carts'), this.converter.pipeableMany(CART_NORMALIZER));
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
            return this.loadAll(userId, details).pipe(map((/**
             * @param {?} carts
             * @return {?}
             */
            function (carts) {
                if (carts) {
                    /** @type {?} */
                    var activeCart = carts.find((/**
                     * @param {?} cart
                     * @return {?}
                     */
                    function (cart) {
                        return cart['saveTime'] === undefined;
                    }));
                    return activeCart;
                }
                else {
                    return null;
                }
            })));
        }
        else {
            return this.http.get(url, { params: params }).pipe(catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return throwError(error); })), this.converter.pipeable(CART_NORMALIZER));
        }
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
        return this.http.post(url, toAdd, { params: params }).pipe(this.converter.pipeable(CART_NORMALIZER), catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return throwError(error.json()); })));
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
     * @protected
     */
    OccCartAdapter.prototype.occEndpoints;
    /**
     * @type {?}
     * @protected
     */
    OccCartAdapter.prototype.converter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNhcnQuYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2MvYWRhcHRlcnMvY2FydC9vY2MtY2FydC5hZGFwdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzlELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM5QyxPQUFPLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFFM0UsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFbkUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7OztJQUdyRSxZQUFZLEdBQ2hCLDJEQUEyRDtJQUMzRCwyREFBMkQ7OztJQUd2RCxjQUFjLEdBQ2xCLDhHQUE4RztJQUM5RyxrR0FBa0c7SUFDbEcsd0lBQXdJO0lBQ3hJLHNHQUFzRztJQUN0RyxrREFBa0Q7QUFFcEQ7SUFFRSx3QkFDWSxJQUFnQixFQUNoQixZQUFpQyxFQUNqQyxTQUEyQjtRQUYzQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLGlCQUFZLEdBQVosWUFBWSxDQUFxQjtRQUNqQyxjQUFTLEdBQVQsU0FBUyxDQUFrQjtJQUNwQyxDQUFDOzs7Ozs7SUFFTSx3Q0FBZTs7Ozs7SUFBekIsVUFBMEIsTUFBYzs7WUFDaEMsWUFBWSxHQUFHLFdBQVMsTUFBTSxZQUFTO1FBQzdDLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDckQsQ0FBQzs7Ozs7O0lBRU0sZ0NBQU87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RUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQ2xFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxFQUN4QyxVQUFVOzs7O1FBQUMsVUFBQyxLQUFVLElBQUssT0FBQSxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQXhCLENBQXdCLEVBQUMsQ0FDckQsQ0FBQztJQUNKLENBQUM7O2dCQXZGRixVQUFVOzs7O2dCQXhCRixVQUFVO2dCQVNWLG1CQUFtQjtnQkFGbkIsZ0JBQWdCOztJQXlHekIscUJBQUM7Q0FBQSxBQXhGRCxJQXdGQztTQXZGWSxjQUFjOzs7Ozs7SUFFdkIsOEJBQTBCOzs7OztJQUMxQixzQ0FBMkM7Ozs7O0lBQzNDLG1DQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAsIHBsdWNrIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ2FydEFkYXB0ZXIgfSBmcm9tICcuLi8uLi8uLi9jYXJ0L2Nvbm5lY3RvcnMvY2FydC9jYXJ0LmFkYXB0ZXInO1xuaW1wb3J0IHsgQ0FSVF9OT1JNQUxJWkVSIH0gZnJvbSAnLi4vLi4vLi4vY2FydC9jb25uZWN0b3JzL2NhcnQvY29udmVydGVycyc7XG5pbXBvcnQgeyBDYXJ0IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvY2FydC5tb2RlbCc7XG5pbXBvcnQgeyBDb252ZXJ0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9jb252ZXJ0ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBPY2MgfSBmcm9tICcuLi8uLi9vY2MtbW9kZWxzL29jYy5tb2RlbHMnO1xuaW1wb3J0IHsgT2NjRW5kcG9pbnRzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL29jYy1lbmRwb2ludHMuc2VydmljZSc7XG5cbi8vIGZvciBtaW5pIGNhcnRcbmNvbnN0IEJBU0lDX1BBUkFNUyA9XG4gICdERUZBVUxULGRlbGl2ZXJ5SXRlbXNRdWFudGl0eSx0b3RhbFByaWNlKGZvcm1hdHRlZFZhbHVlKSwnICtcbiAgJ2VudHJpZXModG90YWxQcmljZShmb3JtYXR0ZWRWYWx1ZSkscHJvZHVjdChpbWFnZXMoRlVMTCkpKSc7XG5cbi8vIGZvciBjYXJ0IGRldGFpbHMgcGFnZVxuY29uc3QgREVUQUlMU19QQVJBTVMgPVxuICAnREVGQVVMVCxwb3RlbnRpYWxQcm9kdWN0UHJvbW90aW9ucyxhcHBsaWVkUHJvZHVjdFByb21vdGlvbnMscG90ZW50aWFsT3JkZXJQcm9tb3Rpb25zLGFwcGxpZWRPcmRlclByb21vdGlvbnMsJyArXG4gICdlbnRyaWVzKHRvdGFsUHJpY2UoZm9ybWF0dGVkVmFsdWUpLHByb2R1Y3QoaW1hZ2VzKEZVTEwpLHN0b2NrKEZVTEwpKSxiYXNlUHJpY2UoZm9ybWF0dGVkVmFsdWUpKSwnICtcbiAgJ3RvdGFsUHJpY2UoZm9ybWF0dGVkVmFsdWUpLHRvdGFsSXRlbXMsdG90YWxQcmljZVdpdGhUYXgoZm9ybWF0dGVkVmFsdWUpLHRvdGFsRGlzY291bnRzKHZhbHVlLGZvcm1hdHRlZFZhbHVlKSxzdWJUb3RhbChmb3JtYXR0ZWRWYWx1ZSksJyArXG4gICdkZWxpdmVyeUl0ZW1zUXVhbnRpdHksZGVsaXZlcnlDb3N0KGZvcm1hdHRlZFZhbHVlKSx0b3RhbFRheChmb3JtYXR0ZWRWYWx1ZSkscGlja3VwSXRlbXNRdWFudGl0eSxuZXQsJyArXG4gICdhcHBsaWVkVm91Y2hlcnMscHJvZHVjdERpc2NvdW50cyhmb3JtYXR0ZWRWYWx1ZSknO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT2NjQ2FydEFkYXB0ZXIgaW1wbGVtZW50cyBDYXJ0QWRhcHRlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByb3RlY3RlZCBvY2NFbmRwb2ludHM6IE9jY0VuZHBvaW50c1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNvbnZlcnRlcjogQ29udmVydGVyU2VydmljZVxuICApIHt9XG5cbiAgcHJvdGVjdGVkIGdldENhcnRFbmRwb2ludCh1c2VySWQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgY2FydEVuZHBvaW50ID0gYHVzZXJzLyR7dXNlcklkfS9jYXJ0cy9gO1xuICAgIHJldHVybiB0aGlzLm9jY0VuZHBvaW50cy5nZXRFbmRwb2ludChjYXJ0RW5kcG9pbnQpO1xuICB9XG5cbiAgcHVibGljIGxvYWRBbGwodXNlcklkOiBzdHJpbmcsIGRldGFpbHM/OiBib29sZWFuKTogT2JzZXJ2YWJsZTxDYXJ0W10+IHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLmdldENhcnRFbmRwb2ludCh1c2VySWQpO1xuICAgIGNvbnN0IHBhcmFtcyA9IGRldGFpbHNcbiAgICAgID8gbmV3IEh0dHBQYXJhbXMoe1xuICAgICAgICAgIGZyb21TdHJpbmc6IGBmaWVsZHM9Y2FydHMoJHtERVRBSUxTX1BBUkFNU30sc2F2ZVRpbWUpYCxcbiAgICAgICAgfSlcbiAgICAgIDogbmV3IEh0dHBQYXJhbXMoe1xuICAgICAgICAgIGZyb21TdHJpbmc6IGBmaWVsZHM9Y2FydHMoJHtCQVNJQ19QQVJBTVN9LHNhdmVUaW1lKWAsXG4gICAgICAgIH0pO1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PE9jYy5DYXJ0TGlzdD4odXJsLCB7IHBhcmFtczogcGFyYW1zIH0pLnBpcGUoXG4gICAgICBjYXRjaEVycm9yKChlcnJvcjogYW55KSA9PiB0aHJvd0Vycm9yKGVycm9yKSksXG4gICAgICBwbHVjaygnY2FydHMnKSxcbiAgICAgIHRoaXMuY29udmVydGVyLnBpcGVhYmxlTWFueShDQVJUX05PUk1BTElaRVIpXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBsb2FkKFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIGNhcnRJZDogc3RyaW5nLFxuICAgIGRldGFpbHM/OiBib29sZWFuXG4gICk6IE9ic2VydmFibGU8Q2FydD4ge1xuICAgIGNvbnN0IHVybCA9IHRoaXMuZ2V0Q2FydEVuZHBvaW50KHVzZXJJZCkgKyBjYXJ0SWQ7XG4gICAgY29uc3QgcGFyYW1zID0gZGV0YWlsc1xuICAgICAgPyBuZXcgSHR0cFBhcmFtcyh7XG4gICAgICAgICAgZnJvbVN0cmluZzogYGZpZWxkcz0ke0RFVEFJTFNfUEFSQU1TfWAsXG4gICAgICAgIH0pXG4gICAgICA6IG5ldyBIdHRwUGFyYW1zKHtcbiAgICAgICAgICBmcm9tU3RyaW5nOiBgZmllbGRzPSR7QkFTSUNfUEFSQU1TfWAsXG4gICAgICAgIH0pO1xuXG4gICAgaWYgKGNhcnRJZCA9PT0gJ2N1cnJlbnQnKSB7XG4gICAgICByZXR1cm4gdGhpcy5sb2FkQWxsKHVzZXJJZCwgZGV0YWlscykucGlwZShcbiAgICAgICAgbWFwKGNhcnRzID0+IHtcbiAgICAgICAgICBpZiAoY2FydHMpIHtcbiAgICAgICAgICAgIGNvbnN0IGFjdGl2ZUNhcnQgPSBjYXJ0cy5maW5kKGNhcnQgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gY2FydFsnc2F2ZVRpbWUnXSA9PT0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gYWN0aXZlQ2FydDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8T2NjLkNhcnQ+KHVybCwgeyBwYXJhbXM6IHBhcmFtcyB9KS5waXBlKFxuICAgICAgICBjYXRjaEVycm9yKChlcnJvcjogYW55KSA9PiB0aHJvd0Vycm9yKGVycm9yKSksXG4gICAgICAgIHRoaXMuY29udmVydGVyLnBpcGVhYmxlKENBUlRfTk9STUFMSVpFUilcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgY3JlYXRlKFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIG9sZENhcnRJZD86IHN0cmluZyxcbiAgICB0b01lcmdlQ2FydEd1aWQ/OiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxDYXJ0PiB7XG4gICAgY29uc3QgdXJsID0gdGhpcy5nZXRDYXJ0RW5kcG9pbnQodXNlcklkKTtcbiAgICBjb25zdCB0b0FkZCA9IEpTT04uc3RyaW5naWZ5KHt9KTtcbiAgICBsZXQgcXVlcnlTdHJpbmcgPSBgZmllbGRzPSR7QkFTSUNfUEFSQU1TfWA7XG5cbiAgICBpZiAob2xkQ2FydElkKSB7XG4gICAgICBxdWVyeVN0cmluZyA9IGAke3F1ZXJ5U3RyaW5nfSZvbGRDYXJ0SWQ9JHtvbGRDYXJ0SWR9YDtcbiAgICB9XG4gICAgaWYgKHRvTWVyZ2VDYXJ0R3VpZCkge1xuICAgICAgcXVlcnlTdHJpbmcgPSBgJHtxdWVyeVN0cmluZ30mdG9NZXJnZUNhcnRHdWlkPSR7dG9NZXJnZUNhcnRHdWlkfWA7XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKHtcbiAgICAgIGZyb21TdHJpbmc6IHF1ZXJ5U3RyaW5nLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PE9jYy5DYXJ0Pih1cmwsIHRvQWRkLCB7IHBhcmFtczogcGFyYW1zIH0pLnBpcGUoXG4gICAgICB0aGlzLmNvbnZlcnRlci5waXBlYWJsZShDQVJUX05PUk1BTElaRVIpLFxuICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6IGFueSkgPT4gdGhyb3dFcnJvcihlcnJvci5qc29uKCkpKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==
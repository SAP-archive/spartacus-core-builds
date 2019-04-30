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
const BASIC_PARAMS = 'DEFAULT,deliveryItemsQuantity,totalPrice(formattedValue),' +
    'entries(totalPrice(formattedValue),product(images(FULL)))';
// for cart details page
/** @type {?} */
const DETAILS_PARAMS = 'DEFAULT,potentialProductPromotions,appliedProductPromotions,potentialOrderPromotions,appliedOrderPromotions,' +
    'entries(totalPrice(formattedValue),product(images(FULL),stock(FULL)),basePrice(formattedValue)),' +
    'totalPrice(formattedValue),totalItems,totalPriceWithTax(formattedValue),totalDiscounts(formattedValue),subTotal(formattedValue),' +
    'deliveryItemsQuantity,deliveryCost(formattedValue),totalTax(formattedValue),pickupItemsQuantity,net,' +
    'appliedVouchers,productDiscounts(formattedValue)';
/** @type {?} */
const CHECKOUT_PARAMS = 'deliveryAddress(FULL),deliveryMode,paymentInfo(FULL)';
export class OccCartAdapter {
    /**
     * @param {?} http
     * @param {?} occEndpoints
     * @param {?} converter
     */
    constructor(http, occEndpoints, converter) {
        this.http = http;
        this.occEndpoints = occEndpoints;
        this.converter = converter;
    }
    /**
     * @protected
     * @param {?} userId
     * @return {?}
     */
    getCartEndpoint(userId) {
        /** @type {?} */
        const cartEndpoint = `users/${userId}/carts/`;
        return this.occEndpoints.getEndpoint(cartEndpoint);
    }
    /**
     * @param {?} userId
     * @param {?=} details
     * @return {?}
     */
    loadAll(userId, details) {
        /** @type {?} */
        const url = this.getCartEndpoint(userId);
        /** @type {?} */
        const params = details
            ? new HttpParams({
                fromString: `fields=carts(${DETAILS_PARAMS},saveTime)`,
            })
            : new HttpParams({
                fromString: `fields=carts(${BASIC_PARAMS},saveTime)`,
            });
        return this.http.get(url, { params: params }).pipe(catchError((error) => throwError(error)), pluck('carts'), this.converter.pipeableMany(CART_NORMALIZER));
    }
    /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?=} details
     * @return {?}
     */
    load(userId, cartId, details) {
        /** @type {?} */
        const url = this.getCartEndpoint(userId) + cartId;
        /** @type {?} */
        const params = details
            ? new HttpParams({
                fromString: `fields=${DETAILS_PARAMS}`,
            })
            : new HttpParams({
                fromString: `fields=${BASIC_PARAMS}`,
            });
        if (cartId === 'current') {
            return this.loadAll(userId, details).pipe(map(carts => {
                if (carts) {
                    /** @type {?} */
                    const activeCart = carts.find(cart => {
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
            return this.http.get(url, { params: params }).pipe(catchError((error) => throwError(error)), this.converter.pipeable(CART_NORMALIZER));
        }
    }
    /**
     * @param {?} userId
     * @param {?} cartId
     * @return {?}
     */
    loadCheckoutDetails(userId, cartId) {
        /** @type {?} */
        const url = this.getCartEndpoint(userId) + cartId;
        /** @type {?} */
        const params = new HttpParams({
            fromString: `fields=${CHECKOUT_PARAMS}`,
        });
        return this.http
            .get(url, { params })
            .pipe(catchError((error) => throwError(error)));
    }
    /**
     * @param {?} userId
     * @param {?=} oldCartId
     * @param {?=} toMergeCartGuid
     * @return {?}
     */
    create(userId, oldCartId, toMergeCartGuid) {
        /** @type {?} */
        const url = this.getCartEndpoint(userId);
        /** @type {?} */
        const toAdd = JSON.stringify({});
        /** @type {?} */
        let queryString = `fields=${BASIC_PARAMS}`;
        if (oldCartId) {
            queryString = `${queryString}&oldCartId=${oldCartId}`;
        }
        if (toMergeCartGuid) {
            queryString = `${queryString}&toMergeCartGuid=${toMergeCartGuid}`;
        }
        /** @type {?} */
        const params = new HttpParams({
            fromString: queryString,
        });
        return this.http.post(url, toAdd, { params: params }).pipe(this.converter.pipeable(CART_NORMALIZER), catchError((error) => throwError(error.json())));
    }
}
OccCartAdapter.decorators = [
    { type: Injectable }
];
/** @nocollapse */
OccCartAdapter.ctorParameters = () => [
    { type: HttpClient },
    { type: OccEndpointsService },
    { type: ConverterService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNhcnQuYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jYXJ0L29jYy9vY2MtY2FydC5hZGFwdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBYyxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFOUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sK0JBQStCLENBQUM7OztNQUsxRCxZQUFZLEdBQ2hCLDJEQUEyRDtJQUMzRCwyREFBMkQ7OztNQUd2RCxjQUFjLEdBQ2xCLDhHQUE4RztJQUM5RyxrR0FBa0c7SUFDbEcsa0lBQWtJO0lBQ2xJLHNHQUFzRztJQUN0RyxrREFBa0Q7O01BRTlDLGVBQWUsR0FBRyxzREFBc0Q7QUFHOUUsTUFBTSxPQUFPLGNBQWM7Ozs7OztJQUN6QixZQUNZLElBQWdCLEVBQ2xCLFlBQWlDLEVBQy9CLFNBQTJCO1FBRjNCLFNBQUksR0FBSixJQUFJLENBQVk7UUFDbEIsaUJBQVksR0FBWixZQUFZLENBQXFCO1FBQy9CLGNBQVMsR0FBVCxTQUFTLENBQWtCO0lBQ3BDLENBQUM7Ozs7OztJQUVNLGVBQWUsQ0FBQyxNQUFjOztjQUNoQyxZQUFZLEdBQUcsU0FBUyxNQUFNLFNBQVM7UUFDN0MsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNy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LEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQzs7WUFDNUIsV0FBVyxHQUFHLFVBQVUsWUFBWSxFQUFFO1FBRTFDLElBQUksU0FBUyxFQUFFO1lBQ2IsV0FBVyxHQUFHLEdBQUcsV0FBVyxjQUFjLFNBQVMsRUFBRSxDQUFDO1NBQ3ZEO1FBQ0QsSUFBSSxlQUFlLEVBQUU7WUFDbkIsV0FBVyxHQUFHLEdBQUcsV0FBVyxvQkFBb0IsZUFBZSxFQUFFLENBQUM7U0FDbkU7O2NBQ0ssTUFBTSxHQUFHLElBQUksVUFBVSxDQUFDO1lBQzVCLFVBQVUsRUFBRSxXQUFXO1NBQ3hCLENBQUM7UUFFRixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFPLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQzlELElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxFQUN4QyxVQUFVLENBQUMsQ0FBQyxLQUFVLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUNyRCxDQUFDO0lBQ0osQ0FBQzs7O1lBcEdGLFVBQVU7Ozs7WUF2QkYsVUFBVTtZQUVWLG1CQUFtQjtZQUNuQixnQkFBZ0I7Ozs7Ozs7SUF1QnJCLDhCQUEwQjs7Ozs7SUFDMUIsc0NBQXlDOzs7OztJQUN6QyxtQ0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYXJ0QWRhcHRlciB9IGZyb20gJy4uL2Nvbm5lY3RvcnMvY2FydC9jYXJ0LmFkYXB0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ2FydCwgQ2FydExpc3QgfSBmcm9tICcuLi8uLi9vY2Mvb2NjLW1vZGVscy9vY2MubW9kZWxzJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAsIHBsdWNrIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgT2NjRW5kcG9pbnRzU2VydmljZSB9IGZyb20gJy4uLy4uL29jYy9zZXJ2aWNlcy9vY2MtZW5kcG9pbnRzLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29udmVydGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3V0aWwvY29udmVydGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ0FSVF9OT1JNQUxJWkVSIH0gZnJvbSAnLi4vY29ubmVjdG9ycy9jYXJ0L2NvbnZlcnRlcnMnO1xuaW1wb3J0IHsgVUlDYXJ0IH0gZnJvbSAnLi4vbW9kZWwvY2FydCc7XG5pbXBvcnQgeyBDaGVja291dERldGFpbHMgfSBmcm9tICcuLi8uLi9jaGVja291dC9tb2RlbHMvY2hlY2tvdXQubW9kZWwnO1xuXG4vLyBmb3IgbWluaSBjYXJ0XG5jb25zdCBCQVNJQ19QQVJBTVMgPVxuICAnREVGQVVMVCxkZWxpdmVyeUl0ZW1zUXVhbnRpdHksdG90YWxQcmljZShmb3JtYXR0ZWRWYWx1ZSksJyArXG4gICdlbnRyaWVzKHRvdGFsUHJpY2UoZm9ybWF0dGVkVmFsdWUpLHByb2R1Y3QoaW1hZ2VzKEZVTEwpKSknO1xuXG4vLyBmb3IgY2FydCBkZXRhaWxzIHBhZ2VcbmNvbnN0IERFVEFJTFNfUEFSQU1TID1cbiAgJ0RFRkFVTFQscG90ZW50aWFsUHJvZHVjdFByb21vdGlvbnMsYXBwbGllZFByb2R1Y3RQcm9tb3Rpb25zLHBvdGVudGlhbE9yZGVyUHJvbW90aW9ucyxhcHBsaWVkT3JkZXJQcm9tb3Rpb25zLCcgK1xuICAnZW50cmllcyh0b3RhbFByaWNlKGZvcm1hdHRlZFZhbHVlKSxwcm9kdWN0KGltYWdlcyhGVUxMKSxzdG9jayhGVUxMKSksYmFzZVByaWNlKGZvcm1hdHRlZFZhbHVlKSksJyArXG4gICd0b3RhbFByaWNlKGZvcm1hdHRlZFZhbHVlKSx0b3RhbEl0ZW1zLHRvdGFsUHJpY2VXaXRoVGF4KGZvcm1hdHRlZFZhbHVlKSx0b3RhbERpc2NvdW50cyhmb3JtYXR0ZWRWYWx1ZSksc3ViVG90YWwoZm9ybWF0dGVkVmFsdWUpLCcgK1xuICAnZGVsaXZlcnlJdGVtc1F1YW50aXR5LGRlbGl2ZXJ5Q29zdChmb3JtYXR0ZWRWYWx1ZSksdG90YWxUYXgoZm9ybWF0dGVkVmFsdWUpLHBpY2t1cEl0ZW1zUXVhbnRpdHksbmV0LCcgK1xuICAnYXBwbGllZFZvdWNoZXJzLHByb2R1Y3REaXNjb3VudHMoZm9ybWF0dGVkVmFsdWUpJztcblxuY29uc3QgQ0hFQ0tPVVRfUEFSQU1TID0gJ2RlbGl2ZXJ5QWRkcmVzcyhGVUxMKSxkZWxpdmVyeU1vZGUscGF5bWVudEluZm8oRlVMTCknO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT2NjQ2FydEFkYXB0ZXIgaW1wbGVtZW50cyBDYXJ0QWRhcHRlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByaXZhdGUgb2NjRW5kcG9pbnRzOiBPY2NFbmRwb2ludHNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjb252ZXJ0ZXI6IENvbnZlcnRlclNlcnZpY2VcbiAgKSB7fVxuXG4gIHByb3RlY3RlZCBnZXRDYXJ0RW5kcG9pbnQodXNlcklkOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IGNhcnRFbmRwb2ludCA9IGB1c2Vycy8ke3VzZXJJZH0vY2FydHMvYDtcbiAgICByZXR1cm4gdGhpcy5vY2NFbmRwb2ludHMuZ2V0RW5kcG9pbnQoY2FydEVuZHBvaW50KTtcbiAgfVxuXG4gIHB1YmxpYyBsb2FkQWxsKHVzZXJJZDogc3RyaW5nLCBkZXRhaWxzPzogYm9vbGVhbik6IE9ic2VydmFibGU8VUlDYXJ0W10+IHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLmdldENhcnRFbmRwb2ludCh1c2VySWQpO1xuICAgIGNvbnN0IHBhcmFtcyA9IGRldGFpbHNcbiAgICAgID8gbmV3IEh0dHBQYXJhbXMoe1xuICAgICAgICAgIGZyb21TdHJpbmc6IGBmaWVsZHM9Y2FydHMoJHtERVRBSUxTX1BBUkFNU30sc2F2ZVRpbWUpYCxcbiAgICAgICAgfSlcbiAgICAgIDogbmV3IEh0dHBQYXJhbXMoe1xuICAgICAgICAgIGZyb21TdHJpbmc6IGBmaWVsZHM9Y2FydHMoJHtCQVNJQ19QQVJBTVN9LHNhdmVUaW1lKWAsXG4gICAgICAgIH0pO1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PENhcnRMaXN0Pih1cmwsIHsgcGFyYW1zOiBwYXJhbXMgfSkucGlwZShcbiAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiBhbnkpID0+IHRocm93RXJyb3IoZXJyb3IpKSxcbiAgICAgIHBsdWNrKCdjYXJ0cycpLFxuICAgICAgdGhpcy5jb252ZXJ0ZXIucGlwZWFibGVNYW55KENBUlRfTk9STUFMSVpFUilcbiAgICApO1xuICB9XG5cbiAgcHVibGljIGxvYWQoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgY2FydElkOiBzdHJpbmcsXG4gICAgZGV0YWlscz86IGJvb2xlYW5cbiAgKTogT2JzZXJ2YWJsZTxVSUNhcnQ+IHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLmdldENhcnRFbmRwb2ludCh1c2VySWQpICsgY2FydElkO1xuICAgIGNvbnN0IHBhcmFtcyA9IGRldGFpbHNcbiAgICAgID8gbmV3IEh0dHBQYXJhbXMoe1xuICAgICAgICAgIGZyb21TdHJpbmc6IGBmaWVsZHM9JHtERVRBSUxTX1BBUkFNU31gLFxuICAgICAgICB9KVxuICAgICAgOiBuZXcgSHR0cFBhcmFtcyh7XG4gICAgICAgICAgZnJvbVN0cmluZzogYGZpZWxkcz0ke0JBU0lDX1BBUkFNU31gLFxuICAgICAgICB9KTtcblxuICAgIGlmIChjYXJ0SWQgPT09ICdjdXJyZW50Jykge1xuICAgICAgcmV0dXJuIHRoaXMubG9hZEFsbCh1c2VySWQsIGRldGFpbHMpLnBpcGUoXG4gICAgICAgIG1hcChjYXJ0cyA9PiB7XG4gICAgICAgICAgaWYgKGNhcnRzKSB7XG4gICAgICAgICAgICBjb25zdCBhY3RpdmVDYXJ0ID0gY2FydHMuZmluZChjYXJ0ID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIGNhcnRbJ3NhdmVUaW1lJ10gPT09IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGFjdGl2ZUNhcnQ7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PENhcnQ+KHVybCwgeyBwYXJhbXM6IHBhcmFtcyB9KS5waXBlKFxuICAgICAgICBjYXRjaEVycm9yKChlcnJvcjogYW55KSA9PiB0aHJvd0Vycm9yKGVycm9yKSksXG4gICAgICAgIHRoaXMuY29udmVydGVyLnBpcGVhYmxlKENBUlRfTk9STUFMSVpFUilcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGxvYWRDaGVja291dERldGFpbHMoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgY2FydElkOiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxDaGVja291dERldGFpbHM+IHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLmdldENhcnRFbmRwb2ludCh1c2VySWQpICsgY2FydElkO1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKHtcbiAgICAgIGZyb21TdHJpbmc6IGBmaWVsZHM9JHtDSEVDS09VVF9QQVJBTVN9YCxcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0PENoZWNrb3V0RGV0YWlscz4odXJsLCB7IHBhcmFtcyB9KVxuICAgICAgLnBpcGUoY2F0Y2hFcnJvcigoZXJyb3I6IGFueSkgPT4gdGhyb3dFcnJvcihlcnJvcikpKTtcbiAgfVxuXG4gIHB1YmxpYyBjcmVhdGUoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgb2xkQ2FydElkPzogc3RyaW5nLFxuICAgIHRvTWVyZ2VDYXJ0R3VpZD86IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPFVJQ2FydD4ge1xuICAgIGNvbnN0IHVybCA9IHRoaXMuZ2V0Q2FydEVuZHBvaW50KHVzZXJJZCk7XG4gICAgY29uc3QgdG9BZGQgPSBKU09OLnN0cmluZ2lmeSh7fSk7XG4gICAgbGV0IHF1ZXJ5U3RyaW5nID0gYGZpZWxkcz0ke0JBU0lDX1BBUkFNU31gO1xuXG4gICAgaWYgKG9sZENhcnRJZCkge1xuICAgICAgcXVlcnlTdHJpbmcgPSBgJHtxdWVyeVN0cmluZ30mb2xkQ2FydElkPSR7b2xkQ2FydElkfWA7XG4gICAgfVxuICAgIGlmICh0b01lcmdlQ2FydEd1aWQpIHtcbiAgICAgIHF1ZXJ5U3RyaW5nID0gYCR7cXVlcnlTdHJpbmd9JnRvTWVyZ2VDYXJ0R3VpZD0ke3RvTWVyZ2VDYXJ0R3VpZH1gO1xuICAgIH1cbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgSHR0cFBhcmFtcyh7XG4gICAgICBmcm9tU3RyaW5nOiBxdWVyeVN0cmluZyxcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxDYXJ0Pih1cmwsIHRvQWRkLCB7IHBhcmFtczogcGFyYW1zIH0pLnBpcGUoXG4gICAgICB0aGlzLmNvbnZlcnRlci5waXBlYWJsZShDQVJUX05PUk1BTElaRVIpLFxuICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6IGFueSkgPT4gdGhyb3dFcnJvcihlcnJvci5qc29uKCkpKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==
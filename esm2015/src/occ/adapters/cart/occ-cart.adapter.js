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
const BASIC_PARAMS = 'DEFAULT,deliveryItemsQuantity,totalPrice(formattedValue),' +
    'entries(totalPrice(formattedValue),product(images(FULL)))';
// for cart details page
/** @type {?} */
const DETAILS_PARAMS = 'DEFAULT,potentialProductPromotions,appliedProductPromotions,potentialOrderPromotions,appliedOrderPromotions,' +
    'entries(totalPrice(formattedValue),product(images(FULL),stock(FULL)),basePrice(formattedValue)),' +
    'totalPrice(formattedValue),totalItems,totalPriceWithTax(formattedValue),totalDiscounts(value,formattedValue),subTotal(formattedValue),' +
    'deliveryItemsQuantity,deliveryCost(formattedValue),totalTax(formattedValue),pickupItemsQuantity,net,' +
    'appliedVouchers,productDiscounts(formattedValue)';
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
        return this.http.get(url, { params: params }).pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        (error) => throwError(error))), pluck('carts'), this.converter.pipeableMany(CART_NORMALIZER));
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
            return this.loadAll(userId, details).pipe(map((/**
             * @param {?} carts
             * @return {?}
             */
            carts => {
                if (carts) {
                    /** @type {?} */
                    const activeCart = carts.find((/**
                     * @param {?} cart
                     * @return {?}
                     */
                    cart => {
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
            (error) => throwError(error))), this.converter.pipeable(CART_NORMALIZER));
        }
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
        return this.http.post(url, toAdd, { params: params }).pipe(this.converter.pipeable(CART_NORMALIZER), catchError((/**
         * @param {?} error
         * @return {?}
         */
        (error) => throwError(error.json()))));
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
     * @protected
     */
    OccCartAdapter.prototype.occEndpoints;
    /**
     * @type {?}
     * @protected
     */
    OccCartAdapter.prototype.converter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNhcnQuYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2MvYWRhcHRlcnMvY2FydC9vY2MtY2FydC5hZGFwdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzlELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM5QyxPQUFPLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFFM0UsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFbkUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7OztNQUdyRSxZQUFZLEdBQ2hCLDJEQUEyRDtJQUMzRCwyREFBMkQ7OztNQUd2RCxjQUFjLEdBQ2xCLDhHQUE4RztJQUM5RyxrR0FBa0c7SUFDbEcsd0lBQXdJO0lBQ3hJLHNHQUFzRztJQUN0RyxrREFBa0Q7QUFHcEQsTUFBTSxPQUFPLGNBQWM7Ozs7OztJQUN6QixZQUNZLElBQWdCLEVBQ2hCLFlBQWlDLEVBQ2pDLFNBQTJCO1FBRjNCLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsaUJBQVksR0FBWixZQUFZLENBQXFCO1FBQ2pDLGNBQVMsR0FBVCxTQUFTLENBQWtCO0lBQ3BDLENBQUM7Ozs7OztJQUVNLGVBQWUsQ0FBQyxNQUFjOztjQUNoQyxZQUFZLEdBQUcsU0FBUyxNQUFNLFNBQVM7UUFDN0MsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNyRCxDQUFDOzs7Ozs7SUFF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QUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUMsSUFBSSxDQUNsRSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsRUFDeEMsVUFBVTs7OztRQUFDLENBQUMsS0FBVSxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUMsQ0FDckQsQ0FBQztJQUNKLENBQUM7OztZQXZGRixVQUFVOzs7O1lBeEJGLFVBQVU7WUFTVixtQkFBbUI7WUFGbkIsZ0JBQWdCOzs7Ozs7O0lBb0JyQiw4QkFBMEI7Ozs7O0lBQzFCLHNDQUEyQzs7Ozs7SUFDM0MsbUNBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCwgcGx1Y2sgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDYXJ0QWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL2NhcnQvY29ubmVjdG9ycy9jYXJ0L2NhcnQuYWRhcHRlcic7XG5pbXBvcnQgeyBDQVJUX05PUk1BTElaRVIgfSBmcm9tICcuLi8uLi8uLi9jYXJ0L2Nvbm5lY3RvcnMvY2FydC9jb252ZXJ0ZXJzJztcbmltcG9ydCB7IENhcnQgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9jYXJ0Lm1vZGVsJztcbmltcG9ydCB7IENvbnZlcnRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi91dGlsL2NvbnZlcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7IE9jYyB9IGZyb20gJy4uLy4uL29jYy1tb2RlbHMvb2NjLm1vZGVscyc7XG5pbXBvcnQgeyBPY2NFbmRwb2ludHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvb2NjLWVuZHBvaW50cy5zZXJ2aWNlJztcblxuLy8gZm9yIG1pbmkgY2FydFxuY29uc3QgQkFTSUNfUEFSQU1TID1cbiAgJ0RFRkFVTFQsZGVsaXZlcnlJdGVtc1F1YW50aXR5LHRvdGFsUHJpY2UoZm9ybWF0dGVkVmFsdWUpLCcgK1xuICAnZW50cmllcyh0b3RhbFByaWNlKGZvcm1hdHRlZFZhbHVlKSxwcm9kdWN0KGltYWdlcyhGVUxMKSkpJztcblxuLy8gZm9yIGNhcnQgZGV0YWlscyBwYWdlXG5jb25zdCBERVRBSUxTX1BBUkFNUyA9XG4gICdERUZBVUxULHBvdGVudGlhbFByb2R1Y3RQcm9tb3Rpb25zLGFwcGxpZWRQcm9kdWN0UHJvbW90aW9ucyxwb3RlbnRpYWxPcmRlclByb21vdGlvbnMsYXBwbGllZE9yZGVyUHJvbW90aW9ucywnICtcbiAgJ2VudHJpZXModG90YWxQcmljZShmb3JtYXR0ZWRWYWx1ZSkscHJvZHVjdChpbWFnZXMoRlVMTCksc3RvY2soRlVMTCkpLGJhc2VQcmljZShmb3JtYXR0ZWRWYWx1ZSkpLCcgK1xuICAndG90YWxQcmljZShmb3JtYXR0ZWRWYWx1ZSksdG90YWxJdGVtcyx0b3RhbFByaWNlV2l0aFRheChmb3JtYXR0ZWRWYWx1ZSksdG90YWxEaXNjb3VudHModmFsdWUsZm9ybWF0dGVkVmFsdWUpLHN1YlRvdGFsKGZvcm1hdHRlZFZhbHVlKSwnICtcbiAgJ2RlbGl2ZXJ5SXRlbXNRdWFudGl0eSxkZWxpdmVyeUNvc3QoZm9ybWF0dGVkVmFsdWUpLHRvdGFsVGF4KGZvcm1hdHRlZFZhbHVlKSxwaWNrdXBJdGVtc1F1YW50aXR5LG5ldCwnICtcbiAgJ2FwcGxpZWRWb3VjaGVycyxwcm9kdWN0RGlzY291bnRzKGZvcm1hdHRlZFZhbHVlKSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBPY2NDYXJ0QWRhcHRlciBpbXBsZW1lbnRzIENhcnRBZGFwdGVyIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgcHJvdGVjdGVkIG9jY0VuZHBvaW50czogT2NjRW5kcG9pbnRzU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY29udmVydGVyOiBDb252ZXJ0ZXJTZXJ2aWNlXG4gICkge31cblxuICBwcm90ZWN0ZWQgZ2V0Q2FydEVuZHBvaW50KHVzZXJJZDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCBjYXJ0RW5kcG9pbnQgPSBgdXNlcnMvJHt1c2VySWR9L2NhcnRzL2A7XG4gICAgcmV0dXJuIHRoaXMub2NjRW5kcG9pbnRzLmdldEVuZHBvaW50KGNhcnRFbmRwb2ludCk7XG4gIH1cblxuICBwdWJsaWMgbG9hZEFsbCh1c2VySWQ6IHN0cmluZywgZGV0YWlscz86IGJvb2xlYW4pOiBPYnNlcnZhYmxlPENhcnRbXT4ge1xuICAgIGNvbnN0IHVybCA9IHRoaXMuZ2V0Q2FydEVuZHBvaW50KHVzZXJJZCk7XG4gICAgY29uc3QgcGFyYW1zID0gZGV0YWlsc1xuICAgICAgPyBuZXcgSHR0cFBhcmFtcyh7XG4gICAgICAgICAgZnJvbVN0cmluZzogYGZpZWxkcz1jYXJ0cygke0RFVEFJTFNfUEFSQU1TfSxzYXZlVGltZSlgLFxuICAgICAgICB9KVxuICAgICAgOiBuZXcgSHR0cFBhcmFtcyh7XG4gICAgICAgICAgZnJvbVN0cmluZzogYGZpZWxkcz1jYXJ0cygke0JBU0lDX1BBUkFNU30sc2F2ZVRpbWUpYCxcbiAgICAgICAgfSk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8T2NjLkNhcnRMaXN0Pih1cmwsIHsgcGFyYW1zOiBwYXJhbXMgfSkucGlwZShcbiAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiBhbnkpID0+IHRocm93RXJyb3IoZXJyb3IpKSxcbiAgICAgIHBsdWNrKCdjYXJ0cycpLFxuICAgICAgdGhpcy5jb252ZXJ0ZXIucGlwZWFibGVNYW55KENBUlRfTk9STUFMSVpFUilcbiAgICApO1xuICB9XG5cbiAgcHVibGljIGxvYWQoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgY2FydElkOiBzdHJpbmcsXG4gICAgZGV0YWlscz86IGJvb2xlYW5cbiAgKTogT2JzZXJ2YWJsZTxDYXJ0PiB7XG4gICAgY29uc3QgdXJsID0gdGhpcy5nZXRDYXJ0RW5kcG9pbnQodXNlcklkKSArIGNhcnRJZDtcbiAgICBjb25zdCBwYXJhbXMgPSBkZXRhaWxzXG4gICAgICA/IG5ldyBIdHRwUGFyYW1zKHtcbiAgICAgICAgICBmcm9tU3RyaW5nOiBgZmllbGRzPSR7REVUQUlMU19QQVJBTVN9YCxcbiAgICAgICAgfSlcbiAgICAgIDogbmV3IEh0dHBQYXJhbXMoe1xuICAgICAgICAgIGZyb21TdHJpbmc6IGBmaWVsZHM9JHtCQVNJQ19QQVJBTVN9YCxcbiAgICAgICAgfSk7XG5cbiAgICBpZiAoY2FydElkID09PSAnY3VycmVudCcpIHtcbiAgICAgIHJldHVybiB0aGlzLmxvYWRBbGwodXNlcklkLCBkZXRhaWxzKS5waXBlKFxuICAgICAgICBtYXAoY2FydHMgPT4ge1xuICAgICAgICAgIGlmIChjYXJ0cykge1xuICAgICAgICAgICAgY29uc3QgYWN0aXZlQ2FydCA9IGNhcnRzLmZpbmQoY2FydCA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBjYXJ0WydzYXZlVGltZSddID09PSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBhY3RpdmVDYXJ0O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxPY2MuQ2FydD4odXJsLCB7IHBhcmFtczogcGFyYW1zIH0pLnBpcGUoXG4gICAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiBhbnkpID0+IHRocm93RXJyb3IoZXJyb3IpKSxcbiAgICAgICAgdGhpcy5jb252ZXJ0ZXIucGlwZWFibGUoQ0FSVF9OT1JNQUxJWkVSKVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBjcmVhdGUoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgb2xkQ2FydElkPzogc3RyaW5nLFxuICAgIHRvTWVyZ2VDYXJ0R3VpZD86IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPENhcnQ+IHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLmdldENhcnRFbmRwb2ludCh1c2VySWQpO1xuICAgIGNvbnN0IHRvQWRkID0gSlNPTi5zdHJpbmdpZnkoe30pO1xuICAgIGxldCBxdWVyeVN0cmluZyA9IGBmaWVsZHM9JHtCQVNJQ19QQVJBTVN9YDtcblxuICAgIGlmIChvbGRDYXJ0SWQpIHtcbiAgICAgIHF1ZXJ5U3RyaW5nID0gYCR7cXVlcnlTdHJpbmd9Jm9sZENhcnRJZD0ke29sZENhcnRJZH1gO1xuICAgIH1cbiAgICBpZiAodG9NZXJnZUNhcnRHdWlkKSB7XG4gICAgICBxdWVyeVN0cmluZyA9IGAke3F1ZXJ5U3RyaW5nfSZ0b01lcmdlQ2FydEd1aWQ9JHt0b01lcmdlQ2FydEd1aWR9YDtcbiAgICB9XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoe1xuICAgICAgZnJvbVN0cmluZzogcXVlcnlTdHJpbmcsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8T2NjLkNhcnQ+KHVybCwgdG9BZGQsIHsgcGFyYW1zOiBwYXJhbXMgfSkucGlwZShcbiAgICAgIHRoaXMuY29udmVydGVyLnBpcGVhYmxlKENBUlRfTk9STUFMSVpFUiksXG4gICAgICBjYXRjaEVycm9yKChlcnJvcjogYW55KSA9PiB0aHJvd0Vycm9yKGVycm9yLmpzb24oKSkpXG4gICAgKTtcbiAgfVxufVxuIl19
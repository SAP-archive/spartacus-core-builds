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
        const cartEndpoint = 'users/' + userId + '/carts/';
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
                fromString: 'fields=carts(' + DETAILS_PARAMS + ',saveTime)',
            })
            : new HttpParams({
                fromString: 'fields=carts(' + BASIC_PARAMS + ',saveTime)',
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
                fromString: 'fields=' + DETAILS_PARAMS,
            })
            : new HttpParams({
                fromString: 'fields=' + BASIC_PARAMS,
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
        let queryString = 'fields=' + BASIC_PARAMS;
        if (oldCartId) {
            queryString = queryString + '&oldCartId=' + oldCartId;
        }
        if (toMergeCartGuid) {
            queryString = queryString + '&toMergeCartGuid=' + toMergeCartGuid;
        }
        /** @type {?} */
        const params = new HttpParams({
            fromString: queryString,
        });
        return this.http
            .post(url, toAdd, { params: params })
            .pipe(catchError((error) => throwError(error.json())));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNhcnQuYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jYXJ0L29jYy9vY2MtY2FydC5hZGFwdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBYyxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFOUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sK0JBQStCLENBQUM7OztNQUcxRCxZQUFZLEdBQ2hCLDJEQUEyRDtJQUMzRCwyREFBMkQ7OztNQUd2RCxjQUFjLEdBQ2xCLDhHQUE4RztJQUM5RyxrR0FBa0c7SUFDbEcsa0lBQWtJO0lBQ2xJLHNHQUFzRztJQUN0RyxrREFBa0Q7QUFHcEQsTUFBTSxPQUFPLGNBQWM7Ozs7OztJQUN6QixZQUNZLElBQWdCLEVBQ2xCLFlBQWlDLEVBQy9CLFNBQTJCO1FBRjNCLFNBQUksR0FBSixJQUFJLENBQVk7UUFDbEIsaUJBQVksR0FBWixZQUFZLENBQXFCO1FBQy9CLGNBQVMsR0FBVCxTQUFTLENBQWtCO0lBQ3BDLENBQUM7Ozs7OztJQUVNLGVBQWUsQ0FBQyxNQUFjOztjQUNoQyxZQUFZLEdBQUcsUUFBUSxHQUFHLE1BQU0sR0FBRyxTQUFTO1FBQ2xELE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDckQsQ0FBQzs7Ozs7O0lB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QUssRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQzthQUMxQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBVSxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7OztZQXRGRixVQUFVOzs7O1lBbkJGLFVBQVU7WUFFVixtQkFBbUI7WUFDbkIsZ0JBQWdCOzs7Ozs7O0lBbUJyQiw4QkFBMEI7Ozs7O0lBQzFCLHNDQUF5Qzs7Ozs7SUFDekMsbUNBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FydEFkYXB0ZXIgfSBmcm9tICcuLi9jb25uZWN0b3JzL2NhcnQvY2FydC5hZGFwdGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENhcnQsIENhcnRMaXN0IH0gZnJvbSAnLi4vLi4vb2NjL29jYy1tb2RlbHMvb2NjLm1vZGVscyc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwLCBwbHVjayB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE9jY0VuZHBvaW50c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9vY2Mvc2VydmljZXMvb2NjLWVuZHBvaW50cy5zZXJ2aWNlJztcbmltcG9ydCB7IENvbnZlcnRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi91dGlsL2NvbnZlcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7IENBUlRfTk9STUFMSVpFUiB9IGZyb20gJy4uL2Nvbm5lY3RvcnMvY2FydC9jb252ZXJ0ZXJzJztcblxuLy8gZm9yIG1pbmkgY2FydFxuY29uc3QgQkFTSUNfUEFSQU1TID1cbiAgJ0RFRkFVTFQsZGVsaXZlcnlJdGVtc1F1YW50aXR5LHRvdGFsUHJpY2UoZm9ybWF0dGVkVmFsdWUpLCcgK1xuICAnZW50cmllcyh0b3RhbFByaWNlKGZvcm1hdHRlZFZhbHVlKSxwcm9kdWN0KGltYWdlcyhGVUxMKSkpJztcblxuLy8gZm9yIGNhcnQgZGV0YWlscyBwYWdlXG5jb25zdCBERVRBSUxTX1BBUkFNUyA9XG4gICdERUZBVUxULHBvdGVudGlhbFByb2R1Y3RQcm9tb3Rpb25zLGFwcGxpZWRQcm9kdWN0UHJvbW90aW9ucyxwb3RlbnRpYWxPcmRlclByb21vdGlvbnMsYXBwbGllZE9yZGVyUHJvbW90aW9ucywnICtcbiAgJ2VudHJpZXModG90YWxQcmljZShmb3JtYXR0ZWRWYWx1ZSkscHJvZHVjdChpbWFnZXMoRlVMTCksc3RvY2soRlVMTCkpLGJhc2VQcmljZShmb3JtYXR0ZWRWYWx1ZSkpLCcgK1xuICAndG90YWxQcmljZShmb3JtYXR0ZWRWYWx1ZSksdG90YWxJdGVtcyx0b3RhbFByaWNlV2l0aFRheChmb3JtYXR0ZWRWYWx1ZSksdG90YWxEaXNjb3VudHMoZm9ybWF0dGVkVmFsdWUpLHN1YlRvdGFsKGZvcm1hdHRlZFZhbHVlKSwnICtcbiAgJ2RlbGl2ZXJ5SXRlbXNRdWFudGl0eSxkZWxpdmVyeUNvc3QoZm9ybWF0dGVkVmFsdWUpLHRvdGFsVGF4KGZvcm1hdHRlZFZhbHVlKSxwaWNrdXBJdGVtc1F1YW50aXR5LG5ldCwnICtcbiAgJ2FwcGxpZWRWb3VjaGVycyxwcm9kdWN0RGlzY291bnRzKGZvcm1hdHRlZFZhbHVlKSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBPY2NDYXJ0QWRhcHRlciBpbXBsZW1lbnRzIENhcnRBZGFwdGVyIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgcHJpdmF0ZSBvY2NFbmRwb2ludHM6IE9jY0VuZHBvaW50c1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNvbnZlcnRlcjogQ29udmVydGVyU2VydmljZVxuICApIHt9XG5cbiAgcHJvdGVjdGVkIGdldENhcnRFbmRwb2ludCh1c2VySWQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgY2FydEVuZHBvaW50ID0gJ3VzZXJzLycgKyB1c2VySWQgKyAnL2NhcnRzLyc7XG4gICAgcmV0dXJuIHRoaXMub2NjRW5kcG9pbnRzLmdldEVuZHBvaW50KGNhcnRFbmRwb2ludCk7XG4gIH1cblxuICBwdWJsaWMgbG9hZEFsbCh1c2VySWQ6IHN0cmluZywgZGV0YWlscz86IGJvb2xlYW4pOiBPYnNlcnZhYmxlPENhcnRbXT4ge1xuICAgIGNvbnN0IHVybCA9IHRoaXMuZ2V0Q2FydEVuZHBvaW50KHVzZXJJZCk7XG4gICAgY29uc3QgcGFyYW1zID0gZGV0YWlsc1xuICAgICAgPyBuZXcgSHR0cFBhcmFtcyh7XG4gICAgICAgICAgZnJvbVN0cmluZzogJ2ZpZWxkcz1jYXJ0cygnICsgREVUQUlMU19QQVJBTVMgKyAnLHNhdmVUaW1lKScsXG4gICAgICAgIH0pXG4gICAgICA6IG5ldyBIdHRwUGFyYW1zKHtcbiAgICAgICAgICBmcm9tU3RyaW5nOiAnZmllbGRzPWNhcnRzKCcgKyBCQVNJQ19QQVJBTVMgKyAnLHNhdmVUaW1lKScsXG4gICAgICAgIH0pO1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PENhcnRMaXN0Pih1cmwsIHsgcGFyYW1zOiBwYXJhbXMgfSkucGlwZShcbiAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiBhbnkpID0+IHRocm93RXJyb3IoZXJyb3IpKSxcbiAgICAgIHBsdWNrKCdjYXJ0cycpLFxuICAgICAgdGhpcy5jb252ZXJ0ZXIucGlwZWFibGVNYW55KENBUlRfTk9STUFMSVpFUilcbiAgICApO1xuICB9XG5cbiAgcHVibGljIGxvYWQoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgY2FydElkOiBzdHJpbmcsXG4gICAgZGV0YWlscz86IGJvb2xlYW5cbiAgKTogT2JzZXJ2YWJsZTxDYXJ0PiB7XG4gICAgY29uc3QgdXJsID0gdGhpcy5nZXRDYXJ0RW5kcG9pbnQodXNlcklkKSArIGNhcnRJZDtcbiAgICBjb25zdCBwYXJhbXMgPSBkZXRhaWxzXG4gICAgICA/IG5ldyBIdHRwUGFyYW1zKHtcbiAgICAgICAgICBmcm9tU3RyaW5nOiAnZmllbGRzPScgKyBERVRBSUxTX1BBUkFNUyxcbiAgICAgICAgfSlcbiAgICAgIDogbmV3IEh0dHBQYXJhbXMoe1xuICAgICAgICAgIGZyb21TdHJpbmc6ICdmaWVsZHM9JyArIEJBU0lDX1BBUkFNUyxcbiAgICAgICAgfSk7XG5cbiAgICBpZiAoY2FydElkID09PSAnY3VycmVudCcpIHtcbiAgICAgIHJldHVybiB0aGlzLmxvYWRBbGwodXNlcklkLCBkZXRhaWxzKS5waXBlKFxuICAgICAgICBtYXAoY2FydHMgPT4ge1xuICAgICAgICAgIGlmIChjYXJ0cykge1xuICAgICAgICAgICAgY29uc3QgYWN0aXZlQ2FydCA9IGNhcnRzLmZpbmQoY2FydCA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBjYXJ0WydzYXZlVGltZSddID09PSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBhY3RpdmVDYXJ0O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5odHRwLmdldDxDYXJ0Pih1cmwsIHsgcGFyYW1zOiBwYXJhbXMgfSkucGlwZShcbiAgICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6IGFueSkgPT4gdGhyb3dFcnJvcihlcnJvcikpLFxuICAgICAgICB0aGlzLmNvbnZlcnRlci5waXBlYWJsZShDQVJUX05PUk1BTElaRVIpXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjcmVhdGUoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgb2xkQ2FydElkPzogc3RyaW5nLFxuICAgIHRvTWVyZ2VDYXJ0R3VpZD86IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPENhcnQ+IHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLmdldENhcnRFbmRwb2ludCh1c2VySWQpO1xuICAgIGNvbnN0IHRvQWRkID0gSlNPTi5zdHJpbmdpZnkoe30pO1xuICAgIGxldCBxdWVyeVN0cmluZyA9ICdmaWVsZHM9JyArIEJBU0lDX1BBUkFNUztcblxuICAgIGlmIChvbGRDYXJ0SWQpIHtcbiAgICAgIHF1ZXJ5U3RyaW5nID0gcXVlcnlTdHJpbmcgKyAnJm9sZENhcnRJZD0nICsgb2xkQ2FydElkO1xuICAgIH1cbiAgICBpZiAodG9NZXJnZUNhcnRHdWlkKSB7XG4gICAgICBxdWVyeVN0cmluZyA9IHF1ZXJ5U3RyaW5nICsgJyZ0b01lcmdlQ2FydEd1aWQ9JyArIHRvTWVyZ2VDYXJ0R3VpZDtcbiAgICB9XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoe1xuICAgICAgZnJvbVN0cmluZzogcXVlcnlTdHJpbmcsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAucG9zdDxDYXJ0Pih1cmwsIHRvQWRkLCB7IHBhcmFtczogcGFyYW1zIH0pXG4gICAgICAucGlwZShjYXRjaEVycm9yKChlcnJvcjogYW55KSA9PiB0aHJvd0Vycm9yKGVycm9yLmpzb24oKSkpKTtcbiAgfVxufVxuIl19
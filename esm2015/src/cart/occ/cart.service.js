/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { CustomEncoder } from './custom.encoder';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { OccEndpointsService } from '../../occ/services/occ-endpoints.service';
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
export class OccCartService {
    /**
     * @param {?} http
     * @param {?} occEndpoints
     */
    constructor(http, occEndpoints) {
        this.http = http;
        this.occEndpoints = occEndpoints;
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
    loadAllCarts(userId, details) {
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
        return this.http
            .get(url, { params: params })
            .pipe(catchError((error) => throwError(error)));
    }
    /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?=} details
     * @return {?}
     */
    loadCart(userId, cartId, details) {
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
            return this.loadAllCarts(userId, details).pipe(map(cartsData => {
                if (cartsData && cartsData.carts) {
                    /** @type {?} */
                    const activeCart = cartsData.carts.find(cart => {
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
            return this.http
                .get(url, { params: params })
                .pipe(catchError((error) => throwError(error)));
        }
    }
    /**
     * @param {?} userId
     * @param {?=} oldCartId
     * @param {?=} toMergeCartGuid
     * @return {?}
     */
    createCart(userId, oldCartId, toMergeCartGuid) {
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
    /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?} productCode
     * @param {?=} quantity
     * @return {?}
     */
    addEntry(userId, cartId, productCode, quantity = 1) {
        /** @type {?} */
        const toAdd = JSON.stringify({});
        /** @type {?} */
        const url = this.getCartEndpoint(userId) + cartId + '/entries';
        /** @type {?} */
        const params = new HttpParams({
            fromString: 'code=' + productCode + '&qty=' + quantity,
        });
        /** @type {?} */
        const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        return this.http
            .post(url, toAdd, { headers, params })
            .pipe(catchError((error) => throwError(error.json())));
    }
    /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?} entryNumber
     * @param {?} qty
     * @param {?=} pickupStore
     * @return {?}
     */
    updateEntry(userId, cartId, entryNumber, qty, pickupStore) {
        /** @type {?} */
        const url = this.getCartEndpoint(userId) + cartId + '/entries/' + entryNumber;
        /** @type {?} */
        let queryString = 'qty=' + qty;
        if (pickupStore) {
            queryString = queryString + '&pickupStore=' + pickupStore;
        }
        /** @type {?} */
        const params = new HttpParams({
            fromString: queryString,
        });
        /** @type {?} */
        const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        return this.http
            .patch(url, {}, { headers, params })
            .pipe(catchError((error) => throwError(error.json())));
    }
    /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?} entryNumber
     * @return {?}
     */
    removeEntry(userId, cartId, entryNumber) {
        /** @type {?} */
        const url = this.getCartEndpoint(userId) + cartId + '/entries/' + entryNumber;
        /** @type {?} */
        const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        return this.http
            .delete(url, { headers })
            .pipe(catchError((error) => throwError(error.json())));
    }
    /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?} address
     * @return {?}
     */
    createAddressOnCart(userId, cartId, address) {
        return this.http
            .post(this.getCartEndpoint(userId) + cartId + '/addresses/delivery', address, {
            headers: new HttpHeaders().set('Content-Type', 'application/json'),
        })
            .pipe(catchError((error) => throwError(error.json())));
    }
    /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?} addressId
     * @return {?}
     */
    setDeliveryAddress(userId, cartId, addressId) {
        return this.http
            .put(this.getCartEndpoint(userId) + cartId + '/addresses/delivery', {}, {
            params: { addressId: addressId },
        })
            .pipe(catchError((error) => throwError(error.json())));
    }
    /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?} deliveryModeId
     * @return {?}
     */
    setDeliveryMode(userId, cartId, deliveryModeId) {
        return this.http
            .put(this.getCartEndpoint(userId) + cartId + '/deliverymode', {}, {
            params: { deliveryModeId: deliveryModeId },
        })
            .pipe(catchError((error) => throwError(error.json())));
    }
    /**
     * @param {?} userId
     * @param {?} cartId
     * @return {?}
     */
    getDeliveryMode(userId, cartId) {
        return this.http
            .get(this.getCartEndpoint(userId) + cartId + '/deliverymode')
            .pipe(catchError((error) => throwError(error.json())));
    }
    /**
     * @param {?} userId
     * @param {?} cartId
     * @return {?}
     */
    getSupportedDeliveryModes(userId, cartId) {
        return this.http
            .get(this.getCartEndpoint(userId) + cartId + '/deliverymodes')
            .pipe(catchError((error) => throwError(error.json())));
    }
    /**
     * @param {?} userId
     * @param {?} cartId
     * @return {?}
     */
    getPaymentProviderSubInfo(userId, cartId) {
        return this.http
            .get(this.getCartEndpoint(userId) +
            cartId +
            '/payment/sop/request?responseUrl=sampleUrl')
            .pipe(catchError((error) => throwError(error.json())));
    }
    /**
     * @param {?} postUrl
     * @param {?} parameters
     * @return {?}
     */
    createSubWithPaymentProvider(postUrl, parameters) {
        /** @type {?} */
        const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            Accept: 'text/html',
        });
        /** @type {?} */
        let httpParams = new HttpParams({ encoder: new CustomEncoder() });
        Object.keys(parameters).forEach(key => {
            httpParams = httpParams.append(key, parameters[key]);
        });
        return this.http.post(postUrl, httpParams, {
            headers,
            responseType: 'text',
        });
    }
    /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?} parameters
     * @return {?}
     */
    createPaymentDetails(userId, cartId, parameters) {
        /** @type {?} */
        let httpParams = new HttpParams({ encoder: new CustomEncoder() });
        Object.keys(parameters).forEach(key => {
            httpParams = httpParams.append(key, parameters[key]);
        });
        /** @type {?} */
        const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        return this.http
            .post(this.getCartEndpoint(userId) + cartId + '/payment/sop/response', httpParams, { headers })
            .pipe(catchError((error) => throwError(error)));
    }
    /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?} paymentDetailsId
     * @return {?}
     */
    setPaymentDetails(userId, cartId, paymentDetailsId) {
        return this.http
            .put(this.getCartEndpoint(userId) + cartId + '/paymentdetails', {}, {
            params: { paymentDetailsId: paymentDetailsId },
        })
            .pipe(catchError((error) => throwError(error.json())));
    }
}
OccCartService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
OccCartService.ctorParameters = () => [
    { type: HttpClient },
    { type: OccEndpointsService }
];
if (false) {
    /**
     * @type {?}
     * @protected
     */
    OccCartService.prototype.http;
    /**
     * @type {?}
     * @private
     */
    OccCartService.prototype.occEndpoints;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NhcnQvb2NjL2NhcnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUM5QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUzNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVqRCxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMzRSxPQUFPLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDOzs7TUFHekUsWUFBWSxHQUNoQiwyREFBMkQ7SUFDM0QsMkRBQTJEOzs7TUFHdkQsY0FBYyxHQUNsQiw4R0FBOEc7SUFDOUcsa0dBQWtHO0lBQ2xHLGtJQUFrSTtJQUNsSSxzR0FBc0c7SUFDdEcsa0RBQWtEO0FBR3BELE1BQU0sT0FBTyxjQUFjOzs7OztJQUN6QixZQUNZLElBQWdCLEVBQ2xCLFlBQWlDO1FBRC9CLFNBQUksR0FBSixJQUFJLENBQVk7UUFDbEIsaUJBQVksR0FBWixZQUFZLENBQXFCO0lBQ3hDLENBQUM7Ozs7OztJQUVNLGVBQWUsQ0FBQyxNQUFjOztjQUNoQyxZQUFZLEdBQUcsUUFBUSxHQUFHLE1BQU0sR0FBRyxTQUFTO1FBQ2xELE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDckQsQ0FBQzs7Ozs7O0lBRU0sWUFBWSxDQUFDLE1BQWMsRUFBRSxPQUFpQjs7Y0FDN0MsR0FBRyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDOztjQUNsQyxNQUFNLEdBQUcs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QyxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7OztZQTdSRixVQUFVOzs7O1lBakJGLFVBQVU7WUFFVixtQkFBbUI7Ozs7Ozs7SUFrQnhCLDhCQUEwQjs7Ozs7SUFDMUIsc0NBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdGhyb3dFcnJvciwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ2FydExpc3QsXG4gIENhcnQsXG4gIENhcnRNb2RpZmljYXRpb24sXG4gIEFkZHJlc3MsXG4gIERlbGl2ZXJ5TW9kZUxpc3QsXG4gIFBheW1lbnREZXRhaWxzLFxufSBmcm9tICcuLi8uLi9vY2Mvb2NjLW1vZGVscy9vY2MubW9kZWxzJztcbmltcG9ydCB7IEN1c3RvbUVuY29kZXIgfSBmcm9tICcuL2N1c3RvbS5lbmNvZGVyJztcblxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMsIEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBPY2NFbmRwb2ludHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vb2NjL3NlcnZpY2VzL29jYy1lbmRwb2ludHMuc2VydmljZSc7XG5cbi8vIGZvciBtaW5pIGNhcnRcbmNvbnN0IEJBU0lDX1BBUkFNUyA9XG4gICdERUZBVUxULGRlbGl2ZXJ5SXRlbXNRdWFudGl0eSx0b3RhbFByaWNlKGZvcm1hdHRlZFZhbHVlKSwnICtcbiAgJ2VudHJpZXModG90YWxQcmljZShmb3JtYXR0ZWRWYWx1ZSkscHJvZHVjdChpbWFnZXMoRlVMTCkpKSc7XG5cbi8vIGZvciBjYXJ0IGRldGFpbHMgcGFnZVxuY29uc3QgREVUQUlMU19QQVJBTVMgPVxuICAnREVGQVVMVCxwb3RlbnRpYWxQcm9kdWN0UHJvbW90aW9ucyxhcHBsaWVkUHJvZHVjdFByb21vdGlvbnMscG90ZW50aWFsT3JkZXJQcm9tb3Rpb25zLGFwcGxpZWRPcmRlclByb21vdGlvbnMsJyArXG4gICdlbnRyaWVzKHRvdGFsUHJpY2UoZm9ybWF0dGVkVmFsdWUpLHByb2R1Y3QoaW1hZ2VzKEZVTEwpLHN0b2NrKEZVTEwpKSxiYXNlUHJpY2UoZm9ybWF0dGVkVmFsdWUpKSwnICtcbiAgJ3RvdGFsUHJpY2UoZm9ybWF0dGVkVmFsdWUpLHRvdGFsSXRlbXMsdG90YWxQcmljZVdpdGhUYXgoZm9ybWF0dGVkVmFsdWUpLHRvdGFsRGlzY291bnRzKGZvcm1hdHRlZFZhbHVlKSxzdWJUb3RhbChmb3JtYXR0ZWRWYWx1ZSksJyArXG4gICdkZWxpdmVyeUl0ZW1zUXVhbnRpdHksZGVsaXZlcnlDb3N0KGZvcm1hdHRlZFZhbHVlKSx0b3RhbFRheChmb3JtYXR0ZWRWYWx1ZSkscGlja3VwSXRlbXNRdWFudGl0eSxuZXQsJyArXG4gICdhcHBsaWVkVm91Y2hlcnMscHJvZHVjdERpc2NvdW50cyhmb3JtYXR0ZWRWYWx1ZSknO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT2NjQ2FydFNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgaHR0cDogSHR0cENsaWVudCxcbiAgICBwcml2YXRlIG9jY0VuZHBvaW50czogT2NjRW5kcG9pbnRzU2VydmljZVxuICApIHt9XG5cbiAgcHJvdGVjdGVkIGdldENhcnRFbmRwb2ludCh1c2VySWQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgY2FydEVuZHBvaW50ID0gJ3VzZXJzLycgKyB1c2VySWQgKyAnL2NhcnRzLyc7XG4gICAgcmV0dXJuIHRoaXMub2NjRW5kcG9pbnRzLmdldEVuZHBvaW50KGNhcnRFbmRwb2ludCk7XG4gIH1cblxuICBwdWJsaWMgbG9hZEFsbENhcnRzKHVzZXJJZDogc3RyaW5nLCBkZXRhaWxzPzogYm9vbGVhbik6IE9ic2VydmFibGU8Q2FydExpc3Q+IHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLmdldENhcnRFbmRwb2ludCh1c2VySWQpO1xuICAgIGNvbnN0IHBhcmFtcyA9IGRldGFpbHNcbiAgICAgID8gbmV3IEh0dHBQYXJhbXMoe1xuICAgICAgICAgIGZyb21TdHJpbmc6ICdmaWVsZHM9Y2FydHMoJyArIERFVEFJTFNfUEFSQU1TICsgJyxzYXZlVGltZSknLFxuICAgICAgICB9KVxuICAgICAgOiBuZXcgSHR0cFBhcmFtcyh7XG4gICAgICAgICAgZnJvbVN0cmluZzogJ2ZpZWxkcz1jYXJ0cygnICsgQkFTSUNfUEFSQU1TICsgJyxzYXZlVGltZSknLFxuICAgICAgICB9KTtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0PENhcnRMaXN0Pih1cmwsIHsgcGFyYW1zOiBwYXJhbXMgfSlcbiAgICAgIC5waXBlKGNhdGNoRXJyb3IoKGVycm9yOiBhbnkpID0+IHRocm93RXJyb3IoZXJyb3IpKSk7XG4gIH1cblxuICBwdWJsaWMgbG9hZENhcnQoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgY2FydElkOiBzdHJpbmcsXG4gICAgZGV0YWlscz86IGJvb2xlYW5cbiAgKTogT2JzZXJ2YWJsZTxDYXJ0PiB7XG4gICAgY29uc3QgdXJsID0gdGhpcy5nZXRDYXJ0RW5kcG9pbnQodXNlcklkKSArIGNhcnRJZDtcbiAgICBjb25zdCBwYXJhbXMgPSBkZXRhaWxzXG4gICAgICA/IG5ldyBIdHRwUGFyYW1zKHtcbiAgICAgICAgICBmcm9tU3RyaW5nOiAnZmllbGRzPScgKyBERVRBSUxTX1BBUkFNUyxcbiAgICAgICAgfSlcbiAgICAgIDogbmV3IEh0dHBQYXJhbXMoe1xuICAgICAgICAgIGZyb21TdHJpbmc6ICdmaWVsZHM9JyArIEJBU0lDX1BBUkFNUyxcbiAgICAgICAgfSk7XG5cbiAgICBpZiAoY2FydElkID09PSAnY3VycmVudCcpIHtcbiAgICAgIHJldHVybiB0aGlzLmxvYWRBbGxDYXJ0cyh1c2VySWQsIGRldGFpbHMpLnBpcGUoXG4gICAgICAgIG1hcChjYXJ0c0RhdGEgPT4ge1xuICAgICAgICAgIGlmIChjYXJ0c0RhdGEgJiYgY2FydHNEYXRhLmNhcnRzKSB7XG4gICAgICAgICAgICBjb25zdCBhY3RpdmVDYXJ0ID0gY2FydHNEYXRhLmNhcnRzLmZpbmQoY2FydCA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBjYXJ0WydzYXZlVGltZSddID09PSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBhY3RpdmVDYXJ0O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAgIC5nZXQ8Q2FydD4odXJsLCB7IHBhcmFtczogcGFyYW1zIH0pXG4gICAgICAgIC5waXBlKGNhdGNoRXJyb3IoKGVycm9yOiBhbnkpID0+IHRocm93RXJyb3IoZXJyb3IpKSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGNyZWF0ZUNhcnQoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgb2xkQ2FydElkPzogc3RyaW5nLFxuICAgIHRvTWVyZ2VDYXJ0R3VpZD86IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPENhcnQ+IHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLmdldENhcnRFbmRwb2ludCh1c2VySWQpO1xuICAgIGNvbnN0IHRvQWRkID0gSlNPTi5zdHJpbmdpZnkoe30pO1xuICAgIGxldCBxdWVyeVN0cmluZyA9ICdmaWVsZHM9JyArIEJBU0lDX1BBUkFNUztcblxuICAgIGlmIChvbGRDYXJ0SWQpIHtcbiAgICAgIHF1ZXJ5U3RyaW5nID0gcXVlcnlTdHJpbmcgKyAnJm9sZENhcnRJZD0nICsgb2xkQ2FydElkO1xuICAgIH1cbiAgICBpZiAodG9NZXJnZUNhcnRHdWlkKSB7XG4gICAgICBxdWVyeVN0cmluZyA9IHF1ZXJ5U3RyaW5nICsgJyZ0b01lcmdlQ2FydEd1aWQ9JyArIHRvTWVyZ2VDYXJ0R3VpZDtcbiAgICB9XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoe1xuICAgICAgZnJvbVN0cmluZzogcXVlcnlTdHJpbmcsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAucG9zdDxDYXJ0Pih1cmwsIHRvQWRkLCB7IHBhcmFtczogcGFyYW1zIH0pXG4gICAgICAucGlwZShjYXRjaEVycm9yKChlcnJvcjogYW55KSA9PiB0aHJvd0Vycm9yKGVycm9yLmpzb24oKSkpKTtcbiAgfVxuXG4gIHB1YmxpYyBhZGRFbnRyeShcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBjYXJ0SWQ6IHN0cmluZyxcbiAgICBwcm9kdWN0Q29kZTogc3RyaW5nLFxuICAgIHF1YW50aXR5OiBudW1iZXIgPSAxXG4gICk6IE9ic2VydmFibGU8Q2FydE1vZGlmaWNhdGlvbj4ge1xuICAgIGNvbnN0IHRvQWRkID0gSlNPTi5zdHJpbmdpZnkoe30pO1xuXG4gICAgY29uc3QgdXJsID0gdGhpcy5nZXRDYXJ0RW5kcG9pbnQodXNlcklkKSArIGNhcnRJZCArICcvZW50cmllcyc7XG5cbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgSHR0cFBhcmFtcyh7XG4gICAgICBmcm9tU3RyaW5nOiAnY29kZT0nICsgcHJvZHVjdENvZGUgKyAnJnF0eT0nICsgcXVhbnRpdHksXG4gICAgfSk7XG5cbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5wb3N0PENhcnRNb2RpZmljYXRpb24+KHVybCwgdG9BZGQsIHsgaGVhZGVycywgcGFyYW1zIH0pXG4gICAgICAucGlwZShjYXRjaEVycm9yKChlcnJvcjogYW55KSA9PiB0aHJvd0Vycm9yKGVycm9yLmpzb24oKSkpKTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVFbnRyeShcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBjYXJ0SWQ6IHN0cmluZyxcbiAgICBlbnRyeU51bWJlcjogc3RyaW5nLFxuICAgIHF0eTogbnVtYmVyLFxuICAgIHBpY2t1cFN0b3JlPzogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8Q2FydE1vZGlmaWNhdGlvbj4ge1xuICAgIGNvbnN0IHVybCA9XG4gICAgICB0aGlzLmdldENhcnRFbmRwb2ludCh1c2VySWQpICsgY2FydElkICsgJy9lbnRyaWVzLycgKyBlbnRyeU51bWJlcjtcblxuICAgIGxldCBxdWVyeVN0cmluZyA9ICdxdHk9JyArIHF0eTtcbiAgICBpZiAocGlja3VwU3RvcmUpIHtcbiAgICAgIHF1ZXJ5U3RyaW5nID0gcXVlcnlTdHJpbmcgKyAnJnBpY2t1cFN0b3JlPScgKyBwaWNrdXBTdG9yZTtcbiAgICB9XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoe1xuICAgICAgZnJvbVN0cmluZzogcXVlcnlTdHJpbmcsXG4gICAgfSk7XG5cbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5wYXRjaDxDYXJ0TW9kaWZpY2F0aW9uPih1cmwsIHt9LCB7IGhlYWRlcnMsIHBhcmFtcyB9KVxuICAgICAgLnBpcGUoY2F0Y2hFcnJvcigoZXJyb3I6IGFueSkgPT4gdGhyb3dFcnJvcihlcnJvci5qc29uKCkpKSk7XG4gIH1cblxuICBwdWJsaWMgcmVtb3ZlRW50cnkoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgY2FydElkOiBzdHJpbmcsXG4gICAgZW50cnlOdW1iZXI6IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnN0IHVybCA9XG4gICAgICB0aGlzLmdldENhcnRFbmRwb2ludCh1c2VySWQpICsgY2FydElkICsgJy9lbnRyaWVzLycgKyBlbnRyeU51bWJlcjtcblxuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmRlbGV0ZSh1cmwsIHsgaGVhZGVycyB9KVxuICAgICAgLnBpcGUoY2F0Y2hFcnJvcigoZXJyb3I6IGFueSkgPT4gdGhyb3dFcnJvcihlcnJvci5qc29uKCkpKSk7XG4gIH1cblxuICBwdWJsaWMgY3JlYXRlQWRkcmVzc09uQ2FydChcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBjYXJ0SWQ6IHN0cmluZyxcbiAgICBhZGRyZXNzOiBhbnlcbiAgKTogT2JzZXJ2YWJsZTxBZGRyZXNzPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLnBvc3Q8QWRkcmVzcz4oXG4gICAgICAgIHRoaXMuZ2V0Q2FydEVuZHBvaW50KHVzZXJJZCkgKyBjYXJ0SWQgKyAnL2FkZHJlc3Nlcy9kZWxpdmVyeScsXG4gICAgICAgIGFkZHJlc3MsXG4gICAgICAgIHtcbiAgICAgICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoKS5zZXQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyksXG4gICAgICAgIH1cbiAgICAgIClcbiAgICAgIC5waXBlKGNhdGNoRXJyb3IoKGVycm9yOiBhbnkpID0+IHRocm93RXJyb3IoZXJyb3IuanNvbigpKSkpO1xuICB9XG5cbiAgcHVibGljIHNldERlbGl2ZXJ5QWRkcmVzcyhcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBjYXJ0SWQ6IHN0cmluZyxcbiAgICBhZGRyZXNzSWQ6IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5wdXQoXG4gICAgICAgIHRoaXMuZ2V0Q2FydEVuZHBvaW50KHVzZXJJZCkgKyBjYXJ0SWQgKyAnL2FkZHJlc3Nlcy9kZWxpdmVyeScsXG4gICAgICAgIHt9LFxuICAgICAgICB7XG4gICAgICAgICAgcGFyYW1zOiB7IGFkZHJlc3NJZDogYWRkcmVzc0lkIH0sXG4gICAgICAgIH1cbiAgICAgIClcbiAgICAgIC5waXBlKGNhdGNoRXJyb3IoKGVycm9yOiBhbnkpID0+IHRocm93RXJyb3IoZXJyb3IuanNvbigpKSkpO1xuICB9XG5cbiAgcHVibGljIHNldERlbGl2ZXJ5TW9kZShcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBjYXJ0SWQ6IHN0cmluZyxcbiAgICBkZWxpdmVyeU1vZGVJZDogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLnB1dChcbiAgICAgICAgdGhpcy5nZXRDYXJ0RW5kcG9pbnQodXNlcklkKSArIGNhcnRJZCArICcvZGVsaXZlcnltb2RlJyxcbiAgICAgICAge30sXG4gICAgICAgIHtcbiAgICAgICAgICBwYXJhbXM6IHsgZGVsaXZlcnlNb2RlSWQ6IGRlbGl2ZXJ5TW9kZUlkIH0sXG4gICAgICAgIH1cbiAgICAgIClcbiAgICAgIC5waXBlKGNhdGNoRXJyb3IoKGVycm9yOiBhbnkpID0+IHRocm93RXJyb3IoZXJyb3IuanNvbigpKSkpO1xuICB9XG5cbiAgcHVibGljIGdldERlbGl2ZXJ5TW9kZSh1c2VySWQ6IHN0cmluZywgY2FydElkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5nZXQodGhpcy5nZXRDYXJ0RW5kcG9pbnQodXNlcklkKSArIGNhcnRJZCArICcvZGVsaXZlcnltb2RlJylcbiAgICAgIC5waXBlKGNhdGNoRXJyb3IoKGVycm9yOiBhbnkpID0+IHRocm93RXJyb3IoZXJyb3IuanNvbigpKSkpO1xuICB9XG5cbiAgcHVibGljIGdldFN1cHBvcnRlZERlbGl2ZXJ5TW9kZXMoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgY2FydElkOiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxEZWxpdmVyeU1vZGVMaXN0PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldDxEZWxpdmVyeU1vZGVMaXN0PihcbiAgICAgICAgdGhpcy5nZXRDYXJ0RW5kcG9pbnQodXNlcklkKSArIGNhcnRJZCArICcvZGVsaXZlcnltb2RlcydcbiAgICAgIClcbiAgICAgIC5waXBlKGNhdGNoRXJyb3IoKGVycm9yOiBhbnkpID0+IHRocm93RXJyb3IoZXJyb3IuanNvbigpKSkpO1xuICB9XG5cbiAgcHVibGljIGdldFBheW1lbnRQcm92aWRlclN1YkluZm8oXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgY2FydElkOiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0KFxuICAgICAgICB0aGlzLmdldENhcnRFbmRwb2ludCh1c2VySWQpICtcbiAgICAgICAgICBjYXJ0SWQgK1xuICAgICAgICAgICcvcGF5bWVudC9zb3AvcmVxdWVzdD9yZXNwb25zZVVybD1zYW1wbGVVcmwnXG4gICAgICApXG4gICAgICAucGlwZShjYXRjaEVycm9yKChlcnJvcjogYW55KSA9PiB0aHJvd0Vycm9yKGVycm9yLmpzb24oKSkpKTtcbiAgfVxuXG4gIHB1YmxpYyBjcmVhdGVTdWJXaXRoUGF5bWVudFByb3ZpZGVyKFxuICAgIHBvc3RVcmw6IHN0cmluZyxcbiAgICBwYXJhbWV0ZXJzOiBhbnlcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgICAgIEFjY2VwdDogJ3RleHQvaHRtbCcsXG4gICAgfSk7XG4gICAgbGV0IGh0dHBQYXJhbXMgPSBuZXcgSHR0cFBhcmFtcyh7IGVuY29kZXI6IG5ldyBDdXN0b21FbmNvZGVyKCkgfSk7XG4gICAgT2JqZWN0LmtleXMocGFyYW1ldGVycykuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgaHR0cFBhcmFtcyA9IGh0dHBQYXJhbXMuYXBwZW5kKGtleSwgcGFyYW1ldGVyc1trZXldKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChwb3N0VXJsLCBodHRwUGFyYW1zLCB7XG4gICAgICBoZWFkZXJzLFxuICAgICAgcmVzcG9uc2VUeXBlOiAndGV4dCcsXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgY3JlYXRlUGF5bWVudERldGFpbHMoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgY2FydElkOiBzdHJpbmcsXG4gICAgcGFyYW1ldGVyczogYW55XG4gICk6IE9ic2VydmFibGU8UGF5bWVudERldGFpbHM+IHtcbiAgICBsZXQgaHR0cFBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKHsgZW5jb2RlcjogbmV3IEN1c3RvbUVuY29kZXIoKSB9KTtcbiAgICBPYmplY3Qua2V5cyhwYXJhbWV0ZXJzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICBodHRwUGFyYW1zID0gaHR0cFBhcmFtcy5hcHBlbmQoa2V5LCBwYXJhbWV0ZXJzW2tleV0pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAucG9zdDxQYXltZW50RGV0YWlscz4oXG4gICAgICAgIHRoaXMuZ2V0Q2FydEVuZHBvaW50KHVzZXJJZCkgKyBjYXJ0SWQgKyAnL3BheW1lbnQvc29wL3Jlc3BvbnNlJyxcbiAgICAgICAgaHR0cFBhcmFtcyxcbiAgICAgICAgeyBoZWFkZXJzIH1cbiAgICAgIClcbiAgICAgIC5waXBlKGNhdGNoRXJyb3IoKGVycm9yOiBhbnkpID0+IHRocm93RXJyb3IoZXJyb3IpKSk7XG4gIH1cblxuICBwdWJsaWMgc2V0UGF5bWVudERldGFpbHMoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgY2FydElkOiBzdHJpbmcsXG4gICAgcGF5bWVudERldGFpbHNJZDogYW55XG4gICk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLnB1dChcbiAgICAgICAgdGhpcy5nZXRDYXJ0RW5kcG9pbnQodXNlcklkKSArIGNhcnRJZCArICcvcGF5bWVudGRldGFpbHMnLFxuICAgICAgICB7fSxcbiAgICAgICAge1xuICAgICAgICAgIHBhcmFtczogeyBwYXltZW50RGV0YWlsc0lkOiBwYXltZW50RGV0YWlsc0lkIH0sXG4gICAgICAgIH1cbiAgICAgIClcbiAgICAgIC5waXBlKGNhdGNoRXJyb3IoKGVycm9yOiBhbnkpID0+IHRocm93RXJyb3IoZXJyb3IuanNvbigpKSkpO1xuICB9XG59XG4iXX0=
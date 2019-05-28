/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, pluck } from 'rxjs/operators';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
import { ConverterService } from '../../../util/converter.service';
import { DELIVERY_MODE_NORMALIZER } from '../../../checkout/connectors/delivery/converters';
import { ADDRESS_NORMALIZER, ADDRESS_SERIALIZER, } from '../../../user/connectors/address/converters';
export class OccCheckoutDeliveryAdapter {
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
     * @param {?} cartId
     * @param {?} address
     * @return {?}
     */
    createAddress(userId, cartId, address) {
        address = this.converter.convert(address, ADDRESS_SERIALIZER);
        return this.http
            .post(this.getCartEndpoint(userId) + cartId + '/addresses/delivery', address, {
            headers: new HttpHeaders().set('Content-Type', 'application/json'),
        })
            .pipe(catchError((error) => throwError(error.json())), this.converter.pipeable(ADDRESS_NORMALIZER));
    }
    /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?} addressId
     * @return {?}
     */
    setAddress(userId, cartId, addressId) {
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
    setMode(userId, cartId, deliveryModeId) {
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
    getMode(userId, cartId) {
        return this.http
            .get(this.getCartEndpoint(userId) + cartId + '/deliverymode')
            .pipe(catchError((error) => throwError(error.json())), this.converter.pipeable(DELIVERY_MODE_NORMALIZER));
    }
    /**
     * @param {?} userId
     * @param {?} cartId
     * @return {?}
     */
    getSupportedModes(userId, cartId) {
        return this.http
            .get(this.getCartEndpoint(userId) + cartId + '/deliverymodes')
            .pipe(catchError((error) => throwError(error.json())), pluck('deliveryModes'), this.converter.pipeableMany(DELIVERY_MODE_NORMALIZER));
    }
}
OccCheckoutDeliveryAdapter.decorators = [
    { type: Injectable }
];
/** @nocollapse */
OccCheckoutDeliveryAdapter.ctorParameters = () => [
    { type: HttpClient },
    { type: OccEndpointsService },
    { type: ConverterService }
];
if (false) {
    /**
     * @type {?}
     * @protected
     */
    OccCheckoutDeliveryAdapter.prototype.http;
    /**
     * @type {?}
     * @protected
     */
    OccCheckoutDeliveryAdapter.prototype.occEndpoints;
    /**
     * @type {?}
     * @protected
     */
    OccCheckoutDeliveryAdapter.prototype.converter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNoZWNrb3V0LWRlbGl2ZXJ5LmFkYXB0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvb2NjL2FkYXB0ZXJzL2NoZWNrb3V0L29jYy1jaGVja291dC1kZWxpdmVyeS5hZGFwdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFHOUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRTNFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBRzVGLE9BQU8sRUFDTCxrQkFBa0IsRUFDbEIsa0JBQWtCLEdBQ25CLE1BQU0sNkNBQTZDLENBQUM7QUFHckQsTUFBTSxPQUFPLDBCQUEwQjs7Ozs7O0lBQ3JDLFlBQ1ksSUFBZ0IsRUFDaEIsWUFBaUMsRUFDakMsU0FBMkI7UUFGM0IsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixpQkFBWSxHQUFaLFlBQVksQ0FBcUI7UUFDakMsY0FBUyxHQUFULFNBQVMsQ0FBa0I7SUFDcEMsQ0FBQzs7Ozs7O0lBRU0sZUFBZSxDQUFDLE1BQWM7O2NBQ2hDLFlBQVksR0FBRyxRQUFRLEdBQUcsTUFBTSxHQUFHLFNBQVM7UUFDbEQsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNyRCxDQUFDOzs7Ozs7O0lBRU0sYUFBYSxDQUNsQixNQUFjLEVBQ2Qs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dCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBPY2MgfSBmcm9tICcuLi8uLi9vY2MtbW9kZWxzL29jYy5tb2RlbHMnO1xuXG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIHBsdWNrIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgT2NjRW5kcG9pbnRzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL29jYy1lbmRwb2ludHMuc2VydmljZSc7XG5pbXBvcnQgeyBDaGVja291dERlbGl2ZXJ5QWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL2NoZWNrb3V0L2Nvbm5lY3RvcnMvZGVsaXZlcnkvY2hlY2tvdXQtZGVsaXZlcnkuYWRhcHRlcic7XG5pbXBvcnQgeyBDb252ZXJ0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9jb252ZXJ0ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBERUxJVkVSWV9NT0RFX05PUk1BTElaRVIgfSBmcm9tICcuLi8uLi8uLi9jaGVja291dC9jb25uZWN0b3JzL2RlbGl2ZXJ5L2NvbnZlcnRlcnMnO1xuaW1wb3J0IHsgQWRkcmVzcyB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2FkZHJlc3MubW9kZWwnO1xuaW1wb3J0IHsgRGVsaXZlcnlNb2RlIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvb3JkZXIubW9kZWwnO1xuaW1wb3J0IHtcbiAgQUREUkVTU19OT1JNQUxJWkVSLFxuICBBRERSRVNTX1NFUklBTElaRVIsXG59IGZyb20gJy4uLy4uLy4uL3VzZXIvY29ubmVjdG9ycy9hZGRyZXNzL2NvbnZlcnRlcnMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT2NjQ2hlY2tvdXREZWxpdmVyeUFkYXB0ZXIgaW1wbGVtZW50cyBDaGVja291dERlbGl2ZXJ5QWRhcHRlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByb3RlY3RlZCBvY2NFbmRwb2ludHM6IE9jY0VuZHBvaW50c1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNvbnZlcnRlcjogQ29udmVydGVyU2VydmljZVxuICApIHt9XG5cbiAgcHJvdGVjdGVkIGdldENhcnRFbmRwb2ludCh1c2VySWQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgY2FydEVuZHBvaW50ID0gJ3VzZXJzLycgKyB1c2VySWQgKyAnL2NhcnRzLyc7XG4gICAgcmV0dXJuIHRoaXMub2NjRW5kcG9pbnRzLmdldEVuZHBvaW50KGNhcnRFbmRwb2ludCk7XG4gIH1cblxuICBwdWJsaWMgY3JlYXRlQWRkcmVzcyhcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBjYXJ0SWQ6IHN0cmluZyxcbiAgICBhZGRyZXNzOiBBZGRyZXNzXG4gICk6IE9ic2VydmFibGU8QWRkcmVzcz4ge1xuICAgIGFkZHJlc3MgPSB0aGlzLmNvbnZlcnRlci5jb252ZXJ0KGFkZHJlc3MsIEFERFJFU1NfU0VSSUFMSVpFUik7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAucG9zdDxPY2MuQWRkcmVzcz4oXG4gICAgICAgIHRoaXMuZ2V0Q2FydEVuZHBvaW50KHVzZXJJZCkgKyBjYXJ0SWQgKyAnL2FkZHJlc3Nlcy9kZWxpdmVyeScsXG4gICAgICAgIGFkZHJlc3MsXG4gICAgICAgIHtcbiAgICAgICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoKS5zZXQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyksXG4gICAgICAgIH1cbiAgICAgIClcbiAgICAgIC5waXBlKFxuICAgICAgICBjYXRjaEVycm9yKChlcnJvcjogYW55KSA9PiB0aHJvd0Vycm9yKGVycm9yLmpzb24oKSkpLFxuICAgICAgICB0aGlzLmNvbnZlcnRlci5waXBlYWJsZShBRERSRVNTX05PUk1BTElaRVIpXG4gICAgICApO1xuICB9XG5cbiAgcHVibGljIHNldEFkZHJlc3MoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgY2FydElkOiBzdHJpbmcsXG4gICAgYWRkcmVzc0lkOiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAucHV0KFxuICAgICAgICB0aGlzLmdldENhcnRFbmRwb2ludCh1c2VySWQpICsgY2FydElkICsgJy9hZGRyZXNzZXMvZGVsaXZlcnknLFxuICAgICAgICB7fSxcbiAgICAgICAge1xuICAgICAgICAgIHBhcmFtczogeyBhZGRyZXNzSWQ6IGFkZHJlc3NJZCB9LFxuICAgICAgICB9XG4gICAgICApXG4gICAgICAucGlwZShjYXRjaEVycm9yKChlcnJvcjogYW55KSA9PiB0aHJvd0Vycm9yKGVycm9yLmpzb24oKSkpKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRNb2RlKFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIGNhcnRJZDogc3RyaW5nLFxuICAgIGRlbGl2ZXJ5TW9kZUlkOiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAucHV0KFxuICAgICAgICB0aGlzLmdldENhcnRFbmRwb2ludCh1c2VySWQpICsgY2FydElkICsgJy9kZWxpdmVyeW1vZGUnLFxuICAgICAgICB7fSxcbiAgICAgICAge1xuICAgICAgICAgIHBhcmFtczogeyBkZWxpdmVyeU1vZGVJZDogZGVsaXZlcnlNb2RlSWQgfSxcbiAgICAgICAgfVxuICAgICAgKVxuICAgICAgLnBpcGUoY2F0Y2hFcnJvcigoZXJyb3I6IGFueSkgPT4gdGhyb3dFcnJvcihlcnJvci5qc29uKCkpKSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0TW9kZSh1c2VySWQ6IHN0cmluZywgY2FydElkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5nZXQodGhpcy5nZXRDYXJ0RW5kcG9pbnQodXNlcklkKSArIGNhcnRJZCArICcvZGVsaXZlcnltb2RlJylcbiAgICAgIC5waXBlKFxuICAgICAgICBjYXRjaEVycm9yKChlcnJvcjogYW55KSA9PiB0aHJvd0Vycm9yKGVycm9yLmpzb24oKSkpLFxuICAgICAgICB0aGlzLmNvbnZlcnRlci5waXBlYWJsZShERUxJVkVSWV9NT0RFX05PUk1BTElaRVIpXG4gICAgICApO1xuICB9XG5cbiAgcHVibGljIGdldFN1cHBvcnRlZE1vZGVzKFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIGNhcnRJZDogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8RGVsaXZlcnlNb2RlW10+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0PE9jYy5EZWxpdmVyeU1vZGVMaXN0PihcbiAgICAgICAgdGhpcy5nZXRDYXJ0RW5kcG9pbnQodXNlcklkKSArIGNhcnRJZCArICcvZGVsaXZlcnltb2RlcydcbiAgICAgIClcbiAgICAgIC5waXBlKFxuICAgICAgICBjYXRjaEVycm9yKChlcnJvcjogYW55KSA9PiB0aHJvd0Vycm9yKGVycm9yLmpzb24oKSkpLFxuICAgICAgICBwbHVjaygnZGVsaXZlcnlNb2RlcycpLFxuICAgICAgICB0aGlzLmNvbnZlcnRlci5waXBlYWJsZU1hbnkoREVMSVZFUllfTU9ERV9OT1JNQUxJWkVSKVxuICAgICAgKTtcbiAgfVxufVxuIl19
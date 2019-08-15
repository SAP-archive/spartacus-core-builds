/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, pluck } from 'rxjs/operators';
import { CART_NORMALIZER } from '../../../cart/connectors/cart/converters';
import { FeatureConfigService } from '../../../features-config/services/feature-config.service';
import { ConverterService } from '../../../util/converter.service';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
// TODO 2.0: Remove
/** @type {?} */
const DETAILS_PARAMS = 'DEFAULT,potentialProductPromotions,appliedProductPromotions,potentialOrderPromotions,appliedOrderPromotions,' +
    'entries(totalPrice(formattedValue),product(images(FULL),stock(FULL)),basePrice(formattedValue),updateable),' +
    'totalPrice(formattedValue),totalItems,totalPriceWithTax(formattedValue),totalDiscounts(value,formattedValue),subTotal(formattedValue),' +
    'deliveryItemsQuantity,deliveryCost(formattedValue),totalTax(formattedValue),pickupItemsQuantity,net,' +
    'appliedVouchers,productDiscounts(formattedValue)';
export class OccCartAdapter {
    /**
     * @param {?} http
     * @param {?} occEndpointsService
     * @param {?} converterService
     * @param {?=} featureConfigService
     */
    constructor(http, occEndpointsService, converterService, featureConfigService) {
        this.http = http;
        this.occEndpointsService = occEndpointsService;
        this.converterService = converterService;
        this.featureConfigService = featureConfigService;
    }
    /**
     * @deprecated Since 1.1
     * Use configurable endpoints. Will be removed as of 2.0.
     * @protected
     * @param {?} userId
     * @return {?}
     */
    getCartEndpoint(userId) {
        /** @type {?} */
        const cartEndpoint = `users/${userId}/carts/`;
        return this.occEndpointsService.getEndpoint(cartEndpoint);
    }
    /**
     * @param {?} userId
     * @return {?}
     */
    loadAll(userId) {
        // TODO 2.0: Remove
        if (!this.featureConfigService.isEnabled('configurableOccEndpoints')) {
            return this.legacyLoadAll(userId);
        }
        return this.http
            .get(this.occEndpointsService.getUrl('carts', { userId }))
            .pipe(pluck('carts'), this.converterService.pipeableMany(CART_NORMALIZER));
    }
    /**
     * @param {?} userId
     * @param {?} cartId
     * @return {?}
     */
    load(userId, cartId) {
        if (cartId === 'current') {
            return this.loadAll(userId).pipe(map((/**
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
            // TODO 2.0: Remove
            if (!this.featureConfigService.isEnabled('configurableOccEndpoints')) {
                return this.legacyLoad(userId, cartId);
            }
            return this.http
                .get(this.occEndpointsService.getUrl('cart', { userId, cartId }))
                .pipe(this.converterService.pipeable(CART_NORMALIZER));
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
        const toAdd = JSON.stringify({});
        // TODO 2.0: Remove
        if (!this.featureConfigService.isEnabled('configurableOccEndpoints')) {
            return this.legacyCreate(userId, toAdd, oldCartId, toMergeCartGuid);
        }
        /** @type {?} */
        let params = {};
        if (oldCartId) {
            params = { oldCartId: oldCartId };
        }
        if (toMergeCartGuid) {
            params['toMergeCartGuid'] = toMergeCartGuid;
        }
        return this.http
            .post(this.occEndpointsService.getUrl('createCart', { userId }, params), toAdd)
            .pipe(this.converterService.pipeable(CART_NORMALIZER));
    }
    /**
     * @deprecated Since 1.1
     * Use configurable endpoints. Will be removed as of 2.0.
     * @private
     * @param {?} userId
     * @return {?}
     */
    legacyLoadAll(userId) {
        /** @type {?} */
        const url = this.getCartEndpoint(userId);
        /** @type {?} */
        const params = new HttpParams({
            fromString: `fields=carts(${DETAILS_PARAMS},saveTime)`,
        });
        return this.http.get(url, { params }).pipe(pluck('carts'), this.converterService.pipeableMany(CART_NORMALIZER));
    }
    /**
     * @deprecated Since 1.1
     * Use configurable endpoints. Will be removed as of 2.0.
     * @private
     * @param {?} userId
     * @param {?} cartId
     * @return {?}
     */
    legacyLoad(userId, cartId) {
        /** @type {?} */
        const url = this.getCartEndpoint(userId) + cartId;
        /** @type {?} */
        const params = new HttpParams({
            fromString: `fields=${DETAILS_PARAMS}`,
        });
        return this.http
            .get(url, { params })
            .pipe(this.converterService.pipeable(CART_NORMALIZER));
    }
    /**
     * @deprecated Since 1.1
     * Use configurable endpoints. Will be removed as of 2.0.
     * @private
     * @param {?} userId
     * @param {?} toAdd
     * @param {?=} oldCartId
     * @param {?=} toMergeCartGuid
     * @return {?}
     */
    legacyCreate(userId, toAdd, oldCartId, toMergeCartGuid) {
        /** @type {?} */
        const url = this.getCartEndpoint(userId);
        /** @type {?} */
        let queryString = `fields=${DETAILS_PARAMS}`;
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
        return this.http
            .post(url, toAdd, { params })
            .pipe(this.converterService.pipeable(CART_NORMALIZER));
    }
}
OccCartAdapter.decorators = [
    { type: Injectable }
];
/** @nocollapse */
OccCartAdapter.ctorParameters = () => [
    { type: HttpClient },
    { type: OccEndpointsService },
    { type: ConverterService },
    { type: FeatureConfigService }
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
    OccCartAdapter.prototype.occEndpointsService;
    /**
     * @type {?}
     * @protected
     */
    OccCartAdapter.prototype.converterService;
    /**
     * @type {?}
     * @protected
     */
    OccCartAdapter.prototype.featureConfigService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNhcnQuYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2MvYWRhcHRlcnMvY2FydC9vY2MtY2FydC5hZGFwdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzlELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU1QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDM0UsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFFaEcsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFbkUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7OztNQUdyRSxjQUFjLEdBQ2xCLDhHQUE4RztJQUM5Ryw2R0FBNkc7SUFDN0csd0lBQXdJO0lBQ3hJLHNHQUFzRztJQUN0RyxrREFBa0Q7QUFHcEQsTUFBTSxPQUFPLGNBQWM7Ozs7Ozs7SUFDekIsWUFDWSxJQUFnQixFQUNoQixtQkFBd0MsRUFDeEMsZ0JBQWtDLEVBQ2xDLG9CQUEyQztRQUgzQyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXVCO0lBQ3BELENBQUM7Ozs7Ozs7O0lBTU0sZUFBZSxDQUFDLE1BQWM7O2NBQ2hDLFlBQVksR0FBRyxTQUFTLE1BQU0sU0FBUztRQUM3QyxPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7SUFD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RUFBRSxXQUFXO1NBQ3hCLENBQUM7UUFFRixPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsSUFBSSxDQUFXLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQzthQUN0QyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0lBQzNELENBQUM7OztZQWpKRixVQUFVOzs7O1lBcEJGLFVBQVU7WUFVVixtQkFBbUI7WUFGbkIsZ0JBQWdCO1lBRmhCLG9CQUFvQjs7Ozs7OztJQWlCekIsOEJBQTBCOzs7OztJQUMxQiw2Q0FBa0Q7Ozs7O0lBQ2xELDBDQUE0Qzs7Ozs7SUFDNUMsOENBQXFEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgcGx1Y2sgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDYXJ0QWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL2NhcnQvY29ubmVjdG9ycy9jYXJ0L2NhcnQuYWRhcHRlcic7XG5pbXBvcnQgeyBDQVJUX05PUk1BTElaRVIgfSBmcm9tICcuLi8uLi8uLi9jYXJ0L2Nvbm5lY3RvcnMvY2FydC9jb252ZXJ0ZXJzJztcbmltcG9ydCB7IEZlYXR1cmVDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vZmVhdHVyZXMtY29uZmlnL3NlcnZpY2VzL2ZlYXR1cmUtY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2FydCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2NhcnQubW9kZWwnO1xuaW1wb3J0IHsgQ29udmVydGVyU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvY29udmVydGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgT2NjIH0gZnJvbSAnLi4vLi4vb2NjLW1vZGVscy9vY2MubW9kZWxzJztcbmltcG9ydCB7IE9jY0VuZHBvaW50c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9vY2MtZW5kcG9pbnRzLnNlcnZpY2UnO1xuXG4vLyBUT0RPIDIuMDogUmVtb3ZlXG5jb25zdCBERVRBSUxTX1BBUkFNUyA9XG4gICdERUZBVUxULHBvdGVudGlhbFByb2R1Y3RQcm9tb3Rpb25zLGFwcGxpZWRQcm9kdWN0UHJvbW90aW9ucyxwb3RlbnRpYWxPcmRlclByb21vdGlvbnMsYXBwbGllZE9yZGVyUHJvbW90aW9ucywnICtcbiAgJ2VudHJpZXModG90YWxQcmljZShmb3JtYXR0ZWRWYWx1ZSkscHJvZHVjdChpbWFnZXMoRlVMTCksc3RvY2soRlVMTCkpLGJhc2VQcmljZShmb3JtYXR0ZWRWYWx1ZSksdXBkYXRlYWJsZSksJyArXG4gICd0b3RhbFByaWNlKGZvcm1hdHRlZFZhbHVlKSx0b3RhbEl0ZW1zLHRvdGFsUHJpY2VXaXRoVGF4KGZvcm1hdHRlZFZhbHVlKSx0b3RhbERpc2NvdW50cyh2YWx1ZSxmb3JtYXR0ZWRWYWx1ZSksc3ViVG90YWwoZm9ybWF0dGVkVmFsdWUpLCcgK1xuICAnZGVsaXZlcnlJdGVtc1F1YW50aXR5LGRlbGl2ZXJ5Q29zdChmb3JtYXR0ZWRWYWx1ZSksdG90YWxUYXgoZm9ybWF0dGVkVmFsdWUpLHBpY2t1cEl0ZW1zUXVhbnRpdHksbmV0LCcgK1xuICAnYXBwbGllZFZvdWNoZXJzLHByb2R1Y3REaXNjb3VudHMoZm9ybWF0dGVkVmFsdWUpJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE9jY0NhcnRBZGFwdGVyIGltcGxlbWVudHMgQ2FydEFkYXB0ZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgaHR0cDogSHR0cENsaWVudCxcbiAgICBwcm90ZWN0ZWQgb2NjRW5kcG9pbnRzU2VydmljZTogT2NjRW5kcG9pbnRzU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY29udmVydGVyU2VydmljZTogQ29udmVydGVyU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgZmVhdHVyZUNvbmZpZ1NlcnZpY2U/OiBGZWF0dXJlQ29uZmlnU2VydmljZVxuICApIHt9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIFNpbmNlIDEuMVxuICAgKiBVc2UgY29uZmlndXJhYmxlIGVuZHBvaW50cy4gV2lsbCBiZSByZW1vdmVkIGFzIG9mIDIuMC5cbiAgICovXG4gIHByb3RlY3RlZCBnZXRDYXJ0RW5kcG9pbnQodXNlcklkOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IGNhcnRFbmRwb2ludCA9IGB1c2Vycy8ke3VzZXJJZH0vY2FydHMvYDtcbiAgICByZXR1cm4gdGhpcy5vY2NFbmRwb2ludHNTZXJ2aWNlLmdldEVuZHBvaW50KGNhcnRFbmRwb2ludCk7XG4gIH1cblxuICBwdWJsaWMgbG9hZEFsbCh1c2VySWQ6IHN0cmluZyk6IE9ic2VydmFibGU8Q2FydFtdPiB7XG4gICAgLy8gVE9ETyAyLjA6IFJlbW92ZVxuICAgIGlmICghdGhpcy5mZWF0dXJlQ29uZmlnU2VydmljZS5pc0VuYWJsZWQoJ2NvbmZpZ3VyYWJsZU9jY0VuZHBvaW50cycpKSB7XG4gICAgICByZXR1cm4gdGhpcy5sZWdhY3lMb2FkQWxsKHVzZXJJZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldDxPY2MuQ2FydExpc3Q+KHRoaXMub2NjRW5kcG9pbnRzU2VydmljZS5nZXRVcmwoJ2NhcnRzJywgeyB1c2VySWQgfSkpXG4gICAgICAucGlwZShcbiAgICAgICAgcGx1Y2soJ2NhcnRzJyksXG4gICAgICAgIHRoaXMuY29udmVydGVyU2VydmljZS5waXBlYWJsZU1hbnkoQ0FSVF9OT1JNQUxJWkVSKVxuICAgICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBsb2FkKHVzZXJJZDogc3RyaW5nLCBjYXJ0SWQ6IHN0cmluZyk6IE9ic2VydmFibGU8Q2FydD4ge1xuICAgIGlmIChjYXJ0SWQgPT09ICdjdXJyZW50Jykge1xuICAgICAgcmV0dXJuIHRoaXMubG9hZEFsbCh1c2VySWQpLnBpcGUoXG4gICAgICAgIG1hcChjYXJ0cyA9PiB7XG4gICAgICAgICAgaWYgKGNhcnRzKSB7XG4gICAgICAgICAgICBjb25zdCBhY3RpdmVDYXJ0ID0gY2FydHMuZmluZChjYXJ0ID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIGNhcnRbJ3NhdmVUaW1lJ10gPT09IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGFjdGl2ZUNhcnQ7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRPRE8gMi4wOiBSZW1vdmVcbiAgICAgIGlmICghdGhpcy5mZWF0dXJlQ29uZmlnU2VydmljZS5pc0VuYWJsZWQoJ2NvbmZpZ3VyYWJsZU9jY0VuZHBvaW50cycpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxlZ2FjeUxvYWQodXNlcklkLCBjYXJ0SWQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgICAuZ2V0PE9jYy5DYXJ0PihcbiAgICAgICAgICB0aGlzLm9jY0VuZHBvaW50c1NlcnZpY2UuZ2V0VXJsKCdjYXJ0JywgeyB1c2VySWQsIGNhcnRJZCB9KVxuICAgICAgICApXG4gICAgICAgIC5waXBlKHRoaXMuY29udmVydGVyU2VydmljZS5waXBlYWJsZShDQVJUX05PUk1BTElaRVIpKTtcbiAgICB9XG4gIH1cblxuICBjcmVhdGUoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgb2xkQ2FydElkPzogc3RyaW5nLFxuICAgIHRvTWVyZ2VDYXJ0R3VpZD86IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPENhcnQ+IHtcbiAgICBjb25zdCB0b0FkZCA9IEpTT04uc3RyaW5naWZ5KHt9KTtcbiAgICAvLyBUT0RPIDIuMDogUmVtb3ZlXG4gICAgaWYgKCF0aGlzLmZlYXR1cmVDb25maWdTZXJ2aWNlLmlzRW5hYmxlZCgnY29uZmlndXJhYmxlT2NjRW5kcG9pbnRzJykpIHtcbiAgICAgIHJldHVybiB0aGlzLmxlZ2FjeUNyZWF0ZSh1c2VySWQsIHRvQWRkLCBvbGRDYXJ0SWQsIHRvTWVyZ2VDYXJ0R3VpZCk7XG4gICAgfVxuXG4gICAgbGV0IHBhcmFtcyA9IHt9O1xuXG4gICAgaWYgKG9sZENhcnRJZCkge1xuICAgICAgcGFyYW1zID0geyBvbGRDYXJ0SWQ6IG9sZENhcnRJZCB9O1xuICAgIH1cbiAgICBpZiAodG9NZXJnZUNhcnRHdWlkKSB7XG4gICAgICBwYXJhbXNbJ3RvTWVyZ2VDYXJ0R3VpZCddID0gdG9NZXJnZUNhcnRHdWlkO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5wb3N0PE9jYy5DYXJ0PihcbiAgICAgICAgdGhpcy5vY2NFbmRwb2ludHNTZXJ2aWNlLmdldFVybCgnY3JlYXRlQ2FydCcsIHsgdXNlcklkIH0sIHBhcmFtcyksXG4gICAgICAgIHRvQWRkXG4gICAgICApXG4gICAgICAucGlwZSh0aGlzLmNvbnZlcnRlclNlcnZpY2UucGlwZWFibGUoQ0FSVF9OT1JNQUxJWkVSKSk7XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgU2luY2UgMS4xXG4gICAqIFVzZSBjb25maWd1cmFibGUgZW5kcG9pbnRzLiBXaWxsIGJlIHJlbW92ZWQgYXMgb2YgMi4wLlxuICAgKi9cbiAgcHJpdmF0ZSBsZWdhY3lMb2FkQWxsKHVzZXJJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxDYXJ0W10+IHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLmdldENhcnRFbmRwb2ludCh1c2VySWQpO1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKHtcbiAgICAgIGZyb21TdHJpbmc6IGBmaWVsZHM9Y2FydHMoJHtERVRBSUxTX1BBUkFNU30sc2F2ZVRpbWUpYCxcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PE9jYy5DYXJ0TGlzdD4odXJsLCB7IHBhcmFtcyB9KS5waXBlKFxuICAgICAgcGx1Y2soJ2NhcnRzJyksXG4gICAgICB0aGlzLmNvbnZlcnRlclNlcnZpY2UucGlwZWFibGVNYW55KENBUlRfTk9STUFMSVpFUilcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIFNpbmNlIDEuMVxuICAgKiBVc2UgY29uZmlndXJhYmxlIGVuZHBvaW50cy4gV2lsbCBiZSByZW1vdmVkIGFzIG9mIDIuMC5cbiAgICovXG4gIHByaXZhdGUgbGVnYWN5TG9hZCh1c2VySWQ6IHN0cmluZywgY2FydElkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPENhcnQ+IHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLmdldENhcnRFbmRwb2ludCh1c2VySWQpICsgY2FydElkO1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKHtcbiAgICAgIGZyb21TdHJpbmc6IGBmaWVsZHM9JHtERVRBSUxTX1BBUkFNU31gLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldDxPY2MuQ2FydD4odXJsLCB7IHBhcmFtcyB9KVxuICAgICAgLnBpcGUodGhpcy5jb252ZXJ0ZXJTZXJ2aWNlLnBpcGVhYmxlKENBUlRfTk9STUFMSVpFUikpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIFNpbmNlIDEuMVxuICAgKiBVc2UgY29uZmlndXJhYmxlIGVuZHBvaW50cy4gV2lsbCBiZSByZW1vdmVkIGFzIG9mIDIuMC5cbiAgICovXG4gIHByaXZhdGUgbGVnYWN5Q3JlYXRlKFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIHRvQWRkOiBzdHJpbmcsXG4gICAgb2xkQ2FydElkPzogc3RyaW5nLFxuICAgIHRvTWVyZ2VDYXJ0R3VpZD86IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPENhcnQ+IHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLmdldENhcnRFbmRwb2ludCh1c2VySWQpO1xuICAgIGxldCBxdWVyeVN0cmluZyA9IGBmaWVsZHM9JHtERVRBSUxTX1BBUkFNU31gO1xuXG4gICAgaWYgKG9sZENhcnRJZCkge1xuICAgICAgcXVlcnlTdHJpbmcgPSBgJHtxdWVyeVN0cmluZ30mb2xkQ2FydElkPSR7b2xkQ2FydElkfWA7XG4gICAgfVxuICAgIGlmICh0b01lcmdlQ2FydEd1aWQpIHtcbiAgICAgIHF1ZXJ5U3RyaW5nID0gYCR7cXVlcnlTdHJpbmd9JnRvTWVyZ2VDYXJ0R3VpZD0ke3RvTWVyZ2VDYXJ0R3VpZH1gO1xuICAgIH1cblxuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKHtcbiAgICAgIGZyb21TdHJpbmc6IHF1ZXJ5U3RyaW5nLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLnBvc3Q8T2NjLkNhcnQ+KHVybCwgdG9BZGQsIHsgcGFyYW1zIH0pXG4gICAgICAucGlwZSh0aGlzLmNvbnZlcnRlclNlcnZpY2UucGlwZWFibGUoQ0FSVF9OT1JNQUxJWkVSKSk7XG4gIH1cbn1cbiJdfQ==
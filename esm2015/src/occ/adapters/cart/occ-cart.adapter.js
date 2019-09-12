/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, pluck } from 'rxjs/operators';
import { CART_NORMALIZER } from '../../../cart/connectors/cart/converters';
import { FeatureConfigService } from '../../../features-config/services/feature-config.service';
import { ConverterService } from '../../../util/converter.service';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
// TODO: Deprecated, remove Issue: #4125. Use configurable endpoints.
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
     * Use configurable endpoints.
     * Remove issue: #4125
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
        // TODO: Deprecated, remove Issue: #4125.
        if (!this.featureConfigService.isLevel('1.1')) {
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
            // TODO: Deprecated, remove Issue: #4125.
            if (!this.featureConfigService.isLevel('1.1')) {
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
        // TODO: Deprecated, remove Issue: #4125.
        if (!this.featureConfigService.isLevel('1.1')) {
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
     * Use configurable endpoints.
     * Remove issue: #4125
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
     * Use configurable endpoints.
     * Remove issue: #4125
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
     * Use configurable endpoints.
     * Remove issue: #4125
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNhcnQuYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2MvYWRhcHRlcnMvY2FydC9vY2MtY2FydC5hZGFwdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzlELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU1QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDM0UsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFFaEcsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFbkUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7OztNQUdyRSxjQUFjLEdBQ2xCLDhHQUE4RztJQUM5Ryw2R0FBNkc7SUFDN0csd0lBQXdJO0lBQ3hJLHNHQUFzRztJQUN0RyxrREFBa0Q7QUFHcEQsTUFBTSxPQUFPLGNBQWM7Ozs7Ozs7SUFDekIsWUFDWSxJQUFnQixFQUNoQixtQkFBd0MsRUFDeEMsZ0JBQWtDLEVBQ2xDLG9CQUEyQztRQUgzQyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXVCO0lBQ3BELENBQUM7Ozs7Ozs7OztJQU9NLGVBQWUsQ0FBQyxNQUFjOztjQUNoQyxZQUFZLEdBQUcsU0FBUyxNQUFNLFNBQVM7UUFDN0MsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lB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QUUsV0FBVztTQUN4QixDQUFDO1FBRUYsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLElBQUksQ0FBVyxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUM7YUFDdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztJQUMzRCxDQUFDOzs7WUFySkYsVUFBVTs7OztZQXBCRixVQUFVO1lBVVYsbUJBQW1CO1lBRm5CLGdCQUFnQjtZQUZoQixvQkFBb0I7Ozs7Ozs7SUFpQnpCLDhCQUEwQjs7Ozs7SUFDMUIsNkNBQWtEOzs7OztJQUNsRCwwQ0FBNEM7Ozs7O0lBQzVDLDhDQUFxRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHBsdWNrIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ2FydEFkYXB0ZXIgfSBmcm9tICcuLi8uLi8uLi9jYXJ0L2Nvbm5lY3RvcnMvY2FydC9jYXJ0LmFkYXB0ZXInO1xuaW1wb3J0IHsgQ0FSVF9OT1JNQUxJWkVSIH0gZnJvbSAnLi4vLi4vLi4vY2FydC9jb25uZWN0b3JzL2NhcnQvY29udmVydGVycyc7XG5pbXBvcnQgeyBGZWF0dXJlQ29uZmlnU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2ZlYXR1cmVzLWNvbmZpZy9zZXJ2aWNlcy9mZWF0dXJlLWNvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IENhcnQgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9jYXJ0Lm1vZGVsJztcbmltcG9ydCB7IENvbnZlcnRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi91dGlsL2NvbnZlcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7IE9jYyB9IGZyb20gJy4uLy4uL29jYy1tb2RlbHMvb2NjLm1vZGVscyc7XG5pbXBvcnQgeyBPY2NFbmRwb2ludHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvb2NjLWVuZHBvaW50cy5zZXJ2aWNlJztcblxuLy8gVE9ETzogRGVwcmVjYXRlZCwgcmVtb3ZlIElzc3VlOiAjNDEyNS4gVXNlIGNvbmZpZ3VyYWJsZSBlbmRwb2ludHMuXG5jb25zdCBERVRBSUxTX1BBUkFNUyA9XG4gICdERUZBVUxULHBvdGVudGlhbFByb2R1Y3RQcm9tb3Rpb25zLGFwcGxpZWRQcm9kdWN0UHJvbW90aW9ucyxwb3RlbnRpYWxPcmRlclByb21vdGlvbnMsYXBwbGllZE9yZGVyUHJvbW90aW9ucywnICtcbiAgJ2VudHJpZXModG90YWxQcmljZShmb3JtYXR0ZWRWYWx1ZSkscHJvZHVjdChpbWFnZXMoRlVMTCksc3RvY2soRlVMTCkpLGJhc2VQcmljZShmb3JtYXR0ZWRWYWx1ZSksdXBkYXRlYWJsZSksJyArXG4gICd0b3RhbFByaWNlKGZvcm1hdHRlZFZhbHVlKSx0b3RhbEl0ZW1zLHRvdGFsUHJpY2VXaXRoVGF4KGZvcm1hdHRlZFZhbHVlKSx0b3RhbERpc2NvdW50cyh2YWx1ZSxmb3JtYXR0ZWRWYWx1ZSksc3ViVG90YWwoZm9ybWF0dGVkVmFsdWUpLCcgK1xuICAnZGVsaXZlcnlJdGVtc1F1YW50aXR5LGRlbGl2ZXJ5Q29zdChmb3JtYXR0ZWRWYWx1ZSksdG90YWxUYXgoZm9ybWF0dGVkVmFsdWUpLHBpY2t1cEl0ZW1zUXVhbnRpdHksbmV0LCcgK1xuICAnYXBwbGllZFZvdWNoZXJzLHByb2R1Y3REaXNjb3VudHMoZm9ybWF0dGVkVmFsdWUpJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE9jY0NhcnRBZGFwdGVyIGltcGxlbWVudHMgQ2FydEFkYXB0ZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgaHR0cDogSHR0cENsaWVudCxcbiAgICBwcm90ZWN0ZWQgb2NjRW5kcG9pbnRzU2VydmljZTogT2NjRW5kcG9pbnRzU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY29udmVydGVyU2VydmljZTogQ29udmVydGVyU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgZmVhdHVyZUNvbmZpZ1NlcnZpY2U/OiBGZWF0dXJlQ29uZmlnU2VydmljZVxuICApIHt9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIFNpbmNlIDEuMVxuICAgKiBVc2UgY29uZmlndXJhYmxlIGVuZHBvaW50cy5cbiAgICogUmVtb3ZlIGlzc3VlOiAjNDEyNVxuICAgKi9cbiAgcHJvdGVjdGVkIGdldENhcnRFbmRwb2ludCh1c2VySWQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgY2FydEVuZHBvaW50ID0gYHVzZXJzLyR7dXNlcklkfS9jYXJ0cy9gO1xuICAgIHJldHVybiB0aGlzLm9jY0VuZHBvaW50c1NlcnZpY2UuZ2V0RW5kcG9pbnQoY2FydEVuZHBvaW50KTtcbiAgfVxuXG4gIHB1YmxpYyBsb2FkQWxsKHVzZXJJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxDYXJ0W10+IHtcbiAgICAvLyBUT0RPOiBEZXByZWNhdGVkLCByZW1vdmUgSXNzdWU6ICM0MTI1LlxuICAgIGlmICghdGhpcy5mZWF0dXJlQ29uZmlnU2VydmljZS5pc0xldmVsKCcxLjEnKSkge1xuICAgICAgcmV0dXJuIHRoaXMubGVnYWN5TG9hZEFsbCh1c2VySWQpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5nZXQ8T2NjLkNhcnRMaXN0Pih0aGlzLm9jY0VuZHBvaW50c1NlcnZpY2UuZ2V0VXJsKCdjYXJ0cycsIHsgdXNlcklkIH0pKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHBsdWNrKCdjYXJ0cycpLFxuICAgICAgICB0aGlzLmNvbnZlcnRlclNlcnZpY2UucGlwZWFibGVNYW55KENBUlRfTk9STUFMSVpFUilcbiAgICAgICk7XG4gIH1cblxuICBwdWJsaWMgbG9hZCh1c2VySWQ6IHN0cmluZywgY2FydElkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPENhcnQ+IHtcbiAgICBpZiAoY2FydElkID09PSAnY3VycmVudCcpIHtcbiAgICAgIHJldHVybiB0aGlzLmxvYWRBbGwodXNlcklkKS5waXBlKFxuICAgICAgICBtYXAoY2FydHMgPT4ge1xuICAgICAgICAgIGlmIChjYXJ0cykge1xuICAgICAgICAgICAgY29uc3QgYWN0aXZlQ2FydCA9IGNhcnRzLmZpbmQoY2FydCA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBjYXJ0WydzYXZlVGltZSddID09PSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBhY3RpdmVDYXJ0O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBUT0RPOiBEZXByZWNhdGVkLCByZW1vdmUgSXNzdWU6ICM0MTI1LlxuICAgICAgaWYgKCF0aGlzLmZlYXR1cmVDb25maWdTZXJ2aWNlLmlzTGV2ZWwoJzEuMScpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxlZ2FjeUxvYWQodXNlcklkLCBjYXJ0SWQpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgICAuZ2V0PE9jYy5DYXJ0PihcbiAgICAgICAgICB0aGlzLm9jY0VuZHBvaW50c1NlcnZpY2UuZ2V0VXJsKCdjYXJ0JywgeyB1c2VySWQsIGNhcnRJZCB9KVxuICAgICAgICApXG4gICAgICAgIC5waXBlKHRoaXMuY29udmVydGVyU2VydmljZS5waXBlYWJsZShDQVJUX05PUk1BTElaRVIpKTtcbiAgICB9XG4gIH1cblxuICBjcmVhdGUoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgb2xkQ2FydElkPzogc3RyaW5nLFxuICAgIHRvTWVyZ2VDYXJ0R3VpZD86IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPENhcnQ+IHtcbiAgICBjb25zdCB0b0FkZCA9IEpTT04uc3RyaW5naWZ5KHt9KTtcbiAgICAvLyBUT0RPOiBEZXByZWNhdGVkLCByZW1vdmUgSXNzdWU6ICM0MTI1LlxuICAgIGlmICghdGhpcy5mZWF0dXJlQ29uZmlnU2VydmljZS5pc0xldmVsKCcxLjEnKSkge1xuICAgICAgcmV0dXJuIHRoaXMubGVnYWN5Q3JlYXRlKHVzZXJJZCwgdG9BZGQsIG9sZENhcnRJZCwgdG9NZXJnZUNhcnRHdWlkKTtcbiAgICB9XG5cbiAgICBsZXQgcGFyYW1zID0ge307XG5cbiAgICBpZiAob2xkQ2FydElkKSB7XG4gICAgICBwYXJhbXMgPSB7IG9sZENhcnRJZDogb2xkQ2FydElkIH07XG4gICAgfVxuICAgIGlmICh0b01lcmdlQ2FydEd1aWQpIHtcbiAgICAgIHBhcmFtc1sndG9NZXJnZUNhcnRHdWlkJ10gPSB0b01lcmdlQ2FydEd1aWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLnBvc3Q8T2NjLkNhcnQ+KFxuICAgICAgICB0aGlzLm9jY0VuZHBvaW50c1NlcnZpY2UuZ2V0VXJsKCdjcmVhdGVDYXJ0JywgeyB1c2VySWQgfSwgcGFyYW1zKSxcbiAgICAgICAgdG9BZGRcbiAgICAgIClcbiAgICAgIC5waXBlKHRoaXMuY29udmVydGVyU2VydmljZS5waXBlYWJsZShDQVJUX05PUk1BTElaRVIpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBTaW5jZSAxLjFcbiAgICogVXNlIGNvbmZpZ3VyYWJsZSBlbmRwb2ludHMuXG4gICAqIFJlbW92ZSBpc3N1ZTogIzQxMjVcbiAgICovXG4gIHByaXZhdGUgbGVnYWN5TG9hZEFsbCh1c2VySWQ6IHN0cmluZyk6IE9ic2VydmFibGU8Q2FydFtdPiB7XG4gICAgY29uc3QgdXJsID0gdGhpcy5nZXRDYXJ0RW5kcG9pbnQodXNlcklkKTtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgSHR0cFBhcmFtcyh7XG4gICAgICBmcm9tU3RyaW5nOiBgZmllbGRzPWNhcnRzKCR7REVUQUlMU19QQVJBTVN9LHNhdmVUaW1lKWAsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxPY2MuQ2FydExpc3Q+KHVybCwgeyBwYXJhbXMgfSkucGlwZShcbiAgICAgIHBsdWNrKCdjYXJ0cycpLFxuICAgICAgdGhpcy5jb252ZXJ0ZXJTZXJ2aWNlLnBpcGVhYmxlTWFueShDQVJUX05PUk1BTElaRVIpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBTaW5jZSAxLjFcbiAgICogVXNlIGNvbmZpZ3VyYWJsZSBlbmRwb2ludHMuXG4gICAqIFJlbW92ZSBpc3N1ZTogIzQxMjVcbiAgICovXG4gIHByaXZhdGUgbGVnYWN5TG9hZCh1c2VySWQ6IHN0cmluZywgY2FydElkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPENhcnQ+IHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLmdldENhcnRFbmRwb2ludCh1c2VySWQpICsgY2FydElkO1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKHtcbiAgICAgIGZyb21TdHJpbmc6IGBmaWVsZHM9JHtERVRBSUxTX1BBUkFNU31gLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldDxPY2MuQ2FydD4odXJsLCB7IHBhcmFtcyB9KVxuICAgICAgLnBpcGUodGhpcy5jb252ZXJ0ZXJTZXJ2aWNlLnBpcGVhYmxlKENBUlRfTk9STUFMSVpFUikpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIFNpbmNlIDEuMVxuICAgKiBVc2UgY29uZmlndXJhYmxlIGVuZHBvaW50cy5cbiAgICogUmVtb3ZlIGlzc3VlOiAjNDEyNVxuICAgKi9cbiAgcHJpdmF0ZSBsZWdhY3lDcmVhdGUoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgdG9BZGQ6IHN0cmluZyxcbiAgICBvbGRDYXJ0SWQ/OiBzdHJpbmcsXG4gICAgdG9NZXJnZUNhcnRHdWlkPzogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8Q2FydD4ge1xuICAgIGNvbnN0IHVybCA9IHRoaXMuZ2V0Q2FydEVuZHBvaW50KHVzZXJJZCk7XG4gICAgbGV0IHF1ZXJ5U3RyaW5nID0gYGZpZWxkcz0ke0RFVEFJTFNfUEFSQU1TfWA7XG5cbiAgICBpZiAob2xkQ2FydElkKSB7XG4gICAgICBxdWVyeVN0cmluZyA9IGAke3F1ZXJ5U3RyaW5nfSZvbGRDYXJ0SWQ9JHtvbGRDYXJ0SWR9YDtcbiAgICB9XG4gICAgaWYgKHRvTWVyZ2VDYXJ0R3VpZCkge1xuICAgICAgcXVlcnlTdHJpbmcgPSBgJHtxdWVyeVN0cmluZ30mdG9NZXJnZUNhcnRHdWlkPSR7dG9NZXJnZUNhcnRHdWlkfWA7XG4gICAgfVxuXG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoe1xuICAgICAgZnJvbVN0cmluZzogcXVlcnlTdHJpbmcsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAucG9zdDxPY2MuQ2FydD4odXJsLCB0b0FkZCwgeyBwYXJhbXMgfSlcbiAgICAgIC5waXBlKHRoaXMuY29udmVydGVyU2VydmljZS5waXBlYWJsZShDQVJUX05PUk1BTElaRVIpKTtcbiAgfVxufVxuIl19
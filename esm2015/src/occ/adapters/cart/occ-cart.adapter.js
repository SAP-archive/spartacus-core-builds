/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, pluck } from 'rxjs/operators';
import { CART_NORMALIZER } from '../../../cart/connectors/cart/converters';
import { FeatureConfigService } from '../../../features-config/services/feature-config.service';
import { ConverterService } from '../../../util/converter.service';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
import { InterceptorUtil, USE_CLIENT_TOKEN, } from '../../utils/interceptor-util';
import { OCC_USER_ID_ANONYMOUS } from '../../utils/occ-constants';
// TODO: Deprecated, remove Issue: #4125. Use configurable endpoints.
/** @type {?} */
const DETAILS_PARAMS = 'DEFAULT,potentialProductPromotions,appliedProductPromotions,potentialOrderPromotions,appliedOrderPromotions,' +
    'entries(totalPrice(formattedValue),product(images(FULL),stock(FULL)),basePrice(formattedValue),updateable),' +
    'totalPrice(formattedValue),totalItems,totalPriceWithTax(formattedValue),totalDiscounts(value,formattedValue),subTotal(formattedValue),' +
    'deliveryItemsQuantity,deliveryCost(formattedValue),totalTax(formattedValue),pickupItemsQuantity,net,' +
    'appliedVouchers,productDiscounts(formattedValue),user';
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
     * @param {?} userId
     * @param {?} cartId
     * @return {?}
     */
    delete(userId, cartId) {
        /** @type {?} */
        let headers = new HttpHeaders();
        if (userId === OCC_USER_ID_ANONYMOUS) {
            headers = InterceptorUtil.createHeader(USE_CLIENT_TOKEN, true, headers);
        }
        return this.http.delete(this.occEndpointsService.getUrl('deleteCart', { userId, cartId }), { headers });
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
    /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?} email
     * @return {?}
     */
    addEmail(userId, cartId, email) {
        /** @type {?} */
        let headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        headers = InterceptorUtil.createHeader(USE_CLIENT_TOKEN, true, headers);
        /** @type {?} */
        const httpParams = new HttpParams().set('email', email);
        /** @type {?} */
        const url = this.occEndpointsService.getUrl('addEmail', {
            userId,
            cartId,
        });
        return this.http.put(url, httpParams, { headers });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNhcnQuYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2MvYWRhcHRlcnMvY2FydC9vY2MtY2FydC5hZGFwdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMzRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFNUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBRWhHLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRW5FLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzNFLE9BQU8sRUFDTCxlQUFlLEVBQ2YsZ0JBQWdCLEdBQ2pCLE1BQU0sOEJBQThCLENBQUM7QUFDdEMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7OztNQUc1RCxjQUFjLEdBQ2xCLDhHQUE4RztJQUM5Ryw2R0FBNkc7SUFDN0csd0lBQXdJO0lBQ3hJLHNHQUFzRztJQUN0Ryx1REFBdUQ7QUFHekQsTUFBTSxPQUFPLGNBQWM7Ozs7Ozs7SUFDekIsWUFDWSxJQUFnQixFQUNoQixtQkFBd0MsRUFDeEMsZ0JBQWtDLEVBQ2xDLG9CQUEyQztRQUgzQyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXVCO0lBQ3BELENBQUM7Ozs7Ozs7OztJ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bUJBQW1CLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRTtZQUN0RCxNQUFNO1lBQ04sTUFBTTtTQUNQLENBQUM7UUFFRixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxVQUFVLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQ3JELENBQUM7OztZQWhMRixVQUFVOzs7O1lBekJGLFVBQVU7WUFVVixtQkFBbUI7WUFGbkIsZ0JBQWdCO1lBRmhCLG9CQUFvQjs7Ozs7OztJQXNCekIsOEJBQTBCOzs7OztJQUMxQiw2Q0FBa0Q7Ozs7O0lBQ2xELDBDQUE0Qzs7Ozs7SUFDNUMsOENBQXFEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMsIEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHBsdWNrIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ2FydEFkYXB0ZXIgfSBmcm9tICcuLi8uLi8uLi9jYXJ0L2Nvbm5lY3RvcnMvY2FydC9jYXJ0LmFkYXB0ZXInO1xuaW1wb3J0IHsgQ0FSVF9OT1JNQUxJWkVSIH0gZnJvbSAnLi4vLi4vLi4vY2FydC9jb25uZWN0b3JzL2NhcnQvY29udmVydGVycyc7XG5pbXBvcnQgeyBGZWF0dXJlQ29uZmlnU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2ZlYXR1cmVzLWNvbmZpZy9zZXJ2aWNlcy9mZWF0dXJlLWNvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IENhcnQgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9jYXJ0Lm1vZGVsJztcbmltcG9ydCB7IENvbnZlcnRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi91dGlsL2NvbnZlcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7IE9jYyB9IGZyb20gJy4uLy4uL29jYy1tb2RlbHMvb2NjLm1vZGVscyc7XG5pbXBvcnQgeyBPY2NFbmRwb2ludHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvb2NjLWVuZHBvaW50cy5zZXJ2aWNlJztcbmltcG9ydCB7XG4gIEludGVyY2VwdG9yVXRpbCxcbiAgVVNFX0NMSUVOVF9UT0tFTixcbn0gZnJvbSAnLi4vLi4vdXRpbHMvaW50ZXJjZXB0b3ItdXRpbCc7XG5pbXBvcnQgeyBPQ0NfVVNFUl9JRF9BTk9OWU1PVVMgfSBmcm9tICcuLi8uLi91dGlscy9vY2MtY29uc3RhbnRzJztcblxuLy8gVE9ETzogRGVwcmVjYXRlZCwgcmVtb3ZlIElzc3VlOiAjNDEyNS4gVXNlIGNvbmZpZ3VyYWJsZSBlbmRwb2ludHMuXG5jb25zdCBERVRBSUxTX1BBUkFNUyA9XG4gICdERUZBVUxULHBvdGVudGlhbFByb2R1Y3RQcm9tb3Rpb25zLGFwcGxpZWRQcm9kdWN0UHJvbW90aW9ucyxwb3RlbnRpYWxPcmRlclByb21vdGlvbnMsYXBwbGllZE9yZGVyUHJvbW90aW9ucywnICtcbiAgJ2VudHJpZXModG90YWxQcmljZShmb3JtYXR0ZWRWYWx1ZSkscHJvZHVjdChpbWFnZXMoRlVMTCksc3RvY2soRlVMTCkpLGJhc2VQcmljZShmb3JtYXR0ZWRWYWx1ZSksdXBkYXRlYWJsZSksJyArXG4gICd0b3RhbFByaWNlKGZvcm1hdHRlZFZhbHVlKSx0b3RhbEl0ZW1zLHRvdGFsUHJpY2VXaXRoVGF4KGZvcm1hdHRlZFZhbHVlKSx0b3RhbERpc2NvdW50cyh2YWx1ZSxmb3JtYXR0ZWRWYWx1ZSksc3ViVG90YWwoZm9ybWF0dGVkVmFsdWUpLCcgK1xuICAnZGVsaXZlcnlJdGVtc1F1YW50aXR5LGRlbGl2ZXJ5Q29zdChmb3JtYXR0ZWRWYWx1ZSksdG90YWxUYXgoZm9ybWF0dGVkVmFsdWUpLHBpY2t1cEl0ZW1zUXVhbnRpdHksbmV0LCcgK1xuICAnYXBwbGllZFZvdWNoZXJzLHByb2R1Y3REaXNjb3VudHMoZm9ybWF0dGVkVmFsdWUpLHVzZXInO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT2NjQ2FydEFkYXB0ZXIgaW1wbGVtZW50cyBDYXJ0QWRhcHRlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByb3RlY3RlZCBvY2NFbmRwb2ludHNTZXJ2aWNlOiBPY2NFbmRwb2ludHNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjb252ZXJ0ZXJTZXJ2aWNlOiBDb252ZXJ0ZXJTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBmZWF0dXJlQ29uZmlnU2VydmljZT86IEZlYXR1cmVDb25maWdTZXJ2aWNlXG4gICkge31cblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgU2luY2UgMS4xXG4gICAqIFVzZSBjb25maWd1cmFibGUgZW5kcG9pbnRzLlxuICAgKiBSZW1vdmUgaXNzdWU6ICM0MTI1XG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0Q2FydEVuZHBvaW50KHVzZXJJZDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCBjYXJ0RW5kcG9pbnQgPSBgdXNlcnMvJHt1c2VySWR9L2NhcnRzL2A7XG4gICAgcmV0dXJuIHRoaXMub2NjRW5kcG9pbnRzU2VydmljZS5nZXRFbmRwb2ludChjYXJ0RW5kcG9pbnQpO1xuICB9XG5cbiAgcHVibGljIGxvYWRBbGwodXNlcklkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPENhcnRbXT4ge1xuICAgIC8vIFRPRE86IERlcHJlY2F0ZWQsIHJlbW92ZSBJc3N1ZTogIzQxMjUuXG4gICAgaWYgKCF0aGlzLmZlYXR1cmVDb25maWdTZXJ2aWNlLmlzTGV2ZWwoJzEuMScpKSB7XG4gICAgICByZXR1cm4gdGhpcy5sZWdhY3lMb2FkQWxsKHVzZXJJZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldDxPY2MuQ2FydExpc3Q+KHRoaXMub2NjRW5kcG9pbnRzU2VydmljZS5nZXRVcmwoJ2NhcnRzJywgeyB1c2VySWQgfSkpXG4gICAgICAucGlwZShcbiAgICAgICAgcGx1Y2soJ2NhcnRzJyksXG4gICAgICAgIHRoaXMuY29udmVydGVyU2VydmljZS5waXBlYWJsZU1hbnkoQ0FSVF9OT1JNQUxJWkVSKVxuICAgICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBsb2FkKHVzZXJJZDogc3RyaW5nLCBjYXJ0SWQ6IHN0cmluZyk6IE9ic2VydmFibGU8Q2FydD4ge1xuICAgIGlmIChjYXJ0SWQgPT09ICdjdXJyZW50Jykge1xuICAgICAgcmV0dXJuIHRoaXMubG9hZEFsbCh1c2VySWQpLnBpcGUoXG4gICAgICAgIG1hcChjYXJ0cyA9PiB7XG4gICAgICAgICAgaWYgKGNhcnRzKSB7XG4gICAgICAgICAgICBjb25zdCBhY3RpdmVDYXJ0ID0gY2FydHMuZmluZChjYXJ0ID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIGNhcnRbJ3NhdmVUaW1lJ10gPT09IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGFjdGl2ZUNhcnQ7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRPRE86IERlcHJlY2F0ZWQsIHJlbW92ZSBJc3N1ZTogIzQxMjUuXG4gICAgICBpZiAoIXRoaXMuZmVhdHVyZUNvbmZpZ1NlcnZpY2UuaXNMZXZlbCgnMS4xJykpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGVnYWN5TG9hZCh1c2VySWQsIGNhcnRJZCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAgIC5nZXQ8T2NjLkNhcnQ+KFxuICAgICAgICAgIHRoaXMub2NjRW5kcG9pbnRzU2VydmljZS5nZXRVcmwoJ2NhcnQnLCB7IHVzZXJJZCwgY2FydElkIH0pXG4gICAgICAgIClcbiAgICAgICAgLnBpcGUodGhpcy5jb252ZXJ0ZXJTZXJ2aWNlLnBpcGVhYmxlKENBUlRfTk9STUFMSVpFUikpO1xuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZShcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBvbGRDYXJ0SWQ/OiBzdHJpbmcsXG4gICAgdG9NZXJnZUNhcnRHdWlkPzogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8Q2FydD4ge1xuICAgIGNvbnN0IHRvQWRkID0gSlNPTi5zdHJpbmdpZnkoe30pO1xuICAgIC8vIFRPRE86IERlcHJlY2F0ZWQsIHJlbW92ZSBJc3N1ZTogIzQxMjUuXG4gICAgaWYgKCF0aGlzLmZlYXR1cmVDb25maWdTZXJ2aWNlLmlzTGV2ZWwoJzEuMScpKSB7XG4gICAgICByZXR1cm4gdGhpcy5sZWdhY3lDcmVhdGUodXNlcklkLCB0b0FkZCwgb2xkQ2FydElkLCB0b01lcmdlQ2FydEd1aWQpO1xuICAgIH1cblxuICAgIGxldCBwYXJhbXMgPSB7fTtcblxuICAgIGlmIChvbGRDYXJ0SWQpIHtcbiAgICAgIHBhcmFtcyA9IHsgb2xkQ2FydElkOiBvbGRDYXJ0SWQgfTtcbiAgICB9XG4gICAgaWYgKHRvTWVyZ2VDYXJ0R3VpZCkge1xuICAgICAgcGFyYW1zWyd0b01lcmdlQ2FydEd1aWQnXSA9IHRvTWVyZ2VDYXJ0R3VpZDtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAucG9zdDxPY2MuQ2FydD4oXG4gICAgICAgIHRoaXMub2NjRW5kcG9pbnRzU2VydmljZS5nZXRVcmwoJ2NyZWF0ZUNhcnQnLCB7IHVzZXJJZCB9LCBwYXJhbXMpLFxuICAgICAgICB0b0FkZFxuICAgICAgKVxuICAgICAgLnBpcGUodGhpcy5jb252ZXJ0ZXJTZXJ2aWNlLnBpcGVhYmxlKENBUlRfTk9STUFMSVpFUikpO1xuICB9XG5cbiAgZGVsZXRlKHVzZXJJZDogc3RyaW5nLCBjYXJ0SWQ6IHN0cmluZyk6IE9ic2VydmFibGU8e30+IHtcbiAgICBsZXQgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpO1xuICAgIGlmICh1c2VySWQgPT09IE9DQ19VU0VSX0lEX0FOT05ZTU9VUykge1xuICAgICAgaGVhZGVycyA9IEludGVyY2VwdG9yVXRpbC5jcmVhdGVIZWFkZXIoVVNFX0NMSUVOVF9UT0tFTiwgdHJ1ZSwgaGVhZGVycyk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlPHt9PihcbiAgICAgIHRoaXMub2NjRW5kcG9pbnRzU2VydmljZS5nZXRVcmwoJ2RlbGV0ZUNhcnQnLCB7IHVzZXJJZCwgY2FydElkIH0pLFxuICAgICAgeyBoZWFkZXJzIH1cbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIFNpbmNlIDEuMVxuICAgKiBVc2UgY29uZmlndXJhYmxlIGVuZHBvaW50cy5cbiAgICogUmVtb3ZlIGlzc3VlOiAjNDEyNVxuICAgKi9cbiAgcHJpdmF0ZSBsZWdhY3lMb2FkQWxsKHVzZXJJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxDYXJ0W10+IHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLmdldENhcnRFbmRwb2ludCh1c2VySWQpO1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKHtcbiAgICAgIGZyb21TdHJpbmc6IGBmaWVsZHM9Y2FydHMoJHtERVRBSUxTX1BBUkFNU30sc2F2ZVRpbWUpYCxcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PE9jYy5DYXJ0TGlzdD4odXJsLCB7IHBhcmFtcyB9KS5waXBlKFxuICAgICAgcGx1Y2soJ2NhcnRzJyksXG4gICAgICB0aGlzLmNvbnZlcnRlclNlcnZpY2UucGlwZWFibGVNYW55KENBUlRfTk9STUFMSVpFUilcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIFNpbmNlIDEuMVxuICAgKiBVc2UgY29uZmlndXJhYmxlIGVuZHBvaW50cy5cbiAgICogUmVtb3ZlIGlzc3VlOiAjNDEyNVxuICAgKi9cbiAgcHJpdmF0ZSBsZWdhY3lMb2FkKHVzZXJJZDogc3RyaW5nLCBjYXJ0SWQ6IHN0cmluZyk6IE9ic2VydmFibGU8Q2FydD4ge1xuICAgIGNvbnN0IHVybCA9IHRoaXMuZ2V0Q2FydEVuZHBvaW50KHVzZXJJZCkgKyBjYXJ0SWQ7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoe1xuICAgICAgZnJvbVN0cmluZzogYGZpZWxkcz0ke0RFVEFJTFNfUEFSQU1TfWAsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0PE9jYy5DYXJ0Pih1cmwsIHsgcGFyYW1zIH0pXG4gICAgICAucGlwZSh0aGlzLmNvbnZlcnRlclNlcnZpY2UucGlwZWFibGUoQ0FSVF9OT1JNQUxJWkVSKSk7XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgU2luY2UgMS4xXG4gICAqIFVzZSBjb25maWd1cmFibGUgZW5kcG9pbnRzLlxuICAgKiBSZW1vdmUgaXNzdWU6ICM0MTI1XG4gICAqL1xuICBwcml2YXRlIGxlZ2FjeUNyZWF0ZShcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICB0b0FkZDogc3RyaW5nLFxuICAgIG9sZENhcnRJZD86IHN0cmluZyxcbiAgICB0b01lcmdlQ2FydEd1aWQ/OiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxDYXJ0PiB7XG4gICAgY29uc3QgdXJsID0gdGhpcy5nZXRDYXJ0RW5kcG9pbnQodXNlcklkKTtcbiAgICBsZXQgcXVlcnlTdHJpbmcgPSBgZmllbGRzPSR7REVUQUlMU19QQVJBTVN9YDtcblxuICAgIGlmIChvbGRDYXJ0SWQpIHtcbiAgICAgIHF1ZXJ5U3RyaW5nID0gYCR7cXVlcnlTdHJpbmd9Jm9sZENhcnRJZD0ke29sZENhcnRJZH1gO1xuICAgIH1cbiAgICBpZiAodG9NZXJnZUNhcnRHdWlkKSB7XG4gICAgICBxdWVyeVN0cmluZyA9IGAke3F1ZXJ5U3RyaW5nfSZ0b01lcmdlQ2FydEd1aWQ9JHt0b01lcmdlQ2FydEd1aWR9YDtcbiAgICB9XG5cbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgSHR0cFBhcmFtcyh7XG4gICAgICBmcm9tU3RyaW5nOiBxdWVyeVN0cmluZyxcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5wb3N0PE9jYy5DYXJ0Pih1cmwsIHRvQWRkLCB7IHBhcmFtcyB9KVxuICAgICAgLnBpcGUodGhpcy5jb252ZXJ0ZXJTZXJ2aWNlLnBpcGVhYmxlKENBUlRfTk9STUFMSVpFUikpO1xuICB9XG5cbiAgYWRkRW1haWwodXNlcklkOiBzdHJpbmcsIGNhcnRJZDogc3RyaW5nLCBlbWFpbDogc3RyaW5nKTogT2JzZXJ2YWJsZTx7fT4ge1xuICAgIGxldCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgICB9KTtcbiAgICBoZWFkZXJzID0gSW50ZXJjZXB0b3JVdGlsLmNyZWF0ZUhlYWRlcihVU0VfQ0xJRU5UX1RPS0VOLCB0cnVlLCBoZWFkZXJzKTtcblxuICAgIGNvbnN0IGh0dHBQYXJhbXM6IEh0dHBQYXJhbXMgPSBuZXcgSHR0cFBhcmFtcygpLnNldCgnZW1haWwnLCBlbWFpbCk7XG5cbiAgICBjb25zdCB1cmwgPSB0aGlzLm9jY0VuZHBvaW50c1NlcnZpY2UuZ2V0VXJsKCdhZGRFbWFpbCcsIHtcbiAgICAgIHVzZXJJZCxcbiAgICAgIGNhcnRJZCxcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzLmh0dHAucHV0KHVybCwgaHR0cFBhcmFtcywgeyBoZWFkZXJzIH0pO1xuICB9XG59XG4iXX0=
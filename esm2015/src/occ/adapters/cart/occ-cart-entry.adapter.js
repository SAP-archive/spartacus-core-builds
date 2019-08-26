/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CART_MODIFICATION_NORMALIZER } from '../../../cart/connectors/entry/converters';
import { FeatureConfigService } from '../../../features-config/services/feature-config.service';
import { ConverterService } from '../../../util/converter.service';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
export class OccCartEntryAdapter {
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
        const cartEndpoint = 'users/' + userId + '/carts/';
        return this.occEndpointsService.getEndpoint(cartEndpoint);
    }
    /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?} productCode
     * @param {?=} quantity
     * @return {?}
     */
    add(userId, cartId, productCode, quantity = 1) {
        /** @type {?} */
        const toAdd = JSON.stringify({});
        /** @type {?} */
        const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        // TODO: Deprecated, remove Issue: #4125
        if (!this.featureConfigService.isEnabled('configurableOccEndpoints')) {
            return this.legacyAdd(userId, cartId, productCode, quantity);
        }
        /** @type {?} */
        const url = this.occEndpointsService.getUrl('addEntries', {
            userId,
            cartId,
        }, { code: productCode, qty: quantity });
        return this.http
            .post(url, toAdd, { headers })
            .pipe(this.converterService.pipeable(CART_MODIFICATION_NORMALIZER));
    }
    /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?} entryNumber
     * @param {?} qty
     * @param {?=} pickupStore
     * @return {?}
     */
    update(userId, cartId, entryNumber, qty, pickupStore) {
        /** @type {?} */
        let params = {};
        if (pickupStore) {
            params = { pickupStore };
        }
        /** @type {?} */
        const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        // TODO: Deprecated, remove Issue: #4125
        if (!this.featureConfigService.isEnabled('configurableOccEndpoints')) {
            return this.legacyUpdate(userId, cartId, entryNumber, qty, pickupStore);
        }
        /** @type {?} */
        const url = this.occEndpointsService.getUrl('updateEntries', { userId, cartId, entryNumber }, Object.assign({ qty }, params));
        return this.http
            .patch(url, {}, { headers })
            .pipe(this.converterService.pipeable(CART_MODIFICATION_NORMALIZER));
    }
    /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?} entryNumber
     * @return {?}
     */
    remove(userId, cartId, entryNumber) {
        /** @type {?} */
        const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        // TODO: Deprecated, remove Issue: #4125
        if (!this.featureConfigService.isEnabled('configurableOccEndpoints')) {
            return this.legacyRemove(userId, cartId, entryNumber);
        }
        /** @type {?} */
        const url = this.occEndpointsService.getUrl('removeEntries', {
            userId,
            cartId,
            entryNumber,
        });
        return this.http.delete(url, { headers });
    }
    /**
     * @deprecated Since 1.1
     * Use configurable endpoints.
     * Remove issue: #4125
     * @private
     * @param {?} userId
     * @param {?} cartId
     * @param {?} productCode
     * @param {?=} quantity
     * @return {?}
     */
    legacyAdd(userId, cartId, productCode, quantity = 1) {
        /** @type {?} */
        const url = this.getCartEndpoint(userId) + cartId + '/entries';
        /** @type {?} */
        const params = new HttpParams({
            fromString: 'code=' + productCode + '&qty=' + quantity,
        });
        /** @type {?} */
        const toAdd = JSON.stringify({});
        /** @type {?} */
        const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        return this.http
            .post(url, toAdd, { headers, params })
            .pipe(this.converterService.pipeable(CART_MODIFICATION_NORMALIZER));
    }
    /**
     * @deprecated Since 1.1
     * Use configurable endpoints.
     * Remove issue: #4125
     * @private
     * @param {?} userId
     * @param {?} cartId
     * @param {?} entryNumber
     * @param {?} qty
     * @param {?=} pickupStore
     * @return {?}
     */
    legacyUpdate(userId, cartId, entryNumber, qty, pickupStore) {
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
            .pipe(this.converterService.pipeable(CART_MODIFICATION_NORMALIZER));
    }
    /**
     * @deprecated Since 1.1
     * Use configurable endpoints.
     * Remove issue: #4125
     * @private
     * @param {?} userId
     * @param {?} cartId
     * @param {?} entryNumber
     * @return {?}
     */
    legacyRemove(userId, cartId, entryNumber) {
        /** @type {?} */
        const url = this.getCartEndpoint(userId) + cartId + '/entries/' + entryNumber;
        /** @type {?} */
        const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        return this.http.delete(url, { headers });
    }
}
OccCartEntryAdapter.decorators = [
    { type: Injectable }
];
/** @nocollapse */
OccCartEntryAdapter.ctorParameters = () => [
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
    OccCartEntryAdapter.prototype.http;
    /**
     * @type {?}
     * @protected
     */
    OccCartEntryAdapter.prototype.occEndpointsService;
    /**
     * @type {?}
     * @protected
     */
    OccCartEntryAdapter.prototype.converterService;
    /**
     * @type {?}
     * @protected
     */
    OccCartEntryAdapter.prototype.featureConfigService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNhcnQtZW50cnkuYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2MvYWRhcHRlcnMvY2FydC9vY2MtY2FydC1lbnRyeS5hZGFwdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMzRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBRWhHLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRzNFLE1BQU0sT0FBTyxtQkFBbUI7Ozs7Ozs7SUFDOUIsWUFDWSxJQUFnQixFQUNoQixtQkFBd0MsRUFDeEMsZ0JBQWtDLEVBQ2xDLG9CQUEyQztRQUgzQyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXVCO0lBQ3BELENBQUM7Ozs7Ozs7OztJQU9NLGVBQWUsQ0FBQyxNQUFjOztjQUNoQyxZQUFZLEdBQUcsUUFBUSxHQUFHLE1BQU0sR0FBRyxTQUFTO1FBQ2xELE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM1RCxDQUFDOzs7Ozs7OztJQUVNLEdBQUcsQ0FDUixNQUFjLEVBQ2QsTUFBYyxFQUNkLFdBQW1CLEVBQ25CLFdBQW1CLENBQUM7O2NBRWQsS0FBSyxHQUFHLElBQUks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LENBQUMsNEJBQTRCLENBQUMsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7Ozs7Ozs7Ozs7O0lBT08sWUFBWSxDQUNsQixNQUFjLEVBQ2QsTUFBYyxFQUNkLFdBQW1COztjQUViLEdBQUcsR0FDUCxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxHQUFHLE1BQU0sR0FBRyxXQUFXLEdBQUcsV0FBVzs7Y0FFN0QsT0FBTyxHQUFHLElBQUksV0FBVyxDQUFDO1lBQzlCLGNBQWMsRUFBRSxtQ0FBbUM7U0FDcEQsQ0FBQztRQUNGLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7WUFuTEYsVUFBVTs7OztZQVZGLFVBQVU7WUFRVixtQkFBbUI7WUFEbkIsZ0JBQWdCO1lBRmhCLG9CQUFvQjs7Ozs7OztJQVF6QixtQ0FBMEI7Ozs7O0lBQzFCLGtEQUFrRDs7Ozs7SUFDbEQsK0NBQTRDOzs7OztJQUM1QyxtREFBcUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENhcnRFbnRyeUFkYXB0ZXIgfSBmcm9tICcuLi8uLi8uLi9jYXJ0L2Nvbm5lY3RvcnMvZW50cnkvY2FydC1lbnRyeS5hZGFwdGVyJztcbmltcG9ydCB7IENBUlRfTU9ESUZJQ0FUSU9OX05PUk1BTElaRVIgfSBmcm9tICcuLi8uLi8uLi9jYXJ0L2Nvbm5lY3RvcnMvZW50cnkvY29udmVydGVycyc7XG5pbXBvcnQgeyBGZWF0dXJlQ29uZmlnU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2ZlYXR1cmVzLWNvbmZpZy9zZXJ2aWNlcy9mZWF0dXJlLWNvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IENhcnRNb2RpZmljYXRpb24gfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9jYXJ0Lm1vZGVsJztcbmltcG9ydCB7IENvbnZlcnRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi91dGlsL2NvbnZlcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7IE9jY0VuZHBvaW50c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9vY2MtZW5kcG9pbnRzLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT2NjQ2FydEVudHJ5QWRhcHRlciBpbXBsZW1lbnRzIENhcnRFbnRyeUFkYXB0ZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgaHR0cDogSHR0cENsaWVudCxcbiAgICBwcm90ZWN0ZWQgb2NjRW5kcG9pbnRzU2VydmljZTogT2NjRW5kcG9pbnRzU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY29udmVydGVyU2VydmljZTogQ29udmVydGVyU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgZmVhdHVyZUNvbmZpZ1NlcnZpY2U/OiBGZWF0dXJlQ29uZmlnU2VydmljZVxuICApIHt9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIFNpbmNlIDEuMVxuICAgKiBVc2UgY29uZmlndXJhYmxlIGVuZHBvaW50cy5cbiAgICogUmVtb3ZlIGlzc3VlOiAjNDEyNVxuICAgKi9cbiAgcHJvdGVjdGVkIGdldENhcnRFbmRwb2ludCh1c2VySWQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgY2FydEVuZHBvaW50ID0gJ3VzZXJzLycgKyB1c2VySWQgKyAnL2NhcnRzLyc7XG4gICAgcmV0dXJuIHRoaXMub2NjRW5kcG9pbnRzU2VydmljZS5nZXRFbmRwb2ludChjYXJ0RW5kcG9pbnQpO1xuICB9XG5cbiAgcHVibGljIGFkZChcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBjYXJ0SWQ6IHN0cmluZyxcbiAgICBwcm9kdWN0Q29kZTogc3RyaW5nLFxuICAgIHF1YW50aXR5OiBudW1iZXIgPSAxXG4gICk6IE9ic2VydmFibGU8Q2FydE1vZGlmaWNhdGlvbj4ge1xuICAgIGNvbnN0IHRvQWRkID0gSlNPTi5zdHJpbmdpZnkoe30pO1xuXG4gICAgY29uc3QgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG4gICAgfSk7XG5cbiAgICAvLyBUT0RPOiBEZXByZWNhdGVkLCByZW1vdmUgSXNzdWU6ICM0MTI1XG4gICAgaWYgKCF0aGlzLmZlYXR1cmVDb25maWdTZXJ2aWNlLmlzRW5hYmxlZCgnY29uZmlndXJhYmxlT2NjRW5kcG9pbnRzJykpIHtcbiAgICAgIHJldHVybiB0aGlzLmxlZ2FjeUFkZCh1c2VySWQsIGNhcnRJZCwgcHJvZHVjdENvZGUsIHF1YW50aXR5KTtcbiAgICB9XG5cbiAgICBjb25zdCB1cmwgPSB0aGlzLm9jY0VuZHBvaW50c1NlcnZpY2UuZ2V0VXJsKFxuICAgICAgJ2FkZEVudHJpZXMnLFxuICAgICAge1xuICAgICAgICB1c2VySWQsXG4gICAgICAgIGNhcnRJZCxcbiAgICAgIH0sXG4gICAgICB7IGNvZGU6IHByb2R1Y3RDb2RlLCBxdHk6IHF1YW50aXR5IH1cbiAgICApO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLnBvc3Q8Q2FydE1vZGlmaWNhdGlvbj4odXJsLCB0b0FkZCwgeyBoZWFkZXJzIH0pXG4gICAgICAucGlwZSh0aGlzLmNvbnZlcnRlclNlcnZpY2UucGlwZWFibGUoQ0FSVF9NT0RJRklDQVRJT05fTk9STUFMSVpFUikpO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZShcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBjYXJ0SWQ6IHN0cmluZyxcbiAgICBlbnRyeU51bWJlcjogc3RyaW5nLFxuICAgIHF0eTogbnVtYmVyLFxuICAgIHBpY2t1cFN0b3JlPzogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8Q2FydE1vZGlmaWNhdGlvbj4ge1xuICAgIGxldCBwYXJhbXMgPSB7fTtcbiAgICBpZiAocGlja3VwU3RvcmUpIHtcbiAgICAgIHBhcmFtcyA9IHsgcGlja3VwU3RvcmUgfTtcbiAgICB9XG5cbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgICB9KTtcblxuICAgIC8vIFRPRE86IERlcHJlY2F0ZWQsIHJlbW92ZSBJc3N1ZTogIzQxMjVcbiAgICBpZiAoIXRoaXMuZmVhdHVyZUNvbmZpZ1NlcnZpY2UuaXNFbmFibGVkKCdjb25maWd1cmFibGVPY2NFbmRwb2ludHMnKSkge1xuICAgICAgcmV0dXJuIHRoaXMubGVnYWN5VXBkYXRlKHVzZXJJZCwgY2FydElkLCBlbnRyeU51bWJlciwgcXR5LCBwaWNrdXBTdG9yZSk7XG4gICAgfVxuXG4gICAgY29uc3QgdXJsID0gdGhpcy5vY2NFbmRwb2ludHNTZXJ2aWNlLmdldFVybChcbiAgICAgICd1cGRhdGVFbnRyaWVzJyxcbiAgICAgIHsgdXNlcklkLCBjYXJ0SWQsIGVudHJ5TnVtYmVyIH0sXG4gICAgICB7IHF0eSwgLi4ucGFyYW1zIH1cbiAgICApO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLnBhdGNoPENhcnRNb2RpZmljYXRpb24+KHVybCwge30sIHsgaGVhZGVycyB9KVxuICAgICAgLnBpcGUodGhpcy5jb252ZXJ0ZXJTZXJ2aWNlLnBpcGVhYmxlKENBUlRfTU9ESUZJQ0FUSU9OX05PUk1BTElaRVIpKTtcbiAgfVxuXG4gIHB1YmxpYyByZW1vdmUoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgY2FydElkOiBzdHJpbmcsXG4gICAgZW50cnlOdW1iZXI6IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAgIH0pO1xuXG4gICAgLy8gVE9ETzogRGVwcmVjYXRlZCwgcmVtb3ZlIElzc3VlOiAjNDEyNVxuICAgIGlmICghdGhpcy5mZWF0dXJlQ29uZmlnU2VydmljZS5pc0VuYWJsZWQoJ2NvbmZpZ3VyYWJsZU9jY0VuZHBvaW50cycpKSB7XG4gICAgICByZXR1cm4gdGhpcy5sZWdhY3lSZW1vdmUodXNlcklkLCBjYXJ0SWQsIGVudHJ5TnVtYmVyKTtcbiAgICB9XG5cbiAgICBjb25zdCB1cmwgPSB0aGlzLm9jY0VuZHBvaW50c1NlcnZpY2UuZ2V0VXJsKCdyZW1vdmVFbnRyaWVzJywge1xuICAgICAgdXNlcklkLFxuICAgICAgY2FydElkLFxuICAgICAgZW50cnlOdW1iZXIsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZSh1cmwsIHsgaGVhZGVycyB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBTaW5jZSAxLjFcbiAgICogVXNlIGNvbmZpZ3VyYWJsZSBlbmRwb2ludHMuXG4gICAqIFJlbW92ZSBpc3N1ZTogIzQxMjVcbiAgICovXG4gIHByaXZhdGUgbGVnYWN5QWRkKFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIGNhcnRJZDogc3RyaW5nLFxuICAgIHByb2R1Y3RDb2RlOiBzdHJpbmcsXG4gICAgcXVhbnRpdHk6IG51bWJlciA9IDFcbiAgKTogT2JzZXJ2YWJsZTxDYXJ0TW9kaWZpY2F0aW9uPiB7XG4gICAgY29uc3QgdXJsID0gdGhpcy5nZXRDYXJ0RW5kcG9pbnQodXNlcklkKSArIGNhcnRJZCArICcvZW50cmllcyc7XG5cbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgSHR0cFBhcmFtcyh7XG4gICAgICBmcm9tU3RyaW5nOiAnY29kZT0nICsgcHJvZHVjdENvZGUgKyAnJnF0eT0nICsgcXVhbnRpdHksXG4gICAgfSk7XG5cbiAgICBjb25zdCB0b0FkZCA9IEpTT04uc3RyaW5naWZ5KHt9KTtcbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5wb3N0PENhcnRNb2RpZmljYXRpb24+KHVybCwgdG9BZGQsIHsgaGVhZGVycywgcGFyYW1zIH0pXG4gICAgICAucGlwZSh0aGlzLmNvbnZlcnRlclNlcnZpY2UucGlwZWFibGUoQ0FSVF9NT0RJRklDQVRJT05fTk9STUFMSVpFUikpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIFNpbmNlIDEuMVxuICAgKiBVc2UgY29uZmlndXJhYmxlIGVuZHBvaW50cy5cbiAgICogUmVtb3ZlIGlzc3VlOiAjNDEyNVxuICAgKi9cbiAgcHJpdmF0ZSBsZWdhY3lVcGRhdGUoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgY2FydElkOiBzdHJpbmcsXG4gICAgZW50cnlOdW1iZXI6IHN0cmluZyxcbiAgICBxdHk6IG51bWJlcixcbiAgICBwaWNrdXBTdG9yZT86IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPENhcnRNb2RpZmljYXRpb24+IHtcbiAgICBjb25zdCB1cmwgPVxuICAgICAgdGhpcy5nZXRDYXJ0RW5kcG9pbnQodXNlcklkKSArIGNhcnRJZCArICcvZW50cmllcy8nICsgZW50cnlOdW1iZXI7XG4gICAgbGV0IHF1ZXJ5U3RyaW5nID0gJ3F0eT0nICsgcXR5O1xuXG4gICAgaWYgKHBpY2t1cFN0b3JlKSB7XG4gICAgICBxdWVyeVN0cmluZyA9IHF1ZXJ5U3RyaW5nICsgJyZwaWNrdXBTdG9yZT0nICsgcGlja3VwU3RvcmU7XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKHtcbiAgICAgIGZyb21TdHJpbmc6IHF1ZXJ5U3RyaW5nLFxuICAgIH0pO1xuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5wYXRjaDxDYXJ0TW9kaWZpY2F0aW9uPih1cmwsIHt9LCB7IGhlYWRlcnMsIHBhcmFtcyB9KVxuICAgICAgLnBpcGUodGhpcy5jb252ZXJ0ZXJTZXJ2aWNlLnBpcGVhYmxlKENBUlRfTU9ESUZJQ0FUSU9OX05PUk1BTElaRVIpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBTaW5jZSAxLjFcbiAgICogVXNlIGNvbmZpZ3VyYWJsZSBlbmRwb2ludHMuXG4gICAqIFJlbW92ZSBpc3N1ZTogIzQxMjVcbiAgICovXG4gIHByaXZhdGUgbGVnYWN5UmVtb3ZlKFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIGNhcnRJZDogc3RyaW5nLFxuICAgIGVudHJ5TnVtYmVyOiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCB1cmwgPVxuICAgICAgdGhpcy5nZXRDYXJ0RW5kcG9pbnQodXNlcklkKSArIGNhcnRJZCArICcvZW50cmllcy8nICsgZW50cnlOdW1iZXI7XG5cbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZSh1cmwsIHsgaGVhZGVycyB9KTtcbiAgfVxufVxuIl19
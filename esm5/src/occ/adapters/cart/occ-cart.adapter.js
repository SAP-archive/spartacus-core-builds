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
var DETAILS_PARAMS = 'DEFAULT,potentialProductPromotions,appliedProductPromotions,potentialOrderPromotions,appliedOrderPromotions,' +
    'entries(totalPrice(formattedValue),product(images(FULL),stock(FULL)),basePrice(formattedValue),updateable),' +
    'totalPrice(formattedValue),totalItems,totalPriceWithTax(formattedValue),totalDiscounts(value,formattedValue),subTotal(formattedValue),' +
    'deliveryItemsQuantity,deliveryCost(formattedValue),totalTax(formattedValue),pickupItemsQuantity,net,' +
    'appliedVouchers,productDiscounts(formattedValue)';
var OccCartAdapter = /** @class */ (function () {
    function OccCartAdapter(http, occEndpointsService, converterService, featureConfigService) {
        this.http = http;
        this.occEndpointsService = occEndpointsService;
        this.converterService = converterService;
        this.featureConfigService = featureConfigService;
    }
    /**
     * @deprecated Since 1.1
     * Use configurable endpoints. Will be removed as of 2.0.
     */
    /**
     * @deprecated Since 1.1
     * Use configurable endpoints. Will be removed as of 2.0.
     * @protected
     * @param {?} userId
     * @return {?}
     */
    OccCartAdapter.prototype.getCartEndpoint = /**
     * @deprecated Since 1.1
     * Use configurable endpoints. Will be removed as of 2.0.
     * @protected
     * @param {?} userId
     * @return {?}
     */
    function (userId) {
        /** @type {?} */
        var cartEndpoint = "users/" + userId + "/carts/";
        return this.occEndpointsService.getEndpoint(cartEndpoint);
    };
    /**
     * @param {?} userId
     * @return {?}
     */
    OccCartAdapter.prototype.loadAll = /**
     * @param {?} userId
     * @return {?}
     */
    function (userId) {
        // TODO 2.0: Remove
        if (!this.featureConfigService.isEnabled('configurableOccEndpoints')) {
            return this.legacyLoadAll(userId);
        }
        return this.http
            .get(this.occEndpointsService.getUrl('carts', { userId: userId }))
            .pipe(pluck('carts'), this.converterService.pipeableMany(CART_NORMALIZER));
    };
    /**
     * @param {?} userId
     * @param {?} cartId
     * @return {?}
     */
    OccCartAdapter.prototype.load = /**
     * @param {?} userId
     * @param {?} cartId
     * @return {?}
     */
    function (userId, cartId) {
        if (cartId === 'current') {
            return this.loadAll(userId).pipe(map((/**
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
            // TODO 2.0: Remove
            if (!this.featureConfigService.isEnabled('configurableOccEndpoints')) {
                return this.legacyLoad(userId, cartId);
            }
            return this.http
                .get(this.occEndpointsService.getUrl('cart', { userId: userId, cartId: cartId }))
                .pipe(this.converterService.pipeable(CART_NORMALIZER));
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
        var toAdd = JSON.stringify({});
        // TODO 2.0: Remove
        if (!this.featureConfigService.isEnabled('configurableOccEndpoints')) {
            return this.legacyCreate(userId, toAdd, oldCartId, toMergeCartGuid);
        }
        /** @type {?} */
        var params = {};
        if (oldCartId) {
            params = { oldCartId: oldCartId };
        }
        if (toMergeCartGuid) {
            params['toMergeCartGuid'] = toMergeCartGuid;
        }
        return this.http
            .post(this.occEndpointsService.getUrl('createCart', { userId: userId }, params), toAdd)
            .pipe(this.converterService.pipeable(CART_NORMALIZER));
    };
    /**
     * @deprecated Since 1.1
     * Use configurable endpoints. Will be removed as of 2.0.
     */
    /**
     * @deprecated Since 1.1
     * Use configurable endpoints. Will be removed as of 2.0.
     * @private
     * @param {?} userId
     * @return {?}
     */
    OccCartAdapter.prototype.legacyLoadAll = /**
     * @deprecated Since 1.1
     * Use configurable endpoints. Will be removed as of 2.0.
     * @private
     * @param {?} userId
     * @return {?}
     */
    function (userId) {
        /** @type {?} */
        var url = this.getCartEndpoint(userId);
        /** @type {?} */
        var params = new HttpParams({
            fromString: "fields=carts(" + DETAILS_PARAMS + ",saveTime)",
        });
        return this.http.get(url, { params: params }).pipe(pluck('carts'), this.converterService.pipeableMany(CART_NORMALIZER));
    };
    /**
     * @deprecated Since 1.1
     * Use configurable endpoints. Will be removed as of 2.0.
     */
    /**
     * @deprecated Since 1.1
     * Use configurable endpoints. Will be removed as of 2.0.
     * @private
     * @param {?} userId
     * @param {?} cartId
     * @return {?}
     */
    OccCartAdapter.prototype.legacyLoad = /**
     * @deprecated Since 1.1
     * Use configurable endpoints. Will be removed as of 2.0.
     * @private
     * @param {?} userId
     * @param {?} cartId
     * @return {?}
     */
    function (userId, cartId) {
        /** @type {?} */
        var url = this.getCartEndpoint(userId) + cartId;
        /** @type {?} */
        var params = new HttpParams({
            fromString: "fields=" + DETAILS_PARAMS,
        });
        return this.http
            .get(url, { params: params })
            .pipe(this.converterService.pipeable(CART_NORMALIZER));
    };
    /**
     * @deprecated Since 1.1
     * Use configurable endpoints. Will be removed as of 2.0.
     */
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
    OccCartAdapter.prototype.legacyCreate = /**
     * @deprecated Since 1.1
     * Use configurable endpoints. Will be removed as of 2.0.
     * @private
     * @param {?} userId
     * @param {?} toAdd
     * @param {?=} oldCartId
     * @param {?=} toMergeCartGuid
     * @return {?}
     */
    function (userId, toAdd, oldCartId, toMergeCartGuid) {
        /** @type {?} */
        var url = this.getCartEndpoint(userId);
        /** @type {?} */
        var queryString = "fields=" + DETAILS_PARAMS;
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
        return this.http
            .post(url, toAdd, { params: params })
            .pipe(this.converterService.pipeable(CART_NORMALIZER));
    };
    OccCartAdapter.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    OccCartAdapter.ctorParameters = function () { return [
        { type: HttpClient },
        { type: OccEndpointsService },
        { type: ConverterService },
        { type: FeatureConfigService }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNhcnQuYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2MvYWRhcHRlcnMvY2FydC9vY2MtY2FydC5hZGFwdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzlELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU1QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDM0UsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFFaEcsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFbkUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7OztJQUdyRSxjQUFjLEdBQ2xCLDhHQUE4RztJQUM5Ryw2R0FBNkc7SUFDN0csd0lBQXdJO0lBQ3hJLHNHQUFzRztJQUN0RyxrREFBa0Q7QUFFcEQ7SUFFRSx3QkFDWSxJQUFnQixFQUNoQixtQkFBd0MsRUFDeEMsZ0JBQWtDLEVBQ2xDLG9CQUEyQztRQUgzQyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXVCO0lBQ3BELENBQUM7SUFFSjs7O09BR0c7Ozs7Ozs7O0lBQ08sd0NBQWU7Ozs7Ozs7SUFBekIsVUFBMEIsTUFBYzs7WUFDaEMsWUFBWSxHQUFHLFdBQVMsTUFBTSxZQUFTO1FBQzdDLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FB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RDtRQUNELElBQUksZUFBZSxFQUFFO1lBQ25CLFdBQVcsR0FBTSxXQUFXLHlCQUFvQixlQUFpQixDQUFDO1NBQ25FOztZQUVLLE1BQU0sR0FBRyxJQUFJLFVBQVUsQ0FBQztZQUM1QixVQUFVLEVBQUUsV0FBVztTQUN4QixDQUFDO1FBRUYsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLElBQUksQ0FBVyxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUUsTUFBTSxRQUFBLEVBQUUsQ0FBQzthQUN0QyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0lBQzNELENBQUM7O2dCQWpKRixVQUFVOzs7O2dCQXBCRixVQUFVO2dCQVVWLG1CQUFtQjtnQkFGbkIsZ0JBQWdCO2dCQUZoQixvQkFBb0I7O0lBZ0s3QixxQkFBQztDQUFBLEFBbEpELElBa0pDO1NBakpZLGNBQWM7Ozs7OztJQUV2Qiw4QkFBMEI7Ozs7O0lBQzFCLDZDQUFrRDs7Ozs7SUFDbEQsMENBQTRDOzs7OztJQUM1Qyw4Q0FBcUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBwbHVjayB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENhcnRBZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vY2FydC9jb25uZWN0b3JzL2NhcnQvY2FydC5hZGFwdGVyJztcbmltcG9ydCB7IENBUlRfTk9STUFMSVpFUiB9IGZyb20gJy4uLy4uLy4uL2NhcnQvY29ubmVjdG9ycy9jYXJ0L2NvbnZlcnRlcnMnO1xuaW1wb3J0IHsgRmVhdHVyZUNvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9mZWF0dXJlcy1jb25maWcvc2VydmljZXMvZmVhdHVyZS1jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBDYXJ0IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvY2FydC5tb2RlbCc7XG5pbXBvcnQgeyBDb252ZXJ0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9jb252ZXJ0ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBPY2MgfSBmcm9tICcuLi8uLi9vY2MtbW9kZWxzL29jYy5tb2RlbHMnO1xuaW1wb3J0IHsgT2NjRW5kcG9pbnRzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL29jYy1lbmRwb2ludHMuc2VydmljZSc7XG5cbi8vIFRPRE8gMi4wOiBSZW1vdmVcbmNvbnN0IERFVEFJTFNfUEFSQU1TID1cbiAgJ0RFRkFVTFQscG90ZW50aWFsUHJvZHVjdFByb21vdGlvbnMsYXBwbGllZFByb2R1Y3RQcm9tb3Rpb25zLHBvdGVudGlhbE9yZGVyUHJvbW90aW9ucyxhcHBsaWVkT3JkZXJQcm9tb3Rpb25zLCcgK1xuICAnZW50cmllcyh0b3RhbFByaWNlKGZvcm1hdHRlZFZhbHVlKSxwcm9kdWN0KGltYWdlcyhGVUxMKSxzdG9jayhGVUxMKSksYmFzZVByaWNlKGZvcm1hdHRlZFZhbHVlKSx1cGRhdGVhYmxlKSwnICtcbiAgJ3RvdGFsUHJpY2UoZm9ybWF0dGVkVmFsdWUpLHRvdGFsSXRlbXMsdG90YWxQcmljZVdpdGhUYXgoZm9ybWF0dGVkVmFsdWUpLHRvdGFsRGlzY291bnRzKHZhbHVlLGZvcm1hdHRlZFZhbHVlKSxzdWJUb3RhbChmb3JtYXR0ZWRWYWx1ZSksJyArXG4gICdkZWxpdmVyeUl0ZW1zUXVhbnRpdHksZGVsaXZlcnlDb3N0KGZvcm1hdHRlZFZhbHVlKSx0b3RhbFRheChmb3JtYXR0ZWRWYWx1ZSkscGlja3VwSXRlbXNRdWFudGl0eSxuZXQsJyArXG4gICdhcHBsaWVkVm91Y2hlcnMscHJvZHVjdERpc2NvdW50cyhmb3JtYXR0ZWRWYWx1ZSknO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT2NjQ2FydEFkYXB0ZXIgaW1wbGVtZW50cyBDYXJ0QWRhcHRlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByb3RlY3RlZCBvY2NFbmRwb2ludHNTZXJ2aWNlOiBPY2NFbmRwb2ludHNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjb252ZXJ0ZXJTZXJ2aWNlOiBDb252ZXJ0ZXJTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBmZWF0dXJlQ29uZmlnU2VydmljZT86IEZlYXR1cmVDb25maWdTZXJ2aWNlXG4gICkge31cblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgU2luY2UgMS4xXG4gICAqIFVzZSBjb25maWd1cmFibGUgZW5kcG9pbnRzLiBXaWxsIGJlIHJlbW92ZWQgYXMgb2YgMi4wLlxuICAgKi9cbiAgcHJvdGVjdGVkIGdldENhcnRFbmRwb2ludCh1c2VySWQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgY2FydEVuZHBvaW50ID0gYHVzZXJzLyR7dXNlcklkfS9jYXJ0cy9gO1xuICAgIHJldHVybiB0aGlzLm9jY0VuZHBvaW50c1NlcnZpY2UuZ2V0RW5kcG9pbnQoY2FydEVuZHBvaW50KTtcbiAgfVxuXG4gIHB1YmxpYyBsb2FkQWxsKHVzZXJJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxDYXJ0W10+IHtcbiAgICAvLyBUT0RPIDIuMDogUmVtb3ZlXG4gICAgaWYgKCF0aGlzLmZlYXR1cmVDb25maWdTZXJ2aWNlLmlzRW5hYmxlZCgnY29uZmlndXJhYmxlT2NjRW5kcG9pbnRzJykpIHtcbiAgICAgIHJldHVybiB0aGlzLmxlZ2FjeUxvYWRBbGwodXNlcklkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0PE9jYy5DYXJ0TGlzdD4odGhpcy5vY2NFbmRwb2ludHNTZXJ2aWNlLmdldFVybCgnY2FydHMnLCB7IHVzZXJJZCB9KSlcbiAgICAgIC5waXBlKFxuICAgICAgICBwbHVjaygnY2FydHMnKSxcbiAgICAgICAgdGhpcy5jb252ZXJ0ZXJTZXJ2aWNlLnBpcGVhYmxlTWFueShDQVJUX05PUk1BTElaRVIpXG4gICAgICApO1xuICB9XG5cbiAgcHVibGljIGxvYWQodXNlcklkOiBzdHJpbmcsIGNhcnRJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxDYXJ0PiB7XG4gICAgaWYgKGNhcnRJZCA9PT0gJ2N1cnJlbnQnKSB7XG4gICAgICByZXR1cm4gdGhpcy5sb2FkQWxsKHVzZXJJZCkucGlwZShcbiAgICAgICAgbWFwKGNhcnRzID0+IHtcbiAgICAgICAgICBpZiAoY2FydHMpIHtcbiAgICAgICAgICAgIGNvbnN0IGFjdGl2ZUNhcnQgPSBjYXJ0cy5maW5kKGNhcnQgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gY2FydFsnc2F2ZVRpbWUnXSA9PT0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gYWN0aXZlQ2FydDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVE9ETyAyLjA6IFJlbW92ZVxuICAgICAgaWYgKCF0aGlzLmZlYXR1cmVDb25maWdTZXJ2aWNlLmlzRW5hYmxlZCgnY29uZmlndXJhYmxlT2NjRW5kcG9pbnRzJykpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGVnYWN5TG9hZCh1c2VySWQsIGNhcnRJZCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAgIC5nZXQ8T2NjLkNhcnQ+KFxuICAgICAgICAgIHRoaXMub2NjRW5kcG9pbnRzU2VydmljZS5nZXRVcmwoJ2NhcnQnLCB7IHVzZXJJZCwgY2FydElkIH0pXG4gICAgICAgIClcbiAgICAgICAgLnBpcGUodGhpcy5jb252ZXJ0ZXJTZXJ2aWNlLnBpcGVhYmxlKENBUlRfTk9STUFMSVpFUikpO1xuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZShcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBvbGRDYXJ0SWQ/OiBzdHJpbmcsXG4gICAgdG9NZXJnZUNhcnRHdWlkPzogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8Q2FydD4ge1xuICAgIGNvbnN0IHRvQWRkID0gSlNPTi5zdHJpbmdpZnkoe30pO1xuICAgIC8vIFRPRE8gMi4wOiBSZW1vdmVcbiAgICBpZiAoIXRoaXMuZmVhdHVyZUNvbmZpZ1NlcnZpY2UuaXNFbmFibGVkKCdjb25maWd1cmFibGVPY2NFbmRwb2ludHMnKSkge1xuICAgICAgcmV0dXJuIHRoaXMubGVnYWN5Q3JlYXRlKHVzZXJJZCwgdG9BZGQsIG9sZENhcnRJZCwgdG9NZXJnZUNhcnRHdWlkKTtcbiAgICB9XG5cbiAgICBsZXQgcGFyYW1zID0ge307XG5cbiAgICBpZiAob2xkQ2FydElkKSB7XG4gICAgICBwYXJhbXMgPSB7IG9sZENhcnRJZDogb2xkQ2FydElkIH07XG4gICAgfVxuICAgIGlmICh0b01lcmdlQ2FydEd1aWQpIHtcbiAgICAgIHBhcmFtc1sndG9NZXJnZUNhcnRHdWlkJ10gPSB0b01lcmdlQ2FydEd1aWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLnBvc3Q8T2NjLkNhcnQ+KFxuICAgICAgICB0aGlzLm9jY0VuZHBvaW50c1NlcnZpY2UuZ2V0VXJsKCdjcmVhdGVDYXJ0JywgeyB1c2VySWQgfSwgcGFyYW1zKSxcbiAgICAgICAgdG9BZGRcbiAgICAgIClcbiAgICAgIC5waXBlKHRoaXMuY29udmVydGVyU2VydmljZS5waXBlYWJsZShDQVJUX05PUk1BTElaRVIpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBTaW5jZSAxLjFcbiAgICogVXNlIGNvbmZpZ3VyYWJsZSBlbmRwb2ludHMuIFdpbGwgYmUgcmVtb3ZlZCBhcyBvZiAyLjAuXG4gICAqL1xuICBwcml2YXRlIGxlZ2FjeUxvYWRBbGwodXNlcklkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPENhcnRbXT4ge1xuICAgIGNvbnN0IHVybCA9IHRoaXMuZ2V0Q2FydEVuZHBvaW50KHVzZXJJZCk7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoe1xuICAgICAgZnJvbVN0cmluZzogYGZpZWxkcz1jYXJ0cygke0RFVEFJTFNfUEFSQU1TfSxzYXZlVGltZSlgLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8T2NjLkNhcnRMaXN0Pih1cmwsIHsgcGFyYW1zIH0pLnBpcGUoXG4gICAgICBwbHVjaygnY2FydHMnKSxcbiAgICAgIHRoaXMuY29udmVydGVyU2VydmljZS5waXBlYWJsZU1hbnkoQ0FSVF9OT1JNQUxJWkVSKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgU2luY2UgMS4xXG4gICAqIFVzZSBjb25maWd1cmFibGUgZW5kcG9pbnRzLiBXaWxsIGJlIHJlbW92ZWQgYXMgb2YgMi4wLlxuICAgKi9cbiAgcHJpdmF0ZSBsZWdhY3lMb2FkKHVzZXJJZDogc3RyaW5nLCBjYXJ0SWQ6IHN0cmluZyk6IE9ic2VydmFibGU8Q2FydD4ge1xuICAgIGNvbnN0IHVybCA9IHRoaXMuZ2V0Q2FydEVuZHBvaW50KHVzZXJJZCkgKyBjYXJ0SWQ7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoe1xuICAgICAgZnJvbVN0cmluZzogYGZpZWxkcz0ke0RFVEFJTFNfUEFSQU1TfWAsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0PE9jYy5DYXJ0Pih1cmwsIHsgcGFyYW1zIH0pXG4gICAgICAucGlwZSh0aGlzLmNvbnZlcnRlclNlcnZpY2UucGlwZWFibGUoQ0FSVF9OT1JNQUxJWkVSKSk7XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgU2luY2UgMS4xXG4gICAqIFVzZSBjb25maWd1cmFibGUgZW5kcG9pbnRzLiBXaWxsIGJlIHJlbW92ZWQgYXMgb2YgMi4wLlxuICAgKi9cbiAgcHJpdmF0ZSBsZWdhY3lDcmVhdGUoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgdG9BZGQ6IHN0cmluZyxcbiAgICBvbGRDYXJ0SWQ/OiBzdHJpbmcsXG4gICAgdG9NZXJnZUNhcnRHdWlkPzogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8Q2FydD4ge1xuICAgIGNvbnN0IHVybCA9IHRoaXMuZ2V0Q2FydEVuZHBvaW50KHVzZXJJZCk7XG4gICAgbGV0IHF1ZXJ5U3RyaW5nID0gYGZpZWxkcz0ke0RFVEFJTFNfUEFSQU1TfWA7XG5cbiAgICBpZiAob2xkQ2FydElkKSB7XG4gICAgICBxdWVyeVN0cmluZyA9IGAke3F1ZXJ5U3RyaW5nfSZvbGRDYXJ0SWQ9JHtvbGRDYXJ0SWR9YDtcbiAgICB9XG4gICAgaWYgKHRvTWVyZ2VDYXJ0R3VpZCkge1xuICAgICAgcXVlcnlTdHJpbmcgPSBgJHtxdWVyeVN0cmluZ30mdG9NZXJnZUNhcnRHdWlkPSR7dG9NZXJnZUNhcnRHdWlkfWA7XG4gICAgfVxuXG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoe1xuICAgICAgZnJvbVN0cmluZzogcXVlcnlTdHJpbmcsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAucG9zdDxPY2MuQ2FydD4odXJsLCB0b0FkZCwgeyBwYXJhbXMgfSlcbiAgICAgIC5waXBlKHRoaXMuY29udmVydGVyU2VydmljZS5waXBlYWJsZShDQVJUX05PUk1BTElaRVIpKTtcbiAgfVxufVxuIl19
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, pluck } from 'rxjs/operators';
import { CART_NORMALIZER } from '../../../cart/connectors/cart/converters';
import { ConverterService } from '../../../util/converter.service';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
/** @type {?} */
var DETAILS_PARAMS = 'DEFAULT,potentialProductPromotions,appliedProductPromotions,potentialOrderPromotions,appliedOrderPromotions,' +
    'entries(totalPrice(formattedValue),product(images(FULL),stock(FULL)),basePrice(formattedValue)),' +
    'totalPrice(formattedValue),totalItems,totalPriceWithTax(formattedValue),totalDiscounts(value,formattedValue),subTotal(formattedValue),' +
    'deliveryItemsQuantity,deliveryCost(formattedValue),totalTax(formattedValue),pickupItemsQuantity,net,' +
    'appliedVouchers,productDiscounts(formattedValue)';
var OccCartAdapter = /** @class */ (function () {
    function OccCartAdapter(http, occEndpoints, converter) {
        this.http = http;
        this.occEndpoints = occEndpoints;
        this.converter = converter;
    }
    /**
     * @protected
     * @param {?} userId
     * @return {?}
     */
    OccCartAdapter.prototype.getCartEndpoint = /**
     * @protected
     * @param {?} userId
     * @return {?}
     */
    function (userId) {
        /** @type {?} */
        var cartEndpoint = "users/" + userId + "/carts/";
        return this.occEndpoints.getEndpoint(cartEndpoint);
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
        /** @type {?} */
        var url = this.getCartEndpoint(userId);
        /** @type {?} */
        var params = new HttpParams({
            fromString: "fields=carts(" + DETAILS_PARAMS + ",saveTime)",
        });
        return this.http.get(url, { params: params }).pipe(pluck('carts'), this.converter.pipeableMany(CART_NORMALIZER));
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
        /** @type {?} */
        var url = this.getCartEndpoint(userId) + cartId;
        /** @type {?} */
        var params = new HttpParams({
            fromString: "fields=" + DETAILS_PARAMS,
        });
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
            return this.http
                .get(url, { params: params })
                .pipe(this.converter.pipeable(CART_NORMALIZER));
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
        var url = this.getCartEndpoint(userId);
        /** @type {?} */
        var toAdd = JSON.stringify({});
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
            .pipe(this.converter.pipeable(CART_NORMALIZER));
    };
    OccCartAdapter.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    OccCartAdapter.ctorParameters = function () { return [
        { type: HttpClient },
        { type: OccEndpointsService },
        { type: ConverterService }
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
    OccCartAdapter.prototype.occEndpoints;
    /**
     * @type {?}
     * @protected
     */
    OccCartAdapter.prototype.converter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNhcnQuYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2MvYWRhcHRlcnMvY2FydC9vY2MtY2FydC5hZGFwdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzlELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU1QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFFM0UsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFbkUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7O0lBRXJFLGNBQWMsR0FDbEIsOEdBQThHO0lBQzlHLGtHQUFrRztJQUNsRyx3SUFBd0k7SUFDeEksc0dBQXNHO0lBQ3RHLGtEQUFrRDtBQUVwRDtJQUVFLHdCQUNZLElBQWdCLEVBQ2hCLFlBQWlDLEVBQ2pDLFNBQTJCO1FBRjNCLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsaUJBQVksR0FBWixZQUFZLENBQXFCO1FBQ2pDLGNBQVMsR0FBVCxTQUFTLENBQWtCO0lBQ3BDLENBQUM7Ozs7OztJQUVNLHdDQUFlOzs7OztJQUF6QixVQUEwQixNQUFjOztZQUNoQyxZQUFZLEdBQUcsV0FBUyxNQUFNLFlBQVM7UUFDN0MsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNyRCxDQUFDOzs7OztJQUVNLGdDQUFPOzs7O0lBQWQsVUFBZSxNQUFjOztZQUNyQixHQUFHLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUM7O1lBQ2xDLE1BQU0sR0FBRyxJQUFJLFVBQVUsQ0FBQztZQUM1QixVQUFVLEVBQUUsa0JBQWdCLGNBQWMsZUFBWTtTQUN2RCxDQUFDO1FBRUYsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBZSxHQUFHLEVBQUUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQzlELEtBQUssQ0FBQyxPQUFPLENBQUMsRUFDZCxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsQ0FDN0MsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUVNLDZCQUFJOzs7OztJQUFYLFVBQVksTUFBYyxFQUFFLE1BQWM7O1lBQ2xDLEdBQUcsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxHQUFHLE1BQU07O1lBQzNDLE1BQU0sR0FBRyxJQUFJLFVBQVUsQ0FBQztZQUM1QixVQUFVLEVBQUUsWUFBVSxjQUFnQjtTQUN2QyxDQUFDO1FBRUYsSUFBSSxNQUFNLEtBQUssU0FBUyxFQUFFO1lBQ3hCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQzlCLEdBQUc7Ozs7WUFBQyxVQUFBLEtBQUs7Z0JBQ1AsSUFBSSxLQUFLLEVBQUU7O3dCQUNILFVBQVUsR0FBRyxLQUFLLENBQUMsSUFBSTs7OztvQkFBQyxVQUFBLElBQUk7d0JBQ2hDLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLFNBQVMsQ0FBQztvQkFDeEMsQ0FBQyxFQUFDO29CQUNGLE9BQU8sVUFBVSxDQUFDO2lCQUNuQjtxQkFBTTtvQkFDTCxPQUFPLElBQUksQ0FBQztpQkFDYjtZQUNILENBQUMsRUFBQyxDQUNILENBQUM7U0FDSDthQUFNO1lBQ0wsT0FBTyxJQUFJLENBQUMsSUFBSTtpQkFDYixHQUFHLENBQVcsR0FBRyxFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDO2lCQUN0QyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztTQUNuRDtJQUNILENBQUM7Ozs7Ozs7SUFFRCwrQkFBTTs7Ozs7O0lBQU4sVUFDRSxNQUFjLEVBQ2QsU0FBa0IsRUFDbEIsZUFBd0I7O1lBRWxCLEdBQUcsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQzs7WUFDbEMsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDOztZQUM1QixXQUFXLEdBQUcsWUFBVSxjQUFnQjtRQUU1QyxJQUFJLFNBQVMsRUFBRTtZQUNiLFdBQVcsR0FBTSxXQUFXLG1CQUFjLFNBQVcsQ0FBQztTQUN2RDtRQUNELElBQUksZUFBZSxFQUFFO1lBQ25CLFdBQVcsR0FBTSxXQUFXLHlCQUFvQixlQUFpQixDQUFDO1NBQ25FOztZQUNLLE1BQU0sR0FBRyxJQUFJLFVBQVUsQ0FBQztZQUM1QixVQUFVLEVBQUUsV0FBVztTQUN4QixDQUFDO1FBRUYsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLElBQUksQ0FBVyxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDO2FBQzlDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0lBQ3BELENBQUM7O2dCQXpFRixVQUFVOzs7O2dCQWxCRixVQUFVO2dCQVNWLG1CQUFtQjtnQkFGbkIsZ0JBQWdCOztJQXFGekIscUJBQUM7Q0FBQSxBQTFFRCxJQTBFQztTQXpFWSxjQUFjOzs7Ozs7SUFFdkIsOEJBQTBCOzs7OztJQUMxQixzQ0FBMkM7Ozs7O0lBQzNDLG1DQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHBsdWNrIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ2FydEFkYXB0ZXIgfSBmcm9tICcuLi8uLi8uLi9jYXJ0L2Nvbm5lY3RvcnMvY2FydC9jYXJ0LmFkYXB0ZXInO1xuaW1wb3J0IHsgQ0FSVF9OT1JNQUxJWkVSIH0gZnJvbSAnLi4vLi4vLi4vY2FydC9jb25uZWN0b3JzL2NhcnQvY29udmVydGVycyc7XG5pbXBvcnQgeyBDYXJ0IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvY2FydC5tb2RlbCc7XG5pbXBvcnQgeyBDb252ZXJ0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9jb252ZXJ0ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBPY2MgfSBmcm9tICcuLi8uLi9vY2MtbW9kZWxzL29jYy5tb2RlbHMnO1xuaW1wb3J0IHsgT2NjRW5kcG9pbnRzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL29jYy1lbmRwb2ludHMuc2VydmljZSc7XG5cbmNvbnN0IERFVEFJTFNfUEFSQU1TID1cbiAgJ0RFRkFVTFQscG90ZW50aWFsUHJvZHVjdFByb21vdGlvbnMsYXBwbGllZFByb2R1Y3RQcm9tb3Rpb25zLHBvdGVudGlhbE9yZGVyUHJvbW90aW9ucyxhcHBsaWVkT3JkZXJQcm9tb3Rpb25zLCcgK1xuICAnZW50cmllcyh0b3RhbFByaWNlKGZvcm1hdHRlZFZhbHVlKSxwcm9kdWN0KGltYWdlcyhGVUxMKSxzdG9jayhGVUxMKSksYmFzZVByaWNlKGZvcm1hdHRlZFZhbHVlKSksJyArXG4gICd0b3RhbFByaWNlKGZvcm1hdHRlZFZhbHVlKSx0b3RhbEl0ZW1zLHRvdGFsUHJpY2VXaXRoVGF4KGZvcm1hdHRlZFZhbHVlKSx0b3RhbERpc2NvdW50cyh2YWx1ZSxmb3JtYXR0ZWRWYWx1ZSksc3ViVG90YWwoZm9ybWF0dGVkVmFsdWUpLCcgK1xuICAnZGVsaXZlcnlJdGVtc1F1YW50aXR5LGRlbGl2ZXJ5Q29zdChmb3JtYXR0ZWRWYWx1ZSksdG90YWxUYXgoZm9ybWF0dGVkVmFsdWUpLHBpY2t1cEl0ZW1zUXVhbnRpdHksbmV0LCcgK1xuICAnYXBwbGllZFZvdWNoZXJzLHByb2R1Y3REaXNjb3VudHMoZm9ybWF0dGVkVmFsdWUpJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE9jY0NhcnRBZGFwdGVyIGltcGxlbWVudHMgQ2FydEFkYXB0ZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgaHR0cDogSHR0cENsaWVudCxcbiAgICBwcm90ZWN0ZWQgb2NjRW5kcG9pbnRzOiBPY2NFbmRwb2ludHNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjb252ZXJ0ZXI6IENvbnZlcnRlclNlcnZpY2VcbiAgKSB7fVxuXG4gIHByb3RlY3RlZCBnZXRDYXJ0RW5kcG9pbnQodXNlcklkOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IGNhcnRFbmRwb2ludCA9IGB1c2Vycy8ke3VzZXJJZH0vY2FydHMvYDtcbiAgICByZXR1cm4gdGhpcy5vY2NFbmRwb2ludHMuZ2V0RW5kcG9pbnQoY2FydEVuZHBvaW50KTtcbiAgfVxuXG4gIHB1YmxpYyBsb2FkQWxsKHVzZXJJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxDYXJ0W10+IHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLmdldENhcnRFbmRwb2ludCh1c2VySWQpO1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKHtcbiAgICAgIGZyb21TdHJpbmc6IGBmaWVsZHM9Y2FydHMoJHtERVRBSUxTX1BBUkFNU30sc2F2ZVRpbWUpYCxcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PE9jYy5DYXJ0TGlzdD4odXJsLCB7IHBhcmFtczogcGFyYW1zIH0pLnBpcGUoXG4gICAgICBwbHVjaygnY2FydHMnKSxcbiAgICAgIHRoaXMuY29udmVydGVyLnBpcGVhYmxlTWFueShDQVJUX05PUk1BTElaRVIpXG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBsb2FkKHVzZXJJZDogc3RyaW5nLCBjYXJ0SWQ6IHN0cmluZyk6IE9ic2VydmFibGU8Q2FydD4ge1xuICAgIGNvbnN0IHVybCA9IHRoaXMuZ2V0Q2FydEVuZHBvaW50KHVzZXJJZCkgKyBjYXJ0SWQ7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoe1xuICAgICAgZnJvbVN0cmluZzogYGZpZWxkcz0ke0RFVEFJTFNfUEFSQU1TfWAsXG4gICAgfSk7XG5cbiAgICBpZiAoY2FydElkID09PSAnY3VycmVudCcpIHtcbiAgICAgIHJldHVybiB0aGlzLmxvYWRBbGwodXNlcklkKS5waXBlKFxuICAgICAgICBtYXAoY2FydHMgPT4ge1xuICAgICAgICAgIGlmIChjYXJ0cykge1xuICAgICAgICAgICAgY29uc3QgYWN0aXZlQ2FydCA9IGNhcnRzLmZpbmQoY2FydCA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBjYXJ0WydzYXZlVGltZSddID09PSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBhY3RpdmVDYXJ0O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAgIC5nZXQ8T2NjLkNhcnQ+KHVybCwgeyBwYXJhbXM6IHBhcmFtcyB9KVxuICAgICAgICAucGlwZSh0aGlzLmNvbnZlcnRlci5waXBlYWJsZShDQVJUX05PUk1BTElaRVIpKTtcbiAgICB9XG4gIH1cblxuICBjcmVhdGUoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgb2xkQ2FydElkPzogc3RyaW5nLFxuICAgIHRvTWVyZ2VDYXJ0R3VpZD86IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPENhcnQ+IHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLmdldENhcnRFbmRwb2ludCh1c2VySWQpO1xuICAgIGNvbnN0IHRvQWRkID0gSlNPTi5zdHJpbmdpZnkoe30pO1xuICAgIGxldCBxdWVyeVN0cmluZyA9IGBmaWVsZHM9JHtERVRBSUxTX1BBUkFNU31gO1xuXG4gICAgaWYgKG9sZENhcnRJZCkge1xuICAgICAgcXVlcnlTdHJpbmcgPSBgJHtxdWVyeVN0cmluZ30mb2xkQ2FydElkPSR7b2xkQ2FydElkfWA7XG4gICAgfVxuICAgIGlmICh0b01lcmdlQ2FydEd1aWQpIHtcbiAgICAgIHF1ZXJ5U3RyaW5nID0gYCR7cXVlcnlTdHJpbmd9JnRvTWVyZ2VDYXJ0R3VpZD0ke3RvTWVyZ2VDYXJ0R3VpZH1gO1xuICAgIH1cbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgSHR0cFBhcmFtcyh7XG4gICAgICBmcm9tU3RyaW5nOiBxdWVyeVN0cmluZyxcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5wb3N0PE9jYy5DYXJ0Pih1cmwsIHRvQWRkLCB7IHBhcmFtczogcGFyYW1zIH0pXG4gICAgICAucGlwZSh0aGlzLmNvbnZlcnRlci5waXBlYWJsZShDQVJUX05PUk1BTElaRVIpKTtcbiAgfVxufVxuIl19
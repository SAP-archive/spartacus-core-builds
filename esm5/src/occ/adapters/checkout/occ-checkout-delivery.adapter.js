/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pluck } from 'rxjs/operators';
import { DELIVERY_MODE_NORMALIZER } from '../../../checkout/connectors/delivery/converters';
import { ADDRESS_NORMALIZER, ADDRESS_SERIALIZER, } from '../../../user/connectors/address/converters';
import { ConverterService } from '../../../util/converter.service';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
var OccCheckoutDeliveryAdapter = /** @class */ (function () {
    function OccCheckoutDeliveryAdapter(http, occEndpoints, converter) {
        this.http = http;
        this.occEndpoints = occEndpoints;
        this.converter = converter;
    }
    /**
     * @protected
     * @param {?} userId
     * @return {?}
     */
    OccCheckoutDeliveryAdapter.prototype.getCartEndpoint = /**
     * @protected
     * @param {?} userId
     * @return {?}
     */
    function (userId) {
        /** @type {?} */
        var cartEndpoint = 'users/' + userId + '/carts/';
        return this.occEndpoints.getEndpoint(cartEndpoint);
    };
    /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?} address
     * @return {?}
     */
    OccCheckoutDeliveryAdapter.prototype.createAddress = /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?} address
     * @return {?}
     */
    function (userId, cartId, address) {
        address = this.converter.convert(address, ADDRESS_SERIALIZER);
        return this.http
            .post(this.getCartEndpoint(userId) + cartId + '/addresses/delivery', address, {
            headers: new HttpHeaders().set('Content-Type', 'application/json'),
        })
            .pipe(this.converter.pipeable(ADDRESS_NORMALIZER));
    };
    /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?} addressId
     * @return {?}
     */
    OccCheckoutDeliveryAdapter.prototype.setAddress = /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?} addressId
     * @return {?}
     */
    function (userId, cartId, addressId) {
        return this.http.put(this.getCartEndpoint(userId) + cartId + '/addresses/delivery', {}, {
            params: { addressId: addressId },
        });
    };
    /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?} deliveryModeId
     * @return {?}
     */
    OccCheckoutDeliveryAdapter.prototype.setMode = /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?} deliveryModeId
     * @return {?}
     */
    function (userId, cartId, deliveryModeId) {
        return this.http.put(this.getCartEndpoint(userId) + cartId + '/deliverymode', {}, {
            params: { deliveryModeId: deliveryModeId },
        });
    };
    /**
     * @param {?} userId
     * @param {?} cartId
     * @return {?}
     */
    OccCheckoutDeliveryAdapter.prototype.getMode = /**
     * @param {?} userId
     * @param {?} cartId
     * @return {?}
     */
    function (userId, cartId) {
        return this.http
            .get(this.getCartEndpoint(userId) + cartId + '/deliverymode')
            .pipe(this.converter.pipeable(DELIVERY_MODE_NORMALIZER));
    };
    /**
     * @param {?} userId
     * @param {?} cartId
     * @return {?}
     */
    OccCheckoutDeliveryAdapter.prototype.getSupportedModes = /**
     * @param {?} userId
     * @param {?} cartId
     * @return {?}
     */
    function (userId, cartId) {
        return this.http
            .get(this.getCartEndpoint(userId) + cartId + '/deliverymodes')
            .pipe(pluck('deliveryModes'), this.converter.pipeableMany(DELIVERY_MODE_NORMALIZER));
    };
    OccCheckoutDeliveryAdapter.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    OccCheckoutDeliveryAdapter.ctorParameters = function () { return [
        { type: HttpClient },
        { type: OccEndpointsService },
        { type: ConverterService }
    ]; };
    return OccCheckoutDeliveryAdapter;
}());
export { OccCheckoutDeliveryAdapter };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNoZWNrb3V0LWRlbGl2ZXJ5LmFkYXB0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvb2NjL2FkYXB0ZXJzL2NoZWNrb3V0L29jYy1jaGVja291dC1kZWxpdmVyeS5hZGFwdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXZDLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBRzVGLE9BQU8sRUFDTCxrQkFBa0IsRUFDbEIsa0JBQWtCLEdBQ25CLE1BQU0sNkNBQTZDLENBQUM7QUFDckQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFbkUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFM0U7SUFFRSxvQ0FDWSxJQUFnQixFQUNoQixZQUFpQyxFQUNqQyxTQUEyQjtRQUYzQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLGlCQUFZLEdBQVosWUFBWSxDQUFxQjtRQUNqQyxjQUFTLEdBQVQsU0FBUyxDQUFrQjtJQUNwQyxDQUFDOzs7Ozs7SUFFTSxvREFBZTs7Ozs7SUFBekIsVUFBMEIsTUFBYzs7WUFDaEMsWUFBWSxHQUFHLFFBQVEsR0FBRyxNQUFNLEdBQUcsU0FBUztRQUNsRCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3JELENBQUM7Ozs7Ozs7SUFFTSxrREFBYTs7Ozs7O0lBQXBCLFVBQ0UsTUFBYyxFQUNkLE1BQWMsRUFDZCxPQUFnQjtRQUVoQixPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFFOUQsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLElBQUksQ0FDSCxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxHQUFHLE1BQU0sR0FBRyxxQkFBcUIsRUFDN0QsT0FBTyxFQUNQO1lBQ0UsT0FBTyxFQUFFLElBQUksV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQztTQUNuRSxDQUNGO2FBQ0EsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztJQUN2RCxDQUFDOzs7Ozs7O0lBRU0sK0NBQVU7Ozs7OztJQUFqQixVQUNFLE1BQWMsRUFDZCxNQUFjLEVBQ2QsU0FBaUI7UUFFakIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FDbEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsR0FBRyxNQUFNLEdBQUcscUJBQXFCLEVBQzdELEVBQUUsRUFDRjtZQUNFLE1BQU0sRUFBRSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUU7U0FDakMsQ0FDRixDQUFDO0lBQ0osQ0FBQzs7Ozs7OztJQUVNLDRDQUFPOzs7Ozs7SUFBZCxVQUNFLE1BQWMsRUFDZCxNQUFjLEVBQ2QsY0FBc0I7UUFFdEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FDbEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsR0FBRyxNQUFNLEdBQUcsZUFBZSxFQUN2RCxFQUFFLEVBQ0Y7WUFDRSxNQUFNLEVBQUUsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFO1NBQzNDLENBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUVNLDRDQUFPOzs7OztJQUFkLFVBQWUsTUFBYyxFQUFFLE1BQWM7UUFDM0MsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLEdBQUcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxHQUFHLE1BQU0sR0FBRyxlQUFlLENBQUM7YUFDNUQsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQztJQUM3RCxDQUFDOzs7Ozs7SUFFTSxzREFBaUI7Ozs7O0lBQXhCLFVBQ0UsTUFBYyxFQUNkLE1BQWM7UUFFZCxPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsR0FBRyxDQUNGLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLEdBQUcsTUFBTSxHQUFHLGdCQUFnQixDQUN6RDthQUNBLElBQUksQ0FDSCxLQUFLLENBQUMsZUFBZSxDQUFDLEVBQ3RCLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLHdCQUF3QixDQUFDLENBQ3RELENBQUM7SUFDTixDQUFDOztnQkE3RUYsVUFBVTs7OztnQkFoQkYsVUFBVTtnQkFjVixtQkFBbUI7Z0JBRm5CLGdCQUFnQjs7SUFrRnpCLGlDQUFDO0NBQUEsQUE5RUQsSUE4RUM7U0E3RVksMEJBQTBCOzs7Ozs7SUFFbkMsMENBQTBCOzs7OztJQUMxQixrREFBMkM7Ozs7O0lBQzNDLCtDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgcGx1Y2sgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDaGVja291dERlbGl2ZXJ5QWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL2NoZWNrb3V0L2Nvbm5lY3RvcnMvZGVsaXZlcnkvY2hlY2tvdXQtZGVsaXZlcnkuYWRhcHRlcic7XG5pbXBvcnQgeyBERUxJVkVSWV9NT0RFX05PUk1BTElaRVIgfSBmcm9tICcuLi8uLi8uLi9jaGVja291dC9jb25uZWN0b3JzL2RlbGl2ZXJ5L2NvbnZlcnRlcnMnO1xuaW1wb3J0IHsgQWRkcmVzcyB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2FkZHJlc3MubW9kZWwnO1xuaW1wb3J0IHsgRGVsaXZlcnlNb2RlIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvb3JkZXIubW9kZWwnO1xuaW1wb3J0IHtcbiAgQUREUkVTU19OT1JNQUxJWkVSLFxuICBBRERSRVNTX1NFUklBTElaRVIsXG59IGZyb20gJy4uLy4uLy4uL3VzZXIvY29ubmVjdG9ycy9hZGRyZXNzL2NvbnZlcnRlcnMnO1xuaW1wb3J0IHsgQ29udmVydGVyU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvY29udmVydGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgT2NjIH0gZnJvbSAnLi4vLi4vb2NjLW1vZGVscy9vY2MubW9kZWxzJztcbmltcG9ydCB7IE9jY0VuZHBvaW50c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9vY2MtZW5kcG9pbnRzLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT2NjQ2hlY2tvdXREZWxpdmVyeUFkYXB0ZXIgaW1wbGVtZW50cyBDaGVja291dERlbGl2ZXJ5QWRhcHRlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByb3RlY3RlZCBvY2NFbmRwb2ludHM6IE9jY0VuZHBvaW50c1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNvbnZlcnRlcjogQ29udmVydGVyU2VydmljZVxuICApIHt9XG5cbiAgcHJvdGVjdGVkIGdldENhcnRFbmRwb2ludCh1c2VySWQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgY2FydEVuZHBvaW50ID0gJ3VzZXJzLycgKyB1c2VySWQgKyAnL2NhcnRzLyc7XG4gICAgcmV0dXJuIHRoaXMub2NjRW5kcG9pbnRzLmdldEVuZHBvaW50KGNhcnRFbmRwb2ludCk7XG4gIH1cblxuICBwdWJsaWMgY3JlYXRlQWRkcmVzcyhcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBjYXJ0SWQ6IHN0cmluZyxcbiAgICBhZGRyZXNzOiBBZGRyZXNzXG4gICk6IE9ic2VydmFibGU8QWRkcmVzcz4ge1xuICAgIGFkZHJlc3MgPSB0aGlzLmNvbnZlcnRlci5jb252ZXJ0KGFkZHJlc3MsIEFERFJFU1NfU0VSSUFMSVpFUik7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAucG9zdDxPY2MuQWRkcmVzcz4oXG4gICAgICAgIHRoaXMuZ2V0Q2FydEVuZHBvaW50KHVzZXJJZCkgKyBjYXJ0SWQgKyAnL2FkZHJlc3Nlcy9kZWxpdmVyeScsXG4gICAgICAgIGFkZHJlc3MsXG4gICAgICAgIHtcbiAgICAgICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoKS5zZXQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyksXG4gICAgICAgIH1cbiAgICAgIClcbiAgICAgIC5waXBlKHRoaXMuY29udmVydGVyLnBpcGVhYmxlKEFERFJFU1NfTk9STUFMSVpFUikpO1xuICB9XG5cbiAgcHVibGljIHNldEFkZHJlc3MoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgY2FydElkOiBzdHJpbmcsXG4gICAgYWRkcmVzc0lkOiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dChcbiAgICAgIHRoaXMuZ2V0Q2FydEVuZHBvaW50KHVzZXJJZCkgKyBjYXJ0SWQgKyAnL2FkZHJlc3Nlcy9kZWxpdmVyeScsXG4gICAgICB7fSxcbiAgICAgIHtcbiAgICAgICAgcGFyYW1zOiB7IGFkZHJlc3NJZDogYWRkcmVzc0lkIH0sXG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXRNb2RlKFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIGNhcnRJZDogc3RyaW5nLFxuICAgIGRlbGl2ZXJ5TW9kZUlkOiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dChcbiAgICAgIHRoaXMuZ2V0Q2FydEVuZHBvaW50KHVzZXJJZCkgKyBjYXJ0SWQgKyAnL2RlbGl2ZXJ5bW9kZScsXG4gICAgICB7fSxcbiAgICAgIHtcbiAgICAgICAgcGFyYW1zOiB7IGRlbGl2ZXJ5TW9kZUlkOiBkZWxpdmVyeU1vZGVJZCB9LFxuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgZ2V0TW9kZSh1c2VySWQ6IHN0cmluZywgY2FydElkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5nZXQodGhpcy5nZXRDYXJ0RW5kcG9pbnQodXNlcklkKSArIGNhcnRJZCArICcvZGVsaXZlcnltb2RlJylcbiAgICAgIC5waXBlKHRoaXMuY29udmVydGVyLnBpcGVhYmxlKERFTElWRVJZX01PREVfTk9STUFMSVpFUikpO1xuICB9XG5cbiAgcHVibGljIGdldFN1cHBvcnRlZE1vZGVzKFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIGNhcnRJZDogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8RGVsaXZlcnlNb2RlW10+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0PE9jYy5EZWxpdmVyeU1vZGVMaXN0PihcbiAgICAgICAgdGhpcy5nZXRDYXJ0RW5kcG9pbnQodXNlcklkKSArIGNhcnRJZCArICcvZGVsaXZlcnltb2RlcydcbiAgICAgIClcbiAgICAgIC5waXBlKFxuICAgICAgICBwbHVjaygnZGVsaXZlcnlNb2RlcycpLFxuICAgICAgICB0aGlzLmNvbnZlcnRlci5waXBlYWJsZU1hbnkoREVMSVZFUllfTU9ERV9OT1JNQUxJWkVSKVxuICAgICAgKTtcbiAgfVxufVxuIl19
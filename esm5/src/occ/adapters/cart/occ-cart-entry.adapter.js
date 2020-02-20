import { __assign, __decorate } from "tslib";
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CART_MODIFICATION_NORMALIZER } from '../../../cart/connectors/entry/converters';
import { FeatureConfigService } from '../../../features-config/services/feature-config.service';
import { ConverterService } from '../../../util/converter.service';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
var OccCartEntryAdapter = /** @class */ (function () {
    function OccCartEntryAdapter(http, occEndpointsService, converterService, featureConfigService) {
        this.http = http;
        this.occEndpointsService = occEndpointsService;
        this.converterService = converterService;
        this.featureConfigService = featureConfigService;
    }
    /**
     * @deprecated Since 1.1
     * Use configurable endpoints.
     * Remove issue: #4125
     */
    OccCartEntryAdapter.prototype.getCartEndpoint = function (userId) {
        var cartEndpoint = 'users/' + userId + '/carts/';
        return this.occEndpointsService.getEndpoint(cartEndpoint);
    };
    OccCartEntryAdapter.prototype.add = function (userId, cartId, productCode, quantity) {
        if (quantity === void 0) { quantity = 1; }
        var toAdd = JSON.stringify({});
        var headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        // TODO: Deprecated, remove Issue: #4125
        if (!this.featureConfigService.isLevel('1.1')) {
            return this.legacyAdd(userId, cartId, productCode, quantity);
        }
        var url = this.occEndpointsService.getUrl('addEntries', {
            userId: userId,
            cartId: cartId,
        }, { code: productCode, qty: quantity });
        return this.http
            .post(url, toAdd, { headers: headers })
            .pipe(this.converterService.pipeable(CART_MODIFICATION_NORMALIZER));
    };
    OccCartEntryAdapter.prototype.update = function (userId, cartId, entryNumber, qty, pickupStore) {
        var params = {};
        if (pickupStore) {
            params = { pickupStore: pickupStore };
        }
        var headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        // TODO: Deprecated, remove Issue: #4125
        if (!this.featureConfigService.isLevel('1.1')) {
            return this.legacyUpdate(userId, cartId, entryNumber, qty, pickupStore);
        }
        var url = this.occEndpointsService.getUrl('updateEntries', { userId: userId, cartId: cartId, entryNumber: entryNumber }, __assign({ qty: qty }, params));
        return this.http
            .patch(url, {}, { headers: headers })
            .pipe(this.converterService.pipeable(CART_MODIFICATION_NORMALIZER));
    };
    OccCartEntryAdapter.prototype.remove = function (userId, cartId, entryNumber) {
        var headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        // TODO: Deprecated, remove Issue: #4125
        if (!this.featureConfigService.isLevel('1.1')) {
            return this.legacyRemove(userId, cartId, entryNumber);
        }
        var url = this.occEndpointsService.getUrl('removeEntries', {
            userId: userId,
            cartId: cartId,
            entryNumber: entryNumber,
        });
        return this.http.delete(url, { headers: headers });
    };
    /**
     * @deprecated Since 1.1
     * Use configurable endpoints.
     * Remove issue: #4125
     */
    OccCartEntryAdapter.prototype.legacyAdd = function (userId, cartId, productCode, quantity) {
        if (quantity === void 0) { quantity = 1; }
        var url = this.getCartEndpoint(userId) + cartId + '/entries';
        var params = new HttpParams({
            fromString: 'code=' + productCode + '&qty=' + quantity,
        });
        var toAdd = JSON.stringify({});
        var headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        return this.http
            .post(url, toAdd, { headers: headers, params: params })
            .pipe(this.converterService.pipeable(CART_MODIFICATION_NORMALIZER));
    };
    /**
     * @deprecated Since 1.1
     * Use configurable endpoints.
     * Remove issue: #4125
     */
    OccCartEntryAdapter.prototype.legacyUpdate = function (userId, cartId, entryNumber, qty, pickupStore) {
        var url = this.getCartEndpoint(userId) + cartId + '/entries/' + entryNumber;
        var queryString = 'qty=' + qty;
        if (pickupStore) {
            queryString = queryString + '&pickupStore=' + pickupStore;
        }
        var params = new HttpParams({
            fromString: queryString,
        });
        var headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        return this.http
            .patch(url, {}, { headers: headers, params: params })
            .pipe(this.converterService.pipeable(CART_MODIFICATION_NORMALIZER));
    };
    /**
     * @deprecated Since 1.1
     * Use configurable endpoints.
     * Remove issue: #4125
     */
    OccCartEntryAdapter.prototype.legacyRemove = function (userId, cartId, entryNumber) {
        var url = this.getCartEndpoint(userId) + cartId + '/entries/' + entryNumber;
        var headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        return this.http.delete(url, { headers: headers });
    };
    OccCartEntryAdapter.ctorParameters = function () { return [
        { type: HttpClient },
        { type: OccEndpointsService },
        { type: ConverterService },
        { type: FeatureConfigService }
    ]; };
    OccCartEntryAdapter = __decorate([
        Injectable()
    ], OccCartEntryAdapter);
    return OccCartEntryAdapter;
}());
export { OccCartEntryAdapter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNhcnQtZW50cnkuYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2MvYWRhcHRlcnMvY2FydC9vY2MtY2FydC1lbnRyeS5hZGFwdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMzRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBEQUEwRCxDQUFDO0FBRWhHLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRzNFO0lBQ0UsNkJBQ1ksSUFBZ0IsRUFDaEIsbUJBQXdDLEVBQ3hDLGdCQUFrQyxFQUNsQyxvQkFBMkM7UUFIM0MsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ3hDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUF1QjtJQUNwRCxDQUFDO0lBRUo7Ozs7T0FJRztJQUNPLDZDQUFlLEdBQXpCLFVBQTBCLE1BQWM7UUFDdEMsSUFBTSxZQUFZLEdBQUcsUUFBUSxHQUFHLE1BQU0sR0FBRyxTQUFTLENBQUM7UUFDbkQsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFTSxpQ0FBRyxHQUFWLFVBQ0UsTUFBYyxFQUNkLE1BQWMsRUFDZCxXQUFtQixFQUNuQixRQUFvQjtRQUFwQix5QkFBQSxFQUFBLFlBQW9CO1FBRXBCLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFakMsSUFBTSxPQUFPLEdBQUcsSUFBSSxXQUFXLENBQUM7WUFDOUIsY0FBYyxFQUFFLG1DQUFtQztTQUNwRCxDQUFDLENBQUM7UUFFSCx3Q0FBd0M7UUFDeEMsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDN0MsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQzlEO1FBRUQsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sQ0FDekMsWUFBWSxFQUNaO1lBQ0UsTUFBTSxRQUFBO1lBQ04sTUFBTSxRQUFBO1NBQ1AsRUFDRCxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxDQUNyQyxDQUFDO1FBRUYsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLElBQUksQ0FBbUIsR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFLE9BQU8sU0FBQSxFQUFFLENBQUM7YUFDL0MsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFFTSxvQ0FBTSxHQUFiLFVBQ0UsTUFBYyxFQUNkLE1BQWMsRUFDZCxXQUFtQixFQUNuQixHQUFXLEVBQ1gsV0FBb0I7UUFFcEIsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLElBQUksV0FBVyxFQUFFO1lBQ2YsTUFBTSxHQUFHLEVBQUUsV0FBVyxhQUFBLEVBQUUsQ0FBQztTQUMxQjtRQUVELElBQU0sT0FBTyxHQUFHLElBQUksV0FBVyxDQUFDO1lBQzlCLGNBQWMsRUFBRSxtQ0FBbUM7U0FDcEQsQ0FBQyxDQUFDO1FBRUgsd0NBQXdDO1FBQ3hDLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzdDLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxHQUFHLEVBQUUsV0FBVyxDQUFDLENBQUM7U0FDekU7UUFFRCxJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUN6QyxlQUFlLEVBQ2YsRUFBRSxNQUFNLFFBQUEsRUFBRSxNQUFNLFFBQUEsRUFBRSxXQUFXLGFBQUEsRUFBRSxhQUM3QixHQUFHLEtBQUEsSUFBSyxNQUFNLEVBQ2pCLENBQUM7UUFFRixPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsS0FBSyxDQUFtQixHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsT0FBTyxTQUFBLEVBQUUsQ0FBQzthQUM3QyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUVNLG9DQUFNLEdBQWIsVUFDRSxNQUFjLEVBQ2QsTUFBYyxFQUNkLFdBQW1CO1FBRW5CLElBQU0sT0FBTyxHQUFHLElBQUksV0FBVyxDQUFDO1lBQzlCLGNBQWMsRUFBRSxtQ0FBbUM7U0FDcEQsQ0FBQyxDQUFDO1FBRUgsd0NBQXdDO1FBQ3hDLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzdDLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1NBQ3ZEO1FBRUQsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUU7WUFDM0QsTUFBTSxRQUFBO1lBQ04sTUFBTSxRQUFBO1lBQ04sV0FBVyxhQUFBO1NBQ1osQ0FBQyxDQUFDO1FBRUgsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsRUFBRSxPQUFPLFNBQUEsRUFBRSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSyx1Q0FBUyxHQUFqQixVQUNFLE1BQWMsRUFDZCxNQUFjLEVBQ2QsV0FBbUIsRUFDbkIsUUFBb0I7UUFBcEIseUJBQUEsRUFBQSxZQUFvQjtRQUVwQixJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxHQUFHLE1BQU0sR0FBRyxVQUFVLENBQUM7UUFFL0QsSUFBTSxNQUFNLEdBQUcsSUFBSSxVQUFVLENBQUM7WUFDNUIsVUFBVSxFQUFFLE9BQU8sR0FBRyxXQUFXLEdBQUcsT0FBTyxHQUFHLFFBQVE7U0FDdkQsQ0FBQyxDQUFDO1FBRUgsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNqQyxJQUFNLE9BQU8sR0FBRyxJQUFJLFdBQVcsQ0FBQztZQUM5QixjQUFjLEVBQUUsbUNBQW1DO1NBQ3BELENBQUMsQ0FBQztRQUVILE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYixJQUFJLENBQW1CLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRSxPQUFPLFNBQUEsRUFBRSxNQUFNLFFBQUEsRUFBRSxDQUFDO2FBQ3ZELElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLDRCQUE0QixDQUFDLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNLLDBDQUFZLEdBQXBCLFVBQ0UsTUFBYyxFQUNkLE1BQWMsRUFDZCxXQUFtQixFQUNuQixHQUFXLEVBQ1gsV0FBb0I7UUFFcEIsSUFBTSxHQUFHLEdBQ1AsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsR0FBRyxNQUFNLEdBQUcsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUNwRSxJQUFJLFdBQVcsR0FBRyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBRS9CLElBQUksV0FBVyxFQUFFO1lBQ2YsV0FBVyxHQUFHLFdBQVcsR0FBRyxlQUFlLEdBQUcsV0FBVyxDQUFDO1NBQzNEO1FBQ0QsSUFBTSxNQUFNLEdBQUcsSUFBSSxVQUFVLENBQUM7WUFDNUIsVUFBVSxFQUFFLFdBQVc7U0FDeEIsQ0FBQyxDQUFDO1FBQ0gsSUFBTSxPQUFPLEdBQUcsSUFBSSxXQUFXLENBQUM7WUFDOUIsY0FBYyxFQUFFLG1DQUFtQztTQUNwRCxDQUFDLENBQUM7UUFDSCxPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsS0FBSyxDQUFtQixHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsT0FBTyxTQUFBLEVBQUUsTUFBTSxRQUFBLEVBQUUsQ0FBQzthQUNyRCxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUVEOzs7O09BSUc7SUFDSywwQ0FBWSxHQUFwQixVQUNFLE1BQWMsRUFDZCxNQUFjLEVBQ2QsV0FBbUI7UUFFbkIsSUFBTSxHQUFHLEdBQ1AsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsR0FBRyxNQUFNLEdBQUcsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUVwRSxJQUFNLE9BQU8sR0FBRyxJQUFJLFdBQVcsQ0FBQztZQUM5QixjQUFjLEVBQUUsbUNBQW1DO1NBQ3BELENBQUMsQ0FBQztRQUNILE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEVBQUUsT0FBTyxTQUFBLEVBQUUsQ0FBQyxDQUFDO0lBQzVDLENBQUM7O2dCQWhMaUIsVUFBVTtnQkFDSyxtQkFBbUI7Z0JBQ3RCLGdCQUFnQjtnQkFDWCxvQkFBb0I7O0lBTDVDLG1CQUFtQjtRQUQvQixVQUFVLEVBQUU7T0FDQSxtQkFBbUIsQ0FtTC9CO0lBQUQsMEJBQUM7Q0FBQSxBQW5MRCxJQW1MQztTQW5MWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENhcnRFbnRyeUFkYXB0ZXIgfSBmcm9tICcuLi8uLi8uLi9jYXJ0L2Nvbm5lY3RvcnMvZW50cnkvY2FydC1lbnRyeS5hZGFwdGVyJztcbmltcG9ydCB7IENBUlRfTU9ESUZJQ0FUSU9OX05PUk1BTElaRVIgfSBmcm9tICcuLi8uLi8uLi9jYXJ0L2Nvbm5lY3RvcnMvZW50cnkvY29udmVydGVycyc7XG5pbXBvcnQgeyBGZWF0dXJlQ29uZmlnU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2ZlYXR1cmVzLWNvbmZpZy9zZXJ2aWNlcy9mZWF0dXJlLWNvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IENhcnRNb2RpZmljYXRpb24gfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9jYXJ0Lm1vZGVsJztcbmltcG9ydCB7IENvbnZlcnRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi91dGlsL2NvbnZlcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7IE9jY0VuZHBvaW50c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9vY2MtZW5kcG9pbnRzLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT2NjQ2FydEVudHJ5QWRhcHRlciBpbXBsZW1lbnRzIENhcnRFbnRyeUFkYXB0ZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgaHR0cDogSHR0cENsaWVudCxcbiAgICBwcm90ZWN0ZWQgb2NjRW5kcG9pbnRzU2VydmljZTogT2NjRW5kcG9pbnRzU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY29udmVydGVyU2VydmljZTogQ29udmVydGVyU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgZmVhdHVyZUNvbmZpZ1NlcnZpY2U/OiBGZWF0dXJlQ29uZmlnU2VydmljZVxuICApIHt9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIFNpbmNlIDEuMVxuICAgKiBVc2UgY29uZmlndXJhYmxlIGVuZHBvaW50cy5cbiAgICogUmVtb3ZlIGlzc3VlOiAjNDEyNVxuICAgKi9cbiAgcHJvdGVjdGVkIGdldENhcnRFbmRwb2ludCh1c2VySWQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgY2FydEVuZHBvaW50ID0gJ3VzZXJzLycgKyB1c2VySWQgKyAnL2NhcnRzLyc7XG4gICAgcmV0dXJuIHRoaXMub2NjRW5kcG9pbnRzU2VydmljZS5nZXRFbmRwb2ludChjYXJ0RW5kcG9pbnQpO1xuICB9XG5cbiAgcHVibGljIGFkZChcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBjYXJ0SWQ6IHN0cmluZyxcbiAgICBwcm9kdWN0Q29kZTogc3RyaW5nLFxuICAgIHF1YW50aXR5OiBudW1iZXIgPSAxXG4gICk6IE9ic2VydmFibGU8Q2FydE1vZGlmaWNhdGlvbj4ge1xuICAgIGNvbnN0IHRvQWRkID0gSlNPTi5zdHJpbmdpZnkoe30pO1xuXG4gICAgY29uc3QgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG4gICAgfSk7XG5cbiAgICAvLyBUT0RPOiBEZXByZWNhdGVkLCByZW1vdmUgSXNzdWU6ICM0MTI1XG4gICAgaWYgKCF0aGlzLmZlYXR1cmVDb25maWdTZXJ2aWNlLmlzTGV2ZWwoJzEuMScpKSB7XG4gICAgICByZXR1cm4gdGhpcy5sZWdhY3lBZGQodXNlcklkLCBjYXJ0SWQsIHByb2R1Y3RDb2RlLCBxdWFudGl0eSk7XG4gICAgfVxuXG4gICAgY29uc3QgdXJsID0gdGhpcy5vY2NFbmRwb2ludHNTZXJ2aWNlLmdldFVybChcbiAgICAgICdhZGRFbnRyaWVzJyxcbiAgICAgIHtcbiAgICAgICAgdXNlcklkLFxuICAgICAgICBjYXJ0SWQsXG4gICAgICB9LFxuICAgICAgeyBjb2RlOiBwcm9kdWN0Q29kZSwgcXR5OiBxdWFudGl0eSB9XG4gICAgKTtcblxuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5wb3N0PENhcnRNb2RpZmljYXRpb24+KHVybCwgdG9BZGQsIHsgaGVhZGVycyB9KVxuICAgICAgLnBpcGUodGhpcy5jb252ZXJ0ZXJTZXJ2aWNlLnBpcGVhYmxlKENBUlRfTU9ESUZJQ0FUSU9OX05PUk1BTElaRVIpKTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGUoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgY2FydElkOiBzdHJpbmcsXG4gICAgZW50cnlOdW1iZXI6IHN0cmluZyxcbiAgICBxdHk6IG51bWJlcixcbiAgICBwaWNrdXBTdG9yZT86IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPENhcnRNb2RpZmljYXRpb24+IHtcbiAgICBsZXQgcGFyYW1zID0ge307XG4gICAgaWYgKHBpY2t1cFN0b3JlKSB7XG4gICAgICBwYXJhbXMgPSB7IHBpY2t1cFN0b3JlIH07XG4gICAgfVxuXG4gICAgY29uc3QgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG4gICAgfSk7XG5cbiAgICAvLyBUT0RPOiBEZXByZWNhdGVkLCByZW1vdmUgSXNzdWU6ICM0MTI1XG4gICAgaWYgKCF0aGlzLmZlYXR1cmVDb25maWdTZXJ2aWNlLmlzTGV2ZWwoJzEuMScpKSB7XG4gICAgICByZXR1cm4gdGhpcy5sZWdhY3lVcGRhdGUodXNlcklkLCBjYXJ0SWQsIGVudHJ5TnVtYmVyLCBxdHksIHBpY2t1cFN0b3JlKTtcbiAgICB9XG5cbiAgICBjb25zdCB1cmwgPSB0aGlzLm9jY0VuZHBvaW50c1NlcnZpY2UuZ2V0VXJsKFxuICAgICAgJ3VwZGF0ZUVudHJpZXMnLFxuICAgICAgeyB1c2VySWQsIGNhcnRJZCwgZW50cnlOdW1iZXIgfSxcbiAgICAgIHsgcXR5LCAuLi5wYXJhbXMgfVxuICAgICk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAucGF0Y2g8Q2FydE1vZGlmaWNhdGlvbj4odXJsLCB7fSwgeyBoZWFkZXJzIH0pXG4gICAgICAucGlwZSh0aGlzLmNvbnZlcnRlclNlcnZpY2UucGlwZWFibGUoQ0FSVF9NT0RJRklDQVRJT05fTk9STUFMSVpFUikpO1xuICB9XG5cbiAgcHVibGljIHJlbW92ZShcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBjYXJ0SWQ6IHN0cmluZyxcbiAgICBlbnRyeU51bWJlcjogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc3QgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG4gICAgfSk7XG5cbiAgICAvLyBUT0RPOiBEZXByZWNhdGVkLCByZW1vdmUgSXNzdWU6ICM0MTI1XG4gICAgaWYgKCF0aGlzLmZlYXR1cmVDb25maWdTZXJ2aWNlLmlzTGV2ZWwoJzEuMScpKSB7XG4gICAgICByZXR1cm4gdGhpcy5sZWdhY3lSZW1vdmUodXNlcklkLCBjYXJ0SWQsIGVudHJ5TnVtYmVyKTtcbiAgICB9XG5cbiAgICBjb25zdCB1cmwgPSB0aGlzLm9jY0VuZHBvaW50c1NlcnZpY2UuZ2V0VXJsKCdyZW1vdmVFbnRyaWVzJywge1xuICAgICAgdXNlcklkLFxuICAgICAgY2FydElkLFxuICAgICAgZW50cnlOdW1iZXIsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZSh1cmwsIHsgaGVhZGVycyB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBTaW5jZSAxLjFcbiAgICogVXNlIGNvbmZpZ3VyYWJsZSBlbmRwb2ludHMuXG4gICAqIFJlbW92ZSBpc3N1ZTogIzQxMjVcbiAgICovXG4gIHByaXZhdGUgbGVnYWN5QWRkKFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIGNhcnRJZDogc3RyaW5nLFxuICAgIHByb2R1Y3RDb2RlOiBzdHJpbmcsXG4gICAgcXVhbnRpdHk6IG51bWJlciA9IDFcbiAgKTogT2JzZXJ2YWJsZTxDYXJ0TW9kaWZpY2F0aW9uPiB7XG4gICAgY29uc3QgdXJsID0gdGhpcy5nZXRDYXJ0RW5kcG9pbnQodXNlcklkKSArIGNhcnRJZCArICcvZW50cmllcyc7XG5cbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgSHR0cFBhcmFtcyh7XG4gICAgICBmcm9tU3RyaW5nOiAnY29kZT0nICsgcHJvZHVjdENvZGUgKyAnJnF0eT0nICsgcXVhbnRpdHksXG4gICAgfSk7XG5cbiAgICBjb25zdCB0b0FkZCA9IEpTT04uc3RyaW5naWZ5KHt9KTtcbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5wb3N0PENhcnRNb2RpZmljYXRpb24+KHVybCwgdG9BZGQsIHsgaGVhZGVycywgcGFyYW1zIH0pXG4gICAgICAucGlwZSh0aGlzLmNvbnZlcnRlclNlcnZpY2UucGlwZWFibGUoQ0FSVF9NT0RJRklDQVRJT05fTk9STUFMSVpFUikpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIFNpbmNlIDEuMVxuICAgKiBVc2UgY29uZmlndXJhYmxlIGVuZHBvaW50cy5cbiAgICogUmVtb3ZlIGlzc3VlOiAjNDEyNVxuICAgKi9cbiAgcHJpdmF0ZSBsZWdhY3lVcGRhdGUoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgY2FydElkOiBzdHJpbmcsXG4gICAgZW50cnlOdW1iZXI6IHN0cmluZyxcbiAgICBxdHk6IG51bWJlcixcbiAgICBwaWNrdXBTdG9yZT86IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPENhcnRNb2RpZmljYXRpb24+IHtcbiAgICBjb25zdCB1cmwgPVxuICAgICAgdGhpcy5nZXRDYXJ0RW5kcG9pbnQodXNlcklkKSArIGNhcnRJZCArICcvZW50cmllcy8nICsgZW50cnlOdW1iZXI7XG4gICAgbGV0IHF1ZXJ5U3RyaW5nID0gJ3F0eT0nICsgcXR5O1xuXG4gICAgaWYgKHBpY2t1cFN0b3JlKSB7XG4gICAgICBxdWVyeVN0cmluZyA9IHF1ZXJ5U3RyaW5nICsgJyZwaWNrdXBTdG9yZT0nICsgcGlja3VwU3RvcmU7XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKHtcbiAgICAgIGZyb21TdHJpbmc6IHF1ZXJ5U3RyaW5nLFxuICAgIH0pO1xuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5wYXRjaDxDYXJ0TW9kaWZpY2F0aW9uPih1cmwsIHt9LCB7IGhlYWRlcnMsIHBhcmFtcyB9KVxuICAgICAgLnBpcGUodGhpcy5jb252ZXJ0ZXJTZXJ2aWNlLnBpcGVhYmxlKENBUlRfTU9ESUZJQ0FUSU9OX05PUk1BTElaRVIpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBTaW5jZSAxLjFcbiAgICogVXNlIGNvbmZpZ3VyYWJsZSBlbmRwb2ludHMuXG4gICAqIFJlbW92ZSBpc3N1ZTogIzQxMjVcbiAgICovXG4gIHByaXZhdGUgbGVnYWN5UmVtb3ZlKFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIGNhcnRJZDogc3RyaW5nLFxuICAgIGVudHJ5TnVtYmVyOiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCB1cmwgPVxuICAgICAgdGhpcy5nZXRDYXJ0RW5kcG9pbnQodXNlcklkKSArIGNhcnRJZCArICcvZW50cmllcy8nICsgZW50cnlOdW1iZXI7XG5cbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZSh1cmwsIHsgaGVhZGVycyB9KTtcbiAgfVxufVxuIl19
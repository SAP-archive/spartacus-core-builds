import { __assign, __decorate } from "tslib";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CART_MODIFICATION_NORMALIZER } from '../../../cart/connectors/entry/converters';
import { ConverterService } from '../../../util/converter.service';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
var OccCartEntryAdapter = /** @class */ (function () {
    function OccCartEntryAdapter(http, occEndpointsService, converterService) {
        this.http = http;
        this.occEndpointsService = occEndpointsService;
        this.converterService = converterService;
    }
    OccCartEntryAdapter.prototype.add = function (userId, cartId, productCode, quantity) {
        if (quantity === void 0) { quantity = 1; }
        var toAdd = JSON.stringify({});
        var headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
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
        var url = this.occEndpointsService.getUrl('updateEntries', { userId: userId, cartId: cartId, entryNumber: entryNumber }, __assign({ qty: qty }, params));
        return this.http
            .patch(url, {}, { headers: headers })
            .pipe(this.converterService.pipeable(CART_MODIFICATION_NORMALIZER));
    };
    OccCartEntryAdapter.prototype.remove = function (userId, cartId, entryNumber) {
        var headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        var url = this.occEndpointsService.getUrl('removeEntries', {
            userId: userId,
            cartId: cartId,
            entryNumber: entryNumber,
        });
        return this.http.delete(url, { headers: headers });
    };
    OccCartEntryAdapter.ctorParameters = function () { return [
        { type: HttpClient },
        { type: OccEndpointsService },
        { type: ConverterService }
    ]; };
    OccCartEntryAdapter = __decorate([
        Injectable()
    ], OccCartEntryAdapter);
    return OccCartEntryAdapter;
}());
export { OccCartEntryAdapter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNhcnQtZW50cnkuYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2MvYWRhcHRlcnMvY2FydC9vY2MtY2FydC1lbnRyeS5hZGFwdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFFekYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDbkUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFHM0U7SUFDRSw2QkFDWSxJQUFnQixFQUNoQixtQkFBd0MsRUFDeEMsZ0JBQWtDO1FBRmxDLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUN4QyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBQzNDLENBQUM7SUFFRyxpQ0FBRyxHQUFWLFVBQ0UsTUFBYyxFQUNkLE1BQWMsRUFDZCxXQUFtQixFQUNuQixRQUFvQjtRQUFwQix5QkFBQSxFQUFBLFlBQW9CO1FBRXBCLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFakMsSUFBTSxPQUFPLEdBQUcsSUFBSSxXQUFXLENBQUM7WUFDOUIsY0FBYyxFQUFFLG1DQUFtQztTQUNwRCxDQUFDLENBQUM7UUFFSCxJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUN6QyxZQUFZLEVBQ1o7WUFDRSxNQUFNLFFBQUE7WUFDTixNQUFNLFFBQUE7U0FDUCxFQUNELEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLENBQ3JDLENBQUM7UUFFRixPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsSUFBSSxDQUFtQixHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUUsT0FBTyxTQUFBLEVBQUUsQ0FBQzthQUMvQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUVNLG9DQUFNLEdBQWIsVUFDRSxNQUFjLEVBQ2QsTUFBYyxFQUNkLFdBQW1CLEVBQ25CLEdBQVcsRUFDWCxXQUFvQjtRQUVwQixJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDaEIsSUFBSSxXQUFXLEVBQUU7WUFDZixNQUFNLEdBQUcsRUFBRSxXQUFXLGFBQUEsRUFBRSxDQUFDO1NBQzFCO1FBRUQsSUFBTSxPQUFPLEdBQUcsSUFBSSxXQUFXLENBQUM7WUFDOUIsY0FBYyxFQUFFLG1DQUFtQztTQUNwRCxDQUFDLENBQUM7UUFFSCxJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUN6QyxlQUFlLEVBQ2YsRUFBRSxNQUFNLFFBQUEsRUFBRSxNQUFNLFFBQUEsRUFBRSxXQUFXLGFBQUEsRUFBRSxhQUM3QixHQUFHLEtBQUEsSUFBSyxNQUFNLEVBQ2pCLENBQUM7UUFFRixPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsS0FBSyxDQUFtQixHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsT0FBTyxTQUFBLEVBQUUsQ0FBQzthQUM3QyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUVNLG9DQUFNLEdBQWIsVUFDRSxNQUFjLEVBQ2QsTUFBYyxFQUNkLFdBQW1CO1FBRW5CLElBQU0sT0FBTyxHQUFHLElBQUksV0FBVyxDQUFDO1lBQzlCLGNBQWMsRUFBRSxtQ0FBbUM7U0FDcEQsQ0FBQyxDQUFDO1FBRUgsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUU7WUFDM0QsTUFBTSxRQUFBO1lBQ04sTUFBTSxRQUFBO1lBQ04sV0FBVyxhQUFBO1NBQ1osQ0FBQyxDQUFDO1FBRUgsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsRUFBRSxPQUFPLFNBQUEsRUFBRSxDQUFDLENBQUM7SUFDNUMsQ0FBQzs7Z0JBMUVpQixVQUFVO2dCQUNLLG1CQUFtQjtnQkFDdEIsZ0JBQWdCOztJQUpuQyxtQkFBbUI7UUFEL0IsVUFBVSxFQUFFO09BQ0EsbUJBQW1CLENBNkUvQjtJQUFELDBCQUFDO0NBQUEsQUE3RUQsSUE2RUM7U0E3RVksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDYXJ0RW50cnlBZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vY2FydC9jb25uZWN0b3JzL2VudHJ5L2NhcnQtZW50cnkuYWRhcHRlcic7XG5pbXBvcnQgeyBDQVJUX01PRElGSUNBVElPTl9OT1JNQUxJWkVSIH0gZnJvbSAnLi4vLi4vLi4vY2FydC9jb25uZWN0b3JzL2VudHJ5L2NvbnZlcnRlcnMnO1xuaW1wb3J0IHsgQ2FydE1vZGlmaWNhdGlvbiB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2NhcnQubW9kZWwnO1xuaW1wb3J0IHsgQ29udmVydGVyU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvY29udmVydGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgT2NjRW5kcG9pbnRzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL29jYy1lbmRwb2ludHMuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBPY2NDYXJ0RW50cnlBZGFwdGVyIGltcGxlbWVudHMgQ2FydEVudHJ5QWRhcHRlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByb3RlY3RlZCBvY2NFbmRwb2ludHNTZXJ2aWNlOiBPY2NFbmRwb2ludHNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjb252ZXJ0ZXJTZXJ2aWNlOiBDb252ZXJ0ZXJTZXJ2aWNlXG4gICkge31cblxuICBwdWJsaWMgYWRkKFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIGNhcnRJZDogc3RyaW5nLFxuICAgIHByb2R1Y3RDb2RlOiBzdHJpbmcsXG4gICAgcXVhbnRpdHk6IG51bWJlciA9IDFcbiAgKTogT2JzZXJ2YWJsZTxDYXJ0TW9kaWZpY2F0aW9uPiB7XG4gICAgY29uc3QgdG9BZGQgPSBKU09OLnN0cmluZ2lmeSh7fSk7XG5cbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgICB9KTtcblxuICAgIGNvbnN0IHVybCA9IHRoaXMub2NjRW5kcG9pbnRzU2VydmljZS5nZXRVcmwoXG4gICAgICAnYWRkRW50cmllcycsXG4gICAgICB7XG4gICAgICAgIHVzZXJJZCxcbiAgICAgICAgY2FydElkLFxuICAgICAgfSxcbiAgICAgIHsgY29kZTogcHJvZHVjdENvZGUsIHF0eTogcXVhbnRpdHkgfVxuICAgICk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAucG9zdDxDYXJ0TW9kaWZpY2F0aW9uPih1cmwsIHRvQWRkLCB7IGhlYWRlcnMgfSlcbiAgICAgIC5waXBlKHRoaXMuY29udmVydGVyU2VydmljZS5waXBlYWJsZShDQVJUX01PRElGSUNBVElPTl9OT1JNQUxJWkVSKSk7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlKFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIGNhcnRJZDogc3RyaW5nLFxuICAgIGVudHJ5TnVtYmVyOiBzdHJpbmcsXG4gICAgcXR5OiBudW1iZXIsXG4gICAgcGlja3VwU3RvcmU/OiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxDYXJ0TW9kaWZpY2F0aW9uPiB7XG4gICAgbGV0IHBhcmFtcyA9IHt9O1xuICAgIGlmIChwaWNrdXBTdG9yZSkge1xuICAgICAgcGFyYW1zID0geyBwaWNrdXBTdG9yZSB9O1xuICAgIH1cblxuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAgIH0pO1xuXG4gICAgY29uc3QgdXJsID0gdGhpcy5vY2NFbmRwb2ludHNTZXJ2aWNlLmdldFVybChcbiAgICAgICd1cGRhdGVFbnRyaWVzJyxcbiAgICAgIHsgdXNlcklkLCBjYXJ0SWQsIGVudHJ5TnVtYmVyIH0sXG4gICAgICB7IHF0eSwgLi4ucGFyYW1zIH1cbiAgICApO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLnBhdGNoPENhcnRNb2RpZmljYXRpb24+KHVybCwge30sIHsgaGVhZGVycyB9KVxuICAgICAgLnBpcGUodGhpcy5jb252ZXJ0ZXJTZXJ2aWNlLnBpcGVhYmxlKENBUlRfTU9ESUZJQ0FUSU9OX05PUk1BTElaRVIpKTtcbiAgfVxuXG4gIHB1YmxpYyByZW1vdmUoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgY2FydElkOiBzdHJpbmcsXG4gICAgZW50cnlOdW1iZXI6IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAgIH0pO1xuXG4gICAgY29uc3QgdXJsID0gdGhpcy5vY2NFbmRwb2ludHNTZXJ2aWNlLmdldFVybCgncmVtb3ZlRW50cmllcycsIHtcbiAgICAgIHVzZXJJZCxcbiAgICAgIGNhcnRJZCxcbiAgICAgIGVudHJ5TnVtYmVyLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUodXJsLCB7IGhlYWRlcnMgfSk7XG4gIH1cbn1cbiJdfQ==
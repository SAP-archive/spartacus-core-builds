import { __decorate } from "tslib";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { PAYMENT_DETAILS_NORMALIZER } from '../../../checkout/connectors/payment/converters';
import { ConverterService } from '../../../util/converter.service';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
var OccUserPaymentAdapter = /** @class */ (function () {
    function OccUserPaymentAdapter(http, occEndpoints, converter) {
        this.http = http;
        this.occEndpoints = occEndpoints;
        this.converter = converter;
    }
    OccUserPaymentAdapter.prototype.loadAll = function (userId) {
        var url = this.occEndpoints.getUrl('paymentDetailsAll', { userId: userId }) + '?saved=true';
        var headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        return this.http
            .get(url, { headers: headers })
            .pipe(catchError(function (error) { return throwError(error); }), map(function (methodList) { return methodList.payments; }), this.converter.pipeableMany(PAYMENT_DETAILS_NORMALIZER));
    };
    OccUserPaymentAdapter.prototype.delete = function (userId, paymentMethodID) {
        var url = this.occEndpoints.getUrl('paymentDetail', {
            userId: userId,
            paymentDetailId: paymentMethodID,
        });
        var headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        return this.http
            .delete(url, { headers: headers })
            .pipe(catchError(function (error) { return throwError(error); }));
    };
    OccUserPaymentAdapter.prototype.setDefault = function (userId, paymentMethodID) {
        var url = this.occEndpoints.getUrl('paymentDetail', {
            userId: userId,
            paymentDetailId: paymentMethodID,
        });
        var headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        return this.http
            .patch(url, 
        // TODO: Remove billingAddress property
        { billingAddress: { titleCode: 'mr' }, defaultPayment: true }, { headers: headers })
            .pipe(catchError(function (error) { return throwError(error); }));
    };
    OccUserPaymentAdapter.ctorParameters = function () { return [
        { type: HttpClient },
        { type: OccEndpointsService },
        { type: ConverterService }
    ]; };
    OccUserPaymentAdapter = __decorate([
        Injectable()
    ], OccUserPaymentAdapter);
    return OccUserPaymentAdapter;
}());
export { OccUserPaymentAdapter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXVzZXItcGF5bWVudC5hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL29jYy9hZGFwdGVycy91c2VyL29jYy11c2VyLXBheW1lbnQuYWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDOUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUc3RixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUVuRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUczRTtJQUNFLCtCQUNZLElBQWdCLEVBQ2hCLFlBQWlDLEVBQ2pDLFNBQTJCO1FBRjNCLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsaUJBQVksR0FBWixZQUFZLENBQXFCO1FBQ2pDLGNBQVMsR0FBVCxTQUFTLENBQWtCO0lBQ3BDLENBQUM7SUFFSix1Q0FBTyxHQUFQLFVBQVEsTUFBYztRQUNwQixJQUFNLEdBQUcsR0FDUCxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsRUFBRSxFQUFFLE1BQU0sUUFBQSxFQUFFLENBQUMsR0FBRyxhQUFhLENBQUM7UUFDNUUsSUFBTSxPQUFPLEdBQUcsSUFBSSxXQUFXLENBQUM7WUFDOUIsY0FBYyxFQUFFLGtCQUFrQjtTQUNuQyxDQUFDLENBQUM7UUFFSCxPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsR0FBRyxDQUF5QixHQUFHLEVBQUUsRUFBRSxPQUFPLFNBQUEsRUFBRSxDQUFDO2FBQzdDLElBQUksQ0FDSCxVQUFVLENBQUMsVUFBQyxLQUFVLElBQUssT0FBQSxVQUFVLENBQUMsS0FBSyxDQUFDLEVBQWpCLENBQWlCLENBQUMsRUFDN0MsR0FBRyxDQUFDLFVBQUMsVUFBVSxJQUFLLE9BQUEsVUFBVSxDQUFDLFFBQVEsRUFBbkIsQ0FBbUIsQ0FBQyxFQUN4QyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQywwQkFBMEIsQ0FBQyxDQUN4RCxDQUFDO0lBQ04sQ0FBQztJQUVELHNDQUFNLEdBQU4sVUFBTyxNQUFjLEVBQUUsZUFBdUI7UUFDNUMsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFO1lBQ3BELE1BQU0sUUFBQTtZQUNOLGVBQWUsRUFBRSxlQUFlO1NBQ2pDLENBQUMsQ0FBQztRQUNILElBQU0sT0FBTyxHQUFHLElBQUksV0FBVyxDQUFDO1lBQzlCLGNBQWMsRUFBRSxrQkFBa0I7U0FDbkMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLE1BQU0sQ0FBQyxHQUFHLEVBQUUsRUFBRSxPQUFPLFNBQUEsRUFBRSxDQUFDO2FBQ3hCLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBQyxLQUFVLElBQUssT0FBQSxVQUFVLENBQUMsS0FBSyxDQUFDLEVBQWpCLENBQWlCLENBQUMsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFRCwwQ0FBVSxHQUFWLFVBQVcsTUFBYyxFQUFFLGVBQXVCO1FBQ2hELElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRTtZQUNwRCxNQUFNLFFBQUE7WUFDTixlQUFlLEVBQUUsZUFBZTtTQUNqQyxDQUFDLENBQUM7UUFFSCxJQUFNLE9BQU8sR0FBRyxJQUFJLFdBQVcsQ0FBQztZQUM5QixjQUFjLEVBQUUsa0JBQWtCO1NBQ25DLENBQUMsQ0FBQztRQUVILE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYixLQUFLLENBQ0osR0FBRztRQUNILHVDQUF1QztRQUN2QyxFQUFFLGNBQWMsRUFBRSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFFLEVBQzdELEVBQUUsT0FBTyxTQUFBLEVBQUUsQ0FDWjthQUNBLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBQyxLQUFVLElBQUssT0FBQSxVQUFVLENBQUMsS0FBSyxDQUFDLEVBQWpCLENBQWlCLENBQUMsQ0FBQyxDQUFDO0lBQ3pELENBQUM7O2dCQXJEaUIsVUFBVTtnQkFDRixtQkFBbUI7Z0JBQ3RCLGdCQUFnQjs7SUFKNUIscUJBQXFCO1FBRGpDLFVBQVUsRUFBRTtPQUNBLHFCQUFxQixDQXdEakM7SUFBRCw0QkFBQztDQUFBLEFBeERELElBd0RDO1NBeERZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUEFZTUVOVF9ERVRBSUxTX05PUk1BTElaRVIgfSBmcm9tICcuLi8uLi8uLi9jaGVja291dC9jb25uZWN0b3JzL3BheW1lbnQvY29udmVydGVycyc7XG5pbXBvcnQgeyBQYXltZW50RGV0YWlscyB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2NhcnQubW9kZWwnO1xuaW1wb3J0IHsgVXNlclBheW1lbnRBZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vdXNlci9jb25uZWN0b3JzL3BheW1lbnQvdXNlci1wYXltZW50LmFkYXB0ZXInO1xuaW1wb3J0IHsgQ29udmVydGVyU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvY29udmVydGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgT2NjIH0gZnJvbSAnLi4vLi4vb2NjLW1vZGVscy9vY2MubW9kZWxzJztcbmltcG9ydCB7IE9jY0VuZHBvaW50c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9vY2MtZW5kcG9pbnRzLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT2NjVXNlclBheW1lbnRBZGFwdGVyIGltcGxlbWVudHMgVXNlclBheW1lbnRBZGFwdGVyIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgcHJvdGVjdGVkIG9jY0VuZHBvaW50czogT2NjRW5kcG9pbnRzU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY29udmVydGVyOiBDb252ZXJ0ZXJTZXJ2aWNlXG4gICkge31cblxuICBsb2FkQWxsKHVzZXJJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxQYXltZW50RGV0YWlsc1tdPiB7XG4gICAgY29uc3QgdXJsID1cbiAgICAgIHRoaXMub2NjRW5kcG9pbnRzLmdldFVybCgncGF5bWVudERldGFpbHNBbGwnLCB7IHVzZXJJZCB9KSArICc/c2F2ZWQ9dHJ1ZSc7XG4gICAgY29uc3QgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldDxPY2MuUGF5bWVudERldGFpbHNMaXN0Pih1cmwsIHsgaGVhZGVycyB9KVxuICAgICAgLnBpcGUoXG4gICAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiBhbnkpID0+IHRocm93RXJyb3IoZXJyb3IpKSxcbiAgICAgICAgbWFwKChtZXRob2RMaXN0KSA9PiBtZXRob2RMaXN0LnBheW1lbnRzKSxcbiAgICAgICAgdGhpcy5jb252ZXJ0ZXIucGlwZWFibGVNYW55KFBBWU1FTlRfREVUQUlMU19OT1JNQUxJWkVSKVxuICAgICAgKTtcbiAgfVxuXG4gIGRlbGV0ZSh1c2VySWQ6IHN0cmluZywgcGF5bWVudE1ldGhvZElEOiBzdHJpbmcpOiBPYnNlcnZhYmxlPHt9PiB7XG4gICAgY29uc3QgdXJsID0gdGhpcy5vY2NFbmRwb2ludHMuZ2V0VXJsKCdwYXltZW50RGV0YWlsJywge1xuICAgICAgdXNlcklkLFxuICAgICAgcGF5bWVudERldGFpbElkOiBwYXltZW50TWV0aG9kSUQsXG4gICAgfSk7XG4gICAgY29uc3QgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmRlbGV0ZSh1cmwsIHsgaGVhZGVycyB9KVxuICAgICAgLnBpcGUoY2F0Y2hFcnJvcigoZXJyb3I6IGFueSkgPT4gdGhyb3dFcnJvcihlcnJvcikpKTtcbiAgfVxuXG4gIHNldERlZmF1bHQodXNlcklkOiBzdHJpbmcsIHBheW1lbnRNZXRob2RJRDogc3RyaW5nKTogT2JzZXJ2YWJsZTx7fT4ge1xuICAgIGNvbnN0IHVybCA9IHRoaXMub2NjRW5kcG9pbnRzLmdldFVybCgncGF5bWVudERldGFpbCcsIHtcbiAgICAgIHVzZXJJZCxcbiAgICAgIHBheW1lbnREZXRhaWxJZDogcGF5bWVudE1ldGhvZElELFxuICAgIH0pO1xuXG4gICAgY29uc3QgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLnBhdGNoKFxuICAgICAgICB1cmwsXG4gICAgICAgIC8vIFRPRE86IFJlbW92ZSBiaWxsaW5nQWRkcmVzcyBwcm9wZXJ0eVxuICAgICAgICB7IGJpbGxpbmdBZGRyZXNzOiB7IHRpdGxlQ29kZTogJ21yJyB9LCBkZWZhdWx0UGF5bWVudDogdHJ1ZSB9LFxuICAgICAgICB7IGhlYWRlcnMgfVxuICAgICAgKVxuICAgICAgLnBpcGUoY2F0Y2hFcnJvcigoZXJyb3I6IGFueSkgPT4gdGhyb3dFcnJvcihlcnJvcikpKTtcbiAgfVxufVxuIl19
import { __decorate } from "tslib";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ADDRESS_NORMALIZER, ADDRESS_SERIALIZER, ADDRESS_VALIDATION_NORMALIZER, } from '../../../user/connectors/address/converters';
import { ConverterService } from '../../../util/converter.service';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
import { InterceptorUtil, USE_CLIENT_TOKEN, } from '../../utils/interceptor-util';
import { OCC_USER_ID_ANONYMOUS } from '../../utils/occ-constants';
var OccUserAddressAdapter = /** @class */ (function () {
    function OccUserAddressAdapter(http, occEndpoints, converter) {
        this.http = http;
        this.occEndpoints = occEndpoints;
        this.converter = converter;
    }
    OccUserAddressAdapter.prototype.loadAll = function (userId) {
        var url = this.occEndpoints.getUrl('addresses', { userId: userId });
        var headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        return this.http
            .get(url, { headers: headers })
            .pipe(catchError(function (error) { return throwError(error); }), map(function (addressList) { return addressList.addresses; }), this.converter.pipeableMany(ADDRESS_NORMALIZER));
    };
    OccUserAddressAdapter.prototype.add = function (userId, address) {
        var url = this.occEndpoints.getUrl('addresses', { userId: userId });
        var headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        address = this.converter.convert(address, ADDRESS_SERIALIZER);
        return this.http
            .post(url, address, { headers: headers })
            .pipe(catchError(function (error) { return throwError(error); }));
    };
    OccUserAddressAdapter.prototype.update = function (userId, addressId, address) {
        var url = this.occEndpoints.getUrl('addressDetail', {
            userId: userId,
            addressId: addressId,
        });
        var headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        address = this.converter.convert(address, ADDRESS_SERIALIZER);
        return this.http
            .patch(url, address, { headers: headers })
            .pipe(catchError(function (error) { return throwError(error); }));
    };
    OccUserAddressAdapter.prototype.verify = function (userId, address) {
        var url = this.occEndpoints.getUrl('addressVerification', { userId: userId });
        var headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        if (userId === OCC_USER_ID_ANONYMOUS) {
            headers = InterceptorUtil.createHeader(USE_CLIENT_TOKEN, true, headers);
        }
        address = this.converter.convert(address, ADDRESS_SERIALIZER);
        return this.http
            .post(url, address, { headers: headers })
            .pipe(catchError(function (error) { return throwError(error); }), this.converter.pipeable(ADDRESS_VALIDATION_NORMALIZER));
    };
    OccUserAddressAdapter.prototype.delete = function (userId, addressId) {
        var url = this.occEndpoints.getUrl('addressDetail', {
            userId: userId,
            addressId: addressId,
        });
        var headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        return this.http
            .delete(url, { headers: headers })
            .pipe(catchError(function (error) { return throwError(error); }));
    };
    OccUserAddressAdapter.ctorParameters = function () { return [
        { type: HttpClient },
        { type: OccEndpointsService },
        { type: ConverterService }
    ]; };
    OccUserAddressAdapter = __decorate([
        Injectable()
    ], OccUserAddressAdapter);
    return OccUserAddressAdapter;
}());
export { OccUserAddressAdapter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXVzZXItYWRkcmVzcy5hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL29jYy9hZGFwdGVycy91c2VyL29jYy11c2VyLWFkZHJlc3MuYWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDOUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVqRCxPQUFPLEVBQ0wsa0JBQWtCLEVBQ2xCLGtCQUFrQixFQUNsQiw2QkFBNkIsR0FDOUIsTUFBTSw2Q0FBNkMsQ0FBQztBQUVyRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUVuRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMzRSxPQUFPLEVBQ0wsZUFBZSxFQUNmLGdCQUFnQixHQUNqQixNQUFNLDhCQUE4QixDQUFDO0FBQ3RDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBR2xFO0lBQ0UsK0JBQ1ksSUFBZ0IsRUFDaEIsWUFBaUMsRUFDakMsU0FBMkI7UUFGM0IsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixpQkFBWSxHQUFaLFlBQVksQ0FBcUI7UUFDakMsY0FBUyxHQUFULFNBQVMsQ0FBa0I7SUFDcEMsQ0FBQztJQUVKLHVDQUFPLEdBQVAsVUFBUSxNQUFjO1FBQ3BCLElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sUUFBQSxFQUFFLENBQUMsQ0FBQztRQUM5RCxJQUFNLE9BQU8sR0FB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QUFVLENBQUMsVUFBQyxLQUFVLElBQUssT0FBQSxVQUFVLENBQUMsS0FBSyxDQUFDLEVBQWpCLENBQWlCLENBQUMsRUFDN0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsNkJBQTZCLENBQUMsQ0FDdkQsQ0FBQztJQUNOLENBQUM7SUFFRCxzQ0FBTSxHQUFOLFVBQU8sTUFBYyxFQUFFLFNBQWlCO1FBQ3RDLElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRTtZQUNwRCxNQUFNLFFBQUE7WUFDTixTQUFTLFdBQUE7U0FDVixDQUFDLENBQUM7UUFDSCxJQUFNLE9BQU8sR0FBRyxJQUFJLFdBQVcsQ0FBQztZQUM5QixjQUFjLEVBQUUsa0JBQWtCO1NBQ25DLENBQUMsQ0FBQztRQUVILE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYixNQUFNLENBQUMsR0FBRyxFQUFFLEVBQUUsT0FBTyxTQUFBLEVBQUUsQ0FBQzthQUN4QixJQUFJLENBQUMsVUFBVSxDQUFDLFVBQUMsS0FBVSxJQUFLLE9BQUEsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFqQixDQUFpQixDQUFDLENBQUMsQ0FBQztJQUN6RCxDQUFDOztnQkE3RWlCLFVBQVU7Z0JBQ0YsbUJBQW1CO2dCQUN0QixnQkFBZ0I7O0lBSjVCLHFCQUFxQjtRQURqQyxVQUFVLEVBQUU7T0FDQSxxQkFBcUIsQ0FnRmpDO0lBQUQsNEJBQUM7Q0FBQSxBQWhGRCxJQWdGQztTQWhGWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEFkZHJlc3MsIEFkZHJlc3NWYWxpZGF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvYWRkcmVzcy5tb2RlbCc7XG5pbXBvcnQge1xuICBBRERSRVNTX05PUk1BTElaRVIsXG4gIEFERFJFU1NfU0VSSUFMSVpFUixcbiAgQUREUkVTU19WQUxJREFUSU9OX05PUk1BTElaRVIsXG59IGZyb20gJy4uLy4uLy4uL3VzZXIvY29ubmVjdG9ycy9hZGRyZXNzL2NvbnZlcnRlcnMnO1xuaW1wb3J0IHsgVXNlckFkZHJlc3NBZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vdXNlci9jb25uZWN0b3JzL2FkZHJlc3MvdXNlci1hZGRyZXNzLmFkYXB0ZXInO1xuaW1wb3J0IHsgQ29udmVydGVyU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvY29udmVydGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgT2NjIH0gZnJvbSAnLi4vLi4vb2NjLW1vZGVscy9vY2MubW9kZWxzJztcbmltcG9ydCB7IE9jY0VuZHBvaW50c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9vY2MtZW5kcG9pbnRzLnNlcnZpY2UnO1xuaW1wb3J0IHtcbiAgSW50ZXJjZXB0b3JVdGlsLFxuICBVU0VfQ0xJRU5UX1RPS0VOLFxufSBmcm9tICcuLi8uLi91dGlscy9pbnRlcmNlcHRvci11dGlsJztcbmltcG9ydCB7IE9DQ19VU0VSX0lEX0FOT05ZTU9VUyB9IGZyb20gJy4uLy4uL3V0aWxzL29jYy1jb25zdGFudHMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT2NjVXNlckFkZHJlc3NBZGFwdGVyIGltcGxlbWVudHMgVXNlckFkZHJlc3NBZGFwdGVyIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgcHJvdGVjdGVkIG9jY0VuZHBvaW50czogT2NjRW5kcG9pbnRzU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY29udmVydGVyOiBDb252ZXJ0ZXJTZXJ2aWNlXG4gICkge31cblxuICBsb2FkQWxsKHVzZXJJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxBZGRyZXNzW10+IHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLm9jY0VuZHBvaW50cy5nZXRVcmwoJ2FkZHJlc3NlcycsIHsgdXNlcklkIH0pO1xuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5nZXQ8T2NjLkFkZHJlc3NMaXN0Pih1cmwsIHsgaGVhZGVycyB9KVxuICAgICAgLnBpcGUoXG4gICAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiBhbnkpID0+IHRocm93RXJyb3IoZXJyb3IpKSxcbiAgICAgICAgbWFwKGFkZHJlc3NMaXN0ID0+IGFkZHJlc3NMaXN0LmFkZHJlc3NlcyksXG4gICAgICAgIHRoaXMuY29udmVydGVyLnBpcGVhYmxlTWFueShBRERSRVNTX05PUk1BTElaRVIpXG4gICAgICApO1xuICB9XG5cbiAgYWRkKHVzZXJJZDogc3RyaW5nLCBhZGRyZXNzOiBBZGRyZXNzKTogT2JzZXJ2YWJsZTx7fT4ge1xuICAgIGNvbnN0IHVybCA9IHRoaXMub2NjRW5kcG9pbnRzLmdldFVybCgnYWRkcmVzc2VzJywgeyB1c2VySWQgfSk7XG4gICAgY29uc3QgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0pO1xuICAgIGFkZHJlc3MgPSB0aGlzLmNvbnZlcnRlci5jb252ZXJ0KGFkZHJlc3MsIEFERFJFU1NfU0VSSUFMSVpFUik7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAucG9zdCh1cmwsIGFkZHJlc3MsIHsgaGVhZGVycyB9KVxuICAgICAgLnBpcGUoY2F0Y2hFcnJvcigoZXJyb3I6IGFueSkgPT4gdGhyb3dFcnJvcihlcnJvcikpKTtcbiAgfVxuXG4gIHVwZGF0ZSh1c2VySWQ6IHN0cmluZywgYWRkcmVzc0lkOiBzdHJpbmcsIGFkZHJlc3M6IEFkZHJlc3MpOiBPYnNlcnZhYmxlPHt9PiB7XG4gICAgY29uc3QgdXJsID0gdGhpcy5vY2NFbmRwb2ludHMuZ2V0VXJsKCdhZGRyZXNzRGV0YWlsJywge1xuICAgICAgdXNlcklkLFxuICAgICAgYWRkcmVzc0lkLFxuICAgIH0pO1xuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9KTtcbiAgICBhZGRyZXNzID0gdGhpcy5jb252ZXJ0ZXIuY29udmVydChhZGRyZXNzLCBBRERSRVNTX1NFUklBTElaRVIpO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLnBhdGNoKHVybCwgYWRkcmVzcywgeyBoZWFkZXJzIH0pXG4gICAgICAucGlwZShjYXRjaEVycm9yKChlcnJvcjogYW55KSA9PiB0aHJvd0Vycm9yKGVycm9yKSkpO1xuICB9XG5cbiAgdmVyaWZ5KHVzZXJJZDogc3RyaW5nLCBhZGRyZXNzOiBBZGRyZXNzKTogT2JzZXJ2YWJsZTxBZGRyZXNzVmFsaWRhdGlvbj4ge1xuICAgIGNvbnN0IHVybCA9IHRoaXMub2NjRW5kcG9pbnRzLmdldFVybCgnYWRkcmVzc1ZlcmlmaWNhdGlvbicsIHsgdXNlcklkIH0pO1xuICAgIGxldCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSk7XG4gICAgaWYgKHVzZXJJZCA9PT0gT0NDX1VTRVJfSURfQU5PTllNT1VTKSB7XG4gICAgICBoZWFkZXJzID0gSW50ZXJjZXB0b3JVdGlsLmNyZWF0ZUhlYWRlcihVU0VfQ0xJRU5UX1RPS0VOLCB0cnVlLCBoZWFkZXJzKTtcbiAgICB9XG4gICAgYWRkcmVzcyA9IHRoaXMuY29udmVydGVyLmNvbnZlcnQoYWRkcmVzcywgQUREUkVTU19TRVJJQUxJWkVSKTtcblxuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5wb3N0PEFkZHJlc3NWYWxpZGF0aW9uPih1cmwsIGFkZHJlc3MsIHsgaGVhZGVycyB9KVxuICAgICAgLnBpcGUoXG4gICAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiBhbnkpID0+IHRocm93RXJyb3IoZXJyb3IpKSxcbiAgICAgICAgdGhpcy5jb252ZXJ0ZXIucGlwZWFibGUoQUREUkVTU19WQUxJREFUSU9OX05PUk1BTElaRVIpXG4gICAgICApO1xuICB9XG5cbiAgZGVsZXRlKHVzZXJJZDogc3RyaW5nLCBhZGRyZXNzSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8e30+IHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLm9jY0VuZHBvaW50cy5nZXRVcmwoJ2FkZHJlc3NEZXRhaWwnLCB7XG4gICAgICB1c2VySWQsXG4gICAgICBhZGRyZXNzSWQsXG4gICAgfSk7XG4gICAgY29uc3QgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmRlbGV0ZSh1cmwsIHsgaGVhZGVycyB9KVxuICAgICAgLnBpcGUoY2F0Y2hFcnJvcigoZXJyb3I6IGFueSkgPT4gdGhyb3dFcnJvcihlcnJvcikpKTtcbiAgfVxufVxuIl19
import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
import { throwError, forkJoin } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { OccConfig } from '../../config/occ-config';
import { ConverterService } from '../../../util/converter.service';
import { PRODUCT_INTERESTS_NORMALIZER } from '../../../user/connectors/interests/converters';
var headers = new HttpHeaders({
    'Content-Type': 'application/json',
});
var OccUserInterestsAdapter = /** @class */ (function () {
    function OccUserInterestsAdapter(http, occEndpoints, config, converter) {
        this.http = http;
        this.occEndpoints = occEndpoints;
        this.config = config;
        this.converter = converter;
    }
    OccUserInterestsAdapter.prototype.getInterests = function (userId, pageSize, currentPage, sort, productCode, notificationType) {
        var params = new HttpParams().set('sort', sort ? sort : 'name:asc');
        if (pageSize) {
            params = params.set('pageSize', pageSize.toString());
        }
        if (currentPage) {
            params = params.set('currentPage', currentPage.toString());
        }
        if (productCode) {
            params = params.set('productCode', productCode);
        }
        if (notificationType) {
            params = params.set('notificationType', notificationType.toString());
        }
        return this.http
            .get(this.occEndpoints.getUrl('getProductInterests', { userId: userId }), {
            headers: headers,
            params: params,
        })
            .pipe(this.converter.pipeable(PRODUCT_INTERESTS_NORMALIZER), catchError(function (error) { return throwError(error); }));
    };
    OccUserInterestsAdapter.prototype.removeInterest = function (userId, item) {
        var _this = this;
        var r = [];
        item.productInterestEntry.forEach(function (entry) {
            var params = new HttpParams()
                .set('productCode', item.product.code)
                .set('notificationType', entry.interestType);
            r.push(_this.http
                .delete(_this.occEndpoints.getUrl('productInterests', { userId: userId }), {
                params: params,
            })
                .pipe(catchError(function (error) { return throwError(error); })));
        });
        return forkJoin(r);
    };
    OccUserInterestsAdapter.prototype.addInterest = function (userId, productCode, notificationType) {
        var params = new HttpParams()
            .set('productCode', productCode)
            .set('notificationType', notificationType.toString());
        return this.http
            .post(this.occEndpoints.getUrl('productInterests', { userId: userId }), {}, {
            headers: headers,
            params: params,
        })
            .pipe(catchError(function (error) { return throwError(error); }));
    };
    OccUserInterestsAdapter.ctorParameters = function () { return [
        { type: HttpClient },
        { type: OccEndpointsService },
        { type: OccConfig },
        { type: ConverterService }
    ]; };
    OccUserInterestsAdapter = __decorate([
        Injectable()
    ], OccUserInterestsAdapter);
    return OccUserInterestsAdapter;
}());
export { OccUserInterestsAdapter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXVzZXItaW50ZXJlc3RzLmFkYXB0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvb2NjL2FkYXB0ZXJzL3VzZXIvb2NjLXVzZXItaW50ZXJlc3RzLmFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDM0UsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDM0UsT0FBTyxFQUFjLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBTzVDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNuRSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUU3RixJQUFNLE9BQU8sR0FBRyxJQUFJLFdBQVcsQ0FBQztJQUM5QixjQUFjLEVBQUUsa0JBQWtCO0NBQ25DLENBQUMsQ0FBQztBQUdIO0lBQ0UsaUNBQ1ksSUFBZ0IsRUFDaEIsWUFBaUMsRUFDakMsTUFBaUIsRUFDakIsU0FBMkI7UUFIM0IsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixpQkFBWSxHQUFaLFlBQVksQ0FBcUI7UUFDakMsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQUNqQixjQUFTLEdBQVQsU0FBUyxDQUFrQjtJQUNwQyxDQUFDO0lBRUcsOENBQVksR0FBbkIsVUFDRSxNQUFjLEVBQ2QsUUFBaUIsRUFDakIsV0FBb0IsRUFDcEIsSUFBYSxFQUNiLFdBQW9CLEVBQ3BCLGdCQUFtQztRQUVuQyxJQUFJ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QSxVQUFVLENBQUMsS0FBSyxDQUFDLEVBQWpCLENBQWlCLENBQUMsQ0FBQyxDQUFDO0lBQ3pELENBQUM7O2dCQTdFaUIsVUFBVTtnQkFDRixtQkFBbUI7Z0JBQ3pCLFNBQVM7Z0JBQ04sZ0JBQWdCOztJQUw1Qix1QkFBdUI7UUFEbkMsVUFBVSxFQUFFO09BQ0EsdUJBQXVCLENBZ0ZuQztJQUFELDhCQUFDO0NBQUEsQUFoRkQsSUFnRkM7U0FoRlksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMsIEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPY2NFbmRwb2ludHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvb2NjLWVuZHBvaW50cy5zZXJ2aWNlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIHRocm93RXJyb3IsIGZvcmtKb2luIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgVXNlckludGVyZXN0c0FkYXB0ZXIgfSBmcm9tICcuLi8uLi8uLi91c2VyL2Nvbm5lY3RvcnMvaW50ZXJlc3RzL3VzZXItaW50ZXJlc3RzLmFkYXB0ZXInO1xuaW1wb3J0IHtcbiAgUHJvZHVjdEludGVyZXN0U2VhcmNoUmVzdWx0LFxuICBQcm9kdWN0SW50ZXJlc3RFbnRyeVJlbGF0aW9uLFxuICBOb3RpZmljYXRpb25UeXBlLFxufSBmcm9tICcuLi8uLi8uLi9tb2RlbC9wcm9kdWN0LWludGVyZXN0Lm1vZGVsJztcbmltcG9ydCB7IE9jY0NvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZy9vY2MtY29uZmlnJztcbmltcG9ydCB7IENvbnZlcnRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi91dGlsL2NvbnZlcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7IFBST0RVQ1RfSU5URVJFU1RTX05PUk1BTElaRVIgfSBmcm9tICcuLi8uLi8uLi91c2VyL2Nvbm5lY3RvcnMvaW50ZXJlc3RzL2NvbnZlcnRlcnMnO1xuXG5jb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHtcbiAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbn0pO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT2NjVXNlckludGVyZXN0c0FkYXB0ZXIgaW1wbGVtZW50cyBVc2VySW50ZXJlc3RzQWRhcHRlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByb3RlY3RlZCBvY2NFbmRwb2ludHM6IE9jY0VuZHBvaW50c1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNvbmZpZzogT2NjQ29uZmlnLFxuICAgIHByb3RlY3RlZCBjb252ZXJ0ZXI6IENvbnZlcnRlclNlcnZpY2VcbiAgKSB7fVxuXG4gIHB1YmxpYyBnZXRJbnRlcmVzdHMoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgcGFnZVNpemU/OiBudW1iZXIsXG4gICAgY3VycmVudFBhZ2U/OiBudW1iZXIsXG4gICAgc29ydD86IHN0cmluZyxcbiAgICBwcm9kdWN0Q29kZT86IHN0cmluZyxcbiAgICBub3RpZmljYXRpb25UeXBlPzogTm90aWZpY2F0aW9uVHlwZVxuICApOiBPYnNlcnZhYmxlPFByb2R1Y3RJbnRlcmVzdFNlYXJjaFJlc3VsdD4ge1xuICAgIGxldCBwYXJhbXMgPSBuZXcgSHR0cFBhcmFtcygpLnNldCgnc29ydCcsIHNvcnQgPyBzb3J0IDogJ25hbWU6YXNjJyk7XG4gICAgaWYgKHBhZ2VTaXplKSB7XG4gICAgICBwYXJhbXMgPSBwYXJhbXMuc2V0KCdwYWdlU2l6ZScsIHBhZ2VTaXplLnRvU3RyaW5nKCkpO1xuICAgIH1cbiAgICBpZiAoY3VycmVudFBhZ2UpIHtcbiAgICAgIHBhcmFtcyA9IHBhcmFtcy5zZXQoJ2N1cnJlbnRQYWdlJywgY3VycmVudFBhZ2UudG9TdHJpbmcoKSk7XG4gICAgfVxuICAgIGlmIChwcm9kdWN0Q29kZSkge1xuICAgICAgcGFyYW1zID0gcGFyYW1zLnNldCgncHJvZHVjdENvZGUnLCBwcm9kdWN0Q29kZSk7XG4gICAgfVxuICAgIGlmIChub3RpZmljYXRpb25UeXBlKSB7XG4gICAgICBwYXJhbXMgPSBwYXJhbXMuc2V0KCdub3RpZmljYXRpb25UeXBlJywgbm90aWZpY2F0aW9uVHlwZS50b1N0cmluZygpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0KHRoaXMub2NjRW5kcG9pbnRzLmdldFVybCgnZ2V0UHJvZHVjdEludGVyZXN0cycsIHsgdXNlcklkIH0pLCB7XG4gICAgICAgIGhlYWRlcnMsXG4gICAgICAgIHBhcmFtcyxcbiAgICAgIH0pXG4gICAgICAucGlwZShcbiAgICAgICAgdGhpcy5jb252ZXJ0ZXIucGlwZWFibGUoUFJPRFVDVF9JTlRFUkVTVFNfTk9STUFMSVpFUiksXG4gICAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiBhbnkpID0+IHRocm93RXJyb3IoZXJyb3IpKVxuICAgICAgKTtcbiAgfVxuXG4gIHB1YmxpYyByZW1vdmVJbnRlcmVzdChcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBpdGVtOiBQcm9kdWN0SW50ZXJlc3RFbnRyeVJlbGF0aW9uXG4gICk6IE9ic2VydmFibGU8YW55W10+IHtcbiAgICBjb25zdCByOiBPYnNlcnZhYmxlPGFueT5bXSA9IFtdO1xuICAgIGl0ZW0ucHJvZHVjdEludGVyZXN0RW50cnkuZm9yRWFjaCgoZW50cnk6IGFueSkgPT4ge1xuICAgICAgY29uc3QgcGFyYW1zOiBIdHRwUGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoKVxuICAgICAgICAuc2V0KCdwcm9kdWN0Q29kZScsIGl0ZW0ucHJvZHVjdC5jb2RlKVxuICAgICAgICAuc2V0KCdub3RpZmljYXRpb25UeXBlJywgZW50cnkuaW50ZXJlc3RUeXBlKTtcbiAgICAgIHIucHVzaChcbiAgICAgICAgdGhpcy5odHRwXG4gICAgICAgICAgLmRlbGV0ZSh0aGlzLm9jY0VuZHBvaW50cy5nZXRVcmwoJ3Byb2R1Y3RJbnRlcmVzdHMnLCB7IHVzZXJJZCB9KSwge1xuICAgICAgICAgICAgcGFyYW1zOiBwYXJhbXMsXG4gICAgICAgICAgfSlcbiAgICAgICAgICAucGlwZShjYXRjaEVycm9yKChlcnJvcjogYW55KSA9PiB0aHJvd0Vycm9yKGVycm9yKSkpXG4gICAgICApO1xuICAgIH0pO1xuICAgIHJldHVybiBmb3JrSm9pbihyKTtcbiAgfVxuXG4gIHB1YmxpYyBhZGRJbnRlcmVzdChcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBwcm9kdWN0Q29kZTogc3RyaW5nLFxuICAgIG5vdGlmaWNhdGlvblR5cGU6IE5vdGlmaWNhdGlvblR5cGVcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgSHR0cFBhcmFtcygpXG4gICAgICAuc2V0KCdwcm9kdWN0Q29kZScsIHByb2R1Y3RDb2RlKVxuICAgICAgLnNldCgnbm90aWZpY2F0aW9uVHlwZScsIG5vdGlmaWNhdGlvblR5cGUudG9TdHJpbmcoKSk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLnBvc3QoXG4gICAgICAgIHRoaXMub2NjRW5kcG9pbnRzLmdldFVybCgncHJvZHVjdEludGVyZXN0cycsIHsgdXNlcklkIH0pLFxuICAgICAgICB7fSxcbiAgICAgICAge1xuICAgICAgICAgIGhlYWRlcnMsXG4gICAgICAgICAgcGFyYW1zLFxuICAgICAgICB9XG4gICAgICApXG4gICAgICAucGlwZShjYXRjaEVycm9yKChlcnJvcjogYW55KSA9PiB0aHJvd0Vycm9yKGVycm9yKSkpO1xuICB9XG59XG4iXX0=
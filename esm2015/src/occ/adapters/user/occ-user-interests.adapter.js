/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
import { throwError, forkJoin } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { OccConfig } from '../../config/occ-config';
import { ConverterService } from '../../../util/converter.service';
import { PRODUCT_INTERESTS_NORMALIZER } from '../../../user/connectors/interests/converters';
/** @type {?} */
const headers = new HttpHeaders({
    'Content-Type': 'application/json',
});
export class OccUserInterestsAdapter {
    /**
     * @param {?} http
     * @param {?} occEndpoints
     * @param {?} config
     * @param {?} converter
     */
    constructor(http, occEndpoints, config, converter) {
        this.http = http;
        this.occEndpoints = occEndpoints;
        this.config = config;
        this.converter = converter;
    }
    /**
     * @param {?} userId
     * @param {?=} pageSize
     * @param {?=} currentPage
     * @param {?=} sort
     * @param {?=} productCode
     * @param {?=} notificationType
     * @return {?}
     */
    getInterests(userId, pageSize, currentPage, sort, productCode, notificationType) {
        /** @type {?} */
        let params = new HttpParams().set('sort', sort ? sort : 'name:asc');
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
            .get(this.occEndpoints.getUrl('getProductInterests', { userId }), {
            headers,
            params,
        })
            .pipe(this.converter.pipeable(PRODUCT_INTERESTS_NORMALIZER), catchError((/**
         * @param {?} error
         * @return {?}
         */
        (error) => throwError(error))));
    }
    /**
     * @param {?} userId
     * @param {?} item
     * @return {?}
     */
    removeInterest(userId, item) {
        /** @type {?} */
        const r = [];
        item.productInterestEntry.forEach((/**
         * @param {?} entry
         * @return {?}
         */
        (entry) => {
            /** @type {?} */
            const params = new HttpParams()
                .set('productCode', item.product.code)
                .set('notificationType', entry.interestType);
            r.push(this.http
                .delete(this.occEndpoints.getUrl('productInterests', { userId }), {
                params: params,
            })
                .pipe(catchError((/**
             * @param {?} error
             * @return {?}
             */
            (error) => throwError(error)))));
        }));
        return forkJoin(r);
    }
    /**
     * @param {?} userId
     * @param {?} productCode
     * @param {?} notificationType
     * @return {?}
     */
    addInterest(userId, productCode, notificationType) {
        /** @type {?} */
        const params = new HttpParams()
            .set('productCode', productCode)
            .set('notificationType', notificationType.toString());
        return this.http
            .post(this.occEndpoints.getUrl('productInterests', { userId }), {}, {
            headers,
            params,
        })
            .pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        (error) => throwError(error))));
    }
}
OccUserInterestsAdapter.decorators = [
    { type: Injectable }
];
/** @nocollapse */
OccUserInterestsAdapter.ctorParameters = () => [
    { type: HttpClient },
    { type: OccEndpointsService },
    { type: OccConfig },
    { type: ConverterService }
];
if (false) {
    /**
     * @type {?}
     * @protected
     */
    OccUserInterestsAdapter.prototype.http;
    /**
     * @type {?}
     * @protected
     */
    OccUserInterestsAdapter.prototype.occEndpoints;
    /**
     * @type {?}
     * @protected
     */
    OccUserInterestsAdapter.prototype.config;
    /**
     * @type {?}
     * @protected
     */
    OccUserInterestsAdapter.prototype.converter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXVzZXItaW50ZXJlc3RzLmFkYXB0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvb2NjL2FkYXB0ZXJzL3VzZXIvb2NjLXVzZXItaW50ZXJlc3RzLmFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDM0UsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDM0UsT0FBTyxFQUFjLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBTzVDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNuRSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQzs7TUFFdkYsT0FBTyxHQUFHLElBQUksV0FBVyxDQUFDO0lBQzlCLGNBQWMsRUFBRSxrQkFBa0I7Q0FDbkMsQ0FBQztBQUdGLE1BQU0sT0FBTyx1QkFBdUI7Ozs7Ozs7SUFDbEMsWUFDWSxJQUFnQixFQUNoQixZQUFpQyxFQUNqQyxNQUFpQixFQUNqQixTQUEyQjtRQUgzQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLGlCQUFZLEdBQVosWUFBWSxDQUFxQjtRQUNqQyxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQ2pCLGNBQVMsR0FBVCxTQUFTLENBQWtCO0lBQ3BDLENBQUM7Ozs7Ozs7Ozs7SUFFRyxZQUFZLENBQ2pCLE1BQWMsRUFDZCxRQUFpQixFQUNqQixXQUFvQixFQUNwQixJQUFhLEVBQ2IsV0FBb0IsRUFDcEIsZ0JBQW1DOztZQUUvQixNQUFNLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUM7UUFDbkUsSUFBSSxRQUFRLEVBQUU7WUFDWixNQUFNLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7U0FDdEQ7UUFDRCxJQUFJLFdBQVcsRUFBRTtZQUNmLE1BQU0sR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztTQUM1RDtRQUNELElBQUksV0FBVyxFQUFFO1lBQ2YsTUFBTSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1NBQ2pEO1FBQ0QsSUFBSSxnQkFBZ0IsRUFBRTtZQUNwQixNQUFNLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1NBQ3RFO1FBRUQsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUU7WUFDaEUsT0FBTztZQUNQLE1BQU07U0FDUCxDQUFDO2FBQ0QsSUFBSSxDQUNILElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLDRCQUE0QixDQUFDLEVBQ3JELFVBQVU7Ozs7UUFBQyxDQUFDLEtBQVUsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFDLENBQzlDLENBQUM7SUFDTixDQUFDOzs7Ozs7SUFFTSxjQUFjLENBQ25CLE1BQWMsRUFDZCxJQUFrQzs7Y0FFNUIsQ0FBQyxHQUFzQixFQUFFO1FBQy9CLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPOzs7O1FBQUMsQ0FBQyxLQUFVLEVBQUUsRUFBRTs7a0JBQ3pDLE1BQU0sR0FBZSxJQUFJLFVBQVUsRUFBRTtpQkFDeEMsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztpQkFDckMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxZQUFZLENBQUM7WUFDOUMsQ0FBQyxDQUFDLElBQUksQ0FDSixJQUFJLENBQUMsSUFBSTtpQkFDTixNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsa0JBQWtCLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFO2dCQUNoRSxNQUFNLEVBQUUsTUFBTTthQUNmLENBQUM7aUJBQ0QsSUFBSSxDQUFDLFVBQVU7Ozs7WUFBQyxDQUFDLEtBQVUsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFDLENBQUMsQ0FDdkQsQ0FBQztRQUNKLENBQUMsRUFBQyxDQUFDO1FBQ0gsT0FBTyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckIsQ0FBQzs7Ozs7OztJQUVNLFdBQVcsQ0FDaEIsTUFBYyxFQUNkLFdBQW1CLEVBQ25CLGdCQUFrQzs7Y0FFNUIsTUFBTSxHQUFHLElBQUksVUFBVSxFQUFFO2FBQzVCLEdBQUcsQ0FBQyxhQUFhLEVBQUUsV0FBVyxDQUFDO2FBQy9CLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN2RCxPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsSUFBSSxDQUNILElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLGtCQUFrQixFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFDeEQsRUFBRSxFQUNGO1lBQ0UsT0FBTztZQUNQLE1BQU07U0FDUCxDQUNGO2FBQ0EsSUFBSSxDQUFDLFVBQVU7Ozs7UUFBQyxDQUFDLEtBQVUsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUN6RCxDQUFDOzs7WUFoRkYsVUFBVTs7OztZQWxCRixVQUFVO1lBQ1YsbUJBQW1CO1lBU25CLFNBQVM7WUFDVCxnQkFBZ0I7Ozs7Ozs7SUFVckIsdUNBQTBCOzs7OztJQUMxQiwrQ0FBMkM7Ozs7O0lBQzNDLHlDQUEyQjs7Ozs7SUFDM0IsNENBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMsIEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPY2NFbmRwb2ludHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvb2NjLWVuZHBvaW50cy5zZXJ2aWNlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIHRocm93RXJyb3IsIGZvcmtKb2luIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgVXNlckludGVyZXN0c0FkYXB0ZXIgfSBmcm9tICcuLi8uLi8uLi91c2VyL2Nvbm5lY3RvcnMvaW50ZXJlc3RzL3VzZXItaW50ZXJlc3RzLmFkYXB0ZXInO1xuaW1wb3J0IHtcbiAgUHJvZHVjdEludGVyZXN0U2VhcmNoUmVzdWx0LFxuICBQcm9kdWN0SW50ZXJlc3RFbnRyeVJlbGF0aW9uLFxuICBOb3RpZmljYXRpb25UeXBlLFxufSBmcm9tICcuLi8uLi8uLi9tb2RlbC9wcm9kdWN0LWludGVyZXN0Lm1vZGVsJztcbmltcG9ydCB7IE9jY0NvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZy9vY2MtY29uZmlnJztcbmltcG9ydCB7IENvbnZlcnRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi91dGlsL2NvbnZlcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7IFBST0RVQ1RfSU5URVJFU1RTX05PUk1BTElaRVIgfSBmcm9tICcuLi8uLi8uLi91c2VyL2Nvbm5lY3RvcnMvaW50ZXJlc3RzL2NvbnZlcnRlcnMnO1xuXG5jb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHtcbiAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbn0pO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT2NjVXNlckludGVyZXN0c0FkYXB0ZXIgaW1wbGVtZW50cyBVc2VySW50ZXJlc3RzQWRhcHRlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByb3RlY3RlZCBvY2NFbmRwb2ludHM6IE9jY0VuZHBvaW50c1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNvbmZpZzogT2NjQ29uZmlnLFxuICAgIHByb3RlY3RlZCBjb252ZXJ0ZXI6IENvbnZlcnRlclNlcnZpY2VcbiAgKSB7fVxuXG4gIHB1YmxpYyBnZXRJbnRlcmVzdHMoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgcGFnZVNpemU/OiBudW1iZXIsXG4gICAgY3VycmVudFBhZ2U/OiBudW1iZXIsXG4gICAgc29ydD86IHN0cmluZyxcbiAgICBwcm9kdWN0Q29kZT86IHN0cmluZyxcbiAgICBub3RpZmljYXRpb25UeXBlPzogTm90aWZpY2F0aW9uVHlwZVxuICApOiBPYnNlcnZhYmxlPFByb2R1Y3RJbnRlcmVzdFNlYXJjaFJlc3VsdD4ge1xuICAgIGxldCBwYXJhbXMgPSBuZXcgSHR0cFBhcmFtcygpLnNldCgnc29ydCcsIHNvcnQgPyBzb3J0IDogJ25hbWU6YXNjJyk7XG4gICAgaWYgKHBhZ2VTaXplKSB7XG4gICAgICBwYXJhbXMgPSBwYXJhbXMuc2V0KCdwYWdlU2l6ZScsIHBhZ2VTaXplLnRvU3RyaW5nKCkpO1xuICAgIH1cbiAgICBpZiAoY3VycmVudFBhZ2UpIHtcbiAgICAgIHBhcmFtcyA9IHBhcmFtcy5zZXQoJ2N1cnJlbnRQYWdlJywgY3VycmVudFBhZ2UudG9TdHJpbmcoKSk7XG4gICAgfVxuICAgIGlmIChwcm9kdWN0Q29kZSkge1xuICAgICAgcGFyYW1zID0gcGFyYW1zLnNldCgncHJvZHVjdENvZGUnLCBwcm9kdWN0Q29kZSk7XG4gICAgfVxuICAgIGlmIChub3RpZmljYXRpb25UeXBlKSB7XG4gICAgICBwYXJhbXMgPSBwYXJhbXMuc2V0KCdub3RpZmljYXRpb25UeXBlJywgbm90aWZpY2F0aW9uVHlwZS50b1N0cmluZygpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0KHRoaXMub2NjRW5kcG9pbnRzLmdldFVybCgnZ2V0UHJvZHVjdEludGVyZXN0cycsIHsgdXNlcklkIH0pLCB7XG4gICAgICAgIGhlYWRlcnMsXG4gICAgICAgIHBhcmFtcyxcbiAgICAgIH0pXG4gICAgICAucGlwZShcbiAgICAgICAgdGhpcy5jb252ZXJ0ZXIucGlwZWFibGUoUFJPRFVDVF9JTlRFUkVTVFNfTk9STUFMSVpFUiksXG4gICAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiBhbnkpID0+IHRocm93RXJyb3IoZXJyb3IpKVxuICAgICAgKTtcbiAgfVxuXG4gIHB1YmxpYyByZW1vdmVJbnRlcmVzdChcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBpdGVtOiBQcm9kdWN0SW50ZXJlc3RFbnRyeVJlbGF0aW9uXG4gICk6IE9ic2VydmFibGU8YW55W10+IHtcbiAgICBjb25zdCByOiBPYnNlcnZhYmxlPGFueT5bXSA9IFtdO1xuICAgIGl0ZW0ucHJvZHVjdEludGVyZXN0RW50cnkuZm9yRWFjaCgoZW50cnk6IGFueSkgPT4ge1xuICAgICAgY29uc3QgcGFyYW1zOiBIdHRwUGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoKVxuICAgICAgICAuc2V0KCdwcm9kdWN0Q29kZScsIGl0ZW0ucHJvZHVjdC5jb2RlKVxuICAgICAgICAuc2V0KCdub3RpZmljYXRpb25UeXBlJywgZW50cnkuaW50ZXJlc3RUeXBlKTtcbiAgICAgIHIucHVzaChcbiAgICAgICAgdGhpcy5odHRwXG4gICAgICAgICAgLmRlbGV0ZSh0aGlzLm9jY0VuZHBvaW50cy5nZXRVcmwoJ3Byb2R1Y3RJbnRlcmVzdHMnLCB7IHVzZXJJZCB9KSwge1xuICAgICAgICAgICAgcGFyYW1zOiBwYXJhbXMsXG4gICAgICAgICAgfSlcbiAgICAgICAgICAucGlwZShjYXRjaEVycm9yKChlcnJvcjogYW55KSA9PiB0aHJvd0Vycm9yKGVycm9yKSkpXG4gICAgICApO1xuICAgIH0pO1xuICAgIHJldHVybiBmb3JrSm9pbihyKTtcbiAgfVxuXG4gIHB1YmxpYyBhZGRJbnRlcmVzdChcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBwcm9kdWN0Q29kZTogc3RyaW5nLFxuICAgIG5vdGlmaWNhdGlvblR5cGU6IE5vdGlmaWNhdGlvblR5cGVcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgSHR0cFBhcmFtcygpXG4gICAgICAuc2V0KCdwcm9kdWN0Q29kZScsIHByb2R1Y3RDb2RlKVxuICAgICAgLnNldCgnbm90aWZpY2F0aW9uVHlwZScsIG5vdGlmaWNhdGlvblR5cGUudG9TdHJpbmcoKSk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLnBvc3QoXG4gICAgICAgIHRoaXMub2NjRW5kcG9pbnRzLmdldFVybCgncHJvZHVjdEludGVyZXN0cycsIHsgdXNlcklkIH0pLFxuICAgICAgICB7fSxcbiAgICAgICAge1xuICAgICAgICAgIGhlYWRlcnMsXG4gICAgICAgICAgcGFyYW1zLFxuICAgICAgICB9XG4gICAgICApXG4gICAgICAucGlwZShjYXRjaEVycm9yKChlcnJvcjogYW55KSA9PiB0aHJvd0Vycm9yKGVycm9yKSkpO1xuICB9XG59XG4iXX0=
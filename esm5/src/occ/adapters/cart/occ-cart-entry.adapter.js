/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
import { ConverterService } from '../../../util/converter.service';
import { CART_MODIFICATION_NORMALIZER } from '../../../cart/connectors/entry/converters';
var OccCartEntryAdapter = /** @class */ (function () {
    function OccCartEntryAdapter(http, occEndpoints, converter) {
        this.http = http;
        this.occEndpoints = occEndpoints;
        this.converter = converter;
    }
    /**
     * @protected
     * @param {?} userId
     * @return {?}
     */
    OccCartEntryAdapter.prototype.getCartEndpoint = /**
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
     * @param {?} productCode
     * @param {?=} quantity
     * @return {?}
     */
    OccCartEntryAdapter.prototype.add = /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?} productCode
     * @param {?=} quantity
     * @return {?}
     */
    function (userId, cartId, productCode, quantity) {
        if (quantity === void 0) { quantity = 1; }
        /** @type {?} */
        var toAdd = JSON.stringify({});
        /** @type {?} */
        var url = this.getCartEndpoint(userId) + cartId + '/entries';
        /** @type {?} */
        var params = new HttpParams({
            fromString: 'code=' + productCode + '&qty=' + quantity,
        });
        /** @type {?} */
        var headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        return this.http
            .post(url, toAdd, { headers: headers, params: params })
            .pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return throwError(error.json()); })), this.converter.pipeable(CART_MODIFICATION_NORMALIZER));
    };
    /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?} entryNumber
     * @param {?} qty
     * @param {?=} pickupStore
     * @return {?}
     */
    OccCartEntryAdapter.prototype.update = /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?} entryNumber
     * @param {?} qty
     * @param {?=} pickupStore
     * @return {?}
     */
    function (userId, cartId, entryNumber, qty, pickupStore) {
        /** @type {?} */
        var url = this.getCartEndpoint(userId) + cartId + '/entries/' + entryNumber;
        /** @type {?} */
        var queryString = 'qty=' + qty;
        if (pickupStore) {
            queryString = queryString + '&pickupStore=' + pickupStore;
        }
        /** @type {?} */
        var params = new HttpParams({
            fromString: queryString,
        });
        /** @type {?} */
        var headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        return this.http.patch(url, {}, { headers: headers, params: params }).pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return throwError(error.json()); })), this.converter.pipeable(CART_MODIFICATION_NORMALIZER));
    };
    /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?} entryNumber
     * @return {?}
     */
    OccCartEntryAdapter.prototype.remove = /**
     * @param {?} userId
     * @param {?} cartId
     * @param {?} entryNumber
     * @return {?}
     */
    function (userId, cartId, entryNumber) {
        /** @type {?} */
        var url = this.getCartEndpoint(userId) + cartId + '/entries/' + entryNumber;
        /** @type {?} */
        var headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        return this.http
            .delete(url, { headers: headers })
            .pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return throwError(error.json()); })));
    };
    OccCartEntryAdapter.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    OccCartEntryAdapter.ctorParameters = function () { return [
        { type: HttpClient },
        { type: OccEndpointsService },
        { type: ConverterService }
    ]; };
    return OccCartEntryAdapter;
}());
export { OccCartEntryAdapter };
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
    OccCartEntryAdapter.prototype.occEndpoints;
    /**
     * @type {?}
     * @protected
     */
    OccCartEntryAdapter.prototype.converter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNhcnQtZW50cnkuYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2MvYWRhcHRlcnMvY2FydC9vY2MtY2FydC1lbnRyeS5hZGFwdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFOUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDM0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRTNFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBR3pGO0lBRUUsNkJBQ1ksSUFBZ0IsRUFDaEIsWUFBaUMsRUFDakMsU0FBMkI7UUFGM0IsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixpQkFBWSxHQUFaLFlBQVksQ0FBcUI7UUFDakMsY0FBUyxHQUFULFNBQVMsQ0FBa0I7SUFDcEMsQ0FBQzs7Ozs7O0lBRU0sNkNBQWU7Ozs7O0lBQXpCLFVBQTBCLE1BQWM7O1lBQ2hDLFlBQVksR0FBRyxRQUFRLEdBQUcsTUFBTSxHQUFHLFNBQVM7UUFDbEQsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNyRCxDQUFDOzs7Ozs7OztJQUVNLGlDQUFHOzs7Ozs7O0lBQVYsVUFDRSxNQUFjLEVBQ2QsTUFBYyxFQUNkLFdBQW1CLEVBQ25CLFFBQW9CO1FBQXBCLHlCQUFBLEVBQUEsWUFBb0I7O1lBRWQsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDOztZQUUxQixHQUFHLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsR0FBRyxNQUFNLEdBQUcsVUFBVTs7WUFFeEQsTUFBTSxHQUFHLElBQUksVUFBVSxDQUFDO1lBQzVCLFVBQVUsRUFBRSxPQUFPLEdBQUcsV0FBVyxHQUFHLE9BQU8sR0FBRyxRQUFRO1NBQ3ZELENBQUM7O1lBRUksT0FBTyxHQUFHLElBQUksV0FBVyxDQUFDO1lBQzlCLGNBQWMsRUFBRSxtQ0FBbUM7U0FDcEQsQ0FBQztRQUVGLE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYixJQUFJLENBQW1CLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRSxPQUFPLFNBQUEsRUFBRSxNQUFNLFFBQUEsRUFBRSxDQUFDO2FBQ3ZELElBQUksQ0FDSCxVQUFVOzs7O1FBQUMsVUFBQyxLQUFVLElBQUssT0FBQSxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQXhCLENBQXdCLEVBQUMsRUFDcEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsNEJBQTRCLENBQUMsQ0FDdEQsQ0FBQztJQUNOLENBQUM7Ozs7Ozs7OztJQUVNLG9DQUFNOzs7Ozs7OztJQUFiLFVBQ0UsTUFBYyxFQUNkLE1BQWMsRUFDZCxXQUFtQixFQUNuQixHQUFXLEVBQ1gsV0FBb0I7O1lBRWQsR0FBRyxHQUNQLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLEdBQUcsTUFBTSxHQUFHLFdBQVcsR0FBRyxXQUFXOztZQUUvRCxXQUFXLEdBQUcsTUFBTSxHQUFHLEdBQUc7UUFDOUIsSUFBSSxXQUFXLEVBQUU7WUFDZixXQUFXLEdBQUcsV0FBVyxHQUFHLGVBQWUsR0FBRyxXQUFXLENBQUM7U0FDM0Q7O1lBQ0ssTUFBTSxHQUFHLElBQUksVUFBVSxDQUFDO1lBQzVCLFVBQVUsRUFBRSxXQUFXO1NBQ3hCLENBQUM7O1lBRUksT0FBTyxHQUFHLElBQUksV0FBVyxDQUFDO1lBQzlCLGNBQWMsRUFBRSxtQ0FBbUM7U0FDcEQsQ0FBQztRQUVGLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQW1CLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxPQUFPLFNBQUEsRUFBRSxNQUFNLFFBQUEsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUN6RSxVQUFVOzs7O1FBQUMsVUFBQyxLQUFVLElBQUssT0FBQSxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQXhCLENBQXdCLEVBQUMsRUFDcEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsNEJBQTRCLENBQUMsQ0FDdEQsQ0FBQztJQUNKLENBQUM7Ozs7Ozs7SUFFTSxvQ0FBTTs7Ozs7O0lBQWIsVUFDRSxNQUFjLEVBQ2QsTUFBYyxFQUNkLFdBQW1COztZQUViLEdBQUcsR0FDUCxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxHQUFHLE1BQU0sR0FBRyxXQUFXLEdBQUcsV0FBVzs7WUFFN0QsT0FBTyxHQUFHLElBQUksV0FBVyxDQUFDO1lBQzlCLGNBQWMsRUFBRSxtQ0FBbUM7U0FDcEQsQ0FBQztRQUVGLE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYixNQUFNLENBQUMsR0FBRyxFQUFFLEVBQUUsT0FBTyxTQUFBLEVBQUUsQ0FBQzthQUN4QixJQUFJLENBQUMsVUFBVTs7OztRQUFDLFVBQUMsS0FBVSxJQUFLLE9BQUEsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUF4QixDQUF3QixFQUFDLENBQUMsQ0FBQztJQUNoRSxDQUFDOztnQkFsRkYsVUFBVTs7OztnQkFSRixVQUFVO2dCQUVWLG1CQUFtQjtnQkFFbkIsZ0JBQWdCOztJQXVGekIsMEJBQUM7Q0FBQSxBQW5GRCxJQW1GQztTQWxGWSxtQkFBbUI7Ozs7OztJQUU1QixtQ0FBMEI7Ozs7O0lBQzFCLDJDQUEyQzs7Ozs7SUFDM0Msd0NBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBPY2NFbmRwb2ludHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvb2NjLWVuZHBvaW50cy5zZXJ2aWNlJztcbmltcG9ydCB7IENhcnRFbnRyeUFkYXB0ZXIgfSBmcm9tICcuLi8uLi8uLi9jYXJ0L2Nvbm5lY3RvcnMvZW50cnkvY2FydC1lbnRyeS5hZGFwdGVyJztcbmltcG9ydCB7IENvbnZlcnRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi91dGlsL2NvbnZlcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7IENBUlRfTU9ESUZJQ0FUSU9OX05PUk1BTElaRVIgfSBmcm9tICcuLi8uLi8uLi9jYXJ0L2Nvbm5lY3RvcnMvZW50cnkvY29udmVydGVycyc7XG5pbXBvcnQgeyBDYXJ0TW9kaWZpY2F0aW9uIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvY2FydC5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBPY2NDYXJ0RW50cnlBZGFwdGVyIGltcGxlbWVudHMgQ2FydEVudHJ5QWRhcHRlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByb3RlY3RlZCBvY2NFbmRwb2ludHM6IE9jY0VuZHBvaW50c1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNvbnZlcnRlcjogQ29udmVydGVyU2VydmljZVxuICApIHt9XG5cbiAgcHJvdGVjdGVkIGdldENhcnRFbmRwb2ludCh1c2VySWQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgY2FydEVuZHBvaW50ID0gJ3VzZXJzLycgKyB1c2VySWQgKyAnL2NhcnRzLyc7XG4gICAgcmV0dXJuIHRoaXMub2NjRW5kcG9pbnRzLmdldEVuZHBvaW50KGNhcnRFbmRwb2ludCk7XG4gIH1cblxuICBwdWJsaWMgYWRkKFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIGNhcnRJZDogc3RyaW5nLFxuICAgIHByb2R1Y3RDb2RlOiBzdHJpbmcsXG4gICAgcXVhbnRpdHk6IG51bWJlciA9IDFcbiAgKTogT2JzZXJ2YWJsZTxDYXJ0TW9kaWZpY2F0aW9uPiB7XG4gICAgY29uc3QgdG9BZGQgPSBKU09OLnN0cmluZ2lmeSh7fSk7XG5cbiAgICBjb25zdCB1cmwgPSB0aGlzLmdldENhcnRFbmRwb2ludCh1c2VySWQpICsgY2FydElkICsgJy9lbnRyaWVzJztcblxuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKHtcbiAgICAgIGZyb21TdHJpbmc6ICdjb2RlPScgKyBwcm9kdWN0Q29kZSArICcmcXR5PScgKyBxdWFudGl0eSxcbiAgICB9KTtcblxuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLnBvc3Q8Q2FydE1vZGlmaWNhdGlvbj4odXJsLCB0b0FkZCwgeyBoZWFkZXJzLCBwYXJhbXMgfSlcbiAgICAgIC5waXBlKFxuICAgICAgICBjYXRjaEVycm9yKChlcnJvcjogYW55KSA9PiB0aHJvd0Vycm9yKGVycm9yLmpzb24oKSkpLFxuICAgICAgICB0aGlzLmNvbnZlcnRlci5waXBlYWJsZShDQVJUX01PRElGSUNBVElPTl9OT1JNQUxJWkVSKVxuICAgICAgKTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGUoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgY2FydElkOiBzdHJpbmcsXG4gICAgZW50cnlOdW1iZXI6IHN0cmluZyxcbiAgICBxdHk6IG51bWJlcixcbiAgICBwaWNrdXBTdG9yZT86IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPENhcnRNb2RpZmljYXRpb24+IHtcbiAgICBjb25zdCB1cmwgPVxuICAgICAgdGhpcy5nZXRDYXJ0RW5kcG9pbnQodXNlcklkKSArIGNhcnRJZCArICcvZW50cmllcy8nICsgZW50cnlOdW1iZXI7XG5cbiAgICBsZXQgcXVlcnlTdHJpbmcgPSAncXR5PScgKyBxdHk7XG4gICAgaWYgKHBpY2t1cFN0b3JlKSB7XG4gICAgICBxdWVyeVN0cmluZyA9IHF1ZXJ5U3RyaW5nICsgJyZwaWNrdXBTdG9yZT0nICsgcGlja3VwU3RvcmU7XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKHtcbiAgICAgIGZyb21TdHJpbmc6IHF1ZXJ5U3RyaW5nLFxuICAgIH0pO1xuXG4gICAgY29uc3QgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLnBhdGNoPENhcnRNb2RpZmljYXRpb24+KHVybCwge30sIHsgaGVhZGVycywgcGFyYW1zIH0pLnBpcGUoXG4gICAgICBjYXRjaEVycm9yKChlcnJvcjogYW55KSA9PiB0aHJvd0Vycm9yKGVycm9yLmpzb24oKSkpLFxuICAgICAgdGhpcy5jb252ZXJ0ZXIucGlwZWFibGUoQ0FSVF9NT0RJRklDQVRJT05fTk9STUFMSVpFUilcbiAgICApO1xuICB9XG5cbiAgcHVibGljIHJlbW92ZShcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBjYXJ0SWQ6IHN0cmluZyxcbiAgICBlbnRyeU51bWJlcjogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc3QgdXJsID1cbiAgICAgIHRoaXMuZ2V0Q2FydEVuZHBvaW50KHVzZXJJZCkgKyBjYXJ0SWQgKyAnL2VudHJpZXMvJyArIGVudHJ5TnVtYmVyO1xuXG4gICAgY29uc3QgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZGVsZXRlKHVybCwgeyBoZWFkZXJzIH0pXG4gICAgICAucGlwZShjYXRjaEVycm9yKChlcnJvcjogYW55KSA9PiB0aHJvd0Vycm9yKGVycm9yLmpzb24oKSkpKTtcbiAgfVxufVxuIl19
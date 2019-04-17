/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { OccEndpointsService } from '../../occ/services/occ-endpoints.service';
var ProductLoaderService = /** @class */ (function () {
    function ProductLoaderService(http, occEndpoints) {
        this.http = http;
        this.occEndpoints = occEndpoints;
    }
    /**
     * @param {?} productCode
     * @return {?}
     */
    ProductLoaderService.prototype.load = /**
     * @param {?} productCode
     * @return {?}
     */
    function (productCode) {
        return this.http
            .get(this.getEndpoint(productCode))
            .pipe(catchError(function (error) { return throwError(error.json()); }));
    };
    /**
     * @protected
     * @param {?} code
     * @return {?}
     */
    ProductLoaderService.prototype.getEndpoint = /**
     * @protected
     * @param {?} code
     * @return {?}
     */
    function (code) {
        return this.occEndpoints.getUrl('product', {
            productCode: code,
        });
    };
    ProductLoaderService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ProductLoaderService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: OccEndpointsService }
    ]; };
    return ProductLoaderService;
}());
export { ProductLoaderService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ProductLoaderService.prototype.http;
    /**
     * @type {?}
     * @private
     */
    ProductLoaderService.prototype.occEndpoints;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3Byb2R1Y3Qvb2NjL3Byb2R1Y3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFbEQsT0FBTyxFQUFFLFVBQVUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUM5QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHNUMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFFL0U7SUFFRSw4QkFDVSxJQUFnQixFQUNoQixZQUFpQztRQURqQyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLGlCQUFZLEdBQVosWUFBWSxDQUFxQjtJQUN4QyxDQUFDOzs7OztJQUVKLG1DQUFJOzs7O0lBQUosVUFBSyxXQUFtQjtRQUN0QixPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDbEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFDLEtBQVUsSUFBSyxPQUFBLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBeEIsQ0FBd0IsQ0FBQyxDQUFDLENBQUM7SUFDaEUsQ0FBQzs7Ozs7O0lBRVMsMENBQVc7Ozs7O0lBQXJCLFVBQXNCLElBQVk7UUFDaEMsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUU7WUFDekMsV0FBVyxFQUFFLElBQUk7U0FDbEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBakJGLFVBQVU7Ozs7Z0JBUkYsVUFBVTtnQkFNVixtQkFBbUI7O0lBb0I1QiwyQkFBQztDQUFBLEFBbEJELElBa0JDO1NBakJZLG9CQUFvQjs7Ozs7O0lBRTdCLG9DQUF3Qjs7Ozs7SUFDeEIsNENBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgdGhyb3dFcnJvciwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gJy4uLy4uL29jYy9vY2MtbW9kZWxzL29jYy5tb2RlbHMnO1xuaW1wb3J0IHsgT2NjRW5kcG9pbnRzU2VydmljZSB9IGZyb20gJy4uLy4uL29jYy9zZXJ2aWNlcy9vY2MtZW5kcG9pbnRzLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUHJvZHVjdExvYWRlclNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgcHJpdmF0ZSBvY2NFbmRwb2ludHM6IE9jY0VuZHBvaW50c1NlcnZpY2VcbiAgKSB7fVxuXG4gIGxvYWQocHJvZHVjdENvZGU6IHN0cmluZyk6IE9ic2VydmFibGU8UHJvZHVjdD4ge1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5nZXQodGhpcy5nZXRFbmRwb2ludChwcm9kdWN0Q29kZSkpXG4gICAgICAucGlwZShjYXRjaEVycm9yKChlcnJvcjogYW55KSA9PiB0aHJvd0Vycm9yKGVycm9yLmpzb24oKSkpKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRFbmRwb2ludChjb2RlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLm9jY0VuZHBvaW50cy5nZXRVcmwoJ3Byb2R1Y3QnLCB7XG4gICAgICBwcm9kdWN0Q29kZTogY29kZSxcbiAgICB9KTtcbiAgfVxufVxuIl19
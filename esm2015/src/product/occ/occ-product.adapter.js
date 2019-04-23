/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OccEndpointsService } from '../../occ/services/occ-endpoints.service';
import { ConverterService } from '../../util/converter.service';
import { PRODUCT_NORMALIZER } from '../connectors/product/converters';
export class OccProductAdapter {
    /**
     * @param {?} http
     * @param {?} occEndpoints
     * @param {?} converter
     */
    constructor(http, occEndpoints, converter) {
        this.http = http;
        this.occEndpoints = occEndpoints;
        this.converter = converter;
    }
    /**
     * @param {?} productCode
     * @return {?}
     */
    load(productCode) {
        return this.http
            .get(this.getEndpoint(productCode))
            .pipe(this.converter.pipeable(PRODUCT_NORMALIZER));
    }
    /**
     * @protected
     * @param {?} code
     * @return {?}
     */
    getEndpoint(code) {
        return this.occEndpoints.getUrl('product', {
            productCode: code,
        });
    }
}
OccProductAdapter.decorators = [
    { type: Injectable }
];
/** @nocollapse */
OccProductAdapter.ctorParameters = () => [
    { type: HttpClient },
    { type: OccEndpointsService },
    { type: ConverterService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    OccProductAdapter.prototype.http;
    /**
     * @type {?}
     * @private
     */
    OccProductAdapter.prototype.occEndpoints;
    /**
     * @type {?}
     * @protected
     */
    OccProductAdapter.prototype.converter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXByb2R1Y3QuYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9wcm9kdWN0L29jYy9vY2MtcHJvZHVjdC5hZGFwdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSTNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUd0RSxNQUFNLE9BQU8saUJBQWlCOzs7Ozs7SUFDNUIsWUFDVSxJQUFnQixFQUNoQixZQUFpQyxFQUMvQixTQUEyQjtRQUY3QixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLGlCQUFZLEdBQVosWUFBWSxDQUFxQjtRQUMvQixjQUFTLEdBQVQsU0FBUyxDQUFrQjtJQUNwQyxDQUFDOzs7OztJQUVKLElBQUksQ0FBQyxXQUFtQjtRQUN0QixPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztJQUN2RCxDQUFDOzs7Ozs7SUFFUyxXQUFXLENBQUMsSUFBWTtRQUNoQyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRTtZQUN6QyxXQUFXLEVBQUUsSUFBSTtTQUNsQixDQUFDLENBQUM7SUFDTCxDQUFDOzs7WUFsQkYsVUFBVTs7OztZQUxGLFVBQVU7WUFDVixtQkFBbUI7WUFDbkIsZ0JBQWdCOzs7Ozs7O0lBTXJCLGlDQUF3Qjs7Ozs7SUFDeEIseUNBQXlDOzs7OztJQUN6QyxzQ0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcm9kdWN0QWRhcHRlciB9IGZyb20gJy4uL2Nvbm5lY3RvcnMvcHJvZHVjdC9wcm9kdWN0LmFkYXB0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gJy4uLy4uL29jYy9vY2MtbW9kZWxzL29jYy5tb2RlbHMnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9jY0VuZHBvaW50c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9vY2Mvc2VydmljZXMvb2NjLWVuZHBvaW50cy5zZXJ2aWNlJztcbmltcG9ydCB7IENvbnZlcnRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi91dGlsL2NvbnZlcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7IFBST0RVQ1RfTk9STUFMSVpFUiB9IGZyb20gJy4uL2Nvbm5lY3RvcnMvcHJvZHVjdC9jb252ZXJ0ZXJzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE9jY1Byb2R1Y3RBZGFwdGVyIGltcGxlbWVudHMgUHJvZHVjdEFkYXB0ZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgcHJpdmF0ZSBvY2NFbmRwb2ludHM6IE9jY0VuZHBvaW50c1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNvbnZlcnRlcjogQ29udmVydGVyU2VydmljZVxuICApIHt9XG5cbiAgbG9hZChwcm9kdWN0Q29kZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxQcm9kdWN0PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldCh0aGlzLmdldEVuZHBvaW50KHByb2R1Y3RDb2RlKSlcbiAgICAgIC5waXBlKHRoaXMuY29udmVydGVyLnBpcGVhYmxlKFBST0RVQ1RfTk9STUFMSVpFUikpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldEVuZHBvaW50KGNvZGU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMub2NjRW5kcG9pbnRzLmdldFVybCgncHJvZHVjdCcsIHtcbiAgICAgIHByb2R1Y3RDb2RlOiBjb2RlLFxuICAgIH0pO1xuICB9XG59XG4iXX0=
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { map, shareReplay } from 'rxjs/operators';
import { extractFields } from '../utils/occ-fields';
import { OccFieldsService, } from './occ-fields.service';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./occ-fields.service";
var OccRequestsOptimizerService = /** @class */ (function () {
    function OccRequestsOptimizerService(http, occFields) {
        this.http = http;
        this.occFields = occFields;
    }
    /**
     * Optimize occ endpoint calls merging requests to the same url by merging field parameters
     *
     * @param scopedDataWithUrls
     * @param dataFactory
     */
    /**
     * Optimize occ endpoint calls merging requests to the same url by merging field parameters
     *
     * @template T
     * @param {?} scopedDataWithUrls
     * @param {?=} dataFactory
     * @return {?}
     */
    OccRequestsOptimizerService.prototype.scopedDataLoad = /**
     * Optimize occ endpoint calls merging requests to the same url by merging field parameters
     *
     * @template T
     * @param {?} scopedDataWithUrls
     * @param {?=} dataFactory
     * @return {?}
     */
    function (scopedDataWithUrls, dataFactory) {
        var _this = this;
        /** @type {?} */
        var result = [];
        if (!dataFactory) {
            dataFactory = (/**
             * @param {?} url
             * @return {?}
             */
            function (url) { return _this.http.get(url); });
        }
        /** @type {?} */
        var mergedUrls = this.occFields.getOptimalUrlGroups(scopedDataWithUrls);
        Object.entries(mergedUrls).forEach((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), url = _b[0], groupedModelsSet = _b[1];
            /** @type {?} */
            var groupedModels = Object.values(groupedModelsSet);
            if (groupedModels.length === 1) {
                // only one scope for url, we can pass the data straightaway
                result.push(tslib_1.__assign({}, groupedModels[0].scopedData, { data$: dataFactory(url) }));
            }
            else {
                // multiple scopes per url
                // we have to split the model per each scope
                /** @type {?} */
                var data$_1 = dataFactory(url).pipe(shareReplay(1), 
                // TODO deprecated since 1.4, remove
                map((/**
                 * @param {?} data
                 * @return {?}
                 */
                function (data) { return JSON.parse(JSON.stringify(data)); })));
                groupedModels.forEach((/**
                 * @param {?} modelData
                 * @return {?}
                 */
                function (modelData) {
                    result.push(tslib_1.__assign({}, modelData.scopedData, { data$: data$_1.pipe(map((/**
                         * @param {?} data
                         * @return {?}
                         */
                        function (data) { return extractFields(data, modelData.fields); }))) }));
                }));
            }
        }));
        return result;
    };
    OccRequestsOptimizerService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    OccRequestsOptimizerService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: OccFieldsService }
    ]; };
    /** @nocollapse */ OccRequestsOptimizerService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function OccRequestsOptimizerService_Factory() { return new OccRequestsOptimizerService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.OccFieldsService)); }, token: OccRequestsOptimizerService, providedIn: "root" });
    return OccRequestsOptimizerService;
}());
export { OccRequestsOptimizerService };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    OccRequestsOptimizerService.prototype.http;
    /**
     * @type {?}
     * @protected
     */
    OccRequestsOptimizerService.prototype.occFields;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXJlcXVlc3RzLW9wdGltaXplci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL29jYy9zZXJ2aWNlcy9vY2MtcmVxdWVzdHMtb3B0aW1pemVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSxHQUFHLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3BELE9BQU8sRUFFTCxnQkFBZ0IsR0FFakIsTUFBTSxzQkFBc0IsQ0FBQztBQUM5QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7Ozs7QUFFbEQ7SUFJRSxxQ0FDWSxJQUFnQixFQUNoQixTQUEyQjtRQUQzQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLGNBQVMsR0FBVCxTQUFTLENBQWtCO0lBQ3BDLENBQUM7SUFFSjs7Ozs7T0FLRzs7Ozs7Ozs7O0lBQ0gsb0RBQWM7Ozs7Ozs7O0lBQWQsVUFDRSxrQkFBdUMsRUFDdkMsV0FBNEM7UUFGOUMsaUJBaURDOztZQTdDTyxNQUFNLEdBQUcsRUFBRTtRQUVqQixJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ2hCLFdBQVc7Ozs7WUFBRyxVQUFBLEdBQUcsSUFBSSxPQUFBLEtBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFNLEdBQUcsQ0FBQyxFQUF2QixDQUF1QixDQUFBLENBQUM7U0FDOUM7O1lBRUssVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsbUJBQW1CLENBQUMsa0JBQWtCLENBQUM7UUFFekUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPOzs7O1FBQ2hDLFVBQUMsRUFLQTtnQkFMQSwwQkFLQSxFQUxDLFdBQUcsRUFBRSx3QkFBZ0I7O2dCQU1mLGFBQWEsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDO1lBRXJELElBQUksYUFBYSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7Z0JBQzlCLDREQUE0RDtnQkFDNUQsTUFBTSxDQUFDLElBQUksc0JBQ04sYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsSUFDOUIsS0FBSyxFQUFFLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFDdkIsQ0FBQzthQUNKO2lCQUFNOzs7O29CQUdDLE9BQUssR0FBRyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUNqQyxXQUFXLENBQUMsQ0FBQyxDQUFDO2dCQUNkLG9DQUFvQztnQkFDcEMsR0FBRzs7OztnQkFBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFoQyxDQUFnQyxFQUFDLENBQzlDO2dCQUVELGFBQWEsQ0FBQyxPQUFPOzs7O2dCQUFDLFVBQUEsU0FBUztvQkFDN0IsTUFBTSxDQUFDLElBQUksc0JBQ04sU0FBUyxDQUFDLFVBQVUsSUFDdkIsS0FBSyxFQUFFLE9BQUssQ0FBQyxJQUFJLENBQ2YsR0FBRzs7Ozt3QkFBQyxVQUFBLElBQUksSUFBSSxPQUFBLGFBQWEsQ0FBSSxJQUFJLEVBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUF4QyxDQUF3QyxFQUFDLENBQ3RELElBQ0QsQ0FBQztnQkFDTCxDQUFDLEVBQUMsQ0FBQzthQUNKO1FBQ0gsQ0FBQyxFQUNGLENBQUM7UUFFRixPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOztnQkFoRUYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFKUSxVQUFVO2dCQUhqQixnQkFBZ0I7OztzQ0FQbEI7Q0E2RUMsQUFqRUQsSUFpRUM7U0E5RFksMkJBQTJCOzs7Ozs7SUFFcEMsMkNBQTBCOzs7OztJQUMxQixnREFBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTY29wZWREYXRhIH0gZnJvbSAnLi4vLi4vbW9kZWwvc2NvcGVkLWRhdGEnO1xuaW1wb3J0IHsgbWFwLCBzaGFyZVJlcGxheSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IGV4dHJhY3RGaWVsZHMgfSBmcm9tICcuLi91dGlscy9vY2MtZmllbGRzJztcbmltcG9ydCB7XG4gIE9jY0ZpZWxkc01vZGVsLFxuICBPY2NGaWVsZHNTZXJ2aWNlLFxuICBTY29wZWREYXRhV2l0aFVybCxcbn0gZnJvbSAnLi9vY2MtZmllbGRzLnNlcnZpY2UnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIE9jY1JlcXVlc3RzT3B0aW1pemVyU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByb3RlY3RlZCBvY2NGaWVsZHM6IE9jY0ZpZWxkc1NlcnZpY2VcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBPcHRpbWl6ZSBvY2MgZW5kcG9pbnQgY2FsbHMgbWVyZ2luZyByZXF1ZXN0cyB0byB0aGUgc2FtZSB1cmwgYnkgbWVyZ2luZyBmaWVsZCBwYXJhbWV0ZXJzXG4gICAqXG4gICAqIEBwYXJhbSBzY29wZWREYXRhV2l0aFVybHNcbiAgICogQHBhcmFtIGRhdGFGYWN0b3J5XG4gICAqL1xuICBzY29wZWREYXRhTG9hZDxUPihcbiAgICBzY29wZWREYXRhV2l0aFVybHM6IFNjb3BlZERhdGFXaXRoVXJsW10sXG4gICAgZGF0YUZhY3Rvcnk/OiAodXJsOiBzdHJpbmcpID0+IE9ic2VydmFibGU8VD5cbiAgKTogU2NvcGVkRGF0YTxUPltdIHtcbiAgICBjb25zdCByZXN1bHQgPSBbXTtcblxuICAgIGlmICghZGF0YUZhY3RvcnkpIHtcbiAgICAgIGRhdGFGYWN0b3J5ID0gdXJsID0+IHRoaXMuaHR0cC5nZXQ8YW55Pih1cmwpO1xuICAgIH1cblxuICAgIGNvbnN0IG1lcmdlZFVybHMgPSB0aGlzLm9jY0ZpZWxkcy5nZXRPcHRpbWFsVXJsR3JvdXBzKHNjb3BlZERhdGFXaXRoVXJscyk7XG5cbiAgICBPYmplY3QuZW50cmllcyhtZXJnZWRVcmxzKS5mb3JFYWNoKFxuICAgICAgKFt1cmwsIGdyb3VwZWRNb2RlbHNTZXRdOiBbXG4gICAgICAgIHN0cmluZyxcbiAgICAgICAge1xuICAgICAgICAgIFtzY29wZTogc3RyaW5nXTogT2NjRmllbGRzTW9kZWw7XG4gICAgICAgIH1cbiAgICAgIF0pID0+IHtcbiAgICAgICAgY29uc3QgZ3JvdXBlZE1vZGVscyA9IE9iamVjdC52YWx1ZXMoZ3JvdXBlZE1vZGVsc1NldCk7XG5cbiAgICAgICAgaWYgKGdyb3VwZWRNb2RlbHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgLy8gb25seSBvbmUgc2NvcGUgZm9yIHVybCwgd2UgY2FuIHBhc3MgdGhlIGRhdGEgc3RyYWlnaHRhd2F5XG4gICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgLi4uZ3JvdXBlZE1vZGVsc1swXS5zY29wZWREYXRhLFxuICAgICAgICAgICAgZGF0YSQ6IGRhdGFGYWN0b3J5KHVybCksXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gbXVsdGlwbGUgc2NvcGVzIHBlciB1cmxcbiAgICAgICAgICAvLyB3ZSBoYXZlIHRvIHNwbGl0IHRoZSBtb2RlbCBwZXIgZWFjaCBzY29wZVxuICAgICAgICAgIGNvbnN0IGRhdGEkID0gZGF0YUZhY3RvcnkodXJsKS5waXBlKFxuICAgICAgICAgICAgc2hhcmVSZXBsYXkoMSksXG4gICAgICAgICAgICAvLyBUT0RPIGRlcHJlY2F0ZWQgc2luY2UgMS40LCByZW1vdmVcbiAgICAgICAgICAgIG1hcChkYXRhID0+IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZGF0YSkpKVxuICAgICAgICAgICk7XG5cbiAgICAgICAgICBncm91cGVkTW9kZWxzLmZvckVhY2gobW9kZWxEYXRhID0+IHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgLi4ubW9kZWxEYXRhLnNjb3BlZERhdGEsXG4gICAgICAgICAgICAgIGRhdGEkOiBkYXRhJC5waXBlKFxuICAgICAgICAgICAgICAgIG1hcChkYXRhID0+IGV4dHJhY3RGaWVsZHM8VD4oZGF0YSwgbW9kZWxEYXRhLmZpZWxkcykpXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG4iXX0=
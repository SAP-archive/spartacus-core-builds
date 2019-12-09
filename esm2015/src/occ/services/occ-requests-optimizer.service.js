/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { map, shareReplay } from 'rxjs/operators';
import { extractFields } from '../utils/occ-fields';
import { OccFieldsService, } from './occ-fields.service';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./occ-fields.service";
export class OccRequestsOptimizerService {
    /**
     * @param {?} http
     * @param {?} occFields
     */
    constructor(http, occFields) {
        this.http = http;
        this.occFields = occFields;
    }
    /**
     * Optimize occ endpoint calls merging requests to the same url by merging field parameters
     *
     * @template T
     * @param {?} scopedDataWithUrls
     * @param {?=} dataFactory
     * @return {?}
     */
    scopedDataLoad(scopedDataWithUrls, dataFactory) {
        /** @type {?} */
        const result = [];
        if (!dataFactory) {
            dataFactory = (/**
             * @param {?} url
             * @return {?}
             */
            url => this.http.get(url));
        }
        /** @type {?} */
        const mergedUrls = this.occFields.getOptimalUrlGroups(scopedDataWithUrls);
        Object.entries(mergedUrls).forEach((/**
         * @param {?} __0
         * @return {?}
         */
        ([url, groupedModelsSet]) => {
            /** @type {?} */
            const groupedModels = Object.values(groupedModelsSet);
            if (groupedModels.length === 1) {
                // only one scope for url, we can pass the data straightaway
                result.push(Object.assign({}, groupedModels[0].scopedData, { data$: dataFactory(url) }));
            }
            else {
                // multiple scopes per url
                // we have to split the model per each scope
                /** @type {?} */
                const data$ = dataFactory(url).pipe(shareReplay(1), 
                // TODO deprecated since 1.4, remove
                map((/**
                 * @param {?} data
                 * @return {?}
                 */
                data => JSON.parse(JSON.stringify(data)))));
                groupedModels.forEach((/**
                 * @param {?} modelData
                 * @return {?}
                 */
                modelData => {
                    result.push(Object.assign({}, modelData.scopedData, { data$: data$.pipe(map((/**
                         * @param {?} data
                         * @return {?}
                         */
                        data => extractFields(data, modelData.fields)))) }));
                }));
            }
        }));
        return result;
    }
}
OccRequestsOptimizerService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
OccRequestsOptimizerService.ctorParameters = () => [
    { type: HttpClient },
    { type: OccFieldsService }
];
/** @nocollapse */ OccRequestsOptimizerService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function OccRequestsOptimizerService_Factory() { return new OccRequestsOptimizerService(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.OccFieldsService)); }, token: OccRequestsOptimizerService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXJlcXVlc3RzLW9wdGltaXplci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL29jYy9zZXJ2aWNlcy9vY2MtcmVxdWVzdHMtb3B0aW1pemVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDcEQsT0FBTyxFQUVMLGdCQUFnQixHQUVqQixNQUFNLHNCQUFzQixDQUFDO0FBQzlCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7OztBQUtsRCxNQUFNLE9BQU8sMkJBQTJCOzs7OztJQUN0QyxZQUNZLElBQWdCLEVBQ2hCLFNBQTJCO1FBRDNCLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsY0FBUyxHQUFULFNBQVMsQ0FBa0I7SUFDcEMsQ0FBQzs7Ozs7Ozs7O0lBUUosY0FBYyxDQUNaLGtCQUF1QyxFQUN2QyxXQUE0Qzs7Y0FFdEMsTUFBTSxHQUFHLEVBQUU7UUFFakIsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNoQixXQUFXOzs7O1lBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBTSxHQUFHLENBQUMsQ0FBQSxDQUFDO1NBQzlDOztjQUVLLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFtQixDQUFDLGtCQUFrQixDQUFDO1FBRXpFLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTzs7OztRQUNoQyxDQUFDLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUt0QixFQUFFLEVBQUU7O2tCQUNHLGFBQWEsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDO1lBRXJELElBQUksYUFBYSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7Z0JBQzlCLDREQUE0RDtnQkFDNUQsTUFBTSxDQUFDLElBQUksbUJBQ04sYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsSUFDOUIsS0FBSyxFQUFFLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFDdkIsQ0FBQzthQUNKO2lCQUFNOzs7O3NCQUdDLEtBQUssR0FBRyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUNqQyxXQUFXLENBQUMsQ0FBQyxDQUFDO2dCQUNkLG9DQUFvQztnQkFDcEMsR0FBRzs7OztnQkFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFDLENBQzlDO2dCQUVELGFBQWEsQ0FBQyxPQUFPOzs7O2dCQUFDLFNBQVMsQ0FBQyxFQUFFO29CQUNoQyxNQUFNLENBQUMsSUFBSSxtQkFDTixTQUFTLENBQUMsVUFBVSxJQUN2QixLQUFLLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FDZixHQUFHOzs7O3dCQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFJLElBQUksRUFBRSxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUMsQ0FDdEQsSUFDRCxDQUFDO2dCQUNMLENBQUMsRUFBQyxDQUFDO2FBQ0o7UUFDSCxDQUFDLEVBQ0YsQ0FBQztRQUVGLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7OztZQWhFRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFKUSxVQUFVO1lBSGpCLGdCQUFnQjs7Ozs7Ozs7SUFVZCwyQ0FBMEI7Ozs7O0lBQzFCLGdEQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFNjb3BlZERhdGEgfSBmcm9tICcuLi8uLi9tb2RlbC9zY29wZWQtZGF0YSc7XG5pbXBvcnQgeyBtYXAsIHNoYXJlUmVwbGF5IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgZXh0cmFjdEZpZWxkcyB9IGZyb20gJy4uL3V0aWxzL29jYy1maWVsZHMnO1xuaW1wb3J0IHtcbiAgT2NjRmllbGRzTW9kZWwsXG4gIE9jY0ZpZWxkc1NlcnZpY2UsXG4gIFNjb3BlZERhdGFXaXRoVXJsLFxufSBmcm9tICcuL29jYy1maWVsZHMuc2VydmljZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgT2NjUmVxdWVzdHNPcHRpbWl6ZXJTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgcHJvdGVjdGVkIG9jY0ZpZWxkczogT2NjRmllbGRzU2VydmljZVxuICApIHt9XG5cbiAgLyoqXG4gICAqIE9wdGltaXplIG9jYyBlbmRwb2ludCBjYWxscyBtZXJnaW5nIHJlcXVlc3RzIHRvIHRoZSBzYW1lIHVybCBieSBtZXJnaW5nIGZpZWxkIHBhcmFtZXRlcnNcbiAgICpcbiAgICogQHBhcmFtIHNjb3BlZERhdGFXaXRoVXJsc1xuICAgKiBAcGFyYW0gZGF0YUZhY3RvcnlcbiAgICovXG4gIHNjb3BlZERhdGFMb2FkPFQ+KFxuICAgIHNjb3BlZERhdGFXaXRoVXJsczogU2NvcGVkRGF0YVdpdGhVcmxbXSxcbiAgICBkYXRhRmFjdG9yeT86ICh1cmw6IHN0cmluZykgPT4gT2JzZXJ2YWJsZTxUPlxuICApOiBTY29wZWREYXRhPFQ+W10ge1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuXG4gICAgaWYgKCFkYXRhRmFjdG9yeSkge1xuICAgICAgZGF0YUZhY3RvcnkgPSB1cmwgPT4gdGhpcy5odHRwLmdldDxhbnk+KHVybCk7XG4gICAgfVxuXG4gICAgY29uc3QgbWVyZ2VkVXJscyA9IHRoaXMub2NjRmllbGRzLmdldE9wdGltYWxVcmxHcm91cHMoc2NvcGVkRGF0YVdpdGhVcmxzKTtcblxuICAgIE9iamVjdC5lbnRyaWVzKG1lcmdlZFVybHMpLmZvckVhY2goXG4gICAgICAoW3VybCwgZ3JvdXBlZE1vZGVsc1NldF06IFtcbiAgICAgICAgc3RyaW5nLFxuICAgICAgICB7XG4gICAgICAgICAgW3Njb3BlOiBzdHJpbmddOiBPY2NGaWVsZHNNb2RlbDtcbiAgICAgICAgfVxuICAgICAgXSkgPT4ge1xuICAgICAgICBjb25zdCBncm91cGVkTW9kZWxzID0gT2JqZWN0LnZhbHVlcyhncm91cGVkTW9kZWxzU2V0KTtcblxuICAgICAgICBpZiAoZ3JvdXBlZE1vZGVscy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAvLyBvbmx5IG9uZSBzY29wZSBmb3IgdXJsLCB3ZSBjYW4gcGFzcyB0aGUgZGF0YSBzdHJhaWdodGF3YXlcbiAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAuLi5ncm91cGVkTW9kZWxzWzBdLnNjb3BlZERhdGEsXG4gICAgICAgICAgICBkYXRhJDogZGF0YUZhY3RvcnkodXJsKSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBtdWx0aXBsZSBzY29wZXMgcGVyIHVybFxuICAgICAgICAgIC8vIHdlIGhhdmUgdG8gc3BsaXQgdGhlIG1vZGVsIHBlciBlYWNoIHNjb3BlXG4gICAgICAgICAgY29uc3QgZGF0YSQgPSBkYXRhRmFjdG9yeSh1cmwpLnBpcGUoXG4gICAgICAgICAgICBzaGFyZVJlcGxheSgxKSxcbiAgICAgICAgICAgIC8vIFRPRE8gZGVwcmVjYXRlZCBzaW5jZSAxLjQsIHJlbW92ZVxuICAgICAgICAgICAgbWFwKGRhdGEgPT4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShkYXRhKSkpXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIGdyb3VwZWRNb2RlbHMuZm9yRWFjaChtb2RlbERhdGEgPT4ge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAuLi5tb2RlbERhdGEuc2NvcGVkRGF0YSxcbiAgICAgICAgICAgICAgZGF0YSQ6IGRhdGEkLnBpcGUoXG4gICAgICAgICAgICAgICAgbWFwKGRhdGEgPT4gZXh0cmFjdEZpZWxkczxUPihkYXRhLCBtb2RlbERhdGEuZmllbGRzKSlcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgKTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cbiJdfQ==
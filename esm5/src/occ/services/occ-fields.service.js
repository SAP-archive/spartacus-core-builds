/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { mergeFields, parseFields } from '../utils/occ-fields';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
/**
 * @record
 */
export function ScopedDataWithUrl() { }
if (false) {
    /**
     * Url (with fields) to load scoped data
     * @type {?|undefined}
     */
    ScopedDataWithUrl.prototype.url;
    /**
     * scoped data model
     * @type {?}
     */
    ScopedDataWithUrl.prototype.scopedData;
}
/**
 * Intermediate model to accommodate all data needed to perform occ fields optimizations
 * wrapping ScopedData with url and fields
 * @record
 */
export function OccFieldsModel() { }
if (false) {
    /**
     * extracted fields object, used to extract data from broader model
     * @type {?|undefined}
     */
    OccFieldsModel.prototype.fields;
}
/**
 * Grouped rest calls with optimal urls
 *
 * One url groups all scopes it covers with related occFieldsModels
 * @record
 */
export function OccOptimimalUrlGroups() { }
/**
 * Helper service for optimizing endpoint calls to occ backend
 */
var OccFieldsService = /** @class */ (function () {
    function OccFieldsService(http) {
        this.http = http;
        this.FIELDS_PARAM = 'fields';
    }
    /**
     * Merge similar occ endpoints calls by merging fields parameter
     *
     * We assume that different scopes are defined by different fields parameters,
     * so we are grouping all requests with the same urls (except fields definition)
     * and merging into one request with fields that will satisfy all separate ones.
     *
     * @param models
     */
    /**
     * Merge similar occ endpoints calls by merging fields parameter
     *
     * We assume that different scopes are defined by different fields parameters,
     * so we are grouping all requests with the same urls (except fields definition)
     * and merging into one request with fields that will satisfy all separate ones.
     *
     * @param {?} models
     * @return {?}
     */
    OccFieldsService.prototype.getOptimalUrlGroups = /**
     * Merge similar occ endpoints calls by merging fields parameter
     *
     * We assume that different scopes are defined by different fields parameters,
     * so we are grouping all requests with the same urls (except fields definition)
     * and merging into one request with fields that will satisfy all separate ones.
     *
     * @param {?} models
     * @return {?}
     */
    function (models) {
        var e_1, _a, e_2, _b;
        /** @type {?} */
        var groupedByUrls = {};
        try {
            for (var _c = tslib_1.__values((/** @type {?} */ (models))), _d = _c.next(); !_d.done; _d = _c.next()) {
                var model = _d.value;
                var _e = tslib_1.__read(this.splitFields(model.url), 2), urlPart = _e[0], fields = _e[1];
                if (!groupedByUrls[urlPart]) {
                    groupedByUrls[urlPart] = {};
                }
                model.fields = fields ? parseFields(fields) : {};
                groupedByUrls[urlPart][model.scopedData.scope] = model;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_1) throw e_1.error; }
        }
        /** @type {?} */
        var mergedUrls = {};
        try {
            for (var _f = tslib_1.__values(Object.entries(groupedByUrls)), _g = _f.next(); !_g.done; _g = _f.next()) {
                var _h = tslib_1.__read(_g.value, 2), url = _h[0], group = _h[1];
                /** @type {?} */
                var urlWithFields = this.getUrlWithFields(url, Object.values(group).map((/**
                 * @param {?} lo
                 * @return {?}
                 */
                function (lo) { return lo.fields; })));
                mergedUrls[urlWithFields] = group;
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_g && !_g.done && (_b = _f.return)) _b.call(_f);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return mergedUrls;
    };
    /**
     * Extract fields parameter from occ endpoint url
     *
     * @param urlWithFields
     */
    /**
     * Extract fields parameter from occ endpoint url
     *
     * @private
     * @param {?} urlWithFields
     * @return {?}
     */
    OccFieldsService.prototype.splitFields = /**
     * Extract fields parameter from occ endpoint url
     *
     * @private
     * @param {?} urlWithFields
     * @return {?}
     */
    function (urlWithFields) {
        var _this = this;
        var _a = tslib_1.__read(urlWithFields.split('?'), 2), url = _a[0], params = _a[1];
        /** @type {?} */
        var paramsMap = {};
        if (params) {
            params.split('&').map((/**
             * @param {?} param
             * @return {?}
             */
            function (param) {
                /** @type {?} */
                var keyValue = param.split('=');
                paramsMap[keyValue[0]] = keyValue[1];
            }));
        }
        /** @type {?} */
        var nonFieldsParams = Object.keys(paramsMap)
            .sort()
            .reduce((/**
         * @param {?} id
         * @param {?} par
         * @return {?}
         */
        function (id, par) {
            if (par !== _this.FIELDS_PARAM) {
                id.push(paramsMap[par] ? par + "=" + paramsMap[par] : par);
            }
            return id;
        }), []);
        /** @type {?} */
        var nonFields = nonFieldsParams.join('&');
        return [
            nonFields ? url + "?" + nonFields : url,
            paramsMap[this.FIELDS_PARAM],
        ];
    };
    /**
     * Combine url with field parameters
     *
     * @param url
     * @param fields
     */
    /**
     * Combine url with field parameters
     *
     * @private
     * @param {?} url
     * @param {?} fields
     * @return {?}
     */
    OccFieldsService.prototype.getUrlWithFields = /**
     * Combine url with field parameters
     *
     * @private
     * @param {?} url
     * @param {?} fields
     * @return {?}
     */
    function (url, fields) {
        /** @type {?} */
        var mergedFields = mergeFields(fields);
        if (mergedFields) {
            url += url.includes('?') ? '&' : '?';
            url += this.FIELDS_PARAM + "=" + mergedFields;
        }
        return url;
    };
    OccFieldsService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    OccFieldsService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    /** @nocollapse */ OccFieldsService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function OccFieldsService_Factory() { return new OccFieldsService(i0.ɵɵinject(i1.HttpClient)); }, token: OccFieldsService, providedIn: "root" });
    return OccFieldsService;
}());
export { OccFieldsService };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    OccFieldsService.prototype.FIELDS_PARAM;
    /**
     * @type {?}
     * @protected
     */
    OccFieldsService.prototype.http;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWZpZWxkcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL29jYy9zZXJ2aWNlcy9vY2MtZmllbGRzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFL0QsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7Ozs7QUFFbEQsdUNBS0M7Ozs7OztJQUhDLGdDQUFhOzs7OztJQUViLHVDQUE0Qjs7Ozs7OztBQU85QixvQ0FHQzs7Ozs7O0lBREMsZ0NBQWdCOzs7Ozs7OztBQVFsQiwyQ0FJQzs7OztBQUtEO0lBSUUsMEJBQXNCLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFFNUIsaUJBQVksR0FBRyxRQUFRLENBQUM7SUFGTyxDQUFDO0lBSTFDOzs7Ozs7OztPQVFHOzs7Ozs7Ozs7OztJQUNILDhDQUFtQjs7Ozs7Ozs7OztJQUFuQixVQUFvQixNQUEyQjs7O1lBQ3ZDLGFBQWEsR0FBMEIsRUFBRTs7WUFDL0MsK0JBQW9CLG1CQUFBLE1BQU0sRUFBb0IsNkNBQUU7Z0JBQTNDLElBQU0sS0FBSyxXQUFBO2dCQUNSLElBQUEsbURBQStDLEVBQTlDLGVBQU8sRUFBRSxjQUFxQztnQkFDckQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsRUFBRTtvQkFDM0IsYUFBYSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQztpQkFDN0I7Z0JBQ0QsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO2dCQUNqRCxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUM7YUFDeEQ7Ozs7Ozs7Ozs7WUFFSyxVQUFVLEdBQTBCLEVBQUU7O1lBQzVDLEtBQTJCLElBQUEsS0FBQSxpQkFBQSxNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFBLGdCQUFBLDRCQUFFO2dCQUEvQyxJQUFBLGdDQUFZLEVBQVgsV0FBRyxFQUFFLGFBQUs7O29CQUNkLGFBQWEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQ3pDLEdBQUcsRUFDSCxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUc7Ozs7Z0JBQUMsVUFBQSxFQUFFLElBQUksT0FBQSxFQUFFLENBQUMsTUFBTSxFQUFULENBQVMsRUFBQyxDQUMxQztnQkFDRCxVQUFVLENBQUMsYUFBYSxDQUFDLEdBQUcsS0FBSyxDQUFDO2FBQ25DOzs7Ozs7Ozs7UUFFRCxPQUFPLFVBQVUsQ0FBQztJQUNwQixDQUFDO0lBRUQ7Ozs7T0FJRzs7Ozs7Ozs7SUFDSyxzQ0FBVzs7Ozs7OztJQUFuQixVQUFvQixhQUFxQjtRQUF6QyxpQkEyQkM7UUExQk8sSUFBQSxnREFBd0MsRUFBdkMsV0FBRyxFQUFFLGNBQWtDOztZQUV4QyxTQUFTLEdBQUcsRUFBRTtRQUVwQixJQUFJLE1BQU0sRUFBRTtZQUNWLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRzs7OztZQUFDLFVBQUEsS0FBSzs7b0JBQ25CLFFBQVEsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztnQkFDakMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2QyxDQUFDLEVBQUMsQ0FBQztTQUNKOztZQUVLLGVBQWUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQzthQUMzQyxJQUFJLEVBQUU7YUFDTixNQUFNOzs7OztRQUFDLFVBQUMsRUFBRSxFQUFFLEdBQUc7WUFDZCxJQUFJLEdBQUcsS0FBSyxLQUFJLENBQUMsWUFBWSxFQUFFO2dCQUM3QixFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUksR0FBRyxTQUFJLFNBQVMsQ0FBQyxHQUFHLENBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDNUQ7WUFDRCxPQUFPLEVBQUUsQ0FBQztRQUNaLENBQUMsR0FBRSxFQUFFLENBQUM7O1lBRUYsU0FBUyxHQUFHLGVBQWUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBRTNDLE9BQU87WUFDTCxTQUFTLENBQUMsQ0FBQyxDQUFJLEdBQUcsU0FBSSxTQUFXLENBQUMsQ0FBQyxDQUFDLEdBQUc7WUFDdkMsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7U0FDN0IsQ0FBQztJQUNKLENBQUM7SUFFRDs7Ozs7T0FLRzs7Ozs7Ozs7O0lBQ0ssMkNBQWdCOzs7Ozs7OztJQUF4QixVQUF5QixHQUFXLEVBQUUsTUFBMkI7O1lBQ3pELFlBQVksR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDO1FBRXhDLElBQUksWUFBWSxFQUFFO1lBQ2hCLEdBQUcsSUFBSSxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztZQUNyQyxHQUFHLElBQU8sSUFBSSxDQUFDLFlBQVksU0FBSSxZQUFjLENBQUM7U0FDL0M7UUFFRCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7O2dCQXpGRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQWxDUSxVQUFVOzs7MkJBSG5CO0NBNkhDLEFBMUZELElBMEZDO1NBdkZZLGdCQUFnQjs7Ozs7O0lBRzNCLHdDQUFrQzs7Ozs7SUFGdEIsZ0NBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgbWVyZ2VGaWVsZHMsIHBhcnNlRmllbGRzIH0gZnJvbSAnLi4vdXRpbHMvb2NjLWZpZWxkcyc7XG5pbXBvcnQgeyBTY29wZWREYXRhIH0gZnJvbSAnLi4vLi4vbW9kZWwvc2NvcGVkLWRhdGEnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuZXhwb3J0IGludGVyZmFjZSBTY29wZWREYXRhV2l0aFVybCB7XG4gIC8qKiBVcmwgKHdpdGggZmllbGRzKSB0byBsb2FkIHNjb3BlZCBkYXRhICovXG4gIHVybD86IHN0cmluZztcbiAgLyoqIHNjb3BlZCBkYXRhIG1vZGVsICovXG4gIHNjb3BlZERhdGE6IFNjb3BlZERhdGE8YW55Pjtcbn1cblxuLyoqXG4gKiBJbnRlcm1lZGlhdGUgbW9kZWwgdG8gYWNjb21tb2RhdGUgYWxsIGRhdGEgbmVlZGVkIHRvIHBlcmZvcm0gb2NjIGZpZWxkcyBvcHRpbWl6YXRpb25zXG4gKiB3cmFwcGluZyBTY29wZWREYXRhIHdpdGggdXJsIGFuZCBmaWVsZHNcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBPY2NGaWVsZHNNb2RlbCBleHRlbmRzIFNjb3BlZERhdGFXaXRoVXJsIHtcbiAgLyoqIGV4dHJhY3RlZCBmaWVsZHMgb2JqZWN0LCB1c2VkIHRvIGV4dHJhY3QgZGF0YSBmcm9tIGJyb2FkZXIgbW9kZWwgKi9cbiAgZmllbGRzPzogb2JqZWN0O1xufVxuXG4vKipcbiAqIEdyb3VwZWQgcmVzdCBjYWxscyB3aXRoIG9wdGltYWwgdXJsc1xuICpcbiAqIE9uZSB1cmwgZ3JvdXBzIGFsbCBzY29wZXMgaXQgY292ZXJzIHdpdGggcmVsYXRlZCBvY2NGaWVsZHNNb2RlbHNcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBPY2NPcHRpbWltYWxVcmxHcm91cHMge1xuICBbb3B0aW1hbFVybDogc3RyaW5nXToge1xuICAgIFtzY29wZTogc3RyaW5nXTogT2NjRmllbGRzTW9kZWw7XG4gIH07XG59XG5cbi8qKlxuICogSGVscGVyIHNlcnZpY2UgZm9yIG9wdGltaXppbmcgZW5kcG9pbnQgY2FsbHMgdG8gb2NjIGJhY2tlbmRcbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIE9jY0ZpZWxkc1NlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgaHR0cDogSHR0cENsaWVudCkge31cblxuICBwcm90ZWN0ZWQgRklFTERTX1BBUkFNID0gJ2ZpZWxkcyc7XG5cbiAgLyoqXG4gICAqIE1lcmdlIHNpbWlsYXIgb2NjIGVuZHBvaW50cyBjYWxscyBieSBtZXJnaW5nIGZpZWxkcyBwYXJhbWV0ZXJcbiAgICpcbiAgICogV2UgYXNzdW1lIHRoYXQgZGlmZmVyZW50IHNjb3BlcyBhcmUgZGVmaW5lZCBieSBkaWZmZXJlbnQgZmllbGRzIHBhcmFtZXRlcnMsXG4gICAqIHNvIHdlIGFyZSBncm91cGluZyBhbGwgcmVxdWVzdHMgd2l0aCB0aGUgc2FtZSB1cmxzIChleGNlcHQgZmllbGRzIGRlZmluaXRpb24pXG4gICAqIGFuZCBtZXJnaW5nIGludG8gb25lIHJlcXVlc3Qgd2l0aCBmaWVsZHMgdGhhdCB3aWxsIHNhdGlzZnkgYWxsIHNlcGFyYXRlIG9uZXMuXG4gICAqXG4gICAqIEBwYXJhbSBtb2RlbHNcbiAgICovXG4gIGdldE9wdGltYWxVcmxHcm91cHMobW9kZWxzOiBTY29wZWREYXRhV2l0aFVybFtdKTogT2NjT3B0aW1pbWFsVXJsR3JvdXBzIHtcbiAgICBjb25zdCBncm91cGVkQnlVcmxzOiBPY2NPcHRpbWltYWxVcmxHcm91cHMgPSB7fTtcbiAgICBmb3IgKGNvbnN0IG1vZGVsIG9mIG1vZGVscyBhcyBPY2NGaWVsZHNNb2RlbFtdKSB7XG4gICAgICBjb25zdCBbdXJsUGFydCwgZmllbGRzXSA9IHRoaXMuc3BsaXRGaWVsZHMobW9kZWwudXJsKTtcbiAgICAgIGlmICghZ3JvdXBlZEJ5VXJsc1t1cmxQYXJ0XSkge1xuICAgICAgICBncm91cGVkQnlVcmxzW3VybFBhcnRdID0ge307XG4gICAgICB9XG4gICAgICBtb2RlbC5maWVsZHMgPSBmaWVsZHMgPyBwYXJzZUZpZWxkcyhmaWVsZHMpIDoge307XG4gICAgICBncm91cGVkQnlVcmxzW3VybFBhcnRdW21vZGVsLnNjb3BlZERhdGEuc2NvcGVdID0gbW9kZWw7XG4gICAgfVxuXG4gICAgY29uc3QgbWVyZ2VkVXJsczogT2NjT3B0aW1pbWFsVXJsR3JvdXBzID0ge307XG4gICAgZm9yIChjb25zdCBbdXJsLCBncm91cF0gb2YgT2JqZWN0LmVudHJpZXMoZ3JvdXBlZEJ5VXJscykpIHtcbiAgICAgIGNvbnN0IHVybFdpdGhGaWVsZHMgPSB0aGlzLmdldFVybFdpdGhGaWVsZHMoXG4gICAgICAgIHVybCxcbiAgICAgICAgT2JqZWN0LnZhbHVlcyhncm91cCkubWFwKGxvID0+IGxvLmZpZWxkcylcbiAgICAgICk7XG4gICAgICBtZXJnZWRVcmxzW3VybFdpdGhGaWVsZHNdID0gZ3JvdXA7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lcmdlZFVybHM7XG4gIH1cblxuICAvKipcbiAgICogRXh0cmFjdCBmaWVsZHMgcGFyYW1ldGVyIGZyb20gb2NjIGVuZHBvaW50IHVybFxuICAgKlxuICAgKiBAcGFyYW0gdXJsV2l0aEZpZWxkc1xuICAgKi9cbiAgcHJpdmF0ZSBzcGxpdEZpZWxkcyh1cmxXaXRoRmllbGRzOiBzdHJpbmcpOiBbc3RyaW5nLCBzdHJpbmddIHtcbiAgICBjb25zdCBbdXJsLCBwYXJhbXNdID0gdXJsV2l0aEZpZWxkcy5zcGxpdCgnPycpO1xuXG4gICAgY29uc3QgcGFyYW1zTWFwID0ge307XG5cbiAgICBpZiAocGFyYW1zKSB7XG4gICAgICBwYXJhbXMuc3BsaXQoJyYnKS5tYXAocGFyYW0gPT4ge1xuICAgICAgICBjb25zdCBrZXlWYWx1ZSA9IHBhcmFtLnNwbGl0KCc9Jyk7XG4gICAgICAgIHBhcmFtc01hcFtrZXlWYWx1ZVswXV0gPSBrZXlWYWx1ZVsxXTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IG5vbkZpZWxkc1BhcmFtcyA9IE9iamVjdC5rZXlzKHBhcmFtc01hcClcbiAgICAgIC5zb3J0KClcbiAgICAgIC5yZWR1Y2UoKGlkLCBwYXIpID0+IHtcbiAgICAgICAgaWYgKHBhciAhPT0gdGhpcy5GSUVMRFNfUEFSQU0pIHtcbiAgICAgICAgICBpZC5wdXNoKHBhcmFtc01hcFtwYXJdID8gYCR7cGFyfT0ke3BhcmFtc01hcFtwYXJdfWAgOiBwYXIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpZDtcbiAgICAgIH0sIFtdKTtcblxuICAgIGNvbnN0IG5vbkZpZWxkcyA9IG5vbkZpZWxkc1BhcmFtcy5qb2luKCcmJyk7XG5cbiAgICByZXR1cm4gW1xuICAgICAgbm9uRmllbGRzID8gYCR7dXJsfT8ke25vbkZpZWxkc31gIDogdXJsLFxuICAgICAgcGFyYW1zTWFwW3RoaXMuRklFTERTX1BBUkFNXSxcbiAgICBdO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbWJpbmUgdXJsIHdpdGggZmllbGQgcGFyYW1ldGVyc1xuICAgKlxuICAgKiBAcGFyYW0gdXJsXG4gICAqIEBwYXJhbSBmaWVsZHNcbiAgICovXG4gIHByaXZhdGUgZ2V0VXJsV2l0aEZpZWxkcyh1cmw6IHN0cmluZywgZmllbGRzOiAoc3RyaW5nIHwgb2JqZWN0KVtdKTogc3RyaW5nIHtcbiAgICBjb25zdCBtZXJnZWRGaWVsZHMgPSBtZXJnZUZpZWxkcyhmaWVsZHMpO1xuXG4gICAgaWYgKG1lcmdlZEZpZWxkcykge1xuICAgICAgdXJsICs9IHVybC5pbmNsdWRlcygnPycpID8gJyYnIDogJz8nO1xuICAgICAgdXJsICs9IGAke3RoaXMuRklFTERTX1BBUkFNfT0ke21lcmdlZEZpZWxkc31gO1xuICAgIH1cblxuICAgIHJldHVybiB1cmw7XG4gIH1cbn1cbiJdfQ==
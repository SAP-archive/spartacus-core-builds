/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class OccFieldsService {
    /**
     * @param {?} http
     */
    constructor(http) {
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
     * @param {?} models
     * @return {?}
     */
    getOptimalUrlGroups(models) {
        /** @type {?} */
        const groupedByUrls = {};
        for (const model of (/** @type {?} */ (models))) {
            const [urlPart, fields] = this.splitFields(model.url);
            if (!groupedByUrls[urlPart]) {
                groupedByUrls[urlPart] = {};
            }
            model.fields = fields ? parseFields(fields) : {};
            groupedByUrls[urlPart][model.scopedData.scope] = model;
        }
        /** @type {?} */
        const mergedUrls = {};
        for (const [url, group] of Object.entries(groupedByUrls)) {
            /** @type {?} */
            const urlWithFields = this.getUrlWithFields(url, Object.values(group).map((/**
             * @param {?} lo
             * @return {?}
             */
            lo => lo.fields)));
            mergedUrls[urlWithFields] = group;
        }
        return mergedUrls;
    }
    /**
     * Extract fields parameter from occ endpoint url
     *
     * @private
     * @param {?} urlWithFields
     * @return {?}
     */
    splitFields(urlWithFields) {
        const [url, params] = urlWithFields.split('?');
        /** @type {?} */
        const paramsMap = {};
        if (params) {
            params.split('&').map((/**
             * @param {?} param
             * @return {?}
             */
            param => {
                /** @type {?} */
                const keyValue = param.split('=');
                paramsMap[keyValue[0]] = keyValue[1];
            }));
        }
        /** @type {?} */
        const nonFieldsParams = Object.keys(paramsMap)
            .sort()
            .reduce((/**
         * @param {?} id
         * @param {?} par
         * @return {?}
         */
        (id, par) => {
            if (par !== this.FIELDS_PARAM) {
                id.push(paramsMap[par] ? `${par}=${paramsMap[par]}` : par);
            }
            return id;
        }), []);
        /** @type {?} */
        const nonFields = nonFieldsParams.join('&');
        return [
            nonFields ? `${url}?${nonFields}` : url,
            paramsMap[this.FIELDS_PARAM],
        ];
    }
    /**
     * Combine url with field parameters
     *
     * @private
     * @param {?} url
     * @param {?} fields
     * @return {?}
     */
    getUrlWithFields(url, fields) {
        /** @type {?} */
        const mergedFields = mergeFields(fields);
        if (mergedFields) {
            url += url.includes('?') ? '&' : '?';
            url += `${this.FIELDS_PARAM}=${mergedFields}`;
        }
        return url;
    }
}
OccFieldsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
OccFieldsService.ctorParameters = () => [
    { type: HttpClient }
];
/** @nocollapse */ OccFieldsService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function OccFieldsService_Factory() { return new OccFieldsService(i0.ɵɵinject(i1.HttpClient)); }, token: OccFieldsService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWZpZWxkcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL29jYy9zZXJ2aWNlcy9vY2MtZmllbGRzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUUvRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7Ozs7OztBQUVsRCx1Q0FLQzs7Ozs7O0lBSEMsZ0NBQWE7Ozs7O0lBRWIsdUNBQTRCOzs7Ozs7O0FBTzlCLG9DQUdDOzs7Ozs7SUFEQyxnQ0FBZ0I7Ozs7Ozs7O0FBUWxCLDJDQUlDOzs7O0FBUUQsTUFBTSxPQUFPLGdCQUFnQjs7OztJQUMzQixZQUFzQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBRTVCLGlCQUFZLEdBQUcsUUFBUSxDQUFDO0lBRk8sQ0FBQzs7Ozs7Ozs7Ozs7SUFhMUMsbUJBQW1CLENBQUMsTUFBMkI7O2NBQ3ZDLGFBQWEsR0FBMEIsRUFBRTtRQUMvQyxLQUFLLE1BQU0sS0FBSyxJQUFJLG1CQUFBLE1BQU0sRUFBb0IsRUFBRTtrQkFDeEMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO1lBQ3JELElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQzNCLGFBQWEsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUM7YUFDN0I7WUFDRCxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDakQsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDO1NBQ3hEOztjQUVLLFVBQVUsR0FBMEIsRUFBRTtRQUM1QyxLQUFLLE1BQU0sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsRUFBRTs7a0JBQ2xELGFBQWEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQ3pDLEdBQUcsRUFDSCxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUc7Ozs7WUFBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUMsQ0FDMUM7WUFDRCxVQUFVLENBQUMsYUFBYSxDQUFDLEdBQUcsS0FBSyxDQUFDO1NBQ25DO1FBRUQsT0FBTyxVQUFVLENBQUM7SUFDcEIsQ0FBQzs7Ozs7Ozs7SUFPTyxXQUFXLENBQUMsYUFBcUI7Y0FDakMsQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLEdBQUcsYUFBYSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7O2NBRXhDLFNBQVMsR0FBRyxFQUFFO1FBRXBCLElBQUksTUFBTSxFQUFFO1lBQ1YsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHOzs7O1lBQUMsS0FBSyxDQUFDLEVBQUU7O3NCQUN0QixRQUFRLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7Z0JBQ2pDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkMsQ0FBQyxFQUFDLENBQUM7U0FDSjs7Y0FFSyxlQUFlLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7YUFDM0MsSUFBSSxFQUFFO2FBQ04sTUFBTTs7Ozs7UUFBQyxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUNsQixJQUFJLEdBQUcsS0FBSyxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUM3QixFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQzVEO1lBQ0QsT0FBTyxFQUFFLENBQUM7UUFDWixDQUFDLEdBQUUsRUFBRSxDQUFDOztjQUVGLFNBQVMsR0FBRyxlQUFlLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUUzQyxPQUFPO1lBQ0wsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRztZQUN2QyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztTQUM3QixDQUFDO0lBQ0osQ0FBQzs7Ozs7Ozs7O0lBUU8sZ0JBQWdCLENBQUMsR0FBVyxFQUFFLE1BQTJCOztjQUN6RCxZQUFZLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQztRQUV4QyxJQUFJLFlBQVksRUFBRTtZQUNoQixHQUFHLElBQUksR0FBRyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7WUFDckMsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLFlBQVksSUFBSSxZQUFZLEVBQUUsQ0FBQztTQUMvQztRQUVELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQzs7O1lBekZGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQWxDUSxVQUFVOzs7Ozs7OztJQXNDakIsd0NBQWtDOzs7OztJQUZ0QixnQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBtZXJnZUZpZWxkcywgcGFyc2VGaWVsZHMgfSBmcm9tICcuLi91dGlscy9vY2MtZmllbGRzJztcbmltcG9ydCB7IFNjb3BlZERhdGEgfSBmcm9tICcuLi8uLi9tb2RlbC9zY29wZWQtZGF0YSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNjb3BlZERhdGFXaXRoVXJsIHtcbiAgLyoqIFVybCAod2l0aCBmaWVsZHMpIHRvIGxvYWQgc2NvcGVkIGRhdGEgKi9cbiAgdXJsPzogc3RyaW5nO1xuICAvKiogc2NvcGVkIGRhdGEgbW9kZWwgKi9cbiAgc2NvcGVkRGF0YTogU2NvcGVkRGF0YTxhbnk+O1xufVxuXG4vKipcbiAqIEludGVybWVkaWF0ZSBtb2RlbCB0byBhY2NvbW1vZGF0ZSBhbGwgZGF0YSBuZWVkZWQgdG8gcGVyZm9ybSBvY2MgZmllbGRzIG9wdGltaXphdGlvbnNcbiAqIHdyYXBwaW5nIFNjb3BlZERhdGEgd2l0aCB1cmwgYW5kIGZpZWxkc1xuICovXG5leHBvcnQgaW50ZXJmYWNlIE9jY0ZpZWxkc01vZGVsIGV4dGVuZHMgU2NvcGVkRGF0YVdpdGhVcmwge1xuICAvKiogZXh0cmFjdGVkIGZpZWxkcyBvYmplY3QsIHVzZWQgdG8gZXh0cmFjdCBkYXRhIGZyb20gYnJvYWRlciBtb2RlbCAqL1xuICBmaWVsZHM/OiBvYmplY3Q7XG59XG5cbi8qKlxuICogR3JvdXBlZCByZXN0IGNhbGxzIHdpdGggb3B0aW1hbCB1cmxzXG4gKlxuICogT25lIHVybCBncm91cHMgYWxsIHNjb3BlcyBpdCBjb3ZlcnMgd2l0aCByZWxhdGVkIG9jY0ZpZWxkc01vZGVsc1xuICovXG5leHBvcnQgaW50ZXJmYWNlIE9jY09wdGltaW1hbFVybEdyb3VwcyB7XG4gIFtvcHRpbWFsVXJsOiBzdHJpbmddOiB7XG4gICAgW3Njb3BlOiBzdHJpbmddOiBPY2NGaWVsZHNNb2RlbDtcbiAgfTtcbn1cblxuLyoqXG4gKiBIZWxwZXIgc2VydmljZSBmb3Igb3B0aW1pemluZyBlbmRwb2ludCBjYWxscyB0byBvY2MgYmFja2VuZFxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgT2NjRmllbGRzU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBodHRwOiBIdHRwQ2xpZW50KSB7fVxuXG4gIHByb3RlY3RlZCBGSUVMRFNfUEFSQU0gPSAnZmllbGRzJztcblxuICAvKipcbiAgICogTWVyZ2Ugc2ltaWxhciBvY2MgZW5kcG9pbnRzIGNhbGxzIGJ5IG1lcmdpbmcgZmllbGRzIHBhcmFtZXRlclxuICAgKlxuICAgKiBXZSBhc3N1bWUgdGhhdCBkaWZmZXJlbnQgc2NvcGVzIGFyZSBkZWZpbmVkIGJ5IGRpZmZlcmVudCBmaWVsZHMgcGFyYW1ldGVycyxcbiAgICogc28gd2UgYXJlIGdyb3VwaW5nIGFsbCByZXF1ZXN0cyB3aXRoIHRoZSBzYW1lIHVybHMgKGV4Y2VwdCBmaWVsZHMgZGVmaW5pdGlvbilcbiAgICogYW5kIG1lcmdpbmcgaW50byBvbmUgcmVxdWVzdCB3aXRoIGZpZWxkcyB0aGF0IHdpbGwgc2F0aXNmeSBhbGwgc2VwYXJhdGUgb25lcy5cbiAgICpcbiAgICogQHBhcmFtIG1vZGVsc1xuICAgKi9cbiAgZ2V0T3B0aW1hbFVybEdyb3Vwcyhtb2RlbHM6IFNjb3BlZERhdGFXaXRoVXJsW10pOiBPY2NPcHRpbWltYWxVcmxHcm91cHMge1xuICAgIGNvbnN0IGdyb3VwZWRCeVVybHM6IE9jY09wdGltaW1hbFVybEdyb3VwcyA9IHt9O1xuICAgIGZvciAoY29uc3QgbW9kZWwgb2YgbW9kZWxzIGFzIE9jY0ZpZWxkc01vZGVsW10pIHtcbiAgICAgIGNvbnN0IFt1cmxQYXJ0LCBmaWVsZHNdID0gdGhpcy5zcGxpdEZpZWxkcyhtb2RlbC51cmwpO1xuICAgICAgaWYgKCFncm91cGVkQnlVcmxzW3VybFBhcnRdKSB7XG4gICAgICAgIGdyb3VwZWRCeVVybHNbdXJsUGFydF0gPSB7fTtcbiAgICAgIH1cbiAgICAgIG1vZGVsLmZpZWxkcyA9IGZpZWxkcyA/IHBhcnNlRmllbGRzKGZpZWxkcykgOiB7fTtcbiAgICAgIGdyb3VwZWRCeVVybHNbdXJsUGFydF1bbW9kZWwuc2NvcGVkRGF0YS5zY29wZV0gPSBtb2RlbDtcbiAgICB9XG5cbiAgICBjb25zdCBtZXJnZWRVcmxzOiBPY2NPcHRpbWltYWxVcmxHcm91cHMgPSB7fTtcbiAgICBmb3IgKGNvbnN0IFt1cmwsIGdyb3VwXSBvZiBPYmplY3QuZW50cmllcyhncm91cGVkQnlVcmxzKSkge1xuICAgICAgY29uc3QgdXJsV2l0aEZpZWxkcyA9IHRoaXMuZ2V0VXJsV2l0aEZpZWxkcyhcbiAgICAgICAgdXJsLFxuICAgICAgICBPYmplY3QudmFsdWVzKGdyb3VwKS5tYXAobG8gPT4gbG8uZmllbGRzKVxuICAgICAgKTtcbiAgICAgIG1lcmdlZFVybHNbdXJsV2l0aEZpZWxkc10gPSBncm91cDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVyZ2VkVXJscztcbiAgfVxuXG4gIC8qKlxuICAgKiBFeHRyYWN0IGZpZWxkcyBwYXJhbWV0ZXIgZnJvbSBvY2MgZW5kcG9pbnQgdXJsXG4gICAqXG4gICAqIEBwYXJhbSB1cmxXaXRoRmllbGRzXG4gICAqL1xuICBwcml2YXRlIHNwbGl0RmllbGRzKHVybFdpdGhGaWVsZHM6IHN0cmluZyk6IFtzdHJpbmcsIHN0cmluZ10ge1xuICAgIGNvbnN0IFt1cmwsIHBhcmFtc10gPSB1cmxXaXRoRmllbGRzLnNwbGl0KCc/Jyk7XG5cbiAgICBjb25zdCBwYXJhbXNNYXAgPSB7fTtcblxuICAgIGlmIChwYXJhbXMpIHtcbiAgICAgIHBhcmFtcy5zcGxpdCgnJicpLm1hcChwYXJhbSA9PiB7XG4gICAgICAgIGNvbnN0IGtleVZhbHVlID0gcGFyYW0uc3BsaXQoJz0nKTtcbiAgICAgICAgcGFyYW1zTWFwW2tleVZhbHVlWzBdXSA9IGtleVZhbHVlWzFdO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3Qgbm9uRmllbGRzUGFyYW1zID0gT2JqZWN0LmtleXMocGFyYW1zTWFwKVxuICAgICAgLnNvcnQoKVxuICAgICAgLnJlZHVjZSgoaWQsIHBhcikgPT4ge1xuICAgICAgICBpZiAocGFyICE9PSB0aGlzLkZJRUxEU19QQVJBTSkge1xuICAgICAgICAgIGlkLnB1c2gocGFyYW1zTWFwW3Bhcl0gPyBgJHtwYXJ9PSR7cGFyYW1zTWFwW3Bhcl19YCA6IHBhcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlkO1xuICAgICAgfSwgW10pO1xuXG4gICAgY29uc3Qgbm9uRmllbGRzID0gbm9uRmllbGRzUGFyYW1zLmpvaW4oJyYnKTtcblxuICAgIHJldHVybiBbXG4gICAgICBub25GaWVsZHMgPyBgJHt1cmx9PyR7bm9uRmllbGRzfWAgOiB1cmwsXG4gICAgICBwYXJhbXNNYXBbdGhpcy5GSUVMRFNfUEFSQU1dLFxuICAgIF07XG4gIH1cblxuICAvKipcbiAgICogQ29tYmluZSB1cmwgd2l0aCBmaWVsZCBwYXJhbWV0ZXJzXG4gICAqXG4gICAqIEBwYXJhbSB1cmxcbiAgICogQHBhcmFtIGZpZWxkc1xuICAgKi9cbiAgcHJpdmF0ZSBnZXRVcmxXaXRoRmllbGRzKHVybDogc3RyaW5nLCBmaWVsZHM6IChzdHJpbmcgfCBvYmplY3QpW10pOiBzdHJpbmcge1xuICAgIGNvbnN0IG1lcmdlZEZpZWxkcyA9IG1lcmdlRmllbGRzKGZpZWxkcyk7XG5cbiAgICBpZiAobWVyZ2VkRmllbGRzKSB7XG4gICAgICB1cmwgKz0gdXJsLmluY2x1ZGVzKCc/JykgPyAnJicgOiAnPyc7XG4gICAgICB1cmwgKz0gYCR7dGhpcy5GSUVMRFNfUEFSQU19PSR7bWVyZ2VkRmllbGRzfWA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVybDtcbiAgfVxufVxuIl19
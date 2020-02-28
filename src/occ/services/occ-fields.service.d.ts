import { ScopedData } from '../../model/scoped-data';
import { HttpClient } from '@angular/common/http';
import * as ɵngcc0 from '@angular/core';
export interface ScopedDataWithUrl {
    /** Url (with fields) to load scoped data */
    url?: string;
    /** scoped data model */
    scopedData: ScopedData<any>;
}
/**
 * Intermediate model to accommodate all data needed to perform occ fields optimizations
 * wrapping ScopedData with url and fields
 */
export interface OccFieldsModel extends ScopedDataWithUrl {
    /** extracted fields object, used to extract data from broader model */
    fields?: object;
}
/**
 * Grouped rest calls with optimal urls
 *
 * One url groups all scopes it covers with related occFieldsModels
 */
export interface OccOptimimalUrlGroups {
    [optimalUrl: string]: {
        [scope: string]: OccFieldsModel;
    };
}
/**
 * Helper service for optimizing endpoint calls to occ backend
 */
export declare class OccFieldsService {
    protected http: HttpClient;
    constructor(http: HttpClient);
    protected FIELDS_PARAM: string;
    /**
     * Merge similar occ endpoints calls by merging fields parameter
     *
     * We assume that different scopes are defined by different fields parameters,
     * so we are grouping all requests with the same urls (except fields definition)
     * and merging into one request with fields that will satisfy all separate ones.
     *
     * @param models
     */
    getOptimalUrlGroups(models: ScopedDataWithUrl[]): OccOptimimalUrlGroups;
    /**
     * Extract fields parameter from occ endpoint url
     *
     * @param urlWithFields
     */
    private splitFields;
    /**
     * Combine url with field parameters
     *
     * @param url
     * @param fields
     */
    private getUrlWithFields;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OccFieldsService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWZpZWxkcy5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbIm9jYy1maWVsZHMuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNEQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTY29wZWREYXRhIH0gZnJvbSAnLi4vLi4vbW9kZWwvc2NvcGVkLWRhdGEnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmV4cG9ydCBpbnRlcmZhY2UgU2NvcGVkRGF0YVdpdGhVcmwge1xuICAgIC8qKiBVcmwgKHdpdGggZmllbGRzKSB0byBsb2FkIHNjb3BlZCBkYXRhICovXG4gICAgdXJsPzogc3RyaW5nO1xuICAgIC8qKiBzY29wZWQgZGF0YSBtb2RlbCAqL1xuICAgIHNjb3BlZERhdGE6IFNjb3BlZERhdGE8YW55Pjtcbn1cbi8qKlxuICogSW50ZXJtZWRpYXRlIG1vZGVsIHRvIGFjY29tbW9kYXRlIGFsbCBkYXRhIG5lZWRlZCB0byBwZXJmb3JtIG9jYyBmaWVsZHMgb3B0aW1pemF0aW9uc1xuICogd3JhcHBpbmcgU2NvcGVkRGF0YSB3aXRoIHVybCBhbmQgZmllbGRzXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgT2NjRmllbGRzTW9kZWwgZXh0ZW5kcyBTY29wZWREYXRhV2l0aFVybCB7XG4gICAgLyoqIGV4dHJhY3RlZCBmaWVsZHMgb2JqZWN0LCB1c2VkIHRvIGV4dHJhY3QgZGF0YSBmcm9tIGJyb2FkZXIgbW9kZWwgKi9cbiAgICBmaWVsZHM/OiBvYmplY3Q7XG59XG4vKipcbiAqIEdyb3VwZWQgcmVzdCBjYWxscyB3aXRoIG9wdGltYWwgdXJsc1xuICpcbiAqIE9uZSB1cmwgZ3JvdXBzIGFsbCBzY29wZXMgaXQgY292ZXJzIHdpdGggcmVsYXRlZCBvY2NGaWVsZHNNb2RlbHNcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBPY2NPcHRpbWltYWxVcmxHcm91cHMge1xuICAgIFtvcHRpbWFsVXJsOiBzdHJpbmddOiB7XG4gICAgICAgIFtzY29wZTogc3RyaW5nXTogT2NjRmllbGRzTW9kZWw7XG4gICAgfTtcbn1cbi8qKlxuICogSGVscGVyIHNlcnZpY2UgZm9yIG9wdGltaXppbmcgZW5kcG9pbnQgY2FsbHMgdG8gb2NjIGJhY2tlbmRcbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgT2NjRmllbGRzU2VydmljZSB7XG4gICAgcHJvdGVjdGVkIGh0dHA6IEh0dHBDbGllbnQ7XG4gICAgY29uc3RydWN0b3IoaHR0cDogSHR0cENsaWVudCk7XG4gICAgcHJvdGVjdGVkIEZJRUxEU19QQVJBTTogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIE1lcmdlIHNpbWlsYXIgb2NjIGVuZHBvaW50cyBjYWxscyBieSBtZXJnaW5nIGZpZWxkcyBwYXJhbWV0ZXJcbiAgICAgKlxuICAgICAqIFdlIGFzc3VtZSB0aGF0IGRpZmZlcmVudCBzY29wZXMgYXJlIGRlZmluZWQgYnkgZGlmZmVyZW50IGZpZWxkcyBwYXJhbWV0ZXJzLFxuICAgICAqIHNvIHdlIGFyZSBncm91cGluZyBhbGwgcmVxdWVzdHMgd2l0aCB0aGUgc2FtZSB1cmxzIChleGNlcHQgZmllbGRzIGRlZmluaXRpb24pXG4gICAgICogYW5kIG1lcmdpbmcgaW50byBvbmUgcmVxdWVzdCB3aXRoIGZpZWxkcyB0aGF0IHdpbGwgc2F0aXNmeSBhbGwgc2VwYXJhdGUgb25lcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBtb2RlbHNcbiAgICAgKi9cbiAgICBnZXRPcHRpbWFsVXJsR3JvdXBzKG1vZGVsczogU2NvcGVkRGF0YVdpdGhVcmxbXSk6IE9jY09wdGltaW1hbFVybEdyb3VwcztcbiAgICAvKipcbiAgICAgKiBFeHRyYWN0IGZpZWxkcyBwYXJhbWV0ZXIgZnJvbSBvY2MgZW5kcG9pbnQgdXJsXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdXJsV2l0aEZpZWxkc1xuICAgICAqL1xuICAgIHByaXZhdGUgc3BsaXRGaWVsZHM7XG4gICAgLyoqXG4gICAgICogQ29tYmluZSB1cmwgd2l0aCBmaWVsZCBwYXJhbWV0ZXJzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdXJsXG4gICAgICogQHBhcmFtIGZpZWxkc1xuICAgICAqL1xuICAgIHByaXZhdGUgZ2V0VXJsV2l0aEZpZWxkcztcbn1cbiJdfQ==
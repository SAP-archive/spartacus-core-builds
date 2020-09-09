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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OccFieldsService, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWZpZWxkcy5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbIm9jYy1maWVsZHMuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNEQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNjb3BlZERhdGEgfSBmcm9tICcuLi8uLi9tb2RlbC9zY29wZWQtZGF0YSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuZXhwb3J0IGludGVyZmFjZSBTY29wZWREYXRhV2l0aFVybCB7XG4gICAgLyoqIFVybCAod2l0aCBmaWVsZHMpIHRvIGxvYWQgc2NvcGVkIGRhdGEgKi9cbiAgICB1cmw/OiBzdHJpbmc7XG4gICAgLyoqIHNjb3BlZCBkYXRhIG1vZGVsICovXG4gICAgc2NvcGVkRGF0YTogU2NvcGVkRGF0YTxhbnk+O1xufVxuLyoqXG4gKiBJbnRlcm1lZGlhdGUgbW9kZWwgdG8gYWNjb21tb2RhdGUgYWxsIGRhdGEgbmVlZGVkIHRvIHBlcmZvcm0gb2NjIGZpZWxkcyBvcHRpbWl6YXRpb25zXG4gKiB3cmFwcGluZyBTY29wZWREYXRhIHdpdGggdXJsIGFuZCBmaWVsZHNcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBPY2NGaWVsZHNNb2RlbCBleHRlbmRzIFNjb3BlZERhdGFXaXRoVXJsIHtcbiAgICAvKiogZXh0cmFjdGVkIGZpZWxkcyBvYmplY3QsIHVzZWQgdG8gZXh0cmFjdCBkYXRhIGZyb20gYnJvYWRlciBtb2RlbCAqL1xuICAgIGZpZWxkcz86IG9iamVjdDtcbn1cbi8qKlxuICogR3JvdXBlZCByZXN0IGNhbGxzIHdpdGggb3B0aW1hbCB1cmxzXG4gKlxuICogT25lIHVybCBncm91cHMgYWxsIHNjb3BlcyBpdCBjb3ZlcnMgd2l0aCByZWxhdGVkIG9jY0ZpZWxkc01vZGVsc1xuICovXG5leHBvcnQgaW50ZXJmYWNlIE9jY09wdGltaW1hbFVybEdyb3VwcyB7XG4gICAgW29wdGltYWxVcmw6IHN0cmluZ106IHtcbiAgICAgICAgW3Njb3BlOiBzdHJpbmddOiBPY2NGaWVsZHNNb2RlbDtcbiAgICB9O1xufVxuLyoqXG4gKiBIZWxwZXIgc2VydmljZSBmb3Igb3B0aW1pemluZyBlbmRwb2ludCBjYWxscyB0byBvY2MgYmFja2VuZFxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBPY2NGaWVsZHNTZXJ2aWNlIHtcbiAgICBwcm90ZWN0ZWQgaHR0cDogSHR0cENsaWVudDtcbiAgICBjb25zdHJ1Y3RvcihodHRwOiBIdHRwQ2xpZW50KTtcbiAgICBwcm90ZWN0ZWQgRklFTERTX1BBUkFNOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogTWVyZ2Ugc2ltaWxhciBvY2MgZW5kcG9pbnRzIGNhbGxzIGJ5IG1lcmdpbmcgZmllbGRzIHBhcmFtZXRlclxuICAgICAqXG4gICAgICogV2UgYXNzdW1lIHRoYXQgZGlmZmVyZW50IHNjb3BlcyBhcmUgZGVmaW5lZCBieSBkaWZmZXJlbnQgZmllbGRzIHBhcmFtZXRlcnMsXG4gICAgICogc28gd2UgYXJlIGdyb3VwaW5nIGFsbCByZXF1ZXN0cyB3aXRoIHRoZSBzYW1lIHVybHMgKGV4Y2VwdCBmaWVsZHMgZGVmaW5pdGlvbilcbiAgICAgKiBhbmQgbWVyZ2luZyBpbnRvIG9uZSByZXF1ZXN0IHdpdGggZmllbGRzIHRoYXQgd2lsbCBzYXRpc2Z5IGFsbCBzZXBhcmF0ZSBvbmVzLlxuICAgICAqXG4gICAgICogQHBhcmFtIG1vZGVsc1xuICAgICAqL1xuICAgIGdldE9wdGltYWxVcmxHcm91cHMobW9kZWxzOiBTY29wZWREYXRhV2l0aFVybFtdKTogT2NjT3B0aW1pbWFsVXJsR3JvdXBzO1xuICAgIC8qKlxuICAgICAqIEV4dHJhY3QgZmllbGRzIHBhcmFtZXRlciBmcm9tIG9jYyBlbmRwb2ludCB1cmxcbiAgICAgKlxuICAgICAqIEBwYXJhbSB1cmxXaXRoRmllbGRzXG4gICAgICovXG4gICAgcHJpdmF0ZSBzcGxpdEZpZWxkcztcbiAgICAvKipcbiAgICAgKiBDb21iaW5lIHVybCB3aXRoIGZpZWxkIHBhcmFtZXRlcnNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB1cmxcbiAgICAgKiBAcGFyYW0gZmllbGRzXG4gICAgICovXG4gICAgcHJpdmF0ZSBnZXRVcmxXaXRoRmllbGRzO1xufVxuIl19
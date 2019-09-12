/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var /**
 * @abstract
 */
StoreFinderAdapter = /** @class */ (function () {
    function StoreFinderAdapter() {
    }
    return StoreFinderAdapter;
}());
/**
 * @abstract
 */
export { StoreFinderAdapter };
if (false) {
    /**
     * @abstract
     * @param {?} query
     * @param {?} searchConfig
     * @param {?=} longitudeLatitude
     * @return {?}
     */
    StoreFinderAdapter.prototype.search = function (query, searchConfig, longitudeLatitude) { };
    /**
     * @abstract
     * @return {?}
     */
    StoreFinderAdapter.prototype.loadCounts = function () { };
    /**
     * @abstract
     * @param {?} storeId
     * @return {?}
     */
    StoreFinderAdapter.prototype.load = function (storeId) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLmFkYXB0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc3RvcmUtZmluZGVyL2Nvbm5lY3RvcnMvc3RvcmUtZmluZGVyLmFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQVNBOzs7O0lBQUE7SUFVQSxDQUFDO0lBQUQseUJBQUM7QUFBRCxDQUFDLEFBVkQsSUFVQzs7Ozs7Ozs7Ozs7OztJQVRDLDRGQUlxQzs7Ozs7SUFFckMsMERBQWdEOzs7Ozs7SUFFaEQsMkRBQTJEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RvcmVGaW5kZXJTZWFyY2hDb25maWcgfSBmcm9tICcuLi9tb2RlbC9zZWFyY2gtY29uZmlnJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFBvaW50T2ZTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vbW9kZWwvcG9pbnQtb2Ytc2VydmljZS5tb2RlbCc7XG5pbXBvcnQgeyBHZW9Qb2ludCB9IGZyb20gJy4uLy4uL21vZGVsL21pc2MubW9kZWwnO1xuaW1wb3J0IHtcbiAgU3RvcmVGaW5kZXJTZWFyY2hQYWdlLFxuICBTdG9yZUNvdW50LFxufSBmcm9tICcuLi8uLi9tb2RlbC9zdG9yZS1maW5kZXIubW9kZWwnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgU3RvcmVGaW5kZXJBZGFwdGVyIHtcbiAgYWJzdHJhY3Qgc2VhcmNoKFxuICAgIHF1ZXJ5OiBzdHJpbmcsXG4gICAgc2VhcmNoQ29uZmlnOiBTdG9yZUZpbmRlclNlYXJjaENvbmZpZyxcbiAgICBsb25naXR1ZGVMYXRpdHVkZT86IEdlb1BvaW50XG4gICk6IE9ic2VydmFibGU8U3RvcmVGaW5kZXJTZWFyY2hQYWdlPjtcblxuICBhYnN0cmFjdCBsb2FkQ291bnRzKCk6IE9ic2VydmFibGU8U3RvcmVDb3VudFtdPjtcblxuICBhYnN0cmFjdCBsb2FkKHN0b3JlSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8UG9pbnRPZlNlcnZpY2U+O1xufVxuIl19
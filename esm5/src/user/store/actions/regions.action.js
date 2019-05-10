/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export var LOAD_REGIONS = '[User] Load Regions';
/** @type {?} */
export var LOAD_REGIONS_SUCCESS = '[User] Load Regions Success';
/** @type {?} */
export var LOAD_REGIONS_FAIL = '[User] Load Regions Fail';
var LoadRegions = /** @class */ (function () {
    function LoadRegions(payload) {
        this.payload = payload;
        this.type = LOAD_REGIONS;
    }
    return LoadRegions;
}());
export { LoadRegions };
if (false) {
    /** @type {?} */
    LoadRegions.prototype.type;
    /** @type {?} */
    LoadRegions.prototype.payload;
}
var LoadRegionsFail = /** @class */ (function () {
    function LoadRegionsFail(payload) {
        this.payload = payload;
        this.type = LOAD_REGIONS_FAIL;
    }
    return LoadRegionsFail;
}());
export { LoadRegionsFail };
if (false) {
    /** @type {?} */
    LoadRegionsFail.prototype.type;
    /** @type {?} */
    LoadRegionsFail.prototype.payload;
}
var LoadRegionsSuccess = /** @class */ (function () {
    function LoadRegionsSuccess(payload) {
        this.payload = payload;
        this.type = LOAD_REGIONS_SUCCESS;
    }
    return LoadRegionsSuccess;
}());
export { LoadRegionsSuccess };
if (false) {
    /** @type {?} */
    LoadRegionsSuccess.prototype.type;
    /** @type {?} */
    LoadRegionsSuccess.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaW9ucy5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9zdG9yZS9hY3Rpb25zL3JlZ2lvbnMuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsTUFBTSxLQUFPLFlBQVksR0FBRyxxQkFBcUI7O0FBQ2pELE1BQU0sS0FBTyxvQkFBb0IsR0FBRyw2QkFBNkI7O0FBQ2pFLE1BQU0sS0FBTyxpQkFBaUIsR0FBRywwQkFBMEI7QUFFM0Q7SUFFRSxxQkFBbUIsT0FBZTtRQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFEekIsU0FBSSxHQUFHLFlBQVksQ0FBQztJQUNRLENBQUM7SUFDeEMsa0JBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQzs7OztJQUZDLDJCQUE2Qjs7SUFDakIsOEJBQXNCOztBQUdwQztJQUVFLHlCQUFtQixPQUFZO1FBQVosWUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixTQUFJLEdBQUcsaUJBQWlCLENBQUM7SUFDQSxDQUFDO0lBQ3JDLHNCQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7Ozs7SUFGQywrQkFBa0M7O0lBQ3RCLGtDQUFtQjs7QUFHakM7SUFFRSw0QkFBbUIsT0FBaUI7UUFBakIsWUFBTyxHQUFQLE9BQU8sQ0FBVTtRQUQzQixTQUFJLEdBQUcsb0JBQW9CLENBQUM7SUFDRSxDQUFDO0lBQzFDLHlCQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7Ozs7SUFGQyxrQ0FBcUM7O0lBQ3pCLHFDQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IFJlZ2lvbiB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2FkZHJlc3MubW9kZWwnO1xuXG5leHBvcnQgY29uc3QgTE9BRF9SRUdJT05TID0gJ1tVc2VyXSBMb2FkIFJlZ2lvbnMnO1xuZXhwb3J0IGNvbnN0IExPQURfUkVHSU9OU19TVUNDRVNTID0gJ1tVc2VyXSBMb2FkIFJlZ2lvbnMgU3VjY2Vzcyc7XG5leHBvcnQgY29uc3QgTE9BRF9SRUdJT05TX0ZBSUwgPSAnW1VzZXJdIExvYWQgUmVnaW9ucyBGYWlsJztcblxuZXhwb3J0IGNsYXNzIExvYWRSZWdpb25zIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfUkVHSU9OUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IHN0cmluZykge31cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRSZWdpb25zRmFpbCBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX1JFR0lPTlNfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRSZWdpb25zU3VjY2VzcyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX1JFR0lPTlNfU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFJlZ2lvbltdKSB7fVxufVxuXG5leHBvcnQgdHlwZSBSZWdpb25zQWN0aW9uID0gTG9hZFJlZ2lvbnMgfCBMb2FkUmVnaW9uc0ZhaWwgfCBMb2FkUmVnaW9uc1N1Y2Nlc3M7XG4iXX0=
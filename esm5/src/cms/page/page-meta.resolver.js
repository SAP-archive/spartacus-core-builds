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
PageMetaResolver = /** @class */ (function () {
    function PageMetaResolver() {
    }
    /**
     * @param {?} page
     * @return {?}
     */
    PageMetaResolver.prototype.getScore = /**
     * @param {?} page
     * @return {?}
     */
    function (page) {
        /** @type {?} */
        var score = 0;
        if (this.pageType) {
            score += page.type === this.pageType ? 1 : -1;
        }
        if (this.pageTemplate) {
            score += page.template === this.pageTemplate ? 1 : -1;
        }
        return score;
    };
    return PageMetaResolver;
}());
/**
 * @abstract
 */
export { PageMetaResolver };
if (false) {
    /** @type {?} */
    PageMetaResolver.prototype.pageType;
    /** @type {?} */
    PageMetaResolver.prototype.pageTemplate;
    /**
     * The resolve method is no longer preferred and will be removed with release 2.0.
     * The caller `PageMetaService` service is improved to expect all individual resolvers
     * instead, so that the code is easier extensible.
     *
     * @deprecated since version 1.3
     * @abstract
     * @return {?}
     */
    PageMetaResolver.prototype.resolve = function () { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1tZXRhLnJlc29sdmVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2Ntcy9wYWdlL3BhZ2UtbWV0YS5yZXNvbHZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBSUE7Ozs7SUFBQTtJQXdCQSxDQUFDOzs7OztJQVhDLG1DQUFROzs7O0lBQVIsVUFBUyxJQUFVOztZQUNiLEtBQUssR0FBRyxDQUFDO1FBRWIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLEtBQUssSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDL0M7UUFDRCxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsS0FBSyxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN2RDtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FBQyxBQXhCRCxJQXdCQzs7Ozs7OztJQXZCQyxvQ0FBbUI7O0lBQ25CLHdDQUFxQjs7Ozs7Ozs7OztJQVNyQixxREFBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBQYWdlVHlwZSB9IGZyb20gJy4uLy4uL21vZGVsL2Ntcy5tb2RlbCc7XG5pbXBvcnQgeyBQYWdlLCBQYWdlTWV0YSB9IGZyb20gJy4uL21vZGVsL3BhZ2UubW9kZWwnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgUGFnZU1ldGFSZXNvbHZlciB7XG4gIHBhZ2VUeXBlOiBQYWdlVHlwZTtcbiAgcGFnZVRlbXBsYXRlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSByZXNvbHZlIG1ldGhvZCBpcyBubyBsb25nZXIgcHJlZmVycmVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgd2l0aCByZWxlYXNlIDIuMC5cbiAgICogVGhlIGNhbGxlciBgUGFnZU1ldGFTZXJ2aWNlYCBzZXJ2aWNlIGlzIGltcHJvdmVkIHRvIGV4cGVjdCBhbGwgaW5kaXZpZHVhbCByZXNvbHZlcnNcbiAgICogaW5zdGVhZCwgc28gdGhhdCB0aGUgY29kZSBpcyBlYXNpZXIgZXh0ZW5zaWJsZS5cbiAgICpcbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjNcbiAgICovXG4gIGFic3RyYWN0IHJlc29sdmUoKTogT2JzZXJ2YWJsZTxQYWdlTWV0YT47XG5cbiAgZ2V0U2NvcmUocGFnZTogUGFnZSk6IG51bWJlciB7XG4gICAgbGV0IHNjb3JlID0gMDtcblxuICAgIGlmICh0aGlzLnBhZ2VUeXBlKSB7XG4gICAgICBzY29yZSArPSBwYWdlLnR5cGUgPT09IHRoaXMucGFnZVR5cGUgPyAxIDogLTE7XG4gICAgfVxuICAgIGlmICh0aGlzLnBhZ2VUZW1wbGF0ZSkge1xuICAgICAgc2NvcmUgKz0gcGFnZS50ZW1wbGF0ZSA9PT0gdGhpcy5wYWdlVGVtcGxhdGUgPyAxIDogLTE7XG4gICAgfVxuICAgIHJldHVybiBzY29yZTtcbiAgfVxufVxuIl19
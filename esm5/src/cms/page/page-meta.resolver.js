/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @abstract
     * @return {?}
     */
    PageMetaResolver.prototype.resolve = function () { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1tZXRhLnJlc29sdmVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2Ntcy9wYWdlL3BhZ2UtbWV0YS5yZXNvbHZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBSUE7Ozs7SUFBQTtJQWlCQSxDQUFDOzs7OztJQVhDLG1DQUFROzs7O0lBQVIsVUFBUyxJQUFVOztZQUNiLEtBQUssR0FBRyxDQUFDO1FBRWIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLEtBQUssSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDL0M7UUFDRCxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsS0FBSyxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN2RDtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FBQyxBQWpCRCxJQWlCQzs7Ozs7OztJQWhCQyxvQ0FBbUI7O0lBQ25CLHdDQUFxQjs7Ozs7SUFFckIscURBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUGFnZSwgUGFnZU1ldGEgfSBmcm9tICcuLi9tb2RlbC9wYWdlLm1vZGVsJztcbmltcG9ydCB7IFBhZ2VUeXBlIH0gZnJvbSAnLi4vLi4vbW9kZWwvY21zLm1vZGVsJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFBhZ2VNZXRhUmVzb2x2ZXIge1xuICBwYWdlVHlwZTogUGFnZVR5cGU7XG4gIHBhZ2VUZW1wbGF0ZTogc3RyaW5nO1xuXG4gIGFic3RyYWN0IHJlc29sdmUoKTogT2JzZXJ2YWJsZTxQYWdlTWV0YT47XG5cbiAgZ2V0U2NvcmUocGFnZTogUGFnZSk6IG51bWJlciB7XG4gICAgbGV0IHNjb3JlID0gMDtcblxuICAgIGlmICh0aGlzLnBhZ2VUeXBlKSB7XG4gICAgICBzY29yZSArPSBwYWdlLnR5cGUgPT09IHRoaXMucGFnZVR5cGUgPyAxIDogLTE7XG4gICAgfVxuICAgIGlmICh0aGlzLnBhZ2VUZW1wbGF0ZSkge1xuICAgICAgc2NvcmUgKz0gcGFnZS50ZW1wbGF0ZSA9PT0gdGhpcy5wYWdlVGVtcGxhdGUgPyAxIDogLTE7XG4gICAgfVxuICAgIHJldHVybiBzY29yZTtcbiAgfVxufVxuIl19
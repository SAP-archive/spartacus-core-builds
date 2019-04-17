/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
export class PageMetaResolver {
    /**
     * @param {?} page
     * @return {?}
     */
    getScore(page) {
        /** @type {?} */
        let score = 0;
        if (this.pageType) {
            score += page.type === this.pageType ? 1 : -1;
        }
        if (this.pageTemplate) {
            score += page.template === this.pageTemplate ? 1 : -1;
        }
        return score;
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1tZXRhLnJlc29sdmVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2Ntcy9wYWdlL3BhZ2UtbWV0YS5yZXNvbHZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBSUEsTUFBTSxPQUFnQixnQkFBZ0I7Ozs7O0lBTXBDLFFBQVEsQ0FBQyxJQUFVOztZQUNiLEtBQUssR0FBRyxDQUFDO1FBRWIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLEtBQUssSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDL0M7UUFDRCxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsS0FBSyxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN2RDtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztDQUNGOzs7SUFoQkMsb0NBQW1COztJQUNuQix3Q0FBcUI7Ozs7O0lBRXJCLHFEQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFBhZ2VUeXBlIH0gZnJvbSAnLi4vLi4vb2NjJztcbmltcG9ydCB7IFBhZ2UsIFBhZ2VNZXRhIH0gZnJvbSAnLi4vbW9kZWwvcGFnZS5tb2RlbCc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBQYWdlTWV0YVJlc29sdmVyIHtcbiAgcGFnZVR5cGU6IFBhZ2VUeXBlO1xuICBwYWdlVGVtcGxhdGU6IHN0cmluZztcblxuICBhYnN0cmFjdCByZXNvbHZlKCk6IE9ic2VydmFibGU8UGFnZU1ldGE+O1xuXG4gIGdldFNjb3JlKHBhZ2U6IFBhZ2UpOiBudW1iZXIge1xuICAgIGxldCBzY29yZSA9IDA7XG5cbiAgICBpZiAodGhpcy5wYWdlVHlwZSkge1xuICAgICAgc2NvcmUgKz0gcGFnZS50eXBlID09PSB0aGlzLnBhZ2VUeXBlID8gMSA6IC0xO1xuICAgIH1cbiAgICBpZiAodGhpcy5wYWdlVGVtcGxhdGUpIHtcbiAgICAgIHNjb3JlICs9IHBhZ2UudGVtcGxhdGUgPT09IHRoaXMucGFnZVRlbXBsYXRlID8gMSA6IC0xO1xuICAgIH1cbiAgICByZXR1cm4gc2NvcmU7XG4gIH1cbn1cbiJdfQ==
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
import { mockTranslate } from './mock-translate';
var MockTranslatePipe = /** @class */ (function () {
    function MockTranslatePipe() {
    }
    /**
     * @param {?} input
     * @param {?=} options
     * @return {?}
     */
    MockTranslatePipe.prototype.transform = /**
     * @param {?} input
     * @param {?=} options
     * @return {?}
     */
    function (input, options) {
        if (options === void 0) { options = {}; }
        if (((/** @type {?} */ (input))).raw) {
            return ((/** @type {?} */ (input))).raw;
        }
        /** @type {?} */
        var key;
        if (typeof input === 'string') {
            key = input;
        }
        else {
            key = input.key;
            options = tslib_1.__assign({}, options, input.params);
        }
        return mockTranslate(key, options);
    };
    MockTranslatePipe.decorators = [
        { type: Pipe, args: [{ name: 'cxTranslate' },] }
    ];
    return MockTranslatePipe;
}());
export { MockTranslatePipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jay10cmFuc2xhdGUucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9pMThuL3Rlc3RpbmcvbW9jay10cmFuc2xhdGUucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUdqRDtJQUFBO0lBaUJBLENBQUM7Ozs7OztJQWZDLHFDQUFTOzs7OztJQUFULFVBQVUsS0FBNEIsRUFBRSxPQUFvQjtRQUFwQix3QkFBQSxFQUFBLFlBQW9CO1FBQzFELElBQUksQ0FBQyxtQkFBQSxLQUFLLEVBQWdCLENBQUMsQ0FBQyxHQUFHLEVBQUU7WUFDL0IsT0FBTyxDQUFDLG1CQUFBLEtBQUssRUFBZ0IsQ0FBQyxDQUFDLEdBQUcsQ0FBQztTQUNwQzs7WUFFRyxHQUFXO1FBQ2YsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7WUFDN0IsR0FBRyxHQUFHLEtBQUssQ0FBQztTQUNiO2FBQU07WUFDTCxHQUFHLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQztZQUNoQixPQUFPLHdCQUFRLE9BQU8sRUFBSyxLQUFLLENBQUMsTUFBTSxDQUFFLENBQUM7U0FDM0M7UUFFRCxPQUFPLGFBQWEsQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDckMsQ0FBQzs7Z0JBaEJGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUU7O0lBaUI3Qix3QkFBQztDQUFBLEFBakJELElBaUJDO1NBaEJZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IG1vY2tUcmFuc2xhdGUgfSBmcm9tICcuL21vY2stdHJhbnNsYXRlJztcbmltcG9ydCB7IFRyYW5zbGF0YWJsZSB9IGZyb20gJy4uL3RyYW5zbGF0YWJsZSc7XG5cbkBQaXBlKHsgbmFtZTogJ2N4VHJhbnNsYXRlJyB9KVxuZXhwb3J0IGNsYXNzIE1vY2tUcmFuc2xhdGVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybShpbnB1dDogVHJhbnNsYXRhYmxlIHwgc3RyaW5nLCBvcHRpb25zOiBvYmplY3QgPSB7fSk6IHN0cmluZyB7XG4gICAgaWYgKChpbnB1dCBhcyBUcmFuc2xhdGFibGUpLnJhdykge1xuICAgICAgcmV0dXJuIChpbnB1dCBhcyBUcmFuc2xhdGFibGUpLnJhdztcbiAgICB9XG5cbiAgICBsZXQga2V5OiBzdHJpbmc7XG4gICAgaWYgKHR5cGVvZiBpbnB1dCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGtleSA9IGlucHV0O1xuICAgIH0gZWxzZSB7XG4gICAgICBrZXkgPSBpbnB1dC5rZXk7XG4gICAgICBvcHRpb25zID0geyAuLi5vcHRpb25zLCAuLi5pbnB1dC5wYXJhbXMgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gbW9ja1RyYW5zbGF0ZShrZXksIG9wdGlvbnMpO1xuICB9XG59XG4iXX0=
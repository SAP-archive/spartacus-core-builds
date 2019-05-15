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
        var key = typeof input === 'string' ? input : input.key;
        if (typeof input !== 'string') {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jay10cmFuc2xhdGUucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9pMThuL3Rlc3RpbmcvbW9jay10cmFuc2xhdGUucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUdqRDtJQUFBO0lBYUEsQ0FBQzs7Ozs7O0lBWEMscUNBQVM7Ozs7O0lBQVQsVUFBVSxLQUE0QixFQUFFLE9BQW9CO1FBQXBCLHdCQUFBLEVBQUEsWUFBb0I7UUFDMUQsSUFBSSxDQUFDLG1CQUFBLEtBQUssRUFBZ0IsQ0FBQyxDQUFDLEdBQUcsRUFBRTtZQUMvQixPQUFPLENBQUMsbUJBQUEsS0FBSyxFQUFnQixDQUFDLENBQUMsR0FBRyxDQUFDO1NBQ3BDOztZQUVLLEdBQUcsR0FBRyxPQUFPLEtBQUssS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUc7UUFDekQsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7WUFDN0IsT0FBTyx3QkFBUSxPQUFPLEVBQUssS0FBSyxDQUFDLE1BQU0sQ0FBRSxDQUFDO1NBQzNDO1FBQ0QsT0FBTyxhQUFhLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3JDLENBQUM7O2dCQVpGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUU7O0lBYTdCLHdCQUFDO0NBQUEsQUFiRCxJQWFDO1NBWlksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgbW9ja1RyYW5zbGF0ZSB9IGZyb20gJy4vbW9jay10cmFuc2xhdGUnO1xuaW1wb3J0IHsgVHJhbnNsYXRhYmxlIH0gZnJvbSAnLi4vdHJhbnNsYXRhYmxlJztcblxuQFBpcGUoeyBuYW1lOiAnY3hUcmFuc2xhdGUnIH0pXG5leHBvcnQgY2xhc3MgTW9ja1RyYW5zbGF0ZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKGlucHV0OiBUcmFuc2xhdGFibGUgfCBzdHJpbmcsIG9wdGlvbnM6IG9iamVjdCA9IHt9KTogc3RyaW5nIHtcbiAgICBpZiAoKGlucHV0IGFzIFRyYW5zbGF0YWJsZSkucmF3KSB7XG4gICAgICByZXR1cm4gKGlucHV0IGFzIFRyYW5zbGF0YWJsZSkucmF3O1xuICAgIH1cblxuICAgIGNvbnN0IGtleSA9IHR5cGVvZiBpbnB1dCA9PT0gJ3N0cmluZycgPyBpbnB1dCA6IGlucHV0LmtleTtcbiAgICBpZiAodHlwZW9mIGlucHV0ICE9PSAnc3RyaW5nJykge1xuICAgICAgb3B0aW9ucyA9IHsgLi4ub3B0aW9ucywgLi4uaW5wdXQucGFyYW1zIH07XG4gICAgfVxuICAgIHJldHVybiBtb2NrVHJhbnNsYXRlKGtleSwgb3B0aW9ucyk7XG4gIH1cbn1cbiJdfQ==
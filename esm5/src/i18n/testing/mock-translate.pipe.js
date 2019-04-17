/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { mockTranslate } from './mock-translate';
var MockTranslatePipe = /** @class */ (function () {
    function MockTranslatePipe() {
    }
    /**
     * @param {?} key
     * @param {?=} options
     * @return {?}
     */
    MockTranslatePipe.prototype.transform = /**
     * @param {?} key
     * @param {?=} options
     * @return {?}
     */
    function (key, options) {
        if (options === void 0) { options = {}; }
        return mockTranslate(key, options);
    };
    MockTranslatePipe.decorators = [
        { type: Pipe, args: [{ name: 'cxTranslate' },] }
    ];
    return MockTranslatePipe;
}());
export { MockTranslatePipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jay10cmFuc2xhdGUucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9pMThuL3Rlc3RpbmcvbW9jay10cmFuc2xhdGUucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRWpEO0lBQUE7SUFLQSxDQUFDOzs7Ozs7SUFIQyxxQ0FBUzs7Ozs7SUFBVCxVQUFVLEdBQVEsRUFBRSxPQUFvQjtRQUFwQix3QkFBQSxFQUFBLFlBQW9CO1FBQ3RDLE9BQU8sYUFBYSxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNyQyxDQUFDOztnQkFKRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFOztJQUs3Qix3QkFBQztDQUFBLEFBTEQsSUFLQztTQUpZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IG1vY2tUcmFuc2xhdGUgfSBmcm9tICcuL21vY2stdHJhbnNsYXRlJztcblxuQFBpcGUoeyBuYW1lOiAnY3hUcmFuc2xhdGUnIH0pXG5leHBvcnQgY2xhc3MgTW9ja1RyYW5zbGF0ZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKGtleTogYW55LCBvcHRpb25zOiBvYmplY3QgPSB7fSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG1vY2tUcmFuc2xhdGUoa2V5LCBvcHRpb25zKTtcbiAgfVxufVxuIl19
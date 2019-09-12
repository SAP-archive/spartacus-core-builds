/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { mockTranslate } from './mock-translate';
export class MockTranslatePipe {
    /**
     * @param {?} input
     * @param {?=} options
     * @return {?}
     */
    transform(input, options = {}) {
        if (((/** @type {?} */ (input))).raw) {
            return ((/** @type {?} */ (input))).raw;
        }
        /** @type {?} */
        const key = typeof input === 'string' ? input : input.key;
        if (typeof input !== 'string') {
            options = Object.assign({}, options, input.params);
        }
        return mockTranslate(key, options);
    }
}
MockTranslatePipe.decorators = [
    { type: Pipe, args: [{ name: 'cxTranslate' },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jay10cmFuc2xhdGUucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9pMThuL3Rlc3RpbmcvbW9jay10cmFuc2xhdGUucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBSWpELE1BQU0sT0FBTyxpQkFBaUI7Ozs7OztJQUM1QixTQUFTLENBQUMsS0FBNEIsRUFBRSxVQUFrQixFQUFFO1FBQzFELElBQUksQ0FBQyxtQkFBQSxLQUFLLEVBQWdCLENBQUMsQ0FBQyxHQUFHLEVBQUU7WUFDL0IsT0FBTyxDQUFDLG1CQUFBLEtBQUssRUFBZ0IsQ0FBQyxDQUFDLEdBQUcsQ0FBQztTQUNwQzs7Y0FFSyxHQUFHLEdBQUcsT0FBTyxLQUFLLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHO1FBQ3pELElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1lBQzdCLE9BQU8scUJBQVEsT0FBTyxFQUFLLEtBQUssQ0FBQyxNQUFNLENBQUUsQ0FBQztTQUMzQztRQUNELE9BQU8sYUFBYSxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7WUFaRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgbW9ja1RyYW5zbGF0ZSB9IGZyb20gJy4vbW9jay10cmFuc2xhdGUnO1xuaW1wb3J0IHsgVHJhbnNsYXRhYmxlIH0gZnJvbSAnLi4vdHJhbnNsYXRhYmxlJztcblxuQFBpcGUoeyBuYW1lOiAnY3hUcmFuc2xhdGUnIH0pXG5leHBvcnQgY2xhc3MgTW9ja1RyYW5zbGF0ZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKGlucHV0OiBUcmFuc2xhdGFibGUgfCBzdHJpbmcsIG9wdGlvbnM6IG9iamVjdCA9IHt9KTogc3RyaW5nIHtcbiAgICBpZiAoKGlucHV0IGFzIFRyYW5zbGF0YWJsZSkucmF3KSB7XG4gICAgICByZXR1cm4gKGlucHV0IGFzIFRyYW5zbGF0YWJsZSkucmF3O1xuICAgIH1cblxuICAgIGNvbnN0IGtleSA9IHR5cGVvZiBpbnB1dCA9PT0gJ3N0cmluZycgPyBpbnB1dCA6IGlucHV0LmtleTtcbiAgICBpZiAodHlwZW9mIGlucHV0ICE9PSAnc3RyaW5nJykge1xuICAgICAgb3B0aW9ucyA9IHsgLi4ub3B0aW9ucywgLi4uaW5wdXQucGFyYW1zIH07XG4gICAgfVxuICAgIHJldHVybiBtb2NrVHJhbnNsYXRlKGtleSwgb3B0aW9ucyk7XG4gIH1cbn1cbiJdfQ==
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { DatePipe as NativeDatePipe } from '@angular/common';
export class MockDatePipe extends NativeDatePipe {
    /**
     * @param {?} value
     * @param {?=} format
     * @param {?=} timezone
     * @return {?}
     */
    transform(value, format, timezone) {
        return super.transform(value, format, timezone, 'en');
    }
}
MockDatePipe.decorators = [
    { type: Pipe, args: [{ name: 'cxDate' },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jay1kYXRlLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvaTE4bi90ZXN0aW5nL21vY2stZGF0ZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsUUFBUSxJQUFJLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRzdELE1BQU0sT0FBTyxZQUFhLFNBQVEsY0FBYzs7Ozs7OztJQUM5QyxTQUFTLENBQUMsS0FBVSxFQUFFLE1BQWUsRUFBRSxRQUFpQjtRQUN0RCxPQUFPLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7O1lBSkYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGVQaXBlIGFzIE5hdGl2ZURhdGVQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQFBpcGUoeyBuYW1lOiAnY3hEYXRlJyB9KVxuZXhwb3J0IGNsYXNzIE1vY2tEYXRlUGlwZSBleHRlbmRzIE5hdGl2ZURhdGVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybSh2YWx1ZTogYW55LCBmb3JtYXQ/OiBzdHJpbmcsIHRpbWV6b25lPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gc3VwZXIudHJhbnNmb3JtKHZhbHVlLCBmb3JtYXQsIHRpbWV6b25lLCAnZW4nKTtcbiAgfVxufVxuIl19
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { processGlobPatterns } from './glob-utils';
import * as i0 from "@angular/core";
export class GlobService {
    /**
     * For given list of glob-like patterns, returns a validator function.
     *
     * The validator returns true for given URL only when ANY of the positive patterns is matched and NONE of the negative ones.
     * @param {?} patterns
     * @return {?}
     */
    getValidator(patterns) {
        /** @type {?} */
        const processedPatterns = processGlobPatterns(patterns).map((/**
         * @param {?} __0
         * @return {?}
         */
        ({ positive, regex }) => ({
            positive,
            regex: new RegExp(regex),
        })));
        /** @type {?} */
        const includePatterns = processedPatterns.filter((/**
         * @param {?} spec
         * @return {?}
         */
        spec => spec.positive));
        /** @type {?} */
        const excludePatterns = processedPatterns.filter((/**
         * @param {?} spec
         * @return {?}
         */
        spec => !spec.positive));
        return (/**
         * @param {?} url
         * @return {?}
         */
        (url) => includePatterns.some((/**
         * @param {?} pattern
         * @return {?}
         */
        pattern => pattern.regex.test(url))) &&
            !excludePatterns.some((/**
             * @param {?} pattern
             * @return {?}
             */
            pattern => pattern.regex.test(url))));
    }
}
GlobService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */ GlobService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function GlobService_Factory() { return new GlobService(); }, token: GlobService, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3V0aWwvZ2xvYi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7QUFHbkQsTUFBTSxPQUFPLFdBQVc7Ozs7Ozs7O0lBTXRCLFlBQVksQ0FBQyxRQUFrQjs7Y0FDdkIsaUJBQWlCLEdBR2pCLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUc7Ozs7UUFBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ2hFLFFBQVE7WUFDUixLQUFLLEVBQUUsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDO1NBQ3pCLENBQUMsRUFBQzs7Y0FFRyxlQUFlLEdBQUcsaUJBQWlCLENBQUMsTUFBTTs7OztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBQzs7Y0FDakUsZUFBZSxHQUFHLGlCQUFpQixDQUFDLE1BQU07Ozs7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBQztRQUV4RTs7OztRQUFPLENBQUMsR0FBVyxFQUFFLEVBQUUsQ0FDckIsZUFBZSxDQUFDLElBQUk7Ozs7UUFBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFDO1lBQ3hELENBQUMsZUFBZSxDQUFDLElBQUk7Ozs7WUFBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFDLEVBQUM7SUFDOUQsQ0FBQzs7O1lBdEJGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBwcm9jZXNzR2xvYlBhdHRlcm5zIH0gZnJvbSAnLi9nbG9iLXV0aWxzJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBHbG9iU2VydmljZSB7XG4gIC8qKlxuICAgKiBGb3IgZ2l2ZW4gbGlzdCBvZiBnbG9iLWxpa2UgcGF0dGVybnMsIHJldHVybnMgYSB2YWxpZGF0b3IgZnVuY3Rpb24uXG4gICAqXG4gICAqIFRoZSB2YWxpZGF0b3IgcmV0dXJucyB0cnVlIGZvciBnaXZlbiBVUkwgb25seSB3aGVuIEFOWSBvZiB0aGUgcG9zaXRpdmUgcGF0dGVybnMgaXMgbWF0Y2hlZCBhbmQgTk9ORSBvZiB0aGUgbmVnYXRpdmUgb25lcy5cbiAgICovXG4gIGdldFZhbGlkYXRvcihwYXR0ZXJuczogc3RyaW5nW10pOiAodXJsOiBzdHJpbmcpID0+IGJvb2xlYW4ge1xuICAgIGNvbnN0IHByb2Nlc3NlZFBhdHRlcm5zOiB7XG4gICAgICBwb3NpdGl2ZTogYm9vbGVhbjtcbiAgICAgIHJlZ2V4OiBSZWdFeHA7XG4gICAgfVtdID0gcHJvY2Vzc0dsb2JQYXR0ZXJucyhwYXR0ZXJucykubWFwKCh7IHBvc2l0aXZlLCByZWdleCB9KSA9PiAoe1xuICAgICAgcG9zaXRpdmUsXG4gICAgICByZWdleDogbmV3IFJlZ0V4cChyZWdleCksXG4gICAgfSkpO1xuXG4gICAgY29uc3QgaW5jbHVkZVBhdHRlcm5zID0gcHJvY2Vzc2VkUGF0dGVybnMuZmlsdGVyKHNwZWMgPT4gc3BlYy5wb3NpdGl2ZSk7XG4gICAgY29uc3QgZXhjbHVkZVBhdHRlcm5zID0gcHJvY2Vzc2VkUGF0dGVybnMuZmlsdGVyKHNwZWMgPT4gIXNwZWMucG9zaXRpdmUpO1xuXG4gICAgcmV0dXJuICh1cmw6IHN0cmluZykgPT5cbiAgICAgIGluY2x1ZGVQYXR0ZXJucy5zb21lKHBhdHRlcm4gPT4gcGF0dGVybi5yZWdleC50ZXN0KHVybCkpICYmXG4gICAgICAhZXhjbHVkZVBhdHRlcm5zLnNvbWUocGF0dGVybiA9PiBwYXR0ZXJuLnJlZ2V4LnRlc3QodXJsKSk7XG4gIH1cbn1cbiJdfQ==
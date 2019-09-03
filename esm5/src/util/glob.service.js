/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { processGlobPatterns } from './glob-utils';
import * as i0 from "@angular/core";
var GlobService = /** @class */ (function () {
    function GlobService() {
    }
    /**
     * For given list of glob-like patterns, returns a validator function.
     *
     * The validator returns true for given URL only when ANY of the positive patterns is matched and NONE of the negative ones.
     */
    /**
     * For given list of glob-like patterns, returns a validator function.
     *
     * The validator returns true for given URL only when ANY of the positive patterns is matched and NONE of the negative ones.
     * @param {?} patterns
     * @return {?}
     */
    GlobService.prototype.getValidator = /**
     * For given list of glob-like patterns, returns a validator function.
     *
     * The validator returns true for given URL only when ANY of the positive patterns is matched and NONE of the negative ones.
     * @param {?} patterns
     * @return {?}
     */
    function (patterns) {
        /** @type {?} */
        var processedPatterns = processGlobPatterns(patterns).map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var positive = _a.positive, regex = _a.regex;
            return ({
                positive: positive,
                regex: new RegExp(regex),
            });
        }));
        /** @type {?} */
        var includePatterns = processedPatterns.filter((/**
         * @param {?} spec
         * @return {?}
         */
        function (spec) { return spec.positive; }));
        /** @type {?} */
        var excludePatterns = processedPatterns.filter((/**
         * @param {?} spec
         * @return {?}
         */
        function (spec) { return !spec.positive; }));
        return (/**
         * @param {?} url
         * @return {?}
         */
        function (url) {
            return includePatterns.some((/**
             * @param {?} pattern
             * @return {?}
             */
            function (pattern) { return pattern.regex.test(url); })) &&
                !excludePatterns.some((/**
                 * @param {?} pattern
                 * @return {?}
                 */
                function (pattern) { return pattern.regex.test(url); }));
        });
    };
    GlobService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */ GlobService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function GlobService_Factory() { return new GlobService(); }, token: GlobService, providedIn: "root" });
    return GlobService;
}());
export { GlobService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3V0aWwvZ2xvYi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7QUFFbkQ7SUFBQTtLQXVCQztJQXJCQzs7OztPQUlHOzs7Ozs7OztJQUNILGtDQUFZOzs7Ozs7O0lBQVosVUFBYSxRQUFrQjs7WUFDdkIsaUJBQWlCLEdBR2pCLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUc7Ozs7UUFBQyxVQUFDLEVBQW1CO2dCQUFqQixzQkFBUSxFQUFFLGdCQUFLO1lBQU8sT0FBQSxDQUFDO2dCQUNoRSxRQUFRLFVBQUE7Z0JBQ1IsS0FBSyxFQUFFLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQzthQUN6QixDQUFDO1FBSCtELENBRy9ELEVBQUM7O1lBRUcsZUFBZSxHQUFHLGlCQUFpQixDQUFDLE1BQU07Ozs7UUFBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxRQUFRLEVBQWIsQ0FBYSxFQUFDOztZQUNqRSxlQUFlLEdBQUcsaUJBQWlCLENBQUMsTUFBTTs7OztRQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFkLENBQWMsRUFBQztRQUV4RTs7OztRQUFPLFVBQUMsR0FBVztZQUNqQixPQUFBLGVBQWUsQ0FBQyxJQUFJOzs7O1lBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBdkIsQ0FBdUIsRUFBQztnQkFDeEQsQ0FBQyxlQUFlLENBQUMsSUFBSTs7OztnQkFBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUF2QixDQUF1QixFQUFDO1FBRHpELENBQ3lELEVBQUM7SUFDOUQsQ0FBQzs7Z0JBdEJGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7OztzQkFIbEM7Q0EwQkMsQUF2QkQsSUF1QkM7U0F0QlksV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHByb2Nlc3NHbG9iUGF0dGVybnMgfSBmcm9tICcuL2dsb2ItdXRpbHMnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIEdsb2JTZXJ2aWNlIHtcbiAgLyoqXG4gICAqIEZvciBnaXZlbiBsaXN0IG9mIGdsb2ItbGlrZSBwYXR0ZXJucywgcmV0dXJucyBhIHZhbGlkYXRvciBmdW5jdGlvbi5cbiAgICpcbiAgICogVGhlIHZhbGlkYXRvciByZXR1cm5zIHRydWUgZm9yIGdpdmVuIFVSTCBvbmx5IHdoZW4gQU5ZIG9mIHRoZSBwb3NpdGl2ZSBwYXR0ZXJucyBpcyBtYXRjaGVkIGFuZCBOT05FIG9mIHRoZSBuZWdhdGl2ZSBvbmVzLlxuICAgKi9cbiAgZ2V0VmFsaWRhdG9yKHBhdHRlcm5zOiBzdHJpbmdbXSk6ICh1cmw6IHN0cmluZykgPT4gYm9vbGVhbiB7XG4gICAgY29uc3QgcHJvY2Vzc2VkUGF0dGVybnM6IHtcbiAgICAgIHBvc2l0aXZlOiBib29sZWFuO1xuICAgICAgcmVnZXg6IFJlZ0V4cDtcbiAgICB9W10gPSBwcm9jZXNzR2xvYlBhdHRlcm5zKHBhdHRlcm5zKS5tYXAoKHsgcG9zaXRpdmUsIHJlZ2V4IH0pID0+ICh7XG4gICAgICBwb3NpdGl2ZSxcbiAgICAgIHJlZ2V4OiBuZXcgUmVnRXhwKHJlZ2V4KSxcbiAgICB9KSk7XG5cbiAgICBjb25zdCBpbmNsdWRlUGF0dGVybnMgPSBwcm9jZXNzZWRQYXR0ZXJucy5maWx0ZXIoc3BlYyA9PiBzcGVjLnBvc2l0aXZlKTtcbiAgICBjb25zdCBleGNsdWRlUGF0dGVybnMgPSBwcm9jZXNzZWRQYXR0ZXJucy5maWx0ZXIoc3BlYyA9PiAhc3BlYy5wb3NpdGl2ZSk7XG5cbiAgICByZXR1cm4gKHVybDogc3RyaW5nKSA9PlxuICAgICAgaW5jbHVkZVBhdHRlcm5zLnNvbWUocGF0dGVybiA9PiBwYXR0ZXJuLnJlZ2V4LnRlc3QodXJsKSkgJiZcbiAgICAgICFleGNsdWRlUGF0dGVybnMuc29tZShwYXR0ZXJuID0+IHBhdHRlcm4ucmVnZXgudGVzdCh1cmwpKTtcbiAgfVxufVxuIl19
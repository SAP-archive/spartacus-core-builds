/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/** @type {?} */
var QUESTION_MARK = '[^/]';
/** @type {?} */
var WILD_SINGLE = '[^/]*';
/** @type {?} */
var WILD_OPEN = '(?:.+\\/)?';
/** @type {?} */
var TO_ESCAPE_BASE = [
    { replace: /\./g, with: '\\.' },
    { replace: /\+/g, with: '\\+' },
    { replace: /\*/g, with: WILD_SINGLE },
];
/** @type {?} */
var TO_ESCAPE_WILDCARD_QM = tslib_1.__spread(TO_ESCAPE_BASE, [
    { replace: /\?/g, with: QUESTION_MARK },
]);
/** @type {?} */
var TO_ESCAPE_LITERAL_QM = tslib_1.__spread(TO_ESCAPE_BASE, [
    { replace: /\?/g, with: '\\?' },
]);
/**
 * Converts the glob-like pattern into regex string.
 * See similar Angular code: https://github.com/angular/angular/blob/master/packages/service-worker/config/src/glob.ts#L27
 *
 * Patterns use a limited glob format:
 * `**` matches 0 or more path segments
 * `*` matches 0 or more characters excluding `/`
 * `?` matches exactly one character excluding `/` (but when \@param literalQuestionMark is true, `?` is treated as normal character)
 * The `!` prefix marks the pattern as being negative, meaning that only URLs that don't match the pattern will be included
 *
 * @param {?} glob glob-like pattern
 * @param {?=} literalQuestionMark when true, it tells that `?` is treated as a normal character
 * @return {?}
 */
export function globToRegex(glob, literalQuestionMark) {
    if (literalQuestionMark === void 0) { literalQuestionMark = false; }
    /** @type {?} */
    var toEscape = literalQuestionMark
        ? TO_ESCAPE_LITERAL_QM
        : TO_ESCAPE_WILDCARD_QM;
    /** @type {?} */
    var segments = glob.split('/').reverse();
    /** @type {?} */
    var regex = '';
    while (segments.length > 0) {
        /** @type {?} */
        var segment = segments.pop();
        if (segment === '**') {
            if (segments.length > 0) {
                regex += WILD_OPEN;
            }
            else {
                regex += '.*';
            }
        }
        else {
            /** @type {?} */
            var processed = toEscape.reduce((/**
             * @param {?} seg
             * @param {?} escape
             * @return {?}
             */
            function (seg, escape) { return seg.replace(escape.replace, escape.with); }), segment);
            regex += processed;
            if (segments.length > 0) {
                regex += '\\/';
            }
        }
    }
    return regex;
}
/**
 * For given list of glob-like patterns, returns a matcher function.
 *
 * The matcher returns true for given URL only when ANY of the positive patterns is matched and NONE of the negative ones.
 * @param {?} patterns
 * @return {?}
 */
export function getGlobMatcher(patterns) {
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
}
/**
 * Converts list of glob-like patterns into list of RegExps with information whether the glob pattern is positive or negative
 * @param {?} urls
 * @return {?}
 */
export function processGlobPatterns(urls) {
    return urls.map((/**
     * @param {?} url
     * @return {?}
     */
    function (url) {
        /** @type {?} */
        var positive = !url.startsWith('!');
        url = positive ? url : url.substr(1);
        return { positive: positive, regex: "^" + globToRegex(url) + "$" };
    }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYi11dGlscy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91dGlsL2dsb2ItdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBQU0sYUFBYSxHQUFHLE1BQU07O0lBQ3RCLFdBQVcsR0FBRyxPQUFPOztJQUNyQixTQUFTLEdBQUcsWUFBWTs7SUFDeEIsY0FBYyxHQUFHO0lBQ3JCLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFO0lBQy9CLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFO0lBQy9CLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO0NBQ3RDOztJQUNLLHFCQUFxQixvQkFDdEIsY0FBYztJQUNqQixFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRTtFQUN4Qzs7SUFDSyxvQkFBb0Isb0JBQ3JCLGNBQWM7SUFDakIsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUU7RUFDaEM7Ozs7Ozs7Ozs7Ozs7OztBQWVELE1BQU0sVUFBVSxXQUFXLENBQUMsSUFBWSxFQUFFLG1CQUEyQjtJQUEzQixvQ0FBQSxFQUFBLDJCQUEyQjs7UUFDN0QsUUFBUSxHQUFHLG1CQUFtQjtRQUNsQyxDQUFDLENBQUMsb0JBQW9CO1FBQ3RCLENBQUMsQ0FBQyxxQkFBcUI7O1FBQ25CLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRTs7UUFDdEMsS0FBSyxHQUFHLEVBQUU7SUFDZCxPQUFPLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFOztZQUNwQixPQUFPLEdBQUcsUUFBUSxDQUFDLEdBQUcsRUFBRTtRQUM5QixJQUFJLE9BQU8sS0FBSyxJQUFJLEVBQUU7WUFDcEIsSUFBSSxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDdkIsS0FBSyxJQUFJLFNBQVMsQ0FBQzthQUNwQjtpQkFBTTtnQkFDTCxLQUFLLElBQUksSUFBSSxDQUFDO2FBQ2Y7U0FDRjthQUFNOztnQkFDQyxTQUFTLEdBQUcsUUFBUSxDQUFDLE1BQU07Ozs7O1lBQy9CLFVBQUMsR0FBRyxFQUFFLE1BQU0sSUFBSyxPQUFBLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQXhDLENBQXdDLEdBQ3pELE9BQU8sQ0FDUjtZQUNELEtBQUssSUFBSSxTQUFTLENBQUM7WUFDbkIsSUFBSSxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDdkIsS0FBSyxJQUFJLEtBQUssQ0FBQzthQUNoQjtTQUNGO0tBQ0Y7SUFDRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUM7Ozs7Ozs7O0FBT0QsTUFBTSxVQUFVLGNBQWMsQ0FBQyxRQUFrQjs7UUFDekMsaUJBQWlCLEdBR2pCLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUc7Ozs7SUFBQyxVQUFDLEVBQW1CO1lBQWpCLHNCQUFRLEVBQUUsZ0JBQUs7UUFBTyxPQUFBLENBQUM7WUFDaEUsUUFBUSxVQUFBO1lBQ1IsS0FBSyxFQUFFLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQztTQUN6QixDQUFDO0lBSCtELENBRy9ELEVBQUM7O1FBRUcsZUFBZSxHQUFHLGlCQUFpQixDQUFDLE1BQU07Ozs7SUFBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxRQUFRLEVBQWIsQ0FBYSxFQUFDOztRQUNqRSxlQUFlLEdBQUcsaUJBQWlCLENBQUMsTUFBTTs7OztJQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFkLENBQWMsRUFBQztJQUV4RTs7OztJQUFPLFVBQUMsR0FBVztRQUNqQixPQUFBLGVBQWUsQ0FBQyxJQUFJOzs7O1FBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBdkIsQ0FBdUIsRUFBQztZQUN4RCxDQUFDLGVBQWUsQ0FBQyxJQUFJOzs7O1lBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBdkIsQ0FBdUIsRUFBQztJQUR6RCxDQUN5RCxFQUFDO0FBQzlELENBQUM7Ozs7OztBQUtELE1BQU0sVUFBVSxtQkFBbUIsQ0FDakMsSUFBYztJQUVkLE9BQU8sSUFBSSxDQUFDLEdBQUc7Ozs7SUFBQyxVQUFBLEdBQUc7O1lBQ1gsUUFBUSxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUM7UUFDckMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLE9BQU8sRUFBRSxRQUFRLFVBQUEsRUFBRSxLQUFLLEVBQUUsTUFBSSxXQUFXLENBQUMsR0FBRyxDQUFDLE1BQUcsRUFBRSxDQUFDO0lBQ3RELENBQUMsRUFBQyxDQUFDO0FBQ0wsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFFVRVNUSU9OX01BUksgPSAnW14vXSc7XG5jb25zdCBXSUxEX1NJTkdMRSA9ICdbXi9dKic7XG5jb25zdCBXSUxEX09QRU4gPSAnKD86LitcXFxcLyk/JztcbmNvbnN0IFRPX0VTQ0FQRV9CQVNFID0gW1xuICB7IHJlcGxhY2U6IC9cXC4vZywgd2l0aDogJ1xcXFwuJyB9LFxuICB7IHJlcGxhY2U6IC9cXCsvZywgd2l0aDogJ1xcXFwrJyB9LFxuICB7IHJlcGxhY2U6IC9cXCovZywgd2l0aDogV0lMRF9TSU5HTEUgfSxcbl07XG5jb25zdCBUT19FU0NBUEVfV0lMRENBUkRfUU0gPSBbXG4gIC4uLlRPX0VTQ0FQRV9CQVNFLFxuICB7IHJlcGxhY2U6IC9cXD8vZywgd2l0aDogUVVFU1RJT05fTUFSSyB9LFxuXTtcbmNvbnN0IFRPX0VTQ0FQRV9MSVRFUkFMX1FNID0gW1xuICAuLi5UT19FU0NBUEVfQkFTRSxcbiAgeyByZXBsYWNlOiAvXFw/L2csIHdpdGg6ICdcXFxcPycgfSxcbl07XG5cbi8qKlxuICogQ29udmVydHMgdGhlIGdsb2ItbGlrZSBwYXR0ZXJuIGludG8gcmVnZXggc3RyaW5nLlxuICogU2VlIHNpbWlsYXIgQW5ndWxhciBjb2RlOiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvbWFzdGVyL3BhY2thZ2VzL3NlcnZpY2Utd29ya2VyL2NvbmZpZy9zcmMvZ2xvYi50cyNMMjdcbiAqXG4gKiBQYXR0ZXJucyB1c2UgYSBsaW1pdGVkIGdsb2IgZm9ybWF0OlxuICogYCoqYCBtYXRjaGVzIDAgb3IgbW9yZSBwYXRoIHNlZ21lbnRzXG4gKiBgKmAgbWF0Y2hlcyAwIG9yIG1vcmUgY2hhcmFjdGVycyBleGNsdWRpbmcgYC9gXG4gKiBgP2AgbWF0Y2hlcyBleGFjdGx5IG9uZSBjaGFyYWN0ZXIgZXhjbHVkaW5nIGAvYCAoYnV0IHdoZW4gQHBhcmFtIGxpdGVyYWxRdWVzdGlvbk1hcmsgaXMgdHJ1ZSwgYD9gIGlzIHRyZWF0ZWQgYXMgbm9ybWFsIGNoYXJhY3RlcilcbiAqIFRoZSBgIWAgcHJlZml4IG1hcmtzIHRoZSBwYXR0ZXJuIGFzIGJlaW5nIG5lZ2F0aXZlLCBtZWFuaW5nIHRoYXQgb25seSBVUkxzIHRoYXQgZG9uJ3QgbWF0Y2ggdGhlIHBhdHRlcm4gd2lsbCBiZSBpbmNsdWRlZFxuICpcbiAqIEBwYXJhbSBnbG9iIGdsb2ItbGlrZSBwYXR0ZXJuXG4gKiBAcGFyYW0gbGl0ZXJhbFF1ZXN0aW9uTWFyayB3aGVuIHRydWUsIGl0IHRlbGxzIHRoYXQgYD9gIGlzIHRyZWF0ZWQgYXMgYSBub3JtYWwgY2hhcmFjdGVyXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnbG9iVG9SZWdleChnbG9iOiBzdHJpbmcsIGxpdGVyYWxRdWVzdGlvbk1hcmsgPSBmYWxzZSk6IHN0cmluZyB7XG4gIGNvbnN0IHRvRXNjYXBlID0gbGl0ZXJhbFF1ZXN0aW9uTWFya1xuICAgID8gVE9fRVNDQVBFX0xJVEVSQUxfUU1cbiAgICA6IFRPX0VTQ0FQRV9XSUxEQ0FSRF9RTTtcbiAgY29uc3Qgc2VnbWVudHMgPSBnbG9iLnNwbGl0KCcvJykucmV2ZXJzZSgpO1xuICBsZXQgcmVnZXggPSAnJztcbiAgd2hpbGUgKHNlZ21lbnRzLmxlbmd0aCA+IDApIHtcbiAgICBjb25zdCBzZWdtZW50ID0gc2VnbWVudHMucG9wKCk7XG4gICAgaWYgKHNlZ21lbnQgPT09ICcqKicpIHtcbiAgICAgIGlmIChzZWdtZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJlZ2V4ICs9IFdJTERfT1BFTjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlZ2V4ICs9ICcuKic7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHByb2Nlc3NlZCA9IHRvRXNjYXBlLnJlZHVjZShcbiAgICAgICAgKHNlZywgZXNjYXBlKSA9PiBzZWcucmVwbGFjZShlc2NhcGUucmVwbGFjZSwgZXNjYXBlLndpdGgpLFxuICAgICAgICBzZWdtZW50XG4gICAgICApO1xuICAgICAgcmVnZXggKz0gcHJvY2Vzc2VkO1xuICAgICAgaWYgKHNlZ21lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmVnZXggKz0gJ1xcXFwvJztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlZ2V4O1xufVxuXG4vKipcbiAqIEZvciBnaXZlbiBsaXN0IG9mIGdsb2ItbGlrZSBwYXR0ZXJucywgcmV0dXJucyBhIG1hdGNoZXIgZnVuY3Rpb24uXG4gKlxuICogVGhlIG1hdGNoZXIgcmV0dXJucyB0cnVlIGZvciBnaXZlbiBVUkwgb25seSB3aGVuIEFOWSBvZiB0aGUgcG9zaXRpdmUgcGF0dGVybnMgaXMgbWF0Y2hlZCBhbmQgTk9ORSBvZiB0aGUgbmVnYXRpdmUgb25lcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEdsb2JNYXRjaGVyKHBhdHRlcm5zOiBzdHJpbmdbXSk6ICh1cmw6IHN0cmluZykgPT4gYm9vbGVhbiB7XG4gIGNvbnN0IHByb2Nlc3NlZFBhdHRlcm5zOiB7XG4gICAgcG9zaXRpdmU6IGJvb2xlYW47XG4gICAgcmVnZXg6IFJlZ0V4cDtcbiAgfVtdID0gcHJvY2Vzc0dsb2JQYXR0ZXJucyhwYXR0ZXJucykubWFwKCh7IHBvc2l0aXZlLCByZWdleCB9KSA9PiAoe1xuICAgIHBvc2l0aXZlLFxuICAgIHJlZ2V4OiBuZXcgUmVnRXhwKHJlZ2V4KSxcbiAgfSkpO1xuXG4gIGNvbnN0IGluY2x1ZGVQYXR0ZXJucyA9IHByb2Nlc3NlZFBhdHRlcm5zLmZpbHRlcihzcGVjID0+IHNwZWMucG9zaXRpdmUpO1xuICBjb25zdCBleGNsdWRlUGF0dGVybnMgPSBwcm9jZXNzZWRQYXR0ZXJucy5maWx0ZXIoc3BlYyA9PiAhc3BlYy5wb3NpdGl2ZSk7XG5cbiAgcmV0dXJuICh1cmw6IHN0cmluZykgPT5cbiAgICBpbmNsdWRlUGF0dGVybnMuc29tZShwYXR0ZXJuID0+IHBhdHRlcm4ucmVnZXgudGVzdCh1cmwpKSAmJlxuICAgICFleGNsdWRlUGF0dGVybnMuc29tZShwYXR0ZXJuID0+IHBhdHRlcm4ucmVnZXgudGVzdCh1cmwpKTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBsaXN0IG9mIGdsb2ItbGlrZSBwYXR0ZXJucyBpbnRvIGxpc3Qgb2YgUmVnRXhwcyB3aXRoIGluZm9ybWF0aW9uIHdoZXRoZXIgdGhlIGdsb2IgcGF0dGVybiBpcyBwb3NpdGl2ZSBvciBuZWdhdGl2ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcHJvY2Vzc0dsb2JQYXR0ZXJucyhcbiAgdXJsczogc3RyaW5nW11cbik6IHsgcG9zaXRpdmU6IGJvb2xlYW47IHJlZ2V4OiBzdHJpbmcgfVtdIHtcbiAgcmV0dXJuIHVybHMubWFwKHVybCA9PiB7XG4gICAgY29uc3QgcG9zaXRpdmUgPSAhdXJsLnN0YXJ0c1dpdGgoJyEnKTtcbiAgICB1cmwgPSBwb3NpdGl2ZSA/IHVybCA6IHVybC5zdWJzdHIoMSk7XG4gICAgcmV0dXJuIHsgcG9zaXRpdmUsIHJlZ2V4OiBgXiR7Z2xvYlRvUmVnZXgodXJsKX0kYCB9O1xuICB9KTtcbn1cbiJdfQ==
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * The MIT License
 * Copyright (c) 2010-2019 Google LLC. http://angular.io/license
 *
 * See:
 * - https://github.com/angular/angular/blob/6f5f481fdae03f1d8db36284b64c7b82d9519d85/packages/service-worker/config/src/glob.ts
 * - https://github.com/angular/angular/blob/6f5f481fdae03f1d8db36284b64c7b82d9519d85/aio/tests/deployment/shared/helpers.ts#L17
 * - https://github.com/angular/angular/blob/6f5f481fdae03f1d8db36284b64c7b82d9519d85/packages/service-worker/config/src/generator.ts#L86
 */
/** @type {?} */
const QUESTION_MARK = '[^/]';
/** @type {?} */
const WILD_SINGLE = '[^/]*';
/** @type {?} */
const WILD_OPEN = '(?:.+\\/)?';
/** @type {?} */
const TO_ESCAPE_BASE = [
    { replace: /\./g, with: '\\.' },
    { replace: /\+/g, with: '\\+' },
    { replace: /\*/g, with: WILD_SINGLE },
];
/** @type {?} */
const TO_ESCAPE_WILDCARD_QM = [
    ...TO_ESCAPE_BASE,
    { replace: /\?/g, with: QUESTION_MARK },
];
/** @type {?} */
const TO_ESCAPE_LITERAL_QM = [
    ...TO_ESCAPE_BASE,
    { replace: /\?/g, with: '\\?' },
];
/**
 * Converts the glob-like pattern into regex string.
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
export function globToRegex(glob, literalQuestionMark = false) {
    /** @type {?} */
    const toEscape = literalQuestionMark
        ? TO_ESCAPE_LITERAL_QM
        : TO_ESCAPE_WILDCARD_QM;
    /** @type {?} */
    const segments = glob.split('/').reverse();
    /** @type {?} */
    let regex = '';
    while (segments.length > 0) {
        /** @type {?} */
        const segment = segments.pop();
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
            const processed = toEscape.reduce((/**
             * @param {?} seg
             * @param {?} escape
             * @return {?}
             */
            (seg, escape) => seg.replace(escape.replace, escape.with)), segment);
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
    url => {
        /** @type {?} */
        const positive = !url.startsWith('!');
        url = positive ? url : url.substr(1);
        return { positive, regex: `^${globToRegex(url)}$` };
    }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYi11dGlscy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91dGlsL2dsb2ItdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O01BV00sYUFBYSxHQUFHLE1BQU07O01BQ3RCLFdBQVcsR0FBRyxPQUFPOztNQUNyQixTQUFTLEdBQUcsWUFBWTs7TUFDeEIsY0FBYyxHQUFHO0lBQ3JCLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFO0lBQy9CLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFO0lBQy9CLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO0NBQ3RDOztNQUNLLHFCQUFxQixHQUFHO0lBQzVCLEdBQUcsY0FBYztJQUNqQixFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRTtDQUN4Qzs7TUFDSyxvQkFBb0IsR0FBRztJQUMzQixHQUFHLGNBQWM7SUFDakIsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUU7Q0FDaEM7Ozs7Ozs7Ozs7Ozs7O0FBY0QsTUFBTSxVQUFVLFdBQVcsQ0FBQyxJQUFZLEVBQUUsbUJBQW1CLEdBQUcsS0FBSzs7VUFDN0QsUUFBUSxHQUFHLG1CQUFtQjtRQUNsQyxDQUFDLENBQUMsb0JBQW9CO1FBQ3RCLENBQUMsQ0FBQyxxQkFBcUI7O1VBQ25CLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRTs7UUFDdEMsS0FBSyxHQUFHLEVBQUU7SUFDZCxPQUFPLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFOztjQUNwQixPQUFPLEdBQUcsUUFBUSxDQUFDLEdBQUcsRUFBRTtRQUM5QixJQUFJLE9BQU8sS0FBSyxJQUFJLEVBQUU7WUFDcEIsSUFBSSxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDdkIsS0FBSyxJQUFJLFNBQVMsQ0FBQzthQUNwQjtpQkFBTTtnQkFDTCxLQUFLLElBQUksSUFBSSxDQUFDO2FBQ2Y7U0FDRjthQUFNOztrQkFDQyxTQUFTLEdBQUcsUUFBUSxDQUFDLE1BQU07Ozs7O1lBQy9CLENBQUMsR0FBRyxFQUFFLE1BQU0sRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FDekQsT0FBTyxDQUNSO1lBQ0QsS0FBSyxJQUFJLFNBQVMsQ0FBQztZQUNuQixJQUFJLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUN2QixLQUFLLElBQUksS0FBSyxDQUFDO2FBQ2hCO1NBQ0Y7S0FDRjtJQUNELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQzs7Ozs7Ozs7QUFPRCxNQUFNLFVBQVUsY0FBYyxDQUFDLFFBQWtCOztVQUN6QyxpQkFBaUIsR0FHakIsbUJBQW1CLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRzs7OztJQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDaEUsUUFBUTtRQUNSLEtBQUssRUFBRSxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUM7S0FDekIsQ0FBQyxFQUFDOztVQUVHLGVBQWUsR0FBRyxpQkFBaUIsQ0FBQyxNQUFNOzs7O0lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFDOztVQUNqRSxlQUFlLEdBQUcsaUJBQWlCLENBQUMsTUFBTTs7OztJQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFDO0lBRXhFOzs7O0lBQU8sQ0FBQyxHQUFXLEVBQUUsRUFBRSxDQUNyQixlQUFlLENBQUMsSUFBSTs7OztJQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUM7UUFDeEQsQ0FBQyxlQUFlLENBQUMsSUFBSTs7OztRQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUMsRUFBQztBQUM5RCxDQUFDOzs7Ozs7QUFLRCxNQUFNLFVBQVUsbUJBQW1CLENBQ2pDLElBQWM7SUFFZCxPQUFPLElBQUksQ0FBQyxHQUFHOzs7O0lBQUMsR0FBRyxDQUFDLEVBQUU7O2NBQ2QsUUFBUSxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUM7UUFDckMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLE9BQU8sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLElBQUksV0FBVyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUN0RCxDQUFDLEVBQUMsQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBUaGUgTUlUIExpY2Vuc2VcbiAqIENvcHlyaWdodCAoYykgMjAxMC0yMDE5IEdvb2dsZSBMTEMuIGh0dHA6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqXG4gKiBTZWU6XG4gKiAtIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvYmxvYi82ZjVmNDgxZmRhZTAzZjFkOGRiMzYyODRiNjRjN2I4MmQ5NTE5ZDg1L3BhY2thZ2VzL3NlcnZpY2Utd29ya2VyL2NvbmZpZy9zcmMvZ2xvYi50c1xuICogLSBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvNmY1ZjQ4MWZkYWUwM2YxZDhkYjM2Mjg0YjY0YzdiODJkOTUxOWQ4NS9haW8vdGVzdHMvZGVwbG95bWVudC9zaGFyZWQvaGVscGVycy50cyNMMTdcbiAqIC0gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9ibG9iLzZmNWY0ODFmZGFlMDNmMWQ4ZGIzNjI4NGI2NGM3YjgyZDk1MTlkODUvcGFja2FnZXMvc2VydmljZS13b3JrZXIvY29uZmlnL3NyYy9nZW5lcmF0b3IudHMjTDg2XG4gKi9cblxuY29uc3QgUVVFU1RJT05fTUFSSyA9ICdbXi9dJztcbmNvbnN0IFdJTERfU0lOR0xFID0gJ1teL10qJztcbmNvbnN0IFdJTERfT1BFTiA9ICcoPzouK1xcXFwvKT8nO1xuY29uc3QgVE9fRVNDQVBFX0JBU0UgPSBbXG4gIHsgcmVwbGFjZTogL1xcLi9nLCB3aXRoOiAnXFxcXC4nIH0sXG4gIHsgcmVwbGFjZTogL1xcKy9nLCB3aXRoOiAnXFxcXCsnIH0sXG4gIHsgcmVwbGFjZTogL1xcKi9nLCB3aXRoOiBXSUxEX1NJTkdMRSB9LFxuXTtcbmNvbnN0IFRPX0VTQ0FQRV9XSUxEQ0FSRF9RTSA9IFtcbiAgLi4uVE9fRVNDQVBFX0JBU0UsXG4gIHsgcmVwbGFjZTogL1xcPy9nLCB3aXRoOiBRVUVTVElPTl9NQVJLIH0sXG5dO1xuY29uc3QgVE9fRVNDQVBFX0xJVEVSQUxfUU0gPSBbXG4gIC4uLlRPX0VTQ0FQRV9CQVNFLFxuICB7IHJlcGxhY2U6IC9cXD8vZywgd2l0aDogJ1xcXFw/JyB9LFxuXTtcblxuLyoqXG4gKiBDb252ZXJ0cyB0aGUgZ2xvYi1saWtlIHBhdHRlcm4gaW50byByZWdleCBzdHJpbmcuXG4gKlxuICogUGF0dGVybnMgdXNlIGEgbGltaXRlZCBnbG9iIGZvcm1hdDpcbiAqIGAqKmAgbWF0Y2hlcyAwIG9yIG1vcmUgcGF0aCBzZWdtZW50c1xuICogYCpgIG1hdGNoZXMgMCBvciBtb3JlIGNoYXJhY3RlcnMgZXhjbHVkaW5nIGAvYFxuICogYD9gIG1hdGNoZXMgZXhhY3RseSBvbmUgY2hhcmFjdGVyIGV4Y2x1ZGluZyBgL2AgKGJ1dCB3aGVuIEBwYXJhbSBsaXRlcmFsUXVlc3Rpb25NYXJrIGlzIHRydWUsIGA/YCBpcyB0cmVhdGVkIGFzIG5vcm1hbCBjaGFyYWN0ZXIpXG4gKiBUaGUgYCFgIHByZWZpeCBtYXJrcyB0aGUgcGF0dGVybiBhcyBiZWluZyBuZWdhdGl2ZSwgbWVhbmluZyB0aGF0IG9ubHkgVVJMcyB0aGF0IGRvbid0IG1hdGNoIHRoZSBwYXR0ZXJuIHdpbGwgYmUgaW5jbHVkZWRcbiAqXG4gKiBAcGFyYW0gZ2xvYiBnbG9iLWxpa2UgcGF0dGVyblxuICogQHBhcmFtIGxpdGVyYWxRdWVzdGlvbk1hcmsgd2hlbiB0cnVlLCBpdCB0ZWxscyB0aGF0IGA/YCBpcyB0cmVhdGVkIGFzIGEgbm9ybWFsIGNoYXJhY3RlclxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2xvYlRvUmVnZXgoZ2xvYjogc3RyaW5nLCBsaXRlcmFsUXVlc3Rpb25NYXJrID0gZmFsc2UpOiBzdHJpbmcge1xuICBjb25zdCB0b0VzY2FwZSA9IGxpdGVyYWxRdWVzdGlvbk1hcmtcbiAgICA/IFRPX0VTQ0FQRV9MSVRFUkFMX1FNXG4gICAgOiBUT19FU0NBUEVfV0lMRENBUkRfUU07XG4gIGNvbnN0IHNlZ21lbnRzID0gZ2xvYi5zcGxpdCgnLycpLnJldmVyc2UoKTtcbiAgbGV0IHJlZ2V4ID0gJyc7XG4gIHdoaWxlIChzZWdtZW50cy5sZW5ndGggPiAwKSB7XG4gICAgY29uc3Qgc2VnbWVudCA9IHNlZ21lbnRzLnBvcCgpO1xuICAgIGlmIChzZWdtZW50ID09PSAnKionKSB7XG4gICAgICBpZiAoc2VnbWVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICByZWdleCArPSBXSUxEX09QRU47XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZWdleCArPSAnLionO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBwcm9jZXNzZWQgPSB0b0VzY2FwZS5yZWR1Y2UoXG4gICAgICAgIChzZWcsIGVzY2FwZSkgPT4gc2VnLnJlcGxhY2UoZXNjYXBlLnJlcGxhY2UsIGVzY2FwZS53aXRoKSxcbiAgICAgICAgc2VnbWVudFxuICAgICAgKTtcbiAgICAgIHJlZ2V4ICs9IHByb2Nlc3NlZDtcbiAgICAgIGlmIChzZWdtZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJlZ2V4ICs9ICdcXFxcLyc7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiByZWdleDtcbn1cblxuLyoqXG4gKiBGb3IgZ2l2ZW4gbGlzdCBvZiBnbG9iLWxpa2UgcGF0dGVybnMsIHJldHVybnMgYSBtYXRjaGVyIGZ1bmN0aW9uLlxuICpcbiAqIFRoZSBtYXRjaGVyIHJldHVybnMgdHJ1ZSBmb3IgZ2l2ZW4gVVJMIG9ubHkgd2hlbiBBTlkgb2YgdGhlIHBvc2l0aXZlIHBhdHRlcm5zIGlzIG1hdGNoZWQgYW5kIE5PTkUgb2YgdGhlIG5lZ2F0aXZlIG9uZXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRHbG9iTWF0Y2hlcihwYXR0ZXJuczogc3RyaW5nW10pOiAodXJsOiBzdHJpbmcpID0+IGJvb2xlYW4ge1xuICBjb25zdCBwcm9jZXNzZWRQYXR0ZXJuczoge1xuICAgIHBvc2l0aXZlOiBib29sZWFuO1xuICAgIHJlZ2V4OiBSZWdFeHA7XG4gIH1bXSA9IHByb2Nlc3NHbG9iUGF0dGVybnMocGF0dGVybnMpLm1hcCgoeyBwb3NpdGl2ZSwgcmVnZXggfSkgPT4gKHtcbiAgICBwb3NpdGl2ZSxcbiAgICByZWdleDogbmV3IFJlZ0V4cChyZWdleCksXG4gIH0pKTtcblxuICBjb25zdCBpbmNsdWRlUGF0dGVybnMgPSBwcm9jZXNzZWRQYXR0ZXJucy5maWx0ZXIoc3BlYyA9PiBzcGVjLnBvc2l0aXZlKTtcbiAgY29uc3QgZXhjbHVkZVBhdHRlcm5zID0gcHJvY2Vzc2VkUGF0dGVybnMuZmlsdGVyKHNwZWMgPT4gIXNwZWMucG9zaXRpdmUpO1xuXG4gIHJldHVybiAodXJsOiBzdHJpbmcpID0+XG4gICAgaW5jbHVkZVBhdHRlcm5zLnNvbWUocGF0dGVybiA9PiBwYXR0ZXJuLnJlZ2V4LnRlc3QodXJsKSkgJiZcbiAgICAhZXhjbHVkZVBhdHRlcm5zLnNvbWUocGF0dGVybiA9PiBwYXR0ZXJuLnJlZ2V4LnRlc3QodXJsKSk7XG59XG5cbi8qKlxuICogQ29udmVydHMgbGlzdCBvZiBnbG9iLWxpa2UgcGF0dGVybnMgaW50byBsaXN0IG9mIFJlZ0V4cHMgd2l0aCBpbmZvcm1hdGlvbiB3aGV0aGVyIHRoZSBnbG9iIHBhdHRlcm4gaXMgcG9zaXRpdmUgb3IgbmVnYXRpdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHByb2Nlc3NHbG9iUGF0dGVybnMoXG4gIHVybHM6IHN0cmluZ1tdXG4pOiB7IHBvc2l0aXZlOiBib29sZWFuOyByZWdleDogc3RyaW5nIH1bXSB7XG4gIHJldHVybiB1cmxzLm1hcCh1cmwgPT4ge1xuICAgIGNvbnN0IHBvc2l0aXZlID0gIXVybC5zdGFydHNXaXRoKCchJyk7XG4gICAgdXJsID0gcG9zaXRpdmUgPyB1cmwgOiB1cmwuc3Vic3RyKDEpO1xuICAgIHJldHVybiB7IHBvc2l0aXZlLCByZWdleDogYF4ke2dsb2JUb1JlZ2V4KHVybCl9JGAgfTtcbiAgfSk7XG59XG4iXX0=
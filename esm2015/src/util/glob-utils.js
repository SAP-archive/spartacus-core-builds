/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYi11dGlscy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91dGlsL2dsb2ItdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7TUFBTSxhQUFhLEdBQUcsTUFBTTs7TUFDdEIsV0FBVyxHQUFHLE9BQU87O01BQ3JCLFNBQVMsR0FBRyxZQUFZOztNQUN4QixjQUFjLEdBQUc7SUFDckIsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUU7SUFDL0IsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUU7SUFDL0IsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7Q0FDdEM7O01BQ0sscUJBQXFCLEdBQUc7SUFDNUIsR0FBRyxjQUFjO0lBQ2pCLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFO0NBQ3hDOztNQUNLLG9CQUFvQixHQUFHO0lBQzNCLEdBQUcsY0FBYztJQUNqQixFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRTtDQUNoQzs7Ozs7Ozs7Ozs7Ozs7O0FBZUQsTUFBTSxVQUFVLFdBQVcsQ0FBQyxJQUFZLEVBQUUsbUJBQW1CLEdBQUcsS0FBSzs7VUFDN0QsUUFBUSxHQUFHLG1CQUFtQjtRQUNsQyxDQUFDLENBQUMsb0JBQW9CO1FBQ3RCLENBQUMsQ0FBQyxxQkFBcUI7O1VBQ25CLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRTs7UUFDdEMsS0FBSyxHQUFHLEVBQUU7SUFDZCxPQUFPLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFOztjQUNwQixPQUFPLEdBQUcsUUFBUSxDQUFDLEdBQUcsRUFBRTtRQUM5QixJQUFJLE9BQU8sS0FBSyxJQUFJLEVBQUU7WUFDcEIsSUFBSSxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDdkIsS0FBSyxJQUFJLFNBQVMsQ0FBQzthQUNwQjtpQkFBTTtnQkFDTCxLQUFLLElBQUksSUFBSSxDQUFDO2FBQ2Y7U0FDRjthQUFNOztrQkFDQyxTQUFTLEdBQUcsUUFBUSxDQUFDLE1BQU07Ozs7O1lBQy9CLENBQUMsR0FBRyxFQUFFLE1BQU0sRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FDekQsT0FBTyxDQUNSO1lBQ0QsS0FBSyxJQUFJLFNBQVMsQ0FBQztZQUNuQixJQUFJLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUN2QixLQUFLLElBQUksS0FBSyxDQUFDO2FBQ2hCO1NBQ0Y7S0FDRjtJQUNELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQzs7Ozs7Ozs7QUFPRCxNQUFNLFVBQVUsY0FBYyxDQUFDLFFBQWtCOztVQUN6QyxpQkFBaUIsR0FHakIsbUJBQW1CLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRzs7OztJQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDaEUsUUFBUTtRQUNSLEtBQUssRUFBRSxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUM7S0FDekIsQ0FBQyxFQUFDOztVQUVHLGVBQWUsR0FBRyxpQkFBaUIsQ0FBQyxNQUFNOzs7O0lBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFDOztVQUNqRSxlQUFlLEdBQUcsaUJBQWlCLENBQUMsTUFBTTs7OztJQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFDO0lBRXhFOzs7O0lBQU8sQ0FBQyxHQUFXLEVBQUUsRUFBRSxDQUNyQixlQUFlLENBQUMsSUFBSTs7OztJQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUM7UUFDeEQsQ0FBQyxlQUFlLENBQUMsSUFBSTs7OztRQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUMsRUFBQztBQUM5RCxDQUFDOzs7Ozs7QUFLRCxNQUFNLFVBQVUsbUJBQW1CLENBQ2pDLElBQWM7SUFFZCxPQUFPLElBQUksQ0FBQyxHQUFHOzs7O0lBQUMsR0FBRyxDQUFDLEVBQUU7O2NBQ2QsUUFBUSxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUM7UUFDckMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLE9BQU8sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLElBQUksV0FBVyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUN0RCxDQUFDLEVBQUMsQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBRVUVTVElPTl9NQVJLID0gJ1teL10nO1xuY29uc3QgV0lMRF9TSU5HTEUgPSAnW14vXSonO1xuY29uc3QgV0lMRF9PUEVOID0gJyg/Oi4rXFxcXC8pPyc7XG5jb25zdCBUT19FU0NBUEVfQkFTRSA9IFtcbiAgeyByZXBsYWNlOiAvXFwuL2csIHdpdGg6ICdcXFxcLicgfSxcbiAgeyByZXBsYWNlOiAvXFwrL2csIHdpdGg6ICdcXFxcKycgfSxcbiAgeyByZXBsYWNlOiAvXFwqL2csIHdpdGg6IFdJTERfU0lOR0xFIH0sXG5dO1xuY29uc3QgVE9fRVNDQVBFX1dJTERDQVJEX1FNID0gW1xuICAuLi5UT19FU0NBUEVfQkFTRSxcbiAgeyByZXBsYWNlOiAvXFw/L2csIHdpdGg6IFFVRVNUSU9OX01BUksgfSxcbl07XG5jb25zdCBUT19FU0NBUEVfTElURVJBTF9RTSA9IFtcbiAgLi4uVE9fRVNDQVBFX0JBU0UsXG4gIHsgcmVwbGFjZTogL1xcPy9nLCB3aXRoOiAnXFxcXD8nIH0sXG5dO1xuXG4vKipcbiAqIENvbnZlcnRzIHRoZSBnbG9iLWxpa2UgcGF0dGVybiBpbnRvIHJlZ2V4IHN0cmluZy5cbiAqIFNlZSBzaW1pbGFyIEFuZ3VsYXIgY29kZTogaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9ibG9iL21hc3Rlci9wYWNrYWdlcy9zZXJ2aWNlLXdvcmtlci9jb25maWcvc3JjL2dsb2IudHMjTDI3XG4gKlxuICogUGF0dGVybnMgdXNlIGEgbGltaXRlZCBnbG9iIGZvcm1hdDpcbiAqIGAqKmAgbWF0Y2hlcyAwIG9yIG1vcmUgcGF0aCBzZWdtZW50c1xuICogYCpgIG1hdGNoZXMgMCBvciBtb3JlIGNoYXJhY3RlcnMgZXhjbHVkaW5nIGAvYFxuICogYD9gIG1hdGNoZXMgZXhhY3RseSBvbmUgY2hhcmFjdGVyIGV4Y2x1ZGluZyBgL2AgKGJ1dCB3aGVuIEBwYXJhbSBsaXRlcmFsUXVlc3Rpb25NYXJrIGlzIHRydWUsIGA/YCBpcyB0cmVhdGVkIGFzIG5vcm1hbCBjaGFyYWN0ZXIpXG4gKiBUaGUgYCFgIHByZWZpeCBtYXJrcyB0aGUgcGF0dGVybiBhcyBiZWluZyBuZWdhdGl2ZSwgbWVhbmluZyB0aGF0IG9ubHkgVVJMcyB0aGF0IGRvbid0IG1hdGNoIHRoZSBwYXR0ZXJuIHdpbGwgYmUgaW5jbHVkZWRcbiAqXG4gKiBAcGFyYW0gZ2xvYiBnbG9iLWxpa2UgcGF0dGVyblxuICogQHBhcmFtIGxpdGVyYWxRdWVzdGlvbk1hcmsgd2hlbiB0cnVlLCBpdCB0ZWxscyB0aGF0IGA/YCBpcyB0cmVhdGVkIGFzIGEgbm9ybWFsIGNoYXJhY3RlclxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2xvYlRvUmVnZXgoZ2xvYjogc3RyaW5nLCBsaXRlcmFsUXVlc3Rpb25NYXJrID0gZmFsc2UpOiBzdHJpbmcge1xuICBjb25zdCB0b0VzY2FwZSA9IGxpdGVyYWxRdWVzdGlvbk1hcmtcbiAgICA/IFRPX0VTQ0FQRV9MSVRFUkFMX1FNXG4gICAgOiBUT19FU0NBUEVfV0lMRENBUkRfUU07XG4gIGNvbnN0IHNlZ21lbnRzID0gZ2xvYi5zcGxpdCgnLycpLnJldmVyc2UoKTtcbiAgbGV0IHJlZ2V4ID0gJyc7XG4gIHdoaWxlIChzZWdtZW50cy5sZW5ndGggPiAwKSB7XG4gICAgY29uc3Qgc2VnbWVudCA9IHNlZ21lbnRzLnBvcCgpO1xuICAgIGlmIChzZWdtZW50ID09PSAnKionKSB7XG4gICAgICBpZiAoc2VnbWVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICByZWdleCArPSBXSUxEX09QRU47XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZWdleCArPSAnLionO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBwcm9jZXNzZWQgPSB0b0VzY2FwZS5yZWR1Y2UoXG4gICAgICAgIChzZWcsIGVzY2FwZSkgPT4gc2VnLnJlcGxhY2UoZXNjYXBlLnJlcGxhY2UsIGVzY2FwZS53aXRoKSxcbiAgICAgICAgc2VnbWVudFxuICAgICAgKTtcbiAgICAgIHJlZ2V4ICs9IHByb2Nlc3NlZDtcbiAgICAgIGlmIChzZWdtZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJlZ2V4ICs9ICdcXFxcLyc7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiByZWdleDtcbn1cblxuLyoqXG4gKiBGb3IgZ2l2ZW4gbGlzdCBvZiBnbG9iLWxpa2UgcGF0dGVybnMsIHJldHVybnMgYSBtYXRjaGVyIGZ1bmN0aW9uLlxuICpcbiAqIFRoZSBtYXRjaGVyIHJldHVybnMgdHJ1ZSBmb3IgZ2l2ZW4gVVJMIG9ubHkgd2hlbiBBTlkgb2YgdGhlIHBvc2l0aXZlIHBhdHRlcm5zIGlzIG1hdGNoZWQgYW5kIE5PTkUgb2YgdGhlIG5lZ2F0aXZlIG9uZXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRHbG9iTWF0Y2hlcihwYXR0ZXJuczogc3RyaW5nW10pOiAodXJsOiBzdHJpbmcpID0+IGJvb2xlYW4ge1xuICBjb25zdCBwcm9jZXNzZWRQYXR0ZXJuczoge1xuICAgIHBvc2l0aXZlOiBib29sZWFuO1xuICAgIHJlZ2V4OiBSZWdFeHA7XG4gIH1bXSA9IHByb2Nlc3NHbG9iUGF0dGVybnMocGF0dGVybnMpLm1hcCgoeyBwb3NpdGl2ZSwgcmVnZXggfSkgPT4gKHtcbiAgICBwb3NpdGl2ZSxcbiAgICByZWdleDogbmV3IFJlZ0V4cChyZWdleCksXG4gIH0pKTtcblxuICBjb25zdCBpbmNsdWRlUGF0dGVybnMgPSBwcm9jZXNzZWRQYXR0ZXJucy5maWx0ZXIoc3BlYyA9PiBzcGVjLnBvc2l0aXZlKTtcbiAgY29uc3QgZXhjbHVkZVBhdHRlcm5zID0gcHJvY2Vzc2VkUGF0dGVybnMuZmlsdGVyKHNwZWMgPT4gIXNwZWMucG9zaXRpdmUpO1xuXG4gIHJldHVybiAodXJsOiBzdHJpbmcpID0+XG4gICAgaW5jbHVkZVBhdHRlcm5zLnNvbWUocGF0dGVybiA9PiBwYXR0ZXJuLnJlZ2V4LnRlc3QodXJsKSkgJiZcbiAgICAhZXhjbHVkZVBhdHRlcm5zLnNvbWUocGF0dGVybiA9PiBwYXR0ZXJuLnJlZ2V4LnRlc3QodXJsKSk7XG59XG5cbi8qKlxuICogQ29udmVydHMgbGlzdCBvZiBnbG9iLWxpa2UgcGF0dGVybnMgaW50byBsaXN0IG9mIFJlZ0V4cHMgd2l0aCBpbmZvcm1hdGlvbiB3aGV0aGVyIHRoZSBnbG9iIHBhdHRlcm4gaXMgcG9zaXRpdmUgb3IgbmVnYXRpdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHByb2Nlc3NHbG9iUGF0dGVybnMoXG4gIHVybHM6IHN0cmluZ1tdXG4pOiB7IHBvc2l0aXZlOiBib29sZWFuOyByZWdleDogc3RyaW5nIH1bXSB7XG4gIHJldHVybiB1cmxzLm1hcCh1cmwgPT4ge1xuICAgIGNvbnN0IHBvc2l0aXZlID0gIXVybC5zdGFydHNXaXRoKCchJyk7XG4gICAgdXJsID0gcG9zaXRpdmUgPyB1cmwgOiB1cmwuc3Vic3RyKDEpO1xuICAgIHJldHVybiB7IHBvc2l0aXZlLCByZWdleDogYF4ke2dsb2JUb1JlZ2V4KHVybCl9JGAgfTtcbiAgfSk7XG59XG4iXX0=
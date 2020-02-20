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
const QUESTION_MARK = '[^/]';
const WILD_SINGLE = '[^/]*';
const WILD_OPEN = '(?:.+\\/)?';
const TO_ESCAPE_BASE = [
    { replace: /\./g, with: '\\.' },
    { replace: /\+/g, with: '\\+' },
    { replace: /\*/g, with: WILD_SINGLE },
];
const TO_ESCAPE_WILDCARD_QM = [
    ...TO_ESCAPE_BASE,
    { replace: /\?/g, with: QUESTION_MARK },
];
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
 * `?` matches exactly one character excluding `/` (but when @param literalQuestionMark is true, `?` is treated as normal character)
 * The `!` prefix marks the pattern as being negative, meaning that only URLs that don't match the pattern will be included
 *
 * @param glob glob-like pattern
 * @param literalQuestionMark when true, it tells that `?` is treated as a normal character
 */
export function globToRegex(glob, literalQuestionMark = false) {
    const toEscape = literalQuestionMark
        ? TO_ESCAPE_LITERAL_QM
        : TO_ESCAPE_WILDCARD_QM;
    const segments = glob.split('/').reverse();
    let regex = '';
    while (segments.length > 0) {
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
            const processed = toEscape.reduce((seg, escape) => seg.replace(escape.replace, escape.with), segment);
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
 */
export function getGlobMatcher(patterns) {
    const processedPatterns = processGlobPatterns(patterns).map(({ positive, regex }) => ({
        positive,
        regex: new RegExp(regex),
    }));
    const includePatterns = processedPatterns.filter(spec => spec.positive);
    const excludePatterns = processedPatterns.filter(spec => !spec.positive);
    return (url) => includePatterns.some(pattern => pattern.regex.test(url)) &&
        !excludePatterns.some(pattern => pattern.regex.test(url));
}
/**
 * Converts list of glob-like patterns into list of RegExps with information whether the glob pattern is positive or negative
 */
export function processGlobPatterns(urls) {
    return urls.map(url => {
        const positive = !url.startsWith('!');
        url = positive ? url : url.substr(1);
        return { positive, regex: `^${globToRegex(url)}$` };
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYi11dGlscy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91dGlsL2dsb2ItdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztHQVNHO0FBRUgsTUFBTSxhQUFhLEdBQUcsTUFBTSxDQUFDO0FBQzdCLE1BQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQztBQUM1QixNQUFNLFNBQVMsR0FBRyxZQUFZLENBQUM7QUFDL0IsTUFBTSxjQUFjLEdBQUc7SUFDckIsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUU7SUFDL0IsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUU7SUFDL0IsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7Q0FDdEMsQ0FBQztBQUNGLE1BQU0scUJBQXFCLEdBQUc7SUFDNUIsR0FBRyxjQUFjO0lBQ2pCLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFO0NBQ3hDLENBQUM7QUFDRixNQUFNLG9CQUFvQixHQUFHO0lBQzNCLEdBQUcsY0FBYztJQUNqQixFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRTtDQUNoQyxDQUFDO0FBRUY7Ozs7Ozs7Ozs7O0dBV0c7QUFDSCxNQUFNLFVBQVUsV0FBVyxDQUFDLElBQVksRUFBRSxtQkFBbUIsR0FBRyxLQUFLO0lBQ25FLE1BQU0sUUFBUSxHQUFHLG1CQUFtQjtRQUNsQyxDQUFDLENBQUMsb0JBQW9CO1FBQ3RCLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQztJQUMxQixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzNDLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUNmLE9BQU8sUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7UUFDMUIsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQy9CLElBQUksT0FBTyxLQUFLLElBQUksRUFBRTtZQUNwQixJQUFJLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUN2QixLQUFLLElBQUksU0FBUyxDQUFDO2FBQ3BCO2lCQUFNO2dCQUNMLEtBQUssSUFBSSxJQUFJLENBQUM7YUFDZjtTQUNGO2FBQU07WUFDTCxNQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUMvQixDQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQ3pELE9BQU8sQ0FDUixDQUFDO1lBQ0YsS0FBSyxJQUFJLFNBQVMsQ0FBQztZQUNuQixJQUFJLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUN2QixLQUFLLElBQUksS0FBSyxDQUFDO2FBQ2hCO1NBQ0Y7S0FDRjtJQUNELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQztBQUVEOzs7O0dBSUc7QUFDSCxNQUFNLFVBQVUsY0FBYyxDQUFDLFFBQWtCO0lBQy9DLE1BQU0saUJBQWlCLEdBR2pCLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2hFLFFBQVE7UUFDUixLQUFLLEVBQUUsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDO0tBQ3pCLENBQUMsQ0FBQyxDQUFDO0lBRUosTUFBTSxlQUFlLEdBQUcsaUJBQWlCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3hFLE1BQU0sZUFBZSxHQUFHLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRXpFLE9BQU8sQ0FBQyxHQUFXLEVBQUUsRUFBRSxDQUNyQixlQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDeEQsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUM5RCxDQUFDO0FBRUQ7O0dBRUc7QUFDSCxNQUFNLFVBQVUsbUJBQW1CLENBQ2pDLElBQWM7SUFFZCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFDcEIsTUFBTSxRQUFRLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3RDLEdBQUcsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyQyxPQUFPLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxJQUFJLFdBQVcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDdEQsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogVGhlIE1JVCBMaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTAtMjAxOSBHb29nbGUgTExDLiBodHRwOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKlxuICogU2VlOlxuICogLSBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvNmY1ZjQ4MWZkYWUwM2YxZDhkYjM2Mjg0YjY0YzdiODJkOTUxOWQ4NS9wYWNrYWdlcy9zZXJ2aWNlLXdvcmtlci9jb25maWcvc3JjL2dsb2IudHNcbiAqIC0gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9ibG9iLzZmNWY0ODFmZGFlMDNmMWQ4ZGIzNjI4NGI2NGM3YjgyZDk1MTlkODUvYWlvL3Rlc3RzL2RlcGxveW1lbnQvc2hhcmVkL2hlbHBlcnMudHMjTDE3XG4gKiAtIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvYmxvYi82ZjVmNDgxZmRhZTAzZjFkOGRiMzYyODRiNjRjN2I4MmQ5NTE5ZDg1L3BhY2thZ2VzL3NlcnZpY2Utd29ya2VyL2NvbmZpZy9zcmMvZ2VuZXJhdG9yLnRzI0w4NlxuICovXG5cbmNvbnN0IFFVRVNUSU9OX01BUksgPSAnW14vXSc7XG5jb25zdCBXSUxEX1NJTkdMRSA9ICdbXi9dKic7XG5jb25zdCBXSUxEX09QRU4gPSAnKD86LitcXFxcLyk/JztcbmNvbnN0IFRPX0VTQ0FQRV9CQVNFID0gW1xuICB7IHJlcGxhY2U6IC9cXC4vZywgd2l0aDogJ1xcXFwuJyB9LFxuICB7IHJlcGxhY2U6IC9cXCsvZywgd2l0aDogJ1xcXFwrJyB9LFxuICB7IHJlcGxhY2U6IC9cXCovZywgd2l0aDogV0lMRF9TSU5HTEUgfSxcbl07XG5jb25zdCBUT19FU0NBUEVfV0lMRENBUkRfUU0gPSBbXG4gIC4uLlRPX0VTQ0FQRV9CQVNFLFxuICB7IHJlcGxhY2U6IC9cXD8vZywgd2l0aDogUVVFU1RJT05fTUFSSyB9LFxuXTtcbmNvbnN0IFRPX0VTQ0FQRV9MSVRFUkFMX1FNID0gW1xuICAuLi5UT19FU0NBUEVfQkFTRSxcbiAgeyByZXBsYWNlOiAvXFw/L2csIHdpdGg6ICdcXFxcPycgfSxcbl07XG5cbi8qKlxuICogQ29udmVydHMgdGhlIGdsb2ItbGlrZSBwYXR0ZXJuIGludG8gcmVnZXggc3RyaW5nLlxuICpcbiAqIFBhdHRlcm5zIHVzZSBhIGxpbWl0ZWQgZ2xvYiBmb3JtYXQ6XG4gKiBgKipgIG1hdGNoZXMgMCBvciBtb3JlIHBhdGggc2VnbWVudHNcbiAqIGAqYCBtYXRjaGVzIDAgb3IgbW9yZSBjaGFyYWN0ZXJzIGV4Y2x1ZGluZyBgL2BcbiAqIGA/YCBtYXRjaGVzIGV4YWN0bHkgb25lIGNoYXJhY3RlciBleGNsdWRpbmcgYC9gIChidXQgd2hlbiBAcGFyYW0gbGl0ZXJhbFF1ZXN0aW9uTWFyayBpcyB0cnVlLCBgP2AgaXMgdHJlYXRlZCBhcyBub3JtYWwgY2hhcmFjdGVyKVxuICogVGhlIGAhYCBwcmVmaXggbWFya3MgdGhlIHBhdHRlcm4gYXMgYmVpbmcgbmVnYXRpdmUsIG1lYW5pbmcgdGhhdCBvbmx5IFVSTHMgdGhhdCBkb24ndCBtYXRjaCB0aGUgcGF0dGVybiB3aWxsIGJlIGluY2x1ZGVkXG4gKlxuICogQHBhcmFtIGdsb2IgZ2xvYi1saWtlIHBhdHRlcm5cbiAqIEBwYXJhbSBsaXRlcmFsUXVlc3Rpb25NYXJrIHdoZW4gdHJ1ZSwgaXQgdGVsbHMgdGhhdCBgP2AgaXMgdHJlYXRlZCBhcyBhIG5vcm1hbCBjaGFyYWN0ZXJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdsb2JUb1JlZ2V4KGdsb2I6IHN0cmluZywgbGl0ZXJhbFF1ZXN0aW9uTWFyayA9IGZhbHNlKTogc3RyaW5nIHtcbiAgY29uc3QgdG9Fc2NhcGUgPSBsaXRlcmFsUXVlc3Rpb25NYXJrXG4gICAgPyBUT19FU0NBUEVfTElURVJBTF9RTVxuICAgIDogVE9fRVNDQVBFX1dJTERDQVJEX1FNO1xuICBjb25zdCBzZWdtZW50cyA9IGdsb2Iuc3BsaXQoJy8nKS5yZXZlcnNlKCk7XG4gIGxldCByZWdleCA9ICcnO1xuICB3aGlsZSAoc2VnbWVudHMubGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IHNlZ21lbnQgPSBzZWdtZW50cy5wb3AoKTtcbiAgICBpZiAoc2VnbWVudCA9PT0gJyoqJykge1xuICAgICAgaWYgKHNlZ21lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmVnZXggKz0gV0lMRF9PUEVOO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVnZXggKz0gJy4qJztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcHJvY2Vzc2VkID0gdG9Fc2NhcGUucmVkdWNlKFxuICAgICAgICAoc2VnLCBlc2NhcGUpID0+IHNlZy5yZXBsYWNlKGVzY2FwZS5yZXBsYWNlLCBlc2NhcGUud2l0aCksXG4gICAgICAgIHNlZ21lbnRcbiAgICAgICk7XG4gICAgICByZWdleCArPSBwcm9jZXNzZWQ7XG4gICAgICBpZiAoc2VnbWVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICByZWdleCArPSAnXFxcXC8nO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gcmVnZXg7XG59XG5cbi8qKlxuICogRm9yIGdpdmVuIGxpc3Qgb2YgZ2xvYi1saWtlIHBhdHRlcm5zLCByZXR1cm5zIGEgbWF0Y2hlciBmdW5jdGlvbi5cbiAqXG4gKiBUaGUgbWF0Y2hlciByZXR1cm5zIHRydWUgZm9yIGdpdmVuIFVSTCBvbmx5IHdoZW4gQU5ZIG9mIHRoZSBwb3NpdGl2ZSBwYXR0ZXJucyBpcyBtYXRjaGVkIGFuZCBOT05FIG9mIHRoZSBuZWdhdGl2ZSBvbmVzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0R2xvYk1hdGNoZXIocGF0dGVybnM6IHN0cmluZ1tdKTogKHVybDogc3RyaW5nKSA9PiBib29sZWFuIHtcbiAgY29uc3QgcHJvY2Vzc2VkUGF0dGVybnM6IHtcbiAgICBwb3NpdGl2ZTogYm9vbGVhbjtcbiAgICByZWdleDogUmVnRXhwO1xuICB9W10gPSBwcm9jZXNzR2xvYlBhdHRlcm5zKHBhdHRlcm5zKS5tYXAoKHsgcG9zaXRpdmUsIHJlZ2V4IH0pID0+ICh7XG4gICAgcG9zaXRpdmUsXG4gICAgcmVnZXg6IG5ldyBSZWdFeHAocmVnZXgpLFxuICB9KSk7XG5cbiAgY29uc3QgaW5jbHVkZVBhdHRlcm5zID0gcHJvY2Vzc2VkUGF0dGVybnMuZmlsdGVyKHNwZWMgPT4gc3BlYy5wb3NpdGl2ZSk7XG4gIGNvbnN0IGV4Y2x1ZGVQYXR0ZXJucyA9IHByb2Nlc3NlZFBhdHRlcm5zLmZpbHRlcihzcGVjID0+ICFzcGVjLnBvc2l0aXZlKTtcblxuICByZXR1cm4gKHVybDogc3RyaW5nKSA9PlxuICAgIGluY2x1ZGVQYXR0ZXJucy5zb21lKHBhdHRlcm4gPT4gcGF0dGVybi5yZWdleC50ZXN0KHVybCkpICYmXG4gICAgIWV4Y2x1ZGVQYXR0ZXJucy5zb21lKHBhdHRlcm4gPT4gcGF0dGVybi5yZWdleC50ZXN0KHVybCkpO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGxpc3Qgb2YgZ2xvYi1saWtlIHBhdHRlcm5zIGludG8gbGlzdCBvZiBSZWdFeHBzIHdpdGggaW5mb3JtYXRpb24gd2hldGhlciB0aGUgZ2xvYiBwYXR0ZXJuIGlzIHBvc2l0aXZlIG9yIG5lZ2F0aXZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZXNzR2xvYlBhdHRlcm5zKFxuICB1cmxzOiBzdHJpbmdbXVxuKTogeyBwb3NpdGl2ZTogYm9vbGVhbjsgcmVnZXg6IHN0cmluZyB9W10ge1xuICByZXR1cm4gdXJscy5tYXAodXJsID0+IHtcbiAgICBjb25zdCBwb3NpdGl2ZSA9ICF1cmwuc3RhcnRzV2l0aCgnIScpO1xuICAgIHVybCA9IHBvc2l0aXZlID8gdXJsIDogdXJsLnN1YnN0cigxKTtcbiAgICByZXR1cm4geyBwb3NpdGl2ZSwgcmVnZXg6IGBeJHtnbG9iVG9SZWdleCh1cmwpfSRgIH07XG4gIH0pO1xufVxuIl19
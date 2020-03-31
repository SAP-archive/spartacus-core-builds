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
import { __read, __spread } from "tslib";
var QUESTION_MARK = '[^/]';
var WILD_SINGLE = '[^/]*';
var WILD_OPEN = '(?:.+\\/)?';
var TO_ESCAPE_BASE = [
    { replace: /\./g, with: '\\.' },
    { replace: /\+/g, with: '\\+' },
    { replace: /\*/g, with: WILD_SINGLE },
];
var TO_ESCAPE_WILDCARD_QM = __spread(TO_ESCAPE_BASE, [
    { replace: /\?/g, with: QUESTION_MARK },
]);
var TO_ESCAPE_LITERAL_QM = __spread(TO_ESCAPE_BASE, [
    { replace: /\?/g, with: '\\?' },
]);
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
export function globToRegex(glob, literalQuestionMark) {
    if (literalQuestionMark === void 0) { literalQuestionMark = false; }
    var toEscape = literalQuestionMark
        ? TO_ESCAPE_LITERAL_QM
        : TO_ESCAPE_WILDCARD_QM;
    var segments = glob.split('/').reverse();
    var regex = '';
    while (segments.length > 0) {
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
            var processed = toEscape.reduce(function (seg, escape) { return seg.replace(escape.replace, escape.with); }, segment);
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
    var processedPatterns = processGlobPatterns(patterns).map(function (_a) {
        var positive = _a.positive, regex = _a.regex;
        return ({
            positive: positive,
            regex: new RegExp(regex),
        });
    });
    var includePatterns = processedPatterns.filter(function (spec) { return spec.positive; });
    var excludePatterns = processedPatterns.filter(function (spec) { return !spec.positive; });
    return function (url) {
        return includePatterns.some(function (pattern) { return pattern.regex.test(url); }) &&
            !excludePatterns.some(function (pattern) { return pattern.regex.test(url); });
    };
}
/**
 * Converts list of glob-like patterns into list of RegExps with information whether the glob pattern is positive or negative
 */
export function processGlobPatterns(urls) {
    return urls.map(function (url) {
        var positive = !url.startsWith('!');
        url = positive ? url : url.substr(1);
        return { positive: positive, regex: "^" + globToRegex(url) + "$" };
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYi11dGlscy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91dGlsL2dsb2ItdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztHQVNHOztBQUVILElBQU0sYUFBYSxHQUFHLE1BQU0sQ0FBQztBQUM3QixJQUFNLFdBQVcsR0FBRyxPQUFPLENBQUM7QUFDNUIsSUFBTSxTQUFTLEdBQUcsWUFBWSxDQUFDO0FBQy9CLElBQU0sY0FBYyxHQUFHO0lBQ3JCLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFO0lBQy9CLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFO0lBQy9CLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO0NBQ3RDLENBQUM7QUFDRixJQUFNLHFCQUFxQixZQUN0QixjQUFjO0lBQ2pCLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFO0VBQ3hDLENBQUM7QUFDRixJQUFNLG9CQUFvQixZQUNyQixjQUFjO0lBQ2pCLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFO0VBQ2hDLENBQUM7QUFFRjs7Ozs7Ozs7Ozs7R0FXRztBQUNILE1BQU0sVUFBVSxXQUFXLENBQUMsSUFBWSxFQUFFLG1CQUEyQjtJQUEzQixvQ0FBQSxFQUFBLDJCQUEyQjtJQUNuRSxJQUFNLFFBQVEsR0FBRyxtQkFBbUI7UUFDbEMsQ0FBQyxDQUFDLG9CQUFvQjtRQUN0QixDQUFDLENBQUMscUJBQXFCLENBQUM7SUFDMUIsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUMzQyxJQUFJLEtBQUssR0FBRyxFQUFFLENBQUM7SUFDZixPQUFPLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1FBQzFCLElBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUMvQixJQUFJLE9BQU8sS0FBSyxJQUFJLEVBQUU7WUFDcEIsSUFBSSxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDdkIsS0FBSyxJQUFJLFNBQVMsQ0FBQzthQUNwQjtpQkFBTTtnQkFDTCxLQUFLLElBQUksSUFBSSxDQUFDO2FBQ2Y7U0FDRjthQUFNO1lBQ0wsSUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FDL0IsVUFBQyxHQUFHLEVBQUUsTUFBTSxJQUFLLE9BQUEsR0FBRyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBeEMsQ0FBd0MsRUFDekQsT0FBTyxDQUNSLENBQUM7WUFDRixLQUFLLElBQUksU0FBUyxDQUFDO1lBQ25CLElBQUksUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ3ZCLEtBQUssSUFBSSxLQUFLLENBQUM7YUFDaEI7U0FDRjtLQUNGO0lBQ0QsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDO0FBRUQ7Ozs7R0FJRztBQUNILE1BQU0sVUFBVSxjQUFjLENBQUMsUUFBa0I7SUFDL0MsSUFBTSxpQkFBaUIsR0FHakIsbUJBQW1CLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUMsRUFBbUI7WUFBakIsc0JBQVEsRUFBRSxnQkFBSztRQUFPLE9BQUEsQ0FBQztZQUNoRSxRQUFRLFVBQUE7WUFDUixLQUFLLEVBQUUsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDO1NBQ3pCLENBQUM7SUFIK0QsQ0FHL0QsQ0FBQyxDQUFDO0lBRUosSUFBTSxlQUFlLEdBQUcsaUJBQWlCLENBQUMsTUFBTSxDQUFDLFVBQUMsSUFBSSxJQUFLLE9BQUEsSUFBSSxDQUFDLFFBQVEsRUFBYixDQUFhLENBQUMsQ0FBQztJQUMxRSxJQUFNLGVBQWUsR0FBRyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsVUFBQyxJQUFJLElBQUssT0FBQSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQWQsQ0FBYyxDQUFDLENBQUM7SUFFM0UsT0FBTyxVQUFDLEdBQVc7UUFDakIsT0FBQSxlQUFlLENBQUMsSUFBSSxDQUFDLFVBQUMsT0FBTyxJQUFLLE9BQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQXZCLENBQXVCLENBQUM7WUFDMUQsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFVBQUMsT0FBTyxJQUFLLE9BQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQXZCLENBQXVCLENBQUM7SUFEM0QsQ0FDMkQsQ0FBQztBQUNoRSxDQUFDO0FBRUQ7O0dBRUc7QUFDSCxNQUFNLFVBQVUsbUJBQW1CLENBQ2pDLElBQWM7SUFFZCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQyxHQUFHO1FBQ2xCLElBQU0sUUFBUSxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN0QyxHQUFHLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckMsT0FBTyxFQUFFLFFBQVEsVUFBQSxFQUFFLEtBQUssRUFBRSxNQUFJLFdBQVcsQ0FBQyxHQUFHLENBQUMsTUFBRyxFQUFFLENBQUM7SUFDdEQsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogVGhlIE1JVCBMaWNlbnNlXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTAtMjAxOSBHb29nbGUgTExDLiBodHRwOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKlxuICogU2VlOlxuICogLSBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvNmY1ZjQ4MWZkYWUwM2YxZDhkYjM2Mjg0YjY0YzdiODJkOTUxOWQ4NS9wYWNrYWdlcy9zZXJ2aWNlLXdvcmtlci9jb25maWcvc3JjL2dsb2IudHNcbiAqIC0gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9ibG9iLzZmNWY0ODFmZGFlMDNmMWQ4ZGIzNjI4NGI2NGM3YjgyZDk1MTlkODUvYWlvL3Rlc3RzL2RlcGxveW1lbnQvc2hhcmVkL2hlbHBlcnMudHMjTDE3XG4gKiAtIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvYmxvYi82ZjVmNDgxZmRhZTAzZjFkOGRiMzYyODRiNjRjN2I4MmQ5NTE5ZDg1L3BhY2thZ2VzL3NlcnZpY2Utd29ya2VyL2NvbmZpZy9zcmMvZ2VuZXJhdG9yLnRzI0w4NlxuICovXG5cbmNvbnN0IFFVRVNUSU9OX01BUksgPSAnW14vXSc7XG5jb25zdCBXSUxEX1NJTkdMRSA9ICdbXi9dKic7XG5jb25zdCBXSUxEX09QRU4gPSAnKD86LitcXFxcLyk/JztcbmNvbnN0IFRPX0VTQ0FQRV9CQVNFID0gW1xuICB7IHJlcGxhY2U6IC9cXC4vZywgd2l0aDogJ1xcXFwuJyB9LFxuICB7IHJlcGxhY2U6IC9cXCsvZywgd2l0aDogJ1xcXFwrJyB9LFxuICB7IHJlcGxhY2U6IC9cXCovZywgd2l0aDogV0lMRF9TSU5HTEUgfSxcbl07XG5jb25zdCBUT19FU0NBUEVfV0lMRENBUkRfUU0gPSBbXG4gIC4uLlRPX0VTQ0FQRV9CQVNFLFxuICB7IHJlcGxhY2U6IC9cXD8vZywgd2l0aDogUVVFU1RJT05fTUFSSyB9LFxuXTtcbmNvbnN0IFRPX0VTQ0FQRV9MSVRFUkFMX1FNID0gW1xuICAuLi5UT19FU0NBUEVfQkFTRSxcbiAgeyByZXBsYWNlOiAvXFw/L2csIHdpdGg6ICdcXFxcPycgfSxcbl07XG5cbi8qKlxuICogQ29udmVydHMgdGhlIGdsb2ItbGlrZSBwYXR0ZXJuIGludG8gcmVnZXggc3RyaW5nLlxuICpcbiAqIFBhdHRlcm5zIHVzZSBhIGxpbWl0ZWQgZ2xvYiBmb3JtYXQ6XG4gKiBgKipgIG1hdGNoZXMgMCBvciBtb3JlIHBhdGggc2VnbWVudHNcbiAqIGAqYCBtYXRjaGVzIDAgb3IgbW9yZSBjaGFyYWN0ZXJzIGV4Y2x1ZGluZyBgL2BcbiAqIGA/YCBtYXRjaGVzIGV4YWN0bHkgb25lIGNoYXJhY3RlciBleGNsdWRpbmcgYC9gIChidXQgd2hlbiBAcGFyYW0gbGl0ZXJhbFF1ZXN0aW9uTWFyayBpcyB0cnVlLCBgP2AgaXMgdHJlYXRlZCBhcyBub3JtYWwgY2hhcmFjdGVyKVxuICogVGhlIGAhYCBwcmVmaXggbWFya3MgdGhlIHBhdHRlcm4gYXMgYmVpbmcgbmVnYXRpdmUsIG1lYW5pbmcgdGhhdCBvbmx5IFVSTHMgdGhhdCBkb24ndCBtYXRjaCB0aGUgcGF0dGVybiB3aWxsIGJlIGluY2x1ZGVkXG4gKlxuICogQHBhcmFtIGdsb2IgZ2xvYi1saWtlIHBhdHRlcm5cbiAqIEBwYXJhbSBsaXRlcmFsUXVlc3Rpb25NYXJrIHdoZW4gdHJ1ZSwgaXQgdGVsbHMgdGhhdCBgP2AgaXMgdHJlYXRlZCBhcyBhIG5vcm1hbCBjaGFyYWN0ZXJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdsb2JUb1JlZ2V4KGdsb2I6IHN0cmluZywgbGl0ZXJhbFF1ZXN0aW9uTWFyayA9IGZhbHNlKTogc3RyaW5nIHtcbiAgY29uc3QgdG9Fc2NhcGUgPSBsaXRlcmFsUXVlc3Rpb25NYXJrXG4gICAgPyBUT19FU0NBUEVfTElURVJBTF9RTVxuICAgIDogVE9fRVNDQVBFX1dJTERDQVJEX1FNO1xuICBjb25zdCBzZWdtZW50cyA9IGdsb2Iuc3BsaXQoJy8nKS5yZXZlcnNlKCk7XG4gIGxldCByZWdleCA9ICcnO1xuICB3aGlsZSAoc2VnbWVudHMubGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IHNlZ21lbnQgPSBzZWdtZW50cy5wb3AoKTtcbiAgICBpZiAoc2VnbWVudCA9PT0gJyoqJykge1xuICAgICAgaWYgKHNlZ21lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmVnZXggKz0gV0lMRF9PUEVOO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVnZXggKz0gJy4qJztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcHJvY2Vzc2VkID0gdG9Fc2NhcGUucmVkdWNlKFxuICAgICAgICAoc2VnLCBlc2NhcGUpID0+IHNlZy5yZXBsYWNlKGVzY2FwZS5yZXBsYWNlLCBlc2NhcGUud2l0aCksXG4gICAgICAgIHNlZ21lbnRcbiAgICAgICk7XG4gICAgICByZWdleCArPSBwcm9jZXNzZWQ7XG4gICAgICBpZiAoc2VnbWVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICByZWdleCArPSAnXFxcXC8nO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gcmVnZXg7XG59XG5cbi8qKlxuICogRm9yIGdpdmVuIGxpc3Qgb2YgZ2xvYi1saWtlIHBhdHRlcm5zLCByZXR1cm5zIGEgbWF0Y2hlciBmdW5jdGlvbi5cbiAqXG4gKiBUaGUgbWF0Y2hlciByZXR1cm5zIHRydWUgZm9yIGdpdmVuIFVSTCBvbmx5IHdoZW4gQU5ZIG9mIHRoZSBwb3NpdGl2ZSBwYXR0ZXJucyBpcyBtYXRjaGVkIGFuZCBOT05FIG9mIHRoZSBuZWdhdGl2ZSBvbmVzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0R2xvYk1hdGNoZXIocGF0dGVybnM6IHN0cmluZ1tdKTogKHVybDogc3RyaW5nKSA9PiBib29sZWFuIHtcbiAgY29uc3QgcHJvY2Vzc2VkUGF0dGVybnM6IHtcbiAgICBwb3NpdGl2ZTogYm9vbGVhbjtcbiAgICByZWdleDogUmVnRXhwO1xuICB9W10gPSBwcm9jZXNzR2xvYlBhdHRlcm5zKHBhdHRlcm5zKS5tYXAoKHsgcG9zaXRpdmUsIHJlZ2V4IH0pID0+ICh7XG4gICAgcG9zaXRpdmUsXG4gICAgcmVnZXg6IG5ldyBSZWdFeHAocmVnZXgpLFxuICB9KSk7XG5cbiAgY29uc3QgaW5jbHVkZVBhdHRlcm5zID0gcHJvY2Vzc2VkUGF0dGVybnMuZmlsdGVyKChzcGVjKSA9PiBzcGVjLnBvc2l0aXZlKTtcbiAgY29uc3QgZXhjbHVkZVBhdHRlcm5zID0gcHJvY2Vzc2VkUGF0dGVybnMuZmlsdGVyKChzcGVjKSA9PiAhc3BlYy5wb3NpdGl2ZSk7XG5cbiAgcmV0dXJuICh1cmw6IHN0cmluZykgPT5cbiAgICBpbmNsdWRlUGF0dGVybnMuc29tZSgocGF0dGVybikgPT4gcGF0dGVybi5yZWdleC50ZXN0KHVybCkpICYmXG4gICAgIWV4Y2x1ZGVQYXR0ZXJucy5zb21lKChwYXR0ZXJuKSA9PiBwYXR0ZXJuLnJlZ2V4LnRlc3QodXJsKSk7XG59XG5cbi8qKlxuICogQ29udmVydHMgbGlzdCBvZiBnbG9iLWxpa2UgcGF0dGVybnMgaW50byBsaXN0IG9mIFJlZ0V4cHMgd2l0aCBpbmZvcm1hdGlvbiB3aGV0aGVyIHRoZSBnbG9iIHBhdHRlcm4gaXMgcG9zaXRpdmUgb3IgbmVnYXRpdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHByb2Nlc3NHbG9iUGF0dGVybnMoXG4gIHVybHM6IHN0cmluZ1tdXG4pOiB7IHBvc2l0aXZlOiBib29sZWFuOyByZWdleDogc3RyaW5nIH1bXSB7XG4gIHJldHVybiB1cmxzLm1hcCgodXJsKSA9PiB7XG4gICAgY29uc3QgcG9zaXRpdmUgPSAhdXJsLnN0YXJ0c1dpdGgoJyEnKTtcbiAgICB1cmwgPSBwb3NpdGl2ZSA/IHVybCA6IHVybC5zdWJzdHIoMSk7XG4gICAgcmV0dXJuIHsgcG9zaXRpdmUsIHJlZ2V4OiBgXiR7Z2xvYlRvUmVnZXgodXJsKX0kYCB9O1xuICB9KTtcbn1cbiJdfQ==
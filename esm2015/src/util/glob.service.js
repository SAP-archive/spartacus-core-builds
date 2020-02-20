import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { processGlobPatterns } from './glob-utils';
import * as i0 from "@angular/core";
let GlobService = class GlobService {
    /**
     * For given list of glob-like patterns, returns a validator function.
     *
     * The validator returns true for given URL only when ANY of the positive patterns is matched and NONE of the negative ones.
     */
    getValidator(patterns) {
        const processedPatterns = processGlobPatterns(patterns).map(({ positive, regex }) => ({
            positive,
            regex: new RegExp(regex),
        }));
        const includePatterns = processedPatterns.filter(spec => spec.positive);
        const excludePatterns = processedPatterns.filter(spec => !spec.positive);
        return (url) => includePatterns.some(pattern => pattern.regex.test(url)) &&
            !excludePatterns.some(pattern => pattern.regex.test(url));
    }
};
GlobService.ɵprov = i0.ɵɵdefineInjectable({ factory: function GlobService_Factory() { return new GlobService(); }, token: GlobService, providedIn: "root" });
GlobService = __decorate([
    Injectable({ providedIn: 'root' })
], GlobService);
export { GlobService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3V0aWwvZ2xvYi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7QUFHbkQsSUFBYSxXQUFXLEdBQXhCLE1BQWEsV0FBVztJQUN0Qjs7OztPQUlHO0lBQ0gsWUFBWSxDQUFDLFFBQWtCO1FBQzdCLE1BQU0saUJBQWlCLEdBR2pCLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ2hFLFFBQVE7WUFDUixLQUFLLEVBQUUsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDO1NBQ3pCLENBQUMsQ0FBQyxDQUFDO1FBRUosTUFBTSxlQUFlLEdBQUcsaUJBQWlCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3hFLE1BQU0sZUFBZSxHQUFHLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRXpFLE9BQU8sQ0FBQyxHQUFXLEVBQUUsRUFBRSxDQUNyQixlQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDeEQsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM5RCxDQUFDO0NBQ0YsQ0FBQTs7QUF0QlksV0FBVztJQUR2QixVQUFVLENBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLENBQUM7R0FDdEIsV0FBVyxDQXNCdkI7U0F0QlksV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHByb2Nlc3NHbG9iUGF0dGVybnMgfSBmcm9tICcuL2dsb2ItdXRpbHMnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIEdsb2JTZXJ2aWNlIHtcbiAgLyoqXG4gICAqIEZvciBnaXZlbiBsaXN0IG9mIGdsb2ItbGlrZSBwYXR0ZXJucywgcmV0dXJucyBhIHZhbGlkYXRvciBmdW5jdGlvbi5cbiAgICpcbiAgICogVGhlIHZhbGlkYXRvciByZXR1cm5zIHRydWUgZm9yIGdpdmVuIFVSTCBvbmx5IHdoZW4gQU5ZIG9mIHRoZSBwb3NpdGl2ZSBwYXR0ZXJucyBpcyBtYXRjaGVkIGFuZCBOT05FIG9mIHRoZSBuZWdhdGl2ZSBvbmVzLlxuICAgKi9cbiAgZ2V0VmFsaWRhdG9yKHBhdHRlcm5zOiBzdHJpbmdbXSk6ICh1cmw6IHN0cmluZykgPT4gYm9vbGVhbiB7XG4gICAgY29uc3QgcHJvY2Vzc2VkUGF0dGVybnM6IHtcbiAgICAgIHBvc2l0aXZlOiBib29sZWFuO1xuICAgICAgcmVnZXg6IFJlZ0V4cDtcbiAgICB9W10gPSBwcm9jZXNzR2xvYlBhdHRlcm5zKHBhdHRlcm5zKS5tYXAoKHsgcG9zaXRpdmUsIHJlZ2V4IH0pID0+ICh7XG4gICAgICBwb3NpdGl2ZSxcbiAgICAgIHJlZ2V4OiBuZXcgUmVnRXhwKHJlZ2V4KSxcbiAgICB9KSk7XG5cbiAgICBjb25zdCBpbmNsdWRlUGF0dGVybnMgPSBwcm9jZXNzZWRQYXR0ZXJucy5maWx0ZXIoc3BlYyA9PiBzcGVjLnBvc2l0aXZlKTtcbiAgICBjb25zdCBleGNsdWRlUGF0dGVybnMgPSBwcm9jZXNzZWRQYXR0ZXJucy5maWx0ZXIoc3BlYyA9PiAhc3BlYy5wb3NpdGl2ZSk7XG5cbiAgICByZXR1cm4gKHVybDogc3RyaW5nKSA9PlxuICAgICAgaW5jbHVkZVBhdHRlcm5zLnNvbWUocGF0dGVybiA9PiBwYXR0ZXJuLnJlZ2V4LnRlc3QodXJsKSkgJiZcbiAgICAgICFleGNsdWRlUGF0dGVybnMuc29tZShwYXR0ZXJuID0+IHBhdHRlcm4ucmVnZXgudGVzdCh1cmwpKTtcbiAgfVxufVxuIl19
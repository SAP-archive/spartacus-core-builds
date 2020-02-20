import { __decorate } from "tslib";
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
    GlobService.prototype.getValidator = function (patterns) {
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
    };
    GlobService.ɵprov = i0.ɵɵdefineInjectable({ factory: function GlobService_Factory() { return new GlobService(); }, token: GlobService, providedIn: "root" });
    GlobService = __decorate([
        Injectable({ providedIn: 'root' })
    ], GlobService);
    return GlobService;
}());
export { GlobService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3V0aWwvZ2xvYi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7QUFHbkQ7SUFBQTtLQXNCQztJQXJCQzs7OztPQUlHO0lBQ0gsa0NBQVksR0FBWixVQUFhLFFBQWtCO1FBQzdCLElBQU0saUJBQWlCLEdBR2pCLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFDLEVBQW1CO2dCQUFqQixzQkFBUSxFQUFFLGdCQUFLO1lBQU8sT0FBQSxDQUFDO2dCQUNoRSxRQUFRLFVBQUE7Z0JBQ1IsS0FBSyxFQUFFLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQzthQUN6QixDQUFDO1FBSCtELENBRy9ELENBQUMsQ0FBQztRQUVKLElBQU0sZUFBZSxHQUFHLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxRQUFRLEVBQWIsQ0FBYSxDQUFDLENBQUM7UUFDeEUsSUFBTSxlQUFlLEdBQUcsaUJBQWlCLENBQUMsTUFBTSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFkLENBQWMsQ0FBQyxDQUFDO1FBRXpFLE9BQU8sVUFBQyxHQUFXO1lBQ2pCLE9BQUEsZUFBZSxDQUFDLElBQUksQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUF2QixDQUF1QixDQUFDO2dCQUN4RCxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsVUFBQSxPQUFPLElBQUksT0FBQSxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBdkIsQ0FBdUIsQ0FBQztRQUR6RCxDQUN5RCxDQUFDO0lBQzlELENBQUM7O0lBckJVLFdBQVc7UUFEdkIsVUFBVSxDQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxDQUFDO09BQ3RCLFdBQVcsQ0FzQnZCO3NCQTFCRDtDQTBCQyxBQXRCRCxJQXNCQztTQXRCWSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgcHJvY2Vzc0dsb2JQYXR0ZXJucyB9IGZyb20gJy4vZ2xvYi11dGlscyc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgR2xvYlNlcnZpY2Uge1xuICAvKipcbiAgICogRm9yIGdpdmVuIGxpc3Qgb2YgZ2xvYi1saWtlIHBhdHRlcm5zLCByZXR1cm5zIGEgdmFsaWRhdG9yIGZ1bmN0aW9uLlxuICAgKlxuICAgKiBUaGUgdmFsaWRhdG9yIHJldHVybnMgdHJ1ZSBmb3IgZ2l2ZW4gVVJMIG9ubHkgd2hlbiBBTlkgb2YgdGhlIHBvc2l0aXZlIHBhdHRlcm5zIGlzIG1hdGNoZWQgYW5kIE5PTkUgb2YgdGhlIG5lZ2F0aXZlIG9uZXMuXG4gICAqL1xuICBnZXRWYWxpZGF0b3IocGF0dGVybnM6IHN0cmluZ1tdKTogKHVybDogc3RyaW5nKSA9PiBib29sZWFuIHtcbiAgICBjb25zdCBwcm9jZXNzZWRQYXR0ZXJuczoge1xuICAgICAgcG9zaXRpdmU6IGJvb2xlYW47XG4gICAgICByZWdleDogUmVnRXhwO1xuICAgIH1bXSA9IHByb2Nlc3NHbG9iUGF0dGVybnMocGF0dGVybnMpLm1hcCgoeyBwb3NpdGl2ZSwgcmVnZXggfSkgPT4gKHtcbiAgICAgIHBvc2l0aXZlLFxuICAgICAgcmVnZXg6IG5ldyBSZWdFeHAocmVnZXgpLFxuICAgIH0pKTtcblxuICAgIGNvbnN0IGluY2x1ZGVQYXR0ZXJucyA9IHByb2Nlc3NlZFBhdHRlcm5zLmZpbHRlcihzcGVjID0+IHNwZWMucG9zaXRpdmUpO1xuICAgIGNvbnN0IGV4Y2x1ZGVQYXR0ZXJucyA9IHByb2Nlc3NlZFBhdHRlcm5zLmZpbHRlcihzcGVjID0+ICFzcGVjLnBvc2l0aXZlKTtcblxuICAgIHJldHVybiAodXJsOiBzdHJpbmcpID0+XG4gICAgICBpbmNsdWRlUGF0dGVybnMuc29tZShwYXR0ZXJuID0+IHBhdHRlcm4ucmVnZXgudGVzdCh1cmwpKSAmJlxuICAgICAgIWV4Y2x1ZGVQYXR0ZXJucy5zb21lKHBhdHRlcm4gPT4gcGF0dGVybi5yZWdleC50ZXN0KHVybCkpO1xuICB9XG59XG4iXX0=
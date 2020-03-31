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
        const includePatterns = processedPatterns.filter((spec) => spec.positive);
        const excludePatterns = processedPatterns.filter((spec) => !spec.positive);
        return (url) => includePatterns.some((pattern) => pattern.regex.test(url)) &&
            !excludePatterns.some((pattern) => pattern.regex.test(url));
    }
};
GlobService.ɵprov = i0.ɵɵdefineInjectable({ factory: function GlobService_Factory() { return new GlobService(); }, token: GlobService, providedIn: "root" });
GlobService = __decorate([
    Injectable({ providedIn: 'root' })
], GlobService);
export { GlobService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3V0aWwvZ2xvYi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGNBQWMsQ0FBQzs7QUFHbkQsSUFBYSxXQUFXLEdBQXhCLE1BQWEsV0FBVztJQUN0Qjs7OztPQUlHO0lBQ0gsWUFBWSxDQUFDLFFBQWtCO1FBQzdCLE1BQU0saUJBQWlCLEdBR2pCLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ2hFLFFBQVE7WUFDUixLQUFLLEVBQUUsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDO1NBQ3pCLENBQUMsQ0FBQyxDQUFDO1FBRUosTUFBTSxlQUFlLEdBQUcsaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDMUUsTUFBTSxlQUFlLEdBQUcsaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUUzRSxPQUFPLENBQUMsR0FBVyxFQUFFLEVBQUUsQ0FDckIsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDMUQsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7Q0FDRixDQUFBOztBQXRCWSxXQUFXO0lBRHZCLFVBQVUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsQ0FBQztHQUN0QixXQUFXLENBc0J2QjtTQXRCWSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgcHJvY2Vzc0dsb2JQYXR0ZXJucyB9IGZyb20gJy4vZ2xvYi11dGlscyc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgR2xvYlNlcnZpY2Uge1xuICAvKipcbiAgICogRm9yIGdpdmVuIGxpc3Qgb2YgZ2xvYi1saWtlIHBhdHRlcm5zLCByZXR1cm5zIGEgdmFsaWRhdG9yIGZ1bmN0aW9uLlxuICAgKlxuICAgKiBUaGUgdmFsaWRhdG9yIHJldHVybnMgdHJ1ZSBmb3IgZ2l2ZW4gVVJMIG9ubHkgd2hlbiBBTlkgb2YgdGhlIHBvc2l0aXZlIHBhdHRlcm5zIGlzIG1hdGNoZWQgYW5kIE5PTkUgb2YgdGhlIG5lZ2F0aXZlIG9uZXMuXG4gICAqL1xuICBnZXRWYWxpZGF0b3IocGF0dGVybnM6IHN0cmluZ1tdKTogKHVybDogc3RyaW5nKSA9PiBib29sZWFuIHtcbiAgICBjb25zdCBwcm9jZXNzZWRQYXR0ZXJuczoge1xuICAgICAgcG9zaXRpdmU6IGJvb2xlYW47XG4gICAgICByZWdleDogUmVnRXhwO1xuICAgIH1bXSA9IHByb2Nlc3NHbG9iUGF0dGVybnMocGF0dGVybnMpLm1hcCgoeyBwb3NpdGl2ZSwgcmVnZXggfSkgPT4gKHtcbiAgICAgIHBvc2l0aXZlLFxuICAgICAgcmVnZXg6IG5ldyBSZWdFeHAocmVnZXgpLFxuICAgIH0pKTtcblxuICAgIGNvbnN0IGluY2x1ZGVQYXR0ZXJucyA9IHByb2Nlc3NlZFBhdHRlcm5zLmZpbHRlcigoc3BlYykgPT4gc3BlYy5wb3NpdGl2ZSk7XG4gICAgY29uc3QgZXhjbHVkZVBhdHRlcm5zID0gcHJvY2Vzc2VkUGF0dGVybnMuZmlsdGVyKChzcGVjKSA9PiAhc3BlYy5wb3NpdGl2ZSk7XG5cbiAgICByZXR1cm4gKHVybDogc3RyaW5nKSA9PlxuICAgICAgaW5jbHVkZVBhdHRlcm5zLnNvbWUoKHBhdHRlcm4pID0+IHBhdHRlcm4ucmVnZXgudGVzdCh1cmwpKSAmJlxuICAgICAgIWV4Y2x1ZGVQYXR0ZXJucy5zb21lKChwYXR0ZXJuKSA9PiBwYXR0ZXJuLnJlZ2V4LnRlc3QodXJsKSk7XG4gIH1cbn1cbiJdfQ==
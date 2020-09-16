import { Injectable } from '@angular/core';
import { processGlobPatterns } from './glob-utils';
import * as i0 from "@angular/core";
export class GlobService {
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
}
GlobService.ɵprov = i0.ɵɵdefineInjectable({ factory: function GlobService_Factory() { return new GlobService(); }, token: GlobService, providedIn: "root" });
GlobService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS9zcmMvdXRpbC9nbG9iLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxjQUFjLENBQUM7O0FBR25ELE1BQU0sT0FBTyxXQUFXO0lBQ3RCOzs7O09BSUc7SUFDSCxZQUFZLENBQUMsUUFBa0I7UUFDN0IsTUFBTSxpQkFBaUIsR0FHakIsbUJBQW1CLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDaEUsUUFBUTtZQUNSLEtBQUssRUFBRSxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUM7U0FDekIsQ0FBQyxDQUFDLENBQUM7UUFFSixNQUFNLGVBQWUsR0FBRyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMxRSxNQUFNLGVBQWUsR0FBRyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRTNFLE9BQU8sQ0FBQyxHQUFXLEVBQUUsRUFBRSxDQUNyQixlQUFlLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMxRCxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDaEUsQ0FBQzs7OztZQXRCRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgcHJvY2Vzc0dsb2JQYXR0ZXJucyB9IGZyb20gJy4vZ2xvYi11dGlscyc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgR2xvYlNlcnZpY2Uge1xuICAvKipcbiAgICogRm9yIGdpdmVuIGxpc3Qgb2YgZ2xvYi1saWtlIHBhdHRlcm5zLCByZXR1cm5zIGEgdmFsaWRhdG9yIGZ1bmN0aW9uLlxuICAgKlxuICAgKiBUaGUgdmFsaWRhdG9yIHJldHVybnMgdHJ1ZSBmb3IgZ2l2ZW4gVVJMIG9ubHkgd2hlbiBBTlkgb2YgdGhlIHBvc2l0aXZlIHBhdHRlcm5zIGlzIG1hdGNoZWQgYW5kIE5PTkUgb2YgdGhlIG5lZ2F0aXZlIG9uZXMuXG4gICAqL1xuICBnZXRWYWxpZGF0b3IocGF0dGVybnM6IHN0cmluZ1tdKTogKHVybDogc3RyaW5nKSA9PiBib29sZWFuIHtcbiAgICBjb25zdCBwcm9jZXNzZWRQYXR0ZXJuczoge1xuICAgICAgcG9zaXRpdmU6IGJvb2xlYW47XG4gICAgICByZWdleDogUmVnRXhwO1xuICAgIH1bXSA9IHByb2Nlc3NHbG9iUGF0dGVybnMocGF0dGVybnMpLm1hcCgoeyBwb3NpdGl2ZSwgcmVnZXggfSkgPT4gKHtcbiAgICAgIHBvc2l0aXZlLFxuICAgICAgcmVnZXg6IG5ldyBSZWdFeHAocmVnZXgpLFxuICAgIH0pKTtcblxuICAgIGNvbnN0IGluY2x1ZGVQYXR0ZXJucyA9IHByb2Nlc3NlZFBhdHRlcm5zLmZpbHRlcigoc3BlYykgPT4gc3BlYy5wb3NpdGl2ZSk7XG4gICAgY29uc3QgZXhjbHVkZVBhdHRlcm5zID0gcHJvY2Vzc2VkUGF0dGVybnMuZmlsdGVyKChzcGVjKSA9PiAhc3BlYy5wb3NpdGl2ZSk7XG5cbiAgICByZXR1cm4gKHVybDogc3RyaW5nKSA9PlxuICAgICAgaW5jbHVkZVBhdHRlcm5zLnNvbWUoKHBhdHRlcm4pID0+IHBhdHRlcm4ucmVnZXgudGVzdCh1cmwpKSAmJlxuICAgICAgIWV4Y2x1ZGVQYXR0ZXJucy5zb21lKChwYXR0ZXJuKSA9PiBwYXR0ZXJuLnJlZ2V4LnRlc3QodXJsKSk7XG4gIH1cbn1cbiJdfQ==
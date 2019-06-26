/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isDevMode, Pipe } from '@angular/core';
import { DatePipe, getLocaleId } from '@angular/common';
import { LanguageService } from '../site-context/facade/language.service';
// type CxDatePipe, not DatePipe, due to conflict with Angular's DatePipe - problem occurs for the backward compatibility compiler of Ivy
export class CxDatePipe extends DatePipe {
    /**
     * @param {?} language
     */
    constructor(language) {
        super(null);
        this.language = language;
    }
    /**
     * @param {?} value
     * @param {?=} format
     * @param {?=} timezone
     * @return {?}
     */
    transform(value, format, timezone) {
        return super.transform(value, format, timezone, this.getLang());
    }
    /**
     * @private
     * @return {?}
     */
    getLang() {
        /** @type {?} */
        const lang = this.getActiveLang();
        try {
            getLocaleId(lang);
            return lang;
        }
        catch (_a) {
            this.reportMissingLocaleData(lang);
            return 'en';
        }
    }
    /**
     * @private
     * @return {?}
     */
    getActiveLang() {
        /** @type {?} */
        let result;
        this.language
            .getActive()
            .subscribe((/**
         * @param {?} lang
         * @return {?}
         */
        lang => (result = lang)))
            .unsubscribe();
        return result;
    }
    /**
     * @private
     * @param {?} lang
     * @return {?}
     */
    reportMissingLocaleData(lang) {
        if (isDevMode()) {
            console.warn(`cxDate pipe: No locale data registered for '${lang}' (see https://angular.io/api/common/registerLocaleData).`);
        }
    }
}
CxDatePipe.decorators = [
    { type: Pipe, args: [{ name: 'cxDate' },] }
];
/** @nocollapse */
CxDatePipe.ctorParameters = () => [
    { type: LanguageService }
];
if (false) {
    /**
     * @type {?}
     * @protected
     */
    CxDatePipe.prototype.language;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2kxOG4vZGF0ZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDL0QsT0FBTyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0seUNBQXlDLENBQUM7O0FBSTFFLE1BQU0sT0FBTyxVQUFXLFNBQVEsUUFBUTs7OztJQUN0QyxZQUFzQixRQUF5QjtRQUM3QyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFEUSxhQUFRLEdBQVIsUUFBUSxDQUFpQjtJQUUvQyxDQUFDOzs7Ozs7O0lBRUQsU0FBUyxDQUFDLEtBQVUsRUFBRSxNQUFlLEVBQUUsUUFBaUI7UUFDdEQsT0FBTyxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7Ozs7O0lBRU8sT0FBTzs7Y0FDUCxJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRTtRQUNqQyxJQUFJO1lBQ0YsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xCLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFBQyxXQUFNO1lBQ04sSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ25DLE9BQU8sSUFBSSxDQUFDO1NBQ2I7SUFDSCxDQUFDOzs7OztJQUVPLGFBQWE7O1lBQ2YsTUFBTTtRQUNWLElBQUksQ0FBQyxRQUFRO2FBQ1YsU0FBUyxFQUFFO2FBQ1gsU0FBUzs7OztRQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEVBQUM7YUFDbEMsV0FBVyxFQUFFLENBQUM7UUFDakIsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7Ozs7O0lBRU8sdUJBQXVCLENBQUMsSUFBWTtRQUMxQyxJQUFJLFNBQVMsRUFBRSxFQUFFO1lBQ2YsT0FBTyxDQUFDLElBQUksQ0FDViwrQ0FBK0MsSUFBSSwyREFBMkQsQ0FDL0csQ0FBQztTQUNIO0lBQ0gsQ0FBQzs7O1lBcENGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUU7Ozs7WUFIZixlQUFlOzs7Ozs7O0lBS1YsOEJBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNEZXZNb2RlLCBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRlUGlwZSwgZ2V0TG9jYWxlSWQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTGFuZ3VhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vc2l0ZS1jb250ZXh0L2ZhY2FkZS9sYW5ndWFnZS5zZXJ2aWNlJztcblxuLy8gdHlwZSBDeERhdGVQaXBlLCBub3QgRGF0ZVBpcGUsIGR1ZSB0byBjb25mbGljdCB3aXRoIEFuZ3VsYXIncyBEYXRlUGlwZSAtIHByb2JsZW0gb2NjdXJzIGZvciB0aGUgYmFja3dhcmQgY29tcGF0aWJpbGl0eSBjb21waWxlciBvZiBJdnlcbkBQaXBlKHsgbmFtZTogJ2N4RGF0ZScgfSlcbmV4cG9ydCBjbGFzcyBDeERhdGVQaXBlIGV4dGVuZHMgRGF0ZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGxhbmd1YWdlOiBMYW5ndWFnZVNlcnZpY2UpIHtcbiAgICBzdXBlcihudWxsKTtcbiAgfVxuXG4gIHRyYW5zZm9ybSh2YWx1ZTogYW55LCBmb3JtYXQ/OiBzdHJpbmcsIHRpbWV6b25lPzogc3RyaW5nKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgcmV0dXJuIHN1cGVyLnRyYW5zZm9ybSh2YWx1ZSwgZm9ybWF0LCB0aW1lem9uZSwgdGhpcy5nZXRMYW5nKCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRMYW5nKCkge1xuICAgIGNvbnN0IGxhbmcgPSB0aGlzLmdldEFjdGl2ZUxhbmcoKTtcbiAgICB0cnkge1xuICAgICAgZ2V0TG9jYWxlSWQobGFuZyk7XG4gICAgICByZXR1cm4gbGFuZztcbiAgICB9IGNhdGNoIHtcbiAgICAgIHRoaXMucmVwb3J0TWlzc2luZ0xvY2FsZURhdGEobGFuZyk7XG4gICAgICByZXR1cm4gJ2VuJztcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldEFjdGl2ZUxhbmcoKTogc3RyaW5nIHtcbiAgICBsZXQgcmVzdWx0O1xuICAgIHRoaXMubGFuZ3VhZ2VcbiAgICAgIC5nZXRBY3RpdmUoKVxuICAgICAgLnN1YnNjcmliZShsYW5nID0+IChyZXN1bHQgPSBsYW5nKSlcbiAgICAgIC51bnN1YnNjcmliZSgpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBwcml2YXRlIHJlcG9ydE1pc3NpbmdMb2NhbGVEYXRhKGxhbmc6IHN0cmluZykge1xuICAgIGlmIChpc0Rldk1vZGUoKSkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgY3hEYXRlIHBpcGU6IE5vIGxvY2FsZSBkYXRhIHJlZ2lzdGVyZWQgZm9yICcke2xhbmd9JyAoc2VlIGh0dHBzOi8vYW5ndWxhci5pby9hcGkvY29tbW9uL3JlZ2lzdGVyTG9jYWxlRGF0YSkuYFxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==
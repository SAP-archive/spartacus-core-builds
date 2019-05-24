/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
import { DatePipe } from '@angular/common';
import { getLocaleId } from '@angular/common';
import { LanguageService } from '../site-context/facade/language.service';
import { I18nConfig } from './config/i18n-config';
// type CxDatePipe, not DatePipe, due to conflict with Angular's DatePipe - problem occurs for the backward compatibility compiler of Ivy
var CxDatePipe = /** @class */ (function (_super) {
    tslib_1.__extends(CxDatePipe, _super);
    function CxDatePipe(language, config) {
        var _this = _super.call(this, null) || this;
        _this.language = language;
        _this.config = config;
        return _this;
    }
    /**
     * @param {?} value
     * @param {?=} format
     * @param {?=} timezone
     * @return {?}
     */
    CxDatePipe.prototype.transform = /**
     * @param {?} value
     * @param {?=} format
     * @param {?=} timezone
     * @return {?}
     */
    function (value, format, timezone) {
        return _super.prototype.transform.call(this, value, format, timezone, this.getLang());
    };
    /**
     * @private
     * @return {?}
     */
    CxDatePipe.prototype.getLang = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var lang = this.getActiveLang();
        try {
            getLocaleId(lang);
            return lang;
        }
        catch (_a) {
            this.reportMissingLocaleData(lang);
            return 'en';
        }
    };
    /**
     * @private
     * @return {?}
     */
    CxDatePipe.prototype.getActiveLang = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result;
        this.language
            .getActive()
            .subscribe(function (lang) { return (result = lang); })
            .unsubscribe();
        return result;
    };
    /**
     * @private
     * @param {?} lang
     * @return {?}
     */
    CxDatePipe.prototype.reportMissingLocaleData = /**
     * @private
     * @param {?} lang
     * @return {?}
     */
    function (lang) {
        if (!this.config.production) {
            console.warn("cxDate pipe: No locale data registered for '" + lang + "' (see https://angular.io/api/common/registerLocaleData).");
        }
    };
    CxDatePipe.decorators = [
        { type: Pipe, args: [{ name: 'cxDate' },] }
    ];
    /** @nocollapse */
    CxDatePipe.ctorParameters = function () { return [
        { type: LanguageService },
        { type: I18nConfig }
    ]; };
    return CxDatePipe;
}(DatePipe));
export { CxDatePipe };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    CxDatePipe.prototype.language;
    /**
     * @type {?}
     * @protected
     */
    CxDatePipe.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2kxOG4vZGF0ZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM5QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDMUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDOztBQUdsRDtJQUNnQyxzQ0FBUTtJQUN0QyxvQkFDWSxRQUF5QixFQUN6QixNQUFrQjtRQUY5QixZQUlFLGtCQUFNLElBQUksQ0FBQyxTQUNaO1FBSlcsY0FBUSxHQUFSLFFBQVEsQ0FBaUI7UUFDekIsWUFBTSxHQUFOLE1BQU0sQ0FBWTs7SUFHOUIsQ0FBQzs7Ozs7OztJQUVELDhCQUFTOzs7Ozs7SUFBVCxVQUFVLEtBQVUsRUFBRSxNQUFlLEVBQUUsUUFBaUI7UUFDdEQsT0FBTyxpQkFBTSxTQUFTLFlBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDbEUsQ0FBQzs7Ozs7SUFFTyw0QkFBTzs7OztJQUFmOztZQUNRLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFO1FBQ2pDLElBQUk7WUFDRixXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEIsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUFDLFdBQU07WUFDTixJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbkMsT0FBTyxJQUFJLENBQUM7U0FDYjtJQUNILENBQUM7Ozs7O0lBRU8sa0NBQWE7Ozs7SUFBckI7O1lBQ00sTUFBTTtRQUNWLElBQUksQ0FBQyxRQUFRO2FBQ1YsU0FBUyxFQUFFO2FBQ1gsU0FBUyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEVBQWYsQ0FBZSxDQUFDO2FBQ2xDLFdBQVcsRUFBRSxDQUFDO1FBQ2pCLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7Ozs7OztJQUVPLDRDQUF1Qjs7Ozs7SUFBL0IsVUFBZ0MsSUFBWTtRQUMxQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUU7WUFDM0IsT0FBTyxDQUFDLElBQUksQ0FDVixpREFBK0MsSUFBSSw4REFBMkQsQ0FDL0csQ0FBQztTQUNIO0lBQ0gsQ0FBQzs7Z0JBdkNGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUU7Ozs7Z0JBSmYsZUFBZTtnQkFDZixVQUFVOztJQTJDbkIsaUJBQUM7Q0FBQSxBQXhDRCxDQUNnQyxRQUFRLEdBdUN2QztTQXZDWSxVQUFVOzs7Ozs7SUFFbkIsOEJBQW1DOzs7OztJQUNuQyw0QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRlUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBnZXRMb2NhbGVJZCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBMYW5ndWFnZVNlcnZpY2UgfSBmcm9tICcuLi9zaXRlLWNvbnRleHQvZmFjYWRlL2xhbmd1YWdlLnNlcnZpY2UnO1xuaW1wb3J0IHsgSTE4bkNvbmZpZyB9IGZyb20gJy4vY29uZmlnL2kxOG4tY29uZmlnJztcblxuLy8gdHlwZSBDeERhdGVQaXBlLCBub3QgRGF0ZVBpcGUsIGR1ZSB0byBjb25mbGljdCB3aXRoIEFuZ3VsYXIncyBEYXRlUGlwZSAtIHByb2JsZW0gb2NjdXJzIGZvciB0aGUgYmFja3dhcmQgY29tcGF0aWJpbGl0eSBjb21waWxlciBvZiBJdnlcbkBQaXBlKHsgbmFtZTogJ2N4RGF0ZScgfSlcbmV4cG9ydCBjbGFzcyBDeERhdGVQaXBlIGV4dGVuZHMgRGF0ZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGxhbmd1YWdlOiBMYW5ndWFnZVNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNvbmZpZzogSTE4bkNvbmZpZ1xuICApIHtcbiAgICBzdXBlcihudWxsKTtcbiAgfVxuXG4gIHRyYW5zZm9ybSh2YWx1ZTogYW55LCBmb3JtYXQ/OiBzdHJpbmcsIHRpbWV6b25lPzogc3RyaW5nKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgcmV0dXJuIHN1cGVyLnRyYW5zZm9ybSh2YWx1ZSwgZm9ybWF0LCB0aW1lem9uZSwgdGhpcy5nZXRMYW5nKCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRMYW5nKCkge1xuICAgIGNvbnN0IGxhbmcgPSB0aGlzLmdldEFjdGl2ZUxhbmcoKTtcbiAgICB0cnkge1xuICAgICAgZ2V0TG9jYWxlSWQobGFuZyk7XG4gICAgICByZXR1cm4gbGFuZztcbiAgICB9IGNhdGNoIHtcbiAgICAgIHRoaXMucmVwb3J0TWlzc2luZ0xvY2FsZURhdGEobGFuZyk7XG4gICAgICByZXR1cm4gJ2VuJztcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldEFjdGl2ZUxhbmcoKTogc3RyaW5nIHtcbiAgICBsZXQgcmVzdWx0O1xuICAgIHRoaXMubGFuZ3VhZ2VcbiAgICAgIC5nZXRBY3RpdmUoKVxuICAgICAgLnN1YnNjcmliZShsYW5nID0+IChyZXN1bHQgPSBsYW5nKSlcbiAgICAgIC51bnN1YnNjcmliZSgpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBwcml2YXRlIHJlcG9ydE1pc3NpbmdMb2NhbGVEYXRhKGxhbmc6IHN0cmluZykge1xuICAgIGlmICghdGhpcy5jb25maWcucHJvZHVjdGlvbikge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgY3hEYXRlIHBpcGU6IE5vIGxvY2FsZSBkYXRhIHJlZ2lzdGVyZWQgZm9yICcke2xhbmd9JyAoc2VlIGh0dHBzOi8vYW5ndWxhci5pby9hcGkvY29tbW9uL3JlZ2lzdGVyTG9jYWxlRGF0YSkuYFxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==
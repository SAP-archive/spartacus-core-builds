/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
import { DatePipe as NativeDatePipe } from '@angular/common';
import { getLocaleId } from '@angular/common';
import { LanguageService } from '../site-context/facade/language.service';
import { I18nConfig } from './config/i18n-config';
var DatePipe = /** @class */ (function (_super) {
    tslib_1.__extends(DatePipe, _super);
    function DatePipe(language, config) {
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
    DatePipe.prototype.transform = /**
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
    DatePipe.prototype.getLang = /**
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
    DatePipe.prototype.getActiveLang = /**
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
    DatePipe.prototype.reportMissingLocaleData = /**
     * @private
     * @param {?} lang
     * @return {?}
     */
    function (lang) {
        if (!this.config.production) {
            console.warn("cxDate pipe: No locale data registered for '" + lang + "' (see https://angular.io/api/common/registerLocaleData).");
        }
    };
    DatePipe.decorators = [
        { type: Pipe, args: [{ name: 'cxDate' },] }
    ];
    /** @nocollapse */
    DatePipe.ctorParameters = function () { return [
        { type: LanguageService },
        { type: I18nConfig }
    ]; };
    return DatePipe;
}(NativeDatePipe));
export { DatePipe };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DatePipe.prototype.language;
    /**
     * @type {?}
     * @private
     */
    DatePipe.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2kxOG4vZGF0ZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLFFBQVEsSUFBSSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDOUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVsRDtJQUM4QixvQ0FBYztJQUMxQyxrQkFBb0IsUUFBeUIsRUFBVSxNQUFrQjtRQUF6RSxZQUNFLGtCQUFNLElBQUksQ0FBQyxTQUNaO1FBRm1CLGNBQVEsR0FBUixRQUFRLENBQWlCO1FBQVUsWUFBTSxHQUFOLE1BQU0sQ0FBWTs7SUFFekUsQ0FBQzs7Ozs7OztJQUVELDRCQUFTOzs7Ozs7SUFBVCxVQUFVLEtBQVUsRUFBRSxNQUFlLEVBQUUsUUFBaUI7UUFDdEQsT0FBTyxpQkFBTSxTQUFTLFlBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDbEUsQ0FBQzs7Ozs7SUFFTywwQkFBTzs7OztJQUFmOztZQUNRLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFO1FBQ2pDLElBQUk7WUFDRixXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEIsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUFDLFdBQU07WUFDTixJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbkMsT0FBTyxJQUFJLENBQUM7U0FDYjtJQUNILENBQUM7Ozs7O0lBRU8sZ0NBQWE7Ozs7SUFBckI7O1lBQ00sTUFBTTtRQUNWLElBQUksQ0FBQyxRQUFRO2FBQ1YsU0FBUyxFQUFFO2FBQ1gsU0FBUyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEVBQWYsQ0FBZSxDQUFDO2FBQ2xDLFdBQVcsRUFBRSxDQUFDO1FBQ2pCLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7Ozs7OztJQUVPLDBDQUF1Qjs7Ozs7SUFBL0IsVUFBZ0MsSUFBWTtRQUMxQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUU7WUFDM0IsT0FBTyxDQUFDLElBQUksQ0FDVixpREFBK0MsSUFBSSw4REFBMkQsQ0FDL0csQ0FBQztTQUNIO0lBQ0gsQ0FBQzs7Z0JBcENGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUU7Ozs7Z0JBSGYsZUFBZTtnQkFDZixVQUFVOztJQXVDbkIsZUFBQztDQUFBLEFBckNELENBQzhCLGNBQWMsR0FvQzNDO1NBcENZLFFBQVE7Ozs7OztJQUNQLDRCQUFpQzs7Ozs7SUFBRSwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRlUGlwZSBhcyBOYXRpdmVEYXRlUGlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBnZXRMb2NhbGVJZCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBMYW5ndWFnZVNlcnZpY2UgfSBmcm9tICcuLi9zaXRlLWNvbnRleHQvZmFjYWRlL2xhbmd1YWdlLnNlcnZpY2UnO1xuaW1wb3J0IHsgSTE4bkNvbmZpZyB9IGZyb20gJy4vY29uZmlnL2kxOG4tY29uZmlnJztcblxuQFBpcGUoeyBuYW1lOiAnY3hEYXRlJyB9KVxuZXhwb3J0IGNsYXNzIERhdGVQaXBlIGV4dGVuZHMgTmF0aXZlRGF0ZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBsYW5ndWFnZTogTGFuZ3VhZ2VTZXJ2aWNlLCBwcml2YXRlIGNvbmZpZzogSTE4bkNvbmZpZykge1xuICAgIHN1cGVyKG51bGwpO1xuICB9XG5cbiAgdHJhbnNmb3JtKHZhbHVlOiBhbnksIGZvcm1hdD86IHN0cmluZywgdGltZXpvbmU/OiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsIHtcbiAgICByZXR1cm4gc3VwZXIudHJhbnNmb3JtKHZhbHVlLCBmb3JtYXQsIHRpbWV6b25lLCB0aGlzLmdldExhbmcoKSk7XG4gIH1cblxuICBwcml2YXRlIGdldExhbmcoKSB7XG4gICAgY29uc3QgbGFuZyA9IHRoaXMuZ2V0QWN0aXZlTGFuZygpO1xuICAgIHRyeSB7XG4gICAgICBnZXRMb2NhbGVJZChsYW5nKTtcbiAgICAgIHJldHVybiBsYW5nO1xuICAgIH0gY2F0Y2gge1xuICAgICAgdGhpcy5yZXBvcnRNaXNzaW5nTG9jYWxlRGF0YShsYW5nKTtcbiAgICAgIHJldHVybiAnZW4nO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0QWN0aXZlTGFuZygpOiBzdHJpbmcge1xuICAgIGxldCByZXN1bHQ7XG4gICAgdGhpcy5sYW5ndWFnZVxuICAgICAgLmdldEFjdGl2ZSgpXG4gICAgICAuc3Vic2NyaWJlKGxhbmcgPT4gKHJlc3VsdCA9IGxhbmcpKVxuICAgICAgLnVuc3Vic2NyaWJlKCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHByaXZhdGUgcmVwb3J0TWlzc2luZ0xvY2FsZURhdGEobGFuZzogc3RyaW5nKSB7XG4gICAgaWYgKCF0aGlzLmNvbmZpZy5wcm9kdWN0aW9uKSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGBjeERhdGUgcGlwZTogTm8gbG9jYWxlIGRhdGEgcmVnaXN0ZXJlZCBmb3IgJyR7bGFuZ30nIChzZWUgaHR0cHM6Ly9hbmd1bGFyLmlvL2FwaS9jb21tb24vcmVnaXN0ZXJMb2NhbGVEYXRhKS5gXG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuIl19
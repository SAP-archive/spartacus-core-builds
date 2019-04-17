/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { DatePipe as NativeDatePipe } from '@angular/common';
import { getLocaleId } from '@angular/common';
import { LanguageService } from '../site-context/facade/language.service';
import { I18nConfig } from './config/i18n-config';
export class DatePipe extends NativeDatePipe {
    /**
     * @param {?} language
     * @param {?} config
     */
    constructor(language, config) {
        super(null);
        this.language = language;
        this.config = config;
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
            .subscribe(lang => (result = lang))
            .unsubscribe();
        return result;
    }
    /**
     * @private
     * @param {?} lang
     * @return {?}
     */
    reportMissingLocaleData(lang) {
        if (!this.config.production) {
            console.warn(`cxDate pipe: No locale data registered for '${lang}' (see https://angular.io/api/common/registerLocaleData).`);
        }
    }
}
DatePipe.decorators = [
    { type: Pipe, args: [{ name: 'cxDate' },] }
];
/** @nocollapse */
DatePipe.ctorParameters = () => [
    { type: LanguageService },
    { type: I18nConfig }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2kxOG4vZGF0ZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUsUUFBUSxJQUFJLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzdELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM5QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDMUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBR2xELE1BQU0sT0FBTyxRQUFTLFNBQVEsY0FBYzs7Ozs7SUFDMUMsWUFBb0IsUUFBeUIsRUFBVSxNQUFrQjtRQUN2RSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFETSxhQUFRLEdBQVIsUUFBUSxDQUFpQjtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVk7SUFFekUsQ0FBQzs7Ozs7OztJQUVELFNBQVMsQ0FBQyxLQUFVLEVBQUUsTUFBZSxFQUFFLFFBQWlCO1FBQ3RELE9BQU8sS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUNsRSxDQUFDOzs7OztJQUVPLE9BQU87O2NBQ1AsSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUU7UUFDakMsSUFBSTtZQUNGLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQixPQUFPLElBQUksQ0FBQztTQUNiO1FBQUMsV0FBTTtZQUNOLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNuQyxPQUFPLElBQUksQ0FBQztTQUNiO0lBQ0gsQ0FBQzs7Ozs7SUFFTyxhQUFhOztZQUNmLE1BQU07UUFDVixJQUFJLENBQUMsUUFBUTthQUNWLFNBQVMsRUFBRTthQUNYLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDO2FBQ2xDLFdBQVcsRUFBRSxDQUFDO1FBQ2pCLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7Ozs7OztJQUVPLHVCQUF1QixDQUFDLElBQVk7UUFDMUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFO1lBQzNCLE9BQU8sQ0FBQyxJQUFJLENBQ1YsK0NBQStDLElBQUksMkRBQTJELENBQy9HLENBQUM7U0FDSDtJQUNILENBQUM7OztZQXBDRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFOzs7O1lBSGYsZUFBZTtZQUNmLFVBQVU7Ozs7Ozs7SUFJTCw0QkFBaUM7Ozs7O0lBQUUsMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0ZVBpcGUgYXMgTmF0aXZlRGF0ZVBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgZ2V0TG9jYWxlSWQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTGFuZ3VhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vc2l0ZS1jb250ZXh0L2ZhY2FkZS9sYW5ndWFnZS5zZXJ2aWNlJztcbmltcG9ydCB7IEkxOG5Db25maWcgfSBmcm9tICcuL2NvbmZpZy9pMThuLWNvbmZpZyc7XG5cbkBQaXBlKHsgbmFtZTogJ2N4RGF0ZScgfSlcbmV4cG9ydCBjbGFzcyBEYXRlUGlwZSBleHRlbmRzIE5hdGl2ZURhdGVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbGFuZ3VhZ2U6IExhbmd1YWdlU2VydmljZSwgcHJpdmF0ZSBjb25maWc6IEkxOG5Db25maWcpIHtcbiAgICBzdXBlcihudWxsKTtcbiAgfVxuXG4gIHRyYW5zZm9ybSh2YWx1ZTogYW55LCBmb3JtYXQ/OiBzdHJpbmcsIHRpbWV6b25lPzogc3RyaW5nKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgcmV0dXJuIHN1cGVyLnRyYW5zZm9ybSh2YWx1ZSwgZm9ybWF0LCB0aW1lem9uZSwgdGhpcy5nZXRMYW5nKCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRMYW5nKCkge1xuICAgIGNvbnN0IGxhbmcgPSB0aGlzLmdldEFjdGl2ZUxhbmcoKTtcbiAgICB0cnkge1xuICAgICAgZ2V0TG9jYWxlSWQobGFuZyk7XG4gICAgICByZXR1cm4gbGFuZztcbiAgICB9IGNhdGNoIHtcbiAgICAgIHRoaXMucmVwb3J0TWlzc2luZ0xvY2FsZURhdGEobGFuZyk7XG4gICAgICByZXR1cm4gJ2VuJztcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldEFjdGl2ZUxhbmcoKTogc3RyaW5nIHtcbiAgICBsZXQgcmVzdWx0O1xuICAgIHRoaXMubGFuZ3VhZ2VcbiAgICAgIC5nZXRBY3RpdmUoKVxuICAgICAgLnN1YnNjcmliZShsYW5nID0+IChyZXN1bHQgPSBsYW5nKSlcbiAgICAgIC51bnN1YnNjcmliZSgpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBwcml2YXRlIHJlcG9ydE1pc3NpbmdMb2NhbGVEYXRhKGxhbmc6IHN0cmluZykge1xuICAgIGlmICghdGhpcy5jb25maWcucHJvZHVjdGlvbikge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgY3hEYXRlIHBpcGU6IE5vIGxvY2FsZSBkYXRhIHJlZ2lzdGVyZWQgZm9yICcke2xhbmd9JyAoc2VlIGh0dHBzOi8vYW5ndWxhci5pby9hcGkvY29tbW9uL3JlZ2lzdGVyTG9jYWxlRGF0YSkuYFxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==
import { __decorate, __extends } from "tslib";
import { isDevMode, Pipe } from '@angular/core';
import { DatePipe, getLocaleId } from '@angular/common';
import { LanguageService } from '../site-context/facade/language.service';
// type CxDatePipe, not DatePipe, due to conflict with Angular's DatePipe - problem occurs for the backward compatibility compiler of Ivy
var CxDatePipe = /** @class */ (function (_super) {
    __extends(CxDatePipe, _super);
    function CxDatePipe(language) {
        var _this = _super.call(this, null) || this;
        _this.language = language;
        return _this;
    }
    CxDatePipe.prototype.transform = function (value, format, timezone) {
        return _super.prototype.transform.call(this, value, format, timezone, this.getLang());
    };
    CxDatePipe.prototype.getLang = function () {
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
    CxDatePipe.prototype.getActiveLang = function () {
        var result;
        this.language
            .getActive()
            .subscribe(function (lang) { return (result = lang); })
            .unsubscribe();
        return result;
    };
    CxDatePipe.prototype.reportMissingLocaleData = function (lang) {
        if (isDevMode()) {
            console.warn("cxDate pipe: No locale data registered for '" + lang + "' (see https://angular.io/api/common/registerLocaleData).");
        }
    };
    CxDatePipe.ctorParameters = function () { return [
        { type: LanguageService }
    ]; };
    CxDatePipe = __decorate([
        Pipe({ name: 'cxDate' })
    ], CxDatePipe);
    return CxDatePipe;
}(DatePipe));
export { CxDatePipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2kxOG4vZGF0ZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDL0QsT0FBTyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFFMUUseUlBQXlJO0FBRXpJO0lBQWdDLDhCQUFRO0lBQ3RDLG9CQUFzQixRQUF5QjtRQUEvQyxZQUNFLGtCQUFNLElBQUksQ0FBQyxTQUNaO1FBRnFCLGNBQVEsR0FBUixRQUFRLENBQWlCOztJQUUvQyxDQUFDO0lBRUQsOEJBQVMsR0FBVCxVQUFVLEtBQVUsRUFBRSxNQUFlLEVBQUUsUUFBaUI7UUFDdEQsT0FBTyxpQkFBTSxTQUFTLFlBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVPLDRCQUFPLEdBQWY7UUFDRSxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDbEMsSUFBSTtZQUNGLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQixPQUFPLElBQUksQ0FBQztTQUNiO1FBQUMsV0FBTTtZQUNOLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNuQyxPQUFPLElBQUksQ0FBQztTQUNiO0lBQ0gsQ0FBQztJQUVPLGtDQUFhLEdBQXJCO1FBQ0UsSUFBSSxNQUFNLENBQUM7UUFDWCxJQUFJLENBQUMsUUFBUTthQUNWLFNBQVMsRUFBRTthQUNYLFNBQVMsQ0FBQyxVQUFDLElBQUksSUFBSyxPQUFBLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxFQUFmLENBQWUsQ0FBQzthQUNwQyxXQUFXLEVBQUUsQ0FBQztRQUNqQixPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRU8sNENBQXVCLEdBQS9CLFVBQWdDLElBQVk7UUFDMUMsSUFBSSxTQUFTLEVBQUUsRUFBRTtZQUNmLE9BQU8sQ0FBQyxJQUFJLENBQ1YsaURBQStDLElBQUksOERBQTJELENBQy9HLENBQUM7U0FDSDtJQUNILENBQUM7O2dCQWxDK0IsZUFBZTs7SUFEcEMsVUFBVTtRQUR0QixJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLENBQUM7T0FDWixVQUFVLENBb0N0QjtJQUFELGlCQUFDO0NBQUEsQUFwQ0QsQ0FBZ0MsUUFBUSxHQW9DdkM7U0FwQ1ksVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzRGV2TW9kZSwgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0ZVBpcGUsIGdldExvY2FsZUlkIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IExhbmd1YWdlU2VydmljZSB9IGZyb20gJy4uL3NpdGUtY29udGV4dC9mYWNhZGUvbGFuZ3VhZ2Uuc2VydmljZSc7XG5cbi8vIHR5cGUgQ3hEYXRlUGlwZSwgbm90IERhdGVQaXBlLCBkdWUgdG8gY29uZmxpY3Qgd2l0aCBBbmd1bGFyJ3MgRGF0ZVBpcGUgLSBwcm9ibGVtIG9jY3VycyBmb3IgdGhlIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgY29tcGlsZXIgb2YgSXZ5XG5AUGlwZSh7IG5hbWU6ICdjeERhdGUnIH0pXG5leHBvcnQgY2xhc3MgQ3hEYXRlUGlwZSBleHRlbmRzIERhdGVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBsYW5ndWFnZTogTGFuZ3VhZ2VTZXJ2aWNlKSB7XG4gICAgc3VwZXIobnVsbCk7XG4gIH1cblxuICB0cmFuc2Zvcm0odmFsdWU6IGFueSwgZm9ybWF0Pzogc3RyaW5nLCB0aW1lem9uZT86IHN0cmluZyk6IHN0cmluZyB8IG51bGwge1xuICAgIHJldHVybiBzdXBlci50cmFuc2Zvcm0odmFsdWUsIGZvcm1hdCwgdGltZXpvbmUsIHRoaXMuZ2V0TGFuZygpKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0TGFuZygpIHtcbiAgICBjb25zdCBsYW5nID0gdGhpcy5nZXRBY3RpdmVMYW5nKCk7XG4gICAgdHJ5IHtcbiAgICAgIGdldExvY2FsZUlkKGxhbmcpO1xuICAgICAgcmV0dXJuIGxhbmc7XG4gICAgfSBjYXRjaCB7XG4gICAgICB0aGlzLnJlcG9ydE1pc3NpbmdMb2NhbGVEYXRhKGxhbmcpO1xuICAgICAgcmV0dXJuICdlbic7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRBY3RpdmVMYW5nKCk6IHN0cmluZyB7XG4gICAgbGV0IHJlc3VsdDtcbiAgICB0aGlzLmxhbmd1YWdlXG4gICAgICAuZ2V0QWN0aXZlKClcbiAgICAgIC5zdWJzY3JpYmUoKGxhbmcpID0+IChyZXN1bHQgPSBsYW5nKSlcbiAgICAgIC51bnN1YnNjcmliZSgpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBwcml2YXRlIHJlcG9ydE1pc3NpbmdMb2NhbGVEYXRhKGxhbmc6IHN0cmluZykge1xuICAgIGlmIChpc0Rldk1vZGUoKSkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgY3hEYXRlIHBpcGU6IE5vIGxvY2FsZSBkYXRhIHJlZ2lzdGVyZWQgZm9yICcke2xhbmd9JyAoc2VlIGh0dHBzOi8vYW5ndWxhci5pby9hcGkvY29tbW9uL3JlZ2lzdGVyTG9jYWxlRGF0YSkuYFxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==
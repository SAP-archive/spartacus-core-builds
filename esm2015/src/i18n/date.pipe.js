import { __decorate } from "tslib";
import { isDevMode, Pipe } from '@angular/core';
import { DatePipe, getLocaleId } from '@angular/common';
import { LanguageService } from '../site-context/facade/language.service';
// type CxDatePipe, not DatePipe, due to conflict with Angular's DatePipe - problem occurs for the backward compatibility compiler of Ivy
let CxDatePipe = class CxDatePipe extends DatePipe {
    constructor(language) {
        super(null);
        this.language = language;
    }
    transform(value, format, timezone) {
        return super.transform(value, format, timezone, this.getLang());
    }
    getLang() {
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
    getActiveLang() {
        let result;
        this.language
            .getActive()
            .subscribe(lang => (result = lang))
            .unsubscribe();
        return result;
    }
    reportMissingLocaleData(lang) {
        if (isDevMode()) {
            console.warn(`cxDate pipe: No locale data registered for '${lang}' (see https://angular.io/api/common/registerLocaleData).`);
        }
    }
};
CxDatePipe.ctorParameters = () => [
    { type: LanguageService }
];
CxDatePipe = __decorate([
    Pipe({ name: 'cxDate' })
], CxDatePipe);
export { CxDatePipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2kxOG4vZGF0ZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDL0QsT0FBTyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFFMUUseUlBQXlJO0FBRXpJLElBQWEsVUFBVSxHQUF2QixNQUFhLFVBQVcsU0FBUSxRQUFRO0lBQ3RDLFlBQXNCLFFBQXlCO1FBQzdDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQURRLGFBQVEsR0FBUixRQUFRLENBQWlCO0lBRS9DLENBQUM7SUFFRCxTQUFTLENBQUMsS0FBVSxFQUFFLE1BQWUsRUFBRSxRQUFpQjtRQUN0RCxPQUFPLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVPLE9BQU87UUFDYixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDbEMsSUFBSTtZQUNGLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQixPQUFPLElBQUksQ0FBQztTQUNiO1FBQUMsV0FBTTtZQUNOLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNuQyxPQUFPLElBQUksQ0FBQztTQUNiO0lBQ0gsQ0FBQztJQUVPLGFBQWE7UUFDbkIsSUFBSSxNQUFNLENBQUM7UUFDWCxJQUFJLENBQUMsUUFBUTthQUNWLFNBQVMsRUFBRTthQUNYLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDO2FBQ2xDLFdBQVcsRUFBRSxDQUFDO1FBQ2pCLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFTyx1QkFBdUIsQ0FBQyxJQUFZO1FBQzFDLElBQUksU0FBUyxFQUFFLEVBQUU7WUFDZixPQUFPLENBQUMsSUFBSSxDQUNWLCtDQUErQyxJQUFJLDJEQUEyRCxDQUMvRyxDQUFDO1NBQ0g7SUFDSCxDQUFDO0NBQ0YsQ0FBQTs7WUFuQ2lDLGVBQWU7O0FBRHBDLFVBQVU7SUFEdEIsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxDQUFDO0dBQ1osVUFBVSxDQW9DdEI7U0FwQ1ksVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzRGV2TW9kZSwgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0ZVBpcGUsIGdldExvY2FsZUlkIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IExhbmd1YWdlU2VydmljZSB9IGZyb20gJy4uL3NpdGUtY29udGV4dC9mYWNhZGUvbGFuZ3VhZ2Uuc2VydmljZSc7XG5cbi8vIHR5cGUgQ3hEYXRlUGlwZSwgbm90IERhdGVQaXBlLCBkdWUgdG8gY29uZmxpY3Qgd2l0aCBBbmd1bGFyJ3MgRGF0ZVBpcGUgLSBwcm9ibGVtIG9jY3VycyBmb3IgdGhlIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgY29tcGlsZXIgb2YgSXZ5XG5AUGlwZSh7IG5hbWU6ICdjeERhdGUnIH0pXG5leHBvcnQgY2xhc3MgQ3hEYXRlUGlwZSBleHRlbmRzIERhdGVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBsYW5ndWFnZTogTGFuZ3VhZ2VTZXJ2aWNlKSB7XG4gICAgc3VwZXIobnVsbCk7XG4gIH1cblxuICB0cmFuc2Zvcm0odmFsdWU6IGFueSwgZm9ybWF0Pzogc3RyaW5nLCB0aW1lem9uZT86IHN0cmluZyk6IHN0cmluZyB8IG51bGwge1xuICAgIHJldHVybiBzdXBlci50cmFuc2Zvcm0odmFsdWUsIGZvcm1hdCwgdGltZXpvbmUsIHRoaXMuZ2V0TGFuZygpKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0TGFuZygpIHtcbiAgICBjb25zdCBsYW5nID0gdGhpcy5nZXRBY3RpdmVMYW5nKCk7XG4gICAgdHJ5IHtcbiAgICAgIGdldExvY2FsZUlkKGxhbmcpO1xuICAgICAgcmV0dXJuIGxhbmc7XG4gICAgfSBjYXRjaCB7XG4gICAgICB0aGlzLnJlcG9ydE1pc3NpbmdMb2NhbGVEYXRhKGxhbmcpO1xuICAgICAgcmV0dXJuICdlbic7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRBY3RpdmVMYW5nKCk6IHN0cmluZyB7XG4gICAgbGV0IHJlc3VsdDtcbiAgICB0aGlzLmxhbmd1YWdlXG4gICAgICAuZ2V0QWN0aXZlKClcbiAgICAgIC5zdWJzY3JpYmUobGFuZyA9PiAocmVzdWx0ID0gbGFuZykpXG4gICAgICAudW5zdWJzY3JpYmUoKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcHJpdmF0ZSByZXBvcnRNaXNzaW5nTG9jYWxlRGF0YShsYW5nOiBzdHJpbmcpIHtcbiAgICBpZiAoaXNEZXZNb2RlKCkpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYGN4RGF0ZSBwaXBlOiBObyBsb2NhbGUgZGF0YSByZWdpc3RlcmVkIGZvciAnJHtsYW5nfScgKHNlZSBodHRwczovL2FuZ3VsYXIuaW8vYXBpL2NvbW1vbi9yZWdpc3RlckxvY2FsZURhdGEpLmBcbiAgICAgICk7XG4gICAgfVxuICB9XG59XG4iXX0=
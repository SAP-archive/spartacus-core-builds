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
            .subscribe((lang) => (result = lang))
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2kxOG4vZGF0ZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDL0QsT0FBTyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFFMUUseUlBQXlJO0FBRXpJLElBQWEsVUFBVSxHQUF2QixNQUFhLFVBQVcsU0FBUSxRQUFRO0lBQ3RDLFlBQXNCLFFBQXlCO1FBQzdDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQURRLGFBQVEsR0FBUixRQUFRLENBQWlCO0lBRS9DLENBQUM7SUFFRCxTQUFTLENBQUMsS0FBVSxFQUFFLE1BQWUsRUFBRSxRQUFpQjtRQUN0RCxPQUFPLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVPLE9BQU87UUFDYixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDbEMsSUFBSTtZQUNGLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQixPQUFPLElBQUksQ0FBQztTQUNiO1FBQUMsV0FBTTtZQUNOLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNuQyxPQUFPLElBQUksQ0FBQztTQUNiO0lBQ0gsQ0FBQztJQUVPLGFBQWE7UUFDbkIsSUFBSSxNQUFNLENBQUM7UUFDWCxJQUFJLENBQUMsUUFBUTthQUNWLFNBQVMsRUFBRTthQUNYLFNBQVMsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUM7YUFDcEMsV0FBVyxFQUFFLENBQUM7UUFDakIsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVPLHVCQUF1QixDQUFDLElBQVk7UUFDMUMsSUFBSSxTQUFTLEVBQUUsRUFBRTtZQUNmLE9BQU8sQ0FBQyxJQUFJLENBQ1YsK0NBQStDLElBQUksMkRBQTJELENBQy9HLENBQUM7U0FDSDtJQUNILENBQUM7Q0FDRixDQUFBOztZQW5DaUMsZUFBZTs7QUFEcEMsVUFBVTtJQUR0QixJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLENBQUM7R0FDWixVQUFVLENBb0N0QjtTQXBDWSxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNEZXZNb2RlLCBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRlUGlwZSwgZ2V0TG9jYWxlSWQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTGFuZ3VhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vc2l0ZS1jb250ZXh0L2ZhY2FkZS9sYW5ndWFnZS5zZXJ2aWNlJztcblxuLy8gdHlwZSBDeERhdGVQaXBlLCBub3QgRGF0ZVBpcGUsIGR1ZSB0byBjb25mbGljdCB3aXRoIEFuZ3VsYXIncyBEYXRlUGlwZSAtIHByb2JsZW0gb2NjdXJzIGZvciB0aGUgYmFja3dhcmQgY29tcGF0aWJpbGl0eSBjb21waWxlciBvZiBJdnlcbkBQaXBlKHsgbmFtZTogJ2N4RGF0ZScgfSlcbmV4cG9ydCBjbGFzcyBDeERhdGVQaXBlIGV4dGVuZHMgRGF0ZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGxhbmd1YWdlOiBMYW5ndWFnZVNlcnZpY2UpIHtcbiAgICBzdXBlcihudWxsKTtcbiAgfVxuXG4gIHRyYW5zZm9ybSh2YWx1ZTogYW55LCBmb3JtYXQ/OiBzdHJpbmcsIHRpbWV6b25lPzogc3RyaW5nKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgcmV0dXJuIHN1cGVyLnRyYW5zZm9ybSh2YWx1ZSwgZm9ybWF0LCB0aW1lem9uZSwgdGhpcy5nZXRMYW5nKCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRMYW5nKCkge1xuICAgIGNvbnN0IGxhbmcgPSB0aGlzLmdldEFjdGl2ZUxhbmcoKTtcbiAgICB0cnkge1xuICAgICAgZ2V0TG9jYWxlSWQobGFuZyk7XG4gICAgICByZXR1cm4gbGFuZztcbiAgICB9IGNhdGNoIHtcbiAgICAgIHRoaXMucmVwb3J0TWlzc2luZ0xvY2FsZURhdGEobGFuZyk7XG4gICAgICByZXR1cm4gJ2VuJztcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldEFjdGl2ZUxhbmcoKTogc3RyaW5nIHtcbiAgICBsZXQgcmVzdWx0O1xuICAgIHRoaXMubGFuZ3VhZ2VcbiAgICAgIC5nZXRBY3RpdmUoKVxuICAgICAgLnN1YnNjcmliZSgobGFuZykgPT4gKHJlc3VsdCA9IGxhbmcpKVxuICAgICAgLnVuc3Vic2NyaWJlKCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHByaXZhdGUgcmVwb3J0TWlzc2luZ0xvY2FsZURhdGEobGFuZzogc3RyaW5nKSB7XG4gICAgaWYgKGlzRGV2TW9kZSgpKSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGBjeERhdGUgcGlwZTogTm8gbG9jYWxlIGRhdGEgcmVnaXN0ZXJlZCBmb3IgJyR7bGFuZ30nIChzZWUgaHR0cHM6Ly9hbmd1bGFyLmlvL2FwaS9jb21tb24vcmVnaXN0ZXJMb2NhbGVEYXRhKS5gXG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuIl19
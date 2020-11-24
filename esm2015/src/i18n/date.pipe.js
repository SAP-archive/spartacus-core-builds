import { DatePipe, getLocaleId } from '@angular/common';
import { isDevMode, Pipe } from '@angular/core';
import { LanguageService } from '../site-context/facade/language.service';
// type CxDatePipe, not DatePipe, due to conflict with Angular's DatePipe - problem occurs for the backward compatibility compiler of Ivy
export class CxDatePipe extends DatePipe {
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
}
CxDatePipe.decorators = [
    { type: Pipe, args: [{ name: 'cxDate' },] }
];
CxDatePipe.ctorParameters = () => [
    { type: LanguageService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS9zcmMvaTE4bi9kYXRlLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDL0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBRTFFLHlJQUF5STtBQUV6SSxNQUFNLE9BQU8sVUFBVyxTQUFRLFFBQVE7SUFDdEMsWUFBc0IsUUFBeUI7UUFDN0MsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRFEsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7SUFFL0MsQ0FBQztJQU1ELFNBQVMsQ0FBQyxLQUFVLEVBQUUsTUFBZSxFQUFFLFFBQWlCO1FBQ3RELE9BQU8sS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRU8sT0FBTztRQUNiLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNsQyxJQUFJO1lBQ0YsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xCLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFBQyxXQUFNO1lBQ04sSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ25DLE9BQU8sSUFBSSxDQUFDO1NBQ2I7SUFDSCxDQUFDO0lBRU8sYUFBYTtRQUNuQixJQUFJLE1BQU0sQ0FBQztRQUNYLElBQUksQ0FBQyxRQUFRO2FBQ1YsU0FBUyxFQUFFO2FBQ1gsU0FBUyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQzthQUNwQyxXQUFXLEVBQUUsQ0FBQztRQUNqQixPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRU8sdUJBQXVCLENBQUMsSUFBWTtRQUMxQyxJQUFJLFNBQVMsRUFBRSxFQUFFO1lBQ2YsT0FBTyxDQUFDLElBQUksQ0FDViwrQ0FBK0MsSUFBSSwyREFBMkQsQ0FDL0csQ0FBQztTQUNIO0lBQ0gsQ0FBQzs7O1lBeENGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUU7OztZQUhmLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRlUGlwZSwgZ2V0TG9jYWxlSWQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgaXNEZXZNb2RlLCBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMYW5ndWFnZVNlcnZpY2UgfSBmcm9tICcuLi9zaXRlLWNvbnRleHQvZmFjYWRlL2xhbmd1YWdlLnNlcnZpY2UnO1xuXG4vLyB0eXBlIEN4RGF0ZVBpcGUsIG5vdCBEYXRlUGlwZSwgZHVlIHRvIGNvbmZsaWN0IHdpdGggQW5ndWxhcidzIERhdGVQaXBlIC0gcHJvYmxlbSBvY2N1cnMgZm9yIHRoZSBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IGNvbXBpbGVyIG9mIEl2eVxuQFBpcGUoeyBuYW1lOiAnY3hEYXRlJyB9KVxuZXhwb3J0IGNsYXNzIEN4RGF0ZVBpcGUgZXh0ZW5kcyBEYXRlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgbGFuZ3VhZ2U6IExhbmd1YWdlU2VydmljZSkge1xuICAgIHN1cGVyKG51bGwpO1xuICB9XG5cbiAgLy8gVE9ETzogUmVwbGFjZSBgYW55YCB0byBtYXRjaCBzdHJpY3QgdHlwZXMgZnJvbSBhbmd1bGFyIGluIDQuMFxuICAvLyBPdmVybG9hZCB0byBzdXBwb3J0IHN0cmljdGVyIHR5cGUgY2hlY2sgZnJvbSBhbmd1bGFyIDExIG9ud2FyZHNcbiAgdHJhbnNmb3JtKHZhbHVlOiBhbnksIGZvcm1hdD86IHN0cmluZywgdGltZXpvbmU/OiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsO1xuICB0cmFuc2Zvcm0odmFsdWU6IG51bGwgfCB1bmRlZmluZWQsIGZvcm1hdD86IHN0cmluZywgdGltZXpvbmU/OiBzdHJpbmcpOiBudWxsO1xuICB0cmFuc2Zvcm0odmFsdWU6IGFueSwgZm9ybWF0Pzogc3RyaW5nLCB0aW1lem9uZT86IHN0cmluZyk6IHN0cmluZyB8IG51bGwge1xuICAgIHJldHVybiBzdXBlci50cmFuc2Zvcm0odmFsdWUsIGZvcm1hdCwgdGltZXpvbmUsIHRoaXMuZ2V0TGFuZygpKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0TGFuZygpIHtcbiAgICBjb25zdCBsYW5nID0gdGhpcy5nZXRBY3RpdmVMYW5nKCk7XG4gICAgdHJ5IHtcbiAgICAgIGdldExvY2FsZUlkKGxhbmcpO1xuICAgICAgcmV0dXJuIGxhbmc7XG4gICAgfSBjYXRjaCB7XG4gICAgICB0aGlzLnJlcG9ydE1pc3NpbmdMb2NhbGVEYXRhKGxhbmcpO1xuICAgICAgcmV0dXJuICdlbic7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRBY3RpdmVMYW5nKCk6IHN0cmluZyB7XG4gICAgbGV0IHJlc3VsdDtcbiAgICB0aGlzLmxhbmd1YWdlXG4gICAgICAuZ2V0QWN0aXZlKClcbiAgICAgIC5zdWJzY3JpYmUoKGxhbmcpID0+IChyZXN1bHQgPSBsYW5nKSlcbiAgICAgIC51bnN1YnNjcmliZSgpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBwcml2YXRlIHJlcG9ydE1pc3NpbmdMb2NhbGVEYXRhKGxhbmc6IHN0cmluZykge1xuICAgIGlmIChpc0Rldk1vZGUoKSkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgY3hEYXRlIHBpcGU6IE5vIGxvY2FsZSBkYXRhIHJlZ2lzdGVyZWQgZm9yICcke2xhbmd9JyAoc2VlIGh0dHBzOi8vYW5ndWxhci5pby9hcGkvY29tbW9uL3JlZ2lzdGVyTG9jYWxlRGF0YSkuYFxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==
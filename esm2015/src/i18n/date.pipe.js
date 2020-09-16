import { isDevMode, Pipe } from '@angular/core';
import { DatePipe, getLocaleId } from '@angular/common';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS9zcmMvaTE4bi9kYXRlLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQy9ELE9BQU8sRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBRTFFLHlJQUF5STtBQUV6SSxNQUFNLE9BQU8sVUFBVyxTQUFRLFFBQVE7SUFDdEMsWUFBc0IsUUFBeUI7UUFDN0MsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRFEsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7SUFFL0MsQ0FBQztJQUVELFNBQVMsQ0FBQyxLQUFVLEVBQUUsTUFBZSxFQUFFLFFBQWlCO1FBQ3RELE9BQU8sS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRU8sT0FBTztRQUNiLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNsQyxJQUFJO1lBQ0YsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xCLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFBQyxXQUFNO1lBQ04sSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ25DLE9BQU8sSUFBSSxDQUFDO1NBQ2I7SUFDSCxDQUFDO0lBRU8sYUFBYTtRQUNuQixJQUFJLE1BQU0sQ0FBQztRQUNYLElBQUksQ0FBQyxRQUFRO2FBQ1YsU0FBUyxFQUFFO2FBQ1gsU0FBUyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQzthQUNwQyxXQUFXLEVBQUUsQ0FBQztRQUNqQixPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRU8sdUJBQXVCLENBQUMsSUFBWTtRQUMxQyxJQUFJLFNBQVMsRUFBRSxFQUFFO1lBQ2YsT0FBTyxDQUFDLElBQUksQ0FDViwrQ0FBK0MsSUFBSSwyREFBMkQsQ0FDL0csQ0FBQztTQUNIO0lBQ0gsQ0FBQzs7O1lBcENGLElBQUksU0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUU7OztZQUhmLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc0Rldk1vZGUsIFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGVQaXBlLCBnZXRMb2NhbGVJZCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBMYW5ndWFnZVNlcnZpY2UgfSBmcm9tICcuLi9zaXRlLWNvbnRleHQvZmFjYWRlL2xhbmd1YWdlLnNlcnZpY2UnO1xuXG4vLyB0eXBlIEN4RGF0ZVBpcGUsIG5vdCBEYXRlUGlwZSwgZHVlIHRvIGNvbmZsaWN0IHdpdGggQW5ndWxhcidzIERhdGVQaXBlIC0gcHJvYmxlbSBvY2N1cnMgZm9yIHRoZSBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IGNvbXBpbGVyIG9mIEl2eVxuQFBpcGUoeyBuYW1lOiAnY3hEYXRlJyB9KVxuZXhwb3J0IGNsYXNzIEN4RGF0ZVBpcGUgZXh0ZW5kcyBEYXRlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgbGFuZ3VhZ2U6IExhbmd1YWdlU2VydmljZSkge1xuICAgIHN1cGVyKG51bGwpO1xuICB9XG5cbiAgdHJhbnNmb3JtKHZhbHVlOiBhbnksIGZvcm1hdD86IHN0cmluZywgdGltZXpvbmU/OiBzdHJpbmcpOiBzdHJpbmcgfCBudWxsIHtcbiAgICByZXR1cm4gc3VwZXIudHJhbnNmb3JtKHZhbHVlLCBmb3JtYXQsIHRpbWV6b25lLCB0aGlzLmdldExhbmcoKSk7XG4gIH1cblxuICBwcml2YXRlIGdldExhbmcoKSB7XG4gICAgY29uc3QgbGFuZyA9IHRoaXMuZ2V0QWN0aXZlTGFuZygpO1xuICAgIHRyeSB7XG4gICAgICBnZXRMb2NhbGVJZChsYW5nKTtcbiAgICAgIHJldHVybiBsYW5nO1xuICAgIH0gY2F0Y2gge1xuICAgICAgdGhpcy5yZXBvcnRNaXNzaW5nTG9jYWxlRGF0YShsYW5nKTtcbiAgICAgIHJldHVybiAnZW4nO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0QWN0aXZlTGFuZygpOiBzdHJpbmcge1xuICAgIGxldCByZXN1bHQ7XG4gICAgdGhpcy5sYW5ndWFnZVxuICAgICAgLmdldEFjdGl2ZSgpXG4gICAgICAuc3Vic2NyaWJlKChsYW5nKSA9PiAocmVzdWx0ID0gbGFuZykpXG4gICAgICAudW5zdWJzY3JpYmUoKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcHJpdmF0ZSByZXBvcnRNaXNzaW5nTG9jYWxlRGF0YShsYW5nOiBzdHJpbmcpIHtcbiAgICBpZiAoaXNEZXZNb2RlKCkpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYGN4RGF0ZSBwaXBlOiBObyBsb2NhbGUgZGF0YSByZWdpc3RlcmVkIGZvciAnJHtsYW5nfScgKHNlZSBodHRwczovL2FuZ3VsYXIuaW8vYXBpL2NvbW1vbi9yZWdpc3RlckxvY2FsZURhdGEpLmBcbiAgICAgICk7XG4gICAgfVxuICB9XG59XG4iXX0=
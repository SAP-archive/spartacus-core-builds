import { PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import { LanguageService } from '../site-context/facade/language.service';
import * as ɵngcc0 from '@angular/core';
export declare class CxDatePipe extends DatePipe implements PipeTransform {
    protected language: LanguageService;
    constructor(language: LanguageService);
    transform(value: any, format?: string, timezone?: string): string | null;
    private getLang;
    private getActiveLang;
    private reportMissingLocaleData;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CxDatePipe, never>;
    static ɵpipe: ɵngcc0.ɵɵPipeDefWithMeta<CxDatePipe, "cxDate">;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS5waXBlLmQudHMiLCJzb3VyY2VzIjpbImRhdGUucGlwZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FBR0E7Ozs7Ozs7OztBQU9BIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0ZVBpcGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTGFuZ3VhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vc2l0ZS1jb250ZXh0L2ZhY2FkZS9sYW5ndWFnZS5zZXJ2aWNlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEN4RGF0ZVBpcGUgZXh0ZW5kcyBEYXRlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICAgIHByb3RlY3RlZCBsYW5ndWFnZTogTGFuZ3VhZ2VTZXJ2aWNlO1xuICAgIGNvbnN0cnVjdG9yKGxhbmd1YWdlOiBMYW5ndWFnZVNlcnZpY2UpO1xuICAgIHRyYW5zZm9ybSh2YWx1ZTogYW55LCBmb3JtYXQ/OiBzdHJpbmcsIHRpbWV6b25lPzogc3RyaW5nKTogc3RyaW5nIHwgbnVsbDtcbiAgICBwcml2YXRlIGdldExhbmc7XG4gICAgcHJpdmF0ZSBnZXRBY3RpdmVMYW5nO1xuICAgIHByaXZhdGUgcmVwb3J0TWlzc2luZ0xvY2FsZURhdGE7XG59XG4iXX0=
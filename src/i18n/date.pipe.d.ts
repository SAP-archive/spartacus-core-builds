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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CxDatePipe>;
    static ɵpipe: ɵngcc0.ɵɵPipeDefWithMeta<CxDatePipe, "cxDate">;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS5waXBlLmQudHMiLCJzb3VyY2VzIjpbImRhdGUucGlwZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FBR0E7Ozs7Ozs7OztBQU9BOyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGVQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IExhbmd1YWdlU2VydmljZSB9IGZyb20gJy4uL3NpdGUtY29udGV4dC9mYWNhZGUvbGFuZ3VhZ2Uuc2VydmljZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDeERhdGVQaXBlIGV4dGVuZHMgRGF0ZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgICBwcm90ZWN0ZWQgbGFuZ3VhZ2U6IExhbmd1YWdlU2VydmljZTtcbiAgICBjb25zdHJ1Y3RvcihsYW5ndWFnZTogTGFuZ3VhZ2VTZXJ2aWNlKTtcbiAgICB0cmFuc2Zvcm0odmFsdWU6IGFueSwgZm9ybWF0Pzogc3RyaW5nLCB0aW1lem9uZT86IHN0cmluZyk6IHN0cmluZyB8IG51bGw7XG4gICAgcHJpdmF0ZSBnZXRMYW5nO1xuICAgIHByaXZhdGUgZ2V0QWN0aXZlTGFuZztcbiAgICBwcml2YXRlIHJlcG9ydE1pc3NpbmdMb2NhbGVEYXRhO1xufVxuIl19
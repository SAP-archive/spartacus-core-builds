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

//# sourceMappingURL=date.pipe.d.ts.map
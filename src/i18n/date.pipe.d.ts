import { DatePipe } from '@angular/common';
import { PipeTransform } from '@angular/core';
import { LanguageService } from '../site-context/facade/language.service';
export declare class CxDatePipe extends DatePipe implements PipeTransform {
    protected language: LanguageService;
    constructor(language: LanguageService);
    transform(value: any, format?: string, timezone?: string): string | null;
    transform(value: null | undefined, format?: string, timezone?: string): null;
    private getLang;
    private getActiveLang;
    private reportMissingLocaleData;
}

import { PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import { LanguageService } from '../site-context/facade/language.service';
import { I18nConfig } from './config/i18n-config';
export declare class CxDatePipe extends DatePipe implements PipeTransform {
    protected language: LanguageService;
    protected config: I18nConfig;
    constructor(language: LanguageService, config: I18nConfig);
    transform(value: any, format?: string, timezone?: string): string | null;
    private getLang;
    private getActiveLang;
    private reportMissingLocaleData;
}

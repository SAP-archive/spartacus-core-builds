import { PipeTransform } from '@angular/core';
import { DatePipe as NativeDatePipe } from '@angular/common';
import { LanguageService } from '../site-context/facade/language.service';
import { I18nConfig } from './config/i18n-config';
export declare class DatePipe extends NativeDatePipe implements PipeTransform {
    private language;
    private config;
    constructor(language: LanguageService, config: I18nConfig);
    transform(value: any, format?: string, timezone?: string): string | null;
    private getLang;
    private getActiveLang;
    private reportMissingLocaleData;
}

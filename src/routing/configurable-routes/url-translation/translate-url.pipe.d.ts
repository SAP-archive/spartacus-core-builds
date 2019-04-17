import { PipeTransform } from '@angular/core';
import { UrlTranslationService } from './url-translation.service';
import { TranslateUrlOptions } from './translate-url-options';
export declare class TranslateUrlPipe implements PipeTransform {
    private urlTranslator;
    constructor(urlTranslator: UrlTranslationService);
    transform(options: TranslateUrlOptions): string | string[];
}

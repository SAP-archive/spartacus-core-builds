import { PipeTransform } from '@angular/core';
import { UrlTranslationService } from './url-translation.service';
import { TranslateUrlCommands, TranslateUrlOptions } from './translate-url-commands';
export declare class TranslateUrlPipe implements PipeTransform {
    private urlTranslator;
    constructor(urlTranslator: UrlTranslationService);
    transform(commands: TranslateUrlCommands, options?: TranslateUrlOptions): any[];
}

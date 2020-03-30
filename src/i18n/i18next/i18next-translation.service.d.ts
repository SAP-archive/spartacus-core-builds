import { Observable } from 'rxjs';
import { TranslationService } from '../translation.service';
import { I18nConfig } from '../config/i18n-config';
import { TranslationChunkService } from '../translation-chunk.service';
import * as ɵngcc0 from '@angular/core';
export declare class I18nextTranslationService implements TranslationService {
    protected config: I18nConfig;
    protected translationChunk: TranslationChunkService;
    private readonly NON_BREAKING_SPACE;
    protected readonly NAMESPACE_SEPARATOR = ":";
    constructor(config: I18nConfig, translationChunk: TranslationChunkService);
    translate(key: string, options?: any, whitespaceUntilLoaded?: boolean): Observable<string>;
    loadChunks(chunkNames: string | string[]): Promise<any>;
    /**
     * Returns a fallback value in case when the given key is missing
     * @param key
     */
    protected getFallbackValue(key: string): string;
    private reportMissingKey;
    private getNamespacedKey;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<I18nextTranslationService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<I18nextTranslationService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bmV4dC10cmFuc2xhdGlvbi5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbImkxOG5leHQtdHJhbnNsYXRpb24uc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUlBOzs7Ozs7Ozs7Ozs7Ozs7OztBQWVBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgVHJhbnNsYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vdHJhbnNsYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBJMThuQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL2kxOG4tY29uZmlnJztcbmltcG9ydCB7IFRyYW5zbGF0aW9uQ2h1bmtTZXJ2aWNlIH0gZnJvbSAnLi4vdHJhbnNsYXRpb24tY2h1bmsuc2VydmljZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBJMThuZXh0VHJhbnNsYXRpb25TZXJ2aWNlIGltcGxlbWVudHMgVHJhbnNsYXRpb25TZXJ2aWNlIHtcbiAgICBwcm90ZWN0ZWQgY29uZmlnOiBJMThuQ29uZmlnO1xuICAgIHByb3RlY3RlZCB0cmFuc2xhdGlvbkNodW5rOiBUcmFuc2xhdGlvbkNodW5rU2VydmljZTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IE5PTl9CUkVBS0lOR19TUEFDRTtcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgTkFNRVNQQUNFX1NFUEFSQVRPUiA9IFwiOlwiO1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzogSTE4bkNvbmZpZywgdHJhbnNsYXRpb25DaHVuazogVHJhbnNsYXRpb25DaHVua1NlcnZpY2UpO1xuICAgIHRyYW5zbGF0ZShrZXk6IHN0cmluZywgb3B0aW9ucz86IGFueSwgd2hpdGVzcGFjZVVudGlsTG9hZGVkPzogYm9vbGVhbik6IE9ic2VydmFibGU8c3RyaW5nPjtcbiAgICBsb2FkQ2h1bmtzKGNodW5rTmFtZXM6IHN0cmluZyB8IHN0cmluZ1tdKTogUHJvbWlzZTxhbnk+O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBmYWxsYmFjayB2YWx1ZSBpbiBjYXNlIHdoZW4gdGhlIGdpdmVuIGtleSBpcyBtaXNzaW5nXG4gICAgICogQHBhcmFtIGtleVxuICAgICAqL1xuICAgIHByb3RlY3RlZCBnZXRGYWxsYmFja1ZhbHVlKGtleTogc3RyaW5nKTogc3RyaW5nO1xuICAgIHByaXZhdGUgcmVwb3J0TWlzc2luZ0tleTtcbiAgICBwcml2YXRlIGdldE5hbWVzcGFjZWRLZXk7XG59XG4iXX0=
import { Observable } from 'rxjs';
import { I18nConfig } from '../config/i18n-config';
import { TranslationChunkService } from '../translation-chunk.service';
import { TranslationService } from '../translation.service';
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
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bmV4dC10cmFuc2xhdGlvbi5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbImkxOG5leHQtdHJhbnNsYXRpb24uc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUlBOzs7Ozs7Ozs7Ozs7Ozs7O0FBZUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBJMThuQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL2kxOG4tY29uZmlnJztcbmltcG9ydCB7IFRyYW5zbGF0aW9uQ2h1bmtTZXJ2aWNlIH0gZnJvbSAnLi4vdHJhbnNsYXRpb24tY2h1bmsuc2VydmljZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGlvblNlcnZpY2UgfSBmcm9tICcuLi90cmFuc2xhdGlvbi5zZXJ2aWNlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEkxOG5leHRUcmFuc2xhdGlvblNlcnZpY2UgaW1wbGVtZW50cyBUcmFuc2xhdGlvblNlcnZpY2Uge1xuICAgIHByb3RlY3RlZCBjb25maWc6IEkxOG5Db25maWc7XG4gICAgcHJvdGVjdGVkIHRyYW5zbGF0aW9uQ2h1bms6IFRyYW5zbGF0aW9uQ2h1bmtTZXJ2aWNlO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgTk9OX0JSRUFLSU5HX1NQQUNFO1xuICAgIHByb3RlY3RlZCByZWFkb25seSBOQU1FU1BBQ0VfU0VQQVJBVE9SID0gXCI6XCI7XG4gICAgY29uc3RydWN0b3IoY29uZmlnOiBJMThuQ29uZmlnLCB0cmFuc2xhdGlvbkNodW5rOiBUcmFuc2xhdGlvbkNodW5rU2VydmljZSk7XG4gICAgdHJhbnNsYXRlKGtleTogc3RyaW5nLCBvcHRpb25zPzogYW55LCB3aGl0ZXNwYWNlVW50aWxMb2FkZWQ/OiBib29sZWFuKTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuICAgIGxvYWRDaHVua3MoY2h1bmtOYW1lczogc3RyaW5nIHwgc3RyaW5nW10pOiBQcm9taXNlPGFueT47XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIGZhbGxiYWNrIHZhbHVlIGluIGNhc2Ugd2hlbiB0aGUgZ2l2ZW4ga2V5IGlzIG1pc3NpbmdcbiAgICAgKiBAcGFyYW0ga2V5XG4gICAgICovXG4gICAgcHJvdGVjdGVkIGdldEZhbGxiYWNrVmFsdWUoa2V5OiBzdHJpbmcpOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSByZXBvcnRNaXNzaW5nS2V5O1xuICAgIHByaXZhdGUgZ2V0TmFtZXNwYWNlZEtleTtcbn1cbiJdfQ==
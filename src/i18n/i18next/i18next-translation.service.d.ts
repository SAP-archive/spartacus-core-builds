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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<I18nextTranslationService>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<I18nextTranslationService>;
}

//# sourceMappingURL=i18next-translation.service.d.ts.map
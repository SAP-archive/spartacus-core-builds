import { Observable } from 'rxjs';
import { I18nConfig } from '../config/i18n-config';
import { TranslationChunkService } from '../translation-chunk.service';
import { TranslationService } from '../translation.service';
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
}

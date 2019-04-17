import { Observable } from 'rxjs';
import { TranslationService } from '../translation.service';
import { I18nConfig } from '../config/i18n-config';
import { TranslationNamespaceService } from '../translation-namespace.service';
export declare class I18nextTranslationService implements TranslationService {
    protected config: I18nConfig;
    protected translationNamespace: TranslationNamespaceService;
    private readonly NON_BREAKING_SPACE;
    protected readonly NAMESPACE_SEPARATOR = ":";
    constructor(config: I18nConfig, translationNamespace: TranslationNamespaceService);
    translate(key: string, options?: any, whitespaceUntilLoaded?: boolean): Observable<string>;
    loadNamespaces(namespaces: string | string[]): Promise<any>;
    /**
     * Returns a fallback value in case when the given key is missing
     * @param key
     */
    protected getFallbackValue(key: string): string;
    private reportMissingKey;
    private getNamespacedKey;
}

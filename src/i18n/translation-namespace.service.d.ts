import { I18nConfig } from './config/i18n-config';
export declare class TranslationNamespaceService {
    protected config: I18nConfig;
    constructor(config: I18nConfig);
    protected readonly KEY_SEPARATOR = ".";
    getNamespace(key: string): string;
    private getNamespaceFromMapping;
    private reportMissingNamespaceMapping;
}

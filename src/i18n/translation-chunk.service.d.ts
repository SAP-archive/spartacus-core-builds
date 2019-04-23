import { I18nConfig } from './config/i18n-config';
export declare class TranslationChunkService {
    protected config: I18nConfig;
    constructor(config: I18nConfig);
    protected readonly KEY_SEPARATOR = ".";
    getChunkNameForKey(key: string): string;
    private getChunkFromConfig;
}

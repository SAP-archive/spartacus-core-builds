import { I18nConfig } from './config/i18n-config';
import * as ɵngcc0 from '@angular/core';
export declare class TranslationChunkService {
    protected config: I18nConfig;
    protected duplicates: {
        [key: string]: string[];
    };
    protected chunks: {
        [key: string]: string;
    };
    constructor(config: I18nConfig);
    protected readonly KEY_SEPARATOR = ".";
    getChunkNameForKey(key: string): string;
    private warnDuplicates;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<TranslationChunkService>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<TranslationChunkService>;
}

//# sourceMappingURL=translation-chunk.service.d.ts.map
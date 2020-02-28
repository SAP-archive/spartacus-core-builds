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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRpb24tY2h1bmsuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJ0cmFuc2xhdGlvbi1jaHVuay5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBWUE7Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSTE4bkNvbmZpZyB9IGZyb20gJy4vY29uZmlnL2kxOG4tY29uZmlnJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFRyYW5zbGF0aW9uQ2h1bmtTZXJ2aWNlIHtcbiAgICBwcm90ZWN0ZWQgY29uZmlnOiBJMThuQ29uZmlnO1xuICAgIHByb3RlY3RlZCBkdXBsaWNhdGVzOiB7XG4gICAgICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1tdO1xuICAgIH07XG4gICAgcHJvdGVjdGVkIGNodW5rczoge1xuICAgICAgICBba2V5OiBzdHJpbmddOiBzdHJpbmc7XG4gICAgfTtcbiAgICBjb25zdHJ1Y3Rvcihjb25maWc6IEkxOG5Db25maWcpO1xuICAgIHByb3RlY3RlZCByZWFkb25seSBLRVlfU0VQQVJBVE9SID0gXCIuXCI7XG4gICAgZ2V0Q2h1bmtOYW1lRm9yS2V5KGtleTogc3RyaW5nKTogc3RyaW5nO1xuICAgIHByaXZhdGUgd2FybkR1cGxpY2F0ZXM7XG59XG4iXX0=
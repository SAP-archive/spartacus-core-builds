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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<TranslationChunkService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<TranslationChunkService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRpb24tY2h1bmsuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJ0cmFuc2xhdGlvbi1jaHVuay5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBWUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJMThuQ29uZmlnIH0gZnJvbSAnLi9jb25maWcvaTE4bi1jb25maWcnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgVHJhbnNsYXRpb25DaHVua1NlcnZpY2Uge1xuICAgIHByb3RlY3RlZCBjb25maWc6IEkxOG5Db25maWc7XG4gICAgcHJvdGVjdGVkIGR1cGxpY2F0ZXM6IHtcbiAgICAgICAgW2tleTogc3RyaW5nXTogc3RyaW5nW107XG4gICAgfTtcbiAgICBwcm90ZWN0ZWQgY2h1bmtzOiB7XG4gICAgICAgIFtrZXk6IHN0cmluZ106IHN0cmluZztcbiAgICB9O1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzogSTE4bkNvbmZpZyk7XG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IEtFWV9TRVBBUkFUT1IgPSBcIi5cIjtcbiAgICBnZXRDaHVua05hbWVGb3JLZXkoa2V5OiBzdHJpbmcpOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSB3YXJuRHVwbGljYXRlcztcbn1cbiJdfQ==
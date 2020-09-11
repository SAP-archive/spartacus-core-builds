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
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRpb24tY2h1bmsuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJ0cmFuc2xhdGlvbi1jaHVuay5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFZQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEkxOG5Db25maWcgfSBmcm9tICcuL2NvbmZpZy9pMThuLWNvbmZpZyc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBUcmFuc2xhdGlvbkNodW5rU2VydmljZSB7XG4gICAgcHJvdGVjdGVkIGNvbmZpZzogSTE4bkNvbmZpZztcbiAgICBwcm90ZWN0ZWQgZHVwbGljYXRlczoge1xuICAgICAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdbXTtcbiAgICB9O1xuICAgIHByb3RlY3RlZCBjaHVua3M6IHtcbiAgICAgICAgW2tleTogc3RyaW5nXTogc3RyaW5nO1xuICAgIH07XG4gICAgY29uc3RydWN0b3IoY29uZmlnOiBJMThuQ29uZmlnKTtcbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgS0VZX1NFUEFSQVRPUiA9IFwiLlwiO1xuICAgIGdldENodW5rTmFtZUZvcktleShrZXk6IHN0cmluZyk6IHN0cmluZztcbiAgICBwcml2YXRlIHdhcm5EdXBsaWNhdGVzO1xufVxuIl19
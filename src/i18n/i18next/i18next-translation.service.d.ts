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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bmV4dC10cmFuc2xhdGlvbi5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbImkxOG5leHQtdHJhbnNsYXRpb24uc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUlBOzs7Ozs7Ozs7Ozs7Ozs7OztBQWVBOyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFRyYW5zbGF0aW9uU2VydmljZSB9IGZyb20gJy4uL3RyYW5zbGF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgSTE4bkNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9pMThuLWNvbmZpZyc7XG5pbXBvcnQgeyBUcmFuc2xhdGlvbkNodW5rU2VydmljZSB9IGZyb20gJy4uL3RyYW5zbGF0aW9uLWNodW5rLnNlcnZpY2UnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgSTE4bmV4dFRyYW5zbGF0aW9uU2VydmljZSBpbXBsZW1lbnRzIFRyYW5zbGF0aW9uU2VydmljZSB7XG4gICAgcHJvdGVjdGVkIGNvbmZpZzogSTE4bkNvbmZpZztcbiAgICBwcm90ZWN0ZWQgdHJhbnNsYXRpb25DaHVuazogVHJhbnNsYXRpb25DaHVua1NlcnZpY2U7XG4gICAgcHJpdmF0ZSByZWFkb25seSBOT05fQlJFQUtJTkdfU1BBQ0U7XG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IE5BTUVTUEFDRV9TRVBBUkFUT1IgPSBcIjpcIjtcbiAgICBjb25zdHJ1Y3Rvcihjb25maWc6IEkxOG5Db25maWcsIHRyYW5zbGF0aW9uQ2h1bms6IFRyYW5zbGF0aW9uQ2h1bmtTZXJ2aWNlKTtcbiAgICB0cmFuc2xhdGUoa2V5OiBzdHJpbmcsIG9wdGlvbnM/OiBhbnksIHdoaXRlc3BhY2VVbnRpbExvYWRlZD86IGJvb2xlYW4pOiBPYnNlcnZhYmxlPHN0cmluZz47XG4gICAgbG9hZENodW5rcyhjaHVua05hbWVzOiBzdHJpbmcgfCBzdHJpbmdbXSk6IFByb21pc2U8YW55PjtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgZmFsbGJhY2sgdmFsdWUgaW4gY2FzZSB3aGVuIHRoZSBnaXZlbiBrZXkgaXMgbWlzc2luZ1xuICAgICAqIEBwYXJhbSBrZXlcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZ2V0RmFsbGJhY2tWYWx1ZShrZXk6IHN0cmluZyk6IHN0cmluZztcbiAgICBwcml2YXRlIHJlcG9ydE1pc3NpbmdLZXk7XG4gICAgcHJpdmF0ZSBnZXROYW1lc3BhY2VkS2V5O1xufVxuIl19
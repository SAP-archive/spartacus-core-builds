/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import i18next from 'i18next';
import { I18nConfig } from '../config/i18n-config';
import { TranslationChunkService } from '../translation-chunk.service';
export class I18nextTranslationService {
    /**
     * @param {?} config
     * @param {?} translationChunk
     */
    constructor(config, translationChunk) {
        this.config = config;
        this.translationChunk = translationChunk;
        this.NON_BREAKING_SPACE = String.fromCharCode(160);
        this.NAMESPACE_SEPARATOR = ':';
    }
    /**
     * @param {?} key
     * @param {?=} options
     * @param {?=} whitespaceUntilLoaded
     * @return {?}
     */
    translate(key, options = {}, whitespaceUntilLoaded = false) {
        // If we've already loaded the chunk (or failed to load), we should immediately emit the value
        // (or the fallback value in case the key is missing).
        // If we've already loaded the chunk (or failed to load), we should immediately emit the value
        // (or the fallback value in case the key is missing).
        // Moreover, we SHOULD emit a value (or a fallback value) synchronously (not in a promise/setTimeout).
        // Otherwise, we the will trigger additional deferred change detection in a view that consumes the returned observable,
        // which together with `switchMap` operator may lead to an infinite loop.
        /** @type {?} */
        const chunkName = this.translationChunk.getChunkNameForKey(key);
        /** @type {?} */
        const namespacedKey = this.getNamespacedKey(key, chunkName);
        return new Observable((/**
         * @param {?} subscriber
         * @return {?}
         */
        subscriber => {
            /** @type {?} */
            const translate = (/**
             * @return {?}
             */
            () => {
                if (i18next.exists(namespacedKey, options)) {
                    subscriber.next(i18next.t(namespacedKey, options));
                }
                else {
                    if (whitespaceUntilLoaded) {
                        subscriber.next(this.NON_BREAKING_SPACE);
                    }
                    i18next.loadNamespaces(chunkName, (/**
                     * @return {?}
                     */
                    () => {
                        if (!i18next.exists(namespacedKey, options)) {
                            this.reportMissingKey(key, chunkName);
                            subscriber.next(this.getFallbackValue(namespacedKey));
                        }
                        else {
                            subscriber.next(i18next.t(namespacedKey, options));
                        }
                    }));
                }
            });
            translate();
            i18next.on('languageChanged', translate);
            return (/**
             * @return {?}
             */
            () => i18next.off('languageChanged', translate));
        }));
    }
    /**
     * @param {?} chunkNames
     * @return {?}
     */
    loadChunks(chunkNames) {
        return i18next.loadNamespaces(chunkNames);
    }
    /**
     * Returns a fallback value in case when the given key is missing
     * @protected
     * @param {?} key
     * @return {?}
     */
    getFallbackValue(key) {
        return this.config.production ? this.NON_BREAKING_SPACE : `[${key}]`;
    }
    /**
     * @private
     * @param {?} key
     * @param {?} chunkName
     * @return {?}
     */
    reportMissingKey(key, chunkName) {
        if (!this.config.production) {
            console.warn(`Translation key missing '${key}' in the chunk '${chunkName}'`);
        }
    }
    /**
     * @private
     * @param {?} key
     * @param {?} chunk
     * @return {?}
     */
    getNamespacedKey(key, chunk) {
        return chunk + this.NAMESPACE_SEPARATOR + key;
    }
}
I18nextTranslationService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
I18nextTranslationService.ctorParameters = () => [
    { type: I18nConfig },
    { type: TranslationChunkService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    I18nextTranslationService.prototype.NON_BREAKING_SPACE;
    /**
     * @type {?}
     * @protected
     */
    I18nextTranslationService.prototype.NAMESPACE_SEPARATOR;
    /**
     * @type {?}
     * @protected
     */
    I18nextTranslationService.prototype.config;
    /**
     * @type {?}
     * @protected
     */
    I18nextTranslationService.prototype.translationChunk;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bmV4dC10cmFuc2xhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2kxOG4vaTE4bmV4dC9pMThuZXh0LXRyYW5zbGF0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVsQyxPQUFPLE9BQU8sTUFBTSxTQUFTLENBQUM7QUFDOUIsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ25ELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBR3ZFLE1BQU0sT0FBTyx5QkFBeUI7Ozs7O0lBSXBDLFlBQ1ksTUFBa0IsRUFDbEIsZ0JBQXlDO1FBRHpDLFdBQU0sR0FBTixNQUFNLENBQVk7UUFDbEIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUF5QjtRQUxwQyx1QkFBa0IsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzVDLHdCQUFtQixHQUFHLEdBQUcsQ0FBQztJQUsxQyxDQUFDOzs7Ozs7O0lBRUosU0FBUyxDQUNQLEdBQVcsRUFDWCxVQUFlLEVBQUUsRUFDakIsd0JBQWlDLEtBQUs7UUFFdEMsOEZBQThGO1FBQzlGLHNEQUFzRDs7Ozs7OztjQU1oRCxTQUFTLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQzs7Y0FDekQsYUFBYSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsU0FBUyxDQUFDO1FBRTNELE9BQU8sSUFBSSxVQUFVOzs7O1FBQVMsVUFBVSxDQUFDLEVBQUU7O2tCQUNuQyxTQUFTOzs7WUFBRyxHQUFHLEVBQUU7Z0JBQ3JCLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLEVBQUU7b0JBQzFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztpQkFDcEQ7cUJBQU07b0JBQ0wsSUFBSSxxQkFBcUIsRUFBRTt3QkFDekIsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztxQkFDMUM7b0JBQ0QsT0FBTyxDQUFDLGNBQWMsQ0FBQyxTQUFTOzs7b0JBQUUsR0FBRyxFQUFFO3dCQUNyQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLEVBQUU7NEJBQzNDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsU0FBUyxDQUFDLENBQUM7NEJBQ3RDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7eUJBQ3ZEOzZCQUFNOzRCQUNMLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQzt5QkFDcEQ7b0JBQ0gsQ0FBQyxFQUFDLENBQUM7aUJBQ0o7WUFDSCxDQUFDLENBQUE7WUFFRCxTQUFTLEVBQUUsQ0FBQztZQUNaLE9BQU8sQ0FBQyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDekM7OztZQUFPLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsU0FBUyxDQUFDLEVBQUM7UUFDekQsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxVQUE2QjtRQUN0QyxPQUFPLE9BQU8sQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDNUMsQ0FBQzs7Ozs7OztJQU1TLGdCQUFnQixDQUFDLEdBQVc7UUFDcEMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO0lBQ3ZFLENBQUM7Ozs7Ozs7SUFFTyxnQkFBZ0IsQ0FBQyxHQUFXLEVBQUUsU0FBaUI7UUFDckQsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFO1lBQzNCLE9BQU8sQ0FBQyxJQUFJLENBQ1YsNEJBQTRCLEdBQUcsbUJBQW1CLFNBQVMsR0FBRyxDQUMvRCxDQUFDO1NBQ0g7SUFDSCxDQUFDOzs7Ozs7O0lBRU8sZ0JBQWdCLENBQUMsR0FBVyxFQUFFLEtBQWE7UUFDakQsT0FBTyxLQUFLLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEdBQUcsQ0FBQztJQUNoRCxDQUFDOzs7WUF4RUYsVUFBVTs7OztZQUhGLFVBQVU7WUFDVix1QkFBdUI7Ozs7Ozs7SUFJOUIsdURBQStEOzs7OztJQUMvRCx3REFBNkM7Ozs7O0lBRzNDLDJDQUE0Qjs7Ozs7SUFDNUIscURBQW1EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgVHJhbnNsYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vdHJhbnNsYXRpb24uc2VydmljZSc7XG5pbXBvcnQgaTE4bmV4dCBmcm9tICdpMThuZXh0JztcbmltcG9ydCB7IEkxOG5Db25maWcgfSBmcm9tICcuLi9jb25maWcvaTE4bi1jb25maWcnO1xuaW1wb3J0IHsgVHJhbnNsYXRpb25DaHVua1NlcnZpY2UgfSBmcm9tICcuLi90cmFuc2xhdGlvbi1jaHVuay5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEkxOG5leHRUcmFuc2xhdGlvblNlcnZpY2UgaW1wbGVtZW50cyBUcmFuc2xhdGlvblNlcnZpY2Uge1xuICBwcml2YXRlIHJlYWRvbmx5IE5PTl9CUkVBS0lOR19TUEFDRSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMTYwKTtcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IE5BTUVTUEFDRV9TRVBBUkFUT1IgPSAnOic7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNvbmZpZzogSTE4bkNvbmZpZyxcbiAgICBwcm90ZWN0ZWQgdHJhbnNsYXRpb25DaHVuazogVHJhbnNsYXRpb25DaHVua1NlcnZpY2VcbiAgKSB7fVxuXG4gIHRyYW5zbGF0ZShcbiAgICBrZXk6IHN0cmluZyxcbiAgICBvcHRpb25zOiBhbnkgPSB7fSxcbiAgICB3aGl0ZXNwYWNlVW50aWxMb2FkZWQ6IGJvb2xlYW4gPSBmYWxzZVxuICApOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIC8vIElmIHdlJ3ZlIGFscmVhZHkgbG9hZGVkIHRoZSBjaHVuayAob3IgZmFpbGVkIHRvIGxvYWQpLCB3ZSBzaG91bGQgaW1tZWRpYXRlbHkgZW1pdCB0aGUgdmFsdWVcbiAgICAvLyAob3IgdGhlIGZhbGxiYWNrIHZhbHVlIGluIGNhc2UgdGhlIGtleSBpcyBtaXNzaW5nKS5cblxuICAgIC8vIE1vcmVvdmVyLCB3ZSBTSE9VTEQgZW1pdCBhIHZhbHVlIChvciBhIGZhbGxiYWNrIHZhbHVlKSBzeW5jaHJvbm91c2x5IChub3QgaW4gYSBwcm9taXNlL3NldFRpbWVvdXQpLlxuICAgIC8vIE90aGVyd2lzZSwgd2UgdGhlIHdpbGwgdHJpZ2dlciBhZGRpdGlvbmFsIGRlZmVycmVkIGNoYW5nZSBkZXRlY3Rpb24gaW4gYSB2aWV3IHRoYXQgY29uc3VtZXMgdGhlIHJldHVybmVkIG9ic2VydmFibGUsXG4gICAgLy8gd2hpY2ggdG9nZXRoZXIgd2l0aCBgc3dpdGNoTWFwYCBvcGVyYXRvciBtYXkgbGVhZCB0byBhbiBpbmZpbml0ZSBsb29wLlxuXG4gICAgY29uc3QgY2h1bmtOYW1lID0gdGhpcy50cmFuc2xhdGlvbkNodW5rLmdldENodW5rTmFtZUZvcktleShrZXkpO1xuICAgIGNvbnN0IG5hbWVzcGFjZWRLZXkgPSB0aGlzLmdldE5hbWVzcGFjZWRLZXkoa2V5LCBjaHVua05hbWUpO1xuXG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlPHN0cmluZz4oc3Vic2NyaWJlciA9PiB7XG4gICAgICBjb25zdCB0cmFuc2xhdGUgPSAoKSA9PiB7XG4gICAgICAgIGlmIChpMThuZXh0LmV4aXN0cyhuYW1lc3BhY2VkS2V5LCBvcHRpb25zKSkge1xuICAgICAgICAgIHN1YnNjcmliZXIubmV4dChpMThuZXh0LnQobmFtZXNwYWNlZEtleSwgb3B0aW9ucykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICh3aGl0ZXNwYWNlVW50aWxMb2FkZWQpIHtcbiAgICAgICAgICAgIHN1YnNjcmliZXIubmV4dCh0aGlzLk5PTl9CUkVBS0lOR19TUEFDRSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGkxOG5leHQubG9hZE5hbWVzcGFjZXMoY2h1bmtOYW1lLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWkxOG5leHQuZXhpc3RzKG5hbWVzcGFjZWRLZXksIG9wdGlvbnMpKSB7XG4gICAgICAgICAgICAgIHRoaXMucmVwb3J0TWlzc2luZ0tleShrZXksIGNodW5rTmFtZSk7XG4gICAgICAgICAgICAgIHN1YnNjcmliZXIubmV4dCh0aGlzLmdldEZhbGxiYWNrVmFsdWUobmFtZXNwYWNlZEtleSkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgc3Vic2NyaWJlci5uZXh0KGkxOG5leHQudChuYW1lc3BhY2VkS2V5LCBvcHRpb25zKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHRyYW5zbGF0ZSgpO1xuICAgICAgaTE4bmV4dC5vbignbGFuZ3VhZ2VDaGFuZ2VkJywgdHJhbnNsYXRlKTtcbiAgICAgIHJldHVybiAoKSA9PiBpMThuZXh0Lm9mZignbGFuZ3VhZ2VDaGFuZ2VkJywgdHJhbnNsYXRlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGxvYWRDaHVua3MoY2h1bmtOYW1lczogc3RyaW5nIHwgc3RyaW5nW10pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBpMThuZXh0LmxvYWROYW1lc3BhY2VzKGNodW5rTmFtZXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBmYWxsYmFjayB2YWx1ZSBpbiBjYXNlIHdoZW4gdGhlIGdpdmVuIGtleSBpcyBtaXNzaW5nXG4gICAqIEBwYXJhbSBrZXlcbiAgICovXG4gIHByb3RlY3RlZCBnZXRGYWxsYmFja1ZhbHVlKGtleTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5jb25maWcucHJvZHVjdGlvbiA/IHRoaXMuTk9OX0JSRUFLSU5HX1NQQUNFIDogYFske2tleX1dYDtcbiAgfVxuXG4gIHByaXZhdGUgcmVwb3J0TWlzc2luZ0tleShrZXk6IHN0cmluZywgY2h1bmtOYW1lOiBzdHJpbmcpIHtcbiAgICBpZiAoIXRoaXMuY29uZmlnLnByb2R1Y3Rpb24pIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYFRyYW5zbGF0aW9uIGtleSBtaXNzaW5nICcke2tleX0nIGluIHRoZSBjaHVuayAnJHtjaHVua05hbWV9J2BcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXROYW1lc3BhY2VkS2V5KGtleTogc3RyaW5nLCBjaHVuazogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gY2h1bmsgKyB0aGlzLk5BTUVTUEFDRV9TRVBBUkFUT1IgKyBrZXk7XG4gIH1cbn1cbiJdfQ==
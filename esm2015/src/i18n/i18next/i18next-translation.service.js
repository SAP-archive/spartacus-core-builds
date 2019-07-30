/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, isDevMode } from '@angular/core';
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
        return isDevMode() ? `[${key}]` : this.NON_BREAKING_SPACE;
    }
    /**
     * @private
     * @param {?} key
     * @param {?} chunkName
     * @return {?}
     */
    reportMissingKey(key, chunkName) {
        if (isDevMode()) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bmV4dC10cmFuc2xhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2kxOG4vaTE4bmV4dC9pMThuZXh0LXRyYW5zbGF0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3RELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFbEMsT0FBTyxPQUFPLE1BQU0sU0FBUyxDQUFDO0FBQzlCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUd2RSxNQUFNLE9BQU8seUJBQXlCOzs7OztJQUlwQyxZQUNZLE1BQWtCLEVBQ2xCLGdCQUF5QztRQUR6QyxXQUFNLEdBQU4sTUFBTSxDQUFZO1FBQ2xCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBeUI7UUFMcEMsdUJBQWtCLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM1Qyx3QkFBbUIsR0FBRyxHQUFHLENBQUM7SUFLMUMsQ0FBQzs7Ozs7OztJQUVKLFNBQVMsQ0FDUCxHQUFXLEVBQ1gsVUFBZSxFQUFFLEVBQ2pCLHdCQUFpQyxLQUFLO1FBRXRDLDhGQUE4RjtRQUM5RixzREFBc0Q7Ozs7Ozs7Y0FNaEQsU0FBUyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUM7O2NBQ3pELGFBQWEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLFNBQVMsQ0FBQztRQUUzRCxPQUFPLElBQUksVUFBVTs7OztRQUFTLFVBQVUsQ0FBQyxFQUFFOztrQkFDbkMsU0FBUzs7O1lBQUcsR0FBRyxFQUFFO2dCQUNyQixJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxFQUFFO29CQUMxQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7aUJBQ3BEO3FCQUFNO29CQUNMLElBQUkscUJBQXFCLEVBQUU7d0JBQ3pCLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7cUJBQzFDO29CQUNELE9BQU8sQ0FBQyxjQUFjLENBQUMsU0FBUzs7O29CQUFFLEdBQUcsRUFBRTt3QkFDckMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxFQUFFOzRCQUMzQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLFNBQVMsQ0FBQyxDQUFDOzRCQUN0QyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO3lCQUN2RDs2QkFBTTs0QkFDTCxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7eUJBQ3BEO29CQUNILENBQUMsRUFBQyxDQUFDO2lCQUNKO1lBQ0gsQ0FBQyxDQUFBO1lBRUQsU0FBUyxFQUFFLENBQUM7WUFDWixPQUFPLENBQUMsRUFBRSxDQUFDLGlCQUFpQixFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQ3pDOzs7WUFBTyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixFQUFFLFNBQVMsQ0FBQyxFQUFDO1FBQ3pELENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsVUFBNkI7UUFDdEMsT0FBTyxPQUFPLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzVDLENBQUM7Ozs7Ozs7SUFNUyxnQkFBZ0IsQ0FBQyxHQUFXO1FBQ3BDLE9BQU8sU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztJQUM1RCxDQUFDOzs7Ozs7O0lBRU8sZ0JBQWdCLENBQUMsR0FBVyxFQUFFLFNBQWlCO1FBQ3JELElBQUksU0FBUyxFQUFFLEVBQUU7WUFDZixPQUFPLENBQUMsSUFBSSxDQUNWLDRCQUE0QixHQUFHLG1CQUFtQixTQUFTLEdBQUcsQ0FDL0QsQ0FBQztTQUNIO0lBQ0gsQ0FBQzs7Ozs7OztJQUVPLGdCQUFnQixDQUFDLEdBQVcsRUFBRSxLQUFhO1FBQ2pELE9BQU8sS0FBSyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxHQUFHLENBQUM7SUFDaEQsQ0FBQzs7O1lBeEVGLFVBQVU7Ozs7WUFIRixVQUFVO1lBQ1YsdUJBQXVCOzs7Ozs7O0lBSTlCLHVEQUErRDs7Ozs7SUFDL0Qsd0RBQTZDOzs7OztJQUczQywyQ0FBNEI7Ozs7O0lBQzVCLHFEQUFtRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIGlzRGV2TW9kZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgVHJhbnNsYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vdHJhbnNsYXRpb24uc2VydmljZSc7XG5pbXBvcnQgaTE4bmV4dCBmcm9tICdpMThuZXh0JztcbmltcG9ydCB7IEkxOG5Db25maWcgfSBmcm9tICcuLi9jb25maWcvaTE4bi1jb25maWcnO1xuaW1wb3J0IHsgVHJhbnNsYXRpb25DaHVua1NlcnZpY2UgfSBmcm9tICcuLi90cmFuc2xhdGlvbi1jaHVuay5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEkxOG5leHRUcmFuc2xhdGlvblNlcnZpY2UgaW1wbGVtZW50cyBUcmFuc2xhdGlvblNlcnZpY2Uge1xuICBwcml2YXRlIHJlYWRvbmx5IE5PTl9CUkVBS0lOR19TUEFDRSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMTYwKTtcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IE5BTUVTUEFDRV9TRVBBUkFUT1IgPSAnOic7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNvbmZpZzogSTE4bkNvbmZpZyxcbiAgICBwcm90ZWN0ZWQgdHJhbnNsYXRpb25DaHVuazogVHJhbnNsYXRpb25DaHVua1NlcnZpY2VcbiAgKSB7fVxuXG4gIHRyYW5zbGF0ZShcbiAgICBrZXk6IHN0cmluZyxcbiAgICBvcHRpb25zOiBhbnkgPSB7fSxcbiAgICB3aGl0ZXNwYWNlVW50aWxMb2FkZWQ6IGJvb2xlYW4gPSBmYWxzZVxuICApOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIC8vIElmIHdlJ3ZlIGFscmVhZHkgbG9hZGVkIHRoZSBjaHVuayAob3IgZmFpbGVkIHRvIGxvYWQpLCB3ZSBzaG91bGQgaW1tZWRpYXRlbHkgZW1pdCB0aGUgdmFsdWVcbiAgICAvLyAob3IgdGhlIGZhbGxiYWNrIHZhbHVlIGluIGNhc2UgdGhlIGtleSBpcyBtaXNzaW5nKS5cblxuICAgIC8vIE1vcmVvdmVyLCB3ZSBTSE9VTEQgZW1pdCBhIHZhbHVlIChvciBhIGZhbGxiYWNrIHZhbHVlKSBzeW5jaHJvbm91c2x5IChub3QgaW4gYSBwcm9taXNlL3NldFRpbWVvdXQpLlxuICAgIC8vIE90aGVyd2lzZSwgd2UgdGhlIHdpbGwgdHJpZ2dlciBhZGRpdGlvbmFsIGRlZmVycmVkIGNoYW5nZSBkZXRlY3Rpb24gaW4gYSB2aWV3IHRoYXQgY29uc3VtZXMgdGhlIHJldHVybmVkIG9ic2VydmFibGUsXG4gICAgLy8gd2hpY2ggdG9nZXRoZXIgd2l0aCBgc3dpdGNoTWFwYCBvcGVyYXRvciBtYXkgbGVhZCB0byBhbiBpbmZpbml0ZSBsb29wLlxuXG4gICAgY29uc3QgY2h1bmtOYW1lID0gdGhpcy50cmFuc2xhdGlvbkNodW5rLmdldENodW5rTmFtZUZvcktleShrZXkpO1xuICAgIGNvbnN0IG5hbWVzcGFjZWRLZXkgPSB0aGlzLmdldE5hbWVzcGFjZWRLZXkoa2V5LCBjaHVua05hbWUpO1xuXG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlPHN0cmluZz4oc3Vic2NyaWJlciA9PiB7XG4gICAgICBjb25zdCB0cmFuc2xhdGUgPSAoKSA9PiB7XG4gICAgICAgIGlmIChpMThuZXh0LmV4aXN0cyhuYW1lc3BhY2VkS2V5LCBvcHRpb25zKSkge1xuICAgICAgICAgIHN1YnNjcmliZXIubmV4dChpMThuZXh0LnQobmFtZXNwYWNlZEtleSwgb3B0aW9ucykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICh3aGl0ZXNwYWNlVW50aWxMb2FkZWQpIHtcbiAgICAgICAgICAgIHN1YnNjcmliZXIubmV4dCh0aGlzLk5PTl9CUkVBS0lOR19TUEFDRSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGkxOG5leHQubG9hZE5hbWVzcGFjZXMoY2h1bmtOYW1lLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWkxOG5leHQuZXhpc3RzKG5hbWVzcGFjZWRLZXksIG9wdGlvbnMpKSB7XG4gICAgICAgICAgICAgIHRoaXMucmVwb3J0TWlzc2luZ0tleShrZXksIGNodW5rTmFtZSk7XG4gICAgICAgICAgICAgIHN1YnNjcmliZXIubmV4dCh0aGlzLmdldEZhbGxiYWNrVmFsdWUobmFtZXNwYWNlZEtleSkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgc3Vic2NyaWJlci5uZXh0KGkxOG5leHQudChuYW1lc3BhY2VkS2V5LCBvcHRpb25zKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHRyYW5zbGF0ZSgpO1xuICAgICAgaTE4bmV4dC5vbignbGFuZ3VhZ2VDaGFuZ2VkJywgdHJhbnNsYXRlKTtcbiAgICAgIHJldHVybiAoKSA9PiBpMThuZXh0Lm9mZignbGFuZ3VhZ2VDaGFuZ2VkJywgdHJhbnNsYXRlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGxvYWRDaHVua3MoY2h1bmtOYW1lczogc3RyaW5nIHwgc3RyaW5nW10pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBpMThuZXh0LmxvYWROYW1lc3BhY2VzKGNodW5rTmFtZXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBmYWxsYmFjayB2YWx1ZSBpbiBjYXNlIHdoZW4gdGhlIGdpdmVuIGtleSBpcyBtaXNzaW5nXG4gICAqIEBwYXJhbSBrZXlcbiAgICovXG4gIHByb3RlY3RlZCBnZXRGYWxsYmFja1ZhbHVlKGtleTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gaXNEZXZNb2RlKCkgPyBgWyR7a2V5fV1gIDogdGhpcy5OT05fQlJFQUtJTkdfU1BBQ0U7XG4gIH1cblxuICBwcml2YXRlIHJlcG9ydE1pc3NpbmdLZXkoa2V5OiBzdHJpbmcsIGNodW5rTmFtZTogc3RyaW5nKSB7XG4gICAgaWYgKGlzRGV2TW9kZSgpKSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGBUcmFuc2xhdGlvbiBrZXkgbWlzc2luZyAnJHtrZXl9JyBpbiB0aGUgY2h1bmsgJyR7Y2h1bmtOYW1lfSdgXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0TmFtZXNwYWNlZEtleShrZXk6IHN0cmluZywgY2h1bms6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGNodW5rICsgdGhpcy5OQU1FU1BBQ0VfU0VQQVJBVE9SICsga2V5O1xuICB9XG59XG4iXX0=
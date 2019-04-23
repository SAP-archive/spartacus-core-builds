/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import i18next from 'i18next';
import { I18nConfig } from '../config/i18n-config';
import { TranslationChunkService } from '../translation-chunk.service';
var I18nextTranslationService = /** @class */ (function () {
    function I18nextTranslationService(config, translationChunk) {
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
    I18nextTranslationService.prototype.translate = /**
     * @param {?} key
     * @param {?=} options
     * @param {?=} whitespaceUntilLoaded
     * @return {?}
     */
    function (key, options, whitespaceUntilLoaded) {
        // If we've already loaded the chunk (or failed to load), we should immediately emit the value
        // (or the fallback value in case the key is missing).
        var _this = this;
        if (options === void 0) { options = {}; }
        if (whitespaceUntilLoaded === void 0) { whitespaceUntilLoaded = false; }
        // If we've already loaded the chunk (or failed to load), we should immediately emit the value
        // (or the fallback value in case the key is missing).
        // Moreover, we SHOULD emit a value (or a fallback value) synchronously (not in a promise/setTimeout).
        // Otherwise, we the will trigger additional deferred change detection in a view that consumes the returned observable,
        // which together with `switchMap` operator may lead to an infinite loop.
        /** @type {?} */
        var chunkName = this.translationChunk.getChunkNameForKey(key);
        /** @type {?} */
        var namespacedKey = this.getNamespacedKey(key, chunkName);
        return new Observable(function (subscriber) {
            /** @type {?} */
            var translate = function () {
                if (i18next.exists(namespacedKey, options)) {
                    subscriber.next(i18next.t(namespacedKey, options));
                }
                else {
                    if (whitespaceUntilLoaded) {
                        subscriber.next(_this.NON_BREAKING_SPACE);
                    }
                    i18next.loadNamespaces(chunkName, function () {
                        if (!i18next.exists(namespacedKey, options)) {
                            _this.reportMissingKey(key, chunkName);
                            subscriber.next(_this.getFallbackValue(namespacedKey));
                        }
                        else {
                            subscriber.next(i18next.t(namespacedKey, options));
                        }
                    });
                }
            };
            translate();
            i18next.on('languageChanged', translate);
            return function () { return i18next.off('languageChanged', translate); };
        });
    };
    /**
     * @param {?} chunkNames
     * @return {?}
     */
    I18nextTranslationService.prototype.loadChunks = /**
     * @param {?} chunkNames
     * @return {?}
     */
    function (chunkNames) {
        return i18next.loadNamespaces(chunkNames);
    };
    /**
     * Returns a fallback value in case when the given key is missing
     * @param key
     */
    /**
     * Returns a fallback value in case when the given key is missing
     * @protected
     * @param {?} key
     * @return {?}
     */
    I18nextTranslationService.prototype.getFallbackValue = /**
     * Returns a fallback value in case when the given key is missing
     * @protected
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return this.config.production ? this.NON_BREAKING_SPACE : "[" + key + "]";
    };
    /**
     * @private
     * @param {?} key
     * @param {?} chunkName
     * @return {?}
     */
    I18nextTranslationService.prototype.reportMissingKey = /**
     * @private
     * @param {?} key
     * @param {?} chunkName
     * @return {?}
     */
    function (key, chunkName) {
        if (!this.config.production) {
            console.warn("Translation key missing '" + key + "' in the chunk '" + chunkName + "'");
        }
    };
    /**
     * @private
     * @param {?} key
     * @param {?} chunk
     * @return {?}
     */
    I18nextTranslationService.prototype.getNamespacedKey = /**
     * @private
     * @param {?} key
     * @param {?} chunk
     * @return {?}
     */
    function (key, chunk) {
        return chunk + this.NAMESPACE_SEPARATOR + key;
    };
    I18nextTranslationService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    I18nextTranslationService.ctorParameters = function () { return [
        { type: I18nConfig },
        { type: TranslationChunkService }
    ]; };
    return I18nextTranslationService;
}());
export { I18nextTranslationService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bmV4dC10cmFuc2xhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2kxOG4vaTE4bmV4dC9pMThuZXh0LXRyYW5zbGF0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVsQyxPQUFPLE9BQU8sTUFBTSxTQUFTLENBQUM7QUFDOUIsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ25ELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRXZFO0lBS0UsbUNBQ1ksTUFBa0IsRUFDbEIsZ0JBQXlDO1FBRHpDLFdBQU0sR0FBTixNQUFNLENBQVk7UUFDbEIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUF5QjtRQUxwQyx1QkFBa0IsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzVDLHdCQUFtQixHQUFHLEdBQUcsQ0FBQztJQUsxQyxDQUFDOzs7Ozs7O0lBRUosNkNBQVM7Ozs7OztJQUFULFVBQ0UsR0FBVyxFQUNYLE9BQWlCLEVBQ2pCLHFCQUFzQztRQUV0Qyw4RkFBOEY7UUFDOUYsc0RBQXNEO1FBTnhELGlCQXNDQztRQXBDQyx3QkFBQSxFQUFBLFlBQWlCO1FBQ2pCLHNDQUFBLEVBQUEsNkJBQXNDOzs7Ozs7O1lBU2hDLFNBQVMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDOztZQUN6RCxhQUFhLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxTQUFTLENBQUM7UUFFM0QsT0FBTyxJQUFJLFVBQVUsQ0FBUyxVQUFBLFVBQVU7O2dCQUNoQyxTQUFTLEdBQUc7Z0JBQ2hCLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLEVBQUU7b0JBQzFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztpQkFDcEQ7cUJBQU07b0JBQ0wsSUFBSSxxQkFBcUIsRUFBRTt3QkFDekIsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztxQkFDMUM7b0JBQ0QsT0FBTyxDQUFDLGNBQWMsQ0FBQyxTQUFTLEVBQUU7d0JBQ2hDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsRUFBRTs0QkFDM0MsS0FBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxTQUFTLENBQUMsQ0FBQzs0QkFDdEMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQzt5QkFDdkQ7NkJBQU07NEJBQ0wsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO3lCQUNwRDtvQkFDSCxDQUFDLENBQUMsQ0FBQztpQkFDSjtZQUNILENBQUM7WUFFRCxTQUFTLEVBQUUsQ0FBQztZQUNaLE9BQU8sQ0FBQyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDekMsT0FBTyxjQUFNLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxTQUFTLENBQUMsRUFBekMsQ0FBeUMsQ0FBQztRQUN6RCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsOENBQVU7Ozs7SUFBVixVQUFXLFVBQTZCO1FBQ3RDLE9BQU8sT0FBTyxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7O0lBQ08sb0RBQWdCOzs7Ozs7SUFBMUIsVUFBMkIsR0FBVztRQUNwQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLE1BQUksR0FBRyxNQUFHLENBQUM7SUFDdkUsQ0FBQzs7Ozs7OztJQUVPLG9EQUFnQjs7Ozs7O0lBQXhCLFVBQXlCLEdBQVcsRUFBRSxTQUFpQjtRQUNyRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUU7WUFDM0IsT0FBTyxDQUFDLElBQUksQ0FDViw4QkFBNEIsR0FBRyx3QkFBbUIsU0FBUyxNQUFHLENBQy9ELENBQUM7U0FDSDtJQUNILENBQUM7Ozs7Ozs7SUFFTyxvREFBZ0I7Ozs7OztJQUF4QixVQUF5QixHQUFXLEVBQUUsS0FBYTtRQUNqRCxPQUFPLEtBQUssR0FBRyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsR0FBRyxDQUFDO0lBQ2hELENBQUM7O2dCQXhFRixVQUFVOzs7O2dCQUhGLFVBQVU7Z0JBQ1YsdUJBQXVCOztJQTJFaEMsZ0NBQUM7Q0FBQSxBQXpFRCxJQXlFQztTQXhFWSx5QkFBeUI7Ozs7OztJQUNwQyx1REFBK0Q7Ozs7O0lBQy9ELHdEQUE2Qzs7Ozs7SUFHM0MsMkNBQTRCOzs7OztJQUM1QixxREFBbUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBUcmFuc2xhdGlvblNlcnZpY2UgfSBmcm9tICcuLi90cmFuc2xhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCBpMThuZXh0IGZyb20gJ2kxOG5leHQnO1xuaW1wb3J0IHsgSTE4bkNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9pMThuLWNvbmZpZyc7XG5pbXBvcnQgeyBUcmFuc2xhdGlvbkNodW5rU2VydmljZSB9IGZyb20gJy4uL3RyYW5zbGF0aW9uLWNodW5rLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSTE4bmV4dFRyYW5zbGF0aW9uU2VydmljZSBpbXBsZW1lbnRzIFRyYW5zbGF0aW9uU2VydmljZSB7XG4gIHByaXZhdGUgcmVhZG9ubHkgTk9OX0JSRUFLSU5HX1NQQUNFID0gU3RyaW5nLmZyb21DaGFyQ29kZSgxNjApO1xuICBwcm90ZWN0ZWQgcmVhZG9ubHkgTkFNRVNQQUNFX1NFUEFSQVRPUiA9ICc6JztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY29uZmlnOiBJMThuQ29uZmlnLFxuICAgIHByb3RlY3RlZCB0cmFuc2xhdGlvbkNodW5rOiBUcmFuc2xhdGlvbkNodW5rU2VydmljZVxuICApIHt9XG5cbiAgdHJhbnNsYXRlKFxuICAgIGtleTogc3RyaW5nLFxuICAgIG9wdGlvbnM6IGFueSA9IHt9LFxuICAgIHdoaXRlc3BhY2VVbnRpbExvYWRlZDogYm9vbGVhbiA9IGZhbHNlXG4gICk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgLy8gSWYgd2UndmUgYWxyZWFkeSBsb2FkZWQgdGhlIGNodW5rIChvciBmYWlsZWQgdG8gbG9hZCksIHdlIHNob3VsZCBpbW1lZGlhdGVseSBlbWl0IHRoZSB2YWx1ZVxuICAgIC8vIChvciB0aGUgZmFsbGJhY2sgdmFsdWUgaW4gY2FzZSB0aGUga2V5IGlzIG1pc3NpbmcpLlxuXG4gICAgLy8gTW9yZW92ZXIsIHdlIFNIT1VMRCBlbWl0IGEgdmFsdWUgKG9yIGEgZmFsbGJhY2sgdmFsdWUpIHN5bmNocm9ub3VzbHkgKG5vdCBpbiBhIHByb21pc2Uvc2V0VGltZW91dCkuXG4gICAgLy8gT3RoZXJ3aXNlLCB3ZSB0aGUgd2lsbCB0cmlnZ2VyIGFkZGl0aW9uYWwgZGVmZXJyZWQgY2hhbmdlIGRldGVjdGlvbiBpbiBhIHZpZXcgdGhhdCBjb25zdW1lcyB0aGUgcmV0dXJuZWQgb2JzZXJ2YWJsZSxcbiAgICAvLyB3aGljaCB0b2dldGhlciB3aXRoIGBzd2l0Y2hNYXBgIG9wZXJhdG9yIG1heSBsZWFkIHRvIGFuIGluZmluaXRlIGxvb3AuXG5cbiAgICBjb25zdCBjaHVua05hbWUgPSB0aGlzLnRyYW5zbGF0aW9uQ2h1bmsuZ2V0Q2h1bmtOYW1lRm9yS2V5KGtleSk7XG4gICAgY29uc3QgbmFtZXNwYWNlZEtleSA9IHRoaXMuZ2V0TmFtZXNwYWNlZEtleShrZXksIGNodW5rTmFtZSk7XG5cbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGU8c3RyaW5nPihzdWJzY3JpYmVyID0+IHtcbiAgICAgIGNvbnN0IHRyYW5zbGF0ZSA9ICgpID0+IHtcbiAgICAgICAgaWYgKGkxOG5leHQuZXhpc3RzKG5hbWVzcGFjZWRLZXksIG9wdGlvbnMpKSB7XG4gICAgICAgICAgc3Vic2NyaWJlci5uZXh0KGkxOG5leHQudChuYW1lc3BhY2VkS2V5LCBvcHRpb25zKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHdoaXRlc3BhY2VVbnRpbExvYWRlZCkge1xuICAgICAgICAgICAgc3Vic2NyaWJlci5uZXh0KHRoaXMuTk9OX0JSRUFLSU5HX1NQQUNFKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaTE4bmV4dC5sb2FkTmFtZXNwYWNlcyhjaHVua05hbWUsICgpID0+IHtcbiAgICAgICAgICAgIGlmICghaTE4bmV4dC5leGlzdHMobmFtZXNwYWNlZEtleSwgb3B0aW9ucykpIHtcbiAgICAgICAgICAgICAgdGhpcy5yZXBvcnRNaXNzaW5nS2V5KGtleSwgY2h1bmtOYW1lKTtcbiAgICAgICAgICAgICAgc3Vic2NyaWJlci5uZXh0KHRoaXMuZ2V0RmFsbGJhY2tWYWx1ZShuYW1lc3BhY2VkS2V5KSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzdWJzY3JpYmVyLm5leHQoaTE4bmV4dC50KG5hbWVzcGFjZWRLZXksIG9wdGlvbnMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgdHJhbnNsYXRlKCk7XG4gICAgICBpMThuZXh0Lm9uKCdsYW5ndWFnZUNoYW5nZWQnLCB0cmFuc2xhdGUpO1xuICAgICAgcmV0dXJuICgpID0+IGkxOG5leHQub2ZmKCdsYW5ndWFnZUNoYW5nZWQnLCB0cmFuc2xhdGUpO1xuICAgIH0pO1xuICB9XG5cbiAgbG9hZENodW5rcyhjaHVua05hbWVzOiBzdHJpbmcgfCBzdHJpbmdbXSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIGkxOG5leHQubG9hZE5hbWVzcGFjZXMoY2h1bmtOYW1lcyk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGZhbGxiYWNrIHZhbHVlIGluIGNhc2Ugd2hlbiB0aGUgZ2l2ZW4ga2V5IGlzIG1pc3NpbmdcbiAgICogQHBhcmFtIGtleVxuICAgKi9cbiAgcHJvdGVjdGVkIGdldEZhbGxiYWNrVmFsdWUoa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmNvbmZpZy5wcm9kdWN0aW9uID8gdGhpcy5OT05fQlJFQUtJTkdfU1BBQ0UgOiBgWyR7a2V5fV1gO1xuICB9XG5cbiAgcHJpdmF0ZSByZXBvcnRNaXNzaW5nS2V5KGtleTogc3RyaW5nLCBjaHVua05hbWU6IHN0cmluZykge1xuICAgIGlmICghdGhpcy5jb25maWcucHJvZHVjdGlvbikge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgVHJhbnNsYXRpb24ga2V5IG1pc3NpbmcgJyR7a2V5fScgaW4gdGhlIGNodW5rICcke2NodW5rTmFtZX0nYFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldE5hbWVzcGFjZWRLZXkoa2V5OiBzdHJpbmcsIGNodW5rOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBjaHVuayArIHRoaXMuTkFNRVNQQUNFX1NFUEFSQVRPUiArIGtleTtcbiAgfVxufVxuIl19
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import i18next from 'i18next';
import { I18nConfig } from '../config/i18n-config';
import { TranslationNamespaceService } from '../translation-namespace.service';
var I18nextTranslationService = /** @class */ (function () {
    function I18nextTranslationService(config, translationNamespace) {
        this.config = config;
        this.translationNamespace = translationNamespace;
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
        // If we've already loaded the namespace (or failed to load), we should immediately emit the value
        // (or the fallback value in case the key is missing).
        var _this = this;
        if (options === void 0) { options = {}; }
        if (whitespaceUntilLoaded === void 0) { whitespaceUntilLoaded = false; }
        // If we've already loaded the namespace (or failed to load), we should immediately emit the value
        // (or the fallback value in case the key is missing).
        // Moreover, we SHOULD emit a value (or a fallback value) synchronously (not in a promise/setTimeout).
        // Otherwise, we the will trigger additional deferred change detection in a view that consumes the returned observable,
        // which together with `switchMap` operator may lead to an infinite loop.
        /** @type {?} */
        var namespace = this.translationNamespace.getNamespace(key);
        /** @type {?} */
        var namespacedKey = this.getNamespacedKey(key, namespace);
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
                    i18next.loadNamespaces(namespace, function () {
                        if (!i18next.exists(namespacedKey, options)) {
                            _this.reportMissingKey(namespacedKey);
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
     * @param {?} namespaces
     * @return {?}
     */
    I18nextTranslationService.prototype.loadNamespaces = /**
     * @param {?} namespaces
     * @return {?}
     */
    function (namespaces) {
        return i18next.loadNamespaces(namespaces);
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
     * @return {?}
     */
    I18nextTranslationService.prototype.reportMissingKey = /**
     * @private
     * @param {?} key
     * @return {?}
     */
    function (key) {
        if (!this.config.production) {
            console.warn("Translation key missing '" + key + "'");
        }
    };
    /**
     * @private
     * @param {?} key
     * @param {?} namespace
     * @return {?}
     */
    I18nextTranslationService.prototype.getNamespacedKey = /**
     * @private
     * @param {?} key
     * @param {?} namespace
     * @return {?}
     */
    function (key, namespace) {
        return namespace + this.NAMESPACE_SEPARATOR + key;
    };
    I18nextTranslationService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    I18nextTranslationService.ctorParameters = function () { return [
        { type: I18nConfig },
        { type: TranslationNamespaceService }
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
    I18nextTranslationService.prototype.translationNamespace;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bmV4dC10cmFuc2xhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2kxOG4vaTE4bmV4dC9pMThuZXh0LXRyYW5zbGF0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVsQyxPQUFPLE9BQU8sTUFBTSxTQUFTLENBQUM7QUFDOUIsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ25ELE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRS9FO0lBS0UsbUNBQ1ksTUFBa0IsRUFDbEIsb0JBQWlEO1FBRGpELFdBQU0sR0FBTixNQUFNLENBQVk7UUFDbEIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUE2QjtRQUw1Qyx1QkFBa0IsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzVDLHdCQUFtQixHQUFHLEdBQUcsQ0FBQztJQUsxQyxDQUFDOzs7Ozs7O0lBRUosNkNBQVM7Ozs7OztJQUFULFVBQ0UsR0FBVyxFQUNYLE9BQWlCLEVBQ2pCLHFCQUFzQztRQUV0QyxrR0FBa0c7UUFDbEcsc0RBQXNEO1FBTnhELGlCQXNDQztRQXBDQyx3QkFBQSxFQUFBLFlBQWlCO1FBQ2pCLHNDQUFBLEVBQUEsNkJBQXNDOzs7Ozs7O1lBU2hDLFNBQVMsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQzs7WUFDdkQsYUFBYSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsU0FBUyxDQUFDO1FBRTNELE9BQU8sSUFBSSxVQUFVLENBQVMsVUFBQSxVQUFVOztnQkFDaEMsU0FBUyxHQUFHO2dCQUNoQixJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxFQUFFO29CQUMxQyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7aUJBQ3BEO3FCQUFNO29CQUNMLElBQUkscUJBQXFCLEVBQUU7d0JBQ3pCLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7cUJBQzFDO29CQUNELE9BQU8sQ0FBQyxjQUFjLENBQUMsU0FBUyxFQUFFO3dCQUNoQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLEVBQUU7NEJBQzNDLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsQ0FBQzs0QkFDckMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQzt5QkFDdkQ7NkJBQU07NEJBQ0wsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO3lCQUNwRDtvQkFDSCxDQUFDLENBQUMsQ0FBQztpQkFDSjtZQUNILENBQUM7WUFFRCxTQUFTLEVBQUUsQ0FBQztZQUNaLE9BQU8sQ0FBQyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDekMsT0FBTyxjQUFNLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxTQUFTLENBQUMsRUFBekMsQ0FBeUMsQ0FBQztRQUN6RCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsa0RBQWM7Ozs7SUFBZCxVQUFlLFVBQTZCO1FBQzFDLE9BQU8sT0FBTyxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7O0lBQ08sb0RBQWdCOzs7Ozs7SUFBMUIsVUFBMkIsR0FBVztRQUNwQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLE1BQUksR0FBRyxNQUFHLENBQUM7SUFDdkUsQ0FBQzs7Ozs7O0lBRU8sb0RBQWdCOzs7OztJQUF4QixVQUF5QixHQUFXO1FBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRTtZQUMzQixPQUFPLENBQUMsSUFBSSxDQUFDLDhCQUE0QixHQUFHLE1BQUcsQ0FBQyxDQUFDO1NBQ2xEO0lBQ0gsQ0FBQzs7Ozs7OztJQUVPLG9EQUFnQjs7Ozs7O0lBQXhCLFVBQXlCLEdBQVcsRUFBRSxTQUFpQjtRQUNyRCxPQUFPLFNBQVMsR0FBRyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsR0FBRyxDQUFDO0lBQ3BELENBQUM7O2dCQXRFRixVQUFVOzs7O2dCQUhGLFVBQVU7Z0JBQ1YsMkJBQTJCOztJQXlFcEMsZ0NBQUM7Q0FBQSxBQXZFRCxJQXVFQztTQXRFWSx5QkFBeUI7Ozs7OztJQUNwQyx1REFBK0Q7Ozs7O0lBQy9ELHdEQUE2Qzs7Ozs7SUFHM0MsMkNBQTRCOzs7OztJQUM1Qix5REFBMkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBUcmFuc2xhdGlvblNlcnZpY2UgfSBmcm9tICcuLi90cmFuc2xhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCBpMThuZXh0IGZyb20gJ2kxOG5leHQnO1xuaW1wb3J0IHsgSTE4bkNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9pMThuLWNvbmZpZyc7XG5pbXBvcnQgeyBUcmFuc2xhdGlvbk5hbWVzcGFjZVNlcnZpY2UgfSBmcm9tICcuLi90cmFuc2xhdGlvbi1uYW1lc3BhY2Uuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJMThuZXh0VHJhbnNsYXRpb25TZXJ2aWNlIGltcGxlbWVudHMgVHJhbnNsYXRpb25TZXJ2aWNlIHtcbiAgcHJpdmF0ZSByZWFkb25seSBOT05fQlJFQUtJTkdfU1BBQ0UgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDE2MCk7XG4gIHByb3RlY3RlZCByZWFkb25seSBOQU1FU1BBQ0VfU0VQQVJBVE9SID0gJzonO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjb25maWc6IEkxOG5Db25maWcsXG4gICAgcHJvdGVjdGVkIHRyYW5zbGF0aW9uTmFtZXNwYWNlOiBUcmFuc2xhdGlvbk5hbWVzcGFjZVNlcnZpY2VcbiAgKSB7fVxuXG4gIHRyYW5zbGF0ZShcbiAgICBrZXk6IHN0cmluZyxcbiAgICBvcHRpb25zOiBhbnkgPSB7fSxcbiAgICB3aGl0ZXNwYWNlVW50aWxMb2FkZWQ6IGJvb2xlYW4gPSBmYWxzZVxuICApOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIC8vIElmIHdlJ3ZlIGFscmVhZHkgbG9hZGVkIHRoZSBuYW1lc3BhY2UgKG9yIGZhaWxlZCB0byBsb2FkKSwgd2Ugc2hvdWxkIGltbWVkaWF0ZWx5IGVtaXQgdGhlIHZhbHVlXG4gICAgLy8gKG9yIHRoZSBmYWxsYmFjayB2YWx1ZSBpbiBjYXNlIHRoZSBrZXkgaXMgbWlzc2luZykuXG5cbiAgICAvLyBNb3Jlb3Zlciwgd2UgU0hPVUxEIGVtaXQgYSB2YWx1ZSAob3IgYSBmYWxsYmFjayB2YWx1ZSkgc3luY2hyb25vdXNseSAobm90IGluIGEgcHJvbWlzZS9zZXRUaW1lb3V0KS5cbiAgICAvLyBPdGhlcndpc2UsIHdlIHRoZSB3aWxsIHRyaWdnZXIgYWRkaXRpb25hbCBkZWZlcnJlZCBjaGFuZ2UgZGV0ZWN0aW9uIGluIGEgdmlldyB0aGF0IGNvbnN1bWVzIHRoZSByZXR1cm5lZCBvYnNlcnZhYmxlLFxuICAgIC8vIHdoaWNoIHRvZ2V0aGVyIHdpdGggYHN3aXRjaE1hcGAgb3BlcmF0b3IgbWF5IGxlYWQgdG8gYW4gaW5maW5pdGUgbG9vcC5cblxuICAgIGNvbnN0IG5hbWVzcGFjZSA9IHRoaXMudHJhbnNsYXRpb25OYW1lc3BhY2UuZ2V0TmFtZXNwYWNlKGtleSk7XG4gICAgY29uc3QgbmFtZXNwYWNlZEtleSA9IHRoaXMuZ2V0TmFtZXNwYWNlZEtleShrZXksIG5hbWVzcGFjZSk7XG5cbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGU8c3RyaW5nPihzdWJzY3JpYmVyID0+IHtcbiAgICAgIGNvbnN0IHRyYW5zbGF0ZSA9ICgpID0+IHtcbiAgICAgICAgaWYgKGkxOG5leHQuZXhpc3RzKG5hbWVzcGFjZWRLZXksIG9wdGlvbnMpKSB7XG4gICAgICAgICAgc3Vic2NyaWJlci5uZXh0KGkxOG5leHQudChuYW1lc3BhY2VkS2V5LCBvcHRpb25zKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHdoaXRlc3BhY2VVbnRpbExvYWRlZCkge1xuICAgICAgICAgICAgc3Vic2NyaWJlci5uZXh0KHRoaXMuTk9OX0JSRUFLSU5HX1NQQUNFKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaTE4bmV4dC5sb2FkTmFtZXNwYWNlcyhuYW1lc3BhY2UsICgpID0+IHtcbiAgICAgICAgICAgIGlmICghaTE4bmV4dC5leGlzdHMobmFtZXNwYWNlZEtleSwgb3B0aW9ucykpIHtcbiAgICAgICAgICAgICAgdGhpcy5yZXBvcnRNaXNzaW5nS2V5KG5hbWVzcGFjZWRLZXkpO1xuICAgICAgICAgICAgICBzdWJzY3JpYmVyLm5leHQodGhpcy5nZXRGYWxsYmFja1ZhbHVlKG5hbWVzcGFjZWRLZXkpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHN1YnNjcmliZXIubmV4dChpMThuZXh0LnQobmFtZXNwYWNlZEtleSwgb3B0aW9ucykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICB0cmFuc2xhdGUoKTtcbiAgICAgIGkxOG5leHQub24oJ2xhbmd1YWdlQ2hhbmdlZCcsIHRyYW5zbGF0ZSk7XG4gICAgICByZXR1cm4gKCkgPT4gaTE4bmV4dC5vZmYoJ2xhbmd1YWdlQ2hhbmdlZCcsIHRyYW5zbGF0ZSk7XG4gICAgfSk7XG4gIH1cblxuICBsb2FkTmFtZXNwYWNlcyhuYW1lc3BhY2VzOiBzdHJpbmcgfCBzdHJpbmdbXSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIGkxOG5leHQubG9hZE5hbWVzcGFjZXMobmFtZXNwYWNlcyk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGZhbGxiYWNrIHZhbHVlIGluIGNhc2Ugd2hlbiB0aGUgZ2l2ZW4ga2V5IGlzIG1pc3NpbmdcbiAgICogQHBhcmFtIGtleVxuICAgKi9cbiAgcHJvdGVjdGVkIGdldEZhbGxiYWNrVmFsdWUoa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmNvbmZpZy5wcm9kdWN0aW9uID8gdGhpcy5OT05fQlJFQUtJTkdfU1BBQ0UgOiBgWyR7a2V5fV1gO1xuICB9XG5cbiAgcHJpdmF0ZSByZXBvcnRNaXNzaW5nS2V5KGtleTogc3RyaW5nKSB7XG4gICAgaWYgKCF0aGlzLmNvbmZpZy5wcm9kdWN0aW9uKSB7XG4gICAgICBjb25zb2xlLndhcm4oYFRyYW5zbGF0aW9uIGtleSBtaXNzaW5nICcke2tleX0nYCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXROYW1lc3BhY2VkS2V5KGtleTogc3RyaW5nLCBuYW1lc3BhY2U6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG5hbWVzcGFjZSArIHRoaXMuTkFNRVNQQUNFX1NFUEFSQVRPUiArIGtleTtcbiAgfVxufVxuIl19
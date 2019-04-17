/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import i18next from 'i18next';
import { I18nConfig } from '../config/i18n-config';
import { TranslationNamespaceService } from '../translation-namespace.service';
export class I18nextTranslationService {
    /**
     * @param {?} config
     * @param {?} translationNamespace
     */
    constructor(config, translationNamespace) {
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
    translate(key, options = {}, whitespaceUntilLoaded = false) {
        // If we've already loaded the namespace (or failed to load), we should immediately emit the value
        // (or the fallback value in case the key is missing).
        // If we've already loaded the namespace (or failed to load), we should immediately emit the value
        // (or the fallback value in case the key is missing).
        // Moreover, we SHOULD emit a value (or a fallback value) synchronously (not in a promise/setTimeout).
        // Otherwise, we the will trigger additional deferred change detection in a view that consumes the returned observable,
        // which together with `switchMap` operator may lead to an infinite loop.
        /** @type {?} */
        const namespace = this.translationNamespace.getNamespace(key);
        /** @type {?} */
        const namespacedKey = this.getNamespacedKey(key, namespace);
        return new Observable(subscriber => {
            /** @type {?} */
            const translate = () => {
                if (i18next.exists(namespacedKey, options)) {
                    subscriber.next(i18next.t(namespacedKey, options));
                }
                else {
                    if (whitespaceUntilLoaded) {
                        subscriber.next(this.NON_BREAKING_SPACE);
                    }
                    i18next.loadNamespaces(namespace, () => {
                        if (!i18next.exists(namespacedKey, options)) {
                            this.reportMissingKey(namespacedKey);
                            subscriber.next(this.getFallbackValue(namespacedKey));
                        }
                        else {
                            subscriber.next(i18next.t(namespacedKey, options));
                        }
                    });
                }
            };
            translate();
            i18next.on('languageChanged', translate);
            return () => i18next.off('languageChanged', translate);
        });
    }
    /**
     * @param {?} namespaces
     * @return {?}
     */
    loadNamespaces(namespaces) {
        return i18next.loadNamespaces(namespaces);
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
     * @return {?}
     */
    reportMissingKey(key) {
        if (!this.config.production) {
            console.warn(`Translation key missing '${key}'`);
        }
    }
    /**
     * @private
     * @param {?} key
     * @param {?} namespace
     * @return {?}
     */
    getNamespacedKey(key, namespace) {
        return namespace + this.NAMESPACE_SEPARATOR + key;
    }
}
I18nextTranslationService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
I18nextTranslationService.ctorParameters = () => [
    { type: I18nConfig },
    { type: TranslationNamespaceService }
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
    I18nextTranslationService.prototype.translationNamespace;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bmV4dC10cmFuc2xhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2kxOG4vaTE4bmV4dC9pMThuZXh0LXRyYW5zbGF0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVsQyxPQUFPLE9BQU8sTUFBTSxTQUFTLENBQUM7QUFDOUIsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ25ELE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRy9FLE1BQU0sT0FBTyx5QkFBeUI7Ozs7O0lBSXBDLFlBQ1ksTUFBa0IsRUFDbEIsb0JBQWlEO1FBRGpELFdBQU0sR0FBTixNQUFNLENBQVk7UUFDbEIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUE2QjtRQUw1Qyx1QkFBa0IsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzVDLHdCQUFtQixHQUFHLEdBQUcsQ0FBQztJQUsxQyxDQUFDOzs7Ozs7O0lBRUosU0FBUyxDQUNQLEdBQVcsRUFDWCxVQUFlLEVBQUUsRUFDakIsd0JBQWlDLEtBQUs7UUFFdEMsa0dBQWtHO1FBQ2xHLHNEQUFzRDs7Ozs7OztjQU1oRCxTQUFTLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUM7O2NBQ3ZELGFBQWEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLFNBQVMsQ0FBQztRQUUzRCxPQUFPLElBQUksVUFBVSxDQUFTLFVBQVUsQ0FBQyxFQUFFOztrQkFDbkMsU0FBUyxHQUFHLEdBQUcsRUFBRTtnQkFDckIsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsRUFBRTtvQkFDMUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO2lCQUNwRDtxQkFBTTtvQkFDTCxJQUFJLHFCQUFxQixFQUFFO3dCQUN6QixVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO3FCQUMxQztvQkFDRCxPQUFPLENBQUMsY0FBYyxDQUFDLFNBQVMsRUFBRSxHQUFHLEVBQUU7d0JBQ3JDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsRUFBRTs0QkFDM0MsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxDQUFDOzRCQUNyQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO3lCQUN2RDs2QkFBTTs0QkFDTCxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7eUJBQ3BEO29CQUNILENBQUMsQ0FBQyxDQUFDO2lCQUNKO1lBQ0gsQ0FBQztZQUVELFNBQVMsRUFBRSxDQUFDO1lBQ1osT0FBTyxDQUFDLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxTQUFTLENBQUMsQ0FBQztZQUN6QyxPQUFPLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDekQsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELGNBQWMsQ0FBQyxVQUE2QjtRQUMxQyxPQUFPLE9BQU8sQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDNUMsQ0FBQzs7Ozs7OztJQU1TLGdCQUFnQixDQUFDLEdBQVc7UUFDcEMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO0lBQ3ZFLENBQUM7Ozs7OztJQUVPLGdCQUFnQixDQUFDLEdBQVc7UUFDbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFO1lBQzNCLE9BQU8sQ0FBQyxJQUFJLENBQUMsNEJBQTRCLEdBQUcsR0FBRyxDQUFDLENBQUM7U0FDbEQ7SUFDSCxDQUFDOzs7Ozs7O0lBRU8sZ0JBQWdCLENBQUMsR0FBVyxFQUFFLFNBQWlCO1FBQ3JELE9BQU8sU0FBUyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxHQUFHLENBQUM7SUFDcEQsQ0FBQzs7O1lBdEVGLFVBQVU7Ozs7WUFIRixVQUFVO1lBQ1YsMkJBQTJCOzs7Ozs7O0lBSWxDLHVEQUErRDs7Ozs7SUFDL0Qsd0RBQTZDOzs7OztJQUczQywyQ0FBNEI7Ozs7O0lBQzVCLHlEQUEyRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFRyYW5zbGF0aW9uU2VydmljZSB9IGZyb20gJy4uL3RyYW5zbGF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IGkxOG5leHQgZnJvbSAnaTE4bmV4dCc7XG5pbXBvcnQgeyBJMThuQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL2kxOG4tY29uZmlnJztcbmltcG9ydCB7IFRyYW5zbGF0aW9uTmFtZXNwYWNlU2VydmljZSB9IGZyb20gJy4uL3RyYW5zbGF0aW9uLW5hbWVzcGFjZS5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEkxOG5leHRUcmFuc2xhdGlvblNlcnZpY2UgaW1wbGVtZW50cyBUcmFuc2xhdGlvblNlcnZpY2Uge1xuICBwcml2YXRlIHJlYWRvbmx5IE5PTl9CUkVBS0lOR19TUEFDRSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMTYwKTtcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IE5BTUVTUEFDRV9TRVBBUkFUT1IgPSAnOic7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNvbmZpZzogSTE4bkNvbmZpZyxcbiAgICBwcm90ZWN0ZWQgdHJhbnNsYXRpb25OYW1lc3BhY2U6IFRyYW5zbGF0aW9uTmFtZXNwYWNlU2VydmljZVxuICApIHt9XG5cbiAgdHJhbnNsYXRlKFxuICAgIGtleTogc3RyaW5nLFxuICAgIG9wdGlvbnM6IGFueSA9IHt9LFxuICAgIHdoaXRlc3BhY2VVbnRpbExvYWRlZDogYm9vbGVhbiA9IGZhbHNlXG4gICk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgLy8gSWYgd2UndmUgYWxyZWFkeSBsb2FkZWQgdGhlIG5hbWVzcGFjZSAob3IgZmFpbGVkIHRvIGxvYWQpLCB3ZSBzaG91bGQgaW1tZWRpYXRlbHkgZW1pdCB0aGUgdmFsdWVcbiAgICAvLyAob3IgdGhlIGZhbGxiYWNrIHZhbHVlIGluIGNhc2UgdGhlIGtleSBpcyBtaXNzaW5nKS5cblxuICAgIC8vIE1vcmVvdmVyLCB3ZSBTSE9VTEQgZW1pdCBhIHZhbHVlIChvciBhIGZhbGxiYWNrIHZhbHVlKSBzeW5jaHJvbm91c2x5IChub3QgaW4gYSBwcm9taXNlL3NldFRpbWVvdXQpLlxuICAgIC8vIE90aGVyd2lzZSwgd2UgdGhlIHdpbGwgdHJpZ2dlciBhZGRpdGlvbmFsIGRlZmVycmVkIGNoYW5nZSBkZXRlY3Rpb24gaW4gYSB2aWV3IHRoYXQgY29uc3VtZXMgdGhlIHJldHVybmVkIG9ic2VydmFibGUsXG4gICAgLy8gd2hpY2ggdG9nZXRoZXIgd2l0aCBgc3dpdGNoTWFwYCBvcGVyYXRvciBtYXkgbGVhZCB0byBhbiBpbmZpbml0ZSBsb29wLlxuXG4gICAgY29uc3QgbmFtZXNwYWNlID0gdGhpcy50cmFuc2xhdGlvbk5hbWVzcGFjZS5nZXROYW1lc3BhY2Uoa2V5KTtcbiAgICBjb25zdCBuYW1lc3BhY2VkS2V5ID0gdGhpcy5nZXROYW1lc3BhY2VkS2V5KGtleSwgbmFtZXNwYWNlKTtcblxuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZTxzdHJpbmc+KHN1YnNjcmliZXIgPT4ge1xuICAgICAgY29uc3QgdHJhbnNsYXRlID0gKCkgPT4ge1xuICAgICAgICBpZiAoaTE4bmV4dC5leGlzdHMobmFtZXNwYWNlZEtleSwgb3B0aW9ucykpIHtcbiAgICAgICAgICBzdWJzY3JpYmVyLm5leHQoaTE4bmV4dC50KG5hbWVzcGFjZWRLZXksIG9wdGlvbnMpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAod2hpdGVzcGFjZVVudGlsTG9hZGVkKSB7XG4gICAgICAgICAgICBzdWJzY3JpYmVyLm5leHQodGhpcy5OT05fQlJFQUtJTkdfU1BBQ0UpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpMThuZXh0LmxvYWROYW1lc3BhY2VzKG5hbWVzcGFjZSwgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFpMThuZXh0LmV4aXN0cyhuYW1lc3BhY2VkS2V5LCBvcHRpb25zKSkge1xuICAgICAgICAgICAgICB0aGlzLnJlcG9ydE1pc3NpbmdLZXkobmFtZXNwYWNlZEtleSk7XG4gICAgICAgICAgICAgIHN1YnNjcmliZXIubmV4dCh0aGlzLmdldEZhbGxiYWNrVmFsdWUobmFtZXNwYWNlZEtleSkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgc3Vic2NyaWJlci5uZXh0KGkxOG5leHQudChuYW1lc3BhY2VkS2V5LCBvcHRpb25zKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHRyYW5zbGF0ZSgpO1xuICAgICAgaTE4bmV4dC5vbignbGFuZ3VhZ2VDaGFuZ2VkJywgdHJhbnNsYXRlKTtcbiAgICAgIHJldHVybiAoKSA9PiBpMThuZXh0Lm9mZignbGFuZ3VhZ2VDaGFuZ2VkJywgdHJhbnNsYXRlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGxvYWROYW1lc3BhY2VzKG5hbWVzcGFjZXM6IHN0cmluZyB8IHN0cmluZ1tdKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gaTE4bmV4dC5sb2FkTmFtZXNwYWNlcyhuYW1lc3BhY2VzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgZmFsbGJhY2sgdmFsdWUgaW4gY2FzZSB3aGVuIHRoZSBnaXZlbiBrZXkgaXMgbWlzc2luZ1xuICAgKiBAcGFyYW0ga2V5XG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0RmFsbGJhY2tWYWx1ZShrZXk6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLnByb2R1Y3Rpb24gPyB0aGlzLk5PTl9CUkVBS0lOR19TUEFDRSA6IGBbJHtrZXl9XWA7XG4gIH1cblxuICBwcml2YXRlIHJlcG9ydE1pc3NpbmdLZXkoa2V5OiBzdHJpbmcpIHtcbiAgICBpZiAoIXRoaXMuY29uZmlnLnByb2R1Y3Rpb24pIHtcbiAgICAgIGNvbnNvbGUud2FybihgVHJhbnNsYXRpb24ga2V5IG1pc3NpbmcgJyR7a2V5fSdgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldE5hbWVzcGFjZWRLZXkoa2V5OiBzdHJpbmcsIG5hbWVzcGFjZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gbmFtZXNwYWNlICsgdGhpcy5OQU1FU1BBQ0VfU0VQQVJBVE9SICsga2V5O1xuICB9XG59XG4iXX0=
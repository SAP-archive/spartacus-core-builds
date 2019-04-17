/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { I18nConfig } from './config/i18n-config';
var TranslationNamespaceService = /** @class */ (function () {
    function TranslationNamespaceService(config) {
        this.config = config;
        this.KEY_SEPARATOR = '.';
    }
    /**
     * @param {?} key
     * @return {?}
     */
    TranslationNamespaceService.prototype.getNamespace = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        /** @type {?} */
        var mainKey = (key || '').split(this.KEY_SEPARATOR)[0];
        /** @type {?} */
        var namespace = this.getNamespaceFromMapping(mainKey);
        if (!namespace) {
            this.reportMissingNamespaceMapping(key, mainKey);
            return mainKey; // fallback to main key as a namespace
        }
        return namespace;
    };
    /**
     * @private
     * @param {?} mainKey
     * @return {?}
     */
    TranslationNamespaceService.prototype.getNamespaceFromMapping = /**
     * @private
     * @param {?} mainKey
     * @return {?}
     */
    function (mainKey) {
        return (this.config.i18n &&
            this.config.i18n.namespaceMapping &&
            this.config.i18n.namespaceMapping[mainKey]);
    };
    /**
     * @private
     * @param {?} key
     * @param {?} fallbackNamespace
     * @return {?}
     */
    TranslationNamespaceService.prototype.reportMissingNamespaceMapping = /**
     * @private
     * @param {?} key
     * @param {?} fallbackNamespace
     * @return {?}
     */
    function (key, fallbackNamespace) {
        if (!this.config.production) {
            console.warn("No namespace mapping configured for key '" + key + "'. Used '" + fallbackNamespace + "' as fallback namespace.");
        }
    };
    TranslationNamespaceService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    TranslationNamespaceService.ctorParameters = function () { return [
        { type: I18nConfig }
    ]; };
    return TranslationNamespaceService;
}());
export { TranslationNamespaceService };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    TranslationNamespaceService.prototype.KEY_SEPARATOR;
    /**
     * @type {?}
     * @protected
     */
    TranslationNamespaceService.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRpb24tbmFtZXNwYWNlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvaTE4bi90cmFuc2xhdGlvbi1uYW1lc3BhY2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFbEQ7SUFFRSxxQ0FBc0IsTUFBa0I7UUFBbEIsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQUVyQixrQkFBYSxHQUFHLEdBQUcsQ0FBQztJQUZJLENBQUM7Ozs7O0lBSTVDLGtEQUFZOzs7O0lBQVosVUFBYSxHQUFXOztZQUNoQixPQUFPLEdBQUcsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7O1lBQ2xELFNBQVMsR0FBRyxJQUFJLENBQUMsdUJBQXVCLENBQUMsT0FBTyxDQUFDO1FBRXZELElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDZCxJQUFJLENBQUMsNkJBQTZCLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ2pELE9BQU8sT0FBTyxDQUFDLENBQUMsc0NBQXNDO1NBQ3ZEO1FBQ0QsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQzs7Ozs7O0lBRU8sNkRBQXVCOzs7OztJQUEvQixVQUFnQyxPQUFlO1FBQzdDLE9BQU8sQ0FDTCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUk7WUFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCO1lBQ2pDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUMzQyxDQUFDO0lBQ0osQ0FBQzs7Ozs7OztJQUVPLG1FQUE2Qjs7Ozs7O0lBQXJDLFVBQ0UsR0FBVyxFQUNYLGlCQUF5QjtRQUV6QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUU7WUFDM0IsT0FBTyxDQUFDLElBQUksQ0FDViw4Q0FBNEMsR0FBRyxpQkFBWSxpQkFBaUIsNkJBQTBCLENBQ3ZHLENBQUM7U0FDSDtJQUNILENBQUM7O2dCQWxDRixVQUFVOzs7O2dCQUZGLFVBQVU7O0lBcUNuQixrQ0FBQztDQUFBLEFBbkNELElBbUNDO1NBbENZLDJCQUEyQjs7Ozs7O0lBR3RDLG9EQUF1Qzs7Ozs7SUFGM0IsNkNBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSTE4bkNvbmZpZyB9IGZyb20gJy4vY29uZmlnL2kxOG4tY29uZmlnJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRyYW5zbGF0aW9uTmFtZXNwYWNlU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBjb25maWc6IEkxOG5Db25maWcpIHt9XG5cbiAgcHJvdGVjdGVkIHJlYWRvbmx5IEtFWV9TRVBBUkFUT1IgPSAnLic7XG5cbiAgZ2V0TmFtZXNwYWNlKGtleTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCBtYWluS2V5ID0gKGtleSB8fCAnJykuc3BsaXQodGhpcy5LRVlfU0VQQVJBVE9SKVswXTtcbiAgICBjb25zdCBuYW1lc3BhY2UgPSB0aGlzLmdldE5hbWVzcGFjZUZyb21NYXBwaW5nKG1haW5LZXkpO1xuXG4gICAgaWYgKCFuYW1lc3BhY2UpIHtcbiAgICAgIHRoaXMucmVwb3J0TWlzc2luZ05hbWVzcGFjZU1hcHBpbmcoa2V5LCBtYWluS2V5KTtcbiAgICAgIHJldHVybiBtYWluS2V5OyAvLyBmYWxsYmFjayB0byBtYWluIGtleSBhcyBhIG5hbWVzcGFjZVxuICAgIH1cbiAgICByZXR1cm4gbmFtZXNwYWNlO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXROYW1lc3BhY2VGcm9tTWFwcGluZyhtYWluS2V5OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLmNvbmZpZy5pMThuICYmXG4gICAgICB0aGlzLmNvbmZpZy5pMThuLm5hbWVzcGFjZU1hcHBpbmcgJiZcbiAgICAgIHRoaXMuY29uZmlnLmkxOG4ubmFtZXNwYWNlTWFwcGluZ1ttYWluS2V5XVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIHJlcG9ydE1pc3NpbmdOYW1lc3BhY2VNYXBwaW5nKFxuICAgIGtleTogc3RyaW5nLFxuICAgIGZhbGxiYWNrTmFtZXNwYWNlOiBzdHJpbmdcbiAgKSB7XG4gICAgaWYgKCF0aGlzLmNvbmZpZy5wcm9kdWN0aW9uKSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGBObyBuYW1lc3BhY2UgbWFwcGluZyBjb25maWd1cmVkIGZvciBrZXkgJyR7a2V5fScuIFVzZWQgJyR7ZmFsbGJhY2tOYW1lc3BhY2V9JyBhcyBmYWxsYmFjayBuYW1lc3BhY2UuYFxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==
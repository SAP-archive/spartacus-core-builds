/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { I18nConfig } from './config/i18n-config';
export class TranslationNamespaceService {
    /**
     * @param {?} config
     */
    constructor(config) {
        this.config = config;
        this.KEY_SEPARATOR = '.';
    }
    /**
     * @param {?} key
     * @return {?}
     */
    getNamespace(key) {
        /** @type {?} */
        const mainKey = (key || '').split(this.KEY_SEPARATOR)[0];
        /** @type {?} */
        const namespace = this.getNamespaceFromMapping(mainKey);
        if (!namespace) {
            this.reportMissingNamespaceMapping(key, mainKey);
            return mainKey; // fallback to main key as a namespace
        }
        return namespace;
    }
    /**
     * @private
     * @param {?} mainKey
     * @return {?}
     */
    getNamespaceFromMapping(mainKey) {
        return (this.config.i18n &&
            this.config.i18n.namespaceMapping &&
            this.config.i18n.namespaceMapping[mainKey]);
    }
    /**
     * @private
     * @param {?} key
     * @param {?} fallbackNamespace
     * @return {?}
     */
    reportMissingNamespaceMapping(key, fallbackNamespace) {
        if (!this.config.production) {
            console.warn(`No namespace mapping configured for key '${key}'. Used '${fallbackNamespace}' as fallback namespace.`);
        }
    }
}
TranslationNamespaceService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
TranslationNamespaceService.ctorParameters = () => [
    { type: I18nConfig }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRpb24tbmFtZXNwYWNlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvaTE4bi90cmFuc2xhdGlvbi1uYW1lc3BhY2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFHbEQsTUFBTSxPQUFPLDJCQUEyQjs7OztJQUN0QyxZQUFzQixNQUFrQjtRQUFsQixXQUFNLEdBQU4sTUFBTSxDQUFZO1FBRXJCLGtCQUFhLEdBQUcsR0FBRyxDQUFDO0lBRkksQ0FBQzs7Ozs7SUFJNUMsWUFBWSxDQUFDLEdBQVc7O2NBQ2hCLE9BQU8sR0FBRyxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7Y0FDbEQsU0FBUyxHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxPQUFPLENBQUM7UUFFdkQsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNkLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDakQsT0FBTyxPQUFPLENBQUMsQ0FBQyxzQ0FBc0M7U0FDdkQ7UUFDRCxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDOzs7Ozs7SUFFTyx1QkFBdUIsQ0FBQyxPQUFlO1FBQzdDLE9BQU8sQ0FDTCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUk7WUFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCO1lBQ2pDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUMzQyxDQUFDO0lBQ0osQ0FBQzs7Ozs7OztJQUVPLDZCQUE2QixDQUNuQyxHQUFXLEVBQ1gsaUJBQXlCO1FBRXpCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRTtZQUMzQixPQUFPLENBQUMsSUFBSSxDQUNWLDRDQUE0QyxHQUFHLFlBQVksaUJBQWlCLDBCQUEwQixDQUN2RyxDQUFDO1NBQ0g7SUFDSCxDQUFDOzs7WUFsQ0YsVUFBVTs7OztZQUZGLFVBQVU7Ozs7Ozs7SUFNakIsb0RBQXVDOzs7OztJQUYzQiw2Q0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJMThuQ29uZmlnIH0gZnJvbSAnLi9jb25maWcvaTE4bi1jb25maWcnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVHJhbnNsYXRpb25OYW1lc3BhY2VTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGNvbmZpZzogSTE4bkNvbmZpZykge31cblxuICBwcm90ZWN0ZWQgcmVhZG9ubHkgS0VZX1NFUEFSQVRPUiA9ICcuJztcblxuICBnZXROYW1lc3BhY2Uoa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IG1haW5LZXkgPSAoa2V5IHx8ICcnKS5zcGxpdCh0aGlzLktFWV9TRVBBUkFUT1IpWzBdO1xuICAgIGNvbnN0IG5hbWVzcGFjZSA9IHRoaXMuZ2V0TmFtZXNwYWNlRnJvbU1hcHBpbmcobWFpbktleSk7XG5cbiAgICBpZiAoIW5hbWVzcGFjZSkge1xuICAgICAgdGhpcy5yZXBvcnRNaXNzaW5nTmFtZXNwYWNlTWFwcGluZyhrZXksIG1haW5LZXkpO1xuICAgICAgcmV0dXJuIG1haW5LZXk7IC8vIGZhbGxiYWNrIHRvIG1haW4ga2V5IGFzIGEgbmFtZXNwYWNlXG4gICAgfVxuICAgIHJldHVybiBuYW1lc3BhY2U7XG4gIH1cblxuICBwcml2YXRlIGdldE5hbWVzcGFjZUZyb21NYXBwaW5nKG1haW5LZXk6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuY29uZmlnLmkxOG4gJiZcbiAgICAgIHRoaXMuY29uZmlnLmkxOG4ubmFtZXNwYWNlTWFwcGluZyAmJlxuICAgICAgdGhpcy5jb25maWcuaTE4bi5uYW1lc3BhY2VNYXBwaW5nW21haW5LZXldXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVwb3J0TWlzc2luZ05hbWVzcGFjZU1hcHBpbmcoXG4gICAga2V5OiBzdHJpbmcsXG4gICAgZmFsbGJhY2tOYW1lc3BhY2U6IHN0cmluZ1xuICApIHtcbiAgICBpZiAoIXRoaXMuY29uZmlnLnByb2R1Y3Rpb24pIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYE5vIG5hbWVzcGFjZSBtYXBwaW5nIGNvbmZpZ3VyZWQgZm9yIGtleSAnJHtrZXl9Jy4gVXNlZCAnJHtmYWxsYmFja05hbWVzcGFjZX0nIGFzIGZhbGxiYWNrIG5hbWVzcGFjZS5gXG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuIl19
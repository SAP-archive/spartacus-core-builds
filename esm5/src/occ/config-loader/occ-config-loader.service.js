/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DOCUMENT, isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Inject, Injectable, isDevMode, Optional, PLATFORM_ID, } from '@angular/core';
import { makeStateKey, TransferState, } from '@angular/platform-browser';
import { of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Config } from '../../config/config.module';
import { deepMerge } from '../../config/utils/deep-merge';
import { SERVER_REQUEST_URL } from '../../ssr/ssr.providers';
import { OccLoadedConfigConverter } from './occ-loaded-config-converter';
import { OccSitesConfigLoader } from './occ-sites-config-loader';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../config/config.module";
import * as i3 from "./occ-sites-config-loader";
import * as i4 from "./occ-loaded-config-converter";
import * as i5 from "@angular/platform-browser";
import * as i6 from "../../ssr/ssr.providers";
/** @type {?} */
export var EXTERNAL_CONFIG_TRANSFER_ID = makeStateKey('cx-external-config');
var OccConfigLoaderService = /** @class */ (function () {
    function OccConfigLoaderService(platform, document, config, sitesConfigLoader, converter, transferState, serverRequestUrl) {
        this.platform = platform;
        this.document = document;
        this.config = config;
        this.sitesConfigLoader = sitesConfigLoader;
        this.converter = converter;
        this.transferState = transferState;
        this.serverRequestUrl = serverRequestUrl;
    }
    Object.defineProperty(OccConfigLoaderService.prototype, "currentUrl", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            if (isPlatformBrowser(this.platform)) {
                return this.document.location.href;
            }
            if (this.serverRequestUrl) {
                return this.serverRequestUrl;
            }
            if (isDevMode()) {
                console.error("Please provide token 'SERVER_REQUEST_URL' with the requested URL for SSR");
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Initializes the Spartacus config asynchronously basing on the external config
     */
    /**
     * Initializes the Spartacus config asynchronously basing on the external config
     * @return {?}
     */
    OccConfigLoaderService.prototype.loadConfig = /**
     * Initializes the Spartacus config asynchronously basing on the external config
     * @return {?}
     */
    function () {
        var _this = this;
        return this.get()
            .pipe(tap((/**
         * @param {?} externalConfig
         * @return {?}
         */
        function (externalConfig) { return _this.transfer(externalConfig); })), map((/**
         * @param {?} externalConfig
         * @return {?}
         */
        function (externalConfig) {
            return deepMerge.apply(void 0, tslib_1.__spread([{}], _this.getConfigChunks(externalConfig)));
        })))
            .toPromise();
    };
    /**
     * Returns the external config
     */
    /**
     * Returns the external config
     * @protected
     * @return {?}
     */
    OccConfigLoaderService.prototype.get = /**
     * Returns the external config
     * @protected
     * @return {?}
     */
    function () {
        /** @type {?} */
        var rehydratedExternalConfig = this.rehydrate();
        return rehydratedExternalConfig
            ? of(rehydratedExternalConfig)
            : this.load();
    };
    /**
     * Loads the external config from backend
     */
    /**
     * Loads the external config from backend
     * @protected
     * @return {?}
     */
    OccConfigLoaderService.prototype.load = /**
     * Loads the external config from backend
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        return this.sitesConfigLoader
            .load()
            .pipe(map((/**
         * @param {?} baseSites
         * @return {?}
         */
        function (baseSites) {
            return _this.converter.fromOccBaseSites(baseSites, _this.currentUrl);
        })));
    };
    /**
     * Tries to rehydrate external config in the browser from SSR
     */
    /**
     * Tries to rehydrate external config in the browser from SSR
     * @protected
     * @return {?}
     */
    OccConfigLoaderService.prototype.rehydrate = /**
     * Tries to rehydrate external config in the browser from SSR
     * @protected
     * @return {?}
     */
    function () {
        if (this.transferState && isPlatformBrowser(this.platform)) {
            return this.transferState.get(EXTERNAL_CONFIG_TRANSFER_ID, undefined);
        }
    };
    /**
     * Transfers the given external config in SSR to the browser
     *
     * @param externalConfig
     */
    /**
     * Transfers the given external config in SSR to the browser
     *
     * @protected
     * @param {?} externalConfig
     * @return {?}
     */
    OccConfigLoaderService.prototype.transfer = /**
     * Transfers the given external config in SSR to the browser
     *
     * @protected
     * @param {?} externalConfig
     * @return {?}
     */
    function (externalConfig) {
        if (this.transferState &&
            isPlatformServer(this.platform) &&
            externalConfig) {
            this.transferState.set(EXTERNAL_CONFIG_TRANSFER_ID, externalConfig);
        }
    };
    /**
     * @protected
     * @param {?} externalConfig
     * @return {?}
     */
    OccConfigLoaderService.prototype.getConfigChunks = /**
     * @protected
     * @param {?} externalConfig
     * @return {?}
     */
    function (externalConfig) {
        /** @type {?} */
        var chunks = [this.converter.toSiteContextConfig(externalConfig)];
        if (this.shouldReturnI18nChunk()) {
            chunks.push(this.converter.toI18nConfig(externalConfig));
        }
        return chunks;
    };
    /**
     * @private
     * @return {?}
     */
    OccConfigLoaderService.prototype.shouldReturnI18nChunk = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var fallbackLangExists = typeof (this.config &&
            this.config.i18n &&
            this.config.i18n.fallbackLang) !== 'undefined';
        if (fallbackLangExists && isDevMode()) {
            console.warn("There is an already provided static config for 'i18n.fallbackLang', so the value from OCC loaded config is ignored.");
        }
        return !fallbackLangExists;
    };
    OccConfigLoaderService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    OccConfigLoaderService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [Config,] }] },
        { type: OccSitesConfigLoader },
        { type: OccLoadedConfigConverter },
        { type: TransferState, decorators: [{ type: Optional }] },
        { type: String, decorators: [{ type: Optional }, { type: Inject, args: [SERVER_REQUEST_URL,] }] }
    ]; };
    /** @nocollapse */ OccConfigLoaderService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function OccConfigLoaderService_Factory() { return new OccConfigLoaderService(i0.ɵɵinject(i0.PLATFORM_ID), i0.ɵɵinject(i1.DOCUMENT), i0.ɵɵinject(i2.Config), i0.ɵɵinject(i3.OccSitesConfigLoader), i0.ɵɵinject(i4.OccLoadedConfigConverter), i0.ɵɵinject(i5.TransferState, 8), i0.ɵɵinject(i6.SERVER_REQUEST_URL, 8)); }, token: OccConfigLoaderService, providedIn: "root" });
    return OccConfigLoaderService;
}());
export { OccConfigLoaderService };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    OccConfigLoaderService.prototype.platform;
    /**
     * @type {?}
     * @protected
     */
    OccConfigLoaderService.prototype.document;
    /**
     * @type {?}
     * @protected
     */
    OccConfigLoaderService.prototype.config;
    /**
     * @type {?}
     * @protected
     */
    OccConfigLoaderService.prototype.sitesConfigLoader;
    /**
     * @type {?}
     * @protected
     */
    OccConfigLoaderService.prototype.converter;
    /**
     * @type {?}
     * @protected
     */
    OccConfigLoaderService.prototype.transferState;
    /**
     * @type {?}
     * @protected
     */
    OccConfigLoaderService.prototype.serverRequestUrl;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNvbmZpZy1sb2FkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2MvY29uZmlnLWxvYWRlci9vY2MtY29uZmlnLWxvYWRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2hGLE9BQU8sRUFDTCxNQUFNLEVBQ04sVUFBVSxFQUNWLFNBQVMsRUFDVCxRQUFRLEVBQ1IsV0FBVyxHQUNaLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFDTCxZQUFZLEVBRVosYUFBYSxHQUNkLE1BQU0sMkJBQTJCLENBQUM7QUFDbkMsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFHMUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFN0QsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDekUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7Ozs7Ozs7OztBQUVqRSxNQUFNLEtBQU8sMkJBQTJCLEdBQXFCLFlBQVksQ0FFdkUsb0JBQW9CLENBQUM7QUFFdkI7SUFFRSxnQ0FDaUMsUUFBYSxFQUNoQixRQUFhLEVBQ2YsTUFBVyxFQUMzQixpQkFBdUMsRUFDdkMsU0FBbUMsRUFDdkIsYUFBNEIsRUFJeEMsZ0JBQXlCO1FBVEosYUFBUSxHQUFSLFFBQVEsQ0FBSztRQUNoQixhQUFRLEdBQVIsUUFBUSxDQUFL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Q0FBQztTQUMxRDtRQUVELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7Ozs7O0lBRU8sc0RBQXFCOzs7O0lBQTdCOztZQUNRLGtCQUFrQixHQUN0QixPQUFPLENBQ0wsSUFBSSxDQUFDLE1BQU07WUFDWCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUk7WUFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUM5QixLQUFLLFdBQVc7UUFDbkIsSUFBSSxrQkFBa0IsSUFBSSxTQUFTLEVBQUUsRUFBRTtZQUNyQyxPQUFPLENBQUMsSUFBSSxDQUNWLHFIQUFxSCxDQUN0SCxDQUFDO1NBQ0g7UUFDRCxPQUFPLENBQUMsa0JBQWtCLENBQUM7SUFDN0IsQ0FBQzs7Z0JBcEhGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7Z0RBRzdCLE1BQU0sU0FBQyxXQUFXO2dEQUNsQixNQUFNLFNBQUMsUUFBUTtnREFDZixNQUFNLFNBQUMsTUFBTTtnQkFYVCxvQkFBb0I7Z0JBRHBCLHdCQUF3QjtnQkFWL0IsYUFBYSx1QkF5QlYsUUFBUTs2Q0FFUixRQUFRLFlBQ1IsTUFBTSxTQUFDLGtCQUFrQjs7O2lDQXZDOUI7Q0FpSkMsQUFySEQsSUFxSEM7U0FwSFksc0JBQXNCOzs7Ozs7SUFFL0IsMENBQTRDOzs7OztJQUM1QywwQ0FBeUM7Ozs7O0lBQ3pDLHdDQUFxQzs7Ozs7SUFDckMsbURBQWlEOzs7OztJQUNqRCwyQ0FBNkM7Ozs7O0lBQzdDLCtDQUFrRDs7Ozs7SUFFbEQsa0RBRW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQsIGlzUGxhdGZvcm1Ccm93c2VyLCBpc1BsYXRmb3JtU2VydmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIEluamVjdCxcbiAgSW5qZWN0YWJsZSxcbiAgaXNEZXZNb2RlLFxuICBPcHRpb25hbCxcbiAgUExBVEZPUk1fSUQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgbWFrZVN0YXRlS2V5LFxuICBTdGF0ZUtleSxcbiAgVHJhbnNmZXJTdGF0ZSxcbn0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcvY29uZmlnLm1vZHVsZSc7XG5pbXBvcnQgeyBkZWVwTWVyZ2UgfSBmcm9tICcuLi8uLi9jb25maWcvdXRpbHMvZGVlcC1tZXJnZSc7XG5pbXBvcnQgeyBJMThuQ29uZmlnIH0gZnJvbSAnLi4vLi4vaTE4bi9jb25maWcvaTE4bi1jb25maWcnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRDb25maWcgfSBmcm9tICcuLi8uLi9zaXRlLWNvbnRleHQvY29uZmlnL3NpdGUtY29udGV4dC1jb25maWcnO1xuaW1wb3J0IHsgU0VSVkVSX1JFUVVFU1RfVVJMIH0gZnJvbSAnLi4vLi4vc3NyL3Nzci5wcm92aWRlcnMnO1xuaW1wb3J0IHsgT2NjTG9hZGVkQ29uZmlnIH0gZnJvbSAnLi9vY2MtbG9hZGVkLWNvbmZpZyc7XG5pbXBvcnQgeyBPY2NMb2FkZWRDb25maWdDb252ZXJ0ZXIgfSBmcm9tICcuL29jYy1sb2FkZWQtY29uZmlnLWNvbnZlcnRlcic7XG5pbXBvcnQgeyBPY2NTaXRlc0NvbmZpZ0xvYWRlciB9IGZyb20gJy4vb2NjLXNpdGVzLWNvbmZpZy1sb2FkZXInO1xuXG5leHBvcnQgY29uc3QgRVhURVJOQUxfQ09ORklHX1RSQU5TRkVSX0lEOiBTdGF0ZUtleTxzdHJpbmc+ID0gbWFrZVN0YXRlS2V5PFxuICBzdHJpbmdcbj4oJ2N4LWV4dGVybmFsLWNvbmZpZycpO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIE9jY0NvbmZpZ0xvYWRlclNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcm90ZWN0ZWQgcGxhdGZvcm06IGFueSxcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcm90ZWN0ZWQgZG9jdW1lbnQ6IGFueSxcbiAgICBASW5qZWN0KENvbmZpZykgcHJvdGVjdGVkIGNvbmZpZzogYW55LFxuICAgIHByb3RlY3RlZCBzaXRlc0NvbmZpZ0xvYWRlcjogT2NjU2l0ZXNDb25maWdMb2FkZXIsXG4gICAgcHJvdGVjdGVkIGNvbnZlcnRlcjogT2NjTG9hZGVkQ29uZmlnQ29udmVydGVyLFxuICAgIEBPcHRpb25hbCgpIHByb3RlY3RlZCB0cmFuc2ZlclN0YXRlOiBUcmFuc2ZlclN0YXRlLFxuXG4gICAgQE9wdGlvbmFsKClcbiAgICBASW5qZWN0KFNFUlZFUl9SRVFVRVNUX1VSTClcbiAgICBwcm90ZWN0ZWQgc2VydmVyUmVxdWVzdFVybD86IHN0cmluZ1xuICApIHt9XG5cbiAgcHJpdmF0ZSBnZXQgY3VycmVudFVybCgpOiBzdHJpbmcge1xuICAgIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtKSkge1xuICAgICAgcmV0dXJuIHRoaXMuZG9jdW1lbnQubG9jYXRpb24uaHJlZjtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2VydmVyUmVxdWVzdFVybCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2VydmVyUmVxdWVzdFVybDtcbiAgICB9XG4gICAgaWYgKGlzRGV2TW9kZSgpKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICBgUGxlYXNlIHByb3ZpZGUgdG9rZW4gJ1NFUlZFUl9SRVFVRVNUX1VSTCcgd2l0aCB0aGUgcmVxdWVzdGVkIFVSTCBmb3IgU1NSYFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdGhlIFNwYXJ0YWN1cyBjb25maWcgYXN5bmNocm9ub3VzbHkgYmFzaW5nIG9uIHRoZSBleHRlcm5hbCBjb25maWdcbiAgICovXG4gIGxvYWRDb25maWcoKTogUHJvbWlzZTxJMThuQ29uZmlnIHwgU2l0ZUNvbnRleHRDb25maWc+IHtcbiAgICByZXR1cm4gdGhpcy5nZXQoKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRhcChleHRlcm5hbENvbmZpZyA9PiB0aGlzLnRyYW5zZmVyKGV4dGVybmFsQ29uZmlnKSksXG4gICAgICAgIG1hcChleHRlcm5hbENvbmZpZyA9PlxuICAgICAgICAgIGRlZXBNZXJnZSh7fSwgLi4udGhpcy5nZXRDb25maWdDaHVua3MoZXh0ZXJuYWxDb25maWcpKVxuICAgICAgICApXG4gICAgICApXG4gICAgICAudG9Qcm9taXNlKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgZXh0ZXJuYWwgY29uZmlnXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0KCk6IE9ic2VydmFibGU8T2NjTG9hZGVkQ29uZmlnPiB7XG4gICAgY29uc3QgcmVoeWRyYXRlZEV4dGVybmFsQ29uZmlnID0gdGhpcy5yZWh5ZHJhdGUoKTtcblxuICAgIHJldHVybiByZWh5ZHJhdGVkRXh0ZXJuYWxDb25maWdcbiAgICAgID8gb2YocmVoeWRyYXRlZEV4dGVybmFsQ29uZmlnKVxuICAgICAgOiB0aGlzLmxvYWQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2FkcyB0aGUgZXh0ZXJuYWwgY29uZmlnIGZyb20gYmFja2VuZFxuICAgKi9cbiAgcHJvdGVjdGVkIGxvYWQoKTogT2JzZXJ2YWJsZTxPY2NMb2FkZWRDb25maWc+IHtcbiAgICByZXR1cm4gdGhpcy5zaXRlc0NvbmZpZ0xvYWRlclxuICAgICAgLmxvYWQoKVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcChiYXNlU2l0ZXMgPT5cbiAgICAgICAgICB0aGlzLmNvbnZlcnRlci5mcm9tT2NjQmFzZVNpdGVzKGJhc2VTaXRlcywgdGhpcy5jdXJyZW50VXJsKVxuICAgICAgICApXG4gICAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyaWVzIHRvIHJlaHlkcmF0ZSBleHRlcm5hbCBjb25maWcgaW4gdGhlIGJyb3dzZXIgZnJvbSBTU1JcbiAgICovXG4gIHByb3RlY3RlZCByZWh5ZHJhdGUoKTogT2NjTG9hZGVkQ29uZmlnIHtcbiAgICBpZiAodGhpcy50cmFuc2ZlclN0YXRlICYmIGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm0pKSB7XG4gICAgICByZXR1cm4gdGhpcy50cmFuc2ZlclN0YXRlLmdldChFWFRFUk5BTF9DT05GSUdfVFJBTlNGRVJfSUQsIHVuZGVmaW5lZCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRyYW5zZmVycyB0aGUgZ2l2ZW4gZXh0ZXJuYWwgY29uZmlnIGluIFNTUiB0byB0aGUgYnJvd3NlclxuICAgKlxuICAgKiBAcGFyYW0gZXh0ZXJuYWxDb25maWdcbiAgICovXG4gIHByb3RlY3RlZCB0cmFuc2ZlcihleHRlcm5hbENvbmZpZzogT2NjTG9hZGVkQ29uZmlnKSB7XG4gICAgaWYgKFxuICAgICAgdGhpcy50cmFuc2ZlclN0YXRlICYmXG4gICAgICBpc1BsYXRmb3JtU2VydmVyKHRoaXMucGxhdGZvcm0pICYmXG4gICAgICBleHRlcm5hbENvbmZpZ1xuICAgICkge1xuICAgICAgdGhpcy50cmFuc2ZlclN0YXRlLnNldChFWFRFUk5BTF9DT05GSUdfVFJBTlNGRVJfSUQsIGV4dGVybmFsQ29uZmlnKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0Q29uZmlnQ2h1bmtzKFxuICAgIGV4dGVybmFsQ29uZmlnOiBPY2NMb2FkZWRDb25maWdcbiAgKTogKEkxOG5Db25maWcgfCBTaXRlQ29udGV4dENvbmZpZylbXSB7XG4gICAgY29uc3QgY2h1bmtzOiBhbnlbXSA9IFt0aGlzLmNvbnZlcnRlci50b1NpdGVDb250ZXh0Q29uZmlnKGV4dGVybmFsQ29uZmlnKV07XG5cbiAgICBpZiAodGhpcy5zaG91bGRSZXR1cm5JMThuQ2h1bmsoKSkge1xuICAgICAgY2h1bmtzLnB1c2godGhpcy5jb252ZXJ0ZXIudG9JMThuQ29uZmlnKGV4dGVybmFsQ29uZmlnKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNodW5rcztcbiAgfVxuXG4gIHByaXZhdGUgc2hvdWxkUmV0dXJuSTE4bkNodW5rKCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGZhbGxiYWNrTGFuZ0V4aXN0cyA9XG4gICAgICB0eXBlb2YgKFxuICAgICAgICB0aGlzLmNvbmZpZyAmJlxuICAgICAgICB0aGlzLmNvbmZpZy5pMThuICYmXG4gICAgICAgIHRoaXMuY29uZmlnLmkxOG4uZmFsbGJhY2tMYW5nXG4gICAgICApICE9PSAndW5kZWZpbmVkJztcbiAgICBpZiAoZmFsbGJhY2tMYW5nRXhpc3RzICYmIGlzRGV2TW9kZSgpKSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGBUaGVyZSBpcyBhbiBhbHJlYWR5IHByb3ZpZGVkIHN0YXRpYyBjb25maWcgZm9yICdpMThuLmZhbGxiYWNrTGFuZycsIHNvIHRoZSB2YWx1ZSBmcm9tIE9DQyBsb2FkZWQgY29uZmlnIGlzIGlnbm9yZWQuYFxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuICFmYWxsYmFja0xhbmdFeGlzdHM7XG4gIH1cbn1cbiJdfQ==
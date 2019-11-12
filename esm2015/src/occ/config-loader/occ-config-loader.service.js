/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export const EXTERNAL_CONFIG_TRANSFER_ID = makeStateKey('cx-external-config');
export class OccConfigLoaderService {
    /**
     * @param {?} platform
     * @param {?} document
     * @param {?} config
     * @param {?} sitesConfigLoader
     * @param {?} converter
     * @param {?} transferState
     * @param {?=} serverRequestUrl
     */
    constructor(platform, document, config, sitesConfigLoader, converter, transferState, serverRequestUrl) {
        this.platform = platform;
        this.document = document;
        this.config = config;
        this.sitesConfigLoader = sitesConfigLoader;
        this.converter = converter;
        this.transferState = transferState;
        this.serverRequestUrl = serverRequestUrl;
    }
    /**
     * @private
     * @return {?}
     */
    get currentUrl() {
        if (isPlatformBrowser(this.platform)) {
            return this.document.location.href;
        }
        if (this.serverRequestUrl) {
            return this.serverRequestUrl;
        }
        if (isDevMode()) {
            console.error(`Please provide token 'SERVER_REQUEST_URL' with the requested URL for SSR`);
        }
    }
    /**
     * Initializes the Spartacus config asynchronously basing on the external config
     * @return {?}
     */
    loadConfig() {
        return this.get()
            .pipe(tap((/**
         * @param {?} externalConfig
         * @return {?}
         */
        externalConfig => this.transfer(externalConfig))), map((/**
         * @param {?} externalConfig
         * @return {?}
         */
        externalConfig => deepMerge({}, ...this.getConfigChunks(externalConfig)))))
            .toPromise();
    }
    /**
     * Returns the external config
     * @protected
     * @return {?}
     */
    get() {
        /** @type {?} */
        const rehydratedExternalConfig = this.rehydrate();
        return rehydratedExternalConfig
            ? of(rehydratedExternalConfig)
            : this.load();
    }
    /**
     * Loads the external config from backend
     * @protected
     * @return {?}
     */
    load() {
        return this.sitesConfigLoader
            .load()
            .pipe(map((/**
         * @param {?} baseSites
         * @return {?}
         */
        baseSites => this.converter.fromOccBaseSites(baseSites, this.currentUrl))));
    }
    /**
     * Tries to rehydrate external config in the browser from SSR
     * @protected
     * @return {?}
     */
    rehydrate() {
        if (this.transferState && isPlatformBrowser(this.platform)) {
            return this.transferState.get(EXTERNAL_CONFIG_TRANSFER_ID, undefined);
        }
    }
    /**
     * Transfers the given external config in SSR to the browser
     *
     * @protected
     * @param {?} externalConfig
     * @return {?}
     */
    transfer(externalConfig) {
        if (this.transferState &&
            isPlatformServer(this.platform) &&
            externalConfig) {
            this.transferState.set(EXTERNAL_CONFIG_TRANSFER_ID, externalConfig);
        }
    }
    /**
     * @protected
     * @param {?} externalConfig
     * @return {?}
     */
    getConfigChunks(externalConfig) {
        /** @type {?} */
        const chunks = [this.converter.toSiteContextConfig(externalConfig)];
        if (this.shouldReturnI18nChunk()) {
            chunks.push(this.converter.toI18nConfig(externalConfig));
        }
        return chunks;
    }
    /**
     * @private
     * @return {?}
     */
    shouldReturnI18nChunk() {
        /** @type {?} */
        const fallbackLangExists = typeof (this.config &&
            this.config.i18n &&
            this.config.i18n.fallbackLang) !== 'undefined';
        if (fallbackLangExists && isDevMode()) {
            console.warn(`There is an already provided static config for 'i18n.fallbackLang', so the value from OCC loaded config is ignored.`);
        }
        return !fallbackLangExists;
    }
}
OccConfigLoaderService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
OccConfigLoaderService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [Config,] }] },
    { type: OccSitesConfigLoader },
    { type: OccLoadedConfigConverter },
    { type: TransferState, decorators: [{ type: Optional }] },
    { type: String, decorators: [{ type: Optional }, { type: Inject, args: [SERVER_REQUEST_URL,] }] }
];
/** @nocollapse */ OccConfigLoaderService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function OccConfigLoaderService_Factory() { return new OccConfigLoaderService(i0.ɵɵinject(i0.PLATFORM_ID), i0.ɵɵinject(i1.DOCUMENT), i0.ɵɵinject(i2.Config), i0.ɵɵinject(i3.OccSitesConfigLoader), i0.ɵɵinject(i4.OccLoadedConfigConverter), i0.ɵɵinject(i5.TransferState, 8), i0.ɵɵinject(i6.SERVER_REQUEST_URL, 8)); }, token: OccConfigLoaderService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNvbmZpZy1sb2FkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2MvY29uZmlnLWxvYWRlci9vY2MtY29uZmlnLWxvYWRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixFQUFFLGdCQUFnQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEYsT0FBTyxFQUNMLE1BQU0sRUFDTixVQUFVLEVBQ1YsU0FBUyxFQUNULFFBQVEsRUFDUixXQUFXLEdBQ1osTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUNMLFlBQVksRUFFWixhQUFhLEdBQ2QsTUFBTSwyQkFBMkIsQ0FBQztBQUNuQyxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDMUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3BELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUcxRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUU3RCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7Ozs7Ozs7O0FBRWpFLE1BQU0sT0FBTywyQkFBMkIsR0FBcUIsWUFBWSxDQUV2RSxvQkFBb0IsQ0FBQztBQUd2QixNQUFNLE9BQU8sc0JBQXNCOzs7Ozs7Ozs7O0lBQ2pDLFlBQ2lDLFFBQWEsRUFDaEIsUUFBYSxFQUNmLE1BQVcsRUFDM0IsaUJBQXVDLEVBQ3ZDLFNBQW1DLEVBQ3ZCLGFBQTRCLEVBSXhDLGdCQUF5QjtRQVRKLGFBQVEsR0FBUixRQUFRLENBQUs7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QUksQ0FBQyxZQUFZLENBQzlCLEtBQUssV0FBVztRQUNuQixJQUFJLGtCQUFrQixJQUFJLFNBQVMsRUFBRSxFQUFFO1lBQ3JDLE9BQU8sQ0FBQyxJQUFJLENBQ1YscUhBQXFILENBQ3RILENBQUM7U0FDSDtRQUNELE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQztJQUM3QixDQUFDOzs7WUFwSEYsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7Ozs0Q0FHN0IsTUFBTSxTQUFDLFdBQVc7NENBQ2xCLE1BQU0sU0FBQyxRQUFROzRDQUNmLE1BQU0sU0FBQyxNQUFNO1lBWFQsb0JBQW9CO1lBRHBCLHdCQUF3QjtZQVYvQixhQUFhLHVCQXlCVixRQUFRO3lDQUVSLFFBQVEsWUFDUixNQUFNLFNBQUMsa0JBQWtCOzs7Ozs7OztJQVIxQiwwQ0FBNEM7Ozs7O0lBQzVDLDBDQUF5Qzs7Ozs7SUFDekMsd0NBQXFDOzs7OztJQUNyQyxtREFBaUQ7Ozs7O0lBQ2pELDJDQUE2Qzs7Ozs7SUFDN0MsK0NBQWtEOzs7OztJQUVsRCxrREFFbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBET0NVTUVOVCwgaXNQbGF0Zm9ybUJyb3dzZXIsIGlzUGxhdGZvcm1TZXJ2ZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgSW5qZWN0LFxuICBJbmplY3RhYmxlLFxuICBpc0Rldk1vZGUsXG4gIE9wdGlvbmFsLFxuICBQTEFURk9STV9JRCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBtYWtlU3RhdGVLZXksXG4gIFN0YXRlS2V5LFxuICBUcmFuc2ZlclN0YXRlLFxufSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZy9jb25maWcubW9kdWxlJztcbmltcG9ydCB7IGRlZXBNZXJnZSB9IGZyb20gJy4uLy4uL2NvbmZpZy91dGlscy9kZWVwLW1lcmdlJztcbmltcG9ydCB7IEkxOG5Db25maWcgfSBmcm9tICcuLi8uLi9pMThuL2NvbmZpZy9pMThuLWNvbmZpZyc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dENvbmZpZyB9IGZyb20gJy4uLy4uL3NpdGUtY29udGV4dC9jb25maWcvc2l0ZS1jb250ZXh0LWNvbmZpZyc7XG5pbXBvcnQgeyBTRVJWRVJfUkVRVUVTVF9VUkwgfSBmcm9tICcuLi8uLi9zc3Ivc3NyLnByb3ZpZGVycyc7XG5pbXBvcnQgeyBPY2NMb2FkZWRDb25maWcgfSBmcm9tICcuL29jYy1sb2FkZWQtY29uZmlnJztcbmltcG9ydCB7IE9jY0xvYWRlZENvbmZpZ0NvbnZlcnRlciB9IGZyb20gJy4vb2NjLWxvYWRlZC1jb25maWctY29udmVydGVyJztcbmltcG9ydCB7IE9jY1NpdGVzQ29uZmlnTG9hZGVyIH0gZnJvbSAnLi9vY2Mtc2l0ZXMtY29uZmlnLWxvYWRlcic7XG5cbmV4cG9ydCBjb25zdCBFWFRFUk5BTF9DT05GSUdfVFJBTlNGRVJfSUQ6IFN0YXRlS2V5PHN0cmluZz4gPSBtYWtlU3RhdGVLZXk8XG4gIHN0cmluZ1xuPignY3gtZXh0ZXJuYWwtY29uZmlnJyk7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgT2NjQ29uZmlnTG9hZGVyU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHByb3RlY3RlZCBwbGF0Zm9ybTogYW55LFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByb3RlY3RlZCBkb2N1bWVudDogYW55LFxuICAgIEBJbmplY3QoQ29uZmlnKSBwcm90ZWN0ZWQgY29uZmlnOiBhbnksXG4gICAgcHJvdGVjdGVkIHNpdGVzQ29uZmlnTG9hZGVyOiBPY2NTaXRlc0NvbmZpZ0xvYWRlcixcbiAgICBwcm90ZWN0ZWQgY29udmVydGVyOiBPY2NMb2FkZWRDb25maWdDb252ZXJ0ZXIsXG4gICAgQE9wdGlvbmFsKCkgcHJvdGVjdGVkIHRyYW5zZmVyU3RhdGU6IFRyYW5zZmVyU3RhdGUsXG5cbiAgICBAT3B0aW9uYWwoKVxuICAgIEBJbmplY3QoU0VSVkVSX1JFUVVFU1RfVVJMKVxuICAgIHByb3RlY3RlZCBzZXJ2ZXJSZXF1ZXN0VXJsPzogc3RyaW5nXG4gICkge31cblxuICBwcml2YXRlIGdldCBjdXJyZW50VXJsKCk6IHN0cmluZyB7XG4gICAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm0pKSB7XG4gICAgICByZXR1cm4gdGhpcy5kb2N1bWVudC5sb2NhdGlvbi5ocmVmO1xuICAgIH1cbiAgICBpZiAodGhpcy5zZXJ2ZXJSZXF1ZXN0VXJsKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXJ2ZXJSZXF1ZXN0VXJsO1xuICAgIH1cbiAgICBpZiAoaXNEZXZNb2RlKCkpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgIGBQbGVhc2UgcHJvdmlkZSB0b2tlbiAnU0VSVkVSX1JFUVVFU1RfVVJMJyB3aXRoIHRoZSByZXF1ZXN0ZWQgVVJMIGZvciBTU1JgXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyB0aGUgU3BhcnRhY3VzIGNvbmZpZyBhc3luY2hyb25vdXNseSBiYXNpbmcgb24gdGhlIGV4dGVybmFsIGNvbmZpZ1xuICAgKi9cbiAgbG9hZENvbmZpZygpOiBQcm9taXNlPEkxOG5Db25maWcgfCBTaXRlQ29udGV4dENvbmZpZz4ge1xuICAgIHJldHVybiB0aGlzLmdldCgpXG4gICAgICAucGlwZShcbiAgICAgICAgdGFwKGV4dGVybmFsQ29uZmlnID0+IHRoaXMudHJhbnNmZXIoZXh0ZXJuYWxDb25maWcpKSxcbiAgICAgICAgbWFwKGV4dGVybmFsQ29uZmlnID0+XG4gICAgICAgICAgZGVlcE1lcmdlKHt9LCAuLi50aGlzLmdldENvbmZpZ0NodW5rcyhleHRlcm5hbENvbmZpZykpXG4gICAgICAgIClcbiAgICAgIClcbiAgICAgIC50b1Byb21pc2UoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBleHRlcm5hbCBjb25maWdcbiAgICovXG4gIHByb3RlY3RlZCBnZXQoKTogT2JzZXJ2YWJsZTxPY2NMb2FkZWRDb25maWc+IHtcbiAgICBjb25zdCByZWh5ZHJhdGVkRXh0ZXJuYWxDb25maWcgPSB0aGlzLnJlaHlkcmF0ZSgpO1xuXG4gICAgcmV0dXJuIHJlaHlkcmF0ZWRFeHRlcm5hbENvbmZpZ1xuICAgICAgPyBvZihyZWh5ZHJhdGVkRXh0ZXJuYWxDb25maWcpXG4gICAgICA6IHRoaXMubG9hZCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIExvYWRzIHRoZSBleHRlcm5hbCBjb25maWcgZnJvbSBiYWNrZW5kXG4gICAqL1xuICBwcm90ZWN0ZWQgbG9hZCgpOiBPYnNlcnZhYmxlPE9jY0xvYWRlZENvbmZpZz4ge1xuICAgIHJldHVybiB0aGlzLnNpdGVzQ29uZmlnTG9hZGVyXG4gICAgICAubG9hZCgpXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKGJhc2VTaXRlcyA9PlxuICAgICAgICAgIHRoaXMuY29udmVydGVyLmZyb21PY2NCYXNlU2l0ZXMoYmFzZVNpdGVzLCB0aGlzLmN1cnJlbnRVcmwpXG4gICAgICAgIClcbiAgICAgICk7XG4gIH1cblxuICAvKipcbiAgICogVHJpZXMgdG8gcmVoeWRyYXRlIGV4dGVybmFsIGNvbmZpZyBpbiB0aGUgYnJvd3NlciBmcm9tIFNTUlxuICAgKi9cbiAgcHJvdGVjdGVkIHJlaHlkcmF0ZSgpOiBPY2NMb2FkZWRDb25maWcge1xuICAgIGlmICh0aGlzLnRyYW5zZmVyU3RhdGUgJiYgaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybSkpIHtcbiAgICAgIHJldHVybiB0aGlzLnRyYW5zZmVyU3RhdGUuZ2V0KEVYVEVSTkFMX0NPTkZJR19UUkFOU0ZFUl9JRCwgdW5kZWZpbmVkKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVHJhbnNmZXJzIHRoZSBnaXZlbiBleHRlcm5hbCBjb25maWcgaW4gU1NSIHRvIHRoZSBicm93c2VyXG4gICAqXG4gICAqIEBwYXJhbSBleHRlcm5hbENvbmZpZ1xuICAgKi9cbiAgcHJvdGVjdGVkIHRyYW5zZmVyKGV4dGVybmFsQ29uZmlnOiBPY2NMb2FkZWRDb25maWcpIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLnRyYW5zZmVyU3RhdGUgJiZcbiAgICAgIGlzUGxhdGZvcm1TZXJ2ZXIodGhpcy5wbGF0Zm9ybSkgJiZcbiAgICAgIGV4dGVybmFsQ29uZmlnXG4gICAgKSB7XG4gICAgICB0aGlzLnRyYW5zZmVyU3RhdGUuc2V0KEVYVEVSTkFMX0NPTkZJR19UUkFOU0ZFUl9JRCwgZXh0ZXJuYWxDb25maWcpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRDb25maWdDaHVua3MoXG4gICAgZXh0ZXJuYWxDb25maWc6IE9jY0xvYWRlZENvbmZpZ1xuICApOiAoSTE4bkNvbmZpZyB8IFNpdGVDb250ZXh0Q29uZmlnKVtdIHtcbiAgICBjb25zdCBjaHVua3M6IGFueVtdID0gW3RoaXMuY29udmVydGVyLnRvU2l0ZUNvbnRleHRDb25maWcoZXh0ZXJuYWxDb25maWcpXTtcblxuICAgIGlmICh0aGlzLnNob3VsZFJldHVybkkxOG5DaHVuaygpKSB7XG4gICAgICBjaHVua3MucHVzaCh0aGlzLmNvbnZlcnRlci50b0kxOG5Db25maWcoZXh0ZXJuYWxDb25maWcpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2h1bmtzO1xuICB9XG5cbiAgcHJpdmF0ZSBzaG91bGRSZXR1cm5JMThuQ2h1bmsoKTogYm9vbGVhbiB7XG4gICAgY29uc3QgZmFsbGJhY2tMYW5nRXhpc3RzID1cbiAgICAgIHR5cGVvZiAoXG4gICAgICAgIHRoaXMuY29uZmlnICYmXG4gICAgICAgIHRoaXMuY29uZmlnLmkxOG4gJiZcbiAgICAgICAgdGhpcy5jb25maWcuaTE4bi5mYWxsYmFja0xhbmdcbiAgICAgICkgIT09ICd1bmRlZmluZWQnO1xuICAgIGlmIChmYWxsYmFja0xhbmdFeGlzdHMgJiYgaXNEZXZNb2RlKCkpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYFRoZXJlIGlzIGFuIGFscmVhZHkgcHJvdmlkZWQgc3RhdGljIGNvbmZpZyBmb3IgJ2kxOG4uZmFsbGJhY2tMYW5nJywgc28gdGhlIHZhbHVlIGZyb20gT0NDIGxvYWRlZCBjb25maWcgaXMgaWdub3JlZC5gXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gIWZhbGxiYWNrTGFuZ0V4aXN0cztcbiAgfVxufVxuIl19
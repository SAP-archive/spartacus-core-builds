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
        if (isPlatformBrowser(this.platform)) {
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
        if (isPlatformServer(this.platform) && externalConfig) {
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
    { type: TransferState },
    { type: String, decorators: [{ type: Optional }, { type: Inject, args: [SERVER_REQUEST_URL,] }] }
];
/** @nocollapse */ OccConfigLoaderService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function OccConfigLoaderService_Factory() { return new OccConfigLoaderService(i0.ɵɵinject(i0.PLATFORM_ID), i0.ɵɵinject(i1.DOCUMENT), i0.ɵɵinject(i2.Config), i0.ɵɵinject(i3.OccSitesConfigLoader), i0.ɵɵinject(i4.OccLoadedConfigConverter), i0.ɵɵinject(i5.TransferState), i0.ɵɵinject(i6.SERVER_REQUEST_URL, 8)); }, token: OccConfigLoaderService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNvbmZpZy1sb2FkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2MvY29uZmlnLWxvYWRlci9vY2MtY29uZmlnLWxvYWRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixFQUFFLGdCQUFnQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEYsT0FBTyxFQUNMLE1BQU0sRUFDTixVQUFVLEVBQ1YsU0FBUyxFQUNULFFBQVEsRUFDUixXQUFXLEdBQ1osTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUNMLFlBQVksRUFFWixhQUFhLEdBQ2QsTUFBTSwyQkFBMkIsQ0FBQztBQUNuQyxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDMUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3BELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUcxRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUU3RCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7Ozs7Ozs7O0FBRWpFLE1BQU0sT0FBTywyQkFBMkIsR0FBcUIsWUFBWSxDQUV2RSxvQkFBb0IsQ0FBQztBQUd2QixNQUFNLE9BQU8sc0JBQXNCOzs7Ozs7Ozs7O0lBQ2pDLFlBQ2lDLFFBQWEsRUFDaEIsUUFBYSxFQUNmLE1BQVcsRUFDM0IsaUJBQXVDLEVBQ3ZDLFNBQW1DLEVBQ25DLGFBQTRCLEVBSTVCLGdCQUF5QjtRQVRKLGFBQVEsR0FBUixRQUFRLENBQUs7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QkFBa0IsSUFBSSxTQUFTLEVBQUUsRUFBRTtZQUNyQyxPQUFPLENBQUMsSUFBSSxDQUNWLHFIQUFxSCxDQUN0SCxDQUFDO1NBQ0g7UUFDRCxPQUFPLENBQUMsa0JBQWtCLENBQUM7SUFDN0IsQ0FBQzs7O1lBaEhGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7NENBRzdCLE1BQU0sU0FBQyxXQUFXOzRDQUNsQixNQUFNLFNBQUMsUUFBUTs0Q0FDZixNQUFNLFNBQUMsTUFBTTtZQVhULG9CQUFvQjtZQURwQix3QkFBd0I7WUFWL0IsYUFBYTt5Q0EyQlYsUUFBUSxZQUNSLE1BQU0sU0FBQyxrQkFBa0I7Ozs7Ozs7O0lBUjFCLDBDQUE0Qzs7Ozs7SUFDNUMsMENBQXlDOzs7OztJQUN6Qyx3Q0FBcUM7Ozs7O0lBQ3JDLG1EQUFpRDs7Ozs7SUFDakQsMkNBQTZDOzs7OztJQUM3QywrQ0FBc0M7Ozs7O0lBRXRDLGtEQUVtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERPQ1VNRU5ULCBpc1BsYXRmb3JtQnJvd3NlciwgaXNQbGF0Zm9ybVNlcnZlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBJbmplY3QsXG4gIEluamVjdGFibGUsXG4gIGlzRGV2TW9kZSxcbiAgT3B0aW9uYWwsXG4gIFBMQVRGT1JNX0lELFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIG1ha2VTdGF0ZUtleSxcbiAgU3RhdGVLZXksXG4gIFRyYW5zZmVyU3RhdGUsXG59IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnL2NvbmZpZy5tb2R1bGUnO1xuaW1wb3J0IHsgZGVlcE1lcmdlIH0gZnJvbSAnLi4vLi4vY29uZmlnL3V0aWxzL2RlZXAtbWVyZ2UnO1xuaW1wb3J0IHsgSTE4bkNvbmZpZyB9IGZyb20gJy4uLy4uL2kxOG4vY29uZmlnL2kxOG4tY29uZmlnJztcbmltcG9ydCB7IFNpdGVDb250ZXh0Q29uZmlnIH0gZnJvbSAnLi4vLi4vc2l0ZS1jb250ZXh0L2NvbmZpZy9zaXRlLWNvbnRleHQtY29uZmlnJztcbmltcG9ydCB7IFNFUlZFUl9SRVFVRVNUX1VSTCB9IGZyb20gJy4uLy4uL3Nzci9zc3IucHJvdmlkZXJzJztcbmltcG9ydCB7IE9jY0xvYWRlZENvbmZpZyB9IGZyb20gJy4vb2NjLWxvYWRlZC1jb25maWcnO1xuaW1wb3J0IHsgT2NjTG9hZGVkQ29uZmlnQ29udmVydGVyIH0gZnJvbSAnLi9vY2MtbG9hZGVkLWNvbmZpZy1jb252ZXJ0ZXInO1xuaW1wb3J0IHsgT2NjU2l0ZXNDb25maWdMb2FkZXIgfSBmcm9tICcuL29jYy1zaXRlcy1jb25maWctbG9hZGVyJztcblxuZXhwb3J0IGNvbnN0IEVYVEVSTkFMX0NPTkZJR19UUkFOU0ZFUl9JRDogU3RhdGVLZXk8c3RyaW5nPiA9IG1ha2VTdGF0ZUtleTxcbiAgc3RyaW5nXG4+KCdjeC1leHRlcm5hbC1jb25maWcnKTtcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBPY2NDb25maWdMb2FkZXJTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChQTEFURk9STV9JRCkgcHJvdGVjdGVkIHBsYXRmb3JtOiBhbnksXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJvdGVjdGVkIGRvY3VtZW50OiBhbnksXG4gICAgQEluamVjdChDb25maWcpIHByb3RlY3RlZCBjb25maWc6IGFueSxcbiAgICBwcm90ZWN0ZWQgc2l0ZXNDb25maWdMb2FkZXI6IE9jY1NpdGVzQ29uZmlnTG9hZGVyLFxuICAgIHByb3RlY3RlZCBjb252ZXJ0ZXI6IE9jY0xvYWRlZENvbmZpZ0NvbnZlcnRlcixcbiAgICBwcm90ZWN0ZWQgdHJhbnNmZXJTdGF0ZTogVHJhbnNmZXJTdGF0ZSxcblxuICAgIEBPcHRpb25hbCgpXG4gICAgQEluamVjdChTRVJWRVJfUkVRVUVTVF9VUkwpXG4gICAgcHJvdGVjdGVkIHNlcnZlclJlcXVlc3RVcmw/OiBzdHJpbmdcbiAgKSB7fVxuXG4gIHByaXZhdGUgZ2V0IGN1cnJlbnRVcmwoKTogc3RyaW5nIHtcbiAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybSkpIHtcbiAgICAgIHJldHVybiB0aGlzLmRvY3VtZW50LmxvY2F0aW9uLmhyZWY7XG4gICAgfVxuICAgIGlmICh0aGlzLnNlcnZlclJlcXVlc3RVcmwpIHtcbiAgICAgIHJldHVybiB0aGlzLnNlcnZlclJlcXVlc3RVcmw7XG4gICAgfVxuICAgIGlmIChpc0Rldk1vZGUoKSkge1xuICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgYFBsZWFzZSBwcm92aWRlIHRva2VuICdTRVJWRVJfUkVRVUVTVF9VUkwnIHdpdGggdGhlIHJlcXVlc3RlZCBVUkwgZm9yIFNTUmBcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIHRoZSBTcGFydGFjdXMgY29uZmlnIGFzeW5jaHJvbm91c2x5IGJhc2luZyBvbiB0aGUgZXh0ZXJuYWwgY29uZmlnXG4gICAqL1xuICBsb2FkQ29uZmlnKCk6IFByb21pc2U8STE4bkNvbmZpZyB8IFNpdGVDb250ZXh0Q29uZmlnPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KClcbiAgICAgIC5waXBlKFxuICAgICAgICB0YXAoZXh0ZXJuYWxDb25maWcgPT4gdGhpcy50cmFuc2ZlcihleHRlcm5hbENvbmZpZykpLFxuICAgICAgICBtYXAoZXh0ZXJuYWxDb25maWcgPT5cbiAgICAgICAgICBkZWVwTWVyZ2Uoe30sIC4uLnRoaXMuZ2V0Q29uZmlnQ2h1bmtzKGV4dGVybmFsQ29uZmlnKSlcbiAgICAgICAgKVxuICAgICAgKVxuICAgICAgLnRvUHJvbWlzZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGV4dGVybmFsIGNvbmZpZ1xuICAgKi9cbiAgcHJvdGVjdGVkIGdldCgpOiBPYnNlcnZhYmxlPE9jY0xvYWRlZENvbmZpZz4ge1xuICAgIGNvbnN0IHJlaHlkcmF0ZWRFeHRlcm5hbENvbmZpZyA9IHRoaXMucmVoeWRyYXRlKCk7XG5cbiAgICByZXR1cm4gcmVoeWRyYXRlZEV4dGVybmFsQ29uZmlnXG4gICAgICA/IG9mKHJlaHlkcmF0ZWRFeHRlcm5hbENvbmZpZylcbiAgICAgIDogdGhpcy5sb2FkKCk7XG4gIH1cblxuICAvKipcbiAgICogTG9hZHMgdGhlIGV4dGVybmFsIGNvbmZpZyBmcm9tIGJhY2tlbmRcbiAgICovXG4gIHByb3RlY3RlZCBsb2FkKCk6IE9ic2VydmFibGU8T2NjTG9hZGVkQ29uZmlnPiB7XG4gICAgcmV0dXJuIHRoaXMuc2l0ZXNDb25maWdMb2FkZXJcbiAgICAgIC5sb2FkKClcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoYmFzZVNpdGVzID0+XG4gICAgICAgICAgdGhpcy5jb252ZXJ0ZXIuZnJvbU9jY0Jhc2VTaXRlcyhiYXNlU2l0ZXMsIHRoaXMuY3VycmVudFVybClcbiAgICAgICAgKVxuICAgICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmllcyB0byByZWh5ZHJhdGUgZXh0ZXJuYWwgY29uZmlnIGluIHRoZSBicm93c2VyIGZyb20gU1NSXG4gICAqL1xuICBwcm90ZWN0ZWQgcmVoeWRyYXRlKCk6IE9jY0xvYWRlZENvbmZpZyB7XG4gICAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm0pKSB7XG4gICAgICByZXR1cm4gdGhpcy50cmFuc2ZlclN0YXRlLmdldChFWFRFUk5BTF9DT05GSUdfVFJBTlNGRVJfSUQsIHVuZGVmaW5lZCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRyYW5zZmVycyB0aGUgZ2l2ZW4gZXh0ZXJuYWwgY29uZmlnIGluIFNTUiB0byB0aGUgYnJvd3NlclxuICAgKlxuICAgKiBAcGFyYW0gZXh0ZXJuYWxDb25maWdcbiAgICovXG4gIHByb3RlY3RlZCB0cmFuc2ZlcihleHRlcm5hbENvbmZpZzogT2NjTG9hZGVkQ29uZmlnKSB7XG4gICAgaWYgKGlzUGxhdGZvcm1TZXJ2ZXIodGhpcy5wbGF0Zm9ybSkgJiYgZXh0ZXJuYWxDb25maWcpIHtcbiAgICAgIHRoaXMudHJhbnNmZXJTdGF0ZS5zZXQoRVhURVJOQUxfQ09ORklHX1RSQU5TRkVSX0lELCBleHRlcm5hbENvbmZpZyk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGdldENvbmZpZ0NodW5rcyhcbiAgICBleHRlcm5hbENvbmZpZzogT2NjTG9hZGVkQ29uZmlnXG4gICk6IChJMThuQ29uZmlnIHwgU2l0ZUNvbnRleHRDb25maWcpW10ge1xuICAgIGNvbnN0IGNodW5rczogYW55W10gPSBbdGhpcy5jb252ZXJ0ZXIudG9TaXRlQ29udGV4dENvbmZpZyhleHRlcm5hbENvbmZpZyldO1xuXG4gICAgaWYgKHRoaXMuc2hvdWxkUmV0dXJuSTE4bkNodW5rKCkpIHtcbiAgICAgIGNodW5rcy5wdXNoKHRoaXMuY29udmVydGVyLnRvSTE4bkNvbmZpZyhleHRlcm5hbENvbmZpZykpO1xuICAgIH1cblxuICAgIHJldHVybiBjaHVua3M7XG4gIH1cblxuICBwcml2YXRlIHNob3VsZFJldHVybkkxOG5DaHVuaygpOiBib29sZWFuIHtcbiAgICBjb25zdCBmYWxsYmFja0xhbmdFeGlzdHMgPVxuICAgICAgdHlwZW9mIChcbiAgICAgICAgdGhpcy5jb25maWcgJiZcbiAgICAgICAgdGhpcy5jb25maWcuaTE4biAmJlxuICAgICAgICB0aGlzLmNvbmZpZy5pMThuLmZhbGxiYWNrTGFuZ1xuICAgICAgKSAhPT0gJ3VuZGVmaW5lZCc7XG4gICAgaWYgKGZhbGxiYWNrTGFuZ0V4aXN0cyAmJiBpc0Rldk1vZGUoKSkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgVGhlcmUgaXMgYW4gYWxyZWFkeSBwcm92aWRlZCBzdGF0aWMgY29uZmlnIGZvciAnaTE4bi5mYWxsYmFja0xhbmcnLCBzbyB0aGUgdmFsdWUgZnJvbSBPQ0MgbG9hZGVkIGNvbmZpZyBpcyBpZ25vcmVkLmBcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiAhZmFsbGJhY2tMYW5nRXhpc3RzO1xuICB9XG59XG4iXX0=
import { __decorate, __param, __read, __spread } from "tslib";
import { DOCUMENT, isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Inject, Injectable, isDevMode, Optional, PLATFORM_ID, } from '@angular/core';
import { makeStateKey, StateKey, TransferState, } from '@angular/platform-browser';
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
        get: function () {
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
    OccConfigLoaderService.prototype.loadConfig = function () {
        var _this = this;
        return this.get()
            .pipe(tap(function (externalConfig) { return _this.transfer(externalConfig); }), map(function (externalConfig) {
            return deepMerge.apply(void 0, __spread([{}], _this.getConfigChunks(externalConfig)));
        }))
            .toPromise();
    };
    /**
     * Returns the external config
     */
    OccConfigLoaderService.prototype.get = function () {
        var rehydratedExternalConfig = this.rehydrate();
        return rehydratedExternalConfig
            ? of(rehydratedExternalConfig)
            : this.load();
    };
    /**
     * Loads the external config from backend
     */
    OccConfigLoaderService.prototype.load = function () {
        var _this = this;
        return this.sitesConfigLoader
            .load()
            .pipe(map(function (baseSites) {
            return _this.converter.fromOccBaseSites(baseSites, _this.currentUrl);
        }));
    };
    /**
     * Tries to rehydrate external config in the browser from SSR
     */
    OccConfigLoaderService.prototype.rehydrate = function () {
        if (this.transferState && isPlatformBrowser(this.platform)) {
            return this.transferState.get(EXTERNAL_CONFIG_TRANSFER_ID, undefined);
        }
    };
    /**
     * Transfers the given external config in SSR to the browser
     *
     * @param externalConfig
     */
    OccConfigLoaderService.prototype.transfer = function (externalConfig) {
        if (this.transferState &&
            isPlatformServer(this.platform) &&
            externalConfig) {
            this.transferState.set(EXTERNAL_CONFIG_TRANSFER_ID, externalConfig);
        }
    };
    OccConfigLoaderService.prototype.getConfigChunks = function (externalConfig) {
        var chunks = [this.converter.toSiteContextConfig(externalConfig)];
        if (this.shouldReturnI18nChunk()) {
            chunks.push(this.converter.toI18nConfig(externalConfig));
        }
        return chunks;
    };
    OccConfigLoaderService.prototype.shouldReturnI18nChunk = function () {
        var fallbackLangExists = typeof (this.config &&
            this.config.i18n &&
            this.config.i18n.fallbackLang) !== 'undefined';
        if (fallbackLangExists && isDevMode()) {
            console.warn("There is an already provided static config for 'i18n.fallbackLang', so the value from OCC loaded config is ignored.");
        }
        return !fallbackLangExists;
    };
    OccConfigLoaderService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [Config,] }] },
        { type: OccSitesConfigLoader },
        { type: OccLoadedConfigConverter },
        { type: TransferState, decorators: [{ type: Optional }] },
        { type: String, decorators: [{ type: Optional }, { type: Inject, args: [SERVER_REQUEST_URL,] }] }
    ]; };
    OccConfigLoaderService.ɵprov = i0.ɵɵdefineInjectable({ factory: function OccConfigLoaderService_Factory() { return new OccConfigLoaderService(i0.ɵɵinject(i0.PLATFORM_ID), i0.ɵɵinject(i1.DOCUMENT), i0.ɵɵinject(i2.Config), i0.ɵɵinject(i3.OccSitesConfigLoader), i0.ɵɵinject(i4.OccLoadedConfigConverter), i0.ɵɵinject(i5.TransferState, 8), i0.ɵɵinject(i6.SERVER_REQUEST_URL, 8)); }, token: OccConfigLoaderService, providedIn: "root" });
    OccConfigLoaderService = __decorate([
        Injectable({ providedIn: 'root' }),
        __param(0, Inject(PLATFORM_ID)),
        __param(1, Inject(DOCUMENT)),
        __param(2, Inject(Config)),
        __param(5, Optional()),
        __param(6, Optional()),
        __param(6, Inject(SERVER_REQUEST_URL))
    ], OccConfigLoaderService);
    return OccConfigLoaderService;
}());
export { OccConfigLoaderService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNvbmZpZy1sb2FkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2MvY29uZmlnLWxvYWRlci9vY2MtY29uZmlnLWxvYWRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixFQUFFLGdCQUFnQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEYsT0FBTyxFQUNMLE1BQU0sRUFDTixVQUFVLEVBQ1YsU0FBUyxFQUNULFFBQVEsRUFDUixXQUFXLEdBQ1osTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUNMLFlBQVksRUFDWixRQUFRLEVBQ1IsYUFBYSxHQUNkLE1BQU0sMkJBQTJCLENBQUM7QUFDbkMsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFHMUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFN0QsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDekUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7Ozs7Ozs7O0FBRWpFLE1BQU0sQ0FBQyxJQUFNLDJCQUEyQixHQUFxQixZQUFZLENBRXZFLG9CQUFvQixDQUFDLENBQUM7QUFHeEI7SUFDRSxnQ0FDaUMsUUFBYSxFQUNoQixRQUFhLEVBQ2YsTUFBVyxFQUMzQixpQkFBdUMsRUFDdkMsU0FBbUMsRUFDdkIsYUFBNEIsRUFJeEMsZ0JBQXlCO1FBVEosYUFBUSxHQUFSLFFBQVEsQ0FBSztRQUNoQixhQUFR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LENBQUM7SUFFTyxzREFBcUIsR0FBN0I7UUFDRSxJQUFNLGtCQUFrQixHQUN0QixPQUFPLENBQ0wsSUFBSSxDQUFDLE1BQU07WUFDWCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUk7WUFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUM5QixLQUFLLFdBQVcsQ0FBQztRQUNwQixJQUFJLGtCQUFrQixJQUFJLFNBQVMsRUFBRSxFQUFFO1lBQ3JDLE9BQU8sQ0FBQyxJQUFJLENBQ1YscUhBQXFILENBQ3RILENBQUM7U0FDSDtRQUNELE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQztJQUM3QixDQUFDOztnREFqSEUsTUFBTSxTQUFDLFdBQVc7Z0RBQ2xCLE1BQU0sU0FBQyxRQUFRO2dEQUNmLE1BQU0sU0FBQyxNQUFNO2dCQUNlLG9CQUFvQjtnQkFDNUIsd0JBQXdCO2dCQUNSLGFBQWEsdUJBQWpELFFBQVE7NkNBRVIsUUFBUSxZQUNSLE1BQU0sU0FBQyxrQkFBa0I7OztJQVZqQixzQkFBc0I7UUFEbEMsVUFBVSxDQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxDQUFDO1FBRzlCLFdBQUEsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBQ25CLFdBQUEsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ2hCLFdBQUEsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBR2QsV0FBQSxRQUFRLEVBQUUsQ0FBQTtRQUVWLFdBQUEsUUFBUSxFQUFFLENBQUE7UUFDVixXQUFBLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBO09BVmxCLHNCQUFzQixDQW9IbEM7aUNBakpEO0NBaUpDLEFBcEhELElBb0hDO1NBcEhZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERPQ1VNRU5ULCBpc1BsYXRmb3JtQnJvd3NlciwgaXNQbGF0Zm9ybVNlcnZlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBJbmplY3QsXG4gIEluamVjdGFibGUsXG4gIGlzRGV2TW9kZSxcbiAgT3B0aW9uYWwsXG4gIFBMQVRGT1JNX0lELFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIG1ha2VTdGF0ZUtleSxcbiAgU3RhdGVLZXksXG4gIFRyYW5zZmVyU3RhdGUsXG59IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnL2NvbmZpZy5tb2R1bGUnO1xuaW1wb3J0IHsgZGVlcE1lcmdlIH0gZnJvbSAnLi4vLi4vY29uZmlnL3V0aWxzL2RlZXAtbWVyZ2UnO1xuaW1wb3J0IHsgSTE4bkNvbmZpZyB9IGZyb20gJy4uLy4uL2kxOG4vY29uZmlnL2kxOG4tY29uZmlnJztcbmltcG9ydCB7IFNpdGVDb250ZXh0Q29uZmlnIH0gZnJvbSAnLi4vLi4vc2l0ZS1jb250ZXh0L2NvbmZpZy9zaXRlLWNvbnRleHQtY29uZmlnJztcbmltcG9ydCB7IFNFUlZFUl9SRVFVRVNUX1VSTCB9IGZyb20gJy4uLy4uL3Nzci9zc3IucHJvdmlkZXJzJztcbmltcG9ydCB7IE9jY0xvYWRlZENvbmZpZyB9IGZyb20gJy4vb2NjLWxvYWRlZC1jb25maWcnO1xuaW1wb3J0IHsgT2NjTG9hZGVkQ29uZmlnQ29udmVydGVyIH0gZnJvbSAnLi9vY2MtbG9hZGVkLWNvbmZpZy1jb252ZXJ0ZXInO1xuaW1wb3J0IHsgT2NjU2l0ZXNDb25maWdMb2FkZXIgfSBmcm9tICcuL29jYy1zaXRlcy1jb25maWctbG9hZGVyJztcblxuZXhwb3J0IGNvbnN0IEVYVEVSTkFMX0NPTkZJR19UUkFOU0ZFUl9JRDogU3RhdGVLZXk8c3RyaW5nPiA9IG1ha2VTdGF0ZUtleTxcbiAgc3RyaW5nXG4+KCdjeC1leHRlcm5hbC1jb25maWcnKTtcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBPY2NDb25maWdMb2FkZXJTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChQTEFURk9STV9JRCkgcHJvdGVjdGVkIHBsYXRmb3JtOiBhbnksXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJvdGVjdGVkIGRvY3VtZW50OiBhbnksXG4gICAgQEluamVjdChDb25maWcpIHByb3RlY3RlZCBjb25maWc6IGFueSxcbiAgICBwcm90ZWN0ZWQgc2l0ZXNDb25maWdMb2FkZXI6IE9jY1NpdGVzQ29uZmlnTG9hZGVyLFxuICAgIHByb3RlY3RlZCBjb252ZXJ0ZXI6IE9jY0xvYWRlZENvbmZpZ0NvbnZlcnRlcixcbiAgICBAT3B0aW9uYWwoKSBwcm90ZWN0ZWQgdHJhbnNmZXJTdGF0ZTogVHJhbnNmZXJTdGF0ZSxcblxuICAgIEBPcHRpb25hbCgpXG4gICAgQEluamVjdChTRVJWRVJfUkVRVUVTVF9VUkwpXG4gICAgcHJvdGVjdGVkIHNlcnZlclJlcXVlc3RVcmw/OiBzdHJpbmdcbiAgKSB7fVxuXG4gIHByaXZhdGUgZ2V0IGN1cnJlbnRVcmwoKTogc3RyaW5nIHtcbiAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybSkpIHtcbiAgICAgIHJldHVybiB0aGlzLmRvY3VtZW50LmxvY2F0aW9uLmhyZWY7XG4gICAgfVxuICAgIGlmICh0aGlzLnNlcnZlclJlcXVlc3RVcmwpIHtcbiAgICAgIHJldHVybiB0aGlzLnNlcnZlclJlcXVlc3RVcmw7XG4gICAgfVxuICAgIGlmIChpc0Rldk1vZGUoKSkge1xuICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgYFBsZWFzZSBwcm92aWRlIHRva2VuICdTRVJWRVJfUkVRVUVTVF9VUkwnIHdpdGggdGhlIHJlcXVlc3RlZCBVUkwgZm9yIFNTUmBcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIHRoZSBTcGFydGFjdXMgY29uZmlnIGFzeW5jaHJvbm91c2x5IGJhc2luZyBvbiB0aGUgZXh0ZXJuYWwgY29uZmlnXG4gICAqL1xuICBsb2FkQ29uZmlnKCk6IFByb21pc2U8STE4bkNvbmZpZyB8IFNpdGVDb250ZXh0Q29uZmlnPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KClcbiAgICAgIC5waXBlKFxuICAgICAgICB0YXAoKGV4dGVybmFsQ29uZmlnKSA9PiB0aGlzLnRyYW5zZmVyKGV4dGVybmFsQ29uZmlnKSksXG4gICAgICAgIG1hcCgoZXh0ZXJuYWxDb25maWcpID0+XG4gICAgICAgICAgZGVlcE1lcmdlKHt9LCAuLi50aGlzLmdldENvbmZpZ0NodW5rcyhleHRlcm5hbENvbmZpZykpXG4gICAgICAgIClcbiAgICAgIClcbiAgICAgIC50b1Byb21pc2UoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBleHRlcm5hbCBjb25maWdcbiAgICovXG4gIHByb3RlY3RlZCBnZXQoKTogT2JzZXJ2YWJsZTxPY2NMb2FkZWRDb25maWc+IHtcbiAgICBjb25zdCByZWh5ZHJhdGVkRXh0ZXJuYWxDb25maWcgPSB0aGlzLnJlaHlkcmF0ZSgpO1xuXG4gICAgcmV0dXJuIHJlaHlkcmF0ZWRFeHRlcm5hbENvbmZpZ1xuICAgICAgPyBvZihyZWh5ZHJhdGVkRXh0ZXJuYWxDb25maWcpXG4gICAgICA6IHRoaXMubG9hZCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIExvYWRzIHRoZSBleHRlcm5hbCBjb25maWcgZnJvbSBiYWNrZW5kXG4gICAqL1xuICBwcm90ZWN0ZWQgbG9hZCgpOiBPYnNlcnZhYmxlPE9jY0xvYWRlZENvbmZpZz4ge1xuICAgIHJldHVybiB0aGlzLnNpdGVzQ29uZmlnTG9hZGVyXG4gICAgICAubG9hZCgpXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKChiYXNlU2l0ZXMpID0+XG4gICAgICAgICAgdGhpcy5jb252ZXJ0ZXIuZnJvbU9jY0Jhc2VTaXRlcyhiYXNlU2l0ZXMsIHRoaXMuY3VycmVudFVybClcbiAgICAgICAgKVxuICAgICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmllcyB0byByZWh5ZHJhdGUgZXh0ZXJuYWwgY29uZmlnIGluIHRoZSBicm93c2VyIGZyb20gU1NSXG4gICAqL1xuICBwcm90ZWN0ZWQgcmVoeWRyYXRlKCk6IE9jY0xvYWRlZENvbmZpZyB7XG4gICAgaWYgKHRoaXMudHJhbnNmZXJTdGF0ZSAmJiBpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtKSkge1xuICAgICAgcmV0dXJuIHRoaXMudHJhbnNmZXJTdGF0ZS5nZXQoRVhURVJOQUxfQ09ORklHX1RSQU5TRkVSX0lELCB1bmRlZmluZWQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFuc2ZlcnMgdGhlIGdpdmVuIGV4dGVybmFsIGNvbmZpZyBpbiBTU1IgdG8gdGhlIGJyb3dzZXJcbiAgICpcbiAgICogQHBhcmFtIGV4dGVybmFsQ29uZmlnXG4gICAqL1xuICBwcm90ZWN0ZWQgdHJhbnNmZXIoZXh0ZXJuYWxDb25maWc6IE9jY0xvYWRlZENvbmZpZykge1xuICAgIGlmIChcbiAgICAgIHRoaXMudHJhbnNmZXJTdGF0ZSAmJlxuICAgICAgaXNQbGF0Zm9ybVNlcnZlcih0aGlzLnBsYXRmb3JtKSAmJlxuICAgICAgZXh0ZXJuYWxDb25maWdcbiAgICApIHtcbiAgICAgIHRoaXMudHJhbnNmZXJTdGF0ZS5zZXQoRVhURVJOQUxfQ09ORklHX1RSQU5TRkVSX0lELCBleHRlcm5hbENvbmZpZyk7XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIGdldENvbmZpZ0NodW5rcyhcbiAgICBleHRlcm5hbENvbmZpZzogT2NjTG9hZGVkQ29uZmlnXG4gICk6IChJMThuQ29uZmlnIHwgU2l0ZUNvbnRleHRDb25maWcpW10ge1xuICAgIGNvbnN0IGNodW5rczogYW55W10gPSBbdGhpcy5jb252ZXJ0ZXIudG9TaXRlQ29udGV4dENvbmZpZyhleHRlcm5hbENvbmZpZyldO1xuXG4gICAgaWYgKHRoaXMuc2hvdWxkUmV0dXJuSTE4bkNodW5rKCkpIHtcbiAgICAgIGNodW5rcy5wdXNoKHRoaXMuY29udmVydGVyLnRvSTE4bkNvbmZpZyhleHRlcm5hbENvbmZpZykpO1xuICAgIH1cblxuICAgIHJldHVybiBjaHVua3M7XG4gIH1cblxuICBwcml2YXRlIHNob3VsZFJldHVybkkxOG5DaHVuaygpOiBib29sZWFuIHtcbiAgICBjb25zdCBmYWxsYmFja0xhbmdFeGlzdHMgPVxuICAgICAgdHlwZW9mIChcbiAgICAgICAgdGhpcy5jb25maWcgJiZcbiAgICAgICAgdGhpcy5jb25maWcuaTE4biAmJlxuICAgICAgICB0aGlzLmNvbmZpZy5pMThuLmZhbGxiYWNrTGFuZ1xuICAgICAgKSAhPT0gJ3VuZGVmaW5lZCc7XG4gICAgaWYgKGZhbGxiYWNrTGFuZ0V4aXN0cyAmJiBpc0Rldk1vZGUoKSkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgVGhlcmUgaXMgYW4gYWxyZWFkeSBwcm92aWRlZCBzdGF0aWMgY29uZmlnIGZvciAnaTE4bi5mYWxsYmFja0xhbmcnLCBzbyB0aGUgdmFsdWUgZnJvbSBPQ0MgbG9hZGVkIGNvbmZpZyBpcyBpZ25vcmVkLmBcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiAhZmFsbGJhY2tMYW5nRXhpc3RzO1xuICB9XG59XG4iXX0=
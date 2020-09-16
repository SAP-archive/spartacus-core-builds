import { DOCUMENT, isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Inject, Injectable, isDevMode, Optional, PLATFORM_ID, } from '@angular/core';
import { makeStateKey, TransferState, } from '@angular/platform-browser';
import { of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { deepMerge } from '../../config/utils/deep-merge';
import { SERVER_REQUEST_URL } from '../../ssr/ssr.providers';
import { OccLoadedConfigConverter } from './occ-loaded-config-converter';
import { OccSitesConfigLoader } from './occ-sites-config-loader';
import { Config } from '../../config/config-tokens';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../config/config-tokens";
import * as i3 from "./occ-sites-config-loader";
import * as i4 from "./occ-loaded-config-converter";
import * as i5 from "@angular/platform-browser";
import * as i6 from "../../ssr/ssr.providers";
export const EXTERNAL_CONFIG_TRANSFER_ID = makeStateKey('cx-external-config');
export class OccConfigLoaderService {
    constructor(platform, document, config, sitesConfigLoader, converter, transferState, serverRequestUrl) {
        this.platform = platform;
        this.document = document;
        this.config = config;
        this.sitesConfigLoader = sitesConfigLoader;
        this.converter = converter;
        this.transferState = transferState;
        this.serverRequestUrl = serverRequestUrl;
    }
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
     */
    loadConfig() {
        return this.get()
            .pipe(tap((externalConfig) => this.transfer(externalConfig)), map((externalConfig) => deepMerge({}, ...this.getConfigChunks(externalConfig))))
            .toPromise();
    }
    /**
     * Returns the external config
     */
    get() {
        const rehydratedExternalConfig = this.rehydrate();
        return rehydratedExternalConfig
            ? of(rehydratedExternalConfig)
            : this.load();
    }
    /**
     * Loads the external config from backend
     */
    load() {
        return this.sitesConfigLoader
            .load()
            .pipe(map((baseSites) => this.converter.fromOccBaseSites(baseSites, this.currentUrl)));
    }
    /**
     * Tries to rehydrate external config in the browser from SSR
     */
    rehydrate() {
        if (this.transferState && isPlatformBrowser(this.platform)) {
            return this.transferState.get(EXTERNAL_CONFIG_TRANSFER_ID, undefined);
        }
    }
    /**
     * Transfers the given external config in SSR to the browser
     *
     * @param externalConfig
     */
    transfer(externalConfig) {
        if (this.transferState &&
            isPlatformServer(this.platform) &&
            externalConfig) {
            this.transferState.set(EXTERNAL_CONFIG_TRANSFER_ID, externalConfig);
        }
    }
    getConfigChunks(externalConfig) {
        const chunks = [this.converter.toSiteContextConfig(externalConfig)];
        if (this.shouldReturnI18nChunk()) {
            chunks.push(this.converter.toI18nConfig(externalConfig));
        }
        return chunks;
    }
    shouldReturnI18nChunk() {
        const fallbackLangExists = typeof (this.config &&
            this.config.i18n &&
            this.config.i18n.fallbackLang) !== 'undefined';
        if (fallbackLangExists && isDevMode()) {
            console.warn(`There is an already provided static config for 'i18n.fallbackLang', so the value from OCC loaded config is ignored.`);
        }
        return !fallbackLangExists;
    }
}
OccConfigLoaderService.ɵprov = i0.ɵɵdefineInjectable({ factory: function OccConfigLoaderService_Factory() { return new OccConfigLoaderService(i0.ɵɵinject(i0.PLATFORM_ID), i0.ɵɵinject(i1.DOCUMENT), i0.ɵɵinject(i2.Config), i0.ɵɵinject(i3.OccSitesConfigLoader), i0.ɵɵinject(i4.OccLoadedConfigConverter), i0.ɵɵinject(i5.TransferState, 8), i0.ɵɵinject(i6.SERVER_REQUEST_URL, 8)); }, token: OccConfigLoaderService, providedIn: "root" });
OccConfigLoaderService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
OccConfigLoaderService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [Config,] }] },
    { type: OccSitesConfigLoader },
    { type: OccLoadedConfigConverter },
    { type: TransferState, decorators: [{ type: Optional }] },
    { type: String, decorators: [{ type: Optional }, { type: Inject, args: [SERVER_REQUEST_URL,] }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNvbmZpZy1sb2FkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL29jYy9jb25maWctbG9hZGVyL29jYy1jb25maWctbG9hZGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2hGLE9BQU8sRUFDTCxNQUFNLEVBQ04sVUFBVSxFQUNWLFNBQVMsRUFDVCxRQUFRLEVBQ1IsV0FBVyxHQUNaLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFDTCxZQUFZLEVBRVosYUFBYSxHQUNkLE1BQU0sMkJBQTJCLENBQUM7QUFDbkMsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUcxRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUU3RCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7Ozs7Ozs7O0FBRXBELE1BQU0sQ0FBQyxNQUFNLDJCQUEyQixHQUFxQixZQUFZLENBRXZFLG9CQUFvQixDQUFDLENBQUM7QUFHeEIsTUFBTSxPQUFPLHNCQUFzQjtJQUNqQyxZQUNpQyxRQUFhLEVBQ2hCLFFBQWEsRUFDZixNQUFXLEVBQzNCLGlCQUF1QyxFQUN2QyxTQUFtQyxFQUN2QixhQUE0QixFQUl4QyxnQkFBeUI7UUFUSixhQUFRLEdBQVIsUUFB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LElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSTtZQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQzlCLEtBQUssV0FBVyxDQUFDO1FBQ3BCLElBQUksa0JBQWtCLElBQUksU0FBUyxFQUFFLEVBQUU7WUFDckMsT0FBTyxDQUFDLElBQUksQ0FDVixxSEFBcUgsQ0FDdEgsQ0FBQztTQUNIO1FBQ0QsT0FBTyxDQUFDLGtCQUFrQixDQUFDO0lBQzdCLENBQUM7Ozs7WUFwSEYsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OzRDQUc3QixNQUFNLFNBQUMsV0FBVzs0Q0FDbEIsTUFBTSxTQUFDLFFBQVE7NENBQ2YsTUFBTSxTQUFDLE1BQU07WUFaVCxvQkFBb0I7WUFEcEIsd0JBQXdCO1lBVC9CLGFBQWEsdUJBeUJWLFFBQVE7eUNBRVIsUUFBUSxZQUNSLE1BQU0sU0FBQyxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBET0NVTUVOVCwgaXNQbGF0Zm9ybUJyb3dzZXIsIGlzUGxhdGZvcm1TZXJ2ZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgSW5qZWN0LFxuICBJbmplY3RhYmxlLFxuICBpc0Rldk1vZGUsXG4gIE9wdGlvbmFsLFxuICBQTEFURk9STV9JRCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBtYWtlU3RhdGVLZXksXG4gIFN0YXRlS2V5LFxuICBUcmFuc2ZlclN0YXRlLFxufSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IGRlZXBNZXJnZSB9IGZyb20gJy4uLy4uL2NvbmZpZy91dGlscy9kZWVwLW1lcmdlJztcbmltcG9ydCB7IEkxOG5Db25maWcgfSBmcm9tICcuLi8uLi9pMThuL2NvbmZpZy9pMThuLWNvbmZpZyc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dENvbmZpZyB9IGZyb20gJy4uLy4uL3NpdGUtY29udGV4dC9jb25maWcvc2l0ZS1jb250ZXh0LWNvbmZpZyc7XG5pbXBvcnQgeyBTRVJWRVJfUkVRVUVTVF9VUkwgfSBmcm9tICcuLi8uLi9zc3Ivc3NyLnByb3ZpZGVycyc7XG5pbXBvcnQgeyBPY2NMb2FkZWRDb25maWcgfSBmcm9tICcuL29jYy1sb2FkZWQtY29uZmlnJztcbmltcG9ydCB7IE9jY0xvYWRlZENvbmZpZ0NvbnZlcnRlciB9IGZyb20gJy4vb2NjLWxvYWRlZC1jb25maWctY29udmVydGVyJztcbmltcG9ydCB7IE9jY1NpdGVzQ29uZmlnTG9hZGVyIH0gZnJvbSAnLi9vY2Mtc2l0ZXMtY29uZmlnLWxvYWRlcic7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcvY29uZmlnLXRva2Vucyc7XG5cbmV4cG9ydCBjb25zdCBFWFRFUk5BTF9DT05GSUdfVFJBTlNGRVJfSUQ6IFN0YXRlS2V5PHN0cmluZz4gPSBtYWtlU3RhdGVLZXk8XG4gIHN0cmluZ1xuPignY3gtZXh0ZXJuYWwtY29uZmlnJyk7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgT2NjQ29uZmlnTG9hZGVyU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHByb3RlY3RlZCBwbGF0Zm9ybTogYW55LFxuICAgIEBJbmplY3QoRE9DVU1FTlQpIHByb3RlY3RlZCBkb2N1bWVudDogYW55LFxuICAgIEBJbmplY3QoQ29uZmlnKSBwcm90ZWN0ZWQgY29uZmlnOiBhbnksXG4gICAgcHJvdGVjdGVkIHNpdGVzQ29uZmlnTG9hZGVyOiBPY2NTaXRlc0NvbmZpZ0xvYWRlcixcbiAgICBwcm90ZWN0ZWQgY29udmVydGVyOiBPY2NMb2FkZWRDb25maWdDb252ZXJ0ZXIsXG4gICAgQE9wdGlvbmFsKCkgcHJvdGVjdGVkIHRyYW5zZmVyU3RhdGU6IFRyYW5zZmVyU3RhdGUsXG5cbiAgICBAT3B0aW9uYWwoKVxuICAgIEBJbmplY3QoU0VSVkVSX1JFUVVFU1RfVVJMKVxuICAgIHByb3RlY3RlZCBzZXJ2ZXJSZXF1ZXN0VXJsPzogc3RyaW5nXG4gICkge31cblxuICBwcml2YXRlIGdldCBjdXJyZW50VXJsKCk6IHN0cmluZyB7XG4gICAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm0pKSB7XG4gICAgICByZXR1cm4gdGhpcy5kb2N1bWVudC5sb2NhdGlvbi5ocmVmO1xuICAgIH1cbiAgICBpZiAodGhpcy5zZXJ2ZXJSZXF1ZXN0VXJsKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXJ2ZXJSZXF1ZXN0VXJsO1xuICAgIH1cbiAgICBpZiAoaXNEZXZNb2RlKCkpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgIGBQbGVhc2UgcHJvdmlkZSB0b2tlbiAnU0VSVkVSX1JFUVVFU1RfVVJMJyB3aXRoIHRoZSByZXF1ZXN0ZWQgVVJMIGZvciBTU1JgXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyB0aGUgU3BhcnRhY3VzIGNvbmZpZyBhc3luY2hyb25vdXNseSBiYXNpbmcgb24gdGhlIGV4dGVybmFsIGNvbmZpZ1xuICAgKi9cbiAgbG9hZENvbmZpZygpOiBQcm9taXNlPEkxOG5Db25maWcgfCBTaXRlQ29udGV4dENvbmZpZz4ge1xuICAgIHJldHVybiB0aGlzLmdldCgpXG4gICAgICAucGlwZShcbiAgICAgICAgdGFwKChleHRlcm5hbENvbmZpZykgPT4gdGhpcy50cmFuc2ZlcihleHRlcm5hbENvbmZpZykpLFxuICAgICAgICBtYXAoKGV4dGVybmFsQ29uZmlnKSA9PlxuICAgICAgICAgIGRlZXBNZXJnZSh7fSwgLi4udGhpcy5nZXRDb25maWdDaHVua3MoZXh0ZXJuYWxDb25maWcpKVxuICAgICAgICApXG4gICAgICApXG4gICAgICAudG9Qcm9taXNlKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgZXh0ZXJuYWwgY29uZmlnXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0KCk6IE9ic2VydmFibGU8T2NjTG9hZGVkQ29uZmlnPiB7XG4gICAgY29uc3QgcmVoeWRyYXRlZEV4dGVybmFsQ29uZmlnID0gdGhpcy5yZWh5ZHJhdGUoKTtcblxuICAgIHJldHVybiByZWh5ZHJhdGVkRXh0ZXJuYWxDb25maWdcbiAgICAgID8gb2YocmVoeWRyYXRlZEV4dGVybmFsQ29uZmlnKVxuICAgICAgOiB0aGlzLmxvYWQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2FkcyB0aGUgZXh0ZXJuYWwgY29uZmlnIGZyb20gYmFja2VuZFxuICAgKi9cbiAgcHJvdGVjdGVkIGxvYWQoKTogT2JzZXJ2YWJsZTxPY2NMb2FkZWRDb25maWc+IHtcbiAgICByZXR1cm4gdGhpcy5zaXRlc0NvbmZpZ0xvYWRlclxuICAgICAgLmxvYWQoKVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgoYmFzZVNpdGVzKSA9PlxuICAgICAgICAgIHRoaXMuY29udmVydGVyLmZyb21PY2NCYXNlU2l0ZXMoYmFzZVNpdGVzLCB0aGlzLmN1cnJlbnRVcmwpXG4gICAgICAgIClcbiAgICAgICk7XG4gIH1cblxuICAvKipcbiAgICogVHJpZXMgdG8gcmVoeWRyYXRlIGV4dGVybmFsIGNvbmZpZyBpbiB0aGUgYnJvd3NlciBmcm9tIFNTUlxuICAgKi9cbiAgcHJvdGVjdGVkIHJlaHlkcmF0ZSgpOiBPY2NMb2FkZWRDb25maWcge1xuICAgIGlmICh0aGlzLnRyYW5zZmVyU3RhdGUgJiYgaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybSkpIHtcbiAgICAgIHJldHVybiB0aGlzLnRyYW5zZmVyU3RhdGUuZ2V0KEVYVEVSTkFMX0NPTkZJR19UUkFOU0ZFUl9JRCwgdW5kZWZpbmVkKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVHJhbnNmZXJzIHRoZSBnaXZlbiBleHRlcm5hbCBjb25maWcgaW4gU1NSIHRvIHRoZSBicm93c2VyXG4gICAqXG4gICAqIEBwYXJhbSBleHRlcm5hbENvbmZpZ1xuICAgKi9cbiAgcHJvdGVjdGVkIHRyYW5zZmVyKGV4dGVybmFsQ29uZmlnOiBPY2NMb2FkZWRDb25maWcpIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLnRyYW5zZmVyU3RhdGUgJiZcbiAgICAgIGlzUGxhdGZvcm1TZXJ2ZXIodGhpcy5wbGF0Zm9ybSkgJiZcbiAgICAgIGV4dGVybmFsQ29uZmlnXG4gICAgKSB7XG4gICAgICB0aGlzLnRyYW5zZmVyU3RhdGUuc2V0KEVYVEVSTkFMX0NPTkZJR19UUkFOU0ZFUl9JRCwgZXh0ZXJuYWxDb25maWcpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRDb25maWdDaHVua3MoXG4gICAgZXh0ZXJuYWxDb25maWc6IE9jY0xvYWRlZENvbmZpZ1xuICApOiAoSTE4bkNvbmZpZyB8IFNpdGVDb250ZXh0Q29uZmlnKVtdIHtcbiAgICBjb25zdCBjaHVua3M6IGFueVtdID0gW3RoaXMuY29udmVydGVyLnRvU2l0ZUNvbnRleHRDb25maWcoZXh0ZXJuYWxDb25maWcpXTtcblxuICAgIGlmICh0aGlzLnNob3VsZFJldHVybkkxOG5DaHVuaygpKSB7XG4gICAgICBjaHVua3MucHVzaCh0aGlzLmNvbnZlcnRlci50b0kxOG5Db25maWcoZXh0ZXJuYWxDb25maWcpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2h1bmtzO1xuICB9XG5cbiAgcHJpdmF0ZSBzaG91bGRSZXR1cm5JMThuQ2h1bmsoKTogYm9vbGVhbiB7XG4gICAgY29uc3QgZmFsbGJhY2tMYW5nRXhpc3RzID1cbiAgICAgIHR5cGVvZiAoXG4gICAgICAgIHRoaXMuY29uZmlnICYmXG4gICAgICAgIHRoaXMuY29uZmlnLmkxOG4gJiZcbiAgICAgICAgdGhpcy5jb25maWcuaTE4bi5mYWxsYmFja0xhbmdcbiAgICAgICkgIT09ICd1bmRlZmluZWQnO1xuICAgIGlmIChmYWxsYmFja0xhbmdFeGlzdHMgJiYgaXNEZXZNb2RlKCkpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYFRoZXJlIGlzIGFuIGFscmVhZHkgcHJvdmlkZWQgc3RhdGljIGNvbmZpZyBmb3IgJ2kxOG4uZmFsbGJhY2tMYW5nJywgc28gdGhlIHZhbHVlIGZyb20gT0NDIGxvYWRlZCBjb25maWcgaXMgaWdub3JlZC5gXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gIWZhbGxiYWNrTGFuZ0V4aXN0cztcbiAgfVxufVxuIl19
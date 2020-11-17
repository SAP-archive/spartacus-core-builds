import { DOCUMENT, isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Inject, Injectable, isDevMode, Optional, PLATFORM_ID, } from '@angular/core';
import { makeStateKey, TransferState, } from '@angular/platform-browser';
import { of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { deepMerge } from '../../config/utils/deep-merge';
import { SERVER_REQUEST_URL } from '../../util/ssr.tokens';
import { OccLoadedConfigConverter } from './occ-loaded-config-converter';
import { OccSitesConfigLoader } from './occ-sites-config-loader';
import { Config } from '../../config/config-tokens';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../config/config-tokens";
import * as i3 from "./occ-sites-config-loader";
import * as i4 from "./occ-loaded-config-converter";
import * as i5 from "@angular/platform-browser";
import * as i6 from "../../util/ssr.tokens";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNvbmZpZy1sb2FkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL29jYy9jb25maWctbG9hZGVyL29jYy1jb25maWctbG9hZGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2hGLE9BQU8sRUFDTCxNQUFNLEVBQ04sVUFBVSxFQUNWLFNBQVMsRUFDVCxRQUFRLEVBQ1IsV0FBVyxHQUNaLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFDTCxZQUFZLEVBRVosYUFBYSxHQUNkLE1BQU0sMkJBQTJCLENBQUM7QUFDbkMsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUcxRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUUzRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7Ozs7Ozs7O0FBRXBELE1BQU0sQ0FBQyxNQUFNLDJCQUEyQixHQUFxQixZQUFZLENBRXZFLG9CQUFvQixDQUFDLENBQUM7QUFHeEIsTUFBTSxPQUFPLHNCQUFzQjtJQUNqQyxZQUNpQyxRQUFhLEVBQ2hCLFFBQWEsRUFDZixNQUFXLEVBQzNCLGlCQUF1QyxFQUN2QyxTQUFtQyxFQUN2QixhQUE0QixFQUl4QyxnQkFBeUI7UUFUSixhQUFRLEdBQVIsUUFBUSxDQUFLO1FBQ2hCLGFBQVEsR0FBUixRQUFRLENBQUs7UUFDZixXQUFNLEdBQU4sTUFBTSxDQUFLO1FBQzNCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBc0I7UUFDdkMsY0FBUyxHQUFULFNBQVMsQ0FBMEI7UUFDdkIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFJeEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFTO0lBQ2xDLENBQUM7SUFFSixJQUFZLFVBQVU7UUFDcEIsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDcEMsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7U0FDcEM7UUFDRCxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUN6QixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztTQUM5QjtRQUNELElBQUksU0FBUyxFQUFFLEVBQUU7WUFDZixPQUFPLENBQUMsS0FBSyxDQUNYLDBFQUEwRSxDQUMzRSxDQUFDO1NBQ0g7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUMsR0FBRyxFQUFFO2FBQ2QsSUFBSSxDQUNILEdBQUcsQ0FBQyxDQUFDLGNBQWMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxFQUN0RCxHQUFHLENBQUMsQ0FBQyxjQUFjLEVBQUUsRUFBRSxDQUNyQixTQUFTLENBQUMsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUN2RCxDQUNGO2FBQ0EsU0FBUyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVEOztPQUVHO0lBQ08sR0FBRztRQUNYLE1BQU0sd0JBQXdCLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBRWxELE9BQU8sd0JBQXdCO1lBQzdCLENBQUMsQ0FBQyxFQUFFLENBQUMsd0JBQXdCLENBQUM7WUFDOUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRUQ7O09BRUc7SUFDTyxJQUFJO1FBQ1osT0FBTyxJQUFJLENBQUMsaUJBQWlCO2FBQzFCLElBQUksRUFBRTthQUNOLElBQUksQ0FDSCxHQUFHLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUNoQixJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQzVELENBQ0YsQ0FBQztJQUNOLENBQUM7SUFFRDs7T0FFRztJQUNPLFNBQVM7UUFDakIsSUFBSSxJQUFJLENBQUMsYUFBYSxJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUMxRCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLDJCQUEyQixFQUFFLFNBQVMsQ0FBQyxDQUFDO1NBQ3ZFO0lBQ0gsQ0FBQztJQUVEOzs7O09BSUc7SUFDTyxRQUFRLENBQUMsY0FBK0I7UUFDaEQsSUFDRSxJQUFJLENBQUMsYUFBYTtZQUNsQixnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQy9CLGNBQWMsRUFDZDtZQUNBLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLDJCQUEyQixFQUFFLGNBQWMsQ0FBQyxDQUFDO1NBQ3JFO0lBQ0gsQ0FBQztJQUVTLGVBQWUsQ0FDdkIsY0FBK0I7UUFFL0IsTUFBTSxNQUFNLEdBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFtQixDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7UUFFM0UsSUFBSSxJQUFJLENBQUMscUJBQXFCLEVBQUUsRUFBRTtZQUNoQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7U0FDMUQ7UUFFRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRU8scUJBQXFCO1FBQzNCLE1BQU0sa0JBQWtCLEdBQ3RCLE9BQU8sQ0FDTCxJQUFJLENBQUMsTUFBTTtZQUNYLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSTtZQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQzlCLEtBQUssV0FBVyxDQUFDO1FBQ3BCLElBQUksa0JBQWtCLElBQUksU0FBUyxFQUFFLEVBQUU7WUFDckMsT0FBTyxDQUFDLElBQUksQ0FDVixxSEFBcUgsQ0FDdEgsQ0FBQztTQUNIO1FBQ0QsT0FBTyxDQUFDLGtCQUFrQixDQUFDO0lBQzdCLENBQUM7Ozs7WUFwSEYsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OzRDQUc3QixNQUFNLFNBQUMsV0FBVzs0Q0FDbEIsTUFBTSxTQUFDLFFBQVE7NENBQ2YsTUFBTSxTQUFDLE1BQU07WUFaVCxvQkFBb0I7WUFEcEIsd0JBQXdCO1lBVC9CLGFBQWEsdUJBeUJWLFFBQVE7eUNBRVIsUUFBUSxZQUNSLE1BQU0sU0FBQyxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBET0NVTUVOVCwgaXNQbGF0Zm9ybUJyb3dzZXIsIGlzUGxhdGZvcm1TZXJ2ZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgSW5qZWN0LFxuICBJbmplY3RhYmxlLFxuICBpc0Rldk1vZGUsXG4gIE9wdGlvbmFsLFxuICBQTEFURk9STV9JRCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBtYWtlU3RhdGVLZXksXG4gIFN0YXRlS2V5LFxuICBUcmFuc2ZlclN0YXRlLFxufSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IGRlZXBNZXJnZSB9IGZyb20gJy4uLy4uL2NvbmZpZy91dGlscy9kZWVwLW1lcmdlJztcbmltcG9ydCB7IEkxOG5Db25maWcgfSBmcm9tICcuLi8uLi9pMThuL2NvbmZpZy9pMThuLWNvbmZpZyc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dENvbmZpZyB9IGZyb20gJy4uLy4uL3NpdGUtY29udGV4dC9jb25maWcvc2l0ZS1jb250ZXh0LWNvbmZpZyc7XG5pbXBvcnQgeyBTRVJWRVJfUkVRVUVTVF9VUkwgfSBmcm9tICcuLi8uLi91dGlsL3Nzci50b2tlbnMnO1xuaW1wb3J0IHsgT2NjTG9hZGVkQ29uZmlnIH0gZnJvbSAnLi9vY2MtbG9hZGVkLWNvbmZpZyc7XG5pbXBvcnQgeyBPY2NMb2FkZWRDb25maWdDb252ZXJ0ZXIgfSBmcm9tICcuL29jYy1sb2FkZWQtY29uZmlnLWNvbnZlcnRlcic7XG5pbXBvcnQgeyBPY2NTaXRlc0NvbmZpZ0xvYWRlciB9IGZyb20gJy4vb2NjLXNpdGVzLWNvbmZpZy1sb2FkZXInO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnL2NvbmZpZy10b2tlbnMnO1xuXG5leHBvcnQgY29uc3QgRVhURVJOQUxfQ09ORklHX1RSQU5TRkVSX0lEOiBTdGF0ZUtleTxzdHJpbmc+ID0gbWFrZVN0YXRlS2V5PFxuICBzdHJpbmdcbj4oJ2N4LWV4dGVybmFsLWNvbmZpZycpO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIE9jY0NvbmZpZ0xvYWRlclNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcm90ZWN0ZWQgcGxhdGZvcm06IGFueSxcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcm90ZWN0ZWQgZG9jdW1lbnQ6IGFueSxcbiAgICBASW5qZWN0KENvbmZpZykgcHJvdGVjdGVkIGNvbmZpZzogYW55LFxuICAgIHByb3RlY3RlZCBzaXRlc0NvbmZpZ0xvYWRlcjogT2NjU2l0ZXNDb25maWdMb2FkZXIsXG4gICAgcHJvdGVjdGVkIGNvbnZlcnRlcjogT2NjTG9hZGVkQ29uZmlnQ29udmVydGVyLFxuICAgIEBPcHRpb25hbCgpIHByb3RlY3RlZCB0cmFuc2ZlclN0YXRlOiBUcmFuc2ZlclN0YXRlLFxuXG4gICAgQE9wdGlvbmFsKClcbiAgICBASW5qZWN0KFNFUlZFUl9SRVFVRVNUX1VSTClcbiAgICBwcm90ZWN0ZWQgc2VydmVyUmVxdWVzdFVybD86IHN0cmluZ1xuICApIHt9XG5cbiAgcHJpdmF0ZSBnZXQgY3VycmVudFVybCgpOiBzdHJpbmcge1xuICAgIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtKSkge1xuICAgICAgcmV0dXJuIHRoaXMuZG9jdW1lbnQubG9jYXRpb24uaHJlZjtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2VydmVyUmVxdWVzdFVybCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2VydmVyUmVxdWVzdFVybDtcbiAgICB9XG4gICAgaWYgKGlzRGV2TW9kZSgpKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICBgUGxlYXNlIHByb3ZpZGUgdG9rZW4gJ1NFUlZFUl9SRVFVRVNUX1VSTCcgd2l0aCB0aGUgcmVxdWVzdGVkIFVSTCBmb3IgU1NSYFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdGhlIFNwYXJ0YWN1cyBjb25maWcgYXN5bmNocm9ub3VzbHkgYmFzaW5nIG9uIHRoZSBleHRlcm5hbCBjb25maWdcbiAgICovXG4gIGxvYWRDb25maWcoKTogUHJvbWlzZTxJMThuQ29uZmlnIHwgU2l0ZUNvbnRleHRDb25maWc+IHtcbiAgICByZXR1cm4gdGhpcy5nZXQoKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRhcCgoZXh0ZXJuYWxDb25maWcpID0+IHRoaXMudHJhbnNmZXIoZXh0ZXJuYWxDb25maWcpKSxcbiAgICAgICAgbWFwKChleHRlcm5hbENvbmZpZykgPT5cbiAgICAgICAgICBkZWVwTWVyZ2Uoe30sIC4uLnRoaXMuZ2V0Q29uZmlnQ2h1bmtzKGV4dGVybmFsQ29uZmlnKSlcbiAgICAgICAgKVxuICAgICAgKVxuICAgICAgLnRvUHJvbWlzZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGV4dGVybmFsIGNvbmZpZ1xuICAgKi9cbiAgcHJvdGVjdGVkIGdldCgpOiBPYnNlcnZhYmxlPE9jY0xvYWRlZENvbmZpZz4ge1xuICAgIGNvbnN0IHJlaHlkcmF0ZWRFeHRlcm5hbENvbmZpZyA9IHRoaXMucmVoeWRyYXRlKCk7XG5cbiAgICByZXR1cm4gcmVoeWRyYXRlZEV4dGVybmFsQ29uZmlnXG4gICAgICA/IG9mKHJlaHlkcmF0ZWRFeHRlcm5hbENvbmZpZylcbiAgICAgIDogdGhpcy5sb2FkKCk7XG4gIH1cblxuICAvKipcbiAgICogTG9hZHMgdGhlIGV4dGVybmFsIGNvbmZpZyBmcm9tIGJhY2tlbmRcbiAgICovXG4gIHByb3RlY3RlZCBsb2FkKCk6IE9ic2VydmFibGU8T2NjTG9hZGVkQ29uZmlnPiB7XG4gICAgcmV0dXJuIHRoaXMuc2l0ZXNDb25maWdMb2FkZXJcbiAgICAgIC5sb2FkKClcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoKGJhc2VTaXRlcykgPT5cbiAgICAgICAgICB0aGlzLmNvbnZlcnRlci5mcm9tT2NjQmFzZVNpdGVzKGJhc2VTaXRlcywgdGhpcy5jdXJyZW50VXJsKVxuICAgICAgICApXG4gICAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyaWVzIHRvIHJlaHlkcmF0ZSBleHRlcm5hbCBjb25maWcgaW4gdGhlIGJyb3dzZXIgZnJvbSBTU1JcbiAgICovXG4gIHByb3RlY3RlZCByZWh5ZHJhdGUoKTogT2NjTG9hZGVkQ29uZmlnIHtcbiAgICBpZiAodGhpcy50cmFuc2ZlclN0YXRlICYmIGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm0pKSB7XG4gICAgICByZXR1cm4gdGhpcy50cmFuc2ZlclN0YXRlLmdldChFWFRFUk5BTF9DT05GSUdfVFJBTlNGRVJfSUQsIHVuZGVmaW5lZCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRyYW5zZmVycyB0aGUgZ2l2ZW4gZXh0ZXJuYWwgY29uZmlnIGluIFNTUiB0byB0aGUgYnJvd3NlclxuICAgKlxuICAgKiBAcGFyYW0gZXh0ZXJuYWxDb25maWdcbiAgICovXG4gIHByb3RlY3RlZCB0cmFuc2ZlcihleHRlcm5hbENvbmZpZzogT2NjTG9hZGVkQ29uZmlnKSB7XG4gICAgaWYgKFxuICAgICAgdGhpcy50cmFuc2ZlclN0YXRlICYmXG4gICAgICBpc1BsYXRmb3JtU2VydmVyKHRoaXMucGxhdGZvcm0pICYmXG4gICAgICBleHRlcm5hbENvbmZpZ1xuICAgICkge1xuICAgICAgdGhpcy50cmFuc2ZlclN0YXRlLnNldChFWFRFUk5BTF9DT05GSUdfVFJBTlNGRVJfSUQsIGV4dGVybmFsQ29uZmlnKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0Q29uZmlnQ2h1bmtzKFxuICAgIGV4dGVybmFsQ29uZmlnOiBPY2NMb2FkZWRDb25maWdcbiAgKTogKEkxOG5Db25maWcgfCBTaXRlQ29udGV4dENvbmZpZylbXSB7XG4gICAgY29uc3QgY2h1bmtzOiBhbnlbXSA9IFt0aGlzLmNvbnZlcnRlci50b1NpdGVDb250ZXh0Q29uZmlnKGV4dGVybmFsQ29uZmlnKV07XG5cbiAgICBpZiAodGhpcy5zaG91bGRSZXR1cm5JMThuQ2h1bmsoKSkge1xuICAgICAgY2h1bmtzLnB1c2godGhpcy5jb252ZXJ0ZXIudG9JMThuQ29uZmlnKGV4dGVybmFsQ29uZmlnKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNodW5rcztcbiAgfVxuXG4gIHByaXZhdGUgc2hvdWxkUmV0dXJuSTE4bkNodW5rKCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGZhbGxiYWNrTGFuZ0V4aXN0cyA9XG4gICAgICB0eXBlb2YgKFxuICAgICAgICB0aGlzLmNvbmZpZyAmJlxuICAgICAgICB0aGlzLmNvbmZpZy5pMThuICYmXG4gICAgICAgIHRoaXMuY29uZmlnLmkxOG4uZmFsbGJhY2tMYW5nXG4gICAgICApICE9PSAndW5kZWZpbmVkJztcbiAgICBpZiAoZmFsbGJhY2tMYW5nRXhpc3RzICYmIGlzRGV2TW9kZSgpKSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGBUaGVyZSBpcyBhbiBhbHJlYWR5IHByb3ZpZGVkIHN0YXRpYyBjb25maWcgZm9yICdpMThuLmZhbGxiYWNrTGFuZycsIHNvIHRoZSB2YWx1ZSBmcm9tIE9DQyBsb2FkZWQgY29uZmlnIGlzIGlnbm9yZWQuYFxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuICFmYWxsYmFja0xhbmdFeGlzdHM7XG4gIH1cbn1cbiJdfQ==
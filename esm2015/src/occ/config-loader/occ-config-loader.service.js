import { __decorate, __param } from "tslib";
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
export const EXTERNAL_CONFIG_TRANSFER_ID = makeStateKey('cx-external-config');
let OccConfigLoaderService = class OccConfigLoaderService {
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
            .pipe(tap(externalConfig => this.transfer(externalConfig)), map(externalConfig => deepMerge({}, ...this.getConfigChunks(externalConfig))))
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
            .pipe(map(baseSites => this.converter.fromOccBaseSites(baseSites, this.currentUrl)));
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
};
OccConfigLoaderService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [Config,] }] },
    { type: OccSitesConfigLoader },
    { type: OccLoadedConfigConverter },
    { type: TransferState, decorators: [{ type: Optional }] },
    { type: String, decorators: [{ type: Optional }, { type: Inject, args: [SERVER_REQUEST_URL,] }] }
];
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
export { OccConfigLoaderService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNvbmZpZy1sb2FkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2MvY29uZmlnLWxvYWRlci9vY2MtY29uZmlnLWxvYWRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixFQUFFLGdCQUFnQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEYsT0FBTyxFQUNMLE1BQU0sRUFDTixVQUFVLEVBQ1YsU0FBUyxFQUNULFFBQVEsRUFDUixXQUFXLEdBQ1osTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUNMLFlBQVksRUFDWixRQUFRLEVBQ1IsYUFBYSxHQUNkLE1BQU0sMkJBQTJCLENBQUM7QUFDbkMsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFHMUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFN0QsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDekUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7Ozs7Ozs7O0FBRWpFLE1BQU0sQ0FBQyxNQUFNLDJCQUEyQixHQUFxQixZQUFZLENBRXZFLG9CQUFvQixDQUFDLENBQUM7QUFHeEIsSUFBYSxzQkFBc0IsR0FBbkMsTUFBYSxzQkFBc0I7SUFDakMsWUFDaUMsUUFBYSxFQUNoQixRQUFhLEVBQ2YsTUFBVyxFQUMzQixpQkFBdUMsRUFDdkMsU0FBbUMsRUFDdkIsYUFBNEIsRUFJeEMsZ0JBQXlCO1FBVEosYUFBUSxHQUFSLFFBQVEsQ0FBSztRQUNoQixhQUFRLEdBQVIsUUFBUSxDQUFLO1FBQ2YsV0FBTSxHQUFOLE1BQU0sQ0FBSztRQUMzQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQXNCO1FBQ3ZDLGNBQVMsR0FBVCxTQUFTLENBQTBCO1FBQ3ZCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBSXhDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBUztJQUNsQyxDQUFDO0lBRUosSUFBWSxVQUFVO1FBQ3BCLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ3BDLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1NBQ3BDO1FBQ0QsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDekIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7U0FDOUI7UUFDRCxJQUFJLFNBQVMsRUFBRSxFQUFFO1lBQ2YsT0FBTyxDQUFDLEtBQUssQ0FDWCwwRUFBMEUsQ0FDM0UsQ0FBQztTQUNIO0lBQ0gsQ0FBQztJQUVEOztPQUVHO0lBQ0gsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDLEdBQUcsRUFBRTthQUNkLElBQUksQ0FDSCxHQUFHLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQ3BELEdBQUcsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUNuQixTQUFTLENBQUMsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUN2RCxDQUNGO2FBQ0EsU0FBUyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVEOztPQUVHO0lBQ08sR0FBRztRQUNYLE1BQU0sd0JBQXdCLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBRWxELE9BQU8sd0JBQXdCO1lBQzdCLENBQUMsQ0FBQyxFQUFFLENBQUMsd0JBQXdCLENBQUM7WUFDOUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRUQ7O09BRUc7SUFDTyxJQUFJO1FBQ1osT0FBTyxJQUFJLENBQUMsaUJBQWlCO2FBQzFCLElBQUksRUFBRTthQUNOLElBQUksQ0FDSCxHQUFHLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FDZCxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQzVELENBQ0YsQ0FBQztJQUNOLENBQUM7SUFFRDs7T0FFRztJQUNPLFNBQVM7UUFDakIsSUFBSSxJQUFJLENBQUMsYUFBYSxJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUMxRCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLDJCQUEyQixFQUFFLFNBQVMsQ0FBQyxDQUFDO1NBQ3ZFO0lBQ0gsQ0FBQztJQUVEOzs7O09BSUc7SUFDTyxRQUFRLENBQUMsY0FBK0I7UUFDaEQsSUFDRSxJQUFJLENBQUMsYUFBYTtZQUNsQixnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQy9CLGNBQWMsRUFDZDtZQUNBLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLDJCQUEyQixFQUFFLGNBQWMsQ0FBQyxDQUFDO1NBQ3JFO0lBQ0gsQ0FBQztJQUVTLGVBQWUsQ0FDdkIsY0FBK0I7UUFFL0IsTUFBTSxNQUFNLEdBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLG1CQUFtQixDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7UUFFM0UsSUFBSSxJQUFJLENBQUMscUJBQXFCLEVBQUUsRUFBRTtZQUNoQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7U0FDMUQ7UUFFRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRU8scUJBQXFCO1FBQzNCLE1BQU0sa0JBQWtCLEdBQ3RCLE9BQU8sQ0FDTCxJQUFJLENBQUMsTUFBTTtZQUNYLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSTtZQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQzlCLEtBQUssV0FBVyxDQUFDO1FBQ3BCLElBQUksa0JBQWtCLElBQUksU0FBUyxFQUFFLEVBQUU7WUFDckMsT0FBTyxDQUFDLElBQUksQ0FDVixxSEFBcUgsQ0FDdEgsQ0FBQztTQUNIO1FBQ0QsT0FBTyxDQUFDLGtCQUFrQixDQUFDO0lBQzdCLENBQUM7Q0FDRixDQUFBOzs0Q0FsSEksTUFBTSxTQUFDLFdBQVc7NENBQ2xCLE1BQU0sU0FBQyxRQUFROzRDQUNmLE1BQU0sU0FBQyxNQUFNO1lBQ2Usb0JBQW9CO1lBQzVCLHdCQUF3QjtZQUNSLGFBQWEsdUJBQWpELFFBQVE7eUNBRVIsUUFBUSxZQUNSLE1BQU0sU0FBQyxrQkFBa0I7OztBQVZqQixzQkFBc0I7SUFEbEMsVUFBVSxDQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxDQUFDO0lBRzlCLFdBQUEsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFBO0lBQ25CLFdBQUEsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQ2hCLFdBQUEsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBR2QsV0FBQSxRQUFRLEVBQUUsQ0FBQTtJQUVWLFdBQUEsUUFBUSxFQUFFLENBQUE7SUFDVixXQUFBLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBO0dBVmxCLHNCQUFzQixDQW9IbEM7U0FwSFksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQsIGlzUGxhdGZvcm1Ccm93c2VyLCBpc1BsYXRmb3JtU2VydmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIEluamVjdCxcbiAgSW5qZWN0YWJsZSxcbiAgaXNEZXZNb2RlLFxuICBPcHRpb25hbCxcbiAgUExBVEZPUk1fSUQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgbWFrZVN0YXRlS2V5LFxuICBTdGF0ZUtleSxcbiAgVHJhbnNmZXJTdGF0ZSxcbn0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcvY29uZmlnLm1vZHVsZSc7XG5pbXBvcnQgeyBkZWVwTWVyZ2UgfSBmcm9tICcuLi8uLi9jb25maWcvdXRpbHMvZGVlcC1tZXJnZSc7XG5pbXBvcnQgeyBJMThuQ29uZmlnIH0gZnJvbSAnLi4vLi4vaTE4bi9jb25maWcvaTE4bi1jb25maWcnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRDb25maWcgfSBmcm9tICcuLi8uLi9zaXRlLWNvbnRleHQvY29uZmlnL3NpdGUtY29udGV4dC1jb25maWcnO1xuaW1wb3J0IHsgU0VSVkVSX1JFUVVFU1RfVVJMIH0gZnJvbSAnLi4vLi4vc3NyL3Nzci5wcm92aWRlcnMnO1xuaW1wb3J0IHsgT2NjTG9hZGVkQ29uZmlnIH0gZnJvbSAnLi9vY2MtbG9hZGVkLWNvbmZpZyc7XG5pbXBvcnQgeyBPY2NMb2FkZWRDb25maWdDb252ZXJ0ZXIgfSBmcm9tICcuL29jYy1sb2FkZWQtY29uZmlnLWNvbnZlcnRlcic7XG5pbXBvcnQgeyBPY2NTaXRlc0NvbmZpZ0xvYWRlciB9IGZyb20gJy4vb2NjLXNpdGVzLWNvbmZpZy1sb2FkZXInO1xuXG5leHBvcnQgY29uc3QgRVhURVJOQUxfQ09ORklHX1RSQU5TRkVSX0lEOiBTdGF0ZUtleTxzdHJpbmc+ID0gbWFrZVN0YXRlS2V5PFxuICBzdHJpbmdcbj4oJ2N4LWV4dGVybmFsLWNvbmZpZycpO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIE9jY0NvbmZpZ0xvYWRlclNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcm90ZWN0ZWQgcGxhdGZvcm06IGFueSxcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcm90ZWN0ZWQgZG9jdW1lbnQ6IGFueSxcbiAgICBASW5qZWN0KENvbmZpZykgcHJvdGVjdGVkIGNvbmZpZzogYW55LFxuICAgIHByb3RlY3RlZCBzaXRlc0NvbmZpZ0xvYWRlcjogT2NjU2l0ZXNDb25maWdMb2FkZXIsXG4gICAgcHJvdGVjdGVkIGNvbnZlcnRlcjogT2NjTG9hZGVkQ29uZmlnQ29udmVydGVyLFxuICAgIEBPcHRpb25hbCgpIHByb3RlY3RlZCB0cmFuc2ZlclN0YXRlOiBUcmFuc2ZlclN0YXRlLFxuXG4gICAgQE9wdGlvbmFsKClcbiAgICBASW5qZWN0KFNFUlZFUl9SRVFVRVNUX1VSTClcbiAgICBwcm90ZWN0ZWQgc2VydmVyUmVxdWVzdFVybD86IHN0cmluZ1xuICApIHt9XG5cbiAgcHJpdmF0ZSBnZXQgY3VycmVudFVybCgpOiBzdHJpbmcge1xuICAgIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtKSkge1xuICAgICAgcmV0dXJuIHRoaXMuZG9jdW1lbnQubG9jYXRpb24uaHJlZjtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2VydmVyUmVxdWVzdFVybCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2VydmVyUmVxdWVzdFVybDtcbiAgICB9XG4gICAgaWYgKGlzRGV2TW9kZSgpKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICBgUGxlYXNlIHByb3ZpZGUgdG9rZW4gJ1NFUlZFUl9SRVFVRVNUX1VSTCcgd2l0aCB0aGUgcmVxdWVzdGVkIFVSTCBmb3IgU1NSYFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdGhlIFNwYXJ0YWN1cyBjb25maWcgYXN5bmNocm9ub3VzbHkgYmFzaW5nIG9uIHRoZSBleHRlcm5hbCBjb25maWdcbiAgICovXG4gIGxvYWRDb25maWcoKTogUHJvbWlzZTxJMThuQ29uZmlnIHwgU2l0ZUNvbnRleHRDb25maWc+IHtcbiAgICByZXR1cm4gdGhpcy5nZXQoKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRhcChleHRlcm5hbENvbmZpZyA9PiB0aGlzLnRyYW5zZmVyKGV4dGVybmFsQ29uZmlnKSksXG4gICAgICAgIG1hcChleHRlcm5hbENvbmZpZyA9PlxuICAgICAgICAgIGRlZXBNZXJnZSh7fSwgLi4udGhpcy5nZXRDb25maWdDaHVua3MoZXh0ZXJuYWxDb25maWcpKVxuICAgICAgICApXG4gICAgICApXG4gICAgICAudG9Qcm9taXNlKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgZXh0ZXJuYWwgY29uZmlnXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0KCk6IE9ic2VydmFibGU8T2NjTG9hZGVkQ29uZmlnPiB7XG4gICAgY29uc3QgcmVoeWRyYXRlZEV4dGVybmFsQ29uZmlnID0gdGhpcy5yZWh5ZHJhdGUoKTtcblxuICAgIHJldHVybiByZWh5ZHJhdGVkRXh0ZXJuYWxDb25maWdcbiAgICAgID8gb2YocmVoeWRyYXRlZEV4dGVybmFsQ29uZmlnKVxuICAgICAgOiB0aGlzLmxvYWQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2FkcyB0aGUgZXh0ZXJuYWwgY29uZmlnIGZyb20gYmFja2VuZFxuICAgKi9cbiAgcHJvdGVjdGVkIGxvYWQoKTogT2JzZXJ2YWJsZTxPY2NMb2FkZWRDb25maWc+IHtcbiAgICByZXR1cm4gdGhpcy5zaXRlc0NvbmZpZ0xvYWRlclxuICAgICAgLmxvYWQoKVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcChiYXNlU2l0ZXMgPT5cbiAgICAgICAgICB0aGlzLmNvbnZlcnRlci5mcm9tT2NjQmFzZVNpdGVzKGJhc2VTaXRlcywgdGhpcy5jdXJyZW50VXJsKVxuICAgICAgICApXG4gICAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyaWVzIHRvIHJlaHlkcmF0ZSBleHRlcm5hbCBjb25maWcgaW4gdGhlIGJyb3dzZXIgZnJvbSBTU1JcbiAgICovXG4gIHByb3RlY3RlZCByZWh5ZHJhdGUoKTogT2NjTG9hZGVkQ29uZmlnIHtcbiAgICBpZiAodGhpcy50cmFuc2ZlclN0YXRlICYmIGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm0pKSB7XG4gICAgICByZXR1cm4gdGhpcy50cmFuc2ZlclN0YXRlLmdldChFWFRFUk5BTF9DT05GSUdfVFJBTlNGRVJfSUQsIHVuZGVmaW5lZCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRyYW5zZmVycyB0aGUgZ2l2ZW4gZXh0ZXJuYWwgY29uZmlnIGluIFNTUiB0byB0aGUgYnJvd3NlclxuICAgKlxuICAgKiBAcGFyYW0gZXh0ZXJuYWxDb25maWdcbiAgICovXG4gIHByb3RlY3RlZCB0cmFuc2ZlcihleHRlcm5hbENvbmZpZzogT2NjTG9hZGVkQ29uZmlnKSB7XG4gICAgaWYgKFxuICAgICAgdGhpcy50cmFuc2ZlclN0YXRlICYmXG4gICAgICBpc1BsYXRmb3JtU2VydmVyKHRoaXMucGxhdGZvcm0pICYmXG4gICAgICBleHRlcm5hbENvbmZpZ1xuICAgICkge1xuICAgICAgdGhpcy50cmFuc2ZlclN0YXRlLnNldChFWFRFUk5BTF9DT05GSUdfVFJBTlNGRVJfSUQsIGV4dGVybmFsQ29uZmlnKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0Q29uZmlnQ2h1bmtzKFxuICAgIGV4dGVybmFsQ29uZmlnOiBPY2NMb2FkZWRDb25maWdcbiAgKTogKEkxOG5Db25maWcgfCBTaXRlQ29udGV4dENvbmZpZylbXSB7XG4gICAgY29uc3QgY2h1bmtzOiBhbnlbXSA9IFt0aGlzLmNvbnZlcnRlci50b1NpdGVDb250ZXh0Q29uZmlnKGV4dGVybmFsQ29uZmlnKV07XG5cbiAgICBpZiAodGhpcy5zaG91bGRSZXR1cm5JMThuQ2h1bmsoKSkge1xuICAgICAgY2h1bmtzLnB1c2godGhpcy5jb252ZXJ0ZXIudG9JMThuQ29uZmlnKGV4dGVybmFsQ29uZmlnKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNodW5rcztcbiAgfVxuXG4gIHByaXZhdGUgc2hvdWxkUmV0dXJuSTE4bkNodW5rKCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGZhbGxiYWNrTGFuZ0V4aXN0cyA9XG4gICAgICB0eXBlb2YgKFxuICAgICAgICB0aGlzLmNvbmZpZyAmJlxuICAgICAgICB0aGlzLmNvbmZpZy5pMThuICYmXG4gICAgICAgIHRoaXMuY29uZmlnLmkxOG4uZmFsbGJhY2tMYW5nXG4gICAgICApICE9PSAndW5kZWZpbmVkJztcbiAgICBpZiAoZmFsbGJhY2tMYW5nRXhpc3RzICYmIGlzRGV2TW9kZSgpKSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGBUaGVyZSBpcyBhbiBhbHJlYWR5IHByb3ZpZGVkIHN0YXRpYyBjb25maWcgZm9yICdpMThuLmZhbGxiYWNrTGFuZycsIHNvIHRoZSB2YWx1ZSBmcm9tIE9DQyBsb2FkZWQgY29uZmlnIGlzIGlnbm9yZWQuYFxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuICFmYWxsYmFja0xhbmdFeGlzdHM7XG4gIH1cbn1cbiJdfQ==
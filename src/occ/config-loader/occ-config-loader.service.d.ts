import { StateKey, TransferState } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { I18nConfig } from '../../i18n/config/i18n-config';
import { SiteContextConfig } from '../../site-context/config/site-context-config';
import { OccLoadedConfig } from './occ-loaded-config';
import { OccLoadedConfigConverter } from './occ-loaded-config-converter';
import { OccSitesConfigLoader } from './occ-sites-config-loader';
import * as ɵngcc0 from '@angular/core';
export declare const EXTERNAL_CONFIG_TRANSFER_ID: StateKey<string>;
export declare class OccConfigLoaderService {
    protected platform: any;
    protected document: any;
    protected config: any;
    protected sitesConfigLoader: OccSitesConfigLoader;
    protected converter: OccLoadedConfigConverter;
    protected transferState: TransferState;
    protected serverRequestUrl?: string;
    constructor(platform: any, document: any, config: any, sitesConfigLoader: OccSitesConfigLoader, converter: OccLoadedConfigConverter, transferState: TransferState, serverRequestUrl?: string);
    private get currentUrl();
    /**
     * Initializes the Spartacus config asynchronously basing on the external config
     */
    loadConfig(): Promise<I18nConfig | SiteContextConfig>;
    /**
     * Returns the external config
     */
    protected get(): Observable<OccLoadedConfig>;
    /**
     * Loads the external config from backend
     */
    protected load(): Observable<OccLoadedConfig>;
    /**
     * Tries to rehydrate external config in the browser from SSR
     */
    protected rehydrate(): OccLoadedConfig;
    /**
     * Transfers the given external config in SSR to the browser
     *
     * @param externalConfig
     */
    protected transfer(externalConfig: OccLoadedConfig): void;
    protected getConfigChunks(externalConfig: OccLoadedConfig): (I18nConfig | SiteContextConfig)[];
    private shouldReturnI18nChunk;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OccConfigLoaderService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNvbmZpZy1sb2FkZXIuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJvY2MtY29uZmlnLWxvYWRlci5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBT0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1DQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdGF0ZUtleSwgVHJhbnNmZXJTdGF0ZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSTE4bkNvbmZpZyB9IGZyb20gJy4uLy4uL2kxOG4vY29uZmlnL2kxOG4tY29uZmlnJztcbmltcG9ydCB7IFNpdGVDb250ZXh0Q29uZmlnIH0gZnJvbSAnLi4vLi4vc2l0ZS1jb250ZXh0L2NvbmZpZy9zaXRlLWNvbnRleHQtY29uZmlnJztcbmltcG9ydCB7IE9jY0xvYWRlZENvbmZpZyB9IGZyb20gJy4vb2NjLWxvYWRlZC1jb25maWcnO1xuaW1wb3J0IHsgT2NjTG9hZGVkQ29uZmlnQ29udmVydGVyIH0gZnJvbSAnLi9vY2MtbG9hZGVkLWNvbmZpZy1jb252ZXJ0ZXInO1xuaW1wb3J0IHsgT2NjU2l0ZXNDb25maWdMb2FkZXIgfSBmcm9tICcuL29jYy1zaXRlcy1jb25maWctbG9hZGVyJztcbmV4cG9ydCBkZWNsYXJlIGNvbnN0IEVYVEVSTkFMX0NPTkZJR19UUkFOU0ZFUl9JRDogU3RhdGVLZXk8c3RyaW5nPjtcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE9jY0NvbmZpZ0xvYWRlclNlcnZpY2Uge1xuICAgIHByb3RlY3RlZCBwbGF0Zm9ybTogYW55O1xuICAgIHByb3RlY3RlZCBkb2N1bWVudDogYW55O1xuICAgIHByb3RlY3RlZCBjb25maWc6IGFueTtcbiAgICBwcm90ZWN0ZWQgc2l0ZXNDb25maWdMb2FkZXI6IE9jY1NpdGVzQ29uZmlnTG9hZGVyO1xuICAgIHByb3RlY3RlZCBjb252ZXJ0ZXI6IE9jY0xvYWRlZENvbmZpZ0NvbnZlcnRlcjtcbiAgICBwcm90ZWN0ZWQgdHJhbnNmZXJTdGF0ZTogVHJhbnNmZXJTdGF0ZTtcbiAgICBwcm90ZWN0ZWQgc2VydmVyUmVxdWVzdFVybD86IHN0cmluZztcbiAgICBjb25zdHJ1Y3RvcihwbGF0Zm9ybTogYW55LCBkb2N1bWVudDogYW55LCBjb25maWc6IGFueSwgc2l0ZXNDb25maWdMb2FkZXI6IE9jY1NpdGVzQ29uZmlnTG9hZGVyLCBjb252ZXJ0ZXI6IE9jY0xvYWRlZENvbmZpZ0NvbnZlcnRlciwgdHJhbnNmZXJTdGF0ZTogVHJhbnNmZXJTdGF0ZSwgc2VydmVyUmVxdWVzdFVybD86IHN0cmluZyk7XG4gICAgcHJpdmF0ZSBnZXQgY3VycmVudFVybCgpO1xuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemVzIHRoZSBTcGFydGFjdXMgY29uZmlnIGFzeW5jaHJvbm91c2x5IGJhc2luZyBvbiB0aGUgZXh0ZXJuYWwgY29uZmlnXG4gICAgICovXG4gICAgbG9hZENvbmZpZygpOiBQcm9taXNlPEkxOG5Db25maWcgfCBTaXRlQ29udGV4dENvbmZpZz47XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgZXh0ZXJuYWwgY29uZmlnXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGdldCgpOiBPYnNlcnZhYmxlPE9jY0xvYWRlZENvbmZpZz47XG4gICAgLyoqXG4gICAgICogTG9hZHMgdGhlIGV4dGVybmFsIGNvbmZpZyBmcm9tIGJhY2tlbmRcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgbG9hZCgpOiBPYnNlcnZhYmxlPE9jY0xvYWRlZENvbmZpZz47XG4gICAgLyoqXG4gICAgICogVHJpZXMgdG8gcmVoeWRyYXRlIGV4dGVybmFsIGNvbmZpZyBpbiB0aGUgYnJvd3NlciBmcm9tIFNTUlxuICAgICAqL1xuICAgIHByb3RlY3RlZCByZWh5ZHJhdGUoKTogT2NjTG9hZGVkQ29uZmlnO1xuICAgIC8qKlxuICAgICAqIFRyYW5zZmVycyB0aGUgZ2l2ZW4gZXh0ZXJuYWwgY29uZmlnIGluIFNTUiB0byB0aGUgYnJvd3NlclxuICAgICAqXG4gICAgICogQHBhcmFtIGV4dGVybmFsQ29uZmlnXG4gICAgICovXG4gICAgcHJvdGVjdGVkIHRyYW5zZmVyKGV4dGVybmFsQ29uZmlnOiBPY2NMb2FkZWRDb25maWcpOiB2b2lkO1xuICAgIHByb3RlY3RlZCBnZXRDb25maWdDaHVua3MoZXh0ZXJuYWxDb25maWc6IE9jY0xvYWRlZENvbmZpZyk6IChJMThuQ29uZmlnIHwgU2l0ZUNvbnRleHRDb25maWcpW107XG4gICAgcHJpdmF0ZSBzaG91bGRSZXR1cm5JMThuQ2h1bms7XG59XG4iXX0=
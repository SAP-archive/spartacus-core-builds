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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNvbmZpZy1sb2FkZXIuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJvY2MtY29uZmlnLWxvYWRlci5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBT0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1DQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0YXRlS2V5LCBUcmFuc2ZlclN0YXRlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBJMThuQ29uZmlnIH0gZnJvbSAnLi4vLi4vaTE4bi9jb25maWcvaTE4bi1jb25maWcnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRDb25maWcgfSBmcm9tICcuLi8uLi9zaXRlLWNvbnRleHQvY29uZmlnL3NpdGUtY29udGV4dC1jb25maWcnO1xuaW1wb3J0IHsgT2NjTG9hZGVkQ29uZmlnIH0gZnJvbSAnLi9vY2MtbG9hZGVkLWNvbmZpZyc7XG5pbXBvcnQgeyBPY2NMb2FkZWRDb25maWdDb252ZXJ0ZXIgfSBmcm9tICcuL29jYy1sb2FkZWQtY29uZmlnLWNvbnZlcnRlcic7XG5pbXBvcnQgeyBPY2NTaXRlc0NvbmZpZ0xvYWRlciB9IGZyb20gJy4vb2NjLXNpdGVzLWNvbmZpZy1sb2FkZXInO1xuZXhwb3J0IGRlY2xhcmUgY29uc3QgRVhURVJOQUxfQ09ORklHX1RSQU5TRkVSX0lEOiBTdGF0ZUtleTxzdHJpbmc+O1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgT2NjQ29uZmlnTG9hZGVyU2VydmljZSB7XG4gICAgcHJvdGVjdGVkIHBsYXRmb3JtOiBhbnk7XG4gICAgcHJvdGVjdGVkIGRvY3VtZW50OiBhbnk7XG4gICAgcHJvdGVjdGVkIGNvbmZpZzogYW55O1xuICAgIHByb3RlY3RlZCBzaXRlc0NvbmZpZ0xvYWRlcjogT2NjU2l0ZXNDb25maWdMb2FkZXI7XG4gICAgcHJvdGVjdGVkIGNvbnZlcnRlcjogT2NjTG9hZGVkQ29uZmlnQ29udmVydGVyO1xuICAgIHByb3RlY3RlZCB0cmFuc2ZlclN0YXRlOiBUcmFuc2ZlclN0YXRlO1xuICAgIHByb3RlY3RlZCBzZXJ2ZXJSZXF1ZXN0VXJsPzogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKHBsYXRmb3JtOiBhbnksIGRvY3VtZW50OiBhbnksIGNvbmZpZzogYW55LCBzaXRlc0NvbmZpZ0xvYWRlcjogT2NjU2l0ZXNDb25maWdMb2FkZXIsIGNvbnZlcnRlcjogT2NjTG9hZGVkQ29uZmlnQ29udmVydGVyLCB0cmFuc2ZlclN0YXRlOiBUcmFuc2ZlclN0YXRlLCBzZXJ2ZXJSZXF1ZXN0VXJsPzogc3RyaW5nKTtcbiAgICBwcml2YXRlIGdldCBjdXJyZW50VXJsKCk7XG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZXMgdGhlIFNwYXJ0YWN1cyBjb25maWcgYXN5bmNocm9ub3VzbHkgYmFzaW5nIG9uIHRoZSBleHRlcm5hbCBjb25maWdcbiAgICAgKi9cbiAgICBsb2FkQ29uZmlnKCk6IFByb21pc2U8STE4bkNvbmZpZyB8IFNpdGVDb250ZXh0Q29uZmlnPjtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBleHRlcm5hbCBjb25maWdcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZ2V0KCk6IE9ic2VydmFibGU8T2NjTG9hZGVkQ29uZmlnPjtcbiAgICAvKipcbiAgICAgKiBMb2FkcyB0aGUgZXh0ZXJuYWwgY29uZmlnIGZyb20gYmFja2VuZFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBsb2FkKCk6IE9ic2VydmFibGU8T2NjTG9hZGVkQ29uZmlnPjtcbiAgICAvKipcbiAgICAgKiBUcmllcyB0byByZWh5ZHJhdGUgZXh0ZXJuYWwgY29uZmlnIGluIHRoZSBicm93c2VyIGZyb20gU1NSXG4gICAgICovXG4gICAgcHJvdGVjdGVkIHJlaHlkcmF0ZSgpOiBPY2NMb2FkZWRDb25maWc7XG4gICAgLyoqXG4gICAgICogVHJhbnNmZXJzIHRoZSBnaXZlbiBleHRlcm5hbCBjb25maWcgaW4gU1NSIHRvIHRoZSBicm93c2VyXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZXh0ZXJuYWxDb25maWdcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgdHJhbnNmZXIoZXh0ZXJuYWxDb25maWc6IE9jY0xvYWRlZENvbmZpZyk6IHZvaWQ7XG4gICAgcHJvdGVjdGVkIGdldENvbmZpZ0NodW5rcyhleHRlcm5hbENvbmZpZzogT2NjTG9hZGVkQ29uZmlnKTogKEkxOG5Db25maWcgfCBTaXRlQ29udGV4dENvbmZpZylbXTtcbiAgICBwcml2YXRlIHNob3VsZFJldHVybkkxOG5DaHVuaztcbn1cbiJdfQ==
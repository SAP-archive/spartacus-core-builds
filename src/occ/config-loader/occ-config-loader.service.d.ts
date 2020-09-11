import { StateKey, TransferState } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { I18nConfig } from '../../i18n/config/i18n-config';
import { SiteContextConfig } from '../../site-context/config/site-context-config';
import { OccLoadedConfig } from './occ-loaded-config';
import { OccLoadedConfigConverter } from './occ-loaded-config-converter';
import { OccSitesConfigLoader } from './occ-sites-config-loader';
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
}

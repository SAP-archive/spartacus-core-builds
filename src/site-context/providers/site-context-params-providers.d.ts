import { Provider } from '@angular/core';
import { ConfigInitializerService } from '../../config/config-initializer/config-initializer.service';
import { SiteContextRoutesHandler } from '../services/site-context-routes-handler';
export declare function initSiteContextRoutesHandler(siteContextRoutesHandler: SiteContextRoutesHandler, configInit: ConfigInitializerService): () => void;
export declare const siteContextParamsProviders: Provider[];

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseSite } from '../../model/misc.model';
import { OccConfig } from '../config/occ-config';
import * as ɵngcc0 from '@angular/core';
export declare class OccSitesConfigLoader {
    protected config: OccConfig;
    protected http: HttpClient;
    constructor(config: OccConfig, http: HttpClient);
    protected readonly endpoint = "basesites?fields=baseSites(uid,defaultLanguage(isocode),urlEncodingAttributes,urlPatterns,stores(currencies(isocode),defaultCurrency(isocode),languages(isocode),defaultLanguage(isocode)))";
    private get baseEndpoint();
    private get url();
    load(): Observable<BaseSite[]>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OccSitesConfigLoader>;
}

//# sourceMappingURL=occ-sites-config-loader.d.ts.map
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country, CountryType, Region } from '../../../model/address.model';
import { BaseSite, Currency, Language } from '../../../model/misc.model';
import { SiteAdapter } from '../../../site-context/connectors/site.adapter';
import { ConverterService } from '../../../util/converter.service';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
import * as ɵngcc0 from '@angular/core';
export declare class OccSiteAdapter implements SiteAdapter {
    protected http: HttpClient;
    protected occEndpointsService: OccEndpointsService;
    protected converterService: ConverterService;
    constructor(http: HttpClient, occEndpointsService: OccEndpointsService, converterService: ConverterService);
    loadLanguages(): Observable<Language[]>;
    loadCurrencies(): Observable<Currency[]>;
    loadCountries(type?: CountryType): Observable<Country[]>;
    loadRegions(countryIsoCode: string): Observable<Region[]>;
    loadBaseSite(): Observable<BaseSite>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OccSiteAdapter>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<OccSiteAdapter>;
}

//# sourceMappingURL=occ-site.adapter.d.ts.map
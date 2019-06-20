import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country, CountryType, Region } from '../../../model/address.model';
import { BaseSite, Currency, Language } from '../../../model/misc.model';
import { SiteAdapter } from '../../../site-context/connectors/site.adapter';
import { ConverterService } from '../../../util/converter.service';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
export declare class OccSiteAdapter implements SiteAdapter {
    protected http: HttpClient;
    protected occEndpoints: OccEndpointsService;
    protected converter: ConverterService;
    constructor(http: HttpClient, occEndpoints: OccEndpointsService, converter: ConverterService);
    loadLanguages(): Observable<Language[]>;
    loadCurrencies(): Observable<Currency[]>;
    loadCountries(type?: CountryType): Observable<Country[]>;
    loadRegions(countryIsoCode: string): Observable<Region[]>;
    loadBaseSite(): Observable<BaseSite>;
}

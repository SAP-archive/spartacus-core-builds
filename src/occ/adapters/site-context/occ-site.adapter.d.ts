import { SiteAdapter } from '../../../site-context/connectors/site.adapter';
import { Observable } from 'rxjs';
import { Currency, Language, BaseSite } from '../../../model/misc.model';
import { HttpClient } from '@angular/common/http';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
import { ConverterService } from '../../../util/converter.service';
import { Country, CountryType, Region } from '../../../model/address.model';
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

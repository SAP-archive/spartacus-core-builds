import { SiteAdapter } from './site.adapter';
import { Observable } from 'rxjs';
import { Currency, Language, BaseSite } from '../../model/misc.model';
import { Country, CountryType, Region } from '../../model/address.model';
export declare class SiteConnector {
    protected adapter: SiteAdapter;
    constructor(adapter: SiteAdapter);
    getLanguages(): Observable<Language[]>;
    getCurrencies(): Observable<Currency[]>;
    getCountries(type?: CountryType): Observable<Country[]>;
    getRegions(countryIsoCode: string): Observable<Region[]>;
    getBaseSite(): Observable<BaseSite>;
}

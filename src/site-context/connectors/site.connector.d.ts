import { Observable } from 'rxjs';
import { Country, CountryType, Region } from '../../model/address.model';
import { BaseSite, Currency, Language } from '../../model/misc.model';
import { SiteAdapter } from './site.adapter';
import * as ɵngcc0 from '@angular/core';
export declare class SiteConnector {
    protected adapter: SiteAdapter;
    constructor(adapter: SiteAdapter);
    getLanguages(): Observable<Language[]>;
    getCurrencies(): Observable<Currency[]>;
    getCountries(type?: CountryType): Observable<Country[]>;
    getRegions(countryIsoCode: string): Observable<Region[]>;
    getBaseSite(): Observable<BaseSite>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SiteConnector>;
}

//# sourceMappingURL=site.connector.d.ts.map
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZS5jb25uZWN0b3IuZC50cyIsInNvdXJjZXMiOlsic2l0ZS5jb25uZWN0b3IuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUFJQTs7Ozs7Ozs7O0FBUUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDb3VudHJ5LCBDb3VudHJ5VHlwZSwgUmVnaW9uIH0gZnJvbSAnLi4vLi4vbW9kZWwvYWRkcmVzcy5tb2RlbCc7XG5pbXBvcnQgeyBCYXNlU2l0ZSwgQ3VycmVuY3ksIExhbmd1YWdlIH0gZnJvbSAnLi4vLi4vbW9kZWwvbWlzYy5tb2RlbCc7XG5pbXBvcnQgeyBTaXRlQWRhcHRlciB9IGZyb20gJy4vc2l0ZS5hZGFwdGVyJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFNpdGVDb25uZWN0b3Ige1xuICAgIHByb3RlY3RlZCBhZGFwdGVyOiBTaXRlQWRhcHRlcjtcbiAgICBjb25zdHJ1Y3RvcihhZGFwdGVyOiBTaXRlQWRhcHRlcik7XG4gICAgZ2V0TGFuZ3VhZ2VzKCk6IE9ic2VydmFibGU8TGFuZ3VhZ2VbXT47XG4gICAgZ2V0Q3VycmVuY2llcygpOiBPYnNlcnZhYmxlPEN1cnJlbmN5W10+O1xuICAgIGdldENvdW50cmllcyh0eXBlPzogQ291bnRyeVR5cGUpOiBPYnNlcnZhYmxlPENvdW50cnlbXT47XG4gICAgZ2V0UmVnaW9ucyhjb3VudHJ5SXNvQ29kZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxSZWdpb25bXT47XG4gICAgZ2V0QmFzZVNpdGUoKTogT2JzZXJ2YWJsZTxCYXNlU2l0ZT47XG59XG4iXX0=
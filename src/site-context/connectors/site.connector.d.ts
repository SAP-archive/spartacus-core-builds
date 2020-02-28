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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZS5jb25uZWN0b3IuZC50cyIsInNvdXJjZXMiOlsic2l0ZS5jb25uZWN0b3IuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUFJQTs7Ozs7Ozs7O0FBUUE7Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ291bnRyeSwgQ291bnRyeVR5cGUsIFJlZ2lvbiB9IGZyb20gJy4uLy4uL21vZGVsL2FkZHJlc3MubW9kZWwnO1xuaW1wb3J0IHsgQmFzZVNpdGUsIEN1cnJlbmN5LCBMYW5ndWFnZSB9IGZyb20gJy4uLy4uL21vZGVsL21pc2MubW9kZWwnO1xuaW1wb3J0IHsgU2l0ZUFkYXB0ZXIgfSBmcm9tICcuL3NpdGUuYWRhcHRlcic7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBTaXRlQ29ubmVjdG9yIHtcbiAgICBwcm90ZWN0ZWQgYWRhcHRlcjogU2l0ZUFkYXB0ZXI7XG4gICAgY29uc3RydWN0b3IoYWRhcHRlcjogU2l0ZUFkYXB0ZXIpO1xuICAgIGdldExhbmd1YWdlcygpOiBPYnNlcnZhYmxlPExhbmd1YWdlW10+O1xuICAgIGdldEN1cnJlbmNpZXMoKTogT2JzZXJ2YWJsZTxDdXJyZW5jeVtdPjtcbiAgICBnZXRDb3VudHJpZXModHlwZT86IENvdW50cnlUeXBlKTogT2JzZXJ2YWJsZTxDb3VudHJ5W10+O1xuICAgIGdldFJlZ2lvbnMoY291bnRyeUlzb0NvZGU6IHN0cmluZyk6IE9ic2VydmFibGU8UmVnaW9uW10+O1xuICAgIGdldEJhc2VTaXRlKCk6IE9ic2VydmFibGU8QmFzZVNpdGU+O1xufVxuIl19
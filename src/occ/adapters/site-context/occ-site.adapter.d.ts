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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXNpdGUuYWRhcHRlci5kLnRzIiwic291cmNlcyI6WyJvY2Mtc2l0ZS5hZGFwdGVyLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBT0E7Ozs7Ozs7Ozs7OztBQVVBOyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDb3VudHJ5LCBDb3VudHJ5VHlwZSwgUmVnaW9uIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvYWRkcmVzcy5tb2RlbCc7XG5pbXBvcnQgeyBCYXNlU2l0ZSwgQ3VycmVuY3ksIExhbmd1YWdlIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvbWlzYy5tb2RlbCc7XG5pbXBvcnQgeyBTaXRlQWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL3NpdGUtY29udGV4dC9jb25uZWN0b3JzL3NpdGUuYWRhcHRlcic7XG5pbXBvcnQgeyBDb252ZXJ0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9jb252ZXJ0ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBPY2NFbmRwb2ludHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvb2NjLWVuZHBvaW50cy5zZXJ2aWNlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE9jY1NpdGVBZGFwdGVyIGltcGxlbWVudHMgU2l0ZUFkYXB0ZXIge1xuICAgIHByb3RlY3RlZCBodHRwOiBIdHRwQ2xpZW50O1xuICAgIHByb3RlY3RlZCBvY2NFbmRwb2ludHNTZXJ2aWNlOiBPY2NFbmRwb2ludHNTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBjb252ZXJ0ZXJTZXJ2aWNlOiBDb252ZXJ0ZXJTZXJ2aWNlO1xuICAgIGNvbnN0cnVjdG9yKGh0dHA6IEh0dHBDbGllbnQsIG9jY0VuZHBvaW50c1NlcnZpY2U6IE9jY0VuZHBvaW50c1NlcnZpY2UsIGNvbnZlcnRlclNlcnZpY2U6IENvbnZlcnRlclNlcnZpY2UpO1xuICAgIGxvYWRMYW5ndWFnZXMoKTogT2JzZXJ2YWJsZTxMYW5ndWFnZVtdPjtcbiAgICBsb2FkQ3VycmVuY2llcygpOiBPYnNlcnZhYmxlPEN1cnJlbmN5W10+O1xuICAgIGxvYWRDb3VudHJpZXModHlwZT86IENvdW50cnlUeXBlKTogT2JzZXJ2YWJsZTxDb3VudHJ5W10+O1xuICAgIGxvYWRSZWdpb25zKGNvdW50cnlJc29Db2RlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFJlZ2lvbltdPjtcbiAgICBsb2FkQmFzZVNpdGUoKTogT2JzZXJ2YWJsZTxCYXNlU2l0ZT47XG59XG4iXX0=
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CardTypeList, CountryList, RegionList, TitleList } from '../../occ/occ-models/index';
import { OccEndpointsService } from '../services/occ-endpoints.service';
export declare class OccMiscsService {
    private http;
    private occEndpoints;
    constructor(http: HttpClient, occEndpoints: OccEndpointsService);
    loadDeliveryCountries(): Observable<CountryList>;
    loadBillingCountries(): Observable<CountryList>;
    loadTitles(): Observable<TitleList>;
    loadCardTypes(): Observable<CardTypeList>;
    loadRegions(countryIsoCode: string): Observable<RegionList>;
    private buildRegionsUrl;
}

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Occ } from '../../occ/occ-models/occ.models';
import { OccEndpointsService } from '../services/occ-endpoints.service';
export declare class OccMiscsService {
    private http;
    private occEndpoints;
    constructor(http: HttpClient, occEndpoints: OccEndpointsService);
    loadDeliveryCountries(): Observable<Occ.CountryList>;
    loadBillingCountries(): Observable<Occ.CountryList>;
    loadTitles(): Observable<Occ.TitleList>;
    loadCardTypes(): Observable<Occ.CardTypeList>;
    loadRegions(countryIsoCode: string): Observable<Occ.RegionList>;
    private buildRegionsUrl;
}

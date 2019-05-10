import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Occ } from '../../occ/occ-models/occ.models';
import { OccEndpointsService } from '../../occ/services/occ-endpoints.service';
export declare class OccSiteService {
    private http;
    private occEndpoints;
    constructor(http: HttpClient, occEndpoints: OccEndpointsService);
    loadLanguages(): Observable<Occ.LanguageList>;
    loadCurrencies(): Observable<Occ.CurrencyList>;
}

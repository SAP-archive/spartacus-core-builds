import { SiteAdapter } from '../connectors/site.adapter';
import { Observable } from 'rxjs';
import { Currency, Language } from '../../model/misc.model';
import { HttpClient } from '@angular/common/http';
import { OccEndpointsService } from '../../occ/services/occ-endpoints.service';
import { ConverterService } from '../../util/converter.service';
export declare class OccSiteAdapter implements SiteAdapter {
    private http;
    private occEndpoints;
    private converter;
    constructor(http: HttpClient, occEndpoints: OccEndpointsService, converter: ConverterService);
    loadLanguages(): Observable<Language[]>;
    loadCurrencies(): Observable<Currency[]>;
}

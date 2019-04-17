import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SearchConfig } from '../model/search-config';
import { SuggestionList, ProductSearchPage } from '../../occ/occ-models/occ.models';
import { OccEndpointsService } from '../../occ/services/occ-endpoints.service';
export declare class ProductSearchLoaderService {
    private http;
    private occEndpoints;
    constructor(http: HttpClient, occEndpoints: OccEndpointsService);
    loadSearch(fullQuery: string, searchConfig?: SearchConfig): Observable<ProductSearchPage>;
    loadSuggestions(term: string, pageSize?: number): Observable<SuggestionList>;
    protected getSearchEndpoint(query: string, searchConfig: SearchConfig): string;
    protected getSuggestionEndpoint(term: string, max: string): string;
}

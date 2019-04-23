import { ProductSearchAdapter } from '../connectors/search/product-search.adapter';
import { SearchConfig } from '../model/search-config';
import { SuggestionList } from '../../occ/occ-models/occ.models';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { OccEndpointsService } from '../../occ/services/occ-endpoints.service';
import { ConverterService } from '../../util/converter.service';
import { UIProductSearchPage } from '../model/product-search-page';
export declare class OccProductSearchAdapter implements ProductSearchAdapter {
    private http;
    private occEndpoints;
    protected converter: ConverterService;
    constructor(http: HttpClient, occEndpoints: OccEndpointsService, converter: ConverterService);
    search(query: string, searchConfig?: SearchConfig): Observable<UIProductSearchPage>;
    loadSuggestions(term: string, pageSize?: number): Observable<SuggestionList>;
    protected getSearchEndpoint(query: string, searchConfig: SearchConfig): string;
    protected getSuggestionEndpoint(term: string, max: string): string;
}

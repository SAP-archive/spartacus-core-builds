import { ProductSearchAdapter } from '../../../product/connectors/search/product-search.adapter';
import { SearchConfig } from '../../../product/model/search-config';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
import { ConverterService } from '../../../util/converter.service';
import { Suggestion, ProductSearchPage } from '../../../model/product-search.model';
export declare class OccProductSearchAdapter implements ProductSearchAdapter {
    protected http: HttpClient;
    protected occEndpoints: OccEndpointsService;
    protected converter: ConverterService;
    constructor(http: HttpClient, occEndpoints: OccEndpointsService, converter: ConverterService);
    search(query: string, searchConfig?: SearchConfig): Observable<ProductSearchPage>;
    loadSuggestions(term: string, pageSize?: number): Observable<Suggestion[]>;
    protected getSearchEndpoint(query: string, searchConfig: SearchConfig): string;
    protected getSuggestionEndpoint(term: string, max: string): string;
}

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductSearchPage, Suggestion } from '../../../model/product-search.model';
import { ProductSearchAdapter } from '../../../product/connectors/search/product-search.adapter';
import { SearchConfig } from '../../../product/model/search-config';
import { ConverterService } from '../../../util/converter.service';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
import * as ɵngcc0 from '@angular/core';
export declare class OccProductSearchAdapter implements ProductSearchAdapter {
    protected http: HttpClient;
    protected occEndpoints: OccEndpointsService;
    protected converter: ConverterService;
    constructor(http: HttpClient, occEndpoints: OccEndpointsService, converter: ConverterService);
    search(query: string, searchConfig?: SearchConfig): Observable<ProductSearchPage>;
    loadSuggestions(term: string, pageSize?: number): Observable<Suggestion[]>;
    protected getSearchEndpoint(query: string, searchConfig: SearchConfig): string;
    protected getSuggestionEndpoint(term: string, max: string): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OccProductSearchAdapter>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<OccProductSearchAdapter>;
}

//# sourceMappingURL=occ-product-search.adapter.d.ts.map
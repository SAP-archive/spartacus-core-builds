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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXByb2R1Y3Qtc2VhcmNoLmFkYXB0ZXIuZC50cyIsInNvdXJjZXMiOlsib2NjLXByb2R1Y3Qtc2VhcmNoLmFkYXB0ZXIuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFPQTs7Ozs7Ozs7Ozs7QUFTQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUHJvZHVjdFNlYXJjaFBhZ2UsIFN1Z2dlc3Rpb24gfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9wcm9kdWN0LXNlYXJjaC5tb2RlbCc7XG5pbXBvcnQgeyBQcm9kdWN0U2VhcmNoQWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL3Byb2R1Y3QvY29ubmVjdG9ycy9zZWFyY2gvcHJvZHVjdC1zZWFyY2guYWRhcHRlcic7XG5pbXBvcnQgeyBTZWFyY2hDb25maWcgfSBmcm9tICcuLi8uLi8uLi9wcm9kdWN0L21vZGVsL3NlYXJjaC1jb25maWcnO1xuaW1wb3J0IHsgQ29udmVydGVyU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvY29udmVydGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgT2NjRW5kcG9pbnRzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL29jYy1lbmRwb2ludHMuc2VydmljZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBPY2NQcm9kdWN0U2VhcmNoQWRhcHRlciBpbXBsZW1lbnRzIFByb2R1Y3RTZWFyY2hBZGFwdGVyIHtcbiAgICBwcm90ZWN0ZWQgaHR0cDogSHR0cENsaWVudDtcbiAgICBwcm90ZWN0ZWQgb2NjRW5kcG9pbnRzOiBPY2NFbmRwb2ludHNTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBjb252ZXJ0ZXI6IENvbnZlcnRlclNlcnZpY2U7XG4gICAgY29uc3RydWN0b3IoaHR0cDogSHR0cENsaWVudCwgb2NjRW5kcG9pbnRzOiBPY2NFbmRwb2ludHNTZXJ2aWNlLCBjb252ZXJ0ZXI6IENvbnZlcnRlclNlcnZpY2UpO1xuICAgIHNlYXJjaChxdWVyeTogc3RyaW5nLCBzZWFyY2hDb25maWc/OiBTZWFyY2hDb25maWcpOiBPYnNlcnZhYmxlPFByb2R1Y3RTZWFyY2hQYWdlPjtcbiAgICBsb2FkU3VnZ2VzdGlvbnModGVybTogc3RyaW5nLCBwYWdlU2l6ZT86IG51bWJlcik6IE9ic2VydmFibGU8U3VnZ2VzdGlvbltdPjtcbiAgICBwcm90ZWN0ZWQgZ2V0U2VhcmNoRW5kcG9pbnQocXVlcnk6IHN0cmluZywgc2VhcmNoQ29uZmlnOiBTZWFyY2hDb25maWcpOiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIGdldFN1Z2dlc3Rpb25FbmRwb2ludCh0ZXJtOiBzdHJpbmcsIG1heDogc3RyaW5nKTogc3RyaW5nO1xufVxuIl19
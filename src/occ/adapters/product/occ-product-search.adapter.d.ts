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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXByb2R1Y3Qtc2VhcmNoLmFkYXB0ZXIuZC50cyIsInNvdXJjZXMiOlsib2NjLXByb2R1Y3Qtc2VhcmNoLmFkYXB0ZXIuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFPQTs7Ozs7Ozs7Ozs7QUFTQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBQcm9kdWN0U2VhcmNoUGFnZSwgU3VnZ2VzdGlvbiB9IGZyb20gJy4uLy4uLy4uL21vZGVsL3Byb2R1Y3Qtc2VhcmNoLm1vZGVsJztcbmltcG9ydCB7IFByb2R1Y3RTZWFyY2hBZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vcHJvZHVjdC9jb25uZWN0b3JzL3NlYXJjaC9wcm9kdWN0LXNlYXJjaC5hZGFwdGVyJztcbmltcG9ydCB7IFNlYXJjaENvbmZpZyB9IGZyb20gJy4uLy4uLy4uL3Byb2R1Y3QvbW9kZWwvc2VhcmNoLWNvbmZpZyc7XG5pbXBvcnQgeyBDb252ZXJ0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9jb252ZXJ0ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBPY2NFbmRwb2ludHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvb2NjLWVuZHBvaW50cy5zZXJ2aWNlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE9jY1Byb2R1Y3RTZWFyY2hBZGFwdGVyIGltcGxlbWVudHMgUHJvZHVjdFNlYXJjaEFkYXB0ZXIge1xuICAgIHByb3RlY3RlZCBodHRwOiBIdHRwQ2xpZW50O1xuICAgIHByb3RlY3RlZCBvY2NFbmRwb2ludHM6IE9jY0VuZHBvaW50c1NlcnZpY2U7XG4gICAgcHJvdGVjdGVkIGNvbnZlcnRlcjogQ29udmVydGVyU2VydmljZTtcbiAgICBjb25zdHJ1Y3RvcihodHRwOiBIdHRwQ2xpZW50LCBvY2NFbmRwb2ludHM6IE9jY0VuZHBvaW50c1NlcnZpY2UsIGNvbnZlcnRlcjogQ29udmVydGVyU2VydmljZSk7XG4gICAgc2VhcmNoKHF1ZXJ5OiBzdHJpbmcsIHNlYXJjaENvbmZpZz86IFNlYXJjaENvbmZpZyk6IE9ic2VydmFibGU8UHJvZHVjdFNlYXJjaFBhZ2U+O1xuICAgIGxvYWRTdWdnZXN0aW9ucyh0ZXJtOiBzdHJpbmcsIHBhZ2VTaXplPzogbnVtYmVyKTogT2JzZXJ2YWJsZTxTdWdnZXN0aW9uW10+O1xuICAgIHByb3RlY3RlZCBnZXRTZWFyY2hFbmRwb2ludChxdWVyeTogc3RyaW5nLCBzZWFyY2hDb25maWc6IFNlYXJjaENvbmZpZyk6IHN0cmluZztcbiAgICBwcm90ZWN0ZWQgZ2V0U3VnZ2VzdGlvbkVuZHBvaW50KHRlcm06IHN0cmluZywgbWF4OiBzdHJpbmcpOiBzdHJpbmc7XG59XG4iXX0=
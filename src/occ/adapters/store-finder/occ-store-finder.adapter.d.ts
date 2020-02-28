import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GeoPoint } from '../../../model/misc.model';
import { PointOfService } from '../../../model/point-of-service.model';
import { StoreCount, StoreFinderSearchPage } from '../../../model/store-finder.model';
import { StoreFinderAdapter } from '../../../store-finder/connectors/store-finder.adapter';
import { StoreFinderSearchConfig } from '../../../store-finder/model';
import { ConverterService } from '../../../util/converter.service';
import { Occ } from '../../occ-models/occ.models';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
import * as ɵngcc0 from '@angular/core';
export declare class OccStoreFinderAdapter implements StoreFinderAdapter {
    protected http: HttpClient;
    protected occEndpointsService: OccEndpointsService;
    protected converterService: ConverterService;
    constructor(http: HttpClient, occEndpointsService: OccEndpointsService, converterService: ConverterService);
    search(query: string, searchConfig: StoreFinderSearchConfig, longitudeLatitude?: GeoPoint): Observable<StoreFinderSearchPage>;
    loadCounts(): Observable<StoreCount[]>;
    load(storeId: string): Observable<PointOfService>;
    protected callOccFindStores(query: string, searchConfig: StoreFinderSearchConfig, longitudeLatitude?: GeoPoint): Observable<Occ.StoreFinderSearchPage>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OccStoreFinderAdapter>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<OccStoreFinderAdapter>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXN0b3JlLWZpbmRlci5hZGFwdGVyLmQudHMiLCJzb3VyY2VzIjpbIm9jYy1zdG9yZS1maW5kZXIuYWRhcHRlci5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztBQVVBOzs7Ozs7Ozs7OztBQVNBOyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBHZW9Qb2ludCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL21pc2MubW9kZWwnO1xuaW1wb3J0IHsgUG9pbnRPZlNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9wb2ludC1vZi1zZXJ2aWNlLm1vZGVsJztcbmltcG9ydCB7IFN0b3JlQ291bnQsIFN0b3JlRmluZGVyU2VhcmNoUGFnZSB9IGZyb20gJy4uLy4uLy4uL21vZGVsL3N0b3JlLWZpbmRlci5tb2RlbCc7XG5pbXBvcnQgeyBTdG9yZUZpbmRlckFkYXB0ZXIgfSBmcm9tICcuLi8uLi8uLi9zdG9yZS1maW5kZXIvY29ubmVjdG9ycy9zdG9yZS1maW5kZXIuYWRhcHRlcic7XG5pbXBvcnQgeyBTdG9yZUZpbmRlclNlYXJjaENvbmZpZyB9IGZyb20gJy4uLy4uLy4uL3N0b3JlLWZpbmRlci9tb2RlbCc7XG5pbXBvcnQgeyBDb252ZXJ0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9jb252ZXJ0ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBPY2MgfSBmcm9tICcuLi8uLi9vY2MtbW9kZWxzL29jYy5tb2RlbHMnO1xuaW1wb3J0IHsgT2NjRW5kcG9pbnRzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL29jYy1lbmRwb2ludHMuc2VydmljZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBPY2NTdG9yZUZpbmRlckFkYXB0ZXIgaW1wbGVtZW50cyBTdG9yZUZpbmRlckFkYXB0ZXIge1xuICAgIHByb3RlY3RlZCBodHRwOiBIdHRwQ2xpZW50O1xuICAgIHByb3RlY3RlZCBvY2NFbmRwb2ludHNTZXJ2aWNlOiBPY2NFbmRwb2ludHNTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBjb252ZXJ0ZXJTZXJ2aWNlOiBDb252ZXJ0ZXJTZXJ2aWNlO1xuICAgIGNvbnN0cnVjdG9yKGh0dHA6IEh0dHBDbGllbnQsIG9jY0VuZHBvaW50c1NlcnZpY2U6IE9jY0VuZHBvaW50c1NlcnZpY2UsIGNvbnZlcnRlclNlcnZpY2U6IENvbnZlcnRlclNlcnZpY2UpO1xuICAgIHNlYXJjaChxdWVyeTogc3RyaW5nLCBzZWFyY2hDb25maWc6IFN0b3JlRmluZGVyU2VhcmNoQ29uZmlnLCBsb25naXR1ZGVMYXRpdHVkZT86IEdlb1BvaW50KTogT2JzZXJ2YWJsZTxTdG9yZUZpbmRlclNlYXJjaFBhZ2U+O1xuICAgIGxvYWRDb3VudHMoKTogT2JzZXJ2YWJsZTxTdG9yZUNvdW50W10+O1xuICAgIGxvYWQoc3RvcmVJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxQb2ludE9mU2VydmljZT47XG4gICAgcHJvdGVjdGVkIGNhbGxPY2NGaW5kU3RvcmVzKHF1ZXJ5OiBzdHJpbmcsIHNlYXJjaENvbmZpZzogU3RvcmVGaW5kZXJTZWFyY2hDb25maWcsIGxvbmdpdHVkZUxhdGl0dWRlPzogR2VvUG9pbnQpOiBPYnNlcnZhYmxlPE9jYy5TdG9yZUZpbmRlclNlYXJjaFBhZ2U+O1xufVxuIl19
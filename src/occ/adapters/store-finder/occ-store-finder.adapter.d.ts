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
    search(query: string, searchConfig: StoreFinderSearchConfig, longitudeLatitude?: GeoPoint, radius?: number): Observable<StoreFinderSearchPage>;
    loadCounts(): Observable<StoreCount[]>;
    load(storeId: string): Observable<PointOfService>;
    protected callOccFindStores(query: string, searchConfig: StoreFinderSearchConfig, longitudeLatitude?: GeoPoint, radius?: number): Observable<Occ.StoreFinderSearchPage>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OccStoreFinderAdapter, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<OccStoreFinderAdapter>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXN0b3JlLWZpbmRlci5hZGFwdGVyLmQudHMiLCJzb3VyY2VzIjpbIm9jYy1zdG9yZS1maW5kZXIuYWRhcHRlci5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztBQVVBOzs7Ozs7Ozs7OztBQVNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEdlb1BvaW50IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvbWlzYy5tb2RlbCc7XG5pbXBvcnQgeyBQb2ludE9mU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL21vZGVsL3BvaW50LW9mLXNlcnZpY2UubW9kZWwnO1xuaW1wb3J0IHsgU3RvcmVDb3VudCwgU3RvcmVGaW5kZXJTZWFyY2hQYWdlIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvc3RvcmUtZmluZGVyLm1vZGVsJztcbmltcG9ydCB7IFN0b3JlRmluZGVyQWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL3N0b3JlLWZpbmRlci9jb25uZWN0b3JzL3N0b3JlLWZpbmRlci5hZGFwdGVyJztcbmltcG9ydCB7IFN0b3JlRmluZGVyU2VhcmNoQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vc3RvcmUtZmluZGVyL21vZGVsJztcbmltcG9ydCB7IENvbnZlcnRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi91dGlsL2NvbnZlcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7IE9jYyB9IGZyb20gJy4uLy4uL29jYy1tb2RlbHMvb2NjLm1vZGVscyc7XG5pbXBvcnQgeyBPY2NFbmRwb2ludHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvb2NjLWVuZHBvaW50cy5zZXJ2aWNlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE9jY1N0b3JlRmluZGVyQWRhcHRlciBpbXBsZW1lbnRzIFN0b3JlRmluZGVyQWRhcHRlciB7XG4gICAgcHJvdGVjdGVkIGh0dHA6IEh0dHBDbGllbnQ7XG4gICAgcHJvdGVjdGVkIG9jY0VuZHBvaW50c1NlcnZpY2U6IE9jY0VuZHBvaW50c1NlcnZpY2U7XG4gICAgcHJvdGVjdGVkIGNvbnZlcnRlclNlcnZpY2U6IENvbnZlcnRlclNlcnZpY2U7XG4gICAgY29uc3RydWN0b3IoaHR0cDogSHR0cENsaWVudCwgb2NjRW5kcG9pbnRzU2VydmljZTogT2NjRW5kcG9pbnRzU2VydmljZSwgY29udmVydGVyU2VydmljZTogQ29udmVydGVyU2VydmljZSk7XG4gICAgc2VhcmNoKHF1ZXJ5OiBzdHJpbmcsIHNlYXJjaENvbmZpZzogU3RvcmVGaW5kZXJTZWFyY2hDb25maWcsIGxvbmdpdHVkZUxhdGl0dWRlPzogR2VvUG9pbnQsIHJhZGl1cz86IG51bWJlcik6IE9ic2VydmFibGU8U3RvcmVGaW5kZXJTZWFyY2hQYWdlPjtcbiAgICBsb2FkQ291bnRzKCk6IE9ic2VydmFibGU8U3RvcmVDb3VudFtdPjtcbiAgICBsb2FkKHN0b3JlSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8UG9pbnRPZlNlcnZpY2U+O1xuICAgIHByb3RlY3RlZCBjYWxsT2NjRmluZFN0b3JlcyhxdWVyeTogc3RyaW5nLCBzZWFyY2hDb25maWc6IFN0b3JlRmluZGVyU2VhcmNoQ29uZmlnLCBsb25naXR1ZGVMYXRpdHVkZT86IEdlb1BvaW50LCByYWRpdXM/OiBudW1iZXIpOiBPYnNlcnZhYmxlPE9jYy5TdG9yZUZpbmRlclNlYXJjaFBhZ2U+O1xufVxuIl19
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GeoPoint } from '../../../model/misc.model';
import { PointOfService } from '../../../model/point-of-service.model';
import { StoreCount, StoreFinderSearchPage } from '../../../model/store-finder.model';
import { SearchConfig } from '../../../product/model/search-config';
import { StoreFinderAdapter } from '../../../store-finder/connectors/store-finder.adapter';
import { ConverterService } from '../../../util/converter.service';
import { Occ } from '../../occ-models/occ.models';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
import * as ɵngcc0 from '@angular/core';
export declare class OccStoreFinderAdapter implements StoreFinderAdapter {
    protected http: HttpClient;
    protected occEndpointsService: OccEndpointsService;
    protected converterService: ConverterService;
    constructor(http: HttpClient, occEndpointsService: OccEndpointsService, converterService: ConverterService);
    search(query: string, searchConfig: SearchConfig, longitudeLatitude?: GeoPoint, radius?: number): Observable<StoreFinderSearchPage>;
    loadCounts(): Observable<StoreCount[]>;
    load(storeId: string): Observable<PointOfService>;
    protected callOccFindStores(query: string, searchConfig: SearchConfig, longitudeLatitude?: GeoPoint, radius?: number): Observable<Occ.StoreFinderSearchPage>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OccStoreFinderAdapter, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<OccStoreFinderAdapter>;
}

//# sourceMappingURL=occ-store-finder.adapter.d.ts.map
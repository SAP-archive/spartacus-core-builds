import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StoreFinderSearchConfig } from '../model/index';
import { OccEndpointsService } from '../../occ/services/occ-endpoints.service';
import { PointOfService } from '../../model/point-of-service.model';
import { StoreFinderAdapter } from '../connectors/store-finder.adapter';
import { GeoPoint } from '../../model/misc.model';
import { ConverterService } from '../../util/converter.service';
import { Occ } from '../../occ/occ-models/occ.models';
import { StoreFinderSearchPage, StoreCount } from '../../model/store-finder.model';
export declare class OccStoreFinderAdapter implements StoreFinderAdapter {
    private http;
    private occEndpoints;
    private converter;
    constructor(http: HttpClient, occEndpoints: OccEndpointsService, converter: ConverterService);
    search(query: string, searchConfig: StoreFinderSearchConfig, longitudeLatitude?: GeoPoint): Observable<StoreFinderSearchPage>;
    loadCounts(): Observable<StoreCount[]>;
    load(storeId: string): Observable<PointOfService>;
    protected callOccFindStores(query: string, searchConfig: StoreFinderSearchConfig, longitudeLatitude?: GeoPoint): Observable<Occ.StoreFinderSearchPage>;
    protected getStoresEndpoint(url?: string): string;
}

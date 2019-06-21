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
export declare class OccStoreFinderAdapter implements StoreFinderAdapter {
    protected http: HttpClient;
    protected occEndpoints: OccEndpointsService;
    protected converter: ConverterService;
    constructor(http: HttpClient, occEndpoints: OccEndpointsService, converter: ConverterService);
    search(query: string, searchConfig: StoreFinderSearchConfig, longitudeLatitude?: GeoPoint): Observable<StoreFinderSearchPage>;
    loadCounts(): Observable<StoreCount[]>;
    load(storeId: string): Observable<PointOfService>;
    protected callOccFindStores(query: string, searchConfig: StoreFinderSearchConfig, longitudeLatitude?: GeoPoint): Observable<Occ.StoreFinderSearchPage>;
    protected getStoresEndpoint(url?: string): string;
}

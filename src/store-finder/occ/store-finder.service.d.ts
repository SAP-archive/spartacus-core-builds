import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StoreFinderSearchConfig, LongitudeLatitude } from './../model/index';
import { OccEndpointsService } from '../../occ/services/occ-endpoints.service';
import { StoreFinderSearchPage } from '../../model/store-finder.model';
export declare class OccStoreFinderService {
    private http;
    private occEndpoints;
    constructor(http: HttpClient, occEndpoints: OccEndpointsService);
    findStores(query: string, searchConfig: StoreFinderSearchConfig, longitudeLatitude?: LongitudeLatitude): Observable<any>;
    storesCount(): Observable<any>;
    findStoreById(storeId: string): Observable<any>;
    protected callOccFindStores(query: string, searchConfig: StoreFinderSearchConfig, longitudeLatitude?: LongitudeLatitude): Observable<StoreFinderSearchPage>;
    protected getStoresEndpoint(url?: string): string;
}

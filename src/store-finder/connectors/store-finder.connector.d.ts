import { StoreFinderSearchConfig } from '../model/search-config';
import { Observable } from 'rxjs';
import { StoreFinderAdapter } from './store-finder.adapter';
import { PointOfService } from '../../model/point-of-service.model';
import { GeoPoint } from '../../model/misc.model';
import { StoreFinderSearchPage, StoreCount } from '../../model/store-finder.model';
export declare abstract class StoreFinderConnector {
    protected adapter: StoreFinderAdapter;
    constructor(adapter: StoreFinderAdapter);
    search(query: string, searchConfig: StoreFinderSearchConfig, longitudeLatitude?: GeoPoint): Observable<StoreFinderSearchPage>;
    getCounts(): Observable<StoreCount[]>;
    get(storeId: string): Observable<PointOfService>;
}

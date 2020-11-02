import { Observable } from 'rxjs';
import { GeoPoint } from '../../model/misc.model';
import { PointOfService } from '../../model/point-of-service.model';
import { StoreCount, StoreFinderSearchPage } from '../../model/store-finder.model';
import { SearchConfig } from '../../product/model/search-config';
import { StoreFinderAdapter } from './store-finder.adapter';
import * as ɵngcc0 from '@angular/core';
export declare class StoreFinderConnector {
    protected adapter: StoreFinderAdapter;
    constructor(adapter: StoreFinderAdapter);
    search(query: string, searchConfig: SearchConfig, longitudeLatitude?: GeoPoint, radius?: number): Observable<StoreFinderSearchPage>;
    getCounts(): Observable<StoreCount[]>;
    get(storeId: string): Observable<PointOfService>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<StoreFinderConnector, never>;
}

//# sourceMappingURL=store-finder.connector.d.ts.map
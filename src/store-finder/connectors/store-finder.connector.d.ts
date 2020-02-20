import { StoreFinderSearchConfig } from '../model/search-config';
import { Observable } from 'rxjs';
import { StoreFinderAdapter } from './store-finder.adapter';
import { PointOfService } from '../../model/point-of-service.model';
import { GeoPoint } from '../../model/misc.model';
import { StoreCount, StoreFinderSearchPage } from '../../model/store-finder.model';
import * as ɵngcc0 from '@angular/core';
export declare class StoreFinderConnector {
    protected adapter: StoreFinderAdapter;
    constructor(adapter: StoreFinderAdapter);
    search(query: string, searchConfig: StoreFinderSearchConfig, longitudeLatitude?: GeoPoint): Observable<StoreFinderSearchPage>;
    getCounts(): Observable<StoreCount[]>;
    get(storeId: string): Observable<PointOfService>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<StoreFinderConnector>;
}

//# sourceMappingURL=store-finder.connector.d.ts.map
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLmNvbm5lY3Rvci5kLnRzIiwic291cmNlcyI6WyJzdG9yZS1maW5kZXIuY29ubmVjdG9yLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFNQTs7Ozs7OztBQU1BOyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0b3JlRmluZGVyU2VhcmNoQ29uZmlnIH0gZnJvbSAnLi4vbW9kZWwvc2VhcmNoLWNvbmZpZyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTdG9yZUZpbmRlckFkYXB0ZXIgfSBmcm9tICcuL3N0b3JlLWZpbmRlci5hZGFwdGVyJztcbmltcG9ydCB7IFBvaW50T2ZTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vbW9kZWwvcG9pbnQtb2Ytc2VydmljZS5tb2RlbCc7XG5pbXBvcnQgeyBHZW9Qb2ludCB9IGZyb20gJy4uLy4uL21vZGVsL21pc2MubW9kZWwnO1xuaW1wb3J0IHsgU3RvcmVDb3VudCwgU3RvcmVGaW5kZXJTZWFyY2hQYWdlIH0gZnJvbSAnLi4vLi4vbW9kZWwvc3RvcmUtZmluZGVyLm1vZGVsJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFN0b3JlRmluZGVyQ29ubmVjdG9yIHtcbiAgICBwcm90ZWN0ZWQgYWRhcHRlcjogU3RvcmVGaW5kZXJBZGFwdGVyO1xuICAgIGNvbnN0cnVjdG9yKGFkYXB0ZXI6IFN0b3JlRmluZGVyQWRhcHRlcik7XG4gICAgc2VhcmNoKHF1ZXJ5OiBzdHJpbmcsIHNlYXJjaENvbmZpZzogU3RvcmVGaW5kZXJTZWFyY2hDb25maWcsIGxvbmdpdHVkZUxhdGl0dWRlPzogR2VvUG9pbnQpOiBPYnNlcnZhYmxlPFN0b3JlRmluZGVyU2VhcmNoUGFnZT47XG4gICAgZ2V0Q291bnRzKCk6IE9ic2VydmFibGU8U3RvcmVDb3VudFtdPjtcbiAgICBnZXQoc3RvcmVJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxQb2ludE9mU2VydmljZT47XG59XG4iXX0=
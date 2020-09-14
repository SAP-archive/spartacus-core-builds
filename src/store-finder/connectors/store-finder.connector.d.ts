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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLmNvbm5lY3Rvci5kLnRzIiwic291cmNlcyI6WyJzdG9yZS1maW5kZXIuY29ubmVjdG9yLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFNQTs7Ozs7OztBQU1BIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgR2VvUG9pbnQgfSBmcm9tICcuLi8uLi9tb2RlbC9taXNjLm1vZGVsJztcbmltcG9ydCB7IFBvaW50T2ZTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vbW9kZWwvcG9pbnQtb2Ytc2VydmljZS5tb2RlbCc7XG5pbXBvcnQgeyBTdG9yZUNvdW50LCBTdG9yZUZpbmRlclNlYXJjaFBhZ2UgfSBmcm9tICcuLi8uLi9tb2RlbC9zdG9yZS1maW5kZXIubW9kZWwnO1xuaW1wb3J0IHsgU2VhcmNoQ29uZmlnIH0gZnJvbSAnLi4vLi4vcHJvZHVjdC9tb2RlbC9zZWFyY2gtY29uZmlnJztcbmltcG9ydCB7IFN0b3JlRmluZGVyQWRhcHRlciB9IGZyb20gJy4vc3RvcmUtZmluZGVyLmFkYXB0ZXInO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgU3RvcmVGaW5kZXJDb25uZWN0b3Ige1xuICAgIHByb3RlY3RlZCBhZGFwdGVyOiBTdG9yZUZpbmRlckFkYXB0ZXI7XG4gICAgY29uc3RydWN0b3IoYWRhcHRlcjogU3RvcmVGaW5kZXJBZGFwdGVyKTtcbiAgICBzZWFyY2gocXVlcnk6IHN0cmluZywgc2VhcmNoQ29uZmlnOiBTZWFyY2hDb25maWcsIGxvbmdpdHVkZUxhdGl0dWRlPzogR2VvUG9pbnQsIHJhZGl1cz86IG51bWJlcik6IE9ic2VydmFibGU8U3RvcmVGaW5kZXJTZWFyY2hQYWdlPjtcbiAgICBnZXRDb3VudHMoKTogT2JzZXJ2YWJsZTxTdG9yZUNvdW50W10+O1xuICAgIGdldChzdG9yZUlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFBvaW50T2ZTZXJ2aWNlPjtcbn1cbiJdfQ==
import { Observable } from 'rxjs';
import { ScopedData } from '../../model/scoped-data';
import { OccFieldsService, ScopedDataWithUrl } from './occ-fields.service';
import { HttpClient } from '@angular/common/http';
import * as ɵngcc0 from '@angular/core';
export declare class OccRequestsOptimizerService {
    protected http: HttpClient;
    protected occFields: OccFieldsService;
    constructor(http: HttpClient, occFields: OccFieldsService);
    /**
     * Optimize occ endpoint calls merging requests to the same url by merging field parameters
     *
     * @param scopedDataWithUrls
     * @param dataFactory
     */
    scopedDataLoad<T>(scopedDataWithUrls: ScopedDataWithUrl[], dataFactory?: (url: string) => Observable<T>): ScopedData<T>[];
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OccRequestsOptimizerService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXJlcXVlc3RzLW9wdGltaXplci5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbIm9jYy1yZXF1ZXN0cy1vcHRpbWl6ZXIuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUlBOzs7Ozs7Ozs7Ozs7QUFXQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTY29wZWREYXRhIH0gZnJvbSAnLi4vLi4vbW9kZWwvc2NvcGVkLWRhdGEnO1xuaW1wb3J0IHsgT2NjRmllbGRzU2VydmljZSwgU2NvcGVkRGF0YVdpdGhVcmwgfSBmcm9tICcuL29jYy1maWVsZHMuc2VydmljZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgT2NjUmVxdWVzdHNPcHRpbWl6ZXJTZXJ2aWNlIHtcbiAgICBwcm90ZWN0ZWQgaHR0cDogSHR0cENsaWVudDtcbiAgICBwcm90ZWN0ZWQgb2NjRmllbGRzOiBPY2NGaWVsZHNTZXJ2aWNlO1xuICAgIGNvbnN0cnVjdG9yKGh0dHA6IEh0dHBDbGllbnQsIG9jY0ZpZWxkczogT2NjRmllbGRzU2VydmljZSk7XG4gICAgLyoqXG4gICAgICogT3B0aW1pemUgb2NjIGVuZHBvaW50IGNhbGxzIG1lcmdpbmcgcmVxdWVzdHMgdG8gdGhlIHNhbWUgdXJsIGJ5IG1lcmdpbmcgZmllbGQgcGFyYW1ldGVyc1xuICAgICAqXG4gICAgICogQHBhcmFtIHNjb3BlZERhdGFXaXRoVXJsc1xuICAgICAqIEBwYXJhbSBkYXRhRmFjdG9yeVxuICAgICAqL1xuICAgIHNjb3BlZERhdGFMb2FkPFQ+KHNjb3BlZERhdGFXaXRoVXJsczogU2NvcGVkRGF0YVdpdGhVcmxbXSwgZGF0YUZhY3Rvcnk/OiAodXJsOiBzdHJpbmcpID0+IE9ic2VydmFibGU8VD4pOiBTY29wZWREYXRhPFQ+W107XG59XG4iXX0=
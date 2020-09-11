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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OccRequestsOptimizerService, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXJlcXVlc3RzLW9wdGltaXplci5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbIm9jYy1yZXF1ZXN0cy1vcHRpbWl6ZXIuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUlBOzs7Ozs7Ozs7Ozs7QUFXQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFNjb3BlZERhdGEgfSBmcm9tICcuLi8uLi9tb2RlbC9zY29wZWQtZGF0YSc7XG5pbXBvcnQgeyBPY2NGaWVsZHNTZXJ2aWNlLCBTY29wZWREYXRhV2l0aFVybCB9IGZyb20gJy4vb2NjLWZpZWxkcy5zZXJ2aWNlJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBPY2NSZXF1ZXN0c09wdGltaXplclNlcnZpY2Uge1xuICAgIHByb3RlY3RlZCBodHRwOiBIdHRwQ2xpZW50O1xuICAgIHByb3RlY3RlZCBvY2NGaWVsZHM6IE9jY0ZpZWxkc1NlcnZpY2U7XG4gICAgY29uc3RydWN0b3IoaHR0cDogSHR0cENsaWVudCwgb2NjRmllbGRzOiBPY2NGaWVsZHNTZXJ2aWNlKTtcbiAgICAvKipcbiAgICAgKiBPcHRpbWl6ZSBvY2MgZW5kcG9pbnQgY2FsbHMgbWVyZ2luZyByZXF1ZXN0cyB0byB0aGUgc2FtZSB1cmwgYnkgbWVyZ2luZyBmaWVsZCBwYXJhbWV0ZXJzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2NvcGVkRGF0YVdpdGhVcmxzXG4gICAgICogQHBhcmFtIGRhdGFGYWN0b3J5XG4gICAgICovXG4gICAgc2NvcGVkRGF0YUxvYWQ8VD4oc2NvcGVkRGF0YVdpdGhVcmxzOiBTY29wZWREYXRhV2l0aFVybFtdLCBkYXRhRmFjdG9yeT86ICh1cmw6IHN0cmluZykgPT4gT2JzZXJ2YWJsZTxUPik6IFNjb3BlZERhdGE8VD5bXTtcbn1cbiJdfQ==
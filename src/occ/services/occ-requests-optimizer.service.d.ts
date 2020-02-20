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

//# sourceMappingURL=occ-requests-optimizer.service.d.ts.map
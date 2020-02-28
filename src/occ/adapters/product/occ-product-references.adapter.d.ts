import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductReference } from '../../../model/product.model';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
import { ConverterService } from '../../../util/converter.service';
import { ProductReferencesAdapter } from '../../../product/connectors/references/product-references.adapter';
import * as ɵngcc0 from '@angular/core';
export declare class OccProductReferencesAdapter implements ProductReferencesAdapter {
    protected http: HttpClient;
    protected occEndpoints: OccEndpointsService;
    protected converter: ConverterService;
    constructor(http: HttpClient, occEndpoints: OccEndpointsService, converter: ConverterService);
    load(productCode: string, referenceType?: string, pageSize?: number): Observable<ProductReference[]>;
    protected getEndpoint(code: string, reference?: string, pageSize?: number): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OccProductReferencesAdapter>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<OccProductReferencesAdapter>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXByb2R1Y3QtcmVmZXJlbmNlcy5hZGFwdGVyLmQudHMiLCJzb3VyY2VzIjpbIm9jYy1wcm9kdWN0LXJlZmVyZW5jZXMuYWRhcHRlci5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBTUE7Ozs7Ozs7OztBQU9BOyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBQcm9kdWN0UmVmZXJlbmNlIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvcHJvZHVjdC5tb2RlbCc7XG5pbXBvcnQgeyBPY2NFbmRwb2ludHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvb2NjLWVuZHBvaW50cy5zZXJ2aWNlJztcbmltcG9ydCB7IENvbnZlcnRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi91dGlsL2NvbnZlcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7IFByb2R1Y3RSZWZlcmVuY2VzQWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL3Byb2R1Y3QvY29ubmVjdG9ycy9yZWZlcmVuY2VzL3Byb2R1Y3QtcmVmZXJlbmNlcy5hZGFwdGVyJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE9jY1Byb2R1Y3RSZWZlcmVuY2VzQWRhcHRlciBpbXBsZW1lbnRzIFByb2R1Y3RSZWZlcmVuY2VzQWRhcHRlciB7XG4gICAgcHJvdGVjdGVkIGh0dHA6IEh0dHBDbGllbnQ7XG4gICAgcHJvdGVjdGVkIG9jY0VuZHBvaW50czogT2NjRW5kcG9pbnRzU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgY29udmVydGVyOiBDb252ZXJ0ZXJTZXJ2aWNlO1xuICAgIGNvbnN0cnVjdG9yKGh0dHA6IEh0dHBDbGllbnQsIG9jY0VuZHBvaW50czogT2NjRW5kcG9pbnRzU2VydmljZSwgY29udmVydGVyOiBDb252ZXJ0ZXJTZXJ2aWNlKTtcbiAgICBsb2FkKHByb2R1Y3RDb2RlOiBzdHJpbmcsIHJlZmVyZW5jZVR5cGU/OiBzdHJpbmcsIHBhZ2VTaXplPzogbnVtYmVyKTogT2JzZXJ2YWJsZTxQcm9kdWN0UmVmZXJlbmNlW10+O1xuICAgIHByb3RlY3RlZCBnZXRFbmRwb2ludChjb2RlOiBzdHJpbmcsIHJlZmVyZW5jZT86IHN0cmluZywgcGFnZVNpemU/OiBudW1iZXIpOiBzdHJpbmc7XG59XG4iXX0=
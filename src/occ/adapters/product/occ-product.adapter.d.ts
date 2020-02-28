import { ProductAdapter } from '../../../product/connectors/product/product.adapter';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
import { ConverterService } from '../../../util/converter.service';
import { Product } from '../../../model/product.model';
import { ScopedProductData } from '../../../product/connectors/product/scoped-product-data';
import { OccRequestsOptimizerService } from '../../services/occ-requests-optimizer.service';
import * as ɵngcc0 from '@angular/core';
export declare class OccProductAdapter implements ProductAdapter {
    protected http: HttpClient;
    protected occEndpoints: OccEndpointsService;
    protected converter: ConverterService;
    protected requestsOptimizer: OccRequestsOptimizerService;
    constructor(http: HttpClient, occEndpoints: OccEndpointsService, converter: ConverterService, requestsOptimizer: OccRequestsOptimizerService);
    load(productCode: string, scope?: string): Observable<Product>;
    loadMany(products: ScopedProductData[]): ScopedProductData[];
    protected getEndpoint(code: string, scope?: string): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OccProductAdapter>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<OccProductAdapter>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXByb2R1Y3QuYWRhcHRlci5kLnRzIiwic291cmNlcyI6WyJvY2MtcHJvZHVjdC5hZGFwdGVyLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztBQVFBOzs7Ozs7Ozs7OztBQVNBOyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb2R1Y3RBZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vcHJvZHVjdC9jb25uZWN0b3JzL3Byb2R1Y3QvcHJvZHVjdC5hZGFwdGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPY2NFbmRwb2ludHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvb2NjLWVuZHBvaW50cy5zZXJ2aWNlJztcbmltcG9ydCB7IENvbnZlcnRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi91dGlsL2NvbnZlcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9wcm9kdWN0Lm1vZGVsJztcbmltcG9ydCB7IFNjb3BlZFByb2R1Y3REYXRhIH0gZnJvbSAnLi4vLi4vLi4vcHJvZHVjdC9jb25uZWN0b3JzL3Byb2R1Y3Qvc2NvcGVkLXByb2R1Y3QtZGF0YSc7XG5pbXBvcnQgeyBPY2NSZXF1ZXN0c09wdGltaXplclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9vY2MtcmVxdWVzdHMtb3B0aW1pemVyLnNlcnZpY2UnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgT2NjUHJvZHVjdEFkYXB0ZXIgaW1wbGVtZW50cyBQcm9kdWN0QWRhcHRlciB7XG4gICAgcHJvdGVjdGVkIGh0dHA6IEh0dHBDbGllbnQ7XG4gICAgcHJvdGVjdGVkIG9jY0VuZHBvaW50czogT2NjRW5kcG9pbnRzU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgY29udmVydGVyOiBDb252ZXJ0ZXJTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCByZXF1ZXN0c09wdGltaXplcjogT2NjUmVxdWVzdHNPcHRpbWl6ZXJTZXJ2aWNlO1xuICAgIGNvbnN0cnVjdG9yKGh0dHA6IEh0dHBDbGllbnQsIG9jY0VuZHBvaW50czogT2NjRW5kcG9pbnRzU2VydmljZSwgY29udmVydGVyOiBDb252ZXJ0ZXJTZXJ2aWNlLCByZXF1ZXN0c09wdGltaXplcjogT2NjUmVxdWVzdHNPcHRpbWl6ZXJTZXJ2aWNlKTtcbiAgICBsb2FkKHByb2R1Y3RDb2RlOiBzdHJpbmcsIHNjb3BlPzogc3RyaW5nKTogT2JzZXJ2YWJsZTxQcm9kdWN0PjtcbiAgICBsb2FkTWFueShwcm9kdWN0czogU2NvcGVkUHJvZHVjdERhdGFbXSk6IFNjb3BlZFByb2R1Y3REYXRhW107XG4gICAgcHJvdGVjdGVkIGdldEVuZHBvaW50KGNvZGU6IHN0cmluZywgc2NvcGU/OiBzdHJpbmcpOiBzdHJpbmc7XG59XG4iXX0=
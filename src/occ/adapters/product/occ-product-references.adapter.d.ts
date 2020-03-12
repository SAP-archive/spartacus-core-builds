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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXByb2R1Y3QtcmVmZXJlbmNlcy5hZGFwdGVyLmQudHMiLCJzb3VyY2VzIjpbIm9jYy1wcm9kdWN0LXJlZmVyZW5jZXMuYWRhcHRlci5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBTUE7Ozs7Ozs7OztBQU9BIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFByb2R1Y3RSZWZlcmVuY2UgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9wcm9kdWN0Lm1vZGVsJztcbmltcG9ydCB7IE9jY0VuZHBvaW50c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9vY2MtZW5kcG9pbnRzLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29udmVydGVyU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvY29udmVydGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgUHJvZHVjdFJlZmVyZW5jZXNBZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vcHJvZHVjdC9jb25uZWN0b3JzL3JlZmVyZW5jZXMvcHJvZHVjdC1yZWZlcmVuY2VzLmFkYXB0ZXInO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgT2NjUHJvZHVjdFJlZmVyZW5jZXNBZGFwdGVyIGltcGxlbWVudHMgUHJvZHVjdFJlZmVyZW5jZXNBZGFwdGVyIHtcbiAgICBwcm90ZWN0ZWQgaHR0cDogSHR0cENsaWVudDtcbiAgICBwcm90ZWN0ZWQgb2NjRW5kcG9pbnRzOiBPY2NFbmRwb2ludHNTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBjb252ZXJ0ZXI6IENvbnZlcnRlclNlcnZpY2U7XG4gICAgY29uc3RydWN0b3IoaHR0cDogSHR0cENsaWVudCwgb2NjRW5kcG9pbnRzOiBPY2NFbmRwb2ludHNTZXJ2aWNlLCBjb252ZXJ0ZXI6IENvbnZlcnRlclNlcnZpY2UpO1xuICAgIGxvYWQocHJvZHVjdENvZGU6IHN0cmluZywgcmVmZXJlbmNlVHlwZT86IHN0cmluZywgcGFnZVNpemU/OiBudW1iZXIpOiBPYnNlcnZhYmxlPFByb2R1Y3RSZWZlcmVuY2VbXT47XG4gICAgcHJvdGVjdGVkIGdldEVuZHBvaW50KGNvZGU6IHN0cmluZywgcmVmZXJlbmNlPzogc3RyaW5nLCBwYWdlU2l6ZT86IG51bWJlcik6IHN0cmluZztcbn1cbiJdfQ==
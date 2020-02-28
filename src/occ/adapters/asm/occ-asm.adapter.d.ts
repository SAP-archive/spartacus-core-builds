import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AsmConfig } from '../../../asm/config/asm-config';
import { AsmAdapter } from '../../../asm/connectors/asm.adapter';
import { CustomerSearchOptions, CustomerSearchPage } from '../../../asm/models/asm.models';
import { BaseSiteService } from '../../../site-context/facade/base-site.service';
import { ConverterService } from '../../../util/converter.service';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
import * as ɵngcc0 from '@angular/core';
export declare class OccAsmAdapter implements AsmAdapter {
    protected http: HttpClient;
    protected occEndpointsService: OccEndpointsService;
    protected converterService: ConverterService;
    protected config: AsmConfig;
    protected baseSiteService: BaseSiteService;
    private activeBaseSite;
    constructor(http: HttpClient, occEndpointsService: OccEndpointsService, converterService: ConverterService, config: AsmConfig, baseSiteService: BaseSiteService);
    customerSearch(options: CustomerSearchOptions): Observable<CustomerSearchPage>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OccAsmAdapter>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<OccAsmAdapter>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWFzbS5hZGFwdGVyLmQudHMiLCJzb3VyY2VzIjpbIm9jYy1hc20uYWRhcHRlci5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7QUFRQTs7Ozs7Ozs7Ozs7QUFTQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQXNtQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vYXNtL2NvbmZpZy9hc20tY29uZmlnJztcbmltcG9ydCB7IEFzbUFkYXB0ZXIgfSBmcm9tICcuLi8uLi8uLi9hc20vY29ubmVjdG9ycy9hc20uYWRhcHRlcic7XG5pbXBvcnQgeyBDdXN0b21lclNlYXJjaE9wdGlvbnMsIEN1c3RvbWVyU2VhcmNoUGFnZSB9IGZyb20gJy4uLy4uLy4uL2FzbS9tb2RlbHMvYXNtLm1vZGVscyc7XG5pbXBvcnQgeyBCYXNlU2l0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zaXRlLWNvbnRleHQvZmFjYWRlL2Jhc2Utc2l0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IENvbnZlcnRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi91dGlsL2NvbnZlcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7IE9jY0VuZHBvaW50c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9vY2MtZW5kcG9pbnRzLnNlcnZpY2UnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgT2NjQXNtQWRhcHRlciBpbXBsZW1lbnRzIEFzbUFkYXB0ZXIge1xuICAgIHByb3RlY3RlZCBodHRwOiBIdHRwQ2xpZW50O1xuICAgIHByb3RlY3RlZCBvY2NFbmRwb2ludHNTZXJ2aWNlOiBPY2NFbmRwb2ludHNTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBjb252ZXJ0ZXJTZXJ2aWNlOiBDb252ZXJ0ZXJTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBjb25maWc6IEFzbUNvbmZpZztcbiAgICBwcm90ZWN0ZWQgYmFzZVNpdGVTZXJ2aWNlOiBCYXNlU2l0ZVNlcnZpY2U7XG4gICAgcHJpdmF0ZSBhY3RpdmVCYXNlU2l0ZTtcbiAgICBjb25zdHJ1Y3RvcihodHRwOiBIdHRwQ2xpZW50LCBvY2NFbmRwb2ludHNTZXJ2aWNlOiBPY2NFbmRwb2ludHNTZXJ2aWNlLCBjb252ZXJ0ZXJTZXJ2aWNlOiBDb252ZXJ0ZXJTZXJ2aWNlLCBjb25maWc6IEFzbUNvbmZpZywgYmFzZVNpdGVTZXJ2aWNlOiBCYXNlU2l0ZVNlcnZpY2UpO1xuICAgIGN1c3RvbWVyU2VhcmNoKG9wdGlvbnM6IEN1c3RvbWVyU2VhcmNoT3B0aW9ucyk6IE9ic2VydmFibGU8Q3VzdG9tZXJTZWFyY2hQYWdlPjtcbn1cbiJdfQ==
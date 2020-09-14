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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OccAsmAdapter, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<OccAsmAdapter>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWFzbS5hZGFwdGVyLmQudHMiLCJzb3VyY2VzIjpbIm9jYy1hc20uYWRhcHRlci5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7QUFRQTs7Ozs7Ozs7Ozs7QUFTQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBBc21Db25maWcgfSBmcm9tICcuLi8uLi8uLi9hc20vY29uZmlnL2FzbS1jb25maWcnO1xuaW1wb3J0IHsgQXNtQWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL2FzbS9jb25uZWN0b3JzL2FzbS5hZGFwdGVyJztcbmltcG9ydCB7IEN1c3RvbWVyU2VhcmNoT3B0aW9ucywgQ3VzdG9tZXJTZWFyY2hQYWdlIH0gZnJvbSAnLi4vLi4vLi4vYXNtL21vZGVscy9hc20ubW9kZWxzJztcbmltcG9ydCB7IEJhc2VTaXRlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NpdGUtY29udGV4dC9mYWNhZGUvYmFzZS1zaXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29udmVydGVyU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvY29udmVydGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgT2NjRW5kcG9pbnRzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL29jYy1lbmRwb2ludHMuc2VydmljZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBPY2NBc21BZGFwdGVyIGltcGxlbWVudHMgQXNtQWRhcHRlciB7XG4gICAgcHJvdGVjdGVkIGh0dHA6IEh0dHBDbGllbnQ7XG4gICAgcHJvdGVjdGVkIG9jY0VuZHBvaW50c1NlcnZpY2U6IE9jY0VuZHBvaW50c1NlcnZpY2U7XG4gICAgcHJvdGVjdGVkIGNvbnZlcnRlclNlcnZpY2U6IENvbnZlcnRlclNlcnZpY2U7XG4gICAgcHJvdGVjdGVkIGNvbmZpZzogQXNtQ29uZmlnO1xuICAgIHByb3RlY3RlZCBiYXNlU2l0ZVNlcnZpY2U6IEJhc2VTaXRlU2VydmljZTtcbiAgICBwcml2YXRlIGFjdGl2ZUJhc2VTaXRlO1xuICAgIGNvbnN0cnVjdG9yKGh0dHA6IEh0dHBDbGllbnQsIG9jY0VuZHBvaW50c1NlcnZpY2U6IE9jY0VuZHBvaW50c1NlcnZpY2UsIGNvbnZlcnRlclNlcnZpY2U6IENvbnZlcnRlclNlcnZpY2UsIGNvbmZpZzogQXNtQ29uZmlnLCBiYXNlU2l0ZVNlcnZpY2U6IEJhc2VTaXRlU2VydmljZSk7XG4gICAgY3VzdG9tZXJTZWFyY2gob3B0aW9uczogQ3VzdG9tZXJTZWFyY2hPcHRpb25zKTogT2JzZXJ2YWJsZTxDdXN0b21lclNlYXJjaFBhZ2U+O1xufVxuIl19
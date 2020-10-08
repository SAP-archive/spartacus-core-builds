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

//# sourceMappingURL=occ-asm.adapter.d.ts.map
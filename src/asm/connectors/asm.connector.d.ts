import { Observable } from 'rxjs';
import { CustomerSearchOptions, CustomerSearchPage } from '../models/asm.models';
import { AsmAdapter } from './asm.adapter';
import * as ɵngcc0 from '@angular/core';
export declare class AsmConnector {
    protected asmAdapter: AsmAdapter;
    constructor(asmAdapter: AsmAdapter);
    customerSearch(options: CustomerSearchOptions): Observable<CustomerSearchPage>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AsmConnector>;
}

//# sourceMappingURL=asm.connector.d.ts.map
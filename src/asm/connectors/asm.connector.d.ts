import { Observable } from 'rxjs';
import { CustomerSearchOptions, CustomerSearchPage } from '../models/asm.models';
import { AsmAdapter } from './asm.adapter';
export declare class AsmConnector {
    protected asmAdapter: AsmAdapter;
    constructor(asmAdapter: AsmAdapter);
    customerSearch(options: CustomerSearchOptions): Observable<CustomerSearchPage>;
}

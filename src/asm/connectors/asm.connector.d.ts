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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNtLmNvbm5lY3Rvci5kLnRzIiwic291cmNlcyI6WyJhc20uY29ubmVjdG9yLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFHQTs7Ozs7QUFJQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDdXN0b21lclNlYXJjaE9wdGlvbnMsIEN1c3RvbWVyU2VhcmNoUGFnZSB9IGZyb20gJy4uL21vZGVscy9hc20ubW9kZWxzJztcbmltcG9ydCB7IEFzbUFkYXB0ZXIgfSBmcm9tICcuL2FzbS5hZGFwdGVyJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEFzbUNvbm5lY3RvciB7XG4gICAgcHJvdGVjdGVkIGFzbUFkYXB0ZXI6IEFzbUFkYXB0ZXI7XG4gICAgY29uc3RydWN0b3IoYXNtQWRhcHRlcjogQXNtQWRhcHRlcik7XG4gICAgY3VzdG9tZXJTZWFyY2gob3B0aW9uczogQ3VzdG9tZXJTZWFyY2hPcHRpb25zKTogT2JzZXJ2YWJsZTxDdXN0b21lclNlYXJjaFBhZ2U+O1xufVxuIl19
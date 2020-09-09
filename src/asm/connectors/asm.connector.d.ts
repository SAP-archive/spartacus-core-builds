import { Observable } from 'rxjs';
import { CustomerSearchOptions, CustomerSearchPage } from '../models/asm.models';
import { AsmAdapter } from './asm.adapter';
import * as ɵngcc0 from '@angular/core';
export declare class AsmConnector {
    protected asmAdapter: AsmAdapter;
    constructor(asmAdapter: AsmAdapter);
    customerSearch(options: CustomerSearchOptions): Observable<CustomerSearchPage>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AsmConnector, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNtLmNvbm5lY3Rvci5kLnRzIiwic291cmNlcyI6WyJhc20uY29ubmVjdG9yLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFHQTs7Ozs7QUFJQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEN1c3RvbWVyU2VhcmNoT3B0aW9ucywgQ3VzdG9tZXJTZWFyY2hQYWdlIH0gZnJvbSAnLi4vbW9kZWxzL2FzbS5tb2RlbHMnO1xuaW1wb3J0IHsgQXNtQWRhcHRlciB9IGZyb20gJy4vYXNtLmFkYXB0ZXInO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQXNtQ29ubmVjdG9yIHtcbiAgICBwcm90ZWN0ZWQgYXNtQWRhcHRlcjogQXNtQWRhcHRlcjtcbiAgICBjb25zdHJ1Y3Rvcihhc21BZGFwdGVyOiBBc21BZGFwdGVyKTtcbiAgICBjdXN0b21lclNlYXJjaChvcHRpb25zOiBDdXN0b21lclNlYXJjaE9wdGlvbnMpOiBPYnNlcnZhYmxlPEN1c3RvbWVyU2VhcmNoUGFnZT47XG59XG4iXX0=
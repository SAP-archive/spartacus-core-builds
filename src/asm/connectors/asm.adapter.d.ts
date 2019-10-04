import { Observable } from 'rxjs';
import { CustomerSearchOptions, CustomerSearchPage } from '../models/asm.models';
export declare abstract class AsmAdapter {
    /**
     * Abstract function used to search for customers.
     */
    abstract customerSearch(options: CustomerSearchOptions): Observable<CustomerSearchPage>;
}

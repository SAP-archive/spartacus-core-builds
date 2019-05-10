import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromStore from '../store/index';
import { Product } from '../../model/product.model';
export declare class ProductService {
    private store;
    constructor(store: Store<fromStore.StateWithProduct>);
    private products;
    /**
     * Returns the product observable. The product will be loaded
     * whenever there's no value observed.
     *
     * The underlying product loader ensures that the product is
     * only loaded once, even in case of parallel observers.
     */
    get(productCode: string): Observable<Product>;
    /**
     * Returns boolean observable for product's loading state
     */
    isLoading(productCode: string): Observable<boolean>;
    /**
     * Returns boolean observable for product's load success state
     */
    isSuccess(productCode: string): Observable<boolean>;
    /**
     * Returns boolean observable for product's load error state
     */
    hasError(productCode: string): Observable<boolean>;
    /**
     * Reloads the product. The product is loaded implicetly
     * whenever selected by the `get`, but in some cases an
     * explicit reload might be needed.
     */
    reload(productCode: string): void;
}

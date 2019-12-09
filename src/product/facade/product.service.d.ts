import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '../../model/product.model';
import { StateWithProduct } from '../store/product-state';
import { LoadingScopesService } from '../../occ/services/loading-scopes.service';
export declare class ProductService {
    protected store: Store<StateWithProduct>;
    protected loadingScopes?: LoadingScopesService;
    constructor(store: Store<StateWithProduct>, loadingScopes: LoadingScopesService);
    /**
     * @deprecated since 1.4
     */
    constructor(store: Store<StateWithProduct>);
    private products;
    /**
     * Returns the product observable. The product will be loaded
     * whenever there's no value observed.
     *
     * The underlying product loader ensures that the product is
     * only loaded once, even in case of parallel observers.
     *
     * You should provide product data scope you are interested in to not load all
     * the data if not needed. You can provide more than one scope.
     *
     * @param productCode Product code to load
     * @param scopes Scope or scopes of the product data
     */
    get(productCode: string, scopes?: string[] | string): Observable<Product>;
    private initProductScopes;
    /**
     * Creates observable for providing specified product data for the scope
     *
     * @param productCode
     * @param scope
     */
    private getProductForScope;
    /**
     * Returns boolean observable for product's loading state
     */
    isLoading(productCode: string, scope?: string): Observable<boolean>;
    /**
     * Returns boolean observable for product's load success state
     */
    isSuccess(productCode: string, scope?: string): Observable<boolean>;
    /**
     * Returns boolean observable for product's load error state
     */
    hasError(productCode: string, scope?: string): Observable<boolean>;
    /**
     * Reloads the product. The product is loaded implicetly
     * whenever selected by the `get`, but in some cases an
     * explicit reload might be needed.
     */
    reload(productCode: string, scope?: string): void;
}

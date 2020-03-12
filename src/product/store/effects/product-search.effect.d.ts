import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { ProductSearchConnector } from '../../connectors/search/product-search.connector';
import { ProductActions } from '../actions/index';
import * as ɵngcc0 from '@angular/core';
export declare class ProductsSearchEffects {
    private actions$;
    private productSearchConnector;
    searchProducts$: Observable<ProductActions.SearchProductsSuccess | ProductActions.SearchProductsFail>;
    getProductSuggestions$: Observable<ProductActions.GetProductSuggestionsSuccess | ProductActions.GetProductSuggestionsFail>;
    constructor(actions$: Actions, productSearchConnector: ProductSearchConnector);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ProductsSearchEffects>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<ProductsSearchEffects>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1zZWFyY2guZWZmZWN0LmQudHMiLCJzb3VyY2VzIjpbInByb2R1Y3Qtc2VhcmNoLmVmZmVjdC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUlBOzs7Ozs7OztBQU1BIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9ucyB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUHJvZHVjdFNlYXJjaENvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvc2VhcmNoL3Byb2R1Y3Qtc2VhcmNoLmNvbm5lY3Rvcic7XG5pbXBvcnQgeyBQcm9kdWN0QWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgUHJvZHVjdHNTZWFyY2hFZmZlY3RzIHtcbiAgICBwcml2YXRlIGFjdGlvbnMkO1xuICAgIHByaXZhdGUgcHJvZHVjdFNlYXJjaENvbm5lY3RvcjtcbiAgICBzZWFyY2hQcm9kdWN0cyQ6IE9ic2VydmFibGU8UHJvZHVjdEFjdGlvbnMuU2VhcmNoUHJvZHVjdHNTdWNjZXNzIHwgUHJvZHVjdEFjdGlvbnMuU2VhcmNoUHJvZHVjdHNGYWlsPjtcbiAgICBnZXRQcm9kdWN0U3VnZ2VzdGlvbnMkOiBPYnNlcnZhYmxlPFByb2R1Y3RBY3Rpb25zLkdldFByb2R1Y3RTdWdnZXN0aW9uc1N1Y2Nlc3MgfCBQcm9kdWN0QWN0aW9ucy5HZXRQcm9kdWN0U3VnZ2VzdGlvbnNGYWlsPjtcbiAgICBjb25zdHJ1Y3RvcihhY3Rpb25zJDogQWN0aW9ucywgcHJvZHVjdFNlYXJjaENvbm5lY3RvcjogUHJvZHVjdFNlYXJjaENvbm5lY3Rvcik7XG59XG4iXX0=
import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { ProductReferencesConnector } from '../../connectors/references/product-references.connector';
import { ProductActions } from '../actions/index';
import * as ɵngcc0 from '@angular/core';
export declare class ProductReferencesEffects {
    private actions$;
    private productReferencesConnector;
    loadProductReferences$: Observable<ProductActions.LoadProductReferencesSuccess | ProductActions.LoadProductReferencesFail>;
    constructor(actions$: Actions, productReferencesConnector: ProductReferencesConnector);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ProductReferencesEffects>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<ProductReferencesEffects>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZWZlcmVuY2VzLmVmZmVjdC5kLnRzIiwic291cmNlcyI6WyJwcm9kdWN0LXJlZmVyZW5jZXMuZWZmZWN0LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FBSUE7Ozs7Ozs7QUFLQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbnMgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFByb2R1Y3RSZWZlcmVuY2VzQ29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9yZWZlcmVuY2VzL3Byb2R1Y3QtcmVmZXJlbmNlcy5jb25uZWN0b3InO1xuaW1wb3J0IHsgUHJvZHVjdEFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFByb2R1Y3RSZWZlcmVuY2VzRWZmZWN0cyB7XG4gICAgcHJpdmF0ZSBhY3Rpb25zJDtcbiAgICBwcml2YXRlIHByb2R1Y3RSZWZlcmVuY2VzQ29ubmVjdG9yO1xuICAgIGxvYWRQcm9kdWN0UmVmZXJlbmNlcyQ6IE9ic2VydmFibGU8UHJvZHVjdEFjdGlvbnMuTG9hZFByb2R1Y3RSZWZlcmVuY2VzU3VjY2VzcyB8IFByb2R1Y3RBY3Rpb25zLkxvYWRQcm9kdWN0UmVmZXJlbmNlc0ZhaWw+O1xuICAgIGNvbnN0cnVjdG9yKGFjdGlvbnMkOiBBY3Rpb25zLCBwcm9kdWN0UmVmZXJlbmNlc0Nvbm5lY3RvcjogUHJvZHVjdFJlZmVyZW5jZXNDb25uZWN0b3IpO1xufVxuIl19
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

//# sourceMappingURL=product-references.effect.d.ts.map
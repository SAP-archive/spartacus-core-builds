import { Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserActions } from '../actions/index';
import { UserInterestsConnector } from '../../connectors/interests/user-interests.connector';
import * as ɵngcc0 from '@angular/core';
export declare class ProductInterestsEffect {
    private actions$;
    private userInterestsConnector;
    constructor(actions$: Actions, userInterestsConnector: UserInterestsConnector);
    loadProductInteres$: Observable<UserActions.ProductInterestsAction>;
    removeProductInterest$: Observable<Action>;
    addProductInterest$: Observable<Action>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ProductInterestsEffect, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<ProductInterestsEffect>;
}

//# sourceMappingURL=product-interests.effect.d.ts.map
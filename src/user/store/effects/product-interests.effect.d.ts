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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1pbnRlcmVzdHMuZWZmZWN0LmQudHMiLCJzb3VyY2VzIjpbInByb2R1Y3QtaW50ZXJlc3RzLmVmZmVjdC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFLQTs7Ozs7Ozs7O0FBT0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb25zIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBVc2VyQWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgVXNlckludGVyZXN0c0Nvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvaW50ZXJlc3RzL3VzZXItaW50ZXJlc3RzLmNvbm5lY3Rvcic7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBQcm9kdWN0SW50ZXJlc3RzRWZmZWN0IHtcbiAgICBwcml2YXRlIGFjdGlvbnMkO1xuICAgIHByaXZhdGUgdXNlckludGVyZXN0c0Nvbm5lY3RvcjtcbiAgICBjb25zdHJ1Y3RvcihhY3Rpb25zJDogQWN0aW9ucywgdXNlckludGVyZXN0c0Nvbm5lY3RvcjogVXNlckludGVyZXN0c0Nvbm5lY3Rvcik7XG4gICAgbG9hZFByb2R1Y3RJbnRlcmVzJDogT2JzZXJ2YWJsZTxVc2VyQWN0aW9ucy5Qcm9kdWN0SW50ZXJlc3RzQWN0aW9uPjtcbiAgICByZW1vdmVQcm9kdWN0SW50ZXJlc3QkOiBPYnNlcnZhYmxlPEFjdGlvbj47XG4gICAgYWRkUHJvZHVjdEludGVyZXN0JDogT2JzZXJ2YWJsZTxBY3Rpb24+O1xufVxuIl19
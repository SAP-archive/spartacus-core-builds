import { Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserPaymentConnector } from '../../connectors/payment/user-payment.connector';
import * as ɵngcc0 from '@angular/core';
export declare class UserPaymentMethodsEffects {
    private actions$;
    private userPaymentMethodConnector;
    loadUserPaymentMethods$: Observable<Action>;
    setDefaultUserPaymentMethod$: Observable<Action>;
    deleteUserPaymentMethod$: Observable<Action>;
    constructor(actions$: Actions, userPaymentMethodConnector: UserPaymentConnector);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<UserPaymentMethodsEffects>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<UserPaymentMethodsEffects>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1tZXRob2RzLmVmZmVjdC5kLnRzIiwic291cmNlcyI6WyJwYXltZW50LW1ldGhvZHMuZWZmZWN0LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FBSUE7Ozs7Ozs7OztBQU9BIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9ucyB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgVXNlclBheW1lbnRDb25uZWN0b3IgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL3BheW1lbnQvdXNlci1wYXltZW50LmNvbm5lY3Rvcic7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBVc2VyUGF5bWVudE1ldGhvZHNFZmZlY3RzIHtcbiAgICBwcml2YXRlIGFjdGlvbnMkO1xuICAgIHByaXZhdGUgdXNlclBheW1lbnRNZXRob2RDb25uZWN0b3I7XG4gICAgbG9hZFVzZXJQYXltZW50TWV0aG9kcyQ6IE9ic2VydmFibGU8QWN0aW9uPjtcbiAgICBzZXREZWZhdWx0VXNlclBheW1lbnRNZXRob2QkOiBPYnNlcnZhYmxlPEFjdGlvbj47XG4gICAgZGVsZXRlVXNlclBheW1lbnRNZXRob2QkOiBPYnNlcnZhYmxlPEFjdGlvbj47XG4gICAgY29uc3RydWN0b3IoYWN0aW9ucyQ6IEFjdGlvbnMsIHVzZXJQYXltZW50TWV0aG9kQ29ubmVjdG9yOiBVc2VyUGF5bWVudENvbm5lY3Rvcik7XG59XG4iXX0=
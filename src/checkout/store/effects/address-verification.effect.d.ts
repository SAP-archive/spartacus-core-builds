import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { UserAddressConnector } from '../../../user/connectors/address/user-address.connector';
import { CheckoutActions } from '../actions/index';
import * as ɵngcc0 from '@angular/core';
export declare class AddressVerificationEffect {
    private actions$;
    private userAddressConnector;
    verifyAddress$: Observable<CheckoutActions.VerifyAddressSuccess | CheckoutActions.VerifyAddressFail>;
    constructor(actions$: Actions, userAddressConnector: UserAddressConnector);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AddressVerificationEffect, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<AddressVerificationEffect>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy12ZXJpZmljYXRpb24uZWZmZWN0LmQudHMiLCJzb3VyY2VzIjpbImFkZHJlc3MtdmVyaWZpY2F0aW9uLmVmZmVjdC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUlBOzs7Ozs7O0FBS0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb25zIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBVc2VyQWRkcmVzc0Nvbm5lY3RvciB9IGZyb20gJy4uLy4uLy4uL3VzZXIvY29ubmVjdG9ycy9hZGRyZXNzL3VzZXItYWRkcmVzcy5jb25uZWN0b3InO1xuaW1wb3J0IHsgQ2hlY2tvdXRBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBBZGRyZXNzVmVyaWZpY2F0aW9uRWZmZWN0IHtcbiAgICBwcml2YXRlIGFjdGlvbnMkO1xuICAgIHByaXZhdGUgdXNlckFkZHJlc3NDb25uZWN0b3I7XG4gICAgdmVyaWZ5QWRkcmVzcyQ6IE9ic2VydmFibGU8Q2hlY2tvdXRBY3Rpb25zLlZlcmlmeUFkZHJlc3NTdWNjZXNzIHwgQ2hlY2tvdXRBY3Rpb25zLlZlcmlmeUFkZHJlc3NGYWlsPjtcbiAgICBjb25zdHJ1Y3RvcihhY3Rpb25zJDogQWN0aW9ucywgdXNlckFkZHJlc3NDb25uZWN0b3I6IFVzZXJBZGRyZXNzQ29ubmVjdG9yKTtcbn1cbiJdfQ==
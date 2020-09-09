import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { CheckoutPaymentConnector } from '../../connectors/payment/checkout-payment.connector';
import { CheckoutActions } from '../actions/index';
import * as ɵngcc0 from '@angular/core';
export declare class CardTypesEffects {
    private actions$;
    private checkoutPaymentConnector;
    loadCardTypes$: Observable<CheckoutActions.LoadCardTypesSuccess | CheckoutActions.LoadCardTypesFail>;
    constructor(actions$: Actions, checkoutPaymentConnector: CheckoutPaymentConnector);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CardTypesEffects, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<CardTypesEffects>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC10eXBlcy5lZmZlY3QuZC50cyIsInNvdXJjZXMiOlsiY2FyZC10eXBlcy5lZmZlY3QuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUFJQTs7Ozs7OztBQUtBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9ucyB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ2hlY2tvdXRQYXltZW50Q29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9wYXltZW50L2NoZWNrb3V0LXBheW1lbnQuY29ubmVjdG9yJztcbmltcG9ydCB7IENoZWNrb3V0QWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ2FyZFR5cGVzRWZmZWN0cyB7XG4gICAgcHJpdmF0ZSBhY3Rpb25zJDtcbiAgICBwcml2YXRlIGNoZWNrb3V0UGF5bWVudENvbm5lY3RvcjtcbiAgICBsb2FkQ2FyZFR5cGVzJDogT2JzZXJ2YWJsZTxDaGVja291dEFjdGlvbnMuTG9hZENhcmRUeXBlc1N1Y2Nlc3MgfCBDaGVja291dEFjdGlvbnMuTG9hZENhcmRUeXBlc0ZhaWw+O1xuICAgIGNvbnN0cnVjdG9yKGFjdGlvbnMkOiBBY3Rpb25zLCBjaGVja291dFBheW1lbnRDb25uZWN0b3I6IENoZWNrb3V0UGF5bWVudENvbm5lY3Rvcik7XG59XG4iXX0=
import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { CartEntryConnector } from '../../connectors/entry/cart-entry.connector';
import * as DeprecatedCartActions from '../actions/cart.action';
import { CartActions } from '../actions/index';
/**
 * @deprecated since version 1.5
 *
 * spartacus ngrx effects will no longer be a part of public API
 *
 * TODO(issue:#4507)
 */
import * as ɵngcc0 from '@angular/core';
export declare class CartEntryEffects {
    private actions$;
    private cartEntryConnector;
    private contextChange$;
    addEntry$: Observable<CartActions.CartAddEntrySuccess | CartActions.CartAddEntryFail | DeprecatedCartActions.LoadCart | CartActions.CartProcessesDecrement>;
    removeEntry$: Observable<CartActions.CartRemoveEntrySuccess | CartActions.CartRemoveEntryFail | CartActions.CartProcessesDecrement | DeprecatedCartActions.LoadCart>;
    updateEntry$: Observable<CartActions.CartUpdateEntrySuccess | CartActions.CartUpdateEntryFail | CartActions.CartProcessesDecrement | DeprecatedCartActions.LoadCart>;
    constructor(actions$: Actions, cartEntryConnector: CartEntryConnector);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CartEntryEffects>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<CartEntryEffects>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1lbnRyeS5lZmZlY3QuZC50cyIsInNvdXJjZXMiOlsiY2FydC1lbnRyeS5lZmZlY3QuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7OztBQVlBOzs7Ozs7Ozs7O0FBUUE7Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9ucyB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ2FydEVudHJ5Q29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9lbnRyeS9jYXJ0LWVudHJ5LmNvbm5lY3Rvcic7XG5pbXBvcnQgKiBhcyBEZXByZWNhdGVkQ2FydEFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9jYXJ0LmFjdGlvbic7XG5pbXBvcnQgeyBDYXJ0QWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuLyoqXG4gKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuNVxuICpcbiAqIHNwYXJ0YWN1cyBuZ3J4IGVmZmVjdHMgd2lsbCBubyBsb25nZXIgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUElcbiAqXG4gKiBUT0RPKGlzc3VlOiM0NTA3KVxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDYXJ0RW50cnlFZmZlY3RzIHtcbiAgICBwcml2YXRlIGFjdGlvbnMkO1xuICAgIHByaXZhdGUgY2FydEVudHJ5Q29ubmVjdG9yO1xuICAgIHByaXZhdGUgY29udGV4dENoYW5nZSQ7XG4gICAgYWRkRW50cnkkOiBPYnNlcnZhYmxlPENhcnRBY3Rpb25zLkNhcnRBZGRFbnRyeVN1Y2Nlc3MgfCBDYXJ0QWN0aW9ucy5DYXJ0QWRkRW50cnlGYWlsIHwgRGVwcmVjYXRlZENhcnRBY3Rpb25zLkxvYWRDYXJ0IHwgQ2FydEFjdGlvbnMuQ2FydFByb2Nlc3Nlc0RlY3JlbWVudD47XG4gICAgcmVtb3ZlRW50cnkkOiBPYnNlcnZhYmxlPENhcnRBY3Rpb25zLkNhcnRSZW1vdmVFbnRyeVN1Y2Nlc3MgfCBDYXJ0QWN0aW9ucy5DYXJ0UmVtb3ZlRW50cnlGYWlsIHwgQ2FydEFjdGlvbnMuQ2FydFByb2Nlc3Nlc0RlY3JlbWVudCB8IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5Mb2FkQ2FydD47XG4gICAgdXBkYXRlRW50cnkkOiBPYnNlcnZhYmxlPENhcnRBY3Rpb25zLkNhcnRVcGRhdGVFbnRyeVN1Y2Nlc3MgfCBDYXJ0QWN0aW9ucy5DYXJ0VXBkYXRlRW50cnlGYWlsIHwgQ2FydEFjdGlvbnMuQ2FydFByb2Nlc3Nlc0RlY3JlbWVudCB8IERlcHJlY2F0ZWRDYXJ0QWN0aW9ucy5Mb2FkQ2FydD47XG4gICAgY29uc3RydWN0b3IoYWN0aW9ucyQ6IEFjdGlvbnMsIGNhcnRFbnRyeUNvbm5lY3RvcjogQ2FydEVudHJ5Q29ubmVjdG9yKTtcbn1cbiJdfQ==
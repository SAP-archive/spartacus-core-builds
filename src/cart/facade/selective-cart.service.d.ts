import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth/facade/auth.service';
import { Cart } from '../../model/cart.model';
import { OrderEntry } from '../../model/order.model';
import { BaseSiteService } from '../../site-context/facade/base-site.service';
import { UserService } from '../../user/facade/user.service';
import { CartConfigService } from '../services/cart-config.service';
import { StateWithMultiCart } from '../store/multi-cart-state';
import { MultiCartService } from './multi-cart.service';
import * as ɵngcc0 from '@angular/core';
export declare class SelectiveCartService {
    protected store: Store<StateWithMultiCart>;
    protected userService: UserService;
    protected authService: AuthService;
    protected multiCartService: MultiCartService;
    protected baseSiteService: BaseSiteService;
    protected cartConfigService: CartConfigService;
    private customerId;
    private userId;
    private cartId;
    private selectiveCart$;
    private cartId$;
    private readonly PREVIOUS_USER_ID_INITIAL_VALUE;
    private previousUserId;
    private cartSelector$;
    constructor(store: Store<StateWithMultiCart>, userService: UserService, authService: AuthService, multiCartService: MultiCartService, baseSiteService: BaseSiteService, cartConfigService: CartConfigService);
    getCart(): Observable<Cart>;
    getEntries(): Observable<OrderEntry[]>;
    getLoaded(): Observable<boolean>;
    private load;
    addEntry(productCode: string, quantity: number): void;
    removeEntry(entry: OrderEntry): void;
    updateEntry(entryNumber: number, quantity: number): void;
    getEntry(productCode: string): Observable<OrderEntry>;
    /**
     * Indicates if selectiveCart feature is enabled based on cart configuration.
     */
    isEnabled(): boolean;
    private isEmpty;
    private isJustLoggedIn;
    private isLoggedIn;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SelectiveCartService, never>;
}

//# sourceMappingURL=selective-cart.service.d.ts.map
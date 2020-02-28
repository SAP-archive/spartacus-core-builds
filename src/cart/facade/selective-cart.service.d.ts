import { Store } from '@ngrx/store';
import { StateWithMultiCart } from '../store/multi-cart-state';
import { MultiCartService } from './multi-cart.service';
import { UserService } from '../../user/facade/user.service';
import { AuthService } from '../../auth/facade/auth.service';
import { Observable } from 'rxjs';
import { Cart } from '../../model/cart.model';
import { OrderEntry } from '../../model/order.model';
import { BaseSiteService } from '../../site-context/facade/base-site.service';
import * as ɵngcc0 from '@angular/core';
export declare class SelectiveCartService {
    protected store: Store<StateWithMultiCart>;
    protected userService: UserService;
    protected authService: AuthService;
    protected multiCartService: MultiCartService;
    protected baseSiteService: BaseSiteService;
    private customerId;
    private userId;
    private cartId;
    private selectiveCart$;
    private cartId$;
    private readonly PREVIOUS_USER_ID_INITIAL_VALUE;
    private previousUserId;
    private cartSelector$;
    constructor(store: Store<StateWithMultiCart>, userService: UserService, authService: AuthService, multiCartService: MultiCartService, baseSiteService: BaseSiteService);
    getCart(): Observable<Cart>;
    getEntries(): Observable<OrderEntry[]>;
    getLoaded(): Observable<boolean>;
    private load;
    addEntry(productCode: string, quantity: number): void;
    removeEntry(entry: OrderEntry): void;
    updateEntry(entryNumber: number, quantity: number): void;
    getEntry(productCode: string): Observable<OrderEntry>;
    private isEmpty;
    private isJustLoggedIn;
    private isLoggedIn;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SelectiveCartService>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<SelectiveCartService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0aXZlLWNhcnQuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJzZWxlY3RpdmUtY2FydC5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBCQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IFN0YXRlV2l0aE11bHRpQ2FydCB9IGZyb20gJy4uL3N0b3JlL211bHRpLWNhcnQtc3RhdGUnO1xuaW1wb3J0IHsgTXVsdGlDYXJ0U2VydmljZSB9IGZyb20gJy4vbXVsdGktY2FydC5zZXJ2aWNlJztcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vdXNlci9mYWNhZGUvdXNlci5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYXV0aC9mYWNhZGUvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENhcnQgfSBmcm9tICcuLi8uLi9tb2RlbC9jYXJ0Lm1vZGVsJztcbmltcG9ydCB7IE9yZGVyRW50cnkgfSBmcm9tICcuLi8uLi9tb2RlbC9vcmRlci5tb2RlbCc7XG5pbXBvcnQgeyBCYXNlU2l0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaXRlLWNvbnRleHQvZmFjYWRlL2Jhc2Utc2l0ZS5zZXJ2aWNlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFNlbGVjdGl2ZUNhcnRTZXJ2aWNlIHtcbiAgICBwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aE11bHRpQ2FydD47XG4gICAgcHJvdGVjdGVkIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBtdWx0aUNhcnRTZXJ2aWNlOiBNdWx0aUNhcnRTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBiYXNlU2l0ZVNlcnZpY2U6IEJhc2VTaXRlU2VydmljZTtcbiAgICBwcml2YXRlIGN1c3RvbWVySWQ7XG4gICAgcHJpdmF0ZSB1c2VySWQ7XG4gICAgcHJpdmF0ZSBjYXJ0SWQ7XG4gICAgcHJpdmF0ZSBzZWxlY3RpdmVDYXJ0JDtcbiAgICBwcml2YXRlIGNhcnRJZCQ7XG4gICAgcHJpdmF0ZSByZWFkb25seSBQUkVWSU9VU19VU0VSX0lEX0lOSVRJQUxfVkFMVUU7XG4gICAgcHJpdmF0ZSBwcmV2aW91c1VzZXJJZDtcbiAgICBwcml2YXRlIGNhcnRTZWxlY3RvciQ7XG4gICAgY29uc3RydWN0b3Ioc3RvcmU6IFN0b3JlPFN0YXRlV2l0aE11bHRpQ2FydD4sIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSwgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLCBtdWx0aUNhcnRTZXJ2aWNlOiBNdWx0aUNhcnRTZXJ2aWNlLCBiYXNlU2l0ZVNlcnZpY2U6IEJhc2VTaXRlU2VydmljZSk7XG4gICAgZ2V0Q2FydCgpOiBPYnNlcnZhYmxlPENhcnQ+O1xuICAgIGdldEVudHJpZXMoKTogT2JzZXJ2YWJsZTxPcmRlckVudHJ5W10+O1xuICAgIGdldExvYWRlZCgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIHByaXZhdGUgbG9hZDtcbiAgICBhZGRFbnRyeShwcm9kdWN0Q29kZTogc3RyaW5nLCBxdWFudGl0eTogbnVtYmVyKTogdm9pZDtcbiAgICByZW1vdmVFbnRyeShlbnRyeTogT3JkZXJFbnRyeSk6IHZvaWQ7XG4gICAgdXBkYXRlRW50cnkoZW50cnlOdW1iZXI6IG51bWJlciwgcXVhbnRpdHk6IG51bWJlcik6IHZvaWQ7XG4gICAgZ2V0RW50cnkocHJvZHVjdENvZGU6IHN0cmluZyk6IE9ic2VydmFibGU8T3JkZXJFbnRyeT47XG4gICAgcHJpdmF0ZSBpc0VtcHR5O1xuICAgIHByaXZhdGUgaXNKdXN0TG9nZ2VkSW47XG4gICAgcHJpdmF0ZSBpc0xvZ2dlZEluO1xufVxuIl19
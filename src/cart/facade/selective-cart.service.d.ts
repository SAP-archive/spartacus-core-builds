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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0aXZlLWNhcnQuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJzZWxlY3RpdmUtY2FydC5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0FBVUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBK0JBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL2F1dGgvZmFjYWRlL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBDYXJ0IH0gZnJvbSAnLi4vLi4vbW9kZWwvY2FydC5tb2RlbCc7XG5pbXBvcnQgeyBPcmRlckVudHJ5IH0gZnJvbSAnLi4vLi4vbW9kZWwvb3JkZXIubW9kZWwnO1xuaW1wb3J0IHsgQmFzZVNpdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2l0ZS1jb250ZXh0L2ZhY2FkZS9iYXNlLXNpdGUuc2VydmljZSc7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4uLy4uL3VzZXIvZmFjYWRlL3VzZXIuc2VydmljZSc7XG5pbXBvcnQgeyBDYXJ0Q29uZmlnU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2NhcnQtY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RhdGVXaXRoTXVsdGlDYXJ0IH0gZnJvbSAnLi4vc3RvcmUvbXVsdGktY2FydC1zdGF0ZSc7XG5pbXBvcnQgeyBNdWx0aUNhcnRTZXJ2aWNlIH0gZnJvbSAnLi9tdWx0aS1jYXJ0LnNlcnZpY2UnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgU2VsZWN0aXZlQ2FydFNlcnZpY2Uge1xuICAgIHByb3RlY3RlZCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoTXVsdGlDYXJ0PjtcbiAgICBwcm90ZWN0ZWQgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2U7XG4gICAgcHJvdGVjdGVkIG11bHRpQ2FydFNlcnZpY2U6IE11bHRpQ2FydFNlcnZpY2U7XG4gICAgcHJvdGVjdGVkIGJhc2VTaXRlU2VydmljZTogQmFzZVNpdGVTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBjYXJ0Q29uZmlnU2VydmljZTogQ2FydENvbmZpZ1NlcnZpY2U7XG4gICAgcHJpdmF0ZSBjdXN0b21lcklkO1xuICAgIHByaXZhdGUgdXNlcklkO1xuICAgIHByaXZhdGUgY2FydElkO1xuICAgIHByaXZhdGUgc2VsZWN0aXZlQ2FydCQ7XG4gICAgcHJpdmF0ZSBjYXJ0SWQkO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgUFJFVklPVVNfVVNFUl9JRF9JTklUSUFMX1ZBTFVFO1xuICAgIHByaXZhdGUgcHJldmlvdXNVc2VySWQ7XG4gICAgcHJpdmF0ZSBjYXJ0U2VsZWN0b3IkO1xuICAgIGNvbnN0cnVjdG9yKHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhNdWx0aUNhcnQ+LCB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSwgbXVsdGlDYXJ0U2VydmljZTogTXVsdGlDYXJ0U2VydmljZSwgYmFzZVNpdGVTZXJ2aWNlOiBCYXNlU2l0ZVNlcnZpY2UsIGNhcnRDb25maWdTZXJ2aWNlOiBDYXJ0Q29uZmlnU2VydmljZSk7XG4gICAgZ2V0Q2FydCgpOiBPYnNlcnZhYmxlPENhcnQ+O1xuICAgIGdldEVudHJpZXMoKTogT2JzZXJ2YWJsZTxPcmRlckVudHJ5W10+O1xuICAgIGdldExvYWRlZCgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIHByaXZhdGUgbG9hZDtcbiAgICBhZGRFbnRyeShwcm9kdWN0Q29kZTogc3RyaW5nLCBxdWFudGl0eTogbnVtYmVyKTogdm9pZDtcbiAgICByZW1vdmVFbnRyeShlbnRyeTogT3JkZXJFbnRyeSk6IHZvaWQ7XG4gICAgdXBkYXRlRW50cnkoZW50cnlOdW1iZXI6IG51bWJlciwgcXVhbnRpdHk6IG51bWJlcik6IHZvaWQ7XG4gICAgZ2V0RW50cnkocHJvZHVjdENvZGU6IHN0cmluZyk6IE9ic2VydmFibGU8T3JkZXJFbnRyeT47XG4gICAgLyoqXG4gICAgICogSW5kaWNhdGVzIGlmIHNlbGVjdGl2ZUNhcnQgZmVhdHVyZSBpcyBlbmFibGVkIGJhc2VkIG9uIGNhcnQgY29uZmlndXJhdGlvbi5cbiAgICAgKi9cbiAgICBpc0VuYWJsZWQoKTogYm9vbGVhbjtcbiAgICBwcml2YXRlIGlzRW1wdHk7XG4gICAgcHJpdmF0ZSBpc0p1c3RMb2dnZWRJbjtcbiAgICBwcml2YXRlIGlzTG9nZ2VkSW47XG59XG4iXX0=
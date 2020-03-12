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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0aXZlLWNhcnQuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJzZWxlY3RpdmUtY2FydC5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBCQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgU3RhdGVXaXRoTXVsdGlDYXJ0IH0gZnJvbSAnLi4vc3RvcmUvbXVsdGktY2FydC1zdGF0ZSc7XG5pbXBvcnQgeyBNdWx0aUNhcnRTZXJ2aWNlIH0gZnJvbSAnLi9tdWx0aS1jYXJ0LnNlcnZpY2UnO1xuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICcuLi8uLi91c2VyL2ZhY2FkZS91c2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi9hdXRoL2ZhY2FkZS9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ2FydCB9IGZyb20gJy4uLy4uL21vZGVsL2NhcnQubW9kZWwnO1xuaW1wb3J0IHsgT3JkZXJFbnRyeSB9IGZyb20gJy4uLy4uL21vZGVsL29yZGVyLm1vZGVsJztcbmltcG9ydCB7IEJhc2VTaXRlU2VydmljZSB9IGZyb20gJy4uLy4uL3NpdGUtY29udGV4dC9mYWNhZGUvYmFzZS1zaXRlLnNlcnZpY2UnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgU2VsZWN0aXZlQ2FydFNlcnZpY2Uge1xuICAgIHByb3RlY3RlZCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoTXVsdGlDYXJ0PjtcbiAgICBwcm90ZWN0ZWQgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2U7XG4gICAgcHJvdGVjdGVkIG11bHRpQ2FydFNlcnZpY2U6IE11bHRpQ2FydFNlcnZpY2U7XG4gICAgcHJvdGVjdGVkIGJhc2VTaXRlU2VydmljZTogQmFzZVNpdGVTZXJ2aWNlO1xuICAgIHByaXZhdGUgY3VzdG9tZXJJZDtcbiAgICBwcml2YXRlIHVzZXJJZDtcbiAgICBwcml2YXRlIGNhcnRJZDtcbiAgICBwcml2YXRlIHNlbGVjdGl2ZUNhcnQkO1xuICAgIHByaXZhdGUgY2FydElkJDtcbiAgICBwcml2YXRlIHJlYWRvbmx5IFBSRVZJT1VTX1VTRVJfSURfSU5JVElBTF9WQUxVRTtcbiAgICBwcml2YXRlIHByZXZpb3VzVXNlcklkO1xuICAgIHByaXZhdGUgY2FydFNlbGVjdG9yJDtcbiAgICBjb25zdHJ1Y3RvcihzdG9yZTogU3RvcmU8U3RhdGVXaXRoTXVsdGlDYXJ0PiwgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsIG11bHRpQ2FydFNlcnZpY2U6IE11bHRpQ2FydFNlcnZpY2UsIGJhc2VTaXRlU2VydmljZTogQmFzZVNpdGVTZXJ2aWNlKTtcbiAgICBnZXRDYXJ0KCk6IE9ic2VydmFibGU8Q2FydD47XG4gICAgZ2V0RW50cmllcygpOiBPYnNlcnZhYmxlPE9yZGVyRW50cnlbXT47XG4gICAgZ2V0TG9hZGVkKCk6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgcHJpdmF0ZSBsb2FkO1xuICAgIGFkZEVudHJ5KHByb2R1Y3RDb2RlOiBzdHJpbmcsIHF1YW50aXR5OiBudW1iZXIpOiB2b2lkO1xuICAgIHJlbW92ZUVudHJ5KGVudHJ5OiBPcmRlckVudHJ5KTogdm9pZDtcbiAgICB1cGRhdGVFbnRyeShlbnRyeU51bWJlcjogbnVtYmVyLCBxdWFudGl0eTogbnVtYmVyKTogdm9pZDtcbiAgICBnZXRFbnRyeShwcm9kdWN0Q29kZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxPcmRlckVudHJ5PjtcbiAgICBwcml2YXRlIGlzRW1wdHk7XG4gICAgcHJpdmF0ZSBpc0p1c3RMb2dnZWRJbjtcbiAgICBwcml2YXRlIGlzTG9nZ2VkSW47XG59XG4iXX0=
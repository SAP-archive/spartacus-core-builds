import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth/facade/auth.service';
import { Cart, OrderEntry } from '../../model/index';
import { UserService } from '../../user/facade/user.service';
import { StateWithMultiCart } from '../store/multi-cart-state';
import { MultiCartService } from './multi-cart.service';
import * as ɵngcc0 from '@angular/core';
export declare class WishListService {
    protected store: Store<StateWithMultiCart>;
    protected authService: AuthService;
    protected userService: UserService;
    protected multiCartService: MultiCartService;
    constructor(store: Store<StateWithMultiCart>, authService: AuthService, userService: UserService, multiCartService: MultiCartService);
    createWishList(userId: string, name?: string, description?: string): void;
    getWishList(): Observable<Cart>;
    loadWishList(userId: string, customerId: string): void;
    addEntry(productCode: string): void;
    removeEntry(entry: OrderEntry): void;
    getWishListLoading(): Observable<boolean>;
    protected getWishListId(): Observable<string>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<WishListService>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<WishListService>;
}

//# sourceMappingURL=wish-list.service.d.ts.map
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserIdService } from '../../auth/user-auth/facade/user-id.service';
import { Cart, OrderEntry } from '../../model/index';
import { UserService } from '../../user/facade/user.service';
import { StateWithMultiCart } from '../store/multi-cart-state';
import { MultiCartService } from './multi-cart.service';
import * as ɵngcc0 from '@angular/core';
export declare class WishListService {
    protected store: Store<StateWithMultiCart>;
    protected userService: UserService;
    protected multiCartService: MultiCartService;
    protected userIdService: UserIdService;
    constructor(store: Store<StateWithMultiCart>, userService: UserService, multiCartService: MultiCartService, userIdService: UserIdService);
    createWishList(userId: string, name?: string, description?: string): void;
    getWishList(): Observable<Cart>;
    loadWishList(userId: string, customerId: string): void;
    addEntry(productCode: string): void;
    removeEntry(entry: OrderEntry): void;
    getWishListLoading(): Observable<boolean>;
    protected getWishListId(): Observable<string>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<WishListService, never>;
}

//# sourceMappingURL=wish-list.service.d.ts.map
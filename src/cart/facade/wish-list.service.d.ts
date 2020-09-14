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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<WishListService, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lzaC1saXN0LnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsid2lzaC1saXN0LnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFPQTs7Ozs7Ozs7Ozs7Ozs7QUFhQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi9hdXRoL2ZhY2FkZS9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2FydCwgT3JkZXJFbnRyeSB9IGZyb20gJy4uLy4uL21vZGVsL2luZGV4JztcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vdXNlci9mYWNhZGUvdXNlci5zZXJ2aWNlJztcbmltcG9ydCB7IFN0YXRlV2l0aE11bHRpQ2FydCB9IGZyb20gJy4uL3N0b3JlL211bHRpLWNhcnQtc3RhdGUnO1xuaW1wb3J0IHsgTXVsdGlDYXJ0U2VydmljZSB9IGZyb20gJy4vbXVsdGktY2FydC5zZXJ2aWNlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFdpc2hMaXN0U2VydmljZSB7XG4gICAgcHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhNdWx0aUNhcnQ+O1xuICAgIHByb3RlY3RlZCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2U7XG4gICAgcHJvdGVjdGVkIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgbXVsdGlDYXJ0U2VydmljZTogTXVsdGlDYXJ0U2VydmljZTtcbiAgICBjb25zdHJ1Y3RvcihzdG9yZTogU3RvcmU8U3RhdGVXaXRoTXVsdGlDYXJ0PiwgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLCB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsIG11bHRpQ2FydFNlcnZpY2U6IE11bHRpQ2FydFNlcnZpY2UpO1xuICAgIGNyZWF0ZVdpc2hMaXN0KHVzZXJJZDogc3RyaW5nLCBuYW1lPzogc3RyaW5nLCBkZXNjcmlwdGlvbj86IHN0cmluZyk6IHZvaWQ7XG4gICAgZ2V0V2lzaExpc3QoKTogT2JzZXJ2YWJsZTxDYXJ0PjtcbiAgICBsb2FkV2lzaExpc3QodXNlcklkOiBzdHJpbmcsIGN1c3RvbWVySWQ6IHN0cmluZyk6IHZvaWQ7XG4gICAgYWRkRW50cnkocHJvZHVjdENvZGU6IHN0cmluZyk6IHZvaWQ7XG4gICAgcmVtb3ZlRW50cnkoZW50cnk6IE9yZGVyRW50cnkpOiB2b2lkO1xuICAgIGdldFdpc2hMaXN0TG9hZGluZygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIHByb3RlY3RlZCBnZXRXaXNoTGlzdElkKCk6IE9ic2VydmFibGU8c3RyaW5nPjtcbn1cbiJdfQ==
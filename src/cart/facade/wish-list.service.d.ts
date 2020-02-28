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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lzaC1saXN0LnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsid2lzaC1saXN0LnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFPQTs7Ozs7Ozs7Ozs7Ozs7O0FBYUE7Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL2F1dGgvZmFjYWRlL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBDYXJ0LCBPcmRlckVudHJ5IH0gZnJvbSAnLi4vLi4vbW9kZWwvaW5kZXgnO1xuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICcuLi8uLi91c2VyL2ZhY2FkZS91c2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RhdGVXaXRoTXVsdGlDYXJ0IH0gZnJvbSAnLi4vc3RvcmUvbXVsdGktY2FydC1zdGF0ZSc7XG5pbXBvcnQgeyBNdWx0aUNhcnRTZXJ2aWNlIH0gZnJvbSAnLi9tdWx0aS1jYXJ0LnNlcnZpY2UnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgV2lzaExpc3RTZXJ2aWNlIHtcbiAgICBwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aE11bHRpQ2FydD47XG4gICAgcHJvdGVjdGVkIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBtdWx0aUNhcnRTZXJ2aWNlOiBNdWx0aUNhcnRTZXJ2aWNlO1xuICAgIGNvbnN0cnVjdG9yKHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhNdWx0aUNhcnQ+LCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSwgbXVsdGlDYXJ0U2VydmljZTogTXVsdGlDYXJ0U2VydmljZSk7XG4gICAgY3JlYXRlV2lzaExpc3QodXNlcklkOiBzdHJpbmcsIG5hbWU/OiBzdHJpbmcsIGRlc2NyaXB0aW9uPzogc3RyaW5nKTogdm9pZDtcbiAgICBnZXRXaXNoTGlzdCgpOiBPYnNlcnZhYmxlPENhcnQ+O1xuICAgIGxvYWRXaXNoTGlzdCh1c2VySWQ6IHN0cmluZywgY3VzdG9tZXJJZDogc3RyaW5nKTogdm9pZDtcbiAgICBhZGRFbnRyeShwcm9kdWN0Q29kZTogc3RyaW5nKTogdm9pZDtcbiAgICByZW1vdmVFbnRyeShlbnRyeTogT3JkZXJFbnRyeSk6IHZvaWQ7XG4gICAgZ2V0V2lzaExpc3RMb2FkaW5nKCk6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgcHJvdGVjdGVkIGdldFdpc2hMaXN0SWQoKTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xufVxuIl19
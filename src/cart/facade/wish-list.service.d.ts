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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lzaC1saXN0LnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsid2lzaC1saXN0LnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFPQTs7Ozs7Ozs7Ozs7Ozs7O0FBYUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYXV0aC9mYWNhZGUvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IENhcnQsIE9yZGVyRW50cnkgfSBmcm9tICcuLi8uLi9tb2RlbC9pbmRleCc7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4uLy4uL3VzZXIvZmFjYWRlL3VzZXIuc2VydmljZSc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhNdWx0aUNhcnQgfSBmcm9tICcuLi9zdG9yZS9tdWx0aS1jYXJ0LXN0YXRlJztcbmltcG9ydCB7IE11bHRpQ2FydFNlcnZpY2UgfSBmcm9tICcuL211bHRpLWNhcnQuc2VydmljZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBXaXNoTGlzdFNlcnZpY2Uge1xuICAgIHByb3RlY3RlZCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoTXVsdGlDYXJ0PjtcbiAgICBwcm90ZWN0ZWQgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCB1c2VyU2VydmljZTogVXNlclNlcnZpY2U7XG4gICAgcHJvdGVjdGVkIG11bHRpQ2FydFNlcnZpY2U6IE11bHRpQ2FydFNlcnZpY2U7XG4gICAgY29uc3RydWN0b3Ioc3RvcmU6IFN0b3JlPFN0YXRlV2l0aE11bHRpQ2FydD4sIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSwgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLCBtdWx0aUNhcnRTZXJ2aWNlOiBNdWx0aUNhcnRTZXJ2aWNlKTtcbiAgICBjcmVhdGVXaXNoTGlzdCh1c2VySWQ6IHN0cmluZywgbmFtZT86IHN0cmluZywgZGVzY3JpcHRpb24/OiBzdHJpbmcpOiB2b2lkO1xuICAgIGdldFdpc2hMaXN0KCk6IE9ic2VydmFibGU8Q2FydD47XG4gICAgbG9hZFdpc2hMaXN0KHVzZXJJZDogc3RyaW5nLCBjdXN0b21lcklkOiBzdHJpbmcpOiB2b2lkO1xuICAgIGFkZEVudHJ5KHByb2R1Y3RDb2RlOiBzdHJpbmcpOiB2b2lkO1xuICAgIHJlbW92ZUVudHJ5KGVudHJ5OiBPcmRlckVudHJ5KTogdm9pZDtcbiAgICBnZXRXaXNoTGlzdExvYWRpbmcoKTogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICBwcm90ZWN0ZWQgZ2V0V2lzaExpc3RJZCgpOiBPYnNlcnZhYmxlPHN0cmluZz47XG59XG4iXX0=
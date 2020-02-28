import { Observable } from 'rxjs';
import { Cart } from '../../../model/cart.model';
import { CartAdapter } from './cart.adapter';
import * as ɵngcc0 from '@angular/core';
export declare class CartConnector {
    protected adapter: CartAdapter;
    constructor(adapter: CartAdapter);
    loadAll(userId: string): Observable<Cart[]>;
    load(userId: string, cartId: string): Observable<Cart>;
    create(userId: string, oldCartId?: string, toMergeCartGuid?: string): Observable<Cart>;
    delete(userId: string, cartId: string): Observable<{}>;
    addEmail(userId: string, cartId: string, email: string): Observable<{}>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CartConnector>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5jb25uZWN0b3IuZC50cyIsInNvdXJjZXMiOlsiY2FydC5jb25uZWN0b3IuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQUdBOzs7Ozs7Ozs7QUFRQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDYXJ0IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvY2FydC5tb2RlbCc7XG5pbXBvcnQgeyBDYXJ0QWRhcHRlciB9IGZyb20gJy4vY2FydC5hZGFwdGVyJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENhcnRDb25uZWN0b3Ige1xuICAgIHByb3RlY3RlZCBhZGFwdGVyOiBDYXJ0QWRhcHRlcjtcbiAgICBjb25zdHJ1Y3RvcihhZGFwdGVyOiBDYXJ0QWRhcHRlcik7XG4gICAgbG9hZEFsbCh1c2VySWQ6IHN0cmluZyk6IE9ic2VydmFibGU8Q2FydFtdPjtcbiAgICBsb2FkKHVzZXJJZDogc3RyaW5nLCBjYXJ0SWQ6IHN0cmluZyk6IE9ic2VydmFibGU8Q2FydD47XG4gICAgY3JlYXRlKHVzZXJJZDogc3RyaW5nLCBvbGRDYXJ0SWQ/OiBzdHJpbmcsIHRvTWVyZ2VDYXJ0R3VpZD86IHN0cmluZyk6IE9ic2VydmFibGU8Q2FydD47XG4gICAgZGVsZXRlKHVzZXJJZDogc3RyaW5nLCBjYXJ0SWQ6IHN0cmluZyk6IE9ic2VydmFibGU8e30+O1xuICAgIGFkZEVtYWlsKHVzZXJJZDogc3RyaW5nLCBjYXJ0SWQ6IHN0cmluZywgZW1haWw6IHN0cmluZyk6IE9ic2VydmFibGU8e30+O1xufVxuIl19
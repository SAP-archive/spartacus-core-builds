import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { CartAdapter } from './cart.adapter';
import * as i0 from "@angular/core";
import * as i1 from "./cart.adapter";
var CartConnector = /** @class */ (function () {
    function CartConnector(adapter) {
        this.adapter = adapter;
    }
    CartConnector.prototype.loadAll = function (userId) {
        return this.adapter.loadAll(userId);
    };
    CartConnector.prototype.load = function (userId, cartId) {
        return this.adapter.load(userId, cartId);
    };
    CartConnector.prototype.create = function (userId, oldCartId, toMergeCartGuid) {
        return this.adapter.create(userId, oldCartId, toMergeCartGuid);
    };
    CartConnector.prototype.delete = function (userId, cartId) {
        return this.adapter.delete(userId, cartId);
    };
    CartConnector.prototype.addEmail = function (userId, cartId, email) {
        return this.adapter.addEmail(userId, cartId, email);
    };
    CartConnector.ctorParameters = function () { return [
        { type: CartAdapter }
    ]; };
    CartConnector.ɵprov = i0.ɵɵdefineInjectable({ factory: function CartConnector_Factory() { return new CartConnector(i0.ɵɵinject(i1.CartAdapter)); }, token: CartConnector, providedIn: "root" });
    CartConnector = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], CartConnector);
    return CartConnector;
}());
export { CartConnector };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5jb25uZWN0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9jb25uZWN0b3JzL2NhcnQvY2FydC5jb25uZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFLN0M7SUFDRSx1QkFBc0IsT0FBb0I7UUFBcEIsWUFBTyxHQUFQLE9BQU8sQ0FBYTtJQUFHLENBQUM7SUFFdkMsK0JBQU8sR0FBZCxVQUFlLE1BQWM7UUFDM0IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRU0sNEJBQUksR0FBWCxVQUFZLE1BQWMsRUFBRSxNQUFjO1FBQ3hDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFTSw4QkFBTSxHQUFiLFVBQ0UsTUFBYyxFQUNkLFNBQWtCLEVBQ2xCLGVBQXdCO1FBRXhCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLFNBQVMsRUFBRSxlQUFlLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBRU0sOEJBQU0sR0FBYixVQUFjLE1BQWMsRUFBRSxNQUFjO1FBQzFDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFTSxnQ0FBUSxHQUFmLFVBQ0UsTUFBYyxFQUNkLE1BQWMsRUFDZCxLQUFhO1FBRWIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3RELENBQUM7O2dCQTVCOEIsV0FBVzs7O0lBRC9CLGFBQWE7UUFIekIsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztPQUNXLGFBQWEsQ0E4QnpCO3dCQXRDRDtDQXNDQyxBQTlCRCxJQThCQztTQTlCWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ2FydCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2NhcnQubW9kZWwnO1xuaW1wb3J0IHsgQ2FydEFkYXB0ZXIgfSBmcm9tICcuL2NhcnQuYWRhcHRlcic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDYXJ0Q29ubmVjdG9yIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGFkYXB0ZXI6IENhcnRBZGFwdGVyKSB7fVxuXG4gIHB1YmxpYyBsb2FkQWxsKHVzZXJJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxDYXJ0W10+IHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLmxvYWRBbGwodXNlcklkKTtcbiAgfVxuXG4gIHB1YmxpYyBsb2FkKHVzZXJJZDogc3RyaW5nLCBjYXJ0SWQ6IHN0cmluZyk6IE9ic2VydmFibGU8Q2FydD4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIubG9hZCh1c2VySWQsIGNhcnRJZCk7XG4gIH1cblxuICBwdWJsaWMgY3JlYXRlKFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIG9sZENhcnRJZD86IHN0cmluZyxcbiAgICB0b01lcmdlQ2FydEd1aWQ/OiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxDYXJ0PiB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlci5jcmVhdGUodXNlcklkLCBvbGRDYXJ0SWQsIHRvTWVyZ2VDYXJ0R3VpZCk7XG4gIH1cblxuICBwdWJsaWMgZGVsZXRlKHVzZXJJZDogc3RyaW5nLCBjYXJ0SWQ6IHN0cmluZyk6IE9ic2VydmFibGU8e30+IHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLmRlbGV0ZSh1c2VySWQsIGNhcnRJZCk7XG4gIH1cblxuICBwdWJsaWMgYWRkRW1haWwoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgY2FydElkOiBzdHJpbmcsXG4gICAgZW1haWw6IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPHt9PiB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlci5hZGRFbWFpbCh1c2VySWQsIGNhcnRJZCwgZW1haWwpO1xuICB9XG59XG4iXX0=
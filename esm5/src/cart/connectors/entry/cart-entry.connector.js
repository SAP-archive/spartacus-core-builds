import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { CartEntryAdapter } from './cart-entry.adapter';
import * as i0 from "@angular/core";
import * as i1 from "./cart-entry.adapter";
var CartEntryConnector = /** @class */ (function () {
    function CartEntryConnector(adapter) {
        this.adapter = adapter;
    }
    CartEntryConnector.prototype.add = function (userId, cartId, productCode, quantity) {
        return this.adapter.add(userId, cartId, productCode, quantity);
    };
    CartEntryConnector.prototype.update = function (userId, cartId, entryNumber, qty, pickupStore) {
        return this.adapter.update(userId, cartId, entryNumber, qty, pickupStore);
    };
    CartEntryConnector.prototype.remove = function (userId, cartId, entryNumber) {
        return this.adapter.remove(userId, cartId, entryNumber);
    };
    CartEntryConnector.ctorParameters = function () { return [
        { type: CartEntryAdapter }
    ]; };
    CartEntryConnector.ɵprov = i0.ɵɵdefineInjectable({ factory: function CartEntryConnector_Factory() { return new CartEntryConnector(i0.ɵɵinject(i1.CartEntryAdapter)); }, token: CartEntryConnector, providedIn: "root" });
    CartEntryConnector = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], CartEntryConnector);
    return CartEntryConnector;
}());
export { CartEntryConnector };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1lbnRyeS5jb25uZWN0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9jb25uZWN0b3JzL2VudHJ5L2NhcnQtZW50cnkuY29ubmVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7QUFNeEQ7SUFDRSw0QkFBc0IsT0FBeUI7UUFBekIsWUFBTyxHQUFQLE9BQU8sQ0FBa0I7SUFBRyxDQUFDO0lBRTVDLGdDQUFHLEdBQVYsVUFDRSxNQUFjLEVBQ2QsTUFBYyxFQUNkLFdBQW1CLEVBQ25CLFFBQWlCO1FBRWpCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUVNLG1DQUFNLEdBQWIsVUFDRSxNQUFjLEVBQ2QsTUFBYyxFQUNkLFdBQW1CLEVBQ25CLEdBQVcsRUFDWCxXQUFvQjtRQUVwQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLEdBQUcsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBRU0sbUNBQU0sR0FBYixVQUNFLE1BQWMsRUFDZCxNQUFjLEVBQ2QsV0FBbUI7UUFFbkIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQzFELENBQUM7O2dCQTNCOEIsZ0JBQWdCOzs7SUFEcEMsa0JBQWtCO1FBSDlCLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyxrQkFBa0IsQ0E2QjlCOzZCQXJDRDtDQXFDQyxBQTdCRCxJQTZCQztTQTdCWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYXJ0RW50cnlBZGFwdGVyIH0gZnJvbSAnLi9jYXJ0LWVudHJ5LmFkYXB0ZXInO1xuaW1wb3J0IHsgQ2FydE1vZGlmaWNhdGlvbiB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2NhcnQubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ2FydEVudHJ5Q29ubmVjdG9yIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGFkYXB0ZXI6IENhcnRFbnRyeUFkYXB0ZXIpIHt9XG5cbiAgcHVibGljIGFkZChcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBjYXJ0SWQ6IHN0cmluZyxcbiAgICBwcm9kdWN0Q29kZTogc3RyaW5nLFxuICAgIHF1YW50aXR5PzogbnVtYmVyXG4gICk6IE9ic2VydmFibGU8Q2FydE1vZGlmaWNhdGlvbj4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIuYWRkKHVzZXJJZCwgY2FydElkLCBwcm9kdWN0Q29kZSwgcXVhbnRpdHkpO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZShcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBjYXJ0SWQ6IHN0cmluZyxcbiAgICBlbnRyeU51bWJlcjogc3RyaW5nLFxuICAgIHF0eTogbnVtYmVyLFxuICAgIHBpY2t1cFN0b3JlPzogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8Q2FydE1vZGlmaWNhdGlvbj4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIudXBkYXRlKHVzZXJJZCwgY2FydElkLCBlbnRyeU51bWJlciwgcXR5LCBwaWNrdXBTdG9yZSk7XG4gIH1cblxuICBwdWJsaWMgcmVtb3ZlKFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIGNhcnRJZDogc3RyaW5nLFxuICAgIGVudHJ5TnVtYmVyOiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLnJlbW92ZSh1c2VySWQsIGNhcnRJZCwgZW50cnlOdW1iZXIpO1xuICB9XG59XG4iXX0=
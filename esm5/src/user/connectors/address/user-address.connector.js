import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { UserAddressAdapter } from './user-address.adapter';
import * as i0 from "@angular/core";
import * as i1 from "./user-address.adapter";
var UserAddressConnector = /** @class */ (function () {
    function UserAddressConnector(adapter) {
        this.adapter = adapter;
    }
    UserAddressConnector.prototype.getAll = function (userId) {
        return this.adapter.loadAll(userId);
    };
    UserAddressConnector.prototype.add = function (userId, address) {
        return this.adapter.add(userId, address);
    };
    UserAddressConnector.prototype.update = function (userId, addressId, address) {
        return this.adapter.update(userId, addressId, address);
    };
    UserAddressConnector.prototype.verify = function (userId, address) {
        return this.adapter.verify(userId, address);
    };
    UserAddressConnector.prototype.delete = function (userId, addressId) {
        return this.adapter.delete(userId, addressId);
    };
    UserAddressConnector.ctorParameters = function () { return [
        { type: UserAddressAdapter }
    ]; };
    UserAddressConnector.ɵprov = i0.ɵɵdefineInjectable({ factory: function UserAddressConnector_Factory() { return new UserAddressConnector(i0.ɵɵinject(i1.UserAddressAdapter)); }, token: UserAddressConnector, providedIn: "root" });
    UserAddressConnector = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], UserAddressConnector);
    return UserAddressConnector;
}());
export { UserAddressConnector };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1hZGRyZXNzLmNvbm5lY3Rvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL2Nvbm5lY3RvcnMvYWRkcmVzcy91c2VyLWFkZHJlc3MuY29ubmVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7QUFPNUQ7SUFDRSw4QkFBc0IsT0FBMkI7UUFBM0IsWUFBTyxHQUFQLE9BQU8sQ0FBb0I7SUFBRyxDQUFDO0lBRXJELHFDQUFNLEdBQU4sVUFBTyxNQUFjO1FBQ25CLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELGtDQUFHLEdBQUgsVUFBSSxNQUFjLEVBQUUsT0FBZ0I7UUFDbEMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELHFDQUFNLEdBQU4sVUFBTyxNQUFjLEVBQUUsU0FBaUIsRUFBRSxPQUFnQjtRQUN4RCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVELHFDQUFNLEdBQU4sVUFBTyxNQUFjLEVBQUUsT0FBZ0I7UUFDckMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVELHFDQUFNLEdBQU4sVUFBTyxNQUFjLEVBQUUsU0FBaUI7UUFDdEMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7Z0JBcEI4QixrQkFBa0I7OztJQUR0QyxvQkFBb0I7UUFIaEMsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztPQUNXLG9CQUFvQixDQXNCaEM7K0JBOUJEO0NBOEJDLEFBdEJELElBc0JDO1NBdEJZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFVzZXJBZGRyZXNzQWRhcHRlciB9IGZyb20gJy4vdXNlci1hZGRyZXNzLmFkYXB0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQWRkcmVzcywgQWRkcmVzc1ZhbGlkYXRpb24gfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9hZGRyZXNzLm1vZGVsJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFVzZXJBZGRyZXNzQ29ubmVjdG9yIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGFkYXB0ZXI6IFVzZXJBZGRyZXNzQWRhcHRlcikge31cblxuICBnZXRBbGwodXNlcklkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEFkZHJlc3NbXT4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIubG9hZEFsbCh1c2VySWQpO1xuICB9XG5cbiAgYWRkKHVzZXJJZDogc3RyaW5nLCBhZGRyZXNzOiBBZGRyZXNzKTogT2JzZXJ2YWJsZTx7fT4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIuYWRkKHVzZXJJZCwgYWRkcmVzcyk7XG4gIH1cblxuICB1cGRhdGUodXNlcklkOiBzdHJpbmcsIGFkZHJlc3NJZDogc3RyaW5nLCBhZGRyZXNzOiBBZGRyZXNzKTogT2JzZXJ2YWJsZTx7fT4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIudXBkYXRlKHVzZXJJZCwgYWRkcmVzc0lkLCBhZGRyZXNzKTtcbiAgfVxuXG4gIHZlcmlmeSh1c2VySWQ6IHN0cmluZywgYWRkcmVzczogQWRkcmVzcyk6IE9ic2VydmFibGU8QWRkcmVzc1ZhbGlkYXRpb24+IHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLnZlcmlmeSh1c2VySWQsIGFkZHJlc3MpO1xuICB9XG5cbiAgZGVsZXRlKHVzZXJJZDogc3RyaW5nLCBhZGRyZXNzSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8e30+IHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLmRlbGV0ZSh1c2VySWQsIGFkZHJlc3NJZCk7XG4gIH1cbn1cbiJdfQ==
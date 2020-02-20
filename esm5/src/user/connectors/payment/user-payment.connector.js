import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { UserPaymentAdapter } from './user-payment.adapter';
import * as i0 from "@angular/core";
import * as i1 from "./user-payment.adapter";
var UserPaymentConnector = /** @class */ (function () {
    function UserPaymentConnector(adapter) {
        this.adapter = adapter;
    }
    UserPaymentConnector.prototype.getAll = function (userId) {
        return this.adapter.loadAll(userId);
    };
    UserPaymentConnector.prototype.delete = function (userId, paymentMethodID) {
        return this.adapter.delete(userId, paymentMethodID);
    };
    UserPaymentConnector.prototype.setDefault = function (userId, paymentMethodID) {
        return this.adapter.setDefault(userId, paymentMethodID);
    };
    UserPaymentConnector.ctorParameters = function () { return [
        { type: UserPaymentAdapter }
    ]; };
    UserPaymentConnector.ɵprov = i0.ɵɵdefineInjectable({ factory: function UserPaymentConnector_Factory() { return new UserPaymentConnector(i0.ɵɵinject(i1.UserPaymentAdapter)); }, token: UserPaymentConnector, providedIn: "root" });
    UserPaymentConnector = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], UserPaymentConnector);
    return UserPaymentConnector;
}());
export { UserPaymentConnector };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1wYXltZW50LmNvbm5lY3Rvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL2Nvbm5lY3RvcnMvcGF5bWVudC91c2VyLXBheW1lbnQuY29ubmVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7QUFPNUQ7SUFDRSw4QkFBc0IsT0FBMkI7UUFBM0IsWUFBTyxHQUFQLE9BQU8sQ0FBb0I7SUFBRyxDQUFDO0lBRXJELHFDQUFNLEdBQU4sVUFBTyxNQUFjO1FBQ25CLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELHFDQUFNLEdBQU4sVUFBTyxNQUFjLEVBQUUsZUFBdUI7UUFDNUMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsZUFBZSxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVELHlDQUFVLEdBQVYsVUFBVyxNQUFjLEVBQUUsZUFBdUI7UUFDaEQsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsZUFBZSxDQUFDLENBQUM7SUFDMUQsQ0FBQzs7Z0JBWjhCLGtCQUFrQjs7O0lBRHRDLG9CQUFvQjtRQUhoQyxVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO09BQ1csb0JBQW9CLENBY2hDOytCQXRCRDtDQXNCQyxBQWRELElBY0M7U0FkWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBVc2VyUGF5bWVudEFkYXB0ZXIgfSBmcm9tICcuL3VzZXItcGF5bWVudC5hZGFwdGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFBheW1lbnREZXRhaWxzIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvY2FydC5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBVc2VyUGF5bWVudENvbm5lY3RvciB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBhZGFwdGVyOiBVc2VyUGF5bWVudEFkYXB0ZXIpIHt9XG5cbiAgZ2V0QWxsKHVzZXJJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxQYXltZW50RGV0YWlsc1tdPiB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlci5sb2FkQWxsKHVzZXJJZCk7XG4gIH1cblxuICBkZWxldGUodXNlcklkOiBzdHJpbmcsIHBheW1lbnRNZXRob2RJRDogc3RyaW5nKTogT2JzZXJ2YWJsZTx7fT4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIuZGVsZXRlKHVzZXJJZCwgcGF5bWVudE1ldGhvZElEKTtcbiAgfVxuXG4gIHNldERlZmF1bHQodXNlcklkOiBzdHJpbmcsIHBheW1lbnRNZXRob2RJRDogc3RyaW5nKTogT2JzZXJ2YWJsZTx7fT4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIuc2V0RGVmYXVsdCh1c2VySWQsIHBheW1lbnRNZXRob2RJRCk7XG4gIH1cbn1cbiJdfQ==
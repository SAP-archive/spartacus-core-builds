import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { CheckoutAdapter } from './checkout.adapter';
import * as i0 from "@angular/core";
import * as i1 from "./checkout.adapter";
var CheckoutConnector = /** @class */ (function () {
    function CheckoutConnector(adapter) {
        this.adapter = adapter;
    }
    CheckoutConnector.prototype.placeOrder = function (userId, cartId) {
        return this.adapter.placeOrder(userId, cartId);
    };
    CheckoutConnector.prototype.loadCheckoutDetails = function (userId, cartId) {
        return this.adapter.loadCheckoutDetails(userId, cartId);
    };
    CheckoutConnector.prototype.clearCheckoutDeliveryAddress = function (userId, cartId) {
        return this.adapter.clearCheckoutDeliveryAddress(userId, cartId);
    };
    CheckoutConnector.prototype.clearCheckoutDeliveryMode = function (userId, cartId) {
        return this.adapter.clearCheckoutDeliveryMode(userId, cartId);
    };
    CheckoutConnector.ctorParameters = function () { return [
        { type: CheckoutAdapter }
    ]; };
    CheckoutConnector.ɵprov = i0.ɵɵdefineInjectable({ factory: function CheckoutConnector_Factory() { return new CheckoutConnector(i0.ɵɵinject(i1.CheckoutAdapter)); }, token: CheckoutConnector, providedIn: "root" });
    CheckoutConnector = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], CheckoutConnector);
    return CheckoutConnector;
}());
export { CheckoutConnector };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQuY29ubmVjdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NoZWNrb3V0L2Nvbm5lY3RvcnMvY2hlY2tvdXQvY2hlY2tvdXQuY29ubmVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7O0FBT3JEO0lBQ0UsMkJBQXNCLE9BQXdCO1FBQXhCLFlBQU8sR0FBUCxPQUFPLENBQWlCO0lBQUcsQ0FBQztJQUUzQyxzQ0FBVSxHQUFqQixVQUFrQixNQUFjLEVBQUUsTUFBYztRQUM5QyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRU0sK0NBQW1CLEdBQTFCLFVBQ0UsTUFBYyxFQUNkLE1BQWM7UUFFZCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFTSx3REFBNEIsR0FBbkMsVUFDRSxNQUFjLEVBQ2QsTUFBYztRQUVkLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyw0QkFBNEIsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVNLHFEQUF5QixHQUFoQyxVQUNFLE1BQWMsRUFDZCxNQUFjO1FBRWQsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLHlCQUF5QixDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNoRSxDQUFDOztnQkF6QjhCLGVBQWU7OztJQURuQyxpQkFBaUI7UUFIN0IsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztPQUNXLGlCQUFpQixDQTJCN0I7NEJBcENEO0NBb0NDLEFBM0JELElBMkJDO1NBM0JZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENoZWNrb3V0QWRhcHRlciB9IGZyb20gJy4vY2hlY2tvdXQuYWRhcHRlcic7XG5pbXBvcnQgeyBPcmRlciB9IGZyb20gJy4uLy4uLy4uL21vZGVsL29yZGVyLm1vZGVsJztcbmltcG9ydCB7IENoZWNrb3V0RGV0YWlscyB9IGZyb20gJy4uLy4uL21vZGVscy9jaGVja291dC5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDaGVja291dENvbm5lY3RvciB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBhZGFwdGVyOiBDaGVja291dEFkYXB0ZXIpIHt9XG5cbiAgcHVibGljIHBsYWNlT3JkZXIodXNlcklkOiBzdHJpbmcsIGNhcnRJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxPcmRlcj4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIucGxhY2VPcmRlcih1c2VySWQsIGNhcnRJZCk7XG4gIH1cblxuICBwdWJsaWMgbG9hZENoZWNrb3V0RGV0YWlscyhcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBjYXJ0SWQ6IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPENoZWNrb3V0RGV0YWlscz4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIubG9hZENoZWNrb3V0RGV0YWlscyh1c2VySWQsIGNhcnRJZCk7XG4gIH1cblxuICBwdWJsaWMgY2xlYXJDaGVja291dERlbGl2ZXJ5QWRkcmVzcyhcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBjYXJ0SWQ6IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIuY2xlYXJDaGVja291dERlbGl2ZXJ5QWRkcmVzcyh1c2VySWQsIGNhcnRJZCk7XG4gIH1cblxuICBwdWJsaWMgY2xlYXJDaGVja291dERlbGl2ZXJ5TW9kZShcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBjYXJ0SWQ6IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIuY2xlYXJDaGVja291dERlbGl2ZXJ5TW9kZSh1c2VySWQsIGNhcnRJZCk7XG4gIH1cbn1cbiJdfQ==
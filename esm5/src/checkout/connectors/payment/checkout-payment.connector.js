import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { CheckoutPaymentAdapter } from './checkout-payment.adapter';
import * as i0 from "@angular/core";
import * as i1 from "./checkout-payment.adapter";
var CheckoutPaymentConnector = /** @class */ (function () {
    function CheckoutPaymentConnector(adapter) {
        this.adapter = adapter;
    }
    CheckoutPaymentConnector.prototype.create = function (userId, cartId, paymentDetails) {
        return this.adapter.create(userId, cartId, paymentDetails);
    };
    CheckoutPaymentConnector.prototype.set = function (userId, cartId, paymentDetailsId) {
        return this.adapter.set(userId, cartId, paymentDetailsId);
    };
    CheckoutPaymentConnector.prototype.getCardTypes = function () {
        return this.adapter.loadCardTypes();
    };
    CheckoutPaymentConnector.ctorParameters = function () { return [
        { type: CheckoutPaymentAdapter }
    ]; };
    CheckoutPaymentConnector.ɵprov = i0.ɵɵdefineInjectable({ factory: function CheckoutPaymentConnector_Factory() { return new CheckoutPaymentConnector(i0.ɵɵinject(i1.CheckoutPaymentAdapter)); }, token: CheckoutPaymentConnector, providedIn: "root" });
    CheckoutPaymentConnector = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], CheckoutPaymentConnector);
    return CheckoutPaymentConnector;
}());
export { CheckoutPaymentConnector };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtcGF5bWVudC5jb25uZWN0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2hlY2tvdXQvY29ubmVjdG9ycy9wYXltZW50L2NoZWNrb3V0LXBheW1lbnQuY29ubmVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDOzs7QUFNcEU7SUFDRSxrQ0FBc0IsT0FBK0I7UUFBL0IsWUFBTyxHQUFQLE9BQU8sQ0FBd0I7SUFBRyxDQUFDO0lBRWxELHlDQUFNLEdBQWIsVUFDRSxNQUFjLEVBQ2QsTUFBYyxFQUNkLGNBQThCO1FBRTlCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxjQUFjLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRU0sc0NBQUcsR0FBVixVQUNFLE1BQWMsRUFDZCxNQUFjLEVBQ2QsZ0JBQXdCO1FBRXhCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFRCwrQ0FBWSxHQUFaO1FBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3RDLENBQUM7O2dCQXBCOEIsc0JBQXNCOzs7SUFEMUMsd0JBQXdCO1FBSHBDLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyx3QkFBd0IsQ0FzQnBDO21DQTlCRDtDQThCQyxBQXRCRCxJQXNCQztTQXRCWSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDaGVja291dFBheW1lbnRBZGFwdGVyIH0gZnJvbSAnLi9jaGVja291dC1wYXltZW50LmFkYXB0ZXInO1xuaW1wb3J0IHsgQ2FyZFR5cGUsIFBheW1lbnREZXRhaWxzIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvY2FydC5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDaGVja291dFBheW1lbnRDb25uZWN0b3Ige1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgYWRhcHRlcjogQ2hlY2tvdXRQYXltZW50QWRhcHRlcikge31cblxuICBwdWJsaWMgY3JlYXRlKFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIGNhcnRJZDogc3RyaW5nLFxuICAgIHBheW1lbnREZXRhaWxzOiBQYXltZW50RGV0YWlsc1xuICApOiBPYnNlcnZhYmxlPFBheW1lbnREZXRhaWxzPiB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlci5jcmVhdGUodXNlcklkLCBjYXJ0SWQsIHBheW1lbnREZXRhaWxzKTtcbiAgfVxuXG4gIHB1YmxpYyBzZXQoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgY2FydElkOiBzdHJpbmcsXG4gICAgcGF5bWVudERldGFpbHNJZDogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlci5zZXQodXNlcklkLCBjYXJ0SWQsIHBheW1lbnREZXRhaWxzSWQpO1xuICB9XG5cbiAgZ2V0Q2FyZFR5cGVzKCk6IE9ic2VydmFibGU8Q2FyZFR5cGVbXT4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIubG9hZENhcmRUeXBlcygpO1xuICB9XG59XG4iXX0=
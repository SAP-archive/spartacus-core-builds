import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { UserPaymentAdapter } from './user-payment.adapter';
import * as i0 from "@angular/core";
import * as i1 from "./user-payment.adapter";
let UserPaymentConnector = class UserPaymentConnector {
    constructor(adapter) {
        this.adapter = adapter;
    }
    getAll(userId) {
        return this.adapter.loadAll(userId);
    }
    delete(userId, paymentMethodID) {
        return this.adapter.delete(userId, paymentMethodID);
    }
    setDefault(userId, paymentMethodID) {
        return this.adapter.setDefault(userId, paymentMethodID);
    }
};
UserPaymentConnector.ctorParameters = () => [
    { type: UserPaymentAdapter }
];
UserPaymentConnector.ɵprov = i0.ɵɵdefineInjectable({ factory: function UserPaymentConnector_Factory() { return new UserPaymentConnector(i0.ɵɵinject(i1.UserPaymentAdapter)); }, token: UserPaymentConnector, providedIn: "root" });
UserPaymentConnector = __decorate([
    Injectable({
        providedIn: 'root',
    })
], UserPaymentConnector);
export { UserPaymentConnector };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1wYXltZW50LmNvbm5lY3Rvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL2Nvbm5lY3RvcnMvcGF5bWVudC91c2VyLXBheW1lbnQuY29ubmVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7QUFPNUQsSUFBYSxvQkFBb0IsR0FBakMsTUFBYSxvQkFBb0I7SUFDL0IsWUFBc0IsT0FBMkI7UUFBM0IsWUFBTyxHQUFQLE9BQU8sQ0FBb0I7SUFBRyxDQUFDO0lBRXJELE1BQU0sQ0FBQyxNQUFjO1FBQ25CLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELE1BQU0sQ0FBQyxNQUFjLEVBQUUsZUFBdUI7UUFDNUMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsZUFBZSxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVELFVBQVUsQ0FBQyxNQUFjLEVBQUUsZUFBdUI7UUFDaEQsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsZUFBZSxDQUFDLENBQUM7SUFDMUQsQ0FBQztDQUNGLENBQUE7O1lBYmdDLGtCQUFrQjs7O0FBRHRDLG9CQUFvQjtJQUhoQyxVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDO0dBQ1csb0JBQW9CLENBY2hDO1NBZFksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVXNlclBheW1lbnRBZGFwdGVyIH0gZnJvbSAnLi91c2VyLXBheW1lbnQuYWRhcHRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBQYXltZW50RGV0YWlscyB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2NhcnQubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgVXNlclBheW1lbnRDb25uZWN0b3Ige1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgYWRhcHRlcjogVXNlclBheW1lbnRBZGFwdGVyKSB7fVxuXG4gIGdldEFsbCh1c2VySWQ6IHN0cmluZyk6IE9ic2VydmFibGU8UGF5bWVudERldGFpbHNbXT4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIubG9hZEFsbCh1c2VySWQpO1xuICB9XG5cbiAgZGVsZXRlKHVzZXJJZDogc3RyaW5nLCBwYXltZW50TWV0aG9kSUQ6IHN0cmluZyk6IE9ic2VydmFibGU8e30+IHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLmRlbGV0ZSh1c2VySWQsIHBheW1lbnRNZXRob2RJRCk7XG4gIH1cblxuICBzZXREZWZhdWx0KHVzZXJJZDogc3RyaW5nLCBwYXltZW50TWV0aG9kSUQ6IHN0cmluZyk6IE9ic2VydmFibGU8e30+IHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLnNldERlZmF1bHQodXNlcklkLCBwYXltZW50TWV0aG9kSUQpO1xuICB9XG59XG4iXX0=
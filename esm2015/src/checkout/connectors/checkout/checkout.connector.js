import { Injectable } from '@angular/core';
import { CheckoutAdapter } from './checkout.adapter';
import * as i0 from "@angular/core";
import * as i1 from "./checkout.adapter";
export class CheckoutConnector {
    constructor(adapter) {
        this.adapter = adapter;
    }
    placeOrder(userId, cartId, termsChecked) {
        return this.adapter.placeOrder(userId, cartId, termsChecked);
    }
    loadCheckoutDetails(userId, cartId) {
        return this.adapter.loadCheckoutDetails(userId, cartId);
    }
    clearCheckoutDeliveryAddress(userId, cartId) {
        return this.adapter.clearCheckoutDeliveryAddress(userId, cartId);
    }
    clearCheckoutDeliveryMode(userId, cartId) {
        return this.adapter.clearCheckoutDeliveryMode(userId, cartId);
    }
}
CheckoutConnector.ɵprov = i0.ɵɵdefineInjectable({ factory: function CheckoutConnector_Factory() { return new CheckoutConnector(i0.ɵɵinject(i1.CheckoutAdapter)); }, token: CheckoutConnector, providedIn: "root" });
CheckoutConnector.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
CheckoutConnector.ctorParameters = () => [
    { type: CheckoutAdapter }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQuY29ubmVjdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS9zcmMvY2hlY2tvdXQvY29ubmVjdG9ycy9jaGVja291dC9jaGVja291dC5jb25uZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkzQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7OztBQUtyRCxNQUFNLE9BQU8saUJBQWlCO0lBQzVCLFlBQXNCLE9BQXdCO1FBQXhCLFlBQU8sR0FBUCxPQUFPLENBQWlCO0lBQUcsQ0FBQztJQUUzQyxVQUFVLENBQ2YsTUFBYyxFQUNkLE1BQWMsRUFDZCxZQUFxQjtRQUVyQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVNLG1CQUFtQixDQUN4QixNQUFjLEVBQ2QsTUFBYztRQUVkLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVNLDRCQUE0QixDQUNqQyxNQUFjLEVBQ2QsTUFBYztRQUVkLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyw0QkFBNEIsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVNLHlCQUF5QixDQUM5QixNQUFjLEVBQ2QsTUFBYztRQUVkLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyx5QkFBeUIsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDaEUsQ0FBQzs7OztZQWpDRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7OztZQUpRLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBPcmRlciB9IGZyb20gJy4uLy4uLy4uL21vZGVsL29yZGVyLm1vZGVsJztcbmltcG9ydCB7IENoZWNrb3V0RGV0YWlscyB9IGZyb20gJy4uLy4uL21vZGVscy9jaGVja291dC5tb2RlbCc7XG5pbXBvcnQgeyBDaGVja291dEFkYXB0ZXIgfSBmcm9tICcuL2NoZWNrb3V0LmFkYXB0ZXInO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ2hlY2tvdXRDb25uZWN0b3Ige1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgYWRhcHRlcjogQ2hlY2tvdXRBZGFwdGVyKSB7fVxuXG4gIHB1YmxpYyBwbGFjZU9yZGVyKFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIGNhcnRJZDogc3RyaW5nLFxuICAgIHRlcm1zQ2hlY2tlZDogYm9vbGVhblxuICApOiBPYnNlcnZhYmxlPE9yZGVyPiB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlci5wbGFjZU9yZGVyKHVzZXJJZCwgY2FydElkLCB0ZXJtc0NoZWNrZWQpO1xuICB9XG5cbiAgcHVibGljIGxvYWRDaGVja291dERldGFpbHMoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgY2FydElkOiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxDaGVja291dERldGFpbHM+IHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLmxvYWRDaGVja291dERldGFpbHModXNlcklkLCBjYXJ0SWQpO1xuICB9XG5cbiAgcHVibGljIGNsZWFyQ2hlY2tvdXREZWxpdmVyeUFkZHJlc3MoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgY2FydElkOiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLmNsZWFyQ2hlY2tvdXREZWxpdmVyeUFkZHJlc3ModXNlcklkLCBjYXJ0SWQpO1xuICB9XG5cbiAgcHVibGljIGNsZWFyQ2hlY2tvdXREZWxpdmVyeU1vZGUoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgY2FydElkOiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLmNsZWFyQ2hlY2tvdXREZWxpdmVyeU1vZGUodXNlcklkLCBjYXJ0SWQpO1xuICB9XG59XG4iXX0=
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CheckoutAdapter } from './checkout.adapter';
import * as i0 from "@angular/core";
import * as i1 from "./checkout.adapter";
export class CheckoutConnector {
    /**
     * @param {?} adapter
     */
    constructor(adapter) {
        this.adapter = adapter;
    }
    /**
     * @param {?} userId
     * @param {?} cartId
     * @return {?}
     */
    placeOrder(userId, cartId) {
        return this.adapter.placeOrder(userId, cartId);
    }
    /**
     * @param {?} userId
     * @param {?} cartId
     * @return {?}
     */
    loadCheckoutDetails(userId, cartId) {
        return this.adapter.loadCheckoutDetails(userId, cartId);
    }
}
CheckoutConnector.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
CheckoutConnector.ctorParameters = () => [
    { type: CheckoutAdapter }
];
/** @nocollapse */ CheckoutConnector.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CheckoutConnector_Factory() { return new CheckoutConnector(i0.ɵɵinject(i1.CheckoutAdapter)); }, token: CheckoutConnector, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @protected
     */
    CheckoutConnector.prototype.adapter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQuY29ubmVjdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NoZWNrb3V0L2Nvbm5lY3RvcnMvY2hlY2tvdXQvY2hlY2tvdXQuY29ubmVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7O0FBT3JELE1BQU0sT0FBTyxpQkFBaUI7Ozs7SUFDNUIsWUFBc0IsT0FBd0I7UUFBeEIsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7SUFBRyxDQUFDOzs7Ozs7SUFFM0MsVUFBVSxDQUFDLE1BQWMsRUFBRSxNQUFjO1FBQzlDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2pELENBQUM7Ozs7OztJQUVNLG1CQUFtQixDQUN4QixNQUFjLEVBQ2QsTUFBYztRQUVkLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDMUQsQ0FBQzs7O1lBZkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBTlEsZUFBZTs7Ozs7Ozs7SUFRVixvQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDaGVja291dEFkYXB0ZXIgfSBmcm9tICcuL2NoZWNrb3V0LmFkYXB0ZXInO1xuaW1wb3J0IHsgT3JkZXIgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9vcmRlci5tb2RlbCc7XG5pbXBvcnQgeyBDaGVja291dERldGFpbHMgfSBmcm9tICcuLi8uLi9tb2RlbHMvY2hlY2tvdXQubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ2hlY2tvdXRDb25uZWN0b3Ige1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgYWRhcHRlcjogQ2hlY2tvdXRBZGFwdGVyKSB7fVxuXG4gIHB1YmxpYyBwbGFjZU9yZGVyKHVzZXJJZDogc3RyaW5nLCBjYXJ0SWQ6IHN0cmluZyk6IE9ic2VydmFibGU8T3JkZXI+IHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLnBsYWNlT3JkZXIodXNlcklkLCBjYXJ0SWQpO1xuICB9XG5cbiAgcHVibGljIGxvYWRDaGVja291dERldGFpbHMoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgY2FydElkOiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxDaGVja291dERldGFpbHM+IHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLmxvYWRDaGVja291dERldGFpbHModXNlcklkLCBjYXJ0SWQpO1xuICB9XG59XG4iXX0=
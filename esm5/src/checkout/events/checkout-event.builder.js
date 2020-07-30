import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { StateEventService } from '../../state/event/state-event.service';
import { CheckoutActions } from '../store/actions/index';
import { OrderPlacedEvent } from './checkout.events';
import * as i0 from "@angular/core";
import * as i1 from "../../state/event/state-event.service";
var CheckoutEventBuilder = /** @class */ (function () {
    function CheckoutEventBuilder(stateEventService) {
        this.stateEventService = stateEventService;
        this.register();
    }
    /**
     * Registers checkout events
     */
    CheckoutEventBuilder.prototype.register = function () {
        this.orderPlacedEvent();
    };
    /**
     * Register an order successfully placed event
     */
    CheckoutEventBuilder.prototype.orderPlacedEvent = function () {
        this.stateEventService.register({
            action: CheckoutActions.PLACE_ORDER_SUCCESS,
            event: OrderPlacedEvent,
        });
    };
    CheckoutEventBuilder.ctorParameters = function () { return [
        { type: StateEventService }
    ]; };
    CheckoutEventBuilder.ɵprov = i0.ɵɵdefineInjectable({ factory: function CheckoutEventBuilder_Factory() { return new CheckoutEventBuilder(i0.ɵɵinject(i1.StateEventService)); }, token: CheckoutEventBuilder, providedIn: "root" });
    CheckoutEventBuilder = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], CheckoutEventBuilder);
    return CheckoutEventBuilder;
}());
export { CheckoutEventBuilder };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtZXZlbnQuYnVpbGRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jaGVja291dC9ldmVudHMvY2hlY2tvdXQtZXZlbnQuYnVpbGRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDekQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7OztBQUtyRDtJQUNFLDhCQUFzQixpQkFBb0M7UUFBcEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUN4RCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVEOztPQUVHO0lBQ08sdUNBQVEsR0FBbEI7UUFDRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQ7O09BRUc7SUFDTywrQ0FBZ0IsR0FBMUI7UUFDRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDO1lBQzlCLE1BQU0sRUFBRSxlQUFlLENBQUMsbUJBQW1CO1lBQzNDLEtBQUssRUFBRSxnQkFBZ0I7U0FDeEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBbkJ3QyxpQkFBaUI7OztJQUQvQyxvQkFBb0I7UUFIaEMsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztPQUNXLG9CQUFvQixDQXFCaEM7K0JBN0JEO0NBNkJDLEFBckJELElBcUJDO1NBckJZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0YXRlRXZlbnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc3RhdGUvZXZlbnQvc3RhdGUtZXZlbnQuc2VydmljZSc7XG5pbXBvcnQgeyBDaGVja291dEFjdGlvbnMgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IE9yZGVyUGxhY2VkRXZlbnQgfSBmcm9tICcuL2NoZWNrb3V0LmV2ZW50cyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDaGVja291dEV2ZW50QnVpbGRlciB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBzdGF0ZUV2ZW50U2VydmljZTogU3RhdGVFdmVudFNlcnZpY2UpIHtcbiAgICB0aGlzLnJlZ2lzdGVyKCk7XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIGNoZWNrb3V0IGV2ZW50c1xuICAgKi9cbiAgcHJvdGVjdGVkIHJlZ2lzdGVyKCk6IHZvaWQge1xuICAgIHRoaXMub3JkZXJQbGFjZWRFdmVudCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIGFuIG9yZGVyIHN1Y2Nlc3NmdWxseSBwbGFjZWQgZXZlbnRcbiAgICovXG4gIHByb3RlY3RlZCBvcmRlclBsYWNlZEV2ZW50KCk6IHZvaWQge1xuICAgIHRoaXMuc3RhdGVFdmVudFNlcnZpY2UucmVnaXN0ZXIoe1xuICAgICAgYWN0aW9uOiBDaGVja291dEFjdGlvbnMuUExBQ0VfT1JERVJfU1VDQ0VTUyxcbiAgICAgIGV2ZW50OiBPcmRlclBsYWNlZEV2ZW50LFxuICAgIH0pO1xuICB9XG59XG4iXX0=
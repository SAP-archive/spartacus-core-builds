import { Injectable } from '@angular/core';
import { StateEventService } from '../../state/event/state-event.service';
import { CheckoutActions } from '../store/actions/index';
import { OrderPlacedEvent } from './checkout.events';
import * as i0 from "@angular/core";
import * as i1 from "../../state/event/state-event.service";
export class CheckoutEventBuilder {
    constructor(stateEventService) {
        this.stateEventService = stateEventService;
        this.register();
    }
    /**
     * Registers checkout events
     */
    register() {
        this.orderPlacedEvent();
    }
    /**
     * Register an order successfully placed event
     */
    orderPlacedEvent() {
        this.stateEventService.register({
            action: CheckoutActions.PLACE_ORDER_SUCCESS,
            event: OrderPlacedEvent,
        });
    }
}
CheckoutEventBuilder.ɵprov = i0.ɵɵdefineInjectable({ factory: function CheckoutEventBuilder_Factory() { return new CheckoutEventBuilder(i0.ɵɵinject(i1.StateEventService)); }, token: CheckoutEventBuilder, providedIn: "root" });
CheckoutEventBuilder.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
CheckoutEventBuilder.ctorParameters = () => [
    { type: StateEventService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtZXZlbnQuYnVpbGRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL2NoZWNrb3V0L2V2ZW50cy9jaGVja291dC1ldmVudC5idWlsZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDMUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDOzs7QUFLckQsTUFBTSxPQUFPLG9CQUFvQjtJQUMvQixZQUFzQixpQkFBb0M7UUFBcEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUN4RCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVEOztPQUVHO0lBQ08sUUFBUTtRQUNoQixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQ7O09BRUc7SUFDTyxnQkFBZ0I7UUFDeEIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQztZQUM5QixNQUFNLEVBQUUsZUFBZSxDQUFDLG1CQUFtQjtZQUMzQyxLQUFLLEVBQUUsZ0JBQWdCO1NBQ3hCLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7WUF2QkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7WUFOUSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdGF0ZUV2ZW50U2VydmljZSB9IGZyb20gJy4uLy4uL3N0YXRlL2V2ZW50L3N0YXRlLWV2ZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2hlY2tvdXRBY3Rpb25zIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBPcmRlclBsYWNlZEV2ZW50IH0gZnJvbSAnLi9jaGVja291dC5ldmVudHMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ2hlY2tvdXRFdmVudEJ1aWxkZXIge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgc3RhdGVFdmVudFNlcnZpY2U6IFN0YXRlRXZlbnRTZXJ2aWNlKSB7XG4gICAgdGhpcy5yZWdpc3RlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBjaGVja291dCBldmVudHNcbiAgICovXG4gIHByb3RlY3RlZCByZWdpc3RlcigpOiB2b2lkIHtcbiAgICB0aGlzLm9yZGVyUGxhY2VkRXZlbnQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlciBhbiBvcmRlciBzdWNjZXNzZnVsbHkgcGxhY2VkIGV2ZW50XG4gICAqL1xuICBwcm90ZWN0ZWQgb3JkZXJQbGFjZWRFdmVudCgpOiB2b2lkIHtcbiAgICB0aGlzLnN0YXRlRXZlbnRTZXJ2aWNlLnJlZ2lzdGVyKHtcbiAgICAgIGFjdGlvbjogQ2hlY2tvdXRBY3Rpb25zLlBMQUNFX09SREVSX1NVQ0NFU1MsXG4gICAgICBldmVudDogT3JkZXJQbGFjZWRFdmVudCxcbiAgICB9KTtcbiAgfVxufVxuIl19
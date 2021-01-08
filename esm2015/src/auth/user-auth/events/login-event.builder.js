import { Injectable } from '@angular/core';
import { StateEventService } from '../../../state/event/state-event.service';
import { AuthActions } from '../store/actions/index';
import { LoginEvent } from './user-auth.events';
import * as i0 from "@angular/core";
import * as i1 from "../../../state/event/state-event.service";
export class LoginEventBuilder {
    constructor(stateEventService) {
        this.stateEventService = stateEventService;
        this.register();
    }
    /**
     * Registers logout events
     */
    register() {
        this.loginEvent();
    }
    /**
     * Register a logout event
     */
    loginEvent() {
        this.stateEventService.register({
            action: AuthActions.LOGIN,
            event: LoginEvent,
        });
    }
}
LoginEventBuilder.ɵprov = i0.ɵɵdefineInjectable({ factory: function LoginEventBuilder_Factory() { return new LoginEventBuilder(i0.ɵɵinject(i1.StateEventService)); }, token: LoginEventBuilder, providedIn: "root" });
LoginEventBuilder.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
LoginEventBuilder.ctorParameters = () => [
    { type: StateEventService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4tZXZlbnQuYnVpbGRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL2F1dGgvdXNlci1hdXRoL2V2ZW50cy9sb2dpbi1ldmVudC5idWlsZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDN0UsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7O0FBS2hELE1BQU0sT0FBTyxpQkFBaUI7SUFDNUIsWUFBc0IsaUJBQW9DO1FBQXBDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDeEQsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7T0FFRztJQUNPLFFBQVE7UUFDaEIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRDs7T0FFRztJQUNPLFVBQVU7UUFDbEIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQztZQUM5QixNQUFNLEVBQUUsV0FBVyxDQUFDLEtBQUs7WUFDekIsS0FBSyxFQUFFLFVBQVU7U0FDbEIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7OztZQXZCRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7OztZQU5RLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0YXRlRXZlbnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvZXZlbnQvc3RhdGUtZXZlbnQuc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoQWN0aW9ucyB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgTG9naW5FdmVudCB9IGZyb20gJy4vdXNlci1hdXRoLmV2ZW50cyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkV2ZW50QnVpbGRlciB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBzdGF0ZUV2ZW50U2VydmljZTogU3RhdGVFdmVudFNlcnZpY2UpIHtcbiAgICB0aGlzLnJlZ2lzdGVyKCk7XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIGxvZ291dCBldmVudHNcbiAgICovXG4gIHByb3RlY3RlZCByZWdpc3RlcigpOiB2b2lkIHtcbiAgICB0aGlzLmxvZ2luRXZlbnQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlciBhIGxvZ291dCBldmVudFxuICAgKi9cbiAgcHJvdGVjdGVkIGxvZ2luRXZlbnQoKTogdm9pZCB7XG4gICAgdGhpcy5zdGF0ZUV2ZW50U2VydmljZS5yZWdpc3Rlcih7XG4gICAgICBhY3Rpb246IEF1dGhBY3Rpb25zLkxPR0lOLFxuICAgICAgZXZlbnQ6IExvZ2luRXZlbnQsXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==
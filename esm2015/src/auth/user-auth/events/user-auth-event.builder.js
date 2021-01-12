import { Injectable } from '@angular/core';
import { StateEventService } from '../../../state/event/state-event.service';
import { AuthActions } from '../store/actions/index';
import { LoginEvent, LogoutEvent } from './user-auth.events';
import * as i0 from "@angular/core";
import * as i1 from "../../../state/event/state-event.service";
export class UserAuthEventBuilder {
    constructor(stateEventService) {
        this.stateEventService = stateEventService;
        this.register();
    }
    /**
     * Registers user auth events
     */
    register() {
        this.registerLoginEvent();
        this.registerLogoutEvent();
    }
    /**
     * Register a login event
     */
    registerLoginEvent() {
        this.stateEventService.register({
            action: AuthActions.LOGIN,
            event: LoginEvent,
        });
    }
    /**
     * Register a logout event
     */
    registerLogoutEvent() {
        this.stateEventService.register({
            action: AuthActions.LOGOUT,
            event: LogoutEvent,
        });
    }
}
UserAuthEventBuilder.ɵprov = i0.ɵɵdefineInjectable({ factory: function UserAuthEventBuilder_Factory() { return new UserAuthEventBuilder(i0.ɵɵinject(i1.StateEventService)); }, token: UserAuthEventBuilder, providedIn: "root" });
UserAuthEventBuilder.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
UserAuthEventBuilder.ctorParameters = () => [
    { type: StateEventService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1hdXRoLWV2ZW50LmJ1aWxkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3NyYy9hdXRoL3VzZXItYXV0aC9ldmVudHMvdXNlci1hdXRoLWV2ZW50LmJ1aWxkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7O0FBSzdELE1BQU0sT0FBTyxvQkFBb0I7SUFDL0IsWUFBc0IsaUJBQW9DO1FBQXBDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDeEQsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFFRDs7T0FFRztJQUNPLFFBQVE7UUFDaEIsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVEOztPQUVHO0lBQ08sa0JBQWtCO1FBQzFCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUM7WUFDOUIsTUFBTSxFQUFFLFdBQVcsQ0FBQyxLQUFLO1lBQ3pCLEtBQUssRUFBRSxVQUFVO1NBQ2xCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7T0FFRztJQUNPLG1CQUFtQjtRQUMzQixJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDO1lBQzlCLE1BQU0sRUFBRSxXQUFXLENBQUMsTUFBTTtZQUMxQixLQUFLLEVBQUUsV0FBVztTQUNuQixDQUFDLENBQUM7SUFDTCxDQUFDOzs7O1lBbENGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O1lBTlEsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RhdGVFdmVudFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS9ldmVudC9zdGF0ZS1ldmVudC5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhBY3Rpb25zIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBMb2dpbkV2ZW50LCBMb2dvdXRFdmVudCB9IGZyb20gJy4vdXNlci1hdXRoLmV2ZW50cyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBVc2VyQXV0aEV2ZW50QnVpbGRlciB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBzdGF0ZUV2ZW50U2VydmljZTogU3RhdGVFdmVudFNlcnZpY2UpIHtcbiAgICB0aGlzLnJlZ2lzdGVyKCk7XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIHVzZXIgYXV0aCBldmVudHNcbiAgICovXG4gIHByb3RlY3RlZCByZWdpc3RlcigpOiB2b2lkIHtcbiAgICB0aGlzLnJlZ2lzdGVyTG9naW5FdmVudCgpO1xuICAgIHRoaXMucmVnaXN0ZXJMb2dvdXRFdmVudCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIGEgbG9naW4gZXZlbnRcbiAgICovXG4gIHByb3RlY3RlZCByZWdpc3RlckxvZ2luRXZlbnQoKTogdm9pZCB7XG4gICAgdGhpcy5zdGF0ZUV2ZW50U2VydmljZS5yZWdpc3Rlcih7XG4gICAgICBhY3Rpb246IEF1dGhBY3Rpb25zLkxPR0lOLFxuICAgICAgZXZlbnQ6IExvZ2luRXZlbnQsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXIgYSBsb2dvdXQgZXZlbnRcbiAgICovXG4gIHByb3RlY3RlZCByZWdpc3RlckxvZ291dEV2ZW50KCk6IHZvaWQge1xuICAgIHRoaXMuc3RhdGVFdmVudFNlcnZpY2UucmVnaXN0ZXIoe1xuICAgICAgYWN0aW9uOiBBdXRoQWN0aW9ucy5MT0dPVVQsXG4gICAgICBldmVudDogTG9nb3V0RXZlbnQsXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==
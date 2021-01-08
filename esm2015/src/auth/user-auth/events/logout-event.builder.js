import { Injectable } from '@angular/core';
import { StateEventService } from '../../../state/event/state-event.service';
import { AuthActions } from '../store/actions/index';
import { LogoutEvent } from './user-auth.events';
import * as i0 from "@angular/core";
import * as i1 from "../../../state/event/state-event.service";
export class LogoutEventBuilder {
    constructor(stateEventService) {
        this.stateEventService = stateEventService;
        this.register();
    }
    /**
     * Registers logout events
     */
    register() {
        this.logoutEvent();
    }
    /**
     * Register a logout event
     */
    logoutEvent() {
        this.stateEventService.register({
            action: AuthActions.LOGOUT,
            event: LogoutEvent,
        });
    }
}
LogoutEventBuilder.ɵprov = i0.ɵɵdefineInjectable({ factory: function LogoutEventBuilder_Factory() { return new LogoutEventBuilder(i0.ɵɵinject(i1.StateEventService)); }, token: LogoutEventBuilder, providedIn: "root" });
LogoutEventBuilder.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
LogoutEventBuilder.ctorParameters = () => [
    { type: StateEventService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nb3V0LWV2ZW50LmJ1aWxkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3NyYy9hdXRoL3VzZXItYXV0aC9ldmVudHMvbG9nb3V0LWV2ZW50LmJ1aWxkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7QUFLakQsTUFBTSxPQUFPLGtCQUFrQjtJQUM3QixZQUFzQixpQkFBb0M7UUFBcEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUN4RCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVEOztPQUVHO0lBQ08sUUFBUTtRQUNoQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVEOztPQUVHO0lBQ08sV0FBVztRQUNuQixJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDO1lBQzlCLE1BQU0sRUFBRSxXQUFXLENBQUMsTUFBTTtZQUMxQixLQUFLLEVBQUUsV0FBVztTQUNuQixDQUFDLENBQUM7SUFDTCxDQUFDOzs7O1lBdkJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O1lBTlEsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RhdGVFdmVudFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS9ldmVudC9zdGF0ZS1ldmVudC5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhBY3Rpb25zIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBMb2dvdXRFdmVudCB9IGZyb20gJy4vdXNlci1hdXRoLmV2ZW50cyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBMb2dvdXRFdmVudEJ1aWxkZXIge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgc3RhdGVFdmVudFNlcnZpY2U6IFN0YXRlRXZlbnRTZXJ2aWNlKSB7XG4gICAgdGhpcy5yZWdpc3RlcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBsb2dvdXQgZXZlbnRzXG4gICAqL1xuICBwcm90ZWN0ZWQgcmVnaXN0ZXIoKTogdm9pZCB7XG4gICAgdGhpcy5sb2dvdXRFdmVudCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIGEgbG9nb3V0IGV2ZW50XG4gICAqL1xuICBwcm90ZWN0ZWQgbG9nb3V0RXZlbnQoKTogdm9pZCB7XG4gICAgdGhpcy5zdGF0ZUV2ZW50U2VydmljZS5yZWdpc3Rlcih7XG4gICAgICBhY3Rpb246IEF1dGhBY3Rpb25zLkxPR09VVCxcbiAgICAgIGV2ZW50OiBMb2dvdXRFdmVudCxcbiAgICB9KTtcbiAgfVxufVxuIl19
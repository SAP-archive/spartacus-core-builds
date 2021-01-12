import { StateEventService } from '../../../state/event/state-event.service';
import * as ɵngcc0 from '@angular/core';
export declare class UserAuthEventBuilder {
    protected stateEventService: StateEventService;
    constructor(stateEventService: StateEventService);
    /**
     * Registers user auth events
     */
    protected register(): void;
    /**
     * Register a login event
     */
    protected registerLoginEvent(): void;
    /**
     * Register a logout event
     */
    protected registerLogoutEvent(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<UserAuthEventBuilder, never>;
}

//# sourceMappingURL=user-auth-event.builder.d.ts.map
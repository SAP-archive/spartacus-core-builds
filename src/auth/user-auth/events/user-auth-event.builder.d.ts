import { StateEventService } from '../../../state/event/state-event.service';
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
}

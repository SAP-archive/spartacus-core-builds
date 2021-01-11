import { StateEventService } from '../../../state/event/state-event.service';
export declare class LogoutEventBuilder {
    protected stateEventService: StateEventService;
    constructor(stateEventService: StateEventService);
    /**
     * Registers logout events
     */
    protected register(): void;
    /**
     * Register a logout event
     */
    protected logoutEvent(): void;
}

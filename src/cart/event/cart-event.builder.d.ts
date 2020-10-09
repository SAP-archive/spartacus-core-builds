import { ActionsSubject } from '@ngrx/store';
import { Observable } from 'rxjs';
import { EventService } from '../../event/event.service';
import { ActionToEventMapping } from '../../state/event/action-to-event-mapping';
import { ActiveCartService } from '../facade/active-cart.service';
/**
 * Registers events for the active cart
 */
import * as ɵngcc0 from '@angular/core';
export declare class CartEventBuilder {
    protected actionsSubject: ActionsSubject;
    protected event: EventService;
    protected activeCartService: ActiveCartService;
    constructor(actionsSubject: ActionsSubject, event: EventService, activeCartService: ActiveCartService);
    /**
     * Registers events for the active cart
     */
    protected register(): void;
    /**
     * Register events for adding entry to the active cart
     */
    protected registerAddEntry(): void;
    protected registerRemoveEntry(): void;
    protected registerUpdateEntry(): void;
    /**
     * Registers a stream of target events mapped from the source actions that contain the cart id equal to the active cart id.
     *
     * @param mapping mapping declaration - from `action` string type to `event` class type
     *   (an with optional `factory` function - by default `action.payload` will be assigned to the properties of the event instance).
     */
    protected registerMapped<T>(mapping: ActionToEventMapping<T>): () => void;
    /**
     * Returns a stream of actions only of a given type(s)
     *
     * @param actionType type(s) of actions
     */
    protected getAction(actionType: string | string[]): Observable<{
        type: string;
        payload?: any;
    }>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CartEventBuilder, never>;
}

//# sourceMappingURL=cart-event.builder.d.ts.map
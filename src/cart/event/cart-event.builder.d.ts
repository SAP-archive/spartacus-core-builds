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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1ldmVudC5idWlsZGVyLmQudHMiLCJzb3VyY2VzIjpbImNhcnQtZXZlbnQuYnVpbGRlci5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7QUFRQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkJBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uc1N1YmplY3QgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBFdmVudFNlcnZpY2UgfSBmcm9tICcuLi8uLi9ldmVudC9ldmVudC5zZXJ2aWNlJztcbmltcG9ydCB7IEFjdGlvblRvRXZlbnRNYXBwaW5nIH0gZnJvbSAnLi4vLi4vc3RhdGUvZXZlbnQvYWN0aW9uLXRvLWV2ZW50LW1hcHBpbmcnO1xuaW1wb3J0IHsgQWN0aXZlQ2FydFNlcnZpY2UgfSBmcm9tICcuLi9mYWNhZGUvYWN0aXZlLWNhcnQuc2VydmljZSc7XG4vKipcbiAqIFJlZ2lzdGVycyBldmVudHMgZm9yIHRoZSBhY3RpdmUgY2FydFxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDYXJ0RXZlbnRCdWlsZGVyIHtcbiAgICBwcm90ZWN0ZWQgYWN0aW9uc1N1YmplY3Q6IEFjdGlvbnNTdWJqZWN0O1xuICAgIHByb3RlY3RlZCBldmVudDogRXZlbnRTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBhY3RpdmVDYXJ0U2VydmljZTogQWN0aXZlQ2FydFNlcnZpY2U7XG4gICAgY29uc3RydWN0b3IoYWN0aW9uc1N1YmplY3Q6IEFjdGlvbnNTdWJqZWN0LCBldmVudDogRXZlbnRTZXJ2aWNlLCBhY3RpdmVDYXJ0U2VydmljZTogQWN0aXZlQ2FydFNlcnZpY2UpO1xuICAgIC8qKlxuICAgICAqIFJlZ2lzdGVycyBldmVudHMgZm9yIHRoZSBhY3RpdmUgY2FydFxuICAgICAqL1xuICAgIHByb3RlY3RlZCByZWdpc3RlcigpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFJlZ2lzdGVyIGV2ZW50cyBmb3IgYWRkaW5nIGVudHJ5IHRvIHRoZSBhY3RpdmUgY2FydFxuICAgICAqL1xuICAgIHByb3RlY3RlZCByZWdpc3RlckFkZEVudHJ5KCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogUmVnaXN0ZXJzIGEgc3RyZWFtIG9mIHRhcmdldCBldmVudHMgbWFwcGVkIGZyb20gdGhlIHNvdXJjZSBhY3Rpb25zIHRoYXQgY29udGFpbiB0aGUgY2FydCBpZCBlcXVhbCB0byB0aGUgYWN0aXZlIGNhcnQgaWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbWFwcGluZyBtYXBwaW5nIGRlY2xhcmF0aW9uIC0gZnJvbSBgYWN0aW9uYCBzdHJpbmcgdHlwZSB0byBgZXZlbnRgIGNsYXNzIHR5cGVcbiAgICAgKiAgIChhbiB3aXRoIG9wdGlvbmFsIGBmYWN0b3J5YCBmdW5jdGlvbiAtIGJ5IGRlZmF1bHQgYGFjdGlvbi5wYXlsb2FkYCB3aWxsIGJlIGFzc2lnbmVkIHRvIHRoZSBwcm9wZXJ0aWVzIG9mIHRoZSBldmVudCBpbnN0YW5jZSkuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIHJlZ2lzdGVyTWFwcGVkPFQ+KG1hcHBpbmc6IEFjdGlvblRvRXZlbnRNYXBwaW5nPFQ+KTogKCkgPT4gdm9pZDtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgc3RyZWFtIG9mIGFjdGlvbnMgb25seSBvZiBhIGdpdmVuIHR5cGUocylcbiAgICAgKlxuICAgICAqIEBwYXJhbSBhY3Rpb25UeXBlIHR5cGUocykgb2YgYWN0aW9uc1xuICAgICAqL1xuICAgIHByb3RlY3RlZCBnZXRBY3Rpb24oYWN0aW9uVHlwZTogc3RyaW5nIHwgc3RyaW5nW10pOiBPYnNlcnZhYmxlPHtcbiAgICAgICAgdHlwZTogc3RyaW5nO1xuICAgICAgICBwYXlsb2FkPzogYW55O1xuICAgIH0+O1xufVxuIl19
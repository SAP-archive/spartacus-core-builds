import { Type } from '@angular/core';
import { Observable } from 'rxjs';
/**
 * A service to register and observe event sources. Events are driven by event types, which are class signatures
 * for the given event.
 *
 * It is possible to register multiple sources to a single event, even without
 * knowing as multiple decoupled features can attach sources to the same
 * event type.
 */
import * as ɵngcc0 from '@angular/core';
export declare class EventService {
    /**
     * The various events meta are collected in a map, stored by the event type class
     */
    private eventsMeta;
    /**
     * Register an event source for the given event type.
     *
     * CAUTION: To avoid memory leaks, the returned teardown function should be called
     *  when the event source is no longer maintained by its creator
     * (i.e. in `ngOnDestroy` if the event source was registered in the component).
     *
     * @param eventType the event type
     * @param source$ an observable that represents the source
     *
     * @returns a teardown function which unregisters the given event source
     */
    register<T>(eventType: Type<T>, source$: Observable<T>): () => void;
    /**
     * Unregisters an event source for the given event type
     *
     * @param eventType the event type
     * @param source$ an observable that represents the source
     */
    private unregister;
    /**
     * Returns a stream of events for the given event type
     * @param eventTypes event type
     */
    get<T>(eventType: Type<T>): Observable<T>;
    /**
     * Dispatches a single event.
     *
     * However, it's recommended to use method `register` instead, whenever the event can come from some stream.
     *  It allows for lazy computations in the event source stream -
     *  if no one subscribes to the event, the logic of the event source stream won't be evaluated.
     */
    dispatch(event: Object): void;
    /**
     * Returns the input subject used to dispatch a single event.
     * The subject is created on demand, when it's needed for the first time.
     * @param eventType type of event
     */
    private getInputSubject;
    /**
     * Returns the event meta object for the given event type
     */
    private getEventMeta;
    /**
     * Creates the event meta object for the given event type
     */
    private createEventMeta;
    /**
     * Checks if the event type is a valid type (is a class with constructor).
     *
     * Should be used only in dev mode.
     */
    private validateEventType;
    /**
     * Returns the given event source with runtime validation whether the emitted values are instances of given event type.
     *
     * Should be used only in dev mode.
     */
    private getValidatedEventStream;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<EventService, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJldmVudC5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0FBVUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0VBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuLyoqXG4gKiBBIHNlcnZpY2UgdG8gcmVnaXN0ZXIgYW5kIG9ic2VydmUgZXZlbnQgc291cmNlcy4gRXZlbnRzIGFyZSBkcml2ZW4gYnkgZXZlbnQgdHlwZXMsIHdoaWNoIGFyZSBjbGFzcyBzaWduYXR1cmVzXG4gKiBmb3IgdGhlIGdpdmVuIGV2ZW50LlxuICpcbiAqIEl0IGlzIHBvc3NpYmxlIHRvIHJlZ2lzdGVyIG11bHRpcGxlIHNvdXJjZXMgdG8gYSBzaW5nbGUgZXZlbnQsIGV2ZW4gd2l0aG91dFxuICoga25vd2luZyBhcyBtdWx0aXBsZSBkZWNvdXBsZWQgZmVhdHVyZXMgY2FuIGF0dGFjaCBzb3VyY2VzIHRvIHRoZSBzYW1lXG4gKiBldmVudCB0eXBlLlxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBFdmVudFNlcnZpY2Uge1xuICAgIC8qKlxuICAgICAqIFRoZSB2YXJpb3VzIGV2ZW50cyBtZXRhIGFyZSBjb2xsZWN0ZWQgaW4gYSBtYXAsIHN0b3JlZCBieSB0aGUgZXZlbnQgdHlwZSBjbGFzc1xuICAgICAqL1xuICAgIHByaXZhdGUgZXZlbnRzTWV0YTtcbiAgICAvKipcbiAgICAgKiBSZWdpc3RlciBhbiBldmVudCBzb3VyY2UgZm9yIHRoZSBnaXZlbiBldmVudCB0eXBlLlxuICAgICAqXG4gICAgICogQ0FVVElPTjogVG8gYXZvaWQgbWVtb3J5IGxlYWtzLCB0aGUgcmV0dXJuZWQgdGVhcmRvd24gZnVuY3Rpb24gc2hvdWxkIGJlIGNhbGxlZFxuICAgICAqICB3aGVuIHRoZSBldmVudCBzb3VyY2UgaXMgbm8gbG9uZ2VyIG1haW50YWluZWQgYnkgaXRzIGNyZWF0b3JcbiAgICAgKiAoaS5lLiBpbiBgbmdPbkRlc3Ryb3lgIGlmIHRoZSBldmVudCBzb3VyY2Ugd2FzIHJlZ2lzdGVyZWQgaW4gdGhlIGNvbXBvbmVudCkuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZXZlbnRUeXBlIHRoZSBldmVudCB0eXBlXG4gICAgICogQHBhcmFtIHNvdXJjZSQgYW4gb2JzZXJ2YWJsZSB0aGF0IHJlcHJlc2VudHMgdGhlIHNvdXJjZVxuICAgICAqXG4gICAgICogQHJldHVybnMgYSB0ZWFyZG93biBmdW5jdGlvbiB3aGljaCB1bnJlZ2lzdGVycyB0aGUgZ2l2ZW4gZXZlbnQgc291cmNlXG4gICAgICovXG4gICAgcmVnaXN0ZXI8VD4oZXZlbnRUeXBlOiBUeXBlPFQ+LCBzb3VyY2UkOiBPYnNlcnZhYmxlPFQ+KTogKCkgPT4gdm9pZDtcbiAgICAvKipcbiAgICAgKiBVbnJlZ2lzdGVycyBhbiBldmVudCBzb3VyY2UgZm9yIHRoZSBnaXZlbiBldmVudCB0eXBlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZXZlbnRUeXBlIHRoZSBldmVudCB0eXBlXG4gICAgICogQHBhcmFtIHNvdXJjZSQgYW4gb2JzZXJ2YWJsZSB0aGF0IHJlcHJlc2VudHMgdGhlIHNvdXJjZVxuICAgICAqL1xuICAgIHByaXZhdGUgdW5yZWdpc3RlcjtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgc3RyZWFtIG9mIGV2ZW50cyBmb3IgdGhlIGdpdmVuIGV2ZW50IHR5cGVcbiAgICAgKiBAcGFyYW0gZXZlbnRUeXBlcyBldmVudCB0eXBlXG4gICAgICovXG4gICAgZ2V0PFQ+KGV2ZW50VHlwZTogVHlwZTxUPik6IE9ic2VydmFibGU8VD47XG4gICAgLyoqXG4gICAgICogRGlzcGF0Y2hlcyBhIHNpbmdsZSBldmVudC5cbiAgICAgKlxuICAgICAqIEhvd2V2ZXIsIGl0J3MgcmVjb21tZW5kZWQgdG8gdXNlIG1ldGhvZCBgcmVnaXN0ZXJgIGluc3RlYWQsIHdoZW5ldmVyIHRoZSBldmVudCBjYW4gY29tZSBmcm9tIHNvbWUgc3RyZWFtLlxuICAgICAqICBJdCBhbGxvd3MgZm9yIGxhenkgY29tcHV0YXRpb25zIGluIHRoZSBldmVudCBzb3VyY2Ugc3RyZWFtIC1cbiAgICAgKiAgaWYgbm8gb25lIHN1YnNjcmliZXMgdG8gdGhlIGV2ZW50LCB0aGUgbG9naWMgb2YgdGhlIGV2ZW50IHNvdXJjZSBzdHJlYW0gd29uJ3QgYmUgZXZhbHVhdGVkLlxuICAgICAqL1xuICAgIGRpc3BhdGNoKGV2ZW50OiBPYmplY3QpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGlucHV0IHN1YmplY3QgdXNlZCB0byBkaXNwYXRjaCBhIHNpbmdsZSBldmVudC5cbiAgICAgKiBUaGUgc3ViamVjdCBpcyBjcmVhdGVkIG9uIGRlbWFuZCwgd2hlbiBpdCdzIG5lZWRlZCBmb3IgdGhlIGZpcnN0IHRpbWUuXG4gICAgICogQHBhcmFtIGV2ZW50VHlwZSB0eXBlIG9mIGV2ZW50XG4gICAgICovXG4gICAgcHJpdmF0ZSBnZXRJbnB1dFN1YmplY3Q7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgZXZlbnQgbWV0YSBvYmplY3QgZm9yIHRoZSBnaXZlbiBldmVudCB0eXBlXG4gICAgICovXG4gICAgcHJpdmF0ZSBnZXRFdmVudE1ldGE7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyB0aGUgZXZlbnQgbWV0YSBvYmplY3QgZm9yIHRoZSBnaXZlbiBldmVudCB0eXBlXG4gICAgICovXG4gICAgcHJpdmF0ZSBjcmVhdGVFdmVudE1ldGE7XG4gICAgLyoqXG4gICAgICogQ2hlY2tzIGlmIHRoZSBldmVudCB0eXBlIGlzIGEgdmFsaWQgdHlwZSAoaXMgYSBjbGFzcyB3aXRoIGNvbnN0cnVjdG9yKS5cbiAgICAgKlxuICAgICAqIFNob3VsZCBiZSB1c2VkIG9ubHkgaW4gZGV2IG1vZGUuXG4gICAgICovXG4gICAgcHJpdmF0ZSB2YWxpZGF0ZUV2ZW50VHlwZTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBnaXZlbiBldmVudCBzb3VyY2Ugd2l0aCBydW50aW1lIHZhbGlkYXRpb24gd2hldGhlciB0aGUgZW1pdHRlZCB2YWx1ZXMgYXJlIGluc3RhbmNlcyBvZiBnaXZlbiBldmVudCB0eXBlLlxuICAgICAqXG4gICAgICogU2hvdWxkIGJlIHVzZWQgb25seSBpbiBkZXYgbW9kZS5cbiAgICAgKi9cbiAgICBwcml2YXRlIGdldFZhbGlkYXRlZEV2ZW50U3RyZWFtO1xufVxuIl19
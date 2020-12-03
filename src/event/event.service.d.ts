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
     * Returns a stream of events for the given event type
     * @param eventTypes event type
     */
    get<T>(eventType: Type<T>): Observable<T>;
    /**
     * Dispatches an instance of an individual event.
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

//# sourceMappingURL=event.service.d.ts.map
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJldmVudC5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0FBVUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFEQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbi8qKlxuICogQSBzZXJ2aWNlIHRvIHJlZ2lzdGVyIGFuZCBvYnNlcnZlIGV2ZW50IHNvdXJjZXMuIEV2ZW50cyBhcmUgZHJpdmVuIGJ5IGV2ZW50IHR5cGVzLCB3aGljaCBhcmUgY2xhc3Mgc2lnbmF0dXJlc1xuICogZm9yIHRoZSBnaXZlbiBldmVudC5cbiAqXG4gKiBJdCBpcyBwb3NzaWJsZSB0byByZWdpc3RlciBtdWx0aXBsZSBzb3VyY2VzIHRvIGEgc2luZ2xlIGV2ZW50LCBldmVuIHdpdGhvdXRcbiAqIGtub3dpbmcgYXMgbXVsdGlwbGUgZGVjb3VwbGVkIGZlYXR1cmVzIGNhbiBhdHRhY2ggc291cmNlcyB0byB0aGUgc2FtZVxuICogZXZlbnQgdHlwZS5cbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgRXZlbnRTZXJ2aWNlIHtcbiAgICAvKipcbiAgICAgKiBUaGUgdmFyaW91cyBldmVudHMgbWV0YSBhcmUgY29sbGVjdGVkIGluIGEgbWFwLCBzdG9yZWQgYnkgdGhlIGV2ZW50IHR5cGUgY2xhc3NcbiAgICAgKi9cbiAgICBwcml2YXRlIGV2ZW50c01ldGE7XG4gICAgLyoqXG4gICAgICogUmVnaXN0ZXIgYW4gZXZlbnQgc291cmNlIGZvciB0aGUgZ2l2ZW4gZXZlbnQgdHlwZS5cbiAgICAgKlxuICAgICAqIENBVVRJT046IFRvIGF2b2lkIG1lbW9yeSBsZWFrcywgdGhlIHJldHVybmVkIHRlYXJkb3duIGZ1bmN0aW9uIHNob3VsZCBiZSBjYWxsZWRcbiAgICAgKiAgd2hlbiB0aGUgZXZlbnQgc291cmNlIGlzIG5vIGxvbmdlciBtYWludGFpbmVkIGJ5IGl0cyBjcmVhdG9yXG4gICAgICogKGkuZS4gaW4gYG5nT25EZXN0cm95YCBpZiB0aGUgZXZlbnQgc291cmNlIHdhcyByZWdpc3RlcmVkIGluIHRoZSBjb21wb25lbnQpLlxuICAgICAqXG4gICAgICogQHBhcmFtIGV2ZW50VHlwZSB0aGUgZXZlbnQgdHlwZVxuICAgICAqIEBwYXJhbSBzb3VyY2UkIGFuIG9ic2VydmFibGUgdGhhdCByZXByZXNlbnRzIHRoZSBzb3VyY2VcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIGEgdGVhcmRvd24gZnVuY3Rpb24gd2hpY2ggdW5yZWdpc3RlcnMgdGhlIGdpdmVuIGV2ZW50IHNvdXJjZVxuICAgICAqL1xuICAgIHJlZ2lzdGVyPFQ+KGV2ZW50VHlwZTogVHlwZTxUPiwgc291cmNlJDogT2JzZXJ2YWJsZTxUPik6ICgpID0+IHZvaWQ7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHN0cmVhbSBvZiBldmVudHMgZm9yIHRoZSBnaXZlbiBldmVudCB0eXBlXG4gICAgICogQHBhcmFtIGV2ZW50VHlwZXMgZXZlbnQgdHlwZVxuICAgICAqL1xuICAgIGdldDxUPihldmVudFR5cGU6IFR5cGU8VD4pOiBPYnNlcnZhYmxlPFQ+O1xuICAgIC8qKlxuICAgICAqIERpc3BhdGNoZXMgYW4gaW5zdGFuY2Ugb2YgYW4gaW5kaXZpZHVhbCBldmVudC5cbiAgICAgKi9cbiAgICBkaXNwYXRjaChldmVudDogT2JqZWN0KTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBpbnB1dCBzdWJqZWN0IHVzZWQgdG8gZGlzcGF0Y2ggYSBzaW5nbGUgZXZlbnQuXG4gICAgICogVGhlIHN1YmplY3QgaXMgY3JlYXRlZCBvbiBkZW1hbmQsIHdoZW4gaXQncyBuZWVkZWQgZm9yIHRoZSBmaXJzdCB0aW1lLlxuICAgICAqIEBwYXJhbSBldmVudFR5cGUgdHlwZSBvZiBldmVudFxuICAgICAqL1xuICAgIHByaXZhdGUgZ2V0SW5wdXRTdWJqZWN0O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGV2ZW50IG1ldGEgb2JqZWN0IGZvciB0aGUgZ2l2ZW4gZXZlbnQgdHlwZVxuICAgICAqL1xuICAgIHByaXZhdGUgZ2V0RXZlbnRNZXRhO1xuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgdGhlIGV2ZW50IG1ldGEgb2JqZWN0IGZvciB0aGUgZ2l2ZW4gZXZlbnQgdHlwZVxuICAgICAqL1xuICAgIHByaXZhdGUgY3JlYXRlRXZlbnRNZXRhO1xuICAgIC8qKlxuICAgICAqIENoZWNrcyBpZiB0aGUgZXZlbnQgdHlwZSBpcyBhIHZhbGlkIHR5cGUgKGlzIGEgY2xhc3Mgd2l0aCBjb25zdHJ1Y3RvcikuXG4gICAgICpcbiAgICAgKiBTaG91bGQgYmUgdXNlZCBvbmx5IGluIGRldiBtb2RlLlxuICAgICAqL1xuICAgIHByaXZhdGUgdmFsaWRhdGVFdmVudFR5cGU7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgZ2l2ZW4gZXZlbnQgc291cmNlIHdpdGggcnVudGltZSB2YWxpZGF0aW9uIHdoZXRoZXIgdGhlIGVtaXR0ZWQgdmFsdWVzIGFyZSBpbnN0YW5jZXMgb2YgZ2l2ZW4gZXZlbnQgdHlwZS5cbiAgICAgKlxuICAgICAqIFNob3VsZCBiZSB1c2VkIG9ubHkgaW4gZGV2IG1vZGUuXG4gICAgICovXG4gICAgcHJpdmF0ZSBnZXRWYWxpZGF0ZWRFdmVudFN0cmVhbTtcbn1cbiJdfQ==
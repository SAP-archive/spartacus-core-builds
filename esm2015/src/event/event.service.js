import { __decorate } from "tslib";
import { Injectable, isDevMode } from '@angular/core';
import { Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { MergingSubject } from './utils/merging-subject';
import * as i0 from "@angular/core";
/**
 * A service to register and observe event sources. Events are driven by event types, which are class signatures
 * for the given event.
 *
 * It is possible to register multiple sources to a single event, even without
 * knowing as multiple decoupled features can attach sources to the same
 * event type.
 */
let EventService = class EventService {
    constructor() {
        /**
         * The various events meta are collected in a map, stored by the event type class
         */
        this.eventsMeta = new Map();
    }
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
    register(eventType, source$) {
        const eventMeta = this.getEventMeta(eventType);
        if (eventMeta.mergingSubject.has(source$)) {
            if (isDevMode()) {
                console.warn(`EventService: the event source`, source$, `has been already registered for the type`, eventType);
            }
        }
        else {
            eventMeta.mergingSubject.add(source$);
        }
        return () => eventMeta.mergingSubject.remove(source$);
    }
    /**
     * Returns a stream of events for the given event type
     * @param eventTypes event type
     */
    get(eventType) {
        let output$ = this.getEventMeta(eventType).mergingSubject.output$;
        if (isDevMode()) {
            output$ = this.getValidatedEventStream(output$, eventType);
        }
        return output$;
    }
    /**
     * Dispatches an instance of an individual event.
     */
    dispatch(event) {
        const eventType = event.constructor;
        const inputSubject$ = this.getInputSubject(eventType);
        inputSubject$.next(event);
    }
    /**
     * Returns the input subject used to dispatch a single event.
     * The subject is created on demand, when it's needed for the first time.
     * @param eventType type of event
     */
    getInputSubject(eventType) {
        const eventMeta = this.getEventMeta(eventType);
        if (!eventMeta.inputSubject$) {
            eventMeta.inputSubject$ = new Subject();
            this.register(eventType, eventMeta.inputSubject$);
        }
        return eventMeta.inputSubject$;
    }
    /**
     * Returns the event meta object for the given event type
     */
    getEventMeta(eventType) {
        if (isDevMode()) {
            this.validateEventType(eventType);
        }
        if (!this.eventsMeta.get(eventType)) {
            this.createEventMeta(eventType);
        }
        return this.eventsMeta.get(eventType);
    }
    /**
     * Creates the event meta object for the given event type
     */
    createEventMeta(eventType) {
        this.eventsMeta.set(eventType, {
            inputSubject$: null,
            mergingSubject: new MergingSubject(),
        });
    }
    /**
     * Checks if the event type is a valid type (is a class with constructor).
     *
     * Should be used only in dev mode.
     */
    validateEventType(eventType) {
        if (!(eventType === null || eventType === void 0 ? void 0 : eventType.constructor)) {
            throw new Error(`EventService:  ${eventType} is not a valid event type. Please provide a class reference.`);
        }
    }
    /**
     * Returns the given event source with runtime validation whether the emitted values are instances of given event type.
     *
     * Should be used only in dev mode.
     */
    getValidatedEventStream(source$, eventType) {
        return source$.pipe(tap((event) => {
            if (!(event instanceof eventType)) {
                console.warn(`EventService: The stream`, source$, `emitted the event`, event, `that is not an instance of the declared type`, eventType.name);
            }
        }));
    }
};
EventService.ɵprov = i0.ɵɵdefineInjectable({ factory: function EventService_Factory() { return new EventService(); }, token: EventService, providedIn: "root" });
EventService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], EventService);
export { EventService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9ldmVudC9ldmVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBUSxNQUFNLGVBQWUsQ0FBQztBQUM1RCxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7O0FBaUJ6RDs7Ozs7OztHQU9HO0FBSUgsSUFBYSxZQUFZLEdBQXpCLE1BQWEsWUFBWTtJQUF6QjtRQUNFOztXQUVHO1FBQ0ssZUFBVSxHQUFHLElBQUksR0FBRyxFQUE2QixDQUFDO0tBaUkzRDtJQS9IQzs7Ozs7Ozs7Ozs7T0FXRztJQUNILFFBQVEsQ0FBSSxTQUFrQixFQUFFLE9BQXNCO1FBQ3BELE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDL0MsSUFBSSxTQUFTLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUN6QyxJQUFJLFNBQVMsRUFBRSxFQUFFO2dCQUNmLE9BQU8sQ0FBQyxJQUFJLENBQ1YsZ0NBQWdDLEVBQ2hDLE9BQU8sRUFDUCwwQ0FBMEMsRUFDMUMsU0FBUyxDQUNWLENBQUM7YUFDSDtTQUNGO2FBQU07WUFDTCxTQUFTLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN2QztRQUVELE9BQU8sR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVEOzs7T0FHRztJQUNILEdBQUcsQ0FBSSxTQUFrQjtRQUN2QixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUM7UUFDbEUsSUFBSSxTQUFTLEVBQUUsRUFBRTtZQUNmLE9BQU8sR0FBRyxJQUFJLENBQUMsdUJBQXVCLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1NBQzVEO1FBQ0QsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsUUFBUSxDQUFDLEtBQWE7UUFDcEIsTUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLFdBQXdCLENBQUM7UUFDakQsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN0RCxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ssZUFBZSxDQUFJLFNBQWtCO1FBQzNDLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFL0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUU7WUFDNUIsU0FBUyxDQUFDLGFBQWEsR0FBRyxJQUFJLE9BQU8sRUFBTyxDQUFDO1lBQzdDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUNuRDtRQUNELE9BQU8sU0FBUyxDQUFDLGFBQWEsQ0FBQztJQUNqQyxDQUFDO0lBRUQ7O09BRUc7SUFDSyxZQUFZLENBQUksU0FBa0I7UUFDeEMsSUFBSSxTQUFTLEVBQUUsRUFBRTtZQUNmLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNuQztRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUNuQyxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ2pDO1FBQ0QsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQ7O09BRUc7SUFDSyxlQUFlLENBQUksU0FBa0I7UUFDM0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFO1lBQzdCLGFBQWEsRUFBRSxJQUFJO1lBQ25CLGNBQWMsRUFBRSxJQUFJLGNBQWMsRUFBRTtTQUNyQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNLLGlCQUFpQixDQUFJLFNBQWtCO1FBQzdDLElBQUksRUFBQyxTQUFTLGFBQVQsU0FBUyx1QkFBVCxTQUFTLENBQUUsV0FBVyxDQUFBLEVBQUU7WUFDM0IsTUFBTSxJQUFJLEtBQUssQ0FDYixrQkFBa0IsU0FBUywrREFBK0QsQ0FDM0YsQ0FBQztTQUNIO0lBQ0gsQ0FBQztJQUVEOzs7O09BSUc7SUFDSyx1QkFBdUIsQ0FDN0IsT0FBc0IsRUFDdEIsU0FBa0I7UUFFbEIsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUNqQixHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUNaLElBQUksQ0FBQyxDQUFDLEtBQUssWUFBWSxTQUFTLENBQUMsRUFBRTtnQkFDakMsT0FBTyxDQUFDLElBQUksQ0FDViwwQkFBMEIsRUFDMUIsT0FBTyxFQUNQLG1CQUFtQixFQUNuQixLQUFLLEVBQ0wsOENBQThDLEVBQzlDLFNBQVMsQ0FBQyxJQUFJLENBQ2YsQ0FBQzthQUNIO1FBQ0gsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7Q0FDRixDQUFBOztBQXJJWSxZQUFZO0lBSHhCLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7R0FDVyxZQUFZLENBcUl4QjtTQXJJWSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgaXNEZXZNb2RlLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBNZXJnaW5nU3ViamVjdCB9IGZyb20gJy4vdXRpbHMvbWVyZ2luZy1zdWJqZWN0JztcblxuLyoqXG4gKiBUaGUgb2JqZWN0IGhvbGRzIHJlZ2lzdGVyZWQgc291cmNlIG9ic2VydmFibGVzIGFzIHdlbGwgYXMgdGhlIG1lcmdlZCByZXN1bHQgb2JzZXJ2YWJsZS5cbiAqL1xuaW50ZXJmYWNlIEV2ZW50TWV0YTxUPiB7XG4gIC8qKlxuICAgKiBJbnB1dCBzdWJqZWN0IHVzZWQgZm9yIGRpc3BhdGNoaW5nIG9jY2FzaW9uYWwgZXZlbnQgKHdpdGhvdXQgcmVnaXN0ZXJpbmcgYSBzb3VyY2UpXG4gICAqL1xuICBpbnB1dFN1YmplY3QkOiBTdWJqZWN0PFQ+O1xuXG4gIC8qKlxuICAgKiBBIGN1c3RvbSBzdWJqZWN0IHRoYXQgYWxsb3dzIGZvciBkeW5hbWljIGFkZGluZyBhbmQgcmVtb3Zpbmcgc291cmNlcyB0byBiZSBtZXJnZWQgYXMgYW4gb3V0cHV0XG4gICAqL1xuICBtZXJnaW5nU3ViamVjdDogTWVyZ2luZ1N1YmplY3Q8VD47XG59XG5cbi8qKlxuICogQSBzZXJ2aWNlIHRvIHJlZ2lzdGVyIGFuZCBvYnNlcnZlIGV2ZW50IHNvdXJjZXMuIEV2ZW50cyBhcmUgZHJpdmVuIGJ5IGV2ZW50IHR5cGVzLCB3aGljaCBhcmUgY2xhc3Mgc2lnbmF0dXJlc1xuICogZm9yIHRoZSBnaXZlbiBldmVudC5cbiAqXG4gKiBJdCBpcyBwb3NzaWJsZSB0byByZWdpc3RlciBtdWx0aXBsZSBzb3VyY2VzIHRvIGEgc2luZ2xlIGV2ZW50LCBldmVuIHdpdGhvdXRcbiAqIGtub3dpbmcgYXMgbXVsdGlwbGUgZGVjb3VwbGVkIGZlYXR1cmVzIGNhbiBhdHRhY2ggc291cmNlcyB0byB0aGUgc2FtZVxuICogZXZlbnQgdHlwZS5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEV2ZW50U2VydmljZSB7XG4gIC8qKlxuICAgKiBUaGUgdmFyaW91cyBldmVudHMgbWV0YSBhcmUgY29sbGVjdGVkIGluIGEgbWFwLCBzdG9yZWQgYnkgdGhlIGV2ZW50IHR5cGUgY2xhc3NcbiAgICovXG4gIHByaXZhdGUgZXZlbnRzTWV0YSA9IG5ldyBNYXA8VHlwZTxhbnk+LCBFdmVudE1ldGE8YW55Pj4oKTtcblxuICAvKipcbiAgICogUmVnaXN0ZXIgYW4gZXZlbnQgc291cmNlIGZvciB0aGUgZ2l2ZW4gZXZlbnQgdHlwZS5cbiAgICpcbiAgICogQ0FVVElPTjogVG8gYXZvaWQgbWVtb3J5IGxlYWtzLCB0aGUgcmV0dXJuZWQgdGVhcmRvd24gZnVuY3Rpb24gc2hvdWxkIGJlIGNhbGxlZFxuICAgKiAgd2hlbiB0aGUgZXZlbnQgc291cmNlIGlzIG5vIGxvbmdlciBtYWludGFpbmVkIGJ5IGl0cyBjcmVhdG9yXG4gICAqIChpLmUuIGluIGBuZ09uRGVzdHJveWAgaWYgdGhlIGV2ZW50IHNvdXJjZSB3YXMgcmVnaXN0ZXJlZCBpbiB0aGUgY29tcG9uZW50KS5cbiAgICpcbiAgICogQHBhcmFtIGV2ZW50VHlwZSB0aGUgZXZlbnQgdHlwZVxuICAgKiBAcGFyYW0gc291cmNlJCBhbiBvYnNlcnZhYmxlIHRoYXQgcmVwcmVzZW50cyB0aGUgc291cmNlXG4gICAqXG4gICAqIEByZXR1cm5zIGEgdGVhcmRvd24gZnVuY3Rpb24gd2hpY2ggdW5yZWdpc3RlcnMgdGhlIGdpdmVuIGV2ZW50IHNvdXJjZVxuICAgKi9cbiAgcmVnaXN0ZXI8VD4oZXZlbnRUeXBlOiBUeXBlPFQ+LCBzb3VyY2UkOiBPYnNlcnZhYmxlPFQ+KTogKCkgPT4gdm9pZCB7XG4gICAgY29uc3QgZXZlbnRNZXRhID0gdGhpcy5nZXRFdmVudE1ldGEoZXZlbnRUeXBlKTtcbiAgICBpZiAoZXZlbnRNZXRhLm1lcmdpbmdTdWJqZWN0Lmhhcyhzb3VyY2UkKSkge1xuICAgICAgaWYgKGlzRGV2TW9kZSgpKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICBgRXZlbnRTZXJ2aWNlOiB0aGUgZXZlbnQgc291cmNlYCxcbiAgICAgICAgICBzb3VyY2UkLFxuICAgICAgICAgIGBoYXMgYmVlbiBhbHJlYWR5IHJlZ2lzdGVyZWQgZm9yIHRoZSB0eXBlYCxcbiAgICAgICAgICBldmVudFR5cGVcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZXZlbnRNZXRhLm1lcmdpbmdTdWJqZWN0LmFkZChzb3VyY2UkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKCkgPT4gZXZlbnRNZXRhLm1lcmdpbmdTdWJqZWN0LnJlbW92ZShzb3VyY2UkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgc3RyZWFtIG9mIGV2ZW50cyBmb3IgdGhlIGdpdmVuIGV2ZW50IHR5cGVcbiAgICogQHBhcmFtIGV2ZW50VHlwZXMgZXZlbnQgdHlwZVxuICAgKi9cbiAgZ2V0PFQ+KGV2ZW50VHlwZTogVHlwZTxUPik6IE9ic2VydmFibGU8VD4ge1xuICAgIGxldCBvdXRwdXQkID0gdGhpcy5nZXRFdmVudE1ldGEoZXZlbnRUeXBlKS5tZXJnaW5nU3ViamVjdC5vdXRwdXQkO1xuICAgIGlmIChpc0Rldk1vZGUoKSkge1xuICAgICAgb3V0cHV0JCA9IHRoaXMuZ2V0VmFsaWRhdGVkRXZlbnRTdHJlYW0ob3V0cHV0JCwgZXZlbnRUeXBlKTtcbiAgICB9XG4gICAgcmV0dXJuIG91dHB1dCQ7XG4gIH1cblxuICAvKipcbiAgICogRGlzcGF0Y2hlcyBhbiBpbnN0YW5jZSBvZiBhbiBpbmRpdmlkdWFsIGV2ZW50LlxuICAgKi9cbiAgZGlzcGF0Y2goZXZlbnQ6IE9iamVjdCk6IHZvaWQge1xuICAgIGNvbnN0IGV2ZW50VHlwZSA9IGV2ZW50LmNvbnN0cnVjdG9yIGFzIFR5cGU8YW55PjtcbiAgICBjb25zdCBpbnB1dFN1YmplY3QkID0gdGhpcy5nZXRJbnB1dFN1YmplY3QoZXZlbnRUeXBlKTtcbiAgICBpbnB1dFN1YmplY3QkLm5leHQoZXZlbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGlucHV0IHN1YmplY3QgdXNlZCB0byBkaXNwYXRjaCBhIHNpbmdsZSBldmVudC5cbiAgICogVGhlIHN1YmplY3QgaXMgY3JlYXRlZCBvbiBkZW1hbmQsIHdoZW4gaXQncyBuZWVkZWQgZm9yIHRoZSBmaXJzdCB0aW1lLlxuICAgKiBAcGFyYW0gZXZlbnRUeXBlIHR5cGUgb2YgZXZlbnRcbiAgICovXG4gIHByaXZhdGUgZ2V0SW5wdXRTdWJqZWN0PFQ+KGV2ZW50VHlwZTogVHlwZTxUPik6IFN1YmplY3Q8VD4ge1xuICAgIGNvbnN0IGV2ZW50TWV0YSA9IHRoaXMuZ2V0RXZlbnRNZXRhKGV2ZW50VHlwZSk7XG5cbiAgICBpZiAoIWV2ZW50TWV0YS5pbnB1dFN1YmplY3QkKSB7XG4gICAgICBldmVudE1ldGEuaW5wdXRTdWJqZWN0JCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcbiAgICAgIHRoaXMucmVnaXN0ZXIoZXZlbnRUeXBlLCBldmVudE1ldGEuaW5wdXRTdWJqZWN0JCk7XG4gICAgfVxuICAgIHJldHVybiBldmVudE1ldGEuaW5wdXRTdWJqZWN0JDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBldmVudCBtZXRhIG9iamVjdCBmb3IgdGhlIGdpdmVuIGV2ZW50IHR5cGVcbiAgICovXG4gIHByaXZhdGUgZ2V0RXZlbnRNZXRhPFQ+KGV2ZW50VHlwZTogVHlwZTxUPik6IEV2ZW50TWV0YTxUPiB7XG4gICAgaWYgKGlzRGV2TW9kZSgpKSB7XG4gICAgICB0aGlzLnZhbGlkYXRlRXZlbnRUeXBlKGV2ZW50VHlwZSk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmV2ZW50c01ldGEuZ2V0KGV2ZW50VHlwZSkpIHtcbiAgICAgIHRoaXMuY3JlYXRlRXZlbnRNZXRhKGV2ZW50VHlwZSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmV2ZW50c01ldGEuZ2V0KGV2ZW50VHlwZSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyB0aGUgZXZlbnQgbWV0YSBvYmplY3QgZm9yIHRoZSBnaXZlbiBldmVudCB0eXBlXG4gICAqL1xuICBwcml2YXRlIGNyZWF0ZUV2ZW50TWV0YTxUPihldmVudFR5cGU6IFR5cGU8VD4pOiB2b2lkIHtcbiAgICB0aGlzLmV2ZW50c01ldGEuc2V0KGV2ZW50VHlwZSwge1xuICAgICAgaW5wdXRTdWJqZWN0JDogbnVsbCwgLy8gd2lsbCBiZSBjcmVhdGVkIGxhemlseSBieSB0aGUgYGRpc3BhdGNoYCBtZXRob2RcbiAgICAgIG1lcmdpbmdTdWJqZWN0OiBuZXcgTWVyZ2luZ1N1YmplY3QoKSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdGhlIGV2ZW50IHR5cGUgaXMgYSB2YWxpZCB0eXBlIChpcyBhIGNsYXNzIHdpdGggY29uc3RydWN0b3IpLlxuICAgKlxuICAgKiBTaG91bGQgYmUgdXNlZCBvbmx5IGluIGRldiBtb2RlLlxuICAgKi9cbiAgcHJpdmF0ZSB2YWxpZGF0ZUV2ZW50VHlwZTxUPihldmVudFR5cGU6IFR5cGU8VD4pOiB2b2lkIHtcbiAgICBpZiAoIWV2ZW50VHlwZT8uY29uc3RydWN0b3IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEV2ZW50U2VydmljZTogICR7ZXZlbnRUeXBlfSBpcyBub3QgYSB2YWxpZCBldmVudCB0eXBlLiBQbGVhc2UgcHJvdmlkZSBhIGNsYXNzIHJlZmVyZW5jZS5gXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBnaXZlbiBldmVudCBzb3VyY2Ugd2l0aCBydW50aW1lIHZhbGlkYXRpb24gd2hldGhlciB0aGUgZW1pdHRlZCB2YWx1ZXMgYXJlIGluc3RhbmNlcyBvZiBnaXZlbiBldmVudCB0eXBlLlxuICAgKlxuICAgKiBTaG91bGQgYmUgdXNlZCBvbmx5IGluIGRldiBtb2RlLlxuICAgKi9cbiAgcHJpdmF0ZSBnZXRWYWxpZGF0ZWRFdmVudFN0cmVhbTxUPihcbiAgICBzb3VyY2UkOiBPYnNlcnZhYmxlPFQ+LFxuICAgIGV2ZW50VHlwZTogVHlwZTxUPlxuICApOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICByZXR1cm4gc291cmNlJC5waXBlKFxuICAgICAgdGFwKChldmVudCkgPT4ge1xuICAgICAgICBpZiAoIShldmVudCBpbnN0YW5jZW9mIGV2ZW50VHlwZSkpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgRXZlbnRTZXJ2aWNlOiBUaGUgc3RyZWFtYCxcbiAgICAgICAgICAgIHNvdXJjZSQsXG4gICAgICAgICAgICBgZW1pdHRlZCB0aGUgZXZlbnRgLFxuICAgICAgICAgICAgZXZlbnQsXG4gICAgICAgICAgICBgdGhhdCBpcyBub3QgYW4gaW5zdGFuY2Ugb2YgdGhlIGRlY2xhcmVkIHR5cGVgLFxuICAgICAgICAgICAgZXZlbnRUeXBlLm5hbWVcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gIH1cbn1cbiJdfQ==
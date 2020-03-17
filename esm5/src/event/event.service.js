import { __decorate, __read, __spread } from "tslib";
import { Injectable, isDevMode } from '@angular/core';
import { BehaviorSubject, merge, Subject } from 'rxjs';
import { share, switchMap, tap } from 'rxjs/operators';
import * as i0 from "@angular/core";
/**
 * A service to register and observe event sources. Events are driven by event types, which are class signatures
 * for the given event.
 *
 * It is possible to register multiple sources to a single event, even without
 * knowing as multiple decoupled features can attach sources to the same
 * event type.
 */
var EventService = /** @class */ (function () {
    function EventService() {
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
    EventService.prototype.register = function (eventType, source$) {
        var _this = this;
        var event = this.getEventMeta(eventType);
        var sources = event.sources$.value;
        if (sources.includes(source$)) {
            if (isDevMode()) {
                console.warn("EventService: the event source", source$, "has been already registered for the type", eventType);
            }
        }
        else {
            event.sources$.next(__spread(sources, [source$]));
        }
        return function () { return _this.unregister(eventType, source$); };
    };
    /**
     * Unregisters an event source for the given event type
     *
     * @param eventType the event type
     * @param source$ an observable that represents the source
     */
    EventService.prototype.unregister = function (eventType, source$) {
        var event = this.getEventMeta(eventType);
        var newSources = event.sources$.value.filter(function (s$) { return s$ !== source$; });
        event.sources$.next(newSources);
    };
    /**
     * Returns a stream of events for the given event type
     * @param eventTypes event type
     */
    EventService.prototype.get = function (eventType) {
        return this.getEventMeta(eventType).output$;
    };
    /**
     * Dispatches a single event.
     *
     * However, it's recommended to use method `register` instead, whenever the event can come from some stream.
     *  It allows for lazy computations in the event source stream -
     *  if no one subscribes to the event, the logic of the event source stream won't be evaluated.
     */
    EventService.prototype.dispatch = function (event) {
        var eventType = event.constructor;
        var inputSubject$ = this.getInputSubject(eventType);
        inputSubject$.next(event);
    };
    /**
     * Returns the input subject used to dispatch a single event.
     * The subject is created on demand, when it's needed for the first time.
     * @param eventType type of event
     */
    EventService.prototype.getInputSubject = function (eventType) {
        var eventMeta = this.getEventMeta(eventType);
        if (!eventMeta.inputSubject$) {
            eventMeta.inputSubject$ = new Subject();
            this.register(eventType, eventMeta.inputSubject$);
        }
        return eventMeta.inputSubject$;
    };
    /**
     * Returns the event meta object for the given event type
     */
    EventService.prototype.getEventMeta = function (eventType) {
        if (isDevMode()) {
            this.validateEventType(eventType);
        }
        if (!this.eventsMeta.get(eventType)) {
            this.createEventMeta(eventType);
        }
        return this.eventsMeta.get(eventType);
    };
    /**
     * Creates the event meta object for the given event type
     */
    EventService.prototype.createEventMeta = function (eventType) {
        var sources$ = new BehaviorSubject([]);
        var output$ = sources$.pipe(switchMap(function (sources) { return merge.apply(void 0, __spread(sources)); }), share() // share the result observable to avoid merging sources for each subscriber
        );
        if (isDevMode()) {
            output$ = this.validateEventStream(output$, eventType);
        }
        this.eventsMeta.set(eventType, {
            inputSubject$: null,
            sources$: sources$,
            output$: output$,
        });
    };
    /**
     * Checks if the event type is a valid type (is a class with constructor).
     *
     * Should be used only in dev mode.
     */
    EventService.prototype.validateEventType = function (eventType) {
        var _a;
        if (!((_a = eventType) === null || _a === void 0 ? void 0 : _a.constructor)) {
            throw new Error("EventService:  " + eventType + " is not a valid event type. Please provide a class reference.");
        }
    };
    /**
     * Returns the given event source with runtime validation whether the emitted values are instances of given event type.
     *
     * Should be used only in dev mode.
     */
    EventService.prototype.validateEventStream = function (source$, eventType) {
        return source$.pipe(tap(function (event) {
            if (!(event instanceof eventType)) {
                console.warn("EventService: The stream", source$, "emitted the event", event, "that is not an instance of the declared type", eventType.name);
            }
        }));
    };
    EventService.ɵprov = i0.ɵɵdefineInjectable({ factory: function EventService_Factory() { return new EventService(); }, token: EventService, providedIn: "root" });
    EventService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], EventService);
    return EventService;
}());
export { EventService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9ldmVudC9ldmVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBUSxNQUFNLGVBQWUsQ0FBQztBQUM1RCxPQUFPLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbkUsT0FBTyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBc0J2RDs7Ozs7OztHQU9HO0FBSUg7SUFBQTtRQUNFOztXQUVHO1FBQ0ssZUFBVSxHQUFHLElBQUksR0FBRyxFQUE2QixDQUFDO0tBMkozRDtJQXpKQzs7Ozs7Ozs7Ozs7T0FXRztJQUNILCtCQUFRLEdBQVIsVUFBWSxTQUFrQixFQUFFLE9BQXNCO1FBQXRELGlCQWlCQztRQWhCQyxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzNDLElBQU0sT0FBTyxHQUFvQixLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztRQUN0RCxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDN0IsSUFBSSxTQUFTLEVBQUUsRUFBRTtnQkFDZixPQUFPLENBQUMsSUFBSSxDQUNWLGdDQUFnQyxFQUNoQyxPQUFPLEVBQ1AsMENBQTBDLEVBQzFDLFNBQVMsQ0FDVixDQUFDO2FBQ0g7U0FDRjthQUFNO1lBQ0wsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFVBQUssT0FBTyxHQUFFLE9BQU8sR0FBRSxDQUFDO1NBQzVDO1FBRUQsT0FBTyxjQUFNLE9BQUEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLEVBQW5DLENBQW1DLENBQUM7SUFDbkQsQ0FBQztJQUVE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Q0UsT0FBc0IsRUFDdEIsU0FBa0I7UUFFbEIsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUNqQixHQUFHLENBQUMsVUFBQSxLQUFLO1lBQ1AsSUFBSSxDQUFDLENBQUMsS0FBSyxZQUFZLFNBQVMsQ0FBQyxFQUFFO2dCQUNqQyxPQUFPLENBQUMsSUFBSSxDQUNWLDBCQUEwQixFQUMxQixPQUFPLEVBQ1AsbUJBQW1CLEVBQ25CLEtBQUssRUFDTCw4Q0FBOEMsRUFDOUMsU0FBUyxDQUFDLElBQUksQ0FDZixDQUFDO2FBQ0g7UUFDSCxDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7SUE5SlUsWUFBWTtRQUh4QixVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO09BQ1csWUFBWSxDQStKeEI7dUJBbE1EO0NBa01DLEFBL0pELElBK0pDO1NBL0pZLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBpc0Rldk1vZGUsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgbWVyZ2UsIE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHNoYXJlLCBzd2l0Y2hNYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuLyoqXG4gKiBUaGUgb2JqZWN0IGhvbGRzIHJlZ2lzdGVyZWQgc291cmNlIG9ic2VydmFibGVzIGFzIHdlbGwgYXMgdGhlIG1lcmdlZCByZXN1bHQgb2JzZXJ2YWJsZS5cbiAqL1xuaW50ZXJmYWNlIEV2ZW50TWV0YTxUPiB7XG4gIC8qKlxuICAgKiBJbnB1dCBzdWJqZWN0IHVzZWQgZm9yIGRpc3BhdGNoaW5nIG9jY2FzaW9uYWwgZXZlbnQgKHdpdGhvdXQgcmVnaXN0ZXJpbmcgYSBzb3VyY2UpXG4gICAqL1xuICBpbnB1dFN1YmplY3QkOiBTdWJqZWN0PFQ+O1xuXG4gIC8qKlxuICAgKiBPYnNlcnZhYmxlIHdpdGggYXJyYXkgb2Ygc291cmNlcyBvZiB0aGUgZXZlbnRcbiAgICovXG4gIHNvdXJjZXMkOiBCZWhhdmlvclN1YmplY3Q8T2JzZXJ2YWJsZTxUPltdPjtcblxuICAvKipcbiAgICogT3V0cHV0IG9ic2VydmFibGUgd2l0aCBtZXJnZWQgYWxsIGV2ZW50IHNvdXJjZXNcbiAgICovXG4gIG91dHB1dCQ6IE9ic2VydmFibGU8VD47XG59XG5cbi8qKlxuICogQSBzZXJ2aWNlIHRvIHJlZ2lzdGVyIGFuZCBvYnNlcnZlIGV2ZW50IHNvdXJjZXMuIEV2ZW50cyBhcmUgZHJpdmVuIGJ5IGV2ZW50IHR5cGVzLCB3aGljaCBhcmUgY2xhc3Mgc2lnbmF0dXJlc1xuICogZm9yIHRoZSBnaXZlbiBldmVudC5cbiAqXG4gKiBJdCBpcyBwb3NzaWJsZSB0byByZWdpc3RlciBtdWx0aXBsZSBzb3VyY2VzIHRvIGEgc2luZ2xlIGV2ZW50LCBldmVuIHdpdGhvdXRcbiAqIGtub3dpbmcgYXMgbXVsdGlwbGUgZGVjb3VwbGVkIGZlYXR1cmVzIGNhbiBhdHRhY2ggc291cmNlcyB0byB0aGUgc2FtZVxuICogZXZlbnQgdHlwZS5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEV2ZW50U2VydmljZSB7XG4gIC8qKlxuICAgKiBUaGUgdmFyaW91cyBldmVudHMgbWV0YSBhcmUgY29sbGVjdGVkIGluIGEgbWFwLCBzdG9yZWQgYnkgdGhlIGV2ZW50IHR5cGUgY2xhc3NcbiAgICovXG4gIHByaXZhdGUgZXZlbnRzTWV0YSA9IG5ldyBNYXA8VHlwZTxhbnk+LCBFdmVudE1ldGE8YW55Pj4oKTtcblxuICAvKipcbiAgICogUmVnaXN0ZXIgYW4gZXZlbnQgc291cmNlIGZvciB0aGUgZ2l2ZW4gZXZlbnQgdHlwZS5cbiAgICpcbiAgICogQ0FVVElPTjogVG8gYXZvaWQgbWVtb3J5IGxlYWtzLCB0aGUgcmV0dXJuZWQgdGVhcmRvd24gZnVuY3Rpb24gc2hvdWxkIGJlIGNhbGxlZFxuICAgKiAgd2hlbiB0aGUgZXZlbnQgc291cmNlIGlzIG5vIGxvbmdlciBtYWludGFpbmVkIGJ5IGl0cyBjcmVhdG9yXG4gICAqIChpLmUuIGluIGBuZ09uRGVzdHJveWAgaWYgdGhlIGV2ZW50IHNvdXJjZSB3YXMgcmVnaXN0ZXJlZCBpbiB0aGUgY29tcG9uZW50KS5cbiAgICpcbiAgICogQHBhcmFtIGV2ZW50VHlwZSB0aGUgZXZlbnQgdHlwZVxuICAgKiBAcGFyYW0gc291cmNlJCBhbiBvYnNlcnZhYmxlIHRoYXQgcmVwcmVzZW50cyB0aGUgc291cmNlXG4gICAqXG4gICAqIEByZXR1cm5zIGEgdGVhcmRvd24gZnVuY3Rpb24gd2hpY2ggdW5yZWdpc3RlcnMgdGhlIGdpdmVuIGV2ZW50IHNvdXJjZVxuICAgKi9cbiAgcmVnaXN0ZXI8VD4oZXZlbnRUeXBlOiBUeXBlPFQ+LCBzb3VyY2UkOiBPYnNlcnZhYmxlPFQ+KTogKCkgPT4gdm9pZCB7XG4gICAgY29uc3QgZXZlbnQgPSB0aGlzLmdldEV2ZW50TWV0YShldmVudFR5cGUpO1xuICAgIGNvbnN0IHNvdXJjZXM6IE9ic2VydmFibGU8VD5bXSA9IGV2ZW50LnNvdXJjZXMkLnZhbHVlO1xuICAgIGlmIChzb3VyY2VzLmluY2x1ZGVzKHNvdXJjZSQpKSB7XG4gICAgICBpZiAoaXNEZXZNb2RlKCkpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgIGBFdmVudFNlcnZpY2U6IHRoZSBldmVudCBzb3VyY2VgLFxuICAgICAgICAgIHNvdXJjZSQsXG4gICAgICAgICAgYGhhcyBiZWVuIGFscmVhZHkgcmVnaXN0ZXJlZCBmb3IgdGhlIHR5cGVgLFxuICAgICAgICAgIGV2ZW50VHlwZVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBldmVudC5zb3VyY2VzJC5uZXh0KFsuLi5zb3VyY2VzLCBzb3VyY2UkXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuICgpID0+IHRoaXMudW5yZWdpc3RlcihldmVudFR5cGUsIHNvdXJjZSQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVucmVnaXN0ZXJzIGFuIGV2ZW50IHNvdXJjZSBmb3IgdGhlIGdpdmVuIGV2ZW50IHR5cGVcbiAgICpcbiAgICogQHBhcmFtIGV2ZW50VHlwZSB0aGUgZXZlbnQgdHlwZVxuICAgKiBAcGFyYW0gc291cmNlJCBhbiBvYnNlcnZhYmxlIHRoYXQgcmVwcmVzZW50cyB0aGUgc291cmNlXG4gICAqL1xuICBwcml2YXRlIHVucmVnaXN0ZXI8VD4oZXZlbnRUeXBlOiBUeXBlPFQ+LCBzb3VyY2UkOiBPYnNlcnZhYmxlPFQ+KTogdm9pZCB7XG4gICAgY29uc3QgZXZlbnQgPSB0aGlzLmdldEV2ZW50TWV0YShldmVudFR5cGUpO1xuICAgIGNvbnN0IG5ld1NvdXJjZXM6IE9ic2VydmFibGU8VD5bXSA9IGV2ZW50LnNvdXJjZXMkLnZhbHVlLmZpbHRlcihcbiAgICAgIHMkID0+IHMkICE9PSBzb3VyY2UkXG4gICAgKTtcbiAgICBldmVudC5zb3VyY2VzJC5uZXh0KG5ld1NvdXJjZXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBzdHJlYW0gb2YgZXZlbnRzIGZvciB0aGUgZ2l2ZW4gZXZlbnQgdHlwZVxuICAgKiBAcGFyYW0gZXZlbnRUeXBlcyBldmVudCB0eXBlXG4gICAqL1xuICBnZXQ8VD4oZXZlbnRUeXBlOiBUeXBlPFQ+KTogT2JzZXJ2YWJsZTxUPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0RXZlbnRNZXRhKGV2ZW50VHlwZSkub3V0cHV0JDtcbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNwYXRjaGVzIGEgc2luZ2xlIGV2ZW50LlxuICAgKlxuICAgKiBIb3dldmVyLCBpdCdzIHJlY29tbWVuZGVkIHRvIHVzZSBtZXRob2QgYHJlZ2lzdGVyYCBpbnN0ZWFkLCB3aGVuZXZlciB0aGUgZXZlbnQgY2FuIGNvbWUgZnJvbSBzb21lIHN0cmVhbS5cbiAgICogIEl0IGFsbG93cyBmb3IgbGF6eSBjb21wdXRhdGlvbnMgaW4gdGhlIGV2ZW50IHNvdXJjZSBzdHJlYW0gLVxuICAgKiAgaWYgbm8gb25lIHN1YnNjcmliZXMgdG8gdGhlIGV2ZW50LCB0aGUgbG9naWMgb2YgdGhlIGV2ZW50IHNvdXJjZSBzdHJlYW0gd29uJ3QgYmUgZXZhbHVhdGVkLlxuICAgKi9cbiAgZGlzcGF0Y2goZXZlbnQ6IE9iamVjdCk6IHZvaWQge1xuICAgIGNvbnN0IGV2ZW50VHlwZSA9IGV2ZW50LmNvbnN0cnVjdG9yIGFzIFR5cGU8YW55PjtcbiAgICBjb25zdCBpbnB1dFN1YmplY3QkID0gdGhpcy5nZXRJbnB1dFN1YmplY3QoZXZlbnRUeXBlKTtcbiAgICBpbnB1dFN1YmplY3QkLm5leHQoZXZlbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGlucHV0IHN1YmplY3QgdXNlZCB0byBkaXNwYXRjaCBhIHNpbmdsZSBldmVudC5cbiAgICogVGhlIHN1YmplY3QgaXMgY3JlYXRlZCBvbiBkZW1hbmQsIHdoZW4gaXQncyBuZWVkZWQgZm9yIHRoZSBmaXJzdCB0aW1lLlxuICAgKiBAcGFyYW0gZXZlbnRUeXBlIHR5cGUgb2YgZXZlbnRcbiAgICovXG4gIHByaXZhdGUgZ2V0SW5wdXRTdWJqZWN0PFQ+KGV2ZW50VHlwZTogVHlwZTxUPik6IFN1YmplY3Q8VD4ge1xuICAgIGNvbnN0IGV2ZW50TWV0YSA9IHRoaXMuZ2V0RXZlbnRNZXRhKGV2ZW50VHlwZSk7XG5cbiAgICBpZiAoIWV2ZW50TWV0YS5pbnB1dFN1YmplY3QkKSB7XG4gICAgICBldmVudE1ldGEuaW5wdXRTdWJqZWN0JCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcbiAgICAgIHRoaXMucmVnaXN0ZXIoZXZlbnRUeXBlLCBldmVudE1ldGEuaW5wdXRTdWJqZWN0JCk7XG4gICAgfVxuICAgIHJldHVybiBldmVudE1ldGEuaW5wdXRTdWJqZWN0JDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBldmVudCBtZXRhIG9iamVjdCBmb3IgdGhlIGdpdmVuIGV2ZW50IHR5cGVcbiAgICovXG4gIHByaXZhdGUgZ2V0RXZlbnRNZXRhPFQ+KGV2ZW50VHlwZTogVHlwZTxUPik6IEV2ZW50TWV0YTxUPiB7XG4gICAgaWYgKGlzRGV2TW9kZSgpKSB7XG4gICAgICB0aGlzLnZhbGlkYXRlRXZlbnRUeXBlKGV2ZW50VHlwZSk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmV2ZW50c01ldGEuZ2V0KGV2ZW50VHlwZSkpIHtcbiAgICAgIHRoaXMuY3JlYXRlRXZlbnRNZXRhKGV2ZW50VHlwZSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmV2ZW50c01ldGEuZ2V0KGV2ZW50VHlwZSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyB0aGUgZXZlbnQgbWV0YSBvYmplY3QgZm9yIHRoZSBnaXZlbiBldmVudCB0eXBlXG4gICAqL1xuICBwcml2YXRlIGNyZWF0ZUV2ZW50TWV0YTxUPihldmVudFR5cGU6IFR5cGU8VD4pOiB2b2lkIHtcbiAgICBjb25zdCBzb3VyY2VzJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8T2JzZXJ2YWJsZTxUPltdPihbXSk7XG4gICAgbGV0IG91dHB1dCQgPSBzb3VyY2VzJC5waXBlKFxuICAgICAgc3dpdGNoTWFwKChzb3VyY2VzOiBPYnNlcnZhYmxlPFQ+W10pID0+IG1lcmdlKC4uLnNvdXJjZXMpKSxcbiAgICAgIHNoYXJlKCkgLy8gc2hhcmUgdGhlIHJlc3VsdCBvYnNlcnZhYmxlIHRvIGF2b2lkIG1lcmdpbmcgc291cmNlcyBmb3IgZWFjaCBzdWJzY3JpYmVyXG4gICAgKTtcblxuICAgIGlmIChpc0Rldk1vZGUoKSkge1xuICAgICAgb3V0cHV0JCA9IHRoaXMudmFsaWRhdGVFdmVudFN0cmVhbShvdXRwdXQkLCBldmVudFR5cGUpO1xuICAgIH1cblxuICAgIHRoaXMuZXZlbnRzTWV0YS5zZXQoZXZlbnRUeXBlLCB7XG4gICAgICBpbnB1dFN1YmplY3QkOiBudWxsLCAvLyB3aWxsIGJlIGNyZWF0ZWQgbGF6aWx5IGJ5IHRoZSBgZGlzcGF0Y2hgIG1ldGhvZFxuICAgICAgc291cmNlcyQsXG4gICAgICBvdXRwdXQkLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiB0aGUgZXZlbnQgdHlwZSBpcyBhIHZhbGlkIHR5cGUgKGlzIGEgY2xhc3Mgd2l0aCBjb25zdHJ1Y3RvcikuXG4gICAqXG4gICAqIFNob3VsZCBiZSB1c2VkIG9ubHkgaW4gZGV2IG1vZGUuXG4gICAqL1xuICBwcml2YXRlIHZhbGlkYXRlRXZlbnRUeXBlPFQ+KGV2ZW50VHlwZTogVHlwZTxUPik6IHZvaWQge1xuICAgIGlmICghZXZlbnRUeXBlPy5jb25zdHJ1Y3Rvcikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgRXZlbnRTZXJ2aWNlOiAgJHtldmVudFR5cGV9IGlzIG5vdCBhIHZhbGlkIGV2ZW50IHR5cGUuIFBsZWFzZSBwcm92aWRlIGEgY2xhc3MgcmVmZXJlbmNlLmBcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGdpdmVuIGV2ZW50IHNvdXJjZSB3aXRoIHJ1bnRpbWUgdmFsaWRhdGlvbiB3aGV0aGVyIHRoZSBlbWl0dGVkIHZhbHVlcyBhcmUgaW5zdGFuY2VzIG9mIGdpdmVuIGV2ZW50IHR5cGUuXG4gICAqXG4gICAqIFNob3VsZCBiZSB1c2VkIG9ubHkgaW4gZGV2IG1vZGUuXG4gICAqL1xuICBwcml2YXRlIHZhbGlkYXRlRXZlbnRTdHJlYW08VD4oXG4gICAgc291cmNlJDogT2JzZXJ2YWJsZTxUPixcbiAgICBldmVudFR5cGU6IFR5cGU8VD5cbiAgKTogT2JzZXJ2YWJsZTxUPiB7XG4gICAgcmV0dXJuIHNvdXJjZSQucGlwZShcbiAgICAgIHRhcChldmVudCA9PiB7XG4gICAgICAgIGlmICghKGV2ZW50IGluc3RhbmNlb2YgZXZlbnRUeXBlKSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBFdmVudFNlcnZpY2U6IFRoZSBzdHJlYW1gLFxuICAgICAgICAgICAgc291cmNlJCxcbiAgICAgICAgICAgIGBlbWl0dGVkIHRoZSBldmVudGAsXG4gICAgICAgICAgICBldmVudCxcbiAgICAgICAgICAgIGB0aGF0IGlzIG5vdCBhbiBpbnN0YW5jZSBvZiB0aGUgZGVjbGFyZWQgdHlwZWAsXG4gICAgICAgICAgICBldmVudFR5cGUubmFtZVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgfVxufVxuIl19
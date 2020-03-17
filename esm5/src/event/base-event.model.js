/**
 * Base class for events.
 *
 * For convenience it copies all properties of the argument object into the properties of the class instance.
 *
 * Provides type safety both for the argument and the result class instance. For example:
 *
 * ```
 * export class CreateCartSuccess extends BaseEvent<CreateCartSuccess> {
 *   cart: Cart;
 * }
 * const event = new CreateCartSuccess({ cart: ... });
 * event.cart
 * ```
 */
var BaseEvent = /** @class */ (function () {
    function BaseEvent(data) {
        Object.assign(this, data);
    }
    return BaseEvent;
}());
export { BaseEvent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1ldmVudC5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9ldmVudC9iYXNlLWV2ZW50Lm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7OztHQWNHO0FBQ0g7SUFDRSxtQkFBWSxJQUFPO1FBQ2pCLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFDSCxnQkFBQztBQUFELENBQUMsQUFKRCxJQUlDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBCYXNlIGNsYXNzIGZvciBldmVudHMuXG4gKlxuICogRm9yIGNvbnZlbmllbmNlIGl0IGNvcGllcyBhbGwgcHJvcGVydGllcyBvZiB0aGUgYXJndW1lbnQgb2JqZWN0IGludG8gdGhlIHByb3BlcnRpZXMgb2YgdGhlIGNsYXNzIGluc3RhbmNlLlxuICpcbiAqIFByb3ZpZGVzIHR5cGUgc2FmZXR5IGJvdGggZm9yIHRoZSBhcmd1bWVudCBhbmQgdGhlIHJlc3VsdCBjbGFzcyBpbnN0YW5jZS4gRm9yIGV4YW1wbGU6XG4gKlxuICogYGBgXG4gKiBleHBvcnQgY2xhc3MgQ3JlYXRlQ2FydFN1Y2Nlc3MgZXh0ZW5kcyBCYXNlRXZlbnQ8Q3JlYXRlQ2FydFN1Y2Nlc3M+IHtcbiAqICAgY2FydDogQ2FydDtcbiAqIH1cbiAqIGNvbnN0IGV2ZW50ID0gbmV3IENyZWF0ZUNhcnRTdWNjZXNzKHsgY2FydDogLi4uIH0pO1xuICogZXZlbnQuY2FydFxuICogYGBgXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlRXZlbnQ8VD4ge1xuICBjb25zdHJ1Y3RvcihkYXRhOiBUKSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhKTtcbiAgfVxufVxuIl19
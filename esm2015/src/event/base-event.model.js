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
export class BaseEvent {
    constructor(data) {
        Object.assign(this, data);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1ldmVudC5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9ldmVudC9iYXNlLWV2ZW50Lm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7OztHQWNHO0FBQ0gsTUFBTSxPQUFnQixTQUFTO0lBQzdCLFlBQVksSUFBTztRQUNqQixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEJhc2UgY2xhc3MgZm9yIGV2ZW50cy5cbiAqXG4gKiBGb3IgY29udmVuaWVuY2UgaXQgY29waWVzIGFsbCBwcm9wZXJ0aWVzIG9mIHRoZSBhcmd1bWVudCBvYmplY3QgaW50byB0aGUgcHJvcGVydGllcyBvZiB0aGUgY2xhc3MgaW5zdGFuY2UuXG4gKlxuICogUHJvdmlkZXMgdHlwZSBzYWZldHkgYm90aCBmb3IgdGhlIGFyZ3VtZW50IGFuZCB0aGUgcmVzdWx0IGNsYXNzIGluc3RhbmNlLiBGb3IgZXhhbXBsZTpcbiAqXG4gKiBgYGBcbiAqIGV4cG9ydCBjbGFzcyBDcmVhdGVDYXJ0U3VjY2VzcyBleHRlbmRzIEJhc2VFdmVudDxDcmVhdGVDYXJ0U3VjY2Vzcz4ge1xuICogICBjYXJ0OiBDYXJ0O1xuICogfVxuICogY29uc3QgZXZlbnQgPSBuZXcgQ3JlYXRlQ2FydFN1Y2Nlc3MoeyBjYXJ0OiAuLi4gfSk7XG4gKiBldmVudC5jYXJ0XG4gKiBgYGBcbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VFdmVudDxUPiB7XG4gIGNvbnN0cnVjdG9yKGRhdGE6IFQpIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEpO1xuICB9XG59XG4iXX0=
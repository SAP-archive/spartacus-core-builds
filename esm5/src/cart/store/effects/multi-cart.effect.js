import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { CartActions } from '../actions/index';
var MultiCartEffects = /** @class */ (function () {
    function MultiCartEffects(actions$) {
        this.actions$ = actions$;
        this.setTempCart$ = this.actions$.pipe(ofType(CartActions.SET_TEMP_CART), map(function (action) {
            return new CartActions.RemoveCart({ cartId: action.payload.tempCartId });
        }));
        // TODO(#7241): Remove when we drop ADD_VOUCHER process and we sort out checkout and cart dependencies
        this.processesIncrement$ = this.actions$.pipe(ofType(CartActions.CART_ADD_VOUCHER), map(function (action) { return action.payload; }), map(function (payload) { return new CartActions.CartProcessesIncrement(payload.cartId); }));
    }
    MultiCartEffects.ctorParameters = function () { return [
        { type: Actions }
    ]; };
    __decorate([
        Effect()
    ], MultiCartEffects.prototype, "setTempCart$", void 0);
    __decorate([
        Effect()
    ], MultiCartEffects.prototype, "processesIncrement$", void 0);
    MultiCartEffects = __decorate([
        Injectable()
    ], MultiCartEffects);
    return MultiCartEffects;
}());
export { MultiCartEffects };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktY2FydC5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9zdG9yZS9lZmZlY3RzL211bHRpLWNhcnQuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV4RCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRy9DO0lBbUJFLDBCQUFvQixRQUFpQjtRQUFqQixhQUFRLEdBQVIsUUFBUSxDQUFTO1FBakJyQyxpQkFBWSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUMvQixNQUFNLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxFQUNqQyxHQUFHLENBQUMsVUFBQyxNQUErQjtZQUNsQyxPQUFPLElBQUksV0FBVyxDQUFDLFVBQVUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7UUFDM0UsQ0FBQyxDQUFDLENBQ0gsQ0FBQztRQUVGLHNHQUFzRztRQUV0Ryx3QkFBbUIsR0FFZixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUNwQyxHQUFHLENBQUMsVUFBQyxNQUFrQyxJQUFLLE9BQUEsTUFBTSxDQUFDLE9BQU8sRUFBZCxDQUFjLENBQUMsRUFDM0QsR0FBRyxDQUFDLFVBQUMsT0FBTyxJQUFLLE9BQUEsSUFBSSxXQUFXLENBQUMsc0JBQXNCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUF0RCxDQUFzRCxDQUFDLENBQ3pFLENBQUM7SUFFc0MsQ0FBQzs7Z0JBQVgsT0FBTzs7SUFqQnJDO1FBREMsTUFBTSxFQUFFOzBEQU1QO0lBSUY7UUFEQyxNQUFNLEVBQUU7aUVBT1A7SUFqQlMsZ0JBQWdCO1FBRDVCLFVBQVUsRUFBRTtPQUNBLGdCQUFnQixDQW9CNUI7SUFBRCx1QkFBQztDQUFBLEFBcEJELElBb0JDO1NBcEJZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDYXJ0QWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTXVsdGlDYXJ0RWZmZWN0cyB7XG4gIEBFZmZlY3QoKVxuICBzZXRUZW1wQ2FydCQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKENhcnRBY3Rpb25zLlNFVF9URU1QX0NBUlQpLFxuICAgIG1hcCgoYWN0aW9uOiBDYXJ0QWN0aW9ucy5TZXRUZW1wQ2FydCkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBDYXJ0QWN0aW9ucy5SZW1vdmVDYXJ0KHsgY2FydElkOiBhY3Rpb24ucGF5bG9hZC50ZW1wQ2FydElkIH0pO1xuICAgIH0pXG4gICk7XG5cbiAgLy8gVE9ETygjNzI0MSk6IFJlbW92ZSB3aGVuIHdlIGRyb3AgQUREX1ZPVUNIRVIgcHJvY2VzcyBhbmQgd2Ugc29ydCBvdXQgY2hlY2tvdXQgYW5kIGNhcnQgZGVwZW5kZW5jaWVzXG4gIEBFZmZlY3QoKVxuICBwcm9jZXNzZXNJbmNyZW1lbnQkOiBPYnNlcnZhYmxlPFxuICAgIENhcnRBY3Rpb25zLkNhcnRQcm9jZXNzZXNJbmNyZW1lbnRcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoQ2FydEFjdGlvbnMuQ0FSVF9BRERfVk9VQ0hFUiksXG4gICAgbWFwKChhY3Rpb246IENhcnRBY3Rpb25zLkNhcnRBZGRWb3VjaGVyKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWFwKChwYXlsb2FkKSA9PiBuZXcgQ2FydEFjdGlvbnMuQ2FydFByb2Nlc3Nlc0luY3JlbWVudChwYXlsb2FkLmNhcnRJZCkpXG4gICk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucykge31cbn1cbiJdfQ==
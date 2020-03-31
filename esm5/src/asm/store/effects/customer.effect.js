import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { makeErrorSerializable } from '../../../util/serialization-utils';
import { AsmConnector } from '../../connectors/asm.connector';
import { AsmActions } from '../actions/index';
var CustomerEffects = /** @class */ (function () {
    function CustomerEffects(actions$, asmConnector) {
        var _this = this;
        this.actions$ = actions$;
        this.asmConnector = asmConnector;
        this.customerSearch$ = this.actions$.pipe(ofType(AsmActions.CUSTOMER_SEARCH), map(function (action) { return action.payload; }), switchMap(function (options) {
            return _this.asmConnector.customerSearch(options).pipe(map(function (customerSearchResults) {
                return new AsmActions.CustomerSearchSuccess(customerSearchResults);
            }), catchError(function (error) {
                return of(new AsmActions.CustomerSearchFail(makeErrorSerializable(error)));
            }));
        }));
    }
    CustomerEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: AsmConnector }
    ]; };
    __decorate([
        Effect()
    ], CustomerEffects.prototype, "customerSearch$", void 0);
    CustomerEffects = __decorate([
        Injectable()
    ], CustomerEffects);
    return CustomerEffects;
}());
export { CustomerEffects };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXIuZWZmZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2FzbS9zdG9yZS9lZmZlY3RzL2N1c3RvbWVyLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFOUQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRzlDO0lBaUJFLHlCQUFvQixRQUFpQixFQUFVLFlBQTBCO1FBQXpFLGlCQUE2RTtRQUF6RCxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWM7UUFmekUsb0JBQWUsR0FBMEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3pFLE1BQU0sQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLEVBQ2xDLEdBQUcsQ0FBQyxVQUFDLE1BQWlDLElBQUssT0FBQSxNQUFNLENBQUMsT0FBTyxFQUFkLENBQWMsQ0FBQyxFQUMxRCxTQUFTLENBQUMsVUFBQyxPQUFPO1lBQ2hCLE9BQUEsS0FBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUM1QyxHQUFHLENBQUMsVUFBQyxxQkFBeUM7Z0JBQzVDLE9BQU8sSUFBSSxVQUFVLENBQUMscUJBQXFCLENBQUMscUJBQXFCLENBQUMsQ0FBQztZQUNyRSxDQUFDLENBQUMsRUFDRixVQUFVLENBQUMsVUFBQyxLQUFLO2dCQUNmLE9BQUEsRUFBRSxDQUFDLElBQUksVUFBVSxDQUFDLGtCQUFrQixDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFBbkUsQ0FBbUUsQ0FDcEUsQ0FDRjtRQVBELENBT0MsQ0FDRixDQUNGLENBQUM7SUFFMEUsQ0FBQzs7Z0JBQS9DLE9BQU87Z0JBQXdCLFlBQVk7O0lBZnpFO1FBREMsTUFBTSxFQUFFOzREQWNQO0lBZlMsZUFBZTtRQUQzQixVQUFVLEVBQUU7T0FDQSxlQUFlLENBa0IzQjtJQUFELHNCQUFDO0NBQUEsQUFsQkQsSUFrQkM7U0FsQlksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBtYWtlRXJyb3JTZXJpYWxpemFibGUgfSBmcm9tICcuLi8uLi8uLi91dGlsL3NlcmlhbGl6YXRpb24tdXRpbHMnO1xuaW1wb3J0IHsgQXNtQ29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9hc20uY29ubmVjdG9yJztcbmltcG9ydCB7IEN1c3RvbWVyU2VhcmNoUGFnZSB9IGZyb20gJy4uLy4uL21vZGVscy9hc20ubW9kZWxzJztcbmltcG9ydCB7IEFzbUFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEN1c3RvbWVyRWZmZWN0cyB7XG4gIEBFZmZlY3QoKVxuICBjdXN0b21lclNlYXJjaCQ6IE9ic2VydmFibGU8QXNtQWN0aW9ucy5DdXN0b21lckFjdGlvbj4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKEFzbUFjdGlvbnMuQ1VTVE9NRVJfU0VBUkNIKSxcbiAgICBtYXAoKGFjdGlvbjogQXNtQWN0aW9ucy5DdXN0b21lclNlYXJjaCkgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIHN3aXRjaE1hcCgob3B0aW9ucykgPT5cbiAgICAgIHRoaXMuYXNtQ29ubmVjdG9yLmN1c3RvbWVyU2VhcmNoKG9wdGlvbnMpLnBpcGUoXG4gICAgICAgIG1hcCgoY3VzdG9tZXJTZWFyY2hSZXN1bHRzOiBDdXN0b21lclNlYXJjaFBhZ2UpID0+IHtcbiAgICAgICAgICByZXR1cm4gbmV3IEFzbUFjdGlvbnMuQ3VzdG9tZXJTZWFyY2hTdWNjZXNzKGN1c3RvbWVyU2VhcmNoUmVzdWx0cyk7XG4gICAgICAgIH0pLFxuICAgICAgICBjYXRjaEVycm9yKChlcnJvcikgPT5cbiAgICAgICAgICBvZihuZXcgQXNtQWN0aW9ucy5DdXN0b21lclNlYXJjaEZhaWwobWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKSkpXG4gICAgICAgIClcbiAgICAgIClcbiAgICApXG4gICk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucywgcHJpdmF0ZSBhc21Db25uZWN0b3I6IEFzbUNvbm5lY3Rvcikge31cbn1cbiJdfQ==
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXIuZWZmZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2FzbS9zdG9yZS9lZmZlY3RzL2N1c3RvbWVyLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFOUQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRzlDO0lBaUJFLHlCQUFvQixRQUFpQixFQUFVLFlBQTBCO1FBQXpFLGlCQUE2RTtRQUF6RCxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWM7UUFmekUsb0JBQWUsR0FBMEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3pFLE1BQU0sQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLEVBQ2xDLEdBQUcsQ0FBQyxVQUFDLE1BQWlDLElBQUssT0FBQSxNQUFNLENBQUMsT0FBTyxFQUFkLENBQWMsQ0FBQyxFQUMxRCxTQUFTLENBQUMsVUFBQSxPQUFPO1lBQ2YsT0FBQSxLQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQzVDLEdBQUcsQ0FBQyxVQUFDLHFCQUF5QztnQkFDNUMsT0FBTyxJQUFJLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1lBQ3JFLENBQUMsQ0FBQyxFQUNGLFVBQVUsQ0FBQyxVQUFBLEtBQUs7Z0JBQ2QsT0FBQSxFQUFFLENBQUMsSUFBSSxVQUFVLENBQUMsa0JBQWtCLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUFuRSxDQUFtRSxDQUNwRSxDQUNGO1FBUEQsQ0FPQyxDQUNGLENBQ0YsQ0FBQztJQUUwRSxDQUFDOztnQkFBL0MsT0FBTztnQkFBd0IsWUFBWTs7SUFmekU7UUFEQyxNQUFNLEVBQUU7NERBY1A7SUFmUyxlQUFlO1FBRDNCLFVBQVUsRUFBRTtPQUNBLGVBQWUsQ0FrQjNCO0lBQUQsc0JBQUM7Q0FBQSxBQWxCRCxJQWtCQztTQWxCWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IG1ha2VFcnJvclNlcmlhbGl6YWJsZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvc2VyaWFsaXphdGlvbi11dGlscyc7XG5pbXBvcnQgeyBBc21Db25uZWN0b3IgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL2FzbS5jb25uZWN0b3InO1xuaW1wb3J0IHsgQ3VzdG9tZXJTZWFyY2hQYWdlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2FzbS5tb2RlbHMnO1xuaW1wb3J0IHsgQXNtQWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ3VzdG9tZXJFZmZlY3RzIHtcbiAgQEVmZmVjdCgpXG4gIGN1c3RvbWVyU2VhcmNoJDogT2JzZXJ2YWJsZTxBc21BY3Rpb25zLkN1c3RvbWVyQWN0aW9uPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoQXNtQWN0aW9ucy5DVVNUT01FUl9TRUFSQ0gpLFxuICAgIG1hcCgoYWN0aW9uOiBBc21BY3Rpb25zLkN1c3RvbWVyU2VhcmNoKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgc3dpdGNoTWFwKG9wdGlvbnMgPT5cbiAgICAgIHRoaXMuYXNtQ29ubmVjdG9yLmN1c3RvbWVyU2VhcmNoKG9wdGlvbnMpLnBpcGUoXG4gICAgICAgIG1hcCgoY3VzdG9tZXJTZWFyY2hSZXN1bHRzOiBDdXN0b21lclNlYXJjaFBhZ2UpID0+IHtcbiAgICAgICAgICByZXR1cm4gbmV3IEFzbUFjdGlvbnMuQ3VzdG9tZXJTZWFyY2hTdWNjZXNzKGN1c3RvbWVyU2VhcmNoUmVzdWx0cyk7XG4gICAgICAgIH0pLFxuICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgb2YobmV3IEFzbUFjdGlvbnMuQ3VzdG9tZXJTZWFyY2hGYWlsKG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcikpKVxuICAgICAgICApXG4gICAgICApXG4gICAgKVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsIHByaXZhdGUgYXNtQ29ubmVjdG9yOiBBc21Db25uZWN0b3IpIHt9XG59XG4iXX0=
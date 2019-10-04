/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { makeErrorSerializable } from '../../../util/serialization-utils';
import { AsmConnector } from '../../connectors/asm.connector';
import { AsmActions } from '../actions/index';
var CustomerEffects = /** @class */ (function () {
    function CustomerEffects(actions$, asmConnector) {
        var _this = this;
        this.actions$ = actions$;
        this.asmConnector = asmConnector;
        this.customerSearch$ = this.actions$.pipe(ofType(AsmActions.CUSTOMER_SEARCH), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.payload; })), mergeMap((/**
         * @param {?} options
         * @return {?}
         */
        function (options) {
            return _this.asmConnector.customerSearch(options).pipe(map((/**
             * @param {?} customerSearchResults
             * @return {?}
             */
            function (customerSearchResults) {
                return new AsmActions.CustomerSearchSuccess(customerSearchResults);
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return of(new AsmActions.CustomerSearchFail(makeErrorSerializable(error)));
            })));
        })));
    }
    CustomerEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CustomerEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: AsmConnector }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], CustomerEffects.prototype, "customerSearch$", void 0);
    return CustomerEffects;
}());
export { CustomerEffects };
if (false) {
    /** @type {?} */
    CustomerEffects.prototype.customerSearch$;
    /**
     * @type {?}
     * @private
     */
    CustomerEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    CustomerEffects.prototype.asmConnector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXIuZWZmZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2FzbS9zdG9yZS9lZmZlY3RzL2N1c3RvbWVyLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUU5RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFOUM7SUFrQkUseUJBQW9CLFFBQWlCLEVBQVUsWUFBMEI7UUFBekUsaUJBQTZFO1FBQXpELGFBQVEsR0FBUixRQUFRLENBQVM7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQWZ6RSxvQkFBZSxHQUEwQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDekUsTUFBTSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsRUFDbEMsR0FBRzs7OztRQUFDLFVBQUMsTUFBaUMsSUFBSyxPQUFBLE1BQU0sQ0FBQyxPQUFPLEVBQWQsQ0FBYyxFQUFDLEVBQzFELFFBQVE7Ozs7UUFBQyxVQUFBLE9BQU87WUFDZCxPQUFBLEtBQUksQ0FBQyxZQUFZLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FDNUMsR0FBRzs7OztZQUFDLFVBQUMscUJBQXlDO2dCQUM1QyxPQUFPLElBQUksVUFBVSxDQUFDLHFCQUFxQixDQUFDLHFCQUFxQixDQUFDLENBQUM7WUFDckUsQ0FBQyxFQUFDLEVBQ0YsVUFBVTs7OztZQUFDLFVBQUEsS0FBSztnQkFDZCxPQUFBLEVBQUUsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQW5FLENBQW1FLEVBQ3BFLENBQ0Y7UUFQRCxDQU9DLEVBQ0YsQ0FDRixDQUFDO0lBRTBFLENBQUM7O2dCQWxCOUUsVUFBVTs7OztnQkFSRixPQUFPO2dCQUlQLFlBQVk7O0lBT25CO1FBREMsTUFBTSxFQUFFOzBDQUNRLFVBQVU7NERBYXpCO0lBR0osc0JBQUM7Q0FBQSxBQW5CRCxJQW1CQztTQWxCWSxlQUFlOzs7SUFDMUIsMENBY0U7Ozs7O0lBRVUsbUNBQXlCOzs7OztJQUFFLHVDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwLCBtZXJnZU1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IG1ha2VFcnJvclNlcmlhbGl6YWJsZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvc2VyaWFsaXphdGlvbi11dGlscyc7XG5pbXBvcnQgeyBBc21Db25uZWN0b3IgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL2FzbS5jb25uZWN0b3InO1xuaW1wb3J0IHsgQ3VzdG9tZXJTZWFyY2hQYWdlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2FzbS5tb2RlbHMnO1xuaW1wb3J0IHsgQXNtQWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ3VzdG9tZXJFZmZlY3RzIHtcbiAgQEVmZmVjdCgpXG4gIGN1c3RvbWVyU2VhcmNoJDogT2JzZXJ2YWJsZTxBc21BY3Rpb25zLkN1c3RvbWVyQWN0aW9uPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoQXNtQWN0aW9ucy5DVVNUT01FUl9TRUFSQ0gpLFxuICAgIG1hcCgoYWN0aW9uOiBBc21BY3Rpb25zLkN1c3RvbWVyU2VhcmNoKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWVyZ2VNYXAob3B0aW9ucyA9PlxuICAgICAgdGhpcy5hc21Db25uZWN0b3IuY3VzdG9tZXJTZWFyY2gob3B0aW9ucykucGlwZShcbiAgICAgICAgbWFwKChjdXN0b21lclNlYXJjaFJlc3VsdHM6IEN1c3RvbWVyU2VhcmNoUGFnZSkgPT4ge1xuICAgICAgICAgIHJldHVybiBuZXcgQXNtQWN0aW9ucy5DdXN0b21lclNlYXJjaFN1Y2Nlc3MoY3VzdG9tZXJTZWFyY2hSZXN1bHRzKTtcbiAgICAgICAgfSksXG4gICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICBvZihuZXcgQXNtQWN0aW9ucy5DdXN0b21lclNlYXJjaEZhaWwobWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKSkpXG4gICAgICAgIClcbiAgICAgIClcbiAgICApXG4gICk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucywgcHJpdmF0ZSBhc21Db25uZWN0b3I6IEFzbUNvbm5lY3Rvcikge31cbn1cbiJdfQ==
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
export class CustomerEffects {
    /**
     * @param {?} actions$
     * @param {?} asmConnector
     */
    constructor(actions$, asmConnector) {
        this.actions$ = actions$;
        this.asmConnector = asmConnector;
        this.customerSearch$ = this.actions$.pipe(ofType(AsmActions.CUSTOMER_SEARCH), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), mergeMap((/**
         * @param {?} options
         * @return {?}
         */
        options => this.asmConnector.customerSearch(options).pipe(map((/**
         * @param {?} customerSearchResults
         * @return {?}
         */
        (customerSearchResults) => {
            return new AsmActions.CustomerSearchSuccess(customerSearchResults);
        })), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new AsmActions.CustomerSearchFail(makeErrorSerializable(error)))))))));
    }
}
CustomerEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CustomerEffects.ctorParameters = () => [
    { type: Actions },
    { type: AsmConnector }
];
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], CustomerEffects.prototype, "customerSearch$", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXIuZWZmZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2FzbS9zdG9yZS9lZmZlY3RzL2N1c3RvbWVyLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUU5RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFHOUMsTUFBTSxPQUFPLGVBQWU7Ozs7O0lBaUIxQixZQUFvQixRQUFpQixFQUFVLFlBQTBCO1FBQXJELGFBQVEsR0FBUixRQUFRLENBQVM7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQWZ6RSxvQkFBZSxHQUEwQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDekUsTUFBTSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsRUFDbEMsR0FBRzs7OztRQUFDLENBQUMsTUFBaUMsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBQyxFQUMxRCxRQUFROzs7O1FBQUMsT0FBTyxDQUFDLEVBQUUsQ0FDakIsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUM1QyxHQUFHOzs7O1FBQUMsQ0FBQyxxQkFBeUMsRUFBRSxFQUFFO1lBQ2hELE9BQU8sSUFBSSxVQUFVLENBQUMscUJBQXFCLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUNyRSxDQUFDLEVBQUMsRUFDRixVQUFVOzs7O1FBQUMsS0FBSyxDQUFDLEVBQUUsQ0FDakIsRUFBRSxDQUFDLElBQUksVUFBVSxDQUFDLGtCQUFrQixDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFDcEUsQ0FDRixFQUNGLENBQ0YsQ0FBQztJQUUwRSxDQUFDOzs7WUFsQjlFLFVBQVU7Ozs7WUFSRixPQUFPO1lBSVAsWUFBWTs7QUFPbkI7SUFEQyxNQUFNLEVBQUU7c0NBQ1EsVUFBVTt3REFhekI7OztJQWRGLDBDQWNFOzs7OztJQUVVLG1DQUF5Qjs7Ozs7SUFBRSx1Q0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCwgbWVyZ2VNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBtYWtlRXJyb3JTZXJpYWxpemFibGUgfSBmcm9tICcuLi8uLi8uLi91dGlsL3NlcmlhbGl6YXRpb24tdXRpbHMnO1xuaW1wb3J0IHsgQXNtQ29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9hc20uY29ubmVjdG9yJztcbmltcG9ydCB7IEN1c3RvbWVyU2VhcmNoUGFnZSB9IGZyb20gJy4uLy4uL21vZGVscy9hc20ubW9kZWxzJztcbmltcG9ydCB7IEFzbUFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEN1c3RvbWVyRWZmZWN0cyB7XG4gIEBFZmZlY3QoKVxuICBjdXN0b21lclNlYXJjaCQ6IE9ic2VydmFibGU8QXNtQWN0aW9ucy5DdXN0b21lckFjdGlvbj4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKEFzbUFjdGlvbnMuQ1VTVE9NRVJfU0VBUkNIKSxcbiAgICBtYXAoKGFjdGlvbjogQXNtQWN0aW9ucy5DdXN0b21lclNlYXJjaCkgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1lcmdlTWFwKG9wdGlvbnMgPT5cbiAgICAgIHRoaXMuYXNtQ29ubmVjdG9yLmN1c3RvbWVyU2VhcmNoKG9wdGlvbnMpLnBpcGUoXG4gICAgICAgIG1hcCgoY3VzdG9tZXJTZWFyY2hSZXN1bHRzOiBDdXN0b21lclNlYXJjaFBhZ2UpID0+IHtcbiAgICAgICAgICByZXR1cm4gbmV3IEFzbUFjdGlvbnMuQ3VzdG9tZXJTZWFyY2hTdWNjZXNzKGN1c3RvbWVyU2VhcmNoUmVzdWx0cyk7XG4gICAgICAgIH0pLFxuICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgb2YobmV3IEFzbUFjdGlvbnMuQ3VzdG9tZXJTZWFyY2hGYWlsKG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcikpKVxuICAgICAgICApXG4gICAgICApXG4gICAgKVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsIHByaXZhdGUgYXNtQ29ubmVjdG9yOiBBc21Db25uZWN0b3IpIHt9XG59XG4iXX0=
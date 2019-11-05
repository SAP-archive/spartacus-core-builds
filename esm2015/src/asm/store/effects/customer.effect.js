/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
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
        (action) => action.payload)), switchMap((/**
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXIuZWZmZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2FzbS9zdG9yZS9lZmZlY3RzL2N1c3RvbWVyLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUU5RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFHOUMsTUFBTSxPQUFPLGVBQWU7Ozs7O0lBaUIxQixZQUFvQixRQUFpQixFQUFVLFlBQTBCO1FBQXJELGFBQVEsR0FBUixRQUFRLENBQVM7UUFBVSxpQkFBWSxHQUFaLFlBQVksQ0FBYztRQWZ6RSxvQkFBZSxHQUEwQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDekUsTUFBTSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsRUFDbEMsR0FBRzs7OztRQUFDLENBQUMsTUFBaUMsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBQyxFQUMxRCxTQUFTOzs7O1FBQUMsT0FBTyxDQUFDLEVBQUUsQ0FDbEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUM1QyxHQUFHOzs7O1FBQUMsQ0FBQyxxQkFBeUMsRUFBRSxFQUFFO1lBQ2hELE9BQU8sSUFBSSxVQUFVLENBQUMscUJBQXFCLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUNyRSxDQUFDLEVBQUMsRUFDRixVQUFVOzs7O1FBQUMsS0FBSyxDQUFDLEVBQUUsQ0FDakIsRUFBRSxDQUFDLElBQUksVUFBVSxDQUFDLGtCQUFrQixDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFDcEUsQ0FDRixFQUNGLENBQ0YsQ0FBQztJQUUwRSxDQUFDOzs7WUFsQjlFLFVBQVU7Ozs7WUFSRixPQUFPO1lBSVAsWUFBWTs7QUFPbkI7SUFEQyxNQUFNLEVBQUU7c0NBQ1EsVUFBVTt3REFhekI7OztJQWRGLDBDQWNFOzs7OztJQUVVLG1DQUF5Qjs7Ozs7SUFBRSx1Q0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgbWFrZUVycm9yU2VyaWFsaXphYmxlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9zZXJpYWxpemF0aW9uLXV0aWxzJztcbmltcG9ydCB7IEFzbUNvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvYXNtLmNvbm5lY3Rvcic7XG5pbXBvcnQgeyBDdXN0b21lclNlYXJjaFBhZ2UgfSBmcm9tICcuLi8uLi9tb2RlbHMvYXNtLm1vZGVscyc7XG5pbXBvcnQgeyBBc21BY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDdXN0b21lckVmZmVjdHMge1xuICBARWZmZWN0KClcbiAgY3VzdG9tZXJTZWFyY2gkOiBPYnNlcnZhYmxlPEFzbUFjdGlvbnMuQ3VzdG9tZXJBY3Rpb24+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShBc21BY3Rpb25zLkNVU1RPTUVSX1NFQVJDSCksXG4gICAgbWFwKChhY3Rpb246IEFzbUFjdGlvbnMuQ3VzdG9tZXJTZWFyY2gpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBzd2l0Y2hNYXAob3B0aW9ucyA9PlxuICAgICAgdGhpcy5hc21Db25uZWN0b3IuY3VzdG9tZXJTZWFyY2gob3B0aW9ucykucGlwZShcbiAgICAgICAgbWFwKChjdXN0b21lclNlYXJjaFJlc3VsdHM6IEN1c3RvbWVyU2VhcmNoUGFnZSkgPT4ge1xuICAgICAgICAgIHJldHVybiBuZXcgQXNtQWN0aW9ucy5DdXN0b21lclNlYXJjaFN1Y2Nlc3MoY3VzdG9tZXJTZWFyY2hSZXN1bHRzKTtcbiAgICAgICAgfSksXG4gICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICBvZihuZXcgQXNtQWN0aW9ucy5DdXN0b21lclNlYXJjaEZhaWwobWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKSkpXG4gICAgICAgIClcbiAgICAgIClcbiAgICApXG4gICk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucywgcHJpdmF0ZSBhc21Db25uZWN0b3I6IEFzbUNvbm5lY3Rvcikge31cbn1cbiJdfQ==
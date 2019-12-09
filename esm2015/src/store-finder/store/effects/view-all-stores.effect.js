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
import { StoreFinderConnector } from '../../connectors/store-finder.connector';
import { StoreFinderActions } from '../actions/index';
export class ViewAllStoresEffect {
    /**
     * @param {?} actions$
     * @param {?} storeFinderConnector
     */
    constructor(actions$, storeFinderConnector) {
        this.actions$ = actions$;
        this.storeFinderConnector = storeFinderConnector;
        this.viewAllStores$ = this.actions$.pipe(ofType(StoreFinderActions.VIEW_ALL_STORES), switchMap((/**
         * @return {?}
         */
        () => {
            return this.storeFinderConnector.getCounts().pipe(map((/**
             * @param {?} data
             * @return {?}
             */
            data => {
                data.sort((/**
                 * @param {?} a
                 * @param {?} b
                 * @return {?}
                 */
                (a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0)));
                return new StoreFinderActions.ViewAllStoresSuccess(data);
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new StoreFinderActions.ViewAllStoresFail(makeErrorSerializable(error))))));
        })));
    }
}
ViewAllStoresEffect.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ViewAllStoresEffect.ctorParameters = () => [
    { type: Actions },
    { type: StoreFinderConnector }
];
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], ViewAllStoresEffect.prototype, "viewAllStores$", void 0);
if (false) {
    /** @type {?} */
    ViewAllStoresEffect.prototype.viewAllStores$;
    /**
     * @type {?}
     * @private
     */
    ViewAllStoresEffect.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    ViewAllStoresEffect.prototype.storeFinderConnector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy1hbGwtc3RvcmVzLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zdG9yZS1maW5kZXIvc3RvcmUvZWZmZWN0cy92aWV3LWFsbC1zdG9yZXMuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDMUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDL0UsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFHdEQsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7SUFDOUIsWUFDVSxRQUFpQixFQUNqQixvQkFBMEM7UUFEMUMsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBSXBELG1CQUFjLEdBR1YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlLENBQUMsRUFDMUMsU0FBUzs7O1FBQUMsR0FBRyxFQUFFO1lBQ2IsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUMvQyxHQUFHOzs7O1lBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ1QsSUFBSSxDQUFDLElBQUk7Ozs7O2dCQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQztnQkFDdEUsT0FBTyxJQUFJLGtCQUFrQixDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzNELENBQUMsRUFBQyxFQUNGLFVBQVU7Ozs7WUFBQyxLQUFLLENBQUMsRUFBRSxDQUNqQixFQUFFLENBQ0EsSUFBSSxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FDdEMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQzdCLENBQ0YsRUFDRixDQUNGLENBQUM7UUFDSixDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBdkJDLENBQUM7OztZQUxMLFVBQVU7Ozs7WUFQRixPQUFPO1lBSVAsb0JBQW9COztBQVczQjtJQURDLE1BQU0sRUFBRTtzQ0FDTyxVQUFVOzJEQW9CeEI7OztJQXJCRiw2Q0FxQkU7Ozs7O0lBekJBLHVDQUF5Qjs7Ozs7SUFDekIsbURBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IG1ha2VFcnJvclNlcmlhbGl6YWJsZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvc2VyaWFsaXphdGlvbi11dGlscyc7XG5pbXBvcnQgeyBTdG9yZUZpbmRlckNvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvc3RvcmUtZmluZGVyLmNvbm5lY3Rvcic7XG5pbXBvcnQgeyBTdG9yZUZpbmRlckFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFZpZXdBbGxTdG9yZXNFZmZlY3Qge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgc3RvcmVGaW5kZXJDb25uZWN0b3I6IFN0b3JlRmluZGVyQ29ubmVjdG9yXG4gICkge31cblxuICBARWZmZWN0KClcbiAgdmlld0FsbFN0b3JlcyQ6IE9ic2VydmFibGU8XG4gICAgfCBTdG9yZUZpbmRlckFjdGlvbnMuVmlld0FsbFN0b3Jlc1N1Y2Nlc3NcbiAgICB8IFN0b3JlRmluZGVyQWN0aW9ucy5WaWV3QWxsU3RvcmVzRmFpbFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShTdG9yZUZpbmRlckFjdGlvbnMuVklFV19BTExfU1RPUkVTKSxcbiAgICBzd2l0Y2hNYXAoKCkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuc3RvcmVGaW5kZXJDb25uZWN0b3IuZ2V0Q291bnRzKCkucGlwZShcbiAgICAgICAgbWFwKGRhdGEgPT4ge1xuICAgICAgICAgIGRhdGEuc29ydCgoYSwgYikgPT4gKGEubmFtZSA8IGIubmFtZSA/IC0xIDogYS5uYW1lID4gYi5uYW1lID8gMSA6IDApKTtcbiAgICAgICAgICByZXR1cm4gbmV3IFN0b3JlRmluZGVyQWN0aW9ucy5WaWV3QWxsU3RvcmVzU3VjY2VzcyhkYXRhKTtcbiAgICAgICAgfSksXG4gICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICBvZihcbiAgICAgICAgICAgIG5ldyBTdG9yZUZpbmRlckFjdGlvbnMuVmlld0FsbFN0b3Jlc0ZhaWwoXG4gICAgICAgICAgICAgIG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcilcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfSlcbiAgKTtcbn1cbiJdfQ==
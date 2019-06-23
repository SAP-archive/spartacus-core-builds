/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { makeErrorSerializable } from '../../../util/serialization-utils';
import { StoreFinderConnector } from '../../connectors/store-finder.connector';
import * as fromAction from './../actions/view-all-stores.action';
var ViewAllStoresEffect = /** @class */ (function () {
    function ViewAllStoresEffect(actions$, storeFinderConnector) {
        var _this = this;
        this.actions$ = actions$;
        this.storeFinderConnector = storeFinderConnector;
        this.viewAllStores$ = this.actions$.pipe(ofType(fromAction.VIEW_ALL_STORES), switchMap((/**
         * @return {?}
         */
        function () {
            return _this.storeFinderConnector.getCounts().pipe(map((/**
             * @param {?} data
             * @return {?}
             */
            function (data) { return new fromAction.ViewAllStoresSuccess(data); })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return of(new fromAction.ViewAllStoresFail(makeErrorSerializable(error)));
            })));
        })));
    }
    ViewAllStoresEffect.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ViewAllStoresEffect.ctorParameters = function () { return [
        { type: Actions },
        { type: StoreFinderConnector }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], ViewAllStoresEffect.prototype, "viewAllStores$", void 0);
    return ViewAllStoresEffect;
}());
export { ViewAllStoresEffect };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy1hbGwtc3RvcmVzLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zdG9yZS1maW5kZXIvc3RvcmUvZWZmZWN0cy92aWV3LWFsbC1zdG9yZXMuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDMUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDL0UsT0FBTyxLQUFLLFVBQVUsTUFBTSxxQ0FBcUMsQ0FBQztBQUVsRTtJQUVFLDZCQUNVLFFBQWlCLEVBQ2pCLG9CQUEwQztRQUZwRCxpQkFHSTtRQUZNLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUlwRCxtQkFBYyxHQUVWLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxFQUNsQyxTQUFTOzs7UUFBQztZQUNSLE9BQU8sS0FBSSxDQUFDLG9CQUFvQixDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FDL0MsR0FBRzs7OztZQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxVQUFVLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLEVBQXpDLENBQXlDLEVBQUMsRUFDdEQsVUFBVTs7OztZQUFDLFVBQUEsS0FBSztnQkFDZCxPQUFBLEVBQUUsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQWxFLENBQWtFLEVBQ25FLENBQ0YsQ0FBQztRQUNKLENBQUMsRUFBQyxDQUNILENBQUM7SUFmQyxDQUFDOztnQkFMTCxVQUFVOzs7O2dCQVBGLE9BQU87Z0JBSVAsb0JBQW9COztJQVczQjtRQURDLE1BQU0sRUFBRTswQ0FDTyxVQUFVOytEQVl4QjtJQUNKLDBCQUFDO0NBQUEsQUFyQkQsSUFxQkM7U0FwQlksbUJBQW1COzs7SUFNOUIsNkNBYUU7Ozs7O0lBakJBLHVDQUF5Qjs7Ozs7SUFDekIsbURBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IG1ha2VFcnJvclNlcmlhbGl6YWJsZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvc2VyaWFsaXphdGlvbi11dGlscyc7XG5pbXBvcnQgeyBTdG9yZUZpbmRlckNvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvc3RvcmUtZmluZGVyLmNvbm5lY3Rvcic7XG5pbXBvcnQgKiBhcyBmcm9tQWN0aW9uIGZyb20gJy4vLi4vYWN0aW9ucy92aWV3LWFsbC1zdG9yZXMuYWN0aW9uJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFZpZXdBbGxTdG9yZXNFZmZlY3Qge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgc3RvcmVGaW5kZXJDb25uZWN0b3I6IFN0b3JlRmluZGVyQ29ubmVjdG9yXG4gICkge31cblxuICBARWZmZWN0KClcbiAgdmlld0FsbFN0b3JlcyQ6IE9ic2VydmFibGU8XG4gICAgZnJvbUFjdGlvbi5WaWV3QWxsU3RvcmVzU3VjY2VzcyB8IGZyb21BY3Rpb24uVmlld0FsbFN0b3Jlc0ZhaWxcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoZnJvbUFjdGlvbi5WSUVXX0FMTF9TVE9SRVMpLFxuICAgIHN3aXRjaE1hcCgoKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5zdG9yZUZpbmRlckNvbm5lY3Rvci5nZXRDb3VudHMoKS5waXBlKFxuICAgICAgICBtYXAoZGF0YSA9PiBuZXcgZnJvbUFjdGlvbi5WaWV3QWxsU3RvcmVzU3VjY2VzcyhkYXRhKSksXG4gICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICBvZihuZXcgZnJvbUFjdGlvbi5WaWV3QWxsU3RvcmVzRmFpbChtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpKSlcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9KVxuICApO1xufVxuIl19
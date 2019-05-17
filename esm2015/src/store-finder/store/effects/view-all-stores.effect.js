/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as fromAction from './../actions/view-all-stores.action';
import { StoreFinderConnector } from '../../connectors/store-finder.connector';
export class ViewAllStoresEffect {
    /**
     * @param {?} actions$
     * @param {?} storeFinderConnector
     */
    constructor(actions$, storeFinderConnector) {
        this.actions$ = actions$;
        this.storeFinderConnector = storeFinderConnector;
        this.viewAllStores$ = this.actions$.pipe(ofType(fromAction.VIEW_ALL_STORES), switchMap(() => {
            return this.storeFinderConnector.getCounts().pipe(map(data => new fromAction.ViewAllStoresSuccess(data)), catchError(error => of(new fromAction.ViewAllStoresFail(error))));
        }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy1hbGwtc3RvcmVzLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zdG9yZS1maW5kZXIvc3RvcmUvZWZmZWN0cy92aWV3LWFsbC1zdG9yZXMuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFNUQsT0FBTyxLQUFLLFVBQVUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNsRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUcvRSxNQUFNLE9BQU8sbUJBQW1COzs7OztJQUM5QixZQUNVLFFBQWlCLEVBQ2pCLG9CQUEwQztRQUQxQyxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFJcEQsbUJBQWMsR0FBb0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ2xELE1BQU0sQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLEVBQ2xDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDYixPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQy9DLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksVUFBVSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDLEVBQ3RELFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQ2pFLENBQUM7UUFDSixDQUFDLENBQUMsQ0FDSCxDQUFDO0lBWEMsQ0FBQzs7O1lBTEwsVUFBVTs7OztZQVJGLE9BQU87WUFNUCxvQkFBb0I7O0FBVTNCO0lBREMsTUFBTSxFQUFFO3NDQUNPLFVBQVU7MkRBUXhCOzs7SUFURiw2Q0FTRTs7Ozs7SUFiQSx1Q0FBeUI7Ozs7O0lBQ3pCLG1EQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0ICogYXMgZnJvbUFjdGlvbiBmcm9tICcuLy4uL2FjdGlvbnMvdmlldy1hbGwtc3RvcmVzLmFjdGlvbic7XG5pbXBvcnQgeyBTdG9yZUZpbmRlckNvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvc3RvcmUtZmluZGVyLmNvbm5lY3Rvcic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBWaWV3QWxsU3RvcmVzRWZmZWN0IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIHN0b3JlRmluZGVyQ29ubmVjdG9yOiBTdG9yZUZpbmRlckNvbm5lY3RvclxuICApIHt9XG5cbiAgQEVmZmVjdCgpXG4gIHZpZXdBbGxTdG9yZXMkOiBPYnNlcnZhYmxlPGFueT4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKGZyb21BY3Rpb24uVklFV19BTExfU1RPUkVTKSxcbiAgICBzd2l0Y2hNYXAoKCkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuc3RvcmVGaW5kZXJDb25uZWN0b3IuZ2V0Q291bnRzKCkucGlwZShcbiAgICAgICAgbWFwKGRhdGEgPT4gbmV3IGZyb21BY3Rpb24uVmlld0FsbFN0b3Jlc1N1Y2Nlc3MoZGF0YSkpLFxuICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+IG9mKG5ldyBmcm9tQWN0aW9uLlZpZXdBbGxTdG9yZXNGYWlsKGVycm9yKSkpXG4gICAgICApO1xuICAgIH0pXG4gICk7XG59XG4iXX0=
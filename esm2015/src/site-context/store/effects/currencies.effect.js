/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
import { makeErrorSerializable } from '../../../util/serialization-utils';
import { WindowRef } from '../../../window/window-ref';
import { SiteConnector } from '../../connectors/site.connector';
import * as actions from '../actions/currencies.action';
export class CurrenciesEffects {
    /**
     * @param {?} actions$
     * @param {?} siteConnector
     * @param {?} winRef
     */
    constructor(actions$, siteConnector, winRef) {
        this.actions$ = actions$;
        this.siteConnector = siteConnector;
        this.winRef = winRef;
        this.loadCurrencies$ = this.actions$.pipe(ofType(actions.LOAD_CURRENCIES), exhaustMap((/**
         * @return {?}
         */
        () => {
            return this.siteConnector.getCurrencies().pipe(map((/**
             * @param {?} currencies
             * @return {?}
             */
            currencies => new actions.LoadCurrenciesSuccess(currencies))), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new actions.LoadCurrenciesFail(makeErrorSerializable(error))))));
        })));
        this.activateCurrency$ = this.actions$.pipe(ofType(actions.SET_ACTIVE_CURRENCY), tap((/**
         * @param {?} action
         * @return {?}
         */
        (action) => {
            if (this.winRef.sessionStorage) {
                this.winRef.sessionStorage.setItem('currency', action.payload);
            }
        })), map((/**
         * @return {?}
         */
        () => new actions.CurrencyChange())));
    }
}
CurrenciesEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CurrenciesEffects.ctorParameters = () => [
    { type: Actions },
    { type: SiteConnector },
    { type: WindowRef }
];
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], CurrenciesEffects.prototype, "loadCurrencies$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], CurrenciesEffects.prototype, "activateCurrency$", void 0);
if (false) {
    /** @type {?} */
    CurrenciesEffects.prototype.loadCurrencies$;
    /** @type {?} */
    CurrenciesEffects.prototype.activateCurrency$;
    /**
     * @type {?}
     * @private
     */
    CurrenciesEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    CurrenciesEffects.prototype.siteConnector;
    /**
     * @type {?}
     * @private
     */
    CurrenciesEffects.prototype.winRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVuY2llcy5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc2l0ZS1jb250ZXh0L3N0b3JlL2VmZmVjdHMvY3VycmVuY2llcy5lZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDMUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNoRSxPQUFPLEtBQUssT0FBTyxNQUFNLDhCQUE4QixDQUFDO0FBR3hELE1BQU0sT0FBTyxpQkFBaUI7Ozs7OztJQTJCNUIsWUFDVSxRQUFpQixFQUNqQixhQUE0QixFQUM1QixNQUFpQjtRQUZqQixhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLFdBQU0sR0FBTixNQUFNLENBQVc7UUE1QjNCLG9CQUFlLEdBRVgsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLEVBQy9CLFVBQVU7OztRQUFDLEdBQUcsRUFBRTtZQUNkLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxJQUFJLENBQzVDLEdBQUc7Ozs7WUFBQyxVQUFVLENBQUMsRUFBRSxDQUFDLElBQUksT0FBTyxDQUFDLHFCQUFxQixDQUFDLFVBQVUsQ0FBQyxFQUFDLEVBQ2hFLFVBQVU7Ozs7WUFBQyxLQUFLLENBQUMsRUFBRSxDQUNqQixFQUFFLENBQUMsSUFBSSxPQUFPLENBQUMsa0JBQWtCLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUNqRSxDQUNGLENBQUM7UUFDSixDQUFDLEVBQUMsQ0FDSCxDQUFDO1FBR0Ysc0JBQWlCLEdBQXVDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUN4RSxNQUFNLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLEVBQ25DLEdBQUc7Ozs7UUFBQyxDQUFDLE1BQWlDLEVBQUUsRUFBRTtZQUN4QyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFO2dCQUM5QixJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNoRTtRQUNILENBQUMsRUFBQyxFQUNGLEdBQUc7OztRQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksT0FBTyxDQUFDLGNBQWMsRUFBRSxFQUFDLENBQ3hDLENBQUM7SUFNQyxDQUFDOzs7WUFoQ0wsVUFBVTs7OztZQVJGLE9BQU87WUFLUCxhQUFhO1lBRGIsU0FBUzs7QUFPaEI7SUFEQyxNQUFNLEVBQUU7c0NBQ1EsVUFBVTswREFZekI7QUFHRjtJQURDLE1BQU0sRUFBRTtzQ0FDVSxVQUFVOzREQVEzQjs7O0lBeEJGLDRDQWFFOztJQUVGLDhDQVNFOzs7OztJQUdBLHFDQUF5Qjs7Ozs7SUFDekIsMENBQW9DOzs7OztJQUNwQyxtQ0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIGV4aGF1c3RNYXAsIG1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgbWFrZUVycm9yU2VyaWFsaXphYmxlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9zZXJpYWxpemF0aW9uLXV0aWxzJztcbmltcG9ydCB7IFdpbmRvd1JlZiB9IGZyb20gJy4uLy4uLy4uL3dpbmRvdy93aW5kb3ctcmVmJztcbmltcG9ydCB7IFNpdGVDb25uZWN0b3IgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL3NpdGUuY29ubmVjdG9yJztcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9jdXJyZW5jaWVzLmFjdGlvbic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDdXJyZW5jaWVzRWZmZWN0cyB7XG4gIEBFZmZlY3QoKVxuICBsb2FkQ3VycmVuY2llcyQ6IE9ic2VydmFibGU8XG4gICAgYWN0aW9ucy5Mb2FkQ3VycmVuY2llc1N1Y2Nlc3MgfCBhY3Rpb25zLkxvYWRDdXJyZW5jaWVzRmFpbFxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShhY3Rpb25zLkxPQURfQ1VSUkVOQ0lFUyksXG4gICAgZXhoYXVzdE1hcCgoKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5zaXRlQ29ubmVjdG9yLmdldEN1cnJlbmNpZXMoKS5waXBlKFxuICAgICAgICBtYXAoY3VycmVuY2llcyA9PiBuZXcgYWN0aW9ucy5Mb2FkQ3VycmVuY2llc1N1Y2Nlc3MoY3VycmVuY2llcykpLFxuICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgb2YobmV3IGFjdGlvbnMuTG9hZEN1cnJlbmNpZXNGYWlsKG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcikpKVxuICAgICAgICApXG4gICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIGFjdGl2YXRlQ3VycmVuY3kkOiBPYnNlcnZhYmxlPGFjdGlvbnMuQ3VycmVuY3lDaGFuZ2U+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShhY3Rpb25zLlNFVF9BQ1RJVkVfQ1VSUkVOQ1kpLFxuICAgIHRhcCgoYWN0aW9uOiBhY3Rpb25zLlNldEFjdGl2ZUN1cnJlbmN5KSA9PiB7XG4gICAgICBpZiAodGhpcy53aW5SZWYuc2Vzc2lvblN0b3JhZ2UpIHtcbiAgICAgICAgdGhpcy53aW5SZWYuc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnY3VycmVuY3knLCBhY3Rpb24ucGF5bG9hZCk7XG4gICAgICB9XG4gICAgfSksXG4gICAgbWFwKCgpID0+IG5ldyBhY3Rpb25zLkN1cnJlbmN5Q2hhbmdlKCkpXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIHNpdGVDb25uZWN0b3I6IFNpdGVDb25uZWN0b3IsXG4gICAgcHJpdmF0ZSB3aW5SZWY6IFdpbmRvd1JlZlxuICApIHt9XG59XG4iXX0=
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
import * as actions from '../actions/languages.action';
export class LanguagesEffects {
    /**
     * @param {?} actions$
     * @param {?} siteConnector
     * @param {?} winRef
     */
    constructor(actions$, siteConnector, winRef) {
        this.actions$ = actions$;
        this.siteConnector = siteConnector;
        this.winRef = winRef;
        this.loadLanguages$ = this.actions$.pipe(ofType(actions.LOAD_LANGUAGES), exhaustMap((/**
         * @return {?}
         */
        () => {
            return this.siteConnector.getLanguages().pipe(map((/**
             * @param {?} languages
             * @return {?}
             */
            languages => new actions.LoadLanguagesSuccess(languages))), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new actions.LoadLanguagesFail(makeErrorSerializable(error))))));
        })));
        this.activateLanguage$ = this.actions$.pipe(ofType(actions.SET_ACTIVE_LANGUAGE), tap((/**
         * @param {?} action
         * @return {?}
         */
        (action) => {
            if (this.winRef.sessionStorage) {
                this.winRef.sessionStorage.setItem('language', action.payload);
            }
        })), map((/**
         * @return {?}
         */
        () => new actions.LanguageChange())));
    }
}
LanguagesEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LanguagesEffects.ctorParameters = () => [
    { type: Actions },
    { type: SiteConnector },
    { type: WindowRef }
];
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], LanguagesEffects.prototype, "loadLanguages$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], LanguagesEffects.prototype, "activateLanguage$", void 0);
if (false) {
    /** @type {?} */
    LanguagesEffects.prototype.loadLanguages$;
    /** @type {?} */
    LanguagesEffects.prototype.activateLanguage$;
    /**
     * @type {?}
     * @private
     */
    LanguagesEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    LanguagesEffects.prototype.siteConnector;
    /**
     * @type {?}
     * @private
     */
    LanguagesEffects.prototype.winRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZ3VhZ2VzLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zaXRlLWNvbnRleHQvc3RvcmUvZWZmZWN0cy9sYW5ndWFnZXMuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDaEUsT0FBTyxLQUFLLE9BQU8sTUFBTSw2QkFBNkIsQ0FBQztBQUd2RCxNQUFNLE9BQU8sZ0JBQWdCOzs7Ozs7SUEyQjNCLFlBQ1UsUUFBaUIsRUFDakIsYUFBNEIsRUFDNUIsTUFBaUI7UUFGakIsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixXQUFNLEdBQU4sTUFBTSxDQUFXO1FBNUIzQixtQkFBYyxHQUVWLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxFQUM5QixVQUFVOzs7UUFBQyxHQUFHLEVBQUU7WUFDZCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUMzQyxHQUFHOzs7O1lBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLENBQUMsRUFBQyxFQUM3RCxVQUFVOzs7O1lBQUMsS0FBSyxDQUFDLEVBQUUsQ0FDakIsRUFBRSxDQUFDLElBQUksT0FBTyxDQUFDLGlCQUFpQixDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFDaEUsQ0FDRixDQUFDO1FBQ0osQ0FBQyxFQUFDLENBQ0gsQ0FBQztRQUdGLHNCQUFpQixHQUF1QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDeEUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxFQUNuQyxHQUFHOzs7O1FBQUMsQ0FBQyxNQUFpQyxFQUFFLEVBQUU7WUFDeEMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRTtnQkFDOUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDaEU7UUFDSCxDQUFDLEVBQUMsRUFDRixHQUFHOzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxjQUFjLEVBQUUsRUFBQyxDQUN4QyxDQUFDO0lBTUMsQ0FBQzs7O1lBaENMLFVBQVU7Ozs7WUFSRixPQUFPO1lBS1AsYUFBYTtZQURiLFNBQVM7O0FBT2hCO0lBREMsTUFBTSxFQUFFO3NDQUNPLFVBQVU7d0RBWXhCO0FBR0Y7SUFEQyxNQUFNLEVBQUU7c0NBQ1UsVUFBVTsyREFRM0I7OztJQXhCRiwwQ0FhRTs7SUFFRiw2Q0FTRTs7Ozs7SUFHQSxvQ0FBeUI7Ozs7O0lBQ3pCLHlDQUFvQzs7Ozs7SUFDcEMsa0NBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBleGhhdXN0TWFwLCBtYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IG1ha2VFcnJvclNlcmlhbGl6YWJsZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvc2VyaWFsaXphdGlvbi11dGlscyc7XG5pbXBvcnQgeyBXaW5kb3dSZWYgfSBmcm9tICcuLi8uLi8uLi93aW5kb3cvd2luZG93LXJlZic7XG5pbXBvcnQgeyBTaXRlQ29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9zaXRlLmNvbm5lY3Rvcic7XG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvbGFuZ3VhZ2VzLmFjdGlvbic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMYW5ndWFnZXNFZmZlY3RzIHtcbiAgQEVmZmVjdCgpXG4gIGxvYWRMYW5ndWFnZXMkOiBPYnNlcnZhYmxlPFxuICAgIGFjdGlvbnMuTG9hZExhbmd1YWdlc1N1Y2Nlc3MgfCBhY3Rpb25zLkxvYWRMYW5ndWFnZXNGYWlsXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKGFjdGlvbnMuTE9BRF9MQU5HVUFHRVMpLFxuICAgIGV4aGF1c3RNYXAoKCkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuc2l0ZUNvbm5lY3Rvci5nZXRMYW5ndWFnZXMoKS5waXBlKFxuICAgICAgICBtYXAobGFuZ3VhZ2VzID0+IG5ldyBhY3Rpb25zLkxvYWRMYW5ndWFnZXNTdWNjZXNzKGxhbmd1YWdlcykpLFxuICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgb2YobmV3IGFjdGlvbnMuTG9hZExhbmd1YWdlc0ZhaWwobWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKSkpXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBARWZmZWN0KClcbiAgYWN0aXZhdGVMYW5ndWFnZSQ6IE9ic2VydmFibGU8YWN0aW9ucy5MYW5ndWFnZUNoYW5nZT4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKGFjdGlvbnMuU0VUX0FDVElWRV9MQU5HVUFHRSksXG4gICAgdGFwKChhY3Rpb246IGFjdGlvbnMuU2V0QWN0aXZlTGFuZ3VhZ2UpID0+IHtcbiAgICAgIGlmICh0aGlzLndpblJlZi5zZXNzaW9uU3RvcmFnZSkge1xuICAgICAgICB0aGlzLndpblJlZi5zZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdsYW5ndWFnZScsIGFjdGlvbi5wYXlsb2FkKTtcbiAgICAgIH1cbiAgICB9KSxcbiAgICBtYXAoKCkgPT4gbmV3IGFjdGlvbnMuTGFuZ3VhZ2VDaGFuZ2UoKSlcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgc2l0ZUNvbm5lY3RvcjogU2l0ZUNvbm5lY3RvcixcbiAgICBwcml2YXRlIHdpblJlZjogV2luZG93UmVmXG4gICkge31cbn1cbiJdfQ==
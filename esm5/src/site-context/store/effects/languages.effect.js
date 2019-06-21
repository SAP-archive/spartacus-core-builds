/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, catchError, tap, exhaustMap } from 'rxjs/operators';
import * as actions from '../actions/languages.action';
import { WindowRef } from '../../../window/window-ref';
import { SiteConnector } from '../../connectors/site.connector';
var LanguagesEffects = /** @class */ (function () {
    function LanguagesEffects(actions$, siteConnector, winRef) {
        var _this = this;
        this.actions$ = actions$;
        this.siteConnector = siteConnector;
        this.winRef = winRef;
        this.loadLanguages$ = this.actions$.pipe(ofType(actions.LOAD_LANGUAGES), exhaustMap((/**
         * @return {?}
         */
        function () {
            return _this.siteConnector.getLanguages().pipe(map((/**
             * @param {?} languages
             * @return {?}
             */
            function (languages) { return new actions.LoadLanguagesSuccess(languages); })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return of(new actions.LoadLanguagesFail(error)); })));
        })));
        this.activateLanguage$ = this.actions$.pipe(ofType(actions.SET_ACTIVE_LANGUAGE), tap((/**
         * @param {?} action
         * @return {?}
         */
        function (action) {
            if (_this.winRef.sessionStorage) {
                _this.winRef.sessionStorage.setItem('language', action.payload);
            }
        })), map((/**
         * @return {?}
         */
        function () { return new actions.LanguageChange(); })));
    }
    LanguagesEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    LanguagesEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: SiteConnector },
        { type: WindowRef }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], LanguagesEffects.prototype, "loadLanguages$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], LanguagesEffects.prototype, "activateLanguage$", void 0);
    return LanguagesEffects;
}());
export { LanguagesEffects };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZ3VhZ2VzLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zaXRlLWNvbnRleHQvc3RvcmUvZWZmZWN0cy9sYW5ndWFnZXMuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWxFLE9BQU8sS0FBSyxPQUFPLE1BQU0sNkJBQTZCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUVoRTtJQXdCRSwwQkFDVSxRQUFpQixFQUNqQixhQUE0QixFQUM1QixNQUFpQjtRQUgzQixpQkFJSTtRQUhNLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQXhCM0IsbUJBQWMsR0FBb0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ2xELE1BQU0sQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLEVBQzlCLFVBQVU7OztRQUFDO1lBQ1QsT0FBTyxLQUFJLENBQUMsYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FDM0MsR0FBRzs7OztZQUFDLFVBQUEsU0FBUyxJQUFJLE9BQUEsSUFBSSxPQUFPLENBQUMsb0JBQW9CLENBQUMsU0FBUyxDQUFDLEVBQTNDLENBQTJDLEVBQUMsRUFDN0QsVUFBVTs7OztZQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsRUFBRSxDQUFDLElBQUksT0FBTyxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQXhDLENBQXdDLEVBQUMsQ0FDOUQsQ0FBQztRQUNKLENBQUMsRUFBQyxDQUNILENBQUM7UUFHRixzQkFBaUIsR0FBb0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3JELE1BQU0sQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsRUFDbkMsR0FBRzs7OztRQUFDLFVBQUMsTUFBaUM7WUFDcEMsSUFBSSxLQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRTtnQkFDOUIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDaEU7UUFDSCxDQUFDLEVBQUMsRUFDRixHQUFHOzs7UUFBQyxjQUFNLE9BQUEsSUFBSSxPQUFPLENBQUMsY0FBYyxFQUFFLEVBQTVCLENBQTRCLEVBQUMsQ0FDeEMsQ0FBQztJQU1DLENBQUM7O2dCQTVCTCxVQUFVOzs7O2dCQVBNLE9BQU87Z0JBS2YsYUFBYTtnQkFEYixTQUFTOztJQU1oQjtRQURDLE1BQU0sRUFBRTswQ0FDTyxVQUFVOzREQVF4QjtJQUdGO1FBREMsTUFBTSxFQUFFOzBDQUNVLFVBQVU7K0RBUTNCO0lBT0osdUJBQUM7Q0FBQSxBQTdCRCxJQTZCQztTQTVCWSxnQkFBZ0I7OztJQUMzQiwwQ0FTRTs7SUFFRiw2Q0FTRTs7Ozs7SUFHQSxvQ0FBeUI7Ozs7O0lBQ3pCLHlDQUFvQzs7Ozs7SUFDcEMsa0NBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRWZmZWN0LCBBY3Rpb25zLCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IG1hcCwgY2F0Y2hFcnJvciwgdGFwLCBleGhhdXN0TWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvbGFuZ3VhZ2VzLmFjdGlvbic7XG5pbXBvcnQgeyBXaW5kb3dSZWYgfSBmcm9tICcuLi8uLi8uLi93aW5kb3cvd2luZG93LXJlZic7XG5pbXBvcnQgeyBTaXRlQ29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9zaXRlLmNvbm5lY3Rvcic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMYW5ndWFnZXNFZmZlY3RzIHtcbiAgQEVmZmVjdCgpXG4gIGxvYWRMYW5ndWFnZXMkOiBPYnNlcnZhYmxlPGFueT4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKGFjdGlvbnMuTE9BRF9MQU5HVUFHRVMpLFxuICAgIGV4aGF1c3RNYXAoKCkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuc2l0ZUNvbm5lY3Rvci5nZXRMYW5ndWFnZXMoKS5waXBlKFxuICAgICAgICBtYXAobGFuZ3VhZ2VzID0+IG5ldyBhY3Rpb25zLkxvYWRMYW5ndWFnZXNTdWNjZXNzKGxhbmd1YWdlcykpLFxuICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+IG9mKG5ldyBhY3Rpb25zLkxvYWRMYW5ndWFnZXNGYWlsKGVycm9yKSkpXG4gICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIGFjdGl2YXRlTGFuZ3VhZ2UkOiBPYnNlcnZhYmxlPGFueT4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKGFjdGlvbnMuU0VUX0FDVElWRV9MQU5HVUFHRSksXG4gICAgdGFwKChhY3Rpb246IGFjdGlvbnMuU2V0QWN0aXZlTGFuZ3VhZ2UpID0+IHtcbiAgICAgIGlmICh0aGlzLndpblJlZi5zZXNzaW9uU3RvcmFnZSkge1xuICAgICAgICB0aGlzLndpblJlZi5zZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdsYW5ndWFnZScsIGFjdGlvbi5wYXlsb2FkKTtcbiAgICAgIH1cbiAgICB9KSxcbiAgICBtYXAoKCkgPT4gbmV3IGFjdGlvbnMuTGFuZ3VhZ2VDaGFuZ2UoKSlcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgc2l0ZUNvbm5lY3RvcjogU2l0ZUNvbm5lY3RvcixcbiAgICBwcml2YXRlIHdpblJlZjogV2luZG93UmVmXG4gICkge31cbn1cbiJdfQ==
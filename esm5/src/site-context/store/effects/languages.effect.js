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
import { SiteContextActions } from '../actions/index';
var LanguagesEffects = /** @class */ (function () {
    function LanguagesEffects(actions$, siteConnector, winRef) {
        var _this = this;
        this.actions$ = actions$;
        this.siteConnector = siteConnector;
        this.winRef = winRef;
        this.loadLanguages$ = this.actions$.pipe(ofType(SiteContextActions.LOAD_LANGUAGES), exhaustMap((/**
         * @return {?}
         */
        function () {
            return _this.siteConnector.getLanguages().pipe(map((/**
             * @param {?} languages
             * @return {?}
             */
            function (languages) { return new SiteContextActions.LoadLanguagesSuccess(languages); })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return of(new SiteContextActions.LoadLanguagesFail(makeErrorSerializable(error)));
            })));
        })));
        this.activateLanguage$ = this.actions$.pipe(ofType(SiteContextActions.SET_ACTIVE_LANGUAGE), tap((/**
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
        function () { return new SiteContextActions.LanguageChange(); })));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZ3VhZ2VzLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zaXRlLWNvbnRleHQvc3RvcmUvZWZmZWN0cy9sYW5ndWFnZXMuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDaEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFdEQ7SUFxQ0UsMEJBQ1UsUUFBaUIsRUFDakIsYUFBNEIsRUFDNUIsTUFBaUI7UUFIM0IsaUJBSUk7UUFITSxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLFdBQU0sR0FBTixNQUFNLENBQVc7UUFyQzNCLG1CQUFjLEdBR1YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsRUFDekMsVUFBVTs7O1FBQUM7WUFDVCxPQUFPLEtBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUMzQyxHQUFHOzs7O1lBQ0QsVUFBQSxTQUFTLElBQUksT0FBQSxJQUFJLGtCQUFrQixDQUFDLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxFQUF0RCxDQUFzRCxFQUNwRSxFQUNELFVBQVU7Ozs7WUFBQyxVQUFBLEtBQUs7Z0JBQ2QsT0FBQSxFQUFFLENBQ0EsSUFBSSxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FDdEMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQzdCLENBQ0Y7WUFKRCxDQUlDLEVBQ0YsQ0FDRixDQUFDO1FBQ0osQ0FBQyxFQUFDLENBQ0gsQ0FBQztRQUdGLHNCQUFpQixHQUViLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsa0JBQWtCLENBQUMsbUJBQW1CLENBQUMsRUFDOUMsR0FBRzs7OztRQUFDLFVBQUMsTUFBNEM7WUFDL0MsSUFBSSxLQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRTtnQkFDOUIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDaEU7UUFDSCxDQUFDLEVBQUMsRUFDRixHQUFHOzs7UUFBQyxjQUFNLE9BQUEsSUFBSSxrQkFBa0IsQ0FBQyxjQUFjLEVBQUUsRUFBdkMsQ0FBdUMsRUFBQyxDQUNuRCxDQUFDO0lBTUMsQ0FBQzs7Z0JBekNMLFVBQVU7Ozs7Z0JBUkYsT0FBTztnQkFLUCxhQUFhO2dCQURiLFNBQVM7O0lBT2hCO1FBREMsTUFBTSxFQUFFOzBDQUNPLFVBQVU7NERBbUJ4QjtJQUdGO1FBREMsTUFBTSxFQUFFOzBDQUNVLFVBQVU7K0RBVTNCO0lBT0osdUJBQUM7Q0FBQSxBQTFDRCxJQTBDQztTQXpDWSxnQkFBZ0I7OztJQUMzQiwwQ0FvQkU7O0lBRUYsNkNBV0U7Ozs7O0lBR0Esb0NBQXlCOzs7OztJQUN6Qix5Q0FBb0M7Ozs7O0lBQ3BDLGtDQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgZXhoYXVzdE1hcCwgbWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBtYWtlRXJyb3JTZXJpYWxpemFibGUgfSBmcm9tICcuLi8uLi8uLi91dGlsL3NlcmlhbGl6YXRpb24tdXRpbHMnO1xuaW1wb3J0IHsgV2luZG93UmVmIH0gZnJvbSAnLi4vLi4vLi4vd2luZG93L3dpbmRvdy1yZWYnO1xuaW1wb3J0IHsgU2l0ZUNvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvc2l0ZS5jb25uZWN0b3InO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMYW5ndWFnZXNFZmZlY3RzIHtcbiAgQEVmZmVjdCgpXG4gIGxvYWRMYW5ndWFnZXMkOiBPYnNlcnZhYmxlPFxuICAgIHwgU2l0ZUNvbnRleHRBY3Rpb25zLkxvYWRMYW5ndWFnZXNTdWNjZXNzXG4gICAgfCBTaXRlQ29udGV4dEFjdGlvbnMuTG9hZExhbmd1YWdlc0ZhaWxcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoU2l0ZUNvbnRleHRBY3Rpb25zLkxPQURfTEFOR1VBR0VTKSxcbiAgICBleGhhdXN0TWFwKCgpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLnNpdGVDb25uZWN0b3IuZ2V0TGFuZ3VhZ2VzKCkucGlwZShcbiAgICAgICAgbWFwKFxuICAgICAgICAgIGxhbmd1YWdlcyA9PiBuZXcgU2l0ZUNvbnRleHRBY3Rpb25zLkxvYWRMYW5ndWFnZXNTdWNjZXNzKGxhbmd1YWdlcylcbiAgICAgICAgKSxcbiAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgIG9mKFxuICAgICAgICAgICAgbmV3IFNpdGVDb250ZXh0QWN0aW9ucy5Mb2FkTGFuZ3VhZ2VzRmFpbChcbiAgICAgICAgICAgICAgbWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBhY3RpdmF0ZUxhbmd1YWdlJDogT2JzZXJ2YWJsZTxcbiAgICBTaXRlQ29udGV4dEFjdGlvbnMuTGFuZ3VhZ2VDaGFuZ2VcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoU2l0ZUNvbnRleHRBY3Rpb25zLlNFVF9BQ1RJVkVfTEFOR1VBR0UpLFxuICAgIHRhcCgoYWN0aW9uOiBTaXRlQ29udGV4dEFjdGlvbnMuU2V0QWN0aXZlTGFuZ3VhZ2UpID0+IHtcbiAgICAgIGlmICh0aGlzLndpblJlZi5zZXNzaW9uU3RvcmFnZSkge1xuICAgICAgICB0aGlzLndpblJlZi5zZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdsYW5ndWFnZScsIGFjdGlvbi5wYXlsb2FkKTtcbiAgICAgIH1cbiAgICB9KSxcbiAgICBtYXAoKCkgPT4gbmV3IFNpdGVDb250ZXh0QWN0aW9ucy5MYW5ndWFnZUNoYW5nZSgpKVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBzaXRlQ29ubmVjdG9yOiBTaXRlQ29ubmVjdG9yLFxuICAgIHByaXZhdGUgd2luUmVmOiBXaW5kb3dSZWZcbiAgKSB7fVxufVxuIl19
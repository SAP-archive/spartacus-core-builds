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
        this.loadLanguages$ = this.actions$.pipe(ofType(SiteContextActions.LOAD_LANGUAGES), exhaustMap((/**
         * @return {?}
         */
        () => {
            return this.siteConnector.getLanguages().pipe(map((/**
             * @param {?} languages
             * @return {?}
             */
            languages => new SiteContextActions.LoadLanguagesSuccess(languages))), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new SiteContextActions.LoadLanguagesFail(makeErrorSerializable(error))))));
        })));
        this.activateLanguage$ = this.actions$.pipe(ofType(SiteContextActions.SET_ACTIVE_LANGUAGE), tap((/**
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
        () => new SiteContextActions.LanguageChange())));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZ3VhZ2VzLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zaXRlLWNvbnRleHQvc3RvcmUvZWZmZWN0cy9sYW5ndWFnZXMuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDaEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFHdEQsTUFBTSxPQUFPLGdCQUFnQjs7Ozs7O0lBb0MzQixZQUNVLFFBQWlCLEVBQ2pCLGFBQTRCLEVBQzVCLE1BQWlCO1FBRmpCLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQXJDM0IsbUJBQWMsR0FHVixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxFQUN6QyxVQUFVOzs7UUFBQyxHQUFHLEVBQUU7WUFDZCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUMzQyxHQUFHOzs7O1lBQ0QsU0FBUyxDQUFDLEVBQUUsQ0FBQyxJQUFJLGtCQUFrQixDQUFDLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxFQUNwRSxFQUNELFVBQVU7Ozs7WUFBQyxLQUFLLENBQUMsRUFBRSxDQUNqQixFQUFFLENBQ0EsSUFBSSxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FDdEMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQzdCLENBQ0YsRUFDRixDQUNGLENBQUM7UUFDSixDQUFDLEVBQUMsQ0FDSCxDQUFDO1FBR0Ysc0JBQWlCLEdBRWIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxtQkFBbUIsQ0FBQyxFQUM5QyxHQUFHOzs7O1FBQUMsQ0FBQyxNQUE0QyxFQUFFLEVBQUU7WUFDbkQsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRTtnQkFDOUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDaEU7UUFDSCxDQUFDLEVBQUMsRUFDRixHQUFHOzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLGtCQUFrQixDQUFDLGNBQWMsRUFBRSxFQUFDLENBQ25ELENBQUM7SUFNQyxDQUFDOzs7WUF6Q0wsVUFBVTs7OztZQVJGLE9BQU87WUFLUCxhQUFhO1lBRGIsU0FBUzs7QUFPaEI7SUFEQyxNQUFNLEVBQUU7c0NBQ08sVUFBVTt3REFtQnhCO0FBR0Y7SUFEQyxNQUFNLEVBQUU7c0NBQ1UsVUFBVTsyREFVM0I7OztJQWpDRiwwQ0FvQkU7O0lBRUYsNkNBV0U7Ozs7O0lBR0Esb0NBQXlCOzs7OztJQUN6Qix5Q0FBb0M7Ozs7O0lBQ3BDLGtDQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgZXhoYXVzdE1hcCwgbWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBtYWtlRXJyb3JTZXJpYWxpemFibGUgfSBmcm9tICcuLi8uLi8uLi91dGlsL3NlcmlhbGl6YXRpb24tdXRpbHMnO1xuaW1wb3J0IHsgV2luZG93UmVmIH0gZnJvbSAnLi4vLi4vLi4vd2luZG93L3dpbmRvdy1yZWYnO1xuaW1wb3J0IHsgU2l0ZUNvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvc2l0ZS5jb25uZWN0b3InO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMYW5ndWFnZXNFZmZlY3RzIHtcbiAgQEVmZmVjdCgpXG4gIGxvYWRMYW5ndWFnZXMkOiBPYnNlcnZhYmxlPFxuICAgIHwgU2l0ZUNvbnRleHRBY3Rpb25zLkxvYWRMYW5ndWFnZXNTdWNjZXNzXG4gICAgfCBTaXRlQ29udGV4dEFjdGlvbnMuTG9hZExhbmd1YWdlc0ZhaWxcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoU2l0ZUNvbnRleHRBY3Rpb25zLkxPQURfTEFOR1VBR0VTKSxcbiAgICBleGhhdXN0TWFwKCgpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLnNpdGVDb25uZWN0b3IuZ2V0TGFuZ3VhZ2VzKCkucGlwZShcbiAgICAgICAgbWFwKFxuICAgICAgICAgIGxhbmd1YWdlcyA9PiBuZXcgU2l0ZUNvbnRleHRBY3Rpb25zLkxvYWRMYW5ndWFnZXNTdWNjZXNzKGxhbmd1YWdlcylcbiAgICAgICAgKSxcbiAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgIG9mKFxuICAgICAgICAgICAgbmV3IFNpdGVDb250ZXh0QWN0aW9ucy5Mb2FkTGFuZ3VhZ2VzRmFpbChcbiAgICAgICAgICAgICAgbWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBhY3RpdmF0ZUxhbmd1YWdlJDogT2JzZXJ2YWJsZTxcbiAgICBTaXRlQ29udGV4dEFjdGlvbnMuTGFuZ3VhZ2VDaGFuZ2VcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoU2l0ZUNvbnRleHRBY3Rpb25zLlNFVF9BQ1RJVkVfTEFOR1VBR0UpLFxuICAgIHRhcCgoYWN0aW9uOiBTaXRlQ29udGV4dEFjdGlvbnMuU2V0QWN0aXZlTGFuZ3VhZ2UpID0+IHtcbiAgICAgIGlmICh0aGlzLndpblJlZi5zZXNzaW9uU3RvcmFnZSkge1xuICAgICAgICB0aGlzLndpblJlZi5zZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdsYW5ndWFnZScsIGFjdGlvbi5wYXlsb2FkKTtcbiAgICAgIH1cbiAgICB9KSxcbiAgICBtYXAoKCkgPT4gbmV3IFNpdGVDb250ZXh0QWN0aW9ucy5MYW5ndWFnZUNoYW5nZSgpKVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBzaXRlQ29ubmVjdG9yOiBTaXRlQ29ubmVjdG9yLFxuICAgIHByaXZhdGUgd2luUmVmOiBXaW5kb3dSZWZcbiAgKSB7fVxufVxuIl19
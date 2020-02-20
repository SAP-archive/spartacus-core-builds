import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
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
        this.loadLanguages$ = this.actions$.pipe(ofType(SiteContextActions.LOAD_LANGUAGES), exhaustMap(function () {
            return _this.siteConnector.getLanguages().pipe(map(function (languages) { return new SiteContextActions.LoadLanguagesSuccess(languages); }), catchError(function (error) {
                return of(new SiteContextActions.LoadLanguagesFail(makeErrorSerializable(error)));
            }));
        }));
        this.activateLanguage$ = this.actions$.pipe(ofType(SiteContextActions.SET_ACTIVE_LANGUAGE), tap(function (action) {
            if (_this.winRef.sessionStorage) {
                _this.winRef.sessionStorage.setItem('language', action.payload);
            }
        }), map(function () { return new SiteContextActions.LanguageChange(); }));
    }
    LanguagesEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: SiteConnector },
        { type: WindowRef }
    ]; };
    __decorate([
        Effect()
    ], LanguagesEffects.prototype, "loadLanguages$", void 0);
    __decorate([
        Effect()
    ], LanguagesEffects.prototype, "activateLanguage$", void 0);
    LanguagesEffects = __decorate([
        Injectable()
    ], LanguagesEffects);
    return LanguagesEffects;
}());
export { LanguagesEffects };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZ3VhZ2VzLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zaXRlLWNvbnRleHQvc3RvcmUvZWZmZWN0cy9sYW5ndWFnZXMuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBR3REO0lBb0NFLDBCQUNVLFFBQWlCLEVBQ2pCLGFBQTRCLEVBQzVCLE1BQWlCO1FBSDNCLGlCQUlJO1FBSE0sYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixXQUFNLEdBQU4sTUFBTSxDQUFXO1FBckMzQixtQkFBYyxHQUdWLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsa0JBQWtCLENBQUMsY0FBYyxDQUFDLEVBQ3pDLFVBQVUsQ0FBQztZQUNULE9BQU8sS0FBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQzNDLEdBQUcsQ0FDRCxVQUFBLFNBQVMsSUFBSSxPQUFBLElBQUksa0JBQWtCLENBQUMsb0JBQW9CLENBQUMsU0FBUyxDQUFDLEVBQXRELENBQXNELENBQ3BFLEVBQ0QsVUFBVSxDQUFDLFVBQUEsS0FBSztnQkFDZCxPQUFBLEVBQUUsQ0FDQSxJQUFJLGtCQUFrQixDQUFDLGlCQUFpQixDQUN0QyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FDN0IsQ0FDRjtZQUpELENBSUMsQ0FDRixDQUNGLENBQUM7UUFDSixDQUFDLENBQUMsQ0FDSCxDQUFDO1FBR0Ysc0JBQWlCLEdBRWIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxtQkFBbUIsQ0FBQyxFQUM5QyxHQUFHLENBQUMsVUFBQyxNQUE0QztZQUMvQyxJQUFJLEtBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFO2dCQUM5QixLQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNoRTtRQUNILENBQUMsQ0FBQyxFQUNGLEdBQUcsQ0FBQyxjQUFNLE9BQUEsSUFBSSxrQkFBa0IsQ0FBQyxjQUFjLEVBQUUsRUFBdkMsQ0FBdUMsQ0FBQyxDQUNuRCxDQUFDO0lBTUMsQ0FBQzs7Z0JBSGdCLE9BQU87Z0JBQ0YsYUFBYTtnQkFDcEIsU0FBUzs7SUFyQzNCO1FBREMsTUFBTSxFQUFFOzREQW9CUDtJQUdGO1FBREMsTUFBTSxFQUFFOytEQVdQO0lBbENTLGdCQUFnQjtRQUQ1QixVQUFVLEVBQUU7T0FDQSxnQkFBZ0IsQ0F5QzVCO0lBQUQsdUJBQUM7Q0FBQSxBQXpDRCxJQXlDQztTQXpDWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIGV4aGF1c3RNYXAsIG1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgbWFrZUVycm9yU2VyaWFsaXphYmxlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9zZXJpYWxpemF0aW9uLXV0aWxzJztcbmltcG9ydCB7IFdpbmRvd1JlZiB9IGZyb20gJy4uLy4uLy4uL3dpbmRvdy93aW5kb3ctcmVmJztcbmltcG9ydCB7IFNpdGVDb25uZWN0b3IgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL3NpdGUuY29ubmVjdG9yJztcbmltcG9ydCB7IFNpdGVDb250ZXh0QWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTGFuZ3VhZ2VzRWZmZWN0cyB7XG4gIEBFZmZlY3QoKVxuICBsb2FkTGFuZ3VhZ2VzJDogT2JzZXJ2YWJsZTxcbiAgICB8IFNpdGVDb250ZXh0QWN0aW9ucy5Mb2FkTGFuZ3VhZ2VzU3VjY2Vzc1xuICAgIHwgU2l0ZUNvbnRleHRBY3Rpb25zLkxvYWRMYW5ndWFnZXNGYWlsXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFNpdGVDb250ZXh0QWN0aW9ucy5MT0FEX0xBTkdVQUdFUyksXG4gICAgZXhoYXVzdE1hcCgoKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5zaXRlQ29ubmVjdG9yLmdldExhbmd1YWdlcygpLnBpcGUoXG4gICAgICAgIG1hcChcbiAgICAgICAgICBsYW5ndWFnZXMgPT4gbmV3IFNpdGVDb250ZXh0QWN0aW9ucy5Mb2FkTGFuZ3VhZ2VzU3VjY2VzcyhsYW5ndWFnZXMpXG4gICAgICAgICksXG4gICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICBvZihcbiAgICAgICAgICAgIG5ldyBTaXRlQ29udGV4dEFjdGlvbnMuTG9hZExhbmd1YWdlc0ZhaWwoXG4gICAgICAgICAgICAgIG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcilcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBARWZmZWN0KClcbiAgYWN0aXZhdGVMYW5ndWFnZSQ6IE9ic2VydmFibGU8XG4gICAgU2l0ZUNvbnRleHRBY3Rpb25zLkxhbmd1YWdlQ2hhbmdlXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFNpdGVDb250ZXh0QWN0aW9ucy5TRVRfQUNUSVZFX0xBTkdVQUdFKSxcbiAgICB0YXAoKGFjdGlvbjogU2l0ZUNvbnRleHRBY3Rpb25zLlNldEFjdGl2ZUxhbmd1YWdlKSA9PiB7XG4gICAgICBpZiAodGhpcy53aW5SZWYuc2Vzc2lvblN0b3JhZ2UpIHtcbiAgICAgICAgdGhpcy53aW5SZWYuc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnbGFuZ3VhZ2UnLCBhY3Rpb24ucGF5bG9hZCk7XG4gICAgICB9XG4gICAgfSksXG4gICAgbWFwKCgpID0+IG5ldyBTaXRlQ29udGV4dEFjdGlvbnMuTGFuZ3VhZ2VDaGFuZ2UoKSlcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgc2l0ZUNvbm5lY3RvcjogU2l0ZUNvbm5lY3RvcixcbiAgICBwcml2YXRlIHdpblJlZjogV2luZG93UmVmXG4gICkge31cbn1cbiJdfQ==
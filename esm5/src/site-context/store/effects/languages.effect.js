import { __decorate, __read } from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { NEVER, of } from 'rxjs';
import { bufferCount, catchError, exhaustMap, filter, map, switchMapTo, tap, } from 'rxjs/operators';
import { makeErrorSerializable } from '../../../util/serialization-utils';
import { WindowRef } from '../../../window/window-ref';
import { SiteConnector } from '../../connectors/site.connector';
import { SiteContextActions } from '../actions/index';
import { getActiveLanguage } from '../selectors/languages.selectors';
var LanguagesEffects = /** @class */ (function () {
    function LanguagesEffects(actions$, siteConnector, winRef, state) {
        var _this = this;
        this.actions$ = actions$;
        this.siteConnector = siteConnector;
        this.winRef = winRef;
        this.state = state;
        this.loadLanguages$ = this.actions$.pipe(ofType(SiteContextActions.LOAD_LANGUAGES), exhaustMap(function () {
            return _this.siteConnector.getLanguages().pipe(map(function (languages) { return new SiteContextActions.LoadLanguagesSuccess(languages); }), catchError(function (error) {
                return of(new SiteContextActions.LoadLanguagesFail(makeErrorSerializable(error)));
            }));
        }));
        this.persist$ = this.actions$.pipe(ofType(SiteContextActions.SET_ACTIVE_LANGUAGE), tap(function (action) {
            if (_this.winRef.sessionStorage) {
                _this.winRef.sessionStorage.setItem('language', action.payload);
            }
        }), switchMapTo(NEVER));
        this.activateLanguage$ = this.state.select(getActiveLanguage).pipe(bufferCount(2, 1), 
        // avoid dispatching `change` action when we're just setting the initial value:
        filter(function (_a) {
            var _b = __read(_a, 1), previous = _b[0];
            return !!previous;
        }), map(function (_a) {
            var _b = __read(_a, 2), previous = _b[0], current = _b[1];
            return new SiteContextActions.LanguageChange({ previous: previous, current: current });
        }));
    }
    LanguagesEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: SiteConnector },
        { type: WindowRef },
        { type: Store }
    ]; };
    __decorate([
        Effect()
    ], LanguagesEffects.prototype, "loadLanguages$", void 0);
    __decorate([
        Effect()
    ], LanguagesEffects.prototype, "persist$", void 0);
    __decorate([
        Effect()
    ], LanguagesEffects.prototype, "activateLanguage$", void 0);
    LanguagesEffects = __decorate([
        Injectable()
    ], LanguagesEffects);
    return LanguagesEffects;
}());
export { LanguagesEffects };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZ3VhZ2VzLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zaXRlLWNvbnRleHQvc3RvcmUvZWZmZWN0cy9sYW5ndWFnZXMuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxLQUFLLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzdDLE9BQU8sRUFDTCxXQUFXLEVBQ1gsVUFBVSxFQUNWLFVBQVUsRUFDVixNQUFNLEVBQ04sR0FBRyxFQUNILFdBQVcsRUFDWCxHQUFHLEdBQ0osTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBSXJFO0lBZ0RFLDBCQUNVLFFBQWlCLEVBQ2pCLGFBQTRCLEVBQzVCLE1BQWlCLEVBQ2pCLEtBQWtDO1FBSjVDLGlCQUtJO1FBSk0sYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQ2pCLFVBQUssR0FBTCxLQUFLLENBQTZCO1FBbEQ1QyxtQkFBYyxHQUdWLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsa0JBQWtCLENBQUMsY0FBYyxDQUFDLEVBQ3pDLFVBQVUsQ0FBQztZQUNULE9BQU8sS0FBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQzNDLEdBQUcsQ0FDRCxVQUFDLFNBQVMsSUFBSyxPQUFBLElBQUksa0JBQWtCLENBQUMsb0JBQW9CLENBQUMsU0FBUyxDQUFDLEVBQXRELENBQXNELENBQ3RFLEVBQ0QsVUFBVSxDQUFDLFVBQUMsS0FBSztnQkFDZixPQUFBLEVBQUUsQ0FDQSxJQUFJLGtCQUFrQixDQUFDLGlCQUFpQixDQUN0QyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FDN0IsQ0FDRjtZQUpELENBSUMsQ0FDRixDQUNGLENBQUM7UUFDSixDQUFDLENBQUMsQ0FDSCxDQUFDO1FBR0YsYUFBUSxHQUFxQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDN0MsTUFBTSxDQUFDLGtCQUFrQixDQUFDLG1CQUFtQixDQUFDLEVBQzlDLEdBQUcsQ0FBQyxVQUFDLE1BQTRDO1lBQy9DLElBQUksS0FBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUU7Z0JBQzlCLEtBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ2hFO1FBQ0gsQ0FBQyxDQUFDLEVBQ0YsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUNuQixDQUFDO1FBR0Ysc0JBQWlCLEdBRWIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxJQUFJLENBQzNDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRWpCLCtFQUErRTtRQUMvRSxNQUFNLENBQUMsVUFBQyxFQUFVO2dCQUFWLGtCQUFVLEVBQVQsZ0JBQVE7WUFBTSxPQUFBLENBQUMsQ0FBQyxRQUFRO1FBQVYsQ0FBVSxDQUFDLEVBQ2xDLEdBQUcsQ0FDRCxVQUFDLEVBQW1CO2dCQUFuQixrQkFBbUIsRUFBbEIsZ0JBQVEsRUFBRSxlQUFPO1lBQ2pCLE9BQUEsSUFBSSxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsRUFBRSxRQUFRLFVBQUEsRUFBRSxPQUFPLFNBQUEsRUFBRSxDQUFDO1FBQTVELENBQTRELENBQy9ELENBQ0YsQ0FBQztJQU9DLENBQUM7O2dCQUpnQixPQUFPO2dCQUNGLGFBQWE7Z0JBQ3BCLFNBQVM7Z0JBQ1YsS0FBSzs7SUFsRHRCO1FBREMsTUFBTSxFQUFFOzREQW9CUDtJQUdGO1FBREMsTUFBTSxFQUFFO3NEQVNQO0lBR0Y7UUFEQyxNQUFNLEVBQUU7K0RBWVA7SUE5Q1MsZ0JBQWdCO1FBRDVCLFVBQVUsRUFBRTtPQUNBLGdCQUFnQixDQXNENUI7SUFBRCx1QkFBQztDQUFBLEFBdERELElBc0RDO1NBdERZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE5FVkVSLCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgYnVmZmVyQ291bnQsXG4gIGNhdGNoRXJyb3IsXG4gIGV4aGF1c3RNYXAsXG4gIGZpbHRlcixcbiAgbWFwLFxuICBzd2l0Y2hNYXBUbyxcbiAgdGFwLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBtYWtlRXJyb3JTZXJpYWxpemFibGUgfSBmcm9tICcuLi8uLi8uLi91dGlsL3NlcmlhbGl6YXRpb24tdXRpbHMnO1xuaW1wb3J0IHsgV2luZG93UmVmIH0gZnJvbSAnLi4vLi4vLi4vd2luZG93L3dpbmRvdy1yZWYnO1xuaW1wb3J0IHsgU2l0ZUNvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvc2l0ZS5jb25uZWN0b3InO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBnZXRBY3RpdmVMYW5ndWFnZSB9IGZyb20gJy4uL3NlbGVjdG9ycy9sYW5ndWFnZXMuc2VsZWN0b3JzJztcbmltcG9ydCB7IFN0YXRlV2l0aFNpdGVDb250ZXh0IH0gZnJvbSAnLi4vc3RhdGUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTGFuZ3VhZ2VzRWZmZWN0cyB7XG4gIEBFZmZlY3QoKVxuICBsb2FkTGFuZ3VhZ2VzJDogT2JzZXJ2YWJsZTxcbiAgICB8IFNpdGVDb250ZXh0QWN0aW9ucy5Mb2FkTGFuZ3VhZ2VzU3VjY2Vzc1xuICAgIHwgU2l0ZUNvbnRleHRBY3Rpb25zLkxvYWRMYW5ndWFnZXNGYWlsXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFNpdGVDb250ZXh0QWN0aW9ucy5MT0FEX0xBTkdVQUdFUyksXG4gICAgZXhoYXVzdE1hcCgoKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5zaXRlQ29ubmVjdG9yLmdldExhbmd1YWdlcygpLnBpcGUoXG4gICAgICAgIG1hcChcbiAgICAgICAgICAobGFuZ3VhZ2VzKSA9PiBuZXcgU2l0ZUNvbnRleHRBY3Rpb25zLkxvYWRMYW5ndWFnZXNTdWNjZXNzKGxhbmd1YWdlcylcbiAgICAgICAgKSxcbiAgICAgICAgY2F0Y2hFcnJvcigoZXJyb3IpID0+XG4gICAgICAgICAgb2YoXG4gICAgICAgICAgICBuZXcgU2l0ZUNvbnRleHRBY3Rpb25zLkxvYWRMYW5ndWFnZXNGYWlsKFxuICAgICAgICAgICAgICBtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIHBlcnNpc3QkOiBPYnNlcnZhYmxlPHZvaWQ+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShTaXRlQ29udGV4dEFjdGlvbnMuU0VUX0FDVElWRV9MQU5HVUFHRSksXG4gICAgdGFwKChhY3Rpb246IFNpdGVDb250ZXh0QWN0aW9ucy5TZXRBY3RpdmVMYW5ndWFnZSkgPT4ge1xuICAgICAgaWYgKHRoaXMud2luUmVmLnNlc3Npb25TdG9yYWdlKSB7XG4gICAgICAgIHRoaXMud2luUmVmLnNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2xhbmd1YWdlJywgYWN0aW9uLnBheWxvYWQpO1xuICAgICAgfVxuICAgIH0pLFxuICAgIHN3aXRjaE1hcFRvKE5FVkVSKVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBhY3RpdmF0ZUxhbmd1YWdlJDogT2JzZXJ2YWJsZTxcbiAgICBTaXRlQ29udGV4dEFjdGlvbnMuTGFuZ3VhZ2VDaGFuZ2VcbiAgPiA9IHRoaXMuc3RhdGUuc2VsZWN0KGdldEFjdGl2ZUxhbmd1YWdlKS5waXBlKFxuICAgIGJ1ZmZlckNvdW50KDIsIDEpLFxuXG4gICAgLy8gYXZvaWQgZGlzcGF0Y2hpbmcgYGNoYW5nZWAgYWN0aW9uIHdoZW4gd2UncmUganVzdCBzZXR0aW5nIHRoZSBpbml0aWFsIHZhbHVlOlxuICAgIGZpbHRlcigoW3ByZXZpb3VzXSkgPT4gISFwcmV2aW91cyksXG4gICAgbWFwKFxuICAgICAgKFtwcmV2aW91cywgY3VycmVudF0pID0+XG4gICAgICAgIG5ldyBTaXRlQ29udGV4dEFjdGlvbnMuTGFuZ3VhZ2VDaGFuZ2UoeyBwcmV2aW91cywgY3VycmVudCB9KVxuICAgIClcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgc2l0ZUNvbm5lY3RvcjogU2l0ZUNvbm5lY3RvcixcbiAgICBwcml2YXRlIHdpblJlZjogV2luZG93UmVmLFxuICAgIHByaXZhdGUgc3RhdGU6IFN0b3JlPFN0YXRlV2l0aFNpdGVDb250ZXh0PlxuICApIHt9XG59XG4iXX0=
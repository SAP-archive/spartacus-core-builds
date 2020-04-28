import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { filter, take, tap } from 'rxjs/operators';
import { WindowRef } from '../../window/window-ref';
import { getContextParameterDefault, getContextParameterValues, } from '../config/context-config-utils';
import { SiteContextConfig } from '../config/site-context-config';
import { LANGUAGE_CONTEXT_ID } from '../providers/context-ids';
import { SiteContextActions } from '../store/actions/index';
import { SiteContextSelectors } from '../store/selectors/index';
/**
 * Facade that provides easy access to language state, actions and selectors.
 */
var LanguageService = /** @class */ (function () {
    function LanguageService(store, winRef, config) {
        this.store = store;
        this.config = config;
        this.sessionStorage = winRef.sessionStorage;
    }
    /**
     * Represents all the languages supported by the current store.
     */
    LanguageService.prototype.getAll = function () {
        var _this = this;
        return this.store.pipe(select(SiteContextSelectors.getAllLanguages), tap(function (languages) {
            if (!languages) {
                _this.store.dispatch(new SiteContextActions.LoadLanguages());
            }
        }), filter(function (languages) { return Boolean(languages); }));
    };
    /**
     * Represents the isocode of the active language.
     */
    LanguageService.prototype.getActive = function () {
        return this.store.pipe(select(SiteContextSelectors.getActiveLanguage), filter(function (active) { return Boolean(active); }));
    };
    /**
     * Sets the active language.
     */
    LanguageService.prototype.setActive = function (isocode) {
        var _this = this;
        return this.store
            .pipe(select(SiteContextSelectors.getActiveLanguage), take(1))
            .subscribe(function (activeLanguage) {
            if (activeLanguage !== isocode) {
                _this.store.dispatch(new SiteContextActions.SetActiveLanguage(isocode));
            }
        });
    };
    /**
     * Initials the active language. The active language is either given
     * by the last visit (stored in session storage) or by the
     * default session language of the store.
     */
    LanguageService.prototype.initialize = function () {
        var value;
        this.getActive()
            .subscribe(function (val) { return (value = val); })
            .unsubscribe();
        if (value) {
            // don't initialize, if there is already a value (i.e. retrieved from route or transferred from SSR)
            return;
        }
        var sessionLanguage = this.sessionStorage && this.sessionStorage.getItem('language');
        if (sessionLanguage &&
            getContextParameterValues(this.config, LANGUAGE_CONTEXT_ID).includes(sessionLanguage)) {
            this.setActive(sessionLanguage);
        }
        else {
            this.setActive(getContextParameterDefault(this.config, LANGUAGE_CONTEXT_ID));
        }
    };
    LanguageService.ctorParameters = function () { return [
        { type: Store },
        { type: WindowRef },
        { type: SiteContextConfig }
    ]; };
    LanguageService = __decorate([
        Injectable()
    ], LanguageService);
    return LanguageService;
}());
export { LanguageService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZ3VhZ2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zaXRlLWNvbnRleHQvZmFjYWRlL2xhbmd1YWdlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFNUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3BELE9BQU8sRUFDTCwwQkFBMEIsRUFDMUIseUJBQXlCLEdBQzFCLE1BQU0sZ0NBQWdDLENBQUM7QUFDeEMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDbEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFJaEU7O0dBRUc7QUFFSDtJQUdFLHlCQUNZLEtBQWtDLEVBQzVDLE1BQWlCLEVBQ1AsTUFBeUI7UUFGekIsVUFBSyxHQUFMLEtBQUssQ0FBNkI7UUFFbEMsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7UUFFbkMsSUFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDO0lBQzlDLENBQUM7SUFFRDs7T0FFRztJQUNILGdDQUFNLEdBQU47UUFBQSxpQkFVQztRQVRDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxlQUFlLENBQUMsRUFDNUMsR0FBRyxDQUFDLFVBQUMsU0FBUztZQUNaLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ2QsS0FBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxrQkFBa0IsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO2FBQzdEO1FBQ0gsQ0FBQyxDQUFDLEVBQ0YsTUFBTSxDQUFDLFVBQUMsU0FBUyxJQUFLLE9BQUEsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFsQixDQUFrQixDQUFDLENBQzFDLENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSCxtQ0FBUyxHQUFUO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLG9CQUFvQixDQUFDLGlCQUFpQixDQUFDLEVBQzlDLE1BQU0sQ0FBQyxVQUFDLE1BQU0sSUFBSyxPQUFBLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBZixDQUFlLENBQUMsQ0FDcEMsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNILG1DQUFTLEdBQVQsVUFBVSxPQUFlO1FBQXpCLGlCQVVDO1FBVEMsT0FBTyxJQUFJLENBQUMsS0FBSzthQUNkLElBQUksQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsaUJBQWlCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDN0QsU0FBUyxDQUFDLFVBQUMsY0FBYztZQUN4QixJQUFJLGNBQWMsS0FBSyxPQUFPLEVBQUU7Z0JBQzlCLEtBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNqQixJQUFJLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUNsRCxDQUFDO2FBQ0g7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsb0NBQVUsR0FBVjtRQUNFLElBQUksS0FBSyxDQUFDO1FBQ1YsSUFBSSxDQUFDLFNBQVMsRUFBRTthQUNiLFNBQVMsQ0FBQyxVQUFDLEdBQUcsSUFBSyxPQUFBLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxFQUFiLENBQWEsQ0FBQzthQUNqQyxXQUFXLEVBQUUsQ0FBQztRQUNqQixJQUFJLEtBQUssRUFBRTtZQUNULG9HQUFvRztZQUNwRyxPQUFPO1NBQ1I7UUFFRCxJQUFNLGVBQWUsR0FDbkIsSUFBSSxDQUFDLGNBQWMsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNqRSxJQUNFLGVBQWU7WUFDZix5QkFBeUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLG1CQUFtQixDQUFDLENBQUMsUUFBUSxDQUNsRSxlQUFlLENBQ2hCLEVBQ0Q7WUFDQSxJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQ2pDO2FBQU07WUFDTCxJQUFJLENBQUMsU0FBUyxDQUNaLDBCQUEwQixDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsbUJBQW1CLENBQUMsQ0FDN0QsQ0FBQztTQUNIO0lBQ0gsQ0FBQzs7Z0JBNUVrQixLQUFLO2dCQUNkLFNBQVM7Z0JBQ0MsaUJBQWlCOztJQU4xQixlQUFlO1FBRDNCLFVBQVUsRUFBRTtPQUNBLGVBQWUsQ0FpRjNCO0lBQUQsc0JBQUM7Q0FBQSxBQWpGRCxJQWlGQztTQWpGWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc2VsZWN0LCBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgdGFrZSwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTGFuZ3VhZ2UgfSBmcm9tICcuLi8uLi9tb2RlbC9taXNjLm1vZGVsJztcbmltcG9ydCB7IFdpbmRvd1JlZiB9IGZyb20gJy4uLy4uL3dpbmRvdy93aW5kb3ctcmVmJztcbmltcG9ydCB7XG4gIGdldENvbnRleHRQYXJhbWV0ZXJEZWZhdWx0LFxuICBnZXRDb250ZXh0UGFyYW1ldGVyVmFsdWVzLFxufSBmcm9tICcuLi9jb25maWcvY29udGV4dC1jb25maWctdXRpbHMnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRDb25maWcgfSBmcm9tICcuLi9jb25maWcvc2l0ZS1jb250ZXh0LWNvbmZpZyc7XG5pbXBvcnQgeyBMQU5HVUFHRV9DT05URVhUX0lEIH0gZnJvbSAnLi4vcHJvdmlkZXJzL2NvbnRleHQtaWRzJztcbmltcG9ydCB7IFNpdGVDb250ZXh0QWN0aW9ucyB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRTZWxlY3RvcnMgfSBmcm9tICcuLi9zdG9yZS9zZWxlY3RvcnMvaW5kZXgnO1xuaW1wb3J0IHsgU3RhdGVXaXRoU2l0ZUNvbnRleHQgfSBmcm9tICcuLi9zdG9yZS9zdGF0ZSc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dCB9IGZyb20gJy4vc2l0ZS1jb250ZXh0LmludGVyZmFjZSc7XG5cbi8qKlxuICogRmFjYWRlIHRoYXQgcHJvdmlkZXMgZWFzeSBhY2Nlc3MgdG8gbGFuZ3VhZ2Ugc3RhdGUsIGFjdGlvbnMgYW5kIHNlbGVjdG9ycy5cbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExhbmd1YWdlU2VydmljZSBpbXBsZW1lbnRzIFNpdGVDb250ZXh0PExhbmd1YWdlPiB7XG4gIHByaXZhdGUgc2Vzc2lvblN0b3JhZ2U6IFN0b3JhZ2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhTaXRlQ29udGV4dD4sXG4gICAgd2luUmVmOiBXaW5kb3dSZWYsXG4gICAgcHJvdGVjdGVkIGNvbmZpZzogU2l0ZUNvbnRleHRDb25maWdcbiAgKSB7XG4gICAgdGhpcy5zZXNzaW9uU3RvcmFnZSA9IHdpblJlZi5zZXNzaW9uU3RvcmFnZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXByZXNlbnRzIGFsbCB0aGUgbGFuZ3VhZ2VzIHN1cHBvcnRlZCBieSB0aGUgY3VycmVudCBzdG9yZS5cbiAgICovXG4gIGdldEFsbCgpOiBPYnNlcnZhYmxlPExhbmd1YWdlW10+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KFNpdGVDb250ZXh0U2VsZWN0b3JzLmdldEFsbExhbmd1YWdlcyksXG4gICAgICB0YXAoKGxhbmd1YWdlcykgPT4ge1xuICAgICAgICBpZiAoIWxhbmd1YWdlcykge1xuICAgICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFNpdGVDb250ZXh0QWN0aW9ucy5Mb2FkTGFuZ3VhZ2VzKCkpO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIGZpbHRlcigobGFuZ3VhZ2VzKSA9PiBCb29sZWFuKGxhbmd1YWdlcykpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXByZXNlbnRzIHRoZSBpc29jb2RlIG9mIHRoZSBhY3RpdmUgbGFuZ3VhZ2UuXG4gICAqL1xuICBnZXRBY3RpdmUoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KFNpdGVDb250ZXh0U2VsZWN0b3JzLmdldEFjdGl2ZUxhbmd1YWdlKSxcbiAgICAgIGZpbHRlcigoYWN0aXZlKSA9PiBCb29sZWFuKGFjdGl2ZSkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBhY3RpdmUgbGFuZ3VhZ2UuXG4gICAqL1xuICBzZXRBY3RpdmUoaXNvY29kZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmVcbiAgICAgIC5waXBlKHNlbGVjdChTaXRlQ29udGV4dFNlbGVjdG9ycy5nZXRBY3RpdmVMYW5ndWFnZSksIHRha2UoMSkpXG4gICAgICAuc3Vic2NyaWJlKChhY3RpdmVMYW5ndWFnZSkgPT4ge1xuICAgICAgICBpZiAoYWN0aXZlTGFuZ3VhZ2UgIT09IGlzb2NvZGUpIHtcbiAgICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgICAgICAgbmV3IFNpdGVDb250ZXh0QWN0aW9ucy5TZXRBY3RpdmVMYW5ndWFnZShpc29jb2RlKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxzIHRoZSBhY3RpdmUgbGFuZ3VhZ2UuIFRoZSBhY3RpdmUgbGFuZ3VhZ2UgaXMgZWl0aGVyIGdpdmVuXG4gICAqIGJ5IHRoZSBsYXN0IHZpc2l0IChzdG9yZWQgaW4gc2Vzc2lvbiBzdG9yYWdlKSBvciBieSB0aGVcbiAgICogZGVmYXVsdCBzZXNzaW9uIGxhbmd1YWdlIG9mIHRoZSBzdG9yZS5cbiAgICovXG4gIGluaXRpYWxpemUoKSB7XG4gICAgbGV0IHZhbHVlO1xuICAgIHRoaXMuZ2V0QWN0aXZlKClcbiAgICAgIC5zdWJzY3JpYmUoKHZhbCkgPT4gKHZhbHVlID0gdmFsKSlcbiAgICAgIC51bnN1YnNjcmliZSgpO1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgLy8gZG9uJ3QgaW5pdGlhbGl6ZSwgaWYgdGhlcmUgaXMgYWxyZWFkeSBhIHZhbHVlIChpLmUuIHJldHJpZXZlZCBmcm9tIHJvdXRlIG9yIHRyYW5zZmVycmVkIGZyb20gU1NSKVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHNlc3Npb25MYW5ndWFnZSA9XG4gICAgICB0aGlzLnNlc3Npb25TdG9yYWdlICYmIHRoaXMuc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnbGFuZ3VhZ2UnKTtcbiAgICBpZiAoXG4gICAgICBzZXNzaW9uTGFuZ3VhZ2UgJiZcbiAgICAgIGdldENvbnRleHRQYXJhbWV0ZXJWYWx1ZXModGhpcy5jb25maWcsIExBTkdVQUdFX0NPTlRFWFRfSUQpLmluY2x1ZGVzKFxuICAgICAgICBzZXNzaW9uTGFuZ3VhZ2VcbiAgICAgIClcbiAgICApIHtcbiAgICAgIHRoaXMuc2V0QWN0aXZlKHNlc3Npb25MYW5ndWFnZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0QWN0aXZlKFxuICAgICAgICBnZXRDb250ZXh0UGFyYW1ldGVyRGVmYXVsdCh0aGlzLmNvbmZpZywgTEFOR1VBR0VfQ09OVEVYVF9JRClcbiAgICAgICk7XG4gICAgfVxuICB9XG59XG4iXX0=
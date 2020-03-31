import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { filter, take, tap } from 'rxjs/operators';
import { WindowRef } from '../../window/window-ref';
import { SiteContextActions } from '../store/actions/index';
import { SiteContextSelectors } from '../store/selectors/index';
import { LANGUAGE_CONTEXT_ID } from '../providers/context-ids';
import { SiteContextConfig } from '../config/site-context-config';
import { getContextParameterValues, getContextParameterDefault, } from '../config/context-config-utils';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZ3VhZ2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zaXRlLWNvbnRleHQvZmFjYWRlL2xhbmd1YWdlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFNUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3BELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzVELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBR2hFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2xFLE9BQU8sRUFDTCx5QkFBeUIsRUFDekIsMEJBQTBCLEdBQzNCLE1BQU0sZ0NBQWdDLENBQUM7QUFFeEM7O0dBRUc7QUFFSDtJQUdFLHlCQUNZLEtBQWtDLEVBQzVDLE1BQWlCLEVBQ1AsTUFBeUI7UUFGekIsVUFBSyxHQUFMLEtBQUssQ0FBNkI7UUFFbEMsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7UUFFbkMsSUFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDO0lBQzlDLENBQUM7SUFFRDs7T0FFRztJQUNILGdDQUFNLEdBQU47UUFBQSxpQkFVQztRQVRDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxlQUFlLENBQUMsRUFDNUMsR0FBRyxDQUFDLFVBQUMsU0FBUztZQUNaLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ2QsS0FBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxrQkFBa0IsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO2FBQzdEO1FBQ0gsQ0FBQyxDQUFDLEVBQ0YsTUFBTSxDQUFDLFVBQUMsU0FBUyxJQUFLLE9BQUEsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFsQixDQUFrQixDQUFDLENBQzFDLENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSCxtQ0FBUyxHQUFUO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLG9CQUFvQixDQUFDLGlCQUFpQixDQUFDLEVBQzlDLE1BQU0sQ0FBQyxVQUFDLE1BQU0sSUFBSyxPQUFBLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBZixDQUFlLENBQUMsQ0FDcEMsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNILG1DQUFTLEdBQVQsVUFBVSxPQUFlO1FBQXpCLGlCQVVDO1FBVEMsT0FBTyxJQUFJLENBQUMsS0FBSzthQUNkLElBQUksQ0FBQyxNQUFNLENBQUMsb0JBQW9CLENBQUMsaUJBQWlCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDN0QsU0FBUyxDQUFDLFVBQUMsY0FBYztZQUN4QixJQUFJLGNBQWMsS0FBSyxPQUFPLEVBQUU7Z0JBQzlCLEtBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNqQixJQUFJLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUNsRCxDQUFDO2FBQ0g7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsb0NBQVUsR0FBVjtRQUNFLElBQU0sZUFBZSxHQUNuQixJQUFJLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2pFLElBQ0UsZUFBZTtZQUNmLHlCQUF5QixDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsbUJBQW1CLENBQUMsQ0FBQyxRQUFRLENBQ2xFLGVBQWUsQ0FDaEIsRUFDRDtZQUNBLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDakM7YUFBTTtZQUNMLElBQUksQ0FBQyxTQUFTLENBQ1osMEJBQTBCLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxtQkFBbUIsQ0FBQyxDQUM3RCxDQUFDO1NBQ0g7SUFDSCxDQUFDOztnQkFuRWtCLEtBQUs7Z0JBQ2QsU0FBUztnQkFDQyxpQkFBaUI7O0lBTjFCLGVBQWU7UUFEM0IsVUFBVSxFQUFFO09BQ0EsZUFBZSxDQXdFM0I7SUFBRCxzQkFBQztDQUFBLEFBeEVELElBd0VDO1NBeEVZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCB0YWtlLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBMYW5ndWFnZSB9IGZyb20gJy4uLy4uL21vZGVsL21pc2MubW9kZWwnO1xuaW1wb3J0IHsgV2luZG93UmVmIH0gZnJvbSAnLi4vLi4vd2luZG93L3dpbmRvdy1yZWYnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRBY3Rpb25zIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dFNlbGVjdG9ycyB9IGZyb20gJy4uL3N0b3JlL3NlbGVjdG9ycy9pbmRleCc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhTaXRlQ29udGV4dCB9IGZyb20gJy4uL3N0b3JlL3N0YXRlJztcbmltcG9ydCB7IFNpdGVDb250ZXh0IH0gZnJvbSAnLi9zaXRlLWNvbnRleHQuaW50ZXJmYWNlJztcbmltcG9ydCB7IExBTkdVQUdFX0NPTlRFWFRfSUQgfSBmcm9tICcuLi9wcm92aWRlcnMvY29udGV4dC1pZHMnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRDb25maWcgfSBmcm9tICcuLi9jb25maWcvc2l0ZS1jb250ZXh0LWNvbmZpZyc7XG5pbXBvcnQge1xuICBnZXRDb250ZXh0UGFyYW1ldGVyVmFsdWVzLFxuICBnZXRDb250ZXh0UGFyYW1ldGVyRGVmYXVsdCxcbn0gZnJvbSAnLi4vY29uZmlnL2NvbnRleHQtY29uZmlnLXV0aWxzJztcblxuLyoqXG4gKiBGYWNhZGUgdGhhdCBwcm92aWRlcyBlYXN5IGFjY2VzcyB0byBsYW5ndWFnZSBzdGF0ZSwgYWN0aW9ucyBhbmQgc2VsZWN0b3JzLlxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTGFuZ3VhZ2VTZXJ2aWNlIGltcGxlbWVudHMgU2l0ZUNvbnRleHQ8TGFuZ3VhZ2U+IHtcbiAgcHJpdmF0ZSBzZXNzaW9uU3RvcmFnZTogU3RvcmFnZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aFNpdGVDb250ZXh0PixcbiAgICB3aW5SZWY6IFdpbmRvd1JlZixcbiAgICBwcm90ZWN0ZWQgY29uZmlnOiBTaXRlQ29udGV4dENvbmZpZ1xuICApIHtcbiAgICB0aGlzLnNlc3Npb25TdG9yYWdlID0gd2luUmVmLnNlc3Npb25TdG9yYWdlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcHJlc2VudHMgYWxsIHRoZSBsYW5ndWFnZXMgc3VwcG9ydGVkIGJ5IHRoZSBjdXJyZW50IHN0b3JlLlxuICAgKi9cbiAgZ2V0QWxsKCk6IE9ic2VydmFibGU8TGFuZ3VhZ2VbXT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoU2l0ZUNvbnRleHRTZWxlY3RvcnMuZ2V0QWxsTGFuZ3VhZ2VzKSxcbiAgICAgIHRhcCgobGFuZ3VhZ2VzKSA9PiB7XG4gICAgICAgIGlmICghbGFuZ3VhZ2VzKSB7XG4gICAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgU2l0ZUNvbnRleHRBY3Rpb25zLkxvYWRMYW5ndWFnZXMoKSk7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgZmlsdGVyKChsYW5ndWFnZXMpID0+IEJvb2xlYW4obGFuZ3VhZ2VzKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcHJlc2VudHMgdGhlIGlzb2NvZGUgb2YgdGhlIGFjdGl2ZSBsYW5ndWFnZS5cbiAgICovXG4gIGdldEFjdGl2ZSgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoU2l0ZUNvbnRleHRTZWxlY3RvcnMuZ2V0QWN0aXZlTGFuZ3VhZ2UpLFxuICAgICAgZmlsdGVyKChhY3RpdmUpID0+IEJvb2xlYW4oYWN0aXZlKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGFjdGl2ZSBsYW5ndWFnZS5cbiAgICovXG4gIHNldEFjdGl2ZShpc29jb2RlOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZVxuICAgICAgLnBpcGUoc2VsZWN0KFNpdGVDb250ZXh0U2VsZWN0b3JzLmdldEFjdGl2ZUxhbmd1YWdlKSwgdGFrZSgxKSlcbiAgICAgIC5zdWJzY3JpYmUoKGFjdGl2ZUxhbmd1YWdlKSA9PiB7XG4gICAgICAgIGlmIChhY3RpdmVMYW5ndWFnZSAhPT0gaXNvY29kZSkge1xuICAgICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgICAgICBuZXcgU2l0ZUNvbnRleHRBY3Rpb25zLlNldEFjdGl2ZUxhbmd1YWdlKGlzb2NvZGUpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbHMgdGhlIGFjdGl2ZSBsYW5ndWFnZS4gVGhlIGFjdGl2ZSBsYW5ndWFnZSBpcyBlaXRoZXIgZ2l2ZW5cbiAgICogYnkgdGhlIGxhc3QgdmlzaXQgKHN0b3JlZCBpbiBzZXNzaW9uIHN0b3JhZ2UpIG9yIGJ5IHRoZVxuICAgKiBkZWZhdWx0IHNlc3Npb24gbGFuZ3VhZ2Ugb2YgdGhlIHN0b3JlLlxuICAgKi9cbiAgaW5pdGlhbGl6ZSgpIHtcbiAgICBjb25zdCBzZXNzaW9uTGFuZ3VhZ2UgPVxuICAgICAgdGhpcy5zZXNzaW9uU3RvcmFnZSAmJiB0aGlzLnNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2xhbmd1YWdlJyk7XG4gICAgaWYgKFxuICAgICAgc2Vzc2lvbkxhbmd1YWdlICYmXG4gICAgICBnZXRDb250ZXh0UGFyYW1ldGVyVmFsdWVzKHRoaXMuY29uZmlnLCBMQU5HVUFHRV9DT05URVhUX0lEKS5pbmNsdWRlcyhcbiAgICAgICAgc2Vzc2lvbkxhbmd1YWdlXG4gICAgICApXG4gICAgKSB7XG4gICAgICB0aGlzLnNldEFjdGl2ZShzZXNzaW9uTGFuZ3VhZ2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldEFjdGl2ZShcbiAgICAgICAgZ2V0Q29udGV4dFBhcmFtZXRlckRlZmF1bHQodGhpcy5jb25maWcsIExBTkdVQUdFX0NPTlRFWFRfSUQpXG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuIl19
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
    /**
     * Represents all the languages supported by the current store.
     * @return {?}
     */
    LanguageService.prototype.getAll = /**
     * Represents all the languages supported by the current store.
     * @return {?}
     */
    function () {
        var _this = this;
        return this.store.pipe(select(SiteContextSelectors.getAllLanguages), tap((/**
         * @param {?} languages
         * @return {?}
         */
        function (languages) {
            if (!languages) {
                _this.store.dispatch(new SiteContextActions.LoadLanguages());
            }
        })), filter((/**
         * @param {?} languages
         * @return {?}
         */
        function (languages) { return Boolean(languages); })));
    };
    /**
     * Represents the isocode of the active language.
     */
    /**
     * Represents the isocode of the active language.
     * @return {?}
     */
    LanguageService.prototype.getActive = /**
     * Represents the isocode of the active language.
     * @return {?}
     */
    function () {
        return this.store.pipe(select(SiteContextSelectors.getActiveLanguage), filter((/**
         * @param {?} active
         * @return {?}
         */
        function (active) { return Boolean(active); })));
    };
    /**
     * Sets the active language.
     */
    /**
     * Sets the active language.
     * @param {?} isocode
     * @return {?}
     */
    LanguageService.prototype.setActive = /**
     * Sets the active language.
     * @param {?} isocode
     * @return {?}
     */
    function (isocode) {
        var _this = this;
        return this.store
            .pipe(select(SiteContextSelectors.getActiveLanguage), take(1))
            .subscribe((/**
         * @param {?} activeLanguage
         * @return {?}
         */
        function (activeLanguage) {
            if (activeLanguage !== isocode) {
                _this.store.dispatch(new SiteContextActions.SetActiveLanguage(isocode));
            }
        }));
    };
    /**
     * Initials the active language. The active language is either given
     * by the last visit (stored in session storage) or by the
     * default session language of the store.
     */
    /**
     * Initials the active language. The active language is either given
     * by the last visit (stored in session storage) or by the
     * default session language of the store.
     * @return {?}
     */
    LanguageService.prototype.initialize = /**
     * Initials the active language. The active language is either given
     * by the last visit (stored in session storage) or by the
     * default session language of the store.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var sessionLanguage = this.sessionStorage && this.sessionStorage.getItem('language');
        if (sessionLanguage &&
            getContextParameterValues(this.config, LANGUAGE_CONTEXT_ID).includes(sessionLanguage)) {
            this.setActive(sessionLanguage);
        }
        else {
            this.setActive(getContextParameterDefault(this.config, LANGUAGE_CONTEXT_ID));
        }
    };
    LanguageService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    LanguageService.ctorParameters = function () { return [
        { type: Store },
        { type: WindowRef },
        { type: SiteContextConfig }
    ]; };
    return LanguageService;
}());
export { LanguageService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    LanguageService.prototype.sessionStorage;
    /**
     * @type {?}
     * @protected
     */
    LanguageService.prototype.store;
    /**
     * @type {?}
     * @protected
     */
    LanguageService.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZ3VhZ2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zaXRlLWNvbnRleHQvZmFjYWRlL2xhbmd1YWdlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFNUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3BELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzVELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBR2hFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2xFLE9BQU8sRUFDTCx5QkFBeUIsRUFDekIsMEJBQTBCLEdBQzNCLE1BQU0sZ0NBQWdDLENBQUM7Ozs7QUFLeEM7SUFJRSx5QkFDWSxLQUFrQyxFQUM1QyxNQUFpQixFQUNQLE1BQXlCO1FBRnpCLFVBQUssR0FBTCxLQUFLLENBQTZCO1FBRWxDLFdBQU0sR0FBTixNQUFNLENBQW1CO1FBRW5DLElBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQztJQUM5QyxDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0gsZ0NBQU07Ozs7SUFBTjtRQUFBLGlCQVVDO1FBVEMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLG9CQUFvQixDQUFDLGVBQWUsQ0FBQyxFQUM1QyxHQUFHOzs7O1FBQUMsVUFBQSxTQUFTO1lBQ1gsSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDZCxLQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLGtCQUFrQixDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7YUFDN0Q7UUFDSCxDQUFDLEVBQUMsRUFDRixNQUFNOzs7O1FBQUMsVUFBQSxTQUFTLElBQUksT0FBQSxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQWxCLENBQWtCLEVBQUMsQ0FDeEMsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSCxtQ0FBUzs7OztJQUFUO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLG9CQUFvQixDQUFDLGlCQUFpQixDQUFDLEVBQzlDLE1BQU07Ozs7UUFBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBZixDQUFlLEVBQUMsQ0FDbEMsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRzs7Ozs7O0lBQ0gsbUNBQVM7Ozs7O0lBQVQsVUFBVSxPQUFlO1FBQXpCLGlCQWFDO1FBWkMsT0FBTyxJQUFJLENBQUMsS0FBSzthQUNkLElBQUksQ0FDSCxNQUFNLENBQUMsb0JBQW9CLENBQUMsaUJBQWlCLENBQUMsRUFDOUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUNSO2FBQ0EsU0FBUzs7OztRQUFDLFVBQUEsY0FBYztZQUN2QixJQUFJLGNBQWMsS0FBSyxPQUFPLEVBQUU7Z0JBQzlCLEtBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNqQixJQUFJLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUNsRCxDQUFDO2FBQ0g7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7SUFFRDs7OztPQUlHOzs7Ozs7O0lBQ0gsb0NBQVU7Ozs7OztJQUFWOztZQUNRLGVBQWUsR0FDbkIsSUFBSSxDQUFDLGNBQWMsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7UUFDaEUsSUFDRSxlQUFlO1lBQ2YseUJBQXlCLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxtQkFBbUIsQ0FBQyxDQUFDLFFBQVEsQ0FDbEUsZUFBZSxDQUNoQixFQUNEO1lBQ0EsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQztTQUNqQzthQUFNO1lBQ0wsSUFBSSxDQUFDLFNBQVMsQ0FDWiwwQkFBMEIsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLG1CQUFtQixDQUFDLENBQzdELENBQUM7U0FDSDtJQUNILENBQUM7O2dCQTNFRixVQUFVOzs7O2dCQW5CTSxLQUFLO2dCQUliLFNBQVM7Z0JBTVQsaUJBQWlCOztJQXFGMUIsc0JBQUM7Q0FBQSxBQTVFRCxJQTRFQztTQTNFWSxlQUFlOzs7Ozs7SUFDMUIseUNBQWdDOzs7OztJQUc5QixnQ0FBNEM7Ozs7O0lBRTVDLGlDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIHRha2UsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IExhbmd1YWdlIH0gZnJvbSAnLi4vLi4vbW9kZWwvbWlzYy5tb2RlbCc7XG5pbXBvcnQgeyBXaW5kb3dSZWYgfSBmcm9tICcuLi8uLi93aW5kb3cvd2luZG93LXJlZic7XG5pbXBvcnQgeyBTaXRlQ29udGV4dEFjdGlvbnMgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IFNpdGVDb250ZXh0U2VsZWN0b3JzIH0gZnJvbSAnLi4vc3RvcmUvc2VsZWN0b3JzL2luZGV4JztcbmltcG9ydCB7IFN0YXRlV2l0aFNpdGVDb250ZXh0IH0gZnJvbSAnLi4vc3RvcmUvc3RhdGUnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHQgfSBmcm9tICcuL3NpdGUtY29udGV4dC5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgTEFOR1VBR0VfQ09OVEVYVF9JRCB9IGZyb20gJy4uL3Byb3ZpZGVycy9jb250ZXh0LWlkcyc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9zaXRlLWNvbnRleHQtY29uZmlnJztcbmltcG9ydCB7XG4gIGdldENvbnRleHRQYXJhbWV0ZXJWYWx1ZXMsXG4gIGdldENvbnRleHRQYXJhbWV0ZXJEZWZhdWx0LFxufSBmcm9tICcuLi9jb25maWcvY29udGV4dC1jb25maWctdXRpbHMnO1xuXG4vKipcbiAqIEZhY2FkZSB0aGF0IHByb3ZpZGVzIGVhc3kgYWNjZXNzIHRvIGxhbmd1YWdlIHN0YXRlLCBhY3Rpb25zIGFuZCBzZWxlY3RvcnMuXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMYW5ndWFnZVNlcnZpY2UgaW1wbGVtZW50cyBTaXRlQ29udGV4dDxMYW5ndWFnZT4ge1xuICBwcml2YXRlIHNlc3Npb25TdG9yYWdlOiBTdG9yYWdlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoU2l0ZUNvbnRleHQ+LFxuICAgIHdpblJlZjogV2luZG93UmVmLFxuICAgIHByb3RlY3RlZCBjb25maWc6IFNpdGVDb250ZXh0Q29uZmlnXG4gICkge1xuICAgIHRoaXMuc2Vzc2lvblN0b3JhZ2UgPSB3aW5SZWYuc2Vzc2lvblN0b3JhZ2U7XG4gIH1cblxuICAvKipcbiAgICogUmVwcmVzZW50cyBhbGwgdGhlIGxhbmd1YWdlcyBzdXBwb3J0ZWQgYnkgdGhlIGN1cnJlbnQgc3RvcmUuXG4gICAqL1xuICBnZXRBbGwoKTogT2JzZXJ2YWJsZTxMYW5ndWFnZVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChTaXRlQ29udGV4dFNlbGVjdG9ycy5nZXRBbGxMYW5ndWFnZXMpLFxuICAgICAgdGFwKGxhbmd1YWdlcyA9PiB7XG4gICAgICAgIGlmICghbGFuZ3VhZ2VzKSB7XG4gICAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgU2l0ZUNvbnRleHRBY3Rpb25zLkxvYWRMYW5ndWFnZXMoKSk7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgZmlsdGVyKGxhbmd1YWdlcyA9PiBCb29sZWFuKGxhbmd1YWdlcykpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXByZXNlbnRzIHRoZSBpc29jb2RlIG9mIHRoZSBhY3RpdmUgbGFuZ3VhZ2UuXG4gICAqL1xuICBnZXRBY3RpdmUoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KFNpdGVDb250ZXh0U2VsZWN0b3JzLmdldEFjdGl2ZUxhbmd1YWdlKSxcbiAgICAgIGZpbHRlcihhY3RpdmUgPT4gQm9vbGVhbihhY3RpdmUpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgYWN0aXZlIGxhbmd1YWdlLlxuICAgKi9cbiAgc2V0QWN0aXZlKGlzb2NvZGU6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnN0b3JlXG4gICAgICAucGlwZShcbiAgICAgICAgc2VsZWN0KFNpdGVDb250ZXh0U2VsZWN0b3JzLmdldEFjdGl2ZUxhbmd1YWdlKSxcbiAgICAgICAgdGFrZSgxKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZShhY3RpdmVMYW5ndWFnZSA9PiB7XG4gICAgICAgIGlmIChhY3RpdmVMYW5ndWFnZSAhPT0gaXNvY29kZSkge1xuICAgICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgICAgICBuZXcgU2l0ZUNvbnRleHRBY3Rpb25zLlNldEFjdGl2ZUxhbmd1YWdlKGlzb2NvZGUpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbHMgdGhlIGFjdGl2ZSBsYW5ndWFnZS4gVGhlIGFjdGl2ZSBsYW5ndWFnZSBpcyBlaXRoZXIgZ2l2ZW5cbiAgICogYnkgdGhlIGxhc3QgdmlzaXQgKHN0b3JlZCBpbiBzZXNzaW9uIHN0b3JhZ2UpIG9yIGJ5IHRoZVxuICAgKiBkZWZhdWx0IHNlc3Npb24gbGFuZ3VhZ2Ugb2YgdGhlIHN0b3JlLlxuICAgKi9cbiAgaW5pdGlhbGl6ZSgpIHtcbiAgICBjb25zdCBzZXNzaW9uTGFuZ3VhZ2UgPVxuICAgICAgdGhpcy5zZXNzaW9uU3RvcmFnZSAmJiB0aGlzLnNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2xhbmd1YWdlJyk7XG4gICAgaWYgKFxuICAgICAgc2Vzc2lvbkxhbmd1YWdlICYmXG4gICAgICBnZXRDb250ZXh0UGFyYW1ldGVyVmFsdWVzKHRoaXMuY29uZmlnLCBMQU5HVUFHRV9DT05URVhUX0lEKS5pbmNsdWRlcyhcbiAgICAgICAgc2Vzc2lvbkxhbmd1YWdlXG4gICAgICApXG4gICAgKSB7XG4gICAgICB0aGlzLnNldEFjdGl2ZShzZXNzaW9uTGFuZ3VhZ2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldEFjdGl2ZShcbiAgICAgICAgZ2V0Q29udGV4dFBhcmFtZXRlckRlZmF1bHQodGhpcy5jb25maWcsIExBTkdVQUdFX0NPTlRFWFRfSUQpXG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuIl19
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { filter, take, tap } from 'rxjs/operators';
import { WindowRef } from '../../window/window-ref';
import * as fromStore from '../store/index';
import { SiteContextSelectors } from '../store/selectors/index';
/**
 * Facade that provides easy access to language state, actions and selectors.
 */
var LanguageService = /** @class */ (function () {
    function LanguageService(store, winRef) {
        this.store = store;
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
                _this.store.dispatch(new fromStore.LoadLanguages());
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
                _this.store.dispatch(new fromStore.SetActiveLanguage(isocode));
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
     * @param {?} defaultLanguage
     * @return {?}
     */
    LanguageService.prototype.initialize = /**
     * Initials the active language. The active language is either given
     * by the last visit (stored in session storage) or by the
     * default session language of the store.
     * @param {?} defaultLanguage
     * @return {?}
     */
    function (defaultLanguage) {
        if (this.sessionStorage && !!this.sessionStorage.getItem('language')) {
            this.setActive(this.sessionStorage.getItem('language'));
        }
        else {
            this.setActive(defaultLanguage);
        }
    };
    LanguageService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    LanguageService.ctorParameters = function () { return [
        { type: Store },
        { type: WindowRef }
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZ3VhZ2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zaXRlLWNvbnRleHQvZmFjYWRlL2xhbmd1YWdlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFNUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3BELE9BQU8sS0FBSyxTQUFTLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7QUFNaEU7SUFJRSx5QkFDWSxLQUE0QyxFQUN0RCxNQUFpQjtRQURQLFVBQUssR0FBTCxLQUFLLENBQXVDO1FBR3RELElBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQztJQUM5QyxDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0gsZ0NBQU07Ozs7SUFBTjtRQUFBLGlCQVVDO1FBVEMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLG9CQUFvQixDQUFDLGVBQWUsQ0FBQyxFQUM1QyxHQUFHOzs7O1FBQUMsVUFBQSxTQUFTO1lBQ1gsSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDZCxLQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO2FBQ3BEO1FBQ0gsQ0FBQyxFQUFDLEVBQ0YsTUFBTTs7OztRQUFDLFVBQUEsU0FBUyxJQUFJLE9BQUEsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFsQixDQUFrQixFQUFDLENBQ3hDLENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0gsbUNBQVM7Ozs7SUFBVDtRQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxpQkFBaUIsQ0FBQyxFQUM5QyxNQUFNOzs7O1FBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQWYsQ0FBZSxFQUFDLENBQ2xDLENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7Ozs7OztJQUNILG1DQUFTOzs7OztJQUFULFVBQVUsT0FBZTtRQUF6QixpQkFXQztRQVZDLE9BQU8sSUFBSSxDQUFDLEtBQUs7YUFDZCxJQUFJLENBQ0gsTUFBTSxDQUFDLG9CQUFvQixDQUFDLGlCQUFpQixDQUFDLEVBQzlDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FDUjthQUNBLFNBQVM7Ozs7UUFBQyxVQUFBLGNBQWM7WUFDdkIsSUFBSSxjQUFjLEtBQUssT0FBTyxFQUFFO2dCQUM5QixLQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2FBQy9EO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQ7Ozs7T0FJRzs7Ozs7Ozs7SUFDSCxvQ0FBVTs7Ozs7OztJQUFWLFVBQVcsZUFBdUI7UUFDaEMsSUFBSSxJQUFJLENBQUMsY0FBYyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUNwRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7U0FDekQ7YUFBTTtZQUNMLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDakM7SUFDSCxDQUFDOztnQkEvREYsVUFBVTs7OztnQkFaTSxLQUFLO2dCQUliLFNBQVM7O0lBd0VsQixzQkFBQztDQUFBLEFBaEVELElBZ0VDO1NBL0RZLGVBQWU7Ozs7OztJQUMxQix5Q0FBZ0M7Ozs7O0lBRzlCLGdDQUFzRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIHRha2UsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IExhbmd1YWdlIH0gZnJvbSAnLi4vLi4vbW9kZWwvbWlzYy5tb2RlbCc7XG5pbXBvcnQgeyBXaW5kb3dSZWYgfSBmcm9tICcuLi8uLi93aW5kb3cvd2luZG93LXJlZic7XG5pbXBvcnQgKiBhcyBmcm9tU3RvcmUgZnJvbSAnLi4vc3RvcmUvaW5kZXgnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRTZWxlY3RvcnMgfSBmcm9tICcuLi9zdG9yZS9zZWxlY3RvcnMvaW5kZXgnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHQgfSBmcm9tICcuL3NpdGUtY29udGV4dC5pbnRlcmZhY2UnO1xuXG4vKipcbiAqIEZhY2FkZSB0aGF0IHByb3ZpZGVzIGVhc3kgYWNjZXNzIHRvIGxhbmd1YWdlIHN0YXRlLCBhY3Rpb25zIGFuZCBzZWxlY3RvcnMuXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMYW5ndWFnZVNlcnZpY2UgaW1wbGVtZW50cyBTaXRlQ29udGV4dDxMYW5ndWFnZT4ge1xuICBwcml2YXRlIHNlc3Npb25TdG9yYWdlOiBTdG9yYWdlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBzdG9yZTogU3RvcmU8ZnJvbVN0b3JlLlN0YXRlV2l0aFNpdGVDb250ZXh0PixcbiAgICB3aW5SZWY6IFdpbmRvd1JlZlxuICApIHtcbiAgICB0aGlzLnNlc3Npb25TdG9yYWdlID0gd2luUmVmLnNlc3Npb25TdG9yYWdlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcHJlc2VudHMgYWxsIHRoZSBsYW5ndWFnZXMgc3VwcG9ydGVkIGJ5IHRoZSBjdXJyZW50IHN0b3JlLlxuICAgKi9cbiAgZ2V0QWxsKCk6IE9ic2VydmFibGU8TGFuZ3VhZ2VbXT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoU2l0ZUNvbnRleHRTZWxlY3RvcnMuZ2V0QWxsTGFuZ3VhZ2VzKSxcbiAgICAgIHRhcChsYW5ndWFnZXMgPT4ge1xuICAgICAgICBpZiAoIWxhbmd1YWdlcykge1xuICAgICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IGZyb21TdG9yZS5Mb2FkTGFuZ3VhZ2VzKCkpO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIGZpbHRlcihsYW5ndWFnZXMgPT4gQm9vbGVhbihsYW5ndWFnZXMpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmVwcmVzZW50cyB0aGUgaXNvY29kZSBvZiB0aGUgYWN0aXZlIGxhbmd1YWdlLlxuICAgKi9cbiAgZ2V0QWN0aXZlKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChTaXRlQ29udGV4dFNlbGVjdG9ycy5nZXRBY3RpdmVMYW5ndWFnZSksXG4gICAgICBmaWx0ZXIoYWN0aXZlID0+IEJvb2xlYW4oYWN0aXZlKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGFjdGl2ZSBsYW5ndWFnZS5cbiAgICovXG4gIHNldEFjdGl2ZShpc29jb2RlOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZVxuICAgICAgLnBpcGUoXG4gICAgICAgIHNlbGVjdChTaXRlQ29udGV4dFNlbGVjdG9ycy5nZXRBY3RpdmVMYW5ndWFnZSksXG4gICAgICAgIHRha2UoMSlcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoYWN0aXZlTGFuZ3VhZ2UgPT4ge1xuICAgICAgICBpZiAoYWN0aXZlTGFuZ3VhZ2UgIT09IGlzb2NvZGUpIHtcbiAgICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBmcm9tU3RvcmUuU2V0QWN0aXZlTGFuZ3VhZ2UoaXNvY29kZSkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFscyB0aGUgYWN0aXZlIGxhbmd1YWdlLiBUaGUgYWN0aXZlIGxhbmd1YWdlIGlzIGVpdGhlciBnaXZlblxuICAgKiBieSB0aGUgbGFzdCB2aXNpdCAoc3RvcmVkIGluIHNlc3Npb24gc3RvcmFnZSkgb3IgYnkgdGhlXG4gICAqIGRlZmF1bHQgc2Vzc2lvbiBsYW5ndWFnZSBvZiB0aGUgc3RvcmUuXG4gICAqL1xuICBpbml0aWFsaXplKGRlZmF1bHRMYW5ndWFnZTogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMuc2Vzc2lvblN0b3JhZ2UgJiYgISF0aGlzLnNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2xhbmd1YWdlJykpIHtcbiAgICAgIHRoaXMuc2V0QWN0aXZlKHRoaXMuc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnbGFuZ3VhZ2UnKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0QWN0aXZlKGRlZmF1bHRMYW5ndWFnZSk7XG4gICAgfVxuICB9XG59XG4iXX0=
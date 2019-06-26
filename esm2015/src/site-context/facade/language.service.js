/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { filter, take, tap } from 'rxjs/operators';
import { WindowRef } from '../../window/window-ref';
import { SiteContextActions } from '../store/actions/index';
import { SiteContextSelectors } from '../store/selectors/index';
/**
 * Facade that provides easy access to language state, actions and selectors.
 */
export class LanguageService {
    /**
     * @param {?} store
     * @param {?} winRef
     */
    constructor(store, winRef) {
        this.store = store;
        this.sessionStorage = winRef.sessionStorage;
    }
    /**
     * Represents all the languages supported by the current store.
     * @return {?}
     */
    getAll() {
        return this.store.pipe(select(SiteContextSelectors.getAllLanguages), tap((/**
         * @param {?} languages
         * @return {?}
         */
        languages => {
            if (!languages) {
                this.store.dispatch(new SiteContextActions.LoadLanguages());
            }
        })), filter((/**
         * @param {?} languages
         * @return {?}
         */
        languages => Boolean(languages))));
    }
    /**
     * Represents the isocode of the active language.
     * @return {?}
     */
    getActive() {
        return this.store.pipe(select(SiteContextSelectors.getActiveLanguage), filter((/**
         * @param {?} active
         * @return {?}
         */
        active => Boolean(active))));
    }
    /**
     * Sets the active language.
     * @param {?} isocode
     * @return {?}
     */
    setActive(isocode) {
        return this.store
            .pipe(select(SiteContextSelectors.getActiveLanguage), take(1))
            .subscribe((/**
         * @param {?} activeLanguage
         * @return {?}
         */
        activeLanguage => {
            if (activeLanguage !== isocode) {
                this.store.dispatch(new SiteContextActions.SetActiveLanguage(isocode));
            }
        }));
    }
    /**
     * Initials the active language. The active language is either given
     * by the last visit (stored in session storage) or by the
     * default session language of the store.
     * @param {?} defaultLanguage
     * @return {?}
     */
    initialize(defaultLanguage) {
        if (this.sessionStorage && !!this.sessionStorage.getItem('language')) {
            this.setActive(this.sessionStorage.getItem('language'));
        }
        else {
            this.setActive(defaultLanguage);
        }
    }
}
LanguageService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LanguageService.ctorParameters = () => [
    { type: Store },
    { type: WindowRef }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZ3VhZ2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zaXRlLWNvbnRleHQvZmFjYWRlL2xhbmd1YWdlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFNUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3BELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzVELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7O0FBUWhFLE1BQU0sT0FBTyxlQUFlOzs7OztJQUcxQixZQUFzQixLQUFrQyxFQUFFLE1BQWlCO1FBQXJELFVBQUssR0FBTCxLQUFLLENBQTZCO1FBQ3RELElBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQztJQUM5QyxDQUFDOzs7OztJQUtELE1BQU07UUFDSixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsb0JBQW9CLENBQUMsZUFBZSxDQUFDLEVBQzVDLEdBQUc7Ozs7UUFBQyxTQUFTLENBQUMsRUFBRTtZQUNkLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxrQkFBa0IsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO2FBQzdEO1FBQ0gsQ0FBQyxFQUFDLEVBQ0YsTUFBTTs7OztRQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFDLENBQ3hDLENBQUM7SUFDSixDQUFDOzs7OztJQUtELFNBQVM7UUFDUCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsb0JBQW9CLENBQUMsaUJBQWlCLENBQUMsRUFDOUMsTUFBTTs7OztRQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFDLENBQ2xDLENBQUM7SUFDSixDQUFDOzs7Ozs7SUFLRCxTQUFTLENBQUMsT0FBZTtRQUN2QixPQUFPLElBQUksQ0FBQyxLQUFLO2FBQ2QsSUFBSSxDQUNILE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxpQkFBaUIsQ0FBQyxFQUM5QyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQ1I7YUFDQSxTQUFTOzs7O1FBQUMsY0FBYyxDQUFDLEVBQUU7WUFDMUIsSUFBSSxjQUFjLEtBQUssT0FBTyxFQUFFO2dCQUM5QixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDakIsSUFBSSxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsQ0FDbEQsQ0FBQzthQUNIO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDUCxDQUFDOzs7Ozs7OztJQU9ELFVBQVUsQ0FBQyxlQUF1QjtRQUNoQyxJQUFJLElBQUksQ0FBQyxjQUFjLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3BFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztTQUN6RDthQUFNO1lBQ0wsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQztTQUNqQztJQUNILENBQUM7OztZQTlERixVQUFVOzs7O1lBYk0sS0FBSztZQUliLFNBQVM7Ozs7Ozs7SUFXaEIseUNBQWdDOzs7OztJQUVwQixnQ0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCB0YWtlLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBMYW5ndWFnZSB9IGZyb20gJy4uLy4uL21vZGVsL21pc2MubW9kZWwnO1xuaW1wb3J0IHsgV2luZG93UmVmIH0gZnJvbSAnLi4vLi4vd2luZG93L3dpbmRvdy1yZWYnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRBY3Rpb25zIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dFNlbGVjdG9ycyB9IGZyb20gJy4uL3N0b3JlL3NlbGVjdG9ycy9pbmRleCc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhTaXRlQ29udGV4dCB9IGZyb20gJy4uL3N0b3JlL3N0YXRlJztcbmltcG9ydCB7IFNpdGVDb250ZXh0IH0gZnJvbSAnLi9zaXRlLWNvbnRleHQuaW50ZXJmYWNlJztcblxuLyoqXG4gKiBGYWNhZGUgdGhhdCBwcm92aWRlcyBlYXN5IGFjY2VzcyB0byBsYW5ndWFnZSBzdGF0ZSwgYWN0aW9ucyBhbmQgc2VsZWN0b3JzLlxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTGFuZ3VhZ2VTZXJ2aWNlIGltcGxlbWVudHMgU2l0ZUNvbnRleHQ8TGFuZ3VhZ2U+IHtcbiAgcHJpdmF0ZSBzZXNzaW9uU3RvcmFnZTogU3RvcmFnZTtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aFNpdGVDb250ZXh0Piwgd2luUmVmOiBXaW5kb3dSZWYpIHtcbiAgICB0aGlzLnNlc3Npb25TdG9yYWdlID0gd2luUmVmLnNlc3Npb25TdG9yYWdlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcHJlc2VudHMgYWxsIHRoZSBsYW5ndWFnZXMgc3VwcG9ydGVkIGJ5IHRoZSBjdXJyZW50IHN0b3JlLlxuICAgKi9cbiAgZ2V0QWxsKCk6IE9ic2VydmFibGU8TGFuZ3VhZ2VbXT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoU2l0ZUNvbnRleHRTZWxlY3RvcnMuZ2V0QWxsTGFuZ3VhZ2VzKSxcbiAgICAgIHRhcChsYW5ndWFnZXMgPT4ge1xuICAgICAgICBpZiAoIWxhbmd1YWdlcykge1xuICAgICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFNpdGVDb250ZXh0QWN0aW9ucy5Mb2FkTGFuZ3VhZ2VzKCkpO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIGZpbHRlcihsYW5ndWFnZXMgPT4gQm9vbGVhbihsYW5ndWFnZXMpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmVwcmVzZW50cyB0aGUgaXNvY29kZSBvZiB0aGUgYWN0aXZlIGxhbmd1YWdlLlxuICAgKi9cbiAgZ2V0QWN0aXZlKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChTaXRlQ29udGV4dFNlbGVjdG9ycy5nZXRBY3RpdmVMYW5ndWFnZSksXG4gICAgICBmaWx0ZXIoYWN0aXZlID0+IEJvb2xlYW4oYWN0aXZlKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGFjdGl2ZSBsYW5ndWFnZS5cbiAgICovXG4gIHNldEFjdGl2ZShpc29jb2RlOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZVxuICAgICAgLnBpcGUoXG4gICAgICAgIHNlbGVjdChTaXRlQ29udGV4dFNlbGVjdG9ycy5nZXRBY3RpdmVMYW5ndWFnZSksXG4gICAgICAgIHRha2UoMSlcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoYWN0aXZlTGFuZ3VhZ2UgPT4ge1xuICAgICAgICBpZiAoYWN0aXZlTGFuZ3VhZ2UgIT09IGlzb2NvZGUpIHtcbiAgICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgICAgICAgbmV3IFNpdGVDb250ZXh0QWN0aW9ucy5TZXRBY3RpdmVMYW5ndWFnZShpc29jb2RlKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxzIHRoZSBhY3RpdmUgbGFuZ3VhZ2UuIFRoZSBhY3RpdmUgbGFuZ3VhZ2UgaXMgZWl0aGVyIGdpdmVuXG4gICAqIGJ5IHRoZSBsYXN0IHZpc2l0IChzdG9yZWQgaW4gc2Vzc2lvbiBzdG9yYWdlKSBvciBieSB0aGVcbiAgICogZGVmYXVsdCBzZXNzaW9uIGxhbmd1YWdlIG9mIHRoZSBzdG9yZS5cbiAgICovXG4gIGluaXRpYWxpemUoZGVmYXVsdExhbmd1YWdlOiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5zZXNzaW9uU3RvcmFnZSAmJiAhIXRoaXMuc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnbGFuZ3VhZ2UnKSkge1xuICAgICAgdGhpcy5zZXRBY3RpdmUodGhpcy5zZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdsYW5ndWFnZScpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRBY3RpdmUoZGVmYXVsdExhbmd1YWdlKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==
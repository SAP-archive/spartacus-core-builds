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
export class LanguageService {
    /**
     * @param {?} store
     * @param {?} winRef
     * @param {?} config
     */
    constructor(store, winRef, config) {
        this.store = store;
        this.config = config;
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
     * @return {?}
     */
    initialize() {
        /** @type {?} */
        const sessionLanguage = this.sessionStorage && this.sessionStorage.getItem('language');
        if (sessionLanguage &&
            getContextParameterValues(this.config, LANGUAGE_CONTEXT_ID).includes(sessionLanguage)) {
            this.setActive(sessionLanguage);
        }
        else {
            this.setActive(getContextParameterDefault(this.config, LANGUAGE_CONTEXT_ID));
        }
    }
}
LanguageService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
LanguageService.ctorParameters = () => [
    { type: Store },
    { type: WindowRef },
    { type: SiteContextConfig }
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
    /**
     * @type {?}
     * @protected
     */
    LanguageService.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZ3VhZ2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zaXRlLWNvbnRleHQvZmFjYWRlL2xhbmd1YWdlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFNUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3BELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzVELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBR2hFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2xFLE9BQU8sRUFDTCx5QkFBeUIsRUFDekIsMEJBQTBCLEdBQzNCLE1BQU0sZ0NBQWdDLENBQUM7Ozs7QUFNeEMsTUFBTSxPQUFPLGVBQWU7Ozs7OztJQUcxQixZQUNZLEtBQWtDLEVBQzVDLE1BQWlCLEVBQ1AsTUFBeUI7UUFGekIsVUFBSyxHQUFMLEtBQUssQ0FBNkI7UUFFbEMsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7UUFFbkMsSUFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDO0lBQzlDLENBQUM7Ozs7O0lBS0QsTUFBTTtRQUNKLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxlQUFlLENBQUMsRUFDNUMsR0FBRzs7OztRQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDZCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLGtCQUFrQixDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7YUFDN0Q7UUFDSCxDQUFDLEVBQUMsRUFDRixNQUFNOzs7O1FBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUMsQ0FDeEMsQ0FBQztJQUNKLENBQUM7Ozs7O0lBS0QsU0FBUztRQUNQLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxpQkFBaUIsQ0FBQyxFQUM5QyxNQUFNOzs7O1FBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUMsQ0FDbEMsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUtELFNBQVMsQ0FBQyxPQUFlO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLEtBQUs7YUFDZCxJQUFJLENBQ0gsTUFBTSxDQUFDLG9CQUFvQixDQUFDLGlCQUFpQixDQUFDLEVBQzlDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FDUjthQUNBLFNBQVM7Ozs7UUFBQyxjQUFjLENBQUMsRUFBRTtZQUMxQixJQUFJLGNBQWMsS0FBSyxPQUFPLEVBQUU7Z0JBQzlCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNqQixJQUFJLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUNsRCxDQUFDO2FBQ0g7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7Ozs7Ozs7SUFPRCxVQUFVOztjQUNGLGVBQWUsR0FDbkIsSUFBSSxDQUFDLGNBQWMsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7UUFDaEUsSUFDRSxlQUFlO1lBQ2YseUJBQXlCLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxtQkFBbUIsQ0FBQyxDQUFDLFFBQVEsQ0FDbEUsZUFBZSxDQUNoQixFQUNEO1lBQ0EsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQztTQUNqQzthQUFNO1lBQ0wsSUFBSSxDQUFDLFNBQVMsQ0FDWiwwQkFBMEIsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLG1CQUFtQixDQUFDLENBQzdELENBQUM7U0FDSDtJQUNILENBQUM7OztZQTNFRixVQUFVOzs7O1lBbkJNLEtBQUs7WUFJYixTQUFTO1lBTVQsaUJBQWlCOzs7Ozs7O0lBV3hCLHlDQUFnQzs7Ozs7SUFHOUIsZ0NBQTRDOzs7OztJQUU1QyxpQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCB0YWtlLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBMYW5ndWFnZSB9IGZyb20gJy4uLy4uL21vZGVsL21pc2MubW9kZWwnO1xuaW1wb3J0IHsgV2luZG93UmVmIH0gZnJvbSAnLi4vLi4vd2luZG93L3dpbmRvdy1yZWYnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRBY3Rpb25zIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dFNlbGVjdG9ycyB9IGZyb20gJy4uL3N0b3JlL3NlbGVjdG9ycy9pbmRleCc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhTaXRlQ29udGV4dCB9IGZyb20gJy4uL3N0b3JlL3N0YXRlJztcbmltcG9ydCB7IFNpdGVDb250ZXh0IH0gZnJvbSAnLi9zaXRlLWNvbnRleHQuaW50ZXJmYWNlJztcbmltcG9ydCB7IExBTkdVQUdFX0NPTlRFWFRfSUQgfSBmcm9tICcuLi9wcm92aWRlcnMvY29udGV4dC1pZHMnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRDb25maWcgfSBmcm9tICcuLi9jb25maWcvc2l0ZS1jb250ZXh0LWNvbmZpZyc7XG5pbXBvcnQge1xuICBnZXRDb250ZXh0UGFyYW1ldGVyVmFsdWVzLFxuICBnZXRDb250ZXh0UGFyYW1ldGVyRGVmYXVsdCxcbn0gZnJvbSAnLi4vY29uZmlnL2NvbnRleHQtY29uZmlnLXV0aWxzJztcblxuLyoqXG4gKiBGYWNhZGUgdGhhdCBwcm92aWRlcyBlYXN5IGFjY2VzcyB0byBsYW5ndWFnZSBzdGF0ZSwgYWN0aW9ucyBhbmQgc2VsZWN0b3JzLlxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTGFuZ3VhZ2VTZXJ2aWNlIGltcGxlbWVudHMgU2l0ZUNvbnRleHQ8TGFuZ3VhZ2U+IHtcbiAgcHJpdmF0ZSBzZXNzaW9uU3RvcmFnZTogU3RvcmFnZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aFNpdGVDb250ZXh0PixcbiAgICB3aW5SZWY6IFdpbmRvd1JlZixcbiAgICBwcm90ZWN0ZWQgY29uZmlnOiBTaXRlQ29udGV4dENvbmZpZ1xuICApIHtcbiAgICB0aGlzLnNlc3Npb25TdG9yYWdlID0gd2luUmVmLnNlc3Npb25TdG9yYWdlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcHJlc2VudHMgYWxsIHRoZSBsYW5ndWFnZXMgc3VwcG9ydGVkIGJ5IHRoZSBjdXJyZW50IHN0b3JlLlxuICAgKi9cbiAgZ2V0QWxsKCk6IE9ic2VydmFibGU8TGFuZ3VhZ2VbXT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoU2l0ZUNvbnRleHRTZWxlY3RvcnMuZ2V0QWxsTGFuZ3VhZ2VzKSxcbiAgICAgIHRhcChsYW5ndWFnZXMgPT4ge1xuICAgICAgICBpZiAoIWxhbmd1YWdlcykge1xuICAgICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFNpdGVDb250ZXh0QWN0aW9ucy5Mb2FkTGFuZ3VhZ2VzKCkpO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIGZpbHRlcihsYW5ndWFnZXMgPT4gQm9vbGVhbihsYW5ndWFnZXMpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmVwcmVzZW50cyB0aGUgaXNvY29kZSBvZiB0aGUgYWN0aXZlIGxhbmd1YWdlLlxuICAgKi9cbiAgZ2V0QWN0aXZlKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChTaXRlQ29udGV4dFNlbGVjdG9ycy5nZXRBY3RpdmVMYW5ndWFnZSksXG4gICAgICBmaWx0ZXIoYWN0aXZlID0+IEJvb2xlYW4oYWN0aXZlKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGFjdGl2ZSBsYW5ndWFnZS5cbiAgICovXG4gIHNldEFjdGl2ZShpc29jb2RlOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZVxuICAgICAgLnBpcGUoXG4gICAgICAgIHNlbGVjdChTaXRlQ29udGV4dFNlbGVjdG9ycy5nZXRBY3RpdmVMYW5ndWFnZSksXG4gICAgICAgIHRha2UoMSlcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoYWN0aXZlTGFuZ3VhZ2UgPT4ge1xuICAgICAgICBpZiAoYWN0aXZlTGFuZ3VhZ2UgIT09IGlzb2NvZGUpIHtcbiAgICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgICAgICAgbmV3IFNpdGVDb250ZXh0QWN0aW9ucy5TZXRBY3RpdmVMYW5ndWFnZShpc29jb2RlKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxzIHRoZSBhY3RpdmUgbGFuZ3VhZ2UuIFRoZSBhY3RpdmUgbGFuZ3VhZ2UgaXMgZWl0aGVyIGdpdmVuXG4gICAqIGJ5IHRoZSBsYXN0IHZpc2l0IChzdG9yZWQgaW4gc2Vzc2lvbiBzdG9yYWdlKSBvciBieSB0aGVcbiAgICogZGVmYXVsdCBzZXNzaW9uIGxhbmd1YWdlIG9mIHRoZSBzdG9yZS5cbiAgICovXG4gIGluaXRpYWxpemUoKSB7XG4gICAgY29uc3Qgc2Vzc2lvbkxhbmd1YWdlID1cbiAgICAgIHRoaXMuc2Vzc2lvblN0b3JhZ2UgJiYgdGhpcy5zZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdsYW5ndWFnZScpO1xuICAgIGlmIChcbiAgICAgIHNlc3Npb25MYW5ndWFnZSAmJlxuICAgICAgZ2V0Q29udGV4dFBhcmFtZXRlclZhbHVlcyh0aGlzLmNvbmZpZywgTEFOR1VBR0VfQ09OVEVYVF9JRCkuaW5jbHVkZXMoXG4gICAgICAgIHNlc3Npb25MYW5ndWFnZVxuICAgICAgKVxuICAgICkge1xuICAgICAgdGhpcy5zZXRBY3RpdmUoc2Vzc2lvbkxhbmd1YWdlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRBY3RpdmUoXG4gICAgICAgIGdldENvbnRleHRQYXJhbWV0ZXJEZWZhdWx0KHRoaXMuY29uZmlnLCBMQU5HVUFHRV9DT05URVhUX0lEKVxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==
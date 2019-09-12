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
import { SiteContextConfig } from '../config/site-context-config';
import { getContextParameterValues, getContextParameterDefault, } from '../config/context-config-utils';
import { CURRENCY_CONTEXT_ID } from '../providers/context-ids';
/**
 * Facade that provides easy access to curreny state, actions and selectors.
 */
var CurrencyService = /** @class */ (function () {
    function CurrencyService(store, winRef, config) {
        this.store = store;
        this.config = config;
        this.sessionStorage = winRef.sessionStorage;
    }
    /**
     * Represents all the currencies supported by the current store.
     */
    /**
     * Represents all the currencies supported by the current store.
     * @return {?}
     */
    CurrencyService.prototype.getAll = /**
     * Represents all the currencies supported by the current store.
     * @return {?}
     */
    function () {
        var _this = this;
        return this.store.pipe(select(SiteContextSelectors.getAllCurrencies), tap((/**
         * @param {?} currencies
         * @return {?}
         */
        function (currencies) {
            if (!currencies) {
                _this.store.dispatch(new SiteContextActions.LoadCurrencies());
            }
        })), filter((/**
         * @param {?} currenies
         * @return {?}
         */
        function (currenies) { return Boolean(currenies); })));
    };
    /**
     * Represents the isocode of the active currency.
     */
    /**
     * Represents the isocode of the active currency.
     * @return {?}
     */
    CurrencyService.prototype.getActive = /**
     * Represents the isocode of the active currency.
     * @return {?}
     */
    function () {
        return this.store.pipe(select(SiteContextSelectors.getActiveCurrency), filter((/**
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
    CurrencyService.prototype.setActive = /**
     * Sets the active language.
     * @param {?} isocode
     * @return {?}
     */
    function (isocode) {
        var _this = this;
        return this.store
            .pipe(select(SiteContextSelectors.getActiveCurrency), take(1))
            .subscribe((/**
         * @param {?} activeCurrency
         * @return {?}
         */
        function (activeCurrency) {
            if (activeCurrency !== isocode) {
                _this.store.dispatch(new SiteContextActions.SetActiveCurrency(isocode));
            }
        }));
    };
    /**
     * Initials the active currency. The active currency is either given
     * by the last visit (stored in session storage) or by the
     * default session currency of the store.
     */
    /**
     * Initials the active currency. The active currency is either given
     * by the last visit (stored in session storage) or by the
     * default session currency of the store.
     * @return {?}
     */
    CurrencyService.prototype.initialize = /**
     * Initials the active currency. The active currency is either given
     * by the last visit (stored in session storage) or by the
     * default session currency of the store.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var sessionCurrency = this.sessionStorage && this.sessionStorage.getItem('currency');
        if (sessionCurrency &&
            getContextParameterValues(this.config, CURRENCY_CONTEXT_ID).includes(sessionCurrency)) {
            this.setActive(sessionCurrency);
        }
        else {
            this.setActive(getContextParameterDefault(this.config, CURRENCY_CONTEXT_ID));
        }
    };
    CurrencyService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CurrencyService.ctorParameters = function () { return [
        { type: Store },
        { type: WindowRef },
        { type: SiteContextConfig }
    ]; };
    return CurrencyService;
}());
export { CurrencyService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CurrencyService.prototype.sessionStorage;
    /**
     * @type {?}
     * @protected
     */
    CurrencyService.prototype.store;
    /**
     * @type {?}
     * @protected
     */
    CurrencyService.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVuY3kuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zaXRlLWNvbnRleHQvZmFjYWRlL2N1cnJlbmN5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFNUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3BELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzVELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBR2hFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2xFLE9BQU8sRUFDTCx5QkFBeUIsRUFDekIsMEJBQTBCLEdBQzNCLE1BQU0sZ0NBQWdDLENBQUM7QUFDeEMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7QUFLL0Q7SUFJRSx5QkFDWSxLQUFrQyxFQUM1QyxNQUFpQixFQUNQLE1BQXlCO1FBRnpCLFVBQUssR0FBTCxLQUFLLENBQTZCO1FBRWxDLFdBQU0sR0FBTixNQUFNLENBQW1CO1FBRW5DLElBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQztJQUM5QyxDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0gsZ0NBQU07Ozs7SUFBTjtRQUFBLGlCQVVDO1FBVEMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLG9CQUFvQixDQUFDLGdCQUFnQixDQUFDLEVBQzdDLEdBQUc7Ozs7UUFBQyxVQUFBLFVBQVU7WUFDWixJQUFJLENBQUMsVUFBVSxFQUFFO2dCQUNmLEtBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksa0JBQWtCLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQzthQUM5RDtRQUNILENBQUMsRUFBQyxFQUNGLE1BQU07Ozs7UUFBQyxVQUFBLFNBQVMsSUFBSSxPQUFBLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBbEIsQ0FBa0IsRUFBQyxDQUN4QyxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHOzs7OztJQUNILG1DQUFTOzs7O0lBQVQ7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsb0JBQW9CLENBQUMsaUJBQWlCLENBQUMsRUFDOUMsTUFBTTs7OztRQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFmLENBQWUsRUFBQyxDQUNsQyxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHOzs7Ozs7SUFDSCxtQ0FBUzs7Ozs7SUFBVCxVQUFVLE9BQWU7UUFBekIsaUJBYUM7UUFaQyxPQUFPLElBQUksQ0FBQyxLQUFLO2FBQ2QsSUFBSSxDQUNILE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxpQkFBaUIsQ0FBQyxFQUM5QyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQ1I7YUFDQSxTQUFTOzs7O1FBQUMsVUFBQSxjQUFjO1lBQ3ZCLElBQUksY0FBYyxLQUFLLE9BQU8sRUFBRTtnQkFDOUIsS0FBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ2pCLElBQUksa0JBQWtCLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLENBQ2xELENBQUM7YUFDSDtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQztJQUVEOzs7O09BSUc7Ozs7Ozs7SUFDSCxvQ0FBVTs7Ozs7O0lBQVY7O1lBQ1EsZUFBZSxHQUNuQixJQUFJLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQztRQUNoRSxJQUNFLGVBQWU7WUFDZix5QkFBeUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLG1CQUFtQixDQUFDLENBQUMsUUFBUSxDQUNsRSxlQUFlLENBQ2hCLEVBQ0Q7WUFDQSxJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQ2pDO2FBQU07WUFDTCxJQUFJLENBQUMsU0FBUyxDQUNaLDBCQUEwQixDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsbUJBQW1CLENBQUMsQ0FDN0QsQ0FBQztTQUNIO0lBQ0gsQ0FBQzs7Z0JBM0VGLFVBQVU7Ozs7Z0JBbkJNLEtBQUs7Z0JBSWIsU0FBUztnQkFLVCxpQkFBaUI7O0lBc0YxQixzQkFBQztDQUFBLEFBNUVELElBNEVDO1NBM0VZLGVBQWU7Ozs7OztJQUMxQix5Q0FBZ0M7Ozs7O0lBRzlCLGdDQUE0Qzs7Ozs7SUFFNUMsaUNBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc2VsZWN0LCBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgdGFrZSwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ3VycmVuY3kgfSBmcm9tICcuLi8uLi9tb2RlbC9taXNjLm1vZGVsJztcbmltcG9ydCB7IFdpbmRvd1JlZiB9IGZyb20gJy4uLy4uL3dpbmRvdy93aW5kb3ctcmVmJztcbmltcG9ydCB7IFNpdGVDb250ZXh0QWN0aW9ucyB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRTZWxlY3RvcnMgfSBmcm9tICcuLi9zdG9yZS9zZWxlY3RvcnMvaW5kZXgnO1xuaW1wb3J0IHsgU3RhdGVXaXRoU2l0ZUNvbnRleHQgfSBmcm9tICcuLi9zdG9yZS9zdGF0ZSc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dCB9IGZyb20gJy4vc2l0ZS1jb250ZXh0LmludGVyZmFjZSc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9zaXRlLWNvbnRleHQtY29uZmlnJztcbmltcG9ydCB7XG4gIGdldENvbnRleHRQYXJhbWV0ZXJWYWx1ZXMsXG4gIGdldENvbnRleHRQYXJhbWV0ZXJEZWZhdWx0LFxufSBmcm9tICcuLi9jb25maWcvY29udGV4dC1jb25maWctdXRpbHMnO1xuaW1wb3J0IHsgQ1VSUkVOQ1lfQ09OVEVYVF9JRCB9IGZyb20gJy4uL3Byb3ZpZGVycy9jb250ZXh0LWlkcyc7XG5cbi8qKlxuICogRmFjYWRlIHRoYXQgcHJvdmlkZXMgZWFzeSBhY2Nlc3MgdG8gY3VycmVueSBzdGF0ZSwgYWN0aW9ucyBhbmQgc2VsZWN0b3JzLlxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ3VycmVuY3lTZXJ2aWNlIGltcGxlbWVudHMgU2l0ZUNvbnRleHQ8Q3VycmVuY3k+IHtcbiAgcHJpdmF0ZSBzZXNzaW9uU3RvcmFnZTogU3RvcmFnZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aFNpdGVDb250ZXh0PixcbiAgICB3aW5SZWY6IFdpbmRvd1JlZixcbiAgICBwcm90ZWN0ZWQgY29uZmlnOiBTaXRlQ29udGV4dENvbmZpZ1xuICApIHtcbiAgICB0aGlzLnNlc3Npb25TdG9yYWdlID0gd2luUmVmLnNlc3Npb25TdG9yYWdlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcHJlc2VudHMgYWxsIHRoZSBjdXJyZW5jaWVzIHN1cHBvcnRlZCBieSB0aGUgY3VycmVudCBzdG9yZS5cbiAgICovXG4gIGdldEFsbCgpOiBPYnNlcnZhYmxlPEN1cnJlbmN5W10+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KFNpdGVDb250ZXh0U2VsZWN0b3JzLmdldEFsbEN1cnJlbmNpZXMpLFxuICAgICAgdGFwKGN1cnJlbmNpZXMgPT4ge1xuICAgICAgICBpZiAoIWN1cnJlbmNpZXMpIHtcbiAgICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBTaXRlQ29udGV4dEFjdGlvbnMuTG9hZEN1cnJlbmNpZXMoKSk7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgZmlsdGVyKGN1cnJlbmllcyA9PiBCb29sZWFuKGN1cnJlbmllcykpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXByZXNlbnRzIHRoZSBpc29jb2RlIG9mIHRoZSBhY3RpdmUgY3VycmVuY3kuXG4gICAqL1xuICBnZXRBY3RpdmUoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KFNpdGVDb250ZXh0U2VsZWN0b3JzLmdldEFjdGl2ZUN1cnJlbmN5KSxcbiAgICAgIGZpbHRlcihhY3RpdmUgPT4gQm9vbGVhbihhY3RpdmUpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgYWN0aXZlIGxhbmd1YWdlLlxuICAgKi9cbiAgc2V0QWN0aXZlKGlzb2NvZGU6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnN0b3JlXG4gICAgICAucGlwZShcbiAgICAgICAgc2VsZWN0KFNpdGVDb250ZXh0U2VsZWN0b3JzLmdldEFjdGl2ZUN1cnJlbmN5KSxcbiAgICAgICAgdGFrZSgxKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZShhY3RpdmVDdXJyZW5jeSA9PiB7XG4gICAgICAgIGlmIChhY3RpdmVDdXJyZW5jeSAhPT0gaXNvY29kZSkge1xuICAgICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgICAgICBuZXcgU2l0ZUNvbnRleHRBY3Rpb25zLlNldEFjdGl2ZUN1cnJlbmN5KGlzb2NvZGUpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbHMgdGhlIGFjdGl2ZSBjdXJyZW5jeS4gVGhlIGFjdGl2ZSBjdXJyZW5jeSBpcyBlaXRoZXIgZ2l2ZW5cbiAgICogYnkgdGhlIGxhc3QgdmlzaXQgKHN0b3JlZCBpbiBzZXNzaW9uIHN0b3JhZ2UpIG9yIGJ5IHRoZVxuICAgKiBkZWZhdWx0IHNlc3Npb24gY3VycmVuY3kgb2YgdGhlIHN0b3JlLlxuICAgKi9cbiAgaW5pdGlhbGl6ZSgpIHtcbiAgICBjb25zdCBzZXNzaW9uQ3VycmVuY3kgPVxuICAgICAgdGhpcy5zZXNzaW9uU3RvcmFnZSAmJiB0aGlzLnNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2N1cnJlbmN5Jyk7XG4gICAgaWYgKFxuICAgICAgc2Vzc2lvbkN1cnJlbmN5ICYmXG4gICAgICBnZXRDb250ZXh0UGFyYW1ldGVyVmFsdWVzKHRoaXMuY29uZmlnLCBDVVJSRU5DWV9DT05URVhUX0lEKS5pbmNsdWRlcyhcbiAgICAgICAgc2Vzc2lvbkN1cnJlbmN5XG4gICAgICApXG4gICAgKSB7XG4gICAgICB0aGlzLnNldEFjdGl2ZShzZXNzaW9uQ3VycmVuY3kpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldEFjdGl2ZShcbiAgICAgICAgZ2V0Q29udGV4dFBhcmFtZXRlckRlZmF1bHQodGhpcy5jb25maWcsIENVUlJFTkNZX0NPTlRFWFRfSUQpXG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuIl19
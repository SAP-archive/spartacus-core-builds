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
 * Facade that provides easy access to curreny state, actions and selectors.
 */
export class CurrencyService {
    /**
     * @param {?} store
     * @param {?} winRef
     */
    constructor(store, winRef) {
        this.store = store;
        this.sessionStorage = winRef.sessionStorage;
    }
    /**
     * Represents all the currencies supported by the current store.
     * @return {?}
     */
    getAll() {
        return this.store.pipe(select(SiteContextSelectors.getAllCurrencies), tap((/**
         * @param {?} currencies
         * @return {?}
         */
        currencies => {
            if (!currencies) {
                this.store.dispatch(new SiteContextActions.LoadCurrencies());
            }
        })), filter((/**
         * @param {?} currenies
         * @return {?}
         */
        currenies => Boolean(currenies))));
    }
    /**
     * Represents the isocode of the active currency.
     * @return {?}
     */
    getActive() {
        return this.store.pipe(select(SiteContextSelectors.getActiveCurrency), filter((/**
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
            .pipe(select(SiteContextSelectors.getActiveCurrency), take(1))
            .subscribe((/**
         * @param {?} activeCurrency
         * @return {?}
         */
        activeCurrency => {
            if (activeCurrency !== isocode) {
                this.store.dispatch(new SiteContextActions.SetActiveCurrency(isocode));
            }
        }));
    }
    /**
     * Initials the active currency. The active currency is either given
     * by the last visit (stored in session storage) or by the
     * default session currency of the store.
     * @param {?} defaultCurrency
     * @return {?}
     */
    initialize(defaultCurrency) {
        if (this.sessionStorage && !!this.sessionStorage.getItem('currency')) {
            this.setActive(this.sessionStorage.getItem('currency'));
        }
        else {
            this.setActive(defaultCurrency);
        }
    }
}
CurrencyService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CurrencyService.ctorParameters = () => [
    { type: Store },
    { type: WindowRef }
];
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVuY3kuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zaXRlLWNvbnRleHQvZmFjYWRlL2N1cnJlbmN5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFNUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3BELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzVELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7O0FBUWhFLE1BQU0sT0FBTyxlQUFlOzs7OztJQUcxQixZQUFzQixLQUFrQyxFQUFFLE1BQWlCO1FBQXJELFVBQUssR0FBTCxLQUFLLENBQTZCO1FBQ3RELElBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQztJQUM5QyxDQUFDOzs7OztJQUtELE1BQU07UUFDSixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsb0JBQW9CLENBQUMsZ0JBQWdCLENBQUMsRUFDN0MsR0FBRzs7OztRQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ2YsSUFBSSxDQUFDLFVBQVUsRUFBRTtnQkFDZixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLGtCQUFrQixDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7YUFDOUQ7UUFDSCxDQUFDLEVBQUMsRUFDRixNQUFNOzs7O1FBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUMsQ0FDeEMsQ0FBQztJQUNKLENBQUM7Ozs7O0lBS0QsU0FBUztRQUNQLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxpQkFBaUIsQ0FBQyxFQUM5QyxNQUFNOzs7O1FBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUMsQ0FDbEMsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUtELFNBQVMsQ0FBQyxPQUFlO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLEtBQUs7YUFDZCxJQUFJLENBQ0gsTUFBTSxDQUFDLG9CQUFvQixDQUFDLGlCQUFpQixDQUFDLEVBQzlDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FDUjthQUNBLFNBQVM7Ozs7UUFBQyxjQUFjLENBQUMsRUFBRTtZQUMxQixJQUFJLGNBQWMsS0FBSyxPQUFPLEVBQUU7Z0JBQzlCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNqQixJQUFJLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUNsRCxDQUFDO2FBQ0g7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7Ozs7Ozs7O0lBT0QsVUFBVSxDQUFDLGVBQXVCO1FBQ2hDLElBQUksSUFBSSxDQUFDLGNBQWMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDcEUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1NBQ3pEO2FBQU07WUFDTCxJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQzs7O1lBOURGLFVBQVU7Ozs7WUFiTSxLQUFLO1lBSWIsU0FBUzs7Ozs7OztJQVdoQix5Q0FBZ0M7Ozs7O0lBRXBCLGdDQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIHRha2UsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEN1cnJlbmN5IH0gZnJvbSAnLi4vLi4vbW9kZWwvbWlzYy5tb2RlbCc7XG5pbXBvcnQgeyBXaW5kb3dSZWYgfSBmcm9tICcuLi8uLi93aW5kb3cvd2luZG93LXJlZic7XG5pbXBvcnQgeyBTaXRlQ29udGV4dEFjdGlvbnMgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IFNpdGVDb250ZXh0U2VsZWN0b3JzIH0gZnJvbSAnLi4vc3RvcmUvc2VsZWN0b3JzL2luZGV4JztcbmltcG9ydCB7IFN0YXRlV2l0aFNpdGVDb250ZXh0IH0gZnJvbSAnLi4vc3RvcmUvc3RhdGUnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHQgfSBmcm9tICcuL3NpdGUtY29udGV4dC5pbnRlcmZhY2UnO1xuXG4vKipcbiAqIEZhY2FkZSB0aGF0IHByb3ZpZGVzIGVhc3kgYWNjZXNzIHRvIGN1cnJlbnkgc3RhdGUsIGFjdGlvbnMgYW5kIHNlbGVjdG9ycy5cbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEN1cnJlbmN5U2VydmljZSBpbXBsZW1lbnRzIFNpdGVDb250ZXh0PEN1cnJlbmN5PiB7XG4gIHByaXZhdGUgc2Vzc2lvblN0b3JhZ2U6IFN0b3JhZ2U7XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhTaXRlQ29udGV4dD4sIHdpblJlZjogV2luZG93UmVmKSB7XG4gICAgdGhpcy5zZXNzaW9uU3RvcmFnZSA9IHdpblJlZi5zZXNzaW9uU3RvcmFnZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXByZXNlbnRzIGFsbCB0aGUgY3VycmVuY2llcyBzdXBwb3J0ZWQgYnkgdGhlIGN1cnJlbnQgc3RvcmUuXG4gICAqL1xuICBnZXRBbGwoKTogT2JzZXJ2YWJsZTxDdXJyZW5jeVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChTaXRlQ29udGV4dFNlbGVjdG9ycy5nZXRBbGxDdXJyZW5jaWVzKSxcbiAgICAgIHRhcChjdXJyZW5jaWVzID0+IHtcbiAgICAgICAgaWYgKCFjdXJyZW5jaWVzKSB7XG4gICAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgU2l0ZUNvbnRleHRBY3Rpb25zLkxvYWRDdXJyZW5jaWVzKCkpO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIGZpbHRlcihjdXJyZW5pZXMgPT4gQm9vbGVhbihjdXJyZW5pZXMpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmVwcmVzZW50cyB0aGUgaXNvY29kZSBvZiB0aGUgYWN0aXZlIGN1cnJlbmN5LlxuICAgKi9cbiAgZ2V0QWN0aXZlKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChTaXRlQ29udGV4dFNlbGVjdG9ycy5nZXRBY3RpdmVDdXJyZW5jeSksXG4gICAgICBmaWx0ZXIoYWN0aXZlID0+IEJvb2xlYW4oYWN0aXZlKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGFjdGl2ZSBsYW5ndWFnZS5cbiAgICovXG4gIHNldEFjdGl2ZShpc29jb2RlOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZVxuICAgICAgLnBpcGUoXG4gICAgICAgIHNlbGVjdChTaXRlQ29udGV4dFNlbGVjdG9ycy5nZXRBY3RpdmVDdXJyZW5jeSksXG4gICAgICAgIHRha2UoMSlcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoYWN0aXZlQ3VycmVuY3kgPT4ge1xuICAgICAgICBpZiAoYWN0aXZlQ3VycmVuY3kgIT09IGlzb2NvZGUpIHtcbiAgICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgICAgICAgbmV3IFNpdGVDb250ZXh0QWN0aW9ucy5TZXRBY3RpdmVDdXJyZW5jeShpc29jb2RlKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxzIHRoZSBhY3RpdmUgY3VycmVuY3kuIFRoZSBhY3RpdmUgY3VycmVuY3kgaXMgZWl0aGVyIGdpdmVuXG4gICAqIGJ5IHRoZSBsYXN0IHZpc2l0IChzdG9yZWQgaW4gc2Vzc2lvbiBzdG9yYWdlKSBvciBieSB0aGVcbiAgICogZGVmYXVsdCBzZXNzaW9uIGN1cnJlbmN5IG9mIHRoZSBzdG9yZS5cbiAgICovXG4gIGluaXRpYWxpemUoZGVmYXVsdEN1cnJlbmN5OiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5zZXNzaW9uU3RvcmFnZSAmJiAhIXRoaXMuc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVuY3knKSkge1xuICAgICAgdGhpcy5zZXRBY3RpdmUodGhpcy5zZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW5jeScpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRBY3RpdmUoZGVmYXVsdEN1cnJlbmN5KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==
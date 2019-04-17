/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromStore from '../store/index';
import { filter, take, tap } from 'rxjs/operators';
import { WindowRef } from '../../window/window-ref';
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
        return this.store.pipe(select(fromStore.getAllCurrencies), tap(currencies => {
            if (!currencies) {
                this.store.dispatch(new fromStore.LoadCurrencies());
            }
        }), filter(Boolean));
    }
    /**
     * Represents the isocode of the active currency.
     * @return {?}
     */
    getActive() {
        return this.store.pipe(select(fromStore.getActiveCurrency), filter(Boolean));
    }
    /**
     * Sets the active language.
     * @param {?} isocode
     * @return {?}
     */
    setActive(isocode) {
        return this.store
            .pipe(select(fromStore.getActiveCurrency), take(1))
            .subscribe(activeCurrency => {
            if (activeCurrency !== isocode) {
                this.store.dispatch(new fromStore.SetActiveCurrency(isocode));
            }
        });
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
     * @private
     */
    CurrencyService.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVuY3kuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zaXRlLWNvbnRleHQvZmFjYWRlL2N1cnJlbmN5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFJNUMsT0FBTyxLQUFLLFNBQVMsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1QyxPQUFPLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVuRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7QUFPcEQsTUFBTSxPQUFPLGVBQWU7Ozs7O0lBRzFCLFlBQ1UsS0FBNEMsRUFDcEQsTUFBaUI7UUFEVCxVQUFLLEdBQUwsS0FBSyxDQUF1QztRQUdwRCxJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUM7SUFDOUMsQ0FBQzs7Ozs7SUFLRCxNQUFNO1FBQ0osT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUNsQyxHQUFHLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDZixJQUFJLENBQUMsVUFBVSxFQUFFO2dCQUNmLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksU0FBUyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7YUFDckQ7UUFDSCxDQUFDLENBQUMsRUFDRixNQUFNLENBQUMsT0FBTyxDQUFDLENBQ2hCLENBQUM7SUFDSixDQUFDOzs7OztJQUtELFNBQVM7UUFDUCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLEVBQ25DLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FDaEIsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUtELFNBQVMsQ0FBQyxPQUFlO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLEtBQUs7YUFDZCxJQUFJLENBQ0gsTUFBTSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxFQUNuQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQ1I7YUFDQSxTQUFTLENBQUMsY0FBYyxDQUFDLEVBQUU7WUFDMUIsSUFBSSxjQUFjLEtBQUssT0FBTyxFQUFFO2dCQUM5QixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2FBQy9EO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDOzs7Ozs7OztJQU9ELFVBQVUsQ0FBQyxlQUF1QjtRQUNoQyxJQUFJLElBQUksQ0FBQyxjQUFjLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3BFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztTQUN6RDthQUFNO1lBQ0wsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQztTQUNqQztJQUNILENBQUM7OztZQS9ERixVQUFVOzs7O1lBYkYsS0FBSztZQU9MLFNBQVM7Ozs7Ozs7SUFRaEIseUNBQWdDOzs7OztJQUc5QixnQ0FBb0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN0b3JlLCBzZWxlY3QgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0ICogYXMgZnJvbVN0b3JlIGZyb20gJy4uL3N0b3JlL2luZGV4JztcbmltcG9ydCB7IGZpbHRlciwgdGFrZSwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ3VycmVuY3kgfSBmcm9tICcuLi8uLi9vY2Mvb2NjLW1vZGVscyc7XG5pbXBvcnQgeyBXaW5kb3dSZWYgfSBmcm9tICcuLi8uLi93aW5kb3cvd2luZG93LXJlZic7XG5pbXBvcnQgeyBTaXRlQ29udGV4dCB9IGZyb20gJy4vc2l0ZS1jb250ZXh0LmludGVyZmFjZSc7XG5cbi8qKlxuICogRmFjYWRlIHRoYXQgcHJvdmlkZXMgZWFzeSBhY2Nlc3MgdG8gY3VycmVueSBzdGF0ZSwgYWN0aW9ucyBhbmQgc2VsZWN0b3JzLlxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ3VycmVuY3lTZXJ2aWNlIGltcGxlbWVudHMgU2l0ZUNvbnRleHQ8Q3VycmVuY3k+IHtcbiAgcHJpdmF0ZSBzZXNzaW9uU3RvcmFnZTogU3RvcmFnZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHN0b3JlOiBTdG9yZTxmcm9tU3RvcmUuU3RhdGVXaXRoU2l0ZUNvbnRleHQ+LFxuICAgIHdpblJlZjogV2luZG93UmVmXG4gICkge1xuICAgIHRoaXMuc2Vzc2lvblN0b3JhZ2UgPSB3aW5SZWYuc2Vzc2lvblN0b3JhZ2U7XG4gIH1cblxuICAvKipcbiAgICogUmVwcmVzZW50cyBhbGwgdGhlIGN1cnJlbmNpZXMgc3VwcG9ydGVkIGJ5IHRoZSBjdXJyZW50IHN0b3JlLlxuICAgKi9cbiAgZ2V0QWxsKCk6IE9ic2VydmFibGU8Q3VycmVuY3lbXT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZnJvbVN0b3JlLmdldEFsbEN1cnJlbmNpZXMpLFxuICAgICAgdGFwKGN1cnJlbmNpZXMgPT4ge1xuICAgICAgICBpZiAoIWN1cnJlbmNpZXMpIHtcbiAgICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBmcm9tU3RvcmUuTG9hZEN1cnJlbmNpZXMoKSk7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgZmlsdGVyKEJvb2xlYW4pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXByZXNlbnRzIHRoZSBpc29jb2RlIG9mIHRoZSBhY3RpdmUgY3VycmVuY3kuXG4gICAqL1xuICBnZXRBY3RpdmUoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KGZyb21TdG9yZS5nZXRBY3RpdmVDdXJyZW5jeSksXG4gICAgICBmaWx0ZXIoQm9vbGVhbilcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGFjdGl2ZSBsYW5ndWFnZS5cbiAgICovXG4gIHNldEFjdGl2ZShpc29jb2RlOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZVxuICAgICAgLnBpcGUoXG4gICAgICAgIHNlbGVjdChmcm9tU3RvcmUuZ2V0QWN0aXZlQ3VycmVuY3kpLFxuICAgICAgICB0YWtlKDEpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKGFjdGl2ZUN1cnJlbmN5ID0+IHtcbiAgICAgICAgaWYgKGFjdGl2ZUN1cnJlbmN5ICE9PSBpc29jb2RlKSB7XG4gICAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgZnJvbVN0b3JlLlNldEFjdGl2ZUN1cnJlbmN5KGlzb2NvZGUpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbHMgdGhlIGFjdGl2ZSBjdXJyZW5jeS4gVGhlIGFjdGl2ZSBjdXJyZW5jeSBpcyBlaXRoZXIgZ2l2ZW5cbiAgICogYnkgdGhlIGxhc3QgdmlzaXQgKHN0b3JlZCBpbiBzZXNzaW9uIHN0b3JhZ2UpIG9yIGJ5IHRoZVxuICAgKiBkZWZhdWx0IHNlc3Npb24gY3VycmVuY3kgb2YgdGhlIHN0b3JlLlxuICAgKi9cbiAgaW5pdGlhbGl6ZShkZWZhdWx0Q3VycmVuY3k6IHN0cmluZykge1xuICAgIGlmICh0aGlzLnNlc3Npb25TdG9yYWdlICYmICEhdGhpcy5zZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW5jeScpKSB7XG4gICAgICB0aGlzLnNldEFjdGl2ZSh0aGlzLnNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2N1cnJlbmN5JykpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldEFjdGl2ZShkZWZhdWx0Q3VycmVuY3kpO1xuICAgIH1cbiAgfVxufVxuIl19
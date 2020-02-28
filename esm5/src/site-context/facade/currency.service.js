import { __decorate } from "tslib";
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
    CurrencyService.prototype.getAll = function () {
        var _this = this;
        return this.store.pipe(select(SiteContextSelectors.getAllCurrencies), tap(function (currencies) {
            if (!currencies) {
                _this.store.dispatch(new SiteContextActions.LoadCurrencies());
            }
        }), filter(function (currenies) { return Boolean(currenies); }));
    };
    /**
     * Represents the isocode of the active currency.
     */
    CurrencyService.prototype.getActive = function () {
        return this.store.pipe(select(SiteContextSelectors.getActiveCurrency), filter(function (active) { return Boolean(active); }));
    };
    /**
     * Sets the active language.
     */
    CurrencyService.prototype.setActive = function (isocode) {
        var _this = this;
        return this.store
            .pipe(select(SiteContextSelectors.getActiveCurrency), take(1))
            .subscribe(function (activeCurrency) {
            if (activeCurrency !== isocode) {
                _this.store.dispatch(new SiteContextActions.SetActiveCurrency(isocode));
            }
        });
    };
    /**
     * Initials the active currency. The active currency is either given
     * by the last visit (stored in session storage) or by the
     * default session currency of the store.
     */
    CurrencyService.prototype.initialize = function () {
        var sessionCurrency = this.sessionStorage && this.sessionStorage.getItem('currency');
        if (sessionCurrency &&
            getContextParameterValues(this.config, CURRENCY_CONTEXT_ID).includes(sessionCurrency)) {
            this.setActive(sessionCurrency);
        }
        else {
            this.setActive(getContextParameterDefault(this.config, CURRENCY_CONTEXT_ID));
        }
    };
    CurrencyService.ctorParameters = function () { return [
        { type: Store },
        { type: WindowRef },
        { type: SiteContextConfig }
    ]; };
    CurrencyService = __decorate([
        Injectable()
    ], CurrencyService);
    return CurrencyService;
}());
export { CurrencyService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVuY3kuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zaXRlLWNvbnRleHQvZmFjYWRlL2N1cnJlbmN5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFNUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3BELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzVELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBR2hFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2xFLE9BQU8sRUFDTCx5QkFBeUIsRUFDekIsMEJBQTBCLEdBQzNCLE1BQU0sZ0NBQWdDLENBQUM7QUFDeEMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFL0Q7O0dBRUc7QUFFSDtJQUdFLHlCQUNZLEtBQWtDLEVBQzVDLE1BQWlCLEVBQ1AsTUFBeUI7UUFGekIsVUFBSyxHQUFMLEtBQUssQ0FBNkI7UUFFbEMsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7UUFFbkMsSUFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDO0lBQzlDLENBQUM7SUFFRDs7T0FFRztJQUNILGdDQUFNLEdBQU47UUFBQSxpQkFVQztRQVRDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUM3QyxHQUFHLENBQUMsVUFBQSxVQUFVO1lBQ1osSUFBSSxDQUFDLFVBQVUsRUFBRTtnQkFDZixLQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLGtCQUFrQixDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7YUFDOUQ7UUFDSCxDQUFDLENBQUMsRUFDRixNQUFNLENBQUMsVUFBQSxTQUFTLElBQUksT0FBQSxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQWxCLENBQWtCLENBQUMsQ0FDeEMsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNILG1DQUFTLEdBQVQ7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsb0JBQW9CLENBQUMsaUJBQWlCLENBQUMsRUFDOUMsTUFBTSxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFmLENBQWUsQ0FBQyxDQUNsQyxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ0gsbUNBQVMsR0FBVCxVQUFVLE9BQWU7UUFBekIsaUJBVUM7UUFUQyxPQUFPLElBQUksQ0FBQyxLQUFLO2FBQ2QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUM3RCxTQUFTLENBQUMsVUFBQSxjQUFjO1lBQ3ZCLElBQUksY0FBYyxLQUFLLE9BQU8sRUFBRTtnQkFDOUIsS0FBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ2pCLElBQUksa0JBQWtCLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLENBQ2xELENBQUM7YUFDSDtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxvQ0FBVSxHQUFWO1FBQ0UsSUFBTSxlQUFlLEdBQ25CLElBQUksQ0FBQyxjQUFjLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDakUsSUFDRSxlQUFlO1lBQ2YseUJBQXlCLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxtQkFBbUIsQ0FBQyxDQUFDLFFBQVEsQ0FDbEUsZUFBZSxDQUNoQixFQUNEO1lBQ0EsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQztTQUNqQzthQUFNO1lBQ0wsSUFBSSxDQUFDLFNBQVMsQ0FDWiwwQkFBMEIsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLG1CQUFtQixDQUFDLENBQzdELENBQUM7U0FDSDtJQUNILENBQUM7O2dCQW5Fa0IsS0FBSztnQkFDZCxTQUFTO2dCQUNDLGlCQUFpQjs7SUFOMUIsZUFBZTtRQUQzQixVQUFVLEVBQUU7T0FDQSxlQUFlLENBd0UzQjtJQUFELHNCQUFDO0NBQUEsQUF4RUQsSUF3RUM7U0F4RVksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIHRha2UsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEN1cnJlbmN5IH0gZnJvbSAnLi4vLi4vbW9kZWwvbWlzYy5tb2RlbCc7XG5pbXBvcnQgeyBXaW5kb3dSZWYgfSBmcm9tICcuLi8uLi93aW5kb3cvd2luZG93LXJlZic7XG5pbXBvcnQgeyBTaXRlQ29udGV4dEFjdGlvbnMgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IFNpdGVDb250ZXh0U2VsZWN0b3JzIH0gZnJvbSAnLi4vc3RvcmUvc2VsZWN0b3JzL2luZGV4JztcbmltcG9ydCB7IFN0YXRlV2l0aFNpdGVDb250ZXh0IH0gZnJvbSAnLi4vc3RvcmUvc3RhdGUnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHQgfSBmcm9tICcuL3NpdGUtY29udGV4dC5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRDb25maWcgfSBmcm9tICcuLi9jb25maWcvc2l0ZS1jb250ZXh0LWNvbmZpZyc7XG5pbXBvcnQge1xuICBnZXRDb250ZXh0UGFyYW1ldGVyVmFsdWVzLFxuICBnZXRDb250ZXh0UGFyYW1ldGVyRGVmYXVsdCxcbn0gZnJvbSAnLi4vY29uZmlnL2NvbnRleHQtY29uZmlnLXV0aWxzJztcbmltcG9ydCB7IENVUlJFTkNZX0NPTlRFWFRfSUQgfSBmcm9tICcuLi9wcm92aWRlcnMvY29udGV4dC1pZHMnO1xuXG4vKipcbiAqIEZhY2FkZSB0aGF0IHByb3ZpZGVzIGVhc3kgYWNjZXNzIHRvIGN1cnJlbnkgc3RhdGUsIGFjdGlvbnMgYW5kIHNlbGVjdG9ycy5cbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEN1cnJlbmN5U2VydmljZSBpbXBsZW1lbnRzIFNpdGVDb250ZXh0PEN1cnJlbmN5PiB7XG4gIHByaXZhdGUgc2Vzc2lvblN0b3JhZ2U6IFN0b3JhZ2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhTaXRlQ29udGV4dD4sXG4gICAgd2luUmVmOiBXaW5kb3dSZWYsXG4gICAgcHJvdGVjdGVkIGNvbmZpZzogU2l0ZUNvbnRleHRDb25maWdcbiAgKSB7XG4gICAgdGhpcy5zZXNzaW9uU3RvcmFnZSA9IHdpblJlZi5zZXNzaW9uU3RvcmFnZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXByZXNlbnRzIGFsbCB0aGUgY3VycmVuY2llcyBzdXBwb3J0ZWQgYnkgdGhlIGN1cnJlbnQgc3RvcmUuXG4gICAqL1xuICBnZXRBbGwoKTogT2JzZXJ2YWJsZTxDdXJyZW5jeVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChTaXRlQ29udGV4dFNlbGVjdG9ycy5nZXRBbGxDdXJyZW5jaWVzKSxcbiAgICAgIHRhcChjdXJyZW5jaWVzID0+IHtcbiAgICAgICAgaWYgKCFjdXJyZW5jaWVzKSB7XG4gICAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgU2l0ZUNvbnRleHRBY3Rpb25zLkxvYWRDdXJyZW5jaWVzKCkpO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIGZpbHRlcihjdXJyZW5pZXMgPT4gQm9vbGVhbihjdXJyZW5pZXMpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmVwcmVzZW50cyB0aGUgaXNvY29kZSBvZiB0aGUgYWN0aXZlIGN1cnJlbmN5LlxuICAgKi9cbiAgZ2V0QWN0aXZlKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChTaXRlQ29udGV4dFNlbGVjdG9ycy5nZXRBY3RpdmVDdXJyZW5jeSksXG4gICAgICBmaWx0ZXIoYWN0aXZlID0+IEJvb2xlYW4oYWN0aXZlKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGFjdGl2ZSBsYW5ndWFnZS5cbiAgICovXG4gIHNldEFjdGl2ZShpc29jb2RlOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZVxuICAgICAgLnBpcGUoc2VsZWN0KFNpdGVDb250ZXh0U2VsZWN0b3JzLmdldEFjdGl2ZUN1cnJlbmN5KSwgdGFrZSgxKSlcbiAgICAgIC5zdWJzY3JpYmUoYWN0aXZlQ3VycmVuY3kgPT4ge1xuICAgICAgICBpZiAoYWN0aXZlQ3VycmVuY3kgIT09IGlzb2NvZGUpIHtcbiAgICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgICAgICAgbmV3IFNpdGVDb250ZXh0QWN0aW9ucy5TZXRBY3RpdmVDdXJyZW5jeShpc29jb2RlKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxzIHRoZSBhY3RpdmUgY3VycmVuY3kuIFRoZSBhY3RpdmUgY3VycmVuY3kgaXMgZWl0aGVyIGdpdmVuXG4gICAqIGJ5IHRoZSBsYXN0IHZpc2l0IChzdG9yZWQgaW4gc2Vzc2lvbiBzdG9yYWdlKSBvciBieSB0aGVcbiAgICogZGVmYXVsdCBzZXNzaW9uIGN1cnJlbmN5IG9mIHRoZSBzdG9yZS5cbiAgICovXG4gIGluaXRpYWxpemUoKSB7XG4gICAgY29uc3Qgc2Vzc2lvbkN1cnJlbmN5ID1cbiAgICAgIHRoaXMuc2Vzc2lvblN0b3JhZ2UgJiYgdGhpcy5zZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW5jeScpO1xuICAgIGlmIChcbiAgICAgIHNlc3Npb25DdXJyZW5jeSAmJlxuICAgICAgZ2V0Q29udGV4dFBhcmFtZXRlclZhbHVlcyh0aGlzLmNvbmZpZywgQ1VSUkVOQ1lfQ09OVEVYVF9JRCkuaW5jbHVkZXMoXG4gICAgICAgIHNlc3Npb25DdXJyZW5jeVxuICAgICAgKVxuICAgICkge1xuICAgICAgdGhpcy5zZXRBY3RpdmUoc2Vzc2lvbkN1cnJlbmN5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRBY3RpdmUoXG4gICAgICAgIGdldENvbnRleHRQYXJhbWV0ZXJEZWZhdWx0KHRoaXMuY29uZmlnLCBDVVJSRU5DWV9DT05URVhUX0lEKVxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==
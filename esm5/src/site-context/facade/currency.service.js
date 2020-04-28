import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { filter, take, tap } from 'rxjs/operators';
import { WindowRef } from '../../window/window-ref';
import { getContextParameterDefault, getContextParameterValues, } from '../config/context-config-utils';
import { SiteContextConfig } from '../config/site-context-config';
import { CURRENCY_CONTEXT_ID } from '../providers/context-ids';
import { SiteContextActions } from '../store/actions/index';
import { SiteContextSelectors } from '../store/selectors/index';
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
        var value;
        this.getActive()
            .subscribe(function (val) { return (value = val); })
            .unsubscribe();
        if (value) {
            // don't initialize, if there is already a value (i.e. retrieved from route or transferred from SSR)
            return;
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVuY3kuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zaXRlLWNvbnRleHQvZmFjYWRlL2N1cnJlbmN5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFNUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3BELE9BQU8sRUFDTCwwQkFBMEIsRUFDMUIseUJBQXlCLEdBQzFCLE1BQU0sZ0NBQWdDLENBQUM7QUFDeEMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDbEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDNUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFJaEU7O0dBRUc7QUFFSDtJQUdFLHlCQUNZLEtBQWtDLEVBQzVDLE1BQWlCLEVBQ1AsTUFBeUI7UUFGekIsVUFBSyxHQUFMLEtBQUssQ0FBNkI7UUFFbEMsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7UUFFbkMsSUFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDO0lBQzlDLENBQUM7SUFFRDs7T0FFRztJQUNILGdDQUFNLEdBQU47UUFBQSxpQkFVQztRQVRDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUM3QyxHQUFHLENBQUMsVUFBQyxVQUFVO1lBQ2IsSUFBSSxDQUFDLFVBQVUsRUFBRTtnQkFDZixLQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLGtCQUFrQixDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7YUFDOUQ7UUFDSCxDQUFDLENBQUMsRUFDRixNQUFNLENBQUMsVUFBQyxTQUFTLElBQUssT0FBQSxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQWxCLENBQWtCLENBQUMsQ0FDMUMsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNILG1DQUFTLEdBQVQ7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsb0JBQW9CLENBQUMsaUJBQWlCLENBQUMsRUFDOUMsTUFBTSxDQUFDLFVBQUMsTUFBTSxJQUFLLE9BQUEsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFmLENBQWUsQ0FBQyxDQUNwQyxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ0gsbUNBQVMsR0FBVCxVQUFVLE9BQWU7UUFBekIsaUJBVUM7UUFUQyxPQUFPLElBQUksQ0FBQyxLQUFLO2FBQ2QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUM3RCxTQUFTLENBQUMsVUFBQyxjQUFjO1lBQ3hCLElBQUksY0FBYyxLQUFLLE9BQU8sRUFBRTtnQkFDOUIsS0FBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ2pCLElBQUksa0JBQWtCLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLENBQ2xELENBQUM7YUFDSDtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxvQ0FBVSxHQUFWO1FBQ0UsSUFBSSxLQUFLLENBQUM7UUFDVixJQUFJLENBQUMsU0FBUyxFQUFFO2FBQ2IsU0FBUyxDQUFDLFVBQUMsR0FBRyxJQUFLLE9BQUEsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLEVBQWIsQ0FBYSxDQUFDO2FBQ2pDLFdBQVcsRUFBRSxDQUFDO1FBQ2pCLElBQUksS0FBSyxFQUFFO1lBQ1Qsb0dBQW9HO1lBQ3BHLE9BQU87U0FDUjtRQUVELElBQU0sZUFBZSxHQUNuQixJQUFJLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2pFLElBQ0UsZUFBZTtZQUNmLHlCQUF5QixDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsbUJBQW1CLENBQUMsQ0FBQyxRQUFRLENBQ2xFLGVBQWUsQ0FDaEIsRUFDRDtZQUNBLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDakM7YUFBTTtZQUNMLElBQUksQ0FBQyxTQUFTLENBQ1osMEJBQTBCLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxtQkFBbUIsQ0FBQyxDQUM3RCxDQUFDO1NBQ0g7SUFDSCxDQUFDOztnQkE1RWtCLEtBQUs7Z0JBQ2QsU0FBUztnQkFDQyxpQkFBaUI7O0lBTjFCLGVBQWU7UUFEM0IsVUFBVSxFQUFFO09BQ0EsZUFBZSxDQWlGM0I7SUFBRCxzQkFBQztDQUFBLEFBakZELElBaUZDO1NBakZZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCB0YWtlLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDdXJyZW5jeSB9IGZyb20gJy4uLy4uL21vZGVsL21pc2MubW9kZWwnO1xuaW1wb3J0IHsgV2luZG93UmVmIH0gZnJvbSAnLi4vLi4vd2luZG93L3dpbmRvdy1yZWYnO1xuaW1wb3J0IHtcbiAgZ2V0Q29udGV4dFBhcmFtZXRlckRlZmF1bHQsXG4gIGdldENvbnRleHRQYXJhbWV0ZXJWYWx1ZXMsXG59IGZyb20gJy4uL2NvbmZpZy9jb250ZXh0LWNvbmZpZy11dGlscyc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9zaXRlLWNvbnRleHQtY29uZmlnJztcbmltcG9ydCB7IENVUlJFTkNZX0NPTlRFWFRfSUQgfSBmcm9tICcuLi9wcm92aWRlcnMvY29udGV4dC1pZHMnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRBY3Rpb25zIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dFNlbGVjdG9ycyB9IGZyb20gJy4uL3N0b3JlL3NlbGVjdG9ycy9pbmRleCc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhTaXRlQ29udGV4dCB9IGZyb20gJy4uL3N0b3JlL3N0YXRlJztcbmltcG9ydCB7IFNpdGVDb250ZXh0IH0gZnJvbSAnLi9zaXRlLWNvbnRleHQuaW50ZXJmYWNlJztcblxuLyoqXG4gKiBGYWNhZGUgdGhhdCBwcm92aWRlcyBlYXN5IGFjY2VzcyB0byBjdXJyZW55IHN0YXRlLCBhY3Rpb25zIGFuZCBzZWxlY3RvcnMuXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDdXJyZW5jeVNlcnZpY2UgaW1wbGVtZW50cyBTaXRlQ29udGV4dDxDdXJyZW5jeT4ge1xuICBwcml2YXRlIHNlc3Npb25TdG9yYWdlOiBTdG9yYWdlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoU2l0ZUNvbnRleHQ+LFxuICAgIHdpblJlZjogV2luZG93UmVmLFxuICAgIHByb3RlY3RlZCBjb25maWc6IFNpdGVDb250ZXh0Q29uZmlnXG4gICkge1xuICAgIHRoaXMuc2Vzc2lvblN0b3JhZ2UgPSB3aW5SZWYuc2Vzc2lvblN0b3JhZ2U7XG4gIH1cblxuICAvKipcbiAgICogUmVwcmVzZW50cyBhbGwgdGhlIGN1cnJlbmNpZXMgc3VwcG9ydGVkIGJ5IHRoZSBjdXJyZW50IHN0b3JlLlxuICAgKi9cbiAgZ2V0QWxsKCk6IE9ic2VydmFibGU8Q3VycmVuY3lbXT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoU2l0ZUNvbnRleHRTZWxlY3RvcnMuZ2V0QWxsQ3VycmVuY2llcyksXG4gICAgICB0YXAoKGN1cnJlbmNpZXMpID0+IHtcbiAgICAgICAgaWYgKCFjdXJyZW5jaWVzKSB7XG4gICAgICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgU2l0ZUNvbnRleHRBY3Rpb25zLkxvYWRDdXJyZW5jaWVzKCkpO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIGZpbHRlcigoY3VycmVuaWVzKSA9PiBCb29sZWFuKGN1cnJlbmllcykpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXByZXNlbnRzIHRoZSBpc29jb2RlIG9mIHRoZSBhY3RpdmUgY3VycmVuY3kuXG4gICAqL1xuICBnZXRBY3RpdmUoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KFNpdGVDb250ZXh0U2VsZWN0b3JzLmdldEFjdGl2ZUN1cnJlbmN5KSxcbiAgICAgIGZpbHRlcigoYWN0aXZlKSA9PiBCb29sZWFuKGFjdGl2ZSkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBhY3RpdmUgbGFuZ3VhZ2UuXG4gICAqL1xuICBzZXRBY3RpdmUoaXNvY29kZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmVcbiAgICAgIC5waXBlKHNlbGVjdChTaXRlQ29udGV4dFNlbGVjdG9ycy5nZXRBY3RpdmVDdXJyZW5jeSksIHRha2UoMSkpXG4gICAgICAuc3Vic2NyaWJlKChhY3RpdmVDdXJyZW5jeSkgPT4ge1xuICAgICAgICBpZiAoYWN0aXZlQ3VycmVuY3kgIT09IGlzb2NvZGUpIHtcbiAgICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgICAgICAgbmV3IFNpdGVDb250ZXh0QWN0aW9ucy5TZXRBY3RpdmVDdXJyZW5jeShpc29jb2RlKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxzIHRoZSBhY3RpdmUgY3VycmVuY3kuIFRoZSBhY3RpdmUgY3VycmVuY3kgaXMgZWl0aGVyIGdpdmVuXG4gICAqIGJ5IHRoZSBsYXN0IHZpc2l0IChzdG9yZWQgaW4gc2Vzc2lvbiBzdG9yYWdlKSBvciBieSB0aGVcbiAgICogZGVmYXVsdCBzZXNzaW9uIGN1cnJlbmN5IG9mIHRoZSBzdG9yZS5cbiAgICovXG4gIGluaXRpYWxpemUoKSB7XG4gICAgbGV0IHZhbHVlO1xuICAgIHRoaXMuZ2V0QWN0aXZlKClcbiAgICAgIC5zdWJzY3JpYmUoKHZhbCkgPT4gKHZhbHVlID0gdmFsKSlcbiAgICAgIC51bnN1YnNjcmliZSgpO1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgLy8gZG9uJ3QgaW5pdGlhbGl6ZSwgaWYgdGhlcmUgaXMgYWxyZWFkeSBhIHZhbHVlIChpLmUuIHJldHJpZXZlZCBmcm9tIHJvdXRlIG9yIHRyYW5zZmVycmVkIGZyb20gU1NSKVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHNlc3Npb25DdXJyZW5jeSA9XG4gICAgICB0aGlzLnNlc3Npb25TdG9yYWdlICYmIHRoaXMuc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVuY3knKTtcbiAgICBpZiAoXG4gICAgICBzZXNzaW9uQ3VycmVuY3kgJiZcbiAgICAgIGdldENvbnRleHRQYXJhbWV0ZXJWYWx1ZXModGhpcy5jb25maWcsIENVUlJFTkNZX0NPTlRFWFRfSUQpLmluY2x1ZGVzKFxuICAgICAgICBzZXNzaW9uQ3VycmVuY3lcbiAgICAgIClcbiAgICApIHtcbiAgICAgIHRoaXMuc2V0QWN0aXZlKHNlc3Npb25DdXJyZW5jeSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0QWN0aXZlKFxuICAgICAgICBnZXRDb250ZXh0UGFyYW1ldGVyRGVmYXVsdCh0aGlzLmNvbmZpZywgQ1VSUkVOQ1lfQ09OVEVYVF9JRClcbiAgICAgICk7XG4gICAgfVxuICB9XG59XG4iXX0=
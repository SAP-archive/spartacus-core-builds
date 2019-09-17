/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { OCC_USER_ID_CURRENT } from '../../occ/utils/occ-constants';
import { UserActions } from '../store/actions/index';
import { UsersSelectors } from '../store/selectors/index';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
export class UserAddressService {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
    }
    /**
     * Retrieves user's addresses
     * @return {?}
     */
    loadAddresses() {
        this.store.dispatch(new UserActions.LoadUserAddresses(OCC_USER_ID_CURRENT));
    }
    /**
     * Adds user address
     * @param {?} address a user address
     * @return {?}
     */
    addUserAddress(address) {
        this.store.dispatch(new UserActions.AddUserAddress({
            userId: OCC_USER_ID_CURRENT,
            address: address,
        }));
    }
    /**
     * Sets user address as default
     * @param {?} addressId a user address ID
     * @return {?}
     */
    setAddressAsDefault(addressId) {
        this.store.dispatch(new UserActions.UpdateUserAddress({
            userId: OCC_USER_ID_CURRENT,
            addressId: addressId,
            address: { defaultAddress: true },
        }));
    }
    /**
     * Updates existing user address
     * @param {?} addressId a user address ID
     * @param {?} address a user address
     * @return {?}
     */
    updateUserAddress(addressId, address) {
        this.store.dispatch(new UserActions.UpdateUserAddress({
            userId: OCC_USER_ID_CURRENT,
            addressId: addressId,
            address: address,
        }));
    }
    /**
     * Deletes existing user address
     * @param {?} addressId a user address ID
     * @return {?}
     */
    deleteUserAddress(addressId) {
        this.store.dispatch(new UserActions.DeleteUserAddress({
            userId: OCC_USER_ID_CURRENT,
            addressId: addressId,
        }));
    }
    /**
     * Returns addresses
     * @return {?}
     */
    getAddresses() {
        return this.store.pipe(select(UsersSelectors.getAddresses));
    }
    /**
     * Returns a loading flag for addresses
     * @return {?}
     */
    getAddressesLoading() {
        return this.store.pipe(select(UsersSelectors.getAddressesLoading));
    }
    /**
     * @return {?}
     */
    getAddressesLoadedSuccess() {
        return this.store.pipe(select(UsersSelectors.getAddressesLoadedSuccess));
    }
    /**
     * Retrieves delivery countries
     * @return {?}
     */
    loadDeliveryCountries() {
        this.store.dispatch(new UserActions.LoadDeliveryCountries());
    }
    /**
     * Returns all delivery countries
     * @return {?}
     */
    getDeliveryCountries() {
        return this.store.pipe(select(UsersSelectors.getAllDeliveryCountries));
    }
    /**
     * Returns a country based on the provided `isocode`
     * @param {?} isocode an isocode for a country
     * @return {?}
     */
    getCountry(isocode) {
        return this.store.pipe(select(UsersSelectors.countrySelectorFactory(isocode)));
    }
    /**
     * Retrieves regions for specified country by `countryIsoCode`
     * @param {?} countryIsoCode
     * @return {?}
     */
    loadRegions(countryIsoCode) {
        this.store.dispatch(new UserActions.LoadRegions(countryIsoCode));
    }
    /**
     * Clear regions in store - useful when changing country
     * @return {?}
     */
    clearRegions() {
        this.store.dispatch(new UserActions.ClearRegions());
    }
    /**
     * Returns all regions
     * @param {?} countryIsoCode
     * @return {?}
     */
    getRegions(countryIsoCode) {
        return this.store.pipe(select(UsersSelectors.getRegionsDataAndLoading), map((/**
         * @param {?} __0
         * @return {?}
         */
        ({ regions, country, loading, loaded }) => {
            if (!countryIsoCode && (loading || loaded)) {
                this.clearRegions();
                return [];
            }
            else if (loading && !loaded) {
                // don't interrupt loading
                return [];
            }
            else if (!loading && countryIsoCode !== country && countryIsoCode) {
                // country changed - clear store and load new regions
                if (country) {
                    this.clearRegions();
                }
                this.loadRegions(countryIsoCode);
                return [];
            }
            return regions;
        })));
    }
}
UserAddressService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
UserAddressService.ctorParameters = () => [
    { type: Store }
];
/** @nocollapse */ UserAddressService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function UserAddressService_Factory() { return new UserAddressService(i0.ɵɵinject(i1.Store)); }, token: UserAddressService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @protected
     */
    UserAddressService.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1hZGRyZXNzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9mYWNhZGUvdXNlci1hZGRyZXNzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFNUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRXBFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7OztBQU0xRCxNQUFNLE9BQU8sa0JBQWtCOzs7O0lBQzdCLFlBQXNCLEtBQW9EO1FBQXBELFVBQUssR0FBTCxLQUFLLENBQStDO0lBQUcsQ0FBQzs7Ozs7SUFLOUUsYUFBYTtRQUNYLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksV0FBVyxDQUFDLGlCQUFpQixDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztJQUM5RSxDQUFDOzs7Ozs7SUFNRCxjQUFjLENBQUMsT0FBZ0I7UUFDN0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ2pCLElBQUksV0FBVyxDQUFDLGNBQWMsQ0FBQztZQUM3QixNQUFNLEVBQUUsbUJBQW1CO1lBQzNCLE9BQU8sRUFBRSxPQUFPO1NBQ2pCLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBTUQsbUJBQW1CLENBQUMsU0FBaUI7UUFDbkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ2pCLElBQUksV0FBVyxDQUFDLGlCQUFpQixDQUFDO1lBQ2hDLE1BQU0sRUFBRSxtQkFBbUI7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RUFBRTtvQkFDWCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7aUJBQ3JCO2dCQUNELElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLENBQUM7Z0JBQ2pDLE9BQU8sRUFBRSxDQUFDO2FBQ1g7WUFDRCxPQUFPLE9BQU8sQ0FBQztRQUNqQixDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7O1lBcEpGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQVpnQixLQUFLOzs7Ozs7OztJQWNSLG1DQUE4RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBZGRyZXNzLCBDb3VudHJ5LCBSZWdpb24gfSBmcm9tICcuLi8uLi9tb2RlbC9hZGRyZXNzLm1vZGVsJztcbmltcG9ydCB7IE9DQ19VU0VSX0lEX0NVUlJFTlQgfSBmcm9tICcuLi8uLi9vY2MvdXRpbHMvb2NjLWNvbnN0YW50cyc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhQcm9jZXNzIH0gZnJvbSAnLi4vLi4vcHJvY2Vzcy9zdG9yZS9wcm9jZXNzLXN0YXRlJztcbmltcG9ydCB7IFVzZXJBY3Rpb25zIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBVc2Vyc1NlbGVjdG9ycyB9IGZyb20gJy4uL3N0b3JlL3NlbGVjdG9ycy9pbmRleCc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhVc2VyIH0gZnJvbSAnLi4vc3RvcmUvdXNlci1zdGF0ZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBVc2VyQWRkcmVzc1NlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aFVzZXIgfCBTdGF0ZVdpdGhQcm9jZXNzPHZvaWQ+Pikge31cblxuICAvKipcbiAgICogUmV0cmlldmVzIHVzZXIncyBhZGRyZXNzZXNcbiAgICovXG4gIGxvYWRBZGRyZXNzZXMoKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVXNlckFjdGlvbnMuTG9hZFVzZXJBZGRyZXNzZXMoT0NDX1VTRVJfSURfQ1VSUkVOVCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgdXNlciBhZGRyZXNzXG4gICAqIEBwYXJhbSBhZGRyZXNzIGEgdXNlciBhZGRyZXNzXG4gICAqL1xuICBhZGRVc2VyQWRkcmVzcyhhZGRyZXNzOiBBZGRyZXNzKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBVc2VyQWN0aW9ucy5BZGRVc2VyQWRkcmVzcyh7XG4gICAgICAgIHVzZXJJZDogT0NDX1VTRVJfSURfQ1VSUkVOVCxcbiAgICAgICAgYWRkcmVzczogYWRkcmVzcyxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHVzZXIgYWRkcmVzcyBhcyBkZWZhdWx0XG4gICAqIEBwYXJhbSBhZGRyZXNzSWQgYSB1c2VyIGFkZHJlc3MgSURcbiAgICovXG4gIHNldEFkZHJlc3NBc0RlZmF1bHQoYWRkcmVzc0lkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IFVzZXJBY3Rpb25zLlVwZGF0ZVVzZXJBZGRyZXNzKHtcbiAgICAgICAgdXNlcklkOiBPQ0NfVVNFUl9JRF9DVVJSRU5ULFxuICAgICAgICBhZGRyZXNzSWQ6IGFkZHJlc3NJZCxcbiAgICAgICAgYWRkcmVzczogeyBkZWZhdWx0QWRkcmVzczogdHJ1ZSB9LFxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgZXhpc3RpbmcgdXNlciBhZGRyZXNzXG4gICAqIEBwYXJhbSBhZGRyZXNzSWQgYSB1c2VyIGFkZHJlc3MgSURcbiAgICogQHBhcmFtIGFkZHJlc3MgYSB1c2VyIGFkZHJlc3NcbiAgICovXG4gIHVwZGF0ZVVzZXJBZGRyZXNzKGFkZHJlc3NJZDogc3RyaW5nLCBhZGRyZXNzOiBBZGRyZXNzKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBVc2VyQWN0aW9ucy5VcGRhdGVVc2VyQWRkcmVzcyh7XG4gICAgICAgIHVzZXJJZDogT0NDX1VTRVJfSURfQ1VSUkVOVCxcbiAgICAgICAgYWRkcmVzc0lkOiBhZGRyZXNzSWQsXG4gICAgICAgIGFkZHJlc3M6IGFkZHJlc3MsXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlcyBleGlzdGluZyB1c2VyIGFkZHJlc3NcbiAgICogQHBhcmFtIGFkZHJlc3NJZCBhIHVzZXIgYWRkcmVzcyBJRFxuICAgKi9cbiAgZGVsZXRlVXNlckFkZHJlc3MoYWRkcmVzc0lkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IFVzZXJBY3Rpb25zLkRlbGV0ZVVzZXJBZGRyZXNzKHtcbiAgICAgICAgdXNlcklkOiBPQ0NfVVNFUl9JRF9DVVJSRU5ULFxuICAgICAgICBhZGRyZXNzSWQ6IGFkZHJlc3NJZCxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFkZHJlc3Nlc1xuICAgKi9cbiAgZ2V0QWRkcmVzc2VzKCk6IE9ic2VydmFibGU8QWRkcmVzc1tdPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoVXNlcnNTZWxlY3RvcnMuZ2V0QWRkcmVzc2VzKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGxvYWRpbmcgZmxhZyBmb3IgYWRkcmVzc2VzXG4gICAqL1xuICBnZXRBZGRyZXNzZXNMb2FkaW5nKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KFVzZXJzU2VsZWN0b3JzLmdldEFkZHJlc3Nlc0xvYWRpbmcpKTtcbiAgfVxuXG4gIGdldEFkZHJlc3Nlc0xvYWRlZFN1Y2Nlc3MoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoVXNlcnNTZWxlY3RvcnMuZ2V0QWRkcmVzc2VzTG9hZGVkU3VjY2VzcykpO1xuICB9XG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgZGVsaXZlcnkgY291bnRyaWVzXG4gICAqL1xuICBsb2FkRGVsaXZlcnlDb3VudHJpZXMoKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVXNlckFjdGlvbnMuTG9hZERlbGl2ZXJ5Q291bnRyaWVzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYWxsIGRlbGl2ZXJ5IGNvdW50cmllc1xuICAgKi9cbiAgZ2V0RGVsaXZlcnlDb3VudHJpZXMoKTogT2JzZXJ2YWJsZTxDb3VudHJ5W10+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChVc2Vyc1NlbGVjdG9ycy5nZXRBbGxEZWxpdmVyeUNvdW50cmllcykpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBjb3VudHJ5IGJhc2VkIG9uIHRoZSBwcm92aWRlZCBgaXNvY29kZWBcbiAgICogQHBhcmFtIGlzb2NvZGUgYW4gaXNvY29kZSBmb3IgYSBjb3VudHJ5XG4gICAqL1xuICBnZXRDb3VudHJ5KGlzb2NvZGU6IHN0cmluZyk6IE9ic2VydmFibGU8Q291bnRyeT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoVXNlcnNTZWxlY3RvcnMuY291bnRyeVNlbGVjdG9yRmFjdG9yeShpc29jb2RlKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlcyByZWdpb25zIGZvciBzcGVjaWZpZWQgY291bnRyeSBieSBgY291bnRyeUlzb0NvZGVgXG4gICAqIEBwYXJhbSBjb3VudHJ5SXNvQ29kZVxuICAgKi9cbiAgbG9hZFJlZ2lvbnMoY291bnRyeUlzb0NvZGU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFVzZXJBY3Rpb25zLkxvYWRSZWdpb25zKGNvdW50cnlJc29Db2RlKSk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgcmVnaW9ucyBpbiBzdG9yZSAtIHVzZWZ1bCB3aGVuIGNoYW5naW5nIGNvdW50cnlcbiAgICovXG4gIGNsZWFyUmVnaW9ucygpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBVc2VyQWN0aW9ucy5DbGVhclJlZ2lvbnMoKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbGwgcmVnaW9uc1xuICAgKi9cbiAgZ2V0UmVnaW9ucyhjb3VudHJ5SXNvQ29kZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxSZWdpb25bXT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoVXNlcnNTZWxlY3RvcnMuZ2V0UmVnaW9uc0RhdGFBbmRMb2FkaW5nKSxcbiAgICAgIG1hcCgoeyByZWdpb25zLCBjb3VudHJ5LCBsb2FkaW5nLCBsb2FkZWQgfSkgPT4ge1xuICAgICAgICBpZiAoIWNvdW50cnlJc29Db2RlICYmIChsb2FkaW5nIHx8IGxvYWRlZCkpIHtcbiAgICAgICAgICB0aGlzLmNsZWFyUmVnaW9ucygpO1xuICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfSBlbHNlIGlmIChsb2FkaW5nICYmICFsb2FkZWQpIHtcbiAgICAgICAgICAvLyBkb24ndCBpbnRlcnJ1cHQgbG9hZGluZ1xuICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfSBlbHNlIGlmICghbG9hZGluZyAmJiBjb3VudHJ5SXNvQ29kZSAhPT0gY291bnRyeSAmJiBjb3VudHJ5SXNvQ29kZSkge1xuICAgICAgICAgIC8vIGNvdW50cnkgY2hhbmdlZCAtIGNsZWFyIHN0b3JlIGFuZCBsb2FkIG5ldyByZWdpb25zXG4gICAgICAgICAgaWYgKGNvdW50cnkpIHtcbiAgICAgICAgICAgIHRoaXMuY2xlYXJSZWdpb25zKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMubG9hZFJlZ2lvbnMoY291bnRyeUlzb0NvZGUpO1xuICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVnaW9ucztcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxufVxuIl19
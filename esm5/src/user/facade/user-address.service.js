/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { USERID_CURRENT } from '../../occ/utils/occ-constants';
import { UserActions } from '../store/actions/index';
import { UsersSelectors } from '../store/selectors/index';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
var UserAddressService = /** @class */ (function () {
    function UserAddressService(store) {
        this.store = store;
    }
    /**
     * Retrieves user's addresses
     */
    /**
     * Retrieves user's addresses
     * @return {?}
     */
    UserAddressService.prototype.loadAddresses = /**
     * Retrieves user's addresses
     * @return {?}
     */
    function () {
        this.store.dispatch(new UserActions.LoadUserAddresses(USERID_CURRENT));
    };
    /**
     * Adds user address
     * @param address a user address
     */
    /**
     * Adds user address
     * @param {?} address a user address
     * @return {?}
     */
    UserAddressService.prototype.addUserAddress = /**
     * Adds user address
     * @param {?} address a user address
     * @return {?}
     */
    function (address) {
        this.store.dispatch(new UserActions.AddUserAddress({
            userId: USERID_CURRENT,
            address: address,
        }));
    };
    /**
     * Sets user address as default
     * @param addressId a user address ID
     */
    /**
     * Sets user address as default
     * @param {?} addressId a user address ID
     * @return {?}
     */
    UserAddressService.prototype.setAddressAsDefault = /**
     * Sets user address as default
     * @param {?} addressId a user address ID
     * @return {?}
     */
    function (addressId) {
        this.store.dispatch(new UserActions.UpdateUserAddress({
            userId: USERID_CURRENT,
            addressId: addressId,
            address: { defaultAddress: true },
        }));
    };
    /**
     * Updates existing user address
     * @param addressId a user address ID
     * @param address a user address
     */
    /**
     * Updates existing user address
     * @param {?} addressId a user address ID
     * @param {?} address a user address
     * @return {?}
     */
    UserAddressService.prototype.updateUserAddress = /**
     * Updates existing user address
     * @param {?} addressId a user address ID
     * @param {?} address a user address
     * @return {?}
     */
    function (addressId, address) {
        this.store.dispatch(new UserActions.UpdateUserAddress({
            userId: USERID_CURRENT,
            addressId: addressId,
            address: address,
        }));
    };
    /**
     * Deletes existing user address
     * @param addressId a user address ID
     */
    /**
     * Deletes existing user address
     * @param {?} addressId a user address ID
     * @return {?}
     */
    UserAddressService.prototype.deleteUserAddress = /**
     * Deletes existing user address
     * @param {?} addressId a user address ID
     * @return {?}
     */
    function (addressId) {
        this.store.dispatch(new UserActions.DeleteUserAddress({
            userId: USERID_CURRENT,
            addressId: addressId,
        }));
    };
    /**
     * Returns addresses
     */
    /**
     * Returns addresses
     * @return {?}
     */
    UserAddressService.prototype.getAddresses = /**
     * Returns addresses
     * @return {?}
     */
    function () {
        return this.store.pipe(select(UsersSelectors.getAddresses));
    };
    /**
     * Returns a loading flag for addresses
     */
    /**
     * Returns a loading flag for addresses
     * @return {?}
     */
    UserAddressService.prototype.getAddressesLoading = /**
     * Returns a loading flag for addresses
     * @return {?}
     */
    function () {
        return this.store.pipe(select(UsersSelectors.getAddressesLoading));
    };
    /**
     * @return {?}
     */
    UserAddressService.prototype.getAddressesLoadedSuccess = /**
     * @return {?}
     */
    function () {
        return this.store.pipe(select(UsersSelectors.getAddressesLoadedSuccess));
    };
    /**
     * Retrieves delivery countries
     */
    /**
     * Retrieves delivery countries
     * @return {?}
     */
    UserAddressService.prototype.loadDeliveryCountries = /**
     * Retrieves delivery countries
     * @return {?}
     */
    function () {
        this.store.dispatch(new UserActions.LoadDeliveryCountries());
    };
    /**
     * Returns all delivery countries
     */
    /**
     * Returns all delivery countries
     * @return {?}
     */
    UserAddressService.prototype.getDeliveryCountries = /**
     * Returns all delivery countries
     * @return {?}
     */
    function () {
        return this.store.pipe(select(UsersSelectors.getAllDeliveryCountries));
    };
    /**
     * Returns a country based on the provided `isocode`
     * @param isocode an isocode for a country
     */
    /**
     * Returns a country based on the provided `isocode`
     * @param {?} isocode an isocode for a country
     * @return {?}
     */
    UserAddressService.prototype.getCountry = /**
     * Returns a country based on the provided `isocode`
     * @param {?} isocode an isocode for a country
     * @return {?}
     */
    function (isocode) {
        return this.store.pipe(select(UsersSelectors.countrySelectorFactory(isocode)));
    };
    /**
     * Retrieves regions for specified country by `countryIsoCode`
     * @param countryIsoCode
     */
    /**
     * Retrieves regions for specified country by `countryIsoCode`
     * @param {?} countryIsoCode
     * @return {?}
     */
    UserAddressService.prototype.loadRegions = /**
     * Retrieves regions for specified country by `countryIsoCode`
     * @param {?} countryIsoCode
     * @return {?}
     */
    function (countryIsoCode) {
        this.store.dispatch(new UserActions.LoadRegions(countryIsoCode));
    };
    /**
     * Clear regions in store - useful when changing country
     */
    /**
     * Clear regions in store - useful when changing country
     * @return {?}
     */
    UserAddressService.prototype.clearRegions = /**
     * Clear regions in store - useful when changing country
     * @return {?}
     */
    function () {
        this.store.dispatch(new UserActions.ClearRegions());
    };
    /**
     * Returns all regions
     */
    /**
     * Returns all regions
     * @param {?} countryIsoCode
     * @return {?}
     */
    UserAddressService.prototype.getRegions = /**
     * Returns all regions
     * @param {?} countryIsoCode
     * @return {?}
     */
    function (countryIsoCode) {
        var _this = this;
        return this.store.pipe(select(UsersSelectors.getRegionsDataAndLoading), map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var regions = _a.regions, country = _a.country, loading = _a.loading, loaded = _a.loaded;
            if (!countryIsoCode && (loading || loaded)) {
                _this.clearRegions();
                return [];
            }
            else if (loading && !loaded) {
                // don't interrupt loading
                return [];
            }
            else if (!loading && countryIsoCode !== country && countryIsoCode) {
                // country changed - clear store and load new regions
                if (country) {
                    _this.clearRegions();
                }
                _this.loadRegions(countryIsoCode);
                return [];
            }
            return regions;
        })));
    };
    UserAddressService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    UserAddressService.ctorParameters = function () { return [
        { type: Store }
    ]; };
    /** @nocollapse */ UserAddressService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function UserAddressService_Factory() { return new UserAddressService(i0.ɵɵinject(i1.Store)); }, token: UserAddressService, providedIn: "root" });
    return UserAddressService;
}());
export { UserAddressService };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    UserAddressService.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1hZGRyZXNzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9mYWNhZGUvdXNlci1hZGRyZXNzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFNUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUUvRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7QUFHMUQ7SUFJRSw0QkFBc0IsS0FBb0Q7UUFBcEQsVUFBSyxHQUFMLEtBQUssQ0FBK0M7SUFBRyxDQUFDO0lBRTlFOztPQUVHOzs7OztJQUNILDBDQUFhOzs7O0lBQWI7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFFRDs7O09BR0c7Ozs7OztJQUNILDJDQUFjOzs7OztJQUFkLFVBQWUsT0FBZ0I7UUFDN0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ2pCLElBQUksV0FBVyxDQUFDLGNBQWMsQ0FBQztZQUM3QixNQUFNLEVBQUUsY0FBYztZQUN0QixPQUFPLEVBQUUsT0FBTztTQUNqQixDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFFRDs7O09BR0c7Ozs7OztJQUNILGdEQUFtQjs7Ozs7SUFBbkIsVUFBb0IsU0FBaUI7UUFDbkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ2pCLElBQUksV0FBVyxDQUFDLGlCQUFpQixDQUFDO1lBQ2hDLE1BQU0sRUFBRSxjQUFjO1lBQ3RCLFNBQVMsRUFBRSxTQUFTO1lBQ3BCLE9BQU8sRUFBRSxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUU7U0FDbEMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7T0FJRzs7Ozs7OztJQUNILDhDQUFpQjs7Ozs7O0lBQWpCLFVBQWtCLFNBQWlCLEVBQUUsT0FBZ0I7UUFDbkQsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ2pCLElBQUksV0FBVyxDQUFDLGlCQUFpQixDQUFDO1lBQ2hDLE1BQU0sRUFBRSxjQUFjO1lBQ3RCLFNBQVMsRUFBRSxTQUFTO1lBQ3BCLE9BQU8sRUFBRSxPQUFPO1NBQ2pCLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7T0FHRzs7Ozs7O0lBQ0gsOENBQWlCOzs7OztJQUFqQixVQUFrQixTQUFpQjtRQUNqQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDakIsSUFBSSxXQUFXLENBQUMsaUJBQWlCLENBQUM7WUFDaEMsTUFBTSxFQUFFLGNBQWM7WUFDdEIsU0FBUyxFQUFFLFNBQVM7U0FDckIsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0gseUNBQVk7Ozs7SUFBWjtRQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSCxnREFBbUI7Ozs7SUFBbkI7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7Ozs7SUFFRCxzREFBeUI7OztJQUF6QjtRQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUNEOztPQUVHOzs7OztJQUNILGtEQUFxQjs7OztJQUFyQjtRQUNFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksV0FBVyxDQUFDLHFCQUFxQixFQUFFLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0gsaURBQW9COzs7O0lBQXBCO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7SUFDSCx1Q0FBVTs7Ozs7SUFBVixVQUFXLE9BQWU7UUFDeEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUN2RCxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7T0FHRzs7Ozs7O0lBQ0gsd0NBQVc7Ozs7O0lBQVgsVUFBWSxjQUFzQjtRQUNoQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0gseUNBQVk7Ozs7SUFBWjtRQUNFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksV0FBVyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVEOztPQUVHOzs7Ozs7SUFDSCx1Q0FBVTs7Ozs7SUFBVixVQUFXLGNBQXNCO1FBQWpDLGlCQXFCQztRQXBCQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsY0FBYyxDQUFDLHdCQUF3QixDQUFDLEVBQy9DLEdBQUc7Ozs7UUFBQyxVQUFDLEVBQXFDO2dCQUFuQyxvQkFBTyxFQUFFLG9CQUFPLEVBQUUsb0JBQU8sRUFBRSxrQkFBTTtZQUN0QyxJQUFJLENBQUMsY0FBYyxJQUFJLENBQUMsT0FBTyxJQUFJLE1BQU0sQ0FBQyxFQUFFO2dCQUMxQyxLQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7Z0JBQ3BCLE9BQU8sRUFBRSxDQUFDO2FBQ1g7aUJBQU0sSUFBSSxPQUFPLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQzdCLDBCQUEwQjtnQkFDMUIsT0FBTyxFQUFFLENBQUM7YUFDWDtpQkFBTSxJQUFJLENBQUMsT0FBTyxJQUFJLGNBQWMsS0FBSyxPQUFPLElBQUksY0FBYyxFQUFFO2dCQUNuRSxxREFBcUQ7Z0JBQ3JELElBQUksT0FBTyxFQUFFO29CQUNYLEtBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztpQkFDckI7Z0JBQ0QsS0FBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBQztnQkFDakMsT0FBTyxFQUFFLENBQUM7YUFDWDtZQUNELE9BQU8sT0FBTyxDQUFDO1FBQ2pCLENBQUMsRUFBQyxDQUNILENBQUM7SUFDSixDQUFDOztnQkFwSkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFaZ0IsS0FBSzs7OzZCQUR0QjtDQWdLQyxBQXJKRCxJQXFKQztTQWxKWSxrQkFBa0I7Ozs7OztJQUNqQixtQ0FBOEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQWRkcmVzcywgQ291bnRyeSwgUmVnaW9uIH0gZnJvbSAnLi4vLi4vbW9kZWwvYWRkcmVzcy5tb2RlbCc7XG5pbXBvcnQgeyBVU0VSSURfQ1VSUkVOVCB9IGZyb20gJy4uLy4uL29jYy91dGlscy9vY2MtY29uc3RhbnRzJztcbmltcG9ydCB7IFN0YXRlV2l0aFByb2Nlc3MgfSBmcm9tICcuLi8uLi9wcm9jZXNzL3N0b3JlL3Byb2Nlc3Mtc3RhdGUnO1xuaW1wb3J0IHsgVXNlckFjdGlvbnMgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IFVzZXJzU2VsZWN0b3JzIH0gZnJvbSAnLi4vc3RvcmUvc2VsZWN0b3JzL2luZGV4JztcbmltcG9ydCB7IFN0YXRlV2l0aFVzZXIgfSBmcm9tICcuLi9zdG9yZS91c2VyLXN0YXRlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFVzZXJBZGRyZXNzU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoVXNlciB8IFN0YXRlV2l0aFByb2Nlc3M8dm9pZD4+KSB7fVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgdXNlcidzIGFkZHJlc3Nlc1xuICAgKi9cbiAgbG9hZEFkZHJlc3NlcygpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBVc2VyQWN0aW9ucy5Mb2FkVXNlckFkZHJlc3NlcyhVU0VSSURfQ1VSUkVOVCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgdXNlciBhZGRyZXNzXG4gICAqIEBwYXJhbSBhZGRyZXNzIGEgdXNlciBhZGRyZXNzXG4gICAqL1xuICBhZGRVc2VyQWRkcmVzcyhhZGRyZXNzOiBBZGRyZXNzKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBVc2VyQWN0aW9ucy5BZGRVc2VyQWRkcmVzcyh7XG4gICAgICAgIHVzZXJJZDogVVNFUklEX0NVUlJFTlQsXG4gICAgICAgIGFkZHJlc3M6IGFkZHJlc3MsXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB1c2VyIGFkZHJlc3MgYXMgZGVmYXVsdFxuICAgKiBAcGFyYW0gYWRkcmVzc0lkIGEgdXNlciBhZGRyZXNzIElEXG4gICAqL1xuICBzZXRBZGRyZXNzQXNEZWZhdWx0KGFkZHJlc3NJZDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBVc2VyQWN0aW9ucy5VcGRhdGVVc2VyQWRkcmVzcyh7XG4gICAgICAgIHVzZXJJZDogVVNFUklEX0NVUlJFTlQsXG4gICAgICAgIGFkZHJlc3NJZDogYWRkcmVzc0lkLFxuICAgICAgICBhZGRyZXNzOiB7IGRlZmF1bHRBZGRyZXNzOiB0cnVlIH0sXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlcyBleGlzdGluZyB1c2VyIGFkZHJlc3NcbiAgICogQHBhcmFtIGFkZHJlc3NJZCBhIHVzZXIgYWRkcmVzcyBJRFxuICAgKiBAcGFyYW0gYWRkcmVzcyBhIHVzZXIgYWRkcmVzc1xuICAgKi9cbiAgdXBkYXRlVXNlckFkZHJlc3MoYWRkcmVzc0lkOiBzdHJpbmcsIGFkZHJlc3M6IEFkZHJlc3MpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IFVzZXJBY3Rpb25zLlVwZGF0ZVVzZXJBZGRyZXNzKHtcbiAgICAgICAgdXNlcklkOiBVU0VSSURfQ1VSUkVOVCxcbiAgICAgICAgYWRkcmVzc0lkOiBhZGRyZXNzSWQsXG4gICAgICAgIGFkZHJlc3M6IGFkZHJlc3MsXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlcyBleGlzdGluZyB1c2VyIGFkZHJlc3NcbiAgICogQHBhcmFtIGFkZHJlc3NJZCBhIHVzZXIgYWRkcmVzcyBJRFxuICAgKi9cbiAgZGVsZXRlVXNlckFkZHJlc3MoYWRkcmVzc0lkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IFVzZXJBY3Rpb25zLkRlbGV0ZVVzZXJBZGRyZXNzKHtcbiAgICAgICAgdXNlcklkOiBVU0VSSURfQ1VSUkVOVCxcbiAgICAgICAgYWRkcmVzc0lkOiBhZGRyZXNzSWQsXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhZGRyZXNzZXNcbiAgICovXG4gIGdldEFkZHJlc3NlcygpOiBPYnNlcnZhYmxlPEFkZHJlc3NbXT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KFVzZXJzU2VsZWN0b3JzLmdldEFkZHJlc3NlcykpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBsb2FkaW5nIGZsYWcgZm9yIGFkZHJlc3Nlc1xuICAgKi9cbiAgZ2V0QWRkcmVzc2VzTG9hZGluZygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChVc2Vyc1NlbGVjdG9ycy5nZXRBZGRyZXNzZXNMb2FkaW5nKSk7XG4gIH1cblxuICBnZXRBZGRyZXNzZXNMb2FkZWRTdWNjZXNzKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KFVzZXJzU2VsZWN0b3JzLmdldEFkZHJlc3Nlc0xvYWRlZFN1Y2Nlc3MpKTtcbiAgfVxuICAvKipcbiAgICogUmV0cmlldmVzIGRlbGl2ZXJ5IGNvdW50cmllc1xuICAgKi9cbiAgbG9hZERlbGl2ZXJ5Q291bnRyaWVzKCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFVzZXJBY3Rpb25zLkxvYWREZWxpdmVyeUNvdW50cmllcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFsbCBkZWxpdmVyeSBjb3VudHJpZXNcbiAgICovXG4gIGdldERlbGl2ZXJ5Q291bnRyaWVzKCk6IE9ic2VydmFibGU8Q291bnRyeVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoVXNlcnNTZWxlY3RvcnMuZ2V0QWxsRGVsaXZlcnlDb3VudHJpZXMpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgY291bnRyeSBiYXNlZCBvbiB0aGUgcHJvdmlkZWQgYGlzb2NvZGVgXG4gICAqIEBwYXJhbSBpc29jb2RlIGFuIGlzb2NvZGUgZm9yIGEgY291bnRyeVxuICAgKi9cbiAgZ2V0Q291bnRyeShpc29jb2RlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPENvdW50cnk+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KFVzZXJzU2VsZWN0b3JzLmNvdW50cnlTZWxlY3RvckZhY3RvcnkoaXNvY29kZSkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgcmVnaW9ucyBmb3Igc3BlY2lmaWVkIGNvdW50cnkgYnkgYGNvdW50cnlJc29Db2RlYFxuICAgKiBAcGFyYW0gY291bnRyeUlzb0NvZGVcbiAgICovXG4gIGxvYWRSZWdpb25zKGNvdW50cnlJc29Db2RlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBVc2VyQWN0aW9ucy5Mb2FkUmVnaW9ucyhjb3VudHJ5SXNvQ29kZSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIHJlZ2lvbnMgaW4gc3RvcmUgLSB1c2VmdWwgd2hlbiBjaGFuZ2luZyBjb3VudHJ5XG4gICAqL1xuICBjbGVhclJlZ2lvbnMoKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVXNlckFjdGlvbnMuQ2xlYXJSZWdpb25zKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYWxsIHJlZ2lvbnNcbiAgICovXG4gIGdldFJlZ2lvbnMoY291bnRyeUlzb0NvZGU6IHN0cmluZyk6IE9ic2VydmFibGU8UmVnaW9uW10+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KFVzZXJzU2VsZWN0b3JzLmdldFJlZ2lvbnNEYXRhQW5kTG9hZGluZyksXG4gICAgICBtYXAoKHsgcmVnaW9ucywgY291bnRyeSwgbG9hZGluZywgbG9hZGVkIH0pID0+IHtcbiAgICAgICAgaWYgKCFjb3VudHJ5SXNvQ29kZSAmJiAobG9hZGluZyB8fCBsb2FkZWQpKSB7XG4gICAgICAgICAgdGhpcy5jbGVhclJlZ2lvbnMoKTtcbiAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH0gZWxzZSBpZiAobG9hZGluZyAmJiAhbG9hZGVkKSB7XG4gICAgICAgICAgLy8gZG9uJ3QgaW50ZXJydXB0IGxvYWRpbmdcbiAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH0gZWxzZSBpZiAoIWxvYWRpbmcgJiYgY291bnRyeUlzb0NvZGUgIT09IGNvdW50cnkgJiYgY291bnRyeUlzb0NvZGUpIHtcbiAgICAgICAgICAvLyBjb3VudHJ5IGNoYW5nZWQgLSBjbGVhciBzdG9yZSBhbmQgbG9hZCBuZXcgcmVnaW9uc1xuICAgICAgICAgIGlmIChjb3VudHJ5KSB7XG4gICAgICAgICAgICB0aGlzLmNsZWFyUmVnaW9ucygpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmxvYWRSZWdpb25zKGNvdW50cnlJc29Db2RlKTtcbiAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlZ2lvbnM7XG4gICAgICB9KVxuICAgICk7XG4gIH1cbn1cbiJdfQ==
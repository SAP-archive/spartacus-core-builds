import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map, take } from 'rxjs/operators';
import { AuthService } from '../../auth/facade/auth.service';
import { UserActions } from '../store/actions/index';
import { UsersSelectors } from '../store/selectors/index';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
import * as i2 from "../../auth/facade/auth.service";
var UserAddressService = /** @class */ (function () {
    function UserAddressService(store, authService) {
        this.store = store;
        this.authService = authService;
    }
    /**
     * Retrieves user's addresses
     */
    UserAddressService.prototype.loadAddresses = function () {
        var _this = this;
        this.withUserId(function (userId) {
            return _this.store.dispatch(new UserActions.LoadUserAddresses(userId));
        });
    };
    /**
     * Adds user address
     * @param address a user address
     */
    UserAddressService.prototype.addUserAddress = function (address) {
        var _this = this;
        this.withUserId(function (userId) {
            return _this.store.dispatch(new UserActions.AddUserAddress({
                userId: userId,
                address: address,
            }));
        });
    };
    /**
     * Sets user address as default
     * @param addressId a user address ID
     */
    UserAddressService.prototype.setAddressAsDefault = function (addressId) {
        var _this = this;
        this.withUserId(function (userId) {
            return _this.store.dispatch(new UserActions.UpdateUserAddress({
                userId: userId,
                addressId: addressId,
                address: { defaultAddress: true },
            }));
        });
    };
    /**
     * Updates existing user address
     * @param addressId a user address ID
     * @param address a user address
     */
    UserAddressService.prototype.updateUserAddress = function (addressId, address) {
        var _this = this;
        this.withUserId(function (userId) {
            return _this.store.dispatch(new UserActions.UpdateUserAddress({
                userId: userId,
                addressId: addressId,
                address: address,
            }));
        });
    };
    /**
     * Deletes existing user address
     * @param addressId a user address ID
     */
    UserAddressService.prototype.deleteUserAddress = function (addressId) {
        var _this = this;
        this.withUserId(function (userId) {
            return _this.store.dispatch(new UserActions.DeleteUserAddress({
                userId: userId,
                addressId: addressId,
            }));
        });
    };
    /**
     * Returns addresses
     */
    UserAddressService.prototype.getAddresses = function () {
        return this.store.pipe(select(UsersSelectors.getAddresses));
    };
    /**
     * Returns a loading flag for addresses
     */
    UserAddressService.prototype.getAddressesLoading = function () {
        return this.store.pipe(select(UsersSelectors.getAddressesLoading));
    };
    UserAddressService.prototype.getAddressesLoadedSuccess = function () {
        return this.store.pipe(select(UsersSelectors.getAddressesLoadedSuccess));
    };
    /**
     * Retrieves delivery countries
     */
    UserAddressService.prototype.loadDeliveryCountries = function () {
        this.store.dispatch(new UserActions.LoadDeliveryCountries());
    };
    /**
     * Returns all delivery countries
     */
    UserAddressService.prototype.getDeliveryCountries = function () {
        return this.store.pipe(select(UsersSelectors.getAllDeliveryCountries));
    };
    /**
     * Returns a country based on the provided `isocode`
     * @param isocode an isocode for a country
     */
    UserAddressService.prototype.getCountry = function (isocode) {
        return this.store.pipe(select(UsersSelectors.countrySelectorFactory(isocode)));
    };
    /**
     * Retrieves regions for specified country by `countryIsoCode`
     * @param countryIsoCode
     */
    UserAddressService.prototype.loadRegions = function (countryIsoCode) {
        this.store.dispatch(new UserActions.LoadRegions(countryIsoCode));
    };
    /**
     * Clear regions in store - useful when changing country
     */
    UserAddressService.prototype.clearRegions = function () {
        this.store.dispatch(new UserActions.ClearRegions());
    };
    /**
     * Returns all regions
     */
    UserAddressService.prototype.getRegions = function (countryIsoCode) {
        var _this = this;
        return this.store.pipe(select(UsersSelectors.getRegionsDataAndLoading), map(function (_a) {
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
        }));
    };
    /*
     * Utility method to distinquish user id in a convenient way
     */
    UserAddressService.prototype.withUserId = function (callback) {
        this.authService
            .getOccUserId()
            .pipe(take(1))
            .subscribe(function (userId) { return callback(userId); });
    };
    UserAddressService.ctorParameters = function () { return [
        { type: Store },
        { type: AuthService }
    ]; };
    UserAddressService.ɵprov = i0.ɵɵdefineInjectable({ factory: function UserAddressService_Factory() { return new UserAddressService(i0.ɵɵinject(i1.Store), i0.ɵɵinject(i2.AuthService)); }, token: UserAddressService, providedIn: "root" });
    UserAddressService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], UserAddressService);
    return UserAddressService;
}());
export { UserAddressService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1hZGRyZXNzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9mYWNhZGUvdXNlci1hZGRyZXNzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFNUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFHN0QsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7OztBQU0xRDtJQUNFLDRCQUNZLEtBQW9ELEVBQ3BELFdBQXdCO1FBRHhCLFVBQUssR0FBTCxLQUFLLENBQStDO1FBQ3BELGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBQ2pDLENBQUM7SUFFSjs7T0FFRztJQUNILDBDQUFhLEdBQWI7UUFBQSxpQkFJQztRQUhDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBQyxNQUFNO1lBQ3JCLE9BQUEsS0FBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxXQUFXLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFBOUQsQ0FBOEQsQ0FDL0QsQ0FBQztJQUNKLENBQUM7SUFFRDs7O09BR0c7SUFDSCwyQ0FBYyxHQUFkLFVBQWUsT0FBZ0I7UUFBL0IsaUJBU0M7UUFSQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQUMsTUFBTTtZQUNyQixPQUFBLEtBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNqQixJQUFJLFdBQVcsQ0FBQyxjQUFjLENBQUM7Z0JBQzdCLE1BQU0sUUFBQTtnQkFD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LFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyxrQkFBa0IsQ0F5SzlCOzZCQXZMRDtDQXVMQyxBQXpLRCxJQXlLQztTQXpLWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi9hdXRoL2ZhY2FkZS9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgQWRkcmVzcywgQ291bnRyeSwgUmVnaW9uIH0gZnJvbSAnLi4vLi4vbW9kZWwvYWRkcmVzcy5tb2RlbCc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhQcm9jZXNzIH0gZnJvbSAnLi4vLi4vcHJvY2Vzcy9zdG9yZS9wcm9jZXNzLXN0YXRlJztcbmltcG9ydCB7IFVzZXJBY3Rpb25zIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBVc2Vyc1NlbGVjdG9ycyB9IGZyb20gJy4uL3N0b3JlL3NlbGVjdG9ycy9pbmRleCc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhVc2VyIH0gZnJvbSAnLi4vc3RvcmUvdXNlci1zdGF0ZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBVc2VyQWRkcmVzc1NlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aFVzZXIgfCBTdGF0ZVdpdGhQcm9jZXNzPHZvaWQ+PixcbiAgICBwcm90ZWN0ZWQgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlXG4gICkge31cblxuICAvKipcbiAgICogUmV0cmlldmVzIHVzZXIncyBhZGRyZXNzZXNcbiAgICovXG4gIGxvYWRBZGRyZXNzZXMoKTogdm9pZCB7XG4gICAgdGhpcy53aXRoVXNlcklkKCh1c2VySWQpID0+XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBVc2VyQWN0aW9ucy5Mb2FkVXNlckFkZHJlc3Nlcyh1c2VySWQpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyB1c2VyIGFkZHJlc3NcbiAgICogQHBhcmFtIGFkZHJlc3MgYSB1c2VyIGFkZHJlc3NcbiAgICovXG4gIGFkZFVzZXJBZGRyZXNzKGFkZHJlc3M6IEFkZHJlc3MpOiB2b2lkIHtcbiAgICB0aGlzLndpdGhVc2VySWQoKHVzZXJJZCkgPT5cbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgIG5ldyBVc2VyQWN0aW9ucy5BZGRVc2VyQWRkcmVzcyh7XG4gICAgICAgICAgdXNlcklkLFxuICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgIH0pXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHVzZXIgYWRkcmVzcyBhcyBkZWZhdWx0XG4gICAqIEBwYXJhbSBhZGRyZXNzSWQgYSB1c2VyIGFkZHJlc3MgSURcbiAgICovXG4gIHNldEFkZHJlc3NBc0RlZmF1bHQoYWRkcmVzc0lkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLndpdGhVc2VySWQoKHVzZXJJZCkgPT5cbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgIG5ldyBVc2VyQWN0aW9ucy5VcGRhdGVVc2VyQWRkcmVzcyh7XG4gICAgICAgICAgdXNlcklkLFxuICAgICAgICAgIGFkZHJlc3NJZCxcbiAgICAgICAgICBhZGRyZXNzOiB7IGRlZmF1bHRBZGRyZXNzOiB0cnVlIH0sXG4gICAgICAgIH0pXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIGV4aXN0aW5nIHVzZXIgYWRkcmVzc1xuICAgKiBAcGFyYW0gYWRkcmVzc0lkIGEgdXNlciBhZGRyZXNzIElEXG4gICAqIEBwYXJhbSBhZGRyZXNzIGEgdXNlciBhZGRyZXNzXG4gICAqL1xuICB1cGRhdGVVc2VyQWRkcmVzcyhhZGRyZXNzSWQ6IHN0cmluZywgYWRkcmVzczogQWRkcmVzcyk6IHZvaWQge1xuICAgIHRoaXMud2l0aFVzZXJJZCgodXNlcklkKSA9PlxuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgICAgbmV3IFVzZXJBY3Rpb25zLlVwZGF0ZVVzZXJBZGRyZXNzKHtcbiAgICAgICAgICB1c2VySWQsXG4gICAgICAgICAgYWRkcmVzc0lkLFxuICAgICAgICAgIGFkZHJlc3MsXG4gICAgICAgIH0pXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGVzIGV4aXN0aW5nIHVzZXIgYWRkcmVzc1xuICAgKiBAcGFyYW0gYWRkcmVzc0lkIGEgdXNlciBhZGRyZXNzIElEXG4gICAqL1xuICBkZWxldGVVc2VyQWRkcmVzcyhhZGRyZXNzSWQ6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMud2l0aFVzZXJJZCgodXNlcklkKSA9PlxuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgICAgbmV3IFVzZXJBY3Rpb25zLkRlbGV0ZVVzZXJBZGRyZXNzKHtcbiAgICAgICAgICB1c2VySWQsXG4gICAgICAgICAgYWRkcmVzc0lkLFxuICAgICAgICB9KVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhZGRyZXNzZXNcbiAgICovXG4gIGdldEFkZHJlc3NlcygpOiBPYnNlcnZhYmxlPEFkZHJlc3NbXT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KFVzZXJzU2VsZWN0b3JzLmdldEFkZHJlc3NlcykpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBsb2FkaW5nIGZsYWcgZm9yIGFkZHJlc3Nlc1xuICAgKi9cbiAgZ2V0QWRkcmVzc2VzTG9hZGluZygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChVc2Vyc1NlbGVjdG9ycy5nZXRBZGRyZXNzZXNMb2FkaW5nKSk7XG4gIH1cblxuICBnZXRBZGRyZXNzZXNMb2FkZWRTdWNjZXNzKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KFVzZXJzU2VsZWN0b3JzLmdldEFkZHJlc3Nlc0xvYWRlZFN1Y2Nlc3MpKTtcbiAgfVxuICAvKipcbiAgICogUmV0cmlldmVzIGRlbGl2ZXJ5IGNvdW50cmllc1xuICAgKi9cbiAgbG9hZERlbGl2ZXJ5Q291bnRyaWVzKCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFVzZXJBY3Rpb25zLkxvYWREZWxpdmVyeUNvdW50cmllcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFsbCBkZWxpdmVyeSBjb3VudHJpZXNcbiAgICovXG4gIGdldERlbGl2ZXJ5Q291bnRyaWVzKCk6IE9ic2VydmFibGU8Q291bnRyeVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoVXNlcnNTZWxlY3RvcnMuZ2V0QWxsRGVsaXZlcnlDb3VudHJpZXMpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgY291bnRyeSBiYXNlZCBvbiB0aGUgcHJvdmlkZWQgYGlzb2NvZGVgXG4gICAqIEBwYXJhbSBpc29jb2RlIGFuIGlzb2NvZGUgZm9yIGEgY291bnRyeVxuICAgKi9cbiAgZ2V0Q291bnRyeShpc29jb2RlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPENvdW50cnk+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KFVzZXJzU2VsZWN0b3JzLmNvdW50cnlTZWxlY3RvckZhY3RvcnkoaXNvY29kZSkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgcmVnaW9ucyBmb3Igc3BlY2lmaWVkIGNvdW50cnkgYnkgYGNvdW50cnlJc29Db2RlYFxuICAgKiBAcGFyYW0gY291bnRyeUlzb0NvZGVcbiAgICovXG4gIGxvYWRSZWdpb25zKGNvdW50cnlJc29Db2RlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBVc2VyQWN0aW9ucy5Mb2FkUmVnaW9ucyhjb3VudHJ5SXNvQ29kZSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIHJlZ2lvbnMgaW4gc3RvcmUgLSB1c2VmdWwgd2hlbiBjaGFuZ2luZyBjb3VudHJ5XG4gICAqL1xuICBjbGVhclJlZ2lvbnMoKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVXNlckFjdGlvbnMuQ2xlYXJSZWdpb25zKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYWxsIHJlZ2lvbnNcbiAgICovXG4gIGdldFJlZ2lvbnMoY291bnRyeUlzb0NvZGU6IHN0cmluZyk6IE9ic2VydmFibGU8UmVnaW9uW10+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KFVzZXJzU2VsZWN0b3JzLmdldFJlZ2lvbnNEYXRhQW5kTG9hZGluZyksXG4gICAgICBtYXAoKHsgcmVnaW9ucywgY291bnRyeSwgbG9hZGluZywgbG9hZGVkIH0pID0+IHtcbiAgICAgICAgaWYgKCFjb3VudHJ5SXNvQ29kZSAmJiAobG9hZGluZyB8fCBsb2FkZWQpKSB7XG4gICAgICAgICAgdGhpcy5jbGVhclJlZ2lvbnMoKTtcbiAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH0gZWxzZSBpZiAobG9hZGluZyAmJiAhbG9hZGVkKSB7XG4gICAgICAgICAgLy8gZG9uJ3QgaW50ZXJydXB0IGxvYWRpbmdcbiAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH0gZWxzZSBpZiAoIWxvYWRpbmcgJiYgY291bnRyeUlzb0NvZGUgIT09IGNvdW50cnkgJiYgY291bnRyeUlzb0NvZGUpIHtcbiAgICAgICAgICAvLyBjb3VudHJ5IGNoYW5nZWQgLSBjbGVhciBzdG9yZSBhbmQgbG9hZCBuZXcgcmVnaW9uc1xuICAgICAgICAgIGlmIChjb3VudHJ5KSB7XG4gICAgICAgICAgICB0aGlzLmNsZWFyUmVnaW9ucygpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmxvYWRSZWdpb25zKGNvdW50cnlJc29Db2RlKTtcbiAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlZ2lvbnM7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKlxuICAgKiBVdGlsaXR5IG1ldGhvZCB0byBkaXN0aW5xdWlzaCB1c2VyIGlkIGluIGEgY29udmVuaWVudCB3YXlcbiAgICovXG4gIHByaXZhdGUgd2l0aFVzZXJJZChjYWxsYmFjazogKHVzZXJJZDogc3RyaW5nKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5hdXRoU2VydmljZVxuICAgICAgLmdldE9jY1VzZXJJZCgpXG4gICAgICAucGlwZSh0YWtlKDEpKVxuICAgICAgLnN1YnNjcmliZSgodXNlcklkKSA9PiBjYWxsYmFjayh1c2VySWQpKTtcbiAgfVxufVxuIl19
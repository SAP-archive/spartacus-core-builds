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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1hZGRyZXNzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9mYWNhZGUvdXNlci1hZGRyZXNzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFNUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFHN0QsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7OztBQU0xRDtJQUNFLDRCQUNZLEtBQW9ELEVBQ3BELFdBQXdCO1FBRHhCLFVBQUssR0FBTCxLQUFLLENBQStDO1FBQ3BELGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBQ2pDLENBQUM7SUFFSjs7T0FFRztJQUNILDBDQUFhLEdBQWI7UUFBQSxpQkFJQztRQUhDLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBQSxNQUFNO1lBQ3BCLE9BQUEsS0FBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxXQUFXLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFBOUQsQ0FBOEQsQ0FDL0QsQ0FBQztJQUNKLENBQUM7SUFFRDs7O09BR0c7SUFDSCwyQ0FBYyxHQUFkLFVBQWUsT0FBZ0I7UUFBL0IsaUJBU0M7UUFSQyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQUEsTUFBTTtZQUNwQixPQUFBLEtBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNqQixJQUFJLFdBQVcsQ0FBQyxjQUFjLENBQUM7Z0JBQzdCLE1BQU0sUUFBQTtnQkFD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LFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyxrQkFBa0IsQ0F5SzlCOzZCQXZMRDtDQXVMQyxBQXpLRCxJQXlLQztTQXpLWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi9hdXRoL2ZhY2FkZS9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgQWRkcmVzcywgQ291bnRyeSwgUmVnaW9uIH0gZnJvbSAnLi4vLi4vbW9kZWwvYWRkcmVzcy5tb2RlbCc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhQcm9jZXNzIH0gZnJvbSAnLi4vLi4vcHJvY2Vzcy9zdG9yZS9wcm9jZXNzLXN0YXRlJztcbmltcG9ydCB7IFVzZXJBY3Rpb25zIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBVc2Vyc1NlbGVjdG9ycyB9IGZyb20gJy4uL3N0b3JlL3NlbGVjdG9ycy9pbmRleCc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhVc2VyIH0gZnJvbSAnLi4vc3RvcmUvdXNlci1zdGF0ZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBVc2VyQWRkcmVzc1NlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aFVzZXIgfCBTdGF0ZVdpdGhQcm9jZXNzPHZvaWQ+PixcbiAgICBwcm90ZWN0ZWQgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlXG4gICkge31cblxuICAvKipcbiAgICogUmV0cmlldmVzIHVzZXIncyBhZGRyZXNzZXNcbiAgICovXG4gIGxvYWRBZGRyZXNzZXMoKTogdm9pZCB7XG4gICAgdGhpcy53aXRoVXNlcklkKHVzZXJJZCA9PlxuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVXNlckFjdGlvbnMuTG9hZFVzZXJBZGRyZXNzZXModXNlcklkKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgdXNlciBhZGRyZXNzXG4gICAqIEBwYXJhbSBhZGRyZXNzIGEgdXNlciBhZGRyZXNzXG4gICAqL1xuICBhZGRVc2VyQWRkcmVzcyhhZGRyZXNzOiBBZGRyZXNzKTogdm9pZCB7XG4gICAgdGhpcy53aXRoVXNlcklkKHVzZXJJZCA9PlxuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgICAgbmV3IFVzZXJBY3Rpb25zLkFkZFVzZXJBZGRyZXNzKHtcbiAgICAgICAgICB1c2VySWQsXG4gICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdXNlciBhZGRyZXNzIGFzIGRlZmF1bHRcbiAgICogQHBhcmFtIGFkZHJlc3NJZCBhIHVzZXIgYWRkcmVzcyBJRFxuICAgKi9cbiAgc2V0QWRkcmVzc0FzRGVmYXVsdChhZGRyZXNzSWQ6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMud2l0aFVzZXJJZCh1c2VySWQgPT5cbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgIG5ldyBVc2VyQWN0aW9ucy5VcGRhdGVVc2VyQWRkcmVzcyh7XG4gICAgICAgICAgdXNlcklkLFxuICAgICAgICAgIGFkZHJlc3NJZCxcbiAgICAgICAgICBhZGRyZXNzOiB7IGRlZmF1bHRBZGRyZXNzOiB0cnVlIH0sXG4gICAgICAgIH0pXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIGV4aXN0aW5nIHVzZXIgYWRkcmVzc1xuICAgKiBAcGFyYW0gYWRkcmVzc0lkIGEgdXNlciBhZGRyZXNzIElEXG4gICAqIEBwYXJhbSBhZGRyZXNzIGEgdXNlciBhZGRyZXNzXG4gICAqL1xuICB1cGRhdGVVc2VyQWRkcmVzcyhhZGRyZXNzSWQ6IHN0cmluZywgYWRkcmVzczogQWRkcmVzcyk6IHZvaWQge1xuICAgIHRoaXMud2l0aFVzZXJJZCh1c2VySWQgPT5cbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgIG5ldyBVc2VyQWN0aW9ucy5VcGRhdGVVc2VyQWRkcmVzcyh7XG4gICAgICAgICAgdXNlcklkLFxuICAgICAgICAgIGFkZHJlc3NJZCxcbiAgICAgICAgICBhZGRyZXNzLFxuICAgICAgICB9KVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogRGVsZXRlcyBleGlzdGluZyB1c2VyIGFkZHJlc3NcbiAgICogQHBhcmFtIGFkZHJlc3NJZCBhIHVzZXIgYWRkcmVzcyBJRFxuICAgKi9cbiAgZGVsZXRlVXNlckFkZHJlc3MoYWRkcmVzc0lkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLndpdGhVc2VySWQodXNlcklkID0+XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgICBuZXcgVXNlckFjdGlvbnMuRGVsZXRlVXNlckFkZHJlc3Moe1xuICAgICAgICAgIHVzZXJJZCxcbiAgICAgICAgICBhZGRyZXNzSWQsXG4gICAgICAgIH0pXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFkZHJlc3Nlc1xuICAgKi9cbiAgZ2V0QWRkcmVzc2VzKCk6IE9ic2VydmFibGU8QWRkcmVzc1tdPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoVXNlcnNTZWxlY3RvcnMuZ2V0QWRkcmVzc2VzKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGxvYWRpbmcgZmxhZyBmb3IgYWRkcmVzc2VzXG4gICAqL1xuICBnZXRBZGRyZXNzZXNMb2FkaW5nKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KFVzZXJzU2VsZWN0b3JzLmdldEFkZHJlc3Nlc0xvYWRpbmcpKTtcbiAgfVxuXG4gIGdldEFkZHJlc3Nlc0xvYWRlZFN1Y2Nlc3MoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoVXNlcnNTZWxlY3RvcnMuZ2V0QWRkcmVzc2VzTG9hZGVkU3VjY2VzcykpO1xuICB9XG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgZGVsaXZlcnkgY291bnRyaWVzXG4gICAqL1xuICBsb2FkRGVsaXZlcnlDb3VudHJpZXMoKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVXNlckFjdGlvbnMuTG9hZERlbGl2ZXJ5Q291bnRyaWVzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYWxsIGRlbGl2ZXJ5IGNvdW50cmllc1xuICAgKi9cbiAgZ2V0RGVsaXZlcnlDb3VudHJpZXMoKTogT2JzZXJ2YWJsZTxDb3VudHJ5W10+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChVc2Vyc1NlbGVjdG9ycy5nZXRBbGxEZWxpdmVyeUNvdW50cmllcykpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBjb3VudHJ5IGJhc2VkIG9uIHRoZSBwcm92aWRlZCBgaXNvY29kZWBcbiAgICogQHBhcmFtIGlzb2NvZGUgYW4gaXNvY29kZSBmb3IgYSBjb3VudHJ5XG4gICAqL1xuICBnZXRDb3VudHJ5KGlzb2NvZGU6IHN0cmluZyk6IE9ic2VydmFibGU8Q291bnRyeT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoVXNlcnNTZWxlY3RvcnMuY291bnRyeVNlbGVjdG9yRmFjdG9yeShpc29jb2RlKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlcyByZWdpb25zIGZvciBzcGVjaWZpZWQgY291bnRyeSBieSBgY291bnRyeUlzb0NvZGVgXG4gICAqIEBwYXJhbSBjb3VudHJ5SXNvQ29kZVxuICAgKi9cbiAgbG9hZFJlZ2lvbnMoY291bnRyeUlzb0NvZGU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFVzZXJBY3Rpb25zLkxvYWRSZWdpb25zKGNvdW50cnlJc29Db2RlKSk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgcmVnaW9ucyBpbiBzdG9yZSAtIHVzZWZ1bCB3aGVuIGNoYW5naW5nIGNvdW50cnlcbiAgICovXG4gIGNsZWFyUmVnaW9ucygpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBVc2VyQWN0aW9ucy5DbGVhclJlZ2lvbnMoKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbGwgcmVnaW9uc1xuICAgKi9cbiAgZ2V0UmVnaW9ucyhjb3VudHJ5SXNvQ29kZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxSZWdpb25bXT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoVXNlcnNTZWxlY3RvcnMuZ2V0UmVnaW9uc0RhdGFBbmRMb2FkaW5nKSxcbiAgICAgIG1hcCgoeyByZWdpb25zLCBjb3VudHJ5LCBsb2FkaW5nLCBsb2FkZWQgfSkgPT4ge1xuICAgICAgICBpZiAoIWNvdW50cnlJc29Db2RlICYmIChsb2FkaW5nIHx8IGxvYWRlZCkpIHtcbiAgICAgICAgICB0aGlzLmNsZWFyUmVnaW9ucygpO1xuICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfSBlbHNlIGlmIChsb2FkaW5nICYmICFsb2FkZWQpIHtcbiAgICAgICAgICAvLyBkb24ndCBpbnRlcnJ1cHQgbG9hZGluZ1xuICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfSBlbHNlIGlmICghbG9hZGluZyAmJiBjb3VudHJ5SXNvQ29kZSAhPT0gY291bnRyeSAmJiBjb3VudHJ5SXNvQ29kZSkge1xuICAgICAgICAgIC8vIGNvdW50cnkgY2hhbmdlZCAtIGNsZWFyIHN0b3JlIGFuZCBsb2FkIG5ldyByZWdpb25zXG4gICAgICAgICAgaWYgKGNvdW50cnkpIHtcbiAgICAgICAgICAgIHRoaXMuY2xlYXJSZWdpb25zKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMubG9hZFJlZ2lvbnMoY291bnRyeUlzb0NvZGUpO1xuICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVnaW9ucztcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qXG4gICAqIFV0aWxpdHkgbWV0aG9kIHRvIGRpc3RpbnF1aXNoIHVzZXIgaWQgaW4gYSBjb252ZW5pZW50IHdheVxuICAgKi9cbiAgcHJpdmF0ZSB3aXRoVXNlcklkKGNhbGxiYWNrOiAodXNlcklkOiBzdHJpbmcpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLmF1dGhTZXJ2aWNlXG4gICAgICAuZ2V0T2NjVXNlcklkKClcbiAgICAgIC5waXBlKHRha2UoMSkpXG4gICAgICAuc3Vic2NyaWJlKHVzZXJJZCA9PiBjYWxsYmFjayh1c2VySWQpKTtcbiAgfVxufVxuIl19
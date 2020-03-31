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
let UserAddressService = class UserAddressService {
    constructor(store, authService) {
        this.store = store;
        this.authService = authService;
    }
    /**
     * Retrieves user's addresses
     */
    loadAddresses() {
        this.withUserId((userId) => this.store.dispatch(new UserActions.LoadUserAddresses(userId)));
    }
    /**
     * Adds user address
     * @param address a user address
     */
    addUserAddress(address) {
        this.withUserId((userId) => this.store.dispatch(new UserActions.AddUserAddress({
            userId,
            address,
        })));
    }
    /**
     * Sets user address as default
     * @param addressId a user address ID
     */
    setAddressAsDefault(addressId) {
        this.withUserId((userId) => this.store.dispatch(new UserActions.UpdateUserAddress({
            userId,
            addressId,
            address: { defaultAddress: true },
        })));
    }
    /**
     * Updates existing user address
     * @param addressId a user address ID
     * @param address a user address
     */
    updateUserAddress(addressId, address) {
        this.withUserId((userId) => this.store.dispatch(new UserActions.UpdateUserAddress({
            userId,
            addressId,
            address,
        })));
    }
    /**
     * Deletes existing user address
     * @param addressId a user address ID
     */
    deleteUserAddress(addressId) {
        this.withUserId((userId) => this.store.dispatch(new UserActions.DeleteUserAddress({
            userId,
            addressId,
        })));
    }
    /**
     * Returns addresses
     */
    getAddresses() {
        return this.store.pipe(select(UsersSelectors.getAddresses));
    }
    /**
     * Returns a loading flag for addresses
     */
    getAddressesLoading() {
        return this.store.pipe(select(UsersSelectors.getAddressesLoading));
    }
    getAddressesLoadedSuccess() {
        return this.store.pipe(select(UsersSelectors.getAddressesLoadedSuccess));
    }
    /**
     * Retrieves delivery countries
     */
    loadDeliveryCountries() {
        this.store.dispatch(new UserActions.LoadDeliveryCountries());
    }
    /**
     * Returns all delivery countries
     */
    getDeliveryCountries() {
        return this.store.pipe(select(UsersSelectors.getAllDeliveryCountries));
    }
    /**
     * Returns a country based on the provided `isocode`
     * @param isocode an isocode for a country
     */
    getCountry(isocode) {
        return this.store.pipe(select(UsersSelectors.countrySelectorFactory(isocode)));
    }
    /**
     * Retrieves regions for specified country by `countryIsoCode`
     * @param countryIsoCode
     */
    loadRegions(countryIsoCode) {
        this.store.dispatch(new UserActions.LoadRegions(countryIsoCode));
    }
    /**
     * Clear regions in store - useful when changing country
     */
    clearRegions() {
        this.store.dispatch(new UserActions.ClearRegions());
    }
    /**
     * Returns all regions
     */
    getRegions(countryIsoCode) {
        return this.store.pipe(select(UsersSelectors.getRegionsDataAndLoading), map(({ regions, country, loading, loaded }) => {
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
        }));
    }
    /*
     * Utility method to distinquish user id in a convenient way
     */
    withUserId(callback) {
        this.authService
            .getOccUserId()
            .pipe(take(1))
            .subscribe((userId) => callback(userId));
    }
};
UserAddressService.ctorParameters = () => [
    { type: Store },
    { type: AuthService }
];
UserAddressService.ɵprov = i0.ɵɵdefineInjectable({ factory: function UserAddressService_Factory() { return new UserAddressService(i0.ɵɵinject(i1.Store), i0.ɵɵinject(i2.AuthService)); }, token: UserAddressService, providedIn: "root" });
UserAddressService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], UserAddressService);
export { UserAddressService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1hZGRyZXNzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9mYWNhZGUvdXNlci1hZGRyZXNzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFNUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFHN0QsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7OztBQU0xRCxJQUFhLGtCQUFrQixHQUEvQixNQUFhLGtCQUFrQjtJQUM3QixZQUNZLEtBQW9ELEVBQ3BELFdBQXdCO1FBRHhCLFVBQUssR0FBTCxLQUFLLENBQStDO1FBQ3BELGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBQ2pDLENBQUM7SUFFSjs7T0FFRztJQUNILGFBQWE7UUFDWCxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FDekIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxXQUFXLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FDL0QsQ0FBQztJQUNKLENBQUM7SUFFRDs7O09BR0c7SUFDSCxjQUFjLENBQUMsT0FBZ0I7UUFDN0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNqQixJQUFJLFdBQVcsQ0FBQyxjQUFjLENBQUM7WUFDN0IsTUFBTTtZQUNOLE9BQU87U0FDUixD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RUFBRTtZQUM1QyxJQUFJLENBQUMsY0FBYyxJQUFJLENBQUMsT0FBTyxJQUFJLE1BQU0sQ0FBQyxFQUFFO2dCQUMxQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7Z0JBQ3BCLE9BQU8sRUFBRSxDQUFDO2FBQ1g7aUJBQU0sSUFBSSxPQUFPLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQzdCLDBCQUEwQjtnQkFDMUIsT0FBTyxFQUFFLENBQUM7YUFDWDtpQkFBTSxJQUFJLENBQUMsT0FBTyxJQUFJLGNBQWMsS0FBSyxPQUFPLElBQUksY0FBYyxFQUFFO2dCQUNuRSxxREFBcUQ7Z0JBQ3JELElBQUksT0FBTyxFQUFFO29CQUNYLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztpQkFDckI7Z0JBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBQztnQkFDakMsT0FBTyxFQUFFLENBQUM7YUFDWDtZQUNELE9BQU8sT0FBTyxDQUFDO1FBQ2pCLENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSyxVQUFVLENBQUMsUUFBa0M7UUFDbkQsSUFBSSxDQUFDLFdBQVc7YUFDYixZQUFZLEVBQUU7YUFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2IsU0FBUyxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUM3QyxDQUFDO0NBQ0YsQ0FBQTs7WUF2S29CLEtBQUs7WUFDQyxXQUFXOzs7QUFIekIsa0JBQWtCO0lBSDlCLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7R0FDVyxrQkFBa0IsQ0F5SzlCO1NBektZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL2F1dGgvZmFjYWRlL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBBZGRyZXNzLCBDb3VudHJ5LCBSZWdpb24gfSBmcm9tICcuLi8uLi9tb2RlbC9hZGRyZXNzLm1vZGVsJztcbmltcG9ydCB7IFN0YXRlV2l0aFByb2Nlc3MgfSBmcm9tICcuLi8uLi9wcm9jZXNzL3N0b3JlL3Byb2Nlc3Mtc3RhdGUnO1xuaW1wb3J0IHsgVXNlckFjdGlvbnMgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IFVzZXJzU2VsZWN0b3JzIH0gZnJvbSAnLi4vc3RvcmUvc2VsZWN0b3JzL2luZGV4JztcbmltcG9ydCB7IFN0YXRlV2l0aFVzZXIgfSBmcm9tICcuLi9zdG9yZS91c2VyLXN0YXRlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFVzZXJBZGRyZXNzU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoVXNlciB8IFN0YXRlV2l0aFByb2Nlc3M8dm9pZD4+LFxuICAgIHByb3RlY3RlZCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2VcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgdXNlcidzIGFkZHJlc3Nlc1xuICAgKi9cbiAgbG9hZEFkZHJlc3NlcygpOiB2b2lkIHtcbiAgICB0aGlzLndpdGhVc2VySWQoKHVzZXJJZCkgPT5cbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFVzZXJBY3Rpb25zLkxvYWRVc2VyQWRkcmVzc2VzKHVzZXJJZCkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIHVzZXIgYWRkcmVzc1xuICAgKiBAcGFyYW0gYWRkcmVzcyBhIHVzZXIgYWRkcmVzc1xuICAgKi9cbiAgYWRkVXNlckFkZHJlc3MoYWRkcmVzczogQWRkcmVzcyk6IHZvaWQge1xuICAgIHRoaXMud2l0aFVzZXJJZCgodXNlcklkKSA9PlxuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgICAgbmV3IFVzZXJBY3Rpb25zLkFkZFVzZXJBZGRyZXNzKHtcbiAgICAgICAgICB1c2VySWQsXG4gICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdXNlciBhZGRyZXNzIGFzIGRlZmF1bHRcbiAgICogQHBhcmFtIGFkZHJlc3NJZCBhIHVzZXIgYWRkcmVzcyBJRFxuICAgKi9cbiAgc2V0QWRkcmVzc0FzRGVmYXVsdChhZGRyZXNzSWQ6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMud2l0aFVzZXJJZCgodXNlcklkKSA9PlxuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgICAgbmV3IFVzZXJBY3Rpb25zLlVwZGF0ZVVzZXJBZGRyZXNzKHtcbiAgICAgICAgICB1c2VySWQsXG4gICAgICAgICAgYWRkcmVzc0lkLFxuICAgICAgICAgIGFkZHJlc3M6IHsgZGVmYXVsdEFkZHJlc3M6IHRydWUgfSxcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgZXhpc3RpbmcgdXNlciBhZGRyZXNzXG4gICAqIEBwYXJhbSBhZGRyZXNzSWQgYSB1c2VyIGFkZHJlc3MgSURcbiAgICogQHBhcmFtIGFkZHJlc3MgYSB1c2VyIGFkZHJlc3NcbiAgICovXG4gIHVwZGF0ZVVzZXJBZGRyZXNzKGFkZHJlc3NJZDogc3RyaW5nLCBhZGRyZXNzOiBBZGRyZXNzKTogdm9pZCB7XG4gICAgdGhpcy53aXRoVXNlcklkKCh1c2VySWQpID0+XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgICBuZXcgVXNlckFjdGlvbnMuVXBkYXRlVXNlckFkZHJlc3Moe1xuICAgICAgICAgIHVzZXJJZCxcbiAgICAgICAgICBhZGRyZXNzSWQsXG4gICAgICAgICAgYWRkcmVzcyxcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZXMgZXhpc3RpbmcgdXNlciBhZGRyZXNzXG4gICAqIEBwYXJhbSBhZGRyZXNzSWQgYSB1c2VyIGFkZHJlc3MgSURcbiAgICovXG4gIGRlbGV0ZVVzZXJBZGRyZXNzKGFkZHJlc3NJZDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy53aXRoVXNlcklkKCh1c2VySWQpID0+XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgICBuZXcgVXNlckFjdGlvbnMuRGVsZXRlVXNlckFkZHJlc3Moe1xuICAgICAgICAgIHVzZXJJZCxcbiAgICAgICAgICBhZGRyZXNzSWQsXG4gICAgICAgIH0pXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFkZHJlc3Nlc1xuICAgKi9cbiAgZ2V0QWRkcmVzc2VzKCk6IE9ic2VydmFibGU8QWRkcmVzc1tdPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoVXNlcnNTZWxlY3RvcnMuZ2V0QWRkcmVzc2VzKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGxvYWRpbmcgZmxhZyBmb3IgYWRkcmVzc2VzXG4gICAqL1xuICBnZXRBZGRyZXNzZXNMb2FkaW5nKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KFVzZXJzU2VsZWN0b3JzLmdldEFkZHJlc3Nlc0xvYWRpbmcpKTtcbiAgfVxuXG4gIGdldEFkZHJlc3Nlc0xvYWRlZFN1Y2Nlc3MoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoVXNlcnNTZWxlY3RvcnMuZ2V0QWRkcmVzc2VzTG9hZGVkU3VjY2VzcykpO1xuICB9XG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgZGVsaXZlcnkgY291bnRyaWVzXG4gICAqL1xuICBsb2FkRGVsaXZlcnlDb3VudHJpZXMoKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVXNlckFjdGlvbnMuTG9hZERlbGl2ZXJ5Q291bnRyaWVzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYWxsIGRlbGl2ZXJ5IGNvdW50cmllc1xuICAgKi9cbiAgZ2V0RGVsaXZlcnlDb3VudHJpZXMoKTogT2JzZXJ2YWJsZTxDb3VudHJ5W10+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChVc2Vyc1NlbGVjdG9ycy5nZXRBbGxEZWxpdmVyeUNvdW50cmllcykpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBjb3VudHJ5IGJhc2VkIG9uIHRoZSBwcm92aWRlZCBgaXNvY29kZWBcbiAgICogQHBhcmFtIGlzb2NvZGUgYW4gaXNvY29kZSBmb3IgYSBjb3VudHJ5XG4gICAqL1xuICBnZXRDb3VudHJ5KGlzb2NvZGU6IHN0cmluZyk6IE9ic2VydmFibGU8Q291bnRyeT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoVXNlcnNTZWxlY3RvcnMuY291bnRyeVNlbGVjdG9yRmFjdG9yeShpc29jb2RlKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlcyByZWdpb25zIGZvciBzcGVjaWZpZWQgY291bnRyeSBieSBgY291bnRyeUlzb0NvZGVgXG4gICAqIEBwYXJhbSBjb3VudHJ5SXNvQ29kZVxuICAgKi9cbiAgbG9hZFJlZ2lvbnMoY291bnRyeUlzb0NvZGU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFVzZXJBY3Rpb25zLkxvYWRSZWdpb25zKGNvdW50cnlJc29Db2RlKSk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgcmVnaW9ucyBpbiBzdG9yZSAtIHVzZWZ1bCB3aGVuIGNoYW5naW5nIGNvdW50cnlcbiAgICovXG4gIGNsZWFyUmVnaW9ucygpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBVc2VyQWN0aW9ucy5DbGVhclJlZ2lvbnMoKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbGwgcmVnaW9uc1xuICAgKi9cbiAgZ2V0UmVnaW9ucyhjb3VudHJ5SXNvQ29kZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxSZWdpb25bXT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoVXNlcnNTZWxlY3RvcnMuZ2V0UmVnaW9uc0RhdGFBbmRMb2FkaW5nKSxcbiAgICAgIG1hcCgoeyByZWdpb25zLCBjb3VudHJ5LCBsb2FkaW5nLCBsb2FkZWQgfSkgPT4ge1xuICAgICAgICBpZiAoIWNvdW50cnlJc29Db2RlICYmIChsb2FkaW5nIHx8IGxvYWRlZCkpIHtcbiAgICAgICAgICB0aGlzLmNsZWFyUmVnaW9ucygpO1xuICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfSBlbHNlIGlmIChsb2FkaW5nICYmICFsb2FkZWQpIHtcbiAgICAgICAgICAvLyBkb24ndCBpbnRlcnJ1cHQgbG9hZGluZ1xuICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfSBlbHNlIGlmICghbG9hZGluZyAmJiBjb3VudHJ5SXNvQ29kZSAhPT0gY291bnRyeSAmJiBjb3VudHJ5SXNvQ29kZSkge1xuICAgICAgICAgIC8vIGNvdW50cnkgY2hhbmdlZCAtIGNsZWFyIHN0b3JlIGFuZCBsb2FkIG5ldyByZWdpb25zXG4gICAgICAgICAgaWYgKGNvdW50cnkpIHtcbiAgICAgICAgICAgIHRoaXMuY2xlYXJSZWdpb25zKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMubG9hZFJlZ2lvbnMoY291bnRyeUlzb0NvZGUpO1xuICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVnaW9ucztcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qXG4gICAqIFV0aWxpdHkgbWV0aG9kIHRvIGRpc3RpbnF1aXNoIHVzZXIgaWQgaW4gYSBjb252ZW5pZW50IHdheVxuICAgKi9cbiAgcHJpdmF0ZSB3aXRoVXNlcklkKGNhbGxiYWNrOiAodXNlcklkOiBzdHJpbmcpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLmF1dGhTZXJ2aWNlXG4gICAgICAuZ2V0T2NjVXNlcklkKClcbiAgICAgIC5waXBlKHRha2UoMSkpXG4gICAgICAuc3Vic2NyaWJlKCh1c2VySWQpID0+IGNhbGxiYWNrKHVzZXJJZCkpO1xuICB9XG59XG4iXX0=
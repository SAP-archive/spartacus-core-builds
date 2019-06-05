/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { USERID_CURRENT } from '../../occ/utils/occ-constants';
import * as fromStore from '../store/index';
import { debounceTime, map } from 'rxjs/operators';
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
        this.store.dispatch(new fromStore.LoadUserAddresses(USERID_CURRENT));
    }
    /**
     * Adds user address
     * @param {?} address a user address
     * @return {?}
     */
    addUserAddress(address) {
        this.store.dispatch(new fromStore.AddUserAddress({
            userId: USERID_CURRENT,
            address: address,
        }));
    }
    /**
     * Sets user address as default
     * @param {?} addressId a user address ID
     * @return {?}
     */
    setAddressAsDefault(addressId) {
        this.store.dispatch(new fromStore.UpdateUserAddress({
            userId: USERID_CURRENT,
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
        this.store.dispatch(new fromStore.UpdateUserAddress({
            userId: USERID_CURRENT,
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
        this.store.dispatch(new fromStore.DeleteUserAddress({
            userId: USERID_CURRENT,
            addressId: addressId,
        }));
    }
    /**
     * Returns addresses
     * @return {?}
     */
    getAddresses() {
        return this.store.pipe(select(fromStore.getAddresses));
    }
    /**
     * Returns a loading flag for addresses
     * @return {?}
     */
    getAddressesLoading() {
        return this.store.pipe(select(fromStore.getAddressesLoading));
    }
    /**
     * Retrieves delivery countries
     * @return {?}
     */
    loadDeliveryCountries() {
        this.store.dispatch(new fromStore.LoadDeliveryCountries());
    }
    /**
     * Returns all delivery countries
     * @return {?}
     */
    getDeliveryCountries() {
        return this.store.pipe(select(fromStore.getAllDeliveryCountries));
    }
    /**
     * Returns a country based on the provided `isocode`
     * @param {?} isocode an isocode for a country
     * @return {?}
     */
    getCountry(isocode) {
        return this.store.pipe(select(fromStore.countrySelectorFactory(isocode)));
    }
    /**
     * Retrieves regions for specified country by `countryIsoCode`
     * @param {?} countryIsoCode
     * @return {?}
     */
    loadRegions(countryIsoCode) {
        this.store.dispatch(new fromStore.LoadRegions(countryIsoCode));
    }
    /**
     * Clear regions in store - useful when changing country
     * @return {?}
     */
    clearRegions() {
        this.store.dispatch(new fromStore.ClearRegions());
    }
    /**
     * Returns all regions
     * @param {?} countryIsoCode
     * @return {?}
     */
    getRegions(countryIsoCode) {
        return combineLatest(this.store.pipe(select(fromStore.getAllRegions)), this.store.pipe(select(fromStore.getRegionsCountry)), this.store.pipe(select(fromStore.getRegionsLoading)), this.store.pipe(select(fromStore.getRegionsLoaded))).pipe(debounceTime(1), // fix for inconsistent result on store mutations
        map((/**
         * @param {?} __0
         * @return {?}
         */
        ([regions, country, loading, loaded]) => {
            if (!countryIsoCode) {
                this.clearRegions();
                return [];
            }
            else if (loading && !loaded) {
                // don't interrupt loading
                return [];
            }
            else if (!loading && countryIsoCode !== country) {
                // country changed - clear store and load new regions
                this.clearRegions();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1hZGRyZXNzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9mYWNhZGUvdXNlci1hZGRyZXNzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDNUMsT0FBTyxFQUFFLGFBQWEsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUVqRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFL0QsT0FBTyxLQUFLLFNBQVMsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1QyxPQUFPLEVBQUUsWUFBWSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFLbkQsTUFBTSxPQUFPLGtCQUFrQjs7OztJQUM3QixZQUNZLEtBRVQ7UUFGUyxVQUFLLEdBQUwsS0FBSyxDQUVkO0lBQ0EsQ0FBQzs7Ozs7SUFLSixhQUFhO1FBQ1gsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxTQUFTLENBQUMsaUJBQWlCLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztJQUN2RSxDQUFDOzs7Ozs7SUFNRCxjQUFjLENBQUMsT0FBZ0I7UUFDN0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ2pCLElBQUksU0FBUyxDQUFDLGNBQWMsQ0FBQztZQUMzQixNQUFNLEVBQUUsY0FBYztZQUN0QixPQUFPLEVBQUUsT0FBTztTQUNqQixDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7Ozs7OztJQU1ELG1CQUFtQixDQUFDLFNBQWlCO1FBQ25DLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNqQixJQUFJLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQztZQUM5QixNQUFNLEVBQUUsY0FBYztZQUN0QixTQUFT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QUU7Z0JBQzdCLDBCQUEwQjtnQkFDMUIsT0FBTyxFQUFFLENBQUM7YUFDWDtpQkFBTSxJQUFJLENBQUMsT0FBTyxJQUFJLGNBQWMsS0FBSyxPQUFPLEVBQUU7Z0JBQ2pELHFEQUFxRDtnQkFDckQsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO2dCQUNwQixJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxDQUFDO2dCQUNqQyxPQUFPLEVBQUUsQ0FBQzthQUNYO1lBQ0QsT0FBTyxPQUFPLENBQUM7UUFDakIsQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7OztZQXRKRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFWZ0IsS0FBSzs7Ozs7Ozs7SUFhbEIsbUNBRUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQWRkcmVzcywgQ291bnRyeSwgUmVnaW9uIH0gZnJvbSAnLi4vLi4vbW9kZWwvYWRkcmVzcy5tb2RlbCc7XG5pbXBvcnQgeyBVU0VSSURfQ1VSUkVOVCB9IGZyb20gJy4uLy4uL29jYy91dGlscy9vY2MtY29uc3RhbnRzJztcbmltcG9ydCAqIGFzIGZyb21Qcm9jZXNzU3RvcmUgZnJvbSAnLi4vLi4vcHJvY2Vzcy9zdG9yZS9wcm9jZXNzLXN0YXRlJztcbmltcG9ydCAqIGFzIGZyb21TdG9yZSBmcm9tICcuLi9zdG9yZS9pbmRleCc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFVzZXJBZGRyZXNzU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBzdG9yZTogU3RvcmU8XG4gICAgICBmcm9tU3RvcmUuU3RhdGVXaXRoVXNlciB8IGZyb21Qcm9jZXNzU3RvcmUuU3RhdGVXaXRoUHJvY2Vzczx2b2lkPlxuICAgID5cbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgdXNlcidzIGFkZHJlc3Nlc1xuICAgKi9cbiAgbG9hZEFkZHJlc3NlcygpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBmcm9tU3RvcmUuTG9hZFVzZXJBZGRyZXNzZXMoVVNFUklEX0NVUlJFTlQpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIHVzZXIgYWRkcmVzc1xuICAgKiBAcGFyYW0gYWRkcmVzcyBhIHVzZXIgYWRkcmVzc1xuICAgKi9cbiAgYWRkVXNlckFkZHJlc3MoYWRkcmVzczogQWRkcmVzcyk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgZnJvbVN0b3JlLkFkZFVzZXJBZGRyZXNzKHtcbiAgICAgICAgdXNlcklkOiBVU0VSSURfQ1VSUkVOVCxcbiAgICAgICAgYWRkcmVzczogYWRkcmVzcyxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHVzZXIgYWRkcmVzcyBhcyBkZWZhdWx0XG4gICAqIEBwYXJhbSBhZGRyZXNzSWQgYSB1c2VyIGFkZHJlc3MgSURcbiAgICovXG4gIHNldEFkZHJlc3NBc0RlZmF1bHQoYWRkcmVzc0lkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IGZyb21TdG9yZS5VcGRhdGVVc2VyQWRkcmVzcyh7XG4gICAgICAgIHVzZXJJZDogVVNFUklEX0NVUlJFTlQsXG4gICAgICAgIGFkZHJlc3NJZDogYWRkcmVzc0lkLFxuICAgICAgICBhZGRyZXNzOiB7IGRlZmF1bHRBZGRyZXNzOiB0cnVlIH0sXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlcyBleGlzdGluZyB1c2VyIGFkZHJlc3NcbiAgICogQHBhcmFtIGFkZHJlc3NJZCBhIHVzZXIgYWRkcmVzcyBJRFxuICAgKiBAcGFyYW0gYWRkcmVzcyBhIHVzZXIgYWRkcmVzc1xuICAgKi9cbiAgdXBkYXRlVXNlckFkZHJlc3MoYWRkcmVzc0lkOiBzdHJpbmcsIGFkZHJlc3M6IEFkZHJlc3MpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IGZyb21TdG9yZS5VcGRhdGVVc2VyQWRkcmVzcyh7XG4gICAgICAgIHVzZXJJZDogVVNFUklEX0NVUlJFTlQsXG4gICAgICAgIGFkZHJlc3NJZDogYWRkcmVzc0lkLFxuICAgICAgICBhZGRyZXNzOiBhZGRyZXNzLFxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZXMgZXhpc3RpbmcgdXNlciBhZGRyZXNzXG4gICAqIEBwYXJhbSBhZGRyZXNzSWQgYSB1c2VyIGFkZHJlc3MgSURcbiAgICovXG4gIGRlbGV0ZVVzZXJBZGRyZXNzKGFkZHJlc3NJZDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBmcm9tU3RvcmUuRGVsZXRlVXNlckFkZHJlc3Moe1xuICAgICAgICB1c2VySWQ6IFVTRVJJRF9DVVJSRU5ULFxuICAgICAgICBhZGRyZXNzSWQ6IGFkZHJlc3NJZCxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFkZHJlc3Nlc1xuICAgKi9cbiAgZ2V0QWRkcmVzc2VzKCk6IE9ic2VydmFibGU8QWRkcmVzc1tdPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoZnJvbVN0b3JlLmdldEFkZHJlc3NlcykpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBsb2FkaW5nIGZsYWcgZm9yIGFkZHJlc3Nlc1xuICAgKi9cbiAgZ2V0QWRkcmVzc2VzTG9hZGluZygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChmcm9tU3RvcmUuZ2V0QWRkcmVzc2VzTG9hZGluZykpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlcyBkZWxpdmVyeSBjb3VudHJpZXNcbiAgICovXG4gIGxvYWREZWxpdmVyeUNvdW50cmllcygpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBmcm9tU3RvcmUuTG9hZERlbGl2ZXJ5Q291bnRyaWVzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYWxsIGRlbGl2ZXJ5IGNvdW50cmllc1xuICAgKi9cbiAgZ2V0RGVsaXZlcnlDb3VudHJpZXMoKTogT2JzZXJ2YWJsZTxDb3VudHJ5W10+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChmcm9tU3RvcmUuZ2V0QWxsRGVsaXZlcnlDb3VudHJpZXMpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgY291bnRyeSBiYXNlZCBvbiB0aGUgcHJvdmlkZWQgYGlzb2NvZGVgXG4gICAqIEBwYXJhbSBpc29jb2RlIGFuIGlzb2NvZGUgZm9yIGEgY291bnRyeVxuICAgKi9cbiAgZ2V0Q291bnRyeShpc29jb2RlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPENvdW50cnk+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChmcm9tU3RvcmUuY291bnRyeVNlbGVjdG9yRmFjdG9yeShpc29jb2RlKSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlcyByZWdpb25zIGZvciBzcGVjaWZpZWQgY291bnRyeSBieSBgY291bnRyeUlzb0NvZGVgXG4gICAqIEBwYXJhbSBjb3VudHJ5SXNvQ29kZVxuICAgKi9cbiAgbG9hZFJlZ2lvbnMoY291bnRyeUlzb0NvZGU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IGZyb21TdG9yZS5Mb2FkUmVnaW9ucyhjb3VudHJ5SXNvQ29kZSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIHJlZ2lvbnMgaW4gc3RvcmUgLSB1c2VmdWwgd2hlbiBjaGFuZ2luZyBjb3VudHJ5XG4gICAqL1xuICBjbGVhclJlZ2lvbnMoKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgZnJvbVN0b3JlLkNsZWFyUmVnaW9ucygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFsbCByZWdpb25zXG4gICAqL1xuICBnZXRSZWdpb25zKGNvdW50cnlJc29Db2RlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFJlZ2lvbltdPiB7XG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoXG4gICAgICB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KGZyb21TdG9yZS5nZXRBbGxSZWdpb25zKSksXG4gICAgICB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KGZyb21TdG9yZS5nZXRSZWdpb25zQ291bnRyeSkpLFxuICAgICAgdGhpcy5zdG9yZS5waXBlKHNlbGVjdChmcm9tU3RvcmUuZ2V0UmVnaW9uc0xvYWRpbmcpKSxcbiAgICAgIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoZnJvbVN0b3JlLmdldFJlZ2lvbnNMb2FkZWQpKVxuICAgICkucGlwZShcbiAgICAgIGRlYm91bmNlVGltZSgxKSwgLy8gZml4IGZvciBpbmNvbnNpc3RlbnQgcmVzdWx0IG9uIHN0b3JlIG11dGF0aW9uc1xuICAgICAgbWFwKChbcmVnaW9ucywgY291bnRyeSwgbG9hZGluZywgbG9hZGVkXSkgPT4ge1xuICAgICAgICBpZiAoIWNvdW50cnlJc29Db2RlKSB7XG4gICAgICAgICAgdGhpcy5jbGVhclJlZ2lvbnMoKTtcbiAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH0gZWxzZSBpZiAobG9hZGluZyAmJiAhbG9hZGVkKSB7XG4gICAgICAgICAgLy8gZG9uJ3QgaW50ZXJydXB0IGxvYWRpbmdcbiAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH0gZWxzZSBpZiAoIWxvYWRpbmcgJiYgY291bnRyeUlzb0NvZGUgIT09IGNvdW50cnkpIHtcbiAgICAgICAgICAvLyBjb3VudHJ5IGNoYW5nZWQgLSBjbGVhciBzdG9yZSBhbmQgbG9hZCBuZXcgcmVnaW9uc1xuICAgICAgICAgIHRoaXMuY2xlYXJSZWdpb25zKCk7XG4gICAgICAgICAgdGhpcy5sb2FkUmVnaW9ucyhjb3VudHJ5SXNvQ29kZSk7XG4gICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZWdpb25zO1xuICAgICAgfSlcbiAgICApO1xuICB9XG59XG4iXX0=
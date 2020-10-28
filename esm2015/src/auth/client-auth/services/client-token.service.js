import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { queueScheduler } from 'rxjs';
import { filter, map, observeOn } from 'rxjs/operators';
import { ClientAuthActions } from '../store/actions/index';
import { ClientAuthSelectors } from '../store/selectors/index';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
/**
 * Serves a role of a facade on client token store.
 */
export class ClientTokenService {
    constructor(store) {
        this.store = store;
    }
    /**
     * Returns a client token. The client token from the store is returned if there is one.
     * Otherwise a new token is fetched from the backend and saved in the store.
     */
    getClientToken() {
        return this.store.pipe(select(ClientAuthSelectors.getClientTokenState), observeOn(queueScheduler), filter((state) => {
            if (this.isClientTokenLoaded(state)) {
                return true;
            }
            else {
                if (!state.loading) {
                    this.store.dispatch(new ClientAuthActions.LoadClientToken());
                }
                return false;
            }
        }), map((state) => state.value));
    }
    /**
     * Fetches a clientToken from the backend and saves it in the store where getClientToken can use it.
     * The new clientToken is returned.
     */
    refreshClientToken() {
        this.store.dispatch(new ClientAuthActions.LoadClientToken());
        return this.store.pipe(select(ClientAuthSelectors.getClientTokenState), filter((state) => this.isClientTokenLoaded(state)), map((state) => state.value));
    }
    isClientTokenLoaded(state) {
        return (state.success || state.error) && !state.loading;
    }
}
ClientTokenService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ClientTokenService_Factory() { return new ClientTokenService(i0.ɵɵinject(i1.Store)); }, token: ClientTokenService, providedIn: "root" });
ClientTokenService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
ClientTokenService.ctorParameters = () => [
    { type: Store }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LXRva2VuLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3NyYy9hdXRoL2NsaWVudC1hdXRoL3NlcnZpY2VzL2NsaWVudC10b2tlbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDNUMsT0FBTyxFQUFjLGNBQWMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsRCxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUd4RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUUzRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7O0FBRS9EOztHQUVHO0FBSUgsTUFBTSxPQUFPLGtCQUFrQjtJQUM3QixZQUFzQixLQUFpQztRQUFqQyxVQUFLLEdBQUwsS0FBSyxDQUE0QjtJQUFHLENBQUM7SUFFM0Q7OztPQUdHO0lBQ0gsY0FBYztRQUNaLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxtQkFBbUIsQ0FBQyxFQUMvQyxTQUFTLENBQUMsY0FBYyxDQUFDLEVBQ3pCLE1BQU0sQ0FBQyxDQUFDLEtBQStCLEVBQUUsRUFBRTtZQUN6QyxJQUFJLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDbkMsT0FBTyxJQUFJLENBQUM7YUFDYjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRTtvQkFDbEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxpQkFBaUIsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDO2lCQUM5RDtnQkFDRCxPQUFPLEtBQUssQ0FBQzthQUNkO1FBQ0gsQ0FBQyxDQUFDLEVBQ0YsR0FBRyxDQUFDLENBQUMsS0FBK0IsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUN0RCxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7T0FHRztJQUNILGtCQUFrQjtRQUNoQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLGlCQUFpQixDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUM7UUFFN0QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLG1CQUFtQixDQUFDLG1CQUFtQixDQUFDLEVBQy9DLE1BQU0sQ0FBQyxDQUFDLEtBQStCLEVBQUUsRUFBRSxDQUN6QyxJQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQ2hDLEVBQ0QsR0FBRyxDQUFDLENBQUMsS0FBK0IsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUN0RCxDQUFDO0lBQ0osQ0FBQztJQUVTLG1CQUFtQixDQUFDLEtBQStCO1FBQzNELE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7SUFDMUQsQ0FBQzs7OztZQTlDRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7OztZQWRnQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc2VsZWN0LCBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIHF1ZXVlU2NoZWR1bGVyIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgb2JzZXJ2ZU9uIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTG9hZGVyU3RhdGUgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9sb2FkZXIvbG9hZGVyLXN0YXRlJztcbmltcG9ydCB7IENsaWVudFRva2VuIH0gZnJvbSAnLi4vbW9kZWxzL2NsaWVudC10b2tlbi5tb2RlbCc7XG5pbXBvcnQgeyBDbGllbnRBdXRoQWN0aW9ucyB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgU3RhdGVXaXRoQ2xpZW50QXV0aCB9IGZyb20gJy4uL3N0b3JlL2NsaWVudC1hdXRoLXN0YXRlJztcbmltcG9ydCB7IENsaWVudEF1dGhTZWxlY3RvcnMgfSBmcm9tICcuLi9zdG9yZS9zZWxlY3RvcnMvaW5kZXgnO1xuXG4vKipcbiAqIFNlcnZlcyBhIHJvbGUgb2YgYSBmYWNhZGUgb24gY2xpZW50IHRva2VuIHN0b3JlLlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ2xpZW50VG9rZW5TZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhDbGllbnRBdXRoPikge31cblxuICAvKipcbiAgICogUmV0dXJucyBhIGNsaWVudCB0b2tlbi4gVGhlIGNsaWVudCB0b2tlbiBmcm9tIHRoZSBzdG9yZSBpcyByZXR1cm5lZCBpZiB0aGVyZSBpcyBvbmUuXG4gICAqIE90aGVyd2lzZSBhIG5ldyB0b2tlbiBpcyBmZXRjaGVkIGZyb20gdGhlIGJhY2tlbmQgYW5kIHNhdmVkIGluIHRoZSBzdG9yZS5cbiAgICovXG4gIGdldENsaWVudFRva2VuKCk6IE9ic2VydmFibGU8Q2xpZW50VG9rZW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KENsaWVudEF1dGhTZWxlY3RvcnMuZ2V0Q2xpZW50VG9rZW5TdGF0ZSksXG4gICAgICBvYnNlcnZlT24ocXVldWVTY2hlZHVsZXIpLFxuICAgICAgZmlsdGVyKChzdGF0ZTogTG9hZGVyU3RhdGU8Q2xpZW50VG9rZW4+KSA9PiB7XG4gICAgICAgIGlmICh0aGlzLmlzQ2xpZW50VG9rZW5Mb2FkZWQoc3RhdGUpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKCFzdGF0ZS5sb2FkaW5nKSB7XG4gICAgICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDbGllbnRBdXRoQWN0aW9ucy5Mb2FkQ2xpZW50VG9rZW4oKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBtYXAoKHN0YXRlOiBMb2FkZXJTdGF0ZTxDbGllbnRUb2tlbj4pID0+IHN0YXRlLnZhbHVlKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogRmV0Y2hlcyBhIGNsaWVudFRva2VuIGZyb20gdGhlIGJhY2tlbmQgYW5kIHNhdmVzIGl0IGluIHRoZSBzdG9yZSB3aGVyZSBnZXRDbGllbnRUb2tlbiBjYW4gdXNlIGl0LlxuICAgKiBUaGUgbmV3IGNsaWVudFRva2VuIGlzIHJldHVybmVkLlxuICAgKi9cbiAgcmVmcmVzaENsaWVudFRva2VuKCk6IE9ic2VydmFibGU8Q2xpZW50VG9rZW4+IHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBDbGllbnRBdXRoQWN0aW9ucy5Mb2FkQ2xpZW50VG9rZW4oKSk7XG5cbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKFxuICAgICAgc2VsZWN0KENsaWVudEF1dGhTZWxlY3RvcnMuZ2V0Q2xpZW50VG9rZW5TdGF0ZSksXG4gICAgICBmaWx0ZXIoKHN0YXRlOiBMb2FkZXJTdGF0ZTxDbGllbnRUb2tlbj4pID0+XG4gICAgICAgIHRoaXMuaXNDbGllbnRUb2tlbkxvYWRlZChzdGF0ZSlcbiAgICAgICksXG4gICAgICBtYXAoKHN0YXRlOiBMb2FkZXJTdGF0ZTxDbGllbnRUb2tlbj4pID0+IHN0YXRlLnZhbHVlKVxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgaXNDbGllbnRUb2tlbkxvYWRlZChzdGF0ZTogTG9hZGVyU3RhdGU8Q2xpZW50VG9rZW4+KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChzdGF0ZS5zdWNjZXNzIHx8IHN0YXRlLmVycm9yKSAmJiAhc3RhdGUubG9hZGluZztcbiAgfVxufVxuIl19
import { Injectable } from '@angular/core';
import { combineLatest, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StatePersistenceService } from '../../../state/services/state-persistence.service';
import { UserIdService } from '../facade/user-id.service';
import { AuthRedirectStorageService } from './auth-redirect-storage.service';
import { AuthStorageService } from './auth-storage.service';
import * as i0 from "@angular/core";
import * as i1 from "../../../state/services/state-persistence.service";
import * as i2 from "../facade/user-id.service";
import * as i3 from "./auth-storage.service";
import * as i4 from "./auth-redirect-storage.service";
/**
 * Responsible for saving the authorization data (userId, token, redirectUrl) in browser storage.
 */
export class AuthStatePersistenceService {
    constructor(statePersistenceService, userIdService, authStorageService, authRedirectStorageService) {
        this.statePersistenceService = statePersistenceService;
        this.userIdService = userIdService;
        this.authStorageService = authStorageService;
        this.authRedirectStorageService = authRedirectStorageService;
        this.subscription = new Subscription();
        /**
         * Identifier used for storage key.
         */
        this.key = 'auth';
    }
    /**
     * Initializes the synchronization between state and browser storage.
     */
    initSync() {
        this.subscription.add(this.statePersistenceService.syncWithStorage({
            key: this.key,
            state$: this.getAuthState(),
            onRead: (state) => this.onRead(state),
        }));
    }
    /**
     * Gets and transforms state from different sources into the form that should
     * be saved in storage.
     */
    getAuthState() {
        return combineLatest([
            this.authStorageService.getToken().pipe(filter((state) => !!state), map((state) => {
                return Object.assign({}, state);
            })),
            this.userIdService.getUserId(),
            this.authRedirectStorageService.getRedirectUrl(),
        ]).pipe(map(([authToken, userId, redirectUrl]) => {
            let token = authToken;
            if (token) {
                token = Object.assign({}, token);
                // To minimize risk of user account hijacking we don't persist user refresh_token
                delete token.refresh_token;
            }
            return { token, userId, redirectUrl };
        }));
    }
    /**
     * Function called on each browser storage read.
     * Used to update state from browser -> state.
     */
    onRead(state) {
        if (state) {
            if (state.token) {
                this.authStorageService.setToken(state.token);
            }
            if (state.userId) {
                this.userIdService.setUserId(state.userId);
            }
            if (state.redirectUrl) {
                this.authRedirectStorageService.setRedirectUrl(state.redirectUrl);
            }
        }
    }
    /**
     * Reads synchronously state from storage and returns it.
     */
    readStateFromStorage() {
        return this.statePersistenceService.readStateFromStorage({
            key: this.key,
        });
    }
    /**
     * Check synchronously in browser storage if user is logged in (required by transfer state reducer).
     * For most cases `isUserLoggedIn` from the `AuthService` should be used instead of this.
     */
    isUserLoggedIn() {
        var _a, _b;
        return Boolean((_b = (_a = this.readStateFromStorage()) === null || _a === void 0 ? void 0 : _a.token) === null || _b === void 0 ? void 0 : _b.access_token);
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
AuthStatePersistenceService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AuthStatePersistenceService_Factory() { return new AuthStatePersistenceService(i0.ɵɵinject(i1.StatePersistenceService), i0.ɵɵinject(i2.UserIdService), i0.ɵɵinject(i3.AuthStorageService), i0.ɵɵinject(i4.AuthRedirectStorageService)); }, token: AuthStatePersistenceService, providedIn: "root" });
AuthStatePersistenceService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
AuthStatePersistenceService.ctorParameters = () => [
    { type: StatePersistenceService },
    { type: UserIdService },
    { type: AuthStorageService },
    { type: AuthRedirectStorageService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1zdGF0ZS1wZXJzaXN0ZW5jZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS9zcmMvYXV0aC91c2VyLWF1dGgvc2VydmljZXMvYXV0aC1zdGF0ZS1wZXJzaXN0ZW5jZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFFLGFBQWEsRUFBYyxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0QsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUM1RixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFMUQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDN0UsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7OztBQVc1RDs7R0FFRztBQUlILE1BQU0sT0FBTywyQkFBMkI7SUFHdEMsWUFDWSx1QkFBZ0QsRUFDaEQsYUFBNEIsRUFDNUIsa0JBQXNDLEVBQ3RDLDBCQUFzRDtRQUh0RCw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO1FBQ2hELGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdEMsK0JBQTBCLEdBQTFCLDBCQUEwQixDQUE0QjtRQU54RCxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFTNUM7O1dBRUc7UUFDTyxRQUFHLEdBQUcsTUFBTSxDQUFDO0lBTHBCLENBQUM7SUFPSjs7T0FFRztJQUNJLFFBQVE7UUFDYixJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FDbkIsSUFBSSxDQUFDLHVCQUF1QixDQUFDLGVBQWUsQ0FBQztZQUMzQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUc7WUFDYixNQUFNLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUMzQixNQUFNLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1NBQ3RDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7T0FHRztJQUNPLFlBQVk7UUFDcEIsT0FBTyxhQUFhLENBQUM7WUFDbkIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FDckMsTUFBTSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQzFCLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO2dCQUNaLHlCQUNLLEtBQUssRUFDUjtZQUNKLENBQUMsQ0FBQyxDQUNIO1lBQ0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUU7WUFDOUIsSUFBSSxDQUFDLDBCQUEwQixDQUFDLGNBQWMsRUFBRTtTQUNqRCxDQUFDLENBQUMsSUFBSSxDQUNMLEdBQUcsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLENBQUMsRUFBRSxFQUFFO1lBQ3ZDLElBQUksS0FBSyxHQUFHLFNBQVMsQ0FBQztZQUN0QixJQUFJLEtBQUssRUFBRTtnQkFDVCxLQUFLLHFCQUFRLEtBQUssQ0FBRSxDQUFDO2dCQUNyQixpRkFBaUY7Z0JBQ2pGLE9BQU8sS0FBSyxDQUFDLGFBQWEsQ0FBQzthQUM1QjtZQUNELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBRUQ7OztPQUdHO0lBQ08sTUFBTSxDQUFDLEtBQXNCO1FBQ3JDLElBQUksS0FBSyxFQUFFO1lBQ1QsSUFBSSxLQUFLLENBQUMsS0FBSyxFQUFFO2dCQUNmLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQy9DO1lBQ0QsSUFBSSxLQUFLLENBQUMsTUFBTSxFQUFFO2dCQUNoQixJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDNUM7WUFDRCxJQUFJLEtBQUssQ0FBQyxXQUFXLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQ25FO1NBQ0Y7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDTyxvQkFBb0I7UUFDNUIsT0FBTyxJQUFJLENBQUMsdUJBQXVCLENBQUMsb0JBQW9CLENBQWtCO1lBQ3hFLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRztTQUNkLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7O09BR0c7SUFDSSxjQUFjOztRQUNuQixPQUFPLE9BQU8sYUFBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsMENBQUUsS0FBSywwQ0FBRSxZQUFZLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbEMsQ0FBQzs7OztZQWpHRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7OztZQXBCUSx1QkFBdUI7WUFDdkIsYUFBYTtZQUdiLGtCQUFrQjtZQURsQiwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBTdGF0ZVBlcnNpc3RlbmNlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3N0YXRlL3NlcnZpY2VzL3N0YXRlLXBlcnNpc3RlbmNlLnNlcnZpY2UnO1xuaW1wb3J0IHsgVXNlcklkU2VydmljZSB9IGZyb20gJy4uL2ZhY2FkZS91c2VyLWlkLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aFRva2VuIH0gZnJvbSAnLi4vbW9kZWxzL2F1dGgtdG9rZW4ubW9kZWwnO1xuaW1wb3J0IHsgQXV0aFJlZGlyZWN0U3RvcmFnZVNlcnZpY2UgfSBmcm9tICcuL2F1dGgtcmVkaXJlY3Qtc3RvcmFnZS5zZXJ2aWNlJztcbmltcG9ydCB7IEF1dGhTdG9yYWdlU2VydmljZSB9IGZyb20gJy4vYXV0aC1zdG9yYWdlLnNlcnZpY2UnO1xuXG4vKipcbiAqIEF1dGggc3RhdGUgc3luY2VkIHRvIGJyb3dzZXIgc3RvcmFnZS5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTeW5jZWRBdXRoU3RhdGUge1xuICB1c2VySWQ/OiBzdHJpbmc7XG4gIHRva2VuPzogQXV0aFRva2VuO1xuICByZWRpcmVjdFVybD86IHN0cmluZztcbn1cblxuLyoqXG4gKiBSZXNwb25zaWJsZSBmb3Igc2F2aW5nIHRoZSBhdXRob3JpemF0aW9uIGRhdGEgKHVzZXJJZCwgdG9rZW4sIHJlZGlyZWN0VXJsKSBpbiBicm93c2VyIHN0b3JhZ2UuXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBBdXRoU3RhdGVQZXJzaXN0ZW5jZVNlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwcm90ZWN0ZWQgc3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBzdGF0ZVBlcnNpc3RlbmNlU2VydmljZTogU3RhdGVQZXJzaXN0ZW5jZVNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHVzZXJJZFNlcnZpY2U6IFVzZXJJZFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGF1dGhTdG9yYWdlU2VydmljZTogQXV0aFN0b3JhZ2VTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBhdXRoUmVkaXJlY3RTdG9yYWdlU2VydmljZTogQXV0aFJlZGlyZWN0U3RvcmFnZVNlcnZpY2VcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBJZGVudGlmaWVyIHVzZWQgZm9yIHN0b3JhZ2Uga2V5LlxuICAgKi9cbiAgcHJvdGVjdGVkIGtleSA9ICdhdXRoJztcblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdGhlIHN5bmNocm9uaXphdGlvbiBiZXR3ZWVuIHN0YXRlIGFuZCBicm93c2VyIHN0b3JhZ2UuXG4gICAqL1xuICBwdWJsaWMgaW5pdFN5bmMoKSB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkKFxuICAgICAgdGhpcy5zdGF0ZVBlcnNpc3RlbmNlU2VydmljZS5zeW5jV2l0aFN0b3JhZ2Uoe1xuICAgICAgICBrZXk6IHRoaXMua2V5LFxuICAgICAgICBzdGF0ZSQ6IHRoaXMuZ2V0QXV0aFN0YXRlKCksXG4gICAgICAgIG9uUmVhZDogKHN0YXRlKSA9PiB0aGlzLm9uUmVhZChzdGF0ZSksXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyBhbmQgdHJhbnNmb3JtcyBzdGF0ZSBmcm9tIGRpZmZlcmVudCBzb3VyY2VzIGludG8gdGhlIGZvcm0gdGhhdCBzaG91bGRcbiAgICogYmUgc2F2ZWQgaW4gc3RvcmFnZS5cbiAgICovXG4gIHByb3RlY3RlZCBnZXRBdXRoU3RhdGUoKTogT2JzZXJ2YWJsZTxTeW5jZWRBdXRoU3RhdGU+IHtcbiAgICByZXR1cm4gY29tYmluZUxhdGVzdChbXG4gICAgICB0aGlzLmF1dGhTdG9yYWdlU2VydmljZS5nZXRUb2tlbigpLnBpcGUoXG4gICAgICAgIGZpbHRlcigoc3RhdGUpID0+ICEhc3RhdGUpLFxuICAgICAgICBtYXAoKHN0YXRlKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgIH07XG4gICAgICAgIH0pXG4gICAgICApLFxuICAgICAgdGhpcy51c2VySWRTZXJ2aWNlLmdldFVzZXJJZCgpLFxuICAgICAgdGhpcy5hdXRoUmVkaXJlY3RTdG9yYWdlU2VydmljZS5nZXRSZWRpcmVjdFVybCgpLFxuICAgIF0pLnBpcGUoXG4gICAgICBtYXAoKFthdXRoVG9rZW4sIHVzZXJJZCwgcmVkaXJlY3RVcmxdKSA9PiB7XG4gICAgICAgIGxldCB0b2tlbiA9IGF1dGhUb2tlbjtcbiAgICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgICAgdG9rZW4gPSB7IC4uLnRva2VuIH07XG4gICAgICAgICAgLy8gVG8gbWluaW1pemUgcmlzayBvZiB1c2VyIGFjY291bnQgaGlqYWNraW5nIHdlIGRvbid0IHBlcnNpc3QgdXNlciByZWZyZXNoX3Rva2VuXG4gICAgICAgICAgZGVsZXRlIHRva2VuLnJlZnJlc2hfdG9rZW47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgdG9rZW4sIHVzZXJJZCwgcmVkaXJlY3RVcmwgfTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGdW5jdGlvbiBjYWxsZWQgb24gZWFjaCBicm93c2VyIHN0b3JhZ2UgcmVhZC5cbiAgICogVXNlZCB0byB1cGRhdGUgc3RhdGUgZnJvbSBicm93c2VyIC0+IHN0YXRlLlxuICAgKi9cbiAgcHJvdGVjdGVkIG9uUmVhZChzdGF0ZTogU3luY2VkQXV0aFN0YXRlKSB7XG4gICAgaWYgKHN0YXRlKSB7XG4gICAgICBpZiAoc3RhdGUudG9rZW4pIHtcbiAgICAgICAgdGhpcy5hdXRoU3RvcmFnZVNlcnZpY2Uuc2V0VG9rZW4oc3RhdGUudG9rZW4pO1xuICAgICAgfVxuICAgICAgaWYgKHN0YXRlLnVzZXJJZCkge1xuICAgICAgICB0aGlzLnVzZXJJZFNlcnZpY2Uuc2V0VXNlcklkKHN0YXRlLnVzZXJJZCk7XG4gICAgICB9XG4gICAgICBpZiAoc3RhdGUucmVkaXJlY3RVcmwpIHtcbiAgICAgICAgdGhpcy5hdXRoUmVkaXJlY3RTdG9yYWdlU2VydmljZS5zZXRSZWRpcmVjdFVybChzdGF0ZS5yZWRpcmVjdFVybCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlYWRzIHN5bmNocm9ub3VzbHkgc3RhdGUgZnJvbSBzdG9yYWdlIGFuZCByZXR1cm5zIGl0LlxuICAgKi9cbiAgcHJvdGVjdGVkIHJlYWRTdGF0ZUZyb21TdG9yYWdlKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlUGVyc2lzdGVuY2VTZXJ2aWNlLnJlYWRTdGF0ZUZyb21TdG9yYWdlPFN5bmNlZEF1dGhTdGF0ZT4oe1xuICAgICAga2V5OiB0aGlzLmtleSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBzeW5jaHJvbm91c2x5IGluIGJyb3dzZXIgc3RvcmFnZSBpZiB1c2VyIGlzIGxvZ2dlZCBpbiAocmVxdWlyZWQgYnkgdHJhbnNmZXIgc3RhdGUgcmVkdWNlcikuXG4gICAqIEZvciBtb3N0IGNhc2VzIGBpc1VzZXJMb2dnZWRJbmAgZnJvbSB0aGUgYEF1dGhTZXJ2aWNlYCBzaG91bGQgYmUgdXNlZCBpbnN0ZWFkIG9mIHRoaXMuXG4gICAqL1xuICBwdWJsaWMgaXNVc2VyTG9nZ2VkSW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIEJvb2xlYW4odGhpcy5yZWFkU3RhdGVGcm9tU3RvcmFnZSgpPy50b2tlbj8uYWNjZXNzX3Rva2VuKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==
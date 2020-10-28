import { Injectable } from '@angular/core';
import { BasicAuthService } from '../services/basic-auth.service';
import * as i0 from "@angular/core";
import * as i1 from "../services/basic-auth.service";
/**
 * Auth facade on BasicAuthService and AsmAuthService.
 * This service should be used in components, other core features.
 */
export class AuthService {
    constructor(basicAuthService) {
        this.basicAuthService = basicAuthService;
    }
    /**
     * Check params in url and if there is an code/token then try to login with those.
     */
    checkOAuthParamsInUrl() {
        this.basicAuthService.checkOAuthParamsInUrl();
    }
    /**
     * Initialize Implicit/Authorization Code flow by redirecting to OAuth server.
     */
    loginWithRedirect() {
        return this.basicAuthService.loginWithRedirect();
    }
    /**
     * Loads a new user token with Resource Owner Password Flow.
     * @param userId
     * @param password
     */
    authorize(userId, password) {
        this.basicAuthService.authorize(userId, password);
    }
    /**
     * Logout a storefront customer.
     */
    logout() {
        return this.basicAuthService.logout();
    }
    /**
     * Returns `true` if the user is logged in; and `false` if the user is anonymous.
     */
    isUserLoggedIn() {
        return this.basicAuthService.isUserLoggedIn();
    }
    /**
     * Initialize logout procedure by redirecting to the `logout` endpoint.
     */
    initLogout() {
        this.basicAuthService.initLogout();
    }
}
AuthService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AuthService_Factory() { return new AuthService(i0.ɵɵinject(i1.BasicAuthService)); }, token: AuthService, providedIn: "root" });
AuthService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
AuthService.ctorParameters = () => [
    { type: BasicAuthService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS9zcmMvYXV0aC91c2VyLWF1dGgvZmFjYWRlL2F1dGguc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOzs7QUFFbEU7OztHQUdHO0FBSUgsTUFBTSxPQUFPLFdBQVc7SUFDdEIsWUFBc0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFBRyxDQUFDO0lBRTVEOztPQUVHO0lBQ0kscUJBQXFCO1FBQzFCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0lBQ2hELENBQUM7SUFFRDs7T0FFRztJQUNJLGlCQUFpQjtRQUN0QixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQ25ELENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksU0FBUyxDQUFDLE1BQWMsRUFBRSxRQUFnQjtRQUMvQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQ7O09BRUc7SUFDSSxNQUFNO1FBQ1gsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDeEMsQ0FBQztJQUVEOztPQUVHO0lBQ0ksY0FBYztRQUNuQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUNoRCxDQUFDO0lBRUQ7O09BRUc7SUFDSSxVQUFVO1FBQ2YsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3JDLENBQUM7Ozs7WUFoREYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7WUFSUSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBCYXNpY0F1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvYmFzaWMtYXV0aC5zZXJ2aWNlJztcblxuLyoqXG4gKiBBdXRoIGZhY2FkZSBvbiBCYXNpY0F1dGhTZXJ2aWNlIGFuZCBBc21BdXRoU2VydmljZS5cbiAqIFRoaXMgc2VydmljZSBzaG91bGQgYmUgdXNlZCBpbiBjb21wb25lbnRzLCBvdGhlciBjb3JlIGZlYXR1cmVzLlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQXV0aFNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgYmFzaWNBdXRoU2VydmljZTogQmFzaWNBdXRoU2VydmljZSkge31cblxuICAvKipcbiAgICogQ2hlY2sgcGFyYW1zIGluIHVybCBhbmQgaWYgdGhlcmUgaXMgYW4gY29kZS90b2tlbiB0aGVuIHRyeSB0byBsb2dpbiB3aXRoIHRob3NlLlxuICAgKi9cbiAgcHVibGljIGNoZWNrT0F1dGhQYXJhbXNJblVybCgpOiB2b2lkIHtcbiAgICB0aGlzLmJhc2ljQXV0aFNlcnZpY2UuY2hlY2tPQXV0aFBhcmFtc0luVXJsKCk7XG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSBJbXBsaWNpdC9BdXRob3JpemF0aW9uIENvZGUgZmxvdyBieSByZWRpcmVjdGluZyB0byBPQXV0aCBzZXJ2ZXIuXG4gICAqL1xuICBwdWJsaWMgbG9naW5XaXRoUmVkaXJlY3QoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYmFzaWNBdXRoU2VydmljZS5sb2dpbldpdGhSZWRpcmVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIExvYWRzIGEgbmV3IHVzZXIgdG9rZW4gd2l0aCBSZXNvdXJjZSBPd25lciBQYXNzd29yZCBGbG93LlxuICAgKiBAcGFyYW0gdXNlcklkXG4gICAqIEBwYXJhbSBwYXNzd29yZFxuICAgKi9cbiAgcHVibGljIGF1dGhvcml6ZSh1c2VySWQ6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuYmFzaWNBdXRoU2VydmljZS5hdXRob3JpemUodXNlcklkLCBwYXNzd29yZCk7XG4gIH1cblxuICAvKipcbiAgICogTG9nb3V0IGEgc3RvcmVmcm9udCBjdXN0b21lci5cbiAgICovXG4gIHB1YmxpYyBsb2dvdXQoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5iYXNpY0F1dGhTZXJ2aWNlLmxvZ291dCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYHRydWVgIGlmIHRoZSB1c2VyIGlzIGxvZ2dlZCBpbjsgYW5kIGBmYWxzZWAgaWYgdGhlIHVzZXIgaXMgYW5vbnltb3VzLlxuICAgKi9cbiAgcHVibGljIGlzVXNlckxvZ2dlZEluKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLmJhc2ljQXV0aFNlcnZpY2UuaXNVc2VyTG9nZ2VkSW4oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIGxvZ291dCBwcm9jZWR1cmUgYnkgcmVkaXJlY3RpbmcgdG8gdGhlIGBsb2dvdXRgIGVuZHBvaW50LlxuICAgKi9cbiAgcHVibGljIGluaXRMb2dvdXQoKTogdm9pZCB7XG4gICAgdGhpcy5iYXNpY0F1dGhTZXJ2aWNlLmluaXRMb2dvdXQoKTtcbiAgfVxufVxuIl19
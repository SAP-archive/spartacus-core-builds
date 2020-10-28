import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
/**
 * Service serves storage role for AuthRedirectService.
 * Used by AuthStatePersistenceService to store redirect url for OAuth flows that rely on redirects.
 */
export class AuthRedirectStorageService {
    constructor() {
        this.redirectUrl$ = new BehaviorSubject(undefined);
    }
    /**
     * Get redirect url after logging in.
     *
     * @returns observable with the redirect url as string
     */
    getRedirectUrl() {
        return this.redirectUrl$;
    }
    /**
     * Set url to redirect to after login.
     *
     * @param redirectUrl
     */
    setRedirectUrl(redirectUrl) {
        this.redirectUrl$.next(redirectUrl);
    }
}
AuthRedirectStorageService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AuthRedirectStorageService_Factory() { return new AuthRedirectStorageService(); }, token: AuthRedirectStorageService, providedIn: "root" });
AuthRedirectStorageService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
AuthRedirectStorageService.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1yZWRpcmVjdC1zdG9yYWdlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3NyYy9hdXRoL3VzZXItYXV0aC9zZXJ2aWNlcy9hdXRoLXJlZGlyZWN0LXN0b3JhZ2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQWMsTUFBTSxNQUFNLENBQUM7O0FBRW5EOzs7R0FHRztBQUlILE1BQU0sT0FBTywwQkFBMEI7SUFDckM7UUFFUSxpQkFBWSxHQUF1QixJQUFJLGVBQWUsQ0FDNUQsU0FBUyxDQUNWLENBQUM7SUFKYSxDQUFDO0lBTWhCOzs7O09BSUc7SUFDSCxjQUFjO1FBQ1osT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzNCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsY0FBYyxDQUFDLFdBQW1CO1FBQy9CLElBQUksQ0FBQyxZQUF3QyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNuRSxDQUFDOzs7O1lBMUJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG4vKipcbiAqIFNlcnZpY2Ugc2VydmVzIHN0b3JhZ2Ugcm9sZSBmb3IgQXV0aFJlZGlyZWN0U2VydmljZS5cbiAqIFVzZWQgYnkgQXV0aFN0YXRlUGVyc2lzdGVuY2VTZXJ2aWNlIHRvIHN0b3JlIHJlZGlyZWN0IHVybCBmb3IgT0F1dGggZmxvd3MgdGhhdCByZWx5IG9uIHJlZGlyZWN0cy5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEF1dGhSZWRpcmVjdFN0b3JhZ2VTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIHByaXZhdGUgcmVkaXJlY3RVcmwkOiBPYnNlcnZhYmxlPHN0cmluZz4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4oXG4gICAgdW5kZWZpbmVkXG4gICk7XG5cbiAgLyoqXG4gICAqIEdldCByZWRpcmVjdCB1cmwgYWZ0ZXIgbG9nZ2luZyBpbi5cbiAgICpcbiAgICogQHJldHVybnMgb2JzZXJ2YWJsZSB3aXRoIHRoZSByZWRpcmVjdCB1cmwgYXMgc3RyaW5nXG4gICAqL1xuICBnZXRSZWRpcmVjdFVybCgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLnJlZGlyZWN0VXJsJDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdXJsIHRvIHJlZGlyZWN0IHRvIGFmdGVyIGxvZ2luLlxuICAgKlxuICAgKiBAcGFyYW0gcmVkaXJlY3RVcmxcbiAgICovXG4gIHNldFJlZGlyZWN0VXJsKHJlZGlyZWN0VXJsOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAodGhpcy5yZWRpcmVjdFVybCQgYXMgQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4pLm5leHQocmVkaXJlY3RVcmwpO1xuICB9XG59XG4iXX0=
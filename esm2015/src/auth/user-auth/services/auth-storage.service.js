import { Injectable } from '@angular/core';
import { OAuthStorage } from 'angular-oauth2-oidc';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
/**
 * Storage service for AuthToken. Used as a storage for angular-oauth2-oidc library.
 */
export class AuthStorageService extends OAuthStorage {
    constructor() {
        super(...arguments);
        this._token$ = new BehaviorSubject({});
    }
    decode(key, value) {
        if (AuthStorageService.nonStringifiedOAuthLibKeys.includes(key)) {
            return value;
        }
        return JSON.stringify(value);
    }
    encode(key, value) {
        if (AuthStorageService.nonStringifiedOAuthLibKeys.includes(key)) {
            return value;
        }
        else {
            try {
                return JSON.parse(value);
            }
            catch (_a) {
                return value;
            }
        }
    }
    /* Async API for spartacus use */
    /**
     * Returns complete token (all fields).
     *
     * @return observable emitting AuthToken
     */
    getToken() {
        return this._token$;
    }
    /**
     * Set current value of token.
     *
     * @param token
     */
    setToken(token) {
        this._token$.next(token);
    }
    /* Sync API for OAuth lib use */
    /**
     * Get parameter from the token (eg. access_token)
     *
     * @param key
     */
    getItem(key) {
        let token;
        this.getToken()
            .subscribe((currentToken) => (token = currentToken))
            .unsubscribe();
        return this.decode(key, token === null || token === void 0 ? void 0 : token[key]);
    }
    /**
     * Removes parameter from the token (eg. access_token)
     *
     * @param key
     */
    removeItem(key) {
        const val = Object.assign({}, this._token$.value);
        delete val[key];
        this._token$.next(Object.assign({}, val));
    }
    /**
     * Sets parameter of the token (eg. access_token)
     *
     * @param key
     */
    setItem(key, data) {
        if (key) {
            this._token$.next(Object.assign(Object.assign({}, this._token$.value), { [key]: this.encode(key, data) }));
        }
    }
}
/**
 * Extracted keys that are not `JSON.stringify` from reading the angular-oauth2-oidc source code
 */
AuthStorageService.nonStringifiedOAuthLibKeys = [
    'PKCE_verifier',
    'access_token',
    'refresh_token',
    'expires_at',
    'access_token_stored_at',
    'id_token',
    'id_token_expires_at',
    'id_token_stored_at',
    'session_state',
    'nonce',
];
AuthStorageService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AuthStorageService_Factory() { return new AuthStorageService(); }, token: AuthStorageService, providedIn: "root" });
AuthStorageService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1zdG9yYWdlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3NyYy9hdXRoL3VzZXItYXV0aC9zZXJ2aWNlcy9hdXRoLXN0b3JhZ2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDOztBQUduRDs7R0FFRztBQUlILE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxZQUFZO0lBSHBEOztRQW9CWSxZQUFPLEdBQTBCLElBQUksZUFBZSxDQUM1RCxFQUFlLENBQ2hCLENBQUM7S0FrRkg7SUFoRlcsTUFBTSxDQUFDLEdBQVcsRUFBRSxLQUFVO1FBQ3RDLElBQUksa0JBQWtCLENBQUMsMEJBQTBCLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQy9ELE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVTLE1BQU0sQ0FBQyxHQUFXLEVBQUUsS0FBVTtRQUN0QyxJQUFJLGtCQUFrQixDQUFDLDBCQUEwQixDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUMvRCxPQUFPLEtBQUssQ0FBQztTQUNkO2FBQU07WUFDTCxJQUFJO2dCQUNGLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUMxQjtZQUFDLFdBQU07Z0JBQ04sT0FBTyxLQUFLLENBQUM7YUFDZDtTQUNGO0lBQ0gsQ0FBQztJQUVELGlDQUFpQztJQUVqQzs7OztPQUlHO0lBQ0gsUUFBUTtRQUNOLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILFFBQVEsQ0FBQyxLQUFnQjtRQUN0QixJQUFJLENBQUMsT0FBc0MsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVELGdDQUFnQztJQUVoQzs7OztPQUlHO0lBQ0gsT0FBTyxDQUFDLEdBQVc7UUFDakIsSUFBSSxLQUFLLENBQUM7UUFDVixJQUFJLENBQUMsUUFBUSxFQUFFO2FBQ1osU0FBUyxDQUFDLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxZQUFZLENBQUMsQ0FBQzthQUNuRCxXQUFXLEVBQUUsQ0FBQztRQUNqQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEtBQUssYUFBTCxLQUFLLHVCQUFMLEtBQUssQ0FBRyxHQUFHLEVBQUUsQ0FBQztJQUN4QyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILFVBQVUsQ0FBQyxHQUFXO1FBQ3BCLE1BQU0sR0FBRyxxQkFBUyxJQUFJLENBQUMsT0FBc0MsQ0FBQyxLQUFLLENBQUUsQ0FBQztRQUN0RSxPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxPQUFzQyxDQUFDLElBQUksbUJBQzVDLEdBQUcsRUFDTixDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxPQUFPLENBQUMsR0FBVyxFQUFFLElBQVM7UUFDNUIsSUFBSSxHQUFHLEVBQUU7WUFDTixJQUFJLENBQUMsT0FBc0MsQ0FBQyxJQUFJLGlDQUMzQyxJQUFJLENBQUMsT0FBc0MsQ0FBQyxLQUFLLEtBQ3JELENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQzdCLENBQUM7U0FDSjtJQUNILENBQUM7O0FBbkdEOztHQUVHO0FBQ3VCLDZDQUEwQixHQUFHO0lBQ3JELGVBQWU7SUFDZixjQUFjO0lBQ2QsZUFBZTtJQUNmLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIsVUFBVTtJQUNWLHFCQUFxQjtJQUNyQixvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLE9BQU87Q0FDUixDQUFDOzs7WUFsQkgsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT0F1dGhTdG9yYWdlIH0gZnJvbSAnYW5ndWxhci1vYXV0aDItb2lkYyc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEF1dGhUb2tlbiB9IGZyb20gJy4uL21vZGVscy9hdXRoLXRva2VuLm1vZGVsJztcblxuLyoqXG4gKiBTdG9yYWdlIHNlcnZpY2UgZm9yIEF1dGhUb2tlbi4gVXNlZCBhcyBhIHN0b3JhZ2UgZm9yIGFuZ3VsYXItb2F1dGgyLW9pZGMgbGlicmFyeS5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEF1dGhTdG9yYWdlU2VydmljZSBleHRlbmRzIE9BdXRoU3RvcmFnZSB7XG4gIC8qKlxuICAgKiBFeHRyYWN0ZWQga2V5cyB0aGF0IGFyZSBub3QgYEpTT04uc3RyaW5naWZ5YCBmcm9tIHJlYWRpbmcgdGhlIGFuZ3VsYXItb2F1dGgyLW9pZGMgc291cmNlIGNvZGVcbiAgICovXG4gIHByb3RlY3RlZCBzdGF0aWMgcmVhZG9ubHkgbm9uU3RyaW5naWZpZWRPQXV0aExpYktleXMgPSBbXG4gICAgJ1BLQ0VfdmVyaWZpZXInLFxuICAgICdhY2Nlc3NfdG9rZW4nLFxuICAgICdyZWZyZXNoX3Rva2VuJyxcbiAgICAnZXhwaXJlc19hdCcsXG4gICAgJ2FjY2Vzc190b2tlbl9zdG9yZWRfYXQnLFxuICAgICdpZF90b2tlbicsXG4gICAgJ2lkX3Rva2VuX2V4cGlyZXNfYXQnLFxuICAgICdpZF90b2tlbl9zdG9yZWRfYXQnLFxuICAgICdzZXNzaW9uX3N0YXRlJyxcbiAgICAnbm9uY2UnLFxuICBdO1xuXG4gIHByb3RlY3RlZCBfdG9rZW4kOiBPYnNlcnZhYmxlPEF1dGhUb2tlbj4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEF1dGhUb2tlbj4oXG4gICAge30gYXMgQXV0aFRva2VuXG4gICk7XG5cbiAgcHJvdGVjdGVkIGRlY29kZShrZXk6IHN0cmluZywgdmFsdWU6IGFueSkge1xuICAgIGlmIChBdXRoU3RvcmFnZVNlcnZpY2Uubm9uU3RyaW5naWZpZWRPQXV0aExpYktleXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGVuY29kZShrZXk6IHN0cmluZywgdmFsdWU6IGFueSkge1xuICAgIGlmIChBdXRoU3RvcmFnZVNlcnZpY2Uubm9uU3RyaW5naWZpZWRPQXV0aExpYktleXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZSh2YWx1ZSk7XG4gICAgICB9IGNhdGNoIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qIEFzeW5jIEFQSSBmb3Igc3BhcnRhY3VzIHVzZSAqL1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGNvbXBsZXRlIHRva2VuIChhbGwgZmllbGRzKS5cbiAgICpcbiAgICogQHJldHVybiBvYnNlcnZhYmxlIGVtaXR0aW5nIEF1dGhUb2tlblxuICAgKi9cbiAgZ2V0VG9rZW4oKTogT2JzZXJ2YWJsZTxBdXRoVG9rZW4+IHtcbiAgICByZXR1cm4gdGhpcy5fdG9rZW4kO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBjdXJyZW50IHZhbHVlIG9mIHRva2VuLlxuICAgKlxuICAgKiBAcGFyYW0gdG9rZW5cbiAgICovXG4gIHNldFRva2VuKHRva2VuOiBBdXRoVG9rZW4pOiB2b2lkIHtcbiAgICAodGhpcy5fdG9rZW4kIGFzIEJlaGF2aW9yU3ViamVjdDxBdXRoVG9rZW4+KS5uZXh0KHRva2VuKTtcbiAgfVxuXG4gIC8qIFN5bmMgQVBJIGZvciBPQXV0aCBsaWIgdXNlICovXG5cbiAgLyoqXG4gICAqIEdldCBwYXJhbWV0ZXIgZnJvbSB0aGUgdG9rZW4gKGVnLiBhY2Nlc3NfdG9rZW4pXG4gICAqXG4gICAqIEBwYXJhbSBrZXlcbiAgICovXG4gIGdldEl0ZW0oa2V5OiBzdHJpbmcpOiBhbnkge1xuICAgIGxldCB0b2tlbjtcbiAgICB0aGlzLmdldFRva2VuKClcbiAgICAgIC5zdWJzY3JpYmUoKGN1cnJlbnRUb2tlbikgPT4gKHRva2VuID0gY3VycmVudFRva2VuKSlcbiAgICAgIC51bnN1YnNjcmliZSgpO1xuICAgIHJldHVybiB0aGlzLmRlY29kZShrZXksIHRva2VuPy5ba2V5XSk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBwYXJhbWV0ZXIgZnJvbSB0aGUgdG9rZW4gKGVnLiBhY2Nlc3NfdG9rZW4pXG4gICAqXG4gICAqIEBwYXJhbSBrZXlcbiAgICovXG4gIHJlbW92ZUl0ZW0oa2V5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCB2YWwgPSB7IC4uLih0aGlzLl90b2tlbiQgYXMgQmVoYXZpb3JTdWJqZWN0PEF1dGhUb2tlbj4pLnZhbHVlIH07XG4gICAgZGVsZXRlIHZhbFtrZXldO1xuICAgICh0aGlzLl90b2tlbiQgYXMgQmVoYXZpb3JTdWJqZWN0PEF1dGhUb2tlbj4pLm5leHQoe1xuICAgICAgLi4udmFsLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgcGFyYW1ldGVyIG9mIHRoZSB0b2tlbiAoZWcuIGFjY2Vzc190b2tlbilcbiAgICpcbiAgICogQHBhcmFtIGtleVxuICAgKi9cbiAgc2V0SXRlbShrZXk6IHN0cmluZywgZGF0YTogYW55KTogdm9pZCB7XG4gICAgaWYgKGtleSkge1xuICAgICAgKHRoaXMuX3Rva2VuJCBhcyBCZWhhdmlvclN1YmplY3Q8QXV0aFRva2VuPikubmV4dCh7XG4gICAgICAgIC4uLih0aGlzLl90b2tlbiQgYXMgQmVoYXZpb3JTdWJqZWN0PEF1dGhUb2tlbj4pLnZhbHVlLFxuICAgICAgICBba2V5XTogdGhpcy5lbmNvZGUoa2V5LCBkYXRhKSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIl19
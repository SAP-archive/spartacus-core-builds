import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthStorageService } from '../../auth/user-auth/services/auth-storage.service';
import * as i0 from "@angular/core";
/**
 * Indicates if auth token is for regular user or CS Agent.
 */
export var TokenTarget;
(function (TokenTarget) {
    TokenTarget["CSAgent"] = "CSAgent";
    TokenTarget["User"] = "User";
})(TokenTarget || (TokenTarget = {}));
/**
 * With AsmAuthStorageService apart from storing the token we also need to store
 * information for which user is the token (regular user or CS Agent).
 *
 * Overrides `AuthStorageService`.
 */
export class AsmAuthStorageService extends AuthStorageService {
    constructor() {
        super(...arguments);
        this._tokenTarget$ = new BehaviorSubject(TokenTarget.User);
    }
    /**
     * Get target user for current auth token.
     *
     * @return observable with TokenTarget
     */
    getTokenTarget() {
        return this._tokenTarget$;
    }
    /**
     * Set new token target.
     *
     * @param tokenTarget
     */
    setTokenTarget(tokenTarget) {
        this._tokenTarget$.next(tokenTarget);
    }
    /**
     * Get token for previously user session, when it was interrupted by CS agent login.
     *
     * @return previously logged in user token.
     */
    getEmulatedUserToken() {
        return this.emulatedUserToken;
    }
    /**
     * Save user token on CS agent login.
     *
     * @param token
     */
    setEmulatedUserToken(token) {
        this.emulatedUserToken = token;
    }
    /**
     * Change token target to CS Agent.
     */
    switchTokenTargetToCSAgent() {
        this._tokenTarget$.next(TokenTarget.CSAgent);
    }
    /**
     * Change token target to user.
     */
    switchTokenTargetToUser() {
        this._tokenTarget$.next(TokenTarget.User);
    }
    /**
     * When we start emulation from the UI (not by ASM login) we can't restore user session on cs agent logout.
     * Only available solution is to drop session we could restore, to avoid account hijack.
     */
    clearEmulatedUserToken() {
        this.emulatedUserToken = undefined;
    }
}
AsmAuthStorageService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AsmAuthStorageService_Factory() { return new AsmAuthStorageService(); }, token: AsmAuthStorageService, providedIn: "root" });
AsmAuthStorageService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNtLWF1dGgtc3RvcmFnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS9zcmMvYXNtL3NlcnZpY2VzL2FzbS1hdXRoLXN0b3JhZ2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFFbkQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7O0FBRXhGOztHQUVHO0FBQ0gsTUFBTSxDQUFOLElBQVksV0FHWDtBQUhELFdBQVksV0FBVztJQUNyQixrQ0FBbUIsQ0FBQTtJQUNuQiw0QkFBYSxDQUFBO0FBQ2YsQ0FBQyxFQUhXLFdBQVcsS0FBWCxXQUFXLFFBR3RCO0FBRUQ7Ozs7O0dBS0c7QUFJSCxNQUFNLE9BQU8scUJBQXNCLFNBQVEsa0JBQWtCO0lBSDdEOztRQUlZLGtCQUFhLEdBQTRCLElBQUksZUFBZSxDQUVwRSxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7S0FzRXJCO0lBM0RDOzs7O09BSUc7SUFDSCxjQUFjO1FBQ1osT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzVCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsY0FBYyxDQUFDLFdBQXdCO1FBQ3BDLElBQUksQ0FBQyxhQUE4QyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILG9CQUFvQjtRQUNsQixPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztJQUNoQyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILG9CQUFvQixDQUFDLEtBQWdCO1FBQ25DLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7SUFDakMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsMEJBQTBCO1FBQ3ZCLElBQUksQ0FBQyxhQUE4QyxDQUFDLElBQUksQ0FDdkQsV0FBVyxDQUFDLE9BQU8sQ0FDcEIsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNILHVCQUF1QjtRQUNwQixJQUFJLENBQUMsYUFBOEMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlFLENBQUM7SUFFRDs7O09BR0c7SUFDSCxzQkFBc0I7UUFDcEIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLFNBQVMsQ0FBQztJQUNyQyxDQUFDOzs7O1lBM0VGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQXV0aFRva2VuIH0gZnJvbSAnLi4vLi4vYXV0aC91c2VyLWF1dGgvbW9kZWxzL2F1dGgtdG9rZW4ubW9kZWwnO1xuaW1wb3J0IHsgQXV0aFN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYXV0aC91c2VyLWF1dGgvc2VydmljZXMvYXV0aC1zdG9yYWdlLnNlcnZpY2UnO1xuXG4vKipcbiAqIEluZGljYXRlcyBpZiBhdXRoIHRva2VuIGlzIGZvciByZWd1bGFyIHVzZXIgb3IgQ1MgQWdlbnQuXG4gKi9cbmV4cG9ydCBlbnVtIFRva2VuVGFyZ2V0IHtcbiAgQ1NBZ2VudCA9ICdDU0FnZW50JyxcbiAgVXNlciA9ICdVc2VyJyxcbn1cblxuLyoqXG4gKiBXaXRoIEFzbUF1dGhTdG9yYWdlU2VydmljZSBhcGFydCBmcm9tIHN0b3JpbmcgdGhlIHRva2VuIHdlIGFsc28gbmVlZCB0byBzdG9yZVxuICogaW5mb3JtYXRpb24gZm9yIHdoaWNoIHVzZXIgaXMgdGhlIHRva2VuIChyZWd1bGFyIHVzZXIgb3IgQ1MgQWdlbnQpLlxuICpcbiAqIE92ZXJyaWRlcyBgQXV0aFN0b3JhZ2VTZXJ2aWNlYC5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEFzbUF1dGhTdG9yYWdlU2VydmljZSBleHRlbmRzIEF1dGhTdG9yYWdlU2VydmljZSB7XG4gIHByb3RlY3RlZCBfdG9rZW5UYXJnZXQkOiBPYnNlcnZhYmxlPFRva2VuVGFyZ2V0PiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8XG4gICAgVG9rZW5UYXJnZXRcbiAgPihUb2tlblRhcmdldC5Vc2VyKTtcblxuICAvKipcbiAgICogV2hlbiBDUyBBZ2VudCBsb2dzIGluIGR1cmluZyByZWd1bGFyIHVzZXIgc2Vzc2lvbiB3ZSBzdG9yZSB0aGUgcmVndWxhclxuICAgKiB1c2VyIHRva2VuIHRvIHJlc3RvcmUgdGhlIHNlc3Npb24gYWZ0ZXIgQ1MgQWdlbnQgbG9nb3V0LlxuICAgKlxuICAgKiBUaGlzIHN1cHBvcnRzIGluLXN0b3JlIHVzZSBjYXNlIHdoZW4gQ1MgQWdlbnQgd2FudCdzIHRvIHF1aWNrbHkgaGVscFxuICAgKiBjdXN0b21lciBhbmQgdGhlbiBnaXZlIGFuIG9wdGlvbiB0byBjdXN0b21lciB0byBjb250aW51ZSB0aGUgcHJvY2Vzcy5cbiAgICovXG4gIHByb3RlY3RlZCBlbXVsYXRlZFVzZXJUb2tlbjogQXV0aFRva2VuO1xuXG4gIC8qKlxuICAgKiBHZXQgdGFyZ2V0IHVzZXIgZm9yIGN1cnJlbnQgYXV0aCB0b2tlbi5cbiAgICpcbiAgICogQHJldHVybiBvYnNlcnZhYmxlIHdpdGggVG9rZW5UYXJnZXRcbiAgICovXG4gIGdldFRva2VuVGFyZ2V0KCk6IE9ic2VydmFibGU8VG9rZW5UYXJnZXQ+IHtcbiAgICByZXR1cm4gdGhpcy5fdG9rZW5UYXJnZXQkO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldCBuZXcgdG9rZW4gdGFyZ2V0LlxuICAgKlxuICAgKiBAcGFyYW0gdG9rZW5UYXJnZXRcbiAgICovXG4gIHNldFRva2VuVGFyZ2V0KHRva2VuVGFyZ2V0OiBUb2tlblRhcmdldCk6IHZvaWQge1xuICAgICh0aGlzLl90b2tlblRhcmdldCQgYXMgQmVoYXZpb3JTdWJqZWN0PFRva2VuVGFyZ2V0PikubmV4dCh0b2tlblRhcmdldCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRva2VuIGZvciBwcmV2aW91c2x5IHVzZXIgc2Vzc2lvbiwgd2hlbiBpdCB3YXMgaW50ZXJydXB0ZWQgYnkgQ1MgYWdlbnQgbG9naW4uXG4gICAqXG4gICAqIEByZXR1cm4gcHJldmlvdXNseSBsb2dnZWQgaW4gdXNlciB0b2tlbi5cbiAgICovXG4gIGdldEVtdWxhdGVkVXNlclRva2VuKCk6IEF1dGhUb2tlbiB7XG4gICAgcmV0dXJuIHRoaXMuZW11bGF0ZWRVc2VyVG9rZW47XG4gIH1cblxuICAvKipcbiAgICogU2F2ZSB1c2VyIHRva2VuIG9uIENTIGFnZW50IGxvZ2luLlxuICAgKlxuICAgKiBAcGFyYW0gdG9rZW5cbiAgICovXG4gIHNldEVtdWxhdGVkVXNlclRva2VuKHRva2VuOiBBdXRoVG9rZW4pOiB2b2lkIHtcbiAgICB0aGlzLmVtdWxhdGVkVXNlclRva2VuID0gdG9rZW47XG4gIH1cblxuICAvKipcbiAgICogQ2hhbmdlIHRva2VuIHRhcmdldCB0byBDUyBBZ2VudC5cbiAgICovXG4gIHN3aXRjaFRva2VuVGFyZ2V0VG9DU0FnZW50KCk6IHZvaWQge1xuICAgICh0aGlzLl90b2tlblRhcmdldCQgYXMgQmVoYXZpb3JTdWJqZWN0PFRva2VuVGFyZ2V0PikubmV4dChcbiAgICAgIFRva2VuVGFyZ2V0LkNTQWdlbnRcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIENoYW5nZSB0b2tlbiB0YXJnZXQgdG8gdXNlci5cbiAgICovXG4gIHN3aXRjaFRva2VuVGFyZ2V0VG9Vc2VyKCk6IHZvaWQge1xuICAgICh0aGlzLl90b2tlblRhcmdldCQgYXMgQmVoYXZpb3JTdWJqZWN0PFRva2VuVGFyZ2V0PikubmV4dChUb2tlblRhcmdldC5Vc2VyKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGVuIHdlIHN0YXJ0IGVtdWxhdGlvbiBmcm9tIHRoZSBVSSAobm90IGJ5IEFTTSBsb2dpbikgd2UgY2FuJ3QgcmVzdG9yZSB1c2VyIHNlc3Npb24gb24gY3MgYWdlbnQgbG9nb3V0LlxuICAgKiBPbmx5IGF2YWlsYWJsZSBzb2x1dGlvbiBpcyB0byBkcm9wIHNlc3Npb24gd2UgY291bGQgcmVzdG9yZSwgdG8gYXZvaWQgYWNjb3VudCBoaWphY2suXG4gICAqL1xuICBjbGVhckVtdWxhdGVkVXNlclRva2VuKCk6IHZvaWQge1xuICAgIHRoaXMuZW11bGF0ZWRVc2VyVG9rZW4gPSB1bmRlZmluZWQ7XG4gIH1cbn1cbiJdfQ==
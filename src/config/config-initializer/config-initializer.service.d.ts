import { BehaviorSubject } from 'rxjs';
/**
 * Provides support for CONFIG_INITIALIZERS
 */
import * as ɵngcc0 from '@angular/core';
export declare class ConfigInitializerService {
    protected config: any;
    protected initializerGuard: any;
    constructor(config: any, initializerGuard: any);
    protected ongoingScopes$: BehaviorSubject<string[]>;
    /**
     * Returns true if config is stable, i.e. all CONFIG_INITIALIZERS resolved correctly
     */
    get isStable(): boolean;
    /**
     * Recommended way to get config for code that can run before app will finish
     * initialization (APP_INITIALIZERS, selected service constructors)
     *
     * Used without parameters waits for the whole config to become stable
     *
     * Parameters allow to describe which part of the config should be stable using
     * string describing config part, e.g.:
     * 'siteContext', 'siteContext.language', etc.
     *
     * @param scopes String describing parts of the config we want to be sure are stable
     */
    getStableConfig(...scopes: string[]): Promise<any>;
    /**
     * Removes provided scopes from currently ongoingScopes
     *
     * @param scopes
     */
    protected finishScopes(scopes: string[]): void;
    /**
     * Return true if provided scopes are not part of ongoingScopes
     *
     * @param scopes
     * @param ongoingScopes
     */
    protected areReady(scopes: string[], ongoingScopes: string[]): boolean;
    /**
     * Check if two scopes overlap.
     *
     * Example of scopes that overlap:
     * 'test' and 'test', 'test.a' and 'test', 'test' and 'test.a'
     *
     * Example of scopes that do not overlap:
     * 'test' and 'testA', 'test.a' and 'test.b', 'test.nested' and 'test.nest'
     *
     * @param a ScopeA
     * @param b ScopeB
     */
    protected scopesOverlap(a: string, b: string): boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ConfigInitializerService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLWluaXRpYWxpemVyLnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsiY29uZmlnLWluaXRpYWxpemVyLnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUFJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdEQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcbi8qKlxuICogUHJvdmlkZXMgc3VwcG9ydCBmb3IgQ09ORklHX0lOSVRJQUxJWkVSU1xuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDb25maWdJbml0aWFsaXplclNlcnZpY2Uge1xuICAgIHByb3RlY3RlZCBjb25maWc6IGFueTtcbiAgICBwcm90ZWN0ZWQgaW5pdGlhbGl6ZXJHdWFyZDogYW55O1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzogYW55LCBpbml0aWFsaXplckd1YXJkOiBhbnkpO1xuICAgIHByb3RlY3RlZCBvbmdvaW5nU2NvcGVzJDogQmVoYXZpb3JTdWJqZWN0PHN0cmluZ1tdPjtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgY29uZmlnIGlzIHN0YWJsZSwgaS5lLiBhbGwgQ09ORklHX0lOSVRJQUxJWkVSUyByZXNvbHZlZCBjb3JyZWN0bHlcbiAgICAgKi9cbiAgICBnZXQgaXNTdGFibGUoKTogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBSZWNvbW1lbmRlZCB3YXkgdG8gZ2V0IGNvbmZpZyBmb3IgY29kZSB0aGF0IGNhbiBydW4gYmVmb3JlIGFwcCB3aWxsIGZpbmlzaFxuICAgICAqIGluaXRpYWxpemF0aW9uIChBUFBfSU5JVElBTElaRVJTLCBzZWxlY3RlZCBzZXJ2aWNlIGNvbnN0cnVjdG9ycylcbiAgICAgKlxuICAgICAqIFVzZWQgd2l0aG91dCBwYXJhbWV0ZXJzIHdhaXRzIGZvciB0aGUgd2hvbGUgY29uZmlnIHRvIGJlY29tZSBzdGFibGVcbiAgICAgKlxuICAgICAqIFBhcmFtZXRlcnMgYWxsb3cgdG8gZGVzY3JpYmUgd2hpY2ggcGFydCBvZiB0aGUgY29uZmlnIHNob3VsZCBiZSBzdGFibGUgdXNpbmdcbiAgICAgKiBzdHJpbmcgZGVzY3JpYmluZyBjb25maWcgcGFydCwgZS5nLjpcbiAgICAgKiAnc2l0ZUNvbnRleHQnLCAnc2l0ZUNvbnRleHQubGFuZ3VhZ2UnLCBldGMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2NvcGVzIFN0cmluZyBkZXNjcmliaW5nIHBhcnRzIG9mIHRoZSBjb25maWcgd2Ugd2FudCB0byBiZSBzdXJlIGFyZSBzdGFibGVcbiAgICAgKi9cbiAgICBnZXRTdGFibGVDb25maWcoLi4uc2NvcGVzOiBzdHJpbmdbXSk6IFByb21pc2U8YW55PjtcbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIHByb3ZpZGVkIHNjb3BlcyBmcm9tIGN1cnJlbnRseSBvbmdvaW5nU2NvcGVzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2NvcGVzXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGZpbmlzaFNjb3BlcyhzY29wZXM6IHN0cmluZ1tdKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBSZXR1cm4gdHJ1ZSBpZiBwcm92aWRlZCBzY29wZXMgYXJlIG5vdCBwYXJ0IG9mIG9uZ29pbmdTY29wZXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSBzY29wZXNcbiAgICAgKiBAcGFyYW0gb25nb2luZ1Njb3Blc1xuICAgICAqL1xuICAgIHByb3RlY3RlZCBhcmVSZWFkeShzY29wZXM6IHN0cmluZ1tdLCBvbmdvaW5nU2NvcGVzOiBzdHJpbmdbXSk6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogQ2hlY2sgaWYgdHdvIHNjb3BlcyBvdmVybGFwLlxuICAgICAqXG4gICAgICogRXhhbXBsZSBvZiBzY29wZXMgdGhhdCBvdmVybGFwOlxuICAgICAqICd0ZXN0JyBhbmQgJ3Rlc3QnLCAndGVzdC5hJyBhbmQgJ3Rlc3QnLCAndGVzdCcgYW5kICd0ZXN0LmEnXG4gICAgICpcbiAgICAgKiBFeGFtcGxlIG9mIHNjb3BlcyB0aGF0IGRvIG5vdCBvdmVybGFwOlxuICAgICAqICd0ZXN0JyBhbmQgJ3Rlc3RBJywgJ3Rlc3QuYScgYW5kICd0ZXN0LmInLCAndGVzdC5uZXN0ZWQnIGFuZCAndGVzdC5uZXN0J1xuICAgICAqXG4gICAgICogQHBhcmFtIGEgU2NvcGVBXG4gICAgICogQHBhcmFtIGIgU2NvcGVCXG4gICAgICovXG4gICAgcHJvdGVjdGVkIHNjb3Blc092ZXJsYXAoYTogc3RyaW5nLCBiOiBzdHJpbmcpOiBib29sZWFuO1xufVxuIl19
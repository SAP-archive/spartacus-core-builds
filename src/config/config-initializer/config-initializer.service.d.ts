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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ConfigInitializerService, [null, { optional: true; }]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLWluaXRpYWxpemVyLnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsiY29uZmlnLWluaXRpYWxpemVyLnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUFJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdEQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuLyoqXG4gKiBQcm92aWRlcyBzdXBwb3J0IGZvciBDT05GSUdfSU5JVElBTElaRVJTXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENvbmZpZ0luaXRpYWxpemVyU2VydmljZSB7XG4gICAgcHJvdGVjdGVkIGNvbmZpZzogYW55O1xuICAgIHByb3RlY3RlZCBpbml0aWFsaXplckd1YXJkOiBhbnk7XG4gICAgY29uc3RydWN0b3IoY29uZmlnOiBhbnksIGluaXRpYWxpemVyR3VhcmQ6IGFueSk7XG4gICAgcHJvdGVjdGVkIG9uZ29pbmdTY29wZXMkOiBCZWhhdmlvclN1YmplY3Q8c3RyaW5nW10+O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiBjb25maWcgaXMgc3RhYmxlLCBpLmUuIGFsbCBDT05GSUdfSU5JVElBTElaRVJTIHJlc29sdmVkIGNvcnJlY3RseVxuICAgICAqL1xuICAgIGdldCBpc1N0YWJsZSgpOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIFJlY29tbWVuZGVkIHdheSB0byBnZXQgY29uZmlnIGZvciBjb2RlIHRoYXQgY2FuIHJ1biBiZWZvcmUgYXBwIHdpbGwgZmluaXNoXG4gICAgICogaW5pdGlhbGl6YXRpb24gKEFQUF9JTklUSUFMSVpFUlMsIHNlbGVjdGVkIHNlcnZpY2UgY29uc3RydWN0b3JzKVxuICAgICAqXG4gICAgICogVXNlZCB3aXRob3V0IHBhcmFtZXRlcnMgd2FpdHMgZm9yIHRoZSB3aG9sZSBjb25maWcgdG8gYmVjb21lIHN0YWJsZVxuICAgICAqXG4gICAgICogUGFyYW1ldGVycyBhbGxvdyB0byBkZXNjcmliZSB3aGljaCBwYXJ0IG9mIHRoZSBjb25maWcgc2hvdWxkIGJlIHN0YWJsZSB1c2luZ1xuICAgICAqIHN0cmluZyBkZXNjcmliaW5nIGNvbmZpZyBwYXJ0LCBlLmcuOlxuICAgICAqICdzaXRlQ29udGV4dCcsICdzaXRlQ29udGV4dC5sYW5ndWFnZScsIGV0Yy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBzY29wZXMgU3RyaW5nIGRlc2NyaWJpbmcgcGFydHMgb2YgdGhlIGNvbmZpZyB3ZSB3YW50IHRvIGJlIHN1cmUgYXJlIHN0YWJsZVxuICAgICAqL1xuICAgIGdldFN0YWJsZUNvbmZpZyguLi5zY29wZXM6IHN0cmluZ1tdKTogUHJvbWlzZTxhbnk+O1xuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgcHJvdmlkZWQgc2NvcGVzIGZyb20gY3VycmVudGx5IG9uZ29pbmdTY29wZXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSBzY29wZXNcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZmluaXNoU2NvcGVzKHNjb3Blczogc3RyaW5nW10pOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFJldHVybiB0cnVlIGlmIHByb3ZpZGVkIHNjb3BlcyBhcmUgbm90IHBhcnQgb2Ygb25nb2luZ1Njb3Blc1xuICAgICAqXG4gICAgICogQHBhcmFtIHNjb3Blc1xuICAgICAqIEBwYXJhbSBvbmdvaW5nU2NvcGVzXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGFyZVJlYWR5KHNjb3Blczogc3RyaW5nW10sIG9uZ29pbmdTY29wZXM6IHN0cmluZ1tdKTogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBDaGVjayBpZiB0d28gc2NvcGVzIG92ZXJsYXAuXG4gICAgICpcbiAgICAgKiBFeGFtcGxlIG9mIHNjb3BlcyB0aGF0IG92ZXJsYXA6XG4gICAgICogJ3Rlc3QnIGFuZCAndGVzdCcsICd0ZXN0LmEnIGFuZCAndGVzdCcsICd0ZXN0JyBhbmQgJ3Rlc3QuYSdcbiAgICAgKlxuICAgICAqIEV4YW1wbGUgb2Ygc2NvcGVzIHRoYXQgZG8gbm90IG92ZXJsYXA6XG4gICAgICogJ3Rlc3QnIGFuZCAndGVzdEEnLCAndGVzdC5hJyBhbmQgJ3Rlc3QuYicsICd0ZXN0Lm5lc3RlZCcgYW5kICd0ZXN0Lm5lc3QnXG4gICAgICpcbiAgICAgKiBAcGFyYW0gYSBTY29wZUFcbiAgICAgKiBAcGFyYW0gYiBTY29wZUJcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgc2NvcGVzT3ZlcmxhcChhOiBzdHJpbmcsIGI6IHN0cmluZyk6IGJvb2xlYW47XG59XG4iXX0=
import { InjectionToken, ModuleWithProviders } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare const TEST_CONFIG_COOKIE_NAME: InjectionToken<string>;
export declare function parseConfigJSON(config: string): any;
export declare function configFromCookieFactory(cookieName: string, platform: any, document: Document): any;
export interface TestConfigModuleOptions {
    cookie: string;
}
/**
 * Designed/intended to provide dynamic configuration for testing scenarios ONLY (e.g. e2e tests).
 *
 * CAUTION: DON'T USE IT IN PRODUCTION! IT HASN'T BEEN REVIEWED FOR SECURITY ISSUES.
 */
export declare class TestConfigModule {
    /**
     * Injects JSON config from the cookie of the given name.
     *
     * Be aware of the cookie limitations (4096 bytes).
     *
     * CAUTION: DON'T USE IT IN PRODUCTION! IT HASN'T BEEN REVIEWED FOR SECURITY ISSUES.
     */
    static forRoot(options: TestConfigModuleOptions): ModuleWithProviders<TestConfigModule>;
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<TestConfigModule, never, never, never>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<TestConfigModule>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC1jb25maWcubW9kdWxlLmQudHMiLCJzb3VyY2VzIjpbInRlc3QtY29uZmlnLm1vZHVsZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBOyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5leHBvcnQgZGVjbGFyZSBjb25zdCBURVNUX0NPTkZJR19DT09LSUVfTkFNRTogSW5qZWN0aW9uVG9rZW48c3RyaW5nPjtcbmV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIHBhcnNlQ29uZmlnSlNPTihjb25maWc6IHN0cmluZyk6IGFueTtcbmV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIGNvbmZpZ0Zyb21Db29raWVGYWN0b3J5KGNvb2tpZU5hbWU6IHN0cmluZywgcGxhdGZvcm06IGFueSwgZG9jdW1lbnQ6IERvY3VtZW50KTogYW55O1xuZXhwb3J0IGludGVyZmFjZSBUZXN0Q29uZmlnTW9kdWxlT3B0aW9ucyB7XG4gICAgY29va2llOiBzdHJpbmc7XG59XG4vKipcbiAqIERlc2lnbmVkL2ludGVuZGVkIHRvIHByb3ZpZGUgZHluYW1pYyBjb25maWd1cmF0aW9uIGZvciB0ZXN0aW5nIHNjZW5hcmlvcyBPTkxZIChlLmcuIGUyZSB0ZXN0cykuXG4gKlxuICogQ0FVVElPTjogRE9OJ1QgVVNFIElUIElOIFBST0RVQ1RJT04hIElUIEhBU04nVCBCRUVOIFJFVklFV0VEIEZPUiBTRUNVUklUWSBJU1NVRVMuXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFRlc3RDb25maWdNb2R1bGUge1xuICAgIC8qKlxuICAgICAqIEluamVjdHMgSlNPTiBjb25maWcgZnJvbSB0aGUgY29va2llIG9mIHRoZSBnaXZlbiBuYW1lLlxuICAgICAqXG4gICAgICogQmUgYXdhcmUgb2YgdGhlIGNvb2tpZSBsaW1pdGF0aW9ucyAoNDA5NiBieXRlcykuXG4gICAgICpcbiAgICAgKiBDQVVUSU9OOiBET04nVCBVU0UgSVQgSU4gUFJPRFVDVElPTiEgSVQgSEFTTidUIEJFRU4gUkVWSUVXRUQgRk9SIFNFQ1VSSVRZIElTU1VFUy5cbiAgICAgKi9cbiAgICBzdGF0aWMgZm9yUm9vdChvcHRpb25zOiBUZXN0Q29uZmlnTW9kdWxlT3B0aW9ucyk6IE1vZHVsZVdpdGhQcm92aWRlcnM8VGVzdENvbmZpZ01vZHVsZT47XG59XG4iXX0=
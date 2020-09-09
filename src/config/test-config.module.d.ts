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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC1jb25maWcubW9kdWxlLmQudHMiLCJzb3VyY2VzIjpbInRlc3QtY29uZmlnLm1vZHVsZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4sIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmV4cG9ydCBkZWNsYXJlIGNvbnN0IFRFU1RfQ09ORklHX0NPT0tJRV9OQU1FOiBJbmplY3Rpb25Ub2tlbjxzdHJpbmc+O1xuZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gcGFyc2VDb25maWdKU09OKGNvbmZpZzogc3RyaW5nKTogYW55O1xuZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gY29uZmlnRnJvbUNvb2tpZUZhY3RvcnkoY29va2llTmFtZTogc3RyaW5nLCBwbGF0Zm9ybTogYW55LCBkb2N1bWVudDogRG9jdW1lbnQpOiBhbnk7XG5leHBvcnQgaW50ZXJmYWNlIFRlc3RDb25maWdNb2R1bGVPcHRpb25zIHtcbiAgICBjb29raWU6IHN0cmluZztcbn1cbi8qKlxuICogRGVzaWduZWQvaW50ZW5kZWQgdG8gcHJvdmlkZSBkeW5hbWljIGNvbmZpZ3VyYXRpb24gZm9yIHRlc3Rpbmcgc2NlbmFyaW9zIE9OTFkgKGUuZy4gZTJlIHRlc3RzKS5cbiAqXG4gKiBDQVVUSU9OOiBET04nVCBVU0UgSVQgSU4gUFJPRFVDVElPTiEgSVQgSEFTTidUIEJFRU4gUkVWSUVXRUQgRk9SIFNFQ1VSSVRZIElTU1VFUy5cbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgVGVzdENvbmZpZ01vZHVsZSB7XG4gICAgLyoqXG4gICAgICogSW5qZWN0cyBKU09OIGNvbmZpZyBmcm9tIHRoZSBjb29raWUgb2YgdGhlIGdpdmVuIG5hbWUuXG4gICAgICpcbiAgICAgKiBCZSBhd2FyZSBvZiB0aGUgY29va2llIGxpbWl0YXRpb25zICg0MDk2IGJ5dGVzKS5cbiAgICAgKlxuICAgICAqIENBVVRJT046IERPTidUIFVTRSBJVCBJTiBQUk9EVUNUSU9OISBJVCBIQVNOJ1QgQkVFTiBSRVZJRVdFRCBGT1IgU0VDVVJJVFkgSVNTVUVTLlxuICAgICAqL1xuICAgIHN0YXRpYyBmb3JSb290KG9wdGlvbnM6IFRlc3RDb25maWdNb2R1bGVPcHRpb25zKTogTW9kdWxlV2l0aFByb3ZpZGVyczxUZXN0Q29uZmlnTW9kdWxlPjtcbn1cbiJdfQ==
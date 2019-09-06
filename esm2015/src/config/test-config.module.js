/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { InjectionToken, NgModule, PLATFORM_ID, } from '@angular/core';
import { provideConfigFactory } from './config.module';
import { getCookie } from './utils/get-cookie';
/** @type {?} */
export const TEST_CONFIG_COOKIE_NAME = new InjectionToken('TEST_CONFIG_COOKIE_NAME');
/**
 * @param {?} config
 * @return {?}
 */
export function parseConfigJSON(config) {
    try {
        return JSON.parse(config);
    }
    catch (_) {
        return {};
    }
}
/**
 * @param {?} cookieName
 * @param {?} platform
 * @param {?} document
 * @return {?}
 */
export function configFromCookieFactory(cookieName, platform, document) {
    if (isPlatformBrowser(platform) && cookieName) {
        /** @type {?} */
        const config = getCookie(document.cookie, cookieName);
        return parseConfigJSON(config);
    }
    return {};
}
/**
 * @record
 */
export function TestConfigModuleOptions() { }
if (false) {
    /** @type {?} */
    TestConfigModuleOptions.prototype.cookie;
}
/**
 * Designed/intended to provide dynamic configuration for testing scenarios ONLY (e.g. e2e tests).
 *
 * CAUTION: DON'T USE IT IN PRODUCTION! IT HASN'T BEEN REVIEWED FOR SECURITY ISSUES.
 */
export class TestConfigModule {
    /**
     * Injects JSON config from the cookie of the given name.
     *
     * Be aware of the cookie limitations (4096 bytes).
     *
     * CAUTION: DON'T USE IT IN PRODUCTION! IT HASN'T BEEN REVIEWED FOR SECURITY ISSUES.
     * @param {?} options
     * @return {?}
     */
    static forRoot(options) {
        return {
            ngModule: TestConfigModule,
            providers: [
                {
                    provide: TEST_CONFIG_COOKIE_NAME,
                    useValue: options && options.cookie,
                },
                provideConfigFactory(configFromCookieFactory, [
                    TEST_CONFIG_COOKIE_NAME,
                    PLATFORM_ID,
                    DOCUMENT,
                ]),
            ],
        };
    }
}
TestConfigModule.decorators = [
    { type: NgModule, args: [{},] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC1jb25maWcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NvbmZpZy90ZXN0LWNvbmZpZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM5RCxPQUFPLEVBQ0wsY0FBYyxFQUVkLFFBQVEsRUFDUixXQUFXLEdBQ1osTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztBQUUvQyxNQUFNLE9BQU8sdUJBQXVCLEdBQUcsSUFBSSxjQUFjLENBQ3ZELHlCQUF5QixDQUMxQjs7Ozs7QUFFRCxNQUFNLFVBQVUsZUFBZSxDQUFDLE1BQWM7SUFDNUMsSUFBSTtRQUNGLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUMzQjtJQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ1YsT0FBTyxFQUFFLENBQUM7S0FDWDtBQUNILENBQUM7Ozs7Ozs7QUFFRCxNQUFNLFVBQVUsdUJBQXVCLENBQ3JDLFVBQWtCLEVBQ2xCLFFBQWEsRUFDYixRQUFrQjtJQUVsQixJQUFJLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLFVBQVUsRUFBRTs7Y0FDdkMsTUFBTSxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQztRQUNyRCxPQUFPLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUNoQztJQUNELE9BQU8sRUFBRSxDQUFDO0FBQ1osQ0FBQzs7OztBQUVELDZDQUVDOzs7SUFEQyx5Q0FBZTs7Ozs7OztBQVNqQixNQUFNLE9BQU8sZ0JBQWdCOzs7Ozs7Ozs7O0lBUTNCLE1BQU0sQ0FBQyxPQUFPLENBQ1osT0FBZ0M7UUFFaEMsT0FBTztZQUNMLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsU0FBUyxFQUFFO2dCQUNUO29CQUNFLE9BQU8sRUFBRSx1QkFBdUI7b0JBQ2hDLFFBQVEsRUFBRSxPQUFPLElBQUksT0FBTyxDQUFDLE1BQU07aUJBQ3BDO2dCQUNELG9CQUFvQixDQUFDLHVCQUF1QixFQUFFO29CQUM1Qyx1QkFBdUI7b0JBQ3ZCLFdBQVc7b0JBQ1gsUUFBUTtpQkFDVCxDQUFDO2FBQ0g7U0FDRixDQUFDO0lBQ0osQ0FBQzs7O1lBMUJGLFFBQVEsU0FBQyxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQsIGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIEluamVjdGlvblRva2VuLFxuICBNb2R1bGVXaXRoUHJvdmlkZXJzLFxuICBOZ01vZHVsZSxcbiAgUExBVEZPUk1fSUQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgcHJvdmlkZUNvbmZpZ0ZhY3RvcnkgfSBmcm9tICcuL2NvbmZpZy5tb2R1bGUnO1xuaW1wb3J0IHsgZ2V0Q29va2llIH0gZnJvbSAnLi91dGlscy9nZXQtY29va2llJztcblxuZXhwb3J0IGNvbnN0IFRFU1RfQ09ORklHX0NPT0tJRV9OQU1FID0gbmV3IEluamVjdGlvblRva2VuPHN0cmluZz4oXG4gICdURVNUX0NPTkZJR19DT09LSUVfTkFNRSdcbik7XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUNvbmZpZ0pTT04oY29uZmlnOiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShjb25maWcpO1xuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maWdGcm9tQ29va2llRmFjdG9yeShcbiAgY29va2llTmFtZTogc3RyaW5nLFxuICBwbGF0Zm9ybTogYW55LFxuICBkb2N1bWVudDogRG9jdW1lbnRcbikge1xuICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIocGxhdGZvcm0pICYmIGNvb2tpZU5hbWUpIHtcbiAgICBjb25zdCBjb25maWcgPSBnZXRDb29raWUoZG9jdW1lbnQuY29va2llLCBjb29raWVOYW1lKTtcbiAgICByZXR1cm4gcGFyc2VDb25maWdKU09OKGNvbmZpZyk7XG4gIH1cbiAgcmV0dXJuIHt9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRlc3RDb25maWdNb2R1bGVPcHRpb25zIHtcbiAgY29va2llOiBzdHJpbmc7XG59XG5cbi8qKlxuICogRGVzaWduZWQvaW50ZW5kZWQgdG8gcHJvdmlkZSBkeW5hbWljIGNvbmZpZ3VyYXRpb24gZm9yIHRlc3Rpbmcgc2NlbmFyaW9zIE9OTFkgKGUuZy4gZTJlIHRlc3RzKS5cbiAqXG4gKiBDQVVUSU9OOiBET04nVCBVU0UgSVQgSU4gUFJPRFVDVElPTiEgSVQgSEFTTidUIEJFRU4gUkVWSUVXRUQgRk9SIFNFQ1VSSVRZIElTU1VFUy5cbiAqL1xuQE5nTW9kdWxlKHt9KVxuZXhwb3J0IGNsYXNzIFRlc3RDb25maWdNb2R1bGUge1xuICAvKipcbiAgICogSW5qZWN0cyBKU09OIGNvbmZpZyBmcm9tIHRoZSBjb29raWUgb2YgdGhlIGdpdmVuIG5hbWUuXG4gICAqXG4gICAqIEJlIGF3YXJlIG9mIHRoZSBjb29raWUgbGltaXRhdGlvbnMgKDQwOTYgYnl0ZXMpLlxuICAgKlxuICAgKiBDQVVUSU9OOiBET04nVCBVU0UgSVQgSU4gUFJPRFVDVElPTiEgSVQgSEFTTidUIEJFRU4gUkVWSUVXRUQgRk9SIFNFQ1VSSVRZIElTU1VFUy5cbiAgICovXG4gIHN0YXRpYyBmb3JSb290KFxuICAgIG9wdGlvbnM6IFRlc3RDb25maWdNb2R1bGVPcHRpb25zXG4gICk6IE1vZHVsZVdpdGhQcm92aWRlcnM8VGVzdENvbmZpZ01vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogVGVzdENvbmZpZ01vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogVEVTVF9DT05GSUdfQ09PS0lFX05BTUUsXG4gICAgICAgICAgdXNlVmFsdWU6IG9wdGlvbnMgJiYgb3B0aW9ucy5jb29raWUsXG4gICAgICAgIH0sXG4gICAgICAgIHByb3ZpZGVDb25maWdGYWN0b3J5KGNvbmZpZ0Zyb21Db29raWVGYWN0b3J5LCBbXG4gICAgICAgICAgVEVTVF9DT05GSUdfQ09PS0lFX05BTUUsXG4gICAgICAgICAgUExBVEZPUk1fSUQsXG4gICAgICAgICAgRE9DVU1FTlQsXG4gICAgICAgIF0pLFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXX0=
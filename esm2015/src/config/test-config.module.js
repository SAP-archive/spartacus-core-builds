/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        return JSON.parse(decodeURIComponent(config));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC1jb25maWcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NvbmZpZy90ZXN0LWNvbmZpZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM5RCxPQUFPLEVBQ0wsY0FBYyxFQUVkLFFBQVEsRUFDUixXQUFXLEdBQ1osTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztBQUUvQyxNQUFNLE9BQU8sdUJBQXVCLEdBQUcsSUFBSSxjQUFjLENBQ3ZELHlCQUF5QixDQUMxQjs7Ozs7QUFFRCxNQUFNLFVBQVUsZUFBZSxDQUFDLE1BQWM7SUFDNUMsSUFBSTtRQUNGLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0tBQy9DO0lBQUMsT0FBTyxDQUFDLEVBQUU7UUFDVixPQUFPLEVBQUUsQ0FBQztLQUNYO0FBQ0gsQ0FBQzs7Ozs7OztBQUVELE1BQU0sVUFBVSx1QkFBdUIsQ0FDckMsVUFBa0IsRUFDbEIsUUFBYSxFQUNiLFFBQWtCO0lBRWxCLElBQUksaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksVUFBVSxFQUFFOztjQUN2QyxNQUFNLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDO1FBQ3JELE9BQU8sZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQ2hDO0lBQ0QsT0FBTyxFQUFFLENBQUM7QUFDWixDQUFDOzs7O0FBRUQsNkNBRUM7OztJQURDLHlDQUFlOzs7Ozs7O0FBU2pCLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7Ozs7Ozs7SUFRM0IsTUFBTSxDQUFDLE9BQU8sQ0FDWixPQUFnQztRQUVoQyxPQUFPO1lBQ0wsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixTQUFTLEVBQUU7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLHVCQUF1QjtvQkFDaEMsUUFBUSxFQUFFLE9BQU8sSUFBSSxPQUFPLENBQUMsTUFBTTtpQkFDcEM7Z0JBQ0Qsb0JBQW9CLENBQUMsdUJBQXVCLEVBQUU7b0JBQzVDLHVCQUF1QjtvQkFDdkIsV0FBVztvQkFDWCxRQUFRO2lCQUNULENBQUM7YUFDSDtTQUNGLENBQUM7SUFDSixDQUFDOzs7WUExQkYsUUFBUSxTQUFDLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBET0NVTUVOVCwgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgSW5qZWN0aW9uVG9rZW4sXG4gIE1vZHVsZVdpdGhQcm92aWRlcnMsXG4gIE5nTW9kdWxlLFxuICBQTEFURk9STV9JRCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBwcm92aWRlQ29uZmlnRmFjdG9yeSB9IGZyb20gJy4vY29uZmlnLm1vZHVsZSc7XG5pbXBvcnQgeyBnZXRDb29raWUgfSBmcm9tICcuL3V0aWxzL2dldC1jb29raWUnO1xuXG5leHBvcnQgY29uc3QgVEVTVF9DT05GSUdfQ09PS0lFX05BTUUgPSBuZXcgSW5qZWN0aW9uVG9rZW48c3RyaW5nPihcbiAgJ1RFU1RfQ09ORklHX0NPT0tJRV9OQU1FJ1xuKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlQ29uZmlnSlNPTihjb25maWc6IHN0cmluZykge1xuICB0cnkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKGRlY29kZVVSSUNvbXBvbmVudChjb25maWcpKTtcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiB7fTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlnRnJvbUNvb2tpZUZhY3RvcnkoXG4gIGNvb2tpZU5hbWU6IHN0cmluZyxcbiAgcGxhdGZvcm06IGFueSxcbiAgZG9jdW1lbnQ6IERvY3VtZW50XG4pIHtcbiAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHBsYXRmb3JtKSAmJiBjb29raWVOYW1lKSB7XG4gICAgY29uc3QgY29uZmlnID0gZ2V0Q29va2llKGRvY3VtZW50LmNvb2tpZSwgY29va2llTmFtZSk7XG4gICAgcmV0dXJuIHBhcnNlQ29uZmlnSlNPTihjb25maWcpO1xuICB9XG4gIHJldHVybiB7fTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUZXN0Q29uZmlnTW9kdWxlT3B0aW9ucyB7XG4gIGNvb2tpZTogc3RyaW5nO1xufVxuXG4vKipcbiAqIERlc2lnbmVkL2ludGVuZGVkIHRvIHByb3ZpZGUgZHluYW1pYyBjb25maWd1cmF0aW9uIGZvciB0ZXN0aW5nIHNjZW5hcmlvcyBPTkxZIChlLmcuIGUyZSB0ZXN0cykuXG4gKlxuICogQ0FVVElPTjogRE9OJ1QgVVNFIElUIElOIFBST0RVQ1RJT04hIElUIEhBU04nVCBCRUVOIFJFVklFV0VEIEZPUiBTRUNVUklUWSBJU1NVRVMuXG4gKi9cbkBOZ01vZHVsZSh7fSlcbmV4cG9ydCBjbGFzcyBUZXN0Q29uZmlnTW9kdWxlIHtcbiAgLyoqXG4gICAqIEluamVjdHMgSlNPTiBjb25maWcgZnJvbSB0aGUgY29va2llIG9mIHRoZSBnaXZlbiBuYW1lLlxuICAgKlxuICAgKiBCZSBhd2FyZSBvZiB0aGUgY29va2llIGxpbWl0YXRpb25zICg0MDk2IGJ5dGVzKS5cbiAgICpcbiAgICogQ0FVVElPTjogRE9OJ1QgVVNFIElUIElOIFBST0RVQ1RJT04hIElUIEhBU04nVCBCRUVOIFJFVklFV0VEIEZPUiBTRUNVUklUWSBJU1NVRVMuXG4gICAqL1xuICBzdGF0aWMgZm9yUm9vdChcbiAgICBvcHRpb25zOiBUZXN0Q29uZmlnTW9kdWxlT3B0aW9uc1xuICApOiBNb2R1bGVXaXRoUHJvdmlkZXJzPFRlc3RDb25maWdNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFRlc3RDb25maWdNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IFRFU1RfQ09ORklHX0NPT0tJRV9OQU1FLFxuICAgICAgICAgIHVzZVZhbHVlOiBvcHRpb25zICYmIG9wdGlvbnMuY29va2llLFxuICAgICAgICB9LFxuICAgICAgICBwcm92aWRlQ29uZmlnRmFjdG9yeShjb25maWdGcm9tQ29va2llRmFjdG9yeSwgW1xuICAgICAgICAgIFRFU1RfQ09ORklHX0NPT0tJRV9OQU1FLFxuICAgICAgICAgIFBMQVRGT1JNX0lELFxuICAgICAgICAgIERPQ1VNRU5ULFxuICAgICAgICBdKSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19
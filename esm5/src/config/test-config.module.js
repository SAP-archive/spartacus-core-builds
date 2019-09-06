/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { InjectionToken, NgModule, PLATFORM_ID, } from '@angular/core';
import { provideConfigFactory } from './config.module';
import { getCookie } from './utils/get-cookie';
/** @type {?} */
export var TEST_CONFIG_COOKIE_NAME = new InjectionToken('TEST_CONFIG_COOKIE_NAME');
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
        var config = getCookie(document.cookie, cookieName);
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
var TestConfigModule = /** @class */ (function () {
    function TestConfigModule() {
    }
    /**
     * Injects JSON config from the cookie of the given name.
     *
     * Be aware of the cookie limitations (4096 bytes).
     *
     * CAUTION: DON'T USE IT IN PRODUCTION! IT HASN'T BEEN REVIEWED FOR SECURITY ISSUES.
     */
    /**
     * Injects JSON config from the cookie of the given name.
     *
     * Be aware of the cookie limitations (4096 bytes).
     *
     * CAUTION: DON'T USE IT IN PRODUCTION! IT HASN'T BEEN REVIEWED FOR SECURITY ISSUES.
     * @param {?} options
     * @return {?}
     */
    TestConfigModule.forRoot = /**
     * Injects JSON config from the cookie of the given name.
     *
     * Be aware of the cookie limitations (4096 bytes).
     *
     * CAUTION: DON'T USE IT IN PRODUCTION! IT HASN'T BEEN REVIEWED FOR SECURITY ISSUES.
     * @param {?} options
     * @return {?}
     */
    function (options) {
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
    };
    TestConfigModule.decorators = [
        { type: NgModule, args: [{},] }
    ];
    return TestConfigModule;
}());
export { TestConfigModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC1jb25maWcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NvbmZpZy90ZXN0LWNvbmZpZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM5RCxPQUFPLEVBQ0wsY0FBYyxFQUVkLFFBQVEsRUFDUixXQUFXLEdBQ1osTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztBQUUvQyxNQUFNLEtBQU8sdUJBQXVCLEdBQUcsSUFBSSxjQUFjLENBQ3ZELHlCQUF5QixDQUMxQjs7Ozs7QUFFRCxNQUFNLFVBQVUsZUFBZSxDQUFDLE1BQWM7SUFDNUMsSUFBSTtRQUNGLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUMzQjtJQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ1YsT0FBTyxFQUFFLENBQUM7S0FDWDtBQUNILENBQUM7Ozs7Ozs7QUFFRCxNQUFNLFVBQVUsdUJBQXVCLENBQ3JDLFVBQWtCLEVBQ2xCLFFBQWEsRUFDYixRQUFrQjtJQUVsQixJQUFJLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLFVBQVUsRUFBRTs7WUFDdkMsTUFBTSxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQztRQUNyRCxPQUFPLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUNoQztJQUNELE9BQU8sRUFBRSxDQUFDO0FBQ1osQ0FBQzs7OztBQUVELDZDQUVDOzs7SUFEQyx5Q0FBZTs7Ozs7OztBQVFqQjtJQUFBO0lBMkJBLENBQUM7SUF6QkM7Ozs7OztPQU1HOzs7Ozs7Ozs7O0lBQ0ksd0JBQU87Ozs7Ozs7OztJQUFkLFVBQ0UsT0FBZ0M7UUFFaEMsT0FBTztZQUNMLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsU0FBUyxFQUFFO2dCQUNUO29CQUNFLE9BQU8sRUFBRSx1QkFBdUI7b0JBQ2hDLFFBQVEsRUFBRSxPQUFPLElBQUksT0FBTyxDQUFDLE1BQU07aUJBQ3BDO2dCQUNELG9CQUFvQixDQUFDLHVCQUF1QixFQUFFO29CQUM1Qyx1QkFBdUI7b0JBQ3ZCLFdBQVc7b0JBQ1gsUUFBUTtpQkFDVCxDQUFDO2FBQ0g7U0FDRixDQUFDO0lBQ0osQ0FBQzs7Z0JBMUJGLFFBQVEsU0FBQyxFQUFFOztJQTJCWix1QkFBQztDQUFBLEFBM0JELElBMkJDO1NBMUJZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERPQ1VNRU5ULCBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBJbmplY3Rpb25Ub2tlbixcbiAgTW9kdWxlV2l0aFByb3ZpZGVycyxcbiAgTmdNb2R1bGUsXG4gIFBMQVRGT1JNX0lELFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHByb3ZpZGVDb25maWdGYWN0b3J5IH0gZnJvbSAnLi9jb25maWcubW9kdWxlJztcbmltcG9ydCB7IGdldENvb2tpZSB9IGZyb20gJy4vdXRpbHMvZ2V0LWNvb2tpZSc7XG5cbmV4cG9ydCBjb25zdCBURVNUX0NPTkZJR19DT09LSUVfTkFNRSA9IG5ldyBJbmplY3Rpb25Ub2tlbjxzdHJpbmc+KFxuICAnVEVTVF9DT05GSUdfQ09PS0lFX05BTUUnXG4pO1xuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VDb25maWdKU09OKGNvbmZpZzogc3RyaW5nKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoY29uZmlnKTtcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiB7fTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlnRnJvbUNvb2tpZUZhY3RvcnkoXG4gIGNvb2tpZU5hbWU6IHN0cmluZyxcbiAgcGxhdGZvcm06IGFueSxcbiAgZG9jdW1lbnQ6IERvY3VtZW50XG4pIHtcbiAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHBsYXRmb3JtKSAmJiBjb29raWVOYW1lKSB7XG4gICAgY29uc3QgY29uZmlnID0gZ2V0Q29va2llKGRvY3VtZW50LmNvb2tpZSwgY29va2llTmFtZSk7XG4gICAgcmV0dXJuIHBhcnNlQ29uZmlnSlNPTihjb25maWcpO1xuICB9XG4gIHJldHVybiB7fTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUZXN0Q29uZmlnTW9kdWxlT3B0aW9ucyB7XG4gIGNvb2tpZTogc3RyaW5nO1xufVxuXG4vKipcbiAqIERlc2lnbmVkL2ludGVuZGVkIHRvIHByb3ZpZGUgZHluYW1pYyBjb25maWd1cmF0aW9uIGZvciB0ZXN0aW5nIHNjZW5hcmlvcyBPTkxZIChlLmcuIGUyZSB0ZXN0cykuXG4gKlxuICogQ0FVVElPTjogRE9OJ1QgVVNFIElUIElOIFBST0RVQ1RJT04hIElUIEhBU04nVCBCRUVOIFJFVklFV0VEIEZPUiBTRUNVUklUWSBJU1NVRVMuXG4gKi9cbkBOZ01vZHVsZSh7fSlcbmV4cG9ydCBjbGFzcyBUZXN0Q29uZmlnTW9kdWxlIHtcbiAgLyoqXG4gICAqIEluamVjdHMgSlNPTiBjb25maWcgZnJvbSB0aGUgY29va2llIG9mIHRoZSBnaXZlbiBuYW1lLlxuICAgKlxuICAgKiBCZSBhd2FyZSBvZiB0aGUgY29va2llIGxpbWl0YXRpb25zICg0MDk2IGJ5dGVzKS5cbiAgICpcbiAgICogQ0FVVElPTjogRE9OJ1QgVVNFIElUIElOIFBST0RVQ1RJT04hIElUIEhBU04nVCBCRUVOIFJFVklFV0VEIEZPUiBTRUNVUklUWSBJU1NVRVMuXG4gICAqL1xuICBzdGF0aWMgZm9yUm9vdChcbiAgICBvcHRpb25zOiBUZXN0Q29uZmlnTW9kdWxlT3B0aW9uc1xuICApOiBNb2R1bGVXaXRoUHJvdmlkZXJzPFRlc3RDb25maWdNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFRlc3RDb25maWdNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IFRFU1RfQ09ORklHX0NPT0tJRV9OQU1FLFxuICAgICAgICAgIHVzZVZhbHVlOiBvcHRpb25zICYmIG9wdGlvbnMuY29va2llLFxuICAgICAgICB9LFxuICAgICAgICBwcm92aWRlQ29uZmlnRmFjdG9yeShjb25maWdGcm9tQ29va2llRmFjdG9yeSwgW1xuICAgICAgICAgIFRFU1RfQ09ORklHX0NPT0tJRV9OQU1FLFxuICAgICAgICAgIFBMQVRGT1JNX0lELFxuICAgICAgICAgIERPQ1VNRU5ULFxuICAgICAgICBdKSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19
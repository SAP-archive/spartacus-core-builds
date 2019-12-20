/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC1jb25maWcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NvbmZpZy90ZXN0LWNvbmZpZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM5RCxPQUFPLEVBQ0wsY0FBYyxFQUVkLFFBQVEsRUFDUixXQUFXLEdBQ1osTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztBQUUvQyxNQUFNLEtBQU8sdUJBQXVCLEdBQUcsSUFBSSxjQUFjLENBQ3ZELHlCQUF5QixDQUMxQjs7Ozs7QUFFRCxNQUFNLFVBQVUsZUFBZSxDQUFDLE1BQWM7SUFDNUMsSUFBSTtRQUNGLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0tBQy9DO0lBQUMsT0FBTyxDQUFDLEVBQUU7UUFDVixPQUFPLEVBQUUsQ0FBQztLQUNYO0FBQ0gsQ0FBQzs7Ozs7OztBQUVELE1BQU0sVUFBVSx1QkFBdUIsQ0FDckMsVUFBa0IsRUFDbEIsUUFBYSxFQUNiLFFBQWtCO0lBRWxCLElBQUksaUJBQWlCLENBQUMsUUFBUSxDQUFDLElBQUksVUFBVSxFQUFFOztZQUN2QyxNQUFNLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDO1FBQ3JELE9BQU8sZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQ2hDO0lBQ0QsT0FBTyxFQUFFLENBQUM7QUFDWixDQUFDOzs7O0FBRUQsNkNBRUM7OztJQURDLHlDQUFlOzs7Ozs7O0FBUWpCO0lBQUE7SUEyQkEsQ0FBQztJQXpCQzs7Ozs7O09BTUc7Ozs7Ozs7Ozs7SUFDSSx3QkFBTzs7Ozs7Ozs7O0lBQWQsVUFDRSxPQUFnQztRQUVoQyxPQUFPO1lBQ0wsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixTQUFTLEVBQUU7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLHVCQUF1QjtvQkFDaEMsUUFBUSxFQUFFLE9BQU8sSUFBSSxPQUFPLENBQUMsTUFBTTtpQkFDcEM7Z0JBQ0Qsb0JBQW9CLENBQUMsdUJBQXVCLEVBQUU7b0JBQzVDLHVCQUF1QjtvQkFDdkIsV0FBVztvQkFDWCxRQUFRO2lCQUNULENBQUM7YUFDSDtTQUNGLENBQUM7SUFDSixDQUFDOztnQkExQkYsUUFBUSxTQUFDLEVBQUU7O0lBMkJaLHVCQUFDO0NBQUEsQUEzQkQsSUEyQkM7U0ExQlksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQsIGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIEluamVjdGlvblRva2VuLFxuICBNb2R1bGVXaXRoUHJvdmlkZXJzLFxuICBOZ01vZHVsZSxcbiAgUExBVEZPUk1fSUQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgcHJvdmlkZUNvbmZpZ0ZhY3RvcnkgfSBmcm9tICcuL2NvbmZpZy5tb2R1bGUnO1xuaW1wb3J0IHsgZ2V0Q29va2llIH0gZnJvbSAnLi91dGlscy9nZXQtY29va2llJztcblxuZXhwb3J0IGNvbnN0IFRFU1RfQ09ORklHX0NPT0tJRV9OQU1FID0gbmV3IEluamVjdGlvblRva2VuPHN0cmluZz4oXG4gICdURVNUX0NPTkZJR19DT09LSUVfTkFNRSdcbik7XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUNvbmZpZ0pTT04oY29uZmlnOiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShkZWNvZGVVUklDb21wb25lbnQoY29uZmlnKSk7XG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4ge307XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ0Zyb21Db29raWVGYWN0b3J5KFxuICBjb29raWVOYW1lOiBzdHJpbmcsXG4gIHBsYXRmb3JtOiBhbnksXG4gIGRvY3VtZW50OiBEb2N1bWVudFxuKSB7XG4gIGlmIChpc1BsYXRmb3JtQnJvd3NlcihwbGF0Zm9ybSkgJiYgY29va2llTmFtZSkge1xuICAgIGNvbnN0IGNvbmZpZyA9IGdldENvb2tpZShkb2N1bWVudC5jb29raWUsIGNvb2tpZU5hbWUpO1xuICAgIHJldHVybiBwYXJzZUNvbmZpZ0pTT04oY29uZmlnKTtcbiAgfVxuICByZXR1cm4ge307XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGVzdENvbmZpZ01vZHVsZU9wdGlvbnMge1xuICBjb29raWU6IHN0cmluZztcbn1cblxuLyoqXG4gKiBEZXNpZ25lZC9pbnRlbmRlZCB0byBwcm92aWRlIGR5bmFtaWMgY29uZmlndXJhdGlvbiBmb3IgdGVzdGluZyBzY2VuYXJpb3MgT05MWSAoZS5nLiBlMmUgdGVzdHMpLlxuICpcbiAqIENBVVRJT046IERPTidUIFVTRSBJVCBJTiBQUk9EVUNUSU9OISBJVCBIQVNOJ1QgQkVFTiBSRVZJRVdFRCBGT1IgU0VDVVJJVFkgSVNTVUVTLlxuICovXG5ATmdNb2R1bGUoe30pXG5leHBvcnQgY2xhc3MgVGVzdENvbmZpZ01vZHVsZSB7XG4gIC8qKlxuICAgKiBJbmplY3RzIEpTT04gY29uZmlnIGZyb20gdGhlIGNvb2tpZSBvZiB0aGUgZ2l2ZW4gbmFtZS5cbiAgICpcbiAgICogQmUgYXdhcmUgb2YgdGhlIGNvb2tpZSBsaW1pdGF0aW9ucyAoNDA5NiBieXRlcykuXG4gICAqXG4gICAqIENBVVRJT046IERPTidUIFVTRSBJVCBJTiBQUk9EVUNUSU9OISBJVCBIQVNOJ1QgQkVFTiBSRVZJRVdFRCBGT1IgU0VDVVJJVFkgSVNTVUVTLlxuICAgKi9cbiAgc3RhdGljIGZvclJvb3QoXG4gICAgb3B0aW9uczogVGVzdENvbmZpZ01vZHVsZU9wdGlvbnNcbiAgKTogTW9kdWxlV2l0aFByb3ZpZGVyczxUZXN0Q29uZmlnTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBUZXN0Q29uZmlnTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBURVNUX0NPTkZJR19DT09LSUVfTkFNRSxcbiAgICAgICAgICB1c2VWYWx1ZTogb3B0aW9ucyAmJiBvcHRpb25zLmNvb2tpZSxcbiAgICAgICAgfSxcbiAgICAgICAgcHJvdmlkZUNvbmZpZ0ZhY3RvcnkoY29uZmlnRnJvbUNvb2tpZUZhY3RvcnksIFtcbiAgICAgICAgICBURVNUX0NPTkZJR19DT09LSUVfTkFNRSxcbiAgICAgICAgICBQTEFURk9STV9JRCxcbiAgICAgICAgICBET0NVTUVOVCxcbiAgICAgICAgXSksXG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { APP_INITIALIZER, isDevMode, NgModule, Optional, } from '@angular/core';
import { ConfigInitializerService } from '../config-initializer/config-initializer.service';
import { ConfigValidatorToken, validateConfig, } from './config-validator';
/**
 * @param {?} configInitializer
 * @param {?} validators
 * @return {?}
 */
export function configValidatorFactory(configInitializer, validators) {
    /** @type {?} */
    var validate = (/**
     * @return {?}
     */
    function () {
        if (isDevMode()) {
            configInitializer
                .getStableConfig()
                .then((/**
             * @param {?} config
             * @return {?}
             */
            function (config) { return validateConfig(config, validators || []); }));
        }
    });
    return validate;
}
/**
 * Should stay private in 1.x
 * as forRoot() is used internally by ConfigInitializerModule
 *
 * issue: #5279
 */
var ConfigValidatorModule = /** @class */ (function () {
    function ConfigValidatorModule() {
    }
    /**
     * @return {?}
     */
    ConfigValidatorModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: ConfigValidatorModule,
            providers: [
                {
                    provide: APP_INITIALIZER,
                    multi: true,
                    useFactory: configValidatorFactory,
                    deps: [
                        ConfigInitializerService,
                        [new Optional(), ConfigValidatorToken],
                    ],
                },
            ],
        };
    };
    ConfigValidatorModule.decorators = [
        { type: NgModule }
    ];
    return ConfigValidatorModule;
}());
export { ConfigValidatorModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLXZhbGlkYXRvci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY29uZmlnL2NvbmZpZy12YWxpZGF0b3IvY29uZmlnLXZhbGlkYXRvci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxlQUFlLEVBQ2YsU0FBUyxFQUVULFFBQVEsRUFDUixRQUFRLEdBQ1QsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDNUYsT0FBTyxFQUVMLG9CQUFvQixFQUNwQixjQUFjLEdBQ2YsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7O0FBRTVCLE1BQU0sVUFBVSxzQkFBc0IsQ0FDcEMsaUJBQTJDLEVBQzNDLFVBQTZCOztRQUV2QixRQUFROzs7SUFBRztRQUNmLElBQUksU0FBUyxFQUFFLEVBQUU7WUFDZixpQkFBaUI7aUJBQ2QsZUFBZSxFQUFFO2lCQUNqQixJQUFJOzs7O1lBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxjQUFjLENBQUMsTUFBTSxFQUFFLFVBQVUsSUFBSSxFQUFFLENBQUMsRUFBeEMsQ0FBd0MsRUFBQyxDQUFDO1NBQzdEO0lBQ0gsQ0FBQyxDQUFBO0lBQ0QsT0FBTyxRQUFRLENBQUM7QUFDbEIsQ0FBQzs7Ozs7OztBQVFEO0lBQUE7SUFrQkEsQ0FBQzs7OztJQWhCUSw2QkFBTzs7O0lBQWQ7UUFDRSxPQUFPO1lBQ0wsUUFBUSxFQUFFLHFCQUFxQjtZQUMvQixTQUFTLEVBQUU7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLGVBQWU7b0JBQ3hCLEtBQUssRUFBRSxJQUFJO29CQUNYLFVBQVUsRUFBRSxzQkFBc0I7b0JBQ2xDLElBQUksRUFBRTt3QkFDSix3QkFBd0I7d0JBQ3hCLENBQUMsSUFBSSxRQUFRLEVBQUUsRUFBRSxvQkFBb0IsQ0FBQztxQkFDdkM7aUJBQ0Y7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDOztnQkFqQkYsUUFBUTs7SUFrQlQsNEJBQUM7Q0FBQSxBQWxCRCxJQWtCQztTQWpCWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBUFBfSU5JVElBTElaRVIsXG4gIGlzRGV2TW9kZSxcbiAgTW9kdWxlV2l0aFByb3ZpZGVycyxcbiAgTmdNb2R1bGUsXG4gIE9wdGlvbmFsLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbmZpZ0luaXRpYWxpemVyU2VydmljZSB9IGZyb20gJy4uL2NvbmZpZy1pbml0aWFsaXplci9jb25maWctaW5pdGlhbGl6ZXIuc2VydmljZSc7XG5pbXBvcnQge1xuICBDb25maWdWYWxpZGF0b3IsXG4gIENvbmZpZ1ZhbGlkYXRvclRva2VuLFxuICB2YWxpZGF0ZUNvbmZpZyxcbn0gZnJvbSAnLi9jb25maWctdmFsaWRhdG9yJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ1ZhbGlkYXRvckZhY3RvcnkoXG4gIGNvbmZpZ0luaXRpYWxpemVyOiBDb25maWdJbml0aWFsaXplclNlcnZpY2UsXG4gIHZhbGlkYXRvcnM6IENvbmZpZ1ZhbGlkYXRvcltdXG4pIHtcbiAgY29uc3QgdmFsaWRhdGUgPSAoKSA9PiB7XG4gICAgaWYgKGlzRGV2TW9kZSgpKSB7XG4gICAgICBjb25maWdJbml0aWFsaXplclxuICAgICAgICAuZ2V0U3RhYmxlQ29uZmlnKClcbiAgICAgICAgLnRoZW4oY29uZmlnID0+IHZhbGlkYXRlQ29uZmlnKGNvbmZpZywgdmFsaWRhdG9ycyB8fCBbXSkpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHZhbGlkYXRlO1xufVxuXG4vKipcbiAqIFNob3VsZCBzdGF5IHByaXZhdGUgaW4gMS54XG4gKiBhcyBmb3JSb290KCkgaXMgdXNlZCBpbnRlcm5hbGx5IGJ5IENvbmZpZ0luaXRpYWxpemVyTW9kdWxlXG4gKlxuICogaXNzdWU6ICM1Mjc5XG4gKi9cbkBOZ01vZHVsZSgpXG5leHBvcnQgY2xhc3MgQ29uZmlnVmFsaWRhdG9yTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxDb25maWdWYWxpZGF0b3JNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IENvbmZpZ1ZhbGlkYXRvck1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogQVBQX0lOSVRJQUxJWkVSLFxuICAgICAgICAgIG11bHRpOiB0cnVlLFxuICAgICAgICAgIHVzZUZhY3Rvcnk6IGNvbmZpZ1ZhbGlkYXRvckZhY3RvcnksXG4gICAgICAgICAgZGVwczogW1xuICAgICAgICAgICAgQ29uZmlnSW5pdGlhbGl6ZXJTZXJ2aWNlLFxuICAgICAgICAgICAgW25ldyBPcHRpb25hbCgpLCBDb25maWdWYWxpZGF0b3JUb2tlbl0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19
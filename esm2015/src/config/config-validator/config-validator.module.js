var ConfigValidatorModule_1;
import { __decorate } from "tslib";
import { APP_INITIALIZER, isDevMode, NgModule, Optional, } from '@angular/core';
import { ConfigInitializerService } from '../config-initializer/config-initializer.service';
import { ConfigValidatorToken, validateConfig, } from './config-validator';
export function configValidatorFactory(configInitializer, validators) {
    const validate = () => {
        if (isDevMode()) {
            configInitializer
                .getStableConfig()
                .then((config) => validateConfig(config, validators || []));
        }
    };
    return validate;
}
/**
 * Should stay private in 1.x
 * as forRoot() is used internally by ConfigInitializerModule
 *
 * issue: #5279
 */
let ConfigValidatorModule = ConfigValidatorModule_1 = class ConfigValidatorModule {
    static forRoot() {
        return {
            ngModule: ConfigValidatorModule_1,
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
    }
};
ConfigValidatorModule = ConfigValidatorModule_1 = __decorate([
    NgModule()
], ConfigValidatorModule);
export { ConfigValidatorModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLXZhbGlkYXRvci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY29uZmlnL2NvbmZpZy12YWxpZGF0b3IvY29uZmlnLXZhbGlkYXRvci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLEVBQ0wsZUFBZSxFQUNmLFNBQVMsRUFFVCxRQUFRLEVBQ1IsUUFBUSxHQUNULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQzVGLE9BQU8sRUFFTCxvQkFBb0IsRUFDcEIsY0FBYyxHQUNmLE1BQU0sb0JBQW9CLENBQUM7QUFFNUIsTUFBTSxVQUFVLHNCQUFzQixDQUNwQyxpQkFBMkMsRUFDM0MsVUFBNkI7SUFFN0IsTUFBTSxRQUFRLEdBQUcsR0FBRyxFQUFFO1FBQ3BCLElBQUksU0FBUyxFQUFFLEVBQUU7WUFDZixpQkFBaUI7aUJBQ2QsZUFBZSxFQUFFO2lCQUNqQixJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsVUFBVSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDL0Q7SUFDSCxDQUFDLENBQUM7SUFDRixPQUFPLFFBQVEsQ0FBQztBQUNsQixDQUFDO0FBRUQ7Ozs7O0dBS0c7QUFFSCxJQUFhLHFCQUFxQiw2QkFBbEMsTUFBYSxxQkFBcUI7SUFDaEMsTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPO1lBQ0wsUUFBUSxFQUFFLHVCQUFxQjtZQUMvQixTQUFTLEVBQUU7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLGVBQWU7b0JBQ3hCLEtBQUssRUFBRSxJQUFJO29CQUNYLFVBQVUsRUFBRSxzQkFBc0I7b0JBQ2xDLElBQUksRUFBRTt3QkFDSix3QkFBd0I7d0JBQ3hCLENBQUMsSUFBSSxRQUFRLEVBQUUsRUFBRSxvQkFBb0IsQ0FBQztxQkFDdkM7aUJBQ0Y7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDO0NBQ0YsQ0FBQTtBQWpCWSxxQkFBcUI7SUFEakMsUUFBUSxFQUFFO0dBQ0UscUJBQXFCLENBaUJqQztTQWpCWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBUFBfSU5JVElBTElaRVIsXG4gIGlzRGV2TW9kZSxcbiAgTW9kdWxlV2l0aFByb3ZpZGVycyxcbiAgTmdNb2R1bGUsXG4gIE9wdGlvbmFsLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbmZpZ0luaXRpYWxpemVyU2VydmljZSB9IGZyb20gJy4uL2NvbmZpZy1pbml0aWFsaXplci9jb25maWctaW5pdGlhbGl6ZXIuc2VydmljZSc7XG5pbXBvcnQge1xuICBDb25maWdWYWxpZGF0b3IsXG4gIENvbmZpZ1ZhbGlkYXRvclRva2VuLFxuICB2YWxpZGF0ZUNvbmZpZyxcbn0gZnJvbSAnLi9jb25maWctdmFsaWRhdG9yJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ1ZhbGlkYXRvckZhY3RvcnkoXG4gIGNvbmZpZ0luaXRpYWxpemVyOiBDb25maWdJbml0aWFsaXplclNlcnZpY2UsXG4gIHZhbGlkYXRvcnM6IENvbmZpZ1ZhbGlkYXRvcltdXG4pIHtcbiAgY29uc3QgdmFsaWRhdGUgPSAoKSA9PiB7XG4gICAgaWYgKGlzRGV2TW9kZSgpKSB7XG4gICAgICBjb25maWdJbml0aWFsaXplclxuICAgICAgICAuZ2V0U3RhYmxlQ29uZmlnKClcbiAgICAgICAgLnRoZW4oKGNvbmZpZykgPT4gdmFsaWRhdGVDb25maWcoY29uZmlnLCB2YWxpZGF0b3JzIHx8IFtdKSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdmFsaWRhdGU7XG59XG5cbi8qKlxuICogU2hvdWxkIHN0YXkgcHJpdmF0ZSBpbiAxLnhcbiAqIGFzIGZvclJvb3QoKSBpcyB1c2VkIGludGVybmFsbHkgYnkgQ29uZmlnSW5pdGlhbGl6ZXJNb2R1bGVcbiAqXG4gKiBpc3N1ZTogIzUyNzlcbiAqL1xuQE5nTW9kdWxlKClcbmV4cG9ydCBjbGFzcyBDb25maWdWYWxpZGF0b3JNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPENvbmZpZ1ZhbGlkYXRvck1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQ29uZmlnVmFsaWRhdG9yTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBBUFBfSU5JVElBTElaRVIsXG4gICAgICAgICAgbXVsdGk6IHRydWUsXG4gICAgICAgICAgdXNlRmFjdG9yeTogY29uZmlnVmFsaWRhdG9yRmFjdG9yeSxcbiAgICAgICAgICBkZXBzOiBbXG4gICAgICAgICAgICBDb25maWdJbml0aWFsaXplclNlcnZpY2UsXG4gICAgICAgICAgICBbbmV3IE9wdGlvbmFsKCksIENvbmZpZ1ZhbGlkYXRvclRva2VuXSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXX0=
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { APP_INITIALIZER, NgModule, Optional, } from '@angular/core';
import { ConfigInitializerService } from './config-initializer.service';
import { CONFIG_INITIALIZER, CONFIG_INITIALIZER_FORROOT_GUARD, } from './config-initializer';
import { ConfigValidatorModule } from '../config-validator/config-validator.module';
/**
 * @param {?} configInitializer
 * @param {?} initializers
 * @return {?}
 */
export function configInitializerFactory(configInitializer, initializers) {
    /** @type {?} */
    var isReady = (/**
     * @return {?}
     */
    function () { return configInitializer.initialize(initializers); });
    return isReady;
}
var ConfigInitializerModule = /** @class */ (function () {
    function ConfigInitializerModule() {
    }
    /**
     * @return {?}
     */
    ConfigInitializerModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: ConfigInitializerModule,
            providers: [
                {
                    provide: CONFIG_INITIALIZER_FORROOT_GUARD,
                    useValue: true,
                },
                {
                    provide: APP_INITIALIZER,
                    multi: true,
                    useFactory: configInitializerFactory,
                    deps: [
                        ConfigInitializerService,
                        [new Optional(), CONFIG_INITIALIZER],
                    ],
                },
            ],
        };
    };
    ConfigInitializerModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        ConfigValidatorModule.forRoot(),
                    ],
                },] }
    ];
    return ConfigInitializerModule;
}());
export { ConfigInitializerModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLWluaXRpYWxpemVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jb25maWcvY29uZmlnLWluaXRpYWxpemVyL2NvbmZpZy1pbml0aWFsaXplci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxlQUFlLEVBRWYsUUFBUSxFQUNSLFFBQVEsR0FDVCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN4RSxPQUFPLEVBQ0wsa0JBQWtCLEVBQ2xCLGdDQUFnQyxHQUVqQyxNQUFNLHNCQUFzQixDQUFDO0FBQzlCLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDOzs7Ozs7QUFFcEYsTUFBTSxVQUFVLHdCQUF3QixDQUN0QyxpQkFBMkMsRUFDM0MsWUFBaUM7O1FBRTNCLE9BQU87OztJQUFHLGNBQU0sT0FBQSxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLEVBQTFDLENBQTBDLENBQUE7SUFDaEUsT0FBTyxPQUFPLENBQUM7QUFDakIsQ0FBQztBQUVEO0lBQUE7SUEwQkEsQ0FBQzs7OztJQXBCUSwrQkFBTzs7O0lBQWQ7UUFDRSxPQUFPO1lBQ0wsUUFBUSxFQUFFLHVCQUF1QjtZQUNqQyxTQUFTLEVBQUU7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLGdDQUFnQztvQkFDekMsUUFBUSxFQUFFLElBQUk7aUJBQ2Y7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLGVBQWU7b0JBQ3hCLEtBQUssRUFBRSxJQUFJO29CQUNYLFVBQVUsRUFBRSx3QkFBd0I7b0JBQ3BDLElBQUksRUFBRTt3QkFDSix3QkFBd0I7d0JBQ3hCLENBQUMsSUFBSSxRQUFRLEVBQUUsRUFBRSxrQkFBa0IsQ0FBQztxQkFDckM7aUJBQ0Y7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDOztnQkF6QkYsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxxQkFBcUIsQ0FBQyxPQUFPLEVBQUU7cUJBQ2hDO2lCQUNGOztJQXNCRCw4QkFBQztDQUFBLEFBMUJELElBMEJDO1NBckJZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFQUF9JTklUSUFMSVpFUixcbiAgTW9kdWxlV2l0aFByb3ZpZGVycyxcbiAgTmdNb2R1bGUsXG4gIE9wdGlvbmFsLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbmZpZ0luaXRpYWxpemVyU2VydmljZSB9IGZyb20gJy4vY29uZmlnLWluaXRpYWxpemVyLnNlcnZpY2UnO1xuaW1wb3J0IHtcbiAgQ09ORklHX0lOSVRJQUxJWkVSLFxuICBDT05GSUdfSU5JVElBTElaRVJfRk9SUk9PVF9HVUFSRCxcbiAgQ29uZmlnSW5pdGlhbGl6ZXIsXG59IGZyb20gJy4vY29uZmlnLWluaXRpYWxpemVyJztcbmltcG9ydCB7IENvbmZpZ1ZhbGlkYXRvck1vZHVsZSB9IGZyb20gJy4uL2NvbmZpZy12YWxpZGF0b3IvY29uZmlnLXZhbGlkYXRvci5tb2R1bGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlnSW5pdGlhbGl6ZXJGYWN0b3J5KFxuICBjb25maWdJbml0aWFsaXplcjogQ29uZmlnSW5pdGlhbGl6ZXJTZXJ2aWNlLFxuICBpbml0aWFsaXplcnM6IENvbmZpZ0luaXRpYWxpemVyW11cbikge1xuICBjb25zdCBpc1JlYWR5ID0gKCkgPT4gY29uZmlnSW5pdGlhbGl6ZXIuaW5pdGlhbGl6ZShpbml0aWFsaXplcnMpO1xuICByZXR1cm4gaXNSZWFkeTtcbn1cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbmZpZ1ZhbGlkYXRvck1vZHVsZS5mb3JSb290KCksIC8vIFRPRE86IHJlbW92ZSwgZGVwcmVjYXRlZCBzaW5jZSAxLjMsIGlzc3VlICM1Mjc5XG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIENvbmZpZ0luaXRpYWxpemVyTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxDb25maWdJbml0aWFsaXplck1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQ29uZmlnSW5pdGlhbGl6ZXJNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IENPTkZJR19JTklUSUFMSVpFUl9GT1JST09UX0dVQVJELFxuICAgICAgICAgIHVzZVZhbHVlOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogQVBQX0lOSVRJQUxJWkVSLFxuICAgICAgICAgIG11bHRpOiB0cnVlLFxuICAgICAgICAgIHVzZUZhY3Rvcnk6IGNvbmZpZ0luaXRpYWxpemVyRmFjdG9yeSxcbiAgICAgICAgICBkZXBzOiBbXG4gICAgICAgICAgICBDb25maWdJbml0aWFsaXplclNlcnZpY2UsXG4gICAgICAgICAgICBbbmV3IE9wdGlvbmFsKCksIENPTkZJR19JTklUSUFMSVpFUl0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19
import { __decorate } from "tslib";
import { APP_INITIALIZER, NgModule, Optional, } from '@angular/core';
import { ConfigInitializerService } from './config-initializer.service';
import { CONFIG_INITIALIZER, CONFIG_INITIALIZER_FORROOT_GUARD, } from './config-initializer';
export function configInitializerFactory(configInitializer, initializers) {
    var isReady = function () { return configInitializer.initialize(initializers); };
    return isReady;
}
var ConfigInitializerModule = /** @class */ (function () {
    function ConfigInitializerModule() {
    }
    ConfigInitializerModule_1 = ConfigInitializerModule;
    ConfigInitializerModule.forRoot = function () {
        return {
            ngModule: ConfigInitializerModule_1,
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
    var ConfigInitializerModule_1;
    ConfigInitializerModule = ConfigInitializerModule_1 = __decorate([
        NgModule({})
    ], ConfigInitializerModule);
    return ConfigInitializerModule;
}());
export { ConfigInitializerModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLWluaXRpYWxpemVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jb25maWcvY29uZmlnLWluaXRpYWxpemVyL2NvbmZpZy1pbml0aWFsaXplci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxlQUFlLEVBRWYsUUFBUSxFQUNSLFFBQVEsR0FDVCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN4RSxPQUFPLEVBQ0wsa0JBQWtCLEVBQ2xCLGdDQUFnQyxHQUVqQyxNQUFNLHNCQUFzQixDQUFDO0FBRTlCLE1BQU0sVUFBVSx3QkFBd0IsQ0FDdEMsaUJBQTJDLEVBQzNDLFlBQWlDO0lBRWpDLElBQU0sT0FBTyxHQUFHLGNBQU0sT0FBQSxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLEVBQTFDLENBQTBDLENBQUM7SUFDakUsT0FBTyxPQUFPLENBQUM7QUFDakIsQ0FBQztBQUdEO0lBQUE7SUFxQkEsQ0FBQztnQ0FyQlksdUJBQXVCO0lBQzNCLCtCQUFPLEdBQWQ7UUFDRSxPQUFPO1lBQ0wsUUFBUSxFQUFFLHlCQUF1QjtZQUNqQyxTQUFTLEVBQUU7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLGdDQUFnQztvQkFDekMsUUFBUSxFQUFFLElBQUk7aUJBQ2Y7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLGVBQWU7b0JBQ3hCLEtBQUssRUFBRSxJQUFJO29CQUNYLFVBQVUsRUFBRSx3QkFBd0I7b0JBQ3BDLElBQUksRUFBRTt3QkFDSix3QkFBd0I7d0JBQ3hCLENBQUMsSUFBSSxRQUFRLEVBQUUsRUFBRSxrQkFBa0IsQ0FBQztxQkFDckM7aUJBQ0Y7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDOztJQXBCVSx1QkFBdUI7UUFEbkMsUUFBUSxDQUFDLEVBQUUsQ0FBQztPQUNBLHVCQUF1QixDQXFCbkM7SUFBRCw4QkFBQztDQUFBLEFBckJELElBcUJDO1NBckJZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFQUF9JTklUSUFMSVpFUixcbiAgTW9kdWxlV2l0aFByb3ZpZGVycyxcbiAgTmdNb2R1bGUsXG4gIE9wdGlvbmFsLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbmZpZ0luaXRpYWxpemVyU2VydmljZSB9IGZyb20gJy4vY29uZmlnLWluaXRpYWxpemVyLnNlcnZpY2UnO1xuaW1wb3J0IHtcbiAgQ09ORklHX0lOSVRJQUxJWkVSLFxuICBDT05GSUdfSU5JVElBTElaRVJfRk9SUk9PVF9HVUFSRCxcbiAgQ29uZmlnSW5pdGlhbGl6ZXIsXG59IGZyb20gJy4vY29uZmlnLWluaXRpYWxpemVyJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ0luaXRpYWxpemVyRmFjdG9yeShcbiAgY29uZmlnSW5pdGlhbGl6ZXI6IENvbmZpZ0luaXRpYWxpemVyU2VydmljZSxcbiAgaW5pdGlhbGl6ZXJzOiBDb25maWdJbml0aWFsaXplcltdXG4pIHtcbiAgY29uc3QgaXNSZWFkeSA9ICgpID0+IGNvbmZpZ0luaXRpYWxpemVyLmluaXRpYWxpemUoaW5pdGlhbGl6ZXJzKTtcbiAgcmV0dXJuIGlzUmVhZHk7XG59XG5cbkBOZ01vZHVsZSh7fSlcbmV4cG9ydCBjbGFzcyBDb25maWdJbml0aWFsaXplck1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8Q29uZmlnSW5pdGlhbGl6ZXJNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IENvbmZpZ0luaXRpYWxpemVyTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBDT05GSUdfSU5JVElBTElaRVJfRk9SUk9PVF9HVUFSRCxcbiAgICAgICAgICB1c2VWYWx1ZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IEFQUF9JTklUSUFMSVpFUixcbiAgICAgICAgICBtdWx0aTogdHJ1ZSxcbiAgICAgICAgICB1c2VGYWN0b3J5OiBjb25maWdJbml0aWFsaXplckZhY3RvcnksXG4gICAgICAgICAgZGVwczogW1xuICAgICAgICAgICAgQ29uZmlnSW5pdGlhbGl6ZXJTZXJ2aWNlLFxuICAgICAgICAgICAgW25ldyBPcHRpb25hbCgpLCBDT05GSUdfSU5JVElBTElaRVJdLFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==
var ConfigInitializerModule_1;
import { __decorate } from "tslib";
import { APP_INITIALIZER, NgModule, Optional, } from '@angular/core';
import { ConfigInitializerService } from './config-initializer.service';
import { CONFIG_INITIALIZER, CONFIG_INITIALIZER_FORROOT_GUARD, } from './config-initializer';
export function configInitializerFactory(configInitializer, initializers) {
    const isReady = () => configInitializer.initialize(initializers);
    return isReady;
}
let ConfigInitializerModule = ConfigInitializerModule_1 = class ConfigInitializerModule {
    static forRoot() {
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
    }
};
ConfigInitializerModule = ConfigInitializerModule_1 = __decorate([
    NgModule({})
], ConfigInitializerModule);
export { ConfigInitializerModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLWluaXRpYWxpemVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jb25maWcvY29uZmlnLWluaXRpYWxpemVyL2NvbmZpZy1pbml0aWFsaXplci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLEVBQ0wsZUFBZSxFQUVmLFFBQVEsRUFDUixRQUFRLEdBQ1QsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDeEUsT0FBTyxFQUNMLGtCQUFrQixFQUNsQixnQ0FBZ0MsR0FFakMsTUFBTSxzQkFBc0IsQ0FBQztBQUU5QixNQUFNLFVBQVUsd0JBQXdCLENBQ3RDLGlCQUEyQyxFQUMzQyxZQUFpQztJQUVqQyxNQUFNLE9BQU8sR0FBRyxHQUFHLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDakUsT0FBTyxPQUFPLENBQUM7QUFDakIsQ0FBQztBQUdELElBQWEsdUJBQXVCLCtCQUFwQyxNQUFhLHVCQUF1QjtJQUNsQyxNQUFNLENBQUMsT0FBTztRQUNaLE9BQU87WUFDTCxRQUFRLEVBQUUseUJBQXVCO1lBQ2pDLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxPQUFPLEVBQUUsZ0NBQWdDO29CQUN6QyxRQUFRLEVBQUUsSUFBSTtpQkFDZjtnQkFDRDtvQkFDRSxPQUFPLEVBQUUsZUFBZTtvQkFDeEIsS0FBSyxFQUFFLElBQUk7b0JBQ1gsVUFBVSxFQUFFLHdCQUF3QjtvQkFDcEMsSUFBSSxFQUFFO3dCQUNKLHdCQUF3Qjt3QkFDeEIsQ0FBQyxJQUFJLFFBQVEsRUFBRSxFQUFFLGtCQUFrQixDQUFDO3FCQUNyQztpQkFDRjthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7Q0FDRixDQUFBO0FBckJZLHVCQUF1QjtJQURuQyxRQUFRLENBQUMsRUFBRSxDQUFDO0dBQ0EsdUJBQXVCLENBcUJuQztTQXJCWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBUFBfSU5JVElBTElaRVIsXG4gIE1vZHVsZVdpdGhQcm92aWRlcnMsXG4gIE5nTW9kdWxlLFxuICBPcHRpb25hbCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb25maWdJbml0aWFsaXplclNlcnZpY2UgfSBmcm9tICcuL2NvbmZpZy1pbml0aWFsaXplci5zZXJ2aWNlJztcbmltcG9ydCB7XG4gIENPTkZJR19JTklUSUFMSVpFUixcbiAgQ09ORklHX0lOSVRJQUxJWkVSX0ZPUlJPT1RfR1VBUkQsXG4gIENvbmZpZ0luaXRpYWxpemVyLFxufSBmcm9tICcuL2NvbmZpZy1pbml0aWFsaXplcic7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maWdJbml0aWFsaXplckZhY3RvcnkoXG4gIGNvbmZpZ0luaXRpYWxpemVyOiBDb25maWdJbml0aWFsaXplclNlcnZpY2UsXG4gIGluaXRpYWxpemVyczogQ29uZmlnSW5pdGlhbGl6ZXJbXVxuKSB7XG4gIGNvbnN0IGlzUmVhZHkgPSAoKSA9PiBjb25maWdJbml0aWFsaXplci5pbml0aWFsaXplKGluaXRpYWxpemVycyk7XG4gIHJldHVybiBpc1JlYWR5O1xufVxuXG5ATmdNb2R1bGUoe30pXG5leHBvcnQgY2xhc3MgQ29uZmlnSW5pdGlhbGl6ZXJNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPENvbmZpZ0luaXRpYWxpemVyTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBDb25maWdJbml0aWFsaXplck1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogQ09ORklHX0lOSVRJQUxJWkVSX0ZPUlJPT1RfR1VBUkQsXG4gICAgICAgICAgdXNlVmFsdWU6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBBUFBfSU5JVElBTElaRVIsXG4gICAgICAgICAgbXVsdGk6IHRydWUsXG4gICAgICAgICAgdXNlRmFjdG9yeTogY29uZmlnSW5pdGlhbGl6ZXJGYWN0b3J5LFxuICAgICAgICAgIGRlcHM6IFtcbiAgICAgICAgICAgIENvbmZpZ0luaXRpYWxpemVyU2VydmljZSxcbiAgICAgICAgICAgIFtuZXcgT3B0aW9uYWwoKSwgQ09ORklHX0lOSVRJQUxJWkVSXSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXX0=
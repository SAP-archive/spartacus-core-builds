import { APP_INITIALIZER, NgModule, Optional, } from '@angular/core';
import { ConfigInitializerService } from './config-initializer.service';
import { CONFIG_INITIALIZER, CONFIG_INITIALIZER_FORROOT_GUARD, } from './config-initializer';
import { LOCATION_INITIALIZED } from '@angular/common';
export function configInitializerFactory(configInitializer, initializers) {
    const isReady = () => configInitializer.initialize(initializers);
    return isReady;
}
export function locationInitializedFactory(configInitializer) {
    return configInitializer.getStableConfig();
}
export class ConfigInitializerModule {
    static forRoot() {
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
                {
                    // Hold on the initial navigation until the Spartacus configuration is stable
                    provide: LOCATION_INITIALIZED,
                    useFactory: locationInitializedFactory,
                    deps: [ConfigInitializerService],
                },
            ],
        };
    }
}
ConfigInitializerModule.decorators = [
    { type: NgModule, args: [{},] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLWluaXRpYWxpemVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL2NvbmZpZy9jb25maWctaW5pdGlhbGl6ZXIvY29uZmlnLWluaXRpYWxpemVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsZUFBZSxFQUVmLFFBQVEsRUFDUixRQUFRLEdBQ1QsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDeEUsT0FBTyxFQUNMLGtCQUFrQixFQUNsQixnQ0FBZ0MsR0FFakMsTUFBTSxzQkFBc0IsQ0FBQztBQUM5QixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUV2RCxNQUFNLFVBQVUsd0JBQXdCLENBQ3RDLGlCQUEyQyxFQUMzQyxZQUFpQztJQUVqQyxNQUFNLE9BQU8sR0FBRyxHQUFHLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDakUsT0FBTyxPQUFPLENBQUM7QUFDakIsQ0FBQztBQUVELE1BQU0sVUFBVSwwQkFBMEIsQ0FDeEMsaUJBQTJDO0lBRTNDLE9BQU8saUJBQWlCLENBQUMsZUFBZSxFQUFFLENBQUM7QUFDN0MsQ0FBQztBQUdELE1BQU0sT0FBTyx1QkFBdUI7SUFDbEMsTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPO1lBQ0wsUUFBUSxFQUFFLHVCQUF1QjtZQUNqQyxTQUFTLEVBQUU7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLGdDQUFnQztvQkFDekMsUUFBUSxFQUFFLElBQUk7aUJBQ2Y7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLGVBQWU7b0JBQ3hCLEtBQUssRUFBRSxJQUFJO29CQUNYLFVBQVUsRUFBRSx3QkFBd0I7b0JBQ3BDLElBQUksRUFBRTt3QkFDSix3QkFBd0I7d0JBQ3hCLENBQUMsSUFBSSxRQUFRLEVBQUUsRUFBRSxrQkFBa0IsQ0FBQztxQkFDckM7aUJBQ0Y7Z0JBQ0Q7b0JBQ0UsNkVBQTZFO29CQUM3RSxPQUFPLEVBQUUsb0JBQW9CO29CQUM3QixVQUFVLEVBQUUsMEJBQTBCO29CQUN0QyxJQUFJLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztpQkFDakM7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDOzs7WUEzQkYsUUFBUSxTQUFDLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBUFBfSU5JVElBTElaRVIsXG4gIE1vZHVsZVdpdGhQcm92aWRlcnMsXG4gIE5nTW9kdWxlLFxuICBPcHRpb25hbCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb25maWdJbml0aWFsaXplclNlcnZpY2UgfSBmcm9tICcuL2NvbmZpZy1pbml0aWFsaXplci5zZXJ2aWNlJztcbmltcG9ydCB7XG4gIENPTkZJR19JTklUSUFMSVpFUixcbiAgQ09ORklHX0lOSVRJQUxJWkVSX0ZPUlJPT1RfR1VBUkQsXG4gIENvbmZpZ0luaXRpYWxpemVyLFxufSBmcm9tICcuL2NvbmZpZy1pbml0aWFsaXplcic7XG5pbXBvcnQgeyBMT0NBVElPTl9JTklUSUFMSVpFRCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maWdJbml0aWFsaXplckZhY3RvcnkoXG4gIGNvbmZpZ0luaXRpYWxpemVyOiBDb25maWdJbml0aWFsaXplclNlcnZpY2UsXG4gIGluaXRpYWxpemVyczogQ29uZmlnSW5pdGlhbGl6ZXJbXVxuKSB7XG4gIGNvbnN0IGlzUmVhZHkgPSAoKSA9PiBjb25maWdJbml0aWFsaXplci5pbml0aWFsaXplKGluaXRpYWxpemVycyk7XG4gIHJldHVybiBpc1JlYWR5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9jYXRpb25Jbml0aWFsaXplZEZhY3RvcnkoXG4gIGNvbmZpZ0luaXRpYWxpemVyOiBDb25maWdJbml0aWFsaXplclNlcnZpY2Vcbikge1xuICByZXR1cm4gY29uZmlnSW5pdGlhbGl6ZXIuZ2V0U3RhYmxlQ29uZmlnKCk7XG59XG5cbkBOZ01vZHVsZSh7fSlcbmV4cG9ydCBjbGFzcyBDb25maWdJbml0aWFsaXplck1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8Q29uZmlnSW5pdGlhbGl6ZXJNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IENvbmZpZ0luaXRpYWxpemVyTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBDT05GSUdfSU5JVElBTElaRVJfRk9SUk9PVF9HVUFSRCxcbiAgICAgICAgICB1c2VWYWx1ZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IEFQUF9JTklUSUFMSVpFUixcbiAgICAgICAgICBtdWx0aTogdHJ1ZSxcbiAgICAgICAgICB1c2VGYWN0b3J5OiBjb25maWdJbml0aWFsaXplckZhY3RvcnksXG4gICAgICAgICAgZGVwczogW1xuICAgICAgICAgICAgQ29uZmlnSW5pdGlhbGl6ZXJTZXJ2aWNlLFxuICAgICAgICAgICAgW25ldyBPcHRpb25hbCgpLCBDT05GSUdfSU5JVElBTElaRVJdLFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAvLyBIb2xkIG9uIHRoZSBpbml0aWFsIG5hdmlnYXRpb24gdW50aWwgdGhlIFNwYXJ0YWN1cyBjb25maWd1cmF0aW9uIGlzIHN0YWJsZVxuICAgICAgICAgIHByb3ZpZGU6IExPQ0FUSU9OX0lOSVRJQUxJWkVELFxuICAgICAgICAgIHVzZUZhY3Rvcnk6IGxvY2F0aW9uSW5pdGlhbGl6ZWRGYWN0b3J5LFxuICAgICAgICAgIGRlcHM6IFtDb25maWdJbml0aWFsaXplclNlcnZpY2VdLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXX0=
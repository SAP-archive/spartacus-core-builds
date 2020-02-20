var ExternalRoutesModule_1;
import { __decorate } from "tslib";
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { Config } from '../../config/config.module';
import { ExternalRoutesConfig } from './external-routes-config';
import { addExternalRoutesFactory } from './external-routes.providers';
import { ExternalRoutesService } from './external-routes.service';
/**
 * Prepends the external route that redirects to a different storefront system for configured URLs
 */
let ExternalRoutesModule = ExternalRoutesModule_1 = class ExternalRoutesModule {
    static forRoot() {
        return {
            ngModule: ExternalRoutesModule_1,
            providers: [
                ExternalRoutesService,
                { provide: ExternalRoutesConfig, useExisting: Config },
                {
                    provide: APP_INITIALIZER,
                    multi: true,
                    useFactory: addExternalRoutesFactory,
                    deps: [ExternalRoutesService],
                },
            ],
        };
    }
};
ExternalRoutesModule = ExternalRoutesModule_1 = __decorate([
    NgModule()
], ExternalRoutesModule);
export { ExternalRoutesModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZXJuYWwtcm91dGVzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9yb3V0aW5nL2V4dGVybmFsLXJvdXRlcy9leHRlcm5hbC1yb3V0ZXMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxFQUFFLGVBQWUsRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN2RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUVsRTs7R0FFRztBQUVILElBQWEsb0JBQW9CLDRCQUFqQyxNQUFhLG9CQUFvQjtJQUMvQixNQUFNLENBQUMsT0FBTztRQUNaLE9BQU87WUFDTCxRQUFRLEVBQUUsc0JBQW9CO1lBQzlCLFNBQVMsRUFBRTtnQkFDVCxxQkFBcUI7Z0JBQ3JCLEVBQUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUU7Z0JBQ3REO29CQUNFLE9BQU8sRUFBRSxlQUFlO29CQUN4QixLQUFLLEVBQUUsSUFBSTtvQkFDWCxVQUFVLEVBQUUsd0JBQXdCO29CQUNwQyxJQUFJLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztpQkFDOUI7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDO0NBQ0YsQ0FBQTtBQWhCWSxvQkFBb0I7SUFEaEMsUUFBUSxFQUFFO0dBQ0Usb0JBQW9CLENBZ0JoQztTQWhCWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBUFBfSU5JVElBTElaRVIsIE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcvY29uZmlnLm1vZHVsZSc7XG5pbXBvcnQgeyBFeHRlcm5hbFJvdXRlc0NvbmZpZyB9IGZyb20gJy4vZXh0ZXJuYWwtcm91dGVzLWNvbmZpZyc7XG5pbXBvcnQgeyBhZGRFeHRlcm5hbFJvdXRlc0ZhY3RvcnkgfSBmcm9tICcuL2V4dGVybmFsLXJvdXRlcy5wcm92aWRlcnMnO1xuaW1wb3J0IHsgRXh0ZXJuYWxSb3V0ZXNTZXJ2aWNlIH0gZnJvbSAnLi9leHRlcm5hbC1yb3V0ZXMuc2VydmljZSc7XG5cbi8qKlxuICogUHJlcGVuZHMgdGhlIGV4dGVybmFsIHJvdXRlIHRoYXQgcmVkaXJlY3RzIHRvIGEgZGlmZmVyZW50IHN0b3JlZnJvbnQgc3lzdGVtIGZvciBjb25maWd1cmVkIFVSTHNcbiAqL1xuQE5nTW9kdWxlKClcbmV4cG9ydCBjbGFzcyBFeHRlcm5hbFJvdXRlc01vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8RXh0ZXJuYWxSb3V0ZXNNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEV4dGVybmFsUm91dGVzTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIEV4dGVybmFsUm91dGVzU2VydmljZSxcbiAgICAgICAgeyBwcm92aWRlOiBFeHRlcm5hbFJvdXRlc0NvbmZpZywgdXNlRXhpc3Rpbmc6IENvbmZpZyB9LFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogQVBQX0lOSVRJQUxJWkVSLFxuICAgICAgICAgIG11bHRpOiB0cnVlLFxuICAgICAgICAgIHVzZUZhY3Rvcnk6IGFkZEV4dGVybmFsUm91dGVzRmFjdG9yeSxcbiAgICAgICAgICBkZXBzOiBbRXh0ZXJuYWxSb3V0ZXNTZXJ2aWNlXSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19
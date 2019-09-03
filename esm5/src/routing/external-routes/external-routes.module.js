/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { Config } from '../../config/config.module';
import { ExternalRoutesConfig } from './external-routes-config';
import { addExternalRoutesFactory } from './external-routes.providers';
import { ExternalRoutesService } from './external-routes.service';
/**
 * Prepends the external route that redirects to a different storefront system for configured URLs
 */
var ExternalRoutesModule = /** @class */ (function () {
    function ExternalRoutesModule() {
    }
    /**
     * @return {?}
     */
    ExternalRoutesModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: ExternalRoutesModule,
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
    };
    ExternalRoutesModule.decorators = [
        { type: NgModule }
    ];
    return ExternalRoutesModule;
}());
export { ExternalRoutesModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZXJuYWwtcm91dGVzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9yb3V0aW5nL2V4dGVybmFsLXJvdXRlcy9leHRlcm5hbC1yb3V0ZXMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsZUFBZSxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3BELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDOzs7O0FBS2xFO0lBQUE7SUFpQkEsQ0FBQzs7OztJQWZRLDRCQUFPOzs7SUFBZDtRQUNFLE9BQU87WUFDTCxRQUFRLEVBQUUsb0JBQW9CO1lBQzlCLFNBQVMsRUFBRTtnQkFDVCxxQkFBcUI7Z0JBQ3JCLEVBQUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUU7Z0JBQ3REO29CQUNFLE9BQU8sRUFBRSxlQUFlO29CQUN4QixLQUFLLEVBQUUsSUFBSTtvQkFDWCxVQUFVLEVBQUUsd0JBQXdCO29CQUNwQyxJQUFJLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztpQkFDOUI7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDOztnQkFoQkYsUUFBUTs7SUFpQlQsMkJBQUM7Q0FBQSxBQWpCRCxJQWlCQztTQWhCWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBUFBfSU5JVElBTElaRVIsIE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcvY29uZmlnLm1vZHVsZSc7XG5pbXBvcnQgeyBFeHRlcm5hbFJvdXRlc0NvbmZpZyB9IGZyb20gJy4vZXh0ZXJuYWwtcm91dGVzLWNvbmZpZyc7XG5pbXBvcnQgeyBhZGRFeHRlcm5hbFJvdXRlc0ZhY3RvcnkgfSBmcm9tICcuL2V4dGVybmFsLXJvdXRlcy5wcm92aWRlcnMnO1xuaW1wb3J0IHsgRXh0ZXJuYWxSb3V0ZXNTZXJ2aWNlIH0gZnJvbSAnLi9leHRlcm5hbC1yb3V0ZXMuc2VydmljZSc7XG5cbi8qKlxuICogUHJlcGVuZHMgdGhlIGV4dGVybmFsIHJvdXRlIHRoYXQgcmVkaXJlY3RzIHRvIGEgZGlmZmVyZW50IHN0b3JlZnJvbnQgc3lzdGVtIGZvciBjb25maWd1cmVkIFVSTHNcbiAqL1xuQE5nTW9kdWxlKClcbmV4cG9ydCBjbGFzcyBFeHRlcm5hbFJvdXRlc01vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8RXh0ZXJuYWxSb3V0ZXNNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEV4dGVybmFsUm91dGVzTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIEV4dGVybmFsUm91dGVzU2VydmljZSxcbiAgICAgICAgeyBwcm92aWRlOiBFeHRlcm5hbFJvdXRlc0NvbmZpZywgdXNlRXhpc3Rpbmc6IENvbmZpZyB9LFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogQVBQX0lOSVRJQUxJWkVSLFxuICAgICAgICAgIG11bHRpOiB0cnVlLFxuICAgICAgICAgIHVzZUZhY3Rvcnk6IGFkZEV4dGVybmFsUm91dGVzRmFjdG9yeSxcbiAgICAgICAgICBkZXBzOiBbRXh0ZXJuYWxSb3V0ZXNTZXJ2aWNlXSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19
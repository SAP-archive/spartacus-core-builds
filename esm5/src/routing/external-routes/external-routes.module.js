import { __decorate } from "tslib";
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { addExternalRoutesFactory } from './external-routes.providers';
import { ExternalRoutesService } from './external-routes.service';
/**
 * Prepends the external route that redirects to a different storefront system for configured URLs
 */
var ExternalRoutesModule = /** @class */ (function () {
    function ExternalRoutesModule() {
    }
    ExternalRoutesModule_1 = ExternalRoutesModule;
    ExternalRoutesModule.forRoot = function () {
        return {
            ngModule: ExternalRoutesModule_1,
            providers: [
                {
                    provide: APP_INITIALIZER,
                    multi: true,
                    useFactory: addExternalRoutesFactory,
                    deps: [ExternalRoutesService],
                },
            ],
        };
    };
    var ExternalRoutesModule_1;
    ExternalRoutesModule = ExternalRoutesModule_1 = __decorate([
        NgModule()
    ], ExternalRoutesModule);
    return ExternalRoutesModule;
}());
export { ExternalRoutesModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZXJuYWwtcm91dGVzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9yb3V0aW5nL2V4dGVybmFsLXJvdXRlcy9leHRlcm5hbC1yb3V0ZXMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsZUFBZSxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDdkUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFbEU7O0dBRUc7QUFFSDtJQUFBO0lBY0EsQ0FBQzs2QkFkWSxvQkFBb0I7SUFDeEIsNEJBQU8sR0FBZDtRQUNFLE9BQU87WUFDTCxRQUFRLEVBQUUsc0JBQW9CO1lBQzlCLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxPQUFPLEVBQUUsZUFBZTtvQkFDeEIsS0FBSyxFQUFFLElBQUk7b0JBQ1gsVUFBVSxFQUFFLHdCQUF3QjtvQkFDcEMsSUFBSSxFQUFFLENBQUMscUJBQXFCLENBQUM7aUJBQzlCO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQzs7SUFiVSxvQkFBb0I7UUFEaEMsUUFBUSxFQUFFO09BQ0Usb0JBQW9CLENBY2hDO0lBQUQsMkJBQUM7Q0FBQSxBQWRELElBY0M7U0FkWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBUFBfSU5JVElBTElaRVIsIE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBhZGRFeHRlcm5hbFJvdXRlc0ZhY3RvcnkgfSBmcm9tICcuL2V4dGVybmFsLXJvdXRlcy5wcm92aWRlcnMnO1xuaW1wb3J0IHsgRXh0ZXJuYWxSb3V0ZXNTZXJ2aWNlIH0gZnJvbSAnLi9leHRlcm5hbC1yb3V0ZXMuc2VydmljZSc7XG5cbi8qKlxuICogUHJlcGVuZHMgdGhlIGV4dGVybmFsIHJvdXRlIHRoYXQgcmVkaXJlY3RzIHRvIGEgZGlmZmVyZW50IHN0b3JlZnJvbnQgc3lzdGVtIGZvciBjb25maWd1cmVkIFVSTHNcbiAqL1xuQE5nTW9kdWxlKClcbmV4cG9ydCBjbGFzcyBFeHRlcm5hbFJvdXRlc01vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8RXh0ZXJuYWxSb3V0ZXNNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEV4dGVybmFsUm91dGVzTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBBUFBfSU5JVElBTElaRVIsXG4gICAgICAgICAgbXVsdGk6IHRydWUsXG4gICAgICAgICAgdXNlRmFjdG9yeTogYWRkRXh0ZXJuYWxSb3V0ZXNGYWN0b3J5LFxuICAgICAgICAgIGRlcHM6IFtFeHRlcm5hbFJvdXRlc1NlcnZpY2VdLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXX0=
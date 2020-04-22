var ExternalRoutesModule_1;
import { __decorate } from "tslib";
import { APP_INITIALIZER, NgModule } from '@angular/core';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZXJuYWwtcm91dGVzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9yb3V0aW5nL2V4dGVybmFsLXJvdXRlcy9leHRlcm5hbC1yb3V0ZXMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxFQUFFLGVBQWUsRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRWxFOztHQUVHO0FBRUgsSUFBYSxvQkFBb0IsNEJBQWpDLE1BQWEsb0JBQW9CO0lBQy9CLE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSxzQkFBb0I7WUFDOUIsU0FBUyxFQUFFO2dCQUNULHFCQUFxQjtnQkFDckI7b0JBQ0UsT0FBTyxFQUFFLGVBQWU7b0JBQ3hCLEtBQUssRUFBRSxJQUFJO29CQUNYLFVBQVUsRUFBRSx3QkFBd0I7b0JBQ3BDLElBQUksRUFBRSxDQUFDLHFCQUFxQixDQUFDO2lCQUM5QjthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7Q0FDRixDQUFBO0FBZlksb0JBQW9CO0lBRGhDLFFBQVEsRUFBRTtHQUNFLG9CQUFvQixDQWVoQztTQWZZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFQUF9JTklUSUFMSVpFUiwgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGFkZEV4dGVybmFsUm91dGVzRmFjdG9yeSB9IGZyb20gJy4vZXh0ZXJuYWwtcm91dGVzLnByb3ZpZGVycyc7XG5pbXBvcnQgeyBFeHRlcm5hbFJvdXRlc1NlcnZpY2UgfSBmcm9tICcuL2V4dGVybmFsLXJvdXRlcy5zZXJ2aWNlJztcblxuLyoqXG4gKiBQcmVwZW5kcyB0aGUgZXh0ZXJuYWwgcm91dGUgdGhhdCByZWRpcmVjdHMgdG8gYSBkaWZmZXJlbnQgc3RvcmVmcm9udCBzeXN0ZW0gZm9yIGNvbmZpZ3VyZWQgVVJMc1xuICovXG5ATmdNb2R1bGUoKVxuZXhwb3J0IGNsYXNzIEV4dGVybmFsUm91dGVzTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxFeHRlcm5hbFJvdXRlc01vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogRXh0ZXJuYWxSb3V0ZXNNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgRXh0ZXJuYWxSb3V0ZXNTZXJ2aWNlLFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogQVBQX0lOSVRJQUxJWkVSLFxuICAgICAgICAgIG11bHRpOiB0cnVlLFxuICAgICAgICAgIHVzZUZhY3Rvcnk6IGFkZEV4dGVybmFsUm91dGVzRmFjdG9yeSxcbiAgICAgICAgICBkZXBzOiBbRXh0ZXJuYWxSb3V0ZXNTZXJ2aWNlXSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19
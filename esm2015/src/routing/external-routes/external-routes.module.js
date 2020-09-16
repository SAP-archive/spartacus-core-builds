import { APP_INITIALIZER, NgModule } from '@angular/core';
import { addExternalRoutesFactory } from './external-routes.providers';
import { ExternalRoutesService } from './external-routes.service';
/**
 * Prepends the external route that redirects to a different storefront system for configured URLs
 */
export class ExternalRoutesModule {
    static forRoot() {
        return {
            ngModule: ExternalRoutesModule,
            providers: [
                {
                    provide: APP_INITIALIZER,
                    multi: true,
                    useFactory: addExternalRoutesFactory,
                    deps: [ExternalRoutesService],
                },
            ],
        };
    }
}
ExternalRoutesModule.decorators = [
    { type: NgModule }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZXJuYWwtcm91dGVzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL3JvdXRpbmcvZXh0ZXJuYWwtcm91dGVzL2V4dGVybmFsLXJvdXRlcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGVBQWUsRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRWxFOztHQUVHO0FBRUgsTUFBTSxPQUFPLG9CQUFvQjtJQUMvQixNQUFNLENBQUMsT0FBTztRQUNaLE9BQU87WUFDTCxRQUFRLEVBQUUsb0JBQW9CO1lBQzlCLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxPQUFPLEVBQUUsZUFBZTtvQkFDeEIsS0FBSyxFQUFFLElBQUk7b0JBQ1gsVUFBVSxFQUFFLHdCQUF3QjtvQkFDcEMsSUFBSSxFQUFFLENBQUMscUJBQXFCLENBQUM7aUJBQzlCO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQzs7O1lBZEYsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFQUF9JTklUSUFMSVpFUiwgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGFkZEV4dGVybmFsUm91dGVzRmFjdG9yeSB9IGZyb20gJy4vZXh0ZXJuYWwtcm91dGVzLnByb3ZpZGVycyc7XG5pbXBvcnQgeyBFeHRlcm5hbFJvdXRlc1NlcnZpY2UgfSBmcm9tICcuL2V4dGVybmFsLXJvdXRlcy5zZXJ2aWNlJztcblxuLyoqXG4gKiBQcmVwZW5kcyB0aGUgZXh0ZXJuYWwgcm91dGUgdGhhdCByZWRpcmVjdHMgdG8gYSBkaWZmZXJlbnQgc3RvcmVmcm9udCBzeXN0ZW0gZm9yIGNvbmZpZ3VyZWQgVVJMc1xuICovXG5ATmdNb2R1bGUoKVxuZXhwb3J0IGNsYXNzIEV4dGVybmFsUm91dGVzTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxFeHRlcm5hbFJvdXRlc01vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogRXh0ZXJuYWxSb3V0ZXNNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IEFQUF9JTklUSUFMSVpFUixcbiAgICAgICAgICBtdWx0aTogdHJ1ZSxcbiAgICAgICAgICB1c2VGYWN0b3J5OiBhZGRFeHRlcm5hbFJvdXRlc0ZhY3RvcnksXG4gICAgICAgICAgZGVwczogW0V4dGVybmFsUm91dGVzU2VydmljZV0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==
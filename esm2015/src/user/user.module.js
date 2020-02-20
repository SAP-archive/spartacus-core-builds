var UserModule_1;
import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { UserService } from './facade/user.service';
import { UserStoreModule } from './store/user-store.module';
import { PageMetaResolver } from '../cms/page/page-meta.resolver';
import { FindProductPageMetaResolver } from './services/find-product-page-meta.resolver';
let UserModule = UserModule_1 = class UserModule {
    static forRoot() {
        return {
            ngModule: UserModule_1,
            providers: [
                UserService,
                {
                    provide: PageMetaResolver,
                    useExisting: FindProductPageMetaResolver,
                    multi: true,
                },
            ],
        };
    }
};
UserModule = UserModule_1 = __decorate([
    NgModule({
        imports: [UserStoreModule],
    })
], UserModule);
export { UserModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci91c2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDbEUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFLekYsSUFBYSxVQUFVLGtCQUF2QixNQUFhLFVBQVU7SUFDckIsTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPO1lBQ0wsUUFBUSxFQUFFLFlBQVU7WUFDcEIsU0FBUyxFQUFFO2dCQUNULFdBQVc7Z0JBQ1g7b0JBQ0UsT0FBTyxFQUFFLGdCQUFnQjtvQkFDekIsV0FBVyxFQUFFLDJCQUEyQjtvQkFDeEMsS0FBSyxFQUFFLElBQUk7aUJBQ1o7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDO0NBQ0YsQ0FBQTtBQWRZLFVBQVU7SUFIdEIsUUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFLENBQUMsZUFBZSxDQUFDO0tBQzNCLENBQUM7R0FDVyxVQUFVLENBY3RCO1NBZFksVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4vZmFjYWRlL3VzZXIuc2VydmljZSc7XG5pbXBvcnQgeyBVc2VyU3RvcmVNb2R1bGUgfSBmcm9tICcuL3N0b3JlL3VzZXItc3RvcmUubW9kdWxlJztcbmltcG9ydCB7IFBhZ2VNZXRhUmVzb2x2ZXIgfSBmcm9tICcuLi9jbXMvcGFnZS9wYWdlLW1ldGEucmVzb2x2ZXInO1xuaW1wb3J0IHsgRmluZFByb2R1Y3RQYWdlTWV0YVJlc29sdmVyIH0gZnJvbSAnLi9zZXJ2aWNlcy9maW5kLXByb2R1Y3QtcGFnZS1tZXRhLnJlc29sdmVyJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1VzZXJTdG9yZU1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIFVzZXJNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPFVzZXJNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFVzZXJNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgVXNlclNlcnZpY2UsXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBQYWdlTWV0YVJlc29sdmVyLFxuICAgICAgICAgIHVzZUV4aXN0aW5nOiBGaW5kUHJvZHVjdFBhZ2VNZXRhUmVzb2x2ZXIsXG4gICAgICAgICAgbXVsdGk6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==
import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { UserStoreModule } from './store/user-store.module';
import { PageMetaResolver } from '../cms/page/page-meta.resolver';
import { FindProductPageMetaResolver } from './services/find-product-page-meta.resolver';
var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule_1 = UserModule;
    UserModule.forRoot = function () {
        return {
            ngModule: UserModule_1,
            providers: [
                {
                    provide: PageMetaResolver,
                    useExisting: FindProductPageMetaResolver,
                    multi: true,
                },
            ],
        };
    };
    var UserModule_1;
    UserModule = UserModule_1 = __decorate([
        NgModule({
            imports: [UserStoreModule],
        })
    ], UserModule);
    return UserModule;
}());
export { UserModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci91c2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzVELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBS3pGO0lBQUE7SUFhQSxDQUFDO21CQWJZLFVBQVU7SUFDZCxrQkFBTyxHQUFkO1FBQ0UsT0FBTztZQUNMLFFBQVEsRUFBRSxZQUFVO1lBQ3BCLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxPQUFPLEVBQUUsZ0JBQWdCO29CQUN6QixXQUFXLEVBQUUsMkJBQTJCO29CQUN4QyxLQUFLLEVBQUUsSUFBSTtpQkFDWjthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7O0lBWlUsVUFBVTtRQUh0QixRQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBQyxlQUFlLENBQUM7U0FDM0IsQ0FBQztPQUNXLFVBQVUsQ0FhdEI7SUFBRCxpQkFBQztDQUFBLEFBYkQsSUFhQztTQWJZLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVXNlclN0b3JlTW9kdWxlIH0gZnJvbSAnLi9zdG9yZS91c2VyLXN0b3JlLm1vZHVsZSc7XG5pbXBvcnQgeyBQYWdlTWV0YVJlc29sdmVyIH0gZnJvbSAnLi4vY21zL3BhZ2UvcGFnZS1tZXRhLnJlc29sdmVyJztcbmltcG9ydCB7IEZpbmRQcm9kdWN0UGFnZU1ldGFSZXNvbHZlciB9IGZyb20gJy4vc2VydmljZXMvZmluZC1wcm9kdWN0LXBhZ2UtbWV0YS5yZXNvbHZlcic7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtVc2VyU3RvcmVNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBVc2VyTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxVc2VyTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBVc2VyTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBQYWdlTWV0YVJlc29sdmVyLFxuICAgICAgICAgIHVzZUV4aXN0aW5nOiBGaW5kUHJvZHVjdFBhZ2VNZXRhUmVzb2x2ZXIsXG4gICAgICAgICAgbXVsdGk6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==
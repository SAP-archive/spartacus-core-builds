import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { UserService } from './facade/user.service';
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
                UserService,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci91c2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3BELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNsRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUt6RjtJQUFBO0lBY0EsQ0FBQzttQkFkWSxVQUFVO0lBQ2Qsa0JBQU8sR0FBZDtRQUNFLE9BQU87WUFDTCxRQUFRLEVBQUUsWUFBVTtZQUNwQixTQUFTLEVBQUU7Z0JBQ1QsV0FBVztnQkFDWDtvQkFDRSxPQUFPLEVBQUUsZ0JBQWdCO29CQUN6QixXQUFXLEVBQUUsMkJBQTJCO29CQUN4QyxLQUFLLEVBQUUsSUFBSTtpQkFDWjthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7O0lBYlUsVUFBVTtRQUh0QixRQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBQyxlQUFlLENBQUM7U0FDM0IsQ0FBQztPQUNXLFVBQVUsQ0FjdEI7SUFBRCxpQkFBQztDQUFBLEFBZEQsSUFjQztTQWRZLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICcuL2ZhY2FkZS91c2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgVXNlclN0b3JlTW9kdWxlIH0gZnJvbSAnLi9zdG9yZS91c2VyLXN0b3JlLm1vZHVsZSc7XG5pbXBvcnQgeyBQYWdlTWV0YVJlc29sdmVyIH0gZnJvbSAnLi4vY21zL3BhZ2UvcGFnZS1tZXRhLnJlc29sdmVyJztcbmltcG9ydCB7IEZpbmRQcm9kdWN0UGFnZU1ldGFSZXNvbHZlciB9IGZyb20gJy4vc2VydmljZXMvZmluZC1wcm9kdWN0LXBhZ2UtbWV0YS5yZXNvbHZlcic7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtVc2VyU3RvcmVNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBVc2VyTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxVc2VyTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBVc2VyTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIFVzZXJTZXJ2aWNlLFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogUGFnZU1ldGFSZXNvbHZlcixcbiAgICAgICAgICB1c2VFeGlzdGluZzogRmluZFByb2R1Y3RQYWdlTWV0YVJlc29sdmVyLFxuICAgICAgICAgIG11bHRpOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXX0=
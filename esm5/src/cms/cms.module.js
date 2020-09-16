import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { defaultCmsModuleConfig } from './config/default-cms-config';
import { CmsService } from './facade/cms.service';
import { CmsPageTitleModule } from './page/page.module';
import { CmsStoreModule } from './store/cms-store.module';
import { provideDefaultConfig } from '../config/config-providers';
var CmsModule = /** @class */ (function () {
    function CmsModule() {
    }
    CmsModule_1 = CmsModule;
    CmsModule.forRoot = function () {
        return {
            ngModule: CmsModule_1,
            providers: [CmsService, provideDefaultConfig(defaultCmsModuleConfig)],
        };
    };
    var CmsModule_1;
    CmsModule = CmsModule_1 = __decorate([
        NgModule({
            imports: [CmsStoreModule, CmsPageTitleModule],
        })
    ], CmsModule);
    return CmsModule;
}());
export { CmsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jbXMvY21zLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDckUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUtsRTtJQUFBO0lBT0EsQ0FBQztrQkFQWSxTQUFTO0lBQ2IsaUJBQU8sR0FBZDtRQUNFLE9BQU87WUFDTCxRQUFRLEVBQUUsV0FBUztZQUNuQixTQUFTLEVBQUUsQ0FBQyxVQUFVLEVBQUUsb0JBQW9CLENBQUMsc0JBQXNCLENBQUMsQ0FBQztTQUN0RSxDQUFDO0lBQ0osQ0FBQzs7SUFOVSxTQUFTO1FBSHJCLFFBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQztTQUM5QyxDQUFDO09BQ1csU0FBUyxDQU9yQjtJQUFELGdCQUFDO0NBQUEsQUFQRCxJQU9DO1NBUFksU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBkZWZhdWx0Q21zTW9kdWxlQ29uZmlnIH0gZnJvbSAnLi9jb25maWcvZGVmYXVsdC1jbXMtY29uZmlnJztcbmltcG9ydCB7IENtc1NlcnZpY2UgfSBmcm9tICcuL2ZhY2FkZS9jbXMuc2VydmljZSc7XG5pbXBvcnQgeyBDbXNQYWdlVGl0bGVNb2R1bGUgfSBmcm9tICcuL3BhZ2UvcGFnZS5tb2R1bGUnO1xuaW1wb3J0IHsgQ21zU3RvcmVNb2R1bGUgfSBmcm9tICcuL3N0b3JlL2Ntcy1zdG9yZS5tb2R1bGUnO1xuaW1wb3J0IHsgcHJvdmlkZURlZmF1bHRDb25maWcgfSBmcm9tICcuLi9jb25maWcvY29uZmlnLXByb3ZpZGVycyc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDbXNTdG9yZU1vZHVsZSwgQ21zUGFnZVRpdGxlTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgQ21zTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxDbXNNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IENtc01vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW0Ntc1NlcnZpY2UsIHByb3ZpZGVEZWZhdWx0Q29uZmlnKGRlZmF1bHRDbXNNb2R1bGVDb25maWcpXSxcbiAgICB9O1xuICB9XG59XG4iXX0=
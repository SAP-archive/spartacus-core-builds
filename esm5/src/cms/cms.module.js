import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { provideDefaultConfig } from '../config/config.module';
import { defaultCmsModuleConfig } from './config/default-cms-config';
import { CmsService } from './facade/cms.service';
import { CmsPageTitleModule } from './page/page.module';
import { CmsStoreModule } from './store/cms-store.module';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jbXMvY21zLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDL0QsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDckUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUsxRDtJQUFBO0lBT0EsQ0FBQztrQkFQWSxTQUFTO0lBQ2IsaUJBQU8sR0FBZDtRQUNFLE9BQU87WUFDTCxRQUFRLEVBQUUsV0FBUztZQUNuQixTQUFTLEVBQUUsQ0FBQyxVQUFVLEVBQUUsb0JBQW9CLENBQUMsc0JBQXNCLENBQUMsQ0FBQztTQUN0RSxDQUFDO0lBQ0osQ0FBQzs7SUFOVSxTQUFTO1FBSHJCLFFBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQztTQUM5QyxDQUFDO09BQ1csU0FBUyxDQU9yQjtJQUFELGdCQUFDO0NBQUEsQUFQRCxJQU9DO1NBUFksU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBwcm92aWRlRGVmYXVsdENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9jb25maWcubW9kdWxlJztcbmltcG9ydCB7IGRlZmF1bHRDbXNNb2R1bGVDb25maWcgfSBmcm9tICcuL2NvbmZpZy9kZWZhdWx0LWNtcy1jb25maWcnO1xuaW1wb3J0IHsgQ21zU2VydmljZSB9IGZyb20gJy4vZmFjYWRlL2Ntcy5zZXJ2aWNlJztcbmltcG9ydCB7IENtc1BhZ2VUaXRsZU1vZHVsZSB9IGZyb20gJy4vcGFnZS9wYWdlLm1vZHVsZSc7XG5pbXBvcnQgeyBDbXNTdG9yZU1vZHVsZSB9IGZyb20gJy4vc3RvcmUvY21zLXN0b3JlLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDbXNTdG9yZU1vZHVsZSwgQ21zUGFnZVRpdGxlTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgQ21zTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxDbXNNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IENtc01vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW0Ntc1NlcnZpY2UsIHByb3ZpZGVEZWZhdWx0Q29uZmlnKGRlZmF1bHRDbXNNb2R1bGVDb25maWcpXSxcbiAgICB9O1xuICB9XG59XG4iXX0=
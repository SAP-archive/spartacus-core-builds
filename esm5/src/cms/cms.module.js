import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { Config, provideDefaultConfig } from '../config/config.module';
import { CmsConfig } from './config/cms-config';
import { CmsStructureConfig } from './config/cms-structure.config';
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
            providers: [
                CmsService,
                { provide: CmsConfig, useExisting: Config },
                { provide: CmsStructureConfig, useExisting: Config },
                provideDefaultConfig(defaultCmsModuleConfig),
            ],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jbXMvY21zLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLE1BQU0sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNuRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNyRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDeEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBSzFEO0lBQUE7SUFZQSxDQUFDO2tCQVpZLFNBQVM7SUFDYixpQkFBTyxHQUFkO1FBQ0UsT0FBTztZQUNMLFFBQVEsRUFBRSxXQUFTO1lBQ25CLFNBQVMsRUFBRTtnQkFDVCxVQUFVO2dCQUNWLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFO2dCQUMzQyxFQUFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFO2dCQUNwRCxvQkFBb0IsQ0FBQyxzQkFBc0IsQ0FBQzthQUM3QztTQUNGLENBQUM7SUFDSixDQUFDOztJQVhVLFNBQVM7UUFIckIsUUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDO1NBQzlDLENBQUM7T0FDVyxTQUFTLENBWXJCO0lBQUQsZ0JBQUM7Q0FBQSxBQVpELElBWUM7U0FaWSxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbmZpZywgcHJvdmlkZURlZmF1bHRDb25maWcgfSBmcm9tICcuLi9jb25maWcvY29uZmlnLm1vZHVsZSc7XG5pbXBvcnQgeyBDbXNDb25maWcgfSBmcm9tICcuL2NvbmZpZy9jbXMtY29uZmlnJztcbmltcG9ydCB7IENtc1N0cnVjdHVyZUNvbmZpZyB9IGZyb20gJy4vY29uZmlnL2Ntcy1zdHJ1Y3R1cmUuY29uZmlnJztcbmltcG9ydCB7IGRlZmF1bHRDbXNNb2R1bGVDb25maWcgfSBmcm9tICcuL2NvbmZpZy9kZWZhdWx0LWNtcy1jb25maWcnO1xuaW1wb3J0IHsgQ21zU2VydmljZSB9IGZyb20gJy4vZmFjYWRlL2Ntcy5zZXJ2aWNlJztcbmltcG9ydCB7IENtc1BhZ2VUaXRsZU1vZHVsZSB9IGZyb20gJy4vcGFnZS9wYWdlLm1vZHVsZSc7XG5pbXBvcnQgeyBDbXNTdG9yZU1vZHVsZSB9IGZyb20gJy4vc3RvcmUvY21zLXN0b3JlLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDbXNTdG9yZU1vZHVsZSwgQ21zUGFnZVRpdGxlTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgQ21zTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxDbXNNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IENtc01vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBDbXNTZXJ2aWNlLFxuICAgICAgICB7IHByb3ZpZGU6IENtc0NvbmZpZywgdXNlRXhpc3Rpbmc6IENvbmZpZyB9LFxuICAgICAgICB7IHByb3ZpZGU6IENtc1N0cnVjdHVyZUNvbmZpZywgdXNlRXhpc3Rpbmc6IENvbmZpZyB9LFxuICAgICAgICBwcm92aWRlRGVmYXVsdENvbmZpZyhkZWZhdWx0Q21zTW9kdWxlQ29uZmlnKSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19
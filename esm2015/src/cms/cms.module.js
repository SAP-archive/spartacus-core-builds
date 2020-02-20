var CmsModule_1;
import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { Config, provideConfig } from '../config/config.module';
import { CmsConfig } from './config/cms-config';
import { CmsStructureConfig } from './config/cms-structure.config';
import { defaultCmsModuleConfig } from './config/default-cms-config';
import { CmsService } from './facade/cms.service';
import { CmsPageTitleModule } from './page/page.module';
import { CmsStoreModule } from './store/cms-store.module';
let CmsModule = CmsModule_1 = class CmsModule {
    static forRoot() {
        return {
            ngModule: CmsModule_1,
            providers: [
                CmsService,
                { provide: CmsConfig, useExisting: Config },
                { provide: CmsStructureConfig, useExisting: Config },
                provideConfig(defaultCmsModuleConfig),
            ],
        };
    }
};
CmsModule = CmsModule_1 = __decorate([
    NgModule({
        imports: [CmsStoreModule, CmsPageTitleModule],
    })
], CmsModule);
export { CmsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jbXMvY21zLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDaEUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFLMUQsSUFBYSxTQUFTLGlCQUF0QixNQUFhLFNBQVM7SUFDcEIsTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPO1lBQ0wsUUFBUSxFQUFFLFdBQVM7WUFDbkIsU0FBUyxFQUFFO2dCQUNULFVBQVU7Z0JBQ1YsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUU7Z0JBQzNDLEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUU7Z0JBQ3BELGFBQWEsQ0FBQyxzQkFBc0IsQ0FBQzthQUN0QztTQUNGLENBQUM7SUFDSixDQUFDO0NBQ0YsQ0FBQTtBQVpZLFNBQVM7SUFIckIsUUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDO0tBQzlDLENBQUM7R0FDVyxTQUFTLENBWXJCO1NBWlksU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb25maWcsIHByb3ZpZGVDb25maWcgfSBmcm9tICcuLi9jb25maWcvY29uZmlnLm1vZHVsZSc7XG5pbXBvcnQgeyBDbXNDb25maWcgfSBmcm9tICcuL2NvbmZpZy9jbXMtY29uZmlnJztcbmltcG9ydCB7IENtc1N0cnVjdHVyZUNvbmZpZyB9IGZyb20gJy4vY29uZmlnL2Ntcy1zdHJ1Y3R1cmUuY29uZmlnJztcbmltcG9ydCB7IGRlZmF1bHRDbXNNb2R1bGVDb25maWcgfSBmcm9tICcuL2NvbmZpZy9kZWZhdWx0LWNtcy1jb25maWcnO1xuaW1wb3J0IHsgQ21zU2VydmljZSB9IGZyb20gJy4vZmFjYWRlL2Ntcy5zZXJ2aWNlJztcbmltcG9ydCB7IENtc1BhZ2VUaXRsZU1vZHVsZSB9IGZyb20gJy4vcGFnZS9wYWdlLm1vZHVsZSc7XG5pbXBvcnQgeyBDbXNTdG9yZU1vZHVsZSB9IGZyb20gJy4vc3RvcmUvY21zLXN0b3JlLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDbXNTdG9yZU1vZHVsZSwgQ21zUGFnZVRpdGxlTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgQ21zTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxDbXNNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IENtc01vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBDbXNTZXJ2aWNlLFxuICAgICAgICB7IHByb3ZpZGU6IENtc0NvbmZpZywgdXNlRXhpc3Rpbmc6IENvbmZpZyB9LFxuICAgICAgICB7IHByb3ZpZGU6IENtc1N0cnVjdHVyZUNvbmZpZywgdXNlRXhpc3Rpbmc6IENvbmZpZyB9LFxuICAgICAgICBwcm92aWRlQ29uZmlnKGRlZmF1bHRDbXNNb2R1bGVDb25maWcpLFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXX0=
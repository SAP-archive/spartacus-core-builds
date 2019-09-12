/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { Config, provideConfig } from '../config/config.module';
import { CmsConfig } from './config/cms-config';
import { CmsStructureConfig } from './config/cms-structure.config';
import { defaultCmsModuleConfig } from './config/default-cms-config';
import { CmsService } from './facade/cms.service';
import { CmsPageTitleModule } from './page/page.module';
import { CmsStoreModule } from './store/cms-store.module';
var CmsModule = /** @class */ (function () {
    function CmsModule() {
    }
    /**
     * @return {?}
     */
    CmsModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: CmsModule,
            providers: [
                CmsService,
                { provide: CmsConfig, useExisting: Config },
                { provide: CmsStructureConfig, useExisting: Config },
                provideConfig(defaultCmsModuleConfig),
            ],
        };
    };
    CmsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CmsStoreModule, CmsPageTitleModule],
                },] }
    ];
    return CmsModule;
}());
export { CmsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jbXMvY21zLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDbkUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDckUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUUxRDtJQUFBO0lBZUEsQ0FBQzs7OztJQVhRLGlCQUFPOzs7SUFBZDtRQUNFLE9BQU87WUFDTCxRQUFRLEVBQUUsU0FBUztZQUNuQixTQUFTLEVBQUU7Z0JBQ1QsVUFBVTtnQkFDVixFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRTtnQkFDM0MsRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRTtnQkFDcEQsYUFBYSxDQUFDLHNCQUFzQixDQUFDO2FBQ3RDO1NBQ0YsQ0FBQztJQUNKLENBQUM7O2dCQWRGLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUM7aUJBQzlDOztJQWFELGdCQUFDO0NBQUEsQUFmRCxJQWVDO1NBWlksU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb25maWcsIHByb3ZpZGVDb25maWcgfSBmcm9tICcuLi9jb25maWcvY29uZmlnLm1vZHVsZSc7XG5pbXBvcnQgeyBDbXNDb25maWcgfSBmcm9tICcuL2NvbmZpZy9jbXMtY29uZmlnJztcbmltcG9ydCB7IENtc1N0cnVjdHVyZUNvbmZpZyB9IGZyb20gJy4vY29uZmlnL2Ntcy1zdHJ1Y3R1cmUuY29uZmlnJztcbmltcG9ydCB7IGRlZmF1bHRDbXNNb2R1bGVDb25maWcgfSBmcm9tICcuL2NvbmZpZy9kZWZhdWx0LWNtcy1jb25maWcnO1xuaW1wb3J0IHsgQ21zU2VydmljZSB9IGZyb20gJy4vZmFjYWRlL2Ntcy5zZXJ2aWNlJztcbmltcG9ydCB7IENtc1BhZ2VUaXRsZU1vZHVsZSB9IGZyb20gJy4vcGFnZS9wYWdlLm1vZHVsZSc7XG5pbXBvcnQgeyBDbXNTdG9yZU1vZHVsZSB9IGZyb20gJy4vc3RvcmUvY21zLXN0b3JlLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDbXNTdG9yZU1vZHVsZSwgQ21zUGFnZVRpdGxlTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgQ21zTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxDbXNNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IENtc01vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBDbXNTZXJ2aWNlLFxuICAgICAgICB7IHByb3ZpZGU6IENtc0NvbmZpZywgdXNlRXhpc3Rpbmc6IENvbmZpZyB9LFxuICAgICAgICB7IHByb3ZpZGU6IENtc1N0cnVjdHVyZUNvbmZpZywgdXNlRXhpc3Rpbmc6IENvbmZpZyB9LFxuICAgICAgICBwcm92aWRlQ29uZmlnKGRlZmF1bHRDbXNNb2R1bGVDb25maWcpLFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXX0=
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
export class CmsModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: CmsModule,
            providers: [
                CmsService,
                { provide: CmsConfig, useExisting: Config },
                { provide: CmsStructureConfig, useExisting: Config },
                provideConfig(defaultCmsModuleConfig),
            ],
        };
    }
}
CmsModule.decorators = [
    { type: NgModule, args: [{
                imports: [CmsStoreModule, CmsPageTitleModule],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jbXMvY21zLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDbkUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDckUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUsxRCxNQUFNLE9BQU8sU0FBUzs7OztJQUNwQixNQUFNLENBQUMsT0FBTztRQUNaLE9BQU87WUFDTCxRQUFRLEVBQUUsU0FBUztZQUNuQixTQUFTLEVBQUU7Z0JBQ1QsVUFBVTtnQkFDVixFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRTtnQkFDM0MsRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRTtnQkFDcEQsYUFBYSxDQUFDLHNCQUFzQixDQUFDO2FBQ3RDO1NBQ0YsQ0FBQztJQUNKLENBQUM7OztZQWRGLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUM7YUFDOUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29uZmlnLCBwcm92aWRlQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL2NvbmZpZy5tb2R1bGUnO1xuaW1wb3J0IHsgQ21zQ29uZmlnIH0gZnJvbSAnLi9jb25maWcvY21zLWNvbmZpZyc7XG5pbXBvcnQgeyBDbXNTdHJ1Y3R1cmVDb25maWcgfSBmcm9tICcuL2NvbmZpZy9jbXMtc3RydWN0dXJlLmNvbmZpZyc7XG5pbXBvcnQgeyBkZWZhdWx0Q21zTW9kdWxlQ29uZmlnIH0gZnJvbSAnLi9jb25maWcvZGVmYXVsdC1jbXMtY29uZmlnJztcbmltcG9ydCB7IENtc1NlcnZpY2UgfSBmcm9tICcuL2ZhY2FkZS9jbXMuc2VydmljZSc7XG5pbXBvcnQgeyBDbXNQYWdlVGl0bGVNb2R1bGUgfSBmcm9tICcuL3BhZ2UvcGFnZS5tb2R1bGUnO1xuaW1wb3J0IHsgQ21zU3RvcmVNb2R1bGUgfSBmcm9tICcuL3N0b3JlL2Ntcy1zdG9yZS5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ21zU3RvcmVNb2R1bGUsIENtc1BhZ2VUaXRsZU1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIENtc01vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8Q21zTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBDbXNNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgQ21zU2VydmljZSxcbiAgICAgICAgeyBwcm92aWRlOiBDbXNDb25maWcsIHVzZUV4aXN0aW5nOiBDb25maWcgfSxcbiAgICAgICAgeyBwcm92aWRlOiBDbXNTdHJ1Y3R1cmVDb25maWcsIHVzZUV4aXN0aW5nOiBDb25maWcgfSxcbiAgICAgICAgcHJvdmlkZUNvbmZpZyhkZWZhdWx0Q21zTW9kdWxlQ29uZmlnKSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19
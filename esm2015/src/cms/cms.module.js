/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { Config, ConfigModule } from '../config/index';
import { CmsStructureConfig } from './config/cms-structure.config';
import { CmsConfig, defaultCmsModuleConfig } from './config/index';
import { CmsService } from './facade/index';
import { CmsPageTitleModule } from './page/page.module';
import { CmsStoreModule } from './store/cms-store.module';
export class CmsModule {
}
CmsModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CmsStoreModule,
                    ConfigModule.withConfig(defaultCmsModuleConfig),
                    CmsPageTitleModule,
                ],
                providers: [
                    CmsService,
                    { provide: CmsConfig, useExisting: Config },
                    { provide: CmsStructureConfig, useExisting: Config },
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jbXMvY21zLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxTQUFTLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDeEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBYzFELE1BQU0sT0FBTyxTQUFTOzs7WUFackIsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxjQUFjO29CQUNkLFlBQVksQ0FBQyxVQUFVLENBQUMsc0JBQXNCLENBQUM7b0JBQy9DLGtCQUFrQjtpQkFDbkI7Z0JBQ0QsU0FBUyxFQUFFO29CQUNULFVBQVU7b0JBQ1YsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUU7b0JBQzNDLEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUU7aUJBQ3JEO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29uZmlnLCBDb25maWdNb2R1bGUgfSBmcm9tICcuLi9jb25maWcvaW5kZXgnO1xuaW1wb3J0IHsgQ21zU3RydWN0dXJlQ29uZmlnIH0gZnJvbSAnLi9jb25maWcvY21zLXN0cnVjdHVyZS5jb25maWcnO1xuaW1wb3J0IHsgQ21zQ29uZmlnLCBkZWZhdWx0Q21zTW9kdWxlQ29uZmlnIH0gZnJvbSAnLi9jb25maWcvaW5kZXgnO1xuaW1wb3J0IHsgQ21zU2VydmljZSB9IGZyb20gJy4vZmFjYWRlL2luZGV4JztcbmltcG9ydCB7IENtc1BhZ2VUaXRsZU1vZHVsZSB9IGZyb20gJy4vcGFnZS9wYWdlLm1vZHVsZSc7XG5pbXBvcnQgeyBDbXNTdG9yZU1vZHVsZSB9IGZyb20gJy4vc3RvcmUvY21zLXN0b3JlLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDbXNTdG9yZU1vZHVsZSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZyhkZWZhdWx0Q21zTW9kdWxlQ29uZmlnKSxcbiAgICBDbXNQYWdlVGl0bGVNb2R1bGUsXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIENtc1NlcnZpY2UsXG4gICAgeyBwcm92aWRlOiBDbXNDb25maWcsIHVzZUV4aXN0aW5nOiBDb25maWcgfSxcbiAgICB7IHByb3ZpZGU6IENtc1N0cnVjdHVyZUNvbmZpZywgdXNlRXhpc3Rpbmc6IENvbmZpZyB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBDbXNNb2R1bGUge31cbiJdfQ==
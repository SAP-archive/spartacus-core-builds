/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CmsService } from './facade/index';
import { CmsStoreModule } from './store/cms-store.module';
import { CmsOccModule } from './occ/cms-occ.module';
import { CmsPageTitleModule } from './page/page.module';
import { CmsStructureConfig } from './config/cms-structure.config';
import { Config } from '../config/index';
export class CmsModule {
}
CmsModule.decorators = [
    { type: NgModule, args: [{
                imports: [CmsOccModule, CmsStoreModule, CmsPageTitleModule],
                providers: [CmsService, { provide: CmsStructureConfig, useExisting: Config }],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jbXMvY21zLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzFELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV4RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNuRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFNekMsTUFBTSxPQUFPLFNBQVM7OztZQUpyQixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQztnQkFDM0QsU0FBUyxFQUFFLENBQUMsVUFBVSxFQUFFLEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsQ0FBQzthQUM5RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENtc1NlcnZpY2UgfSBmcm9tICcuL2ZhY2FkZS9pbmRleCc7XG5pbXBvcnQgeyBDbXNTdG9yZU1vZHVsZSB9IGZyb20gJy4vc3RvcmUvY21zLXN0b3JlLm1vZHVsZSc7XG5pbXBvcnQgeyBDbXNPY2NNb2R1bGUgfSBmcm9tICcuL29jYy9jbXMtb2NjLm1vZHVsZSc7XG5pbXBvcnQgeyBDbXNQYWdlVGl0bGVNb2R1bGUgfSBmcm9tICcuL3BhZ2UvcGFnZS5tb2R1bGUnO1xuXG5pbXBvcnQgeyBDbXNTdHJ1Y3R1cmVDb25maWcgfSBmcm9tICcuL2NvbmZpZy9jbXMtc3RydWN0dXJlLmNvbmZpZyc7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi9jb25maWcvaW5kZXgnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ21zT2NjTW9kdWxlLCBDbXNTdG9yZU1vZHVsZSwgQ21zUGFnZVRpdGxlTW9kdWxlXSxcbiAgcHJvdmlkZXJzOiBbQ21zU2VydmljZSwgeyBwcm92aWRlOiBDbXNTdHJ1Y3R1cmVDb25maWcsIHVzZUV4aXN0aW5nOiBDb25maWcgfV0sXG59KVxuZXhwb3J0IGNsYXNzIENtc01vZHVsZSB7fVxuIl19
import { NgModule } from '@angular/core';
import { defaultCmsModuleConfig } from './config/default-cms-config';
import { CmsService } from './facade/cms.service';
import { CmsPageTitleModule } from './page/page.module';
import { CmsStoreModule } from './store/cms-store.module';
import { provideDefaultConfig } from '../config/config-providers';
export class CmsModule {
    static forRoot() {
        return {
            ngModule: CmsModule,
            providers: [CmsService, provideDefaultConfig(defaultCmsModuleConfig)],
        };
    }
}
CmsModule.decorators = [
    { type: NgModule, args: [{
                imports: [CmsStoreModule, CmsPageTitleModule],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL2Ntcy9jbXMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDMUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFLbEUsTUFBTSxPQUFPLFNBQVM7SUFDcEIsTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPO1lBQ0wsUUFBUSxFQUFFLFNBQVM7WUFDbkIsU0FBUyxFQUFFLENBQUMsVUFBVSxFQUFFLG9CQUFvQixDQUFDLHNCQUFzQixDQUFDLENBQUM7U0FDdEUsQ0FBQztJQUNKLENBQUM7OztZQVRGLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUM7YUFDOUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZGVmYXVsdENtc01vZHVsZUNvbmZpZyB9IGZyb20gJy4vY29uZmlnL2RlZmF1bHQtY21zLWNvbmZpZyc7XG5pbXBvcnQgeyBDbXNTZXJ2aWNlIH0gZnJvbSAnLi9mYWNhZGUvY21zLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ21zUGFnZVRpdGxlTW9kdWxlIH0gZnJvbSAnLi9wYWdlL3BhZ2UubW9kdWxlJztcbmltcG9ydCB7IENtc1N0b3JlTW9kdWxlIH0gZnJvbSAnLi9zdG9yZS9jbXMtc3RvcmUubW9kdWxlJztcbmltcG9ydCB7IHByb3ZpZGVEZWZhdWx0Q29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL2NvbmZpZy1wcm92aWRlcnMnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ21zU3RvcmVNb2R1bGUsIENtc1BhZ2VUaXRsZU1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIENtc01vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8Q21zTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBDbXNNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtDbXNTZXJ2aWNlLCBwcm92aWRlRGVmYXVsdENvbmZpZyhkZWZhdWx0Q21zTW9kdWxlQ29uZmlnKV0sXG4gICAgfTtcbiAgfVxufVxuIl19
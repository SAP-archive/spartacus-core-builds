var CmsModule_1;
import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { Config, provideDefaultConfig } from '../config/config.module';
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
                provideDefaultConfig(defaultCmsModuleConfig),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jbXMvY21zLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxNQUFNLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDbkUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDckUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUsxRCxJQUFhLFNBQVMsaUJBQXRCLE1BQWEsU0FBUztJQUNwQixNQUFNLENBQUMsT0FBTztRQUNaLE9BQU87WUFDTCxRQUFRLEVBQUUsV0FBUztZQUNuQixTQUFTLEVBQUU7Z0JBQ1QsVUFBVTtnQkFDVixFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRTtnQkFDM0MsRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRTtnQkFDcEQsb0JBQW9CLENBQUMsc0JBQXNCLENBQUM7YUFDN0M7U0FDRixDQUFDO0lBQ0osQ0FBQztDQUNGLENBQUE7QUFaWSxTQUFTO0lBSHJCLFFBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQztLQUM5QyxDQUFDO0dBQ1csU0FBUyxDQVlyQjtTQVpZLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29uZmlnLCBwcm92aWRlRGVmYXVsdENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9jb25maWcubW9kdWxlJztcbmltcG9ydCB7IENtc0NvbmZpZyB9IGZyb20gJy4vY29uZmlnL2Ntcy1jb25maWcnO1xuaW1wb3J0IHsgQ21zU3RydWN0dXJlQ29uZmlnIH0gZnJvbSAnLi9jb25maWcvY21zLXN0cnVjdHVyZS5jb25maWcnO1xuaW1wb3J0IHsgZGVmYXVsdENtc01vZHVsZUNvbmZpZyB9IGZyb20gJy4vY29uZmlnL2RlZmF1bHQtY21zLWNvbmZpZyc7XG5pbXBvcnQgeyBDbXNTZXJ2aWNlIH0gZnJvbSAnLi9mYWNhZGUvY21zLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ21zUGFnZVRpdGxlTW9kdWxlIH0gZnJvbSAnLi9wYWdlL3BhZ2UubW9kdWxlJztcbmltcG9ydCB7IENtc1N0b3JlTW9kdWxlIH0gZnJvbSAnLi9zdG9yZS9jbXMtc3RvcmUubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0Ntc1N0b3JlTW9kdWxlLCBDbXNQYWdlVGl0bGVNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBDbXNNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPENtc01vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQ21zTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIENtc1NlcnZpY2UsXG4gICAgICAgIHsgcHJvdmlkZTogQ21zQ29uZmlnLCB1c2VFeGlzdGluZzogQ29uZmlnIH0sXG4gICAgICAgIHsgcHJvdmlkZTogQ21zU3RydWN0dXJlQ29uZmlnLCB1c2VFeGlzdGluZzogQ29uZmlnIH0sXG4gICAgICAgIHByb3ZpZGVEZWZhdWx0Q29uZmlnKGRlZmF1bHRDbXNNb2R1bGVDb25maWcpLFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXX0=
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CmsComponentLoader } from '../services/cms-component.loader';
import { CmsPageAdapter } from '../services/cms-page.adapter';
import { CmsPageLoader } from '../services/cms-page.loader';
import { ComponentMapperService } from '../services/component-mapper.service';
import { OccCmsComponentLoader } from './occ-cms-component.loader';
import { OccCmsPageAdapter } from './occ-cms-page.adapter';
import { OccCmsPageLoader } from './occ-cms-page.loader';
export class CmsOccModule {
}
CmsOccModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, HttpClientModule],
                providers: [
                    OccCmsPageLoader,
                    ComponentMapperService,
                    {
                        provide: CmsPageLoader,
                        useClass: OccCmsPageLoader,
                    },
                    {
                        provide: CmsPageAdapter,
                        useClass: OccCmsPageAdapter,
                    },
                    {
                        provide: CmsComponentLoader,
                        useClass: OccCmsComponentLoader,
                    },
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLW9jYy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL29jYy9jbXMtb2NjLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDdEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzlELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQXFCekQsTUFBTSxPQUFPLFlBQVk7OztZQW5CeEIsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxnQkFBZ0IsQ0FBQztnQkFDekMsU0FBUyxFQUFFO29CQUNULGdCQUFnQjtvQkFDaEIsc0JBQXNCO29CQUN0Qjt3QkFDRSxPQUFPLEVBQUUsYUFBYTt3QkFDdEIsUUFBUSxFQUFFLGdCQUFnQjtxQkFDM0I7b0JBQ0Q7d0JBQ0UsT0FBTyxFQUFFLGNBQWM7d0JBQ3ZCLFFBQVEsRUFBRSxpQkFBaUI7cUJBQzVCO29CQUNEO3dCQUNFLE9BQU8sRUFBRSxrQkFBa0I7d0JBQzNCLFFBQVEsRUFBRSxxQkFBcUI7cUJBQ2hDO2lCQUNGO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnRMb2FkZXIgfSBmcm9tICcuLi9zZXJ2aWNlcy9jbXMtY29tcG9uZW50LmxvYWRlcic7XG5pbXBvcnQgeyBDbXNQYWdlQWRhcHRlciB9IGZyb20gJy4uL3NlcnZpY2VzL2Ntcy1wYWdlLmFkYXB0ZXInO1xuaW1wb3J0IHsgQ21zUGFnZUxvYWRlciB9IGZyb20gJy4uL3NlcnZpY2VzL2Ntcy1wYWdlLmxvYWRlcic7XG5pbXBvcnQgeyBDb21wb25lbnRNYXBwZXJTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvY29tcG9uZW50LW1hcHBlci5zZXJ2aWNlJztcbmltcG9ydCB7IE9jY0Ntc0NvbXBvbmVudExvYWRlciB9IGZyb20gJy4vb2NjLWNtcy1jb21wb25lbnQubG9hZGVyJztcbmltcG9ydCB7IE9jY0Ntc1BhZ2VBZGFwdGVyIH0gZnJvbSAnLi9vY2MtY21zLXBhZ2UuYWRhcHRlcic7XG5pbXBvcnQgeyBPY2NDbXNQYWdlTG9hZGVyIH0gZnJvbSAnLi9vY2MtY21zLXBhZ2UubG9hZGVyJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgSHR0cENsaWVudE1vZHVsZV0sXG4gIHByb3ZpZGVyczogW1xuICAgIE9jY0Ntc1BhZ2VMb2FkZXIsXG4gICAgQ29tcG9uZW50TWFwcGVyU2VydmljZSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBDbXNQYWdlTG9hZGVyLFxuICAgICAgdXNlQ2xhc3M6IE9jY0Ntc1BhZ2VMb2FkZXIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBDbXNQYWdlQWRhcHRlcixcbiAgICAgIHVzZUNsYXNzOiBPY2NDbXNQYWdlQWRhcHRlcixcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IENtc0NvbXBvbmVudExvYWRlcixcbiAgICAgIHVzZUNsYXNzOiBPY2NDbXNDb21wb25lbnRMb2FkZXIsXG4gICAgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQ21zT2NjTW9kdWxlIHt9XG4iXX0=
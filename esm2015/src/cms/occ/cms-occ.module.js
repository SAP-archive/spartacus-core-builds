/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CmsPageAdapter } from '../connectors/page/cms-page.adapter';
import { ComponentMapperService } from '../services/component-mapper.service';
import { OccCmsComponentAdapter } from './occ-cms-component.adapter';
import { OccCmsPageNormalizer } from './converters/occ-cms-page-normalizer';
import { OccCmsPageAdapter } from './occ-cms-page.adapter';
import { CMS_PAGE_NORMALIZE } from '../connectors/page/converters';
import { CmsComponentAdapter } from '../connectors/component/cms-component.adapter';
export class CmsOccModule {
}
CmsOccModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, HttpClientModule],
                providers: [
                    ComponentMapperService,
                    {
                        provide: CmsPageAdapter,
                        useClass: OccCmsPageAdapter,
                    },
                    {
                        provide: CMS_PAGE_NORMALIZE,
                        useClass: OccCmsPageNormalizer,
                        multi: true,
                    },
                    {
                        provide: CmsComponentAdapter,
                        useClass: OccCmsComponentAdapter,
                    },
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLW9jYy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL29jYy9jbXMtb2NjLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzNELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBcUJwRixNQUFNLE9BQU8sWUFBWTs7O1lBbkJ4QixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGdCQUFnQixDQUFDO2dCQUN6QyxTQUFTLEVBQUU7b0JBQ1Qsc0JBQXNCO29CQUN0Qjt3QkFDRSxPQUFPLEVBQUUsY0FBYzt3QkFDdkIsUUFBUSxFQUFFLGlCQUFpQjtxQkFDNUI7b0JBQ0Q7d0JBQ0UsT0FBTyxFQUFFLGtCQUFrQjt3QkFDM0IsUUFBUSxFQUFFLG9CQUFvQjt3QkFDOUIsS0FBSyxFQUFFLElBQUk7cUJBQ1o7b0JBQ0Q7d0JBQ0UsT0FBTyxFQUFFLG1CQUFtQjt3QkFDNUIsUUFBUSxFQUFFLHNCQUFzQjtxQkFDakM7aUJBQ0Y7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENtc1BhZ2VBZGFwdGVyIH0gZnJvbSAnLi4vY29ubmVjdG9ycy9wYWdlL2Ntcy1wYWdlLmFkYXB0ZXInO1xuaW1wb3J0IHsgQ29tcG9uZW50TWFwcGVyU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2NvbXBvbmVudC1tYXBwZXIuc2VydmljZSc7XG5pbXBvcnQgeyBPY2NDbXNDb21wb25lbnRBZGFwdGVyIH0gZnJvbSAnLi9vY2MtY21zLWNvbXBvbmVudC5hZGFwdGVyJztcbmltcG9ydCB7IE9jY0Ntc1BhZ2VOb3JtYWxpemVyIH0gZnJvbSAnLi9jb252ZXJ0ZXJzL29jYy1jbXMtcGFnZS1ub3JtYWxpemVyJztcbmltcG9ydCB7IE9jY0Ntc1BhZ2VBZGFwdGVyIH0gZnJvbSAnLi9vY2MtY21zLXBhZ2UuYWRhcHRlcic7XG5pbXBvcnQgeyBDTVNfUEFHRV9OT1JNQUxJWkUgfSBmcm9tICcuLi9jb25uZWN0b3JzL3BhZ2UvY29udmVydGVycyc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnRBZGFwdGVyIH0gZnJvbSAnLi4vY29ubmVjdG9ycy9jb21wb25lbnQvY21zLWNvbXBvbmVudC5hZGFwdGVyJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgSHR0cENsaWVudE1vZHVsZV0sXG4gIHByb3ZpZGVyczogW1xuICAgIENvbXBvbmVudE1hcHBlclNlcnZpY2UsXG4gICAge1xuICAgICAgcHJvdmlkZTogQ21zUGFnZUFkYXB0ZXIsXG4gICAgICB1c2VDbGFzczogT2NjQ21zUGFnZUFkYXB0ZXIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBDTVNfUEFHRV9OT1JNQUxJWkUsXG4gICAgICB1c2VDbGFzczogT2NjQ21zUGFnZU5vcm1hbGl6ZXIsXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IENtc0NvbXBvbmVudEFkYXB0ZXIsXG4gICAgICB1c2VDbGFzczogT2NjQ21zQ29tcG9uZW50QWRhcHRlcixcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBDbXNPY2NNb2R1bGUge31cbiJdfQ==
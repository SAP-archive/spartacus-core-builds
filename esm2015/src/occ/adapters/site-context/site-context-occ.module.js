/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ConfigModule } from '../../../config/config.module';
import { SiteAdapter } from '../../../site-context/connectors/site.adapter';
import { defaultOccSiteContextConfig } from './default-occ-site-context-config';
import { OccSiteAdapter } from './occ-site.adapter';
import { SiteContextInterceptor } from './site-context.interceptor';
export class SiteContextOccModule {
}
SiteContextOccModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    HttpClientModule,
                    ConfigModule.withConfig(defaultOccSiteContextConfig),
                ],
                providers: [
                    {
                        provide: SiteAdapter,
                        useClass: OccSiteAdapter,
                    },
                    {
                        provide: HTTP_INTERCEPTORS,
                        useClass: SiteContextInterceptor,
                        multi: true,
                    },
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZS1jb250ZXh0LW9jYy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvb2NjL2FkYXB0ZXJzL3NpdGUtY29udGV4dC9zaXRlLWNvbnRleHQtb2NjLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzNFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzdELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUM1RSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDcEQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFvQnBFLE1BQU0sT0FBTyxvQkFBb0I7OztZQWxCaEMsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLGdCQUFnQjtvQkFDaEIsWUFBWSxDQUFDLFVBQVUsQ0FBQywyQkFBMkIsQ0FBQztpQkFDckQ7Z0JBQ0QsU0FBUyxFQUFFO29CQUNUO3dCQUNFLE9BQU8sRUFBRSxXQUFXO3dCQUNwQixRQUFRLEVBQUUsY0FBYztxQkFDekI7b0JBQ0Q7d0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjt3QkFDMUIsUUFBUSxFQUFFLHNCQUFzQjt3QkFDaEMsS0FBSyxFQUFFLElBQUk7cUJBQ1o7aUJBQ0Y7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlLCBIVFRQX0lOVEVSQ0VQVE9SUyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb25maWdNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9jb25maWcvY29uZmlnLm1vZHVsZSc7XG5pbXBvcnQgeyBTaXRlQWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL3NpdGUtY29udGV4dC9jb25uZWN0b3JzL3NpdGUuYWRhcHRlcic7XG5pbXBvcnQgeyBkZWZhdWx0T2NjU2l0ZUNvbnRleHRDb25maWcgfSBmcm9tICcuL2RlZmF1bHQtb2NjLXNpdGUtY29udGV4dC1jb25maWcnO1xuaW1wb3J0IHsgT2NjU2l0ZUFkYXB0ZXIgfSBmcm9tICcuL29jYy1zaXRlLmFkYXB0ZXInO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRJbnRlcmNlcHRvciB9IGZyb20gJy4vc2l0ZS1jb250ZXh0LmludGVyY2VwdG9yJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKGRlZmF1bHRPY2NTaXRlQ29udGV4dENvbmZpZyksXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IFNpdGVBZGFwdGVyLFxuICAgICAgdXNlQ2xhc3M6IE9jY1NpdGVBZGFwdGVyLFxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsXG4gICAgICB1c2VDbGFzczogU2l0ZUNvbnRleHRJbnRlcmNlcHRvcixcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFNpdGVDb250ZXh0T2NjTW9kdWxlIHt9XG4iXX0=
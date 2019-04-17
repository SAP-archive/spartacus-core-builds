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
var CmsOccModule = /** @class */ (function () {
    function CmsOccModule() {
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
    return CmsOccModule;
}());
export { CmsOccModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLW9jYy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL29jYy9jbXMtb2NjLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDdEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzlELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUV6RDtJQUFBO0lBbUIyQixDQUFDOztnQkFuQjNCLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsZ0JBQWdCLENBQUM7b0JBQ3pDLFNBQVMsRUFBRTt3QkFDVCxnQkFBZ0I7d0JBQ2hCLHNCQUFzQjt3QkFDdEI7NEJBQ0UsT0FBTyxFQUFFLGFBQWE7NEJBQ3RCLFFBQVEsRUFBRSxnQkFBZ0I7eUJBQzNCO3dCQUNEOzRCQUNFLE9BQU8sRUFBRSxjQUFjOzRCQUN2QixRQUFRLEVBQUUsaUJBQWlCO3lCQUM1Qjt3QkFDRDs0QkFDRSxPQUFPLEVBQUUsa0JBQWtCOzRCQUMzQixRQUFRLEVBQUUscUJBQXFCO3lCQUNoQztxQkFDRjtpQkFDRjs7SUFDMEIsbUJBQUM7Q0FBQSxBQW5CNUIsSUFtQjRCO1NBQWYsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENtc0NvbXBvbmVudExvYWRlciB9IGZyb20gJy4uL3NlcnZpY2VzL2Ntcy1jb21wb25lbnQubG9hZGVyJztcbmltcG9ydCB7IENtc1BhZ2VBZGFwdGVyIH0gZnJvbSAnLi4vc2VydmljZXMvY21zLXBhZ2UuYWRhcHRlcic7XG5pbXBvcnQgeyBDbXNQYWdlTG9hZGVyIH0gZnJvbSAnLi4vc2VydmljZXMvY21zLXBhZ2UubG9hZGVyJztcbmltcG9ydCB7IENvbXBvbmVudE1hcHBlclNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9jb21wb25lbnQtbWFwcGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgT2NjQ21zQ29tcG9uZW50TG9hZGVyIH0gZnJvbSAnLi9vY2MtY21zLWNvbXBvbmVudC5sb2FkZXInO1xuaW1wb3J0IHsgT2NjQ21zUGFnZUFkYXB0ZXIgfSBmcm9tICcuL29jYy1jbXMtcGFnZS5hZGFwdGVyJztcbmltcG9ydCB7IE9jY0Ntc1BhZ2VMb2FkZXIgfSBmcm9tICcuL29jYy1jbXMtcGFnZS5sb2FkZXInO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBIdHRwQ2xpZW50TW9kdWxlXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgT2NjQ21zUGFnZUxvYWRlcixcbiAgICBDb21wb25lbnRNYXBwZXJTZXJ2aWNlLFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IENtc1BhZ2VMb2FkZXIsXG4gICAgICB1c2VDbGFzczogT2NjQ21zUGFnZUxvYWRlcixcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IENtc1BhZ2VBZGFwdGVyLFxuICAgICAgdXNlQ2xhc3M6IE9jY0Ntc1BhZ2VBZGFwdGVyLFxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogQ21zQ29tcG9uZW50TG9hZGVyLFxuICAgICAgdXNlQ2xhc3M6IE9jY0Ntc0NvbXBvbmVudExvYWRlcixcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBDbXNPY2NNb2R1bGUge31cbiJdfQ==
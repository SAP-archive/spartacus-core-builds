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
var CmsOccModule = /** @class */ (function () {
    function CmsOccModule() {
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
    return CmsOccModule;
}());
export { CmsOccModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLW9jYy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL29jYy9jbXMtb2NjLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzNELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBRXBGO0lBQUE7SUFtQjJCLENBQUM7O2dCQW5CM0IsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxnQkFBZ0IsQ0FBQztvQkFDekMsU0FBUyxFQUFFO3dCQUNULHNCQUFzQjt3QkFDdEI7NEJBQ0UsT0FBTyxFQUFFLGNBQWM7NEJBQ3ZCLFFBQVEsRUFBRSxpQkFBaUI7eUJBQzVCO3dCQUNEOzRCQUNFLE9BQU8sRUFBRSxrQkFBa0I7NEJBQzNCLFFBQVEsRUFBRSxvQkFBb0I7NEJBQzlCLEtBQUssRUFBRSxJQUFJO3lCQUNaO3dCQUNEOzRCQUNFLE9BQU8sRUFBRSxtQkFBbUI7NEJBQzVCLFFBQVEsRUFBRSxzQkFBc0I7eUJBQ2pDO3FCQUNGO2lCQUNGOztJQUMwQixtQkFBQztDQUFBLEFBbkI1QixJQW1CNEI7U0FBZixZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ21zUGFnZUFkYXB0ZXIgfSBmcm9tICcuLi9jb25uZWN0b3JzL3BhZ2UvY21zLXBhZ2UuYWRhcHRlcic7XG5pbXBvcnQgeyBDb21wb25lbnRNYXBwZXJTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvY29tcG9uZW50LW1hcHBlci5zZXJ2aWNlJztcbmltcG9ydCB7IE9jY0Ntc0NvbXBvbmVudEFkYXB0ZXIgfSBmcm9tICcuL29jYy1jbXMtY29tcG9uZW50LmFkYXB0ZXInO1xuaW1wb3J0IHsgT2NjQ21zUGFnZU5vcm1hbGl6ZXIgfSBmcm9tICcuL2NvbnZlcnRlcnMvb2NjLWNtcy1wYWdlLW5vcm1hbGl6ZXInO1xuaW1wb3J0IHsgT2NjQ21zUGFnZUFkYXB0ZXIgfSBmcm9tICcuL29jYy1jbXMtcGFnZS5hZGFwdGVyJztcbmltcG9ydCB7IENNU19QQUdFX05PUk1BTElaRSB9IGZyb20gJy4uL2Nvbm5lY3RvcnMvcGFnZS9jb252ZXJ0ZXJzJztcbmltcG9ydCB7IENtc0NvbXBvbmVudEFkYXB0ZXIgfSBmcm9tICcuLi9jb25uZWN0b3JzL2NvbXBvbmVudC9jbXMtY29tcG9uZW50LmFkYXB0ZXInO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBIdHRwQ2xpZW50TW9kdWxlXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgQ29tcG9uZW50TWFwcGVyU2VydmljZSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBDbXNQYWdlQWRhcHRlcixcbiAgICAgIHVzZUNsYXNzOiBPY2NDbXNQYWdlQWRhcHRlcixcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IENNU19QQUdFX05PUk1BTElaRSxcbiAgICAgIHVzZUNsYXNzOiBPY2NDbXNQYWdlTm9ybWFsaXplcixcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogQ21zQ29tcG9uZW50QWRhcHRlcixcbiAgICAgIHVzZUNsYXNzOiBPY2NDbXNDb21wb25lbnRBZGFwdGVyLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIENtc09jY01vZHVsZSB7fVxuIl19
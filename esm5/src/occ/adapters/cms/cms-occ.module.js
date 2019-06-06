/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CmsPageAdapter } from '../../../cms/connectors/page/cms-page.adapter';
import { OccCmsComponentAdapter } from './occ-cms-component.adapter';
import { OccCmsPageNormalizer } from './converters/occ-cms-page-normalizer';
import { OccCmsPageAdapter } from './occ-cms-page.adapter';
import { CMS_PAGE_NORMALIZE } from '../../../cms/connectors/page/converters';
import { CmsComponentAdapter } from '../../../cms/connectors/component/cms-component.adapter';
var CmsOccModule = /** @class */ (function () {
    function CmsOccModule() {
    }
    CmsOccModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, HttpClientModule],
                    providers: [
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLW9jYy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvb2NjL2FkYXB0ZXJzL2Ntcy9jbXMtb2NjLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzNELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBRTlGO0lBQUE7SUFrQjJCLENBQUM7O2dCQWxCM0IsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxnQkFBZ0IsQ0FBQztvQkFDekMsU0FBUyxFQUFFO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxjQUFjOzRCQUN2QixRQUFRLEVBQUUsaUJBQWlCO3lCQUM1Qjt3QkFDRDs0QkFDRSxPQUFPLEVBQUUsa0JBQWtCOzRCQUMzQixRQUFRLEVBQUUsb0JBQW9COzRCQUM5QixLQUFLLEVBQUUsSUFBSTt5QkFDWjt3QkFDRDs0QkFDRSxPQUFPLEVBQUUsbUJBQW1COzRCQUM1QixRQUFRLEVBQUUsc0JBQXNCO3lCQUNqQztxQkFDRjtpQkFDRjs7SUFDMEIsbUJBQUM7Q0FBQSxBQWxCNUIsSUFrQjRCO1NBQWYsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENtc1BhZ2VBZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vY21zL2Nvbm5lY3RvcnMvcGFnZS9jbXMtcGFnZS5hZGFwdGVyJztcbmltcG9ydCB7IE9jY0Ntc0NvbXBvbmVudEFkYXB0ZXIgfSBmcm9tICcuL29jYy1jbXMtY29tcG9uZW50LmFkYXB0ZXInO1xuaW1wb3J0IHsgT2NjQ21zUGFnZU5vcm1hbGl6ZXIgfSBmcm9tICcuL2NvbnZlcnRlcnMvb2NjLWNtcy1wYWdlLW5vcm1hbGl6ZXInO1xuaW1wb3J0IHsgT2NjQ21zUGFnZUFkYXB0ZXIgfSBmcm9tICcuL29jYy1jbXMtcGFnZS5hZGFwdGVyJztcbmltcG9ydCB7IENNU19QQUdFX05PUk1BTElaRSB9IGZyb20gJy4uLy4uLy4uL2Ntcy9jb25uZWN0b3JzL3BhZ2UvY29udmVydGVycyc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnRBZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vY21zL2Nvbm5lY3RvcnMvY29tcG9uZW50L2Ntcy1jb21wb25lbnQuYWRhcHRlcic7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEh0dHBDbGllbnRNb2R1bGVdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBDbXNQYWdlQWRhcHRlcixcbiAgICAgIHVzZUNsYXNzOiBPY2NDbXNQYWdlQWRhcHRlcixcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IENNU19QQUdFX05PUk1BTElaRSxcbiAgICAgIHVzZUNsYXNzOiBPY2NDbXNQYWdlTm9ybWFsaXplcixcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogQ21zQ29tcG9uZW50QWRhcHRlcixcbiAgICAgIHVzZUNsYXNzOiBPY2NDbXNDb21wb25lbnRBZGFwdGVyLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIENtc09jY01vZHVsZSB7fVxuIl19
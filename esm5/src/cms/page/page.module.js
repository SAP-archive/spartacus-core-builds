import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { PageMetaResolver } from './page-meta.resolver';
import { ContentPageMetaResolver } from './content-page-meta.resolver';
var CmsPageTitleModule = /** @class */ (function () {
    function CmsPageTitleModule() {
    }
    CmsPageTitleModule = __decorate([
        NgModule({
            providers: [
                {
                    provide: PageMetaResolver,
                    useExisting: ContentPageMetaResolver,
                    multi: true,
                },
            ],
        })
    ], CmsPageTitleModule);
    return CmsPageTitleModule;
}());
export { CmsPageTitleModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL3BhZ2UvcGFnZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFXdkU7SUFBQTtJQUFpQyxDQUFDO0lBQXJCLGtCQUFrQjtRQVQ5QixRQUFRLENBQUM7WUFDUixTQUFTLEVBQUU7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLGdCQUFnQjtvQkFDekIsV0FBVyxFQUFFLHVCQUF1QjtvQkFDcEMsS0FBSyxFQUFFLElBQUk7aUJBQ1o7YUFDRjtTQUNGLENBQUM7T0FDVyxrQkFBa0IsQ0FBRztJQUFELHlCQUFDO0NBQUEsQUFBbEMsSUFBa0M7U0FBckIsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBhZ2VNZXRhUmVzb2x2ZXIgfSBmcm9tICcuL3BhZ2UtbWV0YS5yZXNvbHZlcic7XG5pbXBvcnQgeyBDb250ZW50UGFnZU1ldGFSZXNvbHZlciB9IGZyb20gJy4vY29udGVudC1wYWdlLW1ldGEucmVzb2x2ZXInO1xuXG5ATmdNb2R1bGUoe1xuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBQYWdlTWV0YVJlc29sdmVyLFxuICAgICAgdXNlRXhpc3Rpbmc6IENvbnRlbnRQYWdlTWV0YVJlc29sdmVyLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQ21zUGFnZVRpdGxlTW9kdWxlIHt9XG4iXX0=
import { __decorate, __read, __spread } from "tslib";
import { NgModule } from '@angular/core';
import { PageMetaResolver } from '../cms/page/page-meta.resolver';
import { ProductReferenceService } from './facade/product-reference.service';
import { ProductReviewService } from './facade/product-review.service';
import { ProductSearchService } from './facade/product-search.service';
import { ProductService } from './facade/product.service';
import { CategoryPageMetaResolver } from './services/category-page-meta.resolver';
import { ProductPageMetaResolver } from './services/product-page-meta.resolver';
import { SearchPageMetaResolver } from './services/search-page-meta.resolver';
import { ProductStoreModule } from './store/product-store.module';
var pageTitleResolvers = [
    {
        provide: PageMetaResolver,
        useExisting: ProductPageMetaResolver,
        multi: true,
    },
    {
        provide: PageMetaResolver,
        useExisting: CategoryPageMetaResolver,
        multi: true,
    },
    {
        provide: PageMetaResolver,
        useExisting: SearchPageMetaResolver,
        multi: true,
    },
];
var ProductModule = /** @class */ (function () {
    function ProductModule() {
    }
    ProductModule_1 = ProductModule;
    ProductModule.forRoot = function () {
        return {
            ngModule: ProductModule_1,
            providers: __spread([
                ProductService,
                ProductSearchService,
                ProductReviewService,
                ProductReferenceService
            ], pageTitleResolvers),
        };
    };
    var ProductModule_1;
    ProductModule = ProductModule_1 = __decorate([
        NgModule({
            imports: [ProductStoreModule],
        })
    ], ProductModule);
    return ProductModule;
}());
export { ProductModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9wcm9kdWN0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDbEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDN0UsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDdkUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDdkUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzFELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRWxFLElBQU0sa0JBQWtCLEdBQUc7SUFDekI7UUFDRSxPQUFPLEVBQUUsZ0JBQWdCO1FBQ3pCLFdBQVcsRUFBRSx1QkFBdUI7UUFDcEMsS0FBSyxFQUFFLElBQUk7S0FDWjtJQUNEO1FBQ0UsT0FBTyxFQUFFLGdCQUFnQjtRQUN6QixXQUFXLEVBQUUsd0JBQXdCO1FBQ3JDLEtBQUssRUFBRSxJQUFJO0tBQ1o7SUFDRDtRQUNFLE9BQU8sRUFBRSxnQkFBZ0I7UUFDekIsV0FBVyxFQUFFLHNCQUFzQjtRQUNuQyxLQUFLLEVBQUUsSUFBSTtLQUNaO0NBQ0YsQ0FBQztBQUtGO0lBQUE7SUFhQSxDQUFDO3NCQWJZLGFBQWE7SUFDakIscUJBQU8sR0FBZDtRQUNFLE9BQU87WUFDTCxRQUFRLEVBQUUsZUFBYTtZQUN2QixTQUFTO2dCQUNQLGNBQWM7Z0JBQ2Qsb0JBQW9CO2dCQUNwQixvQkFBb0I7Z0JBQ3BCLHVCQUF1QjtlQUNwQixrQkFBa0IsQ0FDdEI7U0FDRixDQUFDO0lBQ0osQ0FBQzs7SUFaVSxhQUFhO1FBSHpCLFFBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRSxDQUFDLGtCQUFrQixDQUFDO1NBQzlCLENBQUM7T0FDVyxhQUFhLENBYXpCO0lBQUQsb0JBQUM7Q0FBQSxBQWJELElBYUM7U0FiWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBhZ2VNZXRhUmVzb2x2ZXIgfSBmcm9tICcuLi9jbXMvcGFnZS9wYWdlLW1ldGEucmVzb2x2ZXInO1xuaW1wb3J0IHsgUHJvZHVjdFJlZmVyZW5jZVNlcnZpY2UgfSBmcm9tICcuL2ZhY2FkZS9wcm9kdWN0LXJlZmVyZW5jZS5zZXJ2aWNlJztcbmltcG9ydCB7IFByb2R1Y3RSZXZpZXdTZXJ2aWNlIH0gZnJvbSAnLi9mYWNhZGUvcHJvZHVjdC1yZXZpZXcuc2VydmljZSc7XG5pbXBvcnQgeyBQcm9kdWN0U2VhcmNoU2VydmljZSB9IGZyb20gJy4vZmFjYWRlL3Byb2R1Y3Qtc2VhcmNoLnNlcnZpY2UnO1xuaW1wb3J0IHsgUHJvZHVjdFNlcnZpY2UgfSBmcm9tICcuL2ZhY2FkZS9wcm9kdWN0LnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2F0ZWdvcnlQYWdlTWV0YVJlc29sdmVyIH0gZnJvbSAnLi9zZXJ2aWNlcy9jYXRlZ29yeS1wYWdlLW1ldGEucmVzb2x2ZXInO1xuaW1wb3J0IHsgUHJvZHVjdFBhZ2VNZXRhUmVzb2x2ZXIgfSBmcm9tICcuL3NlcnZpY2VzL3Byb2R1Y3QtcGFnZS1tZXRhLnJlc29sdmVyJztcbmltcG9ydCB7IFNlYXJjaFBhZ2VNZXRhUmVzb2x2ZXIgfSBmcm9tICcuL3NlcnZpY2VzL3NlYXJjaC1wYWdlLW1ldGEucmVzb2x2ZXInO1xuaW1wb3J0IHsgUHJvZHVjdFN0b3JlTW9kdWxlIH0gZnJvbSAnLi9zdG9yZS9wcm9kdWN0LXN0b3JlLm1vZHVsZSc7XG5cbmNvbnN0IHBhZ2VUaXRsZVJlc29sdmVycyA9IFtcbiAge1xuICAgIHByb3ZpZGU6IFBhZ2VNZXRhUmVzb2x2ZXIsXG4gICAgdXNlRXhpc3Rpbmc6IFByb2R1Y3RQYWdlTWV0YVJlc29sdmVyLFxuICAgIG11bHRpOiB0cnVlLFxuICB9LFxuICB7XG4gICAgcHJvdmlkZTogUGFnZU1ldGFSZXNvbHZlcixcbiAgICB1c2VFeGlzdGluZzogQ2F0ZWdvcnlQYWdlTWV0YVJlc29sdmVyLFxuICAgIG11bHRpOiB0cnVlLFxuICB9LFxuICB7XG4gICAgcHJvdmlkZTogUGFnZU1ldGFSZXNvbHZlcixcbiAgICB1c2VFeGlzdGluZzogU2VhcmNoUGFnZU1ldGFSZXNvbHZlcixcbiAgICBtdWx0aTogdHJ1ZSxcbiAgfSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtQcm9kdWN0U3RvcmVNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0TW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxQcm9kdWN0TW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBQcm9kdWN0TW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIFByb2R1Y3RTZXJ2aWNlLFxuICAgICAgICBQcm9kdWN0U2VhcmNoU2VydmljZSxcbiAgICAgICAgUHJvZHVjdFJldmlld1NlcnZpY2UsXG4gICAgICAgIFByb2R1Y3RSZWZlcmVuY2VTZXJ2aWNlLFxuICAgICAgICAuLi5wYWdlVGl0bGVSZXNvbHZlcnMsXG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==
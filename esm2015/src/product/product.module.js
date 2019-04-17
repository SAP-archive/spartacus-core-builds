/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { ProductService, ProductSearchService, ProductReviewService, } from './facade/index';
import { ProductStoreModule } from './store/product-store.module';
import { ProductOccModule } from './occ/product-occ.module';
import { CmsModule } from '../cms/cms.module';
import { PageMetaResolver } from '../cms/page/page-meta.resolver';
import { ProductPageMetaResolver } from './services/product-page-meta.resolver';
import { SearchPageMetaResolver } from './services/search-page-meta.resolver';
import { CategoryPageMetaResolver } from './services/category-page-meta.resolver';
/** @type {?} */
const pageTitleResolvers = [
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
export class ProductModule {
}
ProductModule.decorators = [
    { type: NgModule, args: [{
                imports: [ProductOccModule, ProductStoreModule, CmsModule],
                providers: [
                    ProductService,
                    ProductSearchService,
                    ProductReviewService,
                    ...pageTitleResolvers,
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9wcm9kdWN0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQ0wsY0FBYyxFQUNkLG9CQUFvQixFQUNwQixvQkFBb0IsR0FDckIsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUU1RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDOUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDbEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDaEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDOUUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sd0NBQXdDLENBQUM7O01BRTVFLGtCQUFrQixHQUFHO0lBQ3pCO1FBQ0UsT0FBTyxFQUFFLGdCQUFnQjtRQUN6QixXQUFXLEVBQUUsdUJBQXVCO1FBQ3BDLEtBQUssRUFBRSxJQUFJO0tBQ1o7SUFDRDtRQUNFLE9BQU8sRUFBRSxnQkFBZ0I7UUFDekIsV0FBVyxFQUFFLHdCQUF3QjtRQUNyQyxLQUFLLEVBQUUsSUFBSTtLQUNaO0lBQ0Q7UUFDRSxPQUFPLEVBQUUsZ0JBQWdCO1FBQ3pCLFdBQVcsRUFBRSxzQkFBc0I7UUFDbkMsS0FBSyxFQUFFLElBQUk7S0FDWjtDQUNGO0FBV0QsTUFBTSxPQUFPLGFBQWE7OztZQVR6QixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsa0JBQWtCLEVBQUUsU0FBUyxDQUFDO2dCQUMxRCxTQUFTLEVBQUU7b0JBQ1QsY0FBYztvQkFDZCxvQkFBb0I7b0JBQ3BCLG9CQUFvQjtvQkFDcEIsR0FBRyxrQkFBa0I7aUJBQ3RCO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICBQcm9kdWN0U2VydmljZSxcbiAgUHJvZHVjdFNlYXJjaFNlcnZpY2UsXG4gIFByb2R1Y3RSZXZpZXdTZXJ2aWNlLFxufSBmcm9tICcuL2ZhY2FkZS9pbmRleCc7XG5pbXBvcnQgeyBQcm9kdWN0U3RvcmVNb2R1bGUgfSBmcm9tICcuL3N0b3JlL3Byb2R1Y3Qtc3RvcmUubW9kdWxlJztcbmltcG9ydCB7IFByb2R1Y3RPY2NNb2R1bGUgfSBmcm9tICcuL29jYy9wcm9kdWN0LW9jYy5tb2R1bGUnO1xuXG5pbXBvcnQgeyBDbXNNb2R1bGUgfSBmcm9tICcuLi9jbXMvY21zLm1vZHVsZSc7XG5pbXBvcnQgeyBQYWdlTWV0YVJlc29sdmVyIH0gZnJvbSAnLi4vY21zL3BhZ2UvcGFnZS1tZXRhLnJlc29sdmVyJztcbmltcG9ydCB7IFByb2R1Y3RQYWdlTWV0YVJlc29sdmVyIH0gZnJvbSAnLi9zZXJ2aWNlcy9wcm9kdWN0LXBhZ2UtbWV0YS5yZXNvbHZlcic7XG5pbXBvcnQgeyBTZWFyY2hQYWdlTWV0YVJlc29sdmVyIH0gZnJvbSAnLi9zZXJ2aWNlcy9zZWFyY2gtcGFnZS1tZXRhLnJlc29sdmVyJztcbmltcG9ydCB7IENhdGVnb3J5UGFnZU1ldGFSZXNvbHZlciB9IGZyb20gJy4vc2VydmljZXMvY2F0ZWdvcnktcGFnZS1tZXRhLnJlc29sdmVyJztcblxuY29uc3QgcGFnZVRpdGxlUmVzb2x2ZXJzID0gW1xuICB7XG4gICAgcHJvdmlkZTogUGFnZU1ldGFSZXNvbHZlcixcbiAgICB1c2VFeGlzdGluZzogUHJvZHVjdFBhZ2VNZXRhUmVzb2x2ZXIsXG4gICAgbXVsdGk6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBwcm92aWRlOiBQYWdlTWV0YVJlc29sdmVyLFxuICAgIHVzZUV4aXN0aW5nOiBDYXRlZ29yeVBhZ2VNZXRhUmVzb2x2ZXIsXG4gICAgbXVsdGk6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBwcm92aWRlOiBQYWdlTWV0YVJlc29sdmVyLFxuICAgIHVzZUV4aXN0aW5nOiBTZWFyY2hQYWdlTWV0YVJlc29sdmVyLFxuICAgIG11bHRpOiB0cnVlLFxuICB9LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1Byb2R1Y3RPY2NNb2R1bGUsIFByb2R1Y3RTdG9yZU1vZHVsZSwgQ21zTW9kdWxlXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgUHJvZHVjdFNlcnZpY2UsXG4gICAgUHJvZHVjdFNlYXJjaFNlcnZpY2UsXG4gICAgUHJvZHVjdFJldmlld1NlcnZpY2UsXG4gICAgLi4ucGFnZVRpdGxlUmVzb2x2ZXJzLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0TW9kdWxlIHt9XG4iXX0=
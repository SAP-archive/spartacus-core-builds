/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
/** @type {?} */
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
    /**
     * @return {?}
     */
    ProductModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: ProductModule,
            providers: tslib_1.__spread([
                ProductService,
                ProductSearchService,
                ProductReviewService,
                ProductReferenceService
            ], pageTitleResolvers),
        };
    };
    ProductModule.decorators = [
        { type: NgModule, args: [{
                    imports: [ProductStoreModule],
                },] }
    ];
    return ProductModule;
}());
export { ProductModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9wcm9kdWN0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUNsRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7SUFFNUQsa0JBQWtCLEdBQUc7SUFDekI7UUFDRSxPQUFPLEVBQUUsZ0JBQWdCO1FBQ3pCLFdBQVcsRUFBRSx1QkFBdUI7UUFDcEMsS0FBSyxFQUFFLElBQUk7S0FDWjtJQUNEO1FBQ0UsT0FBTyxFQUFFLGdCQUFnQjtRQUN6QixXQUFXLEVBQUUsd0JBQXdCO1FBQ3JDLEtBQUssRUFBRSxJQUFJO0tBQ1o7SUFDRDtRQUNFLE9BQU8sRUFBRSxnQkFBZ0I7UUFDekIsV0FBVyxFQUFFLHNCQUFzQjtRQUNuQyxLQUFLLEVBQUUsSUFBSTtLQUNaO0NBQ0Y7QUFFRDtJQUFBO0lBZ0JBLENBQUM7Ozs7SUFaUSxxQkFBTzs7O0lBQWQ7UUFDRSxPQUFPO1lBQ0wsUUFBUSxFQUFFLGFBQWE7WUFDdkIsU0FBUztnQkFDUCxjQUFjO2dCQUNkLG9CQUFvQjtnQkFDcEIsb0JBQW9CO2dCQUNwQix1QkFBdUI7ZUFDcEIsa0JBQWtCLENBQ3RCO1NBQ0YsQ0FBQztJQUNKLENBQUM7O2dCQWZGLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztpQkFDOUI7O0lBY0Qsb0JBQUM7Q0FBQSxBQWhCRCxJQWdCQztTQWJZLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGFnZU1ldGFSZXNvbHZlciB9IGZyb20gJy4uL2Ntcy9wYWdlL3BhZ2UtbWV0YS5yZXNvbHZlcic7XG5pbXBvcnQgeyBQcm9kdWN0UmVmZXJlbmNlU2VydmljZSB9IGZyb20gJy4vZmFjYWRlL3Byb2R1Y3QtcmVmZXJlbmNlLnNlcnZpY2UnO1xuaW1wb3J0IHsgUHJvZHVjdFJldmlld1NlcnZpY2UgfSBmcm9tICcuL2ZhY2FkZS9wcm9kdWN0LXJldmlldy5zZXJ2aWNlJztcbmltcG9ydCB7IFByb2R1Y3RTZWFyY2hTZXJ2aWNlIH0gZnJvbSAnLi9mYWNhZGUvcHJvZHVjdC1zZWFyY2guc2VydmljZSc7XG5pbXBvcnQgeyBQcm9kdWN0U2VydmljZSB9IGZyb20gJy4vZmFjYWRlL3Byb2R1Y3Quc2VydmljZSc7XG5pbXBvcnQgeyBDYXRlZ29yeVBhZ2VNZXRhUmVzb2x2ZXIgfSBmcm9tICcuL3NlcnZpY2VzL2NhdGVnb3J5LXBhZ2UtbWV0YS5yZXNvbHZlcic7XG5pbXBvcnQgeyBQcm9kdWN0UGFnZU1ldGFSZXNvbHZlciB9IGZyb20gJy4vc2VydmljZXMvcHJvZHVjdC1wYWdlLW1ldGEucmVzb2x2ZXInO1xuaW1wb3J0IHsgU2VhcmNoUGFnZU1ldGFSZXNvbHZlciB9IGZyb20gJy4vc2VydmljZXMvc2VhcmNoLXBhZ2UtbWV0YS5yZXNvbHZlcic7XG5pbXBvcnQgeyBQcm9kdWN0U3RvcmVNb2R1bGUgfSBmcm9tICcuL3N0b3JlL3Byb2R1Y3Qtc3RvcmUubW9kdWxlJztcblxuY29uc3QgcGFnZVRpdGxlUmVzb2x2ZXJzID0gW1xuICB7XG4gICAgcHJvdmlkZTogUGFnZU1ldGFSZXNvbHZlcixcbiAgICB1c2VFeGlzdGluZzogUHJvZHVjdFBhZ2VNZXRhUmVzb2x2ZXIsXG4gICAgbXVsdGk6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBwcm92aWRlOiBQYWdlTWV0YVJlc29sdmVyLFxuICAgIHVzZUV4aXN0aW5nOiBDYXRlZ29yeVBhZ2VNZXRhUmVzb2x2ZXIsXG4gICAgbXVsdGk6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBwcm92aWRlOiBQYWdlTWV0YVJlc29sdmVyLFxuICAgIHVzZUV4aXN0aW5nOiBTZWFyY2hQYWdlTWV0YVJlc29sdmVyLFxuICAgIG11bHRpOiB0cnVlLFxuICB9LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1Byb2R1Y3RTdG9yZU1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPFByb2R1Y3RNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFByb2R1Y3RNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgUHJvZHVjdFNlcnZpY2UsXG4gICAgICAgIFByb2R1Y3RTZWFyY2hTZXJ2aWNlLFxuICAgICAgICBQcm9kdWN0UmV2aWV3U2VydmljZSxcbiAgICAgICAgUHJvZHVjdFJlZmVyZW5jZVNlcnZpY2UsXG4gICAgICAgIC4uLnBhZ2VUaXRsZVJlc29sdmVycyxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19
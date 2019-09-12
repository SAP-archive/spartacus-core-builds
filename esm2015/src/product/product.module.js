/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: ProductModule,
            providers: [
                ProductService,
                ProductSearchService,
                ProductReviewService,
                ProductReferenceService,
                ...pageTitleResolvers,
            ],
        };
    }
}
ProductModule.decorators = [
    { type: NgModule, args: [{
                imports: [ProductStoreModule],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9wcm9kdWN0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDbEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDN0UsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDdkUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDdkUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzFELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDOztNQUU1RCxrQkFBa0IsR0FBRztJQUN6QjtRQUNFLE9BQU8sRUFBRSxnQkFBZ0I7UUFDekIsV0FBVyxFQUFFLHVCQUF1QjtRQUNwQyxLQUFLLEVBQUUsSUFBSTtLQUNaO0lBQ0Q7UUFDRSxPQUFPLEVBQUUsZ0JBQWdCO1FBQ3pCLFdBQVcsRUFBRSx3QkFBd0I7UUFDckMsS0FBSyxFQUFFLElBQUk7S0FDWjtJQUNEO1FBQ0UsT0FBTyxFQUFFLGdCQUFnQjtRQUN6QixXQUFXLEVBQUUsc0JBQXNCO1FBQ25DLEtBQUssRUFBRSxJQUFJO0tBQ1o7Q0FDRjtBQUtELE1BQU0sT0FBTyxhQUFhOzs7O0lBQ3hCLE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFNBQVMsRUFBRTtnQkFDVCxjQUFjO2dCQUNkLG9CQUFvQjtnQkFDcEIsb0JBQW9CO2dCQUNwQix1QkFBdUI7Z0JBQ3ZCLEdBQUcsa0JBQWtCO2FBQ3RCO1NBQ0YsQ0FBQztJQUNKLENBQUM7OztZQWZGLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQzthQUM5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYWdlTWV0YVJlc29sdmVyIH0gZnJvbSAnLi4vY21zL3BhZ2UvcGFnZS1tZXRhLnJlc29sdmVyJztcbmltcG9ydCB7IFByb2R1Y3RSZWZlcmVuY2VTZXJ2aWNlIH0gZnJvbSAnLi9mYWNhZGUvcHJvZHVjdC1yZWZlcmVuY2Uuc2VydmljZSc7XG5pbXBvcnQgeyBQcm9kdWN0UmV2aWV3U2VydmljZSB9IGZyb20gJy4vZmFjYWRlL3Byb2R1Y3QtcmV2aWV3LnNlcnZpY2UnO1xuaW1wb3J0IHsgUHJvZHVjdFNlYXJjaFNlcnZpY2UgfSBmcm9tICcuL2ZhY2FkZS9wcm9kdWN0LXNlYXJjaC5zZXJ2aWNlJztcbmltcG9ydCB7IFByb2R1Y3RTZXJ2aWNlIH0gZnJvbSAnLi9mYWNhZGUvcHJvZHVjdC5zZXJ2aWNlJztcbmltcG9ydCB7IENhdGVnb3J5UGFnZU1ldGFSZXNvbHZlciB9IGZyb20gJy4vc2VydmljZXMvY2F0ZWdvcnktcGFnZS1tZXRhLnJlc29sdmVyJztcbmltcG9ydCB7IFByb2R1Y3RQYWdlTWV0YVJlc29sdmVyIH0gZnJvbSAnLi9zZXJ2aWNlcy9wcm9kdWN0LXBhZ2UtbWV0YS5yZXNvbHZlcic7XG5pbXBvcnQgeyBTZWFyY2hQYWdlTWV0YVJlc29sdmVyIH0gZnJvbSAnLi9zZXJ2aWNlcy9zZWFyY2gtcGFnZS1tZXRhLnJlc29sdmVyJztcbmltcG9ydCB7IFByb2R1Y3RTdG9yZU1vZHVsZSB9IGZyb20gJy4vc3RvcmUvcHJvZHVjdC1zdG9yZS5tb2R1bGUnO1xuXG5jb25zdCBwYWdlVGl0bGVSZXNvbHZlcnMgPSBbXG4gIHtcbiAgICBwcm92aWRlOiBQYWdlTWV0YVJlc29sdmVyLFxuICAgIHVzZUV4aXN0aW5nOiBQcm9kdWN0UGFnZU1ldGFSZXNvbHZlcixcbiAgICBtdWx0aTogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHByb3ZpZGU6IFBhZ2VNZXRhUmVzb2x2ZXIsXG4gICAgdXNlRXhpc3Rpbmc6IENhdGVnb3J5UGFnZU1ldGFSZXNvbHZlcixcbiAgICBtdWx0aTogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHByb3ZpZGU6IFBhZ2VNZXRhUmVzb2x2ZXIsXG4gICAgdXNlRXhpc3Rpbmc6IFNlYXJjaFBhZ2VNZXRhUmVzb2x2ZXIsXG4gICAgbXVsdGk6IHRydWUsXG4gIH0sXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbUHJvZHVjdFN0b3JlTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdE1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8UHJvZHVjdE1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogUHJvZHVjdE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBQcm9kdWN0U2VydmljZSxcbiAgICAgICAgUHJvZHVjdFNlYXJjaFNlcnZpY2UsXG4gICAgICAgIFByb2R1Y3RSZXZpZXdTZXJ2aWNlLFxuICAgICAgICBQcm9kdWN0UmVmZXJlbmNlU2VydmljZSxcbiAgICAgICAgLi4ucGFnZVRpdGxlUmVzb2x2ZXJzLFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXX0=
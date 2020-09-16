import { NgModule } from '@angular/core';
import { PageMetaResolver } from '../cms/page/page-meta.resolver';
import { CategoryPageMetaResolver } from './services/category-page-meta.resolver';
import { CouponSearchPageResolver } from './services/coupon-search-page-meta.resolver';
import { ProductPageMetaResolver } from './services/product-page-meta.resolver';
import { SearchPageMetaResolver } from './services/search-page-meta.resolver';
import { ProductStoreModule } from './store/product-store.module';
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
    {
        provide: PageMetaResolver,
        useExisting: CouponSearchPageResolver,
        multi: true,
    },
];
export class ProductModule {
    static forRoot() {
        return {
            ngModule: ProductModule,
            providers: [...pageTitleResolvers],
        };
    }
}
ProductModule.decorators = [
    { type: NgModule, args: [{
                imports: [ProductStoreModule],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3NyYy9wcm9kdWN0L3Byb2R1Y3QubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRWxFLE1BQU0sa0JBQWtCLEdBQUc7SUFDekI7UUFDRSxPQUFPLEVBQUUsZ0JBQWdCO1FBQ3pCLFdBQVcsRUFBRSx1QkFBdUI7UUFDcEMsS0FBSyxFQUFFLElBQUk7S0FDWjtJQUNEO1FBQ0UsT0FBTyxFQUFFLGdCQUFnQjtRQUN6QixXQUFXLEVBQUUsd0JBQXdCO1FBQ3JDLEtBQUssRUFBRSxJQUFJO0tBQ1o7SUFDRDtRQUNFLE9BQU8sRUFBRSxnQkFBZ0I7UUFDekIsV0FBVyxFQUFFLHNCQUFzQjtRQUNuQyxLQUFLLEVBQUUsSUFBSTtLQUNaO0lBQ0Q7UUFDRSxPQUFPLEVBQUUsZ0JBQWdCO1FBQ3pCLFdBQVcsRUFBRSx3QkFBd0I7UUFDckMsS0FBSyxFQUFFLElBQUk7S0FDWjtDQUNGLENBQUM7QUFLRixNQUFNLE9BQU8sYUFBYTtJQUN4QixNQUFNLENBQUMsT0FBTztRQUNaLE9BQU87WUFDTCxRQUFRLEVBQUUsYUFBYTtZQUN2QixTQUFTLEVBQUUsQ0FBQyxHQUFHLGtCQUFrQixDQUFDO1NBQ25DLENBQUM7SUFDSixDQUFDOzs7WUFURixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsa0JBQWtCLENBQUM7YUFDOUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGFnZU1ldGFSZXNvbHZlciB9IGZyb20gJy4uL2Ntcy9wYWdlL3BhZ2UtbWV0YS5yZXNvbHZlcic7XG5pbXBvcnQgeyBDYXRlZ29yeVBhZ2VNZXRhUmVzb2x2ZXIgfSBmcm9tICcuL3NlcnZpY2VzL2NhdGVnb3J5LXBhZ2UtbWV0YS5yZXNvbHZlcic7XG5pbXBvcnQgeyBDb3Vwb25TZWFyY2hQYWdlUmVzb2x2ZXIgfSBmcm9tICcuL3NlcnZpY2VzL2NvdXBvbi1zZWFyY2gtcGFnZS1tZXRhLnJlc29sdmVyJztcbmltcG9ydCB7IFByb2R1Y3RQYWdlTWV0YVJlc29sdmVyIH0gZnJvbSAnLi9zZXJ2aWNlcy9wcm9kdWN0LXBhZ2UtbWV0YS5yZXNvbHZlcic7XG5pbXBvcnQgeyBTZWFyY2hQYWdlTWV0YVJlc29sdmVyIH0gZnJvbSAnLi9zZXJ2aWNlcy9zZWFyY2gtcGFnZS1tZXRhLnJlc29sdmVyJztcbmltcG9ydCB7IFByb2R1Y3RTdG9yZU1vZHVsZSB9IGZyb20gJy4vc3RvcmUvcHJvZHVjdC1zdG9yZS5tb2R1bGUnO1xuXG5jb25zdCBwYWdlVGl0bGVSZXNvbHZlcnMgPSBbXG4gIHtcbiAgICBwcm92aWRlOiBQYWdlTWV0YVJlc29sdmVyLFxuICAgIHVzZUV4aXN0aW5nOiBQcm9kdWN0UGFnZU1ldGFSZXNvbHZlcixcbiAgICBtdWx0aTogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHByb3ZpZGU6IFBhZ2VNZXRhUmVzb2x2ZXIsXG4gICAgdXNlRXhpc3Rpbmc6IENhdGVnb3J5UGFnZU1ldGFSZXNvbHZlcixcbiAgICBtdWx0aTogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHByb3ZpZGU6IFBhZ2VNZXRhUmVzb2x2ZXIsXG4gICAgdXNlRXhpc3Rpbmc6IFNlYXJjaFBhZ2VNZXRhUmVzb2x2ZXIsXG4gICAgbXVsdGk6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBwcm92aWRlOiBQYWdlTWV0YVJlc29sdmVyLFxuICAgIHVzZUV4aXN0aW5nOiBDb3Vwb25TZWFyY2hQYWdlUmVzb2x2ZXIsXG4gICAgbXVsdGk6IHRydWUsXG4gIH0sXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbUHJvZHVjdFN0b3JlTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdE1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8UHJvZHVjdE1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogUHJvZHVjdE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogWy4uLnBhZ2VUaXRsZVJlc29sdmVyc10sXG4gICAgfTtcbiAgfVxufVxuIl19
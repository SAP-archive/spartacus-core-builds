import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { PRODUCT_NORMALIZER } from '../../../product/connectors/product/converters';
import { ProductAdapter } from '../../../product/connectors/product/product.adapter';
import { PRODUCT_REFERENCES_NORMALIZER } from '../../../product/connectors/references/converters';
import { ProductReferencesAdapter } from '../../../product/connectors/references/product-references.adapter';
import { ProductReviewsAdapter } from '../../../product/connectors/reviews/product-reviews.adapter';
import { PRODUCT_SEARCH_PAGE_NORMALIZER } from '../../../product/connectors/search/converters';
import { ProductSearchAdapter } from '../../../product/connectors/search/product-search.adapter';
import { OccProductReferencesListNormalizer } from './converters/occ-product-references-list-normalizer';
import { OccProductSearchPageNormalizer } from './converters/occ-product-search-page-normalizer';
import { ProductImageNormalizer } from './converters/product-image-normalizer';
import { OccProductReferencesAdapter } from './occ-product-references.adapter';
import { OccProductReviewsAdapter } from './occ-product-reviews.adapter';
import { OccProductSearchAdapter } from './occ-product-search.adapter';
import { OccProductAdapter } from './occ-product.adapter';
import { ProductNameNormalizer } from './converters/product-name-normalizer';
import { defaultOccProductConfig } from './default-occ-product-config';
import './product-occ-config';
import { provideDefaultConfig } from '../../../config/config-providers';
export class ProductOccModule {
}
ProductOccModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, HttpClientModule],
                providers: [
                    provideDefaultConfig(defaultOccProductConfig),
                    {
                        provide: ProductAdapter,
                        useClass: OccProductAdapter,
                    },
                    {
                        provide: PRODUCT_NORMALIZER,
                        useExisting: ProductImageNormalizer,
                        multi: true,
                    },
                    {
                        provide: PRODUCT_NORMALIZER,
                        useExisting: ProductNameNormalizer,
                        multi: true,
                    },
                    {
                        provide: ProductReferencesAdapter,
                        useClass: OccProductReferencesAdapter,
                    },
                    {
                        provide: PRODUCT_REFERENCES_NORMALIZER,
                        useExisting: OccProductReferencesListNormalizer,
                        multi: true,
                    },
                    {
                        provide: ProductSearchAdapter,
                        useClass: OccProductSearchAdapter,
                    },
                    {
                        provide: PRODUCT_SEARCH_PAGE_NORMALIZER,
                        useExisting: OccProductSearchPageNormalizer,
                        multi: true,
                    },
                    {
                        provide: ProductReviewsAdapter,
                        useClass: OccProductReviewsAdapter,
                    },
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1vY2MubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS9zcmMvb2NjL2FkYXB0ZXJzL3Byb2R1Y3QvcHJvZHVjdC1vY2MubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUNyRixPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUNsRyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxtRUFBbUUsQ0FBQztBQUM3RyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUNwRyxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUMvRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUNqRyxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUN6RyxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUNqRyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUM3RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN2RSxPQUFPLHNCQUFzQixDQUFDO0FBQzlCLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBNEN4RSxNQUFNLE9BQU8sZ0JBQWdCOzs7WUExQzVCLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsZ0JBQWdCLENBQUM7Z0JBQ3pDLFNBQVMsRUFBRTtvQkFDVCxvQkFBb0IsQ0FBQyx1QkFBdUIsQ0FBQztvQkFDN0M7d0JBQ0UsT0FBTyxFQUFFLGNBQWM7d0JBQ3ZCLFFBQVEsRUFBRSxpQkFBaUI7cUJBQzVCO29CQUNEO3dCQUNFLE9BQU8sRUFBRSxrQkFBa0I7d0JBQzNCLFdBQVcsRUFBRSxzQkFBc0I7d0JBQ25DLEtBQUssRUFBRSxJQUFJO3FCQUNaO29CQUNEO3dCQUNFLE9BQU8sRUFBRSxrQkFBa0I7d0JBQzNCLFdBQVcsRUFBRSxxQkFBcUI7d0JBQ2xDLEtBQUssRUFBRSxJQUFJO3FCQUNaO29CQUNEO3dCQUNFLE9BQU8sRUFBRSx3QkFBd0I7d0JBQ2pDLFFBQVEsRUFBRSwyQkFBMkI7cUJBQ3RDO29CQUNEO3dCQUNFLE9BQU8sRUFBRSw2QkFBNkI7d0JBQ3RDLFdBQVcsRUFBRSxrQ0FBa0M7d0JBQy9DLEtBQUssRUFBRSxJQUFJO3FCQUNaO29CQUNEO3dCQUNFLE9BQU8sRUFBRSxvQkFBb0I7d0JBQzdCLFFBQVEsRUFBRSx1QkFBdUI7cUJBQ2xDO29CQUNEO3dCQUNFLE9BQU8sRUFBRSw4QkFBOEI7d0JBQ3ZDLFdBQVcsRUFBRSw4QkFBOEI7d0JBQzNDLEtBQUssRUFBRSxJQUFJO3FCQUNaO29CQUNEO3dCQUNFLE9BQU8sRUFBRSxxQkFBcUI7d0JBQzlCLFFBQVEsRUFBRSx3QkFBd0I7cUJBQ25DO2lCQUNGO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQUk9EVUNUX05PUk1BTElaRVIgfSBmcm9tICcuLi8uLi8uLi9wcm9kdWN0L2Nvbm5lY3RvcnMvcHJvZHVjdC9jb252ZXJ0ZXJzJztcbmltcG9ydCB7IFByb2R1Y3RBZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vcHJvZHVjdC9jb25uZWN0b3JzL3Byb2R1Y3QvcHJvZHVjdC5hZGFwdGVyJztcbmltcG9ydCB7IFBST0RVQ1RfUkVGRVJFTkNFU19OT1JNQUxJWkVSIH0gZnJvbSAnLi4vLi4vLi4vcHJvZHVjdC9jb25uZWN0b3JzL3JlZmVyZW5jZXMvY29udmVydGVycyc7XG5pbXBvcnQgeyBQcm9kdWN0UmVmZXJlbmNlc0FkYXB0ZXIgfSBmcm9tICcuLi8uLi8uLi9wcm9kdWN0L2Nvbm5lY3RvcnMvcmVmZXJlbmNlcy9wcm9kdWN0LXJlZmVyZW5jZXMuYWRhcHRlcic7XG5pbXBvcnQgeyBQcm9kdWN0UmV2aWV3c0FkYXB0ZXIgfSBmcm9tICcuLi8uLi8uLi9wcm9kdWN0L2Nvbm5lY3RvcnMvcmV2aWV3cy9wcm9kdWN0LXJldmlld3MuYWRhcHRlcic7XG5pbXBvcnQgeyBQUk9EVUNUX1NFQVJDSF9QQUdFX05PUk1BTElaRVIgfSBmcm9tICcuLi8uLi8uLi9wcm9kdWN0L2Nvbm5lY3RvcnMvc2VhcmNoL2NvbnZlcnRlcnMnO1xuaW1wb3J0IHsgUHJvZHVjdFNlYXJjaEFkYXB0ZXIgfSBmcm9tICcuLi8uLi8uLi9wcm9kdWN0L2Nvbm5lY3RvcnMvc2VhcmNoL3Byb2R1Y3Qtc2VhcmNoLmFkYXB0ZXInO1xuaW1wb3J0IHsgT2NjUHJvZHVjdFJlZmVyZW5jZXNMaXN0Tm9ybWFsaXplciB9IGZyb20gJy4vY29udmVydGVycy9vY2MtcHJvZHVjdC1yZWZlcmVuY2VzLWxpc3Qtbm9ybWFsaXplcic7XG5pbXBvcnQgeyBPY2NQcm9kdWN0U2VhcmNoUGFnZU5vcm1hbGl6ZXIgfSBmcm9tICcuL2NvbnZlcnRlcnMvb2NjLXByb2R1Y3Qtc2VhcmNoLXBhZ2Utbm9ybWFsaXplcic7XG5pbXBvcnQgeyBQcm9kdWN0SW1hZ2VOb3JtYWxpemVyIH0gZnJvbSAnLi9jb252ZXJ0ZXJzL3Byb2R1Y3QtaW1hZ2Utbm9ybWFsaXplcic7XG5pbXBvcnQgeyBPY2NQcm9kdWN0UmVmZXJlbmNlc0FkYXB0ZXIgfSBmcm9tICcuL29jYy1wcm9kdWN0LXJlZmVyZW5jZXMuYWRhcHRlcic7XG5pbXBvcnQgeyBPY2NQcm9kdWN0UmV2aWV3c0FkYXB0ZXIgfSBmcm9tICcuL29jYy1wcm9kdWN0LXJldmlld3MuYWRhcHRlcic7XG5pbXBvcnQgeyBPY2NQcm9kdWN0U2VhcmNoQWRhcHRlciB9IGZyb20gJy4vb2NjLXByb2R1Y3Qtc2VhcmNoLmFkYXB0ZXInO1xuaW1wb3J0IHsgT2NjUHJvZHVjdEFkYXB0ZXIgfSBmcm9tICcuL29jYy1wcm9kdWN0LmFkYXB0ZXInO1xuaW1wb3J0IHsgUHJvZHVjdE5hbWVOb3JtYWxpemVyIH0gZnJvbSAnLi9jb252ZXJ0ZXJzL3Byb2R1Y3QtbmFtZS1ub3JtYWxpemVyJztcbmltcG9ydCB7IGRlZmF1bHRPY2NQcm9kdWN0Q29uZmlnIH0gZnJvbSAnLi9kZWZhdWx0LW9jYy1wcm9kdWN0LWNvbmZpZyc7XG5pbXBvcnQgJy4vcHJvZHVjdC1vY2MtY29uZmlnJztcbmltcG9ydCB7IHByb3ZpZGVEZWZhdWx0Q29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vY29uZmlnL2NvbmZpZy1wcm92aWRlcnMnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBIdHRwQ2xpZW50TW9kdWxlXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgcHJvdmlkZURlZmF1bHRDb25maWcoZGVmYXVsdE9jY1Byb2R1Y3RDb25maWcpLFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IFByb2R1Y3RBZGFwdGVyLFxuICAgICAgdXNlQ2xhc3M6IE9jY1Byb2R1Y3RBZGFwdGVyLFxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogUFJPRFVDVF9OT1JNQUxJWkVSLFxuICAgICAgdXNlRXhpc3Rpbmc6IFByb2R1Y3RJbWFnZU5vcm1hbGl6ZXIsXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IFBST0RVQ1RfTk9STUFMSVpFUixcbiAgICAgIHVzZUV4aXN0aW5nOiBQcm9kdWN0TmFtZU5vcm1hbGl6ZXIsXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IFByb2R1Y3RSZWZlcmVuY2VzQWRhcHRlcixcbiAgICAgIHVzZUNsYXNzOiBPY2NQcm9kdWN0UmVmZXJlbmNlc0FkYXB0ZXIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBQUk9EVUNUX1JFRkVSRU5DRVNfTk9STUFMSVpFUixcbiAgICAgIHVzZUV4aXN0aW5nOiBPY2NQcm9kdWN0UmVmZXJlbmNlc0xpc3ROb3JtYWxpemVyLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBQcm9kdWN0U2VhcmNoQWRhcHRlcixcbiAgICAgIHVzZUNsYXNzOiBPY2NQcm9kdWN0U2VhcmNoQWRhcHRlcixcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IFBST0RVQ1RfU0VBUkNIX1BBR0VfTk9STUFMSVpFUixcbiAgICAgIHVzZUV4aXN0aW5nOiBPY2NQcm9kdWN0U2VhcmNoUGFnZU5vcm1hbGl6ZXIsXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IFByb2R1Y3RSZXZpZXdzQWRhcHRlcixcbiAgICAgIHVzZUNsYXNzOiBPY2NQcm9kdWN0UmV2aWV3c0FkYXB0ZXIsXG4gICAgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdE9jY01vZHVsZSB7fVxuIl19
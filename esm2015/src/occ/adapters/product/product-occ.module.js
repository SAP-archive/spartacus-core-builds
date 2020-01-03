/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ConfigModule } from '../../../config/config.module';
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
export class ProductOccModule {
}
ProductOccModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    HttpClientModule,
                    ConfigModule.withConfig(defaultOccProductConfig),
                ],
                providers: [
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1vY2MubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL29jYy9hZGFwdGVycy9wcm9kdWN0L3Byb2R1Y3Qtb2NjLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzdELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUNyRixPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUNsRyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxtRUFBbUUsQ0FBQztBQUM3RyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUNwRyxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUMvRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUNqRyxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUN6RyxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUNqRyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUM3RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN2RSxPQUFPLHNCQUFzQixDQUFDO0FBK0M5QixNQUFNLE9BQU8sZ0JBQWdCOzs7WUE3QzVCLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixnQkFBZ0I7b0JBQ2hCLFlBQVksQ0FBQyxVQUFVLENBQUMsdUJBQXVCLENBQUM7aUJBQ2pEO2dCQUNELFNBQVMsRUFBRTtvQkFDVDt3QkFDRSxPQUFPLEVBQUUsY0FBYzt3QkFDdkIsUUFBUSxFQUFFLGlCQUFpQjtxQkFDNUI7b0JBQ0Q7d0JBQ0UsT0FBTyxFQUFFLGtCQUFrQjt3QkFDM0IsV0FBVyxFQUFFLHNCQUFzQjt3QkFDbkMsS0FBSyxFQUFFLElBQUk7cUJBQ1o7b0JBQ0Q7d0JBQ0UsT0FBTyxFQUFFLGtCQUFrQjt3QkFDM0IsV0FBVyxFQUFFLHFCQUFxQjt3QkFDbEMsS0FBSyxFQUFFLElBQUk7cUJBQ1o7b0JBQ0Q7d0JBQ0UsT0FBTyxFQUFFLHdCQUF3Qjt3QkFDakMsUUFBUSxFQUFFLDJCQUEyQjtxQkFDdEM7b0JBQ0Q7d0JBQ0UsT0FBTyxFQUFFLDZCQUE2Qjt3QkFDdEMsV0FBVyxFQUFFLGtDQUFrQzt3QkFDL0MsS0FBSyxFQUFFLElBQUk7cUJBQ1o7b0JBQ0Q7d0JBQ0UsT0FBTyxFQUFFLG9CQUFvQjt3QkFDN0IsUUFBUSxFQUFFLHVCQUF1QjtxQkFDbEM7b0JBQ0Q7d0JBQ0UsT0FBTyxFQUFFLDhCQUE4Qjt3QkFDdkMsV0FBVyxFQUFFLDhCQUE4Qjt3QkFDM0MsS0FBSyxFQUFFLElBQUk7cUJBQ1o7b0JBQ0Q7d0JBQ0UsT0FBTyxFQUFFLHFCQUFxQjt3QkFDOUIsUUFBUSxFQUFFLHdCQUF3QjtxQkFDbkM7aUJBQ0Y7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbmZpZ01vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2NvbmZpZy9jb25maWcubW9kdWxlJztcbmltcG9ydCB7IFBST0RVQ1RfTk9STUFMSVpFUiB9IGZyb20gJy4uLy4uLy4uL3Byb2R1Y3QvY29ubmVjdG9ycy9wcm9kdWN0L2NvbnZlcnRlcnMnO1xuaW1wb3J0IHsgUHJvZHVjdEFkYXB0ZXIgfSBmcm9tICcuLi8uLi8uLi9wcm9kdWN0L2Nvbm5lY3RvcnMvcHJvZHVjdC9wcm9kdWN0LmFkYXB0ZXInO1xuaW1wb3J0IHsgUFJPRFVDVF9SRUZFUkVOQ0VTX05PUk1BTElaRVIgfSBmcm9tICcuLi8uLi8uLi9wcm9kdWN0L2Nvbm5lY3RvcnMvcmVmZXJlbmNlcy9jb252ZXJ0ZXJzJztcbmltcG9ydCB7IFByb2R1Y3RSZWZlcmVuY2VzQWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL3Byb2R1Y3QvY29ubmVjdG9ycy9yZWZlcmVuY2VzL3Byb2R1Y3QtcmVmZXJlbmNlcy5hZGFwdGVyJztcbmltcG9ydCB7IFByb2R1Y3RSZXZpZXdzQWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL3Byb2R1Y3QvY29ubmVjdG9ycy9yZXZpZXdzL3Byb2R1Y3QtcmV2aWV3cy5hZGFwdGVyJztcbmltcG9ydCB7IFBST0RVQ1RfU0VBUkNIX1BBR0VfTk9STUFMSVpFUiB9IGZyb20gJy4uLy4uLy4uL3Byb2R1Y3QvY29ubmVjdG9ycy9zZWFyY2gvY29udmVydGVycyc7XG5pbXBvcnQgeyBQcm9kdWN0U2VhcmNoQWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL3Byb2R1Y3QvY29ubmVjdG9ycy9zZWFyY2gvcHJvZHVjdC1zZWFyY2guYWRhcHRlcic7XG5pbXBvcnQgeyBPY2NQcm9kdWN0UmVmZXJlbmNlc0xpc3ROb3JtYWxpemVyIH0gZnJvbSAnLi9jb252ZXJ0ZXJzL29jYy1wcm9kdWN0LXJlZmVyZW5jZXMtbGlzdC1ub3JtYWxpemVyJztcbmltcG9ydCB7IE9jY1Byb2R1Y3RTZWFyY2hQYWdlTm9ybWFsaXplciB9IGZyb20gJy4vY29udmVydGVycy9vY2MtcHJvZHVjdC1zZWFyY2gtcGFnZS1ub3JtYWxpemVyJztcbmltcG9ydCB7IFByb2R1Y3RJbWFnZU5vcm1hbGl6ZXIgfSBmcm9tICcuL2NvbnZlcnRlcnMvcHJvZHVjdC1pbWFnZS1ub3JtYWxpemVyJztcbmltcG9ydCB7IE9jY1Byb2R1Y3RSZWZlcmVuY2VzQWRhcHRlciB9IGZyb20gJy4vb2NjLXByb2R1Y3QtcmVmZXJlbmNlcy5hZGFwdGVyJztcbmltcG9ydCB7IE9jY1Byb2R1Y3RSZXZpZXdzQWRhcHRlciB9IGZyb20gJy4vb2NjLXByb2R1Y3QtcmV2aWV3cy5hZGFwdGVyJztcbmltcG9ydCB7IE9jY1Byb2R1Y3RTZWFyY2hBZGFwdGVyIH0gZnJvbSAnLi9vY2MtcHJvZHVjdC1zZWFyY2guYWRhcHRlcic7XG5pbXBvcnQgeyBPY2NQcm9kdWN0QWRhcHRlciB9IGZyb20gJy4vb2NjLXByb2R1Y3QuYWRhcHRlcic7XG5pbXBvcnQgeyBQcm9kdWN0TmFtZU5vcm1hbGl6ZXIgfSBmcm9tICcuL2NvbnZlcnRlcnMvcHJvZHVjdC1uYW1lLW5vcm1hbGl6ZXInO1xuaW1wb3J0IHsgZGVmYXVsdE9jY1Byb2R1Y3RDb25maWcgfSBmcm9tICcuL2RlZmF1bHQtb2NjLXByb2R1Y3QtY29uZmlnJztcbmltcG9ydCAnLi9wcm9kdWN0LW9jYy1jb25maWcnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWcoZGVmYXVsdE9jY1Byb2R1Y3RDb25maWcpLFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBQcm9kdWN0QWRhcHRlcixcbiAgICAgIHVzZUNsYXNzOiBPY2NQcm9kdWN0QWRhcHRlcixcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IFBST0RVQ1RfTk9STUFMSVpFUixcbiAgICAgIHVzZUV4aXN0aW5nOiBQcm9kdWN0SW1hZ2VOb3JtYWxpemVyLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBQUk9EVUNUX05PUk1BTElaRVIsXG4gICAgICB1c2VFeGlzdGluZzogUHJvZHVjdE5hbWVOb3JtYWxpemVyLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBQcm9kdWN0UmVmZXJlbmNlc0FkYXB0ZXIsXG4gICAgICB1c2VDbGFzczogT2NjUHJvZHVjdFJlZmVyZW5jZXNBZGFwdGVyLFxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogUFJPRFVDVF9SRUZFUkVOQ0VTX05PUk1BTElaRVIsXG4gICAgICB1c2VFeGlzdGluZzogT2NjUHJvZHVjdFJlZmVyZW5jZXNMaXN0Tm9ybWFsaXplcixcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogUHJvZHVjdFNlYXJjaEFkYXB0ZXIsXG4gICAgICB1c2VDbGFzczogT2NjUHJvZHVjdFNlYXJjaEFkYXB0ZXIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBQUk9EVUNUX1NFQVJDSF9QQUdFX05PUk1BTElaRVIsXG4gICAgICB1c2VFeGlzdGluZzogT2NjUHJvZHVjdFNlYXJjaFBhZ2VOb3JtYWxpemVyLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBQcm9kdWN0UmV2aWV3c0FkYXB0ZXIsXG4gICAgICB1c2VDbGFzczogT2NjUHJvZHVjdFJldmlld3NBZGFwdGVyLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RPY2NNb2R1bGUge31cbiJdfQ==
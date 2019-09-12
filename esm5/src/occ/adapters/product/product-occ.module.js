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
var ProductOccModule = /** @class */ (function () {
    function ProductOccModule() {
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
                            useClass: ProductImageNormalizer,
                            multi: true,
                        },
                        {
                            provide: PRODUCT_NORMALIZER,
                            useClass: ProductNameNormalizer,
                            multi: true,
                        },
                        {
                            provide: ProductReferencesAdapter,
                            useClass: OccProductReferencesAdapter,
                        },
                        {
                            provide: PRODUCT_REFERENCES_NORMALIZER,
                            useClass: OccProductReferencesListNormalizer,
                            multi: true,
                        },
                        {
                            provide: ProductSearchAdapter,
                            useClass: OccProductSearchAdapter,
                        },
                        {
                            provide: PRODUCT_SEARCH_PAGE_NORMALIZER,
                            useClass: OccProductSearchPageNormalizer,
                            multi: true,
                        },
                        {
                            provide: ProductReviewsAdapter,
                            useClass: OccProductReviewsAdapter,
                        },
                    ],
                },] }
    ];
    return ProductOccModule;
}());
export { ProductOccModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1vY2MubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL29jYy9hZGFwdGVycy9wcm9kdWN0L3Byb2R1Y3Qtb2NjLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzdELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUNyRixPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQztBQUNsRyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxtRUFBbUUsQ0FBQztBQUM3RyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUNwRyxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUMvRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyREFBMkQsQ0FBQztBQUNqRyxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSxxREFBcUQsQ0FBQztBQUN6RyxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUNqRyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUM3RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUV2RTtJQUFBO0lBNkMrQixDQUFDOztnQkE3Qy9CLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixnQkFBZ0I7d0JBQ2hCLFlBQVksQ0FBQyxVQUFVLENBQUMsdUJBQXVCLENBQUM7cUJBQ2pEO29CQUNELFNBQVMsRUFBRTt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsY0FBYzs0QkFDdkIsUUFBUSxFQUFFLGlCQUFpQjt5QkFDNUI7d0JBQ0Q7NEJBQ0UsT0FBTyxFQUFFLGtCQUFrQjs0QkFDM0IsUUFBUSxFQUFFLHNCQUFzQjs0QkFDaEMsS0FBSyxFQUFFLElBQUk7eUJBQ1o7d0JBQ0Q7NEJBQ0UsT0FBTyxFQUFFLGtCQUFrQjs0QkFDM0IsUUFBUSxFQUFFLHFCQUFxQjs0QkFDL0IsS0FBSyxFQUFFLElBQUk7eUJBQ1o7d0JBQ0Q7NEJBQ0UsT0FBTyxFQUFFLHdCQUF3Qjs0QkFDakMsUUFBUSxFQUFFLDJCQUEyQjt5QkFDdEM7d0JBQ0Q7NEJBQ0UsT0FBTyxFQUFFLDZCQUE2Qjs0QkFDdEMsUUFBUSxFQUFFLGtDQUFrQzs0QkFDNUMsS0FBSyxFQUFFLElBQUk7eUJBQ1o7d0JBQ0Q7NEJBQ0UsT0FBTyxFQUFFLG9CQUFvQjs0QkFDN0IsUUFBUSxFQUFFLHVCQUF1Qjt5QkFDbEM7d0JBQ0Q7NEJBQ0UsT0FBTyxFQUFFLDhCQUE4Qjs0QkFDdkMsUUFBUSxFQUFFLDhCQUE4Qjs0QkFDeEMsS0FBSyxFQUFFLElBQUk7eUJBQ1o7d0JBQ0Q7NEJBQ0UsT0FBTyxFQUFFLHFCQUFxQjs0QkFDOUIsUUFBUSxFQUFFLHdCQUF3Qjt5QkFDbkM7cUJBQ0Y7aUJBQ0Y7O0lBQzhCLHVCQUFDO0NBQUEsQUE3Q2hDLElBNkNnQztTQUFuQixnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb25maWdNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9jb25maWcvY29uZmlnLm1vZHVsZSc7XG5pbXBvcnQgeyBQUk9EVUNUX05PUk1BTElaRVIgfSBmcm9tICcuLi8uLi8uLi9wcm9kdWN0L2Nvbm5lY3RvcnMvcHJvZHVjdC9jb252ZXJ0ZXJzJztcbmltcG9ydCB7IFByb2R1Y3RBZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vcHJvZHVjdC9jb25uZWN0b3JzL3Byb2R1Y3QvcHJvZHVjdC5hZGFwdGVyJztcbmltcG9ydCB7IFBST0RVQ1RfUkVGRVJFTkNFU19OT1JNQUxJWkVSIH0gZnJvbSAnLi4vLi4vLi4vcHJvZHVjdC9jb25uZWN0b3JzL3JlZmVyZW5jZXMvY29udmVydGVycyc7XG5pbXBvcnQgeyBQcm9kdWN0UmVmZXJlbmNlc0FkYXB0ZXIgfSBmcm9tICcuLi8uLi8uLi9wcm9kdWN0L2Nvbm5lY3RvcnMvcmVmZXJlbmNlcy9wcm9kdWN0LXJlZmVyZW5jZXMuYWRhcHRlcic7XG5pbXBvcnQgeyBQcm9kdWN0UmV2aWV3c0FkYXB0ZXIgfSBmcm9tICcuLi8uLi8uLi9wcm9kdWN0L2Nvbm5lY3RvcnMvcmV2aWV3cy9wcm9kdWN0LXJldmlld3MuYWRhcHRlcic7XG5pbXBvcnQgeyBQUk9EVUNUX1NFQVJDSF9QQUdFX05PUk1BTElaRVIgfSBmcm9tICcuLi8uLi8uLi9wcm9kdWN0L2Nvbm5lY3RvcnMvc2VhcmNoL2NvbnZlcnRlcnMnO1xuaW1wb3J0IHsgUHJvZHVjdFNlYXJjaEFkYXB0ZXIgfSBmcm9tICcuLi8uLi8uLi9wcm9kdWN0L2Nvbm5lY3RvcnMvc2VhcmNoL3Byb2R1Y3Qtc2VhcmNoLmFkYXB0ZXInO1xuaW1wb3J0IHsgT2NjUHJvZHVjdFJlZmVyZW5jZXNMaXN0Tm9ybWFsaXplciB9IGZyb20gJy4vY29udmVydGVycy9vY2MtcHJvZHVjdC1yZWZlcmVuY2VzLWxpc3Qtbm9ybWFsaXplcic7XG5pbXBvcnQgeyBPY2NQcm9kdWN0U2VhcmNoUGFnZU5vcm1hbGl6ZXIgfSBmcm9tICcuL2NvbnZlcnRlcnMvb2NjLXByb2R1Y3Qtc2VhcmNoLXBhZ2Utbm9ybWFsaXplcic7XG5pbXBvcnQgeyBQcm9kdWN0SW1hZ2VOb3JtYWxpemVyIH0gZnJvbSAnLi9jb252ZXJ0ZXJzL3Byb2R1Y3QtaW1hZ2Utbm9ybWFsaXplcic7XG5pbXBvcnQgeyBPY2NQcm9kdWN0UmVmZXJlbmNlc0FkYXB0ZXIgfSBmcm9tICcuL29jYy1wcm9kdWN0LXJlZmVyZW5jZXMuYWRhcHRlcic7XG5pbXBvcnQgeyBPY2NQcm9kdWN0UmV2aWV3c0FkYXB0ZXIgfSBmcm9tICcuL29jYy1wcm9kdWN0LXJldmlld3MuYWRhcHRlcic7XG5pbXBvcnQgeyBPY2NQcm9kdWN0U2VhcmNoQWRhcHRlciB9IGZyb20gJy4vb2NjLXByb2R1Y3Qtc2VhcmNoLmFkYXB0ZXInO1xuaW1wb3J0IHsgT2NjUHJvZHVjdEFkYXB0ZXIgfSBmcm9tICcuL29jYy1wcm9kdWN0LmFkYXB0ZXInO1xuaW1wb3J0IHsgUHJvZHVjdE5hbWVOb3JtYWxpemVyIH0gZnJvbSAnLi9jb252ZXJ0ZXJzL3Byb2R1Y3QtbmFtZS1ub3JtYWxpemVyJztcbmltcG9ydCB7IGRlZmF1bHRPY2NQcm9kdWN0Q29uZmlnIH0gZnJvbSAnLi9kZWZhdWx0LW9jYy1wcm9kdWN0LWNvbmZpZyc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZyhkZWZhdWx0T2NjUHJvZHVjdENvbmZpZyksXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IFByb2R1Y3RBZGFwdGVyLFxuICAgICAgdXNlQ2xhc3M6IE9jY1Byb2R1Y3RBZGFwdGVyLFxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogUFJPRFVDVF9OT1JNQUxJWkVSLFxuICAgICAgdXNlQ2xhc3M6IFByb2R1Y3RJbWFnZU5vcm1hbGl6ZXIsXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IFBST0RVQ1RfTk9STUFMSVpFUixcbiAgICAgIHVzZUNsYXNzOiBQcm9kdWN0TmFtZU5vcm1hbGl6ZXIsXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IFByb2R1Y3RSZWZlcmVuY2VzQWRhcHRlcixcbiAgICAgIHVzZUNsYXNzOiBPY2NQcm9kdWN0UmVmZXJlbmNlc0FkYXB0ZXIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBQUk9EVUNUX1JFRkVSRU5DRVNfTk9STUFMSVpFUixcbiAgICAgIHVzZUNsYXNzOiBPY2NQcm9kdWN0UmVmZXJlbmNlc0xpc3ROb3JtYWxpemVyLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBQcm9kdWN0U2VhcmNoQWRhcHRlcixcbiAgICAgIHVzZUNsYXNzOiBPY2NQcm9kdWN0U2VhcmNoQWRhcHRlcixcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IFBST0RVQ1RfU0VBUkNIX1BBR0VfTk9STUFMSVpFUixcbiAgICAgIHVzZUNsYXNzOiBPY2NQcm9kdWN0U2VhcmNoUGFnZU5vcm1hbGl6ZXIsXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IFByb2R1Y3RSZXZpZXdzQWRhcHRlcixcbiAgICAgIHVzZUNsYXNzOiBPY2NQcm9kdWN0UmV2aWV3c0FkYXB0ZXIsXG4gICAgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdE9jY01vZHVsZSB7fVxuIl19
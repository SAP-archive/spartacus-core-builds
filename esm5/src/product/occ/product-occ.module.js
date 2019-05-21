/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ConfigModule } from '../../config/index';
import { OccModule } from '../../occ/occ.module';
import { defaultOccProductConfig } from '../config/product-config';
import { PRODUCT_NORMALIZER } from '../connectors/product/converters';
import { ProductAdapter } from '../connectors/product/product.adapter';
import { PRODUCT_REFERENCES_NORMALIZER } from '../connectors/references/converters';
import { ProductReferencesAdapter } from '../connectors/references/product-references.adapter';
import { ProductReviewsAdapter } from '../connectors/reviews/product-reviews.adapter';
import { PRODUCT_SEARCH_PAGE_NORMALIZER } from '../connectors/search/converters';
import { ProductSearchAdapter } from '../connectors/search/product-search.adapter';
import { OccProductReferencesListNormalizer } from './converters/occ-product-references-list-normalizer';
import { OccProductSearchPageNormalizer } from './converters/occ-product-search-page-normalizer.service';
import { ProductImageNormalizer } from './converters/product-image-normalizer';
import { OccProductReferencesAdapter } from './occ-product-references.adapter';
import { OccProductReviewsAdapter } from './occ-product-reviews.adapter';
import { OccProductSearchAdapter } from './occ-product-search.adapter';
import { OccProductAdapter } from './occ-product.adapter';
import { ProductNameNormalizer } from './converters/product-name-normalizer';
var ProductOccModule = /** @class */ (function () {
    function ProductOccModule() {
    }
    ProductOccModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        HttpClientModule,
                        OccModule,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1vY2MubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3Byb2R1Y3Qvb2NjL3Byb2R1Y3Qtb2NjLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDdkUsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDcEYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDL0YsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDdEYsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDakYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDbkYsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0scURBQXFELENBQUM7QUFDekcsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDekcsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDL0UsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDL0UsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDekUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDdkUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFN0U7SUFBQTtJQThDK0IsQ0FBQzs7Z0JBOUMvQixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7d0JBQ1osZ0JBQWdCO3dCQUNoQixTQUFTO3dCQUNULFlBQVksQ0FBQyxVQUFVLENBQUMsdUJBQXVCLENBQUM7cUJBQ2pEO29CQUNELFNBQVMsRUFBRTt3QkFDVDs0QkFDRSxPQUFPLEVBQUUsY0FBYzs0QkFDdkIsUUFBUSxFQUFFLGlCQUFpQjt5QkFDNUI7d0JBQ0Q7NEJBQ0UsT0FBTyxFQUFFLGtCQUFrQjs0QkFDM0IsUUFBUSxFQUFFLHNCQUFzQjs0QkFDaEMsS0FBSyxFQUFFLElBQUk7eUJBQ1o7d0JBQ0Q7NEJBQ0UsT0FBTyxFQUFFLGtCQUFrQjs0QkFDM0IsUUFBUSxFQUFFLHFCQUFxQjs0QkFDL0IsS0FBSyxFQUFFLElBQUk7eUJBQ1o7d0JBQ0Q7NEJBQ0UsT0FBTyxFQUFFLHdCQUF3Qjs0QkFDakMsUUFBUSxFQUFFLDJCQUEyQjt5QkFDdEM7d0JBQ0Q7NEJBQ0UsT0FBTyxFQUFFLDZCQUE2Qjs0QkFDdEMsUUFBUSxFQUFFLGtDQUFrQzs0QkFDNUMsS0FBSyxFQUFFLElBQUk7eUJBQ1o7d0JBQ0Q7NEJBQ0UsT0FBTyxFQUFFLG9CQUFvQjs0QkFDN0IsUUFBUSxFQUFFLHVCQUF1Qjt5QkFDbEM7d0JBQ0Q7NEJBQ0UsT0FBTyxFQUFFLDhCQUE4Qjs0QkFDdkMsUUFBUSxFQUFFLDhCQUE4Qjs0QkFDeEMsS0FBSyxFQUFFLElBQUk7eUJBQ1o7d0JBQ0Q7NEJBQ0UsT0FBTyxFQUFFLHFCQUFxQjs0QkFDOUIsUUFBUSxFQUFFLHdCQUF3Qjt5QkFDbkM7cUJBQ0Y7aUJBQ0Y7O0lBQzhCLHVCQUFDO0NBQUEsQUE5Q2hDLElBOENnQztTQUFuQixnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb25maWdNb2R1bGUgfSBmcm9tICcuLi8uLi9jb25maWcvaW5kZXgnO1xuaW1wb3J0IHsgT2NjTW9kdWxlIH0gZnJvbSAnLi4vLi4vb2NjL29jYy5tb2R1bGUnO1xuaW1wb3J0IHsgZGVmYXVsdE9jY1Byb2R1Y3RDb25maWcgfSBmcm9tICcuLi9jb25maWcvcHJvZHVjdC1jb25maWcnO1xuaW1wb3J0IHsgUFJPRFVDVF9OT1JNQUxJWkVSIH0gZnJvbSAnLi4vY29ubmVjdG9ycy9wcm9kdWN0L2NvbnZlcnRlcnMnO1xuaW1wb3J0IHsgUHJvZHVjdEFkYXB0ZXIgfSBmcm9tICcuLi9jb25uZWN0b3JzL3Byb2R1Y3QvcHJvZHVjdC5hZGFwdGVyJztcbmltcG9ydCB7IFBST0RVQ1RfUkVGRVJFTkNFU19OT1JNQUxJWkVSIH0gZnJvbSAnLi4vY29ubmVjdG9ycy9yZWZlcmVuY2VzL2NvbnZlcnRlcnMnO1xuaW1wb3J0IHsgUHJvZHVjdFJlZmVyZW5jZXNBZGFwdGVyIH0gZnJvbSAnLi4vY29ubmVjdG9ycy9yZWZlcmVuY2VzL3Byb2R1Y3QtcmVmZXJlbmNlcy5hZGFwdGVyJztcbmltcG9ydCB7IFByb2R1Y3RSZXZpZXdzQWRhcHRlciB9IGZyb20gJy4uL2Nvbm5lY3RvcnMvcmV2aWV3cy9wcm9kdWN0LXJldmlld3MuYWRhcHRlcic7XG5pbXBvcnQgeyBQUk9EVUNUX1NFQVJDSF9QQUdFX05PUk1BTElaRVIgfSBmcm9tICcuLi9jb25uZWN0b3JzL3NlYXJjaC9jb252ZXJ0ZXJzJztcbmltcG9ydCB7IFByb2R1Y3RTZWFyY2hBZGFwdGVyIH0gZnJvbSAnLi4vY29ubmVjdG9ycy9zZWFyY2gvcHJvZHVjdC1zZWFyY2guYWRhcHRlcic7XG5pbXBvcnQgeyBPY2NQcm9kdWN0UmVmZXJlbmNlc0xpc3ROb3JtYWxpemVyIH0gZnJvbSAnLi9jb252ZXJ0ZXJzL29jYy1wcm9kdWN0LXJlZmVyZW5jZXMtbGlzdC1ub3JtYWxpemVyJztcbmltcG9ydCB7IE9jY1Byb2R1Y3RTZWFyY2hQYWdlTm9ybWFsaXplciB9IGZyb20gJy4vY29udmVydGVycy9vY2MtcHJvZHVjdC1zZWFyY2gtcGFnZS1ub3JtYWxpemVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgUHJvZHVjdEltYWdlTm9ybWFsaXplciB9IGZyb20gJy4vY29udmVydGVycy9wcm9kdWN0LWltYWdlLW5vcm1hbGl6ZXInO1xuaW1wb3J0IHsgT2NjUHJvZHVjdFJlZmVyZW5jZXNBZGFwdGVyIH0gZnJvbSAnLi9vY2MtcHJvZHVjdC1yZWZlcmVuY2VzLmFkYXB0ZXInO1xuaW1wb3J0IHsgT2NjUHJvZHVjdFJldmlld3NBZGFwdGVyIH0gZnJvbSAnLi9vY2MtcHJvZHVjdC1yZXZpZXdzLmFkYXB0ZXInO1xuaW1wb3J0IHsgT2NjUHJvZHVjdFNlYXJjaEFkYXB0ZXIgfSBmcm9tICcuL29jYy1wcm9kdWN0LXNlYXJjaC5hZGFwdGVyJztcbmltcG9ydCB7IE9jY1Byb2R1Y3RBZGFwdGVyIH0gZnJvbSAnLi9vY2MtcHJvZHVjdC5hZGFwdGVyJztcbmltcG9ydCB7IFByb2R1Y3ROYW1lTm9ybWFsaXplciB9IGZyb20gJy4vY29udmVydGVycy9wcm9kdWN0LW5hbWUtbm9ybWFsaXplcic7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBPY2NNb2R1bGUsXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWcoZGVmYXVsdE9jY1Byb2R1Y3RDb25maWcpLFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBQcm9kdWN0QWRhcHRlcixcbiAgICAgIHVzZUNsYXNzOiBPY2NQcm9kdWN0QWRhcHRlcixcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IFBST0RVQ1RfTk9STUFMSVpFUixcbiAgICAgIHVzZUNsYXNzOiBQcm9kdWN0SW1hZ2VOb3JtYWxpemVyLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBQUk9EVUNUX05PUk1BTElaRVIsXG4gICAgICB1c2VDbGFzczogUHJvZHVjdE5hbWVOb3JtYWxpemVyLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBQcm9kdWN0UmVmZXJlbmNlc0FkYXB0ZXIsXG4gICAgICB1c2VDbGFzczogT2NjUHJvZHVjdFJlZmVyZW5jZXNBZGFwdGVyLFxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogUFJPRFVDVF9SRUZFUkVOQ0VTX05PUk1BTElaRVIsXG4gICAgICB1c2VDbGFzczogT2NjUHJvZHVjdFJlZmVyZW5jZXNMaXN0Tm9ybWFsaXplcixcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogUHJvZHVjdFNlYXJjaEFkYXB0ZXIsXG4gICAgICB1c2VDbGFzczogT2NjUHJvZHVjdFNlYXJjaEFkYXB0ZXIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBQUk9EVUNUX1NFQVJDSF9QQUdFX05PUk1BTElaRVIsXG4gICAgICB1c2VDbGFzczogT2NjUHJvZHVjdFNlYXJjaFBhZ2VOb3JtYWxpemVyLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBQcm9kdWN0UmV2aWV3c0FkYXB0ZXIsXG4gICAgICB1c2VDbGFzczogT2NjUHJvZHVjdFJldmlld3NBZGFwdGVyLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RPY2NNb2R1bGUge31cbiJdfQ==
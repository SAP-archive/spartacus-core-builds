/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProductSearchLoaderService } from './product-search.service';
import { NgModule } from '@angular/core';
import { ConfigModule } from '../../config/index';
import { OccModule } from '../../occ/occ.module';
import { defaultOccProductConfig } from '../config/product-config';
import { PRODUCT_REVIEWS_NORMALIZER } from '../connectors/reviews/converters';
import { ProductReviewsAdapter } from '../connectors/reviews/product-reviews.adapter';
import { OccProductReviewsListNormalizer } from './converters/occ-product-reviews-list-normalizer';
import { OccProductReviewsAdapter } from './occ-product-reviews.adapter';
import { OccProductAdapter } from './occ-product.adapter';
import { ProductAdapter } from '../connectors/product/product.adapter';
import { PRODUCT_NORMALIZER } from '../connectors/product/converters';
import { ProductImageNormalizer } from './converters/product-image-normalizer';
import { ProductReferenceNormalizer } from './converters/product-reference-normalizer';
export class ProductOccModule {
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
                    ProductSearchLoaderService,
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
                        useClass: ProductReferenceNormalizer,
                        multi: true,
                    },
                    {
                        provide: ProductReviewsAdapter,
                        useClass: OccProductReviewsAdapter,
                    },
                    {
                        provide: PRODUCT_REVIEWS_NORMALIZER,
                        useClass: OccProductReviewsListNormalizer,
                        multi: true,
                    },
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1vY2MubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3Byb2R1Y3Qvb2NjL3Byb2R1Y3Qtb2NjLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNuRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUN0RixPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQUNuRyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDdkUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDdEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDL0UsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFvQ3ZGLE1BQU0sT0FBTyxnQkFBZ0I7OztZQWxDNUIsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLGdCQUFnQjtvQkFDaEIsU0FBUztvQkFDVCxZQUFZLENBQUMsVUFBVSxDQUFDLHVCQUF1QixDQUFDO2lCQUNqRDtnQkFDRCxTQUFTLEVBQUU7b0JBQ1QsMEJBQTBCO29CQUMxQjt3QkFDRSxPQUFPLEVBQUUsY0FBYzt3QkFDdkIsUUFBUSxFQUFFLGlCQUFpQjtxQkFDNUI7b0JBQ0Q7d0JBQ0UsT0FBTyxFQUFFLGtCQUFrQjt3QkFDM0IsV0FBVyxFQUFFLHNCQUFzQjt3QkFDbkMsS0FBSyxFQUFFLElBQUk7cUJBQ1o7b0JBQ0Q7d0JBQ0UsT0FBTyxFQUFFLGtCQUFrQjt3QkFDM0IsUUFBUSxFQUFFLDBCQUEwQjt3QkFDcEMsS0FBSyxFQUFFLElBQUk7cUJBQ1o7b0JBQ0Q7d0JBQ0UsT0FBTyxFQUFFLHFCQUFxQjt3QkFDOUIsUUFBUSxFQUFFLHdCQUF3QjtxQkFDbkM7b0JBQ0Q7d0JBQ0UsT0FBTyxFQUFFLDBCQUEwQjt3QkFDbkMsUUFBUSxFQUFFLCtCQUErQjt3QkFDekMsS0FBSyxFQUFFLElBQUk7cUJBQ1o7aUJBQ0Y7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgUHJvZHVjdFNlYXJjaExvYWRlclNlcnZpY2UgfSBmcm9tICcuL3Byb2R1Y3Qtc2VhcmNoLnNlcnZpY2UnO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbmZpZ01vZHVsZSB9IGZyb20gJy4uLy4uL2NvbmZpZy9pbmRleCc7XG5pbXBvcnQgeyBPY2NNb2R1bGUgfSBmcm9tICcuLi8uLi9vY2Mvb2NjLm1vZHVsZSc7XG5pbXBvcnQgeyBkZWZhdWx0T2NjUHJvZHVjdENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9wcm9kdWN0LWNvbmZpZyc7XG5pbXBvcnQgeyBQUk9EVUNUX1JFVklFV1NfTk9STUFMSVpFUiB9IGZyb20gJy4uL2Nvbm5lY3RvcnMvcmV2aWV3cy9jb252ZXJ0ZXJzJztcbmltcG9ydCB7IFByb2R1Y3RSZXZpZXdzQWRhcHRlciB9IGZyb20gJy4uL2Nvbm5lY3RvcnMvcmV2aWV3cy9wcm9kdWN0LXJldmlld3MuYWRhcHRlcic7XG5pbXBvcnQgeyBPY2NQcm9kdWN0UmV2aWV3c0xpc3ROb3JtYWxpemVyIH0gZnJvbSAnLi9jb252ZXJ0ZXJzL29jYy1wcm9kdWN0LXJldmlld3MtbGlzdC1ub3JtYWxpemVyJztcbmltcG9ydCB7IE9jY1Byb2R1Y3RSZXZpZXdzQWRhcHRlciB9IGZyb20gJy4vb2NjLXByb2R1Y3QtcmV2aWV3cy5hZGFwdGVyJztcbmltcG9ydCB7IE9jY1Byb2R1Y3RBZGFwdGVyIH0gZnJvbSAnLi9vY2MtcHJvZHVjdC5hZGFwdGVyJztcbmltcG9ydCB7IFByb2R1Y3RBZGFwdGVyIH0gZnJvbSAnLi4vY29ubmVjdG9ycy9wcm9kdWN0L3Byb2R1Y3QuYWRhcHRlcic7XG5pbXBvcnQgeyBQUk9EVUNUX05PUk1BTElaRVIgfSBmcm9tICcuLi9jb25uZWN0b3JzL3Byb2R1Y3QvY29udmVydGVycyc7XG5pbXBvcnQgeyBQcm9kdWN0SW1hZ2VOb3JtYWxpemVyIH0gZnJvbSAnLi9jb252ZXJ0ZXJzL3Byb2R1Y3QtaW1hZ2Utbm9ybWFsaXplcic7XG5pbXBvcnQgeyBQcm9kdWN0UmVmZXJlbmNlTm9ybWFsaXplciB9IGZyb20gJy4vY29udmVydGVycy9wcm9kdWN0LXJlZmVyZW5jZS1ub3JtYWxpemVyJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgIE9jY01vZHVsZSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZyhkZWZhdWx0T2NjUHJvZHVjdENvbmZpZyksXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIFByb2R1Y3RTZWFyY2hMb2FkZXJTZXJ2aWNlLFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IFByb2R1Y3RBZGFwdGVyLFxuICAgICAgdXNlQ2xhc3M6IE9jY1Byb2R1Y3RBZGFwdGVyLFxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogUFJPRFVDVF9OT1JNQUxJWkVSLFxuICAgICAgdXNlRXhpc3Rpbmc6IFByb2R1Y3RJbWFnZU5vcm1hbGl6ZXIsXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IFBST0RVQ1RfTk9STUFMSVpFUixcbiAgICAgIHVzZUNsYXNzOiBQcm9kdWN0UmVmZXJlbmNlTm9ybWFsaXplcixcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogUHJvZHVjdFJldmlld3NBZGFwdGVyLFxuICAgICAgdXNlQ2xhc3M6IE9jY1Byb2R1Y3RSZXZpZXdzQWRhcHRlcixcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IFBST0RVQ1RfUkVWSUVXU19OT1JNQUxJWkVSLFxuICAgICAgdXNlQ2xhc3M6IE9jY1Byb2R1Y3RSZXZpZXdzTGlzdE5vcm1hbGl6ZXIsXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0T2NjTW9kdWxlIHt9XG4iXX0=
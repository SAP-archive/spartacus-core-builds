import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { provideDefaultConfig } from '../../../config/config.module';
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
let ProductOccModule = class ProductOccModule {
};
ProductOccModule = __decorate([
    NgModule({
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
    })
], ProductOccModule);
export { ProductOccModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1vY2MubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL29jYy9hZGFwdGVycy9wcm9kdWN0L3Byb2R1Y3Qtb2NjLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDckUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDcEYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ3JGLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQ2xHLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLG1FQUFtRSxDQUFDO0FBQzdHLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDZEQUE2RCxDQUFDO0FBQ3BHLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQy9GLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJEQUEyRCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ3pHLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ3ZFLE9BQU8sc0JBQXNCLENBQUM7QUE0QzlCLElBQWEsZ0JBQWdCLEdBQTdCLE1BQWEsZ0JBQWdCO0NBQUcsQ0FBQTtBQUFuQixnQkFBZ0I7SUExQzVCLFFBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxnQkFBZ0IsQ0FBQztRQUN6QyxTQUFTLEVBQUU7WUFDVCxvQkFBb0IsQ0FBQyx1QkFBdUIsQ0FBQztZQUM3QztnQkFDRSxPQUFPLEVBQUUsY0FBYztnQkFDdkIsUUFBUSxFQUFFLGlCQUFpQjthQUM1QjtZQUNEO2dCQUNFLE9BQU8sRUFBRSxrQkFBa0I7Z0JBQzNCLFdBQVcsRUFBRSxzQkFBc0I7Z0JBQ25DLEtBQUssRUFBRSxJQUFJO2FBQ1o7WUFDRDtnQkFDRSxPQUFPLEVBQUUsa0JBQWtCO2dCQUMzQixXQUFXLEVBQUUscUJBQXFCO2dCQUNsQyxLQUFLLEVBQUUsSUFBSTthQUNaO1lBQ0Q7Z0JBQ0UsT0FBTyxFQUFFLHdCQUF3QjtnQkFDakMsUUFBUSxFQUFFLDJCQUEyQjthQUN0QztZQUNEO2dCQUNFLE9BQU8sRUFBRSw2QkFBNkI7Z0JBQ3RDLFdBQVcsRUFBRSxrQ0FBa0M7Z0JBQy9DLEtBQUssRUFBRSxJQUFJO2FBQ1o7WUFDRDtnQkFDRSxPQUFPLEVBQUUsb0JBQW9CO2dCQUM3QixRQUFRLEVBQUUsdUJBQXVCO2FBQ2xDO1lBQ0Q7Z0JBQ0UsT0FBTyxFQUFFLDhCQUE4QjtnQkFDdkMsV0FBVyxFQUFFLDhCQUE4QjtnQkFDM0MsS0FBSyxFQUFFLElBQUk7YUFDWjtZQUNEO2dCQUNFLE9BQU8sRUFBRSxxQkFBcUI7Z0JBQzlCLFFBQVEsRUFBRSx3QkFBd0I7YUFDbkM7U0FDRjtLQUNGLENBQUM7R0FDVyxnQkFBZ0IsQ0FBRztTQUFuQixnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBwcm92aWRlRGVmYXVsdENvbmZpZyB9IGZyb20gJy4uLy4uLy4uL2NvbmZpZy9jb25maWcubW9kdWxlJztcbmltcG9ydCB7IFBST0RVQ1RfTk9STUFMSVpFUiB9IGZyb20gJy4uLy4uLy4uL3Byb2R1Y3QvY29ubmVjdG9ycy9wcm9kdWN0L2NvbnZlcnRlcnMnO1xuaW1wb3J0IHsgUHJvZHVjdEFkYXB0ZXIgfSBmcm9tICcuLi8uLi8uLi9wcm9kdWN0L2Nvbm5lY3RvcnMvcHJvZHVjdC9wcm9kdWN0LmFkYXB0ZXInO1xuaW1wb3J0IHsgUFJPRFVDVF9SRUZFUkVOQ0VTX05PUk1BTElaRVIgfSBmcm9tICcuLi8uLi8uLi9wcm9kdWN0L2Nvbm5lY3RvcnMvcmVmZXJlbmNlcy9jb252ZXJ0ZXJzJztcbmltcG9ydCB7IFByb2R1Y3RSZWZlcmVuY2VzQWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL3Byb2R1Y3QvY29ubmVjdG9ycy9yZWZlcmVuY2VzL3Byb2R1Y3QtcmVmZXJlbmNlcy5hZGFwdGVyJztcbmltcG9ydCB7IFByb2R1Y3RSZXZpZXdzQWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL3Byb2R1Y3QvY29ubmVjdG9ycy9yZXZpZXdzL3Byb2R1Y3QtcmV2aWV3cy5hZGFwdGVyJztcbmltcG9ydCB7IFBST0RVQ1RfU0VBUkNIX1BBR0VfTk9STUFMSVpFUiB9IGZyb20gJy4uLy4uLy4uL3Byb2R1Y3QvY29ubmVjdG9ycy9zZWFyY2gvY29udmVydGVycyc7XG5pbXBvcnQgeyBQcm9kdWN0U2VhcmNoQWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL3Byb2R1Y3QvY29ubmVjdG9ycy9zZWFyY2gvcHJvZHVjdC1zZWFyY2guYWRhcHRlcic7XG5pbXBvcnQgeyBPY2NQcm9kdWN0UmVmZXJlbmNlc0xpc3ROb3JtYWxpemVyIH0gZnJvbSAnLi9jb252ZXJ0ZXJzL29jYy1wcm9kdWN0LXJlZmVyZW5jZXMtbGlzdC1ub3JtYWxpemVyJztcbmltcG9ydCB7IE9jY1Byb2R1Y3RTZWFyY2hQYWdlTm9ybWFsaXplciB9IGZyb20gJy4vY29udmVydGVycy9vY2MtcHJvZHVjdC1zZWFyY2gtcGFnZS1ub3JtYWxpemVyJztcbmltcG9ydCB7IFByb2R1Y3RJbWFnZU5vcm1hbGl6ZXIgfSBmcm9tICcuL2NvbnZlcnRlcnMvcHJvZHVjdC1pbWFnZS1ub3JtYWxpemVyJztcbmltcG9ydCB7IE9jY1Byb2R1Y3RSZWZlcmVuY2VzQWRhcHRlciB9IGZyb20gJy4vb2NjLXByb2R1Y3QtcmVmZXJlbmNlcy5hZGFwdGVyJztcbmltcG9ydCB7IE9jY1Byb2R1Y3RSZXZpZXdzQWRhcHRlciB9IGZyb20gJy4vb2NjLXByb2R1Y3QtcmV2aWV3cy5hZGFwdGVyJztcbmltcG9ydCB7IE9jY1Byb2R1Y3RTZWFyY2hBZGFwdGVyIH0gZnJvbSAnLi9vY2MtcHJvZHVjdC1zZWFyY2guYWRhcHRlcic7XG5pbXBvcnQgeyBPY2NQcm9kdWN0QWRhcHRlciB9IGZyb20gJy4vb2NjLXByb2R1Y3QuYWRhcHRlcic7XG5pbXBvcnQgeyBQcm9kdWN0TmFtZU5vcm1hbGl6ZXIgfSBmcm9tICcuL2NvbnZlcnRlcnMvcHJvZHVjdC1uYW1lLW5vcm1hbGl6ZXInO1xuaW1wb3J0IHsgZGVmYXVsdE9jY1Byb2R1Y3RDb25maWcgfSBmcm9tICcuL2RlZmF1bHQtb2NjLXByb2R1Y3QtY29uZmlnJztcbmltcG9ydCAnLi9wcm9kdWN0LW9jYy1jb25maWcnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBIdHRwQ2xpZW50TW9kdWxlXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgcHJvdmlkZURlZmF1bHRDb25maWcoZGVmYXVsdE9jY1Byb2R1Y3RDb25maWcpLFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IFByb2R1Y3RBZGFwdGVyLFxuICAgICAgdXNlQ2xhc3M6IE9jY1Byb2R1Y3RBZGFwdGVyLFxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogUFJPRFVDVF9OT1JNQUxJWkVSLFxuICAgICAgdXNlRXhpc3Rpbmc6IFByb2R1Y3RJbWFnZU5vcm1hbGl6ZXIsXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IFBST0RVQ1RfTk9STUFMSVpFUixcbiAgICAgIHVzZUV4aXN0aW5nOiBQcm9kdWN0TmFtZU5vcm1hbGl6ZXIsXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IFByb2R1Y3RSZWZlcmVuY2VzQWRhcHRlcixcbiAgICAgIHVzZUNsYXNzOiBPY2NQcm9kdWN0UmVmZXJlbmNlc0FkYXB0ZXIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBQUk9EVUNUX1JFRkVSRU5DRVNfTk9STUFMSVpFUixcbiAgICAgIHVzZUV4aXN0aW5nOiBPY2NQcm9kdWN0UmVmZXJlbmNlc0xpc3ROb3JtYWxpemVyLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBQcm9kdWN0U2VhcmNoQWRhcHRlcixcbiAgICAgIHVzZUNsYXNzOiBPY2NQcm9kdWN0U2VhcmNoQWRhcHRlcixcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IFBST0RVQ1RfU0VBUkNIX1BBR0VfTk9STUFMSVpFUixcbiAgICAgIHVzZUV4aXN0aW5nOiBPY2NQcm9kdWN0U2VhcmNoUGFnZU5vcm1hbGl6ZXIsXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IFByb2R1Y3RSZXZpZXdzQWRhcHRlcixcbiAgICAgIHVzZUNsYXNzOiBPY2NQcm9kdWN0UmV2aWV3c0FkYXB0ZXIsXG4gICAgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdE9jY01vZHVsZSB7fVxuIl19
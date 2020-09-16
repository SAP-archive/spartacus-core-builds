import { ProductScope } from '../../../product/model/product-scope';
export const defaultOccProductConfig = {
    backend: {
        occ: {
            endpoints: {
                product: {
                    default: 'products/${productCode}?fields=DEFAULT,averageRating,images(FULL),classifications,manufacturer,numberOfReviews,categories(FULL),baseOptions,baseProduct,variantOptions,variantType',
                    list: 'products/${productCode}?fields=code,name,summary,price(formattedValue),images(DEFAULT,galleryIndex)',
                    details: 'products/${productCode}?fields=averageRating,stock(DEFAULT),description,availableForPickup,code,url,price(DEFAULT),numberOfReviews,manufacturer,categories(FULL),priceRange,multidimensional,configuratorType,configurable,tags,images(FULL)',
                    attributes: 'products/${productCode}?fields=classifications',
                    variants: 'products/${productCode}?fields=name,purchasable,baseOptions(DEFAULT),baseProduct,variantOptions(DEFAULT),variantType',
                },
                productReviews: 'products/${productCode}/reviews',
                // Uncomment this when occ gets configured
                // productReferences:
                //   'products/${productCode}/references?fields=DEFAULT,references(target(images(FULL)))&referenceType=${referenceType}',
                productReferences: 'products/${productCode}/references?fields=DEFAULT,references(target(images(FULL)))',
                // tslint:disable:max-line-length
                productSearch: 'products/search?fields=products(code,name,summary,price(FULL),images(DEFAULT),stock(FULL),averageRating,variantOptions),facets,breadcrumbs,pagination(DEFAULT),sorts(DEFAULT),freeTextSearch,currentQuery',
                // tslint:enable
                productSuggestions: 'products/suggestions',
            },
        },
        loadingScopes: {
            product: {
                details: {
                    include: [ProductScope.LIST, ProductScope.VARIANTS],
                },
            },
        },
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1vY2MtcHJvZHVjdC1jb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3NyYy9vY2MvYWRhcHRlcnMvcHJvZHVjdC9kZWZhdWx0LW9jYy1wcm9kdWN0LWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFHcEUsTUFBTSxDQUFDLE1BQU0sdUJBQXVCLEdBQWM7SUFDaEQsT0FBTyxFQUFFO1FBQ1AsR0FBRyxFQUFFO1lBQ0gsU0FBUyxFQUFFO2dCQUNULE9BQU8sRUFBRTtvQkFDUCxPQUFPLEVBQ0wsb0xBQW9MO29CQUN0TCxJQUFJLEVBQ0YscUdBQXFHO29CQUN2RyxPQUFPLEVBQ0wsOE9BQThPO29CQUNoUCxVQUFVLEVBQUUsZ0RBQWdEO29CQUM1RCxRQUFRLEVBQ04sc0hBQXNIO2lCQUN6SDtnQkFDRCxjQUFjLEVBQUUsaUNBQWlDO2dCQUNqRCwwQ0FBMEM7Z0JBQzFDLHFCQUFxQjtnQkFDckIseUhBQXlIO2dCQUN6SCxpQkFBaUIsRUFDZixvRkFBb0Y7Z0JBQ3RGLGlDQUFpQztnQkFDakMsYUFBYSxFQUNYLDJNQUEyTTtnQkFDN00sZ0JBQWdCO2dCQUNoQixrQkFBa0IsRUFBRSxzQkFBc0I7YUFDM0M7U0FDRjtRQUNELGFBQWEsRUFBRTtZQUNiLE9BQU8sRUFBRTtnQkFDUCxPQUFPLEVBQUU7b0JBQ1AsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxZQUFZLENBQUMsUUFBUSxDQUFDO2lCQUNwRDthQUNGO1NBQ0Y7S0FDRjtDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm9kdWN0U2NvcGUgfSBmcm9tICcuLi8uLi8uLi9wcm9kdWN0L21vZGVsL3Byb2R1Y3Qtc2NvcGUnO1xuaW1wb3J0IHsgT2NjQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnL29jYy1jb25maWcnO1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdE9jY1Byb2R1Y3RDb25maWc6IE9jY0NvbmZpZyA9IHtcbiAgYmFja2VuZDoge1xuICAgIG9jYzoge1xuICAgICAgZW5kcG9pbnRzOiB7XG4gICAgICAgIHByb2R1Y3Q6IHtcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgJ3Byb2R1Y3RzLyR7cHJvZHVjdENvZGV9P2ZpZWxkcz1ERUZBVUxULGF2ZXJhZ2VSYXRpbmcsaW1hZ2VzKEZVTEwpLGNsYXNzaWZpY2F0aW9ucyxtYW51ZmFjdHVyZXIsbnVtYmVyT2ZSZXZpZXdzLGNhdGVnb3JpZXMoRlVMTCksYmFzZU9wdGlvbnMsYmFzZVByb2R1Y3QsdmFyaWFudE9wdGlvbnMsdmFyaWFudFR5cGUnLFxuICAgICAgICAgIGxpc3Q6XG4gICAgICAgICAgICAncHJvZHVjdHMvJHtwcm9kdWN0Q29kZX0/ZmllbGRzPWNvZGUsbmFtZSxzdW1tYXJ5LHByaWNlKGZvcm1hdHRlZFZhbHVlKSxpbWFnZXMoREVGQVVMVCxnYWxsZXJ5SW5kZXgpJyxcbiAgICAgICAgICBkZXRhaWxzOlxuICAgICAgICAgICAgJ3Byb2R1Y3RzLyR7cHJvZHVjdENvZGV9P2ZpZWxkcz1hdmVyYWdlUmF0aW5nLHN0b2NrKERFRkFVTFQpLGRlc2NyaXB0aW9uLGF2YWlsYWJsZUZvclBpY2t1cCxjb2RlLHVybCxwcmljZShERUZBVUxUKSxudW1iZXJPZlJldmlld3MsbWFudWZhY3R1cmVyLGNhdGVnb3JpZXMoRlVMTCkscHJpY2VSYW5nZSxtdWx0aWRpbWVuc2lvbmFsLGNvbmZpZ3VyYXRvclR5cGUsY29uZmlndXJhYmxlLHRhZ3MsaW1hZ2VzKEZVTEwpJyxcbiAgICAgICAgICBhdHRyaWJ1dGVzOiAncHJvZHVjdHMvJHtwcm9kdWN0Q29kZX0/ZmllbGRzPWNsYXNzaWZpY2F0aW9ucycsXG4gICAgICAgICAgdmFyaWFudHM6XG4gICAgICAgICAgICAncHJvZHVjdHMvJHtwcm9kdWN0Q29kZX0/ZmllbGRzPW5hbWUscHVyY2hhc2FibGUsYmFzZU9wdGlvbnMoREVGQVVMVCksYmFzZVByb2R1Y3QsdmFyaWFudE9wdGlvbnMoREVGQVVMVCksdmFyaWFudFR5cGUnLFxuICAgICAgICB9LFxuICAgICAgICBwcm9kdWN0UmV2aWV3czogJ3Byb2R1Y3RzLyR7cHJvZHVjdENvZGV9L3Jldmlld3MnLFxuICAgICAgICAvLyBVbmNvbW1lbnQgdGhpcyB3aGVuIG9jYyBnZXRzIGNvbmZpZ3VyZWRcbiAgICAgICAgLy8gcHJvZHVjdFJlZmVyZW5jZXM6XG4gICAgICAgIC8vICAgJ3Byb2R1Y3RzLyR7cHJvZHVjdENvZGV9L3JlZmVyZW5jZXM/ZmllbGRzPURFRkFVTFQscmVmZXJlbmNlcyh0YXJnZXQoaW1hZ2VzKEZVTEwpKSkmcmVmZXJlbmNlVHlwZT0ke3JlZmVyZW5jZVR5cGV9JyxcbiAgICAgICAgcHJvZHVjdFJlZmVyZW5jZXM6XG4gICAgICAgICAgJ3Byb2R1Y3RzLyR7cHJvZHVjdENvZGV9L3JlZmVyZW5jZXM/ZmllbGRzPURFRkFVTFQscmVmZXJlbmNlcyh0YXJnZXQoaW1hZ2VzKEZVTEwpKSknLFxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGhcbiAgICAgICAgcHJvZHVjdFNlYXJjaDpcbiAgICAgICAgICAncHJvZHVjdHMvc2VhcmNoP2ZpZWxkcz1wcm9kdWN0cyhjb2RlLG5hbWUsc3VtbWFyeSxwcmljZShGVUxMKSxpbWFnZXMoREVGQVVMVCksc3RvY2soRlVMTCksYXZlcmFnZVJhdGluZyx2YXJpYW50T3B0aW9ucyksZmFjZXRzLGJyZWFkY3J1bWJzLHBhZ2luYXRpb24oREVGQVVMVCksc29ydHMoREVGQVVMVCksZnJlZVRleHRTZWFyY2gsY3VycmVudFF1ZXJ5JyxcbiAgICAgICAgLy8gdHNsaW50OmVuYWJsZVxuICAgICAgICBwcm9kdWN0U3VnZ2VzdGlvbnM6ICdwcm9kdWN0cy9zdWdnZXN0aW9ucycsXG4gICAgICB9LFxuICAgIH0sXG4gICAgbG9hZGluZ1Njb3Blczoge1xuICAgICAgcHJvZHVjdDoge1xuICAgICAgICBkZXRhaWxzOiB7XG4gICAgICAgICAgaW5jbHVkZTogW1Byb2R1Y3RTY29wZS5MSVNULCBQcm9kdWN0U2NvcGUuVkFSSUFOVFNdLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufTtcbiJdfQ==
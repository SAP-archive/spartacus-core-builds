/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ProductScope } from '../../../product/model/product-scope';
/** @type {?} */
export var defaultOccProductConfig = {
    backend: {
        occ: {
            endpoints: {
                product: 'products/${productCode}?fields=DEFAULT,averageRating,images(FULL),classifications,manufacturer,numberOfReviews,categories(FULL),baseOptions,baseProduct,variantOptions,variantType',
                product_scopes: {
                    list: 'products/${productCode}?fields=code,name,summary,price(formattedValue),images(DEFAULT,galleryIndex)',
                    details: 'products/${productCode}?fields=averageRating,stock(DEFAULT),description,availableForPickup,code,url,price(DEFAULT),numberOfReviews,manufacturer,categories(FULL),priceRange,multidimensional,configuratorType,configurable,tags,images(FULL)',
                    attributes: 'products/${productCode}?fields=classifications',
                    variants: 'products/${productCode}?fields=purchasable,baseOptions(DEFAULT),baseProduct,variantOptions(DEFAULT),variantType',
                },
                productReviews: 'products/${productCode}/reviews',
                // Uncomment this when occ gets configured
                // productReferences:
                //   'products/${productCode}/references?fields=DEFAULT,references(target(images(FULL)))&referenceType=${referenceType}',
                productReferences: 'products/${productCode}/references?fields=DEFAULT,references(target(images(FULL)))',
                // tslint:disable:max-line-length
                productSearch: 'products/search?fields=products(code,name,summary,price(FULL),images(DEFAULT),stock(FULL),averageRating,variantOptions),facets,breadcrumbs,pagination(DEFAULT),sorts(DEFAULT),freeTextSearch',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1vY2MtcHJvZHVjdC1jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvb2NjL2FkYXB0ZXJzL3Byb2R1Y3QvZGVmYXVsdC1vY2MtcHJvZHVjdC1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQzs7QUFHcEUsTUFBTSxLQUFPLHVCQUF1QixHQUFjO0lBQ2hELE9BQU8sRUFBRTtRQUNQLEdBQUcsRUFBRTtZQUNILFNBQVMsRUFBRTtnQkFDVCxPQUFPLEVBQ0wsb0xBQW9MO2dCQUN0TCxjQUFjLEVBQUU7b0JBQ2QsSUFBSSxFQUNGLHFHQUFxRztvQkFDdkcsT0FBTyxFQUNMLDhPQUE4TztvQkFDaFAsVUFBVSxFQUFFLGdEQUFnRDtvQkFDNUQsUUFBUSxFQUNOLGlIQUFpSDtpQkFDcEg7Z0JBQ0QsY0FBYyxFQUFFLGlDQUFpQzs7OztnQkFJakQsaUJBQWlCLEVBQ2Ysb0ZBQW9GOztnQkFFdEYsYUFBYSxFQUNYLDhMQUE4TDs7Z0JBRWhNLGtCQUFrQixFQUFFLHNCQUFzQjthQUMzQztTQUNGO1FBQ0QsYUFBYSxFQUFFO1lBQ2IsT0FBTyxFQUFFO2dCQUNQLE9BQU8sRUFBRTtvQkFDUCxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLFlBQVksQ0FBQyxRQUFRLENBQUM7aUJBQ3BEO2FBQ0Y7U0FDRjtLQUNGO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm9kdWN0U2NvcGUgfSBmcm9tICcuLi8uLi8uLi9wcm9kdWN0L21vZGVsL3Byb2R1Y3Qtc2NvcGUnO1xuaW1wb3J0IHsgT2NjQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnL29jYy1jb25maWcnO1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdE9jY1Byb2R1Y3RDb25maWc6IE9jY0NvbmZpZyA9IHtcbiAgYmFja2VuZDoge1xuICAgIG9jYzoge1xuICAgICAgZW5kcG9pbnRzOiB7XG4gICAgICAgIHByb2R1Y3Q6XG4gICAgICAgICAgJ3Byb2R1Y3RzLyR7cHJvZHVjdENvZGV9P2ZpZWxkcz1ERUZBVUxULGF2ZXJhZ2VSYXRpbmcsaW1hZ2VzKEZVTEwpLGNsYXNzaWZpY2F0aW9ucyxtYW51ZmFjdHVyZXIsbnVtYmVyT2ZSZXZpZXdzLGNhdGVnb3JpZXMoRlVMTCksYmFzZU9wdGlvbnMsYmFzZVByb2R1Y3QsdmFyaWFudE9wdGlvbnMsdmFyaWFudFR5cGUnLFxuICAgICAgICBwcm9kdWN0X3Njb3Blczoge1xuICAgICAgICAgIGxpc3Q6XG4gICAgICAgICAgICAncHJvZHVjdHMvJHtwcm9kdWN0Q29kZX0/ZmllbGRzPWNvZGUsbmFtZSxzdW1tYXJ5LHByaWNlKGZvcm1hdHRlZFZhbHVlKSxpbWFnZXMoREVGQVVMVCxnYWxsZXJ5SW5kZXgpJyxcbiAgICAgICAgICBkZXRhaWxzOlxuICAgICAgICAgICAgJ3Byb2R1Y3RzLyR7cHJvZHVjdENvZGV9P2ZpZWxkcz1hdmVyYWdlUmF0aW5nLHN0b2NrKERFRkFVTFQpLGRlc2NyaXB0aW9uLGF2YWlsYWJsZUZvclBpY2t1cCxjb2RlLHVybCxwcmljZShERUZBVUxUKSxudW1iZXJPZlJldmlld3MsbWFudWZhY3R1cmVyLGNhdGVnb3JpZXMoRlVMTCkscHJpY2VSYW5nZSxtdWx0aWRpbWVuc2lvbmFsLGNvbmZpZ3VyYXRvclR5cGUsY29uZmlndXJhYmxlLHRhZ3MsaW1hZ2VzKEZVTEwpJyxcbiAgICAgICAgICBhdHRyaWJ1dGVzOiAncHJvZHVjdHMvJHtwcm9kdWN0Q29kZX0/ZmllbGRzPWNsYXNzaWZpY2F0aW9ucycsXG4gICAgICAgICAgdmFyaWFudHM6XG4gICAgICAgICAgICAncHJvZHVjdHMvJHtwcm9kdWN0Q29kZX0/ZmllbGRzPXB1cmNoYXNhYmxlLGJhc2VPcHRpb25zKERFRkFVTFQpLGJhc2VQcm9kdWN0LHZhcmlhbnRPcHRpb25zKERFRkFVTFQpLHZhcmlhbnRUeXBlJyxcbiAgICAgICAgfSxcbiAgICAgICAgcHJvZHVjdFJldmlld3M6ICdwcm9kdWN0cy8ke3Byb2R1Y3RDb2RlfS9yZXZpZXdzJyxcbiAgICAgICAgLy8gVW5jb21tZW50IHRoaXMgd2hlbiBvY2MgZ2V0cyBjb25maWd1cmVkXG4gICAgICAgIC8vIHByb2R1Y3RSZWZlcmVuY2VzOlxuICAgICAgICAvLyAgICdwcm9kdWN0cy8ke3Byb2R1Y3RDb2RlfS9yZWZlcmVuY2VzP2ZpZWxkcz1ERUZBVUxULHJlZmVyZW5jZXModGFyZ2V0KGltYWdlcyhGVUxMKSkpJnJlZmVyZW5jZVR5cGU9JHtyZWZlcmVuY2VUeXBlfScsXG4gICAgICAgIHByb2R1Y3RSZWZlcmVuY2VzOlxuICAgICAgICAgICdwcm9kdWN0cy8ke3Byb2R1Y3RDb2RlfS9yZWZlcmVuY2VzP2ZpZWxkcz1ERUZBVUxULHJlZmVyZW5jZXModGFyZ2V0KGltYWdlcyhGVUxMKSkpJyxcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoXG4gICAgICAgIHByb2R1Y3RTZWFyY2g6XG4gICAgICAgICAgJ3Byb2R1Y3RzL3NlYXJjaD9maWVsZHM9cHJvZHVjdHMoY29kZSxuYW1lLHN1bW1hcnkscHJpY2UoRlVMTCksaW1hZ2VzKERFRkFVTFQpLHN0b2NrKEZVTEwpLGF2ZXJhZ2VSYXRpbmcsdmFyaWFudE9wdGlvbnMpLGZhY2V0cyxicmVhZGNydW1icyxwYWdpbmF0aW9uKERFRkFVTFQpLHNvcnRzKERFRkFVTFQpLGZyZWVUZXh0U2VhcmNoJyxcbiAgICAgICAgLy8gdHNsaW50OmVuYWJsZVxuICAgICAgICBwcm9kdWN0U3VnZ2VzdGlvbnM6ICdwcm9kdWN0cy9zdWdnZXN0aW9ucycsXG4gICAgICB9LFxuICAgIH0sXG4gICAgbG9hZGluZ1Njb3Blczoge1xuICAgICAgcHJvZHVjdDoge1xuICAgICAgICBkZXRhaWxzOiB7XG4gICAgICAgICAgaW5jbHVkZTogW1Byb2R1Y3RTY29wZS5MSVNULCBQcm9kdWN0U2NvcGUuVkFSSUFOVFNdLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufTtcbiJdfQ==
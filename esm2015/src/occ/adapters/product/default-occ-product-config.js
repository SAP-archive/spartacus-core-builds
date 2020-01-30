/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ProductScope } from '../../../product/model/product-scope';
/** @type {?} */
export const defaultOccProductConfig = {
    backend: {
        occ: {
            endpoints: {
                product: 'products/${productCode}?fields=DEFAULT,averageRating,images(FULL),classifications,manufacturer,numberOfReviews,categories(FULL),baseOptions,baseProduct,variantOptions,variantType',
                product_scopes: {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1vY2MtcHJvZHVjdC1jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvb2NjL2FkYXB0ZXJzL3Byb2R1Y3QvZGVmYXVsdC1vY2MtcHJvZHVjdC1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQzs7QUFHcEUsTUFBTSxPQUFPLHVCQUF1QixHQUFjO0lBQ2hELE9BQU8sRUFBRTtRQUNQLEdBQUcsRUFBRTtZQUNILFNBQVMsRUFBRTtnQkFDVCxPQUFPLEVBQ0wsb0xBQW9MO2dCQUN0TCxjQUFjLEVBQUU7b0JBQ2QsSUFBSSxFQUNGLHFHQUFxRztvQkFDdkcsT0FBTyxFQUNMLDhPQUE4TztvQkFDaFAsVUFBVSxFQUFFLGdEQUFnRDtvQkFDNUQsUUFBUSxFQUNOLHNIQUFzSDtpQkFDekg7Z0JBQ0QsY0FBYyxFQUFFLGlDQUFpQzs7OztnQkFJakQsaUJBQWlCLEVBQ2Ysb0ZBQW9GOztnQkFFdEYsYUFBYSxFQUNYLDhMQUE4TDs7Z0JBRWhNLGtCQUFrQixFQUFFLHNCQUFzQjthQUMzQztTQUNGO1FBQ0QsYUFBYSxFQUFFO1lBQ2IsT0FBTyxFQUFFO2dCQUNQLE9BQU8sRUFBRTtvQkFDUCxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLFlBQVksQ0FBQyxRQUFRLENBQUM7aUJBQ3BEO2FBQ0Y7U0FDRjtLQUNGO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm9kdWN0U2NvcGUgfSBmcm9tICcuLi8uLi8uLi9wcm9kdWN0L21vZGVsL3Byb2R1Y3Qtc2NvcGUnO1xuaW1wb3J0IHsgT2NjQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnL29jYy1jb25maWcnO1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdE9jY1Byb2R1Y3RDb25maWc6IE9jY0NvbmZpZyA9IHtcbiAgYmFja2VuZDoge1xuICAgIG9jYzoge1xuICAgICAgZW5kcG9pbnRzOiB7XG4gICAgICAgIHByb2R1Y3Q6XG4gICAgICAgICAgJ3Byb2R1Y3RzLyR7cHJvZHVjdENvZGV9P2ZpZWxkcz1ERUZBVUxULGF2ZXJhZ2VSYXRpbmcsaW1hZ2VzKEZVTEwpLGNsYXNzaWZpY2F0aW9ucyxtYW51ZmFjdHVyZXIsbnVtYmVyT2ZSZXZpZXdzLGNhdGVnb3JpZXMoRlVMTCksYmFzZU9wdGlvbnMsYmFzZVByb2R1Y3QsdmFyaWFudE9wdGlvbnMsdmFyaWFudFR5cGUnLFxuICAgICAgICBwcm9kdWN0X3Njb3Blczoge1xuICAgICAgICAgIGxpc3Q6XG4gICAgICAgICAgICAncHJvZHVjdHMvJHtwcm9kdWN0Q29kZX0/ZmllbGRzPWNvZGUsbmFtZSxzdW1tYXJ5LHByaWNlKGZvcm1hdHRlZFZhbHVlKSxpbWFnZXMoREVGQVVMVCxnYWxsZXJ5SW5kZXgpJyxcbiAgICAgICAgICBkZXRhaWxzOlxuICAgICAgICAgICAgJ3Byb2R1Y3RzLyR7cHJvZHVjdENvZGV9P2ZpZWxkcz1hdmVyYWdlUmF0aW5nLHN0b2NrKERFRkFVTFQpLGRlc2NyaXB0aW9uLGF2YWlsYWJsZUZvclBpY2t1cCxjb2RlLHVybCxwcmljZShERUZBVUxUKSxudW1iZXJPZlJldmlld3MsbWFudWZhY3R1cmVyLGNhdGVnb3JpZXMoRlVMTCkscHJpY2VSYW5nZSxtdWx0aWRpbWVuc2lvbmFsLGNvbmZpZ3VyYXRvclR5cGUsY29uZmlndXJhYmxlLHRhZ3MsaW1hZ2VzKEZVTEwpJyxcbiAgICAgICAgICBhdHRyaWJ1dGVzOiAncHJvZHVjdHMvJHtwcm9kdWN0Q29kZX0/ZmllbGRzPWNsYXNzaWZpY2F0aW9ucycsXG4gICAgICAgICAgdmFyaWFudHM6XG4gICAgICAgICAgICAncHJvZHVjdHMvJHtwcm9kdWN0Q29kZX0/ZmllbGRzPW5hbWUscHVyY2hhc2FibGUsYmFzZU9wdGlvbnMoREVGQVVMVCksYmFzZVByb2R1Y3QsdmFyaWFudE9wdGlvbnMoREVGQVVMVCksdmFyaWFudFR5cGUnLFxuICAgICAgICB9LFxuICAgICAgICBwcm9kdWN0UmV2aWV3czogJ3Byb2R1Y3RzLyR7cHJvZHVjdENvZGV9L3Jldmlld3MnLFxuICAgICAgICAvLyBVbmNvbW1lbnQgdGhpcyB3aGVuIG9jYyBnZXRzIGNvbmZpZ3VyZWRcbiAgICAgICAgLy8gcHJvZHVjdFJlZmVyZW5jZXM6XG4gICAgICAgIC8vICAgJ3Byb2R1Y3RzLyR7cHJvZHVjdENvZGV9L3JlZmVyZW5jZXM/ZmllbGRzPURFRkFVTFQscmVmZXJlbmNlcyh0YXJnZXQoaW1hZ2VzKEZVTEwpKSkmcmVmZXJlbmNlVHlwZT0ke3JlZmVyZW5jZVR5cGV9JyxcbiAgICAgICAgcHJvZHVjdFJlZmVyZW5jZXM6XG4gICAgICAgICAgJ3Byb2R1Y3RzLyR7cHJvZHVjdENvZGV9L3JlZmVyZW5jZXM/ZmllbGRzPURFRkFVTFQscmVmZXJlbmNlcyh0YXJnZXQoaW1hZ2VzKEZVTEwpKSknLFxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGhcbiAgICAgICAgcHJvZHVjdFNlYXJjaDpcbiAgICAgICAgICAncHJvZHVjdHMvc2VhcmNoP2ZpZWxkcz1wcm9kdWN0cyhjb2RlLG5hbWUsc3VtbWFyeSxwcmljZShGVUxMKSxpbWFnZXMoREVGQVVMVCksc3RvY2soRlVMTCksYXZlcmFnZVJhdGluZyx2YXJpYW50T3B0aW9ucyksZmFjZXRzLGJyZWFkY3J1bWJzLHBhZ2luYXRpb24oREVGQVVMVCksc29ydHMoREVGQVVMVCksZnJlZVRleHRTZWFyY2gnLFxuICAgICAgICAvLyB0c2xpbnQ6ZW5hYmxlXG4gICAgICAgIHByb2R1Y3RTdWdnZXN0aW9uczogJ3Byb2R1Y3RzL3N1Z2dlc3Rpb25zJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBsb2FkaW5nU2NvcGVzOiB7XG4gICAgICBwcm9kdWN0OiB7XG4gICAgICAgIGRldGFpbHM6IHtcbiAgICAgICAgICBpbmNsdWRlOiBbUHJvZHVjdFNjb3BlLkxJU1QsIFByb2R1Y3RTY29wZS5WQVJJQU5UU10sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59O1xuIl19
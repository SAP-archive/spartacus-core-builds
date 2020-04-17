import { ProductScope } from '../../../product/model/product-scope';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1vY2MtcHJvZHVjdC1jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvb2NjL2FkYXB0ZXJzL3Byb2R1Y3QvZGVmYXVsdC1vY2MtcHJvZHVjdC1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBR3BFLE1BQU0sQ0FBQyxNQUFNLHVCQUF1QixHQUFjO0lBQ2hELE9BQU8sRUFBRTtRQUNQLEdBQUcsRUFBRTtZQUNILFNBQVMsRUFBRTtnQkFDVCxPQUFPLEVBQ0wsb0xBQW9MO2dCQUN0TCxjQUFjLEVBQUU7b0JBQ2QsSUFBSSxFQUNGLHFHQUFxRztvQkFDdkcsT0FBTyxFQUNMLDhPQUE4TztvQkFDaFAsVUFBVSxFQUFFLGdEQUFnRDtvQkFDNUQsUUFBUSxFQUNOLHNIQUFzSDtpQkFDekg7Z0JBQ0QsY0FBYyxFQUFFLGlDQUFpQztnQkFDakQsMENBQTBDO2dCQUMxQyxxQkFBcUI7Z0JBQ3JCLHlIQUF5SDtnQkFDekgsaUJBQWlCLEVBQ2Ysb0ZBQW9GO2dCQUN0RixpQ0FBaUM7Z0JBQ2pDLGFBQWEsRUFDWCwyTUFBMk07Z0JBQzdNLGdCQUFnQjtnQkFDaEIsa0JBQWtCLEVBQUUsc0JBQXNCO2FBQzNDO1NBQ0Y7UUFDRCxhQUFhLEVBQUU7WUFDYixPQUFPLEVBQUU7Z0JBQ1AsT0FBTyxFQUFFO29CQUNQLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsWUFBWSxDQUFDLFFBQVEsQ0FBQztpQkFDcEQ7YUFDRjtTQUNGO0tBQ0Y7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvZHVjdFNjb3BlIH0gZnJvbSAnLi4vLi4vLi4vcHJvZHVjdC9tb2RlbC9wcm9kdWN0LXNjb3BlJztcbmltcG9ydCB7IE9jY0NvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZy9vY2MtY29uZmlnJztcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRPY2NQcm9kdWN0Q29uZmlnOiBPY2NDb25maWcgPSB7XG4gIGJhY2tlbmQ6IHtcbiAgICBvY2M6IHtcbiAgICAgIGVuZHBvaW50czoge1xuICAgICAgICBwcm9kdWN0OlxuICAgICAgICAgICdwcm9kdWN0cy8ke3Byb2R1Y3RDb2RlfT9maWVsZHM9REVGQVVMVCxhdmVyYWdlUmF0aW5nLGltYWdlcyhGVUxMKSxjbGFzc2lmaWNhdGlvbnMsbWFudWZhY3R1cmVyLG51bWJlck9mUmV2aWV3cyxjYXRlZ29yaWVzKEZVTEwpLGJhc2VPcHRpb25zLGJhc2VQcm9kdWN0LHZhcmlhbnRPcHRpb25zLHZhcmlhbnRUeXBlJyxcbiAgICAgICAgcHJvZHVjdF9zY29wZXM6IHtcbiAgICAgICAgICBsaXN0OlxuICAgICAgICAgICAgJ3Byb2R1Y3RzLyR7cHJvZHVjdENvZGV9P2ZpZWxkcz1jb2RlLG5hbWUsc3VtbWFyeSxwcmljZShmb3JtYXR0ZWRWYWx1ZSksaW1hZ2VzKERFRkFVTFQsZ2FsbGVyeUluZGV4KScsXG4gICAgICAgICAgZGV0YWlsczpcbiAgICAgICAgICAgICdwcm9kdWN0cy8ke3Byb2R1Y3RDb2RlfT9maWVsZHM9YXZlcmFnZVJhdGluZyxzdG9jayhERUZBVUxUKSxkZXNjcmlwdGlvbixhdmFpbGFibGVGb3JQaWNrdXAsY29kZSx1cmwscHJpY2UoREVGQVVMVCksbnVtYmVyT2ZSZXZpZXdzLG1hbnVmYWN0dXJlcixjYXRlZ29yaWVzKEZVTEwpLHByaWNlUmFuZ2UsbXVsdGlkaW1lbnNpb25hbCxjb25maWd1cmF0b3JUeXBlLGNvbmZpZ3VyYWJsZSx0YWdzLGltYWdlcyhGVUxMKScsXG4gICAgICAgICAgYXR0cmlidXRlczogJ3Byb2R1Y3RzLyR7cHJvZHVjdENvZGV9P2ZpZWxkcz1jbGFzc2lmaWNhdGlvbnMnLFxuICAgICAgICAgIHZhcmlhbnRzOlxuICAgICAgICAgICAgJ3Byb2R1Y3RzLyR7cHJvZHVjdENvZGV9P2ZpZWxkcz1uYW1lLHB1cmNoYXNhYmxlLGJhc2VPcHRpb25zKERFRkFVTFQpLGJhc2VQcm9kdWN0LHZhcmlhbnRPcHRpb25zKERFRkFVTFQpLHZhcmlhbnRUeXBlJyxcbiAgICAgICAgfSxcbiAgICAgICAgcHJvZHVjdFJldmlld3M6ICdwcm9kdWN0cy8ke3Byb2R1Y3RDb2RlfS9yZXZpZXdzJyxcbiAgICAgICAgLy8gVW5jb21tZW50IHRoaXMgd2hlbiBvY2MgZ2V0cyBjb25maWd1cmVkXG4gICAgICAgIC8vIHByb2R1Y3RSZWZlcmVuY2VzOlxuICAgICAgICAvLyAgICdwcm9kdWN0cy8ke3Byb2R1Y3RDb2RlfS9yZWZlcmVuY2VzP2ZpZWxkcz1ERUZBVUxULHJlZmVyZW5jZXModGFyZ2V0KGltYWdlcyhGVUxMKSkpJnJlZmVyZW5jZVR5cGU9JHtyZWZlcmVuY2VUeXBlfScsXG4gICAgICAgIHByb2R1Y3RSZWZlcmVuY2VzOlxuICAgICAgICAgICdwcm9kdWN0cy8ke3Byb2R1Y3RDb2RlfS9yZWZlcmVuY2VzP2ZpZWxkcz1ERUZBVUxULHJlZmVyZW5jZXModGFyZ2V0KGltYWdlcyhGVUxMKSkpJyxcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoXG4gICAgICAgIHByb2R1Y3RTZWFyY2g6XG4gICAgICAgICAgJ3Byb2R1Y3RzL3NlYXJjaD9maWVsZHM9cHJvZHVjdHMoY29kZSxuYW1lLHN1bW1hcnkscHJpY2UoRlVMTCksaW1hZ2VzKERFRkFVTFQpLHN0b2NrKEZVTEwpLGF2ZXJhZ2VSYXRpbmcsdmFyaWFudE9wdGlvbnMpLGZhY2V0cyxicmVhZGNydW1icyxwYWdpbmF0aW9uKERFRkFVTFQpLHNvcnRzKERFRkFVTFQpLGZyZWVUZXh0U2VhcmNoLGN1cnJlbnRRdWVyeScsXG4gICAgICAgIC8vIHRzbGludDplbmFibGVcbiAgICAgICAgcHJvZHVjdFN1Z2dlc3Rpb25zOiAncHJvZHVjdHMvc3VnZ2VzdGlvbnMnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGxvYWRpbmdTY29wZXM6IHtcbiAgICAgIHByb2R1Y3Q6IHtcbiAgICAgICAgZGV0YWlsczoge1xuICAgICAgICAgIGluY2x1ZGU6IFtQcm9kdWN0U2NvcGUuTElTVCwgUHJvZHVjdFNjb3BlLlZBUklBTlRTXSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn07XG4iXX0=
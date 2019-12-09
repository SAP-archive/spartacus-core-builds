/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export var defaultOccProductConfig = {
    backend: {
        occ: {
            endpoints: {
                product: 'products/${productCode}?fields=DEFAULT,averageRating,images(FULL),classifications,manufacturer,numberOfReviews,categories(FULL)',
                product_scopes: {
                    list: 'products/${productCode}?fields=code,name,summary,price(formattedValue),images(DEFAULT,galleryIndex)',
                    details: 'products/${productCode}?fields=averageRating,purchasable,stock(DEFAULT),description,variantMatrix(DEFAULT),baseOptions(DEFAULT),baseProduct,availableForPickup,variantOptions(DEFAULT),code,url,price(DEFAULT),numberOfReviews,manufacturer,categories(FULL),priceRange,multidimensional,configuratorType,configurable,tags,classifications,images(FULL)',
                },
                productReviews: 'products/${productCode}/reviews',
                // Uncomment this when occ gets configured
                // productReferences:
                //   'products/${productCode}/references?fields=DEFAULT,references(target(images(FULL)))&referenceType=${referenceType}',
                productReferences: 'products/${productCode}/references?fields=DEFAULT,references(target(images(FULL)))',
                // tslint:disable:max-line-length
                productSearch: 'products/search?fields=products(code,name,summary,price(FULL),images(DEFAULT),stock(FULL),averageRating),facets,breadcrumbs,pagination(DEFAULT),sorts(DEFAULT),freeTextSearch',
                // tslint:enable
                productSuggestions: 'products/suggestions',
            },
        },
        loadingScopes: {
            product: {
                details: {
                    include: ['list'],
                },
            },
        },
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1vY2MtcHJvZHVjdC1jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvb2NjL2FkYXB0ZXJzL3Byb2R1Y3QvZGVmYXVsdC1vY2MtcHJvZHVjdC1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxNQUFNLEtBQU8sdUJBQXVCLEdBQWM7SUFDaEQsT0FBTyxFQUFFO1FBQ1AsR0FBRyxFQUFFO1lBQ0gsU0FBUyxFQUFFO2dCQUNULE9BQU8sRUFDTCxpSUFBaUk7Z0JBQ25JLGNBQWMsRUFBRTtvQkFDZCxJQUFJLEVBQ0YscUdBQXFHO29CQUN2RyxPQUFPLEVBQ0wsMFZBQTBWO2lCQUM3VjtnQkFDRCxjQUFjLEVBQUUsaUNBQWlDOzs7O2dCQUlqRCxpQkFBaUIsRUFDZixvRkFBb0Y7O2dCQUV0RixhQUFhLEVBQ1gsK0tBQStLOztnQkFFakwsa0JBQWtCLEVBQUUsc0JBQXNCO2FBQzNDO1NBQ0Y7UUFDRCxhQUFhLEVBQUU7WUFDYixPQUFPLEVBQUU7Z0JBQ1AsT0FBTyxFQUFFO29CQUNQLE9BQU8sRUFBRSxDQUFDLE1BQU0sQ0FBQztpQkFDbEI7YUFDRjtTQUNGO0tBQ0Y7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9jY0NvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZy9vY2MtY29uZmlnJztcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRPY2NQcm9kdWN0Q29uZmlnOiBPY2NDb25maWcgPSB7XG4gIGJhY2tlbmQ6IHtcbiAgICBvY2M6IHtcbiAgICAgIGVuZHBvaW50czoge1xuICAgICAgICBwcm9kdWN0OlxuICAgICAgICAgICdwcm9kdWN0cy8ke3Byb2R1Y3RDb2RlfT9maWVsZHM9REVGQVVMVCxhdmVyYWdlUmF0aW5nLGltYWdlcyhGVUxMKSxjbGFzc2lmaWNhdGlvbnMsbWFudWZhY3R1cmVyLG51bWJlck9mUmV2aWV3cyxjYXRlZ29yaWVzKEZVTEwpJyxcbiAgICAgICAgcHJvZHVjdF9zY29wZXM6IHtcbiAgICAgICAgICBsaXN0OlxuICAgICAgICAgICAgJ3Byb2R1Y3RzLyR7cHJvZHVjdENvZGV9P2ZpZWxkcz1jb2RlLG5hbWUsc3VtbWFyeSxwcmljZShmb3JtYXR0ZWRWYWx1ZSksaW1hZ2VzKERFRkFVTFQsZ2FsbGVyeUluZGV4KScsXG4gICAgICAgICAgZGV0YWlsczpcbiAgICAgICAgICAgICdwcm9kdWN0cy8ke3Byb2R1Y3RDb2RlfT9maWVsZHM9YXZlcmFnZVJhdGluZyxwdXJjaGFzYWJsZSxzdG9jayhERUZBVUxUKSxkZXNjcmlwdGlvbix2YXJpYW50TWF0cml4KERFRkFVTFQpLGJhc2VPcHRpb25zKERFRkFVTFQpLGJhc2VQcm9kdWN0LGF2YWlsYWJsZUZvclBpY2t1cCx2YXJpYW50T3B0aW9ucyhERUZBVUxUKSxjb2RlLHVybCxwcmljZShERUZBVUxUKSxudW1iZXJPZlJldmlld3MsbWFudWZhY3R1cmVyLGNhdGVnb3JpZXMoRlVMTCkscHJpY2VSYW5nZSxtdWx0aWRpbWVuc2lvbmFsLGNvbmZpZ3VyYXRvclR5cGUsY29uZmlndXJhYmxlLHRhZ3MsY2xhc3NpZmljYXRpb25zLGltYWdlcyhGVUxMKScsXG4gICAgICAgIH0sXG4gICAgICAgIHByb2R1Y3RSZXZpZXdzOiAncHJvZHVjdHMvJHtwcm9kdWN0Q29kZX0vcmV2aWV3cycsXG4gICAgICAgIC8vIFVuY29tbWVudCB0aGlzIHdoZW4gb2NjIGdldHMgY29uZmlndXJlZFxuICAgICAgICAvLyBwcm9kdWN0UmVmZXJlbmNlczpcbiAgICAgICAgLy8gICAncHJvZHVjdHMvJHtwcm9kdWN0Q29kZX0vcmVmZXJlbmNlcz9maWVsZHM9REVGQVVMVCxyZWZlcmVuY2VzKHRhcmdldChpbWFnZXMoRlVMTCkpKSZyZWZlcmVuY2VUeXBlPSR7cmVmZXJlbmNlVHlwZX0nLFxuICAgICAgICBwcm9kdWN0UmVmZXJlbmNlczpcbiAgICAgICAgICAncHJvZHVjdHMvJHtwcm9kdWN0Q29kZX0vcmVmZXJlbmNlcz9maWVsZHM9REVGQVVMVCxyZWZlcmVuY2VzKHRhcmdldChpbWFnZXMoRlVMTCkpKScsXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aFxuICAgICAgICBwcm9kdWN0U2VhcmNoOlxuICAgICAgICAgICdwcm9kdWN0cy9zZWFyY2g/ZmllbGRzPXByb2R1Y3RzKGNvZGUsbmFtZSxzdW1tYXJ5LHByaWNlKEZVTEwpLGltYWdlcyhERUZBVUxUKSxzdG9jayhGVUxMKSxhdmVyYWdlUmF0aW5nKSxmYWNldHMsYnJlYWRjcnVtYnMscGFnaW5hdGlvbihERUZBVUxUKSxzb3J0cyhERUZBVUxUKSxmcmVlVGV4dFNlYXJjaCcsXG4gICAgICAgIC8vIHRzbGludDplbmFibGVcbiAgICAgICAgcHJvZHVjdFN1Z2dlc3Rpb25zOiAncHJvZHVjdHMvc3VnZ2VzdGlvbnMnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGxvYWRpbmdTY29wZXM6IHtcbiAgICAgIHByb2R1Y3Q6IHtcbiAgICAgICAgZGV0YWlsczoge1xuICAgICAgICAgIGluY2x1ZGU6IFsnbGlzdCddLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufTtcbiJdfQ==
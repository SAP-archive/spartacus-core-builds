/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export var defaultOccProductConfig = {
    backend: {
        occ: {
            endpoints: {
                product: 'products/${productCode}?fields=DEFAULT,averageRating,images(FULL),classifications,numberOfReviews,categories(FULL)',
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
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1vY2MtcHJvZHVjdC1jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvb2NjL2FkYXB0ZXJzL3Byb2R1Y3QvZGVmYXVsdC1vY2MtcHJvZHVjdC1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxNQUFNLEtBQU8sdUJBQXVCLEdBQWM7SUFDaEQsT0FBTyxFQUFFO1FBQ1AsR0FBRyxFQUFFO1lBQ0gsU0FBUyxFQUFFO2dCQUNULE9BQU8sRUFDTCxvSEFBb0g7Z0JBQ3RILGNBQWMsRUFBRSxpQ0FBaUM7Ozs7Z0JBSWpELGlCQUFpQixFQUNmLG9GQUFvRjs7Z0JBRXRGLGFBQWEsRUFDWCwrS0FBK0s7O2dCQUVqTCxrQkFBa0IsRUFBRSxzQkFBc0I7YUFDM0M7U0FDRjtLQUNGO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPY2NDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcvb2NjLWNvbmZpZyc7XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0T2NjUHJvZHVjdENvbmZpZzogT2NjQ29uZmlnID0ge1xuICBiYWNrZW5kOiB7XG4gICAgb2NjOiB7XG4gICAgICBlbmRwb2ludHM6IHtcbiAgICAgICAgcHJvZHVjdDpcbiAgICAgICAgICAncHJvZHVjdHMvJHtwcm9kdWN0Q29kZX0/ZmllbGRzPURFRkFVTFQsYXZlcmFnZVJhdGluZyxpbWFnZXMoRlVMTCksY2xhc3NpZmljYXRpb25zLG51bWJlck9mUmV2aWV3cyxjYXRlZ29yaWVzKEZVTEwpJyxcbiAgICAgICAgcHJvZHVjdFJldmlld3M6ICdwcm9kdWN0cy8ke3Byb2R1Y3RDb2RlfS9yZXZpZXdzJyxcbiAgICAgICAgLy8gVW5jb21tZW50IHRoaXMgd2hlbiBvY2MgZ2V0cyBjb25maWd1cmVkXG4gICAgICAgIC8vIHByb2R1Y3RSZWZlcmVuY2VzOlxuICAgICAgICAvLyAgICdwcm9kdWN0cy8ke3Byb2R1Y3RDb2RlfS9yZWZlcmVuY2VzP2ZpZWxkcz1ERUZBVUxULHJlZmVyZW5jZXModGFyZ2V0KGltYWdlcyhGVUxMKSkpJnJlZmVyZW5jZVR5cGU9JHtyZWZlcmVuY2VUeXBlfScsXG4gICAgICAgIHByb2R1Y3RSZWZlcmVuY2VzOlxuICAgICAgICAgICdwcm9kdWN0cy8ke3Byb2R1Y3RDb2RlfS9yZWZlcmVuY2VzP2ZpZWxkcz1ERUZBVUxULHJlZmVyZW5jZXModGFyZ2V0KGltYWdlcyhGVUxMKSkpJyxcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoXG4gICAgICAgIHByb2R1Y3RTZWFyY2g6XG4gICAgICAgICAgJ3Byb2R1Y3RzL3NlYXJjaD9maWVsZHM9cHJvZHVjdHMoY29kZSxuYW1lLHN1bW1hcnkscHJpY2UoRlVMTCksaW1hZ2VzKERFRkFVTFQpLHN0b2NrKEZVTEwpLGF2ZXJhZ2VSYXRpbmcpLGZhY2V0cyxicmVhZGNydW1icyxwYWdpbmF0aW9uKERFRkFVTFQpLHNvcnRzKERFRkFVTFQpLGZyZWVUZXh0U2VhcmNoJyxcbiAgICAgICAgLy8gdHNsaW50OmVuYWJsZVxuICAgICAgICBwcm9kdWN0U3VnZ2VzdGlvbnM6ICdwcm9kdWN0cy9zdWdnZXN0aW9ucycsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59O1xuIl19
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export const defaultOccProductConfig = {
    backend: {
        occ: {
            endpoints: {
                product: 'products/${productCode}?fields=DEFAULT,averageRating,images(FULL),classifications,numberOfReviews',
                productReviews: 'products/${productCode}/reviews',
                // Uncomment this when occ gets configured
                // productReferences:
                //   'products/${productCode}/references?fields=DEFAULT,references(target(images(FULL)))&referenceType=${referenceType}',
                productReferences: 'products/${productCode}/references?fields=DEFAULT,references(target(images(FULL)))',
                // tslint:disable:max-line-length
                productSearch: 'products/search?fields=products(code,name,summary,price(FULL),images(DEFAULT),stock(FULL),averageRating),facets,breadcrumbs,pagination(DEFAULT),sorts(DEFAULT),freeTextSearch&query=${query}',
                // tslint:enable
                productSuggestions: 'products/suggestions?term=${term}&max=${max}',
            },
        },
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1vY2MtcHJvZHVjdC1jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvb2NjL2FkYXB0ZXJzL3Byb2R1Y3QvZGVmYXVsdC1vY2MtcHJvZHVjdC1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxNQUFNLE9BQU8sdUJBQXVCLEdBQWM7SUFDaEQsT0FBTyxFQUFFO1FBQ1AsR0FBRyxFQUFFO1lBQ0gsU0FBUyxFQUFFO2dCQUNULE9BQU8sRUFDTCxtR0FBbUc7Z0JBQ3JHLGNBQWMsRUFBRSxpQ0FBaUM7Ozs7Z0JBSWpELGlCQUFpQixFQUNmLG9GQUFvRjs7Z0JBRXRGLGFBQWEsRUFDWCw4TEFBOEw7O2dCQUVoTSxrQkFBa0IsRUFBRSw4Q0FBOEM7YUFDbkU7U0FDRjtLQUNGO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPY2NDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcvb2NjLWNvbmZpZyc7XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0T2NjUHJvZHVjdENvbmZpZzogT2NjQ29uZmlnID0ge1xuICBiYWNrZW5kOiB7XG4gICAgb2NjOiB7XG4gICAgICBlbmRwb2ludHM6IHtcbiAgICAgICAgcHJvZHVjdDpcbiAgICAgICAgICAncHJvZHVjdHMvJHtwcm9kdWN0Q29kZX0/ZmllbGRzPURFRkFVTFQsYXZlcmFnZVJhdGluZyxpbWFnZXMoRlVMTCksY2xhc3NpZmljYXRpb25zLG51bWJlck9mUmV2aWV3cycsXG4gICAgICAgIHByb2R1Y3RSZXZpZXdzOiAncHJvZHVjdHMvJHtwcm9kdWN0Q29kZX0vcmV2aWV3cycsXG4gICAgICAgIC8vIFVuY29tbWVudCB0aGlzIHdoZW4gb2NjIGdldHMgY29uZmlndXJlZFxuICAgICAgICAvLyBwcm9kdWN0UmVmZXJlbmNlczpcbiAgICAgICAgLy8gICAncHJvZHVjdHMvJHtwcm9kdWN0Q29kZX0vcmVmZXJlbmNlcz9maWVsZHM9REVGQVVMVCxyZWZlcmVuY2VzKHRhcmdldChpbWFnZXMoRlVMTCkpKSZyZWZlcmVuY2VUeXBlPSR7cmVmZXJlbmNlVHlwZX0nLFxuICAgICAgICBwcm9kdWN0UmVmZXJlbmNlczpcbiAgICAgICAgICAncHJvZHVjdHMvJHtwcm9kdWN0Q29kZX0vcmVmZXJlbmNlcz9maWVsZHM9REVGQVVMVCxyZWZlcmVuY2VzKHRhcmdldChpbWFnZXMoRlVMTCkpKScsXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aFxuICAgICAgICBwcm9kdWN0U2VhcmNoOlxuICAgICAgICAgICdwcm9kdWN0cy9zZWFyY2g/ZmllbGRzPXByb2R1Y3RzKGNvZGUsbmFtZSxzdW1tYXJ5LHByaWNlKEZVTEwpLGltYWdlcyhERUZBVUxUKSxzdG9jayhGVUxMKSxhdmVyYWdlUmF0aW5nKSxmYWNldHMsYnJlYWRjcnVtYnMscGFnaW5hdGlvbihERUZBVUxUKSxzb3J0cyhERUZBVUxUKSxmcmVlVGV4dFNlYXJjaCZxdWVyeT0ke3F1ZXJ5fScsXG4gICAgICAgIC8vIHRzbGludDplbmFibGVcbiAgICAgICAgcHJvZHVjdFN1Z2dlc3Rpb25zOiAncHJvZHVjdHMvc3VnZ2VzdGlvbnM/dGVybT0ke3Rlcm19Jm1heD0ke21heH0nLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufTtcbiJdfQ==
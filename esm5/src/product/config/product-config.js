/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export var defaultOccProductConfig = {
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
                productSearch: 'products/search?fields=products(code,name,summary,price(FULL),images(DEFAULT),stock(FULL),averageRating),facets,breadcrumbs,pagination(DEFAULT),sorts(DEFAULT)&query=${query}',
                // tslint:enable
                productSuggestions: 'products/suggestions?term=${term}&max=${max}',
            },
        },
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9jb25maWcvcHJvZHVjdC1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxNQUFNLEtBQU8sdUJBQXVCLEdBQWM7SUFDaEQsT0FBTyxFQUFFO1FBQ1AsR0FBRyxFQUFFO1lBQ0gsU0FBUyxFQUFFO2dCQUNULE9BQU8sRUFDTCxtR0FBbUc7Z0JBQ3JHLGNBQWMsRUFBRSxpQ0FBaUM7Ozs7Z0JBSWpELGlCQUFpQixFQUNmLG9GQUFvRjs7Z0JBRXRGLGFBQWEsRUFDWCwrS0FBK0s7O2dCQUVqTCxrQkFBa0IsRUFBRSw4Q0FBOEM7YUFDbkU7U0FDRjtLQUNGO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPY2NDb25maWcgfSBmcm9tICcuLi8uLi9vY2MvY29uZmlnL29jYy1jb25maWcnO1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdE9jY1Byb2R1Y3RDb25maWc6IE9jY0NvbmZpZyA9IHtcbiAgYmFja2VuZDoge1xuICAgIG9jYzoge1xuICAgICAgZW5kcG9pbnRzOiB7XG4gICAgICAgIHByb2R1Y3Q6XG4gICAgICAgICAgJ3Byb2R1Y3RzLyR7cHJvZHVjdENvZGV9P2ZpZWxkcz1ERUZBVUxULGF2ZXJhZ2VSYXRpbmcsaW1hZ2VzKEZVTEwpLGNsYXNzaWZpY2F0aW9ucyxudW1iZXJPZlJldmlld3MnLFxuICAgICAgICBwcm9kdWN0UmV2aWV3czogJ3Byb2R1Y3RzLyR7cHJvZHVjdENvZGV9L3Jldmlld3MnLFxuICAgICAgICAvLyBVbmNvbW1lbnQgdGhpcyB3aGVuIG9jYyBnZXRzIGNvbmZpZ3VyZWRcbiAgICAgICAgLy8gcHJvZHVjdFJlZmVyZW5jZXM6XG4gICAgICAgIC8vICAgJ3Byb2R1Y3RzLyR7cHJvZHVjdENvZGV9L3JlZmVyZW5jZXM/ZmllbGRzPURFRkFVTFQscmVmZXJlbmNlcyh0YXJnZXQoaW1hZ2VzKEZVTEwpKSkmcmVmZXJlbmNlVHlwZT0ke3JlZmVyZW5jZVR5cGV9JyxcbiAgICAgICAgcHJvZHVjdFJlZmVyZW5jZXM6XG4gICAgICAgICAgJ3Byb2R1Y3RzLyR7cHJvZHVjdENvZGV9L3JlZmVyZW5jZXM/ZmllbGRzPURFRkFVTFQscmVmZXJlbmNlcyh0YXJnZXQoaW1hZ2VzKEZVTEwpKSknLFxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGhcbiAgICAgICAgcHJvZHVjdFNlYXJjaDpcbiAgICAgICAgICAncHJvZHVjdHMvc2VhcmNoP2ZpZWxkcz1wcm9kdWN0cyhjb2RlLG5hbWUsc3VtbWFyeSxwcmljZShGVUxMKSxpbWFnZXMoREVGQVVMVCksc3RvY2soRlVMTCksYXZlcmFnZVJhdGluZyksZmFjZXRzLGJyZWFkY3J1bWJzLHBhZ2luYXRpb24oREVGQVVMVCksc29ydHMoREVGQVVMVCkmcXVlcnk9JHtxdWVyeX0nLFxuICAgICAgICAvLyB0c2xpbnQ6ZW5hYmxlXG4gICAgICAgIHByb2R1Y3RTdWdnZXN0aW9uczogJ3Byb2R1Y3RzL3N1Z2dlc3Rpb25zP3Rlcm09JHt0ZXJtfSZtYXg9JHttYXh9JyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn07XG4iXX0=
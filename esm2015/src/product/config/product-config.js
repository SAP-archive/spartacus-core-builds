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
                // tslint:disable:max-line-length
                productSearch: 'products/search?fields=products(code,name,summary,price(FULL),images(DEFAULT),stock(FULL),averageRating),facets,breadcrumbs,pagination(DEFAULT),sorts(DEFAULT)&query=${query}',
                // tslint:enable
                productSuggestions: 'products/suggestions?term=${term}&max=${max}',
            },
        },
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9jb25maWcvcHJvZHVjdC1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxNQUFNLE9BQU8sdUJBQXVCLEdBQWM7SUFDaEQsT0FBTyxFQUFFO1FBQ1AsR0FBRyxFQUFFO1lBQ0gsU0FBUyxFQUFFO2dCQUNULE9BQU8sRUFDTCxtR0FBbUc7Z0JBQ3JHLGNBQWMsRUFBRSxpQ0FBaUM7O2dCQUVqRCxhQUFhLEVBQ1gsK0tBQStLOztnQkFFakwsa0JBQWtCLEVBQUUsOENBQThDO2FBQ25FO1NBQ0Y7S0FDRjtDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2NjQ29uZmlnIH0gZnJvbSAnLi4vLi4vb2NjL2NvbmZpZy9vY2MtY29uZmlnJztcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRPY2NQcm9kdWN0Q29uZmlnOiBPY2NDb25maWcgPSB7XG4gIGJhY2tlbmQ6IHtcbiAgICBvY2M6IHtcbiAgICAgIGVuZHBvaW50czoge1xuICAgICAgICBwcm9kdWN0OlxuICAgICAgICAgICdwcm9kdWN0cy8ke3Byb2R1Y3RDb2RlfT9maWVsZHM9REVGQVVMVCxhdmVyYWdlUmF0aW5nLGltYWdlcyhGVUxMKSxjbGFzc2lmaWNhdGlvbnMsbnVtYmVyT2ZSZXZpZXdzJyxcbiAgICAgICAgcHJvZHVjdFJldmlld3M6ICdwcm9kdWN0cy8ke3Byb2R1Y3RDb2RlfS9yZXZpZXdzJyxcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoXG4gICAgICAgIHByb2R1Y3RTZWFyY2g6XG4gICAgICAgICAgJ3Byb2R1Y3RzL3NlYXJjaD9maWVsZHM9cHJvZHVjdHMoY29kZSxuYW1lLHN1bW1hcnkscHJpY2UoRlVMTCksaW1hZ2VzKERFRkFVTFQpLHN0b2NrKEZVTEwpLGF2ZXJhZ2VSYXRpbmcpLGZhY2V0cyxicmVhZGNydW1icyxwYWdpbmF0aW9uKERFRkFVTFQpLHNvcnRzKERFRkFVTFQpJnF1ZXJ5PSR7cXVlcnl9JyxcbiAgICAgICAgLy8gdHNsaW50OmVuYWJsZVxuICAgICAgICBwcm9kdWN0U3VnZ2VzdGlvbnM6ICdwcm9kdWN0cy9zdWdnZXN0aW9ucz90ZXJtPSR7dGVybX0mbWF4PSR7bWF4fScsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59O1xuIl19
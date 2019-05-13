/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export var defaultI18nConfig = {
    i18n: {
        fallbackLang: false,
        debug: false,
        chunks: {
            common: [
                'common',
                'spinner',
                'header',
                'searchBox',
                'sorting',
                'httpHandlers',
            ],
            cart: ['cartDetails', 'cartItems', 'orderCost', 'miniCart'],
            address: ['addressForm', 'addressBook', 'addressCard'],
            payment: ['paymentForm', 'paymentMethods', 'paymentCard'],
            myAccount: ['orderDetails', 'orderHistory'],
            storeFinder: ['storeFinder'],
            pwa: ['pwa'],
            checkout: [
                'checkout',
                'checkoutAddress',
                'checkoutOrderConfirmation',
                'checkoutReview',
                'checkoutShipping',
            ],
            product: [
                'productDetails',
                'productList',
                'productFacetNavigation',
                'productSummary',
                'productReview',
                'addToCart',
            ],
            user: [
                'forgottenPassword',
                'loginForm',
                'login',
                'register',
                'updateEmailForm',
                'updatePasswordForm',
                'updateProfileForm',
            ],
        },
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1pMThuLWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9pMThuL2NvbmZpZy9kZWZhdWx0LWkxOG4tY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsTUFBTSxLQUFPLGlCQUFpQixHQUFlO0lBQzNDLElBQUksRUFBRTtRQUNKLFlBQVksRUFBRSxLQUFLO1FBQ25CLEtBQUssRUFBRSxLQUFLO1FBQ1osTUFBTSxFQUFFO1lBQ04sTUFBTSxFQUFFO2dCQUNOLFFBQVE7Z0JBQ1IsU0FBUztnQkFDVCxRQUFRO2dCQUNSLFdBQVc7Z0JBQ1gsU0FBUztnQkFDVCxjQUFjO2FBQ2Y7WUFDRCxJQUFJLEVBQUUsQ0FBQyxhQUFhLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUM7WUFDM0QsT0FBTyxFQUFFLENBQUMsYUFBYSxFQUFFLGFBQWEsRUFBRSxhQUFhLENBQUM7WUFDdEQsT0FBTyxFQUFFLENBQUMsYUFBYSxFQUFFLGdCQUFnQixFQUFFLGFBQWEsQ0FBQztZQUN6RCxTQUFTLEVBQUUsQ0FBQyxjQUFjLEVBQUUsY0FBYyxDQUFDO1lBQzNDLFdBQVcsRUFBRSxDQUFDLGFBQWEsQ0FBQztZQUM1QixHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDWixRQUFRLEVBQUU7Z0JBQ1IsVUFBVTtnQkFDVixpQkFBaUI7Z0JBQ2pCLDJCQUEyQjtnQkFDM0IsZ0JBQWdCO2dCQUNoQixrQkFBa0I7YUFDbkI7WUFDRCxPQUFPLEVBQUU7Z0JBQ1AsZ0JBQWdCO2dCQUNoQixhQUFhO2dCQUNiLHdCQUF3QjtnQkFDeEIsZ0JBQWdCO2dCQUNoQixlQUFlO2dCQUNmLFdBQVc7YUFDWjtZQUNELElBQUksRUFBRTtnQkFDSixtQkFBbUI7Z0JBQ25CLFdBQVc7Z0JBQ1gsT0FBTztnQkFDUCxVQUFVO2dCQUNWLGlCQUFpQjtnQkFDakIsb0JBQW9CO2dCQUNwQixtQkFBbUI7YUFDcEI7U0FDRjtLQUNGO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJMThuQ29uZmlnIH0gZnJvbSAnLi9pMThuLWNvbmZpZyc7XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0STE4bkNvbmZpZzogSTE4bkNvbmZpZyA9IHtcbiAgaTE4bjoge1xuICAgIGZhbGxiYWNrTGFuZzogZmFsc2UsXG4gICAgZGVidWc6IGZhbHNlLFxuICAgIGNodW5rczoge1xuICAgICAgY29tbW9uOiBbXG4gICAgICAgICdjb21tb24nLFxuICAgICAgICAnc3Bpbm5lcicsXG4gICAgICAgICdoZWFkZXInLFxuICAgICAgICAnc2VhcmNoQm94JyxcbiAgICAgICAgJ3NvcnRpbmcnLFxuICAgICAgICAnaHR0cEhhbmRsZXJzJyxcbiAgICAgIF0sXG4gICAgICBjYXJ0OiBbJ2NhcnREZXRhaWxzJywgJ2NhcnRJdGVtcycsICdvcmRlckNvc3QnLCAnbWluaUNhcnQnXSxcbiAgICAgIGFkZHJlc3M6IFsnYWRkcmVzc0Zvcm0nLCAnYWRkcmVzc0Jvb2snLCAnYWRkcmVzc0NhcmQnXSxcbiAgICAgIHBheW1lbnQ6IFsncGF5bWVudEZvcm0nLCAncGF5bWVudE1ldGhvZHMnLCAncGF5bWVudENhcmQnXSxcbiAgICAgIG15QWNjb3VudDogWydvcmRlckRldGFpbHMnLCAnb3JkZXJIaXN0b3J5J10sXG4gICAgICBzdG9yZUZpbmRlcjogWydzdG9yZUZpbmRlciddLFxuICAgICAgcHdhOiBbJ3B3YSddLFxuICAgICAgY2hlY2tvdXQ6IFtcbiAgICAgICAgJ2NoZWNrb3V0JyxcbiAgICAgICAgJ2NoZWNrb3V0QWRkcmVzcycsXG4gICAgICAgICdjaGVja291dE9yZGVyQ29uZmlybWF0aW9uJyxcbiAgICAgICAgJ2NoZWNrb3V0UmV2aWV3JyxcbiAgICAgICAgJ2NoZWNrb3V0U2hpcHBpbmcnLFxuICAgICAgXSxcbiAgICAgIHByb2R1Y3Q6IFtcbiAgICAgICAgJ3Byb2R1Y3REZXRhaWxzJyxcbiAgICAgICAgJ3Byb2R1Y3RMaXN0JyxcbiAgICAgICAgJ3Byb2R1Y3RGYWNldE5hdmlnYXRpb24nLFxuICAgICAgICAncHJvZHVjdFN1bW1hcnknLFxuICAgICAgICAncHJvZHVjdFJldmlldycsXG4gICAgICAgICdhZGRUb0NhcnQnLFxuICAgICAgXSxcbiAgICAgIHVzZXI6IFtcbiAgICAgICAgJ2ZvcmdvdHRlblBhc3N3b3JkJyxcbiAgICAgICAgJ2xvZ2luRm9ybScsXG4gICAgICAgICdsb2dpbicsXG4gICAgICAgICdyZWdpc3RlcicsXG4gICAgICAgICd1cGRhdGVFbWFpbEZvcm0nLFxuICAgICAgICAndXBkYXRlUGFzc3dvcmRGb3JtJyxcbiAgICAgICAgJ3VwZGF0ZVByb2ZpbGVGb3JtJyxcbiAgICAgIF0sXG4gICAgfSxcbiAgfSxcbn07XG4iXX0=
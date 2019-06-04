/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export const defaultI18nConfig = {
    i18n: {
        fallbackLang: false,
        debug: false,
        chunks: {
            common: [
                'common',
                'spinner',
                'searchBox',
                'navigation',
                'sorting',
                'httpHandlers',
                'pageMetaResolver',
            ],
            cart: ['cartDetails', 'cartItems', 'orderCost', 'miniCart'],
            address: ['addressForm', 'addressBook', 'addressCard'],
            payment: ['paymentForm', 'paymentMethods', 'paymentCard'],
            myAccount: ['orderDetails', 'orderHistory', 'closeAccount'],
            storeFinder: ['storeFinder'],
            pwa: ['pwa'],
            checkout: [
                'checkout',
                'checkoutAddress',
                'checkoutOrderConfirmation',
                'checkoutReview',
                'checkoutShipping',
                'checkoutProgress',
            ],
            product: [
                'productDetails',
                'productList',
                'productFacetNavigation',
                'productSummary',
                'productReview',
                'addToCart',
                'CMSTabParagraphContainer',
            ],
            user: [
                'forgottenPassword',
                'loginForm',
                'login',
                'register',
                'updateEmailForm',
                'updatePasswordForm',
                'updateProfileForm',
                'consentManagementForm',
            ],
        },
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1pMThuLWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9pMThuL2NvbmZpZy9kZWZhdWx0LWkxOG4tY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsTUFBTSxPQUFPLGlCQUFpQixHQUFlO0lBQzNDLElBQUksRUFBRTtRQUNKLFlBQVksRUFBRSxLQUFLO1FBQ25CLEtBQUssRUFBRSxLQUFLO1FBQ1osTUFBTSxFQUFFO1lBQ04sTUFBTSxFQUFFO2dCQUNOLFFBQVE7Z0JBQ1IsU0FBUztnQkFDVCxXQUFXO2dCQUNYLFlBQVk7Z0JBQ1osU0FBUztnQkFDVCxjQUFjO2dCQUNkLGtCQUFrQjthQUNuQjtZQUNELElBQUksRUFBRSxDQUFDLGFBQWEsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQztZQUMzRCxPQUFPLEVBQUUsQ0FBQyxhQUFhLEVBQUUsYUFBYSxFQUFFLGFBQWEsQ0FBQztZQUN0RCxPQUFPLEVBQUUsQ0FBQyxhQUFhLEVBQUUsZ0JBQWdCLEVBQUUsYUFBYSxDQUFDO1lBQ3pELFNBQVMsRUFBRSxDQUFDLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxDQUFDO1lBQzNELFdBQVcsRUFBRSxDQUFDLGFBQWEsQ0FBQztZQUM1QixHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDWixRQUFRLEVBQUU7Z0JBQ1IsVUFBVTtnQkFDVixpQkFBaUI7Z0JBQ2pCLDJCQUEyQjtnQkFDM0IsZ0JBQWdCO2dCQUNoQixrQkFBa0I7Z0JBQ2xCLGtCQUFrQjthQUNuQjtZQUNELE9BQU8sRUFBRTtnQkFDUCxnQkFBZ0I7Z0JBQ2hCLGFBQWE7Z0JBQ2Isd0JBQXdCO2dCQUN4QixnQkFBZ0I7Z0JBQ2hCLGVBQWU7Z0JBQ2YsV0FBVztnQkFDWCwwQkFBMEI7YUFDM0I7WUFDRCxJQUFJLEVBQUU7Z0JBQ0osbUJBQW1CO2dCQUNuQixXQUFXO2dCQUNYLE9BQU87Z0JBQ1AsVUFBVTtnQkFDVixpQkFBaUI7Z0JBQ2pCLG9CQUFvQjtnQkFDcEIsbUJBQW1CO2dCQUNuQix1QkFBdUI7YUFDeEI7U0FDRjtLQUNGO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJMThuQ29uZmlnIH0gZnJvbSAnLi9pMThuLWNvbmZpZyc7XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0STE4bkNvbmZpZzogSTE4bkNvbmZpZyA9IHtcbiAgaTE4bjoge1xuICAgIGZhbGxiYWNrTGFuZzogZmFsc2UsXG4gICAgZGVidWc6IGZhbHNlLFxuICAgIGNodW5rczoge1xuICAgICAgY29tbW9uOiBbXG4gICAgICAgICdjb21tb24nLFxuICAgICAgICAnc3Bpbm5lcicsXG4gICAgICAgICdzZWFyY2hCb3gnLFxuICAgICAgICAnbmF2aWdhdGlvbicsXG4gICAgICAgICdzb3J0aW5nJyxcbiAgICAgICAgJ2h0dHBIYW5kbGVycycsXG4gICAgICAgICdwYWdlTWV0YVJlc29sdmVyJyxcbiAgICAgIF0sXG4gICAgICBjYXJ0OiBbJ2NhcnREZXRhaWxzJywgJ2NhcnRJdGVtcycsICdvcmRlckNvc3QnLCAnbWluaUNhcnQnXSxcbiAgICAgIGFkZHJlc3M6IFsnYWRkcmVzc0Zvcm0nLCAnYWRkcmVzc0Jvb2snLCAnYWRkcmVzc0NhcmQnXSxcbiAgICAgIHBheW1lbnQ6IFsncGF5bWVudEZvcm0nLCAncGF5bWVudE1ldGhvZHMnLCAncGF5bWVudENhcmQnXSxcbiAgICAgIG15QWNjb3VudDogWydvcmRlckRldGFpbHMnLCAnb3JkZXJIaXN0b3J5JywgJ2Nsb3NlQWNjb3VudCddLFxuICAgICAgc3RvcmVGaW5kZXI6IFsnc3RvcmVGaW5kZXInXSxcbiAgICAgIHB3YTogWydwd2EnXSxcbiAgICAgIGNoZWNrb3V0OiBbXG4gICAgICAgICdjaGVja291dCcsXG4gICAgICAgICdjaGVja291dEFkZHJlc3MnLFxuICAgICAgICAnY2hlY2tvdXRPcmRlckNvbmZpcm1hdGlvbicsXG4gICAgICAgICdjaGVja291dFJldmlldycsXG4gICAgICAgICdjaGVja291dFNoaXBwaW5nJyxcbiAgICAgICAgJ2NoZWNrb3V0UHJvZ3Jlc3MnLFxuICAgICAgXSxcbiAgICAgIHByb2R1Y3Q6IFtcbiAgICAgICAgJ3Byb2R1Y3REZXRhaWxzJyxcbiAgICAgICAgJ3Byb2R1Y3RMaXN0JyxcbiAgICAgICAgJ3Byb2R1Y3RGYWNldE5hdmlnYXRpb24nLFxuICAgICAgICAncHJvZHVjdFN1bW1hcnknLFxuICAgICAgICAncHJvZHVjdFJldmlldycsXG4gICAgICAgICdhZGRUb0NhcnQnLFxuICAgICAgICAnQ01TVGFiUGFyYWdyYXBoQ29udGFpbmVyJyxcbiAgICAgIF0sXG4gICAgICB1c2VyOiBbXG4gICAgICAgICdmb3Jnb3R0ZW5QYXNzd29yZCcsXG4gICAgICAgICdsb2dpbkZvcm0nLFxuICAgICAgICAnbG9naW4nLFxuICAgICAgICAncmVnaXN0ZXInLFxuICAgICAgICAndXBkYXRlRW1haWxGb3JtJyxcbiAgICAgICAgJ3VwZGF0ZVBhc3N3b3JkRm9ybScsXG4gICAgICAgICd1cGRhdGVQcm9maWxlRm9ybScsXG4gICAgICAgICdjb25zZW50TWFuYWdlbWVudEZvcm0nLFxuICAgICAgXSxcbiAgICB9LFxuICB9LFxufTtcbiJdfQ==
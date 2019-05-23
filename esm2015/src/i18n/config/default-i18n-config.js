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
                'header',
                'searchBox',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1pMThuLWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9pMThuL2NvbmZpZy9kZWZhdWx0LWkxOG4tY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsTUFBTSxPQUFPLGlCQUFpQixHQUFlO0lBQzNDLElBQUksRUFBRTtRQUNKLFlBQVksRUFBRSxLQUFLO1FBQ25CLEtBQUssRUFBRSxLQUFLO1FBQ1osTUFBTSxFQUFFO1lBQ04sTUFBTSxFQUFFO2dCQUNOLFFBQVE7Z0JBQ1IsU0FBUztnQkFDVCxRQUFRO2dCQUNSLFdBQVc7Z0JBQ1gsU0FBUztnQkFDVCxjQUFjO2dCQUNkLGtCQUFrQjthQUNuQjtZQUNELElBQUksRUFBRSxDQUFDLGFBQWEsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQztZQUMzRCxPQUFPLEVBQUUsQ0FBQyxhQUFhLEVBQUUsYUFBYSxFQUFFLGFBQWEsQ0FBQztZQUN0RCxPQUFPLEVBQUUsQ0FBQyxhQUFhLEVBQUUsZ0JBQWdCLEVBQUUsYUFBYSxDQUFDO1lBQ3pELFNBQVMsRUFBRSxDQUFDLGNBQWMsRUFBRSxjQUFjLEVBQUUsY0FBYyxDQUFDO1lBQzNELFdBQVcsRUFBRSxDQUFDLGFBQWEsQ0FBQztZQUM1QixHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDWixRQUFRLEVBQUU7Z0JBQ1IsVUFBVTtnQkFDVixpQkFBaUI7Z0JBQ2pCLDJCQUEyQjtnQkFDM0IsZ0JBQWdCO2dCQUNoQixrQkFBa0I7Z0JBQ2xCLGtCQUFrQjthQUNuQjtZQUNELE9BQU8sRUFBRTtnQkFDUCxnQkFBZ0I7Z0JBQ2hCLGFBQWE7Z0JBQ2Isd0JBQXdCO2dCQUN4QixnQkFBZ0I7Z0JBQ2hCLGVBQWU7Z0JBQ2YsV0FBVztnQkFDWCwwQkFBMEI7YUFDM0I7WUFDRCxJQUFJLEVBQUU7Z0JBQ0osbUJBQW1CO2dCQUNuQixXQUFXO2dCQUNYLE9BQU87Z0JBQ1AsVUFBVTtnQkFDVixpQkFBaUI7Z0JBQ2pCLG9CQUFvQjtnQkFDcEIsbUJBQW1CO2dCQUNuQix1QkFBdUI7YUFDeEI7U0FDRjtLQUNGO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJMThuQ29uZmlnIH0gZnJvbSAnLi9pMThuLWNvbmZpZyc7XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0STE4bkNvbmZpZzogSTE4bkNvbmZpZyA9IHtcbiAgaTE4bjoge1xuICAgIGZhbGxiYWNrTGFuZzogZmFsc2UsXG4gICAgZGVidWc6IGZhbHNlLFxuICAgIGNodW5rczoge1xuICAgICAgY29tbW9uOiBbXG4gICAgICAgICdjb21tb24nLFxuICAgICAgICAnc3Bpbm5lcicsXG4gICAgICAgICdoZWFkZXInLFxuICAgICAgICAnc2VhcmNoQm94JyxcbiAgICAgICAgJ3NvcnRpbmcnLFxuICAgICAgICAnaHR0cEhhbmRsZXJzJyxcbiAgICAgICAgJ3BhZ2VNZXRhUmVzb2x2ZXInLFxuICAgICAgXSxcbiAgICAgIGNhcnQ6IFsnY2FydERldGFpbHMnLCAnY2FydEl0ZW1zJywgJ29yZGVyQ29zdCcsICdtaW5pQ2FydCddLFxuICAgICAgYWRkcmVzczogWydhZGRyZXNzRm9ybScsICdhZGRyZXNzQm9vaycsICdhZGRyZXNzQ2FyZCddLFxuICAgICAgcGF5bWVudDogWydwYXltZW50Rm9ybScsICdwYXltZW50TWV0aG9kcycsICdwYXltZW50Q2FyZCddLFxuICAgICAgbXlBY2NvdW50OiBbJ29yZGVyRGV0YWlscycsICdvcmRlckhpc3RvcnknLCAnY2xvc2VBY2NvdW50J10sXG4gICAgICBzdG9yZUZpbmRlcjogWydzdG9yZUZpbmRlciddLFxuICAgICAgcHdhOiBbJ3B3YSddLFxuICAgICAgY2hlY2tvdXQ6IFtcbiAgICAgICAgJ2NoZWNrb3V0JyxcbiAgICAgICAgJ2NoZWNrb3V0QWRkcmVzcycsXG4gICAgICAgICdjaGVja291dE9yZGVyQ29uZmlybWF0aW9uJyxcbiAgICAgICAgJ2NoZWNrb3V0UmV2aWV3JyxcbiAgICAgICAgJ2NoZWNrb3V0U2hpcHBpbmcnLFxuICAgICAgICAnY2hlY2tvdXRQcm9ncmVzcycsXG4gICAgICBdLFxuICAgICAgcHJvZHVjdDogW1xuICAgICAgICAncHJvZHVjdERldGFpbHMnLFxuICAgICAgICAncHJvZHVjdExpc3QnLFxuICAgICAgICAncHJvZHVjdEZhY2V0TmF2aWdhdGlvbicsXG4gICAgICAgICdwcm9kdWN0U3VtbWFyeScsXG4gICAgICAgICdwcm9kdWN0UmV2aWV3JyxcbiAgICAgICAgJ2FkZFRvQ2FydCcsXG4gICAgICAgICdDTVNUYWJQYXJhZ3JhcGhDb250YWluZXInLFxuICAgICAgXSxcbiAgICAgIHVzZXI6IFtcbiAgICAgICAgJ2ZvcmdvdHRlblBhc3N3b3JkJyxcbiAgICAgICAgJ2xvZ2luRm9ybScsXG4gICAgICAgICdsb2dpbicsXG4gICAgICAgICdyZWdpc3RlcicsXG4gICAgICAgICd1cGRhdGVFbWFpbEZvcm0nLFxuICAgICAgICAndXBkYXRlUGFzc3dvcmRGb3JtJyxcbiAgICAgICAgJ3VwZGF0ZVByb2ZpbGVGb3JtJyxcbiAgICAgICAgJ2NvbnNlbnRNYW5hZ2VtZW50Rm9ybScsXG4gICAgICBdLFxuICAgIH0sXG4gIH0sXG59O1xuIl19
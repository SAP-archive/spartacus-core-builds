/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                'searchBox',
                'navigation',
                'sorting',
                'httpHandlers',
                'pageMetaResolver',
                'miniCart',
                'miniLogin',
            ],
            cart: ['cartDetails', 'cartItems', 'orderCost'],
            address: ['addressForm', 'addressBook', 'addressCard'],
            payment: ['paymentForm', 'paymentMethods', 'paymentCard'],
            myAccount: [
                'orderDetails',
                'orderHistory',
                'closeAccount',
                'updateEmailForm',
                'updatePasswordForm',
                'updateProfileForm',
                'consentManagementForm',
            ],
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
            user: ['forgottenPassword', 'loginForm', 'register'],
        },
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1pMThuLWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9pMThuL2NvbmZpZy9kZWZhdWx0LWkxOG4tY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsTUFBTSxLQUFPLGlCQUFpQixHQUFlO0lBQzNDLElBQUksRUFBRTtRQUNKLFlBQVksRUFBRSxLQUFLO1FBQ25CLEtBQUssRUFBRSxLQUFLO1FBQ1osTUFBTSxFQUFFO1lBQ04sTUFBTSxFQUFFO2dCQUNOLFFBQVE7Z0JBQ1IsU0FBUztnQkFDVCxXQUFXO2dCQUNYLFlBQVk7Z0JBQ1osU0FBUztnQkFDVCxjQUFjO2dCQUNkLGtCQUFrQjtnQkFDbEIsVUFBVTtnQkFDVixXQUFXO2FBQ1o7WUFDRCxJQUFJLEVBQUUsQ0FBQyxhQUFhLEVBQUUsV0FBVyxFQUFFLFdBQVcsQ0FBQztZQUMvQyxPQUFPLEVBQUUsQ0FBQyxhQUFhLEVBQUUsYUFBYSxFQUFFLGFBQWEsQ0FBQztZQUN0RCxPQUFPLEVBQUUsQ0FBQyxhQUFhLEVBQUUsZ0JBQWdCLEVBQUUsYUFBYSxDQUFDO1lBQ3pELFNBQVMsRUFBRTtnQkFDVCxjQUFjO2dCQUNkLGNBQWM7Z0JBQ2QsY0FBYztnQkFDZCxpQkFBaUI7Z0JBQ2pCLG9CQUFvQjtnQkFDcEIsbUJBQW1CO2dCQUNuQix1QkFBdUI7YUFDeEI7WUFDRCxXQUFXLEVBQUUsQ0FBQyxhQUFhLENBQUM7WUFDNUIsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ1osUUFBUSxFQUFFO2dCQUNSLFVBQVU7Z0JBQ1YsaUJBQWlCO2dCQUNqQiwyQkFBMkI7Z0JBQzNCLGdCQUFnQjtnQkFDaEIsa0JBQWtCO2dCQUNsQixrQkFBa0I7YUFDbkI7WUFDRCxPQUFPLEVBQUU7Z0JBQ1AsZ0JBQWdCO2dCQUNoQixhQUFhO2dCQUNiLHdCQUF3QjtnQkFDeEIsZ0JBQWdCO2dCQUNoQixlQUFlO2dCQUNmLFdBQVc7Z0JBQ1gsMEJBQTBCO2FBQzNCO1lBQ0QsSUFBSSxFQUFFLENBQUMsbUJBQW1CLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQztTQUNyRDtLQUNGO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJMThuQ29uZmlnIH0gZnJvbSAnLi9pMThuLWNvbmZpZyc7XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0STE4bkNvbmZpZzogSTE4bkNvbmZpZyA9IHtcbiAgaTE4bjoge1xuICAgIGZhbGxiYWNrTGFuZzogZmFsc2UsXG4gICAgZGVidWc6IGZhbHNlLFxuICAgIGNodW5rczoge1xuICAgICAgY29tbW9uOiBbXG4gICAgICAgICdjb21tb24nLFxuICAgICAgICAnc3Bpbm5lcicsXG4gICAgICAgICdzZWFyY2hCb3gnLFxuICAgICAgICAnbmF2aWdhdGlvbicsXG4gICAgICAgICdzb3J0aW5nJyxcbiAgICAgICAgJ2h0dHBIYW5kbGVycycsXG4gICAgICAgICdwYWdlTWV0YVJlc29sdmVyJyxcbiAgICAgICAgJ21pbmlDYXJ0JyxcbiAgICAgICAgJ21pbmlMb2dpbicsXG4gICAgICBdLFxuICAgICAgY2FydDogWydjYXJ0RGV0YWlscycsICdjYXJ0SXRlbXMnLCAnb3JkZXJDb3N0J10sXG4gICAgICBhZGRyZXNzOiBbJ2FkZHJlc3NGb3JtJywgJ2FkZHJlc3NCb29rJywgJ2FkZHJlc3NDYXJkJ10sXG4gICAgICBwYXltZW50OiBbJ3BheW1lbnRGb3JtJywgJ3BheW1lbnRNZXRob2RzJywgJ3BheW1lbnRDYXJkJ10sXG4gICAgICBteUFjY291bnQ6IFtcbiAgICAgICAgJ29yZGVyRGV0YWlscycsXG4gICAgICAgICdvcmRlckhpc3RvcnknLFxuICAgICAgICAnY2xvc2VBY2NvdW50JyxcbiAgICAgICAgJ3VwZGF0ZUVtYWlsRm9ybScsXG4gICAgICAgICd1cGRhdGVQYXNzd29yZEZvcm0nLFxuICAgICAgICAndXBkYXRlUHJvZmlsZUZvcm0nLFxuICAgICAgICAnY29uc2VudE1hbmFnZW1lbnRGb3JtJyxcbiAgICAgIF0sXG4gICAgICBzdG9yZUZpbmRlcjogWydzdG9yZUZpbmRlciddLFxuICAgICAgcHdhOiBbJ3B3YSddLFxuICAgICAgY2hlY2tvdXQ6IFtcbiAgICAgICAgJ2NoZWNrb3V0JyxcbiAgICAgICAgJ2NoZWNrb3V0QWRkcmVzcycsXG4gICAgICAgICdjaGVja291dE9yZGVyQ29uZmlybWF0aW9uJyxcbiAgICAgICAgJ2NoZWNrb3V0UmV2aWV3JyxcbiAgICAgICAgJ2NoZWNrb3V0U2hpcHBpbmcnLFxuICAgICAgICAnY2hlY2tvdXRQcm9ncmVzcycsXG4gICAgICBdLFxuICAgICAgcHJvZHVjdDogW1xuICAgICAgICAncHJvZHVjdERldGFpbHMnLFxuICAgICAgICAncHJvZHVjdExpc3QnLFxuICAgICAgICAncHJvZHVjdEZhY2V0TmF2aWdhdGlvbicsXG4gICAgICAgICdwcm9kdWN0U3VtbWFyeScsXG4gICAgICAgICdwcm9kdWN0UmV2aWV3JyxcbiAgICAgICAgJ2FkZFRvQ2FydCcsXG4gICAgICAgICdDTVNUYWJQYXJhZ3JhcGhDb250YWluZXInLFxuICAgICAgXSxcbiAgICAgIHVzZXI6IFsnZm9yZ290dGVuUGFzc3dvcmQnLCAnbG9naW5Gb3JtJywgJ3JlZ2lzdGVyJ10sXG4gICAgfSxcbiAgfSxcbn07XG4iXX0=
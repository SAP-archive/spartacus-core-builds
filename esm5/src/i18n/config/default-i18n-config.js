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
            myAccount: ['orderDetails', 'orderHistory', 'closeAccount'],
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
                'consentManagementForm',
            ],
        },
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1pMThuLWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9pMThuL2NvbmZpZy9kZWZhdWx0LWkxOG4tY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsTUFBTSxLQUFPLGlCQUFpQixHQUFlO0lBQzNDLElBQUksRUFBRTtRQUNKLFlBQVksRUFBRSxLQUFLO1FBQ25CLEtBQUssRUFBRSxLQUFLO1FBQ1osTUFBTSxFQUFFO1lBQ04sTUFBTSxFQUFFO2dCQUNOLFFBQVE7Z0JBQ1IsU0FBUztnQkFDVCxRQUFRO2dCQUNSLFdBQVc7Z0JBQ1gsU0FBUztnQkFDVCxjQUFjO2FBQ2Y7WUFDRCxJQUFJLEVBQUUsQ0FBQyxhQUFhLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUM7WUFDM0QsT0FBTyxFQUFFLENBQUMsYUFBYSxFQUFFLGFBQWEsRUFBRSxhQUFhLENBQUM7WUFDdEQsT0FBTyxFQUFFLENBQUMsYUFBYSxFQUFFLGdCQUFnQixFQUFFLGFBQWEsQ0FBQztZQUN6RCxTQUFTLEVBQUUsQ0FBQyxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsQ0FBQztZQUMzRCxXQUFXLEVBQUUsQ0FBQyxhQUFhLENBQUM7WUFDNUIsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ1osUUFBUSxFQUFFO2dCQUNSLFVBQVU7Z0JBQ1YsaUJBQWlCO2dCQUNqQiwyQkFBMkI7Z0JBQzNCLGdCQUFnQjtnQkFDaEIsa0JBQWtCO2FBQ25CO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLGdCQUFnQjtnQkFDaEIsYUFBYTtnQkFDYix3QkFBd0I7Z0JBQ3hCLGdCQUFnQjtnQkFDaEIsZUFBZTtnQkFDZixXQUFXO2FBQ1o7WUFDRCxJQUFJLEVBQUU7Z0JBQ0osbUJBQW1CO2dCQUNuQixXQUFXO2dCQUNYLE9BQU87Z0JBQ1AsVUFBVTtnQkFDVixpQkFBaUI7Z0JBQ2pCLG9CQUFvQjtnQkFDcEIsbUJBQW1CO2dCQUNuQix1QkFBdUI7YUFDeEI7U0FDRjtLQUNGO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJMThuQ29uZmlnIH0gZnJvbSAnLi9pMThuLWNvbmZpZyc7XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0STE4bkNvbmZpZzogSTE4bkNvbmZpZyA9IHtcbiAgaTE4bjoge1xuICAgIGZhbGxiYWNrTGFuZzogZmFsc2UsXG4gICAgZGVidWc6IGZhbHNlLFxuICAgIGNodW5rczoge1xuICAgICAgY29tbW9uOiBbXG4gICAgICAgICdjb21tb24nLFxuICAgICAgICAnc3Bpbm5lcicsXG4gICAgICAgICdoZWFkZXInLFxuICAgICAgICAnc2VhcmNoQm94JyxcbiAgICAgICAgJ3NvcnRpbmcnLFxuICAgICAgICAnaHR0cEhhbmRsZXJzJyxcbiAgICAgIF0sXG4gICAgICBjYXJ0OiBbJ2NhcnREZXRhaWxzJywgJ2NhcnRJdGVtcycsICdvcmRlckNvc3QnLCAnbWluaUNhcnQnXSxcbiAgICAgIGFkZHJlc3M6IFsnYWRkcmVzc0Zvcm0nLCAnYWRkcmVzc0Jvb2snLCAnYWRkcmVzc0NhcmQnXSxcbiAgICAgIHBheW1lbnQ6IFsncGF5bWVudEZvcm0nLCAncGF5bWVudE1ldGhvZHMnLCAncGF5bWVudENhcmQnXSxcbiAgICAgIG15QWNjb3VudDogWydvcmRlckRldGFpbHMnLCAnb3JkZXJIaXN0b3J5JywgJ2Nsb3NlQWNjb3VudCddLFxuICAgICAgc3RvcmVGaW5kZXI6IFsnc3RvcmVGaW5kZXInXSxcbiAgICAgIHB3YTogWydwd2EnXSxcbiAgICAgIGNoZWNrb3V0OiBbXG4gICAgICAgICdjaGVja291dCcsXG4gICAgICAgICdjaGVja291dEFkZHJlc3MnLFxuICAgICAgICAnY2hlY2tvdXRPcmRlckNvbmZpcm1hdGlvbicsXG4gICAgICAgICdjaGVja291dFJldmlldycsXG4gICAgICAgICdjaGVja291dFNoaXBwaW5nJyxcbiAgICAgIF0sXG4gICAgICBwcm9kdWN0OiBbXG4gICAgICAgICdwcm9kdWN0RGV0YWlscycsXG4gICAgICAgICdwcm9kdWN0TGlzdCcsXG4gICAgICAgICdwcm9kdWN0RmFjZXROYXZpZ2F0aW9uJyxcbiAgICAgICAgJ3Byb2R1Y3RTdW1tYXJ5JyxcbiAgICAgICAgJ3Byb2R1Y3RSZXZpZXcnLFxuICAgICAgICAnYWRkVG9DYXJ0JyxcbiAgICAgIF0sXG4gICAgICB1c2VyOiBbXG4gICAgICAgICdmb3Jnb3R0ZW5QYXNzd29yZCcsXG4gICAgICAgICdsb2dpbkZvcm0nLFxuICAgICAgICAnbG9naW4nLFxuICAgICAgICAncmVnaXN0ZXInLFxuICAgICAgICAndXBkYXRlRW1haWxGb3JtJyxcbiAgICAgICAgJ3VwZGF0ZVBhc3N3b3JkRm9ybScsXG4gICAgICAgICd1cGRhdGVQcm9maWxlRm9ybScsXG4gICAgICAgICdjb25zZW50TWFuYWdlbWVudEZvcm0nLFxuICAgICAgXSxcbiAgICB9LFxuICB9LFxufTtcbiJdfQ==
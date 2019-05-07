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
            common: ['common', 'spinner', 'header', 'searchBox'],
            cart: ['cartDetails', 'cartItems', 'orderCost'],
            address: ['addressForm', 'addressBook', 'addressCard'],
            payment: ['paymentForm', 'paymentMethods'],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1pMThuLWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9pMThuL2NvbmZpZy9kZWZhdWx0LWkxOG4tY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsTUFBTSxPQUFPLGlCQUFpQixHQUFlO0lBQzNDLElBQUksRUFBRTtRQUNKLFlBQVksRUFBRSxLQUFLO1FBQ25CLEtBQUssRUFBRSxLQUFLO1FBQ1osTUFBTSxFQUFFO1lBQ04sTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsV0FBVyxDQUFDO1lBQ3BELElBQUksRUFBRSxDQUFDLGFBQWEsRUFBRSxXQUFXLEVBQUUsV0FBVyxDQUFDO1lBQy9DLE9BQU8sRUFBRSxDQUFDLGFBQWEsRUFBRSxhQUFhLEVBQUUsYUFBYSxDQUFDO1lBQ3RELE9BQU8sRUFBRSxDQUFDLGFBQWEsRUFBRSxnQkFBZ0IsQ0FBQztZQUMxQyxTQUFTLEVBQUUsQ0FBQyxjQUFjLEVBQUUsY0FBYyxDQUFDO1lBQzNDLFdBQVcsRUFBRSxDQUFDLGFBQWEsQ0FBQztZQUM1QixHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDWixRQUFRLEVBQUU7Z0JBQ1IsVUFBVTtnQkFDVixpQkFBaUI7Z0JBQ2pCLDJCQUEyQjtnQkFDM0IsZ0JBQWdCO2dCQUNoQixrQkFBa0I7YUFDbkI7WUFDRCxPQUFPLEVBQUU7Z0JBQ1AsZ0JBQWdCO2dCQUNoQixhQUFhO2dCQUNiLHdCQUF3QjtnQkFDeEIsZ0JBQWdCO2dCQUNoQixlQUFlO2dCQUNmLFdBQVc7YUFDWjtZQUNELElBQUksRUFBRTtnQkFDSixtQkFBbUI7Z0JBQ25CLFdBQVc7Z0JBQ1gsT0FBTztnQkFDUCxVQUFVO2dCQUNWLGlCQUFpQjtnQkFDakIsb0JBQW9CO2dCQUNwQixtQkFBbUI7YUFDcEI7U0FDRjtLQUNGO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJMThuQ29uZmlnIH0gZnJvbSAnLi9pMThuLWNvbmZpZyc7XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0STE4bkNvbmZpZzogSTE4bkNvbmZpZyA9IHtcbiAgaTE4bjoge1xuICAgIGZhbGxiYWNrTGFuZzogZmFsc2UsXG4gICAgZGVidWc6IGZhbHNlLFxuICAgIGNodW5rczoge1xuICAgICAgY29tbW9uOiBbJ2NvbW1vbicsICdzcGlubmVyJywgJ2hlYWRlcicsICdzZWFyY2hCb3gnXSxcbiAgICAgIGNhcnQ6IFsnY2FydERldGFpbHMnLCAnY2FydEl0ZW1zJywgJ29yZGVyQ29zdCddLFxuICAgICAgYWRkcmVzczogWydhZGRyZXNzRm9ybScsICdhZGRyZXNzQm9vaycsICdhZGRyZXNzQ2FyZCddLFxuICAgICAgcGF5bWVudDogWydwYXltZW50Rm9ybScsICdwYXltZW50TWV0aG9kcyddLFxuICAgICAgbXlBY2NvdW50OiBbJ29yZGVyRGV0YWlscycsICdvcmRlckhpc3RvcnknXSxcbiAgICAgIHN0b3JlRmluZGVyOiBbJ3N0b3JlRmluZGVyJ10sXG4gICAgICBwd2E6IFsncHdhJ10sXG4gICAgICBjaGVja291dDogW1xuICAgICAgICAnY2hlY2tvdXQnLFxuICAgICAgICAnY2hlY2tvdXRBZGRyZXNzJyxcbiAgICAgICAgJ2NoZWNrb3V0T3JkZXJDb25maXJtYXRpb24nLFxuICAgICAgICAnY2hlY2tvdXRSZXZpZXcnLFxuICAgICAgICAnY2hlY2tvdXRTaGlwcGluZycsXG4gICAgICBdLFxuICAgICAgcHJvZHVjdDogW1xuICAgICAgICAncHJvZHVjdERldGFpbHMnLFxuICAgICAgICAncHJvZHVjdExpc3QnLFxuICAgICAgICAncHJvZHVjdEZhY2V0TmF2aWdhdGlvbicsXG4gICAgICAgICdwcm9kdWN0U3VtbWFyeScsXG4gICAgICAgICdwcm9kdWN0UmV2aWV3JyxcbiAgICAgICAgJ2FkZFRvQ2FydCcsXG4gICAgICBdLFxuICAgICAgdXNlcjogW1xuICAgICAgICAnZm9yZ290dGVuUGFzc3dvcmQnLFxuICAgICAgICAnbG9naW5Gb3JtJyxcbiAgICAgICAgJ2xvZ2luJyxcbiAgICAgICAgJ3JlZ2lzdGVyJyxcbiAgICAgICAgJ3VwZGF0ZUVtYWlsRm9ybScsXG4gICAgICAgICd1cGRhdGVQYXNzd29yZEZvcm0nLFxuICAgICAgICAndXBkYXRlUHJvZmlsZUZvcm0nLFxuICAgICAgXSxcbiAgICB9LFxuICB9LFxufTtcbiJdfQ==
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
                'checkoutProgress',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1pMThuLWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9pMThuL2NvbmZpZy9kZWZhdWx0LWkxOG4tY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsTUFBTSxLQUFPLGlCQUFpQixHQUFlO0lBQzNDLElBQUksRUFBRTtRQUNKLFlBQVksRUFBRSxLQUFLO1FBQ25CLEtBQUssRUFBRSxLQUFLO1FBQ1osTUFBTSxFQUFFO1lBQ04sTUFBTSxFQUFFO2dCQUNOLFFBQVE7Z0JBQ1IsU0FBUztnQkFDVCxRQUFRO2dCQUNSLFdBQVc7Z0JBQ1gsU0FBUztnQkFDVCxjQUFjO2FBQ2Y7WUFDRCxJQUFJLEVBQUUsQ0FBQyxhQUFhLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUM7WUFDM0QsT0FBTyxFQUFFLENBQUMsYUFBYSxFQUFFLGFBQWEsRUFBRSxhQUFhLENBQUM7WUFDdEQsT0FBTyxFQUFFLENBQUMsYUFBYSxFQUFFLGdCQUFnQixFQUFFLGFBQWEsQ0FBQztZQUN6RCxTQUFTLEVBQUUsQ0FBQyxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsQ0FBQztZQUMzRCxXQUFXLEVBQUUsQ0FBQyxhQUFhLENBQUM7WUFDNUIsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ1osUUFBUSxFQUFFO2dCQUNSLFVBQVU7Z0JBQ1YsaUJBQWlCO2dCQUNqQiwyQkFBMkI7Z0JBQzNCLGdCQUFnQjtnQkFDaEIsa0JBQWtCO2dCQUNsQixrQkFBa0I7YUFDbkI7WUFDRCxPQUFPLEVBQUU7Z0JBQ1AsZ0JBQWdCO2dCQUNoQixhQUFhO2dCQUNiLHdCQUF3QjtnQkFDeEIsZ0JBQWdCO2dCQUNoQixlQUFlO2dCQUNmLFdBQVc7YUFDWjtZQUNELElBQUksRUFBRTtnQkFDSixtQkFBbUI7Z0JBQ25CLFdBQVc7Z0JBQ1gsT0FBTztnQkFDUCxVQUFVO2dCQUNWLGlCQUFpQjtnQkFDakIsb0JBQW9CO2dCQUNwQixtQkFBbUI7Z0JBQ25CLHVCQUF1QjthQUN4QjtTQUNGO0tBQ0Y7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEkxOG5Db25maWcgfSBmcm9tICcuL2kxOG4tY29uZmlnJztcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRJMThuQ29uZmlnOiBJMThuQ29uZmlnID0ge1xuICBpMThuOiB7XG4gICAgZmFsbGJhY2tMYW5nOiBmYWxzZSxcbiAgICBkZWJ1ZzogZmFsc2UsXG4gICAgY2h1bmtzOiB7XG4gICAgICBjb21tb246IFtcbiAgICAgICAgJ2NvbW1vbicsXG4gICAgICAgICdzcGlubmVyJyxcbiAgICAgICAgJ2hlYWRlcicsXG4gICAgICAgICdzZWFyY2hCb3gnLFxuICAgICAgICAnc29ydGluZycsXG4gICAgICAgICdodHRwSGFuZGxlcnMnLFxuICAgICAgXSxcbiAgICAgIGNhcnQ6IFsnY2FydERldGFpbHMnLCAnY2FydEl0ZW1zJywgJ29yZGVyQ29zdCcsICdtaW5pQ2FydCddLFxuICAgICAgYWRkcmVzczogWydhZGRyZXNzRm9ybScsICdhZGRyZXNzQm9vaycsICdhZGRyZXNzQ2FyZCddLFxuICAgICAgcGF5bWVudDogWydwYXltZW50Rm9ybScsICdwYXltZW50TWV0aG9kcycsICdwYXltZW50Q2FyZCddLFxuICAgICAgbXlBY2NvdW50OiBbJ29yZGVyRGV0YWlscycsICdvcmRlckhpc3RvcnknLCAnY2xvc2VBY2NvdW50J10sXG4gICAgICBzdG9yZUZpbmRlcjogWydzdG9yZUZpbmRlciddLFxuICAgICAgcHdhOiBbJ3B3YSddLFxuICAgICAgY2hlY2tvdXQ6IFtcbiAgICAgICAgJ2NoZWNrb3V0JyxcbiAgICAgICAgJ2NoZWNrb3V0QWRkcmVzcycsXG4gICAgICAgICdjaGVja291dE9yZGVyQ29uZmlybWF0aW9uJyxcbiAgICAgICAgJ2NoZWNrb3V0UmV2aWV3JyxcbiAgICAgICAgJ2NoZWNrb3V0U2hpcHBpbmcnLFxuICAgICAgICAnY2hlY2tvdXRQcm9ncmVzcycsXG4gICAgICBdLFxuICAgICAgcHJvZHVjdDogW1xuICAgICAgICAncHJvZHVjdERldGFpbHMnLFxuICAgICAgICAncHJvZHVjdExpc3QnLFxuICAgICAgICAncHJvZHVjdEZhY2V0TmF2aWdhdGlvbicsXG4gICAgICAgICdwcm9kdWN0U3VtbWFyeScsXG4gICAgICAgICdwcm9kdWN0UmV2aWV3JyxcbiAgICAgICAgJ2FkZFRvQ2FydCcsXG4gICAgICBdLFxuICAgICAgdXNlcjogW1xuICAgICAgICAnZm9yZ290dGVuUGFzc3dvcmQnLFxuICAgICAgICAnbG9naW5Gb3JtJyxcbiAgICAgICAgJ2xvZ2luJyxcbiAgICAgICAgJ3JlZ2lzdGVyJyxcbiAgICAgICAgJ3VwZGF0ZUVtYWlsRm9ybScsXG4gICAgICAgICd1cGRhdGVQYXNzd29yZEZvcm0nLFxuICAgICAgICAndXBkYXRlUHJvZmlsZUZvcm0nLFxuICAgICAgICAnY29uc2VudE1hbmFnZW1lbnRGb3JtJyxcbiAgICAgIF0sXG4gICAgfSxcbiAgfSxcbn07XG4iXX0=
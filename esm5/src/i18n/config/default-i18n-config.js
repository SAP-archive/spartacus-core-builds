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
            cart: ['cartDetails', 'cartItems', 'orderCost'],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1pMThuLWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9pMThuL2NvbmZpZy9kZWZhdWx0LWkxOG4tY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsTUFBTSxLQUFPLGlCQUFpQixHQUFlO0lBQzNDLElBQUksRUFBRTtRQUNKLFlBQVksRUFBRSxLQUFLO1FBQ25CLEtBQUssRUFBRSxLQUFLO1FBQ1osTUFBTSxFQUFFO1lBQ04sTUFBTSxFQUFFO2dCQUNOLFFBQVE7Z0JBQ1IsU0FBUztnQkFDVCxRQUFRO2dCQUNSLFdBQVc7Z0JBQ1gsU0FBUztnQkFDVCxjQUFjO2FBQ2Y7WUFDRCxJQUFJLEVBQUUsQ0FBQyxhQUFhLEVBQUUsV0FBVyxFQUFFLFdBQVcsQ0FBQztZQUMvQyxPQUFPLEVBQUUsQ0FBQyxhQUFhLEVBQUUsYUFBYSxFQUFFLGFBQWEsQ0FBQztZQUN0RCxPQUFPLEVBQUUsQ0FBQyxhQUFhLEVBQUUsZ0JBQWdCLEVBQUUsYUFBYSxDQUFDO1lBQ3pELFNBQVMsRUFBRSxDQUFDLGNBQWMsRUFBRSxjQUFjLENBQUM7WUFDM0MsV0FBVyxFQUFFLENBQUMsYUFBYSxDQUFDO1lBQzVCLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUNaLFFBQVEsRUFBRTtnQkFDUixVQUFVO2dCQUNWLGlCQUFpQjtnQkFDakIsMkJBQTJCO2dCQUMzQixnQkFBZ0I7Z0JBQ2hCLGtCQUFrQjthQUNuQjtZQUNELE9BQU8sRUFBRTtnQkFDUCxnQkFBZ0I7Z0JBQ2hCLGFBQWE7Z0JBQ2Isd0JBQXdCO2dCQUN4QixnQkFBZ0I7Z0JBQ2hCLGVBQWU7Z0JBQ2YsV0FBVzthQUNaO1lBQ0QsSUFBSSxFQUFFO2dCQUNKLG1CQUFtQjtnQkFDbkIsV0FBVztnQkFDWCxPQUFPO2dCQUNQLFVBQVU7Z0JBQ1YsaUJBQWlCO2dCQUNqQixvQkFBb0I7Z0JBQ3BCLG1CQUFtQjthQUNwQjtTQUNGO0tBQ0Y7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEkxOG5Db25maWcgfSBmcm9tICcuL2kxOG4tY29uZmlnJztcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRJMThuQ29uZmlnOiBJMThuQ29uZmlnID0ge1xuICBpMThuOiB7XG4gICAgZmFsbGJhY2tMYW5nOiBmYWxzZSxcbiAgICBkZWJ1ZzogZmFsc2UsXG4gICAgY2h1bmtzOiB7XG4gICAgICBjb21tb246IFtcbiAgICAgICAgJ2NvbW1vbicsXG4gICAgICAgICdzcGlubmVyJyxcbiAgICAgICAgJ2hlYWRlcicsXG4gICAgICAgICdzZWFyY2hCb3gnLFxuICAgICAgICAnc29ydGluZycsXG4gICAgICAgICdodHRwSGFuZGxlcnMnLFxuICAgICAgXSxcbiAgICAgIGNhcnQ6IFsnY2FydERldGFpbHMnLCAnY2FydEl0ZW1zJywgJ29yZGVyQ29zdCddLFxuICAgICAgYWRkcmVzczogWydhZGRyZXNzRm9ybScsICdhZGRyZXNzQm9vaycsICdhZGRyZXNzQ2FyZCddLFxuICAgICAgcGF5bWVudDogWydwYXltZW50Rm9ybScsICdwYXltZW50TWV0aG9kcycsICdwYXltZW50Q2FyZCddLFxuICAgICAgbXlBY2NvdW50OiBbJ29yZGVyRGV0YWlscycsICdvcmRlckhpc3RvcnknXSxcbiAgICAgIHN0b3JlRmluZGVyOiBbJ3N0b3JlRmluZGVyJ10sXG4gICAgICBwd2E6IFsncHdhJ10sXG4gICAgICBjaGVja291dDogW1xuICAgICAgICAnY2hlY2tvdXQnLFxuICAgICAgICAnY2hlY2tvdXRBZGRyZXNzJyxcbiAgICAgICAgJ2NoZWNrb3V0T3JkZXJDb25maXJtYXRpb24nLFxuICAgICAgICAnY2hlY2tvdXRSZXZpZXcnLFxuICAgICAgICAnY2hlY2tvdXRTaGlwcGluZycsXG4gICAgICBdLFxuICAgICAgcHJvZHVjdDogW1xuICAgICAgICAncHJvZHVjdERldGFpbHMnLFxuICAgICAgICAncHJvZHVjdExpc3QnLFxuICAgICAgICAncHJvZHVjdEZhY2V0TmF2aWdhdGlvbicsXG4gICAgICAgICdwcm9kdWN0U3VtbWFyeScsXG4gICAgICAgICdwcm9kdWN0UmV2aWV3JyxcbiAgICAgICAgJ2FkZFRvQ2FydCcsXG4gICAgICBdLFxuICAgICAgdXNlcjogW1xuICAgICAgICAnZm9yZ290dGVuUGFzc3dvcmQnLFxuICAgICAgICAnbG9naW5Gb3JtJyxcbiAgICAgICAgJ2xvZ2luJyxcbiAgICAgICAgJ3JlZ2lzdGVyJyxcbiAgICAgICAgJ3VwZGF0ZUVtYWlsRm9ybScsXG4gICAgICAgICd1cGRhdGVQYXNzd29yZEZvcm0nLFxuICAgICAgICAndXBkYXRlUHJvZmlsZUZvcm0nLFxuICAgICAgXSxcbiAgICB9LFxuICB9LFxufTtcbiJdfQ==
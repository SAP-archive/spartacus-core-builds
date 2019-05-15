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
            ],
        },
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1pMThuLWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9pMThuL2NvbmZpZy9kZWZhdWx0LWkxOG4tY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsTUFBTSxLQUFPLGlCQUFpQixHQUFlO0lBQzNDLElBQUksRUFBRTtRQUNKLFlBQVksRUFBRSxLQUFLO1FBQ25CLEtBQUssRUFBRSxLQUFLO1FBQ1osTUFBTSxFQUFFO1lBQ04sTUFBTSxFQUFFO2dCQUNOLFFBQVE7Z0JBQ1IsU0FBUztnQkFDVCxRQUFRO2dCQUNSLFdBQVc7Z0JBQ1gsU0FBUztnQkFDVCxjQUFjO2FBQ2Y7WUFDRCxJQUFJLEVBQUUsQ0FBQyxhQUFhLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUM7WUFDM0QsT0FBTyxFQUFFLENBQUMsYUFBYSxFQUFFLGFBQWEsRUFBRSxhQUFhLENBQUM7WUFDdEQsT0FBTyxFQUFFLENBQUMsYUFBYSxFQUFFLGdCQUFnQixFQUFFLGFBQWEsQ0FBQztZQUN6RCxTQUFTLEVBQUUsQ0FBQyxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsQ0FBQztZQUMzRCxXQUFXLEVBQUUsQ0FBQyxhQUFhLENBQUM7WUFDNUIsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ1osUUFBUSxFQUFFO2dCQUNSLFVBQVU7Z0JBQ1YsaUJBQWlCO2dCQUNqQiwyQkFBMkI7Z0JBQzNCLGdCQUFnQjtnQkFDaEIsa0JBQWtCO2FBQ25CO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLGdCQUFnQjtnQkFDaEIsYUFBYTtnQkFDYix3QkFBd0I7Z0JBQ3hCLGdCQUFnQjtnQkFDaEIsZUFBZTtnQkFDZixXQUFXO2FBQ1o7WUFDRCxJQUFJLEVBQUU7Z0JBQ0osbUJBQW1CO2dCQUNuQixXQUFXO2dCQUNYLE9BQU87Z0JBQ1AsVUFBVTtnQkFDVixpQkFBaUI7Z0JBQ2pCLG9CQUFvQjtnQkFDcEIsbUJBQW1CO2FBQ3BCO1NBQ0Y7S0FDRjtDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSTE4bkNvbmZpZyB9IGZyb20gJy4vaTE4bi1jb25maWcnO1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdEkxOG5Db25maWc6IEkxOG5Db25maWcgPSB7XG4gIGkxOG46IHtcbiAgICBmYWxsYmFja0xhbmc6IGZhbHNlLFxuICAgIGRlYnVnOiBmYWxzZSxcbiAgICBjaHVua3M6IHtcbiAgICAgIGNvbW1vbjogW1xuICAgICAgICAnY29tbW9uJyxcbiAgICAgICAgJ3NwaW5uZXInLFxuICAgICAgICAnaGVhZGVyJyxcbiAgICAgICAgJ3NlYXJjaEJveCcsXG4gICAgICAgICdzb3J0aW5nJyxcbiAgICAgICAgJ2h0dHBIYW5kbGVycycsXG4gICAgICBdLFxuICAgICAgY2FydDogWydjYXJ0RGV0YWlscycsICdjYXJ0SXRlbXMnLCAnb3JkZXJDb3N0JywgJ21pbmlDYXJ0J10sXG4gICAgICBhZGRyZXNzOiBbJ2FkZHJlc3NGb3JtJywgJ2FkZHJlc3NCb29rJywgJ2FkZHJlc3NDYXJkJ10sXG4gICAgICBwYXltZW50OiBbJ3BheW1lbnRGb3JtJywgJ3BheW1lbnRNZXRob2RzJywgJ3BheW1lbnRDYXJkJ10sXG4gICAgICBteUFjY291bnQ6IFsnb3JkZXJEZXRhaWxzJywgJ29yZGVySGlzdG9yeScsICdjbG9zZUFjY291bnQnXSxcbiAgICAgIHN0b3JlRmluZGVyOiBbJ3N0b3JlRmluZGVyJ10sXG4gICAgICBwd2E6IFsncHdhJ10sXG4gICAgICBjaGVja291dDogW1xuICAgICAgICAnY2hlY2tvdXQnLFxuICAgICAgICAnY2hlY2tvdXRBZGRyZXNzJyxcbiAgICAgICAgJ2NoZWNrb3V0T3JkZXJDb25maXJtYXRpb24nLFxuICAgICAgICAnY2hlY2tvdXRSZXZpZXcnLFxuICAgICAgICAnY2hlY2tvdXRTaGlwcGluZycsXG4gICAgICBdLFxuICAgICAgcHJvZHVjdDogW1xuICAgICAgICAncHJvZHVjdERldGFpbHMnLFxuICAgICAgICAncHJvZHVjdExpc3QnLFxuICAgICAgICAncHJvZHVjdEZhY2V0TmF2aWdhdGlvbicsXG4gICAgICAgICdwcm9kdWN0U3VtbWFyeScsXG4gICAgICAgICdwcm9kdWN0UmV2aWV3JyxcbiAgICAgICAgJ2FkZFRvQ2FydCcsXG4gICAgICBdLFxuICAgICAgdXNlcjogW1xuICAgICAgICAnZm9yZ290dGVuUGFzc3dvcmQnLFxuICAgICAgICAnbG9naW5Gb3JtJyxcbiAgICAgICAgJ2xvZ2luJyxcbiAgICAgICAgJ3JlZ2lzdGVyJyxcbiAgICAgICAgJ3VwZGF0ZUVtYWlsRm9ybScsXG4gICAgICAgICd1cGRhdGVQYXNzd29yZEZvcm0nLFxuICAgICAgICAndXBkYXRlUHJvZmlsZUZvcm0nLFxuICAgICAgXSxcbiAgICB9LFxuICB9LFxufTtcbiJdfQ==
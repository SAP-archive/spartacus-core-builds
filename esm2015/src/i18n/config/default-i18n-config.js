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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1pMThuLWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9pMThuL2NvbmZpZy9kZWZhdWx0LWkxOG4tY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsTUFBTSxPQUFPLGlCQUFpQixHQUFlO0lBQzNDLElBQUksRUFBRTtRQUNKLFlBQVksRUFBRSxLQUFLO1FBQ25CLEtBQUssRUFBRSxLQUFLO1FBQ1osTUFBTSxFQUFFO1lBQ04sTUFBTSxFQUFFO2dCQUNOLFFBQVE7Z0JBQ1IsU0FBUztnQkFDVCxRQUFRO2dCQUNSLFdBQVc7Z0JBQ1gsU0FBUztnQkFDVCxjQUFjO2FBQ2Y7WUFDRCxJQUFJLEVBQUUsQ0FBQyxhQUFhLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUM7WUFDM0QsT0FBTyxFQUFFLENBQUMsYUFBYSxFQUFFLGFBQWEsRUFBRSxhQUFhLENBQUM7WUFDdEQsT0FBTyxFQUFFLENBQUMsYUFBYSxFQUFFLGdCQUFnQixFQUFFLGFBQWEsQ0FBQztZQUN6RCxTQUFTLEVBQUUsQ0FBQyxjQUFjLEVBQUUsY0FBYyxFQUFFLGNBQWMsQ0FBQztZQUMzRCxXQUFXLEVBQUUsQ0FBQyxhQUFhLENBQUM7WUFDNUIsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ1osUUFBUSxFQUFFO2dCQUNSLFVBQVU7Z0JBQ1YsaUJBQWlCO2dCQUNqQiwyQkFBMkI7Z0JBQzNCLGdCQUFnQjtnQkFDaEIsa0JBQWtCO2dCQUNsQixrQkFBa0I7YUFDbkI7WUFDRCxPQUFPLEVBQUU7Z0JBQ1AsZ0JBQWdCO2dCQUNoQixhQUFhO2dCQUNiLHdCQUF3QjtnQkFDeEIsZ0JBQWdCO2dCQUNoQixlQUFlO2dCQUNmLFdBQVc7Z0JBQ1gsMEJBQTBCO2FBQzNCO1lBQ0QsSUFBSSxFQUFFO2dCQUNKLG1CQUFtQjtnQkFDbkIsV0FBVztnQkFDWCxPQUFPO2dCQUNQLFVBQVU7Z0JBQ1YsaUJBQWlCO2dCQUNqQixvQkFBb0I7Z0JBQ3BCLG1CQUFtQjtnQkFDbkIsdUJBQXVCO2FBQ3hCO1NBQ0Y7S0FDRjtDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSTE4bkNvbmZpZyB9IGZyb20gJy4vaTE4bi1jb25maWcnO1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdEkxOG5Db25maWc6IEkxOG5Db25maWcgPSB7XG4gIGkxOG46IHtcbiAgICBmYWxsYmFja0xhbmc6IGZhbHNlLFxuICAgIGRlYnVnOiBmYWxzZSxcbiAgICBjaHVua3M6IHtcbiAgICAgIGNvbW1vbjogW1xuICAgICAgICAnY29tbW9uJyxcbiAgICAgICAgJ3NwaW5uZXInLFxuICAgICAgICAnaGVhZGVyJyxcbiAgICAgICAgJ3NlYXJjaEJveCcsXG4gICAgICAgICdzb3J0aW5nJyxcbiAgICAgICAgJ2h0dHBIYW5kbGVycycsXG4gICAgICBdLFxuICAgICAgY2FydDogWydjYXJ0RGV0YWlscycsICdjYXJ0SXRlbXMnLCAnb3JkZXJDb3N0JywgJ21pbmlDYXJ0J10sXG4gICAgICBhZGRyZXNzOiBbJ2FkZHJlc3NGb3JtJywgJ2FkZHJlc3NCb29rJywgJ2FkZHJlc3NDYXJkJ10sXG4gICAgICBwYXltZW50OiBbJ3BheW1lbnRGb3JtJywgJ3BheW1lbnRNZXRob2RzJywgJ3BheW1lbnRDYXJkJ10sXG4gICAgICBteUFjY291bnQ6IFsnb3JkZXJEZXRhaWxzJywgJ29yZGVySGlzdG9yeScsICdjbG9zZUFjY291bnQnXSxcbiAgICAgIHN0b3JlRmluZGVyOiBbJ3N0b3JlRmluZGVyJ10sXG4gICAgICBwd2E6IFsncHdhJ10sXG4gICAgICBjaGVja291dDogW1xuICAgICAgICAnY2hlY2tvdXQnLFxuICAgICAgICAnY2hlY2tvdXRBZGRyZXNzJyxcbiAgICAgICAgJ2NoZWNrb3V0T3JkZXJDb25maXJtYXRpb24nLFxuICAgICAgICAnY2hlY2tvdXRSZXZpZXcnLFxuICAgICAgICAnY2hlY2tvdXRTaGlwcGluZycsXG4gICAgICAgICdjaGVja291dFByb2dyZXNzJyxcbiAgICAgIF0sXG4gICAgICBwcm9kdWN0OiBbXG4gICAgICAgICdwcm9kdWN0RGV0YWlscycsXG4gICAgICAgICdwcm9kdWN0TGlzdCcsXG4gICAgICAgICdwcm9kdWN0RmFjZXROYXZpZ2F0aW9uJyxcbiAgICAgICAgJ3Byb2R1Y3RTdW1tYXJ5JyxcbiAgICAgICAgJ3Byb2R1Y3RSZXZpZXcnLFxuICAgICAgICAnYWRkVG9DYXJ0JyxcbiAgICAgICAgJ0NNU1RhYlBhcmFncmFwaENvbnRhaW5lcicsXG4gICAgICBdLFxuICAgICAgdXNlcjogW1xuICAgICAgICAnZm9yZ290dGVuUGFzc3dvcmQnLFxuICAgICAgICAnbG9naW5Gb3JtJyxcbiAgICAgICAgJ2xvZ2luJyxcbiAgICAgICAgJ3JlZ2lzdGVyJyxcbiAgICAgICAgJ3VwZGF0ZUVtYWlsRm9ybScsXG4gICAgICAgICd1cGRhdGVQYXNzd29yZEZvcm0nLFxuICAgICAgICAndXBkYXRlUHJvZmlsZUZvcm0nLFxuICAgICAgICAnY29uc2VudE1hbmFnZW1lbnRGb3JtJyxcbiAgICAgIF0sXG4gICAgfSxcbiAgfSxcbn07XG4iXX0=
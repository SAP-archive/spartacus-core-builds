/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export const defaultStorefrontRoutesConfig = {
    home: { paths: [''] },
    cart: { paths: ['cart'] },
    search: { paths: ['search/:query'] },
    login: { paths: ['login'] },
    register: { paths: ['register'] },
    resetPassword: { paths: ['login/pw/change'] },
    forgotPassword: { paths: ['forgot-password'] },
    checkout: { paths: ['checkout'] },
    orderConfirmation: { paths: ['order-confirmation'] },
    product: {
        paths: ['product/:productCode'],
        paramsMapping: { productCode: 'code' },
    },
    category: {
        paths: ['category/:categoryCode'],
        paramsMapping: { categoryCode: 'code' },
    },
    brand: { paths: ['Brands/:brandName/c/:brandCode'] },
    termsAndConditions: { paths: ['termsAndConditions'] },
    orders: { paths: ['my-account/orders'] },
    orderDetails: {
        paths: ['my-account/orders/:orderCode'],
        paramsMapping: { orderCode: 'code' },
    },
    addressBook: { paths: ['my-account/address-book'] },
    updatePassword: { paths: ['my-account/update-password'] },
    paymentManagement: { paths: ['my-account/payment-details'] },
    updateEmail: { paths: ['my-account/update-email'] },
    updateProfile: { paths: ['my-account/update-profile'] },
    closeAccount: { paths: ['my-account/close-account'] },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1zdG9yZWZyb250LXJvdXRlcy1jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcm91dGluZy9jb25maWd1cmFibGUtcm91dGVzL2NvbmZpZy9kZWZhdWx0LXN0b3JlZnJvbnQtcm91dGVzLWNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE1BQU0sT0FBTyw2QkFBNkIsR0FBaUI7SUFDekQsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUU7SUFDckIsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsTUFBTSxDQUFDLEVBQUU7SUFDekIsTUFBTSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsZUFBZSxDQUFDLEVBQUU7SUFDcEMsS0FBSyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUU7SUFDM0IsUUFBUSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsVUFBVSxDQUFDLEVBQUU7SUFDakMsYUFBYSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsaUJBQWlCLENBQUMsRUFBRTtJQUM3QyxjQUFjLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFO0lBQzlDLFFBQVEsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLFVBQVUsQ0FBQyxFQUFFO0lBQ2pDLGlCQUFpQixFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsb0JBQW9CLENBQUMsRUFBRTtJQUNwRCxPQUFPLEVBQUU7UUFDUCxLQUFLLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztRQUMvQixhQUFhLEVBQUUsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFO0tBQ3ZDO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsS0FBSyxFQUFFLENBQUMsd0JBQXdCLENBQUM7UUFDakMsYUFBYSxFQUFFLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRTtLQUN4QztJQUNELEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLGdDQUFnQyxDQUFDLEVBQUU7SUFDcEQsa0JBQWtCLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFO0lBQ3JELE1BQU0sRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLG1CQUFtQixDQUFDLEVBQUU7SUFDeEMsWUFBWSxFQUFFO1FBQ1osS0FBSyxFQUFFLENBQUMsOEJBQThCLENBQUM7UUFDdkMsYUFBYSxFQUFFLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRTtLQUNyQztJQUNELFdBQVcsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLHlCQUF5QixDQUFDLEVBQUU7SUFDbkQsY0FBYyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMsNEJBQTRCLENBQUMsRUFBRTtJQUN6RCxpQkFBaUIsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLDRCQUE0QixDQUFDLEVBQUU7SUFDNUQsV0FBVyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUMseUJBQXlCLENBQUMsRUFBRTtJQUNuRCxhQUFhLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQyxFQUFFO0lBQ3ZELFlBQVksRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLDBCQUEwQixDQUFDLEVBQUU7Q0FDdEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3V0ZXNDb25maWcgfSBmcm9tICcuLi9yb3V0ZXMtY29uZmlnJztcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRTdG9yZWZyb250Um91dGVzQ29uZmlnOiBSb3V0ZXNDb25maWcgPSB7XG4gIGhvbWU6IHsgcGF0aHM6IFsnJ10gfSxcbiAgY2FydDogeyBwYXRoczogWydjYXJ0J10gfSxcbiAgc2VhcmNoOiB7IHBhdGhzOiBbJ3NlYXJjaC86cXVlcnknXSB9LFxuICBsb2dpbjogeyBwYXRoczogWydsb2dpbiddIH0sXG4gIHJlZ2lzdGVyOiB7IHBhdGhzOiBbJ3JlZ2lzdGVyJ10gfSxcbiAgcmVzZXRQYXNzd29yZDogeyBwYXRoczogWydsb2dpbi9wdy9jaGFuZ2UnXSB9LFxuICBmb3Jnb3RQYXNzd29yZDogeyBwYXRoczogWydmb3Jnb3QtcGFzc3dvcmQnXSB9LFxuICBjaGVja291dDogeyBwYXRoczogWydjaGVja291dCddIH0sXG4gIG9yZGVyQ29uZmlybWF0aW9uOiB7IHBhdGhzOiBbJ29yZGVyLWNvbmZpcm1hdGlvbiddIH0sXG4gIHByb2R1Y3Q6IHtcbiAgICBwYXRoczogWydwcm9kdWN0Lzpwcm9kdWN0Q29kZSddLFxuICAgIHBhcmFtc01hcHBpbmc6IHsgcHJvZHVjdENvZGU6ICdjb2RlJyB9LFxuICB9LFxuICBjYXRlZ29yeToge1xuICAgIHBhdGhzOiBbJ2NhdGVnb3J5LzpjYXRlZ29yeUNvZGUnXSxcbiAgICBwYXJhbXNNYXBwaW5nOiB7IGNhdGVnb3J5Q29kZTogJ2NvZGUnIH0sXG4gIH0sXG4gIGJyYW5kOiB7IHBhdGhzOiBbJ0JyYW5kcy86YnJhbmROYW1lL2MvOmJyYW5kQ29kZSddIH0sXG4gIHRlcm1zQW5kQ29uZGl0aW9uczogeyBwYXRoczogWyd0ZXJtc0FuZENvbmRpdGlvbnMnXSB9LFxuICBvcmRlcnM6IHsgcGF0aHM6IFsnbXktYWNjb3VudC9vcmRlcnMnXSB9LFxuICBvcmRlckRldGFpbHM6IHtcbiAgICBwYXRoczogWydteS1hY2NvdW50L29yZGVycy86b3JkZXJDb2RlJ10sXG4gICAgcGFyYW1zTWFwcGluZzogeyBvcmRlckNvZGU6ICdjb2RlJyB9LFxuICB9LFxuICBhZGRyZXNzQm9vazogeyBwYXRoczogWydteS1hY2NvdW50L2FkZHJlc3MtYm9vayddIH0sXG4gIHVwZGF0ZVBhc3N3b3JkOiB7IHBhdGhzOiBbJ215LWFjY291bnQvdXBkYXRlLXBhc3N3b3JkJ10gfSxcbiAgcGF5bWVudE1hbmFnZW1lbnQ6IHsgcGF0aHM6IFsnbXktYWNjb3VudC9wYXltZW50LWRldGFpbHMnXSB9LFxuICB1cGRhdGVFbWFpbDogeyBwYXRoczogWydteS1hY2NvdW50L3VwZGF0ZS1lbWFpbCddIH0sXG4gIHVwZGF0ZVByb2ZpbGU6IHsgcGF0aHM6IFsnbXktYWNjb3VudC91cGRhdGUtcHJvZmlsZSddIH0sXG4gIGNsb3NlQWNjb3VudDogeyBwYXRoczogWydteS1hY2NvdW50L2Nsb3NlLWFjY291bnQnXSB9LFxufTtcbiJdfQ==
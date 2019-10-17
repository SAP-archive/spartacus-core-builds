/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export var defaultOccUserConfig = {
    backend: {
        occ: {
            endpoints: {
                user: 'users/${userId}',
                userRegister: 'users',
                userForgotPassword: 'forgottenpasswordtokens',
                userResetPassword: 'resetpassword',
                userUpdateLoginId: 'users/${userId}/login',
                userUpdatePassword: 'users/${userId}/password',
                titles: 'titles',
                paymentDetailsAll: 'users/${userId}/paymentdetails',
                paymentDetail: 'users/${userId}/paymentdetails/${paymentDetailId}',
                orderHistory: 'users/${userId}/orders',
                orderDetail: 'users/${userId}/orders/${orderId}?fields=FULL',
                anonymousConsentTemplates: 'users/anonymous/consenttemplates',
                consentTemplates: 'users/${userId}/consenttemplates',
                consents: 'users/${userId}/consents',
                consentDetail: 'users/${userId}/consents/${consentId}',
                addresses: 'users/${userId}/addresses',
                addressDetail: 'users/${userId}/addresses/${addressId}',
                addressVerification: 'users/${userId}/addresses/verification',
                consignmentTracking: 'orders/${orderCode}/consignments/${consignmentCode}/tracking',
            },
        },
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1vY2MtdXNlci1jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvb2NjL2FkYXB0ZXJzL3VzZXIvZGVmYXVsdC1vY2MtdXNlci1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxNQUFNLEtBQU8sb0JBQW9CLEdBQWM7SUFDN0MsT0FBTyxFQUFFO1FBQ1AsR0FBRyxFQUFFO1lBQ0gsU0FBUyxFQUFFO2dCQUNULElBQUksRUFBRSxpQkFBaUI7Z0JBQ3ZCLFlBQVksRUFBRSxPQUFPO2dCQUNyQixrQkFBa0IsRUFBRSx5QkFBeUI7Z0JBQzdDLGlCQUFpQixFQUFFLGVBQWU7Z0JBQ2xDLGlCQUFpQixFQUFFLHVCQUF1QjtnQkFDMUMsa0JBQWtCLEVBQUUsMEJBQTBCO2dCQUM5QyxNQUFNLEVBQUUsUUFBUTtnQkFDaEIsaUJBQWlCLEVBQUUsZ0NBQWdDO2dCQUNuRCxhQUFhLEVBQUUsbURBQW1EO2dCQUNsRSxZQUFZLEVBQUUsd0JBQXdCO2dCQUN0QyxXQUFXLEVBQUUsK0NBQStDO2dCQUM1RCx5QkFBeUIsRUFBRSxrQ0FBa0M7Z0JBQzdELGdCQUFnQixFQUFFLGtDQUFrQztnQkFDcEQsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMsYUFBYSxFQUFFLHVDQUF1QztnQkFDdEQsU0FBUyxFQUFFLDJCQUEyQjtnQkFDdEMsYUFBYSxFQUFFLHdDQUF3QztnQkFDdkQsbUJBQW1CLEVBQUUsd0NBQXdDO2dCQUM3RCxtQkFBbUIsRUFDakIsOERBQThEO2FBQ2pFO1NBQ0Y7S0FDRjtDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2NjQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnL29jYy1jb25maWcnO1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdE9jY1VzZXJDb25maWc6IE9jY0NvbmZpZyA9IHtcbiAgYmFja2VuZDoge1xuICAgIG9jYzoge1xuICAgICAgZW5kcG9pbnRzOiB7XG4gICAgICAgIHVzZXI6ICd1c2Vycy8ke3VzZXJJZH0nLFxuICAgICAgICB1c2VyUmVnaXN0ZXI6ICd1c2VycycsXG4gICAgICAgIHVzZXJGb3Jnb3RQYXNzd29yZDogJ2ZvcmdvdHRlbnBhc3N3b3JkdG9rZW5zJyxcbiAgICAgICAgdXNlclJlc2V0UGFzc3dvcmQ6ICdyZXNldHBhc3N3b3JkJyxcbiAgICAgICAgdXNlclVwZGF0ZUxvZ2luSWQ6ICd1c2Vycy8ke3VzZXJJZH0vbG9naW4nLFxuICAgICAgICB1c2VyVXBkYXRlUGFzc3dvcmQ6ICd1c2Vycy8ke3VzZXJJZH0vcGFzc3dvcmQnLFxuICAgICAgICB0aXRsZXM6ICd0aXRsZXMnLFxuICAgICAgICBwYXltZW50RGV0YWlsc0FsbDogJ3VzZXJzLyR7dXNlcklkfS9wYXltZW50ZGV0YWlscycsXG4gICAgICAgIHBheW1lbnREZXRhaWw6ICd1c2Vycy8ke3VzZXJJZH0vcGF5bWVudGRldGFpbHMvJHtwYXltZW50RGV0YWlsSWR9JyxcbiAgICAgICAgb3JkZXJIaXN0b3J5OiAndXNlcnMvJHt1c2VySWR9L29yZGVycycsXG4gICAgICAgIG9yZGVyRGV0YWlsOiAndXNlcnMvJHt1c2VySWR9L29yZGVycy8ke29yZGVySWR9P2ZpZWxkcz1GVUxMJyxcbiAgICAgICAgYW5vbnltb3VzQ29uc2VudFRlbXBsYXRlczogJ3VzZXJzL2Fub255bW91cy9jb25zZW50dGVtcGxhdGVzJyxcbiAgICAgICAgY29uc2VudFRlbXBsYXRlczogJ3VzZXJzLyR7dXNlcklkfS9jb25zZW50dGVtcGxhdGVzJyxcbiAgICAgICAgY29uc2VudHM6ICd1c2Vycy8ke3VzZXJJZH0vY29uc2VudHMnLFxuICAgICAgICBjb25zZW50RGV0YWlsOiAndXNlcnMvJHt1c2VySWR9L2NvbnNlbnRzLyR7Y29uc2VudElkfScsXG4gICAgICAgIGFkZHJlc3NlczogJ3VzZXJzLyR7dXNlcklkfS9hZGRyZXNzZXMnLFxuICAgICAgICBhZGRyZXNzRGV0YWlsOiAndXNlcnMvJHt1c2VySWR9L2FkZHJlc3Nlcy8ke2FkZHJlc3NJZH0nLFxuICAgICAgICBhZGRyZXNzVmVyaWZpY2F0aW9uOiAndXNlcnMvJHt1c2VySWR9L2FkZHJlc3Nlcy92ZXJpZmljYXRpb24nLFxuICAgICAgICBjb25zaWdubWVudFRyYWNraW5nOlxuICAgICAgICAgICdvcmRlcnMvJHtvcmRlckNvZGV9L2NvbnNpZ25tZW50cy8ke2NvbnNpZ25tZW50Q29kZX0vdHJhY2tpbmcnLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufTtcbiJdfQ==
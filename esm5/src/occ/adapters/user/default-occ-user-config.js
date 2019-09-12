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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1vY2MtdXNlci1jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvb2NjL2FkYXB0ZXJzL3VzZXIvZGVmYXVsdC1vY2MtdXNlci1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxNQUFNLEtBQU8sb0JBQW9CLEdBQWM7SUFDN0MsT0FBTyxFQUFFO1FBQ1AsR0FBRyxFQUFFO1lBQ0gsU0FBUyxFQUFFO2dCQUNULElBQUksRUFBRSxpQkFBaUI7Z0JBQ3ZCLFlBQVksRUFBRSxPQUFPO2dCQUNyQixrQkFBa0IsRUFBRSx5QkFBeUI7Z0JBQzdDLGlCQUFpQixFQUFFLGVBQWU7Z0JBQ2xDLGlCQUFpQixFQUFFLHVCQUF1QjtnQkFDMUMsa0JBQWtCLEVBQUUsMEJBQTBCO2dCQUM5QyxNQUFNLEVBQUUsUUFBUTtnQkFDaEIsaUJBQWlCLEVBQUUsZ0NBQWdDO2dCQUNuRCxhQUFhLEVBQUUsbURBQW1EO2dCQUNsRSxZQUFZLEVBQUUsd0JBQXdCO2dCQUN0QyxXQUFXLEVBQUUsK0NBQStDO2dCQUM1RCxnQkFBZ0IsRUFBRSxrQ0FBa0M7Z0JBQ3BELFFBQVEsRUFBRSwwQkFBMEI7Z0JBQ3BDLGFBQWEsRUFBRSx1Q0FBdUM7Z0JBQ3RELFNBQVMsRUFBRSwyQkFBMkI7Z0JBQ3RDLGFBQWEsRUFBRSx3Q0FBd0M7Z0JBQ3ZELG1CQUFtQixFQUFFLHdDQUF3QztnQkFDN0QsbUJBQW1CLEVBQ2pCLDhEQUE4RDthQUNqRTtTQUNGO0tBQ0Y7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9jY0NvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZy9vY2MtY29uZmlnJztcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRPY2NVc2VyQ29uZmlnOiBPY2NDb25maWcgPSB7XG4gIGJhY2tlbmQ6IHtcbiAgICBvY2M6IHtcbiAgICAgIGVuZHBvaW50czoge1xuICAgICAgICB1c2VyOiAndXNlcnMvJHt1c2VySWR9JyxcbiAgICAgICAgdXNlclJlZ2lzdGVyOiAndXNlcnMnLFxuICAgICAgICB1c2VyRm9yZ290UGFzc3dvcmQ6ICdmb3Jnb3R0ZW5wYXNzd29yZHRva2VucycsXG4gICAgICAgIHVzZXJSZXNldFBhc3N3b3JkOiAncmVzZXRwYXNzd29yZCcsXG4gICAgICAgIHVzZXJVcGRhdGVMb2dpbklkOiAndXNlcnMvJHt1c2VySWR9L2xvZ2luJyxcbiAgICAgICAgdXNlclVwZGF0ZVBhc3N3b3JkOiAndXNlcnMvJHt1c2VySWR9L3Bhc3N3b3JkJyxcbiAgICAgICAgdGl0bGVzOiAndGl0bGVzJyxcbiAgICAgICAgcGF5bWVudERldGFpbHNBbGw6ICd1c2Vycy8ke3VzZXJJZH0vcGF5bWVudGRldGFpbHMnLFxuICAgICAgICBwYXltZW50RGV0YWlsOiAndXNlcnMvJHt1c2VySWR9L3BheW1lbnRkZXRhaWxzLyR7cGF5bWVudERldGFpbElkfScsXG4gICAgICAgIG9yZGVySGlzdG9yeTogJ3VzZXJzLyR7dXNlcklkfS9vcmRlcnMnLFxuICAgICAgICBvcmRlckRldGFpbDogJ3VzZXJzLyR7dXNlcklkfS9vcmRlcnMvJHtvcmRlcklkfT9maWVsZHM9RlVMTCcsXG4gICAgICAgIGNvbnNlbnRUZW1wbGF0ZXM6ICd1c2Vycy8ke3VzZXJJZH0vY29uc2VudHRlbXBsYXRlcycsXG4gICAgICAgIGNvbnNlbnRzOiAndXNlcnMvJHt1c2VySWR9L2NvbnNlbnRzJyxcbiAgICAgICAgY29uc2VudERldGFpbDogJ3VzZXJzLyR7dXNlcklkfS9jb25zZW50cy8ke2NvbnNlbnRJZH0nLFxuICAgICAgICBhZGRyZXNzZXM6ICd1c2Vycy8ke3VzZXJJZH0vYWRkcmVzc2VzJyxcbiAgICAgICAgYWRkcmVzc0RldGFpbDogJ3VzZXJzLyR7dXNlcklkfS9hZGRyZXNzZXMvJHthZGRyZXNzSWR9JyxcbiAgICAgICAgYWRkcmVzc1ZlcmlmaWNhdGlvbjogJ3VzZXJzLyR7dXNlcklkfS9hZGRyZXNzZXMvdmVyaWZpY2F0aW9uJyxcbiAgICAgICAgY29uc2lnbm1lbnRUcmFja2luZzpcbiAgICAgICAgICAnb3JkZXJzLyR7b3JkZXJDb2RlfS9jb25zaWdubWVudHMvJHtjb25zaWdubWVudENvZGV9L3RyYWNraW5nJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn07XG4iXX0=
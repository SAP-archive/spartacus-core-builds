/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export const defaultOccUserConfig = {
    backend: {
        occ: {
            endpoints: {
                // tslint:disable:max-line-length
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
                notificationPreference: 'users/${userId}/notificationpreferences',
                productInterests: 'users/${userId}/productinterests',
                getProductInterests: 'users/${userId}/productinterests?fields=sorts,pagination,results(productInterestEntry,product(code))',
                cancelOrder: 'users/${userId}/orders/${orderId}/cancellation',
                returnOrder: 'users/${userId}/orderReturns?fields=BASIC,returnEntries(BASIC,refundAmount(formattedValue),orderEntry(basePrice(formattedValue),product(name, code,images(DEFAULT,galleryIndex)))),deliveryCost(formattedValue),totalPrice(formattedValue),subTotal(formattedValue)',
                orderReturns: 'users/${userId}/orderReturns?fields=BASIC',
                orderReturnDetail: 'users/${userId}/orderReturns/${returnRequestCode}?fields=BASIC,returnEntries(BASIC,refundAmount(formattedValue),orderEntry(basePrice(formattedValue),product(name, code,images(DEFAULT,galleryIndex)))),deliveryCost(formattedValue),totalPrice(formattedValue),subTotal(formattedValue)',
                cancelReturn: 'users/${userId}/orderReturns/${returnRequestCode}',
            },
        },
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1vY2MtdXNlci1jb25maWcuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvb2NjL2FkYXB0ZXJzL3VzZXIvZGVmYXVsdC1vY2MtdXNlci1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxNQUFNLE9BQU8sb0JBQW9CLEdBQWM7SUFDN0MsT0FBTyxFQUFFO1FBQ1AsR0FBRyxFQUFFO1lBQ0gsU0FBUyxFQUFFOztnQkFFVCxJQUFJLEVBQUUsaUJBQWlCO2dCQUN2QixZQUFZLEVBQUUsT0FBTztnQkFDckIsa0JBQWtCLEVBQUUseUJBQXlCO2dCQUM3QyxpQkFBaUIsRUFBRSxlQUFlO2dCQUNsQyxpQkFBaUIsRUFBRSx1QkFBdUI7Z0JBQzFDLGtCQUFrQixFQUFFLDBCQUEwQjtnQkFDOUMsTUFBTSxFQUFFLFFBQVE7Z0JBQ2hCLGlCQUFpQixFQUFFLGdDQUFnQztnQkFDbkQsYUFBYSxFQUFFLG1EQUFtRDtnQkFDbEUsWUFBWSxFQUFFLHdCQUF3QjtnQkFDdEMsV0FBVyxFQUFFLCtDQUErQztnQkFDNUQseUJBQXlCLEVBQUUsa0NBQWtDO2dCQUM3RCxnQkFBZ0IsRUFBRSxrQ0FBa0M7Z0JBQ3BELFFBQVEsRUFBRSwwQkFBMEI7Z0JBQ3BDLGFBQWEsRUFBRSx1Q0FBdUM7Z0JBQ3RELFNBQVMsRUFBRSwyQkFBMkI7Z0JBQ3RDLGFBQWEsRUFBRSx3Q0FBd0M7Z0JBQ3ZELG1CQUFtQixFQUFFLHdDQUF3QztnQkFDN0QsbUJBQW1CLEVBQ2pCLDhEQUE4RDtnQkFDaEUsc0JBQXNCLEVBQUUseUNBQXlDO2dCQUNqRSxnQkFBZ0IsRUFBRSxrQ0FBa0M7Z0JBQ3BELG1CQUFtQixFQUNqQixzR0FBc0c7Z0JBQ3hHLFdBQVcsRUFBRSxnREFBZ0Q7Z0JBQzdELFdBQVcsRUFDVCxxUUFBcVE7Z0JBQ3ZRLFlBQVksRUFBRSwyQ0FBMkM7Z0JBQ3pELGlCQUFpQixFQUNmLDBSQUEwUjtnQkFDNVIsWUFBWSxFQUFFLG1EQUFtRDthQUVsRTtTQUNGO0tBQ0Y7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9jY0NvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZy9vY2MtY29uZmlnJztcblxuZXhwb3J0IGNvbnN0IGRlZmF1bHRPY2NVc2VyQ29uZmlnOiBPY2NDb25maWcgPSB7XG4gIGJhY2tlbmQ6IHtcbiAgICBvY2M6IHtcbiAgICAgIGVuZHBvaW50czoge1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGhcbiAgICAgICAgdXNlcjogJ3VzZXJzLyR7dXNlcklkfScsXG4gICAgICAgIHVzZXJSZWdpc3RlcjogJ3VzZXJzJyxcbiAgICAgICAgdXNlckZvcmdvdFBhc3N3b3JkOiAnZm9yZ290dGVucGFzc3dvcmR0b2tlbnMnLFxuICAgICAgICB1c2VyUmVzZXRQYXNzd29yZDogJ3Jlc2V0cGFzc3dvcmQnLFxuICAgICAgICB1c2VyVXBkYXRlTG9naW5JZDogJ3VzZXJzLyR7dXNlcklkfS9sb2dpbicsXG4gICAgICAgIHVzZXJVcGRhdGVQYXNzd29yZDogJ3VzZXJzLyR7dXNlcklkfS9wYXNzd29yZCcsXG4gICAgICAgIHRpdGxlczogJ3RpdGxlcycsXG4gICAgICAgIHBheW1lbnREZXRhaWxzQWxsOiAndXNlcnMvJHt1c2VySWR9L3BheW1lbnRkZXRhaWxzJyxcbiAgICAgICAgcGF5bWVudERldGFpbDogJ3VzZXJzLyR7dXNlcklkfS9wYXltZW50ZGV0YWlscy8ke3BheW1lbnREZXRhaWxJZH0nLFxuICAgICAgICBvcmRlckhpc3Rvcnk6ICd1c2Vycy8ke3VzZXJJZH0vb3JkZXJzJyxcbiAgICAgICAgb3JkZXJEZXRhaWw6ICd1c2Vycy8ke3VzZXJJZH0vb3JkZXJzLyR7b3JkZXJJZH0/ZmllbGRzPUZVTEwnLFxuICAgICAgICBhbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzOiAndXNlcnMvYW5vbnltb3VzL2NvbnNlbnR0ZW1wbGF0ZXMnLFxuICAgICAgICBjb25zZW50VGVtcGxhdGVzOiAndXNlcnMvJHt1c2VySWR9L2NvbnNlbnR0ZW1wbGF0ZXMnLFxuICAgICAgICBjb25zZW50czogJ3VzZXJzLyR7dXNlcklkfS9jb25zZW50cycsXG4gICAgICAgIGNvbnNlbnREZXRhaWw6ICd1c2Vycy8ke3VzZXJJZH0vY29uc2VudHMvJHtjb25zZW50SWR9JyxcbiAgICAgICAgYWRkcmVzc2VzOiAndXNlcnMvJHt1c2VySWR9L2FkZHJlc3NlcycsXG4gICAgICAgIGFkZHJlc3NEZXRhaWw6ICd1c2Vycy8ke3VzZXJJZH0vYWRkcmVzc2VzLyR7YWRkcmVzc0lkfScsXG4gICAgICAgIGFkZHJlc3NWZXJpZmljYXRpb246ICd1c2Vycy8ke3VzZXJJZH0vYWRkcmVzc2VzL3ZlcmlmaWNhdGlvbicsXG4gICAgICAgIGNvbnNpZ25tZW50VHJhY2tpbmc6XG4gICAgICAgICAgJ29yZGVycy8ke29yZGVyQ29kZX0vY29uc2lnbm1lbnRzLyR7Y29uc2lnbm1lbnRDb2RlfS90cmFja2luZycsXG4gICAgICAgIG5vdGlmaWNhdGlvblByZWZlcmVuY2U6ICd1c2Vycy8ke3VzZXJJZH0vbm90aWZpY2F0aW9ucHJlZmVyZW5jZXMnLFxuICAgICAgICBwcm9kdWN0SW50ZXJlc3RzOiAndXNlcnMvJHt1c2VySWR9L3Byb2R1Y3RpbnRlcmVzdHMnLFxuICAgICAgICBnZXRQcm9kdWN0SW50ZXJlc3RzOlxuICAgICAgICAgICd1c2Vycy8ke3VzZXJJZH0vcHJvZHVjdGludGVyZXN0cz9maWVsZHM9c29ydHMscGFnaW5hdGlvbixyZXN1bHRzKHByb2R1Y3RJbnRlcmVzdEVudHJ5LHByb2R1Y3QoY29kZSkpJyxcbiAgICAgICAgY2FuY2VsT3JkZXI6ICd1c2Vycy8ke3VzZXJJZH0vb3JkZXJzLyR7b3JkZXJJZH0vY2FuY2VsbGF0aW9uJyxcbiAgICAgICAgcmV0dXJuT3JkZXI6XG4gICAgICAgICAgJ3VzZXJzLyR7dXNlcklkfS9vcmRlclJldHVybnM/ZmllbGRzPUJBU0lDLHJldHVybkVudHJpZXMoQkFTSUMscmVmdW5kQW1vdW50KGZvcm1hdHRlZFZhbHVlKSxvcmRlckVudHJ5KGJhc2VQcmljZShmb3JtYXR0ZWRWYWx1ZSkscHJvZHVjdChuYW1lLCBjb2RlLGltYWdlcyhERUZBVUxULGdhbGxlcnlJbmRleCkpKSksZGVsaXZlcnlDb3N0KGZvcm1hdHRlZFZhbHVlKSx0b3RhbFByaWNlKGZvcm1hdHRlZFZhbHVlKSxzdWJUb3RhbChmb3JtYXR0ZWRWYWx1ZSknLFxuICAgICAgICBvcmRlclJldHVybnM6ICd1c2Vycy8ke3VzZXJJZH0vb3JkZXJSZXR1cm5zP2ZpZWxkcz1CQVNJQycsXG4gICAgICAgIG9yZGVyUmV0dXJuRGV0YWlsOlxuICAgICAgICAgICd1c2Vycy8ke3VzZXJJZH0vb3JkZXJSZXR1cm5zLyR7cmV0dXJuUmVxdWVzdENvZGV9P2ZpZWxkcz1CQVNJQyxyZXR1cm5FbnRyaWVzKEJBU0lDLHJlZnVuZEFtb3VudChmb3JtYXR0ZWRWYWx1ZSksb3JkZXJFbnRyeShiYXNlUHJpY2UoZm9ybWF0dGVkVmFsdWUpLHByb2R1Y3QobmFtZSwgY29kZSxpbWFnZXMoREVGQVVMVCxnYWxsZXJ5SW5kZXgpKSkpLGRlbGl2ZXJ5Q29zdChmb3JtYXR0ZWRWYWx1ZSksdG90YWxQcmljZShmb3JtYXR0ZWRWYWx1ZSksc3ViVG90YWwoZm9ybWF0dGVkVmFsdWUpJyxcbiAgICAgICAgY2FuY2VsUmV0dXJuOiAndXNlcnMvJHt1c2VySWR9L29yZGVyUmV0dXJucy8ke3JldHVyblJlcXVlc3RDb2RlfScsXG4gICAgICAgIC8vIHRzbGludDplbmFibGVcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbn07XG4iXX0=
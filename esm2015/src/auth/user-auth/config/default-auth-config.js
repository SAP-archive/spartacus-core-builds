export const defaultAuthConfig = {
    authentication: {
        client_id: 'mobile_android',
        client_secret: 'secret',
        tokenEndpoint: '/oauth/token',
        revokeEndpoint: '/oauth/revoke',
        loginUrl: '/oauth/authorize',
        OAuthLibConfig: {
            scope: '',
            customTokenParameters: ['token_type'],
            strictDiscoveryDocumentValidation: false,
            skipIssuerCheck: true,
            disablePKCE: true,
            oidc: false,
            clearHashAfterLogin: false,
        },
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1hdXRoLWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL2F1dGgvdXNlci1hdXRoL2NvbmZpZy9kZWZhdWx0LWF1dGgtY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sQ0FBQyxNQUFNLGlCQUFpQixHQUFlO0lBQzNDLGNBQWMsRUFBRTtRQUNkLFNBQVMsRUFBRSxnQkFBZ0I7UUFDM0IsYUFBYSxFQUFFLFFBQVE7UUFDdkIsYUFBYSxFQUFFLGNBQWM7UUFDN0IsY0FBYyxFQUFFLGVBQWU7UUFDL0IsUUFBUSxFQUFFLGtCQUFrQjtRQUM1QixjQUFjLEVBQUU7WUFDZCxLQUFLLEVBQUUsRUFBRTtZQUNULHFCQUFxQixFQUFFLENBQUMsWUFBWSxDQUFDO1lBQ3JDLGlDQUFpQyxFQUFFLEtBQUs7WUFDeEMsZUFBZSxFQUFFLElBQUk7WUFDckIsV0FBVyxFQUFFLElBQUk7WUFDakIsSUFBSSxFQUFFLEtBQUs7WUFDWCxtQkFBbUIsRUFBRSxLQUFLO1NBQzNCO0tBQ0Y7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXV0aENvbmZpZyB9IGZyb20gJy4vYXV0aC1jb25maWcnO1xuXG5leHBvcnQgY29uc3QgZGVmYXVsdEF1dGhDb25maWc6IEF1dGhDb25maWcgPSB7XG4gIGF1dGhlbnRpY2F0aW9uOiB7XG4gICAgY2xpZW50X2lkOiAnbW9iaWxlX2FuZHJvaWQnLFxuICAgIGNsaWVudF9zZWNyZXQ6ICdzZWNyZXQnLFxuICAgIHRva2VuRW5kcG9pbnQ6ICcvb2F1dGgvdG9rZW4nLFxuICAgIHJldm9rZUVuZHBvaW50OiAnL29hdXRoL3Jldm9rZScsXG4gICAgbG9naW5Vcmw6ICcvb2F1dGgvYXV0aG9yaXplJyxcbiAgICBPQXV0aExpYkNvbmZpZzoge1xuICAgICAgc2NvcGU6ICcnLFxuICAgICAgY3VzdG9tVG9rZW5QYXJhbWV0ZXJzOiBbJ3Rva2VuX3R5cGUnXSxcbiAgICAgIHN0cmljdERpc2NvdmVyeURvY3VtZW50VmFsaWRhdGlvbjogZmFsc2UsXG4gICAgICBza2lwSXNzdWVyQ2hlY2s6IHRydWUsXG4gICAgICBkaXNhYmxlUEtDRTogdHJ1ZSxcbiAgICAgIG9pZGM6IGZhbHNlLFxuICAgICAgY2xlYXJIYXNoQWZ0ZXJMb2dpbjogZmFsc2UsXG4gICAgfSxcbiAgfSxcbn07XG4iXX0=
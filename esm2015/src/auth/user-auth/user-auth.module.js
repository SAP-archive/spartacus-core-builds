import { CommonModule } from '@angular/common';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { OAuthModule, OAuthStorage } from 'angular-oauth2-oidc';
import { ConfigInitializerService } from '../../config/config-initializer/config-initializer.service';
import { provideDefaultConfig } from '../../config/config-providers';
import { provideConfigValidator } from '../../config/config-validator/config-validator';
import { baseUrlConfigValidator } from './config/base-url-config-validator';
import { defaultAuthConfig } from './config/default-auth-config';
import { UserAuthEventModule } from './events/user-auth-event.module';
import { AuthService } from './facade/auth.service';
import { interceptors } from './http-interceptors/index';
import { AuthStatePersistenceService } from './services/auth-state-persistence.service';
import { AuthStorageService } from './services/auth-storage.service';
/**
 * Initialize the check for `token` or `code` in the url returned from the OAuth server.
 */
export function checkOAuthParamsInUrl(authService, configInit) {
    const result = () => configInit.getStableConfig().then(() => {
        // Wait for stable config is used, because with auth redirect would kick so quickly that the page would not be loaded correctly
        authService.checkOAuthParamsInUrl();
    });
    return result;
}
export function authStatePersistenceFactory(authStatePersistenceService) {
    const result = () => authStatePersistenceService.initSync();
    return result;
}
/**
 * Authentication module for a user. Handlers requests for logged in users,
 * provides authorization services and storage for tokens.
 */
export class UserAuthModule {
    static forRoot() {
        return {
            ngModule: UserAuthModule,
            providers: [
                provideDefaultConfig(defaultAuthConfig),
                provideConfigValidator(baseUrlConfigValidator),
                ...interceptors,
                {
                    provide: OAuthStorage,
                    useExisting: AuthStorageService,
                },
                {
                    provide: APP_INITIALIZER,
                    useFactory: authStatePersistenceFactory,
                    deps: [AuthStatePersistenceService],
                    multi: true,
                },
                {
                    provide: APP_INITIALIZER,
                    useFactory: checkOAuthParamsInUrl,
                    deps: [AuthService, ConfigInitializerService],
                    multi: true,
                },
            ],
        };
    }
}
UserAuthModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, OAuthModule.forRoot(), UserAuthEventModule],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1hdXRoLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL2F1dGgvdXNlci1hdXRoL3VzZXItYXV0aC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxlQUFlLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBQ3RHLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGdEQUFnRCxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDekQsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDeEYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFckU7O0dBRUc7QUFDSCxNQUFNLFVBQVUscUJBQXFCLENBQ25DLFdBQXdCLEVBQ3hCLFVBQW9DO0lBRXBDLE1BQU0sTUFBTSxHQUFHLEdBQUcsRUFBRSxDQUNsQixVQUFVLENBQUMsZUFBZSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtRQUNyQywrSEFBK0g7UUFDL0gsV0FBVyxDQUFDLHFCQUFxQixFQUFFLENBQUM7SUFDdEMsQ0FBQyxDQUFDLENBQUM7SUFFTCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDO0FBRUQsTUFBTSxVQUFVLDJCQUEyQixDQUN6QywyQkFBd0Q7SUFFeEQsTUFBTSxNQUFNLEdBQUcsR0FBRyxFQUFFLENBQUMsMkJBQTJCLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDNUQsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQztBQUVEOzs7R0FHRztBQUlILE1BQU0sT0FBTyxjQUFjO0lBQ3pCLE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFNBQVMsRUFBRTtnQkFDVCxvQkFBb0IsQ0FBQyxpQkFBaUIsQ0FBQztnQkFDdkMsc0JBQXNCLENBQUMsc0JBQXNCLENBQUM7Z0JBQzlDLEdBQUcsWUFBWTtnQkFDZjtvQkFDRSxPQUFPLEVBQUUsWUFBWTtvQkFDckIsV0FBVyxFQUFFLGtCQUFrQjtpQkFDaEM7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLGVBQWU7b0JBQ3hCLFVBQVUsRUFBRSwyQkFBMkI7b0JBQ3ZDLElBQUksRUFBRSxDQUFDLDJCQUEyQixDQUFDO29CQUNuQyxLQUFLLEVBQUUsSUFBSTtpQkFDWjtnQkFDRDtvQkFDRSxPQUFPLEVBQUUsZUFBZTtvQkFDeEIsVUFBVSxFQUFFLHFCQUFxQjtvQkFDakMsSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLHdCQUF3QixDQUFDO29CQUM3QyxLQUFLLEVBQUUsSUFBSTtpQkFDWjthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7OztZQTdCRixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFdBQVcsQ0FBQyxPQUFPLEVBQUUsRUFBRSxtQkFBbUIsQ0FBQzthQUNwRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBBUFBfSU5JVElBTElaRVIsIE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPQXV0aE1vZHVsZSwgT0F1dGhTdG9yYWdlIH0gZnJvbSAnYW5ndWxhci1vYXV0aDItb2lkYyc7XG5pbXBvcnQgeyBDb25maWdJbml0aWFsaXplclNlcnZpY2UgfSBmcm9tICcuLi8uLi9jb25maWcvY29uZmlnLWluaXRpYWxpemVyL2NvbmZpZy1pbml0aWFsaXplci5zZXJ2aWNlJztcbmltcG9ydCB7IHByb3ZpZGVEZWZhdWx0Q29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnL2NvbmZpZy1wcm92aWRlcnMnO1xuaW1wb3J0IHsgcHJvdmlkZUNvbmZpZ1ZhbGlkYXRvciB9IGZyb20gJy4uLy4uL2NvbmZpZy9jb25maWctdmFsaWRhdG9yL2NvbmZpZy12YWxpZGF0b3InO1xuaW1wb3J0IHsgYmFzZVVybENvbmZpZ1ZhbGlkYXRvciB9IGZyb20gJy4vY29uZmlnL2Jhc2UtdXJsLWNvbmZpZy12YWxpZGF0b3InO1xuaW1wb3J0IHsgZGVmYXVsdEF1dGhDb25maWcgfSBmcm9tICcuL2NvbmZpZy9kZWZhdWx0LWF1dGgtY29uZmlnJztcbmltcG9ydCB7IFVzZXJBdXRoRXZlbnRNb2R1bGUgfSBmcm9tICcuL2V2ZW50cy91c2VyLWF1dGgtZXZlbnQubW9kdWxlJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi9mYWNhZGUvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IGludGVyY2VwdG9ycyB9IGZyb20gJy4vaHR0cC1pbnRlcmNlcHRvcnMvaW5kZXgnO1xuaW1wb3J0IHsgQXV0aFN0YXRlUGVyc2lzdGVuY2VTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9hdXRoLXN0YXRlLXBlcnNpc3RlbmNlLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aFN0b3JhZ2VTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9hdXRoLXN0b3JhZ2Uuc2VydmljZSc7XG5cbi8qKlxuICogSW5pdGlhbGl6ZSB0aGUgY2hlY2sgZm9yIGB0b2tlbmAgb3IgYGNvZGVgIGluIHRoZSB1cmwgcmV0dXJuZWQgZnJvbSB0aGUgT0F1dGggc2VydmVyLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tPQXV0aFBhcmFtc0luVXJsKFxuICBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gIGNvbmZpZ0luaXQ6IENvbmZpZ0luaXRpYWxpemVyU2VydmljZVxuKSB7XG4gIGNvbnN0IHJlc3VsdCA9ICgpID0+XG4gICAgY29uZmlnSW5pdC5nZXRTdGFibGVDb25maWcoKS50aGVuKCgpID0+IHtcbiAgICAgIC8vIFdhaXQgZm9yIHN0YWJsZSBjb25maWcgaXMgdXNlZCwgYmVjYXVzZSB3aXRoIGF1dGggcmVkaXJlY3Qgd291bGQga2ljayBzbyBxdWlja2x5IHRoYXQgdGhlIHBhZ2Ugd291bGQgbm90IGJlIGxvYWRlZCBjb3JyZWN0bHlcbiAgICAgIGF1dGhTZXJ2aWNlLmNoZWNrT0F1dGhQYXJhbXNJblVybCgpO1xuICAgIH0pO1xuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhdXRoU3RhdGVQZXJzaXN0ZW5jZUZhY3RvcnkoXG4gIGF1dGhTdGF0ZVBlcnNpc3RlbmNlU2VydmljZTogQXV0aFN0YXRlUGVyc2lzdGVuY2VTZXJ2aWNlXG4pIHtcbiAgY29uc3QgcmVzdWx0ID0gKCkgPT4gYXV0aFN0YXRlUGVyc2lzdGVuY2VTZXJ2aWNlLmluaXRTeW5jKCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogQXV0aGVudGljYXRpb24gbW9kdWxlIGZvciBhIHVzZXIuIEhhbmRsZXJzIHJlcXVlc3RzIGZvciBsb2dnZWQgaW4gdXNlcnMsXG4gKiBwcm92aWRlcyBhdXRob3JpemF0aW9uIHNlcnZpY2VzIGFuZCBzdG9yYWdlIGZvciB0b2tlbnMuXG4gKi9cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE9BdXRoTW9kdWxlLmZvclJvb3QoKSwgVXNlckF1dGhFdmVudE1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIFVzZXJBdXRoTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxVc2VyQXV0aE1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogVXNlckF1dGhNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgcHJvdmlkZURlZmF1bHRDb25maWcoZGVmYXVsdEF1dGhDb25maWcpLFxuICAgICAgICBwcm92aWRlQ29uZmlnVmFsaWRhdG9yKGJhc2VVcmxDb25maWdWYWxpZGF0b3IpLFxuICAgICAgICAuLi5pbnRlcmNlcHRvcnMsXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBPQXV0aFN0b3JhZ2UsXG4gICAgICAgICAgdXNlRXhpc3Rpbmc6IEF1dGhTdG9yYWdlU2VydmljZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IEFQUF9JTklUSUFMSVpFUixcbiAgICAgICAgICB1c2VGYWN0b3J5OiBhdXRoU3RhdGVQZXJzaXN0ZW5jZUZhY3RvcnksXG4gICAgICAgICAgZGVwczogW0F1dGhTdGF0ZVBlcnNpc3RlbmNlU2VydmljZV0sXG4gICAgICAgICAgbXVsdGk6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBBUFBfSU5JVElBTElaRVIsXG4gICAgICAgICAgdXNlRmFjdG9yeTogY2hlY2tPQXV0aFBhcmFtc0luVXJsLFxuICAgICAgICAgIGRlcHM6IFtBdXRoU2VydmljZSwgQ29uZmlnSW5pdGlhbGl6ZXJTZXJ2aWNlXSxcbiAgICAgICAgICBtdWx0aTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19
import { CommonModule } from '@angular/common';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { OAuthModule, OAuthStorage } from 'angular-oauth2-oidc';
import { ConfigInitializerService } from '../../config/config-initializer/config-initializer.service';
import { provideDefaultConfig } from '../../config/config-providers';
import { defaultAuthConfig } from './config/default-auth-config';
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
                imports: [CommonModule, OAuthModule.forRoot()],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1hdXRoLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL2F1dGgvdXNlci1hdXRoL3VzZXItYXV0aC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxlQUFlLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBQ3RHLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDekQsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDeEYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFckU7O0dBRUc7QUFDSCxNQUFNLFVBQVUscUJBQXFCLENBQ25DLFdBQXdCLEVBQ3hCLFVBQW9DO0lBRXBDLE1BQU0sTUFBTSxHQUFHLEdBQUcsRUFBRSxDQUNsQixVQUFVLENBQUMsZUFBZSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtRQUNyQywrSEFBK0g7UUFDL0gsV0FBVyxDQUFDLHFCQUFxQixFQUFFLENBQUM7SUFDdEMsQ0FBQyxDQUFDLENBQUM7SUFFTCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDO0FBRUQsTUFBTSxVQUFVLDJCQUEyQixDQUN6QywyQkFBd0Q7SUFFeEQsTUFBTSxNQUFNLEdBQUcsR0FBRyxFQUFFLENBQUMsMkJBQTJCLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDNUQsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQztBQUVEOzs7R0FHRztBQUlILE1BQU0sT0FBTyxjQUFjO0lBQ3pCLE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFNBQVMsRUFBRTtnQkFDVCxvQkFBb0IsQ0FBQyxpQkFBaUIsQ0FBQztnQkFDdkMsR0FBRyxZQUFZO2dCQUNmO29CQUNFLE9BQU8sRUFBRSxZQUFZO29CQUNyQixXQUFXLEVBQUUsa0JBQWtCO2lCQUNoQztnQkFDRDtvQkFDRSxPQUFPLEVBQUUsZUFBZTtvQkFDeEIsVUFBVSxFQUFFLDJCQUEyQjtvQkFDdkMsSUFBSSxFQUFFLENBQUMsMkJBQTJCLENBQUM7b0JBQ25DLEtBQUssRUFBRSxJQUFJO2lCQUNaO2dCQUNEO29CQUNFLE9BQU8sRUFBRSxlQUFlO29CQUN4QixVQUFVLEVBQUUscUJBQXFCO29CQUNqQyxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsd0JBQXdCLENBQUM7b0JBQzdDLEtBQUssRUFBRSxJQUFJO2lCQUNaO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQzs7O1lBNUJGLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQy9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEFQUF9JTklUSUFMSVpFUiwgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9BdXRoTW9kdWxlLCBPQXV0aFN0b3JhZ2UgfSBmcm9tICdhbmd1bGFyLW9hdXRoMi1vaWRjJztcbmltcG9ydCB7IENvbmZpZ0luaXRpYWxpemVyU2VydmljZSB9IGZyb20gJy4uLy4uL2NvbmZpZy9jb25maWctaW5pdGlhbGl6ZXIvY29uZmlnLWluaXRpYWxpemVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgcHJvdmlkZURlZmF1bHRDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcvY29uZmlnLXByb3ZpZGVycyc7XG5pbXBvcnQgeyBkZWZhdWx0QXV0aENvbmZpZyB9IGZyb20gJy4vY29uZmlnL2RlZmF1bHQtYXV0aC1jb25maWcnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuL2ZhY2FkZS9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgaW50ZXJjZXB0b3JzIH0gZnJvbSAnLi9odHRwLWludGVyY2VwdG9ycy9pbmRleCc7XG5pbXBvcnQgeyBBdXRoU3RhdGVQZXJzaXN0ZW5jZVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2F1dGgtc3RhdGUtcGVyc2lzdGVuY2Uuc2VydmljZSc7XG5pbXBvcnQgeyBBdXRoU3RvcmFnZVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2F1dGgtc3RvcmFnZS5zZXJ2aWNlJztcblxuLyoqXG4gKiBJbml0aWFsaXplIHRoZSBjaGVjayBmb3IgYHRva2VuYCBvciBgY29kZWAgaW4gdGhlIHVybCByZXR1cm5lZCBmcm9tIHRoZSBPQXV0aCBzZXJ2ZXIuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjaGVja09BdXRoUGFyYW1zSW5VcmwoXG4gIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgY29uZmlnSW5pdDogQ29uZmlnSW5pdGlhbGl6ZXJTZXJ2aWNlXG4pIHtcbiAgY29uc3QgcmVzdWx0ID0gKCkgPT5cbiAgICBjb25maWdJbml0LmdldFN0YWJsZUNvbmZpZygpLnRoZW4oKCkgPT4ge1xuICAgICAgLy8gV2FpdCBmb3Igc3RhYmxlIGNvbmZpZyBpcyB1c2VkLCBiZWNhdXNlIHdpdGggYXV0aCByZWRpcmVjdCB3b3VsZCBraWNrIHNvIHF1aWNrbHkgdGhhdCB0aGUgcGFnZSB3b3VsZCBub3QgYmUgbG9hZGVkIGNvcnJlY3RseVxuICAgICAgYXV0aFNlcnZpY2UuY2hlY2tPQXV0aFBhcmFtc0luVXJsKCk7XG4gICAgfSk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF1dGhTdGF0ZVBlcnNpc3RlbmNlRmFjdG9yeShcbiAgYXV0aFN0YXRlUGVyc2lzdGVuY2VTZXJ2aWNlOiBBdXRoU3RhdGVQZXJzaXN0ZW5jZVNlcnZpY2Vcbikge1xuICBjb25zdCByZXN1bHQgPSAoKSA9PiBhdXRoU3RhdGVQZXJzaXN0ZW5jZVNlcnZpY2UuaW5pdFN5bmMoKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBBdXRoZW50aWNhdGlvbiBtb2R1bGUgZm9yIGEgdXNlci4gSGFuZGxlcnMgcmVxdWVzdHMgZm9yIGxvZ2dlZCBpbiB1c2VycyxcbiAqIHByb3ZpZGVzIGF1dGhvcml6YXRpb24gc2VydmljZXMgYW5kIHN0b3JhZ2UgZm9yIHRva2Vucy5cbiAqL1xuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgT0F1dGhNb2R1bGUuZm9yUm9vdCgpXSxcbn0pXG5leHBvcnQgY2xhc3MgVXNlckF1dGhNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPFVzZXJBdXRoTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBVc2VyQXV0aE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBwcm92aWRlRGVmYXVsdENvbmZpZyhkZWZhdWx0QXV0aENvbmZpZyksXG4gICAgICAgIC4uLmludGVyY2VwdG9ycyxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IE9BdXRoU3RvcmFnZSxcbiAgICAgICAgICB1c2VFeGlzdGluZzogQXV0aFN0b3JhZ2VTZXJ2aWNlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogQVBQX0lOSVRJQUxJWkVSLFxuICAgICAgICAgIHVzZUZhY3Rvcnk6IGF1dGhTdGF0ZVBlcnNpc3RlbmNlRmFjdG9yeSxcbiAgICAgICAgICBkZXBzOiBbQXV0aFN0YXRlUGVyc2lzdGVuY2VTZXJ2aWNlXSxcbiAgICAgICAgICBtdWx0aTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IEFQUF9JTklUSUFMSVpFUixcbiAgICAgICAgICB1c2VGYWN0b3J5OiBjaGVja09BdXRoUGFyYW1zSW5VcmwsXG4gICAgICAgICAgZGVwczogW0F1dGhTZXJ2aWNlLCBDb25maWdJbml0aWFsaXplclNlcnZpY2VdLFxuICAgICAgICAgIG11bHRpOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXX0=
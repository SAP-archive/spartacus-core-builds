/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Config, provideConfig } from '../config/config.module';
import { AuthConfig } from './config/auth-config';
import { defaultAuthConfig } from './config/default-auth-config';
import { interceptors } from './http-interceptors/index';
import { AuthServices } from './services/index';
import { AuthStoreModule } from './store/auth-store.module';
export class AuthModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: AuthModule,
            providers: [
                ...interceptors,
                ...AuthServices,
                { provide: AuthConfig, useExisting: Config },
                provideConfig(defaultAuthConfig),
            ],
        };
    }
}
AuthModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, HttpClientModule, AuthStoreModule],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvYXV0aC9hdXRoLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDaEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBSzVELE1BQU0sT0FBTyxVQUFVOzs7O0lBQ3JCLE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFNBQVMsRUFBRTtnQkFDVCxHQUFHLFlBQVk7Z0JBQ2YsR0FBRyxZQUFZO2dCQUNmLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFO2dCQUM1QyxhQUFhLENBQUMsaUJBQWlCLENBQUM7YUFDakM7U0FDRixDQUFDO0lBQ0osQ0FBQzs7O1lBZEYsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxnQkFBZ0IsRUFBRSxlQUFlLENBQUM7YUFDM0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb25maWcsIHByb3ZpZGVDb25maWcgfSBmcm9tICcuLi9jb25maWcvY29uZmlnLm1vZHVsZSc7XG5pbXBvcnQgeyBBdXRoQ29uZmlnIH0gZnJvbSAnLi9jb25maWcvYXV0aC1jb25maWcnO1xuaW1wb3J0IHsgZGVmYXVsdEF1dGhDb25maWcgfSBmcm9tICcuL2NvbmZpZy9kZWZhdWx0LWF1dGgtY29uZmlnJztcbmltcG9ydCB7IGludGVyY2VwdG9ycyB9IGZyb20gJy4vaHR0cC1pbnRlcmNlcHRvcnMvaW5kZXgnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2VzIH0gZnJvbSAnLi9zZXJ2aWNlcy9pbmRleCc7XG5pbXBvcnQgeyBBdXRoU3RvcmVNb2R1bGUgfSBmcm9tICcuL3N0b3JlL2F1dGgtc3RvcmUubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgSHR0cENsaWVudE1vZHVsZSwgQXV0aFN0b3JlTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgQXV0aE1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8QXV0aE1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQXV0aE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAuLi5pbnRlcmNlcHRvcnMsXG4gICAgICAgIC4uLkF1dGhTZXJ2aWNlcyxcbiAgICAgICAgeyBwcm92aWRlOiBBdXRoQ29uZmlnLCB1c2VFeGlzdGluZzogQ29uZmlnIH0sXG4gICAgICAgIHByb3ZpZGVDb25maWcoZGVmYXVsdEF1dGhDb25maWcpLFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXX0=
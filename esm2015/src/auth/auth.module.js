/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Config, ConfigModule } from '../config/config.module';
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
            ],
        };
    }
}
AuthModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    HttpClientModule,
                    AuthStoreModule,
                    ConfigModule.withConfig(defaultAuthConfig),
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvYXV0aC9hdXRoLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDL0QsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBVTVELE1BQU0sT0FBTyxVQUFVOzs7O0lBQ3JCLE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFNBQVMsRUFBRTtnQkFDVCxHQUFHLFlBQVk7Z0JBQ2YsR0FBRyxZQUFZO2dCQUNmLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFO2FBQzdDO1NBQ0YsQ0FBQztJQUNKLENBQUM7OztZQWxCRixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osZ0JBQWdCO29CQUNoQixlQUFlO29CQUNmLFlBQVksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUM7aUJBQzNDO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb25maWcsIENvbmZpZ01vZHVsZSB9IGZyb20gJy4uL2NvbmZpZy9jb25maWcubW9kdWxlJztcbmltcG9ydCB7IEF1dGhDb25maWcgfSBmcm9tICcuL2NvbmZpZy9hdXRoLWNvbmZpZyc7XG5pbXBvcnQgeyBkZWZhdWx0QXV0aENvbmZpZyB9IGZyb20gJy4vY29uZmlnL2RlZmF1bHQtYXV0aC1jb25maWcnO1xuaW1wb3J0IHsgaW50ZXJjZXB0b3JzIH0gZnJvbSAnLi9odHRwLWludGVyY2VwdG9ycy9pbmRleCc7XG5pbXBvcnQgeyBBdXRoU2VydmljZXMgfSBmcm9tICcuL3NlcnZpY2VzL2luZGV4JztcbmltcG9ydCB7IEF1dGhTdG9yZU1vZHVsZSB9IGZyb20gJy4vc3RvcmUvYXV0aC1zdG9yZS5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgQXV0aFN0b3JlTW9kdWxlLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKGRlZmF1bHRBdXRoQ29uZmlnKSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQXV0aE1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8QXV0aE1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQXV0aE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAuLi5pbnRlcmNlcHRvcnMsXG4gICAgICAgIC4uLkF1dGhTZXJ2aWNlcyxcbiAgICAgICAgeyBwcm92aWRlOiBBdXRoQ29uZmlnLCB1c2VFeGlzdGluZzogQ29uZmlnIH0sXG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==
var AuthModule_1;
import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Config, provideDefaultConfig } from '../config/config.module';
import { AuthConfig } from './config/auth-config';
import { defaultAuthConfig } from './config/default-auth-config';
import { interceptors } from './http-interceptors/index';
import { AuthServices } from './services/index';
import { AuthStoreModule } from './store/auth-store.module';
let AuthModule = AuthModule_1 = class AuthModule {
    static forRoot() {
        return {
            ngModule: AuthModule_1,
            providers: [
                provideDefaultConfig(defaultAuthConfig),
                ...interceptors,
                ...AuthServices,
                { provide: AuthConfig, useExisting: Config },
            ],
        };
    }
};
AuthModule = AuthModule_1 = __decorate([
    NgModule({
        imports: [CommonModule, HttpClientModule, AuthStoreModule],
    })
], AuthModule);
export { AuthModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvYXV0aC9hdXRoLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsTUFBTSxFQUFFLG9CQUFvQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDdkUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBSzVELElBQWEsVUFBVSxrQkFBdkIsTUFBYSxVQUFVO0lBQ3JCLE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSxZQUFVO1lBQ3BCLFNBQVMsRUFBRTtnQkFDVCxvQkFBb0IsQ0FBQyxpQkFBaUIsQ0FBQztnQkFDdkMsR0FBRyxZQUFZO2dCQUNmLEdBQUcsWUFBWTtnQkFDZixFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRTthQUM3QztTQUNGLENBQUM7SUFDSixDQUFDO0NBQ0YsQ0FBQTtBQVpZLFVBQVU7SUFIdEIsUUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGdCQUFnQixFQUFFLGVBQWUsQ0FBQztLQUMzRCxDQUFDO0dBQ1csVUFBVSxDQVl0QjtTQVpZLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb25maWcsIHByb3ZpZGVEZWZhdWx0Q29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL2NvbmZpZy5tb2R1bGUnO1xuaW1wb3J0IHsgQXV0aENvbmZpZyB9IGZyb20gJy4vY29uZmlnL2F1dGgtY29uZmlnJztcbmltcG9ydCB7IGRlZmF1bHRBdXRoQ29uZmlnIH0gZnJvbSAnLi9jb25maWcvZGVmYXVsdC1hdXRoLWNvbmZpZyc7XG5pbXBvcnQgeyBpbnRlcmNlcHRvcnMgfSBmcm9tICcuL2h0dHAtaW50ZXJjZXB0b3JzL2luZGV4JztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlcyB9IGZyb20gJy4vc2VydmljZXMvaW5kZXgnO1xuaW1wb3J0IHsgQXV0aFN0b3JlTW9kdWxlIH0gZnJvbSAnLi9zdG9yZS9hdXRoLXN0b3JlLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEh0dHBDbGllbnRNb2R1bGUsIEF1dGhTdG9yZU1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIEF1dGhNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPEF1dGhNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEF1dGhNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgcHJvdmlkZURlZmF1bHRDb25maWcoZGVmYXVsdEF1dGhDb25maWcpLFxuICAgICAgICAuLi5pbnRlcmNlcHRvcnMsXG4gICAgICAgIC4uLkF1dGhTZXJ2aWNlcyxcbiAgICAgICAgeyBwcm92aWRlOiBBdXRoQ29uZmlnLCB1c2VFeGlzdGluZzogQ29uZmlnIH0sXG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==
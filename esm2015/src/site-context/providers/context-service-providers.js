import { APP_INITIALIZER } from '@angular/core';
import { ConfigInitializerService } from '../../config/config-initializer/config-initializer.service';
import { BaseSiteService } from '../facade/base-site.service';
import { CurrencyService } from '../facade/currency.service';
import { LanguageService } from '../facade/language.service';
import { SiteContextRoutesHandler } from '../services/site-context-routes-handler';
export function initializeContext(baseSiteService, langService, currService, configInit, siteContextRoutesHandler) {
    return () => {
        configInit.getStableConfig('context').then(() => {
            siteContextRoutesHandler.init().then(() => {
                baseSiteService.initialize();
                langService.initialize();
                currService.initialize();
            });
        });
    };
}
export const contextServiceProviders = [
    BaseSiteService,
    LanguageService,
    CurrencyService,
    {
        provide: APP_INITIALIZER,
        useFactory: initializeContext,
        deps: [
            BaseSiteService,
            LanguageService,
            CurrencyService,
            ConfigInitializerService,
            SiteContextRoutesHandler,
        ],
        multi: true,
    },
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dC1zZXJ2aWNlLXByb3ZpZGVycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL3NpdGUtY29udGV4dC9wcm92aWRlcnMvY29udGV4dC1zZXJ2aWNlLXByb3ZpZGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBQzFELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBQ3RHLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzdELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBRW5GLE1BQU0sVUFBVSxpQkFBaUIsQ0FDL0IsZUFBZ0MsRUFDaEMsV0FBNEIsRUFDNUIsV0FBNEIsRUFDNUIsVUFBb0MsRUFDcEMsd0JBQWtEO0lBRWxELE9BQU8sR0FBRyxFQUFFO1FBQ1YsVUFBVSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQzlDLHdCQUF3QixDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7Z0JBQ3hDLGVBQWUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztnQkFDN0IsV0FBVyxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUN6QixXQUFXLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDM0IsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQztBQUNKLENBQUM7QUFFRCxNQUFNLENBQUMsTUFBTSx1QkFBdUIsR0FBZTtJQUNqRCxlQUFlO0lBQ2YsZUFBZTtJQUNmLGVBQWU7SUFDZjtRQUNFLE9BQU8sRUFBRSxlQUFlO1FBQ3hCLFVBQVUsRUFBRSxpQkFBaUI7UUFDN0IsSUFBSSxFQUFFO1lBQ0osZUFBZTtZQUNmLGVBQWU7WUFDZixlQUFlO1lBQ2Ysd0JBQXdCO1lBQ3hCLHdCQUF3QjtTQUN6QjtRQUNELEtBQUssRUFBRSxJQUFJO0tBQ1o7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQVBQX0lOSVRJQUxJWkVSLCBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29uZmlnSW5pdGlhbGl6ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29uZmlnL2NvbmZpZy1pbml0aWFsaXplci9jb25maWctaW5pdGlhbGl6ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBCYXNlU2l0ZVNlcnZpY2UgfSBmcm9tICcuLi9mYWNhZGUvYmFzZS1zaXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ3VycmVuY3lTZXJ2aWNlIH0gZnJvbSAnLi4vZmFjYWRlL2N1cnJlbmN5LnNlcnZpY2UnO1xuaW1wb3J0IHsgTGFuZ3VhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vZmFjYWRlL2xhbmd1YWdlLnNlcnZpY2UnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRSb3V0ZXNIYW5kbGVyIH0gZnJvbSAnLi4vc2VydmljZXMvc2l0ZS1jb250ZXh0LXJvdXRlcy1oYW5kbGVyJztcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVDb250ZXh0KFxuICBiYXNlU2l0ZVNlcnZpY2U6IEJhc2VTaXRlU2VydmljZSxcbiAgbGFuZ1NlcnZpY2U6IExhbmd1YWdlU2VydmljZSxcbiAgY3VyclNlcnZpY2U6IEN1cnJlbmN5U2VydmljZSxcbiAgY29uZmlnSW5pdDogQ29uZmlnSW5pdGlhbGl6ZXJTZXJ2aWNlLFxuICBzaXRlQ29udGV4dFJvdXRlc0hhbmRsZXI6IFNpdGVDb250ZXh0Um91dGVzSGFuZGxlclxuKSB7XG4gIHJldHVybiAoKSA9PiB7XG4gICAgY29uZmlnSW5pdC5nZXRTdGFibGVDb25maWcoJ2NvbnRleHQnKS50aGVuKCgpID0+IHtcbiAgICAgIHNpdGVDb250ZXh0Um91dGVzSGFuZGxlci5pbml0KCkudGhlbigoKSA9PiB7XG4gICAgICAgIGJhc2VTaXRlU2VydmljZS5pbml0aWFsaXplKCk7XG4gICAgICAgIGxhbmdTZXJ2aWNlLmluaXRpYWxpemUoKTtcbiAgICAgICAgY3VyclNlcnZpY2UuaW5pdGlhbGl6ZSgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBjb250ZXh0U2VydmljZVByb3ZpZGVyczogUHJvdmlkZXJbXSA9IFtcbiAgQmFzZVNpdGVTZXJ2aWNlLFxuICBMYW5ndWFnZVNlcnZpY2UsXG4gIEN1cnJlbmN5U2VydmljZSxcbiAge1xuICAgIHByb3ZpZGU6IEFQUF9JTklUSUFMSVpFUixcbiAgICB1c2VGYWN0b3J5OiBpbml0aWFsaXplQ29udGV4dCxcbiAgICBkZXBzOiBbXG4gICAgICBCYXNlU2l0ZVNlcnZpY2UsXG4gICAgICBMYW5ndWFnZVNlcnZpY2UsXG4gICAgICBDdXJyZW5jeVNlcnZpY2UsXG4gICAgICBDb25maWdJbml0aWFsaXplclNlcnZpY2UsXG4gICAgICBTaXRlQ29udGV4dFJvdXRlc0hhbmRsZXIsXG4gICAgXSxcbiAgICBtdWx0aTogdHJ1ZSxcbiAgfSxcbl07XG4iXX0=
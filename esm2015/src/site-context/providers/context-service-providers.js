import { APP_INITIALIZER } from '@angular/core';
import { ConfigInitializerService } from '../../config/config-initializer/config-initializer.service';
import { BaseSiteService } from '../facade/base-site.service';
import { CurrencyService } from '../facade/currency.service';
import { LanguageService } from '../facade/language.service';
export function initializeContext(baseSiteService, langService, currService, configInit) {
    return () => {
        configInit.getStableConfig('context').then(() => {
            baseSiteService.initialize();
            langService.initialize();
            currService.initialize();
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
        ],
        multi: true,
    },
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dC1zZXJ2aWNlLXByb3ZpZGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zaXRlLWNvbnRleHQvcHJvdmlkZXJzL2NvbnRleHQtc2VydmljZS1wcm92aWRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGVBQWUsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUMxRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUN0RyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzdELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUU3RCxNQUFNLFVBQVUsaUJBQWlCLENBQy9CLGVBQWdDLEVBQ2hDLFdBQTRCLEVBQzVCLFdBQTRCLEVBQzVCLFVBQW9DO0lBRXBDLE9BQU8sR0FBRyxFQUFFO1FBQ1YsVUFBVSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQzlDLGVBQWUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUM3QixXQUFXLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDekIsV0FBVyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUVELE1BQU0sQ0FBQyxNQUFNLHVCQUF1QixHQUFlO0lBQ2pELGVBQWU7SUFDZixlQUFlO0lBQ2YsZUFBZTtJQUNmO1FBQ0UsT0FBTyxFQUFFLGVBQWU7UUFDeEIsVUFBVSxFQUFFLGlCQUFpQjtRQUM3QixJQUFJLEVBQUU7WUFDSixlQUFlO1lBQ2YsZUFBZTtZQUNmLGVBQWU7WUFDZix3QkFBd0I7U0FDekI7UUFDRCxLQUFLLEVBQUUsSUFBSTtLQUNaO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFQUF9JTklUSUFMSVpFUiwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbmZpZ0luaXRpYWxpemVyU2VydmljZSB9IGZyb20gJy4uLy4uL2NvbmZpZy9jb25maWctaW5pdGlhbGl6ZXIvY29uZmlnLWluaXRpYWxpemVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgQmFzZVNpdGVTZXJ2aWNlIH0gZnJvbSAnLi4vZmFjYWRlL2Jhc2Utc2l0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IEN1cnJlbmN5U2VydmljZSB9IGZyb20gJy4uL2ZhY2FkZS9jdXJyZW5jeS5zZXJ2aWNlJztcbmltcG9ydCB7IExhbmd1YWdlU2VydmljZSB9IGZyb20gJy4uL2ZhY2FkZS9sYW5ndWFnZS5zZXJ2aWNlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVDb250ZXh0KFxuICBiYXNlU2l0ZVNlcnZpY2U6IEJhc2VTaXRlU2VydmljZSxcbiAgbGFuZ1NlcnZpY2U6IExhbmd1YWdlU2VydmljZSxcbiAgY3VyclNlcnZpY2U6IEN1cnJlbmN5U2VydmljZSxcbiAgY29uZmlnSW5pdDogQ29uZmlnSW5pdGlhbGl6ZXJTZXJ2aWNlXG4pIHtcbiAgcmV0dXJuICgpID0+IHtcbiAgICBjb25maWdJbml0LmdldFN0YWJsZUNvbmZpZygnY29udGV4dCcpLnRoZW4oKCkgPT4ge1xuICAgICAgYmFzZVNpdGVTZXJ2aWNlLmluaXRpYWxpemUoKTtcbiAgICAgIGxhbmdTZXJ2aWNlLmluaXRpYWxpemUoKTtcbiAgICAgIGN1cnJTZXJ2aWNlLmluaXRpYWxpemUoKTtcbiAgICB9KTtcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IGNvbnRleHRTZXJ2aWNlUHJvdmlkZXJzOiBQcm92aWRlcltdID0gW1xuICBCYXNlU2l0ZVNlcnZpY2UsXG4gIExhbmd1YWdlU2VydmljZSxcbiAgQ3VycmVuY3lTZXJ2aWNlLFxuICB7XG4gICAgcHJvdmlkZTogQVBQX0lOSVRJQUxJWkVSLFxuICAgIHVzZUZhY3Rvcnk6IGluaXRpYWxpemVDb250ZXh0LFxuICAgIGRlcHM6IFtcbiAgICAgIEJhc2VTaXRlU2VydmljZSxcbiAgICAgIExhbmd1YWdlU2VydmljZSxcbiAgICAgIEN1cnJlbmN5U2VydmljZSxcbiAgICAgIENvbmZpZ0luaXRpYWxpemVyU2VydmljZSxcbiAgICBdLFxuICAgIG11bHRpOiB0cnVlLFxuICB9LFxuXTtcbiJdfQ==
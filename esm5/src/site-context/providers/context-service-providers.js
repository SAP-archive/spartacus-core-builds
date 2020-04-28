import { APP_INITIALIZER } from '@angular/core';
import { ConfigInitializerService } from '../../config/config-initializer/config-initializer.service';
import { BaseSiteService } from '../facade/base-site.service';
import { CurrencyService } from '../facade/currency.service';
import { LanguageService } from '../facade/language.service';
import { SiteContextRoutesHandler } from '../services/site-context-routes-handler';
export function initializeContext(baseSiteService, langService, currService, configInit, siteContextRoutesHandler) {
    return function () {
        configInit.getStableConfig('context').then(function () {
            siteContextRoutesHandler.init().then(function () {
                baseSiteService.initialize();
                langService.initialize();
                currService.initialize();
            });
        });
    };
}
export var contextServiceProviders = [
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dC1zZXJ2aWNlLXByb3ZpZGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zaXRlLWNvbnRleHQvcHJvdmlkZXJzL2NvbnRleHQtc2VydmljZS1wcm92aWRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGVBQWUsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUMxRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUN0RyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzdELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUVuRixNQUFNLFVBQVUsaUJBQWlCLENBQy9CLGVBQWdDLEVBQ2hDLFdBQTRCLEVBQzVCLFdBQTRCLEVBQzVCLFVBQW9DLEVBQ3BDLHdCQUFrRDtJQUVsRCxPQUFPO1FBQ0wsVUFBVSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDekMsd0JBQXdCLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDO2dCQUNuQyxlQUFlLENBQUMsVUFBVSxFQUFFLENBQUM7Z0JBQzdCLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQztnQkFDekIsV0FBVyxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQzNCLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUM7QUFDSixDQUFDO0FBRUQsTUFBTSxDQUFDLElBQU0sdUJBQXVCLEdBQWU7SUFDakQsZUFBZTtJQUNmLGVBQWU7SUFDZixlQUFlO0lBQ2Y7UUFDRSxPQUFPLEVBQUUsZUFBZTtRQUN4QixVQUFVLEVBQUUsaUJBQWlCO1FBQzdCLElBQUksRUFBRTtZQUNKLGVBQWU7WUFDZixlQUFlO1lBQ2YsZUFBZTtZQUNmLHdCQUF3QjtZQUN4Qix3QkFBd0I7U0FDekI7UUFDRCxLQUFLLEVBQUUsSUFBSTtLQUNaO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFQUF9JTklUSUFMSVpFUiwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbmZpZ0luaXRpYWxpemVyU2VydmljZSB9IGZyb20gJy4uLy4uL2NvbmZpZy9jb25maWctaW5pdGlhbGl6ZXIvY29uZmlnLWluaXRpYWxpemVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgQmFzZVNpdGVTZXJ2aWNlIH0gZnJvbSAnLi4vZmFjYWRlL2Jhc2Utc2l0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IEN1cnJlbmN5U2VydmljZSB9IGZyb20gJy4uL2ZhY2FkZS9jdXJyZW5jeS5zZXJ2aWNlJztcbmltcG9ydCB7IExhbmd1YWdlU2VydmljZSB9IGZyb20gJy4uL2ZhY2FkZS9sYW5ndWFnZS5zZXJ2aWNlJztcbmltcG9ydCB7IFNpdGVDb250ZXh0Um91dGVzSGFuZGxlciB9IGZyb20gJy4uL3NlcnZpY2VzL3NpdGUtY29udGV4dC1yb3V0ZXMtaGFuZGxlcic7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplQ29udGV4dChcbiAgYmFzZVNpdGVTZXJ2aWNlOiBCYXNlU2l0ZVNlcnZpY2UsXG4gIGxhbmdTZXJ2aWNlOiBMYW5ndWFnZVNlcnZpY2UsXG4gIGN1cnJTZXJ2aWNlOiBDdXJyZW5jeVNlcnZpY2UsXG4gIGNvbmZpZ0luaXQ6IENvbmZpZ0luaXRpYWxpemVyU2VydmljZSxcbiAgc2l0ZUNvbnRleHRSb3V0ZXNIYW5kbGVyOiBTaXRlQ29udGV4dFJvdXRlc0hhbmRsZXJcbikge1xuICByZXR1cm4gKCkgPT4ge1xuICAgIGNvbmZpZ0luaXQuZ2V0U3RhYmxlQ29uZmlnKCdjb250ZXh0JykudGhlbigoKSA9PiB7XG4gICAgICBzaXRlQ29udGV4dFJvdXRlc0hhbmRsZXIuaW5pdCgpLnRoZW4oKCkgPT4ge1xuICAgICAgICBiYXNlU2l0ZVNlcnZpY2UuaW5pdGlhbGl6ZSgpO1xuICAgICAgICBsYW5nU2VydmljZS5pbml0aWFsaXplKCk7XG4gICAgICAgIGN1cnJTZXJ2aWNlLmluaXRpYWxpemUoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xufVxuXG5leHBvcnQgY29uc3QgY29udGV4dFNlcnZpY2VQcm92aWRlcnM6IFByb3ZpZGVyW10gPSBbXG4gIEJhc2VTaXRlU2VydmljZSxcbiAgTGFuZ3VhZ2VTZXJ2aWNlLFxuICBDdXJyZW5jeVNlcnZpY2UsXG4gIHtcbiAgICBwcm92aWRlOiBBUFBfSU5JVElBTElaRVIsXG4gICAgdXNlRmFjdG9yeTogaW5pdGlhbGl6ZUNvbnRleHQsXG4gICAgZGVwczogW1xuICAgICAgQmFzZVNpdGVTZXJ2aWNlLFxuICAgICAgTGFuZ3VhZ2VTZXJ2aWNlLFxuICAgICAgQ3VycmVuY3lTZXJ2aWNlLFxuICAgICAgQ29uZmlnSW5pdGlhbGl6ZXJTZXJ2aWNlLFxuICAgICAgU2l0ZUNvbnRleHRSb3V0ZXNIYW5kbGVyLFxuICAgIF0sXG4gICAgbXVsdGk6IHRydWUsXG4gIH0sXG5dO1xuIl19
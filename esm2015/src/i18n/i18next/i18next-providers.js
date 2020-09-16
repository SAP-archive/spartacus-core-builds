import { HttpClient } from '@angular/common/http';
import { APP_INITIALIZER, Optional } from '@angular/core';
import { ConfigInitializerService } from '../../config/config-initializer/config-initializer.service';
import { LanguageService } from '../../site-context/facade/language.service';
import { SERVER_REQUEST_ORIGIN } from '../../ssr/ssr.providers';
import { i18nextInit } from './i18next-init';
const ɵ0 = i18nextInit;
export const i18nextProviders = [
    {
        provide: APP_INITIALIZER,
        useFactory: ɵ0,
        deps: [
            ConfigInitializerService,
            LanguageService,
            HttpClient,
            [new Optional(), SERVER_REQUEST_ORIGIN],
        ],
        multi: true,
    },
];
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bmV4dC1wcm92aWRlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3NyYy9pMThuL2kxOG5leHQvaTE4bmV4dC1wcm92aWRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUFZLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBQ3RHLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUM3RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7V0FLN0IsV0FBVztBQUgzQixNQUFNLENBQUMsTUFBTSxnQkFBZ0IsR0FBZTtJQUMxQztRQUNFLE9BQU8sRUFBRSxlQUFlO1FBQ3hCLFVBQVUsSUFBYTtRQUN2QixJQUFJLEVBQUU7WUFDSix3QkFBd0I7WUFDeEIsZUFBZTtZQUNmLFVBQVU7WUFDVixDQUFDLElBQUksUUFBUSxFQUFFLEVBQUUscUJBQXFCLENBQUM7U0FDeEM7UUFDRCxLQUFLLEVBQUUsSUFBSTtLQUNaO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBBUFBfSU5JVElBTElaRVIsIE9wdGlvbmFsLCBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29uZmlnSW5pdGlhbGl6ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29uZmlnL2NvbmZpZy1pbml0aWFsaXplci9jb25maWctaW5pdGlhbGl6ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBMYW5ndWFnZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaXRlLWNvbnRleHQvZmFjYWRlL2xhbmd1YWdlLnNlcnZpY2UnO1xuaW1wb3J0IHsgU0VSVkVSX1JFUVVFU1RfT1JJR0lOIH0gZnJvbSAnLi4vLi4vc3NyL3Nzci5wcm92aWRlcnMnO1xuaW1wb3J0IHsgaTE4bmV4dEluaXQgfSBmcm9tICcuL2kxOG5leHQtaW5pdCc7XG5cbmV4cG9ydCBjb25zdCBpMThuZXh0UHJvdmlkZXJzOiBQcm92aWRlcltdID0gW1xuICB7XG4gICAgcHJvdmlkZTogQVBQX0lOSVRJQUxJWkVSLFxuICAgIHVzZUZhY3Rvcnk6IGkxOG5leHRJbml0LFxuICAgIGRlcHM6IFtcbiAgICAgIENvbmZpZ0luaXRpYWxpemVyU2VydmljZSxcbiAgICAgIExhbmd1YWdlU2VydmljZSxcbiAgICAgIEh0dHBDbGllbnQsXG4gICAgICBbbmV3IE9wdGlvbmFsKCksIFNFUlZFUl9SRVFVRVNUX09SSUdJTl0sXG4gICAgXSxcbiAgICBtdWx0aTogdHJ1ZSxcbiAgfSxcbl07XG4iXX0=
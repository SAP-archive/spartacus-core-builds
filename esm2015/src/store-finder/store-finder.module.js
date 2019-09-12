/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { Config, ConfigModule } from '../config/config.module';
import { defaultStoreFinderConfig } from './config/default-store-finder-config';
import { StoreFinderConfig } from './config/store-finder-config';
import { StoreDataService } from './facade/store-data.service';
import { StoreFinderService } from './facade/store-finder.service';
import { ExternalJsFileLoader, GoogleMapRendererService, } from './service/index';
import { StoreFinderStoreModule } from './store/store-finder-store.module';
export class StoreFinderCoreModule {
}
StoreFinderCoreModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    ConfigModule.withConfig(defaultStoreFinderConfig),
                    StoreFinderStoreModule,
                ],
                providers: [
                    StoreFinderService,
                    StoreDataService,
                    GoogleMapRendererService,
                    ExternalJsFileLoader,
                    { provide: StoreFinderConfig, useExisting: Config },
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zdG9yZS1maW5kZXIvc3RvcmUtZmluZGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQy9ELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ25FLE9BQU8sRUFDTCxvQkFBb0IsRUFDcEIsd0JBQXdCLEdBQ3pCLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFlM0UsTUFBTSxPQUFPLHFCQUFxQjs7O1lBYmpDLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWSxDQUFDLFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQztvQkFDakQsc0JBQXNCO2lCQUN2QjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1Qsa0JBQWtCO29CQUNsQixnQkFBZ0I7b0JBQ2hCLHdCQUF3QjtvQkFDeEIsb0JBQW9CO29CQUNwQixFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFO2lCQUNwRDthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbmZpZywgQ29uZmlnTW9kdWxlIH0gZnJvbSAnLi4vY29uZmlnL2NvbmZpZy5tb2R1bGUnO1xuaW1wb3J0IHsgZGVmYXVsdFN0b3JlRmluZGVyQ29uZmlnIH0gZnJvbSAnLi9jb25maWcvZGVmYXVsdC1zdG9yZS1maW5kZXItY29uZmlnJztcbmltcG9ydCB7IFN0b3JlRmluZGVyQ29uZmlnIH0gZnJvbSAnLi9jb25maWcvc3RvcmUtZmluZGVyLWNvbmZpZyc7XG5pbXBvcnQgeyBTdG9yZURhdGFTZXJ2aWNlIH0gZnJvbSAnLi9mYWNhZGUvc3RvcmUtZGF0YS5zZXJ2aWNlJztcbmltcG9ydCB7IFN0b3JlRmluZGVyU2VydmljZSB9IGZyb20gJy4vZmFjYWRlL3N0b3JlLWZpbmRlci5zZXJ2aWNlJztcbmltcG9ydCB7XG4gIEV4dGVybmFsSnNGaWxlTG9hZGVyLFxuICBHb29nbGVNYXBSZW5kZXJlclNlcnZpY2UsXG59IGZyb20gJy4vc2VydmljZS9pbmRleCc7XG5pbXBvcnQgeyBTdG9yZUZpbmRlclN0b3JlTW9kdWxlIH0gZnJvbSAnLi9zdG9yZS9zdG9yZS1maW5kZXItc3RvcmUubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKGRlZmF1bHRTdG9yZUZpbmRlckNvbmZpZyksXG4gICAgU3RvcmVGaW5kZXJTdG9yZU1vZHVsZSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgU3RvcmVGaW5kZXJTZXJ2aWNlLFxuICAgIFN0b3JlRGF0YVNlcnZpY2UsXG4gICAgR29vZ2xlTWFwUmVuZGVyZXJTZXJ2aWNlLFxuICAgIEV4dGVybmFsSnNGaWxlTG9hZGVyLFxuICAgIHsgcHJvdmlkZTogU3RvcmVGaW5kZXJDb25maWcsIHVzZUV4aXN0aW5nOiBDb25maWcgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgU3RvcmVGaW5kZXJDb3JlTW9kdWxlIHt9XG4iXX0=
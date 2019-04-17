/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { StoreFinderStoreModule } from './store/store-finder-store.module';
import { StoreFinderService } from './facade/store-finder.service';
import { StoreDataService } from './facade/store-data.service';
import { GoogleMapRendererService, ExternalJsFileLoader, } from './service/index';
import { StoreFinderOccModule } from './occ/store-finder-occ.module';
import { ConfigModule } from '../config';
import { defaultStoreFinderConfig } from './config/default-store-finder-config';
import { StoreFinderConfig } from './config/store-finder-config';
const ɵ0 = defaultStoreFinderConfig;
export class StoreFinderCoreModule {
}
StoreFinderCoreModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    ConfigModule.withConfig(defaultStoreFinderConfig),
                    StoreFinderStoreModule,
                    StoreFinderOccModule,
                ],
                providers: [
                    StoreFinderService,
                    StoreDataService,
                    GoogleMapRendererService,
                    ExternalJsFileLoader,
                    { provide: StoreFinderConfig, useValue: ɵ0 },
                ],
            },] }
];
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zdG9yZS1maW5kZXIvc3RvcmUtZmluZGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNuRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMvRCxPQUFPLEVBQ0wsd0JBQXdCLEVBQ3hCLG9CQUFvQixHQUNyQixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDekMsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDaEYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sOEJBQThCLENBQUM7V0FhckIsd0JBQXdCO0FBR3BFLE1BQU0sT0FBTyxxQkFBcUI7OztZQWRqQyxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVksQ0FBQyxVQUFVLENBQUMsd0JBQXdCLENBQUM7b0JBQ2pELHNCQUFzQjtvQkFDdEIsb0JBQW9CO2lCQUNyQjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1Qsa0JBQWtCO29CQUNsQixnQkFBZ0I7b0JBQ2hCLHdCQUF3QjtvQkFDeEIsb0JBQW9CO29CQUNwQixFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxRQUFRLElBQTBCLEVBQUU7aUJBQ25FO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RvcmVGaW5kZXJTdG9yZU1vZHVsZSB9IGZyb20gJy4vc3RvcmUvc3RvcmUtZmluZGVyLXN0b3JlLm1vZHVsZSc7XG5pbXBvcnQgeyBTdG9yZUZpbmRlclNlcnZpY2UgfSBmcm9tICcuL2ZhY2FkZS9zdG9yZS1maW5kZXIuc2VydmljZSc7XG5pbXBvcnQgeyBTdG9yZURhdGFTZXJ2aWNlIH0gZnJvbSAnLi9mYWNhZGUvc3RvcmUtZGF0YS5zZXJ2aWNlJztcbmltcG9ydCB7XG4gIEdvb2dsZU1hcFJlbmRlcmVyU2VydmljZSxcbiAgRXh0ZXJuYWxKc0ZpbGVMb2FkZXIsXG59IGZyb20gJy4vc2VydmljZS9pbmRleCc7XG5pbXBvcnQgeyBTdG9yZUZpbmRlck9jY01vZHVsZSB9IGZyb20gJy4vb2NjL3N0b3JlLWZpbmRlci1vY2MubW9kdWxlJztcbmltcG9ydCB7IENvbmZpZ01vZHVsZSB9IGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgeyBkZWZhdWx0U3RvcmVGaW5kZXJDb25maWcgfSBmcm9tICcuL2NvbmZpZy9kZWZhdWx0LXN0b3JlLWZpbmRlci1jb25maWcnO1xuaW1wb3J0IHsgU3RvcmVGaW5kZXJDb25maWcgfSBmcm9tICcuL2NvbmZpZy9zdG9yZS1maW5kZXItY29uZmlnJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKGRlZmF1bHRTdG9yZUZpbmRlckNvbmZpZyksXG4gICAgU3RvcmVGaW5kZXJTdG9yZU1vZHVsZSxcbiAgICBTdG9yZUZpbmRlck9jY01vZHVsZSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgU3RvcmVGaW5kZXJTZXJ2aWNlLFxuICAgIFN0b3JlRGF0YVNlcnZpY2UsXG4gICAgR29vZ2xlTWFwUmVuZGVyZXJTZXJ2aWNlLFxuICAgIEV4dGVybmFsSnNGaWxlTG9hZGVyLFxuICAgIHsgcHJvdmlkZTogU3RvcmVGaW5kZXJDb25maWcsIHVzZVZhbHVlOiBkZWZhdWx0U3RvcmVGaW5kZXJDb25maWcgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgU3RvcmVGaW5kZXJDb3JlTW9kdWxlIHt9XG4iXX0=
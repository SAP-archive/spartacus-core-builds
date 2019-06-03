/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { Config, ConfigModule } from '../config/config.module';
import { defaultStoreFinderConfig } from './config/default-store-finder-config';
import { StoreFinderConfig } from './config/store-finder-config';
import { StoreDataService } from './facade/store-data.service';
import { StoreFinderService } from './facade/store-finder.service';
import { ExternalJsFileLoader, GoogleMapRendererService, } from './service/index';
import { StoreFinderStoreModule } from './store/store-finder-store.module';
var StoreFinderCoreModule = /** @class */ (function () {
    function StoreFinderCoreModule() {
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
    return StoreFinderCoreModule;
}());
export { StoreFinderCoreModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zdG9yZS1maW5kZXIvc3RvcmUtZmluZGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQy9ELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ25FLE9BQU8sRUFDTCxvQkFBb0IsRUFDcEIsd0JBQXdCLEdBQ3pCLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFM0U7SUFBQTtJQWFvQyxDQUFDOztnQkFicEMsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZLENBQUMsVUFBVSxDQUFDLHdCQUF3QixDQUFDO3dCQUNqRCxzQkFBc0I7cUJBQ3ZCO29CQUNELFNBQVMsRUFBRTt3QkFDVCxrQkFBa0I7d0JBQ2xCLGdCQUFnQjt3QkFDaEIsd0JBQXdCO3dCQUN4QixvQkFBb0I7d0JBQ3BCLEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUU7cUJBQ3BEO2lCQUNGOztJQUNtQyw0QkFBQztDQUFBLEFBYnJDLElBYXFDO1NBQXhCLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb25maWcsIENvbmZpZ01vZHVsZSB9IGZyb20gJy4uL2NvbmZpZy9jb25maWcubW9kdWxlJztcbmltcG9ydCB7IGRlZmF1bHRTdG9yZUZpbmRlckNvbmZpZyB9IGZyb20gJy4vY29uZmlnL2RlZmF1bHQtc3RvcmUtZmluZGVyLWNvbmZpZyc7XG5pbXBvcnQgeyBTdG9yZUZpbmRlckNvbmZpZyB9IGZyb20gJy4vY29uZmlnL3N0b3JlLWZpbmRlci1jb25maWcnO1xuaW1wb3J0IHsgU3RvcmVEYXRhU2VydmljZSB9IGZyb20gJy4vZmFjYWRlL3N0b3JlLWRhdGEuc2VydmljZSc7XG5pbXBvcnQgeyBTdG9yZUZpbmRlclNlcnZpY2UgfSBmcm9tICcuL2ZhY2FkZS9zdG9yZS1maW5kZXIuc2VydmljZSc7XG5pbXBvcnQge1xuICBFeHRlcm5hbEpzRmlsZUxvYWRlcixcbiAgR29vZ2xlTWFwUmVuZGVyZXJTZXJ2aWNlLFxufSBmcm9tICcuL3NlcnZpY2UvaW5kZXgnO1xuaW1wb3J0IHsgU3RvcmVGaW5kZXJTdG9yZU1vZHVsZSB9IGZyb20gJy4vc3RvcmUvc3RvcmUtZmluZGVyLXN0b3JlLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZyhkZWZhdWx0U3RvcmVGaW5kZXJDb25maWcpLFxuICAgIFN0b3JlRmluZGVyU3RvcmVNb2R1bGUsXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIFN0b3JlRmluZGVyU2VydmljZSxcbiAgICBTdG9yZURhdGFTZXJ2aWNlLFxuICAgIEdvb2dsZU1hcFJlbmRlcmVyU2VydmljZSxcbiAgICBFeHRlcm5hbEpzRmlsZUxvYWRlcixcbiAgICB7IHByb3ZpZGU6IFN0b3JlRmluZGVyQ29uZmlnLCB1c2VFeGlzdGluZzogQ29uZmlnIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFN0b3JlRmluZGVyQ29yZU1vZHVsZSB7fVxuIl19
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
var ɵ0 = defaultStoreFinderConfig;
var StoreFinderCoreModule = /** @class */ (function () {
    function StoreFinderCoreModule() {
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
    return StoreFinderCoreModule;
}());
export { StoreFinderCoreModule };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zdG9yZS1maW5kZXIvc3RvcmUtZmluZGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNuRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMvRCxPQUFPLEVBQ0wsd0JBQXdCLEVBQ3hCLG9CQUFvQixHQUNyQixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDekMsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDaEYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sOEJBQThCLENBQUM7U0FhckIsd0JBQXdCO0FBWHBFO0lBQUE7SUFjb0MsQ0FBQzs7Z0JBZHBDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWSxDQUFDLFVBQVUsQ0FBQyx3QkFBd0IsQ0FBQzt3QkFDakQsc0JBQXNCO3dCQUN0QixvQkFBb0I7cUJBQ3JCO29CQUNELFNBQVMsRUFBRTt3QkFDVCxrQkFBa0I7d0JBQ2xCLGdCQUFnQjt3QkFDaEIsd0JBQXdCO3dCQUN4QixvQkFBb0I7d0JBQ3BCLEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFFBQVEsSUFBMEIsRUFBRTtxQkFDbkU7aUJBQ0Y7O0lBQ21DLDRCQUFDO0NBQUEsQUFkckMsSUFjcUM7U0FBeEIscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0b3JlRmluZGVyU3RvcmVNb2R1bGUgfSBmcm9tICcuL3N0b3JlL3N0b3JlLWZpbmRlci1zdG9yZS5tb2R1bGUnO1xuaW1wb3J0IHsgU3RvcmVGaW5kZXJTZXJ2aWNlIH0gZnJvbSAnLi9mYWNhZGUvc3RvcmUtZmluZGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RvcmVEYXRhU2VydmljZSB9IGZyb20gJy4vZmFjYWRlL3N0b3JlLWRhdGEuc2VydmljZSc7XG5pbXBvcnQge1xuICBHb29nbGVNYXBSZW5kZXJlclNlcnZpY2UsXG4gIEV4dGVybmFsSnNGaWxlTG9hZGVyLFxufSBmcm9tICcuL3NlcnZpY2UvaW5kZXgnO1xuaW1wb3J0IHsgU3RvcmVGaW5kZXJPY2NNb2R1bGUgfSBmcm9tICcuL29jYy9zdG9yZS1maW5kZXItb2NjLm1vZHVsZSc7XG5pbXBvcnQgeyBDb25maWdNb2R1bGUgfSBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IHsgZGVmYXVsdFN0b3JlRmluZGVyQ29uZmlnIH0gZnJvbSAnLi9jb25maWcvZGVmYXVsdC1zdG9yZS1maW5kZXItY29uZmlnJztcbmltcG9ydCB7IFN0b3JlRmluZGVyQ29uZmlnIH0gZnJvbSAnLi9jb25maWcvc3RvcmUtZmluZGVyLWNvbmZpZyc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZyhkZWZhdWx0U3RvcmVGaW5kZXJDb25maWcpLFxuICAgIFN0b3JlRmluZGVyU3RvcmVNb2R1bGUsXG4gICAgU3RvcmVGaW5kZXJPY2NNb2R1bGUsXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIFN0b3JlRmluZGVyU2VydmljZSxcbiAgICBTdG9yZURhdGFTZXJ2aWNlLFxuICAgIEdvb2dsZU1hcFJlbmRlcmVyU2VydmljZSxcbiAgICBFeHRlcm5hbEpzRmlsZUxvYWRlcixcbiAgICB7IHByb3ZpZGU6IFN0b3JlRmluZGVyQ29uZmlnLCB1c2VWYWx1ZTogZGVmYXVsdFN0b3JlRmluZGVyQ29uZmlnIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFN0b3JlRmluZGVyQ29yZU1vZHVsZSB7fVxuIl19
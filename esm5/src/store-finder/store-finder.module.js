import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { Config, provideDefaultConfig } from '../config/config.module';
import { defaultStoreFinderConfig } from './config/default-store-finder-config';
import { StoreFinderConfig } from './config/store-finder-config';
import { StoreDataService } from './facade/store-data.service';
import { StoreFinderService } from './facade/store-finder.service';
import { ExternalJsFileLoader, GoogleMapRendererService, } from './service/index';
import { StoreFinderStoreModule } from './store/store-finder-store.module';
var StoreFinderCoreModule = /** @class */ (function () {
    function StoreFinderCoreModule() {
    }
    StoreFinderCoreModule = __decorate([
        NgModule({
            imports: [StoreFinderStoreModule],
            providers: [
                provideDefaultConfig(defaultStoreFinderConfig),
                StoreFinderService,
                StoreDataService,
                GoogleMapRendererService,
                ExternalJsFileLoader,
                { provide: StoreFinderConfig, useExisting: Config },
            ],
        })
    ], StoreFinderCoreModule);
    return StoreFinderCoreModule;
}());
export { StoreFinderCoreModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zdG9yZS1maW5kZXIvc3RvcmUtZmluZGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsTUFBTSxFQUFFLG9CQUFvQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDdkUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDaEYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDakUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDbkUsT0FBTyxFQUNMLG9CQUFvQixFQUNwQix3QkFBd0IsR0FDekIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQWEzRTtJQUFBO0lBQW9DLENBQUM7SUFBeEIscUJBQXFCO1FBWGpDLFFBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRSxDQUFDLHNCQUFzQixDQUFDO1lBQ2pDLFNBQVMsRUFBRTtnQkFDVCxvQkFBb0IsQ0FBQyx3QkFBd0IsQ0FBQztnQkFDOUMsa0JBQWtCO2dCQUNsQixnQkFBZ0I7Z0JBQ2hCLHdCQUF3QjtnQkFDeEIsb0JBQW9CO2dCQUNwQixFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFO2FBQ3BEO1NBQ0YsQ0FBQztPQUNXLHFCQUFxQixDQUFHO0lBQUQsNEJBQUM7Q0FBQSxBQUFyQyxJQUFxQztTQUF4QixxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29uZmlnLCBwcm92aWRlRGVmYXVsdENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9jb25maWcubW9kdWxlJztcbmltcG9ydCB7IGRlZmF1bHRTdG9yZUZpbmRlckNvbmZpZyB9IGZyb20gJy4vY29uZmlnL2RlZmF1bHQtc3RvcmUtZmluZGVyLWNvbmZpZyc7XG5pbXBvcnQgeyBTdG9yZUZpbmRlckNvbmZpZyB9IGZyb20gJy4vY29uZmlnL3N0b3JlLWZpbmRlci1jb25maWcnO1xuaW1wb3J0IHsgU3RvcmVEYXRhU2VydmljZSB9IGZyb20gJy4vZmFjYWRlL3N0b3JlLWRhdGEuc2VydmljZSc7XG5pbXBvcnQgeyBTdG9yZUZpbmRlclNlcnZpY2UgfSBmcm9tICcuL2ZhY2FkZS9zdG9yZS1maW5kZXIuc2VydmljZSc7XG5pbXBvcnQge1xuICBFeHRlcm5hbEpzRmlsZUxvYWRlcixcbiAgR29vZ2xlTWFwUmVuZGVyZXJTZXJ2aWNlLFxufSBmcm9tICcuL3NlcnZpY2UvaW5kZXgnO1xuaW1wb3J0IHsgU3RvcmVGaW5kZXJTdG9yZU1vZHVsZSB9IGZyb20gJy4vc3RvcmUvc3RvcmUtZmluZGVyLXN0b3JlLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtTdG9yZUZpbmRlclN0b3JlTW9kdWxlXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgcHJvdmlkZURlZmF1bHRDb25maWcoZGVmYXVsdFN0b3JlRmluZGVyQ29uZmlnKSxcbiAgICBTdG9yZUZpbmRlclNlcnZpY2UsXG4gICAgU3RvcmVEYXRhU2VydmljZSxcbiAgICBHb29nbGVNYXBSZW5kZXJlclNlcnZpY2UsXG4gICAgRXh0ZXJuYWxKc0ZpbGVMb2FkZXIsXG4gICAgeyBwcm92aWRlOiBTdG9yZUZpbmRlckNvbmZpZywgdXNlRXhpc3Rpbmc6IENvbmZpZyB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBTdG9yZUZpbmRlckNvcmVNb2R1bGUge31cbiJdfQ==
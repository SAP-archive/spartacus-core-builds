import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { provideDefaultConfig } from '../config/config.module';
import { defaultStoreFinderConfig } from './config/default-store-finder-config';
import { StoreFinderStoreModule } from './store/store-finder-store.module';
var StoreFinderCoreModule = /** @class */ (function () {
    function StoreFinderCoreModule() {
    }
    StoreFinderCoreModule = __decorate([
        NgModule({
            imports: [StoreFinderStoreModule],
            providers: [provideDefaultConfig(defaultStoreFinderConfig)],
        })
    ], StoreFinderCoreModule);
    return StoreFinderCoreModule;
}());
export { StoreFinderCoreModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zdG9yZS1maW5kZXIvc3RvcmUtZmluZGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUNoRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQU0zRTtJQUFBO0lBQW9DLENBQUM7SUFBeEIscUJBQXFCO1FBSmpDLFFBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRSxDQUFDLHNCQUFzQixDQUFDO1lBQ2pDLFNBQVMsRUFBRSxDQUFDLG9CQUFvQixDQUFDLHdCQUF3QixDQUFDLENBQUM7U0FDNUQsQ0FBQztPQUNXLHFCQUFxQixDQUFHO0lBQUQsNEJBQUM7Q0FBQSxBQUFyQyxJQUFxQztTQUF4QixxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgcHJvdmlkZURlZmF1bHRDb25maWcgfSBmcm9tICcuLi9jb25maWcvY29uZmlnLm1vZHVsZSc7XG5pbXBvcnQgeyBkZWZhdWx0U3RvcmVGaW5kZXJDb25maWcgfSBmcm9tICcuL2NvbmZpZy9kZWZhdWx0LXN0b3JlLWZpbmRlci1jb25maWcnO1xuaW1wb3J0IHsgU3RvcmVGaW5kZXJTdG9yZU1vZHVsZSB9IGZyb20gJy4vc3RvcmUvc3RvcmUtZmluZGVyLXN0b3JlLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtTdG9yZUZpbmRlclN0b3JlTW9kdWxlXSxcbiAgcHJvdmlkZXJzOiBbcHJvdmlkZURlZmF1bHRDb25maWcoZGVmYXVsdFN0b3JlRmluZGVyQ29uZmlnKV0sXG59KVxuZXhwb3J0IGNsYXNzIFN0b3JlRmluZGVyQ29yZU1vZHVsZSB7fVxuIl19
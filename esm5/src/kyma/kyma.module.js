import { __decorate, __read, __spread } from "tslib";
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { provideDefaultConfig } from '../config/config.module';
import { defaultKymaConfig } from './config/default-kyma-config';
import { KymaServices } from './services/index';
import { KymaStoreModule } from './store/kyma-store.module';
var KymaModule = /** @class */ (function () {
    function KymaModule() {
    }
    KymaModule = __decorate([
        NgModule({
            imports: [CommonModule, HttpClientModule, KymaStoreModule],
            providers: __spread([provideDefaultConfig(defaultKymaConfig)], KymaServices),
        })
    ], KymaModule);
    return KymaModule;
}());
export { KymaModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia3ltYS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMva3ltYS9reW1hLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDakUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQU01RDtJQUFBO0lBQXlCLENBQUM7SUFBYixVQUFVO1FBSnRCLFFBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxnQkFBZ0IsRUFBRSxlQUFlLENBQUM7WUFDMUQsU0FBUyxZQUFHLG9CQUFvQixDQUFDLGlCQUFpQixDQUFDLEdBQUssWUFBWSxDQUFDO1NBQ3RFLENBQUM7T0FDVyxVQUFVLENBQUc7SUFBRCxpQkFBQztDQUFBLEFBQTFCLElBQTBCO1NBQWIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHByb3ZpZGVEZWZhdWx0Q29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL2NvbmZpZy5tb2R1bGUnO1xuaW1wb3J0IHsgZGVmYXVsdEt5bWFDb25maWcgfSBmcm9tICcuL2NvbmZpZy9kZWZhdWx0LWt5bWEtY29uZmlnJztcbmltcG9ydCB7IEt5bWFTZXJ2aWNlcyB9IGZyb20gJy4vc2VydmljZXMvaW5kZXgnO1xuaW1wb3J0IHsgS3ltYVN0b3JlTW9kdWxlIH0gZnJvbSAnLi9zdG9yZS9reW1hLXN0b3JlLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEh0dHBDbGllbnRNb2R1bGUsIEt5bWFTdG9yZU1vZHVsZV0sXG4gIHByb3ZpZGVyczogW3Byb3ZpZGVEZWZhdWx0Q29uZmlnKGRlZmF1bHRLeW1hQ29uZmlnKSwgLi4uS3ltYVNlcnZpY2VzXSxcbn0pXG5leHBvcnQgY2xhc3MgS3ltYU1vZHVsZSB7fVxuIl19
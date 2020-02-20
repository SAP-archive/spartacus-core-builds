import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Config, ConfigModule } from '../config/config.module';
import { defaultKymaConfig } from './config/default-kyma-config';
import { KymaConfig } from './config/kyma-config';
import { KymaServices } from './services/index';
import { KymaStoreModule } from './store/kyma-store.module';
let KymaModule = class KymaModule {
};
KymaModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            HttpClientModule,
            KymaStoreModule,
            ConfigModule.withConfig(defaultKymaConfig),
        ],
        providers: [...KymaServices, { provide: KymaConfig, useExisting: Config }],
    })
], KymaModule);
export { KymaModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia3ltYS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMva3ltYS9reW1hLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQVc1RCxJQUFhLFVBQVUsR0FBdkIsTUFBYSxVQUFVO0NBQUcsQ0FBQTtBQUFiLFVBQVU7SUFUdEIsUUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AsWUFBWTtZQUNaLGdCQUFnQjtZQUNoQixlQUFlO1lBQ2YsWUFBWSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQztTQUMzQztRQUNELFNBQVMsRUFBRSxDQUFDLEdBQUcsWUFBWSxFQUFFLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLENBQUM7S0FDM0UsQ0FBQztHQUNXLFVBQVUsQ0FBRztTQUFiLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb25maWcsIENvbmZpZ01vZHVsZSB9IGZyb20gJy4uL2NvbmZpZy9jb25maWcubW9kdWxlJztcbmltcG9ydCB7IGRlZmF1bHRLeW1hQ29uZmlnIH0gZnJvbSAnLi9jb25maWcvZGVmYXVsdC1reW1hLWNvbmZpZyc7XG5pbXBvcnQgeyBLeW1hQ29uZmlnIH0gZnJvbSAnLi9jb25maWcva3ltYS1jb25maWcnO1xuaW1wb3J0IHsgS3ltYVNlcnZpY2VzIH0gZnJvbSAnLi9zZXJ2aWNlcy9pbmRleCc7XG5pbXBvcnQgeyBLeW1hU3RvcmVNb2R1bGUgfSBmcm9tICcuL3N0b3JlL2t5bWEtc3RvcmUubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgIEt5bWFTdG9yZU1vZHVsZSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZyhkZWZhdWx0S3ltYUNvbmZpZyksXG4gIF0sXG4gIHByb3ZpZGVyczogWy4uLkt5bWFTZXJ2aWNlcywgeyBwcm92aWRlOiBLeW1hQ29uZmlnLCB1c2VFeGlzdGluZzogQ29uZmlnIH1dLFxufSlcbmV4cG9ydCBjbGFzcyBLeW1hTW9kdWxlIHt9XG4iXX0=
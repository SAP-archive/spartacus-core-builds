import { __decorate, __read, __spread } from "tslib";
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Config, provideDefaultConfig } from '../config/config.module';
import { defaultKymaConfig } from './config/default-kyma-config';
import { KymaConfig } from './config/kyma-config';
import { KymaServices } from './services/index';
import { KymaStoreModule } from './store/kyma-store.module';
var KymaModule = /** @class */ (function () {
    function KymaModule() {
    }
    KymaModule = __decorate([
        NgModule({
            imports: [CommonModule, HttpClientModule, KymaStoreModule],
            providers: __spread([
                provideDefaultConfig(defaultKymaConfig)
            ], KymaServices, [
                { provide: KymaConfig, useExisting: Config },
            ]),
        })
    ], KymaModule);
    return KymaModule;
}());
export { KymaModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia3ltYS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMva3ltYS9reW1hLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLE1BQU0sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBVTVEO0lBQUE7SUFBeUIsQ0FBQztJQUFiLFVBQVU7UUFSdEIsUUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGdCQUFnQixFQUFFLGVBQWUsQ0FBQztZQUMxRCxTQUFTO2dCQUNQLG9CQUFvQixDQUFDLGlCQUFpQixDQUFDO2VBQ3BDLFlBQVk7Z0JBQ2YsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUU7Y0FDN0M7U0FDRixDQUFDO09BQ1csVUFBVSxDQUFHO0lBQUQsaUJBQUM7Q0FBQSxBQUExQixJQUEwQjtTQUFiLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb25maWcsIHByb3ZpZGVEZWZhdWx0Q29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL2NvbmZpZy5tb2R1bGUnO1xuaW1wb3J0IHsgZGVmYXVsdEt5bWFDb25maWcgfSBmcm9tICcuL2NvbmZpZy9kZWZhdWx0LWt5bWEtY29uZmlnJztcbmltcG9ydCB7IEt5bWFDb25maWcgfSBmcm9tICcuL2NvbmZpZy9reW1hLWNvbmZpZyc7XG5pbXBvcnQgeyBLeW1hU2VydmljZXMgfSBmcm9tICcuL3NlcnZpY2VzL2luZGV4JztcbmltcG9ydCB7IEt5bWFTdG9yZU1vZHVsZSB9IGZyb20gJy4vc3RvcmUva3ltYS1zdG9yZS5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBIdHRwQ2xpZW50TW9kdWxlLCBLeW1hU3RvcmVNb2R1bGVdLFxuICBwcm92aWRlcnM6IFtcbiAgICBwcm92aWRlRGVmYXVsdENvbmZpZyhkZWZhdWx0S3ltYUNvbmZpZyksXG4gICAgLi4uS3ltYVNlcnZpY2VzLFxuICAgIHsgcHJvdmlkZTogS3ltYUNvbmZpZywgdXNlRXhpc3Rpbmc6IENvbmZpZyB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBLeW1hTW9kdWxlIHt9XG4iXX0=
import { __decorate, __read, __spread } from "tslib";
import { NgModule } from '@angular/core';
import { TranslatePipe } from './translate.pipe';
import { i18nextProviders } from './i18next/i18next-providers';
import { defaultI18nConfig } from './config/default-i18n-config';
import { I18nConfig } from './config/i18n-config';
import { TranslationService } from './translation.service';
import { provideConfig, Config } from '../config/config.module';
import { I18nextTranslationService } from './i18next/i18next-translation.service';
import { CxDatePipe } from './date.pipe';
import { TranslationChunkService } from './translation-chunk.service';
var I18nModule = /** @class */ (function () {
    function I18nModule() {
    }
    I18nModule_1 = I18nModule;
    I18nModule.forRoot = function () {
        return {
            ngModule: I18nModule_1,
            providers: __spread([
                provideConfig(defaultI18nConfig),
                { provide: I18nConfig, useExisting: Config },
                { provide: TranslationService, useClass: I18nextTranslationService },
                TranslationChunkService
            ], i18nextProviders),
        };
    };
    var I18nModule_1;
    I18nModule = I18nModule_1 = __decorate([
        NgModule({
            declarations: [TranslatePipe, CxDatePipe],
            exports: [TranslatePipe, CxDatePipe],
        })
    ], I18nModule);
    return I18nModule;
}());
export { I18nModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvaTE4bi9pMThuLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDekMsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFNdEU7SUFBQTtJQWFBLENBQUM7bUJBYlksVUFBVTtJQUNkLGtCQUFPLEdBQWQ7UUFDRSxPQUFPO1lBQ0wsUUFBUSxFQUFFLFlBQVU7WUFDcEIsU0FBUztnQkFDUCxhQUFhLENBQUMsaUJBQWlCLENBQUM7Z0JBQ2hDLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFO2dCQUM1QyxFQUFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxRQUFRLEVBQUUseUJBQXlCLEVBQUU7Z0JBQ3BFLHVCQUF1QjtlQUNwQixnQkFBZ0IsQ0FDcEI7U0FDRixDQUFDO0lBQ0osQ0FBQzs7SUFaVSxVQUFVO1FBSnRCLFFBQVEsQ0FBQztZQUNSLFlBQVksRUFBRSxDQUFDLGFBQWEsRUFBRSxVQUFVLENBQUM7WUFDekMsT0FBTyxFQUFFLENBQUMsYUFBYSxFQUFFLFVBQVUsQ0FBQztTQUNyQyxDQUFDO09BQ1csVUFBVSxDQWF0QjtJQUFELGlCQUFDO0NBQUEsQUFiRCxJQWFDO1NBYlksVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGVQaXBlIH0gZnJvbSAnLi90cmFuc2xhdGUucGlwZSc7XG5pbXBvcnQgeyBpMThuZXh0UHJvdmlkZXJzIH0gZnJvbSAnLi9pMThuZXh0L2kxOG5leHQtcHJvdmlkZXJzJztcbmltcG9ydCB7IGRlZmF1bHRJMThuQ29uZmlnIH0gZnJvbSAnLi9jb25maWcvZGVmYXVsdC1pMThuLWNvbmZpZyc7XG5pbXBvcnQgeyBJMThuQ29uZmlnIH0gZnJvbSAnLi9jb25maWcvaTE4bi1jb25maWcnO1xuaW1wb3J0IHsgVHJhbnNsYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi90cmFuc2xhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IHByb3ZpZGVDb25maWcsIENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9jb25maWcubW9kdWxlJztcbmltcG9ydCB7IEkxOG5leHRUcmFuc2xhdGlvblNlcnZpY2UgfSBmcm9tICcuL2kxOG5leHQvaTE4bmV4dC10cmFuc2xhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IEN4RGF0ZVBpcGUgfSBmcm9tICcuL2RhdGUucGlwZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGlvbkNodW5rU2VydmljZSB9IGZyb20gJy4vdHJhbnNsYXRpb24tY2h1bmsuc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1RyYW5zbGF0ZVBpcGUsIEN4RGF0ZVBpcGVdLFxuICBleHBvcnRzOiBbVHJhbnNsYXRlUGlwZSwgQ3hEYXRlUGlwZV0sXG59KVxuZXhwb3J0IGNsYXNzIEkxOG5Nb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPEkxOG5Nb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEkxOG5Nb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgcHJvdmlkZUNvbmZpZyhkZWZhdWx0STE4bkNvbmZpZyksXG4gICAgICAgIHsgcHJvdmlkZTogSTE4bkNvbmZpZywgdXNlRXhpc3Rpbmc6IENvbmZpZyB9LFxuICAgICAgICB7IHByb3ZpZGU6IFRyYW5zbGF0aW9uU2VydmljZSwgdXNlQ2xhc3M6IEkxOG5leHRUcmFuc2xhdGlvblNlcnZpY2UgfSxcbiAgICAgICAgVHJhbnNsYXRpb25DaHVua1NlcnZpY2UsXG4gICAgICAgIC4uLmkxOG5leHRQcm92aWRlcnMsXG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==
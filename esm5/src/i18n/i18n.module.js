import { __decorate, __read, __spread } from "tslib";
import { NgModule } from '@angular/core';
import { TranslatePipe } from './translate.pipe';
import { i18nextProviders } from './i18next/i18next-providers';
import { defaultI18nConfig } from './config/default-i18n-config';
import { TranslationService } from './translation.service';
import { provideDefaultConfig } from '../config/config.module';
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
                provideDefaultConfig(defaultI18nConfig),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvaTE4bi9pMThuLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzNELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQy9ELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDekMsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFNdEU7SUFBQTtJQVlBLENBQUM7bUJBWlksVUFBVTtJQUNkLGtCQUFPLEdBQWQ7UUFDRSxPQUFPO1lBQ0wsUUFBUSxFQUFFLFlBQVU7WUFDcEIsU0FBUztnQkFDUCxvQkFBb0IsQ0FBQyxpQkFBaUIsQ0FBQztnQkFDdkMsRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsUUFBUSxFQUFFLHlCQUF5QixFQUFFO2dCQUNwRSx1QkFBdUI7ZUFDcEIsZ0JBQWdCLENBQ3BCO1NBQ0YsQ0FBQztJQUNKLENBQUM7O0lBWFUsVUFBVTtRQUp0QixRQUFRLENBQUM7WUFDUixZQUFZLEVBQUUsQ0FBQyxhQUFhLEVBQUUsVUFBVSxDQUFDO1lBQ3pDLE9BQU8sRUFBRSxDQUFDLGFBQWEsRUFBRSxVQUFVLENBQUM7U0FDckMsQ0FBQztPQUNXLFVBQVUsQ0FZdEI7SUFBRCxpQkFBQztDQUFBLEFBWkQsSUFZQztTQVpZLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVHJhbnNsYXRlUGlwZSB9IGZyb20gJy4vdHJhbnNsYXRlLnBpcGUnO1xuaW1wb3J0IHsgaTE4bmV4dFByb3ZpZGVycyB9IGZyb20gJy4vaTE4bmV4dC9pMThuZXh0LXByb3ZpZGVycyc7XG5pbXBvcnQgeyBkZWZhdWx0STE4bkNvbmZpZyB9IGZyb20gJy4vY29uZmlnL2RlZmF1bHQtaTE4bi1jb25maWcnO1xuaW1wb3J0IHsgVHJhbnNsYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi90cmFuc2xhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IHByb3ZpZGVEZWZhdWx0Q29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL2NvbmZpZy5tb2R1bGUnO1xuaW1wb3J0IHsgSTE4bmV4dFRyYW5zbGF0aW9uU2VydmljZSB9IGZyb20gJy4vaTE4bmV4dC9pMThuZXh0LXRyYW5zbGF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ3hEYXRlUGlwZSB9IGZyb20gJy4vZGF0ZS5waXBlJztcbmltcG9ydCB7IFRyYW5zbGF0aW9uQ2h1bmtTZXJ2aWNlIH0gZnJvbSAnLi90cmFuc2xhdGlvbi1jaHVuay5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbVHJhbnNsYXRlUGlwZSwgQ3hEYXRlUGlwZV0sXG4gIGV4cG9ydHM6IFtUcmFuc2xhdGVQaXBlLCBDeERhdGVQaXBlXSxcbn0pXG5leHBvcnQgY2xhc3MgSTE4bk1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8STE4bk1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogSTE4bk1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBwcm92aWRlRGVmYXVsdENvbmZpZyhkZWZhdWx0STE4bkNvbmZpZyksXG4gICAgICAgIHsgcHJvdmlkZTogVHJhbnNsYXRpb25TZXJ2aWNlLCB1c2VDbGFzczogSTE4bmV4dFRyYW5zbGF0aW9uU2VydmljZSB9LFxuICAgICAgICBUcmFuc2xhdGlvbkNodW5rU2VydmljZSxcbiAgICAgICAgLi4uaTE4bmV4dFByb3ZpZGVycyxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19
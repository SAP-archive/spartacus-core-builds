import { __decorate, __read, __spread } from "tslib";
import { NgModule } from '@angular/core';
import { provideDefaultConfig } from '../config/config.module';
import { defaultI18nConfig } from './config/default-i18n-config';
import { CxDatePipe } from './date.pipe';
import { i18nextProviders } from './i18next/i18next-providers';
import { I18nextTranslationService } from './i18next/i18next-translation.service';
import { TranslatePipe } from './translate.pipe';
import { TranslationService } from './translation.service';
var I18nModule = /** @class */ (function () {
    function I18nModule() {
    }
    I18nModule_1 = I18nModule;
    I18nModule.forRoot = function () {
        return {
            ngModule: I18nModule_1,
            providers: __spread([
                provideDefaultConfig(defaultI18nConfig),
                { provide: TranslationService, useExisting: I18nextTranslationService }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvaTE4bi9pMThuLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDakUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN6QyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMvRCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUNsRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFNM0Q7SUFBQTtJQVdBLENBQUM7bUJBWFksVUFBVTtJQUNkLGtCQUFPLEdBQWQ7UUFDRSxPQUFPO1lBQ0wsUUFBUSxFQUFFLFlBQVU7WUFDcEIsU0FBUztnQkFDUCxvQkFBb0IsQ0FBQyxpQkFBaUIsQ0FBQztnQkFDdkMsRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsV0FBVyxFQUFFLHlCQUF5QixFQUFFO2VBQ3BFLGdCQUFnQixDQUNwQjtTQUNGLENBQUM7SUFDSixDQUFDOztJQVZVLFVBQVU7UUFKdEIsUUFBUSxDQUFDO1lBQ1IsWUFBWSxFQUFFLENBQUMsYUFBYSxFQUFFLFVBQVUsQ0FBQztZQUN6QyxPQUFPLEVBQUUsQ0FBQyxhQUFhLEVBQUUsVUFBVSxDQUFDO1NBQ3JDLENBQUM7T0FDVyxVQUFVLENBV3RCO0lBQUQsaUJBQUM7Q0FBQSxBQVhELElBV0M7U0FYWSxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHByb3ZpZGVEZWZhdWx0Q29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL2NvbmZpZy5tb2R1bGUnO1xuaW1wb3J0IHsgZGVmYXVsdEkxOG5Db25maWcgfSBmcm9tICcuL2NvbmZpZy9kZWZhdWx0LWkxOG4tY29uZmlnJztcbmltcG9ydCB7IEN4RGF0ZVBpcGUgfSBmcm9tICcuL2RhdGUucGlwZSc7XG5pbXBvcnQgeyBpMThuZXh0UHJvdmlkZXJzIH0gZnJvbSAnLi9pMThuZXh0L2kxOG5leHQtcHJvdmlkZXJzJztcbmltcG9ydCB7IEkxOG5leHRUcmFuc2xhdGlvblNlcnZpY2UgfSBmcm9tICcuL2kxOG5leHQvaTE4bmV4dC10cmFuc2xhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IFRyYW5zbGF0ZVBpcGUgfSBmcm9tICcuL3RyYW5zbGF0ZS5waXBlJztcbmltcG9ydCB7IFRyYW5zbGF0aW9uU2VydmljZSB9IGZyb20gJy4vdHJhbnNsYXRpb24uc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1RyYW5zbGF0ZVBpcGUsIEN4RGF0ZVBpcGVdLFxuICBleHBvcnRzOiBbVHJhbnNsYXRlUGlwZSwgQ3hEYXRlUGlwZV0sXG59KVxuZXhwb3J0IGNsYXNzIEkxOG5Nb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPEkxOG5Nb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEkxOG5Nb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgcHJvdmlkZURlZmF1bHRDb25maWcoZGVmYXVsdEkxOG5Db25maWcpLFxuICAgICAgICB7IHByb3ZpZGU6IFRyYW5zbGF0aW9uU2VydmljZSwgdXNlRXhpc3Rpbmc6IEkxOG5leHRUcmFuc2xhdGlvblNlcnZpY2UgfSxcbiAgICAgICAgLi4uaTE4bmV4dFByb3ZpZGVycyxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19
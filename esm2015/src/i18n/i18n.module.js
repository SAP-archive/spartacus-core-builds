/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { TranslatePipe } from './translate.pipe';
import { i18nextProviders } from './i18next/i18next-providers';
import { defaultI18nConfig } from './config/default-i18n-config';
import { I18nConfig } from './config/i18n-config';
import { TranslationService } from './translation.service';
import { provideConfig, Config } from '../config/config.module';
import { I18nextTranslationService } from './i18next/i18next-translation.service';
import { DatePipe } from './date.pipe';
import { TranslationNamespaceService } from './translation-namespace.service';
export class I18nModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: I18nModule,
            providers: [
                provideConfig(defaultI18nConfig),
                { provide: I18nConfig, useExisting: Config },
                { provide: TranslationService, useClass: I18nextTranslationService },
                TranslationNamespaceService,
                ...i18nextProviders,
            ],
        };
    }
}
I18nModule.decorators = [
    { type: NgModule, args: [{
                declarations: [TranslatePipe, DatePipe],
                exports: [TranslatePipe, DatePipe],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvaTE4bi9pMThuLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDdkMsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFNOUUsTUFBTSxPQUFPLFVBQVU7Ozs7SUFDckIsTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPO1lBQ0wsUUFBUSxFQUFFLFVBQVU7WUFDcEIsU0FBUyxFQUFFO2dCQUNULGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQztnQkFDaEMsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUU7Z0JBQzVDLEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFFBQVEsRUFBRSx5QkFBeUIsRUFBRTtnQkFDcEUsMkJBQTJCO2dCQUMzQixHQUFHLGdCQUFnQjthQUNwQjtTQUNGLENBQUM7SUFDSixDQUFDOzs7WUFoQkYsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUM7Z0JBQ3ZDLE9BQU8sRUFBRSxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUM7YUFDbkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVHJhbnNsYXRlUGlwZSB9IGZyb20gJy4vdHJhbnNsYXRlLnBpcGUnO1xuaW1wb3J0IHsgaTE4bmV4dFByb3ZpZGVycyB9IGZyb20gJy4vaTE4bmV4dC9pMThuZXh0LXByb3ZpZGVycyc7XG5pbXBvcnQgeyBkZWZhdWx0STE4bkNvbmZpZyB9IGZyb20gJy4vY29uZmlnL2RlZmF1bHQtaTE4bi1jb25maWcnO1xuaW1wb3J0IHsgSTE4bkNvbmZpZyB9IGZyb20gJy4vY29uZmlnL2kxOG4tY29uZmlnJztcbmltcG9ydCB7IFRyYW5zbGF0aW9uU2VydmljZSB9IGZyb20gJy4vdHJhbnNsYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBwcm92aWRlQ29uZmlnLCBDb25maWcgfSBmcm9tICcuLi9jb25maWcvY29uZmlnLm1vZHVsZSc7XG5pbXBvcnQgeyBJMThuZXh0VHJhbnNsYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9pMThuZXh0L2kxOG5leHQtdHJhbnNsYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBEYXRlUGlwZSB9IGZyb20gJy4vZGF0ZS5waXBlJztcbmltcG9ydCB7IFRyYW5zbGF0aW9uTmFtZXNwYWNlU2VydmljZSB9IGZyb20gJy4vdHJhbnNsYXRpb24tbmFtZXNwYWNlLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtUcmFuc2xhdGVQaXBlLCBEYXRlUGlwZV0sXG4gIGV4cG9ydHM6IFtUcmFuc2xhdGVQaXBlLCBEYXRlUGlwZV0sXG59KVxuZXhwb3J0IGNsYXNzIEkxOG5Nb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEkxOG5Nb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgcHJvdmlkZUNvbmZpZyhkZWZhdWx0STE4bkNvbmZpZyksXG4gICAgICAgIHsgcHJvdmlkZTogSTE4bkNvbmZpZywgdXNlRXhpc3Rpbmc6IENvbmZpZyB9LFxuICAgICAgICB7IHByb3ZpZGU6IFRyYW5zbGF0aW9uU2VydmljZSwgdXNlQ2xhc3M6IEkxOG5leHRUcmFuc2xhdGlvblNlcnZpY2UgfSxcbiAgICAgICAgVHJhbnNsYXRpb25OYW1lc3BhY2VTZXJ2aWNlLFxuICAgICAgICAuLi5pMThuZXh0UHJvdmlkZXJzLFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXX0=
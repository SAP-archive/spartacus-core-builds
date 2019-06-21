/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
                TranslationChunkService,
                ...i18nextProviders,
            ],
        };
    }
}
I18nModule.decorators = [
    { type: NgModule, args: [{
                declarations: [TranslatePipe, CxDatePipe],
                exports: [TranslatePipe, CxDatePipe],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvaTE4bi9pMThuLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDekMsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFNdEUsTUFBTSxPQUFPLFVBQVU7Ozs7SUFDckIsTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPO1lBQ0wsUUFBUSxFQUFFLFVBQVU7WUFDcEIsU0FBUyxFQUFFO2dCQUNULGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQztnQkFDaEMsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUU7Z0JBQzVDLEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFFBQVEsRUFBRSx5QkFBeUIsRUFBRTtnQkFDcEUsdUJBQXVCO2dCQUN2QixHQUFHLGdCQUFnQjthQUNwQjtTQUNGLENBQUM7SUFDSixDQUFDOzs7WUFoQkYsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLGFBQWEsRUFBRSxVQUFVLENBQUM7Z0JBQ3pDLE9BQU8sRUFBRSxDQUFDLGFBQWEsRUFBRSxVQUFVLENBQUM7YUFDckMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVHJhbnNsYXRlUGlwZSB9IGZyb20gJy4vdHJhbnNsYXRlLnBpcGUnO1xuaW1wb3J0IHsgaTE4bmV4dFByb3ZpZGVycyB9IGZyb20gJy4vaTE4bmV4dC9pMThuZXh0LXByb3ZpZGVycyc7XG5pbXBvcnQgeyBkZWZhdWx0STE4bkNvbmZpZyB9IGZyb20gJy4vY29uZmlnL2RlZmF1bHQtaTE4bi1jb25maWcnO1xuaW1wb3J0IHsgSTE4bkNvbmZpZyB9IGZyb20gJy4vY29uZmlnL2kxOG4tY29uZmlnJztcbmltcG9ydCB7IFRyYW5zbGF0aW9uU2VydmljZSB9IGZyb20gJy4vdHJhbnNsYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBwcm92aWRlQ29uZmlnLCBDb25maWcgfSBmcm9tICcuLi9jb25maWcvY29uZmlnLm1vZHVsZSc7XG5pbXBvcnQgeyBJMThuZXh0VHJhbnNsYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9pMThuZXh0L2kxOG5leHQtdHJhbnNsYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBDeERhdGVQaXBlIH0gZnJvbSAnLi9kYXRlLnBpcGUnO1xuaW1wb3J0IHsgVHJhbnNsYXRpb25DaHVua1NlcnZpY2UgfSBmcm9tICcuL3RyYW5zbGF0aW9uLWNodW5rLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtUcmFuc2xhdGVQaXBlLCBDeERhdGVQaXBlXSxcbiAgZXhwb3J0czogW1RyYW5zbGF0ZVBpcGUsIEN4RGF0ZVBpcGVdLFxufSlcbmV4cG9ydCBjbGFzcyBJMThuTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxJMThuTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBJMThuTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHByb3ZpZGVDb25maWcoZGVmYXVsdEkxOG5Db25maWcpLFxuICAgICAgICB7IHByb3ZpZGU6IEkxOG5Db25maWcsIHVzZUV4aXN0aW5nOiBDb25maWcgfSxcbiAgICAgICAgeyBwcm92aWRlOiBUcmFuc2xhdGlvblNlcnZpY2UsIHVzZUNsYXNzOiBJMThuZXh0VHJhbnNsYXRpb25TZXJ2aWNlIH0sXG4gICAgICAgIFRyYW5zbGF0aW9uQ2h1bmtTZXJ2aWNlLFxuICAgICAgICAuLi5pMThuZXh0UHJvdmlkZXJzLFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXX0=
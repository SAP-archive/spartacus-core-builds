var I18nModule_1;
import { __decorate } from "tslib";
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
let I18nModule = I18nModule_1 = class I18nModule {
    static forRoot() {
        return {
            ngModule: I18nModule_1,
            providers: [
                provideConfig(defaultI18nConfig),
                { provide: I18nConfig, useExisting: Config },
                { provide: TranslationService, useClass: I18nextTranslationService },
                TranslationChunkService,
                ...i18nextProviders,
            ],
        };
    }
};
I18nModule = I18nModule_1 = __decorate([
    NgModule({
        declarations: [TranslatePipe, CxDatePipe],
        exports: [TranslatePipe, CxDatePipe],
    })
], I18nModule);
export { I18nModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvaTE4bi9pMThuLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUNsRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBTXRFLElBQWEsVUFBVSxrQkFBdkIsTUFBYSxVQUFVO0lBQ3JCLE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSxZQUFVO1lBQ3BCLFNBQVMsRUFBRTtnQkFDVCxhQUFhLENBQUMsaUJBQWlCLENBQUM7Z0JBQ2hDLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFO2dCQUM1QyxFQUFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxRQUFRLEVBQUUseUJBQXlCLEVBQUU7Z0JBQ3BFLHVCQUF1QjtnQkFDdkIsR0FBRyxnQkFBZ0I7YUFDcEI7U0FDRixDQUFDO0lBQ0osQ0FBQztDQUNGLENBQUE7QUFiWSxVQUFVO0lBSnRCLFFBQVEsQ0FBQztRQUNSLFlBQVksRUFBRSxDQUFDLGFBQWEsRUFBRSxVQUFVLENBQUM7UUFDekMsT0FBTyxFQUFFLENBQUMsYUFBYSxFQUFFLFVBQVUsQ0FBQztLQUNyQyxDQUFDO0dBQ1csVUFBVSxDQWF0QjtTQWJZLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVHJhbnNsYXRlUGlwZSB9IGZyb20gJy4vdHJhbnNsYXRlLnBpcGUnO1xuaW1wb3J0IHsgaTE4bmV4dFByb3ZpZGVycyB9IGZyb20gJy4vaTE4bmV4dC9pMThuZXh0LXByb3ZpZGVycyc7XG5pbXBvcnQgeyBkZWZhdWx0STE4bkNvbmZpZyB9IGZyb20gJy4vY29uZmlnL2RlZmF1bHQtaTE4bi1jb25maWcnO1xuaW1wb3J0IHsgSTE4bkNvbmZpZyB9IGZyb20gJy4vY29uZmlnL2kxOG4tY29uZmlnJztcbmltcG9ydCB7IFRyYW5zbGF0aW9uU2VydmljZSB9IGZyb20gJy4vdHJhbnNsYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBwcm92aWRlQ29uZmlnLCBDb25maWcgfSBmcm9tICcuLi9jb25maWcvY29uZmlnLm1vZHVsZSc7XG5pbXBvcnQgeyBJMThuZXh0VHJhbnNsYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi9pMThuZXh0L2kxOG5leHQtdHJhbnNsYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBDeERhdGVQaXBlIH0gZnJvbSAnLi9kYXRlLnBpcGUnO1xuaW1wb3J0IHsgVHJhbnNsYXRpb25DaHVua1NlcnZpY2UgfSBmcm9tICcuL3RyYW5zbGF0aW9uLWNodW5rLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtUcmFuc2xhdGVQaXBlLCBDeERhdGVQaXBlXSxcbiAgZXhwb3J0czogW1RyYW5zbGF0ZVBpcGUsIEN4RGF0ZVBpcGVdLFxufSlcbmV4cG9ydCBjbGFzcyBJMThuTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxJMThuTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBJMThuTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHByb3ZpZGVDb25maWcoZGVmYXVsdEkxOG5Db25maWcpLFxuICAgICAgICB7IHByb3ZpZGU6IEkxOG5Db25maWcsIHVzZUV4aXN0aW5nOiBDb25maWcgfSxcbiAgICAgICAgeyBwcm92aWRlOiBUcmFuc2xhdGlvblNlcnZpY2UsIHVzZUNsYXNzOiBJMThuZXh0VHJhbnNsYXRpb25TZXJ2aWNlIH0sXG4gICAgICAgIFRyYW5zbGF0aW9uQ2h1bmtTZXJ2aWNlLFxuICAgICAgICAuLi5pMThuZXh0UHJvdmlkZXJzLFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXX0=
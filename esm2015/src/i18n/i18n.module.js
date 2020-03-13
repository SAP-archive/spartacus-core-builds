var I18nModule_1;
import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { TranslatePipe } from './translate.pipe';
import { i18nextProviders } from './i18next/i18next-providers';
import { defaultI18nConfig } from './config/default-i18n-config';
import { I18nConfig } from './config/i18n-config';
import { TranslationService } from './translation.service';
import { Config, provideDefaultConfig } from '../config/config.module';
import { I18nextTranslationService } from './i18next/i18next-translation.service';
import { CxDatePipe } from './date.pipe';
import { TranslationChunkService } from './translation-chunk.service';
let I18nModule = I18nModule_1 = class I18nModule {
    static forRoot() {
        return {
            ngModule: I18nModule_1,
            providers: [
                provideDefaultConfig(defaultI18nConfig),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvaTE4bi9pMThuLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDM0QsT0FBTyxFQUFFLE1BQU0sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDekMsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFNdEUsSUFBYSxVQUFVLGtCQUF2QixNQUFhLFVBQVU7SUFDckIsTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPO1lBQ0wsUUFBUSxFQUFFLFlBQVU7WUFDcEIsU0FBUyxFQUFFO2dCQUNULG9CQUFvQixDQUFDLGlCQUFpQixDQUFDO2dCQUN2QyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRTtnQkFDNUMsRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsUUFBUSxFQUFFLHlCQUF5QixFQUFFO2dCQUNwRSx1QkFBdUI7Z0JBQ3ZCLEdBQUcsZ0JBQWdCO2FBQ3BCO1NBQ0YsQ0FBQztJQUNKLENBQUM7Q0FDRixDQUFBO0FBYlksVUFBVTtJQUp0QixRQUFRLENBQUM7UUFDUixZQUFZLEVBQUUsQ0FBQyxhQUFhLEVBQUUsVUFBVSxDQUFDO1FBQ3pDLE9BQU8sRUFBRSxDQUFDLGFBQWEsRUFBRSxVQUFVLENBQUM7S0FDckMsQ0FBQztHQUNXLFVBQVUsQ0FhdEI7U0FiWSxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRyYW5zbGF0ZVBpcGUgfSBmcm9tICcuL3RyYW5zbGF0ZS5waXBlJztcbmltcG9ydCB7IGkxOG5leHRQcm92aWRlcnMgfSBmcm9tICcuL2kxOG5leHQvaTE4bmV4dC1wcm92aWRlcnMnO1xuaW1wb3J0IHsgZGVmYXVsdEkxOG5Db25maWcgfSBmcm9tICcuL2NvbmZpZy9kZWZhdWx0LWkxOG4tY29uZmlnJztcbmltcG9ydCB7IEkxOG5Db25maWcgfSBmcm9tICcuL2NvbmZpZy9pMThuLWNvbmZpZyc7XG5pbXBvcnQgeyBUcmFuc2xhdGlvblNlcnZpY2UgfSBmcm9tICcuL3RyYW5zbGF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29uZmlnLCBwcm92aWRlRGVmYXVsdENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9jb25maWcubW9kdWxlJztcbmltcG9ydCB7IEkxOG5leHRUcmFuc2xhdGlvblNlcnZpY2UgfSBmcm9tICcuL2kxOG5leHQvaTE4bmV4dC10cmFuc2xhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IEN4RGF0ZVBpcGUgfSBmcm9tICcuL2RhdGUucGlwZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGlvbkNodW5rU2VydmljZSB9IGZyb20gJy4vdHJhbnNsYXRpb24tY2h1bmsuc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1RyYW5zbGF0ZVBpcGUsIEN4RGF0ZVBpcGVdLFxuICBleHBvcnRzOiBbVHJhbnNsYXRlUGlwZSwgQ3hEYXRlUGlwZV0sXG59KVxuZXhwb3J0IGNsYXNzIEkxOG5Nb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPEkxOG5Nb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEkxOG5Nb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgcHJvdmlkZURlZmF1bHRDb25maWcoZGVmYXVsdEkxOG5Db25maWcpLFxuICAgICAgICB7IHByb3ZpZGU6IEkxOG5Db25maWcsIHVzZUV4aXN0aW5nOiBDb25maWcgfSxcbiAgICAgICAgeyBwcm92aWRlOiBUcmFuc2xhdGlvblNlcnZpY2UsIHVzZUNsYXNzOiBJMThuZXh0VHJhbnNsYXRpb25TZXJ2aWNlIH0sXG4gICAgICAgIFRyYW5zbGF0aW9uQ2h1bmtTZXJ2aWNlLFxuICAgICAgICAuLi5pMThuZXh0UHJvdmlkZXJzLFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXX0=
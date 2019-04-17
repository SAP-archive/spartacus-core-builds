/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var I18nModule = /** @class */ (function () {
    function I18nModule() {
    }
    /**
     * @return {?}
     */
    I18nModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: I18nModule,
            providers: tslib_1.__spread([
                provideConfig(defaultI18nConfig),
                { provide: I18nConfig, useExisting: Config },
                { provide: TranslationService, useClass: I18nextTranslationService },
                TranslationNamespaceService
            ], i18nextProviders),
        };
    };
    I18nModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [TranslatePipe, DatePipe],
                    exports: [TranslatePipe, DatePipe],
                },] }
    ];
    return I18nModule;
}());
export { I18nModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bi5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvaTE4bi9pMThuLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUNsRixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRTlFO0lBQUE7SUFpQkEsQ0FBQzs7OztJQVpRLGtCQUFPOzs7SUFBZDtRQUNFLE9BQU87WUFDTCxRQUFRLEVBQUUsVUFBVTtZQUNwQixTQUFTO2dCQUNQLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQztnQkFDaEMsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUU7Z0JBQzVDLEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFFBQVEsRUFBRSx5QkFBeUIsRUFBRTtnQkFDcEUsMkJBQTJCO2VBQ3hCLGdCQUFnQixDQUNwQjtTQUNGLENBQUM7SUFDSixDQUFDOztnQkFoQkYsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUM7b0JBQ3ZDLE9BQU8sRUFBRSxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUM7aUJBQ25DOztJQWNELGlCQUFDO0NBQUEsQUFqQkQsSUFpQkM7U0FiWSxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRyYW5zbGF0ZVBpcGUgfSBmcm9tICcuL3RyYW5zbGF0ZS5waXBlJztcbmltcG9ydCB7IGkxOG5leHRQcm92aWRlcnMgfSBmcm9tICcuL2kxOG5leHQvaTE4bmV4dC1wcm92aWRlcnMnO1xuaW1wb3J0IHsgZGVmYXVsdEkxOG5Db25maWcgfSBmcm9tICcuL2NvbmZpZy9kZWZhdWx0LWkxOG4tY29uZmlnJztcbmltcG9ydCB7IEkxOG5Db25maWcgfSBmcm9tICcuL2NvbmZpZy9pMThuLWNvbmZpZyc7XG5pbXBvcnQgeyBUcmFuc2xhdGlvblNlcnZpY2UgfSBmcm9tICcuL3RyYW5zbGF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgcHJvdmlkZUNvbmZpZywgQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL2NvbmZpZy5tb2R1bGUnO1xuaW1wb3J0IHsgSTE4bmV4dFRyYW5zbGF0aW9uU2VydmljZSB9IGZyb20gJy4vaTE4bmV4dC9pMThuZXh0LXRyYW5zbGF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgRGF0ZVBpcGUgfSBmcm9tICcuL2RhdGUucGlwZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGlvbk5hbWVzcGFjZVNlcnZpY2UgfSBmcm9tICcuL3RyYW5zbGF0aW9uLW5hbWVzcGFjZS5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbVHJhbnNsYXRlUGlwZSwgRGF0ZVBpcGVdLFxuICBleHBvcnRzOiBbVHJhbnNsYXRlUGlwZSwgRGF0ZVBpcGVdLFxufSlcbmV4cG9ydCBjbGFzcyBJMThuTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBJMThuTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHByb3ZpZGVDb25maWcoZGVmYXVsdEkxOG5Db25maWcpLFxuICAgICAgICB7IHByb3ZpZGU6IEkxOG5Db25maWcsIHVzZUV4aXN0aW5nOiBDb25maWcgfSxcbiAgICAgICAgeyBwcm92aWRlOiBUcmFuc2xhdGlvblNlcnZpY2UsIHVzZUNsYXNzOiBJMThuZXh0VHJhbnNsYXRpb25TZXJ2aWNlIH0sXG4gICAgICAgIFRyYW5zbGF0aW9uTmFtZXNwYWNlU2VydmljZSxcbiAgICAgICAgLi4uaTE4bmV4dFByb3ZpZGVycyxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19
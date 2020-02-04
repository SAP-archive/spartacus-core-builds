/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpClient } from '@angular/common/http';
import { APP_INITIALIZER, Optional } from '@angular/core';
import { ConfigInitializerService } from '../../config/config-initializer/config-initializer.service';
import { LanguageService } from '../../site-context/facade/language.service';
import { SERVER_REQUEST_ORIGIN } from '../../ssr/ssr.providers';
import { i18nextInit } from './i18next-init';
const ɵ0 = i18nextInit;
/** @type {?} */
export const i18nextProviders = [
    {
        provide: APP_INITIALIZER,
        useFactory: ɵ0,
        deps: [
            ConfigInitializerService,
            LanguageService,
            HttpClient,
            [new Optional(), SERVER_REQUEST_ORIGIN],
        ],
        multi: true,
    },
];
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bmV4dC1wcm92aWRlcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvaTE4bi9pMThuZXh0L2kxOG5leHQtcHJvdmlkZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDcEUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNERBQTRELENBQUM7QUFDdEcsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztXQUs3QixXQUFXOztBQUgzQixNQUFNLE9BQU8sZ0JBQWdCLEdBQWU7SUFDMUM7UUFDRSxPQUFPLEVBQUUsZUFBZTtRQUN4QixVQUFVLElBQWE7UUFDdkIsSUFBSSxFQUFFO1lBQ0osd0JBQXdCO1lBQ3hCLGVBQWU7WUFDZixVQUFVO1lBQ1YsQ0FBQyxJQUFJLFFBQVEsRUFBRSxFQUFFLHFCQUFxQixDQUFDO1NBQ3hDO1FBQ0QsS0FBSyxFQUFFLElBQUk7S0FDWjtDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEFQUF9JTklUSUFMSVpFUiwgT3B0aW9uYWwsIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb25maWdJbml0aWFsaXplclNlcnZpY2UgfSBmcm9tICcuLi8uLi9jb25maWcvY29uZmlnLWluaXRpYWxpemVyL2NvbmZpZy1pbml0aWFsaXplci5zZXJ2aWNlJztcbmltcG9ydCB7IExhbmd1YWdlU2VydmljZSB9IGZyb20gJy4uLy4uL3NpdGUtY29udGV4dC9mYWNhZGUvbGFuZ3VhZ2Uuc2VydmljZSc7XG5pbXBvcnQgeyBTRVJWRVJfUkVRVUVTVF9PUklHSU4gfSBmcm9tICcuLi8uLi9zc3Ivc3NyLnByb3ZpZGVycyc7XG5pbXBvcnQgeyBpMThuZXh0SW5pdCB9IGZyb20gJy4vaTE4bmV4dC1pbml0JztcblxuZXhwb3J0IGNvbnN0IGkxOG5leHRQcm92aWRlcnM6IFByb3ZpZGVyW10gPSBbXG4gIHtcbiAgICBwcm92aWRlOiBBUFBfSU5JVElBTElaRVIsXG4gICAgdXNlRmFjdG9yeTogaTE4bmV4dEluaXQsXG4gICAgZGVwczogW1xuICAgICAgQ29uZmlnSW5pdGlhbGl6ZXJTZXJ2aWNlLFxuICAgICAgTGFuZ3VhZ2VTZXJ2aWNlLFxuICAgICAgSHR0cENsaWVudCxcbiAgICAgIFtuZXcgT3B0aW9uYWwoKSwgU0VSVkVSX1JFUVVFU1RfT1JJR0lOXSxcbiAgICBdLFxuICAgIG11bHRpOiB0cnVlLFxuICB9LFxuXTtcbiJdfQ==
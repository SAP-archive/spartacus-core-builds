/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { APP_INITIALIZER } from '@angular/core';
import { UrlSerializer } from '@angular/router';
import { ConfigInitializerService } from '../../config/config-initializer/config-initializer.service';
import { SiteContextParamsService } from '../services/site-context-params.service';
import { SiteContextRoutesHandler } from '../services/site-context-routes-handler';
import { SiteContextUrlSerializer } from '../services/site-context-url-serializer';
// functions below should not be exposed in public API:
/**
 * @param {?} siteContextRoutesHandler
 * @param {?} configInit
 * @return {?}
 */
export function initSiteContextRoutesHandler(siteContextRoutesHandler, configInit) {
    return (/**
     * @return {?}
     */
    () => {
        configInit.getStableConfig('context').then((/**
         * @return {?}
         */
        () => {
            siteContextRoutesHandler.init();
        }));
    });
}
/** @type {?} */
export const siteContextParamsProviders = [
    SiteContextParamsService,
    SiteContextUrlSerializer,
    { provide: UrlSerializer, useExisting: SiteContextUrlSerializer },
    {
        provide: APP_INITIALIZER,
        useFactory: initSiteContextRoutesHandler,
        deps: [SiteContextRoutesHandler, ConfigInitializerService],
        multi: true,
    },
];
/**
 * @deprecated since 1.3.1; TODO: remove
 * @param {?} siteContextRoutesHandler
 * @return {?}
 */
export function deprecatedInitSiteContextRoutesHandler(siteContextRoutesHandler) {
    return (/**
     * @return {?}
     */
    () => {
        siteContextRoutesHandler.init();
    });
}
/**
 * @deprecated since 1.3.1; TODO: remove
 * @type {?}
 */
export const deprecatedSiteContextParamsProviders = [
    SiteContextParamsService,
    SiteContextUrlSerializer,
    { provide: UrlSerializer, useExisting: SiteContextUrlSerializer },
    {
        provide: APP_INITIALIZER,
        useFactory: deprecatedInitSiteContextRoutesHandler,
        deps: [SiteContextRoutesHandler],
        multi: true,
    },
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZS1jb250ZXh0LXBhcmFtcy1wcm92aWRlcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc2l0ZS1jb250ZXh0L3Byb3ZpZGVycy9zaXRlLWNvbnRleHQtcGFyYW1zLXByb3ZpZGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGVBQWUsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUMxRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNERBQTRELENBQUM7QUFDdEcsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDbkYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDbkYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0seUNBQXlDLENBQUM7Ozs7Ozs7QUFJbkYsTUFBTSxVQUFVLDRCQUE0QixDQUMxQyx3QkFBa0QsRUFDbEQsVUFBb0M7SUFFcEM7OztJQUFPLEdBQUcsRUFBRTtRQUNWLFVBQVUsQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSTs7O1FBQUMsR0FBRyxFQUFFO1lBQzlDLHdCQUF3QixDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2xDLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQyxFQUFDO0FBQ0osQ0FBQzs7QUFFRCxNQUFNLE9BQU8sMEJBQTBCLEdBQWU7SUFDcEQsd0JBQXdCO0lBQ3hCLHdCQUF3QjtJQUN4QixFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsV0FBVyxFQUFFLHdCQUF3QixFQUFFO0lBQ2pFO1FBQ0UsT0FBTyxFQUFFLGVBQWU7UUFDeEIsVUFBVSxFQUFFLDRCQUE0QjtRQUN4QyxJQUFJLEVBQUUsQ0FBQyx3QkFBd0IsRUFBRSx3QkFBd0IsQ0FBQztRQUMxRCxLQUFLLEVBQUUsSUFBSTtLQUNaO0NBQ0Y7Ozs7OztBQUtELE1BQU0sVUFBVSxzQ0FBc0MsQ0FDcEQsd0JBQWtEO0lBRWxEOzs7SUFBTyxHQUFHLEVBQUU7UUFDVix3QkFBd0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNsQyxDQUFDLEVBQUM7QUFDSixDQUFDOzs7OztBQUtELE1BQU0sT0FBTyxvQ0FBb0MsR0FBZTtJQUM5RCx3QkFBd0I7SUFDeEIsd0JBQXdCO0lBQ3hCLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxXQUFXLEVBQUUsd0JBQXdCLEVBQUU7SUFDakU7UUFDRSxPQUFPLEVBQUUsZUFBZTtRQUN4QixVQUFVLEVBQUUsc0NBQXNDO1FBQ2xELElBQUksRUFBRSxDQUFDLHdCQUF3QixDQUFDO1FBQ2hDLEtBQUssRUFBRSxJQUFJO0tBQ1o7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFQUF9JTklUSUFMSVpFUiwgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFVybFNlcmlhbGl6ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQ29uZmlnSW5pdGlhbGl6ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29uZmlnL2NvbmZpZy1pbml0aWFsaXplci9jb25maWctaW5pdGlhbGl6ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dFBhcmFtc1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9zaXRlLWNvbnRleHQtcGFyYW1zLnNlcnZpY2UnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRSb3V0ZXNIYW5kbGVyIH0gZnJvbSAnLi4vc2VydmljZXMvc2l0ZS1jb250ZXh0LXJvdXRlcy1oYW5kbGVyJztcbmltcG9ydCB7IFNpdGVDb250ZXh0VXJsU2VyaWFsaXplciB9IGZyb20gJy4uL3NlcnZpY2VzL3NpdGUtY29udGV4dC11cmwtc2VyaWFsaXplcic7XG5cbi8vIGZ1bmN0aW9ucyBiZWxvdyBzaG91bGQgbm90IGJlIGV4cG9zZWQgaW4gcHVibGljIEFQSTpcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRTaXRlQ29udGV4dFJvdXRlc0hhbmRsZXIoXG4gIHNpdGVDb250ZXh0Um91dGVzSGFuZGxlcjogU2l0ZUNvbnRleHRSb3V0ZXNIYW5kbGVyLFxuICBjb25maWdJbml0OiBDb25maWdJbml0aWFsaXplclNlcnZpY2Vcbikge1xuICByZXR1cm4gKCkgPT4ge1xuICAgIGNvbmZpZ0luaXQuZ2V0U3RhYmxlQ29uZmlnKCdjb250ZXh0JykudGhlbigoKSA9PiB7XG4gICAgICBzaXRlQ29udGV4dFJvdXRlc0hhbmRsZXIuaW5pdCgpO1xuICAgIH0pO1xuICB9O1xufVxuXG5leHBvcnQgY29uc3Qgc2l0ZUNvbnRleHRQYXJhbXNQcm92aWRlcnM6IFByb3ZpZGVyW10gPSBbXG4gIFNpdGVDb250ZXh0UGFyYW1zU2VydmljZSxcbiAgU2l0ZUNvbnRleHRVcmxTZXJpYWxpemVyLFxuICB7IHByb3ZpZGU6IFVybFNlcmlhbGl6ZXIsIHVzZUV4aXN0aW5nOiBTaXRlQ29udGV4dFVybFNlcmlhbGl6ZXIgfSxcbiAge1xuICAgIHByb3ZpZGU6IEFQUF9JTklUSUFMSVpFUixcbiAgICB1c2VGYWN0b3J5OiBpbml0U2l0ZUNvbnRleHRSb3V0ZXNIYW5kbGVyLFxuICAgIGRlcHM6IFtTaXRlQ29udGV4dFJvdXRlc0hhbmRsZXIsIENvbmZpZ0luaXRpYWxpemVyU2VydmljZV0sXG4gICAgbXVsdGk6IHRydWUsXG4gIH0sXG5dO1xuXG4vKipcbiAqIEBkZXByZWNhdGVkIHNpbmNlIDEuMy4xOyBUT0RPOiByZW1vdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlcHJlY2F0ZWRJbml0U2l0ZUNvbnRleHRSb3V0ZXNIYW5kbGVyKFxuICBzaXRlQ29udGV4dFJvdXRlc0hhbmRsZXI6IFNpdGVDb250ZXh0Um91dGVzSGFuZGxlclxuKSB7XG4gIHJldHVybiAoKSA9PiB7XG4gICAgc2l0ZUNvbnRleHRSb3V0ZXNIYW5kbGVyLmluaXQoKTtcbiAgfTtcbn1cblxuLyoqXG4gKiBAZGVwcmVjYXRlZCBzaW5jZSAxLjMuMTsgVE9ETzogcmVtb3ZlXG4gKi9cbmV4cG9ydCBjb25zdCBkZXByZWNhdGVkU2l0ZUNvbnRleHRQYXJhbXNQcm92aWRlcnM6IFByb3ZpZGVyW10gPSBbXG4gIFNpdGVDb250ZXh0UGFyYW1zU2VydmljZSxcbiAgU2l0ZUNvbnRleHRVcmxTZXJpYWxpemVyLFxuICB7IHByb3ZpZGU6IFVybFNlcmlhbGl6ZXIsIHVzZUV4aXN0aW5nOiBTaXRlQ29udGV4dFVybFNlcmlhbGl6ZXIgfSxcbiAge1xuICAgIHByb3ZpZGU6IEFQUF9JTklUSUFMSVpFUixcbiAgICB1c2VGYWN0b3J5OiBkZXByZWNhdGVkSW5pdFNpdGVDb250ZXh0Um91dGVzSGFuZGxlcixcbiAgICBkZXBzOiBbU2l0ZUNvbnRleHRSb3V0ZXNIYW5kbGVyXSxcbiAgICBtdWx0aTogdHJ1ZSxcbiAgfSxcbl07XG4iXX0=
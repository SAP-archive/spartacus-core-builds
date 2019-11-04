/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CONFIG_INITIALIZER, } from '../../config/config-initializer/config-initializer';
import { SiteContextConfig } from '../../site-context/config/site-context-config';
import { BASE_SITE_CONTEXT_ID } from '../../site-context/providers/context-ids';
import { OccConfigLoaderService } from './occ-config-loader.service';
/**
 * Initializes the Spartacus config asynchronously basing on the external config
 * @param {?} configLoader
 * @param {?} config
 * @return {?}
 */
export function initConfig(configLoader, config) {
    /**
     * Load config for `context` from backend only when there is no static config for `context.baseSite`
     */
    if (!config.context || !config.context[BASE_SITE_CONTEXT_ID]) {
        return {
            scopes: ['context', 'i18n.fallbackLang'],
            configFactory: (/**
             * @return {?}
             */
            function () { return configLoader.loadConfig(); }),
        };
    }
    return null;
}
/**
 * Re-provides the external config chunk given before Angular bootstrap
 */
var OccConfigLoaderModule = /** @class */ (function () {
    function OccConfigLoaderModule() {
    }
    /**
     * @return {?}
     */
    OccConfigLoaderModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: OccConfigLoaderModule,
            providers: [
                {
                    provide: CONFIG_INITIALIZER,
                    useFactory: initConfig,
                    deps: [OccConfigLoaderService, SiteContextConfig],
                    multi: true,
                },
            ],
        };
    };
    OccConfigLoaderModule.decorators = [
        { type: NgModule }
    ];
    return OccConfigLoaderModule;
}());
export { OccConfigLoaderModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNvbmZpZy1sb2FkZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL29jYy9jb25maWctbG9hZGVyL29jYy1jb25maWctbG9hZGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUVMLGtCQUFrQixHQUNuQixNQUFNLG9EQUFvRCxDQUFDO0FBQzVELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDOzs7Ozs7O0FBS3JFLE1BQU0sVUFBVSxVQUFVLENBQ3hCLFlBQW9DLEVBQ3BDLE1BQXlCO0lBRXpCOztPQUVHO0lBQ0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLG9CQUFvQixDQUFDLEVBQUU7UUFDNUQsT0FBTztZQUNMLE1BQU0sRUFBRSxDQUFDLFNBQVMsRUFBRSxtQkFBbUIsQ0FBQztZQUN4QyxhQUFhOzs7WUFBRSxjQUFNLE9BQUEsWUFBWSxDQUFDLFVBQVUsRUFBRSxFQUF6QixDQUF5QixDQUFBO1NBQy9DLENBQUM7S0FDSDtJQUNELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQzs7OztBQUtEO0lBQUE7SUFlQSxDQUFDOzs7O0lBYlEsNkJBQU87OztJQUFkO1FBQ0UsT0FBTztZQUNMLFFBQVEsRUFBRSxxQkFBcUI7WUFDL0IsU0FBUyxFQUFFO2dCQUNUO29CQUNFLE9BQU8sRUFBRSxrQkFBa0I7b0JBQzNCLFVBQVUsRUFBRSxVQUFVO29CQUN0QixJQUFJLEVBQUUsQ0FBQyxzQkFBc0IsRUFBRSxpQkFBaUIsQ0FBQztvQkFDakQsS0FBSyxFQUFFLElBQUk7aUJBQ1o7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDOztnQkFkRixRQUFROztJQWVULDRCQUFDO0NBQUEsQUFmRCxJQWVDO1NBZFkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENvbmZpZ0luaXRpYWxpemVyLFxuICBDT05GSUdfSU5JVElBTElaRVIsXG59IGZyb20gJy4uLy4uL2NvbmZpZy9jb25maWctaW5pdGlhbGl6ZXIvY29uZmlnLWluaXRpYWxpemVyJztcbmltcG9ydCB7IFNpdGVDb250ZXh0Q29uZmlnIH0gZnJvbSAnLi4vLi4vc2l0ZS1jb250ZXh0L2NvbmZpZy9zaXRlLWNvbnRleHQtY29uZmlnJztcbmltcG9ydCB7IEJBU0VfU0lURV9DT05URVhUX0lEIH0gZnJvbSAnLi4vLi4vc2l0ZS1jb250ZXh0L3Byb3ZpZGVycy9jb250ZXh0LWlkcyc7XG5pbXBvcnQgeyBPY2NDb25maWdMb2FkZXJTZXJ2aWNlIH0gZnJvbSAnLi9vY2MtY29uZmlnLWxvYWRlci5zZXJ2aWNlJztcblxuLyoqXG4gKiBJbml0aWFsaXplcyB0aGUgU3BhcnRhY3VzIGNvbmZpZyBhc3luY2hyb25vdXNseSBiYXNpbmcgb24gdGhlIGV4dGVybmFsIGNvbmZpZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gaW5pdENvbmZpZyhcbiAgY29uZmlnTG9hZGVyOiBPY2NDb25maWdMb2FkZXJTZXJ2aWNlLFxuICBjb25maWc6IFNpdGVDb250ZXh0Q29uZmlnXG4pOiBDb25maWdJbml0aWFsaXplciB7XG4gIC8qKlxuICAgKiBMb2FkIGNvbmZpZyBmb3IgYGNvbnRleHRgIGZyb20gYmFja2VuZCBvbmx5IHdoZW4gdGhlcmUgaXMgbm8gc3RhdGljIGNvbmZpZyBmb3IgYGNvbnRleHQuYmFzZVNpdGVgXG4gICAqL1xuICBpZiAoIWNvbmZpZy5jb250ZXh0IHx8ICFjb25maWcuY29udGV4dFtCQVNFX1NJVEVfQ09OVEVYVF9JRF0pIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2NvcGVzOiBbJ2NvbnRleHQnLCAnaTE4bi5mYWxsYmFja0xhbmcnXSxcbiAgICAgIGNvbmZpZ0ZhY3Rvcnk6ICgpID0+IGNvbmZpZ0xvYWRlci5sb2FkQ29uZmlnKCksXG4gICAgfTtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxuLyoqXG4gKiBSZS1wcm92aWRlcyB0aGUgZXh0ZXJuYWwgY29uZmlnIGNodW5rIGdpdmVuIGJlZm9yZSBBbmd1bGFyIGJvb3RzdHJhcFxuICovXG5ATmdNb2R1bGUoKVxuZXhwb3J0IGNsYXNzIE9jY0NvbmZpZ0xvYWRlck1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8T2NjQ29uZmlnTG9hZGVyTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBPY2NDb25maWdMb2FkZXJNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IENPTkZJR19JTklUSUFMSVpFUixcbiAgICAgICAgICB1c2VGYWN0b3J5OiBpbml0Q29uZmlnLFxuICAgICAgICAgIGRlcHM6IFtPY2NDb25maWdMb2FkZXJTZXJ2aWNlLCBTaXRlQ29udGV4dENvbmZpZ10sXG4gICAgICAgICAgbXVsdGk6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==
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
            () => configLoader.loadConfig()),
        };
    }
    return null;
}
/**
 * Re-provides the external config chunk given before Angular bootstrap
 */
export class OccConfigLoaderModule {
    /**
     * @return {?}
     */
    static forRoot() {
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
    }
}
OccConfigLoaderModule.decorators = [
    { type: NgModule }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNvbmZpZy1sb2FkZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL29jYy9jb25maWctbG9hZGVyL29jYy1jb25maWctbG9hZGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUVMLGtCQUFrQixHQUNuQixNQUFNLG9EQUFvRCxDQUFDO0FBQzVELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDOzs7Ozs7O0FBS3JFLE1BQU0sVUFBVSxVQUFVLENBQ3hCLFlBQW9DLEVBQ3BDLE1BQXlCO0lBRXpCOztPQUVHO0lBQ0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLG9CQUFvQixDQUFDLEVBQUU7UUFDNUQsT0FBTztZQUNMLE1BQU0sRUFBRSxDQUFDLFNBQVMsRUFBRSxtQkFBbUIsQ0FBQztZQUN4QyxhQUFhOzs7WUFBRSxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLENBQUE7U0FDL0MsQ0FBQztLQUNIO0lBQ0QsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDOzs7O0FBTUQsTUFBTSxPQUFPLHFCQUFxQjs7OztJQUNoQyxNQUFNLENBQUMsT0FBTztRQUNaLE9BQU87WUFDTCxRQUFRLEVBQUUscUJBQXFCO1lBQy9CLFNBQVMsRUFBRTtnQkFDVDtvQkFDRSxPQUFPLEVBQUUsa0JBQWtCO29CQUMzQixVQUFVLEVBQUUsVUFBVTtvQkFDdEIsSUFBSSxFQUFFLENBQUMsc0JBQXNCLEVBQUUsaUJBQWlCLENBQUM7b0JBQ2pELEtBQUssRUFBRSxJQUFJO2lCQUNaO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQzs7O1lBZEYsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDb25maWdJbml0aWFsaXplcixcbiAgQ09ORklHX0lOSVRJQUxJWkVSLFxufSBmcm9tICcuLi8uLi9jb25maWcvY29uZmlnLWluaXRpYWxpemVyL2NvbmZpZy1pbml0aWFsaXplcic7XG5pbXBvcnQgeyBTaXRlQ29udGV4dENvbmZpZyB9IGZyb20gJy4uLy4uL3NpdGUtY29udGV4dC9jb25maWcvc2l0ZS1jb250ZXh0LWNvbmZpZyc7XG5pbXBvcnQgeyBCQVNFX1NJVEVfQ09OVEVYVF9JRCB9IGZyb20gJy4uLy4uL3NpdGUtY29udGV4dC9wcm92aWRlcnMvY29udGV4dC1pZHMnO1xuaW1wb3J0IHsgT2NjQ29uZmlnTG9hZGVyU2VydmljZSB9IGZyb20gJy4vb2NjLWNvbmZpZy1sb2FkZXIuc2VydmljZSc7XG5cbi8qKlxuICogSW5pdGlhbGl6ZXMgdGhlIFNwYXJ0YWN1cyBjb25maWcgYXN5bmNocm9ub3VzbHkgYmFzaW5nIG9uIHRoZSBleHRlcm5hbCBjb25maWdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluaXRDb25maWcoXG4gIGNvbmZpZ0xvYWRlcjogT2NjQ29uZmlnTG9hZGVyU2VydmljZSxcbiAgY29uZmlnOiBTaXRlQ29udGV4dENvbmZpZ1xuKTogQ29uZmlnSW5pdGlhbGl6ZXIge1xuICAvKipcbiAgICogTG9hZCBjb25maWcgZm9yIGBjb250ZXh0YCBmcm9tIGJhY2tlbmQgb25seSB3aGVuIHRoZXJlIGlzIG5vIHN0YXRpYyBjb25maWcgZm9yIGBjb250ZXh0LmJhc2VTaXRlYFxuICAgKi9cbiAgaWYgKCFjb25maWcuY29udGV4dCB8fCAhY29uZmlnLmNvbnRleHRbQkFTRV9TSVRFX0NPTlRFWFRfSURdKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNjb3BlczogWydjb250ZXh0JywgJ2kxOG4uZmFsbGJhY2tMYW5nJ10sXG4gICAgICBjb25maWdGYWN0b3J5OiAoKSA9PiBjb25maWdMb2FkZXIubG9hZENvbmZpZygpLFxuICAgIH07XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8qKlxuICogUmUtcHJvdmlkZXMgdGhlIGV4dGVybmFsIGNvbmZpZyBjaHVuayBnaXZlbiBiZWZvcmUgQW5ndWxhciBib290c3RyYXBcbiAqL1xuQE5nTW9kdWxlKClcbmV4cG9ydCBjbGFzcyBPY2NDb25maWdMb2FkZXJNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPE9jY0NvbmZpZ0xvYWRlck1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogT2NjQ29uZmlnTG9hZGVyTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBDT05GSUdfSU5JVElBTElaRVIsXG4gICAgICAgICAgdXNlRmFjdG9yeTogaW5pdENvbmZpZyxcbiAgICAgICAgICBkZXBzOiBbT2NjQ29uZmlnTG9hZGVyU2VydmljZSwgU2l0ZUNvbnRleHRDb25maWddLFxuICAgICAgICAgIG11bHRpOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXX0=
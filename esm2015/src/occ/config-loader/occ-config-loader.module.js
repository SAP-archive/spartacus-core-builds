import { NgModule } from '@angular/core';
import { CONFIG_INITIALIZER, } from '../../config/config-initializer/config-initializer';
import { SiteContextConfig } from '../../site-context/config/site-context-config';
import { BASE_SITE_CONTEXT_ID } from '../../site-context/providers/context-ids';
import { OccConfigLoaderService } from './occ-config-loader.service';
/**
 * Initializes the Spartacus config asynchronously basing on the external config
 */
export function initConfig(configLoader, config) {
    /**
     * Load config for `context` from backend only when there is no static config for `context.baseSite`
     */
    if (!config.context || !config.context[BASE_SITE_CONTEXT_ID]) {
        return {
            scopes: ['context', 'i18n.fallbackLang'],
            configFactory: () => configLoader.loadConfig(),
        };
    }
    return null;
}
/**
 * Re-provides the external config chunk given before Angular bootstrap
 */
export class OccConfigLoaderModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNvbmZpZy1sb2FkZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS9zcmMvb2NjL2NvbmZpZy1sb2FkZXIvb2NjLWNvbmZpZy1sb2FkZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFFTCxrQkFBa0IsR0FDbkIsTUFBTSxvREFBb0QsQ0FBQztBQUM1RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUNsRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNoRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUVyRTs7R0FFRztBQUNILE1BQU0sVUFBVSxVQUFVLENBQ3hCLFlBQW9DLEVBQ3BDLE1BQXlCO0lBRXpCOztPQUVHO0lBQ0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLG9CQUFvQixDQUFDLEVBQUU7UUFDNUQsT0FBTztZQUNMLE1BQU0sRUFBRSxDQUFDLFNBQVMsRUFBRSxtQkFBbUIsQ0FBQztZQUN4QyxhQUFhLEVBQUUsR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRTtTQUMvQyxDQUFDO0tBQ0g7SUFDRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUM7QUFFRDs7R0FFRztBQUVILE1BQU0sT0FBTyxxQkFBcUI7SUFDaEMsTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPO1lBQ0wsUUFBUSxFQUFFLHFCQUFxQjtZQUMvQixTQUFTLEVBQUU7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLGtCQUFrQjtvQkFDM0IsVUFBVSxFQUFFLFVBQVU7b0JBQ3RCLElBQUksRUFBRSxDQUFDLHNCQUFzQixFQUFFLGlCQUFpQixDQUFDO29CQUNqRCxLQUFLLEVBQUUsSUFBSTtpQkFDWjthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7OztZQWRGLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ29uZmlnSW5pdGlhbGl6ZXIsXG4gIENPTkZJR19JTklUSUFMSVpFUixcbn0gZnJvbSAnLi4vLi4vY29uZmlnL2NvbmZpZy1pbml0aWFsaXplci9jb25maWctaW5pdGlhbGl6ZXInO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRDb25maWcgfSBmcm9tICcuLi8uLi9zaXRlLWNvbnRleHQvY29uZmlnL3NpdGUtY29udGV4dC1jb25maWcnO1xuaW1wb3J0IHsgQkFTRV9TSVRFX0NPTlRFWFRfSUQgfSBmcm9tICcuLi8uLi9zaXRlLWNvbnRleHQvcHJvdmlkZXJzL2NvbnRleHQtaWRzJztcbmltcG9ydCB7IE9jY0NvbmZpZ0xvYWRlclNlcnZpY2UgfSBmcm9tICcuL29jYy1jb25maWctbG9hZGVyLnNlcnZpY2UnO1xuXG4vKipcbiAqIEluaXRpYWxpemVzIHRoZSBTcGFydGFjdXMgY29uZmlnIGFzeW5jaHJvbm91c2x5IGJhc2luZyBvbiB0aGUgZXh0ZXJuYWwgY29uZmlnXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbml0Q29uZmlnKFxuICBjb25maWdMb2FkZXI6IE9jY0NvbmZpZ0xvYWRlclNlcnZpY2UsXG4gIGNvbmZpZzogU2l0ZUNvbnRleHRDb25maWdcbik6IENvbmZpZ0luaXRpYWxpemVyIHtcbiAgLyoqXG4gICAqIExvYWQgY29uZmlnIGZvciBgY29udGV4dGAgZnJvbSBiYWNrZW5kIG9ubHkgd2hlbiB0aGVyZSBpcyBubyBzdGF0aWMgY29uZmlnIGZvciBgY29udGV4dC5iYXNlU2l0ZWBcbiAgICovXG4gIGlmICghY29uZmlnLmNvbnRleHQgfHwgIWNvbmZpZy5jb250ZXh0W0JBU0VfU0lURV9DT05URVhUX0lEXSkge1xuICAgIHJldHVybiB7XG4gICAgICBzY29wZXM6IFsnY29udGV4dCcsICdpMThuLmZhbGxiYWNrTGFuZyddLFxuICAgICAgY29uZmlnRmFjdG9yeTogKCkgPT4gY29uZmlnTG9hZGVyLmxvYWRDb25maWcoKSxcbiAgICB9O1xuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG4vKipcbiAqIFJlLXByb3ZpZGVzIHRoZSBleHRlcm5hbCBjb25maWcgY2h1bmsgZ2l2ZW4gYmVmb3JlIEFuZ3VsYXIgYm9vdHN0cmFwXG4gKi9cbkBOZ01vZHVsZSgpXG5leHBvcnQgY2xhc3MgT2NjQ29uZmlnTG9hZGVyTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxPY2NDb25maWdMb2FkZXJNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE9jY0NvbmZpZ0xvYWRlck1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogQ09ORklHX0lOSVRJQUxJWkVSLFxuICAgICAgICAgIHVzZUZhY3Rvcnk6IGluaXRDb25maWcsXG4gICAgICAgICAgZGVwczogW09jY0NvbmZpZ0xvYWRlclNlcnZpY2UsIFNpdGVDb250ZXh0Q29uZmlnXSxcbiAgICAgICAgICBtdWx0aTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19
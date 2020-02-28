import { Injector } from '@angular/core';
import { UrlMatcherFactoryService } from '../services/url-matcher-factory.service';
import { RoutingConfigService } from './routing-config.service';
import * as ɵngcc0 from '@angular/core';
export declare class ConfigurableRoutesService {
    private injector;
    private routingConfigService;
    private urlMatcherFactory;
    constructor(injector: Injector, routingConfigService: RoutingConfigService, urlMatcherFactory: UrlMatcherFactoryService);
    private initCalled;
    /**
     * Configures all existing Routes in the Router
     */
    init(): void;
    private configureRouter;
    private configureRoutes;
    private configureRoute;
    private getRouteName;
    private getConfiguredPaths;
    private warn;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ConfigurableRoutesService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhYmxlLXJvdXRlcy5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbImNvbmZpZ3VyYWJsZS1yb3V0ZXMuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBOyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBVcmxNYXRjaGVyRmFjdG9yeVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy91cmwtbWF0Y2hlci1mYWN0b3J5LnNlcnZpY2UnO1xuaW1wb3J0IHsgUm91dGluZ0NvbmZpZ1NlcnZpY2UgfSBmcm9tICcuL3JvdXRpbmctY29uZmlnLnNlcnZpY2UnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ29uZmlndXJhYmxlUm91dGVzU2VydmljZSB7XG4gICAgcHJpdmF0ZSBpbmplY3RvcjtcbiAgICBwcml2YXRlIHJvdXRpbmdDb25maWdTZXJ2aWNlO1xuICAgIHByaXZhdGUgdXJsTWF0Y2hlckZhY3Rvcnk7XG4gICAgY29uc3RydWN0b3IoaW5qZWN0b3I6IEluamVjdG9yLCByb3V0aW5nQ29uZmlnU2VydmljZTogUm91dGluZ0NvbmZpZ1NlcnZpY2UsIHVybE1hdGNoZXJGYWN0b3J5OiBVcmxNYXRjaGVyRmFjdG9yeVNlcnZpY2UpO1xuICAgIHByaXZhdGUgaW5pdENhbGxlZDtcbiAgICAvKipcbiAgICAgKiBDb25maWd1cmVzIGFsbCBleGlzdGluZyBSb3V0ZXMgaW4gdGhlIFJvdXRlclxuICAgICAqL1xuICAgIGluaXQoKTogdm9pZDtcbiAgICBwcml2YXRlIGNvbmZpZ3VyZVJvdXRlcjtcbiAgICBwcml2YXRlIGNvbmZpZ3VyZVJvdXRlcztcbiAgICBwcml2YXRlIGNvbmZpZ3VyZVJvdXRlO1xuICAgIHByaXZhdGUgZ2V0Um91dGVOYW1lO1xuICAgIHByaXZhdGUgZ2V0Q29uZmlndXJlZFBhdGhzO1xuICAgIHByaXZhdGUgd2Fybjtcbn1cbiJdfQ==
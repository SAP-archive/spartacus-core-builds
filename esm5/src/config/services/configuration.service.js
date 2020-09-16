import { __decorate, __param, __read, __spread } from "tslib";
import { Inject, Injectable, InjectFlags } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { deepMerge } from '../utils/deep-merge';
import { EventService } from '../../event/event.service';
import { ModuleInitializedEvent } from '../../cms/events/module-initialized-event';
import { isFeatureEnabled } from '../../features-config';
import { Config, ConfigChunk, DefaultConfig, DefaultConfigChunk, RootConfig, } from '../config-tokens';
import * as i0 from "@angular/core";
import * as i1 from "../config-tokens";
import * as i2 from "../../event/event.service";
var ConfigurationService = /** @class */ (function () {
    function ConfigurationService(rootConfig, defaultConfig, events, config) {
        var _this = this;
        this.rootConfig = rootConfig;
        this.defaultConfig = defaultConfig;
        this.events = events;
        this.ambientDefaultConfig = {};
        this.ambientConfig = {};
        this.config = config;
        this.unifiedConfig$ = new BehaviorSubject(config);
        this.eventsSubscription = this.events
            .get(ModuleInitializedEvent)
            .subscribe(function (moduleInitialized) {
            _this.processModule(moduleInitialized);
        });
    }
    // We are extracting ambient configuration from lazy loaded modules
    ConfigurationService.prototype.processModule = function (moduleInitialized) {
        var defaultConfigs = moduleInitialized.moduleRef.injector.get(DefaultConfigChunk, null, InjectFlags.Self);
        if (defaultConfigs === null || defaultConfigs === void 0 ? void 0 : defaultConfigs.length) {
            deepMerge.apply(void 0, __spread([this.ambientDefaultConfig], defaultConfigs));
        }
        var configs = moduleInitialized.moduleRef.injector.get(ConfigChunk, null, InjectFlags.Self);
        if (configs === null || configs === void 0 ? void 0 : configs.length) {
            deepMerge.apply(void 0, __spread([this.ambientConfig], configs));
        }
        this.emitUnifiedConfig();
    };
    ConfigurationService.prototype.emitUnifiedConfig = function () {
        var newConfig = deepMerge({}, this.defaultConfig, this.ambientDefaultConfig, this.ambientConfig, this.rootConfig);
        this.unifiedConfig$.next(newConfig);
        // compatibility mechanism, can be disabled with feature toggle
        if (!isFeatureEnabled(this.config, 'disableConfigUpdates')) {
            deepMerge(this.config, newConfig);
        }
    };
    ConfigurationService.prototype.ngOnDestroy = function () {
        if (this.eventsSubscription) {
            this.eventsSubscription.unsubscribe();
        }
        this.unifiedConfig$.complete();
    };
    ConfigurationService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [RootConfig,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [DefaultConfig,] }] },
        { type: EventService },
        { type: undefined, decorators: [{ type: Inject, args: [Config,] }] }
    ]; };
    ConfigurationService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ConfigurationService_Factory() { return new ConfigurationService(i0.ɵɵinject(i1.RootConfig), i0.ɵɵinject(i1.DefaultConfig), i0.ɵɵinject(i2.EventService), i0.ɵɵinject(i1.Config)); }, token: ConfigurationService, providedIn: "root" });
    ConfigurationService = __decorate([
        Injectable({
            providedIn: 'root',
        }),
        __param(0, Inject(RootConfig)),
        __param(1, Inject(DefaultConfig)),
        __param(3, Inject(Config))
    ], ConfigurationService);
    return ConfigurationService;
}());
export { ConfigurationService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NvbmZpZy9zZXJ2aWNlcy9jb25maWd1cmF0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUMzRSxPQUFPLEVBQUUsZUFBZSxFQUE0QixNQUFNLE1BQU0sQ0FBQztBQUNqRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDaEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3pELE9BQU8sRUFDTCxNQUFNLEVBQ04sV0FBVyxFQUNYLGFBQWEsRUFDYixrQkFBa0IsRUFDbEIsVUFBVSxHQUNYLE1BQU0sa0JBQWtCLENBQUM7Ozs7QUFLMUI7SUFrQkUsOEJBQ2dDLFVBQWUsRUFDWixhQUFrQixFQUN6QyxNQUFvQixFQUNkLE1BQVc7UUFKN0IsaUJBY0M7UUFiK0IsZUFBVSxHQUFWLFVBQVUsQ0FBSztRQUNaLGtCQUFhLEdBQWIsYUFBYSxDQUFLO1FBQ3pDLFdBQU0sR0FBTixNQUFNLENBQWM7UUFSZix5QkFBb0IsR0FBUSxFQUFFLENBQUM7UUFDL0Isa0JBQWEsR0FBUSxFQUFFLENBQUM7UUFVdkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVsRCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLE1BQU07YUFDbEMsR0FBRyxDQUFDLHNCQUFzQixDQUFDO2FBQzNCLFNBQVMsQ0FBQyxVQUFDLGlCQUFpQjtZQUMzQixLQUFJLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDeEMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsbUVBQW1FO0lBQzNELDRDQUFhLEdBQXJCLFVBQXNCLGlCQUF5QztRQUM3RCxJQUFNLGNBQWMsR0FBRyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FDN0Qsa0JBQWtCLEVBQ2xCLElBQUksRUFDSixXQUFXLENBQUMsSUFBSSxDQUNqQixDQUFDO1FBQ0YsSUFBSSxjQUFjLGFBQWQsY0FBYyx1QkFBZCxjQUFjLENBQUUsTUFBTSxFQUFFO1lBQzFCLFNBQVMseUJBQUMsSUFBSSxDQUFDLG9CQUFvQixHQUFLLGNBQWMsR0FBRTtTQUN6RDtRQUNELElBQU0sT0FBTyxHQUFHLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUN0RCxXQUFXLEVBQ1gsSUFBSSxFQUNKLFdBQVcsQ0FBQyxJQUFJLENBQ2pCLENBQUM7UUFDRixJQUFJLE9BQU8sYUFBUCxPQUFPLHVCQUFQLE9BQU8sQ0FBRSxNQUFNLEVBQUU7WUFDbkIsU0FBUyx5QkFBQyxJQUFJLENBQUMsYUFBYSxHQUFLLE9BQU8sR0FBRTtTQUMzQztRQUNELElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFTyxnREFBaUIsR0FBekI7UUFDRSxJQUFNLFNBQVMsR0FBRyxTQUFTLENBQ3pCLEVBQUUsRUFDRixJQUFJLENBQUMsYUFBYSxFQUNsQixJQUFJLENBQUMsb0JBQW9CLEVBQ3pCLElBQUksQ0FBQyxhQUFhLEVBQ2xCLElBQUksQ0FBQyxVQUFVLENBQ2hCLENBQUM7UUFDRCxJQUFJLENBQUMsY0FBdUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFOUQsK0RBQStEO1FBQy9ELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLHNCQUFzQixDQUFDLEVBQUU7WUFDMUQsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUM7U0FDbkM7SUFDSCxDQUFDO0lBRUQsMENBQVcsR0FBWDtRQUNFLElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFO1lBQzNCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUN2QztRQUNBLElBQUksQ0FBQyxjQUF1QyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzNELENBQUM7O2dEQXpERSxNQUFNLFNBQUMsVUFBVTtnREFDakIsTUFBTSxTQUFDLGFBQWE7Z0JBQ0gsWUFBWTtnREFDN0IsTUFBTSxTQUFDLE1BQU07OztJQXRCTCxvQkFBb0I7UUFIaEMsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztRQW9CRyxXQUFBLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQTtRQUNsQixXQUFBLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQTtRQUVyQixXQUFBLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQTtPQXRCTixvQkFBb0IsQ0E2RWhDOytCQTlGRDtDQThGQyxBQTdFRCxJQTZFQztTQTdFWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIEluamVjdEZsYWdzLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWVwTWVyZ2UgfSBmcm9tICcuLi91dGlscy9kZWVwLW1lcmdlJztcbmltcG9ydCB7IEV2ZW50U2VydmljZSB9IGZyb20gJy4uLy4uL2V2ZW50L2V2ZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgTW9kdWxlSW5pdGlhbGl6ZWRFdmVudCB9IGZyb20gJy4uLy4uL2Ntcy9ldmVudHMvbW9kdWxlLWluaXRpYWxpemVkLWV2ZW50JztcbmltcG9ydCB7IGlzRmVhdHVyZUVuYWJsZWQgfSBmcm9tICcuLi8uLi9mZWF0dXJlcy1jb25maWcnO1xuaW1wb3J0IHtcbiAgQ29uZmlnLFxuICBDb25maWdDaHVuayxcbiAgRGVmYXVsdENvbmZpZyxcbiAgRGVmYXVsdENvbmZpZ0NodW5rLFxuICBSb290Q29uZmlnLFxufSBmcm9tICcuLi9jb25maWctdG9rZW5zJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENvbmZpZ3VyYXRpb25TZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgLyoqXG4gICAqIFdpbGwgZW1pdCB1bmlmaWVkIGNvbmZpZ3VyYXRpb24gd2hlbiBzb21lIGFtYmllbnQgY29uZmlndXJhdGlvbiB3aWxsIGFwcGVhclxuICAgKlxuICAgKiBBbWJpZW50IGNvbmZpZ3VyYXRpb24gY2FuIGFwcGVhciB3aGVuIHdlIGxhenkgbG9hZCBtb2R1bGUgd2l0aCBjb25maWd1cmF0aW9uXG4gICAqL1xuICByZWFkb25seSB1bmlmaWVkQ29uZmlnJDogT2JzZXJ2YWJsZTxhbnk+O1xuXG4gIC8qKlxuICAgKiBHbG9iYWwgYXBwbGljYXRpb24gY29uZmlndXJhdGlvblxuICAgKi9cbiAgcmVhZG9ubHkgY29uZmlnOiBhbnk7XG5cbiAgcHJpdmF0ZSByZWFkb25seSBhbWJpZW50RGVmYXVsdENvbmZpZzogYW55ID0ge307XG4gIHByaXZhdGUgcmVhZG9ubHkgYW1iaWVudENvbmZpZzogYW55ID0ge307XG5cbiAgcHJpdmF0ZSBldmVudHNTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KFJvb3RDb25maWcpIHByb3RlY3RlZCByb290Q29uZmlnOiBhbnksXG4gICAgQEluamVjdChEZWZhdWx0Q29uZmlnKSBwcm90ZWN0ZWQgZGVmYXVsdENvbmZpZzogYW55LFxuICAgIHByb3RlY3RlZCBldmVudHM6IEV2ZW50U2VydmljZSxcbiAgICBASW5qZWN0KENvbmZpZykgY29uZmlnOiBhbnlcbiAgKSB7XG4gICAgdGhpcy5jb25maWcgPSBjb25maWc7XG4gICAgdGhpcy51bmlmaWVkQ29uZmlnJCA9IG5ldyBCZWhhdmlvclN1YmplY3QoY29uZmlnKTtcblxuICAgIHRoaXMuZXZlbnRzU3Vic2NyaXB0aW9uID0gdGhpcy5ldmVudHNcbiAgICAgIC5nZXQoTW9kdWxlSW5pdGlhbGl6ZWRFdmVudClcbiAgICAgIC5zdWJzY3JpYmUoKG1vZHVsZUluaXRpYWxpemVkKSA9PiB7XG4gICAgICAgIHRoaXMucHJvY2Vzc01vZHVsZShtb2R1bGVJbml0aWFsaXplZCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8vIFdlIGFyZSBleHRyYWN0aW5nIGFtYmllbnQgY29uZmlndXJhdGlvbiBmcm9tIGxhenkgbG9hZGVkIG1vZHVsZXNcbiAgcHJpdmF0ZSBwcm9jZXNzTW9kdWxlKG1vZHVsZUluaXRpYWxpemVkOiBNb2R1bGVJbml0aWFsaXplZEV2ZW50KSB7XG4gICAgY29uc3QgZGVmYXVsdENvbmZpZ3MgPSBtb2R1bGVJbml0aWFsaXplZC5tb2R1bGVSZWYuaW5qZWN0b3IuZ2V0KFxuICAgICAgRGVmYXVsdENvbmZpZ0NodW5rLFxuICAgICAgbnVsbCxcbiAgICAgIEluamVjdEZsYWdzLlNlbGZcbiAgICApO1xuICAgIGlmIChkZWZhdWx0Q29uZmlncz8ubGVuZ3RoKSB7XG4gICAgICBkZWVwTWVyZ2UodGhpcy5hbWJpZW50RGVmYXVsdENvbmZpZywgLi4uZGVmYXVsdENvbmZpZ3MpO1xuICAgIH1cbiAgICBjb25zdCBjb25maWdzID0gbW9kdWxlSW5pdGlhbGl6ZWQubW9kdWxlUmVmLmluamVjdG9yLmdldChcbiAgICAgIENvbmZpZ0NodW5rLFxuICAgICAgbnVsbCxcbiAgICAgIEluamVjdEZsYWdzLlNlbGZcbiAgICApO1xuICAgIGlmIChjb25maWdzPy5sZW5ndGgpIHtcbiAgICAgIGRlZXBNZXJnZSh0aGlzLmFtYmllbnRDb25maWcsIC4uLmNvbmZpZ3MpO1xuICAgIH1cbiAgICB0aGlzLmVtaXRVbmlmaWVkQ29uZmlnKCk7XG4gIH1cblxuICBwcml2YXRlIGVtaXRVbmlmaWVkQ29uZmlnKCk6IHZvaWQge1xuICAgIGNvbnN0IG5ld0NvbmZpZyA9IGRlZXBNZXJnZShcbiAgICAgIHt9LFxuICAgICAgdGhpcy5kZWZhdWx0Q29uZmlnLFxuICAgICAgdGhpcy5hbWJpZW50RGVmYXVsdENvbmZpZyxcbiAgICAgIHRoaXMuYW1iaWVudENvbmZpZyxcbiAgICAgIHRoaXMucm9vdENvbmZpZ1xuICAgICk7XG4gICAgKHRoaXMudW5pZmllZENvbmZpZyQgYXMgQmVoYXZpb3JTdWJqZWN0PGFueT4pLm5leHQobmV3Q29uZmlnKTtcblxuICAgIC8vIGNvbXBhdGliaWxpdHkgbWVjaGFuaXNtLCBjYW4gYmUgZGlzYWJsZWQgd2l0aCBmZWF0dXJlIHRvZ2dsZVxuICAgIGlmICghaXNGZWF0dXJlRW5hYmxlZCh0aGlzLmNvbmZpZywgJ2Rpc2FibGVDb25maWdVcGRhdGVzJykpIHtcbiAgICAgIGRlZXBNZXJnZSh0aGlzLmNvbmZpZywgbmV3Q29uZmlnKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5ldmVudHNTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuZXZlbnRzU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgICh0aGlzLnVuaWZpZWRDb25maWckIGFzIEJlaGF2aW9yU3ViamVjdDxhbnk+KS5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=
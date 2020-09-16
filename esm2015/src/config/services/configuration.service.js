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
export class ConfigurationService {
    constructor(rootConfig, defaultConfig, events, config) {
        this.rootConfig = rootConfig;
        this.defaultConfig = defaultConfig;
        this.events = events;
        this.ambientDefaultConfig = {};
        this.ambientConfig = {};
        this.config = config;
        this.unifiedConfig$ = new BehaviorSubject(config);
        this.eventsSubscription = this.events
            .get(ModuleInitializedEvent)
            .subscribe((moduleInitialized) => {
            this.processModule(moduleInitialized);
        });
    }
    // We are extracting ambient configuration from lazy loaded modules
    processModule(moduleInitialized) {
        const defaultConfigs = moduleInitialized.moduleRef.injector.get(DefaultConfigChunk, null, InjectFlags.Self);
        if (defaultConfigs === null || defaultConfigs === void 0 ? void 0 : defaultConfigs.length) {
            deepMerge(this.ambientDefaultConfig, ...defaultConfigs);
        }
        const configs = moduleInitialized.moduleRef.injector.get(ConfigChunk, null, InjectFlags.Self);
        if (configs === null || configs === void 0 ? void 0 : configs.length) {
            deepMerge(this.ambientConfig, ...configs);
        }
        this.emitUnifiedConfig();
    }
    emitUnifiedConfig() {
        const newConfig = deepMerge({}, this.defaultConfig, this.ambientDefaultConfig, this.ambientConfig, this.rootConfig);
        this.unifiedConfig$.next(newConfig);
        // compatibility mechanism, can be disabled with feature toggle
        if (!isFeatureEnabled(this.config, 'disableConfigUpdates')) {
            deepMerge(this.config, newConfig);
        }
    }
    ngOnDestroy() {
        if (this.eventsSubscription) {
            this.eventsSubscription.unsubscribe();
        }
        this.unifiedConfig$.complete();
    }
}
ConfigurationService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ConfigurationService_Factory() { return new ConfigurationService(i0.ɵɵinject(i1.RootConfig), i0.ɵɵinject(i1.DefaultConfig), i0.ɵɵinject(i2.EventService), i0.ɵɵinject(i1.Config)); }, token: ConfigurationService, providedIn: "root" });
ConfigurationService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
ConfigurationService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [RootConfig,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [DefaultConfig,] }] },
    { type: EventService },
    { type: undefined, decorators: [{ type: Inject, args: [Config,] }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS9zcmMvY29uZmlnL3NlcnZpY2VzL2NvbmZpZ3VyYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDM0UsT0FBTyxFQUFFLGVBQWUsRUFBNEIsTUFBTSxNQUFNLENBQUM7QUFDakUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNuRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUN6RCxPQUFPLEVBQ0wsTUFBTSxFQUNOLFdBQVcsRUFDWCxhQUFhLEVBQ2Isa0JBQWtCLEVBQ2xCLFVBQVUsR0FDWCxNQUFNLGtCQUFrQixDQUFDOzs7O0FBSzFCLE1BQU0sT0FBTyxvQkFBb0I7SUFrQi9CLFlBQ2dDLFVBQWUsRUFDWixhQUFrQixFQUN6QyxNQUFvQixFQUNkLE1BQVc7UUFIRyxlQUFVLEdBQVYsVUFBVSxDQUFLO1FBQ1osa0JBQWEsR0FBYixhQUFhLENBQUs7UUFDekMsV0FBTSxHQUFOLE1BQU0sQ0FBYztRQVJmLHlCQUFvQixHQUFRLEVBQUUsQ0FBQztRQUMvQixrQkFBYSxHQUFRLEVBQUUsQ0FBQztRQVV2QyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRWxELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsTUFBTTthQUNsQyxHQUFHLENBQUMsc0JBQXNCLENBQUM7YUFDM0IsU0FBUyxDQUFDLENBQUMsaUJBQWlCLEVBQUUsRUFBRTtZQUMvQixJQUFJLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDeEMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsbUVBQW1FO0lBQzNELGFBQWEsQ0FBQyxpQkFBeUM7UUFDN0QsTUFBTSxjQUFjLEdBQUcsaUJBQWlCLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQzdELGtCQUFrQixFQUNsQixJQUFJLEVBQ0osV0FBVyxDQUFDLElBQUksQ0FDakIsQ0FBQztRQUNGLElBQUksY0FBYyxhQUFkLGNBQWMsdUJBQWQsY0FBYyxDQUFFLE1BQU0sRUFBRTtZQUMxQixTQUFTLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLEdBQUcsY0FBYyxDQUFDLENBQUM7U0FDekQ7UUFDRCxNQUFNLE9BQU8sR0FBRyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FDdEQsV0FBVyxFQUNYLElBQUksRUFDSixXQUFXLENBQUMsSUFBSSxDQUNqQixDQUFDO1FBQ0YsSUFBSSxPQUFPLGFBQVAsT0FBTyx1QkFBUCxPQUFPLENBQUUsTUFBTSxFQUFFO1lBQ25CLFNBQVMsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsT0FBTyxDQUFDLENBQUM7U0FDM0M7UUFDRCxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRU8saUJBQWlCO1FBQ3ZCLE1BQU0sU0FBUyxHQUFHLFNBQVMsQ0FDekIsRUFBRSxFQUNGLElBQUksQ0FBQyxhQUFhLEVBQ2xCLElBQUksQ0FBQyxvQkFBb0IsRUFDekIsSUFBSSxDQUFDLGFBQWEsRUFDbEIsSUFBSSxDQUFDLFVBQVUsQ0FDaEIsQ0FBQztRQUNELElBQUksQ0FBQyxjQUF1QyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUU5RCwrREFBK0Q7UUFDL0QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsc0JBQXNCLENBQUMsRUFBRTtZQUMxRCxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQztTQUNuQztJQUNILENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDM0IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3ZDO1FBQ0EsSUFBSSxDQUFDLGNBQXVDLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDM0QsQ0FBQzs7OztZQS9FRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs0Q0FvQkksTUFBTSxTQUFDLFVBQVU7NENBQ2pCLE1BQU0sU0FBQyxhQUFhO1lBbENoQixZQUFZOzRDQW9DaEIsTUFBTSxTQUFDLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIEluamVjdEZsYWdzLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWVwTWVyZ2UgfSBmcm9tICcuLi91dGlscy9kZWVwLW1lcmdlJztcbmltcG9ydCB7IEV2ZW50U2VydmljZSB9IGZyb20gJy4uLy4uL2V2ZW50L2V2ZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgTW9kdWxlSW5pdGlhbGl6ZWRFdmVudCB9IGZyb20gJy4uLy4uL2Ntcy9ldmVudHMvbW9kdWxlLWluaXRpYWxpemVkLWV2ZW50JztcbmltcG9ydCB7IGlzRmVhdHVyZUVuYWJsZWQgfSBmcm9tICcuLi8uLi9mZWF0dXJlcy1jb25maWcnO1xuaW1wb3J0IHtcbiAgQ29uZmlnLFxuICBDb25maWdDaHVuayxcbiAgRGVmYXVsdENvbmZpZyxcbiAgRGVmYXVsdENvbmZpZ0NodW5rLFxuICBSb290Q29uZmlnLFxufSBmcm9tICcuLi9jb25maWctdG9rZW5zJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENvbmZpZ3VyYXRpb25TZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgLyoqXG4gICAqIFdpbGwgZW1pdCB1bmlmaWVkIGNvbmZpZ3VyYXRpb24gd2hlbiBzb21lIGFtYmllbnQgY29uZmlndXJhdGlvbiB3aWxsIGFwcGVhclxuICAgKlxuICAgKiBBbWJpZW50IGNvbmZpZ3VyYXRpb24gY2FuIGFwcGVhciB3aGVuIHdlIGxhenkgbG9hZCBtb2R1bGUgd2l0aCBjb25maWd1cmF0aW9uXG4gICAqL1xuICByZWFkb25seSB1bmlmaWVkQ29uZmlnJDogT2JzZXJ2YWJsZTxhbnk+O1xuXG4gIC8qKlxuICAgKiBHbG9iYWwgYXBwbGljYXRpb24gY29uZmlndXJhdGlvblxuICAgKi9cbiAgcmVhZG9ubHkgY29uZmlnOiBhbnk7XG5cbiAgcHJpdmF0ZSByZWFkb25seSBhbWJpZW50RGVmYXVsdENvbmZpZzogYW55ID0ge307XG4gIHByaXZhdGUgcmVhZG9ubHkgYW1iaWVudENvbmZpZzogYW55ID0ge307XG5cbiAgcHJpdmF0ZSBldmVudHNTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KFJvb3RDb25maWcpIHByb3RlY3RlZCByb290Q29uZmlnOiBhbnksXG4gICAgQEluamVjdChEZWZhdWx0Q29uZmlnKSBwcm90ZWN0ZWQgZGVmYXVsdENvbmZpZzogYW55LFxuICAgIHByb3RlY3RlZCBldmVudHM6IEV2ZW50U2VydmljZSxcbiAgICBASW5qZWN0KENvbmZpZykgY29uZmlnOiBhbnlcbiAgKSB7XG4gICAgdGhpcy5jb25maWcgPSBjb25maWc7XG4gICAgdGhpcy51bmlmaWVkQ29uZmlnJCA9IG5ldyBCZWhhdmlvclN1YmplY3QoY29uZmlnKTtcblxuICAgIHRoaXMuZXZlbnRzU3Vic2NyaXB0aW9uID0gdGhpcy5ldmVudHNcbiAgICAgIC5nZXQoTW9kdWxlSW5pdGlhbGl6ZWRFdmVudClcbiAgICAgIC5zdWJzY3JpYmUoKG1vZHVsZUluaXRpYWxpemVkKSA9PiB7XG4gICAgICAgIHRoaXMucHJvY2Vzc01vZHVsZShtb2R1bGVJbml0aWFsaXplZCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8vIFdlIGFyZSBleHRyYWN0aW5nIGFtYmllbnQgY29uZmlndXJhdGlvbiBmcm9tIGxhenkgbG9hZGVkIG1vZHVsZXNcbiAgcHJpdmF0ZSBwcm9jZXNzTW9kdWxlKG1vZHVsZUluaXRpYWxpemVkOiBNb2R1bGVJbml0aWFsaXplZEV2ZW50KSB7XG4gICAgY29uc3QgZGVmYXVsdENvbmZpZ3MgPSBtb2R1bGVJbml0aWFsaXplZC5tb2R1bGVSZWYuaW5qZWN0b3IuZ2V0KFxuICAgICAgRGVmYXVsdENvbmZpZ0NodW5rLFxuICAgICAgbnVsbCxcbiAgICAgIEluamVjdEZsYWdzLlNlbGZcbiAgICApO1xuICAgIGlmIChkZWZhdWx0Q29uZmlncz8ubGVuZ3RoKSB7XG4gICAgICBkZWVwTWVyZ2UodGhpcy5hbWJpZW50RGVmYXVsdENvbmZpZywgLi4uZGVmYXVsdENvbmZpZ3MpO1xuICAgIH1cbiAgICBjb25zdCBjb25maWdzID0gbW9kdWxlSW5pdGlhbGl6ZWQubW9kdWxlUmVmLmluamVjdG9yLmdldChcbiAgICAgIENvbmZpZ0NodW5rLFxuICAgICAgbnVsbCxcbiAgICAgIEluamVjdEZsYWdzLlNlbGZcbiAgICApO1xuICAgIGlmIChjb25maWdzPy5sZW5ndGgpIHtcbiAgICAgIGRlZXBNZXJnZSh0aGlzLmFtYmllbnRDb25maWcsIC4uLmNvbmZpZ3MpO1xuICAgIH1cbiAgICB0aGlzLmVtaXRVbmlmaWVkQ29uZmlnKCk7XG4gIH1cblxuICBwcml2YXRlIGVtaXRVbmlmaWVkQ29uZmlnKCk6IHZvaWQge1xuICAgIGNvbnN0IG5ld0NvbmZpZyA9IGRlZXBNZXJnZShcbiAgICAgIHt9LFxuICAgICAgdGhpcy5kZWZhdWx0Q29uZmlnLFxuICAgICAgdGhpcy5hbWJpZW50RGVmYXVsdENvbmZpZyxcbiAgICAgIHRoaXMuYW1iaWVudENvbmZpZyxcbiAgICAgIHRoaXMucm9vdENvbmZpZ1xuICAgICk7XG4gICAgKHRoaXMudW5pZmllZENvbmZpZyQgYXMgQmVoYXZpb3JTdWJqZWN0PGFueT4pLm5leHQobmV3Q29uZmlnKTtcblxuICAgIC8vIGNvbXBhdGliaWxpdHkgbWVjaGFuaXNtLCBjYW4gYmUgZGlzYWJsZWQgd2l0aCBmZWF0dXJlIHRvZ2dsZVxuICAgIGlmICghaXNGZWF0dXJlRW5hYmxlZCh0aGlzLmNvbmZpZywgJ2Rpc2FibGVDb25maWdVcGRhdGVzJykpIHtcbiAgICAgIGRlZXBNZXJnZSh0aGlzLmNvbmZpZywgbmV3Q29uZmlnKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5ldmVudHNTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuZXZlbnRzU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgICh0aGlzLnVuaWZpZWRDb25maWckIGFzIEJlaGF2aW9yU3ViamVjdDxhbnk+KS5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=
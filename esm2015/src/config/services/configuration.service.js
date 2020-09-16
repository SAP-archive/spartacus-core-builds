import { __decorate, __param } from "tslib";
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
let ConfigurationService = class ConfigurationService {
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
};
ConfigurationService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [RootConfig,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [DefaultConfig,] }] },
    { type: EventService },
    { type: undefined, decorators: [{ type: Inject, args: [Config,] }] }
];
ConfigurationService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ConfigurationService_Factory() { return new ConfigurationService(i0.ɵɵinject(i1.RootConfig), i0.ɵɵinject(i1.DefaultConfig), i0.ɵɵinject(i2.EventService), i0.ɵɵinject(i1.Config)); }, token: ConfigurationService, providedIn: "root" });
ConfigurationService = __decorate([
    Injectable({
        providedIn: 'root',
    }),
    __param(0, Inject(RootConfig)),
    __param(1, Inject(DefaultConfig)),
    __param(3, Inject(Config))
], ConfigurationService);
export { ConfigurationService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NvbmZpZy9zZXJ2aWNlcy9jb25maWd1cmF0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUMzRSxPQUFPLEVBQUUsZUFBZSxFQUE0QixNQUFNLE1BQU0sQ0FBQztBQUNqRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDaEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3pELE9BQU8sRUFDTCxNQUFNLEVBQ04sV0FBVyxFQUNYLGFBQWEsRUFDYixrQkFBa0IsRUFDbEIsVUFBVSxHQUNYLE1BQU0sa0JBQWtCLENBQUM7Ozs7QUFLMUIsSUFBYSxvQkFBb0IsR0FBakMsTUFBYSxvQkFBb0I7SUFrQi9CLFlBQ2dDLFVBQWUsRUFDWixhQUFrQixFQUN6QyxNQUFvQixFQUNkLE1BQVc7UUFIRyxlQUFVLEdBQVYsVUFBVSxDQUFLO1FBQ1osa0JBQWEsR0FBYixhQUFhLENBQUs7UUFDekMsV0FBTSxHQUFOLE1BQU0sQ0FBYztRQVJmLHlCQUFvQixHQUFRLEVBQUUsQ0FBQztRQUMvQixrQkFBYSxHQUFRLEVBQUUsQ0FBQztRQVV2QyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRWxELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsTUFBTTthQUNsQyxHQUFHLENBQUMsc0JBQXNCLENBQUM7YUFDM0IsU0FBUyxDQUFDLENBQUMsaUJBQWlCLEVBQUUsRUFBRTtZQUMvQixJQUFJLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDeEMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsbUVBQW1FO0lBQzNELGFBQWEsQ0FBQyxpQkFBeUM7UUFDN0QsTUFBTSxjQUFjLEdBQUcsaUJBQWlCLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQzdELGtCQUFrQixFQUNsQixJQUFJLEVBQ0osV0FBVyxDQUFDLElBQUksQ0FDakIsQ0FBQztRQUNGLElBQUksY0FBYyxhQUFkLGNBQWMsdUJBQWQsY0FBYyxDQUFFLE1BQU0sRUFBRTtZQUMxQixTQUFTLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLEdBQUcsY0FBYyxDQUFDLENBQUM7U0FDekQ7UUFDRCxNQUFNLE9BQU8sR0FBRyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FDdEQsV0FBVyxFQUNYLElBQUksRUFDSixXQUFXLENBQUMsSUFBSSxDQUNqQixDQUFDO1FBQ0YsSUFBSSxPQUFPLGFBQVAsT0FBTyx1QkFBUCxPQUFPLENBQUUsTUFBTSxFQUFFO1lBQ25CLFNBQVMsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEdBQUcsT0FBTyxDQUFDLENBQUM7U0FDM0M7UUFDRCxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRU8saUJBQWlCO1FBQ3ZCLE1BQU0sU0FBUyxHQUFHLFNBQVMsQ0FDekIsRUFBRSxFQUNGLElBQUksQ0FBQyxhQUFhLEVBQ2xCLElBQUksQ0FBQyxvQkFBb0IsRUFDekIsSUFBSSxDQUFDLGFBQWEsRUFDbEIsSUFBSSxDQUFDLFVBQVUsQ0FDaEIsQ0FBQztRQUNELElBQUksQ0FBQyxjQUF1QyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUU5RCwrREFBK0Q7UUFDL0QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsc0JBQXNCLENBQUMsRUFBRTtZQUMxRCxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQztTQUNuQztJQUNILENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDM0IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3ZDO1FBQ0EsSUFBSSxDQUFDLGNBQXVDLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDM0QsQ0FBQztDQUNGLENBQUE7OzRDQTFESSxNQUFNLFNBQUMsVUFBVTs0Q0FDakIsTUFBTSxTQUFDLGFBQWE7WUFDSCxZQUFZOzRDQUM3QixNQUFNLFNBQUMsTUFBTTs7O0FBdEJMLG9CQUFvQjtJQUhoQyxVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDO0lBb0JHLFdBQUEsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQ2xCLFdBQUEsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFBO0lBRXJCLFdBQUEsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFBO0dBdEJOLG9CQUFvQixDQTZFaEM7U0E3RVksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBJbmplY3RGbGFncywgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVlcE1lcmdlIH0gZnJvbSAnLi4vdXRpbHMvZGVlcC1tZXJnZSc7XG5pbXBvcnQgeyBFdmVudFNlcnZpY2UgfSBmcm9tICcuLi8uLi9ldmVudC9ldmVudC5zZXJ2aWNlJztcbmltcG9ydCB7IE1vZHVsZUluaXRpYWxpemVkRXZlbnQgfSBmcm9tICcuLi8uLi9jbXMvZXZlbnRzL21vZHVsZS1pbml0aWFsaXplZC1ldmVudCc7XG5pbXBvcnQgeyBpc0ZlYXR1cmVFbmFibGVkIH0gZnJvbSAnLi4vLi4vZmVhdHVyZXMtY29uZmlnJztcbmltcG9ydCB7XG4gIENvbmZpZyxcbiAgQ29uZmlnQ2h1bmssXG4gIERlZmF1bHRDb25maWcsXG4gIERlZmF1bHRDb25maWdDaHVuayxcbiAgUm9vdENvbmZpZyxcbn0gZnJvbSAnLi4vY29uZmlnLXRva2Vucyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDb25maWd1cmF0aW9uU2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIC8qKlxuICAgKiBXaWxsIGVtaXQgdW5pZmllZCBjb25maWd1cmF0aW9uIHdoZW4gc29tZSBhbWJpZW50IGNvbmZpZ3VyYXRpb24gd2lsbCBhcHBlYXJcbiAgICpcbiAgICogQW1iaWVudCBjb25maWd1cmF0aW9uIGNhbiBhcHBlYXIgd2hlbiB3ZSBsYXp5IGxvYWQgbW9kdWxlIHdpdGggY29uZmlndXJhdGlvblxuICAgKi9cbiAgcmVhZG9ubHkgdW5pZmllZENvbmZpZyQ6IE9ic2VydmFibGU8YW55PjtcblxuICAvKipcbiAgICogR2xvYmFsIGFwcGxpY2F0aW9uIGNvbmZpZ3VyYXRpb25cbiAgICovXG4gIHJlYWRvbmx5IGNvbmZpZzogYW55O1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgYW1iaWVudERlZmF1bHRDb25maWc6IGFueSA9IHt9O1xuICBwcml2YXRlIHJlYWRvbmx5IGFtYmllbnRDb25maWc6IGFueSA9IHt9O1xuXG4gIHByaXZhdGUgZXZlbnRzU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChSb290Q29uZmlnKSBwcm90ZWN0ZWQgcm9vdENvbmZpZzogYW55LFxuICAgIEBJbmplY3QoRGVmYXVsdENvbmZpZykgcHJvdGVjdGVkIGRlZmF1bHRDb25maWc6IGFueSxcbiAgICBwcm90ZWN0ZWQgZXZlbnRzOiBFdmVudFNlcnZpY2UsXG4gICAgQEluamVjdChDb25maWcpIGNvbmZpZzogYW55XG4gICkge1xuICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICAgIHRoaXMudW5pZmllZENvbmZpZyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KGNvbmZpZyk7XG5cbiAgICB0aGlzLmV2ZW50c1N1YnNjcmlwdGlvbiA9IHRoaXMuZXZlbnRzXG4gICAgICAuZ2V0KE1vZHVsZUluaXRpYWxpemVkRXZlbnQpXG4gICAgICAuc3Vic2NyaWJlKChtb2R1bGVJbml0aWFsaXplZCkgPT4ge1xuICAgICAgICB0aGlzLnByb2Nlc3NNb2R1bGUobW9kdWxlSW5pdGlhbGl6ZWQpO1xuICAgICAgfSk7XG4gIH1cblxuICAvLyBXZSBhcmUgZXh0cmFjdGluZyBhbWJpZW50IGNvbmZpZ3VyYXRpb24gZnJvbSBsYXp5IGxvYWRlZCBtb2R1bGVzXG4gIHByaXZhdGUgcHJvY2Vzc01vZHVsZShtb2R1bGVJbml0aWFsaXplZDogTW9kdWxlSW5pdGlhbGl6ZWRFdmVudCkge1xuICAgIGNvbnN0IGRlZmF1bHRDb25maWdzID0gbW9kdWxlSW5pdGlhbGl6ZWQubW9kdWxlUmVmLmluamVjdG9yLmdldChcbiAgICAgIERlZmF1bHRDb25maWdDaHVuayxcbiAgICAgIG51bGwsXG4gICAgICBJbmplY3RGbGFncy5TZWxmXG4gICAgKTtcbiAgICBpZiAoZGVmYXVsdENvbmZpZ3M/Lmxlbmd0aCkge1xuICAgICAgZGVlcE1lcmdlKHRoaXMuYW1iaWVudERlZmF1bHRDb25maWcsIC4uLmRlZmF1bHRDb25maWdzKTtcbiAgICB9XG4gICAgY29uc3QgY29uZmlncyA9IG1vZHVsZUluaXRpYWxpemVkLm1vZHVsZVJlZi5pbmplY3Rvci5nZXQoXG4gICAgICBDb25maWdDaHVuayxcbiAgICAgIG51bGwsXG4gICAgICBJbmplY3RGbGFncy5TZWxmXG4gICAgKTtcbiAgICBpZiAoY29uZmlncz8ubGVuZ3RoKSB7XG4gICAgICBkZWVwTWVyZ2UodGhpcy5hbWJpZW50Q29uZmlnLCAuLi5jb25maWdzKTtcbiAgICB9XG4gICAgdGhpcy5lbWl0VW5pZmllZENvbmZpZygpO1xuICB9XG5cbiAgcHJpdmF0ZSBlbWl0VW5pZmllZENvbmZpZygpOiB2b2lkIHtcbiAgICBjb25zdCBuZXdDb25maWcgPSBkZWVwTWVyZ2UoXG4gICAgICB7fSxcbiAgICAgIHRoaXMuZGVmYXVsdENvbmZpZyxcbiAgICAgIHRoaXMuYW1iaWVudERlZmF1bHRDb25maWcsXG4gICAgICB0aGlzLmFtYmllbnRDb25maWcsXG4gICAgICB0aGlzLnJvb3RDb25maWdcbiAgICApO1xuICAgICh0aGlzLnVuaWZpZWRDb25maWckIGFzIEJlaGF2aW9yU3ViamVjdDxhbnk+KS5uZXh0KG5ld0NvbmZpZyk7XG5cbiAgICAvLyBjb21wYXRpYmlsaXR5IG1lY2hhbmlzbSwgY2FuIGJlIGRpc2FibGVkIHdpdGggZmVhdHVyZSB0b2dnbGVcbiAgICBpZiAoIWlzRmVhdHVyZUVuYWJsZWQodGhpcy5jb25maWcsICdkaXNhYmxlQ29uZmlnVXBkYXRlcycpKSB7XG4gICAgICBkZWVwTWVyZ2UodGhpcy5jb25maWcsIG5ld0NvbmZpZyk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZXZlbnRzU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLmV2ZW50c1N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgICAodGhpcy51bmlmaWVkQ29uZmlnJCBhcyBCZWhhdmlvclN1YmplY3Q8YW55PikuY29tcGxldGUoKTtcbiAgfVxufVxuIl19
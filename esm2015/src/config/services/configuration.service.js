import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, zip } from 'rxjs';
import { deepMerge } from '../utils/deep-merge';
import { isFeatureEnabled } from '../../features-config';
import { Config, ConfigChunk, DefaultConfig, DefaultConfigChunk, RootConfig, } from '../config-tokens';
import { UnifiedInjector } from '../../lazy-loading/unified-injector';
import { skip, tap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "../config-tokens";
import * as i2 from "../../lazy-loading/unified-injector";
export class ConfigurationService {
    constructor(rootConfig, defaultConfig, unifiedInjector, config) {
        this.rootConfig = rootConfig;
        this.defaultConfig = defaultConfig;
        this.unifiedInjector = unifiedInjector;
        this.ambientDefaultConfig = {};
        this.ambientConfig = {};
        this.config = config;
        this.unifiedConfig$ = new BehaviorSubject(config);
        // We need to use subscription to propagate changes to the config from the beginning.
        // It will be possible to make it lazy, when we drop this compatibility feature
        // in the future.
        this.subscription = this.feedUnifiedConfig().subscribe();
    }
    feedUnifiedConfig() {
        const configChunks$ = this.unifiedInjector.get(ConfigChunk, []);
        const defaultConfigChunks$ = this.unifiedInjector.get(DefaultConfigChunk, []);
        return zip(configChunks$, defaultConfigChunks$).pipe(
        // we don't need result from the root injector
        skip(1), tap(([configChunks, defaultConfigChunks]) => this.processConfig(configChunks, defaultConfigChunks)));
    }
    processConfig(configChunks, defaultConfigChunks) {
        if (defaultConfigChunks === null || defaultConfigChunks === void 0 ? void 0 : defaultConfigChunks.length) {
            deepMerge(this.ambientDefaultConfig, ...defaultConfigChunks);
        }
        if (configChunks.length) {
            deepMerge(this.ambientConfig, ...configChunks);
        }
        if (configChunks.length || defaultConfigChunks.length) {
            this.emitUnifiedConfig();
        }
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
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
        this.unifiedConfig$.complete();
    }
}
ConfigurationService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ConfigurationService_Factory() { return new ConfigurationService(i0.ɵɵinject(i1.RootConfig), i0.ɵɵinject(i1.DefaultConfig), i0.ɵɵinject(i2.UnifiedInjector), i0.ɵɵinject(i1.Config)); }, token: ConfigurationService, providedIn: "root" });
ConfigurationService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
ConfigurationService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [RootConfig,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [DefaultConfig,] }] },
    { type: UnifiedInjector },
    { type: undefined, decorators: [{ type: Inject, args: [Config,] }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS9zcmMvY29uZmlnL3NlcnZpY2VzL2NvbmZpZ3VyYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZUFBZSxFQUE0QixHQUFHLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3pELE9BQU8sRUFDTCxNQUFNLEVBQ04sV0FBVyxFQUNYLGFBQWEsRUFDYixrQkFBa0IsRUFDbEIsVUFBVSxHQUNYLE1BQU0sa0JBQWtCLENBQUM7QUFDMUIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFLM0MsTUFBTSxPQUFPLG9CQUFvQjtJQWtCL0IsWUFDZ0MsVUFBZSxFQUNaLGFBQWtCLEVBQ3pDLGVBQWdDLEVBQzFCLE1BQVc7UUFIRyxlQUFVLEdBQVYsVUFBVSxDQUFLO1FBQ1osa0JBQWEsR0FBYixhQUFhLENBQUs7UUFDekMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBUjNCLHlCQUFvQixHQUFRLEVBQUUsQ0FBQztRQUMvQixrQkFBYSxHQUFRLEVBQUUsQ0FBQztRQVV2QyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRWxELHFGQUFxRjtRQUNyRiwrRUFBK0U7UUFDL0UsaUJBQWlCO1FBQ2pCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDM0QsQ0FBQztJQUVPLGlCQUFpQjtRQUN2QixNQUFNLGFBQWEsR0FBeUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQ2xFLFdBQVcsRUFDWCxFQUFFLENBQ0gsQ0FBQztRQUNGLE1BQU0sb0JBQW9CLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQ25ELGtCQUFrQixFQUNsQixFQUFFLENBQ0gsQ0FBQztRQUVGLE9BQU8sR0FBRyxDQUFDLGFBQWEsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDLElBQUk7UUFDbEQsOENBQThDO1FBQzlDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFDUCxHQUFHLENBQUMsQ0FBQyxDQUFDLFlBQVksRUFBRSxtQkFBbUIsQ0FBQyxFQUFFLEVBQUUsQ0FDMUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsbUJBQW1CLENBQUMsQ0FDdEQsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQUVPLGFBQWEsQ0FBQyxZQUFtQixFQUFFLG1CQUEwQjtRQUNuRSxJQUFJLG1CQUFtQixhQUFuQixtQkFBbUIsdUJBQW5CLG1CQUFtQixDQUFFLE1BQU0sRUFBRTtZQUMvQixTQUFTLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLEdBQUcsbUJBQW1CLENBQUMsQ0FBQztTQUM5RDtRQUNELElBQUksWUFBWSxDQUFDLE1BQU0sRUFBRTtZQUN2QixTQUFTLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLFlBQVksQ0FBQyxDQUFDO1NBQ2hEO1FBRUQsSUFBSSxZQUFZLENBQUMsTUFBTSxJQUFJLG1CQUFtQixDQUFDLE1BQU0sRUFBRTtZQUNyRCxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztTQUMxQjtJQUNILENBQUM7SUFFTyxpQkFBaUI7UUFDdkIsTUFBTSxTQUFTLEdBQUcsU0FBUyxDQUN6QixFQUFFLEVBQ0YsSUFBSSxDQUFDLGFBQWEsRUFDbEIsSUFBSSxDQUFDLG9CQUFvQixFQUN6QixJQUFJLENBQUMsYUFBYSxFQUNsQixJQUFJLENBQUMsVUFBVSxDQUNoQixDQUFDO1FBQ0QsSUFBSSxDQUFDLGNBQXVDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRTlELCtEQUErRDtRQUMvRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxzQkFBc0IsQ0FBQyxFQUFFO1lBQzFELFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1NBQ25DO0lBQ0gsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNqQztRQUNBLElBQUksQ0FBQyxjQUF1QyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzNELENBQUM7Ozs7WUF6RkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7NENBb0JJLE1BQU0sU0FBQyxVQUFVOzRDQUNqQixNQUFNLFNBQUMsYUFBYTtZQTFCaEIsZUFBZTs0Q0E0Qm5CLE1BQU0sU0FBQyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uLCB6aXAgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlZXBNZXJnZSB9IGZyb20gJy4uL3V0aWxzL2RlZXAtbWVyZ2UnO1xuaW1wb3J0IHsgaXNGZWF0dXJlRW5hYmxlZCB9IGZyb20gJy4uLy4uL2ZlYXR1cmVzLWNvbmZpZyc7XG5pbXBvcnQge1xuICBDb25maWcsXG4gIENvbmZpZ0NodW5rLFxuICBEZWZhdWx0Q29uZmlnLFxuICBEZWZhdWx0Q29uZmlnQ2h1bmssXG4gIFJvb3RDb25maWcsXG59IGZyb20gJy4uL2NvbmZpZy10b2tlbnMnO1xuaW1wb3J0IHsgVW5pZmllZEluamVjdG9yIH0gZnJvbSAnLi4vLi4vbGF6eS1sb2FkaW5nL3VuaWZpZWQtaW5qZWN0b3InO1xuaW1wb3J0IHsgc2tpcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ29uZmlndXJhdGlvblNlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICAvKipcbiAgICogV2lsbCBlbWl0IHVuaWZpZWQgY29uZmlndXJhdGlvbiB3aGVuIHNvbWUgYW1iaWVudCBjb25maWd1cmF0aW9uIHdpbGwgYXBwZWFyXG4gICAqXG4gICAqIEFtYmllbnQgY29uZmlndXJhdGlvbiBjYW4gYXBwZWFyIHdoZW4gd2UgbGF6eSBsb2FkIG1vZHVsZSB3aXRoIGNvbmZpZ3VyYXRpb25cbiAgICovXG4gIHJlYWRvbmx5IHVuaWZpZWRDb25maWckOiBPYnNlcnZhYmxlPGFueT47XG5cbiAgLyoqXG4gICAqIEdsb2JhbCBhcHBsaWNhdGlvbiBjb25maWd1cmF0aW9uXG4gICAqL1xuICByZWFkb25seSBjb25maWc6IGFueTtcblxuICBwcml2YXRlIHJlYWRvbmx5IGFtYmllbnREZWZhdWx0Q29uZmlnOiBhbnkgPSB7fTtcbiAgcHJpdmF0ZSByZWFkb25seSBhbWJpZW50Q29uZmlnOiBhbnkgPSB7fTtcblxuICBwcml2YXRlIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoUm9vdENvbmZpZykgcHJvdGVjdGVkIHJvb3RDb25maWc6IGFueSxcbiAgICBASW5qZWN0KERlZmF1bHRDb25maWcpIHByb3RlY3RlZCBkZWZhdWx0Q29uZmlnOiBhbnksXG4gICAgcHJvdGVjdGVkIHVuaWZpZWRJbmplY3RvcjogVW5pZmllZEluamVjdG9yLFxuICAgIEBJbmplY3QoQ29uZmlnKSBjb25maWc6IGFueVxuICApIHtcbiAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcbiAgICB0aGlzLnVuaWZpZWRDb25maWckID0gbmV3IEJlaGF2aW9yU3ViamVjdChjb25maWcpO1xuXG4gICAgLy8gV2UgbmVlZCB0byB1c2Ugc3Vic2NyaXB0aW9uIHRvIHByb3BhZ2F0ZSBjaGFuZ2VzIHRvIHRoZSBjb25maWcgZnJvbSB0aGUgYmVnaW5uaW5nLlxuICAgIC8vIEl0IHdpbGwgYmUgcG9zc2libGUgdG8gbWFrZSBpdCBsYXp5LCB3aGVuIHdlIGRyb3AgdGhpcyBjb21wYXRpYmlsaXR5IGZlYXR1cmVcbiAgICAvLyBpbiB0aGUgZnV0dXJlLlxuICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5mZWVkVW5pZmllZENvbmZpZygpLnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBmZWVkVW5pZmllZENvbmZpZygpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIGNvbnN0IGNvbmZpZ0NodW5rcyQ6IE9ic2VydmFibGU8b2JqZWN0W10+ID0gdGhpcy51bmlmaWVkSW5qZWN0b3IuZ2V0KFxuICAgICAgQ29uZmlnQ2h1bmssXG4gICAgICBbXVxuICAgICk7XG4gICAgY29uc3QgZGVmYXVsdENvbmZpZ0NodW5rcyQgPSB0aGlzLnVuaWZpZWRJbmplY3Rvci5nZXQoXG4gICAgICBEZWZhdWx0Q29uZmlnQ2h1bmssXG4gICAgICBbXVxuICAgICk7XG5cbiAgICByZXR1cm4gemlwKGNvbmZpZ0NodW5rcyQsIGRlZmF1bHRDb25maWdDaHVua3MkKS5waXBlKFxuICAgICAgLy8gd2UgZG9uJ3QgbmVlZCByZXN1bHQgZnJvbSB0aGUgcm9vdCBpbmplY3RvclxuICAgICAgc2tpcCgxKSxcbiAgICAgIHRhcCgoW2NvbmZpZ0NodW5rcywgZGVmYXVsdENvbmZpZ0NodW5rc10pID0+XG4gICAgICAgIHRoaXMucHJvY2Vzc0NvbmZpZyhjb25maWdDaHVua3MsIGRlZmF1bHRDb25maWdDaHVua3MpXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgcHJvY2Vzc0NvbmZpZyhjb25maWdDaHVua3M6IGFueVtdLCBkZWZhdWx0Q29uZmlnQ2h1bmtzOiBhbnlbXSkge1xuICAgIGlmIChkZWZhdWx0Q29uZmlnQ2h1bmtzPy5sZW5ndGgpIHtcbiAgICAgIGRlZXBNZXJnZSh0aGlzLmFtYmllbnREZWZhdWx0Q29uZmlnLCAuLi5kZWZhdWx0Q29uZmlnQ2h1bmtzKTtcbiAgICB9XG4gICAgaWYgKGNvbmZpZ0NodW5rcy5sZW5ndGgpIHtcbiAgICAgIGRlZXBNZXJnZSh0aGlzLmFtYmllbnRDb25maWcsIC4uLmNvbmZpZ0NodW5rcyk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZ0NodW5rcy5sZW5ndGggfHwgZGVmYXVsdENvbmZpZ0NodW5rcy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuZW1pdFVuaWZpZWRDb25maWcoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGVtaXRVbmlmaWVkQ29uZmlnKCk6IHZvaWQge1xuICAgIGNvbnN0IG5ld0NvbmZpZyA9IGRlZXBNZXJnZShcbiAgICAgIHt9LFxuICAgICAgdGhpcy5kZWZhdWx0Q29uZmlnLFxuICAgICAgdGhpcy5hbWJpZW50RGVmYXVsdENvbmZpZyxcbiAgICAgIHRoaXMuYW1iaWVudENvbmZpZyxcbiAgICAgIHRoaXMucm9vdENvbmZpZ1xuICAgICk7XG4gICAgKHRoaXMudW5pZmllZENvbmZpZyQgYXMgQmVoYXZpb3JTdWJqZWN0PGFueT4pLm5leHQobmV3Q29uZmlnKTtcblxuICAgIC8vIGNvbXBhdGliaWxpdHkgbWVjaGFuaXNtLCBjYW4gYmUgZGlzYWJsZWQgd2l0aCBmZWF0dXJlIHRvZ2dsZVxuICAgIGlmICghaXNGZWF0dXJlRW5hYmxlZCh0aGlzLmNvbmZpZywgJ2Rpc2FibGVDb25maWdVcGRhdGVzJykpIHtcbiAgICAgIGRlZXBNZXJnZSh0aGlzLmNvbmZpZywgbmV3Q29uZmlnKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICAgICh0aGlzLnVuaWZpZWRDb25maWckIGFzIEJlaGF2aW9yU3ViamVjdDxhbnk+KS5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=
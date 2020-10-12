import { Compiler, Injectable, Injector, NgModuleFactory, } from '@angular/core';
import { combineLatest, from, of, queueScheduler, } from 'rxjs';
import { map, observeOn, publishReplay, switchMap, tap } from 'rxjs/operators';
import { createFrom } from '../util';
import { ModuleInitializedEvent } from './events/module-initialized-event';
import { EventService } from '../event/event.service';
import * as i0 from "@angular/core";
import * as i1 from "../event/event.service";
/**
 * Utility service for managing dynamic imports of Angular services
 */
export class LazyModulesService {
    constructor(compiler, injector, events) {
        this.compiler = compiler;
        this.injector = injector;
        this.events = events;
        /**
         * Expose lazy loaded module references
         */
        this.modules$ = this.events
            .get(ModuleInitializedEvent)
            .pipe(map((event) => event.moduleRef), publishReplay());
        this.dependencyModules = new Map();
        this.eventSubscription = this.modules$.connect();
    }
    /**
     * Resolves module instance based dynamic import wrapped in an arrow function
     *
     * New module instance will be created with each call.
     *
     * @param moduleFunc
     * @param feature
     */
    resolveModuleInstance(moduleFunc, feature) {
        return this.resolveModuleFactory(moduleFunc).pipe(map(([moduleFactory]) => moduleFactory.create(this.injector)), tap((moduleRef) => this.events.dispatch(createFrom(ModuleInitializedEvent, {
            feature,
            moduleRef,
        }))));
    }
    /**
     * Returns dependency module instance and initializes it when needed.
     *
     * Module will be instantiated only once, at first request for a this specific module class
     */
    resolveDependencyModuleInstance(moduleFunc) {
        // We grab moduleFactory symbol from module function and if there is no
        // such a module created yet, we create it and store it in a
        // dependencyModules map
        return this.resolveModuleFactory(moduleFunc).pipe(map(([moduleFactory, module]) => {
            if (!this.dependencyModules.has(module)) {
                const moduleRef = moduleFactory.create(this.injector);
                this.dependencyModules.set(module, moduleRef);
            }
            return this.dependencyModules.get(module);
        }), tap((moduleRef) => this.events.dispatch(createFrom(ModuleInitializedEvent, {
            moduleRef,
        }))));
    }
    /**
     * Resolve any Angular module from an function that return module or moduleFactory
     */
    resolveModuleFactory(moduleFunc) {
        return from(moduleFunc()).pipe(switchMap((module) => module instanceof NgModuleFactory
            ? of([module, module])
            : combineLatest([
                // using compiler here is for jit compatibility, there is no overhead
                // for aot production builds as it will be stubbed
                from(this.compiler.compileModuleAsync(module)),
                of(module),
            ])), observeOn(queueScheduler));
    }
    ngOnDestroy() {
        if (this.eventSubscription) {
            this.eventSubscription.unsubscribe();
        }
        // clean up all initialized dependency modules
        this.dependencyModules.forEach((dependency) => dependency.destroy());
    }
}
LazyModulesService.ɵprov = i0.ɵɵdefineInjectable({ factory: function LazyModulesService_Factory() { return new LazyModulesService(i0.ɵɵinject(i0.Compiler), i0.ɵɵinject(i0.INJECTOR), i0.ɵɵinject(i1.EventService)); }, token: LazyModulesService, providedIn: "root" });
LazyModulesService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
LazyModulesService.ctorParameters = () => [
    { type: Compiler },
    { type: Injector },
    { type: EventService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF6eS1tb2R1bGVzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3NyYy9sYXp5LWxvYWRpbmcvbGF6eS1tb2R1bGVzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFFBQVEsRUFDUixVQUFVLEVBQ1YsUUFBUSxFQUNSLGVBQWUsR0FHaEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUNMLGFBQWEsRUFFYixJQUFJLEVBRUosRUFBRSxFQUNGLGNBQWMsR0FFZixNQUFNLE1BQU0sQ0FBQztBQUNkLE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDL0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUNyQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7OztBQUV0RDs7R0FFRztBQUlILE1BQU0sT0FBTyxrQkFBa0I7SUFjN0IsWUFDWSxRQUFrQixFQUNsQixRQUFrQixFQUNsQixNQUFvQjtRQUZwQixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsV0FBTSxHQUFOLE1BQU0sQ0FBYztRQWhCaEM7O1dBRUc7UUFDTSxhQUFRLEdBQWlDLElBQUksQ0FBQyxNQUFNO2FBQzFELEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQzthQUMzQixJQUFJLENBQ0gsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEVBQy9CLGFBQWEsRUFBRSxDQUNoQixDQUFDO1FBRWEsc0JBQWlCLEdBQUcsSUFBSSxHQUFHLEVBQXlCLENBQUM7UUFRcEUsSUFBSSxDQUFDLGlCQUFpQixHQUFJLElBQUksQ0FBQyxRQUU3QixDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDSSxxQkFBcUIsQ0FDMUIsVUFBOEIsRUFDOUIsT0FBZ0I7UUFFaEIsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUMvQyxHQUFHLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUM3RCxHQUFHLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FDbEIsVUFBVSxDQUFDLHNCQUFzQixFQUFFO1lBQ2pDLE9BQU87WUFDUCxTQUFTO1NBQ1YsQ0FBQyxDQUNILENBQ0YsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQUVEOzs7O09BSUc7SUFDSSwrQkFBK0IsQ0FDcEMsVUFBOEI7UUFFOUIsdUVBQXVFO1FBQ3ZFLDREQUE0RDtRQUM1RCx3QkFBd0I7UUFDeEIsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUMvQyxHQUFHLENBQUMsQ0FBQyxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsRUFBRSxFQUFFO1lBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUN2QyxNQUFNLFNBQVMsR0FBRyxhQUFhLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDdEQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUM7YUFDL0M7WUFFRCxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDNUMsQ0FBQyxDQUFDLEVBQ0YsR0FBRyxDQUFDLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQ2xCLFVBQVUsQ0FBQyxzQkFBc0IsRUFBRTtZQUNqQyxTQUFTO1NBQ1YsQ0FBQyxDQUNILENBQ0YsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ0ssb0JBQW9CLENBQzFCLFVBQThCO1FBRTlCLE9BQU8sSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUM1QixTQUFTLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUNuQixNQUFNLFlBQVksZUFBZTtZQUMvQixDQUFDLENBQUUsRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUE2QztZQUNuRSxDQUFDLENBQUMsYUFBYSxDQUFDO2dCQUNaLHFFQUFxRTtnQkFDckUsa0RBQWtEO2dCQUNsRCxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxNQUFhLENBQUMsQ0FBQztnQkFDckQsRUFBRSxDQUFDLE1BQU0sQ0FBQzthQUNYLENBQUMsQ0FDUCxFQUNELFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FDMUIsQ0FBQztJQUNKLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUU7WUFDMUIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3RDO1FBRUQsOENBQThDO1FBQzlDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7Ozs7WUE5R0YsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7WUExQkMsUUFBUTtZQUVSLFFBQVE7WUFpQkQsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBpbGVyLFxuICBJbmplY3RhYmxlLFxuICBJbmplY3RvcixcbiAgTmdNb2R1bGVGYWN0b3J5LFxuICBOZ01vZHVsZVJlZixcbiAgT25EZXN0cm95LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIGNvbWJpbmVMYXRlc3QsXG4gIENvbm5lY3RhYmxlT2JzZXJ2YWJsZSxcbiAgZnJvbSxcbiAgT2JzZXJ2YWJsZSxcbiAgb2YsXG4gIHF1ZXVlU2NoZWR1bGVyLFxuICBTdWJzY3JpcHRpb24sXG59IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBvYnNlcnZlT24sIHB1Ymxpc2hSZXBsYXksIHN3aXRjaE1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgY3JlYXRlRnJvbSB9IGZyb20gJy4uL3V0aWwnO1xuaW1wb3J0IHsgTW9kdWxlSW5pdGlhbGl6ZWRFdmVudCB9IGZyb20gJy4vZXZlbnRzL21vZHVsZS1pbml0aWFsaXplZC1ldmVudCc7XG5pbXBvcnQgeyBFdmVudFNlcnZpY2UgfSBmcm9tICcuLi9ldmVudC9ldmVudC5zZXJ2aWNlJztcblxuLyoqXG4gKiBVdGlsaXR5IHNlcnZpY2UgZm9yIG1hbmFnaW5nIGR5bmFtaWMgaW1wb3J0cyBvZiBBbmd1bGFyIHNlcnZpY2VzXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBMYXp5TW9kdWxlc1NlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICAvKipcbiAgICogRXhwb3NlIGxhenkgbG9hZGVkIG1vZHVsZSByZWZlcmVuY2VzXG4gICAqL1xuICByZWFkb25seSBtb2R1bGVzJDogT2JzZXJ2YWJsZTxOZ01vZHVsZVJlZjxhbnk+PiA9IHRoaXMuZXZlbnRzXG4gICAgLmdldChNb2R1bGVJbml0aWFsaXplZEV2ZW50KVxuICAgIC5waXBlKFxuICAgICAgbWFwKChldmVudCkgPT4gZXZlbnQubW9kdWxlUmVmKSxcbiAgICAgIHB1Ymxpc2hSZXBsYXkoKVxuICAgICk7XG5cbiAgcHJpdmF0ZSByZWFkb25seSBkZXBlbmRlbmN5TW9kdWxlcyA9IG5ldyBNYXA8YW55LCBOZ01vZHVsZVJlZjxhbnk+PigpO1xuICBwcml2YXRlIHJlYWRvbmx5IGV2ZW50U3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNvbXBpbGVyOiBDb21waWxlcixcbiAgICBwcm90ZWN0ZWQgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIHByb3RlY3RlZCBldmVudHM6IEV2ZW50U2VydmljZVxuICApIHtcbiAgICB0aGlzLmV2ZW50U3Vic2NyaXB0aW9uID0gKHRoaXMubW9kdWxlcyQgYXMgQ29ubmVjdGFibGVPYnNlcnZhYmxlPFxuICAgICAgTmdNb2R1bGVSZWY8YW55PlxuICAgID4pLmNvbm5lY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNvbHZlcyBtb2R1bGUgaW5zdGFuY2UgYmFzZWQgZHluYW1pYyBpbXBvcnQgd3JhcHBlZCBpbiBhbiBhcnJvdyBmdW5jdGlvblxuICAgKlxuICAgKiBOZXcgbW9kdWxlIGluc3RhbmNlIHdpbGwgYmUgY3JlYXRlZCB3aXRoIGVhY2ggY2FsbC5cbiAgICpcbiAgICogQHBhcmFtIG1vZHVsZUZ1bmNcbiAgICogQHBhcmFtIGZlYXR1cmVcbiAgICovXG4gIHB1YmxpYyByZXNvbHZlTW9kdWxlSW5zdGFuY2UoXG4gICAgbW9kdWxlRnVuYzogKCkgPT4gUHJvbWlzZTxhbnk+LFxuICAgIGZlYXR1cmU/OiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxOZ01vZHVsZVJlZjxhbnk+PiB7XG4gICAgcmV0dXJuIHRoaXMucmVzb2x2ZU1vZHVsZUZhY3RvcnkobW9kdWxlRnVuYykucGlwZShcbiAgICAgIG1hcCgoW21vZHVsZUZhY3RvcnldKSA9PiBtb2R1bGVGYWN0b3J5LmNyZWF0ZSh0aGlzLmluamVjdG9yKSksXG4gICAgICB0YXAoKG1vZHVsZVJlZikgPT5cbiAgICAgICAgdGhpcy5ldmVudHMuZGlzcGF0Y2goXG4gICAgICAgICAgY3JlYXRlRnJvbShNb2R1bGVJbml0aWFsaXplZEV2ZW50LCB7XG4gICAgICAgICAgICBmZWF0dXJlLFxuICAgICAgICAgICAgbW9kdWxlUmVmLFxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgZGVwZW5kZW5jeSBtb2R1bGUgaW5zdGFuY2UgYW5kIGluaXRpYWxpemVzIGl0IHdoZW4gbmVlZGVkLlxuICAgKlxuICAgKiBNb2R1bGUgd2lsbCBiZSBpbnN0YW50aWF0ZWQgb25seSBvbmNlLCBhdCBmaXJzdCByZXF1ZXN0IGZvciBhIHRoaXMgc3BlY2lmaWMgbW9kdWxlIGNsYXNzXG4gICAqL1xuICBwdWJsaWMgcmVzb2x2ZURlcGVuZGVuY3lNb2R1bGVJbnN0YW5jZShcbiAgICBtb2R1bGVGdW5jOiAoKSA9PiBQcm9taXNlPGFueT5cbiAgKTogT2JzZXJ2YWJsZTxOZ01vZHVsZVJlZjxhbnk+PiB7XG4gICAgLy8gV2UgZ3JhYiBtb2R1bGVGYWN0b3J5IHN5bWJvbCBmcm9tIG1vZHVsZSBmdW5jdGlvbiBhbmQgaWYgdGhlcmUgaXMgbm9cbiAgICAvLyBzdWNoIGEgbW9kdWxlIGNyZWF0ZWQgeWV0LCB3ZSBjcmVhdGUgaXQgYW5kIHN0b3JlIGl0IGluIGFcbiAgICAvLyBkZXBlbmRlbmN5TW9kdWxlcyBtYXBcbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlTW9kdWxlRmFjdG9yeShtb2R1bGVGdW5jKS5waXBlKFxuICAgICAgbWFwKChbbW9kdWxlRmFjdG9yeSwgbW9kdWxlXSkgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuZGVwZW5kZW5jeU1vZHVsZXMuaGFzKG1vZHVsZSkpIHtcbiAgICAgICAgICBjb25zdCBtb2R1bGVSZWYgPSBtb2R1bGVGYWN0b3J5LmNyZWF0ZSh0aGlzLmluamVjdG9yKTtcbiAgICAgICAgICB0aGlzLmRlcGVuZGVuY3lNb2R1bGVzLnNldChtb2R1bGUsIG1vZHVsZVJlZik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5kZXBlbmRlbmN5TW9kdWxlcy5nZXQobW9kdWxlKTtcbiAgICAgIH0pLFxuICAgICAgdGFwKChtb2R1bGVSZWYpID0+XG4gICAgICAgIHRoaXMuZXZlbnRzLmRpc3BhdGNoKFxuICAgICAgICAgIGNyZWF0ZUZyb20oTW9kdWxlSW5pdGlhbGl6ZWRFdmVudCwge1xuICAgICAgICAgICAgbW9kdWxlUmVmLFxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc29sdmUgYW55IEFuZ3VsYXIgbW9kdWxlIGZyb20gYW4gZnVuY3Rpb24gdGhhdCByZXR1cm4gbW9kdWxlIG9yIG1vZHVsZUZhY3RvcnlcbiAgICovXG4gIHByaXZhdGUgcmVzb2x2ZU1vZHVsZUZhY3RvcnkoXG4gICAgbW9kdWxlRnVuYzogKCkgPT4gUHJvbWlzZTxhbnk+XG4gICk6IE9ic2VydmFibGU8W05nTW9kdWxlRmFjdG9yeTxhbnk+LCBhbnldPiB7XG4gICAgcmV0dXJuIGZyb20obW9kdWxlRnVuYygpKS5waXBlKFxuICAgICAgc3dpdGNoTWFwKChtb2R1bGUpID0+XG4gICAgICAgIG1vZHVsZSBpbnN0YW5jZW9mIE5nTW9kdWxlRmFjdG9yeVxuICAgICAgICAgID8gKG9mKFttb2R1bGUsIG1vZHVsZV0pIGFzIE9ic2VydmFibGU8W05nTW9kdWxlRmFjdG9yeTxhbnk+LCBhbnldPilcbiAgICAgICAgICA6IGNvbWJpbmVMYXRlc3QoW1xuICAgICAgICAgICAgICAvLyB1c2luZyBjb21waWxlciBoZXJlIGlzIGZvciBqaXQgY29tcGF0aWJpbGl0eSwgdGhlcmUgaXMgbm8gb3ZlcmhlYWRcbiAgICAgICAgICAgICAgLy8gZm9yIGFvdCBwcm9kdWN0aW9uIGJ1aWxkcyBhcyBpdCB3aWxsIGJlIHN0dWJiZWRcbiAgICAgICAgICAgICAgZnJvbSh0aGlzLmNvbXBpbGVyLmNvbXBpbGVNb2R1bGVBc3luYyhtb2R1bGUgYXMgYW55KSksXG4gICAgICAgICAgICAgIG9mKG1vZHVsZSksXG4gICAgICAgICAgICBdKVxuICAgICAgKSxcbiAgICAgIG9ic2VydmVPbihxdWV1ZVNjaGVkdWxlcilcbiAgICApO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZXZlbnRTdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuZXZlbnRTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICAvLyBjbGVhbiB1cCBhbGwgaW5pdGlhbGl6ZWQgZGVwZW5kZW5jeSBtb2R1bGVzXG4gICAgdGhpcy5kZXBlbmRlbmN5TW9kdWxlcy5mb3JFYWNoKChkZXBlbmRlbmN5KSA9PiBkZXBlbmRlbmN5LmRlc3Ryb3koKSk7XG4gIH1cbn1cbiJdfQ==
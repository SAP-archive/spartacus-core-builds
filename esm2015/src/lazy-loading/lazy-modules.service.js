import { Compiler, Injectable, Injector, NgModuleFactory, } from '@angular/core';
import { combineLatest, from, of, queueScheduler, } from 'rxjs';
import { map, observeOn, publishReplay, switchMap, tap } from 'rxjs/operators';
import { createFrom } from '../util/create-from';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF6eS1tb2R1bGVzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3NyYy9sYXp5LWxvYWRpbmcvbGF6eS1tb2R1bGVzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFFBQVEsRUFDUixVQUFVLEVBQ1YsUUFBUSxFQUNSLGVBQWUsR0FHaEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUNMLGFBQWEsRUFFYixJQUFJLEVBRUosRUFBRSxFQUNGLGNBQWMsR0FFZixNQUFNLE1BQU0sQ0FBQztBQUNkLE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDL0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7O0FBRXREOztHQUVHO0FBSUgsTUFBTSxPQUFPLGtCQUFrQjtJQWM3QixZQUNZLFFBQWtCLEVBQ2xCLFFBQWtCLEVBQ2xCLE1BQW9CO1FBRnBCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixXQUFNLEdBQU4sTUFBTSxDQUFjO1FBaEJoQzs7V0FFRztRQUNNLGFBQVEsR0FBaUMsSUFBSSxDQUFDLE1BQU07YUFDMUQsR0FBRyxDQUFDLHNCQUFzQixDQUFDO2FBQzNCLElBQUksQ0FDSCxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFDL0IsYUFBYSxFQUFFLENBQ2hCLENBQUM7UUFFYSxzQkFBaUIsR0FBRyxJQUFJLEdBQUcsRUFBeUIsQ0FBQztRQVFwRSxJQUFJLENBQUMsaUJBQWlCLEdBQUksSUFBSSxDQUFDLFFBRTdCLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDZixDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNJLHFCQUFxQixDQUMxQixVQUE4QixFQUM5QixPQUFnQjtRQUVoQixPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQy9DLEdBQUcsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLEVBQUUsRUFBRSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQzdELEdBQUcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQ2hCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUNsQixVQUFVLENBQUMsc0JBQXNCLEVBQUU7WUFDakMsT0FBTztZQUNQLFNBQVM7U0FDVixDQUFDLENBQ0gsQ0FDRixDQUNGLENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLCtCQUErQixDQUNwQyxVQUE4QjtRQUU5Qix1RUFBdUU7UUFDdkUsNERBQTREO1FBQzVELHdCQUF3QjtRQUN4QixPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQy9DLEdBQUcsQ0FBQyxDQUFDLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQyxFQUFFLEVBQUU7WUFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQ3ZDLE1BQU0sU0FBUyxHQUFHLGFBQWEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN0RCxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQzthQUMvQztZQUVELE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1QyxDQUFDLENBQUMsRUFDRixHQUFHLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FDbEIsVUFBVSxDQUFDLHNCQUFzQixFQUFFO1lBQ2pDLFNBQVM7U0FDVixDQUFDLENBQ0gsQ0FDRixDQUNGLENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSyxvQkFBb0IsQ0FDMUIsVUFBOEI7UUFFOUIsT0FBTyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQzVCLFNBQVMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQ25CLE1BQU0sWUFBWSxlQUFlO1lBQy9CLENBQUMsQ0FBRSxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQTZDO1lBQ25FLENBQUMsQ0FBQyxhQUFhLENBQUM7Z0JBQ1oscUVBQXFFO2dCQUNyRSxrREFBa0Q7Z0JBQ2xELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLE1BQWEsQ0FBQyxDQUFDO2dCQUNyRCxFQUFFLENBQUMsTUFBTSxDQUFDO2FBQ1gsQ0FBQyxDQUNQLEVBQ0QsU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUMxQixDQUFDO0lBQ0osQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtZQUMxQixJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDdEM7UUFFRCw4Q0FBOEM7UUFDOUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDdkUsQ0FBQzs7OztZQTlHRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7OztZQTFCQyxRQUFRO1lBRVIsUUFBUTtZQWlCRCxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcGlsZXIsXG4gIEluamVjdGFibGUsXG4gIEluamVjdG9yLFxuICBOZ01vZHVsZUZhY3RvcnksXG4gIE5nTW9kdWxlUmVmLFxuICBPbkRlc3Ryb3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgY29tYmluZUxhdGVzdCxcbiAgQ29ubmVjdGFibGVPYnNlcnZhYmxlLFxuICBmcm9tLFxuICBPYnNlcnZhYmxlLFxuICBvZixcbiAgcXVldWVTY2hlZHVsZXIsXG4gIFN1YnNjcmlwdGlvbixcbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIG9ic2VydmVPbiwgcHVibGlzaFJlcGxheSwgc3dpdGNoTWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBjcmVhdGVGcm9tIH0gZnJvbSAnLi4vdXRpbC9jcmVhdGUtZnJvbSc7XG5pbXBvcnQgeyBNb2R1bGVJbml0aWFsaXplZEV2ZW50IH0gZnJvbSAnLi9ldmVudHMvbW9kdWxlLWluaXRpYWxpemVkLWV2ZW50JztcbmltcG9ydCB7IEV2ZW50U2VydmljZSB9IGZyb20gJy4uL2V2ZW50L2V2ZW50LnNlcnZpY2UnO1xuXG4vKipcbiAqIFV0aWxpdHkgc2VydmljZSBmb3IgbWFuYWdpbmcgZHluYW1pYyBpbXBvcnRzIG9mIEFuZ3VsYXIgc2VydmljZXNcbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIExhenlNb2R1bGVzU2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIC8qKlxuICAgKiBFeHBvc2UgbGF6eSBsb2FkZWQgbW9kdWxlIHJlZmVyZW5jZXNcbiAgICovXG4gIHJlYWRvbmx5IG1vZHVsZXMkOiBPYnNlcnZhYmxlPE5nTW9kdWxlUmVmPGFueT4+ID0gdGhpcy5ldmVudHNcbiAgICAuZ2V0KE1vZHVsZUluaXRpYWxpemVkRXZlbnQpXG4gICAgLnBpcGUoXG4gICAgICBtYXAoKGV2ZW50KSA9PiBldmVudC5tb2R1bGVSZWYpLFxuICAgICAgcHVibGlzaFJlcGxheSgpXG4gICAgKTtcblxuICBwcml2YXRlIHJlYWRvbmx5IGRlcGVuZGVuY3lNb2R1bGVzID0gbmV3IE1hcDxhbnksIE5nTW9kdWxlUmVmPGFueT4+KCk7XG4gIHByaXZhdGUgcmVhZG9ubHkgZXZlbnRTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY29tcGlsZXI6IENvbXBpbGVyLFxuICAgIHByb3RlY3RlZCBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgcHJvdGVjdGVkIGV2ZW50czogRXZlbnRTZXJ2aWNlXG4gICkge1xuICAgIHRoaXMuZXZlbnRTdWJzY3JpcHRpb24gPSAodGhpcy5tb2R1bGVzJCBhcyBDb25uZWN0YWJsZU9ic2VydmFibGU8XG4gICAgICBOZ01vZHVsZVJlZjxhbnk+XG4gICAgPikuY29ubmVjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc29sdmVzIG1vZHVsZSBpbnN0YW5jZSBiYXNlZCBkeW5hbWljIGltcG9ydCB3cmFwcGVkIGluIGFuIGFycm93IGZ1bmN0aW9uXG4gICAqXG4gICAqIE5ldyBtb2R1bGUgaW5zdGFuY2Ugd2lsbCBiZSBjcmVhdGVkIHdpdGggZWFjaCBjYWxsLlxuICAgKlxuICAgKiBAcGFyYW0gbW9kdWxlRnVuY1xuICAgKiBAcGFyYW0gZmVhdHVyZVxuICAgKi9cbiAgcHVibGljIHJlc29sdmVNb2R1bGVJbnN0YW5jZShcbiAgICBtb2R1bGVGdW5jOiAoKSA9PiBQcm9taXNlPGFueT4sXG4gICAgZmVhdHVyZT86IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPE5nTW9kdWxlUmVmPGFueT4+IHtcbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlTW9kdWxlRmFjdG9yeShtb2R1bGVGdW5jKS5waXBlKFxuICAgICAgbWFwKChbbW9kdWxlRmFjdG9yeV0pID0+IG1vZHVsZUZhY3RvcnkuY3JlYXRlKHRoaXMuaW5qZWN0b3IpKSxcbiAgICAgIHRhcCgobW9kdWxlUmVmKSA9PlxuICAgICAgICB0aGlzLmV2ZW50cy5kaXNwYXRjaChcbiAgICAgICAgICBjcmVhdGVGcm9tKE1vZHVsZUluaXRpYWxpemVkRXZlbnQsIHtcbiAgICAgICAgICAgIGZlYXR1cmUsXG4gICAgICAgICAgICBtb2R1bGVSZWYsXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBkZXBlbmRlbmN5IG1vZHVsZSBpbnN0YW5jZSBhbmQgaW5pdGlhbGl6ZXMgaXQgd2hlbiBuZWVkZWQuXG4gICAqXG4gICAqIE1vZHVsZSB3aWxsIGJlIGluc3RhbnRpYXRlZCBvbmx5IG9uY2UsIGF0IGZpcnN0IHJlcXVlc3QgZm9yIGEgdGhpcyBzcGVjaWZpYyBtb2R1bGUgY2xhc3NcbiAgICovXG4gIHB1YmxpYyByZXNvbHZlRGVwZW5kZW5jeU1vZHVsZUluc3RhbmNlKFxuICAgIG1vZHVsZUZ1bmM6ICgpID0+IFByb21pc2U8YW55PlxuICApOiBPYnNlcnZhYmxlPE5nTW9kdWxlUmVmPGFueT4+IHtcbiAgICAvLyBXZSBncmFiIG1vZHVsZUZhY3Rvcnkgc3ltYm9sIGZyb20gbW9kdWxlIGZ1bmN0aW9uIGFuZCBpZiB0aGVyZSBpcyBub1xuICAgIC8vIHN1Y2ggYSBtb2R1bGUgY3JlYXRlZCB5ZXQsIHdlIGNyZWF0ZSBpdCBhbmQgc3RvcmUgaXQgaW4gYVxuICAgIC8vIGRlcGVuZGVuY3lNb2R1bGVzIG1hcFxuICAgIHJldHVybiB0aGlzLnJlc29sdmVNb2R1bGVGYWN0b3J5KG1vZHVsZUZ1bmMpLnBpcGUoXG4gICAgICBtYXAoKFttb2R1bGVGYWN0b3J5LCBtb2R1bGVdKSA9PiB7XG4gICAgICAgIGlmICghdGhpcy5kZXBlbmRlbmN5TW9kdWxlcy5oYXMobW9kdWxlKSkge1xuICAgICAgICAgIGNvbnN0IG1vZHVsZVJlZiA9IG1vZHVsZUZhY3RvcnkuY3JlYXRlKHRoaXMuaW5qZWN0b3IpO1xuICAgICAgICAgIHRoaXMuZGVwZW5kZW5jeU1vZHVsZXMuc2V0KG1vZHVsZSwgbW9kdWxlUmVmKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmRlcGVuZGVuY3lNb2R1bGVzLmdldChtb2R1bGUpO1xuICAgICAgfSksXG4gICAgICB0YXAoKG1vZHVsZVJlZikgPT5cbiAgICAgICAgdGhpcy5ldmVudHMuZGlzcGF0Y2goXG4gICAgICAgICAgY3JlYXRlRnJvbShNb2R1bGVJbml0aWFsaXplZEV2ZW50LCB7XG4gICAgICAgICAgICBtb2R1bGVSZWYsXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmVzb2x2ZSBhbnkgQW5ndWxhciBtb2R1bGUgZnJvbSBhbiBmdW5jdGlvbiB0aGF0IHJldHVybiBtb2R1bGUgb3IgbW9kdWxlRmFjdG9yeVxuICAgKi9cbiAgcHJpdmF0ZSByZXNvbHZlTW9kdWxlRmFjdG9yeShcbiAgICBtb2R1bGVGdW5jOiAoKSA9PiBQcm9taXNlPGFueT5cbiAgKTogT2JzZXJ2YWJsZTxbTmdNb2R1bGVGYWN0b3J5PGFueT4sIGFueV0+IHtcbiAgICByZXR1cm4gZnJvbShtb2R1bGVGdW5jKCkpLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKG1vZHVsZSkgPT5cbiAgICAgICAgbW9kdWxlIGluc3RhbmNlb2YgTmdNb2R1bGVGYWN0b3J5XG4gICAgICAgICAgPyAob2YoW21vZHVsZSwgbW9kdWxlXSkgYXMgT2JzZXJ2YWJsZTxbTmdNb2R1bGVGYWN0b3J5PGFueT4sIGFueV0+KVxuICAgICAgICAgIDogY29tYmluZUxhdGVzdChbXG4gICAgICAgICAgICAgIC8vIHVzaW5nIGNvbXBpbGVyIGhlcmUgaXMgZm9yIGppdCBjb21wYXRpYmlsaXR5LCB0aGVyZSBpcyBubyBvdmVyaGVhZFxuICAgICAgICAgICAgICAvLyBmb3IgYW90IHByb2R1Y3Rpb24gYnVpbGRzIGFzIGl0IHdpbGwgYmUgc3R1YmJlZFxuICAgICAgICAgICAgICBmcm9tKHRoaXMuY29tcGlsZXIuY29tcGlsZU1vZHVsZUFzeW5jKG1vZHVsZSBhcyBhbnkpKSxcbiAgICAgICAgICAgICAgb2YobW9kdWxlKSxcbiAgICAgICAgICAgIF0pXG4gICAgICApLFxuICAgICAgb2JzZXJ2ZU9uKHF1ZXVlU2NoZWR1bGVyKVxuICAgICk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5ldmVudFN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5ldmVudFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIC8vIGNsZWFuIHVwIGFsbCBpbml0aWFsaXplZCBkZXBlbmRlbmN5IG1vZHVsZXNcbiAgICB0aGlzLmRlcGVuZGVuY3lNb2R1bGVzLmZvckVhY2goKGRlcGVuZGVuY3kpID0+IGRlcGVuZGVuY3kuZGVzdHJveSgpKTtcbiAgfVxufVxuIl19
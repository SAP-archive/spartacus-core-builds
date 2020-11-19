import { Compiler, Injectable, Injector, NgModuleFactory, } from '@angular/core';
import { combineLatest, from, of, queueScheduler, } from 'rxjs';
import { map, observeOn, publishReplay, switchMap, tap } from 'rxjs/operators';
import { createFrom } from '../util/create-from';
import { ModuleInitializedEvent } from './events/module-initialized-event';
import { EventService } from '../event/event.service';
import { CombinedInjector } from '../util/combined-injector';
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
    resolveModuleInstance(moduleFunc, feature, dependencyModuleRefs = []) {
        const parentInjector = dependencyModuleRefs.length
            ? new CombinedInjector(this.injector, dependencyModuleRefs.map((moduleRef) => moduleRef.injector))
            : this.injector;
        return this.resolveModuleFactory(moduleFunc).pipe(map(([moduleFactory]) => moduleFactory.create(parentInjector)), tap((moduleRef) => this.events.dispatch(createFrom(ModuleInitializedEvent, {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF6eS1tb2R1bGVzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3NyYy9sYXp5LWxvYWRpbmcvbGF6eS1tb2R1bGVzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFFBQVEsRUFDUixVQUFVLEVBQ1YsUUFBUSxFQUNSLGVBQWUsR0FHaEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUNMLGFBQWEsRUFFYixJQUFJLEVBRUosRUFBRSxFQUNGLGNBQWMsR0FFZixNQUFNLE1BQU0sQ0FBQztBQUNkLE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDL0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7O0FBRTdEOztHQUVHO0FBSUgsTUFBTSxPQUFPLGtCQUFrQjtJQWM3QixZQUNZLFFBQWtCLEVBQ2xCLFFBQWtCLEVBQ2xCLE1BQW9CO1FBRnBCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixXQUFNLEdBQU4sTUFBTSxDQUFjO1FBaEJoQzs7V0FFRztRQUNNLGFBQVEsR0FBaUMsSUFBSSxDQUFDLE1BQU07YUFDMUQsR0FBRyxDQUFDLHNCQUFzQixDQUFDO2FBQzNCLElBQUksQ0FDSCxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFDL0IsYUFBYSxFQUFFLENBQ2hCLENBQUM7UUFFYSxz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Q0FBQyxPQUFPLENBQUMsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7Ozs7WUF0SEYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7WUEzQkMsUUFBUTtZQUVSLFFBQVE7WUFpQkQsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBpbGVyLFxuICBJbmplY3RhYmxlLFxuICBJbmplY3RvcixcbiAgTmdNb2R1bGVGYWN0b3J5LFxuICBOZ01vZHVsZVJlZixcbiAgT25EZXN0cm95LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIGNvbWJpbmVMYXRlc3QsXG4gIENvbm5lY3RhYmxlT2JzZXJ2YWJsZSxcbiAgZnJvbSxcbiAgT2JzZXJ2YWJsZSxcbiAgb2YsXG4gIHF1ZXVlU2NoZWR1bGVyLFxuICBTdWJzY3JpcHRpb24sXG59IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBvYnNlcnZlT24sIHB1Ymxpc2hSZXBsYXksIHN3aXRjaE1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgY3JlYXRlRnJvbSB9IGZyb20gJy4uL3V0aWwvY3JlYXRlLWZyb20nO1xuaW1wb3J0IHsgTW9kdWxlSW5pdGlhbGl6ZWRFdmVudCB9IGZyb20gJy4vZXZlbnRzL21vZHVsZS1pbml0aWFsaXplZC1ldmVudCc7XG5pbXBvcnQgeyBFdmVudFNlcnZpY2UgfSBmcm9tICcuLi9ldmVudC9ldmVudC5zZXJ2aWNlJztcbmltcG9ydCB7IENvbWJpbmVkSW5qZWN0b3IgfSBmcm9tICcuLi91dGlsL2NvbWJpbmVkLWluamVjdG9yJztcblxuLyoqXG4gKiBVdGlsaXR5IHNlcnZpY2UgZm9yIG1hbmFnaW5nIGR5bmFtaWMgaW1wb3J0cyBvZiBBbmd1bGFyIHNlcnZpY2VzXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBMYXp5TW9kdWxlc1NlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICAvKipcbiAgICogRXhwb3NlIGxhenkgbG9hZGVkIG1vZHVsZSByZWZlcmVuY2VzXG4gICAqL1xuICByZWFkb25seSBtb2R1bGVzJDogT2JzZXJ2YWJsZTxOZ01vZHVsZVJlZjxhbnk+PiA9IHRoaXMuZXZlbnRzXG4gICAgLmdldChNb2R1bGVJbml0aWFsaXplZEV2ZW50KVxuICAgIC5waXBlKFxuICAgICAgbWFwKChldmVudCkgPT4gZXZlbnQubW9kdWxlUmVmKSxcbiAgICAgIHB1Ymxpc2hSZXBsYXkoKVxuICAgICk7XG5cbiAgcHJpdmF0ZSByZWFkb25seSBkZXBlbmRlbmN5TW9kdWxlcyA9IG5ldyBNYXA8YW55LCBOZ01vZHVsZVJlZjxhbnk+PigpO1xuICBwcml2YXRlIHJlYWRvbmx5IGV2ZW50U3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNvbXBpbGVyOiBDb21waWxlcixcbiAgICBwcm90ZWN0ZWQgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIHByb3RlY3RlZCBldmVudHM6IEV2ZW50U2VydmljZVxuICApIHtcbiAgICB0aGlzLmV2ZW50U3Vic2NyaXB0aW9uID0gKHRoaXMubW9kdWxlcyQgYXMgQ29ubmVjdGFibGVPYnNlcnZhYmxlPFxuICAgICAgTmdNb2R1bGVSZWY8YW55PlxuICAgID4pLmNvbm5lY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNvbHZlcyBtb2R1bGUgaW5zdGFuY2UgYmFzZWQgZHluYW1pYyBpbXBvcnQgd3JhcHBlZCBpbiBhbiBhcnJvdyBmdW5jdGlvblxuICAgKlxuICAgKiBOZXcgbW9kdWxlIGluc3RhbmNlIHdpbGwgYmUgY3JlYXRlZCB3aXRoIGVhY2ggY2FsbC5cbiAgICpcbiAgICogQHBhcmFtIG1vZHVsZUZ1bmNcbiAgICogQHBhcmFtIGZlYXR1cmVcbiAgICovXG4gIHB1YmxpYyByZXNvbHZlTW9kdWxlSW5zdGFuY2UoXG4gICAgbW9kdWxlRnVuYzogKCkgPT4gUHJvbWlzZTxhbnk+LFxuICAgIGZlYXR1cmU/OiBzdHJpbmcsXG4gICAgZGVwZW5kZW5jeU1vZHVsZVJlZnM6IE5nTW9kdWxlUmVmPGFueT5bXSA9IFtdXG4gICk6IE9ic2VydmFibGU8TmdNb2R1bGVSZWY8YW55Pj4ge1xuICAgIGNvbnN0IHBhcmVudEluamVjdG9yID0gZGVwZW5kZW5jeU1vZHVsZVJlZnMubGVuZ3RoXG4gICAgICA/IG5ldyBDb21iaW5lZEluamVjdG9yKFxuICAgICAgICAgIHRoaXMuaW5qZWN0b3IsXG4gICAgICAgICAgZGVwZW5kZW5jeU1vZHVsZVJlZnMubWFwKChtb2R1bGVSZWYpID0+IG1vZHVsZVJlZi5pbmplY3RvcilcbiAgICAgICAgKVxuICAgICAgOiB0aGlzLmluamVjdG9yO1xuXG4gICAgcmV0dXJuIHRoaXMucmVzb2x2ZU1vZHVsZUZhY3RvcnkobW9kdWxlRnVuYykucGlwZShcbiAgICAgIG1hcCgoW21vZHVsZUZhY3RvcnldKSA9PiBtb2R1bGVGYWN0b3J5LmNyZWF0ZShwYXJlbnRJbmplY3RvcikpLFxuICAgICAgdGFwKChtb2R1bGVSZWYpID0+XG4gICAgICAgIHRoaXMuZXZlbnRzLmRpc3BhdGNoKFxuICAgICAgICAgIGNyZWF0ZUZyb20oTW9kdWxlSW5pdGlhbGl6ZWRFdmVudCwge1xuICAgICAgICAgICAgZmVhdHVyZSxcbiAgICAgICAgICAgIG1vZHVsZVJlZixcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGRlcGVuZGVuY3kgbW9kdWxlIGluc3RhbmNlIGFuZCBpbml0aWFsaXplcyBpdCB3aGVuIG5lZWRlZC5cbiAgICpcbiAgICogTW9kdWxlIHdpbGwgYmUgaW5zdGFudGlhdGVkIG9ubHkgb25jZSwgYXQgZmlyc3QgcmVxdWVzdCBmb3IgYSB0aGlzIHNwZWNpZmljIG1vZHVsZSBjbGFzc1xuICAgKi9cbiAgcHVibGljIHJlc29sdmVEZXBlbmRlbmN5TW9kdWxlSW5zdGFuY2UoXG4gICAgbW9kdWxlRnVuYzogKCkgPT4gUHJvbWlzZTxhbnk+XG4gICk6IE9ic2VydmFibGU8TmdNb2R1bGVSZWY8YW55Pj4ge1xuICAgIC8vIFdlIGdyYWIgbW9kdWxlRmFjdG9yeSBzeW1ib2wgZnJvbSBtb2R1bGUgZnVuY3Rpb24gYW5kIGlmIHRoZXJlIGlzIG5vXG4gICAgLy8gc3VjaCBhIG1vZHVsZSBjcmVhdGVkIHlldCwgd2UgY3JlYXRlIGl0IGFuZCBzdG9yZSBpdCBpbiBhXG4gICAgLy8gZGVwZW5kZW5jeU1vZHVsZXMgbWFwXG4gICAgcmV0dXJuIHRoaXMucmVzb2x2ZU1vZHVsZUZhY3RvcnkobW9kdWxlRnVuYykucGlwZShcbiAgICAgIG1hcCgoW21vZHVsZUZhY3RvcnksIG1vZHVsZV0pID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLmRlcGVuZGVuY3lNb2R1bGVzLmhhcyhtb2R1bGUpKSB7XG4gICAgICAgICAgY29uc3QgbW9kdWxlUmVmID0gbW9kdWxlRmFjdG9yeS5jcmVhdGUodGhpcy5pbmplY3Rvcik7XG4gICAgICAgICAgdGhpcy5kZXBlbmRlbmN5TW9kdWxlcy5zZXQobW9kdWxlLCBtb2R1bGVSZWYpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZGVwZW5kZW5jeU1vZHVsZXMuZ2V0KG1vZHVsZSk7XG4gICAgICB9KSxcbiAgICAgIHRhcCgobW9kdWxlUmVmKSA9PlxuICAgICAgICB0aGlzLmV2ZW50cy5kaXNwYXRjaChcbiAgICAgICAgICBjcmVhdGVGcm9tKE1vZHVsZUluaXRpYWxpemVkRXZlbnQsIHtcbiAgICAgICAgICAgIG1vZHVsZVJlZixcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNvbHZlIGFueSBBbmd1bGFyIG1vZHVsZSBmcm9tIGFuIGZ1bmN0aW9uIHRoYXQgcmV0dXJuIG1vZHVsZSBvciBtb2R1bGVGYWN0b3J5XG4gICAqL1xuICBwcml2YXRlIHJlc29sdmVNb2R1bGVGYWN0b3J5KFxuICAgIG1vZHVsZUZ1bmM6ICgpID0+IFByb21pc2U8YW55PlxuICApOiBPYnNlcnZhYmxlPFtOZ01vZHVsZUZhY3Rvcnk8YW55PiwgYW55XT4ge1xuICAgIHJldHVybiBmcm9tKG1vZHVsZUZ1bmMoKSkucGlwZShcbiAgICAgIHN3aXRjaE1hcCgobW9kdWxlKSA9PlxuICAgICAgICBtb2R1bGUgaW5zdGFuY2VvZiBOZ01vZHVsZUZhY3RvcnlcbiAgICAgICAgICA/IChvZihbbW9kdWxlLCBtb2R1bGVdKSBhcyBPYnNlcnZhYmxlPFtOZ01vZHVsZUZhY3Rvcnk8YW55PiwgYW55XT4pXG4gICAgICAgICAgOiBjb21iaW5lTGF0ZXN0KFtcbiAgICAgICAgICAgICAgLy8gdXNpbmcgY29tcGlsZXIgaGVyZSBpcyBmb3Igaml0IGNvbXBhdGliaWxpdHksIHRoZXJlIGlzIG5vIG92ZXJoZWFkXG4gICAgICAgICAgICAgIC8vIGZvciBhb3QgcHJvZHVjdGlvbiBidWlsZHMgYXMgaXQgd2lsbCBiZSBzdHViYmVkXG4gICAgICAgICAgICAgIGZyb20odGhpcy5jb21waWxlci5jb21waWxlTW9kdWxlQXN5bmMobW9kdWxlIGFzIGFueSkpLFxuICAgICAgICAgICAgICBvZihtb2R1bGUpLFxuICAgICAgICAgICAgXSlcbiAgICAgICksXG4gICAgICBvYnNlcnZlT24ocXVldWVTY2hlZHVsZXIpXG4gICAgKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmV2ZW50U3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLmV2ZW50U3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgLy8gY2xlYW4gdXAgYWxsIGluaXRpYWxpemVkIGRlcGVuZGVuY3kgbW9kdWxlc1xuICAgIHRoaXMuZGVwZW5kZW5jeU1vZHVsZXMuZm9yRWFjaCgoZGVwZW5kZW5jeSkgPT4gZGVwZW5kZW5jeS5kZXN0cm95KCkpO1xuICB9XG59XG4iXX0=
import { Compiler, Injector, NgModuleRef, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { EventService } from '../event/event.service';
/**
 * Utility service for managing dynamic imports of Angular services
 */
export declare class LazyModulesService implements OnDestroy {
    protected compiler: Compiler;
    protected injector: Injector;
    protected events: EventService;
    /**
     * Expose lazy loaded module references
     */
    readonly modules$: Observable<NgModuleRef<any>>;
    private readonly dependencyModules;
    private readonly eventSubscription;
    constructor(compiler: Compiler, injector: Injector, events: EventService);
    /**
     * Resolves module instance based dynamic import wrapped in an arrow function
     *
     * New module instance will be created with each call.
     *
     * @param moduleFunc
     * @param feature
     */
    resolveModuleInstance(moduleFunc: () => Promise<any>, feature?: string, dependencyModuleRefs?: NgModuleRef<any>[]): Observable<NgModuleRef<any>>;
    /**
     * Returns dependency module instance and initializes it when needed.
     *
     * Module will be instantiated only once, at first request for a this specific module class
     */
    resolveDependencyModuleInstance(moduleFunc: () => Promise<any>): Observable<NgModuleRef<any>>;
    /**
     * Resolve any Angular module from an function that return module or moduleFactory
     */
    private resolveModuleFactory;
    ngOnDestroy(): void;
}

import { AbstractType, InjectionToken, Injector, Type } from '@angular/core';
import { LazyModulesService } from './lazy-modules.service';
import { Observable } from 'rxjs';
/**
 * UnifiedInjector provides a way to get instances of tokens not only once, from the root injector,
 * but also from lazy loaded module injectors that can be initialized over time.
 */
import * as ɵngcc0 from '@angular/core';
export declare class UnifiedInjector {
    protected rootInjector: Injector;
    protected lazyModules: LazyModulesService;
    /**
     * Gather all the injectors, with the root injector as a first one
     *
     * @private
     */
    private injectors$;
    constructor(rootInjector: Injector, lazyModules: LazyModulesService);
    /**
     * Gen instances for specified tokens.
     *
     * When notFoundValue is provided, it will consistently emit once per injector,
     * even if injector doesn't contain instances for specified token.
     * Otherwise, emissions will only involve cases, where new instances will be found.
     *
     * @param token
     * @param notFoundValue
     */
    get<T>(token: Type<T> | InjectionToken<T> | AbstractType<T>, notFoundValue?: T): Observable<T>;
    /**
     * Get multi provided instances for a specified token
     *
     * @param token
     */
    getMulti<T>(token: Type<T> | InjectionToken<T> | AbstractType<T>): Observable<T[]>;
    getMulti<T>(token: any): Observable<T>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<UnifiedInjector, never>;
}

//# sourceMappingURL=unified-injector.d.ts.map
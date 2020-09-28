import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
/**
 * Service to expose all parameters for the router, including child routes.
 * This is convenient in case the parent route (component) requires awareness
 * of child routes parameters.
 */
import * as ɵngcc0 from '@angular/core';
export declare class RoutingParamsService {
    protected router: Router;
    protected navigationEndEvent$: Observable<import("@angular/router").Event>;
    protected readonly params$: Observable<{
        [key: string]: string;
    }>;
    constructor(router: Router);
    /**
     * Get the list of all parameters of the full route. This includes
     * active child routes.
     */
    getParams(): Observable<{
        [key: string]: string;
    }>;
    protected findAllParam(route: ActivatedRouteSnapshot): {
        [key: string]: string;
    };
    static ɵfac: ɵngcc0.ɵɵFactoryDef<RoutingParamsService, never>;
}

//# sourceMappingURL=routing-params.service.d.ts.map
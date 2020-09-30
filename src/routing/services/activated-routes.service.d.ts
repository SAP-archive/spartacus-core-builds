import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
/**
 * Helper service to expose all activated routes
 */
import * as ɵngcc0 from '@angular/core';
export declare class ActivatedRoutesService {
    protected router: Router;
    constructor(router: Router);
    /**
     * Array of currently activated routes (from the root route to the leaf route).
     */
    readonly routes$: Observable<ActivatedRouteSnapshot[]>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ActivatedRoutesService, never>;
}

//# sourceMappingURL=activated-routes.service.d.ts.map
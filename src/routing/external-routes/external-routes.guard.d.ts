import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { WindowRef } from '../../window/window-ref';
import * as ɵngcc0 from '@angular/core';
export declare class ExternalRoutesGuard implements CanActivate {
    protected winRef: WindowRef;
    protected platformId: Object;
    constructor(winRef: WindowRef, platformId: Object);
    /**
     * Redirects to different storefront system for anticipated URL
     */
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean;
    /**
     * Redirects to anticipated URL using full page reload, not Angular routing
     */
    protected redirect(_: ActivatedRouteSnapshot, state: RouterStateSnapshot): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ExternalRoutesGuard>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZXJuYWwtcm91dGVzLmd1YXJkLmQudHMiLCJzb3VyY2VzIjpbImV4dGVybmFsLXJvdXRlcy5ndWFyZC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUFFQTs7Ozs7Ozs7Ozs7OztBQVlBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgQ2FuQWN0aXZhdGUsIFJvdXRlclN0YXRlU25hcHNob3QgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgV2luZG93UmVmIH0gZnJvbSAnLi4vLi4vd2luZG93L3dpbmRvdy1yZWYnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgRXh0ZXJuYWxSb3V0ZXNHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcbiAgICBwcm90ZWN0ZWQgd2luUmVmOiBXaW5kb3dSZWY7XG4gICAgcHJvdGVjdGVkIHBsYXRmb3JtSWQ6IE9iamVjdDtcbiAgICBjb25zdHJ1Y3Rvcih3aW5SZWY6IFdpbmRvd1JlZiwgcGxhdGZvcm1JZDogT2JqZWN0KTtcbiAgICAvKipcbiAgICAgKiBSZWRpcmVjdHMgdG8gZGlmZmVyZW50IHN0b3JlZnJvbnQgc3lzdGVtIGZvciBhbnRpY2lwYXRlZCBVUkxcbiAgICAgKi9cbiAgICBjYW5BY3RpdmF0ZShyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIFJlZGlyZWN0cyB0byBhbnRpY2lwYXRlZCBVUkwgdXNpbmcgZnVsbCBwYWdlIHJlbG9hZCwgbm90IEFuZ3VsYXIgcm91dGluZ1xuICAgICAqL1xuICAgIHByb3RlY3RlZCByZWRpcmVjdChfOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCk6IHZvaWQ7XG59XG4iXX0=
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZXJuYWwtcm91dGVzLmd1YXJkLmQudHMiLCJzb3VyY2VzIjpbImV4dGVybmFsLXJvdXRlcy5ndWFyZC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUFFQTs7Ozs7Ozs7Ozs7OztBQVlBOyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIENhbkFjdGl2YXRlLCBSb3V0ZXJTdGF0ZVNuYXBzaG90IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFdpbmRvd1JlZiB9IGZyb20gJy4uLy4uL3dpbmRvdy93aW5kb3ctcmVmJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEV4dGVybmFsUm91dGVzR3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XG4gICAgcHJvdGVjdGVkIHdpblJlZjogV2luZG93UmVmO1xuICAgIHByb3RlY3RlZCBwbGF0Zm9ybUlkOiBPYmplY3Q7XG4gICAgY29uc3RydWN0b3Iod2luUmVmOiBXaW5kb3dSZWYsIHBsYXRmb3JtSWQ6IE9iamVjdCk7XG4gICAgLyoqXG4gICAgICogUmVkaXJlY3RzIHRvIGRpZmZlcmVudCBzdG9yZWZyb250IHN5c3RlbSBmb3IgYW50aWNpcGF0ZWQgVVJMXG4gICAgICovXG4gICAgY2FuQWN0aXZhdGUocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KTogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBSZWRpcmVjdHMgdG8gYW50aWNpcGF0ZWQgVVJMIHVzaW5nIGZ1bGwgcGFnZSByZWxvYWQsIG5vdCBBbmd1bGFyIHJvdXRpbmdcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgcmVkaXJlY3QoXzogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpOiB2b2lkO1xufVxuIl19
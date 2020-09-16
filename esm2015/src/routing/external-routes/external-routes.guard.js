import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { WindowRef } from '../../window/window-ref';
import * as i0 from "@angular/core";
import * as i1 from "../../window/window-ref";
export class ExternalRoutesGuard {
    constructor(winRef, platformId) {
        this.winRef = winRef;
        this.platformId = platformId;
    }
    /**
     * Redirects to different storefront system for anticipated URL
     */
    canActivate(route, state) {
        if (isPlatformBrowser(this.platformId)) {
            this.redirect(route, state);
        }
        return false;
    }
    /**
     * Redirects to anticipated URL using full page reload, not Angular routing
     */
    redirect(_, state) {
        const window = this.winRef.nativeWindow;
        if (window && window.location) {
            window.location.href = state.url;
        }
    }
}
ExternalRoutesGuard.ɵprov = i0.ɵɵdefineInjectable({ factory: function ExternalRoutesGuard_Factory() { return new ExternalRoutesGuard(i0.ɵɵinject(i1.WindowRef), i0.ɵɵinject(i0.PLATFORM_ID)); }, token: ExternalRoutesGuard, providedIn: "root" });
ExternalRoutesGuard.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
ExternalRoutesGuard.ctorParameters = () => [
    { type: WindowRef },
    { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZXJuYWwtcm91dGVzLmd1YXJkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS9zcmMvcm91dGluZy9leHRlcm5hbC1yb3V0ZXMvZXh0ZXJuYWwtcm91dGVzLmd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU1oRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0seUJBQXlCLENBQUM7OztBQUdwRCxNQUFNLE9BQU8sbUJBQW1CO0lBQzlCLFlBQ1ksTUFBaUIsRUFDSSxVQUFrQjtRQUR2QyxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQ0ksZUFBVSxHQUFWLFVBQVUsQ0FBUTtJQUNoRCxDQUFDO0lBRUo7O09BRUc7SUFDSCxXQUFXLENBQ1QsS0FBNkIsRUFDN0IsS0FBMEI7UUFFMUIsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDdEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDN0I7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFRDs7T0FFRztJQUNPLFFBQVEsQ0FBQyxDQUF5QixFQUFFLEtBQTBCO1FBQ3RFLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDO1FBRXhDLElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxRQUFRLEVBQUU7WUFDN0IsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQztTQUNsQztJQUNILENBQUM7Ozs7WUE3QkYsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7O1lBRnpCLFNBQVM7WUFNNkIsTUFBTSx1QkFBaEQsTUFBTSxTQUFDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxuICBDYW5BY3RpdmF0ZSxcbiAgUm91dGVyU3RhdGVTbmFwc2hvdCxcbn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFdpbmRvd1JlZiB9IGZyb20gJy4uLy4uL3dpbmRvdy93aW5kb3ctcmVmJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBFeHRlcm5hbFJvdXRlc0d1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgd2luUmVmOiBXaW5kb3dSZWYsXG4gICAgQEluamVjdChQTEFURk9STV9JRCkgcHJvdGVjdGVkIHBsYXRmb3JtSWQ6IE9iamVjdFxuICApIHt9XG5cbiAgLyoqXG4gICAqIFJlZGlyZWN0cyB0byBkaWZmZXJlbnQgc3RvcmVmcm9udCBzeXN0ZW0gZm9yIGFudGljaXBhdGVkIFVSTFxuICAgKi9cbiAgY2FuQWN0aXZhdGUoXG4gICAgcm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsXG4gICAgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3RcbiAgKTogYm9vbGVhbiB7XG4gICAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcbiAgICAgIHRoaXMucmVkaXJlY3Qocm91dGUsIHN0YXRlKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZGlyZWN0cyB0byBhbnRpY2lwYXRlZCBVUkwgdXNpbmcgZnVsbCBwYWdlIHJlbG9hZCwgbm90IEFuZ3VsYXIgcm91dGluZ1xuICAgKi9cbiAgcHJvdGVjdGVkIHJlZGlyZWN0KF86IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KSB7XG4gICAgY29uc3Qgd2luZG93ID0gdGhpcy53aW5SZWYubmF0aXZlV2luZG93O1xuXG4gICAgaWYgKHdpbmRvdyAmJiB3aW5kb3cubG9jYXRpb24pIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gc3RhdGUudXJsO1xuICAgIH1cbiAgfVxufVxuIl19
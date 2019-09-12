/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { WindowRef } from '../../window/window-ref';
import * as i0 from "@angular/core";
import * as i1 from "../../window/window-ref";
export class ExternalRoutesGuard {
    /**
     * @param {?} winRef
     * @param {?} platformId
     */
    constructor(winRef, platformId) {
        this.winRef = winRef;
        this.platformId = platformId;
    }
    /**
     * Redirects to different storefront system for anticipated URL
     * @param {?} route
     * @param {?} state
     * @return {?}
     */
    canActivate(route, state) {
        if (isPlatformBrowser(this.platformId)) {
            this.redirect(route, state);
        }
        return false;
    }
    /**
     * Redirects to anticipated URL using full page reload, not Angular routing
     * @protected
     * @param {?} _
     * @param {?} state
     * @return {?}
     */
    redirect(_, state) {
        /** @type {?} */
        const window = this.winRef.nativeWindow;
        if (window && window.location) {
            window.location.href = state.url;
        }
    }
}
ExternalRoutesGuard.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
ExternalRoutesGuard.ctorParameters = () => [
    { type: WindowRef },
    { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
/** @nocollapse */ ExternalRoutesGuard.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ExternalRoutesGuard_Factory() { return new ExternalRoutesGuard(i0.ɵɵinject(i1.WindowRef), i0.ɵɵinject(i0.PLATFORM_ID)); }, token: ExternalRoutesGuard, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @protected
     */
    ExternalRoutesGuard.prototype.winRef;
    /**
     * @type {?}
     * @protected
     */
    ExternalRoutesGuard.prototype.platformId;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZXJuYWwtcm91dGVzLmd1YXJkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3JvdXRpbmcvZXh0ZXJuYWwtcm91dGVzL2V4dGVybmFsLXJvdXRlcy5ndWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTWhFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7O0FBR3BELE1BQU0sT0FBTyxtQkFBbUI7Ozs7O0lBQzlCLFlBQ1ksTUFBaUIsRUFDSSxVQUFrQjtRQUR2QyxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQ0ksZUFBVSxHQUFWLFVBQVUsQ0FBUTtJQUNoRCxDQUFDOzs7Ozs7O0lBS0osV0FBVyxDQUNULEtBQTZCLEVBQzdCLEtBQTBCO1FBRTFCLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3RDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQzdCO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzs7Ozs7OztJQUtTLFFBQVEsQ0FBQyxDQUF5QixFQUFFLEtBQTBCOztjQUNoRSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZO1FBRXZDLElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxRQUFRLEVBQUU7WUFDN0IsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQztTQUNsQztJQUNILENBQUM7OztZQTdCRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7O1lBRnpCLFNBQVM7WUFNNkIsTUFBTSx1QkFBaEQsTUFBTSxTQUFDLFdBQVc7Ozs7Ozs7O0lBRG5CLHFDQUEyQjs7Ozs7SUFDM0IseUNBQWlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBQTEFURk9STV9JRCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcbiAgQ2FuQWN0aXZhdGUsXG4gIFJvdXRlclN0YXRlU25hcHNob3QsXG59IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBXaW5kb3dSZWYgfSBmcm9tICcuLi8uLi93aW5kb3cvd2luZG93LXJlZic7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgRXh0ZXJuYWxSb3V0ZXNHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHdpblJlZjogV2luZG93UmVmLFxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHByb3RlY3RlZCBwbGF0Zm9ybUlkOiBPYmplY3RcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBSZWRpcmVjdHMgdG8gZGlmZmVyZW50IHN0b3JlZnJvbnQgc3lzdGVtIGZvciBhbnRpY2lwYXRlZCBVUkxcbiAgICovXG4gIGNhbkFjdGl2YXRlKFxuICAgIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LFxuICAgIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90XG4gICk6IGJvb2xlYW4ge1xuICAgIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG4gICAgICB0aGlzLnJlZGlyZWN0KHJvdXRlLCBzdGF0ZSk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWRpcmVjdHMgdG8gYW50aWNpcGF0ZWQgVVJMIHVzaW5nIGZ1bGwgcGFnZSByZWxvYWQsIG5vdCBBbmd1bGFyIHJvdXRpbmdcbiAgICovXG4gIHByb3RlY3RlZCByZWRpcmVjdChfOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCkge1xuICAgIGNvbnN0IHdpbmRvdyA9IHRoaXMud2luUmVmLm5hdGl2ZVdpbmRvdztcblxuICAgIGlmICh3aW5kb3cgJiYgd2luZG93LmxvY2F0aW9uKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHN0YXRlLnVybDtcbiAgICB9XG4gIH1cbn1cbiJdfQ==
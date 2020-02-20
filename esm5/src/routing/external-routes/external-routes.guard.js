import { __decorate, __param } from "tslib";
import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { WindowRef } from '../../window/window-ref';
import * as i0 from "@angular/core";
import * as i1 from "../../window/window-ref";
var ExternalRoutesGuard = /** @class */ (function () {
    function ExternalRoutesGuard(winRef, platformId) {
        this.winRef = winRef;
        this.platformId = platformId;
    }
    /**
     * Redirects to different storefront system for anticipated URL
     */
    ExternalRoutesGuard.prototype.canActivate = function (route, state) {
        if (isPlatformBrowser(this.platformId)) {
            this.redirect(route, state);
        }
        return false;
    };
    /**
     * Redirects to anticipated URL using full page reload, not Angular routing
     */
    ExternalRoutesGuard.prototype.redirect = function (_, state) {
        var window = this.winRef.nativeWindow;
        if (window && window.location) {
            window.location.href = state.url;
        }
    };
    ExternalRoutesGuard.ctorParameters = function () { return [
        { type: WindowRef },
        { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
    ]; };
    ExternalRoutesGuard.ɵprov = i0.ɵɵdefineInjectable({ factory: function ExternalRoutesGuard_Factory() { return new ExternalRoutesGuard(i0.ɵɵinject(i1.WindowRef), i0.ɵɵinject(i0.PLATFORM_ID)); }, token: ExternalRoutesGuard, providedIn: "root" });
    ExternalRoutesGuard = __decorate([
        Injectable({ providedIn: 'root' }),
        __param(1, Inject(PLATFORM_ID))
    ], ExternalRoutesGuard);
    return ExternalRoutesGuard;
}());
export { ExternalRoutesGuard };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZXJuYWwtcm91dGVzLmd1YXJkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3JvdXRpbmcvZXh0ZXJuYWwtcm91dGVzL2V4dGVybmFsLXJvdXRlcy5ndWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTWhFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7O0FBR3BEO0lBQ0UsNkJBQ1ksTUFBaUIsRUFDSSxVQUFrQjtRQUR2QyxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQ0ksZUFBVSxHQUFWLFVBQVUsQ0FBUTtJQUNoRCxDQUFDO0lBRUo7O09BRUc7SUFDSCx5Q0FBVyxHQUFYLFVBQ0UsS0FBNkIsRUFDN0IsS0FBMEI7UUFFMUIsSUFBSSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDdEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDN0I7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFRDs7T0FFRztJQUNPLHNDQUFRLEdBQWxCLFVBQW1CLENBQXlCLEVBQUUsS0FBMEI7UUFDdEUsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUM7UUFFeEMsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLFFBQVEsRUFBRTtZQUM3QixNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDO1NBQ2xDO0lBQ0gsQ0FBQzs7Z0JBMUJtQixTQUFTO2dCQUNnQixNQUFNLHVCQUFoRCxNQUFNLFNBQUMsV0FBVzs7O0lBSFYsbUJBQW1CO1FBRC9CLFVBQVUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsQ0FBQztRQUk5QixXQUFBLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQTtPQUhYLG1CQUFtQixDQTZCL0I7OEJBdkNEO0NBdUNDLEFBN0JELElBNkJDO1NBN0JZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgUExBVEZPUk1fSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEFjdGl2YXRlZFJvdXRlU25hcHNob3QsXG4gIENhbkFjdGl2YXRlLFxuICBSb3V0ZXJTdGF0ZVNuYXBzaG90LFxufSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgV2luZG93UmVmIH0gZnJvbSAnLi4vLi4vd2luZG93L3dpbmRvdy1yZWYnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIEV4dGVybmFsUm91dGVzR3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCB3aW5SZWY6IFdpbmRvd1JlZixcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwcm90ZWN0ZWQgcGxhdGZvcm1JZDogT2JqZWN0XG4gICkge31cblxuICAvKipcbiAgICogUmVkaXJlY3RzIHRvIGRpZmZlcmVudCBzdG9yZWZyb250IHN5c3RlbSBmb3IgYW50aWNpcGF0ZWQgVVJMXG4gICAqL1xuICBjYW5BY3RpdmF0ZShcbiAgICByb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcbiAgICBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdFxuICApOiBib29sZWFuIHtcbiAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5wbGF0Zm9ybUlkKSkge1xuICAgICAgdGhpcy5yZWRpcmVjdChyb3V0ZSwgc3RhdGUpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogUmVkaXJlY3RzIHRvIGFudGljaXBhdGVkIFVSTCB1c2luZyBmdWxsIHBhZ2UgcmVsb2FkLCBub3QgQW5ndWxhciByb3V0aW5nXG4gICAqL1xuICBwcm90ZWN0ZWQgcmVkaXJlY3QoXzogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgc3RhdGU6IFJvdXRlclN0YXRlU25hcHNob3QpIHtcbiAgICBjb25zdCB3aW5kb3cgPSB0aGlzLndpblJlZi5uYXRpdmVXaW5kb3c7XG5cbiAgICBpZiAod2luZG93ICYmIHdpbmRvdy5sb2NhdGlvbikge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBzdGF0ZS51cmw7XG4gICAgfVxuICB9XG59XG4iXX0=
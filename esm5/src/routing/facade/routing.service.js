/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromStore from '../store';
import { WindowRef } from '../../window/window-ref';
import { UrlService } from '../configurable-routes/url-translation/url.service';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
import * as i2 from "../../window/window-ref";
import * as i3 from "../configurable-routes/url-translation/url.service";
var RoutingService = /** @class */ (function () {
    function RoutingService(store, winRef, urlService) {
        this.store = store;
        this.winRef = winRef;
        this.urlService = urlService;
    }
    /**
     * Get the current router state
     */
    /**
     * Get the current router state
     * @return {?}
     */
    RoutingService.prototype.getRouterState = /**
     * Get the current router state
     * @return {?}
     */
    function () {
        return this.store.pipe(select(fromStore.getRouterState));
    };
    /**
     * Get the `PageContext` from the state
     */
    /**
     * Get the `PageContext` from the state
     * @return {?}
     */
    RoutingService.prototype.getPageContext = /**
     * Get the `PageContext` from the state
     * @return {?}
     */
    function () {
        return this.store.pipe(select(fromStore.getPageContext));
    };
    /**
     * Get the next `PageContext` from the state
     */
    /**
     * Get the next `PageContext` from the state
     * @return {?}
     */
    RoutingService.prototype.getNextPageContext = /**
     * Get the next `PageContext` from the state
     * @return {?}
     */
    function () {
        return this.store.pipe(select(fromStore.getNextPageContext));
    };
    /**
     * Get the `isNavigating` info from the state
     */
    /**
     * Get the `isNavigating` info from the state
     * @return {?}
     */
    RoutingService.prototype.isNavigating = /**
     * Get the `isNavigating` info from the state
     * @return {?}
     */
    function () {
        return this.store.pipe(select(fromStore.isNavigating));
    };
    /**
     * Navigation with a new state into history
     * @param commands: url commands
     * @param query
     * @param extras: Represents the extra options used during navigation.
     */
    /**
     * Navigation with a new state into history
     * @param {?} commands
     * @param {?=} query
     * @param {?=} extras
     * @return {?}
     */
    RoutingService.prototype.go = /**
     * Navigation with a new state into history
     * @param {?} commands
     * @param {?=} query
     * @param {?=} extras
     * @return {?}
     */
    function (commands, query, extras) {
        /** @type {?} */
        var path = this.urlService.generateUrl(commands, { relative: true });
        return this.navigate(path, query, extras);
    };
    /**
     * Navigation using URL
     * @param url
     */
    /**
     * Navigation using URL
     * @param {?} url
     * @return {?}
     */
    RoutingService.prototype.goByUrl = /**
     * Navigation using URL
     * @param {?} url
     * @return {?}
     */
    function (url) {
        this.store.dispatch(new fromStore.GoByUrl(url));
    };
    /**
     * Navigating back
     */
    /**
     * Navigating back
     * @return {?}
     */
    RoutingService.prototype.back = /**
     * Navigating back
     * @return {?}
     */
    function () {
        /** @type {?} */
        var isLastPageInApp = this.winRef.document.referrer.indexOf(this.winRef.nativeWindow.location.origin) > -1;
        if (isLastPageInApp) {
            this.store.dispatch(new fromStore.Back());
            return;
        }
        this.go(['/']);
        return;
    };
    /**
     * Navigating forward
     */
    /**
     * Navigating forward
     * @return {?}
     */
    RoutingService.prototype.forward = /**
     * Navigating forward
     * @return {?}
     */
    function () {
        this.store.dispatch(new fromStore.Forward());
    };
    /**
     * Get the redirect url from store
     */
    /**
     * Get the redirect url from store
     * @return {?}
     */
    RoutingService.prototype.getRedirectUrl = /**
     * Get the redirect url from store
     * @return {?}
     */
    function () {
        return this.store.pipe(select(fromStore.getRedirectUrl));
    };
    /**
     * Remove the redirect url from store
     */
    /**
     * Remove the redirect url from store
     * @return {?}
     */
    RoutingService.prototype.clearRedirectUrl = /**
     * Remove the redirect url from store
     * @return {?}
     */
    function () {
        this.store.dispatch(new fromStore.ClearRedirectUrl());
    };
    /**
     * Put redirct url into store
     * @param url: redirect url
     */
    /**
     * Put redirct url into store
     * @param {?} url
     * @return {?}
     */
    RoutingService.prototype.saveRedirectUrl = /**
     * Put redirct url into store
     * @param {?} url
     * @return {?}
     */
    function (url) {
        this.store.dispatch(new fromStore.SaveRedirectUrl(url));
    };
    /**
     * Navigation with a new state into history
     * @param path
     * @param query
     * @param extras: Represents the extra options used during navigation.
     */
    /**
     * Navigation with a new state into history
     * @private
     * @param {?} path
     * @param {?=} query
     * @param {?=} extras
     * @return {?}
     */
    RoutingService.prototype.navigate = /**
     * Navigation with a new state into history
     * @private
     * @param {?} path
     * @param {?=} query
     * @param {?=} extras
     * @return {?}
     */
    function (path, query, extras) {
        this.store.dispatch(new fromStore.Go({
            path: path,
            query: query,
            extras: extras,
        }));
    };
    RoutingService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    RoutingService.ctorParameters = function () { return [
        { type: Store },
        { type: WindowRef },
        { type: UrlService }
    ]; };
    /** @nocollapse */ RoutingService.ngInjectableDef = i0.defineInjectable({ factory: function RoutingService_Factory() { return new RoutingService(i0.inject(i1.Store), i0.inject(i2.WindowRef), i0.inject(i3.UrlService)); }, token: RoutingService, providedIn: "root" });
    return RoutingService;
}());
export { RoutingService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    RoutingService.prototype.store;
    /**
     * @type {?}
     * @private
     */
    RoutingService.prototype.winRef;
    /**
     * @type {?}
     * @private
     */
    RoutingService.prototype.urlService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGluZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3JvdXRpbmcvZmFjYWRlL3JvdXRpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUk1QyxPQUFPLEtBQUssU0FBUyxNQUFNLFVBQVUsQ0FBQztBQUV0QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFcEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9EQUFvRCxDQUFDOzs7OztBQUdoRjtJQUlFLHdCQUNVLEtBQW1DLEVBQ25DLE1BQWlCLEVBQ2pCLFVBQXNCO1FBRnRCLFVBQUssR0FBTCxLQUFLLENBQThCO1FBQ25DLFdBQU0sR0FBTixNQUFNLENBQVc7UUFDakIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtJQUM3QixDQUFDO0lBRUo7O09BRUc7Ozs7O0lBQ0gsdUNBQWM7Ozs7SUFBZDtRQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSCx1Q0FBYzs7OztJQUFkO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVEOztPQUVHOzs7OztJQUNILDJDQUFrQjs7OztJQUFsQjtRQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVEOztPQUVHOzs7OztJQUNILHFDQUFZOzs7O0lBQVo7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRUQ7Ozs7O09BS0c7Ozs7Ozs7O0lBQ0gsMkJBQUU7Ozs7Ozs7SUFBRixVQUFHLFFBQXFCLEVBQUUsS0FBYyxFQUFFLE1BQXlCOztZQUMzRCxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDO1FBRXRFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRDs7O09BR0c7Ozs7OztJQUNILGdDQUFPOzs7OztJQUFQLFVBQVEsR0FBVztRQUNqQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0gsNkJBQUk7Ozs7SUFBSjs7WUFDUSxlQUFlLEdBQ25CLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQ25DLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQ3pDLEdBQUcsQ0FBQyxDQUFDO1FBQ1IsSUFBSSxlQUFlLEVBQUU7WUFDbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztZQUMxQyxPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNmLE9BQU87SUFDVCxDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0gsZ0NBQU87Ozs7SUFBUDtRQUNFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVEOztPQUVHOzs7OztJQUNILHVDQUFjOzs7O0lBQWQ7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0gseUNBQWdCOzs7O0lBQWhCO1FBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxTQUFTLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFRDs7O09BR0c7Ozs7OztJQUNILHdDQUFlOzs7OztJQUFmLFVBQWdCLEdBQVc7UUFDekIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxTQUFTLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVEOzs7OztPQUtHOzs7Ozs7Ozs7SUFDSyxpQ0FBUTs7Ozs7Ozs7SUFBaEIsVUFDRSxJQUFXLEVBQ1gsS0FBYyxFQUNkLE1BQXlCO1FBRXpCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNqQixJQUFJLFNBQVMsQ0FBQyxFQUFFLENBQUM7WUFDZixJQUFJLE1BQUE7WUFDSixLQUFLLE9BQUE7WUFDTCxNQUFNLFFBQUE7U0FDUCxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7O2dCQXpIRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQWJnQixLQUFLO2dCQU1iLFNBQVM7Z0JBRVQsVUFBVTs7O3lCQVhuQjtDQXdJQyxBQTFIRCxJQTBIQztTQXZIWSxjQUFjOzs7Ozs7SUFFdkIsK0JBQTJDOzs7OztJQUMzQyxnQ0FBeUI7Ozs7O0lBQ3pCLG9DQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdmlnYXRpb25FeHRyYXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCAqIGFzIGZyb21TdG9yZSBmcm9tICcuLi9zdG9yZSc7XG5pbXBvcnQgeyBQYWdlQ29udGV4dCB9IGZyb20gJy4uL21vZGVscy9wYWdlLWNvbnRleHQubW9kZWwnO1xuaW1wb3J0IHsgV2luZG93UmVmIH0gZnJvbSAnLi4vLi4vd2luZG93L3dpbmRvdy1yZWYnO1xuaW1wb3J0IHsgVXJsQ29tbWFuZHMgfSBmcm9tICcuLi9jb25maWd1cmFibGUtcm91dGVzL3VybC10cmFuc2xhdGlvbi91cmwtY29tbWFuZCc7XG5pbXBvcnQgeyBVcmxTZXJ2aWNlIH0gZnJvbSAnLi4vY29uZmlndXJhYmxlLXJvdXRlcy91cmwtdHJhbnNsYXRpb24vdXJsLnNlcnZpY2UnO1xuaW1wb3J0IHsgUm91dGVyU3RhdGUgfSBmcm9tICcuLi9zdG9yZS9yZWR1Y2Vycy9yb3V0ZXIucmVkdWNlcic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBSb3V0aW5nU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgc3RvcmU6IFN0b3JlPGZyb21TdG9yZS5Sb3V0ZXJTdGF0ZT4sXG4gICAgcHJpdmF0ZSB3aW5SZWY6IFdpbmRvd1JlZixcbiAgICBwcml2YXRlIHVybFNlcnZpY2U6IFVybFNlcnZpY2VcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGN1cnJlbnQgcm91dGVyIHN0YXRlXG4gICAqL1xuICBnZXRSb3V0ZXJTdGF0ZSgpOiBPYnNlcnZhYmxlPFJvdXRlclN0YXRlPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoZnJvbVN0b3JlLmdldFJvdXRlclN0YXRlKSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBgUGFnZUNvbnRleHRgIGZyb20gdGhlIHN0YXRlXG4gICAqL1xuICBnZXRQYWdlQ29udGV4dCgpOiBPYnNlcnZhYmxlPFBhZ2VDb250ZXh0PiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoZnJvbVN0b3JlLmdldFBhZ2VDb250ZXh0KSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBuZXh0IGBQYWdlQ29udGV4dGAgZnJvbSB0aGUgc3RhdGVcbiAgICovXG4gIGdldE5leHRQYWdlQ29udGV4dCgpOiBPYnNlcnZhYmxlPFBhZ2VDb250ZXh0PiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoZnJvbVN0b3JlLmdldE5leHRQYWdlQ29udGV4dCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgYGlzTmF2aWdhdGluZ2AgaW5mbyBmcm9tIHRoZSBzdGF0ZVxuICAgKi9cbiAgaXNOYXZpZ2F0aW5nKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KGZyb21TdG9yZS5pc05hdmlnYXRpbmcpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBOYXZpZ2F0aW9uIHdpdGggYSBuZXcgc3RhdGUgaW50byBoaXN0b3J5XG4gICAqIEBwYXJhbSBjb21tYW5kczogdXJsIGNvbW1hbmRzXG4gICAqIEBwYXJhbSBxdWVyeVxuICAgKiBAcGFyYW0gZXh0cmFzOiBSZXByZXNlbnRzIHRoZSBleHRyYSBvcHRpb25zIHVzZWQgZHVyaW5nIG5hdmlnYXRpb24uXG4gICAqL1xuICBnbyhjb21tYW5kczogVXJsQ29tbWFuZHMsIHF1ZXJ5Pzogb2JqZWN0LCBleHRyYXM/OiBOYXZpZ2F0aW9uRXh0cmFzKTogdm9pZCB7XG4gICAgY29uc3QgcGF0aCA9IHRoaXMudXJsU2VydmljZS5nZW5lcmF0ZVVybChjb21tYW5kcywgeyByZWxhdGl2ZTogdHJ1ZSB9KTtcblxuICAgIHJldHVybiB0aGlzLm5hdmlnYXRlKHBhdGgsIHF1ZXJ5LCBleHRyYXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIE5hdmlnYXRpb24gdXNpbmcgVVJMXG4gICAqIEBwYXJhbSB1cmxcbiAgICovXG4gIGdvQnlVcmwodXJsOiBzdHJpbmcpIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBmcm9tU3RvcmUuR29CeVVybCh1cmwpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBOYXZpZ2F0aW5nIGJhY2tcbiAgICovXG4gIGJhY2soKTogdm9pZCB7XG4gICAgY29uc3QgaXNMYXN0UGFnZUluQXBwID1cbiAgICAgIHRoaXMud2luUmVmLmRvY3VtZW50LnJlZmVycmVyLmluZGV4T2YoXG4gICAgICAgIHRoaXMud2luUmVmLm5hdGl2ZVdpbmRvdy5sb2NhdGlvbi5vcmlnaW5cbiAgICAgICkgPiAtMTtcbiAgICBpZiAoaXNMYXN0UGFnZUluQXBwKSB7XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBmcm9tU3RvcmUuQmFjaygpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5nbyhbJy8nXSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIE5hdmlnYXRpbmcgZm9yd2FyZFxuICAgKi9cbiAgZm9yd2FyZCgpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBmcm9tU3RvcmUuRm9yd2FyZCgpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHJlZGlyZWN0IHVybCBmcm9tIHN0b3JlXG4gICAqL1xuICBnZXRSZWRpcmVjdFVybCgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KGZyb21TdG9yZS5nZXRSZWRpcmVjdFVybCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgcmVkaXJlY3QgdXJsIGZyb20gc3RvcmVcbiAgICovXG4gIGNsZWFyUmVkaXJlY3RVcmwoKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgZnJvbVN0b3JlLkNsZWFyUmVkaXJlY3RVcmwoKSk7XG4gIH1cblxuICAvKipcbiAgICogUHV0IHJlZGlyY3QgdXJsIGludG8gc3RvcmVcbiAgICogQHBhcmFtIHVybDogcmVkaXJlY3QgdXJsXG4gICAqL1xuICBzYXZlUmVkaXJlY3RVcmwodXJsOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBmcm9tU3RvcmUuU2F2ZVJlZGlyZWN0VXJsKHVybCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIE5hdmlnYXRpb24gd2l0aCBhIG5ldyBzdGF0ZSBpbnRvIGhpc3RvcnlcbiAgICogQHBhcmFtIHBhdGhcbiAgICogQHBhcmFtIHF1ZXJ5XG4gICAqIEBwYXJhbSBleHRyYXM6IFJlcHJlc2VudHMgdGhlIGV4dHJhIG9wdGlvbnMgdXNlZCBkdXJpbmcgbmF2aWdhdGlvbi5cbiAgICovXG4gIHByaXZhdGUgbmF2aWdhdGUoXG4gICAgcGF0aDogYW55W10sXG4gICAgcXVlcnk/OiBvYmplY3QsXG4gICAgZXh0cmFzPzogTmF2aWdhdGlvbkV4dHJhc1xuICApOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IGZyb21TdG9yZS5Hbyh7XG4gICAgICAgIHBhdGgsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBleHRyYXMsXG4gICAgICB9KVxuICAgICk7XG4gIH1cbn1cbiJdfQ==
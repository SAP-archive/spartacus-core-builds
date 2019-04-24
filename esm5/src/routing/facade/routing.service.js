/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromStore from '../store';
import { WindowRef } from '../../window/window-ref';
import { UrlTranslationService } from '../configurable-routes/url-translation/url-translation.service';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
import * as i2 from "../../window/window-ref";
import * as i3 from "../configurable-routes/url-translation/url-translation.service";
var RoutingService = /** @class */ (function () {
    function RoutingService(store, winRef, urlTranslator) {
        this.store = store;
        this.winRef = winRef;
        this.urlTranslator = urlTranslator;
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
        var path = this.urlTranslator.translate(commands, { relative: true });
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
        { type: UrlTranslationService }
    ]; };
    /** @nocollapse */ RoutingService.ngInjectableDef = i0.defineInjectable({ factory: function RoutingService_Factory() { return new RoutingService(i0.inject(i1.Store), i0.inject(i2.WindowRef), i0.inject(i3.UrlTranslationService)); }, token: RoutingService, providedIn: "root" });
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
    RoutingService.prototype.urlTranslator;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGluZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3JvdXRpbmcvZmFjYWRlL3JvdXRpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUk1QyxPQUFPLEtBQUssU0FBUyxNQUFNLFVBQVUsQ0FBQztBQUV0QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFcEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sZ0VBQWdFLENBQUM7Ozs7O0FBRXZHO0lBSUUsd0JBQ1UsS0FBbUMsRUFDbkMsTUFBaUIsRUFDakIsYUFBb0M7UUFGcEMsVUFBSyxHQUFMLEtBQUssQ0FBOEI7UUFDbkMsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQUNqQixrQkFBYSxHQUFiLGFBQWEsQ0FBdUI7SUFDM0MsQ0FBQztJQUVKOztPQUVHOzs7OztJQUNILHVDQUFjOzs7O0lBQWQ7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0gsdUNBQWM7Ozs7SUFBZDtRQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRDs7Ozs7T0FLRzs7Ozs7Ozs7SUFDSCwyQkFBRTs7Ozs7OztJQUFGLFVBQ0UsUUFBOEIsRUFDOUIsS0FBYyxFQUNkLE1BQXlCOztZQUVuQixJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDO1FBRXZFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRDs7O09BR0c7Ozs7OztJQUNILGdDQUFPOzs7OztJQUFQLFVBQVEsR0FBVztRQUNqQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0gsNkJBQUk7Ozs7SUFBSjs7WUFDUSxlQUFlLEdBQ25CLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQ25DLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQ3pDLEdBQUcsQ0FBQyxDQUFDO1FBQ1IsSUFBSSxlQUFlLEVBQUU7WUFDbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztZQUMxQyxPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNmLE9BQU87SUFDVCxDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0gsZ0NBQU87Ozs7SUFBUDtRQUNFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVEOztPQUVHOzs7OztJQUNILHVDQUFjOzs7O0lBQWQ7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0gseUNBQWdCOzs7O0lBQWhCO1FBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxTQUFTLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFRDs7O09BR0c7Ozs7OztJQUNILHdDQUFlOzs7OztJQUFmLFVBQWdCLEdBQVc7UUFDekIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxTQUFTLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVEOzs7OztPQUtHOzs7Ozs7Ozs7SUFDSyxpQ0FBUTs7Ozs7Ozs7SUFBaEIsVUFDRSxJQUFXLEVBQ1gsS0FBYyxFQUNkLE1BQXlCO1FBRXpCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNqQixJQUFJLFNBQVMsQ0FBQyxFQUFFLENBQUM7WUFDZixJQUFJLE1BQUE7WUFDSixLQUFLLE9BQUE7WUFDTCxNQUFNLFFBQUE7U0FDUCxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7O2dCQS9HRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQVpnQixLQUFLO2dCQU1iLFNBQVM7Z0JBRVQscUJBQXFCOzs7eUJBWDlCO0NBNkhDLEFBaEhELElBZ0hDO1NBN0dZLGNBQWM7Ozs7OztJQUV2QiwrQkFBMkM7Ozs7O0lBQzNDLGdDQUF5Qjs7Ozs7SUFDekIsdUNBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF2aWdhdGlvbkV4dHJhcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0ICogYXMgZnJvbVN0b3JlIGZyb20gJy4uL3N0b3JlJztcbmltcG9ydCB7IFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbW9kZWxzL3BhZ2UtY29udGV4dC5tb2RlbCc7XG5pbXBvcnQgeyBXaW5kb3dSZWYgfSBmcm9tICcuLi8uLi93aW5kb3cvd2luZG93LXJlZic7XG5pbXBvcnQgeyBUcmFuc2xhdGVVcmxDb21tYW5kcyB9IGZyb20gJy4uL2NvbmZpZ3VyYWJsZS1yb3V0ZXMvdXJsLXRyYW5zbGF0aW9uL3RyYW5zbGF0ZS11cmwtY29tbWFuZHMnO1xuaW1wb3J0IHsgVXJsVHJhbnNsYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vY29uZmlndXJhYmxlLXJvdXRlcy91cmwtdHJhbnNsYXRpb24vdXJsLXRyYW5zbGF0aW9uLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgUm91dGluZ1NlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHN0b3JlOiBTdG9yZTxmcm9tU3RvcmUuUm91dGVyU3RhdGU+LFxuICAgIHByaXZhdGUgd2luUmVmOiBXaW5kb3dSZWYsXG4gICAgcHJpdmF0ZSB1cmxUcmFuc2xhdG9yOiBVcmxUcmFuc2xhdGlvblNlcnZpY2VcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGN1cnJlbnQgcm91dGVyIHN0YXRlXG4gICAqL1xuICBnZXRSb3V0ZXJTdGF0ZSgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KGZyb21TdG9yZS5nZXRSb3V0ZXJTdGF0ZSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgYFBhZ2VDb250ZXh0YCBmcm9tIHRoZSBzdGF0ZVxuICAgKi9cbiAgZ2V0UGFnZUNvbnRleHQoKTogT2JzZXJ2YWJsZTxQYWdlQ29udGV4dD4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KGZyb21TdG9yZS5nZXRQYWdlQ29udGV4dCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIE5hdmlnYXRpb24gd2l0aCBhIG5ldyBzdGF0ZSBpbnRvIGhpc3RvcnlcbiAgICogQHBhcmFtIGNvbW1hbmRzOiB1cmwgY29tbWFuZHNcbiAgICogQHBhcmFtIHF1ZXJ5XG4gICAqIEBwYXJhbSBleHRyYXM6IFJlcHJlc2VudHMgdGhlIGV4dHJhIG9wdGlvbnMgdXNlZCBkdXJpbmcgbmF2aWdhdGlvbi5cbiAgICovXG4gIGdvKFxuICAgIGNvbW1hbmRzOiBUcmFuc2xhdGVVcmxDb21tYW5kcyxcbiAgICBxdWVyeT86IG9iamVjdCxcbiAgICBleHRyYXM/OiBOYXZpZ2F0aW9uRXh0cmFzXG4gICk6IHZvaWQge1xuICAgIGNvbnN0IHBhdGggPSB0aGlzLnVybFRyYW5zbGF0b3IudHJhbnNsYXRlKGNvbW1hbmRzLCB7IHJlbGF0aXZlOiB0cnVlIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMubmF2aWdhdGUocGF0aCwgcXVlcnksIGV4dHJhcyk7XG4gIH1cblxuICAvKipcbiAgICogTmF2aWdhdGlvbiB1c2luZyBVUkxcbiAgICogQHBhcmFtIHVybFxuICAgKi9cbiAgZ29CeVVybCh1cmw6IHN0cmluZykge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IGZyb21TdG9yZS5Hb0J5VXJsKHVybCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIE5hdmlnYXRpbmcgYmFja1xuICAgKi9cbiAgYmFjaygpOiB2b2lkIHtcbiAgICBjb25zdCBpc0xhc3RQYWdlSW5BcHAgPVxuICAgICAgdGhpcy53aW5SZWYuZG9jdW1lbnQucmVmZXJyZXIuaW5kZXhPZihcbiAgICAgICAgdGhpcy53aW5SZWYubmF0aXZlV2luZG93LmxvY2F0aW9uLm9yaWdpblxuICAgICAgKSA+IC0xO1xuICAgIGlmIChpc0xhc3RQYWdlSW5BcHApIHtcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IGZyb21TdG9yZS5CYWNrKCkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmdvKFsnLyddKTtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogTmF2aWdhdGluZyBmb3J3YXJkXG4gICAqL1xuICBmb3J3YXJkKCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IGZyb21TdG9yZS5Gb3J3YXJkKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgcmVkaXJlY3QgdXJsIGZyb20gc3RvcmVcbiAgICovXG4gIGdldFJlZGlyZWN0VXJsKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoZnJvbVN0b3JlLmdldFJlZGlyZWN0VXJsKSk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSByZWRpcmVjdCB1cmwgZnJvbSBzdG9yZVxuICAgKi9cbiAgY2xlYXJSZWRpcmVjdFVybCgpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBmcm9tU3RvcmUuQ2xlYXJSZWRpcmVjdFVybCgpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQdXQgcmVkaXJjdCB1cmwgaW50byBzdG9yZVxuICAgKiBAcGFyYW0gdXJsOiByZWRpcmVjdCB1cmxcbiAgICovXG4gIHNhdmVSZWRpcmVjdFVybCh1cmw6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IGZyb21TdG9yZS5TYXZlUmVkaXJlY3RVcmwodXJsKSk7XG4gIH1cblxuICAvKipcbiAgICogTmF2aWdhdGlvbiB3aXRoIGEgbmV3IHN0YXRlIGludG8gaGlzdG9yeVxuICAgKiBAcGFyYW0gcGF0aFxuICAgKiBAcGFyYW0gcXVlcnlcbiAgICogQHBhcmFtIGV4dHJhczogUmVwcmVzZW50cyB0aGUgZXh0cmEgb3B0aW9ucyB1c2VkIGR1cmluZyBuYXZpZ2F0aW9uLlxuICAgKi9cbiAgcHJpdmF0ZSBuYXZpZ2F0ZShcbiAgICBwYXRoOiBhbnlbXSxcbiAgICBxdWVyeT86IG9iamVjdCxcbiAgICBleHRyYXM/OiBOYXZpZ2F0aW9uRXh0cmFzXG4gICk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgZnJvbVN0b3JlLkdvKHtcbiAgICAgICAgcGF0aCxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGV4dHJhcyxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxufVxuIl19
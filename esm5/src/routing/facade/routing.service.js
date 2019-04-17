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
     * @param pathOrTranslateUrlOptions: Path or options to translate url
     * @param query
     * @param extras: Represents the extra options used during navigation.
     */
    /**
     * Navigation with a new state into history
     * @param {?} pathOrTranslateUrlOptions
     * @param {?=} query
     * @param {?=} extras
     * @return {?}
     */
    RoutingService.prototype.go = /**
     * Navigation with a new state into history
     * @param {?} pathOrTranslateUrlOptions
     * @param {?=} query
     * @param {?=} extras
     * @return {?}
     */
    function (pathOrTranslateUrlOptions, query, extras) {
        /** @type {?} */
        var path;
        if (Array.isArray(pathOrTranslateUrlOptions)) {
            path = pathOrTranslateUrlOptions;
        }
        else {
            /** @type {?} */
            var translateUrlOptions = pathOrTranslateUrlOptions;
            /** @type {?} */
            var translatedPath = this.urlTranslator.translate(translateUrlOptions);
            path = Array.isArray(translatedPath) ? translatedPath : [translatedPath];
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGluZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3JvdXRpbmcvZmFjYWRlL3JvdXRpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUk1QyxPQUFPLEtBQUssU0FBUyxNQUFNLFVBQVUsQ0FBQztBQUV0QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFcEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sZ0VBQWdFLENBQUM7Ozs7O0FBRXZHO0lBSUUsd0JBQ1UsS0FBbUMsRUFDbkMsTUFBaUIsRUFDakIsYUFBb0M7UUFGcEMsVUFBSyxHQUFMLEtBQUssQ0FBOEI7UUFDbkMsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQUNqQixrQkFBYSxHQUFiLGFBQWEsQ0FBdUI7SUFDM0MsQ0FBQztJQUVKOztPQUVHOzs7OztJQUNILHVDQUFjOzs7O0lBQWQ7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0gsdUNBQWM7Ozs7SUFBZDtRQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRDs7Ozs7T0FLRzs7Ozs7Ozs7SUFDSCwyQkFBRTs7Ozs7OztJQUFGLFVBQ0UseUJBQXNELEVBQ3RELEtBQWMsRUFDZCxNQUF5Qjs7WUFFckIsSUFBVztRQUVmLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyx5QkFBeUIsQ0FBQyxFQUFFO1lBQzVDLElBQUksR0FBRyx5QkFBeUIsQ0FBQztTQUNsQzthQUFNOztnQkFDQyxtQkFBbUIsR0FBRyx5QkFBeUI7O2dCQUMvQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsbUJBQW1CLENBQUM7WUFDeEUsSUFBSSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUMxRTtRQUNELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRDs7O09BR0c7Ozs7OztJQUNILGdDQUFPOzs7OztJQUFQLFVBQVEsR0FBVztRQUNqQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0gsNkJBQUk7Ozs7SUFBSjs7WUFDUSxlQUFlLEdBQ25CLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQ25DLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQ3pDLEdBQUcsQ0FBQyxDQUFDO1FBQ1IsSUFBSSxlQUFlLEVBQUU7WUFDbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztZQUMxQyxPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNmLE9BQU87SUFDVCxDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0gsZ0NBQU87Ozs7SUFBUDtRQUNFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVEOztPQUVHOzs7OztJQUNILHVDQUFjOzs7O0lBQWQ7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0gseUNBQWdCOzs7O0lBQWhCO1FBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxTQUFTLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFRDs7O09BR0c7Ozs7OztJQUNILHdDQUFlOzs7OztJQUFmLFVBQWdCLEdBQVc7UUFDekIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxTQUFTLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVEOzs7OztPQUtHOzs7Ozs7Ozs7SUFDSyxpQ0FBUTs7Ozs7Ozs7SUFBaEIsVUFDRSxJQUFXLEVBQ1gsS0FBYyxFQUNkLE1BQXlCO1FBRXpCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNqQixJQUFJLFNBQVMsQ0FBQyxFQUFFLENBQUM7WUFDZixJQUFJLE1BQUE7WUFDSixLQUFLLE9BQUE7WUFDTCxNQUFNLFFBQUE7U0FDUCxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7O2dCQXRIRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQVpnQixLQUFLO2dCQU1iLFNBQVM7Z0JBRVQscUJBQXFCOzs7eUJBWDlCO0NBb0lDLEFBdkhELElBdUhDO1NBcEhZLGNBQWM7Ozs7OztJQUV2QiwrQkFBMkM7Ozs7O0lBQzNDLGdDQUF5Qjs7Ozs7SUFDekIsdUNBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF2aWdhdGlvbkV4dHJhcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0ICogYXMgZnJvbVN0b3JlIGZyb20gJy4uL3N0b3JlJztcbmltcG9ydCB7IFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbW9kZWxzL3BhZ2UtY29udGV4dC5tb2RlbCc7XG5pbXBvcnQgeyBXaW5kb3dSZWYgfSBmcm9tICcuLi8uLi93aW5kb3cvd2luZG93LXJlZic7XG5pbXBvcnQgeyBUcmFuc2xhdGVVcmxPcHRpb25zIH0gZnJvbSAnLi4vY29uZmlndXJhYmxlLXJvdXRlcy91cmwtdHJhbnNsYXRpb24vdHJhbnNsYXRlLXVybC1vcHRpb25zJztcbmltcG9ydCB7IFVybFRyYW5zbGF0aW9uU2VydmljZSB9IGZyb20gJy4uL2NvbmZpZ3VyYWJsZS1yb3V0ZXMvdXJsLXRyYW5zbGF0aW9uL3VybC10cmFuc2xhdGlvbi5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFJvdXRpbmdTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzdG9yZTogU3RvcmU8ZnJvbVN0b3JlLlJvdXRlclN0YXRlPixcbiAgICBwcml2YXRlIHdpblJlZjogV2luZG93UmVmLFxuICAgIHByaXZhdGUgdXJsVHJhbnNsYXRvcjogVXJsVHJhbnNsYXRpb25TZXJ2aWNlXG4gICkge31cblxuICAvKipcbiAgICogR2V0IHRoZSBjdXJyZW50IHJvdXRlciBzdGF0ZVxuICAgKi9cbiAgZ2V0Um91dGVyU3RhdGUoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChmcm9tU3RvcmUuZ2V0Um91dGVyU3RhdGUpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGBQYWdlQ29udGV4dGAgZnJvbSB0aGUgc3RhdGVcbiAgICovXG4gIGdldFBhZ2VDb250ZXh0KCk6IE9ic2VydmFibGU8UGFnZUNvbnRleHQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChmcm9tU3RvcmUuZ2V0UGFnZUNvbnRleHQpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBOYXZpZ2F0aW9uIHdpdGggYSBuZXcgc3RhdGUgaW50byBoaXN0b3J5XG4gICAqIEBwYXJhbSBwYXRoT3JUcmFuc2xhdGVVcmxPcHRpb25zOiBQYXRoIG9yIG9wdGlvbnMgdG8gdHJhbnNsYXRlIHVybFxuICAgKiBAcGFyYW0gcXVlcnlcbiAgICogQHBhcmFtIGV4dHJhczogUmVwcmVzZW50cyB0aGUgZXh0cmEgb3B0aW9ucyB1c2VkIGR1cmluZyBuYXZpZ2F0aW9uLlxuICAgKi9cbiAgZ28oXG4gICAgcGF0aE9yVHJhbnNsYXRlVXJsT3B0aW9uczogYW55W10gfCBUcmFuc2xhdGVVcmxPcHRpb25zLFxuICAgIHF1ZXJ5Pzogb2JqZWN0LFxuICAgIGV4dHJhcz86IE5hdmlnYXRpb25FeHRyYXNcbiAgKTogdm9pZCB7XG4gICAgbGV0IHBhdGg6IGFueVtdO1xuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkocGF0aE9yVHJhbnNsYXRlVXJsT3B0aW9ucykpIHtcbiAgICAgIHBhdGggPSBwYXRoT3JUcmFuc2xhdGVVcmxPcHRpb25zO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB0cmFuc2xhdGVVcmxPcHRpb25zID0gcGF0aE9yVHJhbnNsYXRlVXJsT3B0aW9ucztcbiAgICAgIGNvbnN0IHRyYW5zbGF0ZWRQYXRoID0gdGhpcy51cmxUcmFuc2xhdG9yLnRyYW5zbGF0ZSh0cmFuc2xhdGVVcmxPcHRpb25zKTtcbiAgICAgIHBhdGggPSBBcnJheS5pc0FycmF5KHRyYW5zbGF0ZWRQYXRoKSA/IHRyYW5zbGF0ZWRQYXRoIDogW3RyYW5zbGF0ZWRQYXRoXTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMubmF2aWdhdGUocGF0aCwgcXVlcnksIGV4dHJhcyk7XG4gIH1cblxuICAvKipcbiAgICogTmF2aWdhdGlvbiB1c2luZyBVUkxcbiAgICogQHBhcmFtIHVybFxuICAgKi9cbiAgZ29CeVVybCh1cmw6IHN0cmluZykge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IGZyb21TdG9yZS5Hb0J5VXJsKHVybCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIE5hdmlnYXRpbmcgYmFja1xuICAgKi9cbiAgYmFjaygpOiB2b2lkIHtcbiAgICBjb25zdCBpc0xhc3RQYWdlSW5BcHAgPVxuICAgICAgdGhpcy53aW5SZWYuZG9jdW1lbnQucmVmZXJyZXIuaW5kZXhPZihcbiAgICAgICAgdGhpcy53aW5SZWYubmF0aXZlV2luZG93LmxvY2F0aW9uLm9yaWdpblxuICAgICAgKSA+IC0xO1xuICAgIGlmIChpc0xhc3RQYWdlSW5BcHApIHtcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IGZyb21TdG9yZS5CYWNrKCkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmdvKFsnLyddKTtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogTmF2aWdhdGluZyBmb3J3YXJkXG4gICAqL1xuICBmb3J3YXJkKCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IGZyb21TdG9yZS5Gb3J3YXJkKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgcmVkaXJlY3QgdXJsIGZyb20gc3RvcmVcbiAgICovXG4gIGdldFJlZGlyZWN0VXJsKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoZnJvbVN0b3JlLmdldFJlZGlyZWN0VXJsKSk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSByZWRpcmVjdCB1cmwgZnJvbSBzdG9yZVxuICAgKi9cbiAgY2xlYXJSZWRpcmVjdFVybCgpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBmcm9tU3RvcmUuQ2xlYXJSZWRpcmVjdFVybCgpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQdXQgcmVkaXJjdCB1cmwgaW50byBzdG9yZVxuICAgKiBAcGFyYW0gdXJsOiByZWRpcmVjdCB1cmxcbiAgICovXG4gIHNhdmVSZWRpcmVjdFVybCh1cmw6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IGZyb21TdG9yZS5TYXZlUmVkaXJlY3RVcmwodXJsKSk7XG4gIH1cblxuICAvKipcbiAgICogTmF2aWdhdGlvbiB3aXRoIGEgbmV3IHN0YXRlIGludG8gaGlzdG9yeVxuICAgKiBAcGFyYW0gcGF0aFxuICAgKiBAcGFyYW0gcXVlcnlcbiAgICogQHBhcmFtIGV4dHJhczogUmVwcmVzZW50cyB0aGUgZXh0cmEgb3B0aW9ucyB1c2VkIGR1cmluZyBuYXZpZ2F0aW9uLlxuICAgKi9cbiAgcHJpdmF0ZSBuYXZpZ2F0ZShcbiAgICBwYXRoOiBhbnlbXSxcbiAgICBxdWVyeT86IG9iamVjdCxcbiAgICBleHRyYXM/OiBOYXZpZ2F0aW9uRXh0cmFzXG4gICk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgZnJvbVN0b3JlLkdvKHtcbiAgICAgICAgcGF0aCxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGV4dHJhcyxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxufVxuIl19
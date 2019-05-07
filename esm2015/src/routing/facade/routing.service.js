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
export class RoutingService {
    /**
     * @param {?} store
     * @param {?} winRef
     * @param {?} urlService
     */
    constructor(store, winRef, urlService) {
        this.store = store;
        this.winRef = winRef;
        this.urlService = urlService;
    }
    /**
     * Get the current router state
     * @return {?}
     */
    getRouterState() {
        return this.store.pipe(select(fromStore.getRouterState));
    }
    /**
     * Get the `PageContext` from the state
     * @return {?}
     */
    getPageContext() {
        return this.store.pipe(select(fromStore.getPageContext));
    }
    /**
     * Get the next `PageContext` from the state
     * @return {?}
     */
    getNextPageContext() {
        return this.store.pipe(select(fromStore.getNextPageContext));
    }
    /**
     * Get the `isNavigating` info from the state
     * @return {?}
     */
    isNavigating() {
        return this.store.pipe(select(fromStore.isNavigating));
    }
    /**
     * Navigation with a new state into history
     * @param {?} commands
     * @param {?=} query
     * @param {?=} extras
     * @return {?}
     */
    go(commands, query, extras) {
        /** @type {?} */
        const path = this.urlService.generateUrl(commands);
        return this.navigate(path, query, extras);
    }
    /**
     * Navigation using URL
     * @param {?} url
     * @return {?}
     */
    goByUrl(url) {
        this.store.dispatch(new fromStore.GoByUrl(url));
    }
    /**
     * Navigating back
     * @return {?}
     */
    back() {
        /** @type {?} */
        const isLastPageInApp = this.winRef.document.referrer.indexOf(this.winRef.nativeWindow.location.origin) > -1;
        if (isLastPageInApp) {
            this.store.dispatch(new fromStore.Back());
            return;
        }
        this.go(['/']);
        return;
    }
    /**
     * Navigating forward
     * @return {?}
     */
    forward() {
        this.store.dispatch(new fromStore.Forward());
    }
    /**
     * Get the redirect url from store
     * @return {?}
     */
    getRedirectUrl() {
        return this.store.pipe(select(fromStore.getRedirectUrl));
    }
    /**
     * Remove the redirect url from store
     * @return {?}
     */
    clearRedirectUrl() {
        this.store.dispatch(new fromStore.ClearRedirectUrl());
    }
    /**
     * Put redirct url into store
     * @param {?} url
     * @return {?}
     */
    saveRedirectUrl(url) {
        this.store.dispatch(new fromStore.SaveRedirectUrl(url));
    }
    /**
     * Navigation with a new state into history
     * @private
     * @param {?} path
     * @param {?=} query
     * @param {?=} extras
     * @return {?}
     */
    navigate(path, query, extras) {
        this.store.dispatch(new fromStore.Go({
            path,
            query,
            extras,
        }));
    }
}
RoutingService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
RoutingService.ctorParameters = () => [
    { type: Store },
    { type: WindowRef },
    { type: UrlService }
];
/** @nocollapse */ RoutingService.ngInjectableDef = i0.defineInjectable({ factory: function RoutingService_Factory() { return new RoutingService(i0.inject(i1.Store), i0.inject(i2.WindowRef), i0.inject(i3.UrlService)); }, token: RoutingService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGluZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3JvdXRpbmcvZmFjYWRlL3JvdXRpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUk1QyxPQUFPLEtBQUssU0FBUyxNQUFNLFVBQVUsQ0FBQztBQUV0QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFcEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9EQUFvRCxDQUFDOzs7OztBQU1oRixNQUFNLE9BQU8sY0FBYzs7Ozs7O0lBQ3pCLFlBQ1UsS0FBbUMsRUFDbkMsTUFBaUIsRUFDakIsVUFBc0I7UUFGdEIsVUFBSyxHQUFMLEtBQUssQ0FBOEI7UUFDbkMsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQUNqQixlQUFVLEdBQVYsVUFBVSxDQUFZO0lBQzdCLENBQUM7Ozs7O0lBS0osY0FBYztRQUNaLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO0lBQzNELENBQUM7Ozs7O0lBS0QsY0FBYztRQUNaLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO0lBQzNELENBQUM7Ozs7O0lBS0Qsa0JBQWtCO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7SUFDL0QsQ0FBQzs7Ozs7SUFLRCxZQUFZO1FBQ1YsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFDekQsQ0FBQzs7Ozs7Ozs7SUFRRCxFQUFFLENBQUMsUUFBcUIsRUFBRSxLQUFjLEVBQUUsTUFBeUI7O2NBQzNELElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUM7UUFFbEQsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDNUMsQ0FBQzs7Ozs7O0lBTUQsT0FBTyxDQUFDLEdBQVc7UUFDakIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxTQUFTLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7Ozs7SUFLRCxJQUFJOztjQUNJLGVBQWUsR0FDbkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FDbkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FDekMsR0FBRyxDQUFDLENBQUM7UUFDUixJQUFJLGVBQWUsRUFBRTtZQUNuQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQzFDLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2YsT0FBTztJQUNULENBQUM7Ozs7O0lBS0QsT0FBTztRQUNMLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7Ozs7SUFLRCxjQUFjO1FBQ1osT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7Ozs7SUFLRCxnQkFBZ0I7UUFDZCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7Ozs7O0lBTUQsZUFBZSxDQUFDLEdBQVc7UUFDekIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxTQUFTLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDMUQsQ0FBQzs7Ozs7Ozs7O0lBUU8sUUFBUSxDQUNkLElBQVcsRUFDWCxLQUFjLEVBQ2QsTUFBeUI7UUFFekIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ2pCLElBQUksU0FBUyxDQUFDLEVBQUUsQ0FBQztZQUNmLElBQUk7WUFDSixLQUFLO1lBQ0wsTUFBTTtTQUNQLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7O1lBekhGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQWJnQixLQUFLO1lBTWIsU0FBUztZQUVULFVBQVU7Ozs7Ozs7O0lBUWYsK0JBQTJDOzs7OztJQUMzQyxnQ0FBeUI7Ozs7O0lBQ3pCLG9DQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdmlnYXRpb25FeHRyYXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCAqIGFzIGZyb21TdG9yZSBmcm9tICcuLi9zdG9yZSc7XG5pbXBvcnQgeyBQYWdlQ29udGV4dCB9IGZyb20gJy4uL21vZGVscy9wYWdlLWNvbnRleHQubW9kZWwnO1xuaW1wb3J0IHsgV2luZG93UmVmIH0gZnJvbSAnLi4vLi4vd2luZG93L3dpbmRvdy1yZWYnO1xuaW1wb3J0IHsgVXJsQ29tbWFuZHMgfSBmcm9tICcuLi9jb25maWd1cmFibGUtcm91dGVzL3VybC10cmFuc2xhdGlvbi91cmwtY29tbWFuZCc7XG5pbXBvcnQgeyBVcmxTZXJ2aWNlIH0gZnJvbSAnLi4vY29uZmlndXJhYmxlLXJvdXRlcy91cmwtdHJhbnNsYXRpb24vdXJsLnNlcnZpY2UnO1xuaW1wb3J0IHsgUm91dGVyU3RhdGUgfSBmcm9tICcuLi9zdG9yZS9yZWR1Y2Vycy9yb3V0ZXIucmVkdWNlcic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBSb3V0aW5nU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgc3RvcmU6IFN0b3JlPGZyb21TdG9yZS5Sb3V0ZXJTdGF0ZT4sXG4gICAgcHJpdmF0ZSB3aW5SZWY6IFdpbmRvd1JlZixcbiAgICBwcml2YXRlIHVybFNlcnZpY2U6IFVybFNlcnZpY2VcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGN1cnJlbnQgcm91dGVyIHN0YXRlXG4gICAqL1xuICBnZXRSb3V0ZXJTdGF0ZSgpOiBPYnNlcnZhYmxlPFJvdXRlclN0YXRlPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoZnJvbVN0b3JlLmdldFJvdXRlclN0YXRlKSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBgUGFnZUNvbnRleHRgIGZyb20gdGhlIHN0YXRlXG4gICAqL1xuICBnZXRQYWdlQ29udGV4dCgpOiBPYnNlcnZhYmxlPFBhZ2VDb250ZXh0PiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoZnJvbVN0b3JlLmdldFBhZ2VDb250ZXh0KSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBuZXh0IGBQYWdlQ29udGV4dGAgZnJvbSB0aGUgc3RhdGVcbiAgICovXG4gIGdldE5leHRQYWdlQ29udGV4dCgpOiBPYnNlcnZhYmxlPFBhZ2VDb250ZXh0PiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoZnJvbVN0b3JlLmdldE5leHRQYWdlQ29udGV4dCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgYGlzTmF2aWdhdGluZ2AgaW5mbyBmcm9tIHRoZSBzdGF0ZVxuICAgKi9cbiAgaXNOYXZpZ2F0aW5nKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KGZyb21TdG9yZS5pc05hdmlnYXRpbmcpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBOYXZpZ2F0aW9uIHdpdGggYSBuZXcgc3RhdGUgaW50byBoaXN0b3J5XG4gICAqIEBwYXJhbSBjb21tYW5kczogdXJsIGNvbW1hbmRzXG4gICAqIEBwYXJhbSBxdWVyeVxuICAgKiBAcGFyYW0gZXh0cmFzOiBSZXByZXNlbnRzIHRoZSBleHRyYSBvcHRpb25zIHVzZWQgZHVyaW5nIG5hdmlnYXRpb24uXG4gICAqL1xuICBnbyhjb21tYW5kczogVXJsQ29tbWFuZHMsIHF1ZXJ5Pzogb2JqZWN0LCBleHRyYXM/OiBOYXZpZ2F0aW9uRXh0cmFzKTogdm9pZCB7XG4gICAgY29uc3QgcGF0aCA9IHRoaXMudXJsU2VydmljZS5nZW5lcmF0ZVVybChjb21tYW5kcyk7XG5cbiAgICByZXR1cm4gdGhpcy5uYXZpZ2F0ZShwYXRoLCBxdWVyeSwgZXh0cmFzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBOYXZpZ2F0aW9uIHVzaW5nIFVSTFxuICAgKiBAcGFyYW0gdXJsXG4gICAqL1xuICBnb0J5VXJsKHVybDogc3RyaW5nKSB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgZnJvbVN0b3JlLkdvQnlVcmwodXJsKSk7XG4gIH1cblxuICAvKipcbiAgICogTmF2aWdhdGluZyBiYWNrXG4gICAqL1xuICBiYWNrKCk6IHZvaWQge1xuICAgIGNvbnN0IGlzTGFzdFBhZ2VJbkFwcCA9XG4gICAgICB0aGlzLndpblJlZi5kb2N1bWVudC5yZWZlcnJlci5pbmRleE9mKFxuICAgICAgICB0aGlzLndpblJlZi5uYXRpdmVXaW5kb3cubG9jYXRpb24ub3JpZ2luXG4gICAgICApID4gLTE7XG4gICAgaWYgKGlzTGFzdFBhZ2VJbkFwcCkge1xuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgZnJvbVN0b3JlLkJhY2soKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZ28oWycvJ10pO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBOYXZpZ2F0aW5nIGZvcndhcmRcbiAgICovXG4gIGZvcndhcmQoKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgZnJvbVN0b3JlLkZvcndhcmQoKSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSByZWRpcmVjdCB1cmwgZnJvbSBzdG9yZVxuICAgKi9cbiAgZ2V0UmVkaXJlY3RVcmwoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChmcm9tU3RvcmUuZ2V0UmVkaXJlY3RVcmwpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgdGhlIHJlZGlyZWN0IHVybCBmcm9tIHN0b3JlXG4gICAqL1xuICBjbGVhclJlZGlyZWN0VXJsKCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IGZyb21TdG9yZS5DbGVhclJlZGlyZWN0VXJsKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFB1dCByZWRpcmN0IHVybCBpbnRvIHN0b3JlXG4gICAqIEBwYXJhbSB1cmw6IHJlZGlyZWN0IHVybFxuICAgKi9cbiAgc2F2ZVJlZGlyZWN0VXJsKHVybDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgZnJvbVN0b3JlLlNhdmVSZWRpcmVjdFVybCh1cmwpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBOYXZpZ2F0aW9uIHdpdGggYSBuZXcgc3RhdGUgaW50byBoaXN0b3J5XG4gICAqIEBwYXJhbSBwYXRoXG4gICAqIEBwYXJhbSBxdWVyeVxuICAgKiBAcGFyYW0gZXh0cmFzOiBSZXByZXNlbnRzIHRoZSBleHRyYSBvcHRpb25zIHVzZWQgZHVyaW5nIG5hdmlnYXRpb24uXG4gICAqL1xuICBwcml2YXRlIG5hdmlnYXRlKFxuICAgIHBhdGg6IGFueVtdLFxuICAgIHF1ZXJ5Pzogb2JqZWN0LFxuICAgIGV4dHJhcz86IE5hdmlnYXRpb25FeHRyYXNcbiAgKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBmcm9tU3RvcmUuR28oe1xuICAgICAgICBwYXRoLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgZXh0cmFzLFxuICAgICAgfSlcbiAgICApO1xuICB9XG59XG4iXX0=
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromStore from '../store';
import { WindowRef } from '../../window/window-ref';
import { SemanticPathService } from '../configurable-routes/url-translation/semantic-path.service';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
import * as i2 from "../../window/window-ref";
import * as i3 from "../configurable-routes/url-translation/semantic-path.service";
var RoutingService = /** @class */ (function () {
    function RoutingService(store, winRef, semanticPathService) {
        this.store = store;
        this.winRef = winRef;
        this.semanticPathService = semanticPathService;
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
        var path = this.semanticPathService.transform(commands);
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
        var isLastPageInApp = this.winRef.document.referrer.includes(this.winRef.nativeWindow.location.origin);
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
     * Navigation with a new state into history
     * @param path
     * @param query
     * @param extras: Represents the extra options used during navigation.
     */
    /**
     * Navigation with a new state into history
     * @protected
     * @param {?} path
     * @param {?=} query
     * @param {?=} extras
     * @return {?}
     */
    RoutingService.prototype.navigate = /**
     * Navigation with a new state into history
     * @protected
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
        { type: SemanticPathService }
    ]; };
    /** @nocollapse */ RoutingService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function RoutingService_Factory() { return new RoutingService(i0.ɵɵinject(i1.Store), i0.ɵɵinject(i2.WindowRef), i0.ɵɵinject(i3.SemanticPathService)); }, token: RoutingService, providedIn: "root" });
    return RoutingService;
}());
export { RoutingService };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    RoutingService.prototype.store;
    /**
     * @type {?}
     * @protected
     */
    RoutingService.prototype.winRef;
    /**
     * @type {?}
     * @protected
     */
    RoutingService.prototype.semanticPathService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGluZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3JvdXRpbmcvZmFjYWRlL3JvdXRpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUk1QyxPQUFPLEtBQUssU0FBUyxNQUFNLFVBQVUsQ0FBQztBQUV0QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFcEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sOERBQThELENBQUM7Ozs7O0FBR25HO0lBSUUsd0JBQ1ksS0FBbUMsRUFDbkMsTUFBaUIsRUFDakIsbUJBQXdDO1FBRnhDLFVBQUssR0FBTCxLQUFLLENBQThCO1FBQ25DLFdBQU0sR0FBTixNQUFNLENBQVc7UUFDakIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtJQUNqRCxDQUFDO0lBRUo7O09BRUc7Ozs7O0lBQ0gsdUNBQWM7Ozs7SUFBZDtRQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSCx1Q0FBYzs7OztJQUFkO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVEOztPQUVHOzs7OztJQUNILDJDQUFrQjs7OztJQUFsQjtRQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVEOztPQUVHOzs7OztJQUNILHFDQUFZOzs7O0lBQVo7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRUQ7Ozs7O09BS0c7Ozs7Ozs7O0lBQ0gsMkJBQUU7Ozs7Ozs7SUFBRixVQUFHLFFBQXFCLEVBQUUsS0FBYyxFQUFFLE1BQXlCOztZQUMzRCxJQUFJLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUM7UUFFekQsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7O0lBQ0gsZ0NBQU87Ozs7O0lBQVAsVUFBUSxHQUFXO1FBQ2pCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksU0FBUyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSCw2QkFBSTs7OztJQUFKOztZQUNRLGVBQWUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUM1RCxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUN6QztRQUNELElBQUksZUFBZSxFQUFFO1lBQ25CLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7WUFDMUMsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDZixPQUFPO0lBQ1QsQ0FBQztJQUVEOztPQUVHOzs7OztJQUNILGdDQUFPOzs7O0lBQVA7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRDs7Ozs7T0FLRzs7Ozs7Ozs7O0lBQ08saUNBQVE7Ozs7Ozs7O0lBQWxCLFVBQ0UsSUFBVyxFQUNYLEtBQWMsRUFDZCxNQUF5QjtRQUV6QixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDakIsSUFBSSxTQUFTLENBQUMsRUFBRSxDQUFDO1lBQ2YsSUFBSSxNQUFBO1lBQ0osS0FBSyxPQUFBO1lBQ0wsTUFBTSxRQUFBO1NBQ1AsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDOztnQkFsR0YsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFiZ0IsS0FBSztnQkFNYixTQUFTO2dCQUVULG1CQUFtQjs7O3lCQVg1QjtDQWlIQyxBQW5HRCxJQW1HQztTQWhHWSxjQUFjOzs7Ozs7SUFFdkIsK0JBQTZDOzs7OztJQUM3QyxnQ0FBMkI7Ozs7O0lBQzNCLDZDQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdmlnYXRpb25FeHRyYXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCAqIGFzIGZyb21TdG9yZSBmcm9tICcuLi9zdG9yZSc7XG5pbXBvcnQgeyBQYWdlQ29udGV4dCB9IGZyb20gJy4uL21vZGVscy9wYWdlLWNvbnRleHQubW9kZWwnO1xuaW1wb3J0IHsgV2luZG93UmVmIH0gZnJvbSAnLi4vLi4vd2luZG93L3dpbmRvdy1yZWYnO1xuaW1wb3J0IHsgVXJsQ29tbWFuZHMgfSBmcm9tICcuLi9jb25maWd1cmFibGUtcm91dGVzL3VybC10cmFuc2xhdGlvbi91cmwtY29tbWFuZCc7XG5pbXBvcnQgeyBTZW1hbnRpY1BhdGhTZXJ2aWNlIH0gZnJvbSAnLi4vY29uZmlndXJhYmxlLXJvdXRlcy91cmwtdHJhbnNsYXRpb24vc2VtYW50aWMtcGF0aC5zZXJ2aWNlJztcbmltcG9ydCB7IFJvdXRlclN0YXRlIH0gZnJvbSAnLi4vc3RvcmUvcmVkdWNlcnMvcm91dGVyLnJlZHVjZXInO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgUm91dGluZ1NlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPGZyb21TdG9yZS5Sb3V0ZXJTdGF0ZT4sXG4gICAgcHJvdGVjdGVkIHdpblJlZjogV2luZG93UmVmLFxuICAgIHByb3RlY3RlZCBzZW1hbnRpY1BhdGhTZXJ2aWNlOiBTZW1hbnRpY1BhdGhTZXJ2aWNlXG4gICkge31cblxuICAvKipcbiAgICogR2V0IHRoZSBjdXJyZW50IHJvdXRlciBzdGF0ZVxuICAgKi9cbiAgZ2V0Um91dGVyU3RhdGUoKTogT2JzZXJ2YWJsZTxSb3V0ZXJTdGF0ZT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KGZyb21TdG9yZS5nZXRSb3V0ZXJTdGF0ZSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgYFBhZ2VDb250ZXh0YCBmcm9tIHRoZSBzdGF0ZVxuICAgKi9cbiAgZ2V0UGFnZUNvbnRleHQoKTogT2JzZXJ2YWJsZTxQYWdlQ29udGV4dD4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KGZyb21TdG9yZS5nZXRQYWdlQ29udGV4dCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbmV4dCBgUGFnZUNvbnRleHRgIGZyb20gdGhlIHN0YXRlXG4gICAqL1xuICBnZXROZXh0UGFnZUNvbnRleHQoKTogT2JzZXJ2YWJsZTxQYWdlQ29udGV4dD4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KGZyb21TdG9yZS5nZXROZXh0UGFnZUNvbnRleHQpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGBpc05hdmlnYXRpbmdgIGluZm8gZnJvbSB0aGUgc3RhdGVcbiAgICovXG4gIGlzTmF2aWdhdGluZygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChmcm9tU3RvcmUuaXNOYXZpZ2F0aW5nKSk7XG4gIH1cblxuICAvKipcbiAgICogTmF2aWdhdGlvbiB3aXRoIGEgbmV3IHN0YXRlIGludG8gaGlzdG9yeVxuICAgKiBAcGFyYW0gY29tbWFuZHM6IHVybCBjb21tYW5kc1xuICAgKiBAcGFyYW0gcXVlcnlcbiAgICogQHBhcmFtIGV4dHJhczogUmVwcmVzZW50cyB0aGUgZXh0cmEgb3B0aW9ucyB1c2VkIGR1cmluZyBuYXZpZ2F0aW9uLlxuICAgKi9cbiAgZ28oY29tbWFuZHM6IFVybENvbW1hbmRzLCBxdWVyeT86IG9iamVjdCwgZXh0cmFzPzogTmF2aWdhdGlvbkV4dHJhcyk6IHZvaWQge1xuICAgIGNvbnN0IHBhdGggPSB0aGlzLnNlbWFudGljUGF0aFNlcnZpY2UudHJhbnNmb3JtKGNvbW1hbmRzKTtcblxuICAgIHJldHVybiB0aGlzLm5hdmlnYXRlKHBhdGgsIHF1ZXJ5LCBleHRyYXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIE5hdmlnYXRpb24gdXNpbmcgVVJMXG4gICAqIEBwYXJhbSB1cmxcbiAgICovXG4gIGdvQnlVcmwodXJsOiBzdHJpbmcpIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBmcm9tU3RvcmUuR29CeVVybCh1cmwpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBOYXZpZ2F0aW5nIGJhY2tcbiAgICovXG4gIGJhY2soKTogdm9pZCB7XG4gICAgY29uc3QgaXNMYXN0UGFnZUluQXBwID0gdGhpcy53aW5SZWYuZG9jdW1lbnQucmVmZXJyZXIuaW5jbHVkZXMoXG4gICAgICB0aGlzLndpblJlZi5uYXRpdmVXaW5kb3cubG9jYXRpb24ub3JpZ2luXG4gICAgKTtcbiAgICBpZiAoaXNMYXN0UGFnZUluQXBwKSB7XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBmcm9tU3RvcmUuQmFjaygpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5nbyhbJy8nXSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIE5hdmlnYXRpbmcgZm9yd2FyZFxuICAgKi9cbiAgZm9yd2FyZCgpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBmcm9tU3RvcmUuRm9yd2FyZCgpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBOYXZpZ2F0aW9uIHdpdGggYSBuZXcgc3RhdGUgaW50byBoaXN0b3J5XG4gICAqIEBwYXJhbSBwYXRoXG4gICAqIEBwYXJhbSBxdWVyeVxuICAgKiBAcGFyYW0gZXh0cmFzOiBSZXByZXNlbnRzIHRoZSBleHRyYSBvcHRpb25zIHVzZWQgZHVyaW5nIG5hdmlnYXRpb24uXG4gICAqL1xuICBwcm90ZWN0ZWQgbmF2aWdhdGUoXG4gICAgcGF0aDogYW55W10sXG4gICAgcXVlcnk/OiBvYmplY3QsXG4gICAgZXh0cmFzPzogTmF2aWdhdGlvbkV4dHJhc1xuICApOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IGZyb21TdG9yZS5Hbyh7XG4gICAgICAgIHBhdGgsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBleHRyYXMsXG4gICAgICB9KVxuICAgICk7XG4gIH1cbn1cbiJdfQ==
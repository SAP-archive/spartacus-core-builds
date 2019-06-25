/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { WindowRef } from '../../window/window-ref';
import { SemanticPathService } from '../configurable-routes/url-translation/semantic-path.service';
import * as fromStore from '../store';
import { RoutingSelector } from '../store/selectors/index';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
import * as i2 from "../../window/window-ref";
import * as i3 from "../configurable-routes/url-translation/semantic-path.service";
export class RoutingService {
    /**
     * @param {?} store
     * @param {?} winRef
     * @param {?} semanticPathService
     */
    constructor(store, winRef, semanticPathService) {
        this.store = store;
        this.winRef = winRef;
        this.semanticPathService = semanticPathService;
    }
    /**
     * Get the current router state
     * @return {?}
     */
    getRouterState() {
        return this.store.pipe(select(RoutingSelector.getRouterState));
    }
    /**
     * Get the `PageContext` from the state
     * @return {?}
     */
    getPageContext() {
        return this.store.pipe(select(RoutingSelector.getPageContext));
    }
    /**
     * Get the next `PageContext` from the state
     * @return {?}
     */
    getNextPageContext() {
        return this.store.pipe(select(RoutingSelector.getNextPageContext));
    }
    /**
     * Get the `isNavigating` info from the state
     * @return {?}
     */
    isNavigating() {
        return this.store.pipe(select(RoutingSelector.isNavigating));
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
        const path = this.semanticPathService.transform(commands);
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
        const isLastPageInApp = this.winRef.document.referrer.includes(this.winRef.nativeWindow.location.origin);
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
     * Navigation with a new state into history
     * @protected
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
    { type: SemanticPathService }
];
/** @nocollapse */ RoutingService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function RoutingService_Factory() { return new RoutingService(i0.ɵɵinject(i1.Store), i0.ɵɵinject(i2.WindowRef), i0.ɵɵinject(i3.SemanticPathService)); }, token: RoutingService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGluZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3JvdXRpbmcvZmFjYWRlL3JvdXRpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUU1QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDcEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sOERBQThELENBQUM7QUFHbkcsT0FBTyxLQUFLLFNBQVMsTUFBTSxVQUFVLENBQUM7QUFFdEMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7OztBQUszRCxNQUFNLE9BQU8sY0FBYzs7Ozs7O0lBQ3pCLFlBQ1ksS0FBbUMsRUFDbkMsTUFBaUIsRUFDakIsbUJBQXdDO1FBRnhDLFVBQUssR0FBTCxLQUFLLENBQThCO1FBQ25DLFdBQU0sR0FBTixNQUFNLENBQVc7UUFDakIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtJQUNqRCxDQUFDOzs7OztJQUtKLGNBQWM7UUFDWixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztJQUNqRSxDQUFDOzs7OztJQUtELGNBQWM7UUFDWixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztJQUNqRSxDQUFDOzs7OztJQUtELGtCQUFrQjtRQUNoQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7Ozs7O0lBS0QsWUFBWTtRQUNWLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQy9ELENBQUM7Ozs7Ozs7O0lBUUQsRUFBRSxDQUFDLFFBQXFCLEVBQUUsS0FBYyxFQUFFLE1BQXlCOztjQUMzRCxJQUFJLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUM7UUFFekQsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDNUMsQ0FBQzs7Ozs7O0lBTUQsT0FBTyxDQUFDLEdBQVc7UUFDakIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxTQUFTLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7Ozs7SUFLRCxJQUFJOztjQUNJLGVBQWUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUM1RCxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUN6QztRQUNELElBQUksZUFBZSxFQUFFO1lBQ25CLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7WUFDMUMsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDZixPQUFPO0lBQ1QsQ0FBQzs7Ozs7SUFLRCxPQUFPO1FBQ0wsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUMvQyxDQUFDOzs7Ozs7Ozs7SUFRUyxRQUFRLENBQ2hCLElBQVcsRUFDWCxLQUFjLEVBQ2QsTUFBeUI7UUFFekIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ2pCLElBQUksU0FBUyxDQUFDLEVBQUUsQ0FBQztZQUNmLElBQUk7WUFDSixLQUFLO1lBQ0wsTUFBTTtTQUNQLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7O1lBbEdGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQVpnQixLQUFLO1lBRWIsU0FBUztZQUNULG1CQUFtQjs7Ozs7Ozs7SUFZeEIsK0JBQTZDOzs7OztJQUM3QyxnQ0FBMkI7Ozs7O0lBQzNCLDZDQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdmlnYXRpb25FeHRyYXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgc2VsZWN0LCBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFdpbmRvd1JlZiB9IGZyb20gJy4uLy4uL3dpbmRvdy93aW5kb3ctcmVmJztcbmltcG9ydCB7IFNlbWFudGljUGF0aFNlcnZpY2UgfSBmcm9tICcuLi9jb25maWd1cmFibGUtcm91dGVzL3VybC10cmFuc2xhdGlvbi9zZW1hbnRpYy1wYXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgVXJsQ29tbWFuZHMgfSBmcm9tICcuLi9jb25maWd1cmFibGUtcm91dGVzL3VybC10cmFuc2xhdGlvbi91cmwtY29tbWFuZCc7XG5pbXBvcnQgeyBQYWdlQ29udGV4dCB9IGZyb20gJy4uL21vZGVscy9wYWdlLWNvbnRleHQubW9kZWwnO1xuaW1wb3J0ICogYXMgZnJvbVN0b3JlIGZyb20gJy4uL3N0b3JlJztcbmltcG9ydCB7IFJvdXRlclN0YXRlIH0gZnJvbSAnLi4vc3RvcmUvcm91dGluZy1zdGF0ZSc7XG5pbXBvcnQgeyBSb3V0aW5nU2VsZWN0b3IgfSBmcm9tICcuLi9zdG9yZS9zZWxlY3RvcnMvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgUm91dGluZ1NlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPGZyb21TdG9yZS5Sb3V0ZXJTdGF0ZT4sXG4gICAgcHJvdGVjdGVkIHdpblJlZjogV2luZG93UmVmLFxuICAgIHByb3RlY3RlZCBzZW1hbnRpY1BhdGhTZXJ2aWNlOiBTZW1hbnRpY1BhdGhTZXJ2aWNlXG4gICkge31cblxuICAvKipcbiAgICogR2V0IHRoZSBjdXJyZW50IHJvdXRlciBzdGF0ZVxuICAgKi9cbiAgZ2V0Um91dGVyU3RhdGUoKTogT2JzZXJ2YWJsZTxSb3V0ZXJTdGF0ZT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KFJvdXRpbmdTZWxlY3Rvci5nZXRSb3V0ZXJTdGF0ZSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgYFBhZ2VDb250ZXh0YCBmcm9tIHRoZSBzdGF0ZVxuICAgKi9cbiAgZ2V0UGFnZUNvbnRleHQoKTogT2JzZXJ2YWJsZTxQYWdlQ29udGV4dD4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KFJvdXRpbmdTZWxlY3Rvci5nZXRQYWdlQ29udGV4dCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbmV4dCBgUGFnZUNvbnRleHRgIGZyb20gdGhlIHN0YXRlXG4gICAqL1xuICBnZXROZXh0UGFnZUNvbnRleHQoKTogT2JzZXJ2YWJsZTxQYWdlQ29udGV4dD4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KFJvdXRpbmdTZWxlY3Rvci5nZXROZXh0UGFnZUNvbnRleHQpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGBpc05hdmlnYXRpbmdgIGluZm8gZnJvbSB0aGUgc3RhdGVcbiAgICovXG4gIGlzTmF2aWdhdGluZygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChSb3V0aW5nU2VsZWN0b3IuaXNOYXZpZ2F0aW5nKSk7XG4gIH1cblxuICAvKipcbiAgICogTmF2aWdhdGlvbiB3aXRoIGEgbmV3IHN0YXRlIGludG8gaGlzdG9yeVxuICAgKiBAcGFyYW0gY29tbWFuZHM6IHVybCBjb21tYW5kc1xuICAgKiBAcGFyYW0gcXVlcnlcbiAgICogQHBhcmFtIGV4dHJhczogUmVwcmVzZW50cyB0aGUgZXh0cmEgb3B0aW9ucyB1c2VkIGR1cmluZyBuYXZpZ2F0aW9uLlxuICAgKi9cbiAgZ28oY29tbWFuZHM6IFVybENvbW1hbmRzLCBxdWVyeT86IG9iamVjdCwgZXh0cmFzPzogTmF2aWdhdGlvbkV4dHJhcyk6IHZvaWQge1xuICAgIGNvbnN0IHBhdGggPSB0aGlzLnNlbWFudGljUGF0aFNlcnZpY2UudHJhbnNmb3JtKGNvbW1hbmRzKTtcblxuICAgIHJldHVybiB0aGlzLm5hdmlnYXRlKHBhdGgsIHF1ZXJ5LCBleHRyYXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIE5hdmlnYXRpb24gdXNpbmcgVVJMXG4gICAqIEBwYXJhbSB1cmxcbiAgICovXG4gIGdvQnlVcmwodXJsOiBzdHJpbmcpIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBmcm9tU3RvcmUuR29CeVVybCh1cmwpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBOYXZpZ2F0aW5nIGJhY2tcbiAgICovXG4gIGJhY2soKTogdm9pZCB7XG4gICAgY29uc3QgaXNMYXN0UGFnZUluQXBwID0gdGhpcy53aW5SZWYuZG9jdW1lbnQucmVmZXJyZXIuaW5jbHVkZXMoXG4gICAgICB0aGlzLndpblJlZi5uYXRpdmVXaW5kb3cubG9jYXRpb24ub3JpZ2luXG4gICAgKTtcbiAgICBpZiAoaXNMYXN0UGFnZUluQXBwKSB7XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBmcm9tU3RvcmUuQmFjaygpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5nbyhbJy8nXSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIE5hdmlnYXRpbmcgZm9yd2FyZFxuICAgKi9cbiAgZm9yd2FyZCgpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBmcm9tU3RvcmUuRm9yd2FyZCgpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBOYXZpZ2F0aW9uIHdpdGggYSBuZXcgc3RhdGUgaW50byBoaXN0b3J5XG4gICAqIEBwYXJhbSBwYXRoXG4gICAqIEBwYXJhbSBxdWVyeVxuICAgKiBAcGFyYW0gZXh0cmFzOiBSZXByZXNlbnRzIHRoZSBleHRyYSBvcHRpb25zIHVzZWQgZHVyaW5nIG5hdmlnYXRpb24uXG4gICAqL1xuICBwcm90ZWN0ZWQgbmF2aWdhdGUoXG4gICAgcGF0aDogYW55W10sXG4gICAgcXVlcnk/OiBvYmplY3QsXG4gICAgZXh0cmFzPzogTmF2aWdhdGlvbkV4dHJhc1xuICApOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IGZyb21TdG9yZS5Hbyh7XG4gICAgICAgIHBhdGgsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBleHRyYXMsXG4gICAgICB9KVxuICAgICk7XG4gIH1cbn1cbiJdfQ==
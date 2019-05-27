/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
/** @nocollapse */ RoutingService.ngInjectableDef = i0.defineInjectable({ factory: function RoutingService_Factory() { return new RoutingService(i0.inject(i1.Store), i0.inject(i2.WindowRef), i0.inject(i3.SemanticPathService)); }, token: RoutingService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGluZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3JvdXRpbmcvZmFjYWRlL3JvdXRpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUk1QyxPQUFPLEtBQUssU0FBUyxNQUFNLFVBQVUsQ0FBQztBQUV0QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFcEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sOERBQThELENBQUM7Ozs7O0FBTW5HLE1BQU0sT0FBTyxjQUFjOzs7Ozs7SUFDekIsWUFDWSxLQUFtQyxFQUNuQyxNQUFpQixFQUNqQixtQkFBd0M7UUFGeEMsVUFBSyxHQUFMLEtBQUssQ0FBOEI7UUFDbkMsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQUNqQix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO0lBQ2pELENBQUM7Ozs7O0lBS0osY0FBYztRQUNaLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO0lBQzNELENBQUM7Ozs7O0lBS0QsY0FBYztRQUNaLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO0lBQzNELENBQUM7Ozs7O0lBS0Qsa0JBQWtCO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7SUFDL0QsQ0FBQzs7Ozs7SUFLRCxZQUFZO1FBQ1YsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFDekQsQ0FBQzs7Ozs7Ozs7SUFRRCxFQUFFLENBQUMsUUFBcUIsRUFBRSxLQUFjLEVBQUUsTUFBeUI7O2NBQzNELElBQUksR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQztRQUV6RCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7Ozs7SUFNRCxPQUFPLENBQUMsR0FBVztRQUNqQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNsRCxDQUFDOzs7OztJQUtELElBQUk7O2NBQ0ksZUFBZSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQzVELElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQ3pDO1FBQ0QsSUFBSSxlQUFlLEVBQUU7WUFDbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztZQUMxQyxPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNmLE9BQU87SUFDVCxDQUFDOzs7OztJQUtELE9BQU87UUFDTCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQy9DLENBQUM7Ozs7O0lBS0QsY0FBYztRQUNaLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO0lBQzNELENBQUM7Ozs7O0lBS0QsZ0JBQWdCO1FBQ2QsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxTQUFTLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDO0lBQ3hELENBQUM7Ozs7OztJQU1ELGVBQWUsQ0FBQyxHQUFXO1FBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksU0FBUyxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzFELENBQUM7Ozs7Ozs7OztJQVFTLFFBQVEsQ0FDaEIsSUFBVyxFQUNYLEtBQWMsRUFDZCxNQUF5QjtRQUV6QixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDakIsSUFBSSxTQUFTLENBQUMsRUFBRSxDQUFDO1lBQ2YsSUFBSTtZQUNKLEtBQUs7WUFDTCxNQUFNO1NBQ1AsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7WUF4SEYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBYmdCLEtBQUs7WUFNYixTQUFTO1lBRVQsbUJBQW1COzs7Ozs7OztJQVF4QiwrQkFBNkM7Ozs7O0lBQzdDLGdDQUEyQjs7Ozs7SUFDM0IsNkNBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF2aWdhdGlvbkV4dHJhcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0ICogYXMgZnJvbVN0b3JlIGZyb20gJy4uL3N0b3JlJztcbmltcG9ydCB7IFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbW9kZWxzL3BhZ2UtY29udGV4dC5tb2RlbCc7XG5pbXBvcnQgeyBXaW5kb3dSZWYgfSBmcm9tICcuLi8uLi93aW5kb3cvd2luZG93LXJlZic7XG5pbXBvcnQgeyBVcmxDb21tYW5kcyB9IGZyb20gJy4uL2NvbmZpZ3VyYWJsZS1yb3V0ZXMvdXJsLXRyYW5zbGF0aW9uL3VybC1jb21tYW5kJztcbmltcG9ydCB7IFNlbWFudGljUGF0aFNlcnZpY2UgfSBmcm9tICcuLi9jb25maWd1cmFibGUtcm91dGVzL3VybC10cmFuc2xhdGlvbi9zZW1hbnRpYy1wYXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgUm91dGVyU3RhdGUgfSBmcm9tICcuLi9zdG9yZS9yZWR1Y2Vycy9yb3V0ZXIucmVkdWNlcic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBSb3V0aW5nU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBzdG9yZTogU3RvcmU8ZnJvbVN0b3JlLlJvdXRlclN0YXRlPixcbiAgICBwcm90ZWN0ZWQgd2luUmVmOiBXaW5kb3dSZWYsXG4gICAgcHJvdGVjdGVkIHNlbWFudGljUGF0aFNlcnZpY2U6IFNlbWFudGljUGF0aFNlcnZpY2VcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGN1cnJlbnQgcm91dGVyIHN0YXRlXG4gICAqL1xuICBnZXRSb3V0ZXJTdGF0ZSgpOiBPYnNlcnZhYmxlPFJvdXRlclN0YXRlPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoZnJvbVN0b3JlLmdldFJvdXRlclN0YXRlKSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBgUGFnZUNvbnRleHRgIGZyb20gdGhlIHN0YXRlXG4gICAqL1xuICBnZXRQYWdlQ29udGV4dCgpOiBPYnNlcnZhYmxlPFBhZ2VDb250ZXh0PiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoZnJvbVN0b3JlLmdldFBhZ2VDb250ZXh0KSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBuZXh0IGBQYWdlQ29udGV4dGAgZnJvbSB0aGUgc3RhdGVcbiAgICovXG4gIGdldE5leHRQYWdlQ29udGV4dCgpOiBPYnNlcnZhYmxlPFBhZ2VDb250ZXh0PiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoZnJvbVN0b3JlLmdldE5leHRQYWdlQ29udGV4dCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgYGlzTmF2aWdhdGluZ2AgaW5mbyBmcm9tIHRoZSBzdGF0ZVxuICAgKi9cbiAgaXNOYXZpZ2F0aW5nKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KGZyb21TdG9yZS5pc05hdmlnYXRpbmcpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBOYXZpZ2F0aW9uIHdpdGggYSBuZXcgc3RhdGUgaW50byBoaXN0b3J5XG4gICAqIEBwYXJhbSBjb21tYW5kczogdXJsIGNvbW1hbmRzXG4gICAqIEBwYXJhbSBxdWVyeVxuICAgKiBAcGFyYW0gZXh0cmFzOiBSZXByZXNlbnRzIHRoZSBleHRyYSBvcHRpb25zIHVzZWQgZHVyaW5nIG5hdmlnYXRpb24uXG4gICAqL1xuICBnbyhjb21tYW5kczogVXJsQ29tbWFuZHMsIHF1ZXJ5Pzogb2JqZWN0LCBleHRyYXM/OiBOYXZpZ2F0aW9uRXh0cmFzKTogdm9pZCB7XG4gICAgY29uc3QgcGF0aCA9IHRoaXMuc2VtYW50aWNQYXRoU2VydmljZS50cmFuc2Zvcm0oY29tbWFuZHMpO1xuXG4gICAgcmV0dXJuIHRoaXMubmF2aWdhdGUocGF0aCwgcXVlcnksIGV4dHJhcyk7XG4gIH1cblxuICAvKipcbiAgICogTmF2aWdhdGlvbiB1c2luZyBVUkxcbiAgICogQHBhcmFtIHVybFxuICAgKi9cbiAgZ29CeVVybCh1cmw6IHN0cmluZykge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IGZyb21TdG9yZS5Hb0J5VXJsKHVybCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIE5hdmlnYXRpbmcgYmFja1xuICAgKi9cbiAgYmFjaygpOiB2b2lkIHtcbiAgICBjb25zdCBpc0xhc3RQYWdlSW5BcHAgPSB0aGlzLndpblJlZi5kb2N1bWVudC5yZWZlcnJlci5pbmNsdWRlcyhcbiAgICAgIHRoaXMud2luUmVmLm5hdGl2ZVdpbmRvdy5sb2NhdGlvbi5vcmlnaW5cbiAgICApO1xuICAgIGlmIChpc0xhc3RQYWdlSW5BcHApIHtcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IGZyb21TdG9yZS5CYWNrKCkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmdvKFsnLyddKTtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogTmF2aWdhdGluZyBmb3J3YXJkXG4gICAqL1xuICBmb3J3YXJkKCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IGZyb21TdG9yZS5Gb3J3YXJkKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgcmVkaXJlY3QgdXJsIGZyb20gc3RvcmVcbiAgICovXG4gIGdldFJlZGlyZWN0VXJsKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoZnJvbVN0b3JlLmdldFJlZGlyZWN0VXJsKSk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIHRoZSByZWRpcmVjdCB1cmwgZnJvbSBzdG9yZVxuICAgKi9cbiAgY2xlYXJSZWRpcmVjdFVybCgpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBmcm9tU3RvcmUuQ2xlYXJSZWRpcmVjdFVybCgpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQdXQgcmVkaXJjdCB1cmwgaW50byBzdG9yZVxuICAgKiBAcGFyYW0gdXJsOiByZWRpcmVjdCB1cmxcbiAgICovXG4gIHNhdmVSZWRpcmVjdFVybCh1cmw6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IGZyb21TdG9yZS5TYXZlUmVkaXJlY3RVcmwodXJsKSk7XG4gIH1cblxuICAvKipcbiAgICogTmF2aWdhdGlvbiB3aXRoIGEgbmV3IHN0YXRlIGludG8gaGlzdG9yeVxuICAgKiBAcGFyYW0gcGF0aFxuICAgKiBAcGFyYW0gcXVlcnlcbiAgICogQHBhcmFtIGV4dHJhczogUmVwcmVzZW50cyB0aGUgZXh0cmEgb3B0aW9ucyB1c2VkIGR1cmluZyBuYXZpZ2F0aW9uLlxuICAgKi9cbiAgcHJvdGVjdGVkIG5hdmlnYXRlKFxuICAgIHBhdGg6IGFueVtdLFxuICAgIHF1ZXJ5Pzogb2JqZWN0LFxuICAgIGV4dHJhcz86IE5hdmlnYXRpb25FeHRyYXNcbiAgKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBmcm9tU3RvcmUuR28oe1xuICAgICAgICBwYXRoLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgZXh0cmFzLFxuICAgICAgfSlcbiAgICApO1xuICB9XG59XG4iXX0=
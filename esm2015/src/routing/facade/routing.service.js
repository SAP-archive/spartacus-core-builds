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
export class RoutingService {
    /**
     * @param {?} store
     * @param {?} winRef
     * @param {?} urlTranslator
     */
    constructor(store, winRef, urlTranslator) {
        this.store = store;
        this.winRef = winRef;
        this.urlTranslator = urlTranslator;
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
     * Navigation with a new state into history
     * @param {?} commands
     * @param {?=} query
     * @param {?=} extras
     * @return {?}
     */
    go(commands, query, extras) {
        /** @type {?} */
        const path = this.urlTranslator.translate(commands, { relative: true });
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
    { type: UrlTranslationService }
];
/** @nocollapse */ RoutingService.ngInjectableDef = i0.defineInjectable({ factory: function RoutingService_Factory() { return new RoutingService(i0.inject(i1.Store), i0.inject(i2.WindowRef), i0.inject(i3.UrlTranslationService)); }, token: RoutingService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGluZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3JvdXRpbmcvZmFjYWRlL3JvdXRpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUk1QyxPQUFPLEtBQUssU0FBUyxNQUFNLFVBQVUsQ0FBQztBQUV0QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFcEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sZ0VBQWdFLENBQUM7Ozs7O0FBS3ZHLE1BQU0sT0FBTyxjQUFjOzs7Ozs7SUFDekIsWUFDVSxLQUFtQyxFQUNuQyxNQUFpQixFQUNqQixhQUFvQztRQUZwQyxVQUFLLEdBQUwsS0FBSyxDQUE4QjtRQUNuQyxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQ2pCLGtCQUFhLEdBQWIsYUFBYSxDQUF1QjtJQUMzQyxDQUFDOzs7OztJQUtKLGNBQWM7UUFDWixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztJQUMzRCxDQUFDOzs7OztJQUtELGNBQWM7UUFDWixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztJQUMzRCxDQUFDOzs7Ozs7OztJQVFELEVBQUUsQ0FDQSxRQUE4QixFQUM5QixLQUFjLEVBQ2QsTUFBeUI7O2NBRW5CLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7UUFFdkUsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDNUMsQ0FBQzs7Ozs7O0lBTUQsT0FBTyxDQUFDLEdBQVc7UUFDakIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxTQUFTLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7Ozs7SUFLRCxJQUFJOztjQUNJLGVBQWUsR0FDbkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FDbkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FDekMsR0FBRyxDQUFDLENBQUM7UUFDUixJQUFJLGVBQWUsRUFBRTtZQUNuQixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQzFDLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2YsT0FBTztJQUNULENBQUM7Ozs7O0lBS0QsT0FBTztRQUNMLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7Ozs7SUFLRCxjQUFjO1FBQ1osT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7Ozs7SUFLRCxnQkFBZ0I7UUFDZCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7Ozs7O0lBTUQsZUFBZSxDQUFDLEdBQVc7UUFDekIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxTQUFTLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDMUQsQ0FBQzs7Ozs7Ozs7O0lBUU8sUUFBUSxDQUNkLElBQVcsRUFDWCxLQUFjLEVBQ2QsTUFBeUI7UUFFekIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ2pCLElBQUksU0FBUyxDQUFDLEVBQUUsQ0FBQztZQUNmLElBQUk7WUFDSixLQUFLO1lBQ0wsTUFBTTtTQUNQLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7O1lBL0dGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQVpnQixLQUFLO1lBTWIsU0FBUztZQUVULHFCQUFxQjs7Ozs7Ozs7SUFPMUIsK0JBQTJDOzs7OztJQUMzQyxnQ0FBeUI7Ozs7O0lBQ3pCLHVDQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdmlnYXRpb25FeHRyYXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCAqIGFzIGZyb21TdG9yZSBmcm9tICcuLi9zdG9yZSc7XG5pbXBvcnQgeyBQYWdlQ29udGV4dCB9IGZyb20gJy4uL21vZGVscy9wYWdlLWNvbnRleHQubW9kZWwnO1xuaW1wb3J0IHsgV2luZG93UmVmIH0gZnJvbSAnLi4vLi4vd2luZG93L3dpbmRvdy1yZWYnO1xuaW1wb3J0IHsgVHJhbnNsYXRlVXJsQ29tbWFuZHMgfSBmcm9tICcuLi9jb25maWd1cmFibGUtcm91dGVzL3VybC10cmFuc2xhdGlvbi90cmFuc2xhdGUtdXJsLWNvbW1hbmRzJztcbmltcG9ydCB7IFVybFRyYW5zbGF0aW9uU2VydmljZSB9IGZyb20gJy4uL2NvbmZpZ3VyYWJsZS1yb3V0ZXMvdXJsLXRyYW5zbGF0aW9uL3VybC10cmFuc2xhdGlvbi5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFJvdXRpbmdTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzdG9yZTogU3RvcmU8ZnJvbVN0b3JlLlJvdXRlclN0YXRlPixcbiAgICBwcml2YXRlIHdpblJlZjogV2luZG93UmVmLFxuICAgIHByaXZhdGUgdXJsVHJhbnNsYXRvcjogVXJsVHJhbnNsYXRpb25TZXJ2aWNlXG4gICkge31cblxuICAvKipcbiAgICogR2V0IHRoZSBjdXJyZW50IHJvdXRlciBzdGF0ZVxuICAgKi9cbiAgZ2V0Um91dGVyU3RhdGUoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChmcm9tU3RvcmUuZ2V0Um91dGVyU3RhdGUpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGBQYWdlQ29udGV4dGAgZnJvbSB0aGUgc3RhdGVcbiAgICovXG4gIGdldFBhZ2VDb250ZXh0KCk6IE9ic2VydmFibGU8UGFnZUNvbnRleHQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChmcm9tU3RvcmUuZ2V0UGFnZUNvbnRleHQpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBOYXZpZ2F0aW9uIHdpdGggYSBuZXcgc3RhdGUgaW50byBoaXN0b3J5XG4gICAqIEBwYXJhbSBjb21tYW5kczogdXJsIGNvbW1hbmRzXG4gICAqIEBwYXJhbSBxdWVyeVxuICAgKiBAcGFyYW0gZXh0cmFzOiBSZXByZXNlbnRzIHRoZSBleHRyYSBvcHRpb25zIHVzZWQgZHVyaW5nIG5hdmlnYXRpb24uXG4gICAqL1xuICBnbyhcbiAgICBjb21tYW5kczogVHJhbnNsYXRlVXJsQ29tbWFuZHMsXG4gICAgcXVlcnk/OiBvYmplY3QsXG4gICAgZXh0cmFzPzogTmF2aWdhdGlvbkV4dHJhc1xuICApOiB2b2lkIHtcbiAgICBjb25zdCBwYXRoID0gdGhpcy51cmxUcmFuc2xhdG9yLnRyYW5zbGF0ZShjb21tYW5kcywgeyByZWxhdGl2ZTogdHJ1ZSB9KTtcblxuICAgIHJldHVybiB0aGlzLm5hdmlnYXRlKHBhdGgsIHF1ZXJ5LCBleHRyYXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIE5hdmlnYXRpb24gdXNpbmcgVVJMXG4gICAqIEBwYXJhbSB1cmxcbiAgICovXG4gIGdvQnlVcmwodXJsOiBzdHJpbmcpIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBmcm9tU3RvcmUuR29CeVVybCh1cmwpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBOYXZpZ2F0aW5nIGJhY2tcbiAgICovXG4gIGJhY2soKTogdm9pZCB7XG4gICAgY29uc3QgaXNMYXN0UGFnZUluQXBwID1cbiAgICAgIHRoaXMud2luUmVmLmRvY3VtZW50LnJlZmVycmVyLmluZGV4T2YoXG4gICAgICAgIHRoaXMud2luUmVmLm5hdGl2ZVdpbmRvdy5sb2NhdGlvbi5vcmlnaW5cbiAgICAgICkgPiAtMTtcbiAgICBpZiAoaXNMYXN0UGFnZUluQXBwKSB7XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBmcm9tU3RvcmUuQmFjaygpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5nbyhbJy8nXSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIE5hdmlnYXRpbmcgZm9yd2FyZFxuICAgKi9cbiAgZm9yd2FyZCgpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBmcm9tU3RvcmUuRm9yd2FyZCgpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHJlZGlyZWN0IHVybCBmcm9tIHN0b3JlXG4gICAqL1xuICBnZXRSZWRpcmVjdFVybCgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KGZyb21TdG9yZS5nZXRSZWRpcmVjdFVybCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgcmVkaXJlY3QgdXJsIGZyb20gc3RvcmVcbiAgICovXG4gIGNsZWFyUmVkaXJlY3RVcmwoKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgZnJvbVN0b3JlLkNsZWFyUmVkaXJlY3RVcmwoKSk7XG4gIH1cblxuICAvKipcbiAgICogUHV0IHJlZGlyY3QgdXJsIGludG8gc3RvcmVcbiAgICogQHBhcmFtIHVybDogcmVkaXJlY3QgdXJsXG4gICAqL1xuICBzYXZlUmVkaXJlY3RVcmwodXJsOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBmcm9tU3RvcmUuU2F2ZVJlZGlyZWN0VXJsKHVybCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIE5hdmlnYXRpb24gd2l0aCBhIG5ldyBzdGF0ZSBpbnRvIGhpc3RvcnlcbiAgICogQHBhcmFtIHBhdGhcbiAgICogQHBhcmFtIHF1ZXJ5XG4gICAqIEBwYXJhbSBleHRyYXM6IFJlcHJlc2VudHMgdGhlIGV4dHJhIG9wdGlvbnMgdXNlZCBkdXJpbmcgbmF2aWdhdGlvbi5cbiAgICovXG4gIHByaXZhdGUgbmF2aWdhdGUoXG4gICAgcGF0aDogYW55W10sXG4gICAgcXVlcnk/OiBvYmplY3QsXG4gICAgZXh0cmFzPzogTmF2aWdhdGlvbkV4dHJhc1xuICApOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IGZyb21TdG9yZS5Hbyh7XG4gICAgICAgIHBhdGgsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBleHRyYXMsXG4gICAgICB9KVxuICAgICk7XG4gIH1cbn1cbiJdfQ==
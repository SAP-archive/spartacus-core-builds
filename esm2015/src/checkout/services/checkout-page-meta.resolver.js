/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { combineLatest, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { CartService } from '../../cart/facade/cart.service';
import { PageRobotsMeta } from '../../cms/model/page.model';
import { PageMetaResolver } from '../../cms/page/page-meta.resolver';
import { TranslationService } from '../../i18n/translation.service';
import { PageType } from '../../model/cms.model';
import * as i0 from "@angular/core";
import * as i1 from "../../cart/facade/cart.service";
import * as i2 from "../../i18n/translation.service";
/**
 * Resolves the page data for all Content Pages based on the `PageType.CONTENT_PAGE`
 * and the `MultiStepCheckoutSummaryPageTemplate`. If the checkout page matches this template,
 * the more generic `ContentPageMetaResolver` is overriden by this resolver.
 *
 * The page title and robots are resolved in this implementation only.
 */
export class CheckoutPageMetaResolver extends PageMetaResolver {
    /**
     * @param {?} cartService
     * @param {?} translation
     */
    constructor(cartService, translation) {
        super();
        this.cartService = cartService;
        this.translation = translation;
        this.cart$ = this.cartService.getActive();
        this.pageType = PageType.CONTENT_PAGE;
        this.pageTemplate = 'MultiStepCheckoutSummaryPageTemplate';
    }
    /**
     * @deprecated since version 1.3
     *
     * The resolve method is no longer preferred and will be removed with release 2.0.
     * The caller `PageMetaService` service is improved to expect all individual resolvers
     * instead, so that the code is easier extensible.
     * @return {?}
     */
    resolve() {
        return this.cart$.pipe(switchMap((/**
         * @param {?} cart
         * @return {?}
         */
        cart => combineLatest([this.resolveTitle(cart), this.resolveRobots()]))), map((/**
         * @param {?} __0
         * @return {?}
         */
        ([title, robots]) => ({ title, robots }))));
    }
    /**
     * @param {?=} cart
     * @return {?}
     */
    resolveTitle(cart) {
        /** @type {?} */
        const cart$ = cart ? of(cart) : this.cart$;
        return cart$.pipe(switchMap((/**
         * @param {?} c
         * @return {?}
         */
        c => this.translation.translate('pageMetaResolver.checkout.title', {
            count: c.totalItems,
        }))));
    }
    /**
     * @return {?}
     */
    resolveRobots() {
        return of([PageRobotsMeta.NOFOLLOW, PageRobotsMeta.NOINDEX]);
    }
}
CheckoutPageMetaResolver.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
CheckoutPageMetaResolver.ctorParameters = () => [
    { type: CartService },
    { type: TranslationService }
];
/** @nocollapse */ CheckoutPageMetaResolver.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CheckoutPageMetaResolver_Factory() { return new CheckoutPageMetaResolver(i0.ɵɵinject(i1.CartService), i0.ɵɵinject(i2.TranslationService)); }, token: CheckoutPageMetaResolver, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    CheckoutPageMetaResolver.prototype.cart$;
    /**
     * @type {?}
     * @protected
     */
    CheckoutPageMetaResolver.prototype.cartService;
    /**
     * @type {?}
     * @protected
     */
    CheckoutPageMetaResolver.prototype.translation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtcGFnZS1tZXRhLnJlc29sdmVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NoZWNrb3V0L3NlcnZpY2VzL2NoZWNrb3V0LXBhZ2UtbWV0YS5yZXNvbHZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsYUFBYSxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNyRCxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM3RCxPQUFPLEVBQVksY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDdEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFLckUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFcEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7Ozs7Ozs7OztBQVlqRCxNQUFNLE9BQU8sd0JBQXlCLFNBQVEsZ0JBQWdCOzs7OztJQUk1RCxZQUNZLFdBQXdCLEVBQ3hCLFdBQStCO1FBRXpDLEtBQUssRUFBRSxDQUFDO1FBSEUsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsZ0JBQVcsR0FBWCxXQUFXLENBQW9CO1FBSm5DLFVBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBTzNDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQztRQUN0QyxJQUFJLENBQUMsWUFBWSxHQUFHLHNDQUFzQyxDQUFDO0lBQzdELENBQUM7Ozs7Ozs7OztJQVNELE9BQU87UUFDTCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNwQixTQUFTOzs7O1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FDZixhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLEVBQy9ELEVBQ0QsR0FBRzs7OztRQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBQyxDQUM5QyxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFTRCxZQUFZLENBQUMsSUFBVzs7Y0FDaEIsS0FBSyxHQUFxQixJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUs7UUFDNUQsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUNmLFNBQVM7Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxDQUNaLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLGlDQUFpQyxFQUFFO1lBQzVELEtBQUssRUFBRSxDQUFDLENBQUMsVUFBVTtTQUNwQixDQUFDLEVBQ0gsQ0FDRixDQUFDO0lBQ0osQ0FBQzs7OztJQUVELGFBQWE7UUFDWCxPQUFPLEVBQUUsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDL0QsQ0FBQzs7O1lBcERGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQXBCUSxXQUFXO1lBT1gsa0JBQWtCOzs7Ozs7OztJQWdCekIseUNBQTZDOzs7OztJQUczQywrQ0FBa0M7Ozs7O0lBQ2xDLCtDQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENhcnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY2FydC9mYWNhZGUvY2FydC5zZXJ2aWNlJztcbmltcG9ydCB7IFBhZ2VNZXRhLCBQYWdlUm9ib3RzTWV0YSB9IGZyb20gJy4uLy4uL2Ntcy9tb2RlbC9wYWdlLm1vZGVsJztcbmltcG9ydCB7IFBhZ2VNZXRhUmVzb2x2ZXIgfSBmcm9tICcuLi8uLi9jbXMvcGFnZS9wYWdlLW1ldGEucmVzb2x2ZXInO1xuaW1wb3J0IHtcbiAgUGFnZVJvYm90c1Jlc29sdmVyLFxuICBQYWdlVGl0bGVSZXNvbHZlcixcbn0gZnJvbSAnLi4vLi4vY21zL3BhZ2UvcGFnZS5yZXNvbHZlcnMnO1xuaW1wb3J0IHsgVHJhbnNsYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vaTE4bi90cmFuc2xhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IENhcnQgfSBmcm9tICcuLi8uLi9tb2RlbC9jYXJ0Lm1vZGVsJztcbmltcG9ydCB7IFBhZ2VUeXBlIH0gZnJvbSAnLi4vLi4vbW9kZWwvY21zLm1vZGVsJztcblxuLyoqXG4gKiBSZXNvbHZlcyB0aGUgcGFnZSBkYXRhIGZvciBhbGwgQ29udGVudCBQYWdlcyBiYXNlZCBvbiB0aGUgYFBhZ2VUeXBlLkNPTlRFTlRfUEFHRWBcbiAqIGFuZCB0aGUgYE11bHRpU3RlcENoZWNrb3V0U3VtbWFyeVBhZ2VUZW1wbGF0ZWAuIElmIHRoZSBjaGVja291dCBwYWdlIG1hdGNoZXMgdGhpcyB0ZW1wbGF0ZSxcbiAqIHRoZSBtb3JlIGdlbmVyaWMgYENvbnRlbnRQYWdlTWV0YVJlc29sdmVyYCBpcyBvdmVycmlkZW4gYnkgdGhpcyByZXNvbHZlci5cbiAqXG4gKiBUaGUgcGFnZSB0aXRsZSBhbmQgcm9ib3RzIGFyZSByZXNvbHZlZCBpbiB0aGlzIGltcGxlbWVudGF0aW9uIG9ubHkuXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDaGVja291dFBhZ2VNZXRhUmVzb2x2ZXIgZXh0ZW5kcyBQYWdlTWV0YVJlc29sdmVyXG4gIGltcGxlbWVudHMgUGFnZVRpdGxlUmVzb2x2ZXIsIFBhZ2VSb2JvdHNSZXNvbHZlciB7XG4gIHByaXZhdGUgY2FydCQgPSB0aGlzLmNhcnRTZXJ2aWNlLmdldEFjdGl2ZSgpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjYXJ0U2VydmljZTogQ2FydFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHRyYW5zbGF0aW9uOiBUcmFuc2xhdGlvblNlcnZpY2VcbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnBhZ2VUeXBlID0gUGFnZVR5cGUuQ09OVEVOVF9QQUdFO1xuICAgIHRoaXMucGFnZVRlbXBsYXRlID0gJ011bHRpU3RlcENoZWNrb3V0U3VtbWFyeVBhZ2VUZW1wbGF0ZSc7XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjNcbiAgICpcbiAgICogVGhlIHJlc29sdmUgbWV0aG9kIGlzIG5vIGxvbmdlciBwcmVmZXJyZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCB3aXRoIHJlbGVhc2UgMi4wLlxuICAgKiBUaGUgY2FsbGVyIGBQYWdlTWV0YVNlcnZpY2VgIHNlcnZpY2UgaXMgaW1wcm92ZWQgdG8gZXhwZWN0IGFsbCBpbmRpdmlkdWFsIHJlc29sdmVyc1xuICAgKiBpbnN0ZWFkLCBzbyB0aGF0IHRoZSBjb2RlIGlzIGVhc2llciBleHRlbnNpYmxlLlxuICAgKi9cbiAgcmVzb2x2ZSgpOiBPYnNlcnZhYmxlPFBhZ2VNZXRhPiB8IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuY2FydCQucGlwZShcbiAgICAgIHN3aXRjaE1hcChjYXJ0ID0+XG4gICAgICAgIGNvbWJpbmVMYXRlc3QoW3RoaXMucmVzb2x2ZVRpdGxlKGNhcnQpLCB0aGlzLnJlc29sdmVSb2JvdHMoKV0pXG4gICAgICApLFxuICAgICAgbWFwKChbdGl0bGUsIHJvYm90c10pID0+ICh7IHRpdGxlLCByb2JvdHMgfSkpXG4gICAgKTtcbiAgfVxuXG4gIHJlc29sdmVUaXRsZSgpOiBPYnNlcnZhYmxlPHN0cmluZz47XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuM1xuICAgKiBXaXRoIDIuMCwgdGhlIGFyZ3VtZW50KHMpIHdpbGwgYmUgcmVtb3ZlZCBhbmQgdGhlIHJldHVybiB0eXBlIHdpbGwgY2hhbmdlLiBVc2UgYHJlc29sdmVUaXRsZSgpYCBpbnN0ZWFkXG4gICAqL1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHVuaWZpZWQtc2lnbmF0dXJlc1xuICByZXNvbHZlVGl0bGUoY2FydDogQ2FydCk6IE9ic2VydmFibGU8c3RyaW5nPjtcbiAgcmVzb2x2ZVRpdGxlKGNhcnQ/OiBDYXJ0KTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICBjb25zdCBjYXJ0JDogT2JzZXJ2YWJsZTxDYXJ0PiA9IGNhcnQgPyBvZihjYXJ0KSA6IHRoaXMuY2FydCQ7XG4gICAgcmV0dXJuIGNhcnQkLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoYyA9PlxuICAgICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgncGFnZU1ldGFSZXNvbHZlci5jaGVja291dC50aXRsZScsIHtcbiAgICAgICAgICBjb3VudDogYy50b3RhbEl0ZW1zLFxuICAgICAgICB9KVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICByZXNvbHZlUm9ib3RzKCk6IE9ic2VydmFibGU8UGFnZVJvYm90c01ldGFbXT4ge1xuICAgIHJldHVybiBvZihbUGFnZVJvYm90c01ldGEuTk9GT0xMT1csIFBhZ2VSb2JvdHNNZXRhLk5PSU5ERVhdKTtcbiAgfVxufVxuIl19
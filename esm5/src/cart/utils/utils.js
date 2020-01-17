/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { OCC_USER_ID_ANONYMOUS } from '../../occ/utils/occ-constants';
/**
 * @param {?} cart
 * @param {?} userId
 * @return {?}
 */
export function getCartIdByUserId(cart, userId) {
    if (userId === OCC_USER_ID_ANONYMOUS) {
        return cart.guid;
    }
    return cart.code;
}
/**
 * What is a temporary cart?
 * - frontend only cart entity!
 * - can be identified in store by `temp-` prefix with some unique id (multiple carts can be created at the same time eg. active cart, wishlist)
 *
 * Why we need temporary carts?
 * - to have information about cart creation process (meta flags: loading, error - for showing loader, error message)
 * - to know if there is currently a cart creation process in progress (eg. so, we don't create more than one active cart at the same time)
 * - cart identifiers are created in the backend, so those are only known after cart is created
 *
 * Temporary cart lifecycle
 * - create cart method invoked
 * - new `temp-${uuid}` cart is created with `loading=true` state
 * - backend returns created cart
 * - normal cart entity is saved under correct id (eg. for logged user under cart `code` key)
 * - temporary cart value is set to backend response (anyone observing this cart can read code/guid from it and switch selector to normal cart)
 * - in next tick temporary cart is removed
 * @param {?} cartId
 * @return {?}
 */
export function isTempCartId(cartId) {
    return cartId.startsWith('temp-');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC91dGlscy91dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sK0JBQStCLENBQUM7Ozs7OztBQUV0RSxNQUFNLFVBQVUsaUJBQWlCLENBQUMsSUFBVSxFQUFFLE1BQWM7SUFDMUQsSUFBSSxNQUFNLEtBQUsscUJBQXFCLEVBQUU7UUFDcEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0tBQ2xCO0lBQ0QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0FBQ25CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CRCxNQUFNLFVBQVUsWUFBWSxDQUFDLE1BQWM7SUFDekMsT0FBTyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3BDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXJ0IH0gZnJvbSAnLi4vLi4vbW9kZWwvY2FydC5tb2RlbCc7XG5pbXBvcnQgeyBPQ0NfVVNFUl9JRF9BTk9OWU1PVVMgfSBmcm9tICcuLi8uLi9vY2MvdXRpbHMvb2NjLWNvbnN0YW50cyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDYXJ0SWRCeVVzZXJJZChjYXJ0OiBDYXJ0LCB1c2VySWQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmICh1c2VySWQgPT09IE9DQ19VU0VSX0lEX0FOT05ZTU9VUykge1xuICAgIHJldHVybiBjYXJ0Lmd1aWQ7XG4gIH1cbiAgcmV0dXJuIGNhcnQuY29kZTtcbn1cblxuLyoqXG4gKiBXaGF0IGlzIGEgdGVtcG9yYXJ5IGNhcnQ/XG4gKiAtIGZyb250ZW5kIG9ubHkgY2FydCBlbnRpdHkhXG4gKiAtIGNhbiBiZSBpZGVudGlmaWVkIGluIHN0b3JlIGJ5IGB0ZW1wLWAgcHJlZml4IHdpdGggc29tZSB1bmlxdWUgaWQgKG11bHRpcGxlIGNhcnRzIGNhbiBiZSBjcmVhdGVkIGF0IHRoZSBzYW1lIHRpbWUgZWcuIGFjdGl2ZSBjYXJ0LCB3aXNobGlzdClcbiAqXG4gKiBXaHkgd2UgbmVlZCB0ZW1wb3JhcnkgY2FydHM/XG4gKiAtIHRvIGhhdmUgaW5mb3JtYXRpb24gYWJvdXQgY2FydCBjcmVhdGlvbiBwcm9jZXNzIChtZXRhIGZsYWdzOiBsb2FkaW5nLCBlcnJvciAtIGZvciBzaG93aW5nIGxvYWRlciwgZXJyb3IgbWVzc2FnZSlcbiAqIC0gdG8ga25vdyBpZiB0aGVyZSBpcyBjdXJyZW50bHkgYSBjYXJ0IGNyZWF0aW9uIHByb2Nlc3MgaW4gcHJvZ3Jlc3MgKGVnLiBzbywgd2UgZG9uJ3QgY3JlYXRlIG1vcmUgdGhhbiBvbmUgYWN0aXZlIGNhcnQgYXQgdGhlIHNhbWUgdGltZSlcbiAqIC0gY2FydCBpZGVudGlmaWVycyBhcmUgY3JlYXRlZCBpbiB0aGUgYmFja2VuZCwgc28gdGhvc2UgYXJlIG9ubHkga25vd24gYWZ0ZXIgY2FydCBpcyBjcmVhdGVkXG4gKlxuICogVGVtcG9yYXJ5IGNhcnQgbGlmZWN5Y2xlXG4gKiAtIGNyZWF0ZSBjYXJ0IG1ldGhvZCBpbnZva2VkXG4gKiAtIG5ldyBgdGVtcC0ke3V1aWR9YCBjYXJ0IGlzIGNyZWF0ZWQgd2l0aCBgbG9hZGluZz10cnVlYCBzdGF0ZVxuICogLSBiYWNrZW5kIHJldHVybnMgY3JlYXRlZCBjYXJ0XG4gKiAtIG5vcm1hbCBjYXJ0IGVudGl0eSBpcyBzYXZlZCB1bmRlciBjb3JyZWN0IGlkIChlZy4gZm9yIGxvZ2dlZCB1c2VyIHVuZGVyIGNhcnQgYGNvZGVgIGtleSlcbiAqIC0gdGVtcG9yYXJ5IGNhcnQgdmFsdWUgaXMgc2V0IHRvIGJhY2tlbmQgcmVzcG9uc2UgKGFueW9uZSBvYnNlcnZpbmcgdGhpcyBjYXJ0IGNhbiByZWFkIGNvZGUvZ3VpZCBmcm9tIGl0IGFuZCBzd2l0Y2ggc2VsZWN0b3IgdG8gbm9ybWFsIGNhcnQpXG4gKiAtIGluIG5leHQgdGljayB0ZW1wb3JhcnkgY2FydCBpcyByZW1vdmVkXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1RlbXBDYXJ0SWQoY2FydElkOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIGNhcnRJZC5zdGFydHNXaXRoKCd0ZW1wLScpO1xufVxuIl19
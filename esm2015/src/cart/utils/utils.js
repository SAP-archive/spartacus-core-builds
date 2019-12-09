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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC91dGlscy91dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sK0JBQStCLENBQUM7Ozs7OztBQUV0RSxNQUFNLFVBQVUsaUJBQWlCLENBQUMsSUFBVSxFQUFFLE1BQWM7SUFDMUQsSUFBSSxNQUFNLEtBQUsscUJBQXFCLEVBQUU7UUFDcEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0tBQ2xCO0lBQ0QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0FBQ25CLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXJ0IH0gZnJvbSAnLi4vLi4vbW9kZWwvY2FydC5tb2RlbCc7XG5pbXBvcnQgeyBPQ0NfVVNFUl9JRF9BTk9OWU1PVVMgfSBmcm9tICcuLi8uLi9vY2MvdXRpbHMvb2NjLWNvbnN0YW50cyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDYXJ0SWRCeVVzZXJJZChjYXJ0OiBDYXJ0LCB1c2VySWQ6IHN0cmluZykge1xuICBpZiAodXNlcklkID09PSBPQ0NfVVNFUl9JRF9BTk9OWU1PVVMpIHtcbiAgICByZXR1cm4gY2FydC5ndWlkO1xuICB9XG4gIHJldHVybiBjYXJ0LmNvZGU7XG59XG4iXX0=
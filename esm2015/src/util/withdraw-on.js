/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { startWith, switchMapTo } from 'rxjs/operators';
/**
 *
 * Withdraw from the source observable when notifier emits a value
 *
 * Withdraw will result in resubscribing to the source observable
 * Operator is useful to kill ongoing emission transformation on notifier emission
 *
 * @template T
 * @param {?} notifier
 * @return {?}
 */
export function withdrawOn(notifier) {
    return (/**
     * @param {?} source
     * @return {?}
     */
    (source) => notifier.pipe(startWith(undefined), switchMapTo(source)));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l0aGRyYXctb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXRpbC93aXRoZHJhdy1vbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7Ozs7O0FBV3hELE1BQU0sVUFBVSxVQUFVLENBQ3hCLFFBQXlCO0lBRXpCOzs7O0lBQU8sQ0FBQyxNQUFxQixFQUFFLEVBQUUsQ0FDL0IsUUFBUSxDQUFDLElBQUksQ0FDWCxTQUFTLENBQUMsU0FBUyxDQUFDLEVBQ3BCLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FDcEIsRUFBQztBQUNOLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlLCBPcGVyYXRvckZ1bmN0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBzdGFydFdpdGgsIHN3aXRjaE1hcFRvIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG4vKipcbiAqXG4gKiBXaXRoZHJhdyBmcm9tIHRoZSBzb3VyY2Ugb2JzZXJ2YWJsZSB3aGVuIG5vdGlmaWVyIGVtaXRzIGEgdmFsdWVcbiAqXG4gKiBXaXRoZHJhdyB3aWxsIHJlc3VsdCBpbiByZXN1YnNjcmliaW5nIHRvIHRoZSBzb3VyY2Ugb2JzZXJ2YWJsZVxuICogT3BlcmF0b3IgaXMgdXNlZnVsIHRvIGtpbGwgb25nb2luZyBlbWlzc2lvbiB0cmFuc2Zvcm1hdGlvbiBvbiBub3RpZmllciBlbWlzc2lvblxuICpcbiAqIEBwYXJhbSBub3RpZmllclxuICovXG5leHBvcnQgZnVuY3Rpb24gd2l0aGRyYXdPbjxUPihcbiAgbm90aWZpZXI6IE9ic2VydmFibGU8YW55PlxuKTogT3BlcmF0b3JGdW5jdGlvbjxULCBUPiB7XG4gIHJldHVybiAoc291cmNlOiBPYnNlcnZhYmxlPFQ+KSA9PlxuICAgIG5vdGlmaWVyLnBpcGUoXG4gICAgICBzdGFydFdpdGgodW5kZWZpbmVkKSxcbiAgICAgIHN3aXRjaE1hcFRvKHNvdXJjZSlcbiAgICApO1xufVxuIl19
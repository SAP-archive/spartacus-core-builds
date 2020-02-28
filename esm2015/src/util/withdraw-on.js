import { startWith, switchMapTo } from 'rxjs/operators';
/**
 *
 * Withdraw from the source observable when notifier emits a value
 *
 * Withdraw will result in resubscribing to the source observable
 * Operator is useful to kill ongoing emission transformation on notifier emission
 *
 * @param notifier
 */
export function withdrawOn(notifier) {
    return (source) => notifier.pipe(startWith(undefined), switchMapTo(source));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l0aGRyYXctb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXRpbC93aXRoZHJhdy1vbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXhEOzs7Ozs7OztHQVFHO0FBQ0gsTUFBTSxVQUFVLFVBQVUsQ0FDeEIsUUFBeUI7SUFFekIsT0FBTyxDQUFDLE1BQXFCLEVBQUUsRUFBRSxDQUMvQixRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsRUFBRSxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUM3RCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSwgT3BlcmF0b3JGdW5jdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgc3RhcnRXaXRoLCBzd2l0Y2hNYXBUbyB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuLyoqXG4gKlxuICogV2l0aGRyYXcgZnJvbSB0aGUgc291cmNlIG9ic2VydmFibGUgd2hlbiBub3RpZmllciBlbWl0cyBhIHZhbHVlXG4gKlxuICogV2l0aGRyYXcgd2lsbCByZXN1bHQgaW4gcmVzdWJzY3JpYmluZyB0byB0aGUgc291cmNlIG9ic2VydmFibGVcbiAqIE9wZXJhdG9yIGlzIHVzZWZ1bCB0byBraWxsIG9uZ29pbmcgZW1pc3Npb24gdHJhbnNmb3JtYXRpb24gb24gbm90aWZpZXIgZW1pc3Npb25cbiAqXG4gKiBAcGFyYW0gbm90aWZpZXJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHdpdGhkcmF3T248VD4oXG4gIG5vdGlmaWVyOiBPYnNlcnZhYmxlPGFueT5cbik6IE9wZXJhdG9yRnVuY3Rpb248VCwgVD4ge1xuICByZXR1cm4gKHNvdXJjZTogT2JzZXJ2YWJsZTxUPikgPT5cbiAgICBub3RpZmllci5waXBlKHN0YXJ0V2l0aCh1bmRlZmluZWQpLCBzd2l0Y2hNYXBUbyhzb3VyY2UpKTtcbn1cbiJdfQ==
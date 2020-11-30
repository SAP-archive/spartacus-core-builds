import { asapScheduler, combineLatest, defer, Observable } from 'rxjs';
import { audit } from 'rxjs/operators';
/**
 * uniteLatest is an alternative to combineLatest. The first emission is
 * emitted synchronously (just like combineLatest) and all following emissions
 * are audited and emitted using asapScheduler.
 *
 * It effectively smooths out emissions when multiple sources will emit at the
 * same time: uniteLatest will have only one emission, where combine latest will
 * have more than one (one per source changed).
 *
 * @param sources
 */
export function uniteLatest(sources) {
    return defer(() => {
        let subNo = 0;
        const trigger = new Observable((subscriber) => {
            const action = () => {
                subscriber.next();
                subscriber.complete();
            };
            if (subNo) {
                asapScheduler.schedule(action);
            }
            else {
                action();
            }
            subNo++;
        });
        return combineLatest(sources).pipe(audit(() => trigger));
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5pdGUtbGF0ZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS9zcmMvdXRpbC9yeGpzL3VuaXRlLWxhdGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQU92Qzs7Ozs7Ozs7OztHQVVHO0FBQ0gsTUFBTSxVQUFVLFdBQVcsQ0FDekIsT0FBVTtJQUVWLE9BQU8sS0FBSyxDQUFDLEdBQUcsRUFBRTtRQUNoQixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZCxNQUFNLE9BQU8sR0FBRyxJQUFJLFVBQVUsQ0FBQyxDQUFDLFVBQVUsRUFBRSxFQUFFO1lBQzVDLE1BQU0sTUFBTSxHQUFHLEdBQUcsRUFBRTtnQkFDbEIsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNsQixVQUFVLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDeEIsQ0FBQyxDQUFDO1lBRUYsSUFBSSxLQUFLLEVBQUU7Z0JBQ1QsYUFBYSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNoQztpQkFBTTtnQkFDTCxNQUFNLEVBQUUsQ0FBQzthQUNWO1lBQ0QsS0FBSyxFQUFFLENBQUM7UUFDVixDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUMzRCxDQUFDLENBQVEsQ0FBQztBQUNaLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhc2FwU2NoZWR1bGVyLCBjb21iaW5lTGF0ZXN0LCBkZWZlciwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgYXVkaXQgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbnR5cGUgUmV0dXJuVHlwZXM8VCBleHRlbmRzIE9ic2VydmFibGU8YW55PltdPiA9IHtcbiAgW1AgaW4ga2V5b2YgVF06IFRbUF0gZXh0ZW5kcyBPYnNlcnZhYmxlPGluZmVyIFI+ID8gUiA6IG5ldmVyO1xufTtcbnR5cGUgT2JzZXJ2YWJsZXMgPSBbT2JzZXJ2YWJsZTxhbnk+XSB8IE9ic2VydmFibGU8YW55PltdO1xuXG4vKipcbiAqIHVuaXRlTGF0ZXN0IGlzIGFuIGFsdGVybmF0aXZlIHRvIGNvbWJpbmVMYXRlc3QuIFRoZSBmaXJzdCBlbWlzc2lvbiBpc1xuICogZW1pdHRlZCBzeW5jaHJvbm91c2x5IChqdXN0IGxpa2UgY29tYmluZUxhdGVzdCkgYW5kIGFsbCBmb2xsb3dpbmcgZW1pc3Npb25zXG4gKiBhcmUgYXVkaXRlZCBhbmQgZW1pdHRlZCB1c2luZyBhc2FwU2NoZWR1bGVyLlxuICpcbiAqIEl0IGVmZmVjdGl2ZWx5IHNtb290aHMgb3V0IGVtaXNzaW9ucyB3aGVuIG11bHRpcGxlIHNvdXJjZXMgd2lsbCBlbWl0IGF0IHRoZVxuICogc2FtZSB0aW1lOiB1bml0ZUxhdGVzdCB3aWxsIGhhdmUgb25seSBvbmUgZW1pc3Npb24sIHdoZXJlIGNvbWJpbmUgbGF0ZXN0IHdpbGxcbiAqIGhhdmUgbW9yZSB0aGFuIG9uZSAob25lIHBlciBzb3VyY2UgY2hhbmdlZCkuXG4gKlxuICogQHBhcmFtIHNvdXJjZXNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVuaXRlTGF0ZXN0PFIgZXh0ZW5kcyBPYnNlcnZhYmxlcz4oXG4gIHNvdXJjZXM6IFJcbik6IE9ic2VydmFibGU8UmV0dXJuVHlwZXM8Uj4+IHtcbiAgcmV0dXJuIGRlZmVyKCgpID0+IHtcbiAgICBsZXQgc3ViTm8gPSAwO1xuICAgIGNvbnN0IHRyaWdnZXIgPSBuZXcgT2JzZXJ2YWJsZSgoc3Vic2NyaWJlcikgPT4ge1xuICAgICAgY29uc3QgYWN0aW9uID0gKCkgPT4ge1xuICAgICAgICBzdWJzY3JpYmVyLm5leHQoKTtcbiAgICAgICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuICAgICAgfTtcblxuICAgICAgaWYgKHN1Yk5vKSB7XG4gICAgICAgIGFzYXBTY2hlZHVsZXIuc2NoZWR1bGUoYWN0aW9uKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFjdGlvbigpO1xuICAgICAgfVxuICAgICAgc3ViTm8rKztcbiAgICB9KTtcblxuICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KHNvdXJjZXMpLnBpcGUoYXVkaXQoKCkgPT4gdHJpZ2dlcikpO1xuICB9KSBhcyBhbnk7XG59XG4iXX0=
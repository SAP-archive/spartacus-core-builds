import { InjectFlags, } from '@angular/core';
const NOT_FOUND_SYMBOL = {};
/**
 * CombinedInjector is able to combine more than one injector together.
 *
 * Can be used to instantiate lazy loaded modules with dependency modules,
 * so lazy loaded module can use instances provided in all dependency modules.
 *
 * Injector tries to resolve token in all Injector, taking into account the order
 * in which they were provided in complementaryInjectors and fallbacks to the
 * mainInjector.
 */
export class CombinedInjector {
    /**
     * @param mainInjector Component hierarchical injector
     * @param complementaryInjectors Additional injector that will be taken into an account when resolving dependencies
     */
    constructor(mainInjector, complementaryInjectors) {
        this.mainInjector = mainInjector;
        this.complementaryInjectors = complementaryInjectors;
    }
    get(token, notFoundValue, flags) {
        // tslint:disable-next-line:no-bitwise
        if (flags & InjectFlags.Self) {
            if (notFoundValue !== undefined) {
                return notFoundValue;
            }
            throw new Error("CombinedInjector should be used as a parent injector / doesn't support self dependencies");
        }
        for (const injector of [...this.complementaryInjectors]) {
            // First we are resolving providers provided at Self level
            // in all complementary injectors...
            const service = injector.get(token, NOT_FOUND_SYMBOL, InjectFlags.Self);
            if (service !== NOT_FOUND_SYMBOL) {
                return service;
            }
        }
        // ...and then fallback to main injector passing the flag
        return this.mainInjector.get(token, notFoundValue, flags);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tYmluZWQtaW5qZWN0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3NyYy91dGlsL2NvbWJpbmVkLWluamVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFFTCxXQUFXLEdBSVosTUFBTSxlQUFlLENBQUM7QUFFdkIsTUFBTSxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7QUFFNUI7Ozs7Ozs7OztHQVNHO0FBQ0gsTUFBTSxPQUFPLGdCQUFnQjtJQUMzQjs7O09BR0c7SUFDSCxZQUNVLFlBQXNCLEVBQ3RCLHNCQUFrQztRQURsQyxpQkFBWSxHQUFaLFlBQVksQ0FBVTtRQUN0QiwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQVk7SUFDekMsQ0FBQztJQVFKLEdBQUcsQ0FBQyxLQUFLLEVBQUUsYUFBbUIsRUFBRSxLQUFtQjtRQUNqRCxzQ0FBc0M7UUFDdEMsSUFBSSxLQUFLLEdBQUcsV0FBVyxDQUFDLElBQUksRUFBRTtZQUM1QixJQUFJLGFBQWEsS0FBSyxTQUFTLEVBQUU7Z0JBQy9CLE9BQU8sYUFBYSxDQUFDO2FBQ3RCO1lBQ0QsTUFBTSxJQUFJLEtBQUssQ0FDYiwwRkFBMEYsQ0FDM0YsQ0FBQztTQUNIO1FBRUQsS0FBSyxNQUFNLFFBQVEsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLEVBQUU7WUFDdkQsMERBQTBEO1lBQzFELG9DQUFvQztZQUNwQyxNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxnQkFBZ0IsRUFBRSxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDeEUsSUFBSSxPQUFPLEtBQUssZ0JBQWdCLEVBQUU7Z0JBQ2hDLE9BQU8sT0FBTyxDQUFDO2FBQ2hCO1NBQ0Y7UUFDRCx5REFBeUQ7UUFDekQsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzVELENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFic3RyYWN0VHlwZSxcbiAgSW5qZWN0RmxhZ3MsXG4gIEluamVjdGlvblRva2VuLFxuICBJbmplY3RvcixcbiAgVHlwZSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmNvbnN0IE5PVF9GT1VORF9TWU1CT0wgPSB7fTtcblxuLyoqXG4gKiBDb21iaW5lZEluamVjdG9yIGlzIGFibGUgdG8gY29tYmluZSBtb3JlIHRoYW4gb25lIGluamVjdG9yIHRvZ2V0aGVyLlxuICpcbiAqIENhbiBiZSB1c2VkIHRvIGluc3RhbnRpYXRlIGxhenkgbG9hZGVkIG1vZHVsZXMgd2l0aCBkZXBlbmRlbmN5IG1vZHVsZXMsXG4gKiBzbyBsYXp5IGxvYWRlZCBtb2R1bGUgY2FuIHVzZSBpbnN0YW5jZXMgcHJvdmlkZWQgaW4gYWxsIGRlcGVuZGVuY3kgbW9kdWxlcy5cbiAqXG4gKiBJbmplY3RvciB0cmllcyB0byByZXNvbHZlIHRva2VuIGluIGFsbCBJbmplY3RvciwgdGFraW5nIGludG8gYWNjb3VudCB0aGUgb3JkZXJcbiAqIGluIHdoaWNoIHRoZXkgd2VyZSBwcm92aWRlZCBpbiBjb21wbGVtZW50YXJ5SW5qZWN0b3JzIGFuZCBmYWxsYmFja3MgdG8gdGhlXG4gKiBtYWluSW5qZWN0b3IuXG4gKi9cbmV4cG9ydCBjbGFzcyBDb21iaW5lZEluamVjdG9yIGltcGxlbWVudHMgSW5qZWN0b3Ige1xuICAvKipcbiAgICogQHBhcmFtIG1haW5JbmplY3RvciBDb21wb25lbnQgaGllcmFyY2hpY2FsIGluamVjdG9yXG4gICAqIEBwYXJhbSBjb21wbGVtZW50YXJ5SW5qZWN0b3JzIEFkZGl0aW9uYWwgaW5qZWN0b3IgdGhhdCB3aWxsIGJlIHRha2VuIGludG8gYW4gYWNjb3VudCB3aGVuIHJlc29sdmluZyBkZXBlbmRlbmNpZXNcbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgbWFpbkluamVjdG9yOiBJbmplY3RvcixcbiAgICBwcml2YXRlIGNvbXBsZW1lbnRhcnlJbmplY3RvcnM6IEluamVjdG9yW11cbiAgKSB7fVxuXG4gIGdldDxUPihcbiAgICB0b2tlbjogVHlwZTxUPiB8IEluamVjdGlvblRva2VuPFQ+IHwgQWJzdHJhY3RUeXBlPFQ+LFxuICAgIG5vdEZvdW5kVmFsdWU/OiBULFxuICAgIGZsYWdzPzogSW5qZWN0RmxhZ3NcbiAgKTogVDtcbiAgZ2V0KHRva2VuOiBhbnksIG5vdEZvdW5kVmFsdWU/OiBhbnkpOiBhbnk7XG4gIGdldCh0b2tlbiwgbm90Rm91bmRWYWx1ZT86IGFueSwgZmxhZ3M/OiBJbmplY3RGbGFncyk6IGFueSB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWJpdHdpc2VcbiAgICBpZiAoZmxhZ3MgJiBJbmplY3RGbGFncy5TZWxmKSB7XG4gICAgICBpZiAobm90Rm91bmRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBub3RGb3VuZFZhbHVlO1xuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBcIkNvbWJpbmVkSW5qZWN0b3Igc2hvdWxkIGJlIHVzZWQgYXMgYSBwYXJlbnQgaW5qZWN0b3IgLyBkb2Vzbid0IHN1cHBvcnQgc2VsZiBkZXBlbmRlbmNpZXNcIlxuICAgICAgKTtcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IGluamVjdG9yIG9mIFsuLi50aGlzLmNvbXBsZW1lbnRhcnlJbmplY3RvcnNdKSB7XG4gICAgICAvLyBGaXJzdCB3ZSBhcmUgcmVzb2x2aW5nIHByb3ZpZGVycyBwcm92aWRlZCBhdCBTZWxmIGxldmVsXG4gICAgICAvLyBpbiBhbGwgY29tcGxlbWVudGFyeSBpbmplY3RvcnMuLi5cbiAgICAgIGNvbnN0IHNlcnZpY2UgPSBpbmplY3Rvci5nZXQodG9rZW4sIE5PVF9GT1VORF9TWU1CT0wsIEluamVjdEZsYWdzLlNlbGYpO1xuICAgICAgaWYgKHNlcnZpY2UgIT09IE5PVF9GT1VORF9TWU1CT0wpIHtcbiAgICAgICAgcmV0dXJuIHNlcnZpY2U7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIC4uLmFuZCB0aGVuIGZhbGxiYWNrIHRvIG1haW4gaW5qZWN0b3IgcGFzc2luZyB0aGUgZmxhZ1xuICAgIHJldHVybiB0aGlzLm1haW5JbmplY3Rvci5nZXQodG9rZW4sIG5vdEZvdW5kVmFsdWUsIGZsYWdzKTtcbiAgfVxufVxuIl19
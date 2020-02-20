import { __decorate, __param } from "tslib";
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { fromEvent, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, startWith } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
let WindowRef = class WindowRef {
    constructor(document) {
        // it's a workaround to have document property properly typed
        // see: https://github.com/angular/angular/issues/15640
        this.document = document;
    }
    get nativeWindow() {
        return typeof window !== 'undefined' ? window : undefined;
    }
    get sessionStorage() {
        return this.nativeWindow ? this.nativeWindow.sessionStorage : undefined;
    }
    get localStorage() {
        return this.nativeWindow ? this.nativeWindow.localStorage : undefined;
    }
    /**
     * Returns an observable for the window resize event and emits an event
     * every 300ms in case of resizing. An event is simulated initially.
     *
     * If there's no window object availale (i.e. in SSR), a null value is emitted.
     */
    get resize$() {
        if (!this.nativeWindow) {
            return of(null);
        }
        else {
            return fromEvent(this.nativeWindow, 'resize').pipe(debounceTime(300), startWith({ target: this.nativeWindow }), distinctUntilChanged());
        }
    }
};
WindowRef.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
WindowRef.ɵprov = i0.ɵɵdefineInjectable({ factory: function WindowRef_Factory() { return new WindowRef(i0.ɵɵinject(i1.DOCUMENT)); }, token: WindowRef, providedIn: "root" });
WindowRef = __decorate([
    Injectable({
        providedIn: 'root',
    }),
    __param(0, Inject(DOCUMENT))
], WindowRef);
export { WindowRef };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2luZG93LXJlZi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy93aW5kb3cvd2luZG93LXJlZi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxTQUFTLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxZQUFZLEVBQUUsb0JBQW9CLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQUsvRSxJQUFhLFNBQVMsR0FBdEIsTUFBYSxTQUFTO0lBR3BCLFlBQThCLFFBQVE7UUFDcEMsNkRBQTZEO1FBQzdELHVEQUF1RDtRQUN2RCxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUMzQixDQUFDO0lBRUQsSUFBSSxZQUFZO1FBQ2QsT0FBTyxPQUFPLE1BQU0sS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQzVELENBQUM7SUFFRCxJQUFJLGNBQWM7UUFDaEIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQzFFLENBQUM7SUFFRCxJQUFJLFlBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDeEUsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsSUFBSSxPQUFPO1FBQ1QsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDdEIsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDakI7YUFBTTtZQUNMLE9BQU8sU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUNoRCxZQUFZLENBQUMsR0FBRyxDQUFDLEVBQ2pCLFNBQVMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsRUFDeEMsb0JBQW9CLEVBQUUsQ0FDdkIsQ0FBQztTQUNIO0lBQ0gsQ0FBQztDQUNGLENBQUE7OzRDQW5DYyxNQUFNLFNBQUMsUUFBUTs7O0FBSGpCLFNBQVM7SUFIckIsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztJQUlhLFdBQUEsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0dBSGxCLFNBQVMsQ0FzQ3JCO1NBdENZLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZyb21FdmVudCwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgZGlzdGluY3RVbnRpbENoYW5nZWQsIHN0YXJ0V2l0aCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFdpbmRvd1JlZiB7XG4gIHJlYWRvbmx5IGRvY3VtZW50OiBEb2N1bWVudDtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KERPQ1VNRU5UKSBkb2N1bWVudCkge1xuICAgIC8vIGl0J3MgYSB3b3JrYXJvdW5kIHRvIGhhdmUgZG9jdW1lbnQgcHJvcGVydHkgcHJvcGVybHkgdHlwZWRcbiAgICAvLyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzE1NjQwXG4gICAgdGhpcy5kb2N1bWVudCA9IGRvY3VtZW50O1xuICB9XG5cbiAgZ2V0IG5hdGl2ZVdpbmRvdygpOiBXaW5kb3cge1xuICAgIHJldHVybiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGdldCBzZXNzaW9uU3RvcmFnZSgpOiBTdG9yYWdlIHtcbiAgICByZXR1cm4gdGhpcy5uYXRpdmVXaW5kb3cgPyB0aGlzLm5hdGl2ZVdpbmRvdy5zZXNzaW9uU3RvcmFnZSA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGdldCBsb2NhbFN0b3JhZ2UoKTogU3RvcmFnZSB7XG4gICAgcmV0dXJuIHRoaXMubmF0aXZlV2luZG93ID8gdGhpcy5uYXRpdmVXaW5kb3cubG9jYWxTdG9yYWdlIDogdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gb2JzZXJ2YWJsZSBmb3IgdGhlIHdpbmRvdyByZXNpemUgZXZlbnQgYW5kIGVtaXRzIGFuIGV2ZW50XG4gICAqIGV2ZXJ5IDMwMG1zIGluIGNhc2Ugb2YgcmVzaXppbmcuIEFuIGV2ZW50IGlzIHNpbXVsYXRlZCBpbml0aWFsbHkuXG4gICAqXG4gICAqIElmIHRoZXJlJ3Mgbm8gd2luZG93IG9iamVjdCBhdmFpbGFsZSAoaS5lLiBpbiBTU1IpLCBhIG51bGwgdmFsdWUgaXMgZW1pdHRlZC5cbiAgICovXG4gIGdldCByZXNpemUkKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgaWYgKCF0aGlzLm5hdGl2ZVdpbmRvdykge1xuICAgICAgcmV0dXJuIG9mKG51bGwpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZnJvbUV2ZW50KHRoaXMubmF0aXZlV2luZG93LCAncmVzaXplJykucGlwZShcbiAgICAgICAgZGVib3VuY2VUaW1lKDMwMCksXG4gICAgICAgIHN0YXJ0V2l0aCh7IHRhcmdldDogdGhpcy5uYXRpdmVXaW5kb3cgfSksXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcbiAgICAgICk7XG4gICAgfVxuICB9XG59XG4iXX0=
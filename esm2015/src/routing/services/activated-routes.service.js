import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map, shareReplay, startWith } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
/**
 * Helper service to expose all activated routes
 */
export class ActivatedRoutesService {
    constructor(router) {
        this.router = router;
        /**
         * Array of currently activated routes (from the root route to the leaf route).
         */
        this.routes$ = this.router.events.pipe(filter((event) => event instanceof NavigationEnd), 
        // tslint:disable-next-line: deprecation https://github.com/ReactiveX/rxjs/issues/4772
        startWith(undefined), // emit value for consumer who subscribed lately after NavigationEnd event
        map(() => {
            let route = this.router.routerState.snapshot.root;
            const routes = [route];
            // traverse to the leaf route:
            while ((route = route.firstChild)) {
                routes.push(route);
            }
            return routes;
        }), shareReplay({ bufferSize: 1, refCount: true }));
    }
}
ActivatedRoutesService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ActivatedRoutesService_Factory() { return new ActivatedRoutesService(i0.ɵɵinject(i1.Router)); }, token: ActivatedRoutesService, providedIn: "root" });
ActivatedRoutesService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
ActivatedRoutesService.ctorParameters = () => [
    { type: Router }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZhdGVkLXJvdXRlcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS9zcmMvcm91dGluZy9zZXJ2aWNlcy9hY3RpdmF0ZWQtcm91dGVzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQTBCLGFBQWEsRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVoRixPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQUVyRTs7R0FFRztBQUVILE1BQU0sT0FBTyxzQkFBc0I7SUFDakMsWUFBc0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFFcEM7O1dBRUc7UUFDTSxZQUFPLEdBRVosSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUN6QixNQUFNLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssWUFBWSxhQUFhLENBQUM7UUFDakQsc0ZBQXNGO1FBQ3RGLFNBQVMsQ0FBQyxTQUFTLENBQUMsRUFBRSwwRUFBMEU7UUFDaEcsR0FBRyxDQUFDLEdBQUcsRUFBRTtZQUNQLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDbEQsTUFBTSxNQUFNLEdBQTZCLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFakQsOEJBQThCO1lBQzlCLE9BQU8sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQyxFQUFFO2dCQUNqQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3BCO1lBRUQsT0FBTyxNQUFNLENBQUM7UUFDaEIsQ0FBQyxDQUFDLEVBQ0YsV0FBVyxDQUFDLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FDL0MsQ0FBQztJQXZCcUMsQ0FBQzs7OztZQUZ6QyxVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7WUFQYyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgTmF2aWdhdGlvbkVuZCwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwLCBzaGFyZVJlcGxheSwgc3RhcnRXaXRoIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG4vKipcbiAqIEhlbHBlciBzZXJ2aWNlIHRvIGV4cG9zZSBhbGwgYWN0aXZhdGVkIHJvdXRlc1xuICovXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIEFjdGl2YXRlZFJvdXRlc1NlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgcm91dGVyOiBSb3V0ZXIpIHt9XG5cbiAgLyoqXG4gICAqIEFycmF5IG9mIGN1cnJlbnRseSBhY3RpdmF0ZWQgcm91dGVzIChmcm9tIHRoZSByb290IHJvdXRlIHRvIHRoZSBsZWFmIHJvdXRlKS5cbiAgICovXG4gIHJlYWRvbmx5IHJvdXRlcyQ6IE9ic2VydmFibGU8XG4gICAgQWN0aXZhdGVkUm91dGVTbmFwc2hvdFtdXG4gID4gPSB0aGlzLnJvdXRlci5ldmVudHMucGlwZShcbiAgICBmaWx0ZXIoKGV2ZW50KSA9PiBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpLFxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogZGVwcmVjYXRpb24gaHR0cHM6Ly9naXRodWIuY29tL1JlYWN0aXZlWC9yeGpzL2lzc3Vlcy80NzcyXG4gICAgc3RhcnRXaXRoKHVuZGVmaW5lZCksIC8vIGVtaXQgdmFsdWUgZm9yIGNvbnN1bWVyIHdobyBzdWJzY3JpYmVkIGxhdGVseSBhZnRlciBOYXZpZ2F0aW9uRW5kIGV2ZW50XG4gICAgbWFwKCgpID0+IHtcbiAgICAgIGxldCByb3V0ZSA9IHRoaXMucm91dGVyLnJvdXRlclN0YXRlLnNuYXBzaG90LnJvb3Q7XG4gICAgICBjb25zdCByb3V0ZXM6IEFjdGl2YXRlZFJvdXRlU25hcHNob3RbXSA9IFtyb3V0ZV07XG5cbiAgICAgIC8vIHRyYXZlcnNlIHRvIHRoZSBsZWFmIHJvdXRlOlxuICAgICAgd2hpbGUgKChyb3V0ZSA9IHJvdXRlLmZpcnN0Q2hpbGQpKSB7XG4gICAgICAgIHJvdXRlcy5wdXNoKHJvdXRlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJvdXRlcztcbiAgICB9KSxcbiAgICBzaGFyZVJlcGxheSh7IGJ1ZmZlclNpemU6IDEsIHJlZkNvdW50OiB0cnVlIH0pXG4gICk7XG59XG4iXX0=
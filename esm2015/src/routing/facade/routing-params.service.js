import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, shareReplay } from 'rxjs/operators';
import { ActivatedRoutesService } from '../services/activated-routes.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../services/activated-routes.service";
/**
 * Service to expose all parameters for the router, including child routes.
 * This is convenient in case the parent route (component) requires awareness
 * of child routes parameters.
 */
export class RoutingParamsService {
    constructor(router, activatedRoutesService) {
        this.router = router;
        this.activatedRoutesService = activatedRoutesService;
        this.params$ = this.activatedRoutesService.routes$.pipe(map((routes) => this.findAllParam(routes)), shareReplay({ refCount: true, bufferSize: 1 }));
    }
    /**
     * Get the list of all parameters of the full route. This includes
     * active child routes.
     */
    getParams() {
        return this.params$;
    }
    findAllParam(routes) {
        return Object.assign({}, ...routes.map((route) => route.params));
    }
}
RoutingParamsService.ɵprov = i0.ɵɵdefineInjectable({ factory: function RoutingParamsService_Factory() { return new RoutingParamsService(i0.ɵɵinject(i1.Router), i0.ɵɵinject(i2.ActivatedRoutesService)); }, token: RoutingParamsService, providedIn: "root" });
RoutingParamsService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
RoutingParamsService.ctorParameters = () => [
    { type: Router },
    { type: ActivatedRoutesService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGluZy1wYXJhbXMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL3JvdXRpbmcvZmFjYWRlL3JvdXRpbmctcGFyYW1zLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQTBCLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRWpFLE9BQU8sRUFBRSxHQUFHLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7Ozs7QUFFOUU7Ozs7R0FJRztBQUVILE1BQU0sT0FBTyxvQkFBb0I7SUFRL0IsWUFDWSxNQUFjLEVBQ2Qsc0JBQThDO1FBRDlDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCO1FBVHZDLFlBQU8sR0FFckIsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQzNDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUMxQyxXQUFXLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUMvQyxDQUFDO0lBS0MsQ0FBQztJQUVKOzs7T0FHRztJQUNILFNBQVM7UUFDUCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQztJQUVTLFlBQVksQ0FDcEIsTUFBZ0M7UUFFaEMsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ25FLENBQUM7Ozs7WUExQkYsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7O1lBVkQsTUFBTTtZQUc5QixzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBzaGFyZVJlcGxheSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlc1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9hY3RpdmF0ZWQtcm91dGVzLnNlcnZpY2UnO1xuXG4vKipcbiAqIFNlcnZpY2UgdG8gZXhwb3NlIGFsbCBwYXJhbWV0ZXJzIGZvciB0aGUgcm91dGVyLCBpbmNsdWRpbmcgY2hpbGQgcm91dGVzLlxuICogVGhpcyBpcyBjb252ZW5pZW50IGluIGNhc2UgdGhlIHBhcmVudCByb3V0ZSAoY29tcG9uZW50KSByZXF1aXJlcyBhd2FyZW5lc3NcbiAqIG9mIGNoaWxkIHJvdXRlcyBwYXJhbWV0ZXJzLlxuICovXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIFJvdXRpbmdQYXJhbXNTZXJ2aWNlIHtcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IHBhcmFtcyQ6IE9ic2VydmFibGU8e1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZztcbiAgfT4gPSB0aGlzLmFjdGl2YXRlZFJvdXRlc1NlcnZpY2Uucm91dGVzJC5waXBlKFxuICAgIG1hcCgocm91dGVzKSA9PiB0aGlzLmZpbmRBbGxQYXJhbShyb3V0ZXMpKSxcbiAgICBzaGFyZVJlcGxheSh7IHJlZkNvdW50OiB0cnVlLCBidWZmZXJTaXplOiAxIH0pXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHJvdXRlcjogUm91dGVyLFxuICAgIHByb3RlY3RlZCBhY3RpdmF0ZWRSb3V0ZXNTZXJ2aWNlOiBBY3RpdmF0ZWRSb3V0ZXNTZXJ2aWNlXG4gICkge31cblxuICAvKipcbiAgICogR2V0IHRoZSBsaXN0IG9mIGFsbCBwYXJhbWV0ZXJzIG9mIHRoZSBmdWxsIHJvdXRlLiBUaGlzIGluY2x1ZGVzXG4gICAqIGFjdGl2ZSBjaGlsZCByb3V0ZXMuXG4gICAqL1xuICBnZXRQYXJhbXMoKTogT2JzZXJ2YWJsZTx7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9PiB7XG4gICAgcmV0dXJuIHRoaXMucGFyYW1zJDtcbiAgfVxuXG4gIHByb3RlY3RlZCBmaW5kQWxsUGFyYW0oXG4gICAgcm91dGVzOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90W11cbiAgKTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIC4uLnJvdXRlcy5tYXAoKHJvdXRlKSA9PiByb3V0ZS5wYXJhbXMpKTtcbiAgfVxufVxuIl19
import { InjectionToken, Provider } from '@angular/core';
import { RouterStateSnapshot } from '@angular/router';
import * as fromNgrxRouter from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';
import { RoutingConfigService } from '../../configurable-routes/routing-config.service';
import { ActivatedRouterStateSnapshot, RouterState, State } from '../routing-state';
import * as ɵngcc0 from '@angular/core';
export declare const initialState: RouterState;
export declare function getReducers(): ActionReducerMap<State>;
export declare function reducer(state: RouterState, action: any): RouterState;
export declare const reducerToken: InjectionToken<ActionReducerMap<State>>;
export declare const reducerProvider: Provider;
export declare class CustomSerializer implements fromNgrxRouter.RouterStateSerializer<ActivatedRouterStateSnapshot> {
    private routingConfig;
    serialize(routerState: RouterStateSnapshot): ActivatedRouterStateSnapshot;
    /**
     * Returns the semantic route name for given page label.
     *
     * *NOTE*: It works only for simple static urls that are equal to the page label
     * of cms-driven content page. For example: `/my-account/address-book`.
     *
     * It doesn't work for URLs with dynamic parameters. But such case can be handled
     * by reading the defined `data.cxRoute` from the Angular Routes.
     *
     * @param path path to be found in the routing config
     */
    private lookupSemanticRoute;
    constructor(routingConfig: RoutingConfigService);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CustomSerializer, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<CustomSerializer>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVyLnJlZHVjZXIuZC50cyIsInNvdXJjZXMiOlsicm91dGVyLnJlZHVjZXIuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQU1BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFCQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuLCBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyU3RhdGVTbmFwc2hvdCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgKiBhcyBmcm9tTmdyeFJvdXRlciBmcm9tICdAbmdyeC9yb3V0ZXItc3RvcmUnO1xuaW1wb3J0IHsgQWN0aW9uUmVkdWNlck1hcCB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IFJvdXRpbmdDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY29uZmlndXJhYmxlLXJvdXRlcy9yb3V0aW5nLWNvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlclN0YXRlU25hcHNob3QsIFJvdXRlclN0YXRlLCBTdGF0ZSB9IGZyb20gJy4uL3JvdXRpbmctc3RhdGUnO1xuZXhwb3J0IGRlY2xhcmUgY29uc3QgaW5pdGlhbFN0YXRlOiBSb3V0ZXJTdGF0ZTtcbmV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIGdldFJlZHVjZXJzKCk6IEFjdGlvblJlZHVjZXJNYXA8U3RhdGU+O1xuZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZTogUm91dGVyU3RhdGUsIGFjdGlvbjogYW55KTogUm91dGVyU3RhdGU7XG5leHBvcnQgZGVjbGFyZSBjb25zdCByZWR1Y2VyVG9rZW46IEluamVjdGlvblRva2VuPEFjdGlvblJlZHVjZXJNYXA8U3RhdGU+PjtcbmV4cG9ydCBkZWNsYXJlIGNvbnN0IHJlZHVjZXJQcm92aWRlcjogUHJvdmlkZXI7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDdXN0b21TZXJpYWxpemVyIGltcGxlbWVudHMgZnJvbU5ncnhSb3V0ZXIuUm91dGVyU3RhdGVTZXJpYWxpemVyPEFjdGl2YXRlZFJvdXRlclN0YXRlU25hcHNob3Q+IHtcbiAgICBwcml2YXRlIHJvdXRpbmdDb25maWc7XG4gICAgc2VyaWFsaXplKHJvdXRlclN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KTogQWN0aXZhdGVkUm91dGVyU3RhdGVTbmFwc2hvdDtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBzZW1hbnRpYyByb3V0ZSBuYW1lIGZvciBnaXZlbiBwYWdlIGxhYmVsLlxuICAgICAqXG4gICAgICogKk5PVEUqOiBJdCB3b3JrcyBvbmx5IGZvciBzaW1wbGUgc3RhdGljIHVybHMgdGhhdCBhcmUgZXF1YWwgdG8gdGhlIHBhZ2UgbGFiZWxcbiAgICAgKiBvZiBjbXMtZHJpdmVuIGNvbnRlbnQgcGFnZS4gRm9yIGV4YW1wbGU6IGAvbXktYWNjb3VudC9hZGRyZXNzLWJvb2tgLlxuICAgICAqXG4gICAgICogSXQgZG9lc24ndCB3b3JrIGZvciBVUkxzIHdpdGggZHluYW1pYyBwYXJhbWV0ZXJzLiBCdXQgc3VjaCBjYXNlIGNhbiBiZSBoYW5kbGVkXG4gICAgICogYnkgcmVhZGluZyB0aGUgZGVmaW5lZCBgZGF0YS5jeFJvdXRlYCBmcm9tIHRoZSBBbmd1bGFyIFJvdXRlcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBwYXRoIHBhdGggdG8gYmUgZm91bmQgaW4gdGhlIHJvdXRpbmcgY29uZmlnXG4gICAgICovXG4gICAgcHJpdmF0ZSBsb29rdXBTZW1hbnRpY1JvdXRlO1xuICAgIGNvbnN0cnVjdG9yKHJvdXRpbmdDb25maWc6IFJvdXRpbmdDb25maWdTZXJ2aWNlKTtcbn1cbiJdfQ==
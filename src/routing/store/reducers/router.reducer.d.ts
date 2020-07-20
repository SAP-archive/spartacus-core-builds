import { InjectionToken, Provider } from '@angular/core';
import { RouterStateSnapshot } from '@angular/router';
import * as fromNgrxRouter from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';
import { RoutingConfigService } from '../../configurable-routes/routing-config.service';
import { ActivatedRouterStateSnapshot, RouterState, State } from '../routing-state';
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
     * It doesn't work for cms-driven child routes, because the guessed page label
     * is longer than the real one (i.e. `/store-finder/view-all`). Only when backend
     * returns the correct one along with cms page data (i.e. `pageLabel: '/store-finder'`),
     * then it could be used. But it's too late for this serializer.
     *
     * This means that recognizing semantic route name of cms-driven child routes
     * is NOT SUPPORTED.
     *
     * @param path path to be found in the routing config
     */
    private lookupSemanticRoute;
    constructor(routingConfig: RoutingConfigService);
}

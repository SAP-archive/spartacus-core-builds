import { NavigationExtras } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { WindowRef } from '../../window/window-ref';
import { SemanticPathService } from '../configurable-routes/url-translation/semantic-path.service';
import { UrlCommands } from '../configurable-routes/url-translation/url-command';
import { PageContext } from '../models/page-context.model';
import { RouterState } from '../store/routing-state';
import { RoutingParamsService } from './routing-params.service';
export declare class RoutingService {
    protected store: Store<RouterState>;
    protected winRef: WindowRef;
    protected semanticPathService: SemanticPathService;
    protected routingParamsService: RoutingParamsService;
    constructor(store: Store<RouterState>, winRef: WindowRef, semanticPathService: SemanticPathService, routingParamsService: RoutingParamsService);
    /**
     * Get the list of all parameters of the full route. This includes
     * active child routes.
     */
    getParams(): Observable<{
        [key: string]: string;
    }>;
    /**
     * Get the current router state
     */
    getRouterState(): Observable<RouterState>;
    /**
     * Get the `PageContext` from the state
     */
    getPageContext(): Observable<PageContext>;
    /**
     * Get the next `PageContext` from the state
     */
    getNextPageContext(): Observable<PageContext>;
    /**
     * Get the `isNavigating` info from the state
     */
    isNavigating(): Observable<boolean>;
    /**
     * Navigation with a new state into history
     * @param commands: url commands
     * @param query
     * @param extras: Represents the extra options used during navigation.
     */
    go(commands: UrlCommands, query?: object, extras?: NavigationExtras): void;
    /**
     * Navigation using URL
     * @param url
     */
    goByUrl(url: string): void;
    /**
     * Navigating back
     */
    back(): void;
    /**
     * Navigating forward
     */
    forward(): void;
    /**
     * Navigation with a new state into history
     * @param path
     * @param query
     * @param extras: Represents the extra options used during navigation.
     */
    protected navigate(path: any[], query?: object, extras?: NavigationExtras): void;
}

import { NavigationExtras } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromStore from '../store';
import { PageContext } from '../models/page-context.model';
import { WindowRef } from '../../window/window-ref';
import { UrlCommands } from '../configurable-routes/url-translation/url-command';
import { UrlService } from '../configurable-routes/url-translation/url.service';
import { RouterState } from '../store/reducers/router.reducer';
export declare class RoutingService {
    private store;
    private winRef;
    private urlService;
    constructor(store: Store<fromStore.RouterState>, winRef: WindowRef, urlService: UrlService);
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
     * Get the redirect url from store
     */
    getRedirectUrl(): Observable<string>;
    /**
     * Remove the redirect url from store
     */
    clearRedirectUrl(): void;
    /**
     * Put redirct url into store
     * @param url: redirect url
     */
    saveRedirectUrl(url: string): void;
    /**
     * Navigation with a new state into history
     * @param path
     * @param query
     * @param extras: Represents the extra options used during navigation.
     */
    private navigate;
}

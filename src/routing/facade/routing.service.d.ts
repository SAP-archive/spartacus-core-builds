import { NavigationExtras } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromStore from '../store';
import { PageContext } from '../models/page-context.model';
import { WindowRef } from '../../window/window-ref';
import { TranslateUrlOptions } from '../configurable-routes/url-translation/translate-url-options';
import { UrlTranslationService } from '../configurable-routes/url-translation/url-translation.service';
export declare class RoutingService {
    private store;
    private winRef;
    private urlTranslator;
    constructor(store: Store<fromStore.RouterState>, winRef: WindowRef, urlTranslator: UrlTranslationService);
    /**
     * Get the current router state
     */
    getRouterState(): Observable<any>;
    /**
     * Get the `PageContext` from the state
     */
    getPageContext(): Observable<PageContext>;
    /**
     * Navigation with a new state into history
     * @param pathOrTranslateUrlOptions: Path or options to translate url
     * @param query
     * @param extras: Represents the extra options used during navigation.
     */
    go(pathOrTranslateUrlOptions: any[] | TranslateUrlOptions, query?: object, extras?: NavigationExtras): void;
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

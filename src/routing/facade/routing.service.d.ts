import { NavigationExtras } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { WindowRef } from '../../window/window-ref';
import { SemanticPathService } from '../configurable-routes/url-translation/semantic-path.service';
import { UrlCommands } from '../configurable-routes/url-translation/url-command';
import { PageContext } from '../models/page-context.model';
import { RouterState } from '../store/routing-state';
import * as ɵngcc0 from '@angular/core';
export declare class RoutingService {
    protected store: Store<RouterState>;
    protected winRef: WindowRef;
    protected semanticPathService: SemanticPathService;
    constructor(store: Store<RouterState>, winRef: WindowRef, semanticPathService: SemanticPathService);
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<RoutingService, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGluZy5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbInJvdXRpbmcuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7QUFRQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdEQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5hdmlnYXRpb25FeHRyYXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBXaW5kb3dSZWYgfSBmcm9tICcuLi8uLi93aW5kb3cvd2luZG93LXJlZic7XG5pbXBvcnQgeyBTZW1hbnRpY1BhdGhTZXJ2aWNlIH0gZnJvbSAnLi4vY29uZmlndXJhYmxlLXJvdXRlcy91cmwtdHJhbnNsYXRpb24vc2VtYW50aWMtcGF0aC5zZXJ2aWNlJztcbmltcG9ydCB7IFVybENvbW1hbmRzIH0gZnJvbSAnLi4vY29uZmlndXJhYmxlLXJvdXRlcy91cmwtdHJhbnNsYXRpb24vdXJsLWNvbW1hbmQnO1xuaW1wb3J0IHsgUGFnZUNvbnRleHQgfSBmcm9tICcuLi9tb2RlbHMvcGFnZS1jb250ZXh0Lm1vZGVsJztcbmltcG9ydCB7IFJvdXRlclN0YXRlIH0gZnJvbSAnLi4vc3RvcmUvcm91dGluZy1zdGF0ZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBSb3V0aW5nU2VydmljZSB7XG4gICAgcHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxSb3V0ZXJTdGF0ZT47XG4gICAgcHJvdGVjdGVkIHdpblJlZjogV2luZG93UmVmO1xuICAgIHByb3RlY3RlZCBzZW1hbnRpY1BhdGhTZXJ2aWNlOiBTZW1hbnRpY1BhdGhTZXJ2aWNlO1xuICAgIGNvbnN0cnVjdG9yKHN0b3JlOiBTdG9yZTxSb3V0ZXJTdGF0ZT4sIHdpblJlZjogV2luZG93UmVmLCBzZW1hbnRpY1BhdGhTZXJ2aWNlOiBTZW1hbnRpY1BhdGhTZXJ2aWNlKTtcbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGN1cnJlbnQgcm91dGVyIHN0YXRlXG4gICAgICovXG4gICAgZ2V0Um91dGVyU3RhdGUoKTogT2JzZXJ2YWJsZTxSb3V0ZXJTdGF0ZT47XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBgUGFnZUNvbnRleHRgIGZyb20gdGhlIHN0YXRlXG4gICAgICovXG4gICAgZ2V0UGFnZUNvbnRleHQoKTogT2JzZXJ2YWJsZTxQYWdlQ29udGV4dD47XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBuZXh0IGBQYWdlQ29udGV4dGAgZnJvbSB0aGUgc3RhdGVcbiAgICAgKi9cbiAgICBnZXROZXh0UGFnZUNvbnRleHQoKTogT2JzZXJ2YWJsZTxQYWdlQ29udGV4dD47XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBgaXNOYXZpZ2F0aW5nYCBpbmZvIGZyb20gdGhlIHN0YXRlXG4gICAgICovXG4gICAgaXNOYXZpZ2F0aW5nKCk6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgLyoqXG4gICAgICogTmF2aWdhdGlvbiB3aXRoIGEgbmV3IHN0YXRlIGludG8gaGlzdG9yeVxuICAgICAqIEBwYXJhbSBjb21tYW5kczogdXJsIGNvbW1hbmRzXG4gICAgICogQHBhcmFtIHF1ZXJ5XG4gICAgICogQHBhcmFtIGV4dHJhczogUmVwcmVzZW50cyB0aGUgZXh0cmEgb3B0aW9ucyB1c2VkIGR1cmluZyBuYXZpZ2F0aW9uLlxuICAgICAqL1xuICAgIGdvKGNvbW1hbmRzOiBVcmxDb21tYW5kcywgcXVlcnk/OiBvYmplY3QsIGV4dHJhcz86IE5hdmlnYXRpb25FeHRyYXMpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIE5hdmlnYXRpb24gdXNpbmcgVVJMXG4gICAgICogQHBhcmFtIHVybFxuICAgICAqL1xuICAgIGdvQnlVcmwodXJsOiBzdHJpbmcpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIE5hdmlnYXRpbmcgYmFja1xuICAgICAqL1xuICAgIGJhY2soKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBOYXZpZ2F0aW5nIGZvcndhcmRcbiAgICAgKi9cbiAgICBmb3J3YXJkKCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogTmF2aWdhdGlvbiB3aXRoIGEgbmV3IHN0YXRlIGludG8gaGlzdG9yeVxuICAgICAqIEBwYXJhbSBwYXRoXG4gICAgICogQHBhcmFtIHF1ZXJ5XG4gICAgICogQHBhcmFtIGV4dHJhczogUmVwcmVzZW50cyB0aGUgZXh0cmEgb3B0aW9ucyB1c2VkIGR1cmluZyBuYXZpZ2F0aW9uLlxuICAgICAqL1xuICAgIHByb3RlY3RlZCBuYXZpZ2F0ZShwYXRoOiBhbnlbXSwgcXVlcnk/OiBvYmplY3QsIGV4dHJhcz86IE5hdmlnYXRpb25FeHRyYXMpOiB2b2lkO1xufVxuIl19
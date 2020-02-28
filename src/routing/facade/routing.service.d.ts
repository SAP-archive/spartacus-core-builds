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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<RoutingService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGluZy5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbInJvdXRpbmcuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7QUFRQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdEQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOYXZpZ2F0aW9uRXh0cmFzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgV2luZG93UmVmIH0gZnJvbSAnLi4vLi4vd2luZG93L3dpbmRvdy1yZWYnO1xuaW1wb3J0IHsgU2VtYW50aWNQYXRoU2VydmljZSB9IGZyb20gJy4uL2NvbmZpZ3VyYWJsZS1yb3V0ZXMvdXJsLXRyYW5zbGF0aW9uL3NlbWFudGljLXBhdGguc2VydmljZSc7XG5pbXBvcnQgeyBVcmxDb21tYW5kcyB9IGZyb20gJy4uL2NvbmZpZ3VyYWJsZS1yb3V0ZXMvdXJsLXRyYW5zbGF0aW9uL3VybC1jb21tYW5kJztcbmltcG9ydCB7IFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbW9kZWxzL3BhZ2UtY29udGV4dC5tb2RlbCc7XG5pbXBvcnQgeyBSb3V0ZXJTdGF0ZSB9IGZyb20gJy4uL3N0b3JlL3JvdXRpbmctc3RhdGUnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgUm91dGluZ1NlcnZpY2Uge1xuICAgIHByb3RlY3RlZCBzdG9yZTogU3RvcmU8Um91dGVyU3RhdGU+O1xuICAgIHByb3RlY3RlZCB3aW5SZWY6IFdpbmRvd1JlZjtcbiAgICBwcm90ZWN0ZWQgc2VtYW50aWNQYXRoU2VydmljZTogU2VtYW50aWNQYXRoU2VydmljZTtcbiAgICBjb25zdHJ1Y3RvcihzdG9yZTogU3RvcmU8Um91dGVyU3RhdGU+LCB3aW5SZWY6IFdpbmRvd1JlZiwgc2VtYW50aWNQYXRoU2VydmljZTogU2VtYW50aWNQYXRoU2VydmljZSk7XG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBjdXJyZW50IHJvdXRlciBzdGF0ZVxuICAgICAqL1xuICAgIGdldFJvdXRlclN0YXRlKCk6IE9ic2VydmFibGU8Um91dGVyU3RhdGU+O1xuICAgIC8qKlxuICAgICAqIEdldCB0aGUgYFBhZ2VDb250ZXh0YCBmcm9tIHRoZSBzdGF0ZVxuICAgICAqL1xuICAgIGdldFBhZ2VDb250ZXh0KCk6IE9ic2VydmFibGU8UGFnZUNvbnRleHQ+O1xuICAgIC8qKlxuICAgICAqIEdldCB0aGUgbmV4dCBgUGFnZUNvbnRleHRgIGZyb20gdGhlIHN0YXRlXG4gICAgICovXG4gICAgZ2V0TmV4dFBhZ2VDb250ZXh0KCk6IE9ic2VydmFibGU8UGFnZUNvbnRleHQ+O1xuICAgIC8qKlxuICAgICAqIEdldCB0aGUgYGlzTmF2aWdhdGluZ2AgaW5mbyBmcm9tIHRoZSBzdGF0ZVxuICAgICAqL1xuICAgIGlzTmF2aWdhdGluZygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIC8qKlxuICAgICAqIE5hdmlnYXRpb24gd2l0aCBhIG5ldyBzdGF0ZSBpbnRvIGhpc3RvcnlcbiAgICAgKiBAcGFyYW0gY29tbWFuZHM6IHVybCBjb21tYW5kc1xuICAgICAqIEBwYXJhbSBxdWVyeVxuICAgICAqIEBwYXJhbSBleHRyYXM6IFJlcHJlc2VudHMgdGhlIGV4dHJhIG9wdGlvbnMgdXNlZCBkdXJpbmcgbmF2aWdhdGlvbi5cbiAgICAgKi9cbiAgICBnbyhjb21tYW5kczogVXJsQ29tbWFuZHMsIHF1ZXJ5Pzogb2JqZWN0LCBleHRyYXM/OiBOYXZpZ2F0aW9uRXh0cmFzKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBOYXZpZ2F0aW9uIHVzaW5nIFVSTFxuICAgICAqIEBwYXJhbSB1cmxcbiAgICAgKi9cbiAgICBnb0J5VXJsKHVybDogc3RyaW5nKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBOYXZpZ2F0aW5nIGJhY2tcbiAgICAgKi9cbiAgICBiYWNrKCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogTmF2aWdhdGluZyBmb3J3YXJkXG4gICAgICovXG4gICAgZm9yd2FyZCgpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIE5hdmlnYXRpb24gd2l0aCBhIG5ldyBzdGF0ZSBpbnRvIGhpc3RvcnlcbiAgICAgKiBAcGFyYW0gcGF0aFxuICAgICAqIEBwYXJhbSBxdWVyeVxuICAgICAqIEBwYXJhbSBleHRyYXM6IFJlcHJlc2VudHMgdGhlIGV4dHJhIG9wdGlvbnMgdXNlZCBkdXJpbmcgbmF2aWdhdGlvbi5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgbmF2aWdhdGUocGF0aDogYW55W10sIHF1ZXJ5Pzogb2JqZWN0LCBleHRyYXM/OiBOYXZpZ2F0aW9uRXh0cmFzKTogdm9pZDtcbn1cbiJdfQ==
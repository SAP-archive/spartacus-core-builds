import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { WindowRef } from '../../window/window-ref';
import { SemanticPathService } from '../configurable-routes/url-translation/semantic-path.service';
import { RoutingActions } from '../store/actions/index';
import { RoutingSelector } from '../store/selectors/index';
import { RoutingParamsService } from './routing-params.service';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
import * as i2 from "../../window/window-ref";
import * as i3 from "../configurable-routes/url-translation/semantic-path.service";
import * as i4 from "./routing-params.service";
export class RoutingService {
    constructor(store, winRef, semanticPathService, routingParamsService) {
        this.store = store;
        this.winRef = winRef;
        this.semanticPathService = semanticPathService;
        this.routingParamsService = routingParamsService;
    }
    /**
     * Get the list of all parameters of the full route. This includes
     * active child routes.
     */
    getParams() {
        var _a;
        return (_a = this.routingParamsService) === null || _a === void 0 ? void 0 : _a.getParams();
    }
    /**
     * Get the current router state
     */
    getRouterState() {
        return this.store.pipe(select(RoutingSelector.getRouterState));
    }
    /**
     * Get the `PageContext` from the state
     */
    getPageContext() {
        return this.store.pipe(select(RoutingSelector.getPageContext));
    }
    /**
     * Get the next `PageContext` from the state
     */
    getNextPageContext() {
        return this.store.pipe(select(RoutingSelector.getNextPageContext));
    }
    /**
     * Get the `isNavigating` info from the state
     */
    isNavigating() {
        return this.store.pipe(select(RoutingSelector.isNavigating));
    }
    /**
     * Navigation with a new state into history
     * @param commands: url commands
     * @param query
     * @param extras: Represents the extra options used during navigation.
     */
    go(commands, query, extras) {
        const path = this.semanticPathService.transform(commands);
        return this.navigate(path, query, extras);
    }
    /**
     * Navigation using URL
     * @param url
     */
    goByUrl(url) {
        this.store.dispatch(new RoutingActions.RouteGoByUrlAction(url));
    }
    /**
     * Navigating back
     */
    back() {
        const isLastPageInApp = this.winRef.document.referrer.includes(this.winRef.nativeWindow.location.origin);
        if (isLastPageInApp) {
            this.store.dispatch(new RoutingActions.RouteBackAction());
            return;
        }
        this.go(['/']);
        return;
    }
    /**
     * Navigating forward
     */
    forward() {
        this.store.dispatch(new RoutingActions.RouteForwardAction());
    }
    /**
     * Navigation with a new state into history
     * @param path
     * @param query
     * @param extras: Represents the extra options used during navigation.
     */
    navigate(path, query, extras) {
        this.store.dispatch(new RoutingActions.RouteGoAction({
            path,
            query,
            extras,
        }));
    }
}
RoutingService.ɵprov = i0.ɵɵdefineInjectable({ factory: function RoutingService_Factory() { return new RoutingService(i0.ɵɵinject(i1.Store), i0.ɵɵinject(i2.WindowRef), i0.ɵɵinject(i3.SemanticPathService), i0.ɵɵinject(i4.RoutingParamsService)); }, token: RoutingService, providedIn: "root" });
RoutingService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
RoutingService.ctorParameters = () => [
    { type: Store },
    { type: WindowRef },
    { type: SemanticPathService },
    { type: RoutingParamsService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGluZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS9zcmMvcm91dGluZy9mYWNhZGUvcm91dGluZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFNUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3BELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO0FBR25HLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUV4RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7OztBQUtoRSxNQUFNLE9BQU8sY0FBYztJQUN6QixZQUNZLEtBQXlCLEVBQ3pCLE1BQWlCLEVBQ2pCLG1CQUF3QyxFQUN4QyxvQkFBMkM7UUFIM0MsVUFBSyxHQUFMLEtBQUssQ0FBb0I7UUFDekIsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQUNqQix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ3hDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBdUI7SUFDcEQsQ0FBQztJQUVKOzs7T0FHRztJQUNILFNBQVM7O1FBQ1AsYUFBTyxJQUFJLENBQUMsb0JBQW9CLDBDQUFFLFNBQVMsR0FBRztJQUNoRCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxjQUFjO1FBQ1osT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUVEOztPQUVHO0lBQ0gsY0FBYztRQUNaLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFFRDs7T0FFRztJQUNILGtCQUFrQjtRQUNoQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFFRDs7T0FFRztJQUNILFlBQVk7UUFDVixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxFQUFFLENBQUMsUUFBcUIsRUFBRSxLQUFjLEVBQUUsTUFBeUI7UUFDakUsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUUxRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsT0FBTyxDQUFDLEdBQVc7UUFDakIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxjQUFjLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFJO1FBQ0YsTUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FDNUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FDekMsQ0FBQztRQUNGLElBQUksZUFBZSxFQUFFO1lBQ25CLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksY0FBYyxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUM7WUFDMUQsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDZixPQUFPO0lBQ1QsQ0FBQztJQUVEOztPQUVHO0lBQ0gsT0FBTztRQUNMLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksY0FBYyxDQUFDLGtCQUFrQixFQUFFLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDTyxRQUFRLENBQ2hCLElBQVcsRUFDWCxLQUFjLEVBQ2QsTUFBeUI7UUFFekIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ2pCLElBQUksY0FBYyxDQUFDLGFBQWEsQ0FBQztZQUMvQixJQUFJO1lBQ0osS0FBSztZQUNMLE1BQU07U0FDUCxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7Ozs7WUEzR0YsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7WUFiZ0IsS0FBSztZQUViLFNBQVM7WUFDVCxtQkFBbUI7WUFNbkIsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF2aWdhdGlvbkV4dHJhcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgV2luZG93UmVmIH0gZnJvbSAnLi4vLi4vd2luZG93L3dpbmRvdy1yZWYnO1xuaW1wb3J0IHsgU2VtYW50aWNQYXRoU2VydmljZSB9IGZyb20gJy4uL2NvbmZpZ3VyYWJsZS1yb3V0ZXMvdXJsLXRyYW5zbGF0aW9uL3NlbWFudGljLXBhdGguc2VydmljZSc7XG5pbXBvcnQgeyBVcmxDb21tYW5kcyB9IGZyb20gJy4uL2NvbmZpZ3VyYWJsZS1yb3V0ZXMvdXJsLXRyYW5zbGF0aW9uL3VybC1jb21tYW5kJztcbmltcG9ydCB7IFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbW9kZWxzL3BhZ2UtY29udGV4dC5tb2RlbCc7XG5pbXBvcnQgeyBSb3V0aW5nQWN0aW9ucyB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgUm91dGVyU3RhdGUgfSBmcm9tICcuLi9zdG9yZS9yb3V0aW5nLXN0YXRlJztcbmltcG9ydCB7IFJvdXRpbmdTZWxlY3RvciB9IGZyb20gJy4uL3N0b3JlL3NlbGVjdG9ycy9pbmRleCc7XG5pbXBvcnQgeyBSb3V0aW5nUGFyYW1zU2VydmljZSB9IGZyb20gJy4vcm91dGluZy1wYXJhbXMuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBSb3V0aW5nU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBzdG9yZTogU3RvcmU8Um91dGVyU3RhdGU+LFxuICAgIHByb3RlY3RlZCB3aW5SZWY6IFdpbmRvd1JlZixcbiAgICBwcm90ZWN0ZWQgc2VtYW50aWNQYXRoU2VydmljZTogU2VtYW50aWNQYXRoU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcm91dGluZ1BhcmFtc1NlcnZpY2U/OiBSb3V0aW5nUGFyYW1zU2VydmljZVxuICApIHt9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgbGlzdCBvZiBhbGwgcGFyYW1ldGVycyBvZiB0aGUgZnVsbCByb3V0ZS4gVGhpcyBpbmNsdWRlc1xuICAgKiBhY3RpdmUgY2hpbGQgcm91dGVzLlxuICAgKi9cbiAgZ2V0UGFyYW1zKCk6IE9ic2VydmFibGU8eyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfT4ge1xuICAgIHJldHVybiB0aGlzLnJvdXRpbmdQYXJhbXNTZXJ2aWNlPy5nZXRQYXJhbXMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGN1cnJlbnQgcm91dGVyIHN0YXRlXG4gICAqL1xuICBnZXRSb3V0ZXJTdGF0ZSgpOiBPYnNlcnZhYmxlPFJvdXRlclN0YXRlPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoUm91dGluZ1NlbGVjdG9yLmdldFJvdXRlclN0YXRlKSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBgUGFnZUNvbnRleHRgIGZyb20gdGhlIHN0YXRlXG4gICAqL1xuICBnZXRQYWdlQ29udGV4dCgpOiBPYnNlcnZhYmxlPFBhZ2VDb250ZXh0PiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoUm91dGluZ1NlbGVjdG9yLmdldFBhZ2VDb250ZXh0KSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBuZXh0IGBQYWdlQ29udGV4dGAgZnJvbSB0aGUgc3RhdGVcbiAgICovXG4gIGdldE5leHRQYWdlQ29udGV4dCgpOiBPYnNlcnZhYmxlPFBhZ2VDb250ZXh0PiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoUm91dGluZ1NlbGVjdG9yLmdldE5leHRQYWdlQ29udGV4dCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgYGlzTmF2aWdhdGluZ2AgaW5mbyBmcm9tIHRoZSBzdGF0ZVxuICAgKi9cbiAgaXNOYXZpZ2F0aW5nKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KFJvdXRpbmdTZWxlY3Rvci5pc05hdmlnYXRpbmcpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBOYXZpZ2F0aW9uIHdpdGggYSBuZXcgc3RhdGUgaW50byBoaXN0b3J5XG4gICAqIEBwYXJhbSBjb21tYW5kczogdXJsIGNvbW1hbmRzXG4gICAqIEBwYXJhbSBxdWVyeVxuICAgKiBAcGFyYW0gZXh0cmFzOiBSZXByZXNlbnRzIHRoZSBleHRyYSBvcHRpb25zIHVzZWQgZHVyaW5nIG5hdmlnYXRpb24uXG4gICAqL1xuICBnbyhjb21tYW5kczogVXJsQ29tbWFuZHMsIHF1ZXJ5Pzogb2JqZWN0LCBleHRyYXM/OiBOYXZpZ2F0aW9uRXh0cmFzKTogdm9pZCB7XG4gICAgY29uc3QgcGF0aCA9IHRoaXMuc2VtYW50aWNQYXRoU2VydmljZS50cmFuc2Zvcm0oY29tbWFuZHMpO1xuXG4gICAgcmV0dXJuIHRoaXMubmF2aWdhdGUocGF0aCwgcXVlcnksIGV4dHJhcyk7XG4gIH1cblxuICAvKipcbiAgICogTmF2aWdhdGlvbiB1c2luZyBVUkxcbiAgICogQHBhcmFtIHVybFxuICAgKi9cbiAgZ29CeVVybCh1cmw6IHN0cmluZykge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFJvdXRpbmdBY3Rpb25zLlJvdXRlR29CeVVybEFjdGlvbih1cmwpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBOYXZpZ2F0aW5nIGJhY2tcbiAgICovXG4gIGJhY2soKTogdm9pZCB7XG4gICAgY29uc3QgaXNMYXN0UGFnZUluQXBwID0gdGhpcy53aW5SZWYuZG9jdW1lbnQucmVmZXJyZXIuaW5jbHVkZXMoXG4gICAgICB0aGlzLndpblJlZi5uYXRpdmVXaW5kb3cubG9jYXRpb24ub3JpZ2luXG4gICAgKTtcbiAgICBpZiAoaXNMYXN0UGFnZUluQXBwKSB7XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBSb3V0aW5nQWN0aW9ucy5Sb3V0ZUJhY2tBY3Rpb24oKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZ28oWycvJ10pO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBOYXZpZ2F0aW5nIGZvcndhcmRcbiAgICovXG4gIGZvcndhcmQoKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgUm91dGluZ0FjdGlvbnMuUm91dGVGb3J3YXJkQWN0aW9uKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIE5hdmlnYXRpb24gd2l0aCBhIG5ldyBzdGF0ZSBpbnRvIGhpc3RvcnlcbiAgICogQHBhcmFtIHBhdGhcbiAgICogQHBhcmFtIHF1ZXJ5XG4gICAqIEBwYXJhbSBleHRyYXM6IFJlcHJlc2VudHMgdGhlIGV4dHJhIG9wdGlvbnMgdXNlZCBkdXJpbmcgbmF2aWdhdGlvbi5cbiAgICovXG4gIHByb3RlY3RlZCBuYXZpZ2F0ZShcbiAgICBwYXRoOiBhbnlbXSxcbiAgICBxdWVyeT86IG9iamVjdCxcbiAgICBleHRyYXM/OiBOYXZpZ2F0aW9uRXh0cmFzXG4gICk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgUm91dGluZ0FjdGlvbnMuUm91dGVHb0FjdGlvbih7XG4gICAgICAgIHBhdGgsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBleHRyYXMsXG4gICAgICB9KVxuICAgICk7XG4gIH1cbn1cbiJdfQ==
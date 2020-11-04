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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGluZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS9zcmMvcm91dGluZy9mYWNhZGUvcm91dGluZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFNUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3BELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDhEQUE4RCxDQUFDO0FBR25HLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUV4RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0QsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7OztBQUtoRSxNQUFNLE9BQU8sY0FBYztJQUN6QixZQUNZLEtBQXlCLEVBQ3pCLE1BQWlCLEVBQ2pCLG1CQUF3QyxFQUN4QyxvQkFBMEM7UUFIMUMsVUFBSyxHQUFMLEtBQUssQ0FBb0I7UUFDekIsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQUNqQix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ3hDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7SUFDbkQsQ0FBQztJQUVKOzs7T0FHRztJQUNILFNBQVM7O1FBQ1AsYUFBTyxJQUFJLENBQUMsb0JBQW9CLDBDQUFFLFNBQVMsR0FBRztJQUNoRCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxjQUFjO1FBQ1osT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUVEOztPQUVHO0lBQ0gsY0FBYztRQUNaLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFFRDs7T0FFRztJQUNILGtCQUFrQjtRQUNoQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFFRDs7T0FFRztJQUNILFlBQVk7UUFDVixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxFQUFFLENBQUMsUUFBcUIsRUFBRSxLQUFjLEVBQUUsTUFBeUI7UUFDakUsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUUxRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsT0FBTyxDQUFDLEdBQVc7UUFDakIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxjQUFjLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFJO1FBQ0YsTUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FDNUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FDekMsQ0FBQztRQUNGLElBQUksZUFBZSxFQUFFO1lBQ25CLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksY0FBYyxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUM7WUFDMUQsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDZixPQUFPO0lBQ1QsQ0FBQztJQUVEOztPQUVHO0lBQ0gsT0FBTztRQUNMLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksY0FBYyxDQUFDLGtCQUFrQixFQUFFLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDTyxRQUFRLENBQ2hCLElBQVcsRUFDWCxLQUFjLEVBQ2QsTUFBeUI7UUFFekIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ2pCLElBQUksY0FBYyxDQUFDLGFBQWEsQ0FBQztZQUMvQixJQUFJO1lBQ0osS0FBSztZQUNMLE1BQU07U0FDUCxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7Ozs7WUEzR0YsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7WUFiZ0IsS0FBSztZQUViLFNBQVM7WUFDVCxtQkFBbUI7WUFNbkIsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF2aWdhdGlvbkV4dHJhcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgV2luZG93UmVmIH0gZnJvbSAnLi4vLi4vd2luZG93L3dpbmRvdy1yZWYnO1xuaW1wb3J0IHsgU2VtYW50aWNQYXRoU2VydmljZSB9IGZyb20gJy4uL2NvbmZpZ3VyYWJsZS1yb3V0ZXMvdXJsLXRyYW5zbGF0aW9uL3NlbWFudGljLXBhdGguc2VydmljZSc7XG5pbXBvcnQgeyBVcmxDb21tYW5kcyB9IGZyb20gJy4uL2NvbmZpZ3VyYWJsZS1yb3V0ZXMvdXJsLXRyYW5zbGF0aW9uL3VybC1jb21tYW5kJztcbmltcG9ydCB7IFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbW9kZWxzL3BhZ2UtY29udGV4dC5tb2RlbCc7XG5pbXBvcnQgeyBSb3V0aW5nQWN0aW9ucyB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgUm91dGVyU3RhdGUgfSBmcm9tICcuLi9zdG9yZS9yb3V0aW5nLXN0YXRlJztcbmltcG9ydCB7IFJvdXRpbmdTZWxlY3RvciB9IGZyb20gJy4uL3N0b3JlL3NlbGVjdG9ycy9pbmRleCc7XG5pbXBvcnQgeyBSb3V0aW5nUGFyYW1zU2VydmljZSB9IGZyb20gJy4vcm91dGluZy1wYXJhbXMuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBSb3V0aW5nU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBzdG9yZTogU3RvcmU8Um91dGVyU3RhdGU+LFxuICAgIHByb3RlY3RlZCB3aW5SZWY6IFdpbmRvd1JlZixcbiAgICBwcm90ZWN0ZWQgc2VtYW50aWNQYXRoU2VydmljZTogU2VtYW50aWNQYXRoU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcm91dGluZ1BhcmFtc1NlcnZpY2U6IFJvdXRpbmdQYXJhbXNTZXJ2aWNlXG4gICkge31cblxuICAvKipcbiAgICogR2V0IHRoZSBsaXN0IG9mIGFsbCBwYXJhbWV0ZXJzIG9mIHRoZSBmdWxsIHJvdXRlLiBUaGlzIGluY2x1ZGVzXG4gICAqIGFjdGl2ZSBjaGlsZCByb3V0ZXMuXG4gICAqL1xuICBnZXRQYXJhbXMoKTogT2JzZXJ2YWJsZTx7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9PiB7XG4gICAgcmV0dXJuIHRoaXMucm91dGluZ1BhcmFtc1NlcnZpY2U/LmdldFBhcmFtcygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgY3VycmVudCByb3V0ZXIgc3RhdGVcbiAgICovXG4gIGdldFJvdXRlclN0YXRlKCk6IE9ic2VydmFibGU8Um91dGVyU3RhdGU+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChSb3V0aW5nU2VsZWN0b3IuZ2V0Um91dGVyU3RhdGUpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGBQYWdlQ29udGV4dGAgZnJvbSB0aGUgc3RhdGVcbiAgICovXG4gIGdldFBhZ2VDb250ZXh0KCk6IE9ic2VydmFibGU8UGFnZUNvbnRleHQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChSb3V0aW5nU2VsZWN0b3IuZ2V0UGFnZUNvbnRleHQpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIG5leHQgYFBhZ2VDb250ZXh0YCBmcm9tIHRoZSBzdGF0ZVxuICAgKi9cbiAgZ2V0TmV4dFBhZ2VDb250ZXh0KCk6IE9ic2VydmFibGU8UGFnZUNvbnRleHQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChSb3V0aW5nU2VsZWN0b3IuZ2V0TmV4dFBhZ2VDb250ZXh0KSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBgaXNOYXZpZ2F0aW5nYCBpbmZvIGZyb20gdGhlIHN0YXRlXG4gICAqL1xuICBpc05hdmlnYXRpbmcoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoUm91dGluZ1NlbGVjdG9yLmlzTmF2aWdhdGluZykpO1xuICB9XG5cbiAgLyoqXG4gICAqIE5hdmlnYXRpb24gd2l0aCBhIG5ldyBzdGF0ZSBpbnRvIGhpc3RvcnlcbiAgICogQHBhcmFtIGNvbW1hbmRzOiB1cmwgY29tbWFuZHNcbiAgICogQHBhcmFtIHF1ZXJ5XG4gICAqIEBwYXJhbSBleHRyYXM6IFJlcHJlc2VudHMgdGhlIGV4dHJhIG9wdGlvbnMgdXNlZCBkdXJpbmcgbmF2aWdhdGlvbi5cbiAgICovXG4gIGdvKGNvbW1hbmRzOiBVcmxDb21tYW5kcywgcXVlcnk/OiBvYmplY3QsIGV4dHJhcz86IE5hdmlnYXRpb25FeHRyYXMpOiB2b2lkIHtcbiAgICBjb25zdCBwYXRoID0gdGhpcy5zZW1hbnRpY1BhdGhTZXJ2aWNlLnRyYW5zZm9ybShjb21tYW5kcyk7XG5cbiAgICByZXR1cm4gdGhpcy5uYXZpZ2F0ZShwYXRoLCBxdWVyeSwgZXh0cmFzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBOYXZpZ2F0aW9uIHVzaW5nIFVSTFxuICAgKiBAcGFyYW0gdXJsXG4gICAqL1xuICBnb0J5VXJsKHVybDogc3RyaW5nKSB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgUm91dGluZ0FjdGlvbnMuUm91dGVHb0J5VXJsQWN0aW9uKHVybCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIE5hdmlnYXRpbmcgYmFja1xuICAgKi9cbiAgYmFjaygpOiB2b2lkIHtcbiAgICBjb25zdCBpc0xhc3RQYWdlSW5BcHAgPSB0aGlzLndpblJlZi5kb2N1bWVudC5yZWZlcnJlci5pbmNsdWRlcyhcbiAgICAgIHRoaXMud2luUmVmLm5hdGl2ZVdpbmRvdy5sb2NhdGlvbi5vcmlnaW5cbiAgICApO1xuICAgIGlmIChpc0xhc3RQYWdlSW5BcHApIHtcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFJvdXRpbmdBY3Rpb25zLlJvdXRlQmFja0FjdGlvbigpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5nbyhbJy8nXSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIE5hdmlnYXRpbmcgZm9yd2FyZFxuICAgKi9cbiAgZm9yd2FyZCgpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBSb3V0aW5nQWN0aW9ucy5Sb3V0ZUZvcndhcmRBY3Rpb24oKSk7XG4gIH1cblxuICAvKipcbiAgICogTmF2aWdhdGlvbiB3aXRoIGEgbmV3IHN0YXRlIGludG8gaGlzdG9yeVxuICAgKiBAcGFyYW0gcGF0aFxuICAgKiBAcGFyYW0gcXVlcnlcbiAgICogQHBhcmFtIGV4dHJhczogUmVwcmVzZW50cyB0aGUgZXh0cmEgb3B0aW9ucyB1c2VkIGR1cmluZyBuYXZpZ2F0aW9uLlxuICAgKi9cbiAgcHJvdGVjdGVkIG5hdmlnYXRlKFxuICAgIHBhdGg6IGFueVtdLFxuICAgIHF1ZXJ5Pzogb2JqZWN0LFxuICAgIGV4dHJhcz86IE5hdmlnYXRpb25FeHRyYXNcbiAgKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBSb3V0aW5nQWN0aW9ucy5Sb3V0ZUdvQWN0aW9uKHtcbiAgICAgICAgcGF0aCxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGV4dHJhcyxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxufVxuIl19
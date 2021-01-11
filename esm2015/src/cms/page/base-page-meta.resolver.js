import { Injectable } from '@angular/core';
import { combineLatest, defer } from 'rxjs';
import { filter, map, shareReplay } from 'rxjs/operators';
import { TranslationService } from '../../i18n/translation.service';
import { CmsService } from '../facade/cms.service';
import { RoutingPageMetaResolver } from './routing/routing-page-meta.resolver';
import * as i0 from "@angular/core";
import * as i1 from "../facade/cms.service";
import * as i2 from "../../i18n/translation.service";
import * as i3 from "./routing/routing-page-meta.resolver";
export class BasePageMetaResolver {
    constructor(cmsService, translation, routingPageMetaResolver) {
        this.cmsService = cmsService;
        this.translation = translation;
        this.routingPageMetaResolver = routingPageMetaResolver;
        /**
         * Helper to provide access to the current CMS page
         */
        this.page$ = defer(() => this.cmsService.getCurrentPage()).pipe(filter((p) => Boolean(p)));
        this.title$ = this.page$.pipe(map((p) => p.title));
        this.robots$ = this.page$.pipe(map((page) => page.robots));
        /**
         * Breadcrumb for the home page.
         */
        this.homeBreadcrumb$ = this.translation
            .translate('common.home')
            .pipe(map((label) => [{ label: label, link: '/' }]));
        /**
         * All the resolved breadcrumbs (including those from Angular child routes).
         */
        this.breadcrumb$ = combineLatest([
            this.homeBreadcrumb$,
            defer(() => this.routingPageMetaResolver.resolveBreadcrumbs()),
        ]).pipe(map((breadcrumbs) => breadcrumbs.flat()), shareReplay({ bufferSize: 1, refCount: true }));
    }
    resolveTitle() {
        return this.title$;
    }
    resolveBreadcrumbs() {
        return this.breadcrumb$;
    }
    resolveRobots() {
        return this.robots$;
    }
}
BasePageMetaResolver.ɵprov = i0.ɵɵdefineInjectable({ factory: function BasePageMetaResolver_Factory() { return new BasePageMetaResolver(i0.ɵɵinject(i1.CmsService), i0.ɵɵinject(i2.TranslationService), i0.ɵɵinject(i3.RoutingPageMetaResolver)); }, token: BasePageMetaResolver, providedIn: "root" });
BasePageMetaResolver.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
BasePageMetaResolver.ctorParameters = () => [
    { type: CmsService },
    { type: TranslationService },
    { type: RoutingPageMetaResolver }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1wYWdlLW1ldGEucmVzb2x2ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3NyYy9jbXMvcGFnZS9iYXNlLXBhZ2UtbWV0YS5yZXNvbHZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzFELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQU9uRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQzs7Ozs7QUFLL0UsTUFBTSxPQUFPLG9CQUFvQjtJQUUvQixZQUNZLFVBQXNCLEVBQ3RCLFdBQStCLEVBQy9CLHVCQUFnRDtRQUZoRCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGdCQUFXLEdBQVgsV0FBVyxDQUFvQjtRQUMvQiw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO1FBRzVEOztXQUVHO1FBQ08sVUFBSyxHQUFxQixLQUFLLENBQUMsR0FBRyxFQUFFLENBQzdDLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxFQUFFLENBQ2pDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUV4QixXQUFNLEdBQXVCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDbEUsWUFBTyxHQUFpQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDL0QsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQzNCLENBQUM7UUFFRjs7V0FFRztRQUNPLG9CQUFlLEdBRXJCLElBQUksQ0FBQyxXQUFXO2FBQ2pCLFNBQVMsQ0FBQyxhQUFhLENBQUM7YUFDeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFxQixDQUFDLENBQUMsQ0FBQztRQUUzRTs7V0FFRztRQUNPLGdCQUFXLEdBQWlDLGFBQWEsQ0FBQztZQUNsRSxJQUFJLENBQUMsZUFBZTtZQUNwQixLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLGtCQUFrQixFQUFFLENBQUM7U0FDL0QsQ0FBQyxDQUFDLElBQUksQ0FDTCxHQUFHLENBQUMsQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUN4QyxXQUFXLENBQUMsRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUMvQyxDQUFDO0lBaENDLENBQUM7SUFrQ0osWUFBWTtRQUNWLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0lBRUQsa0JBQWtCO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDO0lBRUQsYUFBYTtRQUNYLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDOzs7O1lBckRGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O1lBWFEsVUFBVTtZQURWLGtCQUFrQjtZQVFsQix1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBkZWZlciwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHNoYXJlUmVwbGF5IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgVHJhbnNsYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vaTE4bi90cmFuc2xhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IENtc1NlcnZpY2UgfSBmcm9tICcuLi9mYWNhZGUvY21zLnNlcnZpY2UnO1xuaW1wb3J0IHsgQnJlYWRjcnVtYk1ldGEsIFBhZ2UsIFBhZ2VSb2JvdHNNZXRhIH0gZnJvbSAnLi4vbW9kZWwvcGFnZS5tb2RlbCc7XG5pbXBvcnQge1xuICBQYWdlQnJlYWRjcnVtYlJlc29sdmVyLFxuICBQYWdlUm9ib3RzUmVzb2x2ZXIsXG4gIFBhZ2VUaXRsZVJlc29sdmVyLFxufSBmcm9tICcuL3BhZ2UucmVzb2x2ZXJzJztcbmltcG9ydCB7IFJvdXRpbmdQYWdlTWV0YVJlc29sdmVyIH0gZnJvbSAnLi9yb3V0aW5nL3JvdXRpbmctcGFnZS1tZXRhLnJlc29sdmVyJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEJhc2VQYWdlTWV0YVJlc29sdmVyXG4gIGltcGxlbWVudHMgUGFnZVRpdGxlUmVzb2x2ZXIsIFBhZ2VCcmVhZGNydW1iUmVzb2x2ZXIsIFBhZ2VSb2JvdHNSZXNvbHZlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjbXNTZXJ2aWNlOiBDbXNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCB0cmFuc2xhdGlvbjogVHJhbnNsYXRpb25TZXJ2aWNlLFxuICAgIHByb3RlY3RlZCByb3V0aW5nUGFnZU1ldGFSZXNvbHZlcjogUm91dGluZ1BhZ2VNZXRhUmVzb2x2ZXJcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBIZWxwZXIgdG8gcHJvdmlkZSBhY2Nlc3MgdG8gdGhlIGN1cnJlbnQgQ01TIHBhZ2VcbiAgICovXG4gIHByb3RlY3RlZCBwYWdlJDogT2JzZXJ2YWJsZTxQYWdlPiA9IGRlZmVyKCgpID0+XG4gICAgdGhpcy5jbXNTZXJ2aWNlLmdldEN1cnJlbnRQYWdlKClcbiAgKS5waXBlKGZpbHRlcigocCkgPT4gQm9vbGVhbihwKSkpO1xuXG4gIHByb3RlY3RlZCB0aXRsZSQ6IE9ic2VydmFibGU8c3RyaW5nPiA9IHRoaXMucGFnZSQucGlwZShtYXAoKHApID0+IHAudGl0bGUpKTtcbiAgcHJvdGVjdGVkIHJvYm90cyQ6IE9ic2VydmFibGU8UGFnZVJvYm90c01ldGFbXT4gPSB0aGlzLnBhZ2UkLnBpcGUoXG4gICAgbWFwKChwYWdlKSA9PiBwYWdlLnJvYm90cylcbiAgKTtcblxuICAvKipcbiAgICogQnJlYWRjcnVtYiBmb3IgdGhlIGhvbWUgcGFnZS5cbiAgICovXG4gIHByb3RlY3RlZCBob21lQnJlYWRjcnVtYiQ6IE9ic2VydmFibGU8XG4gICAgQnJlYWRjcnVtYk1ldGFbXVxuICA+ID0gdGhpcy50cmFuc2xhdGlvblxuICAgIC50cmFuc2xhdGUoJ2NvbW1vbi5ob21lJylcbiAgICAucGlwZShtYXAoKGxhYmVsKSA9PiBbeyBsYWJlbDogbGFiZWwsIGxpbms6ICcvJyB9XSBhcyBCcmVhZGNydW1iTWV0YVtdKSk7XG5cbiAgLyoqXG4gICAqIEFsbCB0aGUgcmVzb2x2ZWQgYnJlYWRjcnVtYnMgKGluY2x1ZGluZyB0aG9zZSBmcm9tIEFuZ3VsYXIgY2hpbGQgcm91dGVzKS5cbiAgICovXG4gIHByb3RlY3RlZCBicmVhZGNydW1iJDogT2JzZXJ2YWJsZTxCcmVhZGNydW1iTWV0YVtdPiA9IGNvbWJpbmVMYXRlc3QoW1xuICAgIHRoaXMuaG9tZUJyZWFkY3J1bWIkLFxuICAgIGRlZmVyKCgpID0+IHRoaXMucm91dGluZ1BhZ2VNZXRhUmVzb2x2ZXIucmVzb2x2ZUJyZWFkY3J1bWJzKCkpLFxuICBdKS5waXBlKFxuICAgIG1hcCgoYnJlYWRjcnVtYnMpID0+IGJyZWFkY3J1bWJzLmZsYXQoKSksXG4gICAgc2hhcmVSZXBsYXkoeyBidWZmZXJTaXplOiAxLCByZWZDb3VudDogdHJ1ZSB9KVxuICApO1xuXG4gIHJlc29sdmVUaXRsZSgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLnRpdGxlJDtcbiAgfVxuXG4gIHJlc29sdmVCcmVhZGNydW1icygpOiBPYnNlcnZhYmxlPEJyZWFkY3J1bWJNZXRhW10+IHtcbiAgICByZXR1cm4gdGhpcy5icmVhZGNydW1iJDtcbiAgfVxuXG4gIHJlc29sdmVSb2JvdHMoKTogT2JzZXJ2YWJsZTxQYWdlUm9ib3RzTWV0YVtdPiB7XG4gICAgcmV0dXJuIHRoaXMucm9ib3RzJDtcbiAgfVxufVxuIl19
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { TranslationService } from '../../../i18n/translation.service';
import * as i0 from "@angular/core";
import * as i1 from "../../../i18n/translation.service";
/**
 * Resolves the breadcrumb for the Angular ActivatedRouteSnapshot
 */
export class DefaultRoutePageMetaResolver {
    constructor(translation) {
        this.translation = translation;
    }
    /**
     * Resolves breadcrumb based on the given url and the breadcrumb config.
     *
     * - When breadcrumb config is empty, it returns an empty breadcrumb.
     * - When breadcrumb config is a string or object with `i18n` property,
     *    it translates it and use as a label of the returned breadcrumb.
     * - When breadcrumb config is an object with property `raw`, then
     *    it's used as a label of the returned breadcrumb.
     */
    resolveBreadcrumbs({ url, pageMetaConfig, }) {
        const breadcrumbConfig = pageMetaConfig === null || pageMetaConfig === void 0 ? void 0 : pageMetaConfig.breadcrumb;
        if (!breadcrumbConfig) {
            return of([]);
        }
        if (typeof breadcrumbConfig !== 'string' && breadcrumbConfig.raw) {
            return of([{ link: url, label: breadcrumbConfig.raw }]);
        }
        return this.translateBreadcrumbLabel(breadcrumbConfig).pipe(map((label) => [{ label, link: url }]));
    }
    /**
     * Translates the configured breadcrumb label
     */
    translateBreadcrumbLabel(breadcrumbConfig) {
        const i18nKey = typeof breadcrumbConfig === 'string'
            ? breadcrumbConfig
            : breadcrumbConfig.i18n;
        return this.getParams().pipe(switchMap((params) => this.translation.translate(i18nKey, params !== null && params !== void 0 ? params : {})));
    }
    /**
     * Resolves dynamic data for the whole resolver.
     */
    getParams() {
        return of({});
    }
}
DefaultRoutePageMetaResolver.ɵprov = i0.ɵɵdefineInjectable({ factory: function DefaultRoutePageMetaResolver_Factory() { return new DefaultRoutePageMetaResolver(i0.ɵɵinject(i1.TranslationService)); }, token: DefaultRoutePageMetaResolver, providedIn: "root" });
DefaultRoutePageMetaResolver.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
DefaultRoutePageMetaResolver.ctorParameters = () => [
    { type: TranslationService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1yb3V0ZS1wYWdlLW1ldGEucmVzb2x2ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3NyYy9jbXMvcGFnZS9yb3V0aW5nL2RlZmF1bHQtcm91dGUtcGFnZS1tZXRhLnJlc29sdmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDOzs7QUFRdkU7O0dBRUc7QUFFSCxNQUFNLE9BQWdCLDRCQUE0QjtJQUVoRCxZQUFzQixXQUErQjtRQUEvQixnQkFBVyxHQUFYLFdBQVcsQ0FBb0I7SUFBRyxDQUFDO0lBRXpEOzs7Ozs7OztPQVFHO0lBQ0gsa0JBQWtCLENBQUMsRUFDakIsR0FBRyxFQUNILGNBQWMsR0FDZ0I7UUFDOUIsTUFBTSxnQkFBZ0IsR0FBRyxjQUFjLGFBQWQsY0FBYyx1QkFBZCxjQUFjLENBQUUsVUFBVSxDQUFDO1FBRXBELElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUNyQixPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNmO1FBRUQsSUFBSSxPQUFPLGdCQUFnQixLQUFLLFFBQVEsSUFBSSxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUU7WUFDaEUsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLGdCQUFnQixDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUN6RDtRQUVELE9BQU8sSUFBSSxDQUFDLHdCQUF3QixDQUFDLGdCQUFnQixDQUFDLENBQUMsSUFBSSxDQUN6RCxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FDdkMsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNPLHdCQUF3QixDQUNoQyxnQkFBZ0Q7UUFFaEQsTUFBTSxPQUFPLEdBQ1gsT0FBTyxnQkFBZ0IsS0FBSyxRQUFRO1lBQ2xDLENBQUMsQ0FBQyxnQkFBZ0I7WUFDbEIsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQztRQUU1QixPQUFPLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQzFCLFNBQVMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLE1BQU0sYUFBTixNQUFNLGNBQU4sTUFBTSxHQUFJLEVBQUUsQ0FBQyxDQUFDLENBQ3pFLENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDTyxTQUFTO1FBQ2pCLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2hCLENBQUM7Ozs7WUF0REYsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7O1lBWHpCLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFRyYW5zbGF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2kxOG4vdHJhbnNsYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBCcmVhZGNydW1iTWV0YSB9IGZyb20gJy4uLy4uL21vZGVsL3BhZ2UubW9kZWwnO1xuaW1wb3J0IHtcbiAgUm91dGVCcmVhZGNydW1iQ29uZmlnLFxuICBSb3V0ZUJyZWFkY3J1bWJSZXNvbHZlcixcbiAgUm91dGVCcmVhZGNydW1iUmVzb2x2ZXJQYXJhbXMsXG59IGZyb20gJy4vcm91dGUtcGFnZS1tZXRhLm1vZGVsJztcblxuLyoqXG4gKiBSZXNvbHZlcyB0aGUgYnJlYWRjcnVtYiBmb3IgdGhlIEFuZ3VsYXIgQWN0aXZhdGVkUm91dGVTbmFwc2hvdFxuICovXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIERlZmF1bHRSb3V0ZVBhZ2VNZXRhUmVzb2x2ZXJcbiAgaW1wbGVtZW50cyBSb3V0ZUJyZWFkY3J1bWJSZXNvbHZlciB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCB0cmFuc2xhdGlvbjogVHJhbnNsYXRpb25TZXJ2aWNlKSB7fVxuXG4gIC8qKlxuICAgKiBSZXNvbHZlcyBicmVhZGNydW1iIGJhc2VkIG9uIHRoZSBnaXZlbiB1cmwgYW5kIHRoZSBicmVhZGNydW1iIGNvbmZpZy5cbiAgICpcbiAgICogLSBXaGVuIGJyZWFkY3J1bWIgY29uZmlnIGlzIGVtcHR5LCBpdCByZXR1cm5zIGFuIGVtcHR5IGJyZWFkY3J1bWIuXG4gICAqIC0gV2hlbiBicmVhZGNydW1iIGNvbmZpZyBpcyBhIHN0cmluZyBvciBvYmplY3Qgd2l0aCBgaTE4bmAgcHJvcGVydHksXG4gICAqICAgIGl0IHRyYW5zbGF0ZXMgaXQgYW5kIHVzZSBhcyBhIGxhYmVsIG9mIHRoZSByZXR1cm5lZCBicmVhZGNydW1iLlxuICAgKiAtIFdoZW4gYnJlYWRjcnVtYiBjb25maWcgaXMgYW4gb2JqZWN0IHdpdGggcHJvcGVydHkgYHJhd2AsIHRoZW5cbiAgICogICAgaXQncyB1c2VkIGFzIGEgbGFiZWwgb2YgdGhlIHJldHVybmVkIGJyZWFkY3J1bWIuXG4gICAqL1xuICByZXNvbHZlQnJlYWRjcnVtYnMoe1xuICAgIHVybCxcbiAgICBwYWdlTWV0YUNvbmZpZyxcbiAgfTogUm91dGVCcmVhZGNydW1iUmVzb2x2ZXJQYXJhbXMpOiBPYnNlcnZhYmxlPEJyZWFkY3J1bWJNZXRhW10+IHtcbiAgICBjb25zdCBicmVhZGNydW1iQ29uZmlnID0gcGFnZU1ldGFDb25maWc/LmJyZWFkY3J1bWI7XG5cbiAgICBpZiAoIWJyZWFkY3J1bWJDb25maWcpIHtcbiAgICAgIHJldHVybiBvZihbXSk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBicmVhZGNydW1iQ29uZmlnICE9PSAnc3RyaW5nJyAmJiBicmVhZGNydW1iQ29uZmlnLnJhdykge1xuICAgICAgcmV0dXJuIG9mKFt7IGxpbms6IHVybCwgbGFiZWw6IGJyZWFkY3J1bWJDb25maWcucmF3IH1dKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy50cmFuc2xhdGVCcmVhZGNydW1iTGFiZWwoYnJlYWRjcnVtYkNvbmZpZykucGlwZShcbiAgICAgIG1hcCgobGFiZWwpID0+IFt7IGxhYmVsLCBsaW5rOiB1cmwgfV0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmFuc2xhdGVzIHRoZSBjb25maWd1cmVkIGJyZWFkY3J1bWIgbGFiZWxcbiAgICovXG4gIHByb3RlY3RlZCB0cmFuc2xhdGVCcmVhZGNydW1iTGFiZWwoXG4gICAgYnJlYWRjcnVtYkNvbmZpZzogc3RyaW5nIHwgUm91dGVCcmVhZGNydW1iQ29uZmlnXG4gICk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgY29uc3QgaTE4bktleSA9XG4gICAgICB0eXBlb2YgYnJlYWRjcnVtYkNvbmZpZyA9PT0gJ3N0cmluZydcbiAgICAgICAgPyBicmVhZGNydW1iQ29uZmlnXG4gICAgICAgIDogYnJlYWRjcnVtYkNvbmZpZy5pMThuO1xuXG4gICAgcmV0dXJuIHRoaXMuZ2V0UGFyYW1zKCkucGlwZShcbiAgICAgIHN3aXRjaE1hcCgocGFyYW1zKSA9PiB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZShpMThuS2V5LCBwYXJhbXMgPz8ge30pKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmVzb2x2ZXMgZHluYW1pYyBkYXRhIGZvciB0aGUgd2hvbGUgcmVzb2x2ZXIuXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0UGFyYW1zKCk6IE9ic2VydmFibGU8eyBbXzogc3RyaW5nXTogYW55IH0+IHtcbiAgICByZXR1cm4gb2Yoe30pO1xuICB9XG59XG4iXX0=
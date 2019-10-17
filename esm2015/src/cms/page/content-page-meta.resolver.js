/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { combineLatest, of } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { TranslationService } from '../../i18n/translation.service';
import { PageType } from '../../model/cms.model';
import { CmsService } from '../facade/cms.service';
import { PageMetaResolver } from './page-meta.resolver';
import * as i0 from "@angular/core";
import * as i1 from "../facade/cms.service";
import * as i2 from "../../i18n/translation.service";
/**
 * Resolves the page data for all Content Pages based on the `PageType.CONTENT_PAGE`.
 * More specific resolvers for content pages can be implemented by making them more
 * specific, for example by using the page template (see `CartPageMetaResolver`).
 *
 * The page title, and breadcrumbs are resolved in this implementation only.
 */
export class ContentPageMetaResolver extends PageMetaResolver {
    /**
     * @param {?} cms
     * @param {?} translation
     */
    constructor(cms, translation) {
        super();
        this.cms = cms;
        this.translation = translation;
        this.cms$ = this.cms
            .getCurrentPage()
            .pipe(filter((/**
         * @param {?} p
         * @return {?}
         */
        p => !!p)));
        this.pageType = PageType.CONTENT_PAGE;
    }
    /**
     * @deprecated since version 1.3
     *
     * The resolve method is no longer preferred and will be removed with release 2.0.
     * The caller `PageMetaService` service is improved to expect all individual resolvers
     * instead, so that the code is easier extensible.
     * @return {?}
     */
    resolve() {
        return this.cms$.pipe(switchMap((/**
         * @param {?} page
         * @return {?}
         */
        (page) => combineLatest([
            this.resolveTitle(page),
            this.resolveBreadcrumbLabel().pipe(switchMap((/**
             * @param {?} label
             * @return {?}
             */
            label => this.resolveBreadcrumbs(page, label)))),
        ]))), map((/**
         * @param {?} __0
         * @return {?}
         */
        ([title, breadcrumbs]) => ({ title, breadcrumbs }))));
    }
    /**
     * @param {?=} page
     * @return {?}
     */
    resolveTitle(page) {
        return page ? of(page.title) : this.cms$.pipe(map((/**
         * @param {?} p
         * @return {?}
         */
        p => p.title)));
    }
    /**
     * @deprecated since version 1.3
     * This method will removed with with 2.0
     * @return {?}
     */
    resolveBreadcrumbLabel() {
        return this.translation.translate('common.home');
    }
    /**
     * @param {?=} _page
     * @param {?=} breadcrumbLabel
     * @return {?}
     */
    resolveBreadcrumbs(_page, breadcrumbLabel) {
        if (breadcrumbLabel) {
            return of([{ label: breadcrumbLabel, link: '/' }]);
        }
        else {
            return this.translation
                .translate('common.home')
                .pipe(map((/**
             * @param {?} label
             * @return {?}
             */
            label => [{ label: label, link: '/' }])));
        }
    }
}
ContentPageMetaResolver.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
ContentPageMetaResolver.ctorParameters = () => [
    { type: CmsService },
    { type: TranslationService }
];
/** @nocollapse */ ContentPageMetaResolver.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ContentPageMetaResolver_Factory() { return new ContentPageMetaResolver(i0.ɵɵinject(i1.CmsService), i0.ɵɵinject(i2.TranslationService)); }, token: ContentPageMetaResolver, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    ContentPageMetaResolver.prototype.cms$;
    /**
     * @type {?}
     * @protected
     */
    ContentPageMetaResolver.prototype.cms;
    /**
     * @type {?}
     * @protected
     */
    ContentPageMetaResolver.prototype.translation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC1wYWdlLW1ldGEucmVzb2x2ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL3BhZ2UvY29udGVudC1wYWdlLW1ldGEucmVzb2x2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDckQsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDcEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUVuRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7Ozs7Ozs7QUFheEQsTUFBTSxPQUFPLHVCQUF3QixTQUFRLGdCQUFnQjs7Ozs7SUFNM0QsWUFDWSxHQUFlLEVBQ2YsV0FBK0I7UUFFekMsS0FBSyxFQUFFLENBQUM7UUFIRSxRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQ2YsZ0JBQVcsR0FBWCxXQUFXLENBQW9CO1FBTm5DLFNBQUksR0FBcUIsSUFBSSxDQUFDLEdBQUc7YUFDdEMsY0FBYyxFQUFFO2FBQ2hCLElBQUksQ0FBQyxNQUFNOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztRQU94QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxZQUFZLENBQUM7SUFDeEMsQ0FBQzs7Ozs7Ozs7O0lBU0QsT0FBTztRQUNMLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQ25CLFNBQVM7Ozs7UUFBQyxDQUFDLElBQVUsRUFBRSxFQUFFLENBQ3ZCLGFBQWEsQ0FBQztZQUNaLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDLElBQUksQ0FDaEMsU0FBUzs7OztZQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsRUFBQyxDQUN6RDtTQUNGLENBQUMsRUFDSCxFQUNELEdBQUc7Ozs7UUFBQyxDQUFDLENBQUMsS0FBSyxFQUFFLFdBQVcsQ0FBa0IsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsQ0FBQyxFQUFDLENBQ3pFLENBQUM7SUFDSixDQUFDOzs7OztJQVNELFlBQVksQ0FBQyxJQUFXO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQztJQUNuRSxDQUFDOzs7Ozs7SUFNRCxzQkFBc0I7UUFDcEIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNuRCxDQUFDOzs7Ozs7SUFTRCxrQkFBa0IsQ0FDaEIsS0FBWSxFQUNaLGVBQXdCO1FBRXhCLElBQUksZUFBZSxFQUFFO1lBQ25CLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDcEQ7YUFBTTtZQUNMLE9BQU8sSUFBSSxDQUFDLFdBQVc7aUJBQ3BCLFNBQVMsQ0FBQyxhQUFhLENBQUM7aUJBQ3hCLElBQUksQ0FBQyxHQUFHOzs7O1lBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUM7U0FDdEQ7SUFDSCxDQUFDOzs7WUEzRUYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBZFEsVUFBVTtZQUZWLGtCQUFrQjs7Ozs7Ozs7SUFtQnpCLHVDQUUwQjs7Ozs7SUFHeEIsc0NBQXlCOzs7OztJQUN6Qiw4Q0FBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFRyYW5zbGF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL2kxOG4vdHJhbnNsYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBQYWdlVHlwZSB9IGZyb20gJy4uLy4uL21vZGVsL2Ntcy5tb2RlbCc7XG5pbXBvcnQgeyBDbXNTZXJ2aWNlIH0gZnJvbSAnLi4vZmFjYWRlL2Ntcy5zZXJ2aWNlJztcbmltcG9ydCB7IFBhZ2UsIFBhZ2VNZXRhIH0gZnJvbSAnLi4vbW9kZWwvcGFnZS5tb2RlbCc7XG5pbXBvcnQgeyBQYWdlTWV0YVJlc29sdmVyIH0gZnJvbSAnLi9wYWdlLW1ldGEucmVzb2x2ZXInO1xuaW1wb3J0IHsgUGFnZUJyZWFkY3J1bWJSZXNvbHZlciwgUGFnZVRpdGxlUmVzb2x2ZXIgfSBmcm9tICcuL3BhZ2UucmVzb2x2ZXJzJztcblxuLyoqXG4gKiBSZXNvbHZlcyB0aGUgcGFnZSBkYXRhIGZvciBhbGwgQ29udGVudCBQYWdlcyBiYXNlZCBvbiB0aGUgYFBhZ2VUeXBlLkNPTlRFTlRfUEFHRWAuXG4gKiBNb3JlIHNwZWNpZmljIHJlc29sdmVycyBmb3IgY29udGVudCBwYWdlcyBjYW4gYmUgaW1wbGVtZW50ZWQgYnkgbWFraW5nIHRoZW0gbW9yZVxuICogc3BlY2lmaWMsIGZvciBleGFtcGxlIGJ5IHVzaW5nIHRoZSBwYWdlIHRlbXBsYXRlIChzZWUgYENhcnRQYWdlTWV0YVJlc29sdmVyYCkuXG4gKlxuICogVGhlIHBhZ2UgdGl0bGUsIGFuZCBicmVhZGNydW1icyBhcmUgcmVzb2x2ZWQgaW4gdGhpcyBpbXBsZW1lbnRhdGlvbiBvbmx5LlxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ29udGVudFBhZ2VNZXRhUmVzb2x2ZXIgZXh0ZW5kcyBQYWdlTWV0YVJlc29sdmVyXG4gIGltcGxlbWVudHMgUGFnZVRpdGxlUmVzb2x2ZXIsIFBhZ2VCcmVhZGNydW1iUmVzb2x2ZXIge1xuICBwcml2YXRlIGNtcyQ6IE9ic2VydmFibGU8UGFnZT4gPSB0aGlzLmNtc1xuICAgIC5nZXRDdXJyZW50UGFnZSgpXG4gICAgLnBpcGUoZmlsdGVyKHAgPT4gISFwKSk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNtczogQ21zU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgdHJhbnNsYXRpb246IFRyYW5zbGF0aW9uU2VydmljZVxuICApIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucGFnZVR5cGUgPSBQYWdlVHlwZS5DT05URU5UX1BBR0U7XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjNcbiAgICpcbiAgICogVGhlIHJlc29sdmUgbWV0aG9kIGlzIG5vIGxvbmdlciBwcmVmZXJyZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCB3aXRoIHJlbGVhc2UgMi4wLlxuICAgKiBUaGUgY2FsbGVyIGBQYWdlTWV0YVNlcnZpY2VgIHNlcnZpY2UgaXMgaW1wcm92ZWQgdG8gZXhwZWN0IGFsbCBpbmRpdmlkdWFsIHJlc29sdmVyc1xuICAgKiBpbnN0ZWFkLCBzbyB0aGF0IHRoZSBjb2RlIGlzIGVhc2llciBleHRlbnNpYmxlLlxuICAgKi9cbiAgcmVzb2x2ZSgpOiBPYnNlcnZhYmxlPFBhZ2VNZXRhPiB8IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuY21zJC5waXBlKFxuICAgICAgc3dpdGNoTWFwKChwYWdlOiBQYWdlKSA9PlxuICAgICAgICBjb21iaW5lTGF0ZXN0KFtcbiAgICAgICAgICB0aGlzLnJlc29sdmVUaXRsZShwYWdlKSxcbiAgICAgICAgICB0aGlzLnJlc29sdmVCcmVhZGNydW1iTGFiZWwoKS5waXBlKFxuICAgICAgICAgICAgc3dpdGNoTWFwKGxhYmVsID0+IHRoaXMucmVzb2x2ZUJyZWFkY3J1bWJzKHBhZ2UsIGxhYmVsKSlcbiAgICAgICAgICApLFxuICAgICAgICBdKVxuICAgICAgKSxcbiAgICAgIG1hcCgoW3RpdGxlLCBicmVhZGNydW1ic106IFtzdHJpbmcsIGFueVtdXSkgPT4gKHsgdGl0bGUsIGJyZWFkY3J1bWJzIH0pKVxuICAgICk7XG4gIH1cblxuICByZXNvbHZlVGl0bGUoKTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjNcbiAgICogV2l0aCAyLjAsIHRoZSBhcmd1bWVudChzKSB3aWxsIGJlIHJlbW92ZWQgYW5kIHRoZSByZXR1cm4gdHlwZSB3aWxsIGNoYW5nZS4gVXNlIGByZXNvbHZlVGl0bGUoKWAgaW5zdGVhZFxuICAgKi9cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiB1bmlmaWVkLXNpZ25hdHVyZXNcbiAgcmVzb2x2ZVRpdGxlKHBhZ2U6IFBhZ2UpOiBPYnNlcnZhYmxlPHN0cmluZz47XG4gIHJlc29sdmVUaXRsZShwYWdlPzogUGFnZSk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHBhZ2UgPyBvZihwYWdlLnRpdGxlKSA6IHRoaXMuY21zJC5waXBlKG1hcChwID0+IHAudGl0bGUpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuM1xuICAgKiBUaGlzIG1ldGhvZCB3aWxsIHJlbW92ZWQgd2l0aCB3aXRoIDIuMFxuICAgKi9cbiAgcmVzb2x2ZUJyZWFkY3J1bWJMYWJlbCgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgnY29tbW9uLmhvbWUnKTtcbiAgfVxuXG4gIHJlc29sdmVCcmVhZGNydW1icygpOiBPYnNlcnZhYmxlPGFueVtdPjtcbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS4zXG4gICAqIFdpdGggMi4wLCB0aGUgYXJndW1lbnQocykgd2lsbCBiZSByZW1vdmVkIGFuZCB0aGUgcmV0dXJuIHR5cGUgd2lsbCBjaGFuZ2UuIFVzZSBgcmVzb2x2ZUJyZWFkY3J1bWJzKClgIGluc3RlYWRcbiAgICovXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogdW5pZmllZC1zaWduYXR1cmVzXG4gIHJlc29sdmVCcmVhZGNydW1icyhfcGFnZTogUGFnZSwgYnJlYWRjcnVtYkxhYmVsOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueVtdPjtcbiAgcmVzb2x2ZUJyZWFkY3J1bWJzKFxuICAgIF9wYWdlPzogUGFnZSxcbiAgICBicmVhZGNydW1iTGFiZWw/OiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxhbnlbXT4ge1xuICAgIGlmIChicmVhZGNydW1iTGFiZWwpIHtcbiAgICAgIHJldHVybiBvZihbeyBsYWJlbDogYnJlYWRjcnVtYkxhYmVsLCBsaW5rOiAnLycgfV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy50cmFuc2xhdGlvblxuICAgICAgICAudHJhbnNsYXRlKCdjb21tb24uaG9tZScpXG4gICAgICAgIC5waXBlKG1hcChsYWJlbCA9PiBbeyBsYWJlbDogbGFiZWwsIGxpbms6ICcvJyB9XSkpO1xuICAgIH1cbiAgfVxufVxuIl19
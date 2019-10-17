/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var ContentPageMetaResolver = /** @class */ (function (_super) {
    tslib_1.__extends(ContentPageMetaResolver, _super);
    function ContentPageMetaResolver(cms, translation) {
        var _this = _super.call(this) || this;
        _this.cms = cms;
        _this.translation = translation;
        _this.cms$ = _this.cms
            .getCurrentPage()
            .pipe(filter((/**
         * @param {?} p
         * @return {?}
         */
        function (p) { return !!p; })));
        _this.pageType = PageType.CONTENT_PAGE;
        return _this;
    }
    /**
     * @deprecated since version 1.3
     *
     * The resolve method is no longer preferred and will be removed with release 2.0.
     * The caller `PageMetaService` service is improved to expect all individual resolvers
     * instead, so that the code is easier extensible.
     */
    /**
     * @deprecated since version 1.3
     *
     * The resolve method is no longer preferred and will be removed with release 2.0.
     * The caller `PageMetaService` service is improved to expect all individual resolvers
     * instead, so that the code is easier extensible.
     * @return {?}
     */
    ContentPageMetaResolver.prototype.resolve = /**
     * @deprecated since version 1.3
     *
     * The resolve method is no longer preferred and will be removed with release 2.0.
     * The caller `PageMetaService` service is improved to expect all individual resolvers
     * instead, so that the code is easier extensible.
     * @return {?}
     */
    function () {
        var _this = this;
        return this.cms$.pipe(switchMap((/**
         * @param {?} page
         * @return {?}
         */
        function (page) {
            return combineLatest([
                _this.resolveTitle(page),
                _this.resolveBreadcrumbLabel().pipe(switchMap((/**
                 * @param {?} label
                 * @return {?}
                 */
                function (label) { return _this.resolveBreadcrumbs(page, label); }))),
            ]);
        })), map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), title = _b[0], breadcrumbs = _b[1];
            return ({ title: title, breadcrumbs: breadcrumbs });
        })));
    };
    /**
     * @param {?=} page
     * @return {?}
     */
    ContentPageMetaResolver.prototype.resolveTitle = /**
     * @param {?=} page
     * @return {?}
     */
    function (page) {
        return page ? of(page.title) : this.cms$.pipe(map((/**
         * @param {?} p
         * @return {?}
         */
        function (p) { return p.title; })));
    };
    /**
     * @deprecated since version 1.3
     * This method will removed with with 2.0
     */
    /**
     * @deprecated since version 1.3
     * This method will removed with with 2.0
     * @return {?}
     */
    ContentPageMetaResolver.prototype.resolveBreadcrumbLabel = /**
     * @deprecated since version 1.3
     * This method will removed with with 2.0
     * @return {?}
     */
    function () {
        return this.translation.translate('common.home');
    };
    /**
     * @param {?=} _page
     * @param {?=} breadcrumbLabel
     * @return {?}
     */
    ContentPageMetaResolver.prototype.resolveBreadcrumbs = /**
     * @param {?=} _page
     * @param {?=} breadcrumbLabel
     * @return {?}
     */
    function (_page, breadcrumbLabel) {
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
            function (label) { return [{ label: label, link: '/' }]; })));
        }
    };
    ContentPageMetaResolver.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    ContentPageMetaResolver.ctorParameters = function () { return [
        { type: CmsService },
        { type: TranslationService }
    ]; };
    /** @nocollapse */ ContentPageMetaResolver.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ContentPageMetaResolver_Factory() { return new ContentPageMetaResolver(i0.ɵɵinject(i1.CmsService), i0.ɵɵinject(i2.TranslationService)); }, token: ContentPageMetaResolver, providedIn: "root" });
    return ContentPageMetaResolver;
}(PageMetaResolver));
export { ContentPageMetaResolver };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC1wYWdlLW1ldGEucmVzb2x2ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL3BhZ2UvY29udGVudC1wYWdlLW1ldGEucmVzb2x2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxhQUFhLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFbkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7Ozs7Ozs7Ozs7O0FBVXhEO0lBRzZDLG1EQUFnQjtJQU0zRCxpQ0FDWSxHQUFlLEVBQ2YsV0FBK0I7UUFGM0MsWUFJRSxpQkFBTyxTQUVSO1FBTFcsU0FBRyxHQUFILEdBQUcsQ0FBWTtRQUNmLGlCQUFXLEdBQVgsV0FBVyxDQUFvQjtRQU5uQyxVQUFJLEdBQXFCLEtBQUksQ0FBQyxHQUFHO2FBQ3RDLGNBQWMsRUFBRTthQUNoQixJQUFJLENBQUMsTUFBTTs7OztRQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLENBQUMsRUFBSCxDQUFHLEVBQUMsQ0FBQyxDQUFDO1FBT3hCLEtBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQzs7SUFDeEMsQ0FBQztJQUVEOzs7Ozs7T0FNRzs7Ozs7Ozs7O0lBQ0gseUNBQU87Ozs7Ozs7O0lBQVA7UUFBQSxpQkFZQztRQVhDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQ25CLFNBQVM7Ozs7UUFBQyxVQUFDLElBQVU7WUFDbkIsT0FBQSxhQUFhLENBQUM7Z0JBQ1osS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUM7Z0JBQ3ZCLEtBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDLElBQUksQ0FDaEMsU0FBUzs7OztnQkFBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEVBQXBDLENBQW9DLEVBQUMsQ0FDekQ7YUFDRixDQUFDO1FBTEYsQ0FLRSxFQUNILEVBQ0QsR0FBRzs7OztRQUFDLFVBQUMsRUFBcUM7Z0JBQXJDLDBCQUFxQyxFQUFwQyxhQUFLLEVBQUUsbUJBQVc7WUFBdUIsT0FBQSxDQUFDLEVBQUUsS0FBSyxPQUFBLEVBQUUsV0FBVyxhQUFBLEVBQUUsQ0FBQztRQUF4QixDQUF3QixFQUFDLENBQ3pFLENBQUM7SUFDSixDQUFDOzs7OztJQVNELDhDQUFZOzs7O0lBQVosVUFBYSxJQUFXO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHOzs7O1FBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsS0FBSyxFQUFQLENBQU8sRUFBQyxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7O0lBQ0gsd0RBQXNCOzs7OztJQUF0QjtRQUNFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDbkQsQ0FBQzs7Ozs7O0lBU0Qsb0RBQWtCOzs7OztJQUFsQixVQUNFLEtBQVksRUFDWixlQUF3QjtRQUV4QixJQUFJLGVBQWUsRUFBRTtZQUNuQixPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLGVBQWUsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ3BEO2FBQU07WUFDTCxPQUFPLElBQUksQ0FBQyxXQUFXO2lCQUNwQixTQUFTLENBQUMsYUFBYSxDQUFDO2lCQUN4QixJQUFJLENBQUMsR0FBRzs7OztZQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQTdCLENBQTZCLEVBQUMsQ0FBQyxDQUFDO1NBQ3REO0lBQ0gsQ0FBQzs7Z0JBM0VGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBZFEsVUFBVTtnQkFGVixrQkFBa0I7OztrQ0FIM0I7Q0E2RkMsQUE1RUQsQ0FHNkMsZ0JBQWdCLEdBeUU1RDtTQXpFWSx1QkFBdUI7Ozs7OztJQUVsQyx1Q0FFMEI7Ozs7O0lBR3hCLHNDQUF5Qjs7Ozs7SUFDekIsOENBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBUcmFuc2xhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9pMThuL3RyYW5zbGF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGFnZVR5cGUgfSBmcm9tICcuLi8uLi9tb2RlbC9jbXMubW9kZWwnO1xuaW1wb3J0IHsgQ21zU2VydmljZSB9IGZyb20gJy4uL2ZhY2FkZS9jbXMuc2VydmljZSc7XG5pbXBvcnQgeyBQYWdlLCBQYWdlTWV0YSB9IGZyb20gJy4uL21vZGVsL3BhZ2UubW9kZWwnO1xuaW1wb3J0IHsgUGFnZU1ldGFSZXNvbHZlciB9IGZyb20gJy4vcGFnZS1tZXRhLnJlc29sdmVyJztcbmltcG9ydCB7IFBhZ2VCcmVhZGNydW1iUmVzb2x2ZXIsIFBhZ2VUaXRsZVJlc29sdmVyIH0gZnJvbSAnLi9wYWdlLnJlc29sdmVycyc7XG5cbi8qKlxuICogUmVzb2x2ZXMgdGhlIHBhZ2UgZGF0YSBmb3IgYWxsIENvbnRlbnQgUGFnZXMgYmFzZWQgb24gdGhlIGBQYWdlVHlwZS5DT05URU5UX1BBR0VgLlxuICogTW9yZSBzcGVjaWZpYyByZXNvbHZlcnMgZm9yIGNvbnRlbnQgcGFnZXMgY2FuIGJlIGltcGxlbWVudGVkIGJ5IG1ha2luZyB0aGVtIG1vcmVcbiAqIHNwZWNpZmljLCBmb3IgZXhhbXBsZSBieSB1c2luZyB0aGUgcGFnZSB0ZW1wbGF0ZSAoc2VlIGBDYXJ0UGFnZU1ldGFSZXNvbHZlcmApLlxuICpcbiAqIFRoZSBwYWdlIHRpdGxlLCBhbmQgYnJlYWRjcnVtYnMgYXJlIHJlc29sdmVkIGluIHRoaXMgaW1wbGVtZW50YXRpb24gb25seS5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENvbnRlbnRQYWdlTWV0YVJlc29sdmVyIGV4dGVuZHMgUGFnZU1ldGFSZXNvbHZlclxuICBpbXBsZW1lbnRzIFBhZ2VUaXRsZVJlc29sdmVyLCBQYWdlQnJlYWRjcnVtYlJlc29sdmVyIHtcbiAgcHJpdmF0ZSBjbXMkOiBPYnNlcnZhYmxlPFBhZ2U+ID0gdGhpcy5jbXNcbiAgICAuZ2V0Q3VycmVudFBhZ2UoKVxuICAgIC5waXBlKGZpbHRlcihwID0+ICEhcCkpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjbXM6IENtc1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHRyYW5zbGF0aW9uOiBUcmFuc2xhdGlvblNlcnZpY2VcbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnBhZ2VUeXBlID0gUGFnZVR5cGUuQ09OVEVOVF9QQUdFO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS4zXG4gICAqXG4gICAqIFRoZSByZXNvbHZlIG1ldGhvZCBpcyBubyBsb25nZXIgcHJlZmVycmVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgd2l0aCByZWxlYXNlIDIuMC5cbiAgICogVGhlIGNhbGxlciBgUGFnZU1ldGFTZXJ2aWNlYCBzZXJ2aWNlIGlzIGltcHJvdmVkIHRvIGV4cGVjdCBhbGwgaW5kaXZpZHVhbCByZXNvbHZlcnNcbiAgICogaW5zdGVhZCwgc28gdGhhdCB0aGUgY29kZSBpcyBlYXNpZXIgZXh0ZW5zaWJsZS5cbiAgICovXG4gIHJlc29sdmUoKTogT2JzZXJ2YWJsZTxQYWdlTWV0YT4gfCBhbnkge1xuICAgIHJldHVybiB0aGlzLmNtcyQucGlwZShcbiAgICAgIHN3aXRjaE1hcCgocGFnZTogUGFnZSkgPT5cbiAgICAgICAgY29tYmluZUxhdGVzdChbXG4gICAgICAgICAgdGhpcy5yZXNvbHZlVGl0bGUocGFnZSksXG4gICAgICAgICAgdGhpcy5yZXNvbHZlQnJlYWRjcnVtYkxhYmVsKCkucGlwZShcbiAgICAgICAgICAgIHN3aXRjaE1hcChsYWJlbCA9PiB0aGlzLnJlc29sdmVCcmVhZGNydW1icyhwYWdlLCBsYWJlbCkpXG4gICAgICAgICAgKSxcbiAgICAgICAgXSlcbiAgICAgICksXG4gICAgICBtYXAoKFt0aXRsZSwgYnJlYWRjcnVtYnNdOiBbc3RyaW5nLCBhbnlbXV0pID0+ICh7IHRpdGxlLCBicmVhZGNydW1icyB9KSlcbiAgICApO1xuICB9XG5cbiAgcmVzb2x2ZVRpdGxlKCk6IE9ic2VydmFibGU8c3RyaW5nPjtcbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS4zXG4gICAqIFdpdGggMi4wLCB0aGUgYXJndW1lbnQocykgd2lsbCBiZSByZW1vdmVkIGFuZCB0aGUgcmV0dXJuIHR5cGUgd2lsbCBjaGFuZ2UuIFVzZSBgcmVzb2x2ZVRpdGxlKClgIGluc3RlYWRcbiAgICovXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogdW5pZmllZC1zaWduYXR1cmVzXG4gIHJlc29sdmVUaXRsZShwYWdlOiBQYWdlKTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuICByZXNvbHZlVGl0bGUocGFnZT86IFBhZ2UpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiBwYWdlID8gb2YocGFnZS50aXRsZSkgOiB0aGlzLmNtcyQucGlwZShtYXAocCA9PiBwLnRpdGxlKSk7XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjNcbiAgICogVGhpcyBtZXRob2Qgd2lsbCByZW1vdmVkIHdpdGggd2l0aCAyLjBcbiAgICovXG4gIHJlc29sdmVCcmVhZGNydW1iTGFiZWwoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ2NvbW1vbi5ob21lJyk7XG4gIH1cblxuICByZXNvbHZlQnJlYWRjcnVtYnMoKTogT2JzZXJ2YWJsZTxhbnlbXT47XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuM1xuICAgKiBXaXRoIDIuMCwgdGhlIGFyZ3VtZW50KHMpIHdpbGwgYmUgcmVtb3ZlZCBhbmQgdGhlIHJldHVybiB0eXBlIHdpbGwgY2hhbmdlLiBVc2UgYHJlc29sdmVCcmVhZGNydW1icygpYCBpbnN0ZWFkXG4gICAqL1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHVuaWZpZWQtc2lnbmF0dXJlc1xuICByZXNvbHZlQnJlYWRjcnVtYnMoX3BhZ2U6IFBhZ2UsIGJyZWFkY3J1bWJMYWJlbDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnlbXT47XG4gIHJlc29sdmVCcmVhZGNydW1icyhcbiAgICBfcGFnZT86IFBhZ2UsXG4gICAgYnJlYWRjcnVtYkxhYmVsPzogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8YW55W10+IHtcbiAgICBpZiAoYnJlYWRjcnVtYkxhYmVsKSB7XG4gICAgICByZXR1cm4gb2YoW3sgbGFiZWw6IGJyZWFkY3J1bWJMYWJlbCwgbGluazogJy8nIH1dKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMudHJhbnNsYXRpb25cbiAgICAgICAgLnRyYW5zbGF0ZSgnY29tbW9uLmhvbWUnKVxuICAgICAgICAucGlwZShtYXAobGFiZWwgPT4gW3sgbGFiZWw6IGxhYmVsLCBsaW5rOiAnLycgfV0pKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==
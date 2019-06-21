/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { combineLatest, of } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { CmsService } from '../facade/cms.service';
import { PageMetaResolver } from './page-meta.resolver';
import { PageType } from '../../model/cms.model';
import { TranslationService } from '../../i18n/translation.service';
import * as i0 from "@angular/core";
import * as i1 from "../facade/cms.service";
import * as i2 from "../../i18n/translation.service";
var ContentPageMetaResolver = /** @class */ (function (_super) {
    tslib_1.__extends(ContentPageMetaResolver, _super);
    function ContentPageMetaResolver(cms, translation) {
        var _this = _super.call(this) || this;
        _this.cms = cms;
        _this.translation = translation;
        _this.pageType = PageType.CONTENT_PAGE;
        return _this;
    }
    /**
     * @return {?}
     */
    ContentPageMetaResolver.prototype.resolve = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.cms.getCurrentPage().pipe(filter(Boolean), switchMap((/**
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
     * @param {?} page
     * @return {?}
     */
    ContentPageMetaResolver.prototype.resolveTitle = /**
     * @param {?} page
     * @return {?}
     */
    function (page) {
        return of(page.title);
    };
    /**
     * @return {?}
     */
    ContentPageMetaResolver.prototype.resolveBreadcrumbLabel = /**
     * @return {?}
     */
    function () {
        return this.translation.translate('common.home');
    };
    /**
     * @param {?} _page
     * @param {?} breadcrumbLabel
     * @return {?}
     */
    ContentPageMetaResolver.prototype.resolveBreadcrumbs = /**
     * @param {?} _page
     * @param {?} breadcrumbLabel
     * @return {?}
     */
    function (_page, breadcrumbLabel) {
        // as long as we do not have CMSX-8689 in place
        // we need specific resolvers for nested pages
        return of([{ label: breadcrumbLabel, link: '/' }]);
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
     * @protected
     */
    ContentPageMetaResolver.prototype.cms;
    /**
     * @type {?}
     * @protected
     */
    ContentPageMetaResolver.prototype.translation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC1wYWdlLW1ldGEucmVzb2x2ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL3BhZ2UvY29udGVudC1wYWdlLW1ldGEucmVzb2x2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxhQUFhLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUVuRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUV4RCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7Ozs7QUFFcEU7SUFHNkMsbURBQWdCO0lBRTNELGlDQUNZLEdBQWUsRUFDZixXQUErQjtRQUYzQyxZQUlFLGlCQUFPLFNBRVI7UUFMVyxTQUFHLEdBQUgsR0FBRyxDQUFZO1FBQ2YsaUJBQVcsR0FBWCxXQUFXLENBQW9CO1FBR3pDLEtBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQzs7SUFDeEMsQ0FBQzs7OztJQUVELHlDQUFPOzs7SUFBUDtRQUFBLGlCQWFDO1FBWkMsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxDQUFDLElBQUksQ0FDbkMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUNmLFNBQVM7Ozs7UUFBQyxVQUFBLElBQUk7WUFDWixPQUFBLGFBQWEsQ0FBQztnQkFDWixLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQztnQkFDdkIsS0FBSSxDQUFDLHNCQUFzQixFQUFFLENBQUMsSUFBSSxDQUNoQyxTQUFTOzs7O2dCQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsRUFBcEMsQ0FBb0MsRUFBQyxDQUN6RDthQUNGLENBQUM7UUFMRixDQUtFLEVBQ0gsRUFDRCxHQUFHOzs7O1FBQUMsVUFBQyxFQUFvQjtnQkFBcEIsMEJBQW9CLEVBQW5CLGFBQUssRUFBRSxtQkFBVztZQUFNLE9BQUEsQ0FBQyxFQUFFLEtBQUssT0FBQSxFQUFFLFdBQVcsYUFBQSxFQUFFLENBQUM7UUFBeEIsQ0FBd0IsRUFBQyxDQUN4RCxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFRCw4Q0FBWTs7OztJQUFaLFVBQWEsSUFBVTtRQUNyQixPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEIsQ0FBQzs7OztJQUVELHdEQUFzQjs7O0lBQXRCO1FBQ0UsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNuRCxDQUFDOzs7Ozs7SUFFRCxvREFBa0I7Ozs7O0lBQWxCLFVBQW1CLEtBQVcsRUFBRSxlQUF1QjtRQUNyRCwrQ0FBK0M7UUFDL0MsOENBQThDO1FBQzlDLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDckQsQ0FBQzs7Z0JBeENGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBVFEsVUFBVTtnQkFLVixrQkFBa0I7OztrQ0FSM0I7Q0FtREMsQUF6Q0QsQ0FHNkMsZ0JBQWdCLEdBc0M1RDtTQXRDWSx1QkFBdUI7Ozs7OztJQUdoQyxzQ0FBeUI7Ozs7O0lBQ3pCLDhDQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ21zU2VydmljZSB9IGZyb20gJy4uL2ZhY2FkZS9jbXMuc2VydmljZSc7XG5pbXBvcnQgeyBQYWdlLCBQYWdlTWV0YSB9IGZyb20gJy4uL21vZGVsL3BhZ2UubW9kZWwnO1xuaW1wb3J0IHsgUGFnZU1ldGFSZXNvbHZlciB9IGZyb20gJy4vcGFnZS1tZXRhLnJlc29sdmVyJztcbmltcG9ydCB7IFBhZ2VCcmVhZGNydW1iUmVzb2x2ZXIsIFBhZ2VUaXRsZVJlc29sdmVyIH0gZnJvbSAnLi9wYWdlLnJlc29sdmVycyc7XG5pbXBvcnQgeyBQYWdlVHlwZSB9IGZyb20gJy4uLy4uL21vZGVsL2Ntcy5tb2RlbCc7XG5pbXBvcnQgeyBUcmFuc2xhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9pMThuL3RyYW5zbGF0aW9uLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ29udGVudFBhZ2VNZXRhUmVzb2x2ZXIgZXh0ZW5kcyBQYWdlTWV0YVJlc29sdmVyXG4gIGltcGxlbWVudHMgUGFnZVRpdGxlUmVzb2x2ZXIsIFBhZ2VCcmVhZGNydW1iUmVzb2x2ZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY21zOiBDbXNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCB0cmFuc2xhdGlvbjogVHJhbnNsYXRpb25TZXJ2aWNlXG4gICkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5wYWdlVHlwZSA9IFBhZ2VUeXBlLkNPTlRFTlRfUEFHRTtcbiAgfVxuXG4gIHJlc29sdmUoKTogT2JzZXJ2YWJsZTxQYWdlTWV0YT4ge1xuICAgIHJldHVybiB0aGlzLmNtcy5nZXRDdXJyZW50UGFnZSgpLnBpcGUoXG4gICAgICBmaWx0ZXIoQm9vbGVhbiksXG4gICAgICBzd2l0Y2hNYXAocGFnZSA9PlxuICAgICAgICBjb21iaW5lTGF0ZXN0KFtcbiAgICAgICAgICB0aGlzLnJlc29sdmVUaXRsZShwYWdlKSxcbiAgICAgICAgICB0aGlzLnJlc29sdmVCcmVhZGNydW1iTGFiZWwoKS5waXBlKFxuICAgICAgICAgICAgc3dpdGNoTWFwKGxhYmVsID0+IHRoaXMucmVzb2x2ZUJyZWFkY3J1bWJzKHBhZ2UsIGxhYmVsKSlcbiAgICAgICAgICApLFxuICAgICAgICBdKVxuICAgICAgKSxcbiAgICAgIG1hcCgoW3RpdGxlLCBicmVhZGNydW1ic10pID0+ICh7IHRpdGxlLCBicmVhZGNydW1icyB9KSlcbiAgICApO1xuICB9XG5cbiAgcmVzb2x2ZVRpdGxlKHBhZ2U6IFBhZ2UpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiBvZihwYWdlLnRpdGxlKTtcbiAgfVxuXG4gIHJlc29sdmVCcmVhZGNydW1iTGFiZWwoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ2NvbW1vbi5ob21lJyk7XG4gIH1cblxuICByZXNvbHZlQnJlYWRjcnVtYnMoX3BhZ2U6IFBhZ2UsIGJyZWFkY3J1bWJMYWJlbDogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnlbXT4ge1xuICAgIC8vIGFzIGxvbmcgYXMgd2UgZG8gbm90IGhhdmUgQ01TWC04Njg5IGluIHBsYWNlXG4gICAgLy8gd2UgbmVlZCBzcGVjaWZpYyByZXNvbHZlcnMgZm9yIG5lc3RlZCBwYWdlc1xuICAgIHJldHVybiBvZihbeyBsYWJlbDogYnJlYWRjcnVtYkxhYmVsLCBsaW5rOiAnLycgfV0pO1xuICB9XG59XG4iXX0=
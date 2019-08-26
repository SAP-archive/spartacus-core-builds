/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CMS_PAGE_NORMALIZER } from '../../../cms/connectors/page/converters';
import { PageType } from '../../../model/cms.model';
import { ConverterService } from '../../../util/converter.service';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
var OccCmsPageAdapter = /** @class */ (function () {
    function OccCmsPageAdapter(http, occEndpoints, converter) {
        this.http = http;
        this.occEndpoints = occEndpoints;
        this.converter = converter;
        this.headers = new HttpHeaders().set('Content-Type', 'application/json');
    }
    /**
     * @param {?} pageContext
     * @param {?=} fields
     * @return {?}
     */
    OccCmsPageAdapter.prototype.load = /**
     * @param {?} pageContext
     * @param {?=} fields
     * @return {?}
     */
    function (pageContext, fields) {
        // load page by Id
        if (pageContext.type === undefined) {
            return this.http
                .get(this.occEndpoints.getUrl('page', {
                id: pageContext.id,
            }, { fields: fields ? fields : 'DEFAULT' }), {
                headers: this.headers,
            })
                .pipe(this.converter.pipeable(CMS_PAGE_NORMALIZER));
        }
        // load page by PageContext
        /** @type {?} */
        var httpParams = this.getPagesRequestParams(pageContext);
        return this.http
            .get(this.getPagesEndpoint(httpParams, fields), {
            headers: this.headers,
        })
            .pipe(this.converter.pipeable(CMS_PAGE_NORMALIZER));
    };
    /**
     * @private
     * @param {?} params
     * @param {?=} fields
     * @return {?}
     */
    OccCmsPageAdapter.prototype.getPagesEndpoint = /**
     * @private
     * @param {?} params
     * @param {?=} fields
     * @return {?}
     */
    function (params, fields) {
        fields = fields ? fields : 'DEFAULT';
        return this.occEndpoints.getUrl('pages', {}, tslib_1.__assign({ fields: fields }, params));
    };
    /**
     * @private
     * @param {?} pageContext
     * @return {?}
     */
    OccCmsPageAdapter.prototype.getPagesRequestParams = /**
     * @private
     * @param {?} pageContext
     * @return {?}
     */
    function (pageContext) {
        /** @type {?} */
        var httpParams = {};
        // smartedit preview page is loaded by previewToken which added by interceptor
        if (pageContext.id !== 'smartedit-preview') {
            httpParams = { pageType: pageContext.type };
            if (pageContext.type === PageType.CONTENT_PAGE) {
                httpParams['pageLabelOrId'] = pageContext.id;
            }
            else {
                httpParams['code'] = pageContext.id;
            }
        }
        return httpParams;
    };
    OccCmsPageAdapter.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    OccCmsPageAdapter.ctorParameters = function () { return [
        { type: HttpClient },
        { type: OccEndpointsService },
        { type: ConverterService }
    ]; };
    return OccCmsPageAdapter;
}());
export { OccCmsPageAdapter };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    OccCmsPageAdapter.prototype.headers;
    /**
     * @type {?}
     * @private
     */
    OccCmsPageAdapter.prototype.http;
    /**
     * @type {?}
     * @private
     */
    OccCmsPageAdapter.prototype.occEndpoints;
    /**
     * @type {?}
     * @protected
     */
    OccCmsPageAdapter.prototype.converter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNtcy1wYWdlLmFkYXB0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvb2NjL2FkYXB0ZXJzL2Ntcy9vY2MtY21zLXBhZ2UuYWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDL0QsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUU5RSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFcEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDbkUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFM0U7SUFJRSwyQkFDVSxJQUFnQixFQUNoQixZQUFpQyxFQUMvQixTQUEyQjtRQUY3QixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLGlCQUFZLEdBQVosWUFBWSxDQUFxQjtRQUMvQixjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUw3QixZQUFPLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7SUFNM0UsQ0FBQzs7Ozs7O0lBRUosZ0NBQUk7Ozs7O0lBQUosVUFDRSxXQUF3QixFQUN4QixNQUFlO1FBRWYsa0JBQWtCO1FBQ2xCLElBQUksV0FBVyxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUU7WUFDbEMsT0FBTyxJQUFJLENBQUMsSUFBSTtpQkFDYixHQUFHLENBQ0YsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQ3RCLE1BQU0sRUFDTjtnQkFDRSxFQUFFLEVBQUUsV0FBVyxDQUFDLEVBQUU7YUFDbkIsRUFDRCxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQ3hDLEVBQ0Q7Z0JBQ0UsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO2FBQ3RCLENBQ0Y7aUJBQ0EsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztTQUN2RDs7O1lBR0ssVUFBVSxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLENBQUM7UUFDMUQsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLEdBQUcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQzlDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztTQUN0QixDQUFDO2FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztJQUN4RCxDQUFDOzs7Ozs7O0lBRU8sNENBQWdCOzs7Ozs7SUFBeEIsVUFDRSxNQUVDLEVBQ0QsTUFBZTtRQUVmLE1BQU0sR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ3JDLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLEVBQUUscUJBQUksTUFBTSxRQUFBLElBQUssTUFBTSxFQUFHLENBQUM7SUFDdEUsQ0FBQzs7Ozs7O0lBRU8saURBQXFCOzs7OztJQUE3QixVQUNFLFdBQXdCOztZQUVwQixVQUFVLEdBQUcsRUFBRTtRQUVuQiw4RUFBOEU7UUFDOUUsSUFBSSxXQUFXLENBQUMsRUFBRSxLQUFLLG1CQUFtQixFQUFFO1lBQzFDLFVBQVUsR0FBRyxFQUFFLFFBQVEsRUFBRSxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7WUFFNUMsSUFBSSxXQUFXLENBQUMsSUFBSSxLQUFLLFFBQVEsQ0FBQyxZQUFZLEVBQUU7Z0JBQzlDLFVBQVUsQ0FBQyxlQUFlLENBQUMsR0FBRyxXQUFXLENBQUMsRUFBRSxDQUFDO2FBQzlDO2lCQUFNO2dCQUNMLFVBQVUsQ0FBQyxNQUFNLENBQUMsR0FBRyxXQUFXLENBQUMsRUFBRSxDQUFDO2FBQ3JDO1NBQ0Y7UUFDRCxPQUFPLFVBQVUsQ0FBQztJQUNwQixDQUFDOztnQkFuRUYsVUFBVTs7OztnQkFYRixVQUFVO2dCQVNWLG1CQUFtQjtnQkFEbkIsZ0JBQWdCOztJQXVFekIsd0JBQUM7Q0FBQSxBQXBFRCxJQW9FQztTQW5FWSxpQkFBaUI7Ozs7OztJQUM1QixvQ0FBOEU7Ozs7O0lBRzVFLGlDQUF3Qjs7Ozs7SUFDeEIseUNBQXlDOzs7OztJQUN6QyxzQ0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENtc1BhZ2VBZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vY21zL2Nvbm5lY3RvcnMvcGFnZS9jbXMtcGFnZS5hZGFwdGVyJztcbmltcG9ydCB7IENNU19QQUdFX05PUk1BTElaRVIgfSBmcm9tICcuLi8uLi8uLi9jbXMvY29ubmVjdG9ycy9wYWdlL2NvbnZlcnRlcnMnO1xuaW1wb3J0IHsgQ21zU3RydWN0dXJlTW9kZWwgfSBmcm9tICcuLi8uLi8uLi9jbXMvbW9kZWwvcGFnZS5tb2RlbCc7XG5pbXBvcnQgeyBQYWdlVHlwZSB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2Ntcy5tb2RlbCc7XG5pbXBvcnQgeyBQYWdlQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uL3JvdXRpbmcnO1xuaW1wb3J0IHsgQ29udmVydGVyU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvY29udmVydGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgT2NjRW5kcG9pbnRzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL29jYy1lbmRwb2ludHMuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBPY2NDbXNQYWdlQWRhcHRlciBpbXBsZW1lbnRzIENtc1BhZ2VBZGFwdGVyIHtcbiAgcHJvdGVjdGVkIGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKS5zZXQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByaXZhdGUgb2NjRW5kcG9pbnRzOiBPY2NFbmRwb2ludHNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjb252ZXJ0ZXI6IENvbnZlcnRlclNlcnZpY2VcbiAgKSB7fVxuXG4gIGxvYWQoXG4gICAgcGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0LFxuICAgIGZpZWxkcz86IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPENtc1N0cnVjdHVyZU1vZGVsPiB7XG4gICAgLy8gbG9hZCBwYWdlIGJ5IElkXG4gICAgaWYgKHBhZ2VDb250ZXh0LnR5cGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgICAuZ2V0KFxuICAgICAgICAgIHRoaXMub2NjRW5kcG9pbnRzLmdldFVybChcbiAgICAgICAgICAgICdwYWdlJyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgaWQ6IHBhZ2VDb250ZXh0LmlkLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHsgZmllbGRzOiBmaWVsZHMgPyBmaWVsZHMgOiAnREVGQVVMVCcgfVxuICAgICAgICAgICksXG4gICAgICAgICAge1xuICAgICAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJzLFxuICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgICAgICAucGlwZSh0aGlzLmNvbnZlcnRlci5waXBlYWJsZShDTVNfUEFHRV9OT1JNQUxJWkVSKSk7XG4gICAgfVxuXG4gICAgLy8gbG9hZCBwYWdlIGJ5IFBhZ2VDb250ZXh0XG4gICAgY29uc3QgaHR0cFBhcmFtcyA9IHRoaXMuZ2V0UGFnZXNSZXF1ZXN0UGFyYW1zKHBhZ2VDb250ZXh0KTtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0KHRoaXMuZ2V0UGFnZXNFbmRwb2ludChodHRwUGFyYW1zLCBmaWVsZHMpLCB7XG4gICAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVycyxcbiAgICAgIH0pXG4gICAgICAucGlwZSh0aGlzLmNvbnZlcnRlci5waXBlYWJsZShDTVNfUEFHRV9OT1JNQUxJWkVSKSk7XG4gIH1cblxuICBwcml2YXRlIGdldFBhZ2VzRW5kcG9pbnQoXG4gICAgcGFyYW1zOiB7XG4gICAgICBba2V5OiBzdHJpbmddOiBzdHJpbmc7XG4gICAgfSxcbiAgICBmaWVsZHM/OiBzdHJpbmdcbiAgKTogc3RyaW5nIHtcbiAgICBmaWVsZHMgPSBmaWVsZHMgPyBmaWVsZHMgOiAnREVGQVVMVCc7XG4gICAgcmV0dXJuIHRoaXMub2NjRW5kcG9pbnRzLmdldFVybCgncGFnZXMnLCB7fSwgeyBmaWVsZHMsIC4uLnBhcmFtcyB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0UGFnZXNSZXF1ZXN0UGFyYW1zKFxuICAgIHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dFxuICApOiB7IFtrZXk6IHN0cmluZ106IGFueSB9IHtcbiAgICBsZXQgaHR0cFBhcmFtcyA9IHt9O1xuXG4gICAgLy8gc21hcnRlZGl0IHByZXZpZXcgcGFnZSBpcyBsb2FkZWQgYnkgcHJldmlld1Rva2VuIHdoaWNoIGFkZGVkIGJ5IGludGVyY2VwdG9yXG4gICAgaWYgKHBhZ2VDb250ZXh0LmlkICE9PSAnc21hcnRlZGl0LXByZXZpZXcnKSB7XG4gICAgICBodHRwUGFyYW1zID0geyBwYWdlVHlwZTogcGFnZUNvbnRleHQudHlwZSB9O1xuXG4gICAgICBpZiAocGFnZUNvbnRleHQudHlwZSA9PT0gUGFnZVR5cGUuQ09OVEVOVF9QQUdFKSB7XG4gICAgICAgIGh0dHBQYXJhbXNbJ3BhZ2VMYWJlbE9ySWQnXSA9IHBhZ2VDb250ZXh0LmlkO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaHR0cFBhcmFtc1snY29kZSddID0gcGFnZUNvbnRleHQuaWQ7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBodHRwUGFyYW1zO1xuICB9XG59XG4iXX0=
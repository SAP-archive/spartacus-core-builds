/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
import { CMS_PAGE_NORMALIZER } from '../../../cms/connectors/page/converters';
import { ConverterService } from '../../../util/converter.service';
import { PageType } from '../../../model/cms.model';
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
                fields: fields ? fields : 'DEFAULT',
            }), {
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
        return this.occEndpoints.getUrl('pages', { fields: fields }, params);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNtcy1wYWdlLmFkYXB0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvb2NjL2FkYXB0ZXJzL2Ntcy9vY2MtY21zLXBhZ2UuYWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRzNFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRW5FLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUVwRDtJQUlFLDJCQUNVLElBQWdCLEVBQ2hCLFlBQWlDLEVBQy9CLFNBQTJCO1FBRjdCLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsaUJBQVksR0FBWixZQUFZLENBQXFCO1FBQy9CLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBTDdCLFlBQU8sR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztJQU0zRSxDQUFDOzs7Ozs7SUFFSixnQ0FBSTs7Ozs7SUFBSixVQUNFLFdBQXdCLEVBQ3hCLE1BQWU7UUFFZixrQkFBa0I7UUFDbEIsSUFBSSxXQUFXLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRTtZQUNsQyxPQUFPLElBQUksQ0FBQyxJQUFJO2lCQUNiLEdBQUcsQ0FDRixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7Z0JBQy9CLEVBQUUsRUFBRSxXQUFXLENBQUMsRUFBRTtnQkFDbEIsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxTQUFTO2FBQ3BDLENBQUMsRUFDRjtnQkFDRSxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87YUFDdEIsQ0FDRjtpQkFDQSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO1NBQ3ZEOzs7WUFHSyxVQUFVLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsQ0FBQztRQUMxRCxPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsR0FBRyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDOUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1NBQ3RCLENBQUM7YUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO0lBQ3hELENBQUM7Ozs7Ozs7SUFFTyw0Q0FBZ0I7Ozs7OztJQUF4QixVQUNFLE1BRUMsRUFDRCxNQUFlO1FBRWYsTUFBTSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDckMsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsRUFBRSxNQUFNLFFBQUEsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQy9ELENBQUM7Ozs7OztJQUVPLGlEQUFxQjs7Ozs7SUFBN0IsVUFDRSxXQUF3Qjs7WUFFcEIsVUFBVSxHQUFHLEVBQUU7UUFFbkIsOEVBQThFO1FBQzlFLElBQUksV0FBVyxDQUFDLEVBQUUsS0FBSyxtQkFBbUIsRUFBRTtZQUMxQyxVQUFVLEdBQUcsRUFBRSxRQUFRLEVBQUUsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO1lBRTVDLElBQUksV0FBVyxDQUFDLElBQUksS0FBSyxRQUFRLENBQUMsWUFBWSxFQUFFO2dCQUM5QyxVQUFVLENBQUMsZUFBZSxDQUFDLEdBQUcsV0FBVyxDQUFDLEVBQUUsQ0FBQzthQUM5QztpQkFBTTtnQkFDTCxVQUFVLENBQUMsTUFBTSxDQUFDLEdBQUcsV0FBVyxDQUFDLEVBQUUsQ0FBQzthQUNyQztTQUNGO1FBQ0QsT0FBTyxVQUFVLENBQUM7SUFDcEIsQ0FBQzs7Z0JBaEVGLFVBQVU7Ozs7Z0JBWEYsVUFBVTtnQkFHVixtQkFBbUI7Z0JBSW5CLGdCQUFnQjs7SUFxRXpCLHdCQUFDO0NBQUEsQUFqRUQsSUFpRUM7U0FoRVksaUJBQWlCOzs7Ozs7SUFDNUIsb0NBQThFOzs7OztJQUc1RSxpQ0FBd0I7Ozs7O0lBQ3hCLHlDQUF5Qzs7Ozs7SUFDekMsc0NBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBPY2NFbmRwb2ludHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvb2NjLWVuZHBvaW50cy5zZXJ2aWNlJztcbmltcG9ydCB7IFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vcm91dGluZyc7XG5pbXBvcnQgeyBDbXNQYWdlQWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL2Ntcy9jb25uZWN0b3JzL3BhZ2UvY21zLXBhZ2UuYWRhcHRlcic7XG5pbXBvcnQgeyBDTVNfUEFHRV9OT1JNQUxJWkVSIH0gZnJvbSAnLi4vLi4vLi4vY21zL2Nvbm5lY3RvcnMvcGFnZS9jb252ZXJ0ZXJzJztcbmltcG9ydCB7IENvbnZlcnRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi91dGlsL2NvbnZlcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7IENtc1N0cnVjdHVyZU1vZGVsIH0gZnJvbSAnLi4vLi4vLi4vY21zL21vZGVsL3BhZ2UubW9kZWwnO1xuaW1wb3J0IHsgUGFnZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9jbXMubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT2NjQ21zUGFnZUFkYXB0ZXIgaW1wbGVtZW50cyBDbXNQYWdlQWRhcHRlciB7XG4gIHByb3RlY3RlZCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKCkuc2V0KCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgICBwcml2YXRlIG9jY0VuZHBvaW50czogT2NjRW5kcG9pbnRzU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY29udmVydGVyOiBDb252ZXJ0ZXJTZXJ2aWNlXG4gICkge31cblxuICBsb2FkKFxuICAgIHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCxcbiAgICBmaWVsZHM/OiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxDbXNTdHJ1Y3R1cmVNb2RlbD4ge1xuICAgIC8vIGxvYWQgcGFnZSBieSBJZFxuICAgIGlmIChwYWdlQ29udGV4dC50eXBlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgICAgLmdldChcbiAgICAgICAgICB0aGlzLm9jY0VuZHBvaW50cy5nZXRVcmwoJ3BhZ2UnLCB7XG4gICAgICAgICAgICBpZDogcGFnZUNvbnRleHQuaWQsXG4gICAgICAgICAgICBmaWVsZHM6IGZpZWxkcyA/IGZpZWxkcyA6ICdERUZBVUxUJyxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlcnMsXG4gICAgICAgICAgfVxuICAgICAgICApXG4gICAgICAgIC5waXBlKHRoaXMuY29udmVydGVyLnBpcGVhYmxlKENNU19QQUdFX05PUk1BTElaRVIpKTtcbiAgICB9XG5cbiAgICAvLyBsb2FkIHBhZ2UgYnkgUGFnZUNvbnRleHRcbiAgICBjb25zdCBodHRwUGFyYW1zID0gdGhpcy5nZXRQYWdlc1JlcXVlc3RQYXJhbXMocGFnZUNvbnRleHQpO1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5nZXQodGhpcy5nZXRQYWdlc0VuZHBvaW50KGh0dHBQYXJhbXMsIGZpZWxkcyksIHtcbiAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJzLFxuICAgICAgfSlcbiAgICAgIC5waXBlKHRoaXMuY29udmVydGVyLnBpcGVhYmxlKENNU19QQUdFX05PUk1BTElaRVIpKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0UGFnZXNFbmRwb2ludChcbiAgICBwYXJhbXM6IHtcbiAgICAgIFtrZXk6IHN0cmluZ106IHN0cmluZztcbiAgICB9LFxuICAgIGZpZWxkcz86IHN0cmluZ1xuICApOiBzdHJpbmcge1xuICAgIGZpZWxkcyA9IGZpZWxkcyA/IGZpZWxkcyA6ICdERUZBVUxUJztcbiAgICByZXR1cm4gdGhpcy5vY2NFbmRwb2ludHMuZ2V0VXJsKCdwYWdlcycsIHsgZmllbGRzIH0sIHBhcmFtcyk7XG4gIH1cblxuICBwcml2YXRlIGdldFBhZ2VzUmVxdWVzdFBhcmFtcyhcbiAgICBwYWdlQ29udGV4dDogUGFnZUNvbnRleHRcbiAgKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSB7XG4gICAgbGV0IGh0dHBQYXJhbXMgPSB7fTtcblxuICAgIC8vIHNtYXJ0ZWRpdCBwcmV2aWV3IHBhZ2UgaXMgbG9hZGVkIGJ5IHByZXZpZXdUb2tlbiB3aGljaCBhZGRlZCBieSBpbnRlcmNlcHRvclxuICAgIGlmIChwYWdlQ29udGV4dC5pZCAhPT0gJ3NtYXJ0ZWRpdC1wcmV2aWV3Jykge1xuICAgICAgaHR0cFBhcmFtcyA9IHsgcGFnZVR5cGU6IHBhZ2VDb250ZXh0LnR5cGUgfTtcblxuICAgICAgaWYgKHBhZ2VDb250ZXh0LnR5cGUgPT09IFBhZ2VUeXBlLkNPTlRFTlRfUEFHRSkge1xuICAgICAgICBodHRwUGFyYW1zWydwYWdlTGFiZWxPcklkJ10gPSBwYWdlQ29udGV4dC5pZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGh0dHBQYXJhbXNbJ2NvZGUnXSA9IHBhZ2VDb250ZXh0LmlkO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaHR0cFBhcmFtcztcbiAgfVxufVxuIl19
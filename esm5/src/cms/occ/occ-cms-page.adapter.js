/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OccEndpointsService } from '../../occ/services/occ-endpoints.service';
import { CMS_PAGE_NORMALIZE } from '../connectors/page/converters';
import { ConverterService } from '../../util/converter.service';
import { PageType } from '../../model/cms.model';
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
                .pipe(this.converter.pipeable(CMS_PAGE_NORMALIZE));
        }
        // load page by PageContext
        /** @type {?} */
        var httpParams = this.getPagesRequestParams(pageContext);
        return this.http
            .get(this.getPagesEndpoint(httpParams, fields), {
            headers: this.headers,
        })
            .pipe(this.converter.pipeable(CMS_PAGE_NORMALIZE));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNtcy1wYWdlLmFkYXB0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL29jYy9vY2MtY21zLXBhZ2UuYWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBRy9FLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRWhFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUVqRDtJQUlFLDJCQUNVLElBQWdCLEVBQ2hCLFlBQWlDLEVBQy9CLFNBQTJCO1FBRjdCLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsaUJBQVksR0FBWixZQUFZLENBQXFCO1FBQy9CLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBTDdCLFlBQU8sR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztJQU0zRSxDQUFDOzs7Ozs7SUFFSixnQ0FBSTs7Ozs7SUFBSixVQUNFLFdBQXdCLEVBQ3hCLE1BQWU7UUFFZixrQkFBa0I7UUFDbEIsSUFBSSxXQUFXLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRTtZQUNsQyxPQUFPLElBQUksQ0FBQyxJQUFJO2lCQUNiLEdBQUcsQ0FDRixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7Z0JBQy9CLEVBQUUsRUFBRSxXQUFXLENBQUMsRUFBRTtnQkFDbEIsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxTQUFTO2FBQ3BDLENBQUMsRUFDRjtnQkFDRSxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87YUFDdEIsQ0FDRjtpQkFDQSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO1NBQ3REOzs7WUFHSyxVQUFVLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsQ0FBQztRQUMxRCxPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsR0FBRyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDOUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1NBQ3RCLENBQUM7YUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Ozs7Ozs7SUFFTyw0Q0FBZ0I7Ozs7OztJQUF4QixVQUNFLE1BRUMsRUFDRCxNQUFlO1FBRWYsTUFBTSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDckMsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsRUFBRSxNQUFNLFFBQUEsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQy9ELENBQUM7Ozs7OztJQUVPLGlEQUFxQjs7Ozs7SUFBN0IsVUFDRSxXQUF3Qjs7WUFFcEIsVUFBVSxHQUFHLEVBQUU7UUFFbkIsOEVBQThFO1FBQzlFLElBQUksV0FBVyxDQUFDLEVBQUUsS0FBSyxtQkFBbUIsRUFBRTtZQUMxQyxVQUFVLEdBQUcsRUFBRSxRQUFRLEVBQUUsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO1lBRTVDLElBQUksV0FBVyxDQUFDLElBQUksS0FBSyxRQUFRLENBQUMsWUFBWSxFQUFFO2dCQUM5QyxVQUFVLENBQUMsZUFBZSxDQUFDLEdBQUcsV0FBVyxDQUFDLEVBQUUsQ0FBQzthQUM5QztpQkFBTTtnQkFDTCxVQUFVLENBQUMsTUFBTSxDQUFDLEdBQUcsV0FBVyxDQUFDLEVBQUUsQ0FBQzthQUNyQztTQUNGO1FBQ0QsT0FBTyxVQUFVLENBQUM7SUFDcEIsQ0FBQzs7Z0JBaEVGLFVBQVU7Ozs7Z0JBWEYsVUFBVTtnQkFHVixtQkFBbUI7Z0JBSW5CLGdCQUFnQjs7SUFxRXpCLHdCQUFDO0NBQUEsQUFqRUQsSUFpRUM7U0FoRVksaUJBQWlCOzs7Ozs7SUFDNUIsb0NBQThFOzs7OztJQUc1RSxpQ0FBd0I7Ozs7O0lBQ3hCLHlDQUF5Qzs7Ozs7SUFDekMsc0NBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBPY2NFbmRwb2ludHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vb2NjL3NlcnZpY2VzL29jYy1lbmRwb2ludHMuc2VydmljZSc7XG5pbXBvcnQgeyBQYWdlQ29udGV4dCB9IGZyb20gJy4uLy4uL3JvdXRpbmcvaW5kZXgnO1xuaW1wb3J0IHsgQ21zUGFnZUFkYXB0ZXIgfSBmcm9tICcuLi9jb25uZWN0b3JzL3BhZ2UvY21zLXBhZ2UuYWRhcHRlcic7XG5pbXBvcnQgeyBDTVNfUEFHRV9OT1JNQUxJWkUgfSBmcm9tICcuLi9jb25uZWN0b3JzL3BhZ2UvY29udmVydGVycyc7XG5pbXBvcnQgeyBDb252ZXJ0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vdXRpbC9jb252ZXJ0ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBDbXNTdHJ1Y3R1cmVNb2RlbCB9IGZyb20gJy4uL21vZGVsL3BhZ2UubW9kZWwnO1xuaW1wb3J0IHsgUGFnZVR5cGUgfSBmcm9tICcuLi8uLi9tb2RlbC9jbXMubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT2NjQ21zUGFnZUFkYXB0ZXIgaW1wbGVtZW50cyBDbXNQYWdlQWRhcHRlciB7XG4gIHByb3RlY3RlZCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKCkuc2V0KCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgICBwcml2YXRlIG9jY0VuZHBvaW50czogT2NjRW5kcG9pbnRzU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY29udmVydGVyOiBDb252ZXJ0ZXJTZXJ2aWNlXG4gICkge31cblxuICBsb2FkKFxuICAgIHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCxcbiAgICBmaWVsZHM/OiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxDbXNTdHJ1Y3R1cmVNb2RlbD4ge1xuICAgIC8vIGxvYWQgcGFnZSBieSBJZFxuICAgIGlmIChwYWdlQ29udGV4dC50eXBlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgICAgLmdldChcbiAgICAgICAgICB0aGlzLm9jY0VuZHBvaW50cy5nZXRVcmwoJ3BhZ2UnLCB7XG4gICAgICAgICAgICBpZDogcGFnZUNvbnRleHQuaWQsXG4gICAgICAgICAgICBmaWVsZHM6IGZpZWxkcyA/IGZpZWxkcyA6ICdERUZBVUxUJyxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlcnMsXG4gICAgICAgICAgfVxuICAgICAgICApXG4gICAgICAgIC5waXBlKHRoaXMuY29udmVydGVyLnBpcGVhYmxlKENNU19QQUdFX05PUk1BTElaRSkpO1xuICAgIH1cblxuICAgIC8vIGxvYWQgcGFnZSBieSBQYWdlQ29udGV4dFxuICAgIGNvbnN0IGh0dHBQYXJhbXMgPSB0aGlzLmdldFBhZ2VzUmVxdWVzdFBhcmFtcyhwYWdlQ29udGV4dCk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldCh0aGlzLmdldFBhZ2VzRW5kcG9pbnQoaHR0cFBhcmFtcywgZmllbGRzKSwge1xuICAgICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlcnMsXG4gICAgICB9KVxuICAgICAgLnBpcGUodGhpcy5jb252ZXJ0ZXIucGlwZWFibGUoQ01TX1BBR0VfTk9STUFMSVpFKSk7XG4gIH1cblxuICBwcml2YXRlIGdldFBhZ2VzRW5kcG9pbnQoXG4gICAgcGFyYW1zOiB7XG4gICAgICBba2V5OiBzdHJpbmddOiBzdHJpbmc7XG4gICAgfSxcbiAgICBmaWVsZHM/OiBzdHJpbmdcbiAgKTogc3RyaW5nIHtcbiAgICBmaWVsZHMgPSBmaWVsZHMgPyBmaWVsZHMgOiAnREVGQVVMVCc7XG4gICAgcmV0dXJuIHRoaXMub2NjRW5kcG9pbnRzLmdldFVybCgncGFnZXMnLCB7IGZpZWxkcyB9LCBwYXJhbXMpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRQYWdlc1JlcXVlc3RQYXJhbXMoXG4gICAgcGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0XG4gICk6IHsgW2tleTogc3RyaW5nXTogYW55IH0ge1xuICAgIGxldCBodHRwUGFyYW1zID0ge307XG5cbiAgICAvLyBzbWFydGVkaXQgcHJldmlldyBwYWdlIGlzIGxvYWRlZCBieSBwcmV2aWV3VG9rZW4gd2hpY2ggYWRkZWQgYnkgaW50ZXJjZXB0b3JcbiAgICBpZiAocGFnZUNvbnRleHQuaWQgIT09ICdzbWFydGVkaXQtcHJldmlldycpIHtcbiAgICAgIGh0dHBQYXJhbXMgPSB7IHBhZ2VUeXBlOiBwYWdlQ29udGV4dC50eXBlIH07XG5cbiAgICAgIGlmIChwYWdlQ29udGV4dC50eXBlID09PSBQYWdlVHlwZS5DT05URU5UX1BBR0UpIHtcbiAgICAgICAgaHR0cFBhcmFtc1sncGFnZUxhYmVsT3JJZCddID0gcGFnZUNvbnRleHQuaWQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBodHRwUGFyYW1zWydjb2RlJ10gPSBwYWdlQ29udGV4dC5pZDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGh0dHBQYXJhbXM7XG4gIH1cbn1cbiJdfQ==
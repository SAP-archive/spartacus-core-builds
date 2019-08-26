/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CMS_PAGE_NORMALIZER } from '../../../cms/connectors/page/converters';
import { PageType } from '../../../model/cms.model';
import { ConverterService } from '../../../util/converter.service';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
export class OccCmsPageAdapter {
    /**
     * @param {?} http
     * @param {?} occEndpoints
     * @param {?} converter
     */
    constructor(http, occEndpoints, converter) {
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
    load(pageContext, fields) {
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
        const httpParams = this.getPagesRequestParams(pageContext);
        return this.http
            .get(this.getPagesEndpoint(httpParams, fields), {
            headers: this.headers,
        })
            .pipe(this.converter.pipeable(CMS_PAGE_NORMALIZER));
    }
    /**
     * @private
     * @param {?} params
     * @param {?=} fields
     * @return {?}
     */
    getPagesEndpoint(params, fields) {
        fields = fields ? fields : 'DEFAULT';
        return this.occEndpoints.getUrl('pages', {}, Object.assign({ fields }, params));
    }
    /**
     * @private
     * @param {?} pageContext
     * @return {?}
     */
    getPagesRequestParams(pageContext) {
        /** @type {?} */
        let httpParams = {};
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
    }
}
OccCmsPageAdapter.decorators = [
    { type: Injectable }
];
/** @nocollapse */
OccCmsPageAdapter.ctorParameters = () => [
    { type: HttpClient },
    { type: OccEndpointsService },
    { type: ConverterService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNtcy1wYWdlLmFkYXB0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvb2NjL2FkYXB0ZXJzL2Ntcy9vY2MtY21zLXBhZ2UuYWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBRTlFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUVwRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNuRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUczRSxNQUFNLE9BQU8saUJBQWlCOzs7Ozs7SUFHNUIsWUFDVSxJQUFnQixFQUNoQixZQUFpQyxFQUMvQixTQUEyQjtRQUY3QixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLGlCQUFZLEdBQVosWUFBWSxDQUFxQjtRQUMvQixjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUw3QixZQUFPLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7SUFNM0UsQ0FBQzs7Ozs7O0lBRUosSUFBSSxDQUNGLFdBQXdCLEVBQ3hCLE1BQWU7UUFFZixrQkFBa0I7UUFDbEIsSUFBSSxXQUFXLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRTtZQUNsQyxPQUFPLElBQUksQ0FBQyxJQUFJO2lCQUNiLEdBQUcsQ0FDRixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FDdEIsTUFBTSxFQUNOO2dCQUNFLEVBQUUsRUFBRSxXQUFXLENBQUMsRUFBRTthQUNuQixFQUNELEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FDeEMsRUFDRDtnQkFDRSxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87YUFDdEIsQ0FDRjtpQkFDQSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO1NBQ3ZEOzs7Y0FHSyxVQUFVLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsQ0FBQztRQUMxRCxPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsR0FBRyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDOUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1NBQ3RCLENBQUM7YUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO0lBQ3hELENBQUM7Ozs7Ozs7SUFFTyxnQkFBZ0IsQ0FDdEIsTUFFQyxFQUNELE1BQWU7UUFFZixNQUFNLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNyQyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxFQUFFLGtCQUFJLE1BQU0sSUFBSyxNQUFNLEVBQUcsQ0FBQztJQUN0RSxDQUFDOzs7Ozs7SUFFTyxxQkFBcUIsQ0FDM0IsV0FBd0I7O1lBRXBCLFVBQVUsR0FBRyxFQUFFO1FBRW5CLDhFQUE4RTtRQUM5RSxJQUFJLFdBQVcsQ0FBQyxFQUFFLEtBQUssbUJBQW1CLEVBQUU7WUFDMUMsVUFBVSxHQUFHLEVBQUUsUUFBUSxFQUFFLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUU1QyxJQUFJLFdBQVcsQ0FBQyxJQUFJLEtBQUssUUFBUSxDQUFDLFlBQVksRUFBRTtnQkFDOUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxFQUFFLENBQUM7YUFDOUM7aUJBQU07Z0JBQ0wsVUFBVSxDQUFDLE1BQU0sQ0FBQyxHQUFHLFdBQVcsQ0FBQyxFQUFFLENBQUM7YUFDckM7U0FDRjtRQUNELE9BQU8sVUFBVSxDQUFDO0lBQ3BCLENBQUM7OztZQW5FRixVQUFVOzs7O1lBWEYsVUFBVTtZQVNWLG1CQUFtQjtZQURuQixnQkFBZ0I7Ozs7Ozs7SUFLdkIsb0NBQThFOzs7OztJQUc1RSxpQ0FBd0I7Ozs7O0lBQ3hCLHlDQUF5Qzs7Ozs7SUFDekMsc0NBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDbXNQYWdlQWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL2Ntcy9jb25uZWN0b3JzL3BhZ2UvY21zLXBhZ2UuYWRhcHRlcic7XG5pbXBvcnQgeyBDTVNfUEFHRV9OT1JNQUxJWkVSIH0gZnJvbSAnLi4vLi4vLi4vY21zL2Nvbm5lY3RvcnMvcGFnZS9jb252ZXJ0ZXJzJztcbmltcG9ydCB7IENtc1N0cnVjdHVyZU1vZGVsIH0gZnJvbSAnLi4vLi4vLi4vY21zL21vZGVsL3BhZ2UubW9kZWwnO1xuaW1wb3J0IHsgUGFnZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9jbXMubW9kZWwnO1xuaW1wb3J0IHsgUGFnZUNvbnRleHQgfSBmcm9tICcuLi8uLi8uLi9yb3V0aW5nJztcbmltcG9ydCB7IENvbnZlcnRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi91dGlsL2NvbnZlcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7IE9jY0VuZHBvaW50c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9vY2MtZW5kcG9pbnRzLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT2NjQ21zUGFnZUFkYXB0ZXIgaW1wbGVtZW50cyBDbXNQYWdlQWRhcHRlciB7XG4gIHByb3RlY3RlZCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKCkuc2V0KCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgICBwcml2YXRlIG9jY0VuZHBvaW50czogT2NjRW5kcG9pbnRzU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY29udmVydGVyOiBDb252ZXJ0ZXJTZXJ2aWNlXG4gICkge31cblxuICBsb2FkKFxuICAgIHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCxcbiAgICBmaWVsZHM/OiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxDbXNTdHJ1Y3R1cmVNb2RlbD4ge1xuICAgIC8vIGxvYWQgcGFnZSBieSBJZFxuICAgIGlmIChwYWdlQ29udGV4dC50eXBlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgICAgLmdldChcbiAgICAgICAgICB0aGlzLm9jY0VuZHBvaW50cy5nZXRVcmwoXG4gICAgICAgICAgICAncGFnZScsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGlkOiBwYWdlQ29udGV4dC5pZCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7IGZpZWxkczogZmllbGRzID8gZmllbGRzIDogJ0RFRkFVTFQnIH1cbiAgICAgICAgICApLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVycyxcbiAgICAgICAgICB9XG4gICAgICAgIClcbiAgICAgICAgLnBpcGUodGhpcy5jb252ZXJ0ZXIucGlwZWFibGUoQ01TX1BBR0VfTk9STUFMSVpFUikpO1xuICAgIH1cblxuICAgIC8vIGxvYWQgcGFnZSBieSBQYWdlQ29udGV4dFxuICAgIGNvbnN0IGh0dHBQYXJhbXMgPSB0aGlzLmdldFBhZ2VzUmVxdWVzdFBhcmFtcyhwYWdlQ29udGV4dCk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldCh0aGlzLmdldFBhZ2VzRW5kcG9pbnQoaHR0cFBhcmFtcywgZmllbGRzKSwge1xuICAgICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlcnMsXG4gICAgICB9KVxuICAgICAgLnBpcGUodGhpcy5jb252ZXJ0ZXIucGlwZWFibGUoQ01TX1BBR0VfTk9STUFMSVpFUikpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRQYWdlc0VuZHBvaW50KFxuICAgIHBhcmFtczoge1xuICAgICAgW2tleTogc3RyaW5nXTogc3RyaW5nO1xuICAgIH0sXG4gICAgZmllbGRzPzogc3RyaW5nXG4gICk6IHN0cmluZyB7XG4gICAgZmllbGRzID0gZmllbGRzID8gZmllbGRzIDogJ0RFRkFVTFQnO1xuICAgIHJldHVybiB0aGlzLm9jY0VuZHBvaW50cy5nZXRVcmwoJ3BhZ2VzJywge30sIHsgZmllbGRzLCAuLi5wYXJhbXMgfSk7XG4gIH1cblxuICBwcml2YXRlIGdldFBhZ2VzUmVxdWVzdFBhcmFtcyhcbiAgICBwYWdlQ29udGV4dDogUGFnZUNvbnRleHRcbiAgKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSB7XG4gICAgbGV0IGh0dHBQYXJhbXMgPSB7fTtcblxuICAgIC8vIHNtYXJ0ZWRpdCBwcmV2aWV3IHBhZ2UgaXMgbG9hZGVkIGJ5IHByZXZpZXdUb2tlbiB3aGljaCBhZGRlZCBieSBpbnRlcmNlcHRvclxuICAgIGlmIChwYWdlQ29udGV4dC5pZCAhPT0gJ3NtYXJ0ZWRpdC1wcmV2aWV3Jykge1xuICAgICAgaHR0cFBhcmFtcyA9IHsgcGFnZVR5cGU6IHBhZ2VDb250ZXh0LnR5cGUgfTtcblxuICAgICAgaWYgKHBhZ2VDb250ZXh0LnR5cGUgPT09IFBhZ2VUeXBlLkNPTlRFTlRfUEFHRSkge1xuICAgICAgICBodHRwUGFyYW1zWydwYWdlTGFiZWxPcklkJ10gPSBwYWdlQ29udGV4dC5pZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGh0dHBQYXJhbXNbJ2NvZGUnXSA9IHBhZ2VDb250ZXh0LmlkO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaHR0cFBhcmFtcztcbiAgfVxufVxuIl19
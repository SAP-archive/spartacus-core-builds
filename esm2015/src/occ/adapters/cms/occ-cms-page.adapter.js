/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
import { CMS_PAGE_NORMALIZE } from '../../../cms/connectors/page/converters';
import { ConverterService } from '../../../util/converter.service';
import { PageType } from '../../../model/cms.model';
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
                fields: fields ? fields : 'DEFAULT',
            }), {
                headers: this.headers,
            })
                .pipe(this.converter.pipeable(CMS_PAGE_NORMALIZE));
        }
        // load page by PageContext
        /** @type {?} */
        const httpParams = this.getPagesRequestParams(pageContext);
        return this.http
            .get(this.getPagesEndpoint(httpParams, fields), {
            headers: this.headers,
        })
            .pipe(this.converter.pipeable(CMS_PAGE_NORMALIZE));
    }
    /**
     * @private
     * @param {?} params
     * @param {?=} fields
     * @return {?}
     */
    getPagesEndpoint(params, fields) {
        fields = fields ? fields : 'DEFAULT';
        return this.occEndpoints.getUrl('pages', { fields }, params);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNtcy1wYWdlLmFkYXB0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvb2NjL2FkYXB0ZXJzL2Ntcy9vY2MtY21zLXBhZ2UuYWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRzNFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRW5FLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUdwRCxNQUFNLE9BQU8saUJBQWlCOzs7Ozs7SUFHNUIsWUFDVSxJQUFnQixFQUNoQixZQUFpQyxFQUMvQixTQUEyQjtRQUY3QixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLGlCQUFZLEdBQVosWUFBWSxDQUFxQjtRQUMvQixjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUw3QixZQUFPLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7SUFNM0UsQ0FBQzs7Ozs7O0lBRUosSUFBSSxDQUNGLFdBQXdCLEVBQ3hCLE1BQWU7UUFFZixrQkFBa0I7UUFDbEIsSUFBSSxXQUFXLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRTtZQUNsQyxPQUFPLElBQUksQ0FBQyxJQUFJO2lCQUNiLEdBQUcsQ0FDRixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7Z0JBQy9CLEVBQUUsRUFBRSxXQUFXLENBQUMsRUFBRTtnQkFDbEIsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxTQUFTO2FBQ3BDLENBQUMsRUFDRjtnQkFDRSxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87YUFDdEIsQ0FDRjtpQkFDQSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO1NBQ3REOzs7Y0FHSyxVQUFVLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsQ0FBQztRQUMxRCxPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsR0FBRyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDOUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1NBQ3RCLENBQUM7YUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Ozs7Ozs7SUFFTyxnQkFBZ0IsQ0FDdEIsTUFFQyxFQUNELE1BQWU7UUFFZixNQUFNLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNyQyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQy9ELENBQUM7Ozs7OztJQUVPLHFCQUFxQixDQUMzQixXQUF3Qjs7WUFFcEIsVUFBVSxHQUFHLEVBQUU7UUFFbkIsOEVBQThFO1FBQzlFLElBQUksV0FBVyxDQUFDLEVBQUUsS0FBSyxtQkFBbUIsRUFBRTtZQUMxQyxVQUFVLEdBQUcsRUFBRSxRQUFRLEVBQUUsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO1lBRTVDLElBQUksV0FBVyxDQUFDLElBQUksS0FBSyxRQUFRLENBQUMsWUFBWSxFQUFFO2dCQUM5QyxVQUFVLENBQUMsZUFBZSxDQUFDLEdBQUcsV0FBVyxDQUFDLEVBQUUsQ0FBQzthQUM5QztpQkFBTTtnQkFDTCxVQUFVLENBQUMsTUFBTSxDQUFDLEdBQUcsV0FBVyxDQUFDLEVBQUUsQ0FBQzthQUNyQztTQUNGO1FBQ0QsT0FBTyxVQUFVLENBQUM7SUFDcEIsQ0FBQzs7O1lBaEVGLFVBQVU7Ozs7WUFYRixVQUFVO1lBR1YsbUJBQW1CO1lBSW5CLGdCQUFnQjs7Ozs7OztJQU12QixvQ0FBOEU7Ozs7O0lBRzVFLGlDQUF3Qjs7Ozs7SUFDeEIseUNBQXlDOzs7OztJQUN6QyxzQ0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE9jY0VuZHBvaW50c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9vY2MtZW5kcG9pbnRzLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGFnZUNvbnRleHQgfSBmcm9tICcuLi8uLi8uLi9yb3V0aW5nJztcbmltcG9ydCB7IENtc1BhZ2VBZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vY21zL2Nvbm5lY3RvcnMvcGFnZS9jbXMtcGFnZS5hZGFwdGVyJztcbmltcG9ydCB7IENNU19QQUdFX05PUk1BTElaRSB9IGZyb20gJy4uLy4uLy4uL2Ntcy9jb25uZWN0b3JzL3BhZ2UvY29udmVydGVycyc7XG5pbXBvcnQgeyBDb252ZXJ0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9jb252ZXJ0ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBDbXNTdHJ1Y3R1cmVNb2RlbCB9IGZyb20gJy4uLy4uLy4uL2Ntcy9tb2RlbC9wYWdlLm1vZGVsJztcbmltcG9ydCB7IFBhZ2VUeXBlIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvY21zLm1vZGVsJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE9jY0Ntc1BhZ2VBZGFwdGVyIGltcGxlbWVudHMgQ21zUGFnZUFkYXB0ZXIge1xuICBwcm90ZWN0ZWQgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpLnNldCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgcHJpdmF0ZSBvY2NFbmRwb2ludHM6IE9jY0VuZHBvaW50c1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNvbnZlcnRlcjogQ29udmVydGVyU2VydmljZVxuICApIHt9XG5cbiAgbG9hZChcbiAgICBwYWdlQ29udGV4dDogUGFnZUNvbnRleHQsXG4gICAgZmllbGRzPzogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8Q21zU3RydWN0dXJlTW9kZWw+IHtcbiAgICAvLyBsb2FkIHBhZ2UgYnkgSWRcbiAgICBpZiAocGFnZUNvbnRleHQudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAgIC5nZXQoXG4gICAgICAgICAgdGhpcy5vY2NFbmRwb2ludHMuZ2V0VXJsKCdwYWdlJywge1xuICAgICAgICAgICAgaWQ6IHBhZ2VDb250ZXh0LmlkLFxuICAgICAgICAgICAgZmllbGRzOiBmaWVsZHMgPyBmaWVsZHMgOiAnREVGQVVMVCcsXG4gICAgICAgICAgfSksXG4gICAgICAgICAge1xuICAgICAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJzLFxuICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgICAgICAucGlwZSh0aGlzLmNvbnZlcnRlci5waXBlYWJsZShDTVNfUEFHRV9OT1JNQUxJWkUpKTtcbiAgICB9XG5cbiAgICAvLyBsb2FkIHBhZ2UgYnkgUGFnZUNvbnRleHRcbiAgICBjb25zdCBodHRwUGFyYW1zID0gdGhpcy5nZXRQYWdlc1JlcXVlc3RQYXJhbXMocGFnZUNvbnRleHQpO1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5nZXQodGhpcy5nZXRQYWdlc0VuZHBvaW50KGh0dHBQYXJhbXMsIGZpZWxkcyksIHtcbiAgICAgICAgaGVhZGVyczogdGhpcy5oZWFkZXJzLFxuICAgICAgfSlcbiAgICAgIC5waXBlKHRoaXMuY29udmVydGVyLnBpcGVhYmxlKENNU19QQUdFX05PUk1BTElaRSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRQYWdlc0VuZHBvaW50KFxuICAgIHBhcmFtczoge1xuICAgICAgW2tleTogc3RyaW5nXTogc3RyaW5nO1xuICAgIH0sXG4gICAgZmllbGRzPzogc3RyaW5nXG4gICk6IHN0cmluZyB7XG4gICAgZmllbGRzID0gZmllbGRzID8gZmllbGRzIDogJ0RFRkFVTFQnO1xuICAgIHJldHVybiB0aGlzLm9jY0VuZHBvaW50cy5nZXRVcmwoJ3BhZ2VzJywgeyBmaWVsZHMgfSwgcGFyYW1zKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0UGFnZXNSZXF1ZXN0UGFyYW1zKFxuICAgIHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dFxuICApOiB7IFtrZXk6IHN0cmluZ106IGFueSB9IHtcbiAgICBsZXQgaHR0cFBhcmFtcyA9IHt9O1xuXG4gICAgLy8gc21hcnRlZGl0IHByZXZpZXcgcGFnZSBpcyBsb2FkZWQgYnkgcHJldmlld1Rva2VuIHdoaWNoIGFkZGVkIGJ5IGludGVyY2VwdG9yXG4gICAgaWYgKHBhZ2VDb250ZXh0LmlkICE9PSAnc21hcnRlZGl0LXByZXZpZXcnKSB7XG4gICAgICBodHRwUGFyYW1zID0geyBwYWdlVHlwZTogcGFnZUNvbnRleHQudHlwZSB9O1xuXG4gICAgICBpZiAocGFnZUNvbnRleHQudHlwZSA9PT0gUGFnZVR5cGUuQ09OVEVOVF9QQUdFKSB7XG4gICAgICAgIGh0dHBQYXJhbXNbJ3BhZ2VMYWJlbE9ySWQnXSA9IHBhZ2VDb250ZXh0LmlkO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaHR0cFBhcmFtc1snY29kZSddID0gcGFnZUNvbnRleHQuaWQ7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBodHRwUGFyYW1zO1xuICB9XG59XG4iXX0=
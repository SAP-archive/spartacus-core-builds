import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CMS_PAGE_NORMALIZER } from '../../../cms/connectors/page/converters';
import { PageType } from '../../../model/cms.model';
import { ConverterService } from '../../../util/converter.service';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "../../services/occ-endpoints.service";
import * as i3 from "../../../util/converter.service";
export class OccCmsPageAdapter {
    constructor(http, occEndpoints, converter) {
        this.http = http;
        this.occEndpoints = occEndpoints;
        this.converter = converter;
        this.headers = new HttpHeaders().set('Content-Type', 'application/json');
    }
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
        const httpParams = this.getPagesRequestParams(pageContext);
        return this.http
            .get(this.getPagesEndpoint(httpParams, fields), {
            headers: this.headers,
        })
            .pipe(this.converter.pipeable(CMS_PAGE_NORMALIZER));
    }
    getPagesEndpoint(params, fields) {
        fields = fields ? fields : 'DEFAULT';
        return this.occEndpoints.getUrl('pages', {}, Object.assign({ fields }, params));
    }
    getPagesRequestParams(pageContext) {
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
OccCmsPageAdapter.ɵprov = i0.ɵɵdefineInjectable({ factory: function OccCmsPageAdapter_Factory() { return new OccCmsPageAdapter(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.OccEndpointsService), i0.ɵɵinject(i3.ConverterService)); }, token: OccCmsPageAdapter, providedIn: "root" });
OccCmsPageAdapter.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
OccCmsPageAdapter.ctorParameters = () => [
    { type: HttpClient },
    { type: OccEndpointsService },
    { type: ConverterService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNtcy1wYWdlLmFkYXB0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3NyYy9vY2MvYWRhcHRlcnMvY21zL29jYy1jbXMtcGFnZS5hZGFwdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDL0QsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUU5RSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFcEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDbkUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7Ozs7O0FBSzNFLE1BQU0sT0FBTyxpQkFBaUI7SUFHNUIsWUFDVSxJQUFnQixFQUNoQixZQUFpQyxFQUMvQixTQUEyQjtRQUY3QixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLGlCQUFZLEdBQVosWUFBWSxDQUFxQjtRQUMvQixjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUw3QixZQUFPLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7SUFNM0UsQ0FBQztJQUVKLElBQUksQ0FDRixXQUF3QixFQUN4QixNQUFlO1FBRWYsa0JBQWtCO1FBQ2xCLElBQUksV0FBVyxDQUFDLElBQUksS0FBSyxTQUFTLEVBQUU7WUFDbEMsT0FBTyxJQUFJLENBQUMsSUFBSTtpQkFDYixHQUFHLENBQ0YsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQ3RCLE1BQU0sRUFDTjtnQkFDRSxFQUFFLEVBQUUsV0FBVyxDQUFDLEVBQUU7YUFDbkIsRUFDRCxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQ3hDLEVBQ0Q7Z0JBQ0UsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO2FBQ3RCLENBQ0Y7aUJBQ0EsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztTQUN2RDtRQUVELDJCQUEyQjtRQUMzQixNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDM0QsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLEdBQUcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQzlDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztTQUN0QixDQUFDO2FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRVMsZ0JBQWdCLENBQ3hCLE1BRUMsRUFDRCxNQUFlO1FBRWYsTUFBTSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDckMsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsRUFBRSxrQkFBSSxNQUFNLElBQUssTUFBTSxFQUFHLENBQUM7SUFDdEUsQ0FBQztJQUVTLHFCQUFxQixDQUM3QixXQUF3QjtRQUV4QixJQUFJLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFFcEIsOEVBQThFO1FBQzlFLElBQUksV0FBVyxDQUFDLEVBQUUsS0FBSyxtQkFBbUIsRUFBRTtZQUMxQyxVQUFVLEdBQUcsRUFBRSxRQUFRLEVBQUUsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO1lBRTVDLElBQUksV0FBVyxDQUFDLElBQUksS0FBSyxRQUFRLENBQUMsWUFBWSxFQUFFO2dCQUM5QyxVQUFVLENBQUMsZUFBZSxDQUFDLEdBQUcsV0FBVyxDQUFDLEVBQUUsQ0FBQzthQUM5QztpQkFBTTtnQkFDTCxVQUFVLENBQUMsTUFBTSxDQUFDLEdBQUcsV0FBVyxDQUFDLEVBQUUsQ0FBQzthQUNyQztTQUNGO1FBQ0QsT0FBTyxVQUFVLENBQUM7SUFDcEIsQ0FBQzs7OztZQXJFRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7OztZQWJRLFVBQVU7WUFTVixtQkFBbUI7WUFEbkIsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDbXNQYWdlQWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL2Ntcy9jb25uZWN0b3JzL3BhZ2UvY21zLXBhZ2UuYWRhcHRlcic7XG5pbXBvcnQgeyBDTVNfUEFHRV9OT1JNQUxJWkVSIH0gZnJvbSAnLi4vLi4vLi4vY21zL2Nvbm5lY3RvcnMvcGFnZS9jb252ZXJ0ZXJzJztcbmltcG9ydCB7IENtc1N0cnVjdHVyZU1vZGVsIH0gZnJvbSAnLi4vLi4vLi4vY21zL21vZGVsL3BhZ2UubW9kZWwnO1xuaW1wb3J0IHsgUGFnZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9jbXMubW9kZWwnO1xuaW1wb3J0IHsgUGFnZUNvbnRleHQgfSBmcm9tICcuLi8uLi8uLi9yb3V0aW5nJztcbmltcG9ydCB7IENvbnZlcnRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi91dGlsL2NvbnZlcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7IE9jY0VuZHBvaW50c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9vY2MtZW5kcG9pbnRzLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgT2NjQ21zUGFnZUFkYXB0ZXIgaW1wbGVtZW50cyBDbXNQYWdlQWRhcHRlciB7XG4gIHByb3RlY3RlZCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKCkuc2V0KCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgICBwcml2YXRlIG9jY0VuZHBvaW50czogT2NjRW5kcG9pbnRzU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY29udmVydGVyOiBDb252ZXJ0ZXJTZXJ2aWNlXG4gICkge31cblxuICBsb2FkKFxuICAgIHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCxcbiAgICBmaWVsZHM/OiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxDbXNTdHJ1Y3R1cmVNb2RlbD4ge1xuICAgIC8vIGxvYWQgcGFnZSBieSBJZFxuICAgIGlmIChwYWdlQ29udGV4dC50eXBlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgICAgLmdldChcbiAgICAgICAgICB0aGlzLm9jY0VuZHBvaW50cy5nZXRVcmwoXG4gICAgICAgICAgICAncGFnZScsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGlkOiBwYWdlQ29udGV4dC5pZCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7IGZpZWxkczogZmllbGRzID8gZmllbGRzIDogJ0RFRkFVTFQnIH1cbiAgICAgICAgICApLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVycyxcbiAgICAgICAgICB9XG4gICAgICAgIClcbiAgICAgICAgLnBpcGUodGhpcy5jb252ZXJ0ZXIucGlwZWFibGUoQ01TX1BBR0VfTk9STUFMSVpFUikpO1xuICAgIH1cblxuICAgIC8vIGxvYWQgcGFnZSBieSBQYWdlQ29udGV4dFxuICAgIGNvbnN0IGh0dHBQYXJhbXMgPSB0aGlzLmdldFBhZ2VzUmVxdWVzdFBhcmFtcyhwYWdlQ29udGV4dCk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldCh0aGlzLmdldFBhZ2VzRW5kcG9pbnQoaHR0cFBhcmFtcywgZmllbGRzKSwge1xuICAgICAgICBoZWFkZXJzOiB0aGlzLmhlYWRlcnMsXG4gICAgICB9KVxuICAgICAgLnBpcGUodGhpcy5jb252ZXJ0ZXIucGlwZWFibGUoQ01TX1BBR0VfTk9STUFMSVpFUikpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldFBhZ2VzRW5kcG9pbnQoXG4gICAgcGFyYW1zOiB7XG4gICAgICBba2V5OiBzdHJpbmddOiBzdHJpbmc7XG4gICAgfSxcbiAgICBmaWVsZHM/OiBzdHJpbmdcbiAgKTogc3RyaW5nIHtcbiAgICBmaWVsZHMgPSBmaWVsZHMgPyBmaWVsZHMgOiAnREVGQVVMVCc7XG4gICAgcmV0dXJuIHRoaXMub2NjRW5kcG9pbnRzLmdldFVybCgncGFnZXMnLCB7fSwgeyBmaWVsZHMsIC4uLnBhcmFtcyB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRQYWdlc1JlcXVlc3RQYXJhbXMoXG4gICAgcGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0XG4gICk6IHsgW2tleTogc3RyaW5nXTogYW55IH0ge1xuICAgIGxldCBodHRwUGFyYW1zID0ge307XG5cbiAgICAvLyBzbWFydGVkaXQgcHJldmlldyBwYWdlIGlzIGxvYWRlZCBieSBwcmV2aWV3VG9rZW4gd2hpY2ggYWRkZWQgYnkgaW50ZXJjZXB0b3JcbiAgICBpZiAocGFnZUNvbnRleHQuaWQgIT09ICdzbWFydGVkaXQtcHJldmlldycpIHtcbiAgICAgIGh0dHBQYXJhbXMgPSB7IHBhZ2VUeXBlOiBwYWdlQ29udGV4dC50eXBlIH07XG5cbiAgICAgIGlmIChwYWdlQ29udGV4dC50eXBlID09PSBQYWdlVHlwZS5DT05URU5UX1BBR0UpIHtcbiAgICAgICAgaHR0cFBhcmFtc1sncGFnZUxhYmVsT3JJZCddID0gcGFnZUNvbnRleHQuaWQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBodHRwUGFyYW1zWydjb2RlJ10gPSBwYWdlQ29udGV4dC5pZDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGh0dHBQYXJhbXM7XG4gIH1cbn1cbiJdfQ==
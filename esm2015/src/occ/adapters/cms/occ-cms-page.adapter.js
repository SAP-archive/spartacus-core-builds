import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CMS_PAGE_NORMALIZER } from '../../../cms/connectors/page/converters';
import { PageType } from '../../../model/cms.model';
import { HOME_PAGE_CONTEXT, SMART_EDIT_CONTEXT, } from '../../../routing/models/page-context.model';
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
    /**
     * @override returns the OCC CMS page data for the given context and converts
     * the data by any configured `CMS_PAGE_NORMALIZER`.
     */
    load(pageContext) {
        const params = this.getPagesRequestParams(pageContext);
        const endpoint = !pageContext.type
            ? this.occEndpoints.getUrl('page', undefined, params)
            : this.occEndpoints.getUrl('pages', undefined, params);
        return this.http
            .get(endpoint, { headers: this.headers })
            .pipe(this.converter.pipeable(CMS_PAGE_NORMALIZER));
    }
    /**
     * The OCC CMS API allows to query pages by a combination of pageType, label and code.
     *
     * When a `ContentPage` is requested, we use the `pageLabelOrId`:
     *
     * ```
     * "/pages?pageLabelOrId=/my-page&pageType=ContentPage"
     * ```
     *
     * Other pages are queried by code:
     *
     * ```
     * "/pages?code=1234&pageType=ProductPage"
     * ```
     *
     * The page context is ignored for a home page request or in case of a
     * `smartedit-preview` request.
     */
    getPagesRequestParams(context) {
        if (context.id === HOME_PAGE_CONTEXT || context.id === SMART_EDIT_CONTEXT) {
            return {};
        }
        const httpParams = {};
        if (context.type) {
            httpParams.pageType = context.type;
        }
        if (context.type === PageType.CONTENT_PAGE) {
            httpParams.pageLabelOrId = context.id;
        }
        else {
            httpParams.code = context.id;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNtcy1wYWdlLmFkYXB0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3NyYy9vY2MvYWRhcHRlcnMvY21zL29jYy1jbXMtcGFnZS5hZGFwdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDL0QsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUU5RSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDcEQsT0FBTyxFQUNMLGlCQUFpQixFQUVqQixrQkFBa0IsR0FDbkIsTUFBTSw0Q0FBNEMsQ0FBQztBQUNwRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNuRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQzs7Ozs7QUFZM0UsTUFBTSxPQUFPLGlCQUFpQjtJQUc1QixZQUNZLElBQWdCLEVBQ2hCLFlBQWlDLEVBQ2pDLFNBQTJCO1FBRjNCLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsaUJBQVksR0FBWixZQUFZLENBQXFCO1FBQ2pDLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBTDdCLFlBQU8sR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztJQU0zRSxDQUFDO0lBRUo7OztPQUdHO0lBQ0gsSUFBSSxDQUFDLFdBQXdCO1FBQzNCLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUV2RCxNQUFNLFFBQVEsR0FBRyxDQUFDLFdBQVcsQ0FBQyxJQUFJO1lBQ2hDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQztZQUNyRCxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUV6RCxPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsR0FBRyxDQUFDLFFBQVEsRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDeEMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7O09BaUJHO0lBQ08scUJBQXFCLENBQUMsT0FBb0I7UUFDbEQsSUFBSSxPQUFPLENBQUMsRUFBRSxLQUFLLGlCQUFpQixJQUFJLE9BQU8sQ0FBQyxFQUFFLEtBQUssa0JBQWtCLEVBQUU7WUFDekUsT0FBTyxFQUFFLENBQUM7U0FDWDtRQUVELE1BQU0sVUFBVSxHQUFzQixFQUFFLENBQUM7UUFDekMsSUFBSSxPQUFPLENBQUMsSUFBSSxFQUFFO1lBQ2hCLFVBQVUsQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQztTQUNwQztRQUNELElBQUksT0FBTyxDQUFDLElBQUksS0FBSyxRQUFRLENBQUMsWUFBWSxFQUFFO1lBQzFDLFVBQVUsQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLEVBQUUsQ0FBQztTQUN2QzthQUFNO1lBQ0wsVUFBVSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDO1NBQzlCO1FBRUQsT0FBTyxVQUFVLENBQUM7SUFDcEIsQ0FBQzs7OztZQTlERixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7OztZQXhCUSxVQUFVO1lBYVYsbUJBQW1CO1lBRG5CLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ21zUGFnZUFkYXB0ZXIgfSBmcm9tICcuLi8uLi8uLi9jbXMvY29ubmVjdG9ycy9wYWdlL2Ntcy1wYWdlLmFkYXB0ZXInO1xuaW1wb3J0IHsgQ01TX1BBR0VfTk9STUFMSVpFUiB9IGZyb20gJy4uLy4uLy4uL2Ntcy9jb25uZWN0b3JzL3BhZ2UvY29udmVydGVycyc7XG5pbXBvcnQgeyBDbXNTdHJ1Y3R1cmVNb2RlbCB9IGZyb20gJy4uLy4uLy4uL2Ntcy9tb2RlbC9wYWdlLm1vZGVsJztcbmltcG9ydCB7IFBhZ2VUeXBlIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvY21zLm1vZGVsJztcbmltcG9ydCB7XG4gIEhPTUVfUEFHRV9DT05URVhULFxuICBQYWdlQ29udGV4dCxcbiAgU01BUlRfRURJVF9DT05URVhULFxufSBmcm9tICcuLi8uLi8uLi9yb3V0aW5nL21vZGVscy9wYWdlLWNvbnRleHQubW9kZWwnO1xuaW1wb3J0IHsgQ29udmVydGVyU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvY29udmVydGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgT2NjRW5kcG9pbnRzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL29jYy1lbmRwb2ludHMuc2VydmljZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgT2NjQ21zUGFnZVJlcXVlc3Qge1xuICBwYWdlTGFiZWxPcklkPzogc3RyaW5nO1xuICBwYWdlVHlwZT86IFBhZ2VUeXBlO1xuICBjb2RlPzogc3RyaW5nO1xuICBmaWVsZHM/OiBzdHJpbmc7XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBPY2NDbXNQYWdlQWRhcHRlciBpbXBsZW1lbnRzIENtc1BhZ2VBZGFwdGVyIHtcbiAgcHJvdGVjdGVkIGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKS5zZXQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgcHJvdGVjdGVkIG9jY0VuZHBvaW50czogT2NjRW5kcG9pbnRzU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY29udmVydGVyOiBDb252ZXJ0ZXJTZXJ2aWNlXG4gICkge31cblxuICAvKipcbiAgICogQG92ZXJyaWRlIHJldHVybnMgdGhlIE9DQyBDTVMgcGFnZSBkYXRhIGZvciB0aGUgZ2l2ZW4gY29udGV4dCBhbmQgY29udmVydHNcbiAgICogdGhlIGRhdGEgYnkgYW55IGNvbmZpZ3VyZWQgYENNU19QQUdFX05PUk1BTElaRVJgLlxuICAgKi9cbiAgbG9hZChwYWdlQ29udGV4dDogUGFnZUNvbnRleHQpOiBPYnNlcnZhYmxlPENtc1N0cnVjdHVyZU1vZGVsPiB7XG4gICAgY29uc3QgcGFyYW1zID0gdGhpcy5nZXRQYWdlc1JlcXVlc3RQYXJhbXMocGFnZUNvbnRleHQpO1xuXG4gICAgY29uc3QgZW5kcG9pbnQgPSAhcGFnZUNvbnRleHQudHlwZVxuICAgICAgPyB0aGlzLm9jY0VuZHBvaW50cy5nZXRVcmwoJ3BhZ2UnLCB1bmRlZmluZWQsIHBhcmFtcylcbiAgICAgIDogdGhpcy5vY2NFbmRwb2ludHMuZ2V0VXJsKCdwYWdlcycsIHVuZGVmaW5lZCwgcGFyYW1zKTtcblxuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5nZXQoZW5kcG9pbnQsIHsgaGVhZGVyczogdGhpcy5oZWFkZXJzIH0pXG4gICAgICAucGlwZSh0aGlzLmNvbnZlcnRlci5waXBlYWJsZShDTVNfUEFHRV9OT1JNQUxJWkVSKSk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIE9DQyBDTVMgQVBJIGFsbG93cyB0byBxdWVyeSBwYWdlcyBieSBhIGNvbWJpbmF0aW9uIG9mIHBhZ2VUeXBlLCBsYWJlbCBhbmQgY29kZS5cbiAgICpcbiAgICogV2hlbiBhIGBDb250ZW50UGFnZWAgaXMgcmVxdWVzdGVkLCB3ZSB1c2UgdGhlIGBwYWdlTGFiZWxPcklkYDpcbiAgICpcbiAgICogYGBgXG4gICAqIFwiL3BhZ2VzP3BhZ2VMYWJlbE9ySWQ9L215LXBhZ2UmcGFnZVR5cGU9Q29udGVudFBhZ2VcIlxuICAgKiBgYGBcbiAgICpcbiAgICogT3RoZXIgcGFnZXMgYXJlIHF1ZXJpZWQgYnkgY29kZTpcbiAgICpcbiAgICogYGBgXG4gICAqIFwiL3BhZ2VzP2NvZGU9MTIzNCZwYWdlVHlwZT1Qcm9kdWN0UGFnZVwiXG4gICAqIGBgYFxuICAgKlxuICAgKiBUaGUgcGFnZSBjb250ZXh0IGlzIGlnbm9yZWQgZm9yIGEgaG9tZSBwYWdlIHJlcXVlc3Qgb3IgaW4gY2FzZSBvZiBhXG4gICAqIGBzbWFydGVkaXQtcHJldmlld2AgcmVxdWVzdC5cbiAgICovXG4gIHByb3RlY3RlZCBnZXRQYWdlc1JlcXVlc3RQYXJhbXMoY29udGV4dDogUGFnZUNvbnRleHQpOiBPY2NDbXNQYWdlUmVxdWVzdCB7XG4gICAgaWYgKGNvbnRleHQuaWQgPT09IEhPTUVfUEFHRV9DT05URVhUIHx8IGNvbnRleHQuaWQgPT09IFNNQVJUX0VESVRfQ09OVEVYVCkge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIGNvbnN0IGh0dHBQYXJhbXM6IE9jY0Ntc1BhZ2VSZXF1ZXN0ID0ge307XG4gICAgaWYgKGNvbnRleHQudHlwZSkge1xuICAgICAgaHR0cFBhcmFtcy5wYWdlVHlwZSA9IGNvbnRleHQudHlwZTtcbiAgICB9XG4gICAgaWYgKGNvbnRleHQudHlwZSA9PT0gUGFnZVR5cGUuQ09OVEVOVF9QQUdFKSB7XG4gICAgICBodHRwUGFyYW1zLnBhZ2VMYWJlbE9ySWQgPSBjb250ZXh0LmlkO1xuICAgIH0gZWxzZSB7XG4gICAgICBodHRwUGFyYW1zLmNvZGUgPSBjb250ZXh0LmlkO1xuICAgIH1cblxuICAgIHJldHVybiBodHRwUGFyYW1zO1xuICB9XG59XG4iXX0=
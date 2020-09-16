import { Injectable } from '@angular/core';
import { mergeFields, parseFields } from '../utils/occ-fields';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
/**
 * Helper service for optimizing endpoint calls to occ backend
 */
export class OccFieldsService {
    constructor(http) {
        this.http = http;
        this.FIELDS_PARAM = 'fields';
    }
    /**
     * Merge similar occ endpoints calls by merging fields parameter
     *
     * We assume that different scopes are defined by different fields parameters,
     * so we are grouping all requests with the same urls (except fields definition)
     * and merging into one request with fields that will satisfy all separate ones.
     *
     * @param models
     */
    getOptimalUrlGroups(models) {
        const groupedByUrls = {};
        for (const model of models) {
            const [urlPart, fields] = this.splitFields(model.url);
            if (!groupedByUrls[urlPart]) {
                groupedByUrls[urlPart] = {};
            }
            model.fields = fields ? parseFields(fields) : {};
            groupedByUrls[urlPart][model.scopedData.scope] = model;
        }
        const mergedUrls = {};
        for (const [url, group] of Object.entries(groupedByUrls)) {
            const urlWithFields = this.getUrlWithFields(url, Object.values(group).map((lo) => lo.fields));
            mergedUrls[urlWithFields] = group;
        }
        return mergedUrls;
    }
    /**
     * Extract fields parameter from occ endpoint url
     *
     * @param urlWithFields
     */
    splitFields(urlWithFields) {
        const [url, params] = urlWithFields.split('?');
        const paramsMap = {};
        if (params) {
            params.split('&').map((param) => {
                const keyValue = param.split('=');
                paramsMap[keyValue[0]] = keyValue[1];
            });
        }
        const nonFieldsParams = Object.keys(paramsMap)
            .sort()
            .reduce((id, par) => {
            if (par !== this.FIELDS_PARAM) {
                id.push(paramsMap[par] ? `${par}=${paramsMap[par]}` : par);
            }
            return id;
        }, []);
        const nonFields = nonFieldsParams.join('&');
        return [
            nonFields ? `${url}?${nonFields}` : url,
            paramsMap[this.FIELDS_PARAM],
        ];
    }
    /**
     * Combine url with field parameters
     *
     * @param url
     * @param fields
     */
    getUrlWithFields(url, fields) {
        const mergedFields = mergeFields(fields);
        if (mergedFields) {
            url += url.includes('?') ? '&' : '?';
            url += `${this.FIELDS_PARAM}=${mergedFields}`;
        }
        return url;
    }
}
OccFieldsService.ɵprov = i0.ɵɵdefineInjectable({ factory: function OccFieldsService_Factory() { return new OccFieldsService(i0.ɵɵinject(i1.HttpClient)); }, token: OccFieldsService, providedIn: "root" });
OccFieldsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
OccFieldsService.ctorParameters = () => [
    { type: HttpClient }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWZpZWxkcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS9zcmMvb2NjL3NlcnZpY2VzL29jYy1maWVsZHMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFL0QsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7QUE2QmxEOztHQUVHO0FBSUgsTUFBTSxPQUFPLGdCQUFnQjtJQUMzQixZQUFzQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBRTVCLGlCQUFZLEdBQUcsUUFBUSxDQUFDO0lBRk8sQ0FBQztJQUkxQzs7Ozs7Ozs7T0FRRztJQUNILG1CQUFtQixDQUFDLE1BQTJCO1FBQzdDLE1BQU0sYUFBYSxHQUEwQixFQUFFLENBQUM7UUFDaEQsS0FBSyxNQUFNLEtBQUssSUFBSSxNQUEwQixFQUFFO1lBQzlDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDdEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDM0IsYUFBYSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQzthQUM3QjtZQUNELEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUNqRCxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUM7U0FDeEQ7UUFFRCxNQUFNLFVBQVUsR0FBMEIsRUFBRSxDQUFDO1FBQzdDLEtBQUssTUFBTSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxFQUFFO1lBQ3hELE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FDekMsR0FBRyxFQUNILE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQzVDLENBQUM7WUFDRixVQUFVLENBQUMsYUFBYSxDQUFDLEdBQUcsS0FBSyxDQUFDO1NBQ25DO1FBRUQsT0FBTyxVQUFVLENBQUM7SUFDcEIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSyxXQUFXLENBQUMsYUFBcUI7UUFDdkMsTUFBTSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsR0FBRyxhQUFhLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRS9DLE1BQU0sU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUVyQixJQUFJLE1BQU0sRUFBRTtZQUNWLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7Z0JBQzlCLE1BQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2xDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkMsQ0FBQyxDQUFDLENBQUM7U0FDSjtRQUVELE1BQU0sZUFBZSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO2FBQzNDLElBQUksRUFBRTthQUNOLE1BQU0sQ0FBQyxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUNsQixJQUFJLEdBQUcsS0FBSyxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUM3QixFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQzVEO1lBQ0QsT0FBTyxFQUFFLENBQUM7UUFDWixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFVCxNQUFNLFNBQVMsR0FBRyxlQUFlLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRTVDLE9BQU87WUFDTCxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHO1lBQ3ZDLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1NBQzdCLENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSyxnQkFBZ0IsQ0FBQyxHQUFXLEVBQUUsTUFBMkI7UUFDL0QsTUFBTSxZQUFZLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXpDLElBQUksWUFBWSxFQUFFO1lBQ2hCLEdBQUcsSUFBSSxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztZQUNyQyxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxJQUFJLFlBQVksRUFBRSxDQUFDO1NBQy9DO1FBRUQsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDOzs7O1lBekZGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O1lBbENRLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBtZXJnZUZpZWxkcywgcGFyc2VGaWVsZHMgfSBmcm9tICcuLi91dGlscy9vY2MtZmllbGRzJztcbmltcG9ydCB7IFNjb3BlZERhdGEgfSBmcm9tICcuLi8uLi9tb2RlbC9zY29wZWQtZGF0YSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNjb3BlZERhdGFXaXRoVXJsIHtcbiAgLyoqIFVybCAod2l0aCBmaWVsZHMpIHRvIGxvYWQgc2NvcGVkIGRhdGEgKi9cbiAgdXJsPzogc3RyaW5nO1xuICAvKiogc2NvcGVkIGRhdGEgbW9kZWwgKi9cbiAgc2NvcGVkRGF0YTogU2NvcGVkRGF0YTxhbnk+O1xufVxuXG4vKipcbiAqIEludGVybWVkaWF0ZSBtb2RlbCB0byBhY2NvbW1vZGF0ZSBhbGwgZGF0YSBuZWVkZWQgdG8gcGVyZm9ybSBvY2MgZmllbGRzIG9wdGltaXphdGlvbnNcbiAqIHdyYXBwaW5nIFNjb3BlZERhdGEgd2l0aCB1cmwgYW5kIGZpZWxkc1xuICovXG5leHBvcnQgaW50ZXJmYWNlIE9jY0ZpZWxkc01vZGVsIGV4dGVuZHMgU2NvcGVkRGF0YVdpdGhVcmwge1xuICAvKiogZXh0cmFjdGVkIGZpZWxkcyBvYmplY3QsIHVzZWQgdG8gZXh0cmFjdCBkYXRhIGZyb20gYnJvYWRlciBtb2RlbCAqL1xuICBmaWVsZHM/OiBvYmplY3Q7XG59XG5cbi8qKlxuICogR3JvdXBlZCByZXN0IGNhbGxzIHdpdGggb3B0aW1hbCB1cmxzXG4gKlxuICogT25lIHVybCBncm91cHMgYWxsIHNjb3BlcyBpdCBjb3ZlcnMgd2l0aCByZWxhdGVkIG9jY0ZpZWxkc01vZGVsc1xuICovXG5leHBvcnQgaW50ZXJmYWNlIE9jY09wdGltaW1hbFVybEdyb3VwcyB7XG4gIFtvcHRpbWFsVXJsOiBzdHJpbmddOiB7XG4gICAgW3Njb3BlOiBzdHJpbmddOiBPY2NGaWVsZHNNb2RlbDtcbiAgfTtcbn1cblxuLyoqXG4gKiBIZWxwZXIgc2VydmljZSBmb3Igb3B0aW1pemluZyBlbmRwb2ludCBjYWxscyB0byBvY2MgYmFja2VuZFxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgT2NjRmllbGRzU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBodHRwOiBIdHRwQ2xpZW50KSB7fVxuXG4gIHByb3RlY3RlZCBGSUVMRFNfUEFSQU0gPSAnZmllbGRzJztcblxuICAvKipcbiAgICogTWVyZ2Ugc2ltaWxhciBvY2MgZW5kcG9pbnRzIGNhbGxzIGJ5IG1lcmdpbmcgZmllbGRzIHBhcmFtZXRlclxuICAgKlxuICAgKiBXZSBhc3N1bWUgdGhhdCBkaWZmZXJlbnQgc2NvcGVzIGFyZSBkZWZpbmVkIGJ5IGRpZmZlcmVudCBmaWVsZHMgcGFyYW1ldGVycyxcbiAgICogc28gd2UgYXJlIGdyb3VwaW5nIGFsbCByZXF1ZXN0cyB3aXRoIHRoZSBzYW1lIHVybHMgKGV4Y2VwdCBmaWVsZHMgZGVmaW5pdGlvbilcbiAgICogYW5kIG1lcmdpbmcgaW50byBvbmUgcmVxdWVzdCB3aXRoIGZpZWxkcyB0aGF0IHdpbGwgc2F0aXNmeSBhbGwgc2VwYXJhdGUgb25lcy5cbiAgICpcbiAgICogQHBhcmFtIG1vZGVsc1xuICAgKi9cbiAgZ2V0T3B0aW1hbFVybEdyb3Vwcyhtb2RlbHM6IFNjb3BlZERhdGFXaXRoVXJsW10pOiBPY2NPcHRpbWltYWxVcmxHcm91cHMge1xuICAgIGNvbnN0IGdyb3VwZWRCeVVybHM6IE9jY09wdGltaW1hbFVybEdyb3VwcyA9IHt9O1xuICAgIGZvciAoY29uc3QgbW9kZWwgb2YgbW9kZWxzIGFzIE9jY0ZpZWxkc01vZGVsW10pIHtcbiAgICAgIGNvbnN0IFt1cmxQYXJ0LCBmaWVsZHNdID0gdGhpcy5zcGxpdEZpZWxkcyhtb2RlbC51cmwpO1xuICAgICAgaWYgKCFncm91cGVkQnlVcmxzW3VybFBhcnRdKSB7XG4gICAgICAgIGdyb3VwZWRCeVVybHNbdXJsUGFydF0gPSB7fTtcbiAgICAgIH1cbiAgICAgIG1vZGVsLmZpZWxkcyA9IGZpZWxkcyA/IHBhcnNlRmllbGRzKGZpZWxkcykgOiB7fTtcbiAgICAgIGdyb3VwZWRCeVVybHNbdXJsUGFydF1bbW9kZWwuc2NvcGVkRGF0YS5zY29wZV0gPSBtb2RlbDtcbiAgICB9XG5cbiAgICBjb25zdCBtZXJnZWRVcmxzOiBPY2NPcHRpbWltYWxVcmxHcm91cHMgPSB7fTtcbiAgICBmb3IgKGNvbnN0IFt1cmwsIGdyb3VwXSBvZiBPYmplY3QuZW50cmllcyhncm91cGVkQnlVcmxzKSkge1xuICAgICAgY29uc3QgdXJsV2l0aEZpZWxkcyA9IHRoaXMuZ2V0VXJsV2l0aEZpZWxkcyhcbiAgICAgICAgdXJsLFxuICAgICAgICBPYmplY3QudmFsdWVzKGdyb3VwKS5tYXAoKGxvKSA9PiBsby5maWVsZHMpXG4gICAgICApO1xuICAgICAgbWVyZ2VkVXJsc1t1cmxXaXRoRmllbGRzXSA9IGdyb3VwO1xuICAgIH1cblxuICAgIHJldHVybiBtZXJnZWRVcmxzO1xuICB9XG5cbiAgLyoqXG4gICAqIEV4dHJhY3QgZmllbGRzIHBhcmFtZXRlciBmcm9tIG9jYyBlbmRwb2ludCB1cmxcbiAgICpcbiAgICogQHBhcmFtIHVybFdpdGhGaWVsZHNcbiAgICovXG4gIHByaXZhdGUgc3BsaXRGaWVsZHModXJsV2l0aEZpZWxkczogc3RyaW5nKTogW3N0cmluZywgc3RyaW5nXSB7XG4gICAgY29uc3QgW3VybCwgcGFyYW1zXSA9IHVybFdpdGhGaWVsZHMuc3BsaXQoJz8nKTtcblxuICAgIGNvbnN0IHBhcmFtc01hcCA9IHt9O1xuXG4gICAgaWYgKHBhcmFtcykge1xuICAgICAgcGFyYW1zLnNwbGl0KCcmJykubWFwKChwYXJhbSkgPT4ge1xuICAgICAgICBjb25zdCBrZXlWYWx1ZSA9IHBhcmFtLnNwbGl0KCc9Jyk7XG4gICAgICAgIHBhcmFtc01hcFtrZXlWYWx1ZVswXV0gPSBrZXlWYWx1ZVsxXTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IG5vbkZpZWxkc1BhcmFtcyA9IE9iamVjdC5rZXlzKHBhcmFtc01hcClcbiAgICAgIC5zb3J0KClcbiAgICAgIC5yZWR1Y2UoKGlkLCBwYXIpID0+IHtcbiAgICAgICAgaWYgKHBhciAhPT0gdGhpcy5GSUVMRFNfUEFSQU0pIHtcbiAgICAgICAgICBpZC5wdXNoKHBhcmFtc01hcFtwYXJdID8gYCR7cGFyfT0ke3BhcmFtc01hcFtwYXJdfWAgOiBwYXIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpZDtcbiAgICAgIH0sIFtdKTtcblxuICAgIGNvbnN0IG5vbkZpZWxkcyA9IG5vbkZpZWxkc1BhcmFtcy5qb2luKCcmJyk7XG5cbiAgICByZXR1cm4gW1xuICAgICAgbm9uRmllbGRzID8gYCR7dXJsfT8ke25vbkZpZWxkc31gIDogdXJsLFxuICAgICAgcGFyYW1zTWFwW3RoaXMuRklFTERTX1BBUkFNXSxcbiAgICBdO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbWJpbmUgdXJsIHdpdGggZmllbGQgcGFyYW1ldGVyc1xuICAgKlxuICAgKiBAcGFyYW0gdXJsXG4gICAqIEBwYXJhbSBmaWVsZHNcbiAgICovXG4gIHByaXZhdGUgZ2V0VXJsV2l0aEZpZWxkcyh1cmw6IHN0cmluZywgZmllbGRzOiAoc3RyaW5nIHwgb2JqZWN0KVtdKTogc3RyaW5nIHtcbiAgICBjb25zdCBtZXJnZWRGaWVsZHMgPSBtZXJnZUZpZWxkcyhmaWVsZHMpO1xuXG4gICAgaWYgKG1lcmdlZEZpZWxkcykge1xuICAgICAgdXJsICs9IHVybC5pbmNsdWRlcygnPycpID8gJyYnIDogJz8nO1xuICAgICAgdXJsICs9IGAke3RoaXMuRklFTERTX1BBUkFNfT0ke21lcmdlZEZpZWxkc31gO1xuICAgIH1cblxuICAgIHJldHVybiB1cmw7XG4gIH1cbn1cbiJdfQ==
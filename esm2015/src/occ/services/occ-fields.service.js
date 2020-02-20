import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { mergeFields, parseFields } from '../utils/occ-fields';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
/**
 * Helper service for optimizing endpoint calls to occ backend
 */
let OccFieldsService = class OccFieldsService {
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
            const urlWithFields = this.getUrlWithFields(url, Object.values(group).map(lo => lo.fields));
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
            params.split('&').map(param => {
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
};
OccFieldsService.ctorParameters = () => [
    { type: HttpClient }
];
OccFieldsService.ɵprov = i0.ɵɵdefineInjectable({ factory: function OccFieldsService_Factory() { return new OccFieldsService(i0.ɵɵinject(i1.HttpClient)); }, token: OccFieldsService, providedIn: "root" });
OccFieldsService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], OccFieldsService);
export { OccFieldsService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWZpZWxkcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL29jYy9zZXJ2aWNlcy9vY2MtZmllbGRzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUUvRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7OztBQTZCbEQ7O0dBRUc7QUFJSCxJQUFhLGdCQUFnQixHQUE3QixNQUFhLGdCQUFnQjtJQUMzQixZQUFzQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBRTVCLGlCQUFZLEdBQUcsUUFBUSxDQUFDO0lBRk8sQ0FBQztJQUkxQzs7Ozs7Ozs7T0FRRztJQUNILG1CQUFtQixDQUFDLE1BQTJCO1FBQzdDLE1BQU0sYUFBYSxHQUEwQixFQUFFLENBQUM7UUFDaEQsS0FBSyxNQUFNLEtBQUssSUFBSSxNQUEwQixFQUFFO1lBQzlDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDdEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDM0IsYUFBYSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQzthQUM3QjtZQUNELEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUNqRCxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUM7U0FDeEQ7UUFFRCxNQUFNLFVBQVUsR0FBMEIsRUFBRSxDQUFDO1FBQzdDLEtBQUssTUFBTSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxFQUFFO1lBQ3hELE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FDekMsR0FBRyxFQUNILE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUMxQyxDQUFDO1lBQ0YsVUFBVSxDQUFDLGFBQWEsQ0FBQyxHQUFHLEtBQUssQ0FBQztTQUNuQztRQUVELE9BQU8sVUFBVSxDQUFDO0lBQ3BCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ssV0FBVyxDQUFDLGFBQXFCO1FBQ3ZDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLEdBQUcsYUFBYSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUUvQyxNQUFNLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFFckIsSUFBSSxNQUFNLEVBQUU7WUFDVixNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDNUIsTUFBTSxRQUFRLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDbEMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN2QyxDQUFDLENBQUMsQ0FBQztTQUNKO1FBRUQsTUFBTSxlQUFlLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7YUFDM0MsSUFBSSxFQUFFO2FBQ04sTUFBTSxDQUFDLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFO1lBQ2xCLElBQUksR0FBRyxLQUFLLElBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBQzdCLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDNUQ7WUFDRCxPQUFPLEVBQUUsQ0FBQztRQUNaLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVULE1BQU0sU0FBUyxHQUFHLGVBQWUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFNUMsT0FBTztZQUNMLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUc7WUFDdkMsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7U0FDN0IsQ0FBQztJQUNKLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNLLGdCQUFnQixDQUFDLEdBQVcsRUFBRSxNQUEyQjtRQUMvRCxNQUFNLFlBQVksR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFekMsSUFBSSxZQUFZLEVBQUU7WUFDaEIsR0FBRyxJQUFJLEdBQUcsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO1lBQ3JDLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLElBQUksWUFBWSxFQUFFLENBQUM7U0FDL0M7UUFFRCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7Q0FDRixDQUFBOztZQXRGNkIsVUFBVTs7O0FBRDNCLGdCQUFnQjtJQUg1QixVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDO0dBQ1csZ0JBQWdCLENBdUY1QjtTQXZGWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBtZXJnZUZpZWxkcywgcGFyc2VGaWVsZHMgfSBmcm9tICcuLi91dGlscy9vY2MtZmllbGRzJztcbmltcG9ydCB7IFNjb3BlZERhdGEgfSBmcm9tICcuLi8uLi9tb2RlbC9zY29wZWQtZGF0YSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNjb3BlZERhdGFXaXRoVXJsIHtcbiAgLyoqIFVybCAod2l0aCBmaWVsZHMpIHRvIGxvYWQgc2NvcGVkIGRhdGEgKi9cbiAgdXJsPzogc3RyaW5nO1xuICAvKiogc2NvcGVkIGRhdGEgbW9kZWwgKi9cbiAgc2NvcGVkRGF0YTogU2NvcGVkRGF0YTxhbnk+O1xufVxuXG4vKipcbiAqIEludGVybWVkaWF0ZSBtb2RlbCB0byBhY2NvbW1vZGF0ZSBhbGwgZGF0YSBuZWVkZWQgdG8gcGVyZm9ybSBvY2MgZmllbGRzIG9wdGltaXphdGlvbnNcbiAqIHdyYXBwaW5nIFNjb3BlZERhdGEgd2l0aCB1cmwgYW5kIGZpZWxkc1xuICovXG5leHBvcnQgaW50ZXJmYWNlIE9jY0ZpZWxkc01vZGVsIGV4dGVuZHMgU2NvcGVkRGF0YVdpdGhVcmwge1xuICAvKiogZXh0cmFjdGVkIGZpZWxkcyBvYmplY3QsIHVzZWQgdG8gZXh0cmFjdCBkYXRhIGZyb20gYnJvYWRlciBtb2RlbCAqL1xuICBmaWVsZHM/OiBvYmplY3Q7XG59XG5cbi8qKlxuICogR3JvdXBlZCByZXN0IGNhbGxzIHdpdGggb3B0aW1hbCB1cmxzXG4gKlxuICogT25lIHVybCBncm91cHMgYWxsIHNjb3BlcyBpdCBjb3ZlcnMgd2l0aCByZWxhdGVkIG9jY0ZpZWxkc01vZGVsc1xuICovXG5leHBvcnQgaW50ZXJmYWNlIE9jY09wdGltaW1hbFVybEdyb3VwcyB7XG4gIFtvcHRpbWFsVXJsOiBzdHJpbmddOiB7XG4gICAgW3Njb3BlOiBzdHJpbmddOiBPY2NGaWVsZHNNb2RlbDtcbiAgfTtcbn1cblxuLyoqXG4gKiBIZWxwZXIgc2VydmljZSBmb3Igb3B0aW1pemluZyBlbmRwb2ludCBjYWxscyB0byBvY2MgYmFja2VuZFxuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgT2NjRmllbGRzU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBodHRwOiBIdHRwQ2xpZW50KSB7fVxuXG4gIHByb3RlY3RlZCBGSUVMRFNfUEFSQU0gPSAnZmllbGRzJztcblxuICAvKipcbiAgICogTWVyZ2Ugc2ltaWxhciBvY2MgZW5kcG9pbnRzIGNhbGxzIGJ5IG1lcmdpbmcgZmllbGRzIHBhcmFtZXRlclxuICAgKlxuICAgKiBXZSBhc3N1bWUgdGhhdCBkaWZmZXJlbnQgc2NvcGVzIGFyZSBkZWZpbmVkIGJ5IGRpZmZlcmVudCBmaWVsZHMgcGFyYW1ldGVycyxcbiAgICogc28gd2UgYXJlIGdyb3VwaW5nIGFsbCByZXF1ZXN0cyB3aXRoIHRoZSBzYW1lIHVybHMgKGV4Y2VwdCBmaWVsZHMgZGVmaW5pdGlvbilcbiAgICogYW5kIG1lcmdpbmcgaW50byBvbmUgcmVxdWVzdCB3aXRoIGZpZWxkcyB0aGF0IHdpbGwgc2F0aXNmeSBhbGwgc2VwYXJhdGUgb25lcy5cbiAgICpcbiAgICogQHBhcmFtIG1vZGVsc1xuICAgKi9cbiAgZ2V0T3B0aW1hbFVybEdyb3Vwcyhtb2RlbHM6IFNjb3BlZERhdGFXaXRoVXJsW10pOiBPY2NPcHRpbWltYWxVcmxHcm91cHMge1xuICAgIGNvbnN0IGdyb3VwZWRCeVVybHM6IE9jY09wdGltaW1hbFVybEdyb3VwcyA9IHt9O1xuICAgIGZvciAoY29uc3QgbW9kZWwgb2YgbW9kZWxzIGFzIE9jY0ZpZWxkc01vZGVsW10pIHtcbiAgICAgIGNvbnN0IFt1cmxQYXJ0LCBmaWVsZHNdID0gdGhpcy5zcGxpdEZpZWxkcyhtb2RlbC51cmwpO1xuICAgICAgaWYgKCFncm91cGVkQnlVcmxzW3VybFBhcnRdKSB7XG4gICAgICAgIGdyb3VwZWRCeVVybHNbdXJsUGFydF0gPSB7fTtcbiAgICAgIH1cbiAgICAgIG1vZGVsLmZpZWxkcyA9IGZpZWxkcyA/IHBhcnNlRmllbGRzKGZpZWxkcykgOiB7fTtcbiAgICAgIGdyb3VwZWRCeVVybHNbdXJsUGFydF1bbW9kZWwuc2NvcGVkRGF0YS5zY29wZV0gPSBtb2RlbDtcbiAgICB9XG5cbiAgICBjb25zdCBtZXJnZWRVcmxzOiBPY2NPcHRpbWltYWxVcmxHcm91cHMgPSB7fTtcbiAgICBmb3IgKGNvbnN0IFt1cmwsIGdyb3VwXSBvZiBPYmplY3QuZW50cmllcyhncm91cGVkQnlVcmxzKSkge1xuICAgICAgY29uc3QgdXJsV2l0aEZpZWxkcyA9IHRoaXMuZ2V0VXJsV2l0aEZpZWxkcyhcbiAgICAgICAgdXJsLFxuICAgICAgICBPYmplY3QudmFsdWVzKGdyb3VwKS5tYXAobG8gPT4gbG8uZmllbGRzKVxuICAgICAgKTtcbiAgICAgIG1lcmdlZFVybHNbdXJsV2l0aEZpZWxkc10gPSBncm91cDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVyZ2VkVXJscztcbiAgfVxuXG4gIC8qKlxuICAgKiBFeHRyYWN0IGZpZWxkcyBwYXJhbWV0ZXIgZnJvbSBvY2MgZW5kcG9pbnQgdXJsXG4gICAqXG4gICAqIEBwYXJhbSB1cmxXaXRoRmllbGRzXG4gICAqL1xuICBwcml2YXRlIHNwbGl0RmllbGRzKHVybFdpdGhGaWVsZHM6IHN0cmluZyk6IFtzdHJpbmcsIHN0cmluZ10ge1xuICAgIGNvbnN0IFt1cmwsIHBhcmFtc10gPSB1cmxXaXRoRmllbGRzLnNwbGl0KCc/Jyk7XG5cbiAgICBjb25zdCBwYXJhbXNNYXAgPSB7fTtcblxuICAgIGlmIChwYXJhbXMpIHtcbiAgICAgIHBhcmFtcy5zcGxpdCgnJicpLm1hcChwYXJhbSA9PiB7XG4gICAgICAgIGNvbnN0IGtleVZhbHVlID0gcGFyYW0uc3BsaXQoJz0nKTtcbiAgICAgICAgcGFyYW1zTWFwW2tleVZhbHVlWzBdXSA9IGtleVZhbHVlWzFdO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3Qgbm9uRmllbGRzUGFyYW1zID0gT2JqZWN0LmtleXMocGFyYW1zTWFwKVxuICAgICAgLnNvcnQoKVxuICAgICAgLnJlZHVjZSgoaWQsIHBhcikgPT4ge1xuICAgICAgICBpZiAocGFyICE9PSB0aGlzLkZJRUxEU19QQVJBTSkge1xuICAgICAgICAgIGlkLnB1c2gocGFyYW1zTWFwW3Bhcl0gPyBgJHtwYXJ9PSR7cGFyYW1zTWFwW3Bhcl19YCA6IHBhcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlkO1xuICAgICAgfSwgW10pO1xuXG4gICAgY29uc3Qgbm9uRmllbGRzID0gbm9uRmllbGRzUGFyYW1zLmpvaW4oJyYnKTtcblxuICAgIHJldHVybiBbXG4gICAgICBub25GaWVsZHMgPyBgJHt1cmx9PyR7bm9uRmllbGRzfWAgOiB1cmwsXG4gICAgICBwYXJhbXNNYXBbdGhpcy5GSUVMRFNfUEFSQU1dLFxuICAgIF07XG4gIH1cblxuICAvKipcbiAgICogQ29tYmluZSB1cmwgd2l0aCBmaWVsZCBwYXJhbWV0ZXJzXG4gICAqXG4gICAqIEBwYXJhbSB1cmxcbiAgICogQHBhcmFtIGZpZWxkc1xuICAgKi9cbiAgcHJpdmF0ZSBnZXRVcmxXaXRoRmllbGRzKHVybDogc3RyaW5nLCBmaWVsZHM6IChzdHJpbmcgfCBvYmplY3QpW10pOiBzdHJpbmcge1xuICAgIGNvbnN0IG1lcmdlZEZpZWxkcyA9IG1lcmdlRmllbGRzKGZpZWxkcyk7XG5cbiAgICBpZiAobWVyZ2VkRmllbGRzKSB7XG4gICAgICB1cmwgKz0gdXJsLmluY2x1ZGVzKCc/JykgPyAnJicgOiAnPyc7XG4gICAgICB1cmwgKz0gYCR7dGhpcy5GSUVMRFNfUEFSQU19PSR7bWVyZ2VkRmllbGRzfWA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVybDtcbiAgfVxufVxuIl19
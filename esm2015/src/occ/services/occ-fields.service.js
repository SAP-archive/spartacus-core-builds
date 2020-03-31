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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWZpZWxkcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL29jYy9zZXJ2aWNlcy9vY2MtZmllbGRzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUUvRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7OztBQTZCbEQ7O0dBRUc7QUFJSCxJQUFhLGdCQUFnQixHQUE3QixNQUFhLGdCQUFnQjtJQUMzQixZQUFzQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBRTVCLGlCQUFZLEdBQUcsUUFBUSxDQUFDO0lBRk8sQ0FBQztJQUkxQzs7Ozs7Ozs7T0FRRztJQUNILG1CQUFtQixDQUFDLE1BQTJCO1FBQzdDLE1BQU0sYUFBYSxHQUEwQixFQUFFLENBQUM7UUFDaEQsS0FBSyxNQUFNLEtBQUssSUFBSSxNQUEwQixFQUFFO1lBQzlDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDdEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDM0IsYUFBYSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQzthQUM3QjtZQUNELEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUNqRCxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUM7U0FDeEQ7UUFFRCxNQUFNLFVBQVUsR0FBMEIsRUFBRSxDQUFDO1FBQzdDLEtBQUssTUFBTSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxFQUFFO1lBQ3hELE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FDekMsR0FBRyxFQUNILE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQzVDLENBQUM7WUFDRixVQUFVLENBQUMsYUFBYSxDQUFDLEdBQUcsS0FBSyxDQUFDO1NBQ25DO1FBRUQsT0FBTyxVQUFVLENBQUM7SUFDcEIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSyxXQUFXLENBQUMsYUFBcUI7UUFDdkMsTUFBTSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsR0FBRyxhQUFhLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRS9DLE1BQU0sU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUVyQixJQUFJLE1BQU0sRUFBRTtZQUNWLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7Z0JBQzlCLE1BQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2xDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkMsQ0FBQyxDQUFDLENBQUM7U0FDSjtRQUVELE1BQU0sZUFBZSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO2FBQzNDLElBQUksRUFBRTthQUNOLE1BQU0sQ0FBQyxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRTtZQUNsQixJQUFJLEdBQUcsS0FBSyxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUM3QixFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQzVEO1lBQ0QsT0FBTyxFQUFFLENBQUM7UUFDWixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFVCxNQUFNLFNBQVMsR0FBRyxlQUFlLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRTVDLE9BQU87WUFDTCxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHO1lBQ3ZDLFNBQVMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1NBQzdCLENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSyxnQkFBZ0IsQ0FBQyxHQUFXLEVBQUUsTUFBMkI7UUFDL0QsTUFBTSxZQUFZLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXpDLElBQUksWUFBWSxFQUFFO1lBQ2hCLEdBQUcsSUFBSSxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztZQUNyQyxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxJQUFJLFlBQVksRUFBRSxDQUFDO1NBQy9DO1FBRUQsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0NBQ0YsQ0FBQTs7WUF0RjZCLFVBQVU7OztBQUQzQixnQkFBZ0I7SUFINUIsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztHQUNXLGdCQUFnQixDQXVGNUI7U0F2RlksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgbWVyZ2VGaWVsZHMsIHBhcnNlRmllbGRzIH0gZnJvbSAnLi4vdXRpbHMvb2NjLWZpZWxkcyc7XG5pbXBvcnQgeyBTY29wZWREYXRhIH0gZnJvbSAnLi4vLi4vbW9kZWwvc2NvcGVkLWRhdGEnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuZXhwb3J0IGludGVyZmFjZSBTY29wZWREYXRhV2l0aFVybCB7XG4gIC8qKiBVcmwgKHdpdGggZmllbGRzKSB0byBsb2FkIHNjb3BlZCBkYXRhICovXG4gIHVybD86IHN0cmluZztcbiAgLyoqIHNjb3BlZCBkYXRhIG1vZGVsICovXG4gIHNjb3BlZERhdGE6IFNjb3BlZERhdGE8YW55Pjtcbn1cblxuLyoqXG4gKiBJbnRlcm1lZGlhdGUgbW9kZWwgdG8gYWNjb21tb2RhdGUgYWxsIGRhdGEgbmVlZGVkIHRvIHBlcmZvcm0gb2NjIGZpZWxkcyBvcHRpbWl6YXRpb25zXG4gKiB3cmFwcGluZyBTY29wZWREYXRhIHdpdGggdXJsIGFuZCBmaWVsZHNcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBPY2NGaWVsZHNNb2RlbCBleHRlbmRzIFNjb3BlZERhdGFXaXRoVXJsIHtcbiAgLyoqIGV4dHJhY3RlZCBmaWVsZHMgb2JqZWN0LCB1c2VkIHRvIGV4dHJhY3QgZGF0YSBmcm9tIGJyb2FkZXIgbW9kZWwgKi9cbiAgZmllbGRzPzogb2JqZWN0O1xufVxuXG4vKipcbiAqIEdyb3VwZWQgcmVzdCBjYWxscyB3aXRoIG9wdGltYWwgdXJsc1xuICpcbiAqIE9uZSB1cmwgZ3JvdXBzIGFsbCBzY29wZXMgaXQgY292ZXJzIHdpdGggcmVsYXRlZCBvY2NGaWVsZHNNb2RlbHNcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBPY2NPcHRpbWltYWxVcmxHcm91cHMge1xuICBbb3B0aW1hbFVybDogc3RyaW5nXToge1xuICAgIFtzY29wZTogc3RyaW5nXTogT2NjRmllbGRzTW9kZWw7XG4gIH07XG59XG5cbi8qKlxuICogSGVscGVyIHNlcnZpY2UgZm9yIG9wdGltaXppbmcgZW5kcG9pbnQgY2FsbHMgdG8gb2NjIGJhY2tlbmRcbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIE9jY0ZpZWxkc1NlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgaHR0cDogSHR0cENsaWVudCkge31cblxuICBwcm90ZWN0ZWQgRklFTERTX1BBUkFNID0gJ2ZpZWxkcyc7XG5cbiAgLyoqXG4gICAqIE1lcmdlIHNpbWlsYXIgb2NjIGVuZHBvaW50cyBjYWxscyBieSBtZXJnaW5nIGZpZWxkcyBwYXJhbWV0ZXJcbiAgICpcbiAgICogV2UgYXNzdW1lIHRoYXQgZGlmZmVyZW50IHNjb3BlcyBhcmUgZGVmaW5lZCBieSBkaWZmZXJlbnQgZmllbGRzIHBhcmFtZXRlcnMsXG4gICAqIHNvIHdlIGFyZSBncm91cGluZyBhbGwgcmVxdWVzdHMgd2l0aCB0aGUgc2FtZSB1cmxzIChleGNlcHQgZmllbGRzIGRlZmluaXRpb24pXG4gICAqIGFuZCBtZXJnaW5nIGludG8gb25lIHJlcXVlc3Qgd2l0aCBmaWVsZHMgdGhhdCB3aWxsIHNhdGlzZnkgYWxsIHNlcGFyYXRlIG9uZXMuXG4gICAqXG4gICAqIEBwYXJhbSBtb2RlbHNcbiAgICovXG4gIGdldE9wdGltYWxVcmxHcm91cHMobW9kZWxzOiBTY29wZWREYXRhV2l0aFVybFtdKTogT2NjT3B0aW1pbWFsVXJsR3JvdXBzIHtcbiAgICBjb25zdCBncm91cGVkQnlVcmxzOiBPY2NPcHRpbWltYWxVcmxHcm91cHMgPSB7fTtcbiAgICBmb3IgKGNvbnN0IG1vZGVsIG9mIG1vZGVscyBhcyBPY2NGaWVsZHNNb2RlbFtdKSB7XG4gICAgICBjb25zdCBbdXJsUGFydCwgZmllbGRzXSA9IHRoaXMuc3BsaXRGaWVsZHMobW9kZWwudXJsKTtcbiAgICAgIGlmICghZ3JvdXBlZEJ5VXJsc1t1cmxQYXJ0XSkge1xuICAgICAgICBncm91cGVkQnlVcmxzW3VybFBhcnRdID0ge307XG4gICAgICB9XG4gICAgICBtb2RlbC5maWVsZHMgPSBmaWVsZHMgPyBwYXJzZUZpZWxkcyhmaWVsZHMpIDoge307XG4gICAgICBncm91cGVkQnlVcmxzW3VybFBhcnRdW21vZGVsLnNjb3BlZERhdGEuc2NvcGVdID0gbW9kZWw7XG4gICAgfVxuXG4gICAgY29uc3QgbWVyZ2VkVXJsczogT2NjT3B0aW1pbWFsVXJsR3JvdXBzID0ge307XG4gICAgZm9yIChjb25zdCBbdXJsLCBncm91cF0gb2YgT2JqZWN0LmVudHJpZXMoZ3JvdXBlZEJ5VXJscykpIHtcbiAgICAgIGNvbnN0IHVybFdpdGhGaWVsZHMgPSB0aGlzLmdldFVybFdpdGhGaWVsZHMoXG4gICAgICAgIHVybCxcbiAgICAgICAgT2JqZWN0LnZhbHVlcyhncm91cCkubWFwKChsbykgPT4gbG8uZmllbGRzKVxuICAgICAgKTtcbiAgICAgIG1lcmdlZFVybHNbdXJsV2l0aEZpZWxkc10gPSBncm91cDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVyZ2VkVXJscztcbiAgfVxuXG4gIC8qKlxuICAgKiBFeHRyYWN0IGZpZWxkcyBwYXJhbWV0ZXIgZnJvbSBvY2MgZW5kcG9pbnQgdXJsXG4gICAqXG4gICAqIEBwYXJhbSB1cmxXaXRoRmllbGRzXG4gICAqL1xuICBwcml2YXRlIHNwbGl0RmllbGRzKHVybFdpdGhGaWVsZHM6IHN0cmluZyk6IFtzdHJpbmcsIHN0cmluZ10ge1xuICAgIGNvbnN0IFt1cmwsIHBhcmFtc10gPSB1cmxXaXRoRmllbGRzLnNwbGl0KCc/Jyk7XG5cbiAgICBjb25zdCBwYXJhbXNNYXAgPSB7fTtcblxuICAgIGlmIChwYXJhbXMpIHtcbiAgICAgIHBhcmFtcy5zcGxpdCgnJicpLm1hcCgocGFyYW0pID0+IHtcbiAgICAgICAgY29uc3Qga2V5VmFsdWUgPSBwYXJhbS5zcGxpdCgnPScpO1xuICAgICAgICBwYXJhbXNNYXBba2V5VmFsdWVbMF1dID0ga2V5VmFsdWVbMV07XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBub25GaWVsZHNQYXJhbXMgPSBPYmplY3Qua2V5cyhwYXJhbXNNYXApXG4gICAgICAuc29ydCgpXG4gICAgICAucmVkdWNlKChpZCwgcGFyKSA9PiB7XG4gICAgICAgIGlmIChwYXIgIT09IHRoaXMuRklFTERTX1BBUkFNKSB7XG4gICAgICAgICAgaWQucHVzaChwYXJhbXNNYXBbcGFyXSA/IGAke3Bhcn09JHtwYXJhbXNNYXBbcGFyXX1gIDogcGFyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaWQ7XG4gICAgICB9LCBbXSk7XG5cbiAgICBjb25zdCBub25GaWVsZHMgPSBub25GaWVsZHNQYXJhbXMuam9pbignJicpO1xuXG4gICAgcmV0dXJuIFtcbiAgICAgIG5vbkZpZWxkcyA/IGAke3VybH0/JHtub25GaWVsZHN9YCA6IHVybCxcbiAgICAgIHBhcmFtc01hcFt0aGlzLkZJRUxEU19QQVJBTV0sXG4gICAgXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb21iaW5lIHVybCB3aXRoIGZpZWxkIHBhcmFtZXRlcnNcbiAgICpcbiAgICogQHBhcmFtIHVybFxuICAgKiBAcGFyYW0gZmllbGRzXG4gICAqL1xuICBwcml2YXRlIGdldFVybFdpdGhGaWVsZHModXJsOiBzdHJpbmcsIGZpZWxkczogKHN0cmluZyB8IG9iamVjdClbXSk6IHN0cmluZyB7XG4gICAgY29uc3QgbWVyZ2VkRmllbGRzID0gbWVyZ2VGaWVsZHMoZmllbGRzKTtcblxuICAgIGlmIChtZXJnZWRGaWVsZHMpIHtcbiAgICAgIHVybCArPSB1cmwuaW5jbHVkZXMoJz8nKSA/ICcmJyA6ICc/JztcbiAgICAgIHVybCArPSBgJHt0aGlzLkZJRUxEU19QQVJBTX09JHttZXJnZWRGaWVsZHN9YDtcbiAgICB9XG5cbiAgICByZXR1cm4gdXJsO1xuICB9XG59XG4iXX0=
import { __decorate, __read, __values } from "tslib";
import { Injectable } from '@angular/core';
import { mergeFields, parseFields } from '../utils/occ-fields';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
/**
 * Helper service for optimizing endpoint calls to occ backend
 */
var OccFieldsService = /** @class */ (function () {
    function OccFieldsService(http) {
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
    OccFieldsService.prototype.getOptimalUrlGroups = function (models) {
        var e_1, _a, e_2, _b;
        var groupedByUrls = {};
        try {
            for (var _c = __values(models), _d = _c.next(); !_d.done; _d = _c.next()) {
                var model = _d.value;
                var _e = __read(this.splitFields(model.url), 2), urlPart = _e[0], fields = _e[1];
                if (!groupedByUrls[urlPart]) {
                    groupedByUrls[urlPart] = {};
                }
                model.fields = fields ? parseFields(fields) : {};
                groupedByUrls[urlPart][model.scopedData.scope] = model;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var mergedUrls = {};
        try {
            for (var _f = __values(Object.entries(groupedByUrls)), _g = _f.next(); !_g.done; _g = _f.next()) {
                var _h = __read(_g.value, 2), url = _h[0], group = _h[1];
                var urlWithFields = this.getUrlWithFields(url, Object.values(group).map(function (lo) { return lo.fields; }));
                mergedUrls[urlWithFields] = group;
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_g && !_g.done && (_b = _f.return)) _b.call(_f);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return mergedUrls;
    };
    /**
     * Extract fields parameter from occ endpoint url
     *
     * @param urlWithFields
     */
    OccFieldsService.prototype.splitFields = function (urlWithFields) {
        var _this = this;
        var _a = __read(urlWithFields.split('?'), 2), url = _a[0], params = _a[1];
        var paramsMap = {};
        if (params) {
            params.split('&').map(function (param) {
                var keyValue = param.split('=');
                paramsMap[keyValue[0]] = keyValue[1];
            });
        }
        var nonFieldsParams = Object.keys(paramsMap)
            .sort()
            .reduce(function (id, par) {
            if (par !== _this.FIELDS_PARAM) {
                id.push(paramsMap[par] ? par + "=" + paramsMap[par] : par);
            }
            return id;
        }, []);
        var nonFields = nonFieldsParams.join('&');
        return [
            nonFields ? url + "?" + nonFields : url,
            paramsMap[this.FIELDS_PARAM],
        ];
    };
    /**
     * Combine url with field parameters
     *
     * @param url
     * @param fields
     */
    OccFieldsService.prototype.getUrlWithFields = function (url, fields) {
        var mergedFields = mergeFields(fields);
        if (mergedFields) {
            url += url.includes('?') ? '&' : '?';
            url += this.FIELDS_PARAM + "=" + mergedFields;
        }
        return url;
    };
    OccFieldsService.ctorParameters = function () { return [
        { type: HttpClient }
    ]; };
    OccFieldsService.ɵprov = i0.ɵɵdefineInjectable({ factory: function OccFieldsService_Factory() { return new OccFieldsService(i0.ɵɵinject(i1.HttpClient)); }, token: OccFieldsService, providedIn: "root" });
    OccFieldsService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], OccFieldsService);
    return OccFieldsService;
}());
export { OccFieldsService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWZpZWxkcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL29jYy9zZXJ2aWNlcy9vY2MtZmllbGRzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUUvRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7OztBQTZCbEQ7O0dBRUc7QUFJSDtJQUNFLDBCQUFzQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBRTVCLGlCQUFZLEdBQUcsUUFBUSxDQUFDO0lBRk8sQ0FBQztJQUkxQzs7Ozs7Ozs7T0FRRztJQUNILDhDQUFtQixHQUFuQixVQUFvQixNQUEyQjs7UUFDN0MsSUFBTSxhQUFhLEdBQTBCLEVBQUUsQ0FBQzs7WUFDaEQsS0FBb0IsSUFBQSxLQUFBLFNBQUEsTUFBMEIsQ0FBQSxnQkFBQSw0QkFBRTtnQkFBM0MsSUFBTSxLQUFLLFdBQUE7Z0JBQ1IsSUFBQSwyQ0FBK0MsRUFBOUMsZUFBTyxFQUFFLGNBQXFDLENBQUM7Z0JBQ3RELElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEVBQUU7b0JBQzNCLGFBQWEsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUM7aUJBQzdCO2dCQUNELEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztnQkFDakQsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDO2FBQ3hEOzs7Ozs7Ozs7UUFFRCxJQUFNLFVBQVUsR0FBMEIsRUFBRSxDQUFDOztZQUM3QyxLQUEyQixJQUFBLEtBQUEsU0FBQSxNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFBLGdCQUFBLDRCQUFFO2dCQUEvQyxJQUFBLHdCQUFZLEVBQVgsV0FBRyxFQUFFLGFBQUs7Z0JBQ3BCLElBQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FDekMsR0FBRyxFQUNILE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUMsRUFBRSxJQUFLLE9BQUEsRUFBRSxDQUFDLE1BQU0sRUFBVCxDQUFTLENBQUMsQ0FDNUMsQ0FBQztnQkFDRixVQUFVLENBQUMsYUFBYSxDQUFDLEdBQUcsS0FBSyxDQUFDO2FBQ25DOzs7Ozs7Ozs7UUFFRCxPQUFPLFVBQVUsQ0FBQztJQUNwQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNLLHNDQUFXLEdBQW5CLFVBQW9CLGFBQXFCO1FBQXpDLGlCQTJCQztRQTFCTyxJQUFBLHdDQUF3QyxFQUF2QyxXQUFHLEVBQUUsY0FBa0MsQ0FBQztRQUUvQyxJQUFNLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFFckIsSUFBSSxNQUFNLEVBQUU7WUFDVixNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFDLEtBQUs7Z0JBQzFCLElBQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2xDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkMsQ0FBQyxDQUFDLENBQUM7U0FDSjtRQUVELElBQU0sZUFBZSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO2FBQzNDLElBQUksRUFBRTthQUNOLE1BQU0sQ0FBQyxVQUFDLEVBQUUsRUFBRSxHQUFHO1lBQ2QsSUFBSSxHQUFHLEtBQUssS0FBSSxDQUFDLFlBQVksRUFBRTtnQkFDN0IsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFJLEdBQUcsU0FBSSxTQUFTLENBQUMsR0FBRyxDQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQzVEO1lBQ0QsT0FBTyxFQUFFLENBQUM7UUFDWixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFVCxJQUFNLFNBQVMsR0FBRyxlQUFlLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRTVDLE9BQU87WUFDTCxTQUFTLENBQUMsQ0FBQyxDQUFJLEdBQUcsU0FBSSxTQUFXLENBQUMsQ0FBQyxDQUFDLEdBQUc7WUFDdkMsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7U0FDN0IsQ0FBQztJQUNKLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNLLDJDQUFnQixHQUF4QixVQUF5QixHQUFXLEVBQUUsTUFBMkI7UUFDL0QsSUFBTSxZQUFZLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXpDLElBQUksWUFBWSxFQUFFO1lBQ2hCLEdBQUcsSUFBSSxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztZQUNyQyxHQUFHLElBQU8sSUFBSSxDQUFDLFlBQVksU0FBSSxZQUFjLENBQUM7U0FDL0M7UUFFRCxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7O2dCQXJGMkIsVUFBVTs7O0lBRDNCLGdCQUFnQjtRQUg1QixVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO09BQ1csZ0JBQWdCLENBdUY1QjsyQkE3SEQ7Q0E2SEMsQUF2RkQsSUF1RkM7U0F2RlksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgbWVyZ2VGaWVsZHMsIHBhcnNlRmllbGRzIH0gZnJvbSAnLi4vdXRpbHMvb2NjLWZpZWxkcyc7XG5pbXBvcnQgeyBTY29wZWREYXRhIH0gZnJvbSAnLi4vLi4vbW9kZWwvc2NvcGVkLWRhdGEnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuZXhwb3J0IGludGVyZmFjZSBTY29wZWREYXRhV2l0aFVybCB7XG4gIC8qKiBVcmwgKHdpdGggZmllbGRzKSB0byBsb2FkIHNjb3BlZCBkYXRhICovXG4gIHVybD86IHN0cmluZztcbiAgLyoqIHNjb3BlZCBkYXRhIG1vZGVsICovXG4gIHNjb3BlZERhdGE6IFNjb3BlZERhdGE8YW55Pjtcbn1cblxuLyoqXG4gKiBJbnRlcm1lZGlhdGUgbW9kZWwgdG8gYWNjb21tb2RhdGUgYWxsIGRhdGEgbmVlZGVkIHRvIHBlcmZvcm0gb2NjIGZpZWxkcyBvcHRpbWl6YXRpb25zXG4gKiB3cmFwcGluZyBTY29wZWREYXRhIHdpdGggdXJsIGFuZCBmaWVsZHNcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBPY2NGaWVsZHNNb2RlbCBleHRlbmRzIFNjb3BlZERhdGFXaXRoVXJsIHtcbiAgLyoqIGV4dHJhY3RlZCBmaWVsZHMgb2JqZWN0LCB1c2VkIHRvIGV4dHJhY3QgZGF0YSBmcm9tIGJyb2FkZXIgbW9kZWwgKi9cbiAgZmllbGRzPzogb2JqZWN0O1xufVxuXG4vKipcbiAqIEdyb3VwZWQgcmVzdCBjYWxscyB3aXRoIG9wdGltYWwgdXJsc1xuICpcbiAqIE9uZSB1cmwgZ3JvdXBzIGFsbCBzY29wZXMgaXQgY292ZXJzIHdpdGggcmVsYXRlZCBvY2NGaWVsZHNNb2RlbHNcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBPY2NPcHRpbWltYWxVcmxHcm91cHMge1xuICBbb3B0aW1hbFVybDogc3RyaW5nXToge1xuICAgIFtzY29wZTogc3RyaW5nXTogT2NjRmllbGRzTW9kZWw7XG4gIH07XG59XG5cbi8qKlxuICogSGVscGVyIHNlcnZpY2UgZm9yIG9wdGltaXppbmcgZW5kcG9pbnQgY2FsbHMgdG8gb2NjIGJhY2tlbmRcbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIE9jY0ZpZWxkc1NlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgaHR0cDogSHR0cENsaWVudCkge31cblxuICBwcm90ZWN0ZWQgRklFTERTX1BBUkFNID0gJ2ZpZWxkcyc7XG5cbiAgLyoqXG4gICAqIE1lcmdlIHNpbWlsYXIgb2NjIGVuZHBvaW50cyBjYWxscyBieSBtZXJnaW5nIGZpZWxkcyBwYXJhbWV0ZXJcbiAgICpcbiAgICogV2UgYXNzdW1lIHRoYXQgZGlmZmVyZW50IHNjb3BlcyBhcmUgZGVmaW5lZCBieSBkaWZmZXJlbnQgZmllbGRzIHBhcmFtZXRlcnMsXG4gICAqIHNvIHdlIGFyZSBncm91cGluZyBhbGwgcmVxdWVzdHMgd2l0aCB0aGUgc2FtZSB1cmxzIChleGNlcHQgZmllbGRzIGRlZmluaXRpb24pXG4gICAqIGFuZCBtZXJnaW5nIGludG8gb25lIHJlcXVlc3Qgd2l0aCBmaWVsZHMgdGhhdCB3aWxsIHNhdGlzZnkgYWxsIHNlcGFyYXRlIG9uZXMuXG4gICAqXG4gICAqIEBwYXJhbSBtb2RlbHNcbiAgICovXG4gIGdldE9wdGltYWxVcmxHcm91cHMobW9kZWxzOiBTY29wZWREYXRhV2l0aFVybFtdKTogT2NjT3B0aW1pbWFsVXJsR3JvdXBzIHtcbiAgICBjb25zdCBncm91cGVkQnlVcmxzOiBPY2NPcHRpbWltYWxVcmxHcm91cHMgPSB7fTtcbiAgICBmb3IgKGNvbnN0IG1vZGVsIG9mIG1vZGVscyBhcyBPY2NGaWVsZHNNb2RlbFtdKSB7XG4gICAgICBjb25zdCBbdXJsUGFydCwgZmllbGRzXSA9IHRoaXMuc3BsaXRGaWVsZHMobW9kZWwudXJsKTtcbiAgICAgIGlmICghZ3JvdXBlZEJ5VXJsc1t1cmxQYXJ0XSkge1xuICAgICAgICBncm91cGVkQnlVcmxzW3VybFBhcnRdID0ge307XG4gICAgICB9XG4gICAgICBtb2RlbC5maWVsZHMgPSBmaWVsZHMgPyBwYXJzZUZpZWxkcyhmaWVsZHMpIDoge307XG4gICAgICBncm91cGVkQnlVcmxzW3VybFBhcnRdW21vZGVsLnNjb3BlZERhdGEuc2NvcGVdID0gbW9kZWw7XG4gICAgfVxuXG4gICAgY29uc3QgbWVyZ2VkVXJsczogT2NjT3B0aW1pbWFsVXJsR3JvdXBzID0ge307XG4gICAgZm9yIChjb25zdCBbdXJsLCBncm91cF0gb2YgT2JqZWN0LmVudHJpZXMoZ3JvdXBlZEJ5VXJscykpIHtcbiAgICAgIGNvbnN0IHVybFdpdGhGaWVsZHMgPSB0aGlzLmdldFVybFdpdGhGaWVsZHMoXG4gICAgICAgIHVybCxcbiAgICAgICAgT2JqZWN0LnZhbHVlcyhncm91cCkubWFwKChsbykgPT4gbG8uZmllbGRzKVxuICAgICAgKTtcbiAgICAgIG1lcmdlZFVybHNbdXJsV2l0aEZpZWxkc10gPSBncm91cDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVyZ2VkVXJscztcbiAgfVxuXG4gIC8qKlxuICAgKiBFeHRyYWN0IGZpZWxkcyBwYXJhbWV0ZXIgZnJvbSBvY2MgZW5kcG9pbnQgdXJsXG4gICAqXG4gICAqIEBwYXJhbSB1cmxXaXRoRmllbGRzXG4gICAqL1xuICBwcml2YXRlIHNwbGl0RmllbGRzKHVybFdpdGhGaWVsZHM6IHN0cmluZyk6IFtzdHJpbmcsIHN0cmluZ10ge1xuICAgIGNvbnN0IFt1cmwsIHBhcmFtc10gPSB1cmxXaXRoRmllbGRzLnNwbGl0KCc/Jyk7XG5cbiAgICBjb25zdCBwYXJhbXNNYXAgPSB7fTtcblxuICAgIGlmIChwYXJhbXMpIHtcbiAgICAgIHBhcmFtcy5zcGxpdCgnJicpLm1hcCgocGFyYW0pID0+IHtcbiAgICAgICAgY29uc3Qga2V5VmFsdWUgPSBwYXJhbS5zcGxpdCgnPScpO1xuICAgICAgICBwYXJhbXNNYXBba2V5VmFsdWVbMF1dID0ga2V5VmFsdWVbMV07XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBub25GaWVsZHNQYXJhbXMgPSBPYmplY3Qua2V5cyhwYXJhbXNNYXApXG4gICAgICAuc29ydCgpXG4gICAgICAucmVkdWNlKChpZCwgcGFyKSA9PiB7XG4gICAgICAgIGlmIChwYXIgIT09IHRoaXMuRklFTERTX1BBUkFNKSB7XG4gICAgICAgICAgaWQucHVzaChwYXJhbXNNYXBbcGFyXSA/IGAke3Bhcn09JHtwYXJhbXNNYXBbcGFyXX1gIDogcGFyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaWQ7XG4gICAgICB9LCBbXSk7XG5cbiAgICBjb25zdCBub25GaWVsZHMgPSBub25GaWVsZHNQYXJhbXMuam9pbignJicpO1xuXG4gICAgcmV0dXJuIFtcbiAgICAgIG5vbkZpZWxkcyA/IGAke3VybH0/JHtub25GaWVsZHN9YCA6IHVybCxcbiAgICAgIHBhcmFtc01hcFt0aGlzLkZJRUxEU19QQVJBTV0sXG4gICAgXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb21iaW5lIHVybCB3aXRoIGZpZWxkIHBhcmFtZXRlcnNcbiAgICpcbiAgICogQHBhcmFtIHVybFxuICAgKiBAcGFyYW0gZmllbGRzXG4gICAqL1xuICBwcml2YXRlIGdldFVybFdpdGhGaWVsZHModXJsOiBzdHJpbmcsIGZpZWxkczogKHN0cmluZyB8IG9iamVjdClbXSk6IHN0cmluZyB7XG4gICAgY29uc3QgbWVyZ2VkRmllbGRzID0gbWVyZ2VGaWVsZHMoZmllbGRzKTtcblxuICAgIGlmIChtZXJnZWRGaWVsZHMpIHtcbiAgICAgIHVybCArPSB1cmwuaW5jbHVkZXMoJz8nKSA/ICcmJyA6ICc/JztcbiAgICAgIHVybCArPSBgJHt0aGlzLkZJRUxEU19QQVJBTX09JHttZXJnZWRGaWVsZHN9YDtcbiAgICB9XG5cbiAgICByZXR1cm4gdXJsO1xuICB9XG59XG4iXX0=
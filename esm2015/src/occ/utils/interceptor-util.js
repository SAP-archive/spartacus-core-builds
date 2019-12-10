/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpHeaders } from '@angular/common/http';
/** @type {?} */
export const USE_CLIENT_TOKEN = 'cx-use-client-token';
/** @type {?} */
export const USE_CUSTOMER_SUPPORT_AGENT_TOKEN = 'cx-use-csagent-token';
/** @type {?} */
export const TOKEN_REVOCATION_HEADER = 'cx-token-revocation';
export class InterceptorUtil {
    /**
     * @template T
     * @param {?} headerName
     * @param {?} interceptorParam
     * @param {?=} headers
     * @return {?}
     */
    static createHeader(headerName, interceptorParam, headers) {
        if (headers) {
            return headers.append(headerName, JSON.stringify(interceptorParam));
        }
        headers = new HttpHeaders().set(headerName, JSON.stringify(interceptorParam));
        return headers;
    }
    /**
     * @param {?} headerName
     * @param {?} request
     * @return {?}
     */
    static removeHeader(headerName, request) {
        /** @type {?} */
        const updatedHeaders = request.headers.delete(headerName);
        return request.clone({ headers: updatedHeaders });
    }
    /**
     * @template T
     * @param {?} headerName
     * @param {?} headers
     * @return {?}
     */
    static getInterceptorParam(headerName, headers) {
        /** @type {?} */
        const rawValue = headers.get(headerName);
        if (rawValue) {
            return JSON.parse(rawValue);
        }
        return undefined;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJjZXB0b3ItdXRpbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2MvdXRpbHMvaW50ZXJjZXB0b3ItdXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFdBQVcsRUFBZSxNQUFNLHNCQUFzQixDQUFDOztBQUVoRSxNQUFNLE9BQU8sZ0JBQWdCLEdBQUcscUJBQXFCOztBQUNyRCxNQUFNLE9BQU8sZ0NBQWdDLEdBQUcsc0JBQXNCOztBQUN0RSxNQUFNLE9BQU8sdUJBQXVCLEdBQUcscUJBQXFCO0FBRTVELE1BQU0sT0FBTyxlQUFlOzs7Ozs7OztJQUMxQixNQUFNLENBQUMsWUFBWSxDQUNqQixVQUFrQixFQUNsQixnQkFBbUIsRUFDbkIsT0FBcUI7UUFFckIsSUFBSSxPQUFPLEVBQUU7WUFDWCxPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1NBQ3JFO1FBQ0QsT0FBTyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUMsR0FBRyxDQUM3QixVQUFVLEVBQ1YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUNqQyxDQUFDO1FBQ0YsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQzs7Ozs7O0lBRUQsTUFBTSxDQUFDLFlBQVksQ0FDakIsVUFBa0IsRUFDbEIsT0FBeUI7O2NBRW5CLGNBQWMsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUM7UUFDekQsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7Ozs7OztJQUVELE1BQU0sQ0FBQyxtQkFBbUIsQ0FBSSxVQUFrQixFQUFFLE9BQW9COztjQUM5RCxRQUFRLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUM7UUFDeEMsSUFBSSxRQUFRLEVBQUU7WUFDWixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDN0I7UUFDRCxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwSGVhZGVycywgSHR0cFJlcXVlc3QgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmV4cG9ydCBjb25zdCBVU0VfQ0xJRU5UX1RPS0VOID0gJ2N4LXVzZS1jbGllbnQtdG9rZW4nO1xuZXhwb3J0IGNvbnN0IFVTRV9DVVNUT01FUl9TVVBQT1JUX0FHRU5UX1RPS0VOID0gJ2N4LXVzZS1jc2FnZW50LXRva2VuJztcbmV4cG9ydCBjb25zdCBUT0tFTl9SRVZPQ0FUSU9OX0hFQURFUiA9ICdjeC10b2tlbi1yZXZvY2F0aW9uJztcblxuZXhwb3J0IGNsYXNzIEludGVyY2VwdG9yVXRpbCB7XG4gIHN0YXRpYyBjcmVhdGVIZWFkZXI8VD4oXG4gICAgaGVhZGVyTmFtZTogc3RyaW5nLFxuICAgIGludGVyY2VwdG9yUGFyYW06IFQsXG4gICAgaGVhZGVycz86IEh0dHBIZWFkZXJzXG4gICk6IEh0dHBIZWFkZXJzIHtcbiAgICBpZiAoaGVhZGVycykge1xuICAgICAgcmV0dXJuIGhlYWRlcnMuYXBwZW5kKGhlYWRlck5hbWUsIEpTT04uc3RyaW5naWZ5KGludGVyY2VwdG9yUGFyYW0pKTtcbiAgICB9XG4gICAgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpLnNldChcbiAgICAgIGhlYWRlck5hbWUsXG4gICAgICBKU09OLnN0cmluZ2lmeShpbnRlcmNlcHRvclBhcmFtKVxuICAgICk7XG4gICAgcmV0dXJuIGhlYWRlcnM7XG4gIH1cblxuICBzdGF0aWMgcmVtb3ZlSGVhZGVyKFxuICAgIGhlYWRlck5hbWU6IHN0cmluZyxcbiAgICByZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+XG4gICk6IEh0dHBSZXF1ZXN0PGFueT4ge1xuICAgIGNvbnN0IHVwZGF0ZWRIZWFkZXJzID0gcmVxdWVzdC5oZWFkZXJzLmRlbGV0ZShoZWFkZXJOYW1lKTtcbiAgICByZXR1cm4gcmVxdWVzdC5jbG9uZSh7IGhlYWRlcnM6IHVwZGF0ZWRIZWFkZXJzIH0pO1xuICB9XG5cbiAgc3RhdGljIGdldEludGVyY2VwdG9yUGFyYW08VD4oaGVhZGVyTmFtZTogc3RyaW5nLCBoZWFkZXJzOiBIdHRwSGVhZGVycyk6IFQge1xuICAgIGNvbnN0IHJhd1ZhbHVlID0gaGVhZGVycy5nZXQoaGVhZGVyTmFtZSk7XG4gICAgaWYgKHJhd1ZhbHVlKSB7XG4gICAgICByZXR1cm4gSlNPTi5wYXJzZShyYXdWYWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cbn1cbiJdfQ==
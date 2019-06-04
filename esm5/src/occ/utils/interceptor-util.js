/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpHeaders } from '@angular/common/http';
/** @type {?} */
export var USE_CLIENT_TOKEN = 'cx-use-client-token';
var InterceptorUtil = /** @class */ (function () {
    function InterceptorUtil() {
    }
    /**
     * @template T
     * @param {?} headerName
     * @param {?} interceptorParam
     * @param {?=} headers
     * @return {?}
     */
    InterceptorUtil.createHeader = /**
     * @template T
     * @param {?} headerName
     * @param {?} interceptorParam
     * @param {?=} headers
     * @return {?}
     */
    function (headerName, interceptorParam, headers) {
        if (headers) {
            return headers.append(headerName, JSON.stringify(interceptorParam));
        }
        headers = new HttpHeaders().set(headerName, JSON.stringify(interceptorParam));
        return headers;
    };
    /**
     * @param {?} headerName
     * @param {?} request
     * @return {?}
     */
    InterceptorUtil.removeHeader = /**
     * @param {?} headerName
     * @param {?} request
     * @return {?}
     */
    function (headerName, request) {
        /** @type {?} */
        var updatedHeaders = request.headers.delete(headerName);
        return request.clone({ headers: updatedHeaders });
    };
    /**
     * @template T
     * @param {?} headerName
     * @param {?} headers
     * @return {?}
     */
    InterceptorUtil.getInterceptorParam = /**
     * @template T
     * @param {?} headerName
     * @param {?} headers
     * @return {?}
     */
    function (headerName, headers) {
        /** @type {?} */
        var rawValue = headers.get(headerName);
        if (rawValue) {
            return JSON.parse(rawValue);
        }
        return undefined;
    };
    return InterceptorUtil;
}());
export { InterceptorUtil };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJjZXB0b3ItdXRpbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2MvdXRpbHMvaW50ZXJjZXB0b3ItdXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFdBQVcsRUFBZSxNQUFNLHNCQUFzQixDQUFDOztBQUVoRSxNQUFNLEtBQU8sZ0JBQWdCLEdBQUcscUJBQXFCO0FBRXJEO0lBQUE7SUErQkEsQ0FBQzs7Ozs7Ozs7SUE5QlEsNEJBQVk7Ozs7Ozs7SUFBbkIsVUFDRSxVQUFrQixFQUNsQixnQkFBbUIsRUFDbkIsT0FBcUI7UUFFckIsSUFBSSxPQUFPLEVBQUU7WUFDWCxPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1NBQ3JFO1FBQ0QsT0FBTyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUMsR0FBRyxDQUM3QixVQUFVLEVBQ1YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUNqQyxDQUFDO1FBQ0YsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQzs7Ozs7O0lBRU0sNEJBQVk7Ozs7O0lBQW5CLFVBQ0UsVUFBa0IsRUFDbEIsT0FBeUI7O1lBRW5CLGNBQWMsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUM7UUFDekQsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7Ozs7OztJQUVNLG1DQUFtQjs7Ozs7O0lBQTFCLFVBQThCLFVBQWtCLEVBQUUsT0FBb0I7O1lBQzlELFFBQVEsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQztRQUN4QyxJQUFJLFFBQVEsRUFBRTtZQUNaLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUM3QjtRQUNELE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUM7SUFDSCxzQkFBQztBQUFELENBQUMsQUEvQkQsSUErQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwSGVhZGVycywgSHR0cFJlcXVlc3QgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmV4cG9ydCBjb25zdCBVU0VfQ0xJRU5UX1RPS0VOID0gJ2N4LXVzZS1jbGllbnQtdG9rZW4nO1xuXG5leHBvcnQgY2xhc3MgSW50ZXJjZXB0b3JVdGlsIHtcbiAgc3RhdGljIGNyZWF0ZUhlYWRlcjxUPihcbiAgICBoZWFkZXJOYW1lOiBzdHJpbmcsXG4gICAgaW50ZXJjZXB0b3JQYXJhbTogVCxcbiAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnNcbiAgKTogSHR0cEhlYWRlcnMge1xuICAgIGlmIChoZWFkZXJzKSB7XG4gICAgICByZXR1cm4gaGVhZGVycy5hcHBlbmQoaGVhZGVyTmFtZSwgSlNPTi5zdHJpbmdpZnkoaW50ZXJjZXB0b3JQYXJhbSkpO1xuICAgIH1cbiAgICBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKCkuc2V0KFxuICAgICAgaGVhZGVyTmFtZSxcbiAgICAgIEpTT04uc3RyaW5naWZ5KGludGVyY2VwdG9yUGFyYW0pXG4gICAgKTtcbiAgICByZXR1cm4gaGVhZGVycztcbiAgfVxuXG4gIHN0YXRpYyByZW1vdmVIZWFkZXIoXG4gICAgaGVhZGVyTmFtZTogc3RyaW5nLFxuICAgIHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT5cbiAgKTogSHR0cFJlcXVlc3Q8YW55PiB7XG4gICAgY29uc3QgdXBkYXRlZEhlYWRlcnMgPSByZXF1ZXN0LmhlYWRlcnMuZGVsZXRlKGhlYWRlck5hbWUpO1xuICAgIHJldHVybiByZXF1ZXN0LmNsb25lKHsgaGVhZGVyczogdXBkYXRlZEhlYWRlcnMgfSk7XG4gIH1cblxuICBzdGF0aWMgZ2V0SW50ZXJjZXB0b3JQYXJhbTxUPihoZWFkZXJOYW1lOiBzdHJpbmcsIGhlYWRlcnM6IEh0dHBIZWFkZXJzKTogVCB7XG4gICAgY29uc3QgcmF3VmFsdWUgPSBoZWFkZXJzLmdldChoZWFkZXJOYW1lKTtcbiAgICBpZiAocmF3VmFsdWUpIHtcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKHJhd1ZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxufVxuIl19
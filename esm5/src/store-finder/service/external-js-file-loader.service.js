/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
var ExternalJsFileLoader = /** @class */ (function () {
    function ExternalJsFileLoader(document) {
        this.document = document;
    }
    /**
     * Loads a javascript from an external URL
     * @param src URL for the script to be loaded
     * @param params additional parameters to be attached to the given URL
     * @param callback a function to be invoked after the script has been loaded
     */
    /**
     * Loads a javascript from an external URL
     * @param {?} src URL for the script to be loaded
     * @param {?=} params additional parameters to be attached to the given URL
     * @param {?=} callback a function to be invoked after the script has been loaded
     * @return {?}
     */
    ExternalJsFileLoader.prototype.load = /**
     * Loads a javascript from an external URL
     * @param {?} src URL for the script to be loaded
     * @param {?=} params additional parameters to be attached to the given URL
     * @param {?=} callback a function to be invoked after the script has been loaded
     * @return {?}
     */
    function (src, params, callback) {
        /** @type {?} */
        var script = this.document.createElement('script');
        script.type = 'text/javascript';
        if (params) {
            script.src = src + this.parseParams(params);
        }
        else {
            script.src = src;
        }
        script.async = true;
        script.defer = true;
        if (callback) {
            script.addEventListener('load', callback);
        }
        document.head.appendChild(script);
    };
    /**
     * Parses the given object with parameters to a string "param1=value1&param2=value2"
     * @param params object containing parameters
     */
    /**
     * Parses the given object with parameters to a string "param1=value1&param2=value2"
     * @private
     * @param {?} params object containing parameters
     * @return {?}
     */
    ExternalJsFileLoader.prototype.parseParams = /**
     * Parses the given object with parameters to a string "param1=value1&param2=value2"
     * @private
     * @param {?} params object containing parameters
     * @return {?}
     */
    function (params) {
        /** @type {?} */
        var result = '';
        /** @type {?} */
        var keysArray = Object.keys(params);
        if (keysArray.length > 0) {
            result =
                '?' +
                    keysArray
                        .map(function (key) { return encodeURI(key) + '=' + encodeURI(params[key]); })
                        .join('&');
        }
        return result;
    };
    ExternalJsFileLoader.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ExternalJsFileLoader.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    return ExternalJsFileLoader;
}());
export { ExternalJsFileLoader };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    ExternalJsFileLoader.prototype.document;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZXJuYWwtanMtZmlsZS1sb2FkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zdG9yZS1maW5kZXIvc2VydmljZS9leHRlcm5hbC1qcy1maWxlLWxvYWRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFM0M7SUFFRSw4QkFBd0MsUUFBYTtRQUFiLGFBQVEsR0FBUixRQUFRLENBQUs7SUFBRyxDQUFDO0lBRXpEOzs7OztPQUtHOzs7Ozs7OztJQUNJLG1DQUFJOzs7Ozs7O0lBQVgsVUFBWSxHQUFXLEVBQUUsTUFBZSxFQUFFLFFBQXdCOztZQUMxRCxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDO1FBQ3BELE1BQU0sQ0FBQyxJQUFJLEdBQUcsaUJBQWlCLENBQUM7UUFDaEMsSUFBSSxNQUFNLEVBQUU7WUFDVixNQUFNLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzdDO2FBQU07WUFDTCxNQUFNLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztTQUNsQjtRQUVELE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksUUFBUSxFQUFFO1lBQ1osTUFBTSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztTQUMzQztRQUVELFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRDs7O09BR0c7Ozs7Ozs7SUFDSywwQ0FBVzs7Ozs7O0lBQW5CLFVBQW9CLE1BQWM7O1lBQzVCLE1BQU0sR0FBRyxFQUFFOztZQUNULFNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNyQyxJQUFJLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3hCLE1BQU07Z0JBQ0osR0FBRztvQkFDSCxTQUFTO3lCQUNOLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUE3QyxDQUE2QyxDQUFDO3lCQUN6RCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDaEI7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOztnQkEzQ0YsVUFBVTs7OztnREFFSSxNQUFNLFNBQUMsUUFBUTs7SUEwQzlCLDJCQUFDO0NBQUEsQUE1Q0QsSUE0Q0M7U0EzQ1ksb0JBQW9COzs7Ozs7SUFDbkIsd0NBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBFeHRlcm5hbEpzRmlsZUxvYWRlciB7XG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoRE9DVU1FTlQpIHByb3RlY3RlZCBkb2N1bWVudDogYW55KSB7fVxuXG4gIC8qKlxuICAgKiBMb2FkcyBhIGphdmFzY3JpcHQgZnJvbSBhbiBleHRlcm5hbCBVUkxcbiAgICogQHBhcmFtIHNyYyBVUkwgZm9yIHRoZSBzY3JpcHQgdG8gYmUgbG9hZGVkXG4gICAqIEBwYXJhbSBwYXJhbXMgYWRkaXRpb25hbCBwYXJhbWV0ZXJzIHRvIGJlIGF0dGFjaGVkIHRvIHRoZSBnaXZlbiBVUkxcbiAgICogQHBhcmFtIGNhbGxiYWNrIGEgZnVuY3Rpb24gdG8gYmUgaW52b2tlZCBhZnRlciB0aGUgc2NyaXB0IGhhcyBiZWVuIGxvYWRlZFxuICAgKi9cbiAgcHVibGljIGxvYWQoc3JjOiBzdHJpbmcsIHBhcmFtcz86IE9iamVjdCwgY2FsbGJhY2s/OiBFdmVudExpc3RlbmVyKTogdm9pZCB7XG4gICAgY29uc3Qgc2NyaXB0ID0gdGhpcy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICBzY3JpcHQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xuICAgIGlmIChwYXJhbXMpIHtcbiAgICAgIHNjcmlwdC5zcmMgPSBzcmMgKyB0aGlzLnBhcnNlUGFyYW1zKHBhcmFtcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNjcmlwdC5zcmMgPSBzcmM7XG4gICAgfVxuXG4gICAgc2NyaXB0LmFzeW5jID0gdHJ1ZTtcbiAgICBzY3JpcHQuZGVmZXIgPSB0cnVlO1xuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgc2NyaXB0LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBjYWxsYmFjayk7XG4gICAgfVxuXG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlcyB0aGUgZ2l2ZW4gb2JqZWN0IHdpdGggcGFyYW1ldGVycyB0byBhIHN0cmluZyBcInBhcmFtMT12YWx1ZTEmcGFyYW0yPXZhbHVlMlwiXG4gICAqIEBwYXJhbSBwYXJhbXMgb2JqZWN0IGNvbnRhaW5pbmcgcGFyYW1ldGVyc1xuICAgKi9cbiAgcHJpdmF0ZSBwYXJzZVBhcmFtcyhwYXJhbXM6IE9iamVjdCk6IHN0cmluZyB7XG4gICAgbGV0IHJlc3VsdCA9ICcnO1xuICAgIGNvbnN0IGtleXNBcnJheSA9IE9iamVjdC5rZXlzKHBhcmFtcyk7XG4gICAgaWYgKGtleXNBcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICByZXN1bHQgPVxuICAgICAgICAnPycgK1xuICAgICAgICBrZXlzQXJyYXlcbiAgICAgICAgICAubWFwKGtleSA9PiBlbmNvZGVVUkkoa2V5KSArICc9JyArIGVuY29kZVVSSShwYXJhbXNba2V5XSkpXG4gICAgICAgICAgLmpvaW4oJyYnKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufVxuIl19
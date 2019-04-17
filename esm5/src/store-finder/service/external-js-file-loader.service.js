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
     * @private
     */
    ExternalJsFileLoader.prototype.document;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZXJuYWwtanMtZmlsZS1sb2FkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zdG9yZS1maW5kZXIvc2VydmljZS9leHRlcm5hbC1qcy1maWxlLWxvYWRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFM0M7SUFFRSw4QkFBc0MsUUFBYTtRQUFiLGFBQVEsR0FBUixRQUFRLENBQUs7SUFBRyxDQUFDO0lBRXZEOzs7OztPQUtHOzs7Ozs7OztJQUNJLG1DQUFJOzs7Ozs7O0lBQVgsVUFBWSxHQUFXLEVBQUUsTUFBZSxFQUFFLFFBQXdCOztZQUMxRCxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDO1FBQ3BELE1BQU0sQ0FBQyxJQUFJLEdBQUcsaUJBQWlCLENBQUM7UUFDaEMsSUFBSSxNQUFNLEVBQUU7WUFDVixNQUFNLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzdDO2FBQU07WUFDTCxNQUFNLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztTQUNsQjtRQUVELE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksUUFBUSxFQUFFO1lBQ1osTUFBTSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztTQUMzQztRQUVELFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRDs7O09BR0c7Ozs7Ozs7SUFDSywwQ0FBVzs7Ozs7O0lBQW5CLFVBQW9CLE1BQWM7O1lBQzVCLE1BQU0sR0FBRyxFQUFFOztZQUNULFNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNyQyxJQUFJLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3hCLE1BQU07Z0JBQ0osR0FBRztvQkFDSCxTQUFTO3lCQUNOLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUE3QyxDQUE2QyxDQUFDO3lCQUN6RCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDaEI7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOztnQkEzQ0YsVUFBVTs7OztnREFFSSxNQUFNLFNBQUMsUUFBUTs7SUEwQzlCLDJCQUFDO0NBQUEsQUE1Q0QsSUE0Q0M7U0EzQ1ksb0JBQW9COzs7Ozs7SUFDbkIsd0NBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBFeHRlcm5hbEpzRmlsZUxvYWRlciB7XG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSkge31cblxuICAvKipcbiAgICogTG9hZHMgYSBqYXZhc2NyaXB0IGZyb20gYW4gZXh0ZXJuYWwgVVJMXG4gICAqIEBwYXJhbSBzcmMgVVJMIGZvciB0aGUgc2NyaXB0IHRvIGJlIGxvYWRlZFxuICAgKiBAcGFyYW0gcGFyYW1zIGFkZGl0aW9uYWwgcGFyYW1ldGVycyB0byBiZSBhdHRhY2hlZCB0byB0aGUgZ2l2ZW4gVVJMXG4gICAqIEBwYXJhbSBjYWxsYmFjayBhIGZ1bmN0aW9uIHRvIGJlIGludm9rZWQgYWZ0ZXIgdGhlIHNjcmlwdCBoYXMgYmVlbiBsb2FkZWRcbiAgICovXG4gIHB1YmxpYyBsb2FkKHNyYzogc3RyaW5nLCBwYXJhbXM/OiBPYmplY3QsIGNhbGxiYWNrPzogRXZlbnRMaXN0ZW5lcik6IHZvaWQge1xuICAgIGNvbnN0IHNjcmlwdCA9IHRoaXMuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgc2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcbiAgICBpZiAocGFyYW1zKSB7XG4gICAgICBzY3JpcHQuc3JjID0gc3JjICsgdGhpcy5wYXJzZVBhcmFtcyhwYXJhbXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzY3JpcHQuc3JjID0gc3JjO1xuICAgIH1cblxuICAgIHNjcmlwdC5hc3luYyA9IHRydWU7XG4gICAgc2NyaXB0LmRlZmVyID0gdHJ1ZTtcbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIHNjcmlwdC5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgY2FsbGJhY2spO1xuICAgIH1cblxuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXJzZXMgdGhlIGdpdmVuIG9iamVjdCB3aXRoIHBhcmFtZXRlcnMgdG8gYSBzdHJpbmcgXCJwYXJhbTE9dmFsdWUxJnBhcmFtMj12YWx1ZTJcIlxuICAgKiBAcGFyYW0gcGFyYW1zIG9iamVjdCBjb250YWluaW5nIHBhcmFtZXRlcnNcbiAgICovXG4gIHByaXZhdGUgcGFyc2VQYXJhbXMocGFyYW1zOiBPYmplY3QpOiBzdHJpbmcge1xuICAgIGxldCByZXN1bHQgPSAnJztcbiAgICBjb25zdCBrZXlzQXJyYXkgPSBPYmplY3Qua2V5cyhwYXJhbXMpO1xuICAgIGlmIChrZXlzQXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgcmVzdWx0ID1cbiAgICAgICAgJz8nICtcbiAgICAgICAga2V5c0FycmF5XG4gICAgICAgICAgLm1hcChrZXkgPT4gZW5jb2RlVVJJKGtleSkgKyAnPScgKyBlbmNvZGVVUkkocGFyYW1zW2tleV0pKVxuICAgICAgICAgIC5qb2luKCcmJyk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cbiJdfQ==
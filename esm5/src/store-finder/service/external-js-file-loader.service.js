import { __decorate, __param } from "tslib";
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
    ExternalJsFileLoader.prototype.load = function (src, params, callback) {
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
    ExternalJsFileLoader.prototype.parseParams = function (params) {
        var result = '';
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
    ExternalJsFileLoader.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    ExternalJsFileLoader = __decorate([
        Injectable(),
        __param(0, Inject(DOCUMENT))
    ], ExternalJsFileLoader);
    return ExternalJsFileLoader;
}());
export { ExternalJsFileLoader };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZXJuYWwtanMtZmlsZS1sb2FkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zdG9yZS1maW5kZXIvc2VydmljZS9leHRlcm5hbC1qcy1maWxlLWxvYWRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHM0M7SUFDRSw4QkFBd0MsUUFBYTtRQUFiLGFBQVEsR0FBUixRQUFRLENBQUs7SUFBRyxDQUFDO0lBRXpEOzs7OztPQUtHO0lBQ0ksbUNBQUksR0FBWCxVQUFZLEdBQVcsRUFBRSxNQUFlLEVBQUUsUUFBd0I7UUFDaEUsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDckQsTUFBTSxDQUFDLElBQUksR0FBRyxpQkFBaUIsQ0FBQztRQUNoQyxJQUFJLE1BQU0sRUFBRTtZQUNWLE1BQU0sQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDN0M7YUFBTTtZQUNMLE1BQU0sQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1NBQ2xCO1FBRUQsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDcEIsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxRQUFRLEVBQUU7WUFDWixNQUFNLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQzNDO1FBRUQsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVEOzs7T0FHRztJQUNLLDBDQUFXLEdBQW5CLFVBQW9CLE1BQWM7UUFDaEMsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLElBQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEMsSUFBSSxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUN4QixNQUFNO2dCQUNKLEdBQUc7b0JBQ0gsU0FBUzt5QkFDTixHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBN0MsQ0FBNkMsQ0FBQzt5QkFDekQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2hCO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7Z0RBekNZLE1BQU0sU0FBQyxRQUFROztJQURqQixvQkFBb0I7UUFEaEMsVUFBVSxFQUFFO1FBRUUsV0FBQSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUE7T0FEbEIsb0JBQW9CLENBMkNoQztJQUFELDJCQUFDO0NBQUEsQUEzQ0QsSUEyQ0M7U0EzQ1ksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBFeHRlcm5hbEpzRmlsZUxvYWRlciB7XG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoRE9DVU1FTlQpIHByb3RlY3RlZCBkb2N1bWVudDogYW55KSB7fVxuXG4gIC8qKlxuICAgKiBMb2FkcyBhIGphdmFzY3JpcHQgZnJvbSBhbiBleHRlcm5hbCBVUkxcbiAgICogQHBhcmFtIHNyYyBVUkwgZm9yIHRoZSBzY3JpcHQgdG8gYmUgbG9hZGVkXG4gICAqIEBwYXJhbSBwYXJhbXMgYWRkaXRpb25hbCBwYXJhbWV0ZXJzIHRvIGJlIGF0dGFjaGVkIHRvIHRoZSBnaXZlbiBVUkxcbiAgICogQHBhcmFtIGNhbGxiYWNrIGEgZnVuY3Rpb24gdG8gYmUgaW52b2tlZCBhZnRlciB0aGUgc2NyaXB0IGhhcyBiZWVuIGxvYWRlZFxuICAgKi9cbiAgcHVibGljIGxvYWQoc3JjOiBzdHJpbmcsIHBhcmFtcz86IE9iamVjdCwgY2FsbGJhY2s/OiBFdmVudExpc3RlbmVyKTogdm9pZCB7XG4gICAgY29uc3Qgc2NyaXB0ID0gdGhpcy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICBzY3JpcHQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xuICAgIGlmIChwYXJhbXMpIHtcbiAgICAgIHNjcmlwdC5zcmMgPSBzcmMgKyB0aGlzLnBhcnNlUGFyYW1zKHBhcmFtcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNjcmlwdC5zcmMgPSBzcmM7XG4gICAgfVxuXG4gICAgc2NyaXB0LmFzeW5jID0gdHJ1ZTtcbiAgICBzY3JpcHQuZGVmZXIgPSB0cnVlO1xuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgc2NyaXB0LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBjYWxsYmFjayk7XG4gICAgfVxuXG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlcyB0aGUgZ2l2ZW4gb2JqZWN0IHdpdGggcGFyYW1ldGVycyB0byBhIHN0cmluZyBcInBhcmFtMT12YWx1ZTEmcGFyYW0yPXZhbHVlMlwiXG4gICAqIEBwYXJhbSBwYXJhbXMgb2JqZWN0IGNvbnRhaW5pbmcgcGFyYW1ldGVyc1xuICAgKi9cbiAgcHJpdmF0ZSBwYXJzZVBhcmFtcyhwYXJhbXM6IE9iamVjdCk6IHN0cmluZyB7XG4gICAgbGV0IHJlc3VsdCA9ICcnO1xuICAgIGNvbnN0IGtleXNBcnJheSA9IE9iamVjdC5rZXlzKHBhcmFtcyk7XG4gICAgaWYgKGtleXNBcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICByZXN1bHQgPVxuICAgICAgICAnPycgK1xuICAgICAgICBrZXlzQXJyYXlcbiAgICAgICAgICAubWFwKGtleSA9PiBlbmNvZGVVUkkoa2V5KSArICc9JyArIGVuY29kZVVSSShwYXJhbXNba2V5XSkpXG4gICAgICAgICAgLmpvaW4oJyYnKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufVxuIl19
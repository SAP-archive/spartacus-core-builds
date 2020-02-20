import { __decorate, __param } from "tslib";
import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
let ExternalJsFileLoader = class ExternalJsFileLoader {
    constructor(document) {
        this.document = document;
    }
    /**
     * Loads a javascript from an external URL
     * @param src URL for the script to be loaded
     * @param params additional parameters to be attached to the given URL
     * @param callback a function to be invoked after the script has been loaded
     */
    load(src, params, callback) {
        const script = this.document.createElement('script');
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
    }
    /**
     * Parses the given object with parameters to a string "param1=value1&param2=value2"
     * @param params object containing parameters
     */
    parseParams(params) {
        let result = '';
        const keysArray = Object.keys(params);
        if (keysArray.length > 0) {
            result =
                '?' +
                    keysArray
                        .map(key => encodeURI(key) + '=' + encodeURI(params[key]))
                        .join('&');
        }
        return result;
    }
};
ExternalJsFileLoader.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
ExternalJsFileLoader = __decorate([
    Injectable(),
    __param(0, Inject(DOCUMENT))
], ExternalJsFileLoader);
export { ExternalJsFileLoader };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZXJuYWwtanMtZmlsZS1sb2FkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zdG9yZS1maW5kZXIvc2VydmljZS9leHRlcm5hbC1qcy1maWxlLWxvYWRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHM0MsSUFBYSxvQkFBb0IsR0FBakMsTUFBYSxvQkFBb0I7SUFDL0IsWUFBd0MsUUFBYTtRQUFiLGFBQVEsR0FBUixRQUFRLENBQUs7SUFBRyxDQUFDO0lBRXpEOzs7OztPQUtHO0lBQ0ksSUFBSSxDQUFDLEdBQVcsRUFBRSxNQUFlLEVBQUUsUUFBd0I7UUFDaEUsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDckQsTUFBTSxDQUFDLElBQUksR0FBRyxpQkFBaUIsQ0FBQztRQUNoQyxJQUFJLE1BQU0sRUFBRTtZQUNWLE1BQU0sQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDN0M7YUFBTTtZQUNMLE1BQU0sQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1NBQ2xCO1FBRUQsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDcEIsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxRQUFRLEVBQUU7WUFDWixNQUFNLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQzNDO1FBRUQsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVEOzs7T0FHRztJQUNLLFdBQVcsQ0FBQyxNQUFjO1FBQ2hDLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNoQixNQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RDLElBQUksU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDeEIsTUFBTTtnQkFDSixHQUFHO29CQUNILFNBQVM7eUJBQ04sR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7eUJBQ3pELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNoQjtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7Q0FDRixDQUFBOzs0Q0ExQ2MsTUFBTSxTQUFDLFFBQVE7O0FBRGpCLG9CQUFvQjtJQURoQyxVQUFVLEVBQUU7SUFFRSxXQUFBLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQTtHQURsQixvQkFBb0IsQ0EyQ2hDO1NBM0NZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRXh0ZXJuYWxKc0ZpbGVMb2FkZXIge1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KERPQ1VNRU5UKSBwcm90ZWN0ZWQgZG9jdW1lbnQ6IGFueSkge31cblxuICAvKipcbiAgICogTG9hZHMgYSBqYXZhc2NyaXB0IGZyb20gYW4gZXh0ZXJuYWwgVVJMXG4gICAqIEBwYXJhbSBzcmMgVVJMIGZvciB0aGUgc2NyaXB0IHRvIGJlIGxvYWRlZFxuICAgKiBAcGFyYW0gcGFyYW1zIGFkZGl0aW9uYWwgcGFyYW1ldGVycyB0byBiZSBhdHRhY2hlZCB0byB0aGUgZ2l2ZW4gVVJMXG4gICAqIEBwYXJhbSBjYWxsYmFjayBhIGZ1bmN0aW9uIHRvIGJlIGludm9rZWQgYWZ0ZXIgdGhlIHNjcmlwdCBoYXMgYmVlbiBsb2FkZWRcbiAgICovXG4gIHB1YmxpYyBsb2FkKHNyYzogc3RyaW5nLCBwYXJhbXM/OiBPYmplY3QsIGNhbGxiYWNrPzogRXZlbnRMaXN0ZW5lcik6IHZvaWQge1xuICAgIGNvbnN0IHNjcmlwdCA9IHRoaXMuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgc2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcbiAgICBpZiAocGFyYW1zKSB7XG4gICAgICBzY3JpcHQuc3JjID0gc3JjICsgdGhpcy5wYXJzZVBhcmFtcyhwYXJhbXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzY3JpcHQuc3JjID0gc3JjO1xuICAgIH1cblxuICAgIHNjcmlwdC5hc3luYyA9IHRydWU7XG4gICAgc2NyaXB0LmRlZmVyID0gdHJ1ZTtcbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIHNjcmlwdC5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgY2FsbGJhY2spO1xuICAgIH1cblxuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXJzZXMgdGhlIGdpdmVuIG9iamVjdCB3aXRoIHBhcmFtZXRlcnMgdG8gYSBzdHJpbmcgXCJwYXJhbTE9dmFsdWUxJnBhcmFtMj12YWx1ZTJcIlxuICAgKiBAcGFyYW0gcGFyYW1zIG9iamVjdCBjb250YWluaW5nIHBhcmFtZXRlcnNcbiAgICovXG4gIHByaXZhdGUgcGFyc2VQYXJhbXMocGFyYW1zOiBPYmplY3QpOiBzdHJpbmcge1xuICAgIGxldCByZXN1bHQgPSAnJztcbiAgICBjb25zdCBrZXlzQXJyYXkgPSBPYmplY3Qua2V5cyhwYXJhbXMpO1xuICAgIGlmIChrZXlzQXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgcmVzdWx0ID1cbiAgICAgICAgJz8nICtcbiAgICAgICAga2V5c0FycmF5XG4gICAgICAgICAgLm1hcChrZXkgPT4gZW5jb2RlVVJJKGtleSkgKyAnPScgKyBlbmNvZGVVUkkocGFyYW1zW2tleV0pKVxuICAgICAgICAgIC5qb2luKCcmJyk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cbiJdfQ==
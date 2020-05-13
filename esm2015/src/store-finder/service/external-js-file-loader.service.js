import { __decorate, __param } from "tslib";
import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
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
                        .map((key) => encodeURI(key) + '=' + encodeURI(params[key]))
                        .join('&');
        }
        return result;
    }
};
ExternalJsFileLoader.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
ExternalJsFileLoader.ɵprov = i0.ɵɵdefineInjectable({ factory: function ExternalJsFileLoader_Factory() { return new ExternalJsFileLoader(i0.ɵɵinject(i1.DOCUMENT)); }, token: ExternalJsFileLoader, providedIn: "root" });
ExternalJsFileLoader = __decorate([
    Injectable({
        providedIn: 'root',
    }),
    __param(0, Inject(DOCUMENT))
], ExternalJsFileLoader);
export { ExternalJsFileLoader };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZXJuYWwtanMtZmlsZS1sb2FkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zdG9yZS1maW5kZXIvc2VydmljZS9leHRlcm5hbC1qcy1maWxlLWxvYWRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7OztBQUszQyxJQUFhLG9CQUFvQixHQUFqQyxNQUFhLG9CQUFvQjtJQUMvQixZQUF3QyxRQUFhO1FBQWIsYUFBUSxHQUFSLFFBQVEsQ0FBSztJQUFHLENBQUM7SUFFekQ7Ozs7O09BS0c7SUFDSSxJQUFJLENBQUMsR0FBVyxFQUFFLE1BQWUsRUFBRSxRQUF3QjtRQUNoRSxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNyRCxNQUFNLENBQUMsSUFBSSxHQUFHLGlCQUFpQixDQUFDO1FBQ2hDLElBQUksTUFBTSxFQUFFO1lBQ1YsTUFBTSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUM3QzthQUFNO1lBQ0wsTUFBTSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7U0FDbEI7UUFFRCxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNwQixNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLFFBQVEsRUFBRTtZQUNaLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDM0M7UUFFRCxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ssV0FBVyxDQUFDLE1BQWM7UUFDaEMsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLE1BQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEMsSUFBSSxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUN4QixNQUFNO2dCQUNKLEdBQUc7b0JBQ0gsU0FBUzt5QkFDTixHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO3lCQUMzRCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDaEI7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0NBQ0YsQ0FBQTs7NENBMUNjLE1BQU0sU0FBQyxRQUFROzs7QUFEakIsb0JBQW9CO0lBSGhDLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7SUFFYSxXQUFBLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQTtHQURsQixvQkFBb0IsQ0EyQ2hDO1NBM0NZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgRXh0ZXJuYWxKc0ZpbGVMb2FkZXIge1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KERPQ1VNRU5UKSBwcm90ZWN0ZWQgZG9jdW1lbnQ6IGFueSkge31cblxuICAvKipcbiAgICogTG9hZHMgYSBqYXZhc2NyaXB0IGZyb20gYW4gZXh0ZXJuYWwgVVJMXG4gICAqIEBwYXJhbSBzcmMgVVJMIGZvciB0aGUgc2NyaXB0IHRvIGJlIGxvYWRlZFxuICAgKiBAcGFyYW0gcGFyYW1zIGFkZGl0aW9uYWwgcGFyYW1ldGVycyB0byBiZSBhdHRhY2hlZCB0byB0aGUgZ2l2ZW4gVVJMXG4gICAqIEBwYXJhbSBjYWxsYmFjayBhIGZ1bmN0aW9uIHRvIGJlIGludm9rZWQgYWZ0ZXIgdGhlIHNjcmlwdCBoYXMgYmVlbiBsb2FkZWRcbiAgICovXG4gIHB1YmxpYyBsb2FkKHNyYzogc3RyaW5nLCBwYXJhbXM/OiBPYmplY3QsIGNhbGxiYWNrPzogRXZlbnRMaXN0ZW5lcik6IHZvaWQge1xuICAgIGNvbnN0IHNjcmlwdCA9IHRoaXMuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgc2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcbiAgICBpZiAocGFyYW1zKSB7XG4gICAgICBzY3JpcHQuc3JjID0gc3JjICsgdGhpcy5wYXJzZVBhcmFtcyhwYXJhbXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzY3JpcHQuc3JjID0gc3JjO1xuICAgIH1cblxuICAgIHNjcmlwdC5hc3luYyA9IHRydWU7XG4gICAgc2NyaXB0LmRlZmVyID0gdHJ1ZTtcbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIHNjcmlwdC5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgY2FsbGJhY2spO1xuICAgIH1cblxuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXJzZXMgdGhlIGdpdmVuIG9iamVjdCB3aXRoIHBhcmFtZXRlcnMgdG8gYSBzdHJpbmcgXCJwYXJhbTE9dmFsdWUxJnBhcmFtMj12YWx1ZTJcIlxuICAgKiBAcGFyYW0gcGFyYW1zIG9iamVjdCBjb250YWluaW5nIHBhcmFtZXRlcnNcbiAgICovXG4gIHByaXZhdGUgcGFyc2VQYXJhbXMocGFyYW1zOiBPYmplY3QpOiBzdHJpbmcge1xuICAgIGxldCByZXN1bHQgPSAnJztcbiAgICBjb25zdCBrZXlzQXJyYXkgPSBPYmplY3Qua2V5cyhwYXJhbXMpO1xuICAgIGlmIChrZXlzQXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgcmVzdWx0ID1cbiAgICAgICAgJz8nICtcbiAgICAgICAga2V5c0FycmF5XG4gICAgICAgICAgLm1hcCgoa2V5KSA9PiBlbmNvZGVVUkkoa2V5KSArICc9JyArIGVuY29kZVVSSShwYXJhbXNba2V5XSkpXG4gICAgICAgICAgLmpvaW4oJyYnKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufVxuIl19
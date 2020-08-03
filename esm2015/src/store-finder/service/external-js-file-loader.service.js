import { __decorate, __param } from "tslib";
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
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
     * @param errorCallback function to be invoked after error during script loading
     */
    load(src, params, callback, errorCallback) {
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
        if (errorCallback) {
            script.addEventListener('error', errorCallback);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZXJuYWwtanMtZmlsZS1sb2FkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zdG9yZS1maW5kZXIvc2VydmljZS9leHRlcm5hbC1qcy1maWxlLWxvYWRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQUtuRCxJQUFhLG9CQUFvQixHQUFqQyxNQUFhLG9CQUFvQjtJQUMvQixZQUF3QyxRQUFhO1FBQWIsYUFBUSxHQUFSLFFBQVEsQ0FBSztJQUFHLENBQUM7SUFFekQ7Ozs7OztPQU1HO0lBQ0ksSUFBSSxDQUNULEdBQVcsRUFDWCxNQUFlLEVBQ2YsUUFBd0IsRUFDeEIsYUFBNkI7UUFFN0IsTUFBTSxNQUFNLEdBQXNCLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3hFLE1BQU0sQ0FBQyxJQUFJLEdBQUcsaUJBQWlCLENBQUM7UUFDaEMsSUFBSSxNQUFNLEVBQUU7WUFDVixNQUFNLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzdDO2FBQU07WUFDTCxNQUFNLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztTQUNsQjtRQUVELE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksUUFBUSxFQUFFO1lBQ1osTUFBTSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztTQUMzQztRQUNELElBQUksYUFBYSxFQUFFO1lBQ2pCLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsYUFBYSxDQUFDLENBQUM7U0FDakQ7UUFFRCxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ssV0FBVyxDQUFDLE1BQWM7UUFDaEMsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLE1BQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEMsSUFBSSxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUN4QixNQUFNO2dCQUNKLEdBQUc7b0JBQ0gsU0FBUzt5QkFDTixHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO3lCQUMzRCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDaEI7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0NBQ0YsQ0FBQTs7NENBbkRjLE1BQU0sU0FBQyxRQUFROzs7QUFEakIsb0JBQW9CO0lBSGhDLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7SUFFYSxXQUFBLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQTtHQURsQixvQkFBb0IsQ0FvRGhDO1NBcERZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgRXh0ZXJuYWxKc0ZpbGVMb2FkZXIge1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KERPQ1VNRU5UKSBwcm90ZWN0ZWQgZG9jdW1lbnQ6IGFueSkge31cblxuICAvKipcbiAgICogTG9hZHMgYSBqYXZhc2NyaXB0IGZyb20gYW4gZXh0ZXJuYWwgVVJMXG4gICAqIEBwYXJhbSBzcmMgVVJMIGZvciB0aGUgc2NyaXB0IHRvIGJlIGxvYWRlZFxuICAgKiBAcGFyYW0gcGFyYW1zIGFkZGl0aW9uYWwgcGFyYW1ldGVycyB0byBiZSBhdHRhY2hlZCB0byB0aGUgZ2l2ZW4gVVJMXG4gICAqIEBwYXJhbSBjYWxsYmFjayBhIGZ1bmN0aW9uIHRvIGJlIGludm9rZWQgYWZ0ZXIgdGhlIHNjcmlwdCBoYXMgYmVlbiBsb2FkZWRcbiAgICogQHBhcmFtIGVycm9yQ2FsbGJhY2sgZnVuY3Rpb24gdG8gYmUgaW52b2tlZCBhZnRlciBlcnJvciBkdXJpbmcgc2NyaXB0IGxvYWRpbmdcbiAgICovXG4gIHB1YmxpYyBsb2FkKFxuICAgIHNyYzogc3RyaW5nLFxuICAgIHBhcmFtcz86IE9iamVjdCxcbiAgICBjYWxsYmFjaz86IEV2ZW50TGlzdGVuZXIsXG4gICAgZXJyb3JDYWxsYmFjaz86IEV2ZW50TGlzdGVuZXJcbiAgKTogdm9pZCB7XG4gICAgY29uc3Qgc2NyaXB0OiBIVE1MU2NyaXB0RWxlbWVudCA9IHRoaXMuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgc2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcbiAgICBpZiAocGFyYW1zKSB7XG4gICAgICBzY3JpcHQuc3JjID0gc3JjICsgdGhpcy5wYXJzZVBhcmFtcyhwYXJhbXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzY3JpcHQuc3JjID0gc3JjO1xuICAgIH1cblxuICAgIHNjcmlwdC5hc3luYyA9IHRydWU7XG4gICAgc2NyaXB0LmRlZmVyID0gdHJ1ZTtcbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIHNjcmlwdC5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgY2FsbGJhY2spO1xuICAgIH1cbiAgICBpZiAoZXJyb3JDYWxsYmFjaykge1xuICAgICAgc2NyaXB0LmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZXJyb3JDYWxsYmFjayk7XG4gICAgfVxuXG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlcyB0aGUgZ2l2ZW4gb2JqZWN0IHdpdGggcGFyYW1ldGVycyB0byBhIHN0cmluZyBcInBhcmFtMT12YWx1ZTEmcGFyYW0yPXZhbHVlMlwiXG4gICAqIEBwYXJhbSBwYXJhbXMgb2JqZWN0IGNvbnRhaW5pbmcgcGFyYW1ldGVyc1xuICAgKi9cbiAgcHJpdmF0ZSBwYXJzZVBhcmFtcyhwYXJhbXM6IE9iamVjdCk6IHN0cmluZyB7XG4gICAgbGV0IHJlc3VsdCA9ICcnO1xuICAgIGNvbnN0IGtleXNBcnJheSA9IE9iamVjdC5rZXlzKHBhcmFtcyk7XG4gICAgaWYgKGtleXNBcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICByZXN1bHQgPVxuICAgICAgICAnPycgK1xuICAgICAgICBrZXlzQXJyYXlcbiAgICAgICAgICAubWFwKChrZXkpID0+IGVuY29kZVVSSShrZXkpICsgJz0nICsgZW5jb2RlVVJJKHBhcmFtc1trZXldKSlcbiAgICAgICAgICAuam9pbignJicpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG4iXX0=
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class ExternalJsFileLoader {
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
}
ExternalJsFileLoader.ɵprov = i0.ɵɵdefineInjectable({ factory: function ExternalJsFileLoader_Factory() { return new ExternalJsFileLoader(i0.ɵɵinject(i1.DOCUMENT)); }, token: ExternalJsFileLoader, providedIn: "root" });
ExternalJsFileLoader.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
ExternalJsFileLoader.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZXJuYWwtanMtZmlsZS1sb2FkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL3N0b3JlLWZpbmRlci9zZXJ2aWNlL2V4dGVybmFsLWpzLWZpbGUtbG9hZGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFLbkQsTUFBTSxPQUFPLG9CQUFvQjtJQUMvQixZQUF3QyxRQUFhO1FBQWIsYUFBUSxHQUFSLFFBQVEsQ0FBSztJQUFHLENBQUM7SUFFekQ7Ozs7OztPQU1HO0lBQ0ksSUFBSSxDQUNULEdBQVcsRUFDWCxNQUFlLEVBQ2YsUUFBd0IsRUFDeEIsYUFBNkI7UUFFN0IsTUFBTSxNQUFNLEdBQXNCLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3hFLE1BQU0sQ0FBQyxJQUFJLEdBQUcsaUJBQWlCLENBQUM7UUFDaEMsSUFBSSxNQUFNLEVBQUU7WUFDVixNQUFNLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzdDO2FBQU07WUFDTCxNQUFNLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztTQUNsQjtRQUVELE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksUUFBUSxFQUFFO1lBQ1osTUFBTSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztTQUMzQztRQUNELElBQUksYUFBYSxFQUFFO1lBQ2pCLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsYUFBYSxDQUFDLENBQUM7U0FDakQ7UUFFRCxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ssV0FBVyxDQUFDLE1BQWM7UUFDaEMsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLE1BQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEMsSUFBSSxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUN4QixNQUFNO2dCQUNKLEdBQUc7b0JBQ0gsU0FBUzt5QkFDTixHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO3lCQUMzRCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDaEI7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOzs7O1lBdERGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OzRDQUVjLE1BQU0sU0FBQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBFeHRlcm5hbEpzRmlsZUxvYWRlciB7XG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoRE9DVU1FTlQpIHByb3RlY3RlZCBkb2N1bWVudDogYW55KSB7fVxuXG4gIC8qKlxuICAgKiBMb2FkcyBhIGphdmFzY3JpcHQgZnJvbSBhbiBleHRlcm5hbCBVUkxcbiAgICogQHBhcmFtIHNyYyBVUkwgZm9yIHRoZSBzY3JpcHQgdG8gYmUgbG9hZGVkXG4gICAqIEBwYXJhbSBwYXJhbXMgYWRkaXRpb25hbCBwYXJhbWV0ZXJzIHRvIGJlIGF0dGFjaGVkIHRvIHRoZSBnaXZlbiBVUkxcbiAgICogQHBhcmFtIGNhbGxiYWNrIGEgZnVuY3Rpb24gdG8gYmUgaW52b2tlZCBhZnRlciB0aGUgc2NyaXB0IGhhcyBiZWVuIGxvYWRlZFxuICAgKiBAcGFyYW0gZXJyb3JDYWxsYmFjayBmdW5jdGlvbiB0byBiZSBpbnZva2VkIGFmdGVyIGVycm9yIGR1cmluZyBzY3JpcHQgbG9hZGluZ1xuICAgKi9cbiAgcHVibGljIGxvYWQoXG4gICAgc3JjOiBzdHJpbmcsXG4gICAgcGFyYW1zPzogT2JqZWN0LFxuICAgIGNhbGxiYWNrPzogRXZlbnRMaXN0ZW5lcixcbiAgICBlcnJvckNhbGxiYWNrPzogRXZlbnRMaXN0ZW5lclxuICApOiB2b2lkIHtcbiAgICBjb25zdCBzY3JpcHQ6IEhUTUxTY3JpcHRFbGVtZW50ID0gdGhpcy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICBzY3JpcHQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xuICAgIGlmIChwYXJhbXMpIHtcbiAgICAgIHNjcmlwdC5zcmMgPSBzcmMgKyB0aGlzLnBhcnNlUGFyYW1zKHBhcmFtcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNjcmlwdC5zcmMgPSBzcmM7XG4gICAgfVxuXG4gICAgc2NyaXB0LmFzeW5jID0gdHJ1ZTtcbiAgICBzY3JpcHQuZGVmZXIgPSB0cnVlO1xuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgc2NyaXB0LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBjYWxsYmFjayk7XG4gICAgfVxuICAgIGlmIChlcnJvckNhbGxiYWNrKSB7XG4gICAgICBzY3JpcHQuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBlcnJvckNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gIH1cblxuICAvKipcbiAgICogUGFyc2VzIHRoZSBnaXZlbiBvYmplY3Qgd2l0aCBwYXJhbWV0ZXJzIHRvIGEgc3RyaW5nIFwicGFyYW0xPXZhbHVlMSZwYXJhbTI9dmFsdWUyXCJcbiAgICogQHBhcmFtIHBhcmFtcyBvYmplY3QgY29udGFpbmluZyBwYXJhbWV0ZXJzXG4gICAqL1xuICBwcml2YXRlIHBhcnNlUGFyYW1zKHBhcmFtczogT2JqZWN0KTogc3RyaW5nIHtcbiAgICBsZXQgcmVzdWx0ID0gJyc7XG4gICAgY29uc3Qga2V5c0FycmF5ID0gT2JqZWN0LmtleXMocGFyYW1zKTtcbiAgICBpZiAoa2V5c0FycmF5Lmxlbmd0aCA+IDApIHtcbiAgICAgIHJlc3VsdCA9XG4gICAgICAgICc/JyArXG4gICAgICAgIGtleXNBcnJheVxuICAgICAgICAgIC5tYXAoKGtleSkgPT4gZW5jb2RlVVJJKGtleSkgKyAnPScgKyBlbmNvZGVVUkkocGFyYW1zW2tleV0pKVxuICAgICAgICAgIC5qb2luKCcmJyk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cbiJdfQ==
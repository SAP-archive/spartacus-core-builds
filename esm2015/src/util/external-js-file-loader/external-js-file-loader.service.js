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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZXJuYWwtanMtZmlsZS1sb2FkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL3V0aWwvZXh0ZXJuYWwtanMtZmlsZS1sb2FkZXIvZXh0ZXJuYWwtanMtZmlsZS1sb2FkZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQUtuRCxNQUFNLE9BQU8sb0JBQW9CO0lBQy9CLFlBQXdDLFFBQWE7UUFBYixhQUFRLEdBQVIsUUFBUSxDQUFLO0lBQUcsQ0FBQztJQUV6RDs7Ozs7O09BTUc7SUFDSSxJQUFJLENBQ1QsR0FBVyxFQUNYLE1BQWUsRUFDZixRQUF3QixFQUN4QixhQUE2QjtRQUU3QixNQUFNLE1BQU0sR0FBc0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDeEUsTUFBTSxDQUFDLElBQUksR0FBRyxpQkFBaUIsQ0FBQztRQUNoQyxJQUFJLE1BQU0sRUFBRTtZQUNWLE1BQU0sQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDN0M7YUFBTTtZQUNMLE1BQU0sQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1NBQ2xCO1FBRUQsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDcEIsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDcEIsSUFBSSxRQUFRLEVBQUU7WUFDWixNQUFNLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQzNDO1FBQ0QsSUFBSSxhQUFhLEVBQUU7WUFDakIsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxhQUFhLENBQUMsQ0FBQztTQUNqRDtRQUVELFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRDs7O09BR0c7SUFDSyxXQUFXLENBQUMsTUFBYztRQUNoQyxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDaEIsTUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0QyxJQUFJLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3hCLE1BQU07Z0JBQ0osR0FBRztvQkFDSCxTQUFTO3lCQUNOLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7eUJBQzNELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNoQjtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7Ozs7WUF0REYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7NENBRWMsTUFBTSxTQUFDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEV4dGVybmFsSnNGaWxlTG9hZGVyIHtcbiAgY29uc3RydWN0b3IoQEluamVjdChET0NVTUVOVCkgcHJvdGVjdGVkIGRvY3VtZW50OiBhbnkpIHt9XG5cbiAgLyoqXG4gICAqIExvYWRzIGEgamF2YXNjcmlwdCBmcm9tIGFuIGV4dGVybmFsIFVSTFxuICAgKiBAcGFyYW0gc3JjIFVSTCBmb3IgdGhlIHNjcmlwdCB0byBiZSBsb2FkZWRcbiAgICogQHBhcmFtIHBhcmFtcyBhZGRpdGlvbmFsIHBhcmFtZXRlcnMgdG8gYmUgYXR0YWNoZWQgdG8gdGhlIGdpdmVuIFVSTFxuICAgKiBAcGFyYW0gY2FsbGJhY2sgYSBmdW5jdGlvbiB0byBiZSBpbnZva2VkIGFmdGVyIHRoZSBzY3JpcHQgaGFzIGJlZW4gbG9hZGVkXG4gICAqIEBwYXJhbSBlcnJvckNhbGxiYWNrIGZ1bmN0aW9uIHRvIGJlIGludm9rZWQgYWZ0ZXIgZXJyb3IgZHVyaW5nIHNjcmlwdCBsb2FkaW5nXG4gICAqL1xuICBwdWJsaWMgbG9hZChcbiAgICBzcmM6IHN0cmluZyxcbiAgICBwYXJhbXM/OiBPYmplY3QsXG4gICAgY2FsbGJhY2s/OiBFdmVudExpc3RlbmVyLFxuICAgIGVycm9yQ2FsbGJhY2s/OiBFdmVudExpc3RlbmVyXG4gICk6IHZvaWQge1xuICAgIGNvbnN0IHNjcmlwdDogSFRNTFNjcmlwdEVsZW1lbnQgPSB0aGlzLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgIHNjcmlwdC50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XG4gICAgaWYgKHBhcmFtcykge1xuICAgICAgc2NyaXB0LnNyYyA9IHNyYyArIHRoaXMucGFyc2VQYXJhbXMocGFyYW1zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2NyaXB0LnNyYyA9IHNyYztcbiAgICB9XG5cbiAgICBzY3JpcHQuYXN5bmMgPSB0cnVlO1xuICAgIHNjcmlwdC5kZWZlciA9IHRydWU7XG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBzY3JpcHQuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgaWYgKGVycm9yQ2FsbGJhY2spIHtcbiAgICAgIHNjcmlwdC5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIGVycm9yQ2FsbGJhY2spO1xuICAgIH1cblxuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXJzZXMgdGhlIGdpdmVuIG9iamVjdCB3aXRoIHBhcmFtZXRlcnMgdG8gYSBzdHJpbmcgXCJwYXJhbTE9dmFsdWUxJnBhcmFtMj12YWx1ZTJcIlxuICAgKiBAcGFyYW0gcGFyYW1zIG9iamVjdCBjb250YWluaW5nIHBhcmFtZXRlcnNcbiAgICovXG4gIHByaXZhdGUgcGFyc2VQYXJhbXMocGFyYW1zOiBPYmplY3QpOiBzdHJpbmcge1xuICAgIGxldCByZXN1bHQgPSAnJztcbiAgICBjb25zdCBrZXlzQXJyYXkgPSBPYmplY3Qua2V5cyhwYXJhbXMpO1xuICAgIGlmIChrZXlzQXJyYXkubGVuZ3RoID4gMCkge1xuICAgICAgcmVzdWx0ID1cbiAgICAgICAgJz8nICtcbiAgICAgICAga2V5c0FycmF5XG4gICAgICAgICAgLm1hcCgoa2V5KSA9PiBlbmNvZGVVUkkoa2V5KSArICc9JyArIGVuY29kZVVSSShwYXJhbXNba2V5XSkpXG4gICAgICAgICAgLmpvaW4oJyYnKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufVxuIl19
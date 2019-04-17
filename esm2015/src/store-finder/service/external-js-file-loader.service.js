/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
export class ExternalJsFileLoader {
    /**
     * @param {?} document
     */
    constructor(document) {
        this.document = document;
    }
    /**
     * Loads a javascript from an external URL
     * @param {?} src URL for the script to be loaded
     * @param {?=} params additional parameters to be attached to the given URL
     * @param {?=} callback a function to be invoked after the script has been loaded
     * @return {?}
     */
    load(src, params, callback) {
        /** @type {?} */
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
     * @private
     * @param {?} params object containing parameters
     * @return {?}
     */
    parseParams(params) {
        /** @type {?} */
        let result = '';
        /** @type {?} */
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
}
ExternalJsFileLoader.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ExternalJsFileLoader.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ExternalJsFileLoader.prototype.document;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZXJuYWwtanMtZmlsZS1sb2FkZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zdG9yZS1maW5kZXIvc2VydmljZS9leHRlcm5hbC1qcy1maWxlLWxvYWRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHM0MsTUFBTSxPQUFPLG9CQUFvQjs7OztJQUMvQixZQUFzQyxRQUFhO1FBQWIsYUFBUSxHQUFSLFFBQVEsQ0FBSztJQUFHLENBQUM7Ozs7Ozs7O0lBUWhELElBQUksQ0FBQyxHQUFXLEVBQUUsTUFBZSxFQUFFLFFBQXdCOztjQUMxRCxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDO1FBQ3BELE1BQU0sQ0FBQyxJQUFJLEdBQUcsaUJBQWlCLENBQUM7UUFDaEMsSUFBSSxNQUFNLEVBQUU7WUFDVixNQUFNLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzdDO2FBQU07WUFDTCxNQUFNLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztTQUNsQjtRQUVELE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksUUFBUSxFQUFFO1lBQ1osTUFBTSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztTQUMzQztRQUVELFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Ozs7Ozs7SUFNTyxXQUFXLENBQUMsTUFBYzs7WUFDNUIsTUFBTSxHQUFHLEVBQUU7O2NBQ1QsU0FBUyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3JDLElBQUksU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDeEIsTUFBTTtnQkFDSixHQUFHO29CQUNILFNBQVM7eUJBQ04sR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7eUJBQ3pELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNoQjtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7OztZQTNDRixVQUFVOzs7OzRDQUVJLE1BQU0sU0FBQyxRQUFROzs7Ozs7O0lBQWhCLHdDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRXh0ZXJuYWxKc0ZpbGVMb2FkZXIge1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnkpIHt9XG5cbiAgLyoqXG4gICAqIExvYWRzIGEgamF2YXNjcmlwdCBmcm9tIGFuIGV4dGVybmFsIFVSTFxuICAgKiBAcGFyYW0gc3JjIFVSTCBmb3IgdGhlIHNjcmlwdCB0byBiZSBsb2FkZWRcbiAgICogQHBhcmFtIHBhcmFtcyBhZGRpdGlvbmFsIHBhcmFtZXRlcnMgdG8gYmUgYXR0YWNoZWQgdG8gdGhlIGdpdmVuIFVSTFxuICAgKiBAcGFyYW0gY2FsbGJhY2sgYSBmdW5jdGlvbiB0byBiZSBpbnZva2VkIGFmdGVyIHRoZSBzY3JpcHQgaGFzIGJlZW4gbG9hZGVkXG4gICAqL1xuICBwdWJsaWMgbG9hZChzcmM6IHN0cmluZywgcGFyYW1zPzogT2JqZWN0LCBjYWxsYmFjaz86IEV2ZW50TGlzdGVuZXIpOiB2b2lkIHtcbiAgICBjb25zdCBzY3JpcHQgPSB0aGlzLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgIHNjcmlwdC50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XG4gICAgaWYgKHBhcmFtcykge1xuICAgICAgc2NyaXB0LnNyYyA9IHNyYyArIHRoaXMucGFyc2VQYXJhbXMocGFyYW1zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2NyaXB0LnNyYyA9IHNyYztcbiAgICB9XG5cbiAgICBzY3JpcHQuYXN5bmMgPSB0cnVlO1xuICAgIHNjcmlwdC5kZWZlciA9IHRydWU7XG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBzY3JpcHQuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gIH1cblxuICAvKipcbiAgICogUGFyc2VzIHRoZSBnaXZlbiBvYmplY3Qgd2l0aCBwYXJhbWV0ZXJzIHRvIGEgc3RyaW5nIFwicGFyYW0xPXZhbHVlMSZwYXJhbTI9dmFsdWUyXCJcbiAgICogQHBhcmFtIHBhcmFtcyBvYmplY3QgY29udGFpbmluZyBwYXJhbWV0ZXJzXG4gICAqL1xuICBwcml2YXRlIHBhcnNlUGFyYW1zKHBhcmFtczogT2JqZWN0KTogc3RyaW5nIHtcbiAgICBsZXQgcmVzdWx0ID0gJyc7XG4gICAgY29uc3Qga2V5c0FycmF5ID0gT2JqZWN0LmtleXMocGFyYW1zKTtcbiAgICBpZiAoa2V5c0FycmF5Lmxlbmd0aCA+IDApIHtcbiAgICAgIHJlc3VsdCA9XG4gICAgICAgICc/JyArXG4gICAgICAgIGtleXNBcnJheVxuICAgICAgICAgIC5tYXAoa2V5ID0+IGVuY29kZVVSSShrZXkpICsgJz0nICsgZW5jb2RlVVJJKHBhcmFtc1trZXldKSlcbiAgICAgICAgICAuam9pbignJicpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG4iXX0=
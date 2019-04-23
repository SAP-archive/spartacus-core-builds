/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { mockTranslate } from './mock-translate';
export class MockTranslationService {
    /**
     * @param {?} key
     * @param {?=} options
     * @param {?=} _whitespaceUntilLoaded
     * @return {?}
     */
    translate(key, options = {}, _whitespaceUntilLoaded = false) {
        return new Observable(subscriber => {
            /** @type {?} */
            const value = mockTranslate(key, options);
            subscriber.next(value);
            subscriber.complete();
        });
    }
    /**
     * @param {?} _chunks
     * @return {?}
     */
    loadChunks(_chunks) {
        return Promise.resolve();
    }
}
MockTranslationService.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jay10cmFuc2xhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2kxOG4vdGVzdGluZy9tb2NrLXRyYW5zbGF0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVsQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFHakQsTUFBTSxPQUFPLHNCQUFzQjs7Ozs7OztJQUNqQyxTQUFTLENBQ1AsR0FBVyxFQUNYLFVBQWUsRUFBRSxFQUNqQix5QkFBa0MsS0FBSztRQUV2QyxPQUFPLElBQUksVUFBVSxDQUFTLFVBQVUsQ0FBQyxFQUFFOztrQkFDbkMsS0FBSyxHQUFHLGFBQWEsQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDO1lBQ3pDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdkIsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsT0FBMEI7UUFDbkMsT0FBTyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7O1lBaEJGLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBUcmFuc2xhdGlvblNlcnZpY2UgfSBmcm9tICcuLi90cmFuc2xhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IG1vY2tUcmFuc2xhdGUgfSBmcm9tICcuL21vY2stdHJhbnNsYXRlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1vY2tUcmFuc2xhdGlvblNlcnZpY2UgaW1wbGVtZW50cyBUcmFuc2xhdGlvblNlcnZpY2Uge1xuICB0cmFuc2xhdGUoXG4gICAga2V5OiBzdHJpbmcsXG4gICAgb3B0aW9uczogYW55ID0ge30sXG4gICAgX3doaXRlc3BhY2VVbnRpbExvYWRlZDogYm9vbGVhbiA9IGZhbHNlXG4gICk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlPHN0cmluZz4oc3Vic2NyaWJlciA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IG1vY2tUcmFuc2xhdGUoa2V5LCBvcHRpb25zKTtcbiAgICAgIHN1YnNjcmliZXIubmV4dCh2YWx1ZSk7XG4gICAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gICAgfSk7XG4gIH1cblxuICBsb2FkQ2h1bmtzKF9jaHVua3M6IHN0cmluZyB8IHN0cmluZ1tdKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH1cbn1cbiJdfQ==
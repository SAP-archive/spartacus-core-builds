/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { mockTranslate } from './mock-translate';
var MockTranslationService = /** @class */ (function () {
    function MockTranslationService() {
    }
    /**
     * @param {?} key
     * @param {?=} options
     * @param {?=} _whitespaceUntilLoaded
     * @return {?}
     */
    MockTranslationService.prototype.translate = /**
     * @param {?} key
     * @param {?=} options
     * @param {?=} _whitespaceUntilLoaded
     * @return {?}
     */
    function (key, options, _whitespaceUntilLoaded) {
        if (options === void 0) { options = {}; }
        if (_whitespaceUntilLoaded === void 0) { _whitespaceUntilLoaded = false; }
        return new Observable(function (subscriber) {
            /** @type {?} */
            var value = mockTranslate(key, options);
            subscriber.next(value);
            subscriber.complete();
        });
    };
    /**
     * @param {?} _namespaces
     * @return {?}
     */
    MockTranslationService.prototype.loadNamespaces = /**
     * @param {?} _namespaces
     * @return {?}
     */
    function (_namespaces) {
        return Promise.resolve();
    };
    MockTranslationService.decorators = [
        { type: Injectable }
    ];
    return MockTranslationService;
}());
export { MockTranslationService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jay10cmFuc2xhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2kxOG4vdGVzdGluZy9tb2NrLXRyYW5zbGF0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVsQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFakQ7SUFBQTtJQWlCQSxDQUFDOzs7Ozs7O0lBZkMsMENBQVM7Ozs7OztJQUFULFVBQ0UsR0FBVyxFQUNYLE9BQWlCLEVBQ2pCLHNCQUF1QztRQUR2Qyx3QkFBQSxFQUFBLFlBQWlCO1FBQ2pCLHVDQUFBLEVBQUEsOEJBQXVDO1FBRXZDLE9BQU8sSUFBSSxVQUFVLENBQVMsVUFBQSxVQUFVOztnQkFDaEMsS0FBSyxHQUFHLGFBQWEsQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDO1lBQ3pDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdkIsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCwrQ0FBYzs7OztJQUFkLFVBQWUsV0FBOEI7UUFDM0MsT0FBTyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7Z0JBaEJGLFVBQVU7O0lBaUJYLDZCQUFDO0NBQUEsQUFqQkQsSUFpQkM7U0FoQlksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgVHJhbnNsYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vdHJhbnNsYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBtb2NrVHJhbnNsYXRlIH0gZnJvbSAnLi9tb2NrLXRyYW5zbGF0ZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNb2NrVHJhbnNsYXRpb25TZXJ2aWNlIGltcGxlbWVudHMgVHJhbnNsYXRpb25TZXJ2aWNlIHtcbiAgdHJhbnNsYXRlKFxuICAgIGtleTogc3RyaW5nLFxuICAgIG9wdGlvbnM6IGFueSA9IHt9LFxuICAgIF93aGl0ZXNwYWNlVW50aWxMb2FkZWQ6IGJvb2xlYW4gPSBmYWxzZVxuICApOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZTxzdHJpbmc+KHN1YnNjcmliZXIgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSBtb2NrVHJhbnNsYXRlKGtleSwgb3B0aW9ucyk7XG4gICAgICBzdWJzY3JpYmVyLm5leHQodmFsdWUpO1xuICAgICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgbG9hZE5hbWVzcGFjZXMoX25hbWVzcGFjZXM6IHN0cmluZyB8IHN0cmluZ1tdKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH1cbn1cbiJdfQ==
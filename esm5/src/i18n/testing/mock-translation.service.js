import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { mockTranslate } from './mock-translate';
var MockTranslationService = /** @class */ (function () {
    function MockTranslationService() {
    }
    MockTranslationService.prototype.translate = function (key, options, _whitespaceUntilLoaded) {
        if (options === void 0) { options = {}; }
        if (_whitespaceUntilLoaded === void 0) { _whitespaceUntilLoaded = false; }
        return new Observable(function (subscriber) {
            var value = mockTranslate(key, options);
            subscriber.next(value);
            subscriber.complete();
        });
    };
    MockTranslationService.prototype.loadChunks = function (_chunks) {
        return Promise.resolve();
    };
    MockTranslationService = __decorate([
        Injectable()
    ], MockTranslationService);
    return MockTranslationService;
}());
export { MockTranslationService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9jay10cmFuc2xhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2kxOG4vdGVzdGluZy9tb2NrLXRyYW5zbGF0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUVsQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFHakQ7SUFBQTtJQWdCQSxDQUFDO0lBZkMsMENBQVMsR0FBVCxVQUNFLEdBQVcsRUFDWCxPQUFpQixFQUNqQixzQkFBdUM7UUFEdkMsd0JBQUEsRUFBQSxZQUFpQjtRQUNqQix1Q0FBQSxFQUFBLDhCQUF1QztRQUV2QyxPQUFPLElBQUksVUFBVSxDQUFTLFVBQUMsVUFBVTtZQUN2QyxJQUFNLEtBQUssR0FBRyxhQUFhLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQzFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdkIsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELDJDQUFVLEdBQVYsVUFBVyxPQUEwQjtRQUNuQyxPQUFPLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBZlUsc0JBQXNCO1FBRGxDLFVBQVUsRUFBRTtPQUNBLHNCQUFzQixDQWdCbEM7SUFBRCw2QkFBQztDQUFBLEFBaEJELElBZ0JDO1NBaEJZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFRyYW5zbGF0aW9uU2VydmljZSB9IGZyb20gJy4uL3RyYW5zbGF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgbW9ja1RyYW5zbGF0ZSB9IGZyb20gJy4vbW9jay10cmFuc2xhdGUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTW9ja1RyYW5zbGF0aW9uU2VydmljZSBpbXBsZW1lbnRzIFRyYW5zbGF0aW9uU2VydmljZSB7XG4gIHRyYW5zbGF0ZShcbiAgICBrZXk6IHN0cmluZyxcbiAgICBvcHRpb25zOiBhbnkgPSB7fSxcbiAgICBfd2hpdGVzcGFjZVVudGlsTG9hZGVkOiBib29sZWFuID0gZmFsc2VcbiAgKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGU8c3RyaW5nPigoc3Vic2NyaWJlcikgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSBtb2NrVHJhbnNsYXRlKGtleSwgb3B0aW9ucyk7XG4gICAgICBzdWJzY3JpYmVyLm5leHQodmFsdWUpO1xuICAgICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgbG9hZENodW5rcyhfY2h1bmtzOiBzdHJpbmcgfCBzdHJpbmdbXSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9XG59XG4iXX0=
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { UrlService } from './url.service';
var UrlPipe = /** @class */ (function () {
    function UrlPipe(urlService) {
        this.urlService = urlService;
    }
    /**
     * @param {?} commands
     * @param {?=} options
     * @return {?}
     */
    UrlPipe.prototype.transform = /**
     * @param {?} commands
     * @param {?=} options
     * @return {?}
     */
    function (commands, options) {
        if (options === void 0) { options = {}; }
        return this.urlService.generateUrl(commands, options);
    };
    UrlPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'cxUrl',
                },] }
    ];
    /** @nocollapse */
    UrlPipe.ctorParameters = function () { return [
        { type: UrlService }
    ]; };
    return UrlPipe;
}());
export { UrlPipe };
if (false) {
    /**
     * @type {?}
     * @private
     */
    UrlPipe.prototype.urlService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJsLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcm91dGluZy9jb25maWd1cmFibGUtcm91dGVzL3VybC10cmFuc2xhdGlvbi91cmwucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQztJQUlFLGlCQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO0lBQUcsQ0FBQzs7Ozs7O0lBRTlDLDJCQUFTOzs7OztJQUFULFVBQVUsUUFBcUIsRUFBRSxPQUFrQztRQUFsQyx3QkFBQSxFQUFBLFlBQWtDO1FBQ2pFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3hELENBQUM7O2dCQVJGLElBQUksU0FBQztvQkFDSixJQUFJLEVBQUUsT0FBTztpQkFDZDs7OztnQkFMUSxVQUFVOztJQVluQixjQUFDO0NBQUEsQUFURCxJQVNDO1NBTlksT0FBTzs7Ozs7O0lBQ04sNkJBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVXJsU2VydmljZSB9IGZyb20gJy4vdXJsLnNlcnZpY2UnO1xuaW1wb3J0IHsgVXJsQ29tbWFuZHMsIFVybEdlbmVyYXRpb25PcHRpb25zIH0gZnJvbSAnLi91cmwtY29tbWFuZCc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ2N4VXJsJyxcbn0pXG5leHBvcnQgY2xhc3MgVXJsUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHVybFNlcnZpY2U6IFVybFNlcnZpY2UpIHt9XG5cbiAgdHJhbnNmb3JtKGNvbW1hbmRzOiBVcmxDb21tYW5kcywgb3B0aW9uczogVXJsR2VuZXJhdGlvbk9wdGlvbnMgPSB7fSk6IGFueVtdIHtcbiAgICByZXR1cm4gdGhpcy51cmxTZXJ2aWNlLmdlbmVyYXRlVXJsKGNvbW1hbmRzLCBvcHRpb25zKTtcbiAgfVxufVxuIl19
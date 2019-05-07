/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { UrlService } from './url.service';
export class UrlPipe {
    /**
     * @param {?} urlService
     */
    constructor(urlService) {
        this.urlService = urlService;
    }
    /**
     * @param {?} commands
     * @param {?=} options
     * @return {?}
     */
    transform(commands, options = {}) {
        return this.urlService.generateUrl(commands, options);
    }
}
UrlPipe.decorators = [
    { type: Pipe, args: [{
                name: 'cxUrl',
            },] }
];
/** @nocollapse */
UrlPipe.ctorParameters = () => [
    { type: UrlService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    UrlPipe.prototype.urlService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJsLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcm91dGluZy9jb25maWd1cmFibGUtcm91dGVzL3VybC10cmFuc2xhdGlvbi91cmwucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU0zQyxNQUFNLE9BQU8sT0FBTzs7OztJQUNsQixZQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO0lBQUcsQ0FBQzs7Ozs7O0lBRTlDLFNBQVMsQ0FBQyxRQUFxQixFQUFFLFVBQWdDLEVBQUU7UUFDakUsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7O1lBUkYsSUFBSSxTQUFDO2dCQUNKLElBQUksRUFBRSxPQUFPO2FBQ2Q7Ozs7WUFMUSxVQUFVOzs7Ozs7O0lBT0wsNkJBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVXJsU2VydmljZSB9IGZyb20gJy4vdXJsLnNlcnZpY2UnO1xuaW1wb3J0IHsgVXJsQ29tbWFuZHMsIFVybEdlbmVyYXRpb25PcHRpb25zIH0gZnJvbSAnLi91cmwtY29tbWFuZCc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ2N4VXJsJyxcbn0pXG5leHBvcnQgY2xhc3MgVXJsUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHVybFNlcnZpY2U6IFVybFNlcnZpY2UpIHt9XG5cbiAgdHJhbnNmb3JtKGNvbW1hbmRzOiBVcmxDb21tYW5kcywgb3B0aW9uczogVXJsR2VuZXJhdGlvbk9wdGlvbnMgPSB7fSk6IGFueVtdIHtcbiAgICByZXR1cm4gdGhpcy51cmxTZXJ2aWNlLmdlbmVyYXRlVXJsKGNvbW1hbmRzLCBvcHRpb25zKTtcbiAgfVxufVxuIl19
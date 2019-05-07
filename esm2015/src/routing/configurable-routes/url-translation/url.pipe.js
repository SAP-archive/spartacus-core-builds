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
     * @return {?}
     */
    transform(commands) {
        return this.urlService.generateUrl(commands);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJsLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcm91dGluZy9jb25maWd1cmFibGUtcm91dGVzL3VybC10cmFuc2xhdGlvbi91cmwucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU0zQyxNQUFNLE9BQU8sT0FBTzs7OztJQUNsQixZQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO0lBQUcsQ0FBQzs7Ozs7SUFFOUMsU0FBUyxDQUFDLFFBQXFCO1FBQzdCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7O1lBUkYsSUFBSSxTQUFDO2dCQUNKLElBQUksRUFBRSxPQUFPO2FBQ2Q7Ozs7WUFMUSxVQUFVOzs7Ozs7O0lBT0wsNkJBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVXJsU2VydmljZSB9IGZyb20gJy4vdXJsLnNlcnZpY2UnO1xuaW1wb3J0IHsgVXJsQ29tbWFuZHMgfSBmcm9tICcuL3VybC1jb21tYW5kJztcblxuQFBpcGUoe1xuICBuYW1lOiAnY3hVcmwnLFxufSlcbmV4cG9ydCBjbGFzcyBVcmxQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdXJsU2VydmljZTogVXJsU2VydmljZSkge31cblxuICB0cmFuc2Zvcm0oY29tbWFuZHM6IFVybENvbW1hbmRzKTogYW55W10ge1xuICAgIHJldHVybiB0aGlzLnVybFNlcnZpY2UuZ2VuZXJhdGVVcmwoY29tbWFuZHMpO1xuICB9XG59XG4iXX0=
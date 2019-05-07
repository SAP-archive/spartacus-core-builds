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
     * @return {?}
     */
    UrlPipe.prototype.transform = /**
     * @param {?} commands
     * @return {?}
     */
    function (commands) {
        return this.urlService.generateUrl(commands);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJsLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcm91dGluZy9jb25maWd1cmFibGUtcm91dGVzL3VybC10cmFuc2xhdGlvbi91cmwucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQztJQUlFLGlCQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO0lBQUcsQ0FBQzs7Ozs7SUFFOUMsMkJBQVM7Ozs7SUFBVCxVQUFVLFFBQXFCO1FBQzdCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7Z0JBUkYsSUFBSSxTQUFDO29CQUNKLElBQUksRUFBRSxPQUFPO2lCQUNkOzs7O2dCQUxRLFVBQVU7O0lBWW5CLGNBQUM7Q0FBQSxBQVRELElBU0M7U0FOWSxPQUFPOzs7Ozs7SUFDTiw2QkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBVcmxTZXJ2aWNlIH0gZnJvbSAnLi91cmwuc2VydmljZSc7XG5pbXBvcnQgeyBVcmxDb21tYW5kcyB9IGZyb20gJy4vdXJsLWNvbW1hbmQnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdjeFVybCcsXG59KVxuZXhwb3J0IGNsYXNzIFVybFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB1cmxTZXJ2aWNlOiBVcmxTZXJ2aWNlKSB7fVxuXG4gIHRyYW5zZm9ybShjb21tYW5kczogVXJsQ29tbWFuZHMpOiBhbnlbXSB7XG4gICAgcmV0dXJuIHRoaXMudXJsU2VydmljZS5nZW5lcmF0ZVVybChjb21tYW5kcyk7XG4gIH1cbn1cbiJdfQ==
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { UrlTranslationService } from './url-translation.service';
var TranslateUrlPipe = /** @class */ (function () {
    function TranslateUrlPipe(urlTranslator) {
        this.urlTranslator = urlTranslator;
    }
    /**
     * @param {?} options
     * @return {?}
     */
    TranslateUrlPipe.prototype.transform = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        return this.urlTranslator.translate(options);
    };
    TranslateUrlPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'cxTranslateUrl',
                },] }
    ];
    /** @nocollapse */
    TranslateUrlPipe.ctorParameters = function () { return [
        { type: UrlTranslationService }
    ]; };
    return TranslateUrlPipe;
}());
export { TranslateUrlPipe };
if (false) {
    /**
     * @type {?}
     * @private
     */
    TranslateUrlPipe.prototype.urlTranslator;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLXVybC5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3JvdXRpbmcvY29uZmlndXJhYmxlLXJvdXRlcy91cmwtdHJhbnNsYXRpb24vdHJhbnNsYXRlLXVybC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUdsRTtJQUlFLDBCQUFvQixhQUFvQztRQUFwQyxrQkFBYSxHQUFiLGFBQWEsQ0FBdUI7SUFBRyxDQUFDOzs7OztJQUU1RCxvQ0FBUzs7OztJQUFULFVBQVUsT0FBNEI7UUFDcEMsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMvQyxDQUFDOztnQkFSRixJQUFJLFNBQUM7b0JBQ0osSUFBSSxFQUFFLGdCQUFnQjtpQkFDdkI7Ozs7Z0JBTFEscUJBQXFCOztJQVk5Qix1QkFBQztDQUFBLEFBVEQsSUFTQztTQU5ZLGdCQUFnQjs7Ozs7O0lBQ2YseUNBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVXJsVHJhbnNsYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi91cmwtdHJhbnNsYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGVVcmxPcHRpb25zIH0gZnJvbSAnLi90cmFuc2xhdGUtdXJsLW9wdGlvbnMnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdjeFRyYW5zbGF0ZVVybCcsXG59KVxuZXhwb3J0IGNsYXNzIFRyYW5zbGF0ZVVybFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB1cmxUcmFuc2xhdG9yOiBVcmxUcmFuc2xhdGlvblNlcnZpY2UpIHt9XG5cbiAgdHJhbnNmb3JtKG9wdGlvbnM6IFRyYW5zbGF0ZVVybE9wdGlvbnMpOiBzdHJpbmcgfCBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIHRoaXMudXJsVHJhbnNsYXRvci50cmFuc2xhdGUob3B0aW9ucyk7XG4gIH1cbn1cbiJdfQ==
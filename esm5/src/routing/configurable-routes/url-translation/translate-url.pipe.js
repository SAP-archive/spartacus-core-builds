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
     * @param {?} commands
     * @param {?=} options
     * @return {?}
     */
    TranslateUrlPipe.prototype.transform = /**
     * @param {?} commands
     * @param {?=} options
     * @return {?}
     */
    function (commands, options) {
        if (options === void 0) { options = {}; }
        return this.urlTranslator.translate(commands, options);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLXVybC5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3JvdXRpbmcvY29uZmlndXJhYmxlLXJvdXRlcy91cmwtdHJhbnNsYXRpb24vdHJhbnNsYXRlLXVybC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQU1sRTtJQUlFLDBCQUFvQixhQUFvQztRQUFwQyxrQkFBYSxHQUFiLGFBQWEsQ0FBdUI7SUFBRyxDQUFDOzs7Ozs7SUFFNUQsb0NBQVM7Ozs7O0lBQVQsVUFDRSxRQUE4QixFQUM5QixPQUFpQztRQUFqQyx3QkFBQSxFQUFBLFlBQWlDO1FBRWpDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ3pELENBQUM7O2dCQVhGLElBQUksU0FBQztvQkFDSixJQUFJLEVBQUUsZ0JBQWdCO2lCQUN2Qjs7OztnQkFSUSxxQkFBcUI7O0lBa0I5Qix1QkFBQztDQUFBLEFBWkQsSUFZQztTQVRZLGdCQUFnQjs7Ozs7O0lBQ2YseUNBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVXJsVHJhbnNsYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi91cmwtdHJhbnNsYXRpb24uc2VydmljZSc7XG5pbXBvcnQge1xuICBUcmFuc2xhdGVVcmxDb21tYW5kcyxcbiAgVHJhbnNsYXRlVXJsT3B0aW9ucyxcbn0gZnJvbSAnLi90cmFuc2xhdGUtdXJsLWNvbW1hbmRzJztcblxuQFBpcGUoe1xuICBuYW1lOiAnY3hUcmFuc2xhdGVVcmwnLFxufSlcbmV4cG9ydCBjbGFzcyBUcmFuc2xhdGVVcmxQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdXJsVHJhbnNsYXRvcjogVXJsVHJhbnNsYXRpb25TZXJ2aWNlKSB7fVxuXG4gIHRyYW5zZm9ybShcbiAgICBjb21tYW5kczogVHJhbnNsYXRlVXJsQ29tbWFuZHMsXG4gICAgb3B0aW9uczogVHJhbnNsYXRlVXJsT3B0aW9ucyA9IHt9XG4gICk6IGFueVtdIHtcbiAgICByZXR1cm4gdGhpcy51cmxUcmFuc2xhdG9yLnRyYW5zbGF0ZShjb21tYW5kcywgb3B0aW9ucyk7XG4gIH1cbn1cbiJdfQ==
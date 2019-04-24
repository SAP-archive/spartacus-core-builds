/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { UrlTranslationService } from './url-translation.service';
export class TranslateUrlPipe {
    /**
     * @param {?} urlTranslator
     */
    constructor(urlTranslator) {
        this.urlTranslator = urlTranslator;
    }
    /**
     * @param {?} commands
     * @param {?=} options
     * @return {?}
     */
    transform(commands, options = {}) {
        return this.urlTranslator.translate(commands, options);
    }
}
TranslateUrlPipe.decorators = [
    { type: Pipe, args: [{
                name: 'cxTranslateUrl',
            },] }
];
/** @nocollapse */
TranslateUrlPipe.ctorParameters = () => [
    { type: UrlTranslationService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    TranslateUrlPipe.prototype.urlTranslator;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLXVybC5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3JvdXRpbmcvY29uZmlndXJhYmxlLXJvdXRlcy91cmwtdHJhbnNsYXRpb24vdHJhbnNsYXRlLXVybC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQVNsRSxNQUFNLE9BQU8sZ0JBQWdCOzs7O0lBQzNCLFlBQW9CLGFBQW9DO1FBQXBDLGtCQUFhLEdBQWIsYUFBYSxDQUF1QjtJQUFHLENBQUM7Ozs7OztJQUU1RCxTQUFTLENBQ1AsUUFBOEIsRUFDOUIsVUFBK0IsRUFBRTtRQUVqQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN6RCxDQUFDOzs7WUFYRixJQUFJLFNBQUM7Z0JBQ0osSUFBSSxFQUFFLGdCQUFnQjthQUN2Qjs7OztZQVJRLHFCQUFxQjs7Ozs7OztJQVVoQix5Q0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBVcmxUcmFuc2xhdGlvblNlcnZpY2UgfSBmcm9tICcuL3VybC10cmFuc2xhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7XG4gIFRyYW5zbGF0ZVVybENvbW1hbmRzLFxuICBUcmFuc2xhdGVVcmxPcHRpb25zLFxufSBmcm9tICcuL3RyYW5zbGF0ZS11cmwtY29tbWFuZHMnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdjeFRyYW5zbGF0ZVVybCcsXG59KVxuZXhwb3J0IGNsYXNzIFRyYW5zbGF0ZVVybFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB1cmxUcmFuc2xhdG9yOiBVcmxUcmFuc2xhdGlvblNlcnZpY2UpIHt9XG5cbiAgdHJhbnNmb3JtKFxuICAgIGNvbW1hbmRzOiBUcmFuc2xhdGVVcmxDb21tYW5kcyxcbiAgICBvcHRpb25zOiBUcmFuc2xhdGVVcmxPcHRpb25zID0ge31cbiAgKTogYW55W10ge1xuICAgIHJldHVybiB0aGlzLnVybFRyYW5zbGF0b3IudHJhbnNsYXRlKGNvbW1hbmRzLCBvcHRpb25zKTtcbiAgfVxufVxuIl19
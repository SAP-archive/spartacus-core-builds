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
     * @param {?} options
     * @return {?}
     */
    transform(options) {
        return this.urlTranslator.translate(options);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLXVybC5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3JvdXRpbmcvY29uZmlndXJhYmxlLXJvdXRlcy91cmwtdHJhbnNsYXRpb24vdHJhbnNsYXRlLXVybC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUNwRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQU1sRSxNQUFNLE9BQU8sZ0JBQWdCOzs7O0lBQzNCLFlBQW9CLGFBQW9DO1FBQXBDLGtCQUFhLEdBQWIsYUFBYSxDQUF1QjtJQUFHLENBQUM7Ozs7O0lBRTVELFNBQVMsQ0FBQyxPQUE0QjtRQUNwQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQy9DLENBQUM7OztZQVJGLElBQUksU0FBQztnQkFDSixJQUFJLEVBQUUsZ0JBQWdCO2FBQ3ZCOzs7O1lBTFEscUJBQXFCOzs7Ozs7O0lBT2hCLHlDQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFVybFRyYW5zbGF0aW9uU2VydmljZSB9IGZyb20gJy4vdXJsLXRyYW5zbGF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgVHJhbnNsYXRlVXJsT3B0aW9ucyB9IGZyb20gJy4vdHJhbnNsYXRlLXVybC1vcHRpb25zJztcblxuQFBpcGUoe1xuICBuYW1lOiAnY3hUcmFuc2xhdGVVcmwnLFxufSlcbmV4cG9ydCBjbGFzcyBUcmFuc2xhdGVVcmxQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdXJsVHJhbnNsYXRvcjogVXJsVHJhbnNsYXRpb25TZXJ2aWNlKSB7fVxuXG4gIHRyYW5zZm9ybShvcHRpb25zOiBUcmFuc2xhdGVVcmxPcHRpb25zKTogc3RyaW5nIHwgc3RyaW5nW10ge1xuICAgIHJldHVybiB0aGlzLnVybFRyYW5zbGF0b3IudHJhbnNsYXRlKG9wdGlvbnMpO1xuICB9XG59XG4iXX0=
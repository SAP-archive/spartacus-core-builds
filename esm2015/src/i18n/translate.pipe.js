/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Pipe, } from '@angular/core';
import { TranslationService } from './translation.service';
import { shallowEqualObjects } from './utils/shallow-equal-objects';
export class TranslatePipe {
    /**
     * @param {?} service
     * @param {?} cd
     */
    constructor(service, cd) {
        this.service = service;
        this.cd = cd;
    }
    /**
     * @param {?} input
     * @param {?=} options
     * @return {?}
     */
    transform(input, options = {}) {
        if (((/** @type {?} */ (input))).raw) {
            return ((/** @type {?} */ (input))).raw;
        }
        /** @type {?} */
        const key = typeof input === 'string' ? input : input.key;
        if (typeof input !== 'string') {
            options = Object.assign({}, options, input.params);
        }
        this.translate(key, options);
        return this.translatedValue;
    }
    /**
     * @private
     * @param {?} key
     * @param {?} options
     * @return {?}
     */
    translate(key, options) {
        if (key !== this.lastKey ||
            !shallowEqualObjects(options, this.lastOptions)) {
            this.lastKey = key;
            this.lastOptions = options;
            if (this.sub) {
                this.sub.unsubscribe();
            }
            this.sub = this.service
                .translate(key, options, true)
                .subscribe(val => this.markForCheck(val));
        }
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    markForCheck(value) {
        this.translatedValue = value;
        this.cd.markForCheck();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }
}
TranslatePipe.decorators = [
    { type: Pipe, args: [{ name: 'cxTranslate', pure: false },] }
];
/** @nocollapse */
TranslatePipe.ctorParameters = () => [
    { type: TranslationService },
    { type: ChangeDetectorRef }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    TranslatePipe.prototype.lastKey;
    /**
     * @type {?}
     * @private
     */
    TranslatePipe.prototype.lastOptions;
    /**
     * @type {?}
     * @private
     */
    TranslatePipe.prototype.translatedValue;
    /**
     * @type {?}
     * @private
     */
    TranslatePipe.prototype.sub;
    /**
     * @type {?}
     * @private
     */
    TranslatePipe.prototype.service;
    /**
     * @type {?}
     * @private
     */
    TranslatePipe.prototype.cd;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvaTE4bi90cmFuc2xhdGUucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLGlCQUFpQixFQUVqQixJQUFJLEdBRUwsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDM0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFJcEUsTUFBTSxPQUFPLGFBQWE7Ozs7O0lBTXhCLFlBQ1UsT0FBMkIsRUFDM0IsRUFBcUI7UUFEckIsWUFBTyxHQUFQLE9BQU8sQ0FBb0I7UUFDM0IsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7SUFDNUIsQ0FBQzs7Ozs7O0lBRUosU0FBUyxDQUNQLEtBQTRCLEVBQzVCLFVBQThCLEVBQUU7UUFFaEMsSUFBSSxDQUFDLG1CQUFBLEtBQUssRUFBZ0IsQ0FBQyxDQUFDLEdBQUcsRUFBRTtZQUMvQixPQUFPLENBQUMsbUJBQUEsS0FBSyxFQUFnQixDQUFDLENBQUMsR0FBRyxDQUFDO1NBQ3BDOztjQUVLLEdBQUcsR0FBRyxPQUFPLEtBQUssS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUc7UUFDekQsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7WUFDN0IsT0FBTyxxQkFBUSxPQUFPLEVBQUssS0FBSyxDQUFDLE1BQU0sQ0FBRSxDQUFDO1NBQzNDO1FBRUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDN0IsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQzlCLENBQUM7Ozs7Ozs7SUFFTyxTQUFTLENBQUMsR0FBUSxFQUFFLE9BQWU7UUFDekMsSUFDRSxHQUFHLEtBQUssSUFBSSxDQUFDLE9BQU87WUFDcEIsQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUMvQztZQUNBLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1lBQ25CLElBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDO1lBRTNCLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRTtnQkFDWixJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQ3hCO1lBQ0QsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTztpQkFDcEIsU0FBUyxDQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDO2lCQUM3QixTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDN0M7SUFDSCxDQUFDOzs7Ozs7SUFFTyxZQUFZLENBQUMsS0FBYTtRQUNoQyxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztRQUM3QixJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ1osSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUN4QjtJQUNILENBQUM7OztZQXZERixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUU7Ozs7WUFKakMsa0JBQWtCO1lBTnpCLGlCQUFpQjs7Ozs7OztJQVlqQixnQ0FBd0I7Ozs7O0lBQ3hCLG9DQUE0Qjs7Ozs7SUFDNUIsd0NBQWdDOzs7OztJQUNoQyw0QkFBMEI7Ozs7O0lBR3hCLGdDQUFtQzs7Ozs7SUFDbkMsMkJBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIE9uRGVzdHJveSxcbiAgUGlwZSxcbiAgUGlwZVRyYW5zZm9ybSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFRyYW5zbGF0aW9uU2VydmljZSB9IGZyb20gJy4vdHJhbnNsYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBzaGFsbG93RXF1YWxPYmplY3RzIH0gZnJvbSAnLi91dGlscy9zaGFsbG93LWVxdWFsLW9iamVjdHMnO1xuaW1wb3J0IHsgVHJhbnNsYXRhYmxlLCBUcmFuc2xhdGFibGVQYXJhbXMgfSBmcm9tICcuL3RyYW5zbGF0YWJsZSc7XG5cbkBQaXBlKHsgbmFtZTogJ2N4VHJhbnNsYXRlJywgcHVyZTogZmFsc2UgfSlcbmV4cG9ydCBjbGFzcyBUcmFuc2xhdGVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBsYXN0S2V5OiBzdHJpbmc7XG4gIHByaXZhdGUgbGFzdE9wdGlvbnM6IG9iamVjdDtcbiAgcHJpdmF0ZSB0cmFuc2xhdGVkVmFsdWU6IHN0cmluZztcbiAgcHJpdmF0ZSBzdWI6IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHNlcnZpY2U6IFRyYW5zbGF0aW9uU2VydmljZSxcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZlxuICApIHt9XG5cbiAgdHJhbnNmb3JtKFxuICAgIGlucHV0OiBUcmFuc2xhdGFibGUgfCBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNsYXRhYmxlUGFyYW1zID0ge31cbiAgKTogc3RyaW5nIHtcbiAgICBpZiAoKGlucHV0IGFzIFRyYW5zbGF0YWJsZSkucmF3KSB7XG4gICAgICByZXR1cm4gKGlucHV0IGFzIFRyYW5zbGF0YWJsZSkucmF3O1xuICAgIH1cblxuICAgIGNvbnN0IGtleSA9IHR5cGVvZiBpbnB1dCA9PT0gJ3N0cmluZycgPyBpbnB1dCA6IGlucHV0LmtleTtcbiAgICBpZiAodHlwZW9mIGlucHV0ICE9PSAnc3RyaW5nJykge1xuICAgICAgb3B0aW9ucyA9IHsgLi4ub3B0aW9ucywgLi4uaW5wdXQucGFyYW1zIH07XG4gICAgfVxuXG4gICAgdGhpcy50cmFuc2xhdGUoa2V5LCBvcHRpb25zKTtcbiAgICByZXR1cm4gdGhpcy50cmFuc2xhdGVkVmFsdWU7XG4gIH1cblxuICBwcml2YXRlIHRyYW5zbGF0ZShrZXk6IGFueSwgb3B0aW9uczogb2JqZWN0KSB7XG4gICAgaWYgKFxuICAgICAga2V5ICE9PSB0aGlzLmxhc3RLZXkgfHxcbiAgICAgICFzaGFsbG93RXF1YWxPYmplY3RzKG9wdGlvbnMsIHRoaXMubGFzdE9wdGlvbnMpXG4gICAgKSB7XG4gICAgICB0aGlzLmxhc3RLZXkgPSBrZXk7XG4gICAgICB0aGlzLmxhc3RPcHRpb25zID0gb3B0aW9ucztcblxuICAgICAgaWYgKHRoaXMuc3ViKSB7XG4gICAgICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgICB9XG4gICAgICB0aGlzLnN1YiA9IHRoaXMuc2VydmljZVxuICAgICAgICAudHJhbnNsYXRlKGtleSwgb3B0aW9ucywgdHJ1ZSlcbiAgICAgICAgLnN1YnNjcmliZSh2YWwgPT4gdGhpcy5tYXJrRm9yQ2hlY2sodmFsKSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBtYXJrRm9yQ2hlY2sodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMudHJhbnNsYXRlZFZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnN1Yikge1xuICAgICAgdGhpcy5zdWIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==
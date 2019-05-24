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
     * @protected
     */
    TranslatePipe.prototype.service;
    /**
     * @type {?}
     * @protected
     */
    TranslatePipe.prototype.cd;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvaTE4bi90cmFuc2xhdGUucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLGlCQUFpQixFQUVqQixJQUFJLEdBRUwsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDM0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFJcEUsTUFBTSxPQUFPLGFBQWE7Ozs7O0lBTXhCLFlBQ1ksT0FBMkIsRUFDM0IsRUFBcUI7UUFEckIsWUFBTyxHQUFQLE9BQU8sQ0FBb0I7UUFDM0IsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7SUFDOUIsQ0FBQzs7Ozs7O0lBRUosU0FBUyxDQUNQLEtBQTRCLEVBQzVCLFVBQThCLEVBQUU7UUFFaEMsSUFBSSxDQUFDLG1CQUFBLEtBQUssRUFBZ0IsQ0FBQyxDQUFDLEdBQUcsRUFBRTtZQUMvQixPQUFPLENBQUMsbUJBQUEsS0FBSyxFQUFnQixDQUFDLENBQUMsR0FBRyxDQUFDO1NBQ3BDOztjQUVLLEdBQUcsR0FBRyxPQUFPLEtBQUssS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUc7UUFDekQsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7WUFDN0IsT0FBTyxxQkFBUSxPQUFPLEVBQUssS0FBSyxDQUFDLE1BQU0sQ0FBRSxDQUFDO1NBQzNDO1FBRUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDN0IsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQzlCLENBQUM7Ozs7Ozs7SUFFTyxTQUFTLENBQUMsR0FBUSxFQUFFLE9BQWU7UUFDekMsSUFDRSxHQUFHLEtBQUssSUFBSSxDQUFDLE9BQU87WUFDcEIsQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUMvQztZQUNBLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1lBQ25CLElBQUksQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDO1lBRTNCLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRTtnQkFDWixJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQ3hCO1lBQ0QsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsT0FBTztpQkFDcEIsU0FBUyxDQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDO2lCQUM3QixTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDN0M7SUFDSCxDQUFDOzs7Ozs7SUFFTyxZQUFZLENBQUMsS0FBYTtRQUNoQyxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztRQUM3QixJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ1osSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUN4QjtJQUNILENBQUM7OztZQXZERixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUU7Ozs7WUFKakMsa0JBQWtCO1lBTnpCLGlCQUFpQjs7Ozs7OztJQVlqQixnQ0FBd0I7Ozs7O0lBQ3hCLG9DQUE0Qjs7Ozs7SUFDNUIsd0NBQWdDOzs7OztJQUNoQyw0QkFBMEI7Ozs7O0lBR3hCLGdDQUFxQzs7Ozs7SUFDckMsMkJBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIE9uRGVzdHJveSxcbiAgUGlwZSxcbiAgUGlwZVRyYW5zZm9ybSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFRyYW5zbGF0aW9uU2VydmljZSB9IGZyb20gJy4vdHJhbnNsYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBzaGFsbG93RXF1YWxPYmplY3RzIH0gZnJvbSAnLi91dGlscy9zaGFsbG93LWVxdWFsLW9iamVjdHMnO1xuaW1wb3J0IHsgVHJhbnNsYXRhYmxlLCBUcmFuc2xhdGFibGVQYXJhbXMgfSBmcm9tICcuL3RyYW5zbGF0YWJsZSc7XG5cbkBQaXBlKHsgbmFtZTogJ2N4VHJhbnNsYXRlJywgcHVyZTogZmFsc2UgfSlcbmV4cG9ydCBjbGFzcyBUcmFuc2xhdGVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBsYXN0S2V5OiBzdHJpbmc7XG4gIHByaXZhdGUgbGFzdE9wdGlvbnM6IG9iamVjdDtcbiAgcHJpdmF0ZSB0cmFuc2xhdGVkVmFsdWU6IHN0cmluZztcbiAgcHJpdmF0ZSBzdWI6IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgc2VydmljZTogVHJhbnNsYXRpb25TZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjZDogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7fVxuXG4gIHRyYW5zZm9ybShcbiAgICBpbnB1dDogVHJhbnNsYXRhYmxlIHwgc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zbGF0YWJsZVBhcmFtcyA9IHt9XG4gICk6IHN0cmluZyB7XG4gICAgaWYgKChpbnB1dCBhcyBUcmFuc2xhdGFibGUpLnJhdykge1xuICAgICAgcmV0dXJuIChpbnB1dCBhcyBUcmFuc2xhdGFibGUpLnJhdztcbiAgICB9XG5cbiAgICBjb25zdCBrZXkgPSB0eXBlb2YgaW5wdXQgPT09ICdzdHJpbmcnID8gaW5wdXQgOiBpbnB1dC5rZXk7XG4gICAgaWYgKHR5cGVvZiBpbnB1dCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIG9wdGlvbnMgPSB7IC4uLm9wdGlvbnMsIC4uLmlucHV0LnBhcmFtcyB9O1xuICAgIH1cblxuICAgIHRoaXMudHJhbnNsYXRlKGtleSwgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNsYXRlZFZhbHVlO1xuICB9XG5cbiAgcHJpdmF0ZSB0cmFuc2xhdGUoa2V5OiBhbnksIG9wdGlvbnM6IG9iamVjdCkge1xuICAgIGlmIChcbiAgICAgIGtleSAhPT0gdGhpcy5sYXN0S2V5IHx8XG4gICAgICAhc2hhbGxvd0VxdWFsT2JqZWN0cyhvcHRpb25zLCB0aGlzLmxhc3RPcHRpb25zKVxuICAgICkge1xuICAgICAgdGhpcy5sYXN0S2V5ID0ga2V5O1xuICAgICAgdGhpcy5sYXN0T3B0aW9ucyA9IG9wdGlvbnM7XG5cbiAgICAgIGlmICh0aGlzLnN1Yikge1xuICAgICAgICB0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xuICAgICAgfVxuICAgICAgdGhpcy5zdWIgPSB0aGlzLnNlcnZpY2VcbiAgICAgICAgLnRyYW5zbGF0ZShrZXksIG9wdGlvbnMsIHRydWUpXG4gICAgICAgIC5zdWJzY3JpYmUodmFsID0+IHRoaXMubWFya0ZvckNoZWNrKHZhbCkpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgbWFya0ZvckNoZWNrKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnRyYW5zbGF0ZWRWYWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zdWIpIHtcbiAgICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=
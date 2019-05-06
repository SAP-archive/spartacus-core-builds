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
        let key;
        if (typeof input === 'string') {
            key = input;
        }
        else {
            key = input.key;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvaTE4bi90cmFuc2xhdGUucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLGlCQUFpQixFQUVqQixJQUFJLEdBRUwsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDM0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFJcEUsTUFBTSxPQUFPLGFBQWE7Ozs7O0lBTXhCLFlBQ1UsT0FBMkIsRUFDM0IsRUFBcUI7UUFEckIsWUFBTyxHQUFQLE9BQU8sQ0FBb0I7UUFDM0IsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7SUFDNUIsQ0FBQzs7Ozs7O0lBRUosU0FBUyxDQUNQLEtBQTRCLEVBQzVCLFVBQThCLEVBQUU7UUFFaEMsSUFBSSxDQUFDLG1CQUFBLEtBQUssRUFBZ0IsQ0FBQyxDQUFDLEdBQUcsRUFBRTtZQUMvQixPQUFPLENBQUMsbUJBQUEsS0FBSyxFQUFnQixDQUFDLENBQUMsR0FBRyxDQUFDO1NBQ3BDOztZQUVHLEdBQVc7UUFDZixJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtZQUM3QixHQUFHLEdBQUcsS0FBSyxDQUFDO1NBQ2I7YUFBTTtZQUNMLEdBQUcsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDO1lBQ2hCLE9BQU8scUJBQVEsT0FBTyxFQUFLLEtBQUssQ0FBQyxNQUFNLENBQUUsQ0FBQztTQUMzQztRQUVELElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzdCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUM5QixDQUFDOzs7Ozs7O0lBRU8sU0FBUyxDQUFDLEdBQVEsRUFBRSxPQUFlO1FBQ3pDLElBQ0UsR0FBRyxLQUFLLElBQUksQ0FBQyxPQUFPO1lBQ3BCLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsRUFDL0M7WUFDQSxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztZQUNuQixJQUFJLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQztZQUUzQixJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUU7Z0JBQ1osSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQzthQUN4QjtZQUNELElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU87aUJBQ3BCLFNBQVMsQ0FBQyxHQUFHLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQztpQkFDN0IsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQzdDO0lBQ0gsQ0FBQzs7Ozs7O0lBRU8sWUFBWSxDQUFDLEtBQWE7UUFDaEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7UUFDN0IsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNaLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDeEI7SUFDSCxDQUFDOzs7WUExREYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFOzs7O1lBSmpDLGtCQUFrQjtZQU56QixpQkFBaUI7Ozs7Ozs7SUFZakIsZ0NBQXdCOzs7OztJQUN4QixvQ0FBNEI7Ozs7O0lBQzVCLHdDQUFnQzs7Ozs7SUFDaEMsNEJBQTBCOzs7OztJQUd4QixnQ0FBbUM7Ozs7O0lBQ25DLDJCQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBPbkRlc3Ryb3ksXG4gIFBpcGUsXG4gIFBpcGVUcmFuc2Zvcm0sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBUcmFuc2xhdGlvblNlcnZpY2UgfSBmcm9tICcuL3RyYW5zbGF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgc2hhbGxvd0VxdWFsT2JqZWN0cyB9IGZyb20gJy4vdXRpbHMvc2hhbGxvdy1lcXVhbC1vYmplY3RzJztcbmltcG9ydCB7IFRyYW5zbGF0YWJsZSwgVHJhbnNsYXRhYmxlUGFyYW1zIH0gZnJvbSAnLi90cmFuc2xhdGFibGUnO1xuXG5AUGlwZSh7IG5hbWU6ICdjeFRyYW5zbGF0ZScsIHB1cmU6IGZhbHNlIH0pXG5leHBvcnQgY2xhc3MgVHJhbnNsYXRlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0sIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgbGFzdEtleTogc3RyaW5nO1xuICBwcml2YXRlIGxhc3RPcHRpb25zOiBvYmplY3Q7XG4gIHByaXZhdGUgdHJhbnNsYXRlZFZhbHVlOiBzdHJpbmc7XG4gIHByaXZhdGUgc3ViOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzZXJ2aWNlOiBUcmFuc2xhdGlvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7fVxuXG4gIHRyYW5zZm9ybShcbiAgICBpbnB1dDogVHJhbnNsYXRhYmxlIHwgc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zbGF0YWJsZVBhcmFtcyA9IHt9XG4gICk6IHN0cmluZyB7XG4gICAgaWYgKChpbnB1dCBhcyBUcmFuc2xhdGFibGUpLnJhdykge1xuICAgICAgcmV0dXJuIChpbnB1dCBhcyBUcmFuc2xhdGFibGUpLnJhdztcbiAgICB9XG5cbiAgICBsZXQga2V5OiBzdHJpbmc7XG4gICAgaWYgKHR5cGVvZiBpbnB1dCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGtleSA9IGlucHV0O1xuICAgIH0gZWxzZSB7XG4gICAgICBrZXkgPSBpbnB1dC5rZXk7XG4gICAgICBvcHRpb25zID0geyAuLi5vcHRpb25zLCAuLi5pbnB1dC5wYXJhbXMgfTtcbiAgICB9XG5cbiAgICB0aGlzLnRyYW5zbGF0ZShrZXksIG9wdGlvbnMpO1xuICAgIHJldHVybiB0aGlzLnRyYW5zbGF0ZWRWYWx1ZTtcbiAgfVxuXG4gIHByaXZhdGUgdHJhbnNsYXRlKGtleTogYW55LCBvcHRpb25zOiBvYmplY3QpIHtcbiAgICBpZiAoXG4gICAgICBrZXkgIT09IHRoaXMubGFzdEtleSB8fFxuICAgICAgIXNoYWxsb3dFcXVhbE9iamVjdHMob3B0aW9ucywgdGhpcy5sYXN0T3B0aW9ucylcbiAgICApIHtcbiAgICAgIHRoaXMubGFzdEtleSA9IGtleTtcbiAgICAgIHRoaXMubGFzdE9wdGlvbnMgPSBvcHRpb25zO1xuXG4gICAgICBpZiAodGhpcy5zdWIpIHtcbiAgICAgICAgdGhpcy5zdWIudW5zdWJzY3JpYmUoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc3ViID0gdGhpcy5zZXJ2aWNlXG4gICAgICAgIC50cmFuc2xhdGUoa2V5LCBvcHRpb25zLCB0cnVlKVxuICAgICAgICAuc3Vic2NyaWJlKHZhbCA9PiB0aGlzLm1hcmtGb3JDaGVjayh2YWwpKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG1hcmtGb3JDaGVjayh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy50cmFuc2xhdGVkVmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc3ViKSB7XG4gICAgICB0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxufVxuIl19
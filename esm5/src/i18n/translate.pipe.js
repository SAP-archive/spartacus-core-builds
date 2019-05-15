/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectorRef, Pipe, } from '@angular/core';
import { TranslationService } from './translation.service';
import { shallowEqualObjects } from './utils/shallow-equal-objects';
var TranslatePipe = /** @class */ (function () {
    function TranslatePipe(service, cd) {
        this.service = service;
        this.cd = cd;
    }
    /**
     * @param {?} input
     * @param {?=} options
     * @return {?}
     */
    TranslatePipe.prototype.transform = /**
     * @param {?} input
     * @param {?=} options
     * @return {?}
     */
    function (input, options) {
        if (options === void 0) { options = {}; }
        if (((/** @type {?} */ (input))).raw) {
            return ((/** @type {?} */ (input))).raw;
        }
        /** @type {?} */
        var key = typeof input === 'string' ? input : input.key;
        if (typeof input !== 'string') {
            options = tslib_1.__assign({}, options, input.params);
        }
        this.translate(key, options);
        return this.translatedValue;
    };
    /**
     * @private
     * @param {?} key
     * @param {?} options
     * @return {?}
     */
    TranslatePipe.prototype.translate = /**
     * @private
     * @param {?} key
     * @param {?} options
     * @return {?}
     */
    function (key, options) {
        var _this = this;
        if (key !== this.lastKey ||
            !shallowEqualObjects(options, this.lastOptions)) {
            this.lastKey = key;
            this.lastOptions = options;
            if (this.sub) {
                this.sub.unsubscribe();
            }
            this.sub = this.service
                .translate(key, options, true)
                .subscribe(function (val) { return _this.markForCheck(val); });
        }
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    TranslatePipe.prototype.markForCheck = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.translatedValue = value;
        this.cd.markForCheck();
    };
    /**
     * @return {?}
     */
    TranslatePipe.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    };
    TranslatePipe.decorators = [
        { type: Pipe, args: [{ name: 'cxTranslate', pure: false },] }
    ];
    /** @nocollapse */
    TranslatePipe.ctorParameters = function () { return [
        { type: TranslationService },
        { type: ChangeDetectorRef }
    ]; };
    return TranslatePipe;
}());
export { TranslatePipe };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvaTE4bi90cmFuc2xhdGUucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxpQkFBaUIsRUFFakIsSUFBSSxHQUVMLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzNELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBR3BFO0lBT0UsdUJBQ1UsT0FBMkIsRUFDM0IsRUFBcUI7UUFEckIsWUFBTyxHQUFQLE9BQU8sQ0FBb0I7UUFDM0IsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7SUFDNUIsQ0FBQzs7Ozs7O0lBRUosaUNBQVM7Ozs7O0lBQVQsVUFDRSxLQUE0QixFQUM1QixPQUFnQztRQUFoQyx3QkFBQSxFQUFBLFlBQWdDO1FBRWhDLElBQUksQ0FBQyxtQkFBQSxLQUFLLEVBQWdCLENBQUMsQ0FBQyxHQUFHLEVBQUU7WUFDL0IsT0FBTyxDQUFDLG1CQUFBLEtBQUssRUFBZ0IsQ0FBQyxDQUFDLEdBQUcsQ0FBQztTQUNwQzs7WUFFSyxHQUFHLEdBQUcsT0FBTyxLQUFLLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHO1FBQ3pELElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1lBQzdCLE9BQU8sd0JBQVEsT0FBTyxFQUFLLEtBQUssQ0FBQyxNQUFNLENBQUUsQ0FBQztTQUMzQztRQUVELElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzdCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUM5QixDQUFDOzs7Ozs7O0lBRU8saUNBQVM7Ozs7OztJQUFqQixVQUFrQixHQUFRLEVBQUUsT0FBZTtRQUEzQyxpQkFlQztRQWRDLElBQ0UsR0FBRyxLQUFLLElBQUksQ0FBQyxPQUFPO1lBQ3BCLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsRUFDL0M7WUFDQSxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztZQUNuQixJQUFJLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQztZQUUzQixJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUU7Z0JBQ1osSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQzthQUN4QjtZQUNELElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU87aUJBQ3BCLFNBQVMsQ0FBQyxHQUFHLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQztpQkFDN0IsU0FBUyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsS0FBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsRUFBdEIsQ0FBc0IsQ0FBQyxDQUFDO1NBQzdDO0lBQ0gsQ0FBQzs7Ozs7O0lBRU8sb0NBQVk7Ozs7O0lBQXBCLFVBQXFCLEtBQWE7UUFDaEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7UUFDN0IsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsbUNBQVc7OztJQUFYO1FBQ0UsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ1osSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUN4QjtJQUNILENBQUM7O2dCQXZERixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUU7Ozs7Z0JBSmpDLGtCQUFrQjtnQkFOekIsaUJBQWlCOztJQWtFbkIsb0JBQUM7Q0FBQSxBQXhERCxJQXdEQztTQXZEWSxhQUFhOzs7Ozs7SUFDeEIsZ0NBQXdCOzs7OztJQUN4QixvQ0FBNEI7Ozs7O0lBQzVCLHdDQUFnQzs7Ozs7SUFDaEMsNEJBQTBCOzs7OztJQUd4QixnQ0FBbUM7Ozs7O0lBQ25DLDJCQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBPbkRlc3Ryb3ksXG4gIFBpcGUsXG4gIFBpcGVUcmFuc2Zvcm0sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBUcmFuc2xhdGlvblNlcnZpY2UgfSBmcm9tICcuL3RyYW5zbGF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgc2hhbGxvd0VxdWFsT2JqZWN0cyB9IGZyb20gJy4vdXRpbHMvc2hhbGxvdy1lcXVhbC1vYmplY3RzJztcbmltcG9ydCB7IFRyYW5zbGF0YWJsZSwgVHJhbnNsYXRhYmxlUGFyYW1zIH0gZnJvbSAnLi90cmFuc2xhdGFibGUnO1xuXG5AUGlwZSh7IG5hbWU6ICdjeFRyYW5zbGF0ZScsIHB1cmU6IGZhbHNlIH0pXG5leHBvcnQgY2xhc3MgVHJhbnNsYXRlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0sIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgbGFzdEtleTogc3RyaW5nO1xuICBwcml2YXRlIGxhc3RPcHRpb25zOiBvYmplY3Q7XG4gIHByaXZhdGUgdHJhbnNsYXRlZFZhbHVlOiBzdHJpbmc7XG4gIHByaXZhdGUgc3ViOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzZXJ2aWNlOiBUcmFuc2xhdGlvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWZcbiAgKSB7fVxuXG4gIHRyYW5zZm9ybShcbiAgICBpbnB1dDogVHJhbnNsYXRhYmxlIHwgc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zbGF0YWJsZVBhcmFtcyA9IHt9XG4gICk6IHN0cmluZyB7XG4gICAgaWYgKChpbnB1dCBhcyBUcmFuc2xhdGFibGUpLnJhdykge1xuICAgICAgcmV0dXJuIChpbnB1dCBhcyBUcmFuc2xhdGFibGUpLnJhdztcbiAgICB9XG5cbiAgICBjb25zdCBrZXkgPSB0eXBlb2YgaW5wdXQgPT09ICdzdHJpbmcnID8gaW5wdXQgOiBpbnB1dC5rZXk7XG4gICAgaWYgKHR5cGVvZiBpbnB1dCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIG9wdGlvbnMgPSB7IC4uLm9wdGlvbnMsIC4uLmlucHV0LnBhcmFtcyB9O1xuICAgIH1cblxuICAgIHRoaXMudHJhbnNsYXRlKGtleSwgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNsYXRlZFZhbHVlO1xuICB9XG5cbiAgcHJpdmF0ZSB0cmFuc2xhdGUoa2V5OiBhbnksIG9wdGlvbnM6IG9iamVjdCkge1xuICAgIGlmIChcbiAgICAgIGtleSAhPT0gdGhpcy5sYXN0S2V5IHx8XG4gICAgICAhc2hhbGxvd0VxdWFsT2JqZWN0cyhvcHRpb25zLCB0aGlzLmxhc3RPcHRpb25zKVxuICAgICkge1xuICAgICAgdGhpcy5sYXN0S2V5ID0ga2V5O1xuICAgICAgdGhpcy5sYXN0T3B0aW9ucyA9IG9wdGlvbnM7XG5cbiAgICAgIGlmICh0aGlzLnN1Yikge1xuICAgICAgICB0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xuICAgICAgfVxuICAgICAgdGhpcy5zdWIgPSB0aGlzLnNlcnZpY2VcbiAgICAgICAgLnRyYW5zbGF0ZShrZXksIG9wdGlvbnMsIHRydWUpXG4gICAgICAgIC5zdWJzY3JpYmUodmFsID0+IHRoaXMubWFya0ZvckNoZWNrKHZhbCkpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgbWFya0ZvckNoZWNrKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnRyYW5zbGF0ZWRWYWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zdWIpIHtcbiAgICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=
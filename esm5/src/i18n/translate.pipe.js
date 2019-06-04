/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectorRef, Pipe, } from '@angular/core';
import { TranslationService } from './translation.service';
import { shallowEqualObjects } from '../util/compare-equal-objects';
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
                .subscribe((/**
             * @param {?} val
             * @return {?}
             */
            function (val) { return _this.markForCheck(val); }));
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
     * @protected
     */
    TranslatePipe.prototype.service;
    /**
     * @type {?}
     * @protected
     */
    TranslatePipe.prototype.cd;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvaTE4bi90cmFuc2xhdGUucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxpQkFBaUIsRUFFakIsSUFBSSxHQUVMLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzNELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBR3BFO0lBT0UsdUJBQ1ksT0FBMkIsRUFDM0IsRUFBcUI7UUFEckIsWUFBTyxHQUFQLE9BQU8sQ0FBb0I7UUFDM0IsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7SUFDOUIsQ0FBQzs7Ozs7O0lBRUosaUNBQVM7Ozs7O0lBQVQsVUFDRSxLQUE0QixFQUM1QixPQUFnQztRQUFoQyx3QkFBQSxFQUFBLFlBQWdDO1FBRWhDLElBQUksQ0FBQyxtQkFBQSxLQUFLLEVBQWdCLENBQUMsQ0FBQyxHQUFHLEVBQUU7WUFDL0IsT0FBTyxDQUFDLG1CQUFBLEtBQUssRUFBZ0IsQ0FBQyxDQUFDLEdBQUcsQ0FBQztTQUNwQzs7WUFFSyxHQUFHLEdBQUcsT0FBTyxLQUFLLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHO1FBQ3pELElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1lBQzdCLE9BQU8sd0JBQVEsT0FBTyxFQUFLLEtBQUssQ0FBQyxNQUFNLENBQUUsQ0FBQztTQUMzQztRQUVELElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzdCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUM5QixDQUFDOzs7Ozs7O0lBRU8saUNBQVM7Ozs7OztJQUFqQixVQUFrQixHQUFRLEVBQUUsT0FBZTtRQUEzQyxpQkFlQztRQWRDLElBQ0UsR0FBRyxLQUFLLElBQUksQ0FBQyxPQUFPO1lBQ3BCLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsRUFDL0M7WUFDQSxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztZQUNuQixJQUFJLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQztZQUUzQixJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUU7Z0JBQ1osSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQzthQUN4QjtZQUNELElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU87aUJBQ3BCLFNBQVMsQ0FBQyxHQUFHLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQztpQkFDN0IsU0FBUzs7OztZQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsS0FBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsRUFBdEIsQ0FBc0IsRUFBQyxDQUFDO1NBQzdDO0lBQ0gsQ0FBQzs7Ozs7O0lBRU8sb0NBQVk7Ozs7O0lBQXBCLFVBQXFCLEtBQWE7UUFDaEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7UUFDN0IsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsbUNBQVc7OztJQUFYO1FBQ0UsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ1osSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUN4QjtJQUNILENBQUM7O2dCQXZERixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUU7Ozs7Z0JBSmpDLGtCQUFrQjtnQkFOekIsaUJBQWlCOztJQWtFbkIsb0JBQUM7Q0FBQSxBQXhERCxJQXdEQztTQXZEWSxhQUFhOzs7Ozs7SUFDeEIsZ0NBQXdCOzs7OztJQUN4QixvQ0FBNEI7Ozs7O0lBQzVCLHdDQUFnQzs7Ozs7SUFDaEMsNEJBQTBCOzs7OztJQUd4QixnQ0FBcUM7Ozs7O0lBQ3JDLDJCQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBPbkRlc3Ryb3ksXG4gIFBpcGUsXG4gIFBpcGVUcmFuc2Zvcm0sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBUcmFuc2xhdGlvblNlcnZpY2UgfSBmcm9tICcuL3RyYW5zbGF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgc2hhbGxvd0VxdWFsT2JqZWN0cyB9IGZyb20gJy4uL3V0aWwvY29tcGFyZS1lcXVhbC1vYmplY3RzJztcbmltcG9ydCB7IFRyYW5zbGF0YWJsZSwgVHJhbnNsYXRhYmxlUGFyYW1zIH0gZnJvbSAnLi90cmFuc2xhdGFibGUnO1xuXG5AUGlwZSh7IG5hbWU6ICdjeFRyYW5zbGF0ZScsIHB1cmU6IGZhbHNlIH0pXG5leHBvcnQgY2xhc3MgVHJhbnNsYXRlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0sIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgbGFzdEtleTogc3RyaW5nO1xuICBwcml2YXRlIGxhc3RPcHRpb25zOiBvYmplY3Q7XG4gIHByaXZhdGUgdHJhbnNsYXRlZFZhbHVlOiBzdHJpbmc7XG4gIHByaXZhdGUgc3ViOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHNlcnZpY2U6IFRyYW5zbGF0aW9uU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY2Q6IENoYW5nZURldGVjdG9yUmVmXG4gICkge31cblxuICB0cmFuc2Zvcm0oXG4gICAgaW5wdXQ6IFRyYW5zbGF0YWJsZSB8IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2xhdGFibGVQYXJhbXMgPSB7fVxuICApOiBzdHJpbmcge1xuICAgIGlmICgoaW5wdXQgYXMgVHJhbnNsYXRhYmxlKS5yYXcpIHtcbiAgICAgIHJldHVybiAoaW5wdXQgYXMgVHJhbnNsYXRhYmxlKS5yYXc7XG4gICAgfVxuXG4gICAgY29uc3Qga2V5ID0gdHlwZW9mIGlucHV0ID09PSAnc3RyaW5nJyA/IGlucHV0IDogaW5wdXQua2V5O1xuICAgIGlmICh0eXBlb2YgaW5wdXQgIT09ICdzdHJpbmcnKSB7XG4gICAgICBvcHRpb25zID0geyAuLi5vcHRpb25zLCAuLi5pbnB1dC5wYXJhbXMgfTtcbiAgICB9XG5cbiAgICB0aGlzLnRyYW5zbGF0ZShrZXksIG9wdGlvbnMpO1xuICAgIHJldHVybiB0aGlzLnRyYW5zbGF0ZWRWYWx1ZTtcbiAgfVxuXG4gIHByaXZhdGUgdHJhbnNsYXRlKGtleTogYW55LCBvcHRpb25zOiBvYmplY3QpIHtcbiAgICBpZiAoXG4gICAgICBrZXkgIT09IHRoaXMubGFzdEtleSB8fFxuICAgICAgIXNoYWxsb3dFcXVhbE9iamVjdHMob3B0aW9ucywgdGhpcy5sYXN0T3B0aW9ucylcbiAgICApIHtcbiAgICAgIHRoaXMubGFzdEtleSA9IGtleTtcbiAgICAgIHRoaXMubGFzdE9wdGlvbnMgPSBvcHRpb25zO1xuXG4gICAgICBpZiAodGhpcy5zdWIpIHtcbiAgICAgICAgdGhpcy5zdWIudW5zdWJzY3JpYmUoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc3ViID0gdGhpcy5zZXJ2aWNlXG4gICAgICAgIC50cmFuc2xhdGUoa2V5LCBvcHRpb25zLCB0cnVlKVxuICAgICAgICAuc3Vic2NyaWJlKHZhbCA9PiB0aGlzLm1hcmtGb3JDaGVjayh2YWwpKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG1hcmtGb3JDaGVjayh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy50cmFuc2xhdGVkVmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc3ViKSB7XG4gICAgICB0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxufVxuIl19